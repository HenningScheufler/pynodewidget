var o2 = Object.defineProperty;
var i2 = (e, t, r) => t in e ? o2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var fl = (e, t, r) => i2(e, typeof t != "symbol" ? t + "" : t, r);
function s2(e, t) {
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
var dl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ry(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jf = { exports: {} }, fs = {}, zf = { exports: {} }, Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cx;
function a2() {
  if (Cx) return Ae;
  Cx = 1;
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
  var k = Array.isArray, R = Object.prototype.hasOwnProperty, T = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(q, W, ie) {
    var F, Z = {}, ee = null, K = null;
    if (W != null) for (F in W.ref !== void 0 && (K = W.ref), W.key !== void 0 && (ee = "" + W.key), W) R.call(W, F) && !A.hasOwnProperty(F) && (Z[F] = W[F]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (q && q.defaultProps) for (F in te = q.defaultProps, te) Z[F] === void 0 && (Z[F] = te[F]);
    return { $$typeof: e, type: q, key: ee, ref: K, props: Z, _owner: T.current };
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
  var Y = { current: null }, M = { transition: null }, j = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: M, ReactCurrentOwner: T };
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
      if (W.ref !== void 0 && (ee = W.ref, K = T.current), W.key !== void 0 && (Z = "" + W.key), q.type && q.type.defaultProps) var te = q.type.defaultProps;
      for (se in W) R.call(W, se) && !A.hasOwnProperty(se) && (F[se] = W[se] === void 0 && te !== void 0 ? te[se] : W[se]);
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
var kx;
function qs() {
  return kx || (kx = 1, zf.exports = a2()), zf.exports;
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
var Nx;
function l2() {
  if (Nx) return fs;
  Nx = 1;
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
function u2() {
  return Rx || (Rx = 1, jf.exports = l2()), jf.exports;
}
var I = u2(), N = qs();
const Un = /* @__PURE__ */ ry(N), oy = /* @__PURE__ */ s2({
  __proto__: null,
  default: Un
}, [N]);
var hl = {}, Ff = { exports: {} }, Nt = {}, $f = { exports: {} }, Bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Px;
function c2() {
  return Px || (Px = 1, (function(e) {
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
      if (y = !1, _(M), !E) if (r(f) !== null) E = !0, $(R);
      else {
        var j = r(d);
        j !== null && Y(k, j.startTime - M);
      }
    }
    function R(M, j) {
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
    var T = !1, A = null, O = -1, D = 5, G = -1;
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
          j ? X() : (T = !1, A = null);
        }
      } else T = !1;
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
      A = M, T || (T = !0, X());
    }
    function Y(M, j) {
      O = x(function() {
        M(e.unstable_now());
      }, j);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      E || w || (E = !0, $(R));
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
      return W = Q + W, M = { id: h++, callback: j, priorityLevel: M, startTime: Q, expirationTime: W, sortIndex: -1 }, Q > q ? (M.sortIndex = Q, t(d, M), r(f) === null && M === r(d) && (y ? (S(O), O = -1) : y = !0, Y(k, Q - q))) : (M.sortIndex = W, t(f, M), E || w || (E = !0, $(R))), M;
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
  })(Bf)), Bf;
}
var Tx;
function f2() {
  return Tx || (Tx = 1, $f.exports = c2()), $f.exports;
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
var Ax;
function d2() {
  if (Ax) return Nt;
  Ax = 1;
  var e = qs(), t = f2();
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
  function y(n, i, c, p, v, b, P) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = p, this.attributeNamespace = v, this.mustUseProperty = c, this.propertyName = n, this.type = i, this.sanitizeURL = b, this.removeEmptyString = P;
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
  var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, R = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), B = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), M = Symbol.iterator;
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
`), P = v.length - 1, z = b.length - 1; 1 <= P && 0 <= z && v[P] !== b[z]; ) z--;
        for (; 1 <= P && 0 <= z; P--, z--) if (v[P] !== b[z]) {
          if (P !== 1 || z !== 1)
            do
              if (P--, z--, 0 > z || v[P] !== b[z]) {
                var U = `
` + v[P].replace(" at new ", " at ");
                return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
              }
            while (1 <= P && 0 <= z);
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
      case T:
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
      }, set: function(P) {
        p = "" + P, b.call(this, P);
      } }), Object.defineProperty(n, i, { enumerable: c.enumerable }), { getValue: function() {
        return p;
      }, setValue: function(P) {
        p = "" + P;
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
  function Re(n, i) {
    i = i.checked, i != null && _(n, "checked", i, !1);
  }
  function Ee(n, i) {
    Re(n, i);
    var c = te(i.value), p = i.type;
    if (c != null) p === "number" ? (c === 0 && n.value === "" || n.value != c) && (n.value = "" + c) : n.value !== "" + c && (n.value = "" + c);
    else if (p === "submit" || p === "reset") {
      n.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? He(n, i.type, c) : i.hasOwnProperty("defaultValue") && He(n, i.type, te(i.defaultValue)), i.checked == null && i.defaultChecked != null && (n.defaultChecked = !!i.defaultChecked);
  }
  function Ze(n, i, c) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var p = i.type;
      if (!(p !== "submit" && p !== "reset" || i.value !== void 0 && i.value !== null)) return;
      i = "" + n._wrapperState.initialValue, c || i === n.value || (n.value = i), n.defaultValue = i;
    }
    c = n.name, c !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, c !== "" && (n.name = c);
  }
  function He(n, i, c) {
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
  function We(n, i) {
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
  var Ln = {
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
  Object.keys(Ln).forEach(function(n) {
    go.forEach(function(i) {
      i = i + n.charAt(0).toUpperCase() + n.substring(1), Ln[i] = Ln[n];
    });
  });
  function Tt(n, i, c) {
    return i == null || typeof i == "boolean" || i === "" ? "" : c || typeof i != "number" || i === 0 || Ln.hasOwnProperty(n) && Ln[n] ? ("" + i).trim() : i + "px";
  }
  function Ht(n, i) {
    n = n.style;
    for (var c in i) if (i.hasOwnProperty(c)) {
      var p = c.indexOf("--") === 0, v = Tt(c, i[c], p);
      c === "float" && (c = "cssFloat"), p ? n.setProperty(c, v) : n[c] = v;
    }
  }
  var Wu = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function bi(n, i) {
    if (i) {
      if (Wu[n] && (i.children != null || i.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
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
  var Ni = !1;
  function na(n, i, c) {
    if (Ni) return n(i, c);
    Ni = !0;
    try {
      return ea(n, i, c);
    } finally {
      Ni = !1, (er !== null || tr !== null) && (ta(), Js());
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
  var Ri = !1;
  if (u) try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", { get: function() {
      Ri = !0;
    } }), window.addEventListener("test", Dr, Dr), window.removeEventListener("test", Dr, Dr);
  } catch {
    Ri = !1;
  }
  function Uu(n, i, c, p, v, b, P, z, U) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var jr = !1, vo = null, yo = !1, Pi = null, Gu = { onError: function(n) {
    jr = !0, vo = n;
  } };
  function Yu(n, i, c, p, v, b, P, z, U) {
    jr = !1, vo = null, Uu.apply(Gu, arguments);
  }
  function Ku(n, i, c, p, v, b, P, z, U) {
    if (Yu.apply(this, arguments), jr) {
      if (jr) {
        var oe = vo;
        jr = !1, vo = null;
      } else throw Error(r(198));
      yo || (yo = !0, Pi = oe);
    }
  }
  function wn(n) {
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
    if (wn(n) !== n) throw Error(r(188));
  }
  function Xu(n) {
    var i = n.alternate;
    if (!i) {
      if (i = wn(n), i === null) throw Error(r(188));
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
        for (var P = !1, z = v.child; z; ) {
          if (z === c) {
            P = !0, c = v, p = b;
            break;
          }
          if (z === p) {
            P = !0, p = v, c = b;
            break;
          }
          z = z.sibling;
        }
        if (!P) {
          for (z = b.child; z; ) {
            if (z === c) {
              P = !0, c = b, p = v;
              break;
            }
            if (z === p) {
              P = !0, p = b, c = v;
              break;
            }
            z = z.sibling;
          }
          if (!P) throw Error(r(189));
        }
      }
      if (c.alternate !== p) throw Error(r(190));
    }
    if (c.tag !== 3) throw Error(r(188));
    return c.stateNode.current === c ? n : i;
  }
  function ra(n) {
    return n = Xu(n), n !== null ? oa(n) : null;
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
  var ia = t.unstable_scheduleCallback, sa = t.unstable_cancelCallback, Qu = t.unstable_shouldYield, aa = t.unstable_requestPaint, Ue = t.unstable_now, Zu = t.unstable_getCurrentPriorityLevel, Ii = t.unstable_ImmediatePriority, la = t.unstable_UserBlockingPriority, wo = t.unstable_NormalPriority, Ju = t.unstable_LowPriority, ua = t.unstable_IdlePriority, zr = null, Wt = null;
  function ec(n) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(zr, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : rc, tc = Math.log, nc = Math.LN2;
  function rc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (tc(n) / nc | 0) | 0;
  }
  var xo = 64, _o = 4194304;
  function xn(n) {
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
    var p = 0, v = n.suspendedLanes, b = n.pingedLanes, P = c & 268435455;
    if (P !== 0) {
      var z = P & ~v;
      z !== 0 ? p = xn(z) : (b &= P, b !== 0 && (p = xn(b)));
    } else P = c & ~v, P !== 0 ? p = xn(P) : b !== 0 && (p = xn(b));
    if (p === 0) return 0;
    if (i !== 0 && i !== p && (i & v) === 0 && (v = p & -p, b = i & -i, v >= b || v === 16 && (b & 4194240) !== 0)) return i;
    if ((p & 4) !== 0 && (p |= c & 16), i = n.entangledLanes, i !== 0) for (n = n.entanglements, i &= p; 0 < i; ) c = 31 - At(i), v = 1 << c, p |= n[c], i &= ~v;
    return p;
  }
  function oc(n, i) {
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
  function ic(n, i) {
    for (var c = n.suspendedLanes, p = n.pingedLanes, v = n.expirationTimes, b = n.pendingLanes; 0 < b; ) {
      var P = 31 - At(b), z = 1 << P, U = v[P];
      U === -1 ? ((z & c) === 0 || (z & p) !== 0) && (v[P] = oc(z, i)) : U <= i && (n.expiredLanes |= z), b &= ~z;
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
  function CA(n, i) {
    var c = n.pendingLanes & ~i;
    n.pendingLanes = i, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= i, n.mutableReadLanes &= i, n.entangledLanes &= i, i = n.entanglements;
    var p = n.eventTimes;
    for (n = n.expirationTimes; 0 < c; ) {
      var v = 31 - At(c), b = 1 << v;
      i[v] = 0, p[v] = -1, n[v] = -1, c &= ~b;
    }
  }
  function sc(n, i) {
    var c = n.entangledLanes |= i;
    for (n = n.entanglements; c; ) {
      var p = 31 - At(c), v = 1 << p;
      v & i | n[p] & i && (n[p] |= i), c &= ~v;
    }
  }
  var Le = 0;
  function r0(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var o0, ac, i0, s0, a0, lc = !1, fa = [], rr = null, or = null, ir = null, Oi = /* @__PURE__ */ new Map(), Li = /* @__PURE__ */ new Map(), sr = [], kA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function l0(n, i) {
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
    return n === null || n.nativeEvent !== b ? (n = { blockedOn: i, domEventName: c, eventSystemFlags: p, nativeEvent: b, targetContainers: [v] }, i !== null && (i = Xi(i), i !== null && ac(i)), n) : (n.eventSystemFlags |= p, i = n.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), n);
  }
  function NA(n, i, c, p, v) {
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
  function u0(n) {
    var i = $r(n.target);
    if (i !== null) {
      var c = wn(i);
      if (c !== null) {
        if (i = c.tag, i === 13) {
          if (i = Ti(c), i !== null) {
            n.blockedOn = i, a0(n.priority, function() {
              i0(c);
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
      var c = cc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (c === null) {
        c = n.nativeEvent;
        var p = new c.constructor(c.type, c);
        Ei = p, c.target.dispatchEvent(p), Ei = null;
      } else return i = Xi(c), i !== null && ac(i), n.blockedOn = c, !1;
      i.shift();
    }
    return !0;
  }
  function c0(n, i, c) {
    da(n) && c.delete(i);
  }
  function RA() {
    lc = !1, rr !== null && da(rr) && (rr = null), or !== null && da(or) && (or = null), ir !== null && da(ir) && (ir = null), Oi.forEach(c0), Li.forEach(c0);
  }
  function Di(n, i) {
    n.blockedOn === i && (n.blockedOn = null, lc || (lc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, RA)));
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
    for (; 0 < sr.length && (c = sr[0], c.blockedOn === null); ) u0(c), c.blockedOn === null && sr.shift();
  }
  var So = k.ReactCurrentBatchConfig, ha = !0;
  function PA(n, i, c, p) {
    var v = Le, b = So.transition;
    So.transition = null;
    try {
      Le = 1, uc(n, i, c, p);
    } finally {
      Le = v, So.transition = b;
    }
  }
  function TA(n, i, c, p) {
    var v = Le, b = So.transition;
    So.transition = null;
    try {
      Le = 4, uc(n, i, c, p);
    } finally {
      Le = v, So.transition = b;
    }
  }
  function uc(n, i, c, p) {
    if (ha) {
      var v = cc(n, i, c, p);
      if (v === null) Nc(n, i, p, pa, c), l0(n, p);
      else if (NA(v, n, i, c, p)) p.stopPropagation();
      else if (l0(n, p), i & 4 && -1 < kA.indexOf(n)) {
        for (; v !== null; ) {
          var b = Xi(v);
          if (b !== null && o0(b), b = cc(n, i, c, p), b === null && Nc(n, i, p, pa, c), b === v) break;
          v = b;
        }
        v !== null && p.stopPropagation();
      } else Nc(n, i, p, null, c);
    }
  }
  var pa = null;
  function cc(n, i, c, p) {
    if (pa = null, n = Ci(p), n = $r(n), n !== null) if (i = wn(n), i === null) n = null;
    else if (c = i.tag, c === 13) {
      if (n = Ti(i), n !== null) return n;
      n = null;
    } else if (c === 3) {
      if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
      n = null;
    } else i !== n && (n = null);
    return pa = n, null;
  }
  function f0(n) {
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
        switch (Zu()) {
          case Ii:
            return 1;
          case la:
            return 4;
          case wo:
          case Ju:
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
  var ar = null, fc = null, ma = null;
  function d0() {
    if (ma) return ma;
    var n, i = fc, c = i.length, p, v = "value" in ar ? ar.value : ar.textContent, b = v.length;
    for (n = 0; n < c && i[n] === v[n]; n++) ;
    var P = c - n;
    for (p = 1; p <= P && i[c - p] === v[b - p]; p++) ;
    return ma = v.slice(n, 1 < p ? 1 - p : void 0);
  }
  function ga(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function va() {
    return !0;
  }
  function h0() {
    return !1;
  }
  function It(n) {
    function i(c, p, v, b, P) {
      this._reactName = c, this._targetInst = v, this.type = p, this.nativeEvent = b, this.target = P, this.currentTarget = null;
      for (var z in n) n.hasOwnProperty(z) && (c = n[z], this[z] = c ? c(b) : b[z]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? va : h0, this.isPropagationStopped = h0, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, dc = It(Eo), zi = Q({}, Eo, { view: 0, detail: 0 }), AA = It(zi), hc, pc, Fi, ya = Q({}, zi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Fi && (Fi && n.type === "mousemove" ? (hc = n.screenX - Fi.screenX, pc = n.screenY - Fi.screenY) : pc = hc = 0, Fi = n), hc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : pc;
  } }), p0 = It(ya), IA = Q({}, ya, { dataTransfer: 0 }), MA = It(IA), OA = Q({}, zi, { relatedTarget: 0 }), mc = It(OA), LA = Q({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qA = It(LA), DA = Q({}, Eo, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), jA = It(DA), zA = Q({}, Eo, { data: 0 }), m0 = It(zA), FA = {
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
  }, $A = {
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
  }, BA = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function VA(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = BA[n]) ? !!i[n] : !1;
  }
  function gc() {
    return VA;
  }
  var HA = Q({}, zi, { key: function(n) {
    if (n.key) {
      var i = FA[n.key] || n.key;
      if (i !== "Unidentified") return i;
    }
    return n.type === "keypress" ? (n = ga(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? $A[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gc, charCode: function(n) {
    return n.type === "keypress" ? ga(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ga(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), WA = It(HA), UA = Q({}, ya, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), g0 = It(UA), GA = Q({}, zi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gc }), YA = It(GA), KA = Q({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), XA = It(KA), QA = Q({}, ya, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ZA = It(QA), JA = [9, 13, 27, 32], vc = u && "CompositionEvent" in window, $i = null;
  u && "documentMode" in document && ($i = document.documentMode);
  var eI = u && "TextEvent" in window && !$i, v0 = u && (!vc || $i && 8 < $i && 11 >= $i), y0 = " ", w0 = !1;
  function x0(n, i) {
    switch (n) {
      case "keyup":
        return JA.indexOf(i.keyCode) !== -1;
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
  function _0(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Co = !1;
  function tI(n, i) {
    switch (n) {
      case "compositionend":
        return _0(i);
      case "keypress":
        return i.which !== 32 ? null : (w0 = !0, y0);
      case "textInput":
        return n = i.data, n === y0 && w0 ? null : n;
      default:
        return null;
    }
  }
  function nI(n, i) {
    if (Co) return n === "compositionend" || !vc && x0(n, i) ? (n = d0(), ma = fc = ar = null, Co = !1, n) : null;
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
        return v0 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var rI = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function b0(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!rI[n.type] : i === "textarea";
  }
  function S0(n, i, c, p) {
    Zs(p), i = Sa(i, "onChange"), 0 < i.length && (c = new dc("onChange", "change", null, c, p), n.push({ event: c, listeners: i }));
  }
  var Bi = null, Vi = null;
  function oI(n) {
    $0(n, 0);
  }
  function wa(n) {
    var i = To(n);
    if (de(i)) return n;
  }
  function iI(n, i) {
    if (n === "change") return i;
  }
  var E0 = !1;
  if (u) {
    var yc;
    if (u) {
      var wc = "oninput" in document;
      if (!wc) {
        var C0 = document.createElement("div");
        C0.setAttribute("oninput", "return;"), wc = typeof C0.oninput == "function";
      }
      yc = wc;
    } else yc = !1;
    E0 = yc && (!document.documentMode || 9 < document.documentMode);
  }
  function k0() {
    Bi && (Bi.detachEvent("onpropertychange", N0), Vi = Bi = null);
  }
  function N0(n) {
    if (n.propertyName === "value" && wa(Vi)) {
      var i = [];
      S0(i, Vi, n, Ci(n)), na(oI, i);
    }
  }
  function sI(n, i, c) {
    n === "focusin" ? (k0(), Bi = i, Vi = c, Bi.attachEvent("onpropertychange", N0)) : n === "focusout" && k0();
  }
  function aI(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return wa(Vi);
  }
  function lI(n, i) {
    if (n === "click") return wa(i);
  }
  function uI(n, i) {
    if (n === "input" || n === "change") return wa(i);
  }
  function cI(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : cI;
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
  function R0(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function P0(n, i) {
    var c = R0(n);
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
      c = R0(c);
    }
  }
  function T0(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? T0(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function A0() {
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
  function xc(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i && (i === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || i === "textarea" || n.contentEditable === "true");
  }
  function fI(n) {
    var i = A0(), c = n.focusedElem, p = n.selectionRange;
    if (i !== c && c && c.ownerDocument && T0(c.ownerDocument.documentElement, c)) {
      if (p !== null && xc(c)) {
        if (i = p.start, n = p.end, n === void 0 && (n = i), "selectionStart" in c) c.selectionStart = i, c.selectionEnd = Math.min(n, c.value.length);
        else if (n = (i = c.ownerDocument || document) && i.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = c.textContent.length, b = Math.min(p.start, v);
          p = p.end === void 0 ? b : Math.min(p.end, v), !n.extend && b > p && (v = p, p = b, b = v), v = P0(c, b);
          var P = P0(
            c,
            p
          );
          v && P && (n.rangeCount !== 1 || n.anchorNode !== v.node || n.anchorOffset !== v.offset || n.focusNode !== P.node || n.focusOffset !== P.offset) && (i = i.createRange(), i.setStart(v.node, v.offset), n.removeAllRanges(), b > p ? (n.addRange(i), n.extend(P.node, P.offset)) : (i.setEnd(P.node, P.offset), n.addRange(i)));
        }
      }
      for (i = [], n = c; n = n.parentNode; ) n.nodeType === 1 && i.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < i.length; c++) n = i[c], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var dI = u && "documentMode" in document && 11 >= document.documentMode, ko = null, _c = null, Wi = null, bc = !1;
  function I0(n, i, c) {
    var p = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    bc || ko == null || ko !== pe(p) || (p = ko, "selectionStart" in p && xc(p) ? p = { start: p.selectionStart, end: p.selectionEnd } : (p = (p.ownerDocument && p.ownerDocument.defaultView || window).getSelection(), p = { anchorNode: p.anchorNode, anchorOffset: p.anchorOffset, focusNode: p.focusNode, focusOffset: p.focusOffset }), Wi && Hi(Wi, p) || (Wi = p, p = Sa(_c, "onSelect"), 0 < p.length && (i = new dc("onSelect", "select", null, i, c), n.push({ event: i, listeners: p }), i.target = ko)));
  }
  function xa(n, i) {
    var c = {};
    return c[n.toLowerCase()] = i.toLowerCase(), c["Webkit" + n] = "webkit" + i, c["Moz" + n] = "moz" + i, c;
  }
  var No = { animationend: xa("Animation", "AnimationEnd"), animationiteration: xa("Animation", "AnimationIteration"), animationstart: xa("Animation", "AnimationStart"), transitionend: xa("Transition", "TransitionEnd") }, Sc = {}, M0 = {};
  u && (M0 = document.createElement("div").style, "AnimationEvent" in window || (delete No.animationend.animation, delete No.animationiteration.animation, delete No.animationstart.animation), "TransitionEvent" in window || delete No.transitionend.transition);
  function _a(n) {
    if (Sc[n]) return Sc[n];
    if (!No[n]) return n;
    var i = No[n], c;
    for (c in i) if (i.hasOwnProperty(c) && c in M0) return Sc[n] = i[c];
    return n;
  }
  var O0 = _a("animationend"), L0 = _a("animationiteration"), q0 = _a("animationstart"), D0 = _a("transitionend"), j0 = /* @__PURE__ */ new Map(), z0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function lr(n, i) {
    j0.set(n, i), a(i, [n]);
  }
  for (var Ec = 0; Ec < z0.length; Ec++) {
    var Cc = z0[Ec], hI = Cc.toLowerCase(), pI = Cc[0].toUpperCase() + Cc.slice(1);
    lr(hI, "on" + pI);
  }
  lr(O0, "onAnimationEnd"), lr(L0, "onAnimationIteration"), lr(q0, "onAnimationStart"), lr("dblclick", "onDoubleClick"), lr("focusin", "onFocus"), lr("focusout", "onBlur"), lr(D0, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));
  function F0(n, i, c) {
    var p = n.type || "unknown-event";
    n.currentTarget = c, Ku(p, i, void 0, n), n.currentTarget = null;
  }
  function $0(n, i) {
    i = (i & 4) !== 0;
    for (var c = 0; c < n.length; c++) {
      var p = n[c], v = p.event;
      p = p.listeners;
      e: {
        var b = void 0;
        if (i) for (var P = p.length - 1; 0 <= P; P--) {
          var z = p[P], U = z.instance, oe = z.currentTarget;
          if (z = z.listener, U !== b && v.isPropagationStopped()) break e;
          F0(v, z, oe), b = U;
        }
        else for (P = 0; P < p.length; P++) {
          if (z = p[P], U = z.instance, oe = z.currentTarget, z = z.listener, U !== b && v.isPropagationStopped()) break e;
          F0(v, z, oe), b = U;
        }
      }
    }
    if (yo) throw n = Pi, yo = !1, Pi = null, n;
  }
  function De(n, i) {
    var c = i[Mc];
    c === void 0 && (c = i[Mc] = /* @__PURE__ */ new Set());
    var p = n + "__bubble";
    c.has(p) || (B0(i, n, 2, !1), c.add(p));
  }
  function kc(n, i, c) {
    var p = 0;
    i && (p |= 4), B0(c, n, p, i);
  }
  var ba = "_reactListening" + Math.random().toString(36).slice(2);
  function Gi(n) {
    if (!n[ba]) {
      n[ba] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (mI.has(c) || kc(c, !1, n), kc(c, !0, n));
      });
      var i = n.nodeType === 9 ? n : n.ownerDocument;
      i === null || i[ba] || (i[ba] = !0, kc("selectionchange", !1, i));
    }
  }
  function B0(n, i, c, p) {
    switch (f0(i)) {
      case 1:
        var v = PA;
        break;
      case 4:
        v = TA;
        break;
      default:
        v = uc;
    }
    c = v.bind(null, i, c, n), v = void 0, !Ri || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), p ? v !== void 0 ? n.addEventListener(i, c, { capture: !0, passive: v }) : n.addEventListener(i, c, !0) : v !== void 0 ? n.addEventListener(i, c, { passive: v }) : n.addEventListener(i, c, !1);
  }
  function Nc(n, i, c, p, v) {
    var b = p;
    if ((i & 1) === 0 && (i & 2) === 0 && p !== null) e: for (; ; ) {
      if (p === null) return;
      var P = p.tag;
      if (P === 3 || P === 4) {
        var z = p.stateNode.containerInfo;
        if (z === v || z.nodeType === 8 && z.parentNode === v) break;
        if (P === 4) for (P = p.return; P !== null; ) {
          var U = P.tag;
          if ((U === 3 || U === 4) && (U = P.stateNode.containerInfo, U === v || U.nodeType === 8 && U.parentNode === v)) return;
          P = P.return;
        }
        for (; z !== null; ) {
          if (P = $r(z), P === null) return;
          if (U = P.tag, U === 5 || U === 6) {
            p = b = P;
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
        var le = j0.get(n);
        if (le !== void 0) {
          var me = dc, we = n;
          switch (n) {
            case "keypress":
              if (ga(c) === 0) break e;
            case "keydown":
            case "keyup":
              me = WA;
              break;
            case "focusin":
              we = "focus", me = mc;
              break;
            case "focusout":
              we = "blur", me = mc;
              break;
            case "beforeblur":
            case "afterblur":
              me = mc;
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
              me = p0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = MA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = YA;
              break;
            case O0:
            case L0:
            case q0:
              me = qA;
              break;
            case D0:
              me = XA;
              break;
            case "scroll":
              me = AA;
              break;
            case "wheel":
              me = ZA;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = jA;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = g0;
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
          if (le = n === "mouseover" || n === "pointerover", me = n === "mouseout" || n === "pointerout", le && c !== Ei && (we = c.relatedTarget || c.fromElement) && ($r(we) || we[qn])) break e;
          if ((me || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, me ? (we = c.relatedTarget || c.toElement, me = oe, we = we ? $r(we) : null, we !== null && (Je = wn(we), we !== Je || we.tag !== 5 && we.tag !== 6) && (we = null)) : (me = null, we = oe), me !== we)) {
            if (Se = p0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (n === "pointerout" || n === "pointerover") && (Se = g0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), Je = me == null ? le : To(me), re = we == null ? le : To(we), le = new Se(he, J + "leave", me, c, ue), le.target = Je, le.relatedTarget = re, he = null, $r(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = Je, he = Se), Je = he, me && we) t: {
              for (Se = me, ne = we, J = 0, re = Se; re; re = Ro(re)) J++;
              for (re = 0, he = ne; he; he = Ro(he)) re++;
              for (; 0 < J - re; ) Se = Ro(Se), J--;
              for (; 0 < re - J; ) ne = Ro(ne), re--;
              for (; J--; ) {
                if (Se === ne || ne !== null && Se === ne.alternate) break t;
                Se = Ro(Se), ne = Ro(ne);
              }
              Se = null;
            }
            else Se = null;
            me !== null && V0(fe, le, me, Se, !1), we !== null && Je !== null && V0(fe, Je, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? To(oe) : window, me = le.nodeName && le.nodeName.toLowerCase(), me === "select" || me === "input" && le.type === "file") var Ce = iI;
          else if (b0(le)) if (E0) Ce = uI;
          else {
            Ce = aI;
            var ke = sI;
          }
          else (me = le.nodeName) && me.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = lI);
          if (Ce && (Ce = Ce(n, oe))) {
            S0(fe, Ce, c, ue);
            break e;
          }
          ke && ke(n, le, oe), n === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && He(le, "number", le.value);
        }
        switch (ke = oe ? To(oe) : window, n) {
          case "focusin":
            (b0(ke) || ke.contentEditable === "true") && (ko = ke, _c = oe, Wi = null);
            break;
          case "focusout":
            Wi = _c = ko = null;
            break;
          case "mousedown":
            bc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bc = !1, I0(fe, c, ue);
            break;
          case "selectionchange":
            if (dI) break;
          case "keydown":
          case "keyup":
            I0(fe, c, ue);
        }
        var Ne;
        if (vc) e: {
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
        else Co ? x0(n, c) && (Pe = "onCompositionEnd") : n === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (v0 && c.locale !== "ko" && (Co || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Co && (Ne = d0()) : (ar = ue, fc = "value" in ar ? ar.value : ar.textContent, Co = !0)), ke = Sa(oe, Pe), 0 < ke.length && (Pe = new m0(Pe, n, null, c, ue), fe.push({ event: Pe, listeners: ke }), Ne ? Pe.data = Ne : (Ne = _0(c), Ne !== null && (Pe.data = Ne)))), (Ne = eI ? tI(n, c) : nI(n, c)) && (oe = Sa(oe, "onBeforeInput"), 0 < oe.length && (ue = new m0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Ne));
      }
      $0(fe, i);
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
  function Ro(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function V0(n, i, c, p, v) {
    for (var b = i._reactName, P = []; c !== null && c !== p; ) {
      var z = c, U = z.alternate, oe = z.stateNode;
      if (U !== null && U === p) break;
      z.tag === 5 && oe !== null && (z = oe, v ? (U = qr(c, b), U != null && P.unshift(Yi(c, U, z))) : v || (U = qr(c, b), U != null && P.push(Yi(c, U, z)))), c = c.return;
    }
    P.length !== 0 && n.push({ event: i, listeners: P });
  }
  var gI = /\r\n?/g, vI = /\u0000|\uFFFD/g;
  function H0(n) {
    return (typeof n == "string" ? n : "" + n).replace(gI, `
`).replace(vI, "");
  }
  function Ea(n, i, c) {
    if (i = H0(i), H0(n) !== i && c) throw Error(r(425));
  }
  function Ca() {
  }
  var Rc = null, Pc = null;
  function Tc(n, i) {
    return n === "textarea" || n === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Ac = typeof setTimeout == "function" ? setTimeout : void 0, yI = typeof clearTimeout == "function" ? clearTimeout : void 0, W0 = typeof Promise == "function" ? Promise : void 0, wI = typeof queueMicrotask == "function" ? queueMicrotask : typeof W0 < "u" ? function(n) {
    return W0.resolve(null).then(n).catch(xI);
  } : Ac;
  function xI(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ic(n, i) {
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
  function U0(n) {
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
  var Po = Math.random().toString(36).slice(2), _n = "__reactFiber$" + Po, Ki = "__reactProps$" + Po, qn = "__reactContainer$" + Po, Mc = "__reactEvents$" + Po, _I = "__reactListeners$" + Po, bI = "__reactHandles$" + Po;
  function $r(n) {
    var i = n[_n];
    if (i) return i;
    for (var c = n.parentNode; c; ) {
      if (i = c[qn] || c[_n]) {
        if (c = i.alternate, i.child !== null || c !== null && c.child !== null) for (n = U0(n); n !== null; ) {
          if (c = n[_n]) return c;
          n = U0(n);
        }
        return i;
      }
      n = c, c = n.parentNode;
    }
    return null;
  }
  function Xi(n) {
    return n = n[_n] || n[qn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function To(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function ka(n) {
    return n[Ki] || null;
  }
  var Oc = [], Ao = -1;
  function cr(n) {
    return { current: n };
  }
  function je(n) {
    0 > Ao || (n.current = Oc[Ao], Oc[Ao] = null, Ao--);
  }
  function qe(n, i) {
    Ao++, Oc[Ao] = n.current, n.current = i;
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
  function Na() {
    je(bt), je(pt);
  }
  function G0(n, i, c) {
    if (pt.current !== fr) throw Error(r(168));
    qe(pt, i), qe(bt, c);
  }
  function Y0(n, i, c) {
    var p = n.stateNode;
    if (i = i.childContextTypes, typeof p.getChildContext != "function") return c;
    p = p.getChildContext();
    for (var v in p) if (!(v in i)) throw Error(r(108, K(n) || "Unknown", v));
    return Q({}, c, p);
  }
  function Ra(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || fr, Br = pt.current, qe(pt, n), qe(bt, bt.current), !0;
  }
  function K0(n, i, c) {
    var p = n.stateNode;
    if (!p) throw Error(r(169));
    c ? (n = Y0(n, i, Br), p.__reactInternalMemoizedMergedChildContext = n, je(bt), je(pt), qe(pt, n)) : je(bt), qe(bt, c);
  }
  var Dn = null, Pa = !1, Lc = !1;
  function X0(n) {
    Dn === null ? Dn = [n] : Dn.push(n);
  }
  function SI(n) {
    Pa = !0, X0(n);
  }
  function dr() {
    if (!Lc && Dn !== null) {
      Lc = !0;
      var n = 0, i = Le;
      try {
        var c = Dn;
        for (Le = 1; n < c.length; n++) {
          var p = c[n];
          do
            p = p(!0);
          while (p !== null);
        }
        Dn = null, Pa = !1;
      } catch (v) {
        throw Dn !== null && (Dn = Dn.slice(n + 1)), ia(Ii, dr), v;
      } finally {
        Le = i, Lc = !1;
      }
    }
    return null;
  }
  var Mo = [], Oo = 0, Ta = null, Aa = 0, Ut = [], Gt = 0, Vr = null, jn = 1, zn = "";
  function Hr(n, i) {
    Mo[Oo++] = Aa, Mo[Oo++] = Ta, Ta = n, Aa = i;
  }
  function Q0(n, i, c) {
    Ut[Gt++] = jn, Ut[Gt++] = zn, Ut[Gt++] = Vr, Vr = n;
    var p = jn;
    n = zn;
    var v = 32 - At(p) - 1;
    p &= ~(1 << v), c += 1;
    var b = 32 - At(i) + v;
    if (30 < b) {
      var P = v - v % 5;
      b = (p & (1 << P) - 1).toString(32), p >>= P, v -= P, jn = 1 << 32 - At(i) + v | c << v | p, zn = b + n;
    } else jn = 1 << b | c << v | p, zn = n;
  }
  function qc(n) {
    n.return !== null && (Hr(n, 1), Q0(n, 1, 0));
  }
  function Dc(n) {
    for (; n === Ta; ) Ta = Mo[--Oo], Mo[Oo] = null, Aa = Mo[--Oo], Mo[Oo] = null;
    for (; n === Vr; ) Vr = Ut[--Gt], Ut[Gt] = null, zn = Ut[--Gt], Ut[Gt] = null, jn = Ut[--Gt], Ut[Gt] = null;
  }
  var Mt = null, Ot = null, ze = !1, rn = null;
  function Z0(n, i) {
    var c = Qt(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = i, c.return = n, i = n.deletions, i === null ? (n.deletions = [c], n.flags |= 16) : i.push(c);
  }
  function J0(n, i) {
    switch (n.tag) {
      case 5:
        var c = n.type;
        return i = i.nodeType !== 1 || c.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (n.stateNode = i, Mt = n, Ot = ur(i.firstChild), !0) : !1;
      case 6:
        return i = n.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (n.stateNode = i, Mt = n, Ot = null, !0) : !1;
      case 13:
        return i = i.nodeType !== 8 ? null : i, i !== null ? (c = Vr !== null ? { id: jn, overflow: zn } : null, n.memoizedState = { dehydrated: i, treeContext: c, retryLane: 1073741824 }, c = Qt(18, null, null, 0), c.stateNode = i, c.return = n, n.child = c, Mt = n, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function zc(n) {
    if (ze) {
      var i = Ot;
      if (i) {
        var c = i;
        if (!J0(n, i)) {
          if (jc(n)) throw Error(r(418));
          i = ur(c.nextSibling);
          var p = Mt;
          i && J0(n, i) ? Z0(p, c) : (n.flags = n.flags & -4097 | 2, ze = !1, Mt = n);
        }
      } else {
        if (jc(n)) throw Error(r(418));
        n.flags = n.flags & -4097 | 2, ze = !1, Mt = n;
      }
    }
  }
  function ew(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Mt = n;
  }
  function Ia(n) {
    if (n !== Mt) return !1;
    if (!ze) return ew(n), ze = !0, !1;
    var i;
    if ((i = n.tag !== 3) && !(i = n.tag !== 5) && (i = n.type, i = i !== "head" && i !== "body" && !Tc(n.type, n.memoizedProps)), i && (i = Ot)) {
      if (jc(n)) throw tw(), Error(r(418));
      for (; i; ) Z0(n, i), i = ur(i.nextSibling);
    }
    if (ew(n), n.tag === 13) {
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
  function tw() {
    for (var n = Ot; n; ) n = ur(n.nextSibling);
  }
  function Lo() {
    Ot = Mt = null, ze = !1;
  }
  function Fc(n) {
    rn === null ? rn = [n] : rn.push(n);
  }
  var EI = k.ReactCurrentBatchConfig;
  function Qi(n, i, c) {
    if (n = c.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(r(309));
          var p = c.stateNode;
        }
        if (!p) throw Error(r(147, n));
        var v = p, b = "" + n;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === b ? i.ref : (i = function(P) {
          var z = v.refs;
          P === null ? delete z[b] : z[b] = P;
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
  function nw(n) {
    var i = n._init;
    return i(n._payload);
  }
  function rw(n) {
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
    function P(ne) {
      return n && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function z(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = If(re, ne.mode, he), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function U(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && nw(Ce) === J.type) ? (he = v(J, re.props), he.ref = Qi(ne, J, re), he.return = ne, he) : (he = rl(re.type, re.key, re.props, null, ne.mode, he), he.ref = Qi(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = Mf(re, ne.mode, he), J.return = ne, J) : (J = v(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = Zr(re, ne.mode, he, Ce), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = If("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case R:
            return re = rl(J.type, J.key, J.props, null, ne.mode, re), re.ref = Qi(ne, null, J), re.return = ne, re;
          case T:
            return J = Mf(J, ne.mode, re), J.return = ne, J;
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
          case R:
            return re.key === Ce ? U(ne, J, re, he) : null;
          case T:
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
          case R:
            return ne = ne.get(he.key === null ? re : he.key) || null, U(J, ne, he, Ce);
          case T:
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
      for (var Ce = null, ke = null, Ne = J, Pe = J = 0, ct = null; Ne !== null && Pe < re.length; Pe++) {
        Ne.index > Pe ? (ct = Ne, Ne = null) : ct = Ne.sibling;
        var Oe = le(ne, Ne, re[Pe], he);
        if (Oe === null) {
          Ne === null && (Ne = ct);
          break;
        }
        n && Ne && Oe.alternate === null && i(ne, Ne), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe, Ne = ct;
      }
      if (Pe === re.length) return c(ne, Ne), ze && Hr(ne, Pe), Ce;
      if (Ne === null) {
        for (; Pe < re.length; Pe++) Ne = fe(ne, re[Pe], he), Ne !== null && (J = b(Ne, J, Pe), ke === null ? Ce = Ne : ke.sibling = Ne, ke = Ne);
        return ze && Hr(ne, Pe), Ce;
      }
      for (Ne = p(ne, Ne); Pe < re.length; Pe++) ct = me(Ne, ne, Pe, re[Pe], he), ct !== null && (n && ct.alternate !== null && Ne.delete(ct.key === null ? Pe : ct.key), J = b(ct, J, Pe), ke === null ? Ce = ct : ke.sibling = ct, ke = ct);
      return n && Ne.forEach(function(_r) {
        return i(ne, _r);
      }), ze && Hr(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = j(re);
      if (typeof Ce != "function") throw Error(r(150));
      if (re = Ce.call(re), re == null) throw Error(r(151));
      for (var ke = Ce = null, Ne = J, Pe = J = 0, ct = null, Oe = re.next(); Ne !== null && !Oe.done; Pe++, Oe = re.next()) {
        Ne.index > Pe ? (ct = Ne, Ne = null) : ct = Ne.sibling;
        var _r = le(ne, Ne, Oe.value, he);
        if (_r === null) {
          Ne === null && (Ne = ct);
          break;
        }
        n && Ne && _r.alternate === null && i(ne, Ne), J = b(_r, J, Pe), ke === null ? Ce = _r : ke.sibling = _r, ke = _r, Ne = ct;
      }
      if (Oe.done) return c(
        ne,
        Ne
      ), ze && Hr(ne, Pe), Ce;
      if (Ne === null) {
        for (; !Oe.done; Pe++, Oe = re.next()) Oe = fe(ne, Oe.value, he), Oe !== null && (J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
        return ze && Hr(ne, Pe), Ce;
      }
      for (Ne = p(ne, Ne); !Oe.done; Pe++, Oe = re.next()) Oe = me(Ne, ne, Pe, Oe.value, he), Oe !== null && (n && Oe.alternate !== null && Ne.delete(Oe.key === null ? Pe : Oe.key), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
      return n && Ne.forEach(function(r2) {
        return i(ne, r2);
      }), ze && Hr(ne, Pe), Ce;
    }
    function Je(ne, J, re, he) {
      if (typeof re == "object" && re !== null && re.type === A && re.key === null && (re = re.props.children), typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case R:
            e: {
              for (var Ce = re.key, ke = J; ke !== null; ) {
                if (ke.key === Ce) {
                  if (Ce = re.type, Ce === A) {
                    if (ke.tag === 7) {
                      c(ne, ke.sibling), J = v(ke, re.props.children), J.return = ne, ne = J;
                      break e;
                    }
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && nw(Ce) === ke.type) {
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
            return P(ne);
          case T:
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
              J = Mf(re, ne.mode, he), J.return = ne, ne = J;
            }
            return P(ne);
          case $:
            return ke = re._init, Je(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return we(ne, J, re, he);
        if (j(re)) return Se(ne, J, re, he);
        Ma(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = v(J, re), J.return = ne, ne = J) : (c(ne, J), J = If(re, ne.mode, he), J.return = ne, ne = J), P(ne)) : c(ne, J);
    }
    return Je;
  }
  var qo = rw(!0), ow = rw(!1), Oa = cr(null), La = null, Do = null, $c = null;
  function Bc() {
    $c = Do = La = null;
  }
  function Vc(n) {
    var i = Oa.current;
    je(Oa), n._currentValue = i;
  }
  function Hc(n, i, c) {
    for (; n !== null; ) {
      var p = n.alternate;
      if ((n.childLanes & i) !== i ? (n.childLanes |= i, p !== null && (p.childLanes |= i)) : p !== null && (p.childLanes & i) !== i && (p.childLanes |= i), n === c) break;
      n = n.return;
    }
  }
  function jo(n, i) {
    La = n, $c = Do = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & i) !== 0 && (Et = !0), n.firstContext = null);
  }
  function Yt(n) {
    var i = n._currentValue;
    if ($c !== n) if (n = { context: n, memoizedValue: i, next: null }, Do === null) {
      if (La === null) throw Error(r(308));
      Do = n, La.dependencies = { lanes: 0, firstContext: n };
    } else Do = Do.next = n;
    return i;
  }
  var Wr = null;
  function Wc(n) {
    Wr === null ? Wr = [n] : Wr.push(n);
  }
  function iw(n, i, c, p) {
    var v = i.interleaved;
    return v === null ? (c.next = c, Wc(i)) : (c.next = v.next, v.next = c), i.interleaved = c, Fn(n, p);
  }
  function Fn(n, i) {
    n.lanes |= i;
    var c = n.alternate;
    for (c !== null && (c.lanes |= i), c = n, n = n.return; n !== null; ) n.childLanes |= i, c = n.alternate, c !== null && (c.childLanes |= i), c = n, n = n.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var hr = !1;
  function Uc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function sw(n, i) {
    n = n.updateQueue, i.updateQueue === n && (i.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function $n(n, i) {
    return { eventTime: n, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function pr(n, i, c) {
    var p = n.updateQueue;
    if (p === null) return null;
    if (p = p.shared, (Me & 2) !== 0) {
      var v = p.pending;
      return v === null ? i.next = i : (i.next = v.next, v.next = i), p.pending = i, Fn(n, c);
    }
    return v = p.interleaved, v === null ? (i.next = i, Wc(p)) : (i.next = v.next, v.next = i), p.interleaved = i, Fn(n, c);
  }
  function qa(n, i, c) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (c & 4194240) !== 0)) {
      var p = i.lanes;
      p &= n.pendingLanes, c |= p, i.lanes = c, sc(n, c);
    }
  }
  function aw(n, i) {
    var c = n.updateQueue, p = n.alternate;
    if (p !== null && (p = p.updateQueue, c === p)) {
      var v = null, b = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var P = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          b === null ? v = b = P : b = b.next = P, c = c.next;
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
    var b = v.firstBaseUpdate, P = v.lastBaseUpdate, z = v.shared.pending;
    if (z !== null) {
      v.shared.pending = null;
      var U = z, oe = U.next;
      U.next = null, P === null ? b = oe : P.next = oe, P = U;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, z = ue.lastBaseUpdate, z !== P && (z === null ? ue.firstBaseUpdate = oe : z.next = oe, ue.lastBaseUpdate = U));
    }
    if (b !== null) {
      var fe = v.baseState;
      P = 0, ue = oe = U = null, z = b;
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
        } else me = { eventTime: me, lane: le, tag: z.tag, payload: z.payload, callback: z.callback, next: null }, ue === null ? (oe = ue = me, U = fe) : ue = ue.next = me, P |= le;
        if (z = z.next, z === null) {
          if (z = v.shared.pending, z === null) break;
          le = z, z = le.next, le.next = null, v.lastBaseUpdate = le, v.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (U = fe), v.baseState = U, v.firstBaseUpdate = oe, v.lastBaseUpdate = ue, i = v.shared.interleaved, i !== null) {
        v = i;
        do
          P |= v.lane, v = v.next;
        while (v !== i);
      } else b === null && (v.shared.lanes = 0);
      Yr |= P, n.lanes = P, n.memoizedState = fe;
    }
  }
  function lw(n, i, c) {
    if (n = i.effects, i.effects = null, n !== null) for (i = 0; i < n.length; i++) {
      var p = n[i], v = p.callback;
      if (v !== null) {
        if (p.callback = null, p = c, typeof v != "function") throw Error(r(191, v));
        v.call(p);
      }
    }
  }
  var Zi = {}, bn = cr(Zi), Ji = cr(Zi), es = cr(Zi);
  function Ur(n) {
    if (n === Zi) throw Error(r(174));
    return n;
  }
  function Gc(n, i) {
    switch (qe(es, i), qe(Ji, n), qe(bn, Zi), n = i.nodeType, n) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Bt(null, "");
        break;
      default:
        n = n === 8 ? i.parentNode : i, i = n.namespaceURI || null, n = n.tagName, i = Bt(i, n);
    }
    je(bn), qe(bn, i);
  }
  function zo() {
    je(bn), je(Ji), je(es);
  }
  function uw(n) {
    Ur(es.current);
    var i = Ur(bn.current), c = Bt(i, n.type);
    i !== c && (qe(Ji, n), qe(bn, c));
  }
  function Yc(n) {
    Ji.current === n && (je(bn), je(Ji));
  }
  var Ge = cr(0);
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
  var Kc = [];
  function Xc() {
    for (var n = 0; n < Kc.length; n++) Kc[n]._workInProgressVersionPrimary = null;
    Kc.length = 0;
  }
  var za = k.ReactCurrentDispatcher, Qc = k.ReactCurrentBatchConfig, Gr = 0, Ye = null, ot = null, lt = null, Fa = !1, ts = !1, ns = 0, CI = 0;
  function mt() {
    throw Error(r(321));
  }
  function Zc(n, i) {
    if (i === null) return !1;
    for (var c = 0; c < i.length && c < n.length; c++) if (!nn(n[c], i[c])) return !1;
    return !0;
  }
  function Jc(n, i, c, p, v, b) {
    if (Gr = b, Ye = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, za.current = n === null || n.memoizedState === null ? PI : TI, n = c(p, v), ts) {
      b = 0;
      do {
        if (ts = !1, ns = 0, 25 <= b) throw Error(r(301));
        b += 1, lt = ot = null, i.updateQueue = null, za.current = AI, n = c(p, v);
      } while (ts);
    }
    if (za.current = Va, i = ot !== null && ot.next !== null, Gr = 0, lt = ot = Ye = null, Fa = !1, i) throw Error(r(300));
    return n;
  }
  function ef() {
    var n = ns !== 0;
    return ns = 0, n;
  }
  function Sn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Ye.memoizedState = lt = n : lt = lt.next = n, lt;
  }
  function Kt() {
    if (ot === null) {
      var n = Ye.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ot.next;
    var i = lt === null ? Ye.memoizedState : lt.next;
    if (i !== null) lt = i, ot = n;
    else {
      if (n === null) throw Error(r(310));
      ot = n, n = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, lt === null ? Ye.memoizedState = lt = n : lt = lt.next = n;
    }
    return lt;
  }
  function rs(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function tf(n) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(r(311));
    c.lastRenderedReducer = n;
    var p = ot, v = p.baseQueue, b = c.pending;
    if (b !== null) {
      if (v !== null) {
        var P = v.next;
        v.next = b.next, b.next = P;
      }
      p.baseQueue = v = b, c.pending = null;
    }
    if (v !== null) {
      b = v.next, p = p.baseState;
      var z = P = null, U = null, oe = b;
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
          U === null ? (z = U = fe, P = p) : U = U.next = fe, Ye.lanes |= ue, Yr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== b);
      U === null ? P = p : U.next = z, nn(p, i.memoizedState) || (Et = !0), i.memoizedState = p, i.baseState = P, i.baseQueue = U, c.lastRenderedState = p;
    }
    if (n = c.interleaved, n !== null) {
      v = n;
      do
        b = v.lane, Ye.lanes |= b, Yr |= b, v = v.next;
      while (v !== n);
    } else v === null && (c.lanes = 0);
    return [i.memoizedState, c.dispatch];
  }
  function nf(n) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(r(311));
    c.lastRenderedReducer = n;
    var p = c.dispatch, v = c.pending, b = i.memoizedState;
    if (v !== null) {
      c.pending = null;
      var P = v = v.next;
      do
        b = n(b, P.action), P = P.next;
      while (P !== v);
      nn(b, i.memoizedState) || (Et = !0), i.memoizedState = b, i.baseQueue === null && (i.baseState = b), c.lastRenderedState = b;
    }
    return [b, p];
  }
  function cw() {
  }
  function fw(n, i) {
    var c = Ye, p = Kt(), v = i(), b = !nn(p.memoizedState, v);
    if (b && (p.memoizedState = v, Et = !0), p = p.queue, rf(pw.bind(null, c, p, n), [n]), p.getSnapshot !== i || b || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, os(9, hw.bind(null, c, p, v, i), void 0, null), ut === null) throw Error(r(349));
      (Gr & 30) !== 0 || dw(c, i, v);
    }
    return v;
  }
  function dw(n, i, c) {
    n.flags |= 16384, n = { getSnapshot: i, value: c }, i = Ye.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ye.updateQueue = i, i.stores = [n]) : (c = i.stores, c === null ? i.stores = [n] : c.push(n));
  }
  function hw(n, i, c, p) {
    i.value = c, i.getSnapshot = p, mw(i) && gw(n);
  }
  function pw(n, i, c) {
    return c(function() {
      mw(i) && gw(n);
    });
  }
  function mw(n) {
    var i = n.getSnapshot;
    n = n.value;
    try {
      var c = i();
      return !nn(n, c);
    } catch {
      return !0;
    }
  }
  function gw(n) {
    var i = Fn(n, 1);
    i !== null && ln(i, n, 1, -1);
  }
  function vw(n) {
    var i = Sn();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rs, lastRenderedState: n }, i.queue = n, n = n.dispatch = RI.bind(null, Ye, n), [i.memoizedState, n];
  }
  function os(n, i, c, p) {
    return n = { tag: n, create: i, destroy: c, deps: p, next: null }, i = Ye.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ye.updateQueue = i, i.lastEffect = n.next = n) : (c = i.lastEffect, c === null ? i.lastEffect = n.next = n : (p = c.next, c.next = n, n.next = p, i.lastEffect = n)), n;
  }
  function yw() {
    return Kt().memoizedState;
  }
  function $a(n, i, c, p) {
    var v = Sn();
    Ye.flags |= n, v.memoizedState = os(1 | i, c, void 0, p === void 0 ? null : p);
  }
  function Ba(n, i, c, p) {
    var v = Kt();
    p = p === void 0 ? null : p;
    var b = void 0;
    if (ot !== null) {
      var P = ot.memoizedState;
      if (b = P.destroy, p !== null && Zc(p, P.deps)) {
        v.memoizedState = os(i, c, b, p);
        return;
      }
    }
    Ye.flags |= n, v.memoizedState = os(1 | i, c, b, p);
  }
  function ww(n, i) {
    return $a(8390656, 8, n, i);
  }
  function rf(n, i) {
    return Ba(2048, 8, n, i);
  }
  function xw(n, i) {
    return Ba(4, 2, n, i);
  }
  function _w(n, i) {
    return Ba(4, 4, n, i);
  }
  function bw(n, i) {
    if (typeof i == "function") return n = n(), i(n), function() {
      i(null);
    };
    if (i != null) return n = n(), i.current = n, function() {
      i.current = null;
    };
  }
  function Sw(n, i, c) {
    return c = c != null ? c.concat([n]) : null, Ba(4, 4, bw.bind(null, i, n), c);
  }
  function of() {
  }
  function Ew(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Zc(i, p[1]) ? p[0] : (c.memoizedState = [n, i], n);
  }
  function Cw(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Zc(i, p[1]) ? p[0] : (n = n(), c.memoizedState = [n, i], n);
  }
  function kw(n, i, c) {
    return (Gr & 21) === 0 ? (n.baseState && (n.baseState = !1, Et = !0), n.memoizedState = c) : (nn(c, i) || (c = ca(), Ye.lanes |= c, Yr |= c, n.baseState = !0), i);
  }
  function kI(n, i) {
    var c = Le;
    Le = c !== 0 && 4 > c ? c : 4, n(!0);
    var p = Qc.transition;
    Qc.transition = {};
    try {
      n(!1), i();
    } finally {
      Le = c, Qc.transition = p;
    }
  }
  function Nw() {
    return Kt().memoizedState;
  }
  function NI(n, i, c) {
    var p = yr(n);
    if (c = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null }, Rw(n)) Pw(i, c);
    else if (c = iw(n, i, c, p), c !== null) {
      var v = xt();
      ln(c, n, p, v), Tw(c, i, p);
    }
  }
  function RI(n, i, c) {
    var p = yr(n), v = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (Rw(n)) Pw(i, v);
    else {
      var b = n.alternate;
      if (n.lanes === 0 && (b === null || b.lanes === 0) && (b = i.lastRenderedReducer, b !== null)) try {
        var P = i.lastRenderedState, z = b(P, c);
        if (v.hasEagerState = !0, v.eagerState = z, nn(z, P)) {
          var U = i.interleaved;
          U === null ? (v.next = v, Wc(i)) : (v.next = U.next, U.next = v), i.interleaved = v;
          return;
        }
      } catch {
      } finally {
      }
      c = iw(n, i, v, p), c !== null && (v = xt(), ln(c, n, p, v), Tw(c, i, p));
    }
  }
  function Rw(n) {
    var i = n.alternate;
    return n === Ye || i !== null && i === Ye;
  }
  function Pw(n, i) {
    ts = Fa = !0;
    var c = n.pending;
    c === null ? i.next = i : (i.next = c.next, c.next = i), n.pending = i;
  }
  function Tw(n, i, c) {
    if ((c & 4194240) !== 0) {
      var p = i.lanes;
      p &= n.pendingLanes, c |= p, i.lanes = c, sc(n, c);
    }
  }
  var Va = { readContext: Yt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, PI = { readContext: Yt, useCallback: function(n, i) {
    return Sn().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: Yt, useEffect: ww, useImperativeHandle: function(n, i, c) {
    return c = c != null ? c.concat([n]) : null, $a(
      4194308,
      4,
      bw.bind(null, i, n),
      c
    );
  }, useLayoutEffect: function(n, i) {
    return $a(4194308, 4, n, i);
  }, useInsertionEffect: function(n, i) {
    return $a(4, 2, n, i);
  }, useMemo: function(n, i) {
    var c = Sn();
    return i = i === void 0 ? null : i, n = n(), c.memoizedState = [n, i], n;
  }, useReducer: function(n, i, c) {
    var p = Sn();
    return i = c !== void 0 ? c(i) : i, p.memoizedState = p.baseState = i, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, p.queue = n, n = n.dispatch = NI.bind(null, Ye, n), [p.memoizedState, n];
  }, useRef: function(n) {
    var i = Sn();
    return n = { current: n }, i.memoizedState = n;
  }, useState: vw, useDebugValue: of, useDeferredValue: function(n) {
    return Sn().memoizedState = n;
  }, useTransition: function() {
    var n = vw(!1), i = n[0];
    return n = kI.bind(null, n[1]), Sn().memoizedState = n, [i, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, i, c) {
    var p = Ye, v = Sn();
    if (ze) {
      if (c === void 0) throw Error(r(407));
      c = c();
    } else {
      if (c = i(), ut === null) throw Error(r(349));
      (Gr & 30) !== 0 || dw(p, i, c);
    }
    v.memoizedState = c;
    var b = { value: c, getSnapshot: i };
    return v.queue = b, ww(pw.bind(
      null,
      p,
      b,
      n
    ), [n]), p.flags |= 2048, os(9, hw.bind(null, p, b, c, i), void 0, null), c;
  }, useId: function() {
    var n = Sn(), i = ut.identifierPrefix;
    if (ze) {
      var c = zn, p = jn;
      c = (p & ~(1 << 32 - At(p) - 1)).toString(32) + c, i = ":" + i + "R" + c, c = ns++, 0 < c && (i += "H" + c.toString(32)), i += ":";
    } else c = CI++, i = ":" + i + "r" + c.toString(32) + ":";
    return n.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, TI = {
    readContext: Yt,
    useCallback: Ew,
    useContext: Yt,
    useEffect: rf,
    useImperativeHandle: Sw,
    useInsertionEffect: xw,
    useLayoutEffect: _w,
    useMemo: Cw,
    useReducer: tf,
    useRef: yw,
    useState: function() {
      return tf(rs);
    },
    useDebugValue: of,
    useDeferredValue: function(n) {
      var i = Kt();
      return kw(i, ot.memoizedState, n);
    },
    useTransition: function() {
      var n = tf(rs)[0], i = Kt().memoizedState;
      return [n, i];
    },
    useMutableSource: cw,
    useSyncExternalStore: fw,
    useId: Nw,
    unstable_isNewReconciler: !1
  }, AI = { readContext: Yt, useCallback: Ew, useContext: Yt, useEffect: rf, useImperativeHandle: Sw, useInsertionEffect: xw, useLayoutEffect: _w, useMemo: Cw, useReducer: nf, useRef: yw, useState: function() {
    return nf(rs);
  }, useDebugValue: of, useDeferredValue: function(n) {
    var i = Kt();
    return ot === null ? i.memoizedState = n : kw(i, ot.memoizedState, n);
  }, useTransition: function() {
    var n = nf(rs)[0], i = Kt().memoizedState;
    return [n, i];
  }, useMutableSource: cw, useSyncExternalStore: fw, useId: Nw, unstable_isNewReconciler: !1 };
  function on(n, i) {
    if (n && n.defaultProps) {
      i = Q({}, i), n = n.defaultProps;
      for (var c in n) i[c] === void 0 && (i[c] = n[c]);
      return i;
    }
    return i;
  }
  function sf(n, i, c, p) {
    i = n.memoizedState, c = c(p, i), c = c == null ? i : Q({}, i, c), n.memoizedState = c, n.lanes === 0 && (n.updateQueue.baseState = c);
  }
  var Ha = { isMounted: function(n) {
    return (n = n._reactInternals) ? wn(n) === n : !1;
  }, enqueueSetState: function(n, i, c) {
    n = n._reactInternals;
    var p = xt(), v = yr(n), b = $n(p, v);
    b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, p), qa(i, n, v));
  }, enqueueReplaceState: function(n, i, c) {
    n = n._reactInternals;
    var p = xt(), v = yr(n), b = $n(p, v);
    b.tag = 1, b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, p), qa(i, n, v));
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var c = xt(), p = yr(n), v = $n(c, p);
    v.tag = 2, i != null && (v.callback = i), i = pr(n, v, p), i !== null && (ln(i, n, p, c), qa(i, n, p));
  } };
  function Aw(n, i, c, p, v, b, P) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(p, b, P) : i.prototype && i.prototype.isPureReactComponent ? !Hi(c, p) || !Hi(v, b) : !0;
  }
  function Iw(n, i, c) {
    var p = !1, v = fr, b = i.contextType;
    return typeof b == "object" && b !== null ? b = Yt(b) : (v = St(i) ? Br : pt.current, p = i.contextTypes, b = (p = p != null) ? Io(n, v) : fr), i = new i(c, b), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ha, n.stateNode = i, i._reactInternals = n, p && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = b), i;
  }
  function Mw(n, i, c, p) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(c, p), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(c, p), i.state !== n && Ha.enqueueReplaceState(i, i.state, null);
  }
  function af(n, i, c, p) {
    var v = n.stateNode;
    v.props = c, v.state = n.memoizedState, v.refs = {}, Uc(n);
    var b = i.contextType;
    typeof b == "object" && b !== null ? v.context = Yt(b) : (b = St(i) ? Br : pt.current, v.context = Io(n, b)), v.state = n.memoizedState, b = i.getDerivedStateFromProps, typeof b == "function" && (sf(n, i, b, c), v.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (i = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), i !== v.state && Ha.enqueueReplaceState(v, v.state, null), Da(n, c, v, p), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
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
  function lf(n, i, c) {
    return { value: n, source: null, stack: c ?? null, digest: i ?? null };
  }
  function uf(n, i) {
    try {
      console.error(i.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var II = typeof WeakMap == "function" ? WeakMap : Map;
  function Ow(n, i, c) {
    c = $n(-1, c), c.tag = 3, c.payload = { element: null };
    var p = i.value;
    return c.callback = function() {
      Qa || (Qa = !0, Ef = p), uf(n, i);
    }, c;
  }
  function Lw(n, i, c) {
    c = $n(-1, c), c.tag = 3;
    var p = n.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var v = i.value;
      c.payload = function() {
        return p(v);
      }, c.callback = function() {
        uf(n, i);
      };
    }
    var b = n.stateNode;
    return b !== null && typeof b.componentDidCatch == "function" && (c.callback = function() {
      uf(n, i), typeof p != "function" && (gr === null ? gr = /* @__PURE__ */ new Set([this]) : gr.add(this));
      var P = i.stack;
      this.componentDidCatch(i.value, { componentStack: P !== null ? P : "" });
    }), c;
  }
  function qw(n, i, c) {
    var p = n.pingCache;
    if (p === null) {
      p = n.pingCache = new II();
      var v = /* @__PURE__ */ new Set();
      p.set(i, v);
    } else v = p.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), p.set(i, v));
    v.has(c) || (v.add(c), n = UI.bind(null, n, i, c), i.then(n, n));
  }
  function Dw(n) {
    do {
      var i;
      if ((i = n.tag === 13) && (i = n.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function jw(n, i, c, p, v) {
    return (n.mode & 1) === 0 ? (n === i ? n.flags |= 65536 : (n.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (i = $n(-1, 1), i.tag = 2, pr(c, i, 1))), c.lanes |= 1), n) : (n.flags |= 65536, n.lanes = v, n);
  }
  var MI = k.ReactCurrentOwner, Et = !1;
  function wt(n, i, c, p) {
    i.child = n === null ? ow(i, null, c, p) : qo(i, n.child, c, p);
  }
  function zw(n, i, c, p, v) {
    c = c.render;
    var b = i.ref;
    return jo(i, v), p = Jc(n, i, c, p, b, v), c = ef(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Bn(n, i, v)) : (ze && c && qc(i), i.flags |= 1, wt(n, i, p, v), i.child);
  }
  function Fw(n, i, c, p, v) {
    if (n === null) {
      var b = c.type;
      return typeof b == "function" && !Af(b) && b.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (i.tag = 15, i.type = b, $w(n, i, b, p, v)) : (n = rl(c.type, null, p, i, i.mode, v), n.ref = i.ref, n.return = i, i.child = n);
    }
    if (b = n.child, (n.lanes & v) === 0) {
      var P = b.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Hi, c(P, p) && n.ref === i.ref) return Bn(n, i, v);
    }
    return i.flags |= 1, n = xr(b, p), n.ref = i.ref, n.return = i, i.child = n;
  }
  function $w(n, i, c, p, v) {
    if (n !== null) {
      var b = n.memoizedProps;
      if (Hi(b, p) && n.ref === i.ref) if (Et = !1, i.pendingProps = p = b, (n.lanes & v) !== 0) (n.flags & 131072) !== 0 && (Et = !0);
      else return i.lanes = n.lanes, Bn(n, i, v);
    }
    return cf(n, i, c, p, v);
  }
  function Bw(n, i, c) {
    var p = i.pendingProps, v = p.children, b = n !== null ? n.memoizedState : null;
    if (p.mode === "hidden") if ((i.mode & 1) === 0) i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(Bo, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return n = b !== null ? b.baseLanes | c : c, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, i.updateQueue = null, qe(Bo, Lt), Lt |= n, null;
      i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, p = b !== null ? b.baseLanes : c, qe(Bo, Lt), Lt |= p;
    }
    else b !== null ? (p = b.baseLanes | c, i.memoizedState = null) : p = c, qe(Bo, Lt), Lt |= p;
    return wt(n, i, v, c), i.child;
  }
  function Vw(n, i) {
    var c = i.ref;
    (n === null && c !== null || n !== null && n.ref !== c) && (i.flags |= 512, i.flags |= 2097152);
  }
  function cf(n, i, c, p, v) {
    var b = St(c) ? Br : pt.current;
    return b = Io(i, b), jo(i, v), c = Jc(n, i, c, p, b, v), p = ef(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Bn(n, i, v)) : (ze && p && qc(i), i.flags |= 1, wt(n, i, c, v), i.child);
  }
  function Hw(n, i, c, p, v) {
    if (St(c)) {
      var b = !0;
      Ra(i);
    } else b = !1;
    if (jo(i, v), i.stateNode === null) Ua(n, i), Iw(i, c, p), af(i, c, p, v), p = !0;
    else if (n === null) {
      var P = i.stateNode, z = i.memoizedProps;
      P.props = z;
      var U = P.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Yt(oe) : (oe = St(c) ? Br : pt.current, oe = Io(i, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      fe || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (z !== p || U !== oe) && Mw(i, P, p, oe), hr = !1;
      var le = i.memoizedState;
      P.state = le, Da(i, p, P, v), U = i.memoizedState, z !== p || le !== U || bt.current || hr ? (typeof ue == "function" && (sf(i, c, ue, p), U = i.memoizedState), (z = hr || Aw(i, c, z, p, le, U, oe)) ? (fe || typeof P.UNSAFE_componentWillMount != "function" && typeof P.componentWillMount != "function" || (typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount()), typeof P.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = p, i.memoizedState = U), P.props = p, P.state = U, P.context = oe, p = z) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), p = !1);
    } else {
      P = i.stateNode, sw(n, i), z = i.memoizedProps, oe = i.type === i.elementType ? z : on(i.type, z), P.props = oe, fe = i.pendingProps, le = P.context, U = c.contextType, typeof U == "object" && U !== null ? U = Yt(U) : (U = St(c) ? Br : pt.current, U = Io(i, U));
      var me = c.getDerivedStateFromProps;
      (ue = typeof me == "function" || typeof P.getSnapshotBeforeUpdate == "function") || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (z !== fe || le !== U) && Mw(i, P, p, U), hr = !1, le = i.memoizedState, P.state = le, Da(i, p, P, v);
      var we = i.memoizedState;
      z !== fe || le !== we || bt.current || hr ? (typeof me == "function" && (sf(i, c, me, p), we = i.memoizedState), (oe = hr || Aw(i, c, oe, p, le, we, U) || !1) ? (ue || typeof P.UNSAFE_componentWillUpdate != "function" && typeof P.componentWillUpdate != "function" || (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(p, we, U), typeof P.UNSAFE_componentWillUpdate == "function" && P.UNSAFE_componentWillUpdate(p, we, U)), typeof P.componentDidUpdate == "function" && (i.flags |= 4), typeof P.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof P.componentDidUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), i.memoizedProps = p, i.memoizedState = we), P.props = p, P.state = we, P.context = U, p = oe) : (typeof P.componentDidUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), p = !1);
    }
    return ff(n, i, c, p, b, v);
  }
  function ff(n, i, c, p, v, b) {
    Vw(n, i);
    var P = (i.flags & 128) !== 0;
    if (!p && !P) return v && K0(i, c, !1), Bn(n, i, b);
    p = i.stateNode, MI.current = i;
    var z = P && typeof c.getDerivedStateFromError != "function" ? null : p.render();
    return i.flags |= 1, n !== null && P ? (i.child = qo(i, n.child, null, b), i.child = qo(i, null, z, b)) : wt(n, i, z, b), i.memoizedState = p.state, v && K0(i, c, !0), i.child;
  }
  function Ww(n) {
    var i = n.stateNode;
    i.pendingContext ? G0(n, i.pendingContext, i.pendingContext !== i.context) : i.context && G0(n, i.context, !1), Gc(n, i.containerInfo);
  }
  function Uw(n, i, c, p, v) {
    return Lo(), Fc(v), i.flags |= 256, wt(n, i, c, p), i.child;
  }
  var df = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Gw(n, i, c) {
    var p = i.pendingProps, v = Ge.current, b = !1, P = (i.flags & 128) !== 0, z;
    if ((z = P) || (z = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), z ? (b = !0, i.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), qe(Ge, v & 1), n === null)
      return zc(i), n = i.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((i.mode & 1) === 0 ? i.lanes = 1 : n.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824, null) : (P = p.children, n = p.fallback, b ? (p = i.mode, b = i.child, P = { mode: "hidden", children: P }, (p & 1) === 0 && b !== null ? (b.childLanes = 0, b.pendingProps = P) : b = ol(P, p, 0, null), n = Zr(n, p, c, null), b.return = i, n.return = i, b.sibling = n, i.child = b, i.child.memoizedState = hf(c), i.memoizedState = df, n) : pf(i, P));
    if (v = n.memoizedState, v !== null && (z = v.dehydrated, z !== null)) return OI(n, i, P, p, z, v, c);
    if (b) {
      b = p.fallback, P = i.mode, v = n.child, z = v.sibling;
      var U = { mode: "hidden", children: p.children };
      return (P & 1) === 0 && i.child !== v ? (p = i.child, p.childLanes = 0, p.pendingProps = U, i.deletions = null) : (p = xr(v, U), p.subtreeFlags = v.subtreeFlags & 14680064), z !== null ? b = xr(z, b) : (b = Zr(b, P, c, null), b.flags |= 2), b.return = i, p.return = i, p.sibling = b, i.child = p, p = b, b = i.child, P = n.child.memoizedState, P = P === null ? hf(c) : { baseLanes: P.baseLanes | c, cachePool: null, transitions: P.transitions }, b.memoizedState = P, b.childLanes = n.childLanes & ~c, i.memoizedState = df, p;
    }
    return b = n.child, n = b.sibling, p = xr(b, { mode: "visible", children: p.children }), (i.mode & 1) === 0 && (p.lanes = c), p.return = i, p.sibling = null, n !== null && (c = i.deletions, c === null ? (i.deletions = [n], i.flags |= 16) : c.push(n)), i.child = p, i.memoizedState = null, p;
  }
  function pf(n, i) {
    return i = ol({ mode: "visible", children: i }, n.mode, 0, null), i.return = n, n.child = i;
  }
  function Wa(n, i, c, p) {
    return p !== null && Fc(p), qo(i, n.child, null, c), n = pf(i, i.pendingProps.children), n.flags |= 2, i.memoizedState = null, n;
  }
  function OI(n, i, c, p, v, b, P) {
    if (c)
      return i.flags & 256 ? (i.flags &= -257, p = lf(Error(r(422))), Wa(n, i, P, p)) : i.memoizedState !== null ? (i.child = n.child, i.flags |= 128, null) : (b = p.fallback, v = i.mode, p = ol({ mode: "visible", children: p.children }, v, 0, null), b = Zr(b, v, P, null), b.flags |= 2, p.return = i, b.return = i, p.sibling = b, i.child = p, (i.mode & 1) !== 0 && qo(i, n.child, null, P), i.child.memoizedState = hf(P), i.memoizedState = df, b);
    if ((i.mode & 1) === 0) return Wa(n, i, P, null);
    if (v.data === "$!") {
      if (p = v.nextSibling && v.nextSibling.dataset, p) var z = p.dgst;
      return p = z, b = Error(r(419)), p = lf(b, p, void 0), Wa(n, i, P, p);
    }
    if (z = (P & n.childLanes) !== 0, Et || z) {
      if (p = ut, p !== null) {
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
        v = (v & (p.suspendedLanes | P)) !== 0 ? 0 : v, v !== 0 && v !== b.retryLane && (b.retryLane = v, Fn(n, v), ln(p, n, v, -1));
      }
      return Tf(), p = lf(Error(r(421))), Wa(n, i, P, p);
    }
    return v.data === "$?" ? (i.flags |= 128, i.child = n.child, i = GI.bind(null, n), v._reactRetry = i, null) : (n = b.treeContext, Ot = ur(v.nextSibling), Mt = i, ze = !0, rn = null, n !== null && (Ut[Gt++] = jn, Ut[Gt++] = zn, Ut[Gt++] = Vr, jn = n.id, zn = n.overflow, Vr = i), i = pf(i, p.children), i.flags |= 4096, i);
  }
  function Yw(n, i, c) {
    n.lanes |= i;
    var p = n.alternate;
    p !== null && (p.lanes |= i), Hc(n.return, i, c);
  }
  function mf(n, i, c, p, v) {
    var b = n.memoizedState;
    b === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: p, tail: c, tailMode: v } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = p, b.tail = c, b.tailMode = v);
  }
  function Kw(n, i, c) {
    var p = i.pendingProps, v = p.revealOrder, b = p.tail;
    if (wt(n, i, p.children, c), p = Ge.current, (p & 2) !== 0) p = p & 1 | 2, i.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = i.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Yw(n, c, i);
        else if (n.tag === 19) Yw(n, c, i);
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
    if (qe(Ge, p), (i.mode & 1) === 0) i.memoizedState = null;
    else switch (v) {
      case "forwards":
        for (c = i.child, v = null; c !== null; ) n = c.alternate, n !== null && ja(n) === null && (v = c), c = c.sibling;
        c = v, c === null ? (v = i.child, i.child = null) : (v = c.sibling, c.sibling = null), mf(i, !1, v, c, b);
        break;
      case "backwards":
        for (c = null, v = i.child, i.child = null; v !== null; ) {
          if (n = v.alternate, n !== null && ja(n) === null) {
            i.child = v;
            break;
          }
          n = v.sibling, v.sibling = c, c = v, v = n;
        }
        mf(i, !0, c, null, b);
        break;
      case "together":
        mf(i, !1, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Ua(n, i) {
    (i.mode & 1) === 0 && n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2);
  }
  function Bn(n, i, c) {
    if (n !== null && (i.dependencies = n.dependencies), Yr |= i.lanes, (c & i.childLanes) === 0) return null;
    if (n !== null && i.child !== n.child) throw Error(r(153));
    if (i.child !== null) {
      for (n = i.child, c = xr(n, n.pendingProps), i.child = c, c.return = i; n.sibling !== null; ) n = n.sibling, c = c.sibling = xr(n, n.pendingProps), c.return = i;
      c.sibling = null;
    }
    return i.child;
  }
  function LI(n, i, c) {
    switch (i.tag) {
      case 3:
        Ww(i), Lo();
        break;
      case 5:
        uw(i);
        break;
      case 1:
        St(i.type) && Ra(i);
        break;
      case 4:
        Gc(i, i.stateNode.containerInfo);
        break;
      case 10:
        var p = i.type._context, v = i.memoizedProps.value;
        qe(Oa, p._currentValue), p._currentValue = v;
        break;
      case 13:
        if (p = i.memoizedState, p !== null)
          return p.dehydrated !== null ? (qe(Ge, Ge.current & 1), i.flags |= 128, null) : (c & i.child.childLanes) !== 0 ? Gw(n, i, c) : (qe(Ge, Ge.current & 1), n = Bn(n, i, c), n !== null ? n.sibling : null);
        qe(Ge, Ge.current & 1);
        break;
      case 19:
        if (p = (c & i.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (p) return Kw(n, i, c);
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), qe(Ge, Ge.current), p) break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, Bw(n, i, c);
    }
    return Bn(n, i, c);
  }
  var Xw, gf, Qw, Zw;
  Xw = function(n, i) {
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
  }, Qw = function(n, i, c, p) {
    var v = n.memoizedProps;
    if (v !== p) {
      n = i.stateNode, Ur(bn.current);
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
      var P;
      c = null;
      for (oe in v) if (!p.hasOwnProperty(oe) && v.hasOwnProperty(oe) && v[oe] != null) if (oe === "style") {
        var z = v[oe];
        for (P in z) z.hasOwnProperty(P) && (c || (c = {}), c[P] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (s.hasOwnProperty(oe) ? b || (b = []) : (b = b || []).push(oe, null));
      for (oe in p) {
        var U = p[oe];
        if (z = v != null ? v[oe] : void 0, p.hasOwnProperty(oe) && U !== z && (U != null || z != null)) if (oe === "style") if (z) {
          for (P in z) !z.hasOwnProperty(P) || U && U.hasOwnProperty(P) || (c || (c = {}), c[P] = "");
          for (P in U) U.hasOwnProperty(P) && z[P] !== U[P] && (c || (c = {}), c[P] = U[P]);
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
  }, Zw = function(n, i, c, p) {
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
  function qI(n, i, c) {
    var p = i.pendingProps;
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
        return St(i.type) && Na(), gt(i), null;
      case 3:
        return p = i.stateNode, zo(), je(bt), je(pt), Xc(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), (n === null || n.child === null) && (Ia(i) ? i.flags |= 4 : n === null || n.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, rn !== null && (Nf(rn), rn = null))), gf(n, i), gt(i), null;
      case 5:
        Yc(i);
        var v = Ur(es.current);
        if (c = i.type, n !== null && i.stateNode != null) Qw(n, i, c, p, v), n.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!p) {
            if (i.stateNode === null) throw Error(r(166));
            return gt(i), null;
          }
          if (n = Ur(bn.current), Ia(i)) {
            p = i.stateNode, c = i.type;
            var b = i.memoizedProps;
            switch (p[_n] = i, p[Ki] = b, n = (i.mode & 1) !== 0, c) {
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
                We(p, b), De("invalid", p);
            }
            bi(c, b), v = null;
            for (var P in b) if (b.hasOwnProperty(P)) {
              var z = b[P];
              P === "children" ? typeof z == "string" ? p.textContent !== z && (b.suppressHydrationWarning !== !0 && Ea(p.textContent, z, n), v = ["children", z]) : typeof z == "number" && p.textContent !== "" + z && (b.suppressHydrationWarning !== !0 && Ea(
                p.textContent,
                z,
                n
              ), v = ["children", "" + z]) : s.hasOwnProperty(P) && z != null && P === "onScroll" && De("scroll", p);
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
            P = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = tn(c)), n === "http://www.w3.org/1999/xhtml" ? c === "script" ? (n = P.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof p.is == "string" ? n = P.createElement(c, { is: p.is }) : (n = P.createElement(c), c === "select" && (P = n, p.multiple ? P.multiple = !0 : p.size && (P.size = p.size))) : n = P.createElementNS(n, c), n[_n] = i, n[Ki] = p, Xw(n, i, !1, !1), i.stateNode = n;
            e: {
              switch (P = Si(c, p), c) {
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
                  We(n, p), v = at(n, p), De("invalid", n);
                  break;
                default:
                  v = p;
              }
              bi(c, v), z = v;
              for (b in z) if (z.hasOwnProperty(b)) {
                var U = z[b];
                b === "style" ? Ht(n, U) : b === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Lr(n, U)) : b === "children" ? typeof U == "string" ? (c !== "textarea" || U !== "") && Vt(n, U) : typeof U == "number" && Vt(n, "" + U) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (s.hasOwnProperty(b) ? U != null && b === "onScroll" && De("scroll", n) : U != null && _(n, b, U, P));
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
        if (n && i.stateNode != null) Zw(n, i, n.memoizedProps, p);
        else {
          if (typeof p != "string" && i.stateNode === null) throw Error(r(166));
          if (c = Ur(es.current), Ur(bn.current), Ia(i)) {
            if (p = i.stateNode, c = i.memoizedProps, p[_n] = i, (b = p.nodeValue !== c) && (n = Mt, n !== null)) switch (n.tag) {
              case 3:
                Ea(p.nodeValue, c, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ea(p.nodeValue, c, (n.mode & 1) !== 0);
            }
            b && (i.flags |= 4);
          } else p = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(p), p[_n] = i, i.stateNode = p;
        }
        return gt(i), null;
      case 13:
        if (je(Ge), p = i.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ze && Ot !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0) tw(), Lo(), i.flags |= 98560, b = !1;
          else if (b = Ia(i), p !== null && p.dehydrated !== null) {
            if (n === null) {
              if (!b) throw Error(r(318));
              if (b = i.memoizedState, b = b !== null ? b.dehydrated : null, !b) throw Error(r(317));
              b[_n] = i;
            } else Lo(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            gt(i), b = !1;
          } else rn !== null && (Nf(rn), rn = null), b = !0;
          if (!b) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0 ? (i.lanes = c, i) : (p = p !== null, p !== (n !== null && n.memoizedState !== null) && p && (i.child.flags |= 8192, (i.mode & 1) !== 0 && (n === null || (Ge.current & 1) !== 0 ? it === 0 && (it = 3) : Tf())), i.updateQueue !== null && (i.flags |= 4), gt(i), null);
      case 4:
        return zo(), gf(n, i), n === null && Gi(i.stateNode.containerInfo), gt(i), null;
      case 10:
        return Vc(i.type._context), gt(i), null;
      case 17:
        return St(i.type) && Na(), gt(i), null;
      case 19:
        if (je(Ge), b = i.memoizedState, b === null) return gt(i), null;
        if (p = (i.flags & 128) !== 0, P = b.rendering, P === null) if (p) is(b, !1);
        else {
          if (it !== 0 || n !== null && (n.flags & 128) !== 0) for (n = i.child; n !== null; ) {
            if (P = ja(n), P !== null) {
              for (i.flags |= 128, is(b, !1), p = P.updateQueue, p !== null && (i.updateQueue = p, i.flags |= 4), i.subtreeFlags = 0, p = c, c = i.child; c !== null; ) b = c, n = p, b.flags &= 14680066, P = b.alternate, P === null ? (b.childLanes = 0, b.lanes = n, b.child = null, b.subtreeFlags = 0, b.memoizedProps = null, b.memoizedState = null, b.updateQueue = null, b.dependencies = null, b.stateNode = null) : (b.childLanes = P.childLanes, b.lanes = P.lanes, b.child = P.child, b.subtreeFlags = 0, b.deletions = null, b.memoizedProps = P.memoizedProps, b.memoizedState = P.memoizedState, b.updateQueue = P.updateQueue, b.type = P.type, n = P.dependencies, b.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), c = c.sibling;
              return qe(Ge, Ge.current & 1 | 2), i.child;
            }
            n = n.sibling;
          }
          b.tail !== null && Ue() > Vo && (i.flags |= 128, p = !0, is(b, !1), i.lanes = 4194304);
        }
        else {
          if (!p) if (n = ja(P), n !== null) {
            if (i.flags |= 128, p = !0, c = n.updateQueue, c !== null && (i.updateQueue = c, i.flags |= 4), is(b, !0), b.tail === null && b.tailMode === "hidden" && !P.alternate && !ze) return gt(i), null;
          } else 2 * Ue() - b.renderingStartTime > Vo && c !== 1073741824 && (i.flags |= 128, p = !0, is(b, !1), i.lanes = 4194304);
          b.isBackwards ? (P.sibling = i.child, i.child = P) : (c = b.last, c !== null ? c.sibling = P : i.child = P, b.last = P);
        }
        return b.tail !== null ? (i = b.tail, b.rendering = i, b.tail = i.sibling, b.renderingStartTime = Ue(), i.sibling = null, c = Ge.current, qe(Ge, p ? c & 1 | 2 : c & 1), i) : (gt(i), null);
      case 22:
      case 23:
        return Pf(), p = i.memoizedState !== null, n !== null && n.memoizedState !== null !== p && (i.flags |= 8192), p && (i.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (gt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : gt(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function DI(n, i) {
    switch (Dc(i), i.tag) {
      case 1:
        return St(i.type) && Na(), n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 3:
        return zo(), je(bt), je(pt), Xc(), n = i.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (i.flags = n & -65537 | 128, i) : null;
      case 5:
        return Yc(i), null;
      case 13:
        if (je(Ge), n = i.memoizedState, n !== null && n.dehydrated !== null) {
          if (i.alternate === null) throw Error(r(340));
          Lo();
        }
        return n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 19:
        return je(Ge), null;
      case 4:
        return zo(), null;
      case 10:
        return Vc(i.type._context), null;
      case 22:
      case 23:
        return Pf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ga = !1, vt = !1, jI = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function $o(n, i) {
    var c = n.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (p) {
      Xe(n, i, p);
    }
    else c.current = null;
  }
  function vf(n, i, c) {
    try {
      c();
    } catch (p) {
      Xe(n, i, p);
    }
  }
  var Jw = !1;
  function zI(n, i) {
    if (Rc = ha, n = A0(), xc(n)) {
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
          var P = 0, z = -1, U = -1, oe = 0, ue = 0, fe = n, le = null;
          t: for (; ; ) {
            for (var me; fe !== c || v !== 0 && fe.nodeType !== 3 || (z = P + v), fe !== b || p !== 0 && fe.nodeType !== 3 || (U = P + p), fe.nodeType === 3 && (P += fe.nodeValue.length), (me = fe.firstChild) !== null; )
              le = fe, fe = me;
            for (; ; ) {
              if (fe === n) break t;
              if (le === c && ++oe === v && (z = P), le === b && ++ue === p && (U = P), (me = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = me;
          }
          c = z === -1 || U === -1 ? null : { start: z, end: U };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (Pc = { focusedElem: n, selectionRange: c }, ha = !1, ve = i; ve !== null; ) if (i = ve, n = i.child, (i.subtreeFlags & 1028) !== 0 && n !== null) n.return = i, ve = n;
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
    return we = Jw, Jw = !1, we;
  }
  function ss(n, i, c) {
    var p = i.updateQueue;
    if (p = p !== null ? p.lastEffect : null, p !== null) {
      var v = p = p.next;
      do {
        if ((v.tag & n) === n) {
          var b = v.destroy;
          v.destroy = void 0, b !== void 0 && vf(i, c, b);
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
  function yf(n) {
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
  function ex(n) {
    var i = n.alternate;
    i !== null && (n.alternate = null, ex(i)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (i = n.stateNode, i !== null && (delete i[_n], delete i[Ki], delete i[Mc], delete i[_I], delete i[bI])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function tx(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function nx(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || tx(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function wf(n, i, c) {
    var p = n.tag;
    if (p === 5 || p === 6) n = n.stateNode, i ? c.nodeType === 8 ? c.parentNode.insertBefore(n, i) : c.insertBefore(n, i) : (c.nodeType === 8 ? (i = c.parentNode, i.insertBefore(n, c)) : (i = c, i.appendChild(n)), c = c._reactRootContainer, c != null || i.onclick !== null || (i.onclick = Ca));
    else if (p !== 4 && (n = n.child, n !== null)) for (wf(n, i, c), n = n.sibling; n !== null; ) wf(n, i, c), n = n.sibling;
  }
  function xf(n, i, c) {
    var p = n.tag;
    if (p === 5 || p === 6) n = n.stateNode, i ? c.insertBefore(n, i) : c.appendChild(n);
    else if (p !== 4 && (n = n.child, n !== null)) for (xf(n, i, c), n = n.sibling; n !== null; ) xf(n, i, c), n = n.sibling;
  }
  var ft = null, sn = !1;
  function mr(n, i, c) {
    for (c = c.child; c !== null; ) rx(n, i, c), c = c.sibling;
  }
  function rx(n, i, c) {
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
        ft !== null && (sn ? (n = ft, c = c.stateNode, n.nodeType === 8 ? Ic(n.parentNode, c) : n.nodeType === 1 && Ic(n, c), ji(n)) : Ic(ft, c.stateNode));
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
            var b = v, P = b.destroy;
            b = b.tag, P !== void 0 && ((b & 2) !== 0 || (b & 4) !== 0) && vf(c, i, P), v = v.next;
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
  function ox(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var c = n.stateNode;
      c === null && (c = n.stateNode = new jI()), i.forEach(function(p) {
        var v = YI.bind(null, n, p);
        c.has(p) || (c.add(p), p.then(v, v));
      });
    }
  }
  function an(n, i) {
    var c = i.deletions;
    if (c !== null) for (var p = 0; p < c.length; p++) {
      var v = c[p];
      try {
        var b = n, P = i, z = P;
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
        rx(b, P, v), ft = null, sn = !1;
        var U = v.alternate;
        U !== null && (U.return = null), v.return = null;
      } catch (oe) {
        Xe(v, i, oe);
      }
    }
    if (i.subtreeFlags & 12854) for (i = i.child; i !== null; ) ix(i, n), i = i.sibling;
  }
  function ix(n, i) {
    var c = n.alternate, p = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(i, n), En(n), p & 4) {
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
        an(i, n), En(n), p & 512 && c !== null && $o(c, c.return);
        break;
      case 5:
        if (an(i, n), En(n), p & 512 && c !== null && $o(c, c.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Vt(v, "");
          } catch (Se) {
            Xe(n, n.return, Se);
          }
        }
        if (p & 4 && (v = n.stateNode, v != null)) {
          var b = n.memoizedProps, P = c !== null ? c.memoizedProps : b, z = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            z === "input" && b.type === "radio" && b.name != null && Re(v, b), Si(z, P);
            var oe = Si(z, b);
            for (P = 0; P < U.length; P += 2) {
              var ue = U[P], fe = U[P + 1];
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
        if (an(i, n), En(n), p & 4) {
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
        if (an(i, n), En(n), p & 4 && c !== null && c.memoizedState.isDehydrated) try {
          ji(i.containerInfo);
        } catch (Se) {
          Xe(n, n.return, Se);
        }
        break;
      case 4:
        an(i, n), En(n);
        break;
      case 13:
        an(i, n), En(n), v = n.child, v.flags & 8192 && (b = v.memoizedState !== null, v.stateNode.isHidden = b, !b || v.alternate !== null && v.alternate.memoizedState !== null || (Sf = Ue())), p & 4 && ox(n);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, n.mode & 1 ? (vt = (oe = vt) || ue, an(i, n), vt = oe) : an(i, n), En(n), p & 8192) {
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
                    lx(fe);
                    continue;
                  }
              }
              me !== null ? (me.return = le, ve = me) : lx(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = n; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  v = fe.stateNode, oe ? (b = v.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none") : (z = fe.stateNode, U = fe.memoizedProps.style, P = U != null && U.hasOwnProperty("display") ? U.display : null, z.style.display = Tt("display", P));
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
        an(i, n), En(n), p & 4 && ox(n);
        break;
      case 21:
        break;
      default:
        an(
          i,
          n
        ), En(n);
    }
  }
  function En(n) {
    var i = n.flags;
    if (i & 2) {
      try {
        e: {
          for (var c = n.return; c !== null; ) {
            if (tx(c)) {
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
            var b = nx(n);
            xf(n, b, v);
            break;
          case 3:
          case 4:
            var P = p.stateNode.containerInfo, z = nx(n);
            wf(n, z, P);
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
  function FI(n, i, c) {
    ve = n, sx(n);
  }
  function sx(n, i, c) {
    for (var p = (n.mode & 1) !== 0; ve !== null; ) {
      var v = ve, b = v.child;
      if (v.tag === 22 && p) {
        var P = v.memoizedState !== null || Ga;
        if (!P) {
          var z = v.alternate, U = z !== null && z.memoizedState !== null || vt;
          z = Ga;
          var oe = vt;
          if (Ga = P, (vt = U) && !oe) for (ve = v; ve !== null; ) P = ve, U = P.child, P.tag === 22 && P.memoizedState !== null ? ux(v) : U !== null ? (U.return = P, ve = U) : ux(v);
          for (; b !== null; ) ve = b, sx(b), b = b.sibling;
          ve = v, Ga = z, vt = oe;
        }
        ax(n);
      } else (v.subtreeFlags & 8772) !== 0 && b !== null ? (b.return = v, ve = b) : ax(n);
    }
  }
  function ax(n) {
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
              b !== null && lw(i, b, p);
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
                lw(i, P, c);
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
          vt || i.flags & 512 && yf(i);
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
  function lx(n) {
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
  function ux(n) {
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
              yf(i);
            } catch (U) {
              Xe(i, b, U);
            }
            break;
          case 5:
            var P = i.return;
            try {
              yf(i);
            } catch (U) {
              Xe(i, P, U);
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
  var $I = Math.ceil, Ka = k.ReactCurrentDispatcher, _f = k.ReactCurrentOwner, Xt = k.ReactCurrentBatchConfig, Me = 0, ut = null, et = null, dt = 0, Lt = 0, Bo = cr(0), it = 0, as = null, Yr = 0, Xa = 0, bf = 0, ls = null, Ct = null, Sf = 0, Vo = 1 / 0, Vn = null, Qa = !1, Ef = null, gr = null, Za = !1, vr = null, Ja = 0, us = 0, Cf = null, el = -1, tl = 0;
  function xt() {
    return (Me & 6) !== 0 ? Ue() : el !== -1 ? el : el = Ue();
  }
  function yr(n) {
    return (n.mode & 1) === 0 ? 1 : (Me & 2) !== 0 && dt !== 0 ? dt & -dt : EI.transition !== null ? (tl === 0 && (tl = ca()), tl) : (n = Le, n !== 0 || (n = window.event, n = n === void 0 ? 16 : f0(n.type)), n);
  }
  function ln(n, i, c, p) {
    if (50 < us) throw us = 0, Cf = null, Error(r(185));
    nr(n, c, p), ((Me & 2) === 0 || n !== ut) && (n === ut && ((Me & 2) === 0 && (Xa |= c), it === 4 && wr(n, dt)), kt(n, p), c === 1 && Me === 0 && (i.mode & 1) === 0 && (Vo = Ue() + 500, Pa && dr()));
  }
  function kt(n, i) {
    var c = n.callbackNode;
    ic(n, i);
    var p = bo(n, n === ut ? dt : 0);
    if (p === 0) c !== null && sa(c), n.callbackNode = null, n.callbackPriority = 0;
    else if (i = p & -p, n.callbackPriority !== i) {
      if (c != null && sa(c), i === 1) n.tag === 0 ? SI(fx.bind(null, n)) : X0(fx.bind(null, n)), wI(function() {
        (Me & 6) === 0 && dr();
      }), c = null;
      else {
        switch (r0(p)) {
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
        c = wx(c, cx.bind(null, n));
      }
      n.callbackPriority = i, n.callbackNode = c;
    }
  }
  function cx(n, i) {
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
      var b = hx();
      (ut !== n || dt !== i) && (Vn = null, Vo = Ue() + 500, Xr(n, i));
      do
        try {
          HI();
          break;
        } catch (z) {
          dx(n, z);
        }
      while (!0);
      Bc(), Ka.current = b, Me = v, et !== null ? i = 0 : (ut = null, dt = 0, i = it);
    }
    if (i !== 0) {
      if (i === 2 && (v = Fr(n), v !== 0 && (p = v, i = kf(n, v))), i === 1) throw c = as, Xr(n, 0), wr(n, p), kt(n, Ue()), c;
      if (i === 6) wr(n, p);
      else {
        if (v = n.current.alternate, (p & 30) === 0 && !BI(v) && (i = nl(n, p), i === 2 && (b = Fr(n), b !== 0 && (p = b, i = kf(n, b))), i === 1)) throw c = as, Xr(n, 0), wr(n, p), kt(n, Ue()), c;
        switch (n.finishedWork = v, n.finishedLanes = p, i) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Qr(n, Ct, Vn);
            break;
          case 3:
            if (wr(n, p), (p & 130023424) === p && (i = Sf + 500 - Ue(), 10 < i)) {
              if (bo(n, 0) !== 0) break;
              if (v = n.suspendedLanes, (v & p) !== p) {
                xt(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = Ac(Qr.bind(null, n, Ct, Vn), i);
              break;
            }
            Qr(n, Ct, Vn);
            break;
          case 4:
            if (wr(n, p), (p & 4194240) === p) break;
            for (i = n.eventTimes, v = -1; 0 < p; ) {
              var P = 31 - At(p);
              b = 1 << P, P = i[P], P > v && (v = P), p &= ~b;
            }
            if (p = v, p = Ue() - p, p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3e3 > p ? 3e3 : 4320 > p ? 4320 : 1960 * $I(p / 1960)) - p, 10 < p) {
              n.timeoutHandle = Ac(Qr.bind(null, n, Ct, Vn), p);
              break;
            }
            Qr(n, Ct, Vn);
            break;
          case 5:
            Qr(n, Ct, Vn);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return kt(n, Ue()), n.callbackNode === c ? cx.bind(null, n) : null;
  }
  function kf(n, i) {
    var c = ls;
    return n.current.memoizedState.isDehydrated && (Xr(n, i).flags |= 256), n = nl(n, i), n !== 2 && (i = Ct, Ct = c, i !== null && Nf(i)), n;
  }
  function Nf(n) {
    Ct === null ? Ct = n : Ct.push.apply(Ct, n);
  }
  function BI(n) {
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
    for (i &= ~bf, i &= ~Xa, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var c = 31 - At(i), p = 1 << c;
      n[c] = -1, i &= ~p;
    }
  }
  function fx(n) {
    if ((Me & 6) !== 0) throw Error(r(327));
    Ho();
    var i = bo(n, 0);
    if ((i & 1) === 0) return kt(n, Ue()), null;
    var c = nl(n, i);
    if (n.tag !== 0 && c === 2) {
      var p = Fr(n);
      p !== 0 && (i = p, c = kf(n, p));
    }
    if (c === 1) throw c = as, Xr(n, 0), wr(n, i), kt(n, Ue()), c;
    if (c === 6) throw Error(r(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, Qr(n, Ct, Vn), kt(n, Ue()), null;
  }
  function Rf(n, i) {
    var c = Me;
    Me |= 1;
    try {
      return n(i);
    } finally {
      Me = c, Me === 0 && (Vo = Ue() + 500, Pa && dr());
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
  function Pf() {
    Lt = Bo.current, je(Bo);
  }
  function Xr(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var c = n.timeoutHandle;
    if (c !== -1 && (n.timeoutHandle = -1, yI(c)), et !== null) for (c = et.return; c !== null; ) {
      var p = c;
      switch (Dc(p), p.tag) {
        case 1:
          p = p.type.childContextTypes, p != null && Na();
          break;
        case 3:
          zo(), je(bt), je(pt), Xc();
          break;
        case 5:
          Yc(p);
          break;
        case 4:
          zo();
          break;
        case 13:
          je(Ge);
          break;
        case 19:
          je(Ge);
          break;
        case 10:
          Vc(p.type._context);
          break;
        case 22:
        case 23:
          Pf();
      }
      c = c.return;
    }
    if (ut = n, et = n = xr(n.current, null), dt = Lt = i, it = 0, as = null, bf = Xa = Yr = 0, Ct = ls = null, Wr !== null) {
      for (i = 0; i < Wr.length; i++) if (c = Wr[i], p = c.interleaved, p !== null) {
        c.interleaved = null;
        var v = p.next, b = c.pending;
        if (b !== null) {
          var P = b.next;
          b.next = v, p.next = P;
        }
        c.pending = p;
      }
      Wr = null;
    }
    return n;
  }
  function dx(n, i) {
    do {
      var c = et;
      try {
        if (Bc(), za.current = Va, Fa) {
          for (var p = Ye.memoizedState; p !== null; ) {
            var v = p.queue;
            v !== null && (v.pending = null), p = p.next;
          }
          Fa = !1;
        }
        if (Gr = 0, lt = ot = Ye = null, ts = !1, ns = 0, _f.current = null, c === null || c.return === null) {
          it = 1, as = i, et = null;
          break;
        }
        e: {
          var b = n, P = c.return, z = c, U = i;
          if (i = dt, z.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var oe = U, ue = z, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var me = Dw(P);
            if (me !== null) {
              me.flags &= -257, jw(me, P, z, b, i), me.mode & 1 && qw(b, oe, i), i = me, U = oe;
              var we = i.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(U), i.updateQueue = Se;
              } else we.add(U);
              break e;
            } else {
              if ((i & 1) === 0) {
                qw(b, oe, i), Tf();
                break e;
              }
              U = Error(r(426));
            }
          } else if (ze && z.mode & 1) {
            var Je = Dw(P);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), jw(Je, P, z, b, i), Fc(Fo(U, z));
              break e;
            }
          }
          b = U = Fo(U, z), it !== 4 && (it = 2), ls === null ? ls = [b] : ls.push(b), b = P;
          do {
            switch (b.tag) {
              case 3:
                b.flags |= 65536, i &= -i, b.lanes |= i;
                var ne = Ow(b, U, i);
                aw(b, ne);
                break e;
              case 1:
                z = U;
                var J = b.type, re = b.stateNode;
                if ((b.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (gr === null || !gr.has(re)))) {
                  b.flags |= 65536, i &= -i, b.lanes |= i;
                  var he = Lw(b, z, i);
                  aw(b, he);
                  break e;
                }
            }
            b = b.return;
          } while (b !== null);
        }
        mx(c);
      } catch (Ce) {
        i = Ce, et === c && c !== null && (et = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function hx() {
    var n = Ka.current;
    return Ka.current = Va, n === null ? Va : n;
  }
  function Tf() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Yr & 268435455) === 0 && (Xa & 268435455) === 0 || wr(ut, dt);
  }
  function nl(n, i) {
    var c = Me;
    Me |= 2;
    var p = hx();
    (ut !== n || dt !== i) && (Vn = null, Xr(n, i));
    do
      try {
        VI();
        break;
      } catch (v) {
        dx(n, v);
      }
    while (!0);
    if (Bc(), Me = c, Ka.current = p, et !== null) throw Error(r(261));
    return ut = null, dt = 0, it;
  }
  function VI() {
    for (; et !== null; ) px(et);
  }
  function HI() {
    for (; et !== null && !Qu(); ) px(et);
  }
  function px(n) {
    var i = yx(n.alternate, n, Lt);
    n.memoizedProps = n.pendingProps, i === null ? mx(n) : et = i, _f.current = null;
  }
  function mx(n) {
    var i = n;
    do {
      var c = i.alternate;
      if (n = i.return, (i.flags & 32768) === 0) {
        if (c = qI(c, i, Lt), c !== null) {
          et = c;
          return;
        }
      } else {
        if (c = DI(c, i), c !== null) {
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
      Xt.transition = null, Le = 1, WI(n, i, c, p);
    } finally {
      Xt.transition = v, Le = p;
    }
    return null;
  }
  function WI(n, i, c, p) {
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
    if (CA(n, b), n === ut && (et = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || Za || (Za = !0, wx(wo, function() {
      return Ho(), null;
    })), b = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || b) {
      b = Xt.transition, Xt.transition = null;
      var P = Le;
      Le = 1;
      var z = Me;
      Me |= 4, _f.current = null, zI(n, c), ix(c, n), fI(Pc), ha = !!Rc, Pc = Rc = null, n.current = c, FI(c), aa(), Me = z, Le = P, Xt.transition = b;
    } else n.current = c;
    if (Za && (Za = !1, vr = n, Ja = v), b = n.pendingLanes, b === 0 && (gr = null), ec(c.stateNode), kt(n, Ue()), i !== null) for (p = n.onRecoverableError, c = 0; c < i.length; c++) v = i[c], p(v.value, { componentStack: v.stack, digest: v.digest });
    if (Qa) throw Qa = !1, n = Ef, Ef = null, n;
    return (Ja & 1) !== 0 && n.tag !== 0 && Ho(), b = n.pendingLanes, (b & 1) !== 0 ? n === Cf ? us++ : (us = 0, Cf = n) : us = 0, dr(), null;
  }
  function Ho() {
    if (vr !== null) {
      var n = r0(Ja), i = Xt.transition, c = Le;
      try {
        if (Xt.transition = null, Le = 16 > n ? 16 : n, vr === null) var p = !1;
        else {
          if (n = vr, vr = null, Ja = 0, (Me & 6) !== 0) throw Error(r(331));
          var v = Me;
          for (Me |= 4, ve = n.current; ve !== null; ) {
            var b = ve, P = b.child;
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
                      if (ex(ue), ue === oe) {
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
            if ((b.subtreeFlags & 2064) !== 0 && P !== null) P.return = b, ve = P;
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
            P = ve;
            var re = P.child;
            if ((P.subtreeFlags & 2064) !== 0 && re !== null) re.return = P, ve = re;
            else e: for (P = J; ve !== null; ) {
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
              if (z === P) {
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
  function gx(n, i, c) {
    i = Fo(c, i), i = Ow(n, i, 1), n = pr(n, i, 1), i = xt(), n !== null && (nr(n, 1, i), kt(n, i));
  }
  function Xe(n, i, c) {
    if (n.tag === 3) gx(n, n, c);
    else for (; i !== null; ) {
      if (i.tag === 3) {
        gx(i, n, c);
        break;
      } else if (i.tag === 1) {
        var p = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && (gr === null || !gr.has(p))) {
          n = Fo(c, n), n = Lw(i, n, 1), i = pr(i, n, 1), n = xt(), i !== null && (nr(i, 1, n), kt(i, n));
          break;
        }
      }
      i = i.return;
    }
  }
  function UI(n, i, c) {
    var p = n.pingCache;
    p !== null && p.delete(i), i = xt(), n.pingedLanes |= n.suspendedLanes & c, ut === n && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > Ue() - Sf ? Xr(n, 0) : bf |= c), kt(n, i);
  }
  function vx(n, i) {
    i === 0 && ((n.mode & 1) === 0 ? i = 1 : (i = _o, _o <<= 1, (_o & 130023424) === 0 && (_o = 4194304)));
    var c = xt();
    n = Fn(n, i), n !== null && (nr(n, i, c), kt(n, c));
  }
  function GI(n) {
    var i = n.memoizedState, c = 0;
    i !== null && (c = i.retryLane), vx(n, c);
  }
  function YI(n, i) {
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
    p !== null && p.delete(i), vx(n, c);
  }
  var yx;
  yx = function(n, i, c) {
    if (n !== null) if (n.memoizedProps !== i.pendingProps || bt.current) Et = !0;
    else {
      if ((n.lanes & c) === 0 && (i.flags & 128) === 0) return Et = !1, LI(n, i, c);
      Et = (n.flags & 131072) !== 0;
    }
    else Et = !1, ze && (i.flags & 1048576) !== 0 && Q0(i, Aa, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var p = i.type;
        Ua(n, i), n = i.pendingProps;
        var v = Io(i, pt.current);
        jo(i, c), v = Jc(null, i, p, n, v, c);
        var b = ef();
        return i.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, St(p) ? (b = !0, Ra(i)) : b = !1, i.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Uc(i), v.updater = Ha, i.stateNode = v, v._reactInternals = i, af(i, p, n, c), i = ff(null, i, p, !0, b, c)) : (i.tag = 0, ze && b && qc(i), wt(null, i, v, c), i = i.child), i;
      case 16:
        p = i.elementType;
        e: {
          switch (Ua(n, i), n = i.pendingProps, v = p._init, p = v(p._payload), i.type = p, v = i.tag = XI(p), n = on(p, n), v) {
            case 0:
              i = cf(null, i, p, n, c);
              break e;
            case 1:
              i = Hw(null, i, p, n, c);
              break e;
            case 11:
              i = zw(null, i, p, n, c);
              break e;
            case 14:
              i = Fw(null, i, p, on(p.type, n), c);
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
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), cf(n, i, p, v, c);
      case 1:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Hw(n, i, p, v, c);
      case 3:
        e: {
          if (Ww(i), n === null) throw Error(r(387));
          p = i.pendingProps, b = i.memoizedState, v = b.element, sw(n, i), Da(i, p, null, c);
          var P = i.memoizedState;
          if (p = P.element, b.isDehydrated) if (b = { element: p, isDehydrated: !1, cache: P.cache, pendingSuspenseBoundaries: P.pendingSuspenseBoundaries, transitions: P.transitions }, i.updateQueue.baseState = b, i.memoizedState = b, i.flags & 256) {
            v = Fo(Error(r(423)), i), i = Uw(n, i, p, c, v);
            break e;
          } else if (p !== v) {
            v = Fo(Error(r(424)), i), i = Uw(n, i, p, c, v);
            break e;
          } else for (Ot = ur(i.stateNode.containerInfo.firstChild), Mt = i, ze = !0, rn = null, c = ow(i, null, p, c), i.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (Lo(), p === v) {
              i = Bn(n, i, c);
              break e;
            }
            wt(n, i, p, c);
          }
          i = i.child;
        }
        return i;
      case 5:
        return uw(i), n === null && zc(i), p = i.type, v = i.pendingProps, b = n !== null ? n.memoizedProps : null, P = v.children, Tc(p, v) ? P = null : b !== null && Tc(p, b) && (i.flags |= 32), Vw(n, i), wt(n, i, P, c), i.child;
      case 6:
        return n === null && zc(i), null;
      case 13:
        return Gw(n, i, c);
      case 4:
        return Gc(i, i.stateNode.containerInfo), p = i.pendingProps, n === null ? i.child = qo(i, null, p, c) : wt(n, i, p, c), i.child;
      case 11:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), zw(n, i, p, v, c);
      case 7:
        return wt(n, i, i.pendingProps, c), i.child;
      case 8:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 12:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 10:
        e: {
          if (p = i.type._context, v = i.pendingProps, b = i.memoizedProps, P = v.value, qe(Oa, p._currentValue), p._currentValue = P, b !== null) if (nn(b.value, P)) {
            if (b.children === v.children && !bt.current) {
              i = Bn(n, i, c);
              break e;
            }
          } else for (b = i.child, b !== null && (b.return = i); b !== null; ) {
            var z = b.dependencies;
            if (z !== null) {
              P = b.child;
              for (var U = z.firstContext; U !== null; ) {
                if (U.context === p) {
                  if (b.tag === 1) {
                    U = $n(-1, c & -c), U.tag = 2;
                    var oe = b.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var ue = oe.pending;
                      ue === null ? U.next = U : (U.next = ue.next, ue.next = U), oe.pending = U;
                    }
                  }
                  b.lanes |= c, U = b.alternate, U !== null && (U.lanes |= c), Hc(
                    b.return,
                    c,
                    i
                  ), z.lanes |= c;
                  break;
                }
                U = U.next;
              }
            } else if (b.tag === 10) P = b.type === i.type ? null : b.child;
            else if (b.tag === 18) {
              if (P = b.return, P === null) throw Error(r(341));
              P.lanes |= c, z = P.alternate, z !== null && (z.lanes |= c), Hc(P, c, i), P = b.sibling;
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
        return v = i.type, p = i.pendingProps.children, jo(i, c), v = Yt(v), p = p(v), i.flags |= 1, wt(n, i, p, c), i.child;
      case 14:
        return p = i.type, v = on(p, i.pendingProps), v = on(p.type, v), Fw(n, i, p, v, c);
      case 15:
        return $w(n, i, i.type, i.pendingProps, c);
      case 17:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Ua(n, i), i.tag = 1, St(p) ? (n = !0, Ra(i)) : n = !1, jo(i, c), Iw(i, p, v), af(i, p, v, c), ff(null, i, p, !0, n, c);
      case 19:
        return Kw(n, i, c);
      case 22:
        return Bw(n, i, c);
    }
    throw Error(r(156, i.tag));
  };
  function wx(n, i) {
    return ia(n, i);
  }
  function KI(n, i, c, p) {
    this.tag = n, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = p, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(n, i, c, p) {
    return new KI(n, i, c, p);
  }
  function Af(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function XI(n) {
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
  function rl(n, i, c, p, v, b) {
    var P = 2;
    if (p = n, typeof n == "function") Af(n) && (P = 1);
    else if (typeof n == "string") P = 5;
    else e: switch (n) {
      case A:
        return Zr(c.children, v, b, i);
      case O:
        P = 8, v |= 8;
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
            P = 10;
            break e;
          case B:
            P = 9;
            break e;
          case V:
            P = 11;
            break e;
          case H:
            P = 14;
            break e;
          case $:
            P = 16, p = null;
            break e;
        }
        throw Error(r(130, n == null ? n : typeof n, ""));
    }
    return i = Qt(P, c, i, v), i.elementType = n, i.type = p, i.lanes = b, i;
  }
  function Zr(n, i, c, p) {
    return n = Qt(7, n, p, i), n.lanes = c, n;
  }
  function ol(n, i, c, p) {
    return n = Qt(22, n, p, i), n.elementType = Y, n.lanes = c, n.stateNode = { isHidden: !1 }, n;
  }
  function If(n, i, c) {
    return n = Qt(6, n, null, i), n.lanes = c, n;
  }
  function Mf(n, i, c) {
    return i = Qt(4, n.children !== null ? n.children : [], n.key, i), i.lanes = c, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function QI(n, i, c, p, v) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Mi(0), this.expirationTimes = Mi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mi(0), this.identifierPrefix = p, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Of(n, i, c, p, v, b, P, z, U) {
    return n = new QI(n, i, c, z, U), i === 1 ? (i = 1, b === !0 && (i |= 8)) : i = 0, b = Qt(3, null, null, i), n.current = b, b.stateNode = n, b.memoizedState = { element: p, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uc(b), n;
  }
  function ZI(n, i, c) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: p == null ? null : "" + p, children: n, containerInfo: i, implementation: c };
  }
  function xx(n) {
    if (!n) return fr;
    n = n._reactInternals;
    e: {
      if (wn(n) !== n || n.tag !== 1) throw Error(r(170));
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
      if (St(c)) return Y0(n, c, i);
    }
    return i;
  }
  function _x(n, i, c, p, v, b, P, z, U) {
    return n = Of(c, p, !0, n, v, b, P, z, U), n.context = xx(null), c = n.current, p = xt(), v = yr(c), b = $n(p, v), b.callback = i ?? null, pr(c, b, v), n.current.lanes = v, nr(n, v, p), kt(n, p), n;
  }
  function il(n, i, c, p) {
    var v = i.current, b = xt(), P = yr(v);
    return c = xx(c), i.context === null ? i.context = c : i.pendingContext = c, i = $n(b, P), i.payload = { element: n }, p = p === void 0 ? null : p, p !== null && (i.callback = p), n = pr(v, i, P), n !== null && (ln(n, v, P, b), qa(n, v, P)), P;
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
  function bx(n, i) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var c = n.retryLane;
      n.retryLane = c !== 0 && c < i ? c : i;
    }
  }
  function Lf(n, i) {
    bx(n, i), (n = n.alternate) && bx(n, i);
  }
  function JI() {
    return null;
  }
  var Sx = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function qf(n) {
    this._internalRoot = n;
  }
  al.prototype.render = qf.prototype.render = function(n) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    il(n, i, null, null);
  }, al.prototype.unmount = qf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var i = n.containerInfo;
      Kr(function() {
        il(null, n, null, null);
      }), i[qn] = null;
    }
  };
  function al(n) {
    this._internalRoot = n;
  }
  al.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var i = s0();
      n = { blockedOn: null, target: n, priority: i };
      for (var c = 0; c < sr.length && i !== 0 && i < sr[c].priority; c++) ;
      sr.splice(c, 0, n), c === 0 && u0(n);
    }
  };
  function Df(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ll(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ex() {
  }
  function e2(n, i, c, p, v) {
    if (v) {
      if (typeof p == "function") {
        var b = p;
        p = function() {
          var oe = sl(P);
          b.call(oe);
        };
      }
      var P = _x(i, p, n, 0, null, !1, !1, "", Ex);
      return n._reactRootContainer = P, n[qn] = P.current, Gi(n.nodeType === 8 ? n.parentNode : n), Kr(), P;
    }
    for (; v = n.lastChild; ) n.removeChild(v);
    if (typeof p == "function") {
      var z = p;
      p = function() {
        var oe = sl(U);
        z.call(oe);
      };
    }
    var U = Of(n, 0, !1, null, null, !1, !1, "", Ex);
    return n._reactRootContainer = U, n[qn] = U.current, Gi(n.nodeType === 8 ? n.parentNode : n), Kr(function() {
      il(i, U, c, p);
    }), U;
  }
  function ul(n, i, c, p, v) {
    var b = c._reactRootContainer;
    if (b) {
      var P = b;
      if (typeof v == "function") {
        var z = v;
        v = function() {
          var U = sl(P);
          z.call(U);
        };
      }
      il(i, P, n, v);
    } else P = e2(c, i, n, v, p);
    return sl(P);
  }
  o0 = function(n) {
    switch (n.tag) {
      case 3:
        var i = n.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var c = xn(i.pendingLanes);
          c !== 0 && (sc(i, c | 1), kt(i, Ue()), (Me & 6) === 0 && (Vo = Ue() + 500, dr()));
        }
        break;
      case 13:
        Kr(function() {
          var p = Fn(n, 1);
          if (p !== null) {
            var v = xt();
            ln(p, n, 1, v);
          }
        }), Lf(n, 1);
    }
  }, ac = function(n) {
    if (n.tag === 13) {
      var i = Fn(n, 134217728);
      if (i !== null) {
        var c = xt();
        ln(i, n, 134217728, c);
      }
      Lf(n, 134217728);
    }
  }, i0 = function(n) {
    if (n.tag === 13) {
      var i = yr(n), c = Fn(n, i);
      if (c !== null) {
        var p = xt();
        ln(c, n, i, p);
      }
      Lf(n, i);
    }
  }, s0 = function() {
    return Le;
  }, a0 = function(n, i) {
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
  var t2 = { usingClientEntryPoint: !1, Events: [Xi, To, ka, Zs, Js, Rf] }, cs = { findFiberByHostInstance: $r, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, n2 = { bundleType: cs.bundleType, version: cs.version, rendererPackageName: cs.rendererPackageName, rendererConfig: cs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: k.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ra(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: cs.findFiberByHostInstance || JI, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cl.isDisabled && cl.supportsFiber) try {
      zr = cl.inject(n2), Wt = cl;
    } catch {
    }
  }
  return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t2, Nt.createPortal = function(n, i) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Df(i)) throw Error(r(200));
    return ZI(n, i, null, c);
  }, Nt.createRoot = function(n, i) {
    if (!Df(n)) throw Error(r(299));
    var c = !1, p = "", v = Sx;
    return i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (v = i.onRecoverableError)), i = Of(n, 1, !1, null, null, c, !1, p, v), n[qn] = i.current, Gi(n.nodeType === 8 ? n.parentNode : n), new qf(i);
  }, Nt.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
    return n = ra(i), n = n === null ? null : n.stateNode, n;
  }, Nt.flushSync = function(n) {
    return Kr(n);
  }, Nt.hydrate = function(n, i, c) {
    if (!ll(i)) throw Error(r(200));
    return ul(null, n, i, !0, c);
  }, Nt.hydrateRoot = function(n, i, c) {
    if (!Df(n)) throw Error(r(405));
    var p = c != null && c.hydratedSources || null, v = !1, b = "", P = Sx;
    if (c != null && (c.unstable_strictMode === !0 && (v = !0), c.identifierPrefix !== void 0 && (b = c.identifierPrefix), c.onRecoverableError !== void 0 && (P = c.onRecoverableError)), i = _x(i, null, n, 1, c ?? null, v, !1, b, P), n[qn] = i.current, Gi(n), p) for (n = 0; n < p.length; n++) c = p[n], v = c._getVersion, v = v(c._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [c, v] : i.mutableSourceEagerHydrationData.push(
      c,
      v
    );
    return new al(i);
  }, Nt.render = function(n, i, c) {
    if (!ll(i)) throw Error(r(200));
    return ul(null, n, i, !1, c);
  }, Nt.unmountComponentAtNode = function(n) {
    if (!ll(n)) throw Error(r(40));
    return n._reactRootContainer ? (Kr(function() {
      ul(null, null, n, !1, function() {
        n._reactRootContainer = null, n[qn] = null;
      });
    }), !0) : !1;
  }, Nt.unstable_batchedUpdates = Rf, Nt.unstable_renderSubtreeIntoContainer = function(n, i, c, p) {
    if (!ll(c)) throw Error(r(200));
    if (n == null || n._reactInternals === void 0) throw Error(r(38));
    return ul(n, i, c, !1, p);
  }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt;
}
var Ix;
function Hk() {
  if (Ix) return Ff.exports;
  Ix = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), Ff.exports = d2(), Ff.exports;
}
var Mx;
function h2() {
  if (Mx) return hl;
  Mx = 1;
  var e = Hk();
  return hl.createRoot = e.createRoot, hl.hydrateRoot = e.hydrateRoot, hl;
}
var p2 = h2();
let Wk = N.createContext(
  /** @type {any} */
  null
);
function m2() {
  let e = N.useContext(Wk);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function g2() {
  return m2().model;
}
function Vf(e) {
  let t = g2(), r = N.useSyncExternalStore(
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
function v2(e) {
  return ({ el: t, model: r, experimental: o }) => {
    let s = p2.createRoot(t);
    return s.render(
      N.createElement(
        N.StrictMode,
        null,
        N.createElement(
          Wk.Provider,
          { value: { model: r, experimental: o } },
          N.createElement(e)
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
var y2 = { value: () => {
} };
function su() {
  for (var e = 0, t = arguments.length, r = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in r || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    r[o] = [];
  }
  return new Al(r);
}
function Al(e) {
  this._ = e;
}
function w2(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var o = "", s = r.indexOf(".");
    if (s >= 0 && (o = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: o };
  });
}
Al.prototype = su.prototype = {
  constructor: Al,
  on: function(e, t) {
    var r = this._, o = w2(e + "", r), s, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((s = (e = o[a]).type) && (s = x2(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (s = (e = o[a]).type) r[s] = Ox(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = Ox(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new Al(e);
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
function x2(e, t) {
  for (var r = 0, o = e.length, s; r < o; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function Ox(e, t, r) {
  for (var o = 0, s = e.length; o < s; ++o)
    if (e[o].name === t) {
      e[o] = y2, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var Av = "http://www.w3.org/1999/xhtml";
const Lx = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Av,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function au(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Lx.hasOwnProperty(t) ? { space: Lx[t], local: e } : e;
}
function _2(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Av && t.documentElement.namespaceURI === Av ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function b2(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Uk(e) {
  var t = au(e);
  return (t.local ? b2 : _2)(t);
}
function S2() {
}
function iy(e) {
  return e == null ? S2 : function() {
    return this.querySelector(e);
  };
}
function E2(e) {
  typeof e != "function" && (e = iy(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new zt(o, this._parents);
}
function C2(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function k2() {
  return [];
}
function Gk(e) {
  return e == null ? k2 : function() {
    return this.querySelectorAll(e);
  };
}
function N2(e) {
  return function() {
    return C2(e.apply(this, arguments));
  };
}
function R2(e) {
  typeof e == "function" ? e = N2(e) : e = Gk(e);
  for (var t = this._groups, r = t.length, o = [], s = [], a = 0; a < r; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), s.push(f));
  return new zt(o, s);
}
function Yk(e) {
  return function() {
    return this.matches(e);
  };
}
function Kk(e) {
  return function(t) {
    return t.matches(e);
  };
}
var P2 = Array.prototype.find;
function T2(e) {
  return function() {
    return P2.call(this.children, e);
  };
}
function A2() {
  return this.firstElementChild;
}
function I2(e) {
  return this.select(e == null ? A2 : T2(typeof e == "function" ? e : Kk(e)));
}
var M2 = Array.prototype.filter;
function O2() {
  return Array.from(this.children);
}
function L2(e) {
  return function() {
    return M2.call(this.children, e);
  };
}
function q2(e) {
  return this.selectAll(e == null ? O2 : L2(typeof e == "function" ? e : Kk(e)));
}
function D2(e) {
  typeof e != "function" && (e = Yk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new zt(o, this._parents);
}
function Xk(e) {
  return new Array(e.length);
}
function j2() {
  return new zt(this._enter || this._groups.map(Xk), this._parents);
}
function zl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
zl.prototype = {
  constructor: zl,
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
function z2(e) {
  return function() {
    return e;
  };
}
function F2(e, t, r, o, s, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : r[l] = new zl(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (s[l] = u);
}
function $2(e, t, r, o, s, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, m = a.length, g = new Array(h), w;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (g[u] = w = l.call(f, f.__data__, u, t) + "", d.has(w) ? s[u] = f : d.set(w, f));
  for (u = 0; u < m; ++u)
    w = l.call(e, a[u], u, a) + "", (f = d.get(w)) ? (o[u] = f, f.__data__ = a[u], d.delete(w)) : r[u] = new zl(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(g[u]) === f && (s[u] = f);
}
function B2(e) {
  return e.__data__;
}
function V2(e, t) {
  if (!arguments.length) return Array.from(this, B2);
  var r = t ? $2 : F2, o = this._parents, s = this._groups;
  typeof e != "function" && (e = z2(e));
  for (var a = s.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], m = s[d], g = m.length, w = H2(e.call(h, h && h.__data__, d, o)), E = w.length, y = u[d] = new Array(E), x = l[d] = new Array(E), S = f[d] = new Array(g);
    r(h, m, y, x, S, w, t);
    for (var C = 0, _ = 0, k, R; C < E; ++C)
      if (k = y[C]) {
        for (C >= _ && (_ = C + 1); !(R = x[_]) && ++_ < E; ) ;
        k._next = R || null;
      }
  }
  return l = new zt(l, o), l._enter = u, l._exit = f, l;
}
function H2(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function W2() {
  return new zt(this._exit || this._groups.map(Xk), this._parents);
}
function U2(e, t, r) {
  var o = this.enter(), s = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? a.remove() : r(a), o && s ? o.merge(s).order() : s;
}
function G2(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, o = t._groups, s = r.length, a = o.length, l = Math.min(s, a), u = new Array(s), f = 0; f < l; ++f)
    for (var d = r[f], h = o[f], m = d.length, g = u[f] = new Array(m), w, E = 0; E < m; ++E)
      (w = d[E] || h[E]) && (g[E] = w);
  for (; f < s; ++f)
    u[f] = r[f];
  return new zt(u, this._parents);
}
function Y2() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var o = e[t], s = o.length - 1, a = o[s], l; --s >= 0; )
      (l = o[s]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function K2(e) {
  e || (e = X2);
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
function X2(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Q2() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Z2() {
  return Array.from(this);
}
function J2() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length; s < a; ++s) {
      var l = o[s];
      if (l) return l;
    }
  return null;
}
function eM() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function tM() {
  return !this.node();
}
function nM(e) {
  for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
    for (var s = t[r], a = 0, l = s.length, u; a < l; ++a)
      (u = s[a]) && e.call(u, u.__data__, a, s);
  return this;
}
function rM(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function oM(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function iM(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sM(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function aM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function lM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function uM(e, t) {
  var r = au(e);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each((t == null ? r.local ? oM : rM : typeof t == "function" ? r.local ? lM : aM : r.local ? sM : iM)(r, t));
}
function Qk(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function cM(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fM(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function dM(e, t, r) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
  };
}
function hM(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? cM : typeof t == "function" ? dM : fM)(e, t, r ?? "")) : ri(this.node(), e);
}
function ri(e, t) {
  return e.style.getPropertyValue(t) || Qk(e).getComputedStyle(e, null).getPropertyValue(t);
}
function pM(e) {
  return function() {
    delete this[e];
  };
}
function mM(e, t) {
  return function() {
    this[e] = t;
  };
}
function gM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function vM(e, t) {
  return arguments.length > 1 ? this.each((t == null ? pM : typeof t == "function" ? gM : mM)(e, t)) : this.node()[e];
}
function Zk(e) {
  return e.trim().split(/^|\s+/);
}
function sy(e) {
  return e.classList || new Jk(e);
}
function Jk(e) {
  this._node = e, this._names = Zk(e.getAttribute("class") || "");
}
Jk.prototype = {
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
function eN(e, t) {
  for (var r = sy(e), o = -1, s = t.length; ++o < s; ) r.add(t[o]);
}
function tN(e, t) {
  for (var r = sy(e), o = -1, s = t.length; ++o < s; ) r.remove(t[o]);
}
function yM(e) {
  return function() {
    eN(this, e);
  };
}
function wM(e) {
  return function() {
    tN(this, e);
  };
}
function xM(e, t) {
  return function() {
    (t.apply(this, arguments) ? eN : tN)(this, e);
  };
}
function _M(e, t) {
  var r = Zk(e + "");
  if (arguments.length < 2) {
    for (var o = sy(this.node()), s = -1, a = r.length; ++s < a; ) if (!o.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? xM : t ? yM : wM)(r, t));
}
function bM() {
  this.textContent = "";
}
function SM(e) {
  return function() {
    this.textContent = e;
  };
}
function EM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function CM(e) {
  return arguments.length ? this.each(e == null ? bM : (typeof e == "function" ? EM : SM)(e)) : this.node().textContent;
}
function kM() {
  this.innerHTML = "";
}
function NM(e) {
  return function() {
    this.innerHTML = e;
  };
}
function RM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function PM(e) {
  return arguments.length ? this.each(e == null ? kM : (typeof e == "function" ? RM : NM)(e)) : this.node().innerHTML;
}
function TM() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function AM() {
  return this.each(TM);
}
function IM() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function MM() {
  return this.each(IM);
}
function OM(e) {
  var t = typeof e == "function" ? e : Uk(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function LM() {
  return null;
}
function qM(e, t) {
  var r = typeof e == "function" ? e : Uk(e), o = t == null ? LM : typeof t == "function" ? t : iy(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function DM() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function jM() {
  return this.each(DM);
}
function zM() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function FM() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $M(e) {
  return this.select(e ? FM : zM);
}
function BM(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function VM(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function HM(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", o = t.indexOf(".");
    return o >= 0 && (r = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: r };
  });
}
function WM(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, o = -1, s = t.length, a; r < s; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function UM(e, t, r) {
  return function() {
    var o = this.__on, s, a = VM(t);
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
function GM(e, t, r) {
  var o = HM(e + ""), s, a = o.length, l;
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
  for (u = t ? UM : WM, s = 0; s < a; ++s) this.each(u(o[s], t, r));
  return this;
}
function nN(e, t, r) {
  var o = Qk(e), s = o.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = o.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function YM(e, t) {
  return function() {
    return nN(this, e, t);
  };
}
function KM(e, t) {
  return function() {
    return nN(this, e, t.apply(this, arguments));
  };
}
function XM(e, t) {
  return this.each((typeof t == "function" ? KM : YM)(e, t));
}
function* QM() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length, l; s < a; ++s)
      (l = o[s]) && (yield l);
}
var rN = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Ds() {
  return new zt([[document.documentElement]], rN);
}
function ZM() {
  return this;
}
zt.prototype = Ds.prototype = {
  constructor: zt,
  select: E2,
  selectAll: R2,
  selectChild: I2,
  selectChildren: q2,
  filter: D2,
  data: V2,
  enter: j2,
  exit: W2,
  join: U2,
  merge: G2,
  selection: ZM,
  order: Y2,
  sort: K2,
  call: Q2,
  nodes: Z2,
  node: J2,
  size: eM,
  empty: tM,
  each: nM,
  attr: uM,
  style: hM,
  property: vM,
  classed: _M,
  text: CM,
  html: PM,
  raise: AM,
  lower: MM,
  append: OM,
  insert: qM,
  remove: jM,
  clone: $M,
  datum: BM,
  on: GM,
  dispatch: XM,
  [Symbol.iterator]: QM
};
function Dt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], rN);
}
function JM(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function cn(e, t) {
  if (e = JM(e), t === void 0 && (t = e.currentTarget), t) {
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
const eO = { passive: !1 }, Ss = { capture: !0, passive: !1 };
function Hf(e) {
  e.stopImmediatePropagation();
}
function Jo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function oN(e) {
  var t = e.document.documentElement, r = Dt(e).on("dragstart.drag", Jo, Ss);
  "onselectstart" in t ? r.on("selectstart.drag", Jo, Ss) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function iN(e, t) {
  var r = e.document.documentElement, o = Dt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", Jo, Ss), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
const pl = (e) => () => e;
function Iv(e, {
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
Iv.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function tO(e) {
  return !e.ctrlKey && !e.button;
}
function nO() {
  return this.parentNode;
}
function rO(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function oO() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function sN() {
  var e = tO, t = nO, r = rO, o = oO, s = {}, a = su("start", "drag", "end"), l = 0, u, f, d, h, m = 0;
  function g(k) {
    k.on("mousedown.drag", w).filter(o).on("touchstart.drag", x).on("touchmove.drag", S, eO).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function w(k, R) {
    if (!(h || !e.call(this, k, R))) {
      var T = _(this, t.call(this, k, R), k, R, "mouse");
      T && (Dt(k.view).on("mousemove.drag", E, Ss).on("mouseup.drag", y, Ss), oN(k.view), Hf(k), d = !1, u = k.clientX, f = k.clientY, T("start", k));
    }
  }
  function E(k) {
    if (Jo(k), !d) {
      var R = k.clientX - u, T = k.clientY - f;
      d = R * R + T * T > m;
    }
    s.mouse("drag", k);
  }
  function y(k) {
    Dt(k.view).on("mousemove.drag mouseup.drag", null), iN(k.view, d), Jo(k), s.mouse("end", k);
  }
  function x(k, R) {
    if (e.call(this, k, R)) {
      var T = k.changedTouches, A = t.call(this, k, R), O = T.length, D, G;
      for (D = 0; D < O; ++D)
        (G = _(this, A, k, R, T[D].identifier, T[D])) && (Hf(k), G("start", k, T[D]));
    }
  }
  function S(k) {
    var R = k.changedTouches, T = R.length, A, O;
    for (A = 0; A < T; ++A)
      (O = s[R[A].identifier]) && (Jo(k), O("drag", k, R[A]));
  }
  function C(k) {
    var R = k.changedTouches, T = R.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (O = s[R[A].identifier]) && (Hf(k), O("end", k, R[A]));
  }
  function _(k, R, T, A, O, D) {
    var G = a.copy(), B = cn(D || T, R), V, X, L;
    if ((L = r.call(k, new Iv("beforestart", {
      sourceEvent: T,
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
            B = cn(M || Y, R), Q = l;
            break;
        }
        G.call(
          $,
          k,
          new Iv($, {
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
    return arguments.length ? (e = typeof k == "function" ? k : pl(!!k), g) : e;
  }, g.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : pl(k), g) : t;
  }, g.subject = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : pl(k), g) : r;
  }, g.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : pl(!!k), g) : o;
  }, g.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? g : k;
  }, g.clickDistance = function(k) {
    return arguments.length ? (m = (k = +k) * k, g) : Math.sqrt(m);
  }, g;
}
function ay(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function aN(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function js() {
}
var Es = 0.7, Fl = 1 / Es, ei = "\\s*([+-]?\\d+)\\s*", Cs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", iO = /^#([0-9a-f]{3,8})$/, sO = new RegExp(`^rgb\\(${ei},${ei},${ei}\\)$`), aO = new RegExp(`^rgb\\(${Rn},${Rn},${Rn}\\)$`), lO = new RegExp(`^rgba\\(${ei},${ei},${ei},${Cs}\\)$`), uO = new RegExp(`^rgba\\(${Rn},${Rn},${Rn},${Cs}\\)$`), cO = new RegExp(`^hsl\\(${Cs},${Rn},${Rn}\\)$`), fO = new RegExp(`^hsla\\(${Cs},${Rn},${Rn},${Cs}\\)$`), qx = {
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
ay(js, oo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Dx,
  // Deprecated! Use color.formatHex.
  formatHex: Dx,
  formatHex8: dO,
  formatHsl: hO,
  formatRgb: jx,
  toString: jx
});
function Dx() {
  return this.rgb().formatHex();
}
function dO() {
  return this.rgb().formatHex8();
}
function hO() {
  return lN(this).formatHsl();
}
function jx() {
  return this.rgb().formatRgb();
}
function oo(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = iO.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? zx(t) : r === 3 ? new Rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ml(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ml(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sO.exec(e)) ? new Rt(t[1], t[2], t[3], 1) : (t = aO.exec(e)) ? new Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lO.exec(e)) ? ml(t[1], t[2], t[3], t[4]) : (t = uO.exec(e)) ? ml(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cO.exec(e)) ? Bx(t[1], t[2] / 100, t[3] / 100, 1) : (t = fO.exec(e)) ? Bx(t[1], t[2] / 100, t[3] / 100, t[4]) : qx.hasOwnProperty(e) ? zx(qx[e]) : e === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function zx(e) {
  return new Rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ml(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new Rt(e, t, r, o);
}
function pO(e) {
  return e instanceof js || (e = oo(e)), e ? (e = e.rgb(), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt();
}
function Mv(e, t, r, o) {
  return arguments.length === 1 ? pO(e) : new Rt(e, t, r, o ?? 1);
}
function Rt(e, t, r, o) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +o;
}
ay(Rt, Mv, aN(js, {
  brighter(e) {
    return e = e == null ? Fl : Math.pow(Fl, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Es : Math.pow(Es, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(no(this.r), no(this.g), no(this.b), $l(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Fx,
  // Deprecated! Use color.formatHex.
  formatHex: Fx,
  formatHex8: mO,
  formatRgb: $x,
  toString: $x
}));
function Fx() {
  return `#${to(this.r)}${to(this.g)}${to(this.b)}`;
}
function mO() {
  return `#${to(this.r)}${to(this.g)}${to(this.b)}${to((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $x() {
  const e = $l(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${no(this.r)}, ${no(this.g)}, ${no(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $l(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function no(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function to(e) {
  return e = no(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Bx(e, t, r, o) {
  return o <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new fn(e, t, r, o);
}
function lN(e) {
  if (e instanceof fn) return new fn(e.h, e.s, e.l, e.opacity);
  if (e instanceof js || (e = oo(e)), !e) return new fn();
  if (e instanceof fn) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, o = e.b / 255, s = Math.min(t, r, o), a = Math.max(t, r, o), l = NaN, u = a - s, f = (a + s) / 2;
  return u ? (t === a ? l = (r - o) / u + (r < o) * 6 : r === a ? l = (o - t) / u + 2 : l = (t - r) / u + 4, u /= f < 0.5 ? a + s : 2 - a - s, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new fn(l, u, f, e.opacity);
}
function gO(e, t, r, o) {
  return arguments.length === 1 ? lN(e) : new fn(e, t, r, o ?? 1);
}
function fn(e, t, r, o) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +o;
}
ay(fn, gO, aN(js, {
  brighter(e) {
    return e = e == null ? Fl : Math.pow(Fl, e), new fn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Es : Math.pow(Es, e), new fn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - o;
    return new Rt(
      Wf(e >= 240 ? e - 240 : e + 120, s, o),
      Wf(e, s, o),
      Wf(e < 120 ? e + 240 : e - 120, s, o),
      this.opacity
    );
  },
  clamp() {
    return new fn(Vx(this.h), gl(this.s), gl(this.l), $l(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $l(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Vx(this.h)}, ${gl(this.s) * 100}%, ${gl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Vx(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wf(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ly = (e) => () => e;
function vO(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function yO(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(o) {
    return Math.pow(e + o * t, r);
  };
}
function wO(e) {
  return (e = +e) == 1 ? uN : function(t, r) {
    return r - t ? yO(t, r, e) : ly(isNaN(t) ? r : t);
  };
}
function uN(e, t) {
  var r = t - e;
  return r ? vO(e, r) : ly(isNaN(e) ? t : e);
}
const Bl = (function e(t) {
  var r = wO(t);
  function o(s, a) {
    var l = r((s = Mv(s)).r, (a = Mv(a)).r), u = r(s.g, a.g), f = r(s.b, a.b), d = uN(s.opacity, a.opacity);
    return function(h) {
      return s.r = l(h), s.g = u(h), s.b = f(h), s.opacity = d(h), s + "";
    };
  }
  return o.gamma = e, o;
})(1);
function xO(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, o = t.slice(), s;
  return function(a) {
    for (s = 0; s < r; ++s) o[s] = e[s] * (1 - a) + t[s] * a;
    return o;
  };
}
function _O(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function bO(e, t) {
  var r = t ? t.length : 0, o = e ? Math.min(r, e.length) : 0, s = new Array(o), a = new Array(r), l;
  for (l = 0; l < o; ++l) s[l] = _s(e[l], t[l]);
  for (; l < r; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = s[l](u);
    return a;
  };
}
function SO(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return r.setTime(e * (1 - o) + t * o), r;
  };
}
function Cn(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function EO(e, t) {
  var r = {}, o = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = _s(e[s], t[s]) : o[s] = t[s];
  return function(a) {
    for (s in r) o[s] = r[s](a);
    return o;
  };
}
var Ov = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Uf = new RegExp(Ov.source, "g");
function CO(e) {
  return function() {
    return e;
  };
}
function kO(e) {
  return function(t) {
    return e(t) + "";
  };
}
function cN(e, t) {
  var r = Ov.lastIndex = Uf.lastIndex = 0, o, s, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = Ov.exec(e)) && (s = Uf.exec(t)); )
    (a = s.index) > r && (a = t.slice(r, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (s = s[0]) ? u[l] ? u[l] += s : u[++l] = s : (u[++l] = null, f.push({ i: l, x: Cn(o, s) })), r = Uf.lastIndex;
  return r < t.length && (a = t.slice(r), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? kO(f[0].x) : CO(t) : (t = f.length, function(d) {
    for (var h = 0, m; h < t; ++h) u[(m = f[h]).i] = m.x(d);
    return u.join("");
  });
}
function _s(e, t) {
  var r = typeof t, o;
  return t == null || r === "boolean" ? ly(t) : (r === "number" ? Cn : r === "string" ? (o = oo(t)) ? (t = o, Bl) : cN : t instanceof oo ? Bl : t instanceof Date ? SO : _O(t) ? xO : Array.isArray(t) ? bO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? EO : Cn)(e, t);
}
var Hx = 180 / Math.PI, Lv = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function fN(e, t, r, o, s, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * r + t * o) && (r -= e * f, o -= t * f), (u = Math.sqrt(r * r + o * o)) && (r /= u, o /= u, f /= u), e * o < t * r && (e = -e, t = -t, f = -f, l = -l), {
    translateX: s,
    translateY: a,
    rotate: Math.atan2(t, e) * Hx,
    skewX: Math.atan(f) * Hx,
    scaleX: l,
    scaleY: u
  };
}
var vl;
function NO(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Lv : fN(t.a, t.b, t.c, t.d, t.e, t.f);
}
function RO(e) {
  return e == null || (vl || (vl = document.createElementNS("http://www.w3.org/2000/svg", "g")), vl.setAttribute("transform", e), !(e = vl.transform.baseVal.consolidate())) ? Lv : (e = e.matrix, fN(e.a, e.b, e.c, e.d, e.e, e.f));
}
function dN(e, t, r, o) {
  function s(d) {
    return d.length ? d.pop() + " " : "";
  }
  function a(d, h, m, g, w, E) {
    if (d !== m || h !== g) {
      var y = w.push("translate(", null, t, null, r);
      E.push({ i: y - 4, x: Cn(d, m) }, { i: y - 2, x: Cn(h, g) });
    } else (m || g) && w.push("translate(" + m + t + g + r);
  }
  function l(d, h, m, g) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), g.push({ i: m.push(s(m) + "rotate(", null, o) - 2, x: Cn(d, h) })) : h && m.push(s(m) + "rotate(" + h + o);
  }
  function u(d, h, m, g) {
    d !== h ? g.push({ i: m.push(s(m) + "skewX(", null, o) - 2, x: Cn(d, h) }) : h && m.push(s(m) + "skewX(" + h + o);
  }
  function f(d, h, m, g, w, E) {
    if (d !== m || h !== g) {
      var y = w.push(s(w) + "scale(", null, ",", null, ")");
      E.push({ i: y - 4, x: Cn(d, m) }, { i: y - 2, x: Cn(h, g) });
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
var PO = dN(NO, "px, ", "px)", "deg)"), TO = dN(RO, ", ", ")", ")"), AO = 1e-12;
function Wx(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function IO(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function MO(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Il = (function e(t, r, o) {
  function s(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], m = l[1], g = l[2], w = h - u, E = m - f, y = w * w + E * E, x, S;
    if (y < AO)
      S = Math.log(g / d) / t, x = function(A) {
        return [
          u + A * w,
          f + A * E,
          d * Math.exp(t * A * S)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (g * g - d * d + o * y) / (2 * d * r * C), k = (g * g - d * d - o * y) / (2 * g * r * C), R = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(k * k + 1) - k);
      S = (T - R) / t, x = function(A) {
        var O = A * S, D = Wx(R), G = d / (r * C) * (D * MO(t * O + R) - IO(R));
        return [
          u + G * w,
          f + G * E,
          d * D / Wx(t * O + R)
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
var oi = 0, ms = 0, ds = 0, hN = 1e3, Vl, gs, Hl = 0, io = 0, lu = 0, ks = typeof performance == "object" && performance.now ? performance : Date, pN = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function uy() {
  return io || (pN(OO), io = ks.now() + lu);
}
function OO() {
  io = 0;
}
function Wl() {
  this._call = this._time = this._next = null;
}
Wl.prototype = mN.prototype = {
  constructor: Wl,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? uy() : +r) + (t == null ? 0 : +t), !this._next && gs !== this && (gs ? gs._next = this : Vl = this, gs = this), this._call = e, this._time = r, qv();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, qv());
  }
};
function mN(e, t, r) {
  var o = new Wl();
  return o.restart(e, t, r), o;
}
function LO() {
  uy(), ++oi;
  for (var e = Vl, t; e; )
    (t = io - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --oi;
}
function Ux() {
  io = (Hl = ks.now()) + lu, oi = ms = 0;
  try {
    LO();
  } finally {
    oi = 0, DO(), io = 0;
  }
}
function qO() {
  var e = ks.now(), t = e - Hl;
  t > hN && (lu -= t, Hl = e);
}
function DO() {
  for (var e, t = Vl, r, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Vl = r);
  gs = e, qv(o);
}
function qv(e) {
  if (!oi) {
    ms && (ms = clearTimeout(ms));
    var t = e - io;
    t > 24 ? (e < 1 / 0 && (ms = setTimeout(Ux, e - ks.now() - lu)), ds && (ds = clearInterval(ds))) : (ds || (Hl = ks.now(), ds = setInterval(qO, hN)), oi = 1, pN(Ux));
  }
}
function Gx(e, t, r) {
  var o = new Wl();
  return t = t == null ? 0 : +t, o.restart((s) => {
    o.stop(), e(s + t);
  }, t, r), o;
}
var jO = su("start", "end", "cancel", "interrupt"), zO = [], gN = 0, Yx = 1, Dv = 2, Ml = 3, Kx = 4, jv = 5, Ol = 6;
function uu(e, t, r, o, s, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (r in l) return;
  FO(e, r, {
    name: t,
    index: o,
    // For context during callback.
    group: s,
    // For context during callback.
    on: jO,
    tween: zO,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: gN
  });
}
function cy(e, t) {
  var r = vn(e, t);
  if (r.state > gN) throw new Error("too late; already scheduled");
  return r;
}
function In(e, t) {
  var r = vn(e, t);
  if (r.state > Ml) throw new Error("too late; already running");
  return r;
}
function vn(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function FO(e, t, r) {
  var o = e.__transition, s;
  o[t] = r, r.timer = mN(a, 0, r.time);
  function a(d) {
    r.state = Yx, r.timer.restart(l, r.delay, r.time), r.delay <= d && l(d - r.delay);
  }
  function l(d) {
    var h, m, g, w;
    if (r.state !== Yx) return f();
    for (h in o)
      if (w = o[h], w.name === r.name) {
        if (w.state === Ml) return Gx(l);
        w.state === Kx ? (w.state = Ol, w.timer.stop(), w.on.call("interrupt", e, e.__data__, w.index, w.group), delete o[h]) : +h < t && (w.state = Ol, w.timer.stop(), w.on.call("cancel", e, e.__data__, w.index, w.group), delete o[h]);
      }
    if (Gx(function() {
      r.state === Ml && (r.state = Kx, r.timer.restart(u, r.delay, r.time), u(d));
    }), r.state = Dv, r.on.call("start", e, e.__data__, r.index, r.group), r.state === Dv) {
      for (r.state = Ml, s = new Array(g = r.tween.length), h = 0, m = -1; h < g; ++h)
        (w = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (s[++m] = w);
      s.length = m + 1;
    }
  }
  function u(d) {
    for (var h = d < r.duration ? r.ease.call(null, d / r.duration) : (r.timer.restart(f), r.state = jv, 1), m = -1, g = s.length; ++m < g; )
      s[m].call(e, h);
    r.state === jv && (r.on.call("end", e, e.__data__, r.index, r.group), f());
  }
  function f() {
    r.state = Ol, r.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Ll(e, t) {
  var r = e.__transition, o, s, a = !0, l;
  if (r) {
    t = t == null ? null : t + "";
    for (l in r) {
      if ((o = r[l]).name !== t) {
        a = !1;
        continue;
      }
      s = o.state > Dv && o.state < jv, o.state = Ol, o.timer.stop(), o.on.call(s ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete r[l];
    }
    a && delete e.__transition;
  }
}
function $O(e) {
  return this.each(function() {
    Ll(this, e);
  });
}
function BO(e, t) {
  var r, o;
  return function() {
    var s = In(this, e), a = s.tween;
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
function VO(e, t, r) {
  var o, s;
  if (typeof r != "function") throw new Error();
  return function() {
    var a = In(this, e), l = a.tween;
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
function HO(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = vn(this.node(), r).tween, s = 0, a = o.length, l; s < a; ++s)
      if ((l = o[s]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? BO : VO)(r, e, t));
}
function fy(e, t, r) {
  var o = e._id;
  return e.each(function() {
    var s = In(this, o);
    (s.value || (s.value = {}))[t] = r.apply(this, arguments);
  }), function(s) {
    return vn(s, o).value[t];
  };
}
function vN(e, t) {
  var r;
  return (typeof t == "number" ? Cn : t instanceof oo ? Bl : (r = oo(t)) ? (t = r, Bl) : cN)(e, t);
}
function WO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function UO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function GO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function YO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function KO(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function XO(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function QO(e, t) {
  var r = au(e), o = r === "transform" ? TO : vN;
  return this.attrTween(e, typeof t == "function" ? (r.local ? XO : KO)(r, o, fy(this, "attr." + e, t)) : t == null ? (r.local ? UO : WO)(r) : (r.local ? YO : GO)(r, o, t));
}
function ZO(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function JO(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function eL(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && JO(e, a)), r;
  }
  return s._value = t, s;
}
function tL(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && ZO(e, a)), r;
  }
  return s._value = t, s;
}
function nL(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var o = au(e);
  return this.tween(r, (o.local ? eL : tL)(o, t));
}
function rL(e, t) {
  return function() {
    cy(this, e).delay = +t.apply(this, arguments);
  };
}
function oL(e, t) {
  return t = +t, function() {
    cy(this, e).delay = t;
  };
}
function iL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? rL : oL)(t, e)) : vn(this.node(), t).delay;
}
function sL(e, t) {
  return function() {
    In(this, e).duration = +t.apply(this, arguments);
  };
}
function aL(e, t) {
  return t = +t, function() {
    In(this, e).duration = t;
  };
}
function lL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? sL : aL)(t, e)) : vn(this.node(), t).duration;
}
function uL(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    In(this, e).ease = t;
  };
}
function cL(e) {
  var t = this._id;
  return arguments.length ? this.each(uL(t, e)) : vn(this.node(), t).ease;
}
function fL(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    In(this, e).ease = r;
  };
}
function dL(e) {
  if (typeof e != "function") throw new Error();
  return this.each(fL(this._id, e));
}
function hL(e) {
  typeof e != "function" && (e = Yk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Yn(o, this._parents, this._name, this._id);
}
function pL(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, o = t.length, s = r.length, a = Math.min(o, s), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = r[u], h = f.length, m = l[u] = new Array(h), g, w = 0; w < h; ++w)
      (g = f[w] || d[w]) && (m[w] = g);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Yn(l, this._parents, this._name, this._id);
}
function mL(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function gL(e, t, r) {
  var o, s, a = mL(t) ? cy : In;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (s = (o = u).copy()).on(t, r), l.on = s;
  };
}
function vL(e, t) {
  var r = this._id;
  return arguments.length < 2 ? vn(this.node(), r).on.on(e) : this.each(gL(r, e, t));
}
function yL(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function wL() {
  return this.on("end.remove", yL(this._id));
}
function xL(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = iy(e));
  for (var o = this._groups, s = o.length, a = new Array(s), l = 0; l < s; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, m, g = 0; g < f; ++g)
      (h = u[g]) && (m = e.call(h, h.__data__, g, u)) && ("__data__" in h && (m.__data__ = h.__data__), d[g] = m, uu(d[g], t, r, g, d, vn(h, r)));
  return new Yn(a, this._parents, t, r);
}
function _L(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Gk(e));
  for (var o = this._groups, s = o.length, a = [], l = [], u = 0; u < s; ++u)
    for (var f = o[u], d = f.length, h, m = 0; m < d; ++m)
      if (h = f[m]) {
        for (var g = e.call(h, h.__data__, m, f), w, E = vn(h, r), y = 0, x = g.length; y < x; ++y)
          (w = g[y]) && uu(w, t, r, y, g, E);
        a.push(g), l.push(h);
      }
  return new Yn(a, l, t, r);
}
var bL = Ds.prototype.constructor;
function SL() {
  return new bL(this._groups, this._parents);
}
function EL(e, t) {
  var r, o, s;
  return function() {
    var a = ri(this, e), l = (this.style.removeProperty(e), ri(this, e));
    return a === l ? null : a === r && l === o ? s : s = t(r = a, o = l);
  };
}
function yN(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function CL(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = ri(this, e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function kL(e, t, r) {
  var o, s, a;
  return function() {
    var l = ri(this, e), u = r(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), ri(this, e))), l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u));
  };
}
function NL(e, t) {
  var r, o, s, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = In(this, e), d = f.on, h = f.value[a] == null ? u || (u = yN(t)) : void 0;
    (d !== r || s !== h) && (o = (r = d).copy()).on(l, s = h), f.on = o;
  };
}
function RL(e, t, r) {
  var o = (e += "") == "transform" ? PO : vN;
  return t == null ? this.styleTween(e, EL(e, o)).on("end.style." + e, yN(e)) : typeof t == "function" ? this.styleTween(e, kL(e, o, fy(this, "style." + e, t))).each(NL(this._id, e)) : this.styleTween(e, CL(e, o, t), r).on("end.style." + e, null);
}
function PL(e, t, r) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), r);
  };
}
function TL(e, t, r) {
  var o, s;
  function a() {
    var l = t.apply(this, arguments);
    return l !== s && (o = (s = l) && PL(e, l, r)), o;
  }
  return a._value = t, a;
}
function AL(e, t, r) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, TL(e, t, r ?? ""));
}
function IL(e) {
  return function() {
    this.textContent = e;
  };
}
function ML(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function OL(e) {
  return this.tween("text", typeof e == "function" ? ML(fy(this, "text", e)) : IL(e == null ? "" : e + ""));
}
function LL(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function qL(e) {
  var t, r;
  function o() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && LL(s)), t;
  }
  return o._value = e, o;
}
function DL(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, qL(e));
}
function jL() {
  for (var e = this._name, t = this._id, r = wN(), o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = vn(f, t);
        uu(f, e, r, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Yn(o, this._parents, e, r);
}
function zL() {
  var e, t, r = this, o = r._id, s = r.size();
  return new Promise(function(a, l) {
    var u = { value: l }, f = { value: function() {
      --s === 0 && a();
    } };
    r.each(function() {
      var d = In(this, o), h = d.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(u), t._.interrupt.push(u), t._.end.push(f)), d.on = t;
    }), s === 0 && a();
  });
}
var FL = 0;
function Yn(e, t, r, o) {
  this._groups = e, this._parents = t, this._name = r, this._id = o;
}
function wN() {
  return ++FL;
}
var Hn = Ds.prototype;
Yn.prototype = {
  constructor: Yn,
  select: xL,
  selectAll: _L,
  selectChild: Hn.selectChild,
  selectChildren: Hn.selectChildren,
  filter: hL,
  merge: pL,
  selection: SL,
  transition: jL,
  call: Hn.call,
  nodes: Hn.nodes,
  node: Hn.node,
  size: Hn.size,
  empty: Hn.empty,
  each: Hn.each,
  on: vL,
  attr: QO,
  attrTween: nL,
  style: RL,
  styleTween: AL,
  text: OL,
  textTween: DL,
  remove: wL,
  tween: HO,
  delay: iL,
  duration: lL,
  ease: cL,
  easeVarying: dL,
  end: zL,
  [Symbol.iterator]: Hn[Symbol.iterator]
};
function $L(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var BL = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: $L
};
function VL(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function HL(e) {
  var t, r;
  e instanceof Yn ? (t = e._id, e = e._name) : (t = wN(), (r = BL).time = uy(), e = e == null ? null : e + "");
  for (var o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && uu(f, e, t, d, l, r || VL(f, t));
  return new Yn(o, this._parents, e, t);
}
Ds.prototype.interrupt = $O;
Ds.prototype.transition = HL;
const yl = (e) => () => e;
function WL(e, {
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
var cu = new Gn(1, 0, 0);
xN.prototype = Gn.prototype;
function xN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return cu;
  return e.__zoom;
}
function Gf(e) {
  e.stopImmediatePropagation();
}
function hs(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function UL(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function GL() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Xx() {
  return this.__zoom || cu;
}
function YL(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function KL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function XL(e, t, r) {
  var o = e.invertX(t[0][0]) - r[0][0], s = e.invertX(t[1][0]) - r[1][0], a = e.invertY(t[0][1]) - r[0][1], l = e.invertY(t[1][1]) - r[1][1];
  return e.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function _N() {
  var e = UL, t = GL, r = XL, o = YL, s = KL, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Il, d = su("start", "zoom", "end"), h, m, g, w = 500, E = 150, y = 0, x = 10;
  function S(L) {
    L.property("__zoom", Xx).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", G).filter(s).on("touchstart.zoom", B).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(L, H, $, Y) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", Xx), L !== M ? R(L, H, $, Y) : M.interrupt().each(function() {
      T(this, arguments).event(Y).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
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
      return r(cu.translate(q[0], q[1]).scale(Q.k).translate(
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
  function R(L, H, $, Y) {
    L.on("start.zoom", function() {
      T(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var M = this, j = arguments, Q = T(M, j).event(Y), q = t.apply(M, j), W = $ == null ? k(q) : typeof $ == "function" ? $.apply(M, j) : $, ie = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), F = M.__zoom, Z = typeof H == "function" ? H.apply(M, j) : H, ee = f(F.invert(W).concat(ie / F.k), Z.invert(W).concat(ie / Z.k));
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
  function T(L, H, $) {
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
        new WL(L, {
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
    var $ = T(this, H).event(L), Y = this.__zoom, M = Math.max(a[0], Math.min(a[1], Y.k * Math.pow(2, o.apply(this, arguments)))), j = cn(L);
    if ($.wheel)
      ($.mouse[0][0] !== j[0] || $.mouse[0][1] !== j[1]) && ($.mouse[1] = Y.invert($.mouse[0] = j)), clearTimeout($.wheel);
    else {
      if (Y.k === M) return;
      $.mouse = [j, Y.invert(j)], Ll(this), $.start();
    }
    hs(L), $.wheel = setTimeout(Q, E), $.zoom("mouse", r(_(C(Y, M), $.mouse[0], $.mouse[1]), $.extent, l));
    function Q() {
      $.wheel = null, $.end();
    }
  }
  function D(L, ...H) {
    if (g || !e.apply(this, arguments)) return;
    var $ = L.currentTarget, Y = T(this, H, !0).event(L), M = Dt(L.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ie, !0), j = cn(L, $), Q = L.clientX, q = L.clientY;
    oN(L.view), Gf(L), Y.mouse = [j, this.__zoom.invert(j)], Ll(this), Y.start();
    function W(F) {
      if (hs(F), !Y.moved) {
        var Z = F.clientX - Q, ee = F.clientY - q;
        Y.moved = Z * Z + ee * ee > y;
      }
      Y.event(F).zoom("mouse", r(_(Y.that.__zoom, Y.mouse[0] = cn(F, $), Y.mouse[1]), Y.extent, l));
    }
    function ie(F) {
      M.on("mousemove.zoom mouseup.zoom", null), iN(F.view, Y.moved), hs(F), Y.event(F).end();
    }
  }
  function G(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, Y = cn(L.changedTouches ? L.changedTouches[0] : L, this), M = $.invert(Y), j = $.k * (L.shiftKey ? 0.5 : 2), Q = r(_(C($, j), Y, M), t.apply(this, H), l);
      hs(L), u > 0 ? Dt(this).transition().duration(u).call(R, Q, Y, L) : Dt(this).call(S.transform, Q, Y, L);
    }
  }
  function B(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = L.touches, Y = $.length, M = T(this, H, L.changedTouches.length === Y).event(L), j, Q, q, W;
      for (Gf(L), Q = 0; Q < Y; ++Q)
        q = $[Q], W = cn(q, this), W = [W, this.__zoom.invert(W), q.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== W[2] && (M.touch1 = W, M.taps = 0) : (M.touch0 = W, j = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), j && (M.taps < 2 && (m = W[0], h = setTimeout(function() {
        h = null;
      }, w)), Ll(this), M.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var $ = T(this, H).event(L), Y = L.changedTouches, M = Y.length, j, Q, q, W;
      for (hs(L), j = 0; j < M; ++j)
        Q = Y[j], q = cn(Q, this), $.touch0 && $.touch0[2] === Q.identifier ? $.touch0[0] = q : $.touch1 && $.touch1[2] === Q.identifier && ($.touch1[0] = q);
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
      var $ = T(this, H).event(L), Y = L.changedTouches, M = Y.length, j, Q;
      for (Gf(L), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, w), j = 0; j < M; ++j)
        Q = Y[j], $.touch0 && $.touch0[2] === Q.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Q.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Q = cn(Q, this), Math.hypot(m[0] - Q[0], m[1] - Q[1]) < x)) {
        var q = Dt(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : yl(+L), S) : o;
  }, S.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : yl(!!L), S) : e;
  }, S.touchable = function(L) {
    return arguments.length ? (s = typeof L == "function" ? L : yl(!!L), S) : s;
  }, S.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : yl([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), S) : t;
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
}, Ns = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], bN = ["Enter", " ", "Escape"], SN = {
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
var Rs;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Rs || (Rs = {}));
const EN = {
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
var Ul;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ul || (Ul = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const Qx = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function CN(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const kN = (e) => "id" in e && "source" in e && "target" in e, QL = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), dy = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), zs = (e, t = [0, 0]) => {
  const { width: r, height: o } = Qn(e), s = e.origin ?? t, a = r * s[0], l = o * s[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, ZL = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const r = e.reduce((o, s) => {
    const a = typeof s == "string";
    let l = !t.nodeLookup && !a ? s : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(s) : dy(s) ? s : t.nodeLookup.get(s.id));
    const u = l ? Gl(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return fu(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return du(r);
}, Fs = (e, t = {}) => {
  let r = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((s) => {
    (t.filter === void 0 || t.filter(s)) && (r = fu(r, Gl(s)), o = !0);
  }), o ? du(r) : { x: 0, y: 0, width: 0, height: 0 };
}, hy = (e, t, [r, o, s] = [0, 0, 1], a = !1, l = !1) => {
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
}, JL = (e, t) => {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    r.add(o.id);
  }), t.filter((o) => r.has(o.source) || r.has(o.target));
};
function eq(e, t) {
  const r = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((s) => s.id)) : null;
  return e.forEach((s) => {
    s.measured.width && s.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !s.hidden) && (!o || o.has(s.id)) && r.set(s.id, s);
  }), r;
}
async function tq({ nodes: e, width: t, height: r, panZoom: o, minZoom: s, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = eq(e, l), f = Fs(u), d = py(f, t, r, (l == null ? void 0 : l.minZoom) ?? s, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function NN({ nodeId: e, nextPosition: t, nodeLookup: r, nodeOrigin: o = [0, 0], nodeExtent: s, onError: a }) {
  const l = r.get(e), u = l.parentId ? r.get(l.parentId) : void 0, { x: f, y: d } = u ? u.internals.positionAbsolute : { x: 0, y: 0 }, h = l.origin ?? o;
  let m = l.extent || s;
  if (l.extent === "parent" && !l.expandParent)
    if (!u)
      a == null || a("005", Tn.error005());
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
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", Tn.error015())), {
    position: {
      x: g.x - f + (l.measured.width ?? 0) * h[0],
      y: g.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: g
  };
}
async function nq({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: r, edges: o, onBeforeDelete: s }) {
  const a = new Set(e.map((g) => g.id)), l = [];
  for (const g of r) {
    if (g.deletable === !1)
      continue;
    const w = a.has(g.id), E = !w && g.parentId && l.find((y) => y.id === g.parentId);
    (w || E) && l.push(g);
  }
  const u = new Set(t.map((g) => g.id)), f = o.filter((g) => g.deletable !== !1), h = JL(l, f);
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
function RN(e, t, r) {
  const { width: o, height: s } = Qn(r), { x: a, y: l } = r.internals.positionAbsolute;
  return so(e, [
    [a, l],
    [a + o, l + s]
  ], t);
}
const Zx = (e, t, r) => e < t ? si(Math.abs(e - t), 1, t) / t : e > r ? -si(Math.abs(e - r), 1, t) / t : 0, PN = (e, t, r = 15, o = 40) => {
  const s = Zx(e.x, o, t.width - o) * r, a = Zx(e.y, o, t.height - o) * r;
  return [s, a];
}, fu = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), zv = ({ x: e, y: t, width: r, height: o }) => ({
  x: e,
  y: t,
  x2: e + r,
  y2: t + o
}), du = ({ x: e, y: t, x2: r, y2: o }) => ({
  x: e,
  y: t,
  width: r - e,
  height: o - t
}), ai = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = dy(e) ? e.internals.positionAbsolute : zs(e, t);
  return {
    x: r,
    y: o,
    width: ((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Gl = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = dy(e) ? e.internals.positionAbsolute : zs(e, t);
  return {
    x: r,
    y: o,
    x2: r + (((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, TN = (e, t) => du(fu(zv(e), zv(t))), Ps = (e, t) => {
  const r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(r * o);
}, Jx = (e) => dn(e.width) && dn(e.height) && dn(e.x) && dn(e.y), dn = (e) => !isNaN(e) && isFinite(e), rq = (e, t) => {
}, $s = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Bs = ({ x: e, y: t }, [r, o, s], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - r) / s,
    y: (t - o) / s
  };
  return a ? $s(u, l) : u;
}, Yl = ({ x: e, y: t }, [r, o, s]) => ({
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
function oq(e, t, r) {
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
function iq(e, t, r, o, s, a) {
  const { x: l, y: u } = Yl(e, [t, r, o]), { x: f, y: d } = Yl({ x: e.x + e.width, y: e.y + e.height }, [t, r, o]), h = s - f, m = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(m)
  };
}
const py = (e, t, r, o, s, a) => {
  const l = oq(a, t, r), u = (t - l.x) / e.width, f = (r - l.y) / e.height, d = Math.min(u, f), h = si(d, o, s), m = e.x + e.width / 2, g = e.y + e.height / 2, w = t / 2 - m * h, E = r / 2 - g * h, y = iq(e, w, E, h, t, r), x = {
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
function AN(e) {
  var t, r;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function IN(e, t = { width: 0, height: 0 }, r, o, s) {
  const a = { ...e }, l = o.get(r);
  if (l) {
    const u = l.origin || s;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function e1(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const r of e)
    if (!t.has(r))
      return !1;
  return !0;
}
function sq() {
  let e, t;
  return { promise: new Promise((o, s) => {
    e = o, t = s;
  }), resolve: e, reject: t };
}
function aq(e) {
  return { ...SN, ...e || {} };
}
function bs(e, { snapGrid: t = [0, 0], snapToGrid: r = !1, transform: o, containerBounds: s }) {
  const { x: a, y: l } = hn(e), u = Bs({ x: a - ((s == null ? void 0 : s.left) ?? 0), y: l - ((s == null ? void 0 : s.top) ?? 0) }, o), { x: f, y: d } = r ? $s(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const my = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), MN = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, lq = ["INPUT", "SELECT", "TEXTAREA"];
function ON(e) {
  var o, s;
  const t = ((s = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : s[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : lq.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const LN = (e) => "clientX" in e, hn = (e, t) => {
  var a, l;
  const r = LN(e), o = r ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, s = r ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, t1 = (e, t, r, o, s) => {
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
      ...my(l)
    };
  });
};
function qN({ sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: s, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + s * 0.375 + l * 0.375 + r * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), m = Math.abs(d - t);
  return [f, d, h, m];
}
function wl(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function n1({ pos: e, x1: t, y1: r, x2: o, y2: s, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - wl(t - o, a), r];
    case ye.Right:
      return [t + wl(o - t, a), r];
    case ye.Top:
      return [t, r - wl(r - s, a)];
    case ye.Bottom:
      return [t, r + wl(s - r, a)];
  }
}
function DN({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = n1({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s,
    c: l
  }), [d, h] = n1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t,
    c: l
  }), [m, g, w, E] = qN({
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
function jN({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, s, l];
}
function uq({ sourceNode: e, targetNode: t, selected: r = !1, zIndex: o, elevateOnSelect: s = !1 }) {
  if (o !== void 0)
    return o;
  const a = s && r ? 1e3 : 0, l = Math.max(e.parentId || s && e.selected ? e.internals.z : 0, t.parentId || s && t.selected ? t.internals.z : 0);
  return a + l;
}
function cq({ sourceNode: e, targetNode: t, width: r, height: o, transform: s }) {
  const a = fu(Gl(e), Gl(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: r / s[2],
    height: o / s[2]
  };
  return Ps(l, du(a)) > 0;
}
const fq = ({ source: e, sourceHandle: t, target: r, targetHandle: o }) => `xy-edge__${e}${t || ""}-${r}${o || ""}`, dq = (e, t) => t.some((r) => r.source === e.source && r.target === e.target && (r.sourceHandle === e.sourceHandle || !r.sourceHandle && !e.sourceHandle) && (r.targetHandle === e.targetHandle || !r.targetHandle && !e.targetHandle)), hq = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let r;
  return kN(e) ? r = { ...e } : r = {
    ...e,
    id: fq(e)
  }, dq(r, t) ? t : (r.sourceHandle === null && delete r.sourceHandle, r.targetHandle === null && delete r.targetHandle, t.concat(r));
};
function zN({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const [s, a, l, u] = jN({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o
  });
  return [`M ${e},${t}L ${r},${o}`, s, a, l, u];
}
const r1 = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, pq = ({ source: e, sourcePosition: t = ye.Bottom, target: r }) => t === ye.Left || t === ye.Right ? e.x < r.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < r.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, o1 = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function mq({ source: e, sourcePosition: t = ye.Bottom, target: r, targetPosition: o = ye.Top, center: s, offset: a, stepPosition: l }) {
  const u = r1[t], f = r1[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: r.x + f.x * a, y: r.y + f.y * a }, m = pq({
    source: d,
    sourcePosition: t,
    target: h
  }), g = m.x !== 0 ? "x" : "y", w = m[g];
  let E = [], y, x;
  const S = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, k] = jN({
    sourceX: e.x,
    sourceY: e.y,
    targetX: r.x,
    targetY: r.y
  });
  if (u[g] * f[g] === -1) {
    g === "x" ? (y = s.x ?? d.x + (h.x - d.x) * l, x = s.y ?? (d.y + h.y) / 2) : (y = s.x ?? (d.x + h.x) / 2, x = s.y ?? d.y + (h.y - d.y) * l);
    const T = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], A = [
      { x: d.x, y: x },
      { x: h.x, y: x }
    ];
    u[g] === w ? E = g === "x" ? T : A : E = g === "x" ? A : T;
  } else {
    const T = [{ x: d.x, y: h.y }], A = [{ x: h.x, y: d.y }];
    if (g === "x" ? E = u.x === w ? A : T : E = u.y === w ? T : A, t === o) {
      const V = Math.abs(e[g] - r[g]);
      if (V <= a) {
        const X = Math.min(a - 1, a - V);
        u[g] === w ? S[g] = (d[g] > e[g] ? -1 : 1) * X : C[g] = (h[g] > r[g] ? -1 : 1) * X;
      }
    }
    if (t !== o) {
      const V = g === "x" ? "y" : "x", X = u[g] === f[V], L = d[V] > h[V], H = d[V] < h[V];
      (u[g] === 1 && (!X && L || X && H) || u[g] !== 1 && (!X && H || X && L)) && (E = g === "x" ? T : A);
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
function gq(e, t, r, o) {
  const s = Math.min(o1(e, t) / 2, o1(t, r) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === r.x || e.y === l && l === r.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < r.x ? -1 : 1, h = e.y < r.y ? 1 : -1;
    return `L ${a + s * d},${l}Q ${a},${l} ${a},${l + s * h}`;
  }
  const u = e.x < r.x ? 1 : -1, f = e.y < r.y ? -1 : 1;
  return `L ${a},${l + s * f}Q ${a},${l} ${a + s * u},${l}`;
}
function Fv({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [m, g, w, E, y] = mq({
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
    return _ > 0 && _ < m.length - 1 ? k = gq(m[_ - 1], C, m[_ + 1], l) : k = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, S += k, S;
  }, ""), g, w, E, y];
}
function i1(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function vq(e) {
  var m;
  const { sourceNode: t, targetNode: r } = e;
  if (!i1(t) || !i1(r))
    return null;
  const o = t.internals.handleBounds || s1(t.handles), s = r.internals.handleBounds || s1(r.handles), a = a1((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = a1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ii.Strict ? (s == null ? void 0 : s.target) ?? [] : ((s == null ? void 0 : s.target) ?? []).concat((s == null ? void 0 : s.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (m = e.onError) == null || m.call(e, "008", Tn.error008(a ? "target" : "source", {
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
function s1(e) {
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
function a1(e, t) {
  return e && (t ? e.find((r) => r.id === t) : e[0]) || null;
}
function $v(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function yq(e, { id: t, defaultColor: r, defaultMarkerStart: o, defaultMarkerEnd: s }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || s].forEach((f) => {
    if (f && typeof f == "object") {
      const d = $v(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || r, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const FN = 1e3, wq = 10, gy = {
  nodeOrigin: [0, 0],
  nodeExtent: Ns,
  elevateNodesOnSelect: !0,
  defaults: {}
}, xq = {
  ...gy,
  checkEquality: !0
};
function vy(e, t) {
  const r = { ...e };
  for (const o in t)
    t[o] !== void 0 && (r[o] = t[o]);
  return r;
}
function _q(e, t, r) {
  const o = vy(gy, r);
  for (const s of e.values())
    if (s.parentId)
      yy(s, e, t, o);
    else {
      const a = zs(s, o.nodeOrigin), l = li(s.extent) ? s.extent : o.nodeExtent, u = so(a, l, Qn(s));
      s.internals.positionAbsolute = u;
    }
}
function bq(e, t) {
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
function Bv(e, t, r, o) {
  var d, h;
  const s = vy(xq, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = s != null && s.elevateNodesOnSelect ? FN : 0;
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
          handleBounds: bq(m, g),
          z: $N(m, f),
          userNode: m
        }
      }, t.set(m.id, g);
    }
    (g.measured === void 0 || g.measured.width === void 0 || g.measured.height === void 0) && !g.hidden && (l = !1), m.parentId && yy(g, t, r, o, a);
  }
  return l;
}
function Sq(e, t) {
  if (!e.parentId)
    return;
  const r = t.get(e.parentId);
  r ? r.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function yy(e, t, r, o, s) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = vy(gy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Sq(e, r), s && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++s.i, d.internals.z = d.internals.z + s.i * wq), s && d.internals.rootParentIndex !== void 0 && (s.i = d.internals.rootParentIndex);
  const h = a ? FN : 0, { x: m, y: g, z: w } = Eq(e, d, l, u, h), { positionAbsolute: E } = e.internals, y = m !== E.x || g !== E.y;
  (y || w !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: m, y: g } : E,
      z: w
    }
  });
}
function $N(e, t) {
  return (dn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Eq(e, t, r, o, s) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = Qn(e), f = zs(e, r), d = li(e.extent) ? so(f, e.extent, u) : f;
  let h = so({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = RN(h, u, t));
  const m = $N(e, s), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= m ? g + 1 : m
  };
}
function wy(e, t, r, o = [0, 0]) {
  var l;
  const s = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? ai(f), h = TN(d, u.rect);
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
      e.some((R) => R.id === k.id) || s.push({
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
function Cq(e, t, r, o, s, a) {
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
    const E = my(g.nodeElement), y = w.measured.width !== E.width || w.measured.height !== E.height;
    if (!!(E.width && E.height && (y || !w.internals.handleBounds || g.force))) {
      const S = g.nodeElement.getBoundingClientRect(), C = li(w.extent) ? w.extent : a;
      let { positionAbsolute: _ } = w.internals;
      w.parentId && w.extent === "parent" ? _ = RN(_, E, t.get(w.parentId)) : C && (_ = so(_, C, E));
      const k = {
        ...w,
        measured: E,
        internals: {
          ...w.internals,
          positionAbsolute: _,
          handleBounds: {
            source: t1("source", g.nodeElement, S, h, w.id),
            target: t1("target", g.nodeElement, S, h, w.id)
          }
        }
      };
      t.set(w.id, k), w.parentId && yy(k, t, r, { nodeOrigin: s }), u = !0, y && (f.push({
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
    const g = wy(m, t, r, s);
    f.push(...g);
  }
  return { changes: f, updatedInternals: u };
}
async function kq({ delta: e, panZoom: t, transform: r, translateExtent: o, width: s, height: a }) {
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
function l1(e, t, r, o, s, a) {
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
function BN(e, t, r) {
  e.clear(), t.clear();
  for (const o of r) {
    const { source: s, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: s, target: a, sourceHandle: l, targetHandle: u }, d = `${s}-${l}--${a}-${u}`, h = `${a}-${u}--${s}-${l}`;
    l1("source", f, h, e, s, l), l1("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function VN(e, t) {
  if (!e.parentId)
    return !1;
  const r = t.get(e.parentId);
  return r ? r.selected ? !0 : VN(r, t) : !1;
}
function u1(e, t, r) {
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
function Nq(e, t, r, o) {
  const s = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !VN(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
function Yf({ nodeId: e, dragItems: t, nodeLookup: r, dragging: o = !0 }) {
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
function Rq({ dragItems: e, snapGrid: t, x: r, y: o }) {
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
function Pq({ onNodeMouseDown: e, getStoreItems: t, onDragStart: r, onDrag: o, onDragStop: s }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, m = !1, g = null, w = !1, E = !1, y = null;
  function x({ noDragClassName: C, handleSelector: _, domNode: k, isSelectable: R, nodeId: T, nodeClickDistance: A = 0 }) {
    g = Dt(k);
    function O({ x: V, y: X }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: $, snapToGrid: Y, nodeOrigin: M, onNodeDrag: j, onSelectionDrag: Q, onError: q, updateNodePositions: W } = t();
      a = { x: V, y: X };
      let ie = !1;
      const F = u.size > 1, Z = F && H ? zv(Fs(u)) : null, ee = F && Y ? Rq({
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
          const { positionAbsolute: pe } = te.internals, be = pe.x - Z.x + H[0][0], ge = pe.x + te.measured.width - Z.x2 + H[1][0], Re = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [be, Re],
            [ge, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = NN({
          nodeId: K,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: M,
          onError: q
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (W(u, !0), y && (o || j || !T && Q))) {
        const [K, te] = Yf({
          nodeId: T,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, K, te), j == null || j(y, K, te), T || Q == null || Q(y, te);
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
      const [$, Y] = PN(d, h, L);
      ($ !== 0 || Y !== 0) && (a.x = (a.x ?? 0) - $ / V[2], a.y = (a.y ?? 0) - Y / V[2], await X({ x: $, y: Y }) && O(a)), l = requestAnimationFrame(D);
    }
    function G(V) {
      var F;
      const { nodeLookup: X, multiSelectionActive: L, nodesDraggable: H, transform: $, snapGrid: Y, snapToGrid: M, selectNodesOnDrag: j, onNodeDragStart: Q, onSelectionDragStart: q, unselectNodesAndEdges: W } = t();
      m = !0, (!j || !R) && !L && T && ((F = X.get(T)) != null && F.selected || W()), R && j && T && (e == null || e(T));
      const ie = bs(V.sourceEvent, { transform: $, snapGrid: Y, snapToGrid: M, containerBounds: h });
      if (a = ie, u = Nq(X, H, ie, T), u.size > 0 && (r || Q || !T && q)) {
        const [Z, ee] = Yf({
          nodeId: T,
          dragItems: u,
          nodeLookup: X
        });
        r == null || r(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), T || q == null || q(V.sourceEvent, ee);
      }
    }
    const B = sN().clickDistance(A).on("start", (V) => {
      const { domNode: X, nodeDragThreshold: L, transform: H, snapGrid: $, snapToGrid: Y } = t();
      h = (X == null ? void 0 : X.getBoundingClientRect()) || null, w = !1, E = !1, y = V.sourceEvent, L === 0 && G(V), a = bs(V.sourceEvent, { transform: H, snapGrid: $, snapToGrid: Y, containerBounds: h }), d = hn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: X, transform: L, snapGrid: H, snapToGrid: $, nodeDragThreshold: Y, nodeLookup: M } = t(), j = bs(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: $, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !M.has(T)) && (w = !0), !w) {
        if (!f && X && m && (f = !0, D()), !m) {
          const Q = hn(V.sourceEvent, h), q = Q.x - d.x, W = Q.y - d.y;
          Math.sqrt(q * q + W * W) > Y && G(V);
        }
        (a.x !== j.xSnapped || a.y !== j.ySnapped) && u && m && (d = hn(V.sourceEvent, h), O(j));
      }
    }).on("end", (V) => {
      if (!(!m || w) && (f = !1, m = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: X, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: $ } = t();
        if (E && (L(u, !1), E = !1), s || H || !T && $) {
          const [Y, M] = Yf({
            nodeId: T,
            dragItems: u,
            nodeLookup: X,
            dragging: !1
          });
          s == null || s(V.sourceEvent, u, Y, M), H == null || H(V.sourceEvent, Y, M), T || $ == null || $(V.sourceEvent, M);
        }
      }
    }).filter((V) => {
      const X = V.target;
      return !V.button && (!C || !u1(X, `.${C}`, k)) && (!_ || u1(X, _, k));
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
function Tq(e, t, r) {
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
const Aq = 250;
function Iq(e, t, r, o) {
  var u, f;
  let s = [], a = 1 / 0;
  const l = Tq(e, r, t + Aq);
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
function HN(e, t, r, o, s, a = !1) {
  var d, h, m;
  const l = o.get(e);
  if (!l)
    return null;
  const u = s === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((m = l.internals.handleBounds) == null ? void 0 : m.target) ?? []], f = (r ? u == null ? void 0 : u.find((g) => g.id === r) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...As(l, f, f.position, !0) } : f;
}
function WN(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Mq(e, t) {
  let r = null;
  return t ? r = !0 : e && !t && (r = !1), r;
}
const UN = () => !0;
function Oq(e, { connectionMode: t, connectionRadius: r, handleId: o, nodeId: s, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: m, panBy: g, cancelConnection: w, onConnectStart: E, onConnect: y, onConnectEnd: x, isValidConnection: S = UN, onReconnectEnd: C, updateConnection: _, getTransform: k, getFromHandle: R, autoPanSpeed: T, dragThreshold: A = 1, handleDomNode: O }) {
  const D = MN(e.target);
  let G = 0, B;
  const { x: V, y: X } = hn(e), L = WN(a, O), H = u == null ? void 0 : u.getBoundingClientRect();
  let $ = !1;
  if (!H || !L)
    return;
  const Y = HN(s, L, o, f, t);
  if (!Y)
    return;
  let M = hn(e, H), j = !1, Q = null, q = !1, W = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = PN(M, H, T);
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
    toPosition: Qx[F.position],
    toNode: null,
    pointer: M
  };
  function te() {
    $ = !0, _(K), E == null || E(e, { nodeId: s, handleId: o, handleType: L });
  }
  A === 0 && te();
  function se(ce) {
    if (!$) {
      const { x: ge, y: Re } = hn(ce), Ee = ge - V, Ze = Re - X;
      if (!(Ee * Ee + Ze * Ze > A * A))
        return;
      te();
    }
    if (!R() || !F) {
      ae(ce);
      return;
    }
    const de = k();
    M = hn(ce, H), B = Iq(Bs(M, de, !1, [1, 1]), r, f, F), j || (ie(), j = !0);
    const pe = GN(ce, {
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
    W = pe.handleDomNode, Q = pe.connection, q = Mq(!!B, pe.isValid);
    const be = {
      // from stays the same
      ...K,
      isValid: q,
      to: pe.toHandle && q ? Yl({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: q && pe.toHandle ? pe.toHandle.position : Qx[F.position],
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
function GN(e, { handle: t, connectionMode: r, fromNodeId: o, fromHandleId: s, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = UN, nodeLookup: h }) {
  const m = a === "target", g = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: w, y: E } = hn(e), y = l.elementFromPoint(w, E), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : g, S = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = WN(void 0, x), _ = x.getAttribute("data-nodeid"), k = x.getAttribute("data-handleid"), R = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!_ || !C)
      return S;
    const A = {
      source: m ? _ : o,
      sourceHandle: m ? k : s,
      target: m ? o : _,
      targetHandle: m ? s : k
    };
    S.connection = A;
    const D = R && T && (r === ii.Strict ? m && C === "source" || !m && C === "target" : _ !== o || k !== s);
    S.isValid = D && d(A), S.toHandle = HN(_, C, k, h, r, !0);
  }
  return S;
}
const Vv = {
  onPointerDown: Oq,
  isValid: GN
};
function Lq({ domNode: e, panZoom: t, getTransform: r, getViewScale: o }) {
  const s = Dt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: m = !0, zoomable: g = !0, inversePan: w = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = r(), R = _.sourceEvent.ctrlKey && Ts() ? 10 : 1, T = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = k[2] * Math.pow(2, T * R);
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
      const R = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], T = [R[0] - y[0], R[1] - y[1]];
      y = R;
      const A = o() * Math.max(k[2], Math.log(k[2])) * (w ? -1 : 1), O = {
        x: k[0] - T[0] * A,
        y: k[1] - T[1] * A
      }, D = [
        [0, 0],
        [f, d]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: k[2]
      }, D, u);
    }, C = _N().on("start", x).on("zoom", m ? S : null).on("zoom.wheel", g ? E : null);
    s.call(C, {});
  }
  function l() {
    s.on("zoom", null);
  }
  return {
    update: a,
    destroy: l,
    pointer: cn
  };
}
const hu = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Kf = ({ x: e, y: t, zoom: r }) => cu.translate(e, t).scale(r), Qo = (e, t) => e.target.closest(`.${t}`), YN = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), qq = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Xf = (e, t = 0, r = qq, o = () => {
}) => {
  const s = typeof t == "number" && t > 0;
  return s || o(), s ? e.transition().duration(t).ease(r).on("end", o) : e;
}, KN = (e) => {
  const t = e.ctrlKey && Ts() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Dq({ zoomPanValues: e, noWheelClassName: t, d3Selection: r, d3Zoom: o, panOnScrollMode: s, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (Qo(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const m = r.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = cn(h), S = KN(h), C = m * Math.pow(2, S);
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
    const y = hu(r.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function jq({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: r }) {
  return function(o, s) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = Qo(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), r.call(this, o, s);
  };
}
function zq({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: r }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const s = hu(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), r && (r == null || r(o.sourceEvent, s));
  };
}
function Fq({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: r, onTransformChange: o, onPanZoom: s }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(r && YN(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), s && !((u = a.sourceEvent) != null && u.internal) && (s == null || s(a.sourceEvent, hu(a.transform)));
  };
}
function $q({ zoomPanValues: e, panOnDrag: t, panOnScroll: r, onDraggingChange: o, onPanZoomEnd: s, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && YN(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), s)) {
      const f = hu(l.transform);
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
function Bq({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: r, panOnDrag: o, panOnScroll: s, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
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
function Vq({ domNode: e, minZoom: t, maxZoom: r, translateExtent: o, viewport: s, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), m = _N().scaleExtent([t, r]).translateExtent(o), g = Dt(e).call(m);
  C({
    x: s.x,
    y: s.y,
    zoom: si(s.zoom, t, r)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const w = g.on("wheel.zoom"), E = g.on("dblclick.zoom");
  m.wheelDelta(KN);
  function y(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? _s : Il).transform(Xf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: B, noPanClassName: V, onPaneContextMenu: X, userSelectionActive: L, panOnScroll: H, panOnDrag: $, panOnScrollMode: Y, panOnScrollSpeed: M, preventScrolling: j, zoomOnPinch: Q, zoomOnScroll: q, zoomOnDoubleClick: W, zoomActivationKeyPressed: ie, lib: F, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: K, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && S();
    const se = H && !ie && !L;
    m.clickDistance(te ? 1 / 0 : !dn(K) || K < 0 ? 0 : K);
    const ae = se ? Dq({
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
    }) : jq({
      noWheelClassName: B,
      preventScrolling: j,
      d3ZoomHandler: w
    });
    if (g.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = zq({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      m.on("start", de);
      const pe = Fq({
        zoomPanValues: d,
        panOnDrag: $,
        onPaneContextMenu: !!X,
        onPanZoom: a,
        onTransformChange: Z
      });
      m.on("zoom", pe);
      const be = $q({
        zoomPanValues: d,
        panOnDrag: $,
        panOnScroll: H,
        onPaneContextMenu: X,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      m.on("end", be);
    }
    const ce = Bq({
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
    const L = Kf(B), H = m == null ? void 0 : m.constrain()(L, V, X);
    return H && await y(H), new Promise(($) => $(H));
  }
  async function _(B, V) {
    const X = Kf(B);
    return await y(X, V), new Promise((L) => L(X));
  }
  function k(B) {
    if (g) {
      const V = Kf(B), X = g.property("__zoom");
      (X.k !== B.zoom || X.x !== B.x || X.y !== B.y) && (m == null || m.transform(g, V, null, { sync: !0 }));
    }
  }
  function R() {
    const B = g ? xN(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: B.x, y: B.y, zoom: B.k };
  }
  function T(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? _s : Il).scaleTo(Xf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function A(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? _s : Il).scaleBy(Xf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function O(B) {
    m == null || m.scaleExtent(B);
  }
  function D(B) {
    m == null || m.translateExtent(B);
  }
  function G(B) {
    const V = !dn(B) || B < 0 ? 0 : B;
    m == null || m.clickDistance(V);
  }
  return {
    update: x,
    destroy: S,
    setViewport: _,
    setViewportConstrained: C,
    getViewport: R,
    scaleTo: T,
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
function Hq({ width: e, prevWidth: t, height: r, prevHeight: o, affectsX: s, affectsY: a }) {
  const l = e - t, u = r - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && s && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function c1(e) {
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
function xl(e, t, r) {
  return Math.max(0, t - e, e - r);
}
function f1(e, t) {
  return e ? !t : t;
}
function Wq(e, t, r, o, s, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: m } = t, g = h && m, { xSnapped: w, ySnapped: E } = r, { minWidth: y, maxWidth: x, minHeight: S, maxHeight: C } = o, { x: _, y: k, width: R, height: T, aspectRatio: A } = e;
  let O = Math.floor(h ? w - e.pointerX : 0), D = Math.floor(m ? E - e.pointerY : 0);
  const G = R + (f ? -O : O), B = T + (d ? -D : D), V = -a[0] * R, X = -a[1] * T;
  let L = xl(G, y, x), H = xl(B, S, C);
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
      const M = xl(G / A, S, C) * A;
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
      const M = xl(B * A, y, x) / A;
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
  D = D + (D < 0 ? H : -H), O = O + (O < 0 ? L : -L), s && (g ? G > B * A ? D = (f1(f, d) ? -O : O) / A : O = (f1(f, d) ? -D : D) * A : h ? (D = O / A, d = f) : (O = D * A, f = d));
  const $ = f ? _ + O : _, Y = d ? k + D : k;
  return {
    width: R + (f ? -O : O),
    height: T + (d ? -D : D),
    x: a[0] * O * (f ? -1 : 1) + $,
    y: a[1] * D * (d ? -1 : 1) + Y
  };
}
const XN = { width: 0, height: 0, x: 0, y: 0 }, Uq = {
  ...XN,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Gq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Yq(e, t, r) {
  const o = t.position.x + e.position.x, s = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = r[0] * a, f = r[1] * l;
  return [
    [o - u, s - f],
    [o + a - u, s + l - f]
  ];
}
function Kq({ domNode: e, nodeId: t, getStoreItems: r, onChange: o, onEnd: s }) {
  const a = Dt(e);
  let l = {
    controlDirection: c1("bottom-right"),
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
    let S = { ...XN }, C = { ...Uq };
    l = {
      boundaries: h,
      resizeDirection: g,
      keepAspectRatio: m,
      controlDirection: c1(d)
    };
    let _, k = null, R = [], T, A, O, D = !1;
    const G = sN().on("start", (B) => {
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
      }, T = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (T = V.get(_.parentId), A = T && _.extent === "parent" ? Gq(T) : void 0), R = [], O = void 0;
      for (const [Q, q] of V)
        if (q.parentId === t && (R.push({
          id: Q,
          position: { ...q.position },
          extent: q.extent
        }), q.extent === "parent" || q.expandParent)) {
          const W = Yq(q, _, q.origin ?? $);
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
      const { x: M, y: j, width: Q, height: q } = S, W = {}, ie = _.origin ?? H, { width: F, height: Z, x: ee, y: K } = Wq(C, l.controlDirection, $, l.boundaries, l.keepAspectRatio, ie, A, O), te = F !== Q, se = Z !== q, ae = ee !== M && te, ce = K !== j && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (W.x = ae ? ee : S.x, W.y = ce ? K : S.y, S.x = W.x, S.y = W.y, R.length > 0)) {
        const ge = ee - M, Re = K - j;
        for (const Ee of R)
          Ee.position = {
            x: Ee.position.x - ge + ie[0] * (F - Q),
            y: Ee.position.y - Re + ie[1] * (Z - q)
          }, Y.push(Ee);
      }
      if ((te || se) && (W.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? F : S.width, W.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : S.height, S.width = W.width, S.height = W.height), T && _.expandParent) {
        const ge = ie[0] * (W.width ?? 0);
        W.x && W.x < ge && (S.x = ge, C.x = C.x - (W.x - ge));
        const Re = ie[1] * (W.height ?? 0);
        W.y && W.y < Re && (S.y = Re, C.y = C.y - (W.y - Re));
      }
      const de = Hq({
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
var Qf = { exports: {} }, Zf = {}, Jf = { exports: {} }, ed = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d1;
function Xq() {
  if (d1) return ed;
  d1 = 1;
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
  return ed.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, ed;
}
var h1;
function Qq() {
  return h1 || (h1 = 1, Jf.exports = Xq()), Jf.exports;
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
var p1;
function Zq() {
  if (p1) return Zf;
  p1 = 1;
  var e = qs(), t = Qq();
  function r(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return Zf.useSyncExternalStoreWithSelector = function(d, h, m, g, w) {
    var E = a(null);
    if (E.current === null) {
      var y = { hasValue: !1, value: null };
      E.current = y;
    } else y = E.current;
    E = u(
      function() {
        function S(T) {
          if (!C) {
            if (C = !0, _ = T, T = g(T), w !== void 0 && y.hasValue) {
              var A = y.value;
              if (w(A, T))
                return k = A;
            }
            return k = T;
          }
          if (A = k, o(_, T)) return A;
          var O = g(T);
          return w !== void 0 && w(A, O) ? (_ = T, A) : (_ = T, k = O);
        }
        var C = !1, _, k, R = m === void 0 ? null : m;
        return [
          function() {
            return S(h());
          },
          R === null ? void 0 : function() {
            return S(R());
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
  }, Zf;
}
var m1;
function Jq() {
  return m1 || (m1 = 1, Qf.exports = Zq()), Qf.exports;
}
var eD = Jq();
const tD = /* @__PURE__ */ ry(eD), nD = {}, g1 = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (h, m) => {
    const g = typeof h == "function" ? h(t) : h;
    if (!Object.is(g, t)) {
      const w = t;
      t = m ?? (typeof g != "object" || g === null) ? g : Object.assign({}, t, g), r.forEach((E) => E(t, w));
    }
  }, s = () => t, f = { setState: o, getState: s, getInitialState: () => d, subscribe: (h) => (r.add(h), () => r.delete(h)), destroy: () => {
    (nD ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, d = t = e(o, s, f);
  return f;
}, rD = (e) => e ? g1(e) : g1, { useDebugValue: oD } = Un, { useSyncExternalStoreWithSelector: iD } = tD, sD = (e) => e;
function QN(e, t = sD, r) {
  const o = iD(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return oD(o), o;
}
const v1 = (e, t) => {
  const r = rD(e), o = (s, a = t) => QN(r, s, a);
  return Object.assign(o, r), o;
}, aD = (e, t) => e ? v1(e, t) : v1;
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
var Vs = Hk();
const lD = /* @__PURE__ */ ry(Vs), pu = N.createContext(null), uD = pu.Provider, ZN = Tn.error001();
function Ie(e, t) {
  const r = N.useContext(pu);
  if (r === null)
    throw new Error(ZN);
  return QN(r, e, t);
}
function $e() {
  const e = N.useContext(pu);
  if (e === null)
    throw new Error(ZN);
  return N.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const y1 = { display: "none" }, cD = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, JN = "react-flow__node-desc", eR = "react-flow__edge-desc", fD = "react-flow__aria-live", dD = (e) => e.ariaLiveMessage, hD = (e) => e.ariaLabelConfig;
function pD({ rfId: e }) {
  const t = Ie(dD);
  return I.jsx("div", { id: `${fD}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: cD, children: t });
}
function mD({ rfId: e, disableKeyboardA11y: t }) {
  const r = Ie(hD);
  return I.jsxs(I.Fragment, { children: [I.jsx("div", { id: `${JN}-${e}`, style: y1, children: t ? r["node.a11yDescription.default"] : r["node.a11yDescription.keyboardDisabled"] }), I.jsx("div", { id: `${eR}-${e}`, style: y1, children: r["edge.a11yDescription.default"] }), !t && I.jsx(pD, { rfId: e })] });
}
const mu = N.forwardRef(({ position: e = "top-left", children: t, className: r, style: o, ...s }, a) => {
  const l = `${e}`.split("-");
  return I.jsx("div", { className: nt(["react-flow__panel", r, ...l]), style: o, ref: a, ...s, children: t });
});
mu.displayName = "Panel";
function gD({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : I.jsx(mu, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: I.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const vD = (e) => {
  const t = [], r = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && r.push(o);
  return { selectedNodes: t, selectedEdges: r };
}, _l = (e) => e.id;
function yD(e, t) {
  return Ke(e.selectedNodes.map(_l), t.selectedNodes.map(_l)) && Ke(e.selectedEdges.map(_l), t.selectedEdges.map(_l));
}
function wD({ onSelectionChange: e }) {
  const t = $e(), { selectedNodes: r, selectedEdges: o } = Ie(vD, yD);
  return N.useEffect(() => {
    const s = { nodes: r, edges: o };
    e == null || e(s), t.getState().onSelectionChangeHandlers.forEach((a) => a(s));
  }, [r, o, e]), null;
}
const xD = (e) => !!e.onSelectionChangeHandlers;
function _D({ onSelectionChange: e }) {
  const t = Ie(xD);
  return e || t ? I.jsx(wD, { onSelectionChange: e }) : null;
}
const tR = [0, 0], bD = { x: 0, y: 0, zoom: 1 }, SD = [
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
], w1 = [...SD, "rfId"], ED = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), x1 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Ns,
  nodeOrigin: tR,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function CD(e) {
  const { setNodes: t, setEdges: r, setMinZoom: o, setMaxZoom: s, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ie(ED, Ke), d = $e();
  N.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = x1, u();
  }), []);
  const h = N.useRef(x1);
  return N.useEffect(
    () => {
      for (const m of w1) {
        const g = e[m], w = h.current[m];
        g !== w && (typeof e[m] > "u" || (m === "nodes" ? t(g) : m === "edges" ? r(g) : m === "minZoom" ? o(g) : m === "maxZoom" ? s(g) : m === "translateExtent" ? a(g) : m === "nodeExtent" ? l(g) : m === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: aq(g) }) : m === "fitView" ? d.setState({ fitViewQueued: g }) : m === "fitViewOptions" ? d.setState({ fitViewOptions: g }) : d.setState({ [m]: g })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    w1.map((m) => e[m])
  ), null;
}
function _1() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function kD(e) {
  var o;
  const [t, r] = N.useState(e === "system" ? null : e);
  return N.useEffect(() => {
    if (e !== "system") {
      r(e);
      return;
    }
    const s = _1(), a = () => r(s != null && s.matches ? "dark" : "light");
    return a(), s == null || s.addEventListener("change", a), () => {
      s == null || s.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = _1()) != null && o.matches ? "dark" : "light";
}
const b1 = typeof document < "u" ? document : null;
function Is(e = null, t = { target: b1, actInsideInputWithModifier: !0 }) {
  const [r, o] = N.useState(!1), s = N.useRef(!1), a = N.useRef(/* @__PURE__ */ new Set([])), [l, u] = N.useMemo(() => {
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
  return N.useEffect(() => {
    const f = (t == null ? void 0 : t.target) ?? b1, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (w) => {
        var x, S;
        if (s.current = w.ctrlKey || w.metaKey || w.shiftKey || w.altKey, (!s.current || s.current && !d) && ON(w))
          return !1;
        const y = E1(w.code, u);
        if (a.current.add(w[y]), S1(l, a.current, !1)) {
          const C = ((S = (x = w.composedPath) == null ? void 0 : x.call(w)) == null ? void 0 : S[0]) || w.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (s.current || !_) && w.preventDefault(), o(!0);
        }
      }, m = (w) => {
        const E = E1(w.code, u);
        S1(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(w[E]), w.key === "Meta" && a.current.clear(), s.current = !1;
      }, g = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", m), window.addEventListener("blur", g), window.addEventListener("contextmenu", g), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", m), window.removeEventListener("blur", g), window.removeEventListener("contextmenu", g);
      };
    }
  }, [e, o]), r;
}
function S1(e, t, r) {
  return e.filter((o) => r || o.length === t.size).some((o) => o.every((s) => t.has(s)));
}
function E1(e, t) {
  return t.includes(e) ? "code" : "key";
}
const ND = () => {
  const e = $e();
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
      const { width: o, height: s, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = py(t, o, s, a, l, (r == null ? void 0 : r.padding) ?? 0.1);
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
      const { x: s, y: a } = o.getBoundingClientRect(), l = Yl(t, r);
      return {
        x: l.x + s,
        y: l.y + a
      };
    }
  }), []);
};
function nR(e, t) {
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
      RD(f, u);
    r.push(u);
  }
  return s.length && s.forEach((a) => {
    a.index !== void 0 ? r.splice(a.index, 0, { ...a.item }) : r.push({ ...a.item });
  }), r;
}
function RD(e, t) {
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
function PD(e, t) {
  return nR(e, t);
}
function TD(e, t) {
  return nR(e, t);
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
function C1({ items: e = [], lookup: t }) {
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
function k1(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const N1 = (e) => QL(e), AD = (e) => kN(e);
function rR(e) {
  return N.forwardRef(e);
}
const ID = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function R1(e) {
  const [t, r] = N.useState(BigInt(0)), [o] = N.useState(() => MD(() => r((s) => s + BigInt(1))));
  return ID(() => {
    const s = o.get();
    s.length && (e(s), o.reset());
  }, [t]), o;
}
function MD(e) {
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
const oR = N.createContext(null);
function OD({ children: e }) {
  const t = $e(), r = N.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: m, nodeLookup: g, fitViewQueued: w } = t.getState();
    let E = f;
    for (const x of u)
      E = typeof x == "function" ? x(E) : x;
    const y = C1({
      items: E,
      lookup: g
    });
    h && d(E), y.length > 0 ? m == null || m(y) : w && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: S, setNodes: C } = t.getState();
      x && C(S);
    });
  }, []), o = R1(r), s = N.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: m, edgeLookup: g } = t.getState();
    let w = f;
    for (const E of u)
      w = typeof E == "function" ? E(w) : E;
    h ? d(w) : m && m(C1({
      items: w,
      lookup: g
    }));
  }, []), a = R1(s), l = N.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return I.jsx(oR.Provider, { value: l, children: e });
}
function LD() {
  const e = N.useContext(oR);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const qD = (e) => !!e.panZoom;
function xy() {
  const e = ND(), t = $e(), r = LD(), o = Ie(qD), s = N.useMemo(() => {
    const a = (m) => t.getState().nodeLookup.get(m), l = (m) => {
      r.nodeQueue.push(m);
    }, u = (m) => {
      r.edgeQueue.push(m);
    }, f = (m) => {
      var S, C;
      const { nodeLookup: g, nodeOrigin: w } = t.getState(), E = N1(m) ? m : g.get(m.id), y = E.parentId ? IN(E.position, E.measured, E.parentId, g, w) : E.position, x = {
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
          return w.replace && N1(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (m, g, w = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === m) {
          const x = typeof g == "function" ? g(y) : g;
          return w.replace && AD(x) ? x : { ...y, ...x };
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
        const { nodes: w, edges: E, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: S, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: k } = t.getState(), { nodes: R, edges: T } = await nq({
          nodesToRemove: m,
          edgesToRemove: g,
          nodes: w,
          edges: E,
          onBeforeDelete: k
        }), A = T.length > 0, O = R.length > 0;
        if (A) {
          const D = T.map(k1);
          x == null || x(T), C(D);
        }
        if (O) {
          const D = R.map(k1);
          y == null || y(R), S(D);
        }
        return (O || A) && (_ == null || _({ nodes: R, edges: T })), { deletedNodes: R, deletedEdges: T };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (m, g = !0, w) => {
        const E = Jx(m), y = E ? m : f(m), x = w !== void 0;
        return y ? (w || t.getState().nodes).filter((S) => {
          const C = t.getState().nodeLookup.get(S.id);
          if (C && !E && (S.id === m.id || !C.internals.positionAbsolute))
            return !1;
          const _ = ai(x ? S : C), k = Ps(_, y);
          return g && k > 0 || k >= _.width * _.height || k >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (m, g, w = !0) => {
        const y = Jx(m) ? m : f(m);
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
        return ZL(m, { nodeLookup: g, nodeOrigin: w });
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
        const g = t.getState().fitViewResolver ?? sq();
        return t.setState({ fitViewQueued: !0, fitViewOptions: m, fitViewResolver: g }), r.nodeQueue.push((w) => [...w]), g.promise;
      }
    };
  }, []);
  return N.useMemo(() => ({
    ...s,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const P1 = (e) => e.selected, DD = typeof window < "u" ? window : void 0;
function jD({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const r = $e(), { deleteElements: o } = xy(), s = Is(e, { actInsideInputWithModifier: !1 }), a = Is(t, { target: DD });
  N.useEffect(() => {
    if (s) {
      const { edges: l, nodes: u } = r.getState();
      o({ nodes: u.filter(P1), edges: l.filter(P1) }), r.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), N.useEffect(() => {
    r.setState({ multiSelectionActive: a });
  }, [a]);
}
function zD(e) {
  const t = $e();
  N.useEffect(() => {
    const r = () => {
      var s, a, l, u;
      if (!e.current || !(((a = (s = e.current).checkVisibility) == null ? void 0 : a.call(s)) ?? !0))
        return !1;
      const o = my(e.current);
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
const gu = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, FD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function $D({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: r = !0, panOnScroll: o = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: a = ro.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: m, zoomActivationKeyCode: g, preventScrolling: w = !0, children: E, noWheelClassName: y, noPanClassName: x, onViewportChange: S, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: k }) {
  const R = $e(), T = N.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: D } = Ie(FD, Ke), G = Is(g), B = N.useRef();
  zD(T);
  const V = N.useCallback((X) => {
    S == null || S({ x: X[0], y: X[1], zoom: X[2] }), C || R.setState({ transform: X });
  }, [S, C]);
  return N.useEffect(() => {
    if (T.current) {
      B.current = Vq({
        domNode: T.current,
        minZoom: h,
        maxZoom: m,
        translateExtent: d,
        viewport: f,
        onDraggingChange: ($) => R.setState({ paneDragging: $ }),
        onPanZoomStart: ($, Y) => {
          const { onViewportChangeStart: M, onMoveStart: j } = R.getState();
          j == null || j($, Y), M == null || M(Y);
        },
        onPanZoom: ($, Y) => {
          const { onViewportChange: M, onMove: j } = R.getState();
          j == null || j($, Y), M == null || M(Y);
        },
        onPanZoomEnd: ($, Y) => {
          const { onViewportChangeEnd: M, onMoveEnd: j } = R.getState();
          j == null || j($, Y), M == null || M(Y);
        }
      });
      const { x: X, y: L, zoom: H } = B.current.getViewport();
      return R.setState({
        panZoom: B.current,
        transform: [X, L, H],
        domNode: T.current.closest(".react-flow")
      }), () => {
        var $;
        ($ = B.current) == null || $.destroy();
      };
    }
  }, []), N.useEffect(() => {
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
  ]), I.jsx("div", { className: "react-flow__renderer", ref: T, style: gu, children: E });
}
const BD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function VD() {
  const { userSelectionActive: e, userSelectionRect: t } = Ie(BD, Ke);
  return e && t ? I.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const td = (e, t) => (r) => {
  r.target === t.current && (e == null || e(r));
}, HD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function WD({ isSelecting: e, selectionKeyPressed: t, selectionMode: r = Rs.Full, panOnDrag: o, paneClickDistance: s, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: m, onPaneMouseMove: g, onPaneMouseLeave: w, children: E }) {
  const y = $e(), { userSelectionActive: x, elementsSelectable: S, dragging: C, connectionInProgress: _ } = Ie(HD, Ke), k = S && (e || x), R = N.useRef(null), T = N.useRef(), A = N.useRef(/* @__PURE__ */ new Set()), O = N.useRef(/* @__PURE__ */ new Set()), D = N.useRef(!1), G = (M) => {
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
    if (T.current = j == null ? void 0 : j.getBoundingClientRect(), !T.current)
      return;
    const Q = M.target === R.current;
    if (!Q && !!M.target.closest(".nokey") || !e || !(a && Q || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), D.current = !1;
    const { x: ie, y: F } = hn(M.nativeEvent, T.current);
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
    if (!T.current || !j)
      return;
    const { x: te, y: se } = hn(M.nativeEvent, T.current), { startX: ae, startY: ce } = j;
    if (!D.current) {
      const Re = t ? 0 : s;
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
    }, pe = A.current, be = O.current;
    A.current = new Set(hy(q, de, Q, r === Rs.Partial, !0).map((Re) => Re.id)), O.current = /* @__PURE__ */ new Set();
    const ge = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Re of A.current) {
      const Ee = ie.get(Re);
      if (Ee)
        for (const { edgeId: Ze } of Ee.values()) {
          const He = W.get(Ze);
          He && (He.selectable ?? ge) && O.current.add(Ze);
        }
    }
    if (!e1(pe, A.current)) {
      const Re = Zo(q, A.current, !0);
      F(Re);
    }
    if (!e1(be, O.current)) {
      const Re = Zo(W, O.current);
      Z(Re);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, $ = (M) => {
    var j, Q;
    M.button === 0 && ((Q = (j = M.target) == null ? void 0 : j.releasePointerCapture) == null || Q.call(j, M.pointerId), !x && M.target === R.current && y.getState().userSelectionRect && (G == null || G(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), D.current && (u == null || u(M), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, Y = o === !0 || Array.isArray(o) && o.includes(0);
  return I.jsxs("div", { className: nt(["react-flow__pane", { draggable: Y, dragging: C, selection: e }]), onClick: k ? void 0 : td(G, R), onContextMenu: td(B, R), onWheel: td(V, R), onPointerEnter: k ? void 0 : m, onPointerMove: k ? H : g, onPointerUp: k ? $ : void 0, onPointerDownCapture: k ? L : void 0, onClickCapture: k ? X : void 0, onPointerLeave: w, ref: R, style: gu, children: [E, I.jsx(VD, {})] });
}
function Hv({ id: e, store: t, unselect: r = !1, nodeRef: o }) {
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
function iR({ nodeRef: e, disabled: t = !1, noDragClassName: r, handleSelector: o, nodeId: s, isSelectable: a, nodeClickDistance: l }) {
  const u = $e(), [f, d] = N.useState(!1), h = N.useRef();
  return N.useEffect(() => {
    h.current = Pq({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (m) => {
        Hv({
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
  }, []), N.useEffect(() => {
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
const UD = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function sR() {
  const e = $e();
  return N.useCallback((r) => {
    const { nodeExtent: o, snapToGrid: s, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), m = /* @__PURE__ */ new Map(), g = UD(l), w = s ? a[0] : 5, E = s ? a[1] : 5, y = r.direction.x * w * r.factor, x = r.direction.y * E * r.factor;
    for (const [, S] of d) {
      if (!g(S))
        continue;
      let C = {
        x: S.internals.positionAbsolute.x + y,
        y: S.internals.positionAbsolute.y + x
      };
      s && (C = $s(C, a));
      const { position: _, positionAbsolute: k } = NN({
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
const _y = N.createContext(null), GD = _y.Provider;
_y.Consumer;
const aR = () => N.useContext(_y), YD = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), KD = (e, t, r) => (o) => {
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
function XD({ type: e = "source", position: t = ye.Top, isValidConnection: r, isConnectable: o = !0, isConnectableStart: s = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: m, ...g }, w) {
  var H, $;
  const E = l || null, y = e === "target", x = $e(), S = aR(), { connectOnClick: C, noPanClassName: _, rfId: k } = Ie(YD, Ke), { connectingFrom: R, connectingTo: T, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: D, clickConnectionInProcess: G, valid: B } = Ie(KD(S, E, e), Ke);
  S || ($ = (H = x.getState()).onError) == null || $.call(H, "010", Tn.error010());
  const V = (Y) => {
    const { defaultEdgeOptions: M, onConnect: j, hasDefaultEdges: Q } = x.getState(), q = {
      ...M,
      ...Y
    };
    if (Q) {
      const { edges: W, setEdges: ie } = x.getState();
      ie(hq(q, W));
    }
    j == null || j(q), u == null || u(q);
  }, X = (Y) => {
    if (!S)
      return;
    const M = LN(Y.nativeEvent);
    if (s && (M && Y.button === 0 || !M)) {
      const j = x.getState();
      Vv.onPointerDown(Y.nativeEvent, {
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
    const K = MN(Y.target), te = r || W, { connection: se, isValid: ae } = Vv.isValid(Y.nativeEvent, {
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
      connectingfrom: R,
      connectingto: T,
      valid: B,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!D || O) && (D || G ? a : s)
    }
  ]), onMouseDown: X, onTouchStart: X, onClick: C ? L : void 0, ref: w, ...g, children: f });
}
const Ms = N.memo(rR(XD));
function QD({ data: e, isConnectable: t, sourcePosition: r = ye.Bottom }) {
  return I.jsxs(I.Fragment, { children: [e == null ? void 0 : e.label, I.jsx(Ms, { type: "source", position: r, isConnectable: t })] });
}
function ZD({ data: e, isConnectable: t, targetPosition: r = ye.Top, sourcePosition: o = ye.Bottom }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(Ms, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label, I.jsx(Ms, { type: "source", position: o, isConnectable: t })] });
}
function JD() {
  return null;
}
function ej({ data: e, isConnectable: t, targetPosition: r = ye.Top }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(Ms, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Kl = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, T1 = {
  input: QD,
  default: ZD,
  output: ej,
  group: JD
};
function tj(e) {
  var t, r, o, s;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((r = e.style) == null ? void 0 : r.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((s = e.style) == null ? void 0 : s.height)
  };
}
const nj = (e) => {
  const { width: t, height: r, x: o, y: s } = Fs(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: dn(t) ? t : null,
    height: dn(r) ? r : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${s}px)`
  };
};
function rj({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: r }) {
  const o = $e(), { width: s, height: a, transformString: l, userSelectionActive: u } = Ie(nj, Ke), f = sR(), d = N.useRef(null);
  if (N.useEffect(() => {
    var g;
    r || (g = d.current) == null || g.focus({
      preventScroll: !0
    });
  }, [r]), iR({
    nodeRef: d
  }), u || !s || !a)
    return null;
  const h = e ? (g) => {
    const w = o.getState().nodes.filter((E) => E.selected);
    e(g, w);
  } : void 0, m = (g) => {
    Object.prototype.hasOwnProperty.call(Kl, g.key) && (g.preventDefault(), f({
      direction: Kl[g.key],
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
const A1 = typeof window < "u" ? window : void 0, oj = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function lR({ children: e, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: m, onSelectionStart: g, onSelectionEnd: w, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: k, panOnScrollSpeed: R, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, preventScrolling: X, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: $, disableKeyboardA11y: Y, onViewportChange: M, isControlledViewport: j }) {
  const { nodesSelectionActive: Q, userSelectionActive: q } = Ie(oj), W = Is(d, { target: A1 }), ie = Is(y, { target: A1 }), F = ie || O, Z = ie || k, ee = h && F !== !0, K = W || q || ee;
  return jD({ deleteKeyCode: f, multiSelectionKeyCode: E }), I.jsx($D, { onPaneContextMenu: a, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: R, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !W && F, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: X, noWheelClassName: H, noPanClassName: $, onViewportChange: M, isControlledViewport: j, paneClickDistance: u, selectionOnDrag: ee, children: I.jsxs(WD, { onSelectionStart: g, onSelectionEnd: w, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: F, isSelecting: !!K, selectionMode: m, selectionKeyPressed: W, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && I.jsx(rj, { onSelectionContextMenu: L, noPanClassName: $, disableKeyboardA11y: Y })] }) });
}
lR.displayName = "FlowRenderer";
const ij = N.memo(lR), sj = (e) => (t) => e ? hy(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((r) => r.id) : Array.from(t.nodeLookup.keys());
function aj(e) {
  return Ie(N.useCallback(sj(e), [e]), Ke);
}
const lj = (e) => e.updateNodeInternals;
function uj() {
  const e = Ie(lj), [t] = N.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((r) => {
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
function cj({ node: e, nodeType: t, hasDimensions: r, resizeObserver: o }) {
  const s = $e(), a = N.useRef(null), l = N.useRef(null), u = N.useRef(e.sourcePosition), f = N.useRef(e.targetPosition), d = N.useRef(t), h = r && !!e.internals.handleBounds;
  return N.useEffect(() => {
    a.current && !e.hidden && (!h || l.current !== a.current) && (l.current && (o == null || o.unobserve(l.current)), o == null || o.observe(a.current), l.current = a.current);
  }, [h, e.hidden]), N.useEffect(() => () => {
    l.current && (o == null || o.unobserve(l.current), l.current = null);
  }, []), N.useEffect(() => {
    if (a.current) {
      const m = d.current !== t, g = u.current !== e.sourcePosition, w = f.current !== e.targetPosition;
      (m || g || w) && (d.current = t, u.current = e.sourcePosition, f.current = e.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: a.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), a;
}
function fj({ id: e, onClick: t, onMouseEnter: r, onMouseMove: o, onMouseLeave: s, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: m, noDragClassName: g, noPanClassName: w, disableKeyboardA11y: E, rfId: y, nodeTypes: x, nodeClickDistance: S, onError: C }) {
  const { node: _, internals: k, isParent: R } = Ie((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Ke);
  let T = _.type || "default", A = (x == null ? void 0 : x[T]) || T1[T];
  A === void 0 && (C == null || C("003", Tn.error003(T)), T = "default", A = (x == null ? void 0 : x.default) || T1.default);
  const O = !!(_.draggable || u && typeof _.draggable > "u"), D = !!(_.selectable || f && typeof _.selectable > "u"), G = !!(_.connectable || d && typeof _.connectable > "u"), B = !!(_.focusable || h && typeof _.focusable > "u"), V = $e(), X = AN(_), L = cj({ node: _, nodeType: T, hasDimensions: X, resizeObserver: m }), H = iR({
    nodeRef: L,
    disabled: _.hidden || !O,
    noDragClassName: g,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: D,
    nodeClickDistance: S
  }), $ = sR();
  if (_.hidden)
    return null;
  const Y = Qn(_), M = tj(_), j = D || O || t || r || o || s, Q = r ? (te) => r(te, { ...k.userNode }) : void 0, q = o ? (te) => o(te, { ...k.userNode }) : void 0, W = s ? (te) => s(te, { ...k.userNode }) : void 0, ie = a ? (te) => a(te, { ...k.userNode }) : void 0, F = l ? (te) => l(te, { ...k.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    D && (!se || !O || ae > 0) && Hv({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...k.userNode });
  }, ee = (te) => {
    if (!(ON(te.nativeEvent) || E)) {
      if (bN.includes(te.key) && D) {
        const se = te.key === "Escape";
        Hv({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && _.selected && Object.prototype.hasOwnProperty.call(Kl, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~k.positionAbsolute.x,
            y: ~~k.positionAbsolute.y
          })
        }), $({
          direction: Kl[te.key],
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
    hy(/* @__PURE__ */ new Map([[e, _]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(_.position.x + Y.width / 2, _.position.y + Y.height / 2, {
      zoom: te[2]
    });
  };
  return I.jsx("div", { className: nt([
    "react-flow__node",
    `react-flow__node-${T}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [w]: O
    },
    _.className,
    {
      selected: _.selected,
      selectable: D,
      parent: R,
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
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: q, onMouseLeave: W, onContextMenu: ie, onClick: Z, onDoubleClick: F, onKeyDown: B ? ee : void 0, tabIndex: B ? 0 : void 0, onFocus: B ? K : void 0, role: _.ariaRole ?? (B ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${JN}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: I.jsx(GD, { value: e, children: I.jsx(A, { id: e, data: _.data, type: T, positionAbsoluteX: k.positionAbsolute.x, positionAbsoluteY: k.positionAbsolute.y, selected: _.selected ?? !1, selectable: D, draggable: O, deletable: _.deletable ?? !0, isConnectable: G, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: H, dragHandle: _.dragHandle, zIndex: k.z, parentId: _.parentId, ...Y }) }) });
}
var dj = N.memo(fj);
const hj = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function uR(e) {
  const { nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, onError: a } = Ie(hj, Ke), l = aj(e.onlyRenderVisibleElements), u = uj();
  return I.jsx("div", { className: "react-flow__nodes", style: gu, children: l.map((f) => (
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
    I.jsx(dj, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
uR.displayName = "NodeRenderer";
const pj = N.memo(uR);
function mj(e) {
  return Ie(N.useCallback((r) => {
    if (!e)
      return r.edges.map((s) => s.id);
    const o = [];
    if (r.width && r.height)
      for (const s of r.edges) {
        const a = r.nodeLookup.get(s.source), l = r.nodeLookup.get(s.target);
        a && l && cq({
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
const gj = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return I.jsx("polyline", { className: "arrow", style: r, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, vj = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return I.jsx("polyline", { className: "arrowclosed", style: r, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, I1 = {
  [Ul.Arrow]: gj,
  [Ul.ArrowClosed]: vj
};
function yj(e) {
  const t = $e();
  return N.useMemo(() => {
    var s, a;
    return Object.prototype.hasOwnProperty.call(I1, e) ? I1[e] : ((a = (s = t.getState()).onError) == null || a.call(s, "009", Tn.error009(e)), null);
  }, [e]);
}
const wj = ({ id: e, type: t, color: r, width: o = 12.5, height: s = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = yj(t);
  return f ? I.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: I.jsx(f, { color: r, strokeWidth: l }) }) : null;
}, cR = ({ defaultColor: e, rfId: t }) => {
  const r = Ie((a) => a.edges), o = Ie((a) => a.defaultEdgeOptions), s = N.useMemo(() => yq(r, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [r, o, t, e]);
  return s.length ? I.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: I.jsx("defs", { children: s.map((a) => I.jsx(wj, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
cR.displayName = "MarkerDefinitions";
var xj = N.memo(cR);
function fR({ x: e, y: t, label: r, labelStyle: o, labelShowBg: s = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
  const [m, g] = N.useState({ x: 1, y: 0, width: 0, height: 0 }), w = nt(["react-flow__edge-textwrapper", d]), E = N.useRef(null);
  return N.useEffect(() => {
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
fR.displayName = "EdgeText";
const _j = N.memo(fR);
function vu({ path: e, labelX: t, labelY: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return I.jsxs(I.Fragment, { children: [I.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? I.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && dn(t) && dn(r) ? I.jsx(_j, { x: t, y: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function M1({ pos: e, x1: t, y1: r, x2: o, y2: s }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), r] : [t, 0.5 * (r + s)];
}
function dR({ sourceX: e, sourceY: t, sourcePosition: r = ye.Bottom, targetX: o, targetY: s, targetPosition: a = ye.Top }) {
  const [l, u] = M1({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s
  }), [f, d] = M1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t
  }), [h, m, g, w] = qN({
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
function hR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S }) => {
    const [C, _, k] = dR({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u
    }), R = e.isInternal ? void 0 : t;
    return I.jsx(vu, { id: R, path: C, labelX: _, labelY: k, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S });
  });
}
const bj = hR({ isInternal: !1 }), pR = hR({ isInternal: !0 });
bj.displayName = "SimpleBezierEdge";
pR.displayName = "SimpleBezierEdgeInternal";
function mR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, sourcePosition: w = ye.Bottom, targetPosition: E = ye.Top, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, R] = Fv({
      sourceX: r,
      sourceY: o,
      sourcePosition: w,
      targetX: s,
      targetY: a,
      targetPosition: E,
      borderRadius: S == null ? void 0 : S.borderRadius,
      offset: S == null ? void 0 : S.offset,
      stepPosition: S == null ? void 0 : S.stepPosition
    }), T = e.isInternal ? void 0 : t;
    return I.jsx(vu, { id: T, path: _, labelX: k, labelY: R, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const gR = mR({ isInternal: !1 }), vR = mR({ isInternal: !0 });
gR.displayName = "SmoothStepEdge";
vR.displayName = "SmoothStepEdgeInternal";
function yR(e) {
  return N.memo(({ id: t, ...r }) => {
    var s;
    const o = e.isInternal ? void 0 : t;
    return I.jsx(gR, { ...r, id: o, pathOptions: N.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = r.pathOptions) == null ? void 0 : a.offset };
    }, [(s = r.pathOptions) == null ? void 0 : s.offset]) });
  });
}
const Sj = yR({ isInternal: !1 }), wR = yR({ isInternal: !0 });
Sj.displayName = "StepEdge";
wR.displayName = "StepEdgeInternal";
function xR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: w, markerStart: E, interactionWidth: y }) => {
    const [x, S, C] = zN({ sourceX: r, sourceY: o, targetX: s, targetY: a }), _ = e.isInternal ? void 0 : t;
    return I.jsx(vu, { id: _, path: x, labelX: S, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: w, markerStart: E, interactionWidth: y });
  });
}
const Ej = xR({ isInternal: !1 }), _R = xR({ isInternal: !0 });
Ej.displayName = "StraightEdge";
_R.displayName = "StraightEdgeInternal";
function bR(e) {
  return N.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, R] = DN({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u,
      curvature: S == null ? void 0 : S.curvature
    }), T = e.isInternal ? void 0 : t;
    return I.jsx(vu, { id: T, path: _, labelX: k, labelY: R, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const Cj = bR({ isInternal: !1 }), SR = bR({ isInternal: !0 });
Cj.displayName = "BezierEdge";
SR.displayName = "BezierEdgeInternal";
const O1 = {
  default: SR,
  straight: _R,
  step: wR,
  smoothstep: vR,
  simplebezier: pR
}, L1 = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, kj = (e, t, r) => r === ye.Left ? e - t : r === ye.Right ? e + t : e, Nj = (e, t, r) => r === ye.Top ? e - t : r === ye.Bottom ? e + t : e, q1 = "react-flow__edgeupdater";
function D1({ position: e, centerX: t, centerY: r, radius: o = 10, onMouseDown: s, onMouseEnter: a, onMouseOut: l, type: u }) {
  return I.jsx("circle", { onMouseDown: s, onMouseEnter: a, onMouseOut: l, className: nt([q1, `${q1}-${u}`]), cx: kj(t, o, e), cy: Nj(r, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function Rj({ isReconnectable: e, reconnectRadius: t, edge: r, sourceX: o, sourceY: s, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: m, setReconnecting: g, setUpdateHover: w }) {
  const E = $e(), y = (k, R) => {
    if (k.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: A, isValidConnection: O, connectionMode: D, connectionRadius: G, lib: B, onConnectStart: V, onConnectEnd: X, cancelConnection: L, nodeLookup: H, rfId: $, panBy: Y, updateConnection: M } = E.getState(), j = R.type === "target", Q = (ie, F) => {
      g(!1), m == null || m(ie, r, R.type, F);
    }, q = (ie) => d == null ? void 0 : d(r, ie), W = (ie, F) => {
      g(!0), h == null || h(k, r, R.type), V == null || V(ie, F);
    };
    Vv.onPointerDown(k.nativeEvent, {
      autoPanOnConnect: T,
      connectionMode: D,
      connectionRadius: G,
      domNode: A,
      handleId: R.id,
      nodeId: R.nodeId,
      nodeLookup: H,
      isTarget: j,
      edgeUpdaterType: R.type,
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
  return I.jsxs(I.Fragment, { children: [(e === !0 || e === "source") && I.jsx(D1, { position: u, centerX: o, centerY: s, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && I.jsx(D1, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: S, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function Pj({ id: e, edgesFocusable: t, edgesReconnectable: r, elementsSelectable: o, onClick: s, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: m, onReconnectStart: g, onReconnectEnd: w, rfId: E, edgeTypes: y, noPanClassName: x, onError: S, disableKeyboardA11y: C }) {
  let _ = Ie((de) => de.edgeLookup.get(e));
  const k = Ie((de) => de.defaultEdgeOptions);
  _ = k ? { ...k, ..._ } : _;
  let R = _.type || "default", T = (y == null ? void 0 : y[R]) || O1[R];
  T === void 0 && (S == null || S("011", Tn.error011(R)), R = "default", T = (y == null ? void 0 : y.default) || O1.default);
  const A = !!(_.focusable || t && typeof _.focusable > "u"), O = typeof m < "u" && (_.reconnectable || r && typeof _.reconnectable > "u"), D = !!(_.selectable || o && typeof _.selectable > "u"), G = N.useRef(null), [B, V] = N.useState(!1), [X, L] = N.useState(!1), H = $e(), { zIndex: $, sourceX: Y, sourceY: M, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W } = Ie(N.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), be = de.nodeLookup.get(_.target);
    if (!pe || !be)
      return {
        zIndex: _.zIndex,
        ...L1
      };
    const ge = vq({
      id: e,
      sourceNode: pe,
      targetNode: be,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: S
    });
    return {
      zIndex: uq({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: be,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...ge || L1
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Ke), ie = N.useMemo(() => _.markerStart ? `url('#${$v(_.markerStart, E)}')` : void 0, [_.markerStart, E]), F = N.useMemo(() => _.markerEnd ? `url('#${$v(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || Y === null || M === null || j === null || Q === null)
    return null;
  const Z = (de) => {
    var Re;
    const { addSelectedEdges: pe, unselectNodesAndEdges: be, multiSelectionActive: ge } = H.getState();
    D && (H.setState({ nodesSelectionActive: !1 }), _.selected && ge ? (be({ nodes: [], edges: [_] }), (Re = G.current) == null || Re.blur()) : pe([e])), s && s(de, _);
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
    if (!C && bN.includes(de.key) && D) {
      const { unselectNodesAndEdges: be, addSelectedEdges: ge } = H.getState();
      de.key === "Escape" ? ((pe = G.current) == null || pe.blur(), be({ edges: [_] })) : ge([e]);
    }
  };
  return I.jsx("svg", { style: { zIndex: $ }, children: I.jsxs("g", { className: nt([
    "react-flow__edge",
    `react-flow__edge-${R}`,
    _.className,
    x,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !D && !s,
      updating: B,
      selectable: D
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: K, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: _.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": A ? `${eR}-${E}` : void 0, ref: G, ..._.domAttributes, children: [!X && I.jsx(T, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: D, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: Y, sourceY: M, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: F, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), O && I.jsx(Rj, { edge: _, isReconnectable: O, reconnectRadius: h, onReconnect: m, onReconnectStart: g, onReconnectEnd: w, sourceX: Y, sourceY: M, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W, setUpdateHover: V, setReconnecting: L })] }) });
}
var Tj = N.memo(Pj);
const Aj = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function ER({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: r, edgeTypes: o, noPanClassName: s, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: m, onEdgeDoubleClick: g, onReconnectStart: w, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, onError: _ } = Ie(Aj, Ke), k = mj(t);
  return I.jsxs("div", { className: "react-flow__edges", children: [I.jsx(xj, { defaultColor: e, rfId: r }), k.map((R) => I.jsx(Tj, { id: R, edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, noPanClassName: s, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: m, onDoubleClick: g, onReconnectStart: w, onReconnectEnd: E, rfId: r, onError: _, edgeTypes: o, disableKeyboardA11y: y }, R))] });
}
ER.displayName = "EdgeRenderer";
const Ij = N.memo(ER), Mj = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Oj({ children: e }) {
  const t = Ie(Mj);
  return I.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function Lj(e) {
  const t = xy(), r = N.useRef(!1);
  N.useEffect(() => {
    !r.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), r.current = !0);
  }, [e, t.viewportInitialized]);
}
const qj = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function Dj(e) {
  const t = Ie(qj), r = $e();
  return N.useEffect(() => {
    e && (t == null || t(e), r.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function jj(e) {
  return e.connection.inProgress ? { ...e.connection, to: Bs(e.connection.to, e.transform) } : { ...e.connection };
}
function zj(e) {
  return jj;
}
function Fj(e) {
  const t = zj();
  return Ie(t, Ke);
}
const $j = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function Bj({ containerStyle: e, style: t, type: r, component: o }) {
  const { nodesConnectable: s, width: a, height: l, isValid: u, inProgress: f } = Ie($j, Ke);
  return !(a && s && f) ? null : I.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: I.jsx("g", { className: nt(["react-flow__connection", CN(u)]), children: I.jsx(CR, { style: t, type: r, CustomComponent: o, isValid: u }) }) });
}
const CR = ({ style: e, type: t = kr.Bezier, CustomComponent: r, isValid: o }) => {
  const { inProgress: s, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: m, toPosition: g, pointer: w } = Fj();
  if (!s)
    return;
  if (r)
    return I.jsx(r, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: g, connectionStatus: CN(o), toNode: h, toHandle: m, pointer: w });
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
      [E] = DN(y);
      break;
    case kr.SimpleBezier:
      [E] = dR(y);
      break;
    case kr.Step:
      [E] = Fv({
        ...y,
        borderRadius: 0
      });
      break;
    case kr.SmoothStep:
      [E] = Fv(y);
      break;
    default:
      [E] = zN(y);
  }
  return I.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
CR.displayName = "ConnectionLine";
const Vj = {};
function j1(e = Vj) {
  N.useRef(e), $e(), N.useEffect(() => {
  }, [e]);
}
function Hj() {
  $e(), N.useRef(!1), N.useEffect(() => {
  }, []);
}
function kR({ nodeTypes: e, edgeTypes: t, onInit: r, onNodeClick: o, onEdgeClick: s, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: m, onSelectionStart: g, onSelectionEnd: w, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: S, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, multiSelectionKeyCode: R, panActivationKeyCode: T, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: D, elementsSelectable: G, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, preventScrolling: H, defaultMarkerColor: $, zoomOnScroll: Y, zoomOnPinch: M, panOnScroll: j, panOnScrollSpeed: Q, panOnScrollMode: q, zoomOnDoubleClick: W, panOnDrag: ie, onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ge, reconnectRadius: Re, onReconnect: Ee, onReconnectStart: Ze, onReconnectEnd: He, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: We, nodeExtent: en, rfId: $t, viewport: tn, onViewportChange: Bt }) {
  return j1(e), j1(t), Hj(), Lj(r), Dj(tn), I.jsx(ij, { onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, onSelectionStart: g, onSelectionEnd: w, multiSelectionKeyCode: R, panActivationKeyCode: T, zoomActivationKeyCode: A, elementsSelectable: G, zoomOnScroll: Y, zoomOnPinch: M, zoomOnDoubleClick: W, panOnScroll: j, panOnScrollSpeed: Q, panOnScrollMode: q, panOnDrag: ie, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, onSelectionContextMenu: m, preventScrolling: H, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: We, onViewportChange: Bt, isControlledViewport: !!tn, children: I.jsxs(Oj, { children: [I.jsx(Ij, { edgeTypes: t, onEdgeClick: s, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Ze, onReconnectEnd: He, onlyRenderVisibleElements: D, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ge, reconnectRadius: Re, defaultMarkerColor: $, noPanClassName: at, disableKeyboardA11y: We, rfId: $t }), I.jsx(Bj, { style: y, type: E, component: x, containerStyle: S }), I.jsx("div", { className: "react-flow__edgelabel-renderer" }), I.jsx(pj, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: D, noPanClassName: at, noDragClassName: Ft, disableKeyboardA11y: We, nodeExtent: en, rfId: $t }), I.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
kR.displayName = "GraphView";
const Wj = N.memo(kR), z1 = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: m } = {}) => {
  const g = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], S = r ?? e ?? [], C = h ?? [0, 0], _ = m ?? Ns;
  BN(E, y, x);
  const k = Bv(S, g, w, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let R = [0, 0, 1];
  if (l && s && a) {
    const T = Fs(g, {
      filter: (G) => !!((G.width || G.initialWidth) && (G.height || G.initialHeight))
    }), { x: A, y: O, zoom: D } = py(T, s, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    R = [A, O, D];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: a ?? 0,
    transform: R,
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
    translateExtent: Ns,
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
    connection: { ...EN },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: rq,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: SN
  };
}, Uj = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: m }) => aD((g, w) => {
  async function E() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: S, fitViewResolver: C, width: _, height: k, minZoom: R, maxZoom: T } = w();
    x && (await tq({
      nodes: y,
      width: _,
      height: k,
      panZoom: x,
      minZoom: R,
      maxZoom: T
    }, S), C == null || C.resolve(!0), g({ fitViewResolver: null }));
  }
  return {
    ...z1({
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
      const { nodeLookup: x, parentLookup: S, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: k } = w(), R = Bv(y, x, S, {
        nodeOrigin: C,
        nodeExtent: m,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      k && R ? (E(), g({ nodes: y, nodesInitialized: R, fitViewQueued: !1, fitViewOptions: void 0 })) : g({ nodes: y, nodesInitialized: R });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: S } = w();
      BN(x, S, y), g({ edges: y });
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
      const { triggerNodeChanges: x, nodeLookup: S, parentLookup: C, domNode: _, nodeOrigin: k, nodeExtent: R, debug: T, fitViewQueued: A } = w(), { changes: O, updatedInternals: D } = Cq(y, S, C, _, k, R);
      D && (_q(S, C, { nodeOrigin: k, nodeExtent: R }), A ? (E(), g({ fitViewQueued: !1, fitViewOptions: void 0 })) : g({}), (O == null ? void 0 : O.length) > 0 && (T && console.log("React Flow: trigger node changes", O), x == null || x(O)));
    },
    updateNodePositions: (y, x = !1) => {
      const S = [], C = [], { nodeLookup: _, triggerNodeChanges: k } = w();
      for (const [R, T] of y) {
        const A = _.get(R), O = !!(A != null && A.expandParent && (A != null && A.parentId) && (T != null && T.position)), D = {
          id: R,
          type: "position",
          position: O ? {
            x: Math.max(0, T.position.x),
            y: Math.max(0, T.position.y)
          } : T.position,
          dragging: x
        };
        O && A.parentId && S.push({
          id: R,
          parentId: A.parentId,
          rect: {
            ...T.internals.positionAbsolute,
            width: T.measured.width ?? 0,
            height: T.measured.height ?? 0
          }
        }), C.push(D);
      }
      if (S.length > 0) {
        const { parentLookup: R, nodeOrigin: T } = w(), A = wy(S, _, R, T);
        C.push(...A);
      }
      k(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: S, nodes: C, hasDefaultNodes: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const R = PD(y, C);
          S(R);
        }
        k && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: S, edges: C, hasDefaultEdges: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const R = TD(y, C);
          S(R);
        }
        k && console.log("React Flow: trigger edge changes", y), x == null || x(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const R = y.map((T) => eo(T, !0));
        _(R);
        return;
      }
      _(Zo(C, /* @__PURE__ */ new Set([...y]), !0)), k(Zo(S));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const R = y.map((T) => eo(T, !0));
        k(R);
        return;
      }
      k(Zo(S, /* @__PURE__ */ new Set([...y]))), _(Zo(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: S, nodes: C, nodeLookup: _, triggerNodeChanges: k, triggerEdgeChanges: R } = w(), T = y || C, A = x || S, O = T.map((G) => {
        const B = _.get(G.id);
        return B && (B.selected = !1), eo(G.id, !1);
      }), D = A.map((G) => eo(G.id, !1));
      k(O), R(D);
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
      const k = x.reduce((T, A) => A.selected ? [...T, eo(A.id, !1)] : T, []), R = y.reduce((T, A) => A.selected ? [...T, eo(A.id, !1)] : T, []);
      S(k), C(R);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: S, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: k, nodeExtent: R } = w();
      y[0][0] === R[0][0] && y[0][1] === R[0][1] && y[1][0] === R[1][0] && y[1][1] === R[1][1] || (Bv(x, S, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: k,
        checkEquality: !1
      }), g({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: S, height: C, panZoom: _, translateExtent: k } = w();
      return kq({ delta: y, panZoom: _, transform: x, translateExtent: k, width: S, height: C });
    },
    setCenter: async (y, x, S) => {
      const { width: C, height: _, maxZoom: k, panZoom: R } = w();
      if (!R)
        return Promise.resolve(!1);
      const T = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : k;
      return await R.setViewport({
        x: C / 2 - y * T,
        y: _ / 2 - x * T,
        zoom: T
      }, { duration: S == null ? void 0 : S.duration, ease: S == null ? void 0 : S.ease, interpolate: S == null ? void 0 : S.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      g({
        connection: { ...EN }
      });
    },
    updateConnection: (y) => {
      g({ connection: y });
    },
    reset: () => g({ ...z1() })
  };
}, Object.is);
function NR({ initialNodes: e, initialEdges: t, defaultNodes: r, defaultEdges: o, initialWidth: s, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: m, children: g }) {
  const [w] = N.useState(() => Uj({
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
  return I.jsx(uD, { value: w, children: I.jsx(OD, { children: g }) });
}
function Gj({ children: e, nodes: t, edges: r, defaultNodes: o, defaultEdges: s, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: m, nodeExtent: g }) {
  return N.useContext(pu) ? I.jsx(I.Fragment, { children: e }) : I.jsx(NR, { initialNodes: t, initialEdges: r, defaultNodes: o, defaultEdges: s, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: m, nodeExtent: g, children: e });
}
const Yj = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function Kj({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, className: s, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: m, onMoveEnd: g, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: R, onNodeDoubleClick: T, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onSelectionChange: X, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: $, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: j, onBeforeDelete: Q, connectionMode: q, connectionLineType: W = kr.Bezier, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: K = "Shift", selectionOnDrag: te = !1, selectionMode: se = Rs.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = Ts() ? "Meta" : "Control", zoomActivationKeyCode: de = Ts() ? "Meta" : "Control", snapToGrid: pe, snapGrid: be, onlyRenderVisibleElements: ge = !1, selectNodesOnDrag: Re, nodesDraggable: Ee, autoPanOnNodeFocus: Ze, nodesConnectable: He, nodesFocusable: Ft, nodeOrigin: ht = tR, edgesFocusable: at, edgesReconnectable: We, elementsSelectable: en = !0, defaultViewport: $t = bD, minZoom: tn = 0.5, maxZoom: Bt = 2, translateExtent: _t = Ns, preventScrolling: Lr = !0, nodeExtent: Vt, defaultMarkerColor: Ln = "#b1b1b7", zoomOnScroll: go = !0, zoomOnPinch: Tt = !0, panOnScroll: Ht = !1, panOnScrollSpeed: Wu = 0.5, panOnScrollMode: bi = ro.Free, zoomOnDoubleClick: Si = !0, panOnDrag: Ei = !0, onPaneClick: Ci, onPaneMouseEnter: ki, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Qs, onPaneContextMenu: Zs, paneClickDistance: Js = 1, nodeClickDistance: ea = 0, children: ta, onReconnect: Ni, onReconnectStart: na, onReconnectEnd: qr, onEdgeContextMenu: Ri, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Uu, onEdgeMouseMove: jr, onEdgeMouseLeave: vo, reconnectRadius: yo = 10, onNodesChange: Pi, onEdgesChange: Gu, noDragClassName: Yu = "nodrag", noWheelClassName: Ku = "nowheel", noPanClassName: wn = "nopan", fitView: Ti, fitViewOptions: Ai, connectOnClick: Xu, attributionPosition: ra, proOptions: oa, defaultEdgeOptions: ia, elevateNodesOnSelect: sa, elevateEdgesOnSelect: Qu, disableKeyboardA11y: aa = !1, autoPanOnConnect: Ue, autoPanOnNodeDrag: Zu, autoPanSpeed: Ii, connectionRadius: la, isValidConnection: wo, onError: Ju, style: ua, id: zr, nodeDragThreshold: Wt, connectionDragThreshold: ec, viewport: At, onViewportChange: tc, width: nc, height: rc, colorMode: xo = "light", debug: _o, onScroll: xn, ariaLabelConfig: bo, ...oc }, ic) {
  const Fr = zr || "1", ca = kD(xo), Mi = N.useCallback((nr) => {
    nr.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), xn == null || xn(nr);
  }, [xn]);
  return I.jsx("div", { "data-testid": "rf__wrapper", ...oc, onScroll: Mi, style: { ...ua, ...Yj }, ref: ic, className: nt(["react-flow", s, ca]), id: zr, role: "application", children: I.jsxs(Gj, { nodes: e, edges: t, width: nc, height: rc, fitView: Ti, fitViewOptions: Ai, minZoom: tn, maxZoom: Bt, nodeOrigin: ht, nodeExtent: Vt, children: [I.jsx(Wj, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: R, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: l, connectionLineType: W, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, selectionKeyCode: K, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: ge, defaultViewport: $t, translateExtent: _t, minZoom: tn, maxZoom: Bt, preventScrolling: Lr, zoomOnScroll: go, zoomOnPinch: Tt, zoomOnDoubleClick: Si, panOnScroll: Ht, panOnScrollSpeed: Wu, panOnScrollMode: bi, panOnDrag: Ei, onPaneClick: Ci, onPaneMouseEnter: ki, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Qs, onPaneContextMenu: Zs, paneClickDistance: Js, nodeClickDistance: ea, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: j, onReconnect: Ni, onReconnectStart: na, onReconnectEnd: qr, onEdgeContextMenu: Ri, onEdgeDoubleClick: Dr, onEdgeMouseEnter: Uu, onEdgeMouseMove: jr, onEdgeMouseLeave: vo, reconnectRadius: yo, defaultMarkerColor: Ln, noDragClassName: Yu, noWheelClassName: Ku, noPanClassName: wn, rfId: Fr, disableKeyboardA11y: aa, nodeExtent: Vt, viewport: At, onViewportChange: tc }), I.jsx(CD, { nodes: e, edges: t, defaultNodes: r, defaultEdges: o, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, nodesDraggable: Ee, autoPanOnNodeFocus: Ze, nodesConnectable: He, nodesFocusable: Ft, edgesFocusable: at, edgesReconnectable: We, elementsSelectable: en, elevateNodesOnSelect: sa, elevateEdgesOnSelect: Qu, minZoom: tn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: Pi, onEdgesChange: Gu, snapToGrid: pe, snapGrid: be, connectionMode: q, translateExtent: _t, connectOnClick: Xu, defaultEdgeOptions: ia, fitView: Ti, fitViewOptions: Ai, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: $, onMove: h, onMoveStart: m, onMoveEnd: g, noPanClassName: wn, nodeOrigin: ht, rfId: Fr, autoPanOnConnect: Ue, autoPanOnNodeDrag: Zu, autoPanSpeed: Ii, onError: Ju, connectionRadius: la, isValidConnection: wo, selectNodesOnDrag: Re, nodeDragThreshold: Wt, connectionDragThreshold: ec, onBeforeDelete: Q, debug: _o, ariaLabelConfig: bo }), I.jsx(_D, { onSelectionChange: X }), ta, I.jsx(gD, { proOptions: oa, position: ra }), I.jsx(mD, { rfId: Fr, disableKeyboardA11y: aa })] }) });
}
rR(Kj);
function Xj({ dimensions: e, lineWidth: t, variant: r, className: o }) {
  return I.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", r, o]) });
}
function Qj({ radius: e, className: t }) {
  return I.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Nr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Nr || (Nr = {}));
const Zj = {
  [Nr.Dots]: 1,
  [Nr.Lines]: 1,
  [Nr.Cross]: 6
}, Jj = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function RR({
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
  const m = N.useRef(null), { transform: g, patternId: w } = Ie(Jj, Ke), E = o || Zj[t], y = t === Nr.Dots, x = t === Nr.Cross, S = Array.isArray(r) ? r : [r, r], C = [S[0] * g[2] || 1, S[1] * g[2] || 1], _ = E * g[2], k = Array.isArray(a) ? a : [a, a], R = x ? [_, _] : C, T = [
    k[0] * g[2] || 1 + R[0] / 2,
    k[1] * g[2] || 1 + R[1] / 2
  ], A = `${w}${e || ""}`;
  return I.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...gu,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: m, "data-testid": "rf__background", children: [I.jsx("pattern", { id: A, x: g[0] % C[0], y: g[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? I.jsx(Qj, { radius: _ / 2, className: h }) : I.jsx(Xj, { dimensions: R, lineWidth: s, variant: t, className: h }) }), I.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
RR.displayName = "Background";
N.memo(RR);
function e3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: I.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function t3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: I.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function n3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: I.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function r3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function o3() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function bl({ children: e, className: t, ...r }) {
  return I.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...r, children: e });
}
const i3 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function PR({ style: e, showZoom: t = !0, showFitView: r = !0, showInteractive: o = !0, fitViewOptions: s, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: m = "bottom-left", orientation: g = "vertical", "aria-label": w }) {
  const E = $e(), { isInteractive: y, minZoomReached: x, maxZoomReached: S, ariaLabelConfig: C } = Ie(i3, Ke), { zoomIn: _, zoomOut: k, fitView: R } = xy(), T = () => {
    _(), a == null || a();
  }, A = () => {
    k(), l == null || l();
  }, O = () => {
    R(s), u == null || u();
  }, D = () => {
    E.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, G = g === "horizontal" ? "horizontal" : "vertical";
  return I.jsxs(mu, { className: nt(["react-flow__controls", G, d]), position: m, style: e, "data-testid": "rf__controls", "aria-label": w ?? C["controls.ariaLabel"], children: [t && I.jsxs(I.Fragment, { children: [I.jsx(bl, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: S, children: I.jsx(e3, {}) }), I.jsx(bl, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: I.jsx(t3, {}) })] }), r && I.jsx(bl, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: I.jsx(n3, {}) }), o && I.jsx(bl, { className: "react-flow__controls-interactive", onClick: D, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? I.jsx(o3, {}) : I.jsx(r3, {}) }), h] });
}
PR.displayName = "Controls";
N.memo(PR);
function s3({ id: e, x: t, y: r, width: o, height: s, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: m, selected: g, onClick: w }) {
  const { background: E, backgroundColor: y } = a || {}, x = l || E || y;
  return I.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: g }, d]), x: t, y: r, rx: h, ry: h, width: o, height: s, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: m, onClick: w ? (S) => w(S, e) : void 0 });
}
const a3 = N.memo(s3), l3 = (e) => e.nodes.map((t) => t.id), nd = (e) => e instanceof Function ? e : () => e;
function u3({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: r = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = a3,
  onClick: l
}) {
  const u = Ie(l3, Ke), f = nd(t), d = nd(e), h = nd(r), m = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return I.jsx(I.Fragment, { children: u.map((g) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    I.jsx(f3, { id: g, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: s, NodeComponent: a, onClick: l, shapeRendering: m }, g)
  )) });
}
function c3({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: r, nodeClassNameFunc: o, nodeBorderRadius: s, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
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
  return !d || d.hidden || !AN(d) ? null : I.jsx(u, { x: h, y: m, width: g, height: w, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: s, strokeColor: r(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const f3 = N.memo(c3);
var d3 = N.memo(u3);
const h3 = 200, p3 = 150, m3 = (e) => !e.hidden, g3 = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? TN(Fs(e.nodeLookup, { filter: m3 }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, v3 = "react-flow__minimap-desc";
function TR({
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
  const R = $e(), T = N.useRef(null), { boundingRect: A, viewBB: O, rfId: D, panZoom: G, translateExtent: B, flowWidth: V, flowHeight: X, ariaLabelConfig: L } = Ie(g3, Ke), H = (e == null ? void 0 : e.width) ?? h3, $ = (e == null ? void 0 : e.height) ?? p3, Y = A.width / H, M = A.height / $, j = Math.max(Y, M), Q = j * H, q = j * $, W = k * j, ie = A.x - (Q - A.width) / 2 - W, F = A.y - (q - A.height) / 2 - W, Z = Q + W * 2, ee = q + W * 2, K = `${v3}-${D}`, te = N.useRef(0), se = N.useRef();
  te.current = j, N.useEffect(() => {
    if (T.current && G)
      return se.current = Lq({
        domNode: T.current,
        panZoom: G,
        getTransform: () => R.getState().transform,
        getViewScale: () => te.current
      }), () => {
        var pe;
        (pe = se.current) == null || pe.destroy();
      };
  }, [G]), N.useEffect(() => {
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
    var Re;
    const [be, ge] = ((Re = se.current) == null ? void 0 : Re.pointer(pe)) || [0, 0];
    w(pe, { x: be, y: ge });
  } : void 0, ce = E ? N.useCallback((pe, be) => {
    const ge = R.getState().nodeLookup.get(be).internals.userNode;
    E(pe, ge);
  }, []) : void 0, de = S ?? L["minimap.ariaLabel"];
  return I.jsx(mu, { position: g, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * j : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: I.jsxs("svg", { width: H, height: $, viewBox: `${ie} ${F} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": K, ref: T, onClick: ae, children: [de && I.jsx("title", { id: K, children: de }), I.jsx(d3, { onClick: ce, nodeColor: o, nodeStrokeColor: r, nodeBorderRadius: a, nodeClassName: s, nodeStrokeWidth: l, nodeComponent: u }), I.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - W},${F - W}h${Z + W * 2}v${ee + W * 2}h${-Z - W * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
TR.displayName = "MiniMap";
N.memo(TR);
const y3 = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, w3 = {
  [ui.Line]: "right",
  [ui.Handle]: "bottom-right"
};
function x3({ nodeId: e, position: t, variant: r = ui.Handle, className: o, style: s = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: g, autoScale: w = !0, shouldResize: E, onResizeStart: y, onResize: x, onResizeEnd: S }) {
  const C = aR(), _ = typeof e == "string" ? e : C, k = $e(), R = N.useRef(null), T = r === ui.Handle, A = Ie(N.useCallback(y3(T && w), [T, w]), Ke), O = N.useRef(null), D = t ?? w3[r];
  N.useEffect(() => {
    if (!(!R.current || !_))
      return O.current || (O.current = Kq({
        domNode: R.current,
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
                ...IN({
                  x: B.x ?? j.position.x,
                  y: B.y ?? j.position.y
                }, { width: q, height: W }, j.parentId, L, Q)
              }
            }, F = wy([ie], L, H, $);
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
  return I.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...G, r, o]), ref: R, style: {
    ...s,
    scale: A,
    ...l && { [T ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
N.memo(x3);
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
  return N.useCallback(Hs(...e), e);
}
var _3 = Symbol.for("react.lazy"), Xl = oy[" use ".trim().toString()];
function b3(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function AR(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === _3 && "_payload" in e && b3(e._payload);
}
// @__NO_SIDE_EFFECTS__
function by(e) {
  const t = /* @__PURE__ */ E3(e), r = N.forwardRef((o, s) => {
    let { children: a, ...l } = o;
    AR(a) && typeof Xl == "function" && (a = Xl(a._payload));
    const u = N.Children.toArray(a), f = u.find(k3);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var S3 = /* @__PURE__ */ by("Slot");
// @__NO_SIDE_EFFECTS__
function E3(e) {
  const t = N.forwardRef((r, o) => {
    let { children: s, ...a } = r;
    if (AR(s) && typeof Xl == "function" && (s = Xl(s._payload)), N.isValidElement(s)) {
      const l = R3(s), u = N3(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Hs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var C3 = Symbol("radix.slottable");
function k3(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === C3;
}
function N3(e, t) {
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
function R3(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function IR(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = IR(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function MR() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = IR(e)) && (o && (o += " "), o += t);
  return o;
}
const $1 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, B1 = MR, P3 = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return B1(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: a } = t, l = Object.keys(s).map((d) => {
    const h = r == null ? void 0 : r[d], m = a == null ? void 0 : a[d];
    if (h === null) return null;
    const g = $1(h) || $1(m);
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
  return B1(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, T3 = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    r[o] = e[o];
  for (let o = 0; o < t.length; o++)
    r[e.length + o] = t[o];
  return r;
}, A3 = (e, t) => ({
  classGroupId: e,
  validator: t
}), OR = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Ql = "-", V1 = [], I3 = "arbitrary..", M3 = (e) => {
  const t = L3(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return O3(l);
      const u = l.split(Ql), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return LR(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = r[l];
        return f ? d ? T3(d, f) : f : d || V1;
      }
      return r[l] || V1;
    }
  };
}, LR = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const s = e[t], a = r.nextPart.get(s);
  if (a) {
    const d = LR(e, t + 1, a);
    if (d) return d;
  }
  const l = r.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(Ql) : e.slice(t).join(Ql), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, O3 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), o = t.slice(0, r);
  return o ? I3 + o : void 0;
})(), L3 = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return q3(r, t);
}, q3 = (e, t) => {
  const r = OR();
  for (const o in e) {
    const s = e[o];
    Sy(s, r, o, t);
  }
  return r;
}, Sy = (e, t, r, o) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const l = e[a];
    D3(l, t, r, o);
  }
}, D3 = (e, t, r, o) => {
  if (typeof e == "string") {
    j3(e, t, r);
    return;
  }
  if (typeof e == "function") {
    z3(e, t, r, o);
    return;
  }
  F3(e, t, r, o);
}, j3 = (e, t, r) => {
  const o = e === "" ? t : qR(t, e);
  o.classGroupId = r;
}, z3 = (e, t, r, o) => {
  if ($3(e)) {
    Sy(e(o), t, r, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(A3(r, e));
}, F3 = (e, t, r, o) => {
  const s = Object.entries(e), a = s.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = s[l];
    Sy(f, qR(t, u), r, o);
  }
}, qR = (e, t) => {
  let r = e;
  const o = t.split(Ql), s = o.length;
  for (let a = 0; a < s; a++) {
    const l = o[a];
    let u = r.nextPart.get(l);
    u || (u = OR(), r.nextPart.set(l, u)), r = u;
  }
  return r;
}, $3 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, B3 = (e) => {
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
}, Wv = "!", H1 = ":", V3 = [], W1 = (e, t, r, o, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: o,
  isExternal: s
}), H3 = (e) => {
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
        if (x === H1) {
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
    m.endsWith(Wv) ? (g = m.slice(0, -1), w = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Wv) && (g = m.slice(1), w = !0)
    );
    const E = d && d > f ? d - f : void 0;
    return W1(a, w, g, E);
  };
  if (t) {
    const s = t + H1, a = o;
    o = (l) => l.startsWith(s) ? a(l.slice(s.length)) : W1(V3, !1, l, void 0, !0);
  }
  if (r) {
    const s = o;
    o = (a) => r({
      className: a,
      parseClassName: s
    });
  }
  return o;
}, W3 = (e) => {
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
}, U3 = (e) => ({
  cache: B3(e.cacheSize),
  parseClassName: H3(e),
  sortModifiers: W3(e),
  ...M3(e)
}), G3 = /\s+/, Y3 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(G3);
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
    const C = g.length === 0 ? "" : g.length === 1 ? g[0] : a(g).join(":"), _ = w ? C + Wv : C, k = _ + S;
    if (l.indexOf(k) > -1)
      continue;
    l.push(k);
    const R = s(S, x);
    for (let T = 0; T < R.length; ++T) {
      const A = R[T];
      l.push(_ + A);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, K3 = (...e) => {
  let t = 0, r, o, s = "";
  for (; t < e.length; )
    (r = e[t++]) && (o = DR(r)) && (s && (s += " "), s += o);
  return s;
}, DR = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = DR(e[o])) && (r && (r += " "), r += t);
  return r;
}, X3 = (e, ...t) => {
  let r, o, s, a;
  const l = (f) => {
    const d = t.reduce((h, m) => m(h), e());
    return r = U3(d), o = r.cache.get, s = r.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = Y3(f, r);
    return s(f, h), h;
  };
  return a = l, (...f) => a(K3(...f));
}, Q3 = [], st = (e) => {
  const t = (r) => r[e] || Q3;
  return t.isThemeGetter = !0, t;
}, jR = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, zR = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Z3 = /^\d+\/\d+$/, J3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ez = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tz = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, nz = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rz = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Uo = (e) => Z3.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), Er = (e) => !!e && Number.isInteger(Number(e)), rd = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Wn = (e) => J3.test(e), oz = () => !0, iz = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ez.test(e) && !tz.test(e)
), FR = () => !1, sz = (e) => nz.test(e), az = (e) => rz.test(e), lz = (e) => !xe(e) && !_e(e), uz = (e) => di(e, VR, FR), xe = (e) => jR.test(e), Jr = (e) => di(e, HR, iz), od = (e) => di(e, pz, Te), U1 = (e) => di(e, $R, FR), cz = (e) => di(e, BR, az), Sl = (e) => di(e, WR, sz), _e = (e) => zR.test(e), ps = (e) => hi(e, HR), fz = (e) => hi(e, mz), G1 = (e) => hi(e, $R), dz = (e) => hi(e, VR), hz = (e) => hi(e, BR), El = (e) => hi(e, WR, !0), di = (e, t, r) => {
  const o = jR.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, hi = (e, t, r = !1) => {
  const o = zR.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, $R = (e) => e === "position" || e === "percentage", BR = (e) => e === "image" || e === "url", VR = (e) => e === "length" || e === "size" || e === "bg-size", HR = (e) => e === "length", pz = (e) => e === "number", mz = (e) => e === "family-name", WR = (e) => e === "shadow", gz = () => {
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
  ], R = () => [...k(), _e, xe], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [_e, xe, f], D = () => [Uo, "full", "auto", ...O()], G = () => [Er, "none", "subgrid", _e, xe], B = () => ["auto", {
    span: ["full", Er, _e, xe]
  }, Er, _e, xe], V = () => [Er, "auto", _e, xe], X = () => ["auto", "min", "max", "fr", _e, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...O()], Y = () => [Uo, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, _e, xe], j = () => [...k(), G1, U1, {
    position: [_e, xe]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], q = () => ["auto", "cover", "contain", dz, uz, {
    size: [_e, xe]
  }], W = () => [rd, ps, Jr], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    _e,
    xe
  ], F = () => ["", Te, ps, Jr], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [Te, rd, G1, U1], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    _e,
    xe
  ], se = () => ["none", Te, _e, xe], ae = () => ["none", Te, _e, xe], ce = () => [Te, _e, xe], de = () => [Uo, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Wn],
      breakpoint: [Wn],
      color: [oz],
      container: [Wn],
      "drop-shadow": [Wn],
      ease: ["in", "out", "in-out"],
      font: [lz],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Wn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Wn],
      shadow: [Wn],
      spacing: ["px", Te],
      text: [Wn],
      "text-shadow": [Wn],
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
        aspect: ["auto", "square", Uo, xe, _e, x]
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
        object: R()
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
        basis: [Uo, "full", "auto", u, ...O()]
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
        flex: [Te, Uo, "auto", "initial", "none", xe]
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
        font: [o, _e, od]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", rd, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fz, xe, t]
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
        "line-clamp": [Te, "none", _e, od]
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
        }, hz, cz]
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
          El,
          Sl
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
        "inset-shadow": ["none", m, El, Sl]
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
        "text-shadow": ["none", g, El, Sl]
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
          El,
          Sl
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
        stroke: [Te, ps, Jr, od]
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
}, vz = /* @__PURE__ */ X3(gz);
function Fe(...e) {
  return vz(MR(e));
}
const yz = P3(
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
function ci({
  className: e,
  variant: t,
  asChild: r = !1,
  ...o
}) {
  const s = r ? S3 : "span";
  return /* @__PURE__ */ I.jsx(
    s,
    {
      "data-slot": "badge",
      className: Fe(yz({ variant: t }), e),
      ...o
    }
  );
}
function Pr({
  className: e,
  children: t,
  style: r,
  ...o
}) {
  const [s, a] = N.useState(!1);
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
      className: Fe(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        e
      ),
      children: t
    }
  );
}
const wz = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function xz({
  showButton: e = !0,
  position: t = ye.Bottom,
  children: r,
  ...o
}) {
  const s = wz[t || ye.Bottom], a = t === ye.Top || t === ye.Bottom;
  return /* @__PURE__ */ I.jsx(Pr, { position: t, id: o.id, ...o, children: e && /* @__PURE__ */ I.jsxs(
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
const _z = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function bz({
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
      className: Fe(
        "relative flex items-center",
        _z[s],
        e
      ),
      ref: l,
      children: [
        /* @__PURE__ */ I.jsx(
          Pr,
          {
            position: s,
            className: r,
            ...u
          }
        ),
        /* @__PURE__ */ I.jsx("label", { className: Fe("text-foreground px-3", t), children: o })
      ]
    }
  );
}
const Y1 = {
  base: Pr,
  button: xz,
  labeled: bz
};
function Sz(e) {
  return !e || !Y1[e] ? Pr : Y1[e];
}
function K1({
  handleType: e = "base",
  showButton: t,
  label: r,
  handleConfig: o,
  ...s
}) {
  const a = (o == null ? void 0 : o.handle_type) || e, l = Sz(a), u = { ...s };
  return a === "button" && t !== void 0 && (u.showButton = t), a === "labeled" && r && (u.label = r), /* @__PURE__ */ I.jsx(l, { ...u });
}
function Zl({
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
        K1,
        {
          type: "target",
          position: ye.Left,
          id: f.id,
          handleType: l,
          label: f.label
        }
      ),
      /* @__PURE__ */ I.jsx(ci, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: f.label })
    ] }, `input-${f.id}`)) }),
    r,
    /* @__PURE__ */ I.jsx("div", { className: "flex flex-col gap-2 ml-auto pr-0", children: t && Array.isArray(t) && t.map((f) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-end", children: [
      /* @__PURE__ */ I.jsx(ci, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: f.label }),
      /* @__PURE__ */ I.jsx(
        K1,
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
function Ez({ inputs: e, outputs: t, children: r }) {
  return /* @__PURE__ */ I.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
    e && e.length > 0 && /* @__PURE__ */ I.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: e.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex flex-col items-center gap-1 relative", children: [
      /* @__PURE__ */ I.jsx(
        Pr,
        {
          type: "target",
          position: ye.Top,
          id: o.id,
          className: "!relative !transform-none",
          style: { position: "relative", top: 0, left: 0 }
        }
      ),
      /* @__PURE__ */ I.jsx(ci, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: o.label })
    ] }, `input-${o.id}`)) }),
    r && /* @__PURE__ */ I.jsx("div", { className: "flex justify-center", children: r }),
    t && t.length > 0 && /* @__PURE__ */ I.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: t.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex flex-col items-center gap-1 relative", children: [
      /* @__PURE__ */ I.jsx(ci, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: o.label }),
      /* @__PURE__ */ I.jsx(
        Pr,
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
function Cz({ inputs: e, outputs: t, children: r }) {
  return /* @__PURE__ */ I.jsxs("div", { className: "flex p-2 gap-2 items-start", children: [
    /* @__PURE__ */ I.jsx("div", { className: "flex flex-col gap-1", children: e && Array.isArray(e) && e.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-1 relative min-h-6", children: [
      /* @__PURE__ */ I.jsx(
        Pr,
        {
          type: "target",
          position: ye.Left,
          id: o.id,
          className: "w-2 h-2"
        }
      ),
      /* @__PURE__ */ I.jsx(ci, { variant: "outline", className: "text-[10px] font-normal py-0 px-1 h-5", children: o.label })
    ] }, `input-${o.id}`)) }),
    r,
    /* @__PURE__ */ I.jsx("div", { className: "flex flex-col gap-1", children: t && Array.isArray(t) && t.map((o) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-1 relative min-h-6 justify-end", children: [
      /* @__PURE__ */ I.jsx(ci, { variant: "outline", className: "text-[10px] font-normal py-0 px-1 h-5", children: o.label }),
      /* @__PURE__ */ I.jsx(
        Pr,
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
const kz = {
  horizontal: Zl,
  vertical: Ez,
  compact: Cz,
  default: Zl
  // Explicit default alias
};
function Nz(e) {
  return e && kz[e.toLowerCase()] || Zl;
}
function Rz({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card",
      className: Fe(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Pz({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: Fe(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function Tz({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: Fe("leading-none font-semibold", e),
      ...t
    }
  );
}
function Az({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Fe("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function X1(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Qe(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function yu(e, t = []) {
  let r = [];
  function o(a, l) {
    const u = N.createContext(l), f = r.length;
    r = [...r, l];
    const d = (m) => {
      var S;
      const { scope: g, children: w, ...E } = m, y = ((S = g == null ? void 0 : g[e]) == null ? void 0 : S[f]) || u, x = N.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ I.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(m, g) {
      var y;
      const w = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[f]) || u, E = N.useContext(w);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
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
  return s.scopeName = e, [o, Iz(s, ...t)];
}
function Iz(...e) {
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
      return N.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
// @__NO_SIDE_EFFECTS__
function Q1(e) {
  const t = /* @__PURE__ */ Mz(e), r = N.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(Lz);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Mz(e) {
  const t = N.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (N.isValidElement(s)) {
      const l = Dz(s), u = qz(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Hs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Oz = Symbol("radix.slottable");
function Lz(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Oz;
}
function qz(e, t) {
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
function Dz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function jz(e) {
  const t = e + "CollectionProvider", [r, o] = yu(t), [s, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: S } = y, C = Un.useRef(null), _ = Un.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.jsx(s, { scope: x, itemMap: _, collectionRef: C, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ Q1(u), d = Un.forwardRef(
    (y, x) => {
      const { scope: S, children: C } = y, _ = a(u, S), k = tt(x, _.collectionRef);
      return /* @__PURE__ */ I.jsx(f, { ref: k, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", m = "data-radix-collection-item", g = /* @__PURE__ */ Q1(h), w = Un.forwardRef(
    (y, x) => {
      const { scope: S, children: C, ..._ } = y, k = Un.useRef(null), R = tt(x, k), T = a(h, S);
      return Un.useEffect(() => (T.itemMap.set(k, { ref: k, ..._ }), () => void T.itemMap.delete(k))), /* @__PURE__ */ I.jsx(g, { [m]: "", ref: R, children: C });
    }
  );
  w.displayName = h;
  function E(y) {
    const x = a(e + "CollectionConsumer", y);
    return Un.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const _ = Array.from(C.querySelectorAll(`[${m}]`));
      return Array.from(x.itemMap.values()).sort(
        (T, A) => _.indexOf(T.ref.current) - _.indexOf(A.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: w },
    E,
    o
  ];
}
var zz = N.createContext(void 0);
function Fz(e) {
  const t = N.useContext(zz);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function $z(e) {
  const t = /* @__PURE__ */ Bz(e), r = N.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(Hz);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Bz(e) {
  const t = N.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (N.isValidElement(s)) {
      const l = Uz(s), u = Wz(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Hs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Vz = Symbol("radix.slottable");
function Hz(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vz;
}
function Wz(e, t) {
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
function Uz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Gz = [
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
], Be = Gz.reduce((e, t) => {
  const r = /* @__PURE__ */ $z(`Primitive.${t}`), o = N.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Yz(e, t) {
  e && Vs.flushSync(() => e.dispatchEvent(t));
}
function ao(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), N.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function Kz(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ao(e);
  N.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var Xz = "DismissableLayer", Uv = "dismissableLayer.update", Qz = "dismissableLayer.pointerDownOutside", Zz = "dismissableLayer.focusOutside", Z1, UR = N.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), GR = N.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = N.useContext(UR), [h, m] = N.useState(null), g = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = N.useState({}), E = tt(t, (A) => m(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), S = y.indexOf(x), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= S, R = tF((A) => {
      const O = A.target, D = [...d.branches].some((G) => G.contains(O));
      !k || D || (s == null || s(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, g), T = nF((A) => {
      const O = A.target;
      [...d.branches].some((G) => G.contains(O)) || (a == null || a(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, g);
    return Kz((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, g), N.useEffect(() => {
      if (h)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Z1 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), J1(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Z1);
        };
    }, [h, g, r, d]), N.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), J1());
    }, [h, d]), N.useEffect(() => {
      const A = () => w({});
      return document.addEventListener(Uv, A), () => document.removeEventListener(Uv, A);
    }, []), /* @__PURE__ */ I.jsx(
      Be.div,
      {
        ...f,
        ref: E,
        style: {
          pointerEvents: _ ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Qe(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Qe(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Qe(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
GR.displayName = Xz;
var Jz = "DismissableLayerBranch", eF = N.forwardRef((e, t) => {
  const r = N.useContext(UR), o = N.useRef(null), s = tt(t, o);
  return N.useEffect(() => {
    const a = o.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ I.jsx(Be.div, { ...e, ref: s });
});
eF.displayName = Jz;
function tF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ao(e), o = N.useRef(!1), s = N.useRef(() => {
  });
  return N.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          YR(
            Qz,
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
function nF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ao(e), o = N.useRef(!1);
  return N.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && YR(Zz, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function J1() {
  const e = new CustomEvent(Uv);
  document.dispatchEvent(e);
}
function YR(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? Yz(s, a) : s.dispatchEvent(a);
}
var id = 0;
function rF() {
  N.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? e_()), document.body.insertAdjacentElement("beforeend", e[1] ?? e_()), id++, () => {
      id === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), id--;
    };
  }, []);
}
function e_() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var sd = "focusScope.autoFocusOnMount", ad = "focusScope.autoFocusOnUnmount", t_ = { bubbles: !1, cancelable: !0 }, oF = "FocusScope", KR = N.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = N.useState(null), d = ao(s), h = ao(a), m = N.useRef(null), g = tt(t, (y) => f(y)), w = N.useRef({
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
        u.contains(k) ? m.current = k : Cr(m.current, { select: !0 });
      }, x = function(_) {
        if (w.paused || !u) return;
        const k = _.relatedTarget;
        k !== null && (u.contains(k) || Cr(m.current, { select: !0 }));
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
      r_.add(w);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const S = new CustomEvent(sd, t_);
        u.addEventListener(sd, d), u.dispatchEvent(S), S.defaultPrevented || (iF(cF(XR(u)), { select: !0 }), document.activeElement === y && Cr(u));
      }
      return () => {
        u.removeEventListener(sd, d), setTimeout(() => {
          const S = new CustomEvent(ad, t_);
          u.addEventListener(ad, h), u.dispatchEvent(S), S.defaultPrevented || Cr(y ?? document.body, { select: !0 }), u.removeEventListener(ad, h), r_.remove(w);
        }, 0);
      };
    }
  }, [u, d, h, w]);
  const E = N.useCallback(
    (y) => {
      if (!r && !o || w.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, S = document.activeElement;
      if (x && S) {
        const C = y.currentTarget, [_, k] = sF(C);
        _ && k ? !y.shiftKey && S === k ? (y.preventDefault(), r && Cr(_, { select: !0 })) : y.shiftKey && S === _ && (y.preventDefault(), r && Cr(k, { select: !0 })) : S === C && y.preventDefault();
      }
    },
    [r, o, w.paused]
  );
  return /* @__PURE__ */ I.jsx(Be.div, { tabIndex: -1, ...l, ref: g, onKeyDown: E });
});
KR.displayName = oF;
function iF(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (Cr(o, { select: t }), document.activeElement !== r) return;
}
function sF(e) {
  const t = XR(e), r = n_(t, e), o = n_(t.reverse(), e);
  return [r, o];
}
function XR(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function n_(e, t) {
  for (const r of e)
    if (!aF(r, { upTo: t })) return r;
}
function aF(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function lF(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && lF(e) && t && e.select();
  }
}
var r_ = uF();
function uF() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = o_(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = o_(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function o_(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function cF(e) {
  return e.filter((t) => t.tagName !== "A");
}
var yt = globalThis != null && globalThis.document ? N.useLayoutEffect : () => {
}, fF = oy[" useId ".trim().toString()] || (() => {
}), dF = 0;
function Ey(e) {
  const [t, r] = N.useState(fF());
  return yt(() => {
    r((o) => o ?? String(dF++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const hF = ["top", "right", "bottom", "left"], Tr = Math.min, qt = Math.max, Jl = Math.round, Cl = Math.floor, Pn = (e) => ({
  x: e,
  y: e
}), pF = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mF = {
  start: "end",
  end: "start"
};
function Gv(e, t, r) {
  return qt(e, Tr(t, r));
}
function Kn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xn(e) {
  return e.split("-")[0];
}
function pi(e) {
  return e.split("-")[1];
}
function Cy(e) {
  return e === "x" ? "y" : "x";
}
function ky(e) {
  return e === "y" ? "height" : "width";
}
const gF = /* @__PURE__ */ new Set(["top", "bottom"]);
function Nn(e) {
  return gF.has(Xn(e)) ? "y" : "x";
}
function Ny(e) {
  return Cy(Nn(e));
}
function vF(e, t, r) {
  r === void 0 && (r = !1);
  const o = pi(e), s = Ny(e), a = ky(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = eu(l)), [l, eu(l)];
}
function yF(e) {
  const t = eu(e);
  return [Yv(e), t, Yv(t)];
}
function Yv(e) {
  return e.replace(/start|end/g, (t) => mF[t]);
}
const i_ = ["left", "right"], s_ = ["right", "left"], wF = ["top", "bottom"], xF = ["bottom", "top"];
function _F(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? s_ : i_ : t ? i_ : s_;
    case "left":
    case "right":
      return t ? wF : xF;
    default:
      return [];
  }
}
function bF(e, t, r, o) {
  const s = pi(e);
  let a = _F(Xn(e), r === "start", o);
  return s && (a = a.map((l) => l + "-" + s), t && (a = a.concat(a.map(Yv)))), a;
}
function eu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => pF[t]);
}
function SF(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function QR(e) {
  return typeof e != "number" ? SF(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function tu(e) {
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
function a_(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const a = Nn(t), l = Ny(t), u = ky(l), f = Xn(t), d = a === "y", h = o.x + o.width / 2 - s.width / 2, m = o.y + o.height / 2 - s.height / 2, g = o[u] / 2 - s[u] / 2;
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
  switch (pi(t)) {
    case "start":
      w[l] -= g * (r && d ? -1 : 1);
      break;
    case "end":
      w[l] += g * (r && d ? -1 : 1);
      break;
  }
  return w;
}
const EF = async (e, t, r) => {
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
  } = a_(d, o, f), g = o, w = {}, E = 0;
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
    }, R && E <= 50 && (E++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (d = R.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : R.rects), {
      x: h,
      y: m
    } = a_(d, g, f)), y = -1);
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
  } = Kn(t, e), E = QR(w), x = u[g ? m === "floating" ? "reference" : "floating" : m], S = tu(await a.getClippingRect({
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
  }, R = tu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const CF = (e) => ({
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
    const m = QR(h), g = {
      x: r,
      y: o
    }, w = Ny(s), E = ky(w), y = await l.getDimensions(d), x = w === "y", S = x ? "top" : "left", C = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", k = a.reference[E] + a.reference[w] - g[w] - a.floating[E], R = g[w] - a.reference[w], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let A = T ? T[_] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(T))) && (A = u.floating[_] || a.floating[E]);
    const O = k / 2 - R / 2, D = A / 2 - y[E] / 2 - 1, G = Tr(m[S], D), B = Tr(m[C], D), V = G, X = A - y[E] - B, L = A / 2 - y[E] / 2 + O, H = Gv(V, L, X), $ = !f.arrow && pi(s) != null && L !== H && a.reference[E] / 2 - (L < V ? G : B) - y[E] / 2 < 0, Y = $ ? L < V ? L - V : L - X : 0;
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
}), kF = function(e) {
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
      const S = Xn(s), C = Nn(u), _ = Xn(u) === u, k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), R = g || (_ || !y ? [eu(u)] : yF(u)), T = E !== "none";
      !g && T && R.push(...bF(u, y, E, k));
      const A = [u, ...R], O = await Os(t, x), D = [];
      let G = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && D.push(O[S]), m) {
        const L = vF(s, l, k);
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
                if (T) {
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
function l_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function u_(e) {
  return hF.some((t) => e[t] >= 0);
}
const NF = function(e) {
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
          }), l = l_(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: u_(l)
            }
          };
        }
        case "escaped": {
          const a = await Os(t, {
            ...s,
            altBoundary: !0
          }), l = l_(a, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: u_(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ZR = /* @__PURE__ */ new Set(["left", "top"]);
async function RF(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Xn(r), u = pi(r), f = Nn(r) === "y", d = ZR.has(l) ? -1 : 1, h = a && f ? -1 : 1, m = Kn(t, e);
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
const PF = function(e) {
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
      } = t, f = await RF(t, e);
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
}, TF = function(e) {
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
      }, h = await Os(t, f), m = Nn(Xn(s)), g = Cy(m);
      let w = d[g], E = d[m];
      if (a) {
        const x = g === "y" ? "top" : "left", S = g === "y" ? "bottom" : "right", C = w + h[x], _ = w - h[S];
        w = Gv(C, w, _);
      }
      if (l) {
        const x = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", C = E + h[x], _ = E - h[S];
        E = Gv(C, E, _);
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
}, AF = function(e) {
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
      }, m = Nn(s), g = Cy(m);
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
        const _ = g === "y" ? "height" : "width", k = a.reference[g] - a.floating[_] + x.mainAxis, R = a.reference[g] + a.reference[_] - x.mainAxis;
        w < k ? w = k : w > R && (w = R);
      }
      if (d) {
        var S, C;
        const _ = g === "y" ? "width" : "height", k = ZR.has(Xn(s)), R = a.reference[m] - a.floating[_] + (k && ((S = l.offset) == null ? void 0 : S[m]) || 0) + (k ? 0 : x.crossAxis), T = a.reference[m] + a.reference[_] + (k ? 0 : ((C = l.offset) == null ? void 0 : C[m]) || 0) - (k ? x.crossAxis : 0);
        E < R ? E = R : E > T && (E = T);
      }
      return {
        [g]: w,
        [m]: E
      };
    }
  };
}, IF = function(e) {
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
      } = Kn(e, t), h = await Os(t, d), m = Xn(s), g = pi(s), w = Nn(s) === "y", {
        width: E,
        height: y
      } = a.floating;
      let x, S;
      m === "top" || m === "bottom" ? (x = m, S = g === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (S = m, x = g === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = E - h.left - h.right, k = Tr(y - h[x], C), R = Tr(E - h[S], _), T = !t.middlewareData.shift;
      let A = k, O = R;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (O = _), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), T && !g) {
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
function wu() {
  return typeof window < "u";
}
function mi(e) {
  return JR(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function jt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mn(e) {
  var t;
  return (t = (JR(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function JR(e) {
  return wu() ? e instanceof Node || e instanceof jt(e).Node : !1;
}
function pn(e) {
  return wu() ? e instanceof Element || e instanceof jt(e).Element : !1;
}
function An(e) {
  return wu() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1;
}
function c_(e) {
  return !wu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot;
}
const MF = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ws(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = mn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !MF.has(s);
}
const OF = /* @__PURE__ */ new Set(["table", "td", "th"]);
function LF(e) {
  return OF.has(mi(e));
}
const qF = [":popover-open", ":modal"];
function xu(e) {
  return qF.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const DF = ["transform", "translate", "scale", "rotate", "perspective"], jF = ["transform", "translate", "scale", "rotate", "perspective", "filter"], zF = ["paint", "layout", "strict", "content"];
function Ry(e) {
  const t = Py(), r = pn(e) ? mn(e) : e;
  return DF.some((o) => r[o] ? r[o] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || jF.some((o) => (r.willChange || "").includes(o)) || zF.some((o) => (r.contain || "").includes(o));
}
function FF(e) {
  let t = Ar(e);
  for (; An(t) && !fi(t); ) {
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
const $F = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function fi(e) {
  return $F.has(mi(e));
}
function mn(e) {
  return jt(e).getComputedStyle(e);
}
function _u(e) {
  return pn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ar(e) {
  if (mi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    c_(e) && e.host || // Fallback.
    Mn(e)
  );
  return c_(t) ? t.host : t;
}
function eP(e) {
  const t = Ar(e);
  return fi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : An(t) && Ws(t) ? t : eP(t);
}
function Ls(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = eP(e), a = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = jt(s);
  if (a) {
    const u = Kv(l);
    return t.concat(l, l.visualViewport || [], Ws(s) ? s : [], u && r ? Ls(u) : []);
  }
  return t.concat(s, Ls(s, [], r));
}
function Kv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tP(e) {
  const t = mn(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = An(e), a = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Jl(r) !== a || Jl(o) !== l;
  return u && (r = a, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function Ty(e) {
  return pn(e) ? e : e.contextElement;
}
function ti(e) {
  const t = Ty(e);
  if (!An(t))
    return Pn(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: a
  } = tP(t);
  let l = (a ? Jl(r.width) : r.width) / o, u = (a ? Jl(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const BF = /* @__PURE__ */ Pn(0);
function nP(e) {
  const t = jt(e);
  return !Py() || !t.visualViewport ? BF : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function VF(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== jt(e) ? !1 : t;
}
function lo(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), a = Ty(e);
  let l = Pn(1);
  t && (o ? pn(o) && (l = ti(o)) : l = ti(e));
  const u = VF(a, r, o) ? nP(a) : Pn(0);
  let f = (s.left + u.x) / l.x, d = (s.top + u.y) / l.y, h = s.width / l.x, m = s.height / l.y;
  if (a) {
    const g = jt(a), w = o && pn(o) ? jt(o) : o;
    let E = g, y = Kv(E);
    for (; y && o && w !== E; ) {
      const x = ti(y), S = y.getBoundingClientRect(), C = mn(y), _ = S.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, k = S.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, m *= x.y, f += _, d += k, E = jt(y), y = Kv(E);
    }
  }
  return tu({
    width: h,
    height: m,
    x: f,
    y: d
  });
}
function bu(e, t) {
  const r = _u(e).scrollLeft;
  return t ? t.left + r : lo(Mn(e)).left + r;
}
function rP(e, t) {
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - bu(e, r), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function HF(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const a = s === "fixed", l = Mn(o), u = t ? xu(t.floating) : !1;
  if (o === l || u && a)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Pn(1);
  const h = Pn(0), m = An(o);
  if ((m || !m && !a) && ((mi(o) !== "body" || Ws(l)) && (f = _u(o)), An(o))) {
    const w = lo(o);
    d = ti(o), h.x = w.x + o.clientLeft, h.y = w.y + o.clientTop;
  }
  const g = l && !m && !a ? rP(l, f) : Pn(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - f.scrollLeft * d.x + h.x + g.x,
    y: r.y * d.y - f.scrollTop * d.y + h.y + g.y
  };
}
function WF(e) {
  return Array.from(e.getClientRects());
}
function UF(e) {
  const t = Mn(e), r = _u(e), o = e.ownerDocument.body, s = qt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = qt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + bu(e);
  const u = -r.scrollTop;
  return mn(o).direction === "rtl" && (l += qt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
const f_ = 25;
function GF(e, t) {
  const r = jt(e), o = Mn(e), s = r.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    a = s.width, l = s.height;
    const h = Py();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  const d = bu(o);
  if (d <= 0) {
    const h = o.ownerDocument, m = h.body, g = getComputedStyle(m), w = h.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, E = Math.abs(o.clientWidth - m.clientWidth - w);
    E <= f_ && (a -= E);
  } else d <= f_ && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const YF = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function KF(e, t) {
  const r = lo(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, a = An(e) ? ti(e) : Pn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = s * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function d_(e, t, r) {
  let o;
  if (t === "viewport")
    o = GF(e, r);
  else if (t === "document")
    o = UF(Mn(e));
  else if (pn(t))
    o = KF(t, r);
  else {
    const s = nP(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return tu(o);
}
function oP(e, t) {
  const r = Ar(e);
  return r === t || !pn(r) || fi(r) ? !1 : mn(r).position === "fixed" || oP(r, t);
}
function XF(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = Ls(e, [], !1).filter((u) => pn(u) && mi(u) !== "body"), s = null;
  const a = mn(e).position === "fixed";
  let l = a ? Ar(e) : e;
  for (; pn(l) && !fi(l); ) {
    const u = mn(l), f = Ry(l);
    !f && u.position === "fixed" && (s = null), (a ? !f && !s : !f && u.position === "static" && !!s && YF.has(s.position) || Ws(l) && !f && oP(e, l)) ? o = o.filter((h) => h !== l) : s = u, l = Ar(l);
  }
  return t.set(e, o), o;
}
function QF(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? xu(t) ? [] : XF(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((d, h) => {
    const m = d_(t, h, s);
    return d.top = qt(m.top, d.top), d.right = Tr(m.right, d.right), d.bottom = Tr(m.bottom, d.bottom), d.left = qt(m.left, d.left), d;
  }, d_(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function ZF(e) {
  const {
    width: t,
    height: r
  } = tP(e);
  return {
    width: t,
    height: r
  };
}
function JF(e, t, r) {
  const o = An(t), s = Mn(t), a = r === "fixed", l = lo(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Pn(0);
  function d() {
    f.x = bu(s);
  }
  if (o || !o && !a)
    if ((mi(t) !== "body" || Ws(s)) && (u = _u(t)), o) {
      const w = lo(t, !0, a, t);
      f.x = w.x + t.clientLeft, f.y = w.y + t.clientTop;
    } else s && d();
  a && !o && s && d();
  const h = s && !o && !a ? rP(s, u) : Pn(0), m = l.left + u.scrollLeft - f.x - h.x, g = l.top + u.scrollTop - f.y - h.y;
  return {
    x: m,
    y: g,
    width: l.width,
    height: l.height
  };
}
function ld(e) {
  return mn(e).position === "static";
}
function h_(e, t) {
  if (!An(e) || mn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Mn(e) === r && (r = r.ownerDocument.body), r;
}
function iP(e, t) {
  const r = jt(e);
  if (xu(e))
    return r;
  if (!An(e)) {
    let s = Ar(e);
    for (; s && !fi(s); ) {
      if (pn(s) && !ld(s))
        return s;
      s = Ar(s);
    }
    return r;
  }
  let o = h_(e, t);
  for (; o && LF(o) && ld(o); )
    o = h_(o, t);
  return o && fi(o) && ld(o) && !Ry(o) ? r : o || FF(e) || r;
}
const e4 = async function(e) {
  const t = this.getOffsetParent || iP, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: JF(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function t4(e) {
  return mn(e).direction === "rtl";
}
const n4 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: HF,
  getDocumentElement: Mn,
  getClippingRect: QF,
  getOffsetParent: iP,
  getElementRects: e4,
  getClientRects: WF,
  getDimensions: ZF,
  getScale: ti,
  isElement: pn,
  isRTL: t4
};
function sP(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function r4(e, t) {
  let r = null, o;
  const s = Mn(e);
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
    const E = Cl(m), y = Cl(s.clientWidth - (h + g)), x = Cl(s.clientHeight - (m + w)), S = Cl(h), _ = {
      rootMargin: -E + "px " + -y + "px " + -x + "px " + -S + "px",
      threshold: qt(0, Tr(1, f)) || 1
    };
    let k = !0;
    function R(T) {
      const A = T[0].intersectionRatio;
      if (A !== f) {
        if (!k)
          return l();
        A ? l(!1, A) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !sP(d, e.getBoundingClientRect()) && l(), k = !1;
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
function o4(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = Ty(e), h = s || a ? [...d ? Ls(d) : [], ...Ls(t)] : [];
  h.forEach((S) => {
    s && S.addEventListener("scroll", r, {
      passive: !0
    }), a && S.addEventListener("resize", r);
  });
  const m = d && u ? r4(d, r) : null;
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
    y && !sP(y, S) && r(), y = S, E = requestAnimationFrame(x);
  }
  return r(), () => {
    var S;
    h.forEach((C) => {
      s && C.removeEventListener("scroll", r), a && C.removeEventListener("resize", r);
    }), m == null || m(), (S = w) == null || S.disconnect(), w = null, f && cancelAnimationFrame(E);
  };
}
const i4 = PF, s4 = TF, a4 = kF, l4 = IF, u4 = NF, p_ = CF, c4 = AF, f4 = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: n4,
    ...r
  }, a = {
    ...s.platform,
    _c: o
  };
  return EF(e, t, {
    ...s,
    platform: a
  });
};
var d4 = typeof document < "u", h4 = function() {
}, ql = d4 ? N.useLayoutEffect : h4;
function nu(e, t) {
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
        if (!nu(e[o], t[o]))
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
      if (!(a === "_owner" && e.$$typeof) && !nu(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function aP(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function m_(e, t) {
  const r = aP(e);
  return Math.round(t * r) / r;
}
function ud(e) {
  const t = N.useRef(e);
  return ql(() => {
    t.current = e;
  }), t;
}
function p4(e) {
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
  } = e, [h, m] = N.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, w] = N.useState(o);
  nu(g, o) || w(o);
  const [E, y] = N.useState(null), [x, S] = N.useState(null), C = N.useCallback((M) => {
    M !== T.current && (T.current = M, y(M));
  }, []), _ = N.useCallback((M) => {
    M !== A.current && (A.current = M, S(M));
  }, []), k = a || E, R = l || x, T = N.useRef(null), A = N.useRef(null), O = N.useRef(h), D = f != null, G = ud(f), B = ud(s), V = ud(d), X = N.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: g
    };
    B.current && (M.platform = B.current), f4(T.current, A.current, M).then((j) => {
      const Q = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !nu(O.current, Q) && (O.current = Q, Vs.flushSync(() => {
        m(Q);
      }));
    });
  }, [g, t, r, B, V]);
  ql(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, m((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = N.useRef(!1);
  ql(() => (L.current = !0, () => {
    L.current = !1;
  }), []), ql(() => {
    if (k && (T.current = k), R && (A.current = R), k && R) {
      if (G.current)
        return G.current(k, R, X);
      X();
    }
  }, [k, R, X, G, D]);
  const H = N.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: C,
    setFloating: _
  }), [C, _]), $ = N.useMemo(() => ({
    reference: k,
    floating: R
  }), [k, R]), Y = N.useMemo(() => {
    const M = {
      position: r,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return M;
    const j = m_($.floating, h.x), Q = m_($.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + j + "px, " + Q + "px)",
      ...aP($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: j,
      top: Q
    };
  }, [r, u, $.floating, h.x, h.y]);
  return N.useMemo(() => ({
    ...h,
    update: X,
    refs: H,
    elements: $,
    floatingStyles: Y
  }), [h, X, H, $, Y]);
}
const m4 = (e) => {
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
      return o && t(o) ? o.current != null ? p_({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? p_({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, g4 = (e, t) => ({
  ...i4(e),
  options: [e, t]
}), v4 = (e, t) => ({
  ...s4(e),
  options: [e, t]
}), y4 = (e, t) => ({
  ...c4(e),
  options: [e, t]
}), w4 = (e, t) => ({
  ...a4(e),
  options: [e, t]
}), x4 = (e, t) => ({
  ...l4(e),
  options: [e, t]
}), _4 = (e, t) => ({
  ...u4(e),
  options: [e, t]
}), b4 = (e, t) => ({
  ...m4(e),
  options: [e, t]
});
var S4 = "Arrow", lP = N.forwardRef((e, t) => {
  const { children: r, width: o = 10, height: s = 5, ...a } = e;
  return /* @__PURE__ */ I.jsx(
    Be.svg,
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
lP.displayName = S4;
var E4 = lP;
function uP(e) {
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
var Ay = "Popper", [cP, fP] = yu(Ay), [C4, dP] = cP(Ay), hP = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = N.useState(null);
  return /* @__PURE__ */ I.jsx(C4, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
hP.displayName = Ay;
var pP = "PopperAnchor", mP = N.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, a = dP(pP, r), l = N.useRef(null), u = tt(t, l), f = N.useRef(null);
    return N.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ I.jsx(Be.div, { ...s, ref: u });
  }
);
mP.displayName = pP;
var Iy = "PopperContent", [k4, N4] = cP(Iy), gP = N.forwardRef(
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
    } = e, x = dP(Iy, r), [S, C] = N.useState(null), _ = tt(t, (pe) => C(pe)), [k, R] = N.useState(null), T = uP(k), A = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, D = o + (a !== "center" ? "-" + a : ""), G = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, B = Array.isArray(d) ? d : [d], V = B.length > 0, X = {
      padding: G,
      boundary: B.filter(P4),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: $, isPositioned: Y, middlewareData: M } = p4({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...pe) => o4(...pe, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        g4({ mainAxis: s + O, alignmentAxis: l }),
        f && v4({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? y4() : void 0,
          ...X
        }),
        f && w4({ ...X }),
        x4({
          ...X,
          apply: ({ elements: pe, rects: be, availableWidth: ge, availableHeight: Re }) => {
            const { width: Ee, height: Ze } = be.reference, He = pe.floating.style;
            He.setProperty("--radix-popper-available-width", `${ge}px`), He.setProperty("--radix-popper-available-height", `${Re}px`), He.setProperty("--radix-popper-anchor-width", `${Ee}px`), He.setProperty("--radix-popper-anchor-height", `${Ze}px`);
          }
        }),
        k && b4({ element: k, padding: u }),
        T4({ arrowWidth: A, arrowHeight: O }),
        g && _4({ strategy: "referenceHidden", ...X })
      ]
    }), [j, Q] = wP($), q = ao(E);
    yt(() => {
      Y && (q == null || q());
    }, [Y, q]);
    const W = (K = M.arrow) == null ? void 0 : K.x, ie = (te = M.arrow) == null ? void 0 : te.y, F = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = N.useState();
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
          k4,
          {
            scope: r,
            placedSide: j,
            onArrowChange: R,
            arrowX: W,
            arrowY: ie,
            shouldHideArrow: F,
            children: /* @__PURE__ */ I.jsx(
              Be.div,
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
gP.displayName = Iy;
var vP = "PopperArrow", R4 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, yP = N.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, a = N4(vP, o), l = R4[a.placedSide];
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
          E4,
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
yP.displayName = vP;
function P4(e) {
  return e !== null;
}
var T4 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, S, C;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = wP(r), m = { start: "0%", center: "50%", end: "100%" }[h], g = (((S = s.arrow) == null ? void 0 : S.x) ?? 0) + u / 2, w = (((C = s.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = l ? m : `${g}px`, y = `${-f}px`) : d === "top" ? (E = l ? m : `${g}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = l ? m : `${w}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = l ? m : `${w}px`), { data: { x: E, y } };
  }
});
function wP(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var A4 = hP, I4 = mP, M4 = gP, O4 = yP, L4 = "Portal", xP = N.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, a] = N.useState(!1);
  yt(() => a(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? lD.createPortal(/* @__PURE__ */ I.jsx(Be.div, { ...o, ref: t }), l) : null;
});
xP.displayName = L4;
// @__NO_SIDE_EFFECTS__
function q4(e) {
  const t = /* @__PURE__ */ D4(e), r = N.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(z4);
    if (f) {
      const d = f.props.children, h = u.map((m) => m === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function D4(e) {
  const t = N.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (N.isValidElement(s)) {
      const l = $4(s), u = F4(a, s.props);
      return s.type !== N.Fragment && (u.ref = o ? Hs(o, l) : l), N.cloneElement(s, u);
    }
    return N.Children.count(s) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var j4 = Symbol("radix.slottable");
function z4(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === j4;
}
function F4(e, t) {
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
function $4(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var B4 = oy[" useInsertionEffect ".trim().toString()] || yt;
function Xv({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: o
}) {
  const [s, a, l] = V4({
    defaultProp: t,
    onChange: r
  }), u = e !== void 0, f = u ? e : s;
  {
    const h = N.useRef(e !== void 0);
    N.useEffect(() => {
      const m = h.current;
      m !== u && console.warn(
        `${o} is changing from ${m ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), h.current = u;
    }, [u, o]);
  }
  const d = N.useCallback(
    (h) => {
      var m;
      if (u) {
        const g = H4(h) ? h(e) : h;
        g !== e && ((m = l.current) == null || m.call(l, g));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function V4({
  defaultProp: e,
  onChange: t
}) {
  const [r, o] = N.useState(e), s = N.useRef(r), a = N.useRef(t);
  return B4(() => {
    a.current = t;
  }, [t]), N.useEffect(() => {
    var l;
    s.current !== r && ((l = a.current) == null || l.call(a, r), s.current = r);
  }, [r, s]), [r, o, a];
}
function H4(e) {
  return typeof e == "function";
}
function _P(e) {
  const t = N.useRef({ value: e, previous: e });
  return N.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var bP = Object.freeze({
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
}), W4 = "VisuallyHidden", U4 = N.forwardRef(
  (e, t) => /* @__PURE__ */ I.jsx(
    Be.span,
    {
      ...e,
      ref: t,
      style: { ...bP, ...e.style }
    }
  )
);
U4.displayName = W4;
var G4 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Go = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap(), Nl = {}, cd = 0, SP = function(e) {
  return e && (e.host || SP(e.parentNode));
}, Y4 = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = SP(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, K4 = function(e, t, r, o) {
  var s = Y4(t, Array.isArray(e) ? e : [e]);
  Nl[r] || (Nl[r] = /* @__PURE__ */ new WeakMap());
  var a = Nl[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), d = function(m) {
    !m || u.has(m) || (u.add(m), d(m.parentNode));
  };
  s.forEach(d);
  var h = function(m) {
    !m || f.has(m) || Array.prototype.forEach.call(m.children, function(g) {
      if (u.has(g))
        h(g);
      else
        try {
          var w = g.getAttribute(o), E = w !== null && w !== "false", y = (Go.get(g) || 0) + 1, x = (a.get(g) || 0) + 1;
          Go.set(g, y), a.set(g, x), l.push(g), y === 1 && E && kl.set(g, !0), x === 1 && g.setAttribute(r, "true"), E || g.setAttribute(o, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", g, S);
        }
    });
  };
  return h(t), u.clear(), cd++, function() {
    l.forEach(function(m) {
      var g = Go.get(m) - 1, w = a.get(m) - 1;
      Go.set(m, g), a.set(m, w), g || (kl.has(m) || m.removeAttribute(o), kl.delete(m)), w || m.removeAttribute(r);
    }), cd--, cd || (Go = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap(), Nl = {});
  };
}, X4 = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = G4(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), K4(o, s, r, "aria-hidden")) : function() {
    return null;
  };
}, kn = function() {
  return kn = Object.assign || function(t) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, kn.apply(this, arguments);
};
function EP(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function Q4(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Dl = "right-scroll-bar-position", jl = "width-before-scroll-bar", Z4 = "with-scroll-bars-hidden", J4 = "--removed-body-scroll-bar-size";
function fd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function e$(e, t) {
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
var t$ = typeof window < "u" ? N.useLayoutEffect : N.useEffect, g_ = /* @__PURE__ */ new WeakMap();
function n$(e, t) {
  var r = e$(null, function(o) {
    return e.forEach(function(s) {
      return fd(s, o);
    });
  });
  return t$(function() {
    var o = g_.get(r);
    if (o) {
      var s = new Set(o), a = new Set(e), l = r.current;
      s.forEach(function(u) {
        a.has(u) || fd(u, null);
      }), a.forEach(function(u) {
        s.has(u) || fd(u, l);
      });
    }
    g_.set(r, e);
  }, [e]), r;
}
function r$(e) {
  return e;
}
function o$(e, t) {
  t === void 0 && (t = r$);
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
function i$(e) {
  e === void 0 && (e = {});
  var t = o$(null);
  return t.options = kn({ async: !0, ssr: !1 }, e), t;
}
var CP = function(e) {
  var t = e.sideCar, r = EP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return N.createElement(o, kn({}, r));
};
CP.isSideCarExport = !0;
function s$(e, t) {
  return e.useMedium(t), CP;
}
var kP = i$(), dd = function() {
}, Su = N.forwardRef(function(e, t) {
  var r = N.useRef(null), o = N.useState({
    onScrollCapture: dd,
    onWheelCapture: dd,
    onTouchMoveCapture: dd
  }), s = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, m = e.shards, g = e.sideCar, w = e.noRelative, E = e.noIsolation, y = e.inert, x = e.allowPinchZoom, S = e.as, C = S === void 0 ? "div" : S, _ = e.gapMode, k = EP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, T = n$([r, t]), A = kn(kn({}, k), s);
  return N.createElement(
    N.Fragment,
    null,
    h && N.createElement(R, { sideCar: kP, removeScrollBar: d, shards: m, noRelative: w, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: r, gapMode: _ }),
    l ? N.cloneElement(N.Children.only(u), kn(kn({}, A), { ref: T })) : N.createElement(C, kn({}, A, { className: f, ref: T }), u)
  );
});
Su.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Su.classNames = {
  fullWidth: jl,
  zeroRight: Dl
};
var a$ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function l$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = a$();
  return t && e.setAttribute("nonce", t), e;
}
function u$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function c$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var f$ = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = l$()) && (u$(t, r), c$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, d$ = function() {
  var e = f$();
  return function(t, r) {
    N.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, NP = function() {
  var e = d$(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, h$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, hd = function(e) {
  return parseInt(e || "", 10) || 0;
}, p$ = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [hd(r), hd(o), hd(s)];
}, m$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return h$;
  var t = p$(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, g$ = NP(), ni = "data-scroll-locked", v$ = function(e, t, r, o) {
  var s = e.left, a = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Z4, ` {
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
  
  .`).concat(Dl, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(jl, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Dl, " .").concat(Dl, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(jl, " .").concat(jl, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ni, `] {
    `).concat(J4, ": ").concat(u, `px;
  }
`);
}, v_ = function() {
  var e = parseInt(document.body.getAttribute(ni) || "0", 10);
  return isFinite(e) ? e : 0;
}, y$ = function() {
  N.useEffect(function() {
    return document.body.setAttribute(ni, (v_() + 1).toString()), function() {
      var e = v_() - 1;
      e <= 0 ? document.body.removeAttribute(ni) : document.body.setAttribute(ni, e.toString());
    };
  }, []);
}, w$ = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  y$();
  var a = N.useMemo(function() {
    return m$(s);
  }, [s]);
  return N.createElement(g$, { styles: v$(a, !t, s, r ? "" : "!important") });
}, Qv = !1;
if (typeof window < "u")
  try {
    var Rl = Object.defineProperty({}, "passive", {
      get: function() {
        return Qv = !0, !0;
      }
    });
    window.addEventListener("test", Rl, Rl), window.removeEventListener("test", Rl, Rl);
  } catch {
    Qv = !1;
  }
var Yo = Qv ? { passive: !1 } : !1, x$ = function(e) {
  return e.tagName === "TEXTAREA";
}, RP = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !x$(e) && r[t] === "visible")
  );
}, _$ = function(e) {
  return RP(e, "overflowY");
}, b$ = function(e) {
  return RP(e, "overflowX");
}, y_ = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = PP(e, o);
    if (s) {
      var a = TP(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, S$ = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, E$ = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, PP = function(e, t) {
  return e === "v" ? _$(t) : b$(t);
}, TP = function(e, t) {
  return e === "v" ? S$(t) : E$(t);
}, C$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, k$ = function(e, t, r, o, s) {
  var a = C$(e, window.getComputedStyle(t).direction), l = a * o, u = r.target, f = t.contains(u), d = !1, h = l > 0, m = 0, g = 0;
  do {
    if (!u)
      break;
    var w = TP(e, u), E = w[0], y = w[1], x = w[2], S = y - x - a * E;
    (E || S) && PP(e, u) && (m += S, g += E);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(m) < 1 || !h && Math.abs(g) < 1) && (d = !0), d;
}, Pl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, w_ = function(e) {
  return [e.deltaX, e.deltaY];
}, x_ = function(e) {
  return e && "current" in e ? e.current : e;
}, N$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, R$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, P$ = 0, Ko = [];
function T$(e) {
  var t = N.useRef([]), r = N.useRef([0, 0]), o = N.useRef(), s = N.useState(P$++)[0], a = N.useState(NP)[0], l = N.useRef(e);
  N.useEffect(function() {
    l.current = e;
  }, [e]), N.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var y = Q4([e.lockRef.current], (e.shards || []).map(x_), !0).filter(Boolean);
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
    var S = Pl(y), C = r.current, _ = "deltaX" in y ? y.deltaX : C[0] - S[0], k = "deltaY" in y ? y.deltaY : C[1] - S[1], R, T = y.target, A = Math.abs(_) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && A === "h" && T.type === "range")
      return !1;
    var O = y_(A, T);
    if (!O)
      return !0;
    if (O ? R = A : (R = A === "v" ? "h" : "v", O = y_(A, T)), !O)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || k) && (o.current = R), !R)
      return !0;
    var D = o.current || R;
    return k$(D, x, y, D === "h" ? _ : k);
  }, []), f = N.useCallback(function(y) {
    var x = y;
    if (!(!Ko.length || Ko[Ko.length - 1] !== a)) {
      var S = "deltaY" in x ? w_(x) : Pl(x), C = t.current.filter(function(R) {
        return R.name === x.type && (R.target === x.target || x.target === R.shadowParent) && N$(R.delta, S);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var _ = (l.current.shards || []).map(x_).filter(Boolean).filter(function(R) {
          return R.contains(x.target);
        }), k = _.length > 0 ? u(x, _[0]) : !l.current.noIsolation;
        k && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = N.useCallback(function(y, x, S, C) {
    var _ = { name: y, delta: x, target: S, should: C, shadowParent: A$(S) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== _;
      });
    }, 1);
  }, []), h = N.useCallback(function(y) {
    r.current = Pl(y), o.current = void 0;
  }, []), m = N.useCallback(function(y) {
    d(y.type, w_(y), y.target, u(y, e.lockRef.current));
  }, []), g = N.useCallback(function(y) {
    d(y.type, Pl(y), y.target, u(y, e.lockRef.current));
  }, []);
  N.useEffect(function() {
    return Ko.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", f, Yo), document.addEventListener("touchmove", f, Yo), document.addEventListener("touchstart", h, Yo), function() {
      Ko = Ko.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", f, Yo), document.removeEventListener("touchmove", f, Yo), document.removeEventListener("touchstart", h, Yo);
    };
  }, []);
  var w = e.removeScrollBar, E = e.inert;
  return N.createElement(
    N.Fragment,
    null,
    E ? N.createElement(a, { styles: R$(s) }) : null,
    w ? N.createElement(w$, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function A$(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const I$ = s$(kP, T$);
var AP = N.forwardRef(function(e, t) {
  return N.createElement(Su, kn({}, e, { ref: t, sideCar: I$ }));
});
AP.classNames = Su.classNames;
var M$ = [" ", "Enter", "ArrowUp", "ArrowDown"], O$ = [" ", "Enter"], uo = "Select", [Eu, Cu, L$] = jz(uo), [gi] = yu(uo, [
  L$,
  fP
]), ku = fP(), [q$, Ir] = gi(uo), [D$, j$] = gi(uo), IP = (e) => {
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
  } = e, y = ku(t), [x, S] = N.useState(null), [C, _] = N.useState(null), [k, R] = N.useState(!1), T = Fz(d), [A, O] = Xv({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: uo
  }), [D, G] = Xv({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: uo
  }), B = N.useRef(null), V = x ? E || !!x.closest("form") : !0, [X, L] = N.useState(/* @__PURE__ */ new Set()), H = Array.from(X).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ I.jsx(A4, { ...y, children: /* @__PURE__ */ I.jsxs(
    q$,
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
      value: D,
      onValueChange: G,
      open: A,
      onOpenChange: O,
      dir: T,
      triggerPointerDownPosRef: B,
      disabled: g,
      children: [
        /* @__PURE__ */ I.jsx(Eu.Provider, { scope: t, children: /* @__PURE__ */ I.jsx(
          D$,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: N.useCallback(($) => {
              L((Y) => new Set(Y).add($));
            }, []),
            onNativeOptionRemove: N.useCallback(($) => {
              L((Y) => {
                const M = new Set(Y);
                return M.delete($), M;
              });
            }, []),
            children: r
          }
        ) }),
        V ? /* @__PURE__ */ I.jsxs(
          eT,
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
IP.displayName = uo;
var MP = "SelectTrigger", OP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, a = ku(r), l = Ir(MP, r), u = l.disabled || o, f = tt(t, l.onTriggerChange), d = Cu(r), h = N.useRef("touch"), [m, g, w] = nT((y) => {
      const x = d().filter((_) => !_.disabled), S = x.find((_) => _.value === l.value), C = rT(x, y, S);
      C !== void 0 && l.onValueChange(C.value);
    }), E = (y) => {
      u || (l.onOpenChange(!0), w()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ I.jsx(I4, { asChild: !0, ...a, children: /* @__PURE__ */ I.jsx(
      Be.button,
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
        "data-placeholder": tT(l.value) ? "" : void 0,
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
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && g(y.key), !(x && y.key === " ") && M$.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
OP.displayName = MP;
var LP = "SelectValue", qP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: a, placeholder: l = "", ...u } = e, f = Ir(LP, r), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, m = tt(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ I.jsx(
      Be.span,
      {
        ...u,
        ref: m,
        style: { pointerEvents: "none" },
        children: tT(f.value) ? /* @__PURE__ */ I.jsx(I.Fragment, { children: l }) : a
      }
    );
  }
);
qP.displayName = LP;
var z$ = "SelectIcon", DP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ I.jsx(Be.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
DP.displayName = z$;
var F$ = "SelectPortal", jP = (e) => /* @__PURE__ */ I.jsx(xP, { asChild: !0, ...e });
jP.displayName = F$;
var co = "SelectContent", zP = N.forwardRef(
  (e, t) => {
    const r = Ir(co, e.__scopeSelect), [o, s] = N.useState();
    if (yt(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const a = o;
      return a ? Vs.createPortal(
        /* @__PURE__ */ I.jsx(FP, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx(Eu.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ I.jsx($P, { ...e, ref: t });
  }
);
zP.displayName = co;
var un = 10, [FP, Mr] = gi(co), $$ = "SelectContentImpl", B$ = /* @__PURE__ */ q4("SelectContent.RemoveScroll"), $P = N.forwardRef(
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
    } = e, C = Ir(co, r), [_, k] = N.useState(null), [R, T] = N.useState(null), A = tt(t, (K) => k(K)), [O, D] = N.useState(null), [G, B] = N.useState(
      null
    ), V = Cu(r), [X, L] = N.useState(!1), H = N.useRef(!1);
    N.useEffect(() => {
      if (_) return X4(_);
    }, [_]), rF();
    const $ = N.useCallback(
      (K) => {
        const [te, ...se] = V().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of K)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && R && (R.scrollTop = 0), de === ae && R && (R.scrollTop = R.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [V, R]
    ), Y = N.useCallback(
      () => $([O, _]),
      [$, O, _]
    );
    N.useEffect(() => {
      X && Y();
    }, [X, Y]);
    const { onOpenChange: M, triggerPointerDownPosRef: j } = C;
    N.useEffect(() => {
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
    }, [_, M, j]), N.useEffect(() => {
      const K = () => M(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [M]);
    const [Q, q] = nT((K) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = rT(te, K, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), W = N.useCallback(
      (K, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (D(K), ae && (H.current = !0));
      },
      [C.value]
    ), ie = N.useCallback(() => _ == null ? void 0 : _.focus(), [_]), F = N.useCallback(
      (K, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && B(K);
      },
      [C.value]
    ), Z = o === "popper" ? Zv : BP, ee = Z === Zv ? {
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
      FP,
      {
        scope: r,
        content: _,
        viewport: R,
        onViewportChange: T,
        itemRefCallback: W,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: F,
        focusSelectedItem: Y,
        selectedItemText: G,
        position: o,
        isPositioned: X,
        searchRef: Q,
        children: /* @__PURE__ */ I.jsx(AP, { as: B$, allowPinchZoom: !0, children: /* @__PURE__ */ I.jsx(
          KR,
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
              GR,
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
$P.displayName = $$;
var V$ = "SelectItemAlignedPosition", BP = N.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, a = Ir(co, r), l = Mr(co, r), [u, f] = N.useState(null), [d, h] = N.useState(null), m = tt(t, (A) => h(A)), g = Cu(r), w = N.useRef(!1), E = N.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = l, _ = N.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && S) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), G = S.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = G.left - O.left, de = D.left - ce, pe = A.left - de, be = A.width + pe, ge = Math.max(be, O.width), Re = window.innerWidth - un, Ee = X1(de, [
          un,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(un, Re - ge)
        ]);
        u.style.minWidth = be + "px", u.style.left = Ee + "px";
      } else {
        const ce = O.right - G.right, de = window.innerWidth - D.right - ce, pe = window.innerWidth - A.right - de, be = A.width + pe, ge = Math.max(be, O.width), Re = window.innerWidth - un, Ee = X1(de, [
          un,
          Math.max(un, Re - ge)
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
  const [k, R] = N.useState();
  yt(() => {
    d && R(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = N.useCallback(
    (A) => {
      A && E.current === !0 && (_(), C == null || C(), E.current = !1);
    },
    [_, C]
  );
  return /* @__PURE__ */ I.jsx(
    W$,
    {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: T,
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
            Be.div,
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
BP.displayName = V$;
var H$ = "SelectPopperPosition", Zv = N.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = un,
    ...a
  } = e, l = ku(r);
  return /* @__PURE__ */ I.jsx(
    M4,
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
Zv.displayName = H$;
var [W$, My] = gi(co, {}), Jv = "SelectViewport", VP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, a = Mr(Jv, r), l = My(Jv, r), u = tt(t, a.onViewportChange), f = N.useRef(0);
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
        Be.div,
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
VP.displayName = Jv;
var HP = "SelectGroup", [U$, G$] = gi(HP), Y$ = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Ey();
    return /* @__PURE__ */ I.jsx(U$, { scope: r, id: s, children: /* @__PURE__ */ I.jsx(Be.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
Y$.displayName = HP;
var WP = "SelectLabel", K$ = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = G$(WP, r);
    return /* @__PURE__ */ I.jsx(Be.div, { id: s.id, ...o, ref: t });
  }
);
K$.displayName = WP;
var ru = "SelectItem", [X$, UP] = gi(ru), GP = N.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: a,
      ...l
    } = e, u = Ir(ru, r), f = Mr(ru, r), d = u.value === o, [h, m] = N.useState(a ?? ""), [g, w] = N.useState(!1), E = tt(
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
      X$,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: y,
        isSelected: d,
        onItemTextChange: N.useCallback((C) => {
          m((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ I.jsx(
          Eu.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: s,
            textValue: h,
            children: /* @__PURE__ */ I.jsx(
              Be.div,
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
                  ((k = f.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (O$.includes(C.key) && S(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
GP.displayName = ru;
var vs = "SelectItemText", YP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...a } = e, l = Ir(vs, r), u = Mr(vs, r), f = UP(vs, r), d = j$(vs, r), [h, m] = N.useState(null), g = tt(
      t,
      (S) => m(S),
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
      /* @__PURE__ */ I.jsx(Be.span, { id: f.textId, ...a, ref: g }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? Vs.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
YP.displayName = vs;
var KP = "SelectItemIndicator", XP = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return UP(KP, r).isSelected ? /* @__PURE__ */ I.jsx(Be.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
XP.displayName = KP;
var ey = "SelectScrollUpButton", QP = N.forwardRef((e, t) => {
  const r = Mr(ey, e.__scopeSelect), o = My(ey, e.__scopeSelect), [s, a] = N.useState(!1), l = tt(t, o.onScrollButtonChange);
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
    JP,
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
QP.displayName = ey;
var ty = "SelectScrollDownButton", ZP = N.forwardRef((e, t) => {
  const r = Mr(ty, e.__scopeSelect), o = My(ty, e.__scopeSelect), [s, a] = N.useState(!1), l = tt(t, o.onScrollButtonChange);
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
    JP,
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
ZP.displayName = ty;
var JP = N.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, a = Mr("SelectScrollButton", r), l = N.useRef(null), u = Cu(r), f = N.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return N.useEffect(() => () => f(), [f]), yt(() => {
    var h;
    const d = u().find((m) => m.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ I.jsx(
    Be.div,
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
}), Q$ = "SelectSeparator", Z$ = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ I.jsx(Be.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Z$.displayName = Q$;
var ny = "SelectArrow", J$ = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = ku(r), a = Ir(ny, r), l = Mr(ny, r);
    return a.open && l.position === "popper" ? /* @__PURE__ */ I.jsx(O4, { ...s, ...o, ref: t }) : null;
  }
);
J$.displayName = ny;
var eB = "SelectBubbleInput", eT = N.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, o) => {
    const s = N.useRef(null), a = tt(o, s), l = _P(t);
    return N.useEffect(() => {
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
      Be.select,
      {
        ...r,
        style: { ...bP, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
eT.displayName = eB;
function tT(e) {
  return e === "" || e === void 0;
}
function nT(e) {
  const t = ao(e), r = N.useRef(""), o = N.useRef(0), s = N.useCallback(
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
function rT(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let l = tB(e, Math.max(a, 0));
  s.length === 1 && (l = l.filter((d) => d !== r));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function tB(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var nB = IP, rB = OP, oB = qP, iB = DP, sB = jP, aB = zP, lB = VP, uB = GP, cB = YP, fB = XP, dB = QP, hB = ZP;
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pB = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mB = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), __ = (e) => {
  const t = mB(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, oT = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim(), gB = (e) => {
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
var vB = {
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
const yB = N.forwardRef(
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
      ...vB,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: oT("lucide", s),
      ...!a && !gB(u) && { "aria-hidden": "true" },
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
const Oy = (e, t) => {
  const r = N.forwardRef(
    ({ className: o, ...s }, a) => N.createElement(yB, {
      ref: a,
      iconNode: t,
      className: oT(
        `lucide-${pB(__(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = __(e), r;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wB = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], iT = Oy("check", wB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xB = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], sT = Oy("chevron-down", xB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _B = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], bB = Oy("chevron-up", _B);
function SB({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(nB, { "data-slot": "select", ...e });
}
function EB({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(oB, { "data-slot": "select-value", ...e });
}
function CB({
  className: e,
  size: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ I.jsxs(
    rB,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Fe(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ I.jsx(iB, { asChild: !0, children: /* @__PURE__ */ I.jsx(sT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function kB({
  className: e,
  children: t,
  position: r = "popper",
  align: o = "center",
  ...s
}) {
  return /* @__PURE__ */ I.jsx(sB, { children: /* @__PURE__ */ I.jsxs(
    aB,
    {
      "data-slot": "select-content",
      className: Fe(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      align: o,
      ...s,
      children: [
        /* @__PURE__ */ I.jsx(RB, {}),
        /* @__PURE__ */ I.jsx(
          lB,
          {
            className: Fe(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ I.jsx(PB, {})
      ]
    }
  ) });
}
function NB({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ I.jsxs(
    uB,
    {
      "data-slot": "select-item",
      className: Fe(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ I.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ I.jsx(fB, { children: /* @__PURE__ */ I.jsx(iT, { className: "size-4" }) }) }),
        /* @__PURE__ */ I.jsx(cB, { children: t })
      ]
    }
  );
}
function RB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    dB,
    {
      "data-slot": "select-scroll-up-button",
      className: Fe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(bB, { className: "size-4" })
    }
  );
}
function PB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    hB,
    {
      "data-slot": "select-scroll-down-button",
      className: Fe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(sT, { className: "size-4" })
    }
  );
}
function TB({ value: e, options: t, onChange: r, placeholder: o, label: s }) {
  return /* @__PURE__ */ I.jsxs(SB, { value: e, onValueChange: r, children: [
    /* @__PURE__ */ I.jsx(
      CB,
      {
        className: "h-8 text-xs",
        onMouseDown: (a) => a.stopPropagation(),
        onPointerDown: (a) => a.stopPropagation(),
        "aria-label": s,
        children: /* @__PURE__ */ I.jsx(EB, { placeholder: o })
      }
    ),
    /* @__PURE__ */ I.jsx(kB, { children: t.map((a) => /* @__PURE__ */ I.jsx(NB, { value: a, className: "text-xs", children: a }, a)) })
  ] });
}
class AB {
  constructor() {
    fl(this, "renderers", /* @__PURE__ */ new Map());
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
const Xo = new AB();
function aT({ className: e, type: t, ...r }) {
  return /* @__PURE__ */ I.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: Fe(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  );
}
function lT({ value: e, onChange: t, placeholder: r, label: o }) {
  return /* @__PURE__ */ I.jsx(
    aT,
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
function uT({ value: e, onChange: t, isInteger: r, placeholder: o, label: s }) {
  return /* @__PURE__ */ I.jsx(
    aT,
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
function IB(e, t) {
  return N.useReducer((r, o) => t[r][o] ?? r, e);
}
var cT = (e) => {
  const { present: t, children: r } = e, o = MB(t), s = typeof r == "function" ? r({ present: o.isPresent }) : N.Children.only(r), a = tt(o.ref, OB(s));
  return typeof r == "function" || o.isPresent ? N.cloneElement(s, { ref: a }) : null;
};
cT.displayName = "Presence";
function MB(e) {
  const [t, r] = N.useState(), o = N.useRef(null), s = N.useRef(e), a = N.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = IB(l, {
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
    const d = Tl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = s.current;
    if (h !== e) {
      const g = a.current, w = Tl(d);
      e ? f("MOUNT") : w === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && g !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, m = (w) => {
        const y = Tl(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && y && (f("ANIMATION_END"), !s.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (w) => {
        w.target === t && (a.current = Tl(o.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
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
function Tl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function OB(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Nu = "Checkbox", [LB] = yu(Nu), [qB, Ly] = LB(Nu);
function DB(e) {
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
  } = e, [g, w] = Xv({
    prop: r,
    defaultProp: s ?? !1,
    onChange: f,
    caller: Nu
  }), [E, y] = N.useState(null), [x, S] = N.useState(null), C = N.useRef(!1), _ = E ? !!l || !!E.closest("form") : (
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
    defaultChecked: Rr(s) ? !1 : s,
    isFormControl: _,
    bubbleInput: x,
    setBubbleInput: S
  };
  return /* @__PURE__ */ I.jsx(
    qB,
    {
      scope: t,
      ...k,
      children: jB(m) ? m(k) : o
    }
  );
}
var fT = "CheckboxTrigger", dT = N.forwardRef(
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
    } = Ly(fT, e), y = tt(s, h), x = N.useRef(f);
    return N.useEffect(() => {
      const S = a == null ? void 0 : a.form;
      if (S) {
        const C = () => m(x.current);
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [a, m]), /* @__PURE__ */ I.jsx(
      Be.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Rr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": yT(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Qe(t, (S) => {
          S.key === "Enter" && S.preventDefault();
        }),
        onClick: Qe(r, (S) => {
          m((C) => Rr(C) ? !0 : !C), E && w && (g.current = S.isPropagationStopped(), g.current || S.stopPropagation());
        })
      }
    );
  }
);
dT.displayName = fT;
var hT = N.forwardRef(
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
      DB,
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
            dT,
            {
              ...m,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          g && /* @__PURE__ */ I.jsx(
            vT,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
hT.displayName = Nu;
var pT = "CheckboxIndicator", mT = N.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: o, ...s } = e, a = Ly(pT, r);
    return /* @__PURE__ */ I.jsx(
      cT,
      {
        present: o || Rr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ I.jsx(
          Be.span,
          {
            "data-state": yT(a.checked),
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
mT.displayName = pT;
var gT = "CheckboxBubbleInput", vT = N.forwardRef(
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
    } = Ly(gT, e), E = tt(r, w), y = _P(a), x = uP(o);
    N.useEffect(() => {
      const C = g;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, T = !s.current;
      if (y !== a && R) {
        const A = new Event("click", { bubbles: T });
        C.indeterminate = Rr(a), R.call(C, Rr(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [g, y, a, s]);
    const S = N.useRef(Rr(a) ? !1 : a);
    return /* @__PURE__ */ I.jsx(
      Be.input,
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
vT.displayName = gT;
function jB(e) {
  return typeof e == "function";
}
function Rr(e) {
  return e === "indeterminate";
}
function yT(e) {
  return Rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function zB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    hT,
    {
      "data-slot": "checkbox",
      className: Fe(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(
        mT,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ I.jsx(iT, { className: "size-3.5" })
        }
      )
    }
  );
}
function FB({ value: e, onChange: t, label: r }) {
  return /* @__PURE__ */ I.jsx(
    zB,
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
function $B(e, t = []) {
  let r = [];
  function o(a, l) {
    const u = N.createContext(l);
    u.displayName = a + "Context";
    const f = r.length;
    r = [...r, l];
    const d = (m) => {
      var S;
      const { scope: g, children: w, ...E } = m, y = ((S = g == null ? void 0 : g[e]) == null ? void 0 : S[f]) || u, x = N.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ I.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(m, g) {
      var y;
      const w = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[f]) || u, E = N.useContext(w);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
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
  return s.scopeName = e, [o, BB(s, ...t)];
}
function BB(...e) {
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
      return N.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var VB = [
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
], wT = VB.reduce((e, t) => {
  const r = /* @__PURE__ */ by(`Primitive.${t}`), o = N.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), qy = "Progress", Dy = 100, [HB] = $B(qy), [WB, UB] = HB(qy), xT = N.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: s,
      getValueLabel: a = GB,
      ...l
    } = e;
    (s || s === 0) && !b_(s) && console.error(YB(`${s}`, "Progress"));
    const u = b_(s) ? s : Dy;
    o !== null && !S_(o, u) && console.error(KB(`${o}`, "Progress"));
    const f = S_(o, u) ? o : null, d = ou(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ I.jsx(WB, { scope: r, value: f, max: u, children: /* @__PURE__ */ I.jsx(
      wT.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": ou(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": ST(f, u),
        "data-value": f ?? void 0,
        "data-max": u,
        ...l,
        ref: t
      }
    ) });
  }
);
xT.displayName = qy;
var _T = "ProgressIndicator", bT = N.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...o } = e, s = UB(_T, r);
    return /* @__PURE__ */ I.jsx(
      wT.div,
      {
        "data-state": ST(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: t
      }
    );
  }
);
bT.displayName = _T;
function GB(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function ST(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ou(e) {
  return typeof e == "number";
}
function b_(e) {
  return ou(e) && !isNaN(e) && e > 0;
}
function S_(e, t) {
  return ou(e) && !isNaN(e) && e <= t && e >= 0;
}
function YB(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Dy}\`.`;
}
function KB(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Dy} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var XB = xT, QB = bT;
function ZB({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ I.jsx(
    XB,
    {
      "data-slot": "progress",
      className: Fe(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...r,
      children: /* @__PURE__ */ I.jsx(
        QB,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function JB({ value: e, onChange: t, label: r, property: o }) {
  const s = (o == null ? void 0 : o.maximum) ?? 100, a = (o == null ? void 0 : o.minimum) ?? 0, l = Math.min(100, Math.max(0, (e - a) / (s - a) * 100));
  return /* @__PURE__ */ I.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ I.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ I.jsx("span", { className: "text-muted-foreground", children: (o == null ? void 0 : o.description) || "Progress" }),
      /* @__PURE__ */ I.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
        Math.round(l),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ I.jsx(ZB, { value: l, className: "h-2" })
  ] });
}
const e5 = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  lT,
  {
    value: String(e || ""),
    onChange: r,
    placeholder: t.description,
    label: o
  }
), t5 = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  uT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: r,
    isInteger: !1,
    placeholder: t.description,
    label: o
  }
), n5 = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  uT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: r,
    isInteger: !0,
    placeholder: t.description,
    label: o
  }
), r5 = ({ value: e, onChange: t, label: r }) => /* @__PURE__ */ I.jsx(FB, { value: !!e, onChange: t, label: r }), o5 = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  JB,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: r,
    property: t,
    label: o
  }
), i5 = ({ value: e, property: t, onChange: r, label: o }) => /* @__PURE__ */ I.jsx(
  lT,
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
function s5() {
  Xo.register("string", e5), Xo.register("number", t5), Xo.register("integer", n5), Xo.register("boolean", r5), Xo.register("progress", o5);
}
s5();
function a5({ fieldKey: e, property: t, value: r, onChange: o, label: s, inputId: a }) {
  return t.enum ? /* @__PURE__ */ I.jsx(
    TB,
    {
      value: String(r || ""),
      options: t.enum.map(String),
      onChange: o,
      placeholder: t.description,
      id: a,
      label: s
    }
  ) : (Xo.get(t.type) || i5)({ value: r, property: t, onChange: o, id: a, label: s });
}
var l5 = [
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
], u5 = l5.reduce((e, t) => {
  const r = /* @__PURE__ */ by(`Primitive.${t}`), o = N.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), c5 = "Label", ET = N.forwardRef((e, t) => /* @__PURE__ */ I.jsx(
  u5.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var s;
      r.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
ET.displayName = c5;
var f5 = ET;
function d5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    f5,
    {
      "data-slot": "label",
      className: Fe(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function h5({
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
            className: Fe("flex flex-col gap-1", d == null ? void 0 : d.className),
            title: d == null ? void 0 : d.tooltip,
            children: [
              /* @__PURE__ */ I.jsx(
                d5,
                {
                  htmlFor: g,
                  className: Fe(
                    "text-xs font-medium flex items-center gap-1",
                    m && "after:content-['*'] after:text-destructive after:ml-0.5",
                    w && "opacity-50 cursor-not-allowed"
                  ),
                  children: f.title || u
                }
              ),
              /* @__PURE__ */ I.jsx(
                a5,
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
N.createContext(null);
function jy(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pd, E_;
function p5() {
  if (E_) return pd;
  E_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return pd = e, pd;
}
var md, C_;
function vi() {
  if (C_) return md;
  C_ = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return md = e, md;
}
var gd, k_;
function Ru() {
  if (k_) return gd;
  k_ = 1;
  var e = vi();
  function t(r, o) {
    for (var s = r.length; s--; )
      if (e(r[s][0], o))
        return s;
    return -1;
  }
  return gd = t, gd;
}
var vd, N_;
function m5() {
  if (N_) return vd;
  N_ = 1;
  var e = Ru(), t = Array.prototype, r = t.splice;
  function o(s) {
    var a = this.__data__, l = e(a, s);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : r.call(a, l, 1), --this.size, !0;
  }
  return vd = o, vd;
}
var yd, R_;
function g5() {
  if (R_) return yd;
  R_ = 1;
  var e = Ru();
  function t(r) {
    var o = this.__data__, s = e(o, r);
    return s < 0 ? void 0 : o[s][1];
  }
  return yd = t, yd;
}
var wd, P_;
function v5() {
  if (P_) return wd;
  P_ = 1;
  var e = Ru();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return wd = t, wd;
}
var xd, T_;
function y5() {
  if (T_) return xd;
  T_ = 1;
  var e = Ru();
  function t(r, o) {
    var s = this.__data__, a = e(s, r);
    return a < 0 ? (++this.size, s.push([r, o])) : s[a][1] = o, this;
  }
  return xd = t, xd;
}
var _d, A_;
function Pu() {
  if (A_) return _d;
  A_ = 1;
  var e = p5(), t = m5(), r = g5(), o = v5(), s = y5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, _d = a, _d;
}
var bd, I_;
function w5() {
  if (I_) return bd;
  I_ = 1;
  var e = Pu();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return bd = t, bd;
}
var Sd, M_;
function x5() {
  if (M_) return Sd;
  M_ = 1;
  function e(t) {
    var r = this.__data__, o = r.delete(t);
    return this.size = r.size, o;
  }
  return Sd = e, Sd;
}
var Ed, O_;
function _5() {
  if (O_) return Ed;
  O_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Ed = e, Ed;
}
var Cd, L_;
function b5() {
  if (L_) return Cd;
  L_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Cd = e, Cd;
}
var kd, q_;
function CT() {
  if (q_) return kd;
  q_ = 1;
  var e = typeof dl == "object" && dl && dl.Object === Object && dl;
  return kd = e, kd;
}
var Nd, D_;
function yn() {
  if (D_) return Nd;
  D_ = 1;
  var e = CT(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Nd = r, Nd;
}
var Rd, j_;
function yi() {
  if (j_) return Rd;
  j_ = 1;
  var e = yn(), t = e.Symbol;
  return Rd = t, Rd;
}
var Pd, z_;
function S5() {
  if (z_) return Pd;
  z_ = 1;
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
  return Pd = a, Pd;
}
var Td, F_;
function E5() {
  if (F_) return Td;
  F_ = 1;
  var e = Object.prototype, t = e.toString;
  function r(o) {
    return t.call(o);
  }
  return Td = r, Td;
}
var Ad, $_;
function fo() {
  if ($_) return Ad;
  $_ = 1;
  var e = yi(), t = S5(), r = E5(), o = "[object Null]", s = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? s : o : a && a in Object(u) ? t(u) : r(u);
  }
  return Ad = l, Ad;
}
var Id, B_;
function Zt() {
  if (B_) return Id;
  B_ = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Id = e, Id;
}
var Md, V_;
function Us() {
  if (V_) return Md;
  V_ = 1;
  var e = fo(), t = Zt(), r = "[object AsyncFunction]", o = "[object Function]", s = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == s || f == r || f == a;
  }
  return Md = l, Md;
}
var Od, H_;
function C5() {
  if (H_) return Od;
  H_ = 1;
  var e = yn(), t = e["__core-js_shared__"];
  return Od = t, Od;
}
var Ld, W_;
function k5() {
  if (W_) return Ld;
  W_ = 1;
  var e = C5(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function r(o) {
    return !!t && t in o;
  }
  return Ld = r, Ld;
}
var qd, U_;
function kT() {
  if (U_) return qd;
  U_ = 1;
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
  return qd = r, qd;
}
var Dd, G_;
function N5() {
  if (G_) return Dd;
  G_ = 1;
  var e = Us(), t = k5(), r = Zt(), o = kT(), s = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function m(g) {
    if (!r(g) || t(g))
      return !1;
    var w = e(g) ? h : a;
    return w.test(o(g));
  }
  return Dd = m, Dd;
}
var jd, Y_;
function R5() {
  if (Y_) return jd;
  Y_ = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return jd = e, jd;
}
var zd, K_;
function ho() {
  if (K_) return zd;
  K_ = 1;
  var e = N5(), t = R5();
  function r(o, s) {
    var a = t(o, s);
    return e(a) ? a : void 0;
  }
  return zd = r, zd;
}
var Fd, X_;
function zy() {
  if (X_) return Fd;
  X_ = 1;
  var e = ho(), t = yn(), r = e(t, "Map");
  return Fd = r, Fd;
}
var $d, Q_;
function Tu() {
  if (Q_) return $d;
  Q_ = 1;
  var e = ho(), t = e(Object, "create");
  return $d = t, $d;
}
var Bd, Z_;
function P5() {
  if (Z_) return Bd;
  Z_ = 1;
  var e = Tu();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Bd = t, Bd;
}
var Vd, J_;
function T5() {
  if (J_) return Vd;
  J_ = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Vd = e, Vd;
}
var Hd, eb;
function A5() {
  if (eb) return Hd;
  eb = 1;
  var e = Tu(), t = "__lodash_hash_undefined__", r = Object.prototype, o = r.hasOwnProperty;
  function s(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return Hd = s, Hd;
}
var Wd, tb;
function I5() {
  if (tb) return Wd;
  tb = 1;
  var e = Tu(), t = Object.prototype, r = t.hasOwnProperty;
  function o(s) {
    var a = this.__data__;
    return e ? a[s] !== void 0 : r.call(a, s);
  }
  return Wd = o, Wd;
}
var Ud, nb;
function M5() {
  if (nb) return Ud;
  nb = 1;
  var e = Tu(), t = "__lodash_hash_undefined__";
  function r(o, s) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && s === void 0 ? t : s, this;
  }
  return Ud = r, Ud;
}
var Gd, rb;
function O5() {
  if (rb) return Gd;
  rb = 1;
  var e = P5(), t = T5(), r = A5(), o = I5(), s = M5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, Gd = a, Gd;
}
var Yd, ob;
function L5() {
  if (ob) return Yd;
  ob = 1;
  var e = O5(), t = Pu(), r = zy();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Yd = o, Yd;
}
var Kd, ib;
function q5() {
  if (ib) return Kd;
  ib = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Kd = e, Kd;
}
var Xd, sb;
function Au() {
  if (sb) return Xd;
  sb = 1;
  var e = q5();
  function t(r, o) {
    var s = r.__data__;
    return e(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
  }
  return Xd = t, Xd;
}
var Qd, ab;
function D5() {
  if (ab) return Qd;
  ab = 1;
  var e = Au();
  function t(r) {
    var o = e(this, r).delete(r);
    return this.size -= o ? 1 : 0, o;
  }
  return Qd = t, Qd;
}
var Zd, lb;
function j5() {
  if (lb) return Zd;
  lb = 1;
  var e = Au();
  function t(r) {
    return e(this, r).get(r);
  }
  return Zd = t, Zd;
}
var Jd, ub;
function z5() {
  if (ub) return Jd;
  ub = 1;
  var e = Au();
  function t(r) {
    return e(this, r).has(r);
  }
  return Jd = t, Jd;
}
var eh, cb;
function F5() {
  if (cb) return eh;
  cb = 1;
  var e = Au();
  function t(r, o) {
    var s = e(this, r), a = s.size;
    return s.set(r, o), this.size += s.size == a ? 0 : 1, this;
  }
  return eh = t, eh;
}
var th, fb;
function Fy() {
  if (fb) return th;
  fb = 1;
  var e = L5(), t = D5(), r = j5(), o = z5(), s = F5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, th = a, th;
}
var nh, db;
function $5() {
  if (db) return nh;
  db = 1;
  var e = Pu(), t = zy(), r = Fy(), o = 200;
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
  return nh = s, nh;
}
var rh, hb;
function Iu() {
  if (hb) return rh;
  hb = 1;
  var e = Pu(), t = w5(), r = x5(), o = _5(), s = b5(), a = $5();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = r, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, rh = l, rh;
}
var oh, pb;
function $y() {
  if (pb) return oh;
  pb = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s && r(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return oh = e, oh;
}
var ih, mb;
function NT() {
  if (mb) return ih;
  mb = 1;
  var e = ho(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return ih = t, ih;
}
var sh, gb;
function Mu() {
  if (gb) return sh;
  gb = 1;
  var e = NT();
  function t(r, o, s) {
    o == "__proto__" && e ? e(r, o, {
      configurable: !0,
      enumerable: !0,
      value: s,
      writable: !0
    }) : r[o] = s;
  }
  return sh = t, sh;
}
var ah, vb;
function Ou() {
  if (vb) return ah;
  vb = 1;
  var e = Mu(), t = vi(), r = Object.prototype, o = r.hasOwnProperty;
  function s(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return ah = s, ah;
}
var lh, yb;
function Gs() {
  if (yb) return lh;
  yb = 1;
  var e = Ou(), t = Mu();
  function r(o, s, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = s.length; ++f < d; ) {
      var h = s[f], m = l ? l(a[h], o[h], h, a, o) : void 0;
      m === void 0 && (m = o[h]), u ? t(a, h, m) : e(a, h, m);
    }
    return a;
  }
  return lh = r, lh;
}
var uh, wb;
function B5() {
  if (wb) return uh;
  wb = 1;
  function e(t, r) {
    for (var o = -1, s = Array(t); ++o < t; )
      s[o] = r(o);
    return s;
  }
  return uh = e, uh;
}
var ch, xb;
function On() {
  if (xb) return ch;
  xb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ch = e, ch;
}
var fh, _b;
function V5() {
  if (_b) return fh;
  _b = 1;
  var e = fo(), t = On(), r = "[object Arguments]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return fh = o, fh;
}
var dh, bb;
function Ys() {
  if (bb) return dh;
  bb = 1;
  var e = V5(), t = On(), r = Object.prototype, o = r.hasOwnProperty, s = r.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !s.call(l, "callee");
  };
  return dh = a, dh;
}
var hh, Sb;
function rt() {
  if (Sb) return hh;
  Sb = 1;
  var e = Array.isArray;
  return hh = e, hh;
}
var ys = { exports: {} }, ph, Eb;
function H5() {
  if (Eb) return ph;
  Eb = 1;
  function e() {
    return !1;
  }
  return ph = e, ph;
}
ys.exports;
var Cb;
function wi() {
  return Cb || (Cb = 1, (function(e, t) {
    var r = yn(), o = H5(), s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, l = a && a.exports === s, u = l ? r.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(ys, ys.exports)), ys.exports;
}
var mh, kb;
function Lu() {
  if (kb) return mh;
  kb = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(o, s) {
    var a = typeof o;
    return s = s ?? e, !!s && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < s;
  }
  return mh = r, mh;
}
var gh, Nb;
function By() {
  if (Nb) return gh;
  Nb = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return gh = t, gh;
}
var vh, Rb;
function W5() {
  if (Rb) return vh;
  Rb = 1;
  var e = fo(), t = By(), r = On(), o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", m = "[object Object]", g = "[object RegExp]", w = "[object Set]", E = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", S = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", k = "[object Int8Array]", R = "[object Int16Array]", T = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", G = "[object Uint32Array]", B = {};
  B[C] = B[_] = B[k] = B[R] = B[T] = B[A] = B[O] = B[D] = B[G] = !0, B[o] = B[s] = B[x] = B[a] = B[S] = B[l] = B[u] = B[f] = B[d] = B[h] = B[m] = B[g] = B[w] = B[E] = B[y] = !1;
  function V(X) {
    return r(X) && t(X.length) && !!B[e(X)];
  }
  return vh = V, vh;
}
var yh, Pb;
function qu() {
  if (Pb) return yh;
  Pb = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return yh = e, yh;
}
var ws = { exports: {} };
ws.exports;
var Tb;
function Vy() {
  return Tb || (Tb = 1, (function(e, t) {
    var r = CT(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a && r.process, u = (function() {
      try {
        var f = s && s.require && s.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(ws, ws.exports)), ws.exports;
}
var wh, Ab;
function Ks() {
  if (Ab) return wh;
  Ab = 1;
  var e = W5(), t = qu(), r = Vy(), o = r && r.isTypedArray, s = o ? t(o) : e;
  return wh = s, wh;
}
var xh, Ib;
function RT() {
  if (Ib) return xh;
  Ib = 1;
  var e = B5(), t = Ys(), r = rt(), o = wi(), s = Lu(), a = Ks(), l = Object.prototype, u = l.hasOwnProperty;
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
  return xh = f, xh;
}
var _h, Mb;
function Du() {
  if (Mb) return _h;
  Mb = 1;
  var e = Object.prototype;
  function t(r) {
    var o = r && r.constructor, s = typeof o == "function" && o.prototype || e;
    return r === s;
  }
  return _h = t, _h;
}
var bh, Ob;
function PT() {
  if (Ob) return bh;
  Ob = 1;
  function e(t, r) {
    return function(o) {
      return t(r(o));
    };
  }
  return bh = e, bh;
}
var Sh, Lb;
function U5() {
  if (Lb) return Sh;
  Lb = 1;
  var e = PT(), t = e(Object.keys, Object);
  return Sh = t, Sh;
}
var Eh, qb;
function Hy() {
  if (qb) return Eh;
  qb = 1;
  var e = Du(), t = U5(), r = Object.prototype, o = r.hasOwnProperty;
  function s(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return Eh = s, Eh;
}
var Ch, Db;
function Zn() {
  if (Db) return Ch;
  Db = 1;
  var e = Us(), t = By();
  function r(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Ch = r, Ch;
}
var kh, jb;
function Or() {
  if (jb) return kh;
  jb = 1;
  var e = RT(), t = Hy(), r = Zn();
  function o(s) {
    return r(s) ? e(s) : t(s);
  }
  return kh = o, kh;
}
var Nh, zb;
function G5() {
  if (zb) return Nh;
  zb = 1;
  var e = Gs(), t = Or();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return Nh = r, Nh;
}
var Rh, Fb;
function Y5() {
  if (Fb) return Rh;
  Fb = 1;
  function e(t) {
    var r = [];
    if (t != null)
      for (var o in Object(t))
        r.push(o);
    return r;
  }
  return Rh = e, Rh;
}
var Ph, $b;
function K5() {
  if ($b) return Ph;
  $b = 1;
  var e = Zt(), t = Du(), r = Y5(), o = Object.prototype, s = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return r(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !s.call(l, d)) || f.push(d);
    return f;
  }
  return Ph = a, Ph;
}
var Th, Bb;
function po() {
  if (Bb) return Th;
  Bb = 1;
  var e = RT(), t = K5(), r = Zn();
  function o(s) {
    return r(s) ? e(s, !0) : t(s);
  }
  return Th = o, Th;
}
var Ah, Vb;
function X5() {
  if (Vb) return Ah;
  Vb = 1;
  var e = Gs(), t = po();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return Ah = r, Ah;
}
var xs = { exports: {} };
xs.exports;
var Hb;
function TT() {
  return Hb || (Hb = 1, (function(e, t) {
    var r = yn(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a ? r.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var m = d.length, g = u ? u(m) : new d.constructor(m);
      return d.copy(g), g;
    }
    e.exports = f;
  })(xs, xs.exports)), xs.exports;
}
var Ih, Wb;
function AT() {
  if (Wb) return Ih;
  Wb = 1;
  function e(t, r) {
    var o = -1, s = t.length;
    for (r || (r = Array(s)); ++o < s; )
      r[o] = t[o];
    return r;
  }
  return Ih = e, Ih;
}
var Mh, Ub;
function IT() {
  if (Ub) return Mh;
  Ub = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = 0, l = []; ++o < s; ) {
      var u = t[o];
      r(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return Mh = e, Mh;
}
var Oh, Gb;
function MT() {
  if (Gb) return Oh;
  Gb = 1;
  function e() {
    return [];
  }
  return Oh = e, Oh;
}
var Lh, Yb;
function Wy() {
  if (Yb) return Lh;
  Yb = 1;
  var e = IT(), t = MT(), r = Object.prototype, o = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, a = s ? function(l) {
    return l == null ? [] : (l = Object(l), e(s(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return Lh = a, Lh;
}
var qh, Kb;
function Q5() {
  if (Kb) return qh;
  Kb = 1;
  var e = Gs(), t = Wy();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return qh = r, qh;
}
var Dh, Xb;
function Uy() {
  if (Xb) return Dh;
  Xb = 1;
  function e(t, r) {
    for (var o = -1, s = r.length, a = t.length; ++o < s; )
      t[a + o] = r[o];
    return t;
  }
  return Dh = e, Dh;
}
var jh, Qb;
function ju() {
  if (Qb) return jh;
  Qb = 1;
  var e = PT(), t = e(Object.getPrototypeOf, Object);
  return jh = t, jh;
}
var zh, Zb;
function OT() {
  if (Zb) return zh;
  Zb = 1;
  var e = Uy(), t = ju(), r = Wy(), o = MT(), s = Object.getOwnPropertySymbols, a = s ? function(l) {
    for (var u = []; l; )
      e(u, r(l)), l = t(l);
    return u;
  } : o;
  return zh = a, zh;
}
var Fh, Jb;
function Z5() {
  if (Jb) return Fh;
  Jb = 1;
  var e = Gs(), t = OT();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return Fh = r, Fh;
}
var $h, eS;
function LT() {
  if (eS) return $h;
  eS = 1;
  var e = Uy(), t = rt();
  function r(o, s, a) {
    var l = s(o);
    return t(o) ? l : e(l, a(o));
  }
  return $h = r, $h;
}
var Bh, tS;
function qT() {
  if (tS) return Bh;
  tS = 1;
  var e = LT(), t = Wy(), r = Or();
  function o(s) {
    return e(s, r, t);
  }
  return Bh = o, Bh;
}
var Vh, nS;
function J5() {
  if (nS) return Vh;
  nS = 1;
  var e = LT(), t = OT(), r = po();
  function o(s) {
    return e(s, r, t);
  }
  return Vh = o, Vh;
}
var Hh, rS;
function eV() {
  if (rS) return Hh;
  rS = 1;
  var e = ho(), t = yn(), r = e(t, "DataView");
  return Hh = r, Hh;
}
var Wh, oS;
function tV() {
  if (oS) return Wh;
  oS = 1;
  var e = ho(), t = yn(), r = e(t, "Promise");
  return Wh = r, Wh;
}
var Uh, iS;
function DT() {
  if (iS) return Uh;
  iS = 1;
  var e = ho(), t = yn(), r = e(t, "Set");
  return Uh = r, Uh;
}
var Gh, sS;
function nV() {
  if (sS) return Gh;
  sS = 1;
  var e = ho(), t = yn(), r = e(t, "WeakMap");
  return Gh = r, Gh;
}
var Yh, aS;
function xi() {
  if (aS) return Yh;
  aS = 1;
  var e = eV(), t = zy(), r = tV(), o = DT(), s = nV(), a = fo(), l = kT(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", m = "[object WeakMap]", g = "[object DataView]", w = l(e), E = l(t), y = l(r), x = l(o), S = l(s), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != g || t && C(new t()) != u || r && C(r.resolve()) != d || o && C(new o()) != h || s && C(new s()) != m) && (C = function(_) {
    var k = a(_), R = k == f ? _.constructor : void 0, T = R ? l(R) : "";
    if (T)
      switch (T) {
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
  }), Yh = C, Yh;
}
var Kh, lS;
function rV() {
  if (lS) return Kh;
  lS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o) {
    var s = o.length, a = new o.constructor(s);
    return s && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return Kh = r, Kh;
}
var Xh, uS;
function jT() {
  if (uS) return Xh;
  uS = 1;
  var e = yn(), t = e.Uint8Array;
  return Xh = t, Xh;
}
var Qh, cS;
function Gy() {
  if (cS) return Qh;
  cS = 1;
  var e = jT();
  function t(r) {
    var o = new r.constructor(r.byteLength);
    return new e(o).set(new e(r)), o;
  }
  return Qh = t, Qh;
}
var Zh, fS;
function oV() {
  if (fS) return Zh;
  fS = 1;
  var e = Gy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.byteLength);
  }
  return Zh = t, Zh;
}
var Jh, dS;
function iV() {
  if (dS) return Jh;
  dS = 1;
  var e = /\w*$/;
  function t(r) {
    var o = new r.constructor(r.source, e.exec(r));
    return o.lastIndex = r.lastIndex, o;
  }
  return Jh = t, Jh;
}
var ep, hS;
function sV() {
  if (hS) return ep;
  hS = 1;
  var e = yi(), t = e ? e.prototype : void 0, r = t ? t.valueOf : void 0;
  function o(s) {
    return r ? Object(r.call(s)) : {};
  }
  return ep = o, ep;
}
var tp, pS;
function zT() {
  if (pS) return tp;
  pS = 1;
  var e = Gy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.length);
  }
  return tp = t, tp;
}
var np, mS;
function aV() {
  if (mS) return np;
  mS = 1;
  var e = Gy(), t = oV(), r = iV(), o = sV(), s = zT(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", m = "[object String]", g = "[object Symbol]", w = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", k = "[object Uint8Array]", R = "[object Uint8ClampedArray]", T = "[object Uint16Array]", A = "[object Uint32Array]";
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
      case R:
      case T:
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
  return np = O, np;
}
var rp, gS;
function FT() {
  if (gS) return rp;
  gS = 1;
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
  return rp = r, rp;
}
var op, vS;
function $T() {
  if (vS) return op;
  vS = 1;
  var e = FT(), t = ju(), r = Du();
  function o(s) {
    return typeof s.constructor == "function" && !r(s) ? e(t(s)) : {};
  }
  return op = o, op;
}
var ip, yS;
function lV() {
  if (yS) return ip;
  yS = 1;
  var e = xi(), t = On(), r = "[object Map]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return ip = o, ip;
}
var sp, wS;
function uV() {
  if (wS) return sp;
  wS = 1;
  var e = lV(), t = qu(), r = Vy(), o = r && r.isMap, s = o ? t(o) : e;
  return sp = s, sp;
}
var ap, xS;
function cV() {
  if (xS) return ap;
  xS = 1;
  var e = xi(), t = On(), r = "[object Set]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return ap = o, ap;
}
var lp, _S;
function fV() {
  if (_S) return lp;
  _S = 1;
  var e = cV(), t = qu(), r = Vy(), o = r && r.isSet, s = o ? t(o) : e;
  return lp = s, lp;
}
var up, bS;
function BT() {
  if (bS) return up;
  bS = 1;
  var e = Iu(), t = $y(), r = Ou(), o = G5(), s = X5(), a = TT(), l = AT(), u = Q5(), f = Z5(), d = qT(), h = J5(), m = xi(), g = rV(), w = aV(), E = $T(), y = rt(), x = wi(), S = uV(), C = Zt(), _ = fV(), k = Or(), R = po(), T = 1, A = 2, O = 4, D = "[object Arguments]", G = "[object Array]", B = "[object Boolean]", V = "[object Date]", X = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", $ = "[object Map]", Y = "[object Number]", M = "[object Object]", j = "[object RegExp]", Q = "[object Set]", q = "[object String]", W = "[object Symbol]", ie = "[object WeakMap]", F = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", K = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", be = "[object Uint32Array]", ge = {};
  ge[D] = ge[G] = ge[F] = ge[Z] = ge[B] = ge[V] = ge[ee] = ge[K] = ge[te] = ge[se] = ge[ae] = ge[$] = ge[Y] = ge[M] = ge[j] = ge[Q] = ge[q] = ge[W] = ge[ce] = ge[de] = ge[pe] = ge[be] = !0, ge[X] = ge[L] = ge[ie] = !1;
  function Re(Ee, Ze, He, Ft, ht, at) {
    var We, en = Ze & T, $t = Ze & A, tn = Ze & O;
    if (He && (We = ht ? He(Ee, Ft, ht, at) : He(Ee)), We !== void 0)
      return We;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (We = g(Ee), !en)
        return l(Ee, We);
    } else {
      var _t = m(Ee), Lr = _t == L || _t == H;
      if (x(Ee))
        return a(Ee, en);
      if (_t == M || _t == D || Lr && !ht) {
        if (We = $t || Lr ? {} : E(Ee), !en)
          return $t ? f(Ee, s(We, Ee)) : u(Ee, o(We, Ee));
      } else {
        if (!ge[_t])
          return ht ? Ee : {};
        We = w(Ee, _t, en);
      }
    }
    at || (at = new e());
    var Vt = at.get(Ee);
    if (Vt)
      return Vt;
    at.set(Ee, We), _(Ee) ? Ee.forEach(function(Tt) {
      We.add(Re(Tt, Ze, He, Tt, Ee, at));
    }) : S(Ee) && Ee.forEach(function(Tt, Ht) {
      We.set(Ht, Re(Tt, Ze, He, Ht, Ee, at));
    });
    var Ln = tn ? $t ? h : d : $t ? R : k, go = Bt ? void 0 : Ln(Ee);
    return t(go || Ee, function(Tt, Ht) {
      go && (Ht = Tt, Tt = Ee[Ht]), r(We, Ht, Re(Tt, Ze, He, Ht, Ee, at));
    }), We;
  }
  return up = Re, up;
}
var cp, SS;
function dV() {
  if (SS) return cp;
  SS = 1;
  var e = BT(), t = 4;
  function r(o) {
    return e(o, t);
  }
  return cp = r, cp;
}
var fp, ES;
function Yy() {
  if (ES) return fp;
  ES = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return fp = e, fp;
}
var dp, CS;
function hV() {
  if (CS) return dp;
  CS = 1;
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
  return dp = e, dp;
}
var hp, kS;
function Ky() {
  if (kS) return hp;
  kS = 1;
  var e = hV(), t = e();
  return hp = t, hp;
}
var pp, NS;
function Xy() {
  if (NS) return pp;
  NS = 1;
  var e = Ky(), t = Or();
  function r(o, s) {
    return o && e(o, s, t);
  }
  return pp = r, pp;
}
var mp, RS;
function pV() {
  if (RS) return mp;
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
  return mp = t, mp;
}
var gp, PS;
function zu() {
  if (PS) return gp;
  PS = 1;
  var e = Xy(), t = pV(), r = t(e);
  return gp = r, gp;
}
var vp, TS;
function mo() {
  if (TS) return vp;
  TS = 1;
  function e(t) {
    return t;
  }
  return vp = e, vp;
}
var yp, AS;
function VT() {
  if (AS) return yp;
  AS = 1;
  var e = mo();
  function t(r) {
    return typeof r == "function" ? r : e;
  }
  return yp = t, yp;
}
var wp, IS;
function HT() {
  if (IS) return wp;
  IS = 1;
  var e = $y(), t = zu(), r = VT(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l));
  }
  return wp = s, wp;
}
var xp, MS;
function WT() {
  return MS || (MS = 1, xp = HT()), xp;
}
var _p, OS;
function mV() {
  if (OS) return _p;
  OS = 1;
  var e = zu();
  function t(r, o) {
    var s = [];
    return e(r, function(a, l, u) {
      o(a, l, u) && s.push(a);
    }), s;
  }
  return _p = t, _p;
}
var bp, LS;
function gV() {
  if (LS) return bp;
  LS = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return bp = t, bp;
}
var Sp, qS;
function vV() {
  if (qS) return Sp;
  qS = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Sp = e, Sp;
}
var Ep, DS;
function UT() {
  if (DS) return Ep;
  DS = 1;
  var e = Fy(), t = gV(), r = vV();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(s[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = r, Ep = o, Ep;
}
var Cp, jS;
function yV() {
  if (jS) return Cp;
  jS = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; )
      if (r(t[o], o, t))
        return !0;
    return !1;
  }
  return Cp = e, Cp;
}
var kp, zS;
function GT() {
  if (zS) return kp;
  zS = 1;
  function e(t, r) {
    return t.has(r);
  }
  return kp = e, kp;
}
var Np, FS;
function YT() {
  if (FS) return Np;
  FS = 1;
  var e = UT(), t = yV(), r = GT(), o = 1, s = 2;
  function a(l, u, f, d, h, m) {
    var g = f & o, w = l.length, E = u.length;
    if (w != E && !(g && E > w))
      return !1;
    var y = m.get(l), x = m.get(u);
    if (y && x)
      return y == u && x == l;
    var S = -1, C = !0, _ = f & s ? new e() : void 0;
    for (m.set(l, u), m.set(u, l); ++S < w; ) {
      var k = l[S], R = u[S];
      if (d)
        var T = g ? d(R, k, S, u, l, m) : d(k, R, S, l, u, m);
      if (T !== void 0) {
        if (T)
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
      } else if (!(k === R || h(k, R, f, d, m))) {
        C = !1;
        break;
      }
    }
    return m.delete(l), m.delete(u), C;
  }
  return Np = a, Np;
}
var Rp, $S;
function wV() {
  if ($S) return Rp;
  $S = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s, a) {
      o[++r] = [a, s];
    }), o;
  }
  return Rp = e, Rp;
}
var Pp, BS;
function Qy() {
  if (BS) return Pp;
  BS = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s) {
      o[++r] = s;
    }), o;
  }
  return Pp = e, Pp;
}
var Tp, VS;
function xV() {
  if (VS) return Tp;
  VS = 1;
  var e = yi(), t = jT(), r = vi(), o = YT(), s = wV(), a = Qy(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", m = "[object Map]", g = "[object Number]", w = "[object RegExp]", E = "[object Set]", y = "[object String]", x = "[object Symbol]", S = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, k = _ ? _.valueOf : void 0;
  function R(T, A, O, D, G, B, V) {
    switch (O) {
      case C:
        if (T.byteLength != A.byteLength || T.byteOffset != A.byteOffset)
          return !1;
        T = T.buffer, A = A.buffer;
      case S:
        return !(T.byteLength != A.byteLength || !B(new t(T), new t(A)));
      case f:
      case d:
      case g:
        return r(+T, +A);
      case h:
        return T.name == A.name && T.message == A.message;
      case w:
      case y:
        return T == A + "";
      case m:
        var X = s;
      case E:
        var L = D & l;
        if (X || (X = a), T.size != A.size && !L)
          return !1;
        var H = V.get(T);
        if (H)
          return H == A;
        D |= u, V.set(T, A);
        var $ = o(X(T), X(A), D, G, B, V);
        return V.delete(T), $;
      case x:
        if (k)
          return k.call(T) == k.call(A);
    }
    return !1;
  }
  return Tp = R, Tp;
}
var Ap, HS;
function _V() {
  if (HS) return Ap;
  HS = 1;
  var e = qT(), t = 1, r = Object.prototype, o = r.hasOwnProperty;
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
    for (var R = m; ++x < w; ) {
      S = g[x];
      var T = a[S], A = l[S];
      if (f)
        var O = m ? f(A, T, S, l, a, h) : f(T, A, S, a, l, h);
      if (!(O === void 0 ? T === A || d(T, A, u, f, h) : O)) {
        k = !1;
        break;
      }
      R || (R = S == "constructor");
    }
    if (k && !R) {
      var D = a.constructor, G = l.constructor;
      D != G && "constructor" in a && "constructor" in l && !(typeof D == "function" && D instanceof D && typeof G == "function" && G instanceof G) && (k = !1);
    }
    return h.delete(a), h.delete(l), k;
  }
  return Ap = s, Ap;
}
var Ip, WS;
function bV() {
  if (WS) return Ip;
  WS = 1;
  var e = Iu(), t = YT(), r = xV(), o = _V(), s = xi(), a = rt(), l = wi(), u = Ks(), f = 1, d = "[object Arguments]", h = "[object Array]", m = "[object Object]", g = Object.prototype, w = g.hasOwnProperty;
  function E(y, x, S, C, _, k) {
    var R = a(y), T = a(x), A = R ? h : s(y), O = T ? h : s(x);
    A = A == d ? m : A, O = O == d ? m : O;
    var D = A == m, G = O == m, B = A == O;
    if (B && l(y)) {
      if (!l(x))
        return !1;
      R = !0, D = !1;
    }
    if (B && !D)
      return k || (k = new e()), R || u(y) ? t(y, x, S, C, _, k) : r(y, x, A, S, C, _, k);
    if (!(S & f)) {
      var V = D && w.call(y, "__wrapped__"), X = G && w.call(x, "__wrapped__");
      if (V || X) {
        var L = V ? y.value() : y, H = X ? x.value() : x;
        return k || (k = new e()), _(L, H, S, C, k);
      }
    }
    return B ? (k || (k = new e()), o(y, x, S, C, _, k)) : !1;
  }
  return Ip = E, Ip;
}
var Mp, US;
function KT() {
  if (US) return Mp;
  US = 1;
  var e = bV(), t = On();
  function r(o, s, a, l, u) {
    return o === s ? !0 : o == null || s == null || !t(o) && !t(s) ? o !== o && s !== s : e(o, s, a, l, r, u);
  }
  return Mp = r, Mp;
}
var Op, GS;
function SV() {
  if (GS) return Op;
  GS = 1;
  var e = Iu(), t = KT(), r = 1, o = 2;
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
  return Op = s, Op;
}
var Lp, YS;
function XT() {
  if (YS) return Lp;
  YS = 1;
  var e = Zt();
  function t(r) {
    return r === r && !e(r);
  }
  return Lp = t, Lp;
}
var qp, KS;
function EV() {
  if (KS) return qp;
  KS = 1;
  var e = XT(), t = Or();
  function r(o) {
    for (var s = t(o), a = s.length; a--; ) {
      var l = s[a], u = o[l];
      s[a] = [l, u, e(u)];
    }
    return s;
  }
  return qp = r, qp;
}
var Dp, XS;
function QT() {
  if (XS) return Dp;
  XS = 1;
  function e(t, r) {
    return function(o) {
      return o == null ? !1 : o[t] === r && (r !== void 0 || t in Object(o));
    };
  }
  return Dp = e, Dp;
}
var jp, QS;
function CV() {
  if (QS) return jp;
  QS = 1;
  var e = SV(), t = EV(), r = QT();
  function o(s) {
    var a = t(s);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(l) {
      return l === s || e(l, s, a);
    };
  }
  return jp = o, jp;
}
var zp, ZS;
function _i() {
  if (ZS) return zp;
  ZS = 1;
  var e = fo(), t = On(), r = "[object Symbol]";
  function o(s) {
    return typeof s == "symbol" || t(s) && e(s) == r;
  }
  return zp = o, zp;
}
var Fp, JS;
function Zy() {
  if (JS) return Fp;
  JS = 1;
  var e = rt(), t = _i(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function s(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !r.test(a) || l != null && a in Object(l);
  }
  return Fp = s, Fp;
}
var $p, eE;
function kV() {
  if (eE) return $p;
  eE = 1;
  var e = Fy(), t = "Expected a function";
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
  return r.Cache = e, $p = r, $p;
}
var Bp, tE;
function NV() {
  if (tE) return Bp;
  tE = 1;
  var e = kV(), t = 500;
  function r(o) {
    var s = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = s.cache;
    return s;
  }
  return Bp = r, Bp;
}
var Vp, nE;
function RV() {
  if (nE) return Vp;
  nE = 1;
  var e = NV(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, o = e(function(s) {
    var a = [];
    return s.charCodeAt(0) === 46 && a.push(""), s.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(r, "$1") : u || l);
    }), a;
  });
  return Vp = o, Vp;
}
var Hp, rE;
function Fu() {
  if (rE) return Hp;
  rE = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = Array(s); ++o < s; )
      a[o] = r(t[o], o, t);
    return a;
  }
  return Hp = e, Hp;
}
var Wp, oE;
function PV() {
  if (oE) return Wp;
  oE = 1;
  var e = yi(), t = Fu(), r = rt(), o = _i(), s = e ? e.prototype : void 0, a = s ? s.toString : void 0;
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
  return Wp = l, Wp;
}
var Up, iE;
function ZT() {
  if (iE) return Up;
  iE = 1;
  var e = PV();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Up = t, Up;
}
var Gp, sE;
function $u() {
  if (sE) return Gp;
  sE = 1;
  var e = rt(), t = Zy(), r = RV(), o = ZT();
  function s(a, l) {
    return e(a) ? a : t(a, l) ? [a] : r(o(a));
  }
  return Gp = s, Gp;
}
var Yp, aE;
function Xs() {
  if (aE) return Yp;
  aE = 1;
  var e = _i();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var o = r + "";
    return o == "0" && 1 / r == -1 / 0 ? "-0" : o;
  }
  return Yp = t, Yp;
}
var Kp, lE;
function Bu() {
  if (lE) return Kp;
  lE = 1;
  var e = $u(), t = Xs();
  function r(o, s) {
    s = e(s, o);
    for (var a = 0, l = s.length; o != null && a < l; )
      o = o[t(s[a++])];
    return a && a == l ? o : void 0;
  }
  return Kp = r, Kp;
}
var Xp, uE;
function TV() {
  if (uE) return Xp;
  uE = 1;
  var e = Bu();
  function t(r, o, s) {
    var a = r == null ? void 0 : e(r, o);
    return a === void 0 ? s : a;
  }
  return Xp = t, Xp;
}
var Qp, cE;
function AV() {
  if (cE) return Qp;
  cE = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Qp = e, Qp;
}
var Zp, fE;
function JT() {
  if (fE) return Zp;
  fE = 1;
  var e = $u(), t = Ys(), r = rt(), o = Lu(), s = By(), a = Xs();
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
  return Zp = l, Zp;
}
var Jp, dE;
function eA() {
  if (dE) return Jp;
  dE = 1;
  var e = AV(), t = JT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return Jp = r, Jp;
}
var em, hE;
function IV() {
  if (hE) return em;
  hE = 1;
  var e = KT(), t = TV(), r = eA(), o = Zy(), s = XT(), a = QT(), l = Xs(), u = 1, f = 2;
  function d(h, m) {
    return o(h) && s(m) ? a(l(h), m) : function(g) {
      var w = t(g, h);
      return w === void 0 && w === m ? r(g, h) : e(m, w, u | f);
    };
  }
  return em = d, em;
}
var tm, pE;
function tA() {
  if (pE) return tm;
  pE = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return tm = e, tm;
}
var nm, mE;
function MV() {
  if (mE) return nm;
  mE = 1;
  var e = Bu();
  function t(r) {
    return function(o) {
      return e(o, r);
    };
  }
  return nm = t, nm;
}
var rm, gE;
function OV() {
  if (gE) return rm;
  gE = 1;
  var e = tA(), t = MV(), r = Zy(), o = Xs();
  function s(a) {
    return r(a) ? e(o(a)) : t(a);
  }
  return rm = s, rm;
}
var om, vE;
function Jn() {
  if (vE) return om;
  vE = 1;
  var e = CV(), t = IV(), r = mo(), o = rt(), s = OV();
  function a(l) {
    return typeof l == "function" ? l : l == null ? r : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : s(l);
  }
  return om = a, om;
}
var im, yE;
function nA() {
  if (yE) return im;
  yE = 1;
  var e = IT(), t = mV(), r = Jn(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l, 3));
  }
  return im = s, im;
}
var sm, wE;
function LV() {
  if (wE) return sm;
  wE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o, s) {
    return o != null && t.call(o, s);
  }
  return sm = r, sm;
}
var am, xE;
function rA() {
  if (xE) return am;
  xE = 1;
  var e = LV(), t = JT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return am = r, am;
}
var lm, _E;
function qV() {
  if (_E) return lm;
  _E = 1;
  var e = Hy(), t = xi(), r = Ys(), o = rt(), s = Zn(), a = wi(), l = Du(), u = Ks(), f = "[object Map]", d = "[object Set]", h = Object.prototype, m = h.hasOwnProperty;
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
  return lm = g, lm;
}
var um, bE;
function oA() {
  if (bE) return um;
  bE = 1;
  function e(t) {
    return t === void 0;
  }
  return um = e, um;
}
var cm, SE;
function iA() {
  if (SE) return cm;
  SE = 1;
  var e = zu(), t = Zn();
  function r(o, s) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = s(u, f, d);
    }), l;
  }
  return cm = r, cm;
}
var fm, EE;
function sA() {
  if (EE) return fm;
  EE = 1;
  var e = Fu(), t = Jn(), r = iA(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : r;
    return u(a, t(l, 3));
  }
  return fm = s, fm;
}
var dm, CE;
function DV() {
  if (CE) return dm;
  CE = 1;
  function e(t, r, o, s) {
    var a = -1, l = t == null ? 0 : t.length;
    for (s && l && (o = t[++a]); ++a < l; )
      o = r(o, t[a], a, t);
    return o;
  }
  return dm = e, dm;
}
var hm, kE;
function jV() {
  if (kE) return hm;
  kE = 1;
  function e(t, r, o, s, a) {
    return a(t, function(l, u, f) {
      o = s ? (s = !1, l) : r(o, l, u, f);
    }), o;
  }
  return hm = e, hm;
}
var pm, NE;
function aA() {
  if (NE) return pm;
  NE = 1;
  var e = DV(), t = zu(), r = Jn(), o = jV(), s = rt();
  function a(l, u, f) {
    var d = s(l) ? e : o, h = arguments.length < 3;
    return d(l, r(u, 4), f, h, t);
  }
  return pm = a, pm;
}
var mm, RE;
function zV() {
  if (RE) return mm;
  RE = 1;
  var e = fo(), t = rt(), r = On(), o = "[object String]";
  function s(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == o;
  }
  return mm = s, mm;
}
var gm, PE;
function FV() {
  if (PE) return gm;
  PE = 1;
  var e = tA(), t = e("length");
  return gm = t, gm;
}
var vm, TE;
function $V() {
  if (TE) return vm;
  TE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + s + a + "]");
  function f(d) {
    return u.test(d);
  }
  return vm = f, vm;
}
var ym, AE;
function BV() {
  if (AE) return ym;
  AE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + s + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", m = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "\\u200d", E = d + "?", y = "[" + a + "]?", x = "(?:" + w + "(?:" + [h, m, g].join("|") + ")" + y + E + ")*", S = y + E + x, C = "(?:" + [h + u + "?", u, m, g, l].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + S, "g");
  function k(R) {
    for (var T = _.lastIndex = 0; _.test(R); )
      ++T;
    return T;
  }
  return ym = k, ym;
}
var wm, IE;
function VV() {
  if (IE) return wm;
  IE = 1;
  var e = FV(), t = $V(), r = BV();
  function o(s) {
    return t(s) ? r(s) : e(s);
  }
  return wm = o, wm;
}
var xm, ME;
function HV() {
  if (ME) return xm;
  ME = 1;
  var e = Hy(), t = xi(), r = Zn(), o = zV(), s = VV(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (r(f))
      return o(f) ? s(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return xm = u, xm;
}
var _m, OE;
function WV() {
  if (OE) return _m;
  OE = 1;
  var e = $y(), t = FT(), r = Xy(), o = Jn(), s = ju(), a = rt(), l = wi(), u = Us(), f = Zt(), d = Ks();
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
  return _m = h, _m;
}
var bm, LE;
function UV() {
  if (LE) return bm;
  LE = 1;
  var e = yi(), t = Ys(), r = rt(), o = e ? e.isConcatSpreadable : void 0;
  function s(a) {
    return r(a) || t(a) || !!(o && a && a[o]);
  }
  return bm = s, bm;
}
var Sm, qE;
function Jy() {
  if (qE) return Sm;
  qE = 1;
  var e = Uy(), t = UV();
  function r(o, s, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      s > 0 && a(h) ? s > 1 ? r(h, s - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return Sm = r, Sm;
}
var Em, DE;
function GV() {
  if (DE) return Em;
  DE = 1;
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
  return Em = e, Em;
}
var Cm, jE;
function lA() {
  if (jE) return Cm;
  jE = 1;
  var e = GV(), t = Math.max;
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
  return Cm = r, Cm;
}
var km, zE;
function YV() {
  if (zE) return km;
  zE = 1;
  var e = Yy(), t = NT(), r = mo(), o = t ? function(s, a) {
    return t(s, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return km = o, km;
}
var Nm, FE;
function KV() {
  if (FE) return Nm;
  FE = 1;
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
  return Nm = o, Nm;
}
var Rm, $E;
function uA() {
  if ($E) return Rm;
  $E = 1;
  var e = YV(), t = KV(), r = t(e);
  return Rm = r, Rm;
}
var Pm, BE;
function Vu() {
  if (BE) return Pm;
  BE = 1;
  var e = mo(), t = lA(), r = uA();
  function o(s, a) {
    return r(t(s, a, e), s + "");
  }
  return Pm = o, Pm;
}
var Tm, VE;
function cA() {
  if (VE) return Tm;
  VE = 1;
  function e(t, r, o, s) {
    for (var a = t.length, l = o + (s ? 1 : -1); s ? l-- : ++l < a; )
      if (r(t[l], l, t))
        return l;
    return -1;
  }
  return Tm = e, Tm;
}
var Am, HE;
function XV() {
  if (HE) return Am;
  HE = 1;
  function e(t) {
    return t !== t;
  }
  return Am = e, Am;
}
var Im, WE;
function QV() {
  if (WE) return Im;
  WE = 1;
  function e(t, r, o) {
    for (var s = o - 1, a = t.length; ++s < a; )
      if (t[s] === r)
        return s;
    return -1;
  }
  return Im = e, Im;
}
var Mm, UE;
function ZV() {
  if (UE) return Mm;
  UE = 1;
  var e = cA(), t = XV(), r = QV();
  function o(s, a, l) {
    return a === a ? r(s, a, l) : e(s, t, l);
  }
  return Mm = o, Mm;
}
var Om, GE;
function JV() {
  if (GE) return Om;
  GE = 1;
  var e = ZV();
  function t(r, o) {
    var s = r == null ? 0 : r.length;
    return !!s && e(r, o, 0) > -1;
  }
  return Om = t, Om;
}
var Lm, YE;
function eH() {
  if (YE) return Lm;
  YE = 1;
  function e(t, r, o) {
    for (var s = -1, a = t == null ? 0 : t.length; ++s < a; )
      if (o(r, t[s]))
        return !0;
    return !1;
  }
  return Lm = e, Lm;
}
var qm, KE;
function tH() {
  if (KE) return qm;
  KE = 1;
  function e() {
  }
  return qm = e, qm;
}
var Dm, XE;
function nH() {
  if (XE) return Dm;
  XE = 1;
  var e = DT(), t = tH(), r = Qy(), o = 1 / 0, s = e && 1 / r(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return Dm = s, Dm;
}
var jm, QE;
function rH() {
  if (QE) return jm;
  QE = 1;
  var e = UT(), t = JV(), r = eH(), o = GT(), s = nH(), a = Qy(), l = 200;
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
  return jm = u, jm;
}
var zm, ZE;
function fA() {
  if (ZE) return zm;
  ZE = 1;
  var e = Zn(), t = On();
  function r(o) {
    return t(o) && e(o);
  }
  return zm = r, zm;
}
var Fm, JE;
function oH() {
  if (JE) return Fm;
  JE = 1;
  var e = Jy(), t = Vu(), r = rH(), o = fA(), s = t(function(a) {
    return r(e(a, 1, o, !0));
  });
  return Fm = s, Fm;
}
var $m, eC;
function iH() {
  if (eC) return $m;
  eC = 1;
  var e = Fu();
  function t(r, o) {
    return e(o, function(s) {
      return r[s];
    });
  }
  return $m = t, $m;
}
var Bm, tC;
function dA() {
  if (tC) return Bm;
  tC = 1;
  var e = iH(), t = Or();
  function r(o) {
    return o == null ? [] : e(o, t(o));
  }
  return Bm = r, Bm;
}
var Vm, nC;
function Jt() {
  if (nC) return Vm;
  nC = 1;
  var e;
  if (typeof jy == "function")
    try {
      e = {
        clone: dV(),
        constant: Yy(),
        each: WT(),
        filter: nA(),
        has: rA(),
        isArray: rt(),
        isEmpty: qV(),
        isFunction: Us(),
        isUndefined: oA(),
        keys: Or(),
        map: sA(),
        reduce: aA(),
        size: HV(),
        transform: WV(),
        union: oH(),
        values: dA()
      };
    } catch {
    }
  return e || (e = window._), Vm = e, Vm;
}
var Hm, rC;
function e0() {
  if (rC) return Hm;
  rC = 1;
  var e = Jt();
  Hm = s;
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
  return Hm;
}
var Wm, oC;
function sH() {
  return oC || (oC = 1, Wm = "2.1.8"), Wm;
}
var Um, iC;
function aH() {
  return iC || (iC = 1, Um = {
    Graph: e0(),
    version: sH()
  }), Um;
}
var Gm, sC;
function lH() {
  if (sC) return Gm;
  sC = 1;
  var e = Jt(), t = e0();
  Gm = {
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
  return Gm;
}
var Ym, aC;
function uH() {
  if (aC) return Ym;
  aC = 1;
  var e = Jt();
  Ym = t;
  function t(r) {
    var o = {}, s = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(r.successors(u), l), e.each(r.predecessors(u), l));
    }
    return e.each(r.nodes(), function(u) {
      a = [], l(u), a.length && s.push(a);
    }), s;
  }
  return Ym;
}
var Km, lC;
function hA() {
  if (lC) return Km;
  lC = 1;
  var e = Jt();
  Km = t;
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
  }, Km;
}
var Xm, uC;
function pA() {
  if (uC) return Xm;
  uC = 1;
  var e = Jt(), t = hA();
  Xm = o;
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
  return Xm;
}
var Qm, cC;
function cH() {
  if (cC) return Qm;
  cC = 1;
  var e = pA(), t = Jt();
  Qm = r;
  function r(o, s, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, s, a);
    }, {});
  }
  return Qm;
}
var Zm, fC;
function mA() {
  if (fC) return Zm;
  fC = 1;
  var e = Jt();
  Zm = t;
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
  return Zm;
}
var Jm, dC;
function fH() {
  if (dC) return Jm;
  dC = 1;
  var e = Jt(), t = mA();
  Jm = r;
  function r(o) {
    return e.filter(t(o), function(s) {
      return s.length > 1 || s.length === 1 && o.hasEdge(s[0], s[0]);
    });
  }
  return Jm;
}
var eg, hC;
function dH() {
  if (hC) return eg;
  hC = 1;
  var e = Jt();
  eg = r;
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
  return eg;
}
var tg, pC;
function gA() {
  if (pC) return tg;
  pC = 1;
  var e = Jt();
  tg = t, t.CycleException = r;
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
  return r.prototype = new Error(), tg;
}
var ng, mC;
function hH() {
  if (mC) return ng;
  mC = 1;
  var e = gA();
  ng = t;
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
  return ng;
}
var rg, gC;
function vA() {
  if (gC) return rg;
  gC = 1;
  var e = Jt();
  rg = t;
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
  return rg;
}
var og, vC;
function pH() {
  if (vC) return og;
  vC = 1;
  var e = vA();
  og = t;
  function t(r, o) {
    return e(r, o, "post");
  }
  return og;
}
var ig, yC;
function mH() {
  if (yC) return ig;
  yC = 1;
  var e = vA();
  ig = t;
  function t(r, o) {
    return e(r, o, "pre");
  }
  return ig;
}
var sg, wC;
function gH() {
  if (wC) return sg;
  wC = 1;
  var e = Jt(), t = e0(), r = hA();
  sg = o;
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
  return sg;
}
var ag, xC;
function vH() {
  return xC || (xC = 1, ag = {
    components: uH(),
    dijkstra: pA(),
    dijkstraAll: cH(),
    findCycles: fH(),
    floydWarshall: dH(),
    isAcyclic: hH(),
    postorder: pH(),
    preorder: mH(),
    prim: gH(),
    tarjan: mA(),
    topsort: gA()
  }), ag;
}
var lg, _C;
function yH() {
  if (_C) return lg;
  _C = 1;
  var e = aH();
  return lg = {
    Graph: e.Graph,
    json: lH(),
    alg: vH(),
    version: e.version
  }, lg;
}
var ug, bC;
function gn() {
  if (bC) return ug;
  bC = 1;
  var e;
  if (typeof jy == "function")
    try {
      e = yH();
    } catch {
    }
  return e || (e = window.graphlib), ug = e, ug;
}
var cg, SC;
function wH() {
  if (SC) return cg;
  SC = 1;
  var e = BT(), t = 1, r = 4;
  function o(s) {
    return e(s, t | r);
  }
  return cg = o, cg;
}
var fg, EC;
function Hu() {
  if (EC) return fg;
  EC = 1;
  var e = vi(), t = Zn(), r = Lu(), o = Zt();
  function s(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && r(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return fg = s, fg;
}
var dg, CC;
function xH() {
  if (CC) return dg;
  CC = 1;
  var e = Vu(), t = vi(), r = Hu(), o = po(), s = Object.prototype, a = s.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, m = h > 2 ? f[2] : void 0;
    for (m && r(f[0], f[1], m) && (h = 1); ++d < h; )
      for (var g = f[d], w = o(g), E = -1, y = w.length; ++E < y; ) {
        var x = w[E], S = u[x];
        (S === void 0 || t(S, s[x]) && !a.call(u, x)) && (u[x] = g[x]);
      }
    return u;
  });
  return dg = l, dg;
}
var hg, kC;
function _H() {
  if (kC) return hg;
  kC = 1;
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
  return hg = o, hg;
}
var pg, NC;
function bH() {
  if (NC) return pg;
  NC = 1;
  var e = /\s/;
  function t(r) {
    for (var o = r.length; o-- && e.test(r.charAt(o)); )
      ;
    return o;
  }
  return pg = t, pg;
}
var mg, RC;
function SH() {
  if (RC) return mg;
  RC = 1;
  var e = bH(), t = /^\s+/;
  function r(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return mg = r, mg;
}
var gg, PC;
function EH() {
  if (PC) return gg;
  PC = 1;
  var e = SH(), t = Zt(), r = _i(), o = NaN, s = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
  return gg = f, gg;
}
var vg, TC;
function yA() {
  if (TC) return vg;
  TC = 1;
  var e = EH(), t = 1 / 0, r = 17976931348623157e292;
  function o(s) {
    if (!s)
      return s === 0 ? s : 0;
    if (s = e(s), s === t || s === -t) {
      var a = s < 0 ? -1 : 1;
      return a * r;
    }
    return s === s ? s : 0;
  }
  return vg = o, vg;
}
var yg, AC;
function CH() {
  if (AC) return yg;
  AC = 1;
  var e = yA();
  function t(r) {
    var o = e(r), s = o % 1;
    return o === o ? s ? o - s : o : 0;
  }
  return yg = t, yg;
}
var wg, IC;
function kH() {
  if (IC) return wg;
  IC = 1;
  var e = cA(), t = Jn(), r = CH(), o = Math.max;
  function s(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : r(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return wg = s, wg;
}
var xg, MC;
function NH() {
  if (MC) return xg;
  MC = 1;
  var e = _H(), t = kH(), r = e(t);
  return xg = r, xg;
}
var _g, OC;
function wA() {
  if (OC) return _g;
  OC = 1;
  var e = Jy();
  function t(r) {
    var o = r == null ? 0 : r.length;
    return o ? e(r, 1) : [];
  }
  return _g = t, _g;
}
var bg, LC;
function RH() {
  if (LC) return bg;
  LC = 1;
  var e = Ky(), t = VT(), r = po();
  function o(s, a) {
    return s == null ? s : e(s, t(a), r);
  }
  return bg = o, bg;
}
var Sg, qC;
function PH() {
  if (qC) return Sg;
  qC = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Sg = e, Sg;
}
var Eg, DC;
function TH() {
  if (DC) return Eg;
  DC = 1;
  var e = Mu(), t = Xy(), r = Jn();
  function o(s, a) {
    var l = {};
    return a = r(a, 3), t(s, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Eg = o, Eg;
}
var Cg, jC;
function t0() {
  if (jC) return Cg;
  jC = 1;
  var e = _i();
  function t(r, o, s) {
    for (var a = -1, l = r.length; ++a < l; ) {
      var u = r[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : s(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Cg = t, Cg;
}
var kg, zC;
function AH() {
  if (zC) return kg;
  zC = 1;
  function e(t, r) {
    return t > r;
  }
  return kg = e, kg;
}
var Ng, FC;
function IH() {
  if (FC) return Ng;
  FC = 1;
  var e = t0(), t = AH(), r = mo();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return Ng = o, Ng;
}
var Rg, $C;
function xA() {
  if ($C) return Rg;
  $C = 1;
  var e = Mu(), t = vi();
  function r(o, s, a) {
    (a !== void 0 && !t(o[s], a) || a === void 0 && !(s in o)) && e(o, s, a);
  }
  return Rg = r, Rg;
}
var Pg, BC;
function MH() {
  if (BC) return Pg;
  BC = 1;
  var e = fo(), t = ju(), r = On(), o = "[object Object]", s = Function.prototype, a = Object.prototype, l = s.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!r(h) || e(h) != o)
      return !1;
    var m = t(h);
    if (m === null)
      return !0;
    var g = u.call(m, "constructor") && m.constructor;
    return typeof g == "function" && g instanceof g && l.call(g) == f;
  }
  return Pg = d, Pg;
}
var Tg, VC;
function _A() {
  if (VC) return Tg;
  VC = 1;
  function e(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return Tg = e, Tg;
}
var Ag, HC;
function OH() {
  if (HC) return Ag;
  HC = 1;
  var e = Gs(), t = po();
  function r(o) {
    return e(o, t(o));
  }
  return Ag = r, Ag;
}
var Ig, WC;
function LH() {
  if (WC) return Ig;
  WC = 1;
  var e = xA(), t = TT(), r = zT(), o = AT(), s = $T(), a = Ys(), l = rt(), u = fA(), f = wi(), d = Us(), h = Zt(), m = MH(), g = Ks(), w = _A(), E = OH();
  function y(x, S, C, _, k, R, T) {
    var A = w(x, C), O = w(S, C), D = T.get(O);
    if (D) {
      e(x, C, D);
      return;
    }
    var G = R ? R(A, O, C + "", x, S, T) : void 0, B = G === void 0;
    if (B) {
      var V = l(O), X = !V && f(O), L = !V && !X && g(O);
      G = O, V || X || L ? l(A) ? G = A : u(A) ? G = o(A) : X ? (B = !1, G = t(O, !0)) : L ? (B = !1, G = r(O, !0)) : G = [] : m(O) || a(O) ? (G = A, a(A) ? G = E(A) : (!h(A) || d(A)) && (G = s(O))) : B = !1;
    }
    B && (T.set(O, G), k(G, O, _, R, T), T.delete(O)), e(x, C, G);
  }
  return Ig = y, Ig;
}
var Mg, UC;
function qH() {
  if (UC) return Mg;
  UC = 1;
  var e = Iu(), t = xA(), r = Ky(), o = LH(), s = Zt(), a = po(), l = _A();
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
  return Mg = u, Mg;
}
var Og, GC;
function DH() {
  if (GC) return Og;
  GC = 1;
  var e = Vu(), t = Hu();
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
  return Og = r, Og;
}
var Lg, YC;
function jH() {
  if (YC) return Lg;
  YC = 1;
  var e = qH(), t = DH(), r = t(function(o, s, a) {
    e(o, s, a);
  });
  return Lg = r, Lg;
}
var qg, KC;
function bA() {
  if (KC) return qg;
  KC = 1;
  function e(t, r) {
    return t < r;
  }
  return qg = e, qg;
}
var Dg, XC;
function zH() {
  if (XC) return Dg;
  XC = 1;
  var e = t0(), t = bA(), r = mo();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return Dg = o, Dg;
}
var jg, QC;
function FH() {
  if (QC) return jg;
  QC = 1;
  var e = t0(), t = Jn(), r = bA();
  function o(s, a) {
    return s && s.length ? e(s, t(a, 2), r) : void 0;
  }
  return jg = o, jg;
}
var zg, ZC;
function $H() {
  if (ZC) return zg;
  ZC = 1;
  var e = yn(), t = function() {
    return e.Date.now();
  };
  return zg = t, zg;
}
var Fg, JC;
function BH() {
  if (JC) return Fg;
  JC = 1;
  var e = Ou(), t = $u(), r = Lu(), o = Zt(), s = Xs();
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
  return Fg = a, Fg;
}
var $g, ek;
function VH() {
  if (ek) return $g;
  ek = 1;
  var e = Bu(), t = BH(), r = $u();
  function o(s, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], m = e(s, h);
      l(m, h) && t(d, r(h, s), m);
    }
    return d;
  }
  return $g = o, $g;
}
var Bg, tk;
function HH() {
  if (tk) return Bg;
  tk = 1;
  var e = VH(), t = eA();
  function r(o, s) {
    return e(o, s, function(a, l) {
      return t(o, l);
    });
  }
  return Bg = r, Bg;
}
var Vg, nk;
function WH() {
  if (nk) return Vg;
  nk = 1;
  var e = wA(), t = lA(), r = uA();
  function o(s) {
    return r(t(s, void 0, e), s + "");
  }
  return Vg = o, Vg;
}
var Hg, rk;
function UH() {
  if (rk) return Hg;
  rk = 1;
  var e = HH(), t = WH(), r = t(function(o, s) {
    return o == null ? {} : e(o, s);
  });
  return Hg = r, Hg;
}
var Wg, ok;
function GH() {
  if (ok) return Wg;
  ok = 1;
  var e = Math.ceil, t = Math.max;
  function r(o, s, a, l) {
    for (var u = -1, f = t(e((s - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return Wg = r, Wg;
}
var Ug, ik;
function YH() {
  if (ik) return Ug;
  ik = 1;
  var e = GH(), t = Hu(), r = yA();
  function o(s) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = r(a), l === void 0 ? (l = a, a = 0) : l = r(l), u = u === void 0 ? a < l ? 1 : -1 : r(u), e(a, l, u, s);
    };
  }
  return Ug = o, Ug;
}
var Gg, sk;
function KH() {
  if (sk) return Gg;
  sk = 1;
  var e = YH(), t = e();
  return Gg = t, Gg;
}
var Yg, ak;
function XH() {
  if (ak) return Yg;
  ak = 1;
  function e(t, r) {
    var o = t.length;
    for (t.sort(r); o--; )
      t[o] = t[o].value;
    return t;
  }
  return Yg = e, Yg;
}
var Kg, lk;
function QH() {
  if (lk) return Kg;
  lk = 1;
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
  return Kg = t, Kg;
}
var Xg, uk;
function ZH() {
  if (uk) return Xg;
  uk = 1;
  var e = QH();
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
  return Xg = t, Xg;
}
var Qg, ck;
function JH() {
  if (ck) return Qg;
  ck = 1;
  var e = Fu(), t = Bu(), r = Jn(), o = iA(), s = XH(), a = qu(), l = ZH(), u = mo(), f = rt();
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
  return Qg = d, Qg;
}
var Zg, fk;
function e8() {
  if (fk) return Zg;
  fk = 1;
  var e = Jy(), t = JH(), r = Vu(), o = Hu(), s = r(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return Zg = s, Zg;
}
var Jg, dk;
function t8() {
  if (dk) return Jg;
  dk = 1;
  var e = ZT(), t = 0;
  function r(o) {
    var s = ++t;
    return e(o) + s;
  }
  return Jg = r, Jg;
}
var ev, hk;
function n8() {
  if (hk) return ev;
  hk = 1;
  function e(t, r, o) {
    for (var s = -1, a = t.length, l = r.length, u = {}; ++s < a; ) {
      var f = s < l ? r[s] : void 0;
      o(u, t[s], f);
    }
    return u;
  }
  return ev = e, ev;
}
var tv, pk;
function r8() {
  if (pk) return tv;
  pk = 1;
  var e = Ou(), t = n8();
  function r(o, s) {
    return t(o || [], s || [], e);
  }
  return tv = r, tv;
}
var nv, mk;
function Ve() {
  if (mk) return nv;
  mk = 1;
  var e;
  if (typeof jy == "function")
    try {
      e = {
        cloneDeep: wH(),
        constant: Yy(),
        defaults: xH(),
        each: WT(),
        filter: nA(),
        find: NH(),
        flatten: wA(),
        forEach: HT(),
        forIn: RH(),
        has: rA(),
        isUndefined: oA(),
        last: PH(),
        map: sA(),
        mapValues: TH(),
        max: IH(),
        merge: jH(),
        min: zH(),
        minBy: FH(),
        now: $H(),
        pick: UH(),
        range: KH(),
        reduce: aA(),
        sortBy: e8(),
        uniqueId: t8(),
        values: dA(),
        zipObject: r8()
      };
    } catch {
    }
  return e || (e = window._), nv = e, nv;
}
var rv, gk;
function o8() {
  if (gk) return rv;
  gk = 1, rv = e;
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
  return rv;
}
var ov, vk;
function i8() {
  if (vk) return ov;
  vk = 1;
  var e = Ve(), t = gn().Graph, r = o8();
  ov = s;
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
  return ov;
}
var iv, yk;
function s8() {
  if (yk) return iv;
  yk = 1;
  var e = Ve(), t = i8();
  iv = {
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
  return iv;
}
var sv, wk;
function Pt() {
  if (wk) return sv;
  wk = 1;
  var e = Ve(), t = gn().Graph;
  sv = {
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
    var C = x.x, _ = x.y, k = S.x - C, R = S.y - _, T = x.width / 2, A = x.height / 2;
    if (!k && !R)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, D;
    return Math.abs(R) * T > Math.abs(k) * A ? (R < 0 && (A = -A), O = A * k / R, D = A) : (k < 0 && (T = -T), O = T, D = T * R / k), { x: C + O, y: _ + D };
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
    var S = e.min(e.map(x.nodes(), function(R) {
      return x.node(R).rank;
    })), C = [];
    e.forEach(x.nodes(), function(R) {
      var T = x.node(R).rank - S;
      C[T] || (C[T] = []), C[T].push(R);
    });
    var _ = 0, k = x.graph().nodeRankFactor;
    e.forEach(C, function(R, T) {
      e.isUndefined(R) && T % k !== 0 ? --_ : _ && e.forEach(R, function(A) {
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
  return sv;
}
var av, xk;
function a8() {
  if (xk) return av;
  xk = 1;
  var e = Ve(), t = Pt();
  av = {
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
  return av;
}
var lv, _k;
function iu() {
  if (_k) return lv;
  _k = 1;
  var e = Ve();
  lv = {
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
  return lv;
}
var uv, bk;
function SA() {
  if (bk) return uv;
  bk = 1;
  var e = Ve(), t = gn().Graph, r = iu().slack;
  uv = o;
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
  return uv;
}
var cv, Sk;
function l8() {
  if (Sk) return cv;
  Sk = 1;
  var e = Ve(), t = SA(), r = iu().slack, o = iu().longestPath, s = gn().alg.preorder, a = gn().alg.postorder, l = Pt().simplify;
  cv = u, u.initLowLimValues = m, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = w, u.enterEdge = E, u.exchangeEdges = y;
  function u(_) {
    _ = l(_), o(_);
    var k = t(_);
    m(k), f(k, _);
    for (var R, T; R = w(k); )
      T = E(k, _, R), y(k, _, R, T);
  }
  function f(_, k) {
    var R = a(_, _.nodes());
    R = R.slice(0, R.length - 1), e.forEach(R, function(T) {
      d(_, k, T);
    });
  }
  function d(_, k, R) {
    var T = _.node(R), A = T.parent;
    _.edge(R, A).cutvalue = h(_, k, R);
  }
  function h(_, k, R) {
    var T = _.node(R), A = T.parent, O = !0, D = k.edge(R, A), G = 0;
    return D || (O = !1, D = k.edge(A, R)), G = D.weight, e.forEach(k.nodeEdges(R), function(B) {
      var V = B.v === R, X = V ? B.w : B.v;
      if (X !== A) {
        var L = V === O, H = k.edge(B).weight;
        if (G += L ? H : -H, S(_, R, X)) {
          var $ = _.edge(R, X).cutvalue;
          G += L ? -$ : $;
        }
      }
    }), G;
  }
  function m(_, k) {
    arguments.length < 2 && (k = _.nodes()[0]), g(_, {}, 1, k);
  }
  function g(_, k, R, T, A) {
    var O = R, D = _.node(T);
    return k[T] = !0, e.forEach(_.neighbors(T), function(G) {
      e.has(k, G) || (R = g(_, k, R, G, T));
    }), D.low = O, D.lim = R++, A ? D.parent = A : delete D.parent, R;
  }
  function w(_) {
    return e.find(_.edges(), function(k) {
      return _.edge(k).cutvalue < 0;
    });
  }
  function E(_, k, R) {
    var T = R.v, A = R.w;
    k.hasEdge(T, A) || (T = R.w, A = R.v);
    var O = _.node(T), D = _.node(A), G = O, B = !1;
    O.lim > D.lim && (G = D, B = !0);
    var V = e.filter(k.edges(), function(X) {
      return B === C(_, _.node(X.v), G) && B !== C(_, _.node(X.w), G);
    });
    return e.minBy(V, function(X) {
      return r(k, X);
    });
  }
  function y(_, k, R, T) {
    var A = R.v, O = R.w;
    _.removeEdge(A, O), _.setEdge(T.v, T.w, {}), m(_), f(_, k), x(_, k);
  }
  function x(_, k) {
    var R = e.find(_.nodes(), function(A) {
      return !k.node(A).parent;
    }), T = s(_, R);
    T = T.slice(1), e.forEach(T, function(A) {
      var O = _.node(A).parent, D = k.edge(A, O), G = !1;
      D || (D = k.edge(O, A), G = !0), k.node(A).rank = k.node(O).rank + (G ? D.minlen : -D.minlen);
    });
  }
  function S(_, k, R) {
    return _.hasEdge(k, R);
  }
  function C(_, k, R) {
    return R.low <= k.lim && k.lim <= R.lim;
  }
  return cv;
}
var fv, Ek;
function u8() {
  if (Ek) return fv;
  Ek = 1;
  var e = iu(), t = e.longestPath, r = SA(), o = l8();
  fv = s;
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
  return fv;
}
var dv, Ck;
function c8() {
  if (Ck) return dv;
  Ck = 1;
  var e = Ve();
  dv = t;
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
  return dv;
}
var hv, kk;
function f8() {
  if (kk) return hv;
  kk = 1;
  var e = Ve(), t = Pt();
  hv = {
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
      var _ = u.node(C), k = _.borderTop ? _.borderTop : C, R = _.borderBottom ? _.borderBottom : C, T = _.borderTop ? h : 2 * h, A = k !== R ? 1 : m - g[w] + 1;
      u.setEdge(y, k, {
        weight: T,
        minlen: A,
        nestingEdge: !0
      }), u.setEdge(R, x, {
        weight: T,
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
  return hv;
}
var pv, Nk;
function d8() {
  if (Nk) return pv;
  Nk = 1;
  var e = Ve(), t = Pt();
  pv = r;
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
  return pv;
}
var mv, Rk;
function h8() {
  if (Rk) return mv;
  Rk = 1;
  var e = Ve();
  mv = {
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
  return mv;
}
var gv, Pk;
function p8() {
  if (Pk) return gv;
  Pk = 1;
  var e = Ve();
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
var vv, Tk;
function m8() {
  if (Tk) return vv;
  Tk = 1;
  var e = Ve();
  vv = t;
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
  return vv;
}
var yv, Ak;
function g8() {
  if (Ak) return yv;
  Ak = 1;
  var e = Ve();
  yv = t;
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
  return yv;
}
var wv, Ik;
function v8() {
  if (Ik) return wv;
  Ik = 1;
  var e = Ve();
  wv = t;
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
  return wv;
}
var xv, Mk;
function y8() {
  if (Mk) return xv;
  Mk = 1;
  var e = Ve(), t = Pt();
  xv = r;
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
  return xv;
}
var _v, Ok;
function w8() {
  if (Ok) return _v;
  Ok = 1;
  var e = Ve(), t = g8(), r = v8(), o = y8();
  _v = s;
  function s(u, f, d, h) {
    var m = u.children(f), g = u.node(f), w = g ? g.borderLeft : void 0, E = g ? g.borderRight : void 0, y = {};
    w && (m = e.filter(m, function(R) {
      return R !== w && R !== E;
    }));
    var x = t(u, m);
    e.forEach(x, function(R) {
      if (u.children(R.v).length) {
        var T = s(u, R.v, d, h);
        y[R.v] = T, e.has(T, "barycenter") && l(R, T);
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
  return _v;
}
var bv, Lk;
function x8() {
  if (Lk) return bv;
  Lk = 1;
  var e = Ve(), t = gn().Graph;
  bv = r;
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
  return bv;
}
var Sv, qk;
function _8() {
  if (qk) return Sv;
  qk = 1;
  var e = Ve();
  Sv = t;
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
  return Sv;
}
var Ev, Dk;
function b8() {
  if (Dk) return Ev;
  Dk = 1;
  var e = Ve(), t = p8(), r = m8(), o = w8(), s = x8(), a = _8(), l = gn().Graph, u = Pt();
  Ev = f;
  function f(g) {
    var w = u.maxRank(g), E = d(g, e.range(1, w + 1), "inEdges"), y = d(g, e.range(w - 1, -1, -1), "outEdges"), x = t(g);
    m(g, x);
    for (var S = Number.POSITIVE_INFINITY, C, _ = 0, k = 0; k < 4; ++_, ++k) {
      h(_ % 2 ? E : y, _ % 4 >= 2), x = u.buildLayerMatrix(g);
      var R = r(g, x);
      R < S && (k = 0, C = e.cloneDeep(x), S = R);
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
  return Ev;
}
var Cv, jk;
function S8() {
  if (jk) return Cv;
  jk = 1;
  var e = Ve(), t = gn().Graph, r = Pt();
  Cv = {
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
    function k(R, T) {
      var A = 0, O = 0, D = R.length, G = e.last(T);
      return e.forEach(T, function(B, V) {
        var X = a(S, B), L = X ? S.node(X).order : D;
        (X || B === G) && (e.forEach(T.slice(O, V + 1), function(H) {
          e.forEach(S.predecessors(H), function($) {
            var Y = S.node($), M = Y.order;
            (M < A || L < M) && !(Y.dummy && S.node(H).dummy) && l(_, $, H);
          });
        }), O = V + 1, A = L);
      }), T;
    }
    return e.reduce(C, k), _;
  }
  function s(S, C) {
    var _ = {};
    function k(T, A, O, D, G) {
      var B;
      e.forEach(e.range(A, O), function(V) {
        B = T[V], S.node(B).dummy && e.forEach(S.predecessors(B), function(X) {
          var L = S.node(X);
          L.dummy && (L.order < D || L.order > G) && l(_, X, B);
        });
      });
    }
    function R(T, A) {
      var O = -1, D, G = 0;
      return e.forEach(A, function(B, V) {
        if (S.node(B).dummy === "border") {
          var X = S.predecessors(B);
          X.length && (D = S.node(X[0]).order, k(A, G, V, O, D), G = V, O = D);
        }
        k(A, G, A.length, D, T.length);
      }), A;
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
    var R = {}, T = {}, A = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(D, G) {
        R[D] = D, T[D] = D, A[D] = G;
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
            T[G] === G && D < A[H] && !u(_, G, H) && (T[H] = G, T[G] = R[G] = R[H], D = A[H]);
          }
        }
      });
    }), { root: R, align: T };
  }
  function d(S, C, _, k, R) {
    var T = {}, A = h(S, C, _, R), O = R ? "borderLeft" : "borderRight";
    function D(V, X) {
      for (var L = A.nodes(), H = L.pop(), $ = {}; H; )
        $[H] ? V(H) : ($[H] = !0, L.push(H), L = L.concat(X(H))), H = L.pop();
    }
    function G(V) {
      T[V] = A.inEdges(V).reduce(function(X, L) {
        return Math.max(X, T[L.v] + A.edge(L));
      }, 0);
    }
    function B(V) {
      var X = A.outEdges(V).reduce(function(H, $) {
        return Math.min(H, T[$.w] - A.edge($));
      }, Number.POSITIVE_INFINITY), L = S.node(V);
      X !== Number.POSITIVE_INFINITY && L.borderType !== O && (T[V] = Math.max(T[V], X));
    }
    return D(G, A.predecessors.bind(A)), D(B, A.successors.bind(A)), e.forEach(k, function(V) {
      T[V] = T[_[V]];
    }), T;
  }
  function h(S, C, _, k) {
    var R = new t(), T = S.graph(), A = y(T.nodesep, T.edgesep, k);
    return e.forEach(C, function(O) {
      var D;
      e.forEach(O, function(G) {
        var B = _[G];
        if (R.setNode(B), D) {
          var V = _[D], X = R.edge(V, B);
          R.setEdge(V, B, Math.max(A(S, G, D), X || 0));
        }
        D = G;
      });
    }), R;
  }
  function m(S, C) {
    return e.minBy(e.values(C), function(_) {
      var k = Number.NEGATIVE_INFINITY, R = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(T, A) {
        var O = x(S, A) / 2;
        k = Math.max(T + O, k), R = Math.min(T - O, R);
      }), k - R;
    });
  }
  function g(S, C) {
    var _ = e.values(C), k = e.min(_), R = e.max(_);
    e.forEach(["u", "d"], function(T) {
      e.forEach(["l", "r"], function(A) {
        var O = T + A, D = S[O], G;
        if (D !== C) {
          var B = e.values(D);
          G = A === "l" ? k - e.min(B) : R - e.max(B), G && (S[O] = e.mapValues(D, function(V) {
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
      var R = e.sortBy(e.map(S, k));
      return (R[1] + R[2]) / 2;
    });
  }
  function E(S) {
    var C = r.buildLayerMatrix(S), _ = e.merge(
      o(S, C),
      s(S, C)
    ), k = {}, R;
    e.forEach(["u", "d"], function(A) {
      R = A === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(O) {
        O === "r" && (R = e.map(R, function(V) {
          return e.values(V).reverse();
        }));
        var D = (A === "u" ? S.predecessors : S.successors).bind(S), G = f(S, R, _, D), B = d(
          S,
          R,
          G.root,
          G.align,
          O === "r"
        );
        O === "r" && (B = e.mapValues(B, function(V) {
          return -V;
        })), k[A + O] = B;
      });
    });
    var T = m(S, k);
    return g(k, T), w(k, S.graph().align);
  }
  function y(S, C, _) {
    return function(k, R, T) {
      var A = k.node(R), O = k.node(T), D = 0, G;
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
  return Cv;
}
var kv, zk;
function E8() {
  if (zk) return kv;
  zk = 1;
  var e = Ve(), t = Pt(), r = S8().positionX;
  kv = o;
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
  return kv;
}
var Nv, Fk;
function C8() {
  if (Fk) return Nv;
  Fk = 1;
  var e = Ve(), t = s8(), r = a8(), o = u8(), s = Pt().normalizeRanks, a = c8(), l = Pt().removeEmptyRanks, u = f8(), f = d8(), d = h8(), h = b8(), m = E8(), g = Pt(), w = gn().Graph;
  Nv = E;
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
  var S = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, _ = ["acyclicer", "ranker", "rankdir", "align"], k = ["width", "height"], R = { width: 0, height: 0 }, T = ["minlen", "weight", "width", "height", "labeloffset"], A = {
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
      Z.setNode(K, e.defaults(W(te, k), R)), Z.setParent(K, F.parent(K));
    }), e.forEach(F.edges(), function(K) {
      var te = ie(F.edge(K));
      Z.setEdge(K, e.merge(
        {},
        A,
        W(te, T),
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
      var be = pe.x, ge = pe.y, Re = pe.width, Ee = pe.height;
      Z = Math.min(Z, be - Re / 2), ee = Math.max(ee, be + Re / 2), K = Math.min(K, ge - Ee / 2), te = Math.max(te, ge + Ee / 2);
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
  return Nv;
}
var Rv, $k;
function k8() {
  if ($k) return Rv;
  $k = 1;
  var e = Ve(), t = Pt(), r = gn().Graph;
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
var Pv, Bk;
function N8() {
  return Bk || (Bk = 1, Pv = "0.8.5"), Pv;
}
var Tv, Vk;
function R8() {
  return Vk || (Vk = 1, Tv = {
    graphlib: gn(),
    layout: C8(),
    debug: k8(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: N8()
  }), Tv;
}
R8();
N.createContext(null);
const EA = N.createContext(null), P8 = () => {
  const e = N.useContext(EA);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
};
class n0 {
  constructor(t) {
    fl(this, "schema");
    fl(this, "LayoutComponent");
    if (this.schema = t, this.LayoutComponent = Nz(t.layoutType), !this.LayoutComponent)
      throw new Error(`Unknown layoutType: "${t.layoutType}".`);
  }
  /**
   * Build header configuration and pre-render header element
   */
  buildHeaderConfig() {
    const { header: t, label: r, icon: o } = this.schema, s = (t == null ? void 0 : t.show) !== !1, a = (t == null ? void 0 : t.icon) || o;
    return {
      show: s,
      element: s ? /* @__PURE__ */ I.jsx(
        Pz,
        {
          className: Fe(
            "p-2.5 space-y-0 px-2.5",
            (t == null ? void 0 : t.className) || "bg-primary text-primary-foreground"
          ),
          style: {
            backgroundColor: t == null ? void 0 : t.bgColor,
            color: t == null ? void 0 : t.textColor
          },
          children: /* @__PURE__ */ I.jsxs(Tz, { className: "text-sm font-semibold flex items-center gap-2", children: [
            a && /* @__PURE__ */ I.jsx("span", { className: "text-base", children: a }),
            r
          ] })
        }
      ) : null
    };
  }
  /**
   * Build footer configuration and pre-render footer element
   */
  buildFooterConfig() {
    const { footer: t } = this.schema, r = (t == null ? void 0 : t.show) === !0;
    return {
      show: r,
      element: r && t ? /* @__PURE__ */ I.jsx(
        Az,
        {
          className: Fe(
            "p-2 px-2.5 text-xs text-muted-foreground border-t",
            t.className
          ),
          children: t.text
        }
      ) : null
    };
  }
  /**
   * Build style configuration and compute CSS properties
   */
  buildStyleConfig() {
    const { style: t } = this.schema, r = {};
    t != null && t.minWidth && (r.minWidth = typeof t.minWidth == "number" ? `${t.minWidth}px` : t.minWidth), t != null && t.maxWidth && (r.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), t != null && t.borderRadius && (r.borderRadius = t.borderRadius);
    const o = t != null && t.shadow ? `shadow-${t.shadow}` : "shadow-md";
    return {
      style: r,
      className: Fe(
        "min-w-[200px] border-2 transition-all overflow-hidden p-0 gap-0",
        o,
        t == null ? void 0 : t.className
      )
    };
  }
  /**
   * Build the complete React component with all configuration baked in
   * 
   * Returns a memoized component that only re-renders when necessary
   * (when id, selected, or values change).
   */
  buildComponent() {
    const { schema: t, LayoutComponent: r } = this, o = this.buildHeaderConfig(), s = this.buildFooterConfig(), a = this.buildStyleConfig(), l = ({ id: u, data: f, selected: d }) => {
      const h = f, m = P8(), g = N.useCallback((w, E) => {
        m((y) => ({
          ...y,
          [u]: { ...y[u], [w]: E }
        }));
      }, [u, m]);
      return /* @__PURE__ */ I.jsxs(
        Rz,
        {
          className: Fe(
            a.className,
            d && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: a.style,
          children: [
            o.element,
            /* @__PURE__ */ I.jsx(
              r,
              {
                inputs: h.inputs || t.inputs,
                outputs: h.outputs || t.outputs,
                handleType: t.handleType,
                inputHandleType: t.inputHandleType,
                outputHandleType: t.outputHandleType,
                children: h.parameters && /* @__PURE__ */ I.jsx(
                  h5,
                  {
                    nodeId: u,
                    parameters: h.parameters,
                    values: h.values,
                    onValueChange: g,
                    fieldConfigs: h.fieldConfigs,
                    validation: h.validation
                  }
                )
              }
            ),
            s.element
          ]
        }
      );
    };
    return N.memo(
      l,
      (u, f) => u.id === f.id && u.selected === f.selected && u.data.values === f.data.values
    );
  }
  /**
   * Static helper to build a component from schema in one call
   */
  static buildComponent(t) {
    return new n0(t).buildComponent();
  }
}
function T8() {
  const [e] = Vf("id"), [t] = Vf("data"), [r] = Vf("selected"), o = e ?? "json-schema-node", s = t ?? {}, a = r ?? !1, l = N.useMemo(() => {
    try {
      return n0.buildComponent(s);
    } catch (f) {
      return console.error("Failed to build node component:", f), () => /* @__PURE__ */ I.jsxs("div", { style: { padding: "10px", border: "1px solid red", borderRadius: "4px" }, children: [
        /* @__PURE__ */ I.jsx("strong", { children: "Error building node:" }),
        /* @__PURE__ */ I.jsx("pre", { children: String(f) })
      ] });
    }
  }, [s]), [, u] = N.useState({});
  return /* @__PURE__ */ I.jsx(NR, { children: /* @__PURE__ */ I.jsx(EA.Provider, { value: u, children: /* @__PURE__ */ I.jsx("div", { style: { padding: "10px" }, children: /* @__PURE__ */ I.jsx(
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
const A8 = v2(T8), M8 = { render: A8 };
export {
  M8 as default
};
//# sourceMappingURL=json_schema_node_entry.js.map
