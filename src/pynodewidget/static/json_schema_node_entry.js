var XI = Object.defineProperty;
var QI = (e, t, r) => t in e ? XI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var yx = (e, t, r) => QI(e, typeof t != "symbol" ? t + "" : t, r);
function ZI(e, t) {
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
var ul = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Of = { exports: {} }, us = {}, Lf = { exports: {} }, Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wx;
function JI() {
  if (wx) return Ae;
  wx = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.iterator;
  function m(j) {
    return j === null || typeof j != "object" ? null : (j = g && j[g] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E = Object.assign, y = {};
  function x(j, W, ie) {
    this.props = j, this.context = W, this.refs = y, this.updater = ie || w;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(j, W) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, W, "setState");
  }, x.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function S() {
  }
  S.prototype = x.prototype;
  function C(j, W, ie) {
    this.props = j, this.context = W, this.refs = y, this.updater = ie || w;
  }
  var _ = C.prototype = new S();
  _.constructor = C, E(_, x.prototype), _.isPureReactComponent = !0;
  var k = Array.isArray, N = Object.prototype.hasOwnProperty, T = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(j, W, ie) {
    var F, Z = {}, ee = null, K = null;
    if (W != null) for (F in W.ref !== void 0 && (K = W.ref), W.key !== void 0 && (ee = "" + W.key), W) N.call(W, F) && !A.hasOwnProperty(F) && (Z[F] = W[F]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (j && j.defaultProps) for (F in te = j.defaultProps, te) Z[F] === void 0 && (Z[F] = te[F]);
    return { $$typeof: e, type: j, key: ee, ref: K, props: Z, _owner: T.current };
  }
  function D(j, W) {
    return { $$typeof: e, type: j.type, key: W, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function G(j) {
    return typeof j == "object" && j !== null && j.$$typeof === e;
  }
  function B(j) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ie) {
      return W[ie];
    });
  }
  var V = /\/+/g;
  function X(j, W) {
    return typeof j == "object" && j !== null && j.key != null ? B("" + j.key) : W.toString(36);
  }
  function L(j, W, ie, F, Z) {
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
    if (K) return K = j, Z = Z(K), j = F === "" ? "." + X(K, 0) : F, k(Z) ? (ie = "", j != null && (ie = j.replace(V, "$&/") + "/"), L(Z, W, ie, "", function(ae) {
      return ae;
    })) : Z != null && (G(Z) && (Z = D(Z, ie + (!Z.key || K && K.key === Z.key ? "" : ("" + Z.key).replace(V, "$&/") + "/") + j)), W.push(Z)), 1;
    if (K = 0, F = F === "" ? "." : F + ":", k(j)) for (var te = 0; te < j.length; te++) {
      ee = j[te];
      var se = F + X(ee, te);
      K += L(ee, W, ie, se, Z);
    }
    else if (se = m(j), typeof se == "function") for (j = se.call(j), te = 0; !(ee = j.next()).done; ) ee = ee.value, se = F + X(ee, te++), K += L(ee, W, ie, se, Z);
    else if (ee === "object") throw W = String(j), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function H(j, W, ie) {
    if (j == null) return j;
    var F = [], Z = 0;
    return L(j, F, "", "", function(ee) {
      return W.call(ie, ee, Z++);
    }), F;
  }
  function $(j) {
    if (j._status === -1) {
      var W = j._result;
      W = W(), W.then(function(ie) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ie);
      }, function(ie) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ie);
      }), j._status === -1 && (j._status = 0, j._result = W);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Y = { current: null }, M = { transition: null }, q = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: M, ReactCurrentOwner: T };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ae.Children = { map: H, forEach: function(j, W, ie) {
    H(j, function() {
      W.apply(this, arguments);
    }, ie);
  }, count: function(j) {
    var W = 0;
    return H(j, function() {
      W++;
    }), W;
  }, toArray: function(j) {
    return H(j, function(W) {
      return W;
    }) || [];
  }, only: function(j) {
    if (!G(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Ae.Component = x, Ae.Fragment = r, Ae.Profiler = s, Ae.PureComponent = C, Ae.StrictMode = o, Ae.Suspense = f, Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, Ae.act = Q, Ae.cloneElement = function(j, W, ie) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var F = E({}, j.props), Z = j.key, ee = j.ref, K = j._owner;
    if (W != null) {
      if (W.ref !== void 0 && (ee = W.ref, K = T.current), W.key !== void 0 && (Z = "" + W.key), j.type && j.type.defaultProps) var te = j.type.defaultProps;
      for (se in W) N.call(W, se) && !A.hasOwnProperty(se) && (F[se] = W[se] === void 0 && te !== void 0 ? te[se] : W[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) F.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      F.children = te;
    }
    return { $$typeof: e, type: j.type, key: Z, ref: ee, props: F, _owner: K };
  }, Ae.createContext = function(j) {
    return j = { $$typeof: l, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: a, _context: j }, j.Consumer = j;
  }, Ae.createElement = O, Ae.createFactory = function(j) {
    var W = O.bind(null, j);
    return W.type = j, W;
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(j) {
    return { $$typeof: u, render: j };
  }, Ae.isValidElement = G, Ae.lazy = function(j) {
    return { $$typeof: h, _payload: { _status: -1, _result: j }, _init: $ };
  }, Ae.memo = function(j, W) {
    return { $$typeof: d, type: j, compare: W === void 0 ? null : W };
  }, Ae.startTransition = function(j) {
    var W = M.transition;
    M.transition = {};
    try {
      j();
    } finally {
      M.transition = W;
    }
  }, Ae.unstable_act = Q, Ae.useCallback = function(j, W) {
    return Y.current.useCallback(j, W);
  }, Ae.useContext = function(j) {
    return Y.current.useContext(j);
  }, Ae.useDebugValue = function() {
  }, Ae.useDeferredValue = function(j) {
    return Y.current.useDeferredValue(j);
  }, Ae.useEffect = function(j, W) {
    return Y.current.useEffect(j, W);
  }, Ae.useId = function() {
    return Y.current.useId();
  }, Ae.useImperativeHandle = function(j, W, ie) {
    return Y.current.useImperativeHandle(j, W, ie);
  }, Ae.useInsertionEffect = function(j, W) {
    return Y.current.useInsertionEffect(j, W);
  }, Ae.useLayoutEffect = function(j, W) {
    return Y.current.useLayoutEffect(j, W);
  }, Ae.useMemo = function(j, W) {
    return Y.current.useMemo(j, W);
  }, Ae.useReducer = function(j, W, ie) {
    return Y.current.useReducer(j, W, ie);
  }, Ae.useRef = function(j) {
    return Y.current.useRef(j);
  }, Ae.useState = function(j) {
    return Y.current.useState(j);
  }, Ae.useSyncExternalStore = function(j, W, ie) {
    return Y.current.useSyncExternalStore(j, W, ie);
  }, Ae.useTransition = function() {
    return Y.current.useTransition();
  }, Ae.version = "18.3.1", Ae;
}
var xx;
function Os() {
  return xx || (xx = 1, Lf.exports = JI()), Lf.exports;
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
var _x;
function e2() {
  if (_x) return us;
  _x = 1;
  var e = Os(), t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, g = {}, m = null, w = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (g[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) g[h] === void 0 && (g[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: w, props: g, _owner: s.current };
  }
  return us.Fragment = r, us.jsx = l, us.jsxs = l, us;
}
var bx;
function t2() {
  return bx || (bx = 1, Of.exports = e2()), Of.exports;
}
var I = t2(), R = Os();
const cn = /* @__PURE__ */ Jv(R), ey = /* @__PURE__ */ ZI({
  __proto__: null,
  default: cn
}, [R]);
var cl = {}, jf = { exports: {} }, Rt = {}, Df = { exports: {} }, qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sx;
function n2() {
  return Sx || (Sx = 1, (function(e) {
    function t(M, q) {
      var Q = M.length;
      M.push(q);
      e: for (; 0 < Q; ) {
        var j = Q - 1 >>> 1, W = M[j];
        if (0 < s(W, q)) M[j] = q, M[Q] = W, Q = j;
        else break e;
      }
    }
    function r(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var q = M[0], Q = M.pop();
      if (Q !== q) {
        M[0] = Q;
        e: for (var j = 0, W = M.length, ie = W >>> 1; j < ie; ) {
          var F = 2 * (j + 1) - 1, Z = M[F], ee = F + 1, K = M[ee];
          if (0 > s(Z, Q)) ee < W && 0 > s(K, Z) ? (M[j] = K, M[ee] = Q, j = ee) : (M[j] = Z, M[F] = Q, j = F);
          else if (ee < W && 0 > s(K, Q)) M[j] = K, M[ee] = Q, j = ee;
          else break e;
        }
      }
      return q;
    }
    function s(M, q) {
      var Q = M.sortIndex - q.sortIndex;
      return Q !== 0 ? Q : M.id - q.id;
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
    var f = [], d = [], h = 1, g = null, m = 3, w = !1, E = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(M) {
      for (var q = r(d); q !== null; ) {
        if (q.callback === null) o(d);
        else if (q.startTime <= M) o(d), q.sortIndex = q.expirationTime, t(f, q);
        else break;
        q = r(d);
      }
    }
    function k(M) {
      if (y = !1, _(M), !E) if (r(f) !== null) E = !0, $(N);
      else {
        var q = r(d);
        q !== null && Y(k, q.startTime - M);
      }
    }
    function N(M, q) {
      E = !1, y && (y = !1, S(O), O = -1), w = !0;
      var Q = m;
      try {
        for (_(q), g = r(f); g !== null && (!(g.expirationTime > q) || M && !B()); ) {
          var j = g.callback;
          if (typeof j == "function") {
            g.callback = null, m = g.priorityLevel;
            var W = j(g.expirationTime <= q);
            q = e.unstable_now(), typeof W == "function" ? g.callback = W : g === r(f) && o(f), _(q);
          } else o(f);
          g = r(f);
        }
        if (g !== null) var ie = !0;
        else {
          var F = r(d);
          F !== null && Y(k, F.startTime - q), ie = !1;
        }
        return ie;
      } finally {
        g = null, m = Q, w = !1;
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
        var q = !0;
        try {
          q = A(!0, M);
        } finally {
          q ? X() : (T = !1, A = null);
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
    function Y(M, q) {
      O = x(function() {
        M(e.unstable_now());
      }, q);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      E || w || (E = !0, $(N));
    }, e.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < M ? Math.floor(1e3 / M) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(f);
    }, e.unstable_next = function(M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = m;
      }
      var Q = m;
      m = q;
      try {
        return M();
      } finally {
        m = Q;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(M, q) {
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
        return q();
      } finally {
        m = Q;
      }
    }, e.unstable_scheduleCallback = function(M, q, Q) {
      var j = e.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? j + Q : j) : Q = j, M) {
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
      return W = Q + W, M = { id: h++, callback: q, priorityLevel: M, startTime: Q, expirationTime: W, sortIndex: -1 }, Q > j ? (M.sortIndex = Q, t(d, M), r(f) === null && M === r(d) && (y ? (S(O), O = -1) : y = !0, Y(k, Q - j))) : (M.sortIndex = W, t(f, M), E || w || (E = !0, $(N))), M;
    }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(M) {
      var q = m;
      return function() {
        var Q = m;
        m = q;
        try {
          return M.apply(this, arguments);
        } finally {
          m = Q;
        }
      };
    };
  })(qf)), qf;
}
var Ex;
function r2() {
  return Ex || (Ex = 1, Df.exports = n2()), Df.exports;
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
var Cx;
function o2() {
  if (Cx) return Rt;
  Cx = 1;
  var e = Os(), t = r2();
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
  var u = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, h = {}, g = {};
  function m(n) {
    return f.call(g, n) ? !0 : f.call(h, n) ? !1 : d.test(n) ? g[n] = !0 : (h[n] = !0, !1);
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
    (v !== null ? v.type !== 0 : p || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (E(i, c, v, p) && (c = null), p || v === null ? m(i) && (c === null ? n.removeAttribute(i) : n.setAttribute(i, "" + c)) : v.mustUseProperty ? n[v.propertyName] = c === null ? v.type === 3 ? !1 : "" : c : (i = v.attributeName, p = v.attributeNamespace, c === null ? n.removeAttribute(i) : (v = v.type, c = v === 3 || v === 4 && c === !0 ? "" : "" + c, p ? n.setAttributeNS(p, i, c) : n.setAttribute(i, c))));
  }
  var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, N = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), B = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function q(n) {
    return n === null || typeof n != "object" ? null : (n = M && n[M] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Q = Object.assign, j;
  function W(n) {
    if (j === void 0) try {
      throw Error();
    } catch (c) {
      var i = c.stack.trim().match(/\n( *(at )?)/);
      j = i && i[1] || "";
    }
    return `
` + j + n;
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
  function ve(n, i) {
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
  function Qe(n, i, c) {
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
  var _t, Or = (function(n) {
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
  var jn = {
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
  Object.keys(jn).forEach(function(n) {
    go.forEach(function(i) {
      i = i + n.charAt(0).toUpperCase() + n.substring(1), jn[i] = jn[n];
    });
  });
  function Tt(n, i, c) {
    return i == null || typeof i == "boolean" || i === "" ? "" : c || typeof i != "number" || i === 0 || jn.hasOwnProperty(n) && jn[n] ? ("" + i).trim() : i + "px";
  }
  function Ht(n, i) {
    n = n.style;
    for (var c in i) if (i.hasOwnProperty(c)) {
      var p = c.indexOf("--") === 0, v = Tt(c, i[c], p);
      c === "float" && (c = "cssFloat"), p ? n.setProperty(c, v) : n[c] = v;
    }
  }
  var $u = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xi(n, i) {
    if (i) {
      if ($u[n] && (i.children != null || i.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
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
    var p = Ea(c);
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
  var ki = !1;
  if (u) try {
    var jr = {};
    Object.defineProperty(jr, "passive", { get: function() {
      ki = !0;
    } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
  } catch {
    ki = !1;
  }
  function Bu(n, i, c, p, v, b, P, z, U) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Dr = !1, mo = null, vo = !1, Ri = null, Vu = { onError: function(n) {
    Dr = !0, mo = n;
  } };
  function Hu(n, i, c, p, v, b, P, z, U) {
    Dr = !1, mo = null, Bu.apply(Vu, arguments);
  }
  function Wu(n, i, c, p, v, b, P, z, U) {
    if (Hu.apply(this, arguments), Dr) {
      if (Dr) {
        var oe = mo;
        Dr = !1, mo = null;
      } else throw Error(r(198));
      vo || (vo = !0, Ri = oe);
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
  function Ni(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (i === null && (n = n.alternate, n !== null && (i = n.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function Pi(n) {
    if (xn(n) !== n) throw Error(r(188));
  }
  function Uu(n) {
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
          if (b === c) return Pi(v), n;
          if (b === p) return Pi(v), i;
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
  function ta(n) {
    return n = Uu(n), n !== null ? na(n) : null;
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
  var ra = t.unstable_scheduleCallback, oa = t.unstable_cancelCallback, Gu = t.unstable_shouldYield, ia = t.unstable_requestPaint, We = t.unstable_now, Yu = t.unstable_getCurrentPriorityLevel, Ti = t.unstable_ImmediatePriority, sa = t.unstable_UserBlockingPriority, yo = t.unstable_NormalPriority, Ku = t.unstable_LowPriority, aa = t.unstable_IdlePriority, qr = null, Wt = null;
  function Xu(n) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(qr, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : Ju, Qu = Math.log, Zu = Math.LN2;
  function Ju(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Qu(n) / Zu | 0) | 0;
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
    var p = 0, v = n.suspendedLanes, b = n.pingedLanes, P = c & 268435455;
    if (P !== 0) {
      var z = P & ~v;
      z !== 0 ? p = _n(z) : (b &= P, b !== 0 && (p = _n(b)));
    } else P = c & ~v, P !== 0 ? p = _n(P) : b !== 0 && (p = _n(b));
    if (p === 0) return 0;
    if (i !== 0 && i !== p && (i & v) === 0 && (v = p & -p, b = i & -i, v >= b || v === 16 && (b & 4194240) !== 0)) return i;
    if ((p & 4) !== 0 && (p |= c & 16), i = n.entangledLanes, i !== 0) for (n = n.entanglements, i &= p; 0 < i; ) c = 31 - At(i), v = 1 << c, p |= n[c], i &= ~v;
    return p;
  }
  function ec(n, i) {
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
  function tc(n, i) {
    for (var c = n.suspendedLanes, p = n.pingedLanes, v = n.expirationTimes, b = n.pendingLanes; 0 < b; ) {
      var P = 31 - At(b), z = 1 << P, U = v[P];
      U === -1 ? ((z & c) === 0 || (z & p) !== 0) && (v[P] = ec(z, i)) : U <= i && (n.expiredLanes |= z), b &= ~z;
    }
  }
  function zr(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function la() {
    var n = wo;
    return wo <<= 1, (wo & 4194240) === 0 && (wo = 64), n;
  }
  function Ai(n) {
    for (var i = [], c = 0; 31 > c; c++) i.push(n);
    return i;
  }
  function nr(n, i, c) {
    n.pendingLanes |= i, i !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, i = 31 - At(i), n[i] = c;
  }
  function vA(n, i) {
    var c = n.pendingLanes & ~i;
    n.pendingLanes = i, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= i, n.mutableReadLanes &= i, n.entangledLanes &= i, i = n.entanglements;
    var p = n.eventTimes;
    for (n = n.expirationTimes; 0 < c; ) {
      var v = 31 - At(c), b = 1 << v;
      i[v] = 0, p[v] = -1, n[v] = -1, c &= ~b;
    }
  }
  function nc(n, i) {
    var c = n.entangledLanes |= i;
    for (n = n.entanglements; c; ) {
      var p = 31 - At(c), v = 1 << p;
      v & i | n[p] & i && (n[p] |= i), c &= ~v;
    }
  }
  var Le = 0;
  function Xy(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Qy, rc, Zy, Jy, e0, oc = !1, ua = [], rr = null, or = null, ir = null, Ii = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), sr = [], yA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function t0(n, i) {
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
  function Oi(n, i, c, p, v, b) {
    return n === null || n.nativeEvent !== b ? (n = { blockedOn: i, domEventName: c, eventSystemFlags: p, nativeEvent: b, targetContainers: [v] }, i !== null && (i = Yi(i), i !== null && rc(i)), n) : (n.eventSystemFlags |= p, i = n.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), n);
  }
  function wA(n, i, c, p, v) {
    switch (i) {
      case "focusin":
        return rr = Oi(rr, n, i, c, p, v), !0;
      case "dragenter":
        return or = Oi(or, n, i, c, p, v), !0;
      case "mouseover":
        return ir = Oi(ir, n, i, c, p, v), !0;
      case "pointerover":
        var b = v.pointerId;
        return Ii.set(b, Oi(Ii.get(b) || null, n, i, c, p, v)), !0;
      case "gotpointercapture":
        return b = v.pointerId, Mi.set(b, Oi(Mi.get(b) || null, n, i, c, p, v)), !0;
    }
    return !1;
  }
  function n0(n) {
    var i = Fr(n.target);
    if (i !== null) {
      var c = xn(i);
      if (c !== null) {
        if (i = c.tag, i === 13) {
          if (i = Ni(c), i !== null) {
            n.blockedOn = i, e0(n.priority, function() {
              Zy(c);
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
      var c = sc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (c === null) {
        c = n.nativeEvent;
        var p = new c.constructor(c.type, c);
        bi = p, c.target.dispatchEvent(p), bi = null;
      } else return i = Yi(c), i !== null && rc(i), n.blockedOn = c, !1;
      i.shift();
    }
    return !0;
  }
  function r0(n, i, c) {
    ca(n) && c.delete(i);
  }
  function xA() {
    oc = !1, rr !== null && ca(rr) && (rr = null), or !== null && ca(or) && (or = null), ir !== null && ca(ir) && (ir = null), Ii.forEach(r0), Mi.forEach(r0);
  }
  function Li(n, i) {
    n.blockedOn === i && (n.blockedOn = null, oc || (oc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, xA)));
  }
  function ji(n) {
    function i(v) {
      return Li(v, n);
    }
    if (0 < ua.length) {
      Li(ua[0], n);
      for (var c = 1; c < ua.length; c++) {
        var p = ua[c];
        p.blockedOn === n && (p.blockedOn = null);
      }
    }
    for (rr !== null && Li(rr, n), or !== null && Li(or, n), ir !== null && Li(ir, n), Ii.forEach(i), Mi.forEach(i), c = 0; c < sr.length; c++) p = sr[c], p.blockedOn === n && (p.blockedOn = null);
    for (; 0 < sr.length && (c = sr[0], c.blockedOn === null); ) n0(c), c.blockedOn === null && sr.shift();
  }
  var bo = k.ReactCurrentBatchConfig, fa = !0;
  function _A(n, i, c, p) {
    var v = Le, b = bo.transition;
    bo.transition = null;
    try {
      Le = 1, ic(n, i, c, p);
    } finally {
      Le = v, bo.transition = b;
    }
  }
  function bA(n, i, c, p) {
    var v = Le, b = bo.transition;
    bo.transition = null;
    try {
      Le = 4, ic(n, i, c, p);
    } finally {
      Le = v, bo.transition = b;
    }
  }
  function ic(n, i, c, p) {
    if (fa) {
      var v = sc(n, i, c, p);
      if (v === null) Sc(n, i, p, da, c), t0(n, p);
      else if (wA(v, n, i, c, p)) p.stopPropagation();
      else if (t0(n, p), i & 4 && -1 < yA.indexOf(n)) {
        for (; v !== null; ) {
          var b = Yi(v);
          if (b !== null && Qy(b), b = sc(n, i, c, p), b === null && Sc(n, i, p, da, c), b === v) break;
          v = b;
        }
        v !== null && p.stopPropagation();
      } else Sc(n, i, p, null, c);
    }
  }
  var da = null;
  function sc(n, i, c, p) {
    if (da = null, n = Si(p), n = Fr(n), n !== null) if (i = xn(n), i === null) n = null;
    else if (c = i.tag, c === 13) {
      if (n = Ni(i), n !== null) return n;
      n = null;
    } else if (c === 3) {
      if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
      n = null;
    } else i !== n && (n = null);
    return da = n, null;
  }
  function o0(n) {
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
        switch (Yu()) {
          case Ti:
            return 1;
          case sa:
            return 4;
          case yo:
          case Ku:
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
  var ar = null, ac = null, ha = null;
  function i0() {
    if (ha) return ha;
    var n, i = ac, c = i.length, p, v = "value" in ar ? ar.value : ar.textContent, b = v.length;
    for (n = 0; n < c && i[n] === v[n]; n++) ;
    var P = c - n;
    for (p = 1; p <= P && i[c - p] === v[b - p]; p++) ;
    return ha = v.slice(n, 1 < p ? 1 - p : void 0);
  }
  function pa(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ga() {
    return !0;
  }
  function s0() {
    return !1;
  }
  function It(n) {
    function i(c, p, v, b, P) {
      this._reactName = c, this._targetInst = v, this.type = p, this.nativeEvent = b, this.target = P, this.currentTarget = null;
      for (var z in n) n.hasOwnProperty(z) && (c = n[z], this[z] = c ? c(b) : b[z]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? ga : s0, this.isPropagationStopped = s0, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, lc = It(So), Di = Q({}, So, { view: 0, detail: 0 }), SA = It(Di), uc, cc, qi, ma = Q({}, Di, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== qi && (qi && n.type === "mousemove" ? (uc = n.screenX - qi.screenX, cc = n.screenY - qi.screenY) : cc = uc = 0, qi = n), uc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : cc;
  } }), a0 = It(ma), EA = Q({}, ma, { dataTransfer: 0 }), CA = It(EA), kA = Q({}, Di, { relatedTarget: 0 }), fc = It(kA), RA = Q({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), NA = It(RA), PA = Q({}, So, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), TA = It(PA), AA = Q({}, So, { data: 0 }), l0 = It(AA), IA = {
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
  }, MA = {
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
  }, OA = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function LA(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = OA[n]) ? !!i[n] : !1;
  }
  function dc() {
    return LA;
  }
  var jA = Q({}, Di, { key: function(n) {
    if (n.key) {
      var i = IA[n.key] || n.key;
      if (i !== "Unidentified") return i;
    }
    return n.type === "keypress" ? (n = pa(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? MA[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dc, charCode: function(n) {
    return n.type === "keypress" ? pa(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? pa(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), DA = It(jA), qA = Q({}, ma, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), u0 = It(qA), zA = Q({}, Di, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dc }), FA = It(zA), $A = Q({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), BA = It($A), VA = Q({}, ma, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), HA = It(VA), WA = [9, 13, 27, 32], hc = u && "CompositionEvent" in window, zi = null;
  u && "documentMode" in document && (zi = document.documentMode);
  var UA = u && "TextEvent" in window && !zi, c0 = u && (!hc || zi && 8 < zi && 11 >= zi), f0 = " ", d0 = !1;
  function h0(n, i) {
    switch (n) {
      case "keyup":
        return WA.indexOf(i.keyCode) !== -1;
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
  function p0(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Eo = !1;
  function GA(n, i) {
    switch (n) {
      case "compositionend":
        return p0(i);
      case "keypress":
        return i.which !== 32 ? null : (d0 = !0, f0);
      case "textInput":
        return n = i.data, n === f0 && d0 ? null : n;
      default:
        return null;
    }
  }
  function YA(n, i) {
    if (Eo) return n === "compositionend" || !hc && h0(n, i) ? (n = i0(), ha = ac = ar = null, Eo = !1, n) : null;
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
        return c0 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var KA = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function g0(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!KA[n.type] : i === "textarea";
  }
  function m0(n, i, c, p) {
    Xs(p), i = _a(i, "onChange"), 0 < i.length && (c = new lc("onChange", "change", null, c, p), n.push({ event: c, listeners: i }));
  }
  var Fi = null, $i = null;
  function XA(n) {
    O0(n, 0);
  }
  function va(n) {
    var i = Po(n);
    if (de(i)) return n;
  }
  function QA(n, i) {
    if (n === "change") return i;
  }
  var v0 = !1;
  if (u) {
    var pc;
    if (u) {
      var gc = "oninput" in document;
      if (!gc) {
        var y0 = document.createElement("div");
        y0.setAttribute("oninput", "return;"), gc = typeof y0.oninput == "function";
      }
      pc = gc;
    } else pc = !1;
    v0 = pc && (!document.documentMode || 9 < document.documentMode);
  }
  function w0() {
    Fi && (Fi.detachEvent("onpropertychange", x0), $i = Fi = null);
  }
  function x0(n) {
    if (n.propertyName === "value" && va($i)) {
      var i = [];
      m0(i, $i, n, Si(n)), ea(XA, i);
    }
  }
  function ZA(n, i, c) {
    n === "focusin" ? (w0(), Fi = i, $i = c, Fi.attachEvent("onpropertychange", x0)) : n === "focusout" && w0();
  }
  function JA(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return va($i);
  }
  function eI(n, i) {
    if (n === "click") return va(i);
  }
  function tI(n, i) {
    if (n === "input" || n === "change") return va(i);
  }
  function nI(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : nI;
  function Bi(n, i) {
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
  function _0(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function b0(n, i) {
    var c = _0(n);
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
      c = _0(c);
    }
  }
  function S0(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? S0(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function E0() {
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
  function mc(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i && (i === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || i === "textarea" || n.contentEditable === "true");
  }
  function rI(n) {
    var i = E0(), c = n.focusedElem, p = n.selectionRange;
    if (i !== c && c && c.ownerDocument && S0(c.ownerDocument.documentElement, c)) {
      if (p !== null && mc(c)) {
        if (i = p.start, n = p.end, n === void 0 && (n = i), "selectionStart" in c) c.selectionStart = i, c.selectionEnd = Math.min(n, c.value.length);
        else if (n = (i = c.ownerDocument || document) && i.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var v = c.textContent.length, b = Math.min(p.start, v);
          p = p.end === void 0 ? b : Math.min(p.end, v), !n.extend && b > p && (v = p, p = b, b = v), v = b0(c, b);
          var P = b0(
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
  var oI = u && "documentMode" in document && 11 >= document.documentMode, Co = null, vc = null, Vi = null, yc = !1;
  function C0(n, i, c) {
    var p = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    yc || Co == null || Co !== pe(p) || (p = Co, "selectionStart" in p && mc(p) ? p = { start: p.selectionStart, end: p.selectionEnd } : (p = (p.ownerDocument && p.ownerDocument.defaultView || window).getSelection(), p = { anchorNode: p.anchorNode, anchorOffset: p.anchorOffset, focusNode: p.focusNode, focusOffset: p.focusOffset }), Vi && Bi(Vi, p) || (Vi = p, p = _a(vc, "onSelect"), 0 < p.length && (i = new lc("onSelect", "select", null, i, c), n.push({ event: i, listeners: p }), i.target = Co)));
  }
  function ya(n, i) {
    var c = {};
    return c[n.toLowerCase()] = i.toLowerCase(), c["Webkit" + n] = "webkit" + i, c["Moz" + n] = "moz" + i, c;
  }
  var ko = { animationend: ya("Animation", "AnimationEnd"), animationiteration: ya("Animation", "AnimationIteration"), animationstart: ya("Animation", "AnimationStart"), transitionend: ya("Transition", "TransitionEnd") }, wc = {}, k0 = {};
  u && (k0 = document.createElement("div").style, "AnimationEvent" in window || (delete ko.animationend.animation, delete ko.animationiteration.animation, delete ko.animationstart.animation), "TransitionEvent" in window || delete ko.transitionend.transition);
  function wa(n) {
    if (wc[n]) return wc[n];
    if (!ko[n]) return n;
    var i = ko[n], c;
    for (c in i) if (i.hasOwnProperty(c) && c in k0) return wc[n] = i[c];
    return n;
  }
  var R0 = wa("animationend"), N0 = wa("animationiteration"), P0 = wa("animationstart"), T0 = wa("transitionend"), A0 = /* @__PURE__ */ new Map(), I0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function lr(n, i) {
    A0.set(n, i), a(i, [n]);
  }
  for (var xc = 0; xc < I0.length; xc++) {
    var _c = I0[xc], iI = _c.toLowerCase(), sI = _c[0].toUpperCase() + _c.slice(1);
    lr(iI, "on" + sI);
  }
  lr(R0, "onAnimationEnd"), lr(N0, "onAnimationIteration"), lr(P0, "onAnimationStart"), lr("dblclick", "onDoubleClick"), lr("focusin", "onFocus"), lr("focusout", "onBlur"), lr(T0, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), aI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));
  function M0(n, i, c) {
    var p = n.type || "unknown-event";
    n.currentTarget = c, Wu(p, i, void 0, n), n.currentTarget = null;
  }
  function O0(n, i) {
    i = (i & 4) !== 0;
    for (var c = 0; c < n.length; c++) {
      var p = n[c], v = p.event;
      p = p.listeners;
      e: {
        var b = void 0;
        if (i) for (var P = p.length - 1; 0 <= P; P--) {
          var z = p[P], U = z.instance, oe = z.currentTarget;
          if (z = z.listener, U !== b && v.isPropagationStopped()) break e;
          M0(v, z, oe), b = U;
        }
        else for (P = 0; P < p.length; P++) {
          if (z = p[P], U = z.instance, oe = z.currentTarget, z = z.listener, U !== b && v.isPropagationStopped()) break e;
          M0(v, z, oe), b = U;
        }
      }
    }
    if (vo) throw n = Ri, vo = !1, Ri = null, n;
  }
  function De(n, i) {
    var c = i[Pc];
    c === void 0 && (c = i[Pc] = /* @__PURE__ */ new Set());
    var p = n + "__bubble";
    c.has(p) || (L0(i, n, 2, !1), c.add(p));
  }
  function bc(n, i, c) {
    var p = 0;
    i && (p |= 4), L0(c, n, p, i);
  }
  var xa = "_reactListening" + Math.random().toString(36).slice(2);
  function Wi(n) {
    if (!n[xa]) {
      n[xa] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (aI.has(c) || bc(c, !1, n), bc(c, !0, n));
      });
      var i = n.nodeType === 9 ? n : n.ownerDocument;
      i === null || i[xa] || (i[xa] = !0, bc("selectionchange", !1, i));
    }
  }
  function L0(n, i, c, p) {
    switch (o0(i)) {
      case 1:
        var v = _A;
        break;
      case 4:
        v = bA;
        break;
      default:
        v = ic;
    }
    c = v.bind(null, i, c, n), v = void 0, !ki || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), p ? v !== void 0 ? n.addEventListener(i, c, { capture: !0, passive: v }) : n.addEventListener(i, c, !0) : v !== void 0 ? n.addEventListener(i, c, { passive: v }) : n.addEventListener(i, c, !1);
  }
  function Sc(n, i, c, p, v) {
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
          if (P = Fr(z), P === null) return;
          if (U = P.tag, U === 5 || U === 6) {
            p = b = P;
            continue e;
          }
          z = z.parentNode;
        }
      }
      p = p.return;
    }
    ea(function() {
      var oe = b, ue = Si(c), fe = [];
      e: {
        var le = A0.get(n);
        if (le !== void 0) {
          var ge = lc, we = n;
          switch (n) {
            case "keypress":
              if (pa(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = DA;
              break;
            case "focusin":
              we = "focus", ge = fc;
              break;
            case "focusout":
              we = "blur", ge = fc;
              break;
            case "beforeblur":
            case "afterblur":
              ge = fc;
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
              ge = a0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = CA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = FA;
              break;
            case R0:
            case N0:
            case P0:
              ge = NA;
              break;
            case T0:
              ge = BA;
              break;
            case "scroll":
              ge = SA;
              break;
            case "wheel":
              ge = HA;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = TA;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = u0;
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
          if (le = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", le && c !== bi && (we = c.relatedTarget || c.fromElement) && (Fr(we) || we[Dn])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (we = c.relatedTarget || c.toElement, ge = oe, we = we ? Fr(we) : null, we !== null && (Ze = xn(we), we !== Ze || we.tag !== 5 && we.tag !== 6) && (we = null)) : (ge = null, we = oe), ge !== we)) {
            if (Se = a0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (n === "pointerout" || n === "pointerover") && (Se = u0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), Ze = ge == null ? le : Po(ge), re = we == null ? le : Po(we), le = new Se(he, J + "leave", ge, c, ue), le.target = Ze, le.relatedTarget = re, he = null, Fr(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = Ze, he = Se), Ze = he, ge && we) t: {
              for (Se = ge, ne = we, J = 0, re = Se; re; re = Ro(re)) J++;
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
            ge !== null && j0(fe, le, ge, Se, !1), we !== null && Ze !== null && j0(fe, Ze, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? Po(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = QA;
          else if (g0(le)) if (v0) Ce = tI;
          else {
            Ce = JA;
            var ke = ZA;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = eI);
          if (Ce && (Ce = Ce(n, oe))) {
            m0(fe, Ce, c, ue);
            break e;
          }
          ke && ke(n, le, oe), n === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ve(le, "number", le.value);
        }
        switch (ke = oe ? Po(oe) : window, n) {
          case "focusin":
            (g0(ke) || ke.contentEditable === "true") && (Co = ke, vc = oe, Vi = null);
            break;
          case "focusout":
            Vi = vc = Co = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, C0(fe, c, ue);
            break;
          case "selectionchange":
            if (oI) break;
          case "keydown":
          case "keyup":
            C0(fe, c, ue);
        }
        var Re;
        if (hc) e: {
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
        else Eo ? h0(n, c) && (Pe = "onCompositionEnd") : n === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (c0 && c.locale !== "ko" && (Eo || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Eo && (Re = i0()) : (ar = ue, ac = "value" in ar ? ar.value : ar.textContent, Eo = !0)), ke = _a(oe, Pe), 0 < ke.length && (Pe = new l0(Pe, n, null, c, ue), fe.push({ event: Pe, listeners: ke }), Re ? Pe.data = Re : (Re = p0(c), Re !== null && (Pe.data = Re)))), (Re = UA ? GA(n, c) : YA(n, c)) && (oe = _a(oe, "onBeforeInput"), 0 < oe.length && (ue = new l0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Re));
      }
      O0(fe, i);
    });
  }
  function Ui(n, i, c) {
    return { instance: n, listener: i, currentTarget: c };
  }
  function _a(n, i) {
    for (var c = i + "Capture", p = []; n !== null; ) {
      var v = n, b = v.stateNode;
      v.tag === 5 && b !== null && (v = b, b = Lr(n, c), b != null && p.unshift(Ui(n, b, v)), b = Lr(n, i), b != null && p.push(Ui(n, b, v))), n = n.return;
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
  function j0(n, i, c, p, v) {
    for (var b = i._reactName, P = []; c !== null && c !== p; ) {
      var z = c, U = z.alternate, oe = z.stateNode;
      if (U !== null && U === p) break;
      z.tag === 5 && oe !== null && (z = oe, v ? (U = Lr(c, b), U != null && P.unshift(Ui(c, U, z))) : v || (U = Lr(c, b), U != null && P.push(Ui(c, U, z)))), c = c.return;
    }
    P.length !== 0 && n.push({ event: i, listeners: P });
  }
  var lI = /\r\n?/g, uI = /\u0000|\uFFFD/g;
  function D0(n) {
    return (typeof n == "string" ? n : "" + n).replace(lI, `
`).replace(uI, "");
  }
  function ba(n, i, c) {
    if (i = D0(i), D0(n) !== i && c) throw Error(r(425));
  }
  function Sa() {
  }
  var Ec = null, Cc = null;
  function kc(n, i) {
    return n === "textarea" || n === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, cI = typeof clearTimeout == "function" ? clearTimeout : void 0, q0 = typeof Promise == "function" ? Promise : void 0, fI = typeof queueMicrotask == "function" ? queueMicrotask : typeof q0 < "u" ? function(n) {
    return q0.resolve(null).then(n).catch(dI);
  } : Rc;
  function dI(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Nc(n, i) {
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
  function z0(n) {
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
  var No = Math.random().toString(36).slice(2), bn = "__reactFiber$" + No, Gi = "__reactProps$" + No, Dn = "__reactContainer$" + No, Pc = "__reactEvents$" + No, hI = "__reactListeners$" + No, pI = "__reactHandles$" + No;
  function Fr(n) {
    var i = n[bn];
    if (i) return i;
    for (var c = n.parentNode; c; ) {
      if (i = c[Dn] || c[bn]) {
        if (c = i.alternate, i.child !== null || c !== null && c.child !== null) for (n = z0(n); n !== null; ) {
          if (c = n[bn]) return c;
          n = z0(n);
        }
        return i;
      }
      n = c, c = n.parentNode;
    }
    return null;
  }
  function Yi(n) {
    return n = n[bn] || n[Dn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Po(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function Ea(n) {
    return n[Gi] || null;
  }
  var Tc = [], To = -1;
  function cr(n) {
    return { current: n };
  }
  function qe(n) {
    0 > To || (n.current = Tc[To], Tc[To] = null, To--);
  }
  function je(n, i) {
    To++, Tc[To] = n.current, n.current = i;
  }
  var fr = {}, pt = cr(fr), bt = cr(!1), $r = fr;
  function Ao(n, i) {
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
  function Ca() {
    qe(bt), qe(pt);
  }
  function F0(n, i, c) {
    if (pt.current !== fr) throw Error(r(168));
    je(pt, i), je(bt, c);
  }
  function $0(n, i, c) {
    var p = n.stateNode;
    if (i = i.childContextTypes, typeof p.getChildContext != "function") return c;
    p = p.getChildContext();
    for (var v in p) if (!(v in i)) throw Error(r(108, K(n) || "Unknown", v));
    return Q({}, c, p);
  }
  function ka(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || fr, $r = pt.current, je(pt, n), je(bt, bt.current), !0;
  }
  function B0(n, i, c) {
    var p = n.stateNode;
    if (!p) throw Error(r(169));
    c ? (n = $0(n, i, $r), p.__reactInternalMemoizedMergedChildContext = n, qe(bt), qe(pt), je(pt, n)) : qe(bt), je(bt, c);
  }
  var qn = null, Ra = !1, Ac = !1;
  function V0(n) {
    qn === null ? qn = [n] : qn.push(n);
  }
  function gI(n) {
    Ra = !0, V0(n);
  }
  function dr() {
    if (!Ac && qn !== null) {
      Ac = !0;
      var n = 0, i = Le;
      try {
        var c = qn;
        for (Le = 1; n < c.length; n++) {
          var p = c[n];
          do
            p = p(!0);
          while (p !== null);
        }
        qn = null, Ra = !1;
      } catch (v) {
        throw qn !== null && (qn = qn.slice(n + 1)), ra(Ti, dr), v;
      } finally {
        Le = i, Ac = !1;
      }
    }
    return null;
  }
  var Io = [], Mo = 0, Na = null, Pa = 0, Ut = [], Gt = 0, Br = null, zn = 1, Fn = "";
  function Vr(n, i) {
    Io[Mo++] = Pa, Io[Mo++] = Na, Na = n, Pa = i;
  }
  function H0(n, i, c) {
    Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Br, Br = n;
    var p = zn;
    n = Fn;
    var v = 32 - At(p) - 1;
    p &= ~(1 << v), c += 1;
    var b = 32 - At(i) + v;
    if (30 < b) {
      var P = v - v % 5;
      b = (p & (1 << P) - 1).toString(32), p >>= P, v -= P, zn = 1 << 32 - At(i) + v | c << v | p, Fn = b + n;
    } else zn = 1 << b | c << v | p, Fn = n;
  }
  function Ic(n) {
    n.return !== null && (Vr(n, 1), H0(n, 1, 0));
  }
  function Mc(n) {
    for (; n === Na; ) Na = Io[--Mo], Io[Mo] = null, Pa = Io[--Mo], Io[Mo] = null;
    for (; n === Br; ) Br = Ut[--Gt], Ut[Gt] = null, Fn = Ut[--Gt], Ut[Gt] = null, zn = Ut[--Gt], Ut[Gt] = null;
  }
  var Mt = null, Ot = null, ze = !1, rn = null;
  function W0(n, i) {
    var c = Qt(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = i, c.return = n, i = n.deletions, i === null ? (n.deletions = [c], n.flags |= 16) : i.push(c);
  }
  function U0(n, i) {
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
  function Oc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Lc(n) {
    if (ze) {
      var i = Ot;
      if (i) {
        var c = i;
        if (!U0(n, i)) {
          if (Oc(n)) throw Error(r(418));
          i = ur(c.nextSibling);
          var p = Mt;
          i && U0(n, i) ? W0(p, c) : (n.flags = n.flags & -4097 | 2, ze = !1, Mt = n);
        }
      } else {
        if (Oc(n)) throw Error(r(418));
        n.flags = n.flags & -4097 | 2, ze = !1, Mt = n;
      }
    }
  }
  function G0(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Mt = n;
  }
  function Ta(n) {
    if (n !== Mt) return !1;
    if (!ze) return G0(n), ze = !0, !1;
    var i;
    if ((i = n.tag !== 3) && !(i = n.tag !== 5) && (i = n.type, i = i !== "head" && i !== "body" && !kc(n.type, n.memoizedProps)), i && (i = Ot)) {
      if (Oc(n)) throw Y0(), Error(r(418));
      for (; i; ) W0(n, i), i = ur(i.nextSibling);
    }
    if (G0(n), n.tag === 13) {
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
  function Y0() {
    for (var n = Ot; n; ) n = ur(n.nextSibling);
  }
  function Oo() {
    Ot = Mt = null, ze = !1;
  }
  function jc(n) {
    rn === null ? rn = [n] : rn.push(n);
  }
  var mI = k.ReactCurrentBatchConfig;
  function Ki(n, i, c) {
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
  function Aa(n, i) {
    throw n = Object.prototype.toString.call(i), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : n));
  }
  function K0(n) {
    var i = n._init;
    return i(n._payload);
  }
  function X0(n) {
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
      return J === null || J.tag !== 6 ? (J = Nf(re, ne.mode, he), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function U(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && K0(Ce) === J.type) ? (he = v(J, re.props), he.ref = Ki(ne, J, re), he.return = ne, he) : (he = tl(re.type, re.key, re.props, null, ne.mode, he), he.ref = Ki(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = Pf(re, ne.mode, he), J.return = ne, J) : (J = v(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = Qr(re, ne.mode, he, Ce), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = Nf("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case N:
            return re = tl(J.type, J.key, J.props, null, ne.mode, re), re.ref = Ki(ne, null, J), re.return = ne, re;
          case T:
            return J = Pf(J, ne.mode, re), J.return = ne, J;
          case $:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Ft(J) || q(J)) return J = Qr(J, ne.mode, re, null), J.return = ne, J;
        Aa(ne, J);
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
        if (Ft(re) || q(re)) return Ce !== null ? null : ue(ne, J, re, he, null);
        Aa(ne, re);
      }
      return null;
    }
    function ge(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, z(J, ne, "" + he, Ce);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case N:
            return ne = ne.get(he.key === null ? re : he.key) || null, U(J, ne, he, Ce);
          case T:
            return ne = ne.get(he.key === null ? re : he.key) || null, oe(J, ne, he, Ce);
          case $:
            var ke = he._init;
            return ge(ne, J, re, ke(he._payload), Ce);
        }
        if (Ft(he) || q(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Aa(J, he);
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
      if (Pe === re.length) return c(ne, Re), ze && Vr(ne, Pe), Ce;
      if (Re === null) {
        for (; Pe < re.length; Pe++) Re = fe(ne, re[Pe], he), Re !== null && (J = b(Re, J, Pe), ke === null ? Ce = Re : ke.sibling = Re, ke = Re);
        return ze && Vr(ne, Pe), Ce;
      }
      for (Re = p(ne, Re); Pe < re.length; Pe++) ct = ge(Re, ne, Pe, re[Pe], he), ct !== null && (n && ct.alternate !== null && Re.delete(ct.key === null ? Pe : ct.key), J = b(ct, J, Pe), ke === null ? Ce = ct : ke.sibling = ct, ke = ct);
      return n && Re.forEach(function(_r) {
        return i(ne, _r);
      }), ze && Vr(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = q(re);
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
      ), ze && Vr(ne, Pe), Ce;
      if (Re === null) {
        for (; !Oe.done; Pe++, Oe = re.next()) Oe = fe(ne, Oe.value, he), Oe !== null && (J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
        return ze && Vr(ne, Pe), Ce;
      }
      for (Re = p(ne, Re); !Oe.done; Pe++, Oe = re.next()) Oe = ge(Re, ne, Pe, Oe.value, he), Oe !== null && (n && Oe.alternate !== null && Re.delete(Oe.key === null ? Pe : Oe.key), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
      return n && Re.forEach(function(KI) {
        return i(ne, KI);
      }), ze && Vr(ne, Pe), Ce;
    }
    function Ze(ne, J, re, he) {
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
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && K0(Ce) === ke.type) {
                    c(ne, ke.sibling), J = v(ke, re.props), J.ref = Ki(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else i(ne, ke);
                ke = ke.sibling;
              }
              re.type === A ? (J = Qr(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = tl(re.type, re.key, re.props, null, ne.mode, he), he.ref = Ki(ne, J, re), he.return = ne, ne = he);
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
              J = Pf(re, ne.mode, he), J.return = ne, ne = J;
            }
            return P(ne);
          case $:
            return ke = re._init, Ze(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return we(ne, J, re, he);
        if (q(re)) return Se(ne, J, re, he);
        Aa(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = v(J, re), J.return = ne, ne = J) : (c(ne, J), J = Nf(re, ne.mode, he), J.return = ne, ne = J), P(ne)) : c(ne, J);
    }
    return Ze;
  }
  var Lo = X0(!0), Q0 = X0(!1), Ia = cr(null), Ma = null, jo = null, Dc = null;
  function qc() {
    Dc = jo = Ma = null;
  }
  function zc(n) {
    var i = Ia.current;
    qe(Ia), n._currentValue = i;
  }
  function Fc(n, i, c) {
    for (; n !== null; ) {
      var p = n.alternate;
      if ((n.childLanes & i) !== i ? (n.childLanes |= i, p !== null && (p.childLanes |= i)) : p !== null && (p.childLanes & i) !== i && (p.childLanes |= i), n === c) break;
      n = n.return;
    }
  }
  function Do(n, i) {
    Ma = n, Dc = jo = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & i) !== 0 && (Et = !0), n.firstContext = null);
  }
  function Yt(n) {
    var i = n._currentValue;
    if (Dc !== n) if (n = { context: n, memoizedValue: i, next: null }, jo === null) {
      if (Ma === null) throw Error(r(308));
      jo = n, Ma.dependencies = { lanes: 0, firstContext: n };
    } else jo = jo.next = n;
    return i;
  }
  var Hr = null;
  function $c(n) {
    Hr === null ? Hr = [n] : Hr.push(n);
  }
  function Z0(n, i, c, p) {
    var v = i.interleaved;
    return v === null ? (c.next = c, $c(i)) : (c.next = v.next, v.next = c), i.interleaved = c, $n(n, p);
  }
  function $n(n, i) {
    n.lanes |= i;
    var c = n.alternate;
    for (c !== null && (c.lanes |= i), c = n, n = n.return; n !== null; ) n.childLanes |= i, c = n.alternate, c !== null && (c.childLanes |= i), c = n, n = n.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var hr = !1;
  function Bc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function J0(n, i) {
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
    return v = p.interleaved, v === null ? (i.next = i, $c(p)) : (i.next = v.next, v.next = i), p.interleaved = i, $n(n, c);
  }
  function Oa(n, i, c) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (c & 4194240) !== 0)) {
      var p = i.lanes;
      p &= n.pendingLanes, c |= p, i.lanes = c, nc(n, c);
    }
  }
  function ew(n, i) {
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
  function La(n, i, c, p) {
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
        var le = z.lane, ge = z.eventTime;
        if ((p & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: ge,
            lane: 0,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          });
          e: {
            var we = n, Se = z;
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
          z.callback !== null && z.lane !== 0 && (n.flags |= 64, le = v.effects, le === null ? v.effects = [z] : le.push(z));
        } else ge = { eventTime: ge, lane: le, tag: z.tag, payload: z.payload, callback: z.callback, next: null }, ue === null ? (oe = ue = ge, U = fe) : ue = ue.next = ge, P |= le;
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
      Gr |= P, n.lanes = P, n.memoizedState = fe;
    }
  }
  function tw(n, i, c) {
    if (n = i.effects, i.effects = null, n !== null) for (i = 0; i < n.length; i++) {
      var p = n[i], v = p.callback;
      if (v !== null) {
        if (p.callback = null, p = c, typeof v != "function") throw Error(r(191, v));
        v.call(p);
      }
    }
  }
  var Xi = {}, Sn = cr(Xi), Qi = cr(Xi), Zi = cr(Xi);
  function Wr(n) {
    if (n === Xi) throw Error(r(174));
    return n;
  }
  function Vc(n, i) {
    switch (je(Zi, i), je(Qi, n), je(Sn, Xi), n = i.nodeType, n) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Bt(null, "");
        break;
      default:
        n = n === 8 ? i.parentNode : i, i = n.namespaceURI || null, n = n.tagName, i = Bt(i, n);
    }
    qe(Sn), je(Sn, i);
  }
  function qo() {
    qe(Sn), qe(Qi), qe(Zi);
  }
  function nw(n) {
    Wr(Zi.current);
    var i = Wr(Sn.current), c = Bt(i, n.type);
    i !== c && (je(Qi, n), je(Sn, c));
  }
  function Hc(n) {
    Qi.current === n && (qe(Sn), qe(Qi));
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
  var Wc = [];
  function Uc() {
    for (var n = 0; n < Wc.length; n++) Wc[n]._workInProgressVersionPrimary = null;
    Wc.length = 0;
  }
  var Da = k.ReactCurrentDispatcher, Gc = k.ReactCurrentBatchConfig, Ur = 0, Ge = null, ot = null, lt = null, qa = !1, Ji = !1, es = 0, vI = 0;
  function gt() {
    throw Error(r(321));
  }
  function Yc(n, i) {
    if (i === null) return !1;
    for (var c = 0; c < i.length && c < n.length; c++) if (!nn(n[c], i[c])) return !1;
    return !0;
  }
  function Kc(n, i, c, p, v, b) {
    if (Ur = b, Ge = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, Da.current = n === null || n.memoizedState === null ? _I : bI, n = c(p, v), Ji) {
      b = 0;
      do {
        if (Ji = !1, es = 0, 25 <= b) throw Error(r(301));
        b += 1, lt = ot = null, i.updateQueue = null, Da.current = SI, n = c(p, v);
      } while (Ji);
    }
    if (Da.current = $a, i = ot !== null && ot.next !== null, Ur = 0, lt = ot = Ge = null, qa = !1, i) throw Error(r(300));
    return n;
  }
  function Xc() {
    var n = es !== 0;
    return es = 0, n;
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
  function ts(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function Qc(n) {
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
        if ((Ur & ue) === ue) U !== null && (U = U.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), p = oe.hasEagerState ? oe.eagerState : n(p, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          U === null ? (z = U = fe, P = p) : U = U.next = fe, Ge.lanes |= ue, Gr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== b);
      U === null ? P = p : U.next = z, nn(p, i.memoizedState) || (Et = !0), i.memoizedState = p, i.baseState = P, i.baseQueue = U, c.lastRenderedState = p;
    }
    if (n = c.interleaved, n !== null) {
      v = n;
      do
        b = v.lane, Ge.lanes |= b, Gr |= b, v = v.next;
      while (v !== n);
    } else v === null && (c.lanes = 0);
    return [i.memoizedState, c.dispatch];
  }
  function Zc(n) {
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
  function rw() {
  }
  function ow(n, i) {
    var c = Ge, p = Kt(), v = i(), b = !nn(p.memoizedState, v);
    if (b && (p.memoizedState = v, Et = !0), p = p.queue, Jc(aw.bind(null, c, p, n), [n]), p.getSnapshot !== i || b || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, ns(9, sw.bind(null, c, p, v, i), void 0, null), ut === null) throw Error(r(349));
      (Ur & 30) !== 0 || iw(c, i, v);
    }
    return v;
  }
  function iw(n, i, c) {
    n.flags |= 16384, n = { getSnapshot: i, value: c }, i = Ge.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ge.updateQueue = i, i.stores = [n]) : (c = i.stores, c === null ? i.stores = [n] : c.push(n));
  }
  function sw(n, i, c, p) {
    i.value = c, i.getSnapshot = p, lw(i) && uw(n);
  }
  function aw(n, i, c) {
    return c(function() {
      lw(i) && uw(n);
    });
  }
  function lw(n) {
    var i = n.getSnapshot;
    n = n.value;
    try {
      var c = i();
      return !nn(n, c);
    } catch {
      return !0;
    }
  }
  function uw(n) {
    var i = $n(n, 1);
    i !== null && ln(i, n, 1, -1);
  }
  function cw(n) {
    var i = En();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ts, lastRenderedState: n }, i.queue = n, n = n.dispatch = xI.bind(null, Ge, n), [i.memoizedState, n];
  }
  function ns(n, i, c, p) {
    return n = { tag: n, create: i, destroy: c, deps: p, next: null }, i = Ge.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ge.updateQueue = i, i.lastEffect = n.next = n) : (c = i.lastEffect, c === null ? i.lastEffect = n.next = n : (p = c.next, c.next = n, n.next = p, i.lastEffect = n)), n;
  }
  function fw() {
    return Kt().memoizedState;
  }
  function za(n, i, c, p) {
    var v = En();
    Ge.flags |= n, v.memoizedState = ns(1 | i, c, void 0, p === void 0 ? null : p);
  }
  function Fa(n, i, c, p) {
    var v = Kt();
    p = p === void 0 ? null : p;
    var b = void 0;
    if (ot !== null) {
      var P = ot.memoizedState;
      if (b = P.destroy, p !== null && Yc(p, P.deps)) {
        v.memoizedState = ns(i, c, b, p);
        return;
      }
    }
    Ge.flags |= n, v.memoizedState = ns(1 | i, c, b, p);
  }
  function dw(n, i) {
    return za(8390656, 8, n, i);
  }
  function Jc(n, i) {
    return Fa(2048, 8, n, i);
  }
  function hw(n, i) {
    return Fa(4, 2, n, i);
  }
  function pw(n, i) {
    return Fa(4, 4, n, i);
  }
  function gw(n, i) {
    if (typeof i == "function") return n = n(), i(n), function() {
      i(null);
    };
    if (i != null) return n = n(), i.current = n, function() {
      i.current = null;
    };
  }
  function mw(n, i, c) {
    return c = c != null ? c.concat([n]) : null, Fa(4, 4, gw.bind(null, i, n), c);
  }
  function ef() {
  }
  function vw(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Yc(i, p[1]) ? p[0] : (c.memoizedState = [n, i], n);
  }
  function yw(n, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Yc(i, p[1]) ? p[0] : (n = n(), c.memoizedState = [n, i], n);
  }
  function ww(n, i, c) {
    return (Ur & 21) === 0 ? (n.baseState && (n.baseState = !1, Et = !0), n.memoizedState = c) : (nn(c, i) || (c = la(), Ge.lanes |= c, Gr |= c, n.baseState = !0), i);
  }
  function yI(n, i) {
    var c = Le;
    Le = c !== 0 && 4 > c ? c : 4, n(!0);
    var p = Gc.transition;
    Gc.transition = {};
    try {
      n(!1), i();
    } finally {
      Le = c, Gc.transition = p;
    }
  }
  function xw() {
    return Kt().memoizedState;
  }
  function wI(n, i, c) {
    var p = yr(n);
    if (c = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null }, _w(n)) bw(i, c);
    else if (c = Z0(n, i, c, p), c !== null) {
      var v = xt();
      ln(c, n, p, v), Sw(c, i, p);
    }
  }
  function xI(n, i, c) {
    var p = yr(n), v = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (_w(n)) bw(i, v);
    else {
      var b = n.alternate;
      if (n.lanes === 0 && (b === null || b.lanes === 0) && (b = i.lastRenderedReducer, b !== null)) try {
        var P = i.lastRenderedState, z = b(P, c);
        if (v.hasEagerState = !0, v.eagerState = z, nn(z, P)) {
          var U = i.interleaved;
          U === null ? (v.next = v, $c(i)) : (v.next = U.next, U.next = v), i.interleaved = v;
          return;
        }
      } catch {
      } finally {
      }
      c = Z0(n, i, v, p), c !== null && (v = xt(), ln(c, n, p, v), Sw(c, i, p));
    }
  }
  function _w(n) {
    var i = n.alternate;
    return n === Ge || i !== null && i === Ge;
  }
  function bw(n, i) {
    Ji = qa = !0;
    var c = n.pending;
    c === null ? i.next = i : (i.next = c.next, c.next = i), n.pending = i;
  }
  function Sw(n, i, c) {
    if ((c & 4194240) !== 0) {
      var p = i.lanes;
      p &= n.pendingLanes, c |= p, i.lanes = c, nc(n, c);
    }
  }
  var $a = { readContext: Yt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, _I = { readContext: Yt, useCallback: function(n, i) {
    return En().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: Yt, useEffect: dw, useImperativeHandle: function(n, i, c) {
    return c = c != null ? c.concat([n]) : null, za(
      4194308,
      4,
      gw.bind(null, i, n),
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
    var p = En();
    return i = c !== void 0 ? c(i) : i, p.memoizedState = p.baseState = i, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, p.queue = n, n = n.dispatch = wI.bind(null, Ge, n), [p.memoizedState, n];
  }, useRef: function(n) {
    var i = En();
    return n = { current: n }, i.memoizedState = n;
  }, useState: cw, useDebugValue: ef, useDeferredValue: function(n) {
    return En().memoizedState = n;
  }, useTransition: function() {
    var n = cw(!1), i = n[0];
    return n = yI.bind(null, n[1]), En().memoizedState = n, [i, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, i, c) {
    var p = Ge, v = En();
    if (ze) {
      if (c === void 0) throw Error(r(407));
      c = c();
    } else {
      if (c = i(), ut === null) throw Error(r(349));
      (Ur & 30) !== 0 || iw(p, i, c);
    }
    v.memoizedState = c;
    var b = { value: c, getSnapshot: i };
    return v.queue = b, dw(aw.bind(
      null,
      p,
      b,
      n
    ), [n]), p.flags |= 2048, ns(9, sw.bind(null, p, b, c, i), void 0, null), c;
  }, useId: function() {
    var n = En(), i = ut.identifierPrefix;
    if (ze) {
      var c = Fn, p = zn;
      c = (p & ~(1 << 32 - At(p) - 1)).toString(32) + c, i = ":" + i + "R" + c, c = es++, 0 < c && (i += "H" + c.toString(32)), i += ":";
    } else c = vI++, i = ":" + i + "r" + c.toString(32) + ":";
    return n.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, bI = {
    readContext: Yt,
    useCallback: vw,
    useContext: Yt,
    useEffect: Jc,
    useImperativeHandle: mw,
    useInsertionEffect: hw,
    useLayoutEffect: pw,
    useMemo: yw,
    useReducer: Qc,
    useRef: fw,
    useState: function() {
      return Qc(ts);
    },
    useDebugValue: ef,
    useDeferredValue: function(n) {
      var i = Kt();
      return ww(i, ot.memoizedState, n);
    },
    useTransition: function() {
      var n = Qc(ts)[0], i = Kt().memoizedState;
      return [n, i];
    },
    useMutableSource: rw,
    useSyncExternalStore: ow,
    useId: xw,
    unstable_isNewReconciler: !1
  }, SI = { readContext: Yt, useCallback: vw, useContext: Yt, useEffect: Jc, useImperativeHandle: mw, useInsertionEffect: hw, useLayoutEffect: pw, useMemo: yw, useReducer: Zc, useRef: fw, useState: function() {
    return Zc(ts);
  }, useDebugValue: ef, useDeferredValue: function(n) {
    var i = Kt();
    return ot === null ? i.memoizedState = n : ww(i, ot.memoizedState, n);
  }, useTransition: function() {
    var n = Zc(ts)[0], i = Kt().memoizedState;
    return [n, i];
  }, useMutableSource: rw, useSyncExternalStore: ow, useId: xw, unstable_isNewReconciler: !1 };
  function on(n, i) {
    if (n && n.defaultProps) {
      i = Q({}, i), n = n.defaultProps;
      for (var c in n) i[c] === void 0 && (i[c] = n[c]);
      return i;
    }
    return i;
  }
  function tf(n, i, c, p) {
    i = n.memoizedState, c = c(p, i), c = c == null ? i : Q({}, i, c), n.memoizedState = c, n.lanes === 0 && (n.updateQueue.baseState = c);
  }
  var Ba = { isMounted: function(n) {
    return (n = n._reactInternals) ? xn(n) === n : !1;
  }, enqueueSetState: function(n, i, c) {
    n = n._reactInternals;
    var p = xt(), v = yr(n), b = Bn(p, v);
    b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, p), Oa(i, n, v));
  }, enqueueReplaceState: function(n, i, c) {
    n = n._reactInternals;
    var p = xt(), v = yr(n), b = Bn(p, v);
    b.tag = 1, b.payload = i, c != null && (b.callback = c), i = pr(n, b, v), i !== null && (ln(i, n, v, p), Oa(i, n, v));
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var c = xt(), p = yr(n), v = Bn(c, p);
    v.tag = 2, i != null && (v.callback = i), i = pr(n, v, p), i !== null && (ln(i, n, p, c), Oa(i, n, p));
  } };
  function Ew(n, i, c, p, v, b, P) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(p, b, P) : i.prototype && i.prototype.isPureReactComponent ? !Bi(c, p) || !Bi(v, b) : !0;
  }
  function Cw(n, i, c) {
    var p = !1, v = fr, b = i.contextType;
    return typeof b == "object" && b !== null ? b = Yt(b) : (v = St(i) ? $r : pt.current, p = i.contextTypes, b = (p = p != null) ? Ao(n, v) : fr), i = new i(c, b), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ba, n.stateNode = i, i._reactInternals = n, p && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = b), i;
  }
  function kw(n, i, c, p) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(c, p), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(c, p), i.state !== n && Ba.enqueueReplaceState(i, i.state, null);
  }
  function nf(n, i, c, p) {
    var v = n.stateNode;
    v.props = c, v.state = n.memoizedState, v.refs = {}, Bc(n);
    var b = i.contextType;
    typeof b == "object" && b !== null ? v.context = Yt(b) : (b = St(i) ? $r : pt.current, v.context = Ao(n, b)), v.state = n.memoizedState, b = i.getDerivedStateFromProps, typeof b == "function" && (tf(n, i, b, c), v.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (i = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), i !== v.state && Ba.enqueueReplaceState(v, v.state, null), La(n, c, v, p), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function zo(n, i) {
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
  function rf(n, i, c) {
    return { value: n, source: null, stack: c ?? null, digest: i ?? null };
  }
  function of(n, i) {
    try {
      console.error(i.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var EI = typeof WeakMap == "function" ? WeakMap : Map;
  function Rw(n, i, c) {
    c = Bn(-1, c), c.tag = 3, c.payload = { element: null };
    var p = i.value;
    return c.callback = function() {
      Ka || (Ka = !0, xf = p), of(n, i);
    }, c;
  }
  function Nw(n, i, c) {
    c = Bn(-1, c), c.tag = 3;
    var p = n.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var v = i.value;
      c.payload = function() {
        return p(v);
      }, c.callback = function() {
        of(n, i);
      };
    }
    var b = n.stateNode;
    return b !== null && typeof b.componentDidCatch == "function" && (c.callback = function() {
      of(n, i), typeof p != "function" && (mr === null ? mr = /* @__PURE__ */ new Set([this]) : mr.add(this));
      var P = i.stack;
      this.componentDidCatch(i.value, { componentStack: P !== null ? P : "" });
    }), c;
  }
  function Pw(n, i, c) {
    var p = n.pingCache;
    if (p === null) {
      p = n.pingCache = new EI();
      var v = /* @__PURE__ */ new Set();
      p.set(i, v);
    } else v = p.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), p.set(i, v));
    v.has(c) || (v.add(c), n = qI.bind(null, n, i, c), i.then(n, n));
  }
  function Tw(n) {
    do {
      var i;
      if ((i = n.tag === 13) && (i = n.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Aw(n, i, c, p, v) {
    return (n.mode & 1) === 0 ? (n === i ? n.flags |= 65536 : (n.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (i = Bn(-1, 1), i.tag = 2, pr(c, i, 1))), c.lanes |= 1), n) : (n.flags |= 65536, n.lanes = v, n);
  }
  var CI = k.ReactCurrentOwner, Et = !1;
  function wt(n, i, c, p) {
    i.child = n === null ? Q0(i, null, c, p) : Lo(i, n.child, c, p);
  }
  function Iw(n, i, c, p, v) {
    c = c.render;
    var b = i.ref;
    return Do(i, v), p = Kc(n, i, c, p, b, v), c = Xc(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Vn(n, i, v)) : (ze && c && Ic(i), i.flags |= 1, wt(n, i, p, v), i.child);
  }
  function Mw(n, i, c, p, v) {
    if (n === null) {
      var b = c.type;
      return typeof b == "function" && !Rf(b) && b.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (i.tag = 15, i.type = b, Ow(n, i, b, p, v)) : (n = tl(c.type, null, p, i, i.mode, v), n.ref = i.ref, n.return = i, i.child = n);
    }
    if (b = n.child, (n.lanes & v) === 0) {
      var P = b.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Bi, c(P, p) && n.ref === i.ref) return Vn(n, i, v);
    }
    return i.flags |= 1, n = xr(b, p), n.ref = i.ref, n.return = i, i.child = n;
  }
  function Ow(n, i, c, p, v) {
    if (n !== null) {
      var b = n.memoizedProps;
      if (Bi(b, p) && n.ref === i.ref) if (Et = !1, i.pendingProps = p = b, (n.lanes & v) !== 0) (n.flags & 131072) !== 0 && (Et = !0);
      else return i.lanes = n.lanes, Vn(n, i, v);
    }
    return sf(n, i, c, p, v);
  }
  function Lw(n, i, c) {
    var p = i.pendingProps, v = p.children, b = n !== null ? n.memoizedState : null;
    if (p.mode === "hidden") if ((i.mode & 1) === 0) i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, je($o, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return n = b !== null ? b.baseLanes | c : c, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, i.updateQueue = null, je($o, Lt), Lt |= n, null;
      i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, p = b !== null ? b.baseLanes : c, je($o, Lt), Lt |= p;
    }
    else b !== null ? (p = b.baseLanes | c, i.memoizedState = null) : p = c, je($o, Lt), Lt |= p;
    return wt(n, i, v, c), i.child;
  }
  function jw(n, i) {
    var c = i.ref;
    (n === null && c !== null || n !== null && n.ref !== c) && (i.flags |= 512, i.flags |= 2097152);
  }
  function sf(n, i, c, p, v) {
    var b = St(c) ? $r : pt.current;
    return b = Ao(i, b), Do(i, v), c = Kc(n, i, c, p, b, v), p = Xc(), n !== null && !Et ? (i.updateQueue = n.updateQueue, i.flags &= -2053, n.lanes &= ~v, Vn(n, i, v)) : (ze && p && Ic(i), i.flags |= 1, wt(n, i, c, v), i.child);
  }
  function Dw(n, i, c, p, v) {
    if (St(c)) {
      var b = !0;
      ka(i);
    } else b = !1;
    if (Do(i, v), i.stateNode === null) Ha(n, i), Cw(i, c, p), nf(i, c, p, v), p = !0;
    else if (n === null) {
      var P = i.stateNode, z = i.memoizedProps;
      P.props = z;
      var U = P.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Yt(oe) : (oe = St(c) ? $r : pt.current, oe = Ao(i, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      fe || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (z !== p || U !== oe) && kw(i, P, p, oe), hr = !1;
      var le = i.memoizedState;
      P.state = le, La(i, p, P, v), U = i.memoizedState, z !== p || le !== U || bt.current || hr ? (typeof ue == "function" && (tf(i, c, ue, p), U = i.memoizedState), (z = hr || Ew(i, c, z, p, le, U, oe)) ? (fe || typeof P.UNSAFE_componentWillMount != "function" && typeof P.componentWillMount != "function" || (typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount()), typeof P.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = p, i.memoizedState = U), P.props = p, P.state = U, P.context = oe, p = z) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), p = !1);
    } else {
      P = i.stateNode, J0(n, i), z = i.memoizedProps, oe = i.type === i.elementType ? z : on(i.type, z), P.props = oe, fe = i.pendingProps, le = P.context, U = c.contextType, typeof U == "object" && U !== null ? U = Yt(U) : (U = St(c) ? $r : pt.current, U = Ao(i, U));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof P.getSnapshotBeforeUpdate == "function") || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (z !== fe || le !== U) && kw(i, P, p, U), hr = !1, le = i.memoizedState, P.state = le, La(i, p, P, v);
      var we = i.memoizedState;
      z !== fe || le !== we || bt.current || hr ? (typeof ge == "function" && (tf(i, c, ge, p), we = i.memoizedState), (oe = hr || Ew(i, c, oe, p, le, we, U) || !1) ? (ue || typeof P.UNSAFE_componentWillUpdate != "function" && typeof P.componentWillUpdate != "function" || (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(p, we, U), typeof P.UNSAFE_componentWillUpdate == "function" && P.UNSAFE_componentWillUpdate(p, we, U)), typeof P.componentDidUpdate == "function" && (i.flags |= 4), typeof P.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof P.componentDidUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), i.memoizedProps = p, i.memoizedState = we), P.props = p, P.state = we, P.context = U, p = oe) : (typeof P.componentDidUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && le === n.memoizedState || (i.flags |= 1024), p = !1);
    }
    return af(n, i, c, p, b, v);
  }
  function af(n, i, c, p, v, b) {
    jw(n, i);
    var P = (i.flags & 128) !== 0;
    if (!p && !P) return v && B0(i, c, !1), Vn(n, i, b);
    p = i.stateNode, CI.current = i;
    var z = P && typeof c.getDerivedStateFromError != "function" ? null : p.render();
    return i.flags |= 1, n !== null && P ? (i.child = Lo(i, n.child, null, b), i.child = Lo(i, null, z, b)) : wt(n, i, z, b), i.memoizedState = p.state, v && B0(i, c, !0), i.child;
  }
  function qw(n) {
    var i = n.stateNode;
    i.pendingContext ? F0(n, i.pendingContext, i.pendingContext !== i.context) : i.context && F0(n, i.context, !1), Vc(n, i.containerInfo);
  }
  function zw(n, i, c, p, v) {
    return Oo(), jc(v), i.flags |= 256, wt(n, i, c, p), i.child;
  }
  var lf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function uf(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Fw(n, i, c) {
    var p = i.pendingProps, v = Ue.current, b = !1, P = (i.flags & 128) !== 0, z;
    if ((z = P) || (z = n !== null && n.memoizedState === null ? !1 : (v & 2) !== 0), z ? (b = !0, i.flags &= -129) : (n === null || n.memoizedState !== null) && (v |= 1), je(Ue, v & 1), n === null)
      return Lc(i), n = i.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((i.mode & 1) === 0 ? i.lanes = 1 : n.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824, null) : (P = p.children, n = p.fallback, b ? (p = i.mode, b = i.child, P = { mode: "hidden", children: P }, (p & 1) === 0 && b !== null ? (b.childLanes = 0, b.pendingProps = P) : b = nl(P, p, 0, null), n = Qr(n, p, c, null), b.return = i, n.return = i, b.sibling = n, i.child = b, i.child.memoizedState = uf(c), i.memoizedState = lf, n) : cf(i, P));
    if (v = n.memoizedState, v !== null && (z = v.dehydrated, z !== null)) return kI(n, i, P, p, z, v, c);
    if (b) {
      b = p.fallback, P = i.mode, v = n.child, z = v.sibling;
      var U = { mode: "hidden", children: p.children };
      return (P & 1) === 0 && i.child !== v ? (p = i.child, p.childLanes = 0, p.pendingProps = U, i.deletions = null) : (p = xr(v, U), p.subtreeFlags = v.subtreeFlags & 14680064), z !== null ? b = xr(z, b) : (b = Qr(b, P, c, null), b.flags |= 2), b.return = i, p.return = i, p.sibling = b, i.child = p, p = b, b = i.child, P = n.child.memoizedState, P = P === null ? uf(c) : { baseLanes: P.baseLanes | c, cachePool: null, transitions: P.transitions }, b.memoizedState = P, b.childLanes = n.childLanes & ~c, i.memoizedState = lf, p;
    }
    return b = n.child, n = b.sibling, p = xr(b, { mode: "visible", children: p.children }), (i.mode & 1) === 0 && (p.lanes = c), p.return = i, p.sibling = null, n !== null && (c = i.deletions, c === null ? (i.deletions = [n], i.flags |= 16) : c.push(n)), i.child = p, i.memoizedState = null, p;
  }
  function cf(n, i) {
    return i = nl({ mode: "visible", children: i }, n.mode, 0, null), i.return = n, n.child = i;
  }
  function Va(n, i, c, p) {
    return p !== null && jc(p), Lo(i, n.child, null, c), n = cf(i, i.pendingProps.children), n.flags |= 2, i.memoizedState = null, n;
  }
  function kI(n, i, c, p, v, b, P) {
    if (c)
      return i.flags & 256 ? (i.flags &= -257, p = rf(Error(r(422))), Va(n, i, P, p)) : i.memoizedState !== null ? (i.child = n.child, i.flags |= 128, null) : (b = p.fallback, v = i.mode, p = nl({ mode: "visible", children: p.children }, v, 0, null), b = Qr(b, v, P, null), b.flags |= 2, p.return = i, b.return = i, p.sibling = b, i.child = p, (i.mode & 1) !== 0 && Lo(i, n.child, null, P), i.child.memoizedState = uf(P), i.memoizedState = lf, b);
    if ((i.mode & 1) === 0) return Va(n, i, P, null);
    if (v.data === "$!") {
      if (p = v.nextSibling && v.nextSibling.dataset, p) var z = p.dgst;
      return p = z, b = Error(r(419)), p = rf(b, p, void 0), Va(n, i, P, p);
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
        v = (v & (p.suspendedLanes | P)) !== 0 ? 0 : v, v !== 0 && v !== b.retryLane && (b.retryLane = v, $n(n, v), ln(p, n, v, -1));
      }
      return kf(), p = rf(Error(r(421))), Va(n, i, P, p);
    }
    return v.data === "$?" ? (i.flags |= 128, i.child = n.child, i = zI.bind(null, n), v._reactRetry = i, null) : (n = b.treeContext, Ot = ur(v.nextSibling), Mt = i, ze = !0, rn = null, n !== null && (Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Br, zn = n.id, Fn = n.overflow, Br = i), i = cf(i, p.children), i.flags |= 4096, i);
  }
  function $w(n, i, c) {
    n.lanes |= i;
    var p = n.alternate;
    p !== null && (p.lanes |= i), Fc(n.return, i, c);
  }
  function ff(n, i, c, p, v) {
    var b = n.memoizedState;
    b === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: p, tail: c, tailMode: v } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = p, b.tail = c, b.tailMode = v);
  }
  function Bw(n, i, c) {
    var p = i.pendingProps, v = p.revealOrder, b = p.tail;
    if (wt(n, i, p.children, c), p = Ue.current, (p & 2) !== 0) p = p & 1 | 2, i.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = i.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && $w(n, c, i);
        else if (n.tag === 19) $w(n, c, i);
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
    if (je(Ue, p), (i.mode & 1) === 0) i.memoizedState = null;
    else switch (v) {
      case "forwards":
        for (c = i.child, v = null; c !== null; ) n = c.alternate, n !== null && ja(n) === null && (v = c), c = c.sibling;
        c = v, c === null ? (v = i.child, i.child = null) : (v = c.sibling, c.sibling = null), ff(i, !1, v, c, b);
        break;
      case "backwards":
        for (c = null, v = i.child, i.child = null; v !== null; ) {
          if (n = v.alternate, n !== null && ja(n) === null) {
            i.child = v;
            break;
          }
          n = v.sibling, v.sibling = c, c = v, v = n;
        }
        ff(i, !0, c, null, b);
        break;
      case "together":
        ff(i, !1, null, null, void 0);
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
  function RI(n, i, c) {
    switch (i.tag) {
      case 3:
        qw(i), Oo();
        break;
      case 5:
        nw(i);
        break;
      case 1:
        St(i.type) && ka(i);
        break;
      case 4:
        Vc(i, i.stateNode.containerInfo);
        break;
      case 10:
        var p = i.type._context, v = i.memoizedProps.value;
        je(Ia, p._currentValue), p._currentValue = v;
        break;
      case 13:
        if (p = i.memoizedState, p !== null)
          return p.dehydrated !== null ? (je(Ue, Ue.current & 1), i.flags |= 128, null) : (c & i.child.childLanes) !== 0 ? Fw(n, i, c) : (je(Ue, Ue.current & 1), n = Vn(n, i, c), n !== null ? n.sibling : null);
        je(Ue, Ue.current & 1);
        break;
      case 19:
        if (p = (c & i.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (p) return Bw(n, i, c);
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), je(Ue, Ue.current), p) break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, Lw(n, i, c);
    }
    return Vn(n, i, c);
  }
  var Vw, df, Hw, Ww;
  Vw = function(n, i) {
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
  }, df = function() {
  }, Hw = function(n, i, c, p) {
    var v = n.memoizedProps;
    if (v !== p) {
      n = i.stateNode, Wr(Sn.current);
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
          typeof v.onClick != "function" && typeof p.onClick == "function" && (n.onclick = Sa);
      }
      xi(c, p);
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
  }, Ww = function(n, i, c, p) {
    c !== p && (i.flags |= 4);
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
        for (var p = null; c !== null; ) c.alternate !== null && (p = c), c = c.sibling;
        p === null ? i || n.tail === null ? n.tail = null : n.tail.sibling = null : p.sibling = null;
    }
  }
  function mt(n) {
    var i = n.alternate !== null && n.alternate.child === n.child, c = 0, p = 0;
    if (i) for (var v = n.child; v !== null; ) c |= v.lanes | v.childLanes, p |= v.subtreeFlags & 14680064, p |= v.flags & 14680064, v.return = n, v = v.sibling;
    else for (v = n.child; v !== null; ) c |= v.lanes | v.childLanes, p |= v.subtreeFlags, p |= v.flags, v.return = n, v = v.sibling;
    return n.subtreeFlags |= p, n.childLanes = c, i;
  }
  function NI(n, i, c) {
    var p = i.pendingProps;
    switch (Mc(i), i.tag) {
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
        return mt(i), null;
      case 1:
        return St(i.type) && Ca(), mt(i), null;
      case 3:
        return p = i.stateNode, qo(), qe(bt), qe(pt), Uc(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), (n === null || n.child === null) && (Ta(i) ? i.flags |= 4 : n === null || n.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, rn !== null && (Sf(rn), rn = null))), df(n, i), mt(i), null;
      case 5:
        Hc(i);
        var v = Wr(Zi.current);
        if (c = i.type, n !== null && i.stateNode != null) Hw(n, i, c, p, v), n.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!p) {
            if (i.stateNode === null) throw Error(r(166));
            return mt(i), null;
          }
          if (n = Wr(Sn.current), Ta(i)) {
            p = i.stateNode, c = i.type;
            var b = i.memoizedProps;
            switch (p[bn] = i, p[Gi] = b, n = (i.mode & 1) !== 0, c) {
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
                for (v = 0; v < Hi.length; v++) De(Hi[v], p);
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
                ve(p, b), De("invalid", p);
                break;
              case "select":
                p._wrapperState = { wasMultiple: !!b.multiple }, De("invalid", p);
                break;
              case "textarea":
                He(p, b), De("invalid", p);
            }
            xi(c, b), v = null;
            for (var P in b) if (b.hasOwnProperty(P)) {
              var z = b[P];
              P === "children" ? typeof z == "string" ? p.textContent !== z && (b.suppressHydrationWarning !== !0 && ba(p.textContent, z, n), v = ["children", z]) : typeof z == "number" && p.textContent !== "" + z && (b.suppressHydrationWarning !== !0 && ba(
                p.textContent,
                z,
                n
              ), v = ["children", "" + z]) : s.hasOwnProperty(P) && z != null && P === "onScroll" && De("scroll", p);
            }
            switch (c) {
              case "input":
                ce(p), Qe(p, b, !0);
                break;
              case "textarea":
                ce(p), $t(p);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof b.onClick == "function" && (p.onclick = Sa);
            }
            p = v, i.updateQueue = p, p !== null && (i.flags |= 4);
          } else {
            P = v.nodeType === 9 ? v : v.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = tn(c)), n === "http://www.w3.org/1999/xhtml" ? c === "script" ? (n = P.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof p.is == "string" ? n = P.createElement(c, { is: p.is }) : (n = P.createElement(c), c === "select" && (P = n, p.multiple ? P.multiple = !0 : p.size && (P.size = p.size))) : n = P.createElementNS(n, c), n[bn] = i, n[Gi] = p, Vw(n, i, !1, !1), i.stateNode = n;
            e: {
              switch (P = _i(c, p), c) {
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
                  for (v = 0; v < Hi.length; v++) De(Hi[v], n);
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
                  ve(n, p), v = be(n, p), De("invalid", n);
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
              xi(c, v), z = v;
              for (b in z) if (z.hasOwnProperty(b)) {
                var U = z[b];
                b === "style" ? Ht(n, U) : b === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Or(n, U)) : b === "children" ? typeof U == "string" ? (c !== "textarea" || U !== "") && Vt(n, U) : typeof U == "number" && Vt(n, "" + U) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (s.hasOwnProperty(b) ? U != null && b === "onScroll" && De("scroll", n) : U != null && _(n, b, U, P));
              }
              switch (c) {
                case "input":
                  ce(n), Qe(n, p, !1);
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
                  typeof v.onClick == "function" && (n.onclick = Sa);
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
        return mt(i), null;
      case 6:
        if (n && i.stateNode != null) Ww(n, i, n.memoizedProps, p);
        else {
          if (typeof p != "string" && i.stateNode === null) throw Error(r(166));
          if (c = Wr(Zi.current), Wr(Sn.current), Ta(i)) {
            if (p = i.stateNode, c = i.memoizedProps, p[bn] = i, (b = p.nodeValue !== c) && (n = Mt, n !== null)) switch (n.tag) {
              case 3:
                ba(p.nodeValue, c, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && ba(p.nodeValue, c, (n.mode & 1) !== 0);
            }
            b && (i.flags |= 4);
          } else p = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(p), p[bn] = i, i.stateNode = p;
        }
        return mt(i), null;
      case 13:
        if (qe(Ue), p = i.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ze && Ot !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0) Y0(), Oo(), i.flags |= 98560, b = !1;
          else if (b = Ta(i), p !== null && p.dehydrated !== null) {
            if (n === null) {
              if (!b) throw Error(r(318));
              if (b = i.memoizedState, b = b !== null ? b.dehydrated : null, !b) throw Error(r(317));
              b[bn] = i;
            } else Oo(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            mt(i), b = !1;
          } else rn !== null && (Sf(rn), rn = null), b = !0;
          if (!b) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0 ? (i.lanes = c, i) : (p = p !== null, p !== (n !== null && n.memoizedState !== null) && p && (i.child.flags |= 8192, (i.mode & 1) !== 0 && (n === null || (Ue.current & 1) !== 0 ? it === 0 && (it = 3) : kf())), i.updateQueue !== null && (i.flags |= 4), mt(i), null);
      case 4:
        return qo(), df(n, i), n === null && Wi(i.stateNode.containerInfo), mt(i), null;
      case 10:
        return zc(i.type._context), mt(i), null;
      case 17:
        return St(i.type) && Ca(), mt(i), null;
      case 19:
        if (qe(Ue), b = i.memoizedState, b === null) return mt(i), null;
        if (p = (i.flags & 128) !== 0, P = b.rendering, P === null) if (p) rs(b, !1);
        else {
          if (it !== 0 || n !== null && (n.flags & 128) !== 0) for (n = i.child; n !== null; ) {
            if (P = ja(n), P !== null) {
              for (i.flags |= 128, rs(b, !1), p = P.updateQueue, p !== null && (i.updateQueue = p, i.flags |= 4), i.subtreeFlags = 0, p = c, c = i.child; c !== null; ) b = c, n = p, b.flags &= 14680066, P = b.alternate, P === null ? (b.childLanes = 0, b.lanes = n, b.child = null, b.subtreeFlags = 0, b.memoizedProps = null, b.memoizedState = null, b.updateQueue = null, b.dependencies = null, b.stateNode = null) : (b.childLanes = P.childLanes, b.lanes = P.lanes, b.child = P.child, b.subtreeFlags = 0, b.deletions = null, b.memoizedProps = P.memoizedProps, b.memoizedState = P.memoizedState, b.updateQueue = P.updateQueue, b.type = P.type, n = P.dependencies, b.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), c = c.sibling;
              return je(Ue, Ue.current & 1 | 2), i.child;
            }
            n = n.sibling;
          }
          b.tail !== null && We() > Bo && (i.flags |= 128, p = !0, rs(b, !1), i.lanes = 4194304);
        }
        else {
          if (!p) if (n = ja(P), n !== null) {
            if (i.flags |= 128, p = !0, c = n.updateQueue, c !== null && (i.updateQueue = c, i.flags |= 4), rs(b, !0), b.tail === null && b.tailMode === "hidden" && !P.alternate && !ze) return mt(i), null;
          } else 2 * We() - b.renderingStartTime > Bo && c !== 1073741824 && (i.flags |= 128, p = !0, rs(b, !1), i.lanes = 4194304);
          b.isBackwards ? (P.sibling = i.child, i.child = P) : (c = b.last, c !== null ? c.sibling = P : i.child = P, b.last = P);
        }
        return b.tail !== null ? (i = b.tail, b.rendering = i, b.tail = i.sibling, b.renderingStartTime = We(), i.sibling = null, c = Ue.current, je(Ue, p ? c & 1 | 2 : c & 1), i) : (mt(i), null);
      case 22:
      case 23:
        return Cf(), p = i.memoizedState !== null, n !== null && n.memoizedState !== null !== p && (i.flags |= 8192), p && (i.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (mt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : mt(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, i.tag));
  }
  function PI(n, i) {
    switch (Mc(i), i.tag) {
      case 1:
        return St(i.type) && Ca(), n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 3:
        return qo(), qe(bt), qe(pt), Uc(), n = i.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (i.flags = n & -65537 | 128, i) : null;
      case 5:
        return Hc(i), null;
      case 13:
        if (qe(Ue), n = i.memoizedState, n !== null && n.dehydrated !== null) {
          if (i.alternate === null) throw Error(r(340));
          Oo();
        }
        return n = i.flags, n & 65536 ? (i.flags = n & -65537 | 128, i) : null;
      case 19:
        return qe(Ue), null;
      case 4:
        return qo(), null;
      case 10:
        return zc(i.type._context), null;
      case 22:
      case 23:
        return Cf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wa = !1, vt = !1, TI = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function Fo(n, i) {
    var c = n.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (p) {
      Ke(n, i, p);
    }
    else c.current = null;
  }
  function hf(n, i, c) {
    try {
      c();
    } catch (p) {
      Ke(n, i, p);
    }
  }
  var Uw = !1;
  function AI(n, i) {
    if (Ec = fa, n = E0(), mc(n)) {
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
            for (var ge; fe !== c || v !== 0 && fe.nodeType !== 3 || (z = P + v), fe !== b || p !== 0 && fe.nodeType !== 3 || (U = P + p), fe.nodeType === 3 && (P += fe.nodeValue.length), (ge = fe.firstChild) !== null; )
              le = fe, fe = ge;
            for (; ; ) {
              if (fe === n) break t;
              if (le === c && ++oe === v && (z = P), le === b && ++ue === p && (U = P), (ge = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = ge;
          }
          c = z === -1 || U === -1 ? null : { start: z, end: U };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (Cc = { focusedElem: n, selectionRange: c }, fa = !1, ye = i; ye !== null; ) if (i = ye, n = i.child, (i.subtreeFlags & 1028) !== 0 && n !== null) n.return = i, ye = n;
    else for (; ye !== null; ) {
      i = ye;
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
        n.return = i.return, ye = n;
        break;
      }
      ye = i.return;
    }
    return we = Uw, Uw = !1, we;
  }
  function os(n, i, c) {
    var p = i.updateQueue;
    if (p = p !== null ? p.lastEffect : null, p !== null) {
      var v = p = p.next;
      do {
        if ((v.tag & n) === n) {
          var b = v.destroy;
          v.destroy = void 0, b !== void 0 && hf(i, c, b);
        }
        v = v.next;
      } while (v !== p);
    }
  }
  function Ua(n, i) {
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
  function pf(n) {
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
  function Gw(n) {
    var i = n.alternate;
    i !== null && (n.alternate = null, Gw(i)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (i = n.stateNode, i !== null && (delete i[bn], delete i[Gi], delete i[Pc], delete i[hI], delete i[pI])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Yw(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Kw(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Yw(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function gf(n, i, c) {
    var p = n.tag;
    if (p === 5 || p === 6) n = n.stateNode, i ? c.nodeType === 8 ? c.parentNode.insertBefore(n, i) : c.insertBefore(n, i) : (c.nodeType === 8 ? (i = c.parentNode, i.insertBefore(n, c)) : (i = c, i.appendChild(n)), c = c._reactRootContainer, c != null || i.onclick !== null || (i.onclick = Sa));
    else if (p !== 4 && (n = n.child, n !== null)) for (gf(n, i, c), n = n.sibling; n !== null; ) gf(n, i, c), n = n.sibling;
  }
  function mf(n, i, c) {
    var p = n.tag;
    if (p === 5 || p === 6) n = n.stateNode, i ? c.insertBefore(n, i) : c.appendChild(n);
    else if (p !== 4 && (n = n.child, n !== null)) for (mf(n, i, c), n = n.sibling; n !== null; ) mf(n, i, c), n = n.sibling;
  }
  var ft = null, sn = !1;
  function gr(n, i, c) {
    for (c = c.child; c !== null; ) Xw(n, i, c), c = c.sibling;
  }
  function Xw(n, i, c) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
      Wt.onCommitFiberUnmount(qr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        vt || Fo(c, i);
      case 6:
        var p = ft, v = sn;
        ft = null, gr(n, i, c), ft = p, sn = v, ft !== null && (sn ? (n = ft, c = c.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(c) : n.removeChild(c)) : ft.removeChild(c.stateNode));
        break;
      case 18:
        ft !== null && (sn ? (n = ft, c = c.stateNode, n.nodeType === 8 ? Nc(n.parentNode, c) : n.nodeType === 1 && Nc(n, c), ji(n)) : Nc(ft, c.stateNode));
        break;
      case 4:
        p = ft, v = sn, ft = c.stateNode.containerInfo, sn = !0, gr(n, i, c), ft = p, sn = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (p = c.updateQueue, p !== null && (p = p.lastEffect, p !== null))) {
          v = p = p.next;
          do {
            var b = v, P = b.destroy;
            b = b.tag, P !== void 0 && ((b & 2) !== 0 || (b & 4) !== 0) && hf(c, i, P), v = v.next;
          } while (v !== p);
        }
        gr(n, i, c);
        break;
      case 1:
        if (!vt && (Fo(c, i), p = c.stateNode, typeof p.componentWillUnmount == "function")) try {
          p.props = c.memoizedProps, p.state = c.memoizedState, p.componentWillUnmount();
        } catch (z) {
          Ke(c, i, z);
        }
        gr(n, i, c);
        break;
      case 21:
        gr(n, i, c);
        break;
      case 22:
        c.mode & 1 ? (vt = (p = vt) || c.memoizedState !== null, gr(n, i, c), vt = p) : gr(n, i, c);
        break;
      default:
        gr(n, i, c);
    }
  }
  function Qw(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var c = n.stateNode;
      c === null && (c = n.stateNode = new TI()), i.forEach(function(p) {
        var v = FI.bind(null, n, p);
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
        Xw(b, P, v), ft = null, sn = !1;
        var U = v.alternate;
        U !== null && (U.return = null), v.return = null;
      } catch (oe) {
        Ke(v, i, oe);
      }
    }
    if (i.subtreeFlags & 12854) for (i = i.child; i !== null; ) Zw(i, n), i = i.sibling;
  }
  function Zw(n, i) {
    var c = n.alternate, p = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(i, n), Cn(n), p & 4) {
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
        an(i, n), Cn(n), p & 512 && c !== null && Fo(c, c.return);
        break;
      case 5:
        if (an(i, n), Cn(n), p & 512 && c !== null && Fo(c, c.return), n.flags & 32) {
          var v = n.stateNode;
          try {
            Vt(v, "");
          } catch (Se) {
            Ke(n, n.return, Se);
          }
        }
        if (p & 4 && (v = n.stateNode, v != null)) {
          var b = n.memoizedProps, P = c !== null ? c.memoizedProps : b, z = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            z === "input" && b.type === "radio" && b.name != null && Ne(v, b), _i(z, P);
            var oe = _i(z, b);
            for (P = 0; P < U.length; P += 2) {
              var ue = U[P], fe = U[P + 1];
              ue === "style" ? Ht(v, fe) : ue === "dangerouslySetInnerHTML" ? Or(v, fe) : ue === "children" ? Vt(v, fe) : _(v, ue, fe, oe);
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
                var ge = b.value;
                ge != null ? ht(v, !!b.multiple, ge, !1) : le !== !!b.multiple && (b.defaultValue != null ? ht(
                  v,
                  !!b.multiple,
                  b.defaultValue,
                  !0
                ) : ht(v, !!b.multiple, b.multiple ? [] : "", !1));
            }
            v[Gi] = b;
          } catch (Se) {
            Ke(n, n.return, Se);
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
            Ke(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (an(i, n), Cn(n), p & 4 && c !== null && c.memoizedState.isDehydrated) try {
          ji(i.containerInfo);
        } catch (Se) {
          Ke(n, n.return, Se);
        }
        break;
      case 4:
        an(i, n), Cn(n);
        break;
      case 13:
        an(i, n), Cn(n), v = n.child, v.flags & 8192 && (b = v.memoizedState !== null, v.stateNode.isHidden = b, !b || v.alternate !== null && v.alternate.memoizedState !== null || (wf = We())), p & 4 && Qw(n);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, n.mode & 1 ? (vt = (oe = vt) || ue, an(i, n), vt = oe) : an(i, n), Cn(n), p & 8192) {
          if (oe = n.memoizedState !== null, (n.stateNode.isHidden = oe) && !ue && (n.mode & 1) !== 0) for (ye = n, ue = n.child; ue !== null; ) {
            for (fe = ye = ue; ye !== null; ) {
              switch (le = ye, ge = le.child, le.tag) {
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
                    p = le, c = le.return;
                    try {
                      i = p, we.props = i.memoizedProps, we.state = i.memoizedState, we.componentWillUnmount();
                    } catch (Se) {
                      Ke(p, c, Se);
                    }
                  }
                  break;
                case 5:
                  Fo(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    tx(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ye = ge) : tx(fe);
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
        an(i, n), Cn(n), p & 4 && Qw(n);
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
            if (Yw(c)) {
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
            var b = Kw(n);
            mf(n, b, v);
            break;
          case 3:
          case 4:
            var P = p.stateNode.containerInfo, z = Kw(n);
            gf(n, z, P);
            break;
          default:
            throw Error(r(161));
        }
      } catch (U) {
        Ke(n, n.return, U);
      }
      n.flags &= -3;
    }
    i & 4096 && (n.flags &= -4097);
  }
  function II(n, i, c) {
    ye = n, Jw(n);
  }
  function Jw(n, i, c) {
    for (var p = (n.mode & 1) !== 0; ye !== null; ) {
      var v = ye, b = v.child;
      if (v.tag === 22 && p) {
        var P = v.memoizedState !== null || Wa;
        if (!P) {
          var z = v.alternate, U = z !== null && z.memoizedState !== null || vt;
          z = Wa;
          var oe = vt;
          if (Wa = P, (vt = U) && !oe) for (ye = v; ye !== null; ) P = ye, U = P.child, P.tag === 22 && P.memoizedState !== null ? nx(v) : U !== null ? (U.return = P, ye = U) : nx(v);
          for (; b !== null; ) ye = b, Jw(b), b = b.sibling;
          ye = v, Wa = z, vt = oe;
        }
        ex(n);
      } else (v.subtreeFlags & 8772) !== 0 && b !== null ? (b.return = v, ye = b) : ex(n);
    }
  }
  function ex(n) {
    for (; ye !== null; ) {
      var i = ye;
      if ((i.flags & 8772) !== 0) {
        var c = i.alternate;
        try {
          if ((i.flags & 8772) !== 0) switch (i.tag) {
            case 0:
            case 11:
            case 15:
              vt || Ua(5, i);
              break;
            case 1:
              var p = i.stateNode;
              if (i.flags & 4 && !vt) if (c === null) p.componentDidMount();
              else {
                var v = i.elementType === i.type ? c.memoizedProps : on(i.type, c.memoizedProps);
                p.componentDidUpdate(v, c.memoizedState, p.__reactInternalSnapshotBeforeUpdate);
              }
              var b = i.updateQueue;
              b !== null && tw(i, b, p);
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
                tw(i, P, c);
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
          vt || i.flags & 512 && pf(i);
        } catch (le) {
          Ke(i, i.return, le);
        }
      }
      if (i === n) {
        ye = null;
        break;
      }
      if (c = i.sibling, c !== null) {
        c.return = i.return, ye = c;
        break;
      }
      ye = i.return;
    }
  }
  function tx(n) {
    for (; ye !== null; ) {
      var i = ye;
      if (i === n) {
        ye = null;
        break;
      }
      var c = i.sibling;
      if (c !== null) {
        c.return = i.return, ye = c;
        break;
      }
      ye = i.return;
    }
  }
  function nx(n) {
    for (; ye !== null; ) {
      var i = ye;
      try {
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            var c = i.return;
            try {
              Ua(4, i);
            } catch (U) {
              Ke(i, c, U);
            }
            break;
          case 1:
            var p = i.stateNode;
            if (typeof p.componentDidMount == "function") {
              var v = i.return;
              try {
                p.componentDidMount();
              } catch (U) {
                Ke(i, v, U);
              }
            }
            var b = i.return;
            try {
              pf(i);
            } catch (U) {
              Ke(i, b, U);
            }
            break;
          case 5:
            var P = i.return;
            try {
              pf(i);
            } catch (U) {
              Ke(i, P, U);
            }
        }
      } catch (U) {
        Ke(i, i.return, U);
      }
      if (i === n) {
        ye = null;
        break;
      }
      var z = i.sibling;
      if (z !== null) {
        z.return = i.return, ye = z;
        break;
      }
      ye = i.return;
    }
  }
  var MI = Math.ceil, Ga = k.ReactCurrentDispatcher, vf = k.ReactCurrentOwner, Xt = k.ReactCurrentBatchConfig, Me = 0, ut = null, Je = null, dt = 0, Lt = 0, $o = cr(0), it = 0, is = null, Gr = 0, Ya = 0, yf = 0, ss = null, Ct = null, wf = 0, Bo = 1 / 0, Hn = null, Ka = !1, xf = null, mr = null, Xa = !1, vr = null, Qa = 0, as = 0, _f = null, Za = -1, Ja = 0;
  function xt() {
    return (Me & 6) !== 0 ? We() : Za !== -1 ? Za : Za = We();
  }
  function yr(n) {
    return (n.mode & 1) === 0 ? 1 : (Me & 2) !== 0 && dt !== 0 ? dt & -dt : mI.transition !== null ? (Ja === 0 && (Ja = la()), Ja) : (n = Le, n !== 0 || (n = window.event, n = n === void 0 ? 16 : o0(n.type)), n);
  }
  function ln(n, i, c, p) {
    if (50 < as) throw as = 0, _f = null, Error(r(185));
    nr(n, c, p), ((Me & 2) === 0 || n !== ut) && (n === ut && ((Me & 2) === 0 && (Ya |= c), it === 4 && wr(n, dt)), kt(n, p), c === 1 && Me === 0 && (i.mode & 1) === 0 && (Bo = We() + 500, Ra && dr()));
  }
  function kt(n, i) {
    var c = n.callbackNode;
    tc(n, i);
    var p = _o(n, n === ut ? dt : 0);
    if (p === 0) c !== null && oa(c), n.callbackNode = null, n.callbackPriority = 0;
    else if (i = p & -p, n.callbackPriority !== i) {
      if (c != null && oa(c), i === 1) n.tag === 0 ? gI(ox.bind(null, n)) : V0(ox.bind(null, n)), fI(function() {
        (Me & 6) === 0 && dr();
      }), c = null;
      else {
        switch (Xy(p)) {
          case 1:
            c = Ti;
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
        c = dx(c, rx.bind(null, n));
      }
      n.callbackPriority = i, n.callbackNode = c;
    }
  }
  function rx(n, i) {
    if (Za = -1, Ja = 0, (Me & 6) !== 0) throw Error(r(327));
    var c = n.callbackNode;
    if (Vo() && n.callbackNode !== c) return null;
    var p = _o(n, n === ut ? dt : 0);
    if (p === 0) return null;
    if ((p & 30) !== 0 || (p & n.expiredLanes) !== 0 || i) i = el(n, p);
    else {
      i = p;
      var v = Me;
      Me |= 2;
      var b = sx();
      (ut !== n || dt !== i) && (Hn = null, Bo = We() + 500, Kr(n, i));
      do
        try {
          jI();
          break;
        } catch (z) {
          ix(n, z);
        }
      while (!0);
      qc(), Ga.current = b, Me = v, Je !== null ? i = 0 : (ut = null, dt = 0, i = it);
    }
    if (i !== 0) {
      if (i === 2 && (v = zr(n), v !== 0 && (p = v, i = bf(n, v))), i === 1) throw c = is, Kr(n, 0), wr(n, p), kt(n, We()), c;
      if (i === 6) wr(n, p);
      else {
        if (v = n.current.alternate, (p & 30) === 0 && !OI(v) && (i = el(n, p), i === 2 && (b = zr(n), b !== 0 && (p = b, i = bf(n, b))), i === 1)) throw c = is, Kr(n, 0), wr(n, p), kt(n, We()), c;
        switch (n.finishedWork = v, n.finishedLanes = p, i) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            Xr(n, Ct, Hn);
            break;
          case 3:
            if (wr(n, p), (p & 130023424) === p && (i = wf + 500 - We(), 10 < i)) {
              if (_o(n, 0) !== 0) break;
              if (v = n.suspendedLanes, (v & p) !== p) {
                xt(), n.pingedLanes |= n.suspendedLanes & v;
                break;
              }
              n.timeoutHandle = Rc(Xr.bind(null, n, Ct, Hn), i);
              break;
            }
            Xr(n, Ct, Hn);
            break;
          case 4:
            if (wr(n, p), (p & 4194240) === p) break;
            for (i = n.eventTimes, v = -1; 0 < p; ) {
              var P = 31 - At(p);
              b = 1 << P, P = i[P], P > v && (v = P), p &= ~b;
            }
            if (p = v, p = We() - p, p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3e3 > p ? 3e3 : 4320 > p ? 4320 : 1960 * MI(p / 1960)) - p, 10 < p) {
              n.timeoutHandle = Rc(Xr.bind(null, n, Ct, Hn), p);
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
    return kt(n, We()), n.callbackNode === c ? rx.bind(null, n) : null;
  }
  function bf(n, i) {
    var c = ss;
    return n.current.memoizedState.isDehydrated && (Kr(n, i).flags |= 256), n = el(n, i), n !== 2 && (i = Ct, Ct = c, i !== null && Sf(i)), n;
  }
  function Sf(n) {
    Ct === null ? Ct = n : Ct.push.apply(Ct, n);
  }
  function OI(n) {
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
    for (i &= ~yf, i &= ~Ya, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var c = 31 - At(i), p = 1 << c;
      n[c] = -1, i &= ~p;
    }
  }
  function ox(n) {
    if ((Me & 6) !== 0) throw Error(r(327));
    Vo();
    var i = _o(n, 0);
    if ((i & 1) === 0) return kt(n, We()), null;
    var c = el(n, i);
    if (n.tag !== 0 && c === 2) {
      var p = zr(n);
      p !== 0 && (i = p, c = bf(n, p));
    }
    if (c === 1) throw c = is, Kr(n, 0), wr(n, i), kt(n, We()), c;
    if (c === 6) throw Error(r(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, Xr(n, Ct, Hn), kt(n, We()), null;
  }
  function Ef(n, i) {
    var c = Me;
    Me |= 1;
    try {
      return n(i);
    } finally {
      Me = c, Me === 0 && (Bo = We() + 500, Ra && dr());
    }
  }
  function Yr(n) {
    vr !== null && vr.tag === 0 && (Me & 6) === 0 && Vo();
    var i = Me;
    Me |= 1;
    var c = Xt.transition, p = Le;
    try {
      if (Xt.transition = null, Le = 1, n) return n();
    } finally {
      Le = p, Xt.transition = c, Me = i, (Me & 6) === 0 && dr();
    }
  }
  function Cf() {
    Lt = $o.current, qe($o);
  }
  function Kr(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var c = n.timeoutHandle;
    if (c !== -1 && (n.timeoutHandle = -1, cI(c)), Je !== null) for (c = Je.return; c !== null; ) {
      var p = c;
      switch (Mc(p), p.tag) {
        case 1:
          p = p.type.childContextTypes, p != null && Ca();
          break;
        case 3:
          qo(), qe(bt), qe(pt), Uc();
          break;
        case 5:
          Hc(p);
          break;
        case 4:
          qo();
          break;
        case 13:
          qe(Ue);
          break;
        case 19:
          qe(Ue);
          break;
        case 10:
          zc(p.type._context);
          break;
        case 22:
        case 23:
          Cf();
      }
      c = c.return;
    }
    if (ut = n, Je = n = xr(n.current, null), dt = Lt = i, it = 0, is = null, yf = Ya = Gr = 0, Ct = ss = null, Hr !== null) {
      for (i = 0; i < Hr.length; i++) if (c = Hr[i], p = c.interleaved, p !== null) {
        c.interleaved = null;
        var v = p.next, b = c.pending;
        if (b !== null) {
          var P = b.next;
          b.next = v, p.next = P;
        }
        c.pending = p;
      }
      Hr = null;
    }
    return n;
  }
  function ix(n, i) {
    do {
      var c = Je;
      try {
        if (qc(), Da.current = $a, qa) {
          for (var p = Ge.memoizedState; p !== null; ) {
            var v = p.queue;
            v !== null && (v.pending = null), p = p.next;
          }
          qa = !1;
        }
        if (Ur = 0, lt = ot = Ge = null, Ji = !1, es = 0, vf.current = null, c === null || c.return === null) {
          it = 1, is = i, Je = null;
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
            var ge = Tw(P);
            if (ge !== null) {
              ge.flags &= -257, Aw(ge, P, z, b, i), ge.mode & 1 && Pw(b, oe, i), i = ge, U = oe;
              var we = i.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(U), i.updateQueue = Se;
              } else we.add(U);
              break e;
            } else {
              if ((i & 1) === 0) {
                Pw(b, oe, i), kf();
                break e;
              }
              U = Error(r(426));
            }
          } else if (ze && z.mode & 1) {
            var Ze = Tw(P);
            if (Ze !== null) {
              (Ze.flags & 65536) === 0 && (Ze.flags |= 256), Aw(Ze, P, z, b, i), jc(zo(U, z));
              break e;
            }
          }
          b = U = zo(U, z), it !== 4 && (it = 2), ss === null ? ss = [b] : ss.push(b), b = P;
          do {
            switch (b.tag) {
              case 3:
                b.flags |= 65536, i &= -i, b.lanes |= i;
                var ne = Rw(b, U, i);
                ew(b, ne);
                break e;
              case 1:
                z = U;
                var J = b.type, re = b.stateNode;
                if ((b.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (mr === null || !mr.has(re)))) {
                  b.flags |= 65536, i &= -i, b.lanes |= i;
                  var he = Nw(b, z, i);
                  ew(b, he);
                  break e;
                }
            }
            b = b.return;
          } while (b !== null);
        }
        lx(c);
      } catch (Ce) {
        i = Ce, Je === c && c !== null && (Je = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sx() {
    var n = Ga.current;
    return Ga.current = $a, n === null ? $a : n;
  }
  function kf() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Gr & 268435455) === 0 && (Ya & 268435455) === 0 || wr(ut, dt);
  }
  function el(n, i) {
    var c = Me;
    Me |= 2;
    var p = sx();
    (ut !== n || dt !== i) && (Hn = null, Kr(n, i));
    do
      try {
        LI();
        break;
      } catch (v) {
        ix(n, v);
      }
    while (!0);
    if (qc(), Me = c, Ga.current = p, Je !== null) throw Error(r(261));
    return ut = null, dt = 0, it;
  }
  function LI() {
    for (; Je !== null; ) ax(Je);
  }
  function jI() {
    for (; Je !== null && !Gu(); ) ax(Je);
  }
  function ax(n) {
    var i = fx(n.alternate, n, Lt);
    n.memoizedProps = n.pendingProps, i === null ? lx(n) : Je = i, vf.current = null;
  }
  function lx(n) {
    var i = n;
    do {
      var c = i.alternate;
      if (n = i.return, (i.flags & 32768) === 0) {
        if (c = NI(c, i, Lt), c !== null) {
          Je = c;
          return;
        }
      } else {
        if (c = PI(c, i), c !== null) {
          c.flags &= 32767, Je = c;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          it = 6, Je = null;
          return;
        }
      }
      if (i = i.sibling, i !== null) {
        Je = i;
        return;
      }
      Je = i = n;
    } while (i !== null);
    it === 0 && (it = 5);
  }
  function Xr(n, i, c) {
    var p = Le, v = Xt.transition;
    try {
      Xt.transition = null, Le = 1, DI(n, i, c, p);
    } finally {
      Xt.transition = v, Le = p;
    }
    return null;
  }
  function DI(n, i, c, p) {
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
    if (vA(n, b), n === ut && (Je = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || Xa || (Xa = !0, dx(yo, function() {
      return Vo(), null;
    })), b = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || b) {
      b = Xt.transition, Xt.transition = null;
      var P = Le;
      Le = 1;
      var z = Me;
      Me |= 4, vf.current = null, AI(n, c), Zw(c, n), rI(Cc), fa = !!Ec, Cc = Ec = null, n.current = c, II(c), ia(), Me = z, Le = P, Xt.transition = b;
    } else n.current = c;
    if (Xa && (Xa = !1, vr = n, Qa = v), b = n.pendingLanes, b === 0 && (mr = null), Xu(c.stateNode), kt(n, We()), i !== null) for (p = n.onRecoverableError, c = 0; c < i.length; c++) v = i[c], p(v.value, { componentStack: v.stack, digest: v.digest });
    if (Ka) throw Ka = !1, n = xf, xf = null, n;
    return (Qa & 1) !== 0 && n.tag !== 0 && Vo(), b = n.pendingLanes, (b & 1) !== 0 ? n === _f ? as++ : (as = 0, _f = n) : as = 0, dr(), null;
  }
  function Vo() {
    if (vr !== null) {
      var n = Xy(Qa), i = Xt.transition, c = Le;
      try {
        if (Xt.transition = null, Le = 16 > n ? 16 : n, vr === null) var p = !1;
        else {
          if (n = vr, vr = null, Qa = 0, (Me & 6) !== 0) throw Error(r(331));
          var v = Me;
          for (Me |= 4, ye = n.current; ye !== null; ) {
            var b = ye, P = b.child;
            if ((ye.flags & 16) !== 0) {
              var z = b.deletions;
              if (z !== null) {
                for (var U = 0; U < z.length; U++) {
                  var oe = z[U];
                  for (ye = oe; ye !== null; ) {
                    var ue = ye;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        os(8, ue, b);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ye = fe;
                    else for (; ye !== null; ) {
                      ue = ye;
                      var le = ue.sibling, ge = ue.return;
                      if (Gw(ue), ue === oe) {
                        ye = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = ge, ye = le;
                        break;
                      }
                      ye = ge;
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
                ye = b;
              }
            }
            if ((b.subtreeFlags & 2064) !== 0 && P !== null) P.return = b, ye = P;
            else e: for (; ye !== null; ) {
              if (b = ye, (b.flags & 2048) !== 0) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  os(9, b, b.return);
              }
              var ne = b.sibling;
              if (ne !== null) {
                ne.return = b.return, ye = ne;
                break e;
              }
              ye = b.return;
            }
          }
          var J = n.current;
          for (ye = J; ye !== null; ) {
            P = ye;
            var re = P.child;
            if ((P.subtreeFlags & 2064) !== 0 && re !== null) re.return = P, ye = re;
            else e: for (P = J; ye !== null; ) {
              if (z = ye, (z.flags & 2048) !== 0) try {
                switch (z.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ua(9, z);
                }
              } catch (Ce) {
                Ke(z, z.return, Ce);
              }
              if (z === P) {
                ye = null;
                break e;
              }
              var he = z.sibling;
              if (he !== null) {
                he.return = z.return, ye = he;
                break e;
              }
              ye = z.return;
            }
          }
          if (Me = v, dr(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
            Wt.onPostCommitFiberRoot(qr, n);
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
  function ux(n, i, c) {
    i = zo(c, i), i = Rw(n, i, 1), n = pr(n, i, 1), i = xt(), n !== null && (nr(n, 1, i), kt(n, i));
  }
  function Ke(n, i, c) {
    if (n.tag === 3) ux(n, n, c);
    else for (; i !== null; ) {
      if (i.tag === 3) {
        ux(i, n, c);
        break;
      } else if (i.tag === 1) {
        var p = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && (mr === null || !mr.has(p))) {
          n = zo(c, n), n = Nw(i, n, 1), i = pr(i, n, 1), n = xt(), i !== null && (nr(i, 1, n), kt(i, n));
          break;
        }
      }
      i = i.return;
    }
  }
  function qI(n, i, c) {
    var p = n.pingCache;
    p !== null && p.delete(i), i = xt(), n.pingedLanes |= n.suspendedLanes & c, ut === n && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > We() - wf ? Kr(n, 0) : yf |= c), kt(n, i);
  }
  function cx(n, i) {
    i === 0 && ((n.mode & 1) === 0 ? i = 1 : (i = xo, xo <<= 1, (xo & 130023424) === 0 && (xo = 4194304)));
    var c = xt();
    n = $n(n, i), n !== null && (nr(n, i, c), kt(n, c));
  }
  function zI(n) {
    var i = n.memoizedState, c = 0;
    i !== null && (c = i.retryLane), cx(n, c);
  }
  function FI(n, i) {
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
    p !== null && p.delete(i), cx(n, c);
  }
  var fx;
  fx = function(n, i, c) {
    if (n !== null) if (n.memoizedProps !== i.pendingProps || bt.current) Et = !0;
    else {
      if ((n.lanes & c) === 0 && (i.flags & 128) === 0) return Et = !1, RI(n, i, c);
      Et = (n.flags & 131072) !== 0;
    }
    else Et = !1, ze && (i.flags & 1048576) !== 0 && H0(i, Pa, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var p = i.type;
        Ha(n, i), n = i.pendingProps;
        var v = Ao(i, pt.current);
        Do(i, c), v = Kc(null, i, p, n, v, c);
        var b = Xc();
        return i.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, St(p) ? (b = !0, ka(i)) : b = !1, i.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Bc(i), v.updater = Ba, i.stateNode = v, v._reactInternals = i, nf(i, p, n, c), i = af(null, i, p, !0, b, c)) : (i.tag = 0, ze && b && Ic(i), wt(null, i, v, c), i = i.child), i;
      case 16:
        p = i.elementType;
        e: {
          switch (Ha(n, i), n = i.pendingProps, v = p._init, p = v(p._payload), i.type = p, v = i.tag = BI(p), n = on(p, n), v) {
            case 0:
              i = sf(null, i, p, n, c);
              break e;
            case 1:
              i = Dw(null, i, p, n, c);
              break e;
            case 11:
              i = Iw(null, i, p, n, c);
              break e;
            case 14:
              i = Mw(null, i, p, on(p.type, n), c);
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
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), sf(n, i, p, v, c);
      case 1:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Dw(n, i, p, v, c);
      case 3:
        e: {
          if (qw(i), n === null) throw Error(r(387));
          p = i.pendingProps, b = i.memoizedState, v = b.element, J0(n, i), La(i, p, null, c);
          var P = i.memoizedState;
          if (p = P.element, b.isDehydrated) if (b = { element: p, isDehydrated: !1, cache: P.cache, pendingSuspenseBoundaries: P.pendingSuspenseBoundaries, transitions: P.transitions }, i.updateQueue.baseState = b, i.memoizedState = b, i.flags & 256) {
            v = zo(Error(r(423)), i), i = zw(n, i, p, c, v);
            break e;
          } else if (p !== v) {
            v = zo(Error(r(424)), i), i = zw(n, i, p, c, v);
            break e;
          } else for (Ot = ur(i.stateNode.containerInfo.firstChild), Mt = i, ze = !0, rn = null, c = Q0(i, null, p, c), i.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (Oo(), p === v) {
              i = Vn(n, i, c);
              break e;
            }
            wt(n, i, p, c);
          }
          i = i.child;
        }
        return i;
      case 5:
        return nw(i), n === null && Lc(i), p = i.type, v = i.pendingProps, b = n !== null ? n.memoizedProps : null, P = v.children, kc(p, v) ? P = null : b !== null && kc(p, b) && (i.flags |= 32), jw(n, i), wt(n, i, P, c), i.child;
      case 6:
        return n === null && Lc(i), null;
      case 13:
        return Fw(n, i, c);
      case 4:
        return Vc(i, i.stateNode.containerInfo), p = i.pendingProps, n === null ? i.child = Lo(i, null, p, c) : wt(n, i, p, c), i.child;
      case 11:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Iw(n, i, p, v, c);
      case 7:
        return wt(n, i, i.pendingProps, c), i.child;
      case 8:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 12:
        return wt(n, i, i.pendingProps.children, c), i.child;
      case 10:
        e: {
          if (p = i.type._context, v = i.pendingProps, b = i.memoizedProps, P = v.value, je(Ia, p._currentValue), p._currentValue = P, b !== null) if (nn(b.value, P)) {
            if (b.children === v.children && !bt.current) {
              i = Vn(n, i, c);
              break e;
            }
          } else for (b = i.child, b !== null && (b.return = i); b !== null; ) {
            var z = b.dependencies;
            if (z !== null) {
              P = b.child;
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
                  b.lanes |= c, U = b.alternate, U !== null && (U.lanes |= c), Fc(
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
              P.lanes |= c, z = P.alternate, z !== null && (z.lanes |= c), Fc(P, c, i), P = b.sibling;
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
        return v = i.type, p = i.pendingProps.children, Do(i, c), v = Yt(v), p = p(v), i.flags |= 1, wt(n, i, p, c), i.child;
      case 14:
        return p = i.type, v = on(p, i.pendingProps), v = on(p.type, v), Mw(n, i, p, v, c);
      case 15:
        return Ow(n, i, i.type, i.pendingProps, c);
      case 17:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Ha(n, i), i.tag = 1, St(p) ? (n = !0, ka(i)) : n = !1, Do(i, c), Cw(i, p, v), nf(i, p, v, c), af(null, i, p, !0, n, c);
      case 19:
        return Bw(n, i, c);
      case 22:
        return Lw(n, i, c);
    }
    throw Error(r(156, i.tag));
  };
  function dx(n, i) {
    return ra(n, i);
  }
  function $I(n, i, c, p) {
    this.tag = n, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = p, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(n, i, c, p) {
    return new $I(n, i, c, p);
  }
  function Rf(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function BI(n) {
    if (typeof n == "function") return Rf(n) ? 1 : 0;
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
  function tl(n, i, c, p, v, b) {
    var P = 2;
    if (p = n, typeof n == "function") Rf(n) && (P = 1);
    else if (typeof n == "string") P = 5;
    else e: switch (n) {
      case A:
        return Qr(c.children, v, b, i);
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
        return nl(c, v, b, i);
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
  function Qr(n, i, c, p) {
    return n = Qt(7, n, p, i), n.lanes = c, n;
  }
  function nl(n, i, c, p) {
    return n = Qt(22, n, p, i), n.elementType = Y, n.lanes = c, n.stateNode = { isHidden: !1 }, n;
  }
  function Nf(n, i, c) {
    return n = Qt(6, n, null, i), n.lanes = c, n;
  }
  function Pf(n, i, c) {
    return i = Qt(4, n.children !== null ? n.children : [], n.key, i), i.lanes = c, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function VI(n, i, c, p, v) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ai(0), this.expirationTimes = Ai(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ai(0), this.identifierPrefix = p, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Tf(n, i, c, p, v, b, P, z, U) {
    return n = new VI(n, i, c, z, U), i === 1 ? (i = 1, b === !0 && (i |= 8)) : i = 0, b = Qt(3, null, null, i), n.current = b, b.stateNode = n, b.memoizedState = { element: p, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bc(b), n;
  }
  function HI(n, i, c) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: p == null ? null : "" + p, children: n, containerInfo: i, implementation: c };
  }
  function hx(n) {
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
      if (St(c)) return $0(n, c, i);
    }
    return i;
  }
  function px(n, i, c, p, v, b, P, z, U) {
    return n = Tf(c, p, !0, n, v, b, P, z, U), n.context = hx(null), c = n.current, p = xt(), v = yr(c), b = Bn(p, v), b.callback = i ?? null, pr(c, b, v), n.current.lanes = v, nr(n, v, p), kt(n, p), n;
  }
  function rl(n, i, c, p) {
    var v = i.current, b = xt(), P = yr(v);
    return c = hx(c), i.context === null ? i.context = c : i.pendingContext = c, i = Bn(b, P), i.payload = { element: n }, p = p === void 0 ? null : p, p !== null && (i.callback = p), n = pr(v, i, P), n !== null && (ln(n, v, P, b), Oa(n, v, P)), P;
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
  function gx(n, i) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var c = n.retryLane;
      n.retryLane = c !== 0 && c < i ? c : i;
    }
  }
  function Af(n, i) {
    gx(n, i), (n = n.alternate) && gx(n, i);
  }
  function WI() {
    return null;
  }
  var mx = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function If(n) {
    this._internalRoot = n;
  }
  il.prototype.render = If.prototype.render = function(n) {
    var i = this._internalRoot;
    if (i === null) throw Error(r(409));
    rl(n, i, null, null);
  }, il.prototype.unmount = If.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var i = n.containerInfo;
      Yr(function() {
        rl(null, n, null, null);
      }), i[Dn] = null;
    }
  };
  function il(n) {
    this._internalRoot = n;
  }
  il.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var i = Jy();
      n = { blockedOn: null, target: n, priority: i };
      for (var c = 0; c < sr.length && i !== 0 && i < sr[c].priority; c++) ;
      sr.splice(c, 0, n), c === 0 && n0(n);
    }
  };
  function Mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function sl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vx() {
  }
  function UI(n, i, c, p, v) {
    if (v) {
      if (typeof p == "function") {
        var b = p;
        p = function() {
          var oe = ol(P);
          b.call(oe);
        };
      }
      var P = px(i, p, n, 0, null, !1, !1, "", vx);
      return n._reactRootContainer = P, n[Dn] = P.current, Wi(n.nodeType === 8 ? n.parentNode : n), Yr(), P;
    }
    for (; v = n.lastChild; ) n.removeChild(v);
    if (typeof p == "function") {
      var z = p;
      p = function() {
        var oe = ol(U);
        z.call(oe);
      };
    }
    var U = Tf(n, 0, !1, null, null, !1, !1, "", vx);
    return n._reactRootContainer = U, n[Dn] = U.current, Wi(n.nodeType === 8 ? n.parentNode : n), Yr(function() {
      rl(i, U, c, p);
    }), U;
  }
  function al(n, i, c, p, v) {
    var b = c._reactRootContainer;
    if (b) {
      var P = b;
      if (typeof v == "function") {
        var z = v;
        v = function() {
          var U = ol(P);
          z.call(U);
        };
      }
      rl(i, P, n, v);
    } else P = UI(c, i, n, v, p);
    return ol(P);
  }
  Qy = function(n) {
    switch (n.tag) {
      case 3:
        var i = n.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var c = _n(i.pendingLanes);
          c !== 0 && (nc(i, c | 1), kt(i, We()), (Me & 6) === 0 && (Bo = We() + 500, dr()));
        }
        break;
      case 13:
        Yr(function() {
          var p = $n(n, 1);
          if (p !== null) {
            var v = xt();
            ln(p, n, 1, v);
          }
        }), Af(n, 1);
    }
  }, rc = function(n) {
    if (n.tag === 13) {
      var i = $n(n, 134217728);
      if (i !== null) {
        var c = xt();
        ln(i, n, 134217728, c);
      }
      Af(n, 134217728);
    }
  }, Zy = function(n) {
    if (n.tag === 13) {
      var i = yr(n), c = $n(n, i);
      if (c !== null) {
        var p = xt();
        ln(c, n, i, p);
      }
      Af(n, i);
    }
  }, Jy = function() {
    return Le;
  }, e0 = function(n, i) {
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
            var p = c[i];
            if (p !== n && p.form === n.form) {
              var v = Ea(p);
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
  }, Zs = Ef, Js = Yr;
  var GI = { usingClientEntryPoint: !1, Events: [Yi, Po, Ea, Xs, Qs, Ef] }, ls = { findFiberByHostInstance: Fr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, YI = { bundleType: ls.bundleType, version: ls.version, rendererPackageName: ls.rendererPackageName, rendererConfig: ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: k.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ta(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ls.findFiberByHostInstance || WI, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ll.isDisabled && ll.supportsFiber) try {
      qr = ll.inject(YI), Wt = ll;
    } catch {
    }
  }
  return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GI, Rt.createPortal = function(n, i) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mf(i)) throw Error(r(200));
    return HI(n, i, null, c);
  }, Rt.createRoot = function(n, i) {
    if (!Mf(n)) throw Error(r(299));
    var c = !1, p = "", v = mx;
    return i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (v = i.onRecoverableError)), i = Tf(n, 1, !1, null, null, c, !1, p, v), n[Dn] = i.current, Wi(n.nodeType === 8 ? n.parentNode : n), new If(i);
  }, Rt.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
    return n = ta(i), n = n === null ? null : n.stateNode, n;
  }, Rt.flushSync = function(n) {
    return Yr(n);
  }, Rt.hydrate = function(n, i, c) {
    if (!sl(i)) throw Error(r(200));
    return al(null, n, i, !0, c);
  }, Rt.hydrateRoot = function(n, i, c) {
    if (!Mf(n)) throw Error(r(405));
    var p = c != null && c.hydratedSources || null, v = !1, b = "", P = mx;
    if (c != null && (c.unstable_strictMode === !0 && (v = !0), c.identifierPrefix !== void 0 && (b = c.identifierPrefix), c.onRecoverableError !== void 0 && (P = c.onRecoverableError)), i = px(i, null, n, 1, c ?? null, v, !1, b, P), n[Dn] = i.current, Wi(n), p) for (n = 0; n < p.length; n++) c = p[n], v = c._getVersion, v = v(c._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [c, v] : i.mutableSourceEagerHydrationData.push(
      c,
      v
    );
    return new il(i);
  }, Rt.render = function(n, i, c) {
    if (!sl(i)) throw Error(r(200));
    return al(null, n, i, !1, c);
  }, Rt.unmountComponentAtNode = function(n) {
    if (!sl(n)) throw Error(r(40));
    return n._reactRootContainer ? (Yr(function() {
      al(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Dn] = null;
      });
    }), !0) : !1;
  }, Rt.unstable_batchedUpdates = Ef, Rt.unstable_renderSubtreeIntoContainer = function(n, i, c, p) {
    if (!sl(c)) throw Error(r(200));
    if (n == null || n._reactInternals === void 0) throw Error(r(38));
    return al(n, i, c, !1, p);
  }, Rt.version = "18.3.1-next-f1338f8080-20240426", Rt;
}
var kx;
function $k() {
  if (kx) return jf.exports;
  kx = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), jf.exports = o2(), jf.exports;
}
var Rx;
function i2() {
  if (Rx) return cl;
  Rx = 1;
  var e = $k();
  return cl.createRoot = e.createRoot, cl.hydrateRoot = e.hydrateRoot, cl;
}
var s2 = i2();
let Bk = R.createContext(
  /** @type {any} */
  null
);
function a2() {
  let e = R.useContext(Bk);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function l2() {
  return a2().model;
}
function zf(e) {
  let t = l2(), r = R.useSyncExternalStore(
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
function u2(e) {
  return ({ el: t, model: r, experimental: o }) => {
    let s = s2.createRoot(t);
    return s.render(
      R.createElement(
        R.StrictMode,
        null,
        R.createElement(
          Bk.Provider,
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
var c2 = { value: () => {
} };
function nu() {
  for (var e = 0, t = arguments.length, r = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in r || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    r[o] = [];
  }
  return new Nl(r);
}
function Nl(e) {
  this._ = e;
}
function f2(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var o = "", s = r.indexOf(".");
    if (s >= 0 && (o = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: o };
  });
}
Nl.prototype = nu.prototype = {
  constructor: Nl,
  on: function(e, t) {
    var r = this._, o = f2(e + "", r), s, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((s = (e = o[a]).type) && (s = d2(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (s = (e = o[a]).type) r[s] = Nx(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = Nx(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new Nl(e);
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
function d2(e, t) {
  for (var r = 0, o = e.length, s; r < o; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function Nx(e, t, r) {
  for (var o = 0, s = e.length; o < s; ++o)
    if (e[o].name === t) {
      e[o] = c2, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var Rv = "http://www.w3.org/1999/xhtml";
const Px = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Rv,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ru(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Px.hasOwnProperty(t) ? { space: Px[t], local: e } : e;
}
function h2(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Rv && t.documentElement.namespaceURI === Rv ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function p2(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Vk(e) {
  var t = ru(e);
  return (t.local ? p2 : h2)(t);
}
function g2() {
}
function ty(e) {
  return e == null ? g2 : function() {
    return this.querySelector(e);
  };
}
function m2(e) {
  typeof e != "function" && (e = ty(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new zt(o, this._parents);
}
function v2(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function y2() {
  return [];
}
function Hk(e) {
  return e == null ? y2 : function() {
    return this.querySelectorAll(e);
  };
}
function w2(e) {
  return function() {
    return v2(e.apply(this, arguments));
  };
}
function x2(e) {
  typeof e == "function" ? e = w2(e) : e = Hk(e);
  for (var t = this._groups, r = t.length, o = [], s = [], a = 0; a < r; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), s.push(f));
  return new zt(o, s);
}
function Wk(e) {
  return function() {
    return this.matches(e);
  };
}
function Uk(e) {
  return function(t) {
    return t.matches(e);
  };
}
var _2 = Array.prototype.find;
function b2(e) {
  return function() {
    return _2.call(this.children, e);
  };
}
function S2() {
  return this.firstElementChild;
}
function E2(e) {
  return this.select(e == null ? S2 : b2(typeof e == "function" ? e : Uk(e)));
}
var C2 = Array.prototype.filter;
function k2() {
  return Array.from(this.children);
}
function R2(e) {
  return function() {
    return C2.call(this.children, e);
  };
}
function N2(e) {
  return this.selectAll(e == null ? k2 : R2(typeof e == "function" ? e : Uk(e)));
}
function P2(e) {
  typeof e != "function" && (e = Wk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new zt(o, this._parents);
}
function Gk(e) {
  return new Array(e.length);
}
function T2() {
  return new zt(this._enter || this._groups.map(Gk), this._parents);
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
function A2(e) {
  return function() {
    return e;
  };
}
function I2(e, t, r, o, s, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : r[l] = new jl(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (s[l] = u);
}
function M2(e, t, r, o, s, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, g = a.length, m = new Array(h), w;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = w = l.call(f, f.__data__, u, t) + "", d.has(w) ? s[u] = f : d.set(w, f));
  for (u = 0; u < g; ++u)
    w = l.call(e, a[u], u, a) + "", (f = d.get(w)) ? (o[u] = f, f.__data__ = a[u], d.delete(w)) : r[u] = new jl(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (s[u] = f);
}
function O2(e) {
  return e.__data__;
}
function L2(e, t) {
  if (!arguments.length) return Array.from(this, O2);
  var r = t ? M2 : I2, o = this._parents, s = this._groups;
  typeof e != "function" && (e = A2(e));
  for (var a = s.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], g = s[d], m = g.length, w = j2(e.call(h, h && h.__data__, d, o)), E = w.length, y = u[d] = new Array(E), x = l[d] = new Array(E), S = f[d] = new Array(m);
    r(h, g, y, x, S, w, t);
    for (var C = 0, _ = 0, k, N; C < E; ++C)
      if (k = y[C]) {
        for (C >= _ && (_ = C + 1); !(N = x[_]) && ++_ < E; ) ;
        k._next = N || null;
      }
  }
  return l = new zt(l, o), l._enter = u, l._exit = f, l;
}
function j2(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function D2() {
  return new zt(this._exit || this._groups.map(Gk), this._parents);
}
function q2(e, t, r) {
  var o = this.enter(), s = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? a.remove() : r(a), o && s ? o.merge(s).order() : s;
}
function z2(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, o = t._groups, s = r.length, a = o.length, l = Math.min(s, a), u = new Array(s), f = 0; f < l; ++f)
    for (var d = r[f], h = o[f], g = d.length, m = u[f] = new Array(g), w, E = 0; E < g; ++E)
      (w = d[E] || h[E]) && (m[E] = w);
  for (; f < s; ++f)
    u[f] = r[f];
  return new zt(u, this._parents);
}
function F2() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var o = e[t], s = o.length - 1, a = o[s], l; --s >= 0; )
      (l = o[s]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function $2(e) {
  e || (e = B2);
  function t(g, m) {
    return g && m ? e(g.__data__, m.__data__) : !g - !m;
  }
  for (var r = this._groups, o = r.length, s = new Array(o), a = 0; a < o; ++a) {
    for (var l = r[a], u = l.length, f = s[a] = new Array(u), d, h = 0; h < u; ++h)
      (d = l[h]) && (f[h] = d);
    f.sort(t);
  }
  return new zt(s, this._parents).order();
}
function B2(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function V2() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function H2() {
  return Array.from(this);
}
function W2() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length; s < a; ++s) {
      var l = o[s];
      if (l) return l;
    }
  return null;
}
function U2() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function G2() {
  return !this.node();
}
function Y2(e) {
  for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
    for (var s = t[r], a = 0, l = s.length, u; a < l; ++a)
      (u = s[a]) && e.call(u, u.__data__, a, s);
  return this;
}
function K2(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function X2(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Q2(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Z2(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function J2(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function eM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function tM(e, t) {
  var r = ru(e);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each((t == null ? r.local ? X2 : K2 : typeof t == "function" ? r.local ? eM : J2 : r.local ? Z2 : Q2)(r, t));
}
function Yk(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function nM(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function rM(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function oM(e, t, r) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
  };
}
function iM(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? nM : typeof t == "function" ? oM : rM)(e, t, r ?? "")) : ti(this.node(), e);
}
function ti(e, t) {
  return e.style.getPropertyValue(t) || Yk(e).getComputedStyle(e, null).getPropertyValue(t);
}
function sM(e) {
  return function() {
    delete this[e];
  };
}
function aM(e, t) {
  return function() {
    this[e] = t;
  };
}
function lM(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function uM(e, t) {
  return arguments.length > 1 ? this.each((t == null ? sM : typeof t == "function" ? lM : aM)(e, t)) : this.node()[e];
}
function Kk(e) {
  return e.trim().split(/^|\s+/);
}
function ny(e) {
  return e.classList || new Xk(e);
}
function Xk(e) {
  this._node = e, this._names = Kk(e.getAttribute("class") || "");
}
Xk.prototype = {
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
function Qk(e, t) {
  for (var r = ny(e), o = -1, s = t.length; ++o < s; ) r.add(t[o]);
}
function Zk(e, t) {
  for (var r = ny(e), o = -1, s = t.length; ++o < s; ) r.remove(t[o]);
}
function cM(e) {
  return function() {
    Qk(this, e);
  };
}
function fM(e) {
  return function() {
    Zk(this, e);
  };
}
function dM(e, t) {
  return function() {
    (t.apply(this, arguments) ? Qk : Zk)(this, e);
  };
}
function hM(e, t) {
  var r = Kk(e + "");
  if (arguments.length < 2) {
    for (var o = ny(this.node()), s = -1, a = r.length; ++s < a; ) if (!o.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? dM : t ? cM : fM)(r, t));
}
function pM() {
  this.textContent = "";
}
function gM(e) {
  return function() {
    this.textContent = e;
  };
}
function mM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function vM(e) {
  return arguments.length ? this.each(e == null ? pM : (typeof e == "function" ? mM : gM)(e)) : this.node().textContent;
}
function yM() {
  this.innerHTML = "";
}
function wM(e) {
  return function() {
    this.innerHTML = e;
  };
}
function xM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function _M(e) {
  return arguments.length ? this.each(e == null ? yM : (typeof e == "function" ? xM : wM)(e)) : this.node().innerHTML;
}
function bM() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function SM() {
  return this.each(bM);
}
function EM() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function CM() {
  return this.each(EM);
}
function kM(e) {
  var t = typeof e == "function" ? e : Vk(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function RM() {
  return null;
}
function NM(e, t) {
  var r = typeof e == "function" ? e : Vk(e), o = t == null ? RM : typeof t == "function" ? t : ty(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function PM() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function TM() {
  return this.each(PM);
}
function AM() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function IM() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function MM(e) {
  return this.select(e ? IM : AM);
}
function OM(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function LM(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function jM(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", o = t.indexOf(".");
    return o >= 0 && (r = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: r };
  });
}
function DM(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, o = -1, s = t.length, a; r < s; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function qM(e, t, r) {
  return function() {
    var o = this.__on, s, a = LM(t);
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
function zM(e, t, r) {
  var o = jM(e + ""), s, a = o.length, l;
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
  for (u = t ? qM : DM, s = 0; s < a; ++s) this.each(u(o[s], t, r));
  return this;
}
function Jk(e, t, r) {
  var o = Yk(e), s = o.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = o.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function FM(e, t) {
  return function() {
    return Jk(this, e, t);
  };
}
function $M(e, t) {
  return function() {
    return Jk(this, e, t.apply(this, arguments));
  };
}
function BM(e, t) {
  return this.each((typeof t == "function" ? $M : FM)(e, t));
}
function* VM() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, a = o.length, l; s < a; ++s)
      (l = o[s]) && (yield l);
}
var eR = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Ls() {
  return new zt([[document.documentElement]], eR);
}
function HM() {
  return this;
}
zt.prototype = Ls.prototype = {
  constructor: zt,
  select: m2,
  selectAll: x2,
  selectChild: E2,
  selectChildren: N2,
  filter: P2,
  data: L2,
  enter: T2,
  exit: D2,
  join: q2,
  merge: z2,
  selection: HM,
  order: F2,
  sort: $2,
  call: V2,
  nodes: H2,
  node: W2,
  size: U2,
  empty: G2,
  each: Y2,
  attr: tM,
  style: iM,
  property: uM,
  classed: hM,
  text: vM,
  html: _M,
  raise: SM,
  lower: CM,
  append: kM,
  insert: NM,
  remove: TM,
  clone: MM,
  datum: OM,
  on: zM,
  dispatch: BM,
  [Symbol.iterator]: VM
};
function Dt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], eR);
}
function WM(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function fn(e, t) {
  if (e = WM(e), t === void 0 && (t = e.currentTarget), t) {
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
const UM = { passive: !1 }, _s = { capture: !0, passive: !1 };
function Ff(e) {
  e.stopImmediatePropagation();
}
function Qo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function tR(e) {
  var t = e.document.documentElement, r = Dt(e).on("dragstart.drag", Qo, _s);
  "onselectstart" in t ? r.on("selectstart.drag", Qo, _s) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function nR(e, t) {
  var r = e.document.documentElement, o = Dt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", Qo, _s), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
const fl = (e) => () => e;
function Nv(e, {
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
Nv.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function GM(e) {
  return !e.ctrlKey && !e.button;
}
function YM() {
  return this.parentNode;
}
function KM(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function XM() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function rR() {
  var e = GM, t = YM, r = KM, o = XM, s = {}, a = nu("start", "drag", "end"), l = 0, u, f, d, h, g = 0;
  function m(k) {
    k.on("mousedown.drag", w).filter(o).on("touchstart.drag", x).on("touchmove.drag", S, UM).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function w(k, N) {
    if (!(h || !e.call(this, k, N))) {
      var T = _(this, t.call(this, k, N), k, N, "mouse");
      T && (Dt(k.view).on("mousemove.drag", E, _s).on("mouseup.drag", y, _s), tR(k.view), Ff(k), d = !1, u = k.clientX, f = k.clientY, T("start", k));
    }
  }
  function E(k) {
    if (Qo(k), !d) {
      var N = k.clientX - u, T = k.clientY - f;
      d = N * N + T * T > g;
    }
    s.mouse("drag", k);
  }
  function y(k) {
    Dt(k.view).on("mousemove.drag mouseup.drag", null), nR(k.view, d), Qo(k), s.mouse("end", k);
  }
  function x(k, N) {
    if (e.call(this, k, N)) {
      var T = k.changedTouches, A = t.call(this, k, N), O = T.length, D, G;
      for (D = 0; D < O; ++D)
        (G = _(this, A, k, N, T[D].identifier, T[D])) && (Ff(k), G("start", k, T[D]));
    }
  }
  function S(k) {
    var N = k.changedTouches, T = N.length, A, O;
    for (A = 0; A < T; ++A)
      (O = s[N[A].identifier]) && (Qo(k), O("drag", k, N[A]));
  }
  function C(k) {
    var N = k.changedTouches, T = N.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (O = s[N[A].identifier]) && (Ff(k), O("end", k, N[A]));
  }
  function _(k, N, T, A, O, D) {
    var G = a.copy(), B = fn(D || T, N), V, X, L;
    if ((L = r.call(k, new Nv("beforestart", {
      sourceEvent: T,
      target: m,
      identifier: O,
      active: l,
      x: B[0],
      y: B[1],
      dx: 0,
      dy: 0,
      dispatch: G
    }), A)) != null)
      return V = L.x - B[0] || 0, X = L.y - B[1] || 0, function H($, Y, M) {
        var q = B, Q;
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
          new Nv($, {
            sourceEvent: Y,
            subject: L,
            target: m,
            identifier: O,
            active: Q,
            x: B[0] + V,
            y: B[1] + X,
            dx: B[0] - q[0],
            dy: B[1] - q[1],
            dispatch: G
          }),
          A
        );
      };
  }
  return m.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : fl(!!k), m) : e;
  }, m.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : fl(k), m) : t;
  }, m.subject = function(k) {
    return arguments.length ? (r = typeof k == "function" ? k : fl(k), m) : r;
  }, m.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : fl(!!k), m) : o;
  }, m.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? m : k;
  }, m.clickDistance = function(k) {
    return arguments.length ? (g = (k = +k) * k, m) : Math.sqrt(g);
  }, m;
}
function ry(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function oR(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function js() {
}
var bs = 0.7, Dl = 1 / bs, Zo = "\\s*([+-]?\\d+)\\s*", Ss = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", QM = /^#([0-9a-f]{3,8})$/, ZM = new RegExp(`^rgb\\(${Zo},${Zo},${Zo}\\)$`), JM = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), eO = new RegExp(`^rgba\\(${Zo},${Zo},${Zo},${Ss}\\)$`), tO = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Ss}\\)$`), nO = new RegExp(`^hsl\\(${Ss},${Pn},${Pn}\\)$`), rO = new RegExp(`^hsla\\(${Ss},${Pn},${Pn},${Ss}\\)$`), Tx = {
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
ry(js, ro, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ax,
  // Deprecated! Use color.formatHex.
  formatHex: Ax,
  formatHex8: oO,
  formatHsl: iO,
  formatRgb: Ix,
  toString: Ix
});
function Ax() {
  return this.rgb().formatHex();
}
function oO() {
  return this.rgb().formatHex8();
}
function iO() {
  return iR(this).formatHsl();
}
function Ix() {
  return this.rgb().formatRgb();
}
function ro(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = QM.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Mx(t) : r === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? dl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? dl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ZM.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = JM.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = eO.exec(e)) ? dl(t[1], t[2], t[3], t[4]) : (t = tO.exec(e)) ? dl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = nO.exec(e)) ? jx(t[1], t[2] / 100, t[3] / 100, 1) : (t = rO.exec(e)) ? jx(t[1], t[2] / 100, t[3] / 100, t[4]) : Tx.hasOwnProperty(e) ? Mx(Tx[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function Mx(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function dl(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new Nt(e, t, r, o);
}
function sO(e) {
  return e instanceof js || (e = ro(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function Pv(e, t, r, o) {
  return arguments.length === 1 ? sO(e) : new Nt(e, t, r, o ?? 1);
}
function Nt(e, t, r, o) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +o;
}
ry(Nt, Pv, oR(js, {
  brighter(e) {
    return e = e == null ? Dl : Math.pow(Dl, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(to(this.r), to(this.g), to(this.b), ql(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ox,
  // Deprecated! Use color.formatHex.
  formatHex: Ox,
  formatHex8: aO,
  formatRgb: Lx,
  toString: Lx
}));
function Ox() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}`;
}
function aO() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}${eo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Lx() {
  const e = ql(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${to(this.r)}, ${to(this.g)}, ${to(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ql(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function to(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function eo(e) {
  return e = to(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jx(e, t, r, o) {
  return o <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dn(e, t, r, o);
}
function iR(e) {
  if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof js || (e = ro(e)), !e) return new dn();
  if (e instanceof dn) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, o = e.b / 255, s = Math.min(t, r, o), a = Math.max(t, r, o), l = NaN, u = a - s, f = (a + s) / 2;
  return u ? (t === a ? l = (r - o) / u + (r < o) * 6 : r === a ? l = (o - t) / u + 2 : l = (t - r) / u + 4, u /= f < 0.5 ? a + s : 2 - a - s, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new dn(l, u, f, e.opacity);
}
function lO(e, t, r, o) {
  return arguments.length === 1 ? iR(e) : new dn(e, t, r, o ?? 1);
}
function dn(e, t, r, o) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +o;
}
ry(dn, lO, oR(js, {
  brighter(e) {
    return e = e == null ? Dl : Math.pow(Dl, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, o = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - o;
    return new Nt(
      $f(e >= 240 ? e - 240 : e + 120, s, o),
      $f(e, s, o),
      $f(e < 120 ? e + 240 : e - 120, s, o),
      this.opacity
    );
  },
  clamp() {
    return new dn(Dx(this.h), hl(this.s), hl(this.l), ql(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ql(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Dx(this.h)}, ${hl(this.s) * 100}%, ${hl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Dx(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function hl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $f(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const oy = (e) => () => e;
function uO(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function cO(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(o) {
    return Math.pow(e + o * t, r);
  };
}
function fO(e) {
  return (e = +e) == 1 ? sR : function(t, r) {
    return r - t ? cO(t, r, e) : oy(isNaN(t) ? r : t);
  };
}
function sR(e, t) {
  var r = t - e;
  return r ? uO(e, r) : oy(isNaN(e) ? t : e);
}
const zl = (function e(t) {
  var r = fO(t);
  function o(s, a) {
    var l = r((s = Pv(s)).r, (a = Pv(a)).r), u = r(s.g, a.g), f = r(s.b, a.b), d = sR(s.opacity, a.opacity);
    return function(h) {
      return s.r = l(h), s.g = u(h), s.b = f(h), s.opacity = d(h), s + "";
    };
  }
  return o.gamma = e, o;
})(1);
function dO(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, o = t.slice(), s;
  return function(a) {
    for (s = 0; s < r; ++s) o[s] = e[s] * (1 - a) + t[s] * a;
    return o;
  };
}
function hO(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function pO(e, t) {
  var r = t ? t.length : 0, o = e ? Math.min(r, e.length) : 0, s = new Array(o), a = new Array(r), l;
  for (l = 0; l < o; ++l) s[l] = ws(e[l], t[l]);
  for (; l < r; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = s[l](u);
    return a;
  };
}
function gO(e, t) {
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
function mO(e, t) {
  var r = {}, o = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = ws(e[s], t[s]) : o[s] = t[s];
  return function(a) {
    for (s in r) o[s] = r[s](a);
    return o;
  };
}
var Tv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bf = new RegExp(Tv.source, "g");
function vO(e) {
  return function() {
    return e;
  };
}
function yO(e) {
  return function(t) {
    return e(t) + "";
  };
}
function aR(e, t) {
  var r = Tv.lastIndex = Bf.lastIndex = 0, o, s, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = Tv.exec(e)) && (s = Bf.exec(t)); )
    (a = s.index) > r && (a = t.slice(r, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (s = s[0]) ? u[l] ? u[l] += s : u[++l] = s : (u[++l] = null, f.push({ i: l, x: kn(o, s) })), r = Bf.lastIndex;
  return r < t.length && (a = t.slice(r), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? yO(f[0].x) : vO(t) : (t = f.length, function(d) {
    for (var h = 0, g; h < t; ++h) u[(g = f[h]).i] = g.x(d);
    return u.join("");
  });
}
function ws(e, t) {
  var r = typeof t, o;
  return t == null || r === "boolean" ? oy(t) : (r === "number" ? kn : r === "string" ? (o = ro(t)) ? (t = o, zl) : aR : t instanceof ro ? zl : t instanceof Date ? gO : hO(t) ? dO : Array.isArray(t) ? pO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? mO : kn)(e, t);
}
var qx = 180 / Math.PI, Av = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function lR(e, t, r, o, s, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * r + t * o) && (r -= e * f, o -= t * f), (u = Math.sqrt(r * r + o * o)) && (r /= u, o /= u, f /= u), e * o < t * r && (e = -e, t = -t, f = -f, l = -l), {
    translateX: s,
    translateY: a,
    rotate: Math.atan2(t, e) * qx,
    skewX: Math.atan(f) * qx,
    scaleX: l,
    scaleY: u
  };
}
var pl;
function wO(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Av : lR(t.a, t.b, t.c, t.d, t.e, t.f);
}
function xO(e) {
  return e == null || (pl || (pl = document.createElementNS("http://www.w3.org/2000/svg", "g")), pl.setAttribute("transform", e), !(e = pl.transform.baseVal.consolidate())) ? Av : (e = e.matrix, lR(e.a, e.b, e.c, e.d, e.e, e.f));
}
function uR(e, t, r, o) {
  function s(d) {
    return d.length ? d.pop() + " " : "";
  }
  function a(d, h, g, m, w, E) {
    if (d !== g || h !== m) {
      var y = w.push("translate(", null, t, null, r);
      E.push({ i: y - 4, x: kn(d, g) }, { i: y - 2, x: kn(h, m) });
    } else (g || m) && w.push("translate(" + g + t + m + r);
  }
  function l(d, h, g, m) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), m.push({ i: g.push(s(g) + "rotate(", null, o) - 2, x: kn(d, h) })) : h && g.push(s(g) + "rotate(" + h + o);
  }
  function u(d, h, g, m) {
    d !== h ? m.push({ i: g.push(s(g) + "skewX(", null, o) - 2, x: kn(d, h) }) : h && g.push(s(g) + "skewX(" + h + o);
  }
  function f(d, h, g, m, w, E) {
    if (d !== g || h !== m) {
      var y = w.push(s(w) + "scale(", null, ",", null, ")");
      E.push({ i: y - 4, x: kn(d, g) }, { i: y - 2, x: kn(h, m) });
    } else (g !== 1 || m !== 1) && w.push(s(w) + "scale(" + g + "," + m + ")");
  }
  return function(d, h) {
    var g = [], m = [];
    return d = e(d), h = e(h), a(d.translateX, d.translateY, h.translateX, h.translateY, g, m), l(d.rotate, h.rotate, g, m), u(d.skewX, h.skewX, g, m), f(d.scaleX, d.scaleY, h.scaleX, h.scaleY, g, m), d = h = null, function(w) {
      for (var E = -1, y = m.length, x; ++E < y; ) g[(x = m[E]).i] = x.x(w);
      return g.join("");
    };
  };
}
var _O = uR(wO, "px, ", "px)", "deg)"), bO = uR(xO, ", ", ")", ")"), SO = 1e-12;
function zx(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function EO(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function CO(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Pl = (function e(t, r, o) {
  function s(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], g = l[1], m = l[2], w = h - u, E = g - f, y = w * w + E * E, x, S;
    if (y < SO)
      S = Math.log(m / d) / t, x = function(A) {
        return [
          u + A * w,
          f + A * E,
          d * Math.exp(t * A * S)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (m * m - d * d + o * y) / (2 * d * r * C), k = (m * m - d * d - o * y) / (2 * m * r * C), N = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(k * k + 1) - k);
      S = (T - N) / t, x = function(A) {
        var O = A * S, D = zx(N), G = d / (r * C) * (D * CO(t * O + N) - EO(N));
        return [
          u + G * w,
          f + G * E,
          d * D / zx(t * O + N)
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
var ni = 0, hs = 0, cs = 0, cR = 1e3, Fl, ps, $l = 0, oo = 0, ou = 0, Es = typeof performance == "object" && performance.now ? performance : Date, fR = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function iy() {
  return oo || (fR(kO), oo = Es.now() + ou);
}
function kO() {
  oo = 0;
}
function Bl() {
  this._call = this._time = this._next = null;
}
Bl.prototype = dR.prototype = {
  constructor: Bl,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? iy() : +r) + (t == null ? 0 : +t), !this._next && ps !== this && (ps ? ps._next = this : Fl = this, ps = this), this._call = e, this._time = r, Iv();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Iv());
  }
};
function dR(e, t, r) {
  var o = new Bl();
  return o.restart(e, t, r), o;
}
function RO() {
  iy(), ++ni;
  for (var e = Fl, t; e; )
    (t = oo - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ni;
}
function Fx() {
  oo = ($l = Es.now()) + ou, ni = hs = 0;
  try {
    RO();
  } finally {
    ni = 0, PO(), oo = 0;
  }
}
function NO() {
  var e = Es.now(), t = e - $l;
  t > cR && (ou -= t, $l = e);
}
function PO() {
  for (var e, t = Fl, r, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Fl = r);
  ps = e, Iv(o);
}
function Iv(e) {
  if (!ni) {
    hs && (hs = clearTimeout(hs));
    var t = e - oo;
    t > 24 ? (e < 1 / 0 && (hs = setTimeout(Fx, e - Es.now() - ou)), cs && (cs = clearInterval(cs))) : (cs || ($l = Es.now(), cs = setInterval(NO, cR)), ni = 1, fR(Fx));
  }
}
function $x(e, t, r) {
  var o = new Bl();
  return t = t == null ? 0 : +t, o.restart((s) => {
    o.stop(), e(s + t);
  }, t, r), o;
}
var TO = nu("start", "end", "cancel", "interrupt"), AO = [], hR = 0, Bx = 1, Mv = 2, Tl = 3, Vx = 4, Ov = 5, Al = 6;
function iu(e, t, r, o, s, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (r in l) return;
  IO(e, r, {
    name: t,
    index: o,
    // For context during callback.
    group: s,
    // For context during callback.
    on: TO,
    tween: AO,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: hR
  });
}
function sy(e, t) {
  var r = yn(e, t);
  if (r.state > hR) throw new Error("too late; already scheduled");
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
function IO(e, t, r) {
  var o = e.__transition, s;
  o[t] = r, r.timer = dR(a, 0, r.time);
  function a(d) {
    r.state = Bx, r.timer.restart(l, r.delay, r.time), r.delay <= d && l(d - r.delay);
  }
  function l(d) {
    var h, g, m, w;
    if (r.state !== Bx) return f();
    for (h in o)
      if (w = o[h], w.name === r.name) {
        if (w.state === Tl) return $x(l);
        w.state === Vx ? (w.state = Al, w.timer.stop(), w.on.call("interrupt", e, e.__data__, w.index, w.group), delete o[h]) : +h < t && (w.state = Al, w.timer.stop(), w.on.call("cancel", e, e.__data__, w.index, w.group), delete o[h]);
      }
    if ($x(function() {
      r.state === Tl && (r.state = Vx, r.timer.restart(u, r.delay, r.time), u(d));
    }), r.state = Mv, r.on.call("start", e, e.__data__, r.index, r.group), r.state === Mv) {
      for (r.state = Tl, s = new Array(m = r.tween.length), h = 0, g = -1; h < m; ++h)
        (w = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (s[++g] = w);
      s.length = g + 1;
    }
  }
  function u(d) {
    for (var h = d < r.duration ? r.ease.call(null, d / r.duration) : (r.timer.restart(f), r.state = Ov, 1), g = -1, m = s.length; ++g < m; )
      s[g].call(e, h);
    r.state === Ov && (r.on.call("end", e, e.__data__, r.index, r.group), f());
  }
  function f() {
    r.state = Al, r.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Il(e, t) {
  var r = e.__transition, o, s, a = !0, l;
  if (r) {
    t = t == null ? null : t + "";
    for (l in r) {
      if ((o = r[l]).name !== t) {
        a = !1;
        continue;
      }
      s = o.state > Mv && o.state < Ov, o.state = Al, o.timer.stop(), o.on.call(s ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete r[l];
    }
    a && delete e.__transition;
  }
}
function MO(e) {
  return this.each(function() {
    Il(this, e);
  });
}
function OO(e, t) {
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
function LO(e, t, r) {
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
function jO(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = yn(this.node(), r).tween, s = 0, a = o.length, l; s < a; ++s)
      if ((l = o[s]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? OO : LO)(r, e, t));
}
function ay(e, t, r) {
  var o = e._id;
  return e.each(function() {
    var s = Mn(this, o);
    (s.value || (s.value = {}))[t] = r.apply(this, arguments);
  }), function(s) {
    return yn(s, o).value[t];
  };
}
function pR(e, t) {
  var r;
  return (typeof t == "number" ? kn : t instanceof ro ? zl : (r = ro(t)) ? (t = r, zl) : aR)(e, t);
}
function DO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function qO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function zO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function FO(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function $O(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function BO(e, t, r) {
  var o, s, a;
  return function() {
    var l, u = r(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u)));
  };
}
function VO(e, t) {
  var r = ru(e), o = r === "transform" ? bO : pR;
  return this.attrTween(e, typeof t == "function" ? (r.local ? BO : $O)(r, o, ay(this, "attr." + e, t)) : t == null ? (r.local ? qO : DO)(r) : (r.local ? FO : zO)(r, o, t));
}
function HO(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function WO(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function UO(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && WO(e, a)), r;
  }
  return s._value = t, s;
}
function GO(e, t) {
  var r, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && HO(e, a)), r;
  }
  return s._value = t, s;
}
function YO(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var o = ru(e);
  return this.tween(r, (o.local ? UO : GO)(o, t));
}
function KO(e, t) {
  return function() {
    sy(this, e).delay = +t.apply(this, arguments);
  };
}
function XO(e, t) {
  return t = +t, function() {
    sy(this, e).delay = t;
  };
}
function QO(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? KO : XO)(t, e)) : yn(this.node(), t).delay;
}
function ZO(e, t) {
  return function() {
    Mn(this, e).duration = +t.apply(this, arguments);
  };
}
function JO(e, t) {
  return t = +t, function() {
    Mn(this, e).duration = t;
  };
}
function eL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ZO : JO)(t, e)) : yn(this.node(), t).duration;
}
function tL(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
  };
}
function nL(e) {
  var t = this._id;
  return arguments.length ? this.each(tL(t, e)) : yn(this.node(), t).ease;
}
function rL(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Mn(this, e).ease = r;
  };
}
function oL(e) {
  if (typeof e != "function") throw new Error();
  return this.each(rL(this._id, e));
}
function iL(e) {
  typeof e != "function" && (e = Wk(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var a = t[s], l = a.length, u = o[s] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Yn(o, this._parents, this._name, this._id);
}
function sL(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, o = t.length, s = r.length, a = Math.min(o, s), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = r[u], h = f.length, g = l[u] = new Array(h), m, w = 0; w < h; ++w)
      (m = f[w] || d[w]) && (g[w] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Yn(l, this._parents, this._name, this._id);
}
function aL(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function lL(e, t, r) {
  var o, s, a = aL(t) ? sy : Mn;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (s = (o = u).copy()).on(t, r), l.on = s;
  };
}
function uL(e, t) {
  var r = this._id;
  return arguments.length < 2 ? yn(this.node(), r).on.on(e) : this.each(lL(r, e, t));
}
function cL(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function fL() {
  return this.on("end.remove", cL(this._id));
}
function dL(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = ty(e));
  for (var o = this._groups, s = o.length, a = new Array(s), l = 0; l < s; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, g, m = 0; m < f; ++m)
      (h = u[m]) && (g = e.call(h, h.__data__, m, u)) && ("__data__" in h && (g.__data__ = h.__data__), d[m] = g, iu(d[m], t, r, m, d, yn(h, r)));
  return new Yn(a, this._parents, t, r);
}
function hL(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Hk(e));
  for (var o = this._groups, s = o.length, a = [], l = [], u = 0; u < s; ++u)
    for (var f = o[u], d = f.length, h, g = 0; g < d; ++g)
      if (h = f[g]) {
        for (var m = e.call(h, h.__data__, g, f), w, E = yn(h, r), y = 0, x = m.length; y < x; ++y)
          (w = m[y]) && iu(w, t, r, y, m, E);
        a.push(m), l.push(h);
      }
  return new Yn(a, l, t, r);
}
var pL = Ls.prototype.constructor;
function gL() {
  return new pL(this._groups, this._parents);
}
function mL(e, t) {
  var r, o, s;
  return function() {
    var a = ti(this, e), l = (this.style.removeProperty(e), ti(this, e));
    return a === l ? null : a === r && l === o ? s : s = t(r = a, o = l);
  };
}
function gR(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vL(e, t, r) {
  var o, s = r + "", a;
  return function() {
    var l = ti(this, e);
    return l === s ? null : l === o ? a : a = t(o = l, r);
  };
}
function yL(e, t, r) {
  var o, s, a;
  return function() {
    var l = ti(this, e), u = r(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), ti(this, e))), l === f ? null : l === o && f === s ? a : (s = f, a = t(o = l, u));
  };
}
function wL(e, t) {
  var r, o, s, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = Mn(this, e), d = f.on, h = f.value[a] == null ? u || (u = gR(t)) : void 0;
    (d !== r || s !== h) && (o = (r = d).copy()).on(l, s = h), f.on = o;
  };
}
function xL(e, t, r) {
  var o = (e += "") == "transform" ? _O : pR;
  return t == null ? this.styleTween(e, mL(e, o)).on("end.style." + e, gR(e)) : typeof t == "function" ? this.styleTween(e, yL(e, o, ay(this, "style." + e, t))).each(wL(this._id, e)) : this.styleTween(e, vL(e, o, t), r).on("end.style." + e, null);
}
function _L(e, t, r) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), r);
  };
}
function bL(e, t, r) {
  var o, s;
  function a() {
    var l = t.apply(this, arguments);
    return l !== s && (o = (s = l) && _L(e, l, r)), o;
  }
  return a._value = t, a;
}
function SL(e, t, r) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, bL(e, t, r ?? ""));
}
function EL(e) {
  return function() {
    this.textContent = e;
  };
}
function CL(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function kL(e) {
  return this.tween("text", typeof e == "function" ? CL(ay(this, "text", e)) : EL(e == null ? "" : e + ""));
}
function RL(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function NL(e) {
  var t, r;
  function o() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && RL(s)), t;
  }
  return o._value = e, o;
}
function PL(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, NL(e));
}
function TL() {
  for (var e = this._name, t = this._id, r = mR(), o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = yn(f, t);
        iu(f, e, r, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Yn(o, this._parents, e, r);
}
function AL() {
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
var IL = 0;
function Yn(e, t, r, o) {
  this._groups = e, this._parents = t, this._name = r, this._id = o;
}
function mR() {
  return ++IL;
}
var Wn = Ls.prototype;
Yn.prototype = {
  constructor: Yn,
  select: dL,
  selectAll: hL,
  selectChild: Wn.selectChild,
  selectChildren: Wn.selectChildren,
  filter: iL,
  merge: sL,
  selection: gL,
  transition: TL,
  call: Wn.call,
  nodes: Wn.nodes,
  node: Wn.node,
  size: Wn.size,
  empty: Wn.empty,
  each: Wn.each,
  on: uL,
  attr: VO,
  attrTween: YO,
  style: xL,
  styleTween: SL,
  text: kL,
  textTween: PL,
  remove: fL,
  tween: jO,
  delay: QO,
  duration: eL,
  ease: nL,
  easeVarying: oL,
  end: AL,
  [Symbol.iterator]: Wn[Symbol.iterator]
};
function ML(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var OL = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ML
};
function LL(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function jL(e) {
  var t, r;
  e instanceof Yn ? (t = e._id, e = e._name) : (t = mR(), (r = OL).time = iy(), e = e == null ? null : e + "");
  for (var o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && iu(f, e, t, d, l, r || LL(f, t));
  return new Yn(o, this._parents, e, t);
}
Ls.prototype.interrupt = MO;
Ls.prototype.transition = jL;
const gl = (e) => () => e;
function DL(e, {
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
var su = new Gn(1, 0, 0);
vR.prototype = Gn.prototype;
function vR(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return su;
  return e.__zoom;
}
function Vf(e) {
  e.stopImmediatePropagation();
}
function fs(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function qL(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function zL() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Hx() {
  return this.__zoom || su;
}
function FL(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function $L() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function BL(e, t, r) {
  var o = e.invertX(t[0][0]) - r[0][0], s = e.invertX(t[1][0]) - r[1][0], a = e.invertY(t[0][1]) - r[0][1], l = e.invertY(t[1][1]) - r[1][1];
  return e.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function yR() {
  var e = qL, t = zL, r = BL, o = FL, s = $L, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Pl, d = nu("start", "zoom", "end"), h, g, m, w = 500, E = 150, y = 0, x = 10;
  function S(L) {
    L.property("__zoom", Hx).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", G).filter(s).on("touchstart.zoom", B).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(L, H, $, Y) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", Hx), L !== M ? N(L, H, $, Y) : M.interrupt().each(function() {
      T(this, arguments).event(Y).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, S.scaleBy = function(L, H, $, Y) {
    S.scaleTo(L, function() {
      var M = this.__zoom.k, q = typeof H == "function" ? H.apply(this, arguments) : H;
      return M * q;
    }, $, Y);
  }, S.scaleTo = function(L, H, $, Y) {
    S.transform(L, function() {
      var M = t.apply(this, arguments), q = this.__zoom, Q = $ == null ? k(M) : typeof $ == "function" ? $.apply(this, arguments) : $, j = q.invert(Q), W = typeof H == "function" ? H.apply(this, arguments) : H;
      return r(_(C(q, W), Q, j), M, l);
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
      var q = t.apply(this, arguments), Q = this.__zoom, j = Y == null ? k(q) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return r(su.translate(j[0], j[1]).scale(Q.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), q, l);
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
      T(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var M = this, q = arguments, Q = T(M, q).event(Y), j = t.apply(M, q), W = $ == null ? k(j) : typeof $ == "function" ? $.apply(M, q) : $, ie = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), F = M.__zoom, Z = typeof H == "function" ? H.apply(M, q) : H, ee = f(F.invert(W).concat(ie / F.k), Z.invert(W).concat(ie / Z.k));
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
        new DL(L, {
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
    var $ = T(this, H).event(L), Y = this.__zoom, M = Math.max(a[0], Math.min(a[1], Y.k * Math.pow(2, o.apply(this, arguments)))), q = fn(L);
    if ($.wheel)
      ($.mouse[0][0] !== q[0] || $.mouse[0][1] !== q[1]) && ($.mouse[1] = Y.invert($.mouse[0] = q)), clearTimeout($.wheel);
    else {
      if (Y.k === M) return;
      $.mouse = [q, Y.invert(q)], Il(this), $.start();
    }
    fs(L), $.wheel = setTimeout(Q, E), $.zoom("mouse", r(_(C(Y, M), $.mouse[0], $.mouse[1]), $.extent, l));
    function Q() {
      $.wheel = null, $.end();
    }
  }
  function D(L, ...H) {
    if (m || !e.apply(this, arguments)) return;
    var $ = L.currentTarget, Y = T(this, H, !0).event(L), M = Dt(L.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ie, !0), q = fn(L, $), Q = L.clientX, j = L.clientY;
    tR(L.view), Vf(L), Y.mouse = [q, this.__zoom.invert(q)], Il(this), Y.start();
    function W(F) {
      if (fs(F), !Y.moved) {
        var Z = F.clientX - Q, ee = F.clientY - j;
        Y.moved = Z * Z + ee * ee > y;
      }
      Y.event(F).zoom("mouse", r(_(Y.that.__zoom, Y.mouse[0] = fn(F, $), Y.mouse[1]), Y.extent, l));
    }
    function ie(F) {
      M.on("mousemove.zoom mouseup.zoom", null), nR(F.view, Y.moved), fs(F), Y.event(F).end();
    }
  }
  function G(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, Y = fn(L.changedTouches ? L.changedTouches[0] : L, this), M = $.invert(Y), q = $.k * (L.shiftKey ? 0.5 : 2), Q = r(_(C($, q), Y, M), t.apply(this, H), l);
      fs(L), u > 0 ? Dt(this).transition().duration(u).call(N, Q, Y, L) : Dt(this).call(S.transform, Q, Y, L);
    }
  }
  function B(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = L.touches, Y = $.length, M = T(this, H, L.changedTouches.length === Y).event(L), q, Q, j, W;
      for (Vf(L), Q = 0; Q < Y; ++Q)
        j = $[Q], W = fn(j, this), W = [W, this.__zoom.invert(W), j.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== W[2] && (M.touch1 = W, M.taps = 0) : (M.touch0 = W, q = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), q && (M.taps < 2 && (g = W[0], h = setTimeout(function() {
        h = null;
      }, w)), Il(this), M.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var $ = T(this, H).event(L), Y = L.changedTouches, M = Y.length, q, Q, j, W;
      for (fs(L), q = 0; q < M; ++q)
        Q = Y[q], j = fn(Q, this), $.touch0 && $.touch0[2] === Q.identifier ? $.touch0[0] = j : $.touch1 && $.touch1[2] === Q.identifier && ($.touch1[0] = j);
      if (Q = $.that.__zoom, $.touch1) {
        var ie = $.touch0[0], F = $.touch0[1], Z = $.touch1[0], ee = $.touch1[1], K = (K = Z[0] - ie[0]) * K + (K = Z[1] - ie[1]) * K, te = (te = ee[0] - F[0]) * te + (te = ee[1] - F[1]) * te;
        Q = C(Q, Math.sqrt(K / te)), j = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], W = [(F[0] + ee[0]) / 2, (F[1] + ee[1]) / 2];
      } else if ($.touch0) j = $.touch0[0], W = $.touch0[1];
      else return;
      $.zoom("touch", r(_(Q, j, W), $.extent, l));
    }
  }
  function X(L, ...H) {
    if (this.__zooming) {
      var $ = T(this, H).event(L), Y = L.changedTouches, M = Y.length, q, Q;
      for (Vf(L), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, w), q = 0; q < M; ++q)
        Q = Y[q], $.touch0 && $.touch0[2] === Q.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Q.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Q = fn(Q, this), Math.hypot(g[0] - Q[0], g[1] - Q[1]) < x)) {
        var j = Dt(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : gl(+L), S) : o;
  }, S.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : gl(!!L), S) : e;
  }, S.touchable = function(L) {
    return arguments.length ? (s = typeof L == "function" ? L : gl(!!L), S) : s;
  }, S.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : gl([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), S) : t;
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
}, Cs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], wR = ["Enter", " ", "Escape"], xR = {
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
const _R = {
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
var Vl;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Vl || (Vl = {}));
var me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(me || (me = {}));
const Wx = {
  [me.Left]: me.Right,
  [me.Right]: me.Left,
  [me.Top]: me.Bottom,
  [me.Bottom]: me.Top
};
function bR(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const SR = (e) => "id" in e && "source" in e && "target" in e, VL = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ly = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ds = (e, t = [0, 0]) => {
  const { width: r, height: o } = Qn(e), s = e.origin ?? t, a = r * s[0], l = o * s[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, HL = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const r = e.reduce((o, s) => {
    const a = typeof s == "string";
    let l = !t.nodeLookup && !a ? s : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(s) : ly(s) ? s : t.nodeLookup.get(s.id));
    const u = l ? Hl(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return au(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return lu(r);
}, qs = (e, t = {}) => {
  let r = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((s) => {
    (t.filter === void 0 || t.filter(s)) && (r = au(r, Hl(s)), o = !0);
  }), o ? lu(r) : { x: 0, y: 0, width: 0, height: 0 };
}, uy = (e, t, [r, o, s] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...Fs(t, [r, o, s]),
    width: t.width / s,
    height: t.height / s
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: g = !0, hidden: m = !1 } = d;
    if (l && !g || m)
      continue;
    const w = h.width ?? d.width ?? d.initialWidth ?? null, E = h.height ?? d.height ?? d.initialHeight ?? null, y = Rs(u, ii(d)), x = (w ?? 0) * (E ?? 0), S = a && y > 0;
    (!d.internals.handleBounds || S || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, WL = (e, t) => {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    r.add(o.id);
  }), t.filter((o) => r.has(o.source) || r.has(o.target));
};
function UL(e, t) {
  const r = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((s) => s.id)) : null;
  return e.forEach((s) => {
    s.measured.width && s.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !s.hidden) && (!o || o.has(s.id)) && r.set(s.id, s);
  }), r;
}
async function GL({ nodes: e, width: t, height: r, panZoom: o, minZoom: s, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = UL(e, l), f = qs(u), d = cy(f, t, r, (l == null ? void 0 : l.minZoom) ?? s, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function ER({ nodeId: e, nextPosition: t, nodeLookup: r, nodeOrigin: o = [0, 0], nodeExtent: s, onError: a }) {
  const l = r.get(e), u = l.parentId ? r.get(l.parentId) : void 0, { x: f, y: d } = u ? u.internals.positionAbsolute : { x: 0, y: 0 }, h = l.origin ?? o;
  let g = l.extent || s;
  if (l.extent === "parent" && !l.expandParent)
    if (!u)
      a == null || a("005", An.error005());
    else {
      const w = u.measured.width, E = u.measured.height;
      w && E && (g = [
        [f, d],
        [f + w, d + E]
      ]);
    }
  else u && si(l.extent) && (g = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = si(g) ? io(t, g, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", An.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function YL({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: r, edges: o, onBeforeDelete: s }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of r) {
    if (m.deletable === !1)
      continue;
    const w = a.has(m.id), E = !w && m.parentId && l.find((y) => y.id === m.parentId);
    (w || E) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = WL(l, f);
  for (const m of f)
    u.has(m.id) && !h.find((E) => E.id === m.id) && h.push(m);
  if (!s)
    return {
      edges: h,
      nodes: l
    };
  const g = await s({
    nodes: l,
    edges: h
  });
  return typeof g == "boolean" ? g ? { edges: h, nodes: l } : { edges: [], nodes: [] } : g;
}
const oi = (e, t = 0, r = 1) => Math.min(Math.max(e, t), r), io = (e = { x: 0, y: 0 }, t, r) => ({
  x: oi(e.x, t[0][0], t[1][0] - ((r == null ? void 0 : r.width) ?? 0)),
  y: oi(e.y, t[0][1], t[1][1] - ((r == null ? void 0 : r.height) ?? 0))
});
function CR(e, t, r) {
  const { width: o, height: s } = Qn(r), { x: a, y: l } = r.internals.positionAbsolute;
  return io(e, [
    [a, l],
    [a + o, l + s]
  ], t);
}
const Ux = (e, t, r) => e < t ? oi(Math.abs(e - t), 1, t) / t : e > r ? -oi(Math.abs(e - r), 1, t) / t : 0, kR = (e, t, r = 15, o = 40) => {
  const s = Ux(e.x, o, t.width - o) * r, a = Ux(e.y, o, t.height - o) * r;
  return [s, a];
}, au = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Lv = ({ x: e, y: t, width: r, height: o }) => ({
  x: e,
  y: t,
  x2: e + r,
  y2: t + o
}), lu = ({ x: e, y: t, x2: r, y2: o }) => ({
  x: e,
  y: t,
  width: r - e,
  height: o - t
}), ii = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = ly(e) ? e.internals.positionAbsolute : Ds(e, t);
  return {
    x: r,
    y: o,
    width: ((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Hl = (e, t = [0, 0]) => {
  var s, a;
  const { x: r, y: o } = ly(e) ? e.internals.positionAbsolute : Ds(e, t);
  return {
    x: r,
    y: o,
    x2: r + (((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, RR = (e, t) => lu(au(Lv(e), Lv(t))), Rs = (e, t) => {
  const r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(r * o);
}, Gx = (e) => hn(e.width) && hn(e.height) && hn(e.x) && hn(e.y), hn = (e) => !isNaN(e) && isFinite(e), KL = (e, t) => {
}, zs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Fs = ({ x: e, y: t }, [r, o, s], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - r) / s,
    y: (t - o) / s
  };
  return a ? zs(u, l) : u;
}, Wl = ({ x: e, y: t }, [r, o, s]) => ({
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
function XL(e, t, r) {
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
function QL(e, t, r, o, s, a) {
  const { x: l, y: u } = Wl(e, [t, r, o]), { x: f, y: d } = Wl({ x: e.x + e.width, y: e.y + e.height }, [t, r, o]), h = s - f, g = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(g)
  };
}
const cy = (e, t, r, o, s, a) => {
  const l = XL(a, t, r), u = (t - l.x) / e.width, f = (r - l.y) / e.height, d = Math.min(u, f), h = oi(d, o, s), g = e.x + e.width / 2, m = e.y + e.height / 2, w = t / 2 - g * h, E = r / 2 - m * h, y = QL(e, w, E, h, t, r), x = {
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
}, Ns = () => {
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
function NR(e) {
  var t, r;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function PR(e, t = { width: 0, height: 0 }, r, o, s) {
  const a = { ...e }, l = o.get(r);
  if (l) {
    const u = l.origin || s;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function Yx(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const r of e)
    if (!t.has(r))
      return !1;
  return !0;
}
function ZL() {
  let e, t;
  return { promise: new Promise((o, s) => {
    e = o, t = s;
  }), resolve: e, reject: t };
}
function JL(e) {
  return { ...xR, ...e || {} };
}
function xs(e, { snapGrid: t = [0, 0], snapToGrid: r = !1, transform: o, containerBounds: s }) {
  const { x: a, y: l } = pn(e), u = Fs({ x: a - ((s == null ? void 0 : s.left) ?? 0), y: l - ((s == null ? void 0 : s.top) ?? 0) }, o), { x: f, y: d } = r ? zs(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const fy = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), TR = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, ej = ["INPUT", "SELECT", "TEXTAREA"];
function AR(e) {
  var o, s;
  const t = ((s = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : s[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : ej.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const IR = (e) => "clientX" in e, pn = (e, t) => {
  var a, l;
  const r = IR(e), o = r ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, s = r ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Kx = (e, t, r, o, s) => {
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
      ...fy(l)
    };
  });
};
function MR({ sourceX: e, sourceY: t, targetX: r, targetY: o, sourceControlX: s, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + s * 0.375 + l * 0.375 + r * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), g = Math.abs(d - t);
  return [f, d, h, g];
}
function ml(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Xx({ pos: e, x1: t, y1: r, x2: o, y2: s, c: a }) {
  switch (e) {
    case me.Left:
      return [t - ml(t - o, a), r];
    case me.Right:
      return [t + ml(o - t, a), r];
    case me.Top:
      return [t, r - ml(r - s, a)];
    case me.Bottom:
      return [t, r + ml(s - r, a)];
  }
}
function OR({ sourceX: e, sourceY: t, sourcePosition: r = me.Bottom, targetX: o, targetY: s, targetPosition: a = me.Top, curvature: l = 0.25 }) {
  const [u, f] = Xx({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s,
    c: l
  }), [d, h] = Xx({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t,
    c: l
  }), [g, m, w, E] = MR({
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
    g,
    m,
    w,
    E
  ];
}
function LR({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, s, l];
}
function tj({ sourceNode: e, targetNode: t, selected: r = !1, zIndex: o, elevateOnSelect: s = !1 }) {
  if (o !== void 0)
    return o;
  const a = s && r ? 1e3 : 0, l = Math.max(e.parentId || s && e.selected ? e.internals.z : 0, t.parentId || s && t.selected ? t.internals.z : 0);
  return a + l;
}
function nj({ sourceNode: e, targetNode: t, width: r, height: o, transform: s }) {
  const a = au(Hl(e), Hl(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: r / s[2],
    height: o / s[2]
  };
  return Rs(l, lu(a)) > 0;
}
const rj = ({ source: e, sourceHandle: t, target: r, targetHandle: o }) => `xy-edge__${e}${t || ""}-${r}${o || ""}`, oj = (e, t) => t.some((r) => r.source === e.source && r.target === e.target && (r.sourceHandle === e.sourceHandle || !r.sourceHandle && !e.sourceHandle) && (r.targetHandle === e.targetHandle || !r.targetHandle && !e.targetHandle)), ij = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let r;
  return SR(e) ? r = { ...e } : r = {
    ...e,
    id: rj(e)
  }, oj(r, t) ? t : (r.sourceHandle === null && delete r.sourceHandle, r.targetHandle === null && delete r.targetHandle, t.concat(r));
};
function jR({ sourceX: e, sourceY: t, targetX: r, targetY: o }) {
  const [s, a, l, u] = LR({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o
  });
  return [`M ${e},${t}L ${r},${o}`, s, a, l, u];
}
const Qx = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, sj = ({ source: e, sourcePosition: t = me.Bottom, target: r }) => t === me.Left || t === me.Right ? e.x < r.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < r.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Zx = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function aj({ source: e, sourcePosition: t = me.Bottom, target: r, targetPosition: o = me.Top, center: s, offset: a, stepPosition: l }) {
  const u = Qx[t], f = Qx[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: r.x + f.x * a, y: r.y + f.y * a }, g = sj({
    source: d,
    sourcePosition: t,
    target: h
  }), m = g.x !== 0 ? "x" : "y", w = g[m];
  let E = [], y, x;
  const S = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, k] = LR({
    sourceX: e.x,
    sourceY: e.y,
    targetX: r.x,
    targetY: r.y
  });
  if (u[m] * f[m] === -1) {
    m === "x" ? (y = s.x ?? d.x + (h.x - d.x) * l, x = s.y ?? (d.y + h.y) / 2) : (y = s.x ?? (d.x + h.x) / 2, x = s.y ?? d.y + (h.y - d.y) * l);
    const T = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], A = [
      { x: d.x, y: x },
      { x: h.x, y: x }
    ];
    u[m] === w ? E = m === "x" ? T : A : E = m === "x" ? A : T;
  } else {
    const T = [{ x: d.x, y: h.y }], A = [{ x: h.x, y: d.y }];
    if (m === "x" ? E = u.x === w ? A : T : E = u.y === w ? T : A, t === o) {
      const V = Math.abs(e[m] - r[m]);
      if (V <= a) {
        const X = Math.min(a - 1, a - V);
        u[m] === w ? S[m] = (d[m] > e[m] ? -1 : 1) * X : C[m] = (h[m] > r[m] ? -1 : 1) * X;
      }
    }
    if (t !== o) {
      const V = m === "x" ? "y" : "x", X = u[m] === f[V], L = d[V] > h[V], H = d[V] < h[V];
      (u[m] === 1 && (!X && L || X && H) || u[m] !== 1 && (!X && H || X && L)) && (E = m === "x" ? T : A);
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
function lj(e, t, r, o) {
  const s = Math.min(Zx(e, t) / 2, Zx(t, r) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === r.x || e.y === l && l === r.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < r.x ? -1 : 1, h = e.y < r.y ? 1 : -1;
    return `L ${a + s * d},${l}Q ${a},${l} ${a},${l + s * h}`;
  }
  const u = e.x < r.x ? 1 : -1, f = e.y < r.y ? -1 : 1;
  return `L ${a},${l + s * f}Q ${a},${l} ${a + s * u},${l}`;
}
function jv({ sourceX: e, sourceY: t, sourcePosition: r = me.Bottom, targetX: o, targetY: s, targetPosition: a = me.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [g, m, w, E, y] = aj({
    source: { x: e, y: t },
    sourcePosition: r,
    target: { x: o, y: s },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [g.reduce((S, C, _) => {
    let k = "";
    return _ > 0 && _ < g.length - 1 ? k = lj(g[_ - 1], C, g[_ + 1], l) : k = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, S += k, S;
  }, ""), m, w, E, y];
}
function Jx(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function uj(e) {
  var g;
  const { sourceNode: t, targetNode: r } = e;
  if (!Jx(t) || !Jx(r))
    return null;
  const o = t.internals.handleBounds || e_(t.handles), s = r.internals.handleBounds || e_(r.handles), a = t_((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = t_(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === ri.Strict ? (s == null ? void 0 : s.target) ?? [] : ((s == null ? void 0 : s.target) ?? []).concat((s == null ? void 0 : s.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (g = e.onError) == null || g.call(e, "008", An.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const u = (a == null ? void 0 : a.position) || me.Bottom, f = (l == null ? void 0 : l.position) || me.Top, d = Ps(t, a, u), h = Ps(r, l, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: u,
    targetPosition: f
  };
}
function e_(e) {
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
function Ps(e, t, r = me.Left, o = !1) {
  const s = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: l, height: u } = t ?? Qn(e);
  if (o)
    return { x: s + l / 2, y: a + u / 2 };
  switch ((t == null ? void 0 : t.position) ?? r) {
    case me.Top:
      return { x: s + l / 2, y: a };
    case me.Right:
      return { x: s + l, y: a + u / 2 };
    case me.Bottom:
      return { x: s + l / 2, y: a + u };
    case me.Left:
      return { x: s, y: a + u / 2 };
  }
}
function t_(e, t) {
  return e && (t ? e.find((r) => r.id === t) : e[0]) || null;
}
function Dv(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function cj(e, { id: t, defaultColor: r, defaultMarkerStart: o, defaultMarkerEnd: s }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || s].forEach((f) => {
    if (f && typeof f == "object") {
      const d = Dv(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || r, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const DR = 1e3, fj = 10, dy = {
  nodeOrigin: [0, 0],
  nodeExtent: Cs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, dj = {
  ...dy,
  checkEquality: !0
};
function hy(e, t) {
  const r = { ...e };
  for (const o in t)
    t[o] !== void 0 && (r[o] = t[o]);
  return r;
}
function hj(e, t, r) {
  const o = hy(dy, r);
  for (const s of e.values())
    if (s.parentId)
      py(s, e, t, o);
    else {
      const a = Ds(s, o.nodeOrigin), l = si(s.extent) ? s.extent : o.nodeExtent, u = io(a, l, Qn(s));
      s.internals.positionAbsolute = u;
    }
}
function pj(e, t) {
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
function qv(e, t, r, o) {
  var d, h;
  const s = hy(dj, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = s != null && s.elevateNodesOnSelect ? DR : 0;
  t.clear(), r.clear();
  for (const g of e) {
    let m = u.get(g.id);
    if (s.checkEquality && g === (m == null ? void 0 : m.internals.userNode))
      t.set(g.id, m);
    else {
      const w = Ds(g, s.nodeOrigin), E = si(g.extent) ? g.extent : s.nodeExtent, y = io(w, E, Qn(g));
      m = {
        ...s.defaults,
        ...g,
        measured: {
          width: (d = g.measured) == null ? void 0 : d.width,
          height: (h = g.measured) == null ? void 0 : h.height
        },
        internals: {
          positionAbsolute: y,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: pj(g, m),
          z: qR(g, f),
          userNode: g
        }
      }, t.set(g.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), g.parentId && py(m, t, r, o, a);
  }
  return l;
}
function gj(e, t) {
  if (!e.parentId)
    return;
  const r = t.get(e.parentId);
  r ? r.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function py(e, t, r, o, s) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = hy(dy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  gj(e, r), s && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++s.i, d.internals.z = d.internals.z + s.i * fj), s && d.internals.rootParentIndex !== void 0 && (s.i = d.internals.rootParentIndex);
  const h = a ? DR : 0, { x: g, y: m, z: w } = mj(e, d, l, u, h), { positionAbsolute: E } = e.internals, y = g !== E.x || m !== E.y;
  (y || w !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: g, y: m } : E,
      z: w
    }
  });
}
function qR(e, t) {
  return (hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function mj(e, t, r, o, s) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = Qn(e), f = Ds(e, r), d = si(e.extent) ? io(f, e.extent, u) : f;
  let h = io({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = CR(h, u, t));
  const g = qR(e, s), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= g ? m + 1 : g
  };
}
function gy(e, t, r, o = [0, 0]) {
  var l;
  const s = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? ii(f), h = RR(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var _;
    const h = f.internals.positionAbsolute, g = Qn(f), m = f.origin ?? o, w = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, E = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(g.width, Math.round(u.width)), x = Math.max(g.height, Math.round(u.height)), S = (y - g.width) * m[0], C = (x - g.height) * m[1];
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
    })), (g.width < u.width || g.height < u.height || w || E) && s.push({
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
function vj(e, t, r, o, s, a) {
  const l = o == null ? void 0 : o.querySelector(".xyflow__viewport");
  let u = !1;
  if (!l)
    return { changes: [], updatedInternals: u };
  const f = [], d = window.getComputedStyle(l), { m22: h } = new window.DOMMatrixReadOnly(d.transform), g = [];
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
    const E = fy(m.nodeElement), y = w.measured.width !== E.width || w.measured.height !== E.height;
    if (!!(E.width && E.height && (y || !w.internals.handleBounds || m.force))) {
      const S = m.nodeElement.getBoundingClientRect(), C = si(w.extent) ? w.extent : a;
      let { positionAbsolute: _ } = w.internals;
      w.parentId && w.extent === "parent" ? _ = CR(_, E, t.get(w.parentId)) : C && (_ = io(_, C, E));
      const k = {
        ...w,
        measured: E,
        internals: {
          ...w.internals,
          positionAbsolute: _,
          handleBounds: {
            source: Kx("source", m.nodeElement, S, h, w.id),
            target: Kx("target", m.nodeElement, S, h, w.id)
          }
        }
      };
      t.set(w.id, k), w.parentId && py(k, t, r, { nodeOrigin: s }), u = !0, y && (f.push({
        id: w.id,
        type: "dimensions",
        dimensions: E
      }), w.expandParent && w.parentId && g.push({
        id: w.id,
        parentId: w.parentId,
        rect: ii(k, s)
      }));
    }
  }
  if (g.length > 0) {
    const m = gy(g, t, r, s);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function yj({ delta: e, panZoom: t, transform: r, translateExtent: o, width: s, height: a }) {
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
function n_(e, t, r, o, s, a) {
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
function zR(e, t, r) {
  e.clear(), t.clear();
  for (const o of r) {
    const { source: s, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: s, target: a, sourceHandle: l, targetHandle: u }, d = `${s}-${l}--${a}-${u}`, h = `${a}-${u}--${s}-${l}`;
    n_("source", f, h, e, s, l), n_("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function FR(e, t) {
  if (!e.parentId)
    return !1;
  const r = t.get(e.parentId);
  return r ? r.selected ? !0 : FR(r, t) : !1;
}
function r_(e, t, r) {
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
function wj(e, t, r, o) {
  const s = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !FR(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
function Hf({ nodeId: e, dragItems: t, nodeLookup: r, dragging: o = !0 }) {
  var l, u, f;
  const s = [];
  for (const [d, h] of t) {
    const g = (l = r.get(d)) == null ? void 0 : l.internals.userNode;
    g && s.push({
      ...g,
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
function xj({ dragItems: e, snapGrid: t, x: r, y: o }) {
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
function _j({ onNodeMouseDown: e, getStoreItems: t, onDragStart: r, onDrag: o, onDragStop: s }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, g = !1, m = null, w = !1, E = !1, y = null;
  function x({ noDragClassName: C, handleSelector: _, domNode: k, isSelectable: N, nodeId: T, nodeClickDistance: A = 0 }) {
    m = Dt(k);
    function O({ x: V, y: X }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: $, snapToGrid: Y, nodeOrigin: M, onNodeDrag: q, onSelectionDrag: Q, onError: j, updateNodePositions: W } = t();
      a = { x: V, y: X };
      let ie = !1;
      const F = u.size > 1, Z = F && H ? Lv(qs(u)) : null, ee = F && Y ? xj({
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
        } : zs(se, $));
        let ae = null;
        if (F && H && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, be = pe.x - Z.x + H[0][0], ve = pe.x + te.measured.width - Z.x2 + H[1][0], Ne = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [be, Ne],
            [ve, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = ER({
          nodeId: K,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: M,
          onError: j
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (W(u, !0), y && (o || q || !T && Q))) {
        const [K, te] = Hf({
          nodeId: T,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, K, te), q == null || q(y, K, te), T || Q == null || Q(y, te);
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
      const [$, Y] = kR(d, h, L);
      ($ !== 0 || Y !== 0) && (a.x = (a.x ?? 0) - $ / V[2], a.y = (a.y ?? 0) - Y / V[2], await X({ x: $, y: Y }) && O(a)), l = requestAnimationFrame(D);
    }
    function G(V) {
      var F;
      const { nodeLookup: X, multiSelectionActive: L, nodesDraggable: H, transform: $, snapGrid: Y, snapToGrid: M, selectNodesOnDrag: q, onNodeDragStart: Q, onSelectionDragStart: j, unselectNodesAndEdges: W } = t();
      g = !0, (!q || !N) && !L && T && ((F = X.get(T)) != null && F.selected || W()), N && q && T && (e == null || e(T));
      const ie = xs(V.sourceEvent, { transform: $, snapGrid: Y, snapToGrid: M, containerBounds: h });
      if (a = ie, u = wj(X, H, ie, T), u.size > 0 && (r || Q || !T && j)) {
        const [Z, ee] = Hf({
          nodeId: T,
          dragItems: u,
          nodeLookup: X
        });
        r == null || r(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), T || j == null || j(V.sourceEvent, ee);
      }
    }
    const B = rR().clickDistance(A).on("start", (V) => {
      const { domNode: X, nodeDragThreshold: L, transform: H, snapGrid: $, snapToGrid: Y } = t();
      h = (X == null ? void 0 : X.getBoundingClientRect()) || null, w = !1, E = !1, y = V.sourceEvent, L === 0 && G(V), a = xs(V.sourceEvent, { transform: H, snapGrid: $, snapToGrid: Y, containerBounds: h }), d = pn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: X, transform: L, snapGrid: H, snapToGrid: $, nodeDragThreshold: Y, nodeLookup: M } = t(), q = xs(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: $, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !M.has(T)) && (w = !0), !w) {
        if (!f && X && g && (f = !0, D()), !g) {
          const Q = pn(V.sourceEvent, h), j = Q.x - d.x, W = Q.y - d.y;
          Math.sqrt(j * j + W * W) > Y && G(V);
        }
        (a.x !== q.xSnapped || a.y !== q.ySnapped) && u && g && (d = pn(V.sourceEvent, h), O(q));
      }
    }).on("end", (V) => {
      if (!(!g || w) && (f = !1, g = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: X, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: $ } = t();
        if (E && (L(u, !1), E = !1), s || H || !T && $) {
          const [Y, M] = Hf({
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
      return !V.button && (!C || !r_(X, `.${C}`, k)) && (!_ || r_(X, _, k));
    });
    m.call(B);
  }
  function S() {
    m == null || m.on(".drag", null);
  }
  return {
    update: x,
    destroy: S
  };
}
function bj(e, t, r) {
  const o = [], s = {
    x: e.x - r,
    y: e.y - r,
    width: r * 2,
    height: r * 2
  };
  for (const a of t.values())
    Rs(s, ii(a)) > 0 && o.push(a);
  return o;
}
const Sj = 250;
function Ej(e, t, r, o) {
  var u, f;
  let s = [], a = 1 / 0;
  const l = bj(e, r, t + Sj);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const g of h) {
      if (o.nodeId === g.nodeId && o.type === g.type && o.id === g.id)
        continue;
      const { x: m, y: w } = Ps(d, g, g.position, !0), E = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(w - e.y, 2));
      E > t || (E < a ? (s = [{ ...g, x: m, y: w }], a = E) : E === a && s.push({ ...g, x: m, y: w }));
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
function $R(e, t, r, o, s, a = !1) {
  var d, h, g;
  const l = o.get(e);
  if (!l)
    return null;
  const u = s === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((g = l.internals.handleBounds) == null ? void 0 : g.target) ?? []], f = (r ? u == null ? void 0 : u.find((m) => m.id === r) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...Ps(l, f, f.position, !0) } : f;
}
function BR(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Cj(e, t) {
  let r = null;
  return t ? r = !0 : e && !t && (r = !1), r;
}
const VR = () => !0;
function kj(e, { connectionMode: t, connectionRadius: r, handleId: o, nodeId: s, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: g, panBy: m, cancelConnection: w, onConnectStart: E, onConnect: y, onConnectEnd: x, isValidConnection: S = VR, onReconnectEnd: C, updateConnection: _, getTransform: k, getFromHandle: N, autoPanSpeed: T, dragThreshold: A = 1, handleDomNode: O }) {
  const D = TR(e.target);
  let G = 0, B;
  const { x: V, y: X } = pn(e), L = BR(a, O), H = u == null ? void 0 : u.getBoundingClientRect();
  let $ = !1;
  if (!H || !L)
    return;
  const Y = $R(s, L, o, f, t);
  if (!Y)
    return;
  let M = pn(e, H), q = !1, Q = null, j = !1, W = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = kR(M, H, T);
    m({ x: ce, y: de }), G = requestAnimationFrame(ie);
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
    from: Ps(Z, F, me.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: Wx[F.position],
    toNode: null,
    pointer: M
  };
  function te() {
    $ = !0, _(K), E == null || E(e, { nodeId: s, handleId: o, handleType: L });
  }
  A === 0 && te();
  function se(ce) {
    if (!$) {
      const { x: ve, y: Ne } = pn(ce), Ee = ve - V, Qe = Ne - X;
      if (!(Ee * Ee + Qe * Qe > A * A))
        return;
      te();
    }
    if (!N() || !F) {
      ae(ce);
      return;
    }
    const de = k();
    M = pn(ce, H), B = Ej(Fs(M, de, !1, [1, 1]), r, f, F), q || (ie(), q = !0);
    const pe = HR(ce, {
      handle: B,
      connectionMode: t,
      fromNodeId: s,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: S,
      doc: D,
      lib: d,
      flowId: g,
      nodeLookup: f
    });
    W = pe.handleDomNode, Q = pe.connection, j = Cj(!!B, pe.isValid);
    const be = {
      // from stays the same
      ...K,
      isValid: j,
      to: pe.toHandle && j ? Wl({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: j && pe.toHandle ? pe.toHandle.position : Wx[F.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    _(be), K = be;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if ($) {
        (B || W) && Q && j && (y == null || y(Q));
        const { inProgress: de, ...pe } = K, be = {
          ...pe,
          toPosition: K.toHandle ? K.toPosition : null
        };
        x == null || x(ce, be), a && (C == null || C(ce, be));
      }
      w(), cancelAnimationFrame(G), q = !1, j = !1, Q = null, W = null, D.removeEventListener("mousemove", se), D.removeEventListener("mouseup", ae), D.removeEventListener("touchmove", se), D.removeEventListener("touchend", ae);
    }
  }
  D.addEventListener("mousemove", se), D.addEventListener("mouseup", ae), D.addEventListener("touchmove", se), D.addEventListener("touchend", ae);
}
function HR(e, { handle: t, connectionMode: r, fromNodeId: o, fromHandleId: s, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = VR, nodeLookup: h }) {
  const g = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: w, y: E } = pn(e), y = l.elementFromPoint(w, E), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, S = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = BR(void 0, x), _ = x.getAttribute("data-nodeid"), k = x.getAttribute("data-handleid"), N = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!_ || !C)
      return S;
    const A = {
      source: g ? _ : o,
      sourceHandle: g ? k : s,
      target: g ? o : _,
      targetHandle: g ? s : k
    };
    S.connection = A;
    const D = N && T && (r === ri.Strict ? g && C === "source" || !g && C === "target" : _ !== o || k !== s);
    S.isValid = D && d(A), S.toHandle = $R(_, C, k, h, r, !0);
  }
  return S;
}
const zv = {
  onPointerDown: kj,
  isValid: HR
};
function Rj({ domNode: e, panZoom: t, getTransform: r, getViewScale: o }) {
  const s = Dt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: g = !0, zoomable: m = !0, inversePan: w = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = r(), N = _.sourceEvent.ctrlKey && Ns() ? 10 : 1, T = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = k[2] * Math.pow(2, T * N);
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
      ], T = [N[0] - y[0], N[1] - y[1]];
      y = N;
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
    }, C = yR().on("start", x).on("zoom", g ? S : null).on("zoom.wheel", m ? E : null);
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
const uu = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Wf = ({ x: e, y: t, zoom: r }) => su.translate(e, t).scale(r), Ko = (e, t) => e.target.closest(`.${t}`), WR = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Nj = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Uf = (e, t = 0, r = Nj, o = () => {
}) => {
  const s = typeof t == "number" && t > 0;
  return s || o(), s ? e.transition().duration(t).ease(r).on("end", o) : e;
}, UR = (e) => {
  const t = e.ctrlKey && Ns() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Pj({ zoomPanValues: e, noWheelClassName: t, d3Selection: r, d3Zoom: o, panOnScrollMode: s, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (Ko(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const g = r.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = fn(h), S = UR(h), C = g * Math.pow(2, S);
      o.scaleTo(r, C, x, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let w = s === no.Vertical ? 0 : h.deltaX * m, E = s === no.Horizontal ? 0 : h.deltaY * m;
    !Ns() && h.shiftKey && s !== no.Vertical && (w = h.deltaY * m, E = 0), o.translateBy(
      r,
      -(w / g) * a,
      -(E / g) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = uu(r.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function Tj({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: r }) {
  return function(o, s) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = Ko(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), r.call(this, o, s);
  };
}
function Aj({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: r }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const s = uu(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), r && (r == null || r(o.sourceEvent, s));
  };
}
function Ij({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: r, onTransformChange: o, onPanZoom: s }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(r && WR(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), s && !((u = a.sourceEvent) != null && u.internal) && (s == null || s(a.sourceEvent, uu(a.transform)));
  };
}
function Mj({ zoomPanValues: e, panOnDrag: t, panOnScroll: r, onDraggingChange: o, onPanZoomEnd: s, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && WR(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), s)) {
      const f = uu(l.transform);
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
function Oj({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: r, panOnDrag: o, panOnScroll: s, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (g) => {
    var x;
    const m = e || t, w = r && g.ctrlKey, E = g.type === "wheel";
    if (g.button === 1 && g.type === "mousedown" && (Ko(g, `${d}-flow__node`) || Ko(g, `${d}-flow__edge`)))
      return !0;
    if (!o && !m && !s && !a && !r || l || h && !E || Ko(g, u) && E || Ko(g, f) && (!E || s && E && !e) || !r && g.ctrlKey && E)
      return !1;
    if (!r && g.type === "touchstart" && ((x = g.touches) == null ? void 0 : x.length) > 1)
      return g.preventDefault(), !1;
    if (!m && !s && !w && E || !o && (g.type === "mousedown" || g.type === "touchstart") || Array.isArray(o) && !o.includes(g.button) && g.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(g.button) || !g.button || g.button <= 1;
    return (!g.ctrlKey || E) && y;
  };
}
function Lj({ domNode: e, minZoom: t, maxZoom: r, translateExtent: o, viewport: s, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), g = yR().scaleExtent([t, r]).translateExtent(o), m = Dt(e).call(g);
  C({
    x: s.x,
    y: s.y,
    zoom: oi(s.zoom, t, r)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const w = m.on("wheel.zoom"), E = m.on("dblclick.zoom");
  g.wheelDelta(UR);
  function y(B, V) {
    return m ? new Promise((X) => {
      g == null || g.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Pl).transform(Uf(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: B, noPanClassName: V, onPaneContextMenu: X, userSelectionActive: L, panOnScroll: H, panOnDrag: $, panOnScrollMode: Y, panOnScrollSpeed: M, preventScrolling: q, zoomOnPinch: Q, zoomOnScroll: j, zoomOnDoubleClick: W, zoomActivationKeyPressed: ie, lib: F, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: K, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && S();
    const se = H && !ie && !L;
    g.clickDistance(te ? 1 / 0 : !hn(K) || K < 0 ? 0 : K);
    const ae = se ? Pj({
      zoomPanValues: d,
      noWheelClassName: B,
      d3Selection: m,
      d3Zoom: g,
      panOnScrollMode: Y,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : Tj({
      noWheelClassName: B,
      preventScrolling: q,
      d3ZoomHandler: w
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = Aj({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      g.on("start", de);
      const pe = Ij({
        zoomPanValues: d,
        panOnDrag: $,
        onPaneContextMenu: !!X,
        onPanZoom: a,
        onTransformChange: Z
      });
      g.on("zoom", pe);
      const be = Mj({
        zoomPanValues: d,
        panOnDrag: $,
        panOnScroll: H,
        onPaneContextMenu: X,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      g.on("end", be);
    }
    const ce = Oj({
      zoomActivationKeyPressed: ie,
      panOnDrag: $,
      zoomOnScroll: j,
      panOnScroll: H,
      zoomOnDoubleClick: W,
      zoomOnPinch: Q,
      userSelectionActive: L,
      noPanClassName: V,
      noWheelClassName: B,
      lib: F,
      connectionInProgress: ee
    });
    g.filter(ce), W ? m.on("dblclick.zoom", E) : m.on("dblclick.zoom", null);
  }
  function S() {
    g.on("zoom", null);
  }
  async function C(B, V, X) {
    const L = Wf(B), H = g == null ? void 0 : g.constrain()(L, V, X);
    return H && await y(H), new Promise(($) => $(H));
  }
  async function _(B, V) {
    const X = Wf(B);
    return await y(X, V), new Promise((L) => L(X));
  }
  function k(B) {
    if (m) {
      const V = Wf(B), X = m.property("__zoom");
      (X.k !== B.zoom || X.x !== B.x || X.y !== B.y) && (g == null || g.transform(m, V, null, { sync: !0 }));
    }
  }
  function N() {
    const B = m ? vR(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: B.x, y: B.y, zoom: B.k };
  }
  function T(B, V) {
    return m ? new Promise((X) => {
      g == null || g.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Pl).scaleTo(Uf(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function A(B, V) {
    return m ? new Promise((X) => {
      g == null || g.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Pl).scaleBy(Uf(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function O(B) {
    g == null || g.scaleExtent(B);
  }
  function D(B) {
    g == null || g.translateExtent(B);
  }
  function G(B) {
    const V = !hn(B) || B < 0 ? 0 : B;
    g == null || g.clickDistance(V);
  }
  return {
    update: x,
    destroy: S,
    setViewport: _,
    setViewportConstrained: C,
    getViewport: N,
    scaleTo: T,
    scaleBy: A,
    setScaleExtent: O,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: G
  };
}
var ai;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ai || (ai = {}));
function jj({ width: e, prevWidth: t, height: r, prevHeight: o, affectsX: s, affectsY: a }) {
  const l = e - t, u = r - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && s && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function o_(e) {
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
function vl(e, t, r) {
  return Math.max(0, t - e, e - r);
}
function i_(e, t) {
  return e ? !t : t;
}
function Dj(e, t, r, o, s, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: g } = t, m = h && g, { xSnapped: w, ySnapped: E } = r, { minWidth: y, maxWidth: x, minHeight: S, maxHeight: C } = o, { x: _, y: k, width: N, height: T, aspectRatio: A } = e;
  let O = Math.floor(h ? w - e.pointerX : 0), D = Math.floor(g ? E - e.pointerY : 0);
  const G = N + (f ? -O : O), B = T + (d ? -D : D), V = -a[0] * N, X = -a[1] * T;
  let L = vl(G, y, x), H = vl(B, S, C);
  if (l) {
    let M = 0, q = 0;
    f && O < 0 ? M = br(_ + O + V, l[0][0]) : !f && O > 0 && (M = Sr(_ + G + V, l[1][0])), d && D < 0 ? q = br(k + D + X, l[0][1]) : !d && D > 0 && (q = Sr(k + B + X, l[1][1])), L = Math.max(L, M), H = Math.max(H, q);
  }
  if (u) {
    let M = 0, q = 0;
    f && O > 0 ? M = Sr(_ + O, u[0][0]) : !f && O < 0 && (M = br(_ + G, u[1][0])), d && D > 0 ? q = Sr(k + D, u[0][1]) : !d && D < 0 && (q = br(k + B, u[1][1])), L = Math.max(L, M), H = Math.max(H, q);
  }
  if (s) {
    if (h) {
      const M = vl(G / A, S, C) * A;
      if (L = Math.max(L, M), l) {
        let q = 0;
        !f && !d || f && !d && m ? q = Sr(k + X + G / A, l[1][1]) * A : q = br(k + X + (f ? O : -O) / A, l[0][1]) * A, L = Math.max(L, q);
      }
      if (u) {
        let q = 0;
        !f && !d || f && !d && m ? q = br(k + G / A, u[1][1]) * A : q = Sr(k + (f ? O : -O) / A, u[0][1]) * A, L = Math.max(L, q);
      }
    }
    if (g) {
      const M = vl(B * A, y, x) / A;
      if (H = Math.max(H, M), l) {
        let q = 0;
        !f && !d || d && !f && m ? q = Sr(_ + B * A + V, l[1][0]) / A : q = br(_ + (d ? D : -D) * A + V, l[0][0]) / A, H = Math.max(H, q);
      }
      if (u) {
        let q = 0;
        !f && !d || d && !f && m ? q = br(_ + B * A, u[1][0]) / A : q = Sr(_ + (d ? D : -D) * A, u[0][0]) / A, H = Math.max(H, q);
      }
    }
  }
  D = D + (D < 0 ? H : -H), O = O + (O < 0 ? L : -L), s && (m ? G > B * A ? D = (i_(f, d) ? -O : O) / A : O = (i_(f, d) ? -D : D) * A : h ? (D = O / A, d = f) : (O = D * A, f = d));
  const $ = f ? _ + O : _, Y = d ? k + D : k;
  return {
    width: N + (f ? -O : O),
    height: T + (d ? -D : D),
    x: a[0] * O * (f ? -1 : 1) + $,
    y: a[1] * D * (d ? -1 : 1) + Y
  };
}
const GR = { width: 0, height: 0, x: 0, y: 0 }, qj = {
  ...GR,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function zj(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Fj(e, t, r) {
  const o = t.position.x + e.position.x, s = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = r[0] * a, f = r[1] * l;
  return [
    [o - u, s - f],
    [o + a - u, s + l - f]
  ];
}
function $j({ domNode: e, nodeId: t, getStoreItems: r, onChange: o, onEnd: s }) {
  const a = Dt(e);
  let l = {
    controlDirection: o_("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function u({ controlPosition: d, boundaries: h, keepAspectRatio: g, resizeDirection: m, onResizeStart: w, onResize: E, onResizeEnd: y, shouldResize: x }) {
    let S = { ...GR }, C = { ...qj };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: g,
      controlDirection: o_(d)
    };
    let _, k = null, N = [], T, A, O, D = !1;
    const G = rR().on("start", (B) => {
      const { nodeLookup: V, transform: X, snapGrid: L, snapToGrid: H, nodeOrigin: $, paneDomNode: Y } = r();
      if (_ = V.get(t), !_)
        return;
      k = (Y == null ? void 0 : Y.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: q } = xs(B.sourceEvent, {
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
        pointerY: q,
        aspectRatio: S.width / S.height
      }, T = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (T = V.get(_.parentId), A = T && _.extent === "parent" ? zj(T) : void 0), N = [], O = void 0;
      for (const [Q, j] of V)
        if (j.parentId === t && (N.push({
          id: Q,
          position: { ...j.position },
          extent: j.extent
        }), j.extent === "parent" || j.expandParent)) {
          const W = Fj(j, _, j.origin ?? $);
          O ? O = [
            [Math.min(W[0][0], O[0][0]), Math.min(W[0][1], O[0][1])],
            [Math.max(W[1][0], O[1][0]), Math.max(W[1][1], O[1][1])]
          ] : O = W;
        }
      w == null || w(B, { ...S });
    }).on("drag", (B) => {
      const { transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H } = r(), $ = xs(B.sourceEvent, {
        transform: V,
        snapGrid: X,
        snapToGrid: L,
        containerBounds: k
      }), Y = [];
      if (!_)
        return;
      const { x: M, y: q, width: Q, height: j } = S, W = {}, ie = _.origin ?? H, { width: F, height: Z, x: ee, y: K } = Dj(C, l.controlDirection, $, l.boundaries, l.keepAspectRatio, ie, A, O), te = F !== Q, se = Z !== j, ae = ee !== M && te, ce = K !== q && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (W.x = ae ? ee : S.x, W.y = ce ? K : S.y, S.x = W.x, S.y = W.y, N.length > 0)) {
        const ve = ee - M, Ne = K - q;
        for (const Ee of N)
          Ee.position = {
            x: Ee.position.x - ve + ie[0] * (F - Q),
            y: Ee.position.y - Ne + ie[1] * (Z - j)
          }, Y.push(Ee);
      }
      if ((te || se) && (W.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? F : S.width, W.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : S.height, S.width = W.width, S.height = W.height), T && _.expandParent) {
        const ve = ie[0] * (W.width ?? 0);
        W.x && W.x < ve && (S.x = ve, C.x = C.x - (W.x - ve));
        const Ne = ie[1] * (W.height ?? 0);
        W.y && W.y < Ne && (S.y = Ne, C.y = C.y - (W.y - Ne));
      }
      const de = jj({
        width: S.width,
        prevWidth: Q,
        height: S.height,
        prevHeight: j,
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
var Gf = { exports: {} }, Yf = {}, Kf = { exports: {} }, Xf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s_;
function Bj() {
  if (s_) return Xf;
  s_ = 1;
  var e = Os();
  function t(g, m) {
    return g === m && (g !== 0 || 1 / g === 1 / m) || g !== g && m !== m;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, s = e.useEffect, a = e.useLayoutEffect, l = e.useDebugValue;
  function u(g, m) {
    var w = m(), E = o({ inst: { value: w, getSnapshot: m } }), y = E[0].inst, x = E[1];
    return a(
      function() {
        y.value = w, y.getSnapshot = m, f(y) && x({ inst: y });
      },
      [g, w, m]
    ), s(
      function() {
        return f(y) && x({ inst: y }), g(function() {
          f(y) && x({ inst: y });
        });
      },
      [g]
    ), l(w), w;
  }
  function f(g) {
    var m = g.getSnapshot;
    g = g.value;
    try {
      var w = m();
      return !r(g, w);
    } catch {
      return !0;
    }
  }
  function d(g, m) {
    return m();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : u;
  return Xf.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Xf;
}
var a_;
function Vj() {
  return a_ || (a_ = 1, Kf.exports = Bj()), Kf.exports;
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
var l_;
function Hj() {
  if (l_) return Yf;
  l_ = 1;
  var e = Os(), t = Vj();
  function r(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return Yf.useSyncExternalStoreWithSelector = function(d, h, g, m, w) {
    var E = a(null);
    if (E.current === null) {
      var y = { hasValue: !1, value: null };
      E.current = y;
    } else y = E.current;
    E = u(
      function() {
        function S(T) {
          if (!C) {
            if (C = !0, _ = T, T = m(T), w !== void 0 && y.hasValue) {
              var A = y.value;
              if (w(A, T))
                return k = A;
            }
            return k = T;
          }
          if (A = k, o(_, T)) return A;
          var O = m(T);
          return w !== void 0 && w(A, O) ? (_ = T, A) : (_ = T, k = O);
        }
        var C = !1, _, k, N = g === void 0 ? null : g;
        return [
          function() {
            return S(h());
          },
          N === null ? void 0 : function() {
            return S(N());
          }
        ];
      },
      [h, g, m, w]
    );
    var x = s(d, E[0], E[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = x;
      },
      [x]
    ), f(x), x;
  }, Yf;
}
var u_;
function Wj() {
  return u_ || (u_ = 1, Gf.exports = Hj()), Gf.exports;
}
var Uj = Wj();
const Gj = /* @__PURE__ */ Jv(Uj), Yj = {}, c_ = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), o = (h, g) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const w = t;
      t = g ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), r.forEach((E) => E(t, w));
    }
  }, s = () => t, f = { setState: o, getState: s, getInitialState: () => d, subscribe: (h) => (r.add(h), () => r.delete(h)), destroy: () => {
    (Yj ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, d = t = e(o, s, f);
  return f;
}, Kj = (e) => e ? c_(e) : c_, { useDebugValue: Xj } = cn, { useSyncExternalStoreWithSelector: Qj } = Gj, Zj = (e) => e;
function YR(e, t = Zj, r) {
  const o = Qj(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return Xj(o), o;
}
const f_ = (e, t) => {
  const r = Kj(e), o = (s, a = t) => YR(r, s, a);
  return Object.assign(o, r), o;
}, Jj = (e, t) => e ? f_(e, t) : f_;
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
var $s = $k();
const eD = /* @__PURE__ */ Jv($s), cu = R.createContext(null), tD = cu.Provider, KR = An.error001();
function Ie(e, t) {
  const r = R.useContext(cu);
  if (r === null)
    throw new Error(KR);
  return YR(r, e, t);
}
function Fe() {
  const e = R.useContext(cu);
  if (e === null)
    throw new Error(KR);
  return R.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const d_ = { display: "none" }, nD = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, XR = "react-flow__node-desc", QR = "react-flow__edge-desc", rD = "react-flow__aria-live", oD = (e) => e.ariaLiveMessage, iD = (e) => e.ariaLabelConfig;
function sD({ rfId: e }) {
  const t = Ie(oD);
  return I.jsx("div", { id: `${rD}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: nD, children: t });
}
function aD({ rfId: e, disableKeyboardA11y: t }) {
  const r = Ie(iD);
  return I.jsxs(I.Fragment, { children: [I.jsx("div", { id: `${XR}-${e}`, style: d_, children: t ? r["node.a11yDescription.default"] : r["node.a11yDescription.keyboardDisabled"] }), I.jsx("div", { id: `${QR}-${e}`, style: d_, children: r["edge.a11yDescription.default"] }), !t && I.jsx(sD, { rfId: e })] });
}
const fu = R.forwardRef(({ position: e = "top-left", children: t, className: r, style: o, ...s }, a) => {
  const l = `${e}`.split("-");
  return I.jsx("div", { className: nt(["react-flow__panel", r, ...l]), style: o, ref: a, ...s, children: t });
});
fu.displayName = "Panel";
function lD({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : I.jsx(fu, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: I.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const uD = (e) => {
  const t = [], r = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && r.push(o);
  return { selectedNodes: t, selectedEdges: r };
}, yl = (e) => e.id;
function cD(e, t) {
  return Ye(e.selectedNodes.map(yl), t.selectedNodes.map(yl)) && Ye(e.selectedEdges.map(yl), t.selectedEdges.map(yl));
}
function fD({ onSelectionChange: e }) {
  const t = Fe(), { selectedNodes: r, selectedEdges: o } = Ie(uD, cD);
  return R.useEffect(() => {
    const s = { nodes: r, edges: o };
    e == null || e(s), t.getState().onSelectionChangeHandlers.forEach((a) => a(s));
  }, [r, o, e]), null;
}
const dD = (e) => !!e.onSelectionChangeHandlers;
function hD({ onSelectionChange: e }) {
  const t = Ie(dD);
  return e || t ? I.jsx(fD, { onSelectionChange: e }) : null;
}
const ZR = [0, 0], pD = { x: 0, y: 0, zoom: 1 }, gD = [
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
], h_ = [...gD, "rfId"], mD = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), p_ = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: Cs,
  nodeOrigin: ZR,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function vD(e) {
  const { setNodes: t, setEdges: r, setMinZoom: o, setMaxZoom: s, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Ie(mD, Ye), d = Fe();
  R.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = p_, u();
  }), []);
  const h = R.useRef(p_);
  return R.useEffect(
    () => {
      for (const g of h_) {
        const m = e[g], w = h.current[g];
        m !== w && (typeof e[g] > "u" || (g === "nodes" ? t(m) : g === "edges" ? r(m) : g === "minZoom" ? o(m) : g === "maxZoom" ? s(m) : g === "translateExtent" ? a(m) : g === "nodeExtent" ? l(m) : g === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: JL(m) }) : g === "fitView" ? d.setState({ fitViewQueued: m }) : g === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [g]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    h_.map((g) => e[g])
  ), null;
}
function g_() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function yD(e) {
  var o;
  const [t, r] = R.useState(e === "system" ? null : e);
  return R.useEffect(() => {
    if (e !== "system") {
      r(e);
      return;
    }
    const s = g_(), a = () => r(s != null && s.matches ? "dark" : "light");
    return a(), s == null || s.addEventListener("change", a), () => {
      s == null || s.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = g_()) != null && o.matches ? "dark" : "light";
}
const m_ = typeof document < "u" ? document : null;
function Ts(e = null, t = { target: m_, actInsideInputWithModifier: !0 }) {
  const [r, o] = R.useState(!1), s = R.useRef(!1), a = R.useRef(/* @__PURE__ */ new Set([])), [l, u] = R.useMemo(() => {
    if (e !== null) {
      const d = (Array.isArray(e) ? e : [e]).filter((g) => typeof g == "string").map((g) => g.replace("+", `
`).replace(`

`, `
+`).split(`
`)), h = d.reduce((g, m) => g.concat(...m), []);
      return [d, h];
    }
    return [[], []];
  }, [e]);
  return R.useEffect(() => {
    const f = (t == null ? void 0 : t.target) ?? m_, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (w) => {
        var x, S;
        if (s.current = w.ctrlKey || w.metaKey || w.shiftKey || w.altKey, (!s.current || s.current && !d) && AR(w))
          return !1;
        const y = y_(w.code, u);
        if (a.current.add(w[y]), v_(l, a.current, !1)) {
          const C = ((S = (x = w.composedPath) == null ? void 0 : x.call(w)) == null ? void 0 : S[0]) || w.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (s.current || !_) && w.preventDefault(), o(!0);
        }
      }, g = (w) => {
        const E = y_(w.code, u);
        v_(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(w[E]), w.key === "Meta" && a.current.clear(), s.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", g), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", g), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), r;
}
function v_(e, t, r) {
  return e.filter((o) => r || o.length === t.size).some((o) => o.every((s) => t.has(s)));
}
function y_(e, t) {
  return t.includes(e) ? "code" : "key";
}
const wD = () => {
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
      const { width: o, height: s, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = cy(t, o, s, a, l, (r == null ? void 0 : r.padding) ?? 0.1);
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
      }, h = r.snapGrid ?? s, g = r.snapToGrid ?? a;
      return Fs(d, o, g, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: r, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: s, y: a } = o.getBoundingClientRect(), l = Wl(t, r);
      return {
        x: l.x + s,
        y: l.y + a
      };
    }
  }), []);
};
function JR(e, t) {
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
      xD(f, u);
    r.push(u);
  }
  return s.length && s.forEach((a) => {
    a.index !== void 0 ? r.splice(a.index, 0, { ...a.item }) : r.push({ ...a.item });
  }), r;
}
function xD(e, t) {
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
function _D(e, t) {
  return JR(e, t);
}
function bD(e, t) {
  return JR(e, t);
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
function w_({ items: e = [], lookup: t }) {
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
function x_(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const __ = (e) => VL(e), SD = (e) => SR(e);
function eN(e) {
  return R.forwardRef(e);
}
const ED = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function b_(e) {
  const [t, r] = R.useState(BigInt(0)), [o] = R.useState(() => CD(() => r((s) => s + BigInt(1))));
  return ED(() => {
    const s = o.get();
    s.length && (e(s), o.reset());
  }, [t]), o;
}
function CD(e) {
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
const tN = R.createContext(null);
function kD({ children: e }) {
  const t = Fe(), r = R.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: g, nodeLookup: m, fitViewQueued: w } = t.getState();
    let E = f;
    for (const x of u)
      E = typeof x == "function" ? x(E) : x;
    const y = w_({
      items: E,
      lookup: m
    });
    h && d(E), y.length > 0 ? g == null || g(y) : w && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: S, setNodes: C } = t.getState();
      x && C(S);
    });
  }, []), o = b_(r), s = R.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: g, edgeLookup: m } = t.getState();
    let w = f;
    for (const E of u)
      w = typeof E == "function" ? E(w) : E;
    h ? d(w) : g && g(w_({
      items: w,
      lookup: m
    }));
  }, []), a = b_(s), l = R.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return I.jsx(tN.Provider, { value: l, children: e });
}
function RD() {
  const e = R.useContext(tN);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const ND = (e) => !!e.panZoom;
function my() {
  const e = wD(), t = Fe(), r = RD(), o = Ie(ND), s = R.useMemo(() => {
    const a = (g) => t.getState().nodeLookup.get(g), l = (g) => {
      r.nodeQueue.push(g);
    }, u = (g) => {
      r.edgeQueue.push(g);
    }, f = (g) => {
      var S, C;
      const { nodeLookup: m, nodeOrigin: w } = t.getState(), E = __(g) ? g : m.get(g.id), y = E.parentId ? PR(E.position, E.measured, E.parentId, m, w) : E.position, x = {
        ...E,
        position: y,
        width: ((S = E.measured) == null ? void 0 : S.width) ?? E.width,
        height: ((C = E.measured) == null ? void 0 : C.height) ?? E.height
      };
      return ii(x);
    }, d = (g, m, w = { replace: !1 }) => {
      l((E) => E.map((y) => {
        if (y.id === g) {
          const x = typeof m == "function" ? m(y) : m;
          return w.replace && __(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (g, m, w = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === g) {
          const x = typeof m == "function" ? m(y) : m;
          return w.replace && SD(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((g) => ({ ...g })),
      getNode: (g) => {
        var m;
        return (m = a(g)) == null ? void 0 : m.internals.userNode;
      },
      getInternalNode: a,
      getEdges: () => {
        const { edges: g = [] } = t.getState();
        return g.map((m) => ({ ...m }));
      },
      getEdge: (g) => t.getState().edgeLookup.get(g),
      setNodes: l,
      setEdges: u,
      addNodes: (g) => {
        const m = Array.isArray(g) ? g : [g];
        r.nodeQueue.push((w) => [...w, ...m]);
      },
      addEdges: (g) => {
        const m = Array.isArray(g) ? g : [g];
        r.edgeQueue.push((w) => [...w, ...m]);
      },
      toObject: () => {
        const { nodes: g = [], edges: m = [], transform: w } = t.getState(), [E, y, x] = w;
        return {
          nodes: g.map((S) => ({ ...S })),
          edges: m.map((S) => ({ ...S })),
          viewport: {
            x: E,
            y,
            zoom: x
          }
        };
      },
      deleteElements: async ({ nodes: g = [], edges: m = [] }) => {
        const { nodes: w, edges: E, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: S, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: k } = t.getState(), { nodes: N, edges: T } = await YL({
          nodesToRemove: g,
          edgesToRemove: m,
          nodes: w,
          edges: E,
          onBeforeDelete: k
        }), A = T.length > 0, O = N.length > 0;
        if (A) {
          const D = T.map(x_);
          x == null || x(T), C(D);
        }
        if (O) {
          const D = N.map(x_);
          y == null || y(N), S(D);
        }
        return (O || A) && (_ == null || _({ nodes: N, edges: T })), { deletedNodes: N, deletedEdges: T };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (g, m = !0, w) => {
        const E = Gx(g), y = E ? g : f(g), x = w !== void 0;
        return y ? (w || t.getState().nodes).filter((S) => {
          const C = t.getState().nodeLookup.get(S.id);
          if (C && !E && (S.id === g.id || !C.internals.positionAbsolute))
            return !1;
          const _ = ii(x ? S : C), k = Rs(_, y);
          return m && k > 0 || k >= _.width * _.height || k >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (g, m, w = !0) => {
        const y = Gx(g) ? g : f(g);
        if (!y)
          return !1;
        const x = Rs(y, m);
        return w && x > 0 || x >= m.width * m.height || x >= y.width * y.height;
      },
      updateNode: d,
      updateNodeData: (g, m, w = { replace: !1 }) => {
        d(g, (E) => {
          const y = typeof m == "function" ? m(E) : m;
          return w.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, w);
      },
      updateEdge: h,
      updateEdgeData: (g, m, w = { replace: !1 }) => {
        h(g, (E) => {
          const y = typeof m == "function" ? m(E) : m;
          return w.replace ? { ...E, data: y } : { ...E, data: { ...E.data, ...y } };
        }, w);
      },
      getNodesBounds: (g) => {
        const { nodeLookup: m, nodeOrigin: w } = t.getState();
        return HL(g, { nodeLookup: m, nodeOrigin: w });
      },
      getHandleConnections: ({ type: g, id: m, nodeId: w }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${w}-${g}${m ? `-${m}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      getNodeConnections: ({ type: g, handleId: m, nodeId: w }) => {
        var E;
        return Array.from(((E = t.getState().connectionLookup.get(`${w}${g ? m ? `-${g}-${m}` : `-${g}` : ""}`)) == null ? void 0 : E.values()) ?? []);
      },
      fitView: async (g) => {
        const m = t.getState().fitViewResolver ?? ZL();
        return t.setState({ fitViewQueued: !0, fitViewOptions: g, fitViewResolver: m }), r.nodeQueue.push((w) => [...w]), m.promise;
      }
    };
  }, []);
  return R.useMemo(() => ({
    ...s,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const S_ = (e) => e.selected, PD = typeof window < "u" ? window : void 0;
function TD({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const r = Fe(), { deleteElements: o } = my(), s = Ts(e, { actInsideInputWithModifier: !1 }), a = Ts(t, { target: PD });
  R.useEffect(() => {
    if (s) {
      const { edges: l, nodes: u } = r.getState();
      o({ nodes: u.filter(S_), edges: l.filter(S_) }), r.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), R.useEffect(() => {
    r.setState({ multiSelectionActive: a });
  }, [a]);
}
function AD(e) {
  const t = Fe();
  R.useEffect(() => {
    const r = () => {
      var s, a, l, u;
      if (!e.current || !(((a = (s = e.current).checkVisibility) == null ? void 0 : a.call(s)) ?? !0))
        return !1;
      const o = fy(e.current);
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
const du = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, ID = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function MD({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: r = !0, panOnScroll: o = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: a = no.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: g, zoomActivationKeyCode: m, preventScrolling: w = !0, children: E, noWheelClassName: y, noPanClassName: x, onViewportChange: S, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: k }) {
  const N = Fe(), T = R.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: D } = Ie(ID, Ye), G = Ts(m), B = R.useRef();
  AD(T);
  const V = R.useCallback((X) => {
    S == null || S({ x: X[0], y: X[1], zoom: X[2] }), C || N.setState({ transform: X });
  }, [S, C]);
  return R.useEffect(() => {
    if (T.current) {
      B.current = Lj({
        domNode: T.current,
        minZoom: h,
        maxZoom: g,
        translateExtent: d,
        viewport: f,
        onDraggingChange: ($) => N.setState({ paneDragging: $ }),
        onPanZoomStart: ($, Y) => {
          const { onViewportChangeStart: M, onMoveStart: q } = N.getState();
          q == null || q($, Y), M == null || M(Y);
        },
        onPanZoom: ($, Y) => {
          const { onViewportChange: M, onMove: q } = N.getState();
          q == null || q($, Y), M == null || M(Y);
        },
        onPanZoomEnd: ($, Y) => {
          const { onViewportChangeEnd: M, onMoveEnd: q } = N.getState();
          q == null || q($, Y), M == null || M(Y);
        }
      });
      const { x: X, y: L, zoom: H } = B.current.getViewport();
      return N.setState({
        panZoom: B.current,
        transform: [X, L, H],
        domNode: T.current.closest(".react-flow")
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
  ]), I.jsx("div", { className: "react-flow__renderer", ref: T, style: du, children: E });
}
const OD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function LD() {
  const { userSelectionActive: e, userSelectionRect: t } = Ie(OD, Ye);
  return e && t ? I.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Qf = (e, t) => (r) => {
  r.target === t.current && (e == null || e(r));
}, jD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function DD({ isSelecting: e, selectionKeyPressed: t, selectionMode: r = ks.Full, panOnDrag: o, paneClickDistance: s, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: g, onPaneMouseMove: m, onPaneMouseLeave: w, children: E }) {
  const y = Fe(), { userSelectionActive: x, elementsSelectable: S, dragging: C, connectionInProgress: _ } = Ie(jD, Ye), k = S && (e || x), N = R.useRef(null), T = R.useRef(), A = R.useRef(/* @__PURE__ */ new Set()), O = R.useRef(/* @__PURE__ */ new Set()), D = R.useRef(!1), G = (M) => {
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
    const { domNode: q } = y.getState();
    if (T.current = q == null ? void 0 : q.getBoundingClientRect(), !T.current)
      return;
    const Q = M.target === N.current;
    if (!Q && !!M.target.closest(".nokey") || !e || !(a && Q || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), D.current = !1;
    const { x: ie, y: F } = pn(M.nativeEvent, T.current);
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
    const { userSelectionRect: q, transform: Q, nodeLookup: j, edgeLookup: W, connectionLookup: ie, triggerNodeChanges: F, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: K } = y.getState();
    if (!T.current || !q)
      return;
    const { x: te, y: se } = pn(M.nativeEvent, T.current), { startX: ae, startY: ce } = q;
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
    A.current = new Set(uy(j, de, Q, r === ks.Partial, !0).map((Ne) => Ne.id)), O.current = /* @__PURE__ */ new Set();
    const ve = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Ne of A.current) {
      const Ee = ie.get(Ne);
      if (Ee)
        for (const { edgeId: Qe } of Ee.values()) {
          const Ve = W.get(Qe);
          Ve && (Ve.selectable ?? ve) && O.current.add(Qe);
        }
    }
    if (!Yx(pe, A.current)) {
      const Ne = Xo(j, A.current, !0);
      F(Ne);
    }
    if (!Yx(be, O.current)) {
      const Ne = Xo(W, O.current);
      Z(Ne);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, $ = (M) => {
    var q, Q;
    M.button === 0 && ((Q = (q = M.target) == null ? void 0 : q.releasePointerCapture) == null || Q.call(q, M.pointerId), !x && M.target === N.current && y.getState().userSelectionRect && (G == null || G(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), D.current && (u == null || u(M), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, Y = o === !0 || Array.isArray(o) && o.includes(0);
  return I.jsxs("div", { className: nt(["react-flow__pane", { draggable: Y, dragging: C, selection: e }]), onClick: k ? void 0 : Qf(G, N), onContextMenu: Qf(B, N), onWheel: Qf(V, N), onPointerEnter: k ? void 0 : g, onPointerMove: k ? H : m, onPointerUp: k ? $ : void 0, onPointerDownCapture: k ? L : void 0, onClickCapture: k ? X : void 0, onPointerLeave: w, ref: N, style: du, children: [E, I.jsx(LD, {})] });
}
function Fv({ id: e, store: t, unselect: r = !1, nodeRef: o }) {
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
function nN({ nodeRef: e, disabled: t = !1, noDragClassName: r, handleSelector: o, nodeId: s, isSelectable: a, nodeClickDistance: l }) {
  const u = Fe(), [f, d] = R.useState(!1), h = R.useRef();
  return R.useEffect(() => {
    h.current = _j({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (g) => {
        Fv({
          id: g,
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
    var g, m;
    if (t)
      (g = h.current) == null || g.destroy();
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
const qD = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function rN() {
  const e = Fe();
  return R.useCallback((r) => {
    const { nodeExtent: o, snapToGrid: s, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), g = /* @__PURE__ */ new Map(), m = qD(l), w = s ? a[0] : 5, E = s ? a[1] : 5, y = r.direction.x * w * r.factor, x = r.direction.y * E * r.factor;
    for (const [, S] of d) {
      if (!m(S))
        continue;
      let C = {
        x: S.internals.positionAbsolute.x + y,
        y: S.internals.positionAbsolute.y + x
      };
      s && (C = zs(C, a));
      const { position: _, positionAbsolute: k } = ER({
        nodeId: S.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      S.position = _, S.internals.positionAbsolute = k, g.set(S.id, S);
    }
    f(g);
  }, []);
}
const vy = R.createContext(null), zD = vy.Provider;
vy.Consumer;
const oN = () => R.useContext(vy), FD = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), $D = (e, t, r) => (o) => {
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
function BD({ type: e = "source", position: t = me.Top, isValidConnection: r, isConnectable: o = !0, isConnectableStart: s = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: g, ...m }, w) {
  var H, $;
  const E = l || null, y = e === "target", x = Fe(), S = oN(), { connectOnClick: C, noPanClassName: _, rfId: k } = Ie(FD, Ye), { connectingFrom: N, connectingTo: T, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: D, clickConnectionInProcess: G, valid: B } = Ie($D(S, E, e), Ye);
  S || ($ = (H = x.getState()).onError) == null || $.call(H, "010", An.error010());
  const V = (Y) => {
    const { defaultEdgeOptions: M, onConnect: q, hasDefaultEdges: Q } = x.getState(), j = {
      ...M,
      ...Y
    };
    if (Q) {
      const { edges: W, setEdges: ie } = x.getState();
      ie(ij(j, W));
    }
    q == null || q(j), u == null || u(j);
  }, X = (Y) => {
    if (!S)
      return;
    const M = IR(Y.nativeEvent);
    if (s && (M && Y.button === 0 || !M)) {
      const q = x.getState();
      zv.onPointerDown(Y.nativeEvent, {
        handleDomNode: Y.currentTarget,
        autoPanOnConnect: q.autoPanOnConnect,
        connectionMode: q.connectionMode,
        connectionRadius: q.connectionRadius,
        domNode: q.domNode,
        nodeLookup: q.nodeLookup,
        lib: q.lib,
        isTarget: y,
        handleId: E,
        nodeId: S,
        flowId: q.rfId,
        panBy: q.panBy,
        cancelConnection: q.cancelConnection,
        onConnectStart: q.onConnectStart,
        onConnectEnd: q.onConnectEnd,
        updateConnection: q.updateConnection,
        onConnect: V,
        isValidConnection: r || q.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: q.autoPanSpeed,
        dragThreshold: q.connectionDragThreshold
      });
    }
    M ? h == null || h(Y) : g == null || g(Y);
  }, L = (Y) => {
    const { onClickConnectStart: M, onClickConnectEnd: q, connectionClickStartHandle: Q, connectionMode: j, isValidConnection: W, lib: ie, rfId: F, nodeLookup: Z, connection: ee } = x.getState();
    if (!S || !Q && !s)
      return;
    if (!Q) {
      M == null || M(Y.nativeEvent, { nodeId: S, handleId: E, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: S, type: e, id: E } });
      return;
    }
    const K = TR(Y.target), te = r || W, { connection: se, isValid: ae } = zv.isValid(Y.nativeEvent, {
      handle: {
        nodeId: S,
        id: E,
        type: e
      },
      connectionMode: j,
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
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, q == null || q(Y, ce), x.setState({ connectionClickStartHandle: null });
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
      connectingto: T,
      valid: B,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!D || O) && (D || G ? a : s)
    }
  ]), onMouseDown: X, onTouchStart: X, onClick: C ? L : void 0, ref: w, ...m, children: f });
}
const As = R.memo(eN(BD));
function VD({ data: e, isConnectable: t, sourcePosition: r = me.Bottom }) {
  return I.jsxs(I.Fragment, { children: [e == null ? void 0 : e.label, I.jsx(As, { type: "source", position: r, isConnectable: t })] });
}
function HD({ data: e, isConnectable: t, targetPosition: r = me.Top, sourcePosition: o = me.Bottom }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(As, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label, I.jsx(As, { type: "source", position: o, isConnectable: t })] });
}
function WD() {
  return null;
}
function UD({ data: e, isConnectable: t, targetPosition: r = me.Top }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(As, { type: "target", position: r, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Ul = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, E_ = {
  input: VD,
  default: HD,
  output: UD,
  group: WD
};
function GD(e) {
  var t, r, o, s;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((r = e.style) == null ? void 0 : r.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((s = e.style) == null ? void 0 : s.height)
  };
}
const YD = (e) => {
  const { width: t, height: r, x: o, y: s } = qs(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: hn(t) ? t : null,
    height: hn(r) ? r : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${s}px)`
  };
};
function KD({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: r }) {
  const o = Fe(), { width: s, height: a, transformString: l, userSelectionActive: u } = Ie(YD, Ye), f = rN(), d = R.useRef(null);
  if (R.useEffect(() => {
    var m;
    r || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [r]), nN({
    nodeRef: d
  }), u || !s || !a)
    return null;
  const h = e ? (m) => {
    const w = o.getState().nodes.filter((E) => E.selected);
    e(m, w);
  } : void 0, g = (m) => {
    Object.prototype.hasOwnProperty.call(Ul, m.key) && (m.preventDefault(), f({
      direction: Ul[m.key],
      factor: m.shiftKey ? 4 : 1
    }));
  };
  return I.jsx("div", { className: nt(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: l
  }, children: I.jsx("div", { ref: d, className: "react-flow__nodesselection-rect", onContextMenu: h, tabIndex: r ? void 0 : -1, onKeyDown: r ? void 0 : g, style: {
    width: s,
    height: a
  } }) });
}
const C_ = typeof window < "u" ? window : void 0, XD = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function iN({ children: e, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: g, onSelectionStart: m, onSelectionEnd: w, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: k, panOnScrollSpeed: N, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, preventScrolling: X, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: $, disableKeyboardA11y: Y, onViewportChange: M, isControlledViewport: q }) {
  const { nodesSelectionActive: Q, userSelectionActive: j } = Ie(XD), W = Ts(d, { target: C_ }), ie = Ts(y, { target: C_ }), F = ie || O, Z = ie || k, ee = h && F !== !0, K = W || j || ee;
  return TD({ deleteKeyCode: f, multiSelectionKeyCode: E }), I.jsx(MD, { onPaneContextMenu: a, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: N, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !W && F, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: X, noWheelClassName: H, noPanClassName: $, onViewportChange: M, isControlledViewport: q, paneClickDistance: u, selectionOnDrag: ee, children: I.jsxs(DD, { onSelectionStart: m, onSelectionEnd: w, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: F, isSelecting: !!K, selectionMode: g, selectionKeyPressed: W, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && I.jsx(KD, { onSelectionContextMenu: L, noPanClassName: $, disableKeyboardA11y: Y })] }) });
}
iN.displayName = "FlowRenderer";
const QD = R.memo(iN), ZD = (e) => (t) => e ? uy(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((r) => r.id) : Array.from(t.nodeLookup.keys());
function JD(e) {
  return Ie(R.useCallback(ZD(e), [e]), Ye);
}
const eq = (e) => e.updateNodeInternals;
function tq() {
  const e = Ie(eq), [t] = R.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((r) => {
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
function nq({ node: e, nodeType: t, hasDimensions: r, resizeObserver: o }) {
  const s = Fe(), a = R.useRef(null), l = R.useRef(null), u = R.useRef(e.sourcePosition), f = R.useRef(e.targetPosition), d = R.useRef(t), h = r && !!e.internals.handleBounds;
  return R.useEffect(() => {
    a.current && !e.hidden && (!h || l.current !== a.current) && (l.current && (o == null || o.unobserve(l.current)), o == null || o.observe(a.current), l.current = a.current);
  }, [h, e.hidden]), R.useEffect(() => () => {
    l.current && (o == null || o.unobserve(l.current), l.current = null);
  }, []), R.useEffect(() => {
    if (a.current) {
      const g = d.current !== t, m = u.current !== e.sourcePosition, w = f.current !== e.targetPosition;
      (g || m || w) && (d.current = t, u.current = e.sourcePosition, f.current = e.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: a.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), a;
}
function rq({ id: e, onClick: t, onMouseEnter: r, onMouseMove: o, onMouseLeave: s, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: g, noDragClassName: m, noPanClassName: w, disableKeyboardA11y: E, rfId: y, nodeTypes: x, nodeClickDistance: S, onError: C }) {
  const { node: _, internals: k, isParent: N } = Ie((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Ye);
  let T = _.type || "default", A = (x == null ? void 0 : x[T]) || E_[T];
  A === void 0 && (C == null || C("003", An.error003(T)), T = "default", A = (x == null ? void 0 : x.default) || E_.default);
  const O = !!(_.draggable || u && typeof _.draggable > "u"), D = !!(_.selectable || f && typeof _.selectable > "u"), G = !!(_.connectable || d && typeof _.connectable > "u"), B = !!(_.focusable || h && typeof _.focusable > "u"), V = Fe(), X = NR(_), L = nq({ node: _, nodeType: T, hasDimensions: X, resizeObserver: g }), H = nN({
    nodeRef: L,
    disabled: _.hidden || !O,
    noDragClassName: m,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: D,
    nodeClickDistance: S
  }), $ = rN();
  if (_.hidden)
    return null;
  const Y = Qn(_), M = GD(_), q = D || O || t || r || o || s, Q = r ? (te) => r(te, { ...k.userNode }) : void 0, j = o ? (te) => o(te, { ...k.userNode }) : void 0, W = s ? (te) => s(te, { ...k.userNode }) : void 0, ie = a ? (te) => a(te, { ...k.userNode }) : void 0, F = l ? (te) => l(te, { ...k.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    D && (!se || !O || ae > 0) && Fv({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...k.userNode });
  }, ee = (te) => {
    if (!(AR(te.nativeEvent) || E)) {
      if (wR.includes(te.key) && D) {
        const se = te.key === "Escape";
        Fv({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && _.selected && Object.prototype.hasOwnProperty.call(Ul, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~k.positionAbsolute.x,
            y: ~~k.positionAbsolute.y
          })
        }), $({
          direction: Ul[te.key],
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
    uy(/* @__PURE__ */ new Map([[e, _]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(_.position.x + Y.width / 2, _.position.y + Y.height / 2, {
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
      parent: N,
      draggable: O,
      dragging: H
    }
  ]), ref: L, style: {
    zIndex: k.z,
    transform: `translate(${k.positionAbsolute.x}px,${k.positionAbsolute.y}px)`,
    pointerEvents: q ? "all" : "none",
    visibility: X ? "visible" : "hidden",
    ..._.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: j, onMouseLeave: W, onContextMenu: ie, onClick: Z, onDoubleClick: F, onKeyDown: B ? ee : void 0, tabIndex: B ? 0 : void 0, onFocus: B ? K : void 0, role: _.ariaRole ?? (B ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${XR}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: I.jsx(zD, { value: e, children: I.jsx(A, { id: e, data: _.data, type: T, positionAbsoluteX: k.positionAbsolute.x, positionAbsoluteY: k.positionAbsolute.y, selected: _.selected ?? !1, selectable: D, draggable: O, deletable: _.deletable ?? !0, isConnectable: G, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: H, dragHandle: _.dragHandle, zIndex: k.z, parentId: _.parentId, ...Y }) }) });
}
var oq = R.memo(rq);
const iq = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function sN(e) {
  const { nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, onError: a } = Ie(iq, Ye), l = JD(e.onlyRenderVisibleElements), u = tq();
  return I.jsx("div", { className: "react-flow__nodes", style: du, children: l.map((f) => (
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
    I.jsx(oq, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: r, nodesFocusable: o, elementsSelectable: s, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
sN.displayName = "NodeRenderer";
const sq = R.memo(sN);
function aq(e) {
  return Ie(R.useCallback((r) => {
    if (!e)
      return r.edges.map((s) => s.id);
    const o = [];
    if (r.width && r.height)
      for (const s of r.edges) {
        const a = r.nodeLookup.get(s.source), l = r.nodeLookup.get(s.target);
        a && l && nj({
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
const lq = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return I.jsx("polyline", { className: "arrow", style: r, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, uq = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const r = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return I.jsx("polyline", { className: "arrowclosed", style: r, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, k_ = {
  [Vl.Arrow]: lq,
  [Vl.ArrowClosed]: uq
};
function cq(e) {
  const t = Fe();
  return R.useMemo(() => {
    var s, a;
    return Object.prototype.hasOwnProperty.call(k_, e) ? k_[e] : ((a = (s = t.getState()).onError) == null || a.call(s, "009", An.error009(e)), null);
  }, [e]);
}
const fq = ({ id: e, type: t, color: r, width: o = 12.5, height: s = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = cq(t);
  return f ? I.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: I.jsx(f, { color: r, strokeWidth: l }) }) : null;
}, aN = ({ defaultColor: e, rfId: t }) => {
  const r = Ie((a) => a.edges), o = Ie((a) => a.defaultEdgeOptions), s = R.useMemo(() => cj(r, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [r, o, t, e]);
  return s.length ? I.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: I.jsx("defs", { children: s.map((a) => I.jsx(fq, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
aN.displayName = "MarkerDefinitions";
var dq = R.memo(aN);
function lN({ x: e, y: t, label: r, labelStyle: o, labelShowBg: s = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
  const [g, m] = R.useState({ x: 1, y: 0, width: 0, height: 0 }), w = nt(["react-flow__edge-textwrapper", d]), E = R.useRef(null);
  return R.useEffect(() => {
    if (E.current) {
      const y = E.current.getBBox();
      m({
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height
      });
    }
  }, [r]), r ? I.jsxs("g", { transform: `translate(${e - g.width / 2} ${t - g.height / 2})`, className: w, visibility: g.width ? "visible" : "hidden", ...h, children: [s && I.jsx("rect", { width: g.width + 2 * l[0], x: -l[0], y: -l[1], height: g.height + 2 * l[1], className: "react-flow__edge-textbg", style: a, rx: u, ry: u }), I.jsx("text", { className: "react-flow__edge-text", y: g.height / 2, dy: "0.3em", ref: E, style: o, children: r }), f] }) : null;
}
lN.displayName = "EdgeText";
const hq = R.memo(lN);
function hu({ path: e, labelX: t, labelY: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return I.jsxs(I.Fragment, { children: [I.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? I.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && hn(t) && hn(r) ? I.jsx(hq, { x: t, y: r, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function R_({ pos: e, x1: t, y1: r, x2: o, y2: s }) {
  return e === me.Left || e === me.Right ? [0.5 * (t + o), r] : [t, 0.5 * (r + s)];
}
function uN({ sourceX: e, sourceY: t, sourcePosition: r = me.Bottom, targetX: o, targetY: s, targetPosition: a = me.Top }) {
  const [l, u] = R_({
    pos: r,
    x1: e,
    y1: t,
    x2: o,
    y2: s
  }), [f, d] = R_({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t
  }), [h, g, m, w] = MR({
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
    g,
    m,
    w
  ];
}
function cN(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: g, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S }) => {
    const [C, _, k] = uN({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u
    }), N = e.isInternal ? void 0 : t;
    return I.jsx(hu, { id: N, path: C, labelX: _, labelY: k, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: g, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S });
  });
}
const pq = cN({ isInternal: !1 }), fN = cN({ isInternal: !0 });
pq.displayName = "SimpleBezierEdge";
fN.displayName = "SimpleBezierEdgeInternal";
function dN(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: g, style: m, sourcePosition: w = me.Bottom, targetPosition: E = me.Top, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, N] = jv({
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
    return I.jsx(hu, { id: T, path: _, labelX: k, labelY: N, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: g, style: m, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const hN = dN({ isInternal: !1 }), pN = dN({ isInternal: !0 });
hN.displayName = "SmoothStepEdge";
pN.displayName = "SmoothStepEdgeInternal";
function gN(e) {
  return R.memo(({ id: t, ...r }) => {
    var s;
    const o = e.isInternal ? void 0 : t;
    return I.jsx(hN, { ...r, id: o, pathOptions: R.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = r.pathOptions) == null ? void 0 : a.offset };
    }, [(s = r.pathOptions) == null ? void 0 : s.offset]) });
  });
}
const gq = gN({ isInternal: !1 }), mN = gN({ isInternal: !0 });
gq.displayName = "StepEdge";
mN.displayName = "StepEdgeInternal";
function vN(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: g, style: m, markerEnd: w, markerStart: E, interactionWidth: y }) => {
    const [x, S, C] = jR({ sourceX: r, sourceY: o, targetX: s, targetY: a }), _ = e.isInternal ? void 0 : t;
    return I.jsx(hu, { id: _, path: x, labelX: S, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: g, style: m, markerEnd: w, markerStart: E, interactionWidth: y });
  });
}
const mq = vN({ isInternal: !1 }), yN = vN({ isInternal: !0 });
mq.displayName = "StraightEdge";
yN.displayName = "StraightEdgeInternal";
function wN(e) {
  return R.memo(({ id: t, sourceX: r, sourceY: o, targetX: s, targetY: a, sourcePosition: l = me.Bottom, targetPosition: u = me.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: g, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, N] = OR({
      sourceX: r,
      sourceY: o,
      sourcePosition: l,
      targetX: s,
      targetY: a,
      targetPosition: u,
      curvature: S == null ? void 0 : S.curvature
    }), T = e.isInternal ? void 0 : t;
    return I.jsx(hu, { id: T, path: _, labelX: k, labelY: N, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: g, labelBgPadding: m, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const vq = wN({ isInternal: !1 }), xN = wN({ isInternal: !0 });
vq.displayName = "BezierEdge";
xN.displayName = "BezierEdgeInternal";
const N_ = {
  default: xN,
  straight: yN,
  step: mN,
  smoothstep: pN,
  simplebezier: fN
}, P_ = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, yq = (e, t, r) => r === me.Left ? e - t : r === me.Right ? e + t : e, wq = (e, t, r) => r === me.Top ? e - t : r === me.Bottom ? e + t : e, T_ = "react-flow__edgeupdater";
function A_({ position: e, centerX: t, centerY: r, radius: o = 10, onMouseDown: s, onMouseEnter: a, onMouseOut: l, type: u }) {
  return I.jsx("circle", { onMouseDown: s, onMouseEnter: a, onMouseOut: l, className: nt([T_, `${T_}-${u}`]), cx: yq(t, o, e), cy: wq(r, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function xq({ isReconnectable: e, reconnectRadius: t, edge: r, sourceX: o, sourceY: s, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: g, setReconnecting: m, setUpdateHover: w }) {
  const E = Fe(), y = (k, N) => {
    if (k.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: A, isValidConnection: O, connectionMode: D, connectionRadius: G, lib: B, onConnectStart: V, onConnectEnd: X, cancelConnection: L, nodeLookup: H, rfId: $, panBy: Y, updateConnection: M } = E.getState(), q = N.type === "target", Q = (ie, F) => {
      m(!1), g == null || g(ie, r, N.type, F);
    }, j = (ie) => d == null ? void 0 : d(r, ie), W = (ie, F) => {
      m(!0), h == null || h(k, r, N.type), V == null || V(ie, F);
    };
    zv.onPointerDown(k.nativeEvent, {
      autoPanOnConnect: T,
      connectionMode: D,
      connectionRadius: G,
      domNode: A,
      handleId: N.id,
      nodeId: N.nodeId,
      nodeLookup: H,
      isTarget: q,
      edgeUpdaterType: N.type,
      lib: B,
      flowId: $,
      cancelConnection: L,
      panBy: Y,
      isValidConnection: O,
      onConnect: j,
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
  return I.jsxs(I.Fragment, { children: [(e === !0 || e === "source") && I.jsx(A_, { position: u, centerX: o, centerY: s, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && I.jsx(A_, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: S, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function _q({ id: e, edgesFocusable: t, edgesReconnectable: r, elementsSelectable: o, onClick: s, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: g, onReconnectStart: m, onReconnectEnd: w, rfId: E, edgeTypes: y, noPanClassName: x, onError: S, disableKeyboardA11y: C }) {
  let _ = Ie((de) => de.edgeLookup.get(e));
  const k = Ie((de) => de.defaultEdgeOptions);
  _ = k ? { ...k, ..._ } : _;
  let N = _.type || "default", T = (y == null ? void 0 : y[N]) || N_[N];
  T === void 0 && (S == null || S("011", An.error011(N)), N = "default", T = (y == null ? void 0 : y.default) || N_.default);
  const A = !!(_.focusable || t && typeof _.focusable > "u"), O = typeof g < "u" && (_.reconnectable || r && typeof _.reconnectable > "u"), D = !!(_.selectable || o && typeof _.selectable > "u"), G = R.useRef(null), [B, V] = R.useState(!1), [X, L] = R.useState(!1), H = Fe(), { zIndex: $, sourceX: Y, sourceY: M, targetX: q, targetY: Q, sourcePosition: j, targetPosition: W } = Ie(R.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), be = de.nodeLookup.get(_.target);
    if (!pe || !be)
      return {
        zIndex: _.zIndex,
        ...P_
      };
    const ve = uj({
      id: e,
      sourceNode: pe,
      targetNode: be,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: S
    });
    return {
      zIndex: tj({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: be,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...ve || P_
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Ye), ie = R.useMemo(() => _.markerStart ? `url('#${Dv(_.markerStart, E)}')` : void 0, [_.markerStart, E]), F = R.useMemo(() => _.markerEnd ? `url('#${Dv(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || Y === null || M === null || q === null || Q === null)
    return null;
  const Z = (de) => {
    var Ne;
    const { addSelectedEdges: pe, unselectNodesAndEdges: be, multiSelectionActive: ve } = H.getState();
    D && (H.setState({ nodesSelectionActive: !1 }), _.selected && ve ? (be({ nodes: [], edges: [_] }), (Ne = G.current) == null || Ne.blur()) : pe([e])), s && s(de, _);
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
    if (!C && wR.includes(de.key) && D) {
      const { unselectNodesAndEdges: be, addSelectedEdges: ve } = H.getState();
      de.key === "Escape" ? ((pe = G.current) == null || pe.blur(), be({ edges: [_] })) : ve([e]);
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
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: K, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: _.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": A ? `${QR}-${E}` : void 0, ref: G, ..._.domAttributes, children: [!X && I.jsx(T, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: D, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: Y, sourceY: M, targetX: q, targetY: Q, sourcePosition: j, targetPosition: W, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: F, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), O && I.jsx(xq, { edge: _, isReconnectable: O, reconnectRadius: h, onReconnect: g, onReconnectStart: m, onReconnectEnd: w, sourceX: Y, sourceY: M, targetX: q, targetY: Q, sourcePosition: j, targetPosition: W, setUpdateHover: V, setReconnecting: L })] }) });
}
var bq = R.memo(_q);
const Sq = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function _N({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: r, edgeTypes: o, noPanClassName: s, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: g, onEdgeDoubleClick: m, onReconnectStart: w, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, onError: _ } = Ie(Sq, Ye), k = aq(t);
  return I.jsxs("div", { className: "react-flow__edges", children: [I.jsx(dq, { defaultColor: e, rfId: r }), k.map((N) => I.jsx(bq, { id: N, edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, noPanClassName: s, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: g, onDoubleClick: m, onReconnectStart: w, onReconnectEnd: E, rfId: r, onError: _, edgeTypes: o, disableKeyboardA11y: y }, N))] });
}
_N.displayName = "EdgeRenderer";
const Eq = R.memo(_N), Cq = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function kq({ children: e }) {
  const t = Ie(Cq);
  return I.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function Rq(e) {
  const t = my(), r = R.useRef(!1);
  R.useEffect(() => {
    !r.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), r.current = !0);
  }, [e, t.viewportInitialized]);
}
const Nq = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function Pq(e) {
  const t = Ie(Nq), r = Fe();
  return R.useEffect(() => {
    e && (t == null || t(e), r.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function Tq(e) {
  return e.connection.inProgress ? { ...e.connection, to: Fs(e.connection.to, e.transform) } : { ...e.connection };
}
function Aq(e) {
  return Tq;
}
function Iq(e) {
  const t = Aq();
  return Ie(t, Ye);
}
const Mq = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function Oq({ containerStyle: e, style: t, type: r, component: o }) {
  const { nodesConnectable: s, width: a, height: l, isValid: u, inProgress: f } = Ie(Mq, Ye);
  return !(a && s && f) ? null : I.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: I.jsx("g", { className: nt(["react-flow__connection", bR(u)]), children: I.jsx(bN, { style: t, type: r, CustomComponent: o, isValid: u }) }) });
}
const bN = ({ style: e, type: t = kr.Bezier, CustomComponent: r, isValid: o }) => {
  const { inProgress: s, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: g, toPosition: m, pointer: w } = Iq();
  if (!s)
    return;
  if (r)
    return I.jsx(r, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: bR(o), toNode: h, toHandle: g, pointer: w });
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
      [E] = OR(y);
      break;
    case kr.SimpleBezier:
      [E] = uN(y);
      break;
    case kr.Step:
      [E] = jv({
        ...y,
        borderRadius: 0
      });
      break;
    case kr.SmoothStep:
      [E] = jv(y);
      break;
    default:
      [E] = jR(y);
  }
  return I.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
bN.displayName = "ConnectionLine";
const Lq = {};
function I_(e = Lq) {
  R.useRef(e), Fe(), R.useEffect(() => {
  }, [e]);
}
function jq() {
  Fe(), R.useRef(!1), R.useEffect(() => {
  }, []);
}
function SN({ nodeTypes: e, edgeTypes: t, onInit: r, onNodeClick: o, onEdgeClick: s, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: g, onSelectionStart: m, onSelectionEnd: w, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: S, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, multiSelectionKeyCode: N, panActivationKeyCode: T, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: D, elementsSelectable: G, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, preventScrolling: H, defaultMarkerColor: $, zoomOnScroll: Y, zoomOnPinch: M, panOnScroll: q, panOnScrollSpeed: Q, panOnScrollMode: j, zoomOnDoubleClick: W, panOnDrag: ie, onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ve, reconnectRadius: Ne, onReconnect: Ee, onReconnectStart: Qe, onReconnectEnd: Ve, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: He, nodeExtent: en, rfId: $t, viewport: tn, onViewportChange: Bt }) {
  return I_(e), I_(t), jq(), Rq(r), Pq(tn), I.jsx(QD, { onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, onSelectionStart: m, onSelectionEnd: w, multiSelectionKeyCode: N, panActivationKeyCode: T, zoomActivationKeyCode: A, elementsSelectable: G, zoomOnScroll: Y, zoomOnPinch: M, zoomOnDoubleClick: W, panOnScroll: q, panOnScrollSpeed: Q, panOnScrollMode: j, panOnDrag: ie, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, onSelectionContextMenu: g, preventScrolling: H, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: He, onViewportChange: Bt, isControlledViewport: !!tn, children: I.jsxs(kq, { children: [I.jsx(Eq, { edgeTypes: t, onEdgeClick: s, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Qe, onReconnectEnd: Ve, onlyRenderVisibleElements: D, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ve, reconnectRadius: Ne, defaultMarkerColor: $, noPanClassName: at, disableKeyboardA11y: He, rfId: $t }), I.jsx(Oq, { style: y, type: E, component: x, containerStyle: S }), I.jsx("div", { className: "react-flow__edgelabel-renderer" }), I.jsx(sq, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: D, noPanClassName: at, noDragClassName: Ft, disableKeyboardA11y: He, nodeExtent: en, rfId: $t }), I.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
SN.displayName = "GraphView";
const Dq = R.memo(SN), M_ = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: g } = {}) => {
  const m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], S = r ?? e ?? [], C = h ?? [0, 0], _ = g ?? Cs;
  zR(E, y, x);
  const k = qv(S, m, w, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let N = [0, 0, 1];
  if (l && s && a) {
    const T = qs(m, {
      filter: (G) => !!((G.width || G.initialWidth) && (G.height || G.initialHeight))
    }), { x: A, y: O, zoom: D } = cy(T, s, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    N = [A, O, D];
  }
  return {
    rfId: "1",
    width: s ?? 0,
    height: a ?? 0,
    transform: N,
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
    connection: { ..._R },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: KL,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: xR
  };
}, qq = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, width: s, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: g }) => Jj((m, w) => {
  async function E() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: S, fitViewResolver: C, width: _, height: k, minZoom: N, maxZoom: T } = w();
    x && (await GL({
      nodes: y,
      width: _,
      height: k,
      panZoom: x,
      minZoom: N,
      maxZoom: T
    }, S), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...M_({
      nodes: e,
      edges: t,
      width: s,
      height: a,
      fitView: l,
      fitViewOptions: u,
      minZoom: f,
      maxZoom: d,
      nodeOrigin: h,
      nodeExtent: g,
      defaultNodes: r,
      defaultEdges: o
    }),
    setNodes: (y) => {
      const { nodeLookup: x, parentLookup: S, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: k } = w(), N = qv(y, x, S, {
        nodeOrigin: C,
        nodeExtent: g,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      k && N ? (E(), m({ nodes: y, nodesInitialized: N, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: N });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: S } = w();
      zR(x, S, y), m({ edges: y });
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
      const { triggerNodeChanges: x, nodeLookup: S, parentLookup: C, domNode: _, nodeOrigin: k, nodeExtent: N, debug: T, fitViewQueued: A } = w(), { changes: O, updatedInternals: D } = vj(y, S, C, _, k, N);
      D && (hj(S, C, { nodeOrigin: k, nodeExtent: N }), A ? (E(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (O == null ? void 0 : O.length) > 0 && (T && console.log("React Flow: trigger node changes", O), x == null || x(O)));
    },
    updateNodePositions: (y, x = !1) => {
      const S = [], C = [], { nodeLookup: _, triggerNodeChanges: k } = w();
      for (const [N, T] of y) {
        const A = _.get(N), O = !!(A != null && A.expandParent && (A != null && A.parentId) && (T != null && T.position)), D = {
          id: N,
          type: "position",
          position: O ? {
            x: Math.max(0, T.position.x),
            y: Math.max(0, T.position.y)
          } : T.position,
          dragging: x
        };
        O && A.parentId && S.push({
          id: N,
          parentId: A.parentId,
          rect: {
            ...T.internals.positionAbsolute,
            width: T.measured.width ?? 0,
            height: T.measured.height ?? 0
          }
        }), C.push(D);
      }
      if (S.length > 0) {
        const { parentLookup: N, nodeOrigin: T } = w(), A = gy(S, _, N, T);
        C.push(...A);
      }
      k(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: S, nodes: C, hasDefaultNodes: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const N = _D(y, C);
          S(N);
        }
        k && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: S, edges: C, hasDefaultEdges: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const N = bD(y, C);
          S(N);
        }
        k && console.log("React Flow: trigger edge changes", y), x == null || x(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const N = y.map((T) => Jr(T, !0));
        _(N);
        return;
      }
      _(Xo(C, /* @__PURE__ */ new Set([...y]), !0)), k(Xo(S));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const N = y.map((T) => Jr(T, !0));
        k(N);
        return;
      }
      k(Xo(S, /* @__PURE__ */ new Set([...y]))), _(Xo(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: S, nodes: C, nodeLookup: _, triggerNodeChanges: k, triggerEdgeChanges: N } = w(), T = y || C, A = x || S, O = T.map((G) => {
        const B = _.get(G.id);
        return B && (B.selected = !1), Jr(G.id, !1);
      }), D = A.map((G) => Jr(G.id, !1));
      k(O), N(D);
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
      const k = x.reduce((T, A) => A.selected ? [...T, Jr(A.id, !1)] : T, []), N = y.reduce((T, A) => A.selected ? [...T, Jr(A.id, !1)] : T, []);
      S(k), C(N);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: S, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: k, nodeExtent: N } = w();
      y[0][0] === N[0][0] && y[0][1] === N[0][1] && y[1][0] === N[1][0] && y[1][1] === N[1][1] || (qv(x, S, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: k,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: S, height: C, panZoom: _, translateExtent: k } = w();
      return yj({ delta: y, panZoom: _, transform: x, translateExtent: k, width: S, height: C });
    },
    setCenter: async (y, x, S) => {
      const { width: C, height: _, maxZoom: k, panZoom: N } = w();
      if (!N)
        return Promise.resolve(!1);
      const T = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : k;
      return await N.setViewport({
        x: C / 2 - y * T,
        y: _ / 2 - x * T,
        zoom: T
      }, { duration: S == null ? void 0 : S.duration, ease: S == null ? void 0 : S.ease, interpolate: S == null ? void 0 : S.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ..._R }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...M_() })
  };
}, Object.is);
function EN({ initialNodes: e, initialEdges: t, defaultNodes: r, defaultEdges: o, initialWidth: s, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: g, children: m }) {
  const [w] = R.useState(() => qq({
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
    nodeExtent: g
  }));
  return I.jsx(tD, { value: w, children: I.jsx(kD, { children: m }) });
}
function zq({ children: e, nodes: t, edges: r, defaultNodes: o, defaultEdges: s, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: g, nodeExtent: m }) {
  return R.useContext(cu) ? I.jsx(I.Fragment, { children: e }) : I.jsx(EN, { initialNodes: t, initialEdges: r, defaultNodes: o, defaultEdges: s, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: g, nodeExtent: m, children: e });
}
const Fq = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function $q({ nodes: e, edges: t, defaultNodes: r, defaultEdges: o, className: s, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: g, onMoveEnd: m, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: N, onNodeDoubleClick: T, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onSelectionChange: X, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: $, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: q, onBeforeDelete: Q, connectionMode: j, connectionLineType: W = kr.Bezier, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: K = "Shift", selectionOnDrag: te = !1, selectionMode: se = ks.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = Ns() ? "Meta" : "Control", zoomActivationKeyCode: de = Ns() ? "Meta" : "Control", snapToGrid: pe, snapGrid: be, onlyRenderVisibleElements: ve = !1, selectNodesOnDrag: Ne, nodesDraggable: Ee, autoPanOnNodeFocus: Qe, nodesConnectable: Ve, nodesFocusable: Ft, nodeOrigin: ht = ZR, edgesFocusable: at, edgesReconnectable: He, elementsSelectable: en = !0, defaultViewport: $t = pD, minZoom: tn = 0.5, maxZoom: Bt = 2, translateExtent: _t = Cs, preventScrolling: Or = !0, nodeExtent: Vt, defaultMarkerColor: jn = "#b1b1b7", zoomOnScroll: go = !0, zoomOnPinch: Tt = !0, panOnScroll: Ht = !1, panOnScrollSpeed: $u = 0.5, panOnScrollMode: xi = no.Free, zoomOnDoubleClick: _i = !0, panOnDrag: bi = !0, onPaneClick: Si, onPaneMouseEnter: Ei, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Ks, onPaneContextMenu: Xs, paneClickDistance: Qs = 1, nodeClickDistance: Zs = 0, children: Js, onReconnect: Ci, onReconnectStart: ea, onReconnectEnd: Lr, onEdgeContextMenu: ki, onEdgeDoubleClick: jr, onEdgeMouseEnter: Bu, onEdgeMouseMove: Dr, onEdgeMouseLeave: mo, reconnectRadius: vo = 10, onNodesChange: Ri, onEdgesChange: Vu, noDragClassName: Hu = "nodrag", noWheelClassName: Wu = "nowheel", noPanClassName: xn = "nopan", fitView: Ni, fitViewOptions: Pi, connectOnClick: Uu, attributionPosition: ta, proOptions: na, defaultEdgeOptions: ra, elevateNodesOnSelect: oa, elevateEdgesOnSelect: Gu, disableKeyboardA11y: ia = !1, autoPanOnConnect: We, autoPanOnNodeDrag: Yu, autoPanSpeed: Ti, connectionRadius: sa, isValidConnection: yo, onError: Ku, style: aa, id: qr, nodeDragThreshold: Wt, connectionDragThreshold: Xu, viewport: At, onViewportChange: Qu, width: Zu, height: Ju, colorMode: wo = "light", debug: xo, onScroll: _n, ariaLabelConfig: _o, ...ec }, tc) {
  const zr = qr || "1", la = yD(wo), Ai = R.useCallback((nr) => {
    nr.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), _n == null || _n(nr);
  }, [_n]);
  return I.jsx("div", { "data-testid": "rf__wrapper", ...ec, onScroll: Ai, style: { ...aa, ...Fq }, ref: tc, className: nt(["react-flow", s, la]), id: qr, role: "application", children: I.jsxs(zq, { nodes: e, edges: t, width: Zu, height: Ju, fitView: Ni, fitViewOptions: Pi, minZoom: tn, maxZoom: Bt, nodeOrigin: ht, nodeExtent: Vt, children: [I.jsx(Dq, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: N, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: l, connectionLineType: W, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, selectionKeyCode: K, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: ve, defaultViewport: $t, translateExtent: _t, minZoom: tn, maxZoom: Bt, preventScrolling: Or, zoomOnScroll: go, zoomOnPinch: Tt, zoomOnDoubleClick: _i, panOnScroll: Ht, panOnScrollSpeed: $u, panOnScrollMode: xi, panOnDrag: bi, onPaneClick: Si, onPaneMouseEnter: Ei, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Ks, onPaneContextMenu: Xs, paneClickDistance: Qs, nodeClickDistance: Zs, onSelectionContextMenu: Y, onSelectionStart: M, onSelectionEnd: q, onReconnect: Ci, onReconnectStart: ea, onReconnectEnd: Lr, onEdgeContextMenu: ki, onEdgeDoubleClick: jr, onEdgeMouseEnter: Bu, onEdgeMouseMove: Dr, onEdgeMouseLeave: mo, reconnectRadius: vo, defaultMarkerColor: jn, noDragClassName: Hu, noWheelClassName: Wu, noPanClassName: xn, rfId: zr, disableKeyboardA11y: ia, nodeExtent: Vt, viewport: At, onViewportChange: Qu }), I.jsx(vD, { nodes: e, edges: t, defaultNodes: r, defaultEdges: o, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, nodesDraggable: Ee, autoPanOnNodeFocus: Qe, nodesConnectable: Ve, nodesFocusable: Ft, edgesFocusable: at, edgesReconnectable: He, elementsSelectable: en, elevateNodesOnSelect: oa, elevateEdgesOnSelect: Gu, minZoom: tn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: Ri, onEdgesChange: Vu, snapToGrid: pe, snapGrid: be, connectionMode: j, translateExtent: _t, connectOnClick: Uu, defaultEdgeOptions: ra, fitView: Ni, fitViewOptions: Pi, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: $, onMove: h, onMoveStart: g, onMoveEnd: m, noPanClassName: xn, nodeOrigin: ht, rfId: zr, autoPanOnConnect: We, autoPanOnNodeDrag: Yu, autoPanSpeed: Ti, onError: Ku, connectionRadius: sa, isValidConnection: yo, selectNodesOnDrag: Ne, nodeDragThreshold: Wt, connectionDragThreshold: Xu, onBeforeDelete: Q, debug: xo, ariaLabelConfig: _o }), I.jsx(hD, { onSelectionChange: X }), Js, I.jsx(lD, { proOptions: na, position: ta }), I.jsx(aD, { rfId: zr, disableKeyboardA11y: ia })] }) });
}
eN($q);
function Bq({ dimensions: e, lineWidth: t, variant: r, className: o }) {
  return I.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", r, o]) });
}
function Vq({ radius: e, className: t }) {
  return I.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Rr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Rr || (Rr = {}));
const Hq = {
  [Rr.Dots]: 1,
  [Rr.Lines]: 1,
  [Rr.Cross]: 6
}, Wq = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function CN({
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
  const g = R.useRef(null), { transform: m, patternId: w } = Ie(Wq, Ye), E = o || Hq[t], y = t === Rr.Dots, x = t === Rr.Cross, S = Array.isArray(r) ? r : [r, r], C = [S[0] * m[2] || 1, S[1] * m[2] || 1], _ = E * m[2], k = Array.isArray(a) ? a : [a, a], N = x ? [_, _] : C, T = [
    k[0] * m[2] || 1 + N[0] / 2,
    k[1] * m[2] || 1 + N[1] / 2
  ], A = `${w}${e || ""}`;
  return I.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...du,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: g, "data-testid": "rf__background", children: [I.jsx("pattern", { id: A, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? I.jsx(Vq, { radius: _ / 2, className: h }) : I.jsx(Bq, { dimensions: N, lineWidth: s, variant: t, className: h }) }), I.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
CN.displayName = "Background";
R.memo(CN);
function Uq() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: I.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function Gq() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: I.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function Yq() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: I.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function Kq() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function Xq() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function wl({ children: e, className: t, ...r }) {
  return I.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...r, children: e });
}
const Qq = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function kN({ style: e, showZoom: t = !0, showFitView: r = !0, showInteractive: o = !0, fitViewOptions: s, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: g = "bottom-left", orientation: m = "vertical", "aria-label": w }) {
  const E = Fe(), { isInteractive: y, minZoomReached: x, maxZoomReached: S, ariaLabelConfig: C } = Ie(Qq, Ye), { zoomIn: _, zoomOut: k, fitView: N } = my(), T = () => {
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
  }, G = m === "horizontal" ? "horizontal" : "vertical";
  return I.jsxs(fu, { className: nt(["react-flow__controls", G, d]), position: g, style: e, "data-testid": "rf__controls", "aria-label": w ?? C["controls.ariaLabel"], children: [t && I.jsxs(I.Fragment, { children: [I.jsx(wl, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: S, children: I.jsx(Uq, {}) }), I.jsx(wl, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: I.jsx(Gq, {}) })] }), r && I.jsx(wl, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: I.jsx(Yq, {}) }), o && I.jsx(wl, { className: "react-flow__controls-interactive", onClick: D, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? I.jsx(Xq, {}) : I.jsx(Kq, {}) }), h] });
}
kN.displayName = "Controls";
R.memo(kN);
function Zq({ id: e, x: t, y: r, width: o, height: s, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: g, selected: m, onClick: w }) {
  const { background: E, backgroundColor: y } = a || {}, x = l || E || y;
  return I.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: r, rx: h, ry: h, width: o, height: s, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: g, onClick: w ? (S) => w(S, e) : void 0 });
}
const Jq = R.memo(Zq), e3 = (e) => e.nodes.map((t) => t.id), Zf = (e) => e instanceof Function ? e : () => e;
function t3({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: r = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = Jq,
  onClick: l
}) {
  const u = Ie(e3, Ye), f = Zf(t), d = Zf(e), h = Zf(r), g = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return I.jsx(I.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    I.jsx(r3, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: s, NodeComponent: a, onClick: l, shapeRendering: g }, m)
  )) });
}
function n3({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: r, nodeClassNameFunc: o, nodeBorderRadius: s, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: g, width: m, height: w } = Ie((E) => {
    const { internals: y } = E.nodeLookup.get(e), x = y.userNode, { x: S, y: C } = y.positionAbsolute, { width: _, height: k } = Qn(x);
    return {
      node: x,
      x: S,
      y: C,
      width: _,
      height: k
    };
  }, Ye);
  return !d || d.hidden || !NR(d) ? null : I.jsx(u, { x: h, y: g, width: m, height: w, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: s, strokeColor: r(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const r3 = R.memo(n3);
var o3 = R.memo(t3);
const i3 = 200, s3 = 150, a3 = (e) => !e.hidden, l3 = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? RR(qs(e.nodeLookup, { filter: a3 }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, u3 = "react-flow__minimap-desc";
function RN({
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
  maskStrokeWidth: g,
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
  const N = Fe(), T = R.useRef(null), { boundingRect: A, viewBB: O, rfId: D, panZoom: G, translateExtent: B, flowWidth: V, flowHeight: X, ariaLabelConfig: L } = Ie(l3, Ye), H = (e == null ? void 0 : e.width) ?? i3, $ = (e == null ? void 0 : e.height) ?? s3, Y = A.width / H, M = A.height / $, q = Math.max(Y, M), Q = q * H, j = q * $, W = k * q, ie = A.x - (Q - A.width) / 2 - W, F = A.y - (j - A.height) / 2 - W, Z = Q + W * 2, ee = j + W * 2, K = `${u3}-${D}`, te = R.useRef(0), se = R.useRef();
  te.current = q, R.useEffect(() => {
    if (T.current && G)
      return se.current = Rj({
        domNode: T.current,
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
    const [be, ve] = ((Ne = se.current) == null ? void 0 : Ne.pointer(pe)) || [0, 0];
    w(pe, { x: be, y: ve });
  } : void 0, ce = E ? R.useCallback((pe, be) => {
    const ve = N.getState().nodeLookup.get(be).internals.userNode;
    E(pe, ve);
  }, []) : void 0, de = S ?? L["minimap.ariaLabel"];
  return I.jsx(fu, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof g == "number" ? g * q : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: I.jsxs("svg", { width: H, height: $, viewBox: `${ie} ${F} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": K, ref: T, onClick: ae, children: [de && I.jsx("title", { id: K, children: de }), I.jsx(o3, { onClick: ce, nodeColor: o, nodeStrokeColor: r, nodeBorderRadius: a, nodeClassName: s, nodeStrokeWidth: l, nodeComponent: u }), I.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - W},${F - W}h${Z + W * 2}v${ee + W * 2}h${-Z - W * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
RN.displayName = "MiniMap";
R.memo(RN);
const c3 = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, f3 = {
  [ai.Line]: "right",
  [ai.Handle]: "bottom-right"
};
function d3({ nodeId: e, position: t, variant: r = ai.Handle, className: o, style: s = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: g = !1, resizeDirection: m, autoScale: w = !0, shouldResize: E, onResizeStart: y, onResize: x, onResizeEnd: S }) {
  const C = oN(), _ = typeof e == "string" ? e : C, k = Fe(), N = R.useRef(null), T = r === ai.Handle, A = Ie(R.useCallback(c3(T && w), [T, w]), Ye), O = R.useRef(null), D = t ?? f3[r];
  R.useEffect(() => {
    if (!(!N.current || !_))
      return O.current || (O.current = $j({
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
          const { triggerNodeChanges: X, nodeLookup: L, parentLookup: H, nodeOrigin: $ } = k.getState(), Y = [], M = { x: B.x, y: B.y }, q = L.get(_);
          if (q && q.expandParent && q.parentId) {
            const Q = q.origin ?? $, j = B.width ?? q.measured.width ?? 0, W = B.height ?? q.measured.height ?? 0, ie = {
              id: q.id,
              parentId: q.parentId,
              rect: {
                width: j,
                height: W,
                ...PR({
                  x: B.x ?? q.position.x,
                  y: B.y ?? q.position.y
                }, { width: j, height: W }, q.parentId, L, Q)
              }
            }, F = gy([ie], L, H, $);
            Y.push(...F), M.x = B.x ? Math.max(Q[0] * j, B.x) : void 0, M.y = B.y ? Math.max(Q[1] * W, B.y) : void 0;
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
            const j = {
              id: _,
              type: "dimensions",
              resizing: !0,
              setAttributes: m ? m === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: B.width,
                height: B.height
              }
            };
            Y.push(j);
          }
          for (const Q of V) {
            const j = {
              ...Q,
              type: "position"
            };
            Y.push(j);
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
        keepAspectRatio: g,
        resizeDirection: m,
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
    g,
    y,
    x,
    S,
    E
  ]);
  const G = D.split("-");
  return I.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...G, r, o]), ref: N, style: {
    ...s,
    scale: A,
    ...l && { [T ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
R.memo(d3);
function NN(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = NN(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function PN() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = NN(e)) && (o && (o += " "), o += t);
  return o;
}
const h3 = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    r[o] = e[o];
  for (let o = 0; o < t.length; o++)
    r[e.length + o] = t[o];
  return r;
}, p3 = (e, t) => ({
  classGroupId: e,
  validator: t
}), TN = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Gl = "-", O_ = [], g3 = "arbitrary..", m3 = (e) => {
  const t = y3(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return v3(l);
      const u = l.split(Gl), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return AN(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = r[l];
        return f ? d ? h3(d, f) : f : d || O_;
      }
      return r[l] || O_;
    }
  };
}, AN = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const s = e[t], a = r.nextPart.get(s);
  if (a) {
    const d = AN(e, t + 1, a);
    if (d) return d;
  }
  const l = r.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(Gl) : e.slice(t).join(Gl), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, v3 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), o = t.slice(0, r);
  return o ? g3 + o : void 0;
})(), y3 = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return w3(r, t);
}, w3 = (e, t) => {
  const r = TN();
  for (const o in e) {
    const s = e[o];
    yy(s, r, o, t);
  }
  return r;
}, yy = (e, t, r, o) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const l = e[a];
    x3(l, t, r, o);
  }
}, x3 = (e, t, r, o) => {
  if (typeof e == "string") {
    _3(e, t, r);
    return;
  }
  if (typeof e == "function") {
    b3(e, t, r, o);
    return;
  }
  S3(e, t, r, o);
}, _3 = (e, t, r) => {
  const o = e === "" ? t : IN(t, e);
  o.classGroupId = r;
}, b3 = (e, t, r, o) => {
  if (E3(e)) {
    yy(e(o), t, r, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(p3(r, e));
}, S3 = (e, t, r, o) => {
  const s = Object.entries(e), a = s.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = s[l];
    yy(f, IN(t, u), r, o);
  }
}, IN = (e, t) => {
  let r = e;
  const o = t.split(Gl), s = o.length;
  for (let a = 0; a < s; a++) {
    const l = o[a];
    let u = r.nextPart.get(l);
    u || (u = TN(), r.nextPart.set(l, u)), r = u;
  }
  return r;
}, E3 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, C3 = (e) => {
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
}, $v = "!", L_ = ":", k3 = [], j_ = (e, t, r, o, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: o,
  isExternal: s
}), R3 = (e) => {
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
        if (x === L_) {
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
    const g = a.length === 0 ? s : s.slice(f);
    let m = g, w = !1;
    g.endsWith($v) ? (m = g.slice(0, -1), w = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      g.startsWith($v) && (m = g.slice(1), w = !0)
    );
    const E = d && d > f ? d - f : void 0;
    return j_(a, w, m, E);
  };
  if (t) {
    const s = t + L_, a = o;
    o = (l) => l.startsWith(s) ? a(l.slice(s.length)) : j_(k3, !1, l, void 0, !0);
  }
  if (r) {
    const s = o;
    o = (a) => r({
      className: a,
      parseClassName: s
    });
  }
  return o;
}, N3 = (e) => {
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
}, P3 = (e) => ({
  cache: C3(e.cacheSize),
  parseClassName: R3(e),
  sortModifiers: N3(e),
  ...m3(e)
}), T3 = /\s+/, A3 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(T3);
  let f = "";
  for (let d = u.length - 1; d >= 0; d -= 1) {
    const h = u[d], {
      isExternal: g,
      modifiers: m,
      hasImportantModifier: w,
      baseClassName: E,
      maybePostfixModifierPosition: y
    } = r(h);
    if (g) {
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
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), _ = w ? C + $v : C, k = _ + S;
    if (l.indexOf(k) > -1)
      continue;
    l.push(k);
    const N = s(S, x);
    for (let T = 0; T < N.length; ++T) {
      const A = N[T];
      l.push(_ + A);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, I3 = (...e) => {
  let t = 0, r, o, s = "";
  for (; t < e.length; )
    (r = e[t++]) && (o = MN(r)) && (s && (s += " "), s += o);
  return s;
}, MN = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = MN(e[o])) && (r && (r += " "), r += t);
  return r;
}, M3 = (e, ...t) => {
  let r, o, s, a;
  const l = (f) => {
    const d = t.reduce((h, g) => g(h), e());
    return r = P3(d), o = r.cache.get, s = r.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = A3(f, r);
    return s(f, h), h;
  };
  return a = l, (...f) => a(I3(...f));
}, O3 = [], st = (e) => {
  const t = (r) => r[e] || O3;
  return t.isThemeGetter = !0, t;
}, ON = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, LN = /^\((?:(\w[\w-]*):)?(.+)\)$/i, L3 = /^\d+\/\d+$/, j3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, D3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, q3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, z3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, F3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Wo = (e) => L3.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), Er = (e) => !!e && Number.isInteger(Number(e)), Jf = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Un = (e) => j3.test(e), $3 = () => !0, B3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  D3.test(e) && !q3.test(e)
), jN = () => !1, V3 = (e) => z3.test(e), H3 = (e) => F3.test(e), W3 = (e) => !xe(e) && !_e(e), U3 = (e) => ui(e, zN, jN), xe = (e) => ON.test(e), Zr = (e) => ui(e, FN, B3), ed = (e) => ui(e, Q3, Te), D_ = (e) => ui(e, DN, jN), G3 = (e) => ui(e, qN, H3), xl = (e) => ui(e, $N, V3), _e = (e) => LN.test(e), ds = (e) => ci(e, FN), Y3 = (e) => ci(e, Z3), q_ = (e) => ci(e, DN), K3 = (e) => ci(e, zN), X3 = (e) => ci(e, qN), _l = (e) => ci(e, $N, !0), ui = (e, t, r) => {
  const o = ON.exec(e);
  return o ? o[1] ? t(o[1]) : r(o[2]) : !1;
}, ci = (e, t, r = !1) => {
  const o = LN.exec(e);
  return o ? o[1] ? t(o[1]) : r : !1;
}, DN = (e) => e === "position" || e === "percentage", qN = (e) => e === "image" || e === "url", zN = (e) => e === "length" || e === "size" || e === "bg-size", FN = (e) => e === "length", Q3 = (e) => e === "number", Z3 = (e) => e === "family-name", $N = (e) => e === "shadow", J3 = () => {
  const e = st("color"), t = st("font"), r = st("text"), o = st("font-weight"), s = st("tracking"), a = st("leading"), l = st("breakpoint"), u = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), g = st("inset-shadow"), m = st("text-shadow"), w = st("drop-shadow"), E = st("blur"), y = st("perspective"), x = st("aspect"), S = st("ease"), C = st("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], N = () => [...k(), _e, xe], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [_e, xe, f], D = () => [Wo, "full", "auto", ...O()], G = () => [Er, "none", "subgrid", _e, xe], B = () => ["auto", {
    span: ["full", Er, _e, xe]
  }, Er, _e, xe], V = () => [Er, "auto", _e, xe], X = () => ["auto", "min", "max", "fr", _e, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...O()], Y = () => [Wo, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, _e, xe], q = () => [...k(), q_, D_, {
    position: [_e, xe]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", K3, U3, {
    size: [_e, xe]
  }], W = () => [Jf, ds, Zr], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    _e,
    xe
  ], F = () => ["", Te, ds, Zr], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [Te, Jf, q_, D_], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    _e,
    xe
  ], se = () => ["none", Te, _e, xe], ae = () => ["none", Te, _e, xe], ce = () => [Te, _e, xe], de = () => [Wo, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Un],
      breakpoint: [Un],
      color: [$3],
      container: [Un],
      "drop-shadow": [Un],
      ease: ["in", "out", "in-out"],
      font: [W3],
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
        flex: [Te, Wo, "auto", "initial", "none", xe]
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
        font: [o, _e, ed]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Jf, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Y3, xe, t]
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
        "line-clamp": [Te, "none", _e, ed]
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
        decoration: [Te, "from-font", "auto", _e, Zr]
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
        bg: q()
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
          }, Er, _e, xe],
          radial: ["", _e, xe],
          conic: [Er, _e, xe]
        }, X3, G3]
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
        outline: ["", Te, ds, Zr]
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
          _l,
          xl
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
        "inset-shadow": ["none", g, _l, xl]
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
        "ring-offset": [Te, Zr]
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
        "text-shadow": ["none", m, _l, xl]
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
        mask: q()
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
          _l,
          xl
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
        stroke: [Te, ds, Zr, ed]
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
}, ez = /* @__PURE__ */ M3(J3);
function et(...e) {
  return ez(PN(e));
}
function fi(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? me.Left : me.Right;
    return /* @__PURE__ */ I.jsx(fi, { type: f, position: d, id: u.id });
  }
  const {
    className: t,
    children: r,
    style: o,
    ...s
  } = e, [a, l] = R.useState(!1);
  return /* @__PURE__ */ I.jsx(
    As,
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
      className: et(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        t
      ),
      children: r
    }
  );
}
function z_(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Bs(...e) {
  return (t) => {
    let r = !1;
    const o = e.map((s) => {
      const a = z_(s, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : z_(e[s], null);
        }
      };
  };
}
function tt(...e) {
  return R.useCallback(Bs(...e), e);
}
var tz = Symbol.for("react.lazy"), Yl = ey[" use ".trim().toString()];
function nz(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function BN(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === tz && "_payload" in e && nz(e._payload);
}
// @__NO_SIDE_EFFECTS__
function rz(e) {
  const t = /* @__PURE__ */ iz(e), r = R.forwardRef((o, s) => {
    let { children: a, ...l } = o;
    BN(a) && typeof Yl == "function" && (a = Yl(a._payload));
    const u = R.Children.toArray(a), f = u.find(az);
    if (f) {
      const d = f.props.children, h = u.map((g) => g === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : g);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var oz = /* @__PURE__ */ rz("Slot");
// @__NO_SIDE_EFFECTS__
function iz(e) {
  const t = R.forwardRef((r, o) => {
    let { children: s, ...a } = r;
    if (BN(s) && typeof Yl == "function" && (s = Yl(s._payload)), R.isValidElement(s)) {
      const l = uz(s), u = lz(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Bs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sz = Symbol("radix.slottable");
function az(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sz;
}
function lz(e, t) {
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
function uz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const F_ = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $_ = PN, cz = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return $_(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: a } = t, l = Object.keys(s).map((d) => {
    const h = r == null ? void 0 : r[d], g = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = F_(h) || F_(g);
    return s[d][m];
  }), u = r && Object.entries(r).reduce((d, h) => {
    let [g, m] = h;
    return m === void 0 || (d[g] = m), d;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, h) => {
    let { class: g, className: m, ...w } = h;
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
      g,
      m
    ] : d;
  }, []);
  return $_(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, fz = cz(
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
function VN({
  className: e,
  variant: t,
  asChild: r = !1,
  ...o
}) {
  const s = r ? oz : "span";
  return /* @__PURE__ */ I.jsx(
    s,
    {
      "data-slot": "badge",
      className: et(fz({ variant: t }), e),
      ...o
    }
  );
}
const HN = cn.createContext(null), dz = ({ content: e }) => {
  const t = cn.useContext(HN);
  if (!t)
    return /* @__PURE__ */ I.jsx("div", { className: "text-muted-foreground text-xs", children: "No node context available" });
  const { nodeId: r, nodeData: o, onValueChange: s } = t;
  switch (e.type) {
    case "inputs":
      return /* @__PURE__ */ I.jsx(hz, { inputs: [] });
    case "outputs":
      return /* @__PURE__ */ I.jsx(pz, { outputs: [] });
    default:
      return /* @__PURE__ */ I.jsx("div", { children: "Unknown content type" });
  }
}, hz = ({ inputs: e }) => e.length === 0 ? null : /* @__PURE__ */ I.jsx("div", { className: "inputs-container flex flex-col gap-2", children: e.map((t) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-start", children: [
  /* @__PURE__ */ I.jsx(
    fi,
    {
      type: "target",
      position: me.Left,
      id: t.id
    }
  ),
  /* @__PURE__ */ I.jsx(VN, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: t.label })
] }, `input-${t.id}`)) }), pz = ({ outputs: e }) => e.length === 0 ? null : /* @__PURE__ */ I.jsx("div", { className: "outputs-container flex flex-col gap-2", children: e.map((t) => /* @__PURE__ */ I.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-end", children: [
  /* @__PURE__ */ I.jsx(VN, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: t.label }),
  /* @__PURE__ */ I.jsx(
    fi,
    {
      type: "source",
      position: me.Right,
      id: t.id
    }
  )
] }, `output-${t.id}`)) }), gz = ({ item: e }) => {
  const t = mz(e.coordinates);
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: `grid-item ${e.class_name || ""}`.trim(),
      style: {
        gridArea: t,
        ...e.style
      },
      "data-grid-item-id": e.id,
      children: /* @__PURE__ */ I.jsx(dz, { content: e.content })
    }
  );
};
function mz(e) {
  const t = e.row + e.row_span, r = e.col + e.col_span;
  return `${e.row} / ${e.col} / ${t} / ${r}`;
}
const vz = ({ layout: e }) => {
  const t = yz(e.grid);
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: `grid-layout ${e.class_name || ""}`.trim(),
      style: {
        ...t,
        ...e.style
      },
      children: e.items.map((r) => /* @__PURE__ */ I.jsx(gz, { item: r }, r.id))
    }
  );
};
function yz(e) {
  const t = {
    display: "grid",
    gridTemplateRows: B_(e.rows, e.row_sizes),
    gridTemplateColumns: B_(e.cols, e.col_sizes),
    gap: Array.isArray(e.gap) ? `${e.gap[0]} ${e.gap[1]}` : e.gap || "8px"
  };
  return e.auto_rows && (t.gridAutoRows = e.auto_rows), e.auto_cols && (t.gridAutoColumns = e.auto_cols), e.justify_items && (t.justifyItems = e.justify_items), e.align_items && (t.alignItems = e.align_items), t;
}
function B_(e, t) {
  return typeof e == "number" ? t && t.length > 0 ? t.join(" ") : `repeat(${e}, 1fr)` : e.join(" ");
}
const wz = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function WN(e) {
  if ("component" in e) {
    const { component: d } = e, h = d.handle_type === "input" ? "target" : "source", g = d.handle_type === "input" ? me.Left : me.Right, m = d.label + (d.required ? " *" : "");
    return /* @__PURE__ */ I.jsx(WN, { type: h, position: g, id: d.id, title: m });
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
      className: et(
        "relative flex items-center",
        wz[a],
        t
      ),
      ref: u,
      children: [
        /* @__PURE__ */ I.jsx(
          fi,
          {
            position: a,
            className: o,
            ...f
          }
        ),
        /* @__PURE__ */ I.jsx("label", { className: et("text-foreground px-3", r), children: s })
      ]
    }
  );
}
const xz = {
  [me.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [me.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [me.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [me.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function UN(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? me.Left : me.Right;
    return /* @__PURE__ */ I.jsx(UN, { type: f, position: d, id: u.id, showButton: !0, children: /* @__PURE__ */ I.jsxs("div", { className: "px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors", children: [
      u.label,
      u.required && /* @__PURE__ */ I.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }) });
  }
  const {
    showButton: t = !0,
    position: r = me.Bottom,
    children: o,
    ...s
  } = e, a = xz[r || me.Bottom], l = r === me.Top || r === me.Bottom;
  return /* @__PURE__ */ I.jsx(fi, { position: r, id: s.id, ...s, children: t && /* @__PURE__ */ I.jsxs(
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
      className: et(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  );
}
function _z(e) {
  if ("component" in e) {
    const { component: a, onValueChange: l } = e;
    return /* @__PURE__ */ I.jsxs("div", { className: "component-text-field", children: [
      /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600 mb-1", children: a.label }),
      /* @__PURE__ */ I.jsx(
        Kl,
        {
          type: "text",
          value: a.value || "",
          onChange: (u) => l == null ? void 0 : l(a.id, u.target.value),
          onMouseDown: (u) => u.stopPropagation(),
          onPointerDown: (u) => u.stopPropagation(),
          placeholder: a.placeholder,
          "aria-label": a.label,
          className: "h-8 text-xs"
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
      onChange: (a) => r(a.target.value),
      onMouseDown: (a) => a.stopPropagation(),
      onPointerDown: (a) => a.stopPropagation(),
      placeholder: o,
      "aria-label": s,
      className: "h-8 text-xs"
    }
  );
}
function bz(e) {
  if ("component" in e) {
    const { component: l, onValueChange: u } = e;
    return /* @__PURE__ */ I.jsxs("div", { className: "component-number-field", children: [
      /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600 mb-1", children: l.label }),
      /* @__PURE__ */ I.jsx(
        Kl,
        {
          type: "number",
          value: l.value ?? 0,
          step: "any",
          onChange: (f) => u == null ? void 0 : u(l.id, Number(f.target.value)),
          onMouseDownCapture: (f) => f.stopPropagation(),
          onPointerDownCapture: (f) => f.stopPropagation(),
          onWheel: (f) => f.currentTarget.blur(),
          "aria-label": l.label,
          className: "h-8 text-xs"
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
      onChange: (l) => r(Number(l.target.value)),
      onMouseDownCapture: (l) => l.stopPropagation(),
      onPointerDownCapture: (l) => l.stopPropagation(),
      onWheel: (l) => l.currentTarget.blur(),
      placeholder: s,
      "aria-label": a,
      className: "h-8 text-xs"
    }
  );
}
function pu(e, t = []) {
  let r = [];
  function o(a, l) {
    const u = R.createContext(l), f = r.length;
    r = [...r, l];
    const d = (g) => {
      var S;
      const { scope: m, children: w, ...E } = g, y = ((S = m == null ? void 0 : m[e]) == null ? void 0 : S[f]) || u, x = R.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ I.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(g, m) {
      var y;
      const w = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, E = R.useContext(w);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${g}\` must be used within \`${a}\``);
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
  return s.scopeName = e, [o, Sz(s, ...t)];
}
function Sz(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const l = o.reduce((u, { useScope: f, scopeName: d }) => {
        const g = f(a)[`__scope${d}`];
        return { ...u, ...g };
      }, {});
      return R.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
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
var yt = globalThis != null && globalThis.document ? R.useLayoutEffect : () => {
}, Ez = ey[" useInsertionEffect ".trim().toString()] || yt;
function Bv({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: o
}) {
  const [s, a, l] = Cz({
    defaultProp: t,
    onChange: r
  }), u = e !== void 0, f = u ? e : s;
  {
    const h = R.useRef(e !== void 0);
    R.useEffect(() => {
      const g = h.current;
      g !== u && console.warn(
        `${o} is changing from ${g ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), h.current = u;
    }, [u, o]);
  }
  const d = R.useCallback(
    (h) => {
      var g;
      if (u) {
        const m = kz(h) ? h(e) : h;
        m !== e && ((g = l.current) == null || g.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function Cz({
  defaultProp: e,
  onChange: t
}) {
  const [r, o] = R.useState(e), s = R.useRef(r), a = R.useRef(t);
  return Ez(() => {
    a.current = t;
  }, [t]), R.useEffect(() => {
    var l;
    s.current !== r && ((l = a.current) == null || l.call(a, r), s.current = r);
  }, [r, s]), [r, o, a];
}
function kz(e) {
  return typeof e == "function";
}
function GN(e) {
  const t = R.useRef({ value: e, previous: e });
  return R.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function YN(e) {
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
function Rz(e, t) {
  return R.useReducer((r, o) => t[r][o] ?? r, e);
}
var KN = (e) => {
  const { present: t, children: r } = e, o = Nz(t), s = typeof r == "function" ? r({ present: o.isPresent }) : R.Children.only(r), a = tt(o.ref, Pz(s));
  return typeof r == "function" || o.isPresent ? R.cloneElement(s, { ref: a }) : null;
};
KN.displayName = "Presence";
function Nz(e) {
  const [t, r] = R.useState(), o = R.useRef(null), s = R.useRef(e), a = R.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = Rz(l, {
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
    const d = bl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = s.current;
    if (h !== e) {
      const m = a.current, w = bl(d);
      e ? f("MOUNT") : w === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, g = (w) => {
        const y = bl(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && y && (f("ANIMATION_END"), !s.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (w) => {
        w.target === t && (a.current = bl(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", g), t.addEventListener("animationend", g), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", g), t.removeEventListener("animationend", g);
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
function bl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Pz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function Tz(e) {
  const t = /* @__PURE__ */ Az(e), r = R.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = R.Children.toArray(a), f = u.find(Mz);
    if (f) {
      const d = f.props.children, h = u.map((g) => g === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : g);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Az(e) {
  const t = R.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (R.isValidElement(s)) {
      const l = Lz(s), u = Oz(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Bs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Iz = Symbol("radix.slottable");
function Mz(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Iz;
}
function Oz(e, t) {
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
function Lz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var jz = [
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
], $e = jz.reduce((e, t) => {
  const r = /* @__PURE__ */ Tz(`Primitive.${t}`), o = R.forwardRef((s, a) => {
    const { asChild: l, ...u } = s, f = l ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ I.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Dz(e, t) {
  e && $s.flushSync(() => e.dispatchEvent(t));
}
var gu = "Checkbox", [qz] = pu(gu), [zz, wy] = qz(gu);
function Fz(e) {
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
    internal_do_not_use_render: g
  } = e, [m, w] = Bv({
    prop: r,
    defaultProp: s ?? !1,
    onChange: f,
    caller: gu
  }), [E, y] = R.useState(null), [x, S] = R.useState(null), C = R.useRef(!1), _ = E ? !!l || !!E.closest("form") : (
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
    defaultChecked: Nr(s) ? !1 : s,
    isFormControl: _,
    bubbleInput: x,
    setBubbleInput: S
  };
  return /* @__PURE__ */ I.jsx(
    zz,
    {
      scope: t,
      ...k,
      children: $z(g) ? g(k) : o
    }
  );
}
var XN = "CheckboxTrigger", QN = R.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...o }, s) => {
    const {
      control: a,
      value: l,
      disabled: u,
      checked: f,
      required: d,
      setControl: h,
      setChecked: g,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: w,
      bubbleInput: E
    } = wy(XN, e), y = tt(s, h), x = R.useRef(f);
    return R.useEffect(() => {
      const S = a == null ? void 0 : a.form;
      if (S) {
        const C = () => g(x.current);
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [a, g]), /* @__PURE__ */ I.jsx(
      $e.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Nr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": rP(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Xe(t, (S) => {
          S.key === "Enter" && S.preventDefault();
        }),
        onClick: Xe(r, (S) => {
          g((C) => Nr(C) ? !0 : !C), E && w && (m.current = S.isPropagationStopped(), m.current || S.stopPropagation());
        })
      }
    );
  }
);
QN.displayName = XN;
var ZN = R.forwardRef(
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
      ...g
    } = e;
    return /* @__PURE__ */ I.jsx(
      Fz,
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
            QN,
            {
              ...g,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ I.jsx(
            nP,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
ZN.displayName = gu;
var JN = "CheckboxIndicator", eP = R.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: o, ...s } = e, a = wy(JN, r);
    return /* @__PURE__ */ I.jsx(
      KN,
      {
        present: o || Nr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ I.jsx(
          $e.span,
          {
            "data-state": rP(a.checked),
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
eP.displayName = JN;
var tP = "CheckboxBubbleInput", nP = R.forwardRef(
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
      form: g,
      bubbleInput: m,
      setBubbleInput: w
    } = wy(tP, e), E = tt(r, w), y = GN(a), x = YN(o);
    R.useEffect(() => {
      const C = m;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, T = !s.current;
      if (y !== a && N) {
        const A = new Event("click", { bubbles: T });
        C.indeterminate = Nr(a), N.call(C, Nr(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [m, y, a, s]);
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
        form: g,
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
nP.displayName = tP;
function $z(e) {
  return typeof e == "function";
}
function Nr(e) {
  return e === "indeterminate";
}
function rP(e) {
  return Nr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bz = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vz = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), V_ = (e) => {
  const t = Vz(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, oP = (...e) => e.filter((t, r, o) => !!t && t.trim() !== "" && o.indexOf(t) === r).join(" ").trim(), Hz = (e) => {
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
var Wz = {
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
const Uz = R.forwardRef(
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
      ...Wz,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(r) * 24 / Number(t) : r,
      className: oP("lucide", s),
      ...!a && !Hz(u) && { "aria-hidden": "true" },
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
const xy = (e, t) => {
  const r = R.forwardRef(
    ({ className: o, ...s }, a) => R.createElement(Uz, {
      ref: a,
      iconNode: t,
      className: oP(
        `lucide-${Bz(V_(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = V_(e), r;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gz = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], iP = xy("check", Gz);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yz = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], sP = xy("chevron-down", Yz);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kz = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Xz = xy("chevron-up", Kz);
function H_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    ZN,
    {
      "data-slot": "checkbox",
      className: et(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(
        eP,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ I.jsx(iP, { className: "size-3.5" })
        }
      )
    }
  );
}
function Qz(e) {
  if ("component" in e) {
    const { component: s, onValueChange: a } = e;
    return /* @__PURE__ */ I.jsxs("div", { className: "component-bool-field flex items-center gap-2", children: [
      /* @__PURE__ */ I.jsx(
        H_,
        {
          checked: s.value || !1,
          onCheckedChange: (l) => a == null ? void 0 : a(s.id, l === !0),
          onMouseDown: (l) => l.stopPropagation(),
          onPointerDown: (l) => l.stopPropagation(),
          "aria-label": s.label,
          className: "h-4 w-4"
        }
      ),
      /* @__PURE__ */ I.jsx("label", { className: "text-sm text-gray-700", children: s.label })
    ] });
  }
  const { value: t, onChange: r, label: o } = e;
  return /* @__PURE__ */ I.jsx(
    H_,
    {
      checked: t,
      onCheckedChange: (s) => r(s === !0),
      onMouseDown: (s) => s.stopPropagation(),
      onPointerDown: (s) => s.stopPropagation(),
      "aria-label": o,
      className: "h-4 w-4"
    }
  );
}
function W_(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function U_(e) {
  const t = /* @__PURE__ */ Zz(e), r = R.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = R.Children.toArray(a), f = u.find(eF);
    if (f) {
      const d = f.props.children, h = u.map((g) => g === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : g);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Zz(e) {
  const t = R.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (R.isValidElement(s)) {
      const l = nF(s), u = tF(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Bs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Jz = Symbol("radix.slottable");
function eF(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jz;
}
function tF(e, t) {
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
function nF(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function rF(e) {
  const t = e + "CollectionProvider", [r, o] = pu(t), [s, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: S } = y, C = cn.useRef(null), _ = cn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.jsx(s, { scope: x, itemMap: _, collectionRef: C, children: S });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ U_(u), d = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C } = y, _ = a(u, S), k = tt(x, _.collectionRef);
      return /* @__PURE__ */ I.jsx(f, { ref: k, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", g = "data-radix-collection-item", m = /* @__PURE__ */ U_(h), w = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C, ..._ } = y, k = cn.useRef(null), N = tt(x, k), T = a(h, S);
      return cn.useEffect(() => (T.itemMap.set(k, { ref: k, ..._ }), () => void T.itemMap.delete(k))), /* @__PURE__ */ I.jsx(m, { [g]: "", ref: N, children: C });
    }
  );
  w.displayName = h;
  function E(y) {
    const x = a(e + "CollectionConsumer", y);
    return cn.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const _ = Array.from(C.querySelectorAll(`[${g}]`));
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
var oF = R.createContext(void 0);
function iF(e) {
  const t = R.useContext(oF);
  return e || t || "ltr";
}
function so(e) {
  const t = R.useRef(e);
  return R.useEffect(() => {
    t.current = e;
  }), R.useMemo(() => (...r) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...r);
  }, []);
}
function sF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = so(e);
  R.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [r, t]);
}
var aF = "DismissableLayer", Vv = "dismissableLayer.update", lF = "dismissableLayer.pointerDownOutside", uF = "dismissableLayer.focusOutside", G_, aP = R.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lP = R.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = R.useContext(aP), [h, g] = R.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = R.useState({}), E = tt(t, (A) => g(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), S = y.indexOf(x), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= S, N = dF((A) => {
      const O = A.target, D = [...d.branches].some((G) => G.contains(O));
      !k || D || (s == null || s(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m), T = hF((A) => {
      const O = A.target;
      [...d.branches].some((G) => G.contains(O)) || (a == null || a(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m);
    return sF((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, m), R.useEffect(() => {
      if (h)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (G_ = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), Y_(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = G_);
        };
    }, [h, m, r, d]), R.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), Y_());
    }, [h, d]), R.useEffect(() => {
      const A = () => w({});
      return document.addEventListener(Vv, A), () => document.removeEventListener(Vv, A);
    }, []), /* @__PURE__ */ I.jsx(
      $e.div,
      {
        ...f,
        ref: E,
        style: {
          pointerEvents: _ ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Xe(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Xe(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Xe(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
lP.displayName = aF;
var cF = "DismissableLayerBranch", fF = R.forwardRef((e, t) => {
  const r = R.useContext(aP), o = R.useRef(null), s = tt(t, o);
  return R.useEffect(() => {
    const a = o.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ I.jsx($e.div, { ...e, ref: s });
});
fF.displayName = cF;
function dF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = so(e), o = R.useRef(!1), s = R.useRef(() => {
  });
  return R.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          uP(
            lF,
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
function hF(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = so(e), o = R.useRef(!1);
  return R.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && uP(uF, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Y_() {
  const e = new CustomEvent(Vv);
  document.dispatchEvent(e);
}
function uP(e, t, r, { discrete: o }) {
  const s = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), o ? Dz(s, a) : s.dispatchEvent(a);
}
var td = 0;
function pF() {
  R.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? K_()), document.body.insertAdjacentElement("beforeend", e[1] ?? K_()), td++, () => {
      td === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), td--;
    };
  }, []);
}
function K_() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var nd = "focusScope.autoFocusOnMount", rd = "focusScope.autoFocusOnUnmount", X_ = { bubbles: !1, cancelable: !0 }, gF = "FocusScope", cP = R.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = R.useState(null), d = so(s), h = so(a), g = R.useRef(null), m = tt(t, (y) => f(y)), w = R.useRef({
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
        u.contains(k) ? g.current = k : Cr(g.current, { select: !0 });
      }, x = function(_) {
        if (w.paused || !u) return;
        const k = _.relatedTarget;
        k !== null && (u.contains(k) || Cr(g.current, { select: !0 }));
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
      Z_.add(w);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const S = new CustomEvent(nd, X_);
        u.addEventListener(nd, d), u.dispatchEvent(S), S.defaultPrevented || (mF(_F(fP(u)), { select: !0 }), document.activeElement === y && Cr(u));
      }
      return () => {
        u.removeEventListener(nd, d), setTimeout(() => {
          const S = new CustomEvent(rd, X_);
          u.addEventListener(rd, h), u.dispatchEvent(S), S.defaultPrevented || Cr(y ?? document.body, { select: !0 }), u.removeEventListener(rd, h), Z_.remove(w);
        }, 0);
      };
    }
  }, [u, d, h, w]);
  const E = R.useCallback(
    (y) => {
      if (!r && !o || w.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, S = document.activeElement;
      if (x && S) {
        const C = y.currentTarget, [_, k] = vF(C);
        _ && k ? !y.shiftKey && S === k ? (y.preventDefault(), r && Cr(_, { select: !0 })) : y.shiftKey && S === _ && (y.preventDefault(), r && Cr(k, { select: !0 })) : S === C && y.preventDefault();
      }
    },
    [r, o, w.paused]
  );
  return /* @__PURE__ */ I.jsx($e.div, { tabIndex: -1, ...l, ref: m, onKeyDown: E });
});
cP.displayName = gF;
function mF(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const o of e)
    if (Cr(o, { select: t }), document.activeElement !== r) return;
}
function vF(e) {
  const t = fP(e), r = Q_(t, e), o = Q_(t.reverse(), e);
  return [r, o];
}
function fP(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Q_(e, t) {
  for (const r of e)
    if (!yF(r, { upTo: t })) return r;
}
function yF(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function wF(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && wF(e) && t && e.select();
  }
}
var Z_ = xF();
function xF() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = J_(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = J_(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function J_(e, t) {
  const r = [...e], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function _F(e) {
  return e.filter((t) => t.tagName !== "A");
}
var bF = ey[" useId ".trim().toString()] || (() => {
}), SF = 0;
function _y(e) {
  const [t, r] = R.useState(bF());
  return yt(() => {
    r((o) => o ?? String(SF++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const EF = ["top", "right", "bottom", "left"], Pr = Math.min, jt = Math.max, Xl = Math.round, Sl = Math.floor, Tn = (e) => ({
  x: e,
  y: e
}), CF = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kF = {
  start: "end",
  end: "start"
};
function Hv(e, t, r) {
  return jt(e, Pr(t, r));
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
const RF = /* @__PURE__ */ new Set(["top", "bottom"]);
function Nn(e) {
  return RF.has(Xn(e)) ? "y" : "x";
}
function Ey(e) {
  return by(Nn(e));
}
function NF(e, t, r) {
  r === void 0 && (r = !1);
  const o = di(e), s = Ey(e), a = Sy(s);
  let l = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = Ql(l)), [l, Ql(l)];
}
function PF(e) {
  const t = Ql(e);
  return [Wv(e), t, Wv(t)];
}
function Wv(e) {
  return e.replace(/start|end/g, (t) => kF[t]);
}
const e1 = ["left", "right"], t1 = ["right", "left"], TF = ["top", "bottom"], AF = ["bottom", "top"];
function IF(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? t1 : e1 : t ? e1 : t1;
    case "left":
    case "right":
      return t ? TF : AF;
    default:
      return [];
  }
}
function MF(e, t, r, o) {
  const s = di(e);
  let a = IF(Xn(e), r === "start", o);
  return s && (a = a.map((l) => l + "-" + s), t && (a = a.concat(a.map(Wv)))), a;
}
function Ql(e) {
  return e.replace(/left|right|bottom|top/g, (t) => CF[t]);
}
function OF(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function dP(e) {
  return typeof e != "number" ? OF(e) : {
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
function n1(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const a = Nn(t), l = Ey(t), u = Sy(l), f = Xn(t), d = a === "y", h = o.x + o.width / 2 - s.width / 2, g = o.y + o.height / 2 - s.height / 2, m = o[u] / 2 - s[u] / 2;
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
        y: g
      };
      break;
    case "left":
      w = {
        x: o.x - s.width,
        y: g
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
const LF = async (e, t, r) => {
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
    y: g
  } = n1(d, o, f), m = o, w = {}, E = 0;
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
      y: g,
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
    h = C ?? h, g = _ ?? g, w = {
      ...w,
      [x]: {
        ...w[x],
        ...k
      }
    }, N && E <= 50 && (E++, typeof N == "object" && (N.placement && (m = N.placement), N.rects && (d = N.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : N.rects), {
      x: h,
      y: g
    } = n1(d, m, f)), y = -1);
  }
  return {
    x: h,
    y: g,
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
    elementContext: g = "floating",
    altBoundary: m = !1,
    padding: w = 0
  } = Kn(t, e), E = dP(w), x = u[m ? g === "floating" ? "reference" : "floating" : g], S = Zl(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(x))) == null || r ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = g === "floating" ? {
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
  }, N = Zl(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const jF = (e) => ({
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
    const g = dP(h), m = {
      x: r,
      y: o
    }, w = Ey(s), E = Sy(w), y = await l.getDimensions(d), x = w === "y", S = x ? "top" : "left", C = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", k = a.reference[E] + a.reference[w] - m[w] - a.floating[E], N = m[w] - a.reference[w], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let A = T ? T[_] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(T))) && (A = u.floating[_] || a.floating[E]);
    const O = k / 2 - N / 2, D = A / 2 - y[E] / 2 - 1, G = Pr(g[S], D), B = Pr(g[C], D), V = G, X = A - y[E] - B, L = A / 2 - y[E] / 2 + O, H = Hv(V, L, X), $ = !f.arrow && di(s) != null && L !== H && a.reference[E] / 2 - (L < V ? G : B) - y[E] / 2 < 0, Y = $ ? L < V ? L - V : L - X : 0;
    return {
      [w]: m[w] + Y,
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
}), DF = function(e) {
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
        crossAxis: g = !0,
        fallbackPlacements: m,
        fallbackStrategy: w = "bestFit",
        fallbackAxisSideDirection: E = "none",
        flipAlignment: y = !0,
        ...x
      } = Kn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const S = Xn(s), C = Nn(u), _ = Xn(u) === u, k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), N = m || (_ || !y ? [Ql(u)] : PF(u)), T = E !== "none";
      !m && T && N.push(...MF(u, y, E, k));
      const A = [u, ...N], O = await Is(t, x), D = [];
      let G = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && D.push(O[S]), g) {
        const L = NF(s, l, k);
        D.push(O[L[0]], O[L[1]]);
      }
      if (G = [...G, {
        placement: s,
        overflows: D
      }], !D.every((L) => L <= 0)) {
        var B, V;
        const L = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, H = A[L];
        if (H && (!(g === "alignment" ? C !== Nn(H) : !1) || // We leave the current main axis only if every placement on that axis
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
                  const q = Nn(M.placement);
                  return q === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((q) => q > 0).reduce((q, Q) => q + Q, 0)]).sort((M, q) => M[1] - q[1])[0]) == null ? void 0 : X[0];
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
function r1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function o1(e) {
  return EF.some((t) => e[t] >= 0);
}
const qF = function(e) {
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
          }), l = r1(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: o1(l)
            }
          };
        }
        case "escaped": {
          const a = await Is(t, {
            ...s,
            altBoundary: !0
          }), l = r1(a, r.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: o1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, hP = /* @__PURE__ */ new Set(["left", "top"]);
async function zF(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), l = Xn(r), u = di(r), f = Nn(r) === "y", d = hP.has(l) ? -1 : 1, h = a && f ? -1 : 1, g = Kn(t, e);
  let {
    mainAxis: m,
    crossAxis: w,
    alignmentAxis: E
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: g.mainAxis || 0,
    crossAxis: g.crossAxis || 0,
    alignmentAxis: g.alignmentAxis
  };
  return u && typeof E == "number" && (w = u === "end" ? E * -1 : E), f ? {
    x: w * h,
    y: m * d
  } : {
    x: m * d,
    y: w * h
  };
}
const FF = function(e) {
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
      } = t, f = await zF(t, e);
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
}, $F = function(e) {
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
      }, h = await Is(t, f), g = Nn(Xn(s)), m = by(g);
      let w = d[m], E = d[g];
      if (a) {
        const x = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", C = w + h[x], _ = w - h[S];
        w = Hv(C, w, _);
      }
      if (l) {
        const x = g === "y" ? "top" : "left", S = g === "y" ? "bottom" : "right", C = E + h[x], _ = E - h[S];
        E = Hv(C, E, _);
      }
      const y = u.fn({
        ...t,
        [m]: w,
        [g]: E
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - o,
          enabled: {
            [m]: a,
            [g]: l
          }
        }
      };
    }
  };
}, BF = function(e) {
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
      }, g = Nn(s), m = by(g);
      let w = h[m], E = h[g];
      const y = Kn(u, t), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const _ = m === "y" ? "height" : "width", k = a.reference[m] - a.floating[_] + x.mainAxis, N = a.reference[m] + a.reference[_] - x.mainAxis;
        w < k ? w = k : w > N && (w = N);
      }
      if (d) {
        var S, C;
        const _ = m === "y" ? "width" : "height", k = hP.has(Xn(s)), N = a.reference[g] - a.floating[_] + (k && ((S = l.offset) == null ? void 0 : S[g]) || 0) + (k ? 0 : x.crossAxis), T = a.reference[g] + a.reference[_] + (k ? 0 : ((C = l.offset) == null ? void 0 : C[g]) || 0) - (k ? x.crossAxis : 0);
        E < N ? E = N : E > T && (E = T);
      }
      return {
        [m]: w,
        [g]: E
      };
    }
  };
}, VF = function(e) {
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
      } = Kn(e, t), h = await Is(t, d), g = Xn(s), m = di(s), w = Nn(s) === "y", {
        width: E,
        height: y
      } = a.floating;
      let x, S;
      g === "top" || g === "bottom" ? (x = g, S = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (S = g, x = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = E - h.left - h.right, k = Pr(y - h[x], C), N = Pr(E - h[S], _), T = !t.middlewareData.shift;
      let A = k, O = N;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (O = _), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), T && !m) {
        const G = jt(h.left, 0), B = jt(h.right, 0), V = jt(h.top, 0), X = jt(h.bottom, 0);
        w ? O = E - 2 * (G !== 0 || B !== 0 ? G + B : jt(h.left, h.right)) : A = y - 2 * (V !== 0 || X !== 0 ? V + X : jt(h.top, h.bottom));
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
function mu() {
  return typeof window < "u";
}
function hi(e) {
  return pP(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function On(e) {
  var t;
  return (t = (pP(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pP(e) {
  return mu() ? e instanceof Node || e instanceof qt(e).Node : !1;
}
function gn(e) {
  return mu() ? e instanceof Element || e instanceof qt(e).Element : !1;
}
function In(e) {
  return mu() ? e instanceof HTMLElement || e instanceof qt(e).HTMLElement : !1;
}
function i1(e) {
  return !mu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qt(e).ShadowRoot;
}
const HF = /* @__PURE__ */ new Set(["inline", "contents"]);
function Vs(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = mn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !HF.has(s);
}
const WF = /* @__PURE__ */ new Set(["table", "td", "th"]);
function UF(e) {
  return WF.has(hi(e));
}
const GF = [":popover-open", ":modal"];
function vu(e) {
  return GF.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const YF = ["transform", "translate", "scale", "rotate", "perspective"], KF = ["transform", "translate", "scale", "rotate", "perspective", "filter"], XF = ["paint", "layout", "strict", "content"];
function Cy(e) {
  const t = ky(), r = gn(e) ? mn(e) : e;
  return YF.some((o) => r[o] ? r[o] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || KF.some((o) => (r.willChange || "").includes(o)) || XF.some((o) => (r.contain || "").includes(o));
}
function QF(e) {
  let t = Tr(e);
  for (; In(t) && !li(t); ) {
    if (Cy(t))
      return t;
    if (vu(t))
      return null;
    t = Tr(t);
  }
  return null;
}
function ky() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ZF = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function li(e) {
  return ZF.has(hi(e));
}
function mn(e) {
  return qt(e).getComputedStyle(e);
}
function yu(e) {
  return gn(e) ? {
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
    i1(e) && e.host || // Fallback.
    On(e)
  );
  return i1(t) ? t.host : t;
}
function gP(e) {
  const t = Tr(e);
  return li(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && Vs(t) ? t : gP(t);
}
function Ms(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = gP(e), a = s === ((o = e.ownerDocument) == null ? void 0 : o.body), l = qt(s);
  if (a) {
    const u = Uv(l);
    return t.concat(l, l.visualViewport || [], Vs(s) ? s : [], u && r ? Ms(u) : []);
  }
  return t.concat(s, Ms(s, [], r));
}
function Uv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function mP(e) {
  const t = mn(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = In(e), a = s ? e.offsetWidth : r, l = s ? e.offsetHeight : o, u = Xl(r) !== a || Xl(o) !== l;
  return u && (r = a, o = l), {
    width: r,
    height: o,
    $: u
  };
}
function Ry(e) {
  return gn(e) ? e : e.contextElement;
}
function Jo(e) {
  const t = Ry(e);
  if (!In(t))
    return Tn(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: a
  } = mP(t);
  let l = (a ? Xl(r.width) : r.width) / o, u = (a ? Xl(r.height) : r.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const JF = /* @__PURE__ */ Tn(0);
function vP(e) {
  const t = qt(e);
  return !ky() || !t.visualViewport ? JF : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function e4(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== qt(e) ? !1 : t;
}
function ao(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), a = Ry(e);
  let l = Tn(1);
  t && (o ? gn(o) && (l = Jo(o)) : l = Jo(e));
  const u = e4(a, r, o) ? vP(a) : Tn(0);
  let f = (s.left + u.x) / l.x, d = (s.top + u.y) / l.y, h = s.width / l.x, g = s.height / l.y;
  if (a) {
    const m = qt(a), w = o && gn(o) ? qt(o) : o;
    let E = m, y = Uv(E);
    for (; y && o && w !== E; ) {
      const x = Jo(y), S = y.getBoundingClientRect(), C = mn(y), _ = S.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, k = S.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, g *= x.y, f += _, d += k, E = qt(y), y = Uv(E);
    }
  }
  return Zl({
    width: h,
    height: g,
    x: f,
    y: d
  });
}
function wu(e, t) {
  const r = yu(e).scrollLeft;
  return t ? t.left + r : ao(On(e)).left + r;
}
function yP(e, t) {
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - wu(e, r), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function t4(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: o,
    strategy: s
  } = e;
  const a = s === "fixed", l = On(o), u = t ? vu(t.floating) : !1;
  if (o === l || u && a)
    return r;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Tn(1);
  const h = Tn(0), g = In(o);
  if ((g || !g && !a) && ((hi(o) !== "body" || Vs(l)) && (f = yu(o)), In(o))) {
    const w = ao(o);
    d = Jo(o), h.x = w.x + o.clientLeft, h.y = w.y + o.clientTop;
  }
  const m = l && !g && !a ? yP(l, f) : Tn(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: r.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function n4(e) {
  return Array.from(e.getClientRects());
}
function r4(e) {
  const t = On(e), r = yu(e), o = e.ownerDocument.body, s = jt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = jt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -r.scrollLeft + wu(e);
  const u = -r.scrollTop;
  return mn(o).direction === "rtl" && (l += jt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
const s1 = 25;
function o4(e, t) {
  const r = qt(e), o = On(e), s = r.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (s) {
    a = s.width, l = s.height;
    const h = ky();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  const d = wu(o);
  if (d <= 0) {
    const h = o.ownerDocument, g = h.body, m = getComputedStyle(g), w = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, E = Math.abs(o.clientWidth - g.clientWidth - w);
    E <= s1 && (a -= E);
  } else d <= s1 && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const i4 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function s4(e, t) {
  const r = ao(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, a = In(e) ? Jo(e) : Tn(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = s * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function a1(e, t, r) {
  let o;
  if (t === "viewport")
    o = o4(e, r);
  else if (t === "document")
    o = r4(On(e));
  else if (gn(t))
    o = s4(t, r);
  else {
    const s = vP(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Zl(o);
}
function wP(e, t) {
  const r = Tr(e);
  return r === t || !gn(r) || li(r) ? !1 : mn(r).position === "fixed" || wP(r, t);
}
function a4(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = Ms(e, [], !1).filter((u) => gn(u) && hi(u) !== "body"), s = null;
  const a = mn(e).position === "fixed";
  let l = a ? Tr(e) : e;
  for (; gn(l) && !li(l); ) {
    const u = mn(l), f = Cy(l);
    !f && u.position === "fixed" && (s = null), (a ? !f && !s : !f && u.position === "static" && !!s && i4.has(s.position) || Vs(l) && !f && wP(e, l)) ? o = o.filter((h) => h !== l) : s = u, l = Tr(l);
  }
  return t.set(e, o), o;
}
function l4(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const l = [...r === "clippingAncestors" ? vu(t) ? [] : a4(t, this._c) : [].concat(r), o], u = l[0], f = l.reduce((d, h) => {
    const g = a1(t, h, s);
    return d.top = jt(g.top, d.top), d.right = Pr(g.right, d.right), d.bottom = Pr(g.bottom, d.bottom), d.left = jt(g.left, d.left), d;
  }, a1(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function u4(e) {
  const {
    width: t,
    height: r
  } = mP(e);
  return {
    width: t,
    height: r
  };
}
function c4(e, t, r) {
  const o = In(t), s = On(t), a = r === "fixed", l = ao(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Tn(0);
  function d() {
    f.x = wu(s);
  }
  if (o || !o && !a)
    if ((hi(t) !== "body" || Vs(s)) && (u = yu(t)), o) {
      const w = ao(t, !0, a, t);
      f.x = w.x + t.clientLeft, f.y = w.y + t.clientTop;
    } else s && d();
  a && !o && s && d();
  const h = s && !o && !a ? yP(s, u) : Tn(0), g = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: g,
    y: m,
    width: l.width,
    height: l.height
  };
}
function od(e) {
  return mn(e).position === "static";
}
function l1(e, t) {
  if (!In(e) || mn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return On(e) === r && (r = r.ownerDocument.body), r;
}
function xP(e, t) {
  const r = qt(e);
  if (vu(e))
    return r;
  if (!In(e)) {
    let s = Tr(e);
    for (; s && !li(s); ) {
      if (gn(s) && !od(s))
        return s;
      s = Tr(s);
    }
    return r;
  }
  let o = l1(e, t);
  for (; o && UF(o) && od(o); )
    o = l1(o, t);
  return o && li(o) && od(o) && !Cy(o) ? r : o || QF(e) || r;
}
const f4 = async function(e) {
  const t = this.getOffsetParent || xP, r = this.getDimensions, o = await r(e.floating);
  return {
    reference: c4(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function d4(e) {
  return mn(e).direction === "rtl";
}
const h4 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: t4,
  getDocumentElement: On,
  getClippingRect: l4,
  getOffsetParent: xP,
  getElementRects: f4,
  getClientRects: n4,
  getDimensions: u4,
  getScale: Jo,
  isElement: gn,
  isRTL: d4
};
function _P(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function p4(e, t) {
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
      top: g,
      width: m,
      height: w
    } = d;
    if (u || t(), !m || !w)
      return;
    const E = Sl(g), y = Sl(s.clientWidth - (h + m)), x = Sl(s.clientHeight - (g + w)), S = Sl(h), _ = {
      rootMargin: -E + "px " + -y + "px " + -x + "px " + -S + "px",
      threshold: jt(0, Pr(1, f)) || 1
    };
    let k = !0;
    function N(T) {
      const A = T[0].intersectionRatio;
      if (A !== f) {
        if (!k)
          return l();
        A ? l(!1, A) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !_P(d, e.getBoundingClientRect()) && l(), k = !1;
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
function g4(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = Ry(e), h = s || a ? [...d ? Ms(d) : [], ...Ms(t)] : [];
  h.forEach((S) => {
    s && S.addEventListener("scroll", r, {
      passive: !0
    }), a && S.addEventListener("resize", r);
  });
  const g = d && u ? p4(d, r) : null;
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
    y && !_P(y, S) && r(), y = S, E = requestAnimationFrame(x);
  }
  return r(), () => {
    var S;
    h.forEach((C) => {
      s && C.removeEventListener("scroll", r), a && C.removeEventListener("resize", r);
    }), g == null || g(), (S = w) == null || S.disconnect(), w = null, f && cancelAnimationFrame(E);
  };
}
const m4 = FF, v4 = $F, y4 = DF, w4 = VF, x4 = qF, u1 = jF, _4 = BF, b4 = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: h4,
    ...r
  }, a = {
    ...s.platform,
    _c: o
  };
  return LF(e, t, {
    ...s,
    platform: a
  });
};
var S4 = typeof document < "u", E4 = function() {
}, Ml = S4 ? R.useLayoutEffect : E4;
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
function bP(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function c1(e, t) {
  const r = bP(e);
  return Math.round(t * r) / r;
}
function id(e) {
  const t = R.useRef(e);
  return Ml(() => {
    t.current = e;
  }), t;
}
function C4(e) {
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
  } = e, [h, g] = R.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, w] = R.useState(o);
  Jl(m, o) || w(o);
  const [E, y] = R.useState(null), [x, S] = R.useState(null), C = R.useCallback((M) => {
    M !== T.current && (T.current = M, y(M));
  }, []), _ = R.useCallback((M) => {
    M !== A.current && (A.current = M, S(M));
  }, []), k = a || E, N = l || x, T = R.useRef(null), A = R.useRef(null), O = R.useRef(h), D = f != null, G = id(f), B = id(s), V = id(d), X = R.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: m
    };
    B.current && (M.platform = B.current), b4(T.current, A.current, M).then((q) => {
      const Q = {
        ...q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !Jl(O.current, Q) && (O.current = Q, $s.flushSync(() => {
        g(Q);
      }));
    });
  }, [m, t, r, B, V]);
  Ml(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, g((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = R.useRef(!1);
  Ml(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Ml(() => {
    if (k && (T.current = k), N && (A.current = N), k && N) {
      if (G.current)
        return G.current(k, N, X);
      X();
    }
  }, [k, N, X, G, D]);
  const H = R.useMemo(() => ({
    reference: T,
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
    const q = c1($.floating, h.x), Q = c1($.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + q + "px, " + Q + "px)",
      ...bP($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: q,
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
const k4 = (e) => {
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
      return o && t(o) ? o.current != null ? u1({
        element: o.current,
        padding: s
      }).fn(r) : {} : o ? u1({
        element: o,
        padding: s
      }).fn(r) : {};
    }
  };
}, R4 = (e, t) => ({
  ...m4(e),
  options: [e, t]
}), N4 = (e, t) => ({
  ...v4(e),
  options: [e, t]
}), P4 = (e, t) => ({
  ..._4(e),
  options: [e, t]
}), T4 = (e, t) => ({
  ...y4(e),
  options: [e, t]
}), A4 = (e, t) => ({
  ...w4(e),
  options: [e, t]
}), I4 = (e, t) => ({
  ...x4(e),
  options: [e, t]
}), M4 = (e, t) => ({
  ...k4(e),
  options: [e, t]
});
var O4 = "Arrow", SP = R.forwardRef((e, t) => {
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
SP.displayName = O4;
var L4 = SP, Ny = "Popper", [EP, CP] = pu(Ny), [j4, kP] = EP(Ny), RP = (e) => {
  const { __scopePopper: t, children: r } = e, [o, s] = R.useState(null);
  return /* @__PURE__ */ I.jsx(j4, { scope: t, anchor: o, onAnchorChange: s, children: r });
};
RP.displayName = Ny;
var NP = "PopperAnchor", PP = R.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: o, ...s } = e, a = kP(NP, r), l = R.useRef(null), u = tt(t, l), f = R.useRef(null);
    return R.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ I.jsx($e.div, { ...s, ref: u });
  }
);
PP.displayName = NP;
var Py = "PopperContent", [D4, q4] = EP(Py), TP = R.forwardRef(
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
      sticky: g = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: E,
      ...y
    } = e, x = kP(Py, r), [S, C] = R.useState(null), _ = tt(t, (pe) => C(pe)), [k, N] = R.useState(null), T = YN(k), A = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, D = o + (a !== "center" ? "-" + a : ""), G = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, B = Array.isArray(d) ? d : [d], V = B.length > 0, X = {
      padding: G,
      boundary: B.filter(F4),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: $, isPositioned: Y, middlewareData: M } = C4({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...pe) => g4(...pe, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        R4({ mainAxis: s + O, alignmentAxis: l }),
        f && N4({
          mainAxis: !0,
          crossAxis: !1,
          limiter: g === "partial" ? P4() : void 0,
          ...X
        }),
        f && T4({ ...X }),
        A4({
          ...X,
          apply: ({ elements: pe, rects: be, availableWidth: ve, availableHeight: Ne }) => {
            const { width: Ee, height: Qe } = be.reference, Ve = pe.floating.style;
            Ve.setProperty("--radix-popper-available-width", `${ve}px`), Ve.setProperty("--radix-popper-available-height", `${Ne}px`), Ve.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ve.setProperty("--radix-popper-anchor-height", `${Qe}px`);
          }
        }),
        k && M4({ element: k, padding: u }),
        $4({ arrowWidth: A, arrowHeight: O }),
        m && I4({ strategy: "referenceHidden", ...X })
      ]
    }), [q, Q] = MP($), j = so(E);
    yt(() => {
      Y && (j == null || j());
    }, [Y, j]);
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
          D4,
          {
            scope: r,
            placedSide: q,
            onArrowChange: N,
            arrowX: W,
            arrowY: ie,
            shouldHideArrow: F,
            children: /* @__PURE__ */ I.jsx(
              $e.div,
              {
                "data-side": q,
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
TP.displayName = Py;
var AP = "PopperArrow", z4 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, IP = R.forwardRef(function(t, r) {
  const { __scopePopper: o, ...s } = t, a = q4(AP, o), l = z4[a.placedSide];
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
          L4,
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
IP.displayName = AP;
function F4(e) {
  return e !== null;
}
var $4 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, S, C;
    const { placement: r, rects: o, middlewareData: s } = t, l = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = MP(r), g = { start: "0%", center: "50%", end: "100%" }[h], m = (((S = s.arrow) == null ? void 0 : S.x) ?? 0) + u / 2, w = (((C = s.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = l ? g : `${m}px`, y = `${-f}px`) : d === "top" ? (E = l ? g : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = l ? g : `${w}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = l ? g : `${w}px`), { data: { x: E, y } };
  }
});
function MP(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var B4 = RP, V4 = PP, H4 = TP, W4 = IP, U4 = "Portal", OP = R.forwardRef((e, t) => {
  var u;
  const { container: r, ...o } = e, [s, a] = R.useState(!1);
  yt(() => a(!0), []);
  const l = r || s && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? eD.createPortal(/* @__PURE__ */ I.jsx($e.div, { ...o, ref: t }), l) : null;
});
OP.displayName = U4;
// @__NO_SIDE_EFFECTS__
function G4(e) {
  const t = /* @__PURE__ */ Y4(e), r = R.forwardRef((o, s) => {
    const { children: a, ...l } = o, u = R.Children.toArray(a), f = u.find(X4);
    if (f) {
      const d = f.props.children, h = u.map((g) => g === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : g);
      return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ I.jsx(t, { ...l, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Y4(e) {
  const t = R.forwardRef((r, o) => {
    const { children: s, ...a } = r;
    if (R.isValidElement(s)) {
      const l = Z4(s), u = Q4(a, s.props);
      return s.type !== R.Fragment && (u.ref = o ? Bs(o, l) : l), R.cloneElement(s, u);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var K4 = Symbol("radix.slottable");
function X4(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === K4;
}
function Q4(e, t) {
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
function Z4(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var LP = Object.freeze({
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
}), J4 = "VisuallyHidden", e$ = R.forwardRef(
  (e, t) => /* @__PURE__ */ I.jsx(
    $e.span,
    {
      ...e,
      ref: t,
      style: { ...LP, ...e.style }
    }
  )
);
e$.displayName = J4;
var t$ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Uo = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap(), Cl = {}, sd = 0, jP = function(e) {
  return e && (e.host || jP(e.parentNode));
}, n$ = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var o = jP(r);
    return o && e.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, r$ = function(e, t, r, o) {
  var s = n$(t, Array.isArray(e) ? e : [e]);
  Cl[r] || (Cl[r] = /* @__PURE__ */ new WeakMap());
  var a = Cl[r], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), d = function(g) {
    !g || u.has(g) || (u.add(g), d(g.parentNode));
  };
  s.forEach(d);
  var h = function(g) {
    !g || f.has(g) || Array.prototype.forEach.call(g.children, function(m) {
      if (u.has(m))
        h(m);
      else
        try {
          var w = m.getAttribute(o), E = w !== null && w !== "false", y = (Uo.get(m) || 0) + 1, x = (a.get(m) || 0) + 1;
          Uo.set(m, y), a.set(m, x), l.push(m), y === 1 && E && El.set(m, !0), x === 1 && m.setAttribute(r, "true"), E || m.setAttribute(o, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", m, S);
        }
    });
  };
  return h(t), u.clear(), sd++, function() {
    l.forEach(function(g) {
      var m = Uo.get(g) - 1, w = a.get(g) - 1;
      Uo.set(g, m), a.set(g, w), m || (El.has(g) || g.removeAttribute(o), El.delete(g)), w || g.removeAttribute(r);
    }), sd--, sd || (Uo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap(), Cl = {});
  };
}, o$ = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = t$(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), r$(o, s, r, "aria-hidden")) : function() {
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
function DP(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
  return r;
}
function i$(e, t, r) {
  if (r || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ol = "right-scroll-bar-position", Ll = "width-before-scroll-bar", s$ = "with-scroll-bars-hidden", a$ = "--removed-body-scroll-bar-size";
function ad(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function l$(e, t) {
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
var u$ = typeof window < "u" ? R.useLayoutEffect : R.useEffect, f1 = /* @__PURE__ */ new WeakMap();
function c$(e, t) {
  var r = l$(null, function(o) {
    return e.forEach(function(s) {
      return ad(s, o);
    });
  });
  return u$(function() {
    var o = f1.get(r);
    if (o) {
      var s = new Set(o), a = new Set(e), l = r.current;
      s.forEach(function(u) {
        a.has(u) || ad(u, null);
      }), a.forEach(function(u) {
        s.has(u) || ad(u, l);
      });
    }
    f1.set(r, e);
  }, [e]), r;
}
function f$(e) {
  return e;
}
function d$(e, t) {
  t === void 0 && (t = f$);
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
function h$(e) {
  e === void 0 && (e = {});
  var t = d$(null);
  return t.options = Rn({ async: !0, ssr: !1 }, e), t;
}
var qP = function(e) {
  var t = e.sideCar, r = DP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return R.createElement(o, Rn({}, r));
};
qP.isSideCarExport = !0;
function p$(e, t) {
  return e.useMedium(t), qP;
}
var zP = h$(), ld = function() {
}, xu = R.forwardRef(function(e, t) {
  var r = R.useRef(null), o = R.useState({
    onScrollCapture: ld,
    onWheelCapture: ld,
    onTouchMoveCapture: ld
  }), s = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, g = e.shards, m = e.sideCar, w = e.noRelative, E = e.noIsolation, y = e.inert, x = e.allowPinchZoom, S = e.as, C = S === void 0 ? "div" : S, _ = e.gapMode, k = DP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = m, T = c$([r, t]), A = Rn(Rn({}, k), s);
  return R.createElement(
    R.Fragment,
    null,
    h && R.createElement(N, { sideCar: zP, removeScrollBar: d, shards: g, noRelative: w, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: r, gapMode: _ }),
    l ? R.cloneElement(R.Children.only(u), Rn(Rn({}, A), { ref: T })) : R.createElement(C, Rn({}, A, { className: f, ref: T }), u)
  );
});
xu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xu.classNames = {
  fullWidth: Ll,
  zeroRight: Ol
};
var g$ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function m$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = g$();
  return t && e.setAttribute("nonce", t), e;
}
function v$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function y$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var w$ = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = m$()) && (v$(t, r), y$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, x$ = function() {
  var e = w$();
  return function(t, r) {
    R.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, FP = function() {
  var e = x$(), t = function(r) {
    var o = r.styles, s = r.dynamic;
    return e(o, s), null;
  };
  return t;
}, _$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ud = function(e) {
  return parseInt(e || "", 10) || 0;
}, b$ = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ud(r), ud(o), ud(s)];
}, S$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return _$;
  var t = b$(e), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, E$ = FP(), ei = "data-scroll-locked", C$ = function(e, t, r, o) {
  var s = e.left, a = e.top, l = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(s$, ` {
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
  
  .`).concat(Ol, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ll, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ol, " .").concat(Ol, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ll, " .").concat(Ll, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ei, `] {
    `).concat(a$, ": ").concat(u, `px;
  }
`);
}, d1 = function() {
  var e = parseInt(document.body.getAttribute(ei) || "0", 10);
  return isFinite(e) ? e : 0;
}, k$ = function() {
  R.useEffect(function() {
    return document.body.setAttribute(ei, (d1() + 1).toString()), function() {
      var e = d1() - 1;
      e <= 0 ? document.body.removeAttribute(ei) : document.body.setAttribute(ei, e.toString());
    };
  }, []);
}, R$ = function(e) {
  var t = e.noRelative, r = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  k$();
  var a = R.useMemo(function() {
    return S$(s);
  }, [s]);
  return R.createElement(E$, { styles: C$(a, !t, s, r ? "" : "!important") });
}, Gv = !1;
if (typeof window < "u")
  try {
    var kl = Object.defineProperty({}, "passive", {
      get: function() {
        return Gv = !0, !0;
      }
    });
    window.addEventListener("test", kl, kl), window.removeEventListener("test", kl, kl);
  } catch {
    Gv = !1;
  }
var Go = Gv ? { passive: !1 } : !1, N$ = function(e) {
  return e.tagName === "TEXTAREA";
}, $P = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !N$(e) && r[t] === "visible")
  );
}, P$ = function(e) {
  return $P(e, "overflowY");
}, T$ = function(e) {
  return $P(e, "overflowX");
}, h1 = function(e, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = BP(e, o);
    if (s) {
      var a = VP(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return !1;
}, A$ = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    r,
    o
  ];
}, I$ = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    r,
    o
  ];
}, BP = function(e, t) {
  return e === "v" ? P$(t) : T$(t);
}, VP = function(e, t) {
  return e === "v" ? A$(t) : I$(t);
}, M$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, O$ = function(e, t, r, o, s) {
  var a = M$(e, window.getComputedStyle(t).direction), l = a * o, u = r.target, f = t.contains(u), d = !1, h = l > 0, g = 0, m = 0;
  do {
    if (!u)
      break;
    var w = VP(e, u), E = w[0], y = w[1], x = w[2], S = y - x - a * E;
    (E || S) && BP(e, u) && (g += S, m += E);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(g) < 1 || !h && Math.abs(m) < 1) && (d = !0), d;
}, Rl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, p1 = function(e) {
  return [e.deltaX, e.deltaY];
}, g1 = function(e) {
  return e && "current" in e ? e.current : e;
}, L$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, j$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, D$ = 0, Yo = [];
function q$(e) {
  var t = R.useRef([]), r = R.useRef([0, 0]), o = R.useRef(), s = R.useState(D$++)[0], a = R.useState(FP)[0], l = R.useRef(e);
  R.useEffect(function() {
    l.current = e;
  }, [e]), R.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var y = i$([e.lockRef.current], (e.shards || []).map(g1), !0).filter(Boolean);
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
    var S = Rl(y), C = r.current, _ = "deltaX" in y ? y.deltaX : C[0] - S[0], k = "deltaY" in y ? y.deltaY : C[1] - S[1], N, T = y.target, A = Math.abs(_) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && A === "h" && T.type === "range")
      return !1;
    var O = h1(A, T);
    if (!O)
      return !0;
    if (O ? N = A : (N = A === "v" ? "h" : "v", O = h1(A, T)), !O)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || k) && (o.current = N), !N)
      return !0;
    var D = o.current || N;
    return O$(D, x, y, D === "h" ? _ : k);
  }, []), f = R.useCallback(function(y) {
    var x = y;
    if (!(!Yo.length || Yo[Yo.length - 1] !== a)) {
      var S = "deltaY" in x ? p1(x) : Rl(x), C = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && L$(N.delta, S);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var _ = (l.current.shards || []).map(g1).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), k = _.length > 0 ? u(x, _[0]) : !l.current.noIsolation;
        k && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = R.useCallback(function(y, x, S, C) {
    var _ = { name: y, delta: x, target: S, should: C, shadowParent: z$(S) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== _;
      });
    }, 1);
  }, []), h = R.useCallback(function(y) {
    r.current = Rl(y), o.current = void 0;
  }, []), g = R.useCallback(function(y) {
    d(y.type, p1(y), y.target, u(y, e.lockRef.current));
  }, []), m = R.useCallback(function(y) {
    d(y.type, Rl(y), y.target, u(y, e.lockRef.current));
  }, []);
  R.useEffect(function() {
    return Yo.push(a), e.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: m
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
    E ? R.createElement(a, { styles: j$(s) }) : null,
    w ? R.createElement(R$, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function z$(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const F$ = p$(zP, q$);
var HP = R.forwardRef(function(e, t) {
  return R.createElement(xu, Rn({}, e, { ref: t, sideCar: F$ }));
});
HP.classNames = xu.classNames;
var $$ = [" ", "Enter", "ArrowUp", "ArrowDown"], B$ = [" ", "Enter"], lo = "Select", [_u, bu, V$] = rF(lo), [pi] = pu(lo, [
  V$,
  CP
]), Su = CP(), [H$, Ar] = pi(lo), [W$, U$] = pi(lo), WP = (e) => {
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
    autoComplete: g,
    disabled: m,
    required: w,
    form: E
  } = e, y = Su(t), [x, S] = R.useState(null), [C, _] = R.useState(null), [k, N] = R.useState(!1), T = iF(d), [A, O] = Bv({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: lo
  }), [D, G] = Bv({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: lo
  }), B = R.useRef(null), V = x ? E || !!x.closest("form") : !0, [X, L] = R.useState(/* @__PURE__ */ new Set()), H = Array.from(X).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ I.jsx(B4, { ...y, children: /* @__PURE__ */ I.jsxs(
    H$,
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
      dir: T,
      triggerPointerDownPosRef: B,
      disabled: m,
      children: [
        /* @__PURE__ */ I.jsx(_u.Provider, { scope: t, children: /* @__PURE__ */ I.jsx(
          W$,
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
          hT,
          {
            "aria-hidden": !0,
            required: w,
            tabIndex: -1,
            name: h,
            autoComplete: g,
            value: D,
            onChange: ($) => G($.target.value),
            disabled: m,
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
WP.displayName = lo;
var UP = "SelectTrigger", GP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, a = Su(r), l = Ar(UP, r), u = l.disabled || o, f = tt(t, l.onTriggerChange), d = bu(r), h = R.useRef("touch"), [g, m, w] = gT((y) => {
      const x = d().filter((_) => !_.disabled), S = x.find((_) => _.value === l.value), C = mT(x, y, S);
      C !== void 0 && l.onValueChange(C.value);
    }), E = (y) => {
      u || (l.onOpenChange(!0), w()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ I.jsx(V4, { asChild: !0, ...a, children: /* @__PURE__ */ I.jsx(
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
        "data-placeholder": pT(l.value) ? "" : void 0,
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
          const x = g.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(x && y.key === " ") && $$.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
GP.displayName = UP;
var YP = "SelectValue", KP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, children: a, placeholder: l = "", ...u } = e, f = Ar(YP, r), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, g = tt(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ I.jsx(
      $e.span,
      {
        ...u,
        ref: g,
        style: { pointerEvents: "none" },
        children: pT(f.value) ? /* @__PURE__ */ I.jsx(I.Fragment, { children: l }) : a
      }
    );
  }
);
KP.displayName = YP;
var G$ = "SelectIcon", XP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ I.jsx($e.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
XP.displayName = G$;
var Y$ = "SelectPortal", QP = (e) => /* @__PURE__ */ I.jsx(OP, { asChild: !0, ...e });
QP.displayName = Y$;
var uo = "SelectContent", ZP = R.forwardRef(
  (e, t) => {
    const r = Ar(uo, e.__scopeSelect), [o, s] = R.useState();
    if (yt(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const a = o;
      return a ? $s.createPortal(
        /* @__PURE__ */ I.jsx(JP, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx(_u.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ I.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ I.jsx(eT, { ...e, ref: t });
  }
);
ZP.displayName = uo;
var un = 10, [JP, Ir] = pi(uo), K$ = "SelectContentImpl", X$ = /* @__PURE__ */ G4("SelectContent.RemoveScroll"), eT = R.forwardRef(
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
      arrowPadding: g,
      collisionBoundary: m,
      collisionPadding: w,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: x,
      //
      ...S
    } = e, C = Ar(uo, r), [_, k] = R.useState(null), [N, T] = R.useState(null), A = tt(t, (K) => k(K)), [O, D] = R.useState(null), [G, B] = R.useState(
      null
    ), V = bu(r), [X, L] = R.useState(!1), H = R.useRef(!1);
    R.useEffect(() => {
      if (_) return o$(_);
    }, [_]), pF();
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
    const { onOpenChange: M, triggerPointerDownPosRef: q } = C;
    R.useEffect(() => {
      if (_) {
        let K = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          K = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = q.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = q.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          K.x <= 10 && K.y <= 10 ? ae.preventDefault() : _.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), q.current = null;
        };
        return q.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [_, M, q]), R.useEffect(() => {
      const K = () => M(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [M]);
    const [Q, j] = gT((K) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = mT(te, K, se);
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
    ), Z = o === "popper" ? Yv : tT, ee = Z === Yv ? {
      side: u,
      sideOffset: f,
      align: d,
      alignOffset: h,
      arrowPadding: g,
      collisionBoundary: m,
      collisionPadding: w,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ I.jsx(
      JP,
      {
        scope: r,
        content: _,
        viewport: N,
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
        children: /* @__PURE__ */ I.jsx(HP, { as: X$, allowPinchZoom: !0, children: /* @__PURE__ */ I.jsx(
          cP,
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
              lP,
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
                    onKeyDown: Xe(S.onKeyDown, (K) => {
                      const te = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !te && K.key.length === 1 && j(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
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
eT.displayName = K$;
var Q$ = "SelectItemAlignedPosition", tT = R.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, a = Ar(uo, r), l = Ir(uo, r), [u, f] = R.useState(null), [d, h] = R.useState(null), g = tt(t, (A) => h(A)), m = bu(r), w = R.useRef(!1), E = R.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = l, _ = R.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && S) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), G = S.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = G.left - O.left, de = D.left - ce, pe = A.left - de, be = A.width + pe, ve = Math.max(be, O.width), Ne = window.innerWidth - un, Ee = W_(de, [
          un,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(un, Ne - ve)
        ]);
        u.style.minWidth = be + "px", u.style.left = Ee + "px";
      } else {
        const ce = O.right - G.right, de = window.innerWidth - D.right - ce, pe = window.innerWidth - A.right - de, be = A.width + pe, ve = Math.max(be, O.width), Ne = window.innerWidth - un, Ee = W_(de, [
          un,
          Math.max(un, Ne - ve)
        ]);
        u.style.minWidth = be + "px", u.style.right = Ee + "px";
      }
      const B = m(), V = window.innerHeight - un * 2, X = y.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), $ = parseInt(L.paddingTop, 10), Y = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), q = H + $ + X + M + Y, Q = Math.min(x.offsetHeight * 5, q), j = window.getComputedStyle(y), W = parseInt(j.paddingTop, 10), ie = parseInt(j.paddingBottom, 10), F = A.top + A.height / 2 - un, Z = V - F, ee = x.offsetHeight / 2, K = x.offsetTop + ee, te = H + $ + K, se = q - te;
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
  const [k, N] = R.useState();
  yt(() => {
    d && N(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = R.useCallback(
    (A) => {
      A && E.current === !0 && (_(), C == null || C(), E.current = !1);
    },
    [_, C]
  );
  return /* @__PURE__ */ I.jsx(
    J$,
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
            $e.div,
            {
              ...s,
              ref: g,
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
tT.displayName = Q$;
var Z$ = "SelectPopperPosition", Yv = R.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = un,
    ...a
  } = e, l = Su(r);
  return /* @__PURE__ */ I.jsx(
    H4,
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
Yv.displayName = Z$;
var [J$, Ty] = pi(uo, {}), Kv = "SelectViewport", nT = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: o, ...s } = e, a = Ir(Kv, r), l = Ty(Kv, r), u = tt(t, a.onViewportChange), f = R.useRef(0);
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
      /* @__PURE__ */ I.jsx(_u.Slot, { scope: r, children: /* @__PURE__ */ I.jsx(
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
            const h = d.currentTarget, { contentWrapper: g, shouldExpandOnScrollRef: m } = l;
            if (m != null && m.current && g) {
              const w = Math.abs(f.current - h.scrollTop);
              if (w > 0) {
                const E = window.innerHeight - un * 2, y = parseFloat(g.style.minHeight), x = parseFloat(g.style.height), S = Math.max(y, x);
                if (S < E) {
                  const C = S + w, _ = Math.min(E, C), k = C - _;
                  g.style.height = _ + "px", g.style.bottom === "0px" && (h.scrollTop = k > 0 ? k : 0, g.style.justifyContent = "flex-end");
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
nT.displayName = Kv;
var rT = "SelectGroup", [eB, tB] = pi(rT), nB = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = _y();
    return /* @__PURE__ */ I.jsx(eB, { scope: r, id: s, children: /* @__PURE__ */ I.jsx($e.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
nB.displayName = rT;
var oT = "SelectLabel", rB = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = tB(oT, r);
    return /* @__PURE__ */ I.jsx($e.div, { id: s.id, ...o, ref: t });
  }
);
rB.displayName = oT;
var eu = "SelectItem", [oB, iT] = pi(eu), sT = R.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: a,
      ...l
    } = e, u = Ar(eu, r), f = Ir(eu, r), d = u.value === o, [h, g] = R.useState(a ?? ""), [m, w] = R.useState(!1), E = tt(
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
      oB,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: y,
        isSelected: d,
        onItemTextChange: R.useCallback((C) => {
          g((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ I.jsx(
          _u.ItemSlot,
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
                  ((k = f.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (B$.includes(C.key) && S(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
sT.displayName = eu;
var gs = "SelectItemText", aT = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: o, style: s, ...a } = e, l = Ar(gs, r), u = Ir(gs, r), f = iT(gs, r), d = U$(gs, r), [h, g] = R.useState(null), m = tt(
      t,
      (S) => g(S),
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
      /* @__PURE__ */ I.jsx($e.span, { id: f.textId, ...a, ref: m }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? $s.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
aT.displayName = gs;
var lT = "SelectItemIndicator", uT = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return iT(lT, r).isSelected ? /* @__PURE__ */ I.jsx($e.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
uT.displayName = lT;
var Xv = "SelectScrollUpButton", cT = R.forwardRef((e, t) => {
  const r = Ir(Xv, e.__scopeSelect), o = Ty(Xv, e.__scopeSelect), [s, a] = R.useState(!1), l = tt(t, o.onScrollButtonChange);
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
    dT,
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
cT.displayName = Xv;
var Qv = "SelectScrollDownButton", fT = R.forwardRef((e, t) => {
  const r = Ir(Qv, e.__scopeSelect), o = Ty(Qv, e.__scopeSelect), [s, a] = R.useState(!1), l = tt(t, o.onScrollButtonChange);
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
    dT,
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
fT.displayName = Qv;
var dT = R.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, a = Ir("SelectScrollButton", r), l = R.useRef(null), u = bu(r), f = R.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return R.useEffect(() => () => f(), [f]), yt(() => {
    var h;
    const d = u().find((g) => g.ref.current === document.activeElement);
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
}), iB = "SelectSeparator", sB = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ I.jsx($e.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
sB.displayName = iB;
var Zv = "SelectArrow", aB = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...o } = e, s = Su(r), a = Ar(Zv, r), l = Ir(Zv, r);
    return a.open && l.position === "popper" ? /* @__PURE__ */ I.jsx(W4, { ...s, ...o, ref: t }) : null;
  }
);
aB.displayName = Zv;
var lB = "SelectBubbleInput", hT = R.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, o) => {
    const s = R.useRef(null), a = tt(o, s), l = GN(t);
    return R.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = window.HTMLSelectElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (l !== t && h) {
        const g = new Event("change", { bubbles: !0 });
        h.call(u, t), u.dispatchEvent(g);
      }
    }, [l, t]), /* @__PURE__ */ I.jsx(
      $e.select,
      {
        ...r,
        style: { ...LP, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
hT.displayName = lB;
function pT(e) {
  return e === "" || e === void 0;
}
function gT(e) {
  const t = so(e), r = R.useRef(""), o = R.useRef(0), s = R.useCallback(
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
function mT(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let l = uB(e, Math.max(a, 0));
  s.length === 1 && (l = l.filter((d) => d !== r));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== r ? f : void 0;
}
function uB(e, t) {
  return e.map((r, o) => e[(t + o) % e.length]);
}
var cB = WP, fB = GP, dB = KP, hB = XP, pB = QP, gB = ZP, mB = nT, vB = sT, yB = aT, wB = uT, xB = cT, _B = fT;
function m1({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(cB, { "data-slot": "select", ...e });
}
function v1({
  ...e
}) {
  return /* @__PURE__ */ I.jsx(dB, { "data-slot": "select-value", ...e });
}
function y1({
  className: e,
  size: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ I.jsxs(
    fB,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: et(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ I.jsx(hB, { asChild: !0, children: /* @__PURE__ */ I.jsx(sP, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function w1({
  className: e,
  children: t,
  position: r = "popper",
  align: o = "center",
  ...s
}) {
  return /* @__PURE__ */ I.jsx(pB, { children: /* @__PURE__ */ I.jsxs(
    gB,
    {
      "data-slot": "select-content",
      className: et(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      align: o,
      ...s,
      children: [
        /* @__PURE__ */ I.jsx(bB, {}),
        /* @__PURE__ */ I.jsx(
          mB,
          {
            className: et(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ I.jsx(SB, {})
      ]
    }
  ) });
}
function x1({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ I.jsxs(
    vB,
    {
      "data-slot": "select-item",
      className: et(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ I.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ I.jsx(wB, { children: /* @__PURE__ */ I.jsx(iP, { className: "size-4" }) }) }),
        /* @__PURE__ */ I.jsx(yB, { children: t })
      ]
    }
  );
}
function bB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    xB,
    {
      "data-slot": "select-scroll-up-button",
      className: et(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(Xz, { className: "size-4" })
    }
  );
}
function SB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ I.jsx(
    _B,
    {
      "data-slot": "select-scroll-down-button",
      className: et(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ I.jsx(sP, { className: "size-4" })
    }
  );
}
function EB(e) {
  if ("component" in e) {
    const { component: l, onValueChange: u } = e;
    return /* @__PURE__ */ I.jsxs("div", { className: "component-select-field", children: [
      /* @__PURE__ */ I.jsx("label", { className: "text-xs text-gray-600 mb-1", children: l.label }),
      /* @__PURE__ */ I.jsxs(m1, { value: l.value || "", onValueChange: (f) => u == null ? void 0 : u(l.id, f), children: [
        /* @__PURE__ */ I.jsx(
          y1,
          {
            className: "h-8 text-xs",
            onMouseDown: (f) => f.stopPropagation(),
            onPointerDown: (f) => f.stopPropagation(),
            "aria-label": l.label,
            children: /* @__PURE__ */ I.jsx(v1, { placeholder: "Select..." })
          }
        ),
        /* @__PURE__ */ I.jsx(w1, { children: (l.options || []).map((f) => /* @__PURE__ */ I.jsx(x1, { value: f, className: "text-xs", children: f }, f)) })
      ] })
    ] });
  }
  const { value: t, options: r, onChange: o, placeholder: s, label: a } = e;
  return /* @__PURE__ */ I.jsxs(m1, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ I.jsx(
      y1,
      {
        className: "h-8 text-xs",
        onMouseDown: (l) => l.stopPropagation(),
        onPointerDown: (l) => l.stopPropagation(),
        "aria-label": a,
        children: /* @__PURE__ */ I.jsx(v1, { placeholder: s })
      }
    ),
    /* @__PURE__ */ I.jsx(w1, { children: r.map((l) => /* @__PURE__ */ I.jsx(x1, { value: l, className: "text-xs", children: l }, l)) })
  ] });
}
function CB({ component: e }) {
  return /* @__PURE__ */ I.jsxs(
    "div",
    {
      className: "component-header px-3 py-2 font-semibold flex items-center gap-2",
      style: {
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
function kB({ component: e }) {
  const t = e.variant === "primary";
  return /* @__PURE__ */ I.jsx(
    "button",
    {
      className: `component-button px-3 py-1 text-sm rounded ${t ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
      onClick: () => {
        console.log(`Action: ${e.action}`);
      },
      children: e.label
    }
  );
}
function RB({ component: e }) {
  const t = e.orientation !== "vertical";
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      className: `component-divider ${t ? "w-full h-px" : "h-full w-px"} bg-gray-300`
    }
  );
}
function NB({ component: e }) {
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
function PB({
  cell: e,
  nodeId: t,
  onValueChange: r
}) {
  const o = e.layout || { type: "flex", direction: "column" }, s = TB(e), a = AB(o);
  return /* @__PURE__ */ I.jsx("div", { className: "nested-grid-cell", style: s, children: /* @__PURE__ */ I.jsx("div", { className: "nested-grid-cell-content", style: a, children: e.components.map((l) => {
    const { ComponentFactory: u } = require("../ComponentFactory");
    return /* @__PURE__ */ I.jsx(
      u,
      {
        component: l,
        nodeId: t,
        onValueChange: r
      },
      l.id
    );
  }) }) });
}
function TB(e) {
  return {
    gridRow: `${e.coordinates.row} / span ${e.coordinates.row_span || 1}`,
    gridColumn: `${e.coordinates.col} / span ${e.coordinates.col_span || 1}`
  };
}
function AB(e) {
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
function IB({
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
        PB,
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
function MB({ component: e, nodeId: t, onValueChange: r }) {
  switch (e.type) {
    case "base-handle":
      return /* @__PURE__ */ I.jsx(fi, { component: e });
    case "labeled-handle":
      return /* @__PURE__ */ I.jsx(WN, { component: e });
    case "button-handle":
      return /* @__PURE__ */ I.jsx(UN, { component: e });
    case "text":
      return /* @__PURE__ */ I.jsx(_z, { component: e, onValueChange: r });
    case "number":
      return /* @__PURE__ */ I.jsx(bz, { component: e, onValueChange: r });
    case "bool":
      return /* @__PURE__ */ I.jsx(Qz, { component: e, onValueChange: r });
    case "select":
      return /* @__PURE__ */ I.jsx(EB, { component: e, onValueChange: r });
    case "header":
      return /* @__PURE__ */ I.jsx(CB, { component: e });
    case "button":
      return /* @__PURE__ */ I.jsx(kB, { component: e });
    case "divider":
      return /* @__PURE__ */ I.jsx(RB, { component: e });
    case "spacer":
      return /* @__PURE__ */ I.jsx(NB, { component: e });
    case "grid-layout":
      return /* @__PURE__ */ I.jsx(IB, { component: e, nodeId: t, onValueChange: r });
    default:
      return console.warn(`Unknown component type: ${e.type}`), null;
  }
}
function OB({ grid: e, nodeId: t, onValueChange: r }) {
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
        LB,
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
function LB({ cell: e, nodeId: t, onValueChange: r }) {
  const o = e.layout || { type: "flex", direction: "column" }, s = jB(o);
  return /* @__PURE__ */ I.jsx("div", { className: "grid-cell-content", style: s, children: e.components.map((a) => /* @__PURE__ */ I.jsx(
    MB,
    {
      component: a,
      nodeId: t,
      onValueChange: r
    },
    a.id
  )) });
}
function jB(e) {
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
function DB({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card",
      className: et(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function qB({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: et(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function zB({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: et("leading-none font-semibold", e),
      ...t
    }
  );
}
function FB({ className: e, ...t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: et("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
R.createContext(null);
function Ay(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var cd, _1;
function $B() {
  if (_1) return cd;
  _1 = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return cd = e, cd;
}
var fd, b1;
function gi() {
  if (b1) return fd;
  b1 = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return fd = e, fd;
}
var dd, S1;
function Eu() {
  if (S1) return dd;
  S1 = 1;
  var e = gi();
  function t(r, o) {
    for (var s = r.length; s--; )
      if (e(r[s][0], o))
        return s;
    return -1;
  }
  return dd = t, dd;
}
var hd, E1;
function BB() {
  if (E1) return hd;
  E1 = 1;
  var e = Eu(), t = Array.prototype, r = t.splice;
  function o(s) {
    var a = this.__data__, l = e(a, s);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : r.call(a, l, 1), --this.size, !0;
  }
  return hd = o, hd;
}
var pd, C1;
function VB() {
  if (C1) return pd;
  C1 = 1;
  var e = Eu();
  function t(r) {
    var o = this.__data__, s = e(o, r);
    return s < 0 ? void 0 : o[s][1];
  }
  return pd = t, pd;
}
var gd, k1;
function HB() {
  if (k1) return gd;
  k1 = 1;
  var e = Eu();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return gd = t, gd;
}
var md, R1;
function WB() {
  if (R1) return md;
  R1 = 1;
  var e = Eu();
  function t(r, o) {
    var s = this.__data__, a = e(s, r);
    return a < 0 ? (++this.size, s.push([r, o])) : s[a][1] = o, this;
  }
  return md = t, md;
}
var vd, N1;
function Cu() {
  if (N1) return vd;
  N1 = 1;
  var e = $B(), t = BB(), r = VB(), o = HB(), s = WB();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, vd = a, vd;
}
var yd, P1;
function UB() {
  if (P1) return yd;
  P1 = 1;
  var e = Cu();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return yd = t, yd;
}
var wd, T1;
function GB() {
  if (T1) return wd;
  T1 = 1;
  function e(t) {
    var r = this.__data__, o = r.delete(t);
    return this.size = r.size, o;
  }
  return wd = e, wd;
}
var xd, A1;
function YB() {
  if (A1) return xd;
  A1 = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return xd = e, xd;
}
var _d, I1;
function KB() {
  if (I1) return _d;
  I1 = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return _d = e, _d;
}
var bd, M1;
function vT() {
  if (M1) return bd;
  M1 = 1;
  var e = typeof ul == "object" && ul && ul.Object === Object && ul;
  return bd = e, bd;
}
var Sd, O1;
function wn() {
  if (O1) return Sd;
  O1 = 1;
  var e = vT(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Sd = r, Sd;
}
var Ed, L1;
function mi() {
  if (L1) return Ed;
  L1 = 1;
  var e = wn(), t = e.Symbol;
  return Ed = t, Ed;
}
var Cd, j1;
function XB() {
  if (j1) return Cd;
  j1 = 1;
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
  return Cd = a, Cd;
}
var kd, D1;
function QB() {
  if (D1) return kd;
  D1 = 1;
  var e = Object.prototype, t = e.toString;
  function r(o) {
    return t.call(o);
  }
  return kd = r, kd;
}
var Rd, q1;
function co() {
  if (q1) return Rd;
  q1 = 1;
  var e = mi(), t = XB(), r = QB(), o = "[object Null]", s = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? s : o : a && a in Object(u) ? t(u) : r(u);
  }
  return Rd = l, Rd;
}
var Nd, z1;
function Zt() {
  if (z1) return Nd;
  z1 = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Nd = e, Nd;
}
var Pd, F1;
function Hs() {
  if (F1) return Pd;
  F1 = 1;
  var e = co(), t = Zt(), r = "[object AsyncFunction]", o = "[object Function]", s = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == s || f == r || f == a;
  }
  return Pd = l, Pd;
}
var Td, $1;
function ZB() {
  if ($1) return Td;
  $1 = 1;
  var e = wn(), t = e["__core-js_shared__"];
  return Td = t, Td;
}
var Ad, B1;
function JB() {
  if (B1) return Ad;
  B1 = 1;
  var e = ZB(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function r(o) {
    return !!t && t in o;
  }
  return Ad = r, Ad;
}
var Id, V1;
function yT() {
  if (V1) return Id;
  V1 = 1;
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
  return Id = r, Id;
}
var Md, H1;
function e5() {
  if (H1) return Md;
  H1 = 1;
  var e = Hs(), t = JB(), r = Zt(), o = yT(), s = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function g(m) {
    if (!r(m) || t(m))
      return !1;
    var w = e(m) ? h : a;
    return w.test(o(m));
  }
  return Md = g, Md;
}
var Od, W1;
function t5() {
  if (W1) return Od;
  W1 = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return Od = e, Od;
}
var Ld, U1;
function fo() {
  if (U1) return Ld;
  U1 = 1;
  var e = e5(), t = t5();
  function r(o, s) {
    var a = t(o, s);
    return e(a) ? a : void 0;
  }
  return Ld = r, Ld;
}
var jd, G1;
function Iy() {
  if (G1) return jd;
  G1 = 1;
  var e = fo(), t = wn(), r = e(t, "Map");
  return jd = r, jd;
}
var Dd, Y1;
function ku() {
  if (Y1) return Dd;
  Y1 = 1;
  var e = fo(), t = e(Object, "create");
  return Dd = t, Dd;
}
var qd, K1;
function n5() {
  if (K1) return qd;
  K1 = 1;
  var e = ku();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return qd = t, qd;
}
var zd, X1;
function r5() {
  if (X1) return zd;
  X1 = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return zd = e, zd;
}
var Fd, Q1;
function o5() {
  if (Q1) return Fd;
  Q1 = 1;
  var e = ku(), t = "__lodash_hash_undefined__", r = Object.prototype, o = r.hasOwnProperty;
  function s(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return Fd = s, Fd;
}
var $d, Z1;
function i5() {
  if (Z1) return $d;
  Z1 = 1;
  var e = ku(), t = Object.prototype, r = t.hasOwnProperty;
  function o(s) {
    var a = this.__data__;
    return e ? a[s] !== void 0 : r.call(a, s);
  }
  return $d = o, $d;
}
var Bd, J1;
function s5() {
  if (J1) return Bd;
  J1 = 1;
  var e = ku(), t = "__lodash_hash_undefined__";
  function r(o, s) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && s === void 0 ? t : s, this;
  }
  return Bd = r, Bd;
}
var Vd, eb;
function a5() {
  if (eb) return Vd;
  eb = 1;
  var e = n5(), t = r5(), r = o5(), o = i5(), s = s5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, Vd = a, Vd;
}
var Hd, tb;
function l5() {
  if (tb) return Hd;
  tb = 1;
  var e = a5(), t = Cu(), r = Iy();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Hd = o, Hd;
}
var Wd, nb;
function u5() {
  if (nb) return Wd;
  nb = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Wd = e, Wd;
}
var Ud, rb;
function Ru() {
  if (rb) return Ud;
  rb = 1;
  var e = u5();
  function t(r, o) {
    var s = r.__data__;
    return e(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
  }
  return Ud = t, Ud;
}
var Gd, ob;
function c5() {
  if (ob) return Gd;
  ob = 1;
  var e = Ru();
  function t(r) {
    var o = e(this, r).delete(r);
    return this.size -= o ? 1 : 0, o;
  }
  return Gd = t, Gd;
}
var Yd, ib;
function f5() {
  if (ib) return Yd;
  ib = 1;
  var e = Ru();
  function t(r) {
    return e(this, r).get(r);
  }
  return Yd = t, Yd;
}
var Kd, sb;
function d5() {
  if (sb) return Kd;
  sb = 1;
  var e = Ru();
  function t(r) {
    return e(this, r).has(r);
  }
  return Kd = t, Kd;
}
var Xd, ab;
function h5() {
  if (ab) return Xd;
  ab = 1;
  var e = Ru();
  function t(r, o) {
    var s = e(this, r), a = s.size;
    return s.set(r, o), this.size += s.size == a ? 0 : 1, this;
  }
  return Xd = t, Xd;
}
var Qd, lb;
function My() {
  if (lb) return Qd;
  lb = 1;
  var e = l5(), t = c5(), r = f5(), o = d5(), s = h5();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = o, a.prototype.set = s, Qd = a, Qd;
}
var Zd, ub;
function p5() {
  if (ub) return Zd;
  ub = 1;
  var e = Cu(), t = Iy(), r = My(), o = 200;
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
  return Zd = s, Zd;
}
var Jd, cb;
function Nu() {
  if (cb) return Jd;
  cb = 1;
  var e = Cu(), t = UB(), r = GB(), o = YB(), s = KB(), a = p5();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = r, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, Jd = l, Jd;
}
var eh, fb;
function Oy() {
  if (fb) return eh;
  fb = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s && r(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return eh = e, eh;
}
var th, db;
function wT() {
  if (db) return th;
  db = 1;
  var e = fo(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return th = t, th;
}
var nh, hb;
function Pu() {
  if (hb) return nh;
  hb = 1;
  var e = wT();
  function t(r, o, s) {
    o == "__proto__" && e ? e(r, o, {
      configurable: !0,
      enumerable: !0,
      value: s,
      writable: !0
    }) : r[o] = s;
  }
  return nh = t, nh;
}
var rh, pb;
function Tu() {
  if (pb) return rh;
  pb = 1;
  var e = Pu(), t = gi(), r = Object.prototype, o = r.hasOwnProperty;
  function s(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return rh = s, rh;
}
var oh, gb;
function Ws() {
  if (gb) return oh;
  gb = 1;
  var e = Tu(), t = Pu();
  function r(o, s, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = s.length; ++f < d; ) {
      var h = s[f], g = l ? l(a[h], o[h], h, a, o) : void 0;
      g === void 0 && (g = o[h]), u ? t(a, h, g) : e(a, h, g);
    }
    return a;
  }
  return oh = r, oh;
}
var ih, mb;
function g5() {
  if (mb) return ih;
  mb = 1;
  function e(t, r) {
    for (var o = -1, s = Array(t); ++o < t; )
      s[o] = r(o);
    return s;
  }
  return ih = e, ih;
}
var sh, vb;
function Ln() {
  if (vb) return sh;
  vb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return sh = e, sh;
}
var ah, yb;
function m5() {
  if (yb) return ah;
  yb = 1;
  var e = co(), t = Ln(), r = "[object Arguments]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return ah = o, ah;
}
var lh, wb;
function Us() {
  if (wb) return lh;
  wb = 1;
  var e = m5(), t = Ln(), r = Object.prototype, o = r.hasOwnProperty, s = r.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !s.call(l, "callee");
  };
  return lh = a, lh;
}
var uh, xb;
function rt() {
  if (xb) return uh;
  xb = 1;
  var e = Array.isArray;
  return uh = e, uh;
}
var ms = { exports: {} }, ch, _b;
function v5() {
  if (_b) return ch;
  _b = 1;
  function e() {
    return !1;
  }
  return ch = e, ch;
}
ms.exports;
var bb;
function vi() {
  return bb || (bb = 1, (function(e, t) {
    var r = wn(), o = v5(), s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, l = a && a.exports === s, u = l ? r.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(ms, ms.exports)), ms.exports;
}
var fh, Sb;
function Au() {
  if (Sb) return fh;
  Sb = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(o, s) {
    var a = typeof o;
    return s = s ?? e, !!s && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < s;
  }
  return fh = r, fh;
}
var dh, Eb;
function Ly() {
  if (Eb) return dh;
  Eb = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return dh = t, dh;
}
var hh, Cb;
function y5() {
  if (Cb) return hh;
  Cb = 1;
  var e = co(), t = Ly(), r = Ln(), o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", g = "[object Object]", m = "[object RegExp]", w = "[object Set]", E = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", S = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", k = "[object Int8Array]", N = "[object Int16Array]", T = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", G = "[object Uint32Array]", B = {};
  B[C] = B[_] = B[k] = B[N] = B[T] = B[A] = B[O] = B[D] = B[G] = !0, B[o] = B[s] = B[x] = B[a] = B[S] = B[l] = B[u] = B[f] = B[d] = B[h] = B[g] = B[m] = B[w] = B[E] = B[y] = !1;
  function V(X) {
    return r(X) && t(X.length) && !!B[e(X)];
  }
  return hh = V, hh;
}
var ph, kb;
function Iu() {
  if (kb) return ph;
  kb = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return ph = e, ph;
}
var vs = { exports: {} };
vs.exports;
var Rb;
function jy() {
  return Rb || (Rb = 1, (function(e, t) {
    var r = vT(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a && r.process, u = (function() {
      try {
        var f = s && s.require && s.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(vs, vs.exports)), vs.exports;
}
var gh, Nb;
function Gs() {
  if (Nb) return gh;
  Nb = 1;
  var e = y5(), t = Iu(), r = jy(), o = r && r.isTypedArray, s = o ? t(o) : e;
  return gh = s, gh;
}
var mh, Pb;
function xT() {
  if (Pb) return mh;
  Pb = 1;
  var e = g5(), t = Us(), r = rt(), o = vi(), s = Au(), a = Gs(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var g = r(d), m = !g && t(d), w = !g && !m && o(d), E = !g && !m && !w && a(d), y = g || m || w || E, x = y ? e(d.length, String) : [], S = x.length;
    for (var C in d)
      (h || u.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      w && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      s(C, S))) && x.push(C);
    return x;
  }
  return mh = f, mh;
}
var vh, Tb;
function Mu() {
  if (Tb) return vh;
  Tb = 1;
  var e = Object.prototype;
  function t(r) {
    var o = r && r.constructor, s = typeof o == "function" && o.prototype || e;
    return r === s;
  }
  return vh = t, vh;
}
var yh, Ab;
function _T() {
  if (Ab) return yh;
  Ab = 1;
  function e(t, r) {
    return function(o) {
      return t(r(o));
    };
  }
  return yh = e, yh;
}
var wh, Ib;
function w5() {
  if (Ib) return wh;
  Ib = 1;
  var e = _T(), t = e(Object.keys, Object);
  return wh = t, wh;
}
var xh, Mb;
function Dy() {
  if (Mb) return xh;
  Mb = 1;
  var e = Mu(), t = w5(), r = Object.prototype, o = r.hasOwnProperty;
  function s(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return xh = s, xh;
}
var _h, Ob;
function Zn() {
  if (Ob) return _h;
  Ob = 1;
  var e = Hs(), t = Ly();
  function r(o) {
    return o != null && t(o.length) && !e(o);
  }
  return _h = r, _h;
}
var bh, Lb;
function Mr() {
  if (Lb) return bh;
  Lb = 1;
  var e = xT(), t = Dy(), r = Zn();
  function o(s) {
    return r(s) ? e(s) : t(s);
  }
  return bh = o, bh;
}
var Sh, jb;
function x5() {
  if (jb) return Sh;
  jb = 1;
  var e = Ws(), t = Mr();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return Sh = r, Sh;
}
var Eh, Db;
function _5() {
  if (Db) return Eh;
  Db = 1;
  function e(t) {
    var r = [];
    if (t != null)
      for (var o in Object(t))
        r.push(o);
    return r;
  }
  return Eh = e, Eh;
}
var Ch, qb;
function b5() {
  if (qb) return Ch;
  qb = 1;
  var e = Zt(), t = Mu(), r = _5(), o = Object.prototype, s = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return r(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !s.call(l, d)) || f.push(d);
    return f;
  }
  return Ch = a, Ch;
}
var kh, zb;
function ho() {
  if (zb) return kh;
  zb = 1;
  var e = xT(), t = b5(), r = Zn();
  function o(s) {
    return r(s) ? e(s, !0) : t(s);
  }
  return kh = o, kh;
}
var Rh, Fb;
function S5() {
  if (Fb) return Rh;
  Fb = 1;
  var e = Ws(), t = ho();
  function r(o, s) {
    return o && e(s, t(s), o);
  }
  return Rh = r, Rh;
}
var ys = { exports: {} };
ys.exports;
var $b;
function bT() {
  return $b || ($b = 1, (function(e, t) {
    var r = wn(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, l = a ? r.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var g = d.length, m = u ? u(g) : new d.constructor(g);
      return d.copy(m), m;
    }
    e.exports = f;
  })(ys, ys.exports)), ys.exports;
}
var Nh, Bb;
function ST() {
  if (Bb) return Nh;
  Bb = 1;
  function e(t, r) {
    var o = -1, s = t.length;
    for (r || (r = Array(s)); ++o < s; )
      r[o] = t[o];
    return r;
  }
  return Nh = e, Nh;
}
var Ph, Vb;
function ET() {
  if (Vb) return Ph;
  Vb = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = 0, l = []; ++o < s; ) {
      var u = t[o];
      r(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return Ph = e, Ph;
}
var Th, Hb;
function CT() {
  if (Hb) return Th;
  Hb = 1;
  function e() {
    return [];
  }
  return Th = e, Th;
}
var Ah, Wb;
function qy() {
  if (Wb) return Ah;
  Wb = 1;
  var e = ET(), t = CT(), r = Object.prototype, o = r.propertyIsEnumerable, s = Object.getOwnPropertySymbols, a = s ? function(l) {
    return l == null ? [] : (l = Object(l), e(s(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return Ah = a, Ah;
}
var Ih, Ub;
function E5() {
  if (Ub) return Ih;
  Ub = 1;
  var e = Ws(), t = qy();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return Ih = r, Ih;
}
var Mh, Gb;
function zy() {
  if (Gb) return Mh;
  Gb = 1;
  function e(t, r) {
    for (var o = -1, s = r.length, a = t.length; ++o < s; )
      t[a + o] = r[o];
    return t;
  }
  return Mh = e, Mh;
}
var Oh, Yb;
function Ou() {
  if (Yb) return Oh;
  Yb = 1;
  var e = _T(), t = e(Object.getPrototypeOf, Object);
  return Oh = t, Oh;
}
var Lh, Kb;
function kT() {
  if (Kb) return Lh;
  Kb = 1;
  var e = zy(), t = Ou(), r = qy(), o = CT(), s = Object.getOwnPropertySymbols, a = s ? function(l) {
    for (var u = []; l; )
      e(u, r(l)), l = t(l);
    return u;
  } : o;
  return Lh = a, Lh;
}
var jh, Xb;
function C5() {
  if (Xb) return jh;
  Xb = 1;
  var e = Ws(), t = kT();
  function r(o, s) {
    return e(o, t(o), s);
  }
  return jh = r, jh;
}
var Dh, Qb;
function RT() {
  if (Qb) return Dh;
  Qb = 1;
  var e = zy(), t = rt();
  function r(o, s, a) {
    var l = s(o);
    return t(o) ? l : e(l, a(o));
  }
  return Dh = r, Dh;
}
var qh, Zb;
function NT() {
  if (Zb) return qh;
  Zb = 1;
  var e = RT(), t = qy(), r = Mr();
  function o(s) {
    return e(s, r, t);
  }
  return qh = o, qh;
}
var zh, Jb;
function k5() {
  if (Jb) return zh;
  Jb = 1;
  var e = RT(), t = kT(), r = ho();
  function o(s) {
    return e(s, r, t);
  }
  return zh = o, zh;
}
var Fh, eS;
function R5() {
  if (eS) return Fh;
  eS = 1;
  var e = fo(), t = wn(), r = e(t, "DataView");
  return Fh = r, Fh;
}
var $h, tS;
function N5() {
  if (tS) return $h;
  tS = 1;
  var e = fo(), t = wn(), r = e(t, "Promise");
  return $h = r, $h;
}
var Bh, nS;
function PT() {
  if (nS) return Bh;
  nS = 1;
  var e = fo(), t = wn(), r = e(t, "Set");
  return Bh = r, Bh;
}
var Vh, rS;
function P5() {
  if (rS) return Vh;
  rS = 1;
  var e = fo(), t = wn(), r = e(t, "WeakMap");
  return Vh = r, Vh;
}
var Hh, oS;
function yi() {
  if (oS) return Hh;
  oS = 1;
  var e = R5(), t = Iy(), r = N5(), o = PT(), s = P5(), a = co(), l = yT(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", g = "[object WeakMap]", m = "[object DataView]", w = l(e), E = l(t), y = l(r), x = l(o), S = l(s), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != m || t && C(new t()) != u || r && C(r.resolve()) != d || o && C(new o()) != h || s && C(new s()) != g) && (C = function(_) {
    var k = a(_), N = k == f ? _.constructor : void 0, T = N ? l(N) : "";
    if (T)
      switch (T) {
        case w:
          return m;
        case E:
          return u;
        case y:
          return d;
        case x:
          return h;
        case S:
          return g;
      }
    return k;
  }), Hh = C, Hh;
}
var Wh, iS;
function T5() {
  if (iS) return Wh;
  iS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o) {
    var s = o.length, a = new o.constructor(s);
    return s && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return Wh = r, Wh;
}
var Uh, sS;
function TT() {
  if (sS) return Uh;
  sS = 1;
  var e = wn(), t = e.Uint8Array;
  return Uh = t, Uh;
}
var Gh, aS;
function Fy() {
  if (aS) return Gh;
  aS = 1;
  var e = TT();
  function t(r) {
    var o = new r.constructor(r.byteLength);
    return new e(o).set(new e(r)), o;
  }
  return Gh = t, Gh;
}
var Yh, lS;
function A5() {
  if (lS) return Yh;
  lS = 1;
  var e = Fy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.byteLength);
  }
  return Yh = t, Yh;
}
var Kh, uS;
function I5() {
  if (uS) return Kh;
  uS = 1;
  var e = /\w*$/;
  function t(r) {
    var o = new r.constructor(r.source, e.exec(r));
    return o.lastIndex = r.lastIndex, o;
  }
  return Kh = t, Kh;
}
var Xh, cS;
function M5() {
  if (cS) return Xh;
  cS = 1;
  var e = mi(), t = e ? e.prototype : void 0, r = t ? t.valueOf : void 0;
  function o(s) {
    return r ? Object(r.call(s)) : {};
  }
  return Xh = o, Xh;
}
var Qh, fS;
function AT() {
  if (fS) return Qh;
  fS = 1;
  var e = Fy();
  function t(r, o) {
    var s = o ? e(r.buffer) : r.buffer;
    return new r.constructor(s, r.byteOffset, r.length);
  }
  return Qh = t, Qh;
}
var Zh, dS;
function O5() {
  if (dS) return Zh;
  dS = 1;
  var e = Fy(), t = A5(), r = I5(), o = M5(), s = AT(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", g = "[object String]", m = "[object Symbol]", w = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", k = "[object Uint8Array]", N = "[object Uint8ClampedArray]", T = "[object Uint16Array]", A = "[object Uint32Array]";
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
      case T:
      case A:
        return s(D, B);
      case u:
        return new V();
      case f:
      case g:
        return new V(D);
      case d:
        return r(D);
      case h:
        return new V();
      case m:
        return o(D);
    }
  }
  return Zh = O, Zh;
}
var Jh, hS;
function IT() {
  if (hS) return Jh;
  hS = 1;
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
  return Jh = r, Jh;
}
var ep, pS;
function MT() {
  if (pS) return ep;
  pS = 1;
  var e = IT(), t = Ou(), r = Mu();
  function o(s) {
    return typeof s.constructor == "function" && !r(s) ? e(t(s)) : {};
  }
  return ep = o, ep;
}
var tp, gS;
function L5() {
  if (gS) return tp;
  gS = 1;
  var e = yi(), t = Ln(), r = "[object Map]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return tp = o, tp;
}
var np, mS;
function j5() {
  if (mS) return np;
  mS = 1;
  var e = L5(), t = Iu(), r = jy(), o = r && r.isMap, s = o ? t(o) : e;
  return np = s, np;
}
var rp, vS;
function D5() {
  if (vS) return rp;
  vS = 1;
  var e = yi(), t = Ln(), r = "[object Set]";
  function o(s) {
    return t(s) && e(s) == r;
  }
  return rp = o, rp;
}
var op, yS;
function q5() {
  if (yS) return op;
  yS = 1;
  var e = D5(), t = Iu(), r = jy(), o = r && r.isSet, s = o ? t(o) : e;
  return op = s, op;
}
var ip, wS;
function OT() {
  if (wS) return ip;
  wS = 1;
  var e = Nu(), t = Oy(), r = Tu(), o = x5(), s = S5(), a = bT(), l = ST(), u = E5(), f = C5(), d = NT(), h = k5(), g = yi(), m = T5(), w = O5(), E = MT(), y = rt(), x = vi(), S = j5(), C = Zt(), _ = q5(), k = Mr(), N = ho(), T = 1, A = 2, O = 4, D = "[object Arguments]", G = "[object Array]", B = "[object Boolean]", V = "[object Date]", X = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", $ = "[object Map]", Y = "[object Number]", M = "[object Object]", q = "[object RegExp]", Q = "[object Set]", j = "[object String]", W = "[object Symbol]", ie = "[object WeakMap]", F = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", K = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", be = "[object Uint32Array]", ve = {};
  ve[D] = ve[G] = ve[F] = ve[Z] = ve[B] = ve[V] = ve[ee] = ve[K] = ve[te] = ve[se] = ve[ae] = ve[$] = ve[Y] = ve[M] = ve[q] = ve[Q] = ve[j] = ve[W] = ve[ce] = ve[de] = ve[pe] = ve[be] = !0, ve[X] = ve[L] = ve[ie] = !1;
  function Ne(Ee, Qe, Ve, Ft, ht, at) {
    var He, en = Qe & T, $t = Qe & A, tn = Qe & O;
    if (Ve && (He = ht ? Ve(Ee, Ft, ht, at) : Ve(Ee)), He !== void 0)
      return He;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (He = m(Ee), !en)
        return l(Ee, He);
    } else {
      var _t = g(Ee), Or = _t == L || _t == H;
      if (x(Ee))
        return a(Ee, en);
      if (_t == M || _t == D || Or && !ht) {
        if (He = $t || Or ? {} : E(Ee), !en)
          return $t ? f(Ee, s(He, Ee)) : u(Ee, o(He, Ee));
      } else {
        if (!ve[_t])
          return ht ? Ee : {};
        He = w(Ee, _t, en);
      }
    }
    at || (at = new e());
    var Vt = at.get(Ee);
    if (Vt)
      return Vt;
    at.set(Ee, He), _(Ee) ? Ee.forEach(function(Tt) {
      He.add(Ne(Tt, Qe, Ve, Tt, Ee, at));
    }) : S(Ee) && Ee.forEach(function(Tt, Ht) {
      He.set(Ht, Ne(Tt, Qe, Ve, Ht, Ee, at));
    });
    var jn = tn ? $t ? h : d : $t ? N : k, go = Bt ? void 0 : jn(Ee);
    return t(go || Ee, function(Tt, Ht) {
      go && (Ht = Tt, Tt = Ee[Ht]), r(He, Ht, Ne(Tt, Qe, Ve, Ht, Ee, at));
    }), He;
  }
  return ip = Ne, ip;
}
var sp, xS;
function z5() {
  if (xS) return sp;
  xS = 1;
  var e = OT(), t = 4;
  function r(o) {
    return e(o, t);
  }
  return sp = r, sp;
}
var ap, _S;
function $y() {
  if (_S) return ap;
  _S = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return ap = e, ap;
}
var lp, bS;
function F5() {
  if (bS) return lp;
  bS = 1;
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
  return lp = e, lp;
}
var up, SS;
function By() {
  if (SS) return up;
  SS = 1;
  var e = F5(), t = e();
  return up = t, up;
}
var cp, ES;
function Vy() {
  if (ES) return cp;
  ES = 1;
  var e = By(), t = Mr();
  function r(o, s) {
    return o && e(o, s, t);
  }
  return cp = r, cp;
}
var fp, CS;
function $5() {
  if (CS) return fp;
  CS = 1;
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
  return fp = t, fp;
}
var dp, kS;
function Lu() {
  if (kS) return dp;
  kS = 1;
  var e = Vy(), t = $5(), r = t(e);
  return dp = r, dp;
}
var hp, RS;
function po() {
  if (RS) return hp;
  RS = 1;
  function e(t) {
    return t;
  }
  return hp = e, hp;
}
var pp, NS;
function LT() {
  if (NS) return pp;
  NS = 1;
  var e = po();
  function t(r) {
    return typeof r == "function" ? r : e;
  }
  return pp = t, pp;
}
var gp, PS;
function jT() {
  if (PS) return gp;
  PS = 1;
  var e = Oy(), t = Lu(), r = LT(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l));
  }
  return gp = s, gp;
}
var mp, TS;
function DT() {
  return TS || (TS = 1, mp = jT()), mp;
}
var vp, AS;
function B5() {
  if (AS) return vp;
  AS = 1;
  var e = Lu();
  function t(r, o) {
    var s = [];
    return e(r, function(a, l, u) {
      o(a, l, u) && s.push(a);
    }), s;
  }
  return vp = t, vp;
}
var yp, IS;
function V5() {
  if (IS) return yp;
  IS = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return yp = t, yp;
}
var wp, MS;
function H5() {
  if (MS) return wp;
  MS = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return wp = e, wp;
}
var xp, OS;
function qT() {
  if (OS) return xp;
  OS = 1;
  var e = My(), t = V5(), r = H5();
  function o(s) {
    var a = -1, l = s == null ? 0 : s.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(s[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = r, xp = o, xp;
}
var _p, LS;
function W5() {
  if (LS) return _p;
  LS = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; )
      if (r(t[o], o, t))
        return !0;
    return !1;
  }
  return _p = e, _p;
}
var bp, jS;
function zT() {
  if (jS) return bp;
  jS = 1;
  function e(t, r) {
    return t.has(r);
  }
  return bp = e, bp;
}
var Sp, DS;
function FT() {
  if (DS) return Sp;
  DS = 1;
  var e = qT(), t = W5(), r = zT(), o = 1, s = 2;
  function a(l, u, f, d, h, g) {
    var m = f & o, w = l.length, E = u.length;
    if (w != E && !(m && E > w))
      return !1;
    var y = g.get(l), x = g.get(u);
    if (y && x)
      return y == u && x == l;
    var S = -1, C = !0, _ = f & s ? new e() : void 0;
    for (g.set(l, u), g.set(u, l); ++S < w; ) {
      var k = l[S], N = u[S];
      if (d)
        var T = m ? d(N, k, S, u, l, g) : d(k, N, S, l, u, g);
      if (T !== void 0) {
        if (T)
          continue;
        C = !1;
        break;
      }
      if (_) {
        if (!t(u, function(A, O) {
          if (!r(_, O) && (k === A || h(k, A, f, d, g)))
            return _.push(O);
        })) {
          C = !1;
          break;
        }
      } else if (!(k === N || h(k, N, f, d, g))) {
        C = !1;
        break;
      }
    }
    return g.delete(l), g.delete(u), C;
  }
  return Sp = a, Sp;
}
var Ep, qS;
function U5() {
  if (qS) return Ep;
  qS = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s, a) {
      o[++r] = [a, s];
    }), o;
  }
  return Ep = e, Ep;
}
var Cp, zS;
function Hy() {
  if (zS) return Cp;
  zS = 1;
  function e(t) {
    var r = -1, o = Array(t.size);
    return t.forEach(function(s) {
      o[++r] = s;
    }), o;
  }
  return Cp = e, Cp;
}
var kp, FS;
function G5() {
  if (FS) return kp;
  FS = 1;
  var e = mi(), t = TT(), r = gi(), o = FT(), s = U5(), a = Hy(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", g = "[object Map]", m = "[object Number]", w = "[object RegExp]", E = "[object Set]", y = "[object String]", x = "[object Symbol]", S = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, k = _ ? _.valueOf : void 0;
  function N(T, A, O, D, G, B, V) {
    switch (O) {
      case C:
        if (T.byteLength != A.byteLength || T.byteOffset != A.byteOffset)
          return !1;
        T = T.buffer, A = A.buffer;
      case S:
        return !(T.byteLength != A.byteLength || !B(new t(T), new t(A)));
      case f:
      case d:
      case m:
        return r(+T, +A);
      case h:
        return T.name == A.name && T.message == A.message;
      case w:
      case y:
        return T == A + "";
      case g:
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
  return kp = N, kp;
}
var Rp, $S;
function Y5() {
  if ($S) return Rp;
  $S = 1;
  var e = NT(), t = 1, r = Object.prototype, o = r.hasOwnProperty;
  function s(a, l, u, f, d, h) {
    var g = u & t, m = e(a), w = m.length, E = e(l), y = E.length;
    if (w != y && !g)
      return !1;
    for (var x = w; x--; ) {
      var S = m[x];
      if (!(g ? S in l : o.call(l, S)))
        return !1;
    }
    var C = h.get(a), _ = h.get(l);
    if (C && _)
      return C == l && _ == a;
    var k = !0;
    h.set(a, l), h.set(l, a);
    for (var N = g; ++x < w; ) {
      S = m[x];
      var T = a[S], A = l[S];
      if (f)
        var O = g ? f(A, T, S, l, a, h) : f(T, A, S, a, l, h);
      if (!(O === void 0 ? T === A || d(T, A, u, f, h) : O)) {
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
  return Rp = s, Rp;
}
var Np, BS;
function K5() {
  if (BS) return Np;
  BS = 1;
  var e = Nu(), t = FT(), r = G5(), o = Y5(), s = yi(), a = rt(), l = vi(), u = Gs(), f = 1, d = "[object Arguments]", h = "[object Array]", g = "[object Object]", m = Object.prototype, w = m.hasOwnProperty;
  function E(y, x, S, C, _, k) {
    var N = a(y), T = a(x), A = N ? h : s(y), O = T ? h : s(x);
    A = A == d ? g : A, O = O == d ? g : O;
    var D = A == g, G = O == g, B = A == O;
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
  return Np = E, Np;
}
var Pp, VS;
function $T() {
  if (VS) return Pp;
  VS = 1;
  var e = K5(), t = Ln();
  function r(o, s, a, l, u) {
    return o === s ? !0 : o == null || s == null || !t(o) && !t(s) ? o !== o && s !== s : e(o, s, a, l, r, u);
  }
  return Pp = r, Pp;
}
var Tp, HS;
function X5() {
  if (HS) return Tp;
  HS = 1;
  var e = Nu(), t = $T(), r = 1, o = 2;
  function s(a, l, u, f) {
    var d = u.length, h = d, g = !f;
    if (a == null)
      return !h;
    for (a = Object(a); d--; ) {
      var m = u[d];
      if (g && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++d < h; ) {
      m = u[d];
      var w = m[0], E = a[w], y = m[1];
      if (g && m[2]) {
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
  return Tp = s, Tp;
}
var Ap, WS;
function BT() {
  if (WS) return Ap;
  WS = 1;
  var e = Zt();
  function t(r) {
    return r === r && !e(r);
  }
  return Ap = t, Ap;
}
var Ip, US;
function Q5() {
  if (US) return Ip;
  US = 1;
  var e = BT(), t = Mr();
  function r(o) {
    for (var s = t(o), a = s.length; a--; ) {
      var l = s[a], u = o[l];
      s[a] = [l, u, e(u)];
    }
    return s;
  }
  return Ip = r, Ip;
}
var Mp, GS;
function VT() {
  if (GS) return Mp;
  GS = 1;
  function e(t, r) {
    return function(o) {
      return o == null ? !1 : o[t] === r && (r !== void 0 || t in Object(o));
    };
  }
  return Mp = e, Mp;
}
var Op, YS;
function Z5() {
  if (YS) return Op;
  YS = 1;
  var e = X5(), t = Q5(), r = VT();
  function o(s) {
    var a = t(s);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(l) {
      return l === s || e(l, s, a);
    };
  }
  return Op = o, Op;
}
var Lp, KS;
function wi() {
  if (KS) return Lp;
  KS = 1;
  var e = co(), t = Ln(), r = "[object Symbol]";
  function o(s) {
    return typeof s == "symbol" || t(s) && e(s) == r;
  }
  return Lp = o, Lp;
}
var jp, XS;
function Wy() {
  if (XS) return jp;
  XS = 1;
  var e = rt(), t = wi(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function s(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !r.test(a) || l != null && a in Object(l);
  }
  return jp = s, jp;
}
var Dp, QS;
function J5() {
  if (QS) return Dp;
  QS = 1;
  var e = My(), t = "Expected a function";
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
  return r.Cache = e, Dp = r, Dp;
}
var qp, ZS;
function eV() {
  if (ZS) return qp;
  ZS = 1;
  var e = J5(), t = 500;
  function r(o) {
    var s = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = s.cache;
    return s;
  }
  return qp = r, qp;
}
var zp, JS;
function tV() {
  if (JS) return zp;
  JS = 1;
  var e = eV(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, o = e(function(s) {
    var a = [];
    return s.charCodeAt(0) === 46 && a.push(""), s.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(r, "$1") : u || l);
    }), a;
  });
  return zp = o, zp;
}
var Fp, eE;
function ju() {
  if (eE) return Fp;
  eE = 1;
  function e(t, r) {
    for (var o = -1, s = t == null ? 0 : t.length, a = Array(s); ++o < s; )
      a[o] = r(t[o], o, t);
    return a;
  }
  return Fp = e, Fp;
}
var $p, tE;
function nV() {
  if (tE) return $p;
  tE = 1;
  var e = mi(), t = ju(), r = rt(), o = wi(), s = e ? e.prototype : void 0, a = s ? s.toString : void 0;
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
  return $p = l, $p;
}
var Bp, nE;
function HT() {
  if (nE) return Bp;
  nE = 1;
  var e = nV();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Bp = t, Bp;
}
var Vp, rE;
function Du() {
  if (rE) return Vp;
  rE = 1;
  var e = rt(), t = Wy(), r = tV(), o = HT();
  function s(a, l) {
    return e(a) ? a : t(a, l) ? [a] : r(o(a));
  }
  return Vp = s, Vp;
}
var Hp, oE;
function Ys() {
  if (oE) return Hp;
  oE = 1;
  var e = wi();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var o = r + "";
    return o == "0" && 1 / r == -1 / 0 ? "-0" : o;
  }
  return Hp = t, Hp;
}
var Wp, iE;
function qu() {
  if (iE) return Wp;
  iE = 1;
  var e = Du(), t = Ys();
  function r(o, s) {
    s = e(s, o);
    for (var a = 0, l = s.length; o != null && a < l; )
      o = o[t(s[a++])];
    return a && a == l ? o : void 0;
  }
  return Wp = r, Wp;
}
var Up, sE;
function rV() {
  if (sE) return Up;
  sE = 1;
  var e = qu();
  function t(r, o, s) {
    var a = r == null ? void 0 : e(r, o);
    return a === void 0 ? s : a;
  }
  return Up = t, Up;
}
var Gp, aE;
function oV() {
  if (aE) return Gp;
  aE = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Gp = e, Gp;
}
var Yp, lE;
function WT() {
  if (lE) return Yp;
  lE = 1;
  var e = Du(), t = Us(), r = rt(), o = Au(), s = Ly(), a = Ys();
  function l(u, f, d) {
    f = e(f, u);
    for (var h = -1, g = f.length, m = !1; ++h < g; ) {
      var w = a(f[h]);
      if (!(m = u != null && d(u, w)))
        break;
      u = u[w];
    }
    return m || ++h != g ? m : (g = u == null ? 0 : u.length, !!g && s(g) && o(w, g) && (r(u) || t(u)));
  }
  return Yp = l, Yp;
}
var Kp, uE;
function UT() {
  if (uE) return Kp;
  uE = 1;
  var e = oV(), t = WT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return Kp = r, Kp;
}
var Xp, cE;
function iV() {
  if (cE) return Xp;
  cE = 1;
  var e = $T(), t = rV(), r = UT(), o = Wy(), s = BT(), a = VT(), l = Ys(), u = 1, f = 2;
  function d(h, g) {
    return o(h) && s(g) ? a(l(h), g) : function(m) {
      var w = t(m, h);
      return w === void 0 && w === g ? r(m, h) : e(g, w, u | f);
    };
  }
  return Xp = d, Xp;
}
var Qp, fE;
function GT() {
  if (fE) return Qp;
  fE = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return Qp = e, Qp;
}
var Zp, dE;
function sV() {
  if (dE) return Zp;
  dE = 1;
  var e = qu();
  function t(r) {
    return function(o) {
      return e(o, r);
    };
  }
  return Zp = t, Zp;
}
var Jp, hE;
function aV() {
  if (hE) return Jp;
  hE = 1;
  var e = GT(), t = sV(), r = Wy(), o = Ys();
  function s(a) {
    return r(a) ? e(o(a)) : t(a);
  }
  return Jp = s, Jp;
}
var eg, pE;
function Jn() {
  if (pE) return eg;
  pE = 1;
  var e = Z5(), t = iV(), r = po(), o = rt(), s = aV();
  function a(l) {
    return typeof l == "function" ? l : l == null ? r : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : s(l);
  }
  return eg = a, eg;
}
var tg, gE;
function YT() {
  if (gE) return tg;
  gE = 1;
  var e = ET(), t = B5(), r = Jn(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : t;
    return u(a, r(l, 3));
  }
  return tg = s, tg;
}
var ng, mE;
function lV() {
  if (mE) return ng;
  mE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(o, s) {
    return o != null && t.call(o, s);
  }
  return ng = r, ng;
}
var rg, vE;
function KT() {
  if (vE) return rg;
  vE = 1;
  var e = lV(), t = WT();
  function r(o, s) {
    return o != null && t(o, s, e);
  }
  return rg = r, rg;
}
var og, yE;
function uV() {
  if (yE) return og;
  yE = 1;
  var e = Dy(), t = yi(), r = Us(), o = rt(), s = Zn(), a = vi(), l = Mu(), u = Gs(), f = "[object Map]", d = "[object Set]", h = Object.prototype, g = h.hasOwnProperty;
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
      if (g.call(w, y))
        return !1;
    return !0;
  }
  return og = m, og;
}
var ig, wE;
function XT() {
  if (wE) return ig;
  wE = 1;
  function e(t) {
    return t === void 0;
  }
  return ig = e, ig;
}
var sg, xE;
function QT() {
  if (xE) return sg;
  xE = 1;
  var e = Lu(), t = Zn();
  function r(o, s) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = s(u, f, d);
    }), l;
  }
  return sg = r, sg;
}
var ag, _E;
function ZT() {
  if (_E) return ag;
  _E = 1;
  var e = ju(), t = Jn(), r = QT(), o = rt();
  function s(a, l) {
    var u = o(a) ? e : r;
    return u(a, t(l, 3));
  }
  return ag = s, ag;
}
var lg, bE;
function cV() {
  if (bE) return lg;
  bE = 1;
  function e(t, r, o, s) {
    var a = -1, l = t == null ? 0 : t.length;
    for (s && l && (o = t[++a]); ++a < l; )
      o = r(o, t[a], a, t);
    return o;
  }
  return lg = e, lg;
}
var ug, SE;
function fV() {
  if (SE) return ug;
  SE = 1;
  function e(t, r, o, s, a) {
    return a(t, function(l, u, f) {
      o = s ? (s = !1, l) : r(o, l, u, f);
    }), o;
  }
  return ug = e, ug;
}
var cg, EE;
function JT() {
  if (EE) return cg;
  EE = 1;
  var e = cV(), t = Lu(), r = Jn(), o = fV(), s = rt();
  function a(l, u, f) {
    var d = s(l) ? e : o, h = arguments.length < 3;
    return d(l, r(u, 4), f, h, t);
  }
  return cg = a, cg;
}
var fg, CE;
function dV() {
  if (CE) return fg;
  CE = 1;
  var e = co(), t = rt(), r = Ln(), o = "[object String]";
  function s(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == o;
  }
  return fg = s, fg;
}
var dg, kE;
function hV() {
  if (kE) return dg;
  kE = 1;
  var e = GT(), t = e("length");
  return dg = t, dg;
}
var hg, RE;
function pV() {
  if (RE) return hg;
  RE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + s + a + "]");
  function f(d) {
    return u.test(d);
  }
  return hg = f, hg;
}
var pg, NE;
function gV() {
  if (NE) return pg;
  NE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + r + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + s + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", g = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "\\u200d", E = d + "?", y = "[" + a + "]?", x = "(?:" + w + "(?:" + [h, g, m].join("|") + ")" + y + E + ")*", S = y + E + x, C = "(?:" + [h + u + "?", u, g, m, l].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + S, "g");
  function k(N) {
    for (var T = _.lastIndex = 0; _.test(N); )
      ++T;
    return T;
  }
  return pg = k, pg;
}
var gg, PE;
function mV() {
  if (PE) return gg;
  PE = 1;
  var e = hV(), t = pV(), r = gV();
  function o(s) {
    return t(s) ? r(s) : e(s);
  }
  return gg = o, gg;
}
var mg, TE;
function vV() {
  if (TE) return mg;
  TE = 1;
  var e = Dy(), t = yi(), r = Zn(), o = dV(), s = mV(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (r(f))
      return o(f) ? s(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return mg = u, mg;
}
var vg, AE;
function yV() {
  if (AE) return vg;
  AE = 1;
  var e = Oy(), t = IT(), r = Vy(), o = Jn(), s = Ou(), a = rt(), l = vi(), u = Hs(), f = Zt(), d = Gs();
  function h(g, m, w) {
    var E = a(g), y = E || l(g) || d(g);
    if (m = o(m, 4), w == null) {
      var x = g && g.constructor;
      y ? w = E ? new x() : [] : f(g) ? w = u(x) ? t(s(g)) : {} : w = {};
    }
    return (y ? e : r)(g, function(S, C, _) {
      return m(w, S, C, _);
    }), w;
  }
  return vg = h, vg;
}
var yg, IE;
function wV() {
  if (IE) return yg;
  IE = 1;
  var e = mi(), t = Us(), r = rt(), o = e ? e.isConcatSpreadable : void 0;
  function s(a) {
    return r(a) || t(a) || !!(o && a && a[o]);
  }
  return yg = s, yg;
}
var wg, ME;
function Uy() {
  if (ME) return wg;
  ME = 1;
  var e = zy(), t = wV();
  function r(o, s, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      s > 0 && a(h) ? s > 1 ? r(h, s - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return wg = r, wg;
}
var xg, OE;
function xV() {
  if (OE) return xg;
  OE = 1;
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
  return xg = e, xg;
}
var _g, LE;
function eA() {
  if (LE) return _g;
  LE = 1;
  var e = xV(), t = Math.max;
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
  return _g = r, _g;
}
var bg, jE;
function _V() {
  if (jE) return bg;
  jE = 1;
  var e = $y(), t = wT(), r = po(), o = t ? function(s, a) {
    return t(s, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return bg = o, bg;
}
var Sg, DE;
function bV() {
  if (DE) return Sg;
  DE = 1;
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
  return Sg = o, Sg;
}
var Eg, qE;
function tA() {
  if (qE) return Eg;
  qE = 1;
  var e = _V(), t = bV(), r = t(e);
  return Eg = r, Eg;
}
var Cg, zE;
function zu() {
  if (zE) return Cg;
  zE = 1;
  var e = po(), t = eA(), r = tA();
  function o(s, a) {
    return r(t(s, a, e), s + "");
  }
  return Cg = o, Cg;
}
var kg, FE;
function nA() {
  if (FE) return kg;
  FE = 1;
  function e(t, r, o, s) {
    for (var a = t.length, l = o + (s ? 1 : -1); s ? l-- : ++l < a; )
      if (r(t[l], l, t))
        return l;
    return -1;
  }
  return kg = e, kg;
}
var Rg, $E;
function SV() {
  if ($E) return Rg;
  $E = 1;
  function e(t) {
    return t !== t;
  }
  return Rg = e, Rg;
}
var Ng, BE;
function EV() {
  if (BE) return Ng;
  BE = 1;
  function e(t, r, o) {
    for (var s = o - 1, a = t.length; ++s < a; )
      if (t[s] === r)
        return s;
    return -1;
  }
  return Ng = e, Ng;
}
var Pg, VE;
function CV() {
  if (VE) return Pg;
  VE = 1;
  var e = nA(), t = SV(), r = EV();
  function o(s, a, l) {
    return a === a ? r(s, a, l) : e(s, t, l);
  }
  return Pg = o, Pg;
}
var Tg, HE;
function kV() {
  if (HE) return Tg;
  HE = 1;
  var e = CV();
  function t(r, o) {
    var s = r == null ? 0 : r.length;
    return !!s && e(r, o, 0) > -1;
  }
  return Tg = t, Tg;
}
var Ag, WE;
function RV() {
  if (WE) return Ag;
  WE = 1;
  function e(t, r, o) {
    for (var s = -1, a = t == null ? 0 : t.length; ++s < a; )
      if (o(r, t[s]))
        return !0;
    return !1;
  }
  return Ag = e, Ag;
}
var Ig, UE;
function NV() {
  if (UE) return Ig;
  UE = 1;
  function e() {
  }
  return Ig = e, Ig;
}
var Mg, GE;
function PV() {
  if (GE) return Mg;
  GE = 1;
  var e = PT(), t = NV(), r = Hy(), o = 1 / 0, s = e && 1 / r(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return Mg = s, Mg;
}
var Og, YE;
function TV() {
  if (YE) return Og;
  YE = 1;
  var e = qT(), t = kV(), r = RV(), o = zT(), s = PV(), a = Hy(), l = 200;
  function u(f, d, h) {
    var g = -1, m = t, w = f.length, E = !0, y = [], x = y;
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
      for (; ++g < w; ) {
        var C = f[g], _ = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, E && _ === _) {
          for (var k = x.length; k--; )
            if (x[k] === _)
              continue e;
          d && x.push(_), y.push(C);
        } else m(x, _, h) || (x !== y && x.push(_), y.push(C));
      }
    return y;
  }
  return Og = u, Og;
}
var Lg, KE;
function rA() {
  if (KE) return Lg;
  KE = 1;
  var e = Zn(), t = Ln();
  function r(o) {
    return t(o) && e(o);
  }
  return Lg = r, Lg;
}
var jg, XE;
function AV() {
  if (XE) return jg;
  XE = 1;
  var e = Uy(), t = zu(), r = TV(), o = rA(), s = t(function(a) {
    return r(e(a, 1, o, !0));
  });
  return jg = s, jg;
}
var Dg, QE;
function IV() {
  if (QE) return Dg;
  QE = 1;
  var e = ju();
  function t(r, o) {
    return e(o, function(s) {
      return r[s];
    });
  }
  return Dg = t, Dg;
}
var qg, ZE;
function oA() {
  if (ZE) return qg;
  ZE = 1;
  var e = IV(), t = Mr();
  function r(o) {
    return o == null ? [] : e(o, t(o));
  }
  return qg = r, qg;
}
var zg, JE;
function Jt() {
  if (JE) return zg;
  JE = 1;
  var e;
  if (typeof Ay == "function")
    try {
      e = {
        clone: z5(),
        constant: $y(),
        each: DT(),
        filter: YT(),
        has: KT(),
        isArray: rt(),
        isEmpty: uV(),
        isFunction: Hs(),
        isUndefined: XT(),
        keys: Mr(),
        map: ZT(),
        reduce: JT(),
        size: vV(),
        transform: yV(),
        union: AV(),
        values: oA()
      };
    } catch {
    }
  return e || (e = window._), zg = e, zg;
}
var Fg, eC;
function Gy() {
  if (eC) return Fg;
  eC = 1;
  var e = Jt();
  Fg = s;
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
    return e.filter(this.nodes(), function(g) {
      return e.isEmpty(h._in[g]);
    });
  }, s.prototype.sinks = function() {
    var h = this;
    return e.filter(this.nodes(), function(g) {
      return e.isEmpty(h._out[g]);
    });
  }, s.prototype.setNodes = function(h, g) {
    var m = arguments, w = this;
    return e.each(h, function(E) {
      m.length > 1 ? w.setNode(E, g) : w.setNode(E);
    }), this;
  }, s.prototype.setNode = function(h, g) {
    return e.has(this._nodes, h) ? (arguments.length > 1 && (this._nodes[h] = g), this) : (this._nodes[h] = arguments.length > 1 ? g : this._defaultNodeLabelFn(h), this._isCompound && (this._parent[h] = r, this._children[h] = {}, this._children[r][h] = !0), this._in[h] = {}, this._preds[h] = {}, this._out[h] = {}, this._sucs[h] = {}, ++this._nodeCount, this);
  }, s.prototype.node = function(h) {
    return this._nodes[h];
  }, s.prototype.hasNode = function(h) {
    return e.has(this._nodes, h);
  }, s.prototype.removeNode = function(h) {
    var g = this;
    if (e.has(this._nodes, h)) {
      var m = function(w) {
        g.removeEdge(g._edgeObjs[w]);
      };
      delete this._nodes[h], this._isCompound && (this._removeFromParentsChildList(h), delete this._parent[h], e.each(this.children(h), function(w) {
        g.setParent(w);
      }), delete this._children[h]), e.each(e.keys(this._in[h]), m), delete this._in[h], delete this._preds[h], e.each(e.keys(this._out[h]), m), delete this._out[h], delete this._sucs[h], --this._nodeCount;
    }
    return this;
  }, s.prototype.setParent = function(h, g) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (e.isUndefined(g))
      g = r;
    else {
      g += "";
      for (var m = g; !e.isUndefined(m); m = this.parent(m))
        if (m === h)
          throw new Error("Setting " + g + " as parent of " + h + " would create a cycle");
      this.setNode(g);
    }
    return this.setNode(h), this._removeFromParentsChildList(h), this._parent[h] = g, this._children[g][h] = !0, this;
  }, s.prototype._removeFromParentsChildList = function(h) {
    delete this._children[this._parent[h]][h];
  }, s.prototype.parent = function(h) {
    if (this._isCompound) {
      var g = this._parent[h];
      if (g !== r)
        return g;
    }
  }, s.prototype.children = function(h) {
    if (e.isUndefined(h) && (h = r), this._isCompound) {
      var g = this._children[h];
      if (g)
        return e.keys(g);
    } else {
      if (h === r)
        return this.nodes();
      if (this.hasNode(h))
        return [];
    }
  }, s.prototype.predecessors = function(h) {
    var g = this._preds[h];
    if (g)
      return e.keys(g);
  }, s.prototype.successors = function(h) {
    var g = this._sucs[h];
    if (g)
      return e.keys(g);
  }, s.prototype.neighbors = function(h) {
    var g = this.predecessors(h);
    if (g)
      return e.union(g, this.successors(h));
  }, s.prototype.isLeaf = function(h) {
    var g;
    return this.isDirected() ? g = this.successors(h) : g = this.neighbors(h), g.length === 0;
  }, s.prototype.filterNodes = function(h) {
    var g = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    g.setGraph(this.graph());
    var m = this;
    e.each(this._nodes, function(y, x) {
      h(x) && g.setNode(x, y);
    }), e.each(this._edgeObjs, function(y) {
      g.hasNode(y.v) && g.hasNode(y.w) && g.setEdge(y, m.edge(y));
    });
    var w = {};
    function E(y) {
      var x = m.parent(y);
      return x === void 0 || g.hasNode(x) ? (w[y] = x, x) : x in w ? w[x] : E(x);
    }
    return this._isCompound && e.each(g.nodes(), function(y) {
      g.setParent(y, E(y));
    }), g;
  }, s.prototype.setDefaultEdgeLabel = function(h) {
    return e.isFunction(h) || (h = e.constant(h)), this._defaultEdgeLabelFn = h, this;
  }, s.prototype.edgeCount = function() {
    return this._edgeCount;
  }, s.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, s.prototype.setPath = function(h, g) {
    var m = this, w = arguments;
    return e.reduce(h, function(E, y) {
      return w.length > 1 ? m.setEdge(E, y, g) : m.setEdge(E, y), y;
    }), this;
  }, s.prototype.setEdge = function() {
    var h, g, m, w, E = !1, y = arguments[0];
    typeof y == "object" && y !== null && "v" in y ? (h = y.v, g = y.w, m = y.name, arguments.length === 2 && (w = arguments[1], E = !0)) : (h = y, g = arguments[1], m = arguments[3], arguments.length > 2 && (w = arguments[2], E = !0)), h = "" + h, g = "" + g, e.isUndefined(m) || (m = "" + m);
    var x = u(this._isDirected, h, g, m);
    if (e.has(this._edgeLabels, x))
      return E && (this._edgeLabels[x] = w), this;
    if (!e.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(h), this.setNode(g), this._edgeLabels[x] = E ? w : this._defaultEdgeLabelFn(h, g, m);
    var S = f(this._isDirected, h, g, m);
    return h = S.v, g = S.w, Object.freeze(S), this._edgeObjs[x] = S, a(this._preds[g], h), a(this._sucs[h], g), this._in[g][x] = S, this._out[h][x] = S, this._edgeCount++, this;
  }, s.prototype.edge = function(h, g, m) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, g, m);
    return this._edgeLabels[w];
  }, s.prototype.hasEdge = function(h, g, m) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, g, m);
    return e.has(this._edgeLabels, w);
  }, s.prototype.removeEdge = function(h, g, m) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : u(this._isDirected, h, g, m), E = this._edgeObjs[w];
    return E && (h = E.v, g = E.w, delete this._edgeLabels[w], delete this._edgeObjs[w], l(this._preds[g], h), l(this._sucs[h], g), delete this._in[g][w], delete this._out[h][w], this._edgeCount--), this;
  }, s.prototype.inEdges = function(h, g) {
    var m = this._in[h];
    if (m) {
      var w = e.values(m);
      return g ? e.filter(w, function(E) {
        return E.v === g;
      }) : w;
    }
  }, s.prototype.outEdges = function(h, g) {
    var m = this._out[h];
    if (m) {
      var w = e.values(m);
      return g ? e.filter(w, function(E) {
        return E.w === g;
      }) : w;
    }
  }, s.prototype.nodeEdges = function(h, g) {
    var m = this.inEdges(h, g);
    if (m)
      return m.concat(this.outEdges(h, g));
  };
  function a(h, g) {
    h[g] ? h[g]++ : h[g] = 1;
  }
  function l(h, g) {
    --h[g] || delete h[g];
  }
  function u(h, g, m, w) {
    var E = "" + g, y = "" + m;
    if (!h && E > y) {
      var x = E;
      E = y, y = x;
    }
    return E + o + y + o + (e.isUndefined(w) ? t : w);
  }
  function f(h, g, m, w) {
    var E = "" + g, y = "" + m;
    if (!h && E > y) {
      var x = E;
      E = y, y = x;
    }
    var S = { v: E, w: y };
    return w && (S.name = w), S;
  }
  function d(h, g) {
    return u(h, g.v, g.w, g.name);
  }
  return Fg;
}
var $g, tC;
function MV() {
  return tC || (tC = 1, $g = "2.1.8"), $g;
}
var Bg, nC;
function OV() {
  return nC || (nC = 1, Bg = {
    Graph: Gy(),
    version: MV()
  }), Bg;
}
var Vg, rC;
function LV() {
  if (rC) return Vg;
  rC = 1;
  var e = Jt(), t = Gy();
  Vg = {
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
  return Vg;
}
var Hg, oC;
function jV() {
  if (oC) return Hg;
  oC = 1;
  var e = Jt();
  Hg = t;
  function t(r) {
    var o = {}, s = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(r.successors(u), l), e.each(r.predecessors(u), l));
    }
    return e.each(r.nodes(), function(u) {
      a = [], l(u), a.length && s.push(a);
    }), s;
  }
  return Hg;
}
var Wg, iC;
function iA() {
  if (iC) return Wg;
  iC = 1;
  var e = Jt();
  Wg = t;
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
  }, Wg;
}
var Ug, sC;
function sA() {
  if (sC) return Ug;
  sC = 1;
  var e = Jt(), t = iA();
  Ug = o;
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
    var d = {}, h = new t(), g, m, w = function(E) {
      var y = E.v !== g ? E.v : E.w, x = d[y], S = u(E), C = m.distance + S;
      if (S < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + E + " Weight: " + S);
      C < x.distance && (x.distance = C, x.predecessor = g, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(E) {
      var y = E === l ? 0 : Number.POSITIVE_INFINITY;
      d[E] = { distance: y }, h.add(E, y);
    }); h.size() > 0 && (g = h.removeMin(), m = d[g], m.distance !== Number.POSITIVE_INFINITY); )
      f(g).forEach(w);
    return d;
  }
  return Ug;
}
var Gg, aC;
function DV() {
  if (aC) return Gg;
  aC = 1;
  var e = sA(), t = Jt();
  Gg = r;
  function r(o, s, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, s, a);
    }, {});
  }
  return Gg;
}
var Yg, lC;
function aA() {
  if (lC) return Yg;
  lC = 1;
  var e = Jt();
  Yg = t;
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
        var h = [], g;
        do
          g = s.pop(), a[g].onStack = !1, h.push(g);
        while (f !== g);
        l.push(h);
      }
    }
    return r.nodes().forEach(function(f) {
      e.has(a, f) || u(f);
    }), l;
  }
  return Yg;
}
var Kg, uC;
function qV() {
  if (uC) return Kg;
  uC = 1;
  var e = Jt(), t = aA();
  Kg = r;
  function r(o) {
    return e.filter(t(o), function(s) {
      return s.length > 1 || s.length === 1 && o.hasEdge(s[0], s[0]);
    });
  }
  return Kg;
}
var Xg, cC;
function zV() {
  if (cC) return Xg;
  cC = 1;
  var e = Jt();
  Xg = r;
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
        var g = h.v === d ? h.w : h.v, m = a(h);
        u[d][g] = { distance: m, predecessor: d };
      });
    }), f.forEach(function(d) {
      var h = u[d];
      f.forEach(function(g) {
        var m = u[g];
        f.forEach(function(w) {
          var E = m[d], y = h[w], x = m[w], S = E.distance + y.distance;
          S < x.distance && (x.distance = S, x.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return Xg;
}
var Qg, fC;
function lA() {
  if (fC) return Qg;
  fC = 1;
  var e = Jt();
  Qg = t, t.CycleException = r;
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
  return r.prototype = new Error(), Qg;
}
var Zg, dC;
function FV() {
  if (dC) return Zg;
  dC = 1;
  var e = lA();
  Zg = t;
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
  return Zg;
}
var Jg, hC;
function uA() {
  if (hC) return Jg;
  hC = 1;
  var e = Jt();
  Jg = t;
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
  return Jg;
}
var em, pC;
function $V() {
  if (pC) return em;
  pC = 1;
  var e = uA();
  em = t;
  function t(r, o) {
    return e(r, o, "post");
  }
  return em;
}
var tm, gC;
function BV() {
  if (gC) return tm;
  gC = 1;
  var e = uA();
  tm = t;
  function t(r, o) {
    return e(r, o, "pre");
  }
  return tm;
}
var nm, mC;
function VV() {
  if (mC) return nm;
  mC = 1;
  var e = Jt(), t = Gy(), r = iA();
  nm = o;
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
    for (var g = !1; f.size() > 0; ) {
      if (d = f.removeMin(), e.has(u, d))
        l.setEdge(d, u[d]);
      else {
        if (g)
          throw new Error("Input graph is not connected: " + s);
        g = !0;
      }
      s.nodeEdges(d).forEach(h);
    }
    return l;
  }
  return nm;
}
var rm, vC;
function HV() {
  return vC || (vC = 1, rm = {
    components: jV(),
    dijkstra: sA(),
    dijkstraAll: DV(),
    findCycles: qV(),
    floydWarshall: zV(),
    isAcyclic: FV(),
    postorder: $V(),
    preorder: BV(),
    prim: VV(),
    tarjan: aA(),
    topsort: lA()
  }), rm;
}
var om, yC;
function WV() {
  if (yC) return om;
  yC = 1;
  var e = OV();
  return om = {
    Graph: e.Graph,
    json: LV(),
    alg: HV(),
    version: e.version
  }, om;
}
var im, wC;
function vn() {
  if (wC) return im;
  wC = 1;
  var e;
  if (typeof Ay == "function")
    try {
      e = WV();
    } catch {
    }
  return e || (e = window.graphlib), im = e, im;
}
var sm, xC;
function UV() {
  if (xC) return sm;
  xC = 1;
  var e = OT(), t = 1, r = 4;
  function o(s) {
    return e(s, t | r);
  }
  return sm = o, sm;
}
var am, _C;
function Fu() {
  if (_C) return am;
  _C = 1;
  var e = gi(), t = Zn(), r = Au(), o = Zt();
  function s(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && r(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return am = s, am;
}
var lm, bC;
function GV() {
  if (bC) return lm;
  bC = 1;
  var e = zu(), t = gi(), r = Fu(), o = ho(), s = Object.prototype, a = s.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, g = h > 2 ? f[2] : void 0;
    for (g && r(f[0], f[1], g) && (h = 1); ++d < h; )
      for (var m = f[d], w = o(m), E = -1, y = w.length; ++E < y; ) {
        var x = w[E], S = u[x];
        (S === void 0 || t(S, s[x]) && !a.call(u, x)) && (u[x] = m[x]);
      }
    return u;
  });
  return lm = l, lm;
}
var um, SC;
function YV() {
  if (SC) return um;
  SC = 1;
  var e = Jn(), t = Zn(), r = Mr();
  function o(s) {
    return function(a, l, u) {
      var f = Object(a);
      if (!t(a)) {
        var d = e(l, 3);
        a = r(a), l = function(g) {
          return d(f[g], g, f);
        };
      }
      var h = s(a, l, u);
      return h > -1 ? f[d ? a[h] : h] : void 0;
    };
  }
  return um = o, um;
}
var cm, EC;
function KV() {
  if (EC) return cm;
  EC = 1;
  var e = /\s/;
  function t(r) {
    for (var o = r.length; o-- && e.test(r.charAt(o)); )
      ;
    return o;
  }
  return cm = t, cm;
}
var fm, CC;
function XV() {
  if (CC) return fm;
  CC = 1;
  var e = KV(), t = /^\s+/;
  function r(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return fm = r, fm;
}
var dm, kC;
function QV() {
  if (kC) return dm;
  kC = 1;
  var e = XV(), t = Zt(), r = wi(), o = NaN, s = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
    var g = a.test(d);
    return g || l.test(d) ? u(d.slice(2), g ? 2 : 8) : s.test(d) ? o : +d;
  }
  return dm = f, dm;
}
var hm, RC;
function cA() {
  if (RC) return hm;
  RC = 1;
  var e = QV(), t = 1 / 0, r = 17976931348623157e292;
  function o(s) {
    if (!s)
      return s === 0 ? s : 0;
    if (s = e(s), s === t || s === -t) {
      var a = s < 0 ? -1 : 1;
      return a * r;
    }
    return s === s ? s : 0;
  }
  return hm = o, hm;
}
var pm, NC;
function ZV() {
  if (NC) return pm;
  NC = 1;
  var e = cA();
  function t(r) {
    var o = e(r), s = o % 1;
    return o === o ? s ? o - s : o : 0;
  }
  return pm = t, pm;
}
var gm, PC;
function JV() {
  if (PC) return gm;
  PC = 1;
  var e = nA(), t = Jn(), r = ZV(), o = Math.max;
  function s(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : r(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return gm = s, gm;
}
var mm, TC;
function eH() {
  if (TC) return mm;
  TC = 1;
  var e = YV(), t = JV(), r = e(t);
  return mm = r, mm;
}
var vm, AC;
function fA() {
  if (AC) return vm;
  AC = 1;
  var e = Uy();
  function t(r) {
    var o = r == null ? 0 : r.length;
    return o ? e(r, 1) : [];
  }
  return vm = t, vm;
}
var ym, IC;
function tH() {
  if (IC) return ym;
  IC = 1;
  var e = By(), t = LT(), r = ho();
  function o(s, a) {
    return s == null ? s : e(s, t(a), r);
  }
  return ym = o, ym;
}
var wm, MC;
function nH() {
  if (MC) return wm;
  MC = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return wm = e, wm;
}
var xm, OC;
function rH() {
  if (OC) return xm;
  OC = 1;
  var e = Pu(), t = Vy(), r = Jn();
  function o(s, a) {
    var l = {};
    return a = r(a, 3), t(s, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return xm = o, xm;
}
var _m, LC;
function Yy() {
  if (LC) return _m;
  LC = 1;
  var e = wi();
  function t(r, o, s) {
    for (var a = -1, l = r.length; ++a < l; ) {
      var u = r[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : s(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return _m = t, _m;
}
var bm, jC;
function oH() {
  if (jC) return bm;
  jC = 1;
  function e(t, r) {
    return t > r;
  }
  return bm = e, bm;
}
var Sm, DC;
function iH() {
  if (DC) return Sm;
  DC = 1;
  var e = Yy(), t = oH(), r = po();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return Sm = o, Sm;
}
var Em, qC;
function dA() {
  if (qC) return Em;
  qC = 1;
  var e = Pu(), t = gi();
  function r(o, s, a) {
    (a !== void 0 && !t(o[s], a) || a === void 0 && !(s in o)) && e(o, s, a);
  }
  return Em = r, Em;
}
var Cm, zC;
function sH() {
  if (zC) return Cm;
  zC = 1;
  var e = co(), t = Ou(), r = Ln(), o = "[object Object]", s = Function.prototype, a = Object.prototype, l = s.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!r(h) || e(h) != o)
      return !1;
    var g = t(h);
    if (g === null)
      return !0;
    var m = u.call(g, "constructor") && g.constructor;
    return typeof m == "function" && m instanceof m && l.call(m) == f;
  }
  return Cm = d, Cm;
}
var km, FC;
function hA() {
  if (FC) return km;
  FC = 1;
  function e(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return km = e, km;
}
var Rm, $C;
function aH() {
  if ($C) return Rm;
  $C = 1;
  var e = Ws(), t = ho();
  function r(o) {
    return e(o, t(o));
  }
  return Rm = r, Rm;
}
var Nm, BC;
function lH() {
  if (BC) return Nm;
  BC = 1;
  var e = dA(), t = bT(), r = AT(), o = ST(), s = MT(), a = Us(), l = rt(), u = rA(), f = vi(), d = Hs(), h = Zt(), g = sH(), m = Gs(), w = hA(), E = aH();
  function y(x, S, C, _, k, N, T) {
    var A = w(x, C), O = w(S, C), D = T.get(O);
    if (D) {
      e(x, C, D);
      return;
    }
    var G = N ? N(A, O, C + "", x, S, T) : void 0, B = G === void 0;
    if (B) {
      var V = l(O), X = !V && f(O), L = !V && !X && m(O);
      G = O, V || X || L ? l(A) ? G = A : u(A) ? G = o(A) : X ? (B = !1, G = t(O, !0)) : L ? (B = !1, G = r(O, !0)) : G = [] : g(O) || a(O) ? (G = A, a(A) ? G = E(A) : (!h(A) || d(A)) && (G = s(O))) : B = !1;
    }
    B && (T.set(O, G), k(G, O, _, N, T), T.delete(O)), e(x, C, G);
  }
  return Nm = y, Nm;
}
var Pm, VC;
function uH() {
  if (VC) return Pm;
  VC = 1;
  var e = Nu(), t = dA(), r = By(), o = lH(), s = Zt(), a = ho(), l = hA();
  function u(f, d, h, g, m) {
    f !== d && r(d, function(w, E) {
      if (m || (m = new e()), s(w))
        o(f, d, E, h, u, g, m);
      else {
        var y = g ? g(l(f, E), w, E + "", f, d, m) : void 0;
        y === void 0 && (y = w), t(f, E, y);
      }
    }, a);
  }
  return Pm = u, Pm;
}
var Tm, HC;
function cH() {
  if (HC) return Tm;
  HC = 1;
  var e = zu(), t = Fu();
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
  return Tm = r, Tm;
}
var Am, WC;
function fH() {
  if (WC) return Am;
  WC = 1;
  var e = uH(), t = cH(), r = t(function(o, s, a) {
    e(o, s, a);
  });
  return Am = r, Am;
}
var Im, UC;
function pA() {
  if (UC) return Im;
  UC = 1;
  function e(t, r) {
    return t < r;
  }
  return Im = e, Im;
}
var Mm, GC;
function dH() {
  if (GC) return Mm;
  GC = 1;
  var e = Yy(), t = pA(), r = po();
  function o(s) {
    return s && s.length ? e(s, r, t) : void 0;
  }
  return Mm = o, Mm;
}
var Om, YC;
function hH() {
  if (YC) return Om;
  YC = 1;
  var e = Yy(), t = Jn(), r = pA();
  function o(s, a) {
    return s && s.length ? e(s, t(a, 2), r) : void 0;
  }
  return Om = o, Om;
}
var Lm, KC;
function pH() {
  if (KC) return Lm;
  KC = 1;
  var e = wn(), t = function() {
    return e.Date.now();
  };
  return Lm = t, Lm;
}
var jm, XC;
function gH() {
  if (XC) return jm;
  XC = 1;
  var e = Tu(), t = Du(), r = Au(), o = Zt(), s = Ys();
  function a(l, u, f, d) {
    if (!o(l))
      return l;
    u = t(u, l);
    for (var h = -1, g = u.length, m = g - 1, w = l; w != null && ++h < g; ) {
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
  return jm = a, jm;
}
var Dm, QC;
function mH() {
  if (QC) return Dm;
  QC = 1;
  var e = qu(), t = gH(), r = Du();
  function o(s, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], g = e(s, h);
      l(g, h) && t(d, r(h, s), g);
    }
    return d;
  }
  return Dm = o, Dm;
}
var qm, ZC;
function vH() {
  if (ZC) return qm;
  ZC = 1;
  var e = mH(), t = UT();
  function r(o, s) {
    return e(o, s, function(a, l) {
      return t(o, l);
    });
  }
  return qm = r, qm;
}
var zm, JC;
function yH() {
  if (JC) return zm;
  JC = 1;
  var e = fA(), t = eA(), r = tA();
  function o(s) {
    return r(t(s, void 0, e), s + "");
  }
  return zm = o, zm;
}
var Fm, ek;
function wH() {
  if (ek) return Fm;
  ek = 1;
  var e = vH(), t = yH(), r = t(function(o, s) {
    return o == null ? {} : e(o, s);
  });
  return Fm = r, Fm;
}
var $m, tk;
function xH() {
  if (tk) return $m;
  tk = 1;
  var e = Math.ceil, t = Math.max;
  function r(o, s, a, l) {
    for (var u = -1, f = t(e((s - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return $m = r, $m;
}
var Bm, nk;
function _H() {
  if (nk) return Bm;
  nk = 1;
  var e = xH(), t = Fu(), r = cA();
  function o(s) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = r(a), l === void 0 ? (l = a, a = 0) : l = r(l), u = u === void 0 ? a < l ? 1 : -1 : r(u), e(a, l, u, s);
    };
  }
  return Bm = o, Bm;
}
var Vm, rk;
function bH() {
  if (rk) return Vm;
  rk = 1;
  var e = _H(), t = e();
  return Vm = t, Vm;
}
var Hm, ok;
function SH() {
  if (ok) return Hm;
  ok = 1;
  function e(t, r) {
    var o = t.length;
    for (t.sort(r); o--; )
      t[o] = t[o].value;
    return t;
  }
  return Hm = e, Hm;
}
var Wm, ik;
function EH() {
  if (ik) return Wm;
  ik = 1;
  var e = wi();
  function t(r, o) {
    if (r !== o) {
      var s = r !== void 0, a = r === null, l = r === r, u = e(r), f = o !== void 0, d = o === null, h = o === o, g = e(o);
      if (!d && !g && !u && r > o || u && f && h && !d && !g || a && f && h || !s && h || !l)
        return 1;
      if (!a && !u && !g && r < o || g && s && l && !a && !u || d && s && l || !f && l || !h)
        return -1;
    }
    return 0;
  }
  return Wm = t, Wm;
}
var Um, sk;
function CH() {
  if (sk) return Um;
  sk = 1;
  var e = EH();
  function t(r, o, s) {
    for (var a = -1, l = r.criteria, u = o.criteria, f = l.length, d = s.length; ++a < f; ) {
      var h = e(l[a], u[a]);
      if (h) {
        if (a >= d)
          return h;
        var g = s[a];
        return h * (g == "desc" ? -1 : 1);
      }
    }
    return r.index - o.index;
  }
  return Um = t, Um;
}
var Gm, ak;
function kH() {
  if (ak) return Gm;
  ak = 1;
  var e = ju(), t = qu(), r = Jn(), o = QT(), s = SH(), a = Iu(), l = CH(), u = po(), f = rt();
  function d(h, g, m) {
    g.length ? g = e(g, function(y) {
      return f(y) ? function(x) {
        return t(x, y.length === 1 ? y[0] : y);
      } : y;
    }) : g = [u];
    var w = -1;
    g = e(g, a(r));
    var E = o(h, function(y, x, S) {
      var C = e(g, function(_) {
        return _(y);
      });
      return { criteria: C, index: ++w, value: y };
    });
    return s(E, function(y, x) {
      return l(y, x, m);
    });
  }
  return Gm = d, Gm;
}
var Ym, lk;
function RH() {
  if (lk) return Ym;
  lk = 1;
  var e = Uy(), t = kH(), r = zu(), o = Fu(), s = r(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return Ym = s, Ym;
}
var Km, uk;
function NH() {
  if (uk) return Km;
  uk = 1;
  var e = HT(), t = 0;
  function r(o) {
    var s = ++t;
    return e(o) + s;
  }
  return Km = r, Km;
}
var Xm, ck;
function PH() {
  if (ck) return Xm;
  ck = 1;
  function e(t, r, o) {
    for (var s = -1, a = t.length, l = r.length, u = {}; ++s < a; ) {
      var f = s < l ? r[s] : void 0;
      o(u, t[s], f);
    }
    return u;
  }
  return Xm = e, Xm;
}
var Qm, fk;
function TH() {
  if (fk) return Qm;
  fk = 1;
  var e = Tu(), t = PH();
  function r(o, s) {
    return t(o || [], s || [], e);
  }
  return Qm = r, Qm;
}
var Zm, dk;
function Be() {
  if (dk) return Zm;
  dk = 1;
  var e;
  if (typeof Ay == "function")
    try {
      e = {
        cloneDeep: UV(),
        constant: $y(),
        defaults: GV(),
        each: DT(),
        filter: YT(),
        find: eH(),
        flatten: fA(),
        forEach: jT(),
        forIn: tH(),
        has: KT(),
        isUndefined: XT(),
        last: nH(),
        map: ZT(),
        mapValues: rH(),
        max: iH(),
        merge: fH(),
        min: dH(),
        minBy: hH(),
        now: pH(),
        pick: wH(),
        range: bH(),
        reduce: JT(),
        sortBy: RH(),
        uniqueId: NH(),
        values: oA(),
        zipObject: TH()
      };
    } catch {
    }
  return e || (e = window._), Zm = e, Zm;
}
var Jm, hk;
function AH() {
  if (hk) return Jm;
  hk = 1, Jm = e;
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
  return Jm;
}
var ev, pk;
function IH() {
  if (pk) return ev;
  pk = 1;
  var e = Be(), t = vn().Graph, r = AH();
  ev = s;
  var o = e.constant(1);
  function s(d, h) {
    if (d.nodeCount() <= 1)
      return [];
    var g = u(d, h || o), m = a(g.graph, g.buckets, g.zeroIdx);
    return e.flatten(e.map(m, function(w) {
      return d.outEdges(w.v, w.w);
    }), !0);
  }
  function a(d, h, g) {
    for (var m = [], w = h[h.length - 1], E = h[0], y; d.nodeCount(); ) {
      for (; y = E.dequeue(); )
        l(d, h, g, y);
      for (; y = w.dequeue(); )
        l(d, h, g, y);
      if (d.nodeCount()) {
        for (var x = h.length - 2; x > 0; --x)
          if (y = h[x].dequeue(), y) {
            m = m.concat(l(d, h, g, y, !0));
            break;
          }
      }
    }
    return m;
  }
  function l(d, h, g, m, w) {
    var E = w ? [] : void 0;
    return e.forEach(d.inEdges(m.v), function(y) {
      var x = d.edge(y), S = d.node(y.v);
      w && E.push({ v: y.v, w: y.w }), S.out -= x, f(h, g, S);
    }), e.forEach(d.outEdges(m.v), function(y) {
      var x = d.edge(y), S = y.w, C = d.node(S);
      C.in -= x, f(h, g, C);
    }), d.removeNode(m.v), E;
  }
  function u(d, h) {
    var g = new t(), m = 0, w = 0;
    e.forEach(d.nodes(), function(x) {
      g.setNode(x, { v: x, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(x) {
      var S = g.edge(x.v, x.w) || 0, C = h(x), _ = S + C;
      g.setEdge(x.v, x.w, _), w = Math.max(w, g.node(x.v).out += C), m = Math.max(m, g.node(x.w).in += C);
    });
    var E = e.range(w + m + 3).map(function() {
      return new r();
    }), y = m + 1;
    return e.forEach(g.nodes(), function(x) {
      f(E, y, g.node(x));
    }), { graph: g, buckets: E, zeroIdx: y };
  }
  function f(d, h, g) {
    g.out ? g.in ? d[g.out - g.in + h].enqueue(g) : d[d.length - 1].enqueue(g) : d[0].enqueue(g);
  }
  return ev;
}
var tv, gk;
function MH() {
  if (gk) return tv;
  gk = 1;
  var e = Be(), t = IH();
  tv = {
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
      e.has(f, h) || (f[h] = !0, u[h] = !0, e.forEach(a.outEdges(h), function(g) {
        e.has(u, g.w) ? l.push(g) : d(g.w);
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
  return tv;
}
var nv, mk;
function Pt() {
  if (mk) return nv;
  mk = 1;
  var e = Be(), t = vn().Graph;
  nv = {
    addDummyNode: r,
    simplify: o,
    asNonCompoundGraph: s,
    successorWeights: a,
    predecessorWeights: l,
    intersectRect: u,
    buildLayerMatrix: f,
    normalizeRanks: d,
    removeEmptyRanks: h,
    addBorderNode: g,
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
    var C = x.x, _ = x.y, k = S.x - C, N = S.y - _, T = x.width / 2, A = x.height / 2;
    if (!k && !N)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, D;
    return Math.abs(N) * T > Math.abs(k) * A ? (N < 0 && (A = -A), O = A * k / N, D = A) : (k < 0 && (T = -T), O = T, D = T * N / k), { x: C + O, y: _ + D };
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
    var S = e.min(e.map(x.nodes(), function(N) {
      return x.node(N).rank;
    })), C = [];
    e.forEach(x.nodes(), function(N) {
      var T = x.node(N).rank - S;
      C[T] || (C[T] = []), C[T].push(N);
    });
    var _ = 0, k = x.graph().nodeRankFactor;
    e.forEach(C, function(N, T) {
      e.isUndefined(N) && T % k !== 0 ? --_ : _ && e.forEach(N, function(A) {
        x.node(A).rank += _;
      });
    });
  }
  function g(x, S, C, _) {
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
  return nv;
}
var rv, vk;
function OH() {
  if (vk) return rv;
  vk = 1;
  var e = Be(), t = Pt();
  rv = {
    run: r,
    undo: s
  };
  function r(a) {
    a.graph().dummyChains = [], e.forEach(a.edges(), function(l) {
      o(a, l);
    });
  }
  function o(a, l) {
    var u = l.v, f = a.node(u).rank, d = l.w, h = a.node(d).rank, g = l.name, m = a.edge(l), w = m.labelRank;
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
        }, E = t.addDummyNode(a, "edge", y, "_d"), f === w && (y.width = m.width, y.height = m.height, y.dummy = "edge-label", y.labelpos = m.labelpos), a.setEdge(u, E, { weight: m.weight }, g), x === 0 && a.graph().dummyChains.push(E), u = E;
      a.setEdge(u, d, { weight: m.weight }, g);
    }
  }
  function s(a) {
    e.forEach(a.graph().dummyChains, function(l) {
      var u = a.node(l), f = u.edgeLabel, d;
      for (a.setEdge(u.edgeObj, f); u.dummy; )
        d = a.successors(l)[0], a.removeNode(l), f.points.push({ x: u.x, y: u.y }), u.dummy === "edge-label" && (f.x = u.x, f.y = u.y, f.width = u.width, f.height = u.height), l = d, u = a.node(l);
    });
  }
  return rv;
}
var ov, yk;
function tu() {
  if (yk) return ov;
  yk = 1;
  var e = Be();
  ov = {
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
  return ov;
}
var iv, wk;
function gA() {
  if (wk) return iv;
  wk = 1;
  var e = Be(), t = vn().Graph, r = tu().slack;
  iv = o;
  function o(u) {
    var f = new t({ directed: !1 }), d = u.nodes()[0], h = u.nodeCount();
    f.setNode(d, {});
    for (var g, m; s(f, u) < h; )
      g = a(f, u), m = f.hasNode(g.v) ? r(u, g) : -r(u, g), l(f, u, m);
    return f;
  }
  function s(u, f) {
    function d(h) {
      e.forEach(f.nodeEdges(h), function(g) {
        var m = g.v, w = h === m ? g.w : m;
        !u.hasNode(w) && !r(f, g) && (u.setNode(w, {}), u.setEdge(h, w, {}), d(w));
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
  return iv;
}
var sv, xk;
function LH() {
  if (xk) return sv;
  xk = 1;
  var e = Be(), t = gA(), r = tu().slack, o = tu().longestPath, s = vn().alg.preorder, a = vn().alg.postorder, l = Pt().simplify;
  sv = u, u.initLowLimValues = g, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = w, u.enterEdge = E, u.exchangeEdges = y;
  function u(_) {
    _ = l(_), o(_);
    var k = t(_);
    g(k), f(k, _);
    for (var N, T; N = w(k); )
      T = E(k, _, N), y(k, _, N, T);
  }
  function f(_, k) {
    var N = a(_, _.nodes());
    N = N.slice(0, N.length - 1), e.forEach(N, function(T) {
      d(_, k, T);
    });
  }
  function d(_, k, N) {
    var T = _.node(N), A = T.parent;
    _.edge(N, A).cutvalue = h(_, k, N);
  }
  function h(_, k, N) {
    var T = _.node(N), A = T.parent, O = !0, D = k.edge(N, A), G = 0;
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
  function g(_, k) {
    arguments.length < 2 && (k = _.nodes()[0]), m(_, {}, 1, k);
  }
  function m(_, k, N, T, A) {
    var O = N, D = _.node(T);
    return k[T] = !0, e.forEach(_.neighbors(T), function(G) {
      e.has(k, G) || (N = m(_, k, N, G, T));
    }), D.low = O, D.lim = N++, A ? D.parent = A : delete D.parent, N;
  }
  function w(_) {
    return e.find(_.edges(), function(k) {
      return _.edge(k).cutvalue < 0;
    });
  }
  function E(_, k, N) {
    var T = N.v, A = N.w;
    k.hasEdge(T, A) || (T = N.w, A = N.v);
    var O = _.node(T), D = _.node(A), G = O, B = !1;
    O.lim > D.lim && (G = D, B = !0);
    var V = e.filter(k.edges(), function(X) {
      return B === C(_, _.node(X.v), G) && B !== C(_, _.node(X.w), G);
    });
    return e.minBy(V, function(X) {
      return r(k, X);
    });
  }
  function y(_, k, N, T) {
    var A = N.v, O = N.w;
    _.removeEdge(A, O), _.setEdge(T.v, T.w, {}), g(_), f(_, k), x(_, k);
  }
  function x(_, k) {
    var N = e.find(_.nodes(), function(A) {
      return !k.node(A).parent;
    }), T = s(_, N);
    T = T.slice(1), e.forEach(T, function(A) {
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
  return sv;
}
var av, _k;
function jH() {
  if (_k) return av;
  _k = 1;
  var e = tu(), t = e.longestPath, r = gA(), o = LH();
  av = s;
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
  return av;
}
var lv, bk;
function DH() {
  if (bk) return lv;
  bk = 1;
  var e = Be();
  lv = t;
  function t(s) {
    var a = o(s);
    e.forEach(s.graph().dummyChains, function(l) {
      for (var u = s.node(l), f = u.edgeObj, d = r(s, a, f.v, f.w), h = d.path, g = d.lca, m = 0, w = h[m], E = !0; l !== f.w; ) {
        if (u = s.node(l), E) {
          for (; (w = h[m]) !== g && s.node(w).maxRank < u.rank; )
            m++;
          w === g && (E = !1);
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
    var f = [], d = [], h = Math.min(a[l].low, a[u].low), g = Math.max(a[l].lim, a[u].lim), m, w;
    m = l;
    do
      m = s.parent(m), f.push(m);
    while (m && (a[m].low > h || g > a[m].lim));
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
  return lv;
}
var uv, Sk;
function qH() {
  if (Sk) return uv;
  Sk = 1;
  var e = Be(), t = Pt();
  uv = {
    run: r,
    cleanup: l
  };
  function r(u) {
    var f = t.addDummyNode(u, "root", {}, "_root"), d = s(u), h = e.max(e.values(d)) - 1, g = 2 * h + 1;
    u.graph().nestingRoot = f, e.forEach(u.edges(), function(w) {
      u.edge(w).minlen *= g;
    });
    var m = a(u) + 1;
    e.forEach(u.children(), function(w) {
      o(u, f, g, m, h, d, w);
    }), u.graph().nodeRankFactor = g;
  }
  function o(u, f, d, h, g, m, w) {
    var E = u.children(w);
    if (!E.length) {
      w !== f && u.setEdge(f, w, { weight: 0, minlen: d });
      return;
    }
    var y = t.addBorderNode(u, "_bt"), x = t.addBorderNode(u, "_bb"), S = u.node(w);
    u.setParent(y, w), S.borderTop = y, u.setParent(x, w), S.borderBottom = x, e.forEach(E, function(C) {
      o(u, f, d, h, g, m, C);
      var _ = u.node(C), k = _.borderTop ? _.borderTop : C, N = _.borderBottom ? _.borderBottom : C, T = _.borderTop ? h : 2 * h, A = k !== N ? 1 : g - m[w] + 1;
      u.setEdge(y, k, {
        weight: T,
        minlen: A,
        nestingEdge: !0
      }), u.setEdge(N, x, {
        weight: T,
        minlen: A,
        nestingEdge: !0
      });
    }), u.parent(w) || u.setEdge(f, y, { weight: 0, minlen: g + m[w] });
  }
  function s(u) {
    var f = {};
    function d(h, g) {
      var m = u.children(h);
      m && m.length && e.forEach(m, function(w) {
        d(w, g + 1);
      }), f[h] = g;
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
  return uv;
}
var cv, Ek;
function zH() {
  if (Ek) return cv;
  Ek = 1;
  var e = Be(), t = Pt();
  cv = r;
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
    var h = { width: 0, height: 0, rank: d, borderType: a }, g = f[a][d - 1], m = t.addDummyNode(s, "border", h, l);
    f[a][d] = m, s.setParent(m, u), g && s.setEdge(g, m, { weight: 1 });
  }
  return cv;
}
var fv, Ck;
function FH() {
  if (Ck) return fv;
  Ck = 1;
  var e = Be();
  fv = {
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
      var g = d.edge(h);
      e.forEach(g.points, l), e.has(g, "y") && l(g);
    });
  }
  function l(d) {
    d.y = -d.y;
  }
  function u(d) {
    e.forEach(d.nodes(), function(h) {
      f(d.node(h));
    }), e.forEach(d.edges(), function(h) {
      var g = d.edge(h);
      e.forEach(g.points, f), e.has(g, "x") && f(g);
    });
  }
  function f(d) {
    var h = d.x;
    d.x = d.y, d.y = h;
  }
  return fv;
}
var dv, kk;
function $H() {
  if (kk) return dv;
  kk = 1;
  var e = Be();
  dv = t;
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
  return dv;
}
var hv, Rk;
function BH() {
  if (Rk) return hv;
  Rk = 1;
  var e = Be();
  hv = t;
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
    }), g = 0;
    return e.forEach(u.forEach(function(m) {
      var w = m.pos + f;
      h[w] += m.weight;
      for (var E = 0; w > 0; )
        w % 2 && (E += h[w + 1]), w = w - 1 >> 1, h[w] += m.weight;
      g += m.weight * E;
    })), g;
  }
  return hv;
}
var pv, Nk;
function VH() {
  if (Nk) return pv;
  Nk = 1;
  var e = Be();
  pv = t;
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
  return pv;
}
var gv, Pk;
function HH() {
  if (Pk) return gv;
  Pk = 1;
  var e = Be();
  gv = t;
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
  return gv;
}
var mv, Tk;
function WH() {
  if (Tk) return mv;
  Tk = 1;
  var e = Be(), t = Pt();
  mv = r;
  function r(a, l) {
    var u = t.partition(a, function(y) {
      return e.has(y, "barycenter");
    }), f = u.lhs, d = e.sortBy(u.rhs, function(y) {
      return -y.i;
    }), h = [], g = 0, m = 0, w = 0;
    f.sort(s(!!l)), w = o(h, d, w), e.forEach(f, function(y) {
      w += y.vs.length, h.push(y.vs), g += y.barycenter * y.weight, m += y.weight, w = o(h, d, w);
    });
    var E = { vs: e.flatten(h, !0) };
    return m && (E.barycenter = g / m, E.weight = m), E;
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
  return mv;
}
var vv, Ak;
function UH() {
  if (Ak) return vv;
  Ak = 1;
  var e = Be(), t = VH(), r = HH(), o = WH();
  vv = s;
  function s(u, f, d, h) {
    var g = u.children(f), m = u.node(f), w = m ? m.borderLeft : void 0, E = m ? m.borderRight : void 0, y = {};
    w && (g = e.filter(g, function(N) {
      return N !== w && N !== E;
    }));
    var x = t(u, g);
    e.forEach(x, function(N) {
      if (u.children(N.v).length) {
        var T = s(u, N.v, d, h);
        y[N.v] = T, e.has(T, "barycenter") && l(N, T);
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
  return vv;
}
var yv, Ik;
function GH() {
  if (Ik) return yv;
  Ik = 1;
  var e = Be(), t = vn().Graph;
  yv = r;
  function r(s, a, l) {
    var u = o(s), f = new t({ compound: !0 }).setGraph({ root: u }).setDefaultNodeLabel(function(d) {
      return s.node(d);
    });
    return e.forEach(s.nodes(), function(d) {
      var h = s.node(d), g = s.parent(d);
      (h.rank === a || h.minRank <= a && a <= h.maxRank) && (f.setNode(d), f.setParent(d, g || u), e.forEach(s[l](d), function(m) {
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
  return yv;
}
var wv, Mk;
function YH() {
  if (Mk) return wv;
  Mk = 1;
  var e = Be();
  wv = t;
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
  return wv;
}
var xv, Ok;
function KH() {
  if (Ok) return xv;
  Ok = 1;
  var e = Be(), t = $H(), r = BH(), o = UH(), s = GH(), a = YH(), l = vn().Graph, u = Pt();
  xv = f;
  function f(m) {
    var w = u.maxRank(m), E = d(m, e.range(1, w + 1), "inEdges"), y = d(m, e.range(w - 1, -1, -1), "outEdges"), x = t(m);
    g(m, x);
    for (var S = Number.POSITIVE_INFINITY, C, _ = 0, k = 0; k < 4; ++_, ++k) {
      h(_ % 2 ? E : y, _ % 4 >= 2), x = u.buildLayerMatrix(m);
      var N = r(m, x);
      N < S && (k = 0, C = e.cloneDeep(x), S = N);
    }
    g(m, C);
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
  function g(m, w) {
    e.forEach(w, function(E) {
      e.forEach(E, function(y, x) {
        m.node(y).order = x;
      });
    });
  }
  return xv;
}
var _v, Lk;
function XH() {
  if (Lk) return _v;
  Lk = 1;
  var e = Be(), t = vn().Graph, r = Pt();
  _v = {
    positionX: E,
    findType1Conflicts: o,
    findType2Conflicts: s,
    addConflict: l,
    hasConflict: u,
    verticalAlignment: f,
    horizontalCompaction: d,
    alignCoordinates: m,
    findSmallestWidthAlignment: g,
    balance: w
  };
  function o(S, C) {
    var _ = {};
    function k(N, T) {
      var A = 0, O = 0, D = N.length, G = e.last(T);
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
    function N(T, A) {
      var O = -1, D, G = 0;
      return e.forEach(A, function(B, V) {
        if (S.node(B).dummy === "border") {
          var X = S.predecessors(B);
          X.length && (D = S.node(X[0]).order, k(A, G, V, O, D), G = V, O = D);
        }
        k(A, G, A.length, D, T.length);
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
    var N = {}, T = {}, A = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(D, G) {
        N[D] = D, T[D] = D, A[D] = G;
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
            T[G] === G && D < A[H] && !u(_, G, H) && (T[H] = G, T[G] = N[G] = N[H], D = A[H]);
          }
        }
      });
    }), { root: N, align: T };
  }
  function d(S, C, _, k, N) {
    var T = {}, A = h(S, C, _, N), O = N ? "borderLeft" : "borderRight";
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
    var N = new t(), T = S.graph(), A = y(T.nodesep, T.edgesep, k);
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
  function g(S, C) {
    return e.minBy(e.values(C), function(_) {
      var k = Number.NEGATIVE_INFINITY, N = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(T, A) {
        var O = x(S, A) / 2;
        k = Math.max(T + O, k), N = Math.min(T - O, N);
      }), k - N;
    });
  }
  function m(S, C) {
    var _ = e.values(C), k = e.min(_), N = e.max(_);
    e.forEach(["u", "d"], function(T) {
      e.forEach(["l", "r"], function(A) {
        var O = T + A, D = S[O], G;
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
    var T = g(S, k);
    return m(k, T), w(k, S.graph().align);
  }
  function y(S, C, _) {
    return function(k, N, T) {
      var A = k.node(N), O = k.node(T), D = 0, G;
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
  return _v;
}
var bv, jk;
function QH() {
  if (jk) return bv;
  jk = 1;
  var e = Be(), t = Pt(), r = XH().positionX;
  bv = o;
  function o(a) {
    a = t.asNonCompoundGraph(a), s(a), e.forEach(r(a), function(l, u) {
      a.node(u).x = l;
    });
  }
  function s(a) {
    var l = t.buildLayerMatrix(a), u = a.graph().ranksep, f = 0;
    e.forEach(l, function(d) {
      var h = e.max(e.map(d, function(g) {
        return a.node(g).height;
      }));
      e.forEach(d, function(g) {
        a.node(g).y = f + h / 2;
      }), f += h + u;
    });
  }
  return bv;
}
var Sv, Dk;
function ZH() {
  if (Dk) return Sv;
  Dk = 1;
  var e = Be(), t = MH(), r = OH(), o = jH(), s = Pt().normalizeRanks, a = DH(), l = Pt().removeEmptyRanks, u = qH(), f = zH(), d = FH(), h = KH(), g = QH(), m = Pt(), w = vn().Graph;
  Sv = E;
  function E(F, Z) {
    var ee = Z && Z.debugTiming ? m.time : m.notime;
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
      q(F);
    }), Z("    acyclic", function() {
      t.run(F);
    }), Z("    nestingGraph.run", function() {
      u.run(F);
    }), Z("    rank", function() {
      o(m.asNonCompoundGraph(F));
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
      g(F);
    }), Z("    positionSelfEdges", function() {
      j(F);
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
  var S = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, _ = ["acyclicer", "ranker", "rankdir", "align"], k = ["width", "height"], N = { width: 0, height: 0 }, T = ["minlen", "weight", "width", "height", "labeloffset"], A = {
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
        m.addDummyNode(F, "edge-proxy", se, "_ep");
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
      var be = pe.x, ve = pe.y, Ne = pe.width, Ee = pe.height;
      Z = Math.min(Z, be - Ne / 2), ee = Math.max(ee, be + Ne / 2), K = Math.min(K, ve - Ee / 2), te = Math.max(te, ve + Ee / 2);
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
      e.forEach(be.points, function(ve) {
        ve.x -= Z, ve.y -= K;
      }), e.has(be, "x") && (be.x -= Z), e.has(be, "y") && (be.y -= K);
    }), se.width = ee - Z + ae, se.height = te - K + ce;
  }
  function H(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z), K = F.node(Z.v), te = F.node(Z.w), se, ae;
      ee.points ? (se = ee.points[0], ae = ee.points[ee.points.length - 1]) : (ee.points = [], se = te, ae = K), ee.points.unshift(m.intersectRect(K, se)), ee.points.push(m.intersectRect(te, ae));
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
  function q(F) {
    e.forEach(F.edges(), function(Z) {
      if (Z.v === Z.w) {
        var ee = F.node(Z.v);
        ee.selfEdges || (ee.selfEdges = []), ee.selfEdges.push({ e: Z, label: F.edge(Z) }), F.removeEdge(Z);
      }
    });
  }
  function Q(F) {
    var Z = m.buildLayerMatrix(F);
    e.forEach(Z, function(ee) {
      var K = 0;
      e.forEach(ee, function(te, se) {
        var ae = F.node(te);
        ae.order = se + K, e.forEach(ae.selfEdges, function(ce) {
          m.addDummyNode(F, "selfedge", {
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
  function j(F) {
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
  return Sv;
}
var Ev, qk;
function JH() {
  if (qk) return Ev;
  qk = 1;
  var e = Be(), t = Pt(), r = vn().Graph;
  Ev = {
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
      l.setNode(d, { rank: "same" }), e.reduce(u, function(h, g) {
        return l.setEdge(h, g, { style: "invis" }), g;
      });
    }), l;
  }
  return Ev;
}
var Cv, zk;
function e8() {
  return zk || (zk = 1, Cv = "0.8.5"), Cv;
}
var kv, Fk;
function t8() {
  return Fk || (Fk = 1, kv = {
    graphlib: vn(),
    layout: ZH(),
    debug: JH(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: e8()
  }), kv;
}
t8();
R.createContext(null);
const mA = R.createContext(null), n8 = () => {
  const e = R.useContext(mA);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
};
class Ky {
  constructor(t) {
    yx(this, "schema");
    if (this.schema = t, !t.grid && !t.gridLayout)
      throw new Error("Either 'grid' (new system) or 'gridLayout' (old system) is required in schema.");
  }
  /**
   * Build header configuration and pre-render header element
   */
  buildHeaderConfig() {
    const { header: t, label: r, icon: o } = this.schema, s = (t == null ? void 0 : t.show) !== !1, a = (t == null ? void 0 : t.icon) || o;
    return {
      show: s,
      element: s ? /* @__PURE__ */ I.jsx(
        qB,
        {
          className: et(
            "p-2.5 space-y-0 px-2.5",
            (t == null ? void 0 : t.className) || "bg-primary text-primary-foreground"
          ),
          style: {
            backgroundColor: t == null ? void 0 : t.bgColor,
            color: t == null ? void 0 : t.textColor
          },
          children: /* @__PURE__ */ I.jsxs(zB, { className: "text-sm font-semibold flex items-center gap-2", children: [
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
        FB,
        {
          className: et(
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
      className: et(
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
    const { schema: t } = this, r = this.buildHeaderConfig(), o = this.buildFooterConfig(), s = this.buildStyleConfig(), a = ({ id: l, data: u, selected: f }) => {
      const d = u, h = n8(), g = R.useCallback((x, S) => {
        h((C) => ({
          ...C,
          [l]: { ...C[l], [x]: S }
        }));
      }, [l, h]), m = !!d.grid || !!t.grid, w = d.grid || t.grid, E = d.gridLayout || t.gridLayout, y = R.useMemo(() => ({
        nodeId: l,
        nodeData: d,
        onValueChange: g
      }), [l, d, g]);
      return /* @__PURE__ */ I.jsxs(
        DB,
        {
          className: et(
            s.className,
            f && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: s.style,
          children: [
            r.element,
            /* @__PURE__ */ I.jsx(HN.Provider, { value: y, children: m && w ? (
              // New three-layer grid system
              /* @__PURE__ */ I.jsx(
                OB,
                {
                  grid: w,
                  nodeId: l,
                  onValueChange: g
                }
              )
            ) : E ? (
              // Old grid system
              /* @__PURE__ */ I.jsx(vz, { layout: E.layout })
            ) : /* @__PURE__ */ I.jsx("div", { className: "p-4 text-red-500 text-sm", children: "Error: No grid configuration found" }) }),
            o.element
          ]
        }
      );
    };
    return R.memo(
      a,
      (l, u) => l.id === u.id && l.selected === u.selected && l.data.values === u.data.values
    );
  }
  /**
   * Static helper to build a component from schema in one call
   */
  static buildComponent(t) {
    return new Ky(t).buildComponent();
  }
}
console.warn(
  "JsonSchemaNodeWidget: This widget is deprecated and maintained for backward compatibility only. Please migrate to using grid-based node definitions with pynodewidget.grid_layouts helpers. See documentation for migration guide."
);
function r8() {
  const [e] = zf("id"), [t] = zf("data"), [r] = zf("selected"), o = e ?? "json-schema-node", s = t ?? {}, a = r ?? !1, l = R.useMemo(() => {
    try {
      return Ky.buildComponent(s);
    } catch (f) {
      return console.error("Failed to build node component:", f), () => /* @__PURE__ */ I.jsxs("div", { style: { padding: "10px", border: "1px solid red", borderRadius: "4px" }, children: [
        /* @__PURE__ */ I.jsx("strong", { children: "Error building node:" }),
        /* @__PURE__ */ I.jsx("pre", { children: String(f) })
      ] });
    }
  }, [s]), [, u] = R.useState({});
  return /* @__PURE__ */ I.jsx(EN, { children: /* @__PURE__ */ I.jsx(mA.Provider, { value: u, children: /* @__PURE__ */ I.jsx("div", { style: { padding: "10px" }, children: /* @__PURE__ */ I.jsx(
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
const o8 = u2(r8), s8 = { render: o8 };
export {
  s8 as default
};
//# sourceMappingURL=json_schema_node_entry.js.map
