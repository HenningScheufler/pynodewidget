var i2 = Object.defineProperty;
var s2 = (e, t, n) => t in e ? i2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lf = (e, t, n) => s2(e, typeof t != "symbol" ? t + "" : t, n);
function a2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
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
var lu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ty(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qf = { exports: {} }, ls = {}, Df = { exports: {} }, Ae = {};
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
function u2() {
  if (Sx) return Ae;
  Sx = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.iterator;
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
  var k = Array.isArray, N = Object.prototype.hasOwnProperty, T = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  var Y = { current: null }, I = { transition: null }, j = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: I, ReactCurrentOwner: T };
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
  } }, Ae.Component = x, Ae.Fragment = n, Ae.Profiler = s, Ae.PureComponent = C, Ae.StrictMode = o, Ae.Suspense = f, Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, Ae.act = Q, Ae.cloneElement = function(q, W, ie) {
    if (q == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + q + ".");
    var F = E({}, q.props), Z = q.key, ee = q.ref, K = q._owner;
    if (W != null) {
      if (W.ref !== void 0 && (ee = W.ref, K = T.current), W.key !== void 0 && (Z = "" + W.key), q.type && q.type.defaultProps) var te = q.type.defaultProps;
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
    return q = { $$typeof: u, _currentValue: q, _currentValue2: q, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, q.Provider = { $$typeof: a, _context: q }, q.Consumer = q;
  }, Ae.createElement = O, Ae.createFactory = function(q) {
    var W = O.bind(null, q);
    return W.type = q, W;
  }, Ae.createRef = function() {
    return { current: null };
  }, Ae.forwardRef = function(q) {
    return { $$typeof: l, render: q };
  }, Ae.isValidElement = G, Ae.lazy = function(q) {
    return { $$typeof: h, _payload: { _status: -1, _result: q }, _init: $ };
  }, Ae.memo = function(q, W) {
    return { $$typeof: d, type: q, compare: W === void 0 ? null : W };
  }, Ae.startTransition = function(q) {
    var W = I.transition;
    I.transition = {};
    try {
      q();
    } finally {
      I.transition = W;
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
var Ex;
function Os() {
  return Ex || (Ex = 1, Df.exports = u2()), Df.exports;
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
function l2() {
  if (Cx) return ls;
  Cx = 1;
  var e = Os(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, f, d) {
    var h, m = {}, g = null, w = null;
    d !== void 0 && (g = "" + d), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (m[h] = f[h]);
    if (l && l.defaultProps) for (h in f = l.defaultProps, f) m[h] === void 0 && (m[h] = f[h]);
    return { $$typeof: t, type: l, key: g, ref: w, props: m, _owner: s.current };
  }
  return ls.Fragment = n, ls.jsx = u, ls.jsxs = u, ls;
}
var kx;
function c2() {
  return kx || (kx = 1, qf.exports = l2()), qf.exports;
}
var M = c2(), R = Os();
const cn = /* @__PURE__ */ ty(R), ny = /* @__PURE__ */ a2({
  __proto__: null,
  default: cn
}, [R]);
var cu = {}, jf = { exports: {} }, Rt = {}, zf = { exports: {} }, Ff = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rx;
function f2() {
  return Rx || (Rx = 1, (function(e) {
    function t(I, j) {
      var Q = I.length;
      I.push(j);
      e: for (; 0 < Q; ) {
        var q = Q - 1 >>> 1, W = I[q];
        if (0 < s(W, j)) I[q] = j, I[Q] = W, Q = q;
        else break e;
      }
    }
    function n(I) {
      return I.length === 0 ? null : I[0];
    }
    function o(I) {
      if (I.length === 0) return null;
      var j = I[0], Q = I.pop();
      if (Q !== j) {
        I[0] = Q;
        e: for (var q = 0, W = I.length, ie = W >>> 1; q < ie; ) {
          var F = 2 * (q + 1) - 1, Z = I[F], ee = F + 1, K = I[ee];
          if (0 > s(Z, Q)) ee < W && 0 > s(K, Z) ? (I[q] = K, I[ee] = Q, q = ee) : (I[q] = Z, I[F] = Q, q = F);
          else if (ee < W && 0 > s(K, Q)) I[q] = K, I[ee] = Q, q = ee;
          else break e;
        }
      }
      return j;
    }
    function s(I, j) {
      var Q = I.sortIndex - j.sortIndex;
      return Q !== 0 ? Q : I.id - j.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var a = performance;
      e.unstable_now = function() {
        return a.now();
      };
    } else {
      var u = Date, l = u.now();
      e.unstable_now = function() {
        return u.now() - l;
      };
    }
    var f = [], d = [], h = 1, m = null, g = 3, w = !1, E = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(I) {
      for (var j = n(d); j !== null; ) {
        if (j.callback === null) o(d);
        else if (j.startTime <= I) o(d), j.sortIndex = j.expirationTime, t(f, j);
        else break;
        j = n(d);
      }
    }
    function k(I) {
      if (y = !1, _(I), !E) if (n(f) !== null) E = !0, $(N);
      else {
        var j = n(d);
        j !== null && Y(k, j.startTime - I);
      }
    }
    function N(I, j) {
      E = !1, y && (y = !1, S(O), O = -1), w = !0;
      var Q = g;
      try {
        for (_(j), m = n(f); m !== null && (!(m.expirationTime > j) || I && !B()); ) {
          var q = m.callback;
          if (typeof q == "function") {
            m.callback = null, g = m.priorityLevel;
            var W = q(m.expirationTime <= j);
            j = e.unstable_now(), typeof W == "function" ? m.callback = W : m === n(f) && o(f), _(j);
          } else o(f);
          m = n(f);
        }
        if (m !== null) var ie = !0;
        else {
          var F = n(d);
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
        var I = e.unstable_now();
        G = I;
        var j = !0;
        try {
          j = A(!0, I);
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
    function $(I) {
      A = I, T || (T = !0, X());
    }
    function Y(I, j) {
      O = x(function() {
        I(e.unstable_now());
      }, j);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, e.unstable_continueExecution = function() {
      E || w || (E = !0, $(N));
    }, e.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < I ? Math.floor(1e3 / I) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(f);
    }, e.unstable_next = function(I) {
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
        return I();
      } finally {
        g = Q;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(I, j) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var Q = g;
      g = I;
      try {
        return j();
      } finally {
        g = Q;
      }
    }, e.unstable_scheduleCallback = function(I, j, Q) {
      var q = e.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? q + Q : q) : Q = q, I) {
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
      return W = Q + W, I = { id: h++, callback: j, priorityLevel: I, startTime: Q, expirationTime: W, sortIndex: -1 }, Q > q ? (I.sortIndex = Q, t(d, I), n(f) === null && I === n(d) && (y ? (S(O), O = -1) : y = !0, Y(k, Q - q))) : (I.sortIndex = W, t(f, I), E || w || (E = !0, $(N))), I;
    }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(I) {
      var j = g;
      return function() {
        var Q = g;
        g = j;
        try {
          return I.apply(this, arguments);
        } finally {
          g = Q;
        }
      };
    };
  })(Ff)), Ff;
}
var Nx;
function d2() {
  return Nx || (Nx = 1, zf.exports = f2()), zf.exports;
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
function h2() {
  if (Px) return Rt;
  Px = 1;
  var e = Os(), t = d2();
  function n(r) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, c = 1; c < arguments.length; c++) i += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + r + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), s = {};
  function a(r, i) {
    u(r, i), u(r + "Capture", i);
  }
  function u(r, i) {
    for (s[r] = i, r = 0; r < i.length; r++) o.add(i[r]);
  }
  var l = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, h = {}, m = {};
  function g(r) {
    return f.call(m, r) ? !0 : f.call(h, r) ? !1 : d.test(r) ? m[r] = !0 : (h[r] = !0, !1);
  }
  function w(r, i, c, p) {
    if (c !== null && c.type === 0) return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return p ? !1 : c !== null ? !c.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return !1;
    }
  }
  function E(r, i, c, p) {
    if (i === null || typeof i > "u" || w(r, i, c, p)) return !0;
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
  function y(r, i, c, p, v, b, P) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = p, this.attributeNamespace = v, this.mustUseProperty = c, this.propertyName = r, this.type = i, this.sanitizeURL = b, this.removeEmptyString = P;
  }
  var x = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    x[r] = new y(r, 0, !1, r, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var i = r[0];
    x[i] = new y(i, 1, !1, r[1], null, !1, !1);
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
  var S = /[\-:]([a-z])/g;
  function C(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var i = r.replace(
      S,
      C
    );
    x[i] = new y(i, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var i = r.replace(S, C);
    x[i] = new y(i, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var i = r.replace(S, C);
    x[i] = new y(i, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    x[r] = new y(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), x.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    x[r] = new y(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  function _(r, i, c, p) {
    var v = x.hasOwnProperty(i) ? x[i] : null;
    (v !== null ? v.type !== 0 : p || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (E(i, c, v, p) && (c = null), p || v === null ? g(i) && (c === null ? r.removeAttribute(i) : r.setAttribute(i, "" + c)) : v.mustUseProperty ? r[v.propertyName] = c === null ? v.type === 3 ? !1 : "" : c : (i = v.attributeName, p = v.attributeNamespace, c === null ? r.removeAttribute(i) : (v = v.type, c = v === 3 || v === 4 && c === !0 ? "" : "" + c, p ? r.setAttributeNS(p, i, c) : r.setAttribute(i, c))));
  }
  var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, N = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), B = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function j(r) {
    return r === null || typeof r != "object" ? null : (r = I && r[I] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Q = Object.assign, q;
  function W(r) {
    if (q === void 0) try {
      throw Error();
    } catch (c) {
      var i = c.stack.trim().match(/\n( *(at )?)/);
      q = i && i[1] || "";
    }
    return `
` + q + r;
  }
  var ie = !1;
  function F(r, i) {
    if (!r || ie) return "";
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
        Reflect.construct(r, [], i);
      } else {
        try {
          i.call();
        } catch (oe) {
          p = oe;
        }
        r.call(i.prototype);
      }
      else {
        try {
          throw Error();
        } catch (oe) {
          p = oe;
        }
        r();
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
                return r.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", r.displayName)), U;
              }
            while (1 <= P && 0 <= z);
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
        return r = F(r.type, !1), r;
      case 11:
        return r = F(r.type.render, !1), r;
      case 1:
        return r = F(r.type, !0), r;
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
      case B:
        return (r.displayName || "Context") + ".Consumer";
      case G:
        return (r._context.displayName || "Context") + ".Provider";
      case V:
        var i = r.render;
        return r = r.displayName, r || (r = i.displayName || i.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case H:
        return i = r.displayName || null, i !== null ? i : ee(r.type) || "Memo";
      case $:
        i = r._payload, r = r._init;
        try {
          return ee(r(i));
        } catch {
        }
    }
    return null;
  }
  function K(r) {
    var i = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (i.displayName || "Context") + ".Consumer";
      case 10:
        return (i._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return r = i.render, r = r.displayName || r.name || "", i.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
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
    var i = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function ae(r) {
    var i = se(r) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(r.constructor.prototype, i), p = "" + r[i];
    if (!r.hasOwnProperty(i) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var v = c.get, b = c.set;
      return Object.defineProperty(r, i, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(P) {
        p = "" + P, b.call(this, P);
      } }), Object.defineProperty(r, i, { enumerable: c.enumerable }), { getValue: function() {
        return p;
      }, setValue: function(P) {
        p = "" + P;
      }, stopTracking: function() {
        r._valueTracker = null, delete r[i];
      } };
    }
  }
  function ce(r) {
    r._valueTracker || (r._valueTracker = ae(r));
  }
  function de(r) {
    if (!r) return !1;
    var i = r._valueTracker;
    if (!i) return !0;
    var c = i.getValue(), p = "";
    return r && (p = se(r) ? r.checked ? "true" : "false" : r.value), r = p, r !== c ? (i.setValue(r), !0) : !1;
  }
  function pe(r) {
    if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function _e(r, i) {
    var c = i.checked;
    return Q({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c ?? r._wrapperState.initialChecked });
  }
  function ge(r, i) {
    var c = i.defaultValue == null ? "" : i.defaultValue, p = i.checked != null ? i.checked : i.defaultChecked;
    c = te(i.value != null ? i.value : c), r._wrapperState = { initialChecked: p, initialValue: c, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function Ne(r, i) {
    i = i.checked, i != null && _(r, "checked", i, !1);
  }
  function Ee(r, i) {
    Ne(r, i);
    var c = te(i.value), p = i.type;
    if (c != null) p === "number" ? (c === 0 && r.value === "" || r.value != c) && (r.value = "" + c) : r.value !== "" + c && (r.value = "" + c);
    else if (p === "submit" || p === "reset") {
      r.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? He(r, i.type, c) : i.hasOwnProperty("defaultValue") && He(r, i.type, te(i.defaultValue)), i.checked == null && i.defaultChecked != null && (r.defaultChecked = !!i.defaultChecked);
  }
  function Ze(r, i, c) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var p = i.type;
      if (!(p !== "submit" && p !== "reset" || i.value !== void 0 && i.value !== null)) return;
      i = "" + r._wrapperState.initialValue, c || i === r.value || (r.value = i), r.defaultValue = i;
    }
    c = r.name, c !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, c !== "" && (r.name = c);
  }
  function He(r, i, c) {
    (i !== "number" || pe(r.ownerDocument) !== r) && (c == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + c && (r.defaultValue = "" + c));
  }
  var Ft = Array.isArray;
  function ht(r, i, c, p) {
    if (r = r.options, i) {
      i = {};
      for (var v = 0; v < c.length; v++) i["$" + c[v]] = !0;
      for (c = 0; c < r.length; c++) v = i.hasOwnProperty("$" + r[c].value), r[c].selected !== v && (r[c].selected = v), v && p && (r[c].defaultSelected = !0);
    } else {
      for (c = "" + te(c), i = null, v = 0; v < r.length; v++) {
        if (r[v].value === c) {
          r[v].selected = !0, p && (r[v].defaultSelected = !0);
          return;
        }
        i !== null || r[v].disabled || (i = r[v]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function at(r, i) {
    if (i.dangerouslySetInnerHTML != null) throw Error(n(91));
    return Q({}, i, { value: void 0, defaultValue: void 0, children: "" + r._wrapperState.initialValue });
  }
  function We(r, i) {
    var c = i.value;
    if (c == null) {
      if (c = i.children, i = i.defaultValue, c != null) {
        if (i != null) throw Error(n(92));
        if (Ft(c)) {
          if (1 < c.length) throw Error(n(93));
          c = c[0];
        }
        i = c;
      }
      i == null && (i = ""), c = i;
    }
    r._wrapperState = { initialValue: te(c) };
  }
  function en(r, i) {
    var c = te(i.value), p = te(i.defaultValue);
    c != null && (c = "" + c, c !== r.value && (r.value = c), i.defaultValue == null && r.defaultValue !== c && (r.defaultValue = c)), p != null && (r.defaultValue = "" + p);
  }
  function $t(r) {
    var i = r.textContent;
    i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i);
  }
  function tn(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Bt(r, i) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? tn(i) : r === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var _t, Or = (function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(i, c, p, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(i, c, p, v);
      });
    } : r;
  })(function(r, i) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = i;
    else {
      for (_t = _t || document.createElement("div"), _t.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>", i = _t.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; i.firstChild; ) r.appendChild(i.firstChild);
    }
  });
  function Vt(r, i) {
    if (i) {
      var c = r.firstChild;
      if (c && c === r.lastChild && c.nodeType === 3) {
        c.nodeValue = i;
        return;
      }
    }
    r.textContent = i;
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
  }, mo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qn).forEach(function(r) {
    mo.forEach(function(i) {
      i = i + r.charAt(0).toUpperCase() + r.substring(1), qn[i] = qn[r];
    });
  });
  function Tt(r, i, c) {
    return i == null || typeof i == "boolean" || i === "" ? "" : c || typeof i != "number" || i === 0 || qn.hasOwnProperty(r) && qn[r] ? ("" + i).trim() : i + "px";
  }
  function Ht(r, i) {
    r = r.style;
    for (var c in i) if (i.hasOwnProperty(c)) {
      var p = c.indexOf("--") === 0, v = Tt(c, i[c], p);
      c === "float" && (c = "cssFloat"), p ? r.setProperty(c, v) : r[c] = v;
    }
  }
  var Bl = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xi(r, i) {
    if (i) {
      if (Bl[r] && (i.children != null || i.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null) throw Error(n(60));
        if (typeof i.dangerouslySetInnerHTML != "object" || !("__html" in i.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (i.style != null && typeof i.style != "object") throw Error(n(62));
    }
  }
  function _i(r, i) {
    if (r.indexOf("-") === -1) return typeof i.is == "string";
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
  var bi = null;
  function Si(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var Ei = null, er = null, tr = null;
  function Ks(r) {
    if (r = Yi(r)) {
      if (typeof Ei != "function") throw Error(n(280));
      var i = r.stateNode;
      i && (i = Ea(i), Ei(r.stateNode, r.type, i));
    }
  }
  function Xs(r) {
    er ? tr ? tr.push(r) : tr = [r] : er = r;
  }
  function Qs() {
    if (er) {
      var r = er, i = tr;
      if (tr = er = null, Ks(r), i) for (r = 0; r < i.length; r++) Ks(i[r]);
    }
  }
  function Zs(r, i) {
    return r(i);
  }
  function Js() {
  }
  var Ci = !1;
  function ea(r, i, c) {
    if (Ci) return r(i, c);
    Ci = !0;
    try {
      return Zs(r, i, c);
    } finally {
      Ci = !1, (er !== null || tr !== null) && (Js(), Qs());
    }
  }
  function Lr(r, i) {
    var c = r.stateNode;
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
        (p = !p.disabled) || (r = r.type, p = !(r === "button" || r === "input" || r === "select" || r === "textarea")), r = !p;
        break e;
      default:
        r = !1;
    }
    if (r) return null;
    if (c && typeof c != "function") throw Error(n(231, i, typeof c));
    return c;
  }
  var ki = !1;
  if (l) try {
    var qr = {};
    Object.defineProperty(qr, "passive", { get: function() {
      ki = !0;
    } }), window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    ki = !1;
  }
  function Vl(r, i, c, p, v, b, P, z, U) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(c, oe);
    } catch (le) {
      this.onError(le);
    }
  }
  var Dr = !1, go = null, vo = !1, Ri = null, Hl = { onError: function(r) {
    Dr = !0, go = r;
  } };
  function Wl(r, i, c, p, v, b, P, z, U) {
    Dr = !1, go = null, Vl.apply(Hl, arguments);
  }
  function Ul(r, i, c, p, v, b, P, z, U) {
    if (Wl.apply(this, arguments), Dr) {
      if (Dr) {
        var oe = go;
        Dr = !1, go = null;
      } else throw Error(n(198));
      vo || (vo = !0, Ri = oe);
    }
  }
  function xn(r) {
    var i = r, c = r;
    if (r.alternate) for (; i.return; ) i = i.return;
    else {
      r = i;
      do
        i = r, (i.flags & 4098) !== 0 && (c = i.return), r = i.return;
      while (r);
    }
    return i.tag === 3 ? c : null;
  }
  function Ni(r) {
    if (r.tag === 13) {
      var i = r.memoizedState;
      if (i === null && (r = r.alternate, r !== null && (i = r.memoizedState)), i !== null) return i.dehydrated;
    }
    return null;
  }
  function Pi(r) {
    if (xn(r) !== r) throw Error(n(188));
  }
  function Gl(r) {
    var i = r.alternate;
    if (!i) {
      if (i = xn(r), i === null) throw Error(n(188));
      return i !== r ? null : r;
    }
    for (var c = r, p = i; ; ) {
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
          if (b === c) return Pi(v), r;
          if (b === p) return Pi(v), i;
          b = b.sibling;
        }
        throw Error(n(188));
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
          if (!P) throw Error(n(189));
        }
      }
      if (c.alternate !== p) throw Error(n(190));
    }
    if (c.tag !== 3) throw Error(n(188));
    return c.stateNode.current === c ? r : i;
  }
  function ta(r) {
    return r = Gl(r), r !== null ? na(r) : null;
  }
  function na(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var i = na(r);
      if (i !== null) return i;
      r = r.sibling;
    }
    return null;
  }
  var ra = t.unstable_scheduleCallback, oa = t.unstable_cancelCallback, Yl = t.unstable_shouldYield, ia = t.unstable_requestPaint, Ue = t.unstable_now, Kl = t.unstable_getCurrentPriorityLevel, Ti = t.unstable_ImmediatePriority, sa = t.unstable_UserBlockingPriority, yo = t.unstable_NormalPriority, Xl = t.unstable_LowPriority, aa = t.unstable_IdlePriority, jr = null, Wt = null;
  function Ql(r) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(jr, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : ec, Zl = Math.log, Jl = Math.LN2;
  function ec(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (Zl(r) / Jl | 0) | 0;
  }
  var wo = 64, xo = 4194304;
  function _n(r) {
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
  function _o(r, i) {
    var c = r.pendingLanes;
    if (c === 0) return 0;
    var p = 0, v = r.suspendedLanes, b = r.pingedLanes, P = c & 268435455;
    if (P !== 0) {
      var z = P & ~v;
      z !== 0 ? p = _n(z) : (b &= P, b !== 0 && (p = _n(b)));
    } else P = c & ~v, P !== 0 ? p = _n(P) : b !== 0 && (p = _n(b));
    if (p === 0) return 0;
    if (i !== 0 && i !== p && (i & v) === 0 && (v = p & -p, b = i & -i, v >= b || v === 16 && (b & 4194240) !== 0)) return i;
    if ((p & 4) !== 0 && (p |= c & 16), i = r.entangledLanes, i !== 0) for (r = r.entanglements, i &= p; 0 < i; ) c = 31 - At(i), v = 1 << c, p |= r[c], i &= ~v;
    return p;
  }
  function tc(r, i) {
    switch (r) {
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
  function nc(r, i) {
    for (var c = r.suspendedLanes, p = r.pingedLanes, v = r.expirationTimes, b = r.pendingLanes; 0 < b; ) {
      var P = 31 - At(b), z = 1 << P, U = v[P];
      U === -1 ? ((z & c) === 0 || (z & p) !== 0) && (v[P] = tc(z, i)) : U <= i && (r.expiredLanes |= z), b &= ~z;
    }
  }
  function zr(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function ua() {
    var r = wo;
    return wo <<= 1, (wo & 4194240) === 0 && (wo = 64), r;
  }
  function Ai(r) {
    for (var i = [], c = 0; 31 > c; c++) i.push(r);
    return i;
  }
  function nr(r, i, c) {
    r.pendingLanes |= i, i !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, i = 31 - At(i), r[i] = c;
  }
  function kA(r, i) {
    var c = r.pendingLanes & ~i;
    r.pendingLanes = i, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= i, r.mutableReadLanes &= i, r.entangledLanes &= i, i = r.entanglements;
    var p = r.eventTimes;
    for (r = r.expirationTimes; 0 < c; ) {
      var v = 31 - At(c), b = 1 << v;
      i[v] = 0, p[v] = -1, r[v] = -1, c &= ~b;
    }
  }
  function rc(r, i) {
    var c = r.entangledLanes |= i;
    for (r = r.entanglements; c; ) {
      var p = 31 - At(c), v = 1 << p;
      v & i | r[p] & i && (r[p] |= i), c &= ~v;
    }
  }
  var Le = 0;
  function t0(r) {
    return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var n0, oc, r0, o0, i0, ic = !1, la = [], rr = null, or = null, ir = null, Ii = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), sr = [], RA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function s0(r, i) {
    switch (r) {
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
  function Oi(r, i, c, p, v, b) {
    return r === null || r.nativeEvent !== b ? (r = { blockedOn: i, domEventName: c, eventSystemFlags: p, nativeEvent: b, targetContainers: [v] }, i !== null && (i = Yi(i), i !== null && oc(i)), r) : (r.eventSystemFlags |= p, i = r.targetContainers, v !== null && i.indexOf(v) === -1 && i.push(v), r);
  }
  function NA(r, i, c, p, v) {
    switch (i) {
      case "focusin":
        return rr = Oi(rr, r, i, c, p, v), !0;
      case "dragenter":
        return or = Oi(or, r, i, c, p, v), !0;
      case "mouseover":
        return ir = Oi(ir, r, i, c, p, v), !0;
      case "pointerover":
        var b = v.pointerId;
        return Ii.set(b, Oi(Ii.get(b) || null, r, i, c, p, v)), !0;
      case "gotpointercapture":
        return b = v.pointerId, Mi.set(b, Oi(Mi.get(b) || null, r, i, c, p, v)), !0;
    }
    return !1;
  }
  function a0(r) {
    var i = Fr(r.target);
    if (i !== null) {
      var c = xn(i);
      if (c !== null) {
        if (i = c.tag, i === 13) {
          if (i = Ni(c), i !== null) {
            r.blockedOn = i, i0(r.priority, function() {
              r0(c);
            });
            return;
          }
        } else if (i === 3 && c.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function ca(r) {
    if (r.blockedOn !== null) return !1;
    for (var i = r.targetContainers; 0 < i.length; ) {
      var c = ac(r.domEventName, r.eventSystemFlags, i[0], r.nativeEvent);
      if (c === null) {
        c = r.nativeEvent;
        var p = new c.constructor(c.type, c);
        bi = p, c.target.dispatchEvent(p), bi = null;
      } else return i = Yi(c), i !== null && oc(i), r.blockedOn = c, !1;
      i.shift();
    }
    return !0;
  }
  function u0(r, i, c) {
    ca(r) && c.delete(i);
  }
  function PA() {
    ic = !1, rr !== null && ca(rr) && (rr = null), or !== null && ca(or) && (or = null), ir !== null && ca(ir) && (ir = null), Ii.forEach(u0), Mi.forEach(u0);
  }
  function Li(r, i) {
    r.blockedOn === i && (r.blockedOn = null, ic || (ic = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, PA)));
  }
  function qi(r) {
    function i(v) {
      return Li(v, r);
    }
    if (0 < la.length) {
      Li(la[0], r);
      for (var c = 1; c < la.length; c++) {
        var p = la[c];
        p.blockedOn === r && (p.blockedOn = null);
      }
    }
    for (rr !== null && Li(rr, r), or !== null && Li(or, r), ir !== null && Li(ir, r), Ii.forEach(i), Mi.forEach(i), c = 0; c < sr.length; c++) p = sr[c], p.blockedOn === r && (p.blockedOn = null);
    for (; 0 < sr.length && (c = sr[0], c.blockedOn === null); ) a0(c), c.blockedOn === null && sr.shift();
  }
  var bo = k.ReactCurrentBatchConfig, fa = !0;
  function TA(r, i, c, p) {
    var v = Le, b = bo.transition;
    bo.transition = null;
    try {
      Le = 1, sc(r, i, c, p);
    } finally {
      Le = v, bo.transition = b;
    }
  }
  function AA(r, i, c, p) {
    var v = Le, b = bo.transition;
    bo.transition = null;
    try {
      Le = 4, sc(r, i, c, p);
    } finally {
      Le = v, bo.transition = b;
    }
  }
  function sc(r, i, c, p) {
    if (fa) {
      var v = ac(r, i, c, p);
      if (v === null) Ec(r, i, p, da, c), s0(r, p);
      else if (NA(v, r, i, c, p)) p.stopPropagation();
      else if (s0(r, p), i & 4 && -1 < RA.indexOf(r)) {
        for (; v !== null; ) {
          var b = Yi(v);
          if (b !== null && n0(b), b = ac(r, i, c, p), b === null && Ec(r, i, p, da, c), b === v) break;
          v = b;
        }
        v !== null && p.stopPropagation();
      } else Ec(r, i, p, null, c);
    }
  }
  var da = null;
  function ac(r, i, c, p) {
    if (da = null, r = Si(p), r = Fr(r), r !== null) if (i = xn(r), i === null) r = null;
    else if (c = i.tag, c === 13) {
      if (r = Ni(i), r !== null) return r;
      r = null;
    } else if (c === 3) {
      if (i.stateNode.current.memoizedState.isDehydrated) return i.tag === 3 ? i.stateNode.containerInfo : null;
      r = null;
    } else i !== r && (r = null);
    return da = r, null;
  }
  function l0(r) {
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
        switch (Kl()) {
          case Ti:
            return 1;
          case sa:
            return 4;
          case yo:
          case Xl:
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
  var ar = null, uc = null, ha = null;
  function c0() {
    if (ha) return ha;
    var r, i = uc, c = i.length, p, v = "value" in ar ? ar.value : ar.textContent, b = v.length;
    for (r = 0; r < c && i[r] === v[r]; r++) ;
    var P = c - r;
    for (p = 1; p <= P && i[c - p] === v[b - p]; p++) ;
    return ha = v.slice(r, 1 < p ? 1 - p : void 0);
  }
  function pa(r) {
    var i = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && i === 13 && (r = 13)) : r = i, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function ma() {
    return !0;
  }
  function f0() {
    return !1;
  }
  function It(r) {
    function i(c, p, v, b, P) {
      this._reactName = c, this._targetInst = v, this.type = p, this.nativeEvent = b, this.target = P, this.currentTarget = null;
      for (var z in r) r.hasOwnProperty(z) && (c = r[z], this[z] = c ? c(b) : b[z]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? ma : f0, this.isPropagationStopped = f0, this;
    }
    return Q(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = ma);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = ma);
    }, persist: function() {
    }, isPersistent: ma }), i;
  }
  var So = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
    return r.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, lc = It(So), Di = Q({}, So, { view: 0, detail: 0 }), IA = It(Di), cc, fc, ji, ga = Q({}, Di, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hc, button: 0, buttons: 0, relatedTarget: function(r) {
    return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
  }, movementX: function(r) {
    return "movementX" in r ? r.movementX : (r !== ji && (ji && r.type === "mousemove" ? (cc = r.screenX - ji.screenX, fc = r.screenY - ji.screenY) : fc = cc = 0, ji = r), cc);
  }, movementY: function(r) {
    return "movementY" in r ? r.movementY : fc;
  } }), d0 = It(ga), MA = Q({}, ga, { dataTransfer: 0 }), OA = It(MA), LA = Q({}, Di, { relatedTarget: 0 }), dc = It(LA), qA = Q({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), DA = It(qA), jA = Q({}, So, { clipboardData: function(r) {
    return "clipboardData" in r ? r.clipboardData : window.clipboardData;
  } }), zA = It(jA), FA = Q({}, So, { data: 0 }), h0 = It(FA), $A = {
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
  }, BA = {
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
  }, VA = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function HA(r) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(r) : (r = VA[r]) ? !!i[r] : !1;
  }
  function hc() {
    return HA;
  }
  var WA = Q({}, Di, { key: function(r) {
    if (r.key) {
      var i = $A[r.key] || r.key;
      if (i !== "Unidentified") return i;
    }
    return r.type === "keypress" ? (r = pa(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? BA[r.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hc, charCode: function(r) {
    return r.type === "keypress" ? pa(r) : 0;
  }, keyCode: function(r) {
    return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  }, which: function(r) {
    return r.type === "keypress" ? pa(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  } }), UA = It(WA), GA = Q({}, ga, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), p0 = It(GA), YA = Q({}, Di, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hc }), KA = It(YA), XA = Q({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), QA = It(XA), ZA = Q({}, ga, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), JA = It(ZA), eI = [9, 13, 27, 32], pc = l && "CompositionEvent" in window, zi = null;
  l && "documentMode" in document && (zi = document.documentMode);
  var tI = l && "TextEvent" in window && !zi, m0 = l && (!pc || zi && 8 < zi && 11 >= zi), g0 = " ", v0 = !1;
  function y0(r, i) {
    switch (r) {
      case "keyup":
        return eI.indexOf(i.keyCode) !== -1;
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
  function w0(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Eo = !1;
  function nI(r, i) {
    switch (r) {
      case "compositionend":
        return w0(i);
      case "keypress":
        return i.which !== 32 ? null : (v0 = !0, g0);
      case "textInput":
        return r = i.data, r === g0 && v0 ? null : r;
      default:
        return null;
    }
  }
  function rI(r, i) {
    if (Eo) return r === "compositionend" || !pc && y0(r, i) ? (r = c0(), ha = uc = ar = null, Eo = !1, r) : null;
    switch (r) {
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
  var oI = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function x0(r) {
    var i = r && r.nodeName && r.nodeName.toLowerCase();
    return i === "input" ? !!oI[r.type] : i === "textarea";
  }
  function _0(r, i, c, p) {
    Xs(p), i = _a(i, "onChange"), 0 < i.length && (c = new lc("onChange", "change", null, c, p), r.push({ event: c, listeners: i }));
  }
  var Fi = null, $i = null;
  function iI(r) {
    z0(r, 0);
  }
  function va(r) {
    var i = Po(r);
    if (de(i)) return r;
  }
  function sI(r, i) {
    if (r === "change") return i;
  }
  var b0 = !1;
  if (l) {
    var mc;
    if (l) {
      var gc = "oninput" in document;
      if (!gc) {
        var S0 = document.createElement("div");
        S0.setAttribute("oninput", "return;"), gc = typeof S0.oninput == "function";
      }
      mc = gc;
    } else mc = !1;
    b0 = mc && (!document.documentMode || 9 < document.documentMode);
  }
  function E0() {
    Fi && (Fi.detachEvent("onpropertychange", C0), $i = Fi = null);
  }
  function C0(r) {
    if (r.propertyName === "value" && va($i)) {
      var i = [];
      _0(i, $i, r, Si(r)), ea(iI, i);
    }
  }
  function aI(r, i, c) {
    r === "focusin" ? (E0(), Fi = i, $i = c, Fi.attachEvent("onpropertychange", C0)) : r === "focusout" && E0();
  }
  function uI(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return va($i);
  }
  function lI(r, i) {
    if (r === "click") return va(i);
  }
  function cI(r, i) {
    if (r === "input" || r === "change") return va(i);
  }
  function fI(r, i) {
    return r === i && (r !== 0 || 1 / r === 1 / i) || r !== r && i !== i;
  }
  var nn = typeof Object.is == "function" ? Object.is : fI;
  function Bi(r, i) {
    if (nn(r, i)) return !0;
    if (typeof r != "object" || r === null || typeof i != "object" || i === null) return !1;
    var c = Object.keys(r), p = Object.keys(i);
    if (c.length !== p.length) return !1;
    for (p = 0; p < c.length; p++) {
      var v = c[p];
      if (!f.call(i, v) || !nn(r[v], i[v])) return !1;
    }
    return !0;
  }
  function k0(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function R0(r, i) {
    var c = k0(r);
    r = 0;
    for (var p; c; ) {
      if (c.nodeType === 3) {
        if (p = r + c.textContent.length, r <= i && p >= i) return { node: c, offset: i - r };
        r = p;
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
  function N0(r, i) {
    return r && i ? r === i ? !0 : r && r.nodeType === 3 ? !1 : i && i.nodeType === 3 ? N0(r, i.parentNode) : "contains" in r ? r.contains(i) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function P0() {
    for (var r = window, i = pe(); i instanceof r.HTMLIFrameElement; ) {
      try {
        var c = typeof i.contentWindow.location.href == "string";
      } catch {
        c = !1;
      }
      if (c) r = i.contentWindow;
      else break;
      i = pe(r.document);
    }
    return i;
  }
  function vc(r) {
    var i = r && r.nodeName && r.nodeName.toLowerCase();
    return i && (i === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || i === "textarea" || r.contentEditable === "true");
  }
  function dI(r) {
    var i = P0(), c = r.focusedElem, p = r.selectionRange;
    if (i !== c && c && c.ownerDocument && N0(c.ownerDocument.documentElement, c)) {
      if (p !== null && vc(c)) {
        if (i = p.start, r = p.end, r === void 0 && (r = i), "selectionStart" in c) c.selectionStart = i, c.selectionEnd = Math.min(r, c.value.length);
        else if (r = (i = c.ownerDocument || document) && i.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var v = c.textContent.length, b = Math.min(p.start, v);
          p = p.end === void 0 ? b : Math.min(p.end, v), !r.extend && b > p && (v = p, p = b, b = v), v = R0(c, b);
          var P = R0(
            c,
            p
          );
          v && P && (r.rangeCount !== 1 || r.anchorNode !== v.node || r.anchorOffset !== v.offset || r.focusNode !== P.node || r.focusOffset !== P.offset) && (i = i.createRange(), i.setStart(v.node, v.offset), r.removeAllRanges(), b > p ? (r.addRange(i), r.extend(P.node, P.offset)) : (i.setEnd(P.node, P.offset), r.addRange(i)));
        }
      }
      for (i = [], r = c; r = r.parentNode; ) r.nodeType === 1 && i.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < i.length; c++) r = i[c], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }
  }
  var hI = l && "documentMode" in document && 11 >= document.documentMode, Co = null, yc = null, Vi = null, wc = !1;
  function T0(r, i, c) {
    var p = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    wc || Co == null || Co !== pe(p) || (p = Co, "selectionStart" in p && vc(p) ? p = { start: p.selectionStart, end: p.selectionEnd } : (p = (p.ownerDocument && p.ownerDocument.defaultView || window).getSelection(), p = { anchorNode: p.anchorNode, anchorOffset: p.anchorOffset, focusNode: p.focusNode, focusOffset: p.focusOffset }), Vi && Bi(Vi, p) || (Vi = p, p = _a(yc, "onSelect"), 0 < p.length && (i = new lc("onSelect", "select", null, i, c), r.push({ event: i, listeners: p }), i.target = Co)));
  }
  function ya(r, i) {
    var c = {};
    return c[r.toLowerCase()] = i.toLowerCase(), c["Webkit" + r] = "webkit" + i, c["Moz" + r] = "moz" + i, c;
  }
  var ko = { animationend: ya("Animation", "AnimationEnd"), animationiteration: ya("Animation", "AnimationIteration"), animationstart: ya("Animation", "AnimationStart"), transitionend: ya("Transition", "TransitionEnd") }, xc = {}, A0 = {};
  l && (A0 = document.createElement("div").style, "AnimationEvent" in window || (delete ko.animationend.animation, delete ko.animationiteration.animation, delete ko.animationstart.animation), "TransitionEvent" in window || delete ko.transitionend.transition);
  function wa(r) {
    if (xc[r]) return xc[r];
    if (!ko[r]) return r;
    var i = ko[r], c;
    for (c in i) if (i.hasOwnProperty(c) && c in A0) return xc[r] = i[c];
    return r;
  }
  var I0 = wa("animationend"), M0 = wa("animationiteration"), O0 = wa("animationstart"), L0 = wa("transitionend"), q0 = /* @__PURE__ */ new Map(), D0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ur(r, i) {
    q0.set(r, i), a(i, [r]);
  }
  for (var _c = 0; _c < D0.length; _c++) {
    var bc = D0[_c], pI = bc.toLowerCase(), mI = bc[0].toUpperCase() + bc.slice(1);
    ur(pI, "on" + mI);
  }
  ur(I0, "onAnimationEnd"), ur(M0, "onAnimationIteration"), ur(O0, "onAnimationStart"), ur("dblclick", "onDoubleClick"), ur("focusin", "onFocus"), ur("focusout", "onBlur"), ur(L0, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gI = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));
  function j0(r, i, c) {
    var p = r.type || "unknown-event";
    r.currentTarget = c, Ul(p, i, void 0, r), r.currentTarget = null;
  }
  function z0(r, i) {
    i = (i & 4) !== 0;
    for (var c = 0; c < r.length; c++) {
      var p = r[c], v = p.event;
      p = p.listeners;
      e: {
        var b = void 0;
        if (i) for (var P = p.length - 1; 0 <= P; P--) {
          var z = p[P], U = z.instance, oe = z.currentTarget;
          if (z = z.listener, U !== b && v.isPropagationStopped()) break e;
          j0(v, z, oe), b = U;
        }
        else for (P = 0; P < p.length; P++) {
          if (z = p[P], U = z.instance, oe = z.currentTarget, z = z.listener, U !== b && v.isPropagationStopped()) break e;
          j0(v, z, oe), b = U;
        }
      }
    }
    if (vo) throw r = Ri, vo = !1, Ri = null, r;
  }
  function De(r, i) {
    var c = i[Tc];
    c === void 0 && (c = i[Tc] = /* @__PURE__ */ new Set());
    var p = r + "__bubble";
    c.has(p) || (F0(i, r, 2, !1), c.add(p));
  }
  function Sc(r, i, c) {
    var p = 0;
    i && (p |= 4), F0(c, r, p, i);
  }
  var xa = "_reactListening" + Math.random().toString(36).slice(2);
  function Wi(r) {
    if (!r[xa]) {
      r[xa] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (gI.has(c) || Sc(c, !1, r), Sc(c, !0, r));
      });
      var i = r.nodeType === 9 ? r : r.ownerDocument;
      i === null || i[xa] || (i[xa] = !0, Sc("selectionchange", !1, i));
    }
  }
  function F0(r, i, c, p) {
    switch (l0(i)) {
      case 1:
        var v = TA;
        break;
      case 4:
        v = AA;
        break;
      default:
        v = sc;
    }
    c = v.bind(null, i, c, r), v = void 0, !ki || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (v = !0), p ? v !== void 0 ? r.addEventListener(i, c, { capture: !0, passive: v }) : r.addEventListener(i, c, !0) : v !== void 0 ? r.addEventListener(i, c, { passive: v }) : r.addEventListener(i, c, !1);
  }
  function Ec(r, i, c, p, v) {
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
      var oe = b, le = Si(c), fe = [];
      e: {
        var ue = q0.get(r);
        if (ue !== void 0) {
          var me = lc, ye = r;
          switch (r) {
            case "keypress":
              if (pa(c) === 0) break e;
            case "keydown":
            case "keyup":
              me = UA;
              break;
            case "focusin":
              ye = "focus", me = dc;
              break;
            case "focusout":
              ye = "blur", me = dc;
              break;
            case "beforeblur":
            case "afterblur":
              me = dc;
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
              me = OA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = KA;
              break;
            case I0:
            case M0:
            case O0:
              me = DA;
              break;
            case L0:
              me = QA;
              break;
            case "scroll":
              me = IA;
              break;
            case "wheel":
              me = JA;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = zA;
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
          var be = (i & 4) !== 0, Je = !be && r === "scroll", ne = be ? ue !== null ? ue + "Capture" : null : ue;
          be = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = Lr(J, ne), he != null && be.push(Ui(J, he, re)))), Je) break;
            J = J.return;
          }
          0 < be.length && (ue = new me(ue, ye, null, c, le), fe.push({ event: ue, listeners: be }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (ue = r === "mouseover" || r === "pointerover", me = r === "mouseout" || r === "pointerout", ue && c !== bi && (ye = c.relatedTarget || c.fromElement) && (Fr(ye) || ye[Dn])) break e;
          if ((me || ue) && (ue = le.window === le ? le : (ue = le.ownerDocument) ? ue.defaultView || ue.parentWindow : window, me ? (ye = c.relatedTarget || c.toElement, me = oe, ye = ye ? Fr(ye) : null, ye !== null && (Je = xn(ye), ye !== Je || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (me = null, ye = oe), me !== ye)) {
            if (be = d0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (r === "pointerout" || r === "pointerover") && (be = p0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), Je = me == null ? ue : Po(me), re = ye == null ? ue : Po(ye), ue = new be(he, J + "leave", me, c, le), ue.target = Je, ue.relatedTarget = re, he = null, Fr(le) === oe && (be = new be(ne, J + "enter", ye, c, le), be.target = re, be.relatedTarget = Je, he = be), Je = he, me && ye) t: {
              for (be = me, ne = ye, J = 0, re = be; re; re = Ro(re)) J++;
              for (re = 0, he = ne; he; he = Ro(he)) re++;
              for (; 0 < J - re; ) be = Ro(be), J--;
              for (; 0 < re - J; ) ne = Ro(ne), re--;
              for (; J--; ) {
                if (be === ne || ne !== null && be === ne.alternate) break t;
                be = Ro(be), ne = Ro(ne);
              }
              be = null;
            }
            else be = null;
            me !== null && $0(fe, ue, me, be, !1), ye !== null && Je !== null && $0(fe, Je, ye, be, !0);
          }
        }
        e: {
          if (ue = oe ? Po(oe) : window, me = ue.nodeName && ue.nodeName.toLowerCase(), me === "select" || me === "input" && ue.type === "file") var Ce = sI;
          else if (x0(ue)) if (b0) Ce = cI;
          else {
            Ce = uI;
            var ke = aI;
          }
          else (me = ue.nodeName) && me.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (Ce = lI);
          if (Ce && (Ce = Ce(r, oe))) {
            _0(fe, Ce, c, le);
            break e;
          }
          ke && ke(r, ue, oe), r === "focusout" && (ke = ue._wrapperState) && ke.controlled && ue.type === "number" && He(ue, "number", ue.value);
        }
        switch (ke = oe ? Po(oe) : window, r) {
          case "focusin":
            (x0(ke) || ke.contentEditable === "true") && (Co = ke, yc = oe, Vi = null);
            break;
          case "focusout":
            Vi = yc = Co = null;
            break;
          case "mousedown":
            wc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wc = !1, T0(fe, c, le);
            break;
          case "selectionchange":
            if (hI) break;
          case "keydown":
          case "keyup":
            T0(fe, c, le);
        }
        var Re;
        if (pc) e: {
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
        else Eo ? y0(r, c) && (Pe = "onCompositionEnd") : r === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (m0 && c.locale !== "ko" && (Eo || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Eo && (Re = c0()) : (ar = le, uc = "value" in ar ? ar.value : ar.textContent, Eo = !0)), ke = _a(oe, Pe), 0 < ke.length && (Pe = new h0(Pe, r, null, c, le), fe.push({ event: Pe, listeners: ke }), Re ? Pe.data = Re : (Re = w0(c), Re !== null && (Pe.data = Re)))), (Re = tI ? nI(r, c) : rI(r, c)) && (oe = _a(oe, "onBeforeInput"), 0 < oe.length && (le = new h0("onBeforeInput", "beforeinput", null, c, le), fe.push({ event: le, listeners: oe }), le.data = Re));
      }
      z0(fe, i);
    });
  }
  function Ui(r, i, c) {
    return { instance: r, listener: i, currentTarget: c };
  }
  function _a(r, i) {
    for (var c = i + "Capture", p = []; r !== null; ) {
      var v = r, b = v.stateNode;
      v.tag === 5 && b !== null && (v = b, b = Lr(r, c), b != null && p.unshift(Ui(r, b, v)), b = Lr(r, i), b != null && p.push(Ui(r, b, v))), r = r.return;
    }
    return p;
  }
  function Ro(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function $0(r, i, c, p, v) {
    for (var b = i._reactName, P = []; c !== null && c !== p; ) {
      var z = c, U = z.alternate, oe = z.stateNode;
      if (U !== null && U === p) break;
      z.tag === 5 && oe !== null && (z = oe, v ? (U = Lr(c, b), U != null && P.unshift(Ui(c, U, z))) : v || (U = Lr(c, b), U != null && P.push(Ui(c, U, z)))), c = c.return;
    }
    P.length !== 0 && r.push({ event: i, listeners: P });
  }
  var vI = /\r\n?/g, yI = /\u0000|\uFFFD/g;
  function B0(r) {
    return (typeof r == "string" ? r : "" + r).replace(vI, `
`).replace(yI, "");
  }
  function ba(r, i, c) {
    if (i = B0(i), B0(r) !== i && c) throw Error(n(425));
  }
  function Sa() {
  }
  var Cc = null, kc = null;
  function Rc(r, i) {
    return r === "textarea" || r === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Nc = typeof setTimeout == "function" ? setTimeout : void 0, wI = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = typeof Promise == "function" ? Promise : void 0, xI = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(r) {
    return V0.resolve(null).then(r).catch(_I);
  } : Nc;
  function _I(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function Pc(r, i) {
    var c = i, p = 0;
    do {
      var v = c.nextSibling;
      if (r.removeChild(c), v && v.nodeType === 8) if (c = v.data, c === "/$") {
        if (p === 0) {
          r.removeChild(v), qi(i);
          return;
        }
        p--;
      } else c !== "$" && c !== "$?" && c !== "$!" || p++;
      c = v;
    } while (c);
    qi(i);
  }
  function lr(r) {
    for (; r != null; r = r.nextSibling) {
      var i = r.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (i = r.data, i === "$" || i === "$!" || i === "$?") break;
        if (i === "/$") return null;
      }
    }
    return r;
  }
  function H0(r) {
    r = r.previousSibling;
    for (var i = 0; r; ) {
      if (r.nodeType === 8) {
        var c = r.data;
        if (c === "$" || c === "$!" || c === "$?") {
          if (i === 0) return r;
          i--;
        } else c === "/$" && i++;
      }
      r = r.previousSibling;
    }
    return null;
  }
  var No = Math.random().toString(36).slice(2), bn = "__reactFiber$" + No, Gi = "__reactProps$" + No, Dn = "__reactContainer$" + No, Tc = "__reactEvents$" + No, bI = "__reactListeners$" + No, SI = "__reactHandles$" + No;
  function Fr(r) {
    var i = r[bn];
    if (i) return i;
    for (var c = r.parentNode; c; ) {
      if (i = c[Dn] || c[bn]) {
        if (c = i.alternate, i.child !== null || c !== null && c.child !== null) for (r = H0(r); r !== null; ) {
          if (c = r[bn]) return c;
          r = H0(r);
        }
        return i;
      }
      r = c, c = r.parentNode;
    }
    return null;
  }
  function Yi(r) {
    return r = r[bn] || r[Dn], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function Po(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function Ea(r) {
    return r[Gi] || null;
  }
  var Ac = [], To = -1;
  function cr(r) {
    return { current: r };
  }
  function je(r) {
    0 > To || (r.current = Ac[To], Ac[To] = null, To--);
  }
  function qe(r, i) {
    To++, Ac[To] = r.current, r.current = i;
  }
  var fr = {}, pt = cr(fr), bt = cr(!1), $r = fr;
  function Ao(r, i) {
    var c = r.type.contextTypes;
    if (!c) return fr;
    var p = r.stateNode;
    if (p && p.__reactInternalMemoizedUnmaskedChildContext === i) return p.__reactInternalMemoizedMaskedChildContext;
    var v = {}, b;
    for (b in c) v[b] = i[b];
    return p && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = i, r.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function St(r) {
    return r = r.childContextTypes, r != null;
  }
  function Ca() {
    je(bt), je(pt);
  }
  function W0(r, i, c) {
    if (pt.current !== fr) throw Error(n(168));
    qe(pt, i), qe(bt, c);
  }
  function U0(r, i, c) {
    var p = r.stateNode;
    if (i = i.childContextTypes, typeof p.getChildContext != "function") return c;
    p = p.getChildContext();
    for (var v in p) if (!(v in i)) throw Error(n(108, K(r) || "Unknown", v));
    return Q({}, c, p);
  }
  function ka(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || fr, $r = pt.current, qe(pt, r), qe(bt, bt.current), !0;
  }
  function G0(r, i, c) {
    var p = r.stateNode;
    if (!p) throw Error(n(169));
    c ? (r = U0(r, i, $r), p.__reactInternalMemoizedMergedChildContext = r, je(bt), je(pt), qe(pt, r)) : je(bt), qe(bt, c);
  }
  var jn = null, Ra = !1, Ic = !1;
  function Y0(r) {
    jn === null ? jn = [r] : jn.push(r);
  }
  function EI(r) {
    Ra = !0, Y0(r);
  }
  function dr() {
    if (!Ic && jn !== null) {
      Ic = !0;
      var r = 0, i = Le;
      try {
        var c = jn;
        for (Le = 1; r < c.length; r++) {
          var p = c[r];
          do
            p = p(!0);
          while (p !== null);
        }
        jn = null, Ra = !1;
      } catch (v) {
        throw jn !== null && (jn = jn.slice(r + 1)), ra(Ti, dr), v;
      } finally {
        Le = i, Ic = !1;
      }
    }
    return null;
  }
  var Io = [], Mo = 0, Na = null, Pa = 0, Ut = [], Gt = 0, Br = null, zn = 1, Fn = "";
  function Vr(r, i) {
    Io[Mo++] = Pa, Io[Mo++] = Na, Na = r, Pa = i;
  }
  function K0(r, i, c) {
    Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Br, Br = r;
    var p = zn;
    r = Fn;
    var v = 32 - At(p) - 1;
    p &= ~(1 << v), c += 1;
    var b = 32 - At(i) + v;
    if (30 < b) {
      var P = v - v % 5;
      b = (p & (1 << P) - 1).toString(32), p >>= P, v -= P, zn = 1 << 32 - At(i) + v | c << v | p, Fn = b + r;
    } else zn = 1 << b | c << v | p, Fn = r;
  }
  function Mc(r) {
    r.return !== null && (Vr(r, 1), K0(r, 1, 0));
  }
  function Oc(r) {
    for (; r === Na; ) Na = Io[--Mo], Io[Mo] = null, Pa = Io[--Mo], Io[Mo] = null;
    for (; r === Br; ) Br = Ut[--Gt], Ut[Gt] = null, Fn = Ut[--Gt], Ut[Gt] = null, zn = Ut[--Gt], Ut[Gt] = null;
  }
  var Mt = null, Ot = null, ze = !1, rn = null;
  function X0(r, i) {
    var c = Qt(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = i, c.return = r, i = r.deletions, i === null ? (r.deletions = [c], r.flags |= 16) : i.push(c);
  }
  function Q0(r, i) {
    switch (r.tag) {
      case 5:
        var c = r.type;
        return i = i.nodeType !== 1 || c.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (r.stateNode = i, Mt = r, Ot = lr(i.firstChild), !0) : !1;
      case 6:
        return i = r.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (r.stateNode = i, Mt = r, Ot = null, !0) : !1;
      case 13:
        return i = i.nodeType !== 8 ? null : i, i !== null ? (c = Br !== null ? { id: zn, overflow: Fn } : null, r.memoizedState = { dehydrated: i, treeContext: c, retryLane: 1073741824 }, c = Qt(18, null, null, 0), c.stateNode = i, c.return = r, r.child = c, Mt = r, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Lc(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function qc(r) {
    if (ze) {
      var i = Ot;
      if (i) {
        var c = i;
        if (!Q0(r, i)) {
          if (Lc(r)) throw Error(n(418));
          i = lr(c.nextSibling);
          var p = Mt;
          i && Q0(r, i) ? X0(p, c) : (r.flags = r.flags & -4097 | 2, ze = !1, Mt = r);
        }
      } else {
        if (Lc(r)) throw Error(n(418));
        r.flags = r.flags & -4097 | 2, ze = !1, Mt = r;
      }
    }
  }
  function Z0(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Mt = r;
  }
  function Ta(r) {
    if (r !== Mt) return !1;
    if (!ze) return Z0(r), ze = !0, !1;
    var i;
    if ((i = r.tag !== 3) && !(i = r.tag !== 5) && (i = r.type, i = i !== "head" && i !== "body" && !Rc(r.type, r.memoizedProps)), i && (i = Ot)) {
      if (Lc(r)) throw J0(), Error(n(418));
      for (; i; ) X0(r, i), i = lr(i.nextSibling);
    }
    if (Z0(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(n(317));
      e: {
        for (r = r.nextSibling, i = 0; r; ) {
          if (r.nodeType === 8) {
            var c = r.data;
            if (c === "/$") {
              if (i === 0) {
                Ot = lr(r.nextSibling);
                break e;
              }
              i--;
            } else c !== "$" && c !== "$!" && c !== "$?" || i++;
          }
          r = r.nextSibling;
        }
        Ot = null;
      }
    } else Ot = Mt ? lr(r.stateNode.nextSibling) : null;
    return !0;
  }
  function J0() {
    for (var r = Ot; r; ) r = lr(r.nextSibling);
  }
  function Oo() {
    Ot = Mt = null, ze = !1;
  }
  function Dc(r) {
    rn === null ? rn = [r] : rn.push(r);
  }
  var CI = k.ReactCurrentBatchConfig;
  function Ki(r, i, c) {
    if (r = c.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(n(309));
          var p = c.stateNode;
        }
        if (!p) throw Error(n(147, r));
        var v = p, b = "" + r;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === b ? i.ref : (i = function(P) {
          var z = v.refs;
          P === null ? delete z[b] : z[b] = P;
        }, i._stringRef = b, i);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!c._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Aa(r, i) {
    throw r = Object.prototype.toString.call(i), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : r));
  }
  function ew(r) {
    var i = r._init;
    return i(r._payload);
  }
  function tw(r) {
    function i(ne, J) {
      if (r) {
        var re = ne.deletions;
        re === null ? (ne.deletions = [J], ne.flags |= 16) : re.push(J);
      }
    }
    function c(ne, J) {
      if (!r) return null;
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
      return ne.index = re, r ? (re = ne.alternate, re !== null ? (re = re.index, re < J ? (ne.flags |= 2, J) : re) : (ne.flags |= 2, J)) : (ne.flags |= 1048576, J);
    }
    function P(ne) {
      return r && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function z(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = Pf(re, ne.mode, he), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function U(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? le(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && ew(Ce) === J.type) ? (he = v(J, re.props), he.ref = Ki(ne, J, re), he.return = ne, he) : (he = tu(re.type, re.key, re.props, null, ne.mode, he), he.ref = Ki(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = Tf(re, ne.mode, he), J.return = ne, J) : (J = v(J, re.children || []), J.return = ne, J);
    }
    function le(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = Qr(re, ne.mode, he, Ce), J.return = ne, J) : (J = v(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = Pf("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case N:
            return re = tu(J.type, J.key, J.props, null, ne.mode, re), re.ref = Ki(ne, null, J), re.return = ne, re;
          case T:
            return J = Tf(J, ne.mode, re), J.return = ne, J;
          case $:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Ft(J) || j(J)) return J = Qr(J, ne.mode, re, null), J.return = ne, J;
        Aa(ne, J);
      }
      return null;
    }
    function ue(ne, J, re, he) {
      var Ce = J !== null ? J.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return Ce !== null ? null : z(ne, J, "" + re, he);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case N:
            return re.key === Ce ? U(ne, J, re, he) : null;
          case T:
            return re.key === Ce ? oe(ne, J, re, he) : null;
          case $:
            return Ce = re._init, ue(
              ne,
              J,
              Ce(re._payload),
              he
            );
        }
        if (Ft(re) || j(re)) return Ce !== null ? null : le(ne, J, re, he, null);
        Aa(ne, re);
      }
      return null;
    }
    function me(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, z(J, ne, "" + he, Ce);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case N:
            return ne = ne.get(he.key === null ? re : he.key) || null, U(J, ne, he, Ce);
          case T:
            return ne = ne.get(he.key === null ? re : he.key) || null, oe(J, ne, he, Ce);
          case $:
            var ke = he._init;
            return me(ne, J, re, ke(he._payload), Ce);
        }
        if (Ft(he) || j(he)) return ne = ne.get(re) || null, le(J, ne, he, Ce, null);
        Aa(J, he);
      }
      return null;
    }
    function ye(ne, J, re, he) {
      for (var Ce = null, ke = null, Re = J, Pe = J = 0, ct = null; Re !== null && Pe < re.length; Pe++) {
        Re.index > Pe ? (ct = Re, Re = null) : ct = Re.sibling;
        var Oe = ue(ne, Re, re[Pe], he);
        if (Oe === null) {
          Re === null && (Re = ct);
          break;
        }
        r && Re && Oe.alternate === null && i(ne, Re), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe, Re = ct;
      }
      if (Pe === re.length) return c(ne, Re), ze && Vr(ne, Pe), Ce;
      if (Re === null) {
        for (; Pe < re.length; Pe++) Re = fe(ne, re[Pe], he), Re !== null && (J = b(Re, J, Pe), ke === null ? Ce = Re : ke.sibling = Re, ke = Re);
        return ze && Vr(ne, Pe), Ce;
      }
      for (Re = p(ne, Re); Pe < re.length; Pe++) ct = me(Re, ne, Pe, re[Pe], he), ct !== null && (r && ct.alternate !== null && Re.delete(ct.key === null ? Pe : ct.key), J = b(ct, J, Pe), ke === null ? Ce = ct : ke.sibling = ct, ke = ct);
      return r && Re.forEach(function(_r) {
        return i(ne, _r);
      }), ze && Vr(ne, Pe), Ce;
    }
    function be(ne, J, re, he) {
      var Ce = j(re);
      if (typeof Ce != "function") throw Error(n(150));
      if (re = Ce.call(re), re == null) throw Error(n(151));
      for (var ke = Ce = null, Re = J, Pe = J = 0, ct = null, Oe = re.next(); Re !== null && !Oe.done; Pe++, Oe = re.next()) {
        Re.index > Pe ? (ct = Re, Re = null) : ct = Re.sibling;
        var _r = ue(ne, Re, Oe.value, he);
        if (_r === null) {
          Re === null && (Re = ct);
          break;
        }
        r && Re && _r.alternate === null && i(ne, Re), J = b(_r, J, Pe), ke === null ? Ce = _r : ke.sibling = _r, ke = _r, Re = ct;
      }
      if (Oe.done) return c(
        ne,
        Re
      ), ze && Vr(ne, Pe), Ce;
      if (Re === null) {
        for (; !Oe.done; Pe++, Oe = re.next()) Oe = fe(ne, Oe.value, he), Oe !== null && (J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
        return ze && Vr(ne, Pe), Ce;
      }
      for (Re = p(ne, Re); !Oe.done; Pe++, Oe = re.next()) Oe = me(Re, ne, Pe, Oe.value, he), Oe !== null && (r && Oe.alternate !== null && Re.delete(Oe.key === null ? Pe : Oe.key), J = b(Oe, J, Pe), ke === null ? Ce = Oe : ke.sibling = Oe, ke = Oe);
      return r && Re.forEach(function(o2) {
        return i(ne, o2);
      }), ze && Vr(ne, Pe), Ce;
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
                    c(ne, ke.sibling), J = v(ke, re.props), J.ref = Ki(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else i(ne, ke);
                ke = ke.sibling;
              }
              re.type === A ? (J = Qr(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = tu(re.type, re.key, re.props, null, ne.mode, he), he.ref = Ki(ne, J, re), he.return = ne, ne = he);
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
              J = Tf(re, ne.mode, he), J.return = ne, ne = J;
            }
            return P(ne);
          case $:
            return ke = re._init, Je(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return ye(ne, J, re, he);
        if (j(re)) return be(ne, J, re, he);
        Aa(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = v(J, re), J.return = ne, ne = J) : (c(ne, J), J = Pf(re, ne.mode, he), J.return = ne, ne = J), P(ne)) : c(ne, J);
    }
    return Je;
  }
  var Lo = tw(!0), nw = tw(!1), Ia = cr(null), Ma = null, qo = null, jc = null;
  function zc() {
    jc = qo = Ma = null;
  }
  function Fc(r) {
    var i = Ia.current;
    je(Ia), r._currentValue = i;
  }
  function $c(r, i, c) {
    for (; r !== null; ) {
      var p = r.alternate;
      if ((r.childLanes & i) !== i ? (r.childLanes |= i, p !== null && (p.childLanes |= i)) : p !== null && (p.childLanes & i) !== i && (p.childLanes |= i), r === c) break;
      r = r.return;
    }
  }
  function Do(r, i) {
    Ma = r, jc = qo = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & i) !== 0 && (Et = !0), r.firstContext = null);
  }
  function Yt(r) {
    var i = r._currentValue;
    if (jc !== r) if (r = { context: r, memoizedValue: i, next: null }, qo === null) {
      if (Ma === null) throw Error(n(308));
      qo = r, Ma.dependencies = { lanes: 0, firstContext: r };
    } else qo = qo.next = r;
    return i;
  }
  var Hr = null;
  function Bc(r) {
    Hr === null ? Hr = [r] : Hr.push(r);
  }
  function rw(r, i, c, p) {
    var v = i.interleaved;
    return v === null ? (c.next = c, Bc(i)) : (c.next = v.next, v.next = c), i.interleaved = c, $n(r, p);
  }
  function $n(r, i) {
    r.lanes |= i;
    var c = r.alternate;
    for (c !== null && (c.lanes |= i), c = r, r = r.return; r !== null; ) r.childLanes |= i, c = r.alternate, c !== null && (c.childLanes |= i), c = r, r = r.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var hr = !1;
  function Vc(r) {
    r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ow(r, i) {
    r = r.updateQueue, i.updateQueue === r && (i.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
  }
  function Bn(r, i) {
    return { eventTime: r, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function pr(r, i, c) {
    var p = r.updateQueue;
    if (p === null) return null;
    if (p = p.shared, (Me & 2) !== 0) {
      var v = p.pending;
      return v === null ? i.next = i : (i.next = v.next, v.next = i), p.pending = i, $n(r, c);
    }
    return v = p.interleaved, v === null ? (i.next = i, Bc(p)) : (i.next = v.next, v.next = i), p.interleaved = i, $n(r, c);
  }
  function Oa(r, i, c) {
    if (i = i.updateQueue, i !== null && (i = i.shared, (c & 4194240) !== 0)) {
      var p = i.lanes;
      p &= r.pendingLanes, c |= p, i.lanes = c, rc(r, c);
    }
  }
  function iw(r, i) {
    var c = r.updateQueue, p = r.alternate;
    if (p !== null && (p = p.updateQueue, c === p)) {
      var v = null, b = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var P = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          b === null ? v = b = P : b = b.next = P, c = c.next;
        } while (c !== null);
        b === null ? v = b = i : b = b.next = i;
      } else v = b = i;
      c = { baseState: p.baseState, firstBaseUpdate: v, lastBaseUpdate: b, shared: p.shared, effects: p.effects }, r.updateQueue = c;
      return;
    }
    r = c.lastBaseUpdate, r === null ? c.firstBaseUpdate = i : r.next = i, c.lastBaseUpdate = i;
  }
  function La(r, i, c, p) {
    var v = r.updateQueue;
    hr = !1;
    var b = v.firstBaseUpdate, P = v.lastBaseUpdate, z = v.shared.pending;
    if (z !== null) {
      v.shared.pending = null;
      var U = z, oe = U.next;
      U.next = null, P === null ? b = oe : P.next = oe, P = U;
      var le = r.alternate;
      le !== null && (le = le.updateQueue, z = le.lastBaseUpdate, z !== P && (z === null ? le.firstBaseUpdate = oe : z.next = oe, le.lastBaseUpdate = U));
    }
    if (b !== null) {
      var fe = v.baseState;
      P = 0, le = oe = U = null, z = b;
      do {
        var ue = z.lane, me = z.eventTime;
        if ((p & ue) === ue) {
          le !== null && (le = le.next = {
            eventTime: me,
            lane: 0,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          });
          e: {
            var ye = r, be = z;
            switch (ue = i, me = c, be.tag) {
              case 1:
                if (ye = be.payload, typeof ye == "function") {
                  fe = ye.call(me, fe, ue);
                  break e;
                }
                fe = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = be.payload, ue = typeof ye == "function" ? ye.call(me, fe, ue) : ye, ue == null) break e;
                fe = Q({}, fe, ue);
                break e;
              case 2:
                hr = !0;
            }
          }
          z.callback !== null && z.lane !== 0 && (r.flags |= 64, ue = v.effects, ue === null ? v.effects = [z] : ue.push(z));
        } else me = { eventTime: me, lane: ue, tag: z.tag, payload: z.payload, callback: z.callback, next: null }, le === null ? (oe = le = me, U = fe) : le = le.next = me, P |= ue;
        if (z = z.next, z === null) {
          if (z = v.shared.pending, z === null) break;
          ue = z, z = ue.next, ue.next = null, v.lastBaseUpdate = ue, v.shared.pending = null;
        }
      } while (!0);
      if (le === null && (U = fe), v.baseState = U, v.firstBaseUpdate = oe, v.lastBaseUpdate = le, i = v.shared.interleaved, i !== null) {
        v = i;
        do
          P |= v.lane, v = v.next;
        while (v !== i);
      } else b === null && (v.shared.lanes = 0);
      Gr |= P, r.lanes = P, r.memoizedState = fe;
    }
  }
  function sw(r, i, c) {
    if (r = i.effects, i.effects = null, r !== null) for (i = 0; i < r.length; i++) {
      var p = r[i], v = p.callback;
      if (v !== null) {
        if (p.callback = null, p = c, typeof v != "function") throw Error(n(191, v));
        v.call(p);
      }
    }
  }
  var Xi = {}, Sn = cr(Xi), Qi = cr(Xi), Zi = cr(Xi);
  function Wr(r) {
    if (r === Xi) throw Error(n(174));
    return r;
  }
  function Hc(r, i) {
    switch (qe(Zi, i), qe(Qi, r), qe(Sn, Xi), r = i.nodeType, r) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : Bt(null, "");
        break;
      default:
        r = r === 8 ? i.parentNode : i, i = r.namespaceURI || null, r = r.tagName, i = Bt(i, r);
    }
    je(Sn), qe(Sn, i);
  }
  function jo() {
    je(Sn), je(Qi), je(Zi);
  }
  function aw(r) {
    Wr(Zi.current);
    var i = Wr(Sn.current), c = Bt(i, r.type);
    i !== c && (qe(Qi, r), qe(Sn, c));
  }
  function Wc(r) {
    Qi.current === r && (je(Sn), je(Qi));
  }
  var Ge = cr(0);
  function qa(r) {
    for (var i = r; i !== null; ) {
      if (i.tag === 13) {
        var c = i.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!")) return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === r) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === r) return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var Uc = [];
  function Gc() {
    for (var r = 0; r < Uc.length; r++) Uc[r]._workInProgressVersionPrimary = null;
    Uc.length = 0;
  }
  var Da = k.ReactCurrentDispatcher, Yc = k.ReactCurrentBatchConfig, Ur = 0, Ye = null, ot = null, ut = null, ja = !1, Ji = !1, es = 0, kI = 0;
  function mt() {
    throw Error(n(321));
  }
  function Kc(r, i) {
    if (i === null) return !1;
    for (var c = 0; c < i.length && c < r.length; c++) if (!nn(r[c], i[c])) return !1;
    return !0;
  }
  function Xc(r, i, c, p, v, b) {
    if (Ur = b, Ye = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, Da.current = r === null || r.memoizedState === null ? TI : AI, r = c(p, v), Ji) {
      b = 0;
      do {
        if (Ji = !1, es = 0, 25 <= b) throw Error(n(301));
        b += 1, ut = ot = null, i.updateQueue = null, Da.current = II, r = c(p, v);
      } while (Ji);
    }
    if (Da.current = $a, i = ot !== null && ot.next !== null, Ur = 0, ut = ot = Ye = null, ja = !1, i) throw Error(n(300));
    return r;
  }
  function Qc() {
    var r = es !== 0;
    return es = 0, r;
  }
  function En() {
    var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ut === null ? Ye.memoizedState = ut = r : ut = ut.next = r, ut;
  }
  function Kt() {
    if (ot === null) {
      var r = Ye.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = ot.next;
    var i = ut === null ? Ye.memoizedState : ut.next;
    if (i !== null) ut = i, ot = r;
    else {
      if (r === null) throw Error(n(310));
      ot = r, r = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, ut === null ? Ye.memoizedState = ut = r : ut = ut.next = r;
    }
    return ut;
  }
  function ts(r, i) {
    return typeof i == "function" ? i(r) : i;
  }
  function Zc(r) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
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
        var le = oe.lane;
        if ((Ur & le) === le) U !== null && (U = U.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), p = oe.hasEagerState ? oe.eagerState : r(p, oe.action);
        else {
          var fe = {
            lane: le,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          U === null ? (z = U = fe, P = p) : U = U.next = fe, Ye.lanes |= le, Gr |= le;
        }
        oe = oe.next;
      } while (oe !== null && oe !== b);
      U === null ? P = p : U.next = z, nn(p, i.memoizedState) || (Et = !0), i.memoizedState = p, i.baseState = P, i.baseQueue = U, c.lastRenderedState = p;
    }
    if (r = c.interleaved, r !== null) {
      v = r;
      do
        b = v.lane, Ye.lanes |= b, Gr |= b, v = v.next;
      while (v !== r);
    } else v === null && (c.lanes = 0);
    return [i.memoizedState, c.dispatch];
  }
  function Jc(r) {
    var i = Kt(), c = i.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var p = c.dispatch, v = c.pending, b = i.memoizedState;
    if (v !== null) {
      c.pending = null;
      var P = v = v.next;
      do
        b = r(b, P.action), P = P.next;
      while (P !== v);
      nn(b, i.memoizedState) || (Et = !0), i.memoizedState = b, i.baseQueue === null && (i.baseState = b), c.lastRenderedState = b;
    }
    return [b, p];
  }
  function uw() {
  }
  function lw(r, i) {
    var c = Ye, p = Kt(), v = i(), b = !nn(p.memoizedState, v);
    if (b && (p.memoizedState = v, Et = !0), p = p.queue, ef(dw.bind(null, c, p, r), [r]), p.getSnapshot !== i || b || ut !== null && ut.memoizedState.tag & 1) {
      if (c.flags |= 2048, ns(9, fw.bind(null, c, p, v, i), void 0, null), lt === null) throw Error(n(349));
      (Ur & 30) !== 0 || cw(c, i, v);
    }
    return v;
  }
  function cw(r, i, c) {
    r.flags |= 16384, r = { getSnapshot: i, value: c }, i = Ye.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ye.updateQueue = i, i.stores = [r]) : (c = i.stores, c === null ? i.stores = [r] : c.push(r));
  }
  function fw(r, i, c, p) {
    i.value = c, i.getSnapshot = p, hw(i) && pw(r);
  }
  function dw(r, i, c) {
    return c(function() {
      hw(i) && pw(r);
    });
  }
  function hw(r) {
    var i = r.getSnapshot;
    r = r.value;
    try {
      var c = i();
      return !nn(r, c);
    } catch {
      return !0;
    }
  }
  function pw(r) {
    var i = $n(r, 1);
    i !== null && un(i, r, 1, -1);
  }
  function mw(r) {
    var i = En();
    return typeof r == "function" && (r = r()), i.memoizedState = i.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ts, lastRenderedState: r }, i.queue = r, r = r.dispatch = PI.bind(null, Ye, r), [i.memoizedState, r];
  }
  function ns(r, i, c, p) {
    return r = { tag: r, create: i, destroy: c, deps: p, next: null }, i = Ye.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, Ye.updateQueue = i, i.lastEffect = r.next = r) : (c = i.lastEffect, c === null ? i.lastEffect = r.next = r : (p = c.next, c.next = r, r.next = p, i.lastEffect = r)), r;
  }
  function gw() {
    return Kt().memoizedState;
  }
  function za(r, i, c, p) {
    var v = En();
    Ye.flags |= r, v.memoizedState = ns(1 | i, c, void 0, p === void 0 ? null : p);
  }
  function Fa(r, i, c, p) {
    var v = Kt();
    p = p === void 0 ? null : p;
    var b = void 0;
    if (ot !== null) {
      var P = ot.memoizedState;
      if (b = P.destroy, p !== null && Kc(p, P.deps)) {
        v.memoizedState = ns(i, c, b, p);
        return;
      }
    }
    Ye.flags |= r, v.memoizedState = ns(1 | i, c, b, p);
  }
  function vw(r, i) {
    return za(8390656, 8, r, i);
  }
  function ef(r, i) {
    return Fa(2048, 8, r, i);
  }
  function yw(r, i) {
    return Fa(4, 2, r, i);
  }
  function ww(r, i) {
    return Fa(4, 4, r, i);
  }
  function xw(r, i) {
    if (typeof i == "function") return r = r(), i(r), function() {
      i(null);
    };
    if (i != null) return r = r(), i.current = r, function() {
      i.current = null;
    };
  }
  function _w(r, i, c) {
    return c = c != null ? c.concat([r]) : null, Fa(4, 4, xw.bind(null, i, r), c);
  }
  function tf() {
  }
  function bw(r, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Kc(i, p[1]) ? p[0] : (c.memoizedState = [r, i], r);
  }
  function Sw(r, i) {
    var c = Kt();
    i = i === void 0 ? null : i;
    var p = c.memoizedState;
    return p !== null && i !== null && Kc(i, p[1]) ? p[0] : (r = r(), c.memoizedState = [r, i], r);
  }
  function Ew(r, i, c) {
    return (Ur & 21) === 0 ? (r.baseState && (r.baseState = !1, Et = !0), r.memoizedState = c) : (nn(c, i) || (c = ua(), Ye.lanes |= c, Gr |= c, r.baseState = !0), i);
  }
  function RI(r, i) {
    var c = Le;
    Le = c !== 0 && 4 > c ? c : 4, r(!0);
    var p = Yc.transition;
    Yc.transition = {};
    try {
      r(!1), i();
    } finally {
      Le = c, Yc.transition = p;
    }
  }
  function Cw() {
    return Kt().memoizedState;
  }
  function NI(r, i, c) {
    var p = yr(r);
    if (c = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null }, kw(r)) Rw(i, c);
    else if (c = rw(r, i, c, p), c !== null) {
      var v = xt();
      un(c, r, p, v), Nw(c, i, p);
    }
  }
  function PI(r, i, c) {
    var p = yr(r), v = { lane: p, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (kw(r)) Rw(i, v);
    else {
      var b = r.alternate;
      if (r.lanes === 0 && (b === null || b.lanes === 0) && (b = i.lastRenderedReducer, b !== null)) try {
        var P = i.lastRenderedState, z = b(P, c);
        if (v.hasEagerState = !0, v.eagerState = z, nn(z, P)) {
          var U = i.interleaved;
          U === null ? (v.next = v, Bc(i)) : (v.next = U.next, U.next = v), i.interleaved = v;
          return;
        }
      } catch {
      } finally {
      }
      c = rw(r, i, v, p), c !== null && (v = xt(), un(c, r, p, v), Nw(c, i, p));
    }
  }
  function kw(r) {
    var i = r.alternate;
    return r === Ye || i !== null && i === Ye;
  }
  function Rw(r, i) {
    Ji = ja = !0;
    var c = r.pending;
    c === null ? i.next = i : (i.next = c.next, c.next = i), r.pending = i;
  }
  function Nw(r, i, c) {
    if ((c & 4194240) !== 0) {
      var p = i.lanes;
      p &= r.pendingLanes, c |= p, i.lanes = c, rc(r, c);
    }
  }
  var $a = { readContext: Yt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, TI = { readContext: Yt, useCallback: function(r, i) {
    return En().memoizedState = [r, i === void 0 ? null : i], r;
  }, useContext: Yt, useEffect: vw, useImperativeHandle: function(r, i, c) {
    return c = c != null ? c.concat([r]) : null, za(
      4194308,
      4,
      xw.bind(null, i, r),
      c
    );
  }, useLayoutEffect: function(r, i) {
    return za(4194308, 4, r, i);
  }, useInsertionEffect: function(r, i) {
    return za(4, 2, r, i);
  }, useMemo: function(r, i) {
    var c = En();
    return i = i === void 0 ? null : i, r = r(), c.memoizedState = [r, i], r;
  }, useReducer: function(r, i, c) {
    var p = En();
    return i = c !== void 0 ? c(i) : i, p.memoizedState = p.baseState = i, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: i }, p.queue = r, r = r.dispatch = NI.bind(null, Ye, r), [p.memoizedState, r];
  }, useRef: function(r) {
    var i = En();
    return r = { current: r }, i.memoizedState = r;
  }, useState: mw, useDebugValue: tf, useDeferredValue: function(r) {
    return En().memoizedState = r;
  }, useTransition: function() {
    var r = mw(!1), i = r[0];
    return r = RI.bind(null, r[1]), En().memoizedState = r, [i, r];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(r, i, c) {
    var p = Ye, v = En();
    if (ze) {
      if (c === void 0) throw Error(n(407));
      c = c();
    } else {
      if (c = i(), lt === null) throw Error(n(349));
      (Ur & 30) !== 0 || cw(p, i, c);
    }
    v.memoizedState = c;
    var b = { value: c, getSnapshot: i };
    return v.queue = b, vw(dw.bind(
      null,
      p,
      b,
      r
    ), [r]), p.flags |= 2048, ns(9, fw.bind(null, p, b, c, i), void 0, null), c;
  }, useId: function() {
    var r = En(), i = lt.identifierPrefix;
    if (ze) {
      var c = Fn, p = zn;
      c = (p & ~(1 << 32 - At(p) - 1)).toString(32) + c, i = ":" + i + "R" + c, c = es++, 0 < c && (i += "H" + c.toString(32)), i += ":";
    } else c = kI++, i = ":" + i + "r" + c.toString(32) + ":";
    return r.memoizedState = i;
  }, unstable_isNewReconciler: !1 }, AI = {
    readContext: Yt,
    useCallback: bw,
    useContext: Yt,
    useEffect: ef,
    useImperativeHandle: _w,
    useInsertionEffect: yw,
    useLayoutEffect: ww,
    useMemo: Sw,
    useReducer: Zc,
    useRef: gw,
    useState: function() {
      return Zc(ts);
    },
    useDebugValue: tf,
    useDeferredValue: function(r) {
      var i = Kt();
      return Ew(i, ot.memoizedState, r);
    },
    useTransition: function() {
      var r = Zc(ts)[0], i = Kt().memoizedState;
      return [r, i];
    },
    useMutableSource: uw,
    useSyncExternalStore: lw,
    useId: Cw,
    unstable_isNewReconciler: !1
  }, II = { readContext: Yt, useCallback: bw, useContext: Yt, useEffect: ef, useImperativeHandle: _w, useInsertionEffect: yw, useLayoutEffect: ww, useMemo: Sw, useReducer: Jc, useRef: gw, useState: function() {
    return Jc(ts);
  }, useDebugValue: tf, useDeferredValue: function(r) {
    var i = Kt();
    return ot === null ? i.memoizedState = r : Ew(i, ot.memoizedState, r);
  }, useTransition: function() {
    var r = Jc(ts)[0], i = Kt().memoizedState;
    return [r, i];
  }, useMutableSource: uw, useSyncExternalStore: lw, useId: Cw, unstable_isNewReconciler: !1 };
  function on(r, i) {
    if (r && r.defaultProps) {
      i = Q({}, i), r = r.defaultProps;
      for (var c in r) i[c] === void 0 && (i[c] = r[c]);
      return i;
    }
    return i;
  }
  function nf(r, i, c, p) {
    i = r.memoizedState, c = c(p, i), c = c == null ? i : Q({}, i, c), r.memoizedState = c, r.lanes === 0 && (r.updateQueue.baseState = c);
  }
  var Ba = { isMounted: function(r) {
    return (r = r._reactInternals) ? xn(r) === r : !1;
  }, enqueueSetState: function(r, i, c) {
    r = r._reactInternals;
    var p = xt(), v = yr(r), b = Bn(p, v);
    b.payload = i, c != null && (b.callback = c), i = pr(r, b, v), i !== null && (un(i, r, v, p), Oa(i, r, v));
  }, enqueueReplaceState: function(r, i, c) {
    r = r._reactInternals;
    var p = xt(), v = yr(r), b = Bn(p, v);
    b.tag = 1, b.payload = i, c != null && (b.callback = c), i = pr(r, b, v), i !== null && (un(i, r, v, p), Oa(i, r, v));
  }, enqueueForceUpdate: function(r, i) {
    r = r._reactInternals;
    var c = xt(), p = yr(r), v = Bn(c, p);
    v.tag = 2, i != null && (v.callback = i), i = pr(r, v, p), i !== null && (un(i, r, p, c), Oa(i, r, p));
  } };
  function Pw(r, i, c, p, v, b, P) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(p, b, P) : i.prototype && i.prototype.isPureReactComponent ? !Bi(c, p) || !Bi(v, b) : !0;
  }
  function Tw(r, i, c) {
    var p = !1, v = fr, b = i.contextType;
    return typeof b == "object" && b !== null ? b = Yt(b) : (v = St(i) ? $r : pt.current, p = i.contextTypes, b = (p = p != null) ? Ao(r, v) : fr), i = new i(c, b), r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ba, r.stateNode = i, i._reactInternals = r, p && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = v, r.__reactInternalMemoizedMaskedChildContext = b), i;
  }
  function Aw(r, i, c, p) {
    r = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(c, p), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(c, p), i.state !== r && Ba.enqueueReplaceState(i, i.state, null);
  }
  function rf(r, i, c, p) {
    var v = r.stateNode;
    v.props = c, v.state = r.memoizedState, v.refs = {}, Vc(r);
    var b = i.contextType;
    typeof b == "object" && b !== null ? v.context = Yt(b) : (b = St(i) ? $r : pt.current, v.context = Ao(r, b)), v.state = r.memoizedState, b = i.getDerivedStateFromProps, typeof b == "function" && (nf(r, i, b, c), v.state = r.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (i = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), i !== v.state && Ba.enqueueReplaceState(v, v.state, null), La(r, c, v, p), v.state = r.memoizedState), typeof v.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function zo(r, i) {
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
    return { value: r, source: i, stack: v, digest: null };
  }
  function of(r, i, c) {
    return { value: r, source: null, stack: c ?? null, digest: i ?? null };
  }
  function sf(r, i) {
    try {
      console.error(i.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var MI = typeof WeakMap == "function" ? WeakMap : Map;
  function Iw(r, i, c) {
    c = Bn(-1, c), c.tag = 3, c.payload = { element: null };
    var p = i.value;
    return c.callback = function() {
      Ka || (Ka = !0, _f = p), sf(r, i);
    }, c;
  }
  function Mw(r, i, c) {
    c = Bn(-1, c), c.tag = 3;
    var p = r.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var v = i.value;
      c.payload = function() {
        return p(v);
      }, c.callback = function() {
        sf(r, i);
      };
    }
    var b = r.stateNode;
    return b !== null && typeof b.componentDidCatch == "function" && (c.callback = function() {
      sf(r, i), typeof p != "function" && (gr === null ? gr = /* @__PURE__ */ new Set([this]) : gr.add(this));
      var P = i.stack;
      this.componentDidCatch(i.value, { componentStack: P !== null ? P : "" });
    }), c;
  }
  function Ow(r, i, c) {
    var p = r.pingCache;
    if (p === null) {
      p = r.pingCache = new MI();
      var v = /* @__PURE__ */ new Set();
      p.set(i, v);
    } else v = p.get(i), v === void 0 && (v = /* @__PURE__ */ new Set(), p.set(i, v));
    v.has(c) || (v.add(c), r = GI.bind(null, r, i, c), i.then(r, r));
  }
  function Lw(r) {
    do {
      var i;
      if ((i = r.tag === 13) && (i = r.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function qw(r, i, c, p, v) {
    return (r.mode & 1) === 0 ? (r === i ? r.flags |= 65536 : (r.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (i = Bn(-1, 1), i.tag = 2, pr(c, i, 1))), c.lanes |= 1), r) : (r.flags |= 65536, r.lanes = v, r);
  }
  var OI = k.ReactCurrentOwner, Et = !1;
  function wt(r, i, c, p) {
    i.child = r === null ? nw(i, null, c, p) : Lo(i, r.child, c, p);
  }
  function Dw(r, i, c, p, v) {
    c = c.render;
    var b = i.ref;
    return Do(i, v), p = Xc(r, i, c, p, b, v), c = Qc(), r !== null && !Et ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~v, Vn(r, i, v)) : (ze && c && Mc(i), i.flags |= 1, wt(r, i, p, v), i.child);
  }
  function jw(r, i, c, p, v) {
    if (r === null) {
      var b = c.type;
      return typeof b == "function" && !Nf(b) && b.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (i.tag = 15, i.type = b, zw(r, i, b, p, v)) : (r = tu(c.type, null, p, i, i.mode, v), r.ref = i.ref, r.return = i, i.child = r);
    }
    if (b = r.child, (r.lanes & v) === 0) {
      var P = b.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Bi, c(P, p) && r.ref === i.ref) return Vn(r, i, v);
    }
    return i.flags |= 1, r = xr(b, p), r.ref = i.ref, r.return = i, i.child = r;
  }
  function zw(r, i, c, p, v) {
    if (r !== null) {
      var b = r.memoizedProps;
      if (Bi(b, p) && r.ref === i.ref) if (Et = !1, i.pendingProps = p = b, (r.lanes & v) !== 0) (r.flags & 131072) !== 0 && (Et = !0);
      else return i.lanes = r.lanes, Vn(r, i, v);
    }
    return af(r, i, c, p, v);
  }
  function Fw(r, i, c) {
    var p = i.pendingProps, v = p.children, b = r !== null ? r.memoizedState : null;
    if (p.mode === "hidden") if ((i.mode & 1) === 0) i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe($o, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return r = b !== null ? b.baseLanes | c : c, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, i.updateQueue = null, qe($o, Lt), Lt |= r, null;
      i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, p = b !== null ? b.baseLanes : c, qe($o, Lt), Lt |= p;
    }
    else b !== null ? (p = b.baseLanes | c, i.memoizedState = null) : p = c, qe($o, Lt), Lt |= p;
    return wt(r, i, v, c), i.child;
  }
  function $w(r, i) {
    var c = i.ref;
    (r === null && c !== null || r !== null && r.ref !== c) && (i.flags |= 512, i.flags |= 2097152);
  }
  function af(r, i, c, p, v) {
    var b = St(c) ? $r : pt.current;
    return b = Ao(i, b), Do(i, v), c = Xc(r, i, c, p, b, v), p = Qc(), r !== null && !Et ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~v, Vn(r, i, v)) : (ze && p && Mc(i), i.flags |= 1, wt(r, i, c, v), i.child);
  }
  function Bw(r, i, c, p, v) {
    if (St(c)) {
      var b = !0;
      ka(i);
    } else b = !1;
    if (Do(i, v), i.stateNode === null) Ha(r, i), Tw(i, c, p), rf(i, c, p, v), p = !0;
    else if (r === null) {
      var P = i.stateNode, z = i.memoizedProps;
      P.props = z;
      var U = P.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Yt(oe) : (oe = St(c) ? $r : pt.current, oe = Ao(i, oe));
      var le = c.getDerivedStateFromProps, fe = typeof le == "function" || typeof P.getSnapshotBeforeUpdate == "function";
      fe || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (z !== p || U !== oe) && Aw(i, P, p, oe), hr = !1;
      var ue = i.memoizedState;
      P.state = ue, La(i, p, P, v), U = i.memoizedState, z !== p || ue !== U || bt.current || hr ? (typeof le == "function" && (nf(i, c, le, p), U = i.memoizedState), (z = hr || Pw(i, c, z, p, ue, U, oe)) ? (fe || typeof P.UNSAFE_componentWillMount != "function" && typeof P.componentWillMount != "function" || (typeof P.componentWillMount == "function" && P.componentWillMount(), typeof P.UNSAFE_componentWillMount == "function" && P.UNSAFE_componentWillMount()), typeof P.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = p, i.memoizedState = U), P.props = p, P.state = U, P.context = oe, p = z) : (typeof P.componentDidMount == "function" && (i.flags |= 4194308), p = !1);
    } else {
      P = i.stateNode, ow(r, i), z = i.memoizedProps, oe = i.type === i.elementType ? z : on(i.type, z), P.props = oe, fe = i.pendingProps, ue = P.context, U = c.contextType, typeof U == "object" && U !== null ? U = Yt(U) : (U = St(c) ? $r : pt.current, U = Ao(i, U));
      var me = c.getDerivedStateFromProps;
      (le = typeof me == "function" || typeof P.getSnapshotBeforeUpdate == "function") || typeof P.UNSAFE_componentWillReceiveProps != "function" && typeof P.componentWillReceiveProps != "function" || (z !== fe || ue !== U) && Aw(i, P, p, U), hr = !1, ue = i.memoizedState, P.state = ue, La(i, p, P, v);
      var ye = i.memoizedState;
      z !== fe || ue !== ye || bt.current || hr ? (typeof me == "function" && (nf(i, c, me, p), ye = i.memoizedState), (oe = hr || Pw(i, c, oe, p, ue, ye, U) || !1) ? (le || typeof P.UNSAFE_componentWillUpdate != "function" && typeof P.componentWillUpdate != "function" || (typeof P.componentWillUpdate == "function" && P.componentWillUpdate(p, ye, U), typeof P.UNSAFE_componentWillUpdate == "function" && P.UNSAFE_componentWillUpdate(p, ye, U)), typeof P.componentDidUpdate == "function" && (i.flags |= 4), typeof P.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof P.componentDidUpdate != "function" || z === r.memoizedProps && ue === r.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || z === r.memoizedProps && ue === r.memoizedState || (i.flags |= 1024), i.memoizedProps = p, i.memoizedState = ye), P.props = p, P.state = ye, P.context = U, p = oe) : (typeof P.componentDidUpdate != "function" || z === r.memoizedProps && ue === r.memoizedState || (i.flags |= 4), typeof P.getSnapshotBeforeUpdate != "function" || z === r.memoizedProps && ue === r.memoizedState || (i.flags |= 1024), p = !1);
    }
    return uf(r, i, c, p, b, v);
  }
  function uf(r, i, c, p, v, b) {
    $w(r, i);
    var P = (i.flags & 128) !== 0;
    if (!p && !P) return v && G0(i, c, !1), Vn(r, i, b);
    p = i.stateNode, OI.current = i;
    var z = P && typeof c.getDerivedStateFromError != "function" ? null : p.render();
    return i.flags |= 1, r !== null && P ? (i.child = Lo(i, r.child, null, b), i.child = Lo(i, null, z, b)) : wt(r, i, z, b), i.memoizedState = p.state, v && G0(i, c, !0), i.child;
  }
  function Vw(r) {
    var i = r.stateNode;
    i.pendingContext ? W0(r, i.pendingContext, i.pendingContext !== i.context) : i.context && W0(r, i.context, !1), Hc(r, i.containerInfo);
  }
  function Hw(r, i, c, p, v) {
    return Oo(), Dc(v), i.flags |= 256, wt(r, i, c, p), i.child;
  }
  var lf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cf(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function Ww(r, i, c) {
    var p = i.pendingProps, v = Ge.current, b = !1, P = (i.flags & 128) !== 0, z;
    if ((z = P) || (z = r !== null && r.memoizedState === null ? !1 : (v & 2) !== 0), z ? (b = !0, i.flags &= -129) : (r === null || r.memoizedState !== null) && (v |= 1), qe(Ge, v & 1), r === null)
      return qc(i), r = i.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((i.mode & 1) === 0 ? i.lanes = 1 : r.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824, null) : (P = p.children, r = p.fallback, b ? (p = i.mode, b = i.child, P = { mode: "hidden", children: P }, (p & 1) === 0 && b !== null ? (b.childLanes = 0, b.pendingProps = P) : b = nu(P, p, 0, null), r = Qr(r, p, c, null), b.return = i, r.return = i, b.sibling = r, i.child = b, i.child.memoizedState = cf(c), i.memoizedState = lf, r) : ff(i, P));
    if (v = r.memoizedState, v !== null && (z = v.dehydrated, z !== null)) return LI(r, i, P, p, z, v, c);
    if (b) {
      b = p.fallback, P = i.mode, v = r.child, z = v.sibling;
      var U = { mode: "hidden", children: p.children };
      return (P & 1) === 0 && i.child !== v ? (p = i.child, p.childLanes = 0, p.pendingProps = U, i.deletions = null) : (p = xr(v, U), p.subtreeFlags = v.subtreeFlags & 14680064), z !== null ? b = xr(z, b) : (b = Qr(b, P, c, null), b.flags |= 2), b.return = i, p.return = i, p.sibling = b, i.child = p, p = b, b = i.child, P = r.child.memoizedState, P = P === null ? cf(c) : { baseLanes: P.baseLanes | c, cachePool: null, transitions: P.transitions }, b.memoizedState = P, b.childLanes = r.childLanes & ~c, i.memoizedState = lf, p;
    }
    return b = r.child, r = b.sibling, p = xr(b, { mode: "visible", children: p.children }), (i.mode & 1) === 0 && (p.lanes = c), p.return = i, p.sibling = null, r !== null && (c = i.deletions, c === null ? (i.deletions = [r], i.flags |= 16) : c.push(r)), i.child = p, i.memoizedState = null, p;
  }
  function ff(r, i) {
    return i = nu({ mode: "visible", children: i }, r.mode, 0, null), i.return = r, r.child = i;
  }
  function Va(r, i, c, p) {
    return p !== null && Dc(p), Lo(i, r.child, null, c), r = ff(i, i.pendingProps.children), r.flags |= 2, i.memoizedState = null, r;
  }
  function LI(r, i, c, p, v, b, P) {
    if (c)
      return i.flags & 256 ? (i.flags &= -257, p = of(Error(n(422))), Va(r, i, P, p)) : i.memoizedState !== null ? (i.child = r.child, i.flags |= 128, null) : (b = p.fallback, v = i.mode, p = nu({ mode: "visible", children: p.children }, v, 0, null), b = Qr(b, v, P, null), b.flags |= 2, p.return = i, b.return = i, p.sibling = b, i.child = p, (i.mode & 1) !== 0 && Lo(i, r.child, null, P), i.child.memoizedState = cf(P), i.memoizedState = lf, b);
    if ((i.mode & 1) === 0) return Va(r, i, P, null);
    if (v.data === "$!") {
      if (p = v.nextSibling && v.nextSibling.dataset, p) var z = p.dgst;
      return p = z, b = Error(n(419)), p = of(b, p, void 0), Va(r, i, P, p);
    }
    if (z = (P & r.childLanes) !== 0, Et || z) {
      if (p = lt, p !== null) {
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
        v = (v & (p.suspendedLanes | P)) !== 0 ? 0 : v, v !== 0 && v !== b.retryLane && (b.retryLane = v, $n(r, v), un(p, r, v, -1));
      }
      return Rf(), p = of(Error(n(421))), Va(r, i, P, p);
    }
    return v.data === "$?" ? (i.flags |= 128, i.child = r.child, i = YI.bind(null, r), v._reactRetry = i, null) : (r = b.treeContext, Ot = lr(v.nextSibling), Mt = i, ze = !0, rn = null, r !== null && (Ut[Gt++] = zn, Ut[Gt++] = Fn, Ut[Gt++] = Br, zn = r.id, Fn = r.overflow, Br = i), i = ff(i, p.children), i.flags |= 4096, i);
  }
  function Uw(r, i, c) {
    r.lanes |= i;
    var p = r.alternate;
    p !== null && (p.lanes |= i), $c(r.return, i, c);
  }
  function df(r, i, c, p, v) {
    var b = r.memoizedState;
    b === null ? r.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: p, tail: c, tailMode: v } : (b.isBackwards = i, b.rendering = null, b.renderingStartTime = 0, b.last = p, b.tail = c, b.tailMode = v);
  }
  function Gw(r, i, c) {
    var p = i.pendingProps, v = p.revealOrder, b = p.tail;
    if (wt(r, i, p.children, c), p = Ge.current, (p & 2) !== 0) p = p & 1 | 2, i.flags |= 128;
    else {
      if (r !== null && (r.flags & 128) !== 0) e: for (r = i.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && Uw(r, c, i);
        else if (r.tag === 19) Uw(r, c, i);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === i) break e;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === i) break e;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      p &= 1;
    }
    if (qe(Ge, p), (i.mode & 1) === 0) i.memoizedState = null;
    else switch (v) {
      case "forwards":
        for (c = i.child, v = null; c !== null; ) r = c.alternate, r !== null && qa(r) === null && (v = c), c = c.sibling;
        c = v, c === null ? (v = i.child, i.child = null) : (v = c.sibling, c.sibling = null), df(i, !1, v, c, b);
        break;
      case "backwards":
        for (c = null, v = i.child, i.child = null; v !== null; ) {
          if (r = v.alternate, r !== null && qa(r) === null) {
            i.child = v;
            break;
          }
          r = v.sibling, v.sibling = c, c = v, v = r;
        }
        df(i, !0, c, null, b);
        break;
      case "together":
        df(i, !1, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function Ha(r, i) {
    (i.mode & 1) === 0 && r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2);
  }
  function Vn(r, i, c) {
    if (r !== null && (i.dependencies = r.dependencies), Gr |= i.lanes, (c & i.childLanes) === 0) return null;
    if (r !== null && i.child !== r.child) throw Error(n(153));
    if (i.child !== null) {
      for (r = i.child, c = xr(r, r.pendingProps), i.child = c, c.return = i; r.sibling !== null; ) r = r.sibling, c = c.sibling = xr(r, r.pendingProps), c.return = i;
      c.sibling = null;
    }
    return i.child;
  }
  function qI(r, i, c) {
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
        Hc(i, i.stateNode.containerInfo);
        break;
      case 10:
        var p = i.type._context, v = i.memoizedProps.value;
        qe(Ia, p._currentValue), p._currentValue = v;
        break;
      case 13:
        if (p = i.memoizedState, p !== null)
          return p.dehydrated !== null ? (qe(Ge, Ge.current & 1), i.flags |= 128, null) : (c & i.child.childLanes) !== 0 ? Ww(r, i, c) : (qe(Ge, Ge.current & 1), r = Vn(r, i, c), r !== null ? r.sibling : null);
        qe(Ge, Ge.current & 1);
        break;
      case 19:
        if (p = (c & i.childLanes) !== 0, (r.flags & 128) !== 0) {
          if (p) return Gw(r, i, c);
          i.flags |= 128;
        }
        if (v = i.memoizedState, v !== null && (v.rendering = null, v.tail = null, v.lastEffect = null), qe(Ge, Ge.current), p) break;
        return null;
      case 22:
      case 23:
        return i.lanes = 0, Fw(r, i, c);
    }
    return Vn(r, i, c);
  }
  var Yw, hf, Kw, Xw;
  Yw = function(r, i) {
    for (var c = i.child; c !== null; ) {
      if (c.tag === 5 || c.tag === 6) r.appendChild(c.stateNode);
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
  }, hf = function() {
  }, Kw = function(r, i, c, p) {
    var v = r.memoizedProps;
    if (v !== p) {
      r = i.stateNode, Wr(Sn.current);
      var b = null;
      switch (c) {
        case "input":
          v = _e(r, v), p = _e(r, p), b = [];
          break;
        case "select":
          v = Q({}, v, { value: void 0 }), p = Q({}, p, { value: void 0 }), b = [];
          break;
        case "textarea":
          v = at(r, v), p = at(r, p), b = [];
          break;
        default:
          typeof v.onClick != "function" && typeof p.onClick == "function" && (r.onclick = Sa);
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
        else oe === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, z = z ? z.__html : void 0, U != null && z !== U && (b = b || []).push(oe, U)) : oe === "children" ? typeof U != "string" && typeof U != "number" || (b = b || []).push(oe, "" + U) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (s.hasOwnProperty(oe) ? (U != null && oe === "onScroll" && De("scroll", r), b || z === U || (b = [])) : (b = b || []).push(oe, U));
      }
      c && (b = b || []).push("style", c);
      var oe = b;
      (i.updateQueue = oe) && (i.flags |= 4);
    }
  }, Xw = function(r, i, c, p) {
    c !== p && (i.flags |= 4);
  };
  function rs(r, i) {
    if (!ze) switch (r.tailMode) {
      case "hidden":
        i = r.tail;
        for (var c = null; i !== null; ) i.alternate !== null && (c = i), i = i.sibling;
        c === null ? r.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = r.tail;
        for (var p = null; c !== null; ) c.alternate !== null && (p = c), c = c.sibling;
        p === null ? i || r.tail === null ? r.tail = null : r.tail.sibling = null : p.sibling = null;
    }
  }
  function gt(r) {
    var i = r.alternate !== null && r.alternate.child === r.child, c = 0, p = 0;
    if (i) for (var v = r.child; v !== null; ) c |= v.lanes | v.childLanes, p |= v.subtreeFlags & 14680064, p |= v.flags & 14680064, v.return = r, v = v.sibling;
    else for (v = r.child; v !== null; ) c |= v.lanes | v.childLanes, p |= v.subtreeFlags, p |= v.flags, v.return = r, v = v.sibling;
    return r.subtreeFlags |= p, r.childLanes = c, i;
  }
  function DI(r, i, c) {
    var p = i.pendingProps;
    switch (Oc(i), i.tag) {
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
        return p = i.stateNode, jo(), je(bt), je(pt), Gc(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), (r === null || r.child === null) && (Ta(i) ? i.flags |= 4 : r === null || r.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024, rn !== null && (Ef(rn), rn = null))), hf(r, i), gt(i), null;
      case 5:
        Wc(i);
        var v = Wr(Zi.current);
        if (c = i.type, r !== null && i.stateNode != null) Kw(r, i, c, p, v), r.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
        else {
          if (!p) {
            if (i.stateNode === null) throw Error(n(166));
            return gt(i), null;
          }
          if (r = Wr(Sn.current), Ta(i)) {
            p = i.stateNode, c = i.type;
            var b = i.memoizedProps;
            switch (p[bn] = i, p[Gi] = b, r = (i.mode & 1) !== 0, c) {
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
                ge(p, b), De("invalid", p);
                break;
              case "select":
                p._wrapperState = { wasMultiple: !!b.multiple }, De("invalid", p);
                break;
              case "textarea":
                We(p, b), De("invalid", p);
            }
            xi(c, b), v = null;
            for (var P in b) if (b.hasOwnProperty(P)) {
              var z = b[P];
              P === "children" ? typeof z == "string" ? p.textContent !== z && (b.suppressHydrationWarning !== !0 && ba(p.textContent, z, r), v = ["children", z]) : typeof z == "number" && p.textContent !== "" + z && (b.suppressHydrationWarning !== !0 && ba(
                p.textContent,
                z,
                r
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
                typeof b.onClick == "function" && (p.onclick = Sa);
            }
            p = v, i.updateQueue = p, p !== null && (i.flags |= 4);
          } else {
            P = v.nodeType === 9 ? v : v.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = tn(c)), r === "http://www.w3.org/1999/xhtml" ? c === "script" ? (r = P.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof p.is == "string" ? r = P.createElement(c, { is: p.is }) : (r = P.createElement(c), c === "select" && (P = r, p.multiple ? P.multiple = !0 : p.size && (P.size = p.size))) : r = P.createElementNS(r, c), r[bn] = i, r[Gi] = p, Yw(r, i, !1, !1), i.stateNode = r;
            e: {
              switch (P = _i(c, p), c) {
                case "dialog":
                  De("cancel", r), De("close", r), v = p;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", r), v = p;
                  break;
                case "video":
                case "audio":
                  for (v = 0; v < Hi.length; v++) De(Hi[v], r);
                  v = p;
                  break;
                case "source":
                  De("error", r), v = p;
                  break;
                case "img":
                case "image":
                case "link":
                  De(
                    "error",
                    r
                  ), De("load", r), v = p;
                  break;
                case "details":
                  De("toggle", r), v = p;
                  break;
                case "input":
                  ge(r, p), v = _e(r, p), De("invalid", r);
                  break;
                case "option":
                  v = p;
                  break;
                case "select":
                  r._wrapperState = { wasMultiple: !!p.multiple }, v = Q({}, p, { value: void 0 }), De("invalid", r);
                  break;
                case "textarea":
                  We(r, p), v = at(r, p), De("invalid", r);
                  break;
                default:
                  v = p;
              }
              xi(c, v), z = v;
              for (b in z) if (z.hasOwnProperty(b)) {
                var U = z[b];
                b === "style" ? Ht(r, U) : b === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Or(r, U)) : b === "children" ? typeof U == "string" ? (c !== "textarea" || U !== "") && Vt(r, U) : typeof U == "number" && Vt(r, "" + U) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (s.hasOwnProperty(b) ? U != null && b === "onScroll" && De("scroll", r) : U != null && _(r, b, U, P));
              }
              switch (c) {
                case "input":
                  ce(r), Ze(r, p, !1);
                  break;
                case "textarea":
                  ce(r), $t(r);
                  break;
                case "option":
                  p.value != null && r.setAttribute("value", "" + te(p.value));
                  break;
                case "select":
                  r.multiple = !!p.multiple, b = p.value, b != null ? ht(r, !!p.multiple, b, !1) : p.defaultValue != null && ht(
                    r,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof v.onClick == "function" && (r.onclick = Sa);
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
        if (r && i.stateNode != null) Xw(r, i, r.memoizedProps, p);
        else {
          if (typeof p != "string" && i.stateNode === null) throw Error(n(166));
          if (c = Wr(Zi.current), Wr(Sn.current), Ta(i)) {
            if (p = i.stateNode, c = i.memoizedProps, p[bn] = i, (b = p.nodeValue !== c) && (r = Mt, r !== null)) switch (r.tag) {
              case 3:
                ba(p.nodeValue, c, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && ba(p.nodeValue, c, (r.mode & 1) !== 0);
            }
            b && (i.flags |= 4);
          } else p = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(p), p[bn] = i, i.stateNode = p;
        }
        return gt(i), null;
      case 13:
        if (je(Ge), p = i.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (ze && Ot !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0) J0(), Oo(), i.flags |= 98560, b = !1;
          else if (b = Ta(i), p !== null && p.dehydrated !== null) {
            if (r === null) {
              if (!b) throw Error(n(318));
              if (b = i.memoizedState, b = b !== null ? b.dehydrated : null, !b) throw Error(n(317));
              b[bn] = i;
            } else Oo(), (i.flags & 128) === 0 && (i.memoizedState = null), i.flags |= 4;
            gt(i), b = !1;
          } else rn !== null && (Ef(rn), rn = null), b = !0;
          if (!b) return i.flags & 65536 ? i : null;
        }
        return (i.flags & 128) !== 0 ? (i.lanes = c, i) : (p = p !== null, p !== (r !== null && r.memoizedState !== null) && p && (i.child.flags |= 8192, (i.mode & 1) !== 0 && (r === null || (Ge.current & 1) !== 0 ? it === 0 && (it = 3) : Rf())), i.updateQueue !== null && (i.flags |= 4), gt(i), null);
      case 4:
        return jo(), hf(r, i), r === null && Wi(i.stateNode.containerInfo), gt(i), null;
      case 10:
        return Fc(i.type._context), gt(i), null;
      case 17:
        return St(i.type) && Ca(), gt(i), null;
      case 19:
        if (je(Ge), b = i.memoizedState, b === null) return gt(i), null;
        if (p = (i.flags & 128) !== 0, P = b.rendering, P === null) if (p) rs(b, !1);
        else {
          if (it !== 0 || r !== null && (r.flags & 128) !== 0) for (r = i.child; r !== null; ) {
            if (P = qa(r), P !== null) {
              for (i.flags |= 128, rs(b, !1), p = P.updateQueue, p !== null && (i.updateQueue = p, i.flags |= 4), i.subtreeFlags = 0, p = c, c = i.child; c !== null; ) b = c, r = p, b.flags &= 14680066, P = b.alternate, P === null ? (b.childLanes = 0, b.lanes = r, b.child = null, b.subtreeFlags = 0, b.memoizedProps = null, b.memoizedState = null, b.updateQueue = null, b.dependencies = null, b.stateNode = null) : (b.childLanes = P.childLanes, b.lanes = P.lanes, b.child = P.child, b.subtreeFlags = 0, b.deletions = null, b.memoizedProps = P.memoizedProps, b.memoizedState = P.memoizedState, b.updateQueue = P.updateQueue, b.type = P.type, r = P.dependencies, b.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), c = c.sibling;
              return qe(Ge, Ge.current & 1 | 2), i.child;
            }
            r = r.sibling;
          }
          b.tail !== null && Ue() > Bo && (i.flags |= 128, p = !0, rs(b, !1), i.lanes = 4194304);
        }
        else {
          if (!p) if (r = qa(P), r !== null) {
            if (i.flags |= 128, p = !0, c = r.updateQueue, c !== null && (i.updateQueue = c, i.flags |= 4), rs(b, !0), b.tail === null && b.tailMode === "hidden" && !P.alternate && !ze) return gt(i), null;
          } else 2 * Ue() - b.renderingStartTime > Bo && c !== 1073741824 && (i.flags |= 128, p = !0, rs(b, !1), i.lanes = 4194304);
          b.isBackwards ? (P.sibling = i.child, i.child = P) : (c = b.last, c !== null ? c.sibling = P : i.child = P, b.last = P);
        }
        return b.tail !== null ? (i = b.tail, b.rendering = i, b.tail = i.sibling, b.renderingStartTime = Ue(), i.sibling = null, c = Ge.current, qe(Ge, p ? c & 1 | 2 : c & 1), i) : (gt(i), null);
      case 22:
      case 23:
        return kf(), p = i.memoizedState !== null, r !== null && r.memoizedState !== null !== p && (i.flags |= 8192), p && (i.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (gt(i), i.subtreeFlags & 6 && (i.flags |= 8192)) : gt(i), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, i.tag));
  }
  function jI(r, i) {
    switch (Oc(i), i.tag) {
      case 1:
        return St(i.type) && Ca(), r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
      case 3:
        return jo(), je(bt), je(pt), Gc(), r = i.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (i.flags = r & -65537 | 128, i) : null;
      case 5:
        return Wc(i), null;
      case 13:
        if (je(Ge), r = i.memoizedState, r !== null && r.dehydrated !== null) {
          if (i.alternate === null) throw Error(n(340));
          Oo();
        }
        return r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
      case 19:
        return je(Ge), null;
      case 4:
        return jo(), null;
      case 10:
        return Fc(i.type._context), null;
      case 22:
      case 23:
        return kf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wa = !1, vt = !1, zI = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Fo(r, i) {
    var c = r.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (p) {
      Xe(r, i, p);
    }
    else c.current = null;
  }
  function pf(r, i, c) {
    try {
      c();
    } catch (p) {
      Xe(r, i, p);
    }
  }
  var Qw = !1;
  function FI(r, i) {
    if (Cc = fa, r = P0(), vc(r)) {
      if ("selectionStart" in r) var c = { start: r.selectionStart, end: r.selectionEnd };
      else e: {
        c = (c = r.ownerDocument) && c.defaultView || window;
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
          var P = 0, z = -1, U = -1, oe = 0, le = 0, fe = r, ue = null;
          t: for (; ; ) {
            for (var me; fe !== c || v !== 0 && fe.nodeType !== 3 || (z = P + v), fe !== b || p !== 0 && fe.nodeType !== 3 || (U = P + p), fe.nodeType === 3 && (P += fe.nodeValue.length), (me = fe.firstChild) !== null; )
              ue = fe, fe = me;
            for (; ; ) {
              if (fe === r) break t;
              if (ue === c && ++oe === v && (z = P), ue === b && ++le === p && (U = P), (me = fe.nextSibling) !== null) break;
              fe = ue, ue = fe.parentNode;
            }
            fe = me;
          }
          c = z === -1 || U === -1 ? null : { start: z, end: U };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (kc = { focusedElem: r, selectionRange: c }, fa = !1, ve = i; ve !== null; ) if (i = ve, r = i.child, (i.subtreeFlags & 1028) !== 0 && r !== null) r.return = i, ve = r;
    else for (; ve !== null; ) {
      i = ve;
      try {
        var ye = i.alternate;
        if ((i.flags & 1024) !== 0) switch (i.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var be = ye.memoizedProps, Je = ye.memoizedState, ne = i.stateNode, J = ne.getSnapshotBeforeUpdate(i.elementType === i.type ? be : on(i.type, be), Je);
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
            throw Error(n(163));
        }
      } catch (he) {
        Xe(i, i.return, he);
      }
      if (r = i.sibling, r !== null) {
        r.return = i.return, ve = r;
        break;
      }
      ve = i.return;
    }
    return ye = Qw, Qw = !1, ye;
  }
  function os(r, i, c) {
    var p = i.updateQueue;
    if (p = p !== null ? p.lastEffect : null, p !== null) {
      var v = p = p.next;
      do {
        if ((v.tag & r) === r) {
          var b = v.destroy;
          v.destroy = void 0, b !== void 0 && pf(i, c, b);
        }
        v = v.next;
      } while (v !== p);
    }
  }
  function Ua(r, i) {
    if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
      var c = i = i.next;
      do {
        if ((c.tag & r) === r) {
          var p = c.create;
          c.destroy = p();
        }
        c = c.next;
      } while (c !== i);
    }
  }
  function mf(r) {
    var i = r.ref;
    if (i !== null) {
      var c = r.stateNode;
      switch (r.tag) {
        case 5:
          r = c;
          break;
        default:
          r = c;
      }
      typeof i == "function" ? i(r) : i.current = r;
    }
  }
  function Zw(r) {
    var i = r.alternate;
    i !== null && (r.alternate = null, Zw(i)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (i = r.stateNode, i !== null && (delete i[bn], delete i[Gi], delete i[Tc], delete i[bI], delete i[SI])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function Jw(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function ex(r) {
    e: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Jw(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function gf(r, i, c) {
    var p = r.tag;
    if (p === 5 || p === 6) r = r.stateNode, i ? c.nodeType === 8 ? c.parentNode.insertBefore(r, i) : c.insertBefore(r, i) : (c.nodeType === 8 ? (i = c.parentNode, i.insertBefore(r, c)) : (i = c, i.appendChild(r)), c = c._reactRootContainer, c != null || i.onclick !== null || (i.onclick = Sa));
    else if (p !== 4 && (r = r.child, r !== null)) for (gf(r, i, c), r = r.sibling; r !== null; ) gf(r, i, c), r = r.sibling;
  }
  function vf(r, i, c) {
    var p = r.tag;
    if (p === 5 || p === 6) r = r.stateNode, i ? c.insertBefore(r, i) : c.appendChild(r);
    else if (p !== 4 && (r = r.child, r !== null)) for (vf(r, i, c), r = r.sibling; r !== null; ) vf(r, i, c), r = r.sibling;
  }
  var ft = null, sn = !1;
  function mr(r, i, c) {
    for (c = c.child; c !== null; ) tx(r, i, c), c = c.sibling;
  }
  function tx(r, i, c) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
      Wt.onCommitFiberUnmount(jr, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        vt || Fo(c, i);
      case 6:
        var p = ft, v = sn;
        ft = null, mr(r, i, c), ft = p, sn = v, ft !== null && (sn ? (r = ft, c = c.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(c) : r.removeChild(c)) : ft.removeChild(c.stateNode));
        break;
      case 18:
        ft !== null && (sn ? (r = ft, c = c.stateNode, r.nodeType === 8 ? Pc(r.parentNode, c) : r.nodeType === 1 && Pc(r, c), qi(r)) : Pc(ft, c.stateNode));
        break;
      case 4:
        p = ft, v = sn, ft = c.stateNode.containerInfo, sn = !0, mr(r, i, c), ft = p, sn = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (p = c.updateQueue, p !== null && (p = p.lastEffect, p !== null))) {
          v = p = p.next;
          do {
            var b = v, P = b.destroy;
            b = b.tag, P !== void 0 && ((b & 2) !== 0 || (b & 4) !== 0) && pf(c, i, P), v = v.next;
          } while (v !== p);
        }
        mr(r, i, c);
        break;
      case 1:
        if (!vt && (Fo(c, i), p = c.stateNode, typeof p.componentWillUnmount == "function")) try {
          p.props = c.memoizedProps, p.state = c.memoizedState, p.componentWillUnmount();
        } catch (z) {
          Xe(c, i, z);
        }
        mr(r, i, c);
        break;
      case 21:
        mr(r, i, c);
        break;
      case 22:
        c.mode & 1 ? (vt = (p = vt) || c.memoizedState !== null, mr(r, i, c), vt = p) : mr(r, i, c);
        break;
      default:
        mr(r, i, c);
    }
  }
  function nx(r) {
    var i = r.updateQueue;
    if (i !== null) {
      r.updateQueue = null;
      var c = r.stateNode;
      c === null && (c = r.stateNode = new zI()), i.forEach(function(p) {
        var v = KI.bind(null, r, p);
        c.has(p) || (c.add(p), p.then(v, v));
      });
    }
  }
  function an(r, i) {
    var c = i.deletions;
    if (c !== null) for (var p = 0; p < c.length; p++) {
      var v = c[p];
      try {
        var b = r, P = i, z = P;
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
        if (ft === null) throw Error(n(160));
        tx(b, P, v), ft = null, sn = !1;
        var U = v.alternate;
        U !== null && (U.return = null), v.return = null;
      } catch (oe) {
        Xe(v, i, oe);
      }
    }
    if (i.subtreeFlags & 12854) for (i = i.child; i !== null; ) rx(i, r), i = i.sibling;
  }
  function rx(r, i) {
    var c = r.alternate, p = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(i, r), Cn(r), p & 4) {
          try {
            os(3, r, r.return), Ua(3, r);
          } catch (be) {
            Xe(r, r.return, be);
          }
          try {
            os(5, r, r.return);
          } catch (be) {
            Xe(r, r.return, be);
          }
        }
        break;
      case 1:
        an(i, r), Cn(r), p & 512 && c !== null && Fo(c, c.return);
        break;
      case 5:
        if (an(i, r), Cn(r), p & 512 && c !== null && Fo(c, c.return), r.flags & 32) {
          var v = r.stateNode;
          try {
            Vt(v, "");
          } catch (be) {
            Xe(r, r.return, be);
          }
        }
        if (p & 4 && (v = r.stateNode, v != null)) {
          var b = r.memoizedProps, P = c !== null ? c.memoizedProps : b, z = r.type, U = r.updateQueue;
          if (r.updateQueue = null, U !== null) try {
            z === "input" && b.type === "radio" && b.name != null && Ne(v, b), _i(z, P);
            var oe = _i(z, b);
            for (P = 0; P < U.length; P += 2) {
              var le = U[P], fe = U[P + 1];
              le === "style" ? Ht(v, fe) : le === "dangerouslySetInnerHTML" ? Or(v, fe) : le === "children" ? Vt(v, fe) : _(v, le, fe, oe);
            }
            switch (z) {
              case "input":
                Ee(v, b);
                break;
              case "textarea":
                en(v, b);
                break;
              case "select":
                var ue = v._wrapperState.wasMultiple;
                v._wrapperState.wasMultiple = !!b.multiple;
                var me = b.value;
                me != null ? ht(v, !!b.multiple, me, !1) : ue !== !!b.multiple && (b.defaultValue != null ? ht(
                  v,
                  !!b.multiple,
                  b.defaultValue,
                  !0
                ) : ht(v, !!b.multiple, b.multiple ? [] : "", !1));
            }
            v[Gi] = b;
          } catch (be) {
            Xe(r, r.return, be);
          }
        }
        break;
      case 6:
        if (an(i, r), Cn(r), p & 4) {
          if (r.stateNode === null) throw Error(n(162));
          v = r.stateNode, b = r.memoizedProps;
          try {
            v.nodeValue = b;
          } catch (be) {
            Xe(r, r.return, be);
          }
        }
        break;
      case 3:
        if (an(i, r), Cn(r), p & 4 && c !== null && c.memoizedState.isDehydrated) try {
          qi(i.containerInfo);
        } catch (be) {
          Xe(r, r.return, be);
        }
        break;
      case 4:
        an(i, r), Cn(r);
        break;
      case 13:
        an(i, r), Cn(r), v = r.child, v.flags & 8192 && (b = v.memoizedState !== null, v.stateNode.isHidden = b, !b || v.alternate !== null && v.alternate.memoizedState !== null || (xf = Ue())), p & 4 && nx(r);
        break;
      case 22:
        if (le = c !== null && c.memoizedState !== null, r.mode & 1 ? (vt = (oe = vt) || le, an(i, r), vt = oe) : an(i, r), Cn(r), p & 8192) {
          if (oe = r.memoizedState !== null, (r.stateNode.isHidden = oe) && !le && (r.mode & 1) !== 0) for (ve = r, le = r.child; le !== null; ) {
            for (fe = ve = le; ve !== null; ) {
              switch (ue = ve, me = ue.child, ue.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  os(4, ue, ue.return);
                  break;
                case 1:
                  Fo(ue, ue.return);
                  var ye = ue.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    p = ue, c = ue.return;
                    try {
                      i = p, ye.props = i.memoizedProps, ye.state = i.memoizedState, ye.componentWillUnmount();
                    } catch (be) {
                      Xe(p, c, be);
                    }
                  }
                  break;
                case 5:
                  Fo(ue, ue.return);
                  break;
                case 22:
                  if (ue.memoizedState !== null) {
                    sx(fe);
                    continue;
                  }
              }
              me !== null ? (me.return = ue, ve = me) : sx(fe);
            }
            le = le.sibling;
          }
          e: for (le = null, fe = r; ; ) {
            if (fe.tag === 5) {
              if (le === null) {
                le = fe;
                try {
                  v = fe.stateNode, oe ? (b = v.style, typeof b.setProperty == "function" ? b.setProperty("display", "none", "important") : b.display = "none") : (z = fe.stateNode, U = fe.memoizedProps.style, P = U != null && U.hasOwnProperty("display") ? U.display : null, z.style.display = Tt("display", P));
                } catch (be) {
                  Xe(r, r.return, be);
                }
              }
            } else if (fe.tag === 6) {
              if (le === null) try {
                fe.stateNode.nodeValue = oe ? "" : fe.memoizedProps;
              } catch (be) {
                Xe(r, r.return, be);
              }
            } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === r) && fe.child !== null) {
              fe.child.return = fe, fe = fe.child;
              continue;
            }
            if (fe === r) break e;
            for (; fe.sibling === null; ) {
              if (fe.return === null || fe.return === r) break e;
              le === fe && (le = null), fe = fe.return;
            }
            le === fe && (le = null), fe.sibling.return = fe.return, fe = fe.sibling;
          }
        }
        break;
      case 19:
        an(i, r), Cn(r), p & 4 && nx(r);
        break;
      case 21:
        break;
      default:
        an(
          i,
          r
        ), Cn(r);
    }
  }
  function Cn(r) {
    var i = r.flags;
    if (i & 2) {
      try {
        e: {
          for (var c = r.return; c !== null; ) {
            if (Jw(c)) {
              var p = c;
              break e;
            }
            c = c.return;
          }
          throw Error(n(160));
        }
        switch (p.tag) {
          case 5:
            var v = p.stateNode;
            p.flags & 32 && (Vt(v, ""), p.flags &= -33);
            var b = ex(r);
            vf(r, b, v);
            break;
          case 3:
          case 4:
            var P = p.stateNode.containerInfo, z = ex(r);
            gf(r, z, P);
            break;
          default:
            throw Error(n(161));
        }
      } catch (U) {
        Xe(r, r.return, U);
      }
      r.flags &= -3;
    }
    i & 4096 && (r.flags &= -4097);
  }
  function $I(r, i, c) {
    ve = r, ox(r);
  }
  function ox(r, i, c) {
    for (var p = (r.mode & 1) !== 0; ve !== null; ) {
      var v = ve, b = v.child;
      if (v.tag === 22 && p) {
        var P = v.memoizedState !== null || Wa;
        if (!P) {
          var z = v.alternate, U = z !== null && z.memoizedState !== null || vt;
          z = Wa;
          var oe = vt;
          if (Wa = P, (vt = U) && !oe) for (ve = v; ve !== null; ) P = ve, U = P.child, P.tag === 22 && P.memoizedState !== null ? ax(v) : U !== null ? (U.return = P, ve = U) : ax(v);
          for (; b !== null; ) ve = b, ox(b), b = b.sibling;
          ve = v, Wa = z, vt = oe;
        }
        ix(r);
      } else (v.subtreeFlags & 8772) !== 0 && b !== null ? (b.return = v, ve = b) : ix(r);
    }
  }
  function ix(r) {
    for (; ve !== null; ) {
      var i = ve;
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
              b !== null && sw(i, b, p);
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
                  var le = oe.memoizedState;
                  if (le !== null) {
                    var fe = le.dehydrated;
                    fe !== null && qi(fe);
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
          vt || i.flags & 512 && mf(i);
        } catch (ue) {
          Xe(i, i.return, ue);
        }
      }
      if (i === r) {
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
  function sx(r) {
    for (; ve !== null; ) {
      var i = ve;
      if (i === r) {
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
  function ax(r) {
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
              mf(i);
            } catch (U) {
              Xe(i, b, U);
            }
            break;
          case 5:
            var P = i.return;
            try {
              mf(i);
            } catch (U) {
              Xe(i, P, U);
            }
        }
      } catch (U) {
        Xe(i, i.return, U);
      }
      if (i === r) {
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
  var BI = Math.ceil, Ga = k.ReactCurrentDispatcher, yf = k.ReactCurrentOwner, Xt = k.ReactCurrentBatchConfig, Me = 0, lt = null, et = null, dt = 0, Lt = 0, $o = cr(0), it = 0, is = null, Gr = 0, Ya = 0, wf = 0, ss = null, Ct = null, xf = 0, Bo = 1 / 0, Hn = null, Ka = !1, _f = null, gr = null, Xa = !1, vr = null, Qa = 0, as = 0, bf = null, Za = -1, Ja = 0;
  function xt() {
    return (Me & 6) !== 0 ? Ue() : Za !== -1 ? Za : Za = Ue();
  }
  function yr(r) {
    return (r.mode & 1) === 0 ? 1 : (Me & 2) !== 0 && dt !== 0 ? dt & -dt : CI.transition !== null ? (Ja === 0 && (Ja = ua()), Ja) : (r = Le, r !== 0 || (r = window.event, r = r === void 0 ? 16 : l0(r.type)), r);
  }
  function un(r, i, c, p) {
    if (50 < as) throw as = 0, bf = null, Error(n(185));
    nr(r, c, p), ((Me & 2) === 0 || r !== lt) && (r === lt && ((Me & 2) === 0 && (Ya |= c), it === 4 && wr(r, dt)), kt(r, p), c === 1 && Me === 0 && (i.mode & 1) === 0 && (Bo = Ue() + 500, Ra && dr()));
  }
  function kt(r, i) {
    var c = r.callbackNode;
    nc(r, i);
    var p = _o(r, r === lt ? dt : 0);
    if (p === 0) c !== null && oa(c), r.callbackNode = null, r.callbackPriority = 0;
    else if (i = p & -p, r.callbackPriority !== i) {
      if (c != null && oa(c), i === 1) r.tag === 0 ? EI(lx.bind(null, r)) : Y0(lx.bind(null, r)), xI(function() {
        (Me & 6) === 0 && dr();
      }), c = null;
      else {
        switch (t0(p)) {
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
        c = vx(c, ux.bind(null, r));
      }
      r.callbackPriority = i, r.callbackNode = c;
    }
  }
  function ux(r, i) {
    if (Za = -1, Ja = 0, (Me & 6) !== 0) throw Error(n(327));
    var c = r.callbackNode;
    if (Vo() && r.callbackNode !== c) return null;
    var p = _o(r, r === lt ? dt : 0);
    if (p === 0) return null;
    if ((p & 30) !== 0 || (p & r.expiredLanes) !== 0 || i) i = eu(r, p);
    else {
      i = p;
      var v = Me;
      Me |= 2;
      var b = fx();
      (lt !== r || dt !== i) && (Hn = null, Bo = Ue() + 500, Kr(r, i));
      do
        try {
          WI();
          break;
        } catch (z) {
          cx(r, z);
        }
      while (!0);
      zc(), Ga.current = b, Me = v, et !== null ? i = 0 : (lt = null, dt = 0, i = it);
    }
    if (i !== 0) {
      if (i === 2 && (v = zr(r), v !== 0 && (p = v, i = Sf(r, v))), i === 1) throw c = is, Kr(r, 0), wr(r, p), kt(r, Ue()), c;
      if (i === 6) wr(r, p);
      else {
        if (v = r.current.alternate, (p & 30) === 0 && !VI(v) && (i = eu(r, p), i === 2 && (b = zr(r), b !== 0 && (p = b, i = Sf(r, b))), i === 1)) throw c = is, Kr(r, 0), wr(r, p), kt(r, Ue()), c;
        switch (r.finishedWork = v, r.finishedLanes = p, i) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Xr(r, Ct, Hn);
            break;
          case 3:
            if (wr(r, p), (p & 130023424) === p && (i = xf + 500 - Ue(), 10 < i)) {
              if (_o(r, 0) !== 0) break;
              if (v = r.suspendedLanes, (v & p) !== p) {
                xt(), r.pingedLanes |= r.suspendedLanes & v;
                break;
              }
              r.timeoutHandle = Nc(Xr.bind(null, r, Ct, Hn), i);
              break;
            }
            Xr(r, Ct, Hn);
            break;
          case 4:
            if (wr(r, p), (p & 4194240) === p) break;
            for (i = r.eventTimes, v = -1; 0 < p; ) {
              var P = 31 - At(p);
              b = 1 << P, P = i[P], P > v && (v = P), p &= ~b;
            }
            if (p = v, p = Ue() - p, p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3e3 > p ? 3e3 : 4320 > p ? 4320 : 1960 * BI(p / 1960)) - p, 10 < p) {
              r.timeoutHandle = Nc(Xr.bind(null, r, Ct, Hn), p);
              break;
            }
            Xr(r, Ct, Hn);
            break;
          case 5:
            Xr(r, Ct, Hn);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return kt(r, Ue()), r.callbackNode === c ? ux.bind(null, r) : null;
  }
  function Sf(r, i) {
    var c = ss;
    return r.current.memoizedState.isDehydrated && (Kr(r, i).flags |= 256), r = eu(r, i), r !== 2 && (i = Ct, Ct = c, i !== null && Ef(i)), r;
  }
  function Ef(r) {
    Ct === null ? Ct = r : Ct.push.apply(Ct, r);
  }
  function VI(r) {
    for (var i = r; ; ) {
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
        if (i === r) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === r) return !0;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return !0;
  }
  function wr(r, i) {
    for (i &= ~wf, i &= ~Ya, r.suspendedLanes |= i, r.pingedLanes &= ~i, r = r.expirationTimes; 0 < i; ) {
      var c = 31 - At(i), p = 1 << c;
      r[c] = -1, i &= ~p;
    }
  }
  function lx(r) {
    if ((Me & 6) !== 0) throw Error(n(327));
    Vo();
    var i = _o(r, 0);
    if ((i & 1) === 0) return kt(r, Ue()), null;
    var c = eu(r, i);
    if (r.tag !== 0 && c === 2) {
      var p = zr(r);
      p !== 0 && (i = p, c = Sf(r, p));
    }
    if (c === 1) throw c = is, Kr(r, 0), wr(r, i), kt(r, Ue()), c;
    if (c === 6) throw Error(n(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = i, Xr(r, Ct, Hn), kt(r, Ue()), null;
  }
  function Cf(r, i) {
    var c = Me;
    Me |= 1;
    try {
      return r(i);
    } finally {
      Me = c, Me === 0 && (Bo = Ue() + 500, Ra && dr());
    }
  }
  function Yr(r) {
    vr !== null && vr.tag === 0 && (Me & 6) === 0 && Vo();
    var i = Me;
    Me |= 1;
    var c = Xt.transition, p = Le;
    try {
      if (Xt.transition = null, Le = 1, r) return r();
    } finally {
      Le = p, Xt.transition = c, Me = i, (Me & 6) === 0 && dr();
    }
  }
  function kf() {
    Lt = $o.current, je($o);
  }
  function Kr(r, i) {
    r.finishedWork = null, r.finishedLanes = 0;
    var c = r.timeoutHandle;
    if (c !== -1 && (r.timeoutHandle = -1, wI(c)), et !== null) for (c = et.return; c !== null; ) {
      var p = c;
      switch (Oc(p), p.tag) {
        case 1:
          p = p.type.childContextTypes, p != null && Ca();
          break;
        case 3:
          jo(), je(bt), je(pt), Gc();
          break;
        case 5:
          Wc(p);
          break;
        case 4:
          jo();
          break;
        case 13:
          je(Ge);
          break;
        case 19:
          je(Ge);
          break;
        case 10:
          Fc(p.type._context);
          break;
        case 22:
        case 23:
          kf();
      }
      c = c.return;
    }
    if (lt = r, et = r = xr(r.current, null), dt = Lt = i, it = 0, is = null, wf = Ya = Gr = 0, Ct = ss = null, Hr !== null) {
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
    return r;
  }
  function cx(r, i) {
    do {
      var c = et;
      try {
        if (zc(), Da.current = $a, ja) {
          for (var p = Ye.memoizedState; p !== null; ) {
            var v = p.queue;
            v !== null && (v.pending = null), p = p.next;
          }
          ja = !1;
        }
        if (Ur = 0, ut = ot = Ye = null, Ji = !1, es = 0, yf.current = null, c === null || c.return === null) {
          it = 1, is = i, et = null;
          break;
        }
        e: {
          var b = r, P = c.return, z = c, U = i;
          if (i = dt, z.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var oe = U, le = z, fe = le.tag;
            if ((le.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var ue = le.alternate;
              ue ? (le.updateQueue = ue.updateQueue, le.memoizedState = ue.memoizedState, le.lanes = ue.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var me = Lw(P);
            if (me !== null) {
              me.flags &= -257, qw(me, P, z, b, i), me.mode & 1 && Ow(b, oe, i), i = me, U = oe;
              var ye = i.updateQueue;
              if (ye === null) {
                var be = /* @__PURE__ */ new Set();
                be.add(U), i.updateQueue = be;
              } else ye.add(U);
              break e;
            } else {
              if ((i & 1) === 0) {
                Ow(b, oe, i), Rf();
                break e;
              }
              U = Error(n(426));
            }
          } else if (ze && z.mode & 1) {
            var Je = Lw(P);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), qw(Je, P, z, b, i), Dc(zo(U, z));
              break e;
            }
          }
          b = U = zo(U, z), it !== 4 && (it = 2), ss === null ? ss = [b] : ss.push(b), b = P;
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
    var r = Ga.current;
    return Ga.current = $a, r === null ? $a : r;
  }
  function Rf() {
    (it === 0 || it === 3 || it === 2) && (it = 4), lt === null || (Gr & 268435455) === 0 && (Ya & 268435455) === 0 || wr(lt, dt);
  }
  function eu(r, i) {
    var c = Me;
    Me |= 2;
    var p = fx();
    (lt !== r || dt !== i) && (Hn = null, Kr(r, i));
    do
      try {
        HI();
        break;
      } catch (v) {
        cx(r, v);
      }
    while (!0);
    if (zc(), Me = c, Ga.current = p, et !== null) throw Error(n(261));
    return lt = null, dt = 0, it;
  }
  function HI() {
    for (; et !== null; ) dx(et);
  }
  function WI() {
    for (; et !== null && !Yl(); ) dx(et);
  }
  function dx(r) {
    var i = gx(r.alternate, r, Lt);
    r.memoizedProps = r.pendingProps, i === null ? hx(r) : et = i, yf.current = null;
  }
  function hx(r) {
    var i = r;
    do {
      var c = i.alternate;
      if (r = i.return, (i.flags & 32768) === 0) {
        if (c = DI(c, i, Lt), c !== null) {
          et = c;
          return;
        }
      } else {
        if (c = jI(c, i), c !== null) {
          c.flags &= 32767, et = c;
          return;
        }
        if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
        else {
          it = 6, et = null;
          return;
        }
      }
      if (i = i.sibling, i !== null) {
        et = i;
        return;
      }
      et = i = r;
    } while (i !== null);
    it === 0 && (it = 5);
  }
  function Xr(r, i, c) {
    var p = Le, v = Xt.transition;
    try {
      Xt.transition = null, Le = 1, UI(r, i, c, p);
    } finally {
      Xt.transition = v, Le = p;
    }
    return null;
  }
  function UI(r, i, c, p) {
    do
      Vo();
    while (vr !== null);
    if ((Me & 6) !== 0) throw Error(n(327));
    c = r.finishedWork;
    var v = r.finishedLanes;
    if (c === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, c === r.current) throw Error(n(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var b = c.lanes | c.childLanes;
    if (kA(r, b), r === lt && (et = lt = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || Xa || (Xa = !0, vx(yo, function() {
      return Vo(), null;
    })), b = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || b) {
      b = Xt.transition, Xt.transition = null;
      var P = Le;
      Le = 1;
      var z = Me;
      Me |= 4, yf.current = null, FI(r, c), rx(c, r), dI(kc), fa = !!Cc, kc = Cc = null, r.current = c, $I(c), ia(), Me = z, Le = P, Xt.transition = b;
    } else r.current = c;
    if (Xa && (Xa = !1, vr = r, Qa = v), b = r.pendingLanes, b === 0 && (gr = null), Ql(c.stateNode), kt(r, Ue()), i !== null) for (p = r.onRecoverableError, c = 0; c < i.length; c++) v = i[c], p(v.value, { componentStack: v.stack, digest: v.digest });
    if (Ka) throw Ka = !1, r = _f, _f = null, r;
    return (Qa & 1) !== 0 && r.tag !== 0 && Vo(), b = r.pendingLanes, (b & 1) !== 0 ? r === bf ? as++ : (as = 0, bf = r) : as = 0, dr(), null;
  }
  function Vo() {
    if (vr !== null) {
      var r = t0(Qa), i = Xt.transition, c = Le;
      try {
        if (Xt.transition = null, Le = 16 > r ? 16 : r, vr === null) var p = !1;
        else {
          if (r = vr, vr = null, Qa = 0, (Me & 6) !== 0) throw Error(n(331));
          var v = Me;
          for (Me |= 4, ve = r.current; ve !== null; ) {
            var b = ve, P = b.child;
            if ((ve.flags & 16) !== 0) {
              var z = b.deletions;
              if (z !== null) {
                for (var U = 0; U < z.length; U++) {
                  var oe = z[U];
                  for (ve = oe; ve !== null; ) {
                    var le = ve;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        os(8, le, b);
                    }
                    var fe = le.child;
                    if (fe !== null) fe.return = le, ve = fe;
                    else for (; ve !== null; ) {
                      le = ve;
                      var ue = le.sibling, me = le.return;
                      if (Zw(le), le === oe) {
                        ve = null;
                        break;
                      }
                      if (ue !== null) {
                        ue.return = me, ve = ue;
                        break;
                      }
                      ve = me;
                    }
                  }
                }
                var ye = b.alternate;
                if (ye !== null) {
                  var be = ye.child;
                  if (be !== null) {
                    ye.child = null;
                    do {
                      var Je = be.sibling;
                      be.sibling = null, be = Je;
                    } while (be !== null);
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
          var J = r.current;
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
                    Ua(9, z);
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
            Wt.onPostCommitFiberRoot(jr, r);
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
  function px(r, i, c) {
    i = zo(c, i), i = Iw(r, i, 1), r = pr(r, i, 1), i = xt(), r !== null && (nr(r, 1, i), kt(r, i));
  }
  function Xe(r, i, c) {
    if (r.tag === 3) px(r, r, c);
    else for (; i !== null; ) {
      if (i.tag === 3) {
        px(i, r, c);
        break;
      } else if (i.tag === 1) {
        var p = i.stateNode;
        if (typeof i.type.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && (gr === null || !gr.has(p))) {
          r = zo(c, r), r = Mw(i, r, 1), i = pr(i, r, 1), r = xt(), i !== null && (nr(i, 1, r), kt(i, r));
          break;
        }
      }
      i = i.return;
    }
  }
  function GI(r, i, c) {
    var p = r.pingCache;
    p !== null && p.delete(i), i = xt(), r.pingedLanes |= r.suspendedLanes & c, lt === r && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > Ue() - xf ? Kr(r, 0) : wf |= c), kt(r, i);
  }
  function mx(r, i) {
    i === 0 && ((r.mode & 1) === 0 ? i = 1 : (i = xo, xo <<= 1, (xo & 130023424) === 0 && (xo = 4194304)));
    var c = xt();
    r = $n(r, i), r !== null && (nr(r, i, c), kt(r, c));
  }
  function YI(r) {
    var i = r.memoizedState, c = 0;
    i !== null && (c = i.retryLane), mx(r, c);
  }
  function KI(r, i) {
    var c = 0;
    switch (r.tag) {
      case 13:
        var p = r.stateNode, v = r.memoizedState;
        v !== null && (c = v.retryLane);
        break;
      case 19:
        p = r.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    p !== null && p.delete(i), mx(r, c);
  }
  var gx;
  gx = function(r, i, c) {
    if (r !== null) if (r.memoizedProps !== i.pendingProps || bt.current) Et = !0;
    else {
      if ((r.lanes & c) === 0 && (i.flags & 128) === 0) return Et = !1, qI(r, i, c);
      Et = (r.flags & 131072) !== 0;
    }
    else Et = !1, ze && (i.flags & 1048576) !== 0 && K0(i, Pa, i.index);
    switch (i.lanes = 0, i.tag) {
      case 2:
        var p = i.type;
        Ha(r, i), r = i.pendingProps;
        var v = Ao(i, pt.current);
        Do(i, c), v = Xc(null, i, p, r, v, c);
        var b = Qc();
        return i.flags |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, St(p) ? (b = !0, ka(i)) : b = !1, i.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Vc(i), v.updater = Ba, i.stateNode = v, v._reactInternals = i, rf(i, p, r, c), i = uf(null, i, p, !0, b, c)) : (i.tag = 0, ze && b && Mc(i), wt(null, i, v, c), i = i.child), i;
      case 16:
        p = i.elementType;
        e: {
          switch (Ha(r, i), r = i.pendingProps, v = p._init, p = v(p._payload), i.type = p, v = i.tag = QI(p), r = on(p, r), v) {
            case 0:
              i = af(null, i, p, r, c);
              break e;
            case 1:
              i = Bw(null, i, p, r, c);
              break e;
            case 11:
              i = Dw(null, i, p, r, c);
              break e;
            case 14:
              i = jw(null, i, p, on(p.type, r), c);
              break e;
          }
          throw Error(n(
            306,
            p,
            ""
          ));
        }
        return i;
      case 0:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), af(r, i, p, v, c);
      case 1:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Bw(r, i, p, v, c);
      case 3:
        e: {
          if (Vw(i), r === null) throw Error(n(387));
          p = i.pendingProps, b = i.memoizedState, v = b.element, ow(r, i), La(i, p, null, c);
          var P = i.memoizedState;
          if (p = P.element, b.isDehydrated) if (b = { element: p, isDehydrated: !1, cache: P.cache, pendingSuspenseBoundaries: P.pendingSuspenseBoundaries, transitions: P.transitions }, i.updateQueue.baseState = b, i.memoizedState = b, i.flags & 256) {
            v = zo(Error(n(423)), i), i = Hw(r, i, p, c, v);
            break e;
          } else if (p !== v) {
            v = zo(Error(n(424)), i), i = Hw(r, i, p, c, v);
            break e;
          } else for (Ot = lr(i.stateNode.containerInfo.firstChild), Mt = i, ze = !0, rn = null, c = nw(i, null, p, c), i.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if (Oo(), p === v) {
              i = Vn(r, i, c);
              break e;
            }
            wt(r, i, p, c);
          }
          i = i.child;
        }
        return i;
      case 5:
        return aw(i), r === null && qc(i), p = i.type, v = i.pendingProps, b = r !== null ? r.memoizedProps : null, P = v.children, Rc(p, v) ? P = null : b !== null && Rc(p, b) && (i.flags |= 32), $w(r, i), wt(r, i, P, c), i.child;
      case 6:
        return r === null && qc(i), null;
      case 13:
        return Ww(r, i, c);
      case 4:
        return Hc(i, i.stateNode.containerInfo), p = i.pendingProps, r === null ? i.child = Lo(i, null, p, c) : wt(r, i, p, c), i.child;
      case 11:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Dw(r, i, p, v, c);
      case 7:
        return wt(r, i, i.pendingProps, c), i.child;
      case 8:
        return wt(r, i, i.pendingProps.children, c), i.child;
      case 12:
        return wt(r, i, i.pendingProps.children, c), i.child;
      case 10:
        e: {
          if (p = i.type._context, v = i.pendingProps, b = i.memoizedProps, P = v.value, qe(Ia, p._currentValue), p._currentValue = P, b !== null) if (nn(b.value, P)) {
            if (b.children === v.children && !bt.current) {
              i = Vn(r, i, c);
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
                      var le = oe.pending;
                      le === null ? U.next = U : (U.next = le.next, le.next = U), oe.pending = U;
                    }
                  }
                  b.lanes |= c, U = b.alternate, U !== null && (U.lanes |= c), $c(
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
              if (P = b.return, P === null) throw Error(n(341));
              P.lanes |= c, z = P.alternate, z !== null && (z.lanes |= c), $c(P, c, i), P = b.sibling;
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
          wt(r, i, v.children, c), i = i.child;
        }
        return i;
      case 9:
        return v = i.type, p = i.pendingProps.children, Do(i, c), v = Yt(v), p = p(v), i.flags |= 1, wt(r, i, p, c), i.child;
      case 14:
        return p = i.type, v = on(p, i.pendingProps), v = on(p.type, v), jw(r, i, p, v, c);
      case 15:
        return zw(r, i, i.type, i.pendingProps, c);
      case 17:
        return p = i.type, v = i.pendingProps, v = i.elementType === p ? v : on(p, v), Ha(r, i), i.tag = 1, St(p) ? (r = !0, ka(i)) : r = !1, Do(i, c), Tw(i, p, v), rf(i, p, v, c), uf(null, i, p, !0, r, c);
      case 19:
        return Gw(r, i, c);
      case 22:
        return Fw(r, i, c);
    }
    throw Error(n(156, i.tag));
  };
  function vx(r, i) {
    return ra(r, i);
  }
  function XI(r, i, c, p) {
    this.tag = r, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = p, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(r, i, c, p) {
    return new XI(r, i, c, p);
  }
  function Nf(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function QI(r) {
    if (typeof r == "function") return Nf(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === V) return 11;
      if (r === H) return 14;
    }
    return 2;
  }
  function xr(r, i) {
    var c = r.alternate;
    return c === null ? (c = Qt(r.tag, i, r.key, r.mode), c.elementType = r.elementType, c.type = r.type, c.stateNode = r.stateNode, c.alternate = r, r.alternate = c) : (c.pendingProps = i, c.type = r.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = r.flags & 14680064, c.childLanes = r.childLanes, c.lanes = r.lanes, c.child = r.child, c.memoizedProps = r.memoizedProps, c.memoizedState = r.memoizedState, c.updateQueue = r.updateQueue, i = r.dependencies, c.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, c.sibling = r.sibling, c.index = r.index, c.ref = r.ref, c;
  }
  function tu(r, i, c, p, v, b) {
    var P = 2;
    if (p = r, typeof r == "function") Nf(r) && (P = 1);
    else if (typeof r == "string") P = 5;
    else e: switch (r) {
      case A:
        return Qr(c.children, v, b, i);
      case O:
        P = 8, v |= 8;
        break;
      case D:
        return r = Qt(12, c, i, v | 2), r.elementType = D, r.lanes = b, r;
      case X:
        return r = Qt(13, c, i, v), r.elementType = X, r.lanes = b, r;
      case L:
        return r = Qt(19, c, i, v), r.elementType = L, r.lanes = b, r;
      case Y:
        return nu(c, v, b, i);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
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
        throw Error(n(130, r == null ? r : typeof r, ""));
    }
    return i = Qt(P, c, i, v), i.elementType = r, i.type = p, i.lanes = b, i;
  }
  function Qr(r, i, c, p) {
    return r = Qt(7, r, p, i), r.lanes = c, r;
  }
  function nu(r, i, c, p) {
    return r = Qt(22, r, p, i), r.elementType = Y, r.lanes = c, r.stateNode = { isHidden: !1 }, r;
  }
  function Pf(r, i, c) {
    return r = Qt(6, r, null, i), r.lanes = c, r;
  }
  function Tf(r, i, c) {
    return i = Qt(4, r.children !== null ? r.children : [], r.key, i), i.lanes = c, i.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, i;
  }
  function ZI(r, i, c, p, v) {
    this.tag = i, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ai(0), this.expirationTimes = Ai(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ai(0), this.identifierPrefix = p, this.onRecoverableError = v, this.mutableSourceEagerHydrationData = null;
  }
  function Af(r, i, c, p, v, b, P, z, U) {
    return r = new ZI(r, i, c, z, U), i === 1 ? (i = 1, b === !0 && (i |= 8)) : i = 0, b = Qt(3, null, null, i), r.current = b, b.stateNode = r, b.memoizedState = { element: p, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vc(b), r;
  }
  function JI(r, i, c) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: p == null ? null : "" + p, children: r, containerInfo: i, implementation: c };
  }
  function yx(r) {
    if (!r) return fr;
    r = r._reactInternals;
    e: {
      if (xn(r) !== r || r.tag !== 1) throw Error(n(170));
      var i = r;
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
      throw Error(n(171));
    }
    if (r.tag === 1) {
      var c = r.type;
      if (St(c)) return U0(r, c, i);
    }
    return i;
  }
  function wx(r, i, c, p, v, b, P, z, U) {
    return r = Af(c, p, !0, r, v, b, P, z, U), r.context = yx(null), c = r.current, p = xt(), v = yr(c), b = Bn(p, v), b.callback = i ?? null, pr(c, b, v), r.current.lanes = v, nr(r, v, p), kt(r, p), r;
  }
  function ru(r, i, c, p) {
    var v = i.current, b = xt(), P = yr(v);
    return c = yx(c), i.context === null ? i.context = c : i.pendingContext = c, i = Bn(b, P), i.payload = { element: r }, p = p === void 0 ? null : p, p !== null && (i.callback = p), r = pr(v, i, P), r !== null && (un(r, v, P, b), Oa(r, v, P)), P;
  }
  function ou(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function xx(r, i) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var c = r.retryLane;
      r.retryLane = c !== 0 && c < i ? c : i;
    }
  }
  function If(r, i) {
    xx(r, i), (r = r.alternate) && xx(r, i);
  }
  function e2() {
    return null;
  }
  var _x = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function Mf(r) {
    this._internalRoot = r;
  }
  iu.prototype.render = Mf.prototype.render = function(r) {
    var i = this._internalRoot;
    if (i === null) throw Error(n(409));
    ru(r, i, null, null);
  }, iu.prototype.unmount = Mf.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var i = r.containerInfo;
      Yr(function() {
        ru(null, r, null, null);
      }), i[Dn] = null;
    }
  };
  function iu(r) {
    this._internalRoot = r;
  }
  iu.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var i = o0();
      r = { blockedOn: null, target: r, priority: i };
      for (var c = 0; c < sr.length && i !== 0 && i < sr[c].priority; c++) ;
      sr.splice(c, 0, r), c === 0 && a0(r);
    }
  };
  function Of(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function su(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function bx() {
  }
  function t2(r, i, c, p, v) {
    if (v) {
      if (typeof p == "function") {
        var b = p;
        p = function() {
          var oe = ou(P);
          b.call(oe);
        };
      }
      var P = wx(i, p, r, 0, null, !1, !1, "", bx);
      return r._reactRootContainer = P, r[Dn] = P.current, Wi(r.nodeType === 8 ? r.parentNode : r), Yr(), P;
    }
    for (; v = r.lastChild; ) r.removeChild(v);
    if (typeof p == "function") {
      var z = p;
      p = function() {
        var oe = ou(U);
        z.call(oe);
      };
    }
    var U = Af(r, 0, !1, null, null, !1, !1, "", bx);
    return r._reactRootContainer = U, r[Dn] = U.current, Wi(r.nodeType === 8 ? r.parentNode : r), Yr(function() {
      ru(i, U, c, p);
    }), U;
  }
  function au(r, i, c, p, v) {
    var b = c._reactRootContainer;
    if (b) {
      var P = b;
      if (typeof v == "function") {
        var z = v;
        v = function() {
          var U = ou(P);
          z.call(U);
        };
      }
      ru(i, P, r, v);
    } else P = t2(c, i, r, v, p);
    return ou(P);
  }
  n0 = function(r) {
    switch (r.tag) {
      case 3:
        var i = r.stateNode;
        if (i.current.memoizedState.isDehydrated) {
          var c = _n(i.pendingLanes);
          c !== 0 && (rc(i, c | 1), kt(i, Ue()), (Me & 6) === 0 && (Bo = Ue() + 500, dr()));
        }
        break;
      case 13:
        Yr(function() {
          var p = $n(r, 1);
          if (p !== null) {
            var v = xt();
            un(p, r, 1, v);
          }
        }), If(r, 1);
    }
  }, oc = function(r) {
    if (r.tag === 13) {
      var i = $n(r, 134217728);
      if (i !== null) {
        var c = xt();
        un(i, r, 134217728, c);
      }
      If(r, 134217728);
    }
  }, r0 = function(r) {
    if (r.tag === 13) {
      var i = yr(r), c = $n(r, i);
      if (c !== null) {
        var p = xt();
        un(c, r, i, p);
      }
      If(r, i);
    }
  }, o0 = function() {
    return Le;
  }, i0 = function(r, i) {
    var c = Le;
    try {
      return Le = r, i();
    } finally {
      Le = c;
    }
  }, Ei = function(r, i, c) {
    switch (i) {
      case "input":
        if (Ee(r, c), i = c.name, c.type === "radio" && i != null) {
          for (c = r; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < c.length; i++) {
            var p = c[i];
            if (p !== r && p.form === r.form) {
              var v = Ea(p);
              if (!v) throw Error(n(90));
              de(p), Ee(p, v);
            }
          }
        }
        break;
      case "textarea":
        en(r, c);
        break;
      case "select":
        i = c.value, i != null && ht(r, !!c.multiple, i, !1);
    }
  }, Zs = Cf, Js = Yr;
  var n2 = { usingClientEntryPoint: !1, Events: [Yi, Po, Ea, Xs, Qs, Cf] }, us = { findFiberByHostInstance: Fr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, r2 = { bundleType: us.bundleType, version: us.version, rendererPackageName: us.rendererPackageName, rendererConfig: us.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: k.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
    return r = ta(r), r === null ? null : r.stateNode;
  }, findFiberByHostInstance: us.findFiberByHostInstance || e2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uu.isDisabled && uu.supportsFiber) try {
      jr = uu.inject(r2), Wt = uu;
    } catch {
    }
  }
  return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n2, Rt.createPortal = function(r, i) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Of(i)) throw Error(n(200));
    return JI(r, i, null, c);
  }, Rt.createRoot = function(r, i) {
    if (!Of(r)) throw Error(n(299));
    var c = !1, p = "", v = _x;
    return i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (p = i.identifierPrefix), i.onRecoverableError !== void 0 && (v = i.onRecoverableError)), i = Af(r, 1, !1, null, null, c, !1, p, v), r[Dn] = i.current, Wi(r.nodeType === 8 ? r.parentNode : r), new Mf(i);
  }, Rt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var i = r._reactInternals;
    if (i === void 0)
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    return r = ta(i), r = r === null ? null : r.stateNode, r;
  }, Rt.flushSync = function(r) {
    return Yr(r);
  }, Rt.hydrate = function(r, i, c) {
    if (!su(i)) throw Error(n(200));
    return au(null, r, i, !0, c);
  }, Rt.hydrateRoot = function(r, i, c) {
    if (!Of(r)) throw Error(n(405));
    var p = c != null && c.hydratedSources || null, v = !1, b = "", P = _x;
    if (c != null && (c.unstable_strictMode === !0 && (v = !0), c.identifierPrefix !== void 0 && (b = c.identifierPrefix), c.onRecoverableError !== void 0 && (P = c.onRecoverableError)), i = wx(i, null, r, 1, c ?? null, v, !1, b, P), r[Dn] = i.current, Wi(r), p) for (r = 0; r < p.length; r++) c = p[r], v = c._getVersion, v = v(c._source), i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [c, v] : i.mutableSourceEagerHydrationData.push(
      c,
      v
    );
    return new iu(i);
  }, Rt.render = function(r, i, c) {
    if (!su(i)) throw Error(n(200));
    return au(null, r, i, !1, c);
  }, Rt.unmountComponentAtNode = function(r) {
    if (!su(r)) throw Error(n(40));
    return r._reactRootContainer ? (Yr(function() {
      au(null, null, r, !1, function() {
        r._reactRootContainer = null, r[Dn] = null;
      });
    }), !0) : !1;
  }, Rt.unstable_batchedUpdates = Cf, Rt.unstable_renderSubtreeIntoContainer = function(r, i, c, p) {
    if (!su(c)) throw Error(n(200));
    if (r == null || r._reactInternals === void 0) throw Error(n(38));
    return au(r, i, c, !1, p);
  }, Rt.version = "18.3.1-next-f1338f8080-20240426", Rt;
}
var Tx;
function Bk() {
  if (Tx) return jf.exports;
  Tx = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), jf.exports = h2(), jf.exports;
}
var Ax;
function p2() {
  if (Ax) return cu;
  Ax = 1;
  var e = Bk();
  return cu.createRoot = e.createRoot, cu.hydrateRoot = e.hydrateRoot, cu;
}
var m2 = p2();
let Vk = R.createContext(
  /** @type {any} */
  null
);
function g2() {
  let e = R.useContext(Vk);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function v2() {
  return g2().model;
}
function $f(e) {
  let t = v2(), n = R.useSyncExternalStore(
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
  return [n, o];
}
function y2(e) {
  return ({ el: t, model: n, experimental: o }) => {
    let s = m2.createRoot(t);
    return s.render(
      R.createElement(
        R.StrictMode,
        null,
        R.createElement(
          Vk.Provider,
          { value: { model: n, experimental: o } },
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
    for (let n = 0, o; n < e.length; n++)
      (o = nt(e[n])) !== "" && (t += (t && " ") + o);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var w2 = { value: () => {
} };
function nl() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Nu(n);
}
function Nu(e) {
  this._ = e;
}
function x2(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", s = n.indexOf(".");
    if (s >= 0 && (o = n.slice(s + 1), n = n.slice(0, s)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Nu.prototype = nl.prototype = {
  constructor: Nu,
  on: function(e, t) {
    var n = this._, o = x2(e + "", n), s, a = -1, u = o.length;
    if (arguments.length < 2) {
      for (; ++a < u; ) if ((s = (e = o[a]).type) && (s = _2(n[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < u; )
      if (s = (e = o[a]).type) n[s] = Ix(n[s], e.name, t);
      else if (t == null) for (s in n) n[s] = Ix(n[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Nu(e);
  },
  call: function(e, t) {
    if ((s = arguments.length - 2) > 0) for (var n = new Array(s), o = 0, s, a; o < s; ++o) n[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], o = 0, s = a.length; o < s; ++o) a[o].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var o = this._[e], s = 0, a = o.length; s < a; ++s) o[s].value.apply(t, n);
  }
};
function _2(e, t) {
  for (var n = 0, o = e.length, s; n < o; ++n)
    if ((s = e[n]).name === t)
      return s.value;
}
function Ix(e, t, n) {
  for (var o = 0, s = e.length; o < s; ++o)
    if (e[o].name === t) {
      e[o] = w2, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Pv = "http://www.w3.org/1999/xhtml";
const Mx = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pv,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function rl(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Mx.hasOwnProperty(t) ? { space: Mx[t], local: e } : e;
}
function b2(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Pv && t.documentElement.namespaceURI === Pv ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function S2(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Hk(e) {
  var t = rl(e);
  return (t.local ? S2 : b2)(t);
}
function E2() {
}
function ry(e) {
  return e == null ? E2 : function() {
    return this.querySelector(e);
  };
}
function C2(e) {
  typeof e != "function" && (e = ry(e));
  for (var t = this._groups, n = t.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = t[s], u = a.length, l = o[s] = new Array(u), f, d, h = 0; h < u; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), l[h] = d);
  return new zt(o, this._parents);
}
function k2(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function R2() {
  return [];
}
function Wk(e) {
  return e == null ? R2 : function() {
    return this.querySelectorAll(e);
  };
}
function N2(e) {
  return function() {
    return k2(e.apply(this, arguments));
  };
}
function P2(e) {
  typeof e == "function" ? e = N2(e) : e = Wk(e);
  for (var t = this._groups, n = t.length, o = [], s = [], a = 0; a < n; ++a)
    for (var u = t[a], l = u.length, f, d = 0; d < l; ++d)
      (f = u[d]) && (o.push(e.call(f, f.__data__, d, u)), s.push(f));
  return new zt(o, s);
}
function Uk(e) {
  return function() {
    return this.matches(e);
  };
}
function Gk(e) {
  return function(t) {
    return t.matches(e);
  };
}
var T2 = Array.prototype.find;
function A2(e) {
  return function() {
    return T2.call(this.children, e);
  };
}
function I2() {
  return this.firstElementChild;
}
function M2(e) {
  return this.select(e == null ? I2 : A2(typeof e == "function" ? e : Gk(e)));
}
var O2 = Array.prototype.filter;
function L2() {
  return Array.from(this.children);
}
function q2(e) {
  return function() {
    return O2.call(this.children, e);
  };
}
function D2(e) {
  return this.selectAll(e == null ? L2 : q2(typeof e == "function" ? e : Gk(e)));
}
function j2(e) {
  typeof e != "function" && (e = Uk(e));
  for (var t = this._groups, n = t.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = t[s], u = a.length, l = o[s] = [], f, d = 0; d < u; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && l.push(f);
  return new zt(o, this._parents);
}
function Yk(e) {
  return new Array(e.length);
}
function z2() {
  return new zt(this._enter || this._groups.map(Yk), this._parents);
}
function qu(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
qu.prototype = {
  constructor: qu,
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
function F2(e) {
  return function() {
    return e;
  };
}
function $2(e, t, n, o, s, a) {
  for (var u = 0, l, f = t.length, d = a.length; u < d; ++u)
    (l = t[u]) ? (l.__data__ = a[u], o[u] = l) : n[u] = new qu(e, a[u]);
  for (; u < f; ++u)
    (l = t[u]) && (s[u] = l);
}
function B2(e, t, n, o, s, a, u) {
  var l, f, d = /* @__PURE__ */ new Map(), h = t.length, m = a.length, g = new Array(h), w;
  for (l = 0; l < h; ++l)
    (f = t[l]) && (g[l] = w = u.call(f, f.__data__, l, t) + "", d.has(w) ? s[l] = f : d.set(w, f));
  for (l = 0; l < m; ++l)
    w = u.call(e, a[l], l, a) + "", (f = d.get(w)) ? (o[l] = f, f.__data__ = a[l], d.delete(w)) : n[l] = new qu(e, a[l]);
  for (l = 0; l < h; ++l)
    (f = t[l]) && d.get(g[l]) === f && (s[l] = f);
}
function V2(e) {
  return e.__data__;
}
function H2(e, t) {
  if (!arguments.length) return Array.from(this, V2);
  var n = t ? B2 : $2, o = this._parents, s = this._groups;
  typeof e != "function" && (e = F2(e));
  for (var a = s.length, u = new Array(a), l = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], m = s[d], g = m.length, w = W2(e.call(h, h && h.__data__, d, o)), E = w.length, y = l[d] = new Array(E), x = u[d] = new Array(E), S = f[d] = new Array(g);
    n(h, m, y, x, S, w, t);
    for (var C = 0, _ = 0, k, N; C < E; ++C)
      if (k = y[C]) {
        for (C >= _ && (_ = C + 1); !(N = x[_]) && ++_ < E; ) ;
        k._next = N || null;
      }
  }
  return u = new zt(u, o), u._enter = l, u._exit = f, u;
}
function W2(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function U2() {
  return new zt(this._exit || this._groups.map(Yk), this._parents);
}
function G2(e, t, n) {
  var o = this.enter(), s = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), n == null ? a.remove() : n(a), o && s ? o.merge(s).order() : s;
}
function Y2(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, s = n.length, a = o.length, u = Math.min(s, a), l = new Array(s), f = 0; f < u; ++f)
    for (var d = n[f], h = o[f], m = d.length, g = l[f] = new Array(m), w, E = 0; E < m; ++E)
      (w = d[E] || h[E]) && (g[E] = w);
  for (; f < s; ++f)
    l[f] = n[f];
  return new zt(l, this._parents);
}
function K2() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], s = o.length - 1, a = o[s], u; --s >= 0; )
      (u = o[s]) && (a && u.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(u, a), a = u);
  return this;
}
function X2(e) {
  e || (e = Q2);
  function t(m, g) {
    return m && g ? e(m.__data__, g.__data__) : !m - !g;
  }
  for (var n = this._groups, o = n.length, s = new Array(o), a = 0; a < o; ++a) {
    for (var u = n[a], l = u.length, f = s[a] = new Array(l), d, h = 0; h < l; ++h)
      (d = u[h]) && (f[h] = d);
    f.sort(t);
  }
  return new zt(s, this._parents).order();
}
function Q2(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Z2() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function J2() {
  return Array.from(this);
}
function eM() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], s = 0, a = o.length; s < a; ++s) {
      var u = o[s];
      if (u) return u;
    }
  return null;
}
function tM() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function nM() {
  return !this.node();
}
function rM(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var s = t[n], a = 0, u = s.length, l; a < u; ++a)
      (l = s[a]) && e.call(l, l.__data__, a, s);
  return this;
}
function oM(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function iM(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function sM(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function aM(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function uM(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function lM(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function cM(e, t) {
  var n = rl(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? iM : oM : typeof t == "function" ? n.local ? lM : uM : n.local ? aM : sM)(n, t));
}
function Kk(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function fM(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function dM(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function hM(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function pM(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? fM : typeof t == "function" ? hM : dM)(e, t, n ?? "")) : ni(this.node(), e);
}
function ni(e, t) {
  return e.style.getPropertyValue(t) || Kk(e).getComputedStyle(e, null).getPropertyValue(t);
}
function mM(e) {
  return function() {
    delete this[e];
  };
}
function gM(e, t) {
  return function() {
    this[e] = t;
  };
}
function vM(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function yM(e, t) {
  return arguments.length > 1 ? this.each((t == null ? mM : typeof t == "function" ? vM : gM)(e, t)) : this.node()[e];
}
function Xk(e) {
  return e.trim().split(/^|\s+/);
}
function oy(e) {
  return e.classList || new Qk(e);
}
function Qk(e) {
  this._node = e, this._names = Xk(e.getAttribute("class") || "");
}
Qk.prototype = {
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
function Zk(e, t) {
  for (var n = oy(e), o = -1, s = t.length; ++o < s; ) n.add(t[o]);
}
function Jk(e, t) {
  for (var n = oy(e), o = -1, s = t.length; ++o < s; ) n.remove(t[o]);
}
function wM(e) {
  return function() {
    Zk(this, e);
  };
}
function xM(e) {
  return function() {
    Jk(this, e);
  };
}
function _M(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zk : Jk)(this, e);
  };
}
function bM(e, t) {
  var n = Xk(e + "");
  if (arguments.length < 2) {
    for (var o = oy(this.node()), s = -1, a = n.length; ++s < a; ) if (!o.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? _M : t ? wM : xM)(n, t));
}
function SM() {
  this.textContent = "";
}
function EM(e) {
  return function() {
    this.textContent = e;
  };
}
function CM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function kM(e) {
  return arguments.length ? this.each(e == null ? SM : (typeof e == "function" ? CM : EM)(e)) : this.node().textContent;
}
function RM() {
  this.innerHTML = "";
}
function NM(e) {
  return function() {
    this.innerHTML = e;
  };
}
function PM(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function TM(e) {
  return arguments.length ? this.each(e == null ? RM : (typeof e == "function" ? PM : NM)(e)) : this.node().innerHTML;
}
function AM() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function IM() {
  return this.each(AM);
}
function MM() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function OM() {
  return this.each(MM);
}
function LM(e) {
  var t = typeof e == "function" ? e : Hk(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function qM() {
  return null;
}
function DM(e, t) {
  var n = typeof e == "function" ? e : Hk(e), o = t == null ? qM : typeof t == "function" ? t : ry(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function jM() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function zM() {
  return this.each(jM);
}
function FM() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $M() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function BM(e) {
  return this.select(e ? $M : FM);
}
function VM(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function HM(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function WM(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function UM(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, s = t.length, a; n < s; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function GM(e, t, n) {
  return function() {
    var o = this.__on, s, a = HM(t);
    if (o) {
      for (var u = 0, l = o.length; u < l; ++u)
        if ((s = o[u]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = a, s.options = n), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, n), s = { type: e.type, name: e.name, value: t, listener: a, options: n }, o ? o.push(s) : this.__on = [s];
  };
}
function YM(e, t, n) {
  var o = WM(e + ""), s, a = o.length, u;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var f = 0, d = l.length, h; f < d; ++f)
        for (s = 0, h = l[f]; s < a; ++s)
          if ((u = o[s]).type === h.type && u.name === h.name)
            return h.value;
    }
    return;
  }
  for (l = t ? GM : UM, s = 0; s < a; ++s) this.each(l(o[s], t, n));
  return this;
}
function eR(e, t, n) {
  var o = Kk(e), s = o.CustomEvent;
  typeof s == "function" ? s = new s(t, n) : (s = o.document.createEvent("Event"), n ? (s.initEvent(t, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function KM(e, t) {
  return function() {
    return eR(this, e, t);
  };
}
function XM(e, t) {
  return function() {
    return eR(this, e, t.apply(this, arguments));
  };
}
function QM(e, t) {
  return this.each((typeof t == "function" ? XM : KM)(e, t));
}
function* ZM() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], s = 0, a = o.length, u; s < a; ++s)
      (u = o[s]) && (yield u);
}
var tR = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Ls() {
  return new zt([[document.documentElement]], tR);
}
function JM() {
  return this;
}
zt.prototype = Ls.prototype = {
  constructor: zt,
  select: C2,
  selectAll: P2,
  selectChild: M2,
  selectChildren: D2,
  filter: j2,
  data: H2,
  enter: z2,
  exit: U2,
  join: G2,
  merge: Y2,
  selection: JM,
  order: K2,
  sort: X2,
  call: Z2,
  nodes: J2,
  node: eM,
  size: tM,
  empty: nM,
  each: rM,
  attr: cM,
  style: pM,
  property: yM,
  classed: bM,
  text: kM,
  html: TM,
  raise: IM,
  lower: OM,
  append: LM,
  insert: DM,
  remove: zM,
  clone: BM,
  datum: VM,
  on: YM,
  dispatch: QM,
  [Symbol.iterator]: ZM
};
function Dt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], tR);
}
function eO(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function fn(e, t) {
  if (e = eO(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var o = n.createSVGPoint();
      return o.x = e.clientX, o.y = e.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var s = t.getBoundingClientRect();
      return [e.clientX - s.left - t.clientLeft, e.clientY - s.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const tO = { passive: !1 }, _s = { capture: !0, passive: !1 };
function Bf(e) {
  e.stopImmediatePropagation();
}
function Zo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function nR(e) {
  var t = e.document.documentElement, n = Dt(e).on("dragstart.drag", Zo, _s);
  "onselectstart" in t ? n.on("selectstart.drag", Zo, _s) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function rR(e, t) {
  var n = e.document.documentElement, o = Dt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", Zo, _s), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const fu = (e) => () => e;
function Tv(e, {
  sourceEvent: t,
  subject: n,
  target: o,
  identifier: s,
  active: a,
  x: u,
  y: l,
  dx: f,
  dy: d,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: u, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: f, enumerable: !0, configurable: !0 },
    dy: { value: d, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
Tv.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function nO(e) {
  return !e.ctrlKey && !e.button;
}
function rO() {
  return this.parentNode;
}
function oO(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function iO() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function oR() {
  var e = nO, t = rO, n = oO, o = iO, s = {}, a = nl("start", "drag", "end"), u = 0, l, f, d, h, m = 0;
  function g(k) {
    k.on("mousedown.drag", w).filter(o).on("touchstart.drag", x).on("touchmove.drag", S, tO).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function w(k, N) {
    if (!(h || !e.call(this, k, N))) {
      var T = _(this, t.call(this, k, N), k, N, "mouse");
      T && (Dt(k.view).on("mousemove.drag", E, _s).on("mouseup.drag", y, _s), nR(k.view), Bf(k), d = !1, l = k.clientX, f = k.clientY, T("start", k));
    }
  }
  function E(k) {
    if (Zo(k), !d) {
      var N = k.clientX - l, T = k.clientY - f;
      d = N * N + T * T > m;
    }
    s.mouse("drag", k);
  }
  function y(k) {
    Dt(k.view).on("mousemove.drag mouseup.drag", null), rR(k.view, d), Zo(k), s.mouse("end", k);
  }
  function x(k, N) {
    if (e.call(this, k, N)) {
      var T = k.changedTouches, A = t.call(this, k, N), O = T.length, D, G;
      for (D = 0; D < O; ++D)
        (G = _(this, A, k, N, T[D].identifier, T[D])) && (Bf(k), G("start", k, T[D]));
    }
  }
  function S(k) {
    var N = k.changedTouches, T = N.length, A, O;
    for (A = 0; A < T; ++A)
      (O = s[N[A].identifier]) && (Zo(k), O("drag", k, N[A]));
  }
  function C(k) {
    var N = k.changedTouches, T = N.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (O = s[N[A].identifier]) && (Bf(k), O("end", k, N[A]));
  }
  function _(k, N, T, A, O, D) {
    var G = a.copy(), B = fn(D || T, N), V, X, L;
    if ((L = n.call(k, new Tv("beforestart", {
      sourceEvent: T,
      target: g,
      identifier: O,
      active: u,
      x: B[0],
      y: B[1],
      dx: 0,
      dy: 0,
      dispatch: G
    }), A)) != null)
      return V = L.x - B[0] || 0, X = L.y - B[1] || 0, function H($, Y, I) {
        var j = B, Q;
        switch ($) {
          case "start":
            s[O] = H, Q = u++;
            break;
          case "end":
            delete s[O], --u;
          // falls through
          case "drag":
            B = fn(I || Y, N), Q = u;
            break;
        }
        G.call(
          $,
          k,
          new Tv($, {
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
    return arguments.length ? (e = typeof k == "function" ? k : fu(!!k), g) : e;
  }, g.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : fu(k), g) : t;
  }, g.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : fu(k), g) : n;
  }, g.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : fu(!!k), g) : o;
  }, g.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? g : k;
  }, g.clickDistance = function(k) {
    return arguments.length ? (m = (k = +k) * k, g) : Math.sqrt(m);
  }, g;
}
function iy(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function iR(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function qs() {
}
var bs = 0.7, Du = 1 / bs, Jo = "\\s*([+-]?\\d+)\\s*", Ss = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", sO = /^#([0-9a-f]{3,8})$/, aO = new RegExp(`^rgb\\(${Jo},${Jo},${Jo}\\)$`), uO = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), lO = new RegExp(`^rgba\\(${Jo},${Jo},${Jo},${Ss}\\)$`), cO = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Ss}\\)$`), fO = new RegExp(`^hsl\\(${Ss},${Pn},${Pn}\\)$`), dO = new RegExp(`^hsla\\(${Ss},${Pn},${Pn},${Ss}\\)$`), Ox = {
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
iy(qs, ro, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Lx,
  // Deprecated! Use color.formatHex.
  formatHex: Lx,
  formatHex8: hO,
  formatHsl: pO,
  formatRgb: qx,
  toString: qx
});
function Lx() {
  return this.rgb().formatHex();
}
function hO() {
  return this.rgb().formatHex8();
}
function pO() {
  return sR(this).formatHsl();
}
function qx() {
  return this.rgb().formatRgb();
}
function ro(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = sO.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Dx(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? du(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? du(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = aO.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = uO.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lO.exec(e)) ? du(t[1], t[2], t[3], t[4]) : (t = cO.exec(e)) ? du(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = fO.exec(e)) ? Fx(t[1], t[2] / 100, t[3] / 100, 1) : (t = dO.exec(e)) ? Fx(t[1], t[2] / 100, t[3] / 100, t[4]) : Ox.hasOwnProperty(e) ? Dx(Ox[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function Dx(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function du(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Nt(e, t, n, o);
}
function mO(e) {
  return e instanceof qs || (e = ro(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function Av(e, t, n, o) {
  return arguments.length === 1 ? mO(e) : new Nt(e, t, n, o ?? 1);
}
function Nt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
iy(Nt, Av, iR(qs, {
  brighter(e) {
    return e = e == null ? Du : Math.pow(Du, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(to(this.r), to(this.g), to(this.b), ju(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: jx,
  // Deprecated! Use color.formatHex.
  formatHex: jx,
  formatHex8: gO,
  formatRgb: zx,
  toString: zx
}));
function jx() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}`;
}
function gO() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}${eo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function zx() {
  const e = ju(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${to(this.r)}, ${to(this.g)}, ${to(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ju(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function to(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function eo(e) {
  return e = to(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Fx(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dn(e, t, n, o);
}
function sR(e) {
  if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof qs || (e = ro(e)), !e) return new dn();
  if (e instanceof dn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, s = Math.min(t, n, o), a = Math.max(t, n, o), u = NaN, l = a - s, f = (a + s) / 2;
  return l ? (t === a ? u = (n - o) / l + (n < o) * 6 : n === a ? u = (o - t) / l + 2 : u = (t - n) / l + 4, l /= f < 0.5 ? a + s : 2 - a - s, u *= 60) : l = f > 0 && f < 1 ? 0 : u, new dn(u, l, f, e.opacity);
}
function vO(e, t, n, o) {
  return arguments.length === 1 ? sR(e) : new dn(e, t, n, o ?? 1);
}
function dn(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
iy(dn, vO, iR(qs, {
  brighter(e) {
    return e = e == null ? Du : Math.pow(Du, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - o;
    return new Nt(
      Vf(e >= 240 ? e - 240 : e + 120, s, o),
      Vf(e, s, o),
      Vf(e < 120 ? e + 240 : e - 120, s, o),
      this.opacity
    );
  },
  clamp() {
    return new dn($x(this.h), hu(this.s), hu(this.l), ju(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ju(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${$x(this.h)}, ${hu(this.s) * 100}%, ${hu(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function $x(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function hu(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Vf(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const sy = (e) => () => e;
function yO(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function wO(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function xO(e) {
  return (e = +e) == 1 ? aR : function(t, n) {
    return n - t ? wO(t, n, e) : sy(isNaN(t) ? n : t);
  };
}
function aR(e, t) {
  var n = t - e;
  return n ? yO(e, n) : sy(isNaN(e) ? t : e);
}
const zu = (function e(t) {
  var n = xO(t);
  function o(s, a) {
    var u = n((s = Av(s)).r, (a = Av(a)).r), l = n(s.g, a.g), f = n(s.b, a.b), d = aR(s.opacity, a.opacity);
    return function(h) {
      return s.r = u(h), s.g = l(h), s.b = f(h), s.opacity = d(h), s + "";
    };
  }
  return o.gamma = e, o;
})(1);
function _O(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), s;
  return function(a) {
    for (s = 0; s < n; ++s) o[s] = e[s] * (1 - a) + t[s] * a;
    return o;
  };
}
function bO(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function SO(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, s = new Array(o), a = new Array(n), u;
  for (u = 0; u < o; ++u) s[u] = ws(e[u], t[u]);
  for (; u < n; ++u) a[u] = t[u];
  return function(l) {
    for (u = 0; u < o; ++u) a[u] = s[u](l);
    return a;
  };
}
function EO(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return n.setTime(e * (1 - o) + t * o), n;
  };
}
function kn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function CO(e, t) {
  var n = {}, o = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = ws(e[s], t[s]) : o[s] = t[s];
  return function(a) {
    for (s in n) o[s] = n[s](a);
    return o;
  };
}
var Iv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Hf = new RegExp(Iv.source, "g");
function kO(e) {
  return function() {
    return e;
  };
}
function RO(e) {
  return function(t) {
    return e(t) + "";
  };
}
function uR(e, t) {
  var n = Iv.lastIndex = Hf.lastIndex = 0, o, s, a, u = -1, l = [], f = [];
  for (e = e + "", t = t + ""; (o = Iv.exec(e)) && (s = Hf.exec(t)); )
    (a = s.index) > n && (a = t.slice(n, a), l[u] ? l[u] += a : l[++u] = a), (o = o[0]) === (s = s[0]) ? l[u] ? l[u] += s : l[++u] = s : (l[++u] = null, f.push({ i: u, x: kn(o, s) })), n = Hf.lastIndex;
  return n < t.length && (a = t.slice(n), l[u] ? l[u] += a : l[++u] = a), l.length < 2 ? f[0] ? RO(f[0].x) : kO(t) : (t = f.length, function(d) {
    for (var h = 0, m; h < t; ++h) l[(m = f[h]).i] = m.x(d);
    return l.join("");
  });
}
function ws(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? sy(t) : (n === "number" ? kn : n === "string" ? (o = ro(t)) ? (t = o, zu) : uR : t instanceof ro ? zu : t instanceof Date ? EO : bO(t) ? _O : Array.isArray(t) ? SO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? CO : kn)(e, t);
}
var Bx = 180 / Math.PI, Mv = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function lR(e, t, n, o, s, a) {
  var u, l, f;
  return (u = Math.sqrt(e * e + t * t)) && (e /= u, t /= u), (f = e * n + t * o) && (n -= e * f, o -= t * f), (l = Math.sqrt(n * n + o * o)) && (n /= l, o /= l, f /= l), e * o < t * n && (e = -e, t = -t, f = -f, u = -u), {
    translateX: s,
    translateY: a,
    rotate: Math.atan2(t, e) * Bx,
    skewX: Math.atan(f) * Bx,
    scaleX: u,
    scaleY: l
  };
}
var pu;
function NO(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Mv : lR(t.a, t.b, t.c, t.d, t.e, t.f);
}
function PO(e) {
  return e == null || (pu || (pu = document.createElementNS("http://www.w3.org/2000/svg", "g")), pu.setAttribute("transform", e), !(e = pu.transform.baseVal.consolidate())) ? Mv : (e = e.matrix, lR(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cR(e, t, n, o) {
  function s(d) {
    return d.length ? d.pop() + " " : "";
  }
  function a(d, h, m, g, w, E) {
    if (d !== m || h !== g) {
      var y = w.push("translate(", null, t, null, n);
      E.push({ i: y - 4, x: kn(d, m) }, { i: y - 2, x: kn(h, g) });
    } else (m || g) && w.push("translate(" + m + t + g + n);
  }
  function u(d, h, m, g) {
    d !== h ? (d - h > 180 ? h += 360 : h - d > 180 && (d += 360), g.push({ i: m.push(s(m) + "rotate(", null, o) - 2, x: kn(d, h) })) : h && m.push(s(m) + "rotate(" + h + o);
  }
  function l(d, h, m, g) {
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
    return d = e(d), h = e(h), a(d.translateX, d.translateY, h.translateX, h.translateY, m, g), u(d.rotate, h.rotate, m, g), l(d.skewX, h.skewX, m, g), f(d.scaleX, d.scaleY, h.scaleX, h.scaleY, m, g), d = h = null, function(w) {
      for (var E = -1, y = g.length, x; ++E < y; ) m[(x = g[E]).i] = x.x(w);
      return m.join("");
    };
  };
}
var TO = cR(NO, "px, ", "px)", "deg)"), AO = cR(PO, ", ", ")", ")"), IO = 1e-12;
function Vx(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function MO(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function OO(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Pu = (function e(t, n, o) {
  function s(a, u) {
    var l = a[0], f = a[1], d = a[2], h = u[0], m = u[1], g = u[2], w = h - l, E = m - f, y = w * w + E * E, x, S;
    if (y < IO)
      S = Math.log(g / d) / t, x = function(A) {
        return [
          l + A * w,
          f + A * E,
          d * Math.exp(t * A * S)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (g * g - d * d + o * y) / (2 * d * n * C), k = (g * g - d * d - o * y) / (2 * g * n * C), N = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(k * k + 1) - k);
      S = (T - N) / t, x = function(A) {
        var O = A * S, D = Vx(N), G = d / (n * C) * (D * OO(t * O + N) - MO(N));
        return [
          l + G * w,
          f + G * E,
          d * D / Vx(t * O + N)
        ];
      };
    }
    return x.duration = S * 1e3 * t / Math.SQRT2, x;
  }
  return s.rho = function(a) {
    var u = Math.max(1e-3, +a), l = u * u, f = l * l;
    return e(u, l, f);
  }, s;
})(Math.SQRT2, 2, 4);
var ri = 0, hs = 0, cs = 0, fR = 1e3, Fu, ps, $u = 0, oo = 0, ol = 0, Es = typeof performance == "object" && performance.now ? performance : Date, dR = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ay() {
  return oo || (dR(LO), oo = Es.now() + ol);
}
function LO() {
  oo = 0;
}
function Bu() {
  this._call = this._time = this._next = null;
}
Bu.prototype = hR.prototype = {
  constructor: Bu,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ay() : +n) + (t == null ? 0 : +t), !this._next && ps !== this && (ps ? ps._next = this : Fu = this, ps = this), this._call = e, this._time = n, Ov();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ov());
  }
};
function hR(e, t, n) {
  var o = new Bu();
  return o.restart(e, t, n), o;
}
function qO() {
  ay(), ++ri;
  for (var e = Fu, t; e; )
    (t = oo - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ri;
}
function Hx() {
  oo = ($u = Es.now()) + ol, ri = hs = 0;
  try {
    qO();
  } finally {
    ri = 0, jO(), oo = 0;
  }
}
function DO() {
  var e = Es.now(), t = e - $u;
  t > fR && (ol -= t, $u = e);
}
function jO() {
  for (var e, t = Fu, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Fu = n);
  ps = e, Ov(o);
}
function Ov(e) {
  if (!ri) {
    hs && (hs = clearTimeout(hs));
    var t = e - oo;
    t > 24 ? (e < 1 / 0 && (hs = setTimeout(Hx, e - Es.now() - ol)), cs && (cs = clearInterval(cs))) : (cs || ($u = Es.now(), cs = setInterval(DO, fR)), ri = 1, dR(Hx));
  }
}
function Wx(e, t, n) {
  var o = new Bu();
  return t = t == null ? 0 : +t, o.restart((s) => {
    o.stop(), e(s + t);
  }, t, n), o;
}
var zO = nl("start", "end", "cancel", "interrupt"), FO = [], pR = 0, Ux = 1, Lv = 2, Tu = 3, Gx = 4, qv = 5, Au = 6;
function il(e, t, n, o, s, a) {
  var u = e.__transition;
  if (!u) e.__transition = {};
  else if (n in u) return;
  $O(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: s,
    // For context during callback.
    on: zO,
    tween: FO,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: pR
  });
}
function uy(e, t) {
  var n = yn(e, t);
  if (n.state > pR) throw new Error("too late; already scheduled");
  return n;
}
function Mn(e, t) {
  var n = yn(e, t);
  if (n.state > Tu) throw new Error("too late; already running");
  return n;
}
function yn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function $O(e, t, n) {
  var o = e.__transition, s;
  o[t] = n, n.timer = hR(a, 0, n.time);
  function a(d) {
    n.state = Ux, n.timer.restart(u, n.delay, n.time), n.delay <= d && u(d - n.delay);
  }
  function u(d) {
    var h, m, g, w;
    if (n.state !== Ux) return f();
    for (h in o)
      if (w = o[h], w.name === n.name) {
        if (w.state === Tu) return Wx(u);
        w.state === Gx ? (w.state = Au, w.timer.stop(), w.on.call("interrupt", e, e.__data__, w.index, w.group), delete o[h]) : +h < t && (w.state = Au, w.timer.stop(), w.on.call("cancel", e, e.__data__, w.index, w.group), delete o[h]);
      }
    if (Wx(function() {
      n.state === Tu && (n.state = Gx, n.timer.restart(l, n.delay, n.time), l(d));
    }), n.state = Lv, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Lv) {
      for (n.state = Tu, s = new Array(g = n.tween.length), h = 0, m = -1; h < g; ++h)
        (w = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (s[++m] = w);
      s.length = m + 1;
    }
  }
  function l(d) {
    for (var h = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(f), n.state = qv, 1), m = -1, g = s.length; ++m < g; )
      s[m].call(e, h);
    n.state === qv && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Au, n.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Iu(e, t) {
  var n = e.__transition, o, s, a = !0, u;
  if (n) {
    t = t == null ? null : t + "";
    for (u in n) {
      if ((o = n[u]).name !== t) {
        a = !1;
        continue;
      }
      s = o.state > Lv && o.state < qv, o.state = Au, o.timer.stop(), o.on.call(s ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[u];
    }
    a && delete e.__transition;
  }
}
function BO(e) {
  return this.each(function() {
    Iu(this, e);
  });
}
function VO(e, t) {
  var n, o;
  return function() {
    var s = Mn(this, e), a = s.tween;
    if (a !== n) {
      o = n = a;
      for (var u = 0, l = o.length; u < l; ++u)
        if (o[u].name === t) {
          o = o.slice(), o.splice(u, 1);
          break;
        }
    }
    s.tween = o;
  };
}
function HO(e, t, n) {
  var o, s;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = Mn(this, e), u = a.tween;
    if (u !== o) {
      s = (o = u).slice();
      for (var l = { name: t, value: n }, f = 0, d = s.length; f < d; ++f)
        if (s[f].name === t) {
          s[f] = l;
          break;
        }
      f === d && s.push(l);
    }
    a.tween = s;
  };
}
function WO(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = yn(this.node(), n).tween, s = 0, a = o.length, u; s < a; ++s)
      if ((u = o[s]).name === e)
        return u.value;
    return null;
  }
  return this.each((t == null ? VO : HO)(n, e, t));
}
function ly(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var s = Mn(this, o);
    (s.value || (s.value = {}))[t] = n.apply(this, arguments);
  }), function(s) {
    return yn(s, o).value[t];
  };
}
function mR(e, t) {
  var n;
  return (typeof t == "number" ? kn : t instanceof ro ? zu : (n = ro(t)) ? (t = n, zu) : uR)(e, t);
}
function UO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function GO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function YO(e, t, n) {
  var o, s = n + "", a;
  return function() {
    var u = this.getAttribute(e);
    return u === s ? null : u === o ? a : a = t(o = u, n);
  };
}
function KO(e, t, n) {
  var o, s = n + "", a;
  return function() {
    var u = this.getAttributeNS(e.space, e.local);
    return u === s ? null : u === o ? a : a = t(o = u, n);
  };
}
function XO(e, t, n) {
  var o, s, a;
  return function() {
    var u, l = n(this), f;
    return l == null ? void this.removeAttribute(e) : (u = this.getAttribute(e), f = l + "", u === f ? null : u === o && f === s ? a : (s = f, a = t(o = u, l)));
  };
}
function QO(e, t, n) {
  var o, s, a;
  return function() {
    var u, l = n(this), f;
    return l == null ? void this.removeAttributeNS(e.space, e.local) : (u = this.getAttributeNS(e.space, e.local), f = l + "", u === f ? null : u === o && f === s ? a : (s = f, a = t(o = u, l)));
  };
}
function ZO(e, t) {
  var n = rl(e), o = n === "transform" ? AO : mR;
  return this.attrTween(e, typeof t == "function" ? (n.local ? QO : XO)(n, o, ly(this, "attr." + e, t)) : t == null ? (n.local ? GO : UO)(n) : (n.local ? KO : YO)(n, o, t));
}
function JO(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function eL(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function tL(e, t) {
  var n, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && eL(e, a)), n;
  }
  return s._value = t, s;
}
function nL(e, t) {
  var n, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && JO(e, a)), n;
  }
  return s._value = t, s;
}
function rL(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = rl(e);
  return this.tween(n, (o.local ? tL : nL)(o, t));
}
function oL(e, t) {
  return function() {
    uy(this, e).delay = +t.apply(this, arguments);
  };
}
function iL(e, t) {
  return t = +t, function() {
    uy(this, e).delay = t;
  };
}
function sL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? oL : iL)(t, e)) : yn(this.node(), t).delay;
}
function aL(e, t) {
  return function() {
    Mn(this, e).duration = +t.apply(this, arguments);
  };
}
function uL(e, t) {
  return t = +t, function() {
    Mn(this, e).duration = t;
  };
}
function lL(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? aL : uL)(t, e)) : yn(this.node(), t).duration;
}
function cL(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Mn(this, e).ease = t;
  };
}
function fL(e) {
  var t = this._id;
  return arguments.length ? this.each(cL(t, e)) : yn(this.node(), t).ease;
}
function dL(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Mn(this, e).ease = n;
  };
}
function hL(e) {
  if (typeof e != "function") throw new Error();
  return this.each(dL(this._id, e));
}
function pL(e) {
  typeof e != "function" && (e = Uk(e));
  for (var t = this._groups, n = t.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = t[s], u = a.length, l = o[s] = [], f, d = 0; d < u; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && l.push(f);
  return new Yn(o, this._parents, this._name, this._id);
}
function mL(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, s = n.length, a = Math.min(o, s), u = new Array(o), l = 0; l < a; ++l)
    for (var f = t[l], d = n[l], h = f.length, m = u[l] = new Array(h), g, w = 0; w < h; ++w)
      (g = f[w] || d[w]) && (m[w] = g);
  for (; l < o; ++l)
    u[l] = t[l];
  return new Yn(u, this._parents, this._name, this._id);
}
function gL(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function vL(e, t, n) {
  var o, s, a = gL(t) ? uy : Mn;
  return function() {
    var u = a(this, e), l = u.on;
    l !== o && (s = (o = l).copy()).on(t, n), u.on = s;
  };
}
function yL(e, t) {
  var n = this._id;
  return arguments.length < 2 ? yn(this.node(), n).on.on(e) : this.each(vL(n, e, t));
}
function wL(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function xL() {
  return this.on("end.remove", wL(this._id));
}
function _L(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ry(e));
  for (var o = this._groups, s = o.length, a = new Array(s), u = 0; u < s; ++u)
    for (var l = o[u], f = l.length, d = a[u] = new Array(f), h, m, g = 0; g < f; ++g)
      (h = l[g]) && (m = e.call(h, h.__data__, g, l)) && ("__data__" in h && (m.__data__ = h.__data__), d[g] = m, il(d[g], t, n, g, d, yn(h, n)));
  return new Yn(a, this._parents, t, n);
}
function bL(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Wk(e));
  for (var o = this._groups, s = o.length, a = [], u = [], l = 0; l < s; ++l)
    for (var f = o[l], d = f.length, h, m = 0; m < d; ++m)
      if (h = f[m]) {
        for (var g = e.call(h, h.__data__, m, f), w, E = yn(h, n), y = 0, x = g.length; y < x; ++y)
          (w = g[y]) && il(w, t, n, y, g, E);
        a.push(g), u.push(h);
      }
  return new Yn(a, u, t, n);
}
var SL = Ls.prototype.constructor;
function EL() {
  return new SL(this._groups, this._parents);
}
function CL(e, t) {
  var n, o, s;
  return function() {
    var a = ni(this, e), u = (this.style.removeProperty(e), ni(this, e));
    return a === u ? null : a === n && u === o ? s : s = t(n = a, o = u);
  };
}
function gR(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function kL(e, t, n) {
  var o, s = n + "", a;
  return function() {
    var u = ni(this, e);
    return u === s ? null : u === o ? a : a = t(o = u, n);
  };
}
function RL(e, t, n) {
  var o, s, a;
  return function() {
    var u = ni(this, e), l = n(this), f = l + "";
    return l == null && (f = l = (this.style.removeProperty(e), ni(this, e))), u === f ? null : u === o && f === s ? a : (s = f, a = t(o = u, l));
  };
}
function NL(e, t) {
  var n, o, s, a = "style." + t, u = "end." + a, l;
  return function() {
    var f = Mn(this, e), d = f.on, h = f.value[a] == null ? l || (l = gR(t)) : void 0;
    (d !== n || s !== h) && (o = (n = d).copy()).on(u, s = h), f.on = o;
  };
}
function PL(e, t, n) {
  var o = (e += "") == "transform" ? TO : mR;
  return t == null ? this.styleTween(e, CL(e, o)).on("end.style." + e, gR(e)) : typeof t == "function" ? this.styleTween(e, RL(e, o, ly(this, "style." + e, t))).each(NL(this._id, e)) : this.styleTween(e, kL(e, o, t), n).on("end.style." + e, null);
}
function TL(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function AL(e, t, n) {
  var o, s;
  function a() {
    var u = t.apply(this, arguments);
    return u !== s && (o = (s = u) && TL(e, u, n)), o;
  }
  return a._value = t, a;
}
function IL(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, AL(e, t, n ?? ""));
}
function ML(e) {
  return function() {
    this.textContent = e;
  };
}
function OL(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function LL(e) {
  return this.tween("text", typeof e == "function" ? OL(ly(this, "text", e)) : ML(e == null ? "" : e + ""));
}
function qL(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function DL(e) {
  var t, n;
  function o() {
    var s = e.apply(this, arguments);
    return s !== n && (t = (n = s) && qL(s)), t;
  }
  return o._value = e, o;
}
function jL(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, DL(e));
}
function zL() {
  for (var e = this._name, t = this._id, n = vR(), o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var u = o[a], l = u.length, f, d = 0; d < l; ++d)
      if (f = u[d]) {
        var h = yn(f, t);
        il(f, e, n, d, u, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Yn(o, this._parents, e, n);
}
function FL() {
  var e, t, n = this, o = n._id, s = n.size();
  return new Promise(function(a, u) {
    var l = { value: u }, f = { value: function() {
      --s === 0 && a();
    } };
    n.each(function() {
      var d = Mn(this, o), h = d.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(l), t._.interrupt.push(l), t._.end.push(f)), d.on = t;
    }), s === 0 && a();
  });
}
var $L = 0;
function Yn(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function vR() {
  return ++$L;
}
var Wn = Ls.prototype;
Yn.prototype = {
  constructor: Yn,
  select: _L,
  selectAll: bL,
  selectChild: Wn.selectChild,
  selectChildren: Wn.selectChildren,
  filter: pL,
  merge: mL,
  selection: EL,
  transition: zL,
  call: Wn.call,
  nodes: Wn.nodes,
  node: Wn.node,
  size: Wn.size,
  empty: Wn.empty,
  each: Wn.each,
  on: yL,
  attr: ZO,
  attrTween: rL,
  style: PL,
  styleTween: IL,
  text: LL,
  textTween: jL,
  remove: xL,
  tween: WO,
  delay: sL,
  duration: lL,
  ease: fL,
  easeVarying: hL,
  end: FL,
  [Symbol.iterator]: Wn[Symbol.iterator]
};
function BL(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var VL = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: BL
};
function HL(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function WL(e) {
  var t, n;
  e instanceof Yn ? (t = e._id, e = e._name) : (t = vR(), (n = VL).time = ay(), e = e == null ? null : e + "");
  for (var o = this._groups, s = o.length, a = 0; a < s; ++a)
    for (var u = o[a], l = u.length, f, d = 0; d < l; ++d)
      (f = u[d]) && il(f, e, t, d, u, n || HL(f, t));
  return new Yn(o, this._parents, e, t);
}
Ls.prototype.interrupt = BO;
Ls.prototype.transition = WL;
const mu = (e) => () => e;
function UL(e, {
  sourceEvent: t,
  target: n,
  transform: o,
  dispatch: s
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: s }
  });
}
function Gn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
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
var sl = new Gn(1, 0, 0);
yR.prototype = Gn.prototype;
function yR(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return sl;
  return e.__zoom;
}
function Wf(e) {
  e.stopImmediatePropagation();
}
function fs(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function GL(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function YL() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Yx() {
  return this.__zoom || sl;
}
function KL(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function XL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function QL(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], s = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], u = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    u > a ? (a + u) / 2 : Math.min(0, a) || Math.max(0, u)
  );
}
function wR() {
  var e = GL, t = YL, n = QL, o = KL, s = XL, a = [0, 1 / 0], u = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], l = 250, f = Pu, d = nl("start", "zoom", "end"), h, m, g, w = 500, E = 150, y = 0, x = 10;
  function S(L) {
    L.property("__zoom", Yx).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", G).filter(s).on("touchstart.zoom", B).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  S.transform = function(L, H, $, Y) {
    var I = L.selection ? L.selection() : L;
    I.property("__zoom", Yx), L !== I ? N(L, H, $, Y) : I.interrupt().each(function() {
      T(this, arguments).event(Y).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, S.scaleBy = function(L, H, $, Y) {
    S.scaleTo(L, function() {
      var I = this.__zoom.k, j = typeof H == "function" ? H.apply(this, arguments) : H;
      return I * j;
    }, $, Y);
  }, S.scaleTo = function(L, H, $, Y) {
    S.transform(L, function() {
      var I = t.apply(this, arguments), j = this.__zoom, Q = $ == null ? k(I) : typeof $ == "function" ? $.apply(this, arguments) : $, q = j.invert(Q), W = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(_(C(j, W), Q, q), I, u);
    }, $, Y);
  }, S.translateBy = function(L, H, $, Y) {
    S.transform(L, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), u);
    }, null, Y);
  }, S.translateTo = function(L, H, $, Y, I) {
    S.transform(L, function() {
      var j = t.apply(this, arguments), Q = this.__zoom, q = Y == null ? k(j) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return n(sl.translate(q[0], q[1]).scale(Q.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), j, u);
    }, Y, I);
  };
  function C(L, H) {
    return H = Math.max(a[0], Math.min(a[1], H)), H === L.k ? L : new Gn(H, L.x, L.y);
  }
  function _(L, H, $) {
    var Y = H[0] - $[0] * L.k, I = H[1] - $[1] * L.k;
    return Y === L.x && I === L.y ? L : new Gn(L.k, Y, I);
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
      var I = this, j = arguments, Q = T(I, j).event(Y), q = t.apply(I, j), W = $ == null ? k(q) : typeof $ == "function" ? $.apply(I, j) : $, ie = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), F = I.__zoom, Z = typeof H == "function" ? H.apply(I, j) : H, ee = f(F.invert(W).concat(ie / F.k), Z.invert(W).concat(ie / Z.k));
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
        new UL(L, {
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
    var $ = T(this, H).event(L), Y = this.__zoom, I = Math.max(a[0], Math.min(a[1], Y.k * Math.pow(2, o.apply(this, arguments)))), j = fn(L);
    if ($.wheel)
      ($.mouse[0][0] !== j[0] || $.mouse[0][1] !== j[1]) && ($.mouse[1] = Y.invert($.mouse[0] = j)), clearTimeout($.wheel);
    else {
      if (Y.k === I) return;
      $.mouse = [j, Y.invert(j)], Iu(this), $.start();
    }
    fs(L), $.wheel = setTimeout(Q, E), $.zoom("mouse", n(_(C(Y, I), $.mouse[0], $.mouse[1]), $.extent, u));
    function Q() {
      $.wheel = null, $.end();
    }
  }
  function D(L, ...H) {
    if (g || !e.apply(this, arguments)) return;
    var $ = L.currentTarget, Y = T(this, H, !0).event(L), I = Dt(L.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ie, !0), j = fn(L, $), Q = L.clientX, q = L.clientY;
    nR(L.view), Wf(L), Y.mouse = [j, this.__zoom.invert(j)], Iu(this), Y.start();
    function W(F) {
      if (fs(F), !Y.moved) {
        var Z = F.clientX - Q, ee = F.clientY - q;
        Y.moved = Z * Z + ee * ee > y;
      }
      Y.event(F).zoom("mouse", n(_(Y.that.__zoom, Y.mouse[0] = fn(F, $), Y.mouse[1]), Y.extent, u));
    }
    function ie(F) {
      I.on("mousemove.zoom mouseup.zoom", null), rR(F.view, Y.moved), fs(F), Y.event(F).end();
    }
  }
  function G(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, Y = fn(L.changedTouches ? L.changedTouches[0] : L, this), I = $.invert(Y), j = $.k * (L.shiftKey ? 0.5 : 2), Q = n(_(C($, j), Y, I), t.apply(this, H), u);
      fs(L), l > 0 ? Dt(this).transition().duration(l).call(N, Q, Y, L) : Dt(this).call(S.transform, Q, Y, L);
    }
  }
  function B(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = L.touches, Y = $.length, I = T(this, H, L.changedTouches.length === Y).event(L), j, Q, q, W;
      for (Wf(L), Q = 0; Q < Y; ++Q)
        q = $[Q], W = fn(q, this), W = [W, this.__zoom.invert(W), q.identifier], I.touch0 ? !I.touch1 && I.touch0[2] !== W[2] && (I.touch1 = W, I.taps = 0) : (I.touch0 = W, j = !0, I.taps = 1 + !!h);
      h && (h = clearTimeout(h)), j && (I.taps < 2 && (m = W[0], h = setTimeout(function() {
        h = null;
      }, w)), Iu(this), I.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var $ = T(this, H).event(L), Y = L.changedTouches, I = Y.length, j, Q, q, W;
      for (fs(L), j = 0; j < I; ++j)
        Q = Y[j], q = fn(Q, this), $.touch0 && $.touch0[2] === Q.identifier ? $.touch0[0] = q : $.touch1 && $.touch1[2] === Q.identifier && ($.touch1[0] = q);
      if (Q = $.that.__zoom, $.touch1) {
        var ie = $.touch0[0], F = $.touch0[1], Z = $.touch1[0], ee = $.touch1[1], K = (K = Z[0] - ie[0]) * K + (K = Z[1] - ie[1]) * K, te = (te = ee[0] - F[0]) * te + (te = ee[1] - F[1]) * te;
        Q = C(Q, Math.sqrt(K / te)), q = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], W = [(F[0] + ee[0]) / 2, (F[1] + ee[1]) / 2];
      } else if ($.touch0) q = $.touch0[0], W = $.touch0[1];
      else return;
      $.zoom("touch", n(_(Q, q, W), $.extent, u));
    }
  }
  function X(L, ...H) {
    if (this.__zooming) {
      var $ = T(this, H).event(L), Y = L.changedTouches, I = Y.length, j, Q;
      for (Wf(L), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, w), j = 0; j < I; ++j)
        Q = Y[j], $.touch0 && $.touch0[2] === Q.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Q.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Q = fn(Q, this), Math.hypot(m[0] - Q[0], m[1] - Q[1]) < x)) {
        var q = Dt(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return S.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : mu(+L), S) : o;
  }, S.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : mu(!!L), S) : e;
  }, S.touchable = function(L) {
    return arguments.length ? (s = typeof L == "function" ? L : mu(!!L), S) : s;
  }, S.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : mu([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), S) : t;
  }, S.scaleExtent = function(L) {
    return arguments.length ? (a[0] = +L[0], a[1] = +L[1], S) : [a[0], a[1]];
  }, S.translateExtent = function(L) {
    return arguments.length ? (u[0][0] = +L[0][0], u[1][0] = +L[1][0], u[0][1] = +L[0][1], u[1][1] = +L[1][1], S) : [[u[0][0], u[0][1]], [u[1][0], u[1][1]]];
  }, S.constrain = function(L) {
    return arguments.length ? (n = L, S) : n;
  }, S.duration = function(L) {
    return arguments.length ? (l = +L, S) : l;
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
  error008: (e, { id: t, sourceHandle: n, targetHandle: o }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : o}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Cs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], xR = ["Enter", " ", "Escape"], _R = {
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
var oi;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(oi || (oi = {}));
var no;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(no || (no = {}));
var ks;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(ks || (ks = {}));
const bR = {
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
var Vu;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Vu || (Vu = {}));
var Se;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Se || (Se = {}));
const Kx = {
  [Se.Left]: Se.Right,
  [Se.Right]: Se.Left,
  [Se.Top]: Se.Bottom,
  [Se.Bottom]: Se.Top
};
function SR(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const ER = (e) => "id" in e && "source" in e && "target" in e, ZL = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), cy = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ds = (e, t = [0, 0]) => {
  const { width: n, height: o } = Qn(e), s = e.origin ?? t, a = n * s[0], u = o * s[1];
  return {
    x: e.position.x - a,
    y: e.position.y - u
  };
}, JL = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, s) => {
    const a = typeof s == "string";
    let u = !t.nodeLookup && !a ? s : void 0;
    t.nodeLookup && (u = a ? t.nodeLookup.get(s) : cy(s) ? s : t.nodeLookup.get(s.id));
    const l = u ? Hu(u, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return al(o, l);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ul(n);
}, js = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((s) => {
    (t.filter === void 0 || t.filter(s)) && (n = al(n, Hu(s)), o = !0);
  }), o ? ul(n) : { x: 0, y: 0, width: 0, height: 0 };
}, fy = (e, t, [n, o, s] = [0, 0, 1], a = !1, u = !1) => {
  const l = {
    ...Fs(t, [n, o, s]),
    width: t.width / s,
    height: t.height / s
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: m = !0, hidden: g = !1 } = d;
    if (u && !m || g)
      continue;
    const w = h.width ?? d.width ?? d.initialWidth ?? null, E = h.height ?? d.height ?? d.initialHeight ?? null, y = Rs(l, si(d)), x = (w ?? 0) * (E ?? 0), S = a && y > 0;
    (!d.internals.handleBounds || S || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, eq = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function tq(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((s) => s.id)) : null;
  return e.forEach((s) => {
    s.measured.width && s.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !s.hidden) && (!o || o.has(s.id)) && n.set(s.id, s);
  }), n;
}
async function nq({ nodes: e, width: t, height: n, panZoom: o, minZoom: s, maxZoom: a }, u) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const l = tq(e, u), f = js(l), d = dy(f, t, n, (u == null ? void 0 : u.minZoom) ?? s, (u == null ? void 0 : u.maxZoom) ?? a, (u == null ? void 0 : u.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: u == null ? void 0 : u.duration,
    ease: u == null ? void 0 : u.ease,
    interpolate: u == null ? void 0 : u.interpolate
  }), Promise.resolve(!0);
}
function CR({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: s, onError: a }) {
  const u = n.get(e), l = u.parentId ? n.get(u.parentId) : void 0, { x: f, y: d } = l ? l.internals.positionAbsolute : { x: 0, y: 0 }, h = u.origin ?? o;
  let m = u.extent || s;
  if (u.extent === "parent" && !u.expandParent)
    if (!l)
      a == null || a("005", An.error005());
    else {
      const w = l.measured.width, E = l.measured.height;
      w && E && (m = [
        [f, d],
        [f + w, d + E]
      ]);
    }
  else l && ai(u.extent) && (m = [
    [u.extent[0][0] + f, u.extent[0][1] + d],
    [u.extent[1][0] + f, u.extent[1][1] + d]
  ]);
  const g = ai(m) ? io(t, m, u.measured) : t;
  return (u.measured.width === void 0 || u.measured.height === void 0) && (a == null || a("015", An.error015())), {
    position: {
      x: g.x - f + (u.measured.width ?? 0) * h[0],
      y: g.y - d + (u.measured.height ?? 0) * h[1]
    },
    positionAbsolute: g
  };
}
async function rq({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: s }) {
  const a = new Set(e.map((g) => g.id)), u = [];
  for (const g of n) {
    if (g.deletable === !1)
      continue;
    const w = a.has(g.id), E = !w && g.parentId && u.find((y) => y.id === g.parentId);
    (w || E) && u.push(g);
  }
  const l = new Set(t.map((g) => g.id)), f = o.filter((g) => g.deletable !== !1), h = eq(u, f);
  for (const g of f)
    l.has(g.id) && !h.find((E) => E.id === g.id) && h.push(g);
  if (!s)
    return {
      edges: h,
      nodes: u
    };
  const m = await s({
    nodes: u,
    edges: h
  });
  return typeof m == "boolean" ? m ? { edges: h, nodes: u } : { edges: [], nodes: [] } : m;
}
const ii = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), io = (e = { x: 0, y: 0 }, t, n) => ({
  x: ii(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ii(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function kR(e, t, n) {
  const { width: o, height: s } = Qn(n), { x: a, y: u } = n.internals.positionAbsolute;
  return io(e, [
    [a, u],
    [a + o, u + s]
  ], t);
}
const Xx = (e, t, n) => e < t ? ii(Math.abs(e - t), 1, t) / t : e > n ? -ii(Math.abs(e - n), 1, t) / t : 0, RR = (e, t, n = 15, o = 40) => {
  const s = Xx(e.x, o, t.width - o) * n, a = Xx(e.y, o, t.height - o) * n;
  return [s, a];
}, al = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Dv = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), ul = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), si = (e, t = [0, 0]) => {
  var s, a;
  const { x: n, y: o } = cy(e) ? e.internals.positionAbsolute : Ds(e, t);
  return {
    x: n,
    y: o,
    width: ((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Hu = (e, t = [0, 0]) => {
  var s, a;
  const { x: n, y: o } = cy(e) ? e.internals.positionAbsolute : Ds(e, t);
  return {
    x: n,
    y: o,
    x2: n + (((s = e.measured) == null ? void 0 : s.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, NR = (e, t) => ul(al(Dv(e), Dv(t))), Rs = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, Qx = (e) => hn(e.width) && hn(e.height) && hn(e.x) && hn(e.y), hn = (e) => !isNaN(e) && isFinite(e), oq = (e, t) => {
}, zs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Fs = ({ x: e, y: t }, [n, o, s], a = !1, u = [1, 1]) => {
  const l = {
    x: (e - n) / s,
    y: (t - o) / s
  };
  return a ? zs(l, u) : l;
}, Wu = ({ x: e, y: t }, [n, o, s]) => ({
  x: e * s + n,
  y: t * s + o
});
function Ho(e, t) {
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
function iq(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const o = Ho(e, n), s = Ho(e, t);
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
    const o = Ho(e.top ?? e.y ?? 0, n), s = Ho(e.bottom ?? e.y ?? 0, n), a = Ho(e.left ?? e.x ?? 0, t), u = Ho(e.right ?? e.x ?? 0, t);
    return { top: o, right: u, bottom: s, left: a, x: a + u, y: o + s };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function sq(e, t, n, o, s, a) {
  const { x: u, y: l } = Wu(e, [t, n, o]), { x: f, y: d } = Wu({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), h = s - f, m = a - d;
  return {
    left: Math.floor(u),
    top: Math.floor(l),
    right: Math.floor(h),
    bottom: Math.floor(m)
  };
}
const dy = (e, t, n, o, s, a) => {
  const u = iq(a, t, n), l = (t - u.x) / e.width, f = (n - u.y) / e.height, d = Math.min(l, f), h = ii(d, o, s), m = e.x + e.width / 2, g = e.y + e.height / 2, w = t / 2 - m * h, E = n / 2 - g * h, y = sq(e, w, E, h, t, n), x = {
    left: Math.min(y.left - u.left, 0),
    top: Math.min(y.top - u.top, 0),
    right: Math.min(y.right - u.right, 0),
    bottom: Math.min(y.bottom - u.bottom, 0)
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
function ai(e) {
  return e != null && e !== "parent";
}
function Qn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function PR(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function TR(e, t = { width: 0, height: 0 }, n, o, s) {
  const a = { ...e }, u = o.get(n);
  if (u) {
    const l = u.origin || s;
    a.x += u.internals.positionAbsolute.x - (t.width ?? 0) * l[0], a.y += u.internals.positionAbsolute.y - (t.height ?? 0) * l[1];
  }
  return a;
}
function Zx(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function aq() {
  let e, t;
  return { promise: new Promise((o, s) => {
    e = o, t = s;
  }), resolve: e, reject: t };
}
function uq(e) {
  return { ..._R, ...e || {} };
}
function xs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: s }) {
  const { x: a, y: u } = pn(e), l = Fs({ x: a - ((s == null ? void 0 : s.left) ?? 0), y: u - ((s == null ? void 0 : s.top) ?? 0) }, o), { x: f, y: d } = n ? zs(l, t) : l;
  return {
    xSnapped: f,
    ySnapped: d,
    ...l
  };
}
const hy = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), AR = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, lq = ["INPUT", "SELECT", "TEXTAREA"];
function IR(e) {
  var o, s;
  const t = ((s = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : s[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : lq.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const MR = (e) => "clientX" in e, pn = (e, t) => {
  var a, u;
  const n = MR(e), o = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, s = n ? e.clientY : (u = e.touches) == null ? void 0 : u[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: s - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Jx = (e, t, n, o, s) => {
  const a = t.querySelectorAll(`.${e}`);
  return !a || !a.length ? null : Array.from(a).map((u) => {
    const l = u.getBoundingClientRect();
    return {
      id: u.getAttribute("data-handleid"),
      type: e,
      nodeId: s,
      position: u.getAttribute("data-handlepos"),
      x: (l.left - n.left) / o,
      y: (l.top - n.top) / o,
      ...hy(u)
    };
  });
};
function OR({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: s, sourceControlY: a, targetControlX: u, targetControlY: l }) {
  const f = e * 0.125 + s * 0.375 + u * 0.375 + n * 0.125, d = t * 0.125 + a * 0.375 + l * 0.375 + o * 0.125, h = Math.abs(f - e), m = Math.abs(d - t);
  return [f, d, h, m];
}
function gu(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function e1({ pos: e, x1: t, y1: n, x2: o, y2: s, c: a }) {
  switch (e) {
    case Se.Left:
      return [t - gu(t - o, a), n];
    case Se.Right:
      return [t + gu(o - t, a), n];
    case Se.Top:
      return [t, n - gu(n - s, a)];
    case Se.Bottom:
      return [t, n + gu(s - n, a)];
  }
}
function LR({ sourceX: e, sourceY: t, sourcePosition: n = Se.Bottom, targetX: o, targetY: s, targetPosition: a = Se.Top, curvature: u = 0.25 }) {
  const [l, f] = e1({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: s,
    c: u
  }), [d, h] = e1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t,
    c: u
  }), [m, g, w, E] = OR({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: s,
    sourceControlX: l,
    sourceControlY: f,
    targetControlX: d,
    targetControlY: h
  });
  return [
    `M${e},${t} C${l},${f} ${d},${h} ${o},${s}`,
    m,
    g,
    w,
    E
  ];
}
function qR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const s = Math.abs(n - e) / 2, a = n < e ? n + s : n - s, u = Math.abs(o - t) / 2, l = o < t ? o + u : o - u;
  return [a, l, s, u];
}
function cq({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: s = !1 }) {
  if (o !== void 0)
    return o;
  const a = s && n ? 1e3 : 0, u = Math.max(e.parentId || s && e.selected ? e.internals.z : 0, t.parentId || s && t.selected ? t.internals.z : 0);
  return a + u;
}
function fq({ sourceNode: e, targetNode: t, width: n, height: o, transform: s }) {
  const a = al(Hu(e), Hu(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const u = {
    x: -s[0] / s[2],
    y: -s[1] / s[2],
    width: n / s[2],
    height: o / s[2]
  };
  return Rs(u, ul(a)) > 0;
}
const dq = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, hq = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), pq = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return ER(e) ? n = { ...e } : n = {
    ...e,
    id: dq(e)
  }, hq(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function DR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [s, a, u, l] = qR({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, s, a, u, l];
}
const t1 = {
  [Se.Left]: { x: -1, y: 0 },
  [Se.Right]: { x: 1, y: 0 },
  [Se.Top]: { x: 0, y: -1 },
  [Se.Bottom]: { x: 0, y: 1 }
}, mq = ({ source: e, sourcePosition: t = Se.Bottom, target: n }) => t === Se.Left || t === Se.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, n1 = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function gq({ source: e, sourcePosition: t = Se.Bottom, target: n, targetPosition: o = Se.Top, center: s, offset: a, stepPosition: u }) {
  const l = t1[t], f = t1[o], d = { x: e.x + l.x * a, y: e.y + l.y * a }, h = { x: n.x + f.x * a, y: n.y + f.y * a }, m = mq({
    source: d,
    sourcePosition: t,
    target: h
  }), g = m.x !== 0 ? "x" : "y", w = m[g];
  let E = [], y, x;
  const S = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, k] = qR({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (l[g] * f[g] === -1) {
    g === "x" ? (y = s.x ?? d.x + (h.x - d.x) * u, x = s.y ?? (d.y + h.y) / 2) : (y = s.x ?? (d.x + h.x) / 2, x = s.y ?? d.y + (h.y - d.y) * u);
    const T = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], A = [
      { x: d.x, y: x },
      { x: h.x, y: x }
    ];
    l[g] === w ? E = g === "x" ? T : A : E = g === "x" ? A : T;
  } else {
    const T = [{ x: d.x, y: h.y }], A = [{ x: h.x, y: d.y }];
    if (g === "x" ? E = l.x === w ? A : T : E = l.y === w ? T : A, t === o) {
      const V = Math.abs(e[g] - n[g]);
      if (V <= a) {
        const X = Math.min(a - 1, a - V);
        l[g] === w ? S[g] = (d[g] > e[g] ? -1 : 1) * X : C[g] = (h[g] > n[g] ? -1 : 1) * X;
      }
    }
    if (t !== o) {
      const V = g === "x" ? "y" : "x", X = l[g] === f[V], L = d[V] > h[V], H = d[V] < h[V];
      (l[g] === 1 && (!X && L || X && H) || l[g] !== 1 && (!X && H || X && L)) && (E = g === "x" ? T : A);
    }
    const O = { x: d.x + S.x, y: d.y + S.y }, D = { x: h.x + C.x, y: h.y + C.y }, G = Math.max(Math.abs(O.x - E[0].x), Math.abs(D.x - E[0].x)), B = Math.max(Math.abs(O.y - E[0].y), Math.abs(D.y - E[0].y));
    G >= B ? (y = (O.x + D.x) / 2, x = E[0].y) : (y = E[0].x, x = (O.y + D.y) / 2);
  }
  return [[
    e,
    { x: d.x + S.x, y: d.y + S.y },
    ...E,
    { x: h.x + C.x, y: h.y + C.y },
    n
  ], y, x, _, k];
}
function vq(e, t, n, o) {
  const s = Math.min(n1(e, t) / 2, n1(t, n) / 2, o), { x: a, y: u } = t;
  if (e.x === a && a === n.x || e.y === u && u === n.y)
    return `L${a} ${u}`;
  if (e.y === u) {
    const d = e.x < n.x ? -1 : 1, h = e.y < n.y ? 1 : -1;
    return `L ${a + s * d},${u}Q ${a},${u} ${a},${u + s * h}`;
  }
  const l = e.x < n.x ? 1 : -1, f = e.y < n.y ? -1 : 1;
  return `L ${a},${u + s * f}Q ${a},${u} ${a + s * l},${u}`;
}
function jv({ sourceX: e, sourceY: t, sourcePosition: n = Se.Bottom, targetX: o, targetY: s, targetPosition: a = Se.Top, borderRadius: u = 5, centerX: l, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [m, g, w, E, y] = gq({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: s },
    targetPosition: a,
    center: { x: l, y: f },
    offset: d,
    stepPosition: h
  });
  return [m.reduce((S, C, _) => {
    let k = "";
    return _ > 0 && _ < m.length - 1 ? k = vq(m[_ - 1], C, m[_ + 1], u) : k = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, S += k, S;
  }, ""), g, w, E, y];
}
function r1(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function yq(e) {
  var m;
  const { sourceNode: t, targetNode: n } = e;
  if (!r1(t) || !r1(n))
    return null;
  const o = t.internals.handleBounds || o1(t.handles), s = n.internals.handleBounds || o1(n.handles), a = i1((o == null ? void 0 : o.source) ?? [], e.sourceHandle), u = i1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === oi.Strict ? (s == null ? void 0 : s.target) ?? [] : ((s == null ? void 0 : s.target) ?? []).concat((s == null ? void 0 : s.source) ?? []),
    e.targetHandle
  );
  if (!a || !u)
    return (m = e.onError) == null || m.call(e, "008", An.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Se.Bottom, f = (u == null ? void 0 : u.position) || Se.Top, d = Ps(t, a, l), h = Ps(n, u, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: l,
    targetPosition: f
  };
}
function o1(e) {
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
function Ps(e, t, n = Se.Left, o = !1) {
  const s = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: u, height: l } = t ?? Qn(e);
  if (o)
    return { x: s + u / 2, y: a + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Se.Top:
      return { x: s + u / 2, y: a };
    case Se.Right:
      return { x: s + u, y: a + l / 2 };
    case Se.Bottom:
      return { x: s + u / 2, y: a + l };
    case Se.Left:
      return { x: s, y: a + l / 2 };
  }
}
function i1(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function zv(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function wq(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: s }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((u, l) => ([l.markerStart || o, l.markerEnd || s].forEach((f) => {
    if (f && typeof f == "object") {
      const d = zv(f, t);
      a.has(d) || (u.push({ id: d, color: f.color || n, ...f }), a.add(d));
    }
  }), u), []).sort((u, l) => u.id.localeCompare(l.id));
}
const jR = 1e3, xq = 10, py = {
  nodeOrigin: [0, 0],
  nodeExtent: Cs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, _q = {
  ...py,
  checkEquality: !0
};
function my(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function bq(e, t, n) {
  const o = my(py, n);
  for (const s of e.values())
    if (s.parentId)
      gy(s, e, t, o);
    else {
      const a = Ds(s, o.nodeOrigin), u = ai(s.extent) ? s.extent : o.nodeExtent, l = io(a, u, Qn(s));
      s.internals.positionAbsolute = l;
    }
}
function Sq(e, t) {
  if (!e.handles)
    return e.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], o = [];
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
    s.type === "source" ? n.push(a) : s.type === "target" && o.push(a);
  }
  return {
    source: n,
    target: o
  };
}
function Fv(e, t, n, o) {
  var d, h;
  const s = my(_q, o);
  let a = { i: -1 }, u = e.length > 0;
  const l = new Map(t), f = s != null && s.elevateNodesOnSelect ? jR : 0;
  t.clear(), n.clear();
  for (const m of e) {
    let g = l.get(m.id);
    if (s.checkEquality && m === (g == null ? void 0 : g.internals.userNode))
      t.set(m.id, g);
    else {
      const w = Ds(m, s.nodeOrigin), E = ai(m.extent) ? m.extent : s.nodeExtent, y = io(w, E, Qn(m));
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
          handleBounds: Sq(m, g),
          z: zR(m, f),
          userNode: m
        }
      }, t.set(m.id, g);
    }
    (g.measured === void 0 || g.measured.width === void 0 || g.measured.height === void 0) && !g.hidden && (u = !1), m.parentId && gy(g, t, n, o, a);
  }
  return u;
}
function Eq(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function gy(e, t, n, o, s) {
  const { elevateNodesOnSelect: a, nodeOrigin: u, nodeExtent: l } = my(py, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Eq(e, n), s && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++s.i, d.internals.z = d.internals.z + s.i * xq), s && d.internals.rootParentIndex !== void 0 && (s.i = d.internals.rootParentIndex);
  const h = a ? jR : 0, { x: m, y: g, z: w } = Cq(e, d, u, l, h), { positionAbsolute: E } = e.internals, y = m !== E.x || g !== E.y;
  (y || w !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: m, y: g } : E,
      z: w
    }
  });
}
function zR(e, t) {
  return (hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Cq(e, t, n, o, s) {
  const { x: a, y: u } = t.internals.positionAbsolute, l = Qn(e), f = Ds(e, n), d = ai(e.extent) ? io(f, e.extent, l) : f;
  let h = io({ x: a + d.x, y: u + d.y }, o, l);
  e.extent === "parent" && (h = kR(h, l, t));
  const m = zR(e, s), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= m ? g + 1 : m
  };
}
function vy(e, t, n, o = [0, 0]) {
  var u;
  const s = [], a = /* @__PURE__ */ new Map();
  for (const l of e) {
    const f = t.get(l.parentId);
    if (!f)
      continue;
    const d = ((u = a.get(l.parentId)) == null ? void 0 : u.expandedRect) ?? si(f), h = NR(d, l.rect);
    a.set(l.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: l, parent: f }, d) => {
    var _;
    const h = f.internals.positionAbsolute, m = Qn(f), g = f.origin ?? o, w = l.x < h.x ? Math.round(Math.abs(h.x - l.x)) : 0, E = l.y < h.y ? Math.round(Math.abs(h.y - l.y)) : 0, y = Math.max(m.width, Math.round(l.width)), x = Math.max(m.height, Math.round(l.height)), S = (y - m.width) * g[0], C = (x - m.height) * g[1];
    (w > 0 || E > 0 || S || C) && (s.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - w + S,
        y: f.position.y - E + C
      }
    }), (_ = n.get(d)) == null || _.forEach((k) => {
      e.some((N) => N.id === k.id) || s.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + w,
          y: k.position.y + E
        }
      });
    })), (m.width < l.width || m.height < l.height || w || E) && s.push({
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
function kq(e, t, n, o, s, a) {
  const u = o == null ? void 0 : o.querySelector(".xyflow__viewport");
  let l = !1;
  if (!u)
    return { changes: [], updatedInternals: l };
  const f = [], d = window.getComputedStyle(u), { m22: h } = new window.DOMMatrixReadOnly(d.transform), m = [];
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
      }), l = !0;
      continue;
    }
    const E = hy(g.nodeElement), y = w.measured.width !== E.width || w.measured.height !== E.height;
    if (!!(E.width && E.height && (y || !w.internals.handleBounds || g.force))) {
      const S = g.nodeElement.getBoundingClientRect(), C = ai(w.extent) ? w.extent : a;
      let { positionAbsolute: _ } = w.internals;
      w.parentId && w.extent === "parent" ? _ = kR(_, E, t.get(w.parentId)) : C && (_ = io(_, C, E));
      const k = {
        ...w,
        measured: E,
        internals: {
          ...w.internals,
          positionAbsolute: _,
          handleBounds: {
            source: Jx("source", g.nodeElement, S, h, w.id),
            target: Jx("target", g.nodeElement, S, h, w.id)
          }
        }
      };
      t.set(w.id, k), w.parentId && gy(k, t, n, { nodeOrigin: s }), l = !0, y && (f.push({
        id: w.id,
        type: "dimensions",
        dimensions: E
      }), w.expandParent && w.parentId && m.push({
        id: w.id,
        parentId: w.parentId,
        rect: si(k, s)
      }));
    }
  }
  if (m.length > 0) {
    const g = vy(m, t, n, s);
    f.push(...g);
  }
  return { changes: f, updatedInternals: l };
}
async function Rq({ delta: e, panZoom: t, transform: n, translateExtent: o, width: s, height: a }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const u = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [s, a]
  ], o), l = !!u && (u.x !== n[0] || u.y !== n[1] || u.k !== n[2]);
  return Promise.resolve(l);
}
function s1(e, t, n, o, s, a) {
  let u = s;
  const l = o.get(u) || /* @__PURE__ */ new Map();
  o.set(u, l.set(n, t)), u = `${s}-${e}`;
  const f = o.get(u) || /* @__PURE__ */ new Map();
  if (o.set(u, f.set(n, t)), a) {
    u = `${s}-${e}-${a}`;
    const d = o.get(u) || /* @__PURE__ */ new Map();
    o.set(u, d.set(n, t));
  }
}
function FR(e, t, n) {
  e.clear(), t.clear();
  for (const o of n) {
    const { source: s, target: a, sourceHandle: u = null, targetHandle: l = null } = o, f = { edgeId: o.id, source: s, target: a, sourceHandle: u, targetHandle: l }, d = `${s}-${u}--${a}-${l}`, h = `${a}-${l}--${s}-${u}`;
    s1("source", f, h, e, s, u), s1("target", f, d, e, a, l), t.set(o.id, o);
  }
}
function $R(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : $R(n, t) : !1;
}
function a1(e, t, n) {
  var s;
  let o = e;
  do {
    if ((s = o == null ? void 0 : o.matches) != null && s.call(o, t))
      return !0;
    if (o === n)
      return !1;
    o = o == null ? void 0 : o.parentElement;
  } while (o);
  return !1;
}
function Nq(e, t, n, o) {
  const s = /* @__PURE__ */ new Map();
  for (const [a, u] of e)
    if ((u.selected || u.id === o) && (!u.parentId || !$R(u, e)) && (u.draggable || t && typeof u.draggable > "u")) {
      const l = e.get(a);
      l && s.set(a, {
        id: a,
        position: l.position || { x: 0, y: 0 },
        distance: {
          x: n.x - l.internals.positionAbsolute.x,
          y: n.y - l.internals.positionAbsolute.y
        },
        extent: l.extent,
        parentId: l.parentId,
        origin: l.origin,
        expandParent: l.expandParent,
        internals: {
          positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: l.measured.width ?? 0,
          height: l.measured.height ?? 0
        }
      });
    }
  return s;
}
function Uf({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
  var u, l, f;
  const s = [];
  for (const [d, h] of t) {
    const m = (u = n.get(d)) == null ? void 0 : u.internals.userNode;
    m && s.push({
      ...m,
      position: h.position,
      dragging: o
    });
  }
  if (!e)
    return [s[0], s];
  const a = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    a ? {
      ...a,
      position: ((f = t.get(e)) == null ? void 0 : f.position) || a.position,
      dragging: o
    } : s[0],
    s
  ];
}
function Pq({ dragItems: e, snapGrid: t, x: n, y: o }) {
  const s = e.values().next().value;
  if (!s)
    return null;
  const a = {
    x: n - s.distance.x,
    y: o - s.distance.y
  }, u = zs(a, t);
  return {
    x: u.x - a.x,
    y: u.y - a.y
  };
}
function Tq({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: s }) {
  let a = { x: null, y: null }, u = 0, l = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, m = !1, g = null, w = !1, E = !1, y = null;
  function x({ noDragClassName: C, handleSelector: _, domNode: k, isSelectable: N, nodeId: T, nodeClickDistance: A = 0 }) {
    g = Dt(k);
    function O({ x: V, y: X }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: $, snapToGrid: Y, nodeOrigin: I, onNodeDrag: j, onSelectionDrag: Q, onError: q, updateNodePositions: W } = t();
      a = { x: V, y: X };
      let ie = !1;
      const F = l.size > 1, Z = F && H ? Dv(js(l)) : null, ee = F && Y ? Pq({
        dragItems: l,
        snapGrid: $,
        x: V,
        y: X
      }) : null;
      for (const [K, te] of l) {
        if (!L.has(K))
          continue;
        let se = { x: V - te.distance.x, y: X - te.distance.y };
        Y && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : zs(se, $));
        let ae = null;
        if (F && H && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, _e = pe.x - Z.x + H[0][0], ge = pe.x + te.measured.width - Z.x2 + H[1][0], Ne = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [_e, Ne],
            [ge, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = CR({
          nodeId: K,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: I,
          onError: q
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (W(l, !0), y && (o || j || !T && Q))) {
        const [K, te] = Uf({
          nodeId: T,
          dragItems: l,
          nodeLookup: L
        });
        o == null || o(y, l, K, te), j == null || j(y, K, te), T || Q == null || Q(y, te);
      }
    }
    async function D() {
      if (!h)
        return;
      const { transform: V, panBy: X, autoPanSpeed: L, autoPanOnNodeDrag: H } = t();
      if (!H) {
        f = !1, cancelAnimationFrame(u);
        return;
      }
      const [$, Y] = RR(d, h, L);
      ($ !== 0 || Y !== 0) && (a.x = (a.x ?? 0) - $ / V[2], a.y = (a.y ?? 0) - Y / V[2], await X({ x: $, y: Y }) && O(a)), u = requestAnimationFrame(D);
    }
    function G(V) {
      var F;
      const { nodeLookup: X, multiSelectionActive: L, nodesDraggable: H, transform: $, snapGrid: Y, snapToGrid: I, selectNodesOnDrag: j, onNodeDragStart: Q, onSelectionDragStart: q, unselectNodesAndEdges: W } = t();
      m = !0, (!j || !N) && !L && T && ((F = X.get(T)) != null && F.selected || W()), N && j && T && (e == null || e(T));
      const ie = xs(V.sourceEvent, { transform: $, snapGrid: Y, snapToGrid: I, containerBounds: h });
      if (a = ie, l = Nq(X, H, ie, T), l.size > 0 && (n || Q || !T && q)) {
        const [Z, ee] = Uf({
          nodeId: T,
          dragItems: l,
          nodeLookup: X
        });
        n == null || n(V.sourceEvent, l, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), T || q == null || q(V.sourceEvent, ee);
      }
    }
    const B = oR().clickDistance(A).on("start", (V) => {
      const { domNode: X, nodeDragThreshold: L, transform: H, snapGrid: $, snapToGrid: Y } = t();
      h = (X == null ? void 0 : X.getBoundingClientRect()) || null, w = !1, E = !1, y = V.sourceEvent, L === 0 && G(V), a = xs(V.sourceEvent, { transform: H, snapGrid: $, snapToGrid: Y, containerBounds: h }), d = pn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: X, transform: L, snapGrid: H, snapToGrid: $, nodeDragThreshold: Y, nodeLookup: I } = t(), j = xs(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: $, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !I.has(T)) && (w = !0), !w) {
        if (!f && X && m && (f = !0, D()), !m) {
          const Q = pn(V.sourceEvent, h), q = Q.x - d.x, W = Q.y - d.y;
          Math.sqrt(q * q + W * W) > Y && G(V);
        }
        (a.x !== j.xSnapped || a.y !== j.ySnapped) && l && m && (d = pn(V.sourceEvent, h), O(j));
      }
    }).on("end", (V) => {
      if (!(!m || w) && (f = !1, m = !1, cancelAnimationFrame(u), l.size > 0)) {
        const { nodeLookup: X, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: $ } = t();
        if (E && (L(l, !1), E = !1), s || H || !T && $) {
          const [Y, I] = Uf({
            nodeId: T,
            dragItems: l,
            nodeLookup: X,
            dragging: !1
          });
          s == null || s(V.sourceEvent, l, Y, I), H == null || H(V.sourceEvent, Y, I), T || $ == null || $(V.sourceEvent, I);
        }
      }
    }).filter((V) => {
      const X = V.target;
      return !V.button && (!C || !a1(X, `.${C}`, k)) && (!_ || a1(X, _, k));
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
function Aq(e, t, n) {
  const o = [], s = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    Rs(s, si(a)) > 0 && o.push(a);
  return o;
}
const Iq = 250;
function Mq(e, t, n, o) {
  var l, f;
  let s = [], a = 1 / 0;
  const u = Aq(e, n, t + Iq);
  for (const d of u) {
    const h = [...((l = d.internals.handleBounds) == null ? void 0 : l.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const m of h) {
      if (o.nodeId === m.nodeId && o.type === m.type && o.id === m.id)
        continue;
      const { x: g, y: w } = Ps(d, m, m.position, !0), E = Math.sqrt(Math.pow(g - e.x, 2) + Math.pow(w - e.y, 2));
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
function BR(e, t, n, o, s, a = !1) {
  var d, h, m;
  const u = o.get(e);
  if (!u)
    return null;
  const l = s === "strict" ? (d = u.internals.handleBounds) == null ? void 0 : d[t] : [...((h = u.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((m = u.internals.handleBounds) == null ? void 0 : m.target) ?? []], f = (n ? l == null ? void 0 : l.find((g) => g.id === n) : l == null ? void 0 : l[0]) ?? null;
  return f && a ? { ...f, ...Ps(u, f, f.position, !0) } : f;
}
function VR(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Oq(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const HR = () => !0;
function Lq(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: s, edgeUpdaterType: a, isTarget: u, domNode: l, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: m, panBy: g, cancelConnection: w, onConnectStart: E, onConnect: y, onConnectEnd: x, isValidConnection: S = HR, onReconnectEnd: C, updateConnection: _, getTransform: k, getFromHandle: N, autoPanSpeed: T, dragThreshold: A = 1, handleDomNode: O }) {
  const D = AR(e.target);
  let G = 0, B;
  const { x: V, y: X } = pn(e), L = VR(a, O), H = l == null ? void 0 : l.getBoundingClientRect();
  let $ = !1;
  if (!H || !L)
    return;
  const Y = BR(s, L, o, f, t);
  if (!Y)
    return;
  let I = pn(e, H), j = !1, Q = null, q = !1, W = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = RR(I, H, T);
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
    from: Ps(Z, F, Se.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: Z,
    to: I,
    toHandle: null,
    toPosition: Kx[F.position],
    toNode: null,
    pointer: I
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
    I = pn(ce, H), B = Mq(Fs(I, de, !1, [1, 1]), n, f, F), j || (ie(), j = !0);
    const pe = WR(ce, {
      handle: B,
      connectionMode: t,
      fromNodeId: s,
      fromHandleId: o,
      fromType: u ? "target" : "source",
      isValidConnection: S,
      doc: D,
      lib: d,
      flowId: m,
      nodeLookup: f
    });
    W = pe.handleDomNode, Q = pe.connection, q = Oq(!!B, pe.isValid);
    const _e = {
      // from stays the same
      ...K,
      isValid: q,
      to: pe.toHandle && q ? Wu({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : I,
      toHandle: pe.toHandle,
      toPosition: q && pe.toHandle ? pe.toHandle.position : Kx[F.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: I
    };
    _(_e), K = _e;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if ($) {
        (B || W) && Q && q && (y == null || y(Q));
        const { inProgress: de, ...pe } = K, _e = {
          ...pe,
          toPosition: K.toHandle ? K.toPosition : null
        };
        x == null || x(ce, _e), a && (C == null || C(ce, _e));
      }
      w(), cancelAnimationFrame(G), j = !1, q = !1, Q = null, W = null, D.removeEventListener("mousemove", se), D.removeEventListener("mouseup", ae), D.removeEventListener("touchmove", se), D.removeEventListener("touchend", ae);
    }
  }
  D.addEventListener("mousemove", se), D.addEventListener("mouseup", ae), D.addEventListener("touchmove", se), D.addEventListener("touchend", ae);
}
function WR(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: s, fromType: a, doc: u, lib: l, flowId: f, isValidConnection: d = HR, nodeLookup: h }) {
  const m = a === "target", g = t ? u.querySelector(`.${l}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: w, y: E } = pn(e), y = u.elementFromPoint(w, E), x = y != null && y.classList.contains(`${l}-flow__handle`) ? y : g, S = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = VR(void 0, x), _ = x.getAttribute("data-nodeid"), k = x.getAttribute("data-handleid"), N = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!_ || !C)
      return S;
    const A = {
      source: m ? _ : o,
      sourceHandle: m ? k : s,
      target: m ? o : _,
      targetHandle: m ? s : k
    };
    S.connection = A;
    const D = N && T && (n === oi.Strict ? m && C === "source" || !m && C === "target" : _ !== o || k !== s);
    S.isValid = D && d(A), S.toHandle = BR(_, C, k, h, n, !0);
  }
  return S;
}
const $v = {
  onPointerDown: Lq,
  isValid: WR
};
function qq({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const s = Dt(e);
  function a({ translateExtent: l, width: f, height: d, zoomStep: h = 1, pannable: m = !0, zoomable: g = !0, inversePan: w = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), N = _.sourceEvent.ctrlKey && Ns() ? 10 : 1, T = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = k[2] * Math.pow(2, T * N);
      t.scaleTo(A);
    };
    let y = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, S = (_) => {
      const k = n();
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
      }, D, l);
    }, C = wR().on("start", x).on("zoom", m ? S : null).on("zoom.wheel", g ? E : null);
    s.call(C, {});
  }
  function u() {
    s.on("zoom", null);
  }
  return {
    update: a,
    destroy: u,
    pointer: fn
  };
}
const ll = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Gf = ({ x: e, y: t, zoom: n }) => sl.translate(e, t).scale(n), Xo = (e, t) => e.target.closest(`.${t}`), UR = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Dq = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Yf = (e, t = 0, n = Dq, o = () => {
}) => {
  const s = typeof t == "number" && t > 0;
  return s || o(), s ? e.transition().duration(t).ease(n).on("end", o) : e;
}, GR = (e) => {
  const t = e.ctrlKey && Ns() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function jq({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: s, panOnScrollSpeed: a, zoomOnPinch: u, onPanZoomStart: l, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (Xo(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const m = n.property("__zoom").k || 1;
    if (h.ctrlKey && u) {
      const x = fn(h), S = GR(h), C = m * Math.pow(2, S);
      o.scaleTo(n, C, x, h);
      return;
    }
    const g = h.deltaMode === 1 ? 20 : 1;
    let w = s === no.Vertical ? 0 : h.deltaX * g, E = s === no.Horizontal ? 0 : h.deltaY * g;
    !Ns() && h.shiftKey && s !== no.Vertical && (w = h.deltaY * g, E = 0), o.translateBy(
      n,
      -(w / m) * a,
      -(E / m) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = ll(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, l == null || l(h, y));
  };
}
function zq({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, s) {
    const a = o.type === "wheel", u = !t && a && !o.ctrlKey, l = Xo(o, e);
    if (o.ctrlKey && a && l && o.preventDefault(), u || l)
      return null;
    o.preventDefault(), n.call(this, o, s);
  };
}
function Fq({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var a, u, l;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const s = ll(o.transform);
    e.mouseButton = ((u = o.sourceEvent) == null ? void 0 : u.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((l = o.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0), n && (n == null || n(o.sourceEvent, s));
  };
}
function $q({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: s }) {
  return (a) => {
    var u, l;
    e.usedRightMouseButton = !!(n && UR(t, e.mouseButton ?? 0)), (u = a.sourceEvent) != null && u.sync || o([a.transform.x, a.transform.y, a.transform.k]), s && !((l = a.sourceEvent) != null && l.internal) && (s == null || s(a.sourceEvent, ll(a.transform)));
  };
}
function Bq({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: s, onPaneContextMenu: a }) {
  return (u) => {
    var l;
    if (!((l = u.sourceEvent) != null && l.internal) && (e.isZoomingOrPanning = !1, a && UR(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && u.sourceEvent && a(u.sourceEvent), e.usedRightMouseButton = !1, o(!1), s)) {
      const f = ll(u.transform);
      e.prevViewport = f, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          s == null || s(u.sourceEvent, f);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Vq({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: s, zoomOnDoubleClick: a, userSelectionActive: u, noWheelClassName: l, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (m) => {
    var x;
    const g = e || t, w = n && m.ctrlKey, E = m.type === "wheel";
    if (m.button === 1 && m.type === "mousedown" && (Xo(m, `${d}-flow__node`) || Xo(m, `${d}-flow__edge`)))
      return !0;
    if (!o && !g && !s && !a && !n || u || h && !E || Xo(m, l) && E || Xo(m, f) && (!E || s && E && !e) || !n && m.ctrlKey && E)
      return !1;
    if (!n && m.type === "touchstart" && ((x = m.touches) == null ? void 0 : x.length) > 1)
      return m.preventDefault(), !1;
    if (!g && !s && !w && E || !o && (m.type === "mousedown" || m.type === "touchstart") || Array.isArray(o) && !o.includes(m.button) && m.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(m.button) || !m.button || m.button <= 1;
    return (!m.ctrlKey || E) && y;
  };
}
function Hq({ domNode: e, minZoom: t, maxZoom: n, translateExtent: o, viewport: s, onPanZoom: a, onPanZoomStart: u, onPanZoomEnd: l, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), m = wR().scaleExtent([t, n]).translateExtent(o), g = Dt(e).call(m);
  C({
    x: s.x,
    y: s.y,
    zoom: ii(s.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const w = g.on("wheel.zoom"), E = g.on("dblclick.zoom");
  m.wheelDelta(GR);
  function y(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Pu).transform(Yf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: B, noPanClassName: V, onPaneContextMenu: X, userSelectionActive: L, panOnScroll: H, panOnDrag: $, panOnScrollMode: Y, panOnScrollSpeed: I, preventScrolling: j, zoomOnPinch: Q, zoomOnScroll: q, zoomOnDoubleClick: W, zoomActivationKeyPressed: ie, lib: F, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: K, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && S();
    const se = H && !ie && !L;
    m.clickDistance(te ? 1 / 0 : !hn(K) || K < 0 ? 0 : K);
    const ae = se ? jq({
      zoomPanValues: d,
      noWheelClassName: B,
      d3Selection: g,
      d3Zoom: m,
      panOnScrollMode: Y,
      panOnScrollSpeed: I,
      zoomOnPinch: Q,
      onPanZoomStart: u,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : zq({
      noWheelClassName: B,
      preventScrolling: j,
      d3ZoomHandler: w
    });
    if (g.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = Fq({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: u
      });
      m.on("start", de);
      const pe = $q({
        zoomPanValues: d,
        panOnDrag: $,
        onPaneContextMenu: !!X,
        onPanZoom: a,
        onTransformChange: Z
      });
      m.on("zoom", pe);
      const _e = Bq({
        zoomPanValues: d,
        panOnDrag: $,
        panOnScroll: H,
        onPaneContextMenu: X,
        onPanZoomEnd: l,
        onDraggingChange: f
      });
      m.on("end", _e);
    }
    const ce = Vq({
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
    const L = Gf(B), H = m == null ? void 0 : m.constrain()(L, V, X);
    return H && await y(H), new Promise(($) => $(H));
  }
  async function _(B, V) {
    const X = Gf(B);
    return await y(X, V), new Promise((L) => L(X));
  }
  function k(B) {
    if (g) {
      const V = Gf(B), X = g.property("__zoom");
      (X.k !== B.zoom || X.x !== B.x || X.y !== B.y) && (m == null || m.transform(g, V, null, { sync: !0 }));
    }
  }
  function N() {
    const B = g ? yR(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: B.x, y: B.y, zoom: B.k };
  }
  function T(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Pu).scaleTo(Yf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function A(B, V) {
    return g ? new Promise((X) => {
      m == null || m.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? ws : Pu).scaleBy(Yf(g, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
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
function Wq({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: s, affectsY: a }) {
  const u = e - t, l = n - o, f = [u > 0 ? 1 : u < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return u && s && (f[0] = f[0] * -1), l && a && (f[1] = f[1] * -1), f;
}
function u1(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), o = e.includes("left"), s = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
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
function vu(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function l1(e, t) {
  return e ? !t : t;
}
function Uq(e, t, n, o, s, a, u, l) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: m } = t, g = h && m, { xSnapped: w, ySnapped: E } = n, { minWidth: y, maxWidth: x, minHeight: S, maxHeight: C } = o, { x: _, y: k, width: N, height: T, aspectRatio: A } = e;
  let O = Math.floor(h ? w - e.pointerX : 0), D = Math.floor(m ? E - e.pointerY : 0);
  const G = N + (f ? -O : O), B = T + (d ? -D : D), V = -a[0] * N, X = -a[1] * T;
  let L = vu(G, y, x), H = vu(B, S, C);
  if (u) {
    let I = 0, j = 0;
    f && O < 0 ? I = br(_ + O + V, u[0][0]) : !f && O > 0 && (I = Sr(_ + G + V, u[1][0])), d && D < 0 ? j = br(k + D + X, u[0][1]) : !d && D > 0 && (j = Sr(k + B + X, u[1][1])), L = Math.max(L, I), H = Math.max(H, j);
  }
  if (l) {
    let I = 0, j = 0;
    f && O > 0 ? I = Sr(_ + O, l[0][0]) : !f && O < 0 && (I = br(_ + G, l[1][0])), d && D > 0 ? j = Sr(k + D, l[0][1]) : !d && D < 0 && (j = br(k + B, l[1][1])), L = Math.max(L, I), H = Math.max(H, j);
  }
  if (s) {
    if (h) {
      const I = vu(G / A, S, C) * A;
      if (L = Math.max(L, I), u) {
        let j = 0;
        !f && !d || f && !d && g ? j = Sr(k + X + G / A, u[1][1]) * A : j = br(k + X + (f ? O : -O) / A, u[0][1]) * A, L = Math.max(L, j);
      }
      if (l) {
        let j = 0;
        !f && !d || f && !d && g ? j = br(k + G / A, l[1][1]) * A : j = Sr(k + (f ? O : -O) / A, l[0][1]) * A, L = Math.max(L, j);
      }
    }
    if (m) {
      const I = vu(B * A, y, x) / A;
      if (H = Math.max(H, I), u) {
        let j = 0;
        !f && !d || d && !f && g ? j = Sr(_ + B * A + V, u[1][0]) / A : j = br(_ + (d ? D : -D) * A + V, u[0][0]) / A, H = Math.max(H, j);
      }
      if (l) {
        let j = 0;
        !f && !d || d && !f && g ? j = br(_ + B * A, l[1][0]) / A : j = Sr(_ + (d ? D : -D) * A, l[0][0]) / A, H = Math.max(H, j);
      }
    }
  }
  D = D + (D < 0 ? H : -H), O = O + (O < 0 ? L : -L), s && (g ? G > B * A ? D = (l1(f, d) ? -O : O) / A : O = (l1(f, d) ? -D : D) * A : h ? (D = O / A, d = f) : (O = D * A, f = d));
  const $ = f ? _ + O : _, Y = d ? k + D : k;
  return {
    width: N + (f ? -O : O),
    height: T + (d ? -D : D),
    x: a[0] * O * (f ? -1 : 1) + $,
    y: a[1] * D * (d ? -1 : 1) + Y
  };
}
const YR = { width: 0, height: 0, x: 0, y: 0 }, Gq = {
  ...YR,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function Yq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function Kq(e, t, n) {
  const o = t.position.x + e.position.x, s = t.position.y + e.position.y, a = e.measured.width ?? 0, u = e.measured.height ?? 0, l = n[0] * a, f = n[1] * u;
  return [
    [o - l, s - f],
    [o + a - l, s + u - f]
  ];
}
function Xq({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: s }) {
  const a = Dt(e);
  let u = {
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
  function l({ controlPosition: d, boundaries: h, keepAspectRatio: m, resizeDirection: g, onResizeStart: w, onResize: E, onResizeEnd: y, shouldResize: x }) {
    let S = { ...YR }, C = { ...Gq };
    u = {
      boundaries: h,
      resizeDirection: g,
      keepAspectRatio: m,
      controlDirection: u1(d)
    };
    let _, k = null, N = [], T, A, O, D = !1;
    const G = oR().on("start", (B) => {
      const { nodeLookup: V, transform: X, snapGrid: L, snapToGrid: H, nodeOrigin: $, paneDomNode: Y } = n();
      if (_ = V.get(t), !_)
        return;
      k = (Y == null ? void 0 : Y.getBoundingClientRect()) ?? null;
      const { xSnapped: I, ySnapped: j } = xs(B.sourceEvent, {
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
        pointerX: I,
        pointerY: j,
        aspectRatio: S.width / S.height
      }, T = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (T = V.get(_.parentId), A = T && _.extent === "parent" ? Yq(T) : void 0), N = [], O = void 0;
      for (const [Q, q] of V)
        if (q.parentId === t && (N.push({
          id: Q,
          position: { ...q.position },
          extent: q.extent
        }), q.extent === "parent" || q.expandParent)) {
          const W = Kq(q, _, q.origin ?? $);
          O ? O = [
            [Math.min(W[0][0], O[0][0]), Math.min(W[0][1], O[0][1])],
            [Math.max(W[1][0], O[1][0]), Math.max(W[1][1], O[1][1])]
          ] : O = W;
        }
      w == null || w(B, { ...S });
    }).on("drag", (B) => {
      const { transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H } = n(), $ = xs(B.sourceEvent, {
        transform: V,
        snapGrid: X,
        snapToGrid: L,
        containerBounds: k
      }), Y = [];
      if (!_)
        return;
      const { x: I, y: j, width: Q, height: q } = S, W = {}, ie = _.origin ?? H, { width: F, height: Z, x: ee, y: K } = Uq(C, u.controlDirection, $, u.boundaries, u.keepAspectRatio, ie, A, O), te = F !== Q, se = Z !== q, ae = ee !== I && te, ce = K !== j && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (W.x = ae ? ee : S.x, W.y = ce ? K : S.y, S.x = W.x, S.y = W.y, N.length > 0)) {
        const ge = ee - I, Ne = K - j;
        for (const Ee of N)
          Ee.position = {
            x: Ee.position.x - ge + ie[0] * (F - Q),
            y: Ee.position.y - Ne + ie[1] * (Z - q)
          }, Y.push(Ee);
      }
      if ((te || se) && (W.width = te && (!u.resizeDirection || u.resizeDirection === "horizontal") ? F : S.width, W.height = se && (!u.resizeDirection || u.resizeDirection === "vertical") ? Z : S.height, S.width = W.width, S.height = W.height), T && _.expandParent) {
        const ge = ie[0] * (W.width ?? 0);
        W.x && W.x < ge && (S.x = ge, C.x = C.x - (W.x - ge));
        const Ne = ie[1] * (W.height ?? 0);
        W.y && W.y < Ne && (S.y = Ne, C.y = C.y - (W.y - Ne));
      }
      const de = Wq({
        width: S.width,
        prevWidth: Q,
        height: S.height,
        prevHeight: q,
        affectsX: u.controlDirection.affectsX,
        affectsY: u.controlDirection.affectsY
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
    update: l,
    destroy: f
  };
}
var Kf = { exports: {} }, Xf = {}, Qf = { exports: {} }, Zf = {};
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
function Qq() {
  if (c1) return Zf;
  c1 = 1;
  var e = Os();
  function t(m, g) {
    return m === g && (m !== 0 || 1 / m === 1 / g) || m !== m && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, s = e.useEffect, a = e.useLayoutEffect, u = e.useDebugValue;
  function l(m, g) {
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
    ), u(w), w;
  }
  function f(m) {
    var g = m.getSnapshot;
    m = m.value;
    try {
      var w = g();
      return !n(m, w);
    } catch {
      return !0;
    }
  }
  function d(m, g) {
    return g();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : l;
  return Zf.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Zf;
}
var f1;
function Zq() {
  return f1 || (f1 = 1, Qf.exports = Qq()), Qf.exports;
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
function Jq() {
  if (d1) return Xf;
  d1 = 1;
  var e = Os(), t = Zq();
  function n(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, a = e.useRef, u = e.useEffect, l = e.useMemo, f = e.useDebugValue;
  return Xf.useSyncExternalStoreWithSelector = function(d, h, m, g, w) {
    var E = a(null);
    if (E.current === null) {
      var y = { hasValue: !1, value: null };
      E.current = y;
    } else y = E.current;
    E = l(
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
    return u(
      function() {
        y.hasValue = !0, y.value = x;
      },
      [x]
    ), f(x), x;
  }, Xf;
}
var h1;
function eD() {
  return h1 || (h1 = 1, Kf.exports = Jq()), Kf.exports;
}
var tD = eD();
const nD = /* @__PURE__ */ ty(tD), rD = {}, p1 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (h, m) => {
    const g = typeof h == "function" ? h(t) : h;
    if (!Object.is(g, t)) {
      const w = t;
      t = m ?? (typeof g != "object" || g === null) ? g : Object.assign({}, t, g), n.forEach((E) => E(t, w));
    }
  }, s = () => t, f = { setState: o, getState: s, getInitialState: () => d, subscribe: (h) => (n.add(h), () => n.delete(h)), destroy: () => {
    (rD ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(o, s, f);
  return f;
}, oD = (e) => e ? p1(e) : p1, { useDebugValue: iD } = cn, { useSyncExternalStoreWithSelector: sD } = nD, aD = (e) => e;
function KR(e, t = aD, n) {
  const o = sD(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return iD(o), o;
}
const m1 = (e, t) => {
  const n = oD(e), o = (s, a = t) => KR(n, s, a);
  return Object.assign(o, n), o;
}, uD = (e, t) => e ? m1(e, t) : m1;
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
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || !Object.is(e[o], t[o]))
      return !1;
  return !0;
}
var $s = Bk();
const lD = /* @__PURE__ */ ty($s), cl = R.createContext(null), cD = cl.Provider, XR = An.error001();
function Ie(e, t) {
  const n = R.useContext(cl);
  if (n === null)
    throw new Error(XR);
  return KR(n, e, t);
}
function $e() {
  const e = R.useContext(cl);
  if (e === null)
    throw new Error(XR);
  return R.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const g1 = { display: "none" }, fD = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, QR = "react-flow__node-desc", ZR = "react-flow__edge-desc", dD = "react-flow__aria-live", hD = (e) => e.ariaLiveMessage, pD = (e) => e.ariaLabelConfig;
function mD({ rfId: e }) {
  const t = Ie(hD);
  return M.jsx("div", { id: `${dD}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: fD, children: t });
}
function gD({ rfId: e, disableKeyboardA11y: t }) {
  const n = Ie(pD);
  return M.jsxs(M.Fragment, { children: [M.jsx("div", { id: `${QR}-${e}`, style: g1, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), M.jsx("div", { id: `${ZR}-${e}`, style: g1, children: n["edge.a11yDescription.default"] }), !t && M.jsx(mD, { rfId: e })] });
}
const fl = R.forwardRef(({ position: e = "top-left", children: t, className: n, style: o, ...s }, a) => {
  const u = `${e}`.split("-");
  return M.jsx("div", { className: nt(["react-flow__panel", n, ...u]), style: o, ref: a, ...s, children: t });
});
fl.displayName = "Panel";
function vD({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : M.jsx(fl, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: M.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const yD = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, yu = (e) => e.id;
function wD(e, t) {
  return Ke(e.selectedNodes.map(yu), t.selectedNodes.map(yu)) && Ke(e.selectedEdges.map(yu), t.selectedEdges.map(yu));
}
function xD({ onSelectionChange: e }) {
  const t = $e(), { selectedNodes: n, selectedEdges: o } = Ie(yD, wD);
  return R.useEffect(() => {
    const s = { nodes: n, edges: o };
    e == null || e(s), t.getState().onSelectionChangeHandlers.forEach((a) => a(s));
  }, [n, o, e]), null;
}
const _D = (e) => !!e.onSelectionChangeHandlers;
function bD({ onSelectionChange: e }) {
  const t = Ie(_D);
  return e || t ? M.jsx(xD, { onSelectionChange: e }) : null;
}
const JR = [0, 0], SD = { x: 0, y: 0, zoom: 1 }, ED = [
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
], v1 = [...ED, "rfId"], CD = (e) => ({
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
  nodeOrigin: JR,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function kD(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: s, setTranslateExtent: a, setNodeExtent: u, reset: l, setDefaultNodesAndEdges: f } = Ie(CD, Ke), d = $e();
  R.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = y1, l();
  }), []);
  const h = R.useRef(y1);
  return R.useEffect(
    () => {
      for (const m of v1) {
        const g = e[m], w = h.current[m];
        g !== w && (typeof e[m] > "u" || (m === "nodes" ? t(g) : m === "edges" ? n(g) : m === "minZoom" ? o(g) : m === "maxZoom" ? s(g) : m === "translateExtent" ? a(g) : m === "nodeExtent" ? u(g) : m === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: uq(g) }) : m === "fitView" ? d.setState({ fitViewQueued: g }) : m === "fitViewOptions" ? d.setState({ fitViewOptions: g }) : d.setState({ [m]: g })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    v1.map((m) => e[m])
  ), null;
}
function w1() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function RD(e) {
  var o;
  const [t, n] = R.useState(e === "system" ? null : e);
  return R.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const s = w1(), a = () => n(s != null && s.matches ? "dark" : "light");
    return a(), s == null || s.addEventListener("change", a), () => {
      s == null || s.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = w1()) != null && o.matches ? "dark" : "light";
}
const x1 = typeof document < "u" ? document : null;
function Ts(e = null, t = { target: x1, actInsideInputWithModifier: !0 }) {
  const [n, o] = R.useState(!1), s = R.useRef(!1), a = R.useRef(/* @__PURE__ */ new Set([])), [u, l] = R.useMemo(() => {
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
    const f = (t == null ? void 0 : t.target) ?? x1, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (w) => {
        var x, S;
        if (s.current = w.ctrlKey || w.metaKey || w.shiftKey || w.altKey, (!s.current || s.current && !d) && IR(w))
          return !1;
        const y = b1(w.code, l);
        if (a.current.add(w[y]), _1(u, a.current, !1)) {
          const C = ((S = (x = w.composedPath) == null ? void 0 : x.call(w)) == null ? void 0 : S[0]) || w.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (s.current || !_) && w.preventDefault(), o(!0);
        }
      }, m = (w) => {
        const E = b1(w.code, l);
        _1(u, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(w[E]), w.key === "Meta" && a.current.clear(), s.current = !1;
      }, g = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", m), window.addEventListener("blur", g), window.addEventListener("contextmenu", g), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", m), window.removeEventListener("blur", g), window.removeEventListener("contextmenu", g);
      };
    }
  }, [e, o]), n;
}
function _1(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((s) => t.has(s)));
}
function b1(e, t) {
  return t.includes(e) ? "code" : "key";
}
const ND = () => {
  const e = $e();
  return R.useMemo(() => ({
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
      const { transform: [o, s, a], panZoom: u } = e.getState();
      return u ? (await u.setViewport({
        x: t.x ?? o,
        y: t.y ?? s,
        zoom: t.zoom ?? a
      }, n), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, o] = e.getState().transform;
      return { x: t, y: n, zoom: o };
    },
    setCenter: async (t, n, o) => e.getState().setCenter(t, n, o),
    fitBounds: async (t, n) => {
      const { width: o, height: s, minZoom: a, maxZoom: u, panZoom: l } = e.getState(), f = dy(t, o, s, a, u, (n == null ? void 0 : n.padding) ?? 0.1);
      return l ? (await l.setViewport(f, {
        duration: n == null ? void 0 : n.duration,
        ease: n == null ? void 0 : n.ease,
        interpolate: n == null ? void 0 : n.interpolate
      }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: o, snapGrid: s, snapToGrid: a, domNode: u } = e.getState();
      if (!u)
        return t;
      const { x: l, y: f } = u.getBoundingClientRect(), d = {
        x: t.x - l,
        y: t.y - f
      }, h = n.snapGrid ?? s, m = n.snapToGrid ?? a;
      return Fs(d, o, m, h);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: o } = e.getState();
      if (!o)
        return t;
      const { x: s, y: a } = o.getBoundingClientRect(), u = Wu(t, n);
      return {
        x: u.x + s,
        y: u.y + a
      };
    }
  }), []);
};
function eN(e, t) {
  const n = [], o = /* @__PURE__ */ new Map(), s = [];
  for (const a of e)
    if (a.type === "add") {
      s.push(a);
      continue;
    } else if (a.type === "remove" || a.type === "replace")
      o.set(a.id, [a]);
    else {
      const u = o.get(a.id);
      u ? u.push(a) : o.set(a.id, [a]);
    }
  for (const a of t) {
    const u = o.get(a.id);
    if (!u) {
      n.push(a);
      continue;
    }
    if (u[0].type === "remove")
      continue;
    if (u[0].type === "replace") {
      n.push({ ...u[0].item });
      continue;
    }
    const l = { ...a };
    for (const f of u)
      PD(f, l);
    n.push(l);
  }
  return s.length && s.forEach((a) => {
    a.index !== void 0 ? n.splice(a.index, 0, { ...a.item }) : n.push({ ...a.item });
  }), n;
}
function PD(e, t) {
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
function TD(e, t) {
  return eN(e, t);
}
function AD(e, t) {
  return eN(e, t);
}
function Jr(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Qo(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [s, a] of e) {
    const u = t.has(s);
    !(a.selected === void 0 && !u) && a.selected !== u && (n && (a.selected = u), o.push(Jr(a.id, u)));
  }
  return o;
}
function S1({ items: e = [], lookup: t }) {
  var s;
  const n = [], o = new Map(e.map((a) => [a.id, a]));
  for (const [a, u] of e.entries()) {
    const l = t.get(u.id), f = ((s = l == null ? void 0 : l.internals) == null ? void 0 : s.userNode) ?? l;
    f !== void 0 && f !== u && n.push({ id: u.id, item: u, type: "replace" }), f === void 0 && n.push({ item: u, type: "add", index: a });
  }
  for (const [a] of t)
    o.get(a) === void 0 && n.push({ id: a, type: "remove" });
  return n;
}
function E1(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const C1 = (e) => ZL(e), ID = (e) => ER(e);
function tN(e) {
  return R.forwardRef(e);
}
const MD = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function k1(e) {
  const [t, n] = R.useState(BigInt(0)), [o] = R.useState(() => OD(() => n((s) => s + BigInt(1))));
  return MD(() => {
    const s = o.get();
    s.length && (e(s), o.reset());
  }, [t]), o;
}
function OD(e) {
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
const nN = R.createContext(null);
function LD({ children: e }) {
  const t = $e(), n = R.useCallback((l) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: m, nodeLookup: g, fitViewQueued: w } = t.getState();
    let E = f;
    for (const x of l)
      E = typeof x == "function" ? x(E) : x;
    const y = S1({
      items: E,
      lookup: g
    });
    h && d(E), y.length > 0 ? m == null || m(y) : w && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: S, setNodes: C } = t.getState();
      x && C(S);
    });
  }, []), o = k1(n), s = R.useCallback((l) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: m, edgeLookup: g } = t.getState();
    let w = f;
    for (const E of l)
      w = typeof E == "function" ? E(w) : E;
    h ? d(w) : m && m(S1({
      items: w,
      lookup: g
    }));
  }, []), a = k1(s), u = R.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return M.jsx(nN.Provider, { value: u, children: e });
}
function qD() {
  const e = R.useContext(nN);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const DD = (e) => !!e.panZoom;
function yy() {
  const e = ND(), t = $e(), n = qD(), o = Ie(DD), s = R.useMemo(() => {
    const a = (m) => t.getState().nodeLookup.get(m), u = (m) => {
      n.nodeQueue.push(m);
    }, l = (m) => {
      n.edgeQueue.push(m);
    }, f = (m) => {
      var S, C;
      const { nodeLookup: g, nodeOrigin: w } = t.getState(), E = C1(m) ? m : g.get(m.id), y = E.parentId ? TR(E.position, E.measured, E.parentId, g, w) : E.position, x = {
        ...E,
        position: y,
        width: ((S = E.measured) == null ? void 0 : S.width) ?? E.width,
        height: ((C = E.measured) == null ? void 0 : C.height) ?? E.height
      };
      return si(x);
    }, d = (m, g, w = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === m) {
          const x = typeof g == "function" ? g(y) : g;
          return w.replace && C1(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (m, g, w = { replace: !1 }) => {
      l((E) => E.map((y) => {
        if (y.id === m) {
          const x = typeof g == "function" ? g(y) : g;
          return w.replace && ID(x) ? x : { ...y, ...x };
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
      setNodes: u,
      setEdges: l,
      addNodes: (m) => {
        const g = Array.isArray(m) ? m : [m];
        n.nodeQueue.push((w) => [...w, ...g]);
      },
      addEdges: (m) => {
        const g = Array.isArray(m) ? m : [m];
        n.edgeQueue.push((w) => [...w, ...g]);
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
        const { nodes: w, edges: E, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: S, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: k } = t.getState(), { nodes: N, edges: T } = await rq({
          nodesToRemove: m,
          edgesToRemove: g,
          nodes: w,
          edges: E,
          onBeforeDelete: k
        }), A = T.length > 0, O = N.length > 0;
        if (A) {
          const D = T.map(E1);
          x == null || x(T), C(D);
        }
        if (O) {
          const D = N.map(E1);
          y == null || y(N), S(D);
        }
        return (O || A) && (_ == null || _({ nodes: N, edges: T })), { deletedNodes: N, deletedEdges: T };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (m, g = !0, w) => {
        const E = Qx(m), y = E ? m : f(m), x = w !== void 0;
        return y ? (w || t.getState().nodes).filter((S) => {
          const C = t.getState().nodeLookup.get(S.id);
          if (C && !E && (S.id === m.id || !C.internals.positionAbsolute))
            return !1;
          const _ = si(x ? S : C), k = Rs(_, y);
          return g && k > 0 || k >= _.width * _.height || k >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (m, g, w = !0) => {
        const y = Qx(m) ? m : f(m);
        if (!y)
          return !1;
        const x = Rs(y, g);
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
        return JL(m, { nodeLookup: g, nodeOrigin: w });
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
        const g = t.getState().fitViewResolver ?? aq();
        return t.setState({ fitViewQueued: !0, fitViewOptions: m, fitViewResolver: g }), n.nodeQueue.push((w) => [...w]), g.promise;
      }
    };
  }, []);
  return R.useMemo(() => ({
    ...s,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const R1 = (e) => e.selected, jD = typeof window < "u" ? window : void 0;
function zD({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = $e(), { deleteElements: o } = yy(), s = Ts(e, { actInsideInputWithModifier: !1 }), a = Ts(t, { target: jD });
  R.useEffect(() => {
    if (s) {
      const { edges: u, nodes: l } = n.getState();
      o({ nodes: l.filter(R1), edges: u.filter(R1) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [s]), R.useEffect(() => {
    n.setState({ multiSelectionActive: a });
  }, [a]);
}
function FD(e) {
  const t = $e();
  R.useEffect(() => {
    const n = () => {
      var s, a, u, l;
      if (!e.current || !(((a = (s = e.current).checkVisibility) == null ? void 0 : a.call(s)) ?? !0))
        return !1;
      const o = hy(e.current);
      (o.height === 0 || o.width === 0) && ((l = (u = t.getState()).onError) == null || l.call(u, "004", An.error004())), t.setState({ width: o.width || 500, height: o.height || 500 });
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
const dl = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, $D = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function BD({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: a = no.Free, zoomOnDoubleClick: u = !0, panOnDrag: l = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: m, zoomActivationKeyCode: g, preventScrolling: w = !0, children: E, noWheelClassName: y, noPanClassName: x, onViewportChange: S, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: k }) {
  const N = $e(), T = R.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: D } = Ie($D, Ke), G = Ts(g), B = R.useRef();
  FD(T);
  const V = R.useCallback((X) => {
    S == null || S({ x: X[0], y: X[1], zoom: X[2] }), C || N.setState({ transform: X });
  }, [S, C]);
  return R.useEffect(() => {
    if (T.current) {
      B.current = Hq({
        domNode: T.current,
        minZoom: h,
        maxZoom: m,
        translateExtent: d,
        viewport: f,
        onDraggingChange: ($) => N.setState({ paneDragging: $ }),
        onPanZoomStart: ($, Y) => {
          const { onViewportChangeStart: I, onMoveStart: j } = N.getState();
          j == null || j($, Y), I == null || I(Y);
        },
        onPanZoom: ($, Y) => {
          const { onViewportChange: I, onMove: j } = N.getState();
          j == null || j($, Y), I == null || I(Y);
        },
        onPanZoomEnd: ($, Y) => {
          const { onViewportChangeEnd: I, onMoveEnd: j } = N.getState();
          j == null || j($, Y), I == null || I(Y);
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
      zoomOnPinch: n,
      panOnScroll: o,
      panOnScrollSpeed: s,
      panOnScrollMode: a,
      zoomOnDoubleClick: u,
      panOnDrag: l,
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
    n,
    o,
    s,
    a,
    u,
    l,
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
  ]), M.jsx("div", { className: "react-flow__renderer", ref: T, style: dl, children: E });
}
const VD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function HD() {
  const { userSelectionActive: e, userSelectionRect: t } = Ie(VD, Ke);
  return e && t ? M.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Jf = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, WD = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function UD({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = ks.Full, panOnDrag: o, paneClickDistance: s, selectionOnDrag: a, onSelectionStart: u, onSelectionEnd: l, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: m, onPaneMouseMove: g, onPaneMouseLeave: w, children: E }) {
  const y = $e(), { userSelectionActive: x, elementsSelectable: S, dragging: C, connectionInProgress: _ } = Ie(WD, Ke), k = S && (e || x), N = R.useRef(null), T = R.useRef(), A = R.useRef(/* @__PURE__ */ new Set()), O = R.useRef(/* @__PURE__ */ new Set()), D = R.useRef(!1), G = (I) => {
    if (D.current || _) {
      D.current = !1;
      return;
    }
    f == null || f(I), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, B = (I) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      I.preventDefault();
      return;
    }
    d == null || d(I);
  }, V = h ? (I) => h(I) : void 0, X = (I) => {
    D.current && (I.stopPropagation(), D.current = !1);
  }, L = (I) => {
    var Z, ee;
    const { domNode: j } = y.getState();
    if (T.current = j == null ? void 0 : j.getBoundingClientRect(), !T.current)
      return;
    const Q = I.target === N.current;
    if (!Q && !!I.target.closest(".nokey") || !e || !(a && Q || t) || I.button !== 0 || !I.isPrimary)
      return;
    (ee = (Z = I.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, I.pointerId), D.current = !1;
    const { x: ie, y: F } = pn(I.nativeEvent, T.current);
    y.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: ie,
        startY: F,
        x: ie,
        y: F
      }
    }), Q || (I.stopPropagation(), I.preventDefault());
  }, H = (I) => {
    const { userSelectionRect: j, transform: Q, nodeLookup: q, edgeLookup: W, connectionLookup: ie, triggerNodeChanges: F, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: K } = y.getState();
    if (!T.current || !j)
      return;
    const { x: te, y: se } = pn(I.nativeEvent, T.current), { startX: ae, startY: ce } = j;
    if (!D.current) {
      const Ne = t ? 0 : s;
      if (Math.hypot(te - ae, se - ce) <= Ne)
        return;
      K(), u == null || u(I);
    }
    D.current = !0;
    const de = {
      startX: ae,
      startY: ce,
      x: te < ae ? te : ae,
      y: se < ce ? se : ce,
      width: Math.abs(te - ae),
      height: Math.abs(se - ce)
    }, pe = A.current, _e = O.current;
    A.current = new Set(fy(q, de, Q, n === ks.Partial, !0).map((Ne) => Ne.id)), O.current = /* @__PURE__ */ new Set();
    const ge = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Ne of A.current) {
      const Ee = ie.get(Ne);
      if (Ee)
        for (const { edgeId: Ze } of Ee.values()) {
          const He = W.get(Ze);
          He && (He.selectable ?? ge) && O.current.add(Ze);
        }
    }
    if (!Zx(pe, A.current)) {
      const Ne = Qo(q, A.current, !0);
      F(Ne);
    }
    if (!Zx(_e, O.current)) {
      const Ne = Qo(W, O.current);
      Z(Ne);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, $ = (I) => {
    var j, Q;
    I.button === 0 && ((Q = (j = I.target) == null ? void 0 : j.releasePointerCapture) == null || Q.call(j, I.pointerId), !x && I.target === N.current && y.getState().userSelectionRect && (G == null || G(I)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), D.current && (l == null || l(I), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, Y = o === !0 || Array.isArray(o) && o.includes(0);
  return M.jsxs("div", { className: nt(["react-flow__pane", { draggable: Y, dragging: C, selection: e }]), onClick: k ? void 0 : Jf(G, N), onContextMenu: Jf(B, N), onWheel: Jf(V, N), onPointerEnter: k ? void 0 : m, onPointerMove: k ? H : g, onPointerUp: k ? $ : void 0, onPointerDownCapture: k ? L : void 0, onClickCapture: k ? X : void 0, onPointerLeave: w, ref: N, style: dl, children: [E, M.jsx(HD, {})] });
}
function Bv({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
  const { addSelectedNodes: s, unselectNodesAndEdges: a, multiSelectionActive: u, nodeLookup: l, onError: f } = t.getState(), d = l.get(e);
  if (!d) {
    f == null || f("012", An.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), d.selected ? (n || d.selected && u) && (a({ nodes: [d], edges: [] }), requestAnimationFrame(() => {
    var h;
    return (h = o == null ? void 0 : o.current) == null ? void 0 : h.blur();
  })) : s([e]);
}
function rN({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: s, isSelectable: a, nodeClickDistance: u }) {
  const l = $e(), [f, d] = R.useState(!1), h = R.useRef();
  return R.useEffect(() => {
    h.current = Tq({
      getStoreItems: () => l.getState(),
      onNodeMouseDown: (m) => {
        Bv({
          id: m,
          store: l,
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
        noDragClassName: n,
        handleSelector: o,
        domNode: e.current,
        isSelectable: a,
        nodeId: s,
        nodeClickDistance: u
      }), () => {
        var w;
        (w = h.current) == null || w.destroy();
      };
  }, [n, o, t, a, e, s]), f;
}
const GD = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function oN() {
  const e = $e();
  return R.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: s, snapGrid: a, nodesDraggable: u, onError: l, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), m = /* @__PURE__ */ new Map(), g = GD(u), w = s ? a[0] : 5, E = s ? a[1] : 5, y = n.direction.x * w * n.factor, x = n.direction.y * E * n.factor;
    for (const [, S] of d) {
      if (!g(S))
        continue;
      let C = {
        x: S.internals.positionAbsolute.x + y,
        y: S.internals.positionAbsolute.y + x
      };
      s && (C = zs(C, a));
      const { position: _, positionAbsolute: k } = CR({
        nodeId: S.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: l
      });
      S.position = _, S.internals.positionAbsolute = k, m.set(S.id, S);
    }
    f(m);
  }, []);
}
const wy = R.createContext(null), YD = wy.Provider;
wy.Consumer;
const iN = () => R.useContext(wy), KD = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), XD = (e, t, n) => (o) => {
  const { connectionClickStartHandle: s, connectionMode: a, connection: u } = o, { fromHandle: l, toHandle: f, isValid: d } = u, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === n;
  return {
    connectingFrom: (l == null ? void 0 : l.nodeId) === e && (l == null ? void 0 : l.id) === t && (l == null ? void 0 : l.type) === n,
    connectingTo: h,
    clickConnecting: (s == null ? void 0 : s.nodeId) === e && (s == null ? void 0 : s.id) === t && (s == null ? void 0 : s.type) === n,
    isPossibleEndHandle: a === oi.Strict ? (l == null ? void 0 : l.type) !== n : e !== (l == null ? void 0 : l.nodeId) || t !== (l == null ? void 0 : l.id),
    connectionInProcess: !!l,
    clickConnectionInProcess: !!s,
    valid: h && d
  };
};
function QD({ type: e = "source", position: t = Se.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: s = !0, isConnectableEnd: a = !0, id: u, onConnect: l, children: f, className: d, onMouseDown: h, onTouchStart: m, ...g }, w) {
  var H, $;
  const E = u || null, y = e === "target", x = $e(), S = iN(), { connectOnClick: C, noPanClassName: _, rfId: k } = Ie(KD, Ke), { connectingFrom: N, connectingTo: T, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: D, clickConnectionInProcess: G, valid: B } = Ie(XD(S, E, e), Ke);
  S || ($ = (H = x.getState()).onError) == null || $.call(H, "010", An.error010());
  const V = (Y) => {
    const { defaultEdgeOptions: I, onConnect: j, hasDefaultEdges: Q } = x.getState(), q = {
      ...I,
      ...Y
    };
    if (Q) {
      const { edges: W, setEdges: ie } = x.getState();
      ie(pq(q, W));
    }
    j == null || j(q), l == null || l(q);
  }, X = (Y) => {
    if (!S)
      return;
    const I = MR(Y.nativeEvent);
    if (s && (I && Y.button === 0 || !I)) {
      const j = x.getState();
      $v.onPointerDown(Y.nativeEvent, {
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
        isValidConnection: n || j.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: j.autoPanSpeed,
        dragThreshold: j.connectionDragThreshold
      });
    }
    I ? h == null || h(Y) : m == null || m(Y);
  }, L = (Y) => {
    const { onClickConnectStart: I, onClickConnectEnd: j, connectionClickStartHandle: Q, connectionMode: q, isValidConnection: W, lib: ie, rfId: F, nodeLookup: Z, connection: ee } = x.getState();
    if (!S || !Q && !s)
      return;
    if (!Q) {
      I == null || I(Y.nativeEvent, { nodeId: S, handleId: E, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: S, type: e, id: E } });
      return;
    }
    const K = AR(Y.target), te = n || W, { connection: se, isValid: ae } = $v.isValid(Y.nativeEvent, {
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
  return M.jsx("div", { "data-handleid": E, "data-nodeid": S, "data-handlepos": t, "data-id": `${k}-${S}-${E}-${e}`, className: nt([
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
  ]), onMouseDown: X, onTouchStart: X, onClick: C ? L : void 0, ref: w, ...g, children: f });
}
const As = R.memo(tN(QD));
function ZD({ data: e, isConnectable: t, sourcePosition: n = Se.Bottom }) {
  return M.jsxs(M.Fragment, { children: [e == null ? void 0 : e.label, M.jsx(As, { type: "source", position: n, isConnectable: t })] });
}
function JD({ data: e, isConnectable: t, targetPosition: n = Se.Top, sourcePosition: o = Se.Bottom }) {
  return M.jsxs(M.Fragment, { children: [M.jsx(As, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, M.jsx(As, { type: "source", position: o, isConnectable: t })] });
}
function ej() {
  return null;
}
function tj({ data: e, isConnectable: t, targetPosition: n = Se.Top }) {
  return M.jsxs(M.Fragment, { children: [M.jsx(As, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Uu = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, N1 = {
  input: ZD,
  default: JD,
  output: tj,
  group: ej
};
function nj(e) {
  var t, n, o, s;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((s = e.style) == null ? void 0 : s.height)
  };
}
const rj = (e) => {
  const { width: t, height: n, x: o, y: s } = js(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: hn(t) ? t : null,
    height: hn(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${s}px)`
  };
};
function oj({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = $e(), { width: s, height: a, transformString: u, userSelectionActive: l } = Ie(rj, Ke), f = oN(), d = R.useRef(null);
  if (R.useEffect(() => {
    var g;
    n || (g = d.current) == null || g.focus({
      preventScroll: !0
    });
  }, [n]), rN({
    nodeRef: d
  }), l || !s || !a)
    return null;
  const h = e ? (g) => {
    const w = o.getState().nodes.filter((E) => E.selected);
    e(g, w);
  } : void 0, m = (g) => {
    Object.prototype.hasOwnProperty.call(Uu, g.key) && (g.preventDefault(), f({
      direction: Uu[g.key],
      factor: g.shiftKey ? 4 : 1
    }));
  };
  return M.jsx("div", { className: nt(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: u
  }, children: M.jsx("div", { ref: d, className: "react-flow__nodesselection-rect", onContextMenu: h, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : m, style: {
    width: s,
    height: a
  } }) });
}
const P1 = typeof window < "u" ? window : void 0, ij = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function sN({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: u, paneClickDistance: l, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: m, onSelectionStart: g, onSelectionEnd: w, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: k, panOnScrollSpeed: N, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, preventScrolling: X, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: $, disableKeyboardA11y: Y, onViewportChange: I, isControlledViewport: j }) {
  const { nodesSelectionActive: Q, userSelectionActive: q } = Ie(ij), W = Ts(d, { target: P1 }), ie = Ts(y, { target: P1 }), F = ie || O, Z = ie || k, ee = h && F !== !0, K = W || q || ee;
  return zD({ deleteKeyCode: f, multiSelectionKeyCode: E }), M.jsx(BD, { onPaneContextMenu: a, elementsSelectable: S, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: N, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !W && F, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: X, noWheelClassName: H, noPanClassName: $, onViewportChange: I, isControlledViewport: j, paneClickDistance: l, selectionOnDrag: ee, children: M.jsxs(UD, { onSelectionStart: g, onSelectionEnd: w, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: s, onPaneContextMenu: a, onPaneScroll: u, panOnDrag: F, isSelecting: !!K, selectionMode: m, selectionKeyPressed: W, paneClickDistance: l, selectionOnDrag: ee, children: [e, Q && M.jsx(oj, { onSelectionContextMenu: L, noPanClassName: $, disableKeyboardA11y: Y })] }) });
}
sN.displayName = "FlowRenderer";
const sj = R.memo(sN), aj = (e) => (t) => e ? fy(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function uj(e) {
  return Ie(R.useCallback(aj(e), [e]), Ke);
}
const lj = (e) => e.updateNodeInternals;
function cj() {
  const e = Ie(lj), [t] = R.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const o = /* @__PURE__ */ new Map();
    n.forEach((s) => {
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
function fj({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
  const s = $e(), a = R.useRef(null), u = R.useRef(null), l = R.useRef(e.sourcePosition), f = R.useRef(e.targetPosition), d = R.useRef(t), h = n && !!e.internals.handleBounds;
  return R.useEffect(() => {
    a.current && !e.hidden && (!h || u.current !== a.current) && (u.current && (o == null || o.unobserve(u.current)), o == null || o.observe(a.current), u.current = a.current);
  }, [h, e.hidden]), R.useEffect(() => () => {
    u.current && (o == null || o.unobserve(u.current), u.current = null);
  }, []), R.useEffect(() => {
    if (a.current) {
      const m = d.current !== t, g = l.current !== e.sourcePosition, w = f.current !== e.targetPosition;
      (m || g || w) && (d.current = t, l.current = e.sourcePosition, f.current = e.targetPosition, s.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: a.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), a;
}
function dj({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: s, onContextMenu: a, onDoubleClick: u, nodesDraggable: l, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: m, noDragClassName: g, noPanClassName: w, disableKeyboardA11y: E, rfId: y, nodeTypes: x, nodeClickDistance: S, onError: C }) {
  const { node: _, internals: k, isParent: N } = Ie((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Ke);
  let T = _.type || "default", A = (x == null ? void 0 : x[T]) || N1[T];
  A === void 0 && (C == null || C("003", An.error003(T)), T = "default", A = (x == null ? void 0 : x.default) || N1.default);
  const O = !!(_.draggable || l && typeof _.draggable > "u"), D = !!(_.selectable || f && typeof _.selectable > "u"), G = !!(_.connectable || d && typeof _.connectable > "u"), B = !!(_.focusable || h && typeof _.focusable > "u"), V = $e(), X = PR(_), L = fj({ node: _, nodeType: T, hasDimensions: X, resizeObserver: m }), H = rN({
    nodeRef: L,
    disabled: _.hidden || !O,
    noDragClassName: g,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: D,
    nodeClickDistance: S
  }), $ = oN();
  if (_.hidden)
    return null;
  const Y = Qn(_), I = nj(_), j = D || O || t || n || o || s, Q = n ? (te) => n(te, { ...k.userNode }) : void 0, q = o ? (te) => o(te, { ...k.userNode }) : void 0, W = s ? (te) => s(te, { ...k.userNode }) : void 0, ie = a ? (te) => a(te, { ...k.userNode }) : void 0, F = u ? (te) => u(te, { ...k.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    D && (!se || !O || ae > 0) && Bv({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...k.userNode });
  }, ee = (te) => {
    if (!(IR(te.nativeEvent) || E)) {
      if (xR.includes(te.key) && D) {
        const se = te.key === "Escape";
        Bv({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && _.selected && Object.prototype.hasOwnProperty.call(Uu, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~k.positionAbsolute.x,
            y: ~~k.positionAbsolute.y
          })
        }), $({
          direction: Uu[te.key],
          factor: te.shiftKey ? 4 : 1
        });
      }
    }
  }, K = () => {
    var _e;
    if (E || !((_e = L.current) != null && _e.matches(":focus-visible")))
      return;
    const { transform: te, width: se, height: ae, autoPanOnNodeFocus: ce, setCenter: de } = V.getState();
    if (!ce)
      return;
    fy(/* @__PURE__ */ new Map([[e, _]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(_.position.x + Y.width / 2, _.position.y + Y.height / 2, {
      zoom: te[2]
    });
  };
  return M.jsx("div", { className: nt([
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
    pointerEvents: j ? "all" : "none",
    visibility: X ? "visible" : "hidden",
    ..._.style,
    ...I
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: q, onMouseLeave: W, onContextMenu: ie, onClick: Z, onDoubleClick: F, onKeyDown: B ? ee : void 0, tabIndex: B ? 0 : void 0, onFocus: B ? K : void 0, role: _.ariaRole ?? (B ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${QR}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: M.jsx(YD, { value: e, children: M.jsx(A, { id: e, data: _.data, type: T, positionAbsoluteX: k.positionAbsolute.x, positionAbsoluteY: k.positionAbsolute.y, selected: _.selected ?? !1, selectable: D, draggable: O, deletable: _.deletable ?? !0, isConnectable: G, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: H, dragHandle: _.dragHandle, zIndex: k.z, parentId: _.parentId, ...Y }) }) });
}
var hj = R.memo(dj);
const pj = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function aN(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: s, onError: a } = Ie(pj, Ke), u = uj(e.onlyRenderVisibleElements), l = cj();
  return M.jsx("div", { className: "react-flow__nodes", style: dl, children: u.map((f) => (
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
    M.jsx(hj, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: l, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: s, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
aN.displayName = "NodeRenderer";
const mj = R.memo(aN);
function gj(e) {
  return Ie(R.useCallback((n) => {
    if (!e)
      return n.edges.map((s) => s.id);
    const o = [];
    if (n.width && n.height)
      for (const s of n.edges) {
        const a = n.nodeLookup.get(s.source), u = n.nodeLookup.get(s.target);
        a && u && fq({
          sourceNode: a,
          targetNode: u,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && o.push(s.id);
      }
    return o;
  }, [e]), Ke);
}
const vj = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return M.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, yj = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return M.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, T1 = {
  [Vu.Arrow]: vj,
  [Vu.ArrowClosed]: yj
};
function wj(e) {
  const t = $e();
  return R.useMemo(() => {
    var s, a;
    return Object.prototype.hasOwnProperty.call(T1, e) ? T1[e] : ((a = (s = t.getState()).onError) == null || a.call(s, "009", An.error009(e)), null);
  }, [e]);
}
const xj = ({ id: e, type: t, color: n, width: o = 12.5, height: s = 12.5, markerUnits: a = "strokeWidth", strokeWidth: u, orient: l = "auto-start-reverse" }) => {
  const f = wj(t);
  return f ? M.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${s}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: l, refX: "0", refY: "0", children: M.jsx(f, { color: n, strokeWidth: u }) }) : null;
}, uN = ({ defaultColor: e, rfId: t }) => {
  const n = Ie((a) => a.edges), o = Ie((a) => a.defaultEdgeOptions), s = R.useMemo(() => wq(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [n, o, t, e]);
  return s.length ? M.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: M.jsx("defs", { children: s.map((a) => M.jsx(xj, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
uN.displayName = "MarkerDefinitions";
var _j = R.memo(uN);
function lN({ x: e, y: t, label: n, labelStyle: o, labelShowBg: s = !0, labelBgStyle: a, labelBgPadding: u = [2, 4], labelBgBorderRadius: l = 2, children: f, className: d, ...h }) {
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
  }, [n]), n ? M.jsxs("g", { transform: `translate(${e - m.width / 2} ${t - m.height / 2})`, className: w, visibility: m.width ? "visible" : "hidden", ...h, children: [s && M.jsx("rect", { width: m.width + 2 * u[0], x: -u[0], y: -u[1], height: m.height + 2 * u[1], className: "react-flow__edge-textbg", style: a, rx: l, ry: l }), M.jsx("text", { className: "react-flow__edge-text", y: m.height / 2, dy: "0.3em", ref: E, style: o, children: n }), f] }) : null;
}
lN.displayName = "EdgeText";
const bj = R.memo(lN);
function hl({ path: e, labelX: t, labelY: n, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: u, labelBgPadding: l, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return M.jsxs(M.Fragment, { children: [M.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? M.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && hn(t) && hn(n) ? M.jsx(bj, { x: t, y: n, label: o, labelStyle: s, labelShowBg: a, labelBgStyle: u, labelBgPadding: l, labelBgBorderRadius: f }) : null] });
}
function A1({ pos: e, x1: t, y1: n, x2: o, y2: s }) {
  return e === Se.Left || e === Se.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + s)];
}
function cN({ sourceX: e, sourceY: t, sourcePosition: n = Se.Bottom, targetX: o, targetY: s, targetPosition: a = Se.Top }) {
  const [u, l] = A1({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: s
  }), [f, d] = A1({
    pos: a,
    x1: o,
    y1: s,
    x2: e,
    y2: t
  }), [h, m, g, w] = OR({
    sourceX: e,
    sourceY: t,
    targetX: o,
    targetY: s,
    sourceControlX: u,
    sourceControlY: l,
    targetControlX: f,
    targetControlY: d
  });
  return [
    `M${e},${t} C${u},${l} ${f},${d} ${o},${s}`,
    h,
    m,
    g,
    w
  ];
}
function fN(e) {
  return R.memo(({ id: t, sourceX: n, sourceY: o, targetX: s, targetY: a, sourcePosition: u, targetPosition: l, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S }) => {
    const [C, _, k] = cN({
      sourceX: n,
      sourceY: o,
      sourcePosition: u,
      targetX: s,
      targetY: a,
      targetPosition: l
    }), N = e.isInternal ? void 0 : t;
    return M.jsx(hl, { id: N, path: C, labelX: _, labelY: k, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: S });
  });
}
const Sj = fN({ isInternal: !1 }), dN = fN({ isInternal: !0 });
Sj.displayName = "SimpleBezierEdge";
dN.displayName = "SimpleBezierEdgeInternal";
function hN(e) {
  return R.memo(({ id: t, sourceX: n, sourceY: o, targetX: s, targetY: a, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, sourcePosition: w = Se.Bottom, targetPosition: E = Se.Top, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, N] = jv({
      sourceX: n,
      sourceY: o,
      sourcePosition: w,
      targetX: s,
      targetY: a,
      targetPosition: E,
      borderRadius: S == null ? void 0 : S.borderRadius,
      offset: S == null ? void 0 : S.offset,
      stepPosition: S == null ? void 0 : S.stepPosition
    }), T = e.isInternal ? void 0 : t;
    return M.jsx(hl, { id: T, path: _, labelX: k, labelY: N, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const pN = hN({ isInternal: !1 }), mN = hN({ isInternal: !0 });
pN.displayName = "SmoothStepEdge";
mN.displayName = "SmoothStepEdgeInternal";
function gN(e) {
  return R.memo(({ id: t, ...n }) => {
    var s;
    const o = e.isInternal ? void 0 : t;
    return M.jsx(pN, { ...n, id: o, pathOptions: R.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = n.pathOptions) == null ? void 0 : a.offset };
    }, [(s = n.pathOptions) == null ? void 0 : s.offset]) });
  });
}
const Ej = gN({ isInternal: !1 }), vN = gN({ isInternal: !0 });
Ej.displayName = "StepEdge";
vN.displayName = "StepEdgeInternal";
function yN(e) {
  return R.memo(({ id: t, sourceX: n, sourceY: o, targetX: s, targetY: a, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: w, markerStart: E, interactionWidth: y }) => {
    const [x, S, C] = DR({ sourceX: n, sourceY: o, targetX: s, targetY: a }), _ = e.isInternal ? void 0 : t;
    return M.jsx(hl, { id: _, path: x, labelX: S, labelY: C, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: m, style: g, markerEnd: w, markerStart: E, interactionWidth: y });
  });
}
const Cj = yN({ isInternal: !1 }), wN = yN({ isInternal: !0 });
Cj.displayName = "StraightEdge";
wN.displayName = "StraightEdgeInternal";
function xN(e) {
  return R.memo(({ id: t, sourceX: n, sourceY: o, targetX: s, targetY: a, sourcePosition: u = Se.Bottom, targetPosition: l = Se.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, pathOptions: S, interactionWidth: C }) => {
    const [_, k, N] = LR({
      sourceX: n,
      sourceY: o,
      sourcePosition: u,
      targetX: s,
      targetY: a,
      targetPosition: l,
      curvature: S == null ? void 0 : S.curvature
    }), T = e.isInternal ? void 0 : t;
    return M.jsx(hl, { id: T, path: _, labelX: k, labelY: N, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: m, labelBgPadding: g, labelBgBorderRadius: w, style: E, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const kj = xN({ isInternal: !1 }), _N = xN({ isInternal: !0 });
kj.displayName = "BezierEdge";
_N.displayName = "BezierEdgeInternal";
const I1 = {
  default: _N,
  straight: wN,
  step: vN,
  smoothstep: mN,
  simplebezier: dN
}, M1 = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, Rj = (e, t, n) => n === Se.Left ? e - t : n === Se.Right ? e + t : e, Nj = (e, t, n) => n === Se.Top ? e - t : n === Se.Bottom ? e + t : e, O1 = "react-flow__edgeupdater";
function L1({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: s, onMouseEnter: a, onMouseOut: u, type: l }) {
  return M.jsx("circle", { onMouseDown: s, onMouseEnter: a, onMouseOut: u, className: nt([O1, `${O1}-${l}`]), cx: Rj(t, o, e), cy: Nj(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function Pj({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: s, targetX: a, targetY: u, sourcePosition: l, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: m, setReconnecting: g, setUpdateHover: w }) {
  const E = $e(), y = (k, N) => {
    if (k.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: A, isValidConnection: O, connectionMode: D, connectionRadius: G, lib: B, onConnectStart: V, onConnectEnd: X, cancelConnection: L, nodeLookup: H, rfId: $, panBy: Y, updateConnection: I } = E.getState(), j = N.type === "target", Q = (ie, F) => {
      g(!1), m == null || m(ie, n, N.type, F);
    }, q = (ie) => d == null ? void 0 : d(n, ie), W = (ie, F) => {
      g(!0), h == null || h(k, n, N.type), V == null || V(ie, F);
    };
    $v.onPointerDown(k.nativeEvent, {
      autoPanOnConnect: T,
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
      updateConnection: I,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: k.currentTarget
    });
  }, x = (k) => y(k, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), S = (k) => y(k, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), C = () => w(!0), _ = () => w(!1);
  return M.jsxs(M.Fragment, { children: [(e === !0 || e === "source") && M.jsx(L1, { position: l, centerX: o, centerY: s, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && M.jsx(L1, { position: f, centerX: a, centerY: u, radius: t, onMouseDown: S, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function Tj({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: s, onDoubleClick: a, onContextMenu: u, onMouseEnter: l, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: m, onReconnectStart: g, onReconnectEnd: w, rfId: E, edgeTypes: y, noPanClassName: x, onError: S, disableKeyboardA11y: C }) {
  let _ = Ie((de) => de.edgeLookup.get(e));
  const k = Ie((de) => de.defaultEdgeOptions);
  _ = k ? { ...k, ..._ } : _;
  let N = _.type || "default", T = (y == null ? void 0 : y[N]) || I1[N];
  T === void 0 && (S == null || S("011", An.error011(N)), N = "default", T = (y == null ? void 0 : y.default) || I1.default);
  const A = !!(_.focusable || t && typeof _.focusable > "u"), O = typeof m < "u" && (_.reconnectable || n && typeof _.reconnectable > "u"), D = !!(_.selectable || o && typeof _.selectable > "u"), G = R.useRef(null), [B, V] = R.useState(!1), [X, L] = R.useState(!1), H = $e(), { zIndex: $, sourceX: Y, sourceY: I, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W } = Ie(R.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), _e = de.nodeLookup.get(_.target);
    if (!pe || !_e)
      return {
        zIndex: _.zIndex,
        ...M1
      };
    const ge = yq({
      id: e,
      sourceNode: pe,
      targetNode: _e,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: S
    });
    return {
      zIndex: cq({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: _e,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...ge || M1
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Ke), ie = R.useMemo(() => _.markerStart ? `url('#${zv(_.markerStart, E)}')` : void 0, [_.markerStart, E]), F = R.useMemo(() => _.markerEnd ? `url('#${zv(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || Y === null || I === null || j === null || Q === null)
    return null;
  const Z = (de) => {
    var Ne;
    const { addSelectedEdges: pe, unselectNodesAndEdges: _e, multiSelectionActive: ge } = H.getState();
    D && (H.setState({ nodesSelectionActive: !1 }), _.selected && ge ? (_e({ nodes: [], edges: [_] }), (Ne = G.current) == null || Ne.blur()) : pe([e])), s && s(de, _);
  }, ee = a ? (de) => {
    a(de, { ..._ });
  } : void 0, K = u ? (de) => {
    u(de, { ..._ });
  } : void 0, te = l ? (de) => {
    l(de, { ..._ });
  } : void 0, se = f ? (de) => {
    f(de, { ..._ });
  } : void 0, ae = d ? (de) => {
    d(de, { ..._ });
  } : void 0, ce = (de) => {
    var pe;
    if (!C && xR.includes(de.key) && D) {
      const { unselectNodesAndEdges: _e, addSelectedEdges: ge } = H.getState();
      de.key === "Escape" ? ((pe = G.current) == null || pe.blur(), _e({ edges: [_] })) : ge([e]);
    }
  };
  return M.jsx("svg", { style: { zIndex: $ }, children: M.jsxs("g", { className: nt([
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
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: K, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: _.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": A ? `${ZR}-${E}` : void 0, ref: G, ..._.domAttributes, children: [!X && M.jsx(T, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: D, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: Y, sourceY: I, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: F, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), O && M.jsx(Pj, { edge: _, isReconnectable: O, reconnectRadius: h, onReconnect: m, onReconnectStart: g, onReconnectEnd: w, sourceX: Y, sourceY: I, targetX: j, targetY: Q, sourcePosition: q, targetPosition: W, setUpdateHover: V, setReconnecting: L })] }) });
}
var Aj = R.memo(Tj);
const Ij = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function bN({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: s, onReconnect: a, onEdgeContextMenu: u, onEdgeMouseEnter: l, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: m, onEdgeDoubleClick: g, onReconnectStart: w, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, onError: _ } = Ie(Ij, Ke), k = gj(t);
  return M.jsxs("div", { className: "react-flow__edges", children: [M.jsx(_j, { defaultColor: e, rfId: n }), k.map((N) => M.jsx(Aj, { id: N, edgesFocusable: x, edgesReconnectable: S, elementsSelectable: C, noPanClassName: s, onReconnect: a, onContextMenu: u, onMouseEnter: l, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: m, onDoubleClick: g, onReconnectStart: w, onReconnectEnd: E, rfId: n, onError: _, edgeTypes: o, disableKeyboardA11y: y }, N))] });
}
bN.displayName = "EdgeRenderer";
const Mj = R.memo(bN), Oj = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Lj({ children: e }) {
  const t = Ie(Oj);
  return M.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function qj(e) {
  const t = yy(), n = R.useRef(!1);
  R.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const Dj = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function jj(e) {
  const t = Ie(Dj), n = $e();
  return R.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function zj(e) {
  return e.connection.inProgress ? { ...e.connection, to: Fs(e.connection.to, e.transform) } : { ...e.connection };
}
function Fj(e) {
  return zj;
}
function $j(e) {
  const t = Fj();
  return Ie(t, Ke);
}
const Bj = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function Vj({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: s, width: a, height: u, isValid: l, inProgress: f } = Ie(Bj, Ke);
  return !(a && s && f) ? null : M.jsx("svg", { style: e, width: a, height: u, className: "react-flow__connectionline react-flow__container", children: M.jsx("g", { className: nt(["react-flow__connection", SR(l)]), children: M.jsx(SN, { style: t, type: n, CustomComponent: o, isValid: l }) }) });
}
const SN = ({ style: e, type: t = kr.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: s, from: a, fromNode: u, fromHandle: l, fromPosition: f, to: d, toNode: h, toHandle: m, toPosition: g, pointer: w } = $j();
  if (!s)
    return;
  if (n)
    return M.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: u, fromHandle: l, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: g, connectionStatus: SR(o), toNode: h, toHandle: m, pointer: w });
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
      [E] = LR(y);
      break;
    case kr.SimpleBezier:
      [E] = cN(y);
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
      [E] = DR(y);
  }
  return M.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
SN.displayName = "ConnectionLine";
const Hj = {};
function q1(e = Hj) {
  R.useRef(e), $e(), R.useEffect(() => {
  }, [e]);
}
function Wj() {
  $e(), R.useRef(!1), R.useEffect(() => {
  }, []);
}
function EN({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: s, onNodeDoubleClick: a, onEdgeDoubleClick: u, onNodeMouseEnter: l, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: m, onSelectionStart: g, onSelectionEnd: w, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: S, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, multiSelectionKeyCode: N, panActivationKeyCode: T, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: D, elementsSelectable: G, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, preventScrolling: H, defaultMarkerColor: $, zoomOnScroll: Y, zoomOnPinch: I, panOnScroll: j, panOnScrollSpeed: Q, panOnScrollMode: q, zoomOnDoubleClick: W, panOnDrag: ie, onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: ge, reconnectRadius: Ne, onReconnect: Ee, onReconnectStart: Ze, onReconnectEnd: He, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: We, nodeExtent: en, rfId: $t, viewport: tn, onViewportChange: Bt }) {
  return q1(e), q1(t), Wj(), qj(n), jj(tn), M.jsx(sj, { onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: K, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, onSelectionStart: g, onSelectionEnd: w, multiSelectionKeyCode: N, panActivationKeyCode: T, zoomActivationKeyCode: A, elementsSelectable: G, zoomOnScroll: Y, zoomOnPinch: I, zoomOnDoubleClick: W, panOnScroll: j, panOnScrollSpeed: Q, panOnScrollMode: q, panOnDrag: ie, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, onSelectionContextMenu: m, preventScrolling: H, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: We, onViewportChange: Bt, isControlledViewport: !!tn, children: M.jsxs(Lj, { children: [M.jsx(Mj, { edgeTypes: t, onEdgeClick: s, onEdgeDoubleClick: u, onReconnect: Ee, onReconnectStart: Ze, onReconnectEnd: He, onlyRenderVisibleElements: D, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: _e, onEdgeMouseLeave: ge, reconnectRadius: Ne, defaultMarkerColor: $, noPanClassName: at, disableKeyboardA11y: We, rfId: $t }), M.jsx(Vj, { style: y, type: E, component: x, containerStyle: S }), M.jsx("div", { className: "react-flow__edgelabel-renderer" }), M.jsx(mj, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: l, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: D, noPanClassName: at, noDragClassName: Ft, disableKeyboardA11y: We, nodeExtent: en, rfId: $t }), M.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
EN.displayName = "GraphView";
const Uj = R.memo(EN), D1 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: s, height: a, fitView: u, fitViewOptions: l, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: m } = {}) => {
  const g = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], S = n ?? e ?? [], C = h ?? [0, 0], _ = m ?? Cs;
  FR(E, y, x);
  const k = Fv(S, g, w, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let N = [0, 0, 1];
  if (u && s && a) {
    const T = js(g, {
      filter: (G) => !!((G.width || G.initialWidth) && (G.height || G.initialHeight))
    }), { x: A, y: O, zoom: D } = dy(T, s, a, f, d, (l == null ? void 0 : l.padding) ?? 0.1);
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
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: o !== void 0,
    panZoom: null,
    minZoom: f,
    maxZoom: d,
    translateExtent: Cs,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: oi.Strict,
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
    fitViewQueued: u ?? !1,
    fitViewOptions: l,
    fitViewResolver: null,
    connection: { ...bR },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: oq,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: _R
  };
}, Gj = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: s, height: a, fitView: u, fitViewOptions: l, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: m }) => uD((g, w) => {
  async function E() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: S, fitViewResolver: C, width: _, height: k, minZoom: N, maxZoom: T } = w();
    x && (await nq({
      nodes: y,
      width: _,
      height: k,
      panZoom: x,
      minZoom: N,
      maxZoom: T
    }, S), C == null || C.resolve(!0), g({ fitViewResolver: null }));
  }
  return {
    ...D1({
      nodes: e,
      edges: t,
      width: s,
      height: a,
      fitView: u,
      fitViewOptions: l,
      minZoom: f,
      maxZoom: d,
      nodeOrigin: h,
      nodeExtent: m,
      defaultNodes: n,
      defaultEdges: o
    }),
    setNodes: (y) => {
      const { nodeLookup: x, parentLookup: S, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: k } = w(), N = Fv(y, x, S, {
        nodeOrigin: C,
        nodeExtent: m,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      k && N ? (E(), g({ nodes: y, nodesInitialized: N, fitViewQueued: !1, fitViewOptions: void 0 })) : g({ nodes: y, nodesInitialized: N });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: S } = w();
      FR(x, S, y), g({ edges: y });
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
      const { triggerNodeChanges: x, nodeLookup: S, parentLookup: C, domNode: _, nodeOrigin: k, nodeExtent: N, debug: T, fitViewQueued: A } = w(), { changes: O, updatedInternals: D } = kq(y, S, C, _, k, N);
      D && (bq(S, C, { nodeOrigin: k, nodeExtent: N }), A ? (E(), g({ fitViewQueued: !1, fitViewOptions: void 0 })) : g({}), (O == null ? void 0 : O.length) > 0 && (T && console.log("React Flow: trigger node changes", O), x == null || x(O)));
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
        const { parentLookup: N, nodeOrigin: T } = w(), A = vy(S, _, N, T);
        C.push(...A);
      }
      k(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: S, nodes: C, hasDefaultNodes: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const N = TD(y, C);
          S(N);
        }
        k && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: S, edges: C, hasDefaultEdges: _, debug: k } = w();
      if (y != null && y.length) {
        if (_) {
          const N = AD(y, C);
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
      _(Qo(C, /* @__PURE__ */ new Set([...y]), !0)), k(Qo(S));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: S, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = w();
      if (x) {
        const N = y.map((T) => Jr(T, !0));
        k(N);
        return;
      }
      k(Qo(S, /* @__PURE__ */ new Set([...y]))), _(Qo(C, /* @__PURE__ */ new Set(), !0));
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
      const k = x.reduce((T, A) => A.selected ? [...T, Jr(A.id, !1)] : T, []), N = y.reduce((T, A) => A.selected ? [...T, Jr(A.id, !1)] : T, []);
      S(k), C(N);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: S, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: k, nodeExtent: N } = w();
      y[0][0] === N[0][0] && y[0][1] === N[0][1] && y[1][0] === N[1][0] && y[1][1] === N[1][1] || (Fv(x, S, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: k,
        checkEquality: !1
      }), g({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: S, height: C, panZoom: _, translateExtent: k } = w();
      return Rq({ delta: y, panZoom: _, transform: x, translateExtent: k, width: S, height: C });
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
      g({
        connection: { ...bR }
      });
    },
    updateConnection: (y) => {
      g({ connection: y });
    },
    reset: () => g({ ...D1() })
  };
}, Object.is);
function CN({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: s, initialHeight: a, initialMinZoom: u, initialMaxZoom: l, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: m, children: g }) {
  const [w] = R.useState(() => Gj({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: o,
    width: s,
    height: a,
    fitView: d,
    minZoom: u,
    maxZoom: l,
    fitViewOptions: f,
    nodeOrigin: h,
    nodeExtent: m
  }));
  return M.jsx(cD, { value: w, children: M.jsx(LD, { children: g }) });
}
function Yj({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: s, width: a, height: u, fitView: l, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: m, nodeExtent: g }) {
  return R.useContext(cl) ? M.jsx(M.Fragment, { children: e }) : M.jsx(CN, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: s, initialWidth: a, initialHeight: u, fitView: l, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: m, nodeExtent: g, children: e });
}
const Kj = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function Xj({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: s, nodeTypes: a, edgeTypes: u, onNodeClick: l, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: m, onMoveEnd: g, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: N, onNodeDoubleClick: T, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onSelectionChange: X, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: $, onSelectionContextMenu: Y, onSelectionStart: I, onSelectionEnd: j, onBeforeDelete: Q, connectionMode: q, connectionLineType: W = kr.Bezier, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: K = "Shift", selectionOnDrag: te = !1, selectionMode: se = ks.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = Ns() ? "Meta" : "Control", zoomActivationKeyCode: de = Ns() ? "Meta" : "Control", snapToGrid: pe, snapGrid: _e, onlyRenderVisibleElements: ge = !1, selectNodesOnDrag: Ne, nodesDraggable: Ee, autoPanOnNodeFocus: Ze, nodesConnectable: He, nodesFocusable: Ft, nodeOrigin: ht = JR, edgesFocusable: at, edgesReconnectable: We, elementsSelectable: en = !0, defaultViewport: $t = SD, minZoom: tn = 0.5, maxZoom: Bt = 2, translateExtent: _t = Cs, preventScrolling: Or = !0, nodeExtent: Vt, defaultMarkerColor: qn = "#b1b1b7", zoomOnScroll: mo = !0, zoomOnPinch: Tt = !0, panOnScroll: Ht = !1, panOnScrollSpeed: Bl = 0.5, panOnScrollMode: xi = no.Free, zoomOnDoubleClick: _i = !0, panOnDrag: bi = !0, onPaneClick: Si, onPaneMouseEnter: Ei, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Ks, onPaneContextMenu: Xs, paneClickDistance: Qs = 1, nodeClickDistance: Zs = 0, children: Js, onReconnect: Ci, onReconnectStart: ea, onReconnectEnd: Lr, onEdgeContextMenu: ki, onEdgeDoubleClick: qr, onEdgeMouseEnter: Vl, onEdgeMouseMove: Dr, onEdgeMouseLeave: go, reconnectRadius: vo = 10, onNodesChange: Ri, onEdgesChange: Hl, noDragClassName: Wl = "nodrag", noWheelClassName: Ul = "nowheel", noPanClassName: xn = "nopan", fitView: Ni, fitViewOptions: Pi, connectOnClick: Gl, attributionPosition: ta, proOptions: na, defaultEdgeOptions: ra, elevateNodesOnSelect: oa, elevateEdgesOnSelect: Yl, disableKeyboardA11y: ia = !1, autoPanOnConnect: Ue, autoPanOnNodeDrag: Kl, autoPanSpeed: Ti, connectionRadius: sa, isValidConnection: yo, onError: Xl, style: aa, id: jr, nodeDragThreshold: Wt, connectionDragThreshold: Ql, viewport: At, onViewportChange: Zl, width: Jl, height: ec, colorMode: wo = "light", debug: xo, onScroll: _n, ariaLabelConfig: _o, ...tc }, nc) {
  const zr = jr || "1", ua = RD(wo), Ai = R.useCallback((nr) => {
    nr.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), _n == null || _n(nr);
  }, [_n]);
  return M.jsx("div", { "data-testid": "rf__wrapper", ...tc, onScroll: Ai, style: { ...aa, ...Kj }, ref: nc, className: nt(["react-flow", s, ua]), id: jr, role: "application", children: M.jsxs(Yj, { nodes: e, edges: t, width: Jl, height: ec, fitView: Ni, fitViewOptions: Pi, minZoom: tn, maxZoom: Bt, nodeOrigin: ht, nodeExtent: Vt, children: [M.jsx(Uj, { onInit: d, onNodeClick: l, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: N, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: u, connectionLineType: W, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, selectionKeyCode: K, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: ge, defaultViewport: $t, translateExtent: _t, minZoom: tn, maxZoom: Bt, preventScrolling: Or, zoomOnScroll: mo, zoomOnPinch: Tt, zoomOnDoubleClick: _i, panOnScroll: Ht, panOnScrollSpeed: Bl, panOnScrollMode: xi, panOnDrag: bi, onPaneClick: Si, onPaneMouseEnter: Ei, onPaneMouseMove: er, onPaneMouseLeave: tr, onPaneScroll: Ks, onPaneContextMenu: Xs, paneClickDistance: Qs, nodeClickDistance: Zs, onSelectionContextMenu: Y, onSelectionStart: I, onSelectionEnd: j, onReconnect: Ci, onReconnectStart: ea, onReconnectEnd: Lr, onEdgeContextMenu: ki, onEdgeDoubleClick: qr, onEdgeMouseEnter: Vl, onEdgeMouseMove: Dr, onEdgeMouseLeave: go, reconnectRadius: vo, defaultMarkerColor: qn, noDragClassName: Wl, noWheelClassName: Ul, noPanClassName: xn, rfId: zr, disableKeyboardA11y: ia, nodeExtent: Vt, viewport: At, onViewportChange: Zl }), M.jsx(kD, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: w, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: S, nodesDraggable: Ee, autoPanOnNodeFocus: Ze, nodesConnectable: He, nodesFocusable: Ft, edgesFocusable: at, edgesReconnectable: We, elementsSelectable: en, elevateNodesOnSelect: oa, elevateEdgesOnSelect: Yl, minZoom: tn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: Ri, onEdgesChange: Hl, snapToGrid: pe, snapGrid: _e, connectionMode: q, translateExtent: _t, connectOnClick: Gl, defaultEdgeOptions: ra, fitView: Ni, fitViewOptions: Pi, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: $, onMove: h, onMoveStart: m, onMoveEnd: g, noPanClassName: xn, nodeOrigin: ht, rfId: zr, autoPanOnConnect: Ue, autoPanOnNodeDrag: Kl, autoPanSpeed: Ti, onError: Xl, connectionRadius: sa, isValidConnection: yo, selectNodesOnDrag: Ne, nodeDragThreshold: Wt, connectionDragThreshold: Ql, onBeforeDelete: Q, debug: xo, ariaLabelConfig: _o }), M.jsx(bD, { onSelectionChange: X }), Js, M.jsx(vD, { proOptions: na, position: ta }), M.jsx(gD, { rfId: zr, disableKeyboardA11y: ia })] }) });
}
tN(Xj);
function Qj({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return M.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", n, o]) });
}
function Zj({ radius: e, className: t }) {
  return M.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Rr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Rr || (Rr = {}));
const Jj = {
  [Rr.Dots]: 1,
  [Rr.Lines]: 1,
  [Rr.Cross]: 6
}, e3 = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function kN({
  id: e,
  variant: t = Rr.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: o,
  lineWidth: s = 1,
  offset: a = 0,
  color: u,
  bgColor: l,
  style: f,
  className: d,
  patternClassName: h
}) {
  const m = R.useRef(null), { transform: g, patternId: w } = Ie(e3, Ke), E = o || Jj[t], y = t === Rr.Dots, x = t === Rr.Cross, S = Array.isArray(n) ? n : [n, n], C = [S[0] * g[2] || 1, S[1] * g[2] || 1], _ = E * g[2], k = Array.isArray(a) ? a : [a, a], N = x ? [_, _] : C, T = [
    k[0] * g[2] || 1 + N[0] / 2,
    k[1] * g[2] || 1 + N[1] / 2
  ], A = `${w}${e || ""}`;
  return M.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...dl,
    "--xy-background-color-props": l,
    "--xy-background-pattern-color-props": u
  }, ref: m, "data-testid": "rf__background", children: [M.jsx("pattern", { id: A, x: g[0] % C[0], y: g[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? M.jsx(Zj, { radius: _ / 2, className: h }) : M.jsx(Qj, { dimensions: N, lineWidth: s, variant: t, className: h }) }), M.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
kN.displayName = "Background";
R.memo(kN);
function t3() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: M.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function n3() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: M.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function r3() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: M.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function o3() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: M.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function i3() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: M.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function wu({ children: e, className: t, ...n }) {
  return M.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...n, children: e });
}
const s3 = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function RN({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: s, onZoomIn: a, onZoomOut: u, onFitView: l, onInteractiveChange: f, className: d, children: h, position: m = "bottom-left", orientation: g = "vertical", "aria-label": w }) {
  const E = $e(), { isInteractive: y, minZoomReached: x, maxZoomReached: S, ariaLabelConfig: C } = Ie(s3, Ke), { zoomIn: _, zoomOut: k, fitView: N } = yy(), T = () => {
    _(), a == null || a();
  }, A = () => {
    k(), u == null || u();
  }, O = () => {
    N(s), l == null || l();
  }, D = () => {
    E.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, G = g === "horizontal" ? "horizontal" : "vertical";
  return M.jsxs(fl, { className: nt(["react-flow__controls", G, d]), position: m, style: e, "data-testid": "rf__controls", "aria-label": w ?? C["controls.ariaLabel"], children: [t && M.jsxs(M.Fragment, { children: [M.jsx(wu, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: S, children: M.jsx(t3, {}) }), M.jsx(wu, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: M.jsx(n3, {}) })] }), n && M.jsx(wu, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: M.jsx(r3, {}) }), o && M.jsx(wu, { className: "react-flow__controls-interactive", onClick: D, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? M.jsx(i3, {}) : M.jsx(o3, {}) }), h] });
}
RN.displayName = "Controls";
R.memo(RN);
function a3({ id: e, x: t, y: n, width: o, height: s, style: a, color: u, strokeColor: l, strokeWidth: f, className: d, borderRadius: h, shapeRendering: m, selected: g, onClick: w }) {
  const { background: E, backgroundColor: y } = a || {}, x = u || E || y;
  return M.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: g }, d]), x: t, y: n, rx: h, ry: h, width: o, height: s, style: {
    fill: x,
    stroke: l,
    strokeWidth: f
  }, shapeRendering: m, onClick: w ? (S) => w(S, e) : void 0 });
}
const u3 = R.memo(a3), l3 = (e) => e.nodes.map((t) => t.id), ed = (e) => e instanceof Function ? e : () => e;
function c3({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = u3,
  onClick: u
}) {
  const l = Ie(l3, Ke), f = ed(t), d = ed(e), h = ed(n), m = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return M.jsx(M.Fragment, { children: l.map((g) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    M.jsx(d3, { id: g, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: s, NodeComponent: a, onClick: u, shapeRendering: m }, g)
  )) });
}
function f3({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: s, nodeStrokeWidth: a, shapeRendering: u, NodeComponent: l, onClick: f }) {
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
  return !d || d.hidden || !PR(d) ? null : M.jsx(l, { x: h, y: m, width: g, height: w, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: s, strokeColor: n(d), strokeWidth: a, shapeRendering: u, onClick: f, id: d.id });
}
const d3 = R.memo(f3);
var h3 = R.memo(c3);
const p3 = 200, m3 = 150, g3 = (e) => !e.hidden, v3 = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? NR(js(e.nodeLookup, { filter: g3 }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, y3 = "react-flow__minimap-desc";
function NN({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: o,
  nodeClassName: s = "",
  nodeBorderRadius: a = 5,
  nodeStrokeWidth: u,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: l,
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
  const N = $e(), T = R.useRef(null), { boundingRect: A, viewBB: O, rfId: D, panZoom: G, translateExtent: B, flowWidth: V, flowHeight: X, ariaLabelConfig: L } = Ie(v3, Ke), H = (e == null ? void 0 : e.width) ?? p3, $ = (e == null ? void 0 : e.height) ?? m3, Y = A.width / H, I = A.height / $, j = Math.max(Y, I), Q = j * H, q = j * $, W = k * j, ie = A.x - (Q - A.width) / 2 - W, F = A.y - (q - A.height) / 2 - W, Z = Q + W * 2, ee = q + W * 2, K = `${y3}-${D}`, te = R.useRef(0), se = R.useRef();
  te.current = j, R.useEffect(() => {
    if (T.current && G)
      return se.current = qq({
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
    const [_e, ge] = ((Ne = se.current) == null ? void 0 : Ne.pointer(pe)) || [0, 0];
    w(pe, { x: _e, y: ge });
  } : void 0, ce = E ? R.useCallback((pe, _e) => {
    const ge = N.getState().nodeLookup.get(_e).internals.userNode;
    E(pe, ge);
  }, []) : void 0, de = S ?? L["minimap.ariaLabel"];
  return M.jsx(fl, { position: g, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof m == "number" ? m * j : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof u == "number" ? u : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: M.jsxs("svg", { width: H, height: $, viewBox: `${ie} ${F} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": K, ref: T, onClick: ae, children: [de && M.jsx("title", { id: K, children: de }), M.jsx(h3, { onClick: ce, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: a, nodeClassName: s, nodeStrokeWidth: u, nodeComponent: l }), M.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - W},${F - W}h${Z + W * 2}v${ee + W * 2}h${-Z - W * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
NN.displayName = "MiniMap";
R.memo(NN);
const w3 = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, x3 = {
  [ui.Line]: "right",
  [ui.Handle]: "bottom-right"
};
function _3({ nodeId: e, position: t, variant: n = ui.Handle, className: o, style: s = void 0, children: a, color: u, minWidth: l = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: m = !1, resizeDirection: g, autoScale: w = !0, shouldResize: E, onResizeStart: y, onResize: x, onResizeEnd: S }) {
  const C = iN(), _ = typeof e == "string" ? e : C, k = $e(), N = R.useRef(null), T = n === ui.Handle, A = Ie(R.useCallback(w3(T && w), [T, w]), Ke), O = R.useRef(null), D = t ?? x3[n];
  R.useEffect(() => {
    if (!(!N.current || !_))
      return O.current || (O.current = Xq({
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
          const { triggerNodeChanges: X, nodeLookup: L, parentLookup: H, nodeOrigin: $ } = k.getState(), Y = [], I = { x: B.x, y: B.y }, j = L.get(_);
          if (j && j.expandParent && j.parentId) {
            const Q = j.origin ?? $, q = B.width ?? j.measured.width ?? 0, W = B.height ?? j.measured.height ?? 0, ie = {
              id: j.id,
              parentId: j.parentId,
              rect: {
                width: q,
                height: W,
                ...TR({
                  x: B.x ?? j.position.x,
                  y: B.y ?? j.position.y
                }, { width: q, height: W }, j.parentId, L, Q)
              }
            }, F = vy([ie], L, H, $);
            Y.push(...F), I.x = B.x ? Math.max(Q[0] * q, B.x) : void 0, I.y = B.y ? Math.max(Q[1] * W, B.y) : void 0;
          }
          if (I.x !== void 0 && I.y !== void 0) {
            const Q = {
              id: _,
              type: "position",
              position: { ...I }
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
          minWidth: l,
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
    l,
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
  return M.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...G, n, o]), ref: N, style: {
    ...s,
    scale: A,
    ...u && { [T ? "backgroundColor" : "borderColor"]: u }
  }, children: a });
}
R.memo(_3);
function PN(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = PN(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function TN() {
  for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = PN(e)) && (o && (o += " "), o += t);
  return o;
}
const b3 = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, S3 = (e, t) => ({
  classGroupId: e,
  validator: t
}), AN = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Gu = "-", j1 = [], E3 = "arbitrary..", C3 = (e) => {
  const t = R3(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (u) => {
      if (u.startsWith("[") && u.endsWith("]"))
        return k3(u);
      const l = u.split(Gu), f = l[0] === "" && l.length > 1 ? 1 : 0;
      return IN(l, f, t);
    },
    getConflictingClassGroupIds: (u, l) => {
      if (l) {
        const f = o[u], d = n[u];
        return f ? d ? b3(d, f) : f : d || j1;
      }
      return n[u] || j1;
    }
  };
}, IN = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const s = e[t], a = n.nextPart.get(s);
  if (a) {
    const d = IN(e, t + 1, a);
    if (d) return d;
  }
  const u = n.validators;
  if (u === null)
    return;
  const l = t === 0 ? e.join(Gu) : e.slice(t).join(Gu), f = u.length;
  for (let d = 0; d < f; d++) {
    const h = u[d];
    if (h.validator(l))
      return h.classGroupId;
  }
}, k3 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? E3 + o : void 0;
})(), R3 = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return N3(n, t);
}, N3 = (e, t) => {
  const n = AN();
  for (const o in e) {
    const s = e[o];
    xy(s, n, o, t);
  }
  return n;
}, xy = (e, t, n, o) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const u = e[a];
    P3(u, t, n, o);
  }
}, P3 = (e, t, n, o) => {
  if (typeof e == "string") {
    T3(e, t, n);
    return;
  }
  if (typeof e == "function") {
    A3(e, t, n, o);
    return;
  }
  I3(e, t, n, o);
}, T3 = (e, t, n) => {
  const o = e === "" ? t : MN(t, e);
  o.classGroupId = n;
}, A3 = (e, t, n, o) => {
  if (M3(e)) {
    xy(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(S3(n, e));
}, I3 = (e, t, n, o) => {
  const s = Object.entries(e), a = s.length;
  for (let u = 0; u < a; u++) {
    const [l, f] = s[u];
    xy(f, MN(t, l), n, o);
  }
}, MN = (e, t) => {
  let n = e;
  const o = t.split(Gu), s = o.length;
  for (let a = 0; a < s; a++) {
    const u = o[a];
    let l = n.nextPart.get(u);
    l || (l = AN(), n.nextPart.set(u, l)), n = l;
  }
  return n;
}, M3 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, O3 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const s = (a, u) => {
    n[a] = u, t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let u = n[a];
      if (u !== void 0)
        return u;
      if ((u = o[a]) !== void 0)
        return s(a, u), u;
    },
    set(a, u) {
      a in n ? n[a] = u : s(a, u);
    }
  };
}, Vv = "!", z1 = ":", L3 = [], F1 = (e, t, n, o, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: s
}), q3 = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (s) => {
    const a = [];
    let u = 0, l = 0, f = 0, d;
    const h = s.length;
    for (let y = 0; y < h; y++) {
      const x = s[y];
      if (u === 0 && l === 0) {
        if (x === z1) {
          a.push(s.slice(f, y)), f = y + 1;
          continue;
        }
        if (x === "/") {
          d = y;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" ? u-- : x === "(" ? l++ : x === ")" && l--;
    }
    const m = a.length === 0 ? s : s.slice(f);
    let g = m, w = !1;
    m.endsWith(Vv) ? (g = m.slice(0, -1), w = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Vv) && (g = m.slice(1), w = !0)
    );
    const E = d && d > f ? d - f : void 0;
    return F1(a, w, g, E);
  };
  if (t) {
    const s = t + z1, a = o;
    o = (u) => u.startsWith(s) ? a(u.slice(s.length)) : F1(L3, !1, u, void 0, !0);
  }
  if (n) {
    const s = o;
    o = (a) => n({
      className: a,
      parseClassName: s
    });
  }
  return o;
}, D3 = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, o) => {
    t.set(n, 1e6 + o);
  }), (n) => {
    const o = [];
    let s = [];
    for (let a = 0; a < n.length; a++) {
      const u = n[a], l = u[0] === "[", f = t.has(u);
      l || f ? (s.length > 0 && (s.sort(), o.push(...s), s = []), o.push(u)) : s.push(u);
    }
    return s.length > 0 && (s.sort(), o.push(...s)), o;
  };
}, j3 = (e) => ({
  cache: O3(e.cacheSize),
  parseClassName: q3(e),
  sortModifiers: D3(e),
  ...C3(e)
}), z3 = /\s+/, F3 = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, u = [], l = e.trim().split(z3);
  let f = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const h = l[d], {
      isExternal: m,
      modifiers: g,
      hasImportantModifier: w,
      baseClassName: E,
      maybePostfixModifierPosition: y
    } = n(h);
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
    const C = g.length === 0 ? "" : g.length === 1 ? g[0] : a(g).join(":"), _ = w ? C + Vv : C, k = _ + S;
    if (u.indexOf(k) > -1)
      continue;
    u.push(k);
    const N = s(S, x);
    for (let T = 0; T < N.length; ++T) {
      const A = N[T];
      u.push(_ + A);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, $3 = (...e) => {
  let t = 0, n, o, s = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = ON(n)) && (s && (s += " "), s += o);
  return s;
}, ON = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ON(e[o])) && (n && (n += " "), n += t);
  return n;
}, B3 = (e, ...t) => {
  let n, o, s, a;
  const u = (f) => {
    const d = t.reduce((h, m) => m(h), e());
    return n = j3(d), o = n.cache.get, s = n.cache.set, a = l, l(f);
  }, l = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = F3(f, n);
    return s(f, h), h;
  };
  return a = u, (...f) => a($3(...f));
}, V3 = [], st = (e) => {
  const t = (n) => n[e] || V3;
  return t.isThemeGetter = !0, t;
}, LN = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, qN = /^\((?:(\w[\w-]*):)?(.+)\)$/i, H3 = /^\d+\/\d+$/, W3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, U3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, G3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Y3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, K3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Wo = (e) => H3.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), Er = (e) => !!e && Number.isInteger(Number(e)), td = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Un = (e) => W3.test(e), X3 = () => !0, Q3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  U3.test(e) && !G3.test(e)
), DN = () => !1, Z3 = (e) => Y3.test(e), J3 = (e) => K3.test(e), ez = (e) => !we(e) && !xe(e), tz = (e) => ci(e, FN, DN), we = (e) => LN.test(e), Zr = (e) => ci(e, $N, Q3), nd = (e) => ci(e, sz, Te), $1 = (e) => ci(e, jN, DN), nz = (e) => ci(e, zN, J3), xu = (e) => ci(e, BN, Z3), xe = (e) => qN.test(e), ds = (e) => fi(e, $N), rz = (e) => fi(e, az), B1 = (e) => fi(e, jN), oz = (e) => fi(e, FN), iz = (e) => fi(e, zN), _u = (e) => fi(e, BN, !0), ci = (e, t, n) => {
  const o = LN.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, fi = (e, t, n = !1) => {
  const o = qN.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, jN = (e) => e === "position" || e === "percentage", zN = (e) => e === "image" || e === "url", FN = (e) => e === "length" || e === "size" || e === "bg-size", $N = (e) => e === "length", sz = (e) => e === "number", az = (e) => e === "family-name", BN = (e) => e === "shadow", uz = () => {
  const e = st("color"), t = st("font"), n = st("text"), o = st("font-weight"), s = st("tracking"), a = st("leading"), u = st("breakpoint"), l = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), m = st("inset-shadow"), g = st("text-shadow"), w = st("drop-shadow"), E = st("blur"), y = st("perspective"), x = st("aspect"), S = st("ease"), C = st("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], N = () => [...k(), xe, we], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [xe, we, f], D = () => [Wo, "full", "auto", ...O()], G = () => [Er, "none", "subgrid", xe, we], B = () => ["auto", {
    span: ["full", Er, xe, we]
  }, Er, xe, we], V = () => [Er, "auto", xe, we], X = () => ["auto", "min", "max", "fr", xe, we], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...O()], Y = () => [Wo, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], I = () => [e, xe, we], j = () => [...k(), B1, $1, {
    position: [xe, we]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], q = () => ["auto", "cover", "contain", oz, tz, {
    size: [xe, we]
  }], W = () => [td, ds, Zr], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    xe,
    we
  ], F = () => ["", Te, ds, Zr], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [Te, td, B1, $1], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    xe,
    we
  ], se = () => ["none", Te, xe, we], ae = () => ["none", Te, xe, we], ce = () => [Te, xe, we], de = () => [Wo, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Un],
      breakpoint: [Un],
      color: [X3],
      container: [Un],
      "drop-shadow": [Un],
      ease: ["in", "out", "in-out"],
      font: [ez],
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
        aspect: ["auto", "square", Wo, we, xe, x]
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
        columns: [Te, we, xe, l]
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
        z: [Er, "auto", xe, we]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Wo, "full", "auto", l, ...O()]
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
        flex: [Te, Wo, "auto", "initial", "none", we]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Te, xe, we]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Te, xe, we]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Er, "first", "last", "none", xe, we]
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
        w: [l, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
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
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [u]
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
        text: ["base", n, ds, Zr]
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
        font: [o, xe, nd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", td, we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rz, we, t]
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
        tracking: [s, xe, we]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Te, "none", xe, nd]
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
        "list-image": ["none", xe, we]
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
        list: ["disc", "decimal", "none", xe, we]
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
        placeholder: I()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: I()
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
        decoration: [Te, "from-font", "auto", xe, Zr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: I()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Te, "auto", xe, we]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xe, we]
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
        content: ["none", xe, we]
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
          }, Er, xe, we],
          radial: ["", xe, we],
          conic: [Er, xe, we]
        }, iz, nz]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: I()
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
        from: I()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: I()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: I()
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
        border: I()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": I()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": I()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": I()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": I()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": I()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": I()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": I()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": I()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: I()
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
        "outline-offset": [Te, xe, we]
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
        outline: I()
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
          _u,
          xu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: I()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, _u, xu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": I()
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
        ring: I()
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
        "ring-offset": I()
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
        "inset-ring": I()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, _u, xu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": I()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Te, xe, we]
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
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": I()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": I()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": I()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": I()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": I()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": I()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": I()
      }],
      "mask-image-radial": [{
        "mask-radial": [xe, we]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": I()
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
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": I()
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
        mask: ["none", xe, we]
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
          xe,
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
        brightness: [Te, xe, we]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Te, xe, we]
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
          _u,
          xu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": I()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Te, xe, we]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Te, xe, we]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Te, xe, we]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Te, xe, we]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Te, xe, we]
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
          xe,
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
        "backdrop-brightness": [Te, xe, we]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Te, xe, we]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Te, xe, we]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Te, xe, we]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Te, xe, we]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Te, xe, we]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Te, xe, we]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Te, xe, we]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", xe, we]
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
        duration: [Te, "initial", xe, we]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, xe, we]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Te, xe, we]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, xe, we]
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
        perspective: [y, xe, we]
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
        transform: [xe, we, "", "none", "gpu", "cpu"]
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
        accent: I()
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
        caret: I()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe, we]
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
        "will-change": ["auto", "scroll", "contents", "transform", xe, we]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...I()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Te, ds, Zr, nd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...I()]
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
}, lz = /* @__PURE__ */ B3(uz);
function Fe(...e) {
  return lz(TN(e));
}
function pl({
  className: e,
  children: t,
  style: n,
  ...o
}) {
  const [s, a] = R.useState(!1);
  return /* @__PURE__ */ M.jsx(
    As,
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
        ...n
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
const cz = {
  [Se.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [Se.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [Se.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [Se.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function fz({
  showButton: e = !0,
  position: t = Se.Bottom,
  children: n,
  ...o
}) {
  const s = cz[t || Se.Bottom], a = t === Se.Top || t === Se.Bottom;
  return /* @__PURE__ */ M.jsx(pl, { position: t, id: o.id, ...o, children: e && /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: `absolute flex items-center ${s} pointer-events-none`,
      children: [
        /* @__PURE__ */ M.jsx(
          "div",
          {
            className: `bg-gray-300 ${a ? "h-10 w-px" : "h-px w-10"}`
          }
        ),
        /* @__PURE__ */ M.jsx("div", { className: "nodrag nopan pointer-events-auto", children: n })
      ]
    }
  ) });
}
const dz = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function hz({
  className: e,
  labelClassName: t,
  handleClassName: n,
  title: o,
  position: s,
  ...a
}) {
  const { ref: u, ...l } = a;
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      title: o,
      className: Fe(
        "relative flex items-center",
        dz[s],
        e
      ),
      ref: u,
      children: [
        /* @__PURE__ */ M.jsx(
          pl,
          {
            position: s,
            className: n,
            ...l
          }
        ),
        /* @__PURE__ */ M.jsx("label", { className: Fe("text-foreground px-3", t), children: o })
      ]
    }
  );
}
const V1 = {
  base: pl,
  button: fz,
  labeled: hz
};
function pz(e) {
  return !e || !V1[e] ? pl : V1[e];
}
function VN({
  handleType: e = "base",
  showButton: t,
  label: n,
  handleConfig: o,
  ...s
}) {
  const a = (o == null ? void 0 : o.handle_type) || e, u = pz(a), l = { ...s };
  return a === "button" && t !== void 0 && (l.showButton = t), a === "labeled" && n && (l.label = n), /* @__PURE__ */ M.jsx(u, { ...l });
}
function H1(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Bs(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((s) => {
      const a = H1(s, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const a = o[s];
          typeof a == "function" ? a() : H1(e[s], null);
        }
      };
  };
}
function tt(...e) {
  return R.useCallback(Bs(...e), e);
}
var mz = Symbol.for("react.lazy"), Yu = ny[" use ".trim().toString()];
function gz(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function HN(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === mz && "_payload" in e && gz(e._payload);
}
// @__NO_SIDE_EFFECTS__
function _y(e) {
  const t = /* @__PURE__ */ yz(e), n = R.forwardRef((o, s) => {
    let { children: a, ...u } = o;
    HN(a) && typeof Yu == "function" && (a = Yu(a._payload));
    const l = R.Children.toArray(a), f = l.find(xz);
    if (f) {
      const d = f.props.children, h = l.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var vz = /* @__PURE__ */ _y("Slot");
// @__NO_SIDE_EFFECTS__
function yz(e) {
  const t = R.forwardRef((n, o) => {
    let { children: s, ...a } = n;
    if (HN(s) && typeof Yu == "function" && (s = Yu(s._payload)), R.isValidElement(s)) {
      const u = bz(s), l = _z(a, s.props);
      return s.type !== R.Fragment && (l.ref = o ? Bs(o, u) : u), R.cloneElement(s, l);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var wz = Symbol("radix.slottable");
function xz(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wz;
}
function _z(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? n[o] = (...l) => {
      const f = a(...l);
      return s(...l), f;
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...a } : o === "className" && (n[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function bz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const W1 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, U1 = TN, Sz = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return U1(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: s, defaultVariants: a } = t, u = Object.keys(s).map((d) => {
    const h = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (h === null) return null;
    const g = W1(h) || W1(m);
    return s[d][g];
  }), l = n && Object.entries(n).reduce((d, h) => {
    let [m, g] = h;
    return g === void 0 || (d[m] = g), d;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, h) => {
    let { class: m, className: g, ...w } = h;
    return Object.entries(w).every((E) => {
      let [y, x] = E;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...l
      }[y]) : {
        ...a,
        ...l
      }[y] === x;
    }) ? [
      ...d,
      m,
      g
    ] : d;
  }, []);
  return U1(e, u, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Ez = Sz(
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
function WN({
  className: e,
  variant: t,
  asChild: n = !1,
  ...o
}) {
  const s = n ? vz : "span";
  return /* @__PURE__ */ M.jsx(
    s,
    {
      "data-slot": "badge",
      className: Fe(Ez({ variant: t }), e),
      ...o
    }
  );
}
function G1(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Qe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function ml(e, t = []) {
  let n = [];
  function o(a, u) {
    const l = R.createContext(u), f = n.length;
    n = [...n, u];
    const d = (m) => {
      var S;
      const { scope: g, children: w, ...E } = m, y = ((S = g == null ? void 0 : g[e]) == null ? void 0 : S[f]) || l, x = R.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ M.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(m, g) {
      var y;
      const w = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[f]) || l, E = R.useContext(w);
      if (E) return E;
      if (u !== void 0) return u;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const s = () => {
    const a = n.map((u) => R.createContext(u));
    return function(l) {
      const f = (l == null ? void 0 : l[e]) || a;
      return R.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: f } }),
        [l, f]
      );
    };
  };
  return s.scopeName = e, [o, Cz(s, ...t)];
}
function Cz(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const u = o.reduce((l, { useScope: f, scopeName: d }) => {
        const m = f(a)[`__scope${d}`];
        return { ...l, ...m };
      }, {});
      return R.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Y1(e) {
  const t = /* @__PURE__ */ kz(e), n = R.forwardRef((o, s) => {
    const { children: a, ...u } = o, l = R.Children.toArray(a), f = l.find(Nz);
    if (f) {
      const d = f.props.children, h = l.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function kz(e) {
  const t = R.forwardRef((n, o) => {
    const { children: s, ...a } = n;
    if (R.isValidElement(s)) {
      const u = Tz(s), l = Pz(a, s.props);
      return s.type !== R.Fragment && (l.ref = o ? Bs(o, u) : u), R.cloneElement(s, l);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Rz = Symbol("radix.slottable");
function Nz(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Rz;
}
function Pz(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? n[o] = (...l) => {
      const f = a(...l);
      return s(...l), f;
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...a } : o === "className" && (n[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Tz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Az(e) {
  const t = e + "CollectionProvider", [n, o] = ml(t), [s, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), u = (y) => {
    const { scope: x, children: S } = y, C = cn.useRef(null), _ = cn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ M.jsx(s, { scope: x, itemMap: _, collectionRef: C, children: S });
  };
  u.displayName = t;
  const l = e + "CollectionSlot", f = /* @__PURE__ */ Y1(l), d = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C } = y, _ = a(l, S), k = tt(x, _.collectionRef);
      return /* @__PURE__ */ M.jsx(f, { ref: k, children: C });
    }
  );
  d.displayName = l;
  const h = e + "CollectionItemSlot", m = "data-radix-collection-item", g = /* @__PURE__ */ Y1(h), w = cn.forwardRef(
    (y, x) => {
      const { scope: S, children: C, ..._ } = y, k = cn.useRef(null), N = tt(x, k), T = a(h, S);
      return cn.useEffect(() => (T.itemMap.set(k, { ref: k, ..._ }), () => void T.itemMap.delete(k))), /* @__PURE__ */ M.jsx(g, { [m]: "", ref: N, children: C });
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
        (T, A) => _.indexOf(T.ref.current) - _.indexOf(A.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: u, Slot: d, ItemSlot: w },
    E,
    o
  ];
}
var Iz = R.createContext(void 0);
function Mz(e) {
  const t = R.useContext(Iz);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function Oz(e) {
  const t = /* @__PURE__ */ Lz(e), n = R.forwardRef((o, s) => {
    const { children: a, ...u } = o, l = R.Children.toArray(a), f = l.find(Dz);
    if (f) {
      const d = f.props.children, h = l.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Lz(e) {
  const t = R.forwardRef((n, o) => {
    const { children: s, ...a } = n;
    if (R.isValidElement(s)) {
      const u = zz(s), l = jz(a, s.props);
      return s.type !== R.Fragment && (l.ref = o ? Bs(o, u) : u), R.cloneElement(s, l);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qz = Symbol("radix.slottable");
function Dz(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qz;
}
function jz(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? n[o] = (...l) => {
      const f = a(...l);
      return s(...l), f;
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...a } : o === "className" && (n[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function zz(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Fz = [
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
], Be = Fz.reduce((e, t) => {
  const n = /* @__PURE__ */ Oz(`Primitive.${t}`), o = R.forwardRef((s, a) => {
    const { asChild: u, ...l } = s, f = u ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ M.jsx(f, { ...l, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function $z(e, t) {
  e && $s.flushSync(() => e.dispatchEvent(t));
}
function so(e) {
  const t = R.useRef(e);
  return R.useEffect(() => {
    t.current = e;
  }), R.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function Bz(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = so(e);
  R.useEffect(() => {
    const o = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Vz = "DismissableLayer", Hv = "dismissableLayer.update", Hz = "dismissableLayer.pointerDownOutside", Wz = "dismissableLayer.focusOutside", K1, UN = R.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), GN = R.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: u,
      onDismiss: l,
      ...f
    } = e, d = R.useContext(UN), [h, m] = R.useState(null), g = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = R.useState({}), E = tt(t, (A) => m(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), S = y.indexOf(x), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= S, N = Yz((A) => {
      const O = A.target, D = [...d.branches].some((G) => G.contains(O));
      !k || D || (s == null || s(A), u == null || u(A), A.defaultPrevented || l == null || l());
    }, g), T = Kz((A) => {
      const O = A.target;
      [...d.branches].some((G) => G.contains(O)) || (a == null || a(A), u == null || u(A), A.defaultPrevented || l == null || l());
    }, g);
    return Bz((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && l && (A.preventDefault(), l()));
    }, g), R.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (K1 = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), X1(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = K1);
        };
    }, [h, g, n, d]), R.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), X1());
    }, [h, d]), R.useEffect(() => {
      const A = () => w({});
      return document.addEventListener(Hv, A), () => document.removeEventListener(Hv, A);
    }, []), /* @__PURE__ */ M.jsx(
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
          N.onPointerDownCapture
        )
      }
    );
  }
);
GN.displayName = Vz;
var Uz = "DismissableLayerBranch", Gz = R.forwardRef((e, t) => {
  const n = R.useContext(UN), o = R.useRef(null), s = tt(t, o);
  return R.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ M.jsx(Be.div, { ...e, ref: s });
});
Gz.displayName = Uz;
function Yz(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = so(e), o = R.useRef(!1), s = R.useRef(() => {
  });
  return R.useEffect(() => {
    const a = (l) => {
      if (l.target && !o.current) {
        let f = function() {
          YN(
            Hz,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = f, t.addEventListener("click", s.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", s.current);
      o.current = !1;
    }, u = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(u), t.removeEventListener("pointerdown", a), t.removeEventListener("click", s.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Kz(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = so(e), o = R.useRef(!1);
  return R.useEffect(() => {
    const s = (a) => {
      a.target && !o.current && YN(Wz, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function X1() {
  const e = new CustomEvent(Hv);
  document.dispatchEvent(e);
}
function YN(e, t, n, { discrete: o }) {
  const s = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), o ? $z(s, a) : s.dispatchEvent(a);
}
var rd = 0;
function Xz() {
  R.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Q1()), document.body.insertAdjacentElement("beforeend", e[1] ?? Q1()), rd++, () => {
      rd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), rd--;
    };
  }, []);
}
function Q1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var od = "focusScope.autoFocusOnMount", id = "focusScope.autoFocusOnUnmount", Z1 = { bubbles: !1, cancelable: !0 }, Qz = "FocusScope", KN = R.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...u
  } = e, [l, f] = R.useState(null), d = so(s), h = so(a), m = R.useRef(null), g = tt(t, (y) => f(y)), w = R.useRef({
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
        if (w.paused || !l) return;
        const k = _.target;
        l.contains(k) ? m.current = k : Cr(m.current, { select: !0 });
      }, x = function(_) {
        if (w.paused || !l) return;
        const k = _.relatedTarget;
        k !== null && (l.contains(k) || Cr(m.current, { select: !0 }));
      }, S = function(_) {
        if (document.activeElement === document.body)
          for (const N of _)
            N.removedNodes.length > 0 && Cr(l);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", x);
      const C = new MutationObserver(S);
      return l && C.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [o, l, w.paused]), R.useEffect(() => {
    if (l) {
      e_.add(w);
      const y = document.activeElement;
      if (!l.contains(y)) {
        const S = new CustomEvent(od, Z1);
        l.addEventListener(od, d), l.dispatchEvent(S), S.defaultPrevented || (Zz(rF(XN(l)), { select: !0 }), document.activeElement === y && Cr(l));
      }
      return () => {
        l.removeEventListener(od, d), setTimeout(() => {
          const S = new CustomEvent(id, Z1);
          l.addEventListener(id, h), l.dispatchEvent(S), S.defaultPrevented || Cr(y ?? document.body, { select: !0 }), l.removeEventListener(id, h), e_.remove(w);
        }, 0);
      };
    }
  }, [l, d, h, w]);
  const E = R.useCallback(
    (y) => {
      if (!n && !o || w.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, S = document.activeElement;
      if (x && S) {
        const C = y.currentTarget, [_, k] = Jz(C);
        _ && k ? !y.shiftKey && S === k ? (y.preventDefault(), n && Cr(_, { select: !0 })) : y.shiftKey && S === _ && (y.preventDefault(), n && Cr(k, { select: !0 })) : S === C && y.preventDefault();
      }
    },
    [n, o, w.paused]
  );
  return /* @__PURE__ */ M.jsx(Be.div, { tabIndex: -1, ...u, ref: g, onKeyDown: E });
});
KN.displayName = Qz;
function Zz(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Cr(o, { select: t }), document.activeElement !== n) return;
}
function Jz(e) {
  const t = XN(e), n = J1(t, e), o = J1(t.reverse(), e);
  return [n, o];
}
function XN(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function J1(e, t) {
  for (const n of e)
    if (!eF(n, { upTo: t })) return n;
}
function eF(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function tF(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && tF(e) && t && e.select();
  }
}
var e_ = nF();
function nF() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = t_(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = t_(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function t_(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function rF(e) {
  return e.filter((t) => t.tagName !== "A");
}
var yt = globalThis != null && globalThis.document ? R.useLayoutEffect : () => {
}, oF = ny[" useId ".trim().toString()] || (() => {
}), iF = 0;
function by(e) {
  const [t, n] = R.useState(oF());
  return yt(() => {
    n((o) => o ?? String(iF++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const sF = ["top", "right", "bottom", "left"], Pr = Math.min, qt = Math.max, Ku = Math.round, bu = Math.floor, Tn = (e) => ({
  x: e,
  y: e
}), aF = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, uF = {
  start: "end",
  end: "start"
};
function Wv(e, t, n) {
  return qt(e, Pr(t, n));
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
function Sy(e) {
  return e === "x" ? "y" : "x";
}
function Ey(e) {
  return e === "y" ? "height" : "width";
}
const lF = /* @__PURE__ */ new Set(["top", "bottom"]);
function Nn(e) {
  return lF.has(Xn(e)) ? "y" : "x";
}
function Cy(e) {
  return Sy(Nn(e));
}
function cF(e, t, n) {
  n === void 0 && (n = !1);
  const o = di(e), s = Cy(e), a = Ey(s);
  let u = s === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (u = Xu(u)), [u, Xu(u)];
}
function fF(e) {
  const t = Xu(e);
  return [Uv(e), t, Uv(t)];
}
function Uv(e) {
  return e.replace(/start|end/g, (t) => uF[t]);
}
const n_ = ["left", "right"], r_ = ["right", "left"], dF = ["top", "bottom"], hF = ["bottom", "top"];
function pF(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r_ : n_ : t ? n_ : r_;
    case "left":
    case "right":
      return t ? dF : hF;
    default:
      return [];
  }
}
function mF(e, t, n, o) {
  const s = di(e);
  let a = pF(Xn(e), n === "start", o);
  return s && (a = a.map((u) => u + "-" + s), t && (a = a.concat(a.map(Uv)))), a;
}
function Xu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => aF[t]);
}
function gF(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function QN(e) {
  return typeof e != "number" ? gF(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Qu(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: s
  } = e;
  return {
    width: o,
    height: s,
    top: n,
    left: t,
    right: t + o,
    bottom: n + s,
    x: t,
    y: n
  };
}
function o_(e, t, n) {
  let {
    reference: o,
    floating: s
  } = e;
  const a = Nn(t), u = Cy(t), l = Ey(u), f = Xn(t), d = a === "y", h = o.x + o.width / 2 - s.width / 2, m = o.y + o.height / 2 - s.height / 2, g = o[l] / 2 - s[l] / 2;
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
      w[u] -= g * (n && d ? -1 : 1);
      break;
    case "end":
      w[u] += g * (n && d ? -1 : 1);
      break;
  }
  return w;
}
const vF = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: u
  } = n, l = a.filter(Boolean), f = await (u.isRTL == null ? void 0 : u.isRTL(t));
  let d = await u.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: h,
    y: m
  } = o_(d, o, f), g = o, w = {}, E = 0;
  for (let y = 0; y < l.length; y++) {
    const {
      name: x,
      fn: S
    } = l[y], {
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
      platform: u,
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
    }, N && E <= 50 && (E++, typeof N == "object" && (N.placement && (g = N.placement), N.rects && (d = N.rects === !0 ? await u.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : N.rects), {
      x: h,
      y: m
    } = o_(d, g, f)), y = -1);
  }
  return {
    x: h,
    y: m,
    placement: g,
    strategy: s,
    middlewareData: w
  };
};
async function Is(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: a,
    rects: u,
    elements: l,
    strategy: f
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: m = "floating",
    altBoundary: g = !1,
    padding: w = 0
  } = Kn(t, e), E = QN(w), x = l[g ? m === "floating" ? "reference" : "floating" : m], S = Qu(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = m === "floating" ? {
    x: o,
    y: s,
    width: u.floating.width,
    height: u.floating.height
  } : u.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l.floating)), k = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Qu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
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
const yF = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: s,
      rects: a,
      platform: u,
      elements: l,
      middlewareData: f
    } = t, {
      element: d,
      padding: h = 0
    } = Kn(e, t) || {};
    if (d == null)
      return {};
    const m = QN(h), g = {
      x: n,
      y: o
    }, w = Cy(s), E = Ey(w), y = await u.getDimensions(d), x = w === "y", S = x ? "top" : "left", C = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", k = a.reference[E] + a.reference[w] - g[w] - a.floating[E], N = g[w] - a.reference[w], T = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d));
    let A = T ? T[_] : 0;
    (!A || !await (u.isElement == null ? void 0 : u.isElement(T))) && (A = l.floating[_] || a.floating[E]);
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
}), wF = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: s,
        middlewareData: a,
        rects: u,
        initialPlacement: l,
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
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const S = Xn(s), C = Nn(l), _ = Xn(l) === l, k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), N = g || (_ || !y ? [Xu(l)] : fF(l)), T = E !== "none";
      !g && T && N.push(...mF(l, y, E, k));
      const A = [l, ...N], O = await Is(t, x), D = [];
      let G = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && D.push(O[S]), m) {
        const L = cF(s, u, k);
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
        G.every((I) => Nn(I.placement) === C ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: G
            },
            reset: {
              placement: H
            }
          };
        let $ = (V = G.filter((Y) => Y.overflows[0] <= 0).sort((Y, I) => Y.overflows[1] - I.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!$)
          switch (w) {
            case "bestFit": {
              var X;
              const Y = (X = G.filter((I) => {
                if (T) {
                  const j = Nn(I.placement);
                  return j === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((j) => j > 0).reduce((j, Q) => j + Q, 0)]).sort((I, j) => I[1] - j[1])[0]) == null ? void 0 : X[0];
              Y && ($ = Y);
              break;
            }
            case "initialPlacement":
              $ = l;
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
function i_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function s_(e) {
  return sF.some((t) => e[t] >= 0);
}
const xF = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Kn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Is(t, {
            ...s,
            elementContext: "reference"
          }), u = i_(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: u,
              referenceHidden: s_(u)
            }
          };
        }
        case "escaped": {
          const a = await Is(t, {
            ...s,
            altBoundary: !0
          }), u = i_(a, n.floating);
          return {
            data: {
              escapedOffsets: u,
              escaped: s_(u)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ZN = /* @__PURE__ */ new Set(["left", "top"]);
async function _F(e, t) {
  const {
    placement: n,
    platform: o,
    elements: s
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), u = Xn(n), l = di(n), f = Nn(n) === "y", d = ZN.has(u) ? -1 : 1, h = a && f ? -1 : 1, m = Kn(t, e);
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
  return l && typeof E == "number" && (w = l === "end" ? E * -1 : E), f ? {
    x: w * h,
    y: g * d
  } : {
    x: g * d,
    y: w * h
  };
}
const bF = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: s,
        y: a,
        placement: u,
        middlewareData: l
      } = t, f = await _F(t, e);
      return u === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: s + f.x,
        y: a + f.y,
        data: {
          ...f,
          placement: u
        }
      };
    }
  };
}, SF = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: s
      } = t, {
        mainAxis: a = !0,
        crossAxis: u = !1,
        limiter: l = {
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
        x: n,
        y: o
      }, h = await Is(t, f), m = Nn(Xn(s)), g = Sy(m);
      let w = d[g], E = d[m];
      if (a) {
        const x = g === "y" ? "top" : "left", S = g === "y" ? "bottom" : "right", C = w + h[x], _ = w - h[S];
        w = Wv(C, w, _);
      }
      if (u) {
        const x = m === "y" ? "top" : "left", S = m === "y" ? "bottom" : "right", C = E + h[x], _ = E - h[S];
        E = Wv(C, E, _);
      }
      const y = l.fn({
        ...t,
        [g]: w,
        [m]: E
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o,
          enabled: {
            [g]: a,
            [m]: u
          }
        }
      };
    }
  };
}, EF = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: s,
        rects: a,
        middlewareData: u
      } = t, {
        offset: l = 0,
        mainAxis: f = !0,
        crossAxis: d = !0
      } = Kn(e, t), h = {
        x: n,
        y: o
      }, m = Nn(s), g = Sy(m);
      let w = h[g], E = h[m];
      const y = Kn(l, t), x = typeof y == "number" ? {
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
        const _ = g === "y" ? "width" : "height", k = ZN.has(Xn(s)), N = a.reference[m] - a.floating[_] + (k && ((S = u.offset) == null ? void 0 : S[m]) || 0) + (k ? 0 : x.crossAxis), T = a.reference[m] + a.reference[_] + (k ? 0 : ((C = u.offset) == null ? void 0 : C[m]) || 0) - (k ? x.crossAxis : 0);
        E < N ? E = N : E > T && (E = T);
      }
      return {
        [g]: w,
        [m]: E
      };
    }
  };
}, CF = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: s,
        rects: a,
        platform: u,
        elements: l
      } = t, {
        apply: f = () => {
        },
        ...d
      } = Kn(e, t), h = await Is(t, d), m = Xn(s), g = di(s), w = Nn(s) === "y", {
        width: E,
        height: y
      } = a.floating;
      let x, S;
      m === "top" || m === "bottom" ? (x = m, S = g === (await (u.isRTL == null ? void 0 : u.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (S = m, x = g === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = E - h.left - h.right, k = Pr(y - h[x], C), N = Pr(E - h[S], _), T = !t.middlewareData.shift;
      let A = k, O = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = _), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), T && !g) {
        const G = qt(h.left, 0), B = qt(h.right, 0), V = qt(h.top, 0), X = qt(h.bottom, 0);
        w ? O = E - 2 * (G !== 0 || B !== 0 ? G + B : qt(h.left, h.right)) : A = y - 2 * (V !== 0 || X !== 0 ? V + X : qt(h.top, h.bottom));
      }
      await f({
        ...t,
        availableWidth: O,
        availableHeight: A
      });
      const D = await u.getDimensions(l.floating);
      return E !== D.width || y !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function gl() {
  return typeof window < "u";
}
function hi(e) {
  return JN(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function jt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function On(e) {
  var t;
  return (t = (JN(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function JN(e) {
  return gl() ? e instanceof Node || e instanceof jt(e).Node : !1;
}
function mn(e) {
  return gl() ? e instanceof Element || e instanceof jt(e).Element : !1;
}
function In(e) {
  return gl() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1;
}
function a_(e) {
  return !gl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot;
}
const kF = /* @__PURE__ */ new Set(["inline", "contents"]);
function Vs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: s
  } = gn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !kF.has(s);
}
const RF = /* @__PURE__ */ new Set(["table", "td", "th"]);
function NF(e) {
  return RF.has(hi(e));
}
const PF = [":popover-open", ":modal"];
function vl(e) {
  return PF.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const TF = ["transform", "translate", "scale", "rotate", "perspective"], AF = ["transform", "translate", "scale", "rotate", "perspective", "filter"], IF = ["paint", "layout", "strict", "content"];
function ky(e) {
  const t = Ry(), n = mn(e) ? gn(e) : e;
  return TF.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || AF.some((o) => (n.willChange || "").includes(o)) || IF.some((o) => (n.contain || "").includes(o));
}
function MF(e) {
  let t = Tr(e);
  for (; In(t) && !li(t); ) {
    if (ky(t))
      return t;
    if (vl(t))
      return null;
    t = Tr(t);
  }
  return null;
}
function Ry() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const OF = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function li(e) {
  return OF.has(hi(e));
}
function gn(e) {
  return jt(e).getComputedStyle(e);
}
function yl(e) {
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
    a_(e) && e.host || // Fallback.
    On(e)
  );
  return a_(t) ? t.host : t;
}
function eP(e) {
  const t = Tr(e);
  return li(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && Vs(t) ? t : eP(t);
}
function Ms(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = eP(e), a = s === ((o = e.ownerDocument) == null ? void 0 : o.body), u = jt(s);
  if (a) {
    const l = Gv(u);
    return t.concat(u, u.visualViewport || [], Vs(s) ? s : [], l && n ? Ms(l) : []);
  }
  return t.concat(s, Ms(s, [], n));
}
function Gv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tP(e) {
  const t = gn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = In(e), a = s ? e.offsetWidth : n, u = s ? e.offsetHeight : o, l = Ku(n) !== a || Ku(o) !== u;
  return l && (n = a, o = u), {
    width: n,
    height: o,
    $: l
  };
}
function Ny(e) {
  return mn(e) ? e : e.contextElement;
}
function ei(e) {
  const t = Ny(e);
  if (!In(t))
    return Tn(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: a
  } = tP(t);
  let u = (a ? Ku(n.width) : n.width) / o, l = (a ? Ku(n.height) : n.height) / s;
  return (!u || !Number.isFinite(u)) && (u = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: u,
    y: l
  };
}
const LF = /* @__PURE__ */ Tn(0);
function nP(e) {
  const t = jt(e);
  return !Ry() || !t.visualViewport ? LF : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qF(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== jt(e) ? !1 : t;
}
function ao(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), a = Ny(e);
  let u = Tn(1);
  t && (o ? mn(o) && (u = ei(o)) : u = ei(e));
  const l = qF(a, n, o) ? nP(a) : Tn(0);
  let f = (s.left + l.x) / u.x, d = (s.top + l.y) / u.y, h = s.width / u.x, m = s.height / u.y;
  if (a) {
    const g = jt(a), w = o && mn(o) ? jt(o) : o;
    let E = g, y = Gv(E);
    for (; y && o && w !== E; ) {
      const x = ei(y), S = y.getBoundingClientRect(), C = gn(y), _ = S.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, k = S.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, m *= x.y, f += _, d += k, E = jt(y), y = Gv(E);
    }
  }
  return Qu({
    width: h,
    height: m,
    x: f,
    y: d
  });
}
function wl(e, t) {
  const n = yl(e).scrollLeft;
  return t ? t.left + n : ao(On(e)).left + n;
}
function rP(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - wl(e, n), s = n.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function DF(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: s
  } = e;
  const a = s === "fixed", u = On(o), l = t ? vl(t.floating) : !1;
  if (o === u || l && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Tn(1);
  const h = Tn(0), m = In(o);
  if ((m || !m && !a) && ((hi(o) !== "body" || Vs(u)) && (f = yl(o)), In(o))) {
    const w = ao(o);
    d = ei(o), h.x = w.x + o.clientLeft, h.y = w.y + o.clientTop;
  }
  const g = u && !m && !a ? rP(u, f) : Tn(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + h.x + g.x,
    y: n.y * d.y - f.scrollTop * d.y + h.y + g.y
  };
}
function jF(e) {
  return Array.from(e.getClientRects());
}
function zF(e) {
  const t = On(e), n = yl(e), o = e.ownerDocument.body, s = qt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = qt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let u = -n.scrollLeft + wl(e);
  const l = -n.scrollTop;
  return gn(o).direction === "rtl" && (u += qt(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: a,
    x: u,
    y: l
  };
}
const u_ = 25;
function FF(e, t) {
  const n = jt(e), o = On(e), s = n.visualViewport;
  let a = o.clientWidth, u = o.clientHeight, l = 0, f = 0;
  if (s) {
    a = s.width, u = s.height;
    const h = Ry();
    (!h || h && t === "fixed") && (l = s.offsetLeft, f = s.offsetTop);
  }
  const d = wl(o);
  if (d <= 0) {
    const h = o.ownerDocument, m = h.body, g = getComputedStyle(m), w = h.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, E = Math.abs(o.clientWidth - m.clientWidth - w);
    E <= u_ && (a -= E);
  } else d <= u_ && (a += d);
  return {
    width: a,
    height: u,
    x: l,
    y: f
  };
}
const $F = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function BF(e, t) {
  const n = ao(e, !0, t === "fixed"), o = n.top + e.clientTop, s = n.left + e.clientLeft, a = In(e) ? ei(e) : Tn(1), u = e.clientWidth * a.x, l = e.clientHeight * a.y, f = s * a.x, d = o * a.y;
  return {
    width: u,
    height: l,
    x: f,
    y: d
  };
}
function l_(e, t, n) {
  let o;
  if (t === "viewport")
    o = FF(e, n);
  else if (t === "document")
    o = zF(On(e));
  else if (mn(t))
    o = BF(t, n);
  else {
    const s = nP(e);
    o = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Qu(o);
}
function oP(e, t) {
  const n = Tr(e);
  return n === t || !mn(n) || li(n) ? !1 : gn(n).position === "fixed" || oP(n, t);
}
function VF(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ms(e, [], !1).filter((l) => mn(l) && hi(l) !== "body"), s = null;
  const a = gn(e).position === "fixed";
  let u = a ? Tr(e) : e;
  for (; mn(u) && !li(u); ) {
    const l = gn(u), f = ky(u);
    !f && l.position === "fixed" && (s = null), (a ? !f && !s : !f && l.position === "static" && !!s && $F.has(s.position) || Vs(u) && !f && oP(e, u)) ? o = o.filter((h) => h !== u) : s = l, u = Tr(u);
  }
  return t.set(e, o), o;
}
function HF(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: s
  } = e;
  const u = [...n === "clippingAncestors" ? vl(t) ? [] : VF(t, this._c) : [].concat(n), o], l = u[0], f = u.reduce((d, h) => {
    const m = l_(t, h, s);
    return d.top = qt(m.top, d.top), d.right = Pr(m.right, d.right), d.bottom = Pr(m.bottom, d.bottom), d.left = qt(m.left, d.left), d;
  }, l_(t, l, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function WF(e) {
  const {
    width: t,
    height: n
  } = tP(e);
  return {
    width: t,
    height: n
  };
}
function UF(e, t, n) {
  const o = In(t), s = On(t), a = n === "fixed", u = ao(e, !0, a, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Tn(0);
  function d() {
    f.x = wl(s);
  }
  if (o || !o && !a)
    if ((hi(t) !== "body" || Vs(s)) && (l = yl(t)), o) {
      const w = ao(t, !0, a, t);
      f.x = w.x + t.clientLeft, f.y = w.y + t.clientTop;
    } else s && d();
  a && !o && s && d();
  const h = s && !o && !a ? rP(s, l) : Tn(0), m = u.left + l.scrollLeft - f.x - h.x, g = u.top + l.scrollTop - f.y - h.y;
  return {
    x: m,
    y: g,
    width: u.width,
    height: u.height
  };
}
function sd(e) {
  return gn(e).position === "static";
}
function c_(e, t) {
  if (!In(e) || gn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return On(e) === n && (n = n.ownerDocument.body), n;
}
function iP(e, t) {
  const n = jt(e);
  if (vl(e))
    return n;
  if (!In(e)) {
    let s = Tr(e);
    for (; s && !li(s); ) {
      if (mn(s) && !sd(s))
        return s;
      s = Tr(s);
    }
    return n;
  }
  let o = c_(e, t);
  for (; o && NF(o) && sd(o); )
    o = c_(o, t);
  return o && li(o) && sd(o) && !ky(o) ? n : o || MF(e) || n;
}
const GF = async function(e) {
  const t = this.getOffsetParent || iP, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: UF(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function YF(e) {
  return gn(e).direction === "rtl";
}
const KF = {
  convertOffsetParentRelativeRectToViewportRelativeRect: DF,
  getDocumentElement: On,
  getClippingRect: HF,
  getOffsetParent: iP,
  getElementRects: GF,
  getClientRects: jF,
  getDimensions: WF,
  getScale: ei,
  isElement: mn,
  isRTL: YF
};
function sP(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function XF(e, t) {
  let n = null, o;
  const s = On(e);
  function a() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function u(l, f) {
    l === void 0 && (l = !1), f === void 0 && (f = 1), a();
    const d = e.getBoundingClientRect(), {
      left: h,
      top: m,
      width: g,
      height: w
    } = d;
    if (l || t(), !g || !w)
      return;
    const E = bu(m), y = bu(s.clientWidth - (h + g)), x = bu(s.clientHeight - (m + w)), S = bu(h), _ = {
      rootMargin: -E + "px " + -y + "px " + -x + "px " + -S + "px",
      threshold: qt(0, Pr(1, f)) || 1
    };
    let k = !0;
    function N(T) {
      const A = T[0].intersectionRatio;
      if (A !== f) {
        if (!k)
          return u();
        A ? u(!1, A) : o = setTimeout(() => {
          u(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !sP(d, e.getBoundingClientRect()) && u(), k = !1;
    }
    try {
      n = new IntersectionObserver(N, {
        ..._,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(N, _);
    }
    n.observe(e);
  }
  return u(!0), a;
}
function QF(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: u = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = Ny(e), h = s || a ? [...d ? Ms(d) : [], ...Ms(t)] : [];
  h.forEach((S) => {
    s && S.addEventListener("scroll", n, {
      passive: !0
    }), a && S.addEventListener("resize", n);
  });
  const m = d && l ? XF(d, n) : null;
  let g = -1, w = null;
  u && (w = new ResizeObserver((S) => {
    let [C] = S;
    C && C.target === d && w && (w.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var _;
      (_ = w) == null || _.observe(t);
    })), n();
  }), d && !f && w.observe(d), w.observe(t));
  let E, y = f ? ao(e) : null;
  f && x();
  function x() {
    const S = ao(e);
    y && !sP(y, S) && n(), y = S, E = requestAnimationFrame(x);
  }
  return n(), () => {
    var S;
    h.forEach((C) => {
      s && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), m == null || m(), (S = w) == null || S.disconnect(), w = null, f && cancelAnimationFrame(E);
  };
}
const ZF = bF, JF = SF, e4 = wF, t4 = CF, n4 = xF, f_ = yF, r4 = EF, o4 = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: KF,
    ...n
  }, a = {
    ...s.platform,
    _c: o
  };
  return vF(e, t, {
    ...s,
    platform: a
  });
};
var i4 = typeof document < "u", s4 = function() {
}, Mu = i4 ? R.useLayoutEffect : s4;
function Zu(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Zu(e[o], t[o]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const a = s[o];
      if (!(a === "_owner" && e.$$typeof) && !Zu(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function aP(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function d_(e, t) {
  const n = aP(e);
  return Math.round(t * n) / n;
}
function ad(e) {
  const t = R.useRef(e);
  return Mu(() => {
    t.current = e;
  }), t;
}
function a4(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: s,
    elements: {
      reference: a,
      floating: u
    } = {},
    transform: l = !0,
    whileElementsMounted: f,
    open: d
  } = e, [h, m] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, w] = R.useState(o);
  Zu(g, o) || w(o);
  const [E, y] = R.useState(null), [x, S] = R.useState(null), C = R.useCallback((I) => {
    I !== T.current && (T.current = I, y(I));
  }, []), _ = R.useCallback((I) => {
    I !== A.current && (A.current = I, S(I));
  }, []), k = a || E, N = u || x, T = R.useRef(null), A = R.useRef(null), O = R.useRef(h), D = f != null, G = ad(f), B = ad(s), V = ad(d), X = R.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: g
    };
    B.current && (I.platform = B.current), o4(T.current, A.current, I).then((j) => {
      const Q = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !Zu(O.current, Q) && (O.current = Q, $s.flushSync(() => {
        m(Q);
      }));
    });
  }, [g, t, n, B, V]);
  Mu(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, m((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [d]);
  const L = R.useRef(!1);
  Mu(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Mu(() => {
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
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return I;
    const j = d_($.floating, h.x), Q = d_($.floating, h.y);
    return l ? {
      ...I,
      transform: "translate(" + j + "px, " + Q + "px)",
      ...aP($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: Q
    };
  }, [n, l, $.floating, h.x, h.y]);
  return R.useMemo(() => ({
    ...h,
    update: X,
    refs: H,
    elements: $,
    floatingStyles: Y
  }), [h, X, H, $, Y]);
}
const u4 = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? f_({
        element: o.current,
        padding: s
      }).fn(n) : {} : o ? f_({
        element: o,
        padding: s
      }).fn(n) : {};
    }
  };
}, l4 = (e, t) => ({
  ...ZF(e),
  options: [e, t]
}), c4 = (e, t) => ({
  ...JF(e),
  options: [e, t]
}), f4 = (e, t) => ({
  ...r4(e),
  options: [e, t]
}), d4 = (e, t) => ({
  ...e4(e),
  options: [e, t]
}), h4 = (e, t) => ({
  ...t4(e),
  options: [e, t]
}), p4 = (e, t) => ({
  ...n4(e),
  options: [e, t]
}), m4 = (e, t) => ({
  ...u4(e),
  options: [e, t]
});
var g4 = "Arrow", uP = R.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: s = 5, ...a } = e;
  return /* @__PURE__ */ M.jsx(
    Be.svg,
    {
      ...a,
      ref: t,
      width: o,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ M.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
uP.displayName = g4;
var v4 = uP;
function lP(e) {
  const [t, n] = R.useState(void 0);
  return yt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let u, l;
        if ("borderBoxSize" in a) {
          const f = a.borderBoxSize, d = Array.isArray(f) ? f[0] : f;
          u = d.inlineSize, l = d.blockSize;
        } else
          u = e.offsetWidth, l = e.offsetHeight;
        n({ width: u, height: l });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Py = "Popper", [cP, fP] = ml(Py), [y4, dP] = cP(Py), hP = (e) => {
  const { __scopePopper: t, children: n } = e, [o, s] = R.useState(null);
  return /* @__PURE__ */ M.jsx(y4, { scope: t, anchor: o, onAnchorChange: s, children: n });
};
hP.displayName = Py;
var pP = "PopperAnchor", mP = R.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...s } = e, a = dP(pP, n), u = R.useRef(null), l = tt(t, u), f = R.useRef(null);
    return R.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || u.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ M.jsx(Be.div, { ...s, ref: l });
  }
);
mP.displayName = pP;
var Ty = "PopperContent", [w4, x4] = cP(Ty), gP = R.forwardRef(
  (e, t) => {
    var K, te, se, ae, ce, de;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: s = 0,
      align: a = "center",
      alignOffset: u = 0,
      arrowPadding: l = 0,
      avoidCollisions: f = !0,
      collisionBoundary: d = [],
      collisionPadding: h = 0,
      sticky: m = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: w = "optimized",
      onPlaced: E,
      ...y
    } = e, x = dP(Ty, n), [S, C] = R.useState(null), _ = tt(t, (pe) => C(pe)), [k, N] = R.useState(null), T = lP(k), A = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, D = o + (a !== "center" ? "-" + a : ""), G = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, B = Array.isArray(d) ? d : [d], V = B.length > 0, X = {
      padding: G,
      boundary: B.filter(b4),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: $, isPositioned: Y, middlewareData: I } = a4({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...pe) => QF(...pe, {
        animationFrame: w === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        l4({ mainAxis: s + O, alignmentAxis: u }),
        f && c4({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? f4() : void 0,
          ...X
        }),
        f && d4({ ...X }),
        h4({
          ...X,
          apply: ({ elements: pe, rects: _e, availableWidth: ge, availableHeight: Ne }) => {
            const { width: Ee, height: Ze } = _e.reference, He = pe.floating.style;
            He.setProperty("--radix-popper-available-width", `${ge}px`), He.setProperty("--radix-popper-available-height", `${Ne}px`), He.setProperty("--radix-popper-anchor-width", `${Ee}px`), He.setProperty("--radix-popper-anchor-height", `${Ze}px`);
          }
        }),
        k && m4({ element: k, padding: l }),
        S4({ arrowWidth: A, arrowHeight: O }),
        g && p4({ strategy: "referenceHidden", ...X })
      ]
    }), [j, Q] = wP($), q = so(E);
    yt(() => {
      Y && (q == null || q());
    }, [Y, q]);
    const W = (K = I.arrow) == null ? void 0 : K.x, ie = (te = I.arrow) == null ? void 0 : te.y, F = ((se = I.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = R.useState();
    return yt(() => {
      S && ee(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ M.jsx(
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
            (ae = I.transformOrigin) == null ? void 0 : ae.x,
            (ce = I.transformOrigin) == null ? void 0 : ce.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((de = I.hide) == null ? void 0 : de.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ M.jsx(
          w4,
          {
            scope: n,
            placedSide: j,
            onArrowChange: N,
            arrowX: W,
            arrowY: ie,
            shouldHideArrow: F,
            children: /* @__PURE__ */ M.jsx(
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
gP.displayName = Ty;
var vP = "PopperArrow", _4 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, yP = R.forwardRef(function(t, n) {
  const { __scopePopper: o, ...s } = t, a = x4(vP, o), u = _4[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ M.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [u]: 0,
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
        children: /* @__PURE__ */ M.jsx(
          v4,
          {
            ...s,
            ref: n,
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
function b4(e) {
  return e !== null;
}
var S4 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, S, C;
    const { placement: n, rects: o, middlewareData: s } = t, u = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0, l = u ? 0 : e.arrowWidth, f = u ? 0 : e.arrowHeight, [d, h] = wP(n), m = { start: "0%", center: "50%", end: "100%" }[h], g = (((S = s.arrow) == null ? void 0 : S.x) ?? 0) + l / 2, w = (((C = s.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = u ? m : `${g}px`, y = `${-f}px`) : d === "top" ? (E = u ? m : `${g}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = u ? m : `${w}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = u ? m : `${w}px`), { data: { x: E, y } };
  }
});
function wP(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var E4 = hP, C4 = mP, k4 = gP, R4 = yP, N4 = "Portal", xP = R.forwardRef((e, t) => {
  var l;
  const { container: n, ...o } = e, [s, a] = R.useState(!1);
  yt(() => a(!0), []);
  const u = n || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return u ? lD.createPortal(/* @__PURE__ */ M.jsx(Be.div, { ...o, ref: t }), u) : null;
});
xP.displayName = N4;
// @__NO_SIDE_EFFECTS__
function P4(e) {
  const t = /* @__PURE__ */ T4(e), n = R.forwardRef((o, s) => {
    const { children: a, ...u } = o, l = R.Children.toArray(a), f = l.find(I4);
    if (f) {
      const d = f.props.children, h = l.map((m) => m === f ? R.Children.count(d) > 1 ? R.Children.only(null) : R.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: R.isValidElement(d) ? R.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ M.jsx(t, { ...u, ref: s, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function T4(e) {
  const t = R.forwardRef((n, o) => {
    const { children: s, ...a } = n;
    if (R.isValidElement(s)) {
      const u = O4(s), l = M4(a, s.props);
      return s.type !== R.Fragment && (l.ref = o ? Bs(o, u) : u), R.cloneElement(s, l);
    }
    return R.Children.count(s) > 1 ? R.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var A4 = Symbol("radix.slottable");
function I4(e) {
  return R.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === A4;
}
function M4(e, t) {
  const n = { ...t };
  for (const o in t) {
    const s = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? s && a ? n[o] = (...l) => {
      const f = a(...l);
      return s(...l), f;
    } : s && (n[o] = s) : o === "style" ? n[o] = { ...s, ...a } : o === "className" && (n[o] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function O4(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var L4 = ny[" useInsertionEffect ".trim().toString()] || yt;
function Yv({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [s, a, u] = q4({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, f = l ? e : s;
  {
    const h = R.useRef(e !== void 0);
    R.useEffect(() => {
      const m = h.current;
      m !== l && console.warn(
        `${o} is changing from ${m ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), h.current = l;
    }, [l, o]);
  }
  const d = R.useCallback(
    (h) => {
      var m;
      if (l) {
        const g = D4(h) ? h(e) : h;
        g !== e && ((m = u.current) == null || m.call(u, g));
      } else
        a(h);
    },
    [l, e, a, u]
  );
  return [f, d];
}
function q4({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = R.useState(e), s = R.useRef(n), a = R.useRef(t);
  return L4(() => {
    a.current = t;
  }, [t]), R.useEffect(() => {
    var u;
    s.current !== n && ((u = a.current) == null || u.call(a, n), s.current = n);
  }, [n, s]), [n, o, a];
}
function D4(e) {
  return typeof e == "function";
}
function _P(e) {
  const t = R.useRef({ value: e, previous: e });
  return R.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
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
}), j4 = "VisuallyHidden", z4 = R.forwardRef(
  (e, t) => /* @__PURE__ */ M.jsx(
    Be.span,
    {
      ...e,
      ref: t,
      style: { ...bP, ...e.style }
    }
  )
);
z4.displayName = j4;
var F4 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Uo = /* @__PURE__ */ new WeakMap(), Su = /* @__PURE__ */ new WeakMap(), Eu = {}, ud = 0, SP = function(e) {
  return e && (e.host || SP(e.parentNode));
}, $4 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = SP(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, B4 = function(e, t, n, o) {
  var s = $4(t, Array.isArray(e) ? e : [e]);
  Eu[n] || (Eu[n] = /* @__PURE__ */ new WeakMap());
  var a = Eu[n], u = [], l = /* @__PURE__ */ new Set(), f = new Set(s), d = function(m) {
    !m || l.has(m) || (l.add(m), d(m.parentNode));
  };
  s.forEach(d);
  var h = function(m) {
    !m || f.has(m) || Array.prototype.forEach.call(m.children, function(g) {
      if (l.has(g))
        h(g);
      else
        try {
          var w = g.getAttribute(o), E = w !== null && w !== "false", y = (Uo.get(g) || 0) + 1, x = (a.get(g) || 0) + 1;
          Uo.set(g, y), a.set(g, x), u.push(g), y === 1 && E && Su.set(g, !0), x === 1 && g.setAttribute(n, "true"), E || g.setAttribute(o, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", g, S);
        }
    });
  };
  return h(t), l.clear(), ud++, function() {
    u.forEach(function(m) {
      var g = Uo.get(m) - 1, w = a.get(m) - 1;
      Uo.set(m, g), a.set(m, w), g || (Su.has(m) || m.removeAttribute(o), Su.delete(m)), w || m.removeAttribute(n);
    }), ud--, ud || (Uo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Su = /* @__PURE__ */ new WeakMap(), Eu = {});
  };
}, V4 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), s = F4(e);
  return s ? (o.push.apply(o, Array.from(s.querySelectorAll("[aria-live], script"))), B4(o, s, n, "aria-hidden")) : function() {
    return null;
  };
}, Rn = function() {
  return Rn = Object.assign || function(t) {
    for (var n, o = 1, s = arguments.length; o < s; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Rn.apply(this, arguments);
};
function EP(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]]);
  return n;
}
function H4(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, s = t.length, a; o < s; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ou = "right-scroll-bar-position", Lu = "width-before-scroll-bar", W4 = "with-scroll-bars-hidden", U4 = "--removed-body-scroll-bar-size";
function ld(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function G4(e, t) {
  var n = R.useState(function() {
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
          var s = n.value;
          s !== o && (n.value = o, n.callback(o, s));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Y4 = typeof window < "u" ? R.useLayoutEffect : R.useEffect, h_ = /* @__PURE__ */ new WeakMap();
function K4(e, t) {
  var n = G4(null, function(o) {
    return e.forEach(function(s) {
      return ld(s, o);
    });
  });
  return Y4(function() {
    var o = h_.get(n);
    if (o) {
      var s = new Set(o), a = new Set(e), u = n.current;
      s.forEach(function(l) {
        a.has(l) || ld(l, null);
      }), a.forEach(function(l) {
        s.has(l) || ld(l, u);
      });
    }
    h_.set(n, e);
  }, [e]), n;
}
function X4(e) {
  return e;
}
function Q4(e, t) {
  t === void 0 && (t = X4);
  var n = [], o = !1, s = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var u = t(a, o);
      return n.push(u), function() {
        n = n.filter(function(l) {
          return l !== u;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; n.length; ) {
        var u = n;
        n = [], u.forEach(a);
      }
      n = {
        push: function(l) {
          return a(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var u = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(a), u = n;
      }
      var f = function() {
        var h = u;
        u = [], h.forEach(a);
      }, d = function() {
        return Promise.resolve().then(f);
      };
      d(), n = {
        push: function(h) {
          u.push(h), d();
        },
        filter: function(h) {
          return u = u.filter(h), n;
        }
      };
    }
  };
  return s;
}
function Z4(e) {
  e === void 0 && (e = {});
  var t = Q4(null);
  return t.options = Rn({ async: !0, ssr: !1 }, e), t;
}
var CP = function(e) {
  var t = e.sideCar, n = EP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return R.createElement(o, Rn({}, n));
};
CP.isSideCarExport = !0;
function J4(e, t) {
  return e.useMedium(t), CP;
}
var kP = Z4(), cd = function() {
}, xl = R.forwardRef(function(e, t) {
  var n = R.useRef(null), o = R.useState({
    onScrollCapture: cd,
    onWheelCapture: cd,
    onTouchMoveCapture: cd
  }), s = o[0], a = o[1], u = e.forwardProps, l = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, m = e.shards, g = e.sideCar, w = e.noRelative, E = e.noIsolation, y = e.inert, x = e.allowPinchZoom, S = e.as, C = S === void 0 ? "div" : S, _ = e.gapMode, k = EP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = g, T = K4([n, t]), A = Rn(Rn({}, k), s);
  return R.createElement(
    R.Fragment,
    null,
    h && R.createElement(N, { sideCar: kP, removeScrollBar: d, shards: m, noRelative: w, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: n, gapMode: _ }),
    u ? R.cloneElement(R.Children.only(l), Rn(Rn({}, A), { ref: T })) : R.createElement(C, Rn({}, A, { className: f, ref: T }), l)
  );
});
xl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xl.classNames = {
  fullWidth: Lu,
  zeroRight: Ou
};
var e$ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function t$() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = e$();
  return t && e.setAttribute("nonce", t), e;
}
function n$(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function r$(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var o$ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = t$()) && (n$(t, n), r$(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, i$ = function() {
  var e = o$();
  return function(t, n) {
    R.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, RP = function() {
  var e = i$(), t = function(n) {
    var o = n.styles, s = n.dynamic;
    return e(o, s), null;
  };
  return t;
}, s$ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, fd = function(e) {
  return parseInt(e || "", 10) || 0;
}, a$ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [fd(n), fd(o), fd(s)];
}, u$ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return s$;
  var t = a$(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, l$ = RP(), ti = "data-scroll-locked", c$ = function(e, t, n, o) {
  var s = e.left, a = e.top, u = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(W4, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(l, "px ").concat(o, `;
  }
  body[`).concat(ti, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(u, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ou, ` {
    right: `).concat(l, "px ").concat(o, `;
  }
  
  .`).concat(Lu, ` {
    margin-right: `).concat(l, "px ").concat(o, `;
  }
  
  .`).concat(Ou, " .").concat(Ou, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Lu, " .").concat(Lu, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ti, `] {
    `).concat(U4, ": ").concat(l, `px;
  }
`);
}, p_ = function() {
  var e = parseInt(document.body.getAttribute(ti) || "0", 10);
  return isFinite(e) ? e : 0;
}, f$ = function() {
  R.useEffect(function() {
    return document.body.setAttribute(ti, (p_() + 1).toString()), function() {
      var e = p_() - 1;
      e <= 0 ? document.body.removeAttribute(ti) : document.body.setAttribute(ti, e.toString());
    };
  }, []);
}, d$ = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, s = o === void 0 ? "margin" : o;
  f$();
  var a = R.useMemo(function() {
    return u$(s);
  }, [s]);
  return R.createElement(l$, { styles: c$(a, !t, s, n ? "" : "!important") });
}, Kv = !1;
if (typeof window < "u")
  try {
    var Cu = Object.defineProperty({}, "passive", {
      get: function() {
        return Kv = !0, !0;
      }
    });
    window.addEventListener("test", Cu, Cu), window.removeEventListener("test", Cu, Cu);
  } catch {
    Kv = !1;
  }
var Go = Kv ? { passive: !1 } : !1, h$ = function(e) {
  return e.tagName === "TEXTAREA";
}, NP = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !h$(e) && n[t] === "visible")
  );
}, p$ = function(e) {
  return NP(e, "overflowY");
}, m$ = function(e) {
  return NP(e, "overflowX");
}, m_ = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var s = PP(e, o);
    if (s) {
      var a = TP(e, o), u = a[1], l = a[2];
      if (u > l)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, g$ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, v$ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, PP = function(e, t) {
  return e === "v" ? p$(t) : m$(t);
}, TP = function(e, t) {
  return e === "v" ? g$(t) : v$(t);
}, y$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, w$ = function(e, t, n, o, s) {
  var a = y$(e, window.getComputedStyle(t).direction), u = a * o, l = n.target, f = t.contains(l), d = !1, h = u > 0, m = 0, g = 0;
  do {
    if (!l)
      break;
    var w = TP(e, l), E = w[0], y = w[1], x = w[2], S = y - x - a * E;
    (E || S) && PP(e, l) && (m += S, g += E);
    var C = l.parentNode;
    l = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && l !== document.body || // self content
    f && (t.contains(l) || t === l)
  );
  return (h && Math.abs(m) < 1 || !h && Math.abs(g) < 1) && (d = !0), d;
}, ku = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, g_ = function(e) {
  return [e.deltaX, e.deltaY];
}, v_ = function(e) {
  return e && "current" in e ? e.current : e;
}, x$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, b$ = 0, Yo = [];
function S$(e) {
  var t = R.useRef([]), n = R.useRef([0, 0]), o = R.useRef(), s = R.useState(b$++)[0], a = R.useState(RP)[0], u = R.useRef(e);
  R.useEffect(function() {
    u.current = e;
  }, [e]), R.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var y = H4([e.lockRef.current], (e.shards || []).map(v_), !0).filter(Boolean);
      return y.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), y.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = R.useCallback(function(y, x) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !u.current.allowPinchZoom;
    var S = ku(y), C = n.current, _ = "deltaX" in y ? y.deltaX : C[0] - S[0], k = "deltaY" in y ? y.deltaY : C[1] - S[1], N, T = y.target, A = Math.abs(_) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && A === "h" && T.type === "range")
      return !1;
    var O = m_(A, T);
    if (!O)
      return !0;
    if (O ? N = A : (N = A === "v" ? "h" : "v", O = m_(A, T)), !O)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || k) && (o.current = N), !N)
      return !0;
    var D = o.current || N;
    return w$(D, x, y, D === "h" ? _ : k);
  }, []), f = R.useCallback(function(y) {
    var x = y;
    if (!(!Yo.length || Yo[Yo.length - 1] !== a)) {
      var S = "deltaY" in x ? g_(x) : ku(x), C = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && x$(N.delta, S);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var _ = (u.current.shards || []).map(v_).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), k = _.length > 0 ? l(x, _[0]) : !u.current.noIsolation;
        k && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = R.useCallback(function(y, x, S, C) {
    var _ = { name: y, delta: x, target: S, should: C, shadowParent: E$(S) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== _;
      });
    }, 1);
  }, []), h = R.useCallback(function(y) {
    n.current = ku(y), o.current = void 0;
  }, []), m = R.useCallback(function(y) {
    d(y.type, g_(y), y.target, l(y, e.lockRef.current));
  }, []), g = R.useCallback(function(y) {
    d(y.type, ku(y), y.target, l(y, e.lockRef.current));
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
    E ? R.createElement(a, { styles: _$(s) }) : null,
    w ? R.createElement(d$, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function E$(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const C$ = J4(kP, S$);
var AP = R.forwardRef(function(e, t) {
  return R.createElement(xl, Rn({}, e, { ref: t, sideCar: C$ }));
});
AP.classNames = xl.classNames;
var k$ = [" ", "Enter", "ArrowUp", "ArrowDown"], R$ = [" ", "Enter"], uo = "Select", [_l, bl, N$] = Az(uo), [pi] = ml(uo, [
  N$,
  fP
]), Sl = fP(), [P$, Ar] = pi(uo), [T$, A$] = pi(uo), IP = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    value: u,
    defaultValue: l,
    onValueChange: f,
    dir: d,
    name: h,
    autoComplete: m,
    disabled: g,
    required: w,
    form: E
  } = e, y = Sl(t), [x, S] = R.useState(null), [C, _] = R.useState(null), [k, N] = R.useState(!1), T = Mz(d), [A, O] = Yv({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: uo
  }), [D, G] = Yv({
    prop: u,
    defaultProp: l,
    onChange: f,
    caller: uo
  }), B = R.useRef(null), V = x ? E || !!x.closest("form") : !0, [X, L] = R.useState(/* @__PURE__ */ new Set()), H = Array.from(X).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ M.jsx(E4, { ...y, children: /* @__PURE__ */ M.jsxs(
    P$,
    {
      required: w,
      scope: t,
      trigger: x,
      onTriggerChange: S,
      valueNode: C,
      onValueNodeChange: _,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: N,
      contentId: by(),
      value: D,
      onValueChange: G,
      open: A,
      onOpenChange: O,
      dir: T,
      triggerPointerDownPosRef: B,
      disabled: g,
      children: [
        /* @__PURE__ */ M.jsx(_l.Provider, { scope: t, children: /* @__PURE__ */ M.jsx(
          T$,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: R.useCallback(($) => {
              L((Y) => new Set(Y).add($));
            }, []),
            onNativeOptionRemove: R.useCallback(($) => {
              L((Y) => {
                const I = new Set(Y);
                return I.delete($), I;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ M.jsxs(
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
              D === void 0 ? /* @__PURE__ */ M.jsx("option", { value: "" }) : null,
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
var MP = "SelectTrigger", OP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...s } = e, a = Sl(n), u = Ar(MP, n), l = u.disabled || o, f = tt(t, u.onTriggerChange), d = bl(n), h = R.useRef("touch"), [m, g, w] = nT((y) => {
      const x = d().filter((_) => !_.disabled), S = x.find((_) => _.value === u.value), C = rT(x, y, S);
      C !== void 0 && u.onValueChange(C.value);
    }), E = (y) => {
      l || (u.onOpenChange(!0), w()), y && (u.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ M.jsx(C4, { asChild: !0, ...a, children: /* @__PURE__ */ M.jsx(
      Be.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": u.contentId,
        "aria-expanded": u.open,
        "aria-required": u.required,
        "aria-autocomplete": "none",
        dir: u.dir,
        "data-state": u.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": tT(u.value) ? "" : void 0,
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
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && g(y.key), !(x && y.key === " ") && k$.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
OP.displayName = MP;
var LP = "SelectValue", qP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: s, children: a, placeholder: u = "", ...l } = e, f = Ar(LP, n), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, m = tt(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ M.jsx(
      Be.span,
      {
        ...l,
        ref: m,
        style: { pointerEvents: "none" },
        children: tT(f.value) ? /* @__PURE__ */ M.jsx(M.Fragment, { children: u }) : a
      }
    );
  }
);
qP.displayName = LP;
var I$ = "SelectIcon", DP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...s } = e;
    return /* @__PURE__ */ M.jsx(Be.span, { "aria-hidden": !0, ...s, ref: t, children: o || "▼" });
  }
);
DP.displayName = I$;
var M$ = "SelectPortal", jP = (e) => /* @__PURE__ */ M.jsx(xP, { asChild: !0, ...e });
jP.displayName = M$;
var lo = "SelectContent", zP = R.forwardRef(
  (e, t) => {
    const n = Ar(lo, e.__scopeSelect), [o, s] = R.useState();
    if (yt(() => {
      s(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? $s.createPortal(
        /* @__PURE__ */ M.jsx(FP, { scope: e.__scopeSelect, children: /* @__PURE__ */ M.jsx(_l.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ M.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ M.jsx($P, { ...e, ref: t });
  }
);
zP.displayName = lo;
var ln = 10, [FP, Ir] = pi(lo), O$ = "SelectContentImpl", L$ = /* @__PURE__ */ P4("SelectContent.RemoveScroll"), $P = R.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: u,
      //
      // PopperContent props
      side: l,
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
    } = e, C = Ar(lo, n), [_, k] = R.useState(null), [N, T] = R.useState(null), A = tt(t, (K) => k(K)), [O, D] = R.useState(null), [G, B] = R.useState(
      null
    ), V = bl(n), [X, L] = R.useState(!1), H = R.useRef(!1);
    R.useEffect(() => {
      if (_) return V4(_);
    }, [_]), Xz();
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
    const { onOpenChange: I, triggerPointerDownPosRef: j } = C;
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
          K.x <= 10 && K.y <= 10 ? ae.preventDefault() : _.contains(ae.target) || I(!1), document.removeEventListener("pointermove", te), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [_, I, j]), R.useEffect(() => {
      const K = () => I(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [I]);
    const [Q, q] = nT((K) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = rT(te, K, se);
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
    ), Z = o === "popper" ? Xv : BP, ee = Z === Xv ? {
      side: l,
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
    return /* @__PURE__ */ M.jsx(
      FP,
      {
        scope: n,
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
        children: /* @__PURE__ */ M.jsx(AP, { as: L$, allowPinchZoom: !0, children: /* @__PURE__ */ M.jsx(
          KN,
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
            children: /* @__PURE__ */ M.jsx(
              GN,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: u,
                onFocusOutside: (K) => K.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ M.jsx(
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
$P.displayName = O$;
var q$ = "SelectItemAlignedPosition", BP = R.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...s } = e, a = Ar(lo, n), u = Ir(lo, n), [l, f] = R.useState(null), [d, h] = R.useState(null), m = tt(t, (A) => h(A)), g = bl(n), w = R.useRef(!1), E = R.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = u, _ = R.useCallback(() => {
    if (a.trigger && a.valueNode && l && d && y && x && S) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), G = S.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = G.left - O.left, de = D.left - ce, pe = A.left - de, _e = A.width + pe, ge = Math.max(_e, O.width), Ne = window.innerWidth - ln, Ee = G1(de, [
          ln,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ln, Ne - ge)
        ]);
        l.style.minWidth = _e + "px", l.style.left = Ee + "px";
      } else {
        const ce = O.right - G.right, de = window.innerWidth - D.right - ce, pe = window.innerWidth - A.right - de, _e = A.width + pe, ge = Math.max(_e, O.width), Ne = window.innerWidth - ln, Ee = G1(de, [
          ln,
          Math.max(ln, Ne - ge)
        ]);
        l.style.minWidth = _e + "px", l.style.right = Ee + "px";
      }
      const B = g(), V = window.innerHeight - ln * 2, X = y.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), $ = parseInt(L.paddingTop, 10), Y = parseInt(L.borderBottomWidth, 10), I = parseInt(L.paddingBottom, 10), j = H + $ + X + I + Y, Q = Math.min(x.offsetHeight * 5, j), q = window.getComputedStyle(y), W = parseInt(q.paddingTop, 10), ie = parseInt(q.paddingBottom, 10), F = A.top + A.height / 2 - ln, Z = V - F, ee = x.offsetHeight / 2, K = x.offsetTop + ee, te = H + $ + K, se = j - te;
      if (te <= F) {
        const ce = B.length > 0 && x === B[B.length - 1].ref.current;
        l.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + Y
        ), _e = te + pe;
        l.style.height = _e + "px";
      } else {
        const ce = B.length > 0 && x === B[0].ref.current;
        l.style.top = "0px";
        const pe = Math.max(
          F,
          H + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ce ? W : 0) + ee
        ) + se;
        l.style.height = pe + "px", y.scrollTop = te - F + y.offsetTop;
      }
      l.style.margin = `${ln}px 0`, l.style.minHeight = Q + "px", l.style.maxHeight = V + "px", o == null || o(), requestAnimationFrame(() => w.current = !0);
    }
  }, [
    g,
    a.trigger,
    a.valueNode,
    l,
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
  return /* @__PURE__ */ M.jsx(
    j$,
    {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: w,
      onScrollButtonChange: T,
      children: /* @__PURE__ */ M.jsx(
        "div",
        {
          ref: f,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: k
          },
          children: /* @__PURE__ */ M.jsx(
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
BP.displayName = q$;
var D$ = "SelectPopperPosition", Xv = R.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: s = ln,
    ...a
  } = e, u = Sl(n);
  return /* @__PURE__ */ M.jsx(
    k4,
    {
      ...u,
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
Xv.displayName = D$;
var [j$, Ay] = pi(lo, {}), Qv = "SelectViewport", VP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...s } = e, a = Ir(Qv, n), u = Ay(Qv, n), l = tt(t, a.onViewportChange), f = R.useRef(0);
    return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ M.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ M.jsx(_l.Slot, { scope: n, children: /* @__PURE__ */ M.jsx(
        Be.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
          ref: l,
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
            const h = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: g } = u;
            if (g != null && g.current && m) {
              const w = Math.abs(f.current - h.scrollTop);
              if (w > 0) {
                const E = window.innerHeight - ln * 2, y = parseFloat(m.style.minHeight), x = parseFloat(m.style.height), S = Math.max(y, x);
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
VP.displayName = Qv;
var HP = "SelectGroup", [z$, F$] = pi(HP), $$ = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = by();
    return /* @__PURE__ */ M.jsx(z$, { scope: n, id: s, children: /* @__PURE__ */ M.jsx(Be.div, { role: "group", "aria-labelledby": s, ...o, ref: t }) });
  }
);
$$.displayName = HP;
var WP = "SelectLabel", B$ = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = F$(WP, n);
    return /* @__PURE__ */ M.jsx(Be.div, { id: s.id, ...o, ref: t });
  }
);
B$.displayName = WP;
var Ju = "SelectItem", [V$, UP] = pi(Ju), GP = R.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: s = !1,
      textValue: a,
      ...u
    } = e, l = Ar(Ju, n), f = Ir(Ju, n), d = l.value === o, [h, m] = R.useState(a ?? ""), [g, w] = R.useState(!1), E = tt(
      t,
      (C) => {
        var _;
        return (_ = f.itemRefCallback) == null ? void 0 : _.call(f, C, o, s);
      }
    ), y = by(), x = R.useRef("touch"), S = () => {
      s || (l.onValueChange(o), l.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ M.jsx(
      V$,
      {
        scope: n,
        value: o,
        disabled: s,
        textId: y,
        isSelected: d,
        onItemTextChange: R.useCallback((C) => {
          m((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ M.jsx(
          _l.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: s,
            textValue: h,
            children: /* @__PURE__ */ M.jsx(
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
                ...u,
                ref: E,
                onFocus: Qe(u.onFocus, () => w(!0)),
                onBlur: Qe(u.onBlur, () => w(!1)),
                onClick: Qe(u.onClick, () => {
                  x.current !== "mouse" && S();
                }),
                onPointerUp: Qe(u.onPointerUp, () => {
                  x.current === "mouse" && S();
                }),
                onPointerDown: Qe(u.onPointerDown, (C) => {
                  x.current = C.pointerType;
                }),
                onPointerMove: Qe(u.onPointerMove, (C) => {
                  var _;
                  x.current = C.pointerType, s ? (_ = f.onItemLeave) == null || _.call(f) : x.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Qe(u.onPointerLeave, (C) => {
                  var _;
                  C.currentTarget === document.activeElement && ((_ = f.onItemLeave) == null || _.call(f));
                }),
                onKeyDown: Qe(u.onKeyDown, (C) => {
                  var k;
                  ((k = f.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (R$.includes(C.key) && S(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
GP.displayName = Ju;
var ms = "SelectItemText", YP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: s, ...a } = e, u = Ar(ms, n), l = Ir(ms, n), f = UP(ms, n), d = A$(ms, n), [h, m] = R.useState(null), g = tt(
      t,
      (S) => m(S),
      f.onItemTextChange,
      (S) => {
        var C;
        return (C = l.itemTextRefCallback) == null ? void 0 : C.call(l, S, f.value, f.disabled);
      }
    ), w = h == null ? void 0 : h.textContent, E = R.useMemo(
      () => /* @__PURE__ */ M.jsx("option", { value: f.value, disabled: f.disabled, children: w }, f.value),
      [f.disabled, f.value, w]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = d;
    return yt(() => (y(E), () => x(E)), [y, x, E]), /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ M.jsx(Be.span, { id: f.textId, ...a, ref: g }),
      f.isSelected && u.valueNode && !u.valueNodeHasChildren ? $s.createPortal(a.children, u.valueNode) : null
    ] });
  }
);
YP.displayName = ms;
var KP = "SelectItemIndicator", XP = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return UP(KP, n).isSelected ? /* @__PURE__ */ M.jsx(Be.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
XP.displayName = KP;
var Zv = "SelectScrollUpButton", QP = R.forwardRef((e, t) => {
  const n = Ir(Zv, e.__scopeSelect), o = Ay(Zv, e.__scopeSelect), [s, a] = R.useState(!1), u = tt(t, o.onScrollButtonChange);
  return yt(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const d = f.scrollTop > 0;
        a(d);
      };
      const f = n.viewport;
      return l(), f.addEventListener("scroll", l), () => f.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ M.jsx(
    JP,
    {
      ...e,
      ref: u,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: f } = n;
        l && f && (l.scrollTop = l.scrollTop - f.offsetHeight);
      }
    }
  ) : null;
});
QP.displayName = Zv;
var Jv = "SelectScrollDownButton", ZP = R.forwardRef((e, t) => {
  const n = Ir(Jv, e.__scopeSelect), o = Ay(Jv, e.__scopeSelect), [s, a] = R.useState(!1), u = tt(t, o.onScrollButtonChange);
  return yt(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const d = f.scrollHeight - f.clientHeight, h = Math.ceil(f.scrollTop) < d;
        a(h);
      };
      const f = n.viewport;
      return l(), f.addEventListener("scroll", l), () => f.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), s ? /* @__PURE__ */ M.jsx(
    JP,
    {
      ...e,
      ref: u,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: f } = n;
        l && f && (l.scrollTop = l.scrollTop + f.offsetHeight);
      }
    }
  ) : null;
});
ZP.displayName = Jv;
var JP = R.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...s } = e, a = Ir("SelectScrollButton", n), u = R.useRef(null), l = bl(n), f = R.useCallback(() => {
    u.current !== null && (window.clearInterval(u.current), u.current = null);
  }, []);
  return R.useEffect(() => () => f(), [f]), yt(() => {
    var h;
    const d = l().find((m) => m.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ M.jsx(
    Be.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: Qe(s.onPointerDown, () => {
        u.current === null && (u.current = window.setInterval(o, 50));
      }),
      onPointerMove: Qe(s.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), u.current === null && (u.current = window.setInterval(o, 50));
      }),
      onPointerLeave: Qe(s.onPointerLeave, () => {
        f();
      })
    }
  );
}), H$ = "SelectSeparator", W$ = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ M.jsx(Be.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
W$.displayName = H$;
var ey = "SelectArrow", U$ = R.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, s = Sl(n), a = Ar(ey, n), u = Ir(ey, n);
    return a.open && u.position === "popper" ? /* @__PURE__ */ M.jsx(R4, { ...s, ...o, ref: t }) : null;
  }
);
U$.displayName = ey;
var G$ = "SelectBubbleInput", eT = R.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const s = R.useRef(null), a = tt(o, s), u = _P(t);
    return R.useEffect(() => {
      const l = s.current;
      if (!l) return;
      const f = window.HTMLSelectElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "value"
      ).set;
      if (u !== t && h) {
        const m = new Event("change", { bubbles: !0 });
        h.call(l, t), l.dispatchEvent(m);
      }
    }, [u, t]), /* @__PURE__ */ M.jsx(
      Be.select,
      {
        ...n,
        style: { ...bP, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
eT.displayName = G$;
function tT(e) {
  return e === "" || e === void 0;
}
function nT(e) {
  const t = so(e), n = R.useRef(""), o = R.useRef(0), s = R.useCallback(
    (u) => {
      const l = n.current + u;
      t(l), (function f(d) {
        n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      })(l);
    },
    [t]
  ), a = R.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return R.useEffect(() => () => window.clearTimeout(o.current), []), [n, s, a];
}
function rT(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let u = Y$(e, Math.max(a, 0));
  s.length === 1 && (u = u.filter((d) => d !== n));
  const f = u.find(
    (d) => d.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function Y$(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var K$ = IP, X$ = OP, Q$ = qP, Z$ = DP, J$ = jP, eB = zP, tB = VP, nB = GP, rB = YP, oB = XP, iB = QP, sB = ZP;
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aB = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uB = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), y_ = (e) => {
  const t = uB(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, oT = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), lB = (e) => {
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
var cB = {
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
const fB = R.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: a,
    iconNode: u,
    ...l
  }, f) => R.createElement(
    "svg",
    {
      ref: f,
      ...cB,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: oT("lucide", s),
      ...!a && !lB(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...u.map(([d, h]) => R.createElement(d, h)),
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
const Iy = (e, t) => {
  const n = R.forwardRef(
    ({ className: o, ...s }, a) => R.createElement(fB, {
      ref: a,
      iconNode: t,
      className: oT(
        `lucide-${aB(y_(e))}`,
        `lucide-${e}`,
        o
      ),
      ...s
    })
  );
  return n.displayName = y_(e), n;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dB = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], iT = Iy("check", dB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hB = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], sT = Iy("chevron-down", hB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pB = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], mB = Iy("chevron-up", pB);
function gB({
  ...e
}) {
  return /* @__PURE__ */ M.jsx(K$, { "data-slot": "select", ...e });
}
function vB({
  ...e
}) {
  return /* @__PURE__ */ M.jsx(Q$, { "data-slot": "select-value", ...e });
}
function yB({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ M.jsxs(
    X$,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Fe(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ M.jsx(Z$, { asChild: !0, children: /* @__PURE__ */ M.jsx(sT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function wB({
  className: e,
  children: t,
  position: n = "popper",
  align: o = "center",
  ...s
}) {
  return /* @__PURE__ */ M.jsx(J$, { children: /* @__PURE__ */ M.jsxs(
    eB,
    {
      "data-slot": "select-content",
      className: Fe(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: o,
      ...s,
      children: [
        /* @__PURE__ */ M.jsx(_B, {}),
        /* @__PURE__ */ M.jsx(
          tB,
          {
            className: Fe(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ M.jsx(bB, {})
      ]
    }
  ) });
}
function xB({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ M.jsxs(
    nB,
    {
      "data-slot": "select-item",
      className: Fe(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ M.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ M.jsx(oB, { children: /* @__PURE__ */ M.jsx(iT, { className: "size-4" }) }) }),
        /* @__PURE__ */ M.jsx(rB, { children: t })
      ]
    }
  );
}
function _B({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ M.jsx(
    iB,
    {
      "data-slot": "select-scroll-up-button",
      className: Fe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ M.jsx(mB, { className: "size-4" })
    }
  );
}
function bB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ M.jsx(
    sB,
    {
      "data-slot": "select-scroll-down-button",
      className: Fe(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ M.jsx(sT, { className: "size-4" })
    }
  );
}
function SB({ value: e, options: t, onChange: n, placeholder: o, label: s }) {
  return /* @__PURE__ */ M.jsxs(gB, { value: e, onValueChange: n, children: [
    /* @__PURE__ */ M.jsx(
      yB,
      {
        className: "h-8 text-xs",
        onMouseDown: (a) => a.stopPropagation(),
        onPointerDown: (a) => a.stopPropagation(),
        "aria-label": s,
        children: /* @__PURE__ */ M.jsx(vB, { placeholder: o })
      }
    ),
    /* @__PURE__ */ M.jsx(wB, { children: t.map((a) => /* @__PURE__ */ M.jsx(xB, { value: a, className: "text-xs", children: a }, a)) })
  ] });
}
class EB {
  constructor() {
    Lf(this, "renderers", /* @__PURE__ */ new Map());
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
  register(t, n) {
    this.renderers.set(t, n);
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
const Ko = new EB();
function aT({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ M.jsx(
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
      ...n
    }
  );
}
function uT({ value: e, onChange: t, placeholder: n, label: o }) {
  return /* @__PURE__ */ M.jsx(
    aT,
    {
      type: "text",
      value: e,
      onChange: (s) => t(s.target.value),
      onMouseDown: (s) => s.stopPropagation(),
      onPointerDown: (s) => s.stopPropagation(),
      placeholder: n,
      "aria-label": o,
      className: "h-8 text-xs"
    }
  );
}
function lT({ value: e, onChange: t, isInteger: n, placeholder: o, label: s }) {
  return /* @__PURE__ */ M.jsx(
    aT,
    {
      type: "number",
      value: e,
      step: n ? 1 : "any",
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
function CB(e, t) {
  return R.useReducer((n, o) => t[n][o] ?? n, e);
}
var cT = (e) => {
  const { present: t, children: n } = e, o = kB(t), s = typeof n == "function" ? n({ present: o.isPresent }) : R.Children.only(n), a = tt(o.ref, RB(s));
  return typeof n == "function" || o.isPresent ? R.cloneElement(s, { ref: a }) : null;
};
cT.displayName = "Presence";
function kB(e) {
  const [t, n] = R.useState(), o = R.useRef(null), s = R.useRef(e), a = R.useRef("none"), u = e ? "mounted" : "unmounted", [l, f] = CB(u, {
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
    const d = Ru(o.current);
    a.current = l === "mounted" ? d : "none";
  }, [l]), yt(() => {
    const d = o.current, h = s.current;
    if (h !== e) {
      const g = a.current, w = Ru(d);
      e ? f("MOUNT") : w === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && g !== w ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, m = (w) => {
        const y = Ru(o.current).includes(CSS.escape(w.animationName));
        if (w.target === t && y && (f("ANIMATION_END"), !s.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (w) => {
        w.target === t && (a.current = Ru(o.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: R.useCallback((d) => {
      o.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Ru(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function RB(e) {
  var o, s;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var El = "Checkbox", [NB] = ml(El), [PB, My] = NB(El);
function TB(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: o,
    defaultChecked: s,
    disabled: a,
    form: u,
    name: l,
    onCheckedChange: f,
    required: d,
    value: h = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [g, w] = Yv({
    prop: n,
    defaultProp: s ?? !1,
    onChange: f,
    caller: El
  }), [E, y] = R.useState(null), [x, S] = R.useState(null), C = R.useRef(!1), _ = E ? !!u || !!E.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: g,
    disabled: a,
    setChecked: w,
    control: E,
    setControl: y,
    name: l,
    form: u,
    value: h,
    hasConsumerStoppedPropagationRef: C,
    required: d,
    defaultChecked: Nr(s) ? !1 : s,
    isFormControl: _,
    bubbleInput: x,
    setBubbleInput: S
  };
  return /* @__PURE__ */ M.jsx(
    PB,
    {
      scope: t,
      ...k,
      children: AB(m) ? m(k) : o
    }
  );
}
var fT = "CheckboxTrigger", dT = R.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...o }, s) => {
    const {
      control: a,
      value: u,
      disabled: l,
      checked: f,
      required: d,
      setControl: h,
      setChecked: m,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: w,
      bubbleInput: E
    } = My(fT, e), y = tt(s, h), x = R.useRef(f);
    return R.useEffect(() => {
      const S = a == null ? void 0 : a.form;
      if (S) {
        const C = () => m(x.current);
        return S.addEventListener("reset", C), () => S.removeEventListener("reset", C);
      }
    }, [a, m]), /* @__PURE__ */ M.jsx(
      Be.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Nr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": yT(f),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: u,
        ...o,
        ref: y,
        onKeyDown: Qe(t, (S) => {
          S.key === "Enter" && S.preventDefault();
        }),
        onClick: Qe(n, (S) => {
          m((C) => Nr(C) ? !0 : !C), E && w && (g.current = S.isPropagationStopped(), g.current || S.stopPropagation());
        })
      }
    );
  }
);
dT.displayName = fT;
var hT = R.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: s,
      defaultChecked: a,
      required: u,
      disabled: l,
      value: f,
      onCheckedChange: d,
      form: h,
      ...m
    } = e;
    return /* @__PURE__ */ M.jsx(
      TB,
      {
        __scopeCheckbox: n,
        checked: s,
        defaultChecked: a,
        disabled: l,
        required: u,
        onCheckedChange: d,
        name: o,
        form: h,
        value: f,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          /* @__PURE__ */ M.jsx(
            dT,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          g && /* @__PURE__ */ M.jsx(
            vT,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
hT.displayName = El;
var pT = "CheckboxIndicator", mT = R.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...s } = e, a = My(pT, n);
    return /* @__PURE__ */ M.jsx(
      cT,
      {
        present: o || Nr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ M.jsx(
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
var gT = "CheckboxBubbleInput", vT = R.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: o,
      hasConsumerStoppedPropagationRef: s,
      checked: a,
      defaultChecked: u,
      required: l,
      disabled: f,
      name: d,
      value: h,
      form: m,
      bubbleInput: g,
      setBubbleInput: w
    } = My(gT, e), E = tt(n, w), y = _P(a), x = lP(o);
    R.useEffect(() => {
      const C = g;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, T = !s.current;
      if (y !== a && N) {
        const A = new Event("click", { bubbles: T });
        C.indeterminate = Nr(a), N.call(C, Nr(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [g, y, a, s]);
    const S = R.useRef(Nr(a) ? !1 : a);
    return /* @__PURE__ */ M.jsx(
      Be.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? S.current,
        required: l,
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
function AB(e) {
  return typeof e == "function";
}
function Nr(e) {
  return e === "indeterminate";
}
function yT(e) {
  return Nr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function IB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ M.jsx(
    hT,
    {
      "data-slot": "checkbox",
      className: Fe(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ M.jsx(
        mT,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ M.jsx(iT, { className: "size-3.5" })
        }
      )
    }
  );
}
function MB({ value: e, onChange: t, label: n }) {
  return /* @__PURE__ */ M.jsx(
    IB,
    {
      checked: e,
      onCheckedChange: (o) => t(o === !0),
      onMouseDown: (o) => o.stopPropagation(),
      onPointerDown: (o) => o.stopPropagation(),
      "aria-label": n,
      className: "h-4 w-4"
    }
  );
}
function OB(e, t = []) {
  let n = [];
  function o(a, u) {
    const l = R.createContext(u);
    l.displayName = a + "Context";
    const f = n.length;
    n = [...n, u];
    const d = (m) => {
      var S;
      const { scope: g, children: w, ...E } = m, y = ((S = g == null ? void 0 : g[e]) == null ? void 0 : S[f]) || l, x = R.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ M.jsx(y.Provider, { value: x, children: w });
    };
    d.displayName = a + "Provider";
    function h(m, g) {
      var y;
      const w = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[f]) || l, E = R.useContext(w);
      if (E) return E;
      if (u !== void 0) return u;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const s = () => {
    const a = n.map((u) => R.createContext(u));
    return function(l) {
      const f = (l == null ? void 0 : l[e]) || a;
      return R.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: f } }),
        [l, f]
      );
    };
  };
  return s.scopeName = e, [o, LB(s, ...t)];
}
function LB(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const u = o.reduce((l, { useScope: f, scopeName: d }) => {
        const m = f(a)[`__scope${d}`];
        return { ...l, ...m };
      }, {});
      return R.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var qB = [
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
], wT = qB.reduce((e, t) => {
  const n = /* @__PURE__ */ _y(`Primitive.${t}`), o = R.forwardRef((s, a) => {
    const { asChild: u, ...l } = s, f = u ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ M.jsx(f, { ...l, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), Oy = "Progress", Ly = 100, [DB] = OB(Oy), [jB, zB] = DB(Oy), xT = R.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: s,
      getValueLabel: a = FB,
      ...u
    } = e;
    (s || s === 0) && !w_(s) && console.error($B(`${s}`, "Progress"));
    const l = w_(s) ? s : Ly;
    o !== null && !x_(o, l) && console.error(BB(`${o}`, "Progress"));
    const f = x_(o, l) ? o : null, d = el(f) ? a(f, l) : void 0;
    return /* @__PURE__ */ M.jsx(jB, { scope: n, value: f, max: l, children: /* @__PURE__ */ M.jsx(
      wT.div,
      {
        "aria-valuemax": l,
        "aria-valuemin": 0,
        "aria-valuenow": el(f) ? f : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": ST(f, l),
        "data-value": f ?? void 0,
        "data-max": l,
        ...u,
        ref: t
      }
    ) });
  }
);
xT.displayName = Oy;
var _T = "ProgressIndicator", bT = R.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, s = zB(_T, n);
    return /* @__PURE__ */ M.jsx(
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
function FB(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function ST(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function el(e) {
  return typeof e == "number";
}
function w_(e) {
  return el(e) && !isNaN(e) && e > 0;
}
function x_(e, t) {
  return el(e) && !isNaN(e) && e <= t && e >= 0;
}
function $B(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ly}\`.`;
}
function BB(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ly} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var VB = xT, HB = bT;
function WB({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ M.jsx(
    VB,
    {
      "data-slot": "progress",
      className: Fe(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ M.jsx(
        HB,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function UB({ value: e, onChange: t, label: n, property: o }) {
  const s = (o == null ? void 0 : o.maximum) ?? 100, a = (o == null ? void 0 : o.minimum) ?? 0, u = Math.min(100, Math.max(0, (e - a) / (s - a) * 100));
  return /* @__PURE__ */ M.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ M.jsx("span", { className: "text-muted-foreground", children: (o == null ? void 0 : o.description) || "Progress" }),
      /* @__PURE__ */ M.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
        Math.round(u),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ M.jsx(WB, { value: u, className: "h-2" })
  ] });
}
const GB = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ M.jsx(
  uT,
  {
    value: String(e || ""),
    onChange: n,
    placeholder: t.description,
    label: o
  }
), YB = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ M.jsx(
  lT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: n,
    isInteger: !1,
    placeholder: t.description,
    label: o
  }
), KB = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ M.jsx(
  lT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: n,
    isInteger: !0,
    placeholder: t.description,
    label: o
  }
), XB = ({ value: e, onChange: t, label: n }) => /* @__PURE__ */ M.jsx(MB, { value: !!e, onChange: t, label: n }), QB = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ M.jsx(
  UB,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: n,
    property: t,
    label: o
  }
), ZB = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ M.jsx(
  uT,
  {
    value: e ? JSON.stringify(e) : "",
    onChange: (s) => {
      try {
        n(JSON.parse(String(s)));
      } catch {
        n(s);
      }
    },
    placeholder: t.description,
    label: o
  }
);
function JB() {
  Ko.register("string", GB), Ko.register("number", YB), Ko.register("integer", KB), Ko.register("boolean", XB), Ko.register("progress", QB);
}
JB();
function e5({ fieldKey: e, property: t, value: n, onChange: o, label: s, inputId: a }) {
  return t.enum ? /* @__PURE__ */ M.jsx(
    SB,
    {
      value: String(n || ""),
      options: t.enum.map(String),
      onChange: o,
      placeholder: t.description,
      id: a,
      label: s
    }
  ) : (Ko.get(t.type) || ZB)({ value: n, property: t, onChange: o, id: a, label: s });
}
var t5 = [
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
], n5 = t5.reduce((e, t) => {
  const n = /* @__PURE__ */ _y(`Primitive.${t}`), o = R.forwardRef((s, a) => {
    const { asChild: u, ...l } = s, f = u ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ M.jsx(f, { ...l, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), r5 = "Label", ET = R.forwardRef((e, t) => /* @__PURE__ */ M.jsx(
  n5.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var s;
      n.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
ET.displayName = r5;
var o5 = ET;
function i5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ M.jsx(
    o5,
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
function s5({
  nodeId: e,
  parameters: t,
  values: n,
  onValueChange: o,
  fieldConfigs: s,
  validation: a
}) {
  if (!(t != null && t.properties))
    return null;
  const u = (l, f) => {
    if (f != null && f.hidden) return !1;
    if (f != null && f.showWhen) {
      const d = f.showWhen, h = n == null ? void 0 : n[d.field];
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
  return /* @__PURE__ */ M.jsx(
    "div",
    {
      className: "p-3 flex flex-col gap-2.5",
      onMouseDown: (l) => l.stopPropagation(),
      onPointerDown: (l) => l.stopPropagation(),
      children: Object.entries(t.properties).map(([l, f]) => {
        var E;
        const d = s == null ? void 0 : s[l];
        if (!u(l, d))
          return null;
        const h = (n == null ? void 0 : n[l]) ?? f.default ?? "", m = (E = t.required) == null ? void 0 : E.includes(l), g = `node-${e}-field-${l}`, w = (d == null ? void 0 : d.disabled) || (d == null ? void 0 : d.readonly);
        return /* @__PURE__ */ M.jsxs(
          "div",
          {
            className: Fe("flex flex-col gap-1", d == null ? void 0 : d.className),
            title: d == null ? void 0 : d.tooltip,
            children: [
              /* @__PURE__ */ M.jsx(
                i5,
                {
                  htmlFor: g,
                  className: Fe(
                    "text-xs font-medium flex items-center gap-1",
                    m && "after:content-['*'] after:text-destructive after:ml-0.5",
                    w && "opacity-50 cursor-not-allowed"
                  ),
                  children: f.title || l
                }
              ),
              /* @__PURE__ */ M.jsx(
                e5,
                {
                  fieldKey: l,
                  property: f,
                  value: h,
                  onChange: (y) => !w && o(l, y),
                  inputId: g
                }
              )
            ]
          },
          l
        );
      })
    }
  );
}
const CT = cn.createContext(null), a5 = ({ content: e }) => {
  const t = cn.useContext(CT);
  if (!t)
    return /* @__PURE__ */ M.jsx("div", { className: "text-muted-foreground text-xs", children: "No node context available" });
  const { nodeId: n, nodeData: o, onValueChange: s } = t;
  switch (e.type) {
    case "inputs":
      return /* @__PURE__ */ M.jsx(
        u5,
        {
          inputs: o.inputs || [],
          handleType: e.handleType || o.inputHandleType || "base"
        }
      );
    case "outputs":
      return /* @__PURE__ */ M.jsx(
        l5,
        {
          outputs: o.outputs || [],
          handleType: e.handleType || o.outputHandleType || "base"
        }
      );
    case "parameters":
      return o.parameters ? /* @__PURE__ */ M.jsx(
        s5,
        {
          nodeId: n,
          parameters: o.parameters,
          values: o.values,
          onValueChange: s,
          fieldConfigs: o.fieldConfigs,
          validation: o.validation
        }
      ) : null;
    default:
      return /* @__PURE__ */ M.jsx("div", { children: "Unknown content type" });
  }
}, u5 = ({ inputs: e, handleType: t }) => e.length === 0 ? null : /* @__PURE__ */ M.jsx("div", { className: "inputs-container flex flex-col gap-2", children: e.map((n) => /* @__PURE__ */ M.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-start", children: [
  /* @__PURE__ */ M.jsx(
    VN,
    {
      type: "target",
      position: Se.Left,
      id: n.id,
      handleType: n.handle_type || t,
      handleConfig: n,
      label: n.label
    }
  ),
  /* @__PURE__ */ M.jsx(WN, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: n.label })
] }, `input-${n.id}`)) }), l5 = ({ outputs: e, handleType: t }) => e.length === 0 ? null : /* @__PURE__ */ M.jsx("div", { className: "outputs-container flex flex-col gap-2", children: e.map((n) => /* @__PURE__ */ M.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-end", children: [
  /* @__PURE__ */ M.jsx(WN, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: n.label }),
  /* @__PURE__ */ M.jsx(
    VN,
    {
      type: "source",
      position: Se.Right,
      id: n.id,
      handleType: n.handle_type || t,
      handleConfig: n,
      label: n.label
    }
  )
] }, `output-${n.id}`)) }), c5 = ({ item: e }) => {
  const t = f5(e.coordinates);
  return /* @__PURE__ */ M.jsx(
    "div",
    {
      className: `grid-item ${e.class_name || ""}`.trim(),
      style: {
        gridArea: t,
        ...e.style
      },
      "data-grid-item-id": e.id,
      children: /* @__PURE__ */ M.jsx(a5, { content: e.content })
    }
  );
};
function f5(e) {
  const t = e.row + e.row_span, n = e.col + e.col_span;
  return `${e.row} / ${e.col} / ${t} / ${n}`;
}
const d5 = ({ layout: e }) => {
  const t = h5(e.grid);
  return /* @__PURE__ */ M.jsx(
    "div",
    {
      className: `grid-layout ${e.class_name || ""}`.trim(),
      style: {
        ...t,
        ...e.style
      },
      children: e.items.map((n) => /* @__PURE__ */ M.jsx(c5, { item: n }, n.id))
    }
  );
};
function h5(e) {
  const t = {
    display: "grid",
    gridTemplateRows: __(e.rows, e.row_sizes),
    gridTemplateColumns: __(e.cols, e.col_sizes),
    gap: Array.isArray(e.gap) ? `${e.gap[0]} ${e.gap[1]}` : e.gap || "8px"
  };
  return e.auto_rows && (t.gridAutoRows = e.auto_rows), e.auto_cols && (t.gridAutoColumns = e.auto_cols), e.justify_items && (t.justifyItems = e.justify_items), e.align_items && (t.alignItems = e.align_items), t;
}
function __(e, t) {
  return typeof e == "number" ? t && t.length > 0 ? t.join(" ") : `repeat(${e}, 1fr)` : e.join(" ");
}
function p5({ className: e, ...t }) {
  return /* @__PURE__ */ M.jsx(
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
function m5({ className: e, ...t }) {
  return /* @__PURE__ */ M.jsx(
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
function g5({ className: e, ...t }) {
  return /* @__PURE__ */ M.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: Fe("leading-none font-semibold", e),
      ...t
    }
  );
}
function v5({ className: e, ...t }) {
  return /* @__PURE__ */ M.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Fe("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
R.createContext(null);
function qy(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var dd, b_;
function y5() {
  if (b_) return dd;
  b_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return dd = e, dd;
}
var hd, S_;
function mi() {
  if (S_) return hd;
  S_ = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return hd = e, hd;
}
var pd, E_;
function Cl() {
  if (E_) return pd;
  E_ = 1;
  var e = mi();
  function t(n, o) {
    for (var s = n.length; s--; )
      if (e(n[s][0], o))
        return s;
    return -1;
  }
  return pd = t, pd;
}
var md, C_;
function w5() {
  if (C_) return md;
  C_ = 1;
  var e = Cl(), t = Array.prototype, n = t.splice;
  function o(s) {
    var a = this.__data__, u = e(a, s);
    if (u < 0)
      return !1;
    var l = a.length - 1;
    return u == l ? a.pop() : n.call(a, u, 1), --this.size, !0;
  }
  return md = o, md;
}
var gd, k_;
function x5() {
  if (k_) return gd;
  k_ = 1;
  var e = Cl();
  function t(n) {
    var o = this.__data__, s = e(o, n);
    return s < 0 ? void 0 : o[s][1];
  }
  return gd = t, gd;
}
var vd, R_;
function _5() {
  if (R_) return vd;
  R_ = 1;
  var e = Cl();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return vd = t, vd;
}
var yd, N_;
function b5() {
  if (N_) return yd;
  N_ = 1;
  var e = Cl();
  function t(n, o) {
    var s = this.__data__, a = e(s, n);
    return a < 0 ? (++this.size, s.push([n, o])) : s[a][1] = o, this;
  }
  return yd = t, yd;
}
var wd, P_;
function kl() {
  if (P_) return wd;
  P_ = 1;
  var e = y5(), t = w5(), n = x5(), o = _5(), s = b5();
  function a(u) {
    var l = -1, f = u == null ? 0 : u.length;
    for (this.clear(); ++l < f; ) {
      var d = u[l];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = s, wd = a, wd;
}
var xd, T_;
function S5() {
  if (T_) return xd;
  T_ = 1;
  var e = kl();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return xd = t, xd;
}
var _d, A_;
function E5() {
  if (A_) return _d;
  A_ = 1;
  function e(t) {
    var n = this.__data__, o = n.delete(t);
    return this.size = n.size, o;
  }
  return _d = e, _d;
}
var bd, I_;
function C5() {
  if (I_) return bd;
  I_ = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return bd = e, bd;
}
var Sd, M_;
function k5() {
  if (M_) return Sd;
  M_ = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Sd = e, Sd;
}
var Ed, O_;
function kT() {
  if (O_) return Ed;
  O_ = 1;
  var e = typeof lu == "object" && lu && lu.Object === Object && lu;
  return Ed = e, Ed;
}
var Cd, L_;
function wn() {
  if (L_) return Cd;
  L_ = 1;
  var e = kT(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Cd = n, Cd;
}
var kd, q_;
function gi() {
  if (q_) return kd;
  q_ = 1;
  var e = wn(), t = e.Symbol;
  return kd = t, kd;
}
var Rd, D_;
function R5() {
  if (D_) return Rd;
  D_ = 1;
  var e = gi(), t = Object.prototype, n = t.hasOwnProperty, o = t.toString, s = e ? e.toStringTag : void 0;
  function a(u) {
    var l = n.call(u, s), f = u[s];
    try {
      u[s] = void 0;
      var d = !0;
    } catch {
    }
    var h = o.call(u);
    return d && (l ? u[s] = f : delete u[s]), h;
  }
  return Rd = a, Rd;
}
var Nd, j_;
function N5() {
  if (j_) return Nd;
  j_ = 1;
  var e = Object.prototype, t = e.toString;
  function n(o) {
    return t.call(o);
  }
  return Nd = n, Nd;
}
var Pd, z_;
function co() {
  if (z_) return Pd;
  z_ = 1;
  var e = gi(), t = R5(), n = N5(), o = "[object Null]", s = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function u(l) {
    return l == null ? l === void 0 ? s : o : a && a in Object(l) ? t(l) : n(l);
  }
  return Pd = u, Pd;
}
var Td, F_;
function Zt() {
  if (F_) return Td;
  F_ = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Td = e, Td;
}
var Ad, $_;
function Hs() {
  if ($_) return Ad;
  $_ = 1;
  var e = co(), t = Zt(), n = "[object AsyncFunction]", o = "[object Function]", s = "[object GeneratorFunction]", a = "[object Proxy]";
  function u(l) {
    if (!t(l))
      return !1;
    var f = e(l);
    return f == o || f == s || f == n || f == a;
  }
  return Ad = u, Ad;
}
var Id, B_;
function P5() {
  if (B_) return Id;
  B_ = 1;
  var e = wn(), t = e["__core-js_shared__"];
  return Id = t, Id;
}
var Md, V_;
function T5() {
  if (V_) return Md;
  V_ = 1;
  var e = P5(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function n(o) {
    return !!t && t in o;
  }
  return Md = n, Md;
}
var Od, H_;
function RT() {
  if (H_) return Od;
  H_ = 1;
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
  return Od = n, Od;
}
var Ld, W_;
function A5() {
  if (W_) return Ld;
  W_ = 1;
  var e = Hs(), t = T5(), n = Zt(), o = RT(), s = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, u = Function.prototype, l = Object.prototype, f = u.toString, d = l.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function m(g) {
    if (!n(g) || t(g))
      return !1;
    var w = e(g) ? h : a;
    return w.test(o(g));
  }
  return Ld = m, Ld;
}
var qd, U_;
function I5() {
  if (U_) return qd;
  U_ = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return qd = e, qd;
}
var Dd, G_;
function fo() {
  if (G_) return Dd;
  G_ = 1;
  var e = A5(), t = I5();
  function n(o, s) {
    var a = t(o, s);
    return e(a) ? a : void 0;
  }
  return Dd = n, Dd;
}
var jd, Y_;
function Dy() {
  if (Y_) return jd;
  Y_ = 1;
  var e = fo(), t = wn(), n = e(t, "Map");
  return jd = n, jd;
}
var zd, K_;
function Rl() {
  if (K_) return zd;
  K_ = 1;
  var e = fo(), t = e(Object, "create");
  return zd = t, zd;
}
var Fd, X_;
function M5() {
  if (X_) return Fd;
  X_ = 1;
  var e = Rl();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Fd = t, Fd;
}
var $d, Q_;
function O5() {
  if (Q_) return $d;
  Q_ = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return $d = e, $d;
}
var Bd, Z_;
function L5() {
  if (Z_) return Bd;
  Z_ = 1;
  var e = Rl(), t = "__lodash_hash_undefined__", n = Object.prototype, o = n.hasOwnProperty;
  function s(a) {
    var u = this.__data__;
    if (e) {
      var l = u[a];
      return l === t ? void 0 : l;
    }
    return o.call(u, a) ? u[a] : void 0;
  }
  return Bd = s, Bd;
}
var Vd, J_;
function q5() {
  if (J_) return Vd;
  J_ = 1;
  var e = Rl(), t = Object.prototype, n = t.hasOwnProperty;
  function o(s) {
    var a = this.__data__;
    return e ? a[s] !== void 0 : n.call(a, s);
  }
  return Vd = o, Vd;
}
var Hd, eb;
function D5() {
  if (eb) return Hd;
  eb = 1;
  var e = Rl(), t = "__lodash_hash_undefined__";
  function n(o, s) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && s === void 0 ? t : s, this;
  }
  return Hd = n, Hd;
}
var Wd, tb;
function j5() {
  if (tb) return Wd;
  tb = 1;
  var e = M5(), t = O5(), n = L5(), o = q5(), s = D5();
  function a(u) {
    var l = -1, f = u == null ? 0 : u.length;
    for (this.clear(); ++l < f; ) {
      var d = u[l];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = s, Wd = a, Wd;
}
var Ud, nb;
function z5() {
  if (nb) return Ud;
  nb = 1;
  var e = j5(), t = kl(), n = Dy();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return Ud = o, Ud;
}
var Gd, rb;
function F5() {
  if (rb) return Gd;
  rb = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Gd = e, Gd;
}
var Yd, ob;
function Nl() {
  if (ob) return Yd;
  ob = 1;
  var e = F5();
  function t(n, o) {
    var s = n.__data__;
    return e(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
  }
  return Yd = t, Yd;
}
var Kd, ib;
function $5() {
  if (ib) return Kd;
  ib = 1;
  var e = Nl();
  function t(n) {
    var o = e(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  return Kd = t, Kd;
}
var Xd, sb;
function B5() {
  if (sb) return Xd;
  sb = 1;
  var e = Nl();
  function t(n) {
    return e(this, n).get(n);
  }
  return Xd = t, Xd;
}
var Qd, ab;
function V5() {
  if (ab) return Qd;
  ab = 1;
  var e = Nl();
  function t(n) {
    return e(this, n).has(n);
  }
  return Qd = t, Qd;
}
var Zd, ub;
function H5() {
  if (ub) return Zd;
  ub = 1;
  var e = Nl();
  function t(n, o) {
    var s = e(this, n), a = s.size;
    return s.set(n, o), this.size += s.size == a ? 0 : 1, this;
  }
  return Zd = t, Zd;
}
var Jd, lb;
function jy() {
  if (lb) return Jd;
  lb = 1;
  var e = z5(), t = $5(), n = B5(), o = V5(), s = H5();
  function a(u) {
    var l = -1, f = u == null ? 0 : u.length;
    for (this.clear(); ++l < f; ) {
      var d = u[l];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = s, Jd = a, Jd;
}
var eh, cb;
function W5() {
  if (cb) return eh;
  cb = 1;
  var e = kl(), t = Dy(), n = jy(), o = 200;
  function s(a, u) {
    var l = this.__data__;
    if (l instanceof e) {
      var f = l.__data__;
      if (!t || f.length < o - 1)
        return f.push([a, u]), this.size = ++l.size, this;
      l = this.__data__ = new n(f);
    }
    return l.set(a, u), this.size = l.size, this;
  }
  return eh = s, eh;
}
var th, fb;
function Pl() {
  if (fb) return th;
  fb = 1;
  var e = kl(), t = S5(), n = E5(), o = C5(), s = k5(), a = W5();
  function u(l) {
    var f = this.__data__ = new e(l);
    this.size = f.size;
  }
  return u.prototype.clear = t, u.prototype.delete = n, u.prototype.get = o, u.prototype.has = s, u.prototype.set = a, th = u, th;
}
var nh, db;
function zy() {
  if (db) return nh;
  db = 1;
  function e(t, n) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s && n(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return nh = e, nh;
}
var rh, hb;
function NT() {
  if (hb) return rh;
  hb = 1;
  var e = fo(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return rh = t, rh;
}
var oh, pb;
function Tl() {
  if (pb) return oh;
  pb = 1;
  var e = NT();
  function t(n, o, s) {
    o == "__proto__" && e ? e(n, o, {
      configurable: !0,
      enumerable: !0,
      value: s,
      writable: !0
    }) : n[o] = s;
  }
  return oh = t, oh;
}
var ih, mb;
function Al() {
  if (mb) return ih;
  mb = 1;
  var e = Tl(), t = mi(), n = Object.prototype, o = n.hasOwnProperty;
  function s(a, u, l) {
    var f = a[u];
    (!(o.call(a, u) && t(f, l)) || l === void 0 && !(u in a)) && e(a, u, l);
  }
  return ih = s, ih;
}
var sh, gb;
function Ws() {
  if (gb) return sh;
  gb = 1;
  var e = Al(), t = Tl();
  function n(o, s, a, u) {
    var l = !a;
    a || (a = {});
    for (var f = -1, d = s.length; ++f < d; ) {
      var h = s[f], m = u ? u(a[h], o[h], h, a, o) : void 0;
      m === void 0 && (m = o[h]), l ? t(a, h, m) : e(a, h, m);
    }
    return a;
  }
  return sh = n, sh;
}
var ah, vb;
function U5() {
  if (vb) return ah;
  vb = 1;
  function e(t, n) {
    for (var o = -1, s = Array(t); ++o < t; )
      s[o] = n(o);
    return s;
  }
  return ah = e, ah;
}
var uh, yb;
function Ln() {
  if (yb) return uh;
  yb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return uh = e, uh;
}
var lh, wb;
function G5() {
  if (wb) return lh;
  wb = 1;
  var e = co(), t = Ln(), n = "[object Arguments]";
  function o(s) {
    return t(s) && e(s) == n;
  }
  return lh = o, lh;
}
var ch, xb;
function Us() {
  if (xb) return ch;
  xb = 1;
  var e = G5(), t = Ln(), n = Object.prototype, o = n.hasOwnProperty, s = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(u) {
    return t(u) && o.call(u, "callee") && !s.call(u, "callee");
  };
  return ch = a, ch;
}
var fh, _b;
function rt() {
  if (_b) return fh;
  _b = 1;
  var e = Array.isArray;
  return fh = e, fh;
}
var gs = { exports: {} }, dh, bb;
function Y5() {
  if (bb) return dh;
  bb = 1;
  function e() {
    return !1;
  }
  return dh = e, dh;
}
gs.exports;
var Sb;
function vi() {
  return Sb || (Sb = 1, (function(e, t) {
    var n = wn(), o = Y5(), s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, u = a && a.exports === s, l = u ? n.Buffer : void 0, f = l ? l.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(gs, gs.exports)), gs.exports;
}
var hh, Eb;
function Il() {
  if (Eb) return hh;
  Eb = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(o, s) {
    var a = typeof o;
    return s = s ?? e, !!s && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < s;
  }
  return hh = n, hh;
}
var ph, Cb;
function Fy() {
  if (Cb) return ph;
  Cb = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return ph = t, ph;
}
var mh, kb;
function K5() {
  if (kb) return mh;
  kb = 1;
  var e = co(), t = Fy(), n = Ln(), o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", u = "[object Date]", l = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", m = "[object Object]", g = "[object RegExp]", w = "[object Set]", E = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", S = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", k = "[object Int8Array]", N = "[object Int16Array]", T = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", G = "[object Uint32Array]", B = {};
  B[C] = B[_] = B[k] = B[N] = B[T] = B[A] = B[O] = B[D] = B[G] = !0, B[o] = B[s] = B[x] = B[a] = B[S] = B[u] = B[l] = B[f] = B[d] = B[h] = B[m] = B[g] = B[w] = B[E] = B[y] = !1;
  function V(X) {
    return n(X) && t(X.length) && !!B[e(X)];
  }
  return mh = V, mh;
}
var gh, Rb;
function Ml() {
  if (Rb) return gh;
  Rb = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return gh = e, gh;
}
var vs = { exports: {} };
vs.exports;
var Nb;
function $y() {
  return Nb || (Nb = 1, (function(e, t) {
    var n = kT(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, u = a && n.process, l = (function() {
      try {
        var f = s && s.require && s.require("util").types;
        return f || u && u.binding && u.binding("util");
      } catch {
      }
    })();
    e.exports = l;
  })(vs, vs.exports)), vs.exports;
}
var vh, Pb;
function Gs() {
  if (Pb) return vh;
  Pb = 1;
  var e = K5(), t = Ml(), n = $y(), o = n && n.isTypedArray, s = o ? t(o) : e;
  return vh = s, vh;
}
var yh, Tb;
function PT() {
  if (Tb) return yh;
  Tb = 1;
  var e = U5(), t = Us(), n = rt(), o = vi(), s = Il(), a = Gs(), u = Object.prototype, l = u.hasOwnProperty;
  function f(d, h) {
    var m = n(d), g = !m && t(d), w = !m && !g && o(d), E = !m && !g && !w && a(d), y = m || g || w || E, x = y ? e(d.length, String) : [], S = x.length;
    for (var C in d)
      (h || l.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      w && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      s(C, S))) && x.push(C);
    return x;
  }
  return yh = f, yh;
}
var wh, Ab;
function Ol() {
  if (Ab) return wh;
  Ab = 1;
  var e = Object.prototype;
  function t(n) {
    var o = n && n.constructor, s = typeof o == "function" && o.prototype || e;
    return n === s;
  }
  return wh = t, wh;
}
var xh, Ib;
function TT() {
  if (Ib) return xh;
  Ib = 1;
  function e(t, n) {
    return function(o) {
      return t(n(o));
    };
  }
  return xh = e, xh;
}
var _h, Mb;
function X5() {
  if (Mb) return _h;
  Mb = 1;
  var e = TT(), t = e(Object.keys, Object);
  return _h = t, _h;
}
var bh, Ob;
function By() {
  if (Ob) return bh;
  Ob = 1;
  var e = Ol(), t = X5(), n = Object.prototype, o = n.hasOwnProperty;
  function s(a) {
    if (!e(a))
      return t(a);
    var u = [];
    for (var l in Object(a))
      o.call(a, l) && l != "constructor" && u.push(l);
    return u;
  }
  return bh = s, bh;
}
var Sh, Lb;
function Zn() {
  if (Lb) return Sh;
  Lb = 1;
  var e = Hs(), t = Fy();
  function n(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Sh = n, Sh;
}
var Eh, qb;
function Mr() {
  if (qb) return Eh;
  qb = 1;
  var e = PT(), t = By(), n = Zn();
  function o(s) {
    return n(s) ? e(s) : t(s);
  }
  return Eh = o, Eh;
}
var Ch, Db;
function Q5() {
  if (Db) return Ch;
  Db = 1;
  var e = Ws(), t = Mr();
  function n(o, s) {
    return o && e(s, t(s), o);
  }
  return Ch = n, Ch;
}
var kh, jb;
function Z5() {
  if (jb) return kh;
  jb = 1;
  function e(t) {
    var n = [];
    if (t != null)
      for (var o in Object(t))
        n.push(o);
    return n;
  }
  return kh = e, kh;
}
var Rh, zb;
function J5() {
  if (zb) return Rh;
  zb = 1;
  var e = Zt(), t = Ol(), n = Z5(), o = Object.prototype, s = o.hasOwnProperty;
  function a(u) {
    if (!e(u))
      return n(u);
    var l = t(u), f = [];
    for (var d in u)
      d == "constructor" && (l || !s.call(u, d)) || f.push(d);
    return f;
  }
  return Rh = a, Rh;
}
var Nh, Fb;
function ho() {
  if (Fb) return Nh;
  Fb = 1;
  var e = PT(), t = J5(), n = Zn();
  function o(s) {
    return n(s) ? e(s, !0) : t(s);
  }
  return Nh = o, Nh;
}
var Ph, $b;
function eV() {
  if ($b) return Ph;
  $b = 1;
  var e = Ws(), t = ho();
  function n(o, s) {
    return o && e(s, t(s), o);
  }
  return Ph = n, Ph;
}
var ys = { exports: {} };
ys.exports;
var Bb;
function AT() {
  return Bb || (Bb = 1, (function(e, t) {
    var n = wn(), o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, u = a ? n.Buffer : void 0, l = u ? u.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var m = d.length, g = l ? l(m) : new d.constructor(m);
      return d.copy(g), g;
    }
    e.exports = f;
  })(ys, ys.exports)), ys.exports;
}
var Th, Vb;
function IT() {
  if (Vb) return Th;
  Vb = 1;
  function e(t, n) {
    var o = -1, s = t.length;
    for (n || (n = Array(s)); ++o < s; )
      n[o] = t[o];
    return n;
  }
  return Th = e, Th;
}
var Ah, Hb;
function MT() {
  if (Hb) return Ah;
  Hb = 1;
  function e(t, n) {
    for (var o = -1, s = t == null ? 0 : t.length, a = 0, u = []; ++o < s; ) {
      var l = t[o];
      n(l, o, t) && (u[a++] = l);
    }
    return u;
  }
  return Ah = e, Ah;
}
var Ih, Wb;
function OT() {
  if (Wb) return Ih;
  Wb = 1;
  function e() {
    return [];
  }
  return Ih = e, Ih;
}
var Mh, Ub;
function Vy() {
  if (Ub) return Mh;
  Ub = 1;
  var e = MT(), t = OT(), n = Object.prototype, o = n.propertyIsEnumerable, s = Object.getOwnPropertySymbols, a = s ? function(u) {
    return u == null ? [] : (u = Object(u), e(s(u), function(l) {
      return o.call(u, l);
    }));
  } : t;
  return Mh = a, Mh;
}
var Oh, Gb;
function tV() {
  if (Gb) return Oh;
  Gb = 1;
  var e = Ws(), t = Vy();
  function n(o, s) {
    return e(o, t(o), s);
  }
  return Oh = n, Oh;
}
var Lh, Yb;
function Hy() {
  if (Yb) return Lh;
  Yb = 1;
  function e(t, n) {
    for (var o = -1, s = n.length, a = t.length; ++o < s; )
      t[a + o] = n[o];
    return t;
  }
  return Lh = e, Lh;
}
var qh, Kb;
function Ll() {
  if (Kb) return qh;
  Kb = 1;
  var e = TT(), t = e(Object.getPrototypeOf, Object);
  return qh = t, qh;
}
var Dh, Xb;
function LT() {
  if (Xb) return Dh;
  Xb = 1;
  var e = Hy(), t = Ll(), n = Vy(), o = OT(), s = Object.getOwnPropertySymbols, a = s ? function(u) {
    for (var l = []; u; )
      e(l, n(u)), u = t(u);
    return l;
  } : o;
  return Dh = a, Dh;
}
var jh, Qb;
function nV() {
  if (Qb) return jh;
  Qb = 1;
  var e = Ws(), t = LT();
  function n(o, s) {
    return e(o, t(o), s);
  }
  return jh = n, jh;
}
var zh, Zb;
function qT() {
  if (Zb) return zh;
  Zb = 1;
  var e = Hy(), t = rt();
  function n(o, s, a) {
    var u = s(o);
    return t(o) ? u : e(u, a(o));
  }
  return zh = n, zh;
}
var Fh, Jb;
function DT() {
  if (Jb) return Fh;
  Jb = 1;
  var e = qT(), t = Vy(), n = Mr();
  function o(s) {
    return e(s, n, t);
  }
  return Fh = o, Fh;
}
var $h, eS;
function rV() {
  if (eS) return $h;
  eS = 1;
  var e = qT(), t = LT(), n = ho();
  function o(s) {
    return e(s, n, t);
  }
  return $h = o, $h;
}
var Bh, tS;
function oV() {
  if (tS) return Bh;
  tS = 1;
  var e = fo(), t = wn(), n = e(t, "DataView");
  return Bh = n, Bh;
}
var Vh, nS;
function iV() {
  if (nS) return Vh;
  nS = 1;
  var e = fo(), t = wn(), n = e(t, "Promise");
  return Vh = n, Vh;
}
var Hh, rS;
function jT() {
  if (rS) return Hh;
  rS = 1;
  var e = fo(), t = wn(), n = e(t, "Set");
  return Hh = n, Hh;
}
var Wh, oS;
function sV() {
  if (oS) return Wh;
  oS = 1;
  var e = fo(), t = wn(), n = e(t, "WeakMap");
  return Wh = n, Wh;
}
var Uh, iS;
function yi() {
  if (iS) return Uh;
  iS = 1;
  var e = oV(), t = Dy(), n = iV(), o = jT(), s = sV(), a = co(), u = RT(), l = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", m = "[object WeakMap]", g = "[object DataView]", w = u(e), E = u(t), y = u(n), x = u(o), S = u(s), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != g || t && C(new t()) != l || n && C(n.resolve()) != d || o && C(new o()) != h || s && C(new s()) != m) && (C = function(_) {
    var k = a(_), N = k == f ? _.constructor : void 0, T = N ? u(N) : "";
    if (T)
      switch (T) {
        case w:
          return g;
        case E:
          return l;
        case y:
          return d;
        case x:
          return h;
        case S:
          return m;
      }
    return k;
  }), Uh = C, Uh;
}
var Gh, sS;
function aV() {
  if (sS) return Gh;
  sS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o) {
    var s = o.length, a = new o.constructor(s);
    return s && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return Gh = n, Gh;
}
var Yh, aS;
function zT() {
  if (aS) return Yh;
  aS = 1;
  var e = wn(), t = e.Uint8Array;
  return Yh = t, Yh;
}
var Kh, uS;
function Wy() {
  if (uS) return Kh;
  uS = 1;
  var e = zT();
  function t(n) {
    var o = new n.constructor(n.byteLength);
    return new e(o).set(new e(n)), o;
  }
  return Kh = t, Kh;
}
var Xh, lS;
function uV() {
  if (lS) return Xh;
  lS = 1;
  var e = Wy();
  function t(n, o) {
    var s = o ? e(n.buffer) : n.buffer;
    return new n.constructor(s, n.byteOffset, n.byteLength);
  }
  return Xh = t, Xh;
}
var Qh, cS;
function lV() {
  if (cS) return Qh;
  cS = 1;
  var e = /\w*$/;
  function t(n) {
    var o = new n.constructor(n.source, e.exec(n));
    return o.lastIndex = n.lastIndex, o;
  }
  return Qh = t, Qh;
}
var Zh, fS;
function cV() {
  if (fS) return Zh;
  fS = 1;
  var e = gi(), t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function o(s) {
    return n ? Object(n.call(s)) : {};
  }
  return Zh = o, Zh;
}
var Jh, dS;
function FT() {
  if (dS) return Jh;
  dS = 1;
  var e = Wy();
  function t(n, o) {
    var s = o ? e(n.buffer) : n.buffer;
    return new n.constructor(s, n.byteOffset, n.length);
  }
  return Jh = t, Jh;
}
var ep, hS;
function fV() {
  if (hS) return ep;
  hS = 1;
  var e = Wy(), t = uV(), n = lV(), o = cV(), s = FT(), a = "[object Boolean]", u = "[object Date]", l = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", m = "[object String]", g = "[object Symbol]", w = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", k = "[object Uint8Array]", N = "[object Uint8ClampedArray]", T = "[object Uint16Array]", A = "[object Uint32Array]";
  function O(D, G, B) {
    var V = D.constructor;
    switch (G) {
      case w:
        return e(D);
      case a:
      case u:
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
      case l:
        return new V();
      case f:
      case m:
        return new V(D);
      case d:
        return n(D);
      case h:
        return new V();
      case g:
        return o(D);
    }
  }
  return ep = O, ep;
}
var tp, pS;
function $T() {
  if (pS) return tp;
  pS = 1;
  var e = Zt(), t = Object.create, n = /* @__PURE__ */ (function() {
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
  return tp = n, tp;
}
var np, mS;
function BT() {
  if (mS) return np;
  mS = 1;
  var e = $T(), t = Ll(), n = Ol();
  function o(s) {
    return typeof s.constructor == "function" && !n(s) ? e(t(s)) : {};
  }
  return np = o, np;
}
var rp, gS;
function dV() {
  if (gS) return rp;
  gS = 1;
  var e = yi(), t = Ln(), n = "[object Map]";
  function o(s) {
    return t(s) && e(s) == n;
  }
  return rp = o, rp;
}
var op, vS;
function hV() {
  if (vS) return op;
  vS = 1;
  var e = dV(), t = Ml(), n = $y(), o = n && n.isMap, s = o ? t(o) : e;
  return op = s, op;
}
var ip, yS;
function pV() {
  if (yS) return ip;
  yS = 1;
  var e = yi(), t = Ln(), n = "[object Set]";
  function o(s) {
    return t(s) && e(s) == n;
  }
  return ip = o, ip;
}
var sp, wS;
function mV() {
  if (wS) return sp;
  wS = 1;
  var e = pV(), t = Ml(), n = $y(), o = n && n.isSet, s = o ? t(o) : e;
  return sp = s, sp;
}
var ap, xS;
function VT() {
  if (xS) return ap;
  xS = 1;
  var e = Pl(), t = zy(), n = Al(), o = Q5(), s = eV(), a = AT(), u = IT(), l = tV(), f = nV(), d = DT(), h = rV(), m = yi(), g = aV(), w = fV(), E = BT(), y = rt(), x = vi(), S = hV(), C = Zt(), _ = mV(), k = Mr(), N = ho(), T = 1, A = 2, O = 4, D = "[object Arguments]", G = "[object Array]", B = "[object Boolean]", V = "[object Date]", X = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", $ = "[object Map]", Y = "[object Number]", I = "[object Object]", j = "[object RegExp]", Q = "[object Set]", q = "[object String]", W = "[object Symbol]", ie = "[object WeakMap]", F = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", K = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", _e = "[object Uint32Array]", ge = {};
  ge[D] = ge[G] = ge[F] = ge[Z] = ge[B] = ge[V] = ge[ee] = ge[K] = ge[te] = ge[se] = ge[ae] = ge[$] = ge[Y] = ge[I] = ge[j] = ge[Q] = ge[q] = ge[W] = ge[ce] = ge[de] = ge[pe] = ge[_e] = !0, ge[X] = ge[L] = ge[ie] = !1;
  function Ne(Ee, Ze, He, Ft, ht, at) {
    var We, en = Ze & T, $t = Ze & A, tn = Ze & O;
    if (He && (We = ht ? He(Ee, Ft, ht, at) : He(Ee)), We !== void 0)
      return We;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (We = g(Ee), !en)
        return u(Ee, We);
    } else {
      var _t = m(Ee), Or = _t == L || _t == H;
      if (x(Ee))
        return a(Ee, en);
      if (_t == I || _t == D || Or && !ht) {
        if (We = $t || Or ? {} : E(Ee), !en)
          return $t ? f(Ee, s(We, Ee)) : l(Ee, o(We, Ee));
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
      We.add(Ne(Tt, Ze, He, Tt, Ee, at));
    }) : S(Ee) && Ee.forEach(function(Tt, Ht) {
      We.set(Ht, Ne(Tt, Ze, He, Ht, Ee, at));
    });
    var qn = tn ? $t ? h : d : $t ? N : k, mo = Bt ? void 0 : qn(Ee);
    return t(mo || Ee, function(Tt, Ht) {
      mo && (Ht = Tt, Tt = Ee[Ht]), n(We, Ht, Ne(Tt, Ze, He, Ht, Ee, at));
    }), We;
  }
  return ap = Ne, ap;
}
var up, _S;
function gV() {
  if (_S) return up;
  _S = 1;
  var e = VT(), t = 4;
  function n(o) {
    return e(o, t);
  }
  return up = n, up;
}
var lp, bS;
function Uy() {
  if (bS) return lp;
  bS = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return lp = e, lp;
}
var cp, SS;
function vV() {
  if (SS) return cp;
  SS = 1;
  function e(t) {
    return function(n, o, s) {
      for (var a = -1, u = Object(n), l = s(n), f = l.length; f--; ) {
        var d = l[t ? f : ++a];
        if (o(u[d], d, u) === !1)
          break;
      }
      return n;
    };
  }
  return cp = e, cp;
}
var fp, ES;
function Gy() {
  if (ES) return fp;
  ES = 1;
  var e = vV(), t = e();
  return fp = t, fp;
}
var dp, CS;
function Yy() {
  if (CS) return dp;
  CS = 1;
  var e = Gy(), t = Mr();
  function n(o, s) {
    return o && e(o, s, t);
  }
  return dp = n, dp;
}
var hp, kS;
function yV() {
  if (kS) return hp;
  kS = 1;
  var e = Zn();
  function t(n, o) {
    return function(s, a) {
      if (s == null)
        return s;
      if (!e(s))
        return n(s, a);
      for (var u = s.length, l = o ? u : -1, f = Object(s); (o ? l-- : ++l < u) && a(f[l], l, f) !== !1; )
        ;
      return s;
    };
  }
  return hp = t, hp;
}
var pp, RS;
function ql() {
  if (RS) return pp;
  RS = 1;
  var e = Yy(), t = yV(), n = t(e);
  return pp = n, pp;
}
var mp, NS;
function po() {
  if (NS) return mp;
  NS = 1;
  function e(t) {
    return t;
  }
  return mp = e, mp;
}
var gp, PS;
function HT() {
  if (PS) return gp;
  PS = 1;
  var e = po();
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return gp = t, gp;
}
var vp, TS;
function WT() {
  if (TS) return vp;
  TS = 1;
  var e = zy(), t = ql(), n = HT(), o = rt();
  function s(a, u) {
    var l = o(a) ? e : t;
    return l(a, n(u));
  }
  return vp = s, vp;
}
var yp, AS;
function UT() {
  return AS || (AS = 1, yp = WT()), yp;
}
var wp, IS;
function wV() {
  if (IS) return wp;
  IS = 1;
  var e = ql();
  function t(n, o) {
    var s = [];
    return e(n, function(a, u, l) {
      o(a, u, l) && s.push(a);
    }), s;
  }
  return wp = t, wp;
}
var xp, MS;
function xV() {
  if (MS) return xp;
  MS = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return xp = t, xp;
}
var _p, OS;
function _V() {
  if (OS) return _p;
  OS = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return _p = e, _p;
}
var bp, LS;
function GT() {
  if (LS) return bp;
  LS = 1;
  var e = jy(), t = xV(), n = _V();
  function o(s) {
    var a = -1, u = s == null ? 0 : s.length;
    for (this.__data__ = new e(); ++a < u; )
      this.add(s[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = n, bp = o, bp;
}
var Sp, qS;
function bV() {
  if (qS) return Sp;
  qS = 1;
  function e(t, n) {
    for (var o = -1, s = t == null ? 0 : t.length; ++o < s; )
      if (n(t[o], o, t))
        return !0;
    return !1;
  }
  return Sp = e, Sp;
}
var Ep, DS;
function YT() {
  if (DS) return Ep;
  DS = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Ep = e, Ep;
}
var Cp, jS;
function KT() {
  if (jS) return Cp;
  jS = 1;
  var e = GT(), t = bV(), n = YT(), o = 1, s = 2;
  function a(u, l, f, d, h, m) {
    var g = f & o, w = u.length, E = l.length;
    if (w != E && !(g && E > w))
      return !1;
    var y = m.get(u), x = m.get(l);
    if (y && x)
      return y == l && x == u;
    var S = -1, C = !0, _ = f & s ? new e() : void 0;
    for (m.set(u, l), m.set(l, u); ++S < w; ) {
      var k = u[S], N = l[S];
      if (d)
        var T = g ? d(N, k, S, l, u, m) : d(k, N, S, u, l, m);
      if (T !== void 0) {
        if (T)
          continue;
        C = !1;
        break;
      }
      if (_) {
        if (!t(l, function(A, O) {
          if (!n(_, O) && (k === A || h(k, A, f, d, m)))
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
    return m.delete(u), m.delete(l), C;
  }
  return Cp = a, Cp;
}
var kp, zS;
function SV() {
  if (zS) return kp;
  zS = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(s, a) {
      o[++n] = [a, s];
    }), o;
  }
  return kp = e, kp;
}
var Rp, FS;
function Ky() {
  if (FS) return Rp;
  FS = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(s) {
      o[++n] = s;
    }), o;
  }
  return Rp = e, Rp;
}
var Np, $S;
function EV() {
  if ($S) return Np;
  $S = 1;
  var e = gi(), t = zT(), n = mi(), o = KT(), s = SV(), a = Ky(), u = 1, l = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", m = "[object Map]", g = "[object Number]", w = "[object RegExp]", E = "[object Set]", y = "[object String]", x = "[object Symbol]", S = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, k = _ ? _.valueOf : void 0;
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
      case g:
        return n(+T, +A);
      case h:
        return T.name == A.name && T.message == A.message;
      case w:
      case y:
        return T == A + "";
      case m:
        var X = s;
      case E:
        var L = D & u;
        if (X || (X = a), T.size != A.size && !L)
          return !1;
        var H = V.get(T);
        if (H)
          return H == A;
        D |= l, V.set(T, A);
        var $ = o(X(T), X(A), D, G, B, V);
        return V.delete(T), $;
      case x:
        if (k)
          return k.call(T) == k.call(A);
    }
    return !1;
  }
  return Np = N, Np;
}
var Pp, BS;
function CV() {
  if (BS) return Pp;
  BS = 1;
  var e = DT(), t = 1, n = Object.prototype, o = n.hasOwnProperty;
  function s(a, u, l, f, d, h) {
    var m = l & t, g = e(a), w = g.length, E = e(u), y = E.length;
    if (w != y && !m)
      return !1;
    for (var x = w; x--; ) {
      var S = g[x];
      if (!(m ? S in u : o.call(u, S)))
        return !1;
    }
    var C = h.get(a), _ = h.get(u);
    if (C && _)
      return C == u && _ == a;
    var k = !0;
    h.set(a, u), h.set(u, a);
    for (var N = m; ++x < w; ) {
      S = g[x];
      var T = a[S], A = u[S];
      if (f)
        var O = m ? f(A, T, S, u, a, h) : f(T, A, S, a, u, h);
      if (!(O === void 0 ? T === A || d(T, A, l, f, h) : O)) {
        k = !1;
        break;
      }
      N || (N = S == "constructor");
    }
    if (k && !N) {
      var D = a.constructor, G = u.constructor;
      D != G && "constructor" in a && "constructor" in u && !(typeof D == "function" && D instanceof D && typeof G == "function" && G instanceof G) && (k = !1);
    }
    return h.delete(a), h.delete(u), k;
  }
  return Pp = s, Pp;
}
var Tp, VS;
function kV() {
  if (VS) return Tp;
  VS = 1;
  var e = Pl(), t = KT(), n = EV(), o = CV(), s = yi(), a = rt(), u = vi(), l = Gs(), f = 1, d = "[object Arguments]", h = "[object Array]", m = "[object Object]", g = Object.prototype, w = g.hasOwnProperty;
  function E(y, x, S, C, _, k) {
    var N = a(y), T = a(x), A = N ? h : s(y), O = T ? h : s(x);
    A = A == d ? m : A, O = O == d ? m : O;
    var D = A == m, G = O == m, B = A == O;
    if (B && u(y)) {
      if (!u(x))
        return !1;
      N = !0, D = !1;
    }
    if (B && !D)
      return k || (k = new e()), N || l(y) ? t(y, x, S, C, _, k) : n(y, x, A, S, C, _, k);
    if (!(S & f)) {
      var V = D && w.call(y, "__wrapped__"), X = G && w.call(x, "__wrapped__");
      if (V || X) {
        var L = V ? y.value() : y, H = X ? x.value() : x;
        return k || (k = new e()), _(L, H, S, C, k);
      }
    }
    return B ? (k || (k = new e()), o(y, x, S, C, _, k)) : !1;
  }
  return Tp = E, Tp;
}
var Ap, HS;
function XT() {
  if (HS) return Ap;
  HS = 1;
  var e = kV(), t = Ln();
  function n(o, s, a, u, l) {
    return o === s ? !0 : o == null || s == null || !t(o) && !t(s) ? o !== o && s !== s : e(o, s, a, u, n, l);
  }
  return Ap = n, Ap;
}
var Ip, WS;
function RV() {
  if (WS) return Ip;
  WS = 1;
  var e = Pl(), t = XT(), n = 1, o = 2;
  function s(a, u, l, f) {
    var d = l.length, h = d, m = !f;
    if (a == null)
      return !h;
    for (a = Object(a); d--; ) {
      var g = l[d];
      if (m && g[2] ? g[1] !== a[g[0]] : !(g[0] in a))
        return !1;
    }
    for (; ++d < h; ) {
      g = l[d];
      var w = g[0], E = a[w], y = g[1];
      if (m && g[2]) {
        if (E === void 0 && !(w in a))
          return !1;
      } else {
        var x = new e();
        if (f)
          var S = f(E, y, w, a, u, x);
        if (!(S === void 0 ? t(y, E, n | o, f, x) : S))
          return !1;
      }
    }
    return !0;
  }
  return Ip = s, Ip;
}
var Mp, US;
function QT() {
  if (US) return Mp;
  US = 1;
  var e = Zt();
  function t(n) {
    return n === n && !e(n);
  }
  return Mp = t, Mp;
}
var Op, GS;
function NV() {
  if (GS) return Op;
  GS = 1;
  var e = QT(), t = Mr();
  function n(o) {
    for (var s = t(o), a = s.length; a--; ) {
      var u = s[a], l = o[u];
      s[a] = [u, l, e(l)];
    }
    return s;
  }
  return Op = n, Op;
}
var Lp, YS;
function ZT() {
  if (YS) return Lp;
  YS = 1;
  function e(t, n) {
    return function(o) {
      return o == null ? !1 : o[t] === n && (n !== void 0 || t in Object(o));
    };
  }
  return Lp = e, Lp;
}
var qp, KS;
function PV() {
  if (KS) return qp;
  KS = 1;
  var e = RV(), t = NV(), n = ZT();
  function o(s) {
    var a = t(s);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(u) {
      return u === s || e(u, s, a);
    };
  }
  return qp = o, qp;
}
var Dp, XS;
function wi() {
  if (XS) return Dp;
  XS = 1;
  var e = co(), t = Ln(), n = "[object Symbol]";
  function o(s) {
    return typeof s == "symbol" || t(s) && e(s) == n;
  }
  return Dp = o, Dp;
}
var jp, QS;
function Xy() {
  if (QS) return jp;
  QS = 1;
  var e = rt(), t = wi(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function s(a, u) {
    if (e(a))
      return !1;
    var l = typeof a;
    return l == "number" || l == "symbol" || l == "boolean" || a == null || t(a) ? !0 : o.test(a) || !n.test(a) || u != null && a in Object(u);
  }
  return jp = s, jp;
}
var zp, ZS;
function TV() {
  if (ZS) return zp;
  ZS = 1;
  var e = jy(), t = "Expected a function";
  function n(o, s) {
    if (typeof o != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var a = function() {
      var u = arguments, l = s ? s.apply(this, u) : u[0], f = a.cache;
      if (f.has(l))
        return f.get(l);
      var d = o.apply(this, u);
      return a.cache = f.set(l, d) || f, d;
    };
    return a.cache = new (n.Cache || e)(), a;
  }
  return n.Cache = e, zp = n, zp;
}
var Fp, JS;
function AV() {
  if (JS) return Fp;
  JS = 1;
  var e = TV(), t = 500;
  function n(o) {
    var s = e(o, function(u) {
      return a.size === t && a.clear(), u;
    }), a = s.cache;
    return s;
  }
  return Fp = n, Fp;
}
var $p, eE;
function IV() {
  if (eE) return $p;
  eE = 1;
  var e = AV(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, o = e(function(s) {
    var a = [];
    return s.charCodeAt(0) === 46 && a.push(""), s.replace(t, function(u, l, f, d) {
      a.push(f ? d.replace(n, "$1") : l || u);
    }), a;
  });
  return $p = o, $p;
}
var Bp, tE;
function Dl() {
  if (tE) return Bp;
  tE = 1;
  function e(t, n) {
    for (var o = -1, s = t == null ? 0 : t.length, a = Array(s); ++o < s; )
      a[o] = n(t[o], o, t);
    return a;
  }
  return Bp = e, Bp;
}
var Vp, nE;
function MV() {
  if (nE) return Vp;
  nE = 1;
  var e = gi(), t = Dl(), n = rt(), o = wi(), s = e ? e.prototype : void 0, a = s ? s.toString : void 0;
  function u(l) {
    if (typeof l == "string")
      return l;
    if (n(l))
      return t(l, u) + "";
    if (o(l))
      return a ? a.call(l) : "";
    var f = l + "";
    return f == "0" && 1 / l == -1 / 0 ? "-0" : f;
  }
  return Vp = u, Vp;
}
var Hp, rE;
function JT() {
  if (rE) return Hp;
  rE = 1;
  var e = MV();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return Hp = t, Hp;
}
var Wp, oE;
function jl() {
  if (oE) return Wp;
  oE = 1;
  var e = rt(), t = Xy(), n = IV(), o = JT();
  function s(a, u) {
    return e(a) ? a : t(a, u) ? [a] : n(o(a));
  }
  return Wp = s, Wp;
}
var Up, iE;
function Ys() {
  if (iE) return Up;
  iE = 1;
  var e = wi();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var o = n + "";
    return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
  }
  return Up = t, Up;
}
var Gp, sE;
function zl() {
  if (sE) return Gp;
  sE = 1;
  var e = jl(), t = Ys();
  function n(o, s) {
    s = e(s, o);
    for (var a = 0, u = s.length; o != null && a < u; )
      o = o[t(s[a++])];
    return a && a == u ? o : void 0;
  }
  return Gp = n, Gp;
}
var Yp, aE;
function OV() {
  if (aE) return Yp;
  aE = 1;
  var e = zl();
  function t(n, o, s) {
    var a = n == null ? void 0 : e(n, o);
    return a === void 0 ? s : a;
  }
  return Yp = t, Yp;
}
var Kp, uE;
function LV() {
  if (uE) return Kp;
  uE = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Kp = e, Kp;
}
var Xp, lE;
function eA() {
  if (lE) return Xp;
  lE = 1;
  var e = jl(), t = Us(), n = rt(), o = Il(), s = Fy(), a = Ys();
  function u(l, f, d) {
    f = e(f, l);
    for (var h = -1, m = f.length, g = !1; ++h < m; ) {
      var w = a(f[h]);
      if (!(g = l != null && d(l, w)))
        break;
      l = l[w];
    }
    return g || ++h != m ? g : (m = l == null ? 0 : l.length, !!m && s(m) && o(w, m) && (n(l) || t(l)));
  }
  return Xp = u, Xp;
}
var Qp, cE;
function tA() {
  if (cE) return Qp;
  cE = 1;
  var e = LV(), t = eA();
  function n(o, s) {
    return o != null && t(o, s, e);
  }
  return Qp = n, Qp;
}
var Zp, fE;
function qV() {
  if (fE) return Zp;
  fE = 1;
  var e = XT(), t = OV(), n = tA(), o = Xy(), s = QT(), a = ZT(), u = Ys(), l = 1, f = 2;
  function d(h, m) {
    return o(h) && s(m) ? a(u(h), m) : function(g) {
      var w = t(g, h);
      return w === void 0 && w === m ? n(g, h) : e(m, w, l | f);
    };
  }
  return Zp = d, Zp;
}
var Jp, dE;
function nA() {
  if (dE) return Jp;
  dE = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return Jp = e, Jp;
}
var em, hE;
function DV() {
  if (hE) return em;
  hE = 1;
  var e = zl();
  function t(n) {
    return function(o) {
      return e(o, n);
    };
  }
  return em = t, em;
}
var tm, pE;
function jV() {
  if (pE) return tm;
  pE = 1;
  var e = nA(), t = DV(), n = Xy(), o = Ys();
  function s(a) {
    return n(a) ? e(o(a)) : t(a);
  }
  return tm = s, tm;
}
var nm, mE;
function Jn() {
  if (mE) return nm;
  mE = 1;
  var e = PV(), t = qV(), n = po(), o = rt(), s = jV();
  function a(u) {
    return typeof u == "function" ? u : u == null ? n : typeof u == "object" ? o(u) ? t(u[0], u[1]) : e(u) : s(u);
  }
  return nm = a, nm;
}
var rm, gE;
function rA() {
  if (gE) return rm;
  gE = 1;
  var e = MT(), t = wV(), n = Jn(), o = rt();
  function s(a, u) {
    var l = o(a) ? e : t;
    return l(a, n(u, 3));
  }
  return rm = s, rm;
}
var om, vE;
function zV() {
  if (vE) return om;
  vE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o, s) {
    return o != null && t.call(o, s);
  }
  return om = n, om;
}
var im, yE;
function oA() {
  if (yE) return im;
  yE = 1;
  var e = zV(), t = eA();
  function n(o, s) {
    return o != null && t(o, s, e);
  }
  return im = n, im;
}
var sm, wE;
function FV() {
  if (wE) return sm;
  wE = 1;
  var e = By(), t = yi(), n = Us(), o = rt(), s = Zn(), a = vi(), u = Ol(), l = Gs(), f = "[object Map]", d = "[object Set]", h = Object.prototype, m = h.hasOwnProperty;
  function g(w) {
    if (w == null)
      return !0;
    if (s(w) && (o(w) || typeof w == "string" || typeof w.splice == "function" || a(w) || l(w) || n(w)))
      return !w.length;
    var E = t(w);
    if (E == f || E == d)
      return !w.size;
    if (u(w))
      return !e(w).length;
    for (var y in w)
      if (m.call(w, y))
        return !1;
    return !0;
  }
  return sm = g, sm;
}
var am, xE;
function iA() {
  if (xE) return am;
  xE = 1;
  function e(t) {
    return t === void 0;
  }
  return am = e, am;
}
var um, _E;
function sA() {
  if (_E) return um;
  _E = 1;
  var e = ql(), t = Zn();
  function n(o, s) {
    var a = -1, u = t(o) ? Array(o.length) : [];
    return e(o, function(l, f, d) {
      u[++a] = s(l, f, d);
    }), u;
  }
  return um = n, um;
}
var lm, bE;
function aA() {
  if (bE) return lm;
  bE = 1;
  var e = Dl(), t = Jn(), n = sA(), o = rt();
  function s(a, u) {
    var l = o(a) ? e : n;
    return l(a, t(u, 3));
  }
  return lm = s, lm;
}
var cm, SE;
function $V() {
  if (SE) return cm;
  SE = 1;
  function e(t, n, o, s) {
    var a = -1, u = t == null ? 0 : t.length;
    for (s && u && (o = t[++a]); ++a < u; )
      o = n(o, t[a], a, t);
    return o;
  }
  return cm = e, cm;
}
var fm, EE;
function BV() {
  if (EE) return fm;
  EE = 1;
  function e(t, n, o, s, a) {
    return a(t, function(u, l, f) {
      o = s ? (s = !1, u) : n(o, u, l, f);
    }), o;
  }
  return fm = e, fm;
}
var dm, CE;
function uA() {
  if (CE) return dm;
  CE = 1;
  var e = $V(), t = ql(), n = Jn(), o = BV(), s = rt();
  function a(u, l, f) {
    var d = s(u) ? e : o, h = arguments.length < 3;
    return d(u, n(l, 4), f, h, t);
  }
  return dm = a, dm;
}
var hm, kE;
function VV() {
  if (kE) return hm;
  kE = 1;
  var e = co(), t = rt(), n = Ln(), o = "[object String]";
  function s(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == o;
  }
  return hm = s, hm;
}
var pm, RE;
function HV() {
  if (RE) return pm;
  RE = 1;
  var e = nA(), t = e("length");
  return pm = t, pm;
}
var mm, NE;
function WV() {
  if (NE) return mm;
  NE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + n + o, a = "\\ufe0e\\ufe0f", u = "\\u200d", l = RegExp("[" + u + e + s + a + "]");
  function f(d) {
    return l.test(d);
  }
  return mm = f, mm;
}
var gm, PE;
function UV() {
  if (PE) return gm;
  PE = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", s = t + n + o, a = "\\ufe0e\\ufe0f", u = "[" + e + "]", l = "[" + s + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + l + "|" + f + ")", h = "[^" + e + "]", m = "(?:\\ud83c[\\udde6-\\uddff]){2}", g = "[\\ud800-\\udbff][\\udc00-\\udfff]", w = "\\u200d", E = d + "?", y = "[" + a + "]?", x = "(?:" + w + "(?:" + [h, m, g].join("|") + ")" + y + E + ")*", S = y + E + x, C = "(?:" + [h + l + "?", l, m, g, u].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + S, "g");
  function k(N) {
    for (var T = _.lastIndex = 0; _.test(N); )
      ++T;
    return T;
  }
  return gm = k, gm;
}
var vm, TE;
function GV() {
  if (TE) return vm;
  TE = 1;
  var e = HV(), t = WV(), n = UV();
  function o(s) {
    return t(s) ? n(s) : e(s);
  }
  return vm = o, vm;
}
var ym, AE;
function YV() {
  if (AE) return ym;
  AE = 1;
  var e = By(), t = yi(), n = Zn(), o = VV(), s = GV(), a = "[object Map]", u = "[object Set]";
  function l(f) {
    if (f == null)
      return 0;
    if (n(f))
      return o(f) ? s(f) : f.length;
    var d = t(f);
    return d == a || d == u ? f.size : e(f).length;
  }
  return ym = l, ym;
}
var wm, IE;
function KV() {
  if (IE) return wm;
  IE = 1;
  var e = zy(), t = $T(), n = Yy(), o = Jn(), s = Ll(), a = rt(), u = vi(), l = Hs(), f = Zt(), d = Gs();
  function h(m, g, w) {
    var E = a(m), y = E || u(m) || d(m);
    if (g = o(g, 4), w == null) {
      var x = m && m.constructor;
      y ? w = E ? new x() : [] : f(m) ? w = l(x) ? t(s(m)) : {} : w = {};
    }
    return (y ? e : n)(m, function(S, C, _) {
      return g(w, S, C, _);
    }), w;
  }
  return wm = h, wm;
}
var xm, ME;
function XV() {
  if (ME) return xm;
  ME = 1;
  var e = gi(), t = Us(), n = rt(), o = e ? e.isConcatSpreadable : void 0;
  function s(a) {
    return n(a) || t(a) || !!(o && a && a[o]);
  }
  return xm = s, xm;
}
var _m, OE;
function Qy() {
  if (OE) return _m;
  OE = 1;
  var e = Hy(), t = XV();
  function n(o, s, a, u, l) {
    var f = -1, d = o.length;
    for (a || (a = t), l || (l = []); ++f < d; ) {
      var h = o[f];
      s > 0 && a(h) ? s > 1 ? n(h, s - 1, a, u, l) : e(l, h) : u || (l[l.length] = h);
    }
    return l;
  }
  return _m = n, _m;
}
var bm, LE;
function QV() {
  if (LE) return bm;
  LE = 1;
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
  return bm = e, bm;
}
var Sm, qE;
function lA() {
  if (qE) return Sm;
  qE = 1;
  var e = QV(), t = Math.max;
  function n(o, s, a) {
    return s = t(s === void 0 ? o.length - 1 : s, 0), function() {
      for (var u = arguments, l = -1, f = t(u.length - s, 0), d = Array(f); ++l < f; )
        d[l] = u[s + l];
      l = -1;
      for (var h = Array(s + 1); ++l < s; )
        h[l] = u[l];
      return h[s] = a(d), e(o, this, h);
    };
  }
  return Sm = n, Sm;
}
var Em, DE;
function ZV() {
  if (DE) return Em;
  DE = 1;
  var e = Uy(), t = NT(), n = po(), o = t ? function(s, a) {
    return t(s, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Em = o, Em;
}
var Cm, jE;
function JV() {
  if (jE) return Cm;
  jE = 1;
  var e = 800, t = 16, n = Date.now;
  function o(s) {
    var a = 0, u = 0;
    return function() {
      var l = n(), f = t - (l - u);
      if (u = l, f > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return s.apply(void 0, arguments);
    };
  }
  return Cm = o, Cm;
}
var km, zE;
function cA() {
  if (zE) return km;
  zE = 1;
  var e = ZV(), t = JV(), n = t(e);
  return km = n, km;
}
var Rm, FE;
function Fl() {
  if (FE) return Rm;
  FE = 1;
  var e = po(), t = lA(), n = cA();
  function o(s, a) {
    return n(t(s, a, e), s + "");
  }
  return Rm = o, Rm;
}
var Nm, $E;
function fA() {
  if ($E) return Nm;
  $E = 1;
  function e(t, n, o, s) {
    for (var a = t.length, u = o + (s ? 1 : -1); s ? u-- : ++u < a; )
      if (n(t[u], u, t))
        return u;
    return -1;
  }
  return Nm = e, Nm;
}
var Pm, BE;
function eH() {
  if (BE) return Pm;
  BE = 1;
  function e(t) {
    return t !== t;
  }
  return Pm = e, Pm;
}
var Tm, VE;
function tH() {
  if (VE) return Tm;
  VE = 1;
  function e(t, n, o) {
    for (var s = o - 1, a = t.length; ++s < a; )
      if (t[s] === n)
        return s;
    return -1;
  }
  return Tm = e, Tm;
}
var Am, HE;
function nH() {
  if (HE) return Am;
  HE = 1;
  var e = fA(), t = eH(), n = tH();
  function o(s, a, u) {
    return a === a ? n(s, a, u) : e(s, t, u);
  }
  return Am = o, Am;
}
var Im, WE;
function rH() {
  if (WE) return Im;
  WE = 1;
  var e = nH();
  function t(n, o) {
    var s = n == null ? 0 : n.length;
    return !!s && e(n, o, 0) > -1;
  }
  return Im = t, Im;
}
var Mm, UE;
function oH() {
  if (UE) return Mm;
  UE = 1;
  function e(t, n, o) {
    for (var s = -1, a = t == null ? 0 : t.length; ++s < a; )
      if (o(n, t[s]))
        return !0;
    return !1;
  }
  return Mm = e, Mm;
}
var Om, GE;
function iH() {
  if (GE) return Om;
  GE = 1;
  function e() {
  }
  return Om = e, Om;
}
var Lm, YE;
function sH() {
  if (YE) return Lm;
  YE = 1;
  var e = jT(), t = iH(), n = Ky(), o = 1 / 0, s = e && 1 / n(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return Lm = s, Lm;
}
var qm, KE;
function aH() {
  if (KE) return qm;
  KE = 1;
  var e = GT(), t = rH(), n = oH(), o = YT(), s = sH(), a = Ky(), u = 200;
  function l(f, d, h) {
    var m = -1, g = t, w = f.length, E = !0, y = [], x = y;
    if (h)
      E = !1, g = n;
    else if (w >= u) {
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
  return qm = l, qm;
}
var Dm, XE;
function dA() {
  if (XE) return Dm;
  XE = 1;
  var e = Zn(), t = Ln();
  function n(o) {
    return t(o) && e(o);
  }
  return Dm = n, Dm;
}
var jm, QE;
function uH() {
  if (QE) return jm;
  QE = 1;
  var e = Qy(), t = Fl(), n = aH(), o = dA(), s = t(function(a) {
    return n(e(a, 1, o, !0));
  });
  return jm = s, jm;
}
var zm, ZE;
function lH() {
  if (ZE) return zm;
  ZE = 1;
  var e = Dl();
  function t(n, o) {
    return e(o, function(s) {
      return n[s];
    });
  }
  return zm = t, zm;
}
var Fm, JE;
function hA() {
  if (JE) return Fm;
  JE = 1;
  var e = lH(), t = Mr();
  function n(o) {
    return o == null ? [] : e(o, t(o));
  }
  return Fm = n, Fm;
}
var $m, eC;
function Jt() {
  if (eC) return $m;
  eC = 1;
  var e;
  if (typeof qy == "function")
    try {
      e = {
        clone: gV(),
        constant: Uy(),
        each: UT(),
        filter: rA(),
        has: oA(),
        isArray: rt(),
        isEmpty: FV(),
        isFunction: Hs(),
        isUndefined: iA(),
        keys: Mr(),
        map: aA(),
        reduce: uA(),
        size: YV(),
        transform: KV(),
        union: uH(),
        values: hA()
      };
    } catch {
    }
  return e || (e = window._), $m = e, $m;
}
var Bm, tC;
function Zy() {
  if (tC) return Bm;
  tC = 1;
  var e = Jt();
  Bm = s;
  var t = "\0", n = "\0", o = "";
  function s(h) {
    this._isDirected = e.has(h, "directed") ? h.directed : !0, this._isMultigraph = e.has(h, "multigraph") ? h.multigraph : !1, this._isCompound = e.has(h, "compound") ? h.compound : !1, this._label = void 0, this._defaultNodeLabelFn = e.constant(void 0), this._defaultEdgeLabelFn = e.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[n] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
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
    return e.has(this._nodes, h) ? (arguments.length > 1 && (this._nodes[h] = m), this) : (this._nodes[h] = arguments.length > 1 ? m : this._defaultNodeLabelFn(h), this._isCompound && (this._parent[h] = n, this._children[h] = {}, this._children[n][h] = !0), this._in[h] = {}, this._preds[h] = {}, this._out[h] = {}, this._sucs[h] = {}, ++this._nodeCount, this);
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
      m = n;
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
      if (m !== n)
        return m;
    }
  }, s.prototype.children = function(h) {
    if (e.isUndefined(h) && (h = n), this._isCompound) {
      var m = this._children[h];
      if (m)
        return e.keys(m);
    } else {
      if (h === n)
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
    var x = l(this._isDirected, h, m, g);
    if (e.has(this._edgeLabels, x))
      return E && (this._edgeLabels[x] = w), this;
    if (!e.isUndefined(g) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(h), this.setNode(m), this._edgeLabels[x] = E ? w : this._defaultEdgeLabelFn(h, m, g);
    var S = f(this._isDirected, h, m, g);
    return h = S.v, m = S.w, Object.freeze(S), this._edgeObjs[x] = S, a(this._preds[m], h), a(this._sucs[h], m), this._in[m][x] = S, this._out[h][x] = S, this._edgeCount++, this;
  }, s.prototype.edge = function(h, m, g) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : l(this._isDirected, h, m, g);
    return this._edgeLabels[w];
  }, s.prototype.hasEdge = function(h, m, g) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : l(this._isDirected, h, m, g);
    return e.has(this._edgeLabels, w);
  }, s.prototype.removeEdge = function(h, m, g) {
    var w = arguments.length === 1 ? d(this._isDirected, arguments[0]) : l(this._isDirected, h, m, g), E = this._edgeObjs[w];
    return E && (h = E.v, m = E.w, delete this._edgeLabels[w], delete this._edgeObjs[w], u(this._preds[m], h), u(this._sucs[h], m), delete this._in[m][w], delete this._out[h][w], this._edgeCount--), this;
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
  function u(h, m) {
    --h[m] || delete h[m];
  }
  function l(h, m, g, w) {
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
    return l(h, m.v, m.w, m.name);
  }
  return Bm;
}
var Vm, nC;
function cH() {
  return nC || (nC = 1, Vm = "2.1.8"), Vm;
}
var Hm, rC;
function fH() {
  return rC || (rC = 1, Hm = {
    Graph: Zy(),
    version: cH()
  }), Hm;
}
var Wm, oC;
function dH() {
  if (oC) return Wm;
  oC = 1;
  var e = Jt(), t = Zy();
  Wm = {
    write: n,
    read: a
  };
  function n(u) {
    var l = {
      options: {
        directed: u.isDirected(),
        multigraph: u.isMultigraph(),
        compound: u.isCompound()
      },
      nodes: o(u),
      edges: s(u)
    };
    return e.isUndefined(u.graph()) || (l.value = e.clone(u.graph())), l;
  }
  function o(u) {
    return e.map(u.nodes(), function(l) {
      var f = u.node(l), d = u.parent(l), h = { v: l };
      return e.isUndefined(f) || (h.value = f), e.isUndefined(d) || (h.parent = d), h;
    });
  }
  function s(u) {
    return e.map(u.edges(), function(l) {
      var f = u.edge(l), d = { v: l.v, w: l.w };
      return e.isUndefined(l.name) || (d.name = l.name), e.isUndefined(f) || (d.value = f), d;
    });
  }
  function a(u) {
    var l = new t(u.options).setGraph(u.value);
    return e.each(u.nodes, function(f) {
      l.setNode(f.v, f.value), f.parent && l.setParent(f.v, f.parent);
    }), e.each(u.edges, function(f) {
      l.setEdge({ v: f.v, w: f.w, name: f.name }, f.value);
    }), l;
  }
  return Wm;
}
var Um, iC;
function hH() {
  if (iC) return Um;
  iC = 1;
  var e = Jt();
  Um = t;
  function t(n) {
    var o = {}, s = [], a;
    function u(l) {
      e.has(o, l) || (o[l] = !0, a.push(l), e.each(n.successors(l), u), e.each(n.predecessors(l), u));
    }
    return e.each(n.nodes(), function(l) {
      a = [], u(l), a.length && s.push(a);
    }), s;
  }
  return Um;
}
var Gm, sC;
function pA() {
  if (sC) return Gm;
  sC = 1;
  var e = Jt();
  Gm = t;
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
    var s = this._keyIndices;
    if (n = String(n), !e.has(s, n)) {
      var a = this._arr, u = a.length;
      return s[n] = u, a.push({ key: n, priority: o }), this._decrease(u), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var n = this._arr.pop();
    return delete this._keyIndices[n.key], this._heapify(0), n.key;
  }, t.prototype.decrease = function(n, o) {
    var s = this._keyIndices[n];
    if (o > this._arr[s].priority)
      throw new Error("New priority is greater than current priority. Key: " + n + " Old: " + this._arr[s].priority + " New: " + o);
    this._arr[s].priority = o, this._decrease(s);
  }, t.prototype._heapify = function(n) {
    var o = this._arr, s = 2 * n, a = s + 1, u = n;
    s < o.length && (u = o[s].priority < o[u].priority ? s : u, a < o.length && (u = o[a].priority < o[u].priority ? a : u), u !== n && (this._swap(n, u), this._heapify(u)));
  }, t.prototype._decrease = function(n) {
    for (var o = this._arr, s = o[n].priority, a; n !== 0 && (a = n >> 1, !(o[a].priority < s)); )
      this._swap(n, a), n = a;
  }, t.prototype._swap = function(n, o) {
    var s = this._arr, a = this._keyIndices, u = s[n], l = s[o];
    s[n] = l, s[o] = u, a[l.key] = n, a[u.key] = o;
  }, Gm;
}
var Ym, aC;
function mA() {
  if (aC) return Ym;
  aC = 1;
  var e = Jt(), t = pA();
  Ym = o;
  var n = e.constant(1);
  function o(a, u, l, f) {
    return s(
      a,
      String(u),
      l || n,
      f || function(d) {
        return a.outEdges(d);
      }
    );
  }
  function s(a, u, l, f) {
    var d = {}, h = new t(), m, g, w = function(E) {
      var y = E.v !== m ? E.v : E.w, x = d[y], S = l(E), C = g.distance + S;
      if (S < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + E + " Weight: " + S);
      C < x.distance && (x.distance = C, x.predecessor = m, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(E) {
      var y = E === u ? 0 : Number.POSITIVE_INFINITY;
      d[E] = { distance: y }, h.add(E, y);
    }); h.size() > 0 && (m = h.removeMin(), g = d[m], g.distance !== Number.POSITIVE_INFINITY); )
      f(m).forEach(w);
    return d;
  }
  return Ym;
}
var Km, uC;
function pH() {
  if (uC) return Km;
  uC = 1;
  var e = mA(), t = Jt();
  Km = n;
  function n(o, s, a) {
    return t.transform(o.nodes(), function(u, l) {
      u[l] = e(o, l, s, a);
    }, {});
  }
  return Km;
}
var Xm, lC;
function gA() {
  if (lC) return Xm;
  lC = 1;
  var e = Jt();
  Xm = t;
  function t(n) {
    var o = 0, s = [], a = {}, u = [];
    function l(f) {
      var d = a[f] = {
        onStack: !0,
        lowlink: o,
        index: o++
      };
      if (s.push(f), n.successors(f).forEach(function(g) {
        e.has(a, g) ? a[g].onStack && (d.lowlink = Math.min(d.lowlink, a[g].index)) : (l(g), d.lowlink = Math.min(d.lowlink, a[g].lowlink));
      }), d.lowlink === d.index) {
        var h = [], m;
        do
          m = s.pop(), a[m].onStack = !1, h.push(m);
        while (f !== m);
        u.push(h);
      }
    }
    return n.nodes().forEach(function(f) {
      e.has(a, f) || l(f);
    }), u;
  }
  return Xm;
}
var Qm, cC;
function mH() {
  if (cC) return Qm;
  cC = 1;
  var e = Jt(), t = gA();
  Qm = n;
  function n(o) {
    return e.filter(t(o), function(s) {
      return s.length > 1 || s.length === 1 && o.hasEdge(s[0], s[0]);
    });
  }
  return Qm;
}
var Zm, fC;
function gH() {
  if (fC) return Zm;
  fC = 1;
  var e = Jt();
  Zm = n;
  var t = e.constant(1);
  function n(s, a, u) {
    return o(
      s,
      a || t,
      u || function(l) {
        return s.outEdges(l);
      }
    );
  }
  function o(s, a, u) {
    var l = {}, f = s.nodes();
    return f.forEach(function(d) {
      l[d] = {}, l[d][d] = { distance: 0 }, f.forEach(function(h) {
        d !== h && (l[d][h] = { distance: Number.POSITIVE_INFINITY });
      }), u(d).forEach(function(h) {
        var m = h.v === d ? h.w : h.v, g = a(h);
        l[d][m] = { distance: g, predecessor: d };
      });
    }), f.forEach(function(d) {
      var h = l[d];
      f.forEach(function(m) {
        var g = l[m];
        f.forEach(function(w) {
          var E = g[d], y = h[w], x = g[w], S = E.distance + y.distance;
          S < x.distance && (x.distance = S, x.predecessor = y.predecessor);
        });
      });
    }), l;
  }
  return Zm;
}
var Jm, dC;
function vA() {
  if (dC) return Jm;
  dC = 1;
  var e = Jt();
  Jm = t, t.CycleException = n;
  function t(o) {
    var s = {}, a = {}, u = [];
    function l(f) {
      if (e.has(a, f))
        throw new n();
      e.has(s, f) || (a[f] = !0, s[f] = !0, e.each(o.predecessors(f), l), delete a[f], u.push(f));
    }
    if (e.each(o.sinks(), l), e.size(s) !== o.nodeCount())
      throw new n();
    return u;
  }
  function n() {
  }
  return n.prototype = new Error(), Jm;
}
var eg, hC;
function vH() {
  if (hC) return eg;
  hC = 1;
  var e = vA();
  eg = t;
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
  return eg;
}
var tg, pC;
function yA() {
  if (pC) return tg;
  pC = 1;
  var e = Jt();
  tg = t;
  function t(o, s, a) {
    e.isArray(s) || (s = [s]);
    var u = (o.isDirected() ? o.successors : o.neighbors).bind(o), l = [], f = {};
    return e.each(s, function(d) {
      if (!o.hasNode(d))
        throw new Error("Graph does not have node: " + d);
      n(o, d, a === "post", f, u, l);
    }), l;
  }
  function n(o, s, a, u, l, f) {
    e.has(u, s) || (u[s] = !0, a || f.push(s), e.each(l(s), function(d) {
      n(o, d, a, u, l, f);
    }), a && f.push(s));
  }
  return tg;
}
var ng, mC;
function yH() {
  if (mC) return ng;
  mC = 1;
  var e = yA();
  ng = t;
  function t(n, o) {
    return e(n, o, "post");
  }
  return ng;
}
var rg, gC;
function wH() {
  if (gC) return rg;
  gC = 1;
  var e = yA();
  rg = t;
  function t(n, o) {
    return e(n, o, "pre");
  }
  return rg;
}
var og, vC;
function xH() {
  if (vC) return og;
  vC = 1;
  var e = Jt(), t = Zy(), n = pA();
  og = o;
  function o(s, a) {
    var u = new t(), l = {}, f = new n(), d;
    function h(g) {
      var w = g.v === d ? g.w : g.v, E = f.priority(w);
      if (E !== void 0) {
        var y = a(g);
        y < E && (l[w] = d, f.decrease(w, y));
      }
    }
    if (s.nodeCount() === 0)
      return u;
    e.each(s.nodes(), function(g) {
      f.add(g, Number.POSITIVE_INFINITY), u.setNode(g);
    }), f.decrease(s.nodes()[0], 0);
    for (var m = !1; f.size() > 0; ) {
      if (d = f.removeMin(), e.has(l, d))
        u.setEdge(d, l[d]);
      else {
        if (m)
          throw new Error("Input graph is not connected: " + s);
        m = !0;
      }
      s.nodeEdges(d).forEach(h);
    }
    return u;
  }
  return og;
}
var ig, yC;
function _H() {
  return yC || (yC = 1, ig = {
    components: hH(),
    dijkstra: mA(),
    dijkstraAll: pH(),
    findCycles: mH(),
    floydWarshall: gH(),
    isAcyclic: vH(),
    postorder: yH(),
    preorder: wH(),
    prim: xH(),
    tarjan: gA(),
    topsort: vA()
  }), ig;
}
var sg, wC;
function bH() {
  if (wC) return sg;
  wC = 1;
  var e = fH();
  return sg = {
    Graph: e.Graph,
    json: dH(),
    alg: _H(),
    version: e.version
  }, sg;
}
var ag, xC;
function vn() {
  if (xC) return ag;
  xC = 1;
  var e;
  if (typeof qy == "function")
    try {
      e = bH();
    } catch {
    }
  return e || (e = window.graphlib), ag = e, ag;
}
var ug, _C;
function SH() {
  if (_C) return ug;
  _C = 1;
  var e = VT(), t = 1, n = 4;
  function o(s) {
    return e(s, t | n);
  }
  return ug = o, ug;
}
var lg, bC;
function $l() {
  if (bC) return lg;
  bC = 1;
  var e = mi(), t = Zn(), n = Il(), o = Zt();
  function s(a, u, l) {
    if (!o(l))
      return !1;
    var f = typeof u;
    return (f == "number" ? t(l) && n(u, l.length) : f == "string" && u in l) ? e(l[u], a) : !1;
  }
  return lg = s, lg;
}
var cg, SC;
function EH() {
  if (SC) return cg;
  SC = 1;
  var e = Fl(), t = mi(), n = $l(), o = ho(), s = Object.prototype, a = s.hasOwnProperty, u = e(function(l, f) {
    l = Object(l);
    var d = -1, h = f.length, m = h > 2 ? f[2] : void 0;
    for (m && n(f[0], f[1], m) && (h = 1); ++d < h; )
      for (var g = f[d], w = o(g), E = -1, y = w.length; ++E < y; ) {
        var x = w[E], S = l[x];
        (S === void 0 || t(S, s[x]) && !a.call(l, x)) && (l[x] = g[x]);
      }
    return l;
  });
  return cg = u, cg;
}
var fg, EC;
function CH() {
  if (EC) return fg;
  EC = 1;
  var e = Jn(), t = Zn(), n = Mr();
  function o(s) {
    return function(a, u, l) {
      var f = Object(a);
      if (!t(a)) {
        var d = e(u, 3);
        a = n(a), u = function(m) {
          return d(f[m], m, f);
        };
      }
      var h = s(a, u, l);
      return h > -1 ? f[d ? a[h] : h] : void 0;
    };
  }
  return fg = o, fg;
}
var dg, CC;
function kH() {
  if (CC) return dg;
  CC = 1;
  var e = /\s/;
  function t(n) {
    for (var o = n.length; o-- && e.test(n.charAt(o)); )
      ;
    return o;
  }
  return dg = t, dg;
}
var hg, kC;
function RH() {
  if (kC) return hg;
  kC = 1;
  var e = kH(), t = /^\s+/;
  function n(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return hg = n, hg;
}
var pg, RC;
function NH() {
  if (RC) return pg;
  RC = 1;
  var e = RH(), t = Zt(), n = wi(), o = NaN, s = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, u = /^0o[0-7]+$/i, l = parseInt;
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
    var m = a.test(d);
    return m || u.test(d) ? l(d.slice(2), m ? 2 : 8) : s.test(d) ? o : +d;
  }
  return pg = f, pg;
}
var mg, NC;
function wA() {
  if (NC) return mg;
  NC = 1;
  var e = NH(), t = 1 / 0, n = 17976931348623157e292;
  function o(s) {
    if (!s)
      return s === 0 ? s : 0;
    if (s = e(s), s === t || s === -t) {
      var a = s < 0 ? -1 : 1;
      return a * n;
    }
    return s === s ? s : 0;
  }
  return mg = o, mg;
}
var gg, PC;
function PH() {
  if (PC) return gg;
  PC = 1;
  var e = wA();
  function t(n) {
    var o = e(n), s = o % 1;
    return o === o ? s ? o - s : o : 0;
  }
  return gg = t, gg;
}
var vg, TC;
function TH() {
  if (TC) return vg;
  TC = 1;
  var e = fA(), t = Jn(), n = PH(), o = Math.max;
  function s(a, u, l) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = l == null ? 0 : n(l);
    return d < 0 && (d = o(f + d, 0)), e(a, t(u, 3), d);
  }
  return vg = s, vg;
}
var yg, AC;
function AH() {
  if (AC) return yg;
  AC = 1;
  var e = CH(), t = TH(), n = e(t);
  return yg = n, yg;
}
var wg, IC;
function xA() {
  if (IC) return wg;
  IC = 1;
  var e = Qy();
  function t(n) {
    var o = n == null ? 0 : n.length;
    return o ? e(n, 1) : [];
  }
  return wg = t, wg;
}
var xg, MC;
function IH() {
  if (MC) return xg;
  MC = 1;
  var e = Gy(), t = HT(), n = ho();
  function o(s, a) {
    return s == null ? s : e(s, t(a), n);
  }
  return xg = o, xg;
}
var _g, OC;
function MH() {
  if (OC) return _g;
  OC = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return _g = e, _g;
}
var bg, LC;
function OH() {
  if (LC) return bg;
  LC = 1;
  var e = Tl(), t = Yy(), n = Jn();
  function o(s, a) {
    var u = {};
    return a = n(a, 3), t(s, function(l, f, d) {
      e(u, f, a(l, f, d));
    }), u;
  }
  return bg = o, bg;
}
var Sg, qC;
function Jy() {
  if (qC) return Sg;
  qC = 1;
  var e = wi();
  function t(n, o, s) {
    for (var a = -1, u = n.length; ++a < u; ) {
      var l = n[a], f = o(l);
      if (f != null && (d === void 0 ? f === f && !e(f) : s(f, d)))
        var d = f, h = l;
    }
    return h;
  }
  return Sg = t, Sg;
}
var Eg, DC;
function LH() {
  if (DC) return Eg;
  DC = 1;
  function e(t, n) {
    return t > n;
  }
  return Eg = e, Eg;
}
var Cg, jC;
function qH() {
  if (jC) return Cg;
  jC = 1;
  var e = Jy(), t = LH(), n = po();
  function o(s) {
    return s && s.length ? e(s, n, t) : void 0;
  }
  return Cg = o, Cg;
}
var kg, zC;
function _A() {
  if (zC) return kg;
  zC = 1;
  var e = Tl(), t = mi();
  function n(o, s, a) {
    (a !== void 0 && !t(o[s], a) || a === void 0 && !(s in o)) && e(o, s, a);
  }
  return kg = n, kg;
}
var Rg, FC;
function DH() {
  if (FC) return Rg;
  FC = 1;
  var e = co(), t = Ll(), n = Ln(), o = "[object Object]", s = Function.prototype, a = Object.prototype, u = s.toString, l = a.hasOwnProperty, f = u.call(Object);
  function d(h) {
    if (!n(h) || e(h) != o)
      return !1;
    var m = t(h);
    if (m === null)
      return !0;
    var g = l.call(m, "constructor") && m.constructor;
    return typeof g == "function" && g instanceof g && u.call(g) == f;
  }
  return Rg = d, Rg;
}
var Ng, $C;
function bA() {
  if ($C) return Ng;
  $C = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return Ng = e, Ng;
}
var Pg, BC;
function jH() {
  if (BC) return Pg;
  BC = 1;
  var e = Ws(), t = ho();
  function n(o) {
    return e(o, t(o));
  }
  return Pg = n, Pg;
}
var Tg, VC;
function zH() {
  if (VC) return Tg;
  VC = 1;
  var e = _A(), t = AT(), n = FT(), o = IT(), s = BT(), a = Us(), u = rt(), l = dA(), f = vi(), d = Hs(), h = Zt(), m = DH(), g = Gs(), w = bA(), E = jH();
  function y(x, S, C, _, k, N, T) {
    var A = w(x, C), O = w(S, C), D = T.get(O);
    if (D) {
      e(x, C, D);
      return;
    }
    var G = N ? N(A, O, C + "", x, S, T) : void 0, B = G === void 0;
    if (B) {
      var V = u(O), X = !V && f(O), L = !V && !X && g(O);
      G = O, V || X || L ? u(A) ? G = A : l(A) ? G = o(A) : X ? (B = !1, G = t(O, !0)) : L ? (B = !1, G = n(O, !0)) : G = [] : m(O) || a(O) ? (G = A, a(A) ? G = E(A) : (!h(A) || d(A)) && (G = s(O))) : B = !1;
    }
    B && (T.set(O, G), k(G, O, _, N, T), T.delete(O)), e(x, C, G);
  }
  return Tg = y, Tg;
}
var Ag, HC;
function FH() {
  if (HC) return Ag;
  HC = 1;
  var e = Pl(), t = _A(), n = Gy(), o = zH(), s = Zt(), a = ho(), u = bA();
  function l(f, d, h, m, g) {
    f !== d && n(d, function(w, E) {
      if (g || (g = new e()), s(w))
        o(f, d, E, h, l, m, g);
      else {
        var y = m ? m(u(f, E), w, E + "", f, d, g) : void 0;
        y === void 0 && (y = w), t(f, E, y);
      }
    }, a);
  }
  return Ag = l, Ag;
}
var Ig, WC;
function $H() {
  if (WC) return Ig;
  WC = 1;
  var e = Fl(), t = $l();
  function n(o) {
    return e(function(s, a) {
      var u = -1, l = a.length, f = l > 1 ? a[l - 1] : void 0, d = l > 2 ? a[2] : void 0;
      for (f = o.length > 3 && typeof f == "function" ? (l--, f) : void 0, d && t(a[0], a[1], d) && (f = l < 3 ? void 0 : f, l = 1), s = Object(s); ++u < l; ) {
        var h = a[u];
        h && o(s, h, u, f);
      }
      return s;
    });
  }
  return Ig = n, Ig;
}
var Mg, UC;
function BH() {
  if (UC) return Mg;
  UC = 1;
  var e = FH(), t = $H(), n = t(function(o, s, a) {
    e(o, s, a);
  });
  return Mg = n, Mg;
}
var Og, GC;
function SA() {
  if (GC) return Og;
  GC = 1;
  function e(t, n) {
    return t < n;
  }
  return Og = e, Og;
}
var Lg, YC;
function VH() {
  if (YC) return Lg;
  YC = 1;
  var e = Jy(), t = SA(), n = po();
  function o(s) {
    return s && s.length ? e(s, n, t) : void 0;
  }
  return Lg = o, Lg;
}
var qg, KC;
function HH() {
  if (KC) return qg;
  KC = 1;
  var e = Jy(), t = Jn(), n = SA();
  function o(s, a) {
    return s && s.length ? e(s, t(a, 2), n) : void 0;
  }
  return qg = o, qg;
}
var Dg, XC;
function WH() {
  if (XC) return Dg;
  XC = 1;
  var e = wn(), t = function() {
    return e.Date.now();
  };
  return Dg = t, Dg;
}
var jg, QC;
function UH() {
  if (QC) return jg;
  QC = 1;
  var e = Al(), t = jl(), n = Il(), o = Zt(), s = Ys();
  function a(u, l, f, d) {
    if (!o(u))
      return u;
    l = t(l, u);
    for (var h = -1, m = l.length, g = m - 1, w = u; w != null && ++h < m; ) {
      var E = s(l[h]), y = f;
      if (E === "__proto__" || E === "constructor" || E === "prototype")
        return u;
      if (h != g) {
        var x = w[E];
        y = d ? d(x, E, w) : void 0, y === void 0 && (y = o(x) ? x : n(l[h + 1]) ? [] : {});
      }
      e(w, E, y), w = w[E];
    }
    return u;
  }
  return jg = a, jg;
}
var zg, ZC;
function GH() {
  if (ZC) return zg;
  ZC = 1;
  var e = zl(), t = UH(), n = jl();
  function o(s, a, u) {
    for (var l = -1, f = a.length, d = {}; ++l < f; ) {
      var h = a[l], m = e(s, h);
      u(m, h) && t(d, n(h, s), m);
    }
    return d;
  }
  return zg = o, zg;
}
var Fg, JC;
function YH() {
  if (JC) return Fg;
  JC = 1;
  var e = GH(), t = tA();
  function n(o, s) {
    return e(o, s, function(a, u) {
      return t(o, u);
    });
  }
  return Fg = n, Fg;
}
var $g, ek;
function KH() {
  if (ek) return $g;
  ek = 1;
  var e = xA(), t = lA(), n = cA();
  function o(s) {
    return n(t(s, void 0, e), s + "");
  }
  return $g = o, $g;
}
var Bg, tk;
function XH() {
  if (tk) return Bg;
  tk = 1;
  var e = YH(), t = KH(), n = t(function(o, s) {
    return o == null ? {} : e(o, s);
  });
  return Bg = n, Bg;
}
var Vg, nk;
function QH() {
  if (nk) return Vg;
  nk = 1;
  var e = Math.ceil, t = Math.max;
  function n(o, s, a, u) {
    for (var l = -1, f = t(e((s - o) / (a || 1)), 0), d = Array(f); f--; )
      d[u ? f : ++l] = o, o += a;
    return d;
  }
  return Vg = n, Vg;
}
var Hg, rk;
function ZH() {
  if (rk) return Hg;
  rk = 1;
  var e = QH(), t = $l(), n = wA();
  function o(s) {
    return function(a, u, l) {
      return l && typeof l != "number" && t(a, u, l) && (u = l = void 0), a = n(a), u === void 0 ? (u = a, a = 0) : u = n(u), l = l === void 0 ? a < u ? 1 : -1 : n(l), e(a, u, l, s);
    };
  }
  return Hg = o, Hg;
}
var Wg, ok;
function JH() {
  if (ok) return Wg;
  ok = 1;
  var e = ZH(), t = e();
  return Wg = t, Wg;
}
var Ug, ik;
function e8() {
  if (ik) return Ug;
  ik = 1;
  function e(t, n) {
    var o = t.length;
    for (t.sort(n); o--; )
      t[o] = t[o].value;
    return t;
  }
  return Ug = e, Ug;
}
var Gg, sk;
function t8() {
  if (sk) return Gg;
  sk = 1;
  var e = wi();
  function t(n, o) {
    if (n !== o) {
      var s = n !== void 0, a = n === null, u = n === n, l = e(n), f = o !== void 0, d = o === null, h = o === o, m = e(o);
      if (!d && !m && !l && n > o || l && f && h && !d && !m || a && f && h || !s && h || !u)
        return 1;
      if (!a && !l && !m && n < o || m && s && u && !a && !l || d && s && u || !f && u || !h)
        return -1;
    }
    return 0;
  }
  return Gg = t, Gg;
}
var Yg, ak;
function n8() {
  if (ak) return Yg;
  ak = 1;
  var e = t8();
  function t(n, o, s) {
    for (var a = -1, u = n.criteria, l = o.criteria, f = u.length, d = s.length; ++a < f; ) {
      var h = e(u[a], l[a]);
      if (h) {
        if (a >= d)
          return h;
        var m = s[a];
        return h * (m == "desc" ? -1 : 1);
      }
    }
    return n.index - o.index;
  }
  return Yg = t, Yg;
}
var Kg, uk;
function r8() {
  if (uk) return Kg;
  uk = 1;
  var e = Dl(), t = zl(), n = Jn(), o = sA(), s = e8(), a = Ml(), u = n8(), l = po(), f = rt();
  function d(h, m, g) {
    m.length ? m = e(m, function(y) {
      return f(y) ? function(x) {
        return t(x, y.length === 1 ? y[0] : y);
      } : y;
    }) : m = [l];
    var w = -1;
    m = e(m, a(n));
    var E = o(h, function(y, x, S) {
      var C = e(m, function(_) {
        return _(y);
      });
      return { criteria: C, index: ++w, value: y };
    });
    return s(E, function(y, x) {
      return u(y, x, g);
    });
  }
  return Kg = d, Kg;
}
var Xg, lk;
function o8() {
  if (lk) return Xg;
  lk = 1;
  var e = Qy(), t = r8(), n = Fl(), o = $l(), s = n(function(a, u) {
    if (a == null)
      return [];
    var l = u.length;
    return l > 1 && o(a, u[0], u[1]) ? u = [] : l > 2 && o(u[0], u[1], u[2]) && (u = [u[0]]), t(a, e(u, 1), []);
  });
  return Xg = s, Xg;
}
var Qg, ck;
function i8() {
  if (ck) return Qg;
  ck = 1;
  var e = JT(), t = 0;
  function n(o) {
    var s = ++t;
    return e(o) + s;
  }
  return Qg = n, Qg;
}
var Zg, fk;
function s8() {
  if (fk) return Zg;
  fk = 1;
  function e(t, n, o) {
    for (var s = -1, a = t.length, u = n.length, l = {}; ++s < a; ) {
      var f = s < u ? n[s] : void 0;
      o(l, t[s], f);
    }
    return l;
  }
  return Zg = e, Zg;
}
var Jg, dk;
function a8() {
  if (dk) return Jg;
  dk = 1;
  var e = Al(), t = s8();
  function n(o, s) {
    return t(o || [], s || [], e);
  }
  return Jg = n, Jg;
}
var ev, hk;
function Ve() {
  if (hk) return ev;
  hk = 1;
  var e;
  if (typeof qy == "function")
    try {
      e = {
        cloneDeep: SH(),
        constant: Uy(),
        defaults: EH(),
        each: UT(),
        filter: rA(),
        find: AH(),
        flatten: xA(),
        forEach: WT(),
        forIn: IH(),
        has: oA(),
        isUndefined: iA(),
        last: MH(),
        map: aA(),
        mapValues: OH(),
        max: qH(),
        merge: BH(),
        min: VH(),
        minBy: HH(),
        now: WH(),
        pick: XH(),
        range: JH(),
        reduce: uA(),
        sortBy: o8(),
        uniqueId: i8(),
        values: hA(),
        zipObject: a8()
      };
    } catch {
    }
  return e || (e = window._), ev = e, ev;
}
var tv, pk;
function u8() {
  if (pk) return tv;
  pk = 1, tv = e;
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
      o.push(JSON.stringify(a, n)), a = a._prev;
    return "[" + o.join(", ") + "]";
  };
  function t(o) {
    o._prev._next = o._next, o._next._prev = o._prev, delete o._next, delete o._prev;
  }
  function n(o, s) {
    if (o !== "_next" && o !== "_prev")
      return s;
  }
  return tv;
}
var nv, mk;
function l8() {
  if (mk) return nv;
  mk = 1;
  var e = Ve(), t = vn().Graph, n = u8();
  nv = s;
  var o = e.constant(1);
  function s(d, h) {
    if (d.nodeCount() <= 1)
      return [];
    var m = l(d, h || o), g = a(m.graph, m.buckets, m.zeroIdx);
    return e.flatten(e.map(g, function(w) {
      return d.outEdges(w.v, w.w);
    }), !0);
  }
  function a(d, h, m) {
    for (var g = [], w = h[h.length - 1], E = h[0], y; d.nodeCount(); ) {
      for (; y = E.dequeue(); )
        u(d, h, m, y);
      for (; y = w.dequeue(); )
        u(d, h, m, y);
      if (d.nodeCount()) {
        for (var x = h.length - 2; x > 0; --x)
          if (y = h[x].dequeue(), y) {
            g = g.concat(u(d, h, m, y, !0));
            break;
          }
      }
    }
    return g;
  }
  function u(d, h, m, g, w) {
    var E = w ? [] : void 0;
    return e.forEach(d.inEdges(g.v), function(y) {
      var x = d.edge(y), S = d.node(y.v);
      w && E.push({ v: y.v, w: y.w }), S.out -= x, f(h, m, S);
    }), e.forEach(d.outEdges(g.v), function(y) {
      var x = d.edge(y), S = y.w, C = d.node(S);
      C.in -= x, f(h, m, C);
    }), d.removeNode(g.v), E;
  }
  function l(d, h) {
    var m = new t(), g = 0, w = 0;
    e.forEach(d.nodes(), function(x) {
      m.setNode(x, { v: x, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(x) {
      var S = m.edge(x.v, x.w) || 0, C = h(x), _ = S + C;
      m.setEdge(x.v, x.w, _), w = Math.max(w, m.node(x.v).out += C), g = Math.max(g, m.node(x.w).in += C);
    });
    var E = e.range(w + g + 3).map(function() {
      return new n();
    }), y = g + 1;
    return e.forEach(m.nodes(), function(x) {
      f(E, y, m.node(x));
    }), { graph: m, buckets: E, zeroIdx: y };
  }
  function f(d, h, m) {
    m.out ? m.in ? d[m.out - m.in + h].enqueue(m) : d[d.length - 1].enqueue(m) : d[0].enqueue(m);
  }
  return nv;
}
var rv, gk;
function c8() {
  if (gk) return rv;
  gk = 1;
  var e = Ve(), t = l8();
  rv = {
    run: n,
    undo: s
  };
  function n(a) {
    var u = a.graph().acyclicer === "greedy" ? t(a, l(a)) : o(a);
    e.forEach(u, function(f) {
      var d = a.edge(f);
      a.removeEdge(f), d.forwardName = f.name, d.reversed = !0, a.setEdge(f.w, f.v, d, e.uniqueId("rev"));
    });
    function l(f) {
      return function(d) {
        return f.edge(d).weight;
      };
    }
  }
  function o(a) {
    var u = [], l = {}, f = {};
    function d(h) {
      e.has(f, h) || (f[h] = !0, l[h] = !0, e.forEach(a.outEdges(h), function(m) {
        e.has(l, m.w) ? u.push(m) : d(m.w);
      }), delete l[h]);
    }
    return e.forEach(a.nodes(), d), u;
  }
  function s(a) {
    e.forEach(a.edges(), function(u) {
      var l = a.edge(u);
      if (l.reversed) {
        a.removeEdge(u);
        var f = l.forwardName;
        delete l.reversed, delete l.forwardName, a.setEdge(u.w, u.v, l, f);
      }
    });
  }
  return rv;
}
var ov, vk;
function Pt() {
  if (vk) return ov;
  vk = 1;
  var e = Ve(), t = vn().Graph;
  ov = {
    addDummyNode: n,
    simplify: o,
    asNonCompoundGraph: s,
    successorWeights: a,
    predecessorWeights: u,
    intersectRect: l,
    buildLayerMatrix: f,
    normalizeRanks: d,
    removeEmptyRanks: h,
    addBorderNode: m,
    maxRank: g,
    partition: w,
    time: E,
    notime: y
  };
  function n(x, S, C, _) {
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
  function u(x) {
    var S = e.map(x.nodes(), function(C) {
      var _ = {};
      return e.forEach(x.inEdges(C), function(k) {
        _[k.v] = (_[k.v] || 0) + x.edge(k).weight;
      }), _;
    });
    return e.zipObject(x.nodes(), S);
  }
  function l(x, S) {
    var C = x.x, _ = x.y, k = S.x - C, N = S.y - _, T = x.width / 2, A = x.height / 2;
    if (!k && !N)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, D;
    return Math.abs(N) * T > Math.abs(k) * A ? (N < 0 && (A = -A), O = A * k / N, D = A) : (k < 0 && (T = -T), O = T, D = T * N / k), { x: C + O, y: _ + D };
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
  function m(x, S, C, _) {
    var k = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (k.rank = C, k.order = _), n(x, "border", k, S);
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
  return ov;
}
var iv, yk;
function f8() {
  if (yk) return iv;
  yk = 1;
  var e = Ve(), t = Pt();
  iv = {
    run: n,
    undo: s
  };
  function n(a) {
    a.graph().dummyChains = [], e.forEach(a.edges(), function(u) {
      o(a, u);
    });
  }
  function o(a, u) {
    var l = u.v, f = a.node(l).rank, d = u.w, h = a.node(d).rank, m = u.name, g = a.edge(u), w = g.labelRank;
    if (h !== f + 1) {
      a.removeEdge(u);
      var E, y, x;
      for (x = 0, ++f; f < h; ++x, ++f)
        g.points = [], y = {
          width: 0,
          height: 0,
          edgeLabel: g,
          edgeObj: u,
          rank: f
        }, E = t.addDummyNode(a, "edge", y, "_d"), f === w && (y.width = g.width, y.height = g.height, y.dummy = "edge-label", y.labelpos = g.labelpos), a.setEdge(l, E, { weight: g.weight }, m), x === 0 && a.graph().dummyChains.push(E), l = E;
      a.setEdge(l, d, { weight: g.weight }, m);
    }
  }
  function s(a) {
    e.forEach(a.graph().dummyChains, function(u) {
      var l = a.node(u), f = l.edgeLabel, d;
      for (a.setEdge(l.edgeObj, f); l.dummy; )
        d = a.successors(u)[0], a.removeNode(u), f.points.push({ x: l.x, y: l.y }), l.dummy === "edge-label" && (f.x = l.x, f.y = l.y, f.width = l.width, f.height = l.height), u = d, l = a.node(u);
    });
  }
  return iv;
}
var sv, wk;
function tl() {
  if (wk) return sv;
  wk = 1;
  var e = Ve();
  sv = {
    longestPath: t,
    slack: n
  };
  function t(o) {
    var s = {};
    function a(u) {
      var l = o.node(u);
      if (e.has(s, u))
        return l.rank;
      s[u] = !0;
      var f = e.min(e.map(o.outEdges(u), function(d) {
        return a(d.w) - o.edge(d).minlen;
      }));
      return (f === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
      f === void 0 || // return value of _.map([]) for Lodash 4
      f === null) && (f = 0), l.rank = f;
    }
    e.forEach(o.sources(), a);
  }
  function n(o, s) {
    return o.node(s.w).rank - o.node(s.v).rank - o.edge(s).minlen;
  }
  return sv;
}
var av, xk;
function EA() {
  if (xk) return av;
  xk = 1;
  var e = Ve(), t = vn().Graph, n = tl().slack;
  av = o;
  function o(l) {
    var f = new t({ directed: !1 }), d = l.nodes()[0], h = l.nodeCount();
    f.setNode(d, {});
    for (var m, g; s(f, l) < h; )
      m = a(f, l), g = f.hasNode(m.v) ? n(l, m) : -n(l, m), u(f, l, g);
    return f;
  }
  function s(l, f) {
    function d(h) {
      e.forEach(f.nodeEdges(h), function(m) {
        var g = m.v, w = h === g ? m.w : g;
        !l.hasNode(w) && !n(f, m) && (l.setNode(w, {}), l.setEdge(h, w, {}), d(w));
      });
    }
    return e.forEach(l.nodes(), d), l.nodeCount();
  }
  function a(l, f) {
    return e.minBy(f.edges(), function(d) {
      if (l.hasNode(d.v) !== l.hasNode(d.w))
        return n(f, d);
    });
  }
  function u(l, f, d) {
    e.forEach(l.nodes(), function(h) {
      f.node(h).rank += d;
    });
  }
  return av;
}
var uv, _k;
function d8() {
  if (_k) return uv;
  _k = 1;
  var e = Ve(), t = EA(), n = tl().slack, o = tl().longestPath, s = vn().alg.preorder, a = vn().alg.postorder, u = Pt().simplify;
  uv = l, l.initLowLimValues = m, l.initCutValues = f, l.calcCutValue = h, l.leaveEdge = w, l.enterEdge = E, l.exchangeEdges = y;
  function l(_) {
    _ = u(_), o(_);
    var k = t(_);
    m(k), f(k, _);
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
  function m(_, k) {
    arguments.length < 2 && (k = _.nodes()[0]), g(_, {}, 1, k);
  }
  function g(_, k, N, T, A) {
    var O = N, D = _.node(T);
    return k[T] = !0, e.forEach(_.neighbors(T), function(G) {
      e.has(k, G) || (N = g(_, k, N, G, T));
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
      return n(k, X);
    });
  }
  function y(_, k, N, T) {
    var A = N.v, O = N.w;
    _.removeEdge(A, O), _.setEdge(T.v, T.w, {}), m(_), f(_, k), x(_, k);
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
  return uv;
}
var lv, bk;
function h8() {
  if (bk) return lv;
  bk = 1;
  var e = tl(), t = e.longestPath, n = EA(), o = d8();
  lv = s;
  function s(f) {
    switch (f.graph().ranker) {
      case "network-simplex":
        l(f);
        break;
      case "tight-tree":
        u(f);
        break;
      case "longest-path":
        a(f);
        break;
      default:
        l(f);
    }
  }
  var a = t;
  function u(f) {
    t(f), n(f);
  }
  function l(f) {
    o(f);
  }
  return lv;
}
var cv, Sk;
function p8() {
  if (Sk) return cv;
  Sk = 1;
  var e = Ve();
  cv = t;
  function t(s) {
    var a = o(s);
    e.forEach(s.graph().dummyChains, function(u) {
      for (var l = s.node(u), f = l.edgeObj, d = n(s, a, f.v, f.w), h = d.path, m = d.lca, g = 0, w = h[g], E = !0; u !== f.w; ) {
        if (l = s.node(u), E) {
          for (; (w = h[g]) !== m && s.node(w).maxRank < l.rank; )
            g++;
          w === m && (E = !1);
        }
        if (!E) {
          for (; g < h.length - 1 && s.node(w = h[g + 1]).minRank <= l.rank; )
            g++;
          w = h[g];
        }
        s.setParent(u, w), u = s.successors(u)[0];
      }
    });
  }
  function n(s, a, u, l) {
    var f = [], d = [], h = Math.min(a[u].low, a[l].low), m = Math.max(a[u].lim, a[l].lim), g, w;
    g = u;
    do
      g = s.parent(g), f.push(g);
    while (g && (a[g].low > h || m > a[g].lim));
    for (w = g, g = l; (g = s.parent(g)) !== w; )
      d.push(g);
    return { path: f.concat(d.reverse()), lca: w };
  }
  function o(s) {
    var a = {}, u = 0;
    function l(f) {
      var d = u;
      e.forEach(s.children(f), l), a[f] = { low: d, lim: u++ };
    }
    return e.forEach(s.children(), l), a;
  }
  return cv;
}
var fv, Ek;
function m8() {
  if (Ek) return fv;
  Ek = 1;
  var e = Ve(), t = Pt();
  fv = {
    run: n,
    cleanup: u
  };
  function n(l) {
    var f = t.addDummyNode(l, "root", {}, "_root"), d = s(l), h = e.max(e.values(d)) - 1, m = 2 * h + 1;
    l.graph().nestingRoot = f, e.forEach(l.edges(), function(w) {
      l.edge(w).minlen *= m;
    });
    var g = a(l) + 1;
    e.forEach(l.children(), function(w) {
      o(l, f, m, g, h, d, w);
    }), l.graph().nodeRankFactor = m;
  }
  function o(l, f, d, h, m, g, w) {
    var E = l.children(w);
    if (!E.length) {
      w !== f && l.setEdge(f, w, { weight: 0, minlen: d });
      return;
    }
    var y = t.addBorderNode(l, "_bt"), x = t.addBorderNode(l, "_bb"), S = l.node(w);
    l.setParent(y, w), S.borderTop = y, l.setParent(x, w), S.borderBottom = x, e.forEach(E, function(C) {
      o(l, f, d, h, m, g, C);
      var _ = l.node(C), k = _.borderTop ? _.borderTop : C, N = _.borderBottom ? _.borderBottom : C, T = _.borderTop ? h : 2 * h, A = k !== N ? 1 : m - g[w] + 1;
      l.setEdge(y, k, {
        weight: T,
        minlen: A,
        nestingEdge: !0
      }), l.setEdge(N, x, {
        weight: T,
        minlen: A,
        nestingEdge: !0
      });
    }), l.parent(w) || l.setEdge(f, y, { weight: 0, minlen: m + g[w] });
  }
  function s(l) {
    var f = {};
    function d(h, m) {
      var g = l.children(h);
      g && g.length && e.forEach(g, function(w) {
        d(w, m + 1);
      }), f[h] = m;
    }
    return e.forEach(l.children(), function(h) {
      d(h, 1);
    }), f;
  }
  function a(l) {
    return e.reduce(l.edges(), function(f, d) {
      return f + l.edge(d).weight;
    }, 0);
  }
  function u(l) {
    var f = l.graph();
    l.removeNode(f.nestingRoot), delete f.nestingRoot, e.forEach(l.edges(), function(d) {
      var h = l.edge(d);
      h.nestingEdge && l.removeEdge(d);
    });
  }
  return fv;
}
var dv, Ck;
function g8() {
  if (Ck) return dv;
  Ck = 1;
  var e = Ve(), t = Pt();
  dv = n;
  function n(s) {
    function a(u) {
      var l = s.children(u), f = s.node(u);
      if (l.length && e.forEach(l, a), e.has(f, "minRank")) {
        f.borderLeft = [], f.borderRight = [];
        for (var d = f.minRank, h = f.maxRank + 1; d < h; ++d)
          o(s, "borderLeft", "_bl", u, f, d), o(s, "borderRight", "_br", u, f, d);
      }
    }
    e.forEach(s.children(), a);
  }
  function o(s, a, u, l, f, d) {
    var h = { width: 0, height: 0, rank: d, borderType: a }, m = f[a][d - 1], g = t.addDummyNode(s, "border", h, u);
    f[a][d] = g, s.setParent(g, l), m && s.setEdge(m, g, { weight: 1 });
  }
  return dv;
}
var hv, kk;
function v8() {
  if (kk) return hv;
  kk = 1;
  var e = Ve();
  hv = {
    adjust: t,
    undo: n
  };
  function t(d) {
    var h = d.graph().rankdir.toLowerCase();
    (h === "lr" || h === "rl") && o(d);
  }
  function n(d) {
    var h = d.graph().rankdir.toLowerCase();
    (h === "bt" || h === "rl") && a(d), (h === "lr" || h === "rl") && (l(d), o(d));
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
      u(d.node(h));
    }), e.forEach(d.edges(), function(h) {
      var m = d.edge(h);
      e.forEach(m.points, u), e.has(m, "y") && u(m);
    });
  }
  function u(d) {
    d.y = -d.y;
  }
  function l(d) {
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
  return hv;
}
var pv, Rk;
function y8() {
  if (Rk) return pv;
  Rk = 1;
  var e = Ve();
  pv = t;
  function t(n) {
    var o = {}, s = e.filter(n.nodes(), function(d) {
      return !n.children(d).length;
    }), a = e.max(e.map(s, function(d) {
      return n.node(d).rank;
    })), u = e.map(e.range(a + 1), function() {
      return [];
    });
    function l(d) {
      if (!e.has(o, d)) {
        o[d] = !0;
        var h = n.node(d);
        u[h.rank].push(d), e.forEach(n.successors(d), l);
      }
    }
    var f = e.sortBy(s, function(d) {
      return n.node(d).rank;
    });
    return e.forEach(f, l), u;
  }
  return pv;
}
var mv, Nk;
function w8() {
  if (Nk) return mv;
  Nk = 1;
  var e = Ve();
  mv = t;
  function t(o, s) {
    for (var a = 0, u = 1; u < s.length; ++u)
      a += n(o, s[u - 1], s[u]);
    return a;
  }
  function n(o, s, a) {
    for (var u = e.zipObject(
      a,
      e.map(a, function(g, w) {
        return w;
      })
    ), l = e.flatten(e.map(s, function(g) {
      return e.sortBy(e.map(o.outEdges(g), function(w) {
        return { pos: u[w.w], weight: o.edge(w).weight };
      }), "pos");
    }), !0), f = 1; f < a.length; ) f <<= 1;
    var d = 2 * f - 1;
    f -= 1;
    var h = e.map(new Array(d), function() {
      return 0;
    }), m = 0;
    return e.forEach(l.forEach(function(g) {
      var w = g.pos + f;
      h[w] += g.weight;
      for (var E = 0; w > 0; )
        w % 2 && (E += h[w + 1]), w = w - 1 >> 1, h[w] += g.weight;
      m += g.weight * E;
    })), m;
  }
  return mv;
}
var gv, Pk;
function x8() {
  if (Pk) return gv;
  Pk = 1;
  var e = Ve();
  gv = t;
  function t(n, o) {
    return e.map(o, function(s) {
      var a = n.inEdges(s);
      if (a.length) {
        var u = e.reduce(a, function(l, f) {
          var d = n.edge(f), h = n.node(f.v);
          return {
            sum: l.sum + d.weight * h.order,
            weight: l.weight + d.weight
          };
        }, { sum: 0, weight: 0 });
        return {
          v: s,
          barycenter: u.sum / u.weight,
          weight: u.weight
        };
      } else
        return { v: s };
    });
  }
  return gv;
}
var vv, Tk;
function _8() {
  if (Tk) return vv;
  Tk = 1;
  var e = Ve();
  vv = t;
  function t(s, a) {
    var u = {};
    e.forEach(s, function(f, d) {
      var h = u[f.v] = {
        indegree: 0,
        in: [],
        out: [],
        vs: [f.v],
        i: d
      };
      e.isUndefined(f.barycenter) || (h.barycenter = f.barycenter, h.weight = f.weight);
    }), e.forEach(a.edges(), function(f) {
      var d = u[f.v], h = u[f.w];
      !e.isUndefined(d) && !e.isUndefined(h) && (h.indegree++, d.out.push(u[f.w]));
    });
    var l = e.filter(u, function(f) {
      return !f.indegree;
    });
    return n(l);
  }
  function n(s) {
    var a = [];
    function u(d) {
      return function(h) {
        h.merged || (e.isUndefined(h.barycenter) || e.isUndefined(d.barycenter) || h.barycenter >= d.barycenter) && o(d, h);
      };
    }
    function l(d) {
      return function(h) {
        h.in.push(d), --h.indegree === 0 && s.push(h);
      };
    }
    for (; s.length; ) {
      var f = s.pop();
      a.push(f), e.forEach(f.in.reverse(), u(f)), e.forEach(f.out, l(f));
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
    var u = 0, l = 0;
    s.weight && (u += s.barycenter * s.weight, l += s.weight), a.weight && (u += a.barycenter * a.weight, l += a.weight), s.vs = a.vs.concat(s.vs), s.barycenter = u / l, s.weight = l, s.i = Math.min(a.i, s.i), a.merged = !0;
  }
  return vv;
}
var yv, Ak;
function b8() {
  if (Ak) return yv;
  Ak = 1;
  var e = Ve(), t = Pt();
  yv = n;
  function n(a, u) {
    var l = t.partition(a, function(y) {
      return e.has(y, "barycenter");
    }), f = l.lhs, d = e.sortBy(l.rhs, function(y) {
      return -y.i;
    }), h = [], m = 0, g = 0, w = 0;
    f.sort(s(!!u)), w = o(h, d, w), e.forEach(f, function(y) {
      w += y.vs.length, h.push(y.vs), m += y.barycenter * y.weight, g += y.weight, w = o(h, d, w);
    });
    var E = { vs: e.flatten(h, !0) };
    return g && (E.barycenter = m / g, E.weight = g), E;
  }
  function o(a, u, l) {
    for (var f; u.length && (f = e.last(u)).i <= l; )
      u.pop(), a.push(f.vs), l++;
    return l;
  }
  function s(a) {
    return function(u, l) {
      return u.barycenter < l.barycenter ? -1 : u.barycenter > l.barycenter ? 1 : a ? l.i - u.i : u.i - l.i;
    };
  }
  return yv;
}
var wv, Ik;
function S8() {
  if (Ik) return wv;
  Ik = 1;
  var e = Ve(), t = x8(), n = _8(), o = b8();
  wv = s;
  function s(l, f, d, h) {
    var m = l.children(f), g = l.node(f), w = g ? g.borderLeft : void 0, E = g ? g.borderRight : void 0, y = {};
    w && (m = e.filter(m, function(N) {
      return N !== w && N !== E;
    }));
    var x = t(l, m);
    e.forEach(x, function(N) {
      if (l.children(N.v).length) {
        var T = s(l, N.v, d, h);
        y[N.v] = T, e.has(T, "barycenter") && u(N, T);
      }
    });
    var S = n(x, d);
    a(S, y);
    var C = o(S, h);
    if (w && (C.vs = e.flatten([w, C.vs, E], !0), l.predecessors(w).length)) {
      var _ = l.node(l.predecessors(w)[0]), k = l.node(l.predecessors(E)[0]);
      e.has(C, "barycenter") || (C.barycenter = 0, C.weight = 0), C.barycenter = (C.barycenter * C.weight + _.order + k.order) / (C.weight + 2), C.weight += 2;
    }
    return C;
  }
  function a(l, f) {
    e.forEach(l, function(d) {
      d.vs = e.flatten(d.vs.map(function(h) {
        return f[h] ? f[h].vs : h;
      }), !0);
    });
  }
  function u(l, f) {
    e.isUndefined(l.barycenter) ? (l.barycenter = f.barycenter, l.weight = f.weight) : (l.barycenter = (l.barycenter * l.weight + f.barycenter * f.weight) / (l.weight + f.weight), l.weight += f.weight);
  }
  return wv;
}
var xv, Mk;
function E8() {
  if (Mk) return xv;
  Mk = 1;
  var e = Ve(), t = vn().Graph;
  xv = n;
  function n(s, a, u) {
    var l = o(s), f = new t({ compound: !0 }).setGraph({ root: l }).setDefaultNodeLabel(function(d) {
      return s.node(d);
    });
    return e.forEach(s.nodes(), function(d) {
      var h = s.node(d), m = s.parent(d);
      (h.rank === a || h.minRank <= a && a <= h.maxRank) && (f.setNode(d), f.setParent(d, m || l), e.forEach(s[u](d), function(g) {
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
  return xv;
}
var _v, Ok;
function C8() {
  if (Ok) return _v;
  Ok = 1;
  var e = Ve();
  _v = t;
  function t(n, o, s) {
    var a = {}, u;
    e.forEach(s, function(l) {
      for (var f = n.parent(l), d, h; f; ) {
        if (d = n.parent(f), d ? (h = a[d], a[d] = f) : (h = u, u = f), h && h !== f) {
          o.setEdge(h, f);
          return;
        }
        f = d;
      }
    });
  }
  return _v;
}
var bv, Lk;
function k8() {
  if (Lk) return bv;
  Lk = 1;
  var e = Ve(), t = y8(), n = w8(), o = S8(), s = E8(), a = C8(), u = vn().Graph, l = Pt();
  bv = f;
  function f(g) {
    var w = l.maxRank(g), E = d(g, e.range(1, w + 1), "inEdges"), y = d(g, e.range(w - 1, -1, -1), "outEdges"), x = t(g);
    m(g, x);
    for (var S = Number.POSITIVE_INFINITY, C, _ = 0, k = 0; k < 4; ++_, ++k) {
      h(_ % 2 ? E : y, _ % 4 >= 2), x = l.buildLayerMatrix(g);
      var N = n(g, x);
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
    var E = new u();
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
  return bv;
}
var Sv, qk;
function R8() {
  if (qk) return Sv;
  qk = 1;
  var e = Ve(), t = vn().Graph, n = Pt();
  Sv = {
    positionX: E,
    findType1Conflicts: o,
    findType2Conflicts: s,
    addConflict: u,
    hasConflict: l,
    verticalAlignment: f,
    horizontalCompaction: d,
    alignCoordinates: g,
    findSmallestWidthAlignment: m,
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
            var Y = S.node($), I = Y.order;
            (I < A || L < I) && !(Y.dummy && S.node(H).dummy) && u(_, $, H);
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
          L.dummy && (L.order < D || L.order > G) && u(_, X, B);
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
  function u(S, C, _) {
    if (C > _) {
      var k = C;
      C = _, _ = k;
    }
    var N = S[C];
    N || (S[C] = N = {}), N[_] = !0;
  }
  function l(S, C, _) {
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
            T[G] === G && D < A[H] && !l(_, G, H) && (T[H] = G, T[G] = N[G] = N[H], D = A[H]);
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
  function m(S, C) {
    return e.minBy(e.values(C), function(_) {
      var k = Number.NEGATIVE_INFINITY, N = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(T, A) {
        var O = x(S, A) / 2;
        k = Math.max(T + O, k), N = Math.min(T - O, N);
      }), k - N;
    });
  }
  function g(S, C) {
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
    var C = n.buildLayerMatrix(S), _ = e.merge(
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
    var T = m(S, k);
    return g(k, T), w(k, S.graph().align);
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
  return Sv;
}
var Ev, Dk;
function N8() {
  if (Dk) return Ev;
  Dk = 1;
  var e = Ve(), t = Pt(), n = R8().positionX;
  Ev = o;
  function o(a) {
    a = t.asNonCompoundGraph(a), s(a), e.forEach(n(a), function(u, l) {
      a.node(l).x = u;
    });
  }
  function s(a) {
    var u = t.buildLayerMatrix(a), l = a.graph().ranksep, f = 0;
    e.forEach(u, function(d) {
      var h = e.max(e.map(d, function(m) {
        return a.node(m).height;
      }));
      e.forEach(d, function(m) {
        a.node(m).y = f + h / 2;
      }), f += h + l;
    });
  }
  return Ev;
}
var Cv, jk;
function P8() {
  if (jk) return Cv;
  jk = 1;
  var e = Ve(), t = c8(), n = f8(), o = h8(), s = Pt().normalizeRanks, a = p8(), u = Pt().removeEmptyRanks, l = m8(), f = g8(), d = v8(), h = k8(), m = N8(), g = Pt(), w = vn().Graph;
  Cv = E;
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
      l.run(F);
    }), Z("    rank", function() {
      o(g.asNonCompoundGraph(F));
    }), Z("    injectEdgeLabelProxies", function() {
      B(F);
    }), Z("    removeEmptyRanks", function() {
      u(F);
    }), Z("    nestingGraph.cleanup", function() {
      l.cleanup(F);
    }), Z("    normalizeRanks", function() {
      s(F);
    }), Z("    assignRankMinMax", function() {
      V(F);
    }), Z("    removeEdgeLabelProxies", function() {
      X(F);
    }), Z("    normalize.run", function() {
      n.run(F);
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
      I(F);
    }), Z("    normalize.undo", function() {
      n.undo(F);
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
      var _e = pe.x, ge = pe.y, Ne = pe.width, Ee = pe.height;
      Z = Math.min(Z, _e - Ne / 2), ee = Math.max(ee, _e + Ne / 2), K = Math.min(K, ge - Ee / 2), te = Math.max(te, ge + Ee / 2);
    }
    e.forEach(F.nodes(), function(pe) {
      de(F.node(pe));
    }), e.forEach(F.edges(), function(pe) {
      var _e = F.edge(pe);
      e.has(_e, "x") && de(_e);
    }), Z -= ae, K -= ce, e.forEach(F.nodes(), function(pe) {
      var _e = F.node(pe);
      _e.x -= Z, _e.y -= K;
    }), e.forEach(F.edges(), function(pe) {
      var _e = F.edge(pe);
      e.forEach(_e.points, function(ge) {
        ge.x -= Z, ge.y -= K;
      }), e.has(_e, "x") && (_e.x -= Z), e.has(_e, "y") && (_e.y -= K);
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
  function I(F) {
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
  return Cv;
}
var kv, zk;
function T8() {
  if (zk) return kv;
  zk = 1;
  var e = Ve(), t = Pt(), n = vn().Graph;
  kv = {
    debugOrdering: o
  };
  function o(s) {
    var a = t.buildLayerMatrix(s), u = new n({ compound: !0, multigraph: !0 }).setGraph({});
    return e.forEach(s.nodes(), function(l) {
      u.setNode(l, { label: l }), u.setParent(l, "layer" + s.node(l).rank);
    }), e.forEach(s.edges(), function(l) {
      u.setEdge(l.v, l.w, {}, l.name);
    }), e.forEach(a, function(l, f) {
      var d = "layer" + f;
      u.setNode(d, { rank: "same" }), e.reduce(l, function(h, m) {
        return u.setEdge(h, m, { style: "invis" }), m;
      });
    }), u;
  }
  return kv;
}
var Rv, Fk;
function A8() {
  return Fk || (Fk = 1, Rv = "0.8.5"), Rv;
}
var Nv, $k;
function I8() {
  return $k || ($k = 1, Nv = {
    graphlib: vn(),
    layout: P8(),
    debug: T8(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: A8()
  }), Nv;
}
I8();
R.createContext(null);
const CA = R.createContext(null), M8 = () => {
  const e = R.useContext(CA);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
};
class e0 {
  constructor(t) {
    Lf(this, "schema");
    if (this.schema = t, !t.gridLayout)
      throw new Error("Grid layout configuration is required. Please provide 'gridLayout' in schema.");
  }
  /**
   * Build header configuration and pre-render header element
   */
  buildHeaderConfig() {
    const { header: t, label: n, icon: o } = this.schema, s = (t == null ? void 0 : t.show) !== !1, a = (t == null ? void 0 : t.icon) || o;
    return {
      show: s,
      element: s ? /* @__PURE__ */ M.jsx(
        m5,
        {
          className: Fe(
            "p-2.5 space-y-0 px-2.5",
            (t == null ? void 0 : t.className) || "bg-primary text-primary-foreground"
          ),
          style: {
            backgroundColor: t == null ? void 0 : t.bgColor,
            color: t == null ? void 0 : t.textColor
          },
          children: /* @__PURE__ */ M.jsxs(g5, { className: "text-sm font-semibold flex items-center gap-2", children: [
            a && /* @__PURE__ */ M.jsx("span", { className: "text-base", children: a }),
            n
          ] })
        }
      ) : null
    };
  }
  /**
   * Build footer configuration and pre-render footer element
   */
  buildFooterConfig() {
    const { footer: t } = this.schema, n = (t == null ? void 0 : t.show) === !0;
    return {
      show: n,
      element: n && t ? /* @__PURE__ */ M.jsx(
        v5,
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
    const { style: t } = this.schema, n = {};
    t != null && t.minWidth && (n.minWidth = typeof t.minWidth == "number" ? `${t.minWidth}px` : t.minWidth), t != null && t.maxWidth && (n.maxWidth = typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth), t != null && t.borderRadius && (n.borderRadius = t.borderRadius);
    const o = t != null && t.shadow ? `shadow-${t.shadow}` : "shadow-md";
    return {
      style: n,
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
    const { schema: t } = this, n = this.buildHeaderConfig(), o = this.buildFooterConfig(), s = this.buildStyleConfig(), a = ({ id: u, data: l, selected: f }) => {
      const d = l, h = M8(), m = R.useCallback((E, y) => {
        h((x) => ({
          ...x,
          [u]: { ...x[u], [E]: y }
        }));
      }, [u, h]), g = d.gridLayout || t.gridLayout;
      if (!g)
        throw new Error(`Node ${u}: Grid layout configuration is missing`);
      const w = R.useMemo(() => ({
        nodeId: u,
        nodeData: d,
        onValueChange: m
      }), [u, d, m]);
      return /* @__PURE__ */ M.jsxs(
        p5,
        {
          className: Fe(
            s.className,
            f && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: s.style,
          children: [
            n.element,
            /* @__PURE__ */ M.jsx(CT.Provider, { value: w, children: /* @__PURE__ */ M.jsx(d5, { layout: g.layout }) }),
            o.element
          ]
        }
      );
    };
    return R.memo(
      a,
      (u, l) => u.id === l.id && u.selected === l.selected && u.data.values === l.data.values
    );
  }
  /**
   * Static helper to build a component from schema in one call
   */
  static buildComponent(t) {
    return new e0(t).buildComponent();
  }
}
function O8() {
  const [e] = $f("id"), [t] = $f("data"), [n] = $f("selected"), o = e ?? "json-schema-node", s = t ?? {}, a = n ?? !1, u = R.useMemo(() => {
    try {
      return e0.buildComponent(s);
    } catch (f) {
      return console.error("Failed to build node component:", f), () => /* @__PURE__ */ M.jsxs("div", { style: { padding: "10px", border: "1px solid red", borderRadius: "4px" }, children: [
        /* @__PURE__ */ M.jsx("strong", { children: "Error building node:" }),
        /* @__PURE__ */ M.jsx("pre", { children: String(f) })
      ] });
    }
  }, [s]), [, l] = R.useState({});
  return /* @__PURE__ */ M.jsx(CN, { children: /* @__PURE__ */ M.jsx(CA.Provider, { value: l, children: /* @__PURE__ */ M.jsx("div", { style: { padding: "10px" }, children: /* @__PURE__ */ M.jsx(
    u,
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
const L8 = y2(O8), D8 = { render: L8 };
export {
  D8 as default
};
//# sourceMappingURL=json_schema_node_entry.js.map
