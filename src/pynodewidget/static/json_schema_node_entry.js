var n2 = Object.defineProperty;
var r2 = (e, t, r) => t in e ? n2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Sx = (e, t, r) => r2(e, typeof t != "symbol" ? t + "" : t, r);
function o2(e, t) {
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
var fl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ny(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Df = { exports: {} }, fs = {}, jf = { exports: {} }, Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ex;
function i2() {
  if (Ex) return Ae;
  Ex = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.iterator;
  function g(q) {
    return q === null || typeof q != "object" ? null : (q = m && q[m] || q["@@iterator"], typeof q == "function" ? q : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E = Object.assign, y = {};
  function x(q, W, ie) {
    this.props = q, this.context = W, this.refs = y, this.updater = ie || w;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(q, W) {
    if (typeof q != "object" && typeof q != "function" && q != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, q, W, "setState");
  }, x.prototype.forceUpdate = function(q) {
    this.updater.enqueueForceUpdate(this, q, "forceUpdate");
  };
  function S() {
  }
  S.prototype = x.prototype;
  function C(q, W, ie) {
    this.props = q, this.context = W, this.refs = y, this.updater = ie || w;
  }
  var _ = C.prototype = new S();
  _.constructor = C, E(_, x.prototype), _.isPureReactComponent = !0;
  var k = Array.isArray, N = Object.prototype.hasOwnProperty, P = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(q, W, ie) {
    var F, Z = {}, ee = null, K = null;
    if (W != null) for (F in W.ref !== void 0 && (K = W.ref), W.key !== void 0 && (ee = "" + W.key), W) N.call(W, F) && !A.hasOwnProperty(F) && (Z[F] = W[F]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (q && q.defaultProps) for (F in te = q.defaultProps, te) Z[F] === void 0 && (Z[F] = te[F]);
    return { $$typeof: e, type: q, key: ee, ref: K, props: Z, _owner: P.current };
  }
  function D(q, W) {
    return { $$typeof: e, type: q.type, key: W, ref: q.ref, props: q.props, _owner: q._owner };
  }
  function G(q) {
    return typeof q == "object" && q !== null && q.$$typeof === e;
  }
  function B(q) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + q.replace(/[=:]/g, function(ie) {
      return W[ie];
    });
  }
  var V = /\/+/g;
  function X(q, W) {
    return typeof q == "object" && q !== null && q.key != null ? B("" + q.key) : W.toString(36);
  }
  function L(q, W, ie, F, Z) {
    var ee = typeof q;
    (ee === "undefined" || ee === "boolean") && (q = null);
    var K = !1;
    if (q === null) K = !0;
    else switch (ee) {
      case "string":
      case "number":
        K = !0;
        break;
      case "object":
        switch (q.$$typeof) {
          case e:
          case t:
            K = !0;
        }
    }
    if (K) return K = q, Z = Z(K), q = F === "" ? "." + X(K, 0) : F, k(Z) ? (ie = "", q != null && (ie = q.replace(V, "$&/") + "/"), L(Z, W, ie, "", function(ae) {
      return ae;
    })) : Z != null && (G(Z) && (Z = D(Z, ie + (!Z.key || K && K.key === Z.key ? "" : ("" + Z.key).replace(V, "$&/") + "/") + q)), W.push(Z)), 1;
    if (K = 0, F = F === "" ? "." : F + ":", k(q)) for (var te = 0; te < q.length; te++) {
      ee = q[te];
      var se = F + X(ee, te);
      K += L(ee, W, ie, se, Z);
    }
    else if (se = g(q), typeof se == "function") for (q = se.call(q), te = 0; !(ee = q.next()).done; ) ee = ee.value, se = F + X(ee, te++), K += L(ee, W, ie, se, Z);
    else if (ee === "object") throw W = String(q), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(q).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function H(q, W, ie) {
    if (q == null) return q;
    var F = [], Z = 0;
    return L(q, F, "", "", function(ee) {
      return W.call(ie, ee, Z++);
    }), F;
  }
  function $(q) {
    if (q._status === -1) {
      var W = q._result;
      W = W(), W.then(function(ie) {
        (q._status === 0 || q._status === -1) && (q._status = 1, q._result = ie);
      }, function(ie) {
        (q._status === 0 || q._status === -1) && (q._status = 2, q._result = ie);
      }), q._status === -1 && (q._status = 0, q._result = W);
    }
    if (q._status === 1) return q._result.default;
    throw q._result;
  }
  var Y = { current: null }, M = { transition: null }, j = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: M, ReactCurrentOwner: P };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ae.Children = { map: H, forEach: function(q, W, ie) {
    H(q, function() {
      W.apply(this, arguments);
    }, ie);
  }, count: function(q) {
    var W = 0;
    return H(q, function() {
      W++;
    }), W;
  }, toArray: function(q) {
    return H(q, function(W) {
      return W;
    }) || [];
  }, only: function(q) {
    if (!G(q)) throw Error("React.Children.only expected to receive a single React element child.");
    return q;
  } }, Ae.Component = x, Ae.Fragment = r, Ae.Profiler = s, Ae.PureComponent = C, Ae.StrictMode = o, Ae.Suspense = f, Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, Ae.act = Q, Ae.cloneElement = function(q, W, ie) {
    if (q == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + q + ".");
    var F = E({}, q.props), Z = q.key, ee = q.ref, K = q._owner;
    if (W != null) {
      if (W.ref !== void 0 && (ee = W.ref, K = P.current), W.key !== void 0 && (Z = "" + W.key), q.type && q.type.defaultProps) var te = q.type.defaultProps;
      for (se in W) N.call(W, se) && !A.hasOwnProperty(se) && (F[se] = W[se] === void 0 && te !== void 0 ? te[se] : W[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) F.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      F.children = te;
    }
    return { $$typeof: e, type: q.type, key: Z, ref: ee, props: F, _owner: K };
  }, Ae.createContext = function(q) {
    return q = { $$typeof: l, _currentValue: q, _currentValue2: q, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, q.Provider = { $$typeof: a, _context: q }, q.Consumer = q;
  }, Ae.createElement = O, Ae.createFactory = function(q) {
    var W = O.bind(null, q);
    return W.type = q, W;
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(q) {
    return { $$typeof: u, render: q };
  }, Ae.isValidElement = G, Ae.lazy = function(q) {
    return { $$typeof: h, _payload: { _status: -1, _result: q }, _init: $ };
  }, Ae.memo = function(q, W) {
    return { $$typeof: d, type: q, compare: W === void 0 ? null : W };
  }, Ae.startTransition = function(q) {
    var W = M.transition;
    M.transition = {};
    try {
      q();
    } finally {
      M.transition = W;
    }
  }, Ae.unstable_act = Q, Ae.useCallback = function(q, W) {
    return Y.current.useCallback(q, W);
  }, Ae.useContext = function(q) {
    return Y.current.useContext(q);
  }, Ae.useDebugValue = function() {
  }, Ae.useDeferredValue = function(q) {
    return Y.current.useDeferredValue(q);
  }, Ae.useEffect = function(q, W) {
    return Y.current.useEffect(q, W);
  }, Ae.useId = function() {
    return Y.current.useId();
  }, Ae.useImperativeHandle = function(q, W, ie) {
    return Y.current.useImperativeHandle(q, W, ie);
  }, Ae.useInsertionEffect = function(q, W) {
    return Y.current.useInsertionEffect(q, W);
  }, Ae.useLayoutEffect = function(q, W) {
    return Y.current.useLayoutEffect(q, W);
  }, Ae.useMemo = function(q, W) {
    return Y.current.useMemo(q, W);
  }, Ae.useReducer = function(q, W, ie) {
    return Y.current.useReducer(q, W, ie);
  }, Ae.useRef = function(q) {
    return Y.current.useRef(q);
  }, Ae.useState = function(q) {
    return Y.current.useState(q);
  }, Ae.useSyncExternalStore = function(q, W, ie) {
    return Y.current.useSyncExternalStore(q, W, ie);
  }, Ae.useTransition = function() {
    return Y.current.useTransition();
  }, Ae.version = "18.3.1", Ae;
}
var Cx;
function qs() {
  return Cx || (Cx = 1, jf.exports = i2()), jf.exports;
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
var kx;
function s2() {
  if (kx) return fs;
  kx = 1;
  var e = qs(), t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, m = {}, g = null, w = null;
    d !== void 0 && (g = "" + d), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (m[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) m[h] === void 0 && (m[h] = f[h]);
    return { $$typeof: t, type: u, key: g, ref: w, props: m, _owner: s.current };
  }
  return fs.Fragment = r, fs.jsx = l, fs.jsxs = l, fs;
}
var Rx;
function a2() {
  return Rx || (Rx = 1, Df.exports = s2()), Df.exports;
}
var I = a2(), R = qs();
const cn = /* @__PURE__ */ ny(R), ry = /* @__PURE__ */ o2({
  __proto__: null,
  default: cn
}, [R]);
var dl = {}, zf = { exports: {} }, Rt = {}, Ff = { exports: {} }, $f = {};
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
function l2() {
  return Nx || (Nx = 1, (function(e) {
    function t(M, j) {
      var Q = M.length;
      M.push(j);
      e: for (; 0 < Q; ) {
        var q = Q - 1 >>> 1, W = M[q];
        if (0 < s(W, j)) M[q] = j, M[Q] = W, Q = q;
        else break e;
      }
    }
    function r(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var j = M[0], Q = M.pop();
      if (Q !== j) {
        M[0] = Q;
        e: for (var q = 0, W = M.length, ie = W >>> 1; q < ie; ) {
          var F = 2 * (q + 1) - 1, Z = M[F], ee = F + 1, K = M[ee];
          if (0 > s(Z, Q)) ee < W && 0 > s(K, Z) ? (M[q] = K, M[ee] = Q, q = ee) : (M[q] = Z, M[F] = Q, q = F);
          else if (ee < W && 0 > s(K, Q)) M[q] = K, M[ee] = Q, q = ee;
          else break e;
        }
      }
      return j;
    }
    function s(M, j) {
      var Q = M.sortIndex - j.sortIndex;
      return Q !== 0 ? Q : M.id - j.id;
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
    var f = [], d = [], h = 1, m = null, g = 3, w = !1, E = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(M) {
      for (var j = r(d); j !== null; ) {
        if (j.callback === null) o(d);
        else if (j.startTime <= M) o(d), j.sortIndex = j.expirationTime, t(f, j);
        else break;
        j = r(d);
      }
    }
    function k(M) {
      if (y = !1, _(M), !E) if (r(f) !== null) E = !0, $(N);
      else {
        var j = r(d);
        j !== null && Y(k, j.startTime - M);
      }
    }
    function N(M, j) {
      E = !1, y && (y = !1, S(O), O = -1), w = !0;
      var Q = g;
      try {
        for (_(j), m = r(f); m !== null && (!(m.expirationTime > j) || M && !B()); ) {
          var q = m.callback;
          if (typeof q == "function") {
            m.callback = null, g = m.priorityLevel;
            var W = q(m.expirationTime <= j);
            j = e.unstable_now(), typeof W == "function" ? m.callback = W : m === r(f) && o(f), _(j);
          } else o(f);
          m = r(f);
        }
        if (m !== null) var ie = !0;
        else {
          var F = r(d);
          F !== null && Y(k, F.startTime - j), ie = !1;
        }
        return ie;
      } finally {
        m = null, g = Q, w = !1;
      }
    }
    var P = !1, A = null, O = -1, D = 5, G = -1;
    function B() {
      return !(e.unstable_now() - G < D);
    }
    function V() {
      if (A !== null) {
        var M = e.unstable_now();
        G = M;
        var j = !0;
        try {
          j = A(!0, M);
        } finally {
          j ? X() : (P = !1, A = null);
        }
      } else P = !1;
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
    function $(M) {
      A = M, P || (P = !0, X());
    }
    function Y(M, j) {
      O = x(function() {
        M(e.unstable_now());
      }, j);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      E || w || (E = !0, $(N));
    }, e.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < M ? Math.floor(1e3 / M) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(f);
    }, e.unstable_next = function(M) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = g;
      }
      var Q = g;
      g = j;
      try {
        return M();
      } finally {
        g = Q;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(M, j) {
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
      var Q = g;
      g = M;
      try {
        return j();
      } finally {
        g = Q;
      }
    }, e.unstable_scheduleCallback = function(M, j, Q) {
      var q = e.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? q + Q : q) : Q = q, M) {
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
      return W = Q + W, M = { id: h++, callback: j, priorityLevel: M, startTime: Q, expirationTime: W, sortIndex: -1 }, Q > q ? (M.sortIndex = Q, t(d, M), r(f) === null && M === r(d) && (y ? (S(O), O = -1) : y = !0, Y(k, Q - q))) : (M.sortIndex = W, t(f, M), E || w || (E = !0, $(N))), M;
    }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(M) {
      var j = g;
      return function() {
        var Q = g;
        g = j;
        try {
          return M.apply(this, arguments);
        } finally {
          g = Q;
        }
      };
    };
  })($f)), $f;
}
var Px;
function u2() {
  return Px || (Px = 1, Ff.exports = l2()), Ff.exports;
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
var Tx;
function c2() {
  if (Tx) return Rt;
  Tx = 1;
  var e = qs(), t = u2();
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
  var u = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, h = {}, m = {};
  function g(n) {
    return f.call(m, n) ? !0 : f.call(h, n) ? !1 : d.test(n) ? m[n] = !0 : (h[n] = !0, !1);
  }
  function w(n, i, c, p) {
    if (c !== null && c.type === 0) return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return p ? !1 : c !== null ? !c.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function E(n, i, c, p) {
    if (i === null || typeof i > "u" || w(n, i, c, p)) return !0;
    if (p) return !1;
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
  function y(n, i, c, p, v, b, T) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = p, this.attributeNamespace = v, this.mustUseProperty = c, this.propertyName = n, this.type = i, this.sanitizeURL = b, this.removeEmptyString = T;
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
  function _(n, i, c, p) {
    var v = x.hasOwnProperty(i) ? x[i] : null;
    (v !== null ? v.type !== 0 : p || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (E(i, c, v, p) && (c = null), p || v === null ? g(i) && (c === null ? n.removeAttribute(i) : n.setAttribute(i, "" + c)) : v.mustUseProperty ? n[v.propertyName] = c === null ? v.type === 3 ? !1 : "" : c : (i = v.attributeName, p = v.attributeNamespace, c === null ? n.removeAttribute(i) : (v = v.type, c = v === 3 || v === 4 && c === !0 ? "" : "" + c, p ? n.setAttributeNS(p, i, c) : n.setAttribute(i, c))));
  }
  var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, N = Symbol.for("react.element"), P = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), B = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function j(n) {
    return n === null || typeof n != "object" ? null : (n = M && n[M] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Q = Object.assign, q;
  function W(n) {
    if (q === void 0) try {
      throw Error();
    } catch (c) {
      var i = c.stack.trim().match(/\n( *(at )?)/);
      q = i && i[1] || "";
    }
    return `
` + q + n;
  }
  var ie = !1;
  function F(n, i) {
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
          var p = oe;
        }
        Reflect.construct(n, [], i);
      } else {
        try {
          i.call();
        } catch (oe) {
          p = oe;
        }
        n.call(i.prototype);
      }
      else {
        try {
          throw Error();
        } catch (oe) {
          p = oe;
        }
        n();
      }
    } catch (oe) {
      if (oe && p && typeof oe.stack == "string") {
        for (var v = oe.stack.split(`
`), b = p.stack.split(`
`), T = v.length - 1, z = b.length - 1; 1 <= T && 0 <= z && v[T] !== b[z]; ) z--;
        for (; 1 <= T && 0 <= z; T--, z--) if (v[T] !== b[z]) {
          if (T !== 1 || z !== 1)
            do
              if (T--, z--, 0 > z || v[T] !== b[z]) {
                var U = `
` + v[T].replace(" at new ", " at ");
                return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
              }
            while (1 <= T && 0 <= z);
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
        return n = F(n.type, !1), n;
      case 11:
        return n = F(n.type.render, !1), n;
      case 1:
        return n = F(n.type, !0), n;
      default:
        return "";
    }
  }
  function ee(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case A:
        return "Fragment";
      case P:
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
    if (typeof n == "object") switch (n.$$typeof) {
      case B:
        return (n.displayName || "Context") + ".Consumer";
      case G:
        return (n._context.displayName || "Context") + ".Provider";
      case V:
        var i = n.render;
        return n = n.displayName, n || (n = i.displayName || i.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case H:
        return i = n.displayName || null, i !== null ? i : ee(n.type) || "Memo";
      case $:
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
    var i = se(n) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(n.constructor.prototype, i), p = "" + n[i];
    if (!n.hasOwnProperty(i) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var v = c.get, b = c.set;
      return Object.defineProperty(n, i, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(T) {
        p = "" + T, b.call(this, T);
      } }), Object.defineProperty(n, i, { enumerable: c.enumerable }), { getValue: function() {
        return p;
      }, setValue: function(T) {
        p = "" + T;
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
    var c = i.getValue(), p = "";
    return n && (p = se(n) ? n.checked ? "true" : "false" : n.value), n = p, n !== c ? (i.setValue(n), !0) : !1;
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
  function ge(n, i) {
    var c = i.defaultValue == null ? "" : i.defaultValue, p = i.checked != null ? i.checked : i.defaultChecked;
    c = te(i.value != null ? i.value : c), n._wrapperState = { initialChecked: p, initialValue: c, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function Ne(n, i) {
    i = i.checked, i != null && _(n, "checked", i, !1);
  }
  function Ee(n, i) {
    Ne(n, i);
    var c = te(i.value), p = i.type;
    if (c != null) p === "number" ? (c === 0 && n.value === "" || n.value != c) && (n.value = "" + c) : n.value !== "" + c && (n.value = "" + c);
    else if (p === "submit" || p === "reset") {
      n.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? Ve(n, i.type, c) : i.hasOwnProperty("defaultValue") && Ve(n, i.type, te(i.defaultValue)), i.checked == null && i.defaultChecked != null && (n.defaultChecked = !!i.defaultChecked);
  }
  function Ze(n, i, c) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var p = i.type;
      if (!(p !== "submit" && p !== "reset" || i.value !== void 0 && i.value !== null)) return;
      i = "" + n._wrapperState.initialValue, c || i === n.value || (n.value = i), n.defaultValue = i;
    }
    c = n.name, c !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, c !== "" && (n.name = c);
  }
  function Ve(n, i, c) {
    (i !== "number" || pe(n.ownerDocument) !== n) && (c == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + c && (n.defaultValue = "" + c));
  }
  var Ft = Array.isArray;
  function ht(n, i, c, p) {
    if (n = n.options, i) {
      i = {};
      for (var v = 0; v < c.length; v++) i["$" + c[v]] = !0;
      for (c = 0; c < n.length; c++) v = i.hasOwnProperty("$" + n[c].value), n[c].selected !== v && (n[c].selected = v), v && p && (n[c].defaultSelected = !0);
    } else {
      for (c = "" + te(c), i = null, v = 0; v < n.length; v++) {
        if (n[v].value === c) {
          n[v].selected = !0, p && (n[v].defaultSelected = !0);
          return;
        }
        i !== null || n[v].disabled || (i = n[v]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function at(n, i) {
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
    var c = te(i.value), p = te(i.defaultValue);
    c != null && (c = "" + c, c !== n.value && (n.value = c), i.defaultValue == null && n.defaultValue !== c && (n.defaultValue = c)), p != null && (n.defaultValue = "" + p);
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
  var _t, Lr = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(i, c, p, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(i, c, p, v);
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
  }, go = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qn).forEach(function(n) {
    go.forEach(function(i) {
      i = i + n.charAt(0).toUpperCase() + n.substring(1), qn[i] = qn[n];
    });
  });
  function Tt(n, i, c) {
    return i == null || typeof i == "boolean" || i === "" ? "" : c || typeof i != "number" || i === 0 || qn.hasOwnProperty(n) && qn[n] ? ("" + i).trim() : i + "px";
  }
  function Ht(n, i) {
    n = n.style;
    for (var c in i) if (i.hasOwnProperty(c)) {
      var p = c.indexOf("--") === 0, v = Tt(c, i[c], p);
      c === "float" && (c = "cssFloat"), p ? n.setProperty(c, v) : n[c] = v;
    }
  }
  var Hu = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function bi(n, i) {
    if (i) {
      if (Hu[n] && (i.children != null || i.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null) throw Error(r(60));
        if (typeof i.dangerouslySetInnerHTML != "object" || !("__html" in i.dangerouslySetInnerHTML)) throw Error(r(61));
      }
      if (i.style != null && typeof i.style != "object") throw Error(r(62));
    }
  }
  function Si(n, i) {
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
  var Ei = null;
  function Ci(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var ki = null, er = null, tr = null;
  function Qs(n) {
    if (n = Xi(n)) {
      if (typeof ki != "function") throw Error(r(280));
      var i = n.stateNode;
      i && (i = ka(i), ki(n.stateNode, n.type, i));
    }
  }
  function Zs(n) {
    er ? tr ? tr.push(n) : tr = [n] : er = n;
  }
  function Js() {
    if (er) {
      var n = er, i = tr;
      if (tr = er = null, Qs(n), i) for (n = 0; n < i.length; n++) Qs(i[n]);
    }
  }
  function ea(n, i) {
    return n(i);
  }
  function ta() {
  }
  var Ri = !1;
  function na(n, i, c) {
    if (Ri) return n(i, c);
    Ri = !0;
    try {
      return ea(n, i, c);
    } finally {
      Ri = !1, (er !== null || tr !== null) && (ta(), Js());
    }
  }
  function qr(n, i) {
    var c = n.stateNode;
    if (c === null) return null;
    var p = ka(c);
    if (p === null) return null;
    c = p[i];
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
        (p = !p.disabled) || (n = n.type, p = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !p;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (c && typeof c != "function") throw Error(r(231, i, typeof c));
    return c;
  }
  var Ni = !1;
  if (u) try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", { get: function() {
      Ni = !0;
    } }), window.addEventListener("test", Dr, Dr), window.removeEventListener("test", Dr, Dr);
  } catch {
    Ni = !1;
  }
  function Wu(n, i, c, p, v, b, T, z, U) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var jr = !1, vo = null, yo = !1, Pi = null, Uu = { onError: function(n) {
    jr = !0, vo = n;
  } };
  function Gu(n, i, c, p, v, b, T, z, U) {
    jr = !1, vo = null, Wu.apply(Uu, arguments);
  }
  function Yu(n, i, c, p, v, b, T, z, U) {
    if (Gu.apply(this, arguments), jr) {
      if (jr) {
        var oe = vo;
        jr = !1, vo = null;
      } else throw Error(r(198));
      yo || (yo = !0, Pi = oe);
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
  function Ti(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (i === null && (n = n.alternate, n !== null && (i = n.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function Ai(n) {
    if (xn(n) !== n) throw Error(r(188));
  }
  function Ku(n) {
    var i = n.alternate;
    if (!i) {
      if (i = xn(n), i === null) throw Error(r(188));
      return i !== n ? null : n;
    }
    for (var c = n, p = i; ; ) {
      var v = c.return;
      if (v === null) break;
      var b = v.alternate;
      if (b === null) {
        if (p = v.return, p !== null) {
          c = p;
          continue;
        }
        break;
      }
      if (v.child === b.child) {
        for (b = v.child; b; ) {
          if (b === c) return Ai(v), n;
          if (b === p) return Ai(v), i;
          b = b.sibling;
        }
        throw Error(r(188));
      }
      if (c.return !== p.return) c = v, p = b;
      else {
        for (var T = !1, z = v.child; z; ) {
          if (z === c) {
            T = !0, c = v, p = b;
            break;
          }
          if (z === p) {
            T = !0, p = v, c = b;
            break;
          }
          z = z.sibling;
        }
        if (!T) {
          for (z = b.child; z; ) {
            if (z === c) {
              T = !0, c = b, p = v;
              break;
            }
            if (z === p) {
              T = !0, p = b, c = v;
              break;
            }
            z = z.sibling;
          }
          if (!T) throw Error(r(189));
        }
      }
      if (c.alternate !== p) throw Error(r(190));
    }
    if (c.tag !== 3) throw Error(r(188));
    return c.stateNode.current === c ? n : i;
  }
  function ra(n) {
    return n = Ku(n), n !== null ? oa(n) : null;
  }
  function oa(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var i = oa(n);
      if (i !== null) return i;
      n = n.sibling;
    }
    return null;
  }
  var ia = t.unstable_scheduleCallback, sa = t.unstable_cancelCallback, Xu = t.unstable_shouldYield, aa = t.unstable_requestPaint, We = t.unstable_now, Qu = t.unstable_getCurrentPriorityLevel, Ii = t.unstable_ImmediatePriority, la = t.unstable_UserBlockingPriority, wo = t.unstable_NormalPriority, Zu = t.unstable_LowPriority, ua = t.unstable_IdlePriority, zr = null, Wt = null;
  function Ju(n) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(zr, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : nc, ec = Math.log, tc = Math.LN2;
  function nc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ec(n) / tc | 0) | 0;
  }
  var xo = 64, _o = 4194304;
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
  function bo(n, i) {
    var c = n.pendingLanes;
    if (c === 0) return 0;
    var p = 0, v = n.suspendedLanes, b = n.pingedLanes, T = c & 268435455;
    if (T !== 0) {
      var z = T & ~v;
      z !== 0 ? p = _n(z) : (b &= T, b !== 0 && (p = _n(b)));
    } else T = c & ~v, T !== 0 ? p = _n(T) : b !== 0 && (p = _n(b));
    if (p === 0) return 0;
    if (i !== 0 && i !== p && (i & v) === 0 && (v = p & -p, b = i & -i, v >= b || v === 16 && (b & 4194240) !== 0)) return i;
    if ((p & 4) !== 0 && (p |= c & 16), i = n.entangledLanes, i !== 0) for (n = n.entanglements, i &= p; 0 < i; ) c = 31 - At(i), v = 1 << c, p |= n[c], i &= ~v;
    return p;
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
    for (var c = n.suspendedLanes, p = n.pingedLanes, v = n.expirationTimes, b = n.pendingLanes; 0 < b; ) {
      var T = 31 - At(b), z = 1 << T, U = v[T];
      U === -1 ? ((z & c) === 0 || (z & p) !== 0) && (v[T] = rc(z, i)) : U <= i && (n.expiredLanes |= z), b &= ~z;
    }
  }
  function Fr(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ca() {
    var n = xo;
    return xo <<= 1, (xo & 4194240) === 0 && (xo = 64), n;
  }
  function Mi(n) {
    for (var i = [], c = 0; 31 > c; c++) i.push(n);
    return i;
  }
  function nr(n, i, c) {
    n.pendingLanes |= i, i !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, i = 31 - At(i), n[i] = c;
  }
  function SA(n, i) {
    var c = n.pendingLanes & ~i;
    n.pendingLanes = i, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= i, n.mutableReadLanes &= i, n.entangledLanes &= i, i = n.entanglements;
    var p = n.eventTimes;
    for (n = n.expirationTimes; 0 < c; ) {
      var v = 31 - At(c), b = 1 << v;
      i[v] = 0, p[v] = -1, n[v] = -1, c &= ~b;
    }
  }
  function ic(n, i) {
    var c = n.entangledLanes |= i;
    for (n = n.entanglements; c; ) {
      var p = 31 - At(c), v = 1 << p;
      v & i | n[p] & i && (n[p] |= i), c &= ~v;
    }
  }
  var Le = 0;
  function t0(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var n0, sc, r0, o0, i0, ac = !1, fa = [], rr = null, or = null, ir = null, Oi = /* @__PURE__ */ new Map(), Li = /* @__PURE__ */ new Map(), sr = [], EA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Oi.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Li.delete(i.pointerId);
    }
  }
  function qi(n, i, c, p, v, b) {
    return n === null || n.nativeEvent !== b ? (n = { blockedOn: i, domEventName: c, eventSystemFlags: p, nativeEvent: b, targetContainers: [v] }, i !== null && (i = Xi(i), i !== null && sc(i)), n) : (n.eventSystemFlags |= p, i = n.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), n);
  }
  function CA(n, i, c, p, v) {
    switch (i) {
      case "focusin":
        return rr = qi(rr, n, i, c, p, v), !0;
      case "dragenter":
        return or = qi(or, n, i, c, p, v), !0;
      case "mouseover":
        return ir = qi(ir, n, i, c, p, v), !0;
      case "pointerover":
        var b = v.pointerId;
        return Oi.set(b, qi(Oi.get(b) || null, n, i, c, p, v)), !0;
      case "gotpointercapture":
        return b = v.pointerId, Li.set(b, qi(Li.get(b) || null, n, i, c, p, v)), !0;
    }
    return !1;
  }
  function a0(n) {
    var i = $r(n.target);
    if (i !== null) {
      var c = xn(i);
      if (c !== null) {
        if (i = c.tag, i === 13) {
          if (i = Ti(c), i !== null) {
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
  function da(n) {
    if (n.blockedOn !== null) return !1;
    for (var i = n.targetContainers; 0 < i.length; ) {
      var c = uc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (c === null) {
        c = n.nativeEvent;
        var p = new c.constructor(c.type, c);
        Ei = p, c.target.dispatchEvent(p), Ei = null;
      } else return i = Xi(c), i !== null && sc(i), n.blockedOn = c, !1;
      i.shift();
    }
    return !0;
  }
  function l0(n, i, c) {
    da(n) && c.delete(i);
  }
  function kA() {
    ac = !1, rr !== null && da(rr) && (rr = null), or !== null && da(or) && (or = null), ir !== null && da(ir) && (ir = null), Oi.forEach(l0), Li.forEach(l0);
  }
  function Di(n, i) {
    n.blockedOn === i && (n.blockedOn = null, ac || (ac = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, kA)));
  }
  function ji(n) {
    function i(v) {
      return Di(v, n);
    }
    if (0 < fa.length) {
      Di(fa[0], n);
      for (var c = 1; c < fa.length; c++) {
        var p = fa[c];
        p.blockedOn === n && (p.blockedOn = null);
      }
    }
    for (rr !== null && Di(rr, n), or !== null && Di(or, n), ir !== null && Di(ir, n), Oi.forEach(i), Li.forEach(i), c = 0; c < sr.length; c++) p = sr[c], p.blockedOn === n && (p.blockedOn = null);
    for (; 0 < sr.length && (c = sr[0], c.blockedOn === null); ) a0(c), c.blockedOn === null && sr.shift();
  }
  var So = k.ReactCurrentBatchConfig, ha = !0;
  function RA(n, i, c, p) {
    var v = Le, b = So.transition;
    So.transition = null;
    try {
      Le = 1, lc(n, i, c, p);
    } finally {
      Le = v, So.transition = b;
    }
  }
  function NA(n, i, c, p) {
    var v = Le, b = So.transition;
    So.transition = null;
    try {
      Le = 4, lc(n, i, c, p);
    } finally {
      Le = v, So.transition = b;
    }
  }
  function lc(n, i, c, p) {
    if (ha) {
      var v = uc(n, i, c, p);
      if (v === null) kc(n, i, p, pa, c), s0(n, p);
      else if (CA(v, n, i, c, p)) p.stopPropagation();
      else if (s0(n, p), i & 4 && -1 < EA.indexOf(n)) {
        for (; v !== null; ) {
          var b = Xi(v);
          if (b !== null && n0(b), b = uc(n, i, c, p), b === null && kc(n, i, p, pa, c), b === v) break;
          v = b;
        }
        v !== null && p.stopPropagation();
      } else kc(n, i, p, null, c);
    }
  }
  var pa = null;
  function uc(n, i, c, p) {
    if (pa = null, n = Ci(p), n = $r(n), n !== null) if (i = xn(n), i === null) n = null;
    else if (c = i.tag, c === 13) {
      if (n = Ti(i), n !== null) return n;
      n = null;
    } else if (c === 3) {
      if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
      n = null;
    } else i !== n && (n = null);
    return pa = n, null;
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
          case Ii:
            return 1;
          case la:
            return 4;
          case wo:
          case Zu:
            return 16;
          case ua:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ar = null, cc = null, ma = null;
  function c0() {
    if (ma) return ma;
    var n, i = cc, c = i.length, p, v = "value" in ar ? ar.value : ar.textContent, b = v.length;
    for (n = 0; n < c && i[n] === v[n]; n++) ;
    var T = c - n;
    for (p = 1; p <= T && i[c - p] === v[b - p]; p++) ;
    return ma = v.slice(n, 1 < p ? 1 - p : void 0);
  }
  function ga(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function va() {
    return !0;
  }
  function f0() {
    return !1;
  }
  function It(n) {
    function i(c, p, v, b, T) {
      this._reactName = c, this._targetInst = v, this.type = p, this.nativeEvent = b, this.target = T, this.currentTarget = null;
      for (var z in n) n.hasOwnProperty(z) && (c = n[z], this[z] = c ? c(b) : b[z]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? va : f0, this.isPropagationStopped = f0, this;
    }
    return Q(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = va);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = va);
    }, persist: function() {
    }, isPersistent: va }), i;
  }
  var Eo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fc = It(Eo), zi = Q({}, Eo, { view: 0, detail: 0 }), PA = It(zi), dc, hc, Fi, ya = Q({}, zi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Fi && (Fi && n.type === "mousemove" ? (dc = n.screenX - Fi.screenX, hc = n.screenY - Fi.screenY) : hc = dc = 0, Fi = n), dc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : hc;
  } }), d0 = It(ya), TA = Q({}, ya, { dataTransfer: 0 }), AA = It(TA), IA = Q({}, zi, { relatedTarget: 0 }), pc = It(IA), MA = Q({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), OA = It(MA), LA = Q({}, Eo, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), qA = It(LA), DA = Q({}, Eo, { data: 0 }), h0 = It(DA), jA = {
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
  }, zA = {
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
  }, FA = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $A(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = FA[n]) ? !!i[n] : !1;
  }
  function mc() {
    return $A;
  }
  var BA = Q({}, zi, { key: function(n) {
    if (n.key) {
      var i = jA[n.key] || n.key;
      if (i !== "Unidentified") return i;
    }
    return n.type === "keypress" ? (n = ga(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? zA[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mc, charCode: function(n) {
    return n.type === "keypress" ? ga(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ga(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), VA = It(BA), HA = Q({}, ya, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), p0 = It(HA), WA = Q({}, zi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mc }), UA = It(WA), GA = Q({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), YA = It(GA), KA = Q({}, ya, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), XA = It(KA), QA = [9, 13, 27, 32], gc = u && "CompositionEvent" in window, $i = null;
  u && "documentMode" in document && ($i = document.documentMode);
  var ZA = u && "TextEvent" in window && !$i, m0 = u && (!gc || $i && 8 < $i && 11 >= $i), g0 = " ", v0 = !1;
  function y0(n, i) {
    switch (n) {
      case "keyup":
        return QA.indexOf(i.keyCode) !== -1;
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
  var Co = !1;
  function JA(n, i) {
    switch (n) {
      case "compositionend":
        return w0(i);
      case "keypress":
        return i.which !== 32 ? null : (v0 = !0, g0);
      case "textInput":
        return n = i.data, n === g0 && v0 ? null : n;
      default:
        return null;
    }
  }
  function eI(n, i) {
    if (Co) return n === "compositionend" || !gc && y0(n, i) ? (n = c0(), ma = cc = ar = null, Co = !1, n) : null;
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
        return m0 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var tI = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function x0(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!tI[n.type] : i === "textarea";
  }
  function _0(n, i, c, p) {
    Zs(p), i = Sa(i, "onChange"), 0 < i.length && (c = new fc("onChange", "change", null, c, p), n.push({ event: c, listeners: i }));
  }
  var Bi = null, Vi = null;
  function nI(n) {
    z0(n, 0);
  }
  function wa(n) {
    var i = To(n);
    if (de(i)) return n;
  }
  function rI(n, i) {
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
    Bi && (Bi.detachEvent("onpropertychange", C0), Vi = Bi = null);
  }
  function C0(n) {
    if (n.propertyName === "value" && wa(Vi)) {
      var i = [];
      _0(i, Vi, n, Ci(n)), na(nI, i);
    }
  }
  function oI(n, i, c) {
    n === "focusin" ? (E0(), Bi = i, Vi = c, Bi.attachEvent("onpropertychange", C0)) : n === "focusout" && E0();
  }
  function iI(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return wa(Vi);
  }
  function sI(n, i) {
    if (n === "click") return wa(i);
  }
  function aI(n, i) {
    if (n === "input" || n === "change") return wa(i);
  }
  function lI(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : lI;
  function Hi(n, i) {
    if (nn(n, i)) return !0;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null) return !1;
    var c = Object.keys(n), p = Object.keys(i);
    if (c.length !== p.length) return !1;
    for (p = 0; p < c.length; p++) {
      var v = c[p];
      if (!f.call(i, v) || !nn(n[v], i[v])) return !1;
    }
    return !0;
  }
  function k0(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function R0(n, i) {
    var c = k0(n);
    n = 0;
    for (var p; c; ) {
      if (c.nodeType === 3) {
        if (p = n + c.textContent.length, n <= i && p >= i) return { node: c, offset: i - n };
        n = p;
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
  function N0(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? N0(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
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
  function uI(n) {
    var i = P0(), c = n.focusedElem, p = n.selectionRange;
    if (i !== c && c && c.ownerDocument && N0(c.ownerDocument.documentElement, c)) {
      if (p !== null && wc(c)) {
        if (i = p.start, n = p.end, n === void 0 && (n = i), "selectionStart" in c) c.selectionStart = i, c.selectionEnd = Math.min(n, c.value.length);
        else if (n = (i = c.ownerDocument || document) && i.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = c.textContent.length, b = Math.min(p.start, v);
          p = p.end === void 0 ? b : Math.min(p.end, v), !n.extend && b > p && (v = p, p = b, b = v), v = R0(c, b);
          var T = R0(
            c,
            p
          );
          v && T && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== T.node || n.focusOffset !== T.offset) && (i = i.createRange(), i.setStart(v.node, v.offset), n.removeAllRanges(), b > p ? (n.addRange(i), n.extend(T.node, T.offset)) : (i.setEnd(T.node, T.offset), n.addRange(i)));
        }
      }
      for (i = [], n = c; n = n.parentNode; ) n.nodeType === 1 && i.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < i.length; c++) n = i[c], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var cI = u && "documentMode" in document && 11 >= document.documentMode, ko = null, xc = null, Wi = null, _c = !1;
  function T0(n, i, c) {
    var p = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    _c || ko == null || ko !== pe(p) || (p = ko, "selectionStart" in p && wc(p) ? p = { start: p.selectionStart, end: p.selectionEnd } : (p = (p.ownerDocument && p.ownerDocument.defaultView || window).getSelection(), p = { anchorNode: p.anchorNode, anchorOffset: p.anchorOffset, focusNode: p.focusNode, focusOffset: p.focusOffset }), Wi && Hi(Wi, p) || (Wi = p, p = Sa(xc, "onSelect"), 0 < p.length && (i = new fc("onSelect", "select", null, i, c), n.push({ event: i, listeners: p }), i.target = ko)));
  }
  function xa(n, i) {
    var c = {};
    return c[n.toLowerCase()] = i.toLowerCase(), c["Webkit" + n] = "webkit" + i, c["Moz" + n] = "moz" + i, c;
  }
  var Ro = { animationend: xa("Animation", "AnimationEnd"), animationiteration: xa("Animation", "AnimationIteration"), animationstart: xa("Animation", "AnimationStart"), transitionend: xa("Transition", "TransitionEnd") }, bc = {}, A0 = {};
  u && (A0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ro.animationend.animation, delete Ro.animationiteration.animation, delete Ro.animationstart.animation), "TransitionEvent" in window || delete Ro.transitionend.transition);
  function _a(n) {
    if (bc[n]) return bc[n];
    if (!Ro[n]) return n;
    var i = Ro[n], c;
    for (c in i) if (i.hasOwnProperty(c) && c in A0) return bc[n] = i[c];
    return n;
  }
  var I0 = _a("animationend"), M0 = _a("animationiteration"), O0 = _a("animationstart"), L0 = _a("transitionend"), q0 = /* @__PURE__ */ new Map(), D0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function lr(n, i) {
    q0.set(n, i), a(i, [n]);
  }
  for (var Sc = 0; Sc < D0.length; Sc++) {
    var Ec = D0[Sc], fI = Ec.toLowerCase(), dI = Ec[0].toUpperCase() + Ec.slice(1);
    lr(fI, "on" + dI);
  }
  lr(I0, "onAnimationEnd"), lr(M0, "onAnimationIteration"), lr(O0, "onAnimationStart"), lr("dblclick", "onDoubleClick"), lr("focusin", "onFocus"), lr("focusout", "onBlur"), lr(L0, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));
  function j0(n, i, c) {
    var p = n.type || "unknown-event";
    n.currentTarget = c, Yu(p, i, void 0, n), n.currentTarget = null;
  }
  function z0(n, i) {
    i = (i & 4) !== 0;
    for (var c = 0; c < n.length; c++) {
      var p = n[c], v = p.event;
      p = p.listeners;
      e: {
        var b = void 0;
        if (i) for (var T = p.length - 1; 0 <= T; T--) {
          var z = p[T], U = z.instance, oe = z.currentTarget;
          if (z = z.listener, U !== b && v.isPropagationStopped()) break e;
          j0(v, z, oe), b = U;
        }
        else for (T = 0; T < p.length; T++) {
          if (z = p[T], U = z.instance, oe = z.currentTarget, z = z.listener, U !== b && v.isPropagationStopped()) break e;
          j0(v, z, oe), b = U;
        }
      }
    }
    if (yo) throw n = Pi, yo = !1, Pi = null, n;
  }
  function De(n, i) {
    var c = i[Ic];
    c === void 0 && (c = i[Ic] = /* @__PURE__ */ new Set());
    var p = n + "__bubble";
    c.has(p) || (F0(i, n, 2, !1), c.add(p));
  }
  function Cc(n, i, c) {
    var p = 0;
    i && (p |= 4), F0(c, n, p, i);
  }
  var ba = "_reactListening" + Math.random().toString(36).slice(2);
  function Gi(n) {
    if (!n[ba]) {
      n[ba] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (hI.has(c) || Cc(c, !1, n), Cc(c, !0, n));
      });
      var i = n.nodeType === 9 ? n : n.ownerDocument;
      i === null || i[ba] || (i[ba] = !0, Cc("selectionchange", !1, i));
    }
  }
  function F0(n, i, c, p) {
    switch (u0(i)) {
      case 1:
        var v = RA;
        break;
      case 4:
        v = NA;
        break;
      default:
        v = lc;
    }
    c = v.bind(null, i, c, n), v = void 0, !Ni || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), p ? v !== void 0 ? n.addEventListener(i, c, { capture: !0, passive: v }) : n.addEventListener(i, c, !0) : v !== void 0 ? n.addEventListener(i, c, { passive: v }) : n.addEventListener(i, c, !1);
  }
  function kc(n, i, c, p, v) {
    var b = p;
    if ((i & 1) === 0 && (i & 2) === 0 && p !== null) e: for (; ; ) {
      if (p === null) return;
      var T = p.tag;
      if (T === 3 || T === 4) {
        var z = p.stateNode.containerInfo;
        if (z === v || z.nodeType === 8 && z.parentNode === v) break;
        if (T === 4) for (T = p.return; T !== null; ) {
          var U = T.tag;
          if ((U === 3 || U === 4) && (U = T.stateNode.containerInfo, U === v || U.nodeType === 8 && U.parentNode === v)) return;
          T = T.return;
        }
        for (; z !== null; ) {
          if (T = $r(z), T === null) return;
          if (U = T.tag, U === 5 || U === 6) {
            p = b = T;
            continue e;
          }
          z = z.parentNode;
        }
      }
      p = p.return;
    }
    na(function() {
      var oe = b, ue = Ci(c), fe = [];
      e: {
        var le = q0.get(n);
        if (le !== void 0) {
          var me = fc, we = n;
          switch (n) {
            case "keypress":
              if (ga(c) === 0) break e;
            case "keydown":
            case "keyup":
              me = VA;
              break;
            case "focusin":
              we = "focus", me = pc;
              break;
            case "focusout":
              we = "blur", me = pc;
              break;
            case "beforeblur":
            case "afterblur":
              me = pc;
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
              me = d0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = AA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = UA;
              break;
            case I0:
            case M0:
            case O0:
              me = OA;
              break;
            case L0:
              me = YA;
              break;
            case "scroll":
              me = PA;
              break;
            case "wheel":
              me = XA;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = qA;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = p0;
          }
          var Se = (i & 4) !== 0, Je = !Se && n === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = qr(J, ne), he != null && Se.push(Yi(J, he, re)))), Je) break;
            J = J.return;
          }
          0 < Se.length && (le = new me(le, we, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", me = n === "mouseout" || n === "pointerout", le && c !== Ei && (we = c.relatedTarget || c.fromElement) && ($r(we) || we[Dn])) break e;
          if ((me || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, me ? (we = c.relatedTarget || c.toElement, me = oe, we = we ? $r(we) : null, we !== null && (Je = xn(we), we !== Je || we.tag !== 5 && we.tag !== 6) && (we = null)) : (me = null, we = oe), me !== we)) {
            if (Se = d0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (n === "pointerout" || n === "pointerover") && (Se = p0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), Je = me == null ? le : To(me), re = we == null ? le : To(we), le = new Se(he, J + "leave", me, c, ue), le.target = Je, le.relatedTarget = re, he = null, $r(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = Je, he = Se), Je = he, me && we) t: {
              for (Se = me, ne = we, J = 0, re = Se; re; re = No(re)) J++;
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
            me !== null && $0(fe, le, me, Se, !1), we !== null && Je !== null && $0(fe, Je, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? To(oe) : window, me = le.nodeName && le.nodeName.toLowerCase(), me === "select" || me === "input" && le.type === "file") var Ce = rI;
          else if (x0(le)) if (b0) Ce = aI;
          else {
            Ce = iI;
            var ke = oI;
          }
          else (me = le.nodeName) && me.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = sI);
          if (Ce && (Ce = Ce(n, oe))) {
            _0(fe, Ce, c, ue);
            break e;
          }
          ke && ke(n, le, oe), n === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ve(le, "number", le.value);
        }
        switch (ke = oe ? To(oe) : window, n) {
          case "focusin":
            (x0(ke) || ke.contentEditable === "true") && (ko = ke, xc = oe, Wi = null);
            break;
          case "focusout":
            Wi = xc = ko = null;
            break;
          case "mousedown":
            _c = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            _c = !1, T0(fe, c, ue);
            break;
          case "selectionchange":
            if (cI) break;
          case "keydown":
          case "keyup":
            T0(fe, c, ue);
        }
        var Re;
        if (gc) e: {
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
        else Co ? y0(n, c) && (Pe = "onCompositionEnd") : n === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (m0 && c.locale !== "ko" && (Co || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Co && (Re = c0()) : (ar = ue, cc = "value" in ar ? ar.value : ar.textContent, Co = !0)), ke = Sa(oe, Pe), 0 < ke.length && (Pe = new h0(Pe, n, null, c, ue), fe.push({ event: Pe, listeners: ke }), Re ? Pe.data = Re : (Re = w0(c), Re !== null && (Pe.data = Re)))), (Re = ZA ? JA(n, c) : eI(n, c)) && (oe = Sa(oe, "onBeforeInput"), 0 < oe.length && (ue = new h0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Re));
      }
      z0(fe, i);
    });
  }
  function Yi(n, i, c) {
    return { instance: n, listener: i, currentTarget: c };
  }
  function Sa(n, i) {
    for (var c = i + "Capture", p = []; n !== null; ) {
      var v = n, b = v.stateNode;
      v.tag === 5 && b !== null && (v = b, b = qr(n, c), b != null && p.unshift(Yi(n, b, v)), b = qr(n, i), b != null && p.push(Yi(n, b, v))), n = n.return;
    }
    return p;
  }
  function No(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function $0(n, i, c, p, v) {
    for (var b = i._reactName, T = []; c !== null && c !== p; ) {
      var z = c, U = z.alternate, oe = z.stateNode;
      if (U !== null && U === p) break;
      z.tag === 5 && oe !== null && (z = oe, v ? (U = qr(c, b), U != null && T.unshift(Yi(c, U, z))) : v || (U = qr(c, b), U != null && T.push(Yi(c, U, z)))), c = c.return;
    }
    T.length !== 0 && n.push({ event: i, listeners: T });
  }
  var pI = /\r\n?/g, mI = /\u0000|\uFFFD/g;
  function B0(n) {
    return (typeof n == "string" ? n : "" + n).replace(pI, `
`).replace(mI, "");
  }
  function Ea(n, i, c) {
    if (i = B0(i), B0(n) !== i && c) throw Error(r(425));
  }
  function Ca() {
  }
  var Rc = null, Nc = null;
  function Pc(n, i) {
    return n === "textarea" || n === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Tc = typeof setTimeout == "function" ? setTimeout : void 0, gI = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = typeof Promise == "function" ? Promise : void 0, vI = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(n) {
    return V0.resolve(null).then(n).catch(yI);
  } : Tc;
  function yI(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ac(n, i) {
    var c = i, p = 0;
    do {
      var v = c.nextSibling;
      if (n.removeChild(c), v && v.nodeType === 8) if (c = v.data, c === "/$") {
        if (p === 0) {
          n.removeChild(v), ji(i);
          return;
        }
        p--;
      } else c !== "$" && c !== "$?" && c !== "$!" || p++;
      c = v;
    } while (c);
    ji(i);
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
  var Po = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Po, Ki = "__reactProps$" + Po, Dn = "__reactContainer$" + Po, Ic = "__reactEvents$" + Po, wI = "__reactListeners$" + Po, xI = "__reactHandles$" + Po;
  function $r(n) {
    var i = n[bn];
    if (i) return i;
    for (var c = n.parentNode; c; ) {
      if (i = c[Dn] || c[bn]) {
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
  function Xi(n) {
    return n = n[bn] || n[Dn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function To(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function ka(n) {
    return n[Ki] || null;
  }
  var Mc = [], Ao = -1;
  function cr(n) {
    return { current: n };
  }
  function je(n) {
    0 > Ao || (n.current = Mc[Ao], Mc[Ao] = null, Ao--);
  }
  function qe(n, i) {
    Ao++, Mc[Ao] = n.current, n.current = i;
  }
  var fr = {}, pt = cr(fr), bt = cr(!1), Br = fr;
  function Io(n, i) {
    var c = n.type.contextTypes;
    if (!c) return fr;
    var p = n.stateNode;
    if (p && p.__reactInternalMemoizedUnmaskedChildContext === i) return p.__reactInternalMemoizedMaskedChildContext;
    var v = {}, b;
    for (b in c) v[b] = i[b];
    return p && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = i, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function St(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ra() {
    je(bt), je(pt);
  }
  function W0(n, i, c) {
    if (pt.current !== fr) throw Error(r(168));
    qe(pt, i), qe(bt, c);
  }
  function U0(n, i, c) {
    var p = n.stateNode;
    if (i = i.childContextTypes, typeof p.getChildContext != "function") return c;
    p = p.getChildContext();
    for (var v in p) if (!(v in i)) throw Error(r(108, K(n) || "Unknown", v));
    return Q({}, c, p);
  }
  function Na(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || fr, Br = pt.current, qe(pt, n), qe(bt, bt.current), !0;
  }
  function G0(n, i, c) {
    var p = n.stateNode;
    if (!p) throw Error(r(169));
    c ? (n = U0(n, i, Br), p.__reactInternalMemoizedMergedChildContext = n, je(bt), je(pt), qe(pt, n)) : je(bt), qe(bt, c);
  }
  var jn = null, Pa = !1, Oc = !1;
  function Y0(n) {
    jn === null ? jn = [n] : jn.push(n);
  }
  function _I(n) {
    Pa = !0, Y0(n);
  }
  function dr() {
    if (!Oc && jn !== null) {
      Oc = !0;
      var n = 0, i = Le;
      try {
        var c = jn;
        for (Le = 1; n < c.length; n++) {
          var p = c[n];
          do
            p = p(!0);
          while (p !== null);
        }
        jn = null, Pa = !1;
      } catch (v) {
        throw jn !== null && (jn = jn.slice(n + 1)), ia(Ii, dr), v;
      } finally {
        Le = i, Oc = !1;
      }
    }
    return null;
  }
  var Mo = [], Oo = 0, Ta = null, Aa = 0, Ut = [], Gt = 0, Vr = null, zn = 1, Fn = "";
  function Hr(n, i) {
    Mo[Oo++] = Aa, Mo[Oo++] = Ta, Ta = n, Aa = i;
  }
  function K0(n, i, c) {
    Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Vr, Vr = n;
    var p = zn;
    n = Fn;
    var v = 32 - At(p) - 1;
    p &= ~(1 << v), c += 1;
    var b = 32 - At(i) + v;
    if (30 < b) {
      var T = v - v % 5;
      b = (p & (1 << T) - 1).toString(32), p >>= T, v -= T, zn = 1 << 32 - At(i) + v | c << v | p, Fn = b + n;
    } else zn = 1 << b | c << v | p, Fn = n;
  }
  function Lc(n) {
    n.return !== null && (Hr(n, 1), K0(n, 1, 0));
  }
  function qc(n) {
    for (; n === Ta; ) Ta = Mo[--Oo], Mo[Oo] = null, Aa = Mo[--Oo], Mo[Oo] = null;
    for (; n === Vr; ) Vr = Ut[--Gt], Ut[Gt] = null, Fn = Ut[--Gt], Ut[Gt] = null, zn = Ut[--Gt], Ut[Gt] = null;
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
        return i = i.nodeType !== 8 ? null : i, i !== null ? (c = Vr !== null ? { id: zn, overflow: Fn } : null, n.memoizedState = { dehydrated: i, treeContext: c, retryLane: 1073741824 }, c = Qt(18, null, null, 0), c.stateNode = i, c.return = n, n.child = c, Mt = n, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Dc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function jc(n) {
    if (ze) {
      var i = Ot;
      if (i) {
        var c = i;
        if (!Q0(n, i)) {
          if (Dc(n)) throw Error(r(418));
          i = ur(c.nextSibling);
          var p = Mt;
          i && Q0(n, i) ? X0(p, c) : (n.flags = n.flags & -4097 | 2, ze = !1, Mt = n);
        }
      } else {
        if (Dc(n)) throw Error(r(418));
        n.flags = n.flags & -4097 | 2, ze = !1, Mt = n;
      }
    }
  }
  function Z0(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Mt = n;
  }
  function Ia(n) {
    if (n !== Mt) return !1;
    if (!ze) return Z0(n), ze = !0, !1;
    var i;
    if ((i = n.tag !== 3) && !(i = n.tag !== 5) && (i = n.type, i = i !== "head" && i !== "body" && !Pc(n.type, n.memoizedProps)), i && (i = Ot)) {
      if (Dc(n)) throw J0(), Error(r(418));
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
  function Lo() {
    Ot = Mt = null, ze = !1;
  }
  function zc(n) {
    rn === null ? rn = [n] : rn.push(n);
  }
  var bI = k.ReactCurrentBatchConfig;
  function Qi(n, i, c) {
    if (n = c.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(r(309));
          var p = c.stateNode;
        }
        if (!p) throw Error(r(147, n));
        var v = p, b = "" + n;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === b ? i.ref : (i = function(T) {
          var z = v.refs;
          T === null ? delete z[b] : z[b] = T;
        }, i._stringRef = b, i);
      }
      if (typeof n != "string") throw Error(r(284));
      if (!c._owner) throw Error(r(290, n));
    }
    return n;
  }
  function Ma(n, i) {
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
    function p(ne, J) {
      for (ne = /* @__PURE__ */ new Map(); J !== null; ) J.key !== null ? ne.set(J.key, J) : ne.set(J.index, J), J = J.sibling;
      return ne;
    }
    function v(ne, J) {
      return ne = xr(ne, J), ne.index = 0, ne.sibling = null, ne;
    }
    function b(ne, J, re) {
      return ne.index = re, n ? (re = ne.alternate, re !== null ? (re = re.index, re < J ? (ne.flags |= 2, J) : re) : (ne.flags |= 2, J)) : (ne.flags |= 1048576, J);
    }
    function T(ne) {
      return n && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function z(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = Af(re, ne.mode, he), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function U(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && ew(Ce) === J.type) ? (he = v(J, re.props), he.ref = Qi(ne, J, re), he.return = ne, he) : (he = rl(re.type, re.key, re.props, null, ne.mode, he), he.ref = Qi(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = If(re, ne.mode, he), J.return = ne, J) : (J = v(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = Zr(re, ne.mode, he, Ce), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = Af("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case N:
            return re = rl(J.type, J.key, J.props, null, ne.mode, re), re.ref = Qi(ne, null, J), re.return = ne, re;
          case P:
            return J = If(J, ne.mode, re), J.return = ne, J;
          case $:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Ft(J) || j(J)) return J = Zr(J, ne.mode, re, null), J.return = ne, J;
        Ma(ne, J);
      }
      return null;
    }
    function le(ne, J, re, he) {
      var Ce = J !== null ? J.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return Ce !== null ? null : z(ne, J, "" + re, he);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case N:
            return re.key === Ce ? U(ne, J, re, he) : null;
          case P:
            return re.key === Ce ? oe(ne, J, re, he) : null;
          case $:
            return Ce = re._init, le(
              ne,
              J,
              Ce(re._payload),
              he
            );
        }
        if (Ft(re) || j(re)) return Ce !== null ? null : ue(ne, J, re, he, null);
        Ma(ne, re);
      }
      return null;
    }
    function me(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, z(J, ne, "" + he, Ce);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case N:
            return ne = ne.get(he.key === null ? re : he.key) || null, U(J, ne, he, Ce);
          case P:
            return ne = ne.get(he.key === null ? re : he.key) || null, oe(J, ne, he, Ce);
          case $:
            var ke = he._init;
            return me(ne, J, re, ke(he._payload), Ce);
        }
        if (Ft(he) || j(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Ma(J, he);
      }
      return null;
    }
    function we(ne, J, re, he) {
      for (var Ce = null, ke = null, Re = J, Pe = J = 0, ct = null; Re !== null && Pe < re.length; Pe++) {
        Re.index > Pe ? (ct = Re, Re = null) : ct = Re.sibling;
        var Oe = le(ne, Re, re[Pe], he);
        if (Oe === null) {
          Re === null && (Re = ct);
          break;
        }
        n && Re && Oe.alternate === null && i(ne, Re), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe, Re = ct;
      }
      if (Pe === re.length) return c(ne, Re), ze && Hr(ne, Pe), Ce;
      if (Re === null) {
        for (; Pe < re.length; Pe++) Re = fe(ne, re[Pe], he), Re !== null && (J = b(Re, J, Pe), ke === null ? Ce = Re : ke.sibling = Re, ke = Re);
        return ze && Hr(ne, Pe), Ce;
      }
      for (Re = p(ne, Re); Pe < re.length; Pe++) ct = me(Re, ne, Pe, re[Pe], he), ct !== null && (n && ct.alternate !== null && Re.delete(ct.key === null ? Pe : ct.key), J = b(ct, J, Pe), ke === null ? Ce = ct : ke.sibling = ct, ke = ct);
      return n && Re.forEach(function(_r) {
        return i(ne, _r);
      }), ze && Hr(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = j(re);
      if (typeof Ce != "function") throw Error(r(150));
      if (re = Ce.call(re), re == null) throw Error(r(151));
      for (var ke = Ce = null, Re = J, Pe = J = 0, ct = null, Oe = re.next(); Re !== null && !Oe.done; Pe++, Oe = re.next()) {
        Re.index > Pe ? (ct = Re, Re = null) : ct = Re.sibling;
        var _r = le(ne, Re, Oe.value, he);
        if (_r === null) {
          Re === null && (Re = ct);
          break;
        }
        n && Re && _r.alternate === null && i(ne, Re), J = b(_r, J, Pe), ke === null ? Ce = _r : ke.sibling = _r, ke = _r, Re = ct;
      }
      if (Oe.done) return c(
        ne,
        Re
      ), ze && Hr(ne, Pe), Ce;
      if (Re === null) {
        for (; !Oe.done; Pe++, Oe = re.next()) Oe = fe(ne, Oe.value, he), Oe !== null && (J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
        return ze && Hr(ne, Pe), Ce;
      }
      for (Re = p(ne, Re); !Oe.done; Pe++, Oe = re.next()) Oe = me(Re, ne, Pe, Oe.value, he), Oe !== null && (n && Oe.alternate !== null && Re.delete(Oe.key === null ? Pe : Oe.key), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
      return n && Re.forEach(function(t2) {
        return i(ne, t2);
      }), ze && Hr(ne, Pe), Ce;
    }
    function Je(ne, J, re, he) {
      if (typeof re == "object" && re !== null && re.type === A && re.key === null && (re = re.props.children), typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case N:
            e: {
              for (var Ce = re.key, ke = J; ke !== null; ) {
                if (ke.key === Ce) {
                  if (Ce = re.type, Ce === A) {
                    if (ke.tag === 7) {
                      c(ne, ke.sibling), J = v(ke, re.props.children), J.return = ne, ne = J;
                      break e;
                    }
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && ew(Ce) === ke.type) {
                    c(ne, ke.sibling), J = v(ke, re.props), J.ref = Qi(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else i(ne, ke);
                ke = ke.sibling;
              }
              re.type === A ? (J = Zr(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = rl(re.type, re.key, re.props, null, ne.mode, he), he.ref = Qi(ne, J, re), he.return = ne, ne = he);
            }
            return T(ne);
          case P:
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
            return T(ne);
          case $:
            return ke = re._init, Je(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return we(ne, J, re, he);
        if (j(re)) return Se(ne, J, re, he);
        Ma(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = v(J, re), J.return = ne, ne = J) : (c(ne, J), J = Af(re, ne.mode, he), J.return = ne, ne = J), T(ne)) : c(ne, J);
    }
    return Je;
  }
  var qo = tw(!0), nw = tw(!1), Oa = cr(null), La = null, Do = null, Fc = null;
  function $c() {
    Fc = Do = La = null;
  }
  function Bc(n) {
    var i = Oa.current;
    je(Oa), n._currentValue = i;
  }
  function Vc(n, i, c) {
    for (; n !== null; ) {
      var p = n.alternate;
      if ((n.childLanes & i) !== i ? (n.childLanes |= i, p !== null && (p.childLanes |= i)) : p !== null && (p.childLanes & i) !== i && (p.childLanes |= i), n === c) break;
      n = n.return;
    }
  }
  function jo(n, i) {
    La = n, Fc = Do = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & i) !== 0 && (Et = !0), n.firstContext = null);
  }
  function Yt(n) {
    var i = n._currentValue;
    if (Fc !== n) if (n = { context: n, memoizedValue: i, next: null }, Do === null) {
      if (La === null) throw Error(r(308));
      Do = n, La.dependencies = { lanes: 0, firstContext: n };
    } else Do = Do.next = n;
    return i;
  }
  var Wr = null;
  function Hc(n) {
    Wr === null ? Wr = [n] : Wr.push(n);
  }
  function rw(n, i, c, p) {
    var v = i.interleaved;
    return v === null ? (c.next = c, Hc(i)) : (c.next = v.next, v.next = c), i.interleaved = c, $n(n, p);
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
    var p = n.updateQueue;
    if (p === null) return null;
    if (p = p.shared, (Me & 2) !== 0) {
      var v = p.pending;
      return v === null ? i.next = i : (i.next = v.next, v.next = i), p.pending = i, $n(n, c);
    }
    return v = p.interleaved, v === null ? (i.next = i, Hc(p)) : (i.next = v.next, v.next = i), p.interleaved = i, $n(n, c);
  }
  function qa(n, i, c) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (c & 4194240) !== 0)) {
      var p = i.lanes;
      p &= n.pendingLanes, c |= p, i.lanes = c, ic(n, c);
    }
  }
  function iw(n, i) {
    var c = n.updateQueue, p = n.alternate;
    if (p !== null && (p = p.updateQueue, c === p)) {
      var v = null, b = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var T = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          b === null ? v = b = T : b = b.next = T, c = c.next;
        } while (c !== null);
        b === null ? v = b = i : b = b.next = i;
      } else v = b = i;
      c = { baseState: p.baseState, firstBaseUpdate: v, lastBaseUpdate: b, shared: p.shared, effects: p.effects }, n.updateQueue = c;
      return;
    }
    n = c.lastBaseUpdate, n === null ? c.firstBaseUpdate = i : n.next = i, c.lastBaseUpdate = i;
  }
  function Da(n, i, c, p) {
    var v = n.updateQueue;
    hr = !1;
    var b = v.firstBaseUpdate, T = v.lastBaseUpdate, z = v.shared.pending;
    if (z !== null) {
      v.shared.pending = null;
      var U = z, oe = U.next;
      U.next = null, T === null ? b = oe : T.next = oe, T = U;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, z = ue.lastBaseUpdate, z !== T && (z === null ? ue.firstBaseUpdate = oe : z.next = oe, ue.lastBaseUpdate = U));
    }
    if (b !== null) {
      var fe = v.baseState;
      T = 0, ue = oe = U = null, z = b;
      do {
        var le = z.lane, me = z.eventTime;
        if ((p & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: me,
            lane: 0,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          });
          e: {
            var we = n, Se = z;
            switch (le = i, me = c, Se.tag) {
              case 1:
                if (we = Se.payload, typeof we == "function") {
                  fe = we.call(me, fe, le);
                  break e;
                }
                fe = we;
                break e;
              case 3:
                we.flags = we.flags & -65537 | 128;
              case 0:
                if (we = Se.payload, le = typeof we == "function" ? we.call(me, fe, le) : we, le == null) break e;
                fe = Q({}, fe, le);
                break e;
              case 2:
                hr = !0;
            }
          }
          z.callback !== null && z.lane !== 0 && (n.flags |= 64, le = v.effects, le === null ? v.effects = [z] : le.push(z));
        } else me = { eventTime: me, lane: le, tag: z.tag, payload: z.payload, callback: z.callback, next: null }, ue === null ? (oe = ue = me, U = fe) : ue = ue.next = me, T |= le;
        if (z = z.next, z === null) {
          if (z = v.shared.pending, z === null) break;
          le = z, z = le.next, le.next = null, v.lastBaseUpdate = le, v.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (U = fe), v.baseState = U, v.firstBaseUpdate = oe, v.lastBaseUpdate = ue, i = v.shared.interleaved, i !== null) {
        v = i;
        do
          T |= v.lane, v = v.next;
        while (v !== i);
      } else b === null && (v.shared.lanes = 0);
      Yr |= T, n.lanes = T, n.memoizedState = fe;
    }
  }
  function sw(n, i, c) {
    if (n = i.effects, i.effects = null, n !== null) for (i = 0; i < n.length; i++) {
      var p = n[i], v = p.callback;
      if (v !== null) {
        if (p.callback = null, p = c, typeof v != "function") throw Error(r(191, v));
        v.call(p);
      }
    }
  }
  var Zi = {}, Sn = cr(Zi), Ji = cr(Zi), es = cr(Zi);
  function Ur(n) {
    if (n === Zi) throw Error(r(174));
    return n;
  }
  function Uc(n, i) {
    switch (qe(es, i), qe(Ji, n), qe(Sn, Zi), n = i.nodeType, n) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Bt(null, "");
        break;
      default:
        n = n === 8 ? i.parentNode : i, i = n.namespaceURI || null, n = n.tagName, i = Bt(i, n);
    }
    je(Sn), qe(Sn, i);
  }
  function zo() {
    je(Sn), je(Ji), je(es);
  }
  function aw(n) {
    Ur(es.current);
    var i = Ur(Sn.current), c = Bt(i, n.type);
    i !== c && (qe(Ji, n), qe(Sn, c));
  }
  function Gc(n) {
    Ji.current === n && (je(Sn), je(Ji));
  }
  var Ue = cr(0);
  function ja(n) {
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
  var za = k.ReactCurrentDispatcher, Xc = k.ReactCurrentBatchConfig, Gr = 0, Ge = null, ot = null, lt = null, Fa = !1, ts = !1, ns = 0, SI = 0;
  function mt() {
    throw Error(r(321));
  }
  function Qc(n, i) {
    if (i === null) return !1;
    for (var c = 0; c < i.length && c < n.length; c++) if (!nn(n[c], i[c])) return !1;
    return !0;
  }
  function Zc(n, i, c, p, v, b) {
    if (Gr = b, Ge = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, za.current = n === null || n.memoizedState === null ? RI : NI, n = c(p, v), ts) {
      b = 0;
      do {
        if (ts = !1, ns = 0, 25 <= b) throw Error(r(301));
        b += 1, lt = ot = null, i.updateQueue = null, za.current = PI, n = c(p, v);
      } while (ts);
    }
    if (za.current = Va, i = ot !== null && ot.next !== null, Gr = 0, lt = ot = Ge = null, Fa = !1, i) throw Error(r(300));
    return n;
  }
  function Jc() {
    var n = ns !== 0;
    return ns = 0, n;
  }
  function En() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Ge.memoizedState = lt = n : lt = lt.next = n, lt;
  }
  function Kt() {
    if (ot === null) {
      var n = Ge.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ot.next;
    var i = lt === null ? Ge.memoizedState : lt.next;
    if (i !== null) lt = i, ot = n;
    else {
      if (n === null) throw Error(r(310));
      ot = n, n = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, lt === null ? Ge.memoizedState = lt = n : lt = lt.next = n;
    }
    return lt;
  }
  function rs(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function ef(n) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(r(311));
    c.lastRenderedReducer = n;
    var p = ot, v = p.baseQueue, b = c.pending;
    if (b !== null) {
      if (v !== null) {
        var T = v.next;
        v.next = b.next, b.next = T;
      }
      p.baseQueue = v = b, c.pending = null;
    }
    if (v !== null) {
      b = v.next, p = p.baseState;
      var z = T = null, U = null, oe = b;
      do {
        var ue = oe.lane;
        if ((Gr & ue) === ue) U !== null && (U = U.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), p = oe.hasEagerState ? oe.eagerState : n(p, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          U === null ? (z = U = fe, T = p) : U = U.next = fe, Ge.lanes |= ue, Yr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== b);
      U === null ? T = p : U.next = z, nn(p, i.memoizedState) || (Et = !0), i.memoizedState = p, i.baseState = T, i.baseQueue = U, c.lastRenderedState = p;
    }
    if (n = c.interleaved, n !== null) {
      v = n;
      do
        b = v.lane, Ge.lanes |= b, Yr |= b, v = v.next;
      while (v !== n);
    } else v === null && (c.lanes = 0);
    return [i.memoizedState, c.dispatch];
  }
  function tf(n) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(r(311));
    c.lastRenderedReducer = n;
    var p = c.dispatch, v = c.pending, b = i.memoizedState;
    if (v !== null) {
      c.pending = null;
      var T = v = v.next;
      do
        b = n(b, T.action), T = T.next;
      while (T !== v);
      nn(b, i.memoizedState) || (Et = !0), i.memoizedState = b, i.baseQueue === null && (i.baseState = b), c.lastRenderedState = b;
    }
    return [b, p];
  }
  function lw() {
  }
  function uw(n, i) {
    var c = Ge, p = Kt(), v = i(), b = !nn(p.memoizedState, v);
    if (b && (p.memoizedState = v, Et = !0), p = p.queue, nf(dw.bind(null, c, p, n), [n]), p.getSnapshot !== i || b || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, os(9, fw.bind(null, c, p, v, i), void 0, null), ut === null) throw Error(r(349));
      (Gr & 30) !== 0 || cw(c, i, v);
    }
    return v;
  }
  function cw(n, i, c) {
    n.flags |= 16384, n = { getSnapshot: i, value: c }, i = Ge.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ge.updateQueue = i, i.stores = [n]) : (c = i.stores, c === null ? i.stores = [n] : c.push(n));
  }
  function fw(n, i, c, p) {
    i.value = c, i.getSnapshot = p, hw(i) && pw(n);
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
  function mw(n) {
    var i = En();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rs, lastRenderedState: n }, i.queue = n, n = n.dispatch = kI.bind(null, Ge, n), [i.memoizedState, n];
  }
  function os(n, i, c, p) {
    return n = { tag: n, create: i, destroy: c, deps: p, next: null }, i = Ge.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ge.updateQueue = i, i.lastEffect = n.next = n) : (c = i.lastEffect, c === null ? i.lastEffect = n.next = n : (p = c.next, c.next = n, n.next = p, i.lastEffect = n)), n;
  }
  function gw() {
    return Kt().memoizedState;
  }
  function $a(n, i, c, p) {
    var v = En();
    Ge.flags |= n, v.memoizedState = os(1 | i, c, void 0, p === void 0 ? null : p);
  }
  function Ba(n, i, c, p) {
    var v = Kt();
    p = p === void 0 ? null : p;
    var b = void 0;
    if (ot !== null) {
      var T = ot.memoizedState;
      if (b = T.destroy, p !== null && Qc(p, T.deps)) {
        v.memoizedState = os(i, c, b, p);
        return;
      }
    }
    Ge.flags |= n, v.memoizedState = os(1 | i, c, b, p);
  }
  function vw(n, i) {
    return $a(8390656, 8, n, i);
  }
  function nf(n, i) {
    return Ba(2048, 8, n, i);
  }
  function yw(n, i) {
    return Ba(4, 2, n, i);
  }
  function ww(n, i) {
    return Ba(4, 4, n, i);
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
    return c = c != null ? c.concat([n]) : null, Ba(4, 4, xw.bind(null, i, n), c);
  }
  function rf() {
  }
  function bw(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Qc(i, p[1]) ? p[0] : (c.memoizedState = [n, i], n);
  }
  function Sw(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Qc(i, p[1]) ? p[0] : (n = n(), c.memoizedState = [n, i], n);
  }
  function Ew(n, i, c) {
    return (Gr & 21) === 0 ? (n.baseState && (n.baseState = !1, Et = !0), n.memoizedState = c) : (nn(c, i) || (c = ca(), Ge.lanes |= c, Yr |= c, n.baseState = !0), i);
  }
  function EI(n, i) {
    var c = Le;
    Le = c !== 0 && 4 > c ? c : 4, n(!0);
    var p = Xc.transition;
    Xc.transition = {};
    try {
      n(!1), i();
    } finally {
      Le = c, Xc.transition = p;
    }
  }
  function Cw() {
    return Kt().memoizedState;
  }
  function CI(n, i, c) {
    var p = yr(n);
    if (c = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null }, kw(n)) Rw(i, c);
    else if (c = rw(n, i, c, p), c !== null) {
      var v = xt();
      ln(c, n, p, v), Nw(c, i, p);
    }
  }
  function kI(n, i, c) {
    var p = yr(n), v = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (kw(n)) Rw(i, v);
    else {
      var b = n.alternate;
      if (n.lanes === 0 && (b === null || b.lanes === 0) && (b = i.lastRenderedReducer, b !== null)) try {
        var T = i.lastRenderedState, z = b(T, c);
        if (v.hasEagerState = !0, v.eagerState = z, nn(z, T)) {
          var U = i.interleaved;
          U === null ? (v.next = v, Hc(i)) : (v.next = U.next, U.next = v), i.interleaved = v;
          return;
        }
      } catch {
      } finally {
      }
      c = rw(n, i, v, p), c !== null && (v = xt(), ln(c, n, p, v), Nw(c, i, p));
    }
  }
  function kw(n) {
    var i = n.alternate;
    return n === Ge || i !== null && i === Ge;
  }
  function Rw(n, i) {
    ts = Fa = !0;
    var c = n.pending;
    c === null ? i.next = i : (i.next = c.next, c.next = i), n.pending = i;
  }
  function Nw(n, i, c) {
    if ((c & 4194240) !== 0) {
      var p = i.lanes;
      p &= n.pendingLanes, c |= p, i.lanes = c, ic(n, c);
    }
  }
  var Va = { readContext: Yt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, RI = { readContext: Yt, useCallback: function(n, i) {
    return En().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: Yt, useEffect: vw, useImperativeHandle: function(n, i, c) {
    return c = c != null ? c.concat([n]) : null, $a(
      4194308,
      4,
      xw.bind(null, i, n),
      c
    );
  }, useLayoutEffect: function(n, i) {
    return $a(4194308, 4, n, i);
  }, useInsertionEffect: function(n, i) {
    return $a(4, 2, n, i);
  }, useMemo: function(n, i) {
    var c = En();
    return i = i === void 0 ? null : i, n = n(), c.memoizedState = [n, i], n;
  }, useReducer: function(n, i, c) {
    var p = En();
    return i = c !== void 0 ? c(i) : i, p.memoizedState = p.baseState = i, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, p.queue = n, n = n.dispatch = CI.bind(null, Ge, n), [p.memoizedState, n];
  }, useRef: function(n) {
    var i = En();
    return n = { current: n }, i.memoizedState = n;
  }, useState: mw, useDebugValue: rf, useDeferredValue: function(n) {
    return En().memoizedState = n;
  }, useTransition: function() {
    var n = mw(!1), i = n[0];
    return n = EI.bind(null, n[1]), En().memoizedState = n, [i, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, i, c) {
    var p = Ge, v = En();
    if (ze) {
      if (c === void 0) throw Error(r(407));
      c = c();
    } else {
      if (c = i(), ut === null) throw Error(r(349));
      (Gr & 30) !== 0 || cw(p, i, c);
    }
    v.memoizedState = c;
    var b = { value: c, getSnapshot: i };
    return v.queue = b, vw(dw.bind(
      null,
      p,
      b,
      n
    ), [n]), p.flags |= 2048, os(9, fw.bind(null, p, b, c, i), void 0, null), c;
  }, useId: function() {
    var n = En(), i = ut.identifierPrefix;
    if (ze) {
      var c = Fn, p = zn;
      c = (p & ~(1 << 32 - At(p) - 1)).toString(32) + c, i = ":" + i + "R" + c, c = ns++, 0 < c && (i += "H" + c.toString(32)), i += ":";
    } else c = SI++, i = ":" + i + "r" + c.toString(32) + ":";
    return n.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, NI = {
    readContext: Yt,
    useCallback: bw,
    useContext: Yt,
    useEffect: nf,
    useImperativeHandle: _w,
    useInsertionEffect: yw,
    useLayoutEffect: ww,
    useMemo: Sw,
    useReducer: ef,
    useRef: gw,
    useState: function() {
      return ef(rs);
    },
    useDebugValue: rf,
    useDeferredValue: function(n) {
      var i = Kt();
      return Ew(i, ot.memoizedState, n);
    },
    useTransition: function() {
      var n = ef(rs)[0], i = Kt().memoizedState;
      return [n, i];
    },
    useMutableSource: lw,
    useSyncExternalStore: uw,
    useId: Cw,
    unstable_isNewReconciler: !1
  }, PI = { readContext: Yt, useCallback: bw, useContext: Yt, useEffect: nf, useImperativeHandle: _w, useInsertionEffect: yw, useLayoutEffect: ww, useMemo: Sw, useReducer: tf, useRef: gw, useState: function() {
    return tf(rs);
  }, useDebugValue: rf, useDeferredValue: function(n) {
    var i = Kt();
    return ot === null ? i.memoizedState = n : Ew(i, ot.memoizedState, n);
  }, useTransition: function() {
    var n = tf(rs)[0], i = Kt().memoizedState;
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
  function of(n, i, c, p) {
    i = n.memoizedState, c = c(p, i), c = c == null ? i : Q({}, i, c), n.memoizedState = c, n.lanes === 0 && (n.updateQueue.baseState = c);
  }
  var Ha = { isMounted: function(n) {
    return (n = n._reactInternals) ? xn(n) === n : !1;
  }, enqueueSetState: function(n, i, c) {
    n = n._reactInternals;
    var p = xt(), v = yr(n), b = Bn(p, v);
    b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, p), qa(i, n, v));
  }, enqueueReplaceState: function(n, i, c) {
    n = n._reactInternals;
    var p = xt(), v = yr(n), b = Bn(p, v);
    b.tag = 1, b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, p), qa(i, n, v));
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var c = xt(), p = yr(n), v = Bn(c, p);
    v.tag = 2, i != null && (v.callback = i), i = pr(n, v, p), i !== null && (ln(i, n, p, c), qa(i, n, p));
  } };
  function Pw(n, i, c, p, v, b, T) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(p, b, T) : i.prototype && i.prototype.isPureReactComponent ? !Hi(c, p) || !Hi(v, b) : !0;
  }
  function Tw(n, i, c) {
    var p = !1, v = fr, b = i.contextType;
    return typeof b == "object" && b !== null ? b = Yt(b) : (v = St(i) ? Br : pt.current, p = i.contextTypes, b = (p = p != null) ? Io(n, v) : fr), i = new i(c, b), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ha, n.stateNode = i, i._reactInternals = n, p && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = b), i;
  }
  function Aw(n, i, c, p) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(c, p), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(c, p), i.state !== n && Ha.enqueueReplaceState(i, i.state, null);
  }
  function sf(n, i, c, p) {
    var v = n.stateNode;
    v.props = c, v.state = n.memoizedState, v.refs = {}, Wc(n);
    var b = i.contextType;
    typeof b == "object" && b !== null ? v.context = Yt(b) : (b = St(i) ? Br : pt.current, v.context = Io(n, b)), v.state = n.memoizedState, b = i.getDerivedStateFromProps, typeof b == "function" && (of(n, i, b, c), v.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (i = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), i !== v.state && Ha.enqueueReplaceState(v, v.state, null), Da(n, c, v, p), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Fo(n, i) {
    try {
      var c = "", p = i;
      do
        c += Z(p), p = p.return;
      while (p);
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
  var TI = typeof WeakMap == "function" ? WeakMap : Map;
  function Iw(n, i, c) {
    c = Bn(-1, c), c.tag = 3, c.payload = { element: null };
    var p = i.value;
    return c.callback = function() {
      Qa || (Qa = !0, Sf = p), lf(n, i);
    }, c;
  }
  function Mw(n, i, c) {
    c = Bn(-1, c), c.tag = 3;
    var p = n.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var v = i.value;
      c.payload = function() {
        return p(v);
      }, c.callback = function() {
        lf(n, i);
      };
    }
    var b = n.stateNode;
    return b !== null && typeof b.componentDidCatch == "function" && (c.callback = function() {
      lf(n, i), typeof p != "function" && (gr === null ? gr = /* @__PURE__ */ new Set([this]) : gr.add(this));
      var T = i.stack;
      this.componentDidCatch(i.value, { componentStack: T !== null ? T : "" });
    }), c;
  }
  function Ow(n, i, c) {
    var p = n.pingCache;
    if (p === null) {
      p = n.pingCache = new TI();
      var v = /* @__PURE__ */ new Set();
      p.set(i, v);
    } else v = p.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), p.set(i, v));
    v.has(c) || (v.add(c), n = HI.bind(null, n, i, c), i.then(n, n));
  }
  function Lw(n) {
    do {
      var i;
      if ((i = n.tag === 13) && (i = n.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function qw(n, i, c, p, v) {
    return (n.mode & 1) === 0 ? (n === i ? n.flags |= 65536 : (n.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (i = Bn(-1, 1), i.tag = 2, pr(c, i, 1))), c.lanes |= 1), n) : (n.flags |= 65536, n.lanes = v, n);
  }
  var AI = k.ReactCurrentOwner, Et = !1;
  function wt(n, i, c, p) {
    i.child = n === null ? nw(i, null, c, p) : qo(i, n.child, c, p);
  }
  function Dw(n, i, c, p, v) {
    c = c.render;
    var b = i.ref;
    return jo(i, v), p = Zc(n, i, c, p, b, v), c = Jc(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Vn(n, i, v)) : (ze && c && Lc(i), i.flags |= 1, wt(n, i, p, v), i.child);
  }
  function jw(n, i, c, p, v) {
    if (n === null) {
      var b = c.type;
      return typeof b == "function" && !Tf(b) && b.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (i.tag = 15, i.type = b, zw(n, i, b, p, v)) : (n = rl(c.type, null, p, i, i.mode, v), n.ref = i.ref, n.return = i, i.child = n);
    }
    if (b = n.child, (n.lanes & v) === 0) {
      var T = b.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Hi, c(T, p) && n.ref === i.ref) return Vn(n, i, v);
    }
    return i.flags |= 1, n = xr(b, p), n.ref = i.ref, n.return = i, i.child = n;
  }
  function zw(n, i, c, p, v) {
    if (n !== null) {
      var b = n.memoizedProps;
      if (Hi(b, p) && n.ref === i.ref) if (Et = !1, i.pendingProps = p = b, (n.lanes & v) !== 0) (n.flags & 131072) !== 0 && (Et = !0);
      else return i.lanes = n.lanes, Vn(n, i, v);
    }
    return uf(n, i, c, p, v);
  }
  function Fw(n, i, c) {
    var p = i.pendingProps, v = p.children, b = n !== null ? n.memoizedState : null;
    if (p.mode === "hidden") if ((i.mode & 1) === 0) i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Bo, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return n = b !== null ? b.baseLanes | c : c, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, i.updateQueue = null, qe(Bo, Lt), Lt |= n, null;
      i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, p = b !== null ? b.baseLanes : c, qe(Bo, Lt), Lt |= p;
    }
    else b !== null ? (p = b.baseLanes | c, i.memoizedState = null) : p = c, qe(Bo, Lt), Lt |= p;
    return wt(n, i, v, c), i.child;
  }
  function $w(n, i) {
    var c = i.ref;
    (n === null && c !== null || n !== null && n.ref !== c) && (i.flags |= 512, i.flags |= 2097152);
  }
  function uf(n, i, c, p, v) {
    var b = St(c) ? Br : pt.current;
    return b = Io(i, b), jo(i, v), c = Zc(n, i, c, p, b, v), p = Jc(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Vn(n, i, v)) : (ze && p && Lc(i), i.flags |= 1, wt(n, i, c, v), i.child);
  }
  function Bw(n, i, c, p, v) {
    if (St(c)) {
      var b = !0;
      Na(i);
    } else b = !1;
    if (jo(i, v), i.stateNode === null) Ua(n, i), Tw(i, c, p), sf(i, c, p, v), p = !0;
    else if (n === null) {
      var T = i.stateNode, z = i.memoizedProps;
      T.props = z;
      var U = T.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Yt(oe) : (oe = St(c) ? Br : pt.current, oe = Io(i, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      fe || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (z !== p || U !== oe) && Aw(i, T, p, oe), hr = !1;
      var le = i.memoizedState;
      T.state = le, Da(i, p, T, v), U = i.memoizedState, z !== p || le !== U || bt.current || hr ? (typeof ue == "function" && (of(i, c, ue, p), U = i.memoizedState), (z = hr || Pw(i, c, z, p, le, U, oe)) ? (fe || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = p, i.memoizedState = U), T.props = p, T.state = U, T.context = oe, p = z) : (typeof T.componentDidMount == "function" && (i.flags |= 4194308), p = !1);
    } else {
      T = i.stateNode, ow(n, i), z = i.memoizedProps, oe = i.type === i.elementType ? z : on(i.type, z), T.props = oe, fe = i.pendingProps, le = T.context, U = c.contextType, typeof U == "object" && U !== null ? U = Yt(U) : (U = St(c) ? Br : pt.current, U = Io(i, U));
      var me = c.getDerivedStateFromProps;
      (ue = typeof me == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (z !== fe || le !== U) && Aw(i, T, p, U), hr = !1, le = i.memoizedState, T.state = le, Da(i, p, T, v);
      var we = i.memoizedState;
      z !== fe || le !== we || bt.current || hr ? (typeof me == "function" && (of(i, c, me, p), we = i.memoizedState), (oe = hr || Pw(i, c, oe, p, le, we, U) || !1) ? (ue || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(p, we, U), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(p, we, U)), typeof T.componentDidUpdate == "function" && (i.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), i.memoizedProps = p, i.memoizedState = we), T.props = p, T.state = we, T.context = U, p = oe) : (typeof T.componentDidUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), p = !1);
    }
    return cf(n, i, c, p, b, v);
  }
  function cf(n, i, c, p, v, b) {
    $w(n, i);
    var T = (i.flags & 128) !== 0;
    if (!p && !T) return v && G0(i, c, !1), Vn(n, i, b);
    p = i.stateNode, AI.current = i;
    var z = T && typeof c.getDerivedStateFromError != "function" ? null : p.render();
    return i.flags |= 1, n !== null && T ? (i.child = qo(i, n.child, null, b), i.child = qo(i, null, z, b)) : wt(n, i, z, b), i.memoizedState = p.state, v && G0(i, c, !0), i.child;
  }
  function Vw(n) {
    var i = n.stateNode;
    i.pendingContext ? W0(n, i.pendingContext, i.pendingContext !== i.context) : i.context && W0(n, i.context, !1), Uc(n, i.containerInfo);
  }
  function Hw(n, i, c, p, v) {
    return Lo(), zc(v), i.flags |= 256, wt(n, i, c, p), i.child;
  }
  var ff = { dehydrated: null, treeContext: null, retryLane: 0 };
  function df(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ww(n, i, c) {
    var p = i.pendingProps, v = Ue.current, b = !1, T = (i.flags & 128) !== 0, z;
    if ((z = T) || (z = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), z ? (b = !0, i.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), qe(Ue, v & 1), n === null)
      return jc(i), n = i.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((i.mode & 1) === 0 ? i.lanes = 1 : n.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824, null) : (T = p.children, n = p.fallback, b ? (p = i.mode, b = i.child, T = { mode: "hidden", children: T }, (p & 1) === 0 && b !== null ? (b.childLanes = 0, b.pendingProps = T) : b = ol(T, p, 0, null), n = Zr(n, p, c, null), b.return = i, n.return = i, b.sibling = n, i.child = b, i.child.memoizedState = df(c), i.memoizedState = ff, n) : hf(i, T));
    if (v = n.memoizedState, v !== null && (z = v.dehydrated, z !== null)) return II(n, i, T, p, z, v, c);
    if (b) {
      b = p.fallback, T = i.mode, v = n.child, z = v.sibling;
      var U = { mode: "hidden", children: p.children };
      return (T & 1) === 0 && i.child !== v ? (p = i.child, p.childLanes = 0, p.pendingProps = U, i.deletions = null) : (p = xr(v, U), p.subtreeFlags = v.subtreeFlags & 14680064), z !== null ? b = xr(z, b) : (b = Zr(b, T, c, null), b.flags |= 2), b.return = i, p.return = i, p.sibling = b, i.child = p, p = b, b = i.child, T = n.child.memoizedState, T = T === null ? df(c) : { baseLanes: T.baseLanes | c, cachePool: null, transitions: T.transitions }, b.memoizedState = T, b.childLanes = n.childLanes & ~c, i.memoizedState = ff, p;
    }
    return b = n.child, n = b.sibling, p = xr(b, { mode: "visible", children: p.children }), (i.mode & 1) === 0 && (p.lanes = c), p.return = i, p.sibling = null, n !== null && (c = i.deletions, c === null ? (i.deletions = [n], i.flags |= 16) : c.push(n)), i.child = p, i.memoizedState = null, p;
  }
  function hf(n, i) {
    return i = ol({ mode: "visible", children: i }, n.mode, 0, null), i.return = n, n.child = i;
  }
  function Wa(n, i, c, p) {
    return p !== null && zc(p), qo(i, n.child, null, c), n = hf(i, i.pendingProps.children), n.flags |= 2, i.memoizedState = null, n;
  }
  function II(n, i, c, p, v, b, T) {
    if (c)
      return i.flags & 256 ? (i.flags &= -257, p = af(Error(r(422))), Wa(n, i, T, p)) : i.memoizedState !== null ? (i.child = n.child, i.flags |= 128, null) : (b = p.fallback, v = i.mode, p = ol({ mode: "visible", children: p.children }, v, 0, null), b = Zr(b, v, T, null), b.flags |= 2, p.return = i, b.return = i, p.sibling = b, i.child = p, (i.mode & 1) !== 0 && qo(i, n.child, null, T), i.child.memoizedState = df(T), i.memoizedState = ff, b);
    if ((i.mode & 1) === 0) return Wa(n, i, T, null);
    if (v.data === "$!") {
      if (p = v.nextSibling && v.nextSibling.dataset, p) var z = p.dgst;
      return p = z, b = Error(r(419)), p = af(b, p, void 0), Wa(n, i, T, p);
    }
    if (z = (T & n.childLanes) !== 0, Et || z) {
      if (p = ut, p !== null) {
        switch (T & -T) {
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
        v = (v & (p.suspendedLanes | T)) !== 0 ? 0 : v, v !== 0 && v !== b.retryLane && (b.retryLane = v, $n(n, v), ln(p, n, v, -1));
      }
      return Pf(), p = af(Error(r(421))), Wa(n, i, T, p);
    }
    return v.data === "$?" ? (i.flags |= 128, i.child = n.child, i = WI.bind(null, n), v._reactRetry = i, null) : (n = b.treeContext, Ot = ur(v.nextSibling), Mt = i, ze = !0, rn = null, n !== null && (Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Vr, zn = n.id, Fn = n.overflow, Vr = i), i = hf(i, p.children), i.flags |= 4096, i);
  }
  function Uw(n, i, c) {
    n.lanes |= i;
    var p = n.alternate;
    p !== null && (p.lanes |= i), Vc(n.return, i, c);
  }
  function pf(n, i, c, p, v) {
    var b = n.memoizedState;
    b === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: p, tail: c, tailMode: v } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = p, b.tail = c, b.tailMode = v);
  }
  function Gw(n, i, c) {
    var p = i.pendingProps, v = p.revealOrder, b = p.tail;
    if (wt(n, i, p.children, c), p = Ue.current, (p & 2) !== 0) p = p & 1 | 2, i.flags |= 128;
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
      p &= 1;
    }
    if (qe(Ue, p), (i.mode & 1) === 0) i.memoizedState = null;
    else switch (v) {
      case "forwards":
        for (c = i.child, v = null; c !== null; ) n = c.alternate, n !== null && ja(n) === null && (v = c), c = c.sibling;
        c = v, c === null ? (v = i.child, i.child = null) : (v = c.sibling, c.sibling = null), pf(i, !1, v, c, b);
        break;
      case "backwards":
        for (c = null, v = i.child, i.child = null; v !== null; ) {
          if (n = v.alternate, n !== null && ja(n) === null) {
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
  function Ua(n, i) {
    (i.mode & 1) === 0 && n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2);
  }
  function Vn(n, i, c) {
    if (n !== null && (i.dependencies = n.dependencies), Yr |= i.lanes, (c & i.childLanes) === 0) return null;
    if (n !== null && i.child !== n.child) throw Error(r(153));
    if (i.child !== null) {
      for (n = i.child, c = xr(n, n.pendingProps), i.child = c, c.return = i; n.sibling !== null; ) n = n.sibling, c = c.sibling = xr(n, n.pendingProps), c.return = i;
      c.sibling = null;
    }
    return i.child;
  }
  function MI(n, i, c) {
    switch (i.tag) {
      case 3:
        Vw(i), Lo();
        break;
      case 5:
        aw(i);
        break;
      case 1:
        St(i.type) && Na(i);
        break;
      case 4:
        Uc(i, i.stateNode.containerInfo);
        break;
      case 10:
        var p = i.type._context, v = i.memoizedProps.value;
        qe(Oa, p._currentValue), p._currentValue = v;
        break;
      case 13:
        if (p = i.memoizedState, p !== null)
          return p.dehydrated !== null ? (qe(Ue, Ue.current & 1), i.flags |= 128, null) : (c & i.child.childLanes) !== 0 ? Ww(n, i, c) : (qe(Ue, Ue.current & 1), n = Vn(n, i, c), n !== null ? n.sibling : null);
        qe(Ue, Ue.current & 1);
        break;
      case 19:
        if (p = (c & i.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (p) return Gw(n, i, c);
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), qe(Ue, Ue.current), p) break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, Fw(n, i, c);
    }
    return Vn(n, i, c);
  }
  var Yw, mf, Kw, Xw;
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
  }, mf = function() {
  }, Kw = function(n, i, c, p) {
    var v = n.memoizedProps;
    if (v !== p) {
      n = i.stateNode, Ur(Sn.current);
      var b = null;
      switch (c) {
        case "input":
          v = be(n, v), p = be(n, p), b = [];
          break;
        case "select":
          v = Q({}, v, { value: void 0 }), p = Q({}, p, { value: void 0 }), b = [];
          break;
        case "textarea":
          v = at(n, v), p = at(n, p), b = [];
          break;
        default:
          typeof v.onClick != "function" && typeof p.onClick == "function" && (n.onclick = Ca);
      }
      bi(c, p);
      var T;
      c = null;
      for (oe in v) if (!p.hasOwnProperty(oe) && v.hasOwnProperty(oe) && v[oe] != null) if (oe === "style") {
        var z = v[oe];
        for (T in z) z.hasOwnProperty(T) && (c || (c = {}), c[T] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (s.hasOwnProperty(oe) ? b || (b = []) : (b = b || []).push(oe, null));
      for (oe in p) {
        var U = p[oe];
        if (z = v != null ? v[oe] : void 0, p.hasOwnProperty(oe) && U !== z && (U != null || z != null)) if (oe === "style") if (z) {
          for (T in z) !z.hasOwnProperty(T) || U && U.hasOwnProperty(T) || (c || (c = {}), c[T] = "");
          for (T in U) U.hasOwnProperty(T) && z[T] !== U[T] && (c || (c = {}), c[T] = U[T]);
        } else c || (b || (b = []), b.push(
          oe,
          c
        )), c = U;
        else oe === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, z = z ? z.__html : void 0, U != null && z !== U && (b = b || []).push(oe, U)) : oe === "children" ? typeof U != "string" && typeof U != "number" || (b = b || []).push(oe, "" + U) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (s.hasOwnProperty(oe) ? (U != null && oe === "onScroll" && De("scroll", n), b || z === U || (b = [])) : (b = b || []).push(oe, U));
      }
      c && (b = b || []).push("style", c);
      var oe = b;
      (i.updateQueue = oe) && (i.flags |= 4);
    }
  }, Xw = function(n, i, c, p) {
    c !== p && (i.flags |= 4);
  };
  function is(n, i) {
    if (!ze) switch (n.tailMode) {
      case "hidden":
        i = n.tail;
        for (var c = null; i !== null; ) i.alternate !== null && (c = i), i = i.sibling;
        c === null ? n.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = n.tail;
        for (var p = null; c !== null; ) c.alternate !== null && (p = c), c = c.sibling;
        p === null ? i || n.tail === null ? n.tail = null : n.tail.sibling = null : p.sibling = null;
    }
  }
  function gt(n) {
    var i = n.alternate !== null && n.alternate.child === n.child, c = 0, p = 0;
    if (i) for (var v = n.child; v !== null; ) c |= v.lanes | v.childLanes, p |= v.subtreeFlags & 14680064, p |= v.flags & 14680064, v.return = n, v = v.sibling;
    else for (v = n.child; v !== null; ) c |= v.lanes | v.childLanes, p |= v.subtreeFlags, p |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= p, n.childLanes = c, i;
  }
  function OI(n, i, c) {
    var p = i.pendingProps;
    switch (qc(i), i.tag) {
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
        return St(i.type) && Ra(), gt(i), null;
      case 3:
        return p = i.stateNode, zo(), je(bt), je(pt), Kc(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), (n === null || n.child === null) && (Ia(i) ? i.flags |= 4 : n === null || n.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, rn !== null && (kf(rn), rn = null))), mf(n, i), gt(i), null;
      case 5:
        Gc(i);
        var v = Ur(es.current);
        if (c = i.type, n !== null && i.stateNode != null) Kw(n, i, c, p, v), n.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!p) {
            if (i.stateNode === null) throw Error(r(166));
            return gt(i), null;
          }
          if (n = Ur(Sn.current), Ia(i)) {
            p = i.stateNode, c = i.type;
            var b = i.memoizedProps;
            switch (p[bn] = i, p[Ki] = b, n = (i.mode & 1) !== 0, c) {
              case "dialog":
                De("cancel", p), De("close", p);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", p);
                break;
              case "video":
              case "audio":
                for (v = 0; v < Ui.length; v++) De(Ui[v], p);
                break;
              case "source":
                De("error", p);
                break;
              case "img":
              case "image":
              case "link":
                De(
                  "error",
                  p
                ), De("load", p);
                break;
              case "details":
                De("toggle", p);
                break;
              case "input":
                ge(p, b), De("invalid", p);
                break;
              case "select":
                p._wrapperState = { wasMultiple: !!b.multiple }, De("invalid", p);
                break;
              case "textarea":
                He(p, b), De("invalid", p);
            }
            bi(c, b), v = null;
            for (var T in b) if (b.hasOwnProperty(T)) {
              var z = b[T];
              T === "children" ? typeof z == "string" ? p.textContent !== z && (b.suppressHydrationWarning !== !0 && Ea(p.textContent, z, n), v = ["children", z]) : typeof z == "number" && p.textContent !== "" + z && (b.suppressHydrationWarning !== !0 && Ea(
                p.textContent,
                z,
                n
              ), v = ["children", "" + z]) : s.hasOwnProperty(T) && z != null && T === "onScroll" && De("scroll", p);
            }
            switch (c) {
              case "input":
                ce(p), Ze(p, b, !0);
                break;
              case "textarea":
                ce(p), $t(p);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof b.onClick == "function" && (p.onclick = Ca);
            }
            p = v, i.updateQueue = p, p !== null && (i.flags |= 4);
          } else {
            T = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = tn(c)), n === "http://www.w3.org/1999/xhtml" ? c === "script" ? (n = T.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof p.is == "string" ? n = T.createElement(c, { is: p.is }) : (n = T.createElement(c), c === "select" && (T = n, p.multiple ? T.multiple = !0 : p.size && (T.size = p.size))) : n = T.createElementNS(n, c), n[bn] = i, n[Ki] = p, Yw(n, i, !1, !1), i.stateNode = n;
            e: {
              switch (T = Si(c, p), c) {
                case "dialog":
                  De("cancel", n), De("close", n), v = p;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", n), v = p;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < Ui.length; v++) De(Ui[v], n);
                  v = p;
                  break;
                case "source":
                  De("error", n), v = p;
                  break;
                case "img":
                case "image":
                case "link":
                  De(
                    "error",
                    n
                  ), De("load", n), v = p;
                  break;
                case "details":
                  De("toggle", n), v = p;
                  break;
                case "input":
                  ge(n, p), v = be(n, p), De("invalid", n);
                  break;
                case "option":
                  v = p;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!p.multiple }, v = Q({}, p, { value: void 0 }), De("invalid", n);
                  break;
                case "textarea":
                  He(n, p), v = at(n, p), De("invalid", n);
                  break;
                default:
                  v = p;
              }
              bi(c, v), z = v;
              for (b in z) if (z.hasOwnProperty(b)) {
                var U = z[b];
                b === "style" ? Ht(n, U) : b === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Lr(n, U)) : b === "children" ? typeof U == "string" ? (c !== "textarea" || U !== "") && Vt(n, U) : typeof U == "number" && Vt(n, "" + U) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (s.hasOwnProperty(b) ? U != null && b === "onScroll" && De("scroll", n) : U != null && _(n, b, U, T));
              }
              switch (c) {
                case "input":
                  ce(n), Ze(n, p, !1);
                  break;
                case "textarea":
                  ce(n), $t(n);
                  break;
                case "option":
                  p.value != null && n.setAttribute("value", "" + te(p.value));
                  break;
                case "select":
                  n.multiple = !!p.multiple, b = p.value, b != null ? ht(n, !!p.multiple, b, !1) : p.defaultValue != null && ht(
                    n,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (n.onclick = Ca);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  p = !!p.autoFocus;
                  break e;
                case "img":
                  p = !0;
                  break e;
                default:
                  p = !1;
              }
            }
            p && (i.flags |= 4);
          }
          i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
        }
        return gt(i), null;
      case 6:
        if (n && i.stateNode != null) Xw(n, i, n.memoizedProps, p);
        else {
          if (typeof p != "string" && i.stateNode === null) throw Error(r(166));
          if (c = Ur(es.current), Ur(Sn.current), Ia(i)) {
            if (p = i.stateNode, c = i.memoizedProps, p[bn] = i, (b = p.nodeValue !== c) && (n = Mt, n !== null)) switch (n.tag) {
              case 3:
                Ea(p.nodeValue, c, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ea(p.nodeValue, c, (n.mode & 1) !== 0);
            }
            b && (i.flags |= 4);
          } else p = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(p), p[bn] = i, i.stateNode = p;
        }
        return gt(i), null;
      case 13:
        if (je(Ue), p = i.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ze && Ot !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0) J0(), Lo(), i.flags |= 98560, b = !1;
          else if (b = Ia(i), p !== null && p.dehydrated !== null) {
            if (n === null) {
              if (!b) throw Error(r(318));
              if (b = i.memoizedState, b = b !== null ? b.dehydrated : null, !b) throw Error(r(317));
              b[bn] = i;
            } else Lo(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            gt(i), b = !1;
          } else rn !== null && (kf(rn), rn = null), b = !0;
          if (!b) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0 ? (i.lanes = c, i) : (p = p !== null, p !== (n !== null && n.memoizedState !== null) && p && (i.child.flags |= 8192, (i.mode & 1) !== 0 && (n === null || (Ue.current & 1) !== 0 ? it === 0 && (it = 3) : Pf())), i.updateQueue !== null && (i.flags |= 4), gt(i), null);
      case 4:
        return zo(), mf(n, i), n === null && Gi(i.stateNode.containerInfo), gt(i), null;
      case 10:
        return Bc(i.type._context), gt(i), null;
      case 17:
        return St(i.type) && Ra(), gt(i), null;
      case 19:
        if (je(Ue), b = i.memoizedState, b === null) return gt(i), null;
        if (p = (i.flags & 128) !== 0, T = b.rendering, T === null) if (p) is(b, !1);
        else {
          if (it !== 0 || n !== null && (n.flags & 128) !== 0) for (n = i.child; n !== null; ) {
            if (T = ja(n), T !== null) {
              for (i.flags |= 128, is(b, !1), p = T.updateQueue, p !== null && (i.updateQueue = p, i.flags |= 4), i.subtreeFlags = 0, p = c, c = i.child; c !== null; ) b = c, n = p, b.flags &= 14680066, T = b.alternate, T === null ? (b.childLanes = 0, b.lanes = n, b.child = null, b.subtreeFlags = 0, b.memoizedProps = null, b.memoizedState = null, b.updateQueue = null, b.dependencies = null, b.stateNode = null) : (b.childLanes = T.childLanes, b.lanes = T.lanes, b.child = T.child, b.subtreeFlags = 0, b.deletions = null, b.memoizedProps = T.memoizedProps, b.memoizedState = T.memoizedState, b.updateQueue = T.updateQueue, b.type = T.type, n = T.dependencies, b.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), c = c.sibling;
              return qe(Ue, Ue.current & 1 | 2), i.child;
            }
            n = n.sibling;
          }
          b.tail !== null && We() > Vo && (i.flags |= 128, p = !0, is(b, !1), i.lanes = 4194304);
        }
        else {
          if (!p) if (n = ja(T), n !== null) {
            if (i.flags |= 128, p = !0, c = n.updateQueue, c !== null && (i.updateQueue = c, i.flags |= 4), is(b, !0), b.tail === null && b.tailMode === "hidden" && !T.alternate && !ze) return gt(i), null;
          } else 2 * We() - b.renderingStartTime > Vo && c !== 1073741824 && (i.flags |= 128, p = !0, is(b, !1), i.lanes = 4194304);
          b.isBackwards ? (T.sibling = i.child, i.child = T) : (c = b.last, c !== null ? c.sibling = T : i.child = T, b.last = T);
        }
        return b.tail !== null ? (i = b.tail, b.rendering = i, b.tail = i.sibling, b.renderingStartTime = We(), i.sibling = null, c = Ue.current, qe(Ue, p ? c & 1 | 2 : c & 1), i) : (gt(i), null);
      case 22:
      case 23:
        return Nf(), p = i.memoizedState !== null, n !== null && n.memoizedState !== null !== p && (i.flags |= 8192), p && (i.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (gt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : gt(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function LI(n, i) {
    switch (qc(i), i.tag) {
      case 1:
        return St(i.type) && Ra(), n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 3:
        return zo(), je(bt), je(pt), Kc(), n = i.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (i.flags = n & -65537 | 128, i) : null;
      case 5:
        return Gc(i), null;
      case 13:
        if (je(Ue), n = i.memoizedState, n !== null && n.dehydrated !== null) {
          if (i.alternate === null) throw Error(r(340));
          Lo();
        }
        return n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 19:
        return je(Ue), null;
      case 4:
        return zo(), null;
      case 10:
        return Bc(i.type._context), null;
      case 22:
      case 23:
        return Nf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ga = !1, vt = !1, qI = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function $o(n, i) {
    var c = n.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (p) {
      Xe(n, i, p);
    }
    else c.current = null;
  }
  function gf(n, i, c) {
    try {
      c();
    } catch (p) {
      Xe(n, i, p);
    }
  }
  var Qw = !1;
  function DI(n, i) {
    if (Rc = ha, n = P0(), wc(n)) {
      if ("selectionStart" in n) var c = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        c = (c = n.ownerDocument) && c.defaultView || window;
        var p = c.getSelection && c.getSelection();
        if (p && p.rangeCount !== 0) {
          c = p.anchorNode;
          var v = p.anchorOffset, b = p.focusNode;
          p = p.focusOffset;
          try {
            c.nodeType, b.nodeType;
          } catch {
            c = null;
            break e;
          }
          var T = 0, z = -1, U = -1, oe = 0, ue = 0, fe = n, le = null;
          t: for (; ; ) {
            for (var me; fe !== c || v !== 0 && fe.nodeType !== 3 || (z = T + v), fe !== b || p !== 0 && fe.nodeType !== 3 || (U = T + p), fe.nodeType === 3 && (T += fe.nodeValue.length), (me = fe.firstChild) !== null; )
              le = fe, fe = me;
            for (; ; ) {
              if (fe === n) break t;
              if (le === c && ++oe === v && (z = T), le === b && ++ue === p && (U = T), (me = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = me;
          }
          c = z === -1 || U === -1 ? null : { start: z, end: U };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (Nc = { focusedElem: n, selectionRange: c }, ha = !1, ve = i; ve !== null; ) if (i = ve, n = i.child, (i.subtreeFlags & 1028) !== 0 && n !== null) n.return = i, ve = n;
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
              var Se = we.memoizedProps, Je = we.memoizedState, ne = i.stateNode, J = ne.getSnapshotBeforeUpdate(i.elementType === i.type ? Se : on(i.type, Se), Je);
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
        Xe(i, i.return, he);
      }
      if (n = i.sibling, n !== null) {
        n.return = i.return, ve = n;
        break;
      }
      ve = i.return;
    }
    return we = Qw, Qw = !1, we;
  }
  function ss(n, i, c) {
    var p = i.updateQueue;
    if (p = p !== null ? p.lastEffect : null, p !== null) {
      var v = p = p.next;
      do {
        if ((v.tag & n) === n) {
          var b = v.destroy;
          v.destroy = void 0, b !== void 0 && gf(i, c, b);
        }
        v = v.next;
      } while (v !== p);
    }
  }
  function Ya(n, i) {
    if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
      var c = i = i.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.create;
          c.destroy = p();
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
    i !== null && (n.alternate = null, Zw(i)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (i = n.stateNode, i !== null && (delete i[bn], delete i[Ki], delete i[Ic], delete i[wI], delete i[xI])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
    var p = n.tag;
    if (p === 5 || p === 6) n = n.stateNode, i ? c.nodeType === 8 ? c.parentNode.insertBefore(n, i) : c.insertBefore(n, i) : (c.nodeType === 8 ? (i = c.parentNode, i.insertBefore(n, c)) : (i = c, i.appendChild(n)), c = c._reactRootContainer, c != null || i.onclick !== null || (i.onclick = Ca));
    else if (p !== 4 && (n = n.child, n !== null)) for (yf(n, i, c), n = n.sibling; n !== null; ) yf(n, i, c), n = n.sibling;
  }
  function wf(n, i, c) {
    var p = n.tag;
    if (p === 5 || p === 6) n = n.stateNode, i ? c.insertBefore(n, i) : c.appendChild(n);
    else if (p !== 4 && (n = n.child, n !== null)) for (wf(n, i, c), n = n.sibling; n !== null; ) wf(n, i, c), n = n.sibling;
  }
  var ft = null, sn = !1;
  function mr(n, i, c) {
    for (c = c.child; c !== null; ) tx(n, i, c), c = c.sibling;
  }
  function tx(n, i, c) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
      Wt.onCommitFiberUnmount(zr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        vt || $o(c, i);
      case 6:
        var p = ft, v = sn;
        ft = null, mr(n, i, c), ft = p, sn = v, ft !== null && (sn ? (n = ft, c = c.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(c) : n.removeChild(c)) : ft.removeChild(c.stateNode));
        break;
      case 18:
        ft !== null && (sn ? (n = ft, c = c.stateNode, n.nodeType === 8 ? Ac(n.parentNode, c) : n.nodeType === 1 && Ac(n, c), ji(n)) : Ac(ft, c.stateNode));
        break;
      case 4:
        p = ft, v = sn, ft = c.stateNode.containerInfo, sn = !0, mr(n, i, c), ft = p, sn = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (p = c.updateQueue, p !== null && (p = p.lastEffect, p !== null))) {
          v = p = p.next;
          do {
            var b = v, T = b.destroy;
            b = b.tag, T !== void 0 && ((b & 2) !== 0 || (b & 4) !== 0) && gf(c, i, T), v = v.next;
          } while (v !== p);
        }
        mr(n, i, c);
        break;
      case 1:
        if (!vt && ($o(c, i), p = c.stateNode, typeof p.componentWillUnmount == "function")) try {
          p.props = c.memoizedProps, p.state = c.memoizedState, p.componentWillUnmount();
        } catch (z) {
          Xe(c, i, z);
        }
        mr(n, i, c);
        break;
      case 21:
        mr(n, i, c);
        break;
      case 22:
        c.mode & 1 ? (vt = (p = vt) || c.memoizedState !== null, mr(n, i, c), vt = p) : mr(n, i, c);
        break;
      default:
        mr(n, i, c);
    }
  }
  function nx(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var c = n.stateNode;
      c === null && (c = n.stateNode = new qI()), i.forEach(function(p) {
        var v = UI.bind(null, n, p);
        c.has(p) || (c.add(p), p.then(v, v));
      });
    }
  }
  function an(n, i) {
    var c = i.deletions;
    if (c !== null) for (var p = 0; p < c.length; p++) {
      var v = c[p];
      try {
        var b = n, T = i, z = T;
        e: for (; z !== null; ) {
          switch (z.tag) {
            case 5:
              ft = z.stateNode, sn = !1;
              break e;
            case 3:
              ft = z.stateNode.containerInfo, sn = !0;
              break e;
            case 4:
              ft = z.stateNode.containerInfo, sn = !0;
              break e;
          }
          z = z.return;
        }
        if (ft === null) throw Error(r(160));
        tx(b, T, v), ft = null, sn = !1;
        var U = v.alternate;
        U !== null && (U.return = null), v.return = null;
      } catch (oe) {
        Xe(v, i, oe);
      }
    }
    if (i.subtreeFlags & 12854) for (i = i.child; i !== null; ) rx(i, n), i = i.sibling;
  }
  function rx(n, i) {
    var c = n.alternate, p = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(i, n), Cn(n), p & 4) {
          try {
            ss(3, n, n.return), Ya(3, n);
          } catch (Se) {
            Xe(n, n.return, Se);
          }
          try {
            ss(5, n, n.return);
          } catch (Se) {
            Xe(n, n.return, Se);
          }
        }
        break;
      case 1:
        an(i, n), Cn(n), p & 512 && c !== null && $o(c, c.return);
        break;
      case 5:
        if (an(i, n), Cn(n), p & 512 && c !== null && $o(c, c.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Vt(v, "");
          } catch (Se) {
            Xe(n, n.return, Se);
          }
        }
        if (p & 4 && (v = n.stateNode, v != null)) {
          var b = n.memoizedProps, T = c !== null ? c.memoizedProps : b, z = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            z === "input" && b.type === "radio" && b.name != null && Ne(v, b), Si(z, T);
            var oe = Si(z, b);
            for (T = 0; T < U.length; T += 2) {
              var ue = U[T], fe = U[T + 1];
              ue === "style" ? Ht(v, fe) : ue === "dangerouslySetInnerHTML" ? Lr(v, fe) : ue === "children" ? Vt(v, fe) : _(v, ue, fe, oe);
            }
            switch (z) {
              case "input":
                Ee(v, b);
                break;
              case "textarea":
                en(v, b);
                break;
              case "select":
                var le = v._wrapperState.wasMultiple;
                v._wrapperState.wasMultiple = !!b.multiple;
                var me = b.value;
                me != null ? ht(v, !!b.multiple, me, !1) : le !== !!b.multiple && (b.defaultValue != null ? ht(
                  v,
                  !!b.multiple,
                  b.defaultValue,
                  !0
                ) : ht(v, !!b.multiple, b.multiple ? [] : "", !1));
            }
            v[Ki] = b;
          } catch (Se) {
            Xe(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (an(i, n), Cn(n), p & 4) {
          if (n.stateNode === null) throw Error(r(162));
          v = n.stateNode, b = n.memoizedProps;
          try {
            v.nodeValue = b;
          } catch (Se) {
            Xe(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (an(i, n), Cn(n), p & 4 && c !== null && c.memoizedState.isDehydrated) try {
          ji(i.containerInfo);
        } catch (Se) {
          Xe(n, n.return, Se);
        }
        break;
      case 4:
        an(i, n), Cn(n);
        break;
      case 13:
        an(i, n), Cn(n), v = n.child, v.flags & 8192 && (b = v.memoizedState !== null, v.stateNode.isHidden = b, !b || v.alternate !== null && v.alternate.memoizedState !== null || (bf = We())), p & 4 && nx(n);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, n.mode & 1 ? (vt = (oe = vt) || ue, an(i, n), vt = oe) : an(i, n), Cn(n), p & 8192) {
          if (oe = n.memoizedState !== null, (n.stateNode.isHidden = oe) && !ue && (n.mode & 1) !== 0) for (ve = n, ue = n.child; ue !== null; ) {
            for (fe = ve = ue; ve !== null; ) {
              switch (le = ve, me = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ss(4, le, le.return);
                  break;
                case 1:
                  $o(le, le.return);
                  var we = le.stateNode;
                  if (typeof we.componentWillUnmount == "function") {
                    p = le, c = le.return;
                    try {
                      i = p, we.props = i.memoizedProps, we.state = i.memoizedState, we.componentWillUnmount();
                    } catch (Se) {
                      Xe(p, c, Se);
                    }
                  }
                  break;
                case 5:
                  $o(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    sx(fe);
                    continue;
                  }
              }
              me !== null ? (me.return = le, ve = me) : sx(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = n; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  v = fe.stateNode, oe ? (b = v.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none") : (z = fe.stateNode, U = fe.memoizedProps.style, T = U != null && U.hasOwnProperty("display") ? U.display : null, z.style.display = Tt("display", T));
                } catch (Se) {
                  Xe(n, n.return, Se);
                }
              }
            } else if (fe.tag === 6) {
              if (ue === null) try {
                fe.stateNode.nodeValue = oe ? "" : fe.memoizedProps;
              } catch (Se) {
                Xe(n, n.return, Se);
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
        an(i, n), Cn(n), p & 4 && nx(n);
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
              var p = c;
              break e;
            }
            c = c.return;
          }
          throw Error(r(160));
        }
        switch (p.tag) {
          case 5:
            var v = p.stateNode;
            p.flags & 32 && (Vt(v, ""), p.flags &= -33);
            var b = ex(n);
            wf(n, b, v);
            break;
          case 3:
          case 4:
            var T = p.stateNode.containerInfo, z = ex(n);
            yf(n, z, T);
            break;
          default:
            throw Error(r(161));
        }
      } catch (U) {
        Xe(n, n.return, U);
      }
      n.flags &= -3;
    }
    i & 4096 && (n.flags &= -4097);
  }
  function jI(n, i, c) {
    ve = n, ox(n);
  }
  function ox(n, i, c) {
    for (var p = (n.mode & 1) !== 0; ve !== null; ) {
      var v = ve, b = v.child;
      if (v.tag === 22 && p) {
        var T = v.memoizedState !== null || Ga;
        if (!T) {
          var z = v.alternate, U = z !== null && z.memoizedState !== null || vt;
          z = Ga;
          var oe = vt;
          if (Ga = T, (vt = U) && !oe) for (ve = v; ve !== null; ) T = ve, U = T.child, T.tag === 22 && T.memoizedState !== null ? ax(v) : U !== null ? (U.return = T, ve = U) : ax(v);
          for (; b !== null; ) ve = b, ox(b), b = b.sibling;
          ve = v, Ga = z, vt = oe;
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
              vt || Ya(5, i);
              break;
            case 1:
              var p = i.stateNode;
              if (i.flags & 4 && !vt) if (c === null) p.componentDidMount();
              else {
                var v = i.elementType === i.type ? c.memoizedProps : on(i.type, c.memoizedProps);
                p.componentDidUpdate(v, c.memoizedState, p.__reactInternalSnapshotBeforeUpdate);
              }
              var b = i.updateQueue;
              b !== null && sw(i, b, p);
              break;
            case 3:
              var T = i.updateQueue;
              if (T !== null) {
                if (c = null, i.child !== null) switch (i.child.tag) {
                  case 5:
                    c = i.child.stateNode;
                    break;
                  case 1:
                    c = i.child.stateNode;
                }
                sw(i, T, c);
              }
              break;
            case 5:
              var z = i.stateNode;
              if (c === null && i.flags & 4) {
                c = z;
                var U = i.memoizedProps;
                switch (i.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    U.autoFocus && c.focus();
                    break;
                  case "img":
                    U.src && (c.src = U.src);
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
                    fe !== null && ji(fe);
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
          vt || i.flags & 512 && vf(i);
        } catch (le) {
          Xe(i, i.return, le);
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
              Ya(4, i);
            } catch (U) {
              Xe(i, c, U);
            }
            break;
          case 1:
            var p = i.stateNode;
            if (typeof p.componentDidMount == "function") {
              var v = i.return;
              try {
                p.componentDidMount();
              } catch (U) {
                Xe(i, v, U);
              }
            }
            var b = i.return;
            try {
              vf(i);
            } catch (U) {
              Xe(i, b, U);
            }
            break;
          case 5:
            var T = i.return;
            try {
              vf(i);
            } catch (U) {
              Xe(i, T, U);
            }
        }
      } catch (U) {
        Xe(i, i.return, U);
      }
      if (i === n) {
        ve = null;
        break;
      }
      var z = i.sibling;
      if (z !== null) {
        z.return = i.return, ve = z;
        break;
      }
      ve = i.return;
    }
  }
  var zI = Math.ceil, Ka = k.ReactCurrentDispatcher, xf = k.ReactCurrentOwner, Xt = k.ReactCurrentBatchConfig, Me = 0, ut = null, et = null, dt = 0, Lt = 0, Bo = cr(0), it = 0, as = null, Yr = 0, Xa = 0, _f = 0, ls = null, Ct = null, bf = 0, Vo = 1 / 0, Hn = null, Qa = !1, Sf = null, gr = null, Za = !1, vr = null, Ja = 0, us = 0, Ef = null, el = -1, tl = 0;
  function xt() {
    return (Me & 6) !== 0 ? We() : el !== -1 ? el : el = We();
  }
  function yr(n) {
    return (n.mode & 1) === 0 ? 1 : (Me & 2) !== 0 && dt !== 0 ? dt & -dt : bI.transition !== null ? (tl === 0 && (tl = ca()), tl) : (n = Le, n !== 0 || (n = window.event, n = n === void 0 ? 16 : u0(n.type)), n);
  }
  function ln(n, i, c, p) {
    if (50 < us) throw us = 0, Ef = null, Error(r(185));
    nr(n, c, p), ((Me & 2) === 0 || n !== ut) && (n === ut && ((Me & 2) === 0 && (Xa |= c), it === 4 && wr(n, dt)), kt(n, p), c === 1 && Me === 0 && (i.mode & 1) === 0 && (Vo = We() + 500, Pa && dr()));
  }
  function kt(n, i) {
    var c = n.callbackNode;
    oc(n, i);
    var p = bo(n, n === ut ? dt : 0);
    if (p === 0) c !== null && sa(c), n.callbackNode = null, n.callbackPriority = 0;
    else if (i = p & -p, n.callbackPriority !== i) {
      if (c != null && sa(c), i === 1) n.tag === 0 ? _I(ux.bind(null, n)) : Y0(ux.bind(null, n)), vI(function() {
        (Me & 6) === 0 && dr();
      }), c = null;
      else {
        switch (t0(p)) {
          case 1:
            c = Ii;
            break;
          case 4:
            c = la;
            break;
          case 16:
            c = wo;
            break;
          case 536870912:
            c = ua;
            break;
          default:
            c = wo;
        }
        c = vx(c, lx.bind(null, n));
      }
      n.callbackPriority = i, n.callbackNode = c;
    }
  }
  function lx(n, i) {
    if (el = -1, tl = 0, (Me & 6) !== 0) throw Error(r(327));
    var c = n.callbackNode;
    if (Ho() && n.callbackNode !== c) return null;
    var p = bo(n, n === ut ? dt : 0);
    if (p === 0) return null;
    if ((p & 30) !== 0 || (p & n.expiredLanes) !== 0 || i) i = nl(n, p);
    else {
      i = p;
      var v = Me;
      Me |= 2;
      var b = fx();
      (ut !== n || dt !== i) && (Hn = null, Vo = We() + 500, Xr(n, i));
      do
        try {
          BI();
          break;
        } catch (z) {
          cx(n, z);
        }
      while (!0);
      $c(), Ka.current = b, Me = v, et !== null ? i = 0 : (ut = null, dt = 0, i = it);
    }
    if (i !== 0) {
      if (i === 2 && (v = Fr(n), v !== 0 && (p = v, i = Cf(n, v))), i === 1) throw c = as, Xr(n, 0), wr(n, p), kt(n, We()), c;
      if (i === 6) wr(n, p);
      else {
        if (v = n.current.alternate, (p & 30) === 0 && !FI(v) && (i = nl(n, p), i === 2 && (b = Fr(n), b !== 0 && (p = b, i = Cf(n, b))), i === 1)) throw c = as, Xr(n, 0), wr(n, p), kt(n, We()), c;
        switch (n.finishedWork = v, n.finishedLanes = p, i) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Qr(n, Ct, Hn);
            break;
          case 3:
            if (wr(n, p), (p & 130023424) === p && (i = bf + 500 - We(), 10 < i)) {
              if (bo(n, 0) !== 0) break;
              if (v = n.suspendedLanes, (v & p) !== p) {
                xt(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = Tc(Qr.bind(null, n, Ct, Hn), i);
              break;
            }
            Qr(n, Ct, Hn);
            break;
          case 4:
            if (wr(n, p), (p & 4194240) === p) break;
            for (i = n.eventTimes, v = -1; 0 < p; ) {
              var T = 31 - At(p);
              b = 1 << T, T = i[T], T > v && (v = T), p &= ~b;
            }
            if (p = v, p = We() - p, p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3e3 > p ? 3e3 : 4320 > p ? 4320 : 1960 * zI(p / 1960)) - p, 10 < p) {
              n.timeoutHandle = Tc(Qr.bind(null, n, Ct, Hn), p);
              break;
            }
            Qr(n, Ct, Hn);
            break;
          case 5:
            Qr(n, Ct, Hn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return kt(n, We()), n.callbackNode === c ? lx.bind(null, n) : null;
  }
  function Cf(n, i) {
    var c = ls;
    return n.current.memoizedState.isDehydrated && (Xr(n, i).flags |= 256), n = nl(n, i), n !== 2 && (i = Ct, Ct = c, i !== null && kf(i)), n;
  }
  function kf(n) {
    Ct === null ? Ct = n : Ct.push.apply(Ct, n);
  }
  function FI(n) {
    for (var i = n; ; ) {
      if (i.flags & 16384) {
        var c = i.updateQueue;
        if (c !== null && (c = c.stores, c !== null)) for (var p = 0; p < c.length; p++) {
          var v = c[p], b = v.getSnapshot;
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
    for (i &= ~_f, i &= ~Xa, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var c = 31 - At(i), p = 1 << c;
      n[c] = -1, i &= ~p;
    }
  }
  function ux(n) {
    if ((Me & 6) !== 0) throw Error(r(327));
    Ho();
    var i = bo(n, 0);
    if ((i & 1) === 0) return kt(n, We()), null;
    var c = nl(n, i);
    if (n.tag !== 0 && c === 2) {
      var p = Fr(n);
      p !== 0 && (i = p, c = Cf(n, p));
    }
    if (c === 1) throw c = as, Xr(n, 0), wr(n, i), kt(n, We()), c;
    if (c === 6) throw Error(r(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, Qr(n, Ct, Hn), kt(n, We()), null;
  }
  function Rf(n, i) {
    var c = Me;
    Me |= 1;
    try {
      return n(i);
    } finally {
      Me = c, Me === 0 && (Vo = We() + 500, Pa && dr());
    }
  }
  function Kr(n) {
    vr !== null && vr.tag === 0 && (Me & 6) === 0 && Ho();
    var i = Me;
    Me |= 1;
    var c = Xt.transition, p = Le;
    try {
      if (Xt.transition = null, Le = 1, n) return n();
    } finally {
      Le = p, Xt.transition = c, Me = i, (Me & 6) === 0 && dr();
    }
  }
  function Nf() {
    Lt = Bo.current, je(Bo);
  }
  function Xr(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var c = n.timeoutHandle;
    if (c !== -1 && (n.timeoutHandle = -1, gI(c)), et !== null) for (c = et.return; c !== null; ) {
      var p = c;
      switch (qc(p), p.tag) {
        case 1:
          p = p.type.childContextTypes, p != null && Ra();
          break;
        case 3:
          zo(), je(bt), je(pt), Kc();
          break;
        case 5:
          Gc(p);
          break;
        case 4:
          zo();
          break;
        case 13:
          je(Ue);
          break;
        case 19:
          je(Ue);
          break;
        case 10:
          Bc(p.type._context);
          break;
        case 22:
        case 23:
          Nf();
      }
      c = c.return;
    }
    if (ut = n, et = n = xr(n.current, null), dt = Lt = i, it = 0, as = null, _f = Xa = Yr = 0, Ct = ls = null, Wr !== null) {
      for (i = 0; i < Wr.length; i++) if (c = Wr[i], p = c.interleaved, p !== null) {
        c.interleaved = null;
        var v = p.next, b = c.pending;
        if (b !== null) {
          var T = b.next;
          b.next = v, p.next = T;
        }
        c.pending = p;
      }
      Wr = null;
    }
    return n;
  }
  function cx(n, i) {
    do {
      var c = et;
      try {
        if ($c(), za.current = Va, Fa) {
          for (var p = Ge.memoizedState; p !== null; ) {
            var v = p.queue;
            v !== null && (v.pending = null), p = p.next;
          }
          Fa = !1;
        }
        if (Gr = 0, lt = ot = Ge = null, ts = !1, ns = 0, xf.current = null, c === null || c.return === null) {
          it = 1, as = i, et = null;
          break;
        }
        e: {
          var b = n, T = c.return, z = c, U = i;
          if (i = dt, z.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var oe = U, ue = z, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var me = Lw(T);
            if (me !== null) {
              me.flags &= -257, qw(me, T, z, b, i), me.mode & 1 && Ow(b, oe, i), i = me, U = oe;
              var we = i.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(U), i.updateQueue = Se;
              } else we.add(U);
              break e;
            } else {
              if ((i & 1) === 0) {
                Ow(b, oe, i), Pf();
                break e;
              }
              U = Error(r(426));
            }
          } else if (ze && z.mode & 1) {
            var Je = Lw(T);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), qw(Je, T, z, b, i), zc(Fo(U, z));
              break e;
            }
          }
          b = U = Fo(U, z), it !== 4 && (it = 2), ls === null ? ls = [b] : ls.push(b), b = T;
          do {
            switch (b.tag) {
              case 3:
                b.flags |= 65536, i &= -i, b.lanes |= i;
                var ne = Iw(b, U, i);
                iw(b, ne);
                break e;
              case 1:
                z = U;
                var J = b.type, re = b.stateNode;
                if ((b.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (gr === null || !gr.has(re)))) {
                  b.flags |= 65536, i &= -i, b.lanes |= i;
                  var he = Mw(b, z, i);
                  iw(b, he);
                  break e;
                }
            }
            b = b.return;
          } while (b !== null);
        }
        hx(c);
      } catch (Ce) {
        i = Ce, et === c && c !== null && (et = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fx() {
    var n = Ka.current;
    return Ka.current = Va, n === null ? Va : n;
  }
  function Pf() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Yr & 268435455) === 0 && (Xa & 268435455) === 0 || wr(ut, dt);
  }
  function nl(n, i) {
    var c = Me;
    Me |= 2;
    var p = fx();
    (ut !== n || dt !== i) && (Hn = null, Xr(n, i));
    do
      try {
        $I();
        break;
      } catch (v) {
        cx(n, v);
      }
    while (!0);
    if ($c(), Me = c, Ka.current = p, et !== null) throw Error(r(261));
    return ut = null, dt = 0, it;
  }
  function $I() {
    for (; et !== null; ) dx(et);
  }
  function BI() {
    for (; et !== null && !Xu(); ) dx(et);
  }
  function dx(n) {
    var i = gx(n.alternate, n, Lt);
    n.memoizedProps = n.pendingProps, i === null ? hx(n) : et = i, xf.current = null;
  }
  function hx(n) {
    var i = n;
    do {
      var c = i.alternate;
      if (n = i.return, (i.flags & 32768) === 0) {
        if (c = OI(c, i, Lt), c !== null) {
          et = c;
          return;
        }
      } else {
        if (c = LI(c, i), c !== null) {
          c.flags &= 32767, et = c;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          it = 6, et = null;
          return;
        }
      }
      if (i = i.sibling, i !== null) {
        et = i;
        return;
      }
      et = i = n;
    } while (i !== null);
    it === 0 && (it = 5);
  }
  function Qr(n, i, c) {
    var p = Le, v = Xt.transition;
    try {
      Xt.transition = null, Le = 1, VI(n, i, c, p);
    } finally {
      Xt.transition = v, Le = p;
    }
    return null;
  }
  function VI(n, i, c, p) {
    do
      Ho();
    while (vr !== null);
    if ((Me & 6) !== 0) throw Error(r(327));
    c = n.finishedWork;
    var v = n.finishedLanes;
    if (c === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, c === n.current) throw Error(r(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var b = c.lanes | c.childLanes;
    if (SA(n, b), n === ut && (et = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || Za || (Za = !0, vx(wo, function() {
      return Ho(), null;
    })), b = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || b) {
      b = Xt.transition, Xt.transition = null;
      var T = Le;
      Le = 1;
      var z = Me;
      Me |= 4, xf.current = null, DI(n, c), rx(c, n), uI(Nc), ha = !!Rc, Nc = Rc = null, n.current = c, jI(c), aa(), Me = z, Le = T, Xt.transition = b;
    } else n.current = c;
    if (Za && (Za = !1, vr = n, Ja = v), b = n.pendingLanes, b === 0 && (gr = null), Ju(c.stateNode), kt(n, We()), i !== null) for (p = n.onRecoverableError, c = 0; c < i.length; c++) v = i[c], p(v.value, { componentStack: v.stack, digest: v.digest });
    if (Qa) throw Qa = !1, n = Sf, Sf = null, n;
    return (Ja & 1) !== 0 && n.tag !== 0 && Ho(), b = n.pendingLanes, (b & 1) !== 0 ? n === Ef ? us++ : (us = 0, Ef = n) : us = 0, dr(), null;
  }
  function Ho() {
    if (vr !== null) {
      var n = t0(Ja), i = Xt.transition, c = Le;
      try {
        if (Xt.transition = null, Le = 16 > n ? 16 : n, vr === null) var p = !1;
        else {
          if (n = vr, vr = null, Ja = 0, (Me & 6) !== 0) throw Error(r(331));
          var v = Me;
          for (Me |= 4, ve = n.current; ve !== null; ) {
            var b = ve, T = b.child;
            if ((ve.flags & 16) !== 0) {
              var z = b.deletions;
              if (z !== null) {
                for (var U = 0; U < z.length; U++) {
                  var oe = z[U];
                  for (ve = oe; ve !== null; ) {
                    var ue = ve;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ss(8, ue, b);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ve = fe;
                    else for (; ve !== null; ) {
                      ue = ve;
                      var le = ue.sibling, me = ue.return;
                      if (Zw(ue), ue === oe) {
                        ve = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = me, ve = le;
                        break;
                      }
                      ve = me;
                    }
                  }
                }
                var we = b.alternate;
                if (we !== null) {
                  var Se = we.child;
                  if (Se !== null) {
                    we.child = null;
                    do {
                      var Je = Se.sibling;
                      Se.sibling = null, Se = Je;
                    } while (Se !== null);
                  }
                }
                ve = b;
              }
            }
            if ((b.subtreeFlags & 2064) !== 0 && T !== null) T.return = b, ve = T;
            else e: for (; ve !== null; ) {
              if (b = ve, (b.flags & 2048) !== 0) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  ss(9, b, b.return);
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
            T = ve;
            var re = T.child;
            if ((T.subtreeFlags & 2064) !== 0 && re !== null) re.return = T, ve = re;
            else e: for (T = J; ve !== null; ) {
              if (z = ve, (z.flags & 2048) !== 0) try {
                switch (z.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ya(9, z);
                }
              } catch (Ce) {
                Xe(z, z.return, Ce);
              }
              if (z === T) {
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
          if (Me = v, dr(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
            Wt.onPostCommitFiberRoot(zr, n);
          } catch {
          }
          p = !0;
        }
        return p;
      } finally {
        Le = c, Xt.transition = i;
      }
    }
    return !1;
  }
  function px(n, i, c) {
    i = Fo(c, i), i = Iw(n, i, 1), n = pr(n, i, 1), i = xt(), n !== null && (nr(n, 1, i), kt(n, i));
  }
  function Xe(n, i, c) {
    if (n.tag === 3) px(n, n, c);
    else for (; i !== null; ) {
      if (i.tag === 3) {
        px(i, n, c);
        break;
      } else if (i.tag === 1) {
        var p = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && (gr === null || !gr.has(p))) {
          n = Fo(c, n), n = Mw(i, n, 1), i = pr(i, n, 1), n = xt(), i !== null && (nr(i, 1, n), kt(i, n));
          break;
        }
      }
      i = i.return;
    }
  }
  function HI(n, i, c) {
    var p = n.pingCache;
    p !== null && p.delete(i), i = xt(), n.pingedLanes |= n.suspendedLanes & c, ut === n && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > We() - bf ? Xr(n, 0) : _f |= c), kt(n, i);
  }
  function mx(n, i) {
    i === 0 && ((n.mode & 1) === 0 ? i = 1 : (i = _o, _o <<= 1, (_o & 130023424) === 0 && (_o = 4194304)));
    var c = xt();
    n = $n(n, i), n !== null && (nr(n, i, c), kt(n, c));
  }
  function WI(n) {
    var i = n.memoizedState, c = 0;
    i !== null && (c = i.retryLane), mx(n, c);
  }
  function UI(n, i) {
    var c = 0;
    switch (n.tag) {
      case 13:
        var p = n.stateNode, v = n.memoizedState;
        v !== null && (c = v.retryLane);
        break;
      case 19:
        p = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    p !== null && p.delete(i), mx(n, c);
  }
  var gx;
  gx = function(n, i, c) {
    if (n !== null) if (n.memoizedProps !== i.pendingProps || bt.current) Et = !0;
    else {
      if ((n.lanes & c) === 0 && (i.flags & 128) === 0) return Et = !1, MI(n, i, c);
      Et = (n.flags & 131072) !== 0;
    }
    else Et = !1, ze && (i.flags & 1048576) !== 0 && K0(i, Aa, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var p = i.type;
        Ua(n, i), n = i.pendingProps;
        var v = Io(i, pt.current);
        jo(i, c), v = Zc(null, i, p, n, v, c);
        var b = Jc();
        return i.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, St(p) ? (b = !0, Na(i)) : b = !1, i.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Wc(i), v.updater = Ha, i.stateNode = v, v._reactInternals = i, sf(i, p, n, c), i = cf(null, i, p, !0, b, c)) : (i.tag = 0, ze && b && Lc(i), wt(null, i, v, c), i = i.child), i;
      case 16:
        p = i.elementType;
        e: {
          switch (Ua(n, i), n = i.pendingProps, v = p._init, p = v(p._payload), i.type = p, v = i.tag = YI(p), n = on(p, n), v) {
            case 0:
              i = uf(null, i, p, n, c);
              break e;
            case 1:
              i = Bw(null, i, p, n, c);
              break e;
            case 11:
              i = Dw(null, i, p, n, c);
              break e;
            case 14:
              i = jw(null, i, p, on(p.type, n), c);
              break e;
          }
          throw Error(r(
            306,
            p,
            ""
          ));
        }
        return i;
      case 0:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), uf(n, i, p, v, c);
      case 1:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Bw(n, i, p, v, c);
      case 3:
        e: {
          if (Vw(i), n === null) throw Error(r(387));
          p = i.pendingProps, b = i.memoizedState, v = b.element, ow(n, i), Da(i, p, null, c);
          var T = i.memoizedState;
          if (p = T.element, b.isDehydrated) if (b = { element: p, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, i.updateQueue.baseState = b, i.memoizedState = b, i.flags & 256) {
            v = Fo(Error(r(423)), i), i = Hw(n, i, p, c, v);
            break e;
          } else if (p !== v) {
            v = Fo(Error(r(424)), i), i = Hw(n, i, p, c, v);
            break e;
          } else for (Ot = ur(i.stateNode.containerInfo.firstChild), Mt = i, ze = !0, rn = null, c = nw(i, null, p, c), i.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (Lo(), p === v) {
              i = Vn(n, i, c);
              break e;
            }
            wt(n, i, p, c);
          }
          i = i.child;
        }
        return i;
      case 5:
        return aw(i), n === null && jc(i), p = i.type, v = i.pendingProps, b = n !== null ? n.memoizedProps : null, T = v.children, Pc(p, v) ? T = null : b !== null && Pc(p, b) && (i.flags |= 32), $w(n, i), wt(n, i, T, c), i.child;
      case 6:
        return n === null && jc(i), null;
      case 13:
        return Ww(n, i, c);
      case 4:
        return Uc(i, i.stateNode.containerInfo), p = i.pendingProps, n === null ? i.child = qo(i, null, p, c) : wt(n, i, p, c), i.child;
      case 11:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Dw(n, i, p, v, c);
      case 7:
        return wt(n, i, i.pendingProps, c), i.child;
      case 8:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 12:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 10:
        e: {
          if (p = i.type._context, v = i.pendingProps, b = i.memoizedProps, T = v.value, qe(Oa, p._currentValue), p._currentValue = T, b !== null) if (nn(b.value, T)) {
            if (b.children === v.children && !bt.current) {
              i = Vn(n, i, c);
              break e;
            }
          } else for (b = i.child, b !== null && (b.return = i); b !== null; ) {
            var z = b.dependencies;
            if (z !== null) {
              T = b.child;
              for (var U = z.firstContext; U !== null; ) {
                if (U.context === p) {
                  if (b.tag === 1) {
                    U = Bn(-1, c & -c), U.tag = 2;
                    var oe = b.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var ue = oe.pending;
                      ue === null ? U.next = U : (U.next = ue.next, ue.next = U), oe.pending = U;
                    }
                  }
                  b.lanes |= c, U = b.alternate, U !== null && (U.lanes |= c), Vc(
                    b.return,
                    c,
                    i
                  ), z.lanes |= c;
                  break;
                }
                U = U.next;
              }
            } else if (b.tag === 10) T = b.type === i.type ? null : b.child;
            else if (b.tag === 18) {
              if (T = b.return, T === null) throw Error(r(341));
              T.lanes |= c, z = T.alternate, z !== null && (z.lanes |= c), Vc(T, c, i), T = b.sibling;
            } else T = b.child;
            if (T !== null) T.return = b;
            else for (T = b; T !== null; ) {
              if (T === i) {
                T = null;
                break;
              }
              if (b = T.sibling, b !== null) {
                b.return = T.return, T = b;
                break;
              }
              T = T.return;
            }
            b = T;
          }
          wt(n, i, v.children, c), i = i.child;
        }
        return i;
      case 9:
        return v = i.type, p = i.pendingProps.children, jo(i, c), v = Yt(v), p = p(v), i.flags |= 1, wt(n, i, p, c), i.child;
      case 14:
        return p = i.type, v = on(p, i.pendingProps), v = on(p.type, v), jw(n, i, p, v, c);
      case 15:
        return zw(n, i, i.type, i.pendingProps, c);
      case 17:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Ua(n, i), i.tag = 1, St(p) ? (n = !0, Na(i)) : n = !1, jo(i, c), Tw(i, p, v), sf(i, p, v, c), cf(null, i, p, !0, n, c);
      case 19:
        return Gw(n, i, c);
      case 22:
        return Fw(n, i, c);
    }
    throw Error(r(156, i.tag));
  };
  function vx(n, i) {
    return ia(n, i);
  }
  function GI(n, i, c, p) {
    this.tag = n, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = p, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(n, i, c, p) {
    return new GI(n, i, c, p);
  }
  function Tf(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function YI(n) {
    if (typeof n == "function") return Tf(n) ? 1 : 0;
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
  function rl(n, i, c, p, v, b) {
    var T = 2;
    if (p = n, typeof n == "function") Tf(n) && (T = 1);
    else if (typeof n == "string") T = 5;
    else e: switch (n) {
      case A:
        return Zr(c.children, v, b, i);
      case O:
        T = 8, v |= 8;
        break;
      case D:
        return n = Qt(12, c, i, v | 2), n.elementType = D, n.lanes = b, n;
      case X:
        return n = Qt(13, c, i, v), n.elementType = X, n.lanes = b, n;
      case L:
        return n = Qt(19, c, i, v), n.elementType = L, n.lanes = b, n;
      case Y:
        return ol(c, v, b, i);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case G:
            T = 10;
            break e;
          case B:
            T = 9;
            break e;
          case V:
            T = 11;
            break e;
          case H:
            T = 14;
            break e;
          case $:
            T = 16, p = null;
            break e;
        }
        throw Error(r(130, n == null ? n : typeof n, ""));
    }
    return i = Qt(T, c, i, v), i.elementType = n, i.type = p, i.lanes = b, i;
  }
  function Zr(n, i, c, p) {
    return n = Qt(7, n, p, i), n.lanes = c, n;
  }
  function ol(n, i, c, p) {
    return n = Qt(22, n, p, i), n.elementType = Y, n.lanes = c, n.stateNode = { isHidden: !1 }, n;
  }
  function Af(n, i, c) {
    return n = Qt(6, n, null, i), n.lanes = c, n;
  }
  function If(n, i, c) {
    return i = Qt(4, n.children !== null ? n.children : [], n.key, i), i.lanes = c, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function KI(n, i, c, p, v) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Mi(0), this.expirationTimes = Mi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mi(0), this.identifierPrefix = p, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Mf(n, i, c, p, v, b, T, z, U) {
    return n = new KI(n, i, c, z, U), i === 1 ? (i = 1, b === !0 && (i |= 8)) : i = 0, b = Qt(3, null, null, i), n.current = b, b.stateNode = n, b.memoizedState = { element: p, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wc(b), n;
  }
  function XI(n, i, c) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: P, key: p == null ? null : "" + p, children: n, containerInfo: i, implementation: c };
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
  function wx(n, i, c, p, v, b, T, z, U) {
    return n = Mf(c, p, !0, n, v, b, T, z, U), n.context = yx(null), c = n.current, p = xt(), v = yr(c), b = Bn(p, v), b.callback = i ?? null, pr(c, b, v), n.current.lanes = v, nr(n, v, p), kt(n, p), n;
  }
  function il(n, i, c, p) {
    var v = i.current, b = xt(), T = yr(v);
    return c = yx(c), i.context === null ? i.context = c : i.pendingContext = c, i = Bn(b, T), i.payload = { element: n }, p = p === void 0 ? null : p, p !== null && (i.callback = p), n = pr(v, i, T), n !== null && (ln(n, v, T, b), qa(n, v, T)), T;
  }
  function sl(n) {
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
  function QI() {
    return null;
  }
  var _x = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Lf(n) {
    this._internalRoot = n;
  }
  al.prototype.render = Lf.prototype.render = function(n) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    il(n, i, null, null);
  }, al.prototype.unmount = Lf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var i = n.containerInfo;
      Kr(function() {
        il(null, n, null, null);
      }), i[Dn] = null;
    }
  };
  function al(n) {
    this._internalRoot = n;
  }
  al.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var i = o0();
      n = { blockedOn: null, target: n, priority: i };
      for (var c = 0; c < sr.length && i !== 0 && i < sr[c].priority; c++) ;
      sr.splice(c, 0, n), c === 0 && a0(n);
    }
  };
  function qf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ll(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function bx() {
  }
  function ZI(n, i, c, p, v) {
    if (v) {
      if (typeof p == "function") {
        var b = p;
        p = function() {
          var oe = sl(T);
          b.call(oe);
        };
      }
      var T = wx(i, p, n, 0, null, !1, !1, "", bx);
      return n._reactRootContainer = T, n[Dn] = T.current, Gi(n.nodeType === 8 ? n.parentNode : n), Kr(), T;
    }
    for (; v = n.lastChild; ) n.removeChild(v);
    if (typeof p == "function") {
      var z = p;
      p = function() {
        var oe = sl(U);
        z.call(oe);
      };
    }
    var U = Mf(n, 0, !1, null, null, !1, !1, "", bx);
    return n._reactRootContainer = U, n[Dn] = U.current, Gi(n.nodeType === 8 ? n.parentNode : n), Kr(function() {
      il(i, U, c, p);
    }), U;
  }
  function ul(n, i, c, p, v) {
    var b = c._reactRootContainer;
    if (b) {
      var T = b;
      if (typeof v == "function") {
        var z = v;
        v = function() {
          var U = sl(T);
          z.call(U);
        };
      }
      il(i, T, n, v);
    } else T = ZI(c, i, n, v, p);
    return sl(T);
  }
  n0 = function(n) {
    switch (n.tag) {
      case 3:
        var i = n.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var c = _n(i.pendingLanes);
          c !== 0 && (ic(i, c | 1), kt(i, We()), (Me & 6) === 0 && (Vo = We() + 500, dr()));
        }
        break;
      case 13:
        Kr(function() {
          var p = $n(n, 1);
          if (p !== null) {
            var v = xt();
            ln(p, n, 1, v);
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
        var p = xt();
        ln(c, n, i, p);
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
  }, ki = function(n, i, c) {
    switch (i) {
      case "input":
        if (Ee(n, c), i = c.name, c.type === "radio" && i != null) {
          for (c = n; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < c.length; i++) {
            var p = c[i];
            if (p !== n && p.form === n.form) {
              var v = ka(p);
              if (!v) throw Error(r(90));
              de(p), Ee(p, v);
            }
          }
        }
        break;
      case "textarea":
        en(n, c);
        break;
      case "select":
        i = c.value, i != null && ht(n, !!c.multiple, i, !1);
    }
  }, ea = Rf, ta = Kr;
  var JI = { usingClientEntryPoint: !1, Events: [Xi, To, ka, Zs, Js, Rf] }, cs = { findFiberByHostInstance: $r, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, e2 = { bundleType: cs.bundleType, version: cs.version, rendererPackageName: cs.rendererPackageName, rendererConfig: cs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: k.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ra(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: cs.findFiberByHostInstance || QI, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cl.isDisabled && cl.supportsFiber) try {
      zr = cl.inject(e2), Wt = cl;
    } catch {
    }
  }
  return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JI, Rt.createPortal = function(n, i) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qf(i)) throw Error(r(200));
    return XI(n, i, null, c);
  }, Rt.createRoot = function(n, i) {
    if (!qf(n)) throw Error(r(299));
    var c = !1, p = "", v = _x;
    return i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (v = i.onRecoverableError)), i = Mf(n, 1, !1, null, null, c, !1, p, v), n[Dn] = i.current, Gi(n.nodeType === 8 ? n.parentNode : n), new Lf(i);
  }, Rt.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
    return n = ra(i), n = n === null ? null : n.stateNode, n;
  }, Rt.flushSync = function(n) {
    return Kr(n);
  }, Rt.hydrate = function(n, i, c) {
    if (!ll(i)) throw Error(r(200));
    return ul(null, n, i, !0, c);
  }, Rt.hydrateRoot = function(n, i, c) {
    if (!qf(n)) throw Error(r(405));
    var p = c != null && c.hydratedSources || null, v = !1, b = "", T = _x;
    if (c != null && (c.unstable_strictMode === !0 && (v = !0), c.identifierPrefix !== void 0 && (b = c.identifierPrefix), c.onRecoverableError !== void 0 && (T = c.onRecoverableError)), i = wx(i, null, n, 1, c ?? null, v, !1, b, T), n[Dn] = i.current, Gi(n), p) for (n = 0; n < p.length; n++) c = p[n], v = c._getVersion, v = v(c._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [c, v] : i.mutableSourceEagerHydrationData.push(
      c,
      v
    );
    return new al(i);
  }, Rt.render = function(n, i, c) {
    if (!ll(i)) throw Error(r(200));
    return ul(null, n, i, !1, c);
  }, Rt.unmountComponentAtNode = function(n) {
    if (!ll(n)) throw Error(r(40));
    return n._reactRootContainer ? (Kr(function() {
      ul(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Dn] = null;
      });
    }), !0) : !1;
  }, Rt.unstable_batchedUpdates = Rf, Rt.unstable_renderSubtreeIntoContainer = function(n, i, c, p) {
    if (!ll(c)) throw Error(r(200));
    if (n == null || n._reactInternals === void 0) throw Error(r(38));
    return ul(n, i, c, !1, p);
  }, Rt.version = "18.3.1-next-f1338f8080-20240426", Rt;
}
var Ax;
function Vk() {
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
  return e(), zf.exports = c2(), zf.exports;
}
var Ix;
function f2() {
  if (Ix) return dl;
  Ix = 1;
  var e = Vk();
  return dl.createRoot = e.createRoot, dl.hydrateRoot = e.hydrateRoot, dl;
}
var d2 = f2();
let Hk = R.createContext(
  /** @type {any} */
  null
);
function h2() {
  let e = R.useContext(Hk);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function p2() {
  return h2().model;
}
function Bf(e) {
  let t = p2(), r = R.useSyncExternalStore(
    (s) => (t.on(`change:${e}`, s), () => t.off(`change:${e}`, s)),
    () => t.get(e)
  ), o = R.useCallback(
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
function m2(e) {
  return ({ el: t, model: r, experimental: o }) => {
    let s = d2.createRoot(t);
    return s.render(
      R.createElement(
        R.StrictMode,
        null,
        R.createElement(
          Hk.Provider,
          { value: { model: r, experimental: o } },
          R.createElement(e)
        )
      )
    ), () => s.unmount();
  };
}
function nt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let r = 0, o; r < e.length; r++)
      (o = nt(e[r])) !== "" && (t += (t && " ") + o);
  else
    for (let r in e)
      e[r] && (t += (t && " ") + r);
  return t;
}
var g2 = { value: () => {
} };
function iu() {
  for (var e = 0, t = arguments.length, r = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in r || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    r[o] = [];
  }
  return new Tl(r);
}
function Tl(e) {
  this._ = e;
}
function v2(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var o = "", s = r.indexOf(".");
    if (s >= 0 && (o = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: o };
  });
}
Tl.prototype = iu.prototype = {
  constructor: Tl,
  on: function(e, t) {
    var r = this._, o = v2(e + "", r), s, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((s = (e = o[a]).type) && (s = y2(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (s = (e = o[a]).type) r[s] = Mx(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = Mx(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new Tl(e);
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
function y2(e, t) {
  for (var r = 0, o = e.length, s; r < o; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function Mx(e, t, r) {
  for (var o = 0, s = e.length; o < s; ++o)
    if (e[o].name === t) {
      e[o] = g2, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var Tv = "http://www.w3.org/1999/xhtml";
const Ox = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Tv,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function su(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Ox.hasOwnProperty(t) ? { space: Ox[t], local: e } : e;
}
function w2(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Tv && t.documentElement.namespaceURI === Tv ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function x2(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Wk(e) {
  var t = su(e);
  return (t.local ? x2 : w2)(t);
}
function _2() {
}
function oy(e) {
  return e == null ? _2 : function() {
    return this.querySelector(e);
  };
}
function b2(e) {
  typeof e != "function" && (e = oy(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new zt(o, this._parents);
}
function S2(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function E2() {
  return [];
}
function Uk(e) {
  return e == null ? E2 : function() {
    return this.querySelectorAll(e);
  };
}
function C2(e) {
  return function() {
    return S2(e.apply(this, arguments));
  };
}
function k2(e) {
  typeof e == "function" ? e = C2(e) : e = Uk(e);
  for (var t = this._groups, r = t.length, o = [], s = [], a = 0; a < r; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), s.push(f));
  return new zt(o, s);
}
function Gk(e) {
  return function() {
    return this.matches(e);
  };
}
function Yk(e) {
  return function(t) {
    return t.matches(e);
  };
}
var R2 = Array.prototype.find;
function N2(e) {
  return function() {
    return R2.call(this.children, e);
  };
}
function P2() {
  return this.firstElementChild;
}
function T2(e) {
  return this.select(e == null ? P2 : N2(typeof e == "function" ? e : Yk(e)));
}
var A2 = Array.prototype.filter;
function I2() {
  return Array.from(this.children);
}
function M2(e) {
  return function() {
    return A2.call(this.children, e);
  };
}
function O2(e) {
  return this.selectAll(e == null ? I2 : M2(typeof e == "function" ? e : Yk(e)));
}
function L2(e) {
  typeof e != "function" && (e = Gk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new zt(o, this._parents);
}
function Kk(e) {
  return new Array(e.length);
}
function q2() {
  return new zt(this._enter || this._groups.map(Kk), this._parents);
}
function jl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
jl.prototype = {
  constructor: jl,
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
function D2(e) {
  return function() {
    return e;
  };
}
function j2(e, t, r, o, s, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : r[l] = new jl(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (s[l] = u);
}
function z2(e, t, r, o, s, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, m = a.length, g = new Array(h), w;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (g[u] = w = l.call(f, f.__data__, u, t) + "", d.has(w) ? s[u] = f : d.set(w, f));
  for (u = 0; u < m; ++u)
    w = l.call(e, a[u], u, a) + "", (f = d.get(w)) ? (o[u] = f, f.__data__ = a[u], d.delete(w)) : r[u] = new jl(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(g[u]) === f && (s[u] = f);
}
function F2(e) {
  return e.__data__;
}
function $2(e, t) {
  if (!arguments.length) return Array.from(this, F2);
  var r = t ? z2 : j2, o = this._parents, s = this._groups;
  typeof e != "function" && (e = D2(e));
  for (var a = s.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], m = s[d], g = m.length, w = B2(e.call(h, h && h.__data__, d, o)), E = w.length, y = u[d] = new Array(E), x = l[d] = new Array(E), S = f[d] = new Array(g);
    r(h, m, y, x, S, w, t);
    for (var C = 0, _ = 0, k, N; C < E; ++C)
      if (k = y[C]) {
        for (C >= _ && (_ = C + 1); !(N = x[_]) && ++_ < E; ) ;
        k._next = N || null;
      }
  }
  return l = new zt(l, o), l._enter = u, l._exit = f, l;
}
function B2(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function V2() {
  return new zt(this._exit || this._groups.map(Kk), this._parents);
}
function H2(e, t, r) {
  var o = this.enter(), s = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? a.remove() : r(a), o && s ? o.merge(s).order() : s;
}
function W2(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, o = t._groups, s = r.length, a = o.length, l = Math.min(s, a), u = new Array(s), f = 0; f < l; ++f)
    for (var d = r[f], h = o[f], m = d.length, g = u[f] = new Array(m), w, E = 0; E < m; ++E)
      (w = d[E] || h[E]) && (g[E] = w);
  for (; f < s; ++f)
    u[f] = r[f];
  return new zt(u, this._parents);
}
function U2() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var o = e[t], s = o.length - 1, a = o[s], l; --s >= 0; )
      (l = o[s]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function G2(e) {
  e || (e = Y2);
  function t(m, g) {
    return m && g ? e(m.__data__, g.__data__) : !m - !g;
  }
  for (var r = this._groups, o = r.length, s = new Array(o), a = 0; a < o; ++a) {
    for (var l = r[a], u = l.length, f = s[a] = new Array(u), d, h = 0; h < u; ++h)
      (d = l[h]) && (f[h] = d);
    f.sort(t);
  }
  return new zt(s, this._parents).order();
}
function Y2(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function K2() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function X2() {
  return Array.from(this);
}
function Q2() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length; s < a; ++s) {
      var l = o[s];
      if (l) return l;
    }
  return null;
}
function Z2() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function J2() {
  return !this.node();
}
function eM(e) {
  for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
    for (var s = t[r], a = 0, l = s.length, u; a < l; ++a)
      (u = s[a]) && e.call(u, u.__data__, a, s);
  return this;
}
function tM(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function nM(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function rM(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function oM(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function iM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function sM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function aM(e, t) {
  var r = su(e);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each((t == null ? r.local ? nM : tM : typeof t == "function" ? r.local ? sM : iM : r.local ? oM : rM)(r, t));
}
function Xk(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function lM(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function uM(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function cM(e, t, r) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
  };
}
function fM(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? lM : typeof t == "function" ? cM : uM)(e, t, r ?? "")) : ri(this.node(), e);
}
function ri(e, t) {
  return e.style.getPropertyValue(t) || Xk(e).getComputedStyle(e, null).getPropertyValue(t);
}
function dM(e) {
  return function() {
    delete this[e];
  };
}
function hM(e, t) {
  return function() {
    this[e] = t;
  };
}
function pM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function mM(e, t) {
  return arguments.length > 1 ? this.each((t == null ? dM : typeof t == "function" ? pM : hM)(e, t)) : this.node()[e];
}
function Qk(e) {
  return e.trim().split(/^|\s+/);
}
function iy(e) {
  return e.classList || new Zk(e);
}
function Zk(e) {
  this._node = e, this._names = Qk(e.getAttribute("class") || "");
}
Zk.prototype = {
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
function Jk(e, t) {
  for (var r = iy(e), o = -1, s = t.length; ++o < s; ) r.add(t[o]);
}
function eR(e, t) {
  for (var r = iy(e), o = -1, s = t.length; ++o < s; ) r.remove(t[o]);
}
function gM(e) {
  return function() {
    Jk(this, e);
  };
}
function vM(e) {
  return function() {
    eR(this, e);
  };
}
function yM(e, t) {
  return function() {
    (t.apply(this, arguments) ? Jk : eR)(this, e);
  };
}
function wM(e, t) {
  var r = Qk(e + "");
  if (arguments.length < 2) {
    for (var o = iy(this.node()), s = -1, a = r.length; ++s < a; ) if (!o.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? yM : t ? gM : vM)(r, t));
}
function xM() {
  this.textContent = "";
}
function _M(e) {
  return function() {
    this.textContent = e;
  };
}
function bM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function SM(e) {
  return arguments.length ? this.each(e == null ? xM : (typeof e == "function" ? bM : _M)(e)) : this.node().textContent;
}
function EM() {
  this.innerHTML = "";
}
function CM(e) {
  return function() {
    this.innerHTML = e;
  };
}
function kM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function RM(e) {
  return arguments.length ? this.each(e == null ? EM : (typeof e == "function" ? kM : CM)(e)) : this.node().innerHTML;
}
function NM() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function PM() {
  return this.each(NM);
}
function TM() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function AM() {
  return this.each(TM);
}
function IM(e) {
  var t = typeof e == "function" ? e : Wk(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function MM() {
  return null;
}
function OM(e, t) {
  var r = typeof e == "function" ? e : Wk(e), o = t == null ? MM : typeof t == "function" ? t : oy(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function LM() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function qM() {
  return this.each(LM);
}
function DM() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jM() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zM(e) {
  return this.select(e ? jM : DM);
}
function FM(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function $M(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function BM(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", o = t.indexOf(".");
    return o >= 0 && (r = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: r };
  });
}
function VM(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, o = -1, s = t.length, a; r < s; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function HM(e, t, r) {
  return function() {
    var o = this.__on, s, a = $M(t);
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
function WM(e, t, r) {
  var o = BM(e + ""), s, a = o.length, l;
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
  for (u = t ? HM : VM, s = 0; s < a; ++s) this.each(u(o[s], t, r));
  return this;
}
function tR(e, t, r) {
  var o = Xk(e), s = o.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = o.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function UM(e, t) {
  return function() {
    return tR(this, e, t);
  };
}
function GM(e, t) {
  return function() {
    return tR(this, e, t.apply(this, arguments));
  };
}
function YM(e, t) {
  return this.each((typeof t == "function" ? GM : UM)(e, t));
}
function* KM() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length, l; s < a; ++s)
      (l = o[s]) && (yield l);
}
var nR = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Ds() {
  return new zt([[document.documentElement]], nR);
}
function XM() {
  return this;
}
zt.prototype = Ds.prototype = {
  constructor: zt,
  select: b2,
  selectAll: k2,
  selectChild: T2,
  selectChildren: O2,
  filter: L2,
  data: $2,
  enter: q2,
  exit: V2,
  join: H2,
  merge: W2,
  selection: XM,
  order: U2,
  sort: G2,
  call: K2,
  nodes: X2,
  node: Q2,
  size: Z2,
  empty: J2,
  each: eM,
  attr: aM,
  style: fM,
  property: mM,
  classed: wM,
  text: SM,
  html: RM,
  raise: PM,
  lower: AM,
  append: IM,
  insert: OM,
  remove: qM,
  clone: zM,
  datum: FM,
  on: WM,
  dispatch: YM,
  [Symbol.iterator]: KM
};
function Dt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], nR);
}
function QM(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function fn(e, t) {
  if (e = QM(e), t === void 0 && (t = e.currentTarget), t) {
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
const ZM = { passive: !1 }, Ss = { capture: !0, passive: !1 };
function Vf(e) {
  e.stopImmediatePropagation();
}
function Jo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function rR(e) {
  var t = e.document.documentElement, r = Dt(e).on("dragstart.drag", Jo, Ss);
  "onselectstart" in t ? r.on("selectstart.drag", Jo, Ss) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function oR(e, t) {
  var r = e.document.documentElement, o = Dt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", Jo, Ss), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
const hl = (e) => () => e;
function Av(e, {
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
Av.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function JM(e) {
  return !e.ctrlKey && !e.button;
}
function eO() {
  return this.parentNode;
}
function tO(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function nO() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function iR() {
  var e = JM, t = eO, r = tO, o = nO, s = {}, a = iu("start", "drag", "end"), l = 0, u, f, d, h, m = 0;
  function g(k) {
    k.on("mousedown.drag", w).filter(o).on("touchstart.drag", x).on("touchmove.drag", S, ZM).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function w(k, N) {
    if (!(h || !e.call(this, k, N))) {
      var P = _(this, t.call(this, k, N), k, N, "mouse");
      P && (Dt(k.view).on("mousemove.drag", E, Ss).on("mouseup.drag", y, Ss), rR(k.view), Vf(k), d = !1, u = k.clientX, f = k.clientY, P("start", k));
    }
  }
  function E(k) {
    if (Jo(k), !d) {
      var N = k.clientX - u, P = k.clientY - f;
      d = N * N + P * P > m;
    }
    s.mouse("drag", k);
  }
  function y(k) {
    Dt(k.view).on("mousemove.drag mouseup.drag", null), oR(k.view, d), Jo(k), s.mouse("end", k);
  }
  function x(k, N) {
    if (e.call(this, k, N)) {
      var P = k.changedTouches, A = t.call(this, k, N), O = P.length, D, G;
      for (D = 0; D < O; ++D)
        (G = _(this, A, k, N, P[D].identifier, P[D])) && (Vf(k), G("start", k, P[D]));
    }
  }
  function S(k) {
    var N = k.changedTouches, P = N.length, A, O;
    for (A = 0; A < P; ++A)
      (O = s[N[A].identifier]) && (Jo(k), O("drag", k, N[A]));
  }
  function C(k) {
    var N = k.changedTouches, P = N.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < P; ++A)
      (O = s[N[A].identifier]) && (Vf(k), O("end", k, N[A]));
  }
  function _(k, N, P, A, O, D) {
    var G = a.copy(), B = fn(D || P, N), V, X, L;
    if ((L = r.call(k, new Av("beforestart", {
      sourceEvent: P,
      target: g,
      identifier: O,
      active: l,
      x: B[0],
      y: B[1],
      dx: 0,
      dy: 0,
      dispatch: G
    }), A)) != null)
      return V = L.x - B[0] || 0, X = L.y - B[1] || 0, function H($, Y, M) {
        var j = B, Q;
        switch ($) {
          case "start":
            s[O] = H, Q = l++;
            break;
          case "end":
            delete s[O], --l;
          // falls through
          case "drag":
            B = fn(M || Y, N), Q = l;
            break;
        }
        G.call(
          $,
          k,
          new Av($, {
            sourceEvent: Y,
            subject: L,
            target: g,
            identifier: O,
            active: Q,
            x: B[0] + V,
            y: B[1] + X,
            dx: B[0] - j[0],
            dy: B[1] - j[1],
            dispatch: G
          }),
          A
        );
      };
  }
  return g.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : hl(!!k), g) : e;
  }, g.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : hl(k), g) : t;
  }, g.subject = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : hl(k), g) : r;
  }, g.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : hl(!!k), g) : o;
  }, g.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? g : k;
  }, g.clickDistance = function(k) {
    return arguments.length ? (m = (k = +k) * k, g) : Math.sqrt(m);
  }, g;
}
function sy(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function sR(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function js() {
}
var Es = 0.7, zl = 1 / Es, ei = "\\s*([+-]?\\d+)\\s*", Cs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rO = /^#([0-9a-f]{3,8})$/, oO = new RegExp(`^rgb\\(${ei},${ei},${ei}\\)$`), iO = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), sO = new RegExp(`^rgba\\(${ei},${ei},${ei},${Cs}\\)$`), aO = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Cs}\\)$`), lO = new RegExp(`^hsl\\(${Cs},${Pn},${Pn}\\)$`), uO = new RegExp(`^hsla\\(${Cs},${Pn},${Pn},${Cs}\\)$`), Lx = {
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
sy(js, oo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: qx,
  // Deprecated! Use color.formatHex.
  formatHex: qx,
  formatHex8: cO,
  formatHsl: fO,
  formatRgb: Dx,
  toString: Dx
});
function qx() {
  return this.rgb().formatHex();
}
function cO() {
  return this.rgb().formatHex8();
}
function fO() {
  return aR(this).formatHsl();
}
function Dx() {
  return this.rgb().formatRgb();
}
function oo(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = rO.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? jx(t) : r === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? pl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? pl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = oO.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = iO.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = sO.exec(e)) ? pl(t[1], t[2], t[3], t[4]) : (t = aO.exec(e)) ? pl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = lO.exec(e)) ? $x(t[1], t[2] / 100, t[3] / 100, 1) : (t = uO.exec(e)) ? $x(t[1], t[2] / 100, t[3] / 100, t[4]) : Lx.hasOwnProperty(e) ? jx(Lx[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function jx(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pl(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new Nt(e, t, r, o);
}
function dO(e) {
  return e instanceof js || (e = oo(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function Iv(e, t, r, o) {
  return arguments.length === 1 ? dO(e) : new Nt(e, t, r, o ?? 1);
}
function Nt(e, t, r, o) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +o;
}
sy(Nt, Iv, sR(js, {
  brighter(e) {
    return e = e == null ? zl : Math.pow(zl, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Es : Math.pow(Es, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(no(this.r), no(this.g), no(this.b), Fl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: zx,
  // Deprecated! Use color.formatHex.
  formatHex: zx,
  formatHex8: hO,
  formatRgb: Fx,
  toString: Fx
}));
function zx() {
  return `#${to(this.r)}${to(this.g)}${to(this.b)}`;
}
function hO() {
  return `#${to(this.r)}${to(this.g)}${to(this.b)}${to((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fx() {
  const e = Fl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${no(this.r)}, ${no(this.g)}, ${no(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Fl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function no(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function to(e) {
  return e = no(e), (e < 16 ? "0" : "") + e.toString(16);
}
function $x(e, t, r, o) {
  return o <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dn(e, t, r, o);
}
function aR(e) {
  if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof js || (e = oo(e)), !e) return new dn();
  if (e instanceof dn) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, o = e.b / 255, s = Math.min(t, r, o), a = Math.max(t, r, o), l = NaN, u = a - s, f = (a + s) / 2;
  return u ? (t === a ? l = (r - o) / u + (r < o) * 6 : r === a ? l = (o - t) / u + 2 : l = (t - r) / u + 4, u /= f < 0.5 ? a + s : 2 - a - s, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new dn(l, u, f, e.opacity);
}
function pO(e, t, r, o) {
  return arguments.length === 1 ? aR(e) : new dn(e, t, r, o ?? 1);
}
function dn(e, t, r, o) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +o;
}
sy(dn, pO, sR(js, {
  brighter(e) {
    return e = e == null ? zl : Math.pow(zl, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Es : Math.pow(Es, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - o;
    return new Nt(
      Hf(e >= 240 ? e - 240 : e + 120, s, o),
      Hf(e, s, o),
      Hf(e < 120 ? e + 240 : e - 120, s, o),
      this.opacity
    );
  },
  clamp() {
    return new dn(Bx(this.h), ml(this.s), ml(this.l), Fl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Fl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Bx(this.h)}, ${ml(this.s) * 100}%, ${ml(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Bx(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ml(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Hf(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ay = (e) => () => e;
function mO(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function gO(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(o) {
    return Math.pow(e + o * t, r);
  };
}
function vO(e) {
  return (e = +e) == 1 ? lR : function(t, r) {
    return r - t ? gO(t, r, e) : ay(isNaN(t) ? r : t);
  };
}
function lR(e, t) {
  var r = t - e;
  return r ? mO(e, r) : ay(isNaN(e) ? t : e);
}
const $l = (function e(t) {
  var r = vO(t);
  function o(s, a) {
    var l = r((s = Iv(s)).r, (a = Iv(a)).r), u = r(s.g, a.g), f = r(s.b, a.b), d = lR(s.opacity, a.opacity);
    return function(h) {
      return s.r = l(h), s.g = u(h), s.b = f(h), s.opacity = d(h), s + "";
    };
  }
  return o.gamma = e, o;
})(1);
function yO(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, o = t.slice(), s;
  return function(a) {
    for (s = 0; s < r; ++s) o[s] = e[s] * (1 - a) + t[s] * a;
    return o;
  };
}
function wO(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function xO(e, t) {
  var r = t ? t.length : 0, o = e ? Math.min(r, e.length) : 0, s = new Array(o), a = new Array(r), l;
  for (l = 0; l < o; ++l) s[l] = _s(e[l], t[l]);
  for (; l < r; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = s[l](u);
    return a;
  };
}
function _O(e, t) {
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
function bO(e, t) {
  var r = {}, o = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = _s(e[s], t[s]) : o[s] = t[s];
  return function(a) {
    for (s in r) o[s] = r[s](a);
    return o;
  };
}
var Mv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wf = new RegExp(Mv.source, "g");
function SO(e) {
  return function() {
    return e;
  };
}
function EO(e) {
  return function(t) {
    return e(t) + "";
  };
}
function uR(e, t) {
  var r = Mv.lastIndex = Wf.lastIndex = 0, o, s, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = Mv.exec(e)) && (s = Wf.exec(t)); )
    (a = s.index) > r && (a = t.slice(r, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (s = s[0]) ? u[l] ? u[l] += s : u[++l] = s : (u[++l] = null, f.push({ i: l, x: kn(o, s) })), r = Wf.lastIndex;
  return r < t.length && (a = t.slice(r), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? EO(f[0].x) : SO(t) : (t = f.length, function(d) {
    for (var h = 0, m; h < t; ++h) u[(m = f[h]).i] = m.x(d);
    return u.join("");
  });
}
function _s(e, t) {
  var r = typeof t, o;
  return t == null || r === "boolean" ? ay(t) : (r === "number" ? kn : r === "string" ? (o = oo(t)) ? (t = o, $l) : uR : t instanceof oo ? $l : t instanceof Date ? _O : wO(t) ? yO : Array.isArray(t) ? xO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? bO : kn)(e, t);
}
var Vx = 180 / Math.PI, Ov = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function cR(e, t, r, o, s, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * r + t * o) && (r -= e * f, o -= t * f), (u = Math.sqrt(r * r + o * o)) && (r /= u, o /= u, f /= u), e * o < t * r && (e = -e, t = -t, f = -f, l = -l), {
    translateX: s,
    translateY: a,
    rotate: Math.atan2(t, e) * Vx,
    skewX: Math.atan(f) * Vx,
    scaleX: l,
    scaleY: u
  };
}
var gl;
function CO(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ov : cR(t.a, t.b, t.c, t.d, t.e, t.f);
}
function kO(e) {
  return e == null || (gl || (gl = document.createElementNS("http://www.w3.org/2000/svg", "g")), gl.setAttribute("transform", e), !(e = gl.transform.baseVal.consolidate())) ? Ov : (e = e.matrix, cR(e.a, e.b, e.c, e.d, e.e, e.f));
}
function fR(e, t, r, o) {
  function s(d) {
    return d.length ? d.pop() + " " : "";
  }
  function a(d, h, m, g, w, E) {
    if (d !== m || h !== g) {
      var y = w.push("translate(", null, t, null, r);
      E.push({ i: y - 4, x: kn(d, m) }, { i: y - 2, x: kn(h, g) });
    } else (m || g) && w.push("translate(" + m + t + g + r);
  }
  function l(d, h, m, g) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), g.push({ i: m.push(s(m) + "rotate(", null, o) - 2, x: kn(d, h) })) : h && m.push(s(m) + "rotate(" + h + o);
  }
  function u(d, h, m, g) {
    d !== h ? g.push({ i: m.push(s(m) + "skewX(", null, o) - 2, x: kn(d, h) }) : h && m.push(s(m) + "skewX(" + h + o);
  }
  function f(d, h, m, g, w, E) {
    if (d !== m || h !== g) {
      var y = w.push(s(w) + "scale(", null, ",", null, ")");
      E.push({ i: y - 4, x: kn(d, m) }, { i: y - 2, x: kn(h, g) });
    } else (m !== 1 || g !== 1) && w.push(s(w) + "scale(" + m + "," + g + ")");
  }
  return function(d, h) {
    var m = [], g = [];
    return d = e(d), h = e(h), a(d.translateX, d.translateY, h.translateX, h.translateY, m, g), l(d.rotate, h.rotate, m, g), u(d.skewX, h.skewX, m, g), f(d.scaleX, d.scaleY, h.scaleX, h.scaleY, m, g), d = h = null, function(w) {
      for (var E = -1, y = g.length, x; ++E < y; ) m[(x = g[E]).i] = x.x(w);
      return m.join("");
    };
  };
}
var RO = fR(CO, "px, ", "px)", "deg)"), NO = fR(kO, ", ", ")", ")"), PO = 1e-12;
function Hx(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function TO(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function AO(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Al = (function e(t, r, o) {
  function s(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], m = l[1], g = l[2], w = h - u, E = m - f, y = w * w + E * E, x, S;
    if (y < PO)
      S = Math.log(g / d) / t, x = function(A) {
        return [
          u + A * w,
          f + A * E,
          d * Math.exp(t * A * S)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (g * g - d * d + o * y) / (2 * d * r * C), k = (g * g - d * d - o * y) / (2 * g * r * C), N = Math.log(Math.sqrt(_ * _ + 1) - _), P = Math.log(Math.sqrt(k * k + 1) - k);
      S = (P - N) / t, x = function(A) {
        var O = A * S, D = Hx(N), G = d / (r * C) * (D * AO(t * O + N) - TO(N));
        return [
          u + G * w,
          f + G * E,
          d * D / Hx(t * O + N)
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
var oi = 0, ms = 0, ds = 0, dR = 1e3, Bl, gs, Vl = 0, io = 0, au = 0, ks = typeof performance == "object" && performance.now ? performance : Date, hR = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ly() {
  return io || (hR(IO), io = ks.now() + au);
}
function IO() {
  io = 0;
}
function Hl() {
  this._call = this._time = this._next = null;
}
Hl.prototype = pR.prototype = {
  constructor: Hl,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? ly() : +r) + (t == null ? 0 : +t), !this._next && gs !== this && (gs ? gs._next = this : Bl = this, gs = this), this._call = e, this._time = r, Lv();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Lv());
  }
};
function pR(e, t, r) {
  var o = new Hl();
  return o.restart(e, t, r), o;
}
function MO() {
  ly(), ++oi;
  for (var e = Bl, t; e; )
    (t = io - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --oi;
}
function Wx() {
  io = (Vl = ks.now()) + au, oi = ms = 0;
  try {
    MO();
  } finally {
    oi = 0, LO(), io = 0;
  }
}
function OO() {
  var e = ks.now(), t = e - Vl;
  t > dR && (au -= t, Vl = e);
}
function LO() {
  for (var e, t = Bl, r, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Bl = r);
  gs = e, Lv(o);
}
function Lv(e) {
  if (!oi) {
    ms && (ms = clearTimeout(ms));
    var t = e - io;
    t > 24 ? (e < 1 / 0 && (ms = setTimeout(Wx, e - ks.now() - au)), ds && (ds = clearInterval(ds))) : (ds || (Vl = ks.now(), ds = setInterval(OO, dR)), oi = 1, hR(Wx));
  }
}
function Ux(e, t, r) {
  var o = new Hl();
  return t = t == null ? 0 : +t, o.restart((s) => {
    o.stop(), e(s + t);
  }, t, r), o;
}
var qO = iu("start", "end", "cancel", "interrupt"), DO = [], mR = 0, Gx = 1, qv = 2, Il = 3, Yx = 4, Dv = 5, Ml = 6;
function lu(e, t, r, o, s, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (r in l) return;
  jO(e, r, {
    name: t,
    index: o,
    // For context during callback.
    group: s,
    // For context during callback.
    on: qO,
    tween: DO,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: mR
  });
}
function uy(e, t) {
  var r = yn(e, t);
  if (r.state > mR) throw new Error("too late; already scheduled");
  return r;
}
function Mn(e, t) {
  var r = yn(e, t);
  if (r.state > Il) throw new Error("too late; already running");
  return r;
}
function yn(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function jO(e, t, r) {
  var o = e.__transition, s;
  o[t] = r, r.timer = pR(a, 0, r.time);
  function a(d) {
    r.state = Gx, r.timer.restart(l, r.delay, r.time), r.delay <= d && l(d - r.delay);
  }
  function l(d) {
    var h, m, g, w;
    if (r.state !== Gx) return f();
    for (h in o)
      if (w = o[h], w.name === r.name) {
        if (w.state === Il) return Ux(l);
        w.state === Yx ? (w.state = Ml, w.timer.stop(), w.on.call("interrupt", e, e.__data__, w.index, w.group), delete o[h]) : +h < t && (w.state = Ml, w.timer.stop(), w.on.call("cancel", e, e.__data__, w.index, w.group), delete o[h]);
      }
    if (Ux(function() {
      r.state === Il && (r.state = Yx, r.timer.restart(u, r.delay, r.time), u(d));
    }), r.state = qv, r.on.call("start", e, e.__data__, r.index, r.group), r.state === qv) {
      for (r.state = Il, s = new Array(g = r.tween.length), h = 0, m = -1; h < g; ++h)
        (w = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (s[++m] = w);
      s.length = m + 1;
    }
  }
  function u(d) {
    for (var h = d < r.duration ? r.ease.call(null, d / r.duration) : (r.timer.restart(f), r.state = Dv, 1), m = -1, g = s.length; ++m < g; )
      s[m].call(e, h);
    r.state === Dv && (r.on.call("end", e, e.__data__, r.index, r.group), f());
  }
  function f() {
    r.state = Ml, r.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Ol(e, t) {
  var r = e.__transition, o, s, a = !0, l;
  if (r) {
    t = t == null ? null : t + "";
    for (l in r) {
      if ((o = r[l]).name !== t) {
        a = !1;
        continue;
      }
      s = o.state > qv && o.state < Dv, o.state = Ml, o.timer.stop(), o.on.call(s ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete r[l];
    }
    a && delete e.__transition;
  }
}
function zO(e) {
  return this.each(function() {
    Ol(this, e);
  });
}
function FO(e, t) {
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
function $O(e, t, r) {
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
function BO(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = yn(this.node(), r).tween, s = 0, a = o.length, l; s < a; ++s)
      if ((l = o[s]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? FO : $O)(r, e, t));
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
function gR(e, t) {
  var r;
  return (typeof t == "number" ? kn : t instanceof oo ? $l : (r = oo(t)) ? (t = r, $l) : uR)(e, t);
}
function VO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function HO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function WO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function UO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function GO(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function YO(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function KO(e, t) {
  var r = su(e), o = r === "transform" ? NO : gR;
  return this.attrTween(e, typeof t == "function" ? (r.local ? YO : GO)(r, o, cy(this, "attr." + e, t)) : t == null ? (r.local ? HO : VO)(r) : (r.local ? UO : WO)(r, o, t));
}
function XO(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function QO(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function ZO(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && QO(e, a)), r;
  }
  return s._value = t, s;
}
function JO(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && XO(e, a)), r;
  }
  return s._value = t, s;
}
function eL(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var o = su(e);
  return this.tween(r, (o.local ? ZO : JO)(o, t));
}
function tL(e, t) {
  return function() {
    uy(this, e).delay = +t.apply(this, arguments);
  };
}
function nL(e, t) {
  return t = +t, function() {
    uy(this, e).delay = t;
  };
}
function rL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? tL : nL)(t, e)) : yn(this.node(), t).delay;
}
function oL(e, t) {
  return function() {
    Mn(this, e).duration = +t.apply(this, arguments);
  };
}
function iL(e, t) {
  return t = +t, function() {
    Mn(this, e).duration = t;
  };
}
function sL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? oL : iL)(t, e)) : yn(this.node(), t).duration;
}
function aL(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
  };
}
function lL(e) {
  var t = this._id;
  return arguments.length ? this.each(aL(t, e)) : yn(this.node(), t).ease;
}
function uL(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Mn(this, e).ease = r;
  };
}
function cL(e) {
  if (typeof e != "function") throw new Error();
  return this.each(uL(this._id, e));
}
function fL(e) {
  typeof e != "function" && (e = Gk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Yn(o, this._parents, this._name, this._id);
}
function dL(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, o = t.length, s = r.length, a = Math.min(o, s), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = r[u], h = f.length, m = l[u] = new Array(h), g, w = 0; w < h; ++w)
      (g = f[w] || d[w]) && (m[w] = g);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Yn(l, this._parents, this._name, this._id);
}
function hL(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function pL(e, t, r) {
  var o, s, a = hL(t) ? uy : Mn;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (s = (o = u).copy()).on(t, r), l.on = s;
  };
}
function mL(e, t) {
  var r = this._id;
  return arguments.length < 2 ? yn(this.node(), r).on.on(e) : this.each(pL(r, e, t));
}
function gL(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function vL() {
  return this.on("end.remove", gL(this._id));
}
function yL(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = oy(e));
  for (var o = this._groups, s = o.length, a = new Array(s), l = 0; l < s; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, m, g = 0; g < f; ++g)
      (h = u[g]) && (m = e.call(h, h.__data__, g, u)) && ("__data__" in h && (m.__data__ = h.__data__), d[g] = m, lu(d[g], t, r, g, d, yn(h, r)));
  return new Yn(a, this._parents, t, r);
}
function wL(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Uk(e));
  for (var o = this._groups, s = o.length, a = [], l = [], u = 0; u < s; ++u)
    for (var f = o[u], d = f.length, h, m = 0; m < d; ++m)
      if (h = f[m]) {
        for (var g = e.call(h, h.__data__, m, f), w, E = yn(h, r), y = 0, x = g.length; y < x; ++y)
          (w = g[y]) && lu(w, t, r, y, g, E);
        a.push(g), l.push(h);
      }
  return new Yn(a, l, t, r);
}
var xL = Ds.prototype.constructor;
function _L() {
  return new xL(this._groups, this._parents);
}
function bL(e, t) {
  var r, o, s;
  return function() {
    var a = ri(this, e), l = (this.style.removeProperty(e), ri(this, e));
    return a === l ? null : a === r && l === o ? s : s = t(r = a, o = l);
  };
}
function vR(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function SL(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = ri(this, e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function EL(e, t, r) {
  var o, s, a;
  return function() {
    var l = ri(this, e), u = r(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), ri(this, e))), l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u));
  };
}
function CL(e, t) {
  var r, o, s, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = Mn(this, e), d = f.on, h = f.value[a] == null ? u || (u = vR(t)) : void 0;
    (d !== r || s !== h) && (o = (r = d).copy()).on(l, s = h), f.on = o;
  };
}
function kL(e, t, r) {
  var o = (e += "") == "transform" ? RO : gR;
  return t == null ? this.styleTween(e, bL(e, o)).on("end.style." + e, vR(e)) : typeof t == "function" ? this.styleTween(e, EL(e, o, cy(this, "style." + e, t))).each(CL(this._id, e)) : this.styleTween(e, SL(e, o, t), r).on("end.style." + e, null);
}
function RL(e, t, r) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), r);
  };
}
function NL(e, t, r) {
  var o, s;
  function a() {
    var l = t.apply(this, arguments);
    return l !== s && (o = (s = l) && RL(e, l, r)), o;
  }
  return a._value = t, a;
}
function PL(e, t, r) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, NL(e, t, r ?? ""));
}
function TL(e) {
  return function() {
    this.textContent = e;
  };
}
function AL(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function IL(e) {
  return this.tween("text", typeof e == "function" ? AL(cy(this, "text", e)) : TL(e == null ? "" : e + ""));
}
function ML(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function OL(e) {
  var t, r;
  function o() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && ML(s)), t;
  }
  return o._value = e, o;
}
function LL(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, OL(e));
}
function qL() {
  for (var e = this._name, t = this._id, r = yR(), o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = yn(f, t);
        lu(f, e, r, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Yn(o, this._parents, e, r);
}
function DL() {
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
var jL = 0;
function Yn(e, t, r, o) {
  this._groups = e, this._parents = t, this._name = r, this._id = o;
}
function yR() {
  return ++jL;
}
var Wn = Ds.prototype;
Yn.prototype = {
  constructor: Yn,
  select: yL,
  selectAll: wL,
  selectChild: Wn.selectChild,
  selectChildren: Wn.selectChildren,
  filter: fL,
  merge: dL,
  selection: _L,
  transition: qL,
  call: Wn.call,
  nodes: Wn.nodes,
  node: Wn.node,
  size: Wn.size,
  empty: Wn.empty,
  each: Wn.each,
  on: mL,
  attr: KO,
  attrTween: eL,
  style: kL,
  styleTween: PL,
  text: IL,
  textTween: LL,
  remove: vL,
  tween: BO,
  delay: rL,
  duration: sL,
  ease: lL,
  easeVarying: cL,
  end: DL,
  [Symbol.iterator]: Wn[Symbol.iterator]
};
function zL(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var FL = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: zL
};
function $L(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function BL(e) {
  var t, r;
  e instanceof Yn ? (t = e._id, e = e._name) : (t = yR(), (r = FL).time = ly(), e = e == null ? null : e + "");
  for (var o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && lu(f, e, t, d, l, r || $L(f, t));
  return new Yn(o, this._parents, e, t);
}
Ds.prototype.interrupt = zO;
Ds.prototype.transition = BL;
const vl = (e) => () => e;
function VL(e, {
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
var uu = new Gn(1, 0, 0);
wR.prototype = Gn.prototype;
function wR(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return uu;
  return e.__zoom;
}
function Uf(e) {
  e.stopImmediatePropagation();
}
function hs(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function HL(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function WL() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Kx() {
  return this.__zoom || uu;
}
function UL(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function GL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function YL(e, t, r) {
  var o = e.invertX(t[0][0]) - r[0][0], s = e.invertX(t[1][0]) - r[1][0], a = e.invertY(t[0][1]) - r[0][1], l = e.invertY(t[1][1]) - r[1][1];
  return e.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function xR() {
  var e = HL, t = WL, r = YL, o = UL, s = GL, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Al, d = iu("start", "zoom", "end"), h, m, g, w = 500, E = 150, y = 0, x = 10;
  function S(L) {
    L.property("__zoom", Kx).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", G).filter(s).on("touchstart.zoom", B).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(L, H, $, Y) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", Kx), L !== M ? N(L, H, $, Y) : M.interrupt().each(function() {
      P(this, arguments).event(Y).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, S.scaleBy = function(L, H, $, Y) {
    S.scaleTo(L, function() {
      var M = this.__zoom.k, j = typeof H == "function" ? H.apply(this, arguments) : H;
      return M * j;
    }, $, Y);
  }, S.scaleTo = function(L, H, $, Y) {
    S.transform(L, function() {
      var M = t.apply(this, arguments), j = this.__zoom, Q = $ == null ? k(M) : typeof $ == "function" ? $.apply(this, arguments) : $, q = j.invert(Q), W = typeof H == "function" ? H.apply(this, arguments) : H;
      return r(_(C(j, W), Q, q), M, l);
    }, $, Y);
  }, S.translateBy = function(L, H, $, Y) {
    S.transform(L, function() {
      return r(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), l);
    }, null, Y);
  }, S.translateTo = function(L, H, $, Y, M) {
    S.transform(L, function() {
      var j = t.apply(this, arguments), Q = this.__zoom, q = Y == null ? k(j) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return r(uu.translate(q[0], q[1]).scale(Q.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), j, l);
    }, Y, M);
  };
  function C(L, H) {
    return H = Math.max(a[0], Math.min(a[1], H)), H === L.k ? L : new Gn(H, L.x, L.y);
  }
  function _(L, H, $) {
    var Y = H[0] - $[0] * L.k, M = H[1] - $[1] * L.k;
    return Y === L.x && M === L.y ? L : new Gn(L.k, Y, M);
  }
  function k(L) {
    return [(+L[0][0] + +L[1][0]) / 2, (+L[0][1] + +L[1][1]) / 2];
  }
  function N(L, H, $, Y) {
    L.on("start.zoom", function() {
      P(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var M = this, j = arguments, Q = P(M, j).event(Y), q = t.apply(M, j), W = $ == null ? k(q) : typeof $ == "function" ? $.apply(M, j) : $, ie = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), F = M.__zoom, Z = typeof H == "function" ? H.apply(M, j) : H, ee = f(F.invert(W).concat(ie / F.k), Z.invert(W).concat(ie / Z.k));
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
  function P(L, H, $) {
    return !$ && L.__zooming || new A(L, H);
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
      var H = Dt(this.that).datum();
      d.call(
        L,
        this.that,
        new VL(L, {
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
    var $ = P(this, H).event(L), Y = this.__zoom, M = Math.max(a[0], Math.min(a[1], Y.k * Math.pow(2, o.apply(this, arguments)))), j = fn(L);
    if ($.wheel)
      ($.mouse[0][0] !== j[0] || $.mouse[0][1] !== j[1]) && ($.mouse[1] = Y.invert($.mouse[0] = j)), clearTimeout($.wheel);
    else {
      if (Y.k === M) return;
      $.mouse = [j, Y.invert(j)], Ol(this), $.start();
    }
    hs(L), $.wheel = setTimeout(Q, E), $.zoom("mouse", r(_(C(Y, M), $.mouse[0], $.mouse[1]), $.extent, l));
    function Q() {
      $.wheel = null, $.end();
    }
  }
  function D(L, ...H) {
    if (g || !e.apply(this, arguments)) return;
    var $ = L.currentTarget, Y = P(this, H, !0).event(L), M = Dt(L.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ie, !0), j = fn(L, $), Q = L.clientX, q = L.clientY;
    rR(L.view), Uf(L), Y.mouse = [j, this.__zoom.invert(j)], Ol(this), Y.start();
    function W(F) {
      if (hs(F), !Y.moved) {
        var Z = F.clientX - Q, ee = F.clientY - q;
        Y.moved = Z * Z + ee * ee > y;
      }
      Y.event(F).zoom("mouse", r(_(Y.that.__zoom, Y.mouse[0] = fn(F, $), Y.mouse[1]), Y.extent, l));
    }
    function ie(F) {
      M.on("mousemove.zoom mouseup.zoom", null), oR(F.view, Y.moved), hs(F), Y.event(F).end();
    }
  }
  function G(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, Y = fn(L.changedTouches ? L.changedTouches[0] : L, this), M = $.invert(Y), j = $.k * (L.shiftKey ? 0.5 : 2), Q = r(_(C($, j), Y, M), t.apply(this, H), l);
      hs(L), u > 0 ? Dt(this).transition().duration(u).call(N, Q, Y, L) : Dt(this).call(S.transform, Q, Y, L);
    }
  }
  function B(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = L.touches, Y = $.length, M = P(this, H, L.changedTouches.length === Y).event(L), j, Q, q, W;
      for (Uf(L), Q = 0; Q < Y; ++Q)
        q = $[Q], W = fn(q, this), W = [W, this.__zoom.invert(W), q.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== W[2] && (M.touch1 = W, M.taps = 0) : (M.touch0 = W, j = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), j && (M.taps < 2 && (m = W[0], h = setTimeout(function() {
        h = null;
      }, w)), Ol(this), M.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var $ = P(this, H).event(L), Y = L.changedTouches, M = Y.length, j, Q, q, W;
      for (hs(L), j = 0; j < M; ++j)
        Q = Y[j], q = fn(Q, this), $.touch0 && $.touch0[2] === Q.identifier ? $.touch0[0] = q : $.touch1 && $.touch1[2] === Q.identifier && ($.touch1[0] = q);
      if (Q = $.that.__zoom, $.touch1) {
        var ie = $.touch0[0], F = $.touch0[1], Z = $.touch1[0], ee = $.touch1[1], K = (K = Z[0] - ie[0]) * K + (K = Z[1] - ie[1]) * K, te = (te = ee[0] - F[0]) * te + (te = ee[1] - F[1]) * te;
        Q = C(Q, Math.sqrt(K / te)), q = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], W = [(F[0] + ee[0]) / 2, (F[1] + ee[1]) / 2];
      } else if ($.touch0) q = $.touch0[0], W = $.touch0[1];
      else return;
      $.zoom("touch", r(_(Q, q, W), $.extent, l));
    }
  }
  function X(L, ...H) {
    if (this.__zooming) {
      var $ = P(this, H).event(L), Y = L.changedTouches, M = Y.length, j, Q;
      for (Uf(L), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, w), j = 0; j < M; ++j)
        Q = Y[j], $.touch0 && $.touch0[2] === Q.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Q.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Q = fn(Q, this), Math.hypot(m[0] - Q[0], m[1] - Q[1]) < x)) {
        var q = Dt(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : vl(+L), S) : o;
  }, S.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : vl(!!L), S) : e;
  }, S.touchable = function(L) {
    return arguments.length ? (s = typeof L == "function" ? L : vl(!!L), S) : s;
  }, S.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : vl([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), S) : t;
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
const An = {
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
}, Rs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], _R = ["Enter", " ", "Escape"], bR = {
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
var ii;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(ii || (ii = {}));
var ro;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ro || (ro = {}));
var Ns;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ns || (Ns = {}));
const SR = {
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
var Wl;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Wl || (Wl = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Xx = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function ER(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const CR = (e) => "id" in e && "source" in e && "target" in e, KL = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), fy = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), zs = (e, t = [0, 0]) => {
  const { width: r, height: o } = Qn(e), s = e.origin ?? t, a = r * s[0], l = o * s[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, XL = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const r = e.reduce((o, s) => {
    const a = typeof s == "string";
    let l = !t.nodeLookup && !a ? s : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(s) : fy(s) ? s : t.nodeLookup.get(s.id));
    const u = l ? Ul(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return cu(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return fu(r);
}, Fs = (e, t = {}) => {
  let r = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((s) => {
    (t.filter === void 0 || t.filter(s)) && (r = cu(r, Ul(s)), o = !0);
  }), o ? fu(r) : { x: 0, y: 0, width: 0, height: 0 };
}, dy = (e, t, [r, o, s] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...Bs(t, [r, o, s]),
    width: t.width / s,
    height: t.height / s
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: m = !0, hidden: g = !1 } = d;
    if (l && !m || g)
      continue;
    const w = h.width ?? d.width ?? d.initialWidth ?? null, E = h.height ?? d.height ?? d.initialHeight ?? null, y = Ps(u, ai(d)), x = (w ?? 0) * (E ?? 0), S = a && y > 0;
    (!d.internals.handleBounds || S || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, QL = (e, t) => {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    r.add(o.id);
  }), t.filter((o) => r.has(o.source) || r.has(o.target));
};
function ZL(e, t) {
  const r = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((s) => s.id)) : null;
  return e.forEach((s) => {
    s.measured.width && s.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !s.hidden) && (!o || o.has(s.id)) && r.set(s.id, s);
  }), r;
}
async function JL({ nodes: e, width: t, height: r, panZoom: o, minZoom: s, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = ZL(e, l), f = Fs(u), d = hy(f, t, r, (l == null ? void 0 : l.minZoom) ?? s, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function kR({ nodeId: e, nextPosition: t, nodeLookup: r, nodeOrigin: o = [0, 0], nodeExtent: s, onError: a }) {
  const l = r.get(e), u = l.parentId ? r.get(l.parentId) : void 0, { x: f, y: d } = u ? u.internals.positionAbsolute : { x: 0, y: 0 }, h = l.origin ?? o;
  let m = l.extent || s;
  if (l.extent === "parent" && !l.expandParent)
    if (!u)
      a == null || a("005", An.error005());
    else {
      const w = u.measured.width, E = u.measured.height;
      w && E && (m = [
        [f, d],
        [f + w, d + E]
      ]);
    }
  else u && li(l.extent) && (m = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const g = li(m) ? so(t, m, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", An.error015())), {
    position: {
      x: g.x - f + (l.measured.width ?? 0) * h[0],
      y: g.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: g
  };
}
async function eq({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: r, edges: o, onBeforeDelete: s }) {
  const a = new Set(e.map((g) => g.id)), l = [];
  for (const g of r) {
    if (g.deletable === !1)
      continue;
    const w = a.has(g.id), E = !w && g.parentId && l.find((y) => y.id === g.parentId);
    (w || E) && l.push(g);
  }
  const u = new Set(t.map((g) => g.id)), f = o.filter((g) => g.deletable !== !1), h = QL(l, f);
  for (const g of f)
    u.has(g.id) && !h.find((E) => E.id === g.id) && h.push(g);
  if (!s)
    return {
      edges: h,
      nodes: l
    };
  const m = await s({
    nodes: l,
    edges: h
  });
  return typeof m == "boolean" ? m ? { edges: h, nodes: l } : { edges: [], nodes: [] } : m;
}
const si = (e, t = 0, r = 1) => Math.min(Math.max(e, t), r), so = (e = { x: 0, y: 0 }, t, r) => ({
  x: si(e.x, t[0][0], t[1][0] - ((r == null ? void 0 : r.width) ?? 0)),
  y: si(e.y, t[0][1], t[1][1] - ((r == null ? void 0 : r.height) ?? 0))
});
function RR(e, t, r) {
  const { width: o, height: s } = Qn(r), { x: a, y: l } = r.internals.positionAbsolute;
  return so(e, [
    [a, l],
    [a + o, l + s]
  ], t);
}
const Qx = (e, t, r) => e < t ? si(Math.abs(e - t), 1, t) / t : e > r ? -si(Math.abs(e - r), 1, t) / t : 0, NR = (e, t, r = 15, o = 40) => {
  const s = Qx(e.x, o, t.width - o) * r, a = Qx(e.y, o, t.height - o) * r;
  return [s, a];
}, cu = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), jv = ({ x: e, y: t, width: r, height: o }) => ({
  x: e,
  y: t,
  x2: e + r,
  y2: t + o
}), fu = ({ x: e, y: t, x2: r, y2: o }) => ({
  x: e,
  y: t,
  width: r - e,
  height: o - t
}), ai = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = fy(e) ? e.internals.positionAbsolute : zs(e, t);
  return {
    x: r,
    y: o,
    width: ((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Ul = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = fy(e) ? e.internals.positionAbsolute : zs(e, t);
  return {
    x: r,
    y: o,
    x2: r + (((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, PR = (e, t) => fu(cu(jv(e), jv(t))), Ps = (e, t) => {
  const r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(r * o);
}, Zx = (e) => hn(e.width) && hn(e.height) && hn(e.x) && hn(e.y), hn = (e) => !isNaN(e) && isFinite(e), tq = (e, t) => {
}, $s = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Bs = ({ x: e, y: t }, [r, o, s], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - r) / s,
    y: (t - o) / s
  };
  return a ? $s(u, l) : u;
}, Gl = ({ x: e, y: t }, [r, o, s]) => ({
  x: e * s + r,
  y: t * s + o
});
function Wo(e, t) {
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
function nq(e, t, r) {
  if (typeof e == "string" || typeof e == "number") {
    const o = Wo(e, r), s = Wo(e, t);
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
    const o = Wo(e.top ?? e.y ?? 0, r), s = Wo(e.bottom ?? e.y ?? 0, r), a = Wo(e.left ?? e.x ?? 0, t), l = Wo(e.right ?? e.x ?? 0, t);
    return { top: o, right: l, bottom: s, left: a, x: a + l, y: o + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function rq(e, t, r, o, s, a) {
  const { x: l, y: u } = Gl(e, [t, r, o]), { x: f, y: d } = Gl({ x: e.x + e.width, y: e.y + e.height }, [t, r, o]), h = s - f, m = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(m)
  };
}
const hy = (e, t, r, o, s, a) => {
  const l = nq(a, t, r), u = (t - l.x) / e.width, f = (r - l.y) / e.height, d = Math.min(u, f), h = si(d, o, s), m = e.x + e.width / 2, g = e.y + e.height / 2, w = t / 2 - m * h, E = r / 2 - g * h, y = rq(e, w, E, h, t, r), x = {
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
}, Ts = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function li(e) {
  return e != null && e !== "parent";
}
function Qn(e) {
  var t, r;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function TR(e) {
  var t, r;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function AR(e, t = { width: 0, height: 0 }, r, o, s) {
  const a = { ...e }, l = o.get(r);
  if (l) {
    const u = l.origin || s;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function Jx(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const r of e)
    if (!t.has(r))
      return !1;
  return !0;
}
function oq() {
  let e, t;
  return { promise: new Promise((o, s) => {
    e = o, t = s;
  }), resolve: e, reject: t };
}
function iq(e) {
  return { ...bR, ...e || {} };
}
function bs(e, { snapGrid: t = [0, 0], snapToGrid: r = !1, transform: o, containerBounds: s }) {
  const { x: a, y: l } = pn(e), u = Bs({ x: a - ((s == null ? void 0 : s.left) ?? 0), y: l - ((s == null ? void 0 : s.top) ?? 0) }, o), { x: f, y: d } = r ? $s(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const py = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), IR = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, sq = ["INPUT", "SELECT", "TEXTAREA"];
function MR(e) {
  var o, s;
  const t = ((s = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : s[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : sq.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const OR = (e) => "clientX" in e, pn = (e, t) => {
  var a, l;
  const r = OR(e), o = r ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, s = r ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, e1 = (e, t, r, o, s) => {
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
function LR({ sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: s, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + s * 0.375 + l * 0.375 + r * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), m = Math.abs(d - t);
  return [f, d, h, m];
}
function yl(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function t1({ pos: e, x1: t, y1: r, x2: o, y2: s, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - yl(t - o, a), r];
    case ye.Right:
      return [t + yl(o - t, a), r];
    case ye.Top:
      return [t, r - yl(r - s, a)];
    case ye.Bottom:
      return [t, r + yl(s - r, a)];
  }
}
function qR({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = t1({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s,
    c: l
  }), [d, h] = t1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t,
    c: l
  }), [m, g, w, E] = LR({
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
    m,
    g,
    w,
    E
  ];
}
function DR({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, s, l];
}
function aq({ sourceNode: e, targetNode: t, selected: r = !1, zIndex: o, elevateOnSelect: s = !1 }) {
  if (o !== void 0)
    return o;
  const a = s && r ? 1e3 : 0, l = Math.max(e.parentId || s && e.selected ? e.internals.z : 0, t.parentId || s && t.selected ? t.internals.z : 0);
  return a + l;
}
function lq({ sourceNode: e, targetNode: t, width: r, height: o, transform: s }) {
  const a = cu(Ul(e), Ul(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: r / s[2],
    height: o / s[2]
  };
  return Ps(l, fu(a)) > 0;
}
const uq = ({ source: e, sourceHandle: t, target: r, targetHandle: o }) => `xy-edge__${e}${t || ""}-${r}${o || ""}`, cq = (e, t) => t.some((r) => r.source === e.source && r.target === e.target && (r.sourceHandle === e.sourceHandle || !r.sourceHandle && !e.sourceHandle) && (r.targetHandle === e.targetHandle || !r.targetHandle && !e.targetHandle)), fq = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let r;
  return CR(e) ? r = { ...e } : r = {
    ...e,
    id: uq(e)
  }, cq(r, t) ? t : (r.sourceHandle === null && delete r.sourceHandle, r.targetHandle === null && delete r.targetHandle, t.concat(r));
};
function jR({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const [s, a, l, u] = DR({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o
  });
  return [`M ${e},${t}L ${r},${o}`, s, a, l, u];
}
const n1 = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, dq = ({ source: e, sourcePosition: t = ye.Bottom, target: r }) => t === ye.Left || t === ye.Right ? e.x < r.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < r.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, r1 = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function hq({ source: e, sourcePosition: t = ye.Bottom, target: r, targetPosition: o = ye.Top, center: s, offset: a, stepPosition: l }) {
  const u = n1[t], f = n1[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: r.x + f.x * a, y: r.y + f.y * a }, m = dq({
    source: d,
    sourcePosition: t,
    target: h
  }), g = m.x !== 0 ? "x" : "y", w = m[g];
  let E = [], y, x;
  const S = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, k] = DR({
    sourceX: e.x,
    sourceY: e.y,
    targetX: r.x,
    targetY: r.y
  });
  if (u[g] * f[g] === -1) {
    g === "x" ? (y = s.x ?? d.x + (h.x - d.x) * l, x = s.y ?? (d.y + h.y) / 2) : (y = s.x ?? (d.x + h.x) / 2, x = s.y ?? d.y + (h.y - d.y) * l);
    const P = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], A = [
      { x: d.x, y: x },
      { x: h.x, y: x }
    ];
    u[g] === w ? E = g === "x" ? P : A : E = g === "x" ? A : P;
  } else {
    const P = [{ x: d.x, y: h.y }], A = [{ x: h.x, y: d.y }];
    if (g === "x" ? E = u.x === w ? A : P : E = u.y === w ? P : A, t === o) {
      const V = Math.abs(e[g] - r[g]);
      if (V <= a) {
        const X = Math.min(a - 1, a - V);
        u[g] === w ? S[g] = (d[g] > e[g] ? -1 : 1) * X : C[g] = (h[g] > r[g] ? -1 : 1) * X;
      }
    }
    if (t !== o) {
      const V = g === "x" ? "y" : "x", X = u[g] === f[V], L = d[V] > h[V], H = d[V] < h[V];
      (u[g] === 1 && (!X && L || X && H) || u[g] !== 1 && (!X && H || X && L)) && (E = g === "x" ? P : A);
    }
    const O = { x: d.x + S.x, y: d.y + S.y }, D = { x: h.x + C.x, y: h.y + C.y }, G = Math.max(Math.abs(O.x - E[0].x), Math.abs(D.x - E[0].x)), B = Math.max(Math.abs(O.y - E[0].y), Math.abs(D.y - E[0].y));
    G >= B ? (y = (O.x + D.x) / 2, x = E[0].y) : (y = E[0].x, x = (O.y + D.y) / 2);
  }
  return [[
    e,
    { x: d.x + S.x, y: d.y + S.y },
    ...E,
    { x: h.x + C.x, y: h.y + C.y },
    r
  ], y, x, _, k];
}
function pq(e, t, r, o) {
  const s = Math.min(r1(e, t) / 2, r1(t, r) / 2, o), { x: a, y: l } = t;
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
  const [m, g, w, E, y] = hq({
    source: { x: e, y: t },
    sourcePosition: r,
    target: { x: o, y: s },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [m.reduce((S, C, _) => {
    let k = "";
    return _ > 0 && _ < m.length - 1 ? k = pq(m[_ - 1], C, m[_ + 1], l) : k = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, S += k, S;
  }, ""), g, w, E, y];
}
function o1(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function mq(e) {
  var m;
  const { sourceNode: t, targetNode: r } = e;
  if (!o1(t) || !o1(r))
    return null;
  const o = t.internals.handleBounds || i1(t.handles), s = r.internals.handleBounds || i1(r.handles), a = s1((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = s1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ii.Strict ? (s == null ? void 0 : s.target) ?? [] : ((s == null ? void 0 : s.target) ?? []).concat((s == null ? void 0 : s.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (m = e.onError) == null || m.call(e, "008", An.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const u = (a == null ? void 0 : a.position) || ye.Bottom, f = (l == null ? void 0 : l.position) || ye.Top, d = As(t, a, u), h = As(r, l, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: u,
    targetPosition: f
  };
}
function i1(e) {
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
function As(e, t, r = ye.Left, o = !1) {
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
function s1(e, t) {
  return e && (t ? e.find((r) => r.id === t) : e[0]) || null;
}
function Fv(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function gq(e, { id: t, defaultColor: r, defaultMarkerStart: o, defaultMarkerEnd: s }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || s].forEach((f) => {
    if (f && typeof f == "object") {
      const d = Fv(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || r, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const zR = 1e3, vq = 10, my = {
  nodeOrigin: [0, 0],
  nodeExtent: Rs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, yq = {
  ...my,
  checkEquality: !0
};
function gy(e, t) {
  const r = { ...e };
  for (const o in t)
    t[o] !== void 0 && (r[o] = t[o]);
  return r;
}
function wq(e, t, r) {
  const o = gy(my, r);
  for (const s of e.values())
    if (s.parentId)
      vy(s, e, t, o);
    else {
      const a = zs(s, o.nodeOrigin), l = li(s.extent) ? s.extent : o.nodeExtent, u = so(a, l, Qn(s));
      s.internals.positionAbsolute = u;
    }
}
function xq(e, t) {
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
  const s = gy(yq, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = s != null && s.elevateNodesOnSelect ? zR : 0;
  t.clear(), r.clear();
  for (const m of e) {
    let g = u.get(m.id);
    if (s.checkEquality && m === (g == null ? void 0 : g.internals.userNode))
      t.set(m.id, g);
    else {
      const w = zs(m, s.nodeOrigin), E = li(m.extent) ? m.extent : s.nodeExtent, y = so(w, E, Qn(m));
      g = {
        ...s.defaults,
        ...m,
        measured: {
          width: (d = m.measured) == null ? void 0 : d.width,
          height: (h = m.measured) == null ? void 0 : h.height
        },
        internals: {
          positionAbsolute: y,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: xq(m, g),
          z: FR(m, f),
          userNode: m
        }
      }, t.set(m.id, g);
    }
    (g.measured === void 0 || g.measured.width === void 0 || g.measured.height === void 0) && !g.hidden && (l = !1), m.parentId && vy(g, t, r, o, a);
  }
  return l;
}
function _q(e, t) {
  if (!e.parentId)
    return;
  const r = t.get(e.parentId);
  r ? r.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function vy(e, t, r, o, s) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = gy(my, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  _q(e, r), s && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++s.i, d.internals.z = d.internals.z + s.i * vq), s && d.internals.rootParentIndex !== void 0 && (s.i = d.internals.rootParentIndex);
  const h = a ? zR : 0, { x: m, y: g, z: w } = bq(e, d, l, u, h), { positionAbsolute: E } = e.internals, y = m !== E.x || g !== E.y;
  (y || w !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: m, y: g } : E,
      z: w
    }
  });
}
function FR(e, t) {
  return (hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function bq(e, t, r, o, s) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = Qn(e), f = zs(e, r), d = li(e.extent) ? so(f, e.extent, u) : f;
  let h = so({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = RR(h, u, t));
  const m = FR(e, s), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= m ? g + 1 : m
  };
}
function yy(e, t, r, o = [0, 0]) {
  var l;
  const s = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? ai(f), h = PR(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var _;
    const h = f.internals.positionAbsolute, m = Qn(f), g = f.origin ?? o, w = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, E = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(m.width, Math.round(u.width)), x = Math.max(m.height, Math.round(u.height)), S = (y - m.width) * g[0], C = (x - m.height) * g[1];
    (w > 0 || E > 0 || S || C) && (s.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - w + S,
        y: f.position.y - E + C
      }
    }), (_ = r.get(d)) == null || _.forEach((k) => {
      e.some((N) => N.id === k.id) || s.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + w,
          y: k.position.y + E
        }
      });
    })), (m.width < u.width || m.height < u.height || w || E) && s.push({
      id: d,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (w ? g[0] * w - S : 0),
        height: x + (E ? g[1] * E - C : 0)
      }
    });
  }), s;
}
function Sq(e, t, r, o, s, a) {
  const l = o == null ? void 0 : o.querySelector(".xyflow__viewport");
  let u = !1;
  if (!l)
    return { changes: [], updatedInternals: u };
  const f = [], d = window.getComputedStyle(l), { m22: h } = new window.DOMMatrixReadOnly(d.transform), m = [];
  for (const g of e.values()) {
    const w = t.get(g.id);
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
    const E = py(g.nodeElement), y = w.measured.width !== E.width || w.measured.height !== E.height;
    if (!!(E.width && E.height && (y || !w.internals.handleBounds || g.force))) {
      const S = g.nodeElement.getBoundingClientRect(), C = li(w.extent) ? w.extent : a;
      let { positionAbsolute: _ } = w.internals;
      w.parentId && w.extent === "parent" ? _ = RR(_, E, t.get(w.parentId)) : C && (_ = so(_, C, E));
      const k = {
        ...w,
        measured: E,
        internals: {
          ...w.internals,
          positionAbsolute: _,
          handleBounds: {
            source: e1("source", g.nodeElement, S, h, w.id),
            target: e1("target", g.nodeElement, S, h, w.id)
          }
        }
      };
      t.set(w.id, k), w.parentId && vy(k, t, r, { nodeOrigin: s }), u = !0, y && (f.push({
        id: w.id,
        type: "dimensions",
        dimensions: E
      }), w.expandParent && w.parentId && m.push({
        id: w.id,
        parentId: w.parentId,
        rect: ai(k, s)
      }));
    }
  }
  if (m.length > 0) {
    const g = yy(m, t, r, s);
    f.push(...g);
  }
  return { changes: f, updatedInternals: u };
}
async function Eq({ delta: e, panZoom: t, transform: r, translateExtent: o, width: s, height: a }) {
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
function a1(e, t, r, o, s, a) {
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
function $R(e, t, r) {
  e.clear(), t.clear();
  for (const o of r) {
    const { source: s, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: s, target: a, sourceHandle: l, targetHandle: u }, d = `${s}-${l}--${a}-${u}`, h = `${a}-${u}--${s}-${l}`;
    a1("source", f, h, e, s, l), a1("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function BR(e, t) {
  if (!e.parentId)
    return !1;
  const r = t.get(e.parentId);
  return r ? r.selected ? !0 : BR(r, t) : !1;
}
function l1(e, t, r) {
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
function Cq(e, t, r, o) {
  const s = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !BR(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
    const m = (l = r.get(d)) == null ? void 0 : l.internals.userNode;
    m && s.push({
      ...m,
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
function kq({ dragItems: e, snapGrid: t, x: r, y: o }) {
  const s = e.values().next().value;
  if (!s)
    return null;
  const a = {
    x: r - s.distance.x,
    y: o - s.distance.y
  }, l = $s(a, t);
  return {
    x: l.x - a.x,
    y: l.y - a.y
  };
}
function Rq({ onNodeMouseDown: e, getStoreItems: t, onDragStart: r, onDrag: o, onDragStop: s }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, m = !1, g = null, w = !1, E = !1, y = null;
  function x({ noDragClassName: C, handleSelector: _, domNode: k, isSelectable: N, nodeId: P, nodeClickDistance: A = 0 }) {
    g = Dt(k);
    function O({ x: V, y: X }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: $, snapToGrid: Y, nodeOrigin: M, onNodeDrag: j, onSelectionDrag: Q, onError: q, updateNodePositions: W } = t();
      a = { x: V, y: X };
      let ie = !1;
      const F = u.size > 1, Z = F && H ? jv(Fs(u)) : null, ee = F && Y ? kq({
        dragItems: u,
        snapGrid: $,
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
        } : $s(se, $));
        let ae = null;
        if (F && H && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, be = pe.x - Z.x + H[0][0], ge = pe.x + te.measured.width - Z.x2 + H[1][0], Ne = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [be, Ne],
            [ge, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = kR({
          nodeId: K,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: M,
          onError: q
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (W(u, !0), y && (o || j || !P && Q))) {
        const [K, te] = Gf({
          nodeId: P,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, K, te), j == null || j(y, K, te), P || Q == null || Q(y, te);
      }
    }
    async function D() {
      if (!h)
        return;
      const { transform: V, panBy: X, autoPanSpeed: L, autoPanOnNodeDrag: H } = t();
      if (!H) {
        f = !1, cancelAnimationFrame(l);
        return;
      }
      const [$, Y] = NR(d, h, L);
      ($ !== 0 || Y !== 0) && (a.x = (a.x ?? 0) - $ / V[2], a.y = (a.y ?? 0) - Y / V[2], await X({ x: $, y: Y }) && O(a)), l = requestAnimationFrame(D);
    }
    function G(V) {
      var F;
      const { nodeLookup: X, multiSelectionActive: L, nodesDraggable: H, transform: $, snapGrid: Y, snapToGrid: M, selectNodesOnDrag: j, onNodeDragStart: Q, onSelectionDragStart: q, unselectNodesAndEdges: W } = t();
      m = !0, (!j || !N) && !L && P && ((F = X.get(P)) != null && F.selected || W()), N && j && P && (e == null || e(P));
      const ie = bs(V.sourceEvent, { transform: $, snapGrid: Y, snapToGrid: M, containerBounds: h });
      if (a = ie, u = Cq(X, H, ie, P), u.size > 0 && (r || Q || !P && q)) {
        const [Z, ee] = Gf({
          nodeId: P,
          dragItems: u,
          nodeLookup: X
        });
        r == null || r(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), P || q == null || q(V.sourceEvent, ee);
      }
    }
    const B = iR().clickDistance(A).on("start", (V) => {
      const { domNode: X, nodeDragThreshold: L, transform: H, snapGrid: $, snapToGrid: Y } = t();
      h = (X == null ? void 0 : X.getBoundingClientRect()) || null, w = !1, E = !1, y = V.sourceEvent, L === 0 && G(V), a = bs(V.sourceEvent, { transform: H, snapGrid: $, snapToGrid: Y, containerBounds: h }), d = pn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: X, transform: L, snapGrid: H, snapToGrid: $, nodeDragThreshold: Y, nodeLookup: M } = t(), j = bs(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: $, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      P && !M.has(P)) && (w = !0), !w) {
        if (!f && X && m && (f = !0, D()), !m) {
          const Q = pn(V.sourceEvent, h), q = Q.x - d.x, W = Q.y - d.y;
          Math.sqrt(q * q + W * W) > Y && G(V);
        }
        (a.x !== j.xSnapped || a.y !== j.ySnapped) && u && m && (d = pn(V.sourceEvent, h), O(j));
      }
    }).on("end", (V) => {
      if (!(!m || w) && (f = !1, m = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: X, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: $ } = t();
        if (E && (L(u, !1), E = !1), s || H || !P && $) {
          const [Y, M] = Gf({
            nodeId: P,
            dragItems: u,
            nodeLookup: X,
            dragging: !1
          });
          s == null || s(V.sourceEvent, u, Y, M), H == null || H(V.sourceEvent, Y, M), P || $ == null || $(V.sourceEvent, M);
        }
      }
    }).filter((V) => {
      const X = V.target;
      return !V.button && (!C || !l1(X, `.${C}`, k)) && (!_ || l1(X, _, k));
    });
    g.call(B);
  }
  function S() {
    g == null || g.on(".drag", null);
  }
  return {
    update: x,
    destroy: S
  };
}
function Nq(e, t, r) {
  const o = [], s = {
    x: e.x - r,
    y: e.y - r,
    width: r * 2,
    height: r * 2
  };
  for (const a of t.values())
    Ps(s, ai(a)) > 0 && o.push(a);
  return o;
}
const Pq = 250;
function Tq(e, t, r, o) {
  var u, f;
  let s = [], a = 1 / 0;
  const l = Nq(e, r, t + Pq);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const m of h) {
      if (o.nodeId === m.nodeId && o.type === m.type && o.id === m.id)
        continue;
      const { x: g, y: w } = As(d, m, m.position, !0), E = Math.sqrt(Math.pow(g - e.x, 2) + Math.pow(w - e.y, 2));
      E > t || (E < a ? (s = [{ ...m, x: g, y: w }], a = E) : E === a && s.push({ ...m, x: g, y: w }));
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
function VR(e, t, r, o, s, a = !1) {
  var d, h, m;
  const l = o.get(e);
  if (!l)
    return null;
  const u = s === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((m = l.internals.handleBounds) == null ? void 0 : m.target) ?? []], f = (r ? u == null ? void 0 : u.find((g) => g.id === r) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...As(l, f, f.position, !0) } : f;
}
function HR(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Aq(e, t) {
  let r = null;
  return t ? r = !0 : e && !t && (r = !1), r;
}
const WR = () => !0;
function Iq(e, { connectionMode: t, connectionRadius: r, handleId: o, nodeId: s, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: m, panBy: g, cancelConnection: w, onConnectStart: E, onConnect: y, onConnectEnd: x, isValidConnection: S = WR, onReconnectEnd: C, updateConnection: _, getTransform: k, getFromHandle: N, autoPanSpeed: P, dragThreshold: A = 1, handleDomNode: O }) {
  const D = IR(e.target);
  let G = 0, B;
  const { x: V, y: X } = pn(e), L = HR(a, O), H = u == null ? void 0 : u.getBoundingClientRect();
  let $ = !1;
  if (!H || !L)
    return;
  const Y = VR(s, L, o, f, t);
  if (!Y)
    return;
  let M = pn(e, H), j = !1, Q = null, q = !1, W = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = NR(M, H, P);
    g({ x: ce, y: de }), G = requestAnimationFrame(ie);
  }
  const F = {
    ...Y,
    nodeId: s,
    type: L,
    position: Y.position
  }, Z = f.get(s);
  let K = {
    inProgress: !0,
    isValid: null,
    from: As(Z, F, ye.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: Xx[F.position],
    toNode: null,
    pointer: M
  };
  function te() {
    $ = !0, _(K), E == null || E(e, { nodeId: s, handleId: o, handleType: L });
  }
  A === 0 && te();
  function se(ce) {
    if (!$) {
      const { x: ge, y: Ne } = pn(ce), Ee = ge - V, Ze = Ne - X;
      if (!(Ee * Ee + Ze * Ze > A * A))
        return;
      te();
    }
    if (!N() || !F) {
      ae(ce);
      return;
    }
    const de = k();
    M = pn(ce, H), B = Tq(Bs(M, de, !1, [1, 1]), r, f, F), j || (ie(), j = !0);
    const pe = UR(ce, {
      handle: B,
      connectionMode: t,
      fromNodeId: s,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: S,
      doc: D,
      lib: d,
      flowId: m,
      nodeLookup: f
    });
    W = pe.handleDomNode, Q = pe.connection, q = Aq(!!B, pe.isValid);
    const be = {
      // from stays the same
      ...K,
      isValid: q,
      to: pe.toHandle && q ? Gl({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: q && pe.toHandle ? pe.toHandle.position : Xx[F.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    _(be), K = be;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if ($) {
        (B || W) && Q && q && (y == null || y(Q));
        const { inProgress: de, ...pe } = K, be = {
          ...pe,
          toPosition: K.toHandle ? K.toPosition : null
        };
        x == null || x(ce, be), a && (C == null || C(ce, be));
      }
      w(), cancelAnimationFrame(G), j = !1, q = !1, Q = null, W = null, D.removeEventListener("mousemove", se), D.removeEventListener("mouseup", ae), D.removeEventListener("touchmove", se), D.removeEventListener("touchend", ae);
    }
  }
  D.addEventListener("mousemove", se), D.addEventListener("mouseup", ae), D.addEventListener("touchmove", se), D.addEventListener("touchend", ae);
}
function UR(e, { handle: t, connectionMode: r, fromNodeId: o, fromHandleId: s, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = WR, nodeLookup: h }) {
  const m = a === "target", g = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: w, y: E } = pn(e), y = l.elementFromPoint(w, E), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : g, S = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = HR(void 0, x), _ = x.getAttribute("data-nodeid"), k = x.getAttribute("data-handleid"), N = x.classList.contains("connectable"), P = x.classList.contains("connectableend");
    if (!_ || !C)
      return S;
    const A = {
      source: m ? _ : o,
      sourceHandle: m ? k : s,
      target: m ? o : _,
      targetHandle: m ? s : k
    };
    S.connection = A;
    const D = N && P && (r === ii.Strict ? m && C === "source" || !m && C === "target" : _ !== o || k !== s);
    S.isValid = D && d(A), S.toHandle = VR(_, C, k, h, r, !0);
  }
  return S;
}
const Bv = {
  onPointerDown: Iq,
  isValid: UR
};
function Mq({ domNode: e, panZoom: t, getTransform: r, getViewScale: o }) {
  const s = Dt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: m = !0, zoomable: g = !0, inversePan: w = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = r(), N = _.sourceEvent.ctrlKey && Ts() ? 10 : 1, P = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = k[2] * Math.pow(2, P * N);
      t.scaleTo(A);
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
      const N = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], P = [N[0] - y[0], N[1] - y[1]];
      y = N;
      const A = o() * Math.max(k[2], Math.log(k[2])) * (w ? -1 : 1), O = {
        x: k[0] - P[0] * A,
        y: k[1] - P[1] * A
      }, D = [
        [0, 0],
        [f, d]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: k[2]
      }, D, u);
    }, C = xR().on("start", x).on("zoom", m ? S : null).on("zoom.wheel", g ? E : null);
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
const du = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Yf = ({ x: e, y: t, zoom: r }) => uu.translate(e, t).scale(r), Qo = (e, t) => e.target.closest(`.${t}`), GR = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Oq = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Kf = (e, t = 0, r = Oq, o = () => {
}) => {
  const s = typeof t == "number" && t > 0;
  return s || o(), s ? e.transition().duration(t).ease(r).on("end", o) : e;
}, YR = (e) => {
  const t = e.ctrlKey && Ts() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Lq({ zoomPanValues: e, noWheelClassName: t, d3Selection: r, d3Zoom: o, panOnScrollMode: s, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (Qo(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const m = r.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = fn(h), S = YR(h), C = m * Math.pow(2, S);
      o.scaleTo(r, C, x, h);
      return;
    }
    const g = h.deltaMode === 1 ? 20 : 1;
    let w = s === ro.Vertical ? 0 : h.deltaX * g, E = s === ro.Horizontal ? 0 : h.deltaY * g;
    !Ts() && h.shiftKey && s !== ro.Vertical && (w = h.deltaY * g, E = 0), o.translateBy(
      r,
      -(w / m) * a,
      -(E / m) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = du(r.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function qq({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: r }) {
  return function(o, s) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = Qo(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), r.call(this, o, s);
  };
}
function Dq({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: r }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const s = du(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), r && (r == null || r(o.sourceEvent, s));
  };
}
function jq({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: r, onTransformChange: o, onPanZoom: s }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(r && GR(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), s && !((u = a.sourceEvent) != null && u.internal) && (s == null || s(a.sourceEvent, du(a.transform)));
  };
}
function zq({ zoomPanValues: e, panOnDrag: t, panOnScroll: r, onDraggingChange: o, onPanZoomEnd: s, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && GR(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), s)) {
      const f = du(l.transform);
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
function Fq({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: r, panOnDrag: o, panOnScroll: s, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (m) => {
    var x;
    const g = e || t, w = r && m.ctrlKey, E = m.type === "wheel";
    if (m.button === 1 && m.type === "mousedown" && (Qo(m, `${d}-flow__node`) || Qo(m, `${d}-flow__edge`)))
      return !0;
    if (!o && !g && !s && !a && !r || l || h && !E || Qo(m, u) && E || Qo(m, f) && (!E || s && E && !e) || !r && m.ctrlKey && E)
      return !1;
    if (!r && m.type === "touchstart" && ((x = m.touches) == null ? void 0 : x.length) > 1)
      return m.preventDefault(), !1;
    if (!g && !s && !w && E || !o && (m.type === "mousedown" || m.type === "touchstart") || Array.isArray(o) && !o.includes(m.button) && m.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(m.button) || !m.button || m.button <= 1;
    return (!m.ctrlKey || E) && y;
  };
}
function $q({ domNode: e, minZoom: t, maxZoom: r, translateExtent: o, viewport: s, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), m = xR().scaleExtent([t, r]).translateExtent(o), g = Dt(e).call(m);
  C({
    x: s.x,
    y: s.y,
    zoom: si(s.zoom, t, r)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const w = g.on("wheel.zoom"), E = g.on("dblclick.zoom");
  m.wheelDelta(YR);
  function y(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? _s : Al).transform(Kf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: B, noPanClassName: V, onPaneContextMenu: X, userSelectionActive: L, panOnScroll: H, panOnDrag: $, panOnScrollMode: Y, panOnScrollSpeed: M, preventScrolling: j, zoomOnPinch: Q, zoomOnScroll: q, zoomOnDoubleClick: W, zoomActivationKeyPressed: ie, lib: F, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: K, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && S();
    const se = H && !ie && !L;
    m.clickDistance(te ? 1 / 0 : !hn(K) || K < 0 ? 0 : K);
    const ae = se ? Lq({
      zoomPanValues: d,
      noWheelClassName: B,
      d3Selection: g,
      d3Zoom: m,
      panOnScrollMode: Y,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : qq({
      noWheelClassName: B,
      preventScrolling: j,
      d3ZoomHandler: w
    });
    if (g.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = Dq({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      m.on("start", de);
      const pe = jq({
        zoomPanValues: d,
        panOnDrag: $,
        onPaneContextMenu: !!X,
        onPanZoom: a,
        onTransformChange: Z
      });
      m.on("zoom", pe);
      const be = zq({
        zoomPanValues: d,
        panOnDrag: $,
        panOnScroll: H,
        onPaneContextMenu: X,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      m.on("end", be);
    }
    const ce = Fq({
      zoomActivationKeyPressed: ie,
      panOnDrag: $,
      zoomOnScroll: q,
      panOnScroll: H,
      zoomOnDoubleClick: W,
      zoomOnPinch: Q,
      userSelectionActive: L,
      noPanClassName: V,
      noWheelClassName: B,
      lib: F,
      connectionInProgress: ee
    });
    m.filter(ce), W ? g.on("dblclick.zoom", E) : g.on("dblclick.zoom", null);
  }
  function S() {
    m.on("zoom", null);
  }
  async function C(B, V, X) {
    const L = Yf(B), H = m == null ? void 0 : m.constrain()(L, V, X);
    return H && await y(H), new Promise(($) => $(H));
  }
  async function _(B, V) {
    const X = Yf(B);
    return await y(X, V), new Promise((L) => L(X));
  }
  function k(B) {
    if (g) {
      const V = Yf(B), X = g.property("__zoom");
      (X.k !== B.zoom || X.x !== B.x || X.y !== B.y) && (m == null || m.transform(g, V, null, { sync: !0 }));
    }
  }
  function N() {
    const B = g ? wR(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: B.x, y: B.y, zoom: B.k };
  }
  function P(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? _s : Al).scaleTo(Kf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function A(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? _s : Al).scaleBy(Kf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function O(B) {
    m == null || m.scaleExtent(B);
  }
  function D(B) {
    m == null || m.translateExtent(B);
  }
  function G(B) {
    const V = !hn(B) || B < 0 ? 0 : B;
    m == null || m.clickDistance(V);
  }
  return {
    update: x,
    destroy: S,
    setViewport: _,
    setViewportConstrained: C,
    getViewport: N,
    scaleTo: P,
    scaleBy: A,
    setScaleExtent: O,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: G
  };
}
var ui;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ui || (ui = {}));
function Bq({ width: e, prevWidth: t, height: r, prevHeight: o, affectsX: s, affectsY: a }) {
  const l = e - t, u = r - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && s && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function u1(e) {
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
function wl(e, t, r) {
  return Math.max(0, t - e, e - r);
}
function c1(e, t) {
  return e ? !t : t;
}
function Vq(e, t, r, o, s, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: m } = t, g = h && m, { xSnapped: w, ySnapped: E } = r, { minWidth: y, maxWidth: x, minHeight: S, maxHeight: C } = o, { x: _, y: k, width: N, height: P, aspectRatio: A } = e;
  let O = Math.floor(h ? w - e.pointerX : 0), D = Math.floor(m ? E - e.pointerY : 0);
  const G = N + (f ? -O : O), B = P + (d ? -D : D), V = -a[0] * N, X = -a[1] * P;
  let L = wl(G, y, x), H = wl(B, S, C);
  if (l) {
    let M = 0, j = 0;
    f && O < 0 ? M = br(_ + O + V, l[0][0]) : !f && O > 0 && (M = Sr(_ + G + V, l[1][0])), d && D < 0 ? j = br(k + D + X, l[0][1]) : !d && D > 0 && (j = Sr(k + B + X, l[1][1])), L = Math.max(L, M), H = Math.max(H, j);
  }
  if (u) {
    let M = 0, j = 0;
    f && O > 0 ? M = Sr(_ + O, u[0][0]) : !f && O < 0 && (M = br(_ + G, u[1][0])), d && D > 0 ? j = Sr(k + D, u[0][1]) : !d && D < 0 && (j = br(k + B, u[1][1])), L = Math.max(L, M), H = Math.max(H, j);
  }
  if (s) {
    if (h) {
      const M = wl(G / A, S, C) * A;
      if (L = Math.max(L, M), l) {
        let j = 0;
        !f && !d || f && !d && g ? j = Sr(k + X + G / A, l[1][1]) * A : j = br(k + X + (f ? O : -O) / A, l[0][1]) * A, L = Math.max(L, j);
      }
      if (u) {
        let j = 0;
        !f && !d || f && !d && g ? j = br(k + G / A, u[1][1]) * A : j = Sr(k + (f ? O : -O) / A, u[0][1]) * A, L = Math.max(L, j);
      }
    }
    if (m) {
      const M = wl(B * A, y, x) / A;
      if (H = Math.max(H, M), l) {
        let j = 0;
        !f && !d || d && !f && g ? j = Sr(_ + B * A + V, l[1][0]) / A : j = br(_ + (d ? D : -D) * A + V, l[0][0]) / A, H = Math.max(H, j);
      }
      if (u) {
        let j = 0;
        !f && !d || d && !f && g ? j = br(_ + B * A, u[1][0]) / A : j = Sr(_ + (d ? D : -D) * A, u[0][0]) / A, H = Math.max(H, j);
      }
    }
  }
  D = D + (D < 0 ? H : -H), O = O + (O < 0 ? L : -L), s && (g ? G > B * A ? D = (c1(f, d) ? -O : O) / A : O = (c1(f, d) ? -D : D) * A : h ? (D = O / A, d = f) : (O = D * A, f = d));
  const $ = f ? _ + O : _, Y = d ? k + D : k;
  return {
    width: N + (f ? -O : O),
    height: P + (d ? -D : D),
    x: a[0] * O * (f ? -1 : 1) + $,
    y: a[1] * D * (d ? -1 : 1) + Y
  };
}
const KR = { width: 0, height: 0, x: 0, y: 0 }, Hq = {
  ...KR,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Wq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Uq(e, t, r) {
  const o = t.position.x + e.position.x, s = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = r[0] * a, f = r[1] * l;
  return [
    [o - u, s - f],
    [o + a - u, s + l - f]
  ];
}
function Gq({ domNode: e, nodeId: t, getStoreItems: r, onChange: o, onEnd: s }) {
  const a = Dt(e);
  let l = {
    controlDirection: u1("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function u({ controlPosition: d, boundaries: h, keepAspectRatio: m, resizeDirection: g, onResizeStart: w, onResize: E, onResizeEnd: y, shouldResize: x }) {
    let S = { ...KR }, C = { ...Hq };
    l = {
      boundaries: h,
      resizeDirection: g,
      keepAspectRatio: m,
      controlDirection: u1(d)
    };
    let _, k = null, N = [], P, A, O, D = !1;
    const G = iR().on("start", (B) => {
      const { nodeLookup: V, transform: X, snapGrid: L, snapToGrid: H, nodeOrigin: $, paneDomNode: Y } = r();
      if (_ = V.get(t), !_)
        return;
      k = (Y == null ? void 0 : Y.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: j } = bs(B.sourceEvent, {
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
        pointerY: j,
        aspectRatio: S.width / S.height
      }, P = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (P = V.get(_.parentId), A = P && _.extent === "parent" ? Wq(P) : void 0), N = [], O = void 0;
      for (const [Q, q] of V)
        if (q.parentId === t && (N.push({
          id: Q,
          position: { ...q.position },
          extent: q.extent
        }), q.extent === "parent" || q.expandParent)) {
          const W = Uq(q, _, q.origin ?? $);
          O ? O = [
            [Math.min(W[0][0], O[0][0]), Math.min(W[0][1], O[0][1])],
            [Math.max(W[1][0], O[1][0]), Math.max(W[1][1], O[1][1])]
          ] : O = W;
        }
      w == null || w(B, { ...S });
    }).on("drag", (B) => {
      const { transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H } = r(), $ = bs(B.sourceEvent, {
        transform: V,
        snapGrid: X,
        snapToGrid: L,
        containerBounds: k
      }), Y = [];
      if (!_)
        return;
      const { x: M, y: j, width: Q, height: q } = S, W = {}, ie = _.origin ?? H, { width: F, height: Z, x: ee, y: K } = Vq(C, l.controlDirection, $, l.boundaries, l.keepAspectRatio, ie, A, O), te = F !== Q, se = Z !== q, ae = ee !== M && te, ce = K !== j && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (W.x = ae ? ee : S.x, W.y = ce ? K : S.y, S.x = W.x, S.y = W.y, N.length > 0)) {
        const ge = ee - M, Ne = K - j;
        for (const Ee of N)
          Ee.position = {
            x: Ee.position.x - ge + ie[0] * (F - Q),
            y: Ee.position.y - Ne + ie[1] * (Z - q)
          }, Y.push(Ee);
      }
      if ((te || se) && (W.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? F : S.width, W.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : S.height, S.width = W.width, S.height = W.height), P && _.expandParent) {
        const ge = ie[0] * (W.width ?? 0);
        W.x && W.x < ge && (S.x = ge, C.x = C.x - (W.x - ge));
        const Ne = ie[1] * (W.height ?? 0);
        W.y && W.y < Ne && (S.y = Ne, C.y = C.y - (W.y - Ne));
      }
      const de = Bq({
        width: S.width,
        prevWidth: Q,
        height: S.height,
        prevHeight: q,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ...S, direction: de };
      (x == null ? void 0 : x(B, pe)) !== !1 && (D = !0, E == null || E(B, pe), o(W, Y));
    }).on("end", (B) => {
      D && (y == null || y(B, { ...S }), s == null || s({ ...S }), D = !1);
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
var f1;
function Yq() {
  if (f1) return Jf;
  f1 = 1;
  var e = qs();
  function t(m, g) {
    return m === g && (m !== 0 || 1 / m === 1 / g) || m !== m && g !== g;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, s = e.useEffect, a = e.useLayoutEffect, l = e.useDebugValue;
  function u(m, g) {
    var w = g(), E = o({ inst: { value: w, getSnapshot: g } }), y = E[0].inst, x = E[1];
    return a(
      function() {
        y.value = w, y.getSnapshot = g, f(y) && x({ inst: y });
      },
      [m, w, g]
    ), s(
      function() {
        return f(y) && x({ inst: y }), m(function() {
          f(y) && x({ inst: y });
        });
      },
      [m]
    ), l(w), w;
  }
  function f(m) {
    var g = m.getSnapshot;
    m = m.value;
    try {
      var w = g();
      return !r(m, w);
    } catch {
      return !0;
    }
  }
  function d(m, g) {
    return g();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : u;
  return Jf.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Jf;
}
var d1;
function Kq() {
  return d1 || (d1 = 1, Zf.exports = Yq()), Zf.exports;
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
var h1;
function Xq() {
  if (h1) return Qf;
  h1 = 1;
  var e = qs(), t = Kq();
  function r(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return Qf.useSyncExternalStoreWithSelector = function(d, h, m, g, w) {
    var E = a(null);
    if (E.current === null) {
      var y = { hasValue: !1, value: null };
      E.current = y;
    } else y = E.current;
    E = u(
      function() {
        function S(P) {
          if (!C) {
            if (C = !0, _ = P, P = g(P), w !== void 0 && y.hasValue) {
              var A = y.value;
              if (w(A, P))
                return k = A;
            }
            return k = P;
          }
          if (A = k, o(_, P)) return A;
          var O = g(P);
          return w !== void 0 && w(A, O) ? (_ = P, A) : (_ = P, k = O);
        }
        var C = !1, _, k, N = m === void 0 ? null : m;
        return [
          function() {
            return S(h());
          },
          N === null ? void 0 : function() {
            return S(N());
          }
        ];
      },
      [h, m, g, w]
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
var p1;
function Qq() {
  return p1 || (p1 = 1, Xf.exports = Xq()), Xf.exports;
}
var Zq = Qq();
const Jq = /* @__PURE__ */ ny(Zq), eD = {}, m1 = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (h, m) => {
    const g = typeof h == "function" ? h(t) : h;
    if (!Object.is(g, t)) {
      const w = t;
      t = m ?? (typeof g != "object" || g === null) ? g : Object.assign({}, t, g), r.forEach((E) => E(t, w));
    }
  }, s = () => t, f = { setState: o, getState: s, getInitialState: () => d, subscribe: (h) => (r.add(h), () => r.delete(h)), destroy: () => {
    (eD ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, d = t = e(o, s, f);
  return f;
}, tD = (e) => e ? m1(e) : m1, { useDebugValue: nD } = cn, { useSyncExternalStoreWithSelector: rD } = Jq, oD = (e) => e;
function XR(e, t = oD, r) {
  const o = rD(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return nD(o), o;
}
const g1 = (e, t) => {
  const r = tD(e), o = (s, a = t) => XR(r, s, a);
  return Object.assign(o, r), o;
}, iD = (e, t) => e ? g1(e, t) : g1;
function Ke(e, t) {
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
var Vs = Vk();
const sD = /* @__PURE__ */ ny(Vs), hu = R.createContext(null), aD = hu.Provider, QR = An.error001();
function Ie(e, t) {
  const r = R.useContext(hu);
  if (r === null)
    throw new Error(QR);
  return XR(r, e, t);
}
function Fe() {
  const e = R.useContext(hu);
  if (e === null)
    throw new Error(QR);
  return R.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const v1 = { display: "none" }, lD = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, ZR = "react-flow__node-desc", JR = "react-flow__edge-desc", uD = "react-flow__aria-live", cD = (e) => e.ariaLiveMessage, fD = (e) => e.ariaLabelConfig;
function dD({ rfId: e }) {
  const t = Ie(cD);
  return I.jsx("div", { id: `${uD}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: lD, children: t });
}
function hD({ rfId: e, disableKeyboardA11y: t }) {
  const r = Ie(fD);
  return I.jsxs(I.Fragment, { children: [I.jsx("div", { id: `${ZR}-${e}`, style: v1, children: t ? r["node.a11yDescription.default"] : r["node.a11yDescription.keyboardDisabled"] }), I.jsx("div", { id: `${JR}-${e}`, style: v1, children: r["edge.a11yDescription.default"] }), !t && I.jsx(dD, { rfId: e })] });
}
const pu = R.forwardRef(({ position: e = "top-left", children: t, className: r, style: o, ...s }, a) => {
  const l = `${e}`.split("-");
  return I.jsx("div", { className: nt(["react-flow__panel", r, ...l]), style: o, ref: a, ...s, children: t });
});
pu.displayName = "Panel";
function pD({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : I.jsx(pu, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: I.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const mD = (e) => {
  const t = [], r = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && r.push(o);
  return { selectedNodes: t, selectedEdges: r };
}, xl = (e) => e.id;
function gD(e, t) {
  return Ke(e.selectedNodes.map(xl), t.selectedNodes.map(xl)) && Ke(e.selectedEdges.map(xl), t.selectedEdges.map(xl));
}
function vD({ onSelectionChange: e }) {
  const t = Fe(), { selectedNodes: r, selectedEdges: o } = Ie(mD, gD);
  return R.useEffect(() => {
    const s = { nodes: r, edges: o };
    e == null || e(s), t.getState().onSelectionChangeHandlers.forEach((a) => a(s));
  }, [r, o, e]), null;
}
const yD = (e) => !!e.onSelectionChangeHandlers;
function wD({ onSelectionChange: e }) {
  const t = Ie(yD);
  return e || t ? I.jsx(vD, { onSelectionChange: e }) : null;
}
const eN = [0, 0], xD = { x: 0, y: 0, zoom: 1 }, _D = [
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
], y1 = [..._D, "rfId"], bD = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), w1 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Rs,
  nodeOrigin: eN,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function SD(e) {
  const { setNodes: t, setEdges: r, setMinZoom: o, setMaxZoom: s, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ie(bD, Ke), d = Fe();
  R.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = w1, u();
  }), []);
  const h = R.useRef(w1);
  return R.useEffect(
    () => {
      for (const m of y1) {
        const g = e[m], w = h.current[m];
        g !== w && (typeof e[m] > "u" || (m === "nodes" ? t(g) : m === "edges" ? r(g) : m === "minZoom" ? o(g) : m === "maxZoom" ? s(g) : m === "translateExtent" ? a(g) : m === "nodeExtent" ? l(g) : m === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: iq(g) }) : m === "fitView" ? d.setState({ fitViewQueued: g }) : m === "fitViewOptions" ? d.setState({ fitViewOptions: g }) : d.setState({ [m]: g })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    y1.map((m) => e[m])
  ), null;
}
function x1() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function ED(e) {
  var o;
  const [t, r] = R.useState(e === "system" ? null : e);
  return R.useEffect(() => {
    if (e !== "system") {
      r(e);
      return;
    }
    const s = x1(), a = () => r(s != null && s.matches ? "dark" : "light");
    return a(), s == null || s.addEventListener("change", a), () => {
      s == null || s.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = x1()) != null && o.matches ? "dark" : "light";
}
const _1 = typeof document < "u" ? document : null;
function Is(e = null, t = { target: _1, actInsideInputWithModifier: !0 }) {
  const [r, o] = R.useState(!1), s = R.useRef(!1), a = R.useRef(/* @__PURE__ */ new Set([])), [l, u] = R.useMemo(() => {
    if (e !== null) {
      const d = (Array.isArray(e) ? e : [e]).filter((m) => typeof m == "string").map((m) => m.replace("+", `
`).replace(`

`, `
+`).split(`
`)), h = d.reduce((m, g) => m.concat(...g), []);
      return [d, h];
    }
    return [[], []];
  }, [e]);
  return R.useEffect(() => {
    const f = (t == null ? void 0 : t.target) ?? _1, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (w) => {
        var x, S;
        if (s.current = w.ctrlKey || w.metaKey || w.shiftKey || w.altKey, (!s.current || s.current && !d) && MR(w))
          return !1;
        const y = S1(w.code, u);
        if (a.current.add(w[y]), b1(l, a.current, !1)) {
          const C = ((S = (x = w.composedPath) == null ? void 0 : x.call(w)) == null ? void 0 : S[0]) || w.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (s.current || !_) && w.preventDefault(), o(!0);
        }
      }, m = (w) => {
        const E = S1(w.code, u);
        b1(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(w[E]), w.key === "Meta" && a.current.clear(), s.current = !1;
      }, g = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", m), window.addEventListener("blur", g), window.addEventListener("contextmenu", g), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", m), window.removeEventListener("blur", g), window.removeEventListener("contextmenu", g);
      };
    }
  }, [e, o]), r;
}
function b1(e, t, r) {
  return e.filter((o) => r || o.length === t.size).some((o) => o.every((s) => t.has(s)));
}
function S1(e, t) {
  return t.includes(e) ? "code" : "key";
}
const CD = () => {
  const e = Fe();
  return R.useMemo(() => ({
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
      }, h = r.snapGrid ?? s, m = r.snapToGrid ?? a;
      return Bs(d, o, m, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: r, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: s, y: a } = o.getBoundingClientRect(), l = Gl(t, r);
      return {
        x: l.x + s,
        y: l.y + a
      };
    }
  }), []);
};
function tN(e, t) {
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
      kD(f, u);
    r.push(u);
  }
  return s.length && s.forEach((a) => {
    a.index !== void 0 ? r.splice(a.index, 0, { ...a.item }) : r.push({ ...a.item });
  }), r;
}
function kD(e, t) {
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
function RD(e, t) {
  return tN(e, t);
}
function ND(e, t) {
  return tN(e, t);
}
function eo(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Zo(e, t = /* @__PURE__ */ new Set(), r = !1) {
  const o = [];
  for (const [s, a] of e) {
    const l = t.has(s);
    !(a.selected === void 0 && !l) && a.selected !== l && (r && (a.selected = l), o.push(eo(a.id, l)));
  }
  return o;
}
function E1({ items: e = [], lookup: t }) {
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
function C1(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const k1 = (e) => KL(e), PD = (e) => CR(e);
function nN(e) {
  return R.forwardRef(e);
}
const TD = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function R1(e) {
  const [t, r] = R.useState(BigInt(0)), [o] = R.useState(() => AD(() => r((s) => s + BigInt(1))));
  return TD(() => {
    const s = o.get();
    s.length && (e(s), o.reset());
  }, [t]), o;
}
function AD(e) {
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
const rN = R.createContext(null);
function ID({ children: e }) {
  const t = Fe(), r = R.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: m, nodeLookup: g, fitViewQueued: w } = t.getState();
    let E = f;
    for (const x of u)
      E = typeof x == "function" ? x(E) : x;
    const y = E1({
      items: E,
      lookup: g
    });
    h && d(E), y.length > 0 ? m == null || m(y) : w && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: S, setNodes: C } = t.getState();
      x && C(S);
    });
  }, []), o = R1(r), s = R.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: m, edgeLookup: g } = t.getState();
    let w = f;
    for (const E of u)
      w = typeof E == "function" ? E(w) : E;
    h ? d(w) : m && m(E1({
      items: w,
      lookup: g
    }));
  }, []), a = R1(s), l = R.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return I.jsx(rN.Provider, { value: l, children: e });
}
function MD() {
  const e = R.useContext(rN);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const OD = (e) => !!e.panZoom;
function wy() {
  const e = CD(), t = Fe(), r = MD(), o = Ie(OD), s = R.useMemo(() => {
    const a = (m) => t.getState().nodeLookup.get(m), l = (m) => {
      r.nodeQueue.push(m);
    }, u = (m) => {
      r.edgeQueue.push(m);
    }, f = (m) => {
      var S, C;
      const { nodeLookup: g, nodeOrigin: w } = t.getState(), E = k1(m) ? m : g.get(m.id), y = E.parentId ? AR(E.position, E.measured, E.parentId, g, w) : E.position, x = {
        ...E,
        position: y,
        width: ((S = E.measured) == null ? void 0 : S.width) ?? E.width,
        height: ((C = E.measured) == null ? void 0 : C.height) ?? E.height
      };
      return ai(x);
    }, d = (m, g, w = { replace: !1 }) => {
      l((E) => E.map((y) => {
        if (y.id === m) {
          const x = typeof g == "function" ? g(y) : g;
          return w.replace && k1(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (m, g, w = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === m) {
          const x = typeof g == "function" ? g(y) : g;
          return w.replace && PD(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((m) => ({ ...m })),
      getNode: (m) => {
        var g;
        return (g = a(m)) == null ? void 0 : g.internals.userNode;
      },
      getInternalNode: a,
      getEdges: () => {
        const { edges: m = [] } = t.getState();
        return m.map((g) => ({ ...g }));
      },
      getEdge: (m) => t.getState().edgeLookup.get(m),
      setNodes: l,
      setEdges: u,
      addNodes: (m) => {
        const g = Array.isArray(m) ? m : [m];
        r.nodeQueue.push((w) => [...w, ...g]);
      },
      addEdges: (m) => {
        const g = Array.isArray(m) ? m : [m];
        r.edgeQueue.push((w) => [...w, ...g]);
      },
      toObject: () => {
        const { nodes: m = [], edges: g = [], transform: w } = t.getState(), [E, y, x] = w;
        return {
          nodes: m.map((S) => ({ ...S })),
          edges: g.map((S) => ({ ...S })),
          viewport: {
            x: E,
            y,
            zoom: x
          }
        };
      },
      deleteElements: async ({ nodes: m = [], edges: g = [] }) => {
        const { nodes: w, edges: E, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: S, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: k } = t.getState(), { nodes: N, edges: P } = await eq({
          nodesToRemove: m,
          edgesToRemove: g,
          nodes: w,
          edges: E,
          onBeforeDelete: k
        }), A = P.length > 0, O = N.length > 0;
        if (A) {
          const D = P.map(C1);
          x == null || x(P), C(D);
        }
        if (O) {
          const D = N.map(C1);
          y == null || y(N), S(D);
        }
        return (O || A) && (_ == null || _({ nodes: N, edges: P })), { deletedNodes: N, deletedEdges: P };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (m, g = !0, w) => {
        const E = Zx(m), y = E ? m : f(m), x = w !== void 0;
        return y ? (w || t.getState().nodes).filter((S) => {
          const C = t.getState().nodeLookup.get(S.id);
          if (C && !E && (S.id === m.id || !C.internals.positionAbsolute))
            return !1;
          const _ = ai(x ? S : C), k = Ps(_, y);
          return g && k > 0 || k >= _.width * _.height || k >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (m, g, w = !0) => {
        const y = Zx(m) ? m : f(m);
        if (!y)
          return !1;
        const x = Ps(y, g);
        return w && x > 0 || x >= g.width * g.height || x >= y.width * y.height;
      },
      updateNode: d,
      updateNodeData: (m, g, w = { replace: !1 }) => {
        d(m, (E) => {
          const y = typeof g == "function" ? g(E) : g;
          return w.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, w);
      },
      updateEdge: h,
      updateEdgeData: (m, g, w = { replace: !1 }) => {
        h(m, (E) => {
          const y = typeof g == "function" ? g(E) : g;
          return w.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, w);
      },
      getNodesBounds: (m) => {
        const { nodeLookup: g, nodeOrigin: w } = t.getState();
        return XL(m, { nodeLookup: g, nodeOrigin: w });
      },
      getHandleConnections: ({ type: m, id: g, nodeId: w }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${w}-${m}${g ? `-${g}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      getNodeConnections: ({ type: m, handleId: g, nodeId: w }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${w}${m ? g ? `-${m}-${g}` : `-${m}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      fitView: async (m) => {
        const g = t.getState().fitViewResolver ?? oq();
        return t.setState({ fitViewQueued: !0, fitViewOptions: m, fitViewResolver: g }), r.nodeQueue.push((w) => [...w]), g.promise;
      }
    };
  }, []);
  return R.useMemo(() => ({
    ...s,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const N1 = (e) => e.selected, LD = typeof window < "u" ? window : void 0;
function qD({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const r = Fe(), { deleteElements: o } = wy(), s = Is(e, { actInsideInputWithModifier: !1 }), a = Is(t, { target: LD });
  R.useEffect(() => {
    if (s) {
      const { edges: l, nodes: u } = r.getState();
      o({ nodes: u.filter(N1), edges: l.filter(N1) }), r.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), R.useEffect(() => {
    r.setState({ multiSelectionActive: a });
  }, [a]);
}
function DD(e) {
  const t = Fe();
  R.useEffect(() => {
    const r = () => {
      var s, a, l, u;
      if (!e.current || !(((a = (s = e.current).checkVisibility) == null ? void 0 : a.call(s)) ?? !0))
        return !1;
      const o = py(e.current);
      (o.height === 0 || o.width === 0) && ((u = (l = t.getState()).onError) == null || u.call(l, "004", An.error004())), t.setState({ width: o.width || 500, height: o.height || 500 });
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
const mu = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, jD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function zD({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: r = !0, panOnScroll: o = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: a = ro.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: m, zoomActivationKeyCode: g, preventScrolling: w = !0, children: E, noWheelClassName: y, noPanClassName: x, onViewportChange: S, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: k }) {
  const N = Fe(), P = R.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: D } = Ie(jD, Ke), G = Is(g), B = R.useRef();
  DD(P);
  const V = R.useCallback((X) => {
    S == null || S({ x: X[0], y: X[1], zoom: X[2] }), C || N.setState({ transform: X });
  }, [S, C]);
  return R.useEffect(() => {
    if (P.current) {
      B.current = $q({
        domNode: P.current,
        minZoom: h,
        maxZoom: m,
        translateExtent: d,
        viewport: f,
        onDraggingChange: ($) => N.setState({ paneDragging: $ }),
        onPanZoomStart: ($, Y) => {
          const { onViewportChangeStart: M, onMoveStart: j } = N.getState();
          j == null || j($, Y), M == null || M(Y);
        },
        onPanZoom: ($, Y) => {
          const { onViewportChange: M, onMove: j } = N.getState();
          j == null || j($, Y), M == null || M(Y);
        },
        onPanZoomEnd: ($, Y) => {
          const { onViewportChangeEnd: M, onMoveEnd: j } = N.getState();
          j == null || j($, Y), M == null || M(Y);
        }
      });
      const { x: X, y: L, zoom: H } = B.current.getViewport();
      return N.setState({
        panZoom: B.current,
        transform: [X, L, H],
        domNode: P.current.closest(".react-flow")
      }), () => {
        var $;
        ($ = B.current) == null || $.destroy();
      };
    }
  }, []), R.useEffect(() => {
    var X;
    (X = B.current) == null || X.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: r,
      panOnScroll: o,
      panOnScrollSpeed: s,
      panOnScrollMode: a,
      zoomOnDoubleClick: l,
      panOnDrag: u,
      zoomActivationKeyPressed: G,
      preventScrolling: w,
      noPanClassName: x,
      userSelectionActive: A,
      noWheelClassName: y,
      lib: O,
      onTransformChange: V,
      connectionInProgress: D,
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
    G,
    w,
    x,
    A,
    y,
    O,
    V,
    D,
    k,
    _
  ]), I.jsx("div", { className: "react-flow__renderer", ref: P, style: mu, children: E });
}
const FD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function $D() {
  const { userSelectionActive: e, userSelectionRect: t } = Ie(FD, Ke);
  return e && t ? I.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const ed = (e, t) => (r) => {
  r.target === t.current && (e == null || e(r));
}, BD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function VD({ isSelecting: e, selectionKeyPressed: t, selectionMode: r = Ns.Full, panOnDrag: o, paneClickDistance: s, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: m, onPaneMouseMove: g, onPaneMouseLeave: w, children: E }) {
  const y = Fe(), { userSelectionActive: x, elementsSelectable: S, dragging: C, connectionInProgress: _ } = Ie(BD, Ke), k = S && (e || x), N = R.useRef(null), P = R.useRef(), A = R.useRef(/* @__PURE__ */ new Set()), O = R.useRef(/* @__PURE__ */ new Set()), D = R.useRef(!1), G = (M) => {
    if (D.current || _) {
      D.current = !1;
      return;
    }
    f == null || f(M), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, B = (M) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      M.preventDefault();
      return;
    }
    d == null || d(M);
  }, V = h ? (M) => h(M) : void 0, X = (M) => {
    D.current && (M.stopPropagation(), D.current = !1);
  }, L = (M) => {
    var Z, ee;
    const { domNode: j } = y.getState();
    if (P.current = j == null ? void 0 : j.getBoundingClientRect(), !P.current)
      return;
    const Q = M.target === N.current;
    if (!Q && !!M.target.closest(".nokey") || !e || !(a && Q || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), D.current = !1;
    const { x: ie, y: F } = pn(M.nativeEvent, P.current);
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: ie,
        startY: F,
        x: ie,
        y: F
      }
    }), Q || (M.stopPropagation(), M.preventDefault());
  }, H = (M) => {
    const { userSelectionRect: j, transform: Q, nodeLookup: q, edgeLookup: W, connectionLookup: ie, triggerNodeChanges: F, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: K } = y.getState();
    if (!P.current || !j)
      return;
    const { x: te, y: se } = pn(M.nativeEvent, P.current), { startX: ae, startY: ce } = j;
    if (!D.current) {
      const Ne = t ? 0 : s;
      if (Math.hypot(te - ae, se - ce) <= Ne)
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
    }, pe = A.current, be = O.current;
    A.current = new Set(dy(q, de, Q, r === Ns.Partial, !0).map((Ne) => Ne.id)), O.current = /* @__PURE__ */ new Set();
    const ge = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Ne of A.current) {
      const Ee = ie.get(Ne);
      if (Ee)
        for (const { edgeId: Ze } of Ee.values()) {
          const Ve = W.get(Ze);
          Ve && (Ve.selectable ?? ge) && O.current.add(Ze);
        }
    }
    if (!Jx(pe, A.current)) {
      const Ne = Zo(q, A.current, !0);
      F(Ne);
    }
    if (!Jx(be, O.current)) {
      const Ne = Zo(W, O.current);
      Z(Ne);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, $ = (M) => {
    var j, Q;
    M.button === 0 && ((Q = (j = M.target) == null ? void 0 : j.releasePointerCapture) == null || Q.call(j, M.pointerId), !x && M.target === N.current && y.getState().userSelectionRect && (G == null || G(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), D.current && (u == null || u(M), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, Y = o === !0 || Array.isArray(o) && o.includes(0);
  return I.jsxs("div", { className: nt(["react-flow__pane", { draggable: Y, dragging: C, selection: e }]), onClick: k ? void 0 : ed(G, N), onContextMenu: ed(B, N), onWheel: ed(V, N), onPointerEnter: k ? void 0 : m, onPointerMove: k ? H : g, onPointerUp: k ? $ : void 0, onPointerDownCapture: k ? L : void 0, onClickCapture: k ? X : void 0, onPointerLeave: w, ref: N, style: mu, children: [E, I.jsx($D, {})] });
}
function Vv({ id: e, store: t, unselect: r = !1, nodeRef: o }) {
  const { addSelectedNodes: s, unselectNodesAndEdges: a, multiSelectionActive: l, nodeLookup: u, onError: f } = t.getState(), d = u.get(e);
  if (!d) {
    f == null || f("012", An.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), d.selected ? (r || d.selected && l) && (a({ nodes: [d], edges: [] }), requestAnimationFrame(() => {
    var h;
    return (h = o == null ? void 0 : o.current) == null ? void 0 : h.blur();
  })) : s([e]);
}
function oN({ nodeRef: e, disabled: t = !1, noDragClassName: r, handleSelector: o, nodeId: s, isSelectable: a, nodeClickDistance: l }) {
  const u = Fe(), [f, d] = R.useState(!1), h = R.useRef();
  return R.useEffect(() => {
    h.current = Rq({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (m) => {
        Vv({
          id: m,
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
  }, []), R.useEffect(() => {
    var m, g;
    if (t)
      (m = h.current) == null || m.destroy();
    else if (e.current)
      return (g = h.current) == null || g.update({
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
const HD = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function iN() {
  const e = Fe();
  return R.useCallback((r) => {
    const { nodeExtent: o, snapToGrid: s, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), m = /* @__PURE__ */ new Map(), g = HD(l), w = s ? a[0] : 5, E = s ? a[1] : 5, y = r.direction.x * w * r.factor, x = r.direction.y * E * r.factor;
    for (const [, S] of d) {
      if (!g(S))
        continue;
      let C = {
        x: S.internals.positionAbsolute.x + y,
        y: S.internals.positionAbsolute.y + x
      };
      s && (C = $s(C, a));
      const { position: _, positionAbsolute: k } = kR({
        nodeId: S.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      S.position = _, S.internals.positionAbsolute = k, m.set(S.id, S);
    }
    f(m);
  }, []);
}
const xy = R.createContext(null), WD = xy.Provider;
xy.Consumer;
const sN = () => R.useContext(xy), UD = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), GD = (e, t, r) => (o) => {
  const { connectionClickStartHandle: s, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === r;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === r,
    connectingTo: h,
    clickConnecting: (s == null ? void 0 : s.nodeId) === e && (s == null ? void 0 : s.id) === t && (s == null ? void 0 : s.type) === r,
    isPossibleEndHandle: a === ii.Strict ? (u == null ? void 0 : u.type) !== r : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!s,
    valid: h && d
  };
};
function YD({ type: e = "source", position: t = ye.Top, isValidConnection: r, isConnectable: o = !0, isConnectableStart: s = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: m, ...g }, w) {
  var H, $;
  const E = l || null, y = e === "target", x = Fe(), S = sN(), { connectOnClick: C, noPanClassName: _, rfId: k } = Ie(UD, Ke), { connectingFrom: N, connectingTo: P, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: D, clickConnectionInProcess: G, valid: B } = Ie(GD(S, E, e), Ke);
  S || ($ = (H = x.getState()).onError) == null || $.call(H, "010", An.error010());
  const V = (Y) => {
    const { defaultEdgeOptions: M, onConnect: j, hasDefaultEdges: Q } = x.getState(), q = {
      ...M,
      ...Y
    };
    if (Q) {
      const { edges: W, setEdges: ie } = x.getState();
      ie(fq(q, W));
    }
    j == null || j(q), u == null || u(q);
  }, X = (Y) => {
    if (!S)
      return;
    const M = OR(Y.nativeEvent);
    if (s && (M && Y.button === 0 || !M)) {
      const j = x.getState();
      Bv.onPointerDown(Y.nativeEvent, {
        handleDomNode: Y.currentTarget,
        autoPanOnConnect: j.autoPanOnConnect,
        connectionMode: j.connectionMode,
        connectionRadius: j.connectionRadius,
        domNode: j.domNode,
        nodeLookup: j.nodeLookup,
        lib: j.lib,
        isTarget: y,
        handleId: E,
        nodeId: S,
        flowId: j.rfId,
        panBy: j.panBy,
        cancelConnection: j.cancelConnection,
        onConnectStart: j.onConnectStart,
        onConnectEnd: j.onConnectEnd,
        updateConnection: j.updateConnection,
        onConnect: V,
        isValidConnection: r || j.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: j.autoPanSpeed,
        dragThreshold: j.connectionDragThreshold
      });
    }
    M ? h == null || h(Y) : m == null || m(Y);
  }, L = (Y) => {
    const { onClickConnectStart: M, onClickConnectEnd: j, connectionClickStartHandle: Q, connectionMode: q, isValidConnection: W, lib: ie, rfId: F, nodeLookup: Z, connection: ee } = x.getState();
    if (!S || !Q && !s)
      return;
    if (!Q) {
      M == null || M(Y.nativeEvent, { nodeId: S, handleId: E, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: S, type: e, id: E } });
      return;
    }
    const K = IR(Y.target), te = r || W, { connection: se, isValid: ae } = Bv.isValid(Y.nativeEvent, {
      handle: {
        nodeId: S,
        id: E,
        type: e
      },
      connectionMode: q,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id || null,
      fromType: Q.type,
      isValidConnection: te,
      flowId: F,
      doc: K,
      lib: ie,
      nodeLookup: Z
    });
    ae && se && V(se);
    const ce = structuredClone(ee);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, j == null || j(Y, ce), x.setState({ connectionClickStartHandle: null });
  };
  return I.jsx("div", { "data-handleid": E, "data-nodeid": S, "data-handlepos": t, "data-id": `${k}-${S}-${E}-${e}`, className: nt([
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
      clickconnecting: A,
      connectingfrom: N,
      connectingto: P,
      valid: B,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!D || O) && (D || G ? a : s)
    }
  ]), onMouseDown: X, onTouchStart: X, onClick: C ? L : void 0, ref: w, ...g, children: f });
}
const Ms = R.memo(nN(YD));
function KD({ data: e, isConnectable: t, sourcePosition: r = ye.Bottom }) {
  return I.jsxs(I.Fragment, { children: [e == null ? void 0 : e.label, I.jsx(Ms, { type: "source", position: r, isConnectable: t })] });
}
function XD({ data: e, isConnectable: t, targetPosition: r = ye.Top, sourcePosition: o = ye.Bottom }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(Ms, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label, I.jsx(Ms, { type: "source", position: o, isConnectable: t })] });
}
function QD() {
  return null;
}
function ZD({ data: e, isConnectable: t, targetPosition: r = ye.Top }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(Ms, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Yl = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, P1 = {
  input: KD,
  default: XD,
  output: ZD,
  group: QD
};
function JD(e) {
  var t, r, o, s;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((r = e.style) == null ? void 0 : r.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((s = e.style) == null ? void 0 : s.height)
  };
}
const ej = (e) => {
  const { width: t, height: r, x: o, y: s } = Fs(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: hn(t) ? t : null,
    height: hn(r) ? r : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${s}px)`
  };
};
function tj({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: r }) {
  const o = Fe(), { width: s, height: a, transformString: l, userSelectionActive: u } = Ie(ej, Ke), f = iN(), d = R.useRef(null);
  if (R.useEffect(() => {
    var g;
    r || (g = d.current) == null || g.focus({
      preventScroll: !0
    });
  }, [r]), oN({
    nodeRef: d
  }), u || !s || !a)
    return null;
  const h = e ? (g) => {
    const w = o.getState().nodes.filter((E) => E.selected);
    e(g, w);
  } : void 0, m = (g) => {
    Object.prototype.hasOwnProperty.call(Yl, g.key) && (g.preventDefault(), f({
      direction: Yl[g.key],
      factor: g.shiftKey ? 4 : 1
    }));
  };
  return I.jsx("div", { className: nt(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: l
  }, children: I.jsx("div", { ref: d, className: "react-flow__nodesselection-rect", onContextMenu: h, tabIndex: r ? void 0 : -1, onKeyDown: r ? void 0 : m, style: {
    width: s,
    height: a
  } }) });
}
const T1 = typeof window < "u" ? window : void 0, nj = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function aN({ children: e, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: m, onSelectionStart: g, onSelectionEnd: w, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: k, panOnScrollSpeed: N, panOnScrollMode: P, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, preventScrolling: X, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: $, disableKeyboardA11y: Y, onViewportChange: M, isControlledViewport: j }) {
  const { nodesSelectionActive: Q, userSelectionActive: q } = Ie(nj), W = Is(d, { target: T1 }), ie = Is(y, { target: T1 }), F = ie || O, Z = ie || k, ee = h && F !== !0, K = W || q || ee;
  return qD({ deleteKeyCode: f, multiSelectionKeyCode: E }), I.jsx(zD, { onPaneContextMenu: a, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: N, panOnScrollMode: P, zoomOnDoubleClick: A, panOnDrag: !W && F, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: X, noWheelClassName: H, noPanClassName: $, onViewportChange: M, isControlledViewport: j, paneClickDistance: u, selectionOnDrag: ee, children: I.jsxs(VD, { onSelectionStart: g, onSelectionEnd: w, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: F, isSelecting: !!K, selectionMode: m, selectionKeyPressed: W, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && I.jsx(tj, { onSelectionContextMenu: L, noPanClassName: $, disableKeyboardA11y: Y })] }) });
}
aN.displayName = "FlowRenderer";
const rj = R.memo(aN), oj = (e) => (t) => e ? dy(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((r) => r.id) : Array.from(t.nodeLookup.keys());
function ij(e) {
  return Ie(R.useCallback(oj(e), [e]), Ke);
}
const sj = (e) => e.updateNodeInternals;
function aj() {
  const e = Ie(sj), [t] = R.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((r) => {
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
  return R.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function lj({ node: e, nodeType: t, hasDimensions: r, resizeObserver: o }) {
  const s = Fe(), a = R.useRef(null), l = R.useRef(null), u = R.useRef(e.sourcePosition), f = R.useRef(e.targetPosition), d = R.useRef(t), h = r && !!e.internals.handleBounds;
  return R.useEffect(() => {
    a.current && !e.hidden && (!h || l.current !== a.current) && (l.current && (o == null || o.unobserve(l.current)), o == null || o.observe(a.current), l.current = a.current);
  }, [h, e.hidden]), R.useEffect(() => () => {
    l.current && (o == null || o.unobserve(l.current), l.current = null);
  }, []), R.useEffect(() => {
    if (a.current) {
      const m = d.current !== t, g = u.current !== e.sourcePosition, w = f.current !== e.targetPosition;
      (m || g || w) && (d.current = t, u.current = e.sourcePosition, f.current = e.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: a.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), a;
}
function uj({ id: e, onClick: t, onMouseEnter: r, onMouseMove: o, onMouseLeave: s, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: m, noDragClassName: g, noPanClassName: w, disableKeyboardA11y: E, rfId: y, nodeTypes: x, nodeClickDistance: S, onError: C }) {
  const { node: _, internals: k, isParent: N } = Ie((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Ke);
  let P = _.type || "default", A = (x == null ? void 0 : x[P]) || P1[P];
  A === void 0 && (C == null || C("003", An.error003(P)), P = "default", A = (x == null ? void 0 : x.default) || P1.default);
  const O = !!(_.draggable || u && typeof _.draggable > "u"), D = !!(_.selectable || f && typeof _.selectable > "u"), G = !!(_.connectable || d && typeof _.connectable > "u"), B = !!(_.focusable || h && typeof _.focusable > "u"), V = Fe(), X = TR(_), L = lj({ node: _, nodeType: P, hasDimensions: X, resizeObserver: m }), H = oN({
    nodeRef: L,
    disabled: _.hidden || !O,
    noDragClassName: g,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: D,
    nodeClickDistance: S
  }), $ = iN();
  if (_.hidden)
    return null;
  const Y = Qn(_), M = JD(_), j = D || O || t || r || o || s, Q = r ? (te) => r(te, { ...k.userNode }) : void 0, q = o ? (te) => o(te, { ...k.userNode }) : void 0, W = s ? (te) => s(te, { ...k.userNode }) : void 0, ie = a ? (te) => a(te, { ...k.userNode }) : void 0, F = l ? (te) => l(te, { ...k.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    D && (!se || !O || ae > 0) && Vv({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...k.userNode });
  }, ee = (te) => {
    if (!(MR(te.nativeEvent) || E)) {
      if (_R.includes(te.key) && D) {
        const se = te.key === "Escape";
        Vv({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && _.selected && Object.prototype.hasOwnProperty.call(Yl, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~k.positionAbsolute.x,
            y: ~~k.positionAbsolute.y
          })
        }), $({
          direction: Yl[te.key],
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
  return I.jsx("div", { className: nt([
    "react-flow__node",
    `react-flow__node-${P}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [w]: O
    },
    _.className,
    {
      selected: _.selected,
      selectable: D,
      parent: N,
      draggable: O,
      dragging: H
    }
  ]), ref: L, style: {
    zIndex: k.z,
    transform: `translate(${k.positionAbsolute.x}px,${k.positionAbsolute.y}px)`,
    pointerEvents: j ? "all" : "none",
    visibility: X ? "visible" : "hidden",
    ..._.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: q, onMouseLeave: W, onContextMenu: ie, onClick: Z, onDoubleClick: F, onKeyDown: B ? ee : void 0, tabIndex: B ? 0 : void 0, onFocus: B ? K : void 0, role: _.ariaRole ?? (B ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${ZR}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: I.jsx(WD, { value: e, children: I.jsx(A, { id: e, data: _.data, type: P, positionAbsoluteX: k.positionAbsolute.x, positionAbsoluteY: k.positionAbsolute.y, selected: _.selected ?? !1, selectable: D, draggable: O, deletable: _.deletable ?? !0, isConnectable: G, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: H, dragHandle: _.dragHandle, zIndex: k.z, parentId: _.parentId, ...Y }) }) });
}
var cj = R.memo(uj);
const fj = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function lN(e) {
  const { nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, onError: a } = Ie(fj, Ke), l = ij(e.onlyRenderVisibleElements), u = aj();
  return I.jsx("div", { className: "react-flow__nodes", style: mu, children: l.map((f) => (
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
    I.jsx(cj, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
lN.displayName = "NodeRenderer";
const dj = R.memo(lN);
function hj(e) {
  return Ie(R.useCallback((r) => {
    if (!e)
      return r.edges.map((s) => s.id);
    const o = [];
    if (r.width && r.height)
      for (const s of r.edges) {
        const a = r.nodeLookup.get(s.source), l = r.nodeLookup.get(s.target);
        a && l && lq({
          sourceNode: a,
          targetNode: l,
          width: r.width,
          height: r.height,
          transform: r.transform
        }) && o.push(s.id);
      }
    return o;
  }, [e]), Ke);
}
const pj = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return I.jsx("polyline", { className: "arrow", style: r, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, mj = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return I.jsx("polyline", { className: "arrowclosed", style: r, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, A1 = {
  [Wl.Arrow]: pj,
  [Wl.ArrowClosed]: mj
};
function gj(e) {
  const t = Fe();
  return R.useMemo(() => {
    var s, a;
    return Object.prototype.hasOwnProperty.call(A1, e) ? A1[e] : ((a = (s = t.getState()).onError) == null || a.call(s, "009", An.error009(e)), null);
  }, [e]);
}
const vj = ({ id: e, type: t, color: r, width: o = 12.5, height: s = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = gj(t);
  return f ? I.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: I.jsx(f, { color: r, strokeWidth: l }) }) : null;
}, uN = ({ defaultColor: e, rfId: t }) => {
  const r = Ie((a) => a.edges), o = Ie((a) => a.defaultEdgeOptions), s = R.useMemo(() => gq(r, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [r, o, t, e]);
  return s.length ? I.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: I.jsx("defs", { children: s.map((a) => I.jsx(vj, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
uN.displayName = "MarkerDefinitions";
var yj = R.memo(uN);
function cN({ x: e, y: t, label: r, labelStyle: o, labelShowBg: s = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
  const [m, g] = R.useState({ x: 1, y: 0, width: 0, height: 0 }), w = nt(["react-flow__edge-textwrapper", d]), E = R.useRef(null);
  return R.useEffect(() => {
    if (E.current) {
      const y = E.current.getBBox();
      g({
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height
      });
    }
  }, [r]), r ? I.jsxs("g", { transform: `translate(${e - m.width / 2} ${t - m.height / 2})`, className: w, visibility: m.width ? "visible" : "hidden", ...h, children: [s && I.jsx("rect", { width: m.width + 2 * l[0], x: -l[0], y: -l[1], height: m.height + 2 * l[1], className: "react-flow__edge-textbg", style: a, rx: u, ry: u }), I.jsx("text", { className: "react-flow__edge-text", y: m.height / 2, dy: "0.3em", ref: E, style: o, children: r }), f] }) : null;
}
cN.displayName = "EdgeText";
const wj = R.memo(cN);
function gu({ path: e, labelX: t, labelY: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return I.jsxs(I.Fragment, { children: [I.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? I.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && hn(t) && hn(r) ? I.jsx(wj, { x: t, y: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function I1({ pos: e, x1: t, y1: r, x2: o, y2: s }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), r] : [t, 0.5 * (r + s)];
}
function fN({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top }) {
  const [l, u] = I1({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s
  }), [f, d] = I1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t
  }), [h, m, g, w] = LR({
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
    m,
    g,
    w
  ];
}
function dN(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S }) => {
    const [C, _, k] = fN({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u
    }), N = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: N, path: C, labelX: _, labelY: k, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S });
  });
}
const xj = dN({ isInternal: !1 }), hN = dN({ isInternal: !0 });
xj.displayName = "SimpleBezierEdge";
hN.displayName = "SimpleBezierEdgeInternal";
function pN(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, sourcePosition: w = ye.Bottom, targetPosition: E = ye.Top, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, N] = zv({
      sourceX: r,
      sourceY: o,
      sourcePosition: w,
      targetX: s,
      targetY: a,
      targetPosition: E,
      borderRadius: S == null ? void 0 : S.borderRadius,
      offset: S == null ? void 0 : S.offset,
      stepPosition: S == null ? void 0 : S.stepPosition
    }), P = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: P, path: _, labelX: k, labelY: N, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const mN = pN({ isInternal: !1 }), gN = pN({ isInternal: !0 });
mN.displayName = "SmoothStepEdge";
gN.displayName = "SmoothStepEdgeInternal";
function vN(e) {
  return R.memo(({ id: t, ...r }) => {
    var s;
    const o = e.isInternal ? void 0 : t;
    return I.jsx(mN, { ...r, id: o, pathOptions: R.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = r.pathOptions) == null ? void 0 : a.offset };
    }, [(s = r.pathOptions) == null ? void 0 : s.offset]) });
  });
}
const _j = vN({ isInternal: !1 }), yN = vN({ isInternal: !0 });
_j.displayName = "StepEdge";
yN.displayName = "StepEdgeInternal";
function wN(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: w, markerStart: E, interactionWidth: y }) => {
    const [x, S, C] = jR({ sourceX: r, sourceY: o, targetX: s, targetY: a }), _ = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: _, path: x, labelX: S, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: w, markerStart: E, interactionWidth: y });
  });
}
const bj = wN({ isInternal: !1 }), xN = wN({ isInternal: !0 });
bj.displayName = "StraightEdge";
xN.displayName = "StraightEdgeInternal";
function _N(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, N] = qR({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u,
      curvature: S == null ? void 0 : S.curvature
    }), P = e.isInternal ? void 0 : t;
    return I.jsx(gu, { id: P, path: _, labelX: k, labelY: N, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const Sj = _N({ isInternal: !1 }), bN = _N({ isInternal: !0 });
Sj.displayName = "BezierEdge";
bN.displayName = "BezierEdgeInternal";
const M1 = {
  default: bN,
  straight: xN,
  step: yN,
  smoothstep: gN,
  simplebezier: hN
}, O1 = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, Ej = (e, t, r) => r === ye.Left ? e - t : r === ye.Right ? e + t : e, Cj = (e, t, r) => r === ye.Top ? e - t : r === ye.Bottom ? e + t : e, L1 = "react-flow__edgeupdater";
function q1({ position: e, centerX: t, centerY: r, radius: o = 10, onMouseDown: s, onMouseEnter: a, onMouseOut: l, type: u }) {
  return I.jsx("circle", { onMouseDown: s, onMouseEnter: a, onMouseOut: l, className: nt([L1, `${L1}-${u}`]), cx: Ej(t, o, e), cy: Cj(r, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function kj({ isReconnectable: e, reconnectRadius: t, edge: r, sourceX: o, sourceY: s, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: m, setReconnecting: g, setUpdateHover: w }) {
  const E = Fe(), y = (k, N) => {
    if (k.button !== 0)
      return;
    const { autoPanOnConnect: P, domNode: A, isValidConnection: O, connectionMode: D, connectionRadius: G, lib: B, onConnectStart: V, onConnectEnd: X, cancelConnection: L, nodeLookup: H, rfId: $, panBy: Y, updateConnection: M } = E.getState(), j = N.type === "target", Q = (ie, F) => {
      g(!1), m == null || m(ie, r, N.type, F);
    }, q = (ie) => d == null ? void 0 : d(r, ie), W = (ie, F) => {
      g(!0), h == null || h(k, r, N.type), V == null || V(ie, F);
    };
    Bv.onPointerDown(k.nativeEvent, {
      autoPanOnConnect: P,
      connectionMode: D,
      connectionRadius: G,
      domNode: A,
      handleId: N.id,
      nodeId: N.nodeId,
      nodeLookup: H,
      isTarget: j,
      edgeUpdaterType: N.type,
      lib: B,
      flowId: $,
      cancelConnection: L,
      panBy: Y,
      isValidConnection: O,
      onConnect: q,
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
  return I.jsxs(I.Fragment, { children: [(e === !0 || e === "source") && I.jsx(q1, { position: u, centerX: o, centerY: s, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && I.jsx(q1, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: S, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function Rj({ id: e, edgesFocusable: t, edgesReconnectable: r, elementsSelectable: o, onClick: s, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: m, onReconnectStart: g, onReconnectEnd: w, rfId: E, edgeTypes: y, noPanClassName: x, onError: S, disableKeyboardA11y: C }) {
  let _ = Ie((de) => de.edgeLookup.get(e));
  const k = Ie((de) => de.defaultEdgeOptions);
  _ = k ? { ...k, ..._ } : _;
  let N = _.type || "default", P = (y == null ? void 0 : y[N]) || M1[N];
  P === void 0 && (S == null || S("011", An.error011(N)), N = "default", P = (y == null ? void 0 : y.default) || M1.default);
  const A = !!(_.focusable || t && typeof _.focusable > "u"), O = typeof m < "u" && (_.reconnectable || r && typeof _.reconnectable > "u"), D = !!(_.selectable || o && typeof _.selectable > "u"), G = R.useRef(null), [B, V] = R.useState(!1), [X, L] = R.useState(!1), H = Fe(), { zIndex: $, sourceX: Y, sourceY: M, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W } = Ie(R.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), be = de.nodeLookup.get(_.target);
    if (!pe || !be)
      return {
        zIndex: _.zIndex,
        ...O1
      };
    const ge = mq({
      id: e,
      sourceNode: pe,
      targetNode: be,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: S
    });
    return {
      zIndex: aq({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: be,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...ge || O1
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Ke), ie = R.useMemo(() => _.markerStart ? `url('#${Fv(_.markerStart, E)}')` : void 0, [_.markerStart, E]), F = R.useMemo(() => _.markerEnd ? `url('#${Fv(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || Y === null || M === null || j === null || Q === null)
    return null;
  const Z = (de) => {
    var Ne;
    const { addSelectedEdges: pe, unselectNodesAndEdges: be, multiSelectionActive: ge } = H.getState();
    D && (H.setState({ nodesSelectionActive: !1 }), _.selected && ge ? (be({ nodes: [], edges: [_] }), (Ne = G.current) == null || Ne.blur()) : pe([e])), s && s(de, _);
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
    if (!C && _R.includes(de.key) && D) {
      const { unselectNodesAndEdges: be, addSelectedEdges: ge } = H.getState();
      de.key === "Escape" ? ((pe = G.current) == null || pe.blur(), be({ edges: [_] })) : ge([e]);
    }
  };
  return I.jsx("svg", { style: { zIndex: $ }, children: I.jsxs("g", { className: nt([
    "react-flow__edge",
    `react-flow__edge-${N}`,
    _.className,
    x,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !D && !s,
      updating: B,
      selectable: D
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: K, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: _.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": A ? `${JR}-${E}` : void 0, ref: G, ..._.domAttributes, children: [!X && I.jsx(P, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: D, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: Y, sourceY: M, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: F, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), O && I.jsx(kj, { edge: _, isReconnectable: O, reconnectRadius: h, onReconnect: m, onReconnectStart: g, onReconnectEnd: w, sourceX: Y, sourceY: M, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W, setUpdateHover: V, setReconnecting: L })] }) });
}
var Nj = R.memo(Rj);
const Pj = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function SN({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: r, edgeTypes: o, noPanClassName: s, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: m, onEdgeDoubleClick: g, onReconnectStart: w, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, onError: _ } = Ie(Pj, Ke), k = hj(t);
  return I.jsxs("div", { className: "react-flow__edges", children: [I.jsx(yj, { defaultColor: e, rfId: r }), k.map((N) => I.jsx(Nj, { id: N, edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, noPanClassName: s, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: m, onDoubleClick: g, onReconnectStart: w, onReconnectEnd: E, rfId: r, onError: _, edgeTypes: o, disableKeyboardA11y: y }, N))] });
}
SN.displayName = "EdgeRenderer";
const Tj = R.memo(SN), Aj = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Ij({ children: e }) {
  const t = Ie(Aj);
  return I.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function Mj(e) {
  const t = wy(), r = R.useRef(!1);
  R.useEffect(() => {
    !r.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), r.current = !0);
  }, [e, t.viewportInitialized]);
}
const Oj = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function Lj(e) {
  const t = Ie(Oj), r = Fe();
  return R.useEffect(() => {
    e && (t == null || t(e), r.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function qj(e) {
  return e.connection.inProgress ? { ...e.connection, to: Bs(e.connection.to, e.transform) } : { ...e.connection };
}
function Dj(e) {
  return qj;
}
function jj(e) {
  const t = Dj();
  return Ie(t, Ke);
}
const zj = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function Fj({ containerStyle: e, style: t, type: r, component: o }) {
  const { nodesConnectable: s, width: a, height: l, isValid: u, inProgress: f } = Ie(zj, Ke);
  return !(a && s && f) ? null : I.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: I.jsx("g", { className: nt(["react-flow__connection", ER(u)]), children: I.jsx(EN, { style: t, type: r, CustomComponent: o, isValid: u }) }) });
}
const EN = ({ style: e, type: t = kr.Bezier, CustomComponent: r, isValid: o }) => {
  const { inProgress: s, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: m, toPosition: g, pointer: w } = jj();
  if (!s)
    return;
  if (r)
    return I.jsx(r, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: g, connectionStatus: ER(o), toNode: h, toHandle: m, pointer: w });
  let E = "";
  const y = {
    sourceX: a.x,
    sourceY: a.y,
    sourcePosition: f,
    targetX: d.x,
    targetY: d.y,
    targetPosition: g
  };
  switch (t) {
    case kr.Bezier:
      [E] = qR(y);
      break;
    case kr.SimpleBezier:
      [E] = fN(y);
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
      [E] = jR(y);
  }
  return I.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
EN.displayName = "ConnectionLine";
const $j = {};
function D1(e = $j) {
  R.useRef(e), Fe(), R.useEffect(() => {
  }, [e]);
}
function Bj() {
  Fe(), R.useRef(!1), R.useEffect(() => {
  }, []);
}
function CN({ nodeTypes: e, edgeTypes: t, onInit: r, onNodeClick: o, onEdgeClick: s, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: m, onSelectionStart: g, onSelectionEnd: w, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: S, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, multiSelectionKeyCode: N, panActivationKeyCode: P, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: D, elementsSelectable: G, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, preventScrolling: H, defaultMarkerColor: $, zoomOnScroll: Y, zoomOnPinch: M, panOnScroll: j, panOnScrollSpeed: Q, panOnScrollMode: q, zoomOnDoubleClick: W, panOnDrag: ie, onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ge, reconnectRadius: Ne, onReconnect: Ee, onReconnectStart: Ze, onReconnectEnd: Ve, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: He, nodeExtent: en, rfId: $t, viewport: tn, onViewportChange: Bt }) {
  return D1(e), D1(t), Bj(), Mj(r), Lj(tn), I.jsx(rj, { onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, onSelectionStart: g, onSelectionEnd: w, multiSelectionKeyCode: N, panActivationKeyCode: P, zoomActivationKeyCode: A, elementsSelectable: G, zoomOnScroll: Y, zoomOnPinch: M, zoomOnDoubleClick: W, panOnScroll: j, panOnScrollSpeed: Q, panOnScrollMode: q, panOnDrag: ie, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, onSelectionContextMenu: m, preventScrolling: H, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: He, onViewportChange: Bt, isControlledViewport: !!tn, children: I.jsxs(Ij, { children: [I.jsx(Tj, { edgeTypes: t, onEdgeClick: s, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Ze, onReconnectEnd: Ve, onlyRenderVisibleElements: D, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ge, reconnectRadius: Ne, defaultMarkerColor: $, noPanClassName: at, disableKeyboardA11y: He, rfId: $t }), I.jsx(Fj, { style: y, type: E, component: x, containerStyle: S }), I.jsx("div", { className: "react-flow__edgelabel-renderer" }), I.jsx(dj, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: D, noPanClassName: at, noDragClassName: Ft, disableKeyboardA11y: He, nodeExtent: en, rfId: $t }), I.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
CN.displayName = "GraphView";
const Vj = R.memo(CN), j1 = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: m } = {}) => {
  const g = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], S = r ?? e ?? [], C = h ?? [0, 0], _ = m ?? Rs;
  $R(E, y, x);
  const k = $v(S, g, w, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let N = [0, 0, 1];
  if (l && s && a) {
    const P = Fs(g, {
      filter: (G) => !!((G.width || G.initialWidth) && (G.height || G.initialHeight))
    }), { x: A, y: O, zoom: D } = hy(P, s, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    N = [A, O, D];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: a ?? 0,
    transform: N,
    nodes: S,
    nodesInitialized: k,
    nodeLookup: g,
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
    translateExtent: Rs,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: ii.Strict,
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
    connection: { ...SR },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: tq,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: bR
  };
}, Hj = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: m }) => iD((g, w) => {
  async function E() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: S, fitViewResolver: C, width: _, height: k, minZoom: N, maxZoom: P } = w();
    x && (await JL({
      nodes: y,
      width: _,
      height: k,
      panZoom: x,
      minZoom: N,
      maxZoom: P
    }, S), C == null || C.resolve(!0), g({ fitViewResolver: null }));
  }
  return {
    ...j1({
      nodes: e,
      edges: t,
      width: s,
      height: a,
      fitView: l,
      fitViewOptions: u,
      minZoom: f,
      maxZoom: d,
      nodeOrigin: h,
      nodeExtent: m,
      defaultNodes: r,
      defaultEdges: o
    }),
    setNodes: (y) => {
      const { nodeLookup: x, parentLookup: S, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: k } = w(), N = $v(y, x, S, {
        nodeOrigin: C,
        nodeExtent: m,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      k && N ? (E(), g({ nodes: y, nodesInitialized: N, fitViewQueued: !1, fitViewOptions: void 0 })) : g({ nodes: y, nodesInitialized: N });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: S } = w();
      $R(x, S, y), g({ edges: y });
    },
    setDefaultNodesAndEdges: (y, x) => {
      if (y) {
        const { setNodes: S } = w();
        S(y), g({ hasDefaultNodes: !0 });
      }
      if (x) {
        const { setEdges: S } = w();
        S(x), g({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (y) => {
      const { triggerNodeChanges: x, nodeLookup: S, parentLookup: C, domNode: _, nodeOrigin: k, nodeExtent: N, debug: P, fitViewQueued: A } = w(), { changes: O, updatedInternals: D } = Sq(y, S, C, _, k, N);
      D && (wq(S, C, { nodeOrigin: k, nodeExtent: N }), A ? (E(), g({ fitViewQueued: !1, fitViewOptions: void 0 })) : g({}), (O == null ? void 0 : O.length) > 0 && (P && console.log("React Flow: trigger node changes", O), x == null || x(O)));
    },
    updateNodePositions: (y, x = !1) => {
      const S = [], C = [], { nodeLookup: _, triggerNodeChanges: k } = w();
      for (const [N, P] of y) {
        const A = _.get(N), O = !!(A != null && A.expandParent && (A != null && A.parentId) && (P != null && P.position)), D = {
          id: N,
          type: "position",
          position: O ? {
            x: Math.max(0, P.position.x),
            y: Math.max(0, P.position.y)
          } : P.position,
          dragging: x
        };
        O && A.parentId && S.push({
          id: N,
          parentId: A.parentId,
          rect: {
            ...P.internals.positionAbsolute,
            width: P.measured.width ?? 0,
            height: P.measured.height ?? 0
          }
        }), C.push(D);
      }
      if (S.length > 0) {
        const { parentLookup: N, nodeOrigin: P } = w(), A = yy(S, _, N, P);
        C.push(...A);
      }
      k(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: S, nodes: C, hasDefaultNodes: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const N = RD(y, C);
          S(N);
        }
        k && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: S, edges: C, hasDefaultEdges: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const N = ND(y, C);
          S(N);
        }
        k && console.log("React Flow: trigger edge changes", y), x == null || x(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const N = y.map((P) => eo(P, !0));
        _(N);
        return;
      }
      _(Zo(C, /* @__PURE__ */ new Set([...y]), !0)), k(Zo(S));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const N = y.map((P) => eo(P, !0));
        k(N);
        return;
      }
      k(Zo(S, /* @__PURE__ */ new Set([...y]))), _(Zo(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: S, nodes: C, nodeLookup: _, triggerNodeChanges: k, triggerEdgeChanges: N } = w(), P = y || C, A = x || S, O = P.map((G) => {
        const B = _.get(G.id);
        return B && (B.selected = !1), eo(G.id, !1);
      }), D = A.map((G) => eo(G.id, !1));
      k(O), N(D);
    },
    setMinZoom: (y) => {
      const { panZoom: x, maxZoom: S } = w();
      x == null || x.setScaleExtent([y, S]), g({ minZoom: y });
    },
    setMaxZoom: (y) => {
      const { panZoom: x, minZoom: S } = w();
      x == null || x.setScaleExtent([S, y]), g({ maxZoom: y });
    },
    setTranslateExtent: (y) => {
      var x;
      (x = w().panZoom) == null || x.setTranslateExtent(y), g({ translateExtent: y });
    },
    resetSelectedElements: () => {
      const { edges: y, nodes: x, triggerNodeChanges: S, triggerEdgeChanges: C, elementsSelectable: _ } = w();
      if (!_)
        return;
      const k = x.reduce((P, A) => A.selected ? [...P, eo(A.id, !1)] : P, []), N = y.reduce((P, A) => A.selected ? [...P, eo(A.id, !1)] : P, []);
      S(k), C(N);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: S, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: k, nodeExtent: N } = w();
      y[0][0] === N[0][0] && y[0][1] === N[0][1] && y[1][0] === N[1][0] && y[1][1] === N[1][1] || ($v(x, S, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: k,
        checkEquality: !1
      }), g({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: S, height: C, panZoom: _, translateExtent: k } = w();
      return Eq({ delta: y, panZoom: _, transform: x, translateExtent: k, width: S, height: C });
    },
    setCenter: async (y, x, S) => {
      const { width: C, height: _, maxZoom: k, panZoom: N } = w();
      if (!N)
        return Promise.resolve(!1);
      const P = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : k;
      return await N.setViewport({
        x: C / 2 - y * P,
        y: _ / 2 - x * P,
        zoom: P
      }, { duration: S == null ? void 0 : S.duration, ease: S == null ? void 0 : S.ease, interpolate: S == null ? void 0 : S.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      g({
        connection: { ...SR }
      });
    },
    updateConnection: (y) => {
      g({ connection: y });
    },
    reset: () => g({ ...j1() })
  };
}, Object.is);
function kN({ initialNodes: e, initialEdges: t, defaultNodes: r, defaultEdges: o, initialWidth: s, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: m, children: g }) {
  const [w] = R.useState(() => Hj({
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
    nodeExtent: m
  }));
  return I.jsx(aD, { value: w, children: I.jsx(ID, { children: g }) });
}
function Wj({ children: e, nodes: t, edges: r, defaultNodes: o, defaultEdges: s, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: m, nodeExtent: g }) {
  return R.useContext(hu) ? I.jsx(I.Fragment, { children: e }) : I.jsx(kN, { initialNodes: t, initialEdges: r, defaultNodes: o, defaultEdges: s, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: m, nodeExtent: g, children: e });
}
const Uj = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function Gj({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, className: s, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: m, onMoveEnd: g, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: N, onNodeDoubleClick: P, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onSelectionChange: X, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: $, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: j, onBeforeDelete: Q, connectionMode: q, connectionLineType: W = kr.Bezier, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: K = "Shift", selectionOnDrag: te = !1, selectionMode: se = Ns.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = Ts() ? "Meta" : "Control", zoomActivationKeyCode: de = Ts() ? "Meta" : "Control", snapToGrid: pe, snapGrid: be, onlyRenderVisibleElements: ge = !1, selectNodesOnDrag: Ne, nodesDraggable: Ee, autoPanOnNodeFocus: Ze, nodesConnectable: Ve, nodesFocusable: Ft, nodeOrigin: ht = eN, edgesFocusable: at, edgesReconnectable: He, elementsSelectable: en = !0, defaultViewport: $t = xD, minZoom: tn = 0.5, maxZoom: Bt = 2, translateExtent: _t = Rs, preventScrolling: Lr = !0, nodeExtent: Vt, defaultMarkerColor: qn = "#b1b1b7", zoomOnScroll: go = !0, zoomOnPinch: Tt = !0, panOnScroll: Ht = !1, panOnScrollSpeed: Hu = 0.5, panOnScrollMode: bi = ro.Free, zoomOnDoubleClick: Si = !0, panOnDrag: Ei = !0, onPaneClick: Ci, onPaneMouseEnter: ki, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Qs, onPaneContextMenu: Zs, paneClickDistance: Js = 1, nodeClickDistance: ea = 0, children: ta, onReconnect: Ri, onReconnectStart: na, onReconnectEnd: qr, onEdgeContextMenu: Ni, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Wu, onEdgeMouseMove: jr, onEdgeMouseLeave: vo, reconnectRadius: yo = 10, onNodesChange: Pi, onEdgesChange: Uu, noDragClassName: Gu = "nodrag", noWheelClassName: Yu = "nowheel", noPanClassName: xn = "nopan", fitView: Ti, fitViewOptions: Ai, connectOnClick: Ku, attributionPosition: ra, proOptions: oa, defaultEdgeOptions: ia, elevateNodesOnSelect: sa, elevateEdgesOnSelect: Xu, disableKeyboardA11y: aa = !1, autoPanOnConnect: We, autoPanOnNodeDrag: Qu, autoPanSpeed: Ii, connectionRadius: la, isValidConnection: wo, onError: Zu, style: ua, id: zr, nodeDragThreshold: Wt, connectionDragThreshold: Ju, viewport: At, onViewportChange: ec, width: tc, height: nc, colorMode: xo = "light", debug: _o, onScroll: _n, ariaLabelConfig: bo, ...rc }, oc) {
  const Fr = zr || "1", ca = ED(xo), Mi = R.useCallback((nr) => {
    nr.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), _n == null || _n(nr);
  }, [_n]);
  return I.jsx("div", { "data-testid": "rf__wrapper", ...rc, onScroll: Mi, style: { ...ua, ...Uj }, ref: oc, className: nt(["react-flow", s, ca]), id: zr, role: "application", children: I.jsxs(Wj, { nodes: e, edges: t, width: tc, height: nc, fitView: Ti, fitViewOptions: Ai, minZoom: tn, maxZoom: Bt, nodeOrigin: ht, nodeExtent: Vt, children: [I.jsx(Vj, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: N, onNodeDoubleClick: P, nodeTypes: a, edgeTypes: l, connectionLineType: W, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, selectionKeyCode: K, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: ge, defaultViewport: $t, translateExtent: _t, minZoom: tn, maxZoom: Bt, preventScrolling: Lr, zoomOnScroll: go, zoomOnPinch: Tt, zoomOnDoubleClick: Si, panOnScroll: Ht, panOnScrollSpeed: Hu, panOnScrollMode: bi, panOnDrag: Ei, onPaneClick: Ci, onPaneMouseEnter: ki, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Qs, onPaneContextMenu: Zs, paneClickDistance: Js, nodeClickDistance: ea, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: j, onReconnect: Ri, onReconnectStart: na, onReconnectEnd: qr, onEdgeContextMenu: Ni, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Wu, onEdgeMouseMove: jr, onEdgeMouseLeave: vo, reconnectRadius: yo, defaultMarkerColor: qn, noDragClassName: Gu, noWheelClassName: Yu, noPanClassName: xn, rfId: Fr, disableKeyboardA11y: aa, nodeExtent: Vt, viewport: At, onViewportChange: ec }), I.jsx(SD, { nodes: e, edges: t, defaultNodes: r, defaultEdges: o, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, nodesDraggable: Ee, autoPanOnNodeFocus: Ze, nodesConnectable: Ve, nodesFocusable: Ft, edgesFocusable: at, edgesReconnectable: He, elementsSelectable: en, elevateNodesOnSelect: sa, elevateEdgesOnSelect: Xu, minZoom: tn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: Pi, onEdgesChange: Uu, snapToGrid: pe, snapGrid: be, connectionMode: q, translateExtent: _t, connectOnClick: Ku, defaultEdgeOptions: ia, fitView: Ti, fitViewOptions: Ai, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: $, onMove: h, onMoveStart: m, onMoveEnd: g, noPanClassName: xn, nodeOrigin: ht, rfId: Fr, autoPanOnConnect: We, autoPanOnNodeDrag: Qu, autoPanSpeed: Ii, onError: Zu, connectionRadius: la, isValidConnection: wo, selectNodesOnDrag: Ne, nodeDragThreshold: Wt, connectionDragThreshold: Ju, onBeforeDelete: Q, debug: _o, ariaLabelConfig: bo }), I.jsx(wD, { onSelectionChange: X }), ta, I.jsx(pD, { proOptions: oa, position: ra }), I.jsx(hD, { rfId: Fr, disableKeyboardA11y: aa })] }) });
}
nN(Gj);
function Yj({ dimensions: e, lineWidth: t, variant: r, className: o }) {
  return I.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", r, o]) });
}
function Kj({ radius: e, className: t }) {
  return I.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Rr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Rr || (Rr = {}));
const Xj = {
  [Rr.Dots]: 1,
  [Rr.Lines]: 1,
  [Rr.Cross]: 6
}, Qj = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function RN({
  id: e,
  variant: t = Rr.Dots,
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
  const m = R.useRef(null), { transform: g, patternId: w } = Ie(Qj, Ke), E = o || Xj[t], y = t === Rr.Dots, x = t === Rr.Cross, S = Array.isArray(r) ? r : [r, r], C = [S[0] * g[2] || 1, S[1] * g[2] || 1], _ = E * g[2], k = Array.isArray(a) ? a : [a, a], N = x ? [_, _] : C, P = [
    k[0] * g[2] || 1 + N[0] / 2,
    k[1] * g[2] || 1 + N[1] / 2
  ], A = `${w}${e || ""}`;
  return I.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...mu,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: m, "data-testid": "rf__background", children: [I.jsx("pattern", { id: A, x: g[0] % C[0], y: g[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${P[0]},-${P[1]})`, children: y ? I.jsx(Kj, { radius: _ / 2, className: h }) : I.jsx(Yj, { dimensions: N, lineWidth: s, variant: t, className: h }) }), I.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
RN.displayName = "Background";
R.memo(RN);
function Zj() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: I.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function Jj() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: I.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function e3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: I.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function t3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function n3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function _l({ children: e, className: t, ...r }) {
  return I.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...r, children: e });
}
const r3 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function NN({ style: e, showZoom: t = !0, showFitView: r = !0, showInteractive: o = !0, fitViewOptions: s, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: m = "bottom-left", orientation: g = "vertical", "aria-label": w }) {
  const E = Fe(), { isInteractive: y, minZoomReached: x, maxZoomReached: S, ariaLabelConfig: C } = Ie(r3, Ke), { zoomIn: _, zoomOut: k, fitView: N } = wy(), P = () => {
    _(), a == null || a();
  }, A = () => {
    k(), l == null || l();
  }, O = () => {
    N(s), u == null || u();
  }, D = () => {
    E.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, G = g === "horizontal" ? "horizontal" : "vertical";
  return I.jsxs(pu, { className: nt(["react-flow__controls", G, d]), position: m, style: e, "data-testid": "rf__controls", "aria-label": w ?? C["controls.ariaLabel"], children: [t && I.jsxs(I.Fragment, { children: [I.jsx(_l, { onClick: P, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: S, children: I.jsx(Zj, {}) }), I.jsx(_l, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: I.jsx(Jj, {}) })] }), r && I.jsx(_l, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: I.jsx(e3, {}) }), o && I.jsx(_l, { className: "react-flow__controls-interactive", onClick: D, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? I.jsx(n3, {}) : I.jsx(t3, {}) }), h] });
}
NN.displayName = "Controls";
R.memo(NN);
function o3({ id: e, x: t, y: r, width: o, height: s, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: m, selected: g, onClick: w }) {
  const { background: E, backgroundColor: y } = a || {}, x = l || E || y;
  return I.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: g }, d]), x: t, y: r, rx: h, ry: h, width: o, height: s, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: m, onClick: w ? (S) => w(S, e) : void 0 });
}
const i3 = R.memo(o3), s3 = (e) => e.nodes.map((t) => t.id), td = (e) => e instanceof Function ? e : () => e;
function a3({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: r = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = i3,
  onClick: l
}) {
  const u = Ie(s3, Ke), f = td(t), d = td(e), h = td(r), m = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return I.jsx(I.Fragment, { children: u.map((g) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    I.jsx(u3, { id: g, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: s, NodeComponent: a, onClick: l, shapeRendering: m }, g)
  )) });
}
function l3({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: r, nodeClassNameFunc: o, nodeBorderRadius: s, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: m, width: g, height: w } = Ie((E) => {
    const { internals: y } = E.nodeLookup.get(e), x = y.userNode, { x: S, y: C } = y.positionAbsolute, { width: _, height: k } = Qn(x);
    return {
      node: x,
      x: S,
      y: C,
      width: _,
      height: k
    };
  }, Ke);
  return !d || d.hidden || !TR(d) ? null : I.jsx(u, { x: h, y: m, width: g, height: w, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: s, strokeColor: r(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const u3 = R.memo(l3);
var c3 = R.memo(a3);
const f3 = 200, d3 = 150, h3 = (e) => !e.hidden, p3 = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? PR(Fs(e.nodeLookup, { filter: h3 }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, m3 = "react-flow__minimap-desc";
function PN({
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
  maskStrokeWidth: m,
  position: g = "bottom-right",
  onClick: w,
  onNodeClick: E,
  pannable: y = !1,
  zoomable: x = !1,
  ariaLabel: S,
  inversePan: C,
  zoomStep: _ = 1,
  offsetScale: k = 5
}) {
  const N = Fe(), P = R.useRef(null), { boundingRect: A, viewBB: O, rfId: D, panZoom: G, translateExtent: B, flowWidth: V, flowHeight: X, ariaLabelConfig: L } = Ie(p3, Ke), H = (e == null ? void 0 : e.width) ?? f3, $ = (e == null ? void 0 : e.height) ?? d3, Y = A.width / H, M = A.height / $, j = Math.max(Y, M), Q = j * H, q = j * $, W = k * j, ie = A.x - (Q - A.width) / 2 - W, F = A.y - (q - A.height) / 2 - W, Z = Q + W * 2, ee = q + W * 2, K = `${m3}-${D}`, te = R.useRef(0), se = R.useRef();
  te.current = j, R.useEffect(() => {
    if (P.current && G)
      return se.current = Mq({
        domNode: P.current,
        panZoom: G,
        getTransform: () => N.getState().transform,
        getViewScale: () => te.current
      }), () => {
        var pe;
        (pe = se.current) == null || pe.destroy();
      };
  }, [G]), R.useEffect(() => {
    var pe;
    (pe = se.current) == null || pe.update({
      translateExtent: B,
      width: V,
      height: X,
      inversePan: C,
      pannable: y,
      zoomStep: _,
      zoomable: x
    });
  }, [y, x, C, _, B, V, X]);
  const ae = w ? (pe) => {
    var Ne;
    const [be, ge] = ((Ne = se.current) == null ? void 0 : Ne.pointer(pe)) || [0, 0];
    w(pe, { x: be, y: ge });
  } : void 0, ce = E ? R.useCallback((pe, be) => {
    const ge = N.getState().nodeLookup.get(be).internals.userNode;
    E(pe, ge);
  }, []) : void 0, de = S ?? L["minimap.ariaLabel"];
  return I.jsx(pu, { position: g, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * j : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: I.jsxs("svg", { width: H, height: $, viewBox: `${ie} ${F} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": K, ref: P, onClick: ae, children: [de && I.jsx("title", { id: K, children: de }), I.jsx(c3, { onClick: ce, nodeColor: o, nodeStrokeColor: r, nodeBorderRadius: a, nodeClassName: s, nodeStrokeWidth: l, nodeComponent: u }), I.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - W},${F - W}h${Z + W * 2}v${ee + W * 2}h${-Z - W * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
PN.displayName = "MiniMap";
R.memo(PN);
const g3 = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, v3 = {
  [ui.Line]: "right",
  [ui.Handle]: "bottom-right"
};
function y3({ nodeId: e, position: t, variant: r = ui.Handle, className: o, style: s = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: g, autoScale: w = !0, shouldResize: E, onResizeStart: y, onResize: x, onResizeEnd: S }) {
  const C = sN(), _ = typeof e == "string" ? e : C, k = Fe(), N = R.useRef(null), P = r === ui.Handle, A = Ie(R.useCallback(g3(P && w), [P, w]), Ke), O = R.useRef(null), D = t ?? v3[r];
  R.useEffect(() => {
    if (!(!N.current || !_))
      return O.current || (O.current = Gq({
        domNode: N.current,
        nodeId: _,
        getStoreItems: () => {
          const { nodeLookup: B, transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H, domNode: $ } = k.getState();
          return {
            nodeLookup: B,
            transform: V,
            snapGrid: X,
            snapToGrid: L,
            nodeOrigin: H,
            paneDomNode: $
          };
        },
        onChange: (B, V) => {
          const { triggerNodeChanges: X, nodeLookup: L, parentLookup: H, nodeOrigin: $ } = k.getState(), Y = [], M = { x: B.x, y: B.y }, j = L.get(_);
          if (j && j.expandParent && j.parentId) {
            const Q = j.origin ?? $, q = B.width ?? j.measured.width ?? 0, W = B.height ?? j.measured.height ?? 0, ie = {
              id: j.id,
              parentId: j.parentId,
              rect: {
                width: q,
                height: W,
                ...AR({
                  x: B.x ?? j.position.x,
                  y: B.y ?? j.position.y
                }, { width: q, height: W }, j.parentId, L, Q)
              }
            }, F = yy([ie], L, H, $);
            Y.push(...F), M.x = B.x ? Math.max(Q[0] * q, B.x) : void 0, M.y = B.y ? Math.max(Q[1] * W, B.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const Q = {
              id: _,
              type: "position",
              position: { ...M }
            };
            Y.push(Q);
          }
          if (B.width !== void 0 && B.height !== void 0) {
            const q = {
              id: _,
              type: "dimensions",
              resizing: !0,
              setAttributes: g ? g === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: B.width,
                height: B.height
              }
            };
            Y.push(q);
          }
          for (const Q of V) {
            const q = {
              ...Q,
              type: "position"
            };
            Y.push(q);
          }
          X(Y);
        },
        onEnd: ({ width: B, height: V }) => {
          const X = {
            id: _,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: B,
              height: V
            }
          };
          k.getState().triggerNodeChanges([X]);
        }
      })), O.current.update({
        controlPosition: D,
        boundaries: {
          minWidth: u,
          minHeight: f,
          maxWidth: d,
          maxHeight: h
        },
        keepAspectRatio: m,
        resizeDirection: g,
        onResizeStart: y,
        onResize: x,
        onResizeEnd: S,
        shouldResize: E
      }), () => {
        var B;
        (B = O.current) == null || B.destroy();
      };
  }, [
    D,
    u,
    f,
    d,
    h,
    m,
    y,
    x,
    S,
    E
  ]);
  const G = D.split("-");
  return I.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...G, r, o]), ref: N, style: {
    ...s,
    scale: A,
    ...l && { [P ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
R.memo(y3);
function z1(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Qe(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function vu(e, t = []) {
  let r = [];
  function o(a, l) {
    const u = R.createContext(l), f = r.length;
    r = [...r, l];
    const d = (m) => {
      var S;
      const { scope: g, children: w, ...E } = m, y = ((S = g == null ? void 0 : g[e]) == null ? void 0 : S[f]) || u, x = R.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ I.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(m, g) {
      var y;
      const w = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[f]) || u, E = R.useContext(w);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const s = () => {
    const a = r.map((l) => R.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || a;
      return R.useMemo(
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
        const m = f(a)[`__scope${d}`];
        return { ...u, ...m };
      }, {});
      return R.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function F1(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Hs(...e) {
  return (t) => {
    let r = !1;
    const o = e.map((s) => {
      const a = F1(s, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : F1(e[s], null);
        }
      };
  };
}
function tt(...e) {
  return R.useCallback(Hs(...e), e);
}
// @__NO_SIDE_EFFECTS__
function $1(e) {
  const t = /* @__PURE__ */ x3(e), r = R.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = R.Children.toArray(a), f = u.find(b3);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function x3(e) {
  const t = R.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (R.isValidElement(s)) {
      const l = E3(s), u = S3(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Hs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _3 = Symbol("radix.slottable");
function b3(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _3;
}
function S3(e, t) {
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
function E3(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function C3(e) {
  const t = e + "CollectionProvider", [r, o] = vu(t), [s, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: S } = y, C = cn.useRef(null), _ = cn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.jsx(s, { scope: x, itemMap: _, collectionRef: C, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ $1(u), d = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C } = y, _ = a(u, S), k = tt(x, _.collectionRef);
      return /* @__PURE__ */ I.jsx(f, { ref: k, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", m = "data-radix-collection-item", g = /* @__PURE__ */ $1(h), w = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C, ..._ } = y, k = cn.useRef(null), N = tt(x, k), P = a(h, S);
      return cn.useEffect(() => (P.itemMap.set(k, { ref: k, ..._ }), () => void P.itemMap.delete(k))), /* @__PURE__ */ I.jsx(g, { [m]: "", ref: N, children: C });
    }
  );
  w.displayName = h;
  function E(y) {
    const x = a(e + "CollectionConsumer", y);
    return cn.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const _ = Array.from(C.querySelectorAll(`[${m}]`));
      return Array.from(x.itemMap.values()).sort(
        (P, A) => _.indexOf(P.ref.current) - _.indexOf(A.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: w },
    E,
    o
  ];
}
var k3 = R.createContext(void 0);
function R3(e) {
  const t = R.useContext(k3);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function N3(e) {
  const t = /* @__PURE__ */ P3(e), r = R.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = R.Children.toArray(a), f = u.find(A3);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function P3(e) {
  const t = R.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (R.isValidElement(s)) {
      const l = M3(s), u = I3(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Hs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var T3 = Symbol("radix.slottable");
function A3(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === T3;
}
function I3(e, t) {
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
function M3(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var O3 = [
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
], $e = O3.reduce((e, t) => {
  const r = /* @__PURE__ */ N3(`Primitive.${t}`), o = R.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function L3(e, t) {
  e && Vs.flushSync(() => e.dispatchEvent(t));
}
function ao(e) {
  const t = R.useRef(e);
  return R.useEffect(() => {
    t.current = e;
  }), R.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function q3(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ao(e);
  R.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var D3 = "DismissableLayer", Hv = "dismissableLayer.update", j3 = "dismissableLayer.pointerDownOutside", z3 = "dismissableLayer.focusOutside", B1, TN = R.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), AN = R.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = R.useContext(TN), [h, m] = R.useState(null), g = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = R.useState({}), E = tt(t, (A) => m(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), S = y.indexOf(x), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= S, N = B3((A) => {
      const O = A.target, D = [...d.branches].some((G) => G.contains(O));
      !k || D || (s == null || s(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, g), P = V3((A) => {
      const O = A.target;
      [...d.branches].some((G) => G.contains(O)) || (a == null || a(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, g);
    return q3((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, g), R.useEffect(() => {
      if (h)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (B1 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), V1(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = B1);
        };
    }, [h, g, r, d]), R.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), V1());
    }, [h, d]), R.useEffect(() => {
      const A = () => w({});
      return document.addEventListener(Hv, A), () => document.removeEventListener(Hv, A);
    }, []), /* @__PURE__ */ I.jsx(
      $e.div,
      {
        ...f,
        ref: E,
        style: {
          pointerEvents: _ ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Qe(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Qe(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Qe(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
AN.displayName = D3;
var F3 = "DismissableLayerBranch", $3 = R.forwardRef((e, t) => {
  const r = R.useContext(TN), o = R.useRef(null), s = tt(t, o);
  return R.useEffect(() => {
    const a = o.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ I.jsx($e.div, { ...e, ref: s });
});
$3.displayName = F3;
function B3(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ao(e), o = R.useRef(!1), s = R.useRef(() => {
  });
  return R.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          IN(
            j3,
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
function V3(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ao(e), o = R.useRef(!1);
  return R.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && IN(z3, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function V1() {
  const e = new CustomEvent(Hv);
  document.dispatchEvent(e);
}
function IN(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? L3(s, a) : s.dispatchEvent(a);
}
var nd = 0;
function H3() {
  R.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? H1()), document.body.insertAdjacentElement("beforeend", e[1] ?? H1()), nd++, () => {
      nd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), nd--;
    };
  }, []);
}
function H1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var rd = "focusScope.autoFocusOnMount", od = "focusScope.autoFocusOnUnmount", W1 = { bubbles: !1, cancelable: !0 }, W3 = "FocusScope", MN = R.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = R.useState(null), d = ao(s), h = ao(a), m = R.useRef(null), g = tt(t, (y) => f(y)), w = R.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  R.useEffect(() => {
    if (o) {
      let y = function(_) {
        if (w.paused || !u) return;
        const k = _.target;
        u.contains(k) ? m.current = k : Cr(m.current, { select: !0 });
      }, x = function(_) {
        if (w.paused || !u) return;
        const k = _.relatedTarget;
        k !== null && (u.contains(k) || Cr(m.current, { select: !0 }));
      }, S = function(_) {
        if (document.activeElement === document.body)
          for (const N of _)
            N.removedNodes.length > 0 && Cr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", x);
      const C = new MutationObserver(S);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [o, u, w.paused]), R.useEffect(() => {
    if (u) {
      G1.add(w);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const S = new CustomEvent(rd, W1);
        u.addEventListener(rd, d), u.dispatchEvent(S), S.defaultPrevented || (U3(Q3(ON(u)), { select: !0 }), document.activeElement === y && Cr(u));
      }
      return () => {
        u.removeEventListener(rd, d), setTimeout(() => {
          const S = new CustomEvent(od, W1);
          u.addEventListener(od, h), u.dispatchEvent(S), S.defaultPrevented || Cr(y ?? document.body, { select: !0 }), u.removeEventListener(od, h), G1.remove(w);
        }, 0);
      };
    }
  }, [u, d, h, w]);
  const E = R.useCallback(
    (y) => {
      if (!r && !o || w.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, S = document.activeElement;
      if (x && S) {
        const C = y.currentTarget, [_, k] = G3(C);
        _ && k ? !y.shiftKey && S === k ? (y.preventDefault(), r && Cr(_, { select: !0 })) : y.shiftKey && S === _ && (y.preventDefault(), r && Cr(k, { select: !0 })) : S === C && y.preventDefault();
      }
    },
    [r, o, w.paused]
  );
  return /* @__PURE__ */ I.jsx($e.div, { tabIndex: -1, ...l, ref: g, onKeyDown: E });
});
MN.displayName = W3;
function U3(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (Cr(o, { select: t }), document.activeElement !== r) return;
}
function G3(e) {
  const t = ON(e), r = U1(t, e), o = U1(t.reverse(), e);
  return [r, o];
}
function ON(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function U1(e, t) {
  for (const r of e)
    if (!Y3(r, { upTo: t })) return r;
}
function Y3(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function K3(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && K3(e) && t && e.select();
  }
}
var G1 = X3();
function X3() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Y1(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Y1(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Y1(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function Q3(e) {
  return e.filter((t) => t.tagName !== "A");
}
var yt = globalThis != null && globalThis.document ? R.useLayoutEffect : () => {
}, Z3 = ry[" useId ".trim().toString()] || (() => {
}), J3 = 0;
function _y(e) {
  const [t, r] = R.useState(Z3());
  return yt(() => {
    r((o) => o ?? String(J3++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const ez = ["top", "right", "bottom", "left"], Pr = Math.min, qt = Math.max, Kl = Math.round, bl = Math.floor, Tn = (e) => ({
  x: e,
  y: e
}), tz = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nz = {
  start: "end",
  end: "start"
};
function Wv(e, t, r) {
  return qt(e, Pr(t, r));
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
function by(e) {
  return e === "x" ? "y" : "x";
}
function Sy(e) {
  return e === "y" ? "height" : "width";
}
const rz = /* @__PURE__ */ new Set(["top", "bottom"]);
function Nn(e) {
  return rz.has(Xn(e)) ? "y" : "x";
}
function Ey(e) {
  return by(Nn(e));
}
function oz(e, t, r) {
  r === void 0 && (r = !1);
  const o = di(e), s = Ey(e), a = Sy(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = Xl(l)), [l, Xl(l)];
}
function iz(e) {
  const t = Xl(e);
  return [Uv(e), t, Uv(t)];
}
function Uv(e) {
  return e.replace(/start|end/g, (t) => nz[t]);
}
const K1 = ["left", "right"], X1 = ["right", "left"], sz = ["top", "bottom"], az = ["bottom", "top"];
function lz(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? X1 : K1 : t ? K1 : X1;
    case "left":
    case "right":
      return t ? sz : az;
    default:
      return [];
  }
}
function uz(e, t, r, o) {
  const s = di(e);
  let a = lz(Xn(e), r === "start", o);
  return s && (a = a.map((l) => l + "-" + s), t && (a = a.concat(a.map(Uv)))), a;
}
function Xl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tz[t]);
}
function cz(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function LN(e) {
  return typeof e != "number" ? cz(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ql(e) {
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
function Q1(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const a = Nn(t), l = Ey(t), u = Sy(l), f = Xn(t), d = a === "y", h = o.x + o.width / 2 - s.width / 2, m = o.y + o.height / 2 - s.height / 2, g = o[u] / 2 - s[u] / 2;
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
        y: m
      };
      break;
    case "left":
      w = {
        x: o.x - s.width,
        y: m
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
      w[l] -= g * (r && d ? -1 : 1);
      break;
    case "end":
      w[l] += g * (r && d ? -1 : 1);
      break;
  }
  return w;
}
const fz = async (e, t, r) => {
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
    y: m
  } = Q1(d, o, f), g = o, w = {}, E = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: x,
      fn: S
    } = u[y], {
      x: C,
      y: _,
      data: k,
      reset: N
    } = await S({
      x: h,
      y: m,
      initialPlacement: o,
      placement: g,
      strategy: s,
      middlewareData: w,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = C ?? h, m = _ ?? m, w = {
      ...w,
      [x]: {
        ...w[x],
        ...k
      }
    }, N && E <= 50 && (E++, typeof N == "object" && (N.placement && (g = N.placement), N.rects && (d = N.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : N.rects), {
      x: h,
      y: m
    } = Q1(d, g, f)), y = -1);
  }
  return {
    x: h,
    y: m,
    placement: g,
    strategy: s,
    middlewareData: w
  };
};
async function Os(e, t) {
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
    elementContext: m = "floating",
    altBoundary: g = !1,
    padding: w = 0
  } = Kn(t, e), E = LN(w), x = u[g ? m === "floating" ? "reference" : "floating" : m], S = Ql(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(x))) == null || r ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = m === "floating" ? {
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
  }, N = Ql(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: _,
    strategy: f
  }) : C);
  return {
    top: (S.top - N.top + E.top) / k.y,
    bottom: (N.bottom - S.bottom + E.bottom) / k.y,
    left: (S.left - N.left + E.left) / k.x,
    right: (N.right - S.right + E.right) / k.x
  };
}
const dz = (e) => ({
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
    const m = LN(h), g = {
      x: r,
      y: o
    }, w = Ey(s), E = Sy(w), y = await l.getDimensions(d), x = w === "y", S = x ? "top" : "left", C = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", k = a.reference[E] + a.reference[w] - g[w] - a.floating[E], N = g[w] - a.reference[w], P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let A = P ? P[_] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(P))) && (A = u.floating[_] || a.floating[E]);
    const O = k / 2 - N / 2, D = A / 2 - y[E] / 2 - 1, G = Pr(m[S], D), B = Pr(m[C], D), V = G, X = A - y[E] - B, L = A / 2 - y[E] / 2 + O, H = Wv(V, L, X), $ = !f.arrow && di(s) != null && L !== H && a.reference[E] / 2 - (L < V ? G : B) - y[E] / 2 < 0, Y = $ ? L < V ? L - V : L - X : 0;
    return {
      [w]: g[w] + Y,
      data: {
        [w]: H,
        centerOffset: L - H - Y,
        ...$ && {
          alignmentOffset: Y
        }
      },
      reset: $
    };
  }
}), hz = function(e) {
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
        crossAxis: m = !0,
        fallbackPlacements: g,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: E = "none",
        flipAlignment: y = !0,
        ...x
      } = Kn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const S = Xn(s), C = Nn(u), _ = Xn(u) === u, k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), N = g || (_ || !y ? [Xl(u)] : iz(u)), P = E !== "none";
      !g && P && N.push(...uz(u, y, E, k));
      const A = [u, ...N], O = await Os(t, x), D = [];
      let G = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && D.push(O[S]), m) {
        const L = oz(s, l, k);
        D.push(O[L[0]], O[L[1]]);
      }
      if (G = [...G, {
        placement: s,
        overflows: D
      }], !D.every((L) => L <= 0)) {
        var B, V;
        const L = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, H = A[L];
        if (H && (!(m === "alignment" ? C !== Nn(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        G.every((M) => Nn(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: G
            },
            reset: {
              placement: H
            }
          };
        let $ = (V = G.filter((Y) => Y.overflows[0] <= 0).sort((Y, M) => Y.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!$)
          switch (w) {
            case "bestFit": {
              var X;
              const Y = (X = G.filter((M) => {
                if (P) {
                  const j = Nn(M.placement);
                  return j === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((j) => j > 0).reduce((j, Q) => j + Q, 0)]).sort((M, j) => M[1] - j[1])[0]) == null ? void 0 : X[0];
              Y && ($ = Y);
              break;
            }
            case "initialPlacement":
              $ = u;
              break;
          }
        if (s !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function Z1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function J1(e) {
  return ez.some((t) => e[t] >= 0);
}
const pz = function(e) {
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
          const a = await Os(t, {
            ...s,
            elementContext: "reference"
          }), l = Z1(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: J1(l)
            }
          };
        }
        case "escaped": {
          const a = await Os(t, {
            ...s,
            altBoundary: !0
          }), l = Z1(a, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: J1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, qN = /* @__PURE__ */ new Set(["left", "top"]);
async function mz(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Xn(r), u = di(r), f = Nn(r) === "y", d = qN.has(l) ? -1 : 1, h = a && f ? -1 : 1, m = Kn(t, e);
  let {
    mainAxis: g,
    crossAxis: w,
    alignmentAxis: E
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return u && typeof E == "number" && (w = u === "end" ? E * -1 : E), f ? {
    x: w * h,
    y: g * d
  } : {
    x: g * d,
    y: w * h
  };
}
const gz = function(e) {
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
      } = t, f = await mz(t, e);
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
}, vz = function(e) {
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
      }, h = await Os(t, f), m = Nn(Xn(s)), g = by(m);
      let w = d[g], E = d[m];
      if (a) {
        const x = g === "y" ? "top" : "left", S = g === "y" ? "bottom" : "right", C = w + h[x], _ = w - h[S];
        w = Wv(C, w, _);
      }
      if (l) {
        const x = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", C = E + h[x], _ = E - h[S];
        E = Wv(C, E, _);
      }
      const y = u.fn({
        ...t,
        [g]: w,
        [m]: E
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - o,
          enabled: {
            [g]: a,
            [m]: l
          }
        }
      };
    }
  };
}, yz = function(e) {
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
      }, m = Nn(s), g = by(m);
      let w = h[g], E = h[m];
      const y = Kn(u, t), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const _ = g === "y" ? "height" : "width", k = a.reference[g] - a.floating[_] + x.mainAxis, N = a.reference[g] + a.reference[_] - x.mainAxis;
        w < k ? w = k : w > N && (w = N);
      }
      if (d) {
        var S, C;
        const _ = g === "y" ? "width" : "height", k = qN.has(Xn(s)), N = a.reference[m] - a.floating[_] + (k && ((S = l.offset) == null ? void 0 : S[m]) || 0) + (k ? 0 : x.crossAxis), P = a.reference[m] + a.reference[_] + (k ? 0 : ((C = l.offset) == null ? void 0 : C[m]) || 0) - (k ? x.crossAxis : 0);
        E < N ? E = N : E > P && (E = P);
      }
      return {
        [g]: w,
        [m]: E
      };
    }
  };
}, wz = function(e) {
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
      } = Kn(e, t), h = await Os(t, d), m = Xn(s), g = di(s), w = Nn(s) === "y", {
        width: E,
        height: y
      } = a.floating;
      let x, S;
      m === "top" || m === "bottom" ? (x = m, S = g === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (S = m, x = g === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = E - h.left - h.right, k = Pr(y - h[x], C), N = Pr(E - h[S], _), P = !t.middlewareData.shift;
      let A = k, O = N;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (O = _), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), P && !g) {
        const G = qt(h.left, 0), B = qt(h.right, 0), V = qt(h.top, 0), X = qt(h.bottom, 0);
        w ? O = E - 2 * (G !== 0 || B !== 0 ? G + B : qt(h.left, h.right)) : A = y - 2 * (V !== 0 || X !== 0 ? V + X : qt(h.top, h.bottom));
      }
      await f({
        ...t,
        availableWidth: O,
        availableHeight: A
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
function yu() {
  return typeof window < "u";
}
function hi(e) {
  return DN(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function jt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function On(e) {
  var t;
  return (t = (DN(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function DN(e) {
  return yu() ? e instanceof Node || e instanceof jt(e).Node : !1;
}
function mn(e) {
  return yu() ? e instanceof Element || e instanceof jt(e).Element : !1;
}
function In(e) {
  return yu() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1;
}
function e_(e) {
  return !yu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot;
}
const xz = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ws(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = gn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !xz.has(s);
}
const _z = /* @__PURE__ */ new Set(["table", "td", "th"]);
function bz(e) {
  return _z.has(hi(e));
}
const Sz = [":popover-open", ":modal"];
function wu(e) {
  return Sz.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ez = ["transform", "translate", "scale", "rotate", "perspective"], Cz = ["transform", "translate", "scale", "rotate", "perspective", "filter"], kz = ["paint", "layout", "strict", "content"];
function Cy(e) {
  const t = ky(), r = mn(e) ? gn(e) : e;
  return Ez.some((o) => r[o] ? r[o] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || Cz.some((o) => (r.willChange || "").includes(o)) || kz.some((o) => (r.contain || "").includes(o));
}
function Rz(e) {
  let t = Tr(e);
  for (; In(t) && !ci(t); ) {
    if (Cy(t))
      return t;
    if (wu(t))
      return null;
    t = Tr(t);
  }
  return null;
}
function ky() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Nz = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ci(e) {
  return Nz.has(hi(e));
}
function gn(e) {
  return jt(e).getComputedStyle(e);
}
function xu(e) {
  return mn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Tr(e) {
  if (hi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    e_(e) && e.host || // Fallback.
    On(e)
  );
  return e_(t) ? t.host : t;
}
function jN(e) {
  const t = Tr(e);
  return ci(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && Ws(t) ? t : jN(t);
}
function Ls(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = jN(e), a = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = jt(s);
  if (a) {
    const u = Gv(l);
    return t.concat(l, l.visualViewport || [], Ws(s) ? s : [], u && r ? Ls(u) : []);
  }
  return t.concat(s, Ls(s, [], r));
}
function Gv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zN(e) {
  const t = gn(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = In(e), a = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Kl(r) !== a || Kl(o) !== l;
  return u && (r = a, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function Ry(e) {
  return mn(e) ? e : e.contextElement;
}
function ti(e) {
  const t = Ry(e);
  if (!In(t))
    return Tn(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: a
  } = zN(t);
  let l = (a ? Kl(r.width) : r.width) / o, u = (a ? Kl(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const Pz = /* @__PURE__ */ Tn(0);
function FN(e) {
  const t = jt(e);
  return !ky() || !t.visualViewport ? Pz : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Tz(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== jt(e) ? !1 : t;
}
function lo(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), a = Ry(e);
  let l = Tn(1);
  t && (o ? mn(o) && (l = ti(o)) : l = ti(e));
  const u = Tz(a, r, o) ? FN(a) : Tn(0);
  let f = (s.left + u.x) / l.x, d = (s.top + u.y) / l.y, h = s.width / l.x, m = s.height / l.y;
  if (a) {
    const g = jt(a), w = o && mn(o) ? jt(o) : o;
    let E = g, y = Gv(E);
    for (; y && o && w !== E; ) {
      const x = ti(y), S = y.getBoundingClientRect(), C = gn(y), _ = S.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, k = S.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, m *= x.y, f += _, d += k, E = jt(y), y = Gv(E);
    }
  }
  return Ql({
    width: h,
    height: m,
    x: f,
    y: d
  });
}
function _u(e, t) {
  const r = xu(e).scrollLeft;
  return t ? t.left + r : lo(On(e)).left + r;
}
function $N(e, t) {
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - _u(e, r), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Az(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const a = s === "fixed", l = On(o), u = t ? wu(t.floating) : !1;
  if (o === l || u && a)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Tn(1);
  const h = Tn(0), m = In(o);
  if ((m || !m && !a) && ((hi(o) !== "body" || Ws(l)) && (f = xu(o)), In(o))) {
    const w = lo(o);
    d = ti(o), h.x = w.x + o.clientLeft, h.y = w.y + o.clientTop;
  }
  const g = l && !m && !a ? $N(l, f) : Tn(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - f.scrollLeft * d.x + h.x + g.x,
    y: r.y * d.y - f.scrollTop * d.y + h.y + g.y
  };
}
function Iz(e) {
  return Array.from(e.getClientRects());
}
function Mz(e) {
  const t = On(e), r = xu(e), o = e.ownerDocument.body, s = qt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = qt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + _u(e);
  const u = -r.scrollTop;
  return gn(o).direction === "rtl" && (l += qt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
const t_ = 25;
function Oz(e, t) {
  const r = jt(e), o = On(e), s = r.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    a = s.width, l = s.height;
    const h = ky();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  const d = _u(o);
  if (d <= 0) {
    const h = o.ownerDocument, m = h.body, g = getComputedStyle(m), w = h.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, E = Math.abs(o.clientWidth - m.clientWidth - w);
    E <= t_ && (a -= E);
  } else d <= t_ && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const Lz = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function qz(e, t) {
  const r = lo(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, a = In(e) ? ti(e) : Tn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = s * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function n_(e, t, r) {
  let o;
  if (t === "viewport")
    o = Oz(e, r);
  else if (t === "document")
    o = Mz(On(e));
  else if (mn(t))
    o = qz(t, r);
  else {
    const s = FN(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Ql(o);
}
function BN(e, t) {
  const r = Tr(e);
  return r === t || !mn(r) || ci(r) ? !1 : gn(r).position === "fixed" || BN(r, t);
}
function Dz(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = Ls(e, [], !1).filter((u) => mn(u) && hi(u) !== "body"), s = null;
  const a = gn(e).position === "fixed";
  let l = a ? Tr(e) : e;
  for (; mn(l) && !ci(l); ) {
    const u = gn(l), f = Cy(l);
    !f && u.position === "fixed" && (s = null), (a ? !f && !s : !f && u.position === "static" && !!s && Lz.has(s.position) || Ws(l) && !f && BN(e, l)) ? o = o.filter((h) => h !== l) : s = u, l = Tr(l);
  }
  return t.set(e, o), o;
}
function jz(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? wu(t) ? [] : Dz(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((d, h) => {
    const m = n_(t, h, s);
    return d.top = qt(m.top, d.top), d.right = Pr(m.right, d.right), d.bottom = Pr(m.bottom, d.bottom), d.left = qt(m.left, d.left), d;
  }, n_(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function zz(e) {
  const {
    width: t,
    height: r
  } = zN(e);
  return {
    width: t,
    height: r
  };
}
function Fz(e, t, r) {
  const o = In(t), s = On(t), a = r === "fixed", l = lo(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Tn(0);
  function d() {
    f.x = _u(s);
  }
  if (o || !o && !a)
    if ((hi(t) !== "body" || Ws(s)) && (u = xu(t)), o) {
      const w = lo(t, !0, a, t);
      f.x = w.x + t.clientLeft, f.y = w.y + t.clientTop;
    } else s && d();
  a && !o && s && d();
  const h = s && !o && !a ? $N(s, u) : Tn(0), m = l.left + u.scrollLeft - f.x - h.x, g = l.top + u.scrollTop - f.y - h.y;
  return {
    x: m,
    y: g,
    width: l.width,
    height: l.height
  };
}
function id(e) {
  return gn(e).position === "static";
}
function r_(e, t) {
  if (!In(e) || gn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return On(e) === r && (r = r.ownerDocument.body), r;
}
function VN(e, t) {
  const r = jt(e);
  if (wu(e))
    return r;
  if (!In(e)) {
    let s = Tr(e);
    for (; s && !ci(s); ) {
      if (mn(s) && !id(s))
        return s;
      s = Tr(s);
    }
    return r;
  }
  let o = r_(e, t);
  for (; o && bz(o) && id(o); )
    o = r_(o, t);
  return o && ci(o) && id(o) && !Cy(o) ? r : o || Rz(e) || r;
}
const $z = async function(e) {
  const t = this.getOffsetParent || VN, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: Fz(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Bz(e) {
  return gn(e).direction === "rtl";
}
const Vz = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Az,
  getDocumentElement: On,
  getClippingRect: jz,
  getOffsetParent: VN,
  getElementRects: $z,
  getClientRects: Iz,
  getDimensions: zz,
  getScale: ti,
  isElement: mn,
  isRTL: Bz
};
function HN(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Hz(e, t) {
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
      top: m,
      width: g,
      height: w
    } = d;
    if (u || t(), !g || !w)
      return;
    const E = bl(m), y = bl(s.clientWidth - (h + g)), x = bl(s.clientHeight - (m + w)), S = bl(h), _ = {
      rootMargin: -E + "px " + -y + "px " + -x + "px " + -S + "px",
      threshold: qt(0, Pr(1, f)) || 1
    };
    let k = !0;
    function N(P) {
      const A = P[0].intersectionRatio;
      if (A !== f) {
        if (!k)
          return l();
        A ? l(!1, A) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !HN(d, e.getBoundingClientRect()) && l(), k = !1;
    }
    try {
      r = new IntersectionObserver(N, {
        ..._,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(N, _);
    }
    r.observe(e);
  }
  return l(!0), a;
}
function Wz(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = Ry(e), h = s || a ? [...d ? Ls(d) : [], ...Ls(t)] : [];
  h.forEach((S) => {
    s && S.addEventListener("scroll", r, {
      passive: !0
    }), a && S.addEventListener("resize", r);
  });
  const m = d && u ? Hz(d, r) : null;
  let g = -1, w = null;
  l && (w = new ResizeObserver((S) => {
    let [C] = S;
    C && C.target === d && w && (w.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var _;
      (_ = w) == null || _.observe(t);
    })), r();
  }), d && !f && w.observe(d), w.observe(t));
  let E, y = f ? lo(e) : null;
  f && x();
  function x() {
    const S = lo(e);
    y && !HN(y, S) && r(), y = S, E = requestAnimationFrame(x);
  }
  return r(), () => {
    var S;
    h.forEach((C) => {
      s && C.removeEventListener("scroll", r), a && C.removeEventListener("resize", r);
    }), m == null || m(), (S = w) == null || S.disconnect(), w = null, f && cancelAnimationFrame(E);
  };
}
const Uz = gz, Gz = vz, Yz = hz, Kz = wz, Xz = pz, o_ = dz, Qz = yz, Zz = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Vz,
    ...r
  }, a = {
    ...s.platform,
    _c: o
  };
  return fz(e, t, {
    ...s,
    platform: a
  });
};
var Jz = typeof document < "u", eF = function() {
}, Ll = Jz ? R.useLayoutEffect : eF;
function Zl(e, t) {
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
        if (!Zl(e[o], t[o]))
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
      if (!(a === "_owner" && e.$$typeof) && !Zl(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function WN(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function i_(e, t) {
  const r = WN(e);
  return Math.round(t * r) / r;
}
function sd(e) {
  const t = R.useRef(e);
  return Ll(() => {
    t.current = e;
  }), t;
}
function tF(e) {
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
  } = e, [h, m] = R.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, w] = R.useState(o);
  Zl(g, o) || w(o);
  const [E, y] = R.useState(null), [x, S] = R.useState(null), C = R.useCallback((M) => {
    M !== P.current && (P.current = M, y(M));
  }, []), _ = R.useCallback((M) => {
    M !== A.current && (A.current = M, S(M));
  }, []), k = a || E, N = l || x, P = R.useRef(null), A = R.useRef(null), O = R.useRef(h), D = f != null, G = sd(f), B = sd(s), V = sd(d), X = R.useCallback(() => {
    if (!P.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: g
    };
    B.current && (M.platform = B.current), Zz(P.current, A.current, M).then((j) => {
      const Q = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !Zl(O.current, Q) && (O.current = Q, Vs.flushSync(() => {
        m(Q);
      }));
    });
  }, [g, t, r, B, V]);
  Ll(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, m((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = R.useRef(!1);
  Ll(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Ll(() => {
    if (k && (P.current = k), N && (A.current = N), k && N) {
      if (G.current)
        return G.current(k, N, X);
      X();
    }
  }, [k, N, X, G, D]);
  const H = R.useMemo(() => ({
    reference: P,
    floating: A,
    setReference: C,
    setFloating: _
  }), [C, _]), $ = R.useMemo(() => ({
    reference: k,
    floating: N
  }), [k, N]), Y = R.useMemo(() => {
    const M = {
      position: r,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return M;
    const j = i_($.floating, h.x), Q = i_($.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + j + "px, " + Q + "px)",
      ...WN($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: j,
      top: Q
    };
  }, [r, u, $.floating, h.x, h.y]);
  return R.useMemo(() => ({
    ...h,
    update: X,
    refs: H,
    elements: $,
    floatingStyles: Y
  }), [h, X, H, $, Y]);
}
const nF = (e) => {
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
      return o && t(o) ? o.current != null ? o_({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? o_({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, rF = (e, t) => ({
  ...Uz(e),
  options: [e, t]
}), oF = (e, t) => ({
  ...Gz(e),
  options: [e, t]
}), iF = (e, t) => ({
  ...Qz(e),
  options: [e, t]
}), sF = (e, t) => ({
  ...Yz(e),
  options: [e, t]
}), aF = (e, t) => ({
  ...Kz(e),
  options: [e, t]
}), lF = (e, t) => ({
  ...Xz(e),
  options: [e, t]
}), uF = (e, t) => ({
  ...nF(e),
  options: [e, t]
});
var cF = "Arrow", UN = R.forwardRef((e, t) => {
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
UN.displayName = cF;
var fF = UN;
function GN(e) {
  const [t, r] = R.useState(void 0);
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
var Ny = "Popper", [YN, KN] = vu(Ny), [dF, XN] = YN(Ny), QN = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = R.useState(null);
  return /* @__PURE__ */ I.jsx(dF, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
QN.displayName = Ny;
var ZN = "PopperAnchor", JN = R.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, a = XN(ZN, r), l = R.useRef(null), u = tt(t, l), f = R.useRef(null);
    return R.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ I.jsx($e.div, { ...s, ref: u });
  }
);
JN.displayName = ZN;
var Py = "PopperContent", [hF, pF] = YN(Py), eP = R.forwardRef(
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
      sticky: m = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: E,
      ...y
    } = e, x = XN(Py, r), [S, C] = R.useState(null), _ = tt(t, (pe) => C(pe)), [k, N] = R.useState(null), P = GN(k), A = (P == null ? void 0 : P.width) ?? 0, O = (P == null ? void 0 : P.height) ?? 0, D = o + (a !== "center" ? "-" + a : ""), G = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, B = Array.isArray(d) ? d : [d], V = B.length > 0, X = {
      padding: G,
      boundary: B.filter(gF),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: $, isPositioned: Y, middlewareData: M } = tF({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...pe) => Wz(...pe, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        rF({ mainAxis: s + O, alignmentAxis: l }),
        f && oF({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? iF() : void 0,
          ...X
        }),
        f && sF({ ...X }),
        aF({
          ...X,
          apply: ({ elements: pe, rects: be, availableWidth: ge, availableHeight: Ne }) => {
            const { width: Ee, height: Ze } = be.reference, Ve = pe.floating.style;
            Ve.setProperty("--radix-popper-available-width", `${ge}px`), Ve.setProperty("--radix-popper-available-height", `${Ne}px`), Ve.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ve.setProperty("--radix-popper-anchor-height", `${Ze}px`);
          }
        }),
        k && uF({ element: k, padding: u }),
        vF({ arrowWidth: A, arrowHeight: O }),
        g && lF({ strategy: "referenceHidden", ...X })
      ]
    }), [j, Q] = rP($), q = ao(E);
    yt(() => {
      Y && (q == null || q());
    }, [Y, q]);
    const W = (K = M.arrow) == null ? void 0 : K.x, ie = (te = M.arrow) == null ? void 0 : te.y, F = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = R.useState();
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
          hF,
          {
            scope: r,
            placedSide: j,
            onArrowChange: N,
            arrowX: W,
            arrowY: ie,
            shouldHideArrow: F,
            children: /* @__PURE__ */ I.jsx(
              $e.div,
              {
                "data-side": j,
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
eP.displayName = Py;
var tP = "PopperArrow", mF = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, nP = R.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, a = pF(tP, o), l = mF[a.placedSide];
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
          fF,
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
nP.displayName = tP;
function gF(e) {
  return e !== null;
}
var vF = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, S, C;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = rP(r), m = { start: "0%", center: "50%", end: "100%" }[h], g = (((S = s.arrow) == null ? void 0 : S.x) ?? 0) + u / 2, w = (((C = s.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = l ? m : `${g}px`, y = `${-f}px`) : d === "top" ? (E = l ? m : `${g}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = l ? m : `${w}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = l ? m : `${w}px`), { data: { x: E, y } };
  }
});
function rP(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var yF = QN, wF = JN, xF = eP, _F = nP, bF = "Portal", oP = R.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, a] = R.useState(!1);
  yt(() => a(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? sD.createPortal(/* @__PURE__ */ I.jsx($e.div, { ...o, ref: t }), l) : null;
});
oP.displayName = bF;
// @__NO_SIDE_EFFECTS__
function SF(e) {
  const t = /* @__PURE__ */ EF(e), r = R.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = R.Children.toArray(a), f = u.find(kF);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function EF(e) {
  const t = R.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (R.isValidElement(s)) {
      const l = NF(s), u = RF(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Hs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var CF = Symbol("radix.slottable");
function kF(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === CF;
}
function RF(e, t) {
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
function NF(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var PF = ry[" useInsertionEffect ".trim().toString()] || yt;
function Yv({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: o
}) {
  const [s, a, l] = TF({
    defaultProp: t,
    onChange: r
  }), u = e !== void 0, f = u ? e : s;
  {
    const h = R.useRef(e !== void 0);
    R.useEffect(() => {
      const m = h.current;
      m !== u && console.warn(
        `${o} is changing from ${m ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), h.current = u;
    }, [u, o]);
  }
  const d = R.useCallback(
    (h) => {
      var m;
      if (u) {
        const g = AF(h) ? h(e) : h;
        g !== e && ((m = l.current) == null || m.call(l, g));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function TF({
  defaultProp: e,
  onChange: t
}) {
  const [r, o] = R.useState(e), s = R.useRef(r), a = R.useRef(t);
  return PF(() => {
    a.current = t;
  }, [t]), R.useEffect(() => {
    var l;
    s.current !== r && ((l = a.current) == null || l.call(a, r), s.current = r);
  }, [r, s]), [r, o, a];
}
function AF(e) {
  return typeof e == "function";
}
function iP(e) {
  const t = R.useRef({ value: e, previous: e });
  return R.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var sP = Object.freeze({
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
}), IF = "VisuallyHidden", MF = R.forwardRef(
  (e, t) => /* @__PURE__ */ I.jsx(
    $e.span,
    {
      ...e,
      ref: t,
      style: { ...sP, ...e.style }
    }
  )
);
MF.displayName = IF;
var OF = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Uo = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), El = {}, ad = 0, aP = function(e) {
  return e && (e.host || aP(e.parentNode));
}, LF = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = aP(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, qF = function(e, t, r, o) {
  var s = LF(t, Array.isArray(e) ? e : [e]);
  El[r] || (El[r] = /* @__PURE__ */ new WeakMap());
  var a = El[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), d = function(m) {
    !m || u.has(m) || (u.add(m), d(m.parentNode));
  };
  s.forEach(d);
  var h = function(m) {
    !m || f.has(m) || Array.prototype.forEach.call(m.children, function(g) {
      if (u.has(g))
        h(g);
      else
        try {
          var w = g.getAttribute(o), E = w !== null && w !== "false", y = (Uo.get(g) || 0) + 1, x = (a.get(g) || 0) + 1;
          Uo.set(g, y), a.set(g, x), l.push(g), y === 1 && E && Sl.set(g, !0), x === 1 && g.setAttribute(r, "true"), E || g.setAttribute(o, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", g, S);
        }
    });
  };
  return h(t), u.clear(), ad++, function() {
    l.forEach(function(m) {
      var g = Uo.get(m) - 1, w = a.get(m) - 1;
      Uo.set(m, g), a.set(m, w), g || (Sl.has(m) || m.removeAttribute(o), Sl.delete(m)), w || m.removeAttribute(r);
    }), ad--, ad || (Uo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Sl = /* @__PURE__ */ new WeakMap(), El = {});
  };
}, DF = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = OF(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), qF(o, s, r, "aria-hidden")) : function() {
    return null;
  };
}, Rn = function() {
  return Rn = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Rn.apply(this, arguments);
};
function lP(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function jF(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ql = "right-scroll-bar-position", Dl = "width-before-scroll-bar", zF = "with-scroll-bars-hidden", FF = "--removed-body-scroll-bar-size";
function ld(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $F(e, t) {
  var r = R.useState(function() {
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
var BF = typeof window < "u" ? R.useLayoutEffect : R.useEffect, s_ = /* @__PURE__ */ new WeakMap();
function VF(e, t) {
  var r = $F(null, function(o) {
    return e.forEach(function(s) {
      return ld(s, o);
    });
  });
  return BF(function() {
    var o = s_.get(r);
    if (o) {
      var s = new Set(o), a = new Set(e), l = r.current;
      s.forEach(function(u) {
        a.has(u) || ld(u, null);
      }), a.forEach(function(u) {
        s.has(u) || ld(u, l);
      });
    }
    s_.set(r, e);
  }, [e]), r;
}
function HF(e) {
  return e;
}
function WF(e, t) {
  t === void 0 && (t = HF);
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
function UF(e) {
  e === void 0 && (e = {});
  var t = WF(null);
  return t.options = Rn({ async: !0, ssr: !1 }, e), t;
}
var uP = function(e) {
  var t = e.sideCar, r = lP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return R.createElement(o, Rn({}, r));
};
uP.isSideCarExport = !0;
function GF(e, t) {
  return e.useMedium(t), uP;
}
var cP = UF(), ud = function() {
}, bu = R.forwardRef(function(e, t) {
  var r = R.useRef(null), o = R.useState({
    onScrollCapture: ud,
    onWheelCapture: ud,
    onTouchMoveCapture: ud
  }), s = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, m = e.shards, g = e.sideCar, w = e.noRelative, E = e.noIsolation, y = e.inert, x = e.allowPinchZoom, S = e.as, C = S === void 0 ? "div" : S, _ = e.gapMode, k = lP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = g, P = VF([r, t]), A = Rn(Rn({}, k), s);
  return R.createElement(
    R.Fragment,
    null,
    h && R.createElement(N, { sideCar: cP, removeScrollBar: d, shards: m, noRelative: w, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: r, gapMode: _ }),
    l ? R.cloneElement(R.Children.only(u), Rn(Rn({}, A), { ref: P })) : R.createElement(C, Rn({}, A, { className: f, ref: P }), u)
  );
});
bu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
bu.classNames = {
  fullWidth: Dl,
  zeroRight: ql
};
var YF = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function KF() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = YF();
  return t && e.setAttribute("nonce", t), e;
}
function XF(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function QF(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ZF = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = KF()) && (XF(t, r), QF(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, JF = function() {
  var e = ZF();
  return function(t, r) {
    R.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, fP = function() {
  var e = JF(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, e4 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cd = function(e) {
  return parseInt(e || "", 10) || 0;
}, t4 = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cd(r), cd(o), cd(s)];
}, n4 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return e4;
  var t = t4(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, r4 = fP(), ni = "data-scroll-locked", o4 = function(e, t, r, o) {
  var s = e.left, a = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(zF, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(ni, `] {
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
  
  .`).concat(ql, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Dl, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(ql, " .").concat(ql, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Dl, " .").concat(Dl, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ni, `] {
    `).concat(FF, ": ").concat(u, `px;
  }
`);
}, a_ = function() {
  var e = parseInt(document.body.getAttribute(ni) || "0", 10);
  return isFinite(e) ? e : 0;
}, i4 = function() {
  R.useEffect(function() {
    return document.body.setAttribute(ni, (a_() + 1).toString()), function() {
      var e = a_() - 1;
      e <= 0 ? document.body.removeAttribute(ni) : document.body.setAttribute(ni, e.toString());
    };
  }, []);
}, s4 = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  i4();
  var a = R.useMemo(function() {
    return n4(s);
  }, [s]);
  return R.createElement(r4, { styles: o4(a, !t, s, r ? "" : "!important") });
}, Kv = !1;
if (typeof window < "u")
  try {
    var Cl = Object.defineProperty({}, "passive", {
      get: function() {
        return Kv = !0, !0;
      }
    });
    window.addEventListener("test", Cl, Cl), window.removeEventListener("test", Cl, Cl);
  } catch {
    Kv = !1;
  }
var Go = Kv ? { passive: !1 } : !1, a4 = function(e) {
  return e.tagName === "TEXTAREA";
}, dP = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !a4(e) && r[t] === "visible")
  );
}, l4 = function(e) {
  return dP(e, "overflowY");
}, u4 = function(e) {
  return dP(e, "overflowX");
}, l_ = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = hP(e, o);
    if (s) {
      var a = pP(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, c4 = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, f4 = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, hP = function(e, t) {
  return e === "v" ? l4(t) : u4(t);
}, pP = function(e, t) {
  return e === "v" ? c4(t) : f4(t);
}, d4 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, h4 = function(e, t, r, o, s) {
  var a = d4(e, window.getComputedStyle(t).direction), l = a * o, u = r.target, f = t.contains(u), d = !1, h = l > 0, m = 0, g = 0;
  do {
    if (!u)
      break;
    var w = pP(e, u), E = w[0], y = w[1], x = w[2], S = y - x - a * E;
    (E || S) && hP(e, u) && (m += S, g += E);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(m) < 1 || !h && Math.abs(g) < 1) && (d = !0), d;
}, kl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, u_ = function(e) {
  return [e.deltaX, e.deltaY];
}, c_ = function(e) {
  return e && "current" in e ? e.current : e;
}, p4 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, m4 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, g4 = 0, Yo = [];
function v4(e) {
  var t = R.useRef([]), r = R.useRef([0, 0]), o = R.useRef(), s = R.useState(g4++)[0], a = R.useState(fP)[0], l = R.useRef(e);
  R.useEffect(function() {
    l.current = e;
  }, [e]), R.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var y = jF([e.lockRef.current], (e.shards || []).map(c_), !0).filter(Boolean);
      return y.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), y.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = R.useCallback(function(y, x) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !l.current.allowPinchZoom;
    var S = kl(y), C = r.current, _ = "deltaX" in y ? y.deltaX : C[0] - S[0], k = "deltaY" in y ? y.deltaY : C[1] - S[1], N, P = y.target, A = Math.abs(_) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && A === "h" && P.type === "range")
      return !1;
    var O = l_(A, P);
    if (!O)
      return !0;
    if (O ? N = A : (N = A === "v" ? "h" : "v", O = l_(A, P)), !O)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || k) && (o.current = N), !N)
      return !0;
    var D = o.current || N;
    return h4(D, x, y, D === "h" ? _ : k);
  }, []), f = R.useCallback(function(y) {
    var x = y;
    if (!(!Yo.length || Yo[Yo.length - 1] !== a)) {
      var S = "deltaY" in x ? u_(x) : kl(x), C = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && p4(N.delta, S);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var _ = (l.current.shards || []).map(c_).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), k = _.length > 0 ? u(x, _[0]) : !l.current.noIsolation;
        k && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = R.useCallback(function(y, x, S, C) {
    var _ = { name: y, delta: x, target: S, should: C, shadowParent: y4(S) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== _;
      });
    }, 1);
  }, []), h = R.useCallback(function(y) {
    r.current = kl(y), o.current = void 0;
  }, []), m = R.useCallback(function(y) {
    d(y.type, u_(y), y.target, u(y, e.lockRef.current));
  }, []), g = R.useCallback(function(y) {
    d(y.type, kl(y), y.target, u(y, e.lockRef.current));
  }, []);
  R.useEffect(function() {
    return Yo.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", f, Go), document.addEventListener("touchmove", f, Go), document.addEventListener("touchstart", h, Go), function() {
      Yo = Yo.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", f, Go), document.removeEventListener("touchmove", f, Go), document.removeEventListener("touchstart", h, Go);
    };
  }, []);
  var w = e.removeScrollBar, E = e.inert;
  return R.createElement(
    R.Fragment,
    null,
    E ? R.createElement(a, { styles: m4(s) }) : null,
    w ? R.createElement(s4, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function y4(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const w4 = GF(cP, v4);
var mP = R.forwardRef(function(e, t) {
  return R.createElement(bu, Rn({}, e, { ref: t, sideCar: w4 }));
});
mP.classNames = bu.classNames;
var x4 = [" ", "Enter", "ArrowUp", "ArrowDown"], _4 = [" ", "Enter"], uo = "Select", [Su, Eu, b4] = C3(uo), [pi] = vu(uo, [
  b4,
  KN
]), Cu = KN(), [S4, Ir] = pi(uo), [E4, C4] = pi(uo), gP = (e) => {
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
    autoComplete: m,
    disabled: g,
    required: w,
    form: E
  } = e, y = Cu(t), [x, S] = R.useState(null), [C, _] = R.useState(null), [k, N] = R.useState(!1), P = R3(d), [A, O] = Yv({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: uo
  }), [D, G] = Yv({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: uo
  }), B = R.useRef(null), V = x ? E || !!x.closest("form") : !0, [X, L] = R.useState(/* @__PURE__ */ new Set()), H = Array.from(X).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ I.jsx(yF, { ...y, children: /* @__PURE__ */ I.jsxs(
    S4,
    {
      required: w,
      scope: t,
      trigger: x,
      onTriggerChange: S,
      valueNode: C,
      onValueNodeChange: _,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: N,
      contentId: _y(),
      value: D,
      onValueChange: G,
      open: A,
      onOpenChange: O,
      dir: P,
      triggerPointerDownPosRef: B,
      disabled: g,
      children: [
        /* @__PURE__ */ I.jsx(Su.Provider, { scope: t, children: /* @__PURE__ */ I.jsx(
          E4,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: R.useCallback(($) => {
              L((Y) => new Set(Y).add($));
            }, []),
            onNativeOptionRemove: R.useCallback(($) => {
              L((Y) => {
                const M = new Set(Y);
                return M.delete($), M;
              });
            }, []),
            children: r
          }
        ) }),
        V ? /* @__PURE__ */ I.jsxs(
          jP,
          {
            "aria-hidden": !0,
            required: w,
            tabIndex: -1,
            name: h,
            autoComplete: m,
            value: D,
            onChange: ($) => G($.target.value),
            disabled: g,
            form: E,
            children: [
              D === void 0 ? /* @__PURE__ */ I.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
gP.displayName = uo;
var vP = "SelectTrigger", yP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, a = Cu(r), l = Ir(vP, r), u = l.disabled || o, f = tt(t, l.onTriggerChange), d = Eu(r), h = R.useRef("touch"), [m, g, w] = FP((y) => {
      const x = d().filter((_) => !_.disabled), S = x.find((_) => _.value === l.value), C = $P(x, y, S);
      C !== void 0 && l.onValueChange(C.value);
    }), E = (y) => {
      u || (l.onOpenChange(!0), w()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ I.jsx(wF, { asChild: !0, ...a, children: /* @__PURE__ */ I.jsx(
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
        "data-placeholder": zP(l.value) ? "" : void 0,
        ...s,
        ref: f,
        onClick: Qe(s.onClick, (y) => {
          y.currentTarget.focus(), h.current !== "mouse" && E(y);
        }),
        onPointerDown: Qe(s.onPointerDown, (y) => {
          h.current = y.pointerType;
          const x = y.target;
          x.hasPointerCapture(y.pointerId) && x.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (E(y), y.preventDefault());
        }),
        onKeyDown: Qe(s.onKeyDown, (y) => {
          const x = m.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && g(y.key), !(x && y.key === " ") && x4.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
yP.displayName = vP;
var wP = "SelectValue", xP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: a, placeholder: l = "", ...u } = e, f = Ir(wP, r), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, m = tt(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ I.jsx(
      $e.span,
      {
        ...u,
        ref: m,
        style: { pointerEvents: "none" },
        children: zP(f.value) ? /* @__PURE__ */ I.jsx(I.Fragment, { children: l }) : a
      }
    );
  }
);
xP.displayName = wP;
var k4 = "SelectIcon", _P = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ I.jsx($e.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
_P.displayName = k4;
var R4 = "SelectPortal", bP = (e) => /* @__PURE__ */ I.jsx(oP, { asChild: !0, ...e });
bP.displayName = R4;
var co = "SelectContent", SP = R.forwardRef(
  (e, t) => {
    const r = Ir(co, e.__scopeSelect), [o, s] = R.useState();
    if (yt(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const a = o;
      return a ? Vs.createPortal(
        /* @__PURE__ */ I.jsx(EP, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx(Su.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ I.jsx(CP, { ...e, ref: t });
  }
);
SP.displayName = co;
var un = 10, [EP, Mr] = pi(co), N4 = "SelectContentImpl", P4 = /* @__PURE__ */ SF("SelectContent.RemoveScroll"), CP = R.forwardRef(
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
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: x,
      //
      ...S
    } = e, C = Ir(co, r), [_, k] = R.useState(null), [N, P] = R.useState(null), A = tt(t, (K) => k(K)), [O, D] = R.useState(null), [G, B] = R.useState(
      null
    ), V = Eu(r), [X, L] = R.useState(!1), H = R.useRef(!1);
    R.useEffect(() => {
      if (_) return DF(_);
    }, [_]), H3();
    const $ = R.useCallback(
      (K) => {
        const [te, ...se] = V().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of K)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && N && (N.scrollTop = 0), de === ae && N && (N.scrollTop = N.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [V, N]
    ), Y = R.useCallback(
      () => $([O, _]),
      [$, O, _]
    );
    R.useEffect(() => {
      X && Y();
    }, [X, Y]);
    const { onOpenChange: M, triggerPointerDownPosRef: j } = C;
    R.useEffect(() => {
      if (_) {
        let K = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          K = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = j.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = j.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          K.x <= 10 && K.y <= 10 ? ae.preventDefault() : _.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [_, M, j]), R.useEffect(() => {
      const K = () => M(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [M]);
    const [Q, q] = FP((K) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = $P(te, K, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), W = R.useCallback(
      (K, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (D(K), ae && (H.current = !0));
      },
      [C.value]
    ), ie = R.useCallback(() => _ == null ? void 0 : _.focus(), [_]), F = R.useCallback(
      (K, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && B(K);
      },
      [C.value]
    ), Z = o === "popper" ? Xv : kP, ee = Z === Xv ? {
      side: u,
      sideOffset: f,
      align: d,
      alignOffset: h,
      arrowPadding: m,
      collisionBoundary: g,
      collisionPadding: w,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ I.jsx(
      EP,
      {
        scope: r,
        content: _,
        viewport: N,
        onViewportChange: P,
        itemRefCallback: W,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: F,
        focusSelectedItem: Y,
        selectedItemText: G,
        position: o,
        isPositioned: X,
        searchRef: Q,
        children: /* @__PURE__ */ I.jsx(mP, { as: P4, allowPinchZoom: !0, children: /* @__PURE__ */ I.jsx(
          MN,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (K) => {
              K.preventDefault();
            },
            onUnmountAutoFocus: Qe(s, (K) => {
              var te;
              (te = C.trigger) == null || te.focus({ preventScroll: !0 }), K.preventDefault();
            }),
            children: /* @__PURE__ */ I.jsx(
              AN,
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
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...S.style
                    },
                    onKeyDown: Qe(S.onKeyDown, (K) => {
                      const te = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !te && K.key.length === 1 && q(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
                        let ae = V().filter((ce) => !ce.disabled).map((ce) => ce.ref.current);
                        if (["ArrowUp", "End"].includes(K.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
                          const ce = K.target, de = ae.indexOf(ce);
                          ae = ae.slice(de + 1);
                        }
                        setTimeout(() => $(ae)), K.preventDefault();
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
CP.displayName = N4;
var T4 = "SelectItemAlignedPosition", kP = R.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, a = Ir(co, r), l = Mr(co, r), [u, f] = R.useState(null), [d, h] = R.useState(null), m = tt(t, (A) => h(A)), g = Eu(r), w = R.useRef(!1), E = R.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = l, _ = R.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && S) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), G = S.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = G.left - O.left, de = D.left - ce, pe = A.left - de, be = A.width + pe, ge = Math.max(be, O.width), Ne = window.innerWidth - un, Ee = z1(de, [
          un,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(un, Ne - ge)
        ]);
        u.style.minWidth = be + "px", u.style.left = Ee + "px";
      } else {
        const ce = O.right - G.right, de = window.innerWidth - D.right - ce, pe = window.innerWidth - A.right - de, be = A.width + pe, ge = Math.max(be, O.width), Ne = window.innerWidth - un, Ee = z1(de, [
          un,
          Math.max(un, Ne - ge)
        ]);
        u.style.minWidth = be + "px", u.style.right = Ee + "px";
      }
      const B = g(), V = window.innerHeight - un * 2, X = y.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), $ = parseInt(L.paddingTop, 10), Y = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), j = H + $ + X + M + Y, Q = Math.min(x.offsetHeight * 5, j), q = window.getComputedStyle(y), W = parseInt(q.paddingTop, 10), ie = parseInt(q.paddingBottom, 10), F = A.top + A.height / 2 - un, Z = V - F, ee = x.offsetHeight / 2, K = x.offsetTop + ee, te = H + $ + K, se = j - te;
      if (te <= F) {
        const ce = B.length > 0 && x === B[B.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + Y
        ), be = te + pe;
        u.style.height = be + "px";
      } else {
        const ce = B.length > 0 && x === B[0].ref.current;
        u.style.top = "0px";
        const pe = Math.max(
          F,
          H + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ce ? W : 0) + ee
        ) + se;
        u.style.height = pe + "px", y.scrollTop = te - F + y.offsetTop;
      }
      u.style.margin = `${un}px 0`, u.style.minHeight = Q + "px", u.style.maxHeight = V + "px", o == null || o(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    g,
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
  const [k, N] = R.useState();
  yt(() => {
    d && N(window.getComputedStyle(d).zIndex);
  }, [d]);
  const P = R.useCallback(
    (A) => {
      A && E.current === !0 && (_(), C == null || C(), E.current = !1);
    },
    [_, C]
  );
  return /* @__PURE__ */ I.jsx(
    I4,
    {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: P,
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
              ref: m,
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
kP.displayName = T4;
var A4 = "SelectPopperPosition", Xv = R.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = un,
    ...a
  } = e, l = Cu(r);
  return /* @__PURE__ */ I.jsx(
    xF,
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
Xv.displayName = A4;
var [I4, Ty] = pi(co, {}), Qv = "SelectViewport", RP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, a = Mr(Qv, r), l = Ty(Qv, r), u = tt(t, a.onViewportChange), f = R.useRef(0);
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
      /* @__PURE__ */ I.jsx(Su.Slot, { scope: r, children: /* @__PURE__ */ I.jsx(
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
          onScroll: Qe(s.onScroll, (d) => {
            const h = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: g } = l;
            if (g != null && g.current && m) {
              const w = Math.abs(f.current - h.scrollTop);
              if (w > 0) {
                const E = window.innerHeight - un * 2, y = parseFloat(m.style.minHeight), x = parseFloat(m.style.height), S = Math.max(y, x);
                if (S < E) {
                  const C = S + w, _ = Math.min(E, C), k = C - _;
                  m.style.height = _ + "px", m.style.bottom === "0px" && (h.scrollTop = k > 0 ? k : 0, m.style.justifyContent = "flex-end");
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
RP.displayName = Qv;
var NP = "SelectGroup", [M4, O4] = pi(NP), L4 = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = _y();
    return /* @__PURE__ */ I.jsx(M4, { scope: r, id: s, children: /* @__PURE__ */ I.jsx($e.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
L4.displayName = NP;
var PP = "SelectLabel", q4 = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = O4(PP, r);
    return /* @__PURE__ */ I.jsx($e.div, { id: s.id, ...o, ref: t });
  }
);
q4.displayName = PP;
var Jl = "SelectItem", [D4, TP] = pi(Jl), AP = R.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: a,
      ...l
    } = e, u = Ir(Jl, r), f = Mr(Jl, r), d = u.value === o, [h, m] = R.useState(a ?? ""), [g, w] = R.useState(!1), E = tt(
      t,
      (C) => {
        var _;
        return (_ = f.itemRefCallback) == null ? void 0 : _.call(f, C, o, s);
      }
    ), y = _y(), x = R.useRef("touch"), S = () => {
      s || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ I.jsx(
      D4,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: y,
        isSelected: d,
        onItemTextChange: R.useCallback((C) => {
          m((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ I.jsx(
          Su.ItemSlot,
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
                "data-highlighted": g ? "" : void 0,
                "aria-selected": d && g,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...l,
                ref: E,
                onFocus: Qe(l.onFocus, () => w(!0)),
                onBlur: Qe(l.onBlur, () => w(!1)),
                onClick: Qe(l.onClick, () => {
                  x.current !== "mouse" && S();
                }),
                onPointerUp: Qe(l.onPointerUp, () => {
                  x.current === "mouse" && S();
                }),
                onPointerDown: Qe(l.onPointerDown, (C) => {
                  x.current = C.pointerType;
                }),
                onPointerMove: Qe(l.onPointerMove, (C) => {
                  var _;
                  x.current = C.pointerType, s ? (_ = f.onItemLeave) == null || _.call(f) : x.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Qe(l.onPointerLeave, (C) => {
                  var _;
                  C.currentTarget === document.activeElement && ((_ = f.onItemLeave) == null || _.call(f));
                }),
                onKeyDown: Qe(l.onKeyDown, (C) => {
                  var k;
                  ((k = f.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (_4.includes(C.key) && S(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
AP.displayName = Jl;
var vs = "SelectItemText", IP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...a } = e, l = Ir(vs, r), u = Mr(vs, r), f = TP(vs, r), d = C4(vs, r), [h, m] = R.useState(null), g = tt(
      t,
      (S) => m(S),
      f.onItemTextChange,
      (S) => {
        var C;
        return (C = u.itemTextRefCallback) == null ? void 0 : C.call(u, S, f.value, f.disabled);
      }
    ), w = h == null ? void 0 : h.textContent, E = R.useMemo(
      () => /* @__PURE__ */ I.jsx("option", { value: f.value, disabled: f.disabled, children: w }, f.value),
      [f.disabled, f.value, w]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = d;
    return yt(() => (y(E), () => x(E)), [y, x, E]), /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
      /* @__PURE__ */ I.jsx($e.span, { id: f.textId, ...a, ref: g }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? Vs.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
IP.displayName = vs;
var MP = "SelectItemIndicator", OP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return TP(MP, r).isSelected ? /* @__PURE__ */ I.jsx($e.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
OP.displayName = MP;
var Zv = "SelectScrollUpButton", LP = R.forwardRef((e, t) => {
  const r = Mr(Zv, e.__scopeSelect), o = Ty(Zv, e.__scopeSelect), [s, a] = R.useState(!1), l = tt(t, o.onScrollButtonChange);
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
    DP,
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
LP.displayName = Zv;
var Jv = "SelectScrollDownButton", qP = R.forwardRef((e, t) => {
  const r = Mr(Jv, e.__scopeSelect), o = Ty(Jv, e.__scopeSelect), [s, a] = R.useState(!1), l = tt(t, o.onScrollButtonChange);
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
    DP,
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
qP.displayName = Jv;
var DP = R.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, a = Mr("SelectScrollButton", r), l = R.useRef(null), u = Eu(r), f = R.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return R.useEffect(() => () => f(), [f]), yt(() => {
    var h;
    const d = u().find((m) => m.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ I.jsx(
    $e.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: Qe(s.onPointerDown, () => {
        l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerMove: Qe(s.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), l.current === null && (l.current = window.setInterval(o, 50));
      }),
      onPointerLeave: Qe(s.onPointerLeave, () => {
        f();
      })
    }
  );
}), j4 = "SelectSeparator", z4 = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ I.jsx($e.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
z4.displayName = j4;
var ey = "SelectArrow", F4 = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Cu(r), a = Ir(ey, r), l = Mr(ey, r);
    return a.open && l.position === "popper" ? /* @__PURE__ */ I.jsx(_F, { ...s, ...o, ref: t }) : null;
  }
);
F4.displayName = ey;
var $4 = "SelectBubbleInput", jP = R.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, o) => {
    const s = R.useRef(null), a = tt(o, s), l = iP(t);
    return R.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = window.HTMLSelectElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== t && h) {
        const m = new Event("change", { bubbles: !0 });
        h.call(u, t), u.dispatchEvent(m);
      }
    }, [l, t]), /* @__PURE__ */ I.jsx(
      $e.select,
      {
        ...r,
        style: { ...sP, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
jP.displayName = $4;
function zP(e) {
  return e === "" || e === void 0;
}
function FP(e) {
  const t = ao(e), r = R.useRef(""), o = R.useRef(0), s = R.useCallback(
    (l) => {
      const u = r.current + l;
      t(u), (function f(d) {
        r.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      })(u);
    },
    [t]
  ), a = R.useCallback(() => {
    r.current = "", window.clearTimeout(o.current);
  }, []);
  return R.useEffect(() => () => window.clearTimeout(o.current), []), [r, s, a];
}
function $P(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let l = B4(e, Math.max(a, 0));
  s.length === 1 && (l = l.filter((d) => d !== r));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function B4(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var V4 = gP, H4 = yP, W4 = xP, U4 = _P, G4 = bP, Y4 = SP, K4 = RP, X4 = AP, Q4 = IP, Z4 = OP, J4 = LP, e$ = qP;
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), n$ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), f_ = (e) => {
  const t = n$(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, BP = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim(), r$ = (e) => {
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
var o$ = {
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
const i$ = R.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: l,
    ...u
  }, f) => R.createElement(
    "svg",
    {
      ref: f,
      ...o$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: BP("lucide", s),
      ...!a && !r$(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...l.map(([d, h]) => R.createElement(d, h)),
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
const Ay = (e, t) => {
  const r = R.forwardRef(
    ({ className: o, ...s }, a) => R.createElement(i$, {
      ref: a,
      iconNode: t,
      className: BP(
        `lucide-${t$(f_(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = f_(e), r;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s$ = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], VP = Ay("check", s$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a$ = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], HP = Ay("chevron-down", a$);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l$ = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], u$ = Ay("chevron-up", l$);
function WP(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = WP(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function UP() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = WP(e)) && (o && (o += " "), o += t);
  return o;
}
const c$ = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    r[o] = e[o];
  for (let o = 0; o < t.length; o++)
    r[e.length + o] = t[o];
  return r;
}, f$ = (e, t) => ({
  classGroupId: e,
  validator: t
}), GP = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), eu = "-", d_ = [], d$ = "arbitrary..", h$ = (e) => {
  const t = m$(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return p$(l);
      const u = l.split(eu), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return YP(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = r[l];
        return f ? d ? c$(d, f) : f : d || d_;
      }
      return r[l] || d_;
    }
  };
}, YP = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const s = e[t], a = r.nextPart.get(s);
  if (a) {
    const d = YP(e, t + 1, a);
    if (d) return d;
  }
  const l = r.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(eu) : e.slice(t).join(eu), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, p$ = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), o = t.slice(0, r);
  return o ? d$ + o : void 0;
})(), m$ = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return g$(r, t);
}, g$ = (e, t) => {
  const r = GP();
  for (const o in e) {
    const s = e[o];
    Iy(s, r, o, t);
  }
  return r;
}, Iy = (e, t, r, o) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const l = e[a];
    v$(l, t, r, o);
  }
}, v$ = (e, t, r, o) => {
  if (typeof e == "string") {
    y$(e, t, r);
    return;
  }
  if (typeof e == "function") {
    w$(e, t, r, o);
    return;
  }
  x$(e, t, r, o);
}, y$ = (e, t, r) => {
  const o = e === "" ? t : KP(t, e);
  o.classGroupId = r;
}, w$ = (e, t, r, o) => {
  if (_$(e)) {
    Iy(e(o), t, r, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(f$(r, e));
}, x$ = (e, t, r, o) => {
  const s = Object.entries(e), a = s.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = s[l];
    Iy(f, KP(t, u), r, o);
  }
}, KP = (e, t) => {
  let r = e;
  const o = t.split(eu), s = o.length;
  for (let a = 0; a < s; a++) {
    const l = o[a];
    let u = r.nextPart.get(l);
    u || (u = GP(), r.nextPart.set(l, u)), r = u;
  }
  return r;
}, _$ = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, b$ = (e) => {
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
}, ty = "!", h_ = ":", S$ = [], p_ = (e, t, r, o, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: o,
  isExternal: s
}), E$ = (e) => {
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
        if (x === h_) {
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
    const m = a.length === 0 ? s : s.slice(f);
    let g = m, w = !1;
    m.endsWith(ty) ? (g = m.slice(0, -1), w = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(ty) && (g = m.slice(1), w = !0)
    );
    const E = d && d > f ? d - f : void 0;
    return p_(a, w, g, E);
  };
  if (t) {
    const s = t + h_, a = o;
    o = (l) => l.startsWith(s) ? a(l.slice(s.length)) : p_(S$, !1, l, void 0, !0);
  }
  if (r) {
    const s = o;
    o = (a) => r({
      className: a,
      parseClassName: s
    });
  }
  return o;
}, C$ = (e) => {
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
}, k$ = (e) => ({
  cache: b$(e.cacheSize),
  parseClassName: E$(e),
  sortModifiers: C$(e),
  ...h$(e)
}), R$ = /\s+/, N$ = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(R$);
  let f = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const h = u[d], {
      isExternal: m,
      modifiers: g,
      hasImportantModifier: w,
      baseClassName: E,
      maybePostfixModifierPosition: y
    } = r(h);
    if (m) {
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
    const C = g.length === 0 ? "" : g.length === 1 ? g[0] : a(g).join(":"), _ = w ? C + ty : C, k = _ + S;
    if (l.indexOf(k) > -1)
      continue;
    l.push(k);
    const N = s(S, x);
    for (let P = 0; P < N.length; ++P) {
      const A = N[P];
      l.push(_ + A);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, P$ = (...e) => {
  let t = 0, r, o, s = "";
  for (; t < e.length; )
    (r = e[t++]) && (o = XP(r)) && (s && (s += " "), s += o);
  return s;
}, XP = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = XP(e[o])) && (r && (r += " "), r += t);
  return r;
}, T$ = (e, ...t) => {
  let r, o, s, a;
  const l = (f) => {
    const d = t.reduce((h, m) => m(h), e());
    return r = k$(d), o = r.cache.get, s = r.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = N$(f, r);
    return s(f, h), h;
  };
  return a = l, (...f) => a(P$(...f));
}, A$ = [], st = (e) => {
  const t = (r) => r[e] || A$;
  return t.isThemeGetter = !0, t;
}, QP = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ZP = /^\((?:(\w[\w-]*):)?(.+)\)$/i, I$ = /^\d+\/\d+$/, M$ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, O$ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, L$ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, q$ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, D$ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ko = (e) => I$.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), Er = (e) => !!e && Number.isInteger(Number(e)), fd = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Un = (e) => M$.test(e), j$ = () => !0, z$ = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  O$.test(e) && !L$.test(e)
), JP = () => !1, F$ = (e) => q$.test(e), $$ = (e) => D$.test(e), B$ = (e) => !xe(e) && !_e(e), V$ = (e) => mi(e, nT, JP), xe = (e) => QP.test(e), Jr = (e) => mi(e, rT, z$), dd = (e) => mi(e, Y$, Te), m_ = (e) => mi(e, eT, JP), H$ = (e) => mi(e, tT, $$), Rl = (e) => mi(e, oT, F$), _e = (e) => ZP.test(e), ps = (e) => gi(e, rT), W$ = (e) => gi(e, K$), g_ = (e) => gi(e, eT), U$ = (e) => gi(e, nT), G$ = (e) => gi(e, tT), Nl = (e) => gi(e, oT, !0), mi = (e, t, r) => {
  const o = QP.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, gi = (e, t, r = !1) => {
  const o = ZP.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, eT = (e) => e === "position" || e === "percentage", tT = (e) => e === "image" || e === "url", nT = (e) => e === "length" || e === "size" || e === "bg-size", rT = (e) => e === "length", Y$ = (e) => e === "number", K$ = (e) => e === "family-name", oT = (e) => e === "shadow", X$ = () => {
  const e = st("color"), t = st("font"), r = st("text"), o = st("font-weight"), s = st("tracking"), a = st("leading"), l = st("breakpoint"), u = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), m = st("inset-shadow"), g = st("text-shadow"), w = st("drop-shadow"), E = st("blur"), y = st("perspective"), x = st("aspect"), S = st("ease"), C = st("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], N = () => [...k(), _e, xe], P = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [_e, xe, f], D = () => [Ko, "full", "auto", ...O()], G = () => [Er, "none", "subgrid", _e, xe], B = () => ["auto", {
    span: ["full", Er, _e, xe]
  }, Er, _e, xe], V = () => [Er, "auto", _e, xe], X = () => ["auto", "min", "max", "fr", _e, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...O()], Y = () => [Ko, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, _e, xe], j = () => [...k(), g_, m_, {
    position: [_e, xe]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], q = () => ["auto", "cover", "contain", U$, V$, {
    size: [_e, xe]
  }], W = () => [fd, ps, Jr], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    _e,
    xe
  ], F = () => ["", Te, ps, Jr], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [Te, fd, g_, m_], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    _e,
    xe
  ], se = () => ["none", Te, _e, xe], ae = () => ["none", Te, _e, xe], ce = () => [Te, _e, xe], de = () => [Ko, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Un],
      breakpoint: [Un],
      color: [j$],
      container: [Un],
      "drop-shadow": [Un],
      ease: ["in", "out", "in-out"],
      font: [B$],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Un],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Un],
      shadow: [Un],
      spacing: ["px", Te],
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
        aspect: ["auto", "square", Ko, xe, _e, x]
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
        columns: [Te, xe, _e, u]
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
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
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
        basis: [Ko, "full", "auto", u, ...O()]
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
        flex: [Te, Ko, "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Te, _e, xe]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Te, _e, xe]
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
        "grid-cols": G()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: B()
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
        row: B()
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
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
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
        text: ["base", r, ps, Jr]
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
        font: [o, _e, dd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", fd, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [W$, xe, t]
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
        "line-clamp": [Te, "none", _e, dd]
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
        decoration: [Te, "from-font", "auto", _e, Jr]
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
        "underline-offset": [Te, "auto", _e, xe]
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
        bg: j()
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
        bg: q()
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
        }, G$, H$]
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
        border: F()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": F()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": F()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": F()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": F()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": F()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": F()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": F()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": F()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": F()
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
        "divide-y": F()
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
        "outline-offset": [Te, _e, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Te, ps, Jr]
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
          Nl,
          Rl
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
        "inset-shadow": ["none", m, Nl, Rl]
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
        ring: F()
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
        "ring-offset": [Te, Jr]
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
        "inset-ring": F()
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
        "text-shadow": ["none", g, Nl, Rl]
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
        opacity: [Te, _e, xe]
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
        mask: j()
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
        mask: q()
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
        brightness: [Te, _e, xe]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Te, _e, xe]
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
          Nl,
          Rl
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
        grayscale: ["", Te, _e, xe]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Te, _e, xe]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Te, _e, xe]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Te, _e, xe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Te, _e, xe]
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
        "backdrop-brightness": [Te, _e, xe]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Te, _e, xe]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Te, _e, xe]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Te, _e, xe]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Te, _e, xe]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Te, _e, xe]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Te, _e, xe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Te, _e, xe]
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
        duration: [Te, "initial", _e, xe]
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
        delay: [Te, _e, xe]
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
        "perspective-origin": N()
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
        origin: N()
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
        stroke: [Te, ps, Jr, dd]
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
}, Q$ = /* @__PURE__ */ T$(X$);
function Ye(...e) {
  return Q$(UP(e));
}
function Z$({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(V4, { "data-slot": "select", ...e });
}
function J$({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(W4, { "data-slot": "select-value", ...e });
}
function eB({
  className: e,
  size: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ I.jsxs(
    H4,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Ye(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ I.jsx(U4, { asChild: !0, children: /* @__PURE__ */ I.jsx(HP, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function tB({
  className: e,
  children: t,
  position: r = "popper",
  align: o = "center",
  ...s
}) {
  return /* @__PURE__ */ I.jsx(G4, { children: /* @__PURE__ */ I.jsxs(
    Y4,
    {
      "data-slot": "select-content",
      className: Ye(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      align: o,
      ...s,
      children: [
        /* @__PURE__ */ I.jsx(rB, {}),
        /* @__PURE__ */ I.jsx(
          K4,
          {
            className: Ye(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ I.jsx(oB, {})
      ]
    }
  ) });
}
function nB({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ I.jsxs(
    X4,
    {
      "data-slot": "select-item",
      className: Ye(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ I.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ I.jsx(Z4, { children: /* @__PURE__ */ I.jsx(VP, { className: "size-4" }) }) }),
        /* @__PURE__ */ I.jsx(Q4, { children: t })
      ]
    }
  );
}
function rB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    J4,
    {
      "data-slot": "select-scroll-up-button",
      className: Ye(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(u$, { className: "size-4" })
    }
  );
}
function oB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    e$,
    {
      "data-slot": "select-scroll-down-button",
      className: Ye(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(HP, { className: "size-4" })
    }
  );
}
function iB({ value: e, options: t, onChange: r, placeholder: o, label: s }) {
  return /* @__PURE__ */ I.jsxs(Z$, { value: e, onValueChange: r, children: [
    /* @__PURE__ */ I.jsx(
      eB,
      {
        className: "h-8 text-xs",
        onMouseDown: (a) => a.stopPropagation(),
        onPointerDown: (a) => a.stopPropagation(),
        "aria-label": s,
        children: /* @__PURE__ */ I.jsx(J$, { placeholder: o })
      }
    ),
    /* @__PURE__ */ I.jsx(tB, { children: t.map((a) => /* @__PURE__ */ I.jsx(nB, { value: a, className: "text-xs", children: a }, a)) })
  ] });
}
class sB {
  constructor() {
    Sx(this, "renderers", /* @__PURE__ */ new Map());
  }
  /**
   * Register a field renderer for a specific type.
   * 
   * @param type - The JSON schema type (e.g., "string", "number", "date", "color")
   * @param renderer - The React component that renders this field type
   * 
   * @example
   * ```typescript
   * fieldRegistry.register("color", ({ value, onChange }) => (
   *   <input type="color" value={String(value)} onChange={(e) => onChange(e.target.value)} />
   * ));
   * ```
   */
  register(t, r) {
    this.renderers.set(t, r);
  }
  /**
   * Get the renderer for a specific type.
   * 
   * @param type - The JSON schema type
   * @returns The renderer function, or undefined if not registered
   */
  get(t) {
    return this.renderers.get(t);
  }
  /**
   * Check if a renderer exists for a specific type.
   * 
   * @param type - The JSON schema type
   * @returns True if a renderer is registered for this type
   */
  has(t) {
    return this.renderers.has(t);
  }
  /**
   * Unregister a field renderer.
   * 
   * @param type - The JSON schema type to unregister
   * @returns True if the renderer was removed, false if it didn't exist
   */
  unregister(t) {
    return this.renderers.delete(t);
  }
  /**
   * Get all registered types.
   * 
   * @returns Array of registered type names
   */
  getRegisteredTypes() {
    return Array.from(this.renderers.keys());
  }
  /**
   * Clear all registered renderers.
   */
  clear() {
    this.renderers.clear();
  }
}
const Xo = new sB();
function iT({ className: e, type: t, ...r }) {
  return /* @__PURE__ */ I.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: Ye(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  );
}
function sT({ value: e, onChange: t, placeholder: r, label: o }) {
  return /* @__PURE__ */ I.jsx(
    iT,
    {
      type: "text",
      value: e,
      onChange: (s) => t(s.target.value),
      onMouseDown: (s) => s.stopPropagation(),
      onPointerDown: (s) => s.stopPropagation(),
      placeholder: r,
      "aria-label": o,
      className: "h-8 text-xs"
    }
  );
}
function aT({ value: e, onChange: t, isInteger: r, placeholder: o, label: s }) {
  return /* @__PURE__ */ I.jsx(
    iT,
    {
      type: "number",
      value: e,
      step: r ? 1 : "any",
      onChange: (a) => t(Number(a.target.value)),
      onMouseDownCapture: (a) => a.stopPropagation(),
      onPointerDownCapture: (a) => a.stopPropagation(),
      onWheel: (a) => a.currentTarget.blur(),
      placeholder: o,
      "aria-label": s,
      className: "h-8 text-xs"
    }
  );
}
function aB(e, t) {
  return R.useReducer((r, o) => t[r][o] ?? r, e);
}
var lT = (e) => {
  const { present: t, children: r } = e, o = lB(t), s = typeof r == "function" ? r({ present: o.isPresent }) : R.Children.only(r), a = tt(o.ref, uB(s));
  return typeof r == "function" || o.isPresent ? R.cloneElement(s, { ref: a }) : null;
};
lT.displayName = "Presence";
function lB(e) {
  const [t, r] = R.useState(), o = R.useRef(null), s = R.useRef(e), a = R.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = aB(l, {
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
  return R.useEffect(() => {
    const d = Pl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = s.current;
    if (h !== e) {
      const g = a.current, w = Pl(d);
      e ? f("MOUNT") : w === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && g !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, m = (w) => {
        const y = Pl(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && y && (f("ANIMATION_END"), !s.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (w) => {
        w.target === t && (a.current = Pl(o.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: R.useCallback((d) => {
      o.current = d ? getComputedStyle(d) : null, r(d);
    }, [])
  };
}
function Pl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function uB(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ku = "Checkbox", [cB] = vu(ku), [fB, My] = cB(ku);
function dB(e) {
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
    internal_do_not_use_render: m
  } = e, [g, w] = Yv({
    prop: r,
    defaultProp: s ?? !1,
    onChange: f,
    caller: ku
  }), [E, y] = R.useState(null), [x, S] = R.useState(null), C = R.useRef(!1), _ = E ? !!l || !!E.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: g,
    disabled: a,
    setChecked: w,
    control: E,
    setControl: y,
    name: u,
    form: l,
    value: h,
    hasConsumerStoppedPropagationRef: C,
    required: d,
    defaultChecked: Nr(s) ? !1 : s,
    isFormControl: _,
    bubbleInput: x,
    setBubbleInput: S
  };
  return /* @__PURE__ */ I.jsx(
    fB,
    {
      scope: t,
      ...k,
      children: hB(m) ? m(k) : o
    }
  );
}
var uT = "CheckboxTrigger", cT = R.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...o }, s) => {
    const {
      control: a,
      value: l,
      disabled: u,
      checked: f,
      required: d,
      setControl: h,
      setChecked: m,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: w,
      bubbleInput: E
    } = My(uT, e), y = tt(s, h), x = R.useRef(f);
    return R.useEffect(() => {
      const S = a == null ? void 0 : a.form;
      if (S) {
        const C = () => m(x.current);
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [a, m]), /* @__PURE__ */ I.jsx(
      $e.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Nr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": gT(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Qe(t, (S) => {
          S.key === "Enter" && S.preventDefault();
        }),
        onClick: Qe(r, (S) => {
          m((C) => Nr(C) ? !0 : !C), E && w && (g.current = S.isPropagationStopped(), g.current || S.stopPropagation());
        })
      }
    );
  }
);
cT.displayName = uT;
var fT = R.forwardRef(
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
      ...m
    } = e;
    return /* @__PURE__ */ I.jsx(
      dB,
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
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
          /* @__PURE__ */ I.jsx(
            cT,
            {
              ...m,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          g && /* @__PURE__ */ I.jsx(
            mT,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
fT.displayName = ku;
var dT = "CheckboxIndicator", hT = R.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: o, ...s } = e, a = My(dT, r);
    return /* @__PURE__ */ I.jsx(
      lT,
      {
        present: o || Nr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ I.jsx(
          $e.span,
          {
            "data-state": gT(a.checked),
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
hT.displayName = dT;
var pT = "CheckboxBubbleInput", mT = R.forwardRef(
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
      form: m,
      bubbleInput: g,
      setBubbleInput: w
    } = My(pT, e), E = tt(r, w), y = iP(a), x = GN(o);
    R.useEffect(() => {
      const C = g;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, P = !s.current;
      if (y !== a && N) {
        const A = new Event("click", { bubbles: P });
        C.indeterminate = Nr(a), N.call(C, Nr(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [g, y, a, s]);
    const S = R.useRef(Nr(a) ? !1 : a);
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
        form: m,
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
mT.displayName = pT;
function hB(e) {
  return typeof e == "function";
}
function Nr(e) {
  return e === "indeterminate";
}
function gT(e) {
  return Nr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function pB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    fT,
    {
      "data-slot": "checkbox",
      className: Ye(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(
        hT,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ I.jsx(VP, { className: "size-3.5" })
        }
      )
    }
  );
}
function mB({ value: e, onChange: t, label: r }) {
  return /* @__PURE__ */ I.jsx(
    pB,
    {
      checked: e,
      onCheckedChange: (o) => t(o === !0),
      onMouseDown: (o) => o.stopPropagation(),
      onPointerDown: (o) => o.stopPropagation(),
      "aria-label": r,
      className: "h-4 w-4"
    }
  );
}
function gB(e, t = []) {
  let r = [];
  function o(a, l) {
    const u = R.createContext(l);
    u.displayName = a + "Context";
    const f = r.length;
    r = [...r, l];
    const d = (m) => {
      var S;
      const { scope: g, children: w, ...E } = m, y = ((S = g == null ? void 0 : g[e]) == null ? void 0 : S[f]) || u, x = R.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ I.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(m, g) {
      var y;
      const w = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[f]) || u, E = R.useContext(w);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const s = () => {
    const a = r.map((l) => R.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || a;
      return R.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return s.scopeName = e, [o, vB(s, ...t)];
}
function vB(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const l = o.reduce((u, { useScope: f, scopeName: d }) => {
        const m = f(a)[`__scope${d}`];
        return { ...u, ...m };
      }, {});
      return R.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var yB = Symbol.for("react.lazy"), tu = ry[" use ".trim().toString()];
function wB(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function vT(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === yB && "_payload" in e && wB(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Oy(e) {
  const t = /* @__PURE__ */ _B(e), r = R.forwardRef((o, s) => {
    let { children: a, ...l } = o;
    vT(a) && typeof tu == "function" && (a = tu(a._payload));
    const u = R.Children.toArray(a), f = u.find(SB);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var xB = /* @__PURE__ */ Oy("Slot");
// @__NO_SIDE_EFFECTS__
function _B(e) {
  const t = R.forwardRef((r, o) => {
    let { children: s, ...a } = r;
    if (vT(s) && typeof tu == "function" && (s = tu(s._payload)), R.isValidElement(s)) {
      const l = CB(s), u = EB(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Hs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var bB = Symbol("radix.slottable");
function SB(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bB;
}
function EB(e, t) {
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
function CB(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var kB = [
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
], yT = kB.reduce((e, t) => {
  const r = /* @__PURE__ */ Oy(`Primitive.${t}`), o = R.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), Ly = "Progress", qy = 100, [RB] = gB(Ly), [NB, PB] = RB(Ly), wT = R.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: s,
      getValueLabel: a = TB,
      ...l
    } = e;
    (s || s === 0) && !v_(s) && console.error(AB(`${s}`, "Progress"));
    const u = v_(s) ? s : qy;
    o !== null && !y_(o, u) && console.error(IB(`${o}`, "Progress"));
    const f = y_(o, u) ? o : null, d = nu(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ I.jsx(NB, { scope: r, value: f, max: u, children: /* @__PURE__ */ I.jsx(
      yT.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": nu(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": bT(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
wT.displayName = Ly;
var xT = "ProgressIndicator", _T = R.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...o } = e, s = PB(xT, r);
    return /* @__PURE__ */ I.jsx(
      yT.div,
      {
        "data-state": bT(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
_T.displayName = xT;
function TB(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function bT(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function nu(e) {
  return typeof e == "number";
}
function v_(e) {
  return nu(e) && !isNaN(e) && e > 0;
}
function y_(e, t) {
  return nu(e) && !isNaN(e) && e <= t && e >= 0;
}
function AB(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${qy}\`.`;
}
function IB(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${qy} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var MB = wT, OB = _T;
function LB({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ I.jsx(
    MB,
    {
      "data-slot": "progress",
      className: Ye(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...r,
      children: /* @__PURE__ */ I.jsx(
        OB,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function qB({ value: e, onChange: t, label: r, property: o }) {
  const s = (o == null ? void 0 : o.maximum) ?? 100, a = (o == null ? void 0 : o.minimum) ?? 0, l = Math.min(100, Math.max(0, (e - a) / (s - a) * 100));
  return /* @__PURE__ */ I.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ I.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ I.jsx("span", { className: "text-muted-foreground", children: (o == null ? void 0 : o.description) || "Progress" }),
      /* @__PURE__ */ I.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
        Math.round(l),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ I.jsx(LB, { value: l, className: "h-2" })
  ] });
}
const DB = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  sT,
  {
    value: String(e || ""),
    onChange: r,
    placeholder: t.description,
    label: o
  }
), jB = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  aT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: r,
    isInteger: !1,
    placeholder: t.description,
    label: o
  }
), zB = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  aT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: r,
    isInteger: !0,
    placeholder: t.description,
    label: o
  }
), FB = ({ value: e, onChange: t, label: r }) => /* @__PURE__ */ I.jsx(mB, { value: !!e, onChange: t, label: r }), $B = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  qB,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: r,
    property: t,
    label: o
  }
), BB = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  sT,
  {
    value: e ? JSON.stringify(e) : "",
    onChange: (s) => {
      try {
        r(JSON.parse(String(s)));
      } catch {
        r(s);
      }
    },
    placeholder: t.description,
    label: o
  }
);
function VB() {
  Xo.register("string", DB), Xo.register("number", jB), Xo.register("integer", zB), Xo.register("boolean", FB), Xo.register("progress", $B);
}
VB();
function HB({ fieldKey: e, property: t, value: r, onChange: o, label: s, inputId: a }) {
  return t.enum ? /* @__PURE__ */ I.jsx(
    iB,
    {
      value: String(r || ""),
      options: t.enum.map(String),
      onChange: o,
      placeholder: t.description,
      id: a,
      label: s
    }
  ) : (Xo.get(t.type) || BB)({ value: r, property: t, onChange: o, id: a, label: s });
}
var WB = [
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
], UB = WB.reduce((e, t) => {
  const r = /* @__PURE__ */ Oy(`Primitive.${t}`), o = R.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), GB = "Label", ST = R.forwardRef((e, t) => /* @__PURE__ */ I.jsx(
  UB.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var s;
      r.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
ST.displayName = GB;
var YB = ST;
function KB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    YB,
    {
      "data-slot": "label",
      className: Ye(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function XB({
  nodeId: e,
  parameters: t,
  values: r,
  onValueChange: o,
  fieldConfigs: s,
  validation: a
}) {
  if (!(t != null && t.properties))
    return null;
  const l = (u, f) => {
    if (f != null && f.hidden) return !1;
    if (f != null && f.showWhen) {
      const d = f.showWhen, h = r == null ? void 0 : r[d.field];
      switch (d.operator) {
        case "equals":
          return h === d.value;
        case "notEquals":
          return h !== d.value;
        case "greaterThan":
          return Number(h) > Number(d.value);
        case "lessThan":
          return Number(h) < Number(d.value);
        case "contains":
          return String(h).includes(String(d.value));
        default:
          return !0;
      }
    }
    return !0;
  };
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: "p-3 flex flex-col gap-2.5",
      onMouseDown: (u) => u.stopPropagation(),
      onPointerDown: (u) => u.stopPropagation(),
      children: Object.entries(t.properties).map(([u, f]) => {
        var E;
        const d = s == null ? void 0 : s[u];
        if (!l(u, d))
          return null;
        const h = (r == null ? void 0 : r[u]) ?? f.default ?? "", m = (E = t.required) == null ? void 0 : E.includes(u), g = `node-${e}-field-${u}`, w = (d == null ? void 0 : d.disabled) || (d == null ? void 0 : d.readonly);
        return /* @__PURE__ */ I.jsxs(
          "div",
          {
            className: Ye("flex flex-col gap-1", d == null ? void 0 : d.className),
            title: d == null ? void 0 : d.tooltip,
            children: [
              /* @__PURE__ */ I.jsx(
                KB,
                {
                  htmlFor: g,
                  className: Ye(
                    "text-xs font-medium flex items-center gap-1",
                    m && "after:content-['*'] after:text-destructive after:ml-0.5",
                    w && "opacity-50 cursor-not-allowed"
                  ),
                  children: f.title || u
                }
              ),
              /* @__PURE__ */ I.jsx(
                HB,
                {
                  fieldKey: u,
                  property: f,
                  value: h,
                  onChange: (y) => !w && o(u, y),
                  inputId: g
                }
              )
            ]
          },
          u
        );
      })
    }
  );
}
const w_ = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, x_ = UP, QB = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return x_(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: a } = t, l = Object.keys(s).map((d) => {
    const h = r == null ? void 0 : r[d], m = a == null ? void 0 : a[d];
    if (h === null) return null;
    const g = w_(h) || w_(m);
    return s[d][g];
  }), u = r && Object.entries(r).reduce((d, h) => {
    let [m, g] = h;
    return g === void 0 || (d[m] = g), d;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, h) => {
    let { class: m, className: g, ...w } = h;
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
      m,
      g
    ] : d;
  }, []);
  return x_(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, ZB = QB(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function fi({
  className: e,
  variant: t,
  asChild: r = !1,
  ...o
}) {
  const s = r ? xB : "span";
  return /* @__PURE__ */ I.jsx(
    s,
    {
      "data-slot": "badge",
      className: Ye(ZB({ variant: t }), e),
      ...o
    }
  );
}
function Ar({
  className: e,
  children: t,
  style: r,
  ...o
}) {
  const [s, a] = R.useState(!1);
  return /* @__PURE__ */ I.jsx(
    Ms,
    {
      ...o,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      style: {
        // CSS custom properties for handle styling
        // These can be overridden from Python via container-level CSS
        width: "var(--pynodeflow-handle-size, 11px)",
        height: "var(--pynodeflow-handle-size, 11px)",
        borderWidth: "var(--pynodeflow-handle-border-width, 2px)",
        borderColor: "var(--pynodeflow-handle-border-color, #000000ff)",
        backgroundColor: s ? "var(--pynodeflow-handle-hover-bg, #747474ff)" : "var(--pynodeflow-handle-bg, #000000ff)",
        ...r
      },
      className: Ye(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        e
      ),
      children: t
    }
  );
}
const JB = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function e5({
  showButton: e = !0,
  position: t = ye.Bottom,
  children: r,
  ...o
}) {
  const s = JB[t || ye.Bottom], a = t === ye.Top || t === ye.Bottom;
  return /* @__PURE__ */ I.jsx(Ar, { position: t, id: o.id, ...o, children: e && /* @__PURE__ */ I.jsxs(
    "div",
    {
      className: `absolute flex items-center ${s} pointer-events-none`,
      children: [
        /* @__PURE__ */ I.jsx(
          "div",
          {
            className: `bg-gray-300 ${a ? "h-10 w-px" : "h-px w-10"}`
          }
        ),
        /* @__PURE__ */ I.jsx("div", { className: "nodrag nopan pointer-events-auto", children: r })
      ]
    }
  ) });
}
const t5 = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function n5({
  className: e,
  labelClassName: t,
  handleClassName: r,
  title: o,
  position: s,
  ...a
}) {
  const { ref: l, ...u } = a;
  return /* @__PURE__ */ I.jsxs(
    "div",
    {
      title: o,
      className: Ye(
        "relative flex items-center",
        t5[s],
        e
      ),
      ref: l,
      children: [
        /* @__PURE__ */ I.jsx(
          Ar,
          {
            position: s,
            className: r,
            ...u
          }
        ),
        /* @__PURE__ */ I.jsx("label", { className: Ye("text-foreground px-3", t), children: o })
      ]
    }
  );
}
const __ = {
  base: Ar,
  button: e5,
  labeled: n5
};
function r5(e) {
  return !e || !__[e] ? Ar : __[e];
}
function b_({
  handleType: e = "base",
  showButton: t,
  label: r,
  handleConfig: o,
  ...s
}) {
  const a = (o == null ? void 0 : o.handle_type) || e, l = r5(a), u = { ...s };
  return a === "button" && t !== void 0 && (u.showButton = t), a === "labeled" && r && (u.label = r), /* @__PURE__ */ I.jsx(l, { ...u });
}
function ru({
  inputs: e,
  outputs: t,
  children: r,
  handleType: o = "base",
  inputHandleType: s,
  outputHandleType: a
}) {
  const l = s || o, u = a || o;
  return /* @__PURE__ */ I.jsxs("div", { className: "flex p-3 gap-3 items-start", children: [
    /* @__PURE__ */ I.jsx("div", { className: "flex flex-col gap-2 mr-auto pl-0", children: e && Array.isArray(e) && e.map((f) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-start", children: [
      /* @__PURE__ */ I.jsx(
        b_,
        {
          type: "target",
          position: ye.Left,
          id: f.id,
          handleType: l,
          label: f.label
        }
      ),
      /* @__PURE__ */ I.jsx(fi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: f.label })
    ] }, `input-${f.id}`)) }),
    r,
    /* @__PURE__ */ I.jsx("div", { className: "flex flex-col gap-2 ml-auto pr-0", children: t && Array.isArray(t) && t.map((f) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-end", children: [
      /* @__PURE__ */ I.jsx(fi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: f.label }),
      /* @__PURE__ */ I.jsx(
        b_,
        {
          type: "source",
          position: ye.Right,
          id: f.id,
          handleType: u,
          label: f.label
        }
      )
    ] }, `output-${f.id}`)) })
  ] });
}
function o5({ inputs: e, outputs: t, children: r }) {
  return /* @__PURE__ */ I.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
    e && e.length > 0 && /* @__PURE__ */ I.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: e.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex flex-col items-center gap-1 relative", children: [
      /* @__PURE__ */ I.jsx(
        Ar,
        {
          type: "target",
          position: ye.Top,
          id: o.id,
          className: "!relative !transform-none",
          style: { position: "relative", top: 0, left: 0 }
        }
      ),
      /* @__PURE__ */ I.jsx(fi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: o.label })
    ] }, `input-${o.id}`)) }),
    r && /* @__PURE__ */ I.jsx("div", { className: "flex justify-center", children: r }),
    t && t.length > 0 && /* @__PURE__ */ I.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: t.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex flex-col items-center gap-1 relative", children: [
      /* @__PURE__ */ I.jsx(fi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: o.label }),
      /* @__PURE__ */ I.jsx(
        Ar,
        {
          type: "source",
          position: ye.Bottom,
          id: o.id,
          className: "!relative !transform-none",
          style: { position: "relative", top: 0, left: 0 }
        }
      )
    ] }, `output-${o.id}`)) })
  ] });
}
function i5({ inputs: e, outputs: t, children: r }) {
  return /* @__PURE__ */ I.jsxs("div", { className: "flex p-2 gap-2 items-start", children: [
    /* @__PURE__ */ I.jsx("div", { className: "flex flex-col gap-1", children: e && Array.isArray(e) && e.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-1 relative min-h-6", children: [
      /* @__PURE__ */ I.jsx(
        Ar,
        {
          type: "target",
          position: ye.Left,
          id: o.id,
          className: "w-2 h-2"
        }
      ),
      /* @__PURE__ */ I.jsx(fi, { variant: "outline", className: "text-[10px] font-normal py-0 px-1 h-5", children: o.label })
    ] }, `input-${o.id}`)) }),
    r,
    /* @__PURE__ */ I.jsx("div", { className: "flex flex-col gap-1", children: t && Array.isArray(t) && t.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-1 relative min-h-6 justify-end", children: [
      /* @__PURE__ */ I.jsx(fi, { variant: "outline", className: "text-[10px] font-normal py-0 px-1 h-5", children: o.label }),
      /* @__PURE__ */ I.jsx(
        Ar,
        {
          type: "source",
          position: ye.Right,
          id: o.id,
          className: "w-2 h-2"
        }
      )
    ] }, `output-${o.id}`)) })
  ] });
}
const s5 = {
  horizontal: ru,
  vertical: o5,
  compact: i5,
  default: ru
  // Explicit default alias
};
function a5(e) {
  return e && s5[e.toLowerCase()] || ru;
}
function l5({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card",
      className: Ye(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function u5({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: Ye(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function c5({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: Ye("leading-none font-semibold", e),
      ...t
    }
  );
}
function f5({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Ye("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
R.createContext(null);
function Dy(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var hd, S_;
function d5() {
  if (S_) return hd;
  S_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return hd = e, hd;
}
var pd, E_;
function vi() {
  if (E_) return pd;
  E_ = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return pd = e, pd;
}
var md, C_;
function Ru() {
  if (C_) return md;
  C_ = 1;
  var e = vi();
  function t(r, o) {
    for (var s = r.length; s--; )
      if (e(r[s][0], o))
        return s;
    return -1;
  }
  return md = t, md;
}
var gd, k_;
function h5() {
  if (k_) return gd;
  k_ = 1;
  var e = Ru(), t = Array.prototype, r = t.splice;
  function o(s) {
    var a = this.__data__, l = e(a, s);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : r.call(a, l, 1), --this.size, !0;
  }
  return gd = o, gd;
}
var vd, R_;
function p5() {
  if (R_) return vd;
  R_ = 1;
  var e = Ru();
  function t(r) {
    var o = this.__data__, s = e(o, r);
    return s < 0 ? void 0 : o[s][1];
  }
  return vd = t, vd;
}
var yd, N_;
function m5() {
  if (N_) return yd;
  N_ = 1;
  var e = Ru();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return yd = t, yd;
}
var wd, P_;
function g5() {
  if (P_) return wd;
  P_ = 1;
  var e = Ru();
  function t(r, o) {
    var s = this.__data__, a = e(s, r);
    return a < 0 ? (++this.size, s.push([r, o])) : s[a][1] = o, this;
  }
  return wd = t, wd;
}
var xd, T_;
function Nu() {
  if (T_) return xd;
  T_ = 1;
  var e = d5(), t = h5(), r = p5(), o = m5(), s = g5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, xd = a, xd;
}
var _d, A_;
function v5() {
  if (A_) return _d;
  A_ = 1;
  var e = Nu();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return _d = t, _d;
}
var bd, I_;
function y5() {
  if (I_) return bd;
  I_ = 1;
  function e(t) {
    var r = this.__data__, o = r.delete(t);
    return this.size = r.size, o;
  }
  return bd = e, bd;
}
var Sd, M_;
function w5() {
  if (M_) return Sd;
  M_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Sd = e, Sd;
}
var Ed, O_;
function x5() {
  if (O_) return Ed;
  O_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ed = e, Ed;
}
var Cd, L_;
function ET() {
  if (L_) return Cd;
  L_ = 1;
  var e = typeof fl == "object" && fl && fl.Object === Object && fl;
  return Cd = e, Cd;
}
var kd, q_;
function wn() {
  if (q_) return kd;
  q_ = 1;
  var e = ET(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return kd = r, kd;
}
var Rd, D_;
function yi() {
  if (D_) return Rd;
  D_ = 1;
  var e = wn(), t = e.Symbol;
  return Rd = t, Rd;
}
var Nd, j_;
function _5() {
  if (j_) return Nd;
  j_ = 1;
  var e = yi(), t = Object.prototype, r = t.hasOwnProperty, o = t.toString, s = e ? e.toStringTag : void 0;
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
  return Nd = a, Nd;
}
var Pd, z_;
function b5() {
  if (z_) return Pd;
  z_ = 1;
  var e = Object.prototype, t = e.toString;
  function r(o) {
    return t.call(o);
  }
  return Pd = r, Pd;
}
var Td, F_;
function fo() {
  if (F_) return Td;
  F_ = 1;
  var e = yi(), t = _5(), r = b5(), o = "[object Null]", s = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? s : o : a && a in Object(u) ? t(u) : r(u);
  }
  return Td = l, Td;
}
var Ad, $_;
function Zt() {
  if ($_) return Ad;
  $_ = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ad = e, Ad;
}
var Id, B_;
function Us() {
  if (B_) return Id;
  B_ = 1;
  var e = fo(), t = Zt(), r = "[object AsyncFunction]", o = "[object Function]", s = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == s || f == r || f == a;
  }
  return Id = l, Id;
}
var Md, V_;
function S5() {
  if (V_) return Md;
  V_ = 1;
  var e = wn(), t = e["__core-js_shared__"];
  return Md = t, Md;
}
var Od, H_;
function E5() {
  if (H_) return Od;
  H_ = 1;
  var e = S5(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function r(o) {
    return !!t && t in o;
  }
  return Od = r, Od;
}
var Ld, W_;
function CT() {
  if (W_) return Ld;
  W_ = 1;
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
var qd, U_;
function C5() {
  if (U_) return qd;
  U_ = 1;
  var e = Us(), t = E5(), r = Zt(), o = CT(), s = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function m(g) {
    if (!r(g) || t(g))
      return !1;
    var w = e(g) ? h : a;
    return w.test(o(g));
  }
  return qd = m, qd;
}
var Dd, G_;
function k5() {
  if (G_) return Dd;
  G_ = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return Dd = e, Dd;
}
var jd, Y_;
function ho() {
  if (Y_) return jd;
  Y_ = 1;
  var e = C5(), t = k5();
  function r(o, s) {
    var a = t(o, s);
    return e(a) ? a : void 0;
  }
  return jd = r, jd;
}
var zd, K_;
function jy() {
  if (K_) return zd;
  K_ = 1;
  var e = ho(), t = wn(), r = e(t, "Map");
  return zd = r, zd;
}
var Fd, X_;
function Pu() {
  if (X_) return Fd;
  X_ = 1;
  var e = ho(), t = e(Object, "create");
  return Fd = t, Fd;
}
var $d, Q_;
function R5() {
  if (Q_) return $d;
  Q_ = 1;
  var e = Pu();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return $d = t, $d;
}
var Bd, Z_;
function N5() {
  if (Z_) return Bd;
  Z_ = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Bd = e, Bd;
}
var Vd, J_;
function P5() {
  if (J_) return Vd;
  J_ = 1;
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
var Hd, eb;
function T5() {
  if (eb) return Hd;
  eb = 1;
  var e = Pu(), t = Object.prototype, r = t.hasOwnProperty;
  function o(s) {
    var a = this.__data__;
    return e ? a[s] !== void 0 : r.call(a, s);
  }
  return Hd = o, Hd;
}
var Wd, tb;
function A5() {
  if (tb) return Wd;
  tb = 1;
  var e = Pu(), t = "__lodash_hash_undefined__";
  function r(o, s) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && s === void 0 ? t : s, this;
  }
  return Wd = r, Wd;
}
var Ud, nb;
function I5() {
  if (nb) return Ud;
  nb = 1;
  var e = R5(), t = N5(), r = P5(), o = T5(), s = A5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, Ud = a, Ud;
}
var Gd, rb;
function M5() {
  if (rb) return Gd;
  rb = 1;
  var e = I5(), t = Nu(), r = jy();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Gd = o, Gd;
}
var Yd, ob;
function O5() {
  if (ob) return Yd;
  ob = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Yd = e, Yd;
}
var Kd, ib;
function Tu() {
  if (ib) return Kd;
  ib = 1;
  var e = O5();
  function t(r, o) {
    var s = r.__data__;
    return e(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
  }
  return Kd = t, Kd;
}
var Xd, sb;
function L5() {
  if (sb) return Xd;
  sb = 1;
  var e = Tu();
  function t(r) {
    var o = e(this, r).delete(r);
    return this.size -= o ? 1 : 0, o;
  }
  return Xd = t, Xd;
}
var Qd, ab;
function q5() {
  if (ab) return Qd;
  ab = 1;
  var e = Tu();
  function t(r) {
    return e(this, r).get(r);
  }
  return Qd = t, Qd;
}
var Zd, lb;
function D5() {
  if (lb) return Zd;
  lb = 1;
  var e = Tu();
  function t(r) {
    return e(this, r).has(r);
  }
  return Zd = t, Zd;
}
var Jd, ub;
function j5() {
  if (ub) return Jd;
  ub = 1;
  var e = Tu();
  function t(r, o) {
    var s = e(this, r), a = s.size;
    return s.set(r, o), this.size += s.size == a ? 0 : 1, this;
  }
  return Jd = t, Jd;
}
var eh, cb;
function zy() {
  if (cb) return eh;
  cb = 1;
  var e = M5(), t = L5(), r = q5(), o = D5(), s = j5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, eh = a, eh;
}
var th, fb;
function z5() {
  if (fb) return th;
  fb = 1;
  var e = Nu(), t = jy(), r = zy(), o = 200;
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
var nh, db;
function Au() {
  if (db) return nh;
  db = 1;
  var e = Nu(), t = v5(), r = y5(), o = w5(), s = x5(), a = z5();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = r, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, nh = l, nh;
}
var rh, hb;
function Fy() {
  if (hb) return rh;
  hb = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s && r(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return rh = e, rh;
}
var oh, pb;
function kT() {
  if (pb) return oh;
  pb = 1;
  var e = ho(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return oh = t, oh;
}
var ih, mb;
function Iu() {
  if (mb) return ih;
  mb = 1;
  var e = kT();
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
var sh, gb;
function Mu() {
  if (gb) return sh;
  gb = 1;
  var e = Iu(), t = vi(), r = Object.prototype, o = r.hasOwnProperty;
  function s(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return sh = s, sh;
}
var ah, vb;
function Gs() {
  if (vb) return ah;
  vb = 1;
  var e = Mu(), t = Iu();
  function r(o, s, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = s.length; ++f < d; ) {
      var h = s[f], m = l ? l(a[h], o[h], h, a, o) : void 0;
      m === void 0 && (m = o[h]), u ? t(a, h, m) : e(a, h, m);
    }
    return a;
  }
  return ah = r, ah;
}
var lh, yb;
function F5() {
  if (yb) return lh;
  yb = 1;
  function e(t, r) {
    for (var o = -1, s = Array(t); ++o < t; )
      s[o] = r(o);
    return s;
  }
  return lh = e, lh;
}
var uh, wb;
function Ln() {
  if (wb) return uh;
  wb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return uh = e, uh;
}
var ch, xb;
function $5() {
  if (xb) return ch;
  xb = 1;
  var e = fo(), t = Ln(), r = "[object Arguments]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return ch = o, ch;
}
var fh, _b;
function Ys() {
  if (_b) return fh;
  _b = 1;
  var e = $5(), t = Ln(), r = Object.prototype, o = r.hasOwnProperty, s = r.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !s.call(l, "callee");
  };
  return fh = a, fh;
}
var dh, bb;
function rt() {
  if (bb) return dh;
  bb = 1;
  var e = Array.isArray;
  return dh = e, dh;
}
var ys = { exports: {} }, hh, Sb;
function B5() {
  if (Sb) return hh;
  Sb = 1;
  function e() {
    return !1;
  }
  return hh = e, hh;
}
ys.exports;
var Eb;
function wi() {
  return Eb || (Eb = 1, (function(e, t) {
    var r = wn(), o = B5(), s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, l = a && a.exports === s, u = l ? r.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(ys, ys.exports)), ys.exports;
}
var ph, Cb;
function Ou() {
  if (Cb) return ph;
  Cb = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(o, s) {
    var a = typeof o;
    return s = s ?? e, !!s && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < s;
  }
  return ph = r, ph;
}
var mh, kb;
function $y() {
  if (kb) return mh;
  kb = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return mh = t, mh;
}
var gh, Rb;
function V5() {
  if (Rb) return gh;
  Rb = 1;
  var e = fo(), t = $y(), r = Ln(), o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", m = "[object Object]", g = "[object RegExp]", w = "[object Set]", E = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", S = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", k = "[object Int8Array]", N = "[object Int16Array]", P = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", G = "[object Uint32Array]", B = {};
  B[C] = B[_] = B[k] = B[N] = B[P] = B[A] = B[O] = B[D] = B[G] = !0, B[o] = B[s] = B[x] = B[a] = B[S] = B[l] = B[u] = B[f] = B[d] = B[h] = B[m] = B[g] = B[w] = B[E] = B[y] = !1;
  function V(X) {
    return r(X) && t(X.length) && !!B[e(X)];
  }
  return gh = V, gh;
}
var vh, Nb;
function Lu() {
  if (Nb) return vh;
  Nb = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return vh = e, vh;
}
var ws = { exports: {} };
ws.exports;
var Pb;
function By() {
  return Pb || (Pb = 1, (function(e, t) {
    var r = ET(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a && r.process, u = (function() {
      try {
        var f = s && s.require && s.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(ws, ws.exports)), ws.exports;
}
var yh, Tb;
function Ks() {
  if (Tb) return yh;
  Tb = 1;
  var e = V5(), t = Lu(), r = By(), o = r && r.isTypedArray, s = o ? t(o) : e;
  return yh = s, yh;
}
var wh, Ab;
function RT() {
  if (Ab) return wh;
  Ab = 1;
  var e = F5(), t = Ys(), r = rt(), o = wi(), s = Ou(), a = Ks(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var m = r(d), g = !m && t(d), w = !m && !g && o(d), E = !m && !g && !w && a(d), y = m || g || w || E, x = y ? e(d.length, String) : [], S = x.length;
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
var xh, Ib;
function qu() {
  if (Ib) return xh;
  Ib = 1;
  var e = Object.prototype;
  function t(r) {
    var o = r && r.constructor, s = typeof o == "function" && o.prototype || e;
    return r === s;
  }
  return xh = t, xh;
}
var _h, Mb;
function NT() {
  if (Mb) return _h;
  Mb = 1;
  function e(t, r) {
    return function(o) {
      return t(r(o));
    };
  }
  return _h = e, _h;
}
var bh, Ob;
function H5() {
  if (Ob) return bh;
  Ob = 1;
  var e = NT(), t = e(Object.keys, Object);
  return bh = t, bh;
}
var Sh, Lb;
function Vy() {
  if (Lb) return Sh;
  Lb = 1;
  var e = qu(), t = H5(), r = Object.prototype, o = r.hasOwnProperty;
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
var Eh, qb;
function Zn() {
  if (qb) return Eh;
  qb = 1;
  var e = Us(), t = $y();
  function r(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Eh = r, Eh;
}
var Ch, Db;
function Or() {
  if (Db) return Ch;
  Db = 1;
  var e = RT(), t = Vy(), r = Zn();
  function o(s) {
    return r(s) ? e(s) : t(s);
  }
  return Ch = o, Ch;
}
var kh, jb;
function W5() {
  if (jb) return kh;
  jb = 1;
  var e = Gs(), t = Or();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return kh = r, kh;
}
var Rh, zb;
function U5() {
  if (zb) return Rh;
  zb = 1;
  function e(t) {
    var r = [];
    if (t != null)
      for (var o in Object(t))
        r.push(o);
    return r;
  }
  return Rh = e, Rh;
}
var Nh, Fb;
function G5() {
  if (Fb) return Nh;
  Fb = 1;
  var e = Zt(), t = qu(), r = U5(), o = Object.prototype, s = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return r(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !s.call(l, d)) || f.push(d);
    return f;
  }
  return Nh = a, Nh;
}
var Ph, $b;
function po() {
  if ($b) return Ph;
  $b = 1;
  var e = RT(), t = G5(), r = Zn();
  function o(s) {
    return r(s) ? e(s, !0) : t(s);
  }
  return Ph = o, Ph;
}
var Th, Bb;
function Y5() {
  if (Bb) return Th;
  Bb = 1;
  var e = Gs(), t = po();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return Th = r, Th;
}
var xs = { exports: {} };
xs.exports;
var Vb;
function PT() {
  return Vb || (Vb = 1, (function(e, t) {
    var r = wn(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a ? r.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var m = d.length, g = u ? u(m) : new d.constructor(m);
      return d.copy(g), g;
    }
    e.exports = f;
  })(xs, xs.exports)), xs.exports;
}
var Ah, Hb;
function TT() {
  if (Hb) return Ah;
  Hb = 1;
  function e(t, r) {
    var o = -1, s = t.length;
    for (r || (r = Array(s)); ++o < s; )
      r[o] = t[o];
    return r;
  }
  return Ah = e, Ah;
}
var Ih, Wb;
function AT() {
  if (Wb) return Ih;
  Wb = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = 0, l = []; ++o < s; ) {
      var u = t[o];
      r(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return Ih = e, Ih;
}
var Mh, Ub;
function IT() {
  if (Ub) return Mh;
  Ub = 1;
  function e() {
    return [];
  }
  return Mh = e, Mh;
}
var Oh, Gb;
function Hy() {
  if (Gb) return Oh;
  Gb = 1;
  var e = AT(), t = IT(), r = Object.prototype, o = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, a = s ? function(l) {
    return l == null ? [] : (l = Object(l), e(s(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return Oh = a, Oh;
}
var Lh, Yb;
function K5() {
  if (Yb) return Lh;
  Yb = 1;
  var e = Gs(), t = Hy();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return Lh = r, Lh;
}
var qh, Kb;
function Wy() {
  if (Kb) return qh;
  Kb = 1;
  function e(t, r) {
    for (var o = -1, s = r.length, a = t.length; ++o < s; )
      t[a + o] = r[o];
    return t;
  }
  return qh = e, qh;
}
var Dh, Xb;
function Du() {
  if (Xb) return Dh;
  Xb = 1;
  var e = NT(), t = e(Object.getPrototypeOf, Object);
  return Dh = t, Dh;
}
var jh, Qb;
function MT() {
  if (Qb) return jh;
  Qb = 1;
  var e = Wy(), t = Du(), r = Hy(), o = IT(), s = Object.getOwnPropertySymbols, a = s ? function(l) {
    for (var u = []; l; )
      e(u, r(l)), l = t(l);
    return u;
  } : o;
  return jh = a, jh;
}
var zh, Zb;
function X5() {
  if (Zb) return zh;
  Zb = 1;
  var e = Gs(), t = MT();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return zh = r, zh;
}
var Fh, Jb;
function OT() {
  if (Jb) return Fh;
  Jb = 1;
  var e = Wy(), t = rt();
  function r(o, s, a) {
    var l = s(o);
    return t(o) ? l : e(l, a(o));
  }
  return Fh = r, Fh;
}
var $h, eS;
function LT() {
  if (eS) return $h;
  eS = 1;
  var e = OT(), t = Hy(), r = Or();
  function o(s) {
    return e(s, r, t);
  }
  return $h = o, $h;
}
var Bh, tS;
function Q5() {
  if (tS) return Bh;
  tS = 1;
  var e = OT(), t = MT(), r = po();
  function o(s) {
    return e(s, r, t);
  }
  return Bh = o, Bh;
}
var Vh, nS;
function Z5() {
  if (nS) return Vh;
  nS = 1;
  var e = ho(), t = wn(), r = e(t, "DataView");
  return Vh = r, Vh;
}
var Hh, rS;
function J5() {
  if (rS) return Hh;
  rS = 1;
  var e = ho(), t = wn(), r = e(t, "Promise");
  return Hh = r, Hh;
}
var Wh, oS;
function qT() {
  if (oS) return Wh;
  oS = 1;
  var e = ho(), t = wn(), r = e(t, "Set");
  return Wh = r, Wh;
}
var Uh, iS;
function eV() {
  if (iS) return Uh;
  iS = 1;
  var e = ho(), t = wn(), r = e(t, "WeakMap");
  return Uh = r, Uh;
}
var Gh, sS;
function xi() {
  if (sS) return Gh;
  sS = 1;
  var e = Z5(), t = jy(), r = J5(), o = qT(), s = eV(), a = fo(), l = CT(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", m = "[object WeakMap]", g = "[object DataView]", w = l(e), E = l(t), y = l(r), x = l(o), S = l(s), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != g || t && C(new t()) != u || r && C(r.resolve()) != d || o && C(new o()) != h || s && C(new s()) != m) && (C = function(_) {
    var k = a(_), N = k == f ? _.constructor : void 0, P = N ? l(N) : "";
    if (P)
      switch (P) {
        case w:
          return g;
        case E:
          return u;
        case y:
          return d;
        case x:
          return h;
        case S:
          return m;
      }
    return k;
  }), Gh = C, Gh;
}
var Yh, aS;
function tV() {
  if (aS) return Yh;
  aS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o) {
    var s = o.length, a = new o.constructor(s);
    return s && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return Yh = r, Yh;
}
var Kh, lS;
function DT() {
  if (lS) return Kh;
  lS = 1;
  var e = wn(), t = e.Uint8Array;
  return Kh = t, Kh;
}
var Xh, uS;
function Uy() {
  if (uS) return Xh;
  uS = 1;
  var e = DT();
  function t(r) {
    var o = new r.constructor(r.byteLength);
    return new e(o).set(new e(r)), o;
  }
  return Xh = t, Xh;
}
var Qh, cS;
function nV() {
  if (cS) return Qh;
  cS = 1;
  var e = Uy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.byteLength);
  }
  return Qh = t, Qh;
}
var Zh, fS;
function rV() {
  if (fS) return Zh;
  fS = 1;
  var e = /\w*$/;
  function t(r) {
    var o = new r.constructor(r.source, e.exec(r));
    return o.lastIndex = r.lastIndex, o;
  }
  return Zh = t, Zh;
}
var Jh, dS;
function oV() {
  if (dS) return Jh;
  dS = 1;
  var e = yi(), t = e ? e.prototype : void 0, r = t ? t.valueOf : void 0;
  function o(s) {
    return r ? Object(r.call(s)) : {};
  }
  return Jh = o, Jh;
}
var ep, hS;
function jT() {
  if (hS) return ep;
  hS = 1;
  var e = Uy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.length);
  }
  return ep = t, ep;
}
var tp, pS;
function iV() {
  if (pS) return tp;
  pS = 1;
  var e = Uy(), t = nV(), r = rV(), o = oV(), s = jT(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", m = "[object String]", g = "[object Symbol]", w = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", k = "[object Uint8Array]", N = "[object Uint8ClampedArray]", P = "[object Uint16Array]", A = "[object Uint32Array]";
  function O(D, G, B) {
    var V = D.constructor;
    switch (G) {
      case w:
        return e(D);
      case a:
      case l:
        return new V(+D);
      case E:
        return t(D, B);
      case y:
      case x:
      case S:
      case C:
      case _:
      case k:
      case N:
      case P:
      case A:
        return s(D, B);
      case u:
        return new V();
      case f:
      case m:
        return new V(D);
      case d:
        return r(D);
      case h:
        return new V();
      case g:
        return o(D);
    }
  }
  return tp = O, tp;
}
var np, mS;
function zT() {
  if (mS) return np;
  mS = 1;
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
var rp, gS;
function FT() {
  if (gS) return rp;
  gS = 1;
  var e = zT(), t = Du(), r = qu();
  function o(s) {
    return typeof s.constructor == "function" && !r(s) ? e(t(s)) : {};
  }
  return rp = o, rp;
}
var op, vS;
function sV() {
  if (vS) return op;
  vS = 1;
  var e = xi(), t = Ln(), r = "[object Map]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return op = o, op;
}
var ip, yS;
function aV() {
  if (yS) return ip;
  yS = 1;
  var e = sV(), t = Lu(), r = By(), o = r && r.isMap, s = o ? t(o) : e;
  return ip = s, ip;
}
var sp, wS;
function lV() {
  if (wS) return sp;
  wS = 1;
  var e = xi(), t = Ln(), r = "[object Set]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return sp = o, sp;
}
var ap, xS;
function uV() {
  if (xS) return ap;
  xS = 1;
  var e = lV(), t = Lu(), r = By(), o = r && r.isSet, s = o ? t(o) : e;
  return ap = s, ap;
}
var lp, _S;
function $T() {
  if (_S) return lp;
  _S = 1;
  var e = Au(), t = Fy(), r = Mu(), o = W5(), s = Y5(), a = PT(), l = TT(), u = K5(), f = X5(), d = LT(), h = Q5(), m = xi(), g = tV(), w = iV(), E = FT(), y = rt(), x = wi(), S = aV(), C = Zt(), _ = uV(), k = Or(), N = po(), P = 1, A = 2, O = 4, D = "[object Arguments]", G = "[object Array]", B = "[object Boolean]", V = "[object Date]", X = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", $ = "[object Map]", Y = "[object Number]", M = "[object Object]", j = "[object RegExp]", Q = "[object Set]", q = "[object String]", W = "[object Symbol]", ie = "[object WeakMap]", F = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", K = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", be = "[object Uint32Array]", ge = {};
  ge[D] = ge[G] = ge[F] = ge[Z] = ge[B] = ge[V] = ge[ee] = ge[K] = ge[te] = ge[se] = ge[ae] = ge[$] = ge[Y] = ge[M] = ge[j] = ge[Q] = ge[q] = ge[W] = ge[ce] = ge[de] = ge[pe] = ge[be] = !0, ge[X] = ge[L] = ge[ie] = !1;
  function Ne(Ee, Ze, Ve, Ft, ht, at) {
    var He, en = Ze & P, $t = Ze & A, tn = Ze & O;
    if (Ve && (He = ht ? Ve(Ee, Ft, ht, at) : Ve(Ee)), He !== void 0)
      return He;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (He = g(Ee), !en)
        return l(Ee, He);
    } else {
      var _t = m(Ee), Lr = _t == L || _t == H;
      if (x(Ee))
        return a(Ee, en);
      if (_t == M || _t == D || Lr && !ht) {
        if (He = $t || Lr ? {} : E(Ee), !en)
          return $t ? f(Ee, s(He, Ee)) : u(Ee, o(He, Ee));
      } else {
        if (!ge[_t])
          return ht ? Ee : {};
        He = w(Ee, _t, en);
      }
    }
    at || (at = new e());
    var Vt = at.get(Ee);
    if (Vt)
      return Vt;
    at.set(Ee, He), _(Ee) ? Ee.forEach(function(Tt) {
      He.add(Ne(Tt, Ze, Ve, Tt, Ee, at));
    }) : S(Ee) && Ee.forEach(function(Tt, Ht) {
      He.set(Ht, Ne(Tt, Ze, Ve, Ht, Ee, at));
    });
    var qn = tn ? $t ? h : d : $t ? N : k, go = Bt ? void 0 : qn(Ee);
    return t(go || Ee, function(Tt, Ht) {
      go && (Ht = Tt, Tt = Ee[Ht]), r(He, Ht, Ne(Tt, Ze, Ve, Ht, Ee, at));
    }), He;
  }
  return lp = Ne, lp;
}
var up, bS;
function cV() {
  if (bS) return up;
  bS = 1;
  var e = $T(), t = 4;
  function r(o) {
    return e(o, t);
  }
  return up = r, up;
}
var cp, SS;
function Gy() {
  if (SS) return cp;
  SS = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return cp = e, cp;
}
var fp, ES;
function fV() {
  if (ES) return fp;
  ES = 1;
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
var dp, CS;
function Yy() {
  if (CS) return dp;
  CS = 1;
  var e = fV(), t = e();
  return dp = t, dp;
}
var hp, kS;
function Ky() {
  if (kS) return hp;
  kS = 1;
  var e = Yy(), t = Or();
  function r(o, s) {
    return o && e(o, s, t);
  }
  return hp = r, hp;
}
var pp, RS;
function dV() {
  if (RS) return pp;
  RS = 1;
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
var mp, NS;
function ju() {
  if (NS) return mp;
  NS = 1;
  var e = Ky(), t = dV(), r = t(e);
  return mp = r, mp;
}
var gp, PS;
function mo() {
  if (PS) return gp;
  PS = 1;
  function e(t) {
    return t;
  }
  return gp = e, gp;
}
var vp, TS;
function BT() {
  if (TS) return vp;
  TS = 1;
  var e = mo();
  function t(r) {
    return typeof r == "function" ? r : e;
  }
  return vp = t, vp;
}
var yp, AS;
function VT() {
  if (AS) return yp;
  AS = 1;
  var e = Fy(), t = ju(), r = BT(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l));
  }
  return yp = s, yp;
}
var wp, IS;
function HT() {
  return IS || (IS = 1, wp = VT()), wp;
}
var xp, MS;
function hV() {
  if (MS) return xp;
  MS = 1;
  var e = ju();
  function t(r, o) {
    var s = [];
    return e(r, function(a, l, u) {
      o(a, l, u) && s.push(a);
    }), s;
  }
  return xp = t, xp;
}
var _p, OS;
function pV() {
  if (OS) return _p;
  OS = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return _p = t, _p;
}
var bp, LS;
function mV() {
  if (LS) return bp;
  LS = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return bp = e, bp;
}
var Sp, qS;
function WT() {
  if (qS) return Sp;
  qS = 1;
  var e = zy(), t = pV(), r = mV();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(s[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = r, Sp = o, Sp;
}
var Ep, DS;
function gV() {
  if (DS) return Ep;
  DS = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; )
      if (r(t[o], o, t))
        return !0;
    return !1;
  }
  return Ep = e, Ep;
}
var Cp, jS;
function UT() {
  if (jS) return Cp;
  jS = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Cp = e, Cp;
}
var kp, zS;
function GT() {
  if (zS) return kp;
  zS = 1;
  var e = WT(), t = gV(), r = UT(), o = 1, s = 2;
  function a(l, u, f, d, h, m) {
    var g = f & o, w = l.length, E = u.length;
    if (w != E && !(g && E > w))
      return !1;
    var y = m.get(l), x = m.get(u);
    if (y && x)
      return y == u && x == l;
    var S = -1, C = !0, _ = f & s ? new e() : void 0;
    for (m.set(l, u), m.set(u, l); ++S < w; ) {
      var k = l[S], N = u[S];
      if (d)
        var P = g ? d(N, k, S, u, l, m) : d(k, N, S, l, u, m);
      if (P !== void 0) {
        if (P)
          continue;
        C = !1;
        break;
      }
      if (_) {
        if (!t(u, function(A, O) {
          if (!r(_, O) && (k === A || h(k, A, f, d, m)))
            return _.push(O);
        })) {
          C = !1;
          break;
        }
      } else if (!(k === N || h(k, N, f, d, m))) {
        C = !1;
        break;
      }
    }
    return m.delete(l), m.delete(u), C;
  }
  return kp = a, kp;
}
var Rp, FS;
function vV() {
  if (FS) return Rp;
  FS = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s, a) {
      o[++r] = [a, s];
    }), o;
  }
  return Rp = e, Rp;
}
var Np, $S;
function Xy() {
  if ($S) return Np;
  $S = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s) {
      o[++r] = s;
    }), o;
  }
  return Np = e, Np;
}
var Pp, BS;
function yV() {
  if (BS) return Pp;
  BS = 1;
  var e = yi(), t = DT(), r = vi(), o = GT(), s = vV(), a = Xy(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", m = "[object Map]", g = "[object Number]", w = "[object RegExp]", E = "[object Set]", y = "[object String]", x = "[object Symbol]", S = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, k = _ ? _.valueOf : void 0;
  function N(P, A, O, D, G, B, V) {
    switch (O) {
      case C:
        if (P.byteLength != A.byteLength || P.byteOffset != A.byteOffset)
          return !1;
        P = P.buffer, A = A.buffer;
      case S:
        return !(P.byteLength != A.byteLength || !B(new t(P), new t(A)));
      case f:
      case d:
      case g:
        return r(+P, +A);
      case h:
        return P.name == A.name && P.message == A.message;
      case w:
      case y:
        return P == A + "";
      case m:
        var X = s;
      case E:
        var L = D & l;
        if (X || (X = a), P.size != A.size && !L)
          return !1;
        var H = V.get(P);
        if (H)
          return H == A;
        D |= u, V.set(P, A);
        var $ = o(X(P), X(A), D, G, B, V);
        return V.delete(P), $;
      case x:
        if (k)
          return k.call(P) == k.call(A);
    }
    return !1;
  }
  return Pp = N, Pp;
}
var Tp, VS;
function wV() {
  if (VS) return Tp;
  VS = 1;
  var e = LT(), t = 1, r = Object.prototype, o = r.hasOwnProperty;
  function s(a, l, u, f, d, h) {
    var m = u & t, g = e(a), w = g.length, E = e(l), y = E.length;
    if (w != y && !m)
      return !1;
    for (var x = w; x--; ) {
      var S = g[x];
      if (!(m ? S in l : o.call(l, S)))
        return !1;
    }
    var C = h.get(a), _ = h.get(l);
    if (C && _)
      return C == l && _ == a;
    var k = !0;
    h.set(a, l), h.set(l, a);
    for (var N = m; ++x < w; ) {
      S = g[x];
      var P = a[S], A = l[S];
      if (f)
        var O = m ? f(A, P, S, l, a, h) : f(P, A, S, a, l, h);
      if (!(O === void 0 ? P === A || d(P, A, u, f, h) : O)) {
        k = !1;
        break;
      }
      N || (N = S == "constructor");
    }
    if (k && !N) {
      var D = a.constructor, G = l.constructor;
      D != G && "constructor" in a && "constructor" in l && !(typeof D == "function" && D instanceof D && typeof G == "function" && G instanceof G) && (k = !1);
    }
    return h.delete(a), h.delete(l), k;
  }
  return Tp = s, Tp;
}
var Ap, HS;
function xV() {
  if (HS) return Ap;
  HS = 1;
  var e = Au(), t = GT(), r = yV(), o = wV(), s = xi(), a = rt(), l = wi(), u = Ks(), f = 1, d = "[object Arguments]", h = "[object Array]", m = "[object Object]", g = Object.prototype, w = g.hasOwnProperty;
  function E(y, x, S, C, _, k) {
    var N = a(y), P = a(x), A = N ? h : s(y), O = P ? h : s(x);
    A = A == d ? m : A, O = O == d ? m : O;
    var D = A == m, G = O == m, B = A == O;
    if (B && l(y)) {
      if (!l(x))
        return !1;
      N = !0, D = !1;
    }
    if (B && !D)
      return k || (k = new e()), N || u(y) ? t(y, x, S, C, _, k) : r(y, x, A, S, C, _, k);
    if (!(S & f)) {
      var V = D && w.call(y, "__wrapped__"), X = G && w.call(x, "__wrapped__");
      if (V || X) {
        var L = V ? y.value() : y, H = X ? x.value() : x;
        return k || (k = new e()), _(L, H, S, C, k);
      }
    }
    return B ? (k || (k = new e()), o(y, x, S, C, _, k)) : !1;
  }
  return Ap = E, Ap;
}
var Ip, WS;
function YT() {
  if (WS) return Ip;
  WS = 1;
  var e = xV(), t = Ln();
  function r(o, s, a, l, u) {
    return o === s ? !0 : o == null || s == null || !t(o) && !t(s) ? o !== o && s !== s : e(o, s, a, l, r, u);
  }
  return Ip = r, Ip;
}
var Mp, US;
function _V() {
  if (US) return Mp;
  US = 1;
  var e = Au(), t = YT(), r = 1, o = 2;
  function s(a, l, u, f) {
    var d = u.length, h = d, m = !f;
    if (a == null)
      return !h;
    for (a = Object(a); d--; ) {
      var g = u[d];
      if (m && g[2] ? g[1] !== a[g[0]] : !(g[0] in a))
        return !1;
    }
    for (; ++d < h; ) {
      g = u[d];
      var w = g[0], E = a[w], y = g[1];
      if (m && g[2]) {
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
var Op, GS;
function KT() {
  if (GS) return Op;
  GS = 1;
  var e = Zt();
  function t(r) {
    return r === r && !e(r);
  }
  return Op = t, Op;
}
var Lp, YS;
function bV() {
  if (YS) return Lp;
  YS = 1;
  var e = KT(), t = Or();
  function r(o) {
    for (var s = t(o), a = s.length; a--; ) {
      var l = s[a], u = o[l];
      s[a] = [l, u, e(u)];
    }
    return s;
  }
  return Lp = r, Lp;
}
var qp, KS;
function XT() {
  if (KS) return qp;
  KS = 1;
  function e(t, r) {
    return function(o) {
      return o == null ? !1 : o[t] === r && (r !== void 0 || t in Object(o));
    };
  }
  return qp = e, qp;
}
var Dp, XS;
function SV() {
  if (XS) return Dp;
  XS = 1;
  var e = _V(), t = bV(), r = XT();
  function o(s) {
    var a = t(s);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(l) {
      return l === s || e(l, s, a);
    };
  }
  return Dp = o, Dp;
}
var jp, QS;
function _i() {
  if (QS) return jp;
  QS = 1;
  var e = fo(), t = Ln(), r = "[object Symbol]";
  function o(s) {
    return typeof s == "symbol" || t(s) && e(s) == r;
  }
  return jp = o, jp;
}
var zp, ZS;
function Qy() {
  if (ZS) return zp;
  ZS = 1;
  var e = rt(), t = _i(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function s(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !r.test(a) || l != null && a in Object(l);
  }
  return zp = s, zp;
}
var Fp, JS;
function EV() {
  if (JS) return Fp;
  JS = 1;
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
var $p, eE;
function CV() {
  if (eE) return $p;
  eE = 1;
  var e = EV(), t = 500;
  function r(o) {
    var s = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = s.cache;
    return s;
  }
  return $p = r, $p;
}
var Bp, tE;
function kV() {
  if (tE) return Bp;
  tE = 1;
  var e = CV(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, o = e(function(s) {
    var a = [];
    return s.charCodeAt(0) === 46 && a.push(""), s.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(r, "$1") : u || l);
    }), a;
  });
  return Bp = o, Bp;
}
var Vp, nE;
function zu() {
  if (nE) return Vp;
  nE = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = Array(s); ++o < s; )
      a[o] = r(t[o], o, t);
    return a;
  }
  return Vp = e, Vp;
}
var Hp, rE;
function RV() {
  if (rE) return Hp;
  rE = 1;
  var e = yi(), t = zu(), r = rt(), o = _i(), s = e ? e.prototype : void 0, a = s ? s.toString : void 0;
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
var Wp, oE;
function QT() {
  if (oE) return Wp;
  oE = 1;
  var e = RV();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Wp = t, Wp;
}
var Up, iE;
function Fu() {
  if (iE) return Up;
  iE = 1;
  var e = rt(), t = Qy(), r = kV(), o = QT();
  function s(a, l) {
    return e(a) ? a : t(a, l) ? [a] : r(o(a));
  }
  return Up = s, Up;
}
var Gp, sE;
function Xs() {
  if (sE) return Gp;
  sE = 1;
  var e = _i();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var o = r + "";
    return o == "0" && 1 / r == -1 / 0 ? "-0" : o;
  }
  return Gp = t, Gp;
}
var Yp, aE;
function $u() {
  if (aE) return Yp;
  aE = 1;
  var e = Fu(), t = Xs();
  function r(o, s) {
    s = e(s, o);
    for (var a = 0, l = s.length; o != null && a < l; )
      o = o[t(s[a++])];
    return a && a == l ? o : void 0;
  }
  return Yp = r, Yp;
}
var Kp, lE;
function NV() {
  if (lE) return Kp;
  lE = 1;
  var e = $u();
  function t(r, o, s) {
    var a = r == null ? void 0 : e(r, o);
    return a === void 0 ? s : a;
  }
  return Kp = t, Kp;
}
var Xp, uE;
function PV() {
  if (uE) return Xp;
  uE = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Xp = e, Xp;
}
var Qp, cE;
function ZT() {
  if (cE) return Qp;
  cE = 1;
  var e = Fu(), t = Ys(), r = rt(), o = Ou(), s = $y(), a = Xs();
  function l(u, f, d) {
    f = e(f, u);
    for (var h = -1, m = f.length, g = !1; ++h < m; ) {
      var w = a(f[h]);
      if (!(g = u != null && d(u, w)))
        break;
      u = u[w];
    }
    return g || ++h != m ? g : (m = u == null ? 0 : u.length, !!m && s(m) && o(w, m) && (r(u) || t(u)));
  }
  return Qp = l, Qp;
}
var Zp, fE;
function JT() {
  if (fE) return Zp;
  fE = 1;
  var e = PV(), t = ZT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return Zp = r, Zp;
}
var Jp, dE;
function TV() {
  if (dE) return Jp;
  dE = 1;
  var e = YT(), t = NV(), r = JT(), o = Qy(), s = KT(), a = XT(), l = Xs(), u = 1, f = 2;
  function d(h, m) {
    return o(h) && s(m) ? a(l(h), m) : function(g) {
      var w = t(g, h);
      return w === void 0 && w === m ? r(g, h) : e(m, w, u | f);
    };
  }
  return Jp = d, Jp;
}
var em, hE;
function eA() {
  if (hE) return em;
  hE = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return em = e, em;
}
var tm, pE;
function AV() {
  if (pE) return tm;
  pE = 1;
  var e = $u();
  function t(r) {
    return function(o) {
      return e(o, r);
    };
  }
  return tm = t, tm;
}
var nm, mE;
function IV() {
  if (mE) return nm;
  mE = 1;
  var e = eA(), t = AV(), r = Qy(), o = Xs();
  function s(a) {
    return r(a) ? e(o(a)) : t(a);
  }
  return nm = s, nm;
}
var rm, gE;
function Jn() {
  if (gE) return rm;
  gE = 1;
  var e = SV(), t = TV(), r = mo(), o = rt(), s = IV();
  function a(l) {
    return typeof l == "function" ? l : l == null ? r : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : s(l);
  }
  return rm = a, rm;
}
var om, vE;
function tA() {
  if (vE) return om;
  vE = 1;
  var e = AT(), t = hV(), r = Jn(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l, 3));
  }
  return om = s, om;
}
var im, yE;
function MV() {
  if (yE) return im;
  yE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o, s) {
    return o != null && t.call(o, s);
  }
  return im = r, im;
}
var sm, wE;
function nA() {
  if (wE) return sm;
  wE = 1;
  var e = MV(), t = ZT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return sm = r, sm;
}
var am, xE;
function OV() {
  if (xE) return am;
  xE = 1;
  var e = Vy(), t = xi(), r = Ys(), o = rt(), s = Zn(), a = wi(), l = qu(), u = Ks(), f = "[object Map]", d = "[object Set]", h = Object.prototype, m = h.hasOwnProperty;
  function g(w) {
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
      if (m.call(w, y))
        return !1;
    return !0;
  }
  return am = g, am;
}
var lm, _E;
function rA() {
  if (_E) return lm;
  _E = 1;
  function e(t) {
    return t === void 0;
  }
  return lm = e, lm;
}
var um, bE;
function oA() {
  if (bE) return um;
  bE = 1;
  var e = ju(), t = Zn();
  function r(o, s) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = s(u, f, d);
    }), l;
  }
  return um = r, um;
}
var cm, SE;
function iA() {
  if (SE) return cm;
  SE = 1;
  var e = zu(), t = Jn(), r = oA(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : r;
    return u(a, t(l, 3));
  }
  return cm = s, cm;
}
var fm, EE;
function LV() {
  if (EE) return fm;
  EE = 1;
  function e(t, r, o, s) {
    var a = -1, l = t == null ? 0 : t.length;
    for (s && l && (o = t[++a]); ++a < l; )
      o = r(o, t[a], a, t);
    return o;
  }
  return fm = e, fm;
}
var dm, CE;
function qV() {
  if (CE) return dm;
  CE = 1;
  function e(t, r, o, s, a) {
    return a(t, function(l, u, f) {
      o = s ? (s = !1, l) : r(o, l, u, f);
    }), o;
  }
  return dm = e, dm;
}
var hm, kE;
function sA() {
  if (kE) return hm;
  kE = 1;
  var e = LV(), t = ju(), r = Jn(), o = qV(), s = rt();
  function a(l, u, f) {
    var d = s(l) ? e : o, h = arguments.length < 3;
    return d(l, r(u, 4), f, h, t);
  }
  return hm = a, hm;
}
var pm, RE;
function DV() {
  if (RE) return pm;
  RE = 1;
  var e = fo(), t = rt(), r = Ln(), o = "[object String]";
  function s(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == o;
  }
  return pm = s, pm;
}
var mm, NE;
function jV() {
  if (NE) return mm;
  NE = 1;
  var e = eA(), t = e("length");
  return mm = t, mm;
}
var gm, PE;
function zV() {
  if (PE) return gm;
  PE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + s + a + "]");
  function f(d) {
    return u.test(d);
  }
  return gm = f, gm;
}
var vm, TE;
function FV() {
  if (TE) return vm;
  TE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + s + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", m = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "\\u200d", E = d + "?", y = "[" + a + "]?", x = "(?:" + w + "(?:" + [h, m, g].join("|") + ")" + y + E + ")*", S = y + E + x, C = "(?:" + [h + u + "?", u, m, g, l].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + S, "g");
  function k(N) {
    for (var P = _.lastIndex = 0; _.test(N); )
      ++P;
    return P;
  }
  return vm = k, vm;
}
var ym, AE;
function $V() {
  if (AE) return ym;
  AE = 1;
  var e = jV(), t = zV(), r = FV();
  function o(s) {
    return t(s) ? r(s) : e(s);
  }
  return ym = o, ym;
}
var wm, IE;
function BV() {
  if (IE) return wm;
  IE = 1;
  var e = Vy(), t = xi(), r = Zn(), o = DV(), s = $V(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (r(f))
      return o(f) ? s(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return wm = u, wm;
}
var xm, ME;
function VV() {
  if (ME) return xm;
  ME = 1;
  var e = Fy(), t = zT(), r = Ky(), o = Jn(), s = Du(), a = rt(), l = wi(), u = Us(), f = Zt(), d = Ks();
  function h(m, g, w) {
    var E = a(m), y = E || l(m) || d(m);
    if (g = o(g, 4), w == null) {
      var x = m && m.constructor;
      y ? w = E ? new x() : [] : f(m) ? w = u(x) ? t(s(m)) : {} : w = {};
    }
    return (y ? e : r)(m, function(S, C, _) {
      return g(w, S, C, _);
    }), w;
  }
  return xm = h, xm;
}
var _m, OE;
function HV() {
  if (OE) return _m;
  OE = 1;
  var e = yi(), t = Ys(), r = rt(), o = e ? e.isConcatSpreadable : void 0;
  function s(a) {
    return r(a) || t(a) || !!(o && a && a[o]);
  }
  return _m = s, _m;
}
var bm, LE;
function Zy() {
  if (LE) return bm;
  LE = 1;
  var e = Wy(), t = HV();
  function r(o, s, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      s > 0 && a(h) ? s > 1 ? r(h, s - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return bm = r, bm;
}
var Sm, qE;
function WV() {
  if (qE) return Sm;
  qE = 1;
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
  return Sm = e, Sm;
}
var Em, DE;
function aA() {
  if (DE) return Em;
  DE = 1;
  var e = WV(), t = Math.max;
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
  return Em = r, Em;
}
var Cm, jE;
function UV() {
  if (jE) return Cm;
  jE = 1;
  var e = Gy(), t = kT(), r = mo(), o = t ? function(s, a) {
    return t(s, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Cm = o, Cm;
}
var km, zE;
function GV() {
  if (zE) return km;
  zE = 1;
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
  return km = o, km;
}
var Rm, FE;
function lA() {
  if (FE) return Rm;
  FE = 1;
  var e = UV(), t = GV(), r = t(e);
  return Rm = r, Rm;
}
var Nm, $E;
function Bu() {
  if ($E) return Nm;
  $E = 1;
  var e = mo(), t = aA(), r = lA();
  function o(s, a) {
    return r(t(s, a, e), s + "");
  }
  return Nm = o, Nm;
}
var Pm, BE;
function uA() {
  if (BE) return Pm;
  BE = 1;
  function e(t, r, o, s) {
    for (var a = t.length, l = o + (s ? 1 : -1); s ? l-- : ++l < a; )
      if (r(t[l], l, t))
        return l;
    return -1;
  }
  return Pm = e, Pm;
}
var Tm, VE;
function YV() {
  if (VE) return Tm;
  VE = 1;
  function e(t) {
    return t !== t;
  }
  return Tm = e, Tm;
}
var Am, HE;
function KV() {
  if (HE) return Am;
  HE = 1;
  function e(t, r, o) {
    for (var s = o - 1, a = t.length; ++s < a; )
      if (t[s] === r)
        return s;
    return -1;
  }
  return Am = e, Am;
}
var Im, WE;
function XV() {
  if (WE) return Im;
  WE = 1;
  var e = uA(), t = YV(), r = KV();
  function o(s, a, l) {
    return a === a ? r(s, a, l) : e(s, t, l);
  }
  return Im = o, Im;
}
var Mm, UE;
function QV() {
  if (UE) return Mm;
  UE = 1;
  var e = XV();
  function t(r, o) {
    var s = r == null ? 0 : r.length;
    return !!s && e(r, o, 0) > -1;
  }
  return Mm = t, Mm;
}
var Om, GE;
function ZV() {
  if (GE) return Om;
  GE = 1;
  function e(t, r, o) {
    for (var s = -1, a = t == null ? 0 : t.length; ++s < a; )
      if (o(r, t[s]))
        return !0;
    return !1;
  }
  return Om = e, Om;
}
var Lm, YE;
function JV() {
  if (YE) return Lm;
  YE = 1;
  function e() {
  }
  return Lm = e, Lm;
}
var qm, KE;
function eH() {
  if (KE) return qm;
  KE = 1;
  var e = qT(), t = JV(), r = Xy(), o = 1 / 0, s = e && 1 / r(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return qm = s, qm;
}
var Dm, XE;
function tH() {
  if (XE) return Dm;
  XE = 1;
  var e = WT(), t = QV(), r = ZV(), o = UT(), s = eH(), a = Xy(), l = 200;
  function u(f, d, h) {
    var m = -1, g = t, w = f.length, E = !0, y = [], x = y;
    if (h)
      E = !1, g = r;
    else if (w >= l) {
      var S = d ? null : s(f);
      if (S)
        return a(S);
      E = !1, g = o, x = new e();
    } else
      x = d ? [] : y;
    e:
      for (; ++m < w; ) {
        var C = f[m], _ = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, E && _ === _) {
          for (var k = x.length; k--; )
            if (x[k] === _)
              continue e;
          d && x.push(_), y.push(C);
        } else g(x, _, h) || (x !== y && x.push(_), y.push(C));
      }
    return y;
  }
  return Dm = u, Dm;
}
var jm, QE;
function cA() {
  if (QE) return jm;
  QE = 1;
  var e = Zn(), t = Ln();
  function r(o) {
    return t(o) && e(o);
  }
  return jm = r, jm;
}
var zm, ZE;
function nH() {
  if (ZE) return zm;
  ZE = 1;
  var e = Zy(), t = Bu(), r = tH(), o = cA(), s = t(function(a) {
    return r(e(a, 1, o, !0));
  });
  return zm = s, zm;
}
var Fm, JE;
function rH() {
  if (JE) return Fm;
  JE = 1;
  var e = zu();
  function t(r, o) {
    return e(o, function(s) {
      return r[s];
    });
  }
  return Fm = t, Fm;
}
var $m, eC;
function fA() {
  if (eC) return $m;
  eC = 1;
  var e = rH(), t = Or();
  function r(o) {
    return o == null ? [] : e(o, t(o));
  }
  return $m = r, $m;
}
var Bm, tC;
function Jt() {
  if (tC) return Bm;
  tC = 1;
  var e;
  if (typeof Dy == "function")
    try {
      e = {
        clone: cV(),
        constant: Gy(),
        each: HT(),
        filter: tA(),
        has: nA(),
        isArray: rt(),
        isEmpty: OV(),
        isFunction: Us(),
        isUndefined: rA(),
        keys: Or(),
        map: iA(),
        reduce: sA(),
        size: BV(),
        transform: VV(),
        union: nH(),
        values: fA()
      };
    } catch {
    }
  return e || (e = window._), Bm = e, Bm;
}
var Vm, nC;
function Jy() {
  if (nC) return Vm;
  nC = 1;
  var e = Jt();
  Vm = s;
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
    return e.filter(this.nodes(), function(m) {
      return e.isEmpty(h._in[m]);
    });
  }, s.prototype.sinks = function() {
    var h = this;
    return e.filter(this.nodes(), function(m) {
      return e.isEmpty(h._out[m]);
    });
  }, s.prototype.setNodes = function(h, m) {
    var g = arguments, w = this;
    return e.each(h, function(E) {
      g.length > 1 ? w.setNode(E, m) : w.setNode(E);
    }), this;
  }, s.prototype.setNode = function(h, m) {
    return e.has(this._nodes, h) ? (arguments.length > 1 && (this._nodes[h] = m), this) : (this._nodes[h] = arguments.length > 1 ? m : this._defaultNodeLabelFn(h), this._isCompound && (this._parent[h] = r, this._children[h] = {}, this._children[r][h] = !0), this._in[h] = {}, this._preds[h] = {}, this._out[h] = {}, this._sucs[h] = {}, ++this._nodeCount, this);
  }, s.prototype.node = function(h) {
    return this._nodes[h];
  }, s.prototype.hasNode = function(h) {
    return e.has(this._nodes, h);
  }, s.prototype.removeNode = function(h) {
    var m = this;
    if (e.has(this._nodes, h)) {
      var g = function(w) {
        m.removeEdge(m._edgeObjs[w]);
      };
      delete this._nodes[h], this._isCompound && (this._removeFromParentsChildList(h), delete this._parent[h], e.each(this.children(h), function(w) {
        m.setParent(w);
      }), delete this._children[h]), e.each(e.keys(this._in[h]), g), delete this._in[h], delete this._preds[h], e.each(e.keys(this._out[h]), g), delete this._out[h], delete this._sucs[h], --this._nodeCount;
    }
    return this;
  }, s.prototype.setParent = function(h, m) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (e.isUndefined(m))
      m = r;
    else {
      m += "";
      for (var g = m; !e.isUndefined(g); g = this.parent(g))
        if (g === h)
          throw new Error("Setting " + m + " as parent of " + h + " would create a cycle");
      this.setNode(m);
    }
    return this.setNode(h), this._removeFromParentsChildList(h), this._parent[h] = m, this._children[m][h] = !0, this;
  }, s.prototype._removeFromParentsChildList = function(h) {
    delete this._children[this._parent[h]][h];
  }, s.prototype.parent = function(h) {
    if (this._isCompound) {
      var m = this._parent[h];
      if (m !== r)
        return m;
    }
  }, s.prototype.children = function(h) {
    if (e.isUndefined(h) && (h = r), this._isCompound) {
      var m = this._children[h];
      if (m)
        return e.keys(m);
    } else {
      if (h === r)
        return this.nodes();
      if (this.hasNode(h))
        return [];
    }
  }, s.prototype.predecessors = function(h) {
    var m = this._preds[h];
    if (m)
      return e.keys(m);
  }, s.prototype.successors = function(h) {
    var m = this._sucs[h];
    if (m)
      return e.keys(m);
  }, s.prototype.neighbors = function(h) {
    var m = this.predecessors(h);
    if (m)
      return e.union(m, this.successors(h));
  }, s.prototype.isLeaf = function(h) {
    var m;
    return this.isDirected() ? m = this.successors(h) : m = this.neighbors(h), m.length === 0;
  }, s.prototype.filterNodes = function(h) {
    var m = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    m.setGraph(this.graph());
    var g = this;
    e.each(this._nodes, function(y, x) {
      h(x) && m.setNode(x, y);
    }), e.each(this._edgeObjs, function(y) {
      m.hasNode(y.v) && m.hasNode(y.w) && m.setEdge(y, g.edge(y));
    });
    var w = {};
    function E(y) {
      var x = g.parent(y);
      return x === void 0 || m.hasNode(x) ? (w[y] = x, x) : x in w ? w[x] : E(x);
    }
    return this._isCompound && e.each(m.nodes(), function(y) {
      m.setParent(y, E(y));
    }), m;
  }, s.prototype.setDefaultEdgeLabel = function(h) {
    return e.isFunction(h) || (h = e.constant(h)), this._defaultEdgeLabelFn = h, this;
  }, s.prototype.edgeCount = function() {
    return this._edgeCount;
  }, s.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, s.prototype.setPath = function(h, m) {
    var g = this, w = arguments;
    return e.reduce(h, function(E, y) {
      return w.length > 1 ? g.setEdge(E, y, m) : g.setEdge(E, y), y;
    }), this;
  }, s.prototype.setEdge = function() {
    var h, m, g, w, E = !1, y = arguments[0];
    typeof y == "object" && y !== null && "v" in y ? (h = y.v, m = y.w, g = y.name, arguments.length === 2 && (w = arguments[1], E = !0)) : (h = y, m = arguments[1], g = arguments[3], arguments.length > 2 && (w = arguments[2], E = !0)), h = "" + h, m = "" + m, e.isUndefined(g) || (g = "" + g);
    var x = u(this._isDirected, h, m, g);
    if (e.has(this._edgeLabels, x))
      return E && (this._edgeLabels[x] = w), this;
    if (!e.isUndefined(g) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(h), this.setNode(m), this._edgeLabels[x] = E ? w : this._defaultEdgeLabelFn(h, m, g);
    var S = f(this._isDirected, h, m, g);
    return h = S.v, m = S.w, Object.freeze(S), this._edgeObjs[x] = S, a(this._preds[m], h), a(this._sucs[h], m), this._in[m][x] = S, this._out[h][x] = S, this._edgeCount++, this;
  }, s.prototype.edge = function(h, m, g) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, m, g);
    return this._edgeLabels[w];
  }, s.prototype.hasEdge = function(h, m, g) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, m, g);
    return e.has(this._edgeLabels, w);
  }, s.prototype.removeEdge = function(h, m, g) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, m, g), E = this._edgeObjs[w];
    return E && (h = E.v, m = E.w, delete this._edgeLabels[w], delete this._edgeObjs[w], l(this._preds[m], h), l(this._sucs[h], m), delete this._in[m][w], delete this._out[h][w], this._edgeCount--), this;
  }, s.prototype.inEdges = function(h, m) {
    var g = this._in[h];
    if (g) {
      var w = e.values(g);
      return m ? e.filter(w, function(E) {
        return E.v === m;
      }) : w;
    }
  }, s.prototype.outEdges = function(h, m) {
    var g = this._out[h];
    if (g) {
      var w = e.values(g);
      return m ? e.filter(w, function(E) {
        return E.w === m;
      }) : w;
    }
  }, s.prototype.nodeEdges = function(h, m) {
    var g = this.inEdges(h, m);
    if (g)
      return g.concat(this.outEdges(h, m));
  };
  function a(h, m) {
    h[m] ? h[m]++ : h[m] = 1;
  }
  function l(h, m) {
    --h[m] || delete h[m];
  }
  function u(h, m, g, w) {
    var E = "" + m, y = "" + g;
    if (!h && E > y) {
      var x = E;
      E = y, y = x;
    }
    return E + o + y + o + (e.isUndefined(w) ? t : w);
  }
  function f(h, m, g, w) {
    var E = "" + m, y = "" + g;
    if (!h && E > y) {
      var x = E;
      E = y, y = x;
    }
    var S = { v: E, w: y };
    return w && (S.name = w), S;
  }
  function d(h, m) {
    return u(h, m.v, m.w, m.name);
  }
  return Vm;
}
var Hm, rC;
function oH() {
  return rC || (rC = 1, Hm = "2.1.8"), Hm;
}
var Wm, oC;
function iH() {
  return oC || (oC = 1, Wm = {
    Graph: Jy(),
    version: oH()
  }), Wm;
}
var Um, iC;
function sH() {
  if (iC) return Um;
  iC = 1;
  var e = Jt(), t = Jy();
  Um = {
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
  return Um;
}
var Gm, sC;
function aH() {
  if (sC) return Gm;
  sC = 1;
  var e = Jt();
  Gm = t;
  function t(r) {
    var o = {}, s = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(r.successors(u), l), e.each(r.predecessors(u), l));
    }
    return e.each(r.nodes(), function(u) {
      a = [], l(u), a.length && s.push(a);
    }), s;
  }
  return Gm;
}
var Ym, aC;
function dA() {
  if (aC) return Ym;
  aC = 1;
  var e = Jt();
  Ym = t;
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
  }, Ym;
}
var Km, lC;
function hA() {
  if (lC) return Km;
  lC = 1;
  var e = Jt(), t = dA();
  Km = o;
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
    var d = {}, h = new t(), m, g, w = function(E) {
      var y = E.v !== m ? E.v : E.w, x = d[y], S = u(E), C = g.distance + S;
      if (S < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + E + " Weight: " + S);
      C < x.distance && (x.distance = C, x.predecessor = m, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(E) {
      var y = E === l ? 0 : Number.POSITIVE_INFINITY;
      d[E] = { distance: y }, h.add(E, y);
    }); h.size() > 0 && (m = h.removeMin(), g = d[m], g.distance !== Number.POSITIVE_INFINITY); )
      f(m).forEach(w);
    return d;
  }
  return Km;
}
var Xm, uC;
function lH() {
  if (uC) return Xm;
  uC = 1;
  var e = hA(), t = Jt();
  Xm = r;
  function r(o, s, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, s, a);
    }, {});
  }
  return Xm;
}
var Qm, cC;
function pA() {
  if (cC) return Qm;
  cC = 1;
  var e = Jt();
  Qm = t;
  function t(r) {
    var o = 0, s = [], a = {}, l = [];
    function u(f) {
      var d = a[f] = {
        onStack: !0,
        lowlink: o,
        index: o++
      };
      if (s.push(f), r.successors(f).forEach(function(g) {
        e.has(a, g) ? a[g].onStack && (d.lowlink = Math.min(d.lowlink, a[g].index)) : (u(g), d.lowlink = Math.min(d.lowlink, a[g].lowlink));
      }), d.lowlink === d.index) {
        var h = [], m;
        do
          m = s.pop(), a[m].onStack = !1, h.push(m);
        while (f !== m);
        l.push(h);
      }
    }
    return r.nodes().forEach(function(f) {
      e.has(a, f) || u(f);
    }), l;
  }
  return Qm;
}
var Zm, fC;
function uH() {
  if (fC) return Zm;
  fC = 1;
  var e = Jt(), t = pA();
  Zm = r;
  function r(o) {
    return e.filter(t(o), function(s) {
      return s.length > 1 || s.length === 1 && o.hasEdge(s[0], s[0]);
    });
  }
  return Zm;
}
var Jm, dC;
function cH() {
  if (dC) return Jm;
  dC = 1;
  var e = Jt();
  Jm = r;
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
        var m = h.v === d ? h.w : h.v, g = a(h);
        u[d][m] = { distance: g, predecessor: d };
      });
    }), f.forEach(function(d) {
      var h = u[d];
      f.forEach(function(m) {
        var g = u[m];
        f.forEach(function(w) {
          var E = g[d], y = h[w], x = g[w], S = E.distance + y.distance;
          S < x.distance && (x.distance = S, x.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return Jm;
}
var eg, hC;
function mA() {
  if (hC) return eg;
  hC = 1;
  var e = Jt();
  eg = t, t.CycleException = r;
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
  return r.prototype = new Error(), eg;
}
var tg, pC;
function fH() {
  if (pC) return tg;
  pC = 1;
  var e = mA();
  tg = t;
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
  return tg;
}
var ng, mC;
function gA() {
  if (mC) return ng;
  mC = 1;
  var e = Jt();
  ng = t;
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
  return ng;
}
var rg, gC;
function dH() {
  if (gC) return rg;
  gC = 1;
  var e = gA();
  rg = t;
  function t(r, o) {
    return e(r, o, "post");
  }
  return rg;
}
var og, vC;
function hH() {
  if (vC) return og;
  vC = 1;
  var e = gA();
  og = t;
  function t(r, o) {
    return e(r, o, "pre");
  }
  return og;
}
var ig, yC;
function pH() {
  if (yC) return ig;
  yC = 1;
  var e = Jt(), t = Jy(), r = dA();
  ig = o;
  function o(s, a) {
    var l = new t(), u = {}, f = new r(), d;
    function h(g) {
      var w = g.v === d ? g.w : g.v, E = f.priority(w);
      if (E !== void 0) {
        var y = a(g);
        y < E && (u[w] = d, f.decrease(w, y));
      }
    }
    if (s.nodeCount() === 0)
      return l;
    e.each(s.nodes(), function(g) {
      f.add(g, Number.POSITIVE_INFINITY), l.setNode(g);
    }), f.decrease(s.nodes()[0], 0);
    for (var m = !1; f.size() > 0; ) {
      if (d = f.removeMin(), e.has(u, d))
        l.setEdge(d, u[d]);
      else {
        if (m)
          throw new Error("Input graph is not connected: " + s);
        m = !0;
      }
      s.nodeEdges(d).forEach(h);
    }
    return l;
  }
  return ig;
}
var sg, wC;
function mH() {
  return wC || (wC = 1, sg = {
    components: aH(),
    dijkstra: hA(),
    dijkstraAll: lH(),
    findCycles: uH(),
    floydWarshall: cH(),
    isAcyclic: fH(),
    postorder: dH(),
    preorder: hH(),
    prim: pH(),
    tarjan: pA(),
    topsort: mA()
  }), sg;
}
var ag, xC;
function gH() {
  if (xC) return ag;
  xC = 1;
  var e = iH();
  return ag = {
    Graph: e.Graph,
    json: sH(),
    alg: mH(),
    version: e.version
  }, ag;
}
var lg, _C;
function vn() {
  if (_C) return lg;
  _C = 1;
  var e;
  if (typeof Dy == "function")
    try {
      e = gH();
    } catch {
    }
  return e || (e = window.graphlib), lg = e, lg;
}
var ug, bC;
function vH() {
  if (bC) return ug;
  bC = 1;
  var e = $T(), t = 1, r = 4;
  function o(s) {
    return e(s, t | r);
  }
  return ug = o, ug;
}
var cg, SC;
function Vu() {
  if (SC) return cg;
  SC = 1;
  var e = vi(), t = Zn(), r = Ou(), o = Zt();
  function s(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && r(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return cg = s, cg;
}
var fg, EC;
function yH() {
  if (EC) return fg;
  EC = 1;
  var e = Bu(), t = vi(), r = Vu(), o = po(), s = Object.prototype, a = s.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, m = h > 2 ? f[2] : void 0;
    for (m && r(f[0], f[1], m) && (h = 1); ++d < h; )
      for (var g = f[d], w = o(g), E = -1, y = w.length; ++E < y; ) {
        var x = w[E], S = u[x];
        (S === void 0 || t(S, s[x]) && !a.call(u, x)) && (u[x] = g[x]);
      }
    return u;
  });
  return fg = l, fg;
}
var dg, CC;
function wH() {
  if (CC) return dg;
  CC = 1;
  var e = Jn(), t = Zn(), r = Or();
  function o(s) {
    return function(a, l, u) {
      var f = Object(a);
      if (!t(a)) {
        var d = e(l, 3);
        a = r(a), l = function(m) {
          return d(f[m], m, f);
        };
      }
      var h = s(a, l, u);
      return h > -1 ? f[d ? a[h] : h] : void 0;
    };
  }
  return dg = o, dg;
}
var hg, kC;
function xH() {
  if (kC) return hg;
  kC = 1;
  var e = /\s/;
  function t(r) {
    for (var o = r.length; o-- && e.test(r.charAt(o)); )
      ;
    return o;
  }
  return hg = t, hg;
}
var pg, RC;
function _H() {
  if (RC) return pg;
  RC = 1;
  var e = xH(), t = /^\s+/;
  function r(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return pg = r, pg;
}
var mg, NC;
function bH() {
  if (NC) return mg;
  NC = 1;
  var e = _H(), t = Zt(), r = _i(), o = NaN, s = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
    var m = a.test(d);
    return m || l.test(d) ? u(d.slice(2), m ? 2 : 8) : s.test(d) ? o : +d;
  }
  return mg = f, mg;
}
var gg, PC;
function vA() {
  if (PC) return gg;
  PC = 1;
  var e = bH(), t = 1 / 0, r = 17976931348623157e292;
  function o(s) {
    if (!s)
      return s === 0 ? s : 0;
    if (s = e(s), s === t || s === -t) {
      var a = s < 0 ? -1 : 1;
      return a * r;
    }
    return s === s ? s : 0;
  }
  return gg = o, gg;
}
var vg, TC;
function SH() {
  if (TC) return vg;
  TC = 1;
  var e = vA();
  function t(r) {
    var o = e(r), s = o % 1;
    return o === o ? s ? o - s : o : 0;
  }
  return vg = t, vg;
}
var yg, AC;
function EH() {
  if (AC) return yg;
  AC = 1;
  var e = uA(), t = Jn(), r = SH(), o = Math.max;
  function s(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : r(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return yg = s, yg;
}
var wg, IC;
function CH() {
  if (IC) return wg;
  IC = 1;
  var e = wH(), t = EH(), r = e(t);
  return wg = r, wg;
}
var xg, MC;
function yA() {
  if (MC) return xg;
  MC = 1;
  var e = Zy();
  function t(r) {
    var o = r == null ? 0 : r.length;
    return o ? e(r, 1) : [];
  }
  return xg = t, xg;
}
var _g, OC;
function kH() {
  if (OC) return _g;
  OC = 1;
  var e = Yy(), t = BT(), r = po();
  function o(s, a) {
    return s == null ? s : e(s, t(a), r);
  }
  return _g = o, _g;
}
var bg, LC;
function RH() {
  if (LC) return bg;
  LC = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return bg = e, bg;
}
var Sg, qC;
function NH() {
  if (qC) return Sg;
  qC = 1;
  var e = Iu(), t = Ky(), r = Jn();
  function o(s, a) {
    var l = {};
    return a = r(a, 3), t(s, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Sg = o, Sg;
}
var Eg, DC;
function e0() {
  if (DC) return Eg;
  DC = 1;
  var e = _i();
  function t(r, o, s) {
    for (var a = -1, l = r.length; ++a < l; ) {
      var u = r[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : s(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Eg = t, Eg;
}
var Cg, jC;
function PH() {
  if (jC) return Cg;
  jC = 1;
  function e(t, r) {
    return t > r;
  }
  return Cg = e, Cg;
}
var kg, zC;
function TH() {
  if (zC) return kg;
  zC = 1;
  var e = e0(), t = PH(), r = mo();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return kg = o, kg;
}
var Rg, FC;
function wA() {
  if (FC) return Rg;
  FC = 1;
  var e = Iu(), t = vi();
  function r(o, s, a) {
    (a !== void 0 && !t(o[s], a) || a === void 0 && !(s in o)) && e(o, s, a);
  }
  return Rg = r, Rg;
}
var Ng, $C;
function AH() {
  if ($C) return Ng;
  $C = 1;
  var e = fo(), t = Du(), r = Ln(), o = "[object Object]", s = Function.prototype, a = Object.prototype, l = s.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!r(h) || e(h) != o)
      return !1;
    var m = t(h);
    if (m === null)
      return !0;
    var g = u.call(m, "constructor") && m.constructor;
    return typeof g == "function" && g instanceof g && l.call(g) == f;
  }
  return Ng = d, Ng;
}
var Pg, BC;
function xA() {
  if (BC) return Pg;
  BC = 1;
  function e(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return Pg = e, Pg;
}
var Tg, VC;
function IH() {
  if (VC) return Tg;
  VC = 1;
  var e = Gs(), t = po();
  function r(o) {
    return e(o, t(o));
  }
  return Tg = r, Tg;
}
var Ag, HC;
function MH() {
  if (HC) return Ag;
  HC = 1;
  var e = wA(), t = PT(), r = jT(), o = TT(), s = FT(), a = Ys(), l = rt(), u = cA(), f = wi(), d = Us(), h = Zt(), m = AH(), g = Ks(), w = xA(), E = IH();
  function y(x, S, C, _, k, N, P) {
    var A = w(x, C), O = w(S, C), D = P.get(O);
    if (D) {
      e(x, C, D);
      return;
    }
    var G = N ? N(A, O, C + "", x, S, P) : void 0, B = G === void 0;
    if (B) {
      var V = l(O), X = !V && f(O), L = !V && !X && g(O);
      G = O, V || X || L ? l(A) ? G = A : u(A) ? G = o(A) : X ? (B = !1, G = t(O, !0)) : L ? (B = !1, G = r(O, !0)) : G = [] : m(O) || a(O) ? (G = A, a(A) ? G = E(A) : (!h(A) || d(A)) && (G = s(O))) : B = !1;
    }
    B && (P.set(O, G), k(G, O, _, N, P), P.delete(O)), e(x, C, G);
  }
  return Ag = y, Ag;
}
var Ig, WC;
function OH() {
  if (WC) return Ig;
  WC = 1;
  var e = Au(), t = wA(), r = Yy(), o = MH(), s = Zt(), a = po(), l = xA();
  function u(f, d, h, m, g) {
    f !== d && r(d, function(w, E) {
      if (g || (g = new e()), s(w))
        o(f, d, E, h, u, m, g);
      else {
        var y = m ? m(l(f, E), w, E + "", f, d, g) : void 0;
        y === void 0 && (y = w), t(f, E, y);
      }
    }, a);
  }
  return Ig = u, Ig;
}
var Mg, UC;
function LH() {
  if (UC) return Mg;
  UC = 1;
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
  return Mg = r, Mg;
}
var Og, GC;
function qH() {
  if (GC) return Og;
  GC = 1;
  var e = OH(), t = LH(), r = t(function(o, s, a) {
    e(o, s, a);
  });
  return Og = r, Og;
}
var Lg, YC;
function _A() {
  if (YC) return Lg;
  YC = 1;
  function e(t, r) {
    return t < r;
  }
  return Lg = e, Lg;
}
var qg, KC;
function DH() {
  if (KC) return qg;
  KC = 1;
  var e = e0(), t = _A(), r = mo();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return qg = o, qg;
}
var Dg, XC;
function jH() {
  if (XC) return Dg;
  XC = 1;
  var e = e0(), t = Jn(), r = _A();
  function o(s, a) {
    return s && s.length ? e(s, t(a, 2), r) : void 0;
  }
  return Dg = o, Dg;
}
var jg, QC;
function zH() {
  if (QC) return jg;
  QC = 1;
  var e = wn(), t = function() {
    return e.Date.now();
  };
  return jg = t, jg;
}
var zg, ZC;
function FH() {
  if (ZC) return zg;
  ZC = 1;
  var e = Mu(), t = Fu(), r = Ou(), o = Zt(), s = Xs();
  function a(l, u, f, d) {
    if (!o(l))
      return l;
    u = t(u, l);
    for (var h = -1, m = u.length, g = m - 1, w = l; w != null && ++h < m; ) {
      var E = s(u[h]), y = f;
      if (E === "__proto__" || E === "constructor" || E === "prototype")
        return l;
      if (h != g) {
        var x = w[E];
        y = d ? d(x, E, w) : void 0, y === void 0 && (y = o(x) ? x : r(u[h + 1]) ? [] : {});
      }
      e(w, E, y), w = w[E];
    }
    return l;
  }
  return zg = a, zg;
}
var Fg, JC;
function $H() {
  if (JC) return Fg;
  JC = 1;
  var e = $u(), t = FH(), r = Fu();
  function o(s, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], m = e(s, h);
      l(m, h) && t(d, r(h, s), m);
    }
    return d;
  }
  return Fg = o, Fg;
}
var $g, ek;
function BH() {
  if (ek) return $g;
  ek = 1;
  var e = $H(), t = JT();
  function r(o, s) {
    return e(o, s, function(a, l) {
      return t(o, l);
    });
  }
  return $g = r, $g;
}
var Bg, tk;
function VH() {
  if (tk) return Bg;
  tk = 1;
  var e = yA(), t = aA(), r = lA();
  function o(s) {
    return r(t(s, void 0, e), s + "");
  }
  return Bg = o, Bg;
}
var Vg, nk;
function HH() {
  if (nk) return Vg;
  nk = 1;
  var e = BH(), t = VH(), r = t(function(o, s) {
    return o == null ? {} : e(o, s);
  });
  return Vg = r, Vg;
}
var Hg, rk;
function WH() {
  if (rk) return Hg;
  rk = 1;
  var e = Math.ceil, t = Math.max;
  function r(o, s, a, l) {
    for (var u = -1, f = t(e((s - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return Hg = r, Hg;
}
var Wg, ok;
function UH() {
  if (ok) return Wg;
  ok = 1;
  var e = WH(), t = Vu(), r = vA();
  function o(s) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = r(a), l === void 0 ? (l = a, a = 0) : l = r(l), u = u === void 0 ? a < l ? 1 : -1 : r(u), e(a, l, u, s);
    };
  }
  return Wg = o, Wg;
}
var Ug, ik;
function GH() {
  if (ik) return Ug;
  ik = 1;
  var e = UH(), t = e();
  return Ug = t, Ug;
}
var Gg, sk;
function YH() {
  if (sk) return Gg;
  sk = 1;
  function e(t, r) {
    var o = t.length;
    for (t.sort(r); o--; )
      t[o] = t[o].value;
    return t;
  }
  return Gg = e, Gg;
}
var Yg, ak;
function KH() {
  if (ak) return Yg;
  ak = 1;
  var e = _i();
  function t(r, o) {
    if (r !== o) {
      var s = r !== void 0, a = r === null, l = r === r, u = e(r), f = o !== void 0, d = o === null, h = o === o, m = e(o);
      if (!d && !m && !u && r > o || u && f && h && !d && !m || a && f && h || !s && h || !l)
        return 1;
      if (!a && !u && !m && r < o || m && s && l && !a && !u || d && s && l || !f && l || !h)
        return -1;
    }
    return 0;
  }
  return Yg = t, Yg;
}
var Kg, lk;
function XH() {
  if (lk) return Kg;
  lk = 1;
  var e = KH();
  function t(r, o, s) {
    for (var a = -1, l = r.criteria, u = o.criteria, f = l.length, d = s.length; ++a < f; ) {
      var h = e(l[a], u[a]);
      if (h) {
        if (a >= d)
          return h;
        var m = s[a];
        return h * (m == "desc" ? -1 : 1);
      }
    }
    return r.index - o.index;
  }
  return Kg = t, Kg;
}
var Xg, uk;
function QH() {
  if (uk) return Xg;
  uk = 1;
  var e = zu(), t = $u(), r = Jn(), o = oA(), s = YH(), a = Lu(), l = XH(), u = mo(), f = rt();
  function d(h, m, g) {
    m.length ? m = e(m, function(y) {
      return f(y) ? function(x) {
        return t(x, y.length === 1 ? y[0] : y);
      } : y;
    }) : m = [u];
    var w = -1;
    m = e(m, a(r));
    var E = o(h, function(y, x, S) {
      var C = e(m, function(_) {
        return _(y);
      });
      return { criteria: C, index: ++w, value: y };
    });
    return s(E, function(y, x) {
      return l(y, x, g);
    });
  }
  return Xg = d, Xg;
}
var Qg, ck;
function ZH() {
  if (ck) return Qg;
  ck = 1;
  var e = Zy(), t = QH(), r = Bu(), o = Vu(), s = r(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return Qg = s, Qg;
}
var Zg, fk;
function JH() {
  if (fk) return Zg;
  fk = 1;
  var e = QT(), t = 0;
  function r(o) {
    var s = ++t;
    return e(o) + s;
  }
  return Zg = r, Zg;
}
var Jg, dk;
function e8() {
  if (dk) return Jg;
  dk = 1;
  function e(t, r, o) {
    for (var s = -1, a = t.length, l = r.length, u = {}; ++s < a; ) {
      var f = s < l ? r[s] : void 0;
      o(u, t[s], f);
    }
    return u;
  }
  return Jg = e, Jg;
}
var ev, hk;
function t8() {
  if (hk) return ev;
  hk = 1;
  var e = Mu(), t = e8();
  function r(o, s) {
    return t(o || [], s || [], e);
  }
  return ev = r, ev;
}
var tv, pk;
function Be() {
  if (pk) return tv;
  pk = 1;
  var e;
  if (typeof Dy == "function")
    try {
      e = {
        cloneDeep: vH(),
        constant: Gy(),
        defaults: yH(),
        each: HT(),
        filter: tA(),
        find: CH(),
        flatten: yA(),
        forEach: VT(),
        forIn: kH(),
        has: nA(),
        isUndefined: rA(),
        last: RH(),
        map: iA(),
        mapValues: NH(),
        max: TH(),
        merge: qH(),
        min: DH(),
        minBy: jH(),
        now: zH(),
        pick: HH(),
        range: GH(),
        reduce: sA(),
        sortBy: ZH(),
        uniqueId: JH(),
        values: fA(),
        zipObject: t8()
      };
    } catch {
    }
  return e || (e = window._), tv = e, tv;
}
var nv, mk;
function n8() {
  if (mk) return nv;
  mk = 1, nv = e;
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
var rv, gk;
function r8() {
  if (gk) return rv;
  gk = 1;
  var e = Be(), t = vn().Graph, r = n8();
  rv = s;
  var o = e.constant(1);
  function s(d, h) {
    if (d.nodeCount() <= 1)
      return [];
    var m = u(d, h || o), g = a(m.graph, m.buckets, m.zeroIdx);
    return e.flatten(e.map(g, function(w) {
      return d.outEdges(w.v, w.w);
    }), !0);
  }
  function a(d, h, m) {
    for (var g = [], w = h[h.length - 1], E = h[0], y; d.nodeCount(); ) {
      for (; y = E.dequeue(); )
        l(d, h, m, y);
      for (; y = w.dequeue(); )
        l(d, h, m, y);
      if (d.nodeCount()) {
        for (var x = h.length - 2; x > 0; --x)
          if (y = h[x].dequeue(), y) {
            g = g.concat(l(d, h, m, y, !0));
            break;
          }
      }
    }
    return g;
  }
  function l(d, h, m, g, w) {
    var E = w ? [] : void 0;
    return e.forEach(d.inEdges(g.v), function(y) {
      var x = d.edge(y), S = d.node(y.v);
      w && E.push({ v: y.v, w: y.w }), S.out -= x, f(h, m, S);
    }), e.forEach(d.outEdges(g.v), function(y) {
      var x = d.edge(y), S = y.w, C = d.node(S);
      C.in -= x, f(h, m, C);
    }), d.removeNode(g.v), E;
  }
  function u(d, h) {
    var m = new t(), g = 0, w = 0;
    e.forEach(d.nodes(), function(x) {
      m.setNode(x, { v: x, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(x) {
      var S = m.edge(x.v, x.w) || 0, C = h(x), _ = S + C;
      m.setEdge(x.v, x.w, _), w = Math.max(w, m.node(x.v).out += C), g = Math.max(g, m.node(x.w).in += C);
    });
    var E = e.range(w + g + 3).map(function() {
      return new r();
    }), y = g + 1;
    return e.forEach(m.nodes(), function(x) {
      f(E, y, m.node(x));
    }), { graph: m, buckets: E, zeroIdx: y };
  }
  function f(d, h, m) {
    m.out ? m.in ? d[m.out - m.in + h].enqueue(m) : d[d.length - 1].enqueue(m) : d[0].enqueue(m);
  }
  return rv;
}
var ov, vk;
function o8() {
  if (vk) return ov;
  vk = 1;
  var e = Be(), t = r8();
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
      e.has(f, h) || (f[h] = !0, u[h] = !0, e.forEach(a.outEdges(h), function(m) {
        e.has(u, m.w) ? l.push(m) : d(m.w);
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
var iv, yk;
function Pt() {
  if (yk) return iv;
  yk = 1;
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
    addBorderNode: m,
    maxRank: g,
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
    var C = x.x, _ = x.y, k = S.x - C, N = S.y - _, P = x.width / 2, A = x.height / 2;
    if (!k && !N)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, D;
    return Math.abs(N) * P > Math.abs(k) * A ? (N < 0 && (A = -A), O = A * k / N, D = A) : (k < 0 && (P = -P), O = P, D = P * N / k), { x: C + O, y: _ + D };
  }
  function f(x) {
    var S = e.map(e.range(g(x) + 1), function() {
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
    var S = e.min(e.map(x.nodes(), function(N) {
      return x.node(N).rank;
    })), C = [];
    e.forEach(x.nodes(), function(N) {
      var P = x.node(N).rank - S;
      C[P] || (C[P] = []), C[P].push(N);
    });
    var _ = 0, k = x.graph().nodeRankFactor;
    e.forEach(C, function(N, P) {
      e.isUndefined(N) && P % k !== 0 ? --_ : _ && e.forEach(N, function(A) {
        x.node(A).rank += _;
      });
    });
  }
  function m(x, S, C, _) {
    var k = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (k.rank = C, k.order = _), r(x, "border", k, S);
  }
  function g(x) {
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
var sv, wk;
function i8() {
  if (wk) return sv;
  wk = 1;
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
    var u = l.v, f = a.node(u).rank, d = l.w, h = a.node(d).rank, m = l.name, g = a.edge(l), w = g.labelRank;
    if (h !== f + 1) {
      a.removeEdge(l);
      var E, y, x;
      for (x = 0, ++f; f < h; ++x, ++f)
        g.points = [], y = {
          width: 0,
          height: 0,
          edgeLabel: g,
          edgeObj: l,
          rank: f
        }, E = t.addDummyNode(a, "edge", y, "_d"), f === w && (y.width = g.width, y.height = g.height, y.dummy = "edge-label", y.labelpos = g.labelpos), a.setEdge(u, E, { weight: g.weight }, m), x === 0 && a.graph().dummyChains.push(E), u = E;
      a.setEdge(u, d, { weight: g.weight }, m);
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
var av, xk;
function ou() {
  if (xk) return av;
  xk = 1;
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
var lv, _k;
function bA() {
  if (_k) return lv;
  _k = 1;
  var e = Be(), t = vn().Graph, r = ou().slack;
  lv = o;
  function o(u) {
    var f = new t({ directed: !1 }), d = u.nodes()[0], h = u.nodeCount();
    f.setNode(d, {});
    for (var m, g; s(f, u) < h; )
      m = a(f, u), g = f.hasNode(m.v) ? r(u, m) : -r(u, m), l(f, u, g);
    return f;
  }
  function s(u, f) {
    function d(h) {
      e.forEach(f.nodeEdges(h), function(m) {
        var g = m.v, w = h === g ? m.w : g;
        !u.hasNode(w) && !r(f, m) && (u.setNode(w, {}), u.setEdge(h, w, {}), d(w));
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
var uv, bk;
function s8() {
  if (bk) return uv;
  bk = 1;
  var e = Be(), t = bA(), r = ou().slack, o = ou().longestPath, s = vn().alg.preorder, a = vn().alg.postorder, l = Pt().simplify;
  uv = u, u.initLowLimValues = m, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = w, u.enterEdge = E, u.exchangeEdges = y;
  function u(_) {
    _ = l(_), o(_);
    var k = t(_);
    m(k), f(k, _);
    for (var N, P; N = w(k); )
      P = E(k, _, N), y(k, _, N, P);
  }
  function f(_, k) {
    var N = a(_, _.nodes());
    N = N.slice(0, N.length - 1), e.forEach(N, function(P) {
      d(_, k, P);
    });
  }
  function d(_, k, N) {
    var P = _.node(N), A = P.parent;
    _.edge(N, A).cutvalue = h(_, k, N);
  }
  function h(_, k, N) {
    var P = _.node(N), A = P.parent, O = !0, D = k.edge(N, A), G = 0;
    return D || (O = !1, D = k.edge(A, N)), G = D.weight, e.forEach(k.nodeEdges(N), function(B) {
      var V = B.v === N, X = V ? B.w : B.v;
      if (X !== A) {
        var L = V === O, H = k.edge(B).weight;
        if (G += L ? H : -H, S(_, N, X)) {
          var $ = _.edge(N, X).cutvalue;
          G += L ? -$ : $;
        }
      }
    }), G;
  }
  function m(_, k) {
    arguments.length < 2 && (k = _.nodes()[0]), g(_, {}, 1, k);
  }
  function g(_, k, N, P, A) {
    var O = N, D = _.node(P);
    return k[P] = !0, e.forEach(_.neighbors(P), function(G) {
      e.has(k, G) || (N = g(_, k, N, G, P));
    }), D.low = O, D.lim = N++, A ? D.parent = A : delete D.parent, N;
  }
  function w(_) {
    return e.find(_.edges(), function(k) {
      return _.edge(k).cutvalue < 0;
    });
  }
  function E(_, k, N) {
    var P = N.v, A = N.w;
    k.hasEdge(P, A) || (P = N.w, A = N.v);
    var O = _.node(P), D = _.node(A), G = O, B = !1;
    O.lim > D.lim && (G = D, B = !0);
    var V = e.filter(k.edges(), function(X) {
      return B === C(_, _.node(X.v), G) && B !== C(_, _.node(X.w), G);
    });
    return e.minBy(V, function(X) {
      return r(k, X);
    });
  }
  function y(_, k, N, P) {
    var A = N.v, O = N.w;
    _.removeEdge(A, O), _.setEdge(P.v, P.w, {}), m(_), f(_, k), x(_, k);
  }
  function x(_, k) {
    var N = e.find(_.nodes(), function(A) {
      return !k.node(A).parent;
    }), P = s(_, N);
    P = P.slice(1), e.forEach(P, function(A) {
      var O = _.node(A).parent, D = k.edge(A, O), G = !1;
      D || (D = k.edge(O, A), G = !0), k.node(A).rank = k.node(O).rank + (G ? D.minlen : -D.minlen);
    });
  }
  function S(_, k, N) {
    return _.hasEdge(k, N);
  }
  function C(_, k, N) {
    return N.low <= k.lim && k.lim <= N.lim;
  }
  return uv;
}
var cv, Sk;
function a8() {
  if (Sk) return cv;
  Sk = 1;
  var e = ou(), t = e.longestPath, r = bA(), o = s8();
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
var fv, Ek;
function l8() {
  if (Ek) return fv;
  Ek = 1;
  var e = Be();
  fv = t;
  function t(s) {
    var a = o(s);
    e.forEach(s.graph().dummyChains, function(l) {
      for (var u = s.node(l), f = u.edgeObj, d = r(s, a, f.v, f.w), h = d.path, m = d.lca, g = 0, w = h[g], E = !0; l !== f.w; ) {
        if (u = s.node(l), E) {
          for (; (w = h[g]) !== m && s.node(w).maxRank < u.rank; )
            g++;
          w === m && (E = !1);
        }
        if (!E) {
          for (; g < h.length - 1 && s.node(w = h[g + 1]).minRank <= u.rank; )
            g++;
          w = h[g];
        }
        s.setParent(l, w), l = s.successors(l)[0];
      }
    });
  }
  function r(s, a, l, u) {
    var f = [], d = [], h = Math.min(a[l].low, a[u].low), m = Math.max(a[l].lim, a[u].lim), g, w;
    g = l;
    do
      g = s.parent(g), f.push(g);
    while (g && (a[g].low > h || m > a[g].lim));
    for (w = g, g = u; (g = s.parent(g)) !== w; )
      d.push(g);
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
var dv, Ck;
function u8() {
  if (Ck) return dv;
  Ck = 1;
  var e = Be(), t = Pt();
  dv = {
    run: r,
    cleanup: l
  };
  function r(u) {
    var f = t.addDummyNode(u, "root", {}, "_root"), d = s(u), h = e.max(e.values(d)) - 1, m = 2 * h + 1;
    u.graph().nestingRoot = f, e.forEach(u.edges(), function(w) {
      u.edge(w).minlen *= m;
    });
    var g = a(u) + 1;
    e.forEach(u.children(), function(w) {
      o(u, f, m, g, h, d, w);
    }), u.graph().nodeRankFactor = m;
  }
  function o(u, f, d, h, m, g, w) {
    var E = u.children(w);
    if (!E.length) {
      w !== f && u.setEdge(f, w, { weight: 0, minlen: d });
      return;
    }
    var y = t.addBorderNode(u, "_bt"), x = t.addBorderNode(u, "_bb"), S = u.node(w);
    u.setParent(y, w), S.borderTop = y, u.setParent(x, w), S.borderBottom = x, e.forEach(E, function(C) {
      o(u, f, d, h, m, g, C);
      var _ = u.node(C), k = _.borderTop ? _.borderTop : C, N = _.borderBottom ? _.borderBottom : C, P = _.borderTop ? h : 2 * h, A = k !== N ? 1 : m - g[w] + 1;
      u.setEdge(y, k, {
        weight: P,
        minlen: A,
        nestingEdge: !0
      }), u.setEdge(N, x, {
        weight: P,
        minlen: A,
        nestingEdge: !0
      });
    }), u.parent(w) || u.setEdge(f, y, { weight: 0, minlen: m + g[w] });
  }
  function s(u) {
    var f = {};
    function d(h, m) {
      var g = u.children(h);
      g && g.length && e.forEach(g, function(w) {
        d(w, m + 1);
      }), f[h] = m;
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
var hv, kk;
function c8() {
  if (kk) return hv;
  kk = 1;
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
    var h = { width: 0, height: 0, rank: d, borderType: a }, m = f[a][d - 1], g = t.addDummyNode(s, "border", h, l);
    f[a][d] = g, s.setParent(g, u), m && s.setEdge(m, g, { weight: 1 });
  }
  return hv;
}
var pv, Rk;
function f8() {
  if (Rk) return pv;
  Rk = 1;
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
      var m = d.edge(h);
      e.forEach(m.points, l), e.has(m, "y") && l(m);
    });
  }
  function l(d) {
    d.y = -d.y;
  }
  function u(d) {
    e.forEach(d.nodes(), function(h) {
      f(d.node(h));
    }), e.forEach(d.edges(), function(h) {
      var m = d.edge(h);
      e.forEach(m.points, f), e.has(m, "x") && f(m);
    });
  }
  function f(d) {
    var h = d.x;
    d.x = d.y, d.y = h;
  }
  return pv;
}
var mv, Nk;
function d8() {
  if (Nk) return mv;
  Nk = 1;
  var e = Be();
  mv = t;
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
  return mv;
}
var gv, Pk;
function h8() {
  if (Pk) return gv;
  Pk = 1;
  var e = Be();
  gv = t;
  function t(o, s) {
    for (var a = 0, l = 1; l < s.length; ++l)
      a += r(o, s[l - 1], s[l]);
    return a;
  }
  function r(o, s, a) {
    for (var l = e.zipObject(
      a,
      e.map(a, function(g, w) {
        return w;
      })
    ), u = e.flatten(e.map(s, function(g) {
      return e.sortBy(e.map(o.outEdges(g), function(w) {
        return { pos: l[w.w], weight: o.edge(w).weight };
      }), "pos");
    }), !0), f = 1; f < a.length; ) f <<= 1;
    var d = 2 * f - 1;
    f -= 1;
    var h = e.map(new Array(d), function() {
      return 0;
    }), m = 0;
    return e.forEach(u.forEach(function(g) {
      var w = g.pos + f;
      h[w] += g.weight;
      for (var E = 0; w > 0; )
        w % 2 && (E += h[w + 1]), w = w - 1 >> 1, h[w] += g.weight;
      m += g.weight * E;
    })), m;
  }
  return gv;
}
var vv, Tk;
function p8() {
  if (Tk) return vv;
  Tk = 1;
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
var yv, Ak;
function m8() {
  if (Ak) return yv;
  Ak = 1;
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
var wv, Ik;
function g8() {
  if (Ik) return wv;
  Ik = 1;
  var e = Be(), t = Pt();
  wv = r;
  function r(a, l) {
    var u = t.partition(a, function(y) {
      return e.has(y, "barycenter");
    }), f = u.lhs, d = e.sortBy(u.rhs, function(y) {
      return -y.i;
    }), h = [], m = 0, g = 0, w = 0;
    f.sort(s(!!l)), w = o(h, d, w), e.forEach(f, function(y) {
      w += y.vs.length, h.push(y.vs), m += y.barycenter * y.weight, g += y.weight, w = o(h, d, w);
    });
    var E = { vs: e.flatten(h, !0) };
    return g && (E.barycenter = m / g, E.weight = g), E;
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
var xv, Mk;
function v8() {
  if (Mk) return xv;
  Mk = 1;
  var e = Be(), t = p8(), r = m8(), o = g8();
  xv = s;
  function s(u, f, d, h) {
    var m = u.children(f), g = u.node(f), w = g ? g.borderLeft : void 0, E = g ? g.borderRight : void 0, y = {};
    w && (m = e.filter(m, function(N) {
      return N !== w && N !== E;
    }));
    var x = t(u, m);
    e.forEach(x, function(N) {
      if (u.children(N.v).length) {
        var P = s(u, N.v, d, h);
        y[N.v] = P, e.has(P, "barycenter") && l(N, P);
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
var _v, Ok;
function y8() {
  if (Ok) return _v;
  Ok = 1;
  var e = Be(), t = vn().Graph;
  _v = r;
  function r(s, a, l) {
    var u = o(s), f = new t({ compound: !0 }).setGraph({ root: u }).setDefaultNodeLabel(function(d) {
      return s.node(d);
    });
    return e.forEach(s.nodes(), function(d) {
      var h = s.node(d), m = s.parent(d);
      (h.rank === a || h.minRank <= a && a <= h.maxRank) && (f.setNode(d), f.setParent(d, m || u), e.forEach(s[l](d), function(g) {
        var w = g.v === d ? g.w : g.v, E = f.edge(w, d), y = e.isUndefined(E) ? 0 : E.weight;
        f.setEdge(w, d, { weight: s.edge(g).weight + y });
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
var bv, Lk;
function w8() {
  if (Lk) return bv;
  Lk = 1;
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
var Sv, qk;
function x8() {
  if (qk) return Sv;
  qk = 1;
  var e = Be(), t = d8(), r = h8(), o = v8(), s = y8(), a = w8(), l = vn().Graph, u = Pt();
  Sv = f;
  function f(g) {
    var w = u.maxRank(g), E = d(g, e.range(1, w + 1), "inEdges"), y = d(g, e.range(w - 1, -1, -1), "outEdges"), x = t(g);
    m(g, x);
    for (var S = Number.POSITIVE_INFINITY, C, _ = 0, k = 0; k < 4; ++_, ++k) {
      h(_ % 2 ? E : y, _ % 4 >= 2), x = u.buildLayerMatrix(g);
      var N = r(g, x);
      N < S && (k = 0, C = e.cloneDeep(x), S = N);
    }
    m(g, C);
  }
  function d(g, w, E) {
    return e.map(w, function(y) {
      return s(g, y, E);
    });
  }
  function h(g, w) {
    var E = new l();
    e.forEach(g, function(y) {
      var x = y.graph().root, S = o(y, x, E, w);
      e.forEach(S.vs, function(C, _) {
        y.node(C).order = _;
      }), a(y, E, S.vs);
    });
  }
  function m(g, w) {
    e.forEach(w, function(E) {
      e.forEach(E, function(y, x) {
        g.node(y).order = x;
      });
    });
  }
  return Sv;
}
var Ev, Dk;
function _8() {
  if (Dk) return Ev;
  Dk = 1;
  var e = Be(), t = vn().Graph, r = Pt();
  Ev = {
    positionX: E,
    findType1Conflicts: o,
    findType2Conflicts: s,
    addConflict: l,
    hasConflict: u,
    verticalAlignment: f,
    horizontalCompaction: d,
    alignCoordinates: g,
    findSmallestWidthAlignment: m,
    balance: w
  };
  function o(S, C) {
    var _ = {};
    function k(N, P) {
      var A = 0, O = 0, D = N.length, G = e.last(P);
      return e.forEach(P, function(B, V) {
        var X = a(S, B), L = X ? S.node(X).order : D;
        (X || B === G) && (e.forEach(P.slice(O, V + 1), function(H) {
          e.forEach(S.predecessors(H), function($) {
            var Y = S.node($), M = Y.order;
            (M < A || L < M) && !(Y.dummy && S.node(H).dummy) && l(_, $, H);
          });
        }), O = V + 1, A = L);
      }), P;
    }
    return e.reduce(C, k), _;
  }
  function s(S, C) {
    var _ = {};
    function k(P, A, O, D, G) {
      var B;
      e.forEach(e.range(A, O), function(V) {
        B = P[V], S.node(B).dummy && e.forEach(S.predecessors(B), function(X) {
          var L = S.node(X);
          L.dummy && (L.order < D || L.order > G) && l(_, X, B);
        });
      });
    }
    function N(P, A) {
      var O = -1, D, G = 0;
      return e.forEach(A, function(B, V) {
        if (S.node(B).dummy === "border") {
          var X = S.predecessors(B);
          X.length && (D = S.node(X[0]).order, k(A, G, V, O, D), G = V, O = D);
        }
        k(A, G, A.length, D, P.length);
      }), A;
    }
    return e.reduce(C, N), _;
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
    var N = S[C];
    N || (S[C] = N = {}), N[_] = !0;
  }
  function u(S, C, _) {
    if (C > _) {
      var k = C;
      C = _, _ = k;
    }
    return e.has(S[C], _);
  }
  function f(S, C, _, k) {
    var N = {}, P = {}, A = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(D, G) {
        N[D] = D, P[D] = D, A[D] = G;
      });
    }), e.forEach(C, function(O) {
      var D = -1;
      e.forEach(O, function(G) {
        var B = k(G);
        if (B.length) {
          B = e.sortBy(B, function($) {
            return A[$];
          });
          for (var V = (B.length - 1) / 2, X = Math.floor(V), L = Math.ceil(V); X <= L; ++X) {
            var H = B[X];
            P[G] === G && D < A[H] && !u(_, G, H) && (P[H] = G, P[G] = N[G] = N[H], D = A[H]);
          }
        }
      });
    }), { root: N, align: P };
  }
  function d(S, C, _, k, N) {
    var P = {}, A = h(S, C, _, N), O = N ? "borderLeft" : "borderRight";
    function D(V, X) {
      for (var L = A.nodes(), H = L.pop(), $ = {}; H; )
        $[H] ? V(H) : ($[H] = !0, L.push(H), L = L.concat(X(H))), H = L.pop();
    }
    function G(V) {
      P[V] = A.inEdges(V).reduce(function(X, L) {
        return Math.max(X, P[L.v] + A.edge(L));
      }, 0);
    }
    function B(V) {
      var X = A.outEdges(V).reduce(function(H, $) {
        return Math.min(H, P[$.w] - A.edge($));
      }, Number.POSITIVE_INFINITY), L = S.node(V);
      X !== Number.POSITIVE_INFINITY && L.borderType !== O && (P[V] = Math.max(P[V], X));
    }
    return D(G, A.predecessors.bind(A)), D(B, A.successors.bind(A)), e.forEach(k, function(V) {
      P[V] = P[_[V]];
    }), P;
  }
  function h(S, C, _, k) {
    var N = new t(), P = S.graph(), A = y(P.nodesep, P.edgesep, k);
    return e.forEach(C, function(O) {
      var D;
      e.forEach(O, function(G) {
        var B = _[G];
        if (N.setNode(B), D) {
          var V = _[D], X = N.edge(V, B);
          N.setEdge(V, B, Math.max(A(S, G, D), X || 0));
        }
        D = G;
      });
    }), N;
  }
  function m(S, C) {
    return e.minBy(e.values(C), function(_) {
      var k = Number.NEGATIVE_INFINITY, N = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(P, A) {
        var O = x(S, A) / 2;
        k = Math.max(P + O, k), N = Math.min(P - O, N);
      }), k - N;
    });
  }
  function g(S, C) {
    var _ = e.values(C), k = e.min(_), N = e.max(_);
    e.forEach(["u", "d"], function(P) {
      e.forEach(["l", "r"], function(A) {
        var O = P + A, D = S[O], G;
        if (D !== C) {
          var B = e.values(D);
          G = A === "l" ? k - e.min(B) : N - e.max(B), G && (S[O] = e.mapValues(D, function(V) {
            return V + G;
          }));
        }
      });
    });
  }
  function w(S, C) {
    return e.mapValues(S.ul, function(_, k) {
      if (C)
        return S[C.toLowerCase()][k];
      var N = e.sortBy(e.map(S, k));
      return (N[1] + N[2]) / 2;
    });
  }
  function E(S) {
    var C = r.buildLayerMatrix(S), _ = e.merge(
      o(S, C),
      s(S, C)
    ), k = {}, N;
    e.forEach(["u", "d"], function(A) {
      N = A === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(O) {
        O === "r" && (N = e.map(N, function(V) {
          return e.values(V).reverse();
        }));
        var D = (A === "u" ? S.predecessors : S.successors).bind(S), G = f(S, N, _, D), B = d(
          S,
          N,
          G.root,
          G.align,
          O === "r"
        );
        O === "r" && (B = e.mapValues(B, function(V) {
          return -V;
        })), k[A + O] = B;
      });
    });
    var P = m(S, k);
    return g(k, P), w(k, S.graph().align);
  }
  function y(S, C, _) {
    return function(k, N, P) {
      var A = k.node(N), O = k.node(P), D = 0, G;
      if (D += A.width / 2, e.has(A, "labelpos"))
        switch (A.labelpos.toLowerCase()) {
          case "l":
            G = -A.width / 2;
            break;
          case "r":
            G = A.width / 2;
            break;
        }
      if (G && (D += _ ? G : -G), G = 0, D += (A.dummy ? C : S) / 2, D += (O.dummy ? C : S) / 2, D += O.width / 2, e.has(O, "labelpos"))
        switch (O.labelpos.toLowerCase()) {
          case "l":
            G = O.width / 2;
            break;
          case "r":
            G = -O.width / 2;
            break;
        }
      return G && (D += _ ? G : -G), G = 0, D;
    };
  }
  function x(S, C) {
    return S.node(C).width;
  }
  return Ev;
}
var Cv, jk;
function b8() {
  if (jk) return Cv;
  jk = 1;
  var e = Be(), t = Pt(), r = _8().positionX;
  Cv = o;
  function o(a) {
    a = t.asNonCompoundGraph(a), s(a), e.forEach(r(a), function(l, u) {
      a.node(u).x = l;
    });
  }
  function s(a) {
    var l = t.buildLayerMatrix(a), u = a.graph().ranksep, f = 0;
    e.forEach(l, function(d) {
      var h = e.max(e.map(d, function(m) {
        return a.node(m).height;
      }));
      e.forEach(d, function(m) {
        a.node(m).y = f + h / 2;
      }), f += h + u;
    });
  }
  return Cv;
}
var kv, zk;
function S8() {
  if (zk) return kv;
  zk = 1;
  var e = Be(), t = o8(), r = i8(), o = a8(), s = Pt().normalizeRanks, a = l8(), l = Pt().removeEmptyRanks, u = u8(), f = c8(), d = f8(), h = x8(), m = b8(), g = Pt(), w = vn().Graph;
  kv = E;
  function E(F, Z) {
    var ee = Z && Z.debugTiming ? g.time : g.notime;
    ee("layout", function() {
      var K = ee("  buildLayoutGraph", function() {
        return D(F);
      });
      ee("  runLayout", function() {
        y(K, ee);
      }), ee("  updateInputGraph", function() {
        x(F, K);
      });
    });
  }
  function y(F, Z) {
    Z("    makeSpaceForEdgeLabels", function() {
      G(F);
    }), Z("    removeSelfEdges", function() {
      j(F);
    }), Z("    acyclic", function() {
      t.run(F);
    }), Z("    nestingGraph.run", function() {
      u.run(F);
    }), Z("    rank", function() {
      o(g.asNonCompoundGraph(F));
    }), Z("    injectEdgeLabelProxies", function() {
      B(F);
    }), Z("    removeEmptyRanks", function() {
      l(F);
    }), Z("    nestingGraph.cleanup", function() {
      u.cleanup(F);
    }), Z("    normalizeRanks", function() {
      s(F);
    }), Z("    assignRankMinMax", function() {
      V(F);
    }), Z("    removeEdgeLabelProxies", function() {
      X(F);
    }), Z("    normalize.run", function() {
      r.run(F);
    }), Z("    parentDummyChains", function() {
      a(F);
    }), Z("    addBorderSegments", function() {
      f(F);
    }), Z("    order", function() {
      h(F);
    }), Z("    insertSelfEdges", function() {
      Q(F);
    }), Z("    adjustCoordinateSystem", function() {
      d.adjust(F);
    }), Z("    position", function() {
      m(F);
    }), Z("    positionSelfEdges", function() {
      q(F);
    }), Z("    removeBorderNodes", function() {
      M(F);
    }), Z("    normalize.undo", function() {
      r.undo(F);
    }), Z("    fixupEdgeLabelCoords", function() {
      $(F);
    }), Z("    undoCoordinateSystem", function() {
      d.undo(F);
    }), Z("    translateGraph", function() {
      L(F);
    }), Z("    assignNodeIntersects", function() {
      H(F);
    }), Z("    reversePoints", function() {
      Y(F);
    }), Z("    acyclic.undo", function() {
      t.undo(F);
    });
  }
  function x(F, Z) {
    e.forEach(F.nodes(), function(ee) {
      var K = F.node(ee), te = Z.node(ee);
      K && (K.x = te.x, K.y = te.y, Z.children(ee).length && (K.width = te.width, K.height = te.height));
    }), e.forEach(F.edges(), function(ee) {
      var K = F.edge(ee), te = Z.edge(ee);
      K.points = te.points, e.has(te, "x") && (K.x = te.x, K.y = te.y);
    }), F.graph().width = Z.graph().width, F.graph().height = Z.graph().height;
  }
  var S = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, _ = ["acyclicer", "ranker", "rankdir", "align"], k = ["width", "height"], N = { width: 0, height: 0 }, P = ["minlen", "weight", "width", "height", "labeloffset"], A = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, O = ["labelpos"];
  function D(F) {
    var Z = new w({ multigraph: !0, compound: !0 }), ee = ie(F.graph());
    return Z.setGraph(e.merge(
      {},
      C,
      W(ee, S),
      e.pick(ee, _)
    )), e.forEach(F.nodes(), function(K) {
      var te = ie(F.node(K));
      Z.setNode(K, e.defaults(W(te, k), N)), Z.setParent(K, F.parent(K));
    }), e.forEach(F.edges(), function(K) {
      var te = ie(F.edge(K));
      Z.setEdge(K, e.merge(
        {},
        A,
        W(te, P),
        e.pick(te, O)
      ));
    }), Z;
  }
  function G(F) {
    var Z = F.graph();
    Z.ranksep /= 2, e.forEach(F.edges(), function(ee) {
      var K = F.edge(ee);
      K.minlen *= 2, K.labelpos.toLowerCase() !== "c" && (Z.rankdir === "TB" || Z.rankdir === "BT" ? K.width += K.labeloffset : K.height += K.labeloffset);
    });
  }
  function B(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z);
      if (ee.width && ee.height) {
        var K = F.node(Z.v), te = F.node(Z.w), se = { rank: (te.rank - K.rank) / 2 + K.rank, e: Z };
        g.addDummyNode(F, "edge-proxy", se, "_ep");
      }
    });
  }
  function V(F) {
    var Z = 0;
    e.forEach(F.nodes(), function(ee) {
      var K = F.node(ee);
      K.borderTop && (K.minRank = F.node(K.borderTop).rank, K.maxRank = F.node(K.borderBottom).rank, Z = e.max(Z, K.maxRank));
    }), F.graph().maxRank = Z;
  }
  function X(F) {
    e.forEach(F.nodes(), function(Z) {
      var ee = F.node(Z);
      ee.dummy === "edge-proxy" && (F.edge(ee.e).labelRank = ee.rank, F.removeNode(Z));
    });
  }
  function L(F) {
    var Z = Number.POSITIVE_INFINITY, ee = 0, K = Number.POSITIVE_INFINITY, te = 0, se = F.graph(), ae = se.marginx || 0, ce = se.marginy || 0;
    function de(pe) {
      var be = pe.x, ge = pe.y, Ne = pe.width, Ee = pe.height;
      Z = Math.min(Z, be - Ne / 2), ee = Math.max(ee, be + Ne / 2), K = Math.min(K, ge - Ee / 2), te = Math.max(te, ge + Ee / 2);
    }
    e.forEach(F.nodes(), function(pe) {
      de(F.node(pe));
    }), e.forEach(F.edges(), function(pe) {
      var be = F.edge(pe);
      e.has(be, "x") && de(be);
    }), Z -= ae, K -= ce, e.forEach(F.nodes(), function(pe) {
      var be = F.node(pe);
      be.x -= Z, be.y -= K;
    }), e.forEach(F.edges(), function(pe) {
      var be = F.edge(pe);
      e.forEach(be.points, function(ge) {
        ge.x -= Z, ge.y -= K;
      }), e.has(be, "x") && (be.x -= Z), e.has(be, "y") && (be.y -= K);
    }), se.width = ee - Z + ae, se.height = te - K + ce;
  }
  function H(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z), K = F.node(Z.v), te = F.node(Z.w), se, ae;
      ee.points ? (se = ee.points[0], ae = ee.points[ee.points.length - 1]) : (ee.points = [], se = te, ae = K), ee.points.unshift(g.intersectRect(K, se)), ee.points.push(g.intersectRect(te, ae));
    });
  }
  function $(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z);
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
  function Y(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z);
      ee.reversed && ee.points.reverse();
    });
  }
  function M(F) {
    e.forEach(F.nodes(), function(Z) {
      if (F.children(Z).length) {
        var ee = F.node(Z), K = F.node(ee.borderTop), te = F.node(ee.borderBottom), se = F.node(e.last(ee.borderLeft)), ae = F.node(e.last(ee.borderRight));
        ee.width = Math.abs(ae.x - se.x), ee.height = Math.abs(te.y - K.y), ee.x = se.x + ee.width / 2, ee.y = K.y + ee.height / 2;
      }
    }), e.forEach(F.nodes(), function(Z) {
      F.node(Z).dummy === "border" && F.removeNode(Z);
    });
  }
  function j(F) {
    e.forEach(F.edges(), function(Z) {
      if (Z.v === Z.w) {
        var ee = F.node(Z.v);
        ee.selfEdges || (ee.selfEdges = []), ee.selfEdges.push({ e: Z, label: F.edge(Z) }), F.removeEdge(Z);
      }
    });
  }
  function Q(F) {
    var Z = g.buildLayerMatrix(F);
    e.forEach(Z, function(ee) {
      var K = 0;
      e.forEach(ee, function(te, se) {
        var ae = F.node(te);
        ae.order = se + K, e.forEach(ae.selfEdges, function(ce) {
          g.addDummyNode(F, "selfedge", {
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
  function q(F) {
    e.forEach(F.nodes(), function(Z) {
      var ee = F.node(Z);
      if (ee.dummy === "selfedge") {
        var K = F.node(ee.e.v), te = K.x + K.width / 2, se = K.y, ae = ee.x - te, ce = K.height / 2;
        F.setEdge(ee.e, ee.label), F.removeNode(Z), ee.label.points = [
          { x: te + 2 * ae / 3, y: se - ce },
          { x: te + 5 * ae / 6, y: se - ce },
          { x: te + ae, y: se },
          { x: te + 5 * ae / 6, y: se + ce },
          { x: te + 2 * ae / 3, y: se + ce }
        ], ee.label.x = ee.x, ee.label.y = ee.y;
      }
    });
  }
  function W(F, Z) {
    return e.mapValues(e.pick(F, Z), Number);
  }
  function ie(F) {
    var Z = {};
    return e.forEach(F, function(ee, K) {
      Z[K.toLowerCase()] = ee;
    }), Z;
  }
  return kv;
}
var Rv, Fk;
function E8() {
  if (Fk) return Rv;
  Fk = 1;
  var e = Be(), t = Pt(), r = vn().Graph;
  Rv = {
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
      l.setNode(d, { rank: "same" }), e.reduce(u, function(h, m) {
        return l.setEdge(h, m, { style: "invis" }), m;
      });
    }), l;
  }
  return Rv;
}
var Nv, $k;
function C8() {
  return $k || ($k = 1, Nv = "0.8.5"), Nv;
}
var Pv, Bk;
function k8() {
  return Bk || (Bk = 1, Pv = {
    graphlib: vn(),
    layout: S8(),
    debug: E8(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: C8()
  }), Pv;
}
k8();
R.createContext(null);
const R8 = R.createContext(null), N8 = () => {
  const e = R.useContext(R8);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
};
function P8({ id: e, data: t, selected: r }) {
  var g, w, E, y, x, S, C, _;
  const o = t, s = N8(), a = cn.useCallback((k, N) => {
    s((P) => {
      const A = P[e] || {};
      return {
        ...P,
        [e]: {
          ...A,
          [k]: N
        }
      };
    });
  }, [e, s]), l = a5(o.layoutType), u = ((g = o.header) == null ? void 0 : g.show) !== !1, f = ((w = o.footer) == null ? void 0 : w.show) === !0, d = ((E = o.header) == null ? void 0 : E.icon) || o.icon, h = cn.useMemo(() => {
    var N, P, A;
    const k = {};
    return (N = o.style) != null && N.minWidth && (k.minWidth = typeof o.style.minWidth == "number" ? `${o.style.minWidth}px` : o.style.minWidth), (P = o.style) != null && P.maxWidth && (k.maxWidth = typeof o.style.maxWidth == "number" ? `${o.style.maxWidth}px` : o.style.maxWidth), (A = o.style) != null && A.borderRadius && (k.borderRadius = o.style.borderRadius), k;
  }, [o.style]), m = (y = o.style) != null && y.shadow ? `shadow-${o.style.shadow}` : "shadow-md";
  return /* @__PURE__ */ I.jsxs(
    l5,
    {
      className: Ye(
        "min-w-[200px] border-2 transition-all overflow-hidden p-0 gap-0",
        m,
        r && "border-primary shadow-lg ring-2 ring-primary/20",
        (x = o.style) == null ? void 0 : x.className
      ),
      style: h,
      children: [
        u && /* @__PURE__ */ I.jsx(
          u5,
          {
            className: Ye(
              "p-2.5 space-y-0 px-2.5",
              ((S = o.header) == null ? void 0 : S.className) || "bg-primary text-primary-foreground"
            ),
            style: {
              backgroundColor: (C = o.header) == null ? void 0 : C.bgColor,
              color: (_ = o.header) == null ? void 0 : _.textColor
            },
            children: /* @__PURE__ */ I.jsxs(c5, { className: "text-sm font-semibold flex items-center gap-2", children: [
              d && /* @__PURE__ */ I.jsx("span", { className: "text-base", children: d }),
              o.label
            ] })
          }
        ),
        /* @__PURE__ */ I.jsx(
          l,
          {
            inputs: o.inputs,
            outputs: o.outputs,
            handleType: o.handleType,
            inputHandleType: o.inputHandleType,
            outputHandleType: o.outputHandleType,
            children: o.parameters && /* @__PURE__ */ I.jsx(
              XB,
              {
                nodeId: e,
                parameters: o.parameters,
                values: o.values,
                onValueChange: a,
                fieldConfigs: o.fieldConfigs,
                validation: o.validation
              }
            )
          }
        ),
        f && o.footer && /* @__PURE__ */ I.jsx(
          f5,
          {
            className: Ye(
              "p-2 px-2.5 text-xs text-muted-foreground border-t",
              o.footer.className
            ),
            children: o.footer.text
          }
        )
      ]
    }
  );
}
function T8() {
  const [e] = Bf("id"), [t] = Bf("data"), [r] = Bf("selected"), o = e ?? "json-schema-node", s = t ?? {}, a = r ?? !1;
  return /* @__PURE__ */ I.jsx(kN, { children: /* @__PURE__ */ I.jsx("div", { style: { padding: "10px" }, children: /* @__PURE__ */ I.jsx(
    P8,
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
  ) }) });
}
const A8 = m2(T8), M8 = { render: A8 };
export {
  M8 as default
};
//# sourceMappingURL=json_schema_node_entry.js.map
