var hM = Object.defineProperty;
var pM = (e, t, n) => t in e ? hM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var to = (e, t, n) => pM(e, typeof t != "symbol" ? t + "" : t, n);
function gM(e, t) {
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
var Cl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var id = { exports: {} }, xs = {}, sd = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function mM() {
  if (e1) return Ie;
  e1 = 1;
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
  function x(j, W, ie) {
    this.props = j, this.context = W, this.refs = y, this.updater = ie || v;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(j, W) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, W, "setState");
  }, x.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function b() {
  }
  b.prototype = x.prototype;
  function C(j, W, ie) {
    this.props = j, this.context = W, this.refs = y, this.updater = ie || v;
  }
  var _ = C.prototype = new b();
  _.constructor = C, E(_, x.prototype), _.isPureReactComponent = !0;
  var N = Array.isArray, P = Object.prototype.hasOwnProperty, T = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(j, W, ie) {
    var F, Z = {}, ee = null, Y = null;
    if (W != null) for (F in W.ref !== void 0 && (Y = W.ref), W.key !== void 0 && (ee = "" + W.key), W) P.call(W, F) && !A.hasOwnProperty(F) && (Z[F] = W[F]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (j && j.defaultProps) for (F in te = j.defaultProps, te) Z[F] === void 0 && (Z[F] = te[F]);
    return { $$typeof: e, type: j, key: ee, ref: Y, props: Z, _owner: T.current };
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
    var Y = !1;
    if (j === null) Y = !0;
    else switch (ee) {
      case "string":
      case "number":
        Y = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case e:
          case t:
            Y = !0;
        }
    }
    if (Y) return Y = j, Z = Z(Y), j = F === "" ? "." + X(Y, 0) : F, N(Z) ? (ie = "", j != null && (ie = j.replace(V, "$&/") + "/"), L(Z, W, ie, "", function(ae) {
      return ae;
    })) : Z != null && (G(Z) && (Z = D(Z, ie + (!Z.key || Y && Y.key === Z.key ? "" : ("" + Z.key).replace(V, "$&/") + "/") + j)), W.push(Z)), 1;
    if (Y = 0, F = F === "" ? "." : F + ":", N(j)) for (var te = 0; te < j.length; te++) {
      ee = j[te];
      var se = F + X(ee, te);
      Y += L(ee, W, ie, se, Z);
    }
    else if (se = m(j), typeof se == "function") for (j = se.call(j), te = 0; !(ee = j.next()).done; ) ee = ee.value, se = F + X(ee, te++), Y += L(ee, W, ie, se, Z);
    else if (ee === "object") throw W = String(j), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return Y;
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
  var K = { current: null }, M = { transition: null }, q = { ReactCurrentDispatcher: K, ReactCurrentBatchConfig: M, ReactCurrentOwner: T };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: H, forEach: function(j, W, ie) {
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
  } }, Ie.Component = x, Ie.Fragment = n, Ie.Profiler = i, Ie.PureComponent = C, Ie.StrictMode = o, Ie.Suspense = f, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, Ie.act = Q, Ie.cloneElement = function(j, W, ie) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var F = E({}, j.props), Z = j.key, ee = j.ref, Y = j._owner;
    if (W != null) {
      if (W.ref !== void 0 && (ee = W.ref, Y = T.current), W.key !== void 0 && (Z = "" + W.key), j.type && j.type.defaultProps) var te = j.type.defaultProps;
      for (se in W) P.call(W, se) && !A.hasOwnProperty(se) && (F[se] = W[se] === void 0 && te !== void 0 ? te[se] : W[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) F.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      F.children = te;
    }
    return { $$typeof: e, type: j.type, key: Z, ref: ee, props: F, _owner: Y };
  }, Ie.createContext = function(j) {
    return j = { $$typeof: l, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: a, _context: j }, j.Consumer = j;
  }, Ie.createElement = O, Ie.createFactory = function(j) {
    var W = O.bind(null, j);
    return W.type = j, W;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(j) {
    return { $$typeof: u, render: j };
  }, Ie.isValidElement = G, Ie.lazy = function(j) {
    return { $$typeof: h, _payload: { _status: -1, _result: j }, _init: $ };
  }, Ie.memo = function(j, W) {
    return { $$typeof: d, type: j, compare: W === void 0 ? null : W };
  }, Ie.startTransition = function(j) {
    var W = M.transition;
    M.transition = {};
    try {
      j();
    } finally {
      M.transition = W;
    }
  }, Ie.unstable_act = Q, Ie.useCallback = function(j, W) {
    return K.current.useCallback(j, W);
  }, Ie.useContext = function(j) {
    return K.current.useContext(j);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(j) {
    return K.current.useDeferredValue(j);
  }, Ie.useEffect = function(j, W) {
    return K.current.useEffect(j, W);
  }, Ie.useId = function() {
    return K.current.useId();
  }, Ie.useImperativeHandle = function(j, W, ie) {
    return K.current.useImperativeHandle(j, W, ie);
  }, Ie.useInsertionEffect = function(j, W) {
    return K.current.useInsertionEffect(j, W);
  }, Ie.useLayoutEffect = function(j, W) {
    return K.current.useLayoutEffect(j, W);
  }, Ie.useMemo = function(j, W) {
    return K.current.useMemo(j, W);
  }, Ie.useReducer = function(j, W, ie) {
    return K.current.useReducer(j, W, ie);
  }, Ie.useRef = function(j) {
    return K.current.useRef(j);
  }, Ie.useState = function(j) {
    return K.current.useState(j);
  }, Ie.useSyncExternalStore = function(j, W, ie) {
    return K.current.useSyncExternalStore(j, W, ie);
  }, Ie.useTransition = function() {
    return K.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var t1;
function Ys() {
  return t1 || (t1 = 1, sd.exports = mM()), sd.exports;
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
var n1;
function vM() {
  if (n1) return xs;
  n1 = 1;
  var e = Ys(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, p = {}, m = null, v = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (p[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: v, props: p, _owner: i.current };
  }
  return xs.Fragment = n, xs.jsx = l, xs.jsxs = l, xs;
}
var r1;
function yM() {
  return r1 || (r1 = 1, id.exports = vM()), id.exports;
}
var R = yM(), k = Ys();
const kn = /* @__PURE__ */ _u(k), Cy = /* @__PURE__ */ gM({
  __proto__: null,
  default: kn
}, [k]);
var kl = {}, ad = { exports: {} }, Nt = {}, ld = { exports: {} }, ud = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o1;
function wM() {
  return o1 || (o1 = 1, (function(e) {
    function t(M, q) {
      var Q = M.length;
      M.push(q);
      e: for (; 0 < Q; ) {
        var j = Q - 1 >>> 1, W = M[j];
        if (0 < i(W, q)) M[j] = q, M[Q] = W, Q = j;
        else break e;
      }
    }
    function n(M) {
      return M.length === 0 ? null : M[0];
    }
    function o(M) {
      if (M.length === 0) return null;
      var q = M[0], Q = M.pop();
      if (Q !== q) {
        M[0] = Q;
        e: for (var j = 0, W = M.length, ie = W >>> 1; j < ie; ) {
          var F = 2 * (j + 1) - 1, Z = M[F], ee = F + 1, Y = M[ee];
          if (0 > i(Z, Q)) ee < W && 0 > i(Y, Z) ? (M[j] = Y, M[ee] = Q, j = ee) : (M[j] = Z, M[F] = Q, j = F);
          else if (ee < W && 0 > i(Y, Q)) M[j] = Y, M[ee] = Q, j = ee;
          else break e;
        }
      }
      return q;
    }
    function i(M, q) {
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
    var f = [], d = [], h = 1, p = null, m = 3, v = !1, E = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(M) {
      for (var q = n(d); q !== null; ) {
        if (q.callback === null) o(d);
        else if (q.startTime <= M) o(d), q.sortIndex = q.expirationTime, t(f, q);
        else break;
        q = n(d);
      }
    }
    function N(M) {
      if (y = !1, _(M), !E) if (n(f) !== null) E = !0, $(P);
      else {
        var q = n(d);
        q !== null && K(N, q.startTime - M);
      }
    }
    function P(M, q) {
      E = !1, y && (y = !1, b(O), O = -1), v = !0;
      var Q = m;
      try {
        for (_(q), p = n(f); p !== null && (!(p.expirationTime > q) || M && !B()); ) {
          var j = p.callback;
          if (typeof j == "function") {
            p.callback = null, m = p.priorityLevel;
            var W = j(p.expirationTime <= q);
            q = e.unstable_now(), typeof W == "function" ? p.callback = W : p === n(f) && o(f), _(q);
          } else o(f);
          p = n(f);
        }
        if (p !== null) var ie = !0;
        else {
          var F = n(d);
          F !== null && K(N, F.startTime - q), ie = !1;
        }
        return ie;
      } finally {
        p = null, m = Q, v = !1;
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
    function K(M, q) {
      O = x(function() {
        M(e.unstable_now());
      }, q);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      E || v || (E = !0, $(P));
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
      return W = Q + W, M = { id: h++, callback: q, priorityLevel: M, startTime: Q, expirationTime: W, sortIndex: -1 }, Q > j ? (M.sortIndex = Q, t(d, M), n(f) === null && M === n(d) && (y ? (b(O), O = -1) : y = !0, K(N, Q - j))) : (M.sortIndex = W, t(f, M), E || v || (E = !0, $(P))), M;
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
  })(ud)), ud;
}
var i1;
function xM() {
  return i1 || (i1 = 1, ld.exports = wM()), ld.exports;
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
var s1;
function _M() {
  if (s1) return Nt;
  s1 = 1;
  var e = Ys(), t = xM();
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
  function y(r, s, c, g, w, S, I) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = g, this.attributeNamespace = w, this.mustUseProperty = c, this.propertyName = r, this.type = s, this.sanitizeURL = S, this.removeEmptyString = I;
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
    (w !== null ? w.type !== 0 : g || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (E(s, c, w, g) && (c = null), g || w === null ? m(s) && (c === null ? r.removeAttribute(s) : r.setAttribute(s, "" + c)) : w.mustUseProperty ? r[w.propertyName] = c === null ? w.type === 3 ? !1 : "" : c : (s = w.attributeName, g = w.attributeNamespace, c === null ? r.removeAttribute(s) : (w = w.type, c = w === 3 || w === 4 && c === !0 ? "" : "" + c, g ? r.setAttributeNS(g, s, c) : r.setAttribute(s, c))));
  }
  var N = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), T = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), B = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function q(r) {
    return r === null || typeof r != "object" ? null : (r = M && r[M] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Q = Object.assign, j;
  function W(r) {
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
  function F(r, s) {
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
`), S = g.stack.split(`
`), I = w.length - 1, z = S.length - 1; 1 <= I && 0 <= z && w[I] !== S[z]; ) z--;
        for (; 1 <= I && 0 <= z; I--, z--) if (w[I] !== S[z]) {
          if (I !== 1 || z !== 1)
            do
              if (I--, z--, 0 > z || w[I] !== S[z]) {
                var U = `
` + w[I].replace(" at new ", " at ");
                return r.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", r.displayName)), U;
              }
            while (1 <= I && 0 <= z);
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
        var s = r.render;
        return r = r.displayName, r || (r = s.displayName || s.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case H:
        return s = r.displayName || null, s !== null ? s : ee(r.type) || "Memo";
      case $:
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
      var w = c.get, S = c.set;
      return Object.defineProperty(r, s, { configurable: !0, get: function() {
        return w.call(this);
      }, set: function(I) {
        g = "" + I, S.call(this, I);
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
  function be(r, s) {
    var c = s.checked;
    return Q({}, s, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c ?? r._wrapperState.initialChecked });
  }
  function me(r, s) {
    var c = s.defaultValue == null ? "" : s.defaultValue, g = s.checked != null ? s.checked : s.defaultChecked;
    c = te(s.value != null ? s.value : c), r._wrapperState = { initialChecked: g, initialValue: c, controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null };
  }
  function Re(r, s) {
    s = s.checked, s != null && _(r, "checked", s, !1);
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
  function en(r, s) {
    var c = te(s.value), g = te(s.defaultValue);
    c != null && (c = "" + c, c !== r.value && (r.value = c), s.defaultValue == null && r.defaultValue !== c && (r.defaultValue = c)), g != null && (r.defaultValue = "" + g);
  }
  function $t(r) {
    var s = r.textContent;
    s === r._wrapperState.initialValue && s !== "" && s !== null && (r.value = s);
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
  function Bt(r, s) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? tn(s) : r === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var _t, Dr = (function(r) {
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
  }, bo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qn).forEach(function(r) {
    bo.forEach(function(s) {
      s = s + r.charAt(0).toUpperCase() + r.substring(1), qn[s] = qn[r];
    });
  });
  function Tt(r, s, c) {
    return s == null || typeof s == "boolean" || s === "" ? "" : c || typeof s != "number" || s === 0 || qn.hasOwnProperty(r) && qn[r] ? ("" + s).trim() : s + "px";
  }
  function Ht(r, s) {
    r = r.style;
    for (var c in s) if (s.hasOwnProperty(c)) {
      var g = c.indexOf("--") === 0, w = Tt(c, s[c], g);
      c === "float" && (c = "cssFloat"), g ? r.setProperty(c, w) : r[c] = w;
    }
  }
  var dc = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ai(r, s) {
    if (s) {
      if (dc[r] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(n(60));
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(n(62));
    }
  }
  function Ii(r, s) {
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
  var Mi = null;
  function Oi(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var Li = null, nr = null, rr = null;
  function fa(r) {
    if (r = is(r)) {
      if (typeof Li != "function") throw Error(n(280));
      var s = r.stateNode;
      s && (s = Fa(s), Li(r.stateNode, r.type, s));
    }
  }
  function da(r) {
    nr ? rr ? rr.push(r) : rr = [r] : nr = r;
  }
  function ha() {
    if (nr) {
      var r = nr, s = rr;
      if (rr = nr = null, fa(r), s) for (r = 0; r < s.length; r++) fa(s[r]);
    }
  }
  function pa(r, s) {
    return r(s);
  }
  function ga() {
  }
  var ji = !1;
  function ma(r, s, c) {
    if (ji) return r(s, c);
    ji = !0;
    try {
      return pa(r, s, c);
    } finally {
      ji = !1, (nr !== null || rr !== null) && (ga(), ha());
    }
  }
  function qr(r, s) {
    var c = r.stateNode;
    if (c === null) return null;
    var g = Fa(c);
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
  var Di = !1;
  if (u) try {
    var zr = {};
    Object.defineProperty(zr, "passive", { get: function() {
      Di = !0;
    } }), window.addEventListener("test", zr, zr), window.removeEventListener("test", zr, zr);
  } catch {
    Di = !1;
  }
  function hc(r, s, c, g, w, S, I, z, U) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Fr = !1, So = null, Eo = !1, qi = null, pc = { onError: function(r) {
    Fr = !0, So = r;
  } };
  function gc(r, s, c, g, w, S, I, z, U) {
    Fr = !1, So = null, hc.apply(pc, arguments);
  }
  function mc(r, s, c, g, w, S, I, z, U) {
    if (gc.apply(this, arguments), Fr) {
      if (Fr) {
        var oe = So;
        Fr = !1, So = null;
      } else throw Error(n(198));
      Eo || (Eo = !0, qi = oe);
    }
  }
  function xn(r) {
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
  function zi(r) {
    if (r.tag === 13) {
      var s = r.memoizedState;
      if (s === null && (r = r.alternate, r !== null && (s = r.memoizedState)), s !== null) return s.dehydrated;
    }
    return null;
  }
  function Fi(r) {
    if (xn(r) !== r) throw Error(n(188));
  }
  function vc(r) {
    var s = r.alternate;
    if (!s) {
      if (s = xn(r), s === null) throw Error(n(188));
      return s !== r ? null : r;
    }
    for (var c = r, g = s; ; ) {
      var w = c.return;
      if (w === null) break;
      var S = w.alternate;
      if (S === null) {
        if (g = w.return, g !== null) {
          c = g;
          continue;
        }
        break;
      }
      if (w.child === S.child) {
        for (S = w.child; S; ) {
          if (S === c) return Fi(w), r;
          if (S === g) return Fi(w), s;
          S = S.sibling;
        }
        throw Error(n(188));
      }
      if (c.return !== g.return) c = w, g = S;
      else {
        for (var I = !1, z = w.child; z; ) {
          if (z === c) {
            I = !0, c = w, g = S;
            break;
          }
          if (z === g) {
            I = !0, g = w, c = S;
            break;
          }
          z = z.sibling;
        }
        if (!I) {
          for (z = S.child; z; ) {
            if (z === c) {
              I = !0, c = S, g = w;
              break;
            }
            if (z === g) {
              I = !0, g = S, c = w;
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
    return r = vc(r), r !== null ? ya(r) : null;
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
  var wa = t.unstable_scheduleCallback, xa = t.unstable_cancelCallback, yc = t.unstable_shouldYield, _a = t.unstable_requestPaint, Ke = t.unstable_now, wc = t.unstable_getCurrentPriorityLevel, $i = t.unstable_ImmediatePriority, ba = t.unstable_UserBlockingPriority, Co = t.unstable_NormalPriority, xc = t.unstable_LowPriority, Sa = t.unstable_IdlePriority, $r = null, Wt = null;
  function _c(r) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot($r, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : Ec, bc = Math.log, Sc = Math.LN2;
  function Ec(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (bc(r) / Sc | 0) | 0;
  }
  var ko = 64, No = 4194304;
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
  function Ro(r, s) {
    var c = r.pendingLanes;
    if (c === 0) return 0;
    var g = 0, w = r.suspendedLanes, S = r.pingedLanes, I = c & 268435455;
    if (I !== 0) {
      var z = I & ~w;
      z !== 0 ? g = _n(z) : (S &= I, S !== 0 && (g = _n(S)));
    } else I = c & ~w, I !== 0 ? g = _n(I) : S !== 0 && (g = _n(S));
    if (g === 0) return 0;
    if (s !== 0 && s !== g && (s & w) === 0 && (w = g & -g, S = s & -s, w >= S || w === 16 && (S & 4194240) !== 0)) return s;
    if ((g & 4) !== 0 && (g |= c & 16), s = r.entangledLanes, s !== 0) for (r = r.entanglements, s &= g; 0 < s; ) c = 31 - At(s), w = 1 << c, g |= r[c], s &= ~w;
    return g;
  }
  function Cc(r, s) {
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
  function kc(r, s) {
    for (var c = r.suspendedLanes, g = r.pingedLanes, w = r.expirationTimes, S = r.pendingLanes; 0 < S; ) {
      var I = 31 - At(S), z = 1 << I, U = w[I];
      U === -1 ? ((z & c) === 0 || (z & g) !== 0) && (w[I] = Cc(z, s)) : U <= s && (r.expiredLanes |= z), S &= ~z;
    }
  }
  function Br(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function Ea() {
    var r = ko;
    return ko <<= 1, (ko & 4194240) === 0 && (ko = 64), r;
  }
  function Bi(r) {
    for (var s = [], c = 0; 31 > c; c++) s.push(r);
    return s;
  }
  function or(r, s, c) {
    r.pendingLanes |= s, s !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, s = 31 - At(s), r[s] = c;
  }
  function OI(r, s) {
    var c = r.pendingLanes & ~s;
    r.pendingLanes = s, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= s, r.mutableReadLanes &= s, r.entangledLanes &= s, s = r.entanglements;
    var g = r.eventTimes;
    for (r = r.expirationTimes; 0 < c; ) {
      var w = 31 - At(c), S = 1 << w;
      s[w] = 0, g[w] = -1, r[w] = -1, c &= ~S;
    }
  }
  function Nc(r, s) {
    var c = r.entangledLanes |= s;
    for (r = r.entanglements; c; ) {
      var g = 31 - At(c), w = 1 << g;
      w & s | r[g] & s && (r[g] |= s), c &= ~w;
    }
  }
  var qe = 0;
  function I0(r) {
    return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var M0, Rc, O0, L0, j0, Pc = !1, Ca = [], ir = null, sr = null, ar = null, Vi = /* @__PURE__ */ new Map(), Hi = /* @__PURE__ */ new Map(), lr = [], LI = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function D0(r, s) {
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
        Vi.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hi.delete(s.pointerId);
    }
  }
  function Wi(r, s, c, g, w, S) {
    return r === null || r.nativeEvent !== S ? (r = { blockedOn: s, domEventName: c, eventSystemFlags: g, nativeEvent: S, targetContainers: [w] }, s !== null && (s = is(s), s !== null && Rc(s)), r) : (r.eventSystemFlags |= g, s = r.targetContainers, w !== null && s.indexOf(w) === -1 && s.push(w), r);
  }
  function jI(r, s, c, g, w) {
    switch (s) {
      case "focusin":
        return ir = Wi(ir, r, s, c, g, w), !0;
      case "dragenter":
        return sr = Wi(sr, r, s, c, g, w), !0;
      case "mouseover":
        return ar = Wi(ar, r, s, c, g, w), !0;
      case "pointerover":
        var S = w.pointerId;
        return Vi.set(S, Wi(Vi.get(S) || null, r, s, c, g, w)), !0;
      case "gotpointercapture":
        return S = w.pointerId, Hi.set(S, Wi(Hi.get(S) || null, r, s, c, g, w)), !0;
    }
    return !1;
  }
  function q0(r) {
    var s = Vr(r.target);
    if (s !== null) {
      var c = xn(s);
      if (c !== null) {
        if (s = c.tag, s === 13) {
          if (s = zi(c), s !== null) {
            r.blockedOn = s, j0(r.priority, function() {
              O0(c);
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
      var c = Ac(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (c === null) {
        c = r.nativeEvent;
        var g = new c.constructor(c.type, c);
        Mi = g, c.target.dispatchEvent(g), Mi = null;
      } else return s = is(c), s !== null && Rc(s), r.blockedOn = c, !1;
      s.shift();
    }
    return !0;
  }
  function z0(r, s, c) {
    ka(r) && c.delete(s);
  }
  function DI() {
    Pc = !1, ir !== null && ka(ir) && (ir = null), sr !== null && ka(sr) && (sr = null), ar !== null && ka(ar) && (ar = null), Vi.forEach(z0), Hi.forEach(z0);
  }
  function Ui(r, s) {
    r.blockedOn === s && (r.blockedOn = null, Pc || (Pc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, DI)));
  }
  function Gi(r) {
    function s(w) {
      return Ui(w, r);
    }
    if (0 < Ca.length) {
      Ui(Ca[0], r);
      for (var c = 1; c < Ca.length; c++) {
        var g = Ca[c];
        g.blockedOn === r && (g.blockedOn = null);
      }
    }
    for (ir !== null && Ui(ir, r), sr !== null && Ui(sr, r), ar !== null && Ui(ar, r), Vi.forEach(s), Hi.forEach(s), c = 0; c < lr.length; c++) g = lr[c], g.blockedOn === r && (g.blockedOn = null);
    for (; 0 < lr.length && (c = lr[0], c.blockedOn === null); ) q0(c), c.blockedOn === null && lr.shift();
  }
  var Po = N.ReactCurrentBatchConfig, Na = !0;
  function qI(r, s, c, g) {
    var w = qe, S = Po.transition;
    Po.transition = null;
    try {
      qe = 1, Tc(r, s, c, g);
    } finally {
      qe = w, Po.transition = S;
    }
  }
  function zI(r, s, c, g) {
    var w = qe, S = Po.transition;
    Po.transition = null;
    try {
      qe = 4, Tc(r, s, c, g);
    } finally {
      qe = w, Po.transition = S;
    }
  }
  function Tc(r, s, c, g) {
    if (Na) {
      var w = Ac(r, s, c, g);
      if (w === null) Kc(r, s, g, Ra, c), D0(r, g);
      else if (jI(w, r, s, c, g)) g.stopPropagation();
      else if (D0(r, g), s & 4 && -1 < LI.indexOf(r)) {
        for (; w !== null; ) {
          var S = is(w);
          if (S !== null && M0(S), S = Ac(r, s, c, g), S === null && Kc(r, s, g, Ra, c), S === w) break;
          w = S;
        }
        w !== null && g.stopPropagation();
      } else Kc(r, s, g, null, c);
    }
  }
  var Ra = null;
  function Ac(r, s, c, g) {
    if (Ra = null, r = Oi(g), r = Vr(r), r !== null) if (s = xn(r), s === null) r = null;
    else if (c = s.tag, c === 13) {
      if (r = zi(s), r !== null) return r;
      r = null;
    } else if (c === 3) {
      if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
      r = null;
    } else s !== r && (r = null);
    return Ra = r, null;
  }
  function F0(r) {
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
        switch (wc()) {
          case $i:
            return 1;
          case ba:
            return 4;
          case Co:
          case xc:
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
  var ur = null, Ic = null, Pa = null;
  function $0() {
    if (Pa) return Pa;
    var r, s = Ic, c = s.length, g, w = "value" in ur ? ur.value : ur.textContent, S = w.length;
    for (r = 0; r < c && s[r] === w[r]; r++) ;
    var I = c - r;
    for (g = 1; g <= I && s[c - g] === w[S - g]; g++) ;
    return Pa = w.slice(r, 1 < g ? 1 - g : void 0);
  }
  function Ta(r) {
    var s = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && s === 13 && (r = 13)) : r = s, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Aa() {
    return !0;
  }
  function B0() {
    return !1;
  }
  function It(r) {
    function s(c, g, w, S, I) {
      this._reactName = c, this._targetInst = w, this.type = g, this.nativeEvent = S, this.target = I, this.currentTarget = null;
      for (var z in r) r.hasOwnProperty(z) && (c = r[z], this[z] = c ? c(S) : S[z]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? Aa : B0, this.isPropagationStopped = B0, this;
    }
    return Q(s.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = Aa);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = Aa);
    }, persist: function() {
    }, isPersistent: Aa }), s;
  }
  var To = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
    return r.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Mc = It(To), Ki = Q({}, To, { view: 0, detail: 0 }), FI = It(Ki), Oc, Lc, Yi, Ia = Q({}, Ki, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dc, button: 0, buttons: 0, relatedTarget: function(r) {
    return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
  }, movementX: function(r) {
    return "movementX" in r ? r.movementX : (r !== Yi && (Yi && r.type === "mousemove" ? (Oc = r.screenX - Yi.screenX, Lc = r.screenY - Yi.screenY) : Lc = Oc = 0, Yi = r), Oc);
  }, movementY: function(r) {
    return "movementY" in r ? r.movementY : Lc;
  } }), V0 = It(Ia), $I = Q({}, Ia, { dataTransfer: 0 }), BI = It($I), VI = Q({}, Ki, { relatedTarget: 0 }), jc = It(VI), HI = Q({}, To, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), WI = It(HI), UI = Q({}, To, { clipboardData: function(r) {
    return "clipboardData" in r ? r.clipboardData : window.clipboardData;
  } }), GI = It(UI), KI = Q({}, To, { data: 0 }), H0 = It(KI), YI = {
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
  }, XI = {
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
  }, QI = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ZI(r) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(r) : (r = QI[r]) ? !!s[r] : !1;
  }
  function Dc() {
    return ZI;
  }
  var JI = Q({}, Ki, { key: function(r) {
    if (r.key) {
      var s = YI[r.key] || r.key;
      if (s !== "Unidentified") return s;
    }
    return r.type === "keypress" ? (r = Ta(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? XI[r.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dc, charCode: function(r) {
    return r.type === "keypress" ? Ta(r) : 0;
  }, keyCode: function(r) {
    return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  }, which: function(r) {
    return r.type === "keypress" ? Ta(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  } }), e2 = It(JI), t2 = Q({}, Ia, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), W0 = It(t2), n2 = Q({}, Ki, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dc }), r2 = It(n2), o2 = Q({}, To, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), i2 = It(o2), s2 = Q({}, Ia, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), a2 = It(s2), l2 = [9, 13, 27, 32], qc = u && "CompositionEvent" in window, Xi = null;
  u && "documentMode" in document && (Xi = document.documentMode);
  var u2 = u && "TextEvent" in window && !Xi, U0 = u && (!qc || Xi && 8 < Xi && 11 >= Xi), G0 = " ", K0 = !1;
  function Y0(r, s) {
    switch (r) {
      case "keyup":
        return l2.indexOf(s.keyCode) !== -1;
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
  function X0(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Ao = !1;
  function c2(r, s) {
    switch (r) {
      case "compositionend":
        return X0(s);
      case "keypress":
        return s.which !== 32 ? null : (K0 = !0, G0);
      case "textInput":
        return r = s.data, r === G0 && K0 ? null : r;
      default:
        return null;
    }
  }
  function f2(r, s) {
    if (Ao) return r === "compositionend" || !qc && Y0(r, s) ? (r = $0(), Pa = Ic = ur = null, Ao = !1, r) : null;
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
        return U0 && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var d2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Q0(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s === "input" ? !!d2[r.type] : s === "textarea";
  }
  function Z0(r, s, c, g) {
    da(g), s = Da(s, "onChange"), 0 < s.length && (c = new Mc("onChange", "change", null, c, g), r.push({ event: c, listeners: s }));
  }
  var Qi = null, Zi = null;
  function h2(r) {
    mw(r, 0);
  }
  function Ma(r) {
    var s = jo(r);
    if (de(s)) return r;
  }
  function p2(r, s) {
    if (r === "change") return s;
  }
  var J0 = !1;
  if (u) {
    var zc;
    if (u) {
      var Fc = "oninput" in document;
      if (!Fc) {
        var ew = document.createElement("div");
        ew.setAttribute("oninput", "return;"), Fc = typeof ew.oninput == "function";
      }
      zc = Fc;
    } else zc = !1;
    J0 = zc && (!document.documentMode || 9 < document.documentMode);
  }
  function tw() {
    Qi && (Qi.detachEvent("onpropertychange", nw), Zi = Qi = null);
  }
  function nw(r) {
    if (r.propertyName === "value" && Ma(Zi)) {
      var s = [];
      Z0(s, Zi, r, Oi(r)), ma(h2, s);
    }
  }
  function g2(r, s, c) {
    r === "focusin" ? (tw(), Qi = s, Zi = c, Qi.attachEvent("onpropertychange", nw)) : r === "focusout" && tw();
  }
  function m2(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Ma(Zi);
  }
  function v2(r, s) {
    if (r === "click") return Ma(s);
  }
  function y2(r, s) {
    if (r === "input" || r === "change") return Ma(s);
  }
  function w2(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var nn = typeof Object.is == "function" ? Object.is : w2;
  function Ji(r, s) {
    if (nn(r, s)) return !0;
    if (typeof r != "object" || r === null || typeof s != "object" || s === null) return !1;
    var c = Object.keys(r), g = Object.keys(s);
    if (c.length !== g.length) return !1;
    for (g = 0; g < c.length; g++) {
      var w = c[g];
      if (!f.call(s, w) || !nn(r[w], s[w])) return !1;
    }
    return !0;
  }
  function rw(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function ow(r, s) {
    var c = rw(r);
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
      c = rw(c);
    }
  }
  function iw(r, s) {
    return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? iw(r, s.parentNode) : "contains" in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1;
  }
  function sw() {
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
  function $c(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true");
  }
  function x2(r) {
    var s = sw(), c = r.focusedElem, g = r.selectionRange;
    if (s !== c && c && c.ownerDocument && iw(c.ownerDocument.documentElement, c)) {
      if (g !== null && $c(c)) {
        if (s = g.start, r = g.end, r === void 0 && (r = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(r, c.value.length);
        else if (r = (s = c.ownerDocument || document) && s.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var w = c.textContent.length, S = Math.min(g.start, w);
          g = g.end === void 0 ? S : Math.min(g.end, w), !r.extend && S > g && (w = g, g = S, S = w), w = ow(c, S);
          var I = ow(
            c,
            g
          );
          w && I && (r.rangeCount !== 1 || r.anchorNode !== w.node || r.anchorOffset !== w.offset || r.focusNode !== I.node || r.focusOffset !== I.offset) && (s = s.createRange(), s.setStart(w.node, w.offset), r.removeAllRanges(), S > g ? (r.addRange(s), r.extend(I.node, I.offset)) : (s.setEnd(I.node, I.offset), r.addRange(s)));
        }
      }
      for (s = [], r = c; r = r.parentNode; ) r.nodeType === 1 && s.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < s.length; c++) r = s[c], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }
  }
  var _2 = u && "documentMode" in document && 11 >= document.documentMode, Io = null, Bc = null, es = null, Vc = !1;
  function aw(r, s, c) {
    var g = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Vc || Io == null || Io !== pe(g) || (g = Io, "selectionStart" in g && $c(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection(), g = { anchorNode: g.anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }), es && Ji(es, g) || (es = g, g = Da(Bc, "onSelect"), 0 < g.length && (s = new Mc("onSelect", "select", null, s, c), r.push({ event: s, listeners: g }), s.target = Io)));
  }
  function Oa(r, s) {
    var c = {};
    return c[r.toLowerCase()] = s.toLowerCase(), c["Webkit" + r] = "webkit" + s, c["Moz" + r] = "moz" + s, c;
  }
  var Mo = { animationend: Oa("Animation", "AnimationEnd"), animationiteration: Oa("Animation", "AnimationIteration"), animationstart: Oa("Animation", "AnimationStart"), transitionend: Oa("Transition", "TransitionEnd") }, Hc = {}, lw = {};
  u && (lw = document.createElement("div").style, "AnimationEvent" in window || (delete Mo.animationend.animation, delete Mo.animationiteration.animation, delete Mo.animationstart.animation), "TransitionEvent" in window || delete Mo.transitionend.transition);
  function La(r) {
    if (Hc[r]) return Hc[r];
    if (!Mo[r]) return r;
    var s = Mo[r], c;
    for (c in s) if (s.hasOwnProperty(c) && c in lw) return Hc[r] = s[c];
    return r;
  }
  var uw = La("animationend"), cw = La("animationiteration"), fw = La("animationstart"), dw = La("transitionend"), hw = /* @__PURE__ */ new Map(), pw = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(r, s) {
    hw.set(r, s), a(s, [r]);
  }
  for (var Wc = 0; Wc < pw.length; Wc++) {
    var Uc = pw[Wc], b2 = Uc.toLowerCase(), S2 = Uc[0].toUpperCase() + Uc.slice(1);
    cr(b2, "on" + S2);
  }
  cr(uw, "onAnimationEnd"), cr(cw, "onAnimationIteration"), cr(fw, "onAnimationStart"), cr("dblclick", "onDoubleClick"), cr("focusin", "onFocus"), cr("focusout", "onBlur"), cr(dw, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), E2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));
  function gw(r, s, c) {
    var g = r.type || "unknown-event";
    r.currentTarget = c, mc(g, s, void 0, r), r.currentTarget = null;
  }
  function mw(r, s) {
    s = (s & 4) !== 0;
    for (var c = 0; c < r.length; c++) {
      var g = r[c], w = g.event;
      g = g.listeners;
      e: {
        var S = void 0;
        if (s) for (var I = g.length - 1; 0 <= I; I--) {
          var z = g[I], U = z.instance, oe = z.currentTarget;
          if (z = z.listener, U !== S && w.isPropagationStopped()) break e;
          gw(w, z, oe), S = U;
        }
        else for (I = 0; I < g.length; I++) {
          if (z = g[I], U = z.instance, oe = z.currentTarget, z = z.listener, U !== S && w.isPropagationStopped()) break e;
          gw(w, z, oe), S = U;
        }
      }
    }
    if (Eo) throw r = qi, Eo = !1, qi = null, r;
  }
  function Fe(r, s) {
    var c = s[ef];
    c === void 0 && (c = s[ef] = /* @__PURE__ */ new Set());
    var g = r + "__bubble";
    c.has(g) || (vw(s, r, 2, !1), c.add(g));
  }
  function Gc(r, s, c) {
    var g = 0;
    s && (g |= 4), vw(c, r, g, s);
  }
  var ja = "_reactListening" + Math.random().toString(36).slice(2);
  function ns(r) {
    if (!r[ja]) {
      r[ja] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (E2.has(c) || Gc(c, !1, r), Gc(c, !0, r));
      });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      s === null || s[ja] || (s[ja] = !0, Gc("selectionchange", !1, s));
    }
  }
  function vw(r, s, c, g) {
    switch (F0(s)) {
      case 1:
        var w = qI;
        break;
      case 4:
        w = zI;
        break;
      default:
        w = Tc;
    }
    c = w.bind(null, s, c, r), w = void 0, !Di || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (w = !0), g ? w !== void 0 ? r.addEventListener(s, c, { capture: !0, passive: w }) : r.addEventListener(s, c, !0) : w !== void 0 ? r.addEventListener(s, c, { passive: w }) : r.addEventListener(s, c, !1);
  }
  function Kc(r, s, c, g, w) {
    var S = g;
    if ((s & 1) === 0 && (s & 2) === 0 && g !== null) e: for (; ; ) {
      if (g === null) return;
      var I = g.tag;
      if (I === 3 || I === 4) {
        var z = g.stateNode.containerInfo;
        if (z === w || z.nodeType === 8 && z.parentNode === w) break;
        if (I === 4) for (I = g.return; I !== null; ) {
          var U = I.tag;
          if ((U === 3 || U === 4) && (U = I.stateNode.containerInfo, U === w || U.nodeType === 8 && U.parentNode === w)) return;
          I = I.return;
        }
        for (; z !== null; ) {
          if (I = Vr(z), I === null) return;
          if (U = I.tag, U === 5 || U === 6) {
            g = S = I;
            continue e;
          }
          z = z.parentNode;
        }
      }
      g = g.return;
    }
    ma(function() {
      var oe = S, ue = Oi(c), fe = [];
      e: {
        var le = hw.get(r);
        if (le !== void 0) {
          var ge = Mc, we = r;
          switch (r) {
            case "keypress":
              if (Ta(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = e2;
              break;
            case "focusin":
              we = "focus", ge = jc;
              break;
            case "focusout":
              we = "blur", ge = jc;
              break;
            case "beforeblur":
            case "afterblur":
              ge = jc;
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
              ge = V0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = BI;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = r2;
              break;
            case uw:
            case cw:
            case fw:
              ge = WI;
              break;
            case dw:
              ge = i2;
              break;
            case "scroll":
              ge = FI;
              break;
            case "wheel":
              ge = a2;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = GI;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = W0;
          }
          var Se = (s & 4) !== 0, et = !Se && r === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = qr(J, ne), he != null && Se.push(rs(J, he, re)))), et) break;
            J = J.return;
          }
          0 < Se.length && (le = new ge(le, we, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((s & 7) === 0) {
        e: {
          if (le = r === "mouseover" || r === "pointerover", ge = r === "mouseout" || r === "pointerout", le && c !== Mi && (we = c.relatedTarget || c.fromElement) && (Vr(we) || we[zn])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (we = c.relatedTarget || c.toElement, ge = oe, we = we ? Vr(we) : null, we !== null && (et = xn(we), we !== et || we.tag !== 5 && we.tag !== 6) && (we = null)) : (ge = null, we = oe), ge !== we)) {
            if (Se = V0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (r === "pointerout" || r === "pointerover") && (Se = W0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), et = ge == null ? le : jo(ge), re = we == null ? le : jo(we), le = new Se(he, J + "leave", ge, c, ue), le.target = et, le.relatedTarget = re, he = null, Vr(ue) === oe && (Se = new Se(ne, J + "enter", we, c, ue), Se.target = re, Se.relatedTarget = et, he = Se), et = he, ge && we) t: {
              for (Se = ge, ne = we, J = 0, re = Se; re; re = Oo(re)) J++;
              for (re = 0, he = ne; he; he = Oo(he)) re++;
              for (; 0 < J - re; ) Se = Oo(Se), J--;
              for (; 0 < re - J; ) ne = Oo(ne), re--;
              for (; J--; ) {
                if (Se === ne || ne !== null && Se === ne.alternate) break t;
                Se = Oo(Se), ne = Oo(ne);
              }
              Se = null;
            }
            else Se = null;
            ge !== null && yw(fe, le, ge, Se, !1), we !== null && et !== null && yw(fe, et, we, Se, !0);
          }
        }
        e: {
          if (le = oe ? jo(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = p2;
          else if (Q0(le)) if (J0) Ce = y2;
          else {
            Ce = m2;
            var ke = g2;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = v2);
          if (Ce && (Ce = Ce(r, oe))) {
            Z0(fe, Ce, c, ue);
            break e;
          }
          ke && ke(r, le, oe), r === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ue(le, "number", le.value);
        }
        switch (ke = oe ? jo(oe) : window, r) {
          case "focusin":
            (Q0(ke) || ke.contentEditable === "true") && (Io = ke, Bc = oe, es = null);
            break;
          case "focusout":
            es = Bc = Io = null;
            break;
          case "mousedown":
            Vc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Vc = !1, aw(fe, c, ue);
            break;
          case "selectionchange":
            if (_2) break;
          case "keydown":
          case "keyup":
            aw(fe, c, ue);
        }
        var Ne;
        if (qc) e: {
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
        else Ao ? Y0(r, c) && (Pe = "onCompositionEnd") : r === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (U0 && c.locale !== "ko" && (Ao || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Ao && (Ne = $0()) : (ur = ue, Ic = "value" in ur ? ur.value : ur.textContent, Ao = !0)), ke = Da(oe, Pe), 0 < ke.length && (Pe = new H0(Pe, r, null, c, ue), fe.push({ event: Pe, listeners: ke }), Ne ? Pe.data = Ne : (Ne = X0(c), Ne !== null && (Pe.data = Ne)))), (Ne = u2 ? c2(r, c) : f2(r, c)) && (oe = Da(oe, "onBeforeInput"), 0 < oe.length && (ue = new H0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Ne));
      }
      mw(fe, s);
    });
  }
  function rs(r, s, c) {
    return { instance: r, listener: s, currentTarget: c };
  }
  function Da(r, s) {
    for (var c = s + "Capture", g = []; r !== null; ) {
      var w = r, S = w.stateNode;
      w.tag === 5 && S !== null && (w = S, S = qr(r, c), S != null && g.unshift(rs(r, S, w)), S = qr(r, s), S != null && g.push(rs(r, S, w))), r = r.return;
    }
    return g;
  }
  function Oo(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function yw(r, s, c, g, w) {
    for (var S = s._reactName, I = []; c !== null && c !== g; ) {
      var z = c, U = z.alternate, oe = z.stateNode;
      if (U !== null && U === g) break;
      z.tag === 5 && oe !== null && (z = oe, w ? (U = qr(c, S), U != null && I.unshift(rs(c, U, z))) : w || (U = qr(c, S), U != null && I.push(rs(c, U, z)))), c = c.return;
    }
    I.length !== 0 && r.push({ event: s, listeners: I });
  }
  var C2 = /\r\n?/g, k2 = /\u0000|\uFFFD/g;
  function ww(r) {
    return (typeof r == "string" ? r : "" + r).replace(C2, `
`).replace(k2, "");
  }
  function qa(r, s, c) {
    if (s = ww(s), ww(r) !== s && c) throw Error(n(425));
  }
  function za() {
  }
  var Yc = null, Xc = null;
  function Qc(r, s) {
    return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var Zc = typeof setTimeout == "function" ? setTimeout : void 0, N2 = typeof clearTimeout == "function" ? clearTimeout : void 0, xw = typeof Promise == "function" ? Promise : void 0, R2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof xw < "u" ? function(r) {
    return xw.resolve(null).then(r).catch(P2);
  } : Zc;
  function P2(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function Jc(r, s) {
    var c = s, g = 0;
    do {
      var w = c.nextSibling;
      if (r.removeChild(c), w && w.nodeType === 8) if (c = w.data, c === "/$") {
        if (g === 0) {
          r.removeChild(w), Gi(s);
          return;
        }
        g--;
      } else c !== "$" && c !== "$?" && c !== "$!" || g++;
      c = w;
    } while (c);
    Gi(s);
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
  function _w(r) {
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
  var Lo = Math.random().toString(36).slice(2), bn = "__reactFiber$" + Lo, os = "__reactProps$" + Lo, zn = "__reactContainer$" + Lo, ef = "__reactEvents$" + Lo, T2 = "__reactListeners$" + Lo, A2 = "__reactHandles$" + Lo;
  function Vr(r) {
    var s = r[bn];
    if (s) return s;
    for (var c = r.parentNode; c; ) {
      if (s = c[zn] || c[bn]) {
        if (c = s.alternate, s.child !== null || c !== null && c.child !== null) for (r = _w(r); r !== null; ) {
          if (c = r[bn]) return c;
          r = _w(r);
        }
        return s;
      }
      r = c, c = r.parentNode;
    }
    return null;
  }
  function is(r) {
    return r = r[bn] || r[zn], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function jo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function Fa(r) {
    return r[os] || null;
  }
  var tf = [], Do = -1;
  function dr(r) {
    return { current: r };
  }
  function $e(r) {
    0 > Do || (r.current = tf[Do], tf[Do] = null, Do--);
  }
  function ze(r, s) {
    Do++, tf[Do] = r.current, r.current = s;
  }
  var hr = {}, pt = dr(hr), bt = dr(!1), Hr = hr;
  function qo(r, s) {
    var c = r.type.contextTypes;
    if (!c) return hr;
    var g = r.stateNode;
    if (g && g.__reactInternalMemoizedUnmaskedChildContext === s) return g.__reactInternalMemoizedMaskedChildContext;
    var w = {}, S;
    for (S in c) w[S] = s[S];
    return g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = s, r.__reactInternalMemoizedMaskedChildContext = w), w;
  }
  function St(r) {
    return r = r.childContextTypes, r != null;
  }
  function $a() {
    $e(bt), $e(pt);
  }
  function bw(r, s, c) {
    if (pt.current !== hr) throw Error(n(168));
    ze(pt, s), ze(bt, c);
  }
  function Sw(r, s, c) {
    var g = r.stateNode;
    if (s = s.childContextTypes, typeof g.getChildContext != "function") return c;
    g = g.getChildContext();
    for (var w in g) if (!(w in s)) throw Error(n(108, Y(r) || "Unknown", w));
    return Q({}, c, g);
  }
  function Ba(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || hr, Hr = pt.current, ze(pt, r), ze(bt, bt.current), !0;
  }
  function Ew(r, s, c) {
    var g = r.stateNode;
    if (!g) throw Error(n(169));
    c ? (r = Sw(r, s, Hr), g.__reactInternalMemoizedMergedChildContext = r, $e(bt), $e(pt), ze(pt, r)) : $e(bt), ze(bt, c);
  }
  var Fn = null, Va = !1, nf = !1;
  function Cw(r) {
    Fn === null ? Fn = [r] : Fn.push(r);
  }
  function I2(r) {
    Va = !0, Cw(r);
  }
  function pr() {
    if (!nf && Fn !== null) {
      nf = !0;
      var r = 0, s = qe;
      try {
        var c = Fn;
        for (qe = 1; r < c.length; r++) {
          var g = c[r];
          do
            g = g(!0);
          while (g !== null);
        }
        Fn = null, Va = !1;
      } catch (w) {
        throw Fn !== null && (Fn = Fn.slice(r + 1)), wa($i, pr), w;
      } finally {
        qe = s, nf = !1;
      }
    }
    return null;
  }
  var zo = [], Fo = 0, Ha = null, Wa = 0, Ut = [], Gt = 0, Wr = null, $n = 1, Bn = "";
  function Ur(r, s) {
    zo[Fo++] = Wa, zo[Fo++] = Ha, Ha = r, Wa = s;
  }
  function kw(r, s, c) {
    Ut[Gt++] = $n, Ut[Gt++] = Bn, Ut[Gt++] = Wr, Wr = r;
    var g = $n;
    r = Bn;
    var w = 32 - At(g) - 1;
    g &= ~(1 << w), c += 1;
    var S = 32 - At(s) + w;
    if (30 < S) {
      var I = w - w % 5;
      S = (g & (1 << I) - 1).toString(32), g >>= I, w -= I, $n = 1 << 32 - At(s) + w | c << w | g, Bn = S + r;
    } else $n = 1 << S | c << w | g, Bn = r;
  }
  function rf(r) {
    r.return !== null && (Ur(r, 1), kw(r, 1, 0));
  }
  function of(r) {
    for (; r === Ha; ) Ha = zo[--Fo], zo[Fo] = null, Wa = zo[--Fo], zo[Fo] = null;
    for (; r === Wr; ) Wr = Ut[--Gt], Ut[Gt] = null, Bn = Ut[--Gt], Ut[Gt] = null, $n = Ut[--Gt], Ut[Gt] = null;
  }
  var Mt = null, Ot = null, Ve = !1, rn = null;
  function Nw(r, s) {
    var c = Qt(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = s, c.return = r, s = r.deletions, s === null ? (r.deletions = [c], r.flags |= 16) : s.push(c);
  }
  function Rw(r, s) {
    switch (r.tag) {
      case 5:
        var c = r.type;
        return s = s.nodeType !== 1 || c.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (r.stateNode = s, Mt = r, Ot = fr(s.firstChild), !0) : !1;
      case 6:
        return s = r.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (r.stateNode = s, Mt = r, Ot = null, !0) : !1;
      case 13:
        return s = s.nodeType !== 8 ? null : s, s !== null ? (c = Wr !== null ? { id: $n, overflow: Bn } : null, r.memoizedState = { dehydrated: s, treeContext: c, retryLane: 1073741824 }, c = Qt(18, null, null, 0), c.stateNode = s, c.return = r, r.child = c, Mt = r, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function sf(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function af(r) {
    if (Ve) {
      var s = Ot;
      if (s) {
        var c = s;
        if (!Rw(r, s)) {
          if (sf(r)) throw Error(n(418));
          s = fr(c.nextSibling);
          var g = Mt;
          s && Rw(r, s) ? Nw(g, c) : (r.flags = r.flags & -4097 | 2, Ve = !1, Mt = r);
        }
      } else {
        if (sf(r)) throw Error(n(418));
        r.flags = r.flags & -4097 | 2, Ve = !1, Mt = r;
      }
    }
  }
  function Pw(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Mt = r;
  }
  function Ua(r) {
    if (r !== Mt) return !1;
    if (!Ve) return Pw(r), Ve = !0, !1;
    var s;
    if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type, s = s !== "head" && s !== "body" && !Qc(r.type, r.memoizedProps)), s && (s = Ot)) {
      if (sf(r)) throw Tw(), Error(n(418));
      for (; s; ) Nw(r, s), s = fr(s.nextSibling);
    }
    if (Pw(r), r.tag === 13) {
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
  function Tw() {
    for (var r = Ot; r; ) r = fr(r.nextSibling);
  }
  function $o() {
    Ot = Mt = null, Ve = !1;
  }
  function lf(r) {
    rn === null ? rn = [r] : rn.push(r);
  }
  var M2 = N.ReactCurrentBatchConfig;
  function ss(r, s, c) {
    if (r = c.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(n(309));
          var g = c.stateNode;
        }
        if (!g) throw Error(n(147, r));
        var w = g, S = "" + r;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === S ? s.ref : (s = function(I) {
          var z = w.refs;
          I === null ? delete z[S] : z[S] = I;
        }, s._stringRef = S, s);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!c._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Ga(r, s) {
    throw r = Object.prototype.toString.call(s), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r));
  }
  function Aw(r) {
    var s = r._init;
    return s(r._payload);
  }
  function Iw(r) {
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
      return ne = br(ne, J), ne.index = 0, ne.sibling = null, ne;
    }
    function S(ne, J, re) {
      return ne.index = re, r ? (re = ne.alternate, re !== null ? (re = re.index, re < J ? (ne.flags |= 2, J) : re) : (ne.flags |= 2, J)) : (ne.flags |= 1048576, J);
    }
    function I(ne) {
      return r && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function z(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = Jf(re, ne.mode, he), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function U(ne, J, re, he) {
      var Ce = re.type;
      return Ce === A ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && Aw(Ce) === J.type) ? (he = w(J, re.props), he.ref = ss(ne, J, re), he.return = ne, he) : (he = vl(re.type, re.key, re.props, null, ne.mode, he), he.ref = ss(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = ed(re, ne.mode, he), J.return = ne, J) : (J = w(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = eo(re, ne.mode, he, Ce), J.return = ne, J) : (J = w(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = Jf("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case P:
            return re = vl(J.type, J.key, J.props, null, ne.mode, re), re.ref = ss(ne, null, J), re.return = ne, re;
          case T:
            return J = ed(J, ne.mode, re), J.return = ne, J;
          case $:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Ft(J) || q(J)) return J = eo(J, ne.mode, re, null), J.return = ne, J;
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
        Ga(ne, re);
      }
      return null;
    }
    function ge(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, z(J, ne, "" + he, Ce);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case P:
            return ne = ne.get(he.key === null ? re : he.key) || null, U(J, ne, he, Ce);
          case T:
            return ne = ne.get(he.key === null ? re : he.key) || null, oe(J, ne, he, Ce);
          case $:
            var ke = he._init;
            return ge(ne, J, re, ke(he._payload), Ce);
        }
        if (Ft(he) || q(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Ga(J, he);
      }
      return null;
    }
    function we(ne, J, re, he) {
      for (var Ce = null, ke = null, Ne = J, Pe = J = 0, ct = null; Ne !== null && Pe < re.length; Pe++) {
        Ne.index > Pe ? (ct = Ne, Ne = null) : ct = Ne.sibling;
        var je = le(ne, Ne, re[Pe], he);
        if (je === null) {
          Ne === null && (Ne = ct);
          break;
        }
        r && Ne && je.alternate === null && s(ne, Ne), J = S(je, J, Pe), ke === null ? Ce = je : ke.sibling = je, ke = je, Ne = ct;
      }
      if (Pe === re.length) return c(ne, Ne), Ve && Ur(ne, Pe), Ce;
      if (Ne === null) {
        for (; Pe < re.length; Pe++) Ne = fe(ne, re[Pe], he), Ne !== null && (J = S(Ne, J, Pe), ke === null ? Ce = Ne : ke.sibling = Ne, ke = Ne);
        return Ve && Ur(ne, Pe), Ce;
      }
      for (Ne = g(ne, Ne); Pe < re.length; Pe++) ct = ge(Ne, ne, Pe, re[Pe], he), ct !== null && (r && ct.alternate !== null && Ne.delete(ct.key === null ? Pe : ct.key), J = S(ct, J, Pe), ke === null ? Ce = ct : ke.sibling = ct, ke = ct);
      return r && Ne.forEach(function(Sr) {
        return s(ne, Sr);
      }), Ve && Ur(ne, Pe), Ce;
    }
    function Se(ne, J, re, he) {
      var Ce = q(re);
      if (typeof Ce != "function") throw Error(n(150));
      if (re = Ce.call(re), re == null) throw Error(n(151));
      for (var ke = Ce = null, Ne = J, Pe = J = 0, ct = null, je = re.next(); Ne !== null && !je.done; Pe++, je = re.next()) {
        Ne.index > Pe ? (ct = Ne, Ne = null) : ct = Ne.sibling;
        var Sr = le(ne, Ne, je.value, he);
        if (Sr === null) {
          Ne === null && (Ne = ct);
          break;
        }
        r && Ne && Sr.alternate === null && s(ne, Ne), J = S(Sr, J, Pe), ke === null ? Ce = Sr : ke.sibling = Sr, ke = Sr, Ne = ct;
      }
      if (je.done) return c(
        ne,
        Ne
      ), Ve && Ur(ne, Pe), Ce;
      if (Ne === null) {
        for (; !je.done; Pe++, je = re.next()) je = fe(ne, je.value, he), je !== null && (J = S(je, J, Pe), ke === null ? Ce = je : ke.sibling = je, ke = je);
        return Ve && Ur(ne, Pe), Ce;
      }
      for (Ne = g(ne, Ne); !je.done; Pe++, je = re.next()) je = ge(Ne, ne, Pe, je.value, he), je !== null && (r && je.alternate !== null && Ne.delete(je.key === null ? Pe : je.key), J = S(je, J, Pe), ke === null ? Ce = je : ke.sibling = je, ke = je);
      return r && Ne.forEach(function(dM) {
        return s(ne, dM);
      }), Ve && Ur(ne, Pe), Ce;
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
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === $ && Aw(Ce) === ke.type) {
                    c(ne, ke.sibling), J = w(ke, re.props), J.ref = ss(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else s(ne, ke);
                ke = ke.sibling;
              }
              re.type === A ? (J = eo(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = vl(re.type, re.key, re.props, null, ne.mode, he), he.ref = ss(ne, J, re), he.return = ne, ne = he);
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
              J = ed(re, ne.mode, he), J.return = ne, ne = J;
            }
            return I(ne);
          case $:
            return ke = re._init, et(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return we(ne, J, re, he);
        if (q(re)) return Se(ne, J, re, he);
        Ga(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = w(J, re), J.return = ne, ne = J) : (c(ne, J), J = Jf(re, ne.mode, he), J.return = ne, ne = J), I(ne)) : c(ne, J);
    }
    return et;
  }
  var Bo = Iw(!0), Mw = Iw(!1), Ka = dr(null), Ya = null, Vo = null, uf = null;
  function cf() {
    uf = Vo = Ya = null;
  }
  function ff(r) {
    var s = Ka.current;
    $e(Ka), r._currentValue = s;
  }
  function df(r, s, c) {
    for (; r !== null; ) {
      var g = r.alternate;
      if ((r.childLanes & s) !== s ? (r.childLanes |= s, g !== null && (g.childLanes |= s)) : g !== null && (g.childLanes & s) !== s && (g.childLanes |= s), r === c) break;
      r = r.return;
    }
  }
  function Ho(r, s) {
    Ya = r, uf = Vo = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (Et = !0), r.firstContext = null);
  }
  function Kt(r) {
    var s = r._currentValue;
    if (uf !== r) if (r = { context: r, memoizedValue: s, next: null }, Vo === null) {
      if (Ya === null) throw Error(n(308));
      Vo = r, Ya.dependencies = { lanes: 0, firstContext: r };
    } else Vo = Vo.next = r;
    return s;
  }
  var Gr = null;
  function hf(r) {
    Gr === null ? Gr = [r] : Gr.push(r);
  }
  function Ow(r, s, c, g) {
    var w = s.interleaved;
    return w === null ? (c.next = c, hf(s)) : (c.next = w.next, w.next = c), s.interleaved = c, Vn(r, g);
  }
  function Vn(r, s) {
    r.lanes |= s;
    var c = r.alternate;
    for (c !== null && (c.lanes |= s), c = r, r = r.return; r !== null; ) r.childLanes |= s, c = r.alternate, c !== null && (c.childLanes |= s), c = r, r = r.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var gr = !1;
  function pf(r) {
    r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Lw(r, s) {
    r = r.updateQueue, s.updateQueue === r && (s.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
  }
  function Hn(r, s) {
    return { eventTime: r, lane: s, tag: 0, payload: null, callback: null, next: null };
  }
  function mr(r, s, c) {
    var g = r.updateQueue;
    if (g === null) return null;
    if (g = g.shared, (Oe & 2) !== 0) {
      var w = g.pending;
      return w === null ? s.next = s : (s.next = w.next, w.next = s), g.pending = s, Vn(r, c);
    }
    return w = g.interleaved, w === null ? (s.next = s, hf(g)) : (s.next = w.next, w.next = s), g.interleaved = s, Vn(r, c);
  }
  function Xa(r, s, c) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (c & 4194240) !== 0)) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Nc(r, c);
    }
  }
  function jw(r, s) {
    var c = r.updateQueue, g = r.alternate;
    if (g !== null && (g = g.updateQueue, c === g)) {
      var w = null, S = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var I = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          S === null ? w = S = I : S = S.next = I, c = c.next;
        } while (c !== null);
        S === null ? w = S = s : S = S.next = s;
      } else w = S = s;
      c = { baseState: g.baseState, firstBaseUpdate: w, lastBaseUpdate: S, shared: g.shared, effects: g.effects }, r.updateQueue = c;
      return;
    }
    r = c.lastBaseUpdate, r === null ? c.firstBaseUpdate = s : r.next = s, c.lastBaseUpdate = s;
  }
  function Qa(r, s, c, g) {
    var w = r.updateQueue;
    gr = !1;
    var S = w.firstBaseUpdate, I = w.lastBaseUpdate, z = w.shared.pending;
    if (z !== null) {
      w.shared.pending = null;
      var U = z, oe = U.next;
      U.next = null, I === null ? S = oe : I.next = oe, I = U;
      var ue = r.alternate;
      ue !== null && (ue = ue.updateQueue, z = ue.lastBaseUpdate, z !== I && (z === null ? ue.firstBaseUpdate = oe : z.next = oe, ue.lastBaseUpdate = U));
    }
    if (S !== null) {
      var fe = w.baseState;
      I = 0, ue = oe = U = null, z = S;
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
                gr = !0;
            }
          }
          z.callback !== null && z.lane !== 0 && (r.flags |= 64, le = w.effects, le === null ? w.effects = [z] : le.push(z));
        } else ge = { eventTime: ge, lane: le, tag: z.tag, payload: z.payload, callback: z.callback, next: null }, ue === null ? (oe = ue = ge, U = fe) : ue = ue.next = ge, I |= le;
        if (z = z.next, z === null) {
          if (z = w.shared.pending, z === null) break;
          le = z, z = le.next, le.next = null, w.lastBaseUpdate = le, w.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (U = fe), w.baseState = U, w.firstBaseUpdate = oe, w.lastBaseUpdate = ue, s = w.shared.interleaved, s !== null) {
        w = s;
        do
          I |= w.lane, w = w.next;
        while (w !== s);
      } else S === null && (w.shared.lanes = 0);
      Xr |= I, r.lanes = I, r.memoizedState = fe;
    }
  }
  function Dw(r, s, c) {
    if (r = s.effects, s.effects = null, r !== null) for (s = 0; s < r.length; s++) {
      var g = r[s], w = g.callback;
      if (w !== null) {
        if (g.callback = null, g = c, typeof w != "function") throw Error(n(191, w));
        w.call(g);
      }
    }
  }
  var as = {}, Sn = dr(as), ls = dr(as), us = dr(as);
  function Kr(r) {
    if (r === as) throw Error(n(174));
    return r;
  }
  function gf(r, s) {
    switch (ze(us, s), ze(ls, r), ze(Sn, as), r = s.nodeType, r) {
      case 9:
      case 11:
        s = (s = s.documentElement) ? s.namespaceURI : Bt(null, "");
        break;
      default:
        r = r === 8 ? s.parentNode : s, s = r.namespaceURI || null, r = r.tagName, s = Bt(s, r);
    }
    $e(Sn), ze(Sn, s);
  }
  function Wo() {
    $e(Sn), $e(ls), $e(us);
  }
  function qw(r) {
    Kr(us.current);
    var s = Kr(Sn.current), c = Bt(s, r.type);
    s !== c && (ze(ls, r), ze(Sn, c));
  }
  function mf(r) {
    ls.current === r && ($e(Sn), $e(ls));
  }
  var Ye = dr(0);
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
  var vf = [];
  function yf() {
    for (var r = 0; r < vf.length; r++) vf[r]._workInProgressVersionPrimary = null;
    vf.length = 0;
  }
  var Ja = N.ReactCurrentDispatcher, wf = N.ReactCurrentBatchConfig, Yr = 0, Xe = null, ot = null, lt = null, el = !1, cs = !1, fs = 0, O2 = 0;
  function gt() {
    throw Error(n(321));
  }
  function xf(r, s) {
    if (s === null) return !1;
    for (var c = 0; c < s.length && c < r.length; c++) if (!nn(r[c], s[c])) return !1;
    return !0;
  }
  function _f(r, s, c, g, w, S) {
    if (Yr = S, Xe = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Ja.current = r === null || r.memoizedState === null ? q2 : z2, r = c(g, w), cs) {
      S = 0;
      do {
        if (cs = !1, fs = 0, 25 <= S) throw Error(n(301));
        S += 1, lt = ot = null, s.updateQueue = null, Ja.current = F2, r = c(g, w);
      } while (cs);
    }
    if (Ja.current = rl, s = ot !== null && ot.next !== null, Yr = 0, lt = ot = Xe = null, el = !1, s) throw Error(n(300));
    return r;
  }
  function bf() {
    var r = fs !== 0;
    return fs = 0, r;
  }
  function En() {
    var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Xe.memoizedState = lt = r : lt = lt.next = r, lt;
  }
  function Yt() {
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
  function ds(r, s) {
    return typeof s == "function" ? s(r) : s;
  }
  function Sf(r) {
    var s = Yt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = ot, w = g.baseQueue, S = c.pending;
    if (S !== null) {
      if (w !== null) {
        var I = w.next;
        w.next = S.next, S.next = I;
      }
      g.baseQueue = w = S, c.pending = null;
    }
    if (w !== null) {
      S = w.next, g = g.baseState;
      var z = I = null, U = null, oe = S;
      do {
        var ue = oe.lane;
        if ((Yr & ue) === ue) U !== null && (U = U.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), g = oe.hasEagerState ? oe.eagerState : r(g, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          U === null ? (z = U = fe, I = g) : U = U.next = fe, Xe.lanes |= ue, Xr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== S);
      U === null ? I = g : U.next = z, nn(g, s.memoizedState) || (Et = !0), s.memoizedState = g, s.baseState = I, s.baseQueue = U, c.lastRenderedState = g;
    }
    if (r = c.interleaved, r !== null) {
      w = r;
      do
        S = w.lane, Xe.lanes |= S, Xr |= S, w = w.next;
      while (w !== r);
    } else w === null && (c.lanes = 0);
    return [s.memoizedState, c.dispatch];
  }
  function Ef(r) {
    var s = Yt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = c.dispatch, w = c.pending, S = s.memoizedState;
    if (w !== null) {
      c.pending = null;
      var I = w = w.next;
      do
        S = r(S, I.action), I = I.next;
      while (I !== w);
      nn(S, s.memoizedState) || (Et = !0), s.memoizedState = S, s.baseQueue === null && (s.baseState = S), c.lastRenderedState = S;
    }
    return [S, g];
  }
  function zw() {
  }
  function Fw(r, s) {
    var c = Xe, g = Yt(), w = s(), S = !nn(g.memoizedState, w);
    if (S && (g.memoizedState = w, Et = !0), g = g.queue, Cf(Vw.bind(null, c, g, r), [r]), g.getSnapshot !== s || S || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, hs(9, Bw.bind(null, c, g, w, s), void 0, null), ut === null) throw Error(n(349));
      (Yr & 30) !== 0 || $w(c, s, w);
    }
    return w;
  }
  function $w(r, s, c) {
    r.flags |= 16384, r = { getSnapshot: s, value: c }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.stores = [r]) : (c = s.stores, c === null ? s.stores = [r] : c.push(r));
  }
  function Bw(r, s, c, g) {
    s.value = c, s.getSnapshot = g, Hw(s) && Ww(r);
  }
  function Vw(r, s, c) {
    return c(function() {
      Hw(s) && Ww(r);
    });
  }
  function Hw(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var c = s();
      return !nn(r, c);
    } catch {
      return !0;
    }
  }
  function Ww(r) {
    var s = Vn(r, 1);
    s !== null && ln(s, r, 1, -1);
  }
  function Uw(r) {
    var s = En();
    return typeof r == "function" && (r = r()), s.memoizedState = s.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ds, lastRenderedState: r }, s.queue = r, r = r.dispatch = D2.bind(null, Xe, r), [s.memoizedState, r];
  }
  function hs(r, s, c, g) {
    return r = { tag: r, create: s, destroy: c, deps: g, next: null }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.lastEffect = r.next = r) : (c = s.lastEffect, c === null ? s.lastEffect = r.next = r : (g = c.next, c.next = r, r.next = g, s.lastEffect = r)), r;
  }
  function Gw() {
    return Yt().memoizedState;
  }
  function tl(r, s, c, g) {
    var w = En();
    Xe.flags |= r, w.memoizedState = hs(1 | s, c, void 0, g === void 0 ? null : g);
  }
  function nl(r, s, c, g) {
    var w = Yt();
    g = g === void 0 ? null : g;
    var S = void 0;
    if (ot !== null) {
      var I = ot.memoizedState;
      if (S = I.destroy, g !== null && xf(g, I.deps)) {
        w.memoizedState = hs(s, c, S, g);
        return;
      }
    }
    Xe.flags |= r, w.memoizedState = hs(1 | s, c, S, g);
  }
  function Kw(r, s) {
    return tl(8390656, 8, r, s);
  }
  function Cf(r, s) {
    return nl(2048, 8, r, s);
  }
  function Yw(r, s) {
    return nl(4, 2, r, s);
  }
  function Xw(r, s) {
    return nl(4, 4, r, s);
  }
  function Qw(r, s) {
    if (typeof s == "function") return r = r(), s(r), function() {
      s(null);
    };
    if (s != null) return r = r(), s.current = r, function() {
      s.current = null;
    };
  }
  function Zw(r, s, c) {
    return c = c != null ? c.concat([r]) : null, nl(4, 4, Qw.bind(null, s, r), c);
  }
  function kf() {
  }
  function Jw(r, s) {
    var c = Yt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && xf(s, g[1]) ? g[0] : (c.memoizedState = [r, s], r);
  }
  function ex(r, s) {
    var c = Yt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && xf(s, g[1]) ? g[0] : (r = r(), c.memoizedState = [r, s], r);
  }
  function tx(r, s, c) {
    return (Yr & 21) === 0 ? (r.baseState && (r.baseState = !1, Et = !0), r.memoizedState = c) : (nn(c, s) || (c = Ea(), Xe.lanes |= c, Xr |= c, r.baseState = !0), s);
  }
  function L2(r, s) {
    var c = qe;
    qe = c !== 0 && 4 > c ? c : 4, r(!0);
    var g = wf.transition;
    wf.transition = {};
    try {
      r(!1), s();
    } finally {
      qe = c, wf.transition = g;
    }
  }
  function nx() {
    return Yt().memoizedState;
  }
  function j2(r, s, c) {
    var g = xr(r);
    if (c = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null }, rx(r)) ox(s, c);
    else if (c = Ow(r, s, c, g), c !== null) {
      var w = xt();
      ln(c, r, g, w), ix(c, s, g);
    }
  }
  function D2(r, s, c) {
    var g = xr(r), w = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (rx(r)) ox(s, w);
    else {
      var S = r.alternate;
      if (r.lanes === 0 && (S === null || S.lanes === 0) && (S = s.lastRenderedReducer, S !== null)) try {
        var I = s.lastRenderedState, z = S(I, c);
        if (w.hasEagerState = !0, w.eagerState = z, nn(z, I)) {
          var U = s.interleaved;
          U === null ? (w.next = w, hf(s)) : (w.next = U.next, U.next = w), s.interleaved = w;
          return;
        }
      } catch {
      } finally {
      }
      c = Ow(r, s, w, g), c !== null && (w = xt(), ln(c, r, g, w), ix(c, s, g));
    }
  }
  function rx(r) {
    var s = r.alternate;
    return r === Xe || s !== null && s === Xe;
  }
  function ox(r, s) {
    cs = el = !0;
    var c = r.pending;
    c === null ? s.next = s : (s.next = c.next, c.next = s), r.pending = s;
  }
  function ix(r, s, c) {
    if ((c & 4194240) !== 0) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Nc(r, c);
    }
  }
  var rl = { readContext: Kt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, q2 = { readContext: Kt, useCallback: function(r, s) {
    return En().memoizedState = [r, s === void 0 ? null : s], r;
  }, useContext: Kt, useEffect: Kw, useImperativeHandle: function(r, s, c) {
    return c = c != null ? c.concat([r]) : null, tl(
      4194308,
      4,
      Qw.bind(null, s, r),
      c
    );
  }, useLayoutEffect: function(r, s) {
    return tl(4194308, 4, r, s);
  }, useInsertionEffect: function(r, s) {
    return tl(4, 2, r, s);
  }, useMemo: function(r, s) {
    var c = En();
    return s = s === void 0 ? null : s, r = r(), c.memoizedState = [r, s], r;
  }, useReducer: function(r, s, c) {
    var g = En();
    return s = c !== void 0 ? c(s) : s, g.memoizedState = g.baseState = s, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: s }, g.queue = r, r = r.dispatch = j2.bind(null, Xe, r), [g.memoizedState, r];
  }, useRef: function(r) {
    var s = En();
    return r = { current: r }, s.memoizedState = r;
  }, useState: Uw, useDebugValue: kf, useDeferredValue: function(r) {
    return En().memoizedState = r;
  }, useTransition: function() {
    var r = Uw(!1), s = r[0];
    return r = L2.bind(null, r[1]), En().memoizedState = r, [s, r];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(r, s, c) {
    var g = Xe, w = En();
    if (Ve) {
      if (c === void 0) throw Error(n(407));
      c = c();
    } else {
      if (c = s(), ut === null) throw Error(n(349));
      (Yr & 30) !== 0 || $w(g, s, c);
    }
    w.memoizedState = c;
    var S = { value: c, getSnapshot: s };
    return w.queue = S, Kw(Vw.bind(
      null,
      g,
      S,
      r
    ), [r]), g.flags |= 2048, hs(9, Bw.bind(null, g, S, c, s), void 0, null), c;
  }, useId: function() {
    var r = En(), s = ut.identifierPrefix;
    if (Ve) {
      var c = Bn, g = $n;
      c = (g & ~(1 << 32 - At(g) - 1)).toString(32) + c, s = ":" + s + "R" + c, c = fs++, 0 < c && (s += "H" + c.toString(32)), s += ":";
    } else c = O2++, s = ":" + s + "r" + c.toString(32) + ":";
    return r.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, z2 = {
    readContext: Kt,
    useCallback: Jw,
    useContext: Kt,
    useEffect: Cf,
    useImperativeHandle: Zw,
    useInsertionEffect: Yw,
    useLayoutEffect: Xw,
    useMemo: ex,
    useReducer: Sf,
    useRef: Gw,
    useState: function() {
      return Sf(ds);
    },
    useDebugValue: kf,
    useDeferredValue: function(r) {
      var s = Yt();
      return tx(s, ot.memoizedState, r);
    },
    useTransition: function() {
      var r = Sf(ds)[0], s = Yt().memoizedState;
      return [r, s];
    },
    useMutableSource: zw,
    useSyncExternalStore: Fw,
    useId: nx,
    unstable_isNewReconciler: !1
  }, F2 = { readContext: Kt, useCallback: Jw, useContext: Kt, useEffect: Cf, useImperativeHandle: Zw, useInsertionEffect: Yw, useLayoutEffect: Xw, useMemo: ex, useReducer: Ef, useRef: Gw, useState: function() {
    return Ef(ds);
  }, useDebugValue: kf, useDeferredValue: function(r) {
    var s = Yt();
    return ot === null ? s.memoizedState = r : tx(s, ot.memoizedState, r);
  }, useTransition: function() {
    var r = Ef(ds)[0], s = Yt().memoizedState;
    return [r, s];
  }, useMutableSource: zw, useSyncExternalStore: Fw, useId: nx, unstable_isNewReconciler: !1 };
  function on(r, s) {
    if (r && r.defaultProps) {
      s = Q({}, s), r = r.defaultProps;
      for (var c in r) s[c] === void 0 && (s[c] = r[c]);
      return s;
    }
    return s;
  }
  function Nf(r, s, c, g) {
    s = r.memoizedState, c = c(g, s), c = c == null ? s : Q({}, s, c), r.memoizedState = c, r.lanes === 0 && (r.updateQueue.baseState = c);
  }
  var ol = { isMounted: function(r) {
    return (r = r._reactInternals) ? xn(r) === r : !1;
  }, enqueueSetState: function(r, s, c) {
    r = r._reactInternals;
    var g = xt(), w = xr(r), S = Hn(g, w);
    S.payload = s, c != null && (S.callback = c), s = mr(r, S, w), s !== null && (ln(s, r, w, g), Xa(s, r, w));
  }, enqueueReplaceState: function(r, s, c) {
    r = r._reactInternals;
    var g = xt(), w = xr(r), S = Hn(g, w);
    S.tag = 1, S.payload = s, c != null && (S.callback = c), s = mr(r, S, w), s !== null && (ln(s, r, w, g), Xa(s, r, w));
  }, enqueueForceUpdate: function(r, s) {
    r = r._reactInternals;
    var c = xt(), g = xr(r), w = Hn(c, g);
    w.tag = 2, s != null && (w.callback = s), s = mr(r, w, g), s !== null && (ln(s, r, g, c), Xa(s, r, g));
  } };
  function sx(r, s, c, g, w, S, I) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(g, S, I) : s.prototype && s.prototype.isPureReactComponent ? !Ji(c, g) || !Ji(w, S) : !0;
  }
  function ax(r, s, c) {
    var g = !1, w = hr, S = s.contextType;
    return typeof S == "object" && S !== null ? S = Kt(S) : (w = St(s) ? Hr : pt.current, g = s.contextTypes, S = (g = g != null) ? qo(r, w) : hr), s = new s(c, S), r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ol, r.stateNode = s, s._reactInternals = r, g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = w, r.__reactInternalMemoizedMaskedChildContext = S), s;
  }
  function lx(r, s, c, g) {
    r = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(c, g), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(c, g), s.state !== r && ol.enqueueReplaceState(s, s.state, null);
  }
  function Rf(r, s, c, g) {
    var w = r.stateNode;
    w.props = c, w.state = r.memoizedState, w.refs = {}, pf(r);
    var S = s.contextType;
    typeof S == "object" && S !== null ? w.context = Kt(S) : (S = St(s) ? Hr : pt.current, w.context = qo(r, S)), w.state = r.memoizedState, S = s.getDerivedStateFromProps, typeof S == "function" && (Nf(r, s, S, c), w.state = r.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function" || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (s = w.state, typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount(), s !== w.state && ol.enqueueReplaceState(w, w.state, null), Qa(r, c, w, g), w.state = r.memoizedState), typeof w.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function Uo(r, s) {
    try {
      var c = "", g = s;
      do
        c += Z(g), g = g.return;
      while (g);
      var w = c;
    } catch (S) {
      w = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: r, source: s, stack: w, digest: null };
  }
  function Pf(r, s, c) {
    return { value: r, source: null, stack: c ?? null, digest: s ?? null };
  }
  function Tf(r, s) {
    try {
      console.error(s.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var $2 = typeof WeakMap == "function" ? WeakMap : Map;
  function ux(r, s, c) {
    c = Hn(-1, c), c.tag = 3, c.payload = { element: null };
    var g = s.value;
    return c.callback = function() {
      fl || (fl = !0, Wf = g), Tf(r, s);
    }, c;
  }
  function cx(r, s, c) {
    c = Hn(-1, c), c.tag = 3;
    var g = r.type.getDerivedStateFromError;
    if (typeof g == "function") {
      var w = s.value;
      c.payload = function() {
        return g(w);
      }, c.callback = function() {
        Tf(r, s);
      };
    }
    var S = r.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (c.callback = function() {
      Tf(r, s), typeof g != "function" && (yr === null ? yr = /* @__PURE__ */ new Set([this]) : yr.add(this));
      var I = s.stack;
      this.componentDidCatch(s.value, { componentStack: I !== null ? I : "" });
    }), c;
  }
  function fx(r, s, c) {
    var g = r.pingCache;
    if (g === null) {
      g = r.pingCache = new $2();
      var w = /* @__PURE__ */ new Set();
      g.set(s, w);
    } else w = g.get(s), w === void 0 && (w = /* @__PURE__ */ new Set(), g.set(s, w));
    w.has(c) || (w.add(c), r = tM.bind(null, r, s, c), s.then(r, r));
  }
  function dx(r) {
    do {
      var s;
      if ((s = r.tag === 13) && (s = r.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function hx(r, s, c, g, w) {
    return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (s = Hn(-1, 1), s.tag = 2, mr(c, s, 1))), c.lanes |= 1), r) : (r.flags |= 65536, r.lanes = w, r);
  }
  var B2 = N.ReactCurrentOwner, Et = !1;
  function wt(r, s, c, g) {
    s.child = r === null ? Mw(s, null, c, g) : Bo(s, r.child, c, g);
  }
  function px(r, s, c, g, w) {
    c = c.render;
    var S = s.ref;
    return Ho(s, w), g = _f(r, s, c, g, S, w), c = bf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Wn(r, s, w)) : (Ve && c && rf(s), s.flags |= 1, wt(r, s, g, w), s.child);
  }
  function gx(r, s, c, g, w) {
    if (r === null) {
      var S = c.type;
      return typeof S == "function" && !Zf(S) && S.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (s.tag = 15, s.type = S, mx(r, s, S, g, w)) : (r = vl(c.type, null, g, s, s.mode, w), r.ref = s.ref, r.return = s, s.child = r);
    }
    if (S = r.child, (r.lanes & w) === 0) {
      var I = S.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Ji, c(I, g) && r.ref === s.ref) return Wn(r, s, w);
    }
    return s.flags |= 1, r = br(S, g), r.ref = s.ref, r.return = s, s.child = r;
  }
  function mx(r, s, c, g, w) {
    if (r !== null) {
      var S = r.memoizedProps;
      if (Ji(S, g) && r.ref === s.ref) if (Et = !1, s.pendingProps = g = S, (r.lanes & w) !== 0) (r.flags & 131072) !== 0 && (Et = !0);
      else return s.lanes = r.lanes, Wn(r, s, w);
    }
    return Af(r, s, c, g, w);
  }
  function vx(r, s, c) {
    var g = s.pendingProps, w = g.children, S = r !== null ? r.memoizedState : null;
    if (g.mode === "hidden") if ((s.mode & 1) === 0) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ze(Ko, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return r = S !== null ? S.baseLanes | c : c, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, s.updateQueue = null, ze(Ko, Lt), Lt |= r, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = S !== null ? S.baseLanes : c, ze(Ko, Lt), Lt |= g;
    }
    else S !== null ? (g = S.baseLanes | c, s.memoizedState = null) : g = c, ze(Ko, Lt), Lt |= g;
    return wt(r, s, w, c), s.child;
  }
  function yx(r, s) {
    var c = s.ref;
    (r === null && c !== null || r !== null && r.ref !== c) && (s.flags |= 512, s.flags |= 2097152);
  }
  function Af(r, s, c, g, w) {
    var S = St(c) ? Hr : pt.current;
    return S = qo(s, S), Ho(s, w), c = _f(r, s, c, g, S, w), g = bf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~w, Wn(r, s, w)) : (Ve && g && rf(s), s.flags |= 1, wt(r, s, c, w), s.child);
  }
  function wx(r, s, c, g, w) {
    if (St(c)) {
      var S = !0;
      Ba(s);
    } else S = !1;
    if (Ho(s, w), s.stateNode === null) sl(r, s), ax(s, c, g), Rf(s, c, g, w), g = !0;
    else if (r === null) {
      var I = s.stateNode, z = s.memoizedProps;
      I.props = z;
      var U = I.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Kt(oe) : (oe = St(c) ? Hr : pt.current, oe = qo(s, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof I.getSnapshotBeforeUpdate == "function";
      fe || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || (z !== g || U !== oe) && lx(s, I, g, oe), gr = !1;
      var le = s.memoizedState;
      I.state = le, Qa(s, g, I, w), U = s.memoizedState, z !== g || le !== U || bt.current || gr ? (typeof ue == "function" && (Nf(s, c, ue, g), U = s.memoizedState), (z = gr || sx(s, c, z, g, le, U, oe)) ? (fe || typeof I.UNSAFE_componentWillMount != "function" && typeof I.componentWillMount != "function" || (typeof I.componentWillMount == "function" && I.componentWillMount(), typeof I.UNSAFE_componentWillMount == "function" && I.UNSAFE_componentWillMount()), typeof I.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = g, s.memoizedState = U), I.props = g, I.state = U, I.context = oe, g = z) : (typeof I.componentDidMount == "function" && (s.flags |= 4194308), g = !1);
    } else {
      I = s.stateNode, Lw(r, s), z = s.memoizedProps, oe = s.type === s.elementType ? z : on(s.type, z), I.props = oe, fe = s.pendingProps, le = I.context, U = c.contextType, typeof U == "object" && U !== null ? U = Kt(U) : (U = St(c) ? Hr : pt.current, U = qo(s, U));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof I.getSnapshotBeforeUpdate == "function") || typeof I.UNSAFE_componentWillReceiveProps != "function" && typeof I.componentWillReceiveProps != "function" || (z !== fe || le !== U) && lx(s, I, g, U), gr = !1, le = s.memoizedState, I.state = le, Qa(s, g, I, w);
      var we = s.memoizedState;
      z !== fe || le !== we || bt.current || gr ? (typeof ge == "function" && (Nf(s, c, ge, g), we = s.memoizedState), (oe = gr || sx(s, c, oe, g, le, we, U) || !1) ? (ue || typeof I.UNSAFE_componentWillUpdate != "function" && typeof I.componentWillUpdate != "function" || (typeof I.componentWillUpdate == "function" && I.componentWillUpdate(g, we, U), typeof I.UNSAFE_componentWillUpdate == "function" && I.UNSAFE_componentWillUpdate(g, we, U)), typeof I.componentDidUpdate == "function" && (s.flags |= 4), typeof I.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof I.componentDidUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), s.memoizedProps = g, s.memoizedState = we), I.props = g, I.state = we, I.context = U, g = oe) : (typeof I.componentDidUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof I.getSnapshotBeforeUpdate != "function" || z === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), g = !1);
    }
    return If(r, s, c, g, S, w);
  }
  function If(r, s, c, g, w, S) {
    yx(r, s);
    var I = (s.flags & 128) !== 0;
    if (!g && !I) return w && Ew(s, c, !1), Wn(r, s, S);
    g = s.stateNode, B2.current = s;
    var z = I && typeof c.getDerivedStateFromError != "function" ? null : g.render();
    return s.flags |= 1, r !== null && I ? (s.child = Bo(s, r.child, null, S), s.child = Bo(s, null, z, S)) : wt(r, s, z, S), s.memoizedState = g.state, w && Ew(s, c, !0), s.child;
  }
  function xx(r) {
    var s = r.stateNode;
    s.pendingContext ? bw(r, s.pendingContext, s.pendingContext !== s.context) : s.context && bw(r, s.context, !1), gf(r, s.containerInfo);
  }
  function _x(r, s, c, g, w) {
    return $o(), lf(w), s.flags |= 256, wt(r, s, c, g), s.child;
  }
  var Mf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Of(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function bx(r, s, c) {
    var g = s.pendingProps, w = Ye.current, S = !1, I = (s.flags & 128) !== 0, z;
    if ((z = I) || (z = r !== null && r.memoizedState === null ? !1 : (w & 2) !== 0), z ? (S = !0, s.flags &= -129) : (r === null || r.memoizedState !== null) && (w |= 1), ze(Ye, w & 1), r === null)
      return af(s), r = s.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (I = g.children, r = g.fallback, S ? (g = s.mode, S = s.child, I = { mode: "hidden", children: I }, (g & 1) === 0 && S !== null ? (S.childLanes = 0, S.pendingProps = I) : S = yl(I, g, 0, null), r = eo(r, g, c, null), S.return = s, r.return = s, S.sibling = r, s.child = S, s.child.memoizedState = Of(c), s.memoizedState = Mf, r) : Lf(s, I));
    if (w = r.memoizedState, w !== null && (z = w.dehydrated, z !== null)) return V2(r, s, I, g, z, w, c);
    if (S) {
      S = g.fallback, I = s.mode, w = r.child, z = w.sibling;
      var U = { mode: "hidden", children: g.children };
      return (I & 1) === 0 && s.child !== w ? (g = s.child, g.childLanes = 0, g.pendingProps = U, s.deletions = null) : (g = br(w, U), g.subtreeFlags = w.subtreeFlags & 14680064), z !== null ? S = br(z, S) : (S = eo(S, I, c, null), S.flags |= 2), S.return = s, g.return = s, g.sibling = S, s.child = g, g = S, S = s.child, I = r.child.memoizedState, I = I === null ? Of(c) : { baseLanes: I.baseLanes | c, cachePool: null, transitions: I.transitions }, S.memoizedState = I, S.childLanes = r.childLanes & ~c, s.memoizedState = Mf, g;
    }
    return S = r.child, r = S.sibling, g = br(S, { mode: "visible", children: g.children }), (s.mode & 1) === 0 && (g.lanes = c), g.return = s, g.sibling = null, r !== null && (c = s.deletions, c === null ? (s.deletions = [r], s.flags |= 16) : c.push(r)), s.child = g, s.memoizedState = null, g;
  }
  function Lf(r, s) {
    return s = yl({ mode: "visible", children: s }, r.mode, 0, null), s.return = r, r.child = s;
  }
  function il(r, s, c, g) {
    return g !== null && lf(g), Bo(s, r.child, null, c), r = Lf(s, s.pendingProps.children), r.flags |= 2, s.memoizedState = null, r;
  }
  function V2(r, s, c, g, w, S, I) {
    if (c)
      return s.flags & 256 ? (s.flags &= -257, g = Pf(Error(n(422))), il(r, s, I, g)) : s.memoizedState !== null ? (s.child = r.child, s.flags |= 128, null) : (S = g.fallback, w = s.mode, g = yl({ mode: "visible", children: g.children }, w, 0, null), S = eo(S, w, I, null), S.flags |= 2, g.return = s, S.return = s, g.sibling = S, s.child = g, (s.mode & 1) !== 0 && Bo(s, r.child, null, I), s.child.memoizedState = Of(I), s.memoizedState = Mf, S);
    if ((s.mode & 1) === 0) return il(r, s, I, null);
    if (w.data === "$!") {
      if (g = w.nextSibling && w.nextSibling.dataset, g) var z = g.dgst;
      return g = z, S = Error(n(419)), g = Pf(S, g, void 0), il(r, s, I, g);
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
        w = (w & (g.suspendedLanes | I)) !== 0 ? 0 : w, w !== 0 && w !== S.retryLane && (S.retryLane = w, Vn(r, w), ln(g, r, w, -1));
      }
      return Qf(), g = Pf(Error(n(421))), il(r, s, I, g);
    }
    return w.data === "$?" ? (s.flags |= 128, s.child = r.child, s = nM.bind(null, r), w._reactRetry = s, null) : (r = S.treeContext, Ot = fr(w.nextSibling), Mt = s, Ve = !0, rn = null, r !== null && (Ut[Gt++] = $n, Ut[Gt++] = Bn, Ut[Gt++] = Wr, $n = r.id, Bn = r.overflow, Wr = s), s = Lf(s, g.children), s.flags |= 4096, s);
  }
  function Sx(r, s, c) {
    r.lanes |= s;
    var g = r.alternate;
    g !== null && (g.lanes |= s), df(r.return, s, c);
  }
  function jf(r, s, c, g, w) {
    var S = r.memoizedState;
    S === null ? r.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: g, tail: c, tailMode: w } : (S.isBackwards = s, S.rendering = null, S.renderingStartTime = 0, S.last = g, S.tail = c, S.tailMode = w);
  }
  function Ex(r, s, c) {
    var g = s.pendingProps, w = g.revealOrder, S = g.tail;
    if (wt(r, s, g.children, c), g = Ye.current, (g & 2) !== 0) g = g & 1 | 2, s.flags |= 128;
    else {
      if (r !== null && (r.flags & 128) !== 0) e: for (r = s.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && Sx(r, c, s);
        else if (r.tag === 19) Sx(r, c, s);
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
    if (ze(Ye, g), (s.mode & 1) === 0) s.memoizedState = null;
    else switch (w) {
      case "forwards":
        for (c = s.child, w = null; c !== null; ) r = c.alternate, r !== null && Za(r) === null && (w = c), c = c.sibling;
        c = w, c === null ? (w = s.child, s.child = null) : (w = c.sibling, c.sibling = null), jf(s, !1, w, c, S);
        break;
      case "backwards":
        for (c = null, w = s.child, s.child = null; w !== null; ) {
          if (r = w.alternate, r !== null && Za(r) === null) {
            s.child = w;
            break;
          }
          r = w.sibling, w.sibling = c, c = w, w = r;
        }
        jf(s, !0, c, null, S);
        break;
      case "together":
        jf(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function sl(r, s) {
    (s.mode & 1) === 0 && r !== null && (r.alternate = null, s.alternate = null, s.flags |= 2);
  }
  function Wn(r, s, c) {
    if (r !== null && (s.dependencies = r.dependencies), Xr |= s.lanes, (c & s.childLanes) === 0) return null;
    if (r !== null && s.child !== r.child) throw Error(n(153));
    if (s.child !== null) {
      for (r = s.child, c = br(r, r.pendingProps), s.child = c, c.return = s; r.sibling !== null; ) r = r.sibling, c = c.sibling = br(r, r.pendingProps), c.return = s;
      c.sibling = null;
    }
    return s.child;
  }
  function H2(r, s, c) {
    switch (s.tag) {
      case 3:
        xx(s), $o();
        break;
      case 5:
        qw(s);
        break;
      case 1:
        St(s.type) && Ba(s);
        break;
      case 4:
        gf(s, s.stateNode.containerInfo);
        break;
      case 10:
        var g = s.type._context, w = s.memoizedProps.value;
        ze(Ka, g._currentValue), g._currentValue = w;
        break;
      case 13:
        if (g = s.memoizedState, g !== null)
          return g.dehydrated !== null ? (ze(Ye, Ye.current & 1), s.flags |= 128, null) : (c & s.child.childLanes) !== 0 ? bx(r, s, c) : (ze(Ye, Ye.current & 1), r = Wn(r, s, c), r !== null ? r.sibling : null);
        ze(Ye, Ye.current & 1);
        break;
      case 19:
        if (g = (c & s.childLanes) !== 0, (r.flags & 128) !== 0) {
          if (g) return Ex(r, s, c);
          s.flags |= 128;
        }
        if (w = s.memoizedState, w !== null && (w.rendering = null, w.tail = null, w.lastEffect = null), ze(Ye, Ye.current), g) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, vx(r, s, c);
    }
    return Wn(r, s, c);
  }
  var Cx, Df, kx, Nx;
  Cx = function(r, s) {
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
  }, Df = function() {
  }, kx = function(r, s, c, g) {
    var w = r.memoizedProps;
    if (w !== g) {
      r = s.stateNode, Kr(Sn.current);
      var S = null;
      switch (c) {
        case "input":
          w = be(r, w), g = be(r, g), S = [];
          break;
        case "select":
          w = Q({}, w, { value: void 0 }), g = Q({}, g, { value: void 0 }), S = [];
          break;
        case "textarea":
          w = at(r, w), g = at(r, g), S = [];
          break;
        default:
          typeof w.onClick != "function" && typeof g.onClick == "function" && (r.onclick = za);
      }
      Ai(c, g);
      var I;
      c = null;
      for (oe in w) if (!g.hasOwnProperty(oe) && w.hasOwnProperty(oe) && w[oe] != null) if (oe === "style") {
        var z = w[oe];
        for (I in z) z.hasOwnProperty(I) && (c || (c = {}), c[I] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (i.hasOwnProperty(oe) ? S || (S = []) : (S = S || []).push(oe, null));
      for (oe in g) {
        var U = g[oe];
        if (z = w != null ? w[oe] : void 0, g.hasOwnProperty(oe) && U !== z && (U != null || z != null)) if (oe === "style") if (z) {
          for (I in z) !z.hasOwnProperty(I) || U && U.hasOwnProperty(I) || (c || (c = {}), c[I] = "");
          for (I in U) U.hasOwnProperty(I) && z[I] !== U[I] && (c || (c = {}), c[I] = U[I]);
        } else c || (S || (S = []), S.push(
          oe,
          c
        )), c = U;
        else oe === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, z = z ? z.__html : void 0, U != null && z !== U && (S = S || []).push(oe, U)) : oe === "children" ? typeof U != "string" && typeof U != "number" || (S = S || []).push(oe, "" + U) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (i.hasOwnProperty(oe) ? (U != null && oe === "onScroll" && Fe("scroll", r), S || z === U || (S = [])) : (S = S || []).push(oe, U));
      }
      c && (S = S || []).push("style", c);
      var oe = S;
      (s.updateQueue = oe) && (s.flags |= 4);
    }
  }, Nx = function(r, s, c, g) {
    c !== g && (s.flags |= 4);
  };
  function ps(r, s) {
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
  function W2(r, s, c) {
    var g = s.pendingProps;
    switch (of(s), s.tag) {
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
        return g = s.stateNode, Wo(), $e(bt), $e(pt), yf(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), (r === null || r.child === null) && (Ua(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, rn !== null && (Kf(rn), rn = null))), Df(r, s), mt(s), null;
      case 5:
        mf(s);
        var w = Kr(us.current);
        if (c = s.type, r !== null && s.stateNode != null) kx(r, s, c, g, w), r.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!g) {
            if (s.stateNode === null) throw Error(n(166));
            return mt(s), null;
          }
          if (r = Kr(Sn.current), Ua(s)) {
            g = s.stateNode, c = s.type;
            var S = s.memoizedProps;
            switch (g[bn] = s, g[os] = S, r = (s.mode & 1) !== 0, c) {
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
                for (w = 0; w < ts.length; w++) Fe(ts[w], g);
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
            Ai(c, S), w = null;
            for (var I in S) if (S.hasOwnProperty(I)) {
              var z = S[I];
              I === "children" ? typeof z == "string" ? g.textContent !== z && (S.suppressHydrationWarning !== !0 && qa(g.textContent, z, r), w = ["children", z]) : typeof z == "number" && g.textContent !== "" + z && (S.suppressHydrationWarning !== !0 && qa(
                g.textContent,
                z,
                r
              ), w = ["children", "" + z]) : i.hasOwnProperty(I) && z != null && I === "onScroll" && Fe("scroll", g);
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
                typeof S.onClick == "function" && (g.onclick = za);
            }
            g = w, s.updateQueue = g, g !== null && (s.flags |= 4);
          } else {
            I = w.nodeType === 9 ? w : w.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = tn(c)), r === "http://www.w3.org/1999/xhtml" ? c === "script" ? (r = I.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof g.is == "string" ? r = I.createElement(c, { is: g.is }) : (r = I.createElement(c), c === "select" && (I = r, g.multiple ? I.multiple = !0 : g.size && (I.size = g.size))) : r = I.createElementNS(r, c), r[bn] = s, r[os] = g, Cx(r, s, !1, !1), s.stateNode = r;
            e: {
              switch (I = Ii(c, g), c) {
                case "dialog":
                  Fe("cancel", r), Fe("close", r), w = g;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Fe("load", r), w = g;
                  break;
                case "video":
                case "audio":
                  for (w = 0; w < ts.length; w++) Fe(ts[w], r);
                  w = g;
                  break;
                case "source":
                  Fe("error", r), w = g;
                  break;
                case "img":
                case "image":
                case "link":
                  Fe(
                    "error",
                    r
                  ), Fe("load", r), w = g;
                  break;
                case "details":
                  Fe("toggle", r), w = g;
                  break;
                case "input":
                  me(r, g), w = be(r, g), Fe("invalid", r);
                  break;
                case "option":
                  w = g;
                  break;
                case "select":
                  r._wrapperState = { wasMultiple: !!g.multiple }, w = Q({}, g, { value: void 0 }), Fe("invalid", r);
                  break;
                case "textarea":
                  Ge(r, g), w = at(r, g), Fe("invalid", r);
                  break;
                default:
                  w = g;
              }
              Ai(c, w), z = w;
              for (S in z) if (z.hasOwnProperty(S)) {
                var U = z[S];
                S === "style" ? Ht(r, U) : S === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Dr(r, U)) : S === "children" ? typeof U == "string" ? (c !== "textarea" || U !== "") && Vt(r, U) : typeof U == "number" && Vt(r, "" + U) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (i.hasOwnProperty(S) ? U != null && S === "onScroll" && Fe("scroll", r) : U != null && _(r, S, U, I));
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
                  typeof w.onClick == "function" && (r.onclick = za);
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
        if (r && s.stateNode != null) Nx(r, s, r.memoizedProps, g);
        else {
          if (typeof g != "string" && s.stateNode === null) throw Error(n(166));
          if (c = Kr(us.current), Kr(Sn.current), Ua(s)) {
            if (g = s.stateNode, c = s.memoizedProps, g[bn] = s, (S = g.nodeValue !== c) && (r = Mt, r !== null)) switch (r.tag) {
              case 3:
                qa(g.nodeValue, c, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && qa(g.nodeValue, c, (r.mode & 1) !== 0);
            }
            S && (s.flags |= 4);
          } else g = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(g), g[bn] = s, s.stateNode = g;
        }
        return mt(s), null;
      case 13:
        if ($e(Ye), g = s.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (Ve && Ot !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Tw(), $o(), s.flags |= 98560, S = !1;
          else if (S = Ua(s), g !== null && g.dehydrated !== null) {
            if (r === null) {
              if (!S) throw Error(n(318));
              if (S = s.memoizedState, S = S !== null ? S.dehydrated : null, !S) throw Error(n(317));
              S[bn] = s;
            } else $o(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            mt(s), S = !1;
          } else rn !== null && (Kf(rn), rn = null), S = !0;
          if (!S) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0 ? (s.lanes = c, s) : (g = g !== null, g !== (r !== null && r.memoizedState !== null) && g && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (r === null || (Ye.current & 1) !== 0 ? it === 0 && (it = 3) : Qf())), s.updateQueue !== null && (s.flags |= 4), mt(s), null);
      case 4:
        return Wo(), Df(r, s), r === null && ns(s.stateNode.containerInfo), mt(s), null;
      case 10:
        return ff(s.type._context), mt(s), null;
      case 17:
        return St(s.type) && $a(), mt(s), null;
      case 19:
        if ($e(Ye), S = s.memoizedState, S === null) return mt(s), null;
        if (g = (s.flags & 128) !== 0, I = S.rendering, I === null) if (g) ps(S, !1);
        else {
          if (it !== 0 || r !== null && (r.flags & 128) !== 0) for (r = s.child; r !== null; ) {
            if (I = Za(r), I !== null) {
              for (s.flags |= 128, ps(S, !1), g = I.updateQueue, g !== null && (s.updateQueue = g, s.flags |= 4), s.subtreeFlags = 0, g = c, c = s.child; c !== null; ) S = c, r = g, S.flags &= 14680066, I = S.alternate, I === null ? (S.childLanes = 0, S.lanes = r, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = I.childLanes, S.lanes = I.lanes, S.child = I.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = I.memoizedProps, S.memoizedState = I.memoizedState, S.updateQueue = I.updateQueue, S.type = I.type, r = I.dependencies, S.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), c = c.sibling;
              return ze(Ye, Ye.current & 1 | 2), s.child;
            }
            r = r.sibling;
          }
          S.tail !== null && Ke() > Yo && (s.flags |= 128, g = !0, ps(S, !1), s.lanes = 4194304);
        }
        else {
          if (!g) if (r = Za(I), r !== null) {
            if (s.flags |= 128, g = !0, c = r.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), ps(S, !0), S.tail === null && S.tailMode === "hidden" && !I.alternate && !Ve) return mt(s), null;
          } else 2 * Ke() - S.renderingStartTime > Yo && c !== 1073741824 && (s.flags |= 128, g = !0, ps(S, !1), s.lanes = 4194304);
          S.isBackwards ? (I.sibling = s.child, s.child = I) : (c = S.last, c !== null ? c.sibling = I : s.child = I, S.last = I);
        }
        return S.tail !== null ? (s = S.tail, S.rendering = s, S.tail = s.sibling, S.renderingStartTime = Ke(), s.sibling = null, c = Ye.current, ze(Ye, g ? c & 1 | 2 : c & 1), s) : (mt(s), null);
      case 22:
      case 23:
        return Xf(), g = s.memoizedState !== null, r !== null && r.memoizedState !== null !== g && (s.flags |= 8192), g && (s.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (mt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function U2(r, s) {
    switch (of(s), s.tag) {
      case 1:
        return St(s.type) && $a(), r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 3:
        return Wo(), $e(bt), $e(pt), yf(), r = s.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128, s) : null;
      case 5:
        return mf(s), null;
      case 13:
        if ($e(Ye), r = s.memoizedState, r !== null && r.dehydrated !== null) {
          if (s.alternate === null) throw Error(n(340));
          $o();
        }
        return r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 19:
        return $e(Ye), null;
      case 4:
        return Wo(), null;
      case 10:
        return ff(s.type._context), null;
      case 22:
      case 23:
        return Xf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var al = !1, vt = !1, G2 = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function Go(r, s) {
    var c = r.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (g) {
      Ze(r, s, g);
    }
    else c.current = null;
  }
  function qf(r, s, c) {
    try {
      c();
    } catch (g) {
      Ze(r, s, g);
    }
  }
  var Rx = !1;
  function K2(r, s) {
    if (Yc = Na, r = sw(), $c(r)) {
      if ("selectionStart" in r) var c = { start: r.selectionStart, end: r.selectionEnd };
      else e: {
        c = (c = r.ownerDocument) && c.defaultView || window;
        var g = c.getSelection && c.getSelection();
        if (g && g.rangeCount !== 0) {
          c = g.anchorNode;
          var w = g.anchorOffset, S = g.focusNode;
          g = g.focusOffset;
          try {
            c.nodeType, S.nodeType;
          } catch {
            c = null;
            break e;
          }
          var I = 0, z = -1, U = -1, oe = 0, ue = 0, fe = r, le = null;
          t: for (; ; ) {
            for (var ge; fe !== c || w !== 0 && fe.nodeType !== 3 || (z = I + w), fe !== S || g !== 0 && fe.nodeType !== 3 || (U = I + g), fe.nodeType === 3 && (I += fe.nodeValue.length), (ge = fe.firstChild) !== null; )
              le = fe, fe = ge;
            for (; ; ) {
              if (fe === r) break t;
              if (le === c && ++oe === w && (z = I), le === S && ++ue === g && (U = I), (ge = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = ge;
          }
          c = z === -1 || U === -1 ? null : { start: z, end: U };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (Xc = { focusedElem: r, selectionRange: c }, Na = !1, ve = s; ve !== null; ) if (s = ve, r = s.child, (s.subtreeFlags & 1028) !== 0 && r !== null) r.return = s, ve = r;
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
              var Se = we.memoizedProps, et = we.memoizedState, ne = s.stateNode, J = ne.getSnapshotBeforeUpdate(s.elementType === s.type ? Se : on(s.type, Se), et);
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
    return we = Rx, Rx = !1, we;
  }
  function gs(r, s, c) {
    var g = s.updateQueue;
    if (g = g !== null ? g.lastEffect : null, g !== null) {
      var w = g = g.next;
      do {
        if ((w.tag & r) === r) {
          var S = w.destroy;
          w.destroy = void 0, S !== void 0 && qf(s, c, S);
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
  function zf(r) {
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
  function Px(r) {
    var s = r.alternate;
    s !== null && (r.alternate = null, Px(s)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (s = r.stateNode, s !== null && (delete s[bn], delete s[os], delete s[ef], delete s[T2], delete s[A2])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function Tx(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Ax(r) {
    e: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Tx(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue e;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function Ff(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.nodeType === 8 ? c.parentNode.insertBefore(r, s) : c.insertBefore(r, s) : (c.nodeType === 8 ? (s = c.parentNode, s.insertBefore(r, c)) : (s = c, s.appendChild(r)), c = c._reactRootContainer, c != null || s.onclick !== null || (s.onclick = za));
    else if (g !== 4 && (r = r.child, r !== null)) for (Ff(r, s, c), r = r.sibling; r !== null; ) Ff(r, s, c), r = r.sibling;
  }
  function $f(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.insertBefore(r, s) : c.appendChild(r);
    else if (g !== 4 && (r = r.child, r !== null)) for ($f(r, s, c), r = r.sibling; r !== null; ) $f(r, s, c), r = r.sibling;
  }
  var ft = null, sn = !1;
  function vr(r, s, c) {
    for (c = c.child; c !== null; ) Ix(r, s, c), c = c.sibling;
  }
  function Ix(r, s, c) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
      Wt.onCommitFiberUnmount($r, c);
    } catch {
    }
    switch (c.tag) {
      case 5:
        vt || Go(c, s);
      case 6:
        var g = ft, w = sn;
        ft = null, vr(r, s, c), ft = g, sn = w, ft !== null && (sn ? (r = ft, c = c.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(c) : r.removeChild(c)) : ft.removeChild(c.stateNode));
        break;
      case 18:
        ft !== null && (sn ? (r = ft, c = c.stateNode, r.nodeType === 8 ? Jc(r.parentNode, c) : r.nodeType === 1 && Jc(r, c), Gi(r)) : Jc(ft, c.stateNode));
        break;
      case 4:
        g = ft, w = sn, ft = c.stateNode.containerInfo, sn = !0, vr(r, s, c), ft = g, sn = w;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (g = c.updateQueue, g !== null && (g = g.lastEffect, g !== null))) {
          w = g = g.next;
          do {
            var S = w, I = S.destroy;
            S = S.tag, I !== void 0 && ((S & 2) !== 0 || (S & 4) !== 0) && qf(c, s, I), w = w.next;
          } while (w !== g);
        }
        vr(r, s, c);
        break;
      case 1:
        if (!vt && (Go(c, s), g = c.stateNode, typeof g.componentWillUnmount == "function")) try {
          g.props = c.memoizedProps, g.state = c.memoizedState, g.componentWillUnmount();
        } catch (z) {
          Ze(c, s, z);
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
  function Mx(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var c = r.stateNode;
      c === null && (c = r.stateNode = new G2()), s.forEach(function(g) {
        var w = rM.bind(null, r, g);
        c.has(g) || (c.add(g), g.then(w, w));
      });
    }
  }
  function an(r, s) {
    var c = s.deletions;
    if (c !== null) for (var g = 0; g < c.length; g++) {
      var w = c[g];
      try {
        var S = r, I = s, z = I;
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
        Ix(S, I, w), ft = null, sn = !1;
        var U = w.alternate;
        U !== null && (U.return = null), w.return = null;
      } catch (oe) {
        Ze(w, s, oe);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Ox(s, r), s = s.sibling;
  }
  function Ox(r, s) {
    var c = r.alternate, g = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (an(s, r), Cn(r), g & 4) {
          try {
            gs(3, r, r.return), ll(3, r);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
          try {
            gs(5, r, r.return);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 1:
        an(s, r), Cn(r), g & 512 && c !== null && Go(c, c.return);
        break;
      case 5:
        if (an(s, r), Cn(r), g & 512 && c !== null && Go(c, c.return), r.flags & 32) {
          var w = r.stateNode;
          try {
            Vt(w, "");
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        if (g & 4 && (w = r.stateNode, w != null)) {
          var S = r.memoizedProps, I = c !== null ? c.memoizedProps : S, z = r.type, U = r.updateQueue;
          if (r.updateQueue = null, U !== null) try {
            z === "input" && S.type === "radio" && S.name != null && Re(w, S), Ii(z, I);
            var oe = Ii(z, S);
            for (I = 0; I < U.length; I += 2) {
              var ue = U[I], fe = U[I + 1];
              ue === "style" ? Ht(w, fe) : ue === "dangerouslySetInnerHTML" ? Dr(w, fe) : ue === "children" ? Vt(w, fe) : _(w, ue, fe, oe);
            }
            switch (z) {
              case "input":
                Ee(w, S);
                break;
              case "textarea":
                en(w, S);
                break;
              case "select":
                var le = w._wrapperState.wasMultiple;
                w._wrapperState.wasMultiple = !!S.multiple;
                var ge = S.value;
                ge != null ? ht(w, !!S.multiple, ge, !1) : le !== !!S.multiple && (S.defaultValue != null ? ht(
                  w,
                  !!S.multiple,
                  S.defaultValue,
                  !0
                ) : ht(w, !!S.multiple, S.multiple ? [] : "", !1));
            }
            w[os] = S;
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 6:
        if (an(s, r), Cn(r), g & 4) {
          if (r.stateNode === null) throw Error(n(162));
          w = r.stateNode, S = r.memoizedProps;
          try {
            w.nodeValue = S;
          } catch (Se) {
            Ze(r, r.return, Se);
          }
        }
        break;
      case 3:
        if (an(s, r), Cn(r), g & 4 && c !== null && c.memoizedState.isDehydrated) try {
          Gi(s.containerInfo);
        } catch (Se) {
          Ze(r, r.return, Se);
        }
        break;
      case 4:
        an(s, r), Cn(r);
        break;
      case 13:
        an(s, r), Cn(r), w = r.child, w.flags & 8192 && (S = w.memoizedState !== null, w.stateNode.isHidden = S, !S || w.alternate !== null && w.alternate.memoizedState !== null || (Hf = Ke())), g & 4 && Mx(r);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, r.mode & 1 ? (vt = (oe = vt) || ue, an(s, r), vt = oe) : an(s, r), Cn(r), g & 8192) {
          if (oe = r.memoizedState !== null, (r.stateNode.isHidden = oe) && !ue && (r.mode & 1) !== 0) for (ve = r, ue = r.child; ue !== null; ) {
            for (fe = ve = ue; ve !== null; ) {
              switch (le = ve, ge = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gs(4, le, le.return);
                  break;
                case 1:
                  Go(le, le.return);
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
                  Go(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    Dx(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ve = ge) : Dx(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = r; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  w = fe.stateNode, oe ? (S = w.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (z = fe.stateNode, U = fe.memoizedProps.style, I = U != null && U.hasOwnProperty("display") ? U.display : null, z.style.display = Tt("display", I));
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
        an(s, r), Cn(r), g & 4 && Mx(r);
        break;
      case 21:
        break;
      default:
        an(
          s,
          r
        ), Cn(r);
    }
  }
  function Cn(r) {
    var s = r.flags;
    if (s & 2) {
      try {
        e: {
          for (var c = r.return; c !== null; ) {
            if (Tx(c)) {
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
            g.flags & 32 && (Vt(w, ""), g.flags &= -33);
            var S = Ax(r);
            $f(r, S, w);
            break;
          case 3:
          case 4:
            var I = g.stateNode.containerInfo, z = Ax(r);
            Ff(r, z, I);
            break;
          default:
            throw Error(n(161));
        }
      } catch (U) {
        Ze(r, r.return, U);
      }
      r.flags &= -3;
    }
    s & 4096 && (r.flags &= -4097);
  }
  function Y2(r, s, c) {
    ve = r, Lx(r);
  }
  function Lx(r, s, c) {
    for (var g = (r.mode & 1) !== 0; ve !== null; ) {
      var w = ve, S = w.child;
      if (w.tag === 22 && g) {
        var I = w.memoizedState !== null || al;
        if (!I) {
          var z = w.alternate, U = z !== null && z.memoizedState !== null || vt;
          z = al;
          var oe = vt;
          if (al = I, (vt = U) && !oe) for (ve = w; ve !== null; ) I = ve, U = I.child, I.tag === 22 && I.memoizedState !== null ? qx(w) : U !== null ? (U.return = I, ve = U) : qx(w);
          for (; S !== null; ) ve = S, Lx(S), S = S.sibling;
          ve = w, al = z, vt = oe;
        }
        jx(r);
      } else (w.subtreeFlags & 8772) !== 0 && S !== null ? (S.return = w, ve = S) : jx(r);
    }
  }
  function jx(r) {
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
                var w = s.elementType === s.type ? c.memoizedProps : on(s.type, c.memoizedProps);
                g.componentDidUpdate(w, c.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
              }
              var S = s.updateQueue;
              S !== null && Dw(s, S, g);
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
                Dw(s, I, c);
              }
              break;
            case 5:
              var z = s.stateNode;
              if (c === null && s.flags & 4) {
                c = z;
                var U = s.memoizedProps;
                switch (s.type) {
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
              if (s.memoizedState === null) {
                var oe = s.alternate;
                if (oe !== null) {
                  var ue = oe.memoizedState;
                  if (ue !== null) {
                    var fe = ue.dehydrated;
                    fe !== null && Gi(fe);
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
          vt || s.flags & 512 && zf(s);
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
  function Dx(r) {
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
  function qx(r) {
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
            } catch (U) {
              Ze(s, c, U);
            }
            break;
          case 1:
            var g = s.stateNode;
            if (typeof g.componentDidMount == "function") {
              var w = s.return;
              try {
                g.componentDidMount();
              } catch (U) {
                Ze(s, w, U);
              }
            }
            var S = s.return;
            try {
              zf(s);
            } catch (U) {
              Ze(s, S, U);
            }
            break;
          case 5:
            var I = s.return;
            try {
              zf(s);
            } catch (U) {
              Ze(s, I, U);
            }
        }
      } catch (U) {
        Ze(s, s.return, U);
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
  var X2 = Math.ceil, ul = N.ReactCurrentDispatcher, Bf = N.ReactCurrentOwner, Xt = N.ReactCurrentBatchConfig, Oe = 0, ut = null, tt = null, dt = 0, Lt = 0, Ko = dr(0), it = 0, ms = null, Xr = 0, cl = 0, Vf = 0, vs = null, Ct = null, Hf = 0, Yo = 1 / 0, Un = null, fl = !1, Wf = null, yr = null, dl = !1, wr = null, hl = 0, ys = 0, Uf = null, pl = -1, gl = 0;
  function xt() {
    return (Oe & 6) !== 0 ? Ke() : pl !== -1 ? pl : pl = Ke();
  }
  function xr(r) {
    return (r.mode & 1) === 0 ? 1 : (Oe & 2) !== 0 && dt !== 0 ? dt & -dt : M2.transition !== null ? (gl === 0 && (gl = Ea()), gl) : (r = qe, r !== 0 || (r = window.event, r = r === void 0 ? 16 : F0(r.type)), r);
  }
  function ln(r, s, c, g) {
    if (50 < ys) throw ys = 0, Uf = null, Error(n(185));
    or(r, c, g), ((Oe & 2) === 0 || r !== ut) && (r === ut && ((Oe & 2) === 0 && (cl |= c), it === 4 && _r(r, dt)), kt(r, g), c === 1 && Oe === 0 && (s.mode & 1) === 0 && (Yo = Ke() + 500, Va && pr()));
  }
  function kt(r, s) {
    var c = r.callbackNode;
    kc(r, s);
    var g = Ro(r, r === ut ? dt : 0);
    if (g === 0) c !== null && xa(c), r.callbackNode = null, r.callbackPriority = 0;
    else if (s = g & -g, r.callbackPriority !== s) {
      if (c != null && xa(c), s === 1) r.tag === 0 ? I2(Fx.bind(null, r)) : Cw(Fx.bind(null, r)), R2(function() {
        (Oe & 6) === 0 && pr();
      }), c = null;
      else {
        switch (I0(g)) {
          case 1:
            c = $i;
            break;
          case 4:
            c = ba;
            break;
          case 16:
            c = Co;
            break;
          case 536870912:
            c = Sa;
            break;
          default:
            c = Co;
        }
        c = Kx(c, zx.bind(null, r));
      }
      r.callbackPriority = s, r.callbackNode = c;
    }
  }
  function zx(r, s) {
    if (pl = -1, gl = 0, (Oe & 6) !== 0) throw Error(n(327));
    var c = r.callbackNode;
    if (Xo() && r.callbackNode !== c) return null;
    var g = Ro(r, r === ut ? dt : 0);
    if (g === 0) return null;
    if ((g & 30) !== 0 || (g & r.expiredLanes) !== 0 || s) s = ml(r, g);
    else {
      s = g;
      var w = Oe;
      Oe |= 2;
      var S = Bx();
      (ut !== r || dt !== s) && (Un = null, Yo = Ke() + 500, Zr(r, s));
      do
        try {
          J2();
          break;
        } catch (z) {
          $x(r, z);
        }
      while (!0);
      cf(), ul.current = S, Oe = w, tt !== null ? s = 0 : (ut = null, dt = 0, s = it);
    }
    if (s !== 0) {
      if (s === 2 && (w = Br(r), w !== 0 && (g = w, s = Gf(r, w))), s === 1) throw c = ms, Zr(r, 0), _r(r, g), kt(r, Ke()), c;
      if (s === 6) _r(r, g);
      else {
        if (w = r.current.alternate, (g & 30) === 0 && !Q2(w) && (s = ml(r, g), s === 2 && (S = Br(r), S !== 0 && (g = S, s = Gf(r, S))), s === 1)) throw c = ms, Zr(r, 0), _r(r, g), kt(r, Ke()), c;
        switch (r.finishedWork = w, r.finishedLanes = g, s) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Jr(r, Ct, Un);
            break;
          case 3:
            if (_r(r, g), (g & 130023424) === g && (s = Hf + 500 - Ke(), 10 < s)) {
              if (Ro(r, 0) !== 0) break;
              if (w = r.suspendedLanes, (w & g) !== g) {
                xt(), r.pingedLanes |= r.suspendedLanes & w;
                break;
              }
              r.timeoutHandle = Zc(Jr.bind(null, r, Ct, Un), s);
              break;
            }
            Jr(r, Ct, Un);
            break;
          case 4:
            if (_r(r, g), (g & 4194240) === g) break;
            for (s = r.eventTimes, w = -1; 0 < g; ) {
              var I = 31 - At(g);
              S = 1 << I, I = s[I], I > w && (w = I), g &= ~S;
            }
            if (g = w, g = Ke() - g, g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * X2(g / 1960)) - g, 10 < g) {
              r.timeoutHandle = Zc(Jr.bind(null, r, Ct, Un), g);
              break;
            }
            Jr(r, Ct, Un);
            break;
          case 5:
            Jr(r, Ct, Un);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return kt(r, Ke()), r.callbackNode === c ? zx.bind(null, r) : null;
  }
  function Gf(r, s) {
    var c = vs;
    return r.current.memoizedState.isDehydrated && (Zr(r, s).flags |= 256), r = ml(r, s), r !== 2 && (s = Ct, Ct = c, s !== null && Kf(s)), r;
  }
  function Kf(r) {
    Ct === null ? Ct = r : Ct.push.apply(Ct, r);
  }
  function Q2(r) {
    for (var s = r; ; ) {
      if (s.flags & 16384) {
        var c = s.updateQueue;
        if (c !== null && (c = c.stores, c !== null)) for (var g = 0; g < c.length; g++) {
          var w = c[g], S = w.getSnapshot;
          w = w.value;
          try {
            if (!nn(S(), w)) return !1;
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
    for (s &= ~Vf, s &= ~cl, r.suspendedLanes |= s, r.pingedLanes &= ~s, r = r.expirationTimes; 0 < s; ) {
      var c = 31 - At(s), g = 1 << c;
      r[c] = -1, s &= ~g;
    }
  }
  function Fx(r) {
    if ((Oe & 6) !== 0) throw Error(n(327));
    Xo();
    var s = Ro(r, 0);
    if ((s & 1) === 0) return kt(r, Ke()), null;
    var c = ml(r, s);
    if (r.tag !== 0 && c === 2) {
      var g = Br(r);
      g !== 0 && (s = g, c = Gf(r, g));
    }
    if (c === 1) throw c = ms, Zr(r, 0), _r(r, s), kt(r, Ke()), c;
    if (c === 6) throw Error(n(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = s, Jr(r, Ct, Un), kt(r, Ke()), null;
  }
  function Yf(r, s) {
    var c = Oe;
    Oe |= 1;
    try {
      return r(s);
    } finally {
      Oe = c, Oe === 0 && (Yo = Ke() + 500, Va && pr());
    }
  }
  function Qr(r) {
    wr !== null && wr.tag === 0 && (Oe & 6) === 0 && Xo();
    var s = Oe;
    Oe |= 1;
    var c = Xt.transition, g = qe;
    try {
      if (Xt.transition = null, qe = 1, r) return r();
    } finally {
      qe = g, Xt.transition = c, Oe = s, (Oe & 6) === 0 && pr();
    }
  }
  function Xf() {
    Lt = Ko.current, $e(Ko);
  }
  function Zr(r, s) {
    r.finishedWork = null, r.finishedLanes = 0;
    var c = r.timeoutHandle;
    if (c !== -1 && (r.timeoutHandle = -1, N2(c)), tt !== null) for (c = tt.return; c !== null; ) {
      var g = c;
      switch (of(g), g.tag) {
        case 1:
          g = g.type.childContextTypes, g != null && $a();
          break;
        case 3:
          Wo(), $e(bt), $e(pt), yf();
          break;
        case 5:
          mf(g);
          break;
        case 4:
          Wo();
          break;
        case 13:
          $e(Ye);
          break;
        case 19:
          $e(Ye);
          break;
        case 10:
          ff(g.type._context);
          break;
        case 22:
        case 23:
          Xf();
      }
      c = c.return;
    }
    if (ut = r, tt = r = br(r.current, null), dt = Lt = s, it = 0, ms = null, Vf = cl = Xr = 0, Ct = vs = null, Gr !== null) {
      for (s = 0; s < Gr.length; s++) if (c = Gr[s], g = c.interleaved, g !== null) {
        c.interleaved = null;
        var w = g.next, S = c.pending;
        if (S !== null) {
          var I = S.next;
          S.next = w, g.next = I;
        }
        c.pending = g;
      }
      Gr = null;
    }
    return r;
  }
  function $x(r, s) {
    do {
      var c = tt;
      try {
        if (cf(), Ja.current = rl, el) {
          for (var g = Xe.memoizedState; g !== null; ) {
            var w = g.queue;
            w !== null && (w.pending = null), g = g.next;
          }
          el = !1;
        }
        if (Yr = 0, lt = ot = Xe = null, cs = !1, fs = 0, Bf.current = null, c === null || c.return === null) {
          it = 1, ms = s, tt = null;
          break;
        }
        e: {
          var S = r, I = c.return, z = c, U = s;
          if (s = dt, z.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var oe = U, ue = z, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var ge = dx(I);
            if (ge !== null) {
              ge.flags &= -257, hx(ge, I, z, S, s), ge.mode & 1 && fx(S, oe, s), s = ge, U = oe;
              var we = s.updateQueue;
              if (we === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(U), s.updateQueue = Se;
              } else we.add(U);
              break e;
            } else {
              if ((s & 1) === 0) {
                fx(S, oe, s), Qf();
                break e;
              }
              U = Error(n(426));
            }
          } else if (Ve && z.mode & 1) {
            var et = dx(I);
            if (et !== null) {
              (et.flags & 65536) === 0 && (et.flags |= 256), hx(et, I, z, S, s), lf(Uo(U, z));
              break e;
            }
          }
          S = U = Uo(U, z), it !== 4 && (it = 2), vs === null ? vs = [S] : vs.push(S), S = I;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, s &= -s, S.lanes |= s;
                var ne = ux(S, U, s);
                jw(S, ne);
                break e;
              case 1:
                z = U;
                var J = S.type, re = S.stateNode;
                if ((S.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (yr === null || !yr.has(re)))) {
                  S.flags |= 65536, s &= -s, S.lanes |= s;
                  var he = cx(S, z, s);
                  jw(S, he);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        Hx(c);
      } catch (Ce) {
        s = Ce, tt === c && c !== null && (tt = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Bx() {
    var r = ul.current;
    return ul.current = rl, r === null ? rl : r;
  }
  function Qf() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Xr & 268435455) === 0 && (cl & 268435455) === 0 || _r(ut, dt);
  }
  function ml(r, s) {
    var c = Oe;
    Oe |= 2;
    var g = Bx();
    (ut !== r || dt !== s) && (Un = null, Zr(r, s));
    do
      try {
        Z2();
        break;
      } catch (w) {
        $x(r, w);
      }
    while (!0);
    if (cf(), Oe = c, ul.current = g, tt !== null) throw Error(n(261));
    return ut = null, dt = 0, it;
  }
  function Z2() {
    for (; tt !== null; ) Vx(tt);
  }
  function J2() {
    for (; tt !== null && !yc(); ) Vx(tt);
  }
  function Vx(r) {
    var s = Gx(r.alternate, r, Lt);
    r.memoizedProps = r.pendingProps, s === null ? Hx(r) : tt = s, Bf.current = null;
  }
  function Hx(r) {
    var s = r;
    do {
      var c = s.alternate;
      if (r = s.return, (s.flags & 32768) === 0) {
        if (c = W2(c, s, Lt), c !== null) {
          tt = c;
          return;
        }
      } else {
        if (c = U2(c, s), c !== null) {
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
  function Jr(r, s, c) {
    var g = qe, w = Xt.transition;
    try {
      Xt.transition = null, qe = 1, eM(r, s, c, g);
    } finally {
      Xt.transition = w, qe = g;
    }
    return null;
  }
  function eM(r, s, c, g) {
    do
      Xo();
    while (wr !== null);
    if ((Oe & 6) !== 0) throw Error(n(327));
    c = r.finishedWork;
    var w = r.finishedLanes;
    if (c === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, c === r.current) throw Error(n(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var S = c.lanes | c.childLanes;
    if (OI(r, S), r === ut && (tt = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || dl || (dl = !0, Kx(Co, function() {
      return Xo(), null;
    })), S = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || S) {
      S = Xt.transition, Xt.transition = null;
      var I = qe;
      qe = 1;
      var z = Oe;
      Oe |= 4, Bf.current = null, K2(r, c), Ox(c, r), x2(Xc), Na = !!Yc, Xc = Yc = null, r.current = c, Y2(c), _a(), Oe = z, qe = I, Xt.transition = S;
    } else r.current = c;
    if (dl && (dl = !1, wr = r, hl = w), S = r.pendingLanes, S === 0 && (yr = null), _c(c.stateNode), kt(r, Ke()), s !== null) for (g = r.onRecoverableError, c = 0; c < s.length; c++) w = s[c], g(w.value, { componentStack: w.stack, digest: w.digest });
    if (fl) throw fl = !1, r = Wf, Wf = null, r;
    return (hl & 1) !== 0 && r.tag !== 0 && Xo(), S = r.pendingLanes, (S & 1) !== 0 ? r === Uf ? ys++ : (ys = 0, Uf = r) : ys = 0, pr(), null;
  }
  function Xo() {
    if (wr !== null) {
      var r = I0(hl), s = Xt.transition, c = qe;
      try {
        if (Xt.transition = null, qe = 16 > r ? 16 : r, wr === null) var g = !1;
        else {
          if (r = wr, wr = null, hl = 0, (Oe & 6) !== 0) throw Error(n(331));
          var w = Oe;
          for (Oe |= 4, ve = r.current; ve !== null; ) {
            var S = ve, I = S.child;
            if ((ve.flags & 16) !== 0) {
              var z = S.deletions;
              if (z !== null) {
                for (var U = 0; U < z.length; U++) {
                  var oe = z[U];
                  for (ve = oe; ve !== null; ) {
                    var ue = ve;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gs(8, ue, S);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ve = fe;
                    else for (; ve !== null; ) {
                      ue = ve;
                      var le = ue.sibling, ge = ue.return;
                      if (Px(ue), ue === oe) {
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
                var we = S.alternate;
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
                ve = S;
              }
            }
            if ((S.subtreeFlags & 2064) !== 0 && I !== null) I.return = S, ve = I;
            else e: for (; ve !== null; ) {
              if (S = ve, (S.flags & 2048) !== 0) switch (S.tag) {
                case 0:
                case 11:
                case 15:
                  gs(9, S, S.return);
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
          if (Oe = w, pr(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
            Wt.onPostCommitFiberRoot($r, r);
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
  function Wx(r, s, c) {
    s = Uo(c, s), s = ux(r, s, 1), r = mr(r, s, 1), s = xt(), r !== null && (or(r, 1, s), kt(r, s));
  }
  function Ze(r, s, c) {
    if (r.tag === 3) Wx(r, r, c);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        Wx(s, r, c);
        break;
      } else if (s.tag === 1) {
        var g = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (yr === null || !yr.has(g))) {
          r = Uo(c, r), r = cx(s, r, 1), s = mr(s, r, 1), r = xt(), s !== null && (or(s, 1, r), kt(s, r));
          break;
        }
      }
      s = s.return;
    }
  }
  function tM(r, s, c) {
    var g = r.pingCache;
    g !== null && g.delete(s), s = xt(), r.pingedLanes |= r.suspendedLanes & c, ut === r && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > Ke() - Hf ? Zr(r, 0) : Vf |= c), kt(r, s);
  }
  function Ux(r, s) {
    s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = No, No <<= 1, (No & 130023424) === 0 && (No = 4194304)));
    var c = xt();
    r = Vn(r, s), r !== null && (or(r, s, c), kt(r, c));
  }
  function nM(r) {
    var s = r.memoizedState, c = 0;
    s !== null && (c = s.retryLane), Ux(r, c);
  }
  function rM(r, s) {
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
    g !== null && g.delete(s), Ux(r, c);
  }
  var Gx;
  Gx = function(r, s, c) {
    if (r !== null) if (r.memoizedProps !== s.pendingProps || bt.current) Et = !0;
    else {
      if ((r.lanes & c) === 0 && (s.flags & 128) === 0) return Et = !1, H2(r, s, c);
      Et = (r.flags & 131072) !== 0;
    }
    else Et = !1, Ve && (s.flags & 1048576) !== 0 && kw(s, Wa, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var g = s.type;
        sl(r, s), r = s.pendingProps;
        var w = qo(s, pt.current);
        Ho(s, c), w = _f(null, s, g, r, w, c);
        var S = bf();
        return s.flags |= 1, typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, St(g) ? (S = !0, Ba(s)) : S = !1, s.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null, pf(s), w.updater = ol, s.stateNode = w, w._reactInternals = s, Rf(s, g, r, c), s = If(null, s, g, !0, S, c)) : (s.tag = 0, Ve && S && rf(s), wt(null, s, w, c), s = s.child), s;
      case 16:
        g = s.elementType;
        e: {
          switch (sl(r, s), r = s.pendingProps, w = g._init, g = w(g._payload), s.type = g, w = s.tag = iM(g), r = on(g, r), w) {
            case 0:
              s = Af(null, s, g, r, c);
              break e;
            case 1:
              s = wx(null, s, g, r, c);
              break e;
            case 11:
              s = px(null, s, g, r, c);
              break e;
            case 14:
              s = gx(null, s, g, on(g.type, r), c);
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
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : on(g, w), Af(r, s, g, w, c);
      case 1:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : on(g, w), wx(r, s, g, w, c);
      case 3:
        e: {
          if (xx(s), r === null) throw Error(n(387));
          g = s.pendingProps, S = s.memoizedState, w = S.element, Lw(r, s), Qa(s, g, null, c);
          var I = s.memoizedState;
          if (g = I.element, S.isDehydrated) if (S = { element: g, isDehydrated: !1, cache: I.cache, pendingSuspenseBoundaries: I.pendingSuspenseBoundaries, transitions: I.transitions }, s.updateQueue.baseState = S, s.memoizedState = S, s.flags & 256) {
            w = Uo(Error(n(423)), s), s = _x(r, s, g, c, w);
            break e;
          } else if (g !== w) {
            w = Uo(Error(n(424)), s), s = _x(r, s, g, c, w);
            break e;
          } else for (Ot = fr(s.stateNode.containerInfo.firstChild), Mt = s, Ve = !0, rn = null, c = Mw(s, null, g, c), s.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            if ($o(), g === w) {
              s = Wn(r, s, c);
              break e;
            }
            wt(r, s, g, c);
          }
          s = s.child;
        }
        return s;
      case 5:
        return qw(s), r === null && af(s), g = s.type, w = s.pendingProps, S = r !== null ? r.memoizedProps : null, I = w.children, Qc(g, w) ? I = null : S !== null && Qc(g, S) && (s.flags |= 32), yx(r, s), wt(r, s, I, c), s.child;
      case 6:
        return r === null && af(s), null;
      case 13:
        return bx(r, s, c);
      case 4:
        return gf(s, s.stateNode.containerInfo), g = s.pendingProps, r === null ? s.child = Bo(s, null, g, c) : wt(r, s, g, c), s.child;
      case 11:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : on(g, w), px(r, s, g, w, c);
      case 7:
        return wt(r, s, s.pendingProps, c), s.child;
      case 8:
        return wt(r, s, s.pendingProps.children, c), s.child;
      case 12:
        return wt(r, s, s.pendingProps.children, c), s.child;
      case 10:
        e: {
          if (g = s.type._context, w = s.pendingProps, S = s.memoizedProps, I = w.value, ze(Ka, g._currentValue), g._currentValue = I, S !== null) if (nn(S.value, I)) {
            if (S.children === w.children && !bt.current) {
              s = Wn(r, s, c);
              break e;
            }
          } else for (S = s.child, S !== null && (S.return = s); S !== null; ) {
            var z = S.dependencies;
            if (z !== null) {
              I = S.child;
              for (var U = z.firstContext; U !== null; ) {
                if (U.context === g) {
                  if (S.tag === 1) {
                    U = Hn(-1, c & -c), U.tag = 2;
                    var oe = S.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var ue = oe.pending;
                      ue === null ? U.next = U : (U.next = ue.next, ue.next = U), oe.pending = U;
                    }
                  }
                  S.lanes |= c, U = S.alternate, U !== null && (U.lanes |= c), df(
                    S.return,
                    c,
                    s
                  ), z.lanes |= c;
                  break;
                }
                U = U.next;
              }
            } else if (S.tag === 10) I = S.type === s.type ? null : S.child;
            else if (S.tag === 18) {
              if (I = S.return, I === null) throw Error(n(341));
              I.lanes |= c, z = I.alternate, z !== null && (z.lanes |= c), df(I, c, s), I = S.sibling;
            } else I = S.child;
            if (I !== null) I.return = S;
            else for (I = S; I !== null; ) {
              if (I === s) {
                I = null;
                break;
              }
              if (S = I.sibling, S !== null) {
                S.return = I.return, I = S;
                break;
              }
              I = I.return;
            }
            S = I;
          }
          wt(r, s, w.children, c), s = s.child;
        }
        return s;
      case 9:
        return w = s.type, g = s.pendingProps.children, Ho(s, c), w = Kt(w), g = g(w), s.flags |= 1, wt(r, s, g, c), s.child;
      case 14:
        return g = s.type, w = on(g, s.pendingProps), w = on(g.type, w), gx(r, s, g, w, c);
      case 15:
        return mx(r, s, s.type, s.pendingProps, c);
      case 17:
        return g = s.type, w = s.pendingProps, w = s.elementType === g ? w : on(g, w), sl(r, s), s.tag = 1, St(g) ? (r = !0, Ba(s)) : r = !1, Ho(s, c), ax(s, g, w), Rf(s, g, w, c), If(null, s, g, !0, r, c);
      case 19:
        return Ex(r, s, c);
      case 22:
        return vx(r, s, c);
    }
    throw Error(n(156, s.tag));
  };
  function Kx(r, s) {
    return wa(r, s);
  }
  function oM(r, s, c, g) {
    this.tag = r, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(r, s, c, g) {
    return new oM(r, s, c, g);
  }
  function Zf(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function iM(r) {
    if (typeof r == "function") return Zf(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === V) return 11;
      if (r === H) return 14;
    }
    return 2;
  }
  function br(r, s) {
    var c = r.alternate;
    return c === null ? (c = Qt(r.tag, s, r.key, r.mode), c.elementType = r.elementType, c.type = r.type, c.stateNode = r.stateNode, c.alternate = r, r.alternate = c) : (c.pendingProps = s, c.type = r.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = r.flags & 14680064, c.childLanes = r.childLanes, c.lanes = r.lanes, c.child = r.child, c.memoizedProps = r.memoizedProps, c.memoizedState = r.memoizedState, c.updateQueue = r.updateQueue, s = r.dependencies, c.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, c.sibling = r.sibling, c.index = r.index, c.ref = r.ref, c;
  }
  function vl(r, s, c, g, w, S) {
    var I = 2;
    if (g = r, typeof r == "function") Zf(r) && (I = 1);
    else if (typeof r == "string") I = 5;
    else e: switch (r) {
      case A:
        return eo(c.children, w, S, s);
      case O:
        I = 8, w |= 8;
        break;
      case D:
        return r = Qt(12, c, s, w | 2), r.elementType = D, r.lanes = S, r;
      case X:
        return r = Qt(13, c, s, w), r.elementType = X, r.lanes = S, r;
      case L:
        return r = Qt(19, c, s, w), r.elementType = L, r.lanes = S, r;
      case K:
        return yl(c, w, S, s);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case G:
            I = 10;
            break e;
          case B:
            I = 9;
            break e;
          case V:
            I = 11;
            break e;
          case H:
            I = 14;
            break e;
          case $:
            I = 16, g = null;
            break e;
        }
        throw Error(n(130, r == null ? r : typeof r, ""));
    }
    return s = Qt(I, c, s, w), s.elementType = r, s.type = g, s.lanes = S, s;
  }
  function eo(r, s, c, g) {
    return r = Qt(7, r, g, s), r.lanes = c, r;
  }
  function yl(r, s, c, g) {
    return r = Qt(22, r, g, s), r.elementType = K, r.lanes = c, r.stateNode = { isHidden: !1 }, r;
  }
  function Jf(r, s, c) {
    return r = Qt(6, r, null, s), r.lanes = c, r;
  }
  function ed(r, s, c) {
    return s = Qt(4, r.children !== null ? r.children : [], r.key, s), s.lanes = c, s.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, s;
  }
  function sM(r, s, c, g, w) {
    this.tag = s, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bi(0), this.expirationTimes = Bi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bi(0), this.identifierPrefix = g, this.onRecoverableError = w, this.mutableSourceEagerHydrationData = null;
  }
  function td(r, s, c, g, w, S, I, z, U) {
    return r = new sM(r, s, c, z, U), s === 1 ? (s = 1, S === !0 && (s |= 8)) : s = 0, S = Qt(3, null, null, s), r.current = S, S.stateNode = r, S.memoizedState = { element: g, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pf(S), r;
  }
  function aM(r, s, c) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: g == null ? null : "" + g, children: r, containerInfo: s, implementation: c };
  }
  function Yx(r) {
    if (!r) return hr;
    r = r._reactInternals;
    e: {
      if (xn(r) !== r || r.tag !== 1) throw Error(n(170));
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
      if (St(c)) return Sw(r, c, s);
    }
    return s;
  }
  function Xx(r, s, c, g, w, S, I, z, U) {
    return r = td(c, g, !0, r, w, S, I, z, U), r.context = Yx(null), c = r.current, g = xt(), w = xr(c), S = Hn(g, w), S.callback = s ?? null, mr(c, S, w), r.current.lanes = w, or(r, w, g), kt(r, g), r;
  }
  function wl(r, s, c, g) {
    var w = s.current, S = xt(), I = xr(w);
    return c = Yx(c), s.context === null ? s.context = c : s.pendingContext = c, s = Hn(S, I), s.payload = { element: r }, g = g === void 0 ? null : g, g !== null && (s.callback = g), r = mr(w, s, I), r !== null && (ln(r, w, I, S), Xa(r, w, I)), I;
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
  function Qx(r, s) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var c = r.retryLane;
      r.retryLane = c !== 0 && c < s ? c : s;
    }
  }
  function nd(r, s) {
    Qx(r, s), (r = r.alternate) && Qx(r, s);
  }
  function lM() {
    return null;
  }
  var Zx = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function rd(r) {
    this._internalRoot = r;
  }
  _l.prototype.render = rd.prototype.render = function(r) {
    var s = this._internalRoot;
    if (s === null) throw Error(n(409));
    wl(r, s, null, null);
  }, _l.prototype.unmount = rd.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var s = r.containerInfo;
      Qr(function() {
        wl(null, r, null, null);
      }), s[zn] = null;
    }
  };
  function _l(r) {
    this._internalRoot = r;
  }
  _l.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var s = L0();
      r = { blockedOn: null, target: r, priority: s };
      for (var c = 0; c < lr.length && s !== 0 && s < lr[c].priority; c++) ;
      lr.splice(c, 0, r), c === 0 && q0(r);
    }
  };
  function od(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function bl(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function Jx() {
  }
  function uM(r, s, c, g, w) {
    if (w) {
      if (typeof g == "function") {
        var S = g;
        g = function() {
          var oe = xl(I);
          S.call(oe);
        };
      }
      var I = Xx(s, g, r, 0, null, !1, !1, "", Jx);
      return r._reactRootContainer = I, r[zn] = I.current, ns(r.nodeType === 8 ? r.parentNode : r), Qr(), I;
    }
    for (; w = r.lastChild; ) r.removeChild(w);
    if (typeof g == "function") {
      var z = g;
      g = function() {
        var oe = xl(U);
        z.call(oe);
      };
    }
    var U = td(r, 0, !1, null, null, !1, !1, "", Jx);
    return r._reactRootContainer = U, r[zn] = U.current, ns(r.nodeType === 8 ? r.parentNode : r), Qr(function() {
      wl(s, U, c, g);
    }), U;
  }
  function Sl(r, s, c, g, w) {
    var S = c._reactRootContainer;
    if (S) {
      var I = S;
      if (typeof w == "function") {
        var z = w;
        w = function() {
          var U = xl(I);
          z.call(U);
        };
      }
      wl(s, I, r, w);
    } else I = uM(c, s, r, w, g);
    return xl(I);
  }
  M0 = function(r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var c = _n(s.pendingLanes);
          c !== 0 && (Nc(s, c | 1), kt(s, Ke()), (Oe & 6) === 0 && (Yo = Ke() + 500, pr()));
        }
        break;
      case 13:
        Qr(function() {
          var g = Vn(r, 1);
          if (g !== null) {
            var w = xt();
            ln(g, r, 1, w);
          }
        }), nd(r, 1);
    }
  }, Rc = function(r) {
    if (r.tag === 13) {
      var s = Vn(r, 134217728);
      if (s !== null) {
        var c = xt();
        ln(s, r, 134217728, c);
      }
      nd(r, 134217728);
    }
  }, O0 = function(r) {
    if (r.tag === 13) {
      var s = xr(r), c = Vn(r, s);
      if (c !== null) {
        var g = xt();
        ln(c, r, s, g);
      }
      nd(r, s);
    }
  }, L0 = function() {
    return qe;
  }, j0 = function(r, s) {
    var c = qe;
    try {
      return qe = r, s();
    } finally {
      qe = c;
    }
  }, Li = function(r, s, c) {
    switch (s) {
      case "input":
        if (Ee(r, c), s = c.name, c.type === "radio" && s != null) {
          for (c = r; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < c.length; s++) {
            var g = c[s];
            if (g !== r && g.form === r.form) {
              var w = Fa(g);
              if (!w) throw Error(n(90));
              de(g), Ee(g, w);
            }
          }
        }
        break;
      case "textarea":
        en(r, c);
        break;
      case "select":
        s = c.value, s != null && ht(r, !!c.multiple, s, !1);
    }
  }, pa = Yf, ga = Qr;
  var cM = { usingClientEntryPoint: !1, Events: [is, jo, Fa, da, ha, Yf] }, ws = { findFiberByHostInstance: Vr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fM = { bundleType: ws.bundleType, version: ws.version, rendererPackageName: ws.rendererPackageName, rendererConfig: ws.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: N.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
    return r = va(r), r === null ? null : r.stateNode;
  }, findFiberByHostInstance: ws.findFiberByHostInstance || lM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!El.isDisabled && El.supportsFiber) try {
      $r = El.inject(fM), Wt = El;
    } catch {
    }
  }
  return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cM, Nt.createPortal = function(r, s) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!od(s)) throw Error(n(200));
    return aM(r, s, null, c);
  }, Nt.createRoot = function(r, s) {
    if (!od(r)) throw Error(n(299));
    var c = !1, g = "", w = Zx;
    return s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), s = td(r, 1, !1, null, null, c, !1, g, w), r[zn] = s.current, ns(r.nodeType === 8 ? r.parentNode : r), new rd(s);
  }, Nt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var s = r._reactInternals;
    if (s === void 0)
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    return r = va(s), r = r === null ? null : r.stateNode, r;
  }, Nt.flushSync = function(r) {
    return Qr(r);
  }, Nt.hydrate = function(r, s, c) {
    if (!bl(s)) throw Error(n(200));
    return Sl(null, r, s, !0, c);
  }, Nt.hydrateRoot = function(r, s, c) {
    if (!od(r)) throw Error(n(405));
    var g = c != null && c.hydratedSources || null, w = !1, S = "", I = Zx;
    if (c != null && (c.unstable_strictMode === !0 && (w = !0), c.identifierPrefix !== void 0 && (S = c.identifierPrefix), c.onRecoverableError !== void 0 && (I = c.onRecoverableError)), s = Xx(s, null, r, 1, c ?? null, w, !1, S, I), r[zn] = s.current, ns(r), g) for (r = 0; r < g.length; r++) c = g[r], w = c._getVersion, w = w(c._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [c, w] : s.mutableSourceEagerHydrationData.push(
      c,
      w
    );
    return new _l(s);
  }, Nt.render = function(r, s, c) {
    if (!bl(s)) throw Error(n(200));
    return Sl(null, r, s, !1, c);
  }, Nt.unmountComponentAtNode = function(r) {
    if (!bl(r)) throw Error(n(40));
    return r._reactRootContainer ? (Qr(function() {
      Sl(null, null, r, !1, function() {
        r._reactRootContainer = null, r[zn] = null;
      });
    }), !0) : !1;
  }, Nt.unstable_batchedUpdates = Yf, Nt.unstable_renderSubtreeIntoContainer = function(r, s, c, g) {
    if (!bl(c)) throw Error(n(200));
    if (r == null || r._reactInternals === void 0) throw Error(n(38));
    return Sl(r, s, c, !1, g);
  }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt;
}
var a1;
function _N() {
  if (a1) return ad.exports;
  a1 = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), ad.exports = _M(), ad.exports;
}
var l1;
function bM() {
  if (l1) return kl;
  l1 = 1;
  var e = _N();
  return kl.createRoot = e.createRoot, kl.hydrateRoot = e.hydrateRoot, kl;
}
var SM = bM();
let bN = k.createContext(
  /** @type {any} */
  null
);
function EM() {
  let e = k.useContext(bN);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function CM() {
  return EM().model;
}
function _s(e) {
  let t = CM(), n = k.useSyncExternalStore(
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
function kM(e) {
  return ({ el: t, model: n, experimental: o }) => {
    let i = SM.createRoot(t);
    return i.render(
      k.createElement(
        k.StrictMode,
        null,
        k.createElement(
          bN.Provider,
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
var NM = { value: () => {
} };
function bu() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Hl(n);
}
function Hl(e) {
  this._ = e;
}
function RM(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Hl.prototype = bu.prototype = {
  constructor: Hl,
  on: function(e, t) {
    var n = this._, o = RM(e + "", n), i, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((i = (e = o[a]).type) && (i = PM(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (i = (e = o[a]).type) n[i] = u1(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = u1(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Hl(e);
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
function PM(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function u1(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = NM, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Zv = "http://www.w3.org/1999/xhtml";
const c1 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Zv,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Su(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), c1.hasOwnProperty(t) ? { space: c1[t], local: e } : e;
}
function TM(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Zv && t.documentElement.namespaceURI === Zv ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function AM(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function SN(e) {
  var t = Su(e);
  return (t.local ? AM : TM)(t);
}
function IM() {
}
function ky(e) {
  return e == null ? IM : function() {
    return this.querySelector(e);
  };
}
function MM(e) {
  typeof e != "function" && (e = ky(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new zt(o, this._parents);
}
function OM(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function LM() {
  return [];
}
function EN(e) {
  return e == null ? LM : function() {
    return this.querySelectorAll(e);
  };
}
function jM(e) {
  return function() {
    return OM(e.apply(this, arguments));
  };
}
function DM(e) {
  typeof e == "function" ? e = jM(e) : e = EN(e);
  for (var t = this._groups, n = t.length, o = [], i = [], a = 0; a < n; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), i.push(f));
  return new zt(o, i);
}
function CN(e) {
  return function() {
    return this.matches(e);
  };
}
function kN(e) {
  return function(t) {
    return t.matches(e);
  };
}
var qM = Array.prototype.find;
function zM(e) {
  return function() {
    return qM.call(this.children, e);
  };
}
function FM() {
  return this.firstElementChild;
}
function $M(e) {
  return this.select(e == null ? FM : zM(typeof e == "function" ? e : kN(e)));
}
var BM = Array.prototype.filter;
function VM() {
  return Array.from(this.children);
}
function HM(e) {
  return function() {
    return BM.call(this.children, e);
  };
}
function WM(e) {
  return this.selectAll(e == null ? VM : HM(typeof e == "function" ? e : kN(e)));
}
function UM(e) {
  typeof e != "function" && (e = CN(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new zt(o, this._parents);
}
function NN(e) {
  return new Array(e.length);
}
function GM() {
  return new zt(this._enter || this._groups.map(NN), this._parents);
}
function Zl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Zl.prototype = {
  constructor: Zl,
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
function KM(e) {
  return function() {
    return e;
  };
}
function YM(e, t, n, o, i, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : n[l] = new Zl(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (i[l] = u);
}
function XM(e, t, n, o, i, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, p = a.length, m = new Array(h), v;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = v = l.call(f, f.__data__, u, t) + "", d.has(v) ? i[u] = f : d.set(v, f));
  for (u = 0; u < p; ++u)
    v = l.call(e, a[u], u, a) + "", (f = d.get(v)) ? (o[u] = f, f.__data__ = a[u], d.delete(v)) : n[u] = new Zl(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (i[u] = f);
}
function QM(e) {
  return e.__data__;
}
function ZM(e, t) {
  if (!arguments.length) return Array.from(this, QM);
  var n = t ? XM : YM, o = this._parents, i = this._groups;
  typeof e != "function" && (e = KM(e));
  for (var a = i.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], p = i[d], m = p.length, v = JM(e.call(h, h && h.__data__, d, o)), E = v.length, y = u[d] = new Array(E), x = l[d] = new Array(E), b = f[d] = new Array(m);
    n(h, p, y, x, b, v, t);
    for (var C = 0, _ = 0, N, P; C < E; ++C)
      if (N = y[C]) {
        for (C >= _ && (_ = C + 1); !(P = x[_]) && ++_ < E; ) ;
        N._next = P || null;
      }
  }
  return l = new zt(l, o), l._enter = u, l._exit = f, l;
}
function JM(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function eO() {
  return new zt(this._exit || this._groups.map(NN), this._parents);
}
function tO(e, t, n) {
  var o = this.enter(), i = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? a.remove() : n(a), o && i ? o.merge(i).order() : i;
}
function nO(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, a = o.length, l = Math.min(i, a), u = new Array(i), f = 0; f < l; ++f)
    for (var d = n[f], h = o[f], p = d.length, m = u[f] = new Array(p), v, E = 0; E < p; ++E)
      (v = d[E] || h[E]) && (m[E] = v);
  for (; f < i; ++f)
    u[f] = n[f];
  return new zt(u, this._parents);
}
function rO() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, a = o[i], l; --i >= 0; )
      (l = o[i]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function oO(e) {
  e || (e = iO);
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
function iO(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function sO() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function aO() {
  return Array.from(this);
}
function lO() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length; i < a; ++i) {
      var l = o[i];
      if (l) return l;
    }
  return null;
}
function uO() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function cO() {
  return !this.node();
}
function fO(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], a = 0, l = i.length, u; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i);
  return this;
}
function dO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function hO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function pO(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function gO(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function mO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function vO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function yO(e, t) {
  var n = Su(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? hO : dO : typeof t == "function" ? n.local ? vO : mO : n.local ? gO : pO)(n, t));
}
function RN(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function wO(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function xO(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function _O(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function bO(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? wO : typeof t == "function" ? _O : xO)(e, t, n ?? "")) : ui(this.node(), e);
}
function ui(e, t) {
  return e.style.getPropertyValue(t) || RN(e).getComputedStyle(e, null).getPropertyValue(t);
}
function SO(e) {
  return function() {
    delete this[e];
  };
}
function EO(e, t) {
  return function() {
    this[e] = t;
  };
}
function CO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function kO(e, t) {
  return arguments.length > 1 ? this.each((t == null ? SO : typeof t == "function" ? CO : EO)(e, t)) : this.node()[e];
}
function PN(e) {
  return e.trim().split(/^|\s+/);
}
function Ny(e) {
  return e.classList || new TN(e);
}
function TN(e) {
  this._node = e, this._names = PN(e.getAttribute("class") || "");
}
TN.prototype = {
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
function AN(e, t) {
  for (var n = Ny(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
}
function IN(e, t) {
  for (var n = Ny(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
}
function NO(e) {
  return function() {
    AN(this, e);
  };
}
function RO(e) {
  return function() {
    IN(this, e);
  };
}
function PO(e, t) {
  return function() {
    (t.apply(this, arguments) ? AN : IN)(this, e);
  };
}
function TO(e, t) {
  var n = PN(e + "");
  if (arguments.length < 2) {
    for (var o = Ny(this.node()), i = -1, a = n.length; ++i < a; ) if (!o.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? PO : t ? NO : RO)(n, t));
}
function AO() {
  this.textContent = "";
}
function IO(e) {
  return function() {
    this.textContent = e;
  };
}
function MO(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function OO(e) {
  return arguments.length ? this.each(e == null ? AO : (typeof e == "function" ? MO : IO)(e)) : this.node().textContent;
}
function LO() {
  this.innerHTML = "";
}
function jO(e) {
  return function() {
    this.innerHTML = e;
  };
}
function DO(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function qO(e) {
  return arguments.length ? this.each(e == null ? LO : (typeof e == "function" ? DO : jO)(e)) : this.node().innerHTML;
}
function zO() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function FO() {
  return this.each(zO);
}
function $O() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function BO() {
  return this.each($O);
}
function VO(e) {
  var t = typeof e == "function" ? e : SN(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function HO() {
  return null;
}
function WO(e, t) {
  var n = typeof e == "function" ? e : SN(e), o = t == null ? HO : typeof t == "function" ? t : ky(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function UO() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function GO() {
  return this.each(UO);
}
function KO() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function YO() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function XO(e) {
  return this.select(e ? YO : KO);
}
function QO(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function ZO(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function JO(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function eL(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, a; n < i; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function tL(e, t, n) {
  return function() {
    var o = this.__on, i, a = ZO(t);
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
function nL(e, t, n) {
  var o = JO(e + ""), i, a = o.length, l;
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
  for (u = t ? tL : eL, i = 0; i < a; ++i) this.each(u(o[i], t, n));
  return this;
}
function MN(e, t, n) {
  var o = RN(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function rL(e, t) {
  return function() {
    return MN(this, e, t);
  };
}
function oL(e, t) {
  return function() {
    return MN(this, e, t.apply(this, arguments));
  };
}
function iL(e, t) {
  return this.each((typeof t == "function" ? oL : rL)(e, t));
}
function* sL() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length, l; i < a; ++i)
      (l = o[i]) && (yield l);
}
var ON = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Xs() {
  return new zt([[document.documentElement]], ON);
}
function aL() {
  return this;
}
zt.prototype = Xs.prototype = {
  constructor: zt,
  select: MM,
  selectAll: DM,
  selectChild: $M,
  selectChildren: WM,
  filter: UM,
  data: ZM,
  enter: GM,
  exit: eO,
  join: tO,
  merge: nO,
  selection: aL,
  order: rO,
  sort: oO,
  call: sO,
  nodes: aO,
  node: lO,
  size: uO,
  empty: cO,
  each: fO,
  attr: yO,
  style: bO,
  property: kO,
  classed: TO,
  text: OO,
  html: qO,
  raise: FO,
  lower: BO,
  append: VO,
  insert: WO,
  remove: GO,
  clone: XO,
  datum: QO,
  on: nL,
  dispatch: iL,
  [Symbol.iterator]: sL
};
function Dt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], ON);
}
function lL(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function cn(e, t) {
  if (e = lL(e), t === void 0 && (t = e.currentTarget), t) {
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
const uL = { passive: !1 }, Os = { capture: !0, passive: !1 };
function cd(e) {
  e.stopImmediatePropagation();
}
function ii(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function LN(e) {
  var t = e.document.documentElement, n = Dt(e).on("dragstart.drag", ii, Os);
  "onselectstart" in t ? n.on("selectstart.drag", ii, Os) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function jN(e, t) {
  var n = e.document.documentElement, o = Dt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", ii, Os), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Nl = (e) => () => e;
function Jv(e, {
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
Jv.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function cL(e) {
  return !e.ctrlKey && !e.button;
}
function fL() {
  return this.parentNode;
}
function dL(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function hL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function DN() {
  var e = cL, t = fL, n = dL, o = hL, i = {}, a = bu("start", "drag", "end"), l = 0, u, f, d, h, p = 0;
  function m(N) {
    N.on("mousedown.drag", v).filter(o).on("touchstart.drag", x).on("touchmove.drag", b, uL).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(N, P) {
    if (!(h || !e.call(this, N, P))) {
      var T = _(this, t.call(this, N, P), N, P, "mouse");
      T && (Dt(N.view).on("mousemove.drag", E, Os).on("mouseup.drag", y, Os), LN(N.view), cd(N), d = !1, u = N.clientX, f = N.clientY, T("start", N));
    }
  }
  function E(N) {
    if (ii(N), !d) {
      var P = N.clientX - u, T = N.clientY - f;
      d = P * P + T * T > p;
    }
    i.mouse("drag", N);
  }
  function y(N) {
    Dt(N.view).on("mousemove.drag mouseup.drag", null), jN(N.view, d), ii(N), i.mouse("end", N);
  }
  function x(N, P) {
    if (e.call(this, N, P)) {
      var T = N.changedTouches, A = t.call(this, N, P), O = T.length, D, G;
      for (D = 0; D < O; ++D)
        (G = _(this, A, N, P, T[D].identifier, T[D])) && (cd(N), G("start", N, T[D]));
    }
  }
  function b(N) {
    var P = N.changedTouches, T = P.length, A, O;
    for (A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (ii(N), O("drag", N, P[A]));
  }
  function C(N) {
    var P = N.changedTouches, T = P.length, A, O;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (O = i[P[A].identifier]) && (cd(N), O("end", N, P[A]));
  }
  function _(N, P, T, A, O, D) {
    var G = a.copy(), B = cn(D || T, P), V, X, L;
    if ((L = n.call(N, new Jv("beforestart", {
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
      return V = L.x - B[0] || 0, X = L.y - B[1] || 0, function H($, K, M) {
        var q = B, Q;
        switch ($) {
          case "start":
            i[O] = H, Q = l++;
            break;
          case "end":
            delete i[O], --l;
          // falls through
          case "drag":
            B = cn(M || K, P), Q = l;
            break;
        }
        G.call(
          $,
          N,
          new Jv($, {
            sourceEvent: K,
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
  return m.filter = function(N) {
    return arguments.length ? (e = typeof N == "function" ? N : Nl(!!N), m) : e;
  }, m.container = function(N) {
    return arguments.length ? (t = typeof N == "function" ? N : Nl(N), m) : t;
  }, m.subject = function(N) {
    return arguments.length ? (n = typeof N == "function" ? N : Nl(N), m) : n;
  }, m.touchable = function(N) {
    return arguments.length ? (o = typeof N == "function" ? N : Nl(!!N), m) : o;
  }, m.on = function() {
    var N = a.on.apply(a, arguments);
    return N === a ? m : N;
  }, m.clickDistance = function(N) {
    return arguments.length ? (p = (N = +N) * N, m) : Math.sqrt(p);
  }, m;
}
function Ry(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function qN(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function Qs() {
}
var Ls = 0.7, Jl = 1 / Ls, si = "\\s*([+-]?\\d+)\\s*", js = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", pL = /^#([0-9a-f]{3,8})$/, gL = new RegExp(`^rgb\\(${si},${si},${si}\\)$`), mL = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), vL = new RegExp(`^rgba\\(${si},${si},${si},${js}\\)$`), yL = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${js}\\)$`), wL = new RegExp(`^hsl\\(${js},${Tn},${Tn}\\)$`), xL = new RegExp(`^hsla\\(${js},${Tn},${Tn},${js}\\)$`), f1 = {
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
Ry(Qs, lo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: d1,
  // Deprecated! Use color.formatHex.
  formatHex: d1,
  formatHex8: _L,
  formatHsl: bL,
  formatRgb: h1,
  toString: h1
});
function d1() {
  return this.rgb().formatHex();
}
function _L() {
  return this.rgb().formatHex8();
}
function bL() {
  return zN(this).formatHsl();
}
function h1() {
  return this.rgb().formatRgb();
}
function lo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = pL.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? p1(t) : n === 3 ? new Rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Rl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Rl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = gL.exec(e)) ? new Rt(t[1], t[2], t[3], 1) : (t = mL.exec(e)) ? new Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = vL.exec(e)) ? Rl(t[1], t[2], t[3], t[4]) : (t = yL.exec(e)) ? Rl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = wL.exec(e)) ? v1(t[1], t[2] / 100, t[3] / 100, 1) : (t = xL.exec(e)) ? v1(t[1], t[2] / 100, t[3] / 100, t[4]) : f1.hasOwnProperty(e) ? p1(f1[e]) : e === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function p1(e) {
  return new Rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Rl(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Rt(e, t, n, o);
}
function SL(e) {
  return e instanceof Qs || (e = lo(e)), e ? (e = e.rgb(), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt();
}
function ey(e, t, n, o) {
  return arguments.length === 1 ? SL(e) : new Rt(e, t, n, o ?? 1);
}
function Rt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
Ry(Rt, ey, qN(Qs, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ls : Math.pow(Ls, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rt(io(this.r), io(this.g), io(this.b), eu(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: g1,
  // Deprecated! Use color.formatHex.
  formatHex: g1,
  formatHex8: EL,
  formatRgb: m1,
  toString: m1
}));
function g1() {
  return `#${oo(this.r)}${oo(this.g)}${oo(this.b)}`;
}
function EL() {
  return `#${oo(this.r)}${oo(this.g)}${oo(this.b)}${oo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function m1() {
  const e = eu(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${io(this.r)}, ${io(this.g)}, ${io(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function eu(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function io(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function oo(e) {
  return e = io(e), (e < 16 ? "0" : "") + e.toString(16);
}
function v1(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new fn(e, t, n, o);
}
function zN(e) {
  if (e instanceof fn) return new fn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Qs || (e = lo(e)), !e) return new fn();
  if (e instanceof fn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), a = Math.max(t, n, o), l = NaN, u = a - i, f = (a + i) / 2;
  return u ? (t === a ? l = (n - o) / u + (n < o) * 6 : n === a ? l = (o - t) / u + 2 : l = (t - n) / u + 4, u /= f < 0.5 ? a + i : 2 - a - i, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new fn(l, u, f, e.opacity);
}
function CL(e, t, n, o) {
  return arguments.length === 1 ? zN(e) : new fn(e, t, n, o ?? 1);
}
function fn(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
Ry(fn, CL, qN(Qs, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new fn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ls : Math.pow(Ls, e), new fn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Rt(
      fd(e >= 240 ? e - 240 : e + 120, i, o),
      fd(e, i, o),
      fd(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new fn(y1(this.h), Pl(this.s), Pl(this.l), eu(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = eu(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${y1(this.h)}, ${Pl(this.s) * 100}%, ${Pl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function y1(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fd(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Py = (e) => () => e;
function kL(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function NL(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function RL(e) {
  return (e = +e) == 1 ? FN : function(t, n) {
    return n - t ? NL(t, n, e) : Py(isNaN(t) ? n : t);
  };
}
function FN(e, t) {
  var n = t - e;
  return n ? kL(e, n) : Py(isNaN(e) ? t : e);
}
const tu = (function e(t) {
  var n = RL(t);
  function o(i, a) {
    var l = n((i = ey(i)).r, (a = ey(a)).r), u = n(i.g, a.g), f = n(i.b, a.b), d = FN(i.opacity, a.opacity);
    return function(h) {
      return i.r = l(h), i.g = u(h), i.b = f(h), i.opacity = d(h), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function PL(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) o[i] = e[i] * (1 - a) + t[i] * a;
    return o;
  };
}
function TL(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function AL(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, i = new Array(o), a = new Array(n), l;
  for (l = 0; l < o; ++l) i[l] = As(e[l], t[l]);
  for (; l < n; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = i[l](u);
    return a;
  };
}
function IL(e, t) {
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
function ML(e, t) {
  var n = {}, o = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = As(e[i], t[i]) : o[i] = t[i];
  return function(a) {
    for (i in n) o[i] = n[i](a);
    return o;
  };
}
var ty = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dd = new RegExp(ty.source, "g");
function OL(e) {
  return function() {
    return e;
  };
}
function LL(e) {
  return function(t) {
    return e(t) + "";
  };
}
function $N(e, t) {
  var n = ty.lastIndex = dd.lastIndex = 0, o, i, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = ty.exec(e)) && (i = dd.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (i = i[0]) ? u[l] ? u[l] += i : u[++l] = i : (u[++l] = null, f.push({ i: l, x: Nn(o, i) })), n = dd.lastIndex;
  return n < t.length && (a = t.slice(n), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? LL(f[0].x) : OL(t) : (t = f.length, function(d) {
    for (var h = 0, p; h < t; ++h) u[(p = f[h]).i] = p.x(d);
    return u.join("");
  });
}
function As(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? Py(t) : (n === "number" ? Nn : n === "string" ? (o = lo(t)) ? (t = o, tu) : $N : t instanceof lo ? tu : t instanceof Date ? IL : TL(t) ? PL : Array.isArray(t) ? AL : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ML : Nn)(e, t);
}
var w1 = 180 / Math.PI, ny = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function BN(e, t, n, o, i, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * n + t * o) && (n -= e * f, o -= t * f), (u = Math.sqrt(n * n + o * o)) && (n /= u, o /= u, f /= u), e * o < t * n && (e = -e, t = -t, f = -f, l = -l), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * w1,
    skewX: Math.atan(f) * w1,
    scaleX: l,
    scaleY: u
  };
}
var Tl;
function jL(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ny : BN(t.a, t.b, t.c, t.d, t.e, t.f);
}
function DL(e) {
  return e == null || (Tl || (Tl = document.createElementNS("http://www.w3.org/2000/svg", "g")), Tl.setAttribute("transform", e), !(e = Tl.transform.baseVal.consolidate())) ? ny : (e = e.matrix, BN(e.a, e.b, e.c, e.d, e.e, e.f));
}
function VN(e, t, n, o) {
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
      for (var E = -1, y = m.length, x; ++E < y; ) p[(x = m[E]).i] = x.x(v);
      return p.join("");
    };
  };
}
var qL = VN(jL, "px, ", "px)", "deg)"), zL = VN(DL, ", ", ")", ")"), FL = 1e-12;
function x1(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function $L(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function BL(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Wl = (function e(t, n, o) {
  function i(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], p = l[1], m = l[2], v = h - u, E = p - f, y = v * v + E * E, x, b;
    if (y < FL)
      b = Math.log(m / d) / t, x = function(A) {
        return [
          u + A * v,
          f + A * E,
          d * Math.exp(t * A * b)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (m * m - d * d + o * y) / (2 * d * n * C), N = (m * m - d * d - o * y) / (2 * m * n * C), P = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(N * N + 1) - N);
      b = (T - P) / t, x = function(A) {
        var O = A * b, D = x1(P), G = d / (n * C) * (D * BL(t * O + P) - $L(P));
        return [
          u + G * v,
          f + G * E,
          d * D / x1(t * O + P)
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
var ci = 0, Cs = 0, bs = 0, HN = 1e3, nu, ks, ru = 0, uo = 0, Eu = 0, Ds = typeof performance == "object" && performance.now ? performance : Date, WN = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ty() {
  return uo || (WN(VL), uo = Ds.now() + Eu);
}
function VL() {
  uo = 0;
}
function ou() {
  this._call = this._time = this._next = null;
}
ou.prototype = UN.prototype = {
  constructor: ou,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ty() : +n) + (t == null ? 0 : +t), !this._next && ks !== this && (ks ? ks._next = this : nu = this, ks = this), this._call = e, this._time = n, ry();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ry());
  }
};
function UN(e, t, n) {
  var o = new ou();
  return o.restart(e, t, n), o;
}
function HL() {
  Ty(), ++ci;
  for (var e = nu, t; e; )
    (t = uo - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ci;
}
function _1() {
  uo = (ru = Ds.now()) + Eu, ci = Cs = 0;
  try {
    HL();
  } finally {
    ci = 0, UL(), uo = 0;
  }
}
function WL() {
  var e = Ds.now(), t = e - ru;
  t > HN && (Eu -= t, ru = e);
}
function UL() {
  for (var e, t = nu, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : nu = n);
  ks = e, ry(o);
}
function ry(e) {
  if (!ci) {
    Cs && (Cs = clearTimeout(Cs));
    var t = e - uo;
    t > 24 ? (e < 1 / 0 && (Cs = setTimeout(_1, e - Ds.now() - Eu)), bs && (bs = clearInterval(bs))) : (bs || (ru = Ds.now(), bs = setInterval(WL, HN)), ci = 1, WN(_1));
  }
}
function b1(e, t, n) {
  var o = new ou();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var GL = bu("start", "end", "cancel", "interrupt"), KL = [], GN = 0, S1 = 1, oy = 2, Ul = 3, E1 = 4, iy = 5, Gl = 6;
function Cu(e, t, n, o, i, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  YL(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: GL,
    tween: KL,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: GN
  });
}
function Ay(e, t) {
  var n = vn(e, t);
  if (n.state > GN) throw new Error("too late; already scheduled");
  return n;
}
function On(e, t) {
  var n = vn(e, t);
  if (n.state > Ul) throw new Error("too late; already running");
  return n;
}
function vn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function YL(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = UN(a, 0, n.time);
  function a(d) {
    n.state = S1, n.timer.restart(l, n.delay, n.time), n.delay <= d && l(d - n.delay);
  }
  function l(d) {
    var h, p, m, v;
    if (n.state !== S1) return f();
    for (h in o)
      if (v = o[h], v.name === n.name) {
        if (v.state === Ul) return b1(l);
        v.state === E1 ? (v.state = Gl, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete o[h]) : +h < t && (v.state = Gl, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete o[h]);
      }
    if (b1(function() {
      n.state === Ul && (n.state = E1, n.timer.restart(u, n.delay, n.time), u(d));
    }), n.state = oy, n.on.call("start", e, e.__data__, n.index, n.group), n.state === oy) {
      for (n.state = Ul, i = new Array(m = n.tween.length), h = 0, p = -1; h < m; ++h)
        (v = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = v);
      i.length = p + 1;
    }
  }
  function u(d) {
    for (var h = d < n.duration ? n.ease.call(null, d / n.duration) : (n.timer.restart(f), n.state = iy, 1), p = -1, m = i.length; ++p < m; )
      i[p].call(e, h);
    n.state === iy && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Gl, n.timer.stop(), delete o[t];
    for (var d in o) return;
    delete e.__transition;
  }
}
function Kl(e, t) {
  var n = e.__transition, o, i, a = !0, l;
  if (n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((o = n[l]).name !== t) {
        a = !1;
        continue;
      }
      i = o.state > oy && o.state < iy, o.state = Gl, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[l];
    }
    a && delete e.__transition;
  }
}
function XL(e) {
  return this.each(function() {
    Kl(this, e);
  });
}
function QL(e, t) {
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
function ZL(e, t, n) {
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
function JL(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = vn(this.node(), n).tween, i = 0, a = o.length, l; i < a; ++i)
      if ((l = o[i]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? QL : ZL)(n, e, t));
}
function Iy(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = On(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return vn(i, o).value[t];
  };
}
function KN(e, t) {
  var n;
  return (typeof t == "number" ? Nn : t instanceof lo ? tu : (n = lo(t)) ? (t = n, tu) : $N)(e, t);
}
function ej(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function tj(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function nj(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function rj(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function oj(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function ij(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function sj(e, t) {
  var n = Su(e), o = n === "transform" ? zL : KN;
  return this.attrTween(e, typeof t == "function" ? (n.local ? ij : oj)(n, o, Iy(this, "attr." + e, t)) : t == null ? (n.local ? tj : ej)(n) : (n.local ? rj : nj)(n, o, t));
}
function aj(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function lj(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function uj(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && lj(e, a)), n;
  }
  return i._value = t, i;
}
function cj(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && aj(e, a)), n;
  }
  return i._value = t, i;
}
function fj(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = Su(e);
  return this.tween(n, (o.local ? uj : cj)(o, t));
}
function dj(e, t) {
  return function() {
    Ay(this, e).delay = +t.apply(this, arguments);
  };
}
function hj(e, t) {
  return t = +t, function() {
    Ay(this, e).delay = t;
  };
}
function pj(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? dj : hj)(t, e)) : vn(this.node(), t).delay;
}
function gj(e, t) {
  return function() {
    On(this, e).duration = +t.apply(this, arguments);
  };
}
function mj(e, t) {
  return t = +t, function() {
    On(this, e).duration = t;
  };
}
function vj(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? gj : mj)(t, e)) : vn(this.node(), t).duration;
}
function yj(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    On(this, e).ease = t;
  };
}
function wj(e) {
  var t = this._id;
  return arguments.length ? this.each(yj(t, e)) : vn(this.node(), t).ease;
}
function xj(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    On(this, e).ease = n;
  };
}
function _j(e) {
  if (typeof e != "function") throw new Error();
  return this.each(xj(this._id, e));
}
function bj(e) {
  typeof e != "function" && (e = CN(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Xn(o, this._parents, this._name, this._id);
}
function Sj(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, a = Math.min(o, i), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = n[u], h = f.length, p = l[u] = new Array(h), m, v = 0; v < h; ++v)
      (m = f[v] || d[v]) && (p[v] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Xn(l, this._parents, this._name, this._id);
}
function Ej(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Cj(e, t, n) {
  var o, i, a = Ej(t) ? Ay : On;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (i = (o = u).copy()).on(t, n), l.on = i;
  };
}
function kj(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vn(this.node(), n).on.on(e) : this.each(Cj(n, e, t));
}
function Nj(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Rj() {
  return this.on("end.remove", Nj(this._id));
}
function Pj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ky(e));
  for (var o = this._groups, i = o.length, a = new Array(i), l = 0; l < i; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, p, m = 0; m < f; ++m)
      (h = u[m]) && (p = e.call(h, h.__data__, m, u)) && ("__data__" in h && (p.__data__ = h.__data__), d[m] = p, Cu(d[m], t, n, m, d, vn(h, n)));
  return new Xn(a, this._parents, t, n);
}
function Tj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = EN(e));
  for (var o = this._groups, i = o.length, a = [], l = [], u = 0; u < i; ++u)
    for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
      if (h = f[p]) {
        for (var m = e.call(h, h.__data__, p, f), v, E = vn(h, n), y = 0, x = m.length; y < x; ++y)
          (v = m[y]) && Cu(v, t, n, y, m, E);
        a.push(m), l.push(h);
      }
  return new Xn(a, l, t, n);
}
var Aj = Xs.prototype.constructor;
function Ij() {
  return new Aj(this._groups, this._parents);
}
function Mj(e, t) {
  var n, o, i;
  return function() {
    var a = ui(this, e), l = (this.style.removeProperty(e), ui(this, e));
    return a === l ? null : a === n && l === o ? i : i = t(n = a, o = l);
  };
}
function YN(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Oj(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = ui(this, e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function Lj(e, t, n) {
  var o, i, a;
  return function() {
    var l = ui(this, e), u = n(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), ui(this, e))), l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u));
  };
}
function jj(e, t) {
  var n, o, i, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = On(this, e), d = f.on, h = f.value[a] == null ? u || (u = YN(t)) : void 0;
    (d !== n || i !== h) && (o = (n = d).copy()).on(l, i = h), f.on = o;
  };
}
function Dj(e, t, n) {
  var o = (e += "") == "transform" ? qL : KN;
  return t == null ? this.styleTween(e, Mj(e, o)).on("end.style." + e, YN(e)) : typeof t == "function" ? this.styleTween(e, Lj(e, o, Iy(this, "style." + e, t))).each(jj(this._id, e)) : this.styleTween(e, Oj(e, o, t), n).on("end.style." + e, null);
}
function qj(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function zj(e, t, n) {
  var o, i;
  function a() {
    var l = t.apply(this, arguments);
    return l !== i && (o = (i = l) && qj(e, l, n)), o;
  }
  return a._value = t, a;
}
function Fj(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, zj(e, t, n ?? ""));
}
function $j(e) {
  return function() {
    this.textContent = e;
  };
}
function Bj(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Vj(e) {
  return this.tween("text", typeof e == "function" ? Bj(Iy(this, "text", e)) : $j(e == null ? "" : e + ""));
}
function Hj(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Wj(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Hj(i)), t;
  }
  return o._value = e, o;
}
function Uj(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Wj(e));
}
function Gj() {
  for (var e = this._name, t = this._id, n = XN(), o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = vn(f, t);
        Cu(f, e, n, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Xn(o, this._parents, e, n);
}
function Kj() {
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
var Yj = 0;
function Xn(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function XN() {
  return ++Yj;
}
var Gn = Xs.prototype;
Xn.prototype = {
  constructor: Xn,
  select: Pj,
  selectAll: Tj,
  selectChild: Gn.selectChild,
  selectChildren: Gn.selectChildren,
  filter: bj,
  merge: Sj,
  selection: Ij,
  transition: Gj,
  call: Gn.call,
  nodes: Gn.nodes,
  node: Gn.node,
  size: Gn.size,
  empty: Gn.empty,
  each: Gn.each,
  on: kj,
  attr: sj,
  attrTween: fj,
  style: Dj,
  styleTween: Fj,
  text: Vj,
  textTween: Uj,
  remove: Rj,
  tween: JL,
  delay: pj,
  duration: vj,
  ease: wj,
  easeVarying: _j,
  end: Kj,
  [Symbol.iterator]: Gn[Symbol.iterator]
};
function Xj(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Qj = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Xj
};
function Zj(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Jj(e) {
  var t, n;
  e instanceof Xn ? (t = e._id, e = e._name) : (t = XN(), (n = Qj).time = Ty(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && Cu(f, e, t, d, l, n || Zj(f, t));
  return new Xn(o, this._parents, e, t);
}
Xs.prototype.interrupt = XL;
Xs.prototype.transition = Jj;
const Al = (e) => () => e;
function eD(e, {
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
function Yn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Yn.prototype = {
  constructor: Yn,
  scale: function(e) {
    return e === 1 ? this : new Yn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Yn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ku = new Yn(1, 0, 0);
QN.prototype = Yn.prototype;
function QN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ku;
  return e.__zoom;
}
function hd(e) {
  e.stopImmediatePropagation();
}
function Ss(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function tD(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function nD() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function C1() {
  return this.__zoom || ku;
}
function rD(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function oD() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function iD(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function ZN() {
  var e = tD, t = nD, n = iD, o = rD, i = oD, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Wl, d = bu("start", "zoom", "end"), h, p, m, v = 500, E = 150, y = 0, x = 10;
  function b(L) {
    L.property("__zoom", C1).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", G).filter(i).on("touchstart.zoom", B).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", X).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(L, H, $, K) {
    var M = L.selection ? L.selection() : L;
    M.property("__zoom", C1), L !== M ? P(L, H, $, K) : M.interrupt().each(function() {
      T(this, arguments).event(K).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, b.scaleBy = function(L, H, $, K) {
    b.scaleTo(L, function() {
      var M = this.__zoom.k, q = typeof H == "function" ? H.apply(this, arguments) : H;
      return M * q;
    }, $, K);
  }, b.scaleTo = function(L, H, $, K) {
    b.transform(L, function() {
      var M = t.apply(this, arguments), q = this.__zoom, Q = $ == null ? N(M) : typeof $ == "function" ? $.apply(this, arguments) : $, j = q.invert(Q), W = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(_(C(q, W), Q, j), M, l);
    }, $, K);
  }, b.translateBy = function(L, H, $, K) {
    b.transform(L, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), l);
    }, null, K);
  }, b.translateTo = function(L, H, $, K, M) {
    b.transform(L, function() {
      var q = t.apply(this, arguments), Q = this.__zoom, j = K == null ? N(q) : typeof K == "function" ? K.apply(this, arguments) : K;
      return n(ku.translate(j[0], j[1]).scale(Q.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), q, l);
    }, K, M);
  };
  function C(L, H) {
    return H = Math.max(a[0], Math.min(a[1], H)), H === L.k ? L : new Yn(H, L.x, L.y);
  }
  function _(L, H, $) {
    var K = H[0] - $[0] * L.k, M = H[1] - $[1] * L.k;
    return K === L.x && M === L.y ? L : new Yn(L.k, K, M);
  }
  function N(L) {
    return [(+L[0][0] + +L[1][0]) / 2, (+L[0][1] + +L[1][1]) / 2];
  }
  function P(L, H, $, K) {
    L.on("start.zoom", function() {
      T(this, arguments).event(K).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(K).end();
    }).tween("zoom", function() {
      var M = this, q = arguments, Q = T(M, q).event(K), j = t.apply(M, q), W = $ == null ? N(j) : typeof $ == "function" ? $.apply(M, q) : $, ie = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), F = M.__zoom, Z = typeof H == "function" ? H.apply(M, q) : H, ee = f(F.invert(W).concat(ie / F.k), Z.invert(W).concat(ie / Z.k));
      return function(Y) {
        if (Y === 1) Y = Z;
        else {
          var te = ee(Y), se = ie / te[2];
          Y = new Yn(se, W[0] - te[0] * se, W[1] - te[1] * se);
        }
        Q.zoom(null, Y);
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
        new eD(L, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: d
        }),
        H
      );
    }
  };
  function O(L, ...H) {
    if (!e.apply(this, arguments)) return;
    var $ = T(this, H).event(L), K = this.__zoom, M = Math.max(a[0], Math.min(a[1], K.k * Math.pow(2, o.apply(this, arguments)))), q = cn(L);
    if ($.wheel)
      ($.mouse[0][0] !== q[0] || $.mouse[0][1] !== q[1]) && ($.mouse[1] = K.invert($.mouse[0] = q)), clearTimeout($.wheel);
    else {
      if (K.k === M) return;
      $.mouse = [q, K.invert(q)], Kl(this), $.start();
    }
    Ss(L), $.wheel = setTimeout(Q, E), $.zoom("mouse", n(_(C(K, M), $.mouse[0], $.mouse[1]), $.extent, l));
    function Q() {
      $.wheel = null, $.end();
    }
  }
  function D(L, ...H) {
    if (m || !e.apply(this, arguments)) return;
    var $ = L.currentTarget, K = T(this, H, !0).event(L), M = Dt(L.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", ie, !0), q = cn(L, $), Q = L.clientX, j = L.clientY;
    LN(L.view), hd(L), K.mouse = [q, this.__zoom.invert(q)], Kl(this), K.start();
    function W(F) {
      if (Ss(F), !K.moved) {
        var Z = F.clientX - Q, ee = F.clientY - j;
        K.moved = Z * Z + ee * ee > y;
      }
      K.event(F).zoom("mouse", n(_(K.that.__zoom, K.mouse[0] = cn(F, $), K.mouse[1]), K.extent, l));
    }
    function ie(F) {
      M.on("mousemove.zoom mouseup.zoom", null), jN(F.view, K.moved), Ss(F), K.event(F).end();
    }
  }
  function G(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, K = cn(L.changedTouches ? L.changedTouches[0] : L, this), M = $.invert(K), q = $.k * (L.shiftKey ? 0.5 : 2), Q = n(_(C($, q), K, M), t.apply(this, H), l);
      Ss(L), u > 0 ? Dt(this).transition().duration(u).call(P, Q, K, L) : Dt(this).call(b.transform, Q, K, L);
    }
  }
  function B(L, ...H) {
    if (e.apply(this, arguments)) {
      var $ = L.touches, K = $.length, M = T(this, H, L.changedTouches.length === K).event(L), q, Q, j, W;
      for (hd(L), Q = 0; Q < K; ++Q)
        j = $[Q], W = cn(j, this), W = [W, this.__zoom.invert(W), j.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== W[2] && (M.touch1 = W, M.taps = 0) : (M.touch0 = W, q = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), q && (M.taps < 2 && (p = W[0], h = setTimeout(function() {
        h = null;
      }, v)), Kl(this), M.start());
    }
  }
  function V(L, ...H) {
    if (this.__zooming) {
      var $ = T(this, H).event(L), K = L.changedTouches, M = K.length, q, Q, j, W;
      for (Ss(L), q = 0; q < M; ++q)
        Q = K[q], j = cn(Q, this), $.touch0 && $.touch0[2] === Q.identifier ? $.touch0[0] = j : $.touch1 && $.touch1[2] === Q.identifier && ($.touch1[0] = j);
      if (Q = $.that.__zoom, $.touch1) {
        var ie = $.touch0[0], F = $.touch0[1], Z = $.touch1[0], ee = $.touch1[1], Y = (Y = Z[0] - ie[0]) * Y + (Y = Z[1] - ie[1]) * Y, te = (te = ee[0] - F[0]) * te + (te = ee[1] - F[1]) * te;
        Q = C(Q, Math.sqrt(Y / te)), j = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], W = [(F[0] + ee[0]) / 2, (F[1] + ee[1]) / 2];
      } else if ($.touch0) j = $.touch0[0], W = $.touch0[1];
      else return;
      $.zoom("touch", n(_(Q, j, W), $.extent, l));
    }
  }
  function X(L, ...H) {
    if (this.__zooming) {
      var $ = T(this, H).event(L), K = L.changedTouches, M = K.length, q, Q;
      for (hd(L), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, v), q = 0; q < M; ++q)
        Q = K[q], $.touch0 && $.touch0[2] === Q.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Q.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Q = cn(Q, this), Math.hypot(p[0] - Q[0], p[1] - Q[1]) < x)) {
        var j = Dt(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(L) {
    return arguments.length ? (o = typeof L == "function" ? L : Al(+L), b) : o;
  }, b.filter = function(L) {
    return arguments.length ? (e = typeof L == "function" ? L : Al(!!L), b) : e;
  }, b.touchable = function(L) {
    return arguments.length ? (i = typeof L == "function" ? L : Al(!!L), b) : i;
  }, b.extent = function(L) {
    return arguments.length ? (t = typeof L == "function" ? L : Al([[+L[0][0], +L[0][1]], [+L[1][0], +L[1][1]]]), b) : t;
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
}, qs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], JN = ["Enter", " ", "Escape"], eR = {
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
var fi;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(fi || (fi = {}));
var so;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(so || (so = {}));
var zs;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(zs || (zs = {}));
const tR = {
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
var iu;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(iu || (iu = {}));
var ye;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ye || (ye = {}));
const k1 = {
  [ye.Left]: ye.Right,
  [ye.Right]: ye.Left,
  [ye.Top]: ye.Bottom,
  [ye.Bottom]: ye.Top
};
function nR(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const rR = (e) => "id" in e && "source" in e && "target" in e, sD = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), My = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Zs = (e, t = [0, 0]) => {
  const { width: n, height: o } = Jn(e), i = e.origin ?? t, a = n * i[0], l = o * i[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, aD = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, i) => {
    const a = typeof i == "string";
    let l = !t.nodeLookup && !a ? i : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(i) : My(i) ? i : t.nodeLookup.get(i.id));
    const u = l ? su(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Nu(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ru(n);
}, Js = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((i) => {
    (t.filter === void 0 || t.filter(i)) && (n = Nu(n, su(i)), o = !0);
  }), o ? Ru(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Oy = (e, t, [n, o, i] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...ta(t, [n, o, i]),
    width: t.width / i,
    height: t.height / i
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: p = !0, hidden: m = !1 } = d;
    if (l && !p || m)
      continue;
    const v = h.width ?? d.width ?? d.initialWidth ?? null, E = h.height ?? d.height ?? d.initialHeight ?? null, y = Fs(u, hi(d)), x = (v ?? 0) * (E ?? 0), b = a && y > 0;
    (!d.internals.handleBounds || b || y >= x || d.dragging) && f.push(d);
  }
  return f;
}, lD = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function uD(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!o || o.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function cD({ nodes: e, width: t, height: n, panZoom: o, minZoom: i, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = uD(e, l), f = Js(u), d = Ly(f, t, n, (l == null ? void 0 : l.minZoom) ?? i, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function oR({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: i, onError: a }) {
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
  else u && pi(l.extent) && (p = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = pi(p) ? co(t, p, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", In.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function fD({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: i }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of n) {
    if (m.deletable === !1)
      continue;
    const v = a.has(m.id), E = !v && m.parentId && l.find((y) => y.id === m.parentId);
    (v || E) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = lD(l, f);
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
const di = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), co = (e = { x: 0, y: 0 }, t, n) => ({
  x: di(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: di(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function iR(e, t, n) {
  const { width: o, height: i } = Jn(n), { x: a, y: l } = n.internals.positionAbsolute;
  return co(e, [
    [a, l],
    [a + o, l + i]
  ], t);
}
const N1 = (e, t, n) => e < t ? di(Math.abs(e - t), 1, t) / t : e > n ? -di(Math.abs(e - n), 1, t) / t : 0, sR = (e, t, n = 15, o = 40) => {
  const i = N1(e.x, o, t.width - o) * n, a = N1(e.y, o, t.height - o) * n;
  return [i, a];
}, Nu = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), sy = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), Ru = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), hi = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = My(e) ? e.internals.positionAbsolute : Zs(e, t);
  return {
    x: n,
    y: o,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, su = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = My(e) ? e.internals.positionAbsolute : Zs(e, t);
  return {
    x: n,
    y: o,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, aR = (e, t) => Ru(Nu(sy(e), sy(t))), Fs = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, R1 = (e) => dn(e.width) && dn(e.height) && dn(e.x) && dn(e.y), dn = (e) => !isNaN(e) && isFinite(e), dD = (e, t) => {
}, ea = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), ta = ({ x: e, y: t }, [n, o, i], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return a ? ea(u, l) : u;
}, au = ({ x: e, y: t }, [n, o, i]) => ({
  x: e * i + n,
  y: t * i + o
});
function Qo(e, t) {
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
function hD(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const o = Qo(e, n), i = Qo(e, t);
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
    const o = Qo(e.top ?? e.y ?? 0, n), i = Qo(e.bottom ?? e.y ?? 0, n), a = Qo(e.left ?? e.x ?? 0, t), l = Qo(e.right ?? e.x ?? 0, t);
    return { top: o, right: l, bottom: i, left: a, x: a + l, y: o + i };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function pD(e, t, n, o, i, a) {
  const { x: l, y: u } = au(e, [t, n, o]), { x: f, y: d } = au({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), h = i - f, p = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(p)
  };
}
const Ly = (e, t, n, o, i, a) => {
  const l = hD(a, t, n), u = (t - l.x) / e.width, f = (n - l.y) / e.height, d = Math.min(u, f), h = di(d, o, i), p = e.x + e.width / 2, m = e.y + e.height / 2, v = t / 2 - p * h, E = n / 2 - m * h, y = pD(e, v, E, h, t, n), x = {
    left: Math.min(y.left - l.left, 0),
    top: Math.min(y.top - l.top, 0),
    right: Math.min(y.right - l.right, 0),
    bottom: Math.min(y.bottom - l.bottom, 0)
  };
  return {
    x: v - x.left + x.right,
    y: E - x.top + x.bottom,
    zoom: h
  };
}, $s = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function pi(e) {
  return e != null && e !== "parent";
}
function Jn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function lR(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function uR(e, t = { width: 0, height: 0 }, n, o, i) {
  const a = { ...e }, l = o.get(n);
  if (l) {
    const u = l.origin || i;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function P1(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function gD() {
  let e, t;
  return { promise: new Promise((o, i) => {
    e = o, t = i;
  }), resolve: e, reject: t };
}
function mD(e) {
  return { ...eR, ...e || {} };
}
function Is(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: i }) {
  const { x: a, y: l } = hn(e), u = ta({ x: a - ((i == null ? void 0 : i.left) ?? 0), y: l - ((i == null ? void 0 : i.top) ?? 0) }, o), { x: f, y: d } = n ? ea(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const jy = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), cR = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, vD = ["INPUT", "SELECT", "TEXTAREA"];
function fR(e) {
  var o, i;
  const t = ((i = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : vD.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const dR = (e) => "clientX" in e, hn = (e, t) => {
  var a, l;
  const n = dR(e), o = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, i = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, T1 = (e, t, n, o, i) => {
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
      ...jy(l)
    };
  });
};
function hR({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: i, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + i * 0.375 + l * 0.375 + n * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), p = Math.abs(d - t);
  return [f, d, h, p];
}
function Il(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function A1({ pos: e, x1: t, y1: n, x2: o, y2: i, c: a }) {
  switch (e) {
    case ye.Left:
      return [t - Il(t - o, a), n];
    case ye.Right:
      return [t + Il(o - t, a), n];
    case ye.Top:
      return [t, n - Il(n - i, a)];
    case ye.Bottom:
      return [t, n + Il(i - n, a)];
  }
}
function pR({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, curvature: l = 0.25 }) {
  const [u, f] = A1({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i,
    c: l
  }), [d, h] = A1({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t,
    c: l
  }), [p, m, v, E] = hR({
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
function gR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, i, l];
}
function yD({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: i = !1 }) {
  if (o !== void 0)
    return o;
  const a = i && n ? 1e3 : 0, l = Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
  return a + l;
}
function wD({ sourceNode: e, targetNode: t, width: n, height: o, transform: i }) {
  const a = Nu(su(e), su(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: o / i[2]
  };
  return Fs(l, Ru(a)) > 0;
}
const xD = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, _D = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), mR = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return rR(e) ? n = { ...e } : n = {
    ...e,
    id: xD(e)
  }, _D(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function vR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [i, a, l, u] = gR({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, i, a, l, u];
}
const I1 = {
  [ye.Left]: { x: -1, y: 0 },
  [ye.Right]: { x: 1, y: 0 },
  [ye.Top]: { x: 0, y: -1 },
  [ye.Bottom]: { x: 0, y: 1 }
}, bD = ({ source: e, sourcePosition: t = ye.Bottom, target: n }) => t === ye.Left || t === ye.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, M1 = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function SD({ source: e, sourcePosition: t = ye.Bottom, target: n, targetPosition: o = ye.Top, center: i, offset: a, stepPosition: l }) {
  const u = I1[t], f = I1[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: n.x + f.x * a, y: n.y + f.y * a }, p = bD({
    source: d,
    sourcePosition: t,
    target: h
  }), m = p.x !== 0 ? "x" : "y", v = p[m];
  let E = [], y, x;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, N] = gR({
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
    u[m] === v ? E = m === "x" ? T : A : E = m === "x" ? A : T;
  } else {
    const T = [{ x: d.x, y: h.y }], A = [{ x: h.x, y: d.y }];
    if (m === "x" ? E = u.x === v ? A : T : E = u.y === v ? T : A, t === o) {
      const V = Math.abs(e[m] - n[m]);
      if (V <= a) {
        const X = Math.min(a - 1, a - V);
        u[m] === v ? b[m] = (d[m] > e[m] ? -1 : 1) * X : C[m] = (h[m] > n[m] ? -1 : 1) * X;
      }
    }
    if (t !== o) {
      const V = m === "x" ? "y" : "x", X = u[m] === f[V], L = d[V] > h[V], H = d[V] < h[V];
      (u[m] === 1 && (!X && L || X && H) || u[m] !== 1 && (!X && H || X && L)) && (E = m === "x" ? T : A);
    }
    const O = { x: d.x + b.x, y: d.y + b.y }, D = { x: h.x + C.x, y: h.y + C.y }, G = Math.max(Math.abs(O.x - E[0].x), Math.abs(D.x - E[0].x)), B = Math.max(Math.abs(O.y - E[0].y), Math.abs(D.y - E[0].y));
    G >= B ? (y = (O.x + D.x) / 2, x = E[0].y) : (y = E[0].x, x = (O.y + D.y) / 2);
  }
  return [[
    e,
    { x: d.x + b.x, y: d.y + b.y },
    ...E,
    { x: h.x + C.x, y: h.y + C.y },
    n
  ], y, x, _, N];
}
function ED(e, t, n, o) {
  const i = Math.min(M1(e, t) / 2, M1(t, n) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === n.x || e.y === l && l === n.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < n.x ? -1 : 1, h = e.y < n.y ? 1 : -1;
    return `L ${a + i * d},${l}Q ${a},${l} ${a},${l + i * h}`;
  }
  const u = e.x < n.x ? 1 : -1, f = e.y < n.y ? -1 : 1;
  return `L ${a},${l + i * f}Q ${a},${l} ${a + i * u},${l}`;
}
function ay({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [p, m, v, E, y] = SD({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [p.reduce((b, C, _) => {
    let N = "";
    return _ > 0 && _ < p.length - 1 ? N = ED(p[_ - 1], C, p[_ + 1], l) : N = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, b += N, b;
  }, ""), m, v, E, y];
}
function O1(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function CD(e) {
  var p;
  const { sourceNode: t, targetNode: n } = e;
  if (!O1(t) || !O1(n))
    return null;
  const o = t.internals.handleBounds || L1(t.handles), i = n.internals.handleBounds || L1(n.handles), a = j1((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = j1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === fi.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (p = e.onError) == null || p.call(e, "008", In.error008(a ? "target" : "source", {
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
function L1(e) {
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
function j1(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ly(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function kD(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: i }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || i].forEach((f) => {
    if (f && typeof f == "object") {
      const d = ly(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || n, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const yR = 1e3, ND = 10, Dy = {
  nodeOrigin: [0, 0],
  nodeExtent: qs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, RD = {
  ...Dy,
  checkEquality: !0
};
function qy(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function PD(e, t, n) {
  const o = qy(Dy, n);
  for (const i of e.values())
    if (i.parentId)
      zy(i, e, t, o);
    else {
      const a = Zs(i, o.nodeOrigin), l = pi(i.extent) ? i.extent : o.nodeExtent, u = co(a, l, Jn(i));
      i.internals.positionAbsolute = u;
    }
}
function TD(e, t) {
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
function uy(e, t, n, o) {
  var d, h;
  const i = qy(RD, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = i != null && i.elevateNodesOnSelect ? yR : 0;
  t.clear(), n.clear();
  for (const p of e) {
    let m = u.get(p.id);
    if (i.checkEquality && p === (m == null ? void 0 : m.internals.userNode))
      t.set(p.id, m);
    else {
      const v = Zs(p, i.nodeOrigin), E = pi(p.extent) ? p.extent : i.nodeExtent, y = co(v, E, Jn(p));
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
          handleBounds: TD(p, m),
          z: wR(p, f),
          userNode: p
        }
      }, t.set(p.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), p.parentId && zy(m, t, n, o, a);
  }
  return l;
}
function AD(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function zy(e, t, n, o, i) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = qy(Dy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  AD(e, n), i && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++i.i, d.internals.z = d.internals.z + i.i * ND), i && d.internals.rootParentIndex !== void 0 && (i.i = d.internals.rootParentIndex);
  const h = a ? yR : 0, { x: p, y: m, z: v } = ID(e, d, l, u, h), { positionAbsolute: E } = e.internals, y = p !== E.x || m !== E.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: p, y: m } : E,
      z: v
    }
  });
}
function wR(e, t) {
  return (dn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function ID(e, t, n, o, i) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = Jn(e), f = Zs(e, n), d = pi(e.extent) ? co(f, e.extent, u) : f;
  let h = co({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = iR(h, u, t));
  const p = wR(e, i), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= p ? m + 1 : p
  };
}
function Fy(e, t, n, o = [0, 0]) {
  var l;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? hi(f), h = aR(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var _;
    const h = f.internals.positionAbsolute, p = Jn(f), m = f.origin ?? o, v = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, E = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(p.width, Math.round(u.width)), x = Math.max(p.height, Math.round(u.height)), b = (y - p.width) * m[0], C = (x - p.height) * m[1];
    (v > 0 || E > 0 || b || C) && (i.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - v + b,
        y: f.position.y - E + C
      }
    }), (_ = n.get(d)) == null || _.forEach((N) => {
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
        width: y + (v ? m[0] * v - b : 0),
        height: x + (E ? m[1] * E - C : 0)
      }
    });
  }), i;
}
function MD(e, t, n, o, i, a) {
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
    const E = jy(m.nodeElement), y = v.measured.width !== E.width || v.measured.height !== E.height;
    if (!!(E.width && E.height && (y || !v.internals.handleBounds || m.force))) {
      const b = m.nodeElement.getBoundingClientRect(), C = pi(v.extent) ? v.extent : a;
      let { positionAbsolute: _ } = v.internals;
      v.parentId && v.extent === "parent" ? _ = iR(_, E, t.get(v.parentId)) : C && (_ = co(_, C, E));
      const N = {
        ...v,
        measured: E,
        internals: {
          ...v.internals,
          positionAbsolute: _,
          handleBounds: {
            source: T1("source", m.nodeElement, b, h, v.id),
            target: T1("target", m.nodeElement, b, h, v.id)
          }
        }
      };
      t.set(v.id, N), v.parentId && zy(N, t, n, { nodeOrigin: i }), u = !0, y && (f.push({
        id: v.id,
        type: "dimensions",
        dimensions: E
      }), v.expandParent && v.parentId && p.push({
        id: v.id,
        parentId: v.parentId,
        rect: hi(N, i)
      }));
    }
  }
  if (p.length > 0) {
    const m = Fy(p, t, n, i);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function OD({ delta: e, panZoom: t, transform: n, translateExtent: o, width: i, height: a }) {
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
function D1(e, t, n, o, i, a) {
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
    D1("source", f, h, e, i, l), D1("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function _R(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : _R(n, t) : !1;
}
function q1(e, t, n) {
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
function LD(e, t, n, o) {
  const i = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !_R(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
function pd({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
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
function jD({ dragItems: e, snapGrid: t, x: n, y: o }) {
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
function DD({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: i }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, p = !1, m = null, v = !1, E = !1, y = null;
  function x({ noDragClassName: C, handleSelector: _, domNode: N, isSelectable: P, nodeId: T, nodeClickDistance: A = 0 }) {
    m = Dt(N);
    function O({ x: V, y: X }) {
      const { nodeLookup: L, nodeExtent: H, snapGrid: $, snapToGrid: K, nodeOrigin: M, onNodeDrag: q, onSelectionDrag: Q, onError: j, updateNodePositions: W } = t();
      a = { x: V, y: X };
      let ie = !1;
      const F = u.size > 1, Z = F && H ? sy(Js(u)) : null, ee = F && K ? jD({
        dragItems: u,
        snapGrid: $,
        x: V,
        y: X
      }) : null;
      for (const [Y, te] of u) {
        if (!L.has(Y))
          continue;
        let se = { x: V - te.distance.x, y: X - te.distance.y };
        K && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : ea(se, $));
        let ae = null;
        if (F && H && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, be = pe.x - Z.x + H[0][0], me = pe.x + te.measured.width - Z.x2 + H[1][0], Re = pe.y - Z.y + H[0][1], Ee = pe.y + te.measured.height - Z.y2 + H[1][1];
          ae = [
            [be, Re],
            [me, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = oR({
          nodeId: Y,
          nextPosition: se,
          nodeLookup: L,
          nodeExtent: ae || H,
          nodeOrigin: M,
          onError: j
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (W(u, !0), y && (o || q || !T && Q))) {
        const [Y, te] = pd({
          nodeId: T,
          dragItems: u,
          nodeLookup: L
        });
        o == null || o(y, u, Y, te), q == null || q(y, Y, te), T || Q == null || Q(y, te);
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
      const [$, K] = sR(d, h, L);
      ($ !== 0 || K !== 0) && (a.x = (a.x ?? 0) - $ / V[2], a.y = (a.y ?? 0) - K / V[2], await X({ x: $, y: K }) && O(a)), l = requestAnimationFrame(D);
    }
    function G(V) {
      var F;
      const { nodeLookup: X, multiSelectionActive: L, nodesDraggable: H, transform: $, snapGrid: K, snapToGrid: M, selectNodesOnDrag: q, onNodeDragStart: Q, onSelectionDragStart: j, unselectNodesAndEdges: W } = t();
      p = !0, (!q || !P) && !L && T && ((F = X.get(T)) != null && F.selected || W()), P && q && T && (e == null || e(T));
      const ie = Is(V.sourceEvent, { transform: $, snapGrid: K, snapToGrid: M, containerBounds: h });
      if (a = ie, u = LD(X, H, ie, T), u.size > 0 && (n || Q || !T && j)) {
        const [Z, ee] = pd({
          nodeId: T,
          dragItems: u,
          nodeLookup: X
        });
        n == null || n(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), T || j == null || j(V.sourceEvent, ee);
      }
    }
    const B = DN().clickDistance(A).on("start", (V) => {
      const { domNode: X, nodeDragThreshold: L, transform: H, snapGrid: $, snapToGrid: K } = t();
      h = (X == null ? void 0 : X.getBoundingClientRect()) || null, v = !1, E = !1, y = V.sourceEvent, L === 0 && G(V), a = Is(V.sourceEvent, { transform: H, snapGrid: $, snapToGrid: K, containerBounds: h }), d = hn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: X, transform: L, snapGrid: H, snapToGrid: $, nodeDragThreshold: K, nodeLookup: M } = t(), q = Is(V.sourceEvent, { transform: L, snapGrid: H, snapToGrid: $, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !M.has(T)) && (v = !0), !v) {
        if (!f && X && p && (f = !0, D()), !p) {
          const Q = hn(V.sourceEvent, h), j = Q.x - d.x, W = Q.y - d.y;
          Math.sqrt(j * j + W * W) > K && G(V);
        }
        (a.x !== q.xSnapped || a.y !== q.ySnapped) && u && p && (d = hn(V.sourceEvent, h), O(q));
      }
    }).on("end", (V) => {
      if (!(!p || v) && (f = !1, p = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: X, updateNodePositions: L, onNodeDragStop: H, onSelectionDragStop: $ } = t();
        if (E && (L(u, !1), E = !1), i || H || !T && $) {
          const [K, M] = pd({
            nodeId: T,
            dragItems: u,
            nodeLookup: X,
            dragging: !1
          });
          i == null || i(V.sourceEvent, u, K, M), H == null || H(V.sourceEvent, K, M), T || $ == null || $(V.sourceEvent, M);
        }
      }
    }).filter((V) => {
      const X = V.target;
      return !V.button && (!C || !q1(X, `.${C}`, N)) && (!_ || q1(X, _, N));
    });
    m.call(B);
  }
  function b() {
    m == null || m.on(".drag", null);
  }
  return {
    update: x,
    destroy: b
  };
}
function qD(e, t, n) {
  const o = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    Fs(i, hi(a)) > 0 && o.push(a);
  return o;
}
const zD = 250;
function FD(e, t, n, o) {
  var u, f;
  let i = [], a = 1 / 0;
  const l = qD(e, n, t + zD);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const p of h) {
      if (o.nodeId === p.nodeId && o.type === p.type && o.id === p.id)
        continue;
      const { x: m, y: v } = Bs(d, p, p.position, !0), E = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(v - e.y, 2));
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
function bR(e, t, n, o, i, a = !1) {
  var d, h, p;
  const l = o.get(e);
  if (!l)
    return null;
  const u = i === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((p = l.internals.handleBounds) == null ? void 0 : p.target) ?? []], f = (n ? u == null ? void 0 : u.find((m) => m.id === n) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...Bs(l, f, f.position, !0) } : f;
}
function SR(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function $D(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ER = () => !0;
function BD(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: i, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: p, panBy: m, cancelConnection: v, onConnectStart: E, onConnect: y, onConnectEnd: x, isValidConnection: b = ER, onReconnectEnd: C, updateConnection: _, getTransform: N, getFromHandle: P, autoPanSpeed: T, dragThreshold: A = 1, handleDomNode: O }) {
  const D = cR(e.target);
  let G = 0, B;
  const { x: V, y: X } = hn(e), L = SR(a, O), H = u == null ? void 0 : u.getBoundingClientRect();
  let $ = !1;
  if (!H || !L)
    return;
  const K = bR(i, L, o, f, t);
  if (!K)
    return;
  let M = hn(e, H), q = !1, Q = null, j = !1, W = null;
  function ie() {
    if (!h || !H)
      return;
    const [ce, de] = sR(M, H, T);
    m({ x: ce, y: de }), G = requestAnimationFrame(ie);
  }
  const F = {
    ...K,
    nodeId: i,
    type: L,
    position: K.position
  }, Z = f.get(i);
  let Y = {
    inProgress: !0,
    isValid: null,
    from: Bs(Z, F, ye.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: k1[F.position],
    toNode: null,
    pointer: M
  };
  function te() {
    $ = !0, _(Y), E == null || E(e, { nodeId: i, handleId: o, handleType: L });
  }
  A === 0 && te();
  function se(ce) {
    if (!$) {
      const { x: me, y: Re } = hn(ce), Ee = me - V, Je = Re - X;
      if (!(Ee * Ee + Je * Je > A * A))
        return;
      te();
    }
    if (!P() || !F) {
      ae(ce);
      return;
    }
    const de = N();
    M = hn(ce, H), B = FD(ta(M, de, !1, [1, 1]), n, f, F), q || (ie(), q = !0);
    const pe = CR(ce, {
      handle: B,
      connectionMode: t,
      fromNodeId: i,
      fromHandleId: o,
      fromType: l ? "target" : "source",
      isValidConnection: b,
      doc: D,
      lib: d,
      flowId: p,
      nodeLookup: f
    });
    W = pe.handleDomNode, Q = pe.connection, j = $D(!!B, pe.isValid);
    const be = {
      // from stays the same
      ...Y,
      isValid: j,
      to: pe.toHandle && j ? au({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: j && pe.toHandle ? pe.toHandle.position : k1[F.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    _(be), Y = be;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if ($) {
        (B || W) && Q && j && (y == null || y(Q));
        const { inProgress: de, ...pe } = Y, be = {
          ...pe,
          toPosition: Y.toHandle ? Y.toPosition : null
        };
        x == null || x(ce, be), a && (C == null || C(ce, be));
      }
      v(), cancelAnimationFrame(G), q = !1, j = !1, Q = null, W = null, D.removeEventListener("mousemove", se), D.removeEventListener("mouseup", ae), D.removeEventListener("touchmove", se), D.removeEventListener("touchend", ae);
    }
  }
  D.addEventListener("mousemove", se), D.addEventListener("mouseup", ae), D.addEventListener("touchmove", se), D.addEventListener("touchend", ae);
}
function CR(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: i, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = ER, nodeLookup: h }) {
  const p = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: E } = hn(e), y = l.elementFromPoint(v, E), x = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, b = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const C = SR(void 0, x), _ = x.getAttribute("data-nodeid"), N = x.getAttribute("data-handleid"), P = x.classList.contains("connectable"), T = x.classList.contains("connectableend");
    if (!_ || !C)
      return b;
    const A = {
      source: p ? _ : o,
      sourceHandle: p ? N : i,
      target: p ? o : _,
      targetHandle: p ? i : N
    };
    b.connection = A;
    const D = P && T && (n === fi.Strict ? p && C === "source" || !p && C === "target" : _ !== o || N !== i);
    b.isValid = D && d(A), b.toHandle = bR(_, C, N, h, n, !0);
  }
  return b;
}
const cy = {
  onPointerDown: BD,
  isValid: CR
};
function VD({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const i = Dt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: p = !0, zoomable: m = !0, inversePan: v = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const N = n(), P = _.sourceEvent.ctrlKey && $s() ? 10 : 1, T = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, A = N[2] * Math.pow(2, T * P);
      t.scaleTo(A);
    };
    let y = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, b = (_) => {
      const N = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], T = [P[0] - y[0], P[1] - y[1]];
      y = P;
      const A = o() * Math.max(N[2], Math.log(N[2])) * (v ? -1 : 1), O = {
        x: N[0] - T[0] * A,
        y: N[1] - T[1] * A
      }, D = [
        [0, 0],
        [f, d]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: N[2]
      }, D, u);
    }, C = ZN().on("start", x).on("zoom", p ? b : null).on("zoom.wheel", m ? E : null);
    i.call(C, {});
  }
  function l() {
    i.on("zoom", null);
  }
  return {
    update: a,
    destroy: l,
    pointer: cn
  };
}
const Pu = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), gd = ({ x: e, y: t, zoom: n }) => ku.translate(e, t).scale(n), ri = (e, t) => e.target.closest(`.${t}`), kR = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), HD = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, md = (e, t = 0, n = HD, o = () => {
}) => {
  const i = typeof t == "number" && t > 0;
  return i || o(), i ? e.transition().duration(t).ease(n).on("end", o) : e;
}, NR = (e) => {
  const t = e.ctrlKey && $s() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function WD({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (ri(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const x = cn(h), b = NR(h), C = p * Math.pow(2, b);
      o.scaleTo(n, C, x, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let v = i === so.Vertical ? 0 : h.deltaX * m, E = i === so.Horizontal ? 0 : h.deltaY * m;
    !$s() && h.shiftKey && i !== so.Vertical && (v = h.deltaY * m, E = 0), o.translateBy(
      n,
      -(v / p) * a,
      -(E / p) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Pu(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function UD({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, i) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = ri(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), n.call(this, o, i);
  };
}
function GD({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const i = Pu(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), n && (n == null || n(o.sourceEvent, i));
  };
}
function KD({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: i }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(n && kR(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), i && !((u = a.sourceEvent) != null && u.internal) && (i == null || i(a.sourceEvent, Pu(a.transform)));
  };
}
function YD({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: i, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && kR(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), i)) {
      const f = Pu(l.transform);
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
function XD({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
  return (p) => {
    var x;
    const m = e || t, v = n && p.ctrlKey, E = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (ri(p, `${d}-flow__node`) || ri(p, `${d}-flow__edge`)))
      return !0;
    if (!o && !m && !i && !a && !n || l || h && !E || ri(p, u) && E || ri(p, f) && (!E || i && E && !e) || !n && p.ctrlKey && E)
      return !1;
    if (!n && p.type === "touchstart" && ((x = p.touches) == null ? void 0 : x.length) > 1)
      return p.preventDefault(), !1;
    if (!m && !i && !v && E || !o && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(o) && !o.includes(p.button) && p.type === "mousedown")
      return !1;
    const y = Array.isArray(o) && o.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || E) && y;
  };
}
function QD({ domNode: e, minZoom: t, maxZoom: n, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), p = ZN().scaleExtent([t, n]).translateExtent(o), m = Dt(e).call(p);
  C({
    x: i.x,
    y: i.y,
    zoom: di(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = m.on("wheel.zoom"), E = m.on("dblclick.zoom");
  p.wheelDelta(NR);
  function y(B, V) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? As : Wl).transform(md(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: B, noPanClassName: V, onPaneContextMenu: X, userSelectionActive: L, panOnScroll: H, panOnDrag: $, panOnScrollMode: K, panOnScrollSpeed: M, preventScrolling: q, zoomOnPinch: Q, zoomOnScroll: j, zoomOnDoubleClick: W, zoomActivationKeyPressed: ie, lib: F, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: Y, selectionOnDrag: te }) {
    L && !d.isZoomingOrPanning && b();
    const se = H && !ie && !L;
    p.clickDistance(te ? 1 / 0 : !dn(Y) || Y < 0 ? 0 : Y);
    const ae = se ? WD({
      zoomPanValues: d,
      noWheelClassName: B,
      d3Selection: m,
      d3Zoom: p,
      panOnScrollMode: K,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : UD({
      noWheelClassName: B,
      preventScrolling: q,
      d3ZoomHandler: v
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !L) {
      const de = GD({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      p.on("start", de);
      const pe = KD({
        zoomPanValues: d,
        panOnDrag: $,
        onPaneContextMenu: !!X,
        onPanZoom: a,
        onTransformChange: Z
      });
      p.on("zoom", pe);
      const be = YD({
        zoomPanValues: d,
        panOnDrag: $,
        panOnScroll: H,
        onPaneContextMenu: X,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      p.on("end", be);
    }
    const ce = XD({
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
    p.filter(ce), W ? m.on("dblclick.zoom", E) : m.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function C(B, V, X) {
    const L = gd(B), H = p == null ? void 0 : p.constrain()(L, V, X);
    return H && await y(H), new Promise(($) => $(H));
  }
  async function _(B, V) {
    const X = gd(B);
    return await y(X, V), new Promise((L) => L(X));
  }
  function N(B) {
    if (m) {
      const V = gd(B), X = m.property("__zoom");
      (X.k !== B.zoom || X.x !== B.x || X.y !== B.y) && (p == null || p.transform(m, V, null, { sync: !0 }));
    }
  }
  function P() {
    const B = m ? QN(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: B.x, y: B.y, zoom: B.k };
  }
  function T(B, V) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? As : Wl).scaleTo(md(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function A(B, V) {
    return m ? new Promise((X) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? As : Wl).scaleBy(md(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => X(!0)), B);
    }) : Promise.resolve(!1);
  }
  function O(B) {
    p == null || p.scaleExtent(B);
  }
  function D(B) {
    p == null || p.translateExtent(B);
  }
  function G(B) {
    const V = !dn(B) || B < 0 ? 0 : B;
    p == null || p.clickDistance(V);
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
    setTranslateExtent: D,
    syncViewport: N,
    setClickDistance: G
  };
}
var gi;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(gi || (gi = {}));
function ZD({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: i, affectsY: a }) {
  const l = e - t, u = n - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && i && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function z1(e) {
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
function Ml(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function F1(e, t) {
  return e ? !t : t;
}
function JD(e, t, n, o, i, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: p } = t, m = h && p, { xSnapped: v, ySnapped: E } = n, { minWidth: y, maxWidth: x, minHeight: b, maxHeight: C } = o, { x: _, y: N, width: P, height: T, aspectRatio: A } = e;
  let O = Math.floor(h ? v - e.pointerX : 0), D = Math.floor(p ? E - e.pointerY : 0);
  const G = P + (f ? -O : O), B = T + (d ? -D : D), V = -a[0] * P, X = -a[1] * T;
  let L = Ml(G, y, x), H = Ml(B, b, C);
  if (l) {
    let M = 0, q = 0;
    f && O < 0 ? M = Er(_ + O + V, l[0][0]) : !f && O > 0 && (M = Cr(_ + G + V, l[1][0])), d && D < 0 ? q = Er(N + D + X, l[0][1]) : !d && D > 0 && (q = Cr(N + B + X, l[1][1])), L = Math.max(L, M), H = Math.max(H, q);
  }
  if (u) {
    let M = 0, q = 0;
    f && O > 0 ? M = Cr(_ + O, u[0][0]) : !f && O < 0 && (M = Er(_ + G, u[1][0])), d && D > 0 ? q = Cr(N + D, u[0][1]) : !d && D < 0 && (q = Er(N + B, u[1][1])), L = Math.max(L, M), H = Math.max(H, q);
  }
  if (i) {
    if (h) {
      const M = Ml(G / A, b, C) * A;
      if (L = Math.max(L, M), l) {
        let q = 0;
        !f && !d || f && !d && m ? q = Cr(N + X + G / A, l[1][1]) * A : q = Er(N + X + (f ? O : -O) / A, l[0][1]) * A, L = Math.max(L, q);
      }
      if (u) {
        let q = 0;
        !f && !d || f && !d && m ? q = Er(N + G / A, u[1][1]) * A : q = Cr(N + (f ? O : -O) / A, u[0][1]) * A, L = Math.max(L, q);
      }
    }
    if (p) {
      const M = Ml(B * A, y, x) / A;
      if (H = Math.max(H, M), l) {
        let q = 0;
        !f && !d || d && !f && m ? q = Cr(_ + B * A + V, l[1][0]) / A : q = Er(_ + (d ? D : -D) * A + V, l[0][0]) / A, H = Math.max(H, q);
      }
      if (u) {
        let q = 0;
        !f && !d || d && !f && m ? q = Er(_ + B * A, u[1][0]) / A : q = Cr(_ + (d ? D : -D) * A, u[0][0]) / A, H = Math.max(H, q);
      }
    }
  }
  D = D + (D < 0 ? H : -H), O = O + (O < 0 ? L : -L), i && (m ? G > B * A ? D = (F1(f, d) ? -O : O) / A : O = (F1(f, d) ? -D : D) * A : h ? (D = O / A, d = f) : (O = D * A, f = d));
  const $ = f ? _ + O : _, K = d ? N + D : N;
  return {
    width: P + (f ? -O : O),
    height: T + (d ? -D : D),
    x: a[0] * O * (f ? -1 : 1) + $,
    y: a[1] * D * (d ? -1 : 1) + K
  };
}
const RR = { width: 0, height: 0, x: 0, y: 0 }, eq = {
  ...RR,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function tq(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function nq(e, t, n) {
  const o = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = n[0] * a, f = n[1] * l;
  return [
    [o - u, i - f],
    [o + a - u, i + l - f]
  ];
}
function rq({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: i }) {
  const a = Dt(e);
  let l = {
    controlDirection: z1("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: !1
  };
  function u({ controlPosition: d, boundaries: h, keepAspectRatio: p, resizeDirection: m, onResizeStart: v, onResize: E, onResizeEnd: y, shouldResize: x }) {
    let b = { ...RR }, C = { ...eq };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: p,
      controlDirection: z1(d)
    };
    let _, N = null, P = [], T, A, O, D = !1;
    const G = DN().on("start", (B) => {
      const { nodeLookup: V, transform: X, snapGrid: L, snapToGrid: H, nodeOrigin: $, paneDomNode: K } = n();
      if (_ = V.get(t), !_)
        return;
      N = (K == null ? void 0 : K.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: q } = Is(B.sourceEvent, {
        transform: X,
        snapGrid: L,
        snapToGrid: H,
        containerBounds: N
      });
      b = {
        width: _.measured.width ?? 0,
        height: _.measured.height ?? 0,
        x: _.position.x ?? 0,
        y: _.position.y ?? 0
      }, C = {
        ...b,
        pointerX: M,
        pointerY: q,
        aspectRatio: b.width / b.height
      }, T = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (T = V.get(_.parentId), A = T && _.extent === "parent" ? tq(T) : void 0), P = [], O = void 0;
      for (const [Q, j] of V)
        if (j.parentId === t && (P.push({
          id: Q,
          position: { ...j.position },
          extent: j.extent
        }), j.extent === "parent" || j.expandParent)) {
          const W = nq(j, _, j.origin ?? $);
          O ? O = [
            [Math.min(W[0][0], O[0][0]), Math.min(W[0][1], O[0][1])],
            [Math.max(W[1][0], O[1][0]), Math.max(W[1][1], O[1][1])]
          ] : O = W;
        }
      v == null || v(B, { ...b });
    }).on("drag", (B) => {
      const { transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H } = n(), $ = Is(B.sourceEvent, {
        transform: V,
        snapGrid: X,
        snapToGrid: L,
        containerBounds: N
      }), K = [];
      if (!_)
        return;
      const { x: M, y: q, width: Q, height: j } = b, W = {}, ie = _.origin ?? H, { width: F, height: Z, x: ee, y: Y } = JD(C, l.controlDirection, $, l.boundaries, l.keepAspectRatio, ie, A, O), te = F !== Q, se = Z !== j, ae = ee !== M && te, ce = Y !== q && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (W.x = ae ? ee : b.x, W.y = ce ? Y : b.y, b.x = W.x, b.y = W.y, P.length > 0)) {
        const me = ee - M, Re = Y - q;
        for (const Ee of P)
          Ee.position = {
            x: Ee.position.x - me + ie[0] * (F - Q),
            y: Ee.position.y - Re + ie[1] * (Z - j)
          }, K.push(Ee);
      }
      if ((te || se) && (W.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? F : b.width, W.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : b.height, b.width = W.width, b.height = W.height), T && _.expandParent) {
        const me = ie[0] * (W.width ?? 0);
        W.x && W.x < me && (b.x = me, C.x = C.x - (W.x - me));
        const Re = ie[1] * (W.height ?? 0);
        W.y && W.y < Re && (b.y = Re, C.y = C.y - (W.y - Re));
      }
      const de = ZD({
        width: b.width,
        prevWidth: Q,
        height: b.height,
        prevHeight: j,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ...b, direction: de };
      (x == null ? void 0 : x(B, pe)) !== !1 && (D = !0, E == null || E(B, pe), o(W, K));
    }).on("end", (B) => {
      D && (y == null || y(B, { ...b }), i == null || i({ ...b }), D = !1);
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
var vd = { exports: {} }, yd = {}, wd = { exports: {} }, xd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1;
function oq() {
  if ($1) return xd;
  $1 = 1;
  var e = Ys();
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, i = e.useEffect, a = e.useLayoutEffect, l = e.useDebugValue;
  function u(p, m) {
    var v = m(), E = o({ inst: { value: v, getSnapshot: m } }), y = E[0].inst, x = E[1];
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
  return xd.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, xd;
}
var B1;
function iq() {
  return B1 || (B1 = 1, wd.exports = oq()), wd.exports;
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
var V1;
function sq() {
  if (V1) return yd;
  V1 = 1;
  var e = Ys(), t = iq();
  function n(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return yd.useSyncExternalStoreWithSelector = function(d, h, p, m, v) {
    var E = a(null);
    if (E.current === null) {
      var y = { hasValue: !1, value: null };
      E.current = y;
    } else y = E.current;
    E = u(
      function() {
        function b(T) {
          if (!C) {
            if (C = !0, _ = T, T = m(T), v !== void 0 && y.hasValue) {
              var A = y.value;
              if (v(A, T))
                return N = A;
            }
            return N = T;
          }
          if (A = N, o(_, T)) return A;
          var O = m(T);
          return v !== void 0 && v(A, O) ? (_ = T, A) : (_ = T, N = O);
        }
        var C = !1, _, N, P = p === void 0 ? null : p;
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
    var x = i(d, E[0], E[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = x;
      },
      [x]
    ), f(x), x;
  }, yd;
}
var H1;
function aq() {
  return H1 || (H1 = 1, vd.exports = sq()), vd.exports;
}
var lq = aq();
const uq = /* @__PURE__ */ _u(lq), cq = {}, W1 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (h, p) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const v = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((E) => E(t, v));
    }
  }, i = () => t, f = { setState: o, getState: i, getInitialState: () => d, subscribe: (h) => (n.add(h), () => n.delete(h)), destroy: () => {
    (cq ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(o, i, f);
  return f;
}, fq = (e) => e ? W1(e) : W1, { useDebugValue: dq } = kn, { useSyncExternalStoreWithSelector: hq } = uq, pq = (e) => e;
function PR(e, t = pq, n) {
  const o = hq(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return dq(o), o;
}
const U1 = (e, t) => {
  const n = fq(e), o = (i, a = t) => PR(n, i, a);
  return Object.assign(o, n), o;
}, gq = (e, t) => e ? U1(e, t) : U1;
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
var na = _N();
const mq = /* @__PURE__ */ _u(na), Tu = k.createContext(null), vq = Tu.Provider, TR = In.error001();
function Me(e, t) {
  const n = k.useContext(Tu);
  if (n === null)
    throw new Error(TR);
  return PR(n, e, t);
}
function He() {
  const e = k.useContext(Tu);
  if (e === null)
    throw new Error(TR);
  return k.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const G1 = { display: "none" }, yq = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, AR = "react-flow__node-desc", IR = "react-flow__edge-desc", wq = "react-flow__aria-live", xq = (e) => e.ariaLiveMessage, _q = (e) => e.ariaLabelConfig;
function bq({ rfId: e }) {
  const t = Me(xq);
  return R.jsx("div", { id: `${wq}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: yq, children: t });
}
function Sq({ rfId: e, disableKeyboardA11y: t }) {
  const n = Me(_q);
  return R.jsxs(R.Fragment, { children: [R.jsx("div", { id: `${AR}-${e}`, style: G1, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), R.jsx("div", { id: `${IR}-${e}`, style: G1, children: n["edge.a11yDescription.default"] }), !t && R.jsx(bq, { rfId: e })] });
}
const ra = k.forwardRef(({ position: e = "top-left", children: t, className: n, style: o, ...i }, a) => {
  const l = `${e}`.split("-");
  return R.jsx("div", { className: nt(["react-flow__panel", n, ...l]), style: o, ref: a, ...i, children: t });
});
ra.displayName = "Panel";
function Eq({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : R.jsx(ra, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: R.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Cq = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, Ol = (e) => e.id;
function kq(e, t) {
  return Qe(e.selectedNodes.map(Ol), t.selectedNodes.map(Ol)) && Qe(e.selectedEdges.map(Ol), t.selectedEdges.map(Ol));
}
function Nq({ onSelectionChange: e }) {
  const t = He(), { selectedNodes: n, selectedEdges: o } = Me(Cq, kq);
  return k.useEffect(() => {
    const i = { nodes: n, edges: o };
    e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((a) => a(i));
  }, [n, o, e]), null;
}
const Rq = (e) => !!e.onSelectionChangeHandlers;
function Pq({ onSelectionChange: e }) {
  const t = Me(Rq);
  return e || t ? R.jsx(Nq, { onSelectionChange: e }) : null;
}
const MR = [0, 0], Tq = { x: 0, y: 0, zoom: 1 }, Aq = [
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
], K1 = [...Aq, "rfId"], Iq = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), Y1 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: qs,
  nodeOrigin: MR,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Mq(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Me(Iq, Qe), d = He();
  k.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = Y1, u();
  }), []);
  const h = k.useRef(Y1);
  return k.useEffect(
    () => {
      for (const p of K1) {
        const m = e[p], v = h.current[p];
        m !== v && (typeof e[p] > "u" || (p === "nodes" ? t(m) : p === "edges" ? n(m) : p === "minZoom" ? o(m) : p === "maxZoom" ? i(m) : p === "translateExtent" ? a(m) : p === "nodeExtent" ? l(m) : p === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: mD(m) }) : p === "fitView" ? d.setState({ fitViewQueued: m }) : p === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [p]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    K1.map((p) => e[p])
  ), null;
}
function X1() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Oq(e) {
  var o;
  const [t, n] = k.useState(e === "system" ? null : e);
  return k.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = X1(), a = () => n(i != null && i.matches ? "dark" : "light");
    return a(), i == null || i.addEventListener("change", a), () => {
      i == null || i.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = X1()) != null && o.matches ? "dark" : "light";
}
const Q1 = typeof document < "u" ? document : null;
function Vs(e = null, t = { target: Q1, actInsideInputWithModifier: !0 }) {
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
    const f = (t == null ? void 0 : t.target) ?? Q1, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (v) => {
        var x, b;
        if (i.current = v.ctrlKey || v.metaKey || v.shiftKey || v.altKey, (!i.current || i.current && !d) && fR(v))
          return !1;
        const y = J1(v.code, u);
        if (a.current.add(v[y]), Z1(l, a.current, !1)) {
          const C = ((b = (x = v.composedPath) == null ? void 0 : x.call(v)) == null ? void 0 : b[0]) || v.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (i.current || !_) && v.preventDefault(), o(!0);
        }
      }, p = (v) => {
        const E = J1(v.code, u);
        Z1(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(v[E]), v.key === "Meta" && a.current.clear(), i.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", p), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", p), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), n;
}
function Z1(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((i) => t.has(i)));
}
function J1(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Lq = () => {
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
      const { width: o, height: i, minZoom: a, maxZoom: l, panZoom: u } = e.getState(), f = Ly(t, o, i, a, l, (n == null ? void 0 : n.padding) ?? 0.1);
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
      const { x: i, y: a } = o.getBoundingClientRect(), l = au(t, n);
      return {
        x: l.x + i,
        y: l.y + a
      };
    }
  }), []);
};
function OR(e, t) {
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
      jq(f, u);
    n.push(u);
  }
  return i.length && i.forEach((a) => {
    a.index !== void 0 ? n.splice(a.index, 0, { ...a.item }) : n.push({ ...a.item });
  }), n;
}
function jq(e, t) {
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
function LR(e, t) {
  return OR(e, t);
}
function jR(e, t) {
  return OR(e, t);
}
function ro(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function oi(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [i, a] of e) {
    const l = t.has(i);
    !(a.selected === void 0 && !l) && a.selected !== l && (n && (a.selected = l), o.push(ro(a.id, l)));
  }
  return o;
}
function e_({ items: e = [], lookup: t }) {
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
function t_(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const n_ = (e) => sD(e), Dq = (e) => rR(e);
function DR(e) {
  return k.forwardRef(e);
}
const qq = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function r_(e) {
  const [t, n] = k.useState(BigInt(0)), [o] = k.useState(() => zq(() => n((i) => i + BigInt(1))));
  return qq(() => {
    const i = o.get();
    i.length && (e(i), o.reset());
  }, [t]), o;
}
function zq(e) {
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
const qR = k.createContext(null);
function Fq({ children: e }) {
  const t = He(), n = k.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: p, nodeLookup: m, fitViewQueued: v } = t.getState();
    let E = f;
    for (const x of u)
      E = typeof x == "function" ? x(E) : x;
    const y = e_({
      items: E,
      lookup: m
    });
    h && d(E), y.length > 0 ? p == null || p(y) : v && window.requestAnimationFrame(() => {
      const { fitViewQueued: x, nodes: b, setNodes: C } = t.getState();
      x && C(b);
    });
  }, []), o = r_(n), i = k.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: p, edgeLookup: m } = t.getState();
    let v = f;
    for (const E of u)
      v = typeof E == "function" ? E(v) : E;
    h ? d(v) : p && p(e_({
      items: v,
      lookup: m
    }));
  }, []), a = r_(i), l = k.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return R.jsx(qR.Provider, { value: l, children: e });
}
function $q() {
  const e = k.useContext(qR);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Bq = (e) => !!e.panZoom;
function $y() {
  const e = Lq(), t = He(), n = $q(), o = Me(Bq), i = k.useMemo(() => {
    const a = (p) => t.getState().nodeLookup.get(p), l = (p) => {
      n.nodeQueue.push(p);
    }, u = (p) => {
      n.edgeQueue.push(p);
    }, f = (p) => {
      var b, C;
      const { nodeLookup: m, nodeOrigin: v } = t.getState(), E = n_(p) ? p : m.get(p.id), y = E.parentId ? uR(E.position, E.measured, E.parentId, m, v) : E.position, x = {
        ...E,
        position: y,
        width: ((b = E.measured) == null ? void 0 : b.width) ?? E.width,
        height: ((C = E.measured) == null ? void 0 : C.height) ?? E.height
      };
      return hi(x);
    }, d = (p, m, v = { replace: !1 }) => {
      l((E) => E.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && n_(x) ? x : { ...y, ...x };
        }
        return y;
      }));
    }, h = (p, m, v = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === p) {
          const x = typeof m == "function" ? m(y) : m;
          return v.replace && Dq(x) ? x : { ...y, ...x };
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
        const { nodes: p = [], edges: m = [], transform: v } = t.getState(), [E, y, x] = v;
        return {
          nodes: p.map((b) => ({ ...b })),
          edges: m.map((b) => ({ ...b })),
          viewport: {
            x: E,
            y,
            zoom: x
          }
        };
      },
      deleteElements: async ({ nodes: p = [], edges: m = [] }) => {
        const { nodes: v, edges: E, onNodesDelete: y, onEdgesDelete: x, triggerNodeChanges: b, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: N } = t.getState(), { nodes: P, edges: T } = await fD({
          nodesToRemove: p,
          edgesToRemove: m,
          nodes: v,
          edges: E,
          onBeforeDelete: N
        }), A = T.length > 0, O = P.length > 0;
        if (A) {
          const D = T.map(t_);
          x == null || x(T), C(D);
        }
        if (O) {
          const D = P.map(t_);
          y == null || y(P), b(D);
        }
        return (O || A) && (_ == null || _({ nodes: P, edges: T })), { deletedNodes: P, deletedEdges: T };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (p, m = !0, v) => {
        const E = R1(p), y = E ? p : f(p), x = v !== void 0;
        return y ? (v || t.getState().nodes).filter((b) => {
          const C = t.getState().nodeLookup.get(b.id);
          if (C && !E && (b.id === p.id || !C.internals.positionAbsolute))
            return !1;
          const _ = hi(x ? b : C), N = Fs(_, y);
          return m && N > 0 || N >= _.width * _.height || N >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (p, m, v = !0) => {
        const y = R1(p) ? p : f(p);
        if (!y)
          return !1;
        const x = Fs(y, m);
        return v && x > 0 || x >= m.width * m.height || x >= y.width * y.height;
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
        return aD(p, { nodeLookup: m, nodeOrigin: v });
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
        const m = t.getState().fitViewResolver ?? gD();
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
const o_ = (e) => e.selected, Vq = typeof window < "u" ? window : void 0;
function Hq({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = He(), { deleteElements: o } = $y(), i = Vs(e, { actInsideInputWithModifier: !1 }), a = Vs(t, { target: Vq });
  k.useEffect(() => {
    if (i) {
      const { edges: l, nodes: u } = n.getState();
      o({ nodes: u.filter(o_), edges: l.filter(o_) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), k.useEffect(() => {
    n.setState({ multiSelectionActive: a });
  }, [a]);
}
function Wq(e) {
  const t = He();
  k.useEffect(() => {
    const n = () => {
      var i, a, l, u;
      if (!e.current || !(((a = (i = e.current).checkVisibility) == null ? void 0 : a.call(i)) ?? !0))
        return !1;
      const o = jy(e.current);
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
const Au = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, Uq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function Gq({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: i = 0.5, panOnScrollMode: a = so.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: v = !0, children: E, noWheelClassName: y, noPanClassName: x, onViewportChange: b, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: N }) {
  const P = He(), T = k.useRef(null), { userSelectionActive: A, lib: O, connectionInProgress: D } = Me(Uq, Qe), G = Vs(m), B = k.useRef();
  Wq(T);
  const V = k.useCallback((X) => {
    b == null || b({ x: X[0], y: X[1], zoom: X[2] }), C || P.setState({ transform: X });
  }, [b, C]);
  return k.useEffect(() => {
    if (T.current) {
      B.current = QD({
        domNode: T.current,
        minZoom: h,
        maxZoom: p,
        translateExtent: d,
        viewport: f,
        onDraggingChange: ($) => P.setState({ paneDragging: $ }),
        onPanZoomStart: ($, K) => {
          const { onViewportChangeStart: M, onMoveStart: q } = P.getState();
          q == null || q($, K), M == null || M(K);
        },
        onPanZoom: ($, K) => {
          const { onViewportChange: M, onMove: q } = P.getState();
          q == null || q($, K), M == null || M(K);
        },
        onPanZoomEnd: ($, K) => {
          const { onViewportChangeEnd: M, onMoveEnd: q } = P.getState();
          q == null || q($, K), M == null || M(K);
        }
      });
      const { x: X, y: L, zoom: H } = B.current.getViewport();
      return P.setState({
        panZoom: B.current,
        transform: [X, L, H],
        domNode: T.current.closest(".react-flow")
      }), () => {
        var $;
        ($ = B.current) == null || $.destroy();
      };
    }
  }, []), k.useEffect(() => {
    var X;
    (X = B.current) == null || X.update({
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
      connectionInProgress: D,
      selectionOnDrag: N,
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
    V,
    D,
    N,
    _
  ]), R.jsx("div", { className: "react-flow__renderer", ref: T, style: Au, children: E });
}
const Kq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function Yq() {
  const { userSelectionActive: e, userSelectionRect: t } = Me(Kq, Qe);
  return e && t ? R.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const _d = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, Xq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function Qq({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = zs.Full, panOnDrag: o, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: p, onPaneMouseMove: m, onPaneMouseLeave: v, children: E }) {
  const y = He(), { userSelectionActive: x, elementsSelectable: b, dragging: C, connectionInProgress: _ } = Me(Xq, Qe), N = b && (e || x), P = k.useRef(null), T = k.useRef(), A = k.useRef(/* @__PURE__ */ new Set()), O = k.useRef(/* @__PURE__ */ new Set()), D = k.useRef(!1), G = (M) => {
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
    const Q = M.target === P.current;
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
    const { userSelectionRect: q, transform: Q, nodeLookup: j, edgeLookup: W, connectionLookup: ie, triggerNodeChanges: F, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: Y } = y.getState();
    if (!T.current || !q)
      return;
    const { x: te, y: se } = hn(M.nativeEvent, T.current), { startX: ae, startY: ce } = q;
    if (!D.current) {
      const Re = t ? 0 : i;
      if (Math.hypot(te - ae, se - ce) <= Re)
        return;
      Y(), l == null || l(M);
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
    A.current = new Set(Oy(j, de, Q, n === zs.Partial, !0).map((Re) => Re.id)), O.current = /* @__PURE__ */ new Set();
    const me = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Re of A.current) {
      const Ee = ie.get(Re);
      if (Ee)
        for (const { edgeId: Je } of Ee.values()) {
          const Ue = W.get(Je);
          Ue && (Ue.selectable ?? me) && O.current.add(Je);
        }
    }
    if (!P1(pe, A.current)) {
      const Re = oi(j, A.current, !0);
      F(Re);
    }
    if (!P1(be, O.current)) {
      const Re = oi(W, O.current);
      Z(Re);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, $ = (M) => {
    var q, Q;
    M.button === 0 && ((Q = (q = M.target) == null ? void 0 : q.releasePointerCapture) == null || Q.call(q, M.pointerId), !x && M.target === P.current && y.getState().userSelectionRect && (G == null || G(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), D.current && (u == null || u(M), y.setState({
      nodesSelectionActive: A.current.size > 0
    })));
  }, K = o === !0 || Array.isArray(o) && o.includes(0);
  return R.jsxs("div", { className: nt(["react-flow__pane", { draggable: K, dragging: C, selection: e }]), onClick: N ? void 0 : _d(G, P), onContextMenu: _d(B, P), onWheel: _d(V, P), onPointerEnter: N ? void 0 : p, onPointerMove: N ? H : m, onPointerUp: N ? $ : void 0, onPointerDownCapture: N ? L : void 0, onClickCapture: N ? X : void 0, onPointerLeave: v, ref: P, style: Au, children: [E, R.jsx(Yq, {})] });
}
function fy({ id: e, store: t, unselect: n = !1, nodeRef: o }) {
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
function zR({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: i, isSelectable: a, nodeClickDistance: l }) {
  const u = He(), [f, d] = k.useState(!1), h = k.useRef();
  return k.useEffect(() => {
    h.current = DD({
      getStoreItems: () => u.getState(),
      onNodeMouseDown: (p) => {
        fy({
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
const Zq = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function FR() {
  const e = He();
  return k.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: i, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), p = /* @__PURE__ */ new Map(), m = Zq(l), v = i ? a[0] : 5, E = i ? a[1] : 5, y = n.direction.x * v * n.factor, x = n.direction.y * E * n.factor;
    for (const [, b] of d) {
      if (!m(b))
        continue;
      let C = {
        x: b.internals.positionAbsolute.x + y,
        y: b.internals.positionAbsolute.y + x
      };
      i && (C = ea(C, a));
      const { position: _, positionAbsolute: N } = oR({
        nodeId: b.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      b.position = _, b.internals.positionAbsolute = N, p.set(b.id, b);
    }
    f(p);
  }, []);
}
const By = k.createContext(null), Jq = By.Provider;
By.Consumer;
const $R = () => k.useContext(By), e3 = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), t3 = (e, t, n) => (o) => {
  const { connectionClickStartHandle: i, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === n;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n,
    connectingTo: h,
    clickConnecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.id) === t && (i == null ? void 0 : i.type) === n,
    isPossibleEndHandle: a === fi.Strict ? (u == null ? void 0 : u.type) !== n : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!i,
    valid: h && d
  };
};
function n3({ type: e = "source", position: t = ye.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: p, ...m }, v) {
  var H, $;
  const E = l || null, y = e === "target", x = He(), b = $R(), { connectOnClick: C, noPanClassName: _, rfId: N } = Me(e3, Qe), { connectingFrom: P, connectingTo: T, clickConnecting: A, isPossibleEndHandle: O, connectionInProcess: D, clickConnectionInProcess: G, valid: B } = Me(t3(b, E, e), Qe);
  b || ($ = (H = x.getState()).onError) == null || $.call(H, "010", In.error010());
  const V = (K) => {
    const { defaultEdgeOptions: M, onConnect: q, hasDefaultEdges: Q } = x.getState(), j = {
      ...M,
      ...K
    };
    if (Q) {
      const { edges: W, setEdges: ie } = x.getState();
      ie(mR(j, W));
    }
    q == null || q(j), u == null || u(j);
  }, X = (K) => {
    if (!b)
      return;
    const M = dR(K.nativeEvent);
    if (i && (M && K.button === 0 || !M)) {
      const q = x.getState();
      cy.onPointerDown(K.nativeEvent, {
        handleDomNode: K.currentTarget,
        autoPanOnConnect: q.autoPanOnConnect,
        connectionMode: q.connectionMode,
        connectionRadius: q.connectionRadius,
        domNode: q.domNode,
        nodeLookup: q.nodeLookup,
        lib: q.lib,
        isTarget: y,
        handleId: E,
        nodeId: b,
        flowId: q.rfId,
        panBy: q.panBy,
        cancelConnection: q.cancelConnection,
        onConnectStart: q.onConnectStart,
        onConnectEnd: q.onConnectEnd,
        updateConnection: q.updateConnection,
        onConnect: V,
        isValidConnection: n || q.isValidConnection,
        getTransform: () => x.getState().transform,
        getFromHandle: () => x.getState().connection.fromHandle,
        autoPanSpeed: q.autoPanSpeed,
        dragThreshold: q.connectionDragThreshold
      });
    }
    M ? h == null || h(K) : p == null || p(K);
  }, L = (K) => {
    const { onClickConnectStart: M, onClickConnectEnd: q, connectionClickStartHandle: Q, connectionMode: j, isValidConnection: W, lib: ie, rfId: F, nodeLookup: Z, connection: ee } = x.getState();
    if (!b || !Q && !i)
      return;
    if (!Q) {
      M == null || M(K.nativeEvent, { nodeId: b, handleId: E, handleType: e }), x.setState({ connectionClickStartHandle: { nodeId: b, type: e, id: E } });
      return;
    }
    const Y = cR(K.target), te = n || W, { connection: se, isValid: ae } = cy.isValid(K.nativeEvent, {
      handle: {
        nodeId: b,
        id: E,
        type: e
      },
      connectionMode: j,
      fromNodeId: Q.nodeId,
      fromHandleId: Q.id || null,
      fromType: Q.type,
      isValidConnection: te,
      flowId: F,
      doc: Y,
      lib: ie,
      nodeLookup: Z
    });
    ae && se && V(se);
    const ce = structuredClone(ee);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, q == null || q(K, ce), x.setState({ connectionClickStartHandle: null });
  };
  return R.jsx("div", { "data-handleid": E, "data-nodeid": b, "data-handlepos": t, "data-id": `${N}-${b}-${E}-${e}`, className: nt([
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
      valid: B,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!D || O) && (D || G ? a : i)
    }
  ]), onMouseDown: X, onTouchStart: X, onClick: C ? L : void 0, ref: v, ...m, children: f });
}
const Hs = k.memo(DR(n3));
function r3({ data: e, isConnectable: t, sourcePosition: n = ye.Bottom }) {
  return R.jsxs(R.Fragment, { children: [e == null ? void 0 : e.label, R.jsx(Hs, { type: "source", position: n, isConnectable: t })] });
}
function o3({ data: e, isConnectable: t, targetPosition: n = ye.Top, sourcePosition: o = ye.Bottom }) {
  return R.jsxs(R.Fragment, { children: [R.jsx(Hs, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, R.jsx(Hs, { type: "source", position: o, isConnectable: t })] });
}
function i3() {
  return null;
}
function s3({ data: e, isConnectable: t, targetPosition: n = ye.Top }) {
  return R.jsxs(R.Fragment, { children: [R.jsx(Hs, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const lu = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, i_ = {
  input: r3,
  default: o3,
  output: s3,
  group: i3
};
function a3(e) {
  var t, n, o, i;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((i = e.style) == null ? void 0 : i.height)
  };
}
const l3 = (e) => {
  const { width: t, height: n, x: o, y: i } = Js(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: dn(t) ? t : null,
    height: dn(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${i}px)`
  };
};
function u3({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = He(), { width: i, height: a, transformString: l, userSelectionActive: u } = Me(l3, Qe), f = FR(), d = k.useRef(null);
  if (k.useEffect(() => {
    var m;
    n || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [n]), zR({
    nodeRef: d
  }), u || !i || !a)
    return null;
  const h = e ? (m) => {
    const v = o.getState().nodes.filter((E) => E.selected);
    e(m, v);
  } : void 0, p = (m) => {
    Object.prototype.hasOwnProperty.call(lu, m.key) && (m.preventDefault(), f({
      direction: lu[m.key],
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
const s_ = typeof window < "u" ? window : void 0, c3 = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function BR({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: p, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: x, elementsSelectable: b, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: N, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: O, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, preventScrolling: X, onSelectionContextMenu: L, noWheelClassName: H, noPanClassName: $, disableKeyboardA11y: K, onViewportChange: M, isControlledViewport: q }) {
  const { nodesSelectionActive: Q, userSelectionActive: j } = Me(c3), W = Vs(d, { target: s_ }), ie = Vs(y, { target: s_ }), F = ie || O, Z = ie || N, ee = h && F !== !0, Y = W || j || ee;
  return Hq({ deleteKeyCode: f, multiSelectionKeyCode: E }), R.jsx(Gq, { onPaneContextMenu: a, elementsSelectable: b, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !W && F, defaultViewport: D, translateExtent: G, minZoom: B, maxZoom: V, zoomActivationKeyCode: x, preventScrolling: X, noWheelClassName: H, noPanClassName: $, onViewportChange: M, isControlledViewport: q, paneClickDistance: u, selectionOnDrag: ee, children: R.jsxs(Qq, { onSelectionStart: m, onSelectionEnd: v, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: F, isSelecting: !!Y, selectionMode: p, selectionKeyPressed: W, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && R.jsx(u3, { onSelectionContextMenu: L, noPanClassName: $, disableKeyboardA11y: K })] }) });
}
BR.displayName = "FlowRenderer";
const f3 = k.memo(BR), d3 = (e) => (t) => e ? Oy(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function h3(e) {
  return Me(k.useCallback(d3(e), [e]), Qe);
}
const p3 = (e) => e.updateNodeInternals;
function g3() {
  const e = Me(p3), [t] = k.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
function m3({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
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
function v3({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: i, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: p, noDragClassName: m, noPanClassName: v, disableKeyboardA11y: E, rfId: y, nodeTypes: x, nodeClickDistance: b, onError: C }) {
  const { node: _, internals: N, isParent: P } = Me((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Qe);
  let T = _.type || "default", A = (x == null ? void 0 : x[T]) || i_[T];
  A === void 0 && (C == null || C("003", In.error003(T)), T = "default", A = (x == null ? void 0 : x.default) || i_.default);
  const O = !!(_.draggable || u && typeof _.draggable > "u"), D = !!(_.selectable || f && typeof _.selectable > "u"), G = !!(_.connectable || d && typeof _.connectable > "u"), B = !!(_.focusable || h && typeof _.focusable > "u"), V = He(), X = lR(_), L = m3({ node: _, nodeType: T, hasDimensions: X, resizeObserver: p }), H = zR({
    nodeRef: L,
    disabled: _.hidden || !O,
    noDragClassName: m,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: D,
    nodeClickDistance: b
  }), $ = FR();
  if (_.hidden)
    return null;
  const K = Jn(_), M = a3(_), q = D || O || t || n || o || i, Q = n ? (te) => n(te, { ...N.userNode }) : void 0, j = o ? (te) => o(te, { ...N.userNode }) : void 0, W = i ? (te) => i(te, { ...N.userNode }) : void 0, ie = a ? (te) => a(te, { ...N.userNode }) : void 0, F = l ? (te) => l(te, { ...N.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    D && (!se || !O || ae > 0) && fy({
      id: e,
      store: V,
      nodeRef: L
    }), t && t(te, { ...N.userNode });
  }, ee = (te) => {
    if (!(fR(te.nativeEvent) || E)) {
      if (JN.includes(te.key) && D) {
        const se = te.key === "Escape";
        fy({
          id: e,
          store: V,
          unselect: se,
          nodeRef: L
        });
      } else if (O && _.selected && Object.prototype.hasOwnProperty.call(lu, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~N.positionAbsolute.x,
            y: ~~N.positionAbsolute.y
          })
        }), $({
          direction: lu[te.key],
          factor: te.shiftKey ? 4 : 1
        });
      }
    }
  }, Y = () => {
    var be;
    if (E || !((be = L.current) != null && be.matches(":focus-visible")))
      return;
    const { transform: te, width: se, height: ae, autoPanOnNodeFocus: ce, setCenter: de } = V.getState();
    if (!ce)
      return;
    Oy(/* @__PURE__ */ new Map([[e, _]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(_.position.x + K.width / 2, _.position.y + K.height / 2, {
      zoom: te[2]
    });
  };
  return R.jsx("div", { className: nt([
    "react-flow__node",
    `react-flow__node-${T}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [v]: O
    },
    _.className,
    {
      selected: _.selected,
      selectable: D,
      parent: P,
      draggable: O,
      dragging: H
    }
  ]), ref: L, style: {
    zIndex: N.z,
    transform: `translate(${N.positionAbsolute.x}px,${N.positionAbsolute.y}px)`,
    pointerEvents: q ? "all" : "none",
    visibility: X ? "visible" : "hidden",
    ..._.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: j, onMouseLeave: W, onContextMenu: ie, onClick: Z, onDoubleClick: F, onKeyDown: B ? ee : void 0, tabIndex: B ? 0 : void 0, onFocus: B ? Y : void 0, role: _.ariaRole ?? (B ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${AR}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: R.jsx(Jq, { value: e, children: R.jsx(A, { id: e, data: _.data, type: T, positionAbsoluteX: N.positionAbsolute.x, positionAbsoluteY: N.positionAbsolute.y, selected: _.selected ?? !1, selectable: D, draggable: O, deletable: _.deletable ?? !0, isConnectable: G, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: H, dragHandle: _.dragHandle, zIndex: N.z, parentId: _.parentId, ...K }) }) });
}
var y3 = k.memo(v3);
const w3 = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function VR(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, onError: a } = Me(w3, Qe), l = h3(e.onlyRenderVisibleElements), u = g3();
  return R.jsx("div", { className: "react-flow__nodes", style: Au, children: l.map((f) => (
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
    R.jsx(y3, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
VR.displayName = "NodeRenderer";
const x3 = k.memo(VR);
function _3(e) {
  return Me(k.useCallback((n) => {
    if (!e)
      return n.edges.map((i) => i.id);
    const o = [];
    if (n.width && n.height)
      for (const i of n.edges) {
        const a = n.nodeLookup.get(i.source), l = n.nodeLookup.get(i.target);
        a && l && wD({
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
const b3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return R.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, S3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return R.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, a_ = {
  [iu.Arrow]: b3,
  [iu.ArrowClosed]: S3
};
function E3(e) {
  const t = He();
  return k.useMemo(() => {
    var i, a;
    return Object.prototype.hasOwnProperty.call(a_, e) ? a_[e] : ((a = (i = t.getState()).onError) == null || a.call(i, "009", In.error009(e)), null);
  }, [e]);
}
const C3 = ({ id: e, type: t, color: n, width: o = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = E3(t);
  return f ? R.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: R.jsx(f, { color: n, strokeWidth: l }) }) : null;
}, HR = ({ defaultColor: e, rfId: t }) => {
  const n = Me((a) => a.edges), o = Me((a) => a.defaultEdgeOptions), i = k.useMemo(() => kD(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [n, o, t, e]);
  return i.length ? R.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: R.jsx("defs", { children: i.map((a) => R.jsx(C3, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
HR.displayName = "MarkerDefinitions";
var k3 = k.memo(HR);
function WR({ x: e, y: t, label: n, labelStyle: o, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
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
WR.displayName = "EdgeText";
const N3 = k.memo(WR);
function Iu({ path: e, labelX: t, labelY: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return R.jsxs(R.Fragment, { children: [R.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? R.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && dn(t) && dn(n) ? R.jsx(N3, { x: t, y: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function l_({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  return e === ye.Left || e === ye.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + i)];
}
function UR({ sourceX: e, sourceY: t, sourcePosition: n = ye.Bottom, targetX: o, targetY: i, targetPosition: a = ye.Top }) {
  const [l, u] = l_({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i
  }), [f, d] = l_({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t
  }), [h, p, m, v] = hR({
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
function GR(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: x, interactionWidth: b }) => {
    const [C, _, N] = UR({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u
    }), P = e.isInternal ? void 0 : t;
    return R.jsx(Iu, { id: P, path: C, labelX: _, labelY: N, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: x, interactionWidth: b });
  });
}
const R3 = GR({ isInternal: !1 }), KR = GR({ isInternal: !0 });
R3.displayName = "SimpleBezierEdge";
KR.displayName = "SimpleBezierEdgeInternal";
function YR(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, sourcePosition: v = ye.Bottom, targetPosition: E = ye.Top, markerEnd: y, markerStart: x, pathOptions: b, interactionWidth: C }) => {
    const [_, N, P] = ay({
      sourceX: n,
      sourceY: o,
      sourcePosition: v,
      targetX: i,
      targetY: a,
      targetPosition: E,
      borderRadius: b == null ? void 0 : b.borderRadius,
      offset: b == null ? void 0 : b.offset,
      stepPosition: b == null ? void 0 : b.stepPosition
    }), T = e.isInternal ? void 0 : t;
    return R.jsx(Iu, { id: T, path: _, labelX: N, labelY: P, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const XR = YR({ isInternal: !1 }), QR = YR({ isInternal: !0 });
XR.displayName = "SmoothStepEdge";
QR.displayName = "SmoothStepEdgeInternal";
function ZR(e) {
  return k.memo(({ id: t, ...n }) => {
    var i;
    const o = e.isInternal ? void 0 : t;
    return R.jsx(XR, { ...n, id: o, pathOptions: k.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = n.pathOptions) == null ? void 0 : a.offset };
    }, [(i = n.pathOptions) == null ? void 0 : i.offset]) });
  });
}
const P3 = ZR({ isInternal: !1 }), JR = ZR({ isInternal: !0 });
P3.displayName = "StepEdge";
JR.displayName = "StepEdgeInternal";
function eP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: E, interactionWidth: y }) => {
    const [x, b, C] = vR({ sourceX: n, sourceY: o, targetX: i, targetY: a }), _ = e.isInternal ? void 0 : t;
    return R.jsx(Iu, { id: _, path: x, labelX: b, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: E, interactionWidth: y });
  });
}
const T3 = eP({ isInternal: !1 }), tP = eP({ isInternal: !0 });
T3.displayName = "StraightEdge";
tP.displayName = "StraightEdgeInternal";
function nP(e) {
  return k.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l = ye.Bottom, targetPosition: u = ye.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: x, pathOptions: b, interactionWidth: C }) => {
    const [_, N, P] = pR({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u,
      curvature: b == null ? void 0 : b.curvature
    }), T = e.isInternal ? void 0 : t;
    return R.jsx(Iu, { id: T, path: _, labelX: N, labelY: P, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: x, interactionWidth: C });
  });
}
const A3 = nP({ isInternal: !1 }), rP = nP({ isInternal: !0 });
A3.displayName = "BezierEdge";
rP.displayName = "BezierEdgeInternal";
const u_ = {
  default: rP,
  straight: tP,
  step: JR,
  smoothstep: QR,
  simplebezier: KR
}, c_ = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, I3 = (e, t, n) => n === ye.Left ? e - t : n === ye.Right ? e + t : e, M3 = (e, t, n) => n === ye.Top ? e - t : n === ye.Bottom ? e + t : e, f_ = "react-flow__edgeupdater";
function d_({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: l, type: u }) {
  return R.jsx("circle", { onMouseDown: i, onMouseEnter: a, onMouseOut: l, className: nt([f_, `${f_}-${u}`]), cx: I3(t, o, e), cy: M3(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function O3({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: i, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: p, setReconnecting: m, setUpdateHover: v }) {
  const E = He(), y = (N, P) => {
    if (N.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: A, isValidConnection: O, connectionMode: D, connectionRadius: G, lib: B, onConnectStart: V, onConnectEnd: X, cancelConnection: L, nodeLookup: H, rfId: $, panBy: K, updateConnection: M } = E.getState(), q = P.type === "target", Q = (ie, F) => {
      m(!1), p == null || p(ie, n, P.type, F);
    }, j = (ie) => d == null ? void 0 : d(n, ie), W = (ie, F) => {
      m(!0), h == null || h(N, n, P.type), V == null || V(ie, F);
    };
    cy.onPointerDown(N.nativeEvent, {
      autoPanOnConnect: T,
      connectionMode: D,
      connectionRadius: G,
      domNode: A,
      handleId: P.id,
      nodeId: P.nodeId,
      nodeLookup: H,
      isTarget: q,
      edgeUpdaterType: P.type,
      lib: B,
      flowId: $,
      cancelConnection: L,
      panBy: K,
      isValidConnection: O,
      onConnect: j,
      onConnectStart: W,
      onConnectEnd: X,
      onReconnectEnd: Q,
      updateConnection: M,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: N.currentTarget
    });
  }, x = (N) => y(N, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), b = (N) => y(N, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), C = () => v(!0), _ = () => v(!1);
  return R.jsxs(R.Fragment, { children: [(e === !0 || e === "source") && R.jsx(d_, { position: u, centerX: o, centerY: i, radius: t, onMouseDown: x, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && R.jsx(d_, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: b, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function L3({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: i, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, rfId: E, edgeTypes: y, noPanClassName: x, onError: b, disableKeyboardA11y: C }) {
  let _ = Me((de) => de.edgeLookup.get(e));
  const N = Me((de) => de.defaultEdgeOptions);
  _ = N ? { ...N, ..._ } : _;
  let P = _.type || "default", T = (y == null ? void 0 : y[P]) || u_[P];
  T === void 0 && (b == null || b("011", In.error011(P)), P = "default", T = (y == null ? void 0 : y.default) || u_.default);
  const A = !!(_.focusable || t && typeof _.focusable > "u"), O = typeof p < "u" && (_.reconnectable || n && typeof _.reconnectable > "u"), D = !!(_.selectable || o && typeof _.selectable > "u"), G = k.useRef(null), [B, V] = k.useState(!1), [X, L] = k.useState(!1), H = He(), { zIndex: $, sourceX: K, sourceY: M, targetX: q, targetY: Q, sourcePosition: j, targetPosition: W } = Me(k.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), be = de.nodeLookup.get(_.target);
    if (!pe || !be)
      return {
        zIndex: _.zIndex,
        ...c_
      };
    const me = CD({
      id: e,
      sourceNode: pe,
      targetNode: be,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: b
    });
    return {
      zIndex: yD({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: be,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...me || c_
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Qe), ie = k.useMemo(() => _.markerStart ? `url('#${ly(_.markerStart, E)}')` : void 0, [_.markerStart, E]), F = k.useMemo(() => _.markerEnd ? `url('#${ly(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || K === null || M === null || q === null || Q === null)
    return null;
  const Z = (de) => {
    var Re;
    const { addSelectedEdges: pe, unselectNodesAndEdges: be, multiSelectionActive: me } = H.getState();
    D && (H.setState({ nodesSelectionActive: !1 }), _.selected && me ? (be({ nodes: [], edges: [_] }), (Re = G.current) == null || Re.blur()) : pe([e])), i && i(de, _);
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
    if (!C && JN.includes(de.key) && D) {
      const { unselectNodesAndEdges: be, addSelectedEdges: me } = H.getState();
      de.key === "Escape" ? ((pe = G.current) == null || pe.blur(), be({ edges: [_] })) : me([e]);
    }
  };
  return R.jsx("svg", { style: { zIndex: $ }, children: R.jsxs("g", { className: nt([
    "react-flow__edge",
    `react-flow__edge-${P}`,
    _.className,
    x,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !D && !i,
      updating: B,
      selectable: D
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: Y, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: A ? ce : void 0, tabIndex: A ? 0 : void 0, role: _.ariaRole ?? (A ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": A ? `${IR}-${E}` : void 0, ref: G, ..._.domAttributes, children: [!X && R.jsx(T, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: D, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: K, sourceY: M, targetX: q, targetY: Q, sourcePosition: j, targetPosition: W, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: F, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), O && R.jsx(O3, { edge: _, isReconnectable: O, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, sourceX: K, sourceY: M, targetX: q, targetY: Q, sourcePosition: j, targetPosition: W, setUpdateHover: V, setReconnecting: L })] }) });
}
var j3 = k.memo(L3);
const D3 = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function oP({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: i, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: p, onEdgeDoubleClick: m, onReconnectStart: v, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: x, edgesReconnectable: b, elementsSelectable: C, onError: _ } = Me(D3, Qe), N = _3(t);
  return R.jsxs("div", { className: "react-flow__edges", children: [R.jsx(k3, { defaultColor: e, rfId: n }), N.map((P) => R.jsx(j3, { id: P, edgesFocusable: x, edgesReconnectable: b, elementsSelectable: C, noPanClassName: i, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: p, onDoubleClick: m, onReconnectStart: v, onReconnectEnd: E, rfId: n, onError: _, edgeTypes: o, disableKeyboardA11y: y }, P))] });
}
oP.displayName = "EdgeRenderer";
const q3 = k.memo(oP), z3 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function F3({ children: e }) {
  const t = Me(z3);
  return R.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function $3(e) {
  const t = $y(), n = k.useRef(!1);
  k.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const B3 = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function V3(e) {
  const t = Me(B3), n = He();
  return k.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function H3(e) {
  return e.connection.inProgress ? { ...e.connection, to: ta(e.connection.to, e.transform) } : { ...e.connection };
}
function W3(e) {
  return H3;
}
function U3(e) {
  const t = W3();
  return Me(t, Qe);
}
const G3 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function K3({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: i, width: a, height: l, isValid: u, inProgress: f } = Me(G3, Qe);
  return !(a && i && f) ? null : R.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: R.jsx("g", { className: nt(["react-flow__connection", nR(u)]), children: R.jsx(iP, { style: t, type: n, CustomComponent: o, isValid: u }) }) });
}
const iP = ({ style: e, type: t = Rr.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: i, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: p, toPosition: m, pointer: v } = U3();
  if (!i)
    return;
  if (n)
    return R.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: nR(o), toNode: h, toHandle: p, pointer: v });
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
      [E] = pR(y);
      break;
    case Rr.SimpleBezier:
      [E] = UR(y);
      break;
    case Rr.Step:
      [E] = ay({
        ...y,
        borderRadius: 0
      });
      break;
    case Rr.SmoothStep:
      [E] = ay(y);
      break;
    default:
      [E] = vR(y);
  }
  return R.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
iP.displayName = "ConnectionLine";
const Y3 = {};
function h_(e = Y3) {
  k.useRef(e), He(), k.useEffect(() => {
  }, [e]);
}
function X3() {
  He(), k.useRef(!1), k.useEffect(() => {
  }, []);
}
function sP({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: p, onSelectionStart: m, onSelectionEnd: v, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: x, connectionLineContainerStyle: b, selectionKeyCode: C, selectionOnDrag: _, selectionMode: N, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, deleteKeyCode: O, onlyRenderVisibleElements: D, elementsSelectable: G, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, preventScrolling: H, defaultMarkerColor: $, zoomOnScroll: K, zoomOnPinch: M, panOnScroll: q, panOnScrollSpeed: Q, panOnScrollMode: j, zoomOnDoubleClick: W, panOnDrag: ie, onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: Y, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: me, reconnectRadius: Re, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, nodeExtent: en, rfId: $t, viewport: tn, onViewportChange: Bt }) {
  return h_(e), h_(t), X3(), $3(n), V3(tn), R.jsx(f3, { onPaneClick: F, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: Y, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: O, selectionKeyCode: C, selectionOnDrag: _, selectionMode: N, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: A, elementsSelectable: G, zoomOnScroll: K, zoomOnPinch: M, zoomOnDoubleClick: W, panOnScroll: q, panOnScrollSpeed: Q, panOnScrollMode: j, panOnDrag: ie, defaultViewport: B, translateExtent: V, minZoom: X, maxZoom: L, onSelectionContextMenu: p, preventScrolling: H, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, onViewportChange: Bt, isControlledViewport: !!tn, children: R.jsxs(F3, { children: [R.jsx(q3, { edgeTypes: t, onEdgeClick: i, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, onlyRenderVisibleElements: D, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: me, reconnectRadius: Re, defaultMarkerColor: $, noPanClassName: at, disableKeyboardA11y: Ge, rfId: $t }), R.jsx(K3, { style: y, type: E, component: x, containerStyle: b }), R.jsx("div", { className: "react-flow__edgelabel-renderer" }), R.jsx(x3, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: D, noPanClassName: at, noDragClassName: Ft, disableKeyboardA11y: Ge, nodeExtent: en, rfId: $t }), R.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
sP.displayName = "GraphView";
const Q3 = k.memo(sP), p_ = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: p } = {}) => {
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), x = o ?? t ?? [], b = n ?? e ?? [], C = h ?? [0, 0], _ = p ?? qs;
  xR(E, y, x);
  const N = uy(b, m, v, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let P = [0, 0, 1];
  if (l && i && a) {
    const T = Js(m, {
      filter: (G) => !!((G.width || G.initialWidth) && (G.height || G.initialHeight))
    }), { x: A, y: O, zoom: D } = Ly(T, i, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    P = [A, O, D];
  }
  return {
    rfId: "1",
    width: i ?? 0,
    height: a ?? 0,
    transform: P,
    nodes: b,
    nodesInitialized: N,
    nodeLookup: m,
    parentLookup: v,
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
    translateExtent: qs,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: fi.Strict,
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
    connection: { ...tR },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: dD,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: eR
  };
}, Z3 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: p }) => gq((m, v) => {
  async function E() {
    const { nodeLookup: y, panZoom: x, fitViewOptions: b, fitViewResolver: C, width: _, height: N, minZoom: P, maxZoom: T } = v();
    x && (await cD({
      nodes: y,
      width: _,
      height: N,
      panZoom: x,
      minZoom: P,
      maxZoom: T
    }, b), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...p_({
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
      const { nodeLookup: x, parentLookup: b, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: N } = v(), P = uy(y, x, b, {
        nodeOrigin: C,
        nodeExtent: p,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      N && P ? (E(), m({ nodes: y, nodesInitialized: P, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: P });
    },
    setEdges: (y) => {
      const { connectionLookup: x, edgeLookup: b } = v();
      xR(x, b, y), m({ edges: y });
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
      const { triggerNodeChanges: x, nodeLookup: b, parentLookup: C, domNode: _, nodeOrigin: N, nodeExtent: P, debug: T, fitViewQueued: A } = v(), { changes: O, updatedInternals: D } = MD(y, b, C, _, N, P);
      D && (PD(b, C, { nodeOrigin: N, nodeExtent: P }), A ? (E(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (O == null ? void 0 : O.length) > 0 && (T && console.log("React Flow: trigger node changes", O), x == null || x(O)));
    },
    updateNodePositions: (y, x = !1) => {
      const b = [], C = [], { nodeLookup: _, triggerNodeChanges: N } = v();
      for (const [P, T] of y) {
        const A = _.get(P), O = !!(A != null && A.expandParent && (A != null && A.parentId) && (T != null && T.position)), D = {
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
        }), C.push(D);
      }
      if (b.length > 0) {
        const { parentLookup: P, nodeOrigin: T } = v(), A = Fy(b, _, P, T);
        C.push(...A);
      }
      N(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: x, setNodes: b, nodes: C, hasDefaultNodes: _, debug: N } = v();
      if (y != null && y.length) {
        if (_) {
          const P = LR(y, C);
          b(P);
        }
        N && console.log("React Flow: trigger node changes", y), x == null || x(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: x, setEdges: b, edges: C, hasDefaultEdges: _, debug: N } = v();
      if (y != null && y.length) {
        if (_) {
          const P = jR(y, C);
          b(P);
        }
        N && console.log("React Flow: trigger edge changes", y), x == null || x(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: x, edgeLookup: b, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: N } = v();
      if (x) {
        const P = y.map((T) => ro(T, !0));
        _(P);
        return;
      }
      _(oi(C, /* @__PURE__ */ new Set([...y]), !0)), N(oi(b));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: x, edgeLookup: b, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: N } = v();
      if (x) {
        const P = y.map((T) => ro(T, !0));
        N(P);
        return;
      }
      N(oi(b, /* @__PURE__ */ new Set([...y]))), _(oi(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: x } = {}) => {
      const { edges: b, nodes: C, nodeLookup: _, triggerNodeChanges: N, triggerEdgeChanges: P } = v(), T = y || C, A = x || b, O = T.map((G) => {
        const B = _.get(G.id);
        return B && (B.selected = !1), ro(G.id, !1);
      }), D = A.map((G) => ro(G.id, !1));
      N(O), P(D);
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
      const N = x.reduce((T, A) => A.selected ? [...T, ro(A.id, !1)] : T, []), P = y.reduce((T, A) => A.selected ? [...T, ro(A.id, !1)] : T, []);
      b(N), C(P);
    },
    setNodeExtent: (y) => {
      const { nodes: x, nodeLookup: b, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: N, nodeExtent: P } = v();
      y[0][0] === P[0][0] && y[0][1] === P[0][1] && y[1][0] === P[1][0] && y[1][1] === P[1][1] || (uy(x, b, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: N,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: x, width: b, height: C, panZoom: _, translateExtent: N } = v();
      return OD({ delta: y, panZoom: _, transform: x, translateExtent: N, width: b, height: C });
    },
    setCenter: async (y, x, b) => {
      const { width: C, height: _, maxZoom: N, panZoom: P } = v();
      if (!P)
        return Promise.resolve(!1);
      const T = typeof (b == null ? void 0 : b.zoom) < "u" ? b.zoom : N;
      return await P.setViewport({
        x: C / 2 - y * T,
        y: _ / 2 - x * T,
        zoom: T
      }, { duration: b == null ? void 0 : b.duration, ease: b == null ? void 0 : b.ease, interpolate: b == null ? void 0 : b.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ...tR }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...p_() })
  };
}, Object.is);
function aP({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: i, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: p, children: m }) {
  const [v] = k.useState(() => Z3({
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
  return R.jsx(vq, { value: v, children: R.jsx(Fq, { children: m }) });
}
function J3({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: i, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: p, nodeExtent: m }) {
  return k.useContext(Tu) ? R.jsx(R.Fragment, { children: e }) : R.jsx(aP, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: i, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: p, nodeExtent: m, children: e });
}
const ez = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function tz({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: i, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: p, onMoveEnd: m, onConnect: v, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: b, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: N, onNodeContextMenu: P, onNodeDoubleClick: T, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onSelectionChange: X, onSelectionDragStart: L, onSelectionDrag: H, onSelectionDragStop: $, onSelectionContextMenu: K, onSelectionStart: M, onSelectionEnd: q, onBeforeDelete: Q, connectionMode: j, connectionLineType: W = Rr.Bezier, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: Y = "Shift", selectionOnDrag: te = !1, selectionMode: se = zs.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = $s() ? "Meta" : "Control", zoomActivationKeyCode: de = $s() ? "Meta" : "Control", snapToGrid: pe, snapGrid: be, onlyRenderVisibleElements: me = !1, selectNodesOnDrag: Re, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Ft, nodeOrigin: ht = MR, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: en = !0, defaultViewport: $t = Tq, minZoom: tn = 0.5, maxZoom: Bt = 2, translateExtent: _t = qs, preventScrolling: Dr = !0, nodeExtent: Vt, defaultMarkerColor: qn = "#b1b1b7", zoomOnScroll: bo = !0, zoomOnPinch: Tt = !0, panOnScroll: Ht = !1, panOnScrollSpeed: dc = 0.5, panOnScrollMode: Ai = so.Free, zoomOnDoubleClick: Ii = !0, panOnDrag: Mi = !0, onPaneClick: Oi, onPaneMouseEnter: Li, onPaneMouseMove: nr, onPaneMouseLeave: rr, onPaneScroll: fa, onPaneContextMenu: da, paneClickDistance: ha = 1, nodeClickDistance: pa = 0, children: ga, onReconnect: ji, onReconnectStart: ma, onReconnectEnd: qr, onEdgeContextMenu: Di, onEdgeDoubleClick: zr, onEdgeMouseEnter: hc, onEdgeMouseMove: Fr, onEdgeMouseLeave: So, reconnectRadius: Eo = 10, onNodesChange: qi, onEdgesChange: pc, noDragClassName: gc = "nodrag", noWheelClassName: mc = "nowheel", noPanClassName: xn = "nopan", fitView: zi, fitViewOptions: Fi, connectOnClick: vc, attributionPosition: va, proOptions: ya, defaultEdgeOptions: wa, elevateNodesOnSelect: xa, elevateEdgesOnSelect: yc, disableKeyboardA11y: _a = !1, autoPanOnConnect: Ke, autoPanOnNodeDrag: wc, autoPanSpeed: $i, connectionRadius: ba, isValidConnection: Co, onError: xc, style: Sa, id: $r, nodeDragThreshold: Wt, connectionDragThreshold: _c, viewport: At, onViewportChange: bc, width: Sc, height: Ec, colorMode: ko = "light", debug: No, onScroll: _n, ariaLabelConfig: Ro, ...Cc }, kc) {
  const Br = $r || "1", Ea = Oq(ko), Bi = k.useCallback((or) => {
    or.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), _n == null || _n(or);
  }, [_n]);
  return R.jsx("div", { "data-testid": "rf__wrapper", ...Cc, onScroll: Bi, style: { ...Sa, ...ez }, ref: kc, className: nt(["react-flow", i, Ea]), id: $r, role: "application", children: R.jsxs(J3, { nodes: e, edges: t, width: Sc, height: Ec, fitView: zi, fitViewOptions: Fi, minZoom: tn, maxZoom: Bt, nodeOrigin: ht, nodeExtent: Vt, children: [R.jsx(Q3, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: N, onNodeContextMenu: P, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: l, connectionLineType: W, connectionLineStyle: ie, connectionLineComponent: F, connectionLineContainerStyle: Z, selectionKeyCode: Y, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: me, defaultViewport: $t, translateExtent: _t, minZoom: tn, maxZoom: Bt, preventScrolling: Dr, zoomOnScroll: bo, zoomOnPinch: Tt, zoomOnDoubleClick: Ii, panOnScroll: Ht, panOnScrollSpeed: dc, panOnScrollMode: Ai, panOnDrag: Mi, onPaneClick: Oi, onPaneMouseEnter: Li, onPaneMouseMove: nr, onPaneMouseLeave: rr, onPaneScroll: fa, onPaneContextMenu: da, paneClickDistance: ha, nodeClickDistance: pa, onSelectionContextMenu: K, onSelectionStart: M, onSelectionEnd: q, onReconnect: ji, onReconnectStart: ma, onReconnectEnd: qr, onEdgeContextMenu: Di, onEdgeDoubleClick: zr, onEdgeMouseEnter: hc, onEdgeMouseMove: Fr, onEdgeMouseLeave: So, reconnectRadius: Eo, defaultMarkerColor: qn, noDragClassName: gc, noWheelClassName: mc, noPanClassName: xn, rfId: Br, disableKeyboardA11y: _a, nodeExtent: Vt, viewport: At, onViewportChange: bc }), R.jsx(Mq, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: v, onConnectStart: E, onConnectEnd: y, onClickConnectStart: x, onClickConnectEnd: b, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Ft, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: en, elevateNodesOnSelect: xa, elevateEdgesOnSelect: yc, minZoom: tn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: qi, onEdgesChange: pc, snapToGrid: pe, snapGrid: be, connectionMode: j, translateExtent: _t, connectOnClick: vc, defaultEdgeOptions: wa, fitView: zi, fitViewOptions: Fi, onNodesDelete: G, onEdgesDelete: B, onDelete: V, onNodeDragStart: A, onNodeDrag: O, onNodeDragStop: D, onSelectionDrag: H, onSelectionDragStart: L, onSelectionDragStop: $, onMove: h, onMoveStart: p, onMoveEnd: m, noPanClassName: xn, nodeOrigin: ht, rfId: Br, autoPanOnConnect: Ke, autoPanOnNodeDrag: wc, autoPanSpeed: $i, onError: xc, connectionRadius: ba, isValidConnection: Co, selectNodesOnDrag: Re, nodeDragThreshold: Wt, connectionDragThreshold: _c, onBeforeDelete: Q, debug: No, ariaLabelConfig: Ro }), R.jsx(Pq, { onSelectionChange: X }), ga, R.jsx(Eq, { proOptions: ya, position: va }), R.jsx(Sq, { rfId: Br, disableKeyboardA11y: _a })] }) });
}
var nz = DR(tz);
function rz({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return R.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", n, o]) });
}
function oz({ radius: e, className: t }) {
  return R.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Pr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Pr || (Pr = {}));
const iz = {
  [Pr.Dots]: 1,
  [Pr.Lines]: 1,
  [Pr.Cross]: 6
}, sz = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function lP({
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
  const p = k.useRef(null), { transform: m, patternId: v } = Me(sz, Qe), E = o || iz[t], y = t === Pr.Dots, x = t === Pr.Cross, b = Array.isArray(n) ? n : [n, n], C = [b[0] * m[2] || 1, b[1] * m[2] || 1], _ = E * m[2], N = Array.isArray(a) ? a : [a, a], P = x ? [_, _] : C, T = [
    N[0] * m[2] || 1 + P[0] / 2,
    N[1] * m[2] || 1 + P[1] / 2
  ], A = `${v}${e || ""}`;
  return R.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...Au,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: p, "data-testid": "rf__background", children: [R.jsx("pattern", { id: A, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? R.jsx(oz, { radius: _ / 2, className: h }) : R.jsx(rz, { dimensions: P, lineWidth: i, variant: t, className: h }) }), R.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${A})` })] });
}
lP.displayName = "Background";
const az = k.memo(lP);
function lz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: R.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function uz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: R.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function cz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: R.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function fz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function dz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Ll({ children: e, className: t, ...n }) {
  return R.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...n, children: e });
}
const hz = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function uP({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: p = "bottom-left", orientation: m = "vertical", "aria-label": v }) {
  const E = He(), { isInteractive: y, minZoomReached: x, maxZoomReached: b, ariaLabelConfig: C } = Me(hz, Qe), { zoomIn: _, zoomOut: N, fitView: P } = $y(), T = () => {
    _(), a == null || a();
  }, A = () => {
    N(), l == null || l();
  }, O = () => {
    P(i), u == null || u();
  }, D = () => {
    E.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, G = m === "horizontal" ? "horizontal" : "vertical";
  return R.jsxs(ra, { className: nt(["react-flow__controls", G, d]), position: p, style: e, "data-testid": "rf__controls", "aria-label": v ?? C["controls.ariaLabel"], children: [t && R.jsxs(R.Fragment, { children: [R.jsx(Ll, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: b, children: R.jsx(lz, {}) }), R.jsx(Ll, { onClick: A, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: x, children: R.jsx(uz, {}) })] }), n && R.jsx(Ll, { className: "react-flow__controls-fitview", onClick: O, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: R.jsx(cz, {}) }), o && R.jsx(Ll, { className: "react-flow__controls-interactive", onClick: D, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? R.jsx(dz, {}) : R.jsx(fz, {}) }), h] });
}
uP.displayName = "Controls";
const pz = k.memo(uP);
function gz({ id: e, x: t, y: n, width: o, height: i, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: p, selected: m, onClick: v }) {
  const { background: E, backgroundColor: y } = a || {}, x = l || E || y;
  return R.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: n, rx: h, ry: h, width: o, height: i, style: {
    fill: x,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: p, onClick: v ? (b) => v(b, e) : void 0 });
}
const mz = k.memo(gz), vz = (e) => e.nodes.map((t) => t.id), bd = (e) => e instanceof Function ? e : () => e;
function yz({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: i,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = mz,
  onClick: l
}) {
  const u = Me(vz, Qe), f = bd(t), d = bd(e), h = bd(n), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return R.jsx(R.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    R.jsx(xz, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: i, NodeComponent: a, onClick: l, shapeRendering: p }, m)
  )) });
}
function wz({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: p, width: m, height: v } = Me((E) => {
    const { internals: y } = E.nodeLookup.get(e), x = y.userNode, { x: b, y: C } = y.positionAbsolute, { width: _, height: N } = Jn(x);
    return {
      node: x,
      x: b,
      y: C,
      width: _,
      height: N
    };
  }, Qe);
  return !d || d.hidden || !lR(d) ? null : R.jsx(u, { x: h, y: p, width: m, height: v, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: i, strokeColor: n(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const xz = k.memo(wz);
var _z = k.memo(yz);
const bz = 200, Sz = 150, Ez = (e) => !e.hidden, Cz = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? aR(Js(e.nodeLookup, { filter: Ez }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, kz = "react-flow__minimap-desc";
function cP({
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
  zoomable: x = !1,
  ariaLabel: b,
  inversePan: C,
  zoomStep: _ = 1,
  offsetScale: N = 5
}) {
  const P = He(), T = k.useRef(null), { boundingRect: A, viewBB: O, rfId: D, panZoom: G, translateExtent: B, flowWidth: V, flowHeight: X, ariaLabelConfig: L } = Me(Cz, Qe), H = (e == null ? void 0 : e.width) ?? bz, $ = (e == null ? void 0 : e.height) ?? Sz, K = A.width / H, M = A.height / $, q = Math.max(K, M), Q = q * H, j = q * $, W = N * q, ie = A.x - (Q - A.width) / 2 - W, F = A.y - (j - A.height) / 2 - W, Z = Q + W * 2, ee = j + W * 2, Y = `${kz}-${D}`, te = k.useRef(0), se = k.useRef();
  te.current = q, k.useEffect(() => {
    if (T.current && G)
      return se.current = VD({
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
      translateExtent: B,
      width: V,
      height: X,
      inversePan: C,
      pannable: y,
      zoomStep: _,
      zoomable: x
    });
  }, [y, x, C, _, B, V, X]);
  const ae = v ? (pe) => {
    var Re;
    const [be, me] = ((Re = se.current) == null ? void 0 : Re.pointer(pe)) || [0, 0];
    v(pe, { x: be, y: me });
  } : void 0, ce = E ? k.useCallback((pe, be) => {
    const me = P.getState().nodeLookup.get(be).internals.userNode;
    E(pe, me);
  }, []) : void 0, de = b ?? L["minimap.ariaLabel"];
  return R.jsx(ra, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * q : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: R.jsxs("svg", { width: H, height: $, viewBox: `${ie} ${F} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": Y, ref: T, onClick: ae, children: [de && R.jsx("title", { id: Y, children: de }), R.jsx(_z, { onClick: ce, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: a, nodeClassName: i, nodeStrokeWidth: l, nodeComponent: u }), R.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - W},${F - W}h${Z + W * 2}v${ee + W * 2}h${-Z - W * 2}z
        M${O.x},${O.y}h${O.width}v${O.height}h${-O.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
cP.displayName = "MiniMap";
k.memo(cP);
const Nz = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Rz = {
  [gi.Line]: "right",
  [gi.Handle]: "bottom-right"
};
function Pz({ nodeId: e, position: t, variant: n = gi.Handle, className: o, style: i = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: p = !1, resizeDirection: m, autoScale: v = !0, shouldResize: E, onResizeStart: y, onResize: x, onResizeEnd: b }) {
  const C = $R(), _ = typeof e == "string" ? e : C, N = He(), P = k.useRef(null), T = n === gi.Handle, A = Me(k.useCallback(Nz(T && v), [T, v]), Qe), O = k.useRef(null), D = t ?? Rz[n];
  k.useEffect(() => {
    if (!(!P.current || !_))
      return O.current || (O.current = rq({
        domNode: P.current,
        nodeId: _,
        getStoreItems: () => {
          const { nodeLookup: B, transform: V, snapGrid: X, snapToGrid: L, nodeOrigin: H, domNode: $ } = N.getState();
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
          const { triggerNodeChanges: X, nodeLookup: L, parentLookup: H, nodeOrigin: $ } = N.getState(), K = [], M = { x: B.x, y: B.y }, q = L.get(_);
          if (q && q.expandParent && q.parentId) {
            const Q = q.origin ?? $, j = B.width ?? q.measured.width ?? 0, W = B.height ?? q.measured.height ?? 0, ie = {
              id: q.id,
              parentId: q.parentId,
              rect: {
                width: j,
                height: W,
                ...uR({
                  x: B.x ?? q.position.x,
                  y: B.y ?? q.position.y
                }, { width: j, height: W }, q.parentId, L, Q)
              }
            }, F = Fy([ie], L, H, $);
            K.push(...F), M.x = B.x ? Math.max(Q[0] * j, B.x) : void 0, M.y = B.y ? Math.max(Q[1] * W, B.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const Q = {
              id: _,
              type: "position",
              position: { ...M }
            };
            K.push(Q);
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
            K.push(j);
          }
          for (const Q of V) {
            const j = {
              ...Q,
              type: "position"
            };
            K.push(j);
          }
          X(K);
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
        onResize: x,
        onResizeEnd: b,
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
    p,
    y,
    x,
    b,
    E
  ]);
  const G = D.split("-");
  return R.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...G, n, o]), ref: P, style: {
    ...i,
    scale: A,
    ...l && { [T ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
k.memo(Pz);
function g_(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function wi(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((i) => {
      const a = g_(i, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const a = o[i];
          typeof a == "function" ? a() : g_(e[i], null);
        }
      };
  };
}
function Be(...e) {
  return k.useCallback(wi(...e), e);
}
var Tz = Symbol.for("react.lazy"), uu = Cy[" use ".trim().toString()];
function Az(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function fP(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Tz && "_payload" in e && Az(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Vy(e) {
  const t = /* @__PURE__ */ Iz(e), n = k.forwardRef((o, i) => {
    let { children: a, ...l } = o;
    fP(a) && typeof uu == "function" && (a = uu(a._payload));
    const u = k.Children.toArray(a), f = u.find(Oz);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Hy = /* @__PURE__ */ Vy("Slot");
// @__NO_SIDE_EFFECTS__
function Iz(e) {
  const t = k.forwardRef((n, o) => {
    let { children: i, ...a } = n;
    if (fP(i) && typeof uu == "function" && (i = uu(i._payload)), k.isValidElement(i)) {
      const l = jz(i), u = Lz(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? wi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Mz = Symbol("radix.slottable");
function Oz(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Mz;
}
function Lz(e, t) {
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
function jz(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function dP(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = dP(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function hP() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = dP(e)) && (o && (o += " "), o += t);
  return o;
}
const m_ = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, v_ = hP, Wy = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return v_(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = t, l = Object.keys(i).map((d) => {
    const h = n == null ? void 0 : n[d], p = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = m_(h) || m_(p);
    return i[d][m];
  }), u = n && Object.entries(n).reduce((d, h) => {
    let [p, m] = h;
    return m === void 0 || (d[p] = m), d;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((d, h) => {
    let { class: p, className: m, ...v } = h;
    return Object.entries(v).every((E) => {
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
  return v_(e, l, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Dz = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, qz = (e, t) => ({
  classGroupId: e,
  validator: t
}), pP = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), cu = "-", y_ = [], zz = "arbitrary..", Fz = (e) => {
  const t = Bz(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return $z(l);
      const u = l.split(cu), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return gP(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = n[l];
        return f ? d ? Dz(d, f) : f : d || y_;
      }
      return n[l] || y_;
    }
  };
}, gP = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const i = e[t], a = n.nextPart.get(i);
  if (a) {
    const d = gP(e, t + 1, a);
    if (d) return d;
  }
  const l = n.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(cu) : e.slice(t).join(cu), f = l.length;
  for (let d = 0; d < f; d++) {
    const h = l[d];
    if (h.validator(u))
      return h.classGroupId;
  }
}, $z = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? zz + o : void 0;
})(), Bz = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Vz(n, t);
}, Vz = (e, t) => {
  const n = pP();
  for (const o in e) {
    const i = e[o];
    Uy(i, n, o, t);
  }
  return n;
}, Uy = (e, t, n, o) => {
  const i = e.length;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    Hz(l, t, n, o);
  }
}, Hz = (e, t, n, o) => {
  if (typeof e == "string") {
    Wz(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Uz(e, t, n, o);
    return;
  }
  Gz(e, t, n, o);
}, Wz = (e, t, n) => {
  const o = e === "" ? t : mP(t, e);
  o.classGroupId = n;
}, Uz = (e, t, n, o) => {
  if (Kz(e)) {
    Uy(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(qz(n, e));
}, Gz = (e, t, n, o) => {
  const i = Object.entries(e), a = i.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = i[l];
    Uy(f, mP(t, u), n, o);
  }
}, mP = (e, t) => {
  let n = e;
  const o = t.split(cu), i = o.length;
  for (let a = 0; a < i; a++) {
    const l = o[a];
    let u = n.nextPart.get(l);
    u || (u = pP(), n.nextPart.set(l, u)), n = u;
  }
  return n;
}, Kz = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Yz = (e) => {
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
}, dy = "!", w_ = ":", Xz = [], x_ = (e, t, n, o, i) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: i
}), Qz = (e) => {
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
        if (x === w_) {
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
    p.endsWith(dy) ? (m = p.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(dy) && (m = p.slice(1), v = !0)
    );
    const E = d && d > f ? d - f : void 0;
    return x_(a, v, m, E);
  };
  if (t) {
    const i = t + w_, a = o;
    o = (l) => l.startsWith(i) ? a(l.slice(i.length)) : x_(Xz, !1, l, void 0, !0);
  }
  if (n) {
    const i = o;
    o = (a) => n({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, Zz = (e) => {
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
}, Jz = (e) => ({
  cache: Yz(e.cacheSize),
  parseClassName: Qz(e),
  sortModifiers: Zz(e),
  ...Fz(e)
}), eF = /\s+/, tF = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(eF);
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
    let x = !!y, b = o(x ? E.substring(0, y) : E);
    if (!b) {
      if (!x) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (b = o(E), !b) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      x = !1;
    }
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), _ = v ? C + dy : C, N = _ + b;
    if (l.indexOf(N) > -1)
      continue;
    l.push(N);
    const P = i(b, x);
    for (let T = 0; T < P.length; ++T) {
      const A = P[T];
      l.push(_ + A);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, nF = (...e) => {
  let t = 0, n, o, i = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = vP(n)) && (i && (i += " "), i += o);
  return i;
}, vP = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = vP(e[o])) && (n && (n += " "), n += t);
  return n;
}, rF = (e, ...t) => {
  let n, o, i, a;
  const l = (f) => {
    const d = t.reduce((h, p) => p(h), e());
    return n = Jz(d), o = n.cache.get, i = n.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = tF(f, n);
    return i(f, h), h;
  };
  return a = l, (...f) => a(nF(...f));
}, oF = [], st = (e) => {
  const t = (n) => n[e] || oF;
  return t.isThemeGetter = !0, t;
}, yP = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wP = /^\((?:(\w[\w-]*):)?(.+)\)$/i, iF = /^\d+\/\d+$/, sF = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, aF = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, lF = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, uF = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cF = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Zo = (e) => iF.test(e), Ae = (e) => !!e && !Number.isNaN(Number(e)), kr = (e) => !!e && Number.isInteger(Number(e)), Sd = (e) => e.endsWith("%") && Ae(e.slice(0, -1)), Kn = (e) => sF.test(e), fF = () => !0, dF = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  aF.test(e) && !lF.test(e)
), xP = () => !1, hF = (e) => uF.test(e), pF = (e) => cF.test(e), gF = (e) => !xe(e) && !_e(e), mF = (e) => xi(e, SP, xP), xe = (e) => yP.test(e), no = (e) => xi(e, EP, dF), Ed = (e) => xi(e, _F, Ae), __ = (e) => xi(e, _P, xP), vF = (e) => xi(e, bP, pF), jl = (e) => xi(e, CP, hF), _e = (e) => wP.test(e), Es = (e) => _i(e, EP), yF = (e) => _i(e, bF), b_ = (e) => _i(e, _P), wF = (e) => _i(e, SP), xF = (e) => _i(e, bP), Dl = (e) => _i(e, CP, !0), xi = (e, t, n) => {
  const o = yP.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, _i = (e, t, n = !1) => {
  const o = wP.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, _P = (e) => e === "position" || e === "percentage", bP = (e) => e === "image" || e === "url", SP = (e) => e === "length" || e === "size" || e === "bg-size", EP = (e) => e === "length", _F = (e) => e === "number", bF = (e) => e === "family-name", CP = (e) => e === "shadow", SF = () => {
  const e = st("color"), t = st("font"), n = st("text"), o = st("font-weight"), i = st("tracking"), a = st("leading"), l = st("breakpoint"), u = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), p = st("inset-shadow"), m = st("text-shadow"), v = st("drop-shadow"), E = st("blur"), y = st("perspective"), x = st("aspect"), b = st("ease"), C = st("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  ], P = () => [...N(), _e, xe], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [_e, xe, f], D = () => [Zo, "full", "auto", ...O()], G = () => [kr, "none", "subgrid", _e, xe], B = () => ["auto", {
    span: ["full", kr, _e, xe]
  }, kr, _e, xe], V = () => [kr, "auto", _e, xe], X = () => ["auto", "min", "max", "fr", _e, xe], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...O()], K = () => [Zo, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], M = () => [e, _e, xe], q = () => [...N(), b_, __, {
    position: [_e, xe]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", wF, mF, {
    size: [_e, xe]
  }], W = () => [Sd, Es, no], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    _e,
    xe
  ], F = () => ["", Ae, Es, no], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Y = () => [Ae, Sd, b_, __], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    _e,
    xe
  ], se = () => ["none", Ae, _e, xe], ae = () => ["none", Ae, _e, xe], ce = () => [Ae, _e, xe], de = () => [Zo, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Kn],
      breakpoint: [Kn],
      color: [fF],
      container: [Kn],
      "drop-shadow": [Kn],
      ease: ["in", "out", "in-out"],
      font: [gF],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Kn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Kn],
      shadow: [Kn],
      spacing: ["px", Ae],
      text: [Kn],
      "text-shadow": [Kn],
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
        aspect: ["auto", "square", Zo, xe, _e, x]
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
        z: [kr, "auto", _e, xe]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Zo, "full", "auto", u, ...O()]
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
        flex: [Ae, Zo, "auto", "initial", "none", xe]
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
        order: [kr, "first", "last", "none", _e, xe]
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
        size: K()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...K()]
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
          ...K()
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
          ...K()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...K()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...K()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...K()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Es, no]
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
        font: [o, _e, Ed]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Sd, xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yF, xe, t]
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
        tracking: [i, _e, xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ae, "none", _e, Ed]
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
        decoration: [Ae, "from-font", "auto", _e, no]
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
          }, kr, _e, xe],
          radial: ["", _e, xe],
          conic: [kr, _e, xe]
        }, xF, vF]
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
        "outline-offset": [Ae, _e, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ae, Es, no]
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
          Dl,
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
        "inset-shadow": ["none", p, Dl, jl]
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
        "ring-offset": [Ae, no]
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
        "text-shadow": ["none", m, Dl, jl]
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
        "mask-radial": [_e, xe]
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
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ae]
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
          v,
          Dl,
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
        ease: ["linear", "initial", b, _e, xe]
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
        transform: [_e, xe, "", "none", "gpu", "cpu"]
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
        stroke: [Ae, Es, no, Ed]
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
}, EF = /* @__PURE__ */ rF(SF);
function Te(...e) {
  return EF(hP(e));
}
const CF = Wy(
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
function mi({
  className: e,
  variant: t,
  asChild: n = !1,
  ...o
}) {
  const i = n ? Hy : "span";
  return /* @__PURE__ */ R.jsx(
    i,
    {
      "data-slot": "badge",
      className: Te(CF({ variant: t }), e),
      ...o
    }
  );
}
function Ar({
  className: e,
  children: t,
  style: n,
  ...o
}) {
  const [i, a] = k.useState(!1);
  return /* @__PURE__ */ R.jsx(
    Hs,
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
        backgroundColor: i ? "var(--pynodeflow-handle-hover-bg, #747474ff)" : "var(--pynodeflow-handle-bg, #000000ff)",
        ...n
      },
      className: Te(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        e
      ),
      children: t
    }
  );
}
const kF = {
  [ye.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [ye.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [ye.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [ye.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function NF({
  showButton: e = !0,
  position: t = ye.Bottom,
  children: n,
  ...o
}) {
  const i = kF[t || ye.Bottom], a = t === ye.Top || t === ye.Bottom;
  return /* @__PURE__ */ R.jsx(Ar, { position: t, id: o.id, ...o, children: e && /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: `absolute flex items-center ${i} pointer-events-none`,
      children: [
        /* @__PURE__ */ R.jsx(
          "div",
          {
            className: `bg-gray-300 ${a ? "h-10 w-px" : "h-px w-10"}`
          }
        ),
        /* @__PURE__ */ R.jsx("div", { className: "nodrag nopan pointer-events-auto", children: n })
      ]
    }
  ) });
}
const RF = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function PF({
  className: e,
  labelClassName: t,
  handleClassName: n,
  title: o,
  position: i,
  ...a
}) {
  const { ref: l, ...u } = a;
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      title: o,
      className: Te(
        "relative flex items-center",
        RF[i],
        e
      ),
      ref: l,
      children: [
        /* @__PURE__ */ R.jsx(
          Ar,
          {
            position: i,
            className: n,
            ...u
          }
        ),
        /* @__PURE__ */ R.jsx("label", { className: Te("text-foreground px-3", t), children: o })
      ]
    }
  );
}
const fu = {
  base: Ar,
  button: NF,
  labeled: PF
};
function TF(e) {
  return !e || !fu[e] ? Ar : fu[e];
}
function RU(e, t) {
  fu[e] = t;
}
function PU() {
  return Object.keys(fu);
}
function S_({
  handleType: e = "base",
  showButton: t,
  label: n,
  handleConfig: o,
  ...i
}) {
  const a = (o == null ? void 0 : o.handle_type) || e, l = TF(a), u = { ...i };
  return a === "button" && t !== void 0 && (u.showButton = t), a === "labeled" && n && (u.label = n), /* @__PURE__ */ R.jsx(l, { ...u });
}
function du({
  inputs: e,
  outputs: t,
  children: n,
  handleType: o = "base",
  inputHandleType: i,
  outputHandleType: a
}) {
  const l = i || o, u = a || o;
  return /* @__PURE__ */ R.jsxs("div", { className: "flex p-3 gap-3 items-start", children: [
    /* @__PURE__ */ R.jsx("div", { className: "flex flex-col gap-2 mr-auto pl-0", children: e && Array.isArray(e) && e.map((f) => /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-start", children: [
      /* @__PURE__ */ R.jsx(
        S_,
        {
          type: "target",
          position: ye.Left,
          id: f.id,
          handleType: l,
          label: f.label
        }
      ),
      /* @__PURE__ */ R.jsx(mi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: f.label })
    ] }, `input-${f.id}`)) }),
    n,
    /* @__PURE__ */ R.jsx("div", { className: "flex flex-col gap-2 ml-auto pr-0", children: t && Array.isArray(t) && t.map((f) => /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-end", children: [
      /* @__PURE__ */ R.jsx(mi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: f.label }),
      /* @__PURE__ */ R.jsx(
        S_,
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
function AF({ inputs: e, outputs: t, children: n }) {
  return /* @__PURE__ */ R.jsxs("div", { className: "flex flex-col gap-3 p-3", children: [
    e && e.length > 0 && /* @__PURE__ */ R.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: e.map((o) => /* @__PURE__ */ R.jsxs("div", { className: "flex flex-col items-center gap-1 relative", children: [
      /* @__PURE__ */ R.jsx(
        Ar,
        {
          type: "target",
          position: ye.Top,
          id: o.id,
          className: "!relative !transform-none",
          style: { position: "relative", top: 0, left: 0 }
        }
      ),
      /* @__PURE__ */ R.jsx(mi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: o.label })
    ] }, `input-${o.id}`)) }),
    n && /* @__PURE__ */ R.jsx("div", { className: "flex justify-center", children: n }),
    t && t.length > 0 && /* @__PURE__ */ R.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: t.map((o) => /* @__PURE__ */ R.jsxs("div", { className: "flex flex-col items-center gap-1 relative", children: [
      /* @__PURE__ */ R.jsx(mi, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: o.label }),
      /* @__PURE__ */ R.jsx(
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
function IF({ inputs: e, outputs: t, children: n }) {
  return /* @__PURE__ */ R.jsxs("div", { className: "flex p-2 gap-2 items-start", children: [
    /* @__PURE__ */ R.jsx("div", { className: "flex flex-col gap-1", children: e && Array.isArray(e) && e.map((o) => /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-1 relative min-h-6", children: [
      /* @__PURE__ */ R.jsx(
        Ar,
        {
          type: "target",
          position: ye.Left,
          id: o.id,
          className: "w-2 h-2"
        }
      ),
      /* @__PURE__ */ R.jsx(mi, { variant: "outline", className: "text-[10px] font-normal py-0 px-1 h-5", children: o.label })
    ] }, `input-${o.id}`)) }),
    n,
    /* @__PURE__ */ R.jsx("div", { className: "flex flex-col gap-1", children: t && Array.isArray(t) && t.map((o) => /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-1 relative min-h-6 justify-end", children: [
      /* @__PURE__ */ R.jsx(mi, { variant: "outline", className: "text-[10px] font-normal py-0 px-1 h-5", children: o.label }),
      /* @__PURE__ */ R.jsx(
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
const Gy = {
  horizontal: du,
  vertical: AF,
  compact: IF,
  default: du
  // Explicit default alias
};
function MF(e) {
  return e && Gy[e.toLowerCase()] || du;
}
function TU(e, t) {
  Gy[e.toLowerCase()] = t;
}
function AU() {
  return Object.keys(Gy).filter((e) => e !== "default");
}
function kP({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card",
      className: Te(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function OF({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: Te(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function LF({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: Te("leading-none font-semibold", e),
      ...t
    }
  );
}
function jF({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Te("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function E_(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Le(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function DF(e, t) {
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
function bi(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l), f = n.length;
    n = [...n, l];
    const d = (p) => {
      var b;
      const { scope: m, children: v, ...E } = p, y = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[f]) || u, x = k.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ R.jsx(y.Provider, { value: x, children: v });
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
  return i.scopeName = e, [o, qF(i, ...t)];
}
function qF(...e) {
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
// @__NO_SIDE_EFFECTS__
function C_(e) {
  const t = /* @__PURE__ */ zF(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find($F);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function zF(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = VF(i), u = BF(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? wi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var FF = Symbol("radix.slottable");
function $F(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === FF;
}
function BF(e, t) {
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
function VF(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function HF(e) {
  const t = e + "CollectionProvider", [n, o] = bi(t), [i, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: x, children: b } = y, C = kn.useRef(null), _ = kn.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ R.jsx(i, { scope: x, itemMap: _, collectionRef: C, children: b });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ C_(u), d = kn.forwardRef(
    (y, x) => {
      const { scope: b, children: C } = y, _ = a(u, b), N = Be(x, _.collectionRef);
      return /* @__PURE__ */ R.jsx(f, { ref: N, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ C_(h), v = kn.forwardRef(
    (y, x) => {
      const { scope: b, children: C, ..._ } = y, N = kn.useRef(null), P = Be(x, N), T = a(h, b);
      return kn.useEffect(() => (T.itemMap.set(N, { ref: N, ..._ }), () => void T.itemMap.delete(N))), /* @__PURE__ */ R.jsx(m, { [p]: "", ref: P, children: C });
    }
  );
  v.displayName = h;
  function E(y) {
    const x = a(e + "CollectionConsumer", y);
    return kn.useCallback(() => {
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
    E,
    o
  ];
}
var WF = k.createContext(void 0);
function UF(e) {
  const t = k.useContext(WF);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function GF(e) {
  const t = /* @__PURE__ */ KF(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(XF);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function KF(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = ZF(i), u = QF(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? wi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var YF = Symbol("radix.slottable");
function XF(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === YF;
}
function QF(e, t) {
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
function ZF(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var JF = [
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
], De = JF.reduce((e, t) => {
  const n = /* @__PURE__ */ GF(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ R.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function e4(e, t) {
  e && na.flushSync(() => e.dispatchEvent(t));
}
function fo(e) {
  const t = k.useRef(e);
  return k.useEffect(() => {
    t.current = e;
  }), k.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function t4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fo(e);
  k.useEffect(() => {
    const o = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var n4 = "DismissableLayer", hy = "dismissableLayer.update", r4 = "dismissableLayer.pointerDownOutside", o4 = "dismissableLayer.focusOutside", k_, NP = k.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Mu = k.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = k.useContext(NP), [h, p] = k.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = k.useState({}), E = Be(t, (A) => p(A)), y = Array.from(d.layers), [x] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(x), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, N = C >= b, P = a4((A) => {
      const O = A.target, D = [...d.branches].some((G) => G.contains(O));
      !N || D || (i == null || i(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m), T = l4((A) => {
      const O = A.target;
      [...d.branches].some((G) => G.contains(O)) || (a == null || a(A), l == null || l(A), A.defaultPrevented || u == null || u());
    }, m);
    return t4((A) => {
      C === d.layers.size - 1 && (o == null || o(A), !A.defaultPrevented && u && (A.preventDefault(), u()));
    }, m), k.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (k_ = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), N_(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = k_);
        };
    }, [h, m, n, d]), k.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), N_());
    }, [h, d]), k.useEffect(() => {
      const A = () => v({});
      return document.addEventListener(hy, A), () => document.removeEventListener(hy, A);
    }, []), /* @__PURE__ */ R.jsx(
      De.div,
      {
        ...f,
        ref: E,
        style: {
          pointerEvents: _ ? N ? "auto" : "none" : void 0,
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
Mu.displayName = n4;
var i4 = "DismissableLayerBranch", s4 = k.forwardRef((e, t) => {
  const n = k.useContext(NP), o = k.useRef(null), i = Be(t, o);
  return k.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ R.jsx(De.div, { ...e, ref: i });
});
s4.displayName = i4;
function a4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fo(e), o = k.useRef(!1), i = k.useRef(() => {
  });
  return k.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          RP(
            r4,
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
function l4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fo(e), o = k.useRef(!1);
  return k.useEffect(() => {
    const i = (a) => {
      a.target && !o.current && RP(o4, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function N_() {
  const e = new CustomEvent(hy);
  document.dispatchEvent(e);
}
function RP(e, t, n, { discrete: o }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), o ? e4(i, a) : i.dispatchEvent(a);
}
var Cd = 0;
function PP() {
  k.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? R_()), document.body.insertAdjacentElement("beforeend", e[1] ?? R_()), Cd++, () => {
      Cd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Cd--;
    };
  }, []);
}
function R_() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var kd = "focusScope.autoFocusOnMount", Nd = "focusScope.autoFocusOnUnmount", P_ = { bubbles: !1, cancelable: !0 }, u4 = "FocusScope", Ky = k.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = k.useState(null), d = fo(i), h = fo(a), p = k.useRef(null), m = Be(t, (y) => f(y)), v = k.useRef({
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
        const N = _.target;
        u.contains(N) ? p.current = N : Nr(p.current, { select: !0 });
      }, x = function(_) {
        if (v.paused || !u) return;
        const N = _.relatedTarget;
        N !== null && (u.contains(N) || Nr(p.current, { select: !0 }));
      }, b = function(_) {
        if (document.activeElement === document.body)
          for (const P of _)
            P.removedNodes.length > 0 && Nr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", x);
      const C = new MutationObserver(b);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [o, u, v.paused]), k.useEffect(() => {
    if (u) {
      A_.add(v);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const b = new CustomEvent(kd, P_);
        u.addEventListener(kd, d), u.dispatchEvent(b), b.defaultPrevented || (c4(g4(TP(u)), { select: !0 }), document.activeElement === y && Nr(u));
      }
      return () => {
        u.removeEventListener(kd, d), setTimeout(() => {
          const b = new CustomEvent(Nd, P_);
          u.addEventListener(Nd, h), u.dispatchEvent(b), b.defaultPrevented || Nr(y ?? document.body, { select: !0 }), u.removeEventListener(Nd, h), A_.remove(v);
        }, 0);
      };
    }
  }, [u, d, h, v]);
  const E = k.useCallback(
    (y) => {
      if (!n && !o || v.paused) return;
      const x = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, b = document.activeElement;
      if (x && b) {
        const C = y.currentTarget, [_, N] = f4(C);
        _ && N ? !y.shiftKey && b === N ? (y.preventDefault(), n && Nr(_, { select: !0 })) : y.shiftKey && b === _ && (y.preventDefault(), n && Nr(N, { select: !0 })) : b === C && y.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ R.jsx(De.div, { tabIndex: -1, ...l, ref: m, onKeyDown: E });
});
Ky.displayName = u4;
function c4(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Nr(o, { select: t }), document.activeElement !== n) return;
}
function f4(e) {
  const t = TP(e), n = T_(t, e), o = T_(t.reverse(), e);
  return [n, o];
}
function TP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function T_(e, t) {
  for (const n of e)
    if (!d4(n, { upTo: t })) return n;
}
function d4(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function h4(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && h4(e) && t && e.select();
  }
}
var A_ = p4();
function p4() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = I_(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = I_(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function I_(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function g4(e) {
  return e.filter((t) => t.tagName !== "A");
}
var yt = globalThis != null && globalThis.document ? k.useLayoutEffect : () => {
}, m4 = Cy[" useId ".trim().toString()] || (() => {
}), v4 = 0;
function ao(e) {
  const [t, n] = k.useState(m4());
  return yt(() => {
    n((o) => o ?? String(v4++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const y4 = ["top", "right", "bottom", "left"], Ir = Math.min, jt = Math.max, hu = Math.round, ql = Math.floor, An = (e) => ({
  x: e,
  y: e
}), w4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, x4 = {
  start: "end",
  end: "start"
};
function py(e, t, n) {
  return jt(e, Ir(t, n));
}
function Qn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zn(e) {
  return e.split("-")[0];
}
function Si(e) {
  return e.split("-")[1];
}
function Yy(e) {
  return e === "x" ? "y" : "x";
}
function Xy(e) {
  return e === "y" ? "height" : "width";
}
const _4 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Pn(e) {
  return _4.has(Zn(e)) ? "y" : "x";
}
function Qy(e) {
  return Yy(Pn(e));
}
function b4(e, t, n) {
  n === void 0 && (n = !1);
  const o = Si(e), i = Qy(e), a = Xy(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = pu(l)), [l, pu(l)];
}
function S4(e) {
  const t = pu(e);
  return [gy(e), t, gy(t)];
}
function gy(e) {
  return e.replace(/start|end/g, (t) => x4[t]);
}
const M_ = ["left", "right"], O_ = ["right", "left"], E4 = ["top", "bottom"], C4 = ["bottom", "top"];
function k4(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? O_ : M_ : t ? M_ : O_;
    case "left":
    case "right":
      return t ? E4 : C4;
    default:
      return [];
  }
}
function N4(e, t, n, o) {
  const i = Si(e);
  let a = k4(Zn(e), n === "start", o);
  return i && (a = a.map((l) => l + "-" + i), t && (a = a.concat(a.map(gy)))), a;
}
function pu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => w4[t]);
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
function AP(e) {
  return typeof e != "number" ? R4(e) : {
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
function L_(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const a = Pn(t), l = Qy(t), u = Xy(l), f = Zn(t), d = a === "y", h = o.x + o.width / 2 - i.width / 2, p = o.y + o.height / 2 - i.height / 2, m = o[u] / 2 - i[u] / 2;
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
  switch (Si(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const P4 = async (e, t, n) => {
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
  } = L_(d, o, f), m = o, v = {}, E = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: x,
      fn: b
    } = u[y], {
      x: C,
      y: _,
      data: N,
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
        ...N
      }
    }, P && E <= 50 && (E++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (d = P.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : P.rects), {
      x: h,
      y: p
    } = L_(d, m, f)), y = -1);
  }
  return {
    x: h,
    y: p,
    placement: m,
    strategy: i,
    middlewareData: v
  };
};
async function Ws(e, t) {
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
  } = Qn(t, e), E = AP(v), x = u[m ? p === "floating" ? "reference" : "floating" : p], b = gu(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(x))) == null || n ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = p === "floating" ? {
    x: o,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), N = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = gu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: _,
    strategy: f
  }) : C);
  return {
    top: (b.top - P.top + E.top) / N.y,
    bottom: (P.bottom - b.bottom + E.bottom) / N.y,
    left: (b.left - P.left + E.left) / N.x,
    right: (P.right - b.right + E.right) / N.x
  };
}
const T4 = (e) => ({
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
    const p = AP(h), m = {
      x: n,
      y: o
    }, v = Qy(i), E = Xy(v), y = await l.getDimensions(d), x = v === "y", b = x ? "top" : "left", C = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", N = a.reference[E] + a.reference[v] - m[v] - a.floating[E], P = m[v] - a.reference[v], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let A = T ? T[_] : 0;
    (!A || !await (l.isElement == null ? void 0 : l.isElement(T))) && (A = u.floating[_] || a.floating[E]);
    const O = N / 2 - P / 2, D = A / 2 - y[E] / 2 - 1, G = Ir(p[b], D), B = Ir(p[C], D), V = G, X = A - y[E] - B, L = A / 2 - y[E] / 2 + O, H = py(V, L, X), $ = !f.arrow && Si(i) != null && L !== H && a.reference[E] / 2 - (L < V ? G : B) - y[E] / 2 < 0, K = $ ? L < V ? L - V : L - X : 0;
    return {
      [v]: m[v] + K,
      data: {
        [v]: H,
        centerOffset: L - H - K,
        ...$ && {
          alignmentOffset: K
        }
      },
      reset: $
    };
  }
}), A4 = function(e) {
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
        ...x
      } = Qn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = Zn(i), C = Pn(u), _ = Zn(u) === u, N = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), P = m || (_ || !y ? [pu(u)] : S4(u)), T = E !== "none";
      !m && T && P.push(...N4(u, y, E, N));
      const A = [u, ...P], O = await Ws(t, x), D = [];
      let G = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && D.push(O[b]), p) {
        const L = b4(i, l, N);
        D.push(O[L[0]], O[L[1]]);
      }
      if (G = [...G, {
        placement: i,
        overflows: D
      }], !D.every((L) => L <= 0)) {
        var B, V;
        const L = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, H = A[L];
        if (H && (!(p === "alignment" ? C !== Pn(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        G.every((M) => Pn(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: G
            },
            reset: {
              placement: H
            }
          };
        let $ = (V = G.filter((K) => K.overflows[0] <= 0).sort((K, M) => K.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var X;
              const K = (X = G.filter((M) => {
                if (T) {
                  const q = Pn(M.placement);
                  return q === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((q) => q > 0).reduce((q, Q) => q + Q, 0)]).sort((M, q) => M[1] - q[1])[0]) == null ? void 0 : X[0];
              K && ($ = K);
              break;
            }
            case "initialPlacement":
              $ = u;
              break;
          }
        if (i !== $)
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
function j_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function D_(e) {
  return y4.some((t) => e[t] >= 0);
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
      } = Qn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await Ws(t, {
            ...i,
            elementContext: "reference"
          }), l = j_(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: D_(l)
            }
          };
        }
        case "escaped": {
          const a = await Ws(t, {
            ...i,
            altBoundary: !0
          }), l = j_(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: D_(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, IP = /* @__PURE__ */ new Set(["left", "top"]);
async function M4(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Zn(n), u = Si(n), f = Pn(n) === "y", d = IP.has(l) ? -1 : 1, h = a && f ? -1 : 1, p = Qn(t, e);
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
const O4 = function(e) {
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
      } = t, f = await M4(t, e);
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
}, L4 = function(e) {
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
      } = Qn(e, t), d = {
        x: n,
        y: o
      }, h = await Ws(t, f), p = Pn(Zn(i)), m = Yy(p);
      let v = d[m], E = d[p];
      if (a) {
        const x = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", C = v + h[x], _ = v - h[b];
        v = py(C, v, _);
      }
      if (l) {
        const x = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", C = E + h[x], _ = E - h[b];
        E = py(C, E, _);
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
}, j4 = function(e) {
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
      }, p = Pn(i), m = Yy(p);
      let v = h[m], E = h[p];
      const y = Qn(u, t), x = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const _ = m === "y" ? "height" : "width", N = a.reference[m] - a.floating[_] + x.mainAxis, P = a.reference[m] + a.reference[_] - x.mainAxis;
        v < N ? v = N : v > P && (v = P);
      }
      if (d) {
        var b, C;
        const _ = m === "y" ? "width" : "height", N = IP.has(Zn(i)), P = a.reference[p] - a.floating[_] + (N && ((b = l.offset) == null ? void 0 : b[p]) || 0) + (N ? 0 : x.crossAxis), T = a.reference[p] + a.reference[_] + (N ? 0 : ((C = l.offset) == null ? void 0 : C[p]) || 0) - (N ? x.crossAxis : 0);
        E < P ? E = P : E > T && (E = T);
      }
      return {
        [m]: v,
        [p]: E
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
      } = Qn(e, t), h = await Ws(t, d), p = Zn(i), m = Si(i), v = Pn(i) === "y", {
        width: E,
        height: y
      } = a.floating;
      let x, b;
      p === "top" || p === "bottom" ? (x = p, b = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (b = p, x = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = E - h.left - h.right, N = Ir(y - h[x], C), P = Ir(E - h[b], _), T = !t.middlewareData.shift;
      let A = N, O = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = _), (o = t.middlewareData.shift) != null && o.enabled.y && (A = C), T && !m) {
        const G = jt(h.left, 0), B = jt(h.right, 0), V = jt(h.top, 0), X = jt(h.bottom, 0);
        v ? O = E - 2 * (G !== 0 || B !== 0 ? G + B : jt(h.left, h.right)) : A = y - 2 * (V !== 0 || X !== 0 ? V + X : jt(h.top, h.bottom));
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
function Ou() {
  return typeof window < "u";
}
function Ei(e) {
  return MP(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ln(e) {
  var t;
  return (t = (MP(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function MP(e) {
  return Ou() ? e instanceof Node || e instanceof qt(e).Node : !1;
}
function pn(e) {
  return Ou() ? e instanceof Element || e instanceof qt(e).Element : !1;
}
function Mn(e) {
  return Ou() ? e instanceof HTMLElement || e instanceof qt(e).HTMLElement : !1;
}
function q_(e) {
  return !Ou() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qt(e).ShadowRoot;
}
const q4 = /* @__PURE__ */ new Set(["inline", "contents"]);
function oa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = gn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !q4.has(i);
}
const z4 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function F4(e) {
  return z4.has(Ei(e));
}
const $4 = [":popover-open", ":modal"];
function Lu(e) {
  return $4.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const B4 = ["transform", "translate", "scale", "rotate", "perspective"], V4 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], H4 = ["paint", "layout", "strict", "content"];
function Zy(e) {
  const t = Jy(), n = pn(e) ? gn(e) : e;
  return B4.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || V4.some((o) => (n.willChange || "").includes(o)) || H4.some((o) => (n.contain || "").includes(o));
}
function W4(e) {
  let t = Mr(e);
  for (; Mn(t) && !vi(t); ) {
    if (Zy(t))
      return t;
    if (Lu(t))
      return null;
    t = Mr(t);
  }
  return null;
}
function Jy() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const U4 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function vi(e) {
  return U4.has(Ei(e));
}
function gn(e) {
  return qt(e).getComputedStyle(e);
}
function ju(e) {
  return pn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mr(e) {
  if (Ei(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    q_(e) && e.host || // Fallback.
    Ln(e)
  );
  return q_(t) ? t.host : t;
}
function OP(e) {
  const t = Mr(e);
  return vi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mn(t) && oa(t) ? t : OP(t);
}
function Us(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = OP(e), a = i === ((o = e.ownerDocument) == null ? void 0 : o.body), l = qt(i);
  if (a) {
    const u = my(l);
    return t.concat(l, l.visualViewport || [], oa(i) ? i : [], u && n ? Us(u) : []);
  }
  return t.concat(i, Us(i, [], n));
}
function my(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function LP(e) {
  const t = gn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = Mn(e), a = i ? e.offsetWidth : n, l = i ? e.offsetHeight : o, u = hu(n) !== a || hu(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function e0(e) {
  return pn(e) ? e : e.contextElement;
}
function ai(e) {
  const t = e0(e);
  if (!Mn(t))
    return An(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: a
  } = LP(t);
  let l = (a ? hu(n.width) : n.width) / o, u = (a ? hu(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const G4 = /* @__PURE__ */ An(0);
function jP(e) {
  const t = qt(e);
  return !Jy() || !t.visualViewport ? G4 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function K4(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== qt(e) ? !1 : t;
}
function ho(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = e0(e);
  let l = An(1);
  t && (o ? pn(o) && (l = ai(o)) : l = ai(e));
  const u = K4(a, n, o) ? jP(a) : An(0);
  let f = (i.left + u.x) / l.x, d = (i.top + u.y) / l.y, h = i.width / l.x, p = i.height / l.y;
  if (a) {
    const m = qt(a), v = o && pn(o) ? qt(o) : o;
    let E = m, y = my(E);
    for (; y && o && v !== E; ) {
      const x = ai(y), b = y.getBoundingClientRect(), C = gn(y), _ = b.left + (y.clientLeft + parseFloat(C.paddingLeft)) * x.x, N = b.top + (y.clientTop + parseFloat(C.paddingTop)) * x.y;
      f *= x.x, d *= x.y, h *= x.x, p *= x.y, f += _, d += N, E = qt(y), y = my(E);
    }
  }
  return gu({
    width: h,
    height: p,
    x: f,
    y: d
  });
}
function Du(e, t) {
  const n = ju(e).scrollLeft;
  return t ? t.left + n : ho(Ln(e)).left + n;
}
function DP(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Du(e, n), i = n.top + t.scrollTop;
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
  const a = i === "fixed", l = Ln(o), u = t ? Lu(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = An(1);
  const h = An(0), p = Mn(o);
  if ((p || !p && !a) && ((Ei(o) !== "body" || oa(l)) && (f = ju(o)), Mn(o))) {
    const v = ho(o);
    d = ai(o), h.x = v.x + o.clientLeft, h.y = v.y + o.clientTop;
  }
  const m = l && !p && !a ? DP(l, f) : An(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: n.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function X4(e) {
  return Array.from(e.getClientRects());
}
function Q4(e) {
  const t = Ln(e), n = ju(e), o = e.ownerDocument.body, i = jt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = jt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Du(e);
  const u = -n.scrollTop;
  return gn(o).direction === "rtl" && (l += jt(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
const z_ = 25;
function Z4(e, t) {
  const n = qt(e), o = Ln(e), i = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (i) {
    a = i.width, l = i.height;
    const h = Jy();
    (!h || h && t === "fixed") && (u = i.offsetLeft, f = i.offsetTop);
  }
  const d = Du(o);
  if (d <= 0) {
    const h = o.ownerDocument, p = h.body, m = getComputedStyle(p), v = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, E = Math.abs(o.clientWidth - p.clientWidth - v);
    E <= z_ && (a -= E);
  } else d <= z_ && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const J4 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function e$(e, t) {
  const n = ho(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, a = Mn(e) ? ai(e) : An(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = i * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function F_(e, t, n) {
  let o;
  if (t === "viewport")
    o = Z4(e, n);
  else if (t === "document")
    o = Q4(Ln(e));
  else if (pn(t))
    o = e$(t, n);
  else {
    const i = jP(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return gu(o);
}
function qP(e, t) {
  const n = Mr(e);
  return n === t || !pn(n) || vi(n) ? !1 : gn(n).position === "fixed" || qP(n, t);
}
function t$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Us(e, [], !1).filter((u) => pn(u) && Ei(u) !== "body"), i = null;
  const a = gn(e).position === "fixed";
  let l = a ? Mr(e) : e;
  for (; pn(l) && !vi(l); ) {
    const u = gn(l), f = Zy(l);
    !f && u.position === "fixed" && (i = null), (a ? !f && !i : !f && u.position === "static" && !!i && J4.has(i.position) || oa(l) && !f && qP(e, l)) ? o = o.filter((h) => h !== l) : i = u, l = Mr(l);
  }
  return t.set(e, o), o;
}
function n$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? Lu(t) ? [] : t$(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((d, h) => {
    const p = F_(t, h, i);
    return d.top = jt(p.top, d.top), d.right = Ir(p.right, d.right), d.bottom = Ir(p.bottom, d.bottom), d.left = jt(p.left, d.left), d;
  }, F_(t, u, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function r$(e) {
  const {
    width: t,
    height: n
  } = LP(e);
  return {
    width: t,
    height: n
  };
}
function o$(e, t, n) {
  const o = Mn(t), i = Ln(t), a = n === "fixed", l = ho(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = An(0);
  function d() {
    f.x = Du(i);
  }
  if (o || !o && !a)
    if ((Ei(t) !== "body" || oa(i)) && (u = ju(t)), o) {
      const v = ho(t, !0, a, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else i && d();
  a && !o && i && d();
  const h = i && !o && !a ? DP(i, u) : An(0), p = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Rd(e) {
  return gn(e).position === "static";
}
function $_(e, t) {
  if (!Mn(e) || gn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ln(e) === n && (n = n.ownerDocument.body), n;
}
function zP(e, t) {
  const n = qt(e);
  if (Lu(e))
    return n;
  if (!Mn(e)) {
    let i = Mr(e);
    for (; i && !vi(i); ) {
      if (pn(i) && !Rd(i))
        return i;
      i = Mr(i);
    }
    return n;
  }
  let o = $_(e, t);
  for (; o && F4(o) && Rd(o); )
    o = $_(o, t);
  return o && vi(o) && Rd(o) && !Zy(o) ? n : o || W4(e) || n;
}
const i$ = async function(e) {
  const t = this.getOffsetParent || zP, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: o$(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function s$(e) {
  return gn(e).direction === "rtl";
}
const a$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Y4,
  getDocumentElement: Ln,
  getClippingRect: n$,
  getOffsetParent: zP,
  getElementRects: i$,
  getClientRects: X4,
  getDimensions: r$,
  getScale: ai,
  isElement: pn,
  isRTL: s$
};
function FP(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function l$(e, t) {
  let n = null, o;
  const i = Ln(e);
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
    const E = ql(p), y = ql(i.clientWidth - (h + m)), x = ql(i.clientHeight - (p + v)), b = ql(h), _ = {
      rootMargin: -E + "px " + -y + "px " + -x + "px " + -b + "px",
      threshold: jt(0, Ir(1, f)) || 1
    };
    let N = !0;
    function P(T) {
      const A = T[0].intersectionRatio;
      if (A !== f) {
        if (!N)
          return l();
        A ? l(!1, A) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !FP(d, e.getBoundingClientRect()) && l(), N = !1;
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
function u$(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = e0(e), h = i || a ? [...d ? Us(d) : [], ...Us(t)] : [];
  h.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const p = d && u ? l$(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var _;
      (_ = v) == null || _.observe(t);
    })), n();
  }), d && !f && v.observe(d), v.observe(t));
  let E, y = f ? ho(e) : null;
  f && x();
  function x() {
    const b = ho(e);
    y && !FP(y, b) && n(), y = b, E = requestAnimationFrame(x);
  }
  return n(), () => {
    var b;
    h.forEach((C) => {
      i && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (b = v) == null || b.disconnect(), v = null, f && cancelAnimationFrame(E);
  };
}
const c$ = O4, f$ = L4, d$ = A4, h$ = D4, p$ = I4, B_ = T4, g$ = j4, m$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: a$,
    ...n
  }, a = {
    ...i.platform,
    _c: o
  };
  return P4(e, t, {
    ...i,
    platform: a
  });
};
var v$ = typeof document < "u", y$ = function() {
}, Yl = v$ ? k.useLayoutEffect : y$;
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
function $P(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function V_(e, t) {
  const n = $P(e);
  return Math.round(t * n) / n;
}
function Pd(e) {
  const t = k.useRef(e);
  return Yl(() => {
    t.current = e;
  }), t;
}
function w$(e) {
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
  const [E, y] = k.useState(null), [x, b] = k.useState(null), C = k.useCallback((M) => {
    M !== T.current && (T.current = M, y(M));
  }, []), _ = k.useCallback((M) => {
    M !== A.current && (A.current = M, b(M));
  }, []), N = a || E, P = l || x, T = k.useRef(null), A = k.useRef(null), O = k.useRef(h), D = f != null, G = Pd(f), B = Pd(i), V = Pd(d), X = k.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: m
    };
    B.current && (M.platform = B.current), m$(T.current, A.current, M).then((q) => {
      const Q = {
        ...q,
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
  }, [m, t, n, B, V]);
  Yl(() => {
    d === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const L = k.useRef(!1);
  Yl(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Yl(() => {
    if (N && (T.current = N), P && (A.current = P), N && P) {
      if (G.current)
        return G.current(N, P, X);
      X();
    }
  }, [N, P, X, G, D]);
  const H = k.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: C,
    setFloating: _
  }), [C, _]), $ = k.useMemo(() => ({
    reference: N,
    floating: P
  }), [N, P]), K = k.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return M;
    const q = V_($.floating, h.x), Q = V_($.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + q + "px, " + Q + "px)",
      ...$P($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: q,
      top: Q
    };
  }, [n, u, $.floating, h.x, h.y]);
  return k.useMemo(() => ({
    ...h,
    update: X,
    refs: H,
    elements: $,
    floatingStyles: K
  }), [h, X, H, $, K]);
}
const x$ = (e) => {
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
      return o && t(o) ? o.current != null ? B_({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? B_({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, _$ = (e, t) => ({
  ...c$(e),
  options: [e, t]
}), b$ = (e, t) => ({
  ...f$(e),
  options: [e, t]
}), S$ = (e, t) => ({
  ...g$(e),
  options: [e, t]
}), E$ = (e, t) => ({
  ...d$(e),
  options: [e, t]
}), C$ = (e, t) => ({
  ...h$(e),
  options: [e, t]
}), k$ = (e, t) => ({
  ...p$(e),
  options: [e, t]
}), N$ = (e, t) => ({
  ...x$(e),
  options: [e, t]
});
var R$ = "Arrow", BP = k.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ R.jsx(
    De.svg,
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
BP.displayName = R$;
var P$ = BP;
function VP(e) {
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
var t0 = "Popper", [HP, qu] = bi(t0), [T$, WP] = HP(t0), UP = (e) => {
  const { __scopePopper: t, children: n } = e, [o, i] = k.useState(null);
  return /* @__PURE__ */ R.jsx(T$, { scope: t, anchor: o, onAnchorChange: i, children: n });
};
UP.displayName = t0;
var GP = "PopperAnchor", KP = k.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...i } = e, a = WP(GP, n), l = k.useRef(null), u = Be(t, l), f = k.useRef(null);
    return k.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ R.jsx(De.div, { ...i, ref: u });
  }
);
KP.displayName = GP;
var n0 = "PopperContent", [A$, I$] = HP(n0), YP = k.forwardRef(
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
      onPlaced: E,
      ...y
    } = e, x = WP(n0, n), [b, C] = k.useState(null), _ = Be(t, (pe) => C(pe)), [N, P] = k.useState(null), T = VP(N), A = (T == null ? void 0 : T.width) ?? 0, O = (T == null ? void 0 : T.height) ?? 0, D = o + (a !== "center" ? "-" + a : ""), G = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, B = Array.isArray(d) ? d : [d], V = B.length > 0, X = {
      padding: G,
      boundary: B.filter(O$),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: H, placement: $, isPositioned: K, middlewareData: M } = w$({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...pe) => u$(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        _$({ mainAxis: i + O, alignmentAxis: l }),
        f && b$({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? S$() : void 0,
          ...X
        }),
        f && E$({ ...X }),
        C$({
          ...X,
          apply: ({ elements: pe, rects: be, availableWidth: me, availableHeight: Re }) => {
            const { width: Ee, height: Je } = be.reference, Ue = pe.floating.style;
            Ue.setProperty("--radix-popper-available-width", `${me}px`), Ue.setProperty("--radix-popper-available-height", `${Re}px`), Ue.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ue.setProperty("--radix-popper-anchor-height", `${Je}px`);
          }
        }),
        N && N$({ element: N, padding: u }),
        L$({ arrowWidth: A, arrowHeight: O }),
        m && k$({ strategy: "referenceHidden", ...X })
      ]
    }), [q, Q] = ZP($), j = fo(E);
    yt(() => {
      K && (j == null || j());
    }, [K, j]);
    const W = (Y = M.arrow) == null ? void 0 : Y.x, ie = (te = M.arrow) == null ? void 0 : te.y, F = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = k.useState();
    return yt(() => {
      b && ee(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: K ? H.transform : "translate(0, -200%)",
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
          A$,
          {
            scope: n,
            placedSide: q,
            onArrowChange: P,
            arrowX: W,
            arrowY: ie,
            shouldHideArrow: F,
            children: /* @__PURE__ */ R.jsx(
              De.div,
              {
                "data-side": q,
                "data-align": Q,
                ...y,
                ref: _,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: K ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
YP.displayName = n0;
var XP = "PopperArrow", M$ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, QP = k.forwardRef(function(t, n) {
  const { __scopePopper: o, ...i } = t, a = I$(XP, o), l = M$[a.placedSide];
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
          P$,
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
QP.displayName = XP;
function O$(e) {
  return e !== null;
}
var L$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, b, C;
    const { placement: n, rects: o, middlewareData: i } = t, l = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = ZP(n), p = { start: "0%", center: "50%", end: "100%" }[h], m = (((b = i.arrow) == null ? void 0 : b.x) ?? 0) + u / 2, v = (((C = i.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = l ? p : `${m}px`, y = `${-f}px`) : d === "top" ? (E = l ? p : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = l ? p : `${v}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = l ? p : `${v}px`), { data: { x: E, y } };
  }
});
function ZP(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var JP = UP, eT = KP, tT = YP, nT = QP, j$ = "Portal", zu = k.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [i, a] = k.useState(!1);
  yt(() => a(!0), []);
  const l = n || i && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? mq.createPortal(/* @__PURE__ */ R.jsx(De.div, { ...o, ref: t }), l) : null;
});
zu.displayName = j$;
// @__NO_SIDE_EFFECTS__
function D$(e) {
  const t = /* @__PURE__ */ q$(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(F$);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function q$(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = B$(i), u = $$(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? wi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var z$ = Symbol("radix.slottable");
function F$(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === z$;
}
function $$(e, t) {
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
function B$(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var V$ = Cy[" useInsertionEffect ".trim().toString()] || yt;
function Gs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [i, a, l] = H$({
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
        const m = W$(h) ? h(e) : h;
        m !== e && ((p = l.current) == null || p.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function H$({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = k.useState(e), i = k.useRef(n), a = k.useRef(t);
  return V$(() => {
    a.current = t;
  }, [t]), k.useEffect(() => {
    var l;
    i.current !== n && ((l = a.current) == null || l.call(a, n), i.current = n);
  }, [n, i]), [n, o, a];
}
function W$(e) {
  return typeof e == "function";
}
function rT(e) {
  const t = k.useRef({ value: e, previous: e });
  return k.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var oT = Object.freeze({
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
}), U$ = "VisuallyHidden", iT = k.forwardRef(
  (e, t) => /* @__PURE__ */ R.jsx(
    De.span,
    {
      ...e,
      ref: t,
      style: { ...oT, ...e.style }
    }
  )
);
iT.displayName = U$;
var G$ = iT, K$ = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jo = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap(), Fl = {}, Td = 0, sT = function(e) {
  return e && (e.host || sT(e.parentNode));
}, Y$ = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = sT(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, X$ = function(e, t, n, o) {
  var i = Y$(t, Array.isArray(e) ? e : [e]);
  Fl[n] || (Fl[n] = /* @__PURE__ */ new WeakMap());
  var a = Fl[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(i), d = function(p) {
    !p || u.has(p) || (u.add(p), d(p.parentNode));
  };
  i.forEach(d);
  var h = function(p) {
    !p || f.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (u.has(m))
        h(m);
      else
        try {
          var v = m.getAttribute(o), E = v !== null && v !== "false", y = (Jo.get(m) || 0) + 1, x = (a.get(m) || 0) + 1;
          Jo.set(m, y), a.set(m, x), l.push(m), y === 1 && E && zl.set(m, !0), x === 1 && m.setAttribute(n, "true"), E || m.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return h(t), u.clear(), Td++, function() {
    l.forEach(function(p) {
      var m = Jo.get(p) - 1, v = a.get(p) - 1;
      Jo.set(p, m), a.set(p, v), m || (zl.has(p) || p.removeAttribute(o), zl.delete(p)), v || p.removeAttribute(n);
    }), Td--, Td || (Jo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap(), Fl = {});
  };
}, aT = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = K$(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))), X$(o, i, n, "aria-hidden")) : function() {
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
function lT(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
  return n;
}
function Q$(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, i = t.length, a; o < i; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Xl = "right-scroll-bar-position", Ql = "width-before-scroll-bar", Z$ = "with-scroll-bars-hidden", J$ = "--removed-body-scroll-bar-size";
function Ad(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function e5(e, t) {
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
var t5 = typeof window < "u" ? k.useLayoutEffect : k.useEffect, H_ = /* @__PURE__ */ new WeakMap();
function n5(e, t) {
  var n = e5(null, function(o) {
    return e.forEach(function(i) {
      return Ad(i, o);
    });
  });
  return t5(function() {
    var o = H_.get(n);
    if (o) {
      var i = new Set(o), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || Ad(u, null);
      }), a.forEach(function(u) {
        i.has(u) || Ad(u, l);
      });
    }
    H_.set(n, e);
  }, [e]), n;
}
function r5(e) {
  return e;
}
function o5(e, t) {
  t === void 0 && (t = r5);
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
function i5(e) {
  e === void 0 && (e = {});
  var t = o5(null);
  return t.options = Rn({ async: !0, ssr: !1 }, e), t;
}
var uT = function(e) {
  var t = e.sideCar, n = lT(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return k.createElement(o, Rn({}, n));
};
uT.isSideCarExport = !0;
function s5(e, t) {
  return e.useMedium(t), uT;
}
var cT = i5(), Id = function() {
}, Fu = k.forwardRef(function(e, t) {
  var n = k.useRef(null), o = k.useState({
    onScrollCapture: Id,
    onWheelCapture: Id,
    onTouchMoveCapture: Id
  }), i = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, m = e.sideCar, v = e.noRelative, E = e.noIsolation, y = e.inert, x = e.allowPinchZoom, b = e.as, C = b === void 0 ? "div" : b, _ = e.gapMode, N = lT(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, T = n5([n, t]), A = Rn(Rn({}, N), i);
  return k.createElement(
    k.Fragment,
    null,
    h && k.createElement(P, { sideCar: cT, removeScrollBar: d, shards: p, noRelative: v, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!x, lockRef: n, gapMode: _ }),
    l ? k.cloneElement(k.Children.only(u), Rn(Rn({}, A), { ref: T })) : k.createElement(C, Rn({}, A, { className: f, ref: T }), u)
  );
});
Fu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Fu.classNames = {
  fullWidth: Ql,
  zeroRight: Xl
};
var a5 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function l5() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = a5();
  return t && e.setAttribute("nonce", t), e;
}
function u5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function c5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var f5 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = l5()) && (u5(t, n), c5(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, d5 = function() {
  var e = f5();
  return function(t, n) {
    k.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, fT = function() {
  var e = d5(), t = function(n) {
    var o = n.styles, i = n.dynamic;
    return e(o, i), null;
  };
  return t;
}, h5 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Md = function(e) {
  return parseInt(e || "", 10) || 0;
}, p5 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Md(n), Md(o), Md(i)];
}, g5 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return h5;
  var t = p5(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, m5 = fT(), li = "data-scroll-locked", v5 = function(e, t, n, o) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Z$, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(u, "px ").concat(o, `;
  }
  body[`).concat(li, `] {
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
  
  .`).concat(Xl, ` {
    right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Ql, ` {
    margin-right: `).concat(u, "px ").concat(o, `;
  }
  
  .`).concat(Xl, " .").concat(Xl, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ql, " .").concat(Ql, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(li, `] {
    `).concat(J$, ": ").concat(u, `px;
  }
`);
}, W_ = function() {
  var e = parseInt(document.body.getAttribute(li) || "0", 10);
  return isFinite(e) ? e : 0;
}, y5 = function() {
  k.useEffect(function() {
    return document.body.setAttribute(li, (W_() + 1).toString()), function() {
      var e = W_() - 1;
      e <= 0 ? document.body.removeAttribute(li) : document.body.setAttribute(li, e.toString());
    };
  }, []);
}, w5 = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, i = o === void 0 ? "margin" : o;
  y5();
  var a = k.useMemo(function() {
    return g5(i);
  }, [i]);
  return k.createElement(m5, { styles: v5(a, !t, i, n ? "" : "!important") });
}, vy = !1;
if (typeof window < "u")
  try {
    var $l = Object.defineProperty({}, "passive", {
      get: function() {
        return vy = !0, !0;
      }
    });
    window.addEventListener("test", $l, $l), window.removeEventListener("test", $l, $l);
  } catch {
    vy = !1;
  }
var ei = vy ? { passive: !1 } : !1, x5 = function(e) {
  return e.tagName === "TEXTAREA";
}, dT = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !x5(e) && n[t] === "visible")
  );
}, _5 = function(e) {
  return dT(e, "overflowY");
}, b5 = function(e) {
  return dT(e, "overflowX");
}, U_ = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var i = hT(e, o);
    if (i) {
      var a = pT(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, S5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, E5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, hT = function(e, t) {
  return e === "v" ? _5(t) : b5(t);
}, pT = function(e, t) {
  return e === "v" ? S5(t) : E5(t);
}, C5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, k5 = function(e, t, n, o, i) {
  var a = C5(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), d = !1, h = l > 0, p = 0, m = 0;
  do {
    if (!u)
      break;
    var v = pT(e, u), E = v[0], y = v[1], x = v[2], b = y - x - a * E;
    (E || b) && hT(e, u) && (p += b, m += E);
    var C = u.parentNode;
    u = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !f && u !== document.body || // self content
    f && (t.contains(u) || t === u)
  );
  return (h && Math.abs(p) < 1 || !h && Math.abs(m) < 1) && (d = !0), d;
}, Bl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, G_ = function(e) {
  return [e.deltaX, e.deltaY];
}, K_ = function(e) {
  return e && "current" in e ? e.current : e;
}, N5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, R5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, P5 = 0, ti = [];
function T5(e) {
  var t = k.useRef([]), n = k.useRef([0, 0]), o = k.useRef(), i = k.useState(P5++)[0], a = k.useState(fT)[0], l = k.useRef(e);
  k.useEffect(function() {
    l.current = e;
  }, [e]), k.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = Q$([e.lockRef.current], (e.shards || []).map(K_), !0).filter(Boolean);
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
    var b = Bl(y), C = n.current, _ = "deltaX" in y ? y.deltaX : C[0] - b[0], N = "deltaY" in y ? y.deltaY : C[1] - b[1], P, T = y.target, A = Math.abs(_) > Math.abs(N) ? "h" : "v";
    if ("touches" in y && A === "h" && T.type === "range")
      return !1;
    var O = U_(A, T);
    if (!O)
      return !0;
    if (O ? P = A : (P = A === "v" ? "h" : "v", O = U_(A, T)), !O)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || N) && (o.current = P), !P)
      return !0;
    var D = o.current || P;
    return k5(D, x, y, D === "h" ? _ : N);
  }, []), f = k.useCallback(function(y) {
    var x = y;
    if (!(!ti.length || ti[ti.length - 1] !== a)) {
      var b = "deltaY" in x ? G_(x) : Bl(x), C = t.current.filter(function(P) {
        return P.name === x.type && (P.target === x.target || x.target === P.shadowParent) && N5(P.delta, b);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var _ = (l.current.shards || []).map(K_).filter(Boolean).filter(function(P) {
          return P.contains(x.target);
        }), N = _.length > 0 ? u(x, _[0]) : !l.current.noIsolation;
        N && x.cancelable && x.preventDefault();
      }
    }
  }, []), d = k.useCallback(function(y, x, b, C) {
    var _ = { name: y, delta: x, target: b, should: C, shadowParent: A5(b) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== _;
      });
    }, 1);
  }, []), h = k.useCallback(function(y) {
    n.current = Bl(y), o.current = void 0;
  }, []), p = k.useCallback(function(y) {
    d(y.type, G_(y), y.target, u(y, e.lockRef.current));
  }, []), m = k.useCallback(function(y) {
    d(y.type, Bl(y), y.target, u(y, e.lockRef.current));
  }, []);
  k.useEffect(function() {
    return ti.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", f, ei), document.addEventListener("touchmove", f, ei), document.addEventListener("touchstart", h, ei), function() {
      ti = ti.filter(function(y) {
        return y !== a;
      }), document.removeEventListener("wheel", f, ei), document.removeEventListener("touchmove", f, ei), document.removeEventListener("touchstart", h, ei);
    };
  }, []);
  var v = e.removeScrollBar, E = e.inert;
  return k.createElement(
    k.Fragment,
    null,
    E ? k.createElement(a, { styles: R5(i) }) : null,
    v ? k.createElement(w5, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function A5(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const I5 = s5(cT, T5);
var r0 = k.forwardRef(function(e, t) {
  return k.createElement(Fu, Rn({}, e, { ref: t, sideCar: I5 }));
});
r0.classNames = Fu.classNames;
var M5 = [" ", "Enter", "ArrowUp", "ArrowDown"], O5 = [" ", "Enter"], po = "Select", [$u, Bu, L5] = HF(po), [Ci] = bi(po, [
  L5,
  qu
]), Vu = qu(), [j5, Or] = Ci(po), [D5, q5] = Ci(po), gT = (e) => {
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
  } = e, y = Vu(t), [x, b] = k.useState(null), [C, _] = k.useState(null), [N, P] = k.useState(!1), T = UF(d), [A, O] = Gs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: po
  }), [D, G] = Gs({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: po
  }), B = k.useRef(null), V = x ? E || !!x.closest("form") : !0, [X, L] = k.useState(/* @__PURE__ */ new Set()), H = Array.from(X).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ R.jsx(JP, { ...y, children: /* @__PURE__ */ R.jsxs(
    j5,
    {
      required: v,
      scope: t,
      trigger: x,
      onTriggerChange: b,
      valueNode: C,
      onValueNodeChange: _,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: P,
      contentId: ao(),
      value: D,
      onValueChange: G,
      open: A,
      onOpenChange: O,
      dir: T,
      triggerPointerDownPosRef: B,
      disabled: m,
      children: [
        /* @__PURE__ */ R.jsx($u.Provider, { scope: t, children: /* @__PURE__ */ R.jsx(
          D5,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: k.useCallback(($) => {
              L((K) => new Set(K).add($));
            }, []),
            onNativeOptionRemove: k.useCallback(($) => {
              L((K) => {
                const M = new Set(K);
                return M.delete($), M;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ R.jsxs(
          DT,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: h,
            autoComplete: p,
            value: D,
            onChange: ($) => G($.target.value),
            disabled: m,
            form: E,
            children: [
              D === void 0 ? /* @__PURE__ */ R.jsx("option", { value: "" }) : null,
              Array.from(X)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
gT.displayName = po;
var mT = "SelectTrigger", vT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...i } = e, a = Vu(n), l = Or(mT, n), u = l.disabled || o, f = Be(t, l.onTriggerChange), d = Bu(n), h = k.useRef("touch"), [p, m, v] = zT((y) => {
      const x = d().filter((_) => !_.disabled), b = x.find((_) => _.value === l.value), C = FT(x, y, b);
      C !== void 0 && l.onValueChange(C.value);
    }), E = (y) => {
      u || (l.onOpenChange(!0), v()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ R.jsx(eT, { asChild: !0, ...a, children: /* @__PURE__ */ R.jsx(
      De.button,
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
        "data-placeholder": qT(l.value) ? "" : void 0,
        ...i,
        ref: f,
        onClick: Le(i.onClick, (y) => {
          y.currentTarget.focus(), h.current !== "mouse" && E(y);
        }),
        onPointerDown: Le(i.onPointerDown, (y) => {
          h.current = y.pointerType;
          const x = y.target;
          x.hasPointerCapture(y.pointerId) && x.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (E(y), y.preventDefault());
        }),
        onKeyDown: Le(i.onKeyDown, (y) => {
          const x = p.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(x && y.key === " ") && M5.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
vT.displayName = mT;
var yT = "SelectValue", wT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, children: a, placeholder: l = "", ...u } = e, f = Or(yT, n), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, p = Be(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ R.jsx(
      De.span,
      {
        ...u,
        ref: p,
        style: { pointerEvents: "none" },
        children: qT(f.value) ? /* @__PURE__ */ R.jsx(R.Fragment, { children: l }) : a
      }
    );
  }
);
wT.displayName = yT;
var z5 = "SelectIcon", xT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...i } = e;
    return /* @__PURE__ */ R.jsx(De.span, { "aria-hidden": !0, ...i, ref: t, children: o || "▼" });
  }
);
xT.displayName = z5;
var F5 = "SelectPortal", _T = (e) => /* @__PURE__ */ R.jsx(zu, { asChild: !0, ...e });
_T.displayName = F5;
var go = "SelectContent", bT = k.forwardRef(
  (e, t) => {
    const n = Or(go, e.__scopeSelect), [o, i] = k.useState();
    if (yt(() => {
      i(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? na.createPortal(
        /* @__PURE__ */ R.jsx(ST, { scope: e.__scopeSelect, children: /* @__PURE__ */ R.jsx($u.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ R.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ R.jsx(ET, { ...e, ref: t });
  }
);
bT.displayName = go;
var un = 10, [ST, Lr] = Ci(go), $5 = "SelectContentImpl", B5 = /* @__PURE__ */ D$("SelectContent.RemoveScroll"), ET = k.forwardRef(
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
      avoidCollisions: x,
      //
      ...b
    } = e, C = Or(go, n), [_, N] = k.useState(null), [P, T] = k.useState(null), A = Be(t, (Y) => N(Y)), [O, D] = k.useState(null), [G, B] = k.useState(
      null
    ), V = Bu(n), [X, L] = k.useState(!1), H = k.useRef(!1);
    k.useEffect(() => {
      if (_) return aT(_);
    }, [_]), PP();
    const $ = k.useCallback(
      (Y) => {
        const [te, ...se] = V().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of Y)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && P && (P.scrollTop = 0), de === ae && P && (P.scrollTop = P.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [V, P]
    ), K = k.useCallback(
      () => $([O, _]),
      [$, O, _]
    );
    k.useEffect(() => {
      X && K();
    }, [X, K]);
    const { onOpenChange: M, triggerPointerDownPosRef: q } = C;
    k.useEffect(() => {
      if (_) {
        let Y = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          Y = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = q.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = q.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          Y.x <= 10 && Y.y <= 10 ? ae.preventDefault() : _.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), q.current = null;
        };
        return q.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [_, M, q]), k.useEffect(() => {
      const Y = () => M(!1);
      return window.addEventListener("blur", Y), window.addEventListener("resize", Y), () => {
        window.removeEventListener("blur", Y), window.removeEventListener("resize", Y);
      };
    }, [M]);
    const [Q, j] = zT((Y) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = FT(te, Y, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), W = k.useCallback(
      (Y, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (D(Y), ae && (H.current = !0));
      },
      [C.value]
    ), ie = k.useCallback(() => _ == null ? void 0 : _.focus(), [_]), F = k.useCallback(
      (Y, te, se) => {
        const ae = !H.current && !se;
        (C.value !== void 0 && C.value === te || ae) && B(Y);
      },
      [C.value]
    ), Z = o === "popper" ? yy : CT, ee = Z === yy ? {
      side: u,
      sideOffset: f,
      align: d,
      alignOffset: h,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: E,
      hideWhenDetached: y,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ R.jsx(
      ST,
      {
        scope: n,
        content: _,
        viewport: P,
        onViewportChange: T,
        itemRefCallback: W,
        selectedItem: O,
        onItemLeave: ie,
        itemTextRefCallback: F,
        focusSelectedItem: K,
        selectedItemText: G,
        position: o,
        isPositioned: X,
        searchRef: Q,
        children: /* @__PURE__ */ R.jsx(r0, { as: B5, allowPinchZoom: !0, children: /* @__PURE__ */ R.jsx(
          Ky,
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
            children: /* @__PURE__ */ R.jsx(
              Mu,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: l,
                onFocusOutside: (Y) => Y.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ R.jsx(
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
                      if (Y.key === "Tab" && Y.preventDefault(), !te && Y.key.length === 1 && j(Y.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(Y.key)) {
                        let ae = V().filter((ce) => !ce.disabled).map((ce) => ce.ref.current);
                        if (["ArrowUp", "End"].includes(Y.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(Y.key)) {
                          const ce = Y.target, de = ae.indexOf(ce);
                          ae = ae.slice(de + 1);
                        }
                        setTimeout(() => $(ae)), Y.preventDefault();
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
ET.displayName = $5;
var V5 = "SelectItemAlignedPosition", CT = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...i } = e, a = Or(go, n), l = Lr(go, n), [u, f] = k.useState(null), [d, h] = k.useState(null), p = Be(t, (A) => h(A)), m = Bu(n), v = k.useRef(!1), E = k.useRef(!0), { viewport: y, selectedItem: x, selectedItemText: b, focusSelectedItem: C } = l, _ = k.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && x && b) {
      const A = a.trigger.getBoundingClientRect(), O = d.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), G = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = G.left - O.left, de = D.left - ce, pe = A.left - de, be = A.width + pe, me = Math.max(be, O.width), Re = window.innerWidth - un, Ee = E_(de, [
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
        const ce = O.right - G.right, de = window.innerWidth - D.right - ce, pe = window.innerWidth - A.right - de, be = A.width + pe, me = Math.max(be, O.width), Re = window.innerWidth - un, Ee = E_(de, [
          un,
          Math.max(un, Re - me)
        ]);
        u.style.minWidth = be + "px", u.style.right = Ee + "px";
      }
      const B = m(), V = window.innerHeight - un * 2, X = y.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), $ = parseInt(L.paddingTop, 10), K = parseInt(L.borderBottomWidth, 10), M = parseInt(L.paddingBottom, 10), q = H + $ + X + M + K, Q = Math.min(x.offsetHeight * 5, q), j = window.getComputedStyle(y), W = parseInt(j.paddingTop, 10), ie = parseInt(j.paddingBottom, 10), F = A.top + A.height / 2 - un, Z = V - F, ee = x.offsetHeight / 2, Y = x.offsetTop + ee, te = H + $ + Y, se = q - te;
      if (te <= F) {
        const ce = B.length > 0 && x === B[B.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + K
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
      u.style.margin = `${un}px 0`, u.style.minHeight = Q + "px", u.style.maxHeight = V + "px", o == null || o(), requestAnimationFrame(() => v.current = !0);
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
  yt(() => _(), [_]);
  const [N, P] = k.useState();
  yt(() => {
    d && P(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = k.useCallback(
    (A) => {
      A && E.current === !0 && (_(), C == null || C(), E.current = !1);
    },
    [_, C]
  );
  return /* @__PURE__ */ R.jsx(
    W5,
    {
      scope: n,
      contentWrapper: u,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: T,
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
            De.div,
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
CT.displayName = V5;
var H5 = "SelectPopperPosition", yy = k.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: i = un,
    ...a
  } = e, l = Vu(n);
  return /* @__PURE__ */ R.jsx(
    tT,
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
yy.displayName = H5;
var [W5, o0] = Ci(go, {}), wy = "SelectViewport", kT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...i } = e, a = Lr(wy, n), l = o0(wy, n), u = Be(t, a.onViewportChange), f = k.useRef(0);
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
      /* @__PURE__ */ R.jsx($u.Slot, { scope: n, children: /* @__PURE__ */ R.jsx(
        De.div,
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
                const E = window.innerHeight - un * 2, y = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), b = Math.max(y, x);
                if (b < E) {
                  const C = b + v, _ = Math.min(E, C), N = C - _;
                  p.style.height = _ + "px", p.style.bottom === "0px" && (h.scrollTop = N > 0 ? N : 0, p.style.justifyContent = "flex-end");
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
kT.displayName = wy;
var NT = "SelectGroup", [U5, G5] = Ci(NT), K5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = ao();
    return /* @__PURE__ */ R.jsx(U5, { scope: n, id: i, children: /* @__PURE__ */ R.jsx(De.div, { role: "group", "aria-labelledby": i, ...o, ref: t }) });
  }
);
K5.displayName = NT;
var RT = "SelectLabel", Y5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = G5(RT, n);
    return /* @__PURE__ */ R.jsx(De.div, { id: i.id, ...o, ref: t });
  }
);
Y5.displayName = RT;
var vu = "SelectItem", [X5, PT] = Ci(vu), TT = k.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: i = !1,
      textValue: a,
      ...l
    } = e, u = Or(vu, n), f = Lr(vu, n), d = u.value === o, [h, p] = k.useState(a ?? ""), [m, v] = k.useState(!1), E = Be(
      t,
      (C) => {
        var _;
        return (_ = f.itemRefCallback) == null ? void 0 : _.call(f, C, o, i);
      }
    ), y = ao(), x = k.useRef("touch"), b = () => {
      i || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ R.jsx(
      X5,
      {
        scope: n,
        value: o,
        disabled: i,
        textId: y,
        isSelected: d,
        onItemTextChange: k.useCallback((C) => {
          p((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ R.jsx(
          $u.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: i,
            textValue: h,
            children: /* @__PURE__ */ R.jsx(
              De.div,
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
                  var N;
                  ((N = f.searchRef) == null ? void 0 : N.current) !== "" && C.key === " " || (O5.includes(C.key) && b(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
TT.displayName = vu;
var Ns = "SelectItemText", AT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, ...a } = e, l = Or(Ns, n), u = Lr(Ns, n), f = PT(Ns, n), d = q5(Ns, n), [h, p] = k.useState(null), m = Be(
      t,
      (b) => p(b),
      f.onItemTextChange,
      (b) => {
        var C;
        return (C = u.itemTextRefCallback) == null ? void 0 : C.call(u, b, f.value, f.disabled);
      }
    ), v = h == null ? void 0 : h.textContent, E = k.useMemo(
      () => /* @__PURE__ */ R.jsx("option", { value: f.value, disabled: f.disabled, children: v }, f.value),
      [f.disabled, f.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: x } = d;
    return yt(() => (y(E), () => x(E)), [y, x, E]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(De.span, { id: f.textId, ...a, ref: m }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? na.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
AT.displayName = Ns;
var IT = "SelectItemIndicator", MT = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return PT(IT, n).isSelected ? /* @__PURE__ */ R.jsx(De.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
MT.displayName = IT;
var xy = "SelectScrollUpButton", OT = k.forwardRef((e, t) => {
  const n = Lr(xy, e.__scopeSelect), o = o0(xy, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
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
    jT,
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
OT.displayName = xy;
var _y = "SelectScrollDownButton", LT = k.forwardRef((e, t) => {
  const n = Lr(_y, e.__scopeSelect), o = o0(_y, e.__scopeSelect), [i, a] = k.useState(!1), l = Be(t, o.onScrollButtonChange);
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
    jT,
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
LT.displayName = _y;
var jT = k.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...i } = e, a = Lr("SelectScrollButton", n), l = k.useRef(null), u = Bu(n), f = k.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return k.useEffect(() => () => f(), [f]), yt(() => {
    var h;
    const d = u().find((p) => p.ref.current === document.activeElement);
    (h = d == null ? void 0 : d.ref.current) == null || h.scrollIntoView({ block: "nearest" });
  }, [u]), /* @__PURE__ */ R.jsx(
    De.div,
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
}), Q5 = "SelectSeparator", Z5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ R.jsx(De.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Z5.displayName = Q5;
var by = "SelectArrow", J5 = k.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = Vu(n), a = Or(by, n), l = Lr(by, n);
    return a.open && l.position === "popper" ? /* @__PURE__ */ R.jsx(nT, { ...i, ...o, ref: t }) : null;
  }
);
J5.displayName = by;
var eB = "SelectBubbleInput", DT = k.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const i = k.useRef(null), a = Be(o, i), l = rT(t);
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
      De.select,
      {
        ...n,
        style: { ...oT, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
DT.displayName = eB;
function qT(e) {
  return e === "" || e === void 0;
}
function zT(e) {
  const t = fo(e), n = k.useRef(""), o = k.useRef(0), i = k.useCallback(
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
function FT(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let l = tB(e, Math.max(a, 0));
  i.length === 1 && (l = l.filter((d) => d !== n));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(i.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function tB(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var nB = gT, rB = vT, oB = wT, iB = xT, sB = _T, aB = bT, lB = kT, uB = TT, cB = AT, fB = MT, dB = OT, hB = LT;
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pB = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gB = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), Y_ = (e) => {
  const t = gB(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, $T = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), mB = (e) => {
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
const yB = k.forwardRef(
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
      ...vB,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: $T("lucide", i),
      ...!a && !mB(u) && { "aria-hidden": "true" },
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
    ({ className: o, ...i }, a) => k.createElement(yB, {
      ref: a,
      iconNode: t,
      className: $T(
        `lucide-${pB(Y_(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return n.displayName = Y_(e), n;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wB = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
], xB = jn("arrow-down-wide-narrow", wB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _B = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
], bB = jn("arrow-right-from-line", _B);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SB = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], BT = jn("check", SB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EB = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], VT = jn("chevron-down", EB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CB = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], kB = jn("chevron-up", CB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NB = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], RB = jn("download", NB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PB = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], TB = jn("panel-left", PB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AB = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], IB = jn("plus", AB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MB = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], OB = jn("trash-2", MB);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LB = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], jB = jn("x", LB);
function DB({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(nB, { "data-slot": "select", ...e });
}
function qB({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(oB, { "data-slot": "select-value", ...e });
}
function zB({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ R.jsxs(
    rB,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Te(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ R.jsx(iB, { asChild: !0, children: /* @__PURE__ */ R.jsx(VT, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function FB({
  className: e,
  children: t,
  position: n = "popper",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ R.jsx(sB, { children: /* @__PURE__ */ R.jsxs(
    aB,
    {
      "data-slot": "select-content",
      className: Te(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: o,
      ...i,
      children: [
        /* @__PURE__ */ R.jsx(BB, {}),
        /* @__PURE__ */ R.jsx(
          lB,
          {
            className: Te(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ R.jsx(VB, {})
      ]
    }
  ) });
}
function $B({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ R.jsxs(
    uB,
    {
      "data-slot": "select-item",
      className: Te(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ R.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ R.jsx(fB, { children: /* @__PURE__ */ R.jsx(BT, { className: "size-4" }) }) }),
        /* @__PURE__ */ R.jsx(cB, { children: t })
      ]
    }
  );
}
function BB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    dB,
    {
      "data-slot": "select-scroll-up-button",
      className: Te(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(kB, { className: "size-4" })
    }
  );
}
function VB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    hB,
    {
      "data-slot": "select-scroll-down-button",
      className: Te(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(VT, { className: "size-4" })
    }
  );
}
function HB({ value: e, options: t, onChange: n, placeholder: o, label: i }) {
  return /* @__PURE__ */ R.jsxs(DB, { value: e, onValueChange: n, children: [
    /* @__PURE__ */ R.jsx(
      zB,
      {
        className: "h-8 text-xs",
        onMouseDown: (a) => a.stopPropagation(),
        onPointerDown: (a) => a.stopPropagation(),
        "aria-label": i,
        children: /* @__PURE__ */ R.jsx(qB, { placeholder: o })
      }
    ),
    /* @__PURE__ */ R.jsx(FB, { children: t.map((a) => /* @__PURE__ */ R.jsx($B, { value: a, className: "text-xs", children: a }, a)) })
  ] });
}
class WB {
  constructor() {
    to(this, "renderers", /* @__PURE__ */ new Map());
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
const ni = new WB();
function HT({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: Te(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...n
    }
  );
}
function WT({ value: e, onChange: t, placeholder: n, label: o }) {
  return /* @__PURE__ */ R.jsx(
    HT,
    {
      type: "text",
      value: e,
      onChange: (i) => t(i.target.value),
      onMouseDown: (i) => i.stopPropagation(),
      onPointerDown: (i) => i.stopPropagation(),
      placeholder: n,
      "aria-label": o,
      className: "h-8 text-xs"
    }
  );
}
function UT({ value: e, onChange: t, isInteger: n, placeholder: o, label: i }) {
  return /* @__PURE__ */ R.jsx(
    HT,
    {
      type: "number",
      value: e,
      step: n ? 1 : "any",
      onChange: (a) => t(Number(a.target.value)),
      onMouseDownCapture: (a) => a.stopPropagation(),
      onPointerDownCapture: (a) => a.stopPropagation(),
      onWheel: (a) => a.currentTarget.blur(),
      placeholder: o,
      "aria-label": i,
      className: "h-8 text-xs"
    }
  );
}
function UB(e, t) {
  return k.useReducer((n, o) => t[n][o] ?? n, e);
}
var vo = (e) => {
  const { present: t, children: n } = e, o = GB(t), i = typeof n == "function" ? n({ present: o.isPresent }) : k.Children.only(n), a = Be(o.ref, KB(i));
  return typeof n == "function" || o.isPresent ? k.cloneElement(i, { ref: a }) : null;
};
vo.displayName = "Presence";
function GB(e) {
  const [t, n] = k.useState(), o = k.useRef(null), i = k.useRef(e), a = k.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = UB(l, {
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
    const d = Vl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = i.current;
    if (h !== e) {
      const m = a.current, v = Vl(d);
      e ? f("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (v) => {
        const y = Vl(o.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (f("ANIMATION_END"), !i.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = Vl(o.current));
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
function Vl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function KB(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Hu = "Checkbox", [YB] = bi(Hu), [XB, i0] = YB(Hu);
function QB(e) {
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
    caller: Hu
  }), [E, y] = k.useState(null), [x, b] = k.useState(null), C = k.useRef(!1), _ = E ? !!l || !!E.closest("form") : (
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
    isFormControl: _,
    bubbleInput: x,
    setBubbleInput: b
  };
  return /* @__PURE__ */ R.jsx(
    XB,
    {
      scope: t,
      ...N,
      children: ZB(p) ? p(N) : o
    }
  );
}
var GT = "CheckboxTrigger", KT = k.forwardRef(
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
    } = i0(GT, e), y = Be(i, h), x = k.useRef(f);
    return k.useEffect(() => {
      const b = a == null ? void 0 : a.form;
      if (b) {
        const C = () => p(x.current);
        return b.addEventListener("reset", C), () => b.removeEventListener("reset", C);
      }
    }, [a, p]), /* @__PURE__ */ R.jsx(
      De.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Tr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": eA(f),
        "data-disabled": u ? "" : void 0,
        disabled: u,
        value: l,
        ...o,
        ref: y,
        onKeyDown: Le(t, (b) => {
          b.key === "Enter" && b.preventDefault();
        }),
        onClick: Le(n, (b) => {
          p((C) => Tr(C) ? !0 : !C), E && v && (m.current = b.isPropagationStopped(), m.current || b.stopPropagation());
        })
      }
    );
  }
);
KT.displayName = GT;
var YT = k.forwardRef(
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
      QB,
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
            KT,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ R.jsx(
            JT,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
YT.displayName = Hu;
var XT = "CheckboxIndicator", QT = k.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...i } = e, a = i0(XT, n);
    return /* @__PURE__ */ R.jsx(
      vo,
      {
        present: o || Tr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ R.jsx(
          De.span,
          {
            "data-state": eA(a.checked),
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
QT.displayName = XT;
var ZT = "CheckboxBubbleInput", JT = k.forwardRef(
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
    } = i0(ZT, e), E = Be(n, v), y = rT(a), x = VP(o);
    k.useEffect(() => {
      const C = m;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, P = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, T = !i.current;
      if (y !== a && P) {
        const A = new Event("click", { bubbles: T });
        C.indeterminate = Tr(a), P.call(C, Tr(a) ? !1 : a), C.dispatchEvent(A);
      }
    }, [m, y, a, i]);
    const b = k.useRef(Tr(a) ? !1 : a);
    return /* @__PURE__ */ R.jsx(
      De.input,
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
JT.displayName = ZT;
function ZB(e) {
  return typeof e == "function";
}
function Tr(e) {
  return e === "indeterminate";
}
function eA(e) {
  return Tr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function JB({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    YT,
    {
      "data-slot": "checkbox",
      className: Te(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(
        QT,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ R.jsx(BT, { className: "size-3.5" })
        }
      )
    }
  );
}
function eV({ value: e, onChange: t, label: n }) {
  return /* @__PURE__ */ R.jsx(
    JB,
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
function tV(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = k.createContext(l);
    u.displayName = a + "Context";
    const f = n.length;
    n = [...n, l];
    const d = (p) => {
      var b;
      const { scope: m, children: v, ...E } = p, y = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[f]) || u, x = k.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ R.jsx(y.Provider, { value: x, children: v });
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
  return i.scopeName = e, [o, nV(i, ...t)];
}
function nV(...e) {
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
var rV = [
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
], tA = rV.reduce((e, t) => {
  const n = /* @__PURE__ */ Vy(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ R.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), s0 = "Progress", a0 = 100, [oV] = tV(s0), [iV, sV] = oV(s0), nA = k.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: i,
      getValueLabel: a = aV,
      ...l
    } = e;
    (i || i === 0) && !X_(i) && console.error(lV(`${i}`, "Progress"));
    const u = X_(i) ? i : a0;
    o !== null && !Q_(o, u) && console.error(uV(`${o}`, "Progress"));
    const f = Q_(o, u) ? o : null, d = yu(f) ? a(f, u) : void 0;
    return /* @__PURE__ */ R.jsx(iV, { scope: n, value: f, max: u, children: /* @__PURE__ */ R.jsx(
      tA.div,
      {
        "aria-valuemax": u,
        "aria-valuemin": 0,
        "aria-valuenow": yu(f) ? f : void 0,
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
nA.displayName = s0;
var rA = "ProgressIndicator", oA = k.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, i = sV(rA, n);
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
function aV(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function iA(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function yu(e) {
  return typeof e == "number";
}
function X_(e) {
  return yu(e) && !isNaN(e) && e > 0;
}
function Q_(e, t) {
  return yu(e) && !isNaN(e) && e <= t && e >= 0;
}
function lV(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${a0}\`.`;
}
function uV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${a0} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var cV = nA, fV = oA;
function dV({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ R.jsx(
    cV,
    {
      "data-slot": "progress",
      className: Te(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ R.jsx(
        fV,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function hV({ value: e, onChange: t, label: n, property: o }) {
  const i = (o == null ? void 0 : o.maximum) ?? 100, a = (o == null ? void 0 : o.minimum) ?? 0, l = Math.min(100, Math.max(0, (e - a) / (i - a) * 100));
  return /* @__PURE__ */ R.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ R.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
      /* @__PURE__ */ R.jsx("span", { className: "text-muted-foreground", children: (o == null ? void 0 : o.description) || "Progress" }),
      /* @__PURE__ */ R.jsxs("span", { className: "font-medium text-xs tabular-nums", children: [
        Math.round(l),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ R.jsx(dV, { value: l, className: "h-2" })
  ] });
}
const pV = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ R.jsx(
  WT,
  {
    value: String(e || ""),
    onChange: n,
    placeholder: t.description,
    label: o
  }
), gV = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ R.jsx(
  UT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: n,
    isInteger: !1,
    placeholder: t.description,
    label: o
  }
), mV = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ R.jsx(
  UT,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: n,
    isInteger: !0,
    placeholder: t.description,
    label: o
  }
), vV = ({ value: e, onChange: t, label: n }) => /* @__PURE__ */ R.jsx(eV, { value: !!e, onChange: t, label: n }), yV = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ R.jsx(
  hV,
  {
    value: typeof e == "number" ? e : Number(e) || 0,
    onChange: n,
    property: t,
    label: o
  }
), wV = ({ value: e, property: t, onChange: n, label: o }) => /* @__PURE__ */ R.jsx(
  WT,
  {
    value: e ? JSON.stringify(e) : "",
    onChange: (i) => {
      try {
        n(JSON.parse(String(i)));
      } catch {
        n(i);
      }
    },
    placeholder: t.description,
    label: o
  }
);
function xV() {
  ni.register("string", pV), ni.register("number", gV), ni.register("integer", mV), ni.register("boolean", vV), ni.register("progress", yV);
}
xV();
function _V({ fieldKey: e, property: t, value: n, onChange: o, label: i, inputId: a }) {
  return t.enum ? /* @__PURE__ */ R.jsx(
    HB,
    {
      value: String(n || ""),
      options: t.enum.map(String),
      onChange: o,
      placeholder: t.description,
      id: a,
      label: i
    }
  ) : (ni.get(t.type) || wV)({ value: n, property: t, onChange: o, id: a, label: i });
}
var bV = [
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
], SV = bV.reduce((e, t) => {
  const n = /* @__PURE__ */ Vy(`Primitive.${t}`), o = k.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ R.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), EV = "Label", sA = k.forwardRef((e, t) => /* @__PURE__ */ R.jsx(
  SV.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var i;
      n.target.closest("button, input, select, textarea") || ((i = e.onMouseDown) == null || i.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
sA.displayName = EV;
var CV = sA;
function kV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    CV,
    {
      "data-slot": "label",
      className: Te(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function NV({
  nodeId: e,
  parameters: t,
  values: n,
  onValueChange: o,
  fieldConfigs: i,
  validation: a
}) {
  if (!(t != null && t.properties))
    return null;
  const l = (u, f) => {
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
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: "p-3 flex flex-col gap-2.5",
      onMouseDown: (u) => u.stopPropagation(),
      onPointerDown: (u) => u.stopPropagation(),
      children: Object.entries(t.properties).map(([u, f]) => {
        var E;
        const d = i == null ? void 0 : i[u];
        if (!l(u, d))
          return null;
        const h = (n == null ? void 0 : n[u]) ?? f.default ?? "", p = (E = t.required) == null ? void 0 : E.includes(u), m = `node-${e}-field-${u}`, v = (d == null ? void 0 : d.disabled) || (d == null ? void 0 : d.readonly);
        return /* @__PURE__ */ R.jsxs(
          "div",
          {
            className: Te("flex flex-col gap-1", d == null ? void 0 : d.className),
            title: d == null ? void 0 : d.tooltip,
            children: [
              /* @__PURE__ */ R.jsx(
                kV,
                {
                  htmlFor: m,
                  className: Te(
                    "text-xs font-medium flex items-center gap-1",
                    p && "after:content-['*'] after:text-destructive after:ml-0.5",
                    v && "opacity-50 cursor-not-allowed"
                  ),
                  children: f.title || u
                }
              ),
              /* @__PURE__ */ R.jsx(
                _V,
                {
                  fieldKey: u,
                  property: f,
                  value: h,
                  onChange: (y) => !v && o(u, y),
                  inputId: m
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
class Wu {
  constructor(t) {
    to(this, "schema");
    to(this, "LayoutComponent");
    if (this.schema = t, this.LayoutComponent = MF(t.layoutType), !this.LayoutComponent)
      throw new Error(`Unknown layoutType: "${t.layoutType}".`);
  }
  /**
   * Build header configuration and pre-render header element
   */
  buildHeaderConfig() {
    const { header: t, label: n, icon: o } = this.schema, i = (t == null ? void 0 : t.show) !== !1, a = (t == null ? void 0 : t.icon) || o;
    return {
      show: i,
      element: i ? /* @__PURE__ */ R.jsx(
        OF,
        {
          className: Te(
            "p-2.5 space-y-0 px-2.5",
            (t == null ? void 0 : t.className) || "bg-primary text-primary-foreground"
          ),
          style: {
            backgroundColor: t == null ? void 0 : t.bgColor,
            color: t == null ? void 0 : t.textColor
          },
          children: /* @__PURE__ */ R.jsxs(LF, { className: "text-sm font-semibold flex items-center gap-2", children: [
            a && /* @__PURE__ */ R.jsx("span", { className: "text-base", children: a }),
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
      element: n && t ? /* @__PURE__ */ R.jsx(
        jF,
        {
          className: Te(
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
      className: Te(
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
    const { schema: t, LayoutComponent: n } = this, o = this.buildHeaderConfig(), i = this.buildFooterConfig(), a = this.buildStyleConfig(), l = ({ id: u, data: f, selected: d }) => {
      const h = f, p = EU(), m = k.useCallback((v, E) => {
        p((y) => ({
          ...y,
          [u]: { ...y[u], [v]: E }
        }));
      }, [u, p]);
      return /* @__PURE__ */ R.jsxs(
        kP,
        {
          className: Te(
            a.className,
            d && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: a.style,
          children: [
            o.element,
            /* @__PURE__ */ R.jsx(
              n,
              {
                inputs: h.inputs || t.inputs,
                outputs: h.outputs || t.outputs,
                handleType: t.handleType,
                inputHandleType: t.inputHandleType,
                outputHandleType: t.outputHandleType,
                children: h.parameters && /* @__PURE__ */ R.jsx(
                  NV,
                  {
                    nodeId: u,
                    parameters: h.parameters,
                    values: h.values,
                    onValueChange: m,
                    fieldConfigs: h.fieldConfigs,
                    validation: h.validation
                  }
                )
              }
            ),
            i.element
          ]
        }
      );
    };
    return k.memo(
      l,
      (u, f) => u.id === f.id && u.selected === f.selected && u.data.values === f.data.values
    );
  }
  /**
   * Static helper to build a component from schema in one call
   */
  static buildComponent(t) {
    return new Wu(t).buildComponent();
  }
}
function IU(e) {
  const t = {};
  for (const n of e)
    try {
      t[n.type] = Wu.buildComponent(n.defaultData);
    } catch (o) {
      throw console.error(`Failed to build component for node type "${n.type}":`, o), o;
    }
  return t;
}
class RV {
  constructor() {
    to(this, "registry", {});
    to(this, "fallbackComponent");
  }
  /**
   * Register a node type with a component
   * @param type - Node type identifier (matches Python node class type_name)
   * @param component - React component or renderer type
   * @param options - Additional registration options
   */
  register(t, n, o = {}) {
    const i = o.isParametersNode ?? n === "parameters", a = typeof n == "string" ? this.resolveRenderer(n) : n;
    this.registry[t] = {
      component: a,
      isParametersNode: i,
      defaultProps: o.defaultProps
    };
  }
  /**
   * Register a custom (non-parameters) node component
   * Use this for nodes that have completely custom rendering logic
   */
  registerCustom(t, n, o) {
    this.register(t, n, { isParametersNode: !1, defaultProps: o });
  }
  /**
   * Register a parameters-based node component
   * Use this for nodes that follow the parameters pattern (generated from Pydantic models)
   */
  registerParameters(t, n, o) {
    this.register(t, n, { isParametersNode: !0, defaultProps: o });
  }
  /**
   * Set the fallback component for unregistered types
   * Typically set to a builder-generated component for parameters-based rendering
   */
  setFallback(t) {
    this.fallbackComponent = t;
  }
  /**
   * Get the component for a node type
   * Falls back to registered fallback component if type not found
   */
  get(t) {
    const n = this.registry[t];
    return (n == null ? void 0 : n.component) ?? this.fallbackComponent;
  }
  /**
   * Get full registration info for a node type
   */
  getRegistration(t) {
    return this.registry[t];
  }
  /**
   * Get all registered node types as a simple component map
   * Compatible with ReactFlow's nodeTypes prop
   */
  getAll() {
    const t = {};
    for (const [n, o] of Object.entries(this.registry))
      t[n] = o.component;
    return t;
  }
  /**
   * Get all registered types
   */
  getRegisteredTypes() {
    return Object.keys(this.registry);
  }
  /**
   * Check if a type is registered
   */
  has(t) {
    return t in this.registry;
  }
  /**
   * Check if a type is a parameters-based node
   */
  isParametersNode(t) {
    var n;
    return ((n = this.registry[t]) == null ? void 0 : n.isParametersNode) ?? !1;
  }
  /**
   * Unregister a node type
   */
  unregister(t) {
    return t in this.registry ? (delete this.registry[t], !0) : !1;
  }
  /**
   * Clear all registrations
   */
  clear() {
    this.registry = {}, this.fallbackComponent = void 0;
  }
  resolveRenderer(t) {
    if (typeof t == "function")
      return t;
    throw new Error(`Cannot resolve renderer: ${t}. Component must be registered first.`);
  }
}
const Z_ = new RV(), Od = 768;
function PV() {
  const [e, t] = k.useState(void 0);
  return k.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Od - 1}px)`), o = () => {
      t(window.innerWidth < Od);
    };
    return n.addEventListener("change", o), t(window.innerWidth < Od), () => n.removeEventListener("change", o);
  }, []), !!e;
}
const TV = Wy(
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
function Ms({
  className: e,
  variant: t,
  size: n,
  asChild: o = !1,
  ...i
}) {
  const a = o ? Hy : "button";
  return /* @__PURE__ */ R.jsx(
    a,
    {
      "data-slot": "button",
      className: Te(TV({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
// @__NO_SIDE_EFFECTS__
function AV(e) {
  const t = /* @__PURE__ */ IV(e), n = k.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = k.Children.toArray(a), f = u.find(OV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? k.Children.count(d) > 1 ? k.Children.only(null) : k.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: k.isValidElement(d) ? k.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function IV(e) {
  const t = k.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (k.isValidElement(i)) {
      const l = jV(i), u = LV(a, i.props);
      return i.type !== k.Fragment && (u.ref = o ? wi(o, l) : l), k.cloneElement(i, u);
    }
    return k.Children.count(i) > 1 ? k.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var MV = Symbol("radix.slottable");
function OV(e) {
  return k.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === MV;
}
function LV(e, t) {
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
function jV(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Uu = "Dialog", [aA] = bi(Uu), [DV, yn] = aA(Uu), lA = (e) => {
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
    caller: Uu
  });
  return /* @__PURE__ */ R.jsx(
    DV,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: ao(),
      titleId: ao(),
      descriptionId: ao(),
      open: d,
      onOpenChange: h,
      onOpenToggle: k.useCallback(() => h((p) => !p), [h]),
      modal: l,
      children: n
    }
  );
};
lA.displayName = Uu;
var uA = "DialogTrigger", qV = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = yn(uA, n), a = Be(t, i.triggerRef);
    return /* @__PURE__ */ R.jsx(
      De.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": c0(i.open),
        ...o,
        ref: a,
        onClick: Le(e.onClick, i.onOpenToggle)
      }
    );
  }
);
qV.displayName = uA;
var l0 = "DialogPortal", [zV, cA] = aA(l0, {
  forceMount: void 0
}), fA = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: i } = e, a = yn(l0, t);
  return /* @__PURE__ */ R.jsx(zV, { scope: t, forceMount: n, children: k.Children.map(o, (l) => /* @__PURE__ */ R.jsx(vo, { present: n || a.open, children: /* @__PURE__ */ R.jsx(zu, { asChild: !0, container: i, children: l }) })) });
};
fA.displayName = l0;
var wu = "DialogOverlay", dA = k.forwardRef(
  (e, t) => {
    const n = cA(wu, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = yn(wu, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ R.jsx(vo, { present: o || a.open, children: /* @__PURE__ */ R.jsx($V, { ...i, ref: t }) }) : null;
  }
);
dA.displayName = wu;
var FV = /* @__PURE__ */ AV("DialogOverlay.RemoveScroll"), $V = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = yn(wu, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ R.jsx(r0, { as: FV, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ R.jsx(
        De.div,
        {
          "data-state": c0(i.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), mo = "DialogContent", hA = k.forwardRef(
  (e, t) => {
    const n = cA(mo, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = yn(mo, e.__scopeDialog);
    return /* @__PURE__ */ R.jsx(vo, { present: o || a.open, children: a.modal ? /* @__PURE__ */ R.jsx(BV, { ...i, ref: t }) : /* @__PURE__ */ R.jsx(VV, { ...i, ref: t }) });
  }
);
hA.displayName = mo;
var BV = k.forwardRef(
  (e, t) => {
    const n = yn(mo, e.__scopeDialog), o = k.useRef(null), i = Be(t, n.contentRef, o);
    return k.useEffect(() => {
      const a = o.current;
      if (a) return aT(a);
    }, []), /* @__PURE__ */ R.jsx(
      pA,
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
), VV = k.forwardRef(
  (e, t) => {
    const n = yn(mo, e.__scopeDialog), o = k.useRef(!1), i = k.useRef(!1);
    return /* @__PURE__ */ R.jsx(
      pA,
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
), pA = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, ...l } = e, u = yn(mo, n), f = k.useRef(null), d = Be(t, f);
    return PP(), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(
        Ky,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ R.jsx(
            Mu,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": c0(u.open),
              ...l,
              ref: d,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx(HV, { titleId: u.titleId }),
        /* @__PURE__ */ R.jsx(UV, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), u0 = "DialogTitle", gA = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = yn(u0, n);
    return /* @__PURE__ */ R.jsx(De.h2, { id: i.titleId, ...o, ref: t });
  }
);
gA.displayName = u0;
var mA = "DialogDescription", vA = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = yn(mA, n);
    return /* @__PURE__ */ R.jsx(De.p, { id: i.descriptionId, ...o, ref: t });
  }
);
vA.displayName = mA;
var yA = "DialogClose", wA = k.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = yn(yA, n);
    return /* @__PURE__ */ R.jsx(
      De.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: Le(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
wA.displayName = yA;
function c0(e) {
  return e ? "open" : "closed";
}
var xA = "DialogTitleWarning", [MU, _A] = DF(xA, {
  contentName: mo,
  titleName: u0,
  docsSlug: "dialog"
}), HV = ({ titleId: e }) => {
  const t = _A(xA), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return k.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, WV = "DialogDescriptionWarning", UV = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_A(WV).contentName}}.`;
  return k.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, GV = lA, KV = fA, YV = dA, XV = hA, QV = gA, ZV = vA, JV = wA;
function eH({ ...e }) {
  return /* @__PURE__ */ R.jsx(GV, { "data-slot": "sheet", ...e });
}
function tH({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(KV, { "data-slot": "sheet-portal", ...e });
}
function nH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    YV,
    {
      "data-slot": "sheet-overlay",
      className: Te(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function rH({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ R.jsxs(tH, { children: [
    /* @__PURE__ */ R.jsx(nH, {}),
    /* @__PURE__ */ R.jsxs(
      XV,
      {
        "data-slot": "sheet-content",
        className: Te(
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
          /* @__PURE__ */ R.jsxs(JV, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ R.jsx(jB, { className: "size-4" }),
            /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function oH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: Te("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function iH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    QV,
    {
      "data-slot": "sheet-title",
      className: Te("text-foreground font-semibold", e),
      ...t
    }
  );
}
function sH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    ZV,
    {
      "data-slot": "sheet-description",
      className: Te("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var aH = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function lH(e) {
  const t = ({ children: n }) => /* @__PURE__ */ R.jsx(R.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = aH, t;
}
var [Gu] = bi("Tooltip", [
  qu
]), Ku = qu(), bA = "TooltipProvider", uH = 700, Sy = "tooltip.open", [cH, f0] = Gu(bA), SA = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = uH,
    skipDelayDuration: o = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, l = k.useRef(!0), u = k.useRef(!1), f = k.useRef(0);
  return k.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ R.jsx(
    cH,
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
SA.displayName = bA;
var Ks = "Tooltip", [fH, ia] = Gu(Ks), EA = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = f0(Ks, e.__scopeTooltip), d = Ku(t), [h, p] = k.useState(null), m = ao(), v = k.useRef(0), E = l ?? f.disableHoverableContent, y = u ?? f.delayDuration, x = k.useRef(!1), [b, C] = Gs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: (A) => {
      A ? (f.onOpen(), document.dispatchEvent(new CustomEvent(Sy))) : f.onClose(), a == null || a(A);
    },
    caller: Ks
  }), _ = k.useMemo(() => b ? x.current ? "delayed-open" : "instant-open" : "closed", [b]), N = k.useCallback(() => {
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
  }, []), /* @__PURE__ */ R.jsx(JP, { ...d, children: /* @__PURE__ */ R.jsx(
    fH,
    {
      scope: t,
      contentId: m,
      open: b,
      stateAttribute: _,
      trigger: h,
      onTriggerChange: p,
      onTriggerEnter: k.useCallback(() => {
        f.isOpenDelayedRef.current ? T() : N();
      }, [f.isOpenDelayedRef, T, N]),
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
EA.displayName = Ks;
var Ey = "TooltipTrigger", CA = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = ia(Ey, n), a = f0(Ey, n), l = Ku(n), u = k.useRef(null), f = Be(t, u, i.onTriggerChange), d = k.useRef(!1), h = k.useRef(!1), p = k.useCallback(() => d.current = !1, []);
    return k.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ R.jsx(eT, { asChild: !0, ...l, children: /* @__PURE__ */ R.jsx(
      De.button,
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
CA.displayName = Ey;
var d0 = "TooltipPortal", [dH, hH] = Gu(d0, {
  forceMount: void 0
}), kA = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: i } = e, a = ia(d0, t);
  return /* @__PURE__ */ R.jsx(dH, { scope: t, forceMount: n, children: /* @__PURE__ */ R.jsx(vo, { present: n || a.open, children: /* @__PURE__ */ R.jsx(zu, { asChild: !0, container: i, children: o }) }) });
};
kA.displayName = d0;
var yi = "TooltipContent", NA = k.forwardRef(
  (e, t) => {
    const n = hH(yi, e.__scopeTooltip), { forceMount: o = n.forceMount, side: i = "top", ...a } = e, l = ia(yi, e.__scopeTooltip);
    return /* @__PURE__ */ R.jsx(vo, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ R.jsx(RA, { side: i, ...a, ref: t }) : /* @__PURE__ */ R.jsx(pH, { side: i, ...a, ref: t }) });
  }
), pH = k.forwardRef((e, t) => {
  const n = ia(yi, e.__scopeTooltip), o = f0(yi, e.__scopeTooltip), i = k.useRef(null), a = Be(t, i), [l, u] = k.useState(null), { trigger: f, onClose: d } = n, h = i.current, { onPointerInTransitChange: p } = o, m = k.useCallback(() => {
    u(null), p(!1);
  }, [p]), v = k.useCallback(
    (E, y) => {
      const x = E.currentTarget, b = { x: E.clientX, y: E.clientY }, C = yH(b, x.getBoundingClientRect()), _ = wH(b, C), N = xH(y.getBoundingClientRect()), P = bH([..._, ...N]);
      u(P), p(!0);
    },
    [p]
  );
  return k.useEffect(() => () => m(), [m]), k.useEffect(() => {
    if (f && h) {
      const E = (x) => v(x, h), y = (x) => v(x, f);
      return f.addEventListener("pointerleave", E), h.addEventListener("pointerleave", y), () => {
        f.removeEventListener("pointerleave", E), h.removeEventListener("pointerleave", y);
      };
    }
  }, [f, h, v, m]), k.useEffect(() => {
    if (l) {
      const E = (y) => {
        const x = y.target, b = { x: y.clientX, y: y.clientY }, C = (f == null ? void 0 : f.contains(x)) || (h == null ? void 0 : h.contains(x)), _ = !_H(b, l);
        C ? m() : _ && (m(), d());
      };
      return document.addEventListener("pointermove", E), () => document.removeEventListener("pointermove", E);
    }
  }, [f, h, l, d, m]), /* @__PURE__ */ R.jsx(RA, { ...e, ref: a });
}), [gH, mH] = Gu(Ks, { isInside: !1 }), vH = /* @__PURE__ */ lH("TooltipContent"), RA = k.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = ia(yi, n), d = Ku(n), { onClose: h } = f;
    return k.useEffect(() => (document.addEventListener(Sy, h), () => document.removeEventListener(Sy, h)), [h]), k.useEffect(() => {
      if (f.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(f.trigger) && h();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [f.trigger, h]), /* @__PURE__ */ R.jsx(
      Mu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: h,
        children: /* @__PURE__ */ R.jsxs(
          tT,
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
              /* @__PURE__ */ R.jsx(vH, { children: o }),
              /* @__PURE__ */ R.jsx(gH, { scope: n, isInside: !0, children: /* @__PURE__ */ R.jsx(G$, { id: f.contentId, role: "tooltip", children: i || o }) })
            ]
          }
        )
      }
    );
  }
);
NA.displayName = yi;
var PA = "TooltipArrow", TA = k.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = Ku(n);
    return mH(
      PA,
      n
    ).isInside ? null : /* @__PURE__ */ R.jsx(nT, { ...i, ...o, ref: t });
  }
);
TA.displayName = PA;
function yH(e, t) {
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
function wH(e, t, n = 5) {
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
function xH(e) {
  const { top: t, right: n, bottom: o, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: i, y: o }
  ];
}
function _H(e, t) {
  const { x: n, y: o } = e;
  let i = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a], f = t[l], d = u.x, h = u.y, p = f.x, m = f.y;
    h > o != m > o && n < (p - d) * (o - h) / (m - h) + d && (i = !i);
  }
  return i;
}
function bH(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), SH(t);
}
function SH(e) {
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
var EH = SA, CH = EA, kH = CA, NH = kA, RH = NA, PH = TA;
function AA({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    EH,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function TH({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(AA, { children: /* @__PURE__ */ R.jsx(CH, { "data-slot": "tooltip", ...e }) });
}
function AH({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(kH, { "data-slot": "tooltip-trigger", ...e });
}
function IH({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ R.jsx(NH, { children: /* @__PURE__ */ R.jsxs(
    RH,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: Te(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ R.jsx(PH, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const MH = "sidebar_state", OH = 3600 * 24 * 7, LH = "16rem", jH = "18rem", DH = "3rem", qH = "b", IA = k.createContext(null);
function h0() {
  const e = k.useContext(IA);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function zH({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: a,
  ...l
}) {
  const u = PV(), [f, d] = k.useState(!1), [h, p] = k.useState(e), m = t ?? h, v = k.useCallback(
    (b) => {
      const C = typeof b == "function" ? b(m) : b;
      n ? n(C) : p(C), document.cookie = `${MH}=${C}; path=/; max-age=${OH}`;
    },
    [n, m]
  ), E = k.useCallback(() => u ? d((b) => !b) : v((b) => !b), [u, v, d]);
  k.useEffect(() => {
    const b = (C) => {
      C.key === qH && (C.metaKey || C.ctrlKey) && (C.preventDefault(), E());
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [E]);
  const y = m ? "expanded" : "collapsed", x = k.useMemo(
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
  return /* @__PURE__ */ R.jsx(IA.Provider, { value: x, children: /* @__PURE__ */ R.jsx(AA, { delayDuration: 0, children: /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": LH,
        "--sidebar-width-icon": DH,
        ...i
      },
      className: Te(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...l,
      children: a
    }
  ) }) });
}
function FH({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...a
}) {
  const { isMobile: l, state: u, openMobile: f, setOpenMobile: d } = h0();
  return n === "none" ? /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: Te(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...a,
      children: i
    }
  ) : l ? /* @__PURE__ */ R.jsx(eH, { open: f, onOpenChange: d, ...a, children: /* @__PURE__ */ R.jsxs(
    rH,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": jH
      },
      side: e,
      children: [
        /* @__PURE__ */ R.jsxs(oH, { className: "sr-only", children: [
          /* @__PURE__ */ R.jsx(iH, { children: "Sidebar" }),
          /* @__PURE__ */ R.jsx(sH, { children: "Displays the mobile sidebar." })
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
            className: Te(
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
            className: Te(
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
function $H({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = h0();
  return /* @__PURE__ */ R.jsxs(
    Ms,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: Te("size-7", e),
      onClick: (i) => {
        t == null || t(i), o();
      },
      ...n,
      children: [
        /* @__PURE__ */ R.jsx(TB, {}),
        /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function BH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: Te("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function VH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: Te(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function HH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: Te("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function WH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: Te("w-full text-sm", e),
      ...t
    }
  );
}
function UH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: Te("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function GH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: Te("group/menu-item relative", e),
      ...t
    }
  );
}
const KH = Wy(
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
function YH({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: a,
  ...l
}) {
  const u = e ? Hy : "button", { isMobile: f, state: d } = h0(), h = /* @__PURE__ */ R.jsx(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: Te(KH({ variant: n, size: o }), a),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ R.jsxs(TH, { children: [
    /* @__PURE__ */ R.jsx(AH, { asChild: !0, children: h }),
    /* @__PURE__ */ R.jsx(
      IH,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || f,
        ...i
      }
    )
  ] })) : h;
}
function XH({ onAddNode: e, templates: t }) {
  return /* @__PURE__ */ R.jsx(VH, { children: /* @__PURE__ */ R.jsx(HH, { children: /* @__PURE__ */ R.jsx(WH, { children: /* @__PURE__ */ R.jsx(UH, { children: t.map((n, o) => /* @__PURE__ */ R.jsx(GH, { children: /* @__PURE__ */ R.jsxs(
    YH,
    {
      onClick: () => e(n),
      tooltip: n.description,
      children: [
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded text-sm font-bold", children: n.icon || /* @__PURE__ */ R.jsx(IB, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ R.jsx("span", { children: n.label })
      ]
    }
  ) }, o)) }) }) }) });
}
function QH({
  onExport: e,
  onLayoutVertical: t,
  onLayoutHorizontal: n
}) {
  return /* @__PURE__ */ R.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ R.jsxs(Ms, { onClick: e, variant: "default", size: "sm", children: [
      /* @__PURE__ */ R.jsx(RB, { className: "h-4 w-4 mr-2" }),
      "Export to JSON"
    ] }),
    /* @__PURE__ */ R.jsxs(Ms, { onClick: t, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ R.jsx(xB, { className: "h-4 w-4 mr-2" }),
      "Layout Vertical"
    ] }),
    /* @__PURE__ */ R.jsxs(Ms, { onClick: n, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ R.jsx(bB, { className: "h-4 w-4 mr-2" }),
      "Layout Horizontal"
    ] })
  ] });
}
function ZH({ x: e, y: t, onDelete: n, onClose: o }) {
  return kn.useEffect(() => {
    const i = () => o(), a = (l) => {
      l.key === "Escape" && o();
    };
    return document.addEventListener("click", i), document.addEventListener("keydown", a), () => {
      document.removeEventListener("click", i), document.removeEventListener("keydown", a);
    };
  }, [o]), /* @__PURE__ */ R.jsx(
    kP,
    {
      className: "fixed z-[1000] min-w-[150px] p-1 shadow-md",
      style: { top: t, left: e },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ R.jsxs(
        Ms,
        {
          variant: "ghost",
          className: "w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10",
          onClick: n,
          children: [
            /* @__PURE__ */ R.jsx(OB, { className: "h-4 w-4" }),
            "Delete"
          ]
        }
      )
    }
  );
}
function JH({
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
      nz,
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
          /* @__PURE__ */ R.jsx(az, {}),
          /* @__PURE__ */ R.jsx(pz, {}),
          /* @__PURE__ */ R.jsx(ra, { position: "top-right", children: /* @__PURE__ */ R.jsx(
            QH,
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
      ZH,
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
function p0(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ld, J_;
function e8() {
  if (J_) return Ld;
  J_ = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ld = e, Ld;
}
var jd, eb;
function ki() {
  if (eb) return jd;
  eb = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return jd = e, jd;
}
var Dd, tb;
function Yu() {
  if (tb) return Dd;
  tb = 1;
  var e = ki();
  function t(n, o) {
    for (var i = n.length; i--; )
      if (e(n[i][0], o))
        return i;
    return -1;
  }
  return Dd = t, Dd;
}
var qd, nb;
function t8() {
  if (nb) return qd;
  nb = 1;
  var e = Yu(), t = Array.prototype, n = t.splice;
  function o(i) {
    var a = this.__data__, l = e(a, i);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : n.call(a, l, 1), --this.size, !0;
  }
  return qd = o, qd;
}
var zd, rb;
function n8() {
  if (rb) return zd;
  rb = 1;
  var e = Yu();
  function t(n) {
    var o = this.__data__, i = e(o, n);
    return i < 0 ? void 0 : o[i][1];
  }
  return zd = t, zd;
}
var Fd, ob;
function r8() {
  if (ob) return Fd;
  ob = 1;
  var e = Yu();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Fd = t, Fd;
}
var $d, ib;
function o8() {
  if (ib) return $d;
  ib = 1;
  var e = Yu();
  function t(n, o) {
    var i = this.__data__, a = e(i, n);
    return a < 0 ? (++this.size, i.push([n, o])) : i[a][1] = o, this;
  }
  return $d = t, $d;
}
var Bd, sb;
function Xu() {
  if (sb) return Bd;
  sb = 1;
  var e = e8(), t = t8(), n = n8(), o = r8(), i = o8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, Bd = a, Bd;
}
var Vd, ab;
function i8() {
  if (ab) return Vd;
  ab = 1;
  var e = Xu();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Vd = t, Vd;
}
var Hd, lb;
function s8() {
  if (lb) return Hd;
  lb = 1;
  function e(t) {
    var n = this.__data__, o = n.delete(t);
    return this.size = n.size, o;
  }
  return Hd = e, Hd;
}
var Wd, ub;
function a8() {
  if (ub) return Wd;
  ub = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Wd = e, Wd;
}
var Ud, cb;
function l8() {
  if (cb) return Ud;
  cb = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ud = e, Ud;
}
var Gd, fb;
function MA() {
  if (fb) return Gd;
  fb = 1;
  var e = typeof Cl == "object" && Cl && Cl.Object === Object && Cl;
  return Gd = e, Gd;
}
var Kd, db;
function wn() {
  if (db) return Kd;
  db = 1;
  var e = MA(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Kd = n, Kd;
}
var Yd, hb;
function Ni() {
  if (hb) return Yd;
  hb = 1;
  var e = wn(), t = e.Symbol;
  return Yd = t, Yd;
}
var Xd, pb;
function u8() {
  if (pb) return Xd;
  pb = 1;
  var e = Ni(), t = Object.prototype, n = t.hasOwnProperty, o = t.toString, i = e ? e.toStringTag : void 0;
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
  return Xd = a, Xd;
}
var Qd, gb;
function c8() {
  if (gb) return Qd;
  gb = 1;
  var e = Object.prototype, t = e.toString;
  function n(o) {
    return t.call(o);
  }
  return Qd = n, Qd;
}
var Zd, mb;
function yo() {
  if (mb) return Zd;
  mb = 1;
  var e = Ni(), t = u8(), n = c8(), o = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? i : o : a && a in Object(u) ? t(u) : n(u);
  }
  return Zd = l, Zd;
}
var Jd, vb;
function Zt() {
  if (vb) return Jd;
  vb = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Jd = e, Jd;
}
var eh, yb;
function sa() {
  if (yb) return eh;
  yb = 1;
  var e = yo(), t = Zt(), n = "[object AsyncFunction]", o = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == i || f == n || f == a;
  }
  return eh = l, eh;
}
var th, wb;
function f8() {
  if (wb) return th;
  wb = 1;
  var e = wn(), t = e["__core-js_shared__"];
  return th = t, th;
}
var nh, xb;
function d8() {
  if (xb) return nh;
  xb = 1;
  var e = f8(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function n(o) {
    return !!t && t in o;
  }
  return nh = n, nh;
}
var rh, _b;
function OA() {
  if (_b) return rh;
  _b = 1;
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
  return rh = n, rh;
}
var oh, bb;
function h8() {
  if (bb) return oh;
  bb = 1;
  var e = sa(), t = d8(), n = Zt(), o = OA(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
    "^" + f.call(d).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function p(m) {
    if (!n(m) || t(m))
      return !1;
    var v = e(m) ? h : a;
    return v.test(o(m));
  }
  return oh = p, oh;
}
var ih, Sb;
function p8() {
  if (Sb) return ih;
  Sb = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return ih = e, ih;
}
var sh, Eb;
function wo() {
  if (Eb) return sh;
  Eb = 1;
  var e = h8(), t = p8();
  function n(o, i) {
    var a = t(o, i);
    return e(a) ? a : void 0;
  }
  return sh = n, sh;
}
var ah, Cb;
function g0() {
  if (Cb) return ah;
  Cb = 1;
  var e = wo(), t = wn(), n = e(t, "Map");
  return ah = n, ah;
}
var lh, kb;
function Qu() {
  if (kb) return lh;
  kb = 1;
  var e = wo(), t = e(Object, "create");
  return lh = t, lh;
}
var uh, Nb;
function g8() {
  if (Nb) return uh;
  Nb = 1;
  var e = Qu();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return uh = t, uh;
}
var ch, Rb;
function m8() {
  if (Rb) return ch;
  Rb = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return ch = e, ch;
}
var fh, Pb;
function v8() {
  if (Pb) return fh;
  Pb = 1;
  var e = Qu(), t = "__lodash_hash_undefined__", n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    var l = this.__data__;
    if (e) {
      var u = l[a];
      return u === t ? void 0 : u;
    }
    return o.call(l, a) ? l[a] : void 0;
  }
  return fh = i, fh;
}
var dh, Tb;
function y8() {
  if (Tb) return dh;
  Tb = 1;
  var e = Qu(), t = Object.prototype, n = t.hasOwnProperty;
  function o(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : n.call(a, i);
  }
  return dh = o, dh;
}
var hh, Ab;
function w8() {
  if (Ab) return hh;
  Ab = 1;
  var e = Qu(), t = "__lodash_hash_undefined__";
  function n(o, i) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && i === void 0 ? t : i, this;
  }
  return hh = n, hh;
}
var ph, Ib;
function x8() {
  if (Ib) return ph;
  Ib = 1;
  var e = g8(), t = m8(), n = v8(), o = y8(), i = w8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, ph = a, ph;
}
var gh, Mb;
function _8() {
  if (Mb) return gh;
  Mb = 1;
  var e = x8(), t = Xu(), n = g0();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return gh = o, gh;
}
var mh, Ob;
function b8() {
  if (Ob) return mh;
  Ob = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return mh = e, mh;
}
var vh, Lb;
function Zu() {
  if (Lb) return vh;
  Lb = 1;
  var e = b8();
  function t(n, o) {
    var i = n.__data__;
    return e(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
  }
  return vh = t, vh;
}
var yh, jb;
function S8() {
  if (jb) return yh;
  jb = 1;
  var e = Zu();
  function t(n) {
    var o = e(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  return yh = t, yh;
}
var wh, Db;
function E8() {
  if (Db) return wh;
  Db = 1;
  var e = Zu();
  function t(n) {
    return e(this, n).get(n);
  }
  return wh = t, wh;
}
var xh, qb;
function C8() {
  if (qb) return xh;
  qb = 1;
  var e = Zu();
  function t(n) {
    return e(this, n).has(n);
  }
  return xh = t, xh;
}
var _h, zb;
function k8() {
  if (zb) return _h;
  zb = 1;
  var e = Zu();
  function t(n, o) {
    var i = e(this, n), a = i.size;
    return i.set(n, o), this.size += i.size == a ? 0 : 1, this;
  }
  return _h = t, _h;
}
var bh, Fb;
function m0() {
  if (Fb) return bh;
  Fb = 1;
  var e = _8(), t = S8(), n = E8(), o = C8(), i = k8();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, bh = a, bh;
}
var Sh, $b;
function N8() {
  if ($b) return Sh;
  $b = 1;
  var e = Xu(), t = g0(), n = m0(), o = 200;
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
  return Sh = i, Sh;
}
var Eh, Bb;
function Ju() {
  if (Bb) return Eh;
  Bb = 1;
  var e = Xu(), t = i8(), n = s8(), o = a8(), i = l8(), a = N8();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = n, l.prototype.get = o, l.prototype.has = i, l.prototype.set = a, Eh = l, Eh;
}
var Ch, Vb;
function v0() {
  if (Vb) return Ch;
  Vb = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i && n(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return Ch = e, Ch;
}
var kh, Hb;
function LA() {
  if (Hb) return kh;
  Hb = 1;
  var e = wo(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return kh = t, kh;
}
var Nh, Wb;
function ec() {
  if (Wb) return Nh;
  Wb = 1;
  var e = LA();
  function t(n, o, i) {
    o == "__proto__" && e ? e(n, o, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : n[o] = i;
  }
  return Nh = t, Nh;
}
var Rh, Ub;
function tc() {
  if (Ub) return Rh;
  Ub = 1;
  var e = ec(), t = ki(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return Rh = i, Rh;
}
var Ph, Gb;
function aa() {
  if (Gb) return Ph;
  Gb = 1;
  var e = tc(), t = ec();
  function n(o, i, a, l) {
    var u = !a;
    a || (a = {});
    for (var f = -1, d = i.length; ++f < d; ) {
      var h = i[f], p = l ? l(a[h], o[h], h, a, o) : void 0;
      p === void 0 && (p = o[h]), u ? t(a, h, p) : e(a, h, p);
    }
    return a;
  }
  return Ph = n, Ph;
}
var Th, Kb;
function R8() {
  if (Kb) return Th;
  Kb = 1;
  function e(t, n) {
    for (var o = -1, i = Array(t); ++o < t; )
      i[o] = n(o);
    return i;
  }
  return Th = e, Th;
}
var Ah, Yb;
function Dn() {
  if (Yb) return Ah;
  Yb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Ah = e, Ah;
}
var Ih, Xb;
function P8() {
  if (Xb) return Ih;
  Xb = 1;
  var e = yo(), t = Dn(), n = "[object Arguments]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Ih = o, Ih;
}
var Mh, Qb;
function la() {
  if (Qb) return Mh;
  Qb = 1;
  var e = P8(), t = Dn(), n = Object.prototype, o = n.hasOwnProperty, i = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !i.call(l, "callee");
  };
  return Mh = a, Mh;
}
var Oh, Zb;
function rt() {
  if (Zb) return Oh;
  Zb = 1;
  var e = Array.isArray;
  return Oh = e, Oh;
}
var Rs = { exports: {} }, Lh, Jb;
function T8() {
  if (Jb) return Lh;
  Jb = 1;
  function e() {
    return !1;
  }
  return Lh = e, Lh;
}
Rs.exports;
var eS;
function Ri() {
  return eS || (eS = 1, (function(e, t) {
    var n = wn(), o = T8(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, l = a && a.exports === i, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(Rs, Rs.exports)), Rs.exports;
}
var jh, tS;
function nc() {
  if (tS) return jh;
  tS = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(o, i) {
    var a = typeof o;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < i;
  }
  return jh = n, jh;
}
var Dh, nS;
function y0() {
  if (nS) return Dh;
  nS = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Dh = t, Dh;
}
var qh, rS;
function A8() {
  if (rS) return qh;
  rS = 1;
  var e = yo(), t = y0(), n = Dn(), o = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", E = "[object String]", y = "[object WeakMap]", x = "[object ArrayBuffer]", b = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", N = "[object Int8Array]", P = "[object Int16Array]", T = "[object Int32Array]", A = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", G = "[object Uint32Array]", B = {};
  B[C] = B[_] = B[N] = B[P] = B[T] = B[A] = B[O] = B[D] = B[G] = !0, B[o] = B[i] = B[x] = B[a] = B[b] = B[l] = B[u] = B[f] = B[d] = B[h] = B[p] = B[m] = B[v] = B[E] = B[y] = !1;
  function V(X) {
    return n(X) && t(X.length) && !!B[e(X)];
  }
  return qh = V, qh;
}
var zh, oS;
function rc() {
  if (oS) return zh;
  oS = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return zh = e, zh;
}
var Ps = { exports: {} };
Ps.exports;
var iS;
function w0() {
  return iS || (iS = 1, (function(e, t) {
    var n = MA(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a && n.process, u = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Ps, Ps.exports)), Ps.exports;
}
var Fh, sS;
function ua() {
  if (sS) return Fh;
  sS = 1;
  var e = A8(), t = rc(), n = w0(), o = n && n.isTypedArray, i = o ? t(o) : e;
  return Fh = i, Fh;
}
var $h, aS;
function jA() {
  if (aS) return $h;
  aS = 1;
  var e = R8(), t = la(), n = rt(), o = Ri(), i = nc(), a = ua(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var p = n(d), m = !p && t(d), v = !p && !m && o(d), E = !p && !m && !v && a(d), y = p || m || v || E, x = y ? e(d.length, String) : [], b = x.length;
    for (var C in d)
      (h || u.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      i(C, b))) && x.push(C);
    return x;
  }
  return $h = f, $h;
}
var Bh, lS;
function oc() {
  if (lS) return Bh;
  lS = 1;
  var e = Object.prototype;
  function t(n) {
    var o = n && n.constructor, i = typeof o == "function" && o.prototype || e;
    return n === i;
  }
  return Bh = t, Bh;
}
var Vh, uS;
function DA() {
  if (uS) return Vh;
  uS = 1;
  function e(t, n) {
    return function(o) {
      return t(n(o));
    };
  }
  return Vh = e, Vh;
}
var Hh, cS;
function I8() {
  if (cS) return Hh;
  cS = 1;
  var e = DA(), t = e(Object.keys, Object);
  return Hh = t, Hh;
}
var Wh, fS;
function x0() {
  if (fS) return Wh;
  fS = 1;
  var e = oc(), t = I8(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var l = [];
    for (var u in Object(a))
      o.call(a, u) && u != "constructor" && l.push(u);
    return l;
  }
  return Wh = i, Wh;
}
var Uh, dS;
function er() {
  if (dS) return Uh;
  dS = 1;
  var e = sa(), t = y0();
  function n(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Uh = n, Uh;
}
var Gh, hS;
function jr() {
  if (hS) return Gh;
  hS = 1;
  var e = jA(), t = x0(), n = er();
  function o(i) {
    return n(i) ? e(i) : t(i);
  }
  return Gh = o, Gh;
}
var Kh, pS;
function M8() {
  if (pS) return Kh;
  pS = 1;
  var e = aa(), t = jr();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Kh = n, Kh;
}
var Yh, gS;
function O8() {
  if (gS) return Yh;
  gS = 1;
  function e(t) {
    var n = [];
    if (t != null)
      for (var o in Object(t))
        n.push(o);
    return n;
  }
  return Yh = e, Yh;
}
var Xh, mS;
function L8() {
  if (mS) return Xh;
  mS = 1;
  var e = Zt(), t = oc(), n = O8(), o = Object.prototype, i = o.hasOwnProperty;
  function a(l) {
    if (!e(l))
      return n(l);
    var u = t(l), f = [];
    for (var d in l)
      d == "constructor" && (u || !i.call(l, d)) || f.push(d);
    return f;
  }
  return Xh = a, Xh;
}
var Qh, vS;
function xo() {
  if (vS) return Qh;
  vS = 1;
  var e = jA(), t = L8(), n = er();
  function o(i) {
    return n(i) ? e(i, !0) : t(i);
  }
  return Qh = o, Qh;
}
var Zh, yS;
function j8() {
  if (yS) return Zh;
  yS = 1;
  var e = aa(), t = xo();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Zh = n, Zh;
}
var Ts = { exports: {} };
Ts.exports;
var wS;
function qA() {
  return wS || (wS = 1, (function(e, t) {
    var n = wn(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a ? n.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
    function f(d, h) {
      if (h)
        return d.slice();
      var p = d.length, m = u ? u(p) : new d.constructor(p);
      return d.copy(m), m;
    }
    e.exports = f;
  })(Ts, Ts.exports)), Ts.exports;
}
var Jh, xS;
function zA() {
  if (xS) return Jh;
  xS = 1;
  function e(t, n) {
    var o = -1, i = t.length;
    for (n || (n = Array(i)); ++o < i; )
      n[o] = t[o];
    return n;
  }
  return Jh = e, Jh;
}
var ep, _S;
function FA() {
  if (_S) return ep;
  _S = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = 0, l = []; ++o < i; ) {
      var u = t[o];
      n(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return ep = e, ep;
}
var tp, bS;
function $A() {
  if (bS) return tp;
  bS = 1;
  function e() {
    return [];
  }
  return tp = e, tp;
}
var np, SS;
function _0() {
  if (SS) return np;
  SS = 1;
  var e = FA(), t = $A(), n = Object.prototype, o = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(l) {
    return l == null ? [] : (l = Object(l), e(i(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return np = a, np;
}
var rp, ES;
function D8() {
  if (ES) return rp;
  ES = 1;
  var e = aa(), t = _0();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return rp = n, rp;
}
var op, CS;
function b0() {
  if (CS) return op;
  CS = 1;
  function e(t, n) {
    for (var o = -1, i = n.length, a = t.length; ++o < i; )
      t[a + o] = n[o];
    return t;
  }
  return op = e, op;
}
var ip, kS;
function ic() {
  if (kS) return ip;
  kS = 1;
  var e = DA(), t = e(Object.getPrototypeOf, Object);
  return ip = t, ip;
}
var sp, NS;
function BA() {
  if (NS) return sp;
  NS = 1;
  var e = b0(), t = ic(), n = _0(), o = $A(), i = Object.getOwnPropertySymbols, a = i ? function(l) {
    for (var u = []; l; )
      e(u, n(l)), l = t(l);
    return u;
  } : o;
  return sp = a, sp;
}
var ap, RS;
function q8() {
  if (RS) return ap;
  RS = 1;
  var e = aa(), t = BA();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return ap = n, ap;
}
var lp, PS;
function VA() {
  if (PS) return lp;
  PS = 1;
  var e = b0(), t = rt();
  function n(o, i, a) {
    var l = i(o);
    return t(o) ? l : e(l, a(o));
  }
  return lp = n, lp;
}
var up, TS;
function HA() {
  if (TS) return up;
  TS = 1;
  var e = VA(), t = _0(), n = jr();
  function o(i) {
    return e(i, n, t);
  }
  return up = o, up;
}
var cp, AS;
function z8() {
  if (AS) return cp;
  AS = 1;
  var e = VA(), t = BA(), n = xo();
  function o(i) {
    return e(i, n, t);
  }
  return cp = o, cp;
}
var fp, IS;
function F8() {
  if (IS) return fp;
  IS = 1;
  var e = wo(), t = wn(), n = e(t, "DataView");
  return fp = n, fp;
}
var dp, MS;
function $8() {
  if (MS) return dp;
  MS = 1;
  var e = wo(), t = wn(), n = e(t, "Promise");
  return dp = n, dp;
}
var hp, OS;
function WA() {
  if (OS) return hp;
  OS = 1;
  var e = wo(), t = wn(), n = e(t, "Set");
  return hp = n, hp;
}
var pp, LS;
function B8() {
  if (LS) return pp;
  LS = 1;
  var e = wo(), t = wn(), n = e(t, "WeakMap");
  return pp = n, pp;
}
var gp, jS;
function Pi() {
  if (jS) return gp;
  jS = 1;
  var e = F8(), t = g0(), n = $8(), o = WA(), i = B8(), a = yo(), l = OA(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = l(e), E = l(t), y = l(n), x = l(o), b = l(i), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != m || t && C(new t()) != u || n && C(n.resolve()) != d || o && C(new o()) != h || i && C(new i()) != p) && (C = function(_) {
    var N = a(_), P = N == f ? _.constructor : void 0, T = P ? l(P) : "";
    if (T)
      switch (T) {
        case v:
          return m;
        case E:
          return u;
        case y:
          return d;
        case x:
          return h;
        case b:
          return p;
      }
    return N;
  }), gp = C, gp;
}
var mp, DS;
function V8() {
  if (DS) return mp;
  DS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o) {
    var i = o.length, a = new o.constructor(i);
    return i && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return mp = n, mp;
}
var vp, qS;
function UA() {
  if (qS) return vp;
  qS = 1;
  var e = wn(), t = e.Uint8Array;
  return vp = t, vp;
}
var yp, zS;
function S0() {
  if (zS) return yp;
  zS = 1;
  var e = UA();
  function t(n) {
    var o = new n.constructor(n.byteLength);
    return new e(o).set(new e(n)), o;
  }
  return yp = t, yp;
}
var wp, FS;
function H8() {
  if (FS) return wp;
  FS = 1;
  var e = S0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.byteLength);
  }
  return wp = t, wp;
}
var xp, $S;
function W8() {
  if ($S) return xp;
  $S = 1;
  var e = /\w*$/;
  function t(n) {
    var o = new n.constructor(n.source, e.exec(n));
    return o.lastIndex = n.lastIndex, o;
  }
  return xp = t, xp;
}
var _p, BS;
function U8() {
  if (BS) return _p;
  BS = 1;
  var e = Ni(), t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function o(i) {
    return n ? Object(n.call(i)) : {};
  }
  return _p = o, _p;
}
var bp, VS;
function GA() {
  if (VS) return bp;
  VS = 1;
  var e = S0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.length);
  }
  return bp = t, bp;
}
var Sp, HS;
function G8() {
  if (HS) return Sp;
  HS = 1;
  var e = S0(), t = H8(), n = W8(), o = U8(), i = GA(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", p = "[object String]", m = "[object Symbol]", v = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", b = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", N = "[object Uint8Array]", P = "[object Uint8ClampedArray]", T = "[object Uint16Array]", A = "[object Uint32Array]";
  function O(D, G, B) {
    var V = D.constructor;
    switch (G) {
      case v:
        return e(D);
      case a:
      case l:
        return new V(+D);
      case E:
        return t(D, B);
      case y:
      case x:
      case b:
      case C:
      case _:
      case N:
      case P:
      case T:
      case A:
        return i(D, B);
      case u:
        return new V();
      case f:
      case p:
        return new V(D);
      case d:
        return n(D);
      case h:
        return new V();
      case m:
        return o(D);
    }
  }
  return Sp = O, Sp;
}
var Ep, WS;
function KA() {
  if (WS) return Ep;
  WS = 1;
  var e = Zt(), t = Object.create, n = /* @__PURE__ */ (function() {
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
  return Ep = n, Ep;
}
var Cp, US;
function YA() {
  if (US) return Cp;
  US = 1;
  var e = KA(), t = ic(), n = oc();
  function o(i) {
    return typeof i.constructor == "function" && !n(i) ? e(t(i)) : {};
  }
  return Cp = o, Cp;
}
var kp, GS;
function K8() {
  if (GS) return kp;
  GS = 1;
  var e = Pi(), t = Dn(), n = "[object Map]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return kp = o, kp;
}
var Np, KS;
function Y8() {
  if (KS) return Np;
  KS = 1;
  var e = K8(), t = rc(), n = w0(), o = n && n.isMap, i = o ? t(o) : e;
  return Np = i, Np;
}
var Rp, YS;
function X8() {
  if (YS) return Rp;
  YS = 1;
  var e = Pi(), t = Dn(), n = "[object Set]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Rp = o, Rp;
}
var Pp, XS;
function Q8() {
  if (XS) return Pp;
  XS = 1;
  var e = X8(), t = rc(), n = w0(), o = n && n.isSet, i = o ? t(o) : e;
  return Pp = i, Pp;
}
var Tp, QS;
function XA() {
  if (QS) return Tp;
  QS = 1;
  var e = Ju(), t = v0(), n = tc(), o = M8(), i = j8(), a = qA(), l = zA(), u = D8(), f = q8(), d = HA(), h = z8(), p = Pi(), m = V8(), v = G8(), E = YA(), y = rt(), x = Ri(), b = Y8(), C = Zt(), _ = Q8(), N = jr(), P = xo(), T = 1, A = 2, O = 4, D = "[object Arguments]", G = "[object Array]", B = "[object Boolean]", V = "[object Date]", X = "[object Error]", L = "[object Function]", H = "[object GeneratorFunction]", $ = "[object Map]", K = "[object Number]", M = "[object Object]", q = "[object RegExp]", Q = "[object Set]", j = "[object String]", W = "[object Symbol]", ie = "[object WeakMap]", F = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", Y = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", be = "[object Uint32Array]", me = {};
  me[D] = me[G] = me[F] = me[Z] = me[B] = me[V] = me[ee] = me[Y] = me[te] = me[se] = me[ae] = me[$] = me[K] = me[M] = me[q] = me[Q] = me[j] = me[W] = me[ce] = me[de] = me[pe] = me[be] = !0, me[X] = me[L] = me[ie] = !1;
  function Re(Ee, Je, Ue, Ft, ht, at) {
    var Ge, en = Je & T, $t = Je & A, tn = Je & O;
    if (Ue && (Ge = ht ? Ue(Ee, Ft, ht, at) : Ue(Ee)), Ge !== void 0)
      return Ge;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (Ge = m(Ee), !en)
        return l(Ee, Ge);
    } else {
      var _t = p(Ee), Dr = _t == L || _t == H;
      if (x(Ee))
        return a(Ee, en);
      if (_t == M || _t == D || Dr && !ht) {
        if (Ge = $t || Dr ? {} : E(Ee), !en)
          return $t ? f(Ee, i(Ge, Ee)) : u(Ee, o(Ge, Ee));
      } else {
        if (!me[_t])
          return ht ? Ee : {};
        Ge = v(Ee, _t, en);
      }
    }
    at || (at = new e());
    var Vt = at.get(Ee);
    if (Vt)
      return Vt;
    at.set(Ee, Ge), _(Ee) ? Ee.forEach(function(Tt) {
      Ge.add(Re(Tt, Je, Ue, Tt, Ee, at));
    }) : b(Ee) && Ee.forEach(function(Tt, Ht) {
      Ge.set(Ht, Re(Tt, Je, Ue, Ht, Ee, at));
    });
    var qn = tn ? $t ? h : d : $t ? P : N, bo = Bt ? void 0 : qn(Ee);
    return t(bo || Ee, function(Tt, Ht) {
      bo && (Ht = Tt, Tt = Ee[Ht]), n(Ge, Ht, Re(Tt, Je, Ue, Ht, Ee, at));
    }), Ge;
  }
  return Tp = Re, Tp;
}
var Ap, ZS;
function Z8() {
  if (ZS) return Ap;
  ZS = 1;
  var e = XA(), t = 4;
  function n(o) {
    return e(o, t);
  }
  return Ap = n, Ap;
}
var Ip, JS;
function E0() {
  if (JS) return Ip;
  JS = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Ip = e, Ip;
}
var Mp, eE;
function J8() {
  if (eE) return Mp;
  eE = 1;
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
  return Mp = e, Mp;
}
var Op, tE;
function C0() {
  if (tE) return Op;
  tE = 1;
  var e = J8(), t = e();
  return Op = t, Op;
}
var Lp, nE;
function k0() {
  if (nE) return Lp;
  nE = 1;
  var e = C0(), t = jr();
  function n(o, i) {
    return o && e(o, i, t);
  }
  return Lp = n, Lp;
}
var jp, rE;
function e6() {
  if (rE) return jp;
  rE = 1;
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
  return jp = t, jp;
}
var Dp, oE;
function sc() {
  if (oE) return Dp;
  oE = 1;
  var e = k0(), t = e6(), n = t(e);
  return Dp = n, Dp;
}
var qp, iE;
function _o() {
  if (iE) return qp;
  iE = 1;
  function e(t) {
    return t;
  }
  return qp = e, qp;
}
var zp, sE;
function QA() {
  if (sE) return zp;
  sE = 1;
  var e = _o();
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return zp = t, zp;
}
var Fp, aE;
function ZA() {
  if (aE) return Fp;
  aE = 1;
  var e = v0(), t = sc(), n = QA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l));
  }
  return Fp = i, Fp;
}
var $p, lE;
function JA() {
  return lE || (lE = 1, $p = ZA()), $p;
}
var Bp, uE;
function t6() {
  if (uE) return Bp;
  uE = 1;
  var e = sc();
  function t(n, o) {
    var i = [];
    return e(n, function(a, l, u) {
      o(a, l, u) && i.push(a);
    }), i;
  }
  return Bp = t, Bp;
}
var Vp, cE;
function n6() {
  if (cE) return Vp;
  cE = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Vp = t, Vp;
}
var Hp, fE;
function r6() {
  if (fE) return Hp;
  fE = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Hp = e, Hp;
}
var Wp, dE;
function eI() {
  if (dE) return Wp;
  dE = 1;
  var e = m0(), t = n6(), n = r6();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(i[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = n, Wp = o, Wp;
}
var Up, hE;
function o6() {
  if (hE) return Up;
  hE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
      if (n(t[o], o, t))
        return !0;
    return !1;
  }
  return Up = e, Up;
}
var Gp, pE;
function tI() {
  if (pE) return Gp;
  pE = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Gp = e, Gp;
}
var Kp, gE;
function nI() {
  if (gE) return Kp;
  gE = 1;
  var e = eI(), t = o6(), n = tI(), o = 1, i = 2;
  function a(l, u, f, d, h, p) {
    var m = f & o, v = l.length, E = u.length;
    if (v != E && !(m && E > v))
      return !1;
    var y = p.get(l), x = p.get(u);
    if (y && x)
      return y == u && x == l;
    var b = -1, C = !0, _ = f & i ? new e() : void 0;
    for (p.set(l, u), p.set(u, l); ++b < v; ) {
      var N = l[b], P = u[b];
      if (d)
        var T = m ? d(P, N, b, u, l, p) : d(N, P, b, l, u, p);
      if (T !== void 0) {
        if (T)
          continue;
        C = !1;
        break;
      }
      if (_) {
        if (!t(u, function(A, O) {
          if (!n(_, O) && (N === A || h(N, A, f, d, p)))
            return _.push(O);
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
  return Kp = a, Kp;
}
var Yp, mE;
function i6() {
  if (mE) return Yp;
  mE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i, a) {
      o[++n] = [a, i];
    }), o;
  }
  return Yp = e, Yp;
}
var Xp, vE;
function N0() {
  if (vE) return Xp;
  vE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i) {
      o[++n] = i;
    }), o;
  }
  return Xp = e, Xp;
}
var Qp, yE;
function s6() {
  if (yE) return Qp;
  yE = 1;
  var e = Ni(), t = UA(), n = ki(), o = nI(), i = i6(), a = N0(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", E = "[object Set]", y = "[object String]", x = "[object Symbol]", b = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, N = _ ? _.valueOf : void 0;
  function P(T, A, O, D, G, B, V) {
    switch (O) {
      case C:
        if (T.byteLength != A.byteLength || T.byteOffset != A.byteOffset)
          return !1;
        T = T.buffer, A = A.buffer;
      case b:
        return !(T.byteLength != A.byteLength || !B(new t(T), new t(A)));
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
        var X = i;
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
        if (N)
          return N.call(T) == N.call(A);
    }
    return !1;
  }
  return Qp = P, Qp;
}
var Zp, wE;
function a6() {
  if (wE) return Zp;
  wE = 1;
  var e = HA(), t = 1, n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u, f, d, h) {
    var p = u & t, m = e(a), v = m.length, E = e(l), y = E.length;
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
    var N = !0;
    h.set(a, l), h.set(l, a);
    for (var P = p; ++x < v; ) {
      b = m[x];
      var T = a[b], A = l[b];
      if (f)
        var O = p ? f(A, T, b, l, a, h) : f(T, A, b, a, l, h);
      if (!(O === void 0 ? T === A || d(T, A, u, f, h) : O)) {
        N = !1;
        break;
      }
      P || (P = b == "constructor");
    }
    if (N && !P) {
      var D = a.constructor, G = l.constructor;
      D != G && "constructor" in a && "constructor" in l && !(typeof D == "function" && D instanceof D && typeof G == "function" && G instanceof G) && (N = !1);
    }
    return h.delete(a), h.delete(l), N;
  }
  return Zp = i, Zp;
}
var Jp, xE;
function l6() {
  if (xE) return Jp;
  xE = 1;
  var e = Ju(), t = nI(), n = s6(), o = a6(), i = Pi(), a = rt(), l = Ri(), u = ua(), f = 1, d = "[object Arguments]", h = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function E(y, x, b, C, _, N) {
    var P = a(y), T = a(x), A = P ? h : i(y), O = T ? h : i(x);
    A = A == d ? p : A, O = O == d ? p : O;
    var D = A == p, G = O == p, B = A == O;
    if (B && l(y)) {
      if (!l(x))
        return !1;
      P = !0, D = !1;
    }
    if (B && !D)
      return N || (N = new e()), P || u(y) ? t(y, x, b, C, _, N) : n(y, x, A, b, C, _, N);
    if (!(b & f)) {
      var V = D && v.call(y, "__wrapped__"), X = G && v.call(x, "__wrapped__");
      if (V || X) {
        var L = V ? y.value() : y, H = X ? x.value() : x;
        return N || (N = new e()), _(L, H, b, C, N);
      }
    }
    return B ? (N || (N = new e()), o(y, x, b, C, _, N)) : !1;
  }
  return Jp = E, Jp;
}
var eg, _E;
function rI() {
  if (_E) return eg;
  _E = 1;
  var e = l6(), t = Dn();
  function n(o, i, a, l, u) {
    return o === i ? !0 : o == null || i == null || !t(o) && !t(i) ? o !== o && i !== i : e(o, i, a, l, n, u);
  }
  return eg = n, eg;
}
var tg, bE;
function u6() {
  if (bE) return tg;
  bE = 1;
  var e = Ju(), t = rI(), n = 1, o = 2;
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
        var x = new e();
        if (f)
          var b = f(E, y, v, a, l, x);
        if (!(b === void 0 ? t(y, E, n | o, f, x) : b))
          return !1;
      }
    }
    return !0;
  }
  return tg = i, tg;
}
var ng, SE;
function oI() {
  if (SE) return ng;
  SE = 1;
  var e = Zt();
  function t(n) {
    return n === n && !e(n);
  }
  return ng = t, ng;
}
var rg, EE;
function c6() {
  if (EE) return rg;
  EE = 1;
  var e = oI(), t = jr();
  function n(o) {
    for (var i = t(o), a = i.length; a--; ) {
      var l = i[a], u = o[l];
      i[a] = [l, u, e(u)];
    }
    return i;
  }
  return rg = n, rg;
}
var og, CE;
function iI() {
  if (CE) return og;
  CE = 1;
  function e(t, n) {
    return function(o) {
      return o == null ? !1 : o[t] === n && (n !== void 0 || t in Object(o));
    };
  }
  return og = e, og;
}
var ig, kE;
function f6() {
  if (kE) return ig;
  kE = 1;
  var e = u6(), t = c6(), n = iI();
  function o(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(l) {
      return l === i || e(l, i, a);
    };
  }
  return ig = o, ig;
}
var sg, NE;
function Ti() {
  if (NE) return sg;
  NE = 1;
  var e = yo(), t = Dn(), n = "[object Symbol]";
  function o(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return sg = o, sg;
}
var ag, RE;
function R0() {
  if (RE) return ag;
  RE = 1;
  var e = rt(), t = Ti(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function i(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !n.test(a) || l != null && a in Object(l);
  }
  return ag = i, ag;
}
var lg, PE;
function d6() {
  if (PE) return lg;
  PE = 1;
  var e = m0(), t = "Expected a function";
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
  return n.Cache = e, lg = n, lg;
}
var ug, TE;
function h6() {
  if (TE) return ug;
  TE = 1;
  var e = d6(), t = 500;
  function n(o) {
    var i = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = i.cache;
    return i;
  }
  return ug = n, ug;
}
var cg, AE;
function p6() {
  if (AE) return cg;
  AE = 1;
  var e = h6(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, o = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(n, "$1") : u || l);
    }), a;
  });
  return cg = o, cg;
}
var fg, IE;
function ac() {
  if (IE) return fg;
  IE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = Array(i); ++o < i; )
      a[o] = n(t[o], o, t);
    return a;
  }
  return fg = e, fg;
}
var dg, ME;
function g6() {
  if (ME) return dg;
  ME = 1;
  var e = Ni(), t = ac(), n = rt(), o = Ti(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
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
  return dg = l, dg;
}
var hg, OE;
function sI() {
  if (OE) return hg;
  OE = 1;
  var e = g6();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return hg = t, hg;
}
var pg, LE;
function lc() {
  if (LE) return pg;
  LE = 1;
  var e = rt(), t = R0(), n = p6(), o = sI();
  function i(a, l) {
    return e(a) ? a : t(a, l) ? [a] : n(o(a));
  }
  return pg = i, pg;
}
var gg, jE;
function ca() {
  if (jE) return gg;
  jE = 1;
  var e = Ti();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var o = n + "";
    return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
  }
  return gg = t, gg;
}
var mg, DE;
function uc() {
  if (DE) return mg;
  DE = 1;
  var e = lc(), t = ca();
  function n(o, i) {
    i = e(i, o);
    for (var a = 0, l = i.length; o != null && a < l; )
      o = o[t(i[a++])];
    return a && a == l ? o : void 0;
  }
  return mg = n, mg;
}
var vg, qE;
function m6() {
  if (qE) return vg;
  qE = 1;
  var e = uc();
  function t(n, o, i) {
    var a = n == null ? void 0 : e(n, o);
    return a === void 0 ? i : a;
  }
  return vg = t, vg;
}
var yg, zE;
function v6() {
  if (zE) return yg;
  zE = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return yg = e, yg;
}
var wg, FE;
function aI() {
  if (FE) return wg;
  FE = 1;
  var e = lc(), t = la(), n = rt(), o = nc(), i = y0(), a = ca();
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
  return wg = l, wg;
}
var xg, $E;
function lI() {
  if ($E) return xg;
  $E = 1;
  var e = v6(), t = aI();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return xg = n, xg;
}
var _g, BE;
function y6() {
  if (BE) return _g;
  BE = 1;
  var e = rI(), t = m6(), n = lI(), o = R0(), i = oI(), a = iI(), l = ca(), u = 1, f = 2;
  function d(h, p) {
    return o(h) && i(p) ? a(l(h), p) : function(m) {
      var v = t(m, h);
      return v === void 0 && v === p ? n(m, h) : e(p, v, u | f);
    };
  }
  return _g = d, _g;
}
var bg, VE;
function uI() {
  if (VE) return bg;
  VE = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return bg = e, bg;
}
var Sg, HE;
function w6() {
  if (HE) return Sg;
  HE = 1;
  var e = uc();
  function t(n) {
    return function(o) {
      return e(o, n);
    };
  }
  return Sg = t, Sg;
}
var Eg, WE;
function x6() {
  if (WE) return Eg;
  WE = 1;
  var e = uI(), t = w6(), n = R0(), o = ca();
  function i(a) {
    return n(a) ? e(o(a)) : t(a);
  }
  return Eg = i, Eg;
}
var Cg, UE;
function tr() {
  if (UE) return Cg;
  UE = 1;
  var e = f6(), t = y6(), n = _o(), o = rt(), i = x6();
  function a(l) {
    return typeof l == "function" ? l : l == null ? n : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : i(l);
  }
  return Cg = a, Cg;
}
var kg, GE;
function cI() {
  if (GE) return kg;
  GE = 1;
  var e = FA(), t = t6(), n = tr(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l, 3));
  }
  return kg = i, kg;
}
var Ng, KE;
function _6() {
  if (KE) return Ng;
  KE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o, i) {
    return o != null && t.call(o, i);
  }
  return Ng = n, Ng;
}
var Rg, YE;
function fI() {
  if (YE) return Rg;
  YE = 1;
  var e = _6(), t = aI();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Rg = n, Rg;
}
var Pg, XE;
function b6() {
  if (XE) return Pg;
  XE = 1;
  var e = x0(), t = Pi(), n = la(), o = rt(), i = er(), a = Ri(), l = oc(), u = ua(), f = "[object Map]", d = "[object Set]", h = Object.prototype, p = h.hasOwnProperty;
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
  return Pg = m, Pg;
}
var Tg, QE;
function dI() {
  if (QE) return Tg;
  QE = 1;
  function e(t) {
    return t === void 0;
  }
  return Tg = e, Tg;
}
var Ag, ZE;
function hI() {
  if (ZE) return Ag;
  ZE = 1;
  var e = sc(), t = er();
  function n(o, i) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = i(u, f, d);
    }), l;
  }
  return Ag = n, Ag;
}
var Ig, JE;
function pI() {
  if (JE) return Ig;
  JE = 1;
  var e = ac(), t = tr(), n = hI(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : n;
    return u(a, t(l, 3));
  }
  return Ig = i, Ig;
}
var Mg, eC;
function S6() {
  if (eC) return Mg;
  eC = 1;
  function e(t, n, o, i) {
    var a = -1, l = t == null ? 0 : t.length;
    for (i && l && (o = t[++a]); ++a < l; )
      o = n(o, t[a], a, t);
    return o;
  }
  return Mg = e, Mg;
}
var Og, tC;
function E6() {
  if (tC) return Og;
  tC = 1;
  function e(t, n, o, i, a) {
    return a(t, function(l, u, f) {
      o = i ? (i = !1, l) : n(o, l, u, f);
    }), o;
  }
  return Og = e, Og;
}
var Lg, nC;
function gI() {
  if (nC) return Lg;
  nC = 1;
  var e = S6(), t = sc(), n = tr(), o = E6(), i = rt();
  function a(l, u, f) {
    var d = i(l) ? e : o, h = arguments.length < 3;
    return d(l, n(u, 4), f, h, t);
  }
  return Lg = a, Lg;
}
var jg, rC;
function C6() {
  if (rC) return jg;
  rC = 1;
  var e = yo(), t = rt(), n = Dn(), o = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == o;
  }
  return jg = i, jg;
}
var Dg, oC;
function k6() {
  if (oC) return Dg;
  oC = 1;
  var e = uI(), t = e("length");
  return Dg = t, Dg;
}
var qg, iC;
function N6() {
  if (iC) return qg;
  iC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + i + a + "]");
  function f(d) {
    return u.test(d);
  }
  return qg = f, qg;
}
var zg, sC;
function R6() {
  if (sC) return zg;
  sC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", E = d + "?", y = "[" + a + "]?", x = "(?:" + v + "(?:" + [h, p, m].join("|") + ")" + y + E + ")*", b = y + E + x, C = "(?:" + [h + u + "?", u, p, m, l].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + b, "g");
  function N(P) {
    for (var T = _.lastIndex = 0; _.test(P); )
      ++T;
    return T;
  }
  return zg = N, zg;
}
var Fg, aC;
function P6() {
  if (aC) return Fg;
  aC = 1;
  var e = k6(), t = N6(), n = R6();
  function o(i) {
    return t(i) ? n(i) : e(i);
  }
  return Fg = o, Fg;
}
var $g, lC;
function T6() {
  if (lC) return $g;
  lC = 1;
  var e = x0(), t = Pi(), n = er(), o = C6(), i = P6(), a = "[object Map]", l = "[object Set]";
  function u(f) {
    if (f == null)
      return 0;
    if (n(f))
      return o(f) ? i(f) : f.length;
    var d = t(f);
    return d == a || d == l ? f.size : e(f).length;
  }
  return $g = u, $g;
}
var Bg, uC;
function A6() {
  if (uC) return Bg;
  uC = 1;
  var e = v0(), t = KA(), n = k0(), o = tr(), i = ic(), a = rt(), l = Ri(), u = sa(), f = Zt(), d = ua();
  function h(p, m, v) {
    var E = a(p), y = E || l(p) || d(p);
    if (m = o(m, 4), v == null) {
      var x = p && p.constructor;
      y ? v = E ? new x() : [] : f(p) ? v = u(x) ? t(i(p)) : {} : v = {};
    }
    return (y ? e : n)(p, function(b, C, _) {
      return m(v, b, C, _);
    }), v;
  }
  return Bg = h, Bg;
}
var Vg, cC;
function I6() {
  if (cC) return Vg;
  cC = 1;
  var e = Ni(), t = la(), n = rt(), o = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return n(a) || t(a) || !!(o && a && a[o]);
  }
  return Vg = i, Vg;
}
var Hg, fC;
function P0() {
  if (fC) return Hg;
  fC = 1;
  var e = b0(), t = I6();
  function n(o, i, a, l, u) {
    var f = -1, d = o.length;
    for (a || (a = t), u || (u = []); ++f < d; ) {
      var h = o[f];
      i > 0 && a(h) ? i > 1 ? n(h, i - 1, a, l, u) : e(u, h) : l || (u[u.length] = h);
    }
    return u;
  }
  return Hg = n, Hg;
}
var Wg, dC;
function M6() {
  if (dC) return Wg;
  dC = 1;
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
  return Wg = e, Wg;
}
var Ug, hC;
function mI() {
  if (hC) return Ug;
  hC = 1;
  var e = M6(), t = Math.max;
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
  return Ug = n, Ug;
}
var Gg, pC;
function O6() {
  if (pC) return Gg;
  pC = 1;
  var e = E0(), t = LA(), n = _o(), o = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Gg = o, Gg;
}
var Kg, gC;
function L6() {
  if (gC) return Kg;
  gC = 1;
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
  return Kg = o, Kg;
}
var Yg, mC;
function vI() {
  if (mC) return Yg;
  mC = 1;
  var e = O6(), t = L6(), n = t(e);
  return Yg = n, Yg;
}
var Xg, vC;
function cc() {
  if (vC) return Xg;
  vC = 1;
  var e = _o(), t = mI(), n = vI();
  function o(i, a) {
    return n(t(i, a, e), i + "");
  }
  return Xg = o, Xg;
}
var Qg, yC;
function yI() {
  if (yC) return Qg;
  yC = 1;
  function e(t, n, o, i) {
    for (var a = t.length, l = o + (i ? 1 : -1); i ? l-- : ++l < a; )
      if (n(t[l], l, t))
        return l;
    return -1;
  }
  return Qg = e, Qg;
}
var Zg, wC;
function j6() {
  if (wC) return Zg;
  wC = 1;
  function e(t) {
    return t !== t;
  }
  return Zg = e, Zg;
}
var Jg, xC;
function D6() {
  if (xC) return Jg;
  xC = 1;
  function e(t, n, o) {
    for (var i = o - 1, a = t.length; ++i < a; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return Jg = e, Jg;
}
var em, _C;
function q6() {
  if (_C) return em;
  _C = 1;
  var e = yI(), t = j6(), n = D6();
  function o(i, a, l) {
    return a === a ? n(i, a, l) : e(i, t, l);
  }
  return em = o, em;
}
var tm, bC;
function z6() {
  if (bC) return tm;
  bC = 1;
  var e = q6();
  function t(n, o) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, o, 0) > -1;
  }
  return tm = t, tm;
}
var nm, SC;
function F6() {
  if (SC) return nm;
  SC = 1;
  function e(t, n, o) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (o(n, t[i]))
        return !0;
    return !1;
  }
  return nm = e, nm;
}
var rm, EC;
function $6() {
  if (EC) return rm;
  EC = 1;
  function e() {
  }
  return rm = e, rm;
}
var om, CC;
function B6() {
  if (CC) return om;
  CC = 1;
  var e = WA(), t = $6(), n = N0(), o = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return om = i, om;
}
var im, kC;
function V6() {
  if (kC) return im;
  kC = 1;
  var e = eI(), t = z6(), n = F6(), o = tI(), i = B6(), a = N0(), l = 200;
  function u(f, d, h) {
    var p = -1, m = t, v = f.length, E = !0, y = [], x = y;
    if (h)
      E = !1, m = n;
    else if (v >= l) {
      var b = d ? null : i(f);
      if (b)
        return a(b);
      E = !1, m = o, x = new e();
    } else
      x = d ? [] : y;
    e:
      for (; ++p < v; ) {
        var C = f[p], _ = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, E && _ === _) {
          for (var N = x.length; N--; )
            if (x[N] === _)
              continue e;
          d && x.push(_), y.push(C);
        } else m(x, _, h) || (x !== y && x.push(_), y.push(C));
      }
    return y;
  }
  return im = u, im;
}
var sm, NC;
function wI() {
  if (NC) return sm;
  NC = 1;
  var e = er(), t = Dn();
  function n(o) {
    return t(o) && e(o);
  }
  return sm = n, sm;
}
var am, RC;
function H6() {
  if (RC) return am;
  RC = 1;
  var e = P0(), t = cc(), n = V6(), o = wI(), i = t(function(a) {
    return n(e(a, 1, o, !0));
  });
  return am = i, am;
}
var lm, PC;
function W6() {
  if (PC) return lm;
  PC = 1;
  var e = ac();
  function t(n, o) {
    return e(o, function(i) {
      return n[i];
    });
  }
  return lm = t, lm;
}
var um, TC;
function xI() {
  if (TC) return um;
  TC = 1;
  var e = W6(), t = jr();
  function n(o) {
    return o == null ? [] : e(o, t(o));
  }
  return um = n, um;
}
var cm, AC;
function Jt() {
  if (AC) return cm;
  AC = 1;
  var e;
  if (typeof p0 == "function")
    try {
      e = {
        clone: Z8(),
        constant: E0(),
        each: JA(),
        filter: cI(),
        has: fI(),
        isArray: rt(),
        isEmpty: b6(),
        isFunction: sa(),
        isUndefined: dI(),
        keys: jr(),
        map: pI(),
        reduce: gI(),
        size: T6(),
        transform: A6(),
        union: H6(),
        values: xI()
      };
    } catch {
    }
  return e || (e = window._), cm = e, cm;
}
var fm, IC;
function T0() {
  if (IC) return fm;
  IC = 1;
  var e = Jt();
  fm = i;
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
    e.each(this._nodes, function(y, x) {
      h(x) && p.setNode(x, y);
    }), e.each(this._edgeObjs, function(y) {
      p.hasNode(y.v) && p.hasNode(y.w) && p.setEdge(y, m.edge(y));
    });
    var v = {};
    function E(y) {
      var x = m.parent(y);
      return x === void 0 || p.hasNode(x) ? (v[y] = x, x) : x in v ? v[x] : E(x);
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
    var x = u(this._isDirected, h, p, m);
    if (e.has(this._edgeLabels, x))
      return E && (this._edgeLabels[x] = v), this;
    if (!e.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(h), this.setNode(p), this._edgeLabels[x] = E ? v : this._defaultEdgeLabelFn(h, p, m);
    var b = f(this._isDirected, h, p, m);
    return h = b.v, p = b.w, Object.freeze(b), this._edgeObjs[x] = b, a(this._preds[p], h), a(this._sucs[h], p), this._in[p][x] = b, this._out[h][x] = b, this._edgeCount++, this;
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
      var x = E;
      E = y, y = x;
    }
    return E + o + y + o + (e.isUndefined(v) ? t : v);
  }
  function f(h, p, m, v) {
    var E = "" + p, y = "" + m;
    if (!h && E > y) {
      var x = E;
      E = y, y = x;
    }
    var b = { v: E, w: y };
    return v && (b.name = v), b;
  }
  function d(h, p) {
    return u(h, p.v, p.w, p.name);
  }
  return fm;
}
var dm, MC;
function U6() {
  return MC || (MC = 1, dm = "2.1.8"), dm;
}
var hm, OC;
function G6() {
  return OC || (OC = 1, hm = {
    Graph: T0(),
    version: U6()
  }), hm;
}
var pm, LC;
function K6() {
  if (LC) return pm;
  LC = 1;
  var e = Jt(), t = T0();
  pm = {
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
  return pm;
}
var gm, jC;
function Y6() {
  if (jC) return gm;
  jC = 1;
  var e = Jt();
  gm = t;
  function t(n) {
    var o = {}, i = [], a;
    function l(u) {
      e.has(o, u) || (o[u] = !0, a.push(u), e.each(n.successors(u), l), e.each(n.predecessors(u), l));
    }
    return e.each(n.nodes(), function(u) {
      a = [], l(u), a.length && i.push(a);
    }), i;
  }
  return gm;
}
var mm, DC;
function _I() {
  if (DC) return mm;
  DC = 1;
  var e = Jt();
  mm = t;
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
  }, mm;
}
var vm, qC;
function bI() {
  if (qC) return vm;
  qC = 1;
  var e = Jt(), t = _I();
  vm = o;
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
      var y = E.v !== p ? E.v : E.w, x = d[y], b = u(E), C = m.distance + b;
      if (b < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + E + " Weight: " + b);
      C < x.distance && (x.distance = C, x.predecessor = p, h.decrease(y, C));
    };
    for (a.nodes().forEach(function(E) {
      var y = E === l ? 0 : Number.POSITIVE_INFINITY;
      d[E] = { distance: y }, h.add(E, y);
    }); h.size() > 0 && (p = h.removeMin(), m = d[p], m.distance !== Number.POSITIVE_INFINITY); )
      f(p).forEach(v);
    return d;
  }
  return vm;
}
var ym, zC;
function X6() {
  if (zC) return ym;
  zC = 1;
  var e = bI(), t = Jt();
  ym = n;
  function n(o, i, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, i, a);
    }, {});
  }
  return ym;
}
var wm, FC;
function SI() {
  if (FC) return wm;
  FC = 1;
  var e = Jt();
  wm = t;
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
  return wm;
}
var xm, $C;
function Q6() {
  if ($C) return xm;
  $C = 1;
  var e = Jt(), t = SI();
  xm = n;
  function n(o) {
    return e.filter(t(o), function(i) {
      return i.length > 1 || i.length === 1 && o.hasEdge(i[0], i[0]);
    });
  }
  return xm;
}
var _m, BC;
function Z6() {
  if (BC) return _m;
  BC = 1;
  var e = Jt();
  _m = n;
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
          var E = m[d], y = h[v], x = m[v], b = E.distance + y.distance;
          b < x.distance && (x.distance = b, x.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return _m;
}
var bm, VC;
function EI() {
  if (VC) return bm;
  VC = 1;
  var e = Jt();
  bm = t, t.CycleException = n;
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
  return n.prototype = new Error(), bm;
}
var Sm, HC;
function J6() {
  if (HC) return Sm;
  HC = 1;
  var e = EI();
  Sm = t;
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
  return Sm;
}
var Em, WC;
function CI() {
  if (WC) return Em;
  WC = 1;
  var e = Jt();
  Em = t;
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
  return Em;
}
var Cm, UC;
function eW() {
  if (UC) return Cm;
  UC = 1;
  var e = CI();
  Cm = t;
  function t(n, o) {
    return e(n, o, "post");
  }
  return Cm;
}
var km, GC;
function tW() {
  if (GC) return km;
  GC = 1;
  var e = CI();
  km = t;
  function t(n, o) {
    return e(n, o, "pre");
  }
  return km;
}
var Nm, KC;
function nW() {
  if (KC) return Nm;
  KC = 1;
  var e = Jt(), t = T0(), n = _I();
  Nm = o;
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
  return Nm;
}
var Rm, YC;
function rW() {
  return YC || (YC = 1, Rm = {
    components: Y6(),
    dijkstra: bI(),
    dijkstraAll: X6(),
    findCycles: Q6(),
    floydWarshall: Z6(),
    isAcyclic: J6(),
    postorder: eW(),
    preorder: tW(),
    prim: nW(),
    tarjan: SI(),
    topsort: EI()
  }), Rm;
}
var Pm, XC;
function oW() {
  if (XC) return Pm;
  XC = 1;
  var e = G6();
  return Pm = {
    Graph: e.Graph,
    json: K6(),
    alg: rW(),
    version: e.version
  }, Pm;
}
var Tm, QC;
function mn() {
  if (QC) return Tm;
  QC = 1;
  var e;
  if (typeof p0 == "function")
    try {
      e = oW();
    } catch {
    }
  return e || (e = window.graphlib), Tm = e, Tm;
}
var Am, ZC;
function iW() {
  if (ZC) return Am;
  ZC = 1;
  var e = XA(), t = 1, n = 4;
  function o(i) {
    return e(i, t | n);
  }
  return Am = o, Am;
}
var Im, JC;
function fc() {
  if (JC) return Im;
  JC = 1;
  var e = ki(), t = er(), n = nc(), o = Zt();
  function i(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && n(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return Im = i, Im;
}
var Mm, ek;
function sW() {
  if (ek) return Mm;
  ek = 1;
  var e = cc(), t = ki(), n = fc(), o = xo(), i = Object.prototype, a = i.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, p = h > 2 ? f[2] : void 0;
    for (p && n(f[0], f[1], p) && (h = 1); ++d < h; )
      for (var m = f[d], v = o(m), E = -1, y = v.length; ++E < y; ) {
        var x = v[E], b = u[x];
        (b === void 0 || t(b, i[x]) && !a.call(u, x)) && (u[x] = m[x]);
      }
    return u;
  });
  return Mm = l, Mm;
}
var Om, tk;
function aW() {
  if (tk) return Om;
  tk = 1;
  var e = tr(), t = er(), n = jr();
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
  return Om = o, Om;
}
var Lm, nk;
function lW() {
  if (nk) return Lm;
  nk = 1;
  var e = /\s/;
  function t(n) {
    for (var o = n.length; o-- && e.test(n.charAt(o)); )
      ;
    return o;
  }
  return Lm = t, Lm;
}
var jm, rk;
function uW() {
  if (rk) return jm;
  rk = 1;
  var e = lW(), t = /^\s+/;
  function n(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return jm = n, jm;
}
var Dm, ok;
function cW() {
  if (ok) return Dm;
  ok = 1;
  var e = uW(), t = Zt(), n = Ti(), o = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
  return Dm = f, Dm;
}
var qm, ik;
function kI() {
  if (ik) return qm;
  ik = 1;
  var e = cW(), t = 1 / 0, n = 17976931348623157e292;
  function o(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * n;
    }
    return i === i ? i : 0;
  }
  return qm = o, qm;
}
var zm, sk;
function fW() {
  if (sk) return zm;
  sk = 1;
  var e = kI();
  function t(n) {
    var o = e(n), i = o % 1;
    return o === o ? i ? o - i : o : 0;
  }
  return zm = t, zm;
}
var Fm, ak;
function dW() {
  if (ak) return Fm;
  ak = 1;
  var e = yI(), t = tr(), n = fW(), o = Math.max;
  function i(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : n(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return Fm = i, Fm;
}
var $m, lk;
function hW() {
  if (lk) return $m;
  lk = 1;
  var e = aW(), t = dW(), n = e(t);
  return $m = n, $m;
}
var Bm, uk;
function NI() {
  if (uk) return Bm;
  uk = 1;
  var e = P0();
  function t(n) {
    var o = n == null ? 0 : n.length;
    return o ? e(n, 1) : [];
  }
  return Bm = t, Bm;
}
var Vm, ck;
function pW() {
  if (ck) return Vm;
  ck = 1;
  var e = C0(), t = QA(), n = xo();
  function o(i, a) {
    return i == null ? i : e(i, t(a), n);
  }
  return Vm = o, Vm;
}
var Hm, fk;
function gW() {
  if (fk) return Hm;
  fk = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return Hm = e, Hm;
}
var Wm, dk;
function mW() {
  if (dk) return Wm;
  dk = 1;
  var e = ec(), t = k0(), n = tr();
  function o(i, a) {
    var l = {};
    return a = n(a, 3), t(i, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Wm = o, Wm;
}
var Um, hk;
function A0() {
  if (hk) return Um;
  hk = 1;
  var e = Ti();
  function t(n, o, i) {
    for (var a = -1, l = n.length; ++a < l; ) {
      var u = n[a], f = o(u);
      if (f != null && (d === void 0 ? f === f && !e(f) : i(f, d)))
        var d = f, h = u;
    }
    return h;
  }
  return Um = t, Um;
}
var Gm, pk;
function vW() {
  if (pk) return Gm;
  pk = 1;
  function e(t, n) {
    return t > n;
  }
  return Gm = e, Gm;
}
var Km, gk;
function yW() {
  if (gk) return Km;
  gk = 1;
  var e = A0(), t = vW(), n = _o();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Km = o, Km;
}
var Ym, mk;
function RI() {
  if (mk) return Ym;
  mk = 1;
  var e = ec(), t = ki();
  function n(o, i, a) {
    (a !== void 0 && !t(o[i], a) || a === void 0 && !(i in o)) && e(o, i, a);
  }
  return Ym = n, Ym;
}
var Xm, vk;
function wW() {
  if (vk) return Xm;
  vk = 1;
  var e = yo(), t = ic(), n = Dn(), o = "[object Object]", i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = l.call(Object);
  function d(h) {
    if (!n(h) || e(h) != o)
      return !1;
    var p = t(h);
    if (p === null)
      return !0;
    var m = u.call(p, "constructor") && p.constructor;
    return typeof m == "function" && m instanceof m && l.call(m) == f;
  }
  return Xm = d, Xm;
}
var Qm, yk;
function PI() {
  if (yk) return Qm;
  yk = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return Qm = e, Qm;
}
var Zm, wk;
function xW() {
  if (wk) return Zm;
  wk = 1;
  var e = aa(), t = xo();
  function n(o) {
    return e(o, t(o));
  }
  return Zm = n, Zm;
}
var Jm, xk;
function _W() {
  if (xk) return Jm;
  xk = 1;
  var e = RI(), t = qA(), n = GA(), o = zA(), i = YA(), a = la(), l = rt(), u = wI(), f = Ri(), d = sa(), h = Zt(), p = wW(), m = ua(), v = PI(), E = xW();
  function y(x, b, C, _, N, P, T) {
    var A = v(x, C), O = v(b, C), D = T.get(O);
    if (D) {
      e(x, C, D);
      return;
    }
    var G = P ? P(A, O, C + "", x, b, T) : void 0, B = G === void 0;
    if (B) {
      var V = l(O), X = !V && f(O), L = !V && !X && m(O);
      G = O, V || X || L ? l(A) ? G = A : u(A) ? G = o(A) : X ? (B = !1, G = t(O, !0)) : L ? (B = !1, G = n(O, !0)) : G = [] : p(O) || a(O) ? (G = A, a(A) ? G = E(A) : (!h(A) || d(A)) && (G = i(O))) : B = !1;
    }
    B && (T.set(O, G), N(G, O, _, P, T), T.delete(O)), e(x, C, G);
  }
  return Jm = y, Jm;
}
var ev, _k;
function bW() {
  if (_k) return ev;
  _k = 1;
  var e = Ju(), t = RI(), n = C0(), o = _W(), i = Zt(), a = xo(), l = PI();
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
  return ev = u, ev;
}
var tv, bk;
function SW() {
  if (bk) return tv;
  bk = 1;
  var e = cc(), t = fc();
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
  return tv = n, tv;
}
var nv, Sk;
function EW() {
  if (Sk) return nv;
  Sk = 1;
  var e = bW(), t = SW(), n = t(function(o, i, a) {
    e(o, i, a);
  });
  return nv = n, nv;
}
var rv, Ek;
function TI() {
  if (Ek) return rv;
  Ek = 1;
  function e(t, n) {
    return t < n;
  }
  return rv = e, rv;
}
var ov, Ck;
function CW() {
  if (Ck) return ov;
  Ck = 1;
  var e = A0(), t = TI(), n = _o();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return ov = o, ov;
}
var iv, kk;
function kW() {
  if (kk) return iv;
  kk = 1;
  var e = A0(), t = tr(), n = TI();
  function o(i, a) {
    return i && i.length ? e(i, t(a, 2), n) : void 0;
  }
  return iv = o, iv;
}
var sv, Nk;
function NW() {
  if (Nk) return sv;
  Nk = 1;
  var e = wn(), t = function() {
    return e.Date.now();
  };
  return sv = t, sv;
}
var av, Rk;
function RW() {
  if (Rk) return av;
  Rk = 1;
  var e = tc(), t = lc(), n = nc(), o = Zt(), i = ca();
  function a(l, u, f, d) {
    if (!o(l))
      return l;
    u = t(u, l);
    for (var h = -1, p = u.length, m = p - 1, v = l; v != null && ++h < p; ) {
      var E = i(u[h]), y = f;
      if (E === "__proto__" || E === "constructor" || E === "prototype")
        return l;
      if (h != m) {
        var x = v[E];
        y = d ? d(x, E, v) : void 0, y === void 0 && (y = o(x) ? x : n(u[h + 1]) ? [] : {});
      }
      e(v, E, y), v = v[E];
    }
    return l;
  }
  return av = a, av;
}
var lv, Pk;
function PW() {
  if (Pk) return lv;
  Pk = 1;
  var e = uc(), t = RW(), n = lc();
  function o(i, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], p = e(i, h);
      l(p, h) && t(d, n(h, i), p);
    }
    return d;
  }
  return lv = o, lv;
}
var uv, Tk;
function TW() {
  if (Tk) return uv;
  Tk = 1;
  var e = PW(), t = lI();
  function n(o, i) {
    return e(o, i, function(a, l) {
      return t(o, l);
    });
  }
  return uv = n, uv;
}
var cv, Ak;
function AW() {
  if (Ak) return cv;
  Ak = 1;
  var e = NI(), t = mI(), n = vI();
  function o(i) {
    return n(t(i, void 0, e), i + "");
  }
  return cv = o, cv;
}
var fv, Ik;
function IW() {
  if (Ik) return fv;
  Ik = 1;
  var e = TW(), t = AW(), n = t(function(o, i) {
    return o == null ? {} : e(o, i);
  });
  return fv = n, fv;
}
var dv, Mk;
function MW() {
  if (Mk) return dv;
  Mk = 1;
  var e = Math.ceil, t = Math.max;
  function n(o, i, a, l) {
    for (var u = -1, f = t(e((i - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return dv = n, dv;
}
var hv, Ok;
function OW() {
  if (Ok) return hv;
  Ok = 1;
  var e = MW(), t = fc(), n = kI();
  function o(i) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = n(a), l === void 0 ? (l = a, a = 0) : l = n(l), u = u === void 0 ? a < l ? 1 : -1 : n(u), e(a, l, u, i);
    };
  }
  return hv = o, hv;
}
var pv, Lk;
function LW() {
  if (Lk) return pv;
  Lk = 1;
  var e = OW(), t = e();
  return pv = t, pv;
}
var gv, jk;
function jW() {
  if (jk) return gv;
  jk = 1;
  function e(t, n) {
    var o = t.length;
    for (t.sort(n); o--; )
      t[o] = t[o].value;
    return t;
  }
  return gv = e, gv;
}
var mv, Dk;
function DW() {
  if (Dk) return mv;
  Dk = 1;
  var e = Ti();
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
  return mv = t, mv;
}
var vv, qk;
function qW() {
  if (qk) return vv;
  qk = 1;
  var e = DW();
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
  return vv = t, vv;
}
var yv, zk;
function zW() {
  if (zk) return yv;
  zk = 1;
  var e = ac(), t = uc(), n = tr(), o = hI(), i = jW(), a = rc(), l = qW(), u = _o(), f = rt();
  function d(h, p, m) {
    p.length ? p = e(p, function(y) {
      return f(y) ? function(x) {
        return t(x, y.length === 1 ? y[0] : y);
      } : y;
    }) : p = [u];
    var v = -1;
    p = e(p, a(n));
    var E = o(h, function(y, x, b) {
      var C = e(p, function(_) {
        return _(y);
      });
      return { criteria: C, index: ++v, value: y };
    });
    return i(E, function(y, x) {
      return l(y, x, m);
    });
  }
  return yv = d, yv;
}
var wv, Fk;
function FW() {
  if (Fk) return wv;
  Fk = 1;
  var e = P0(), t = zW(), n = cc(), o = fc(), i = n(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return wv = i, wv;
}
var xv, $k;
function $W() {
  if ($k) return xv;
  $k = 1;
  var e = sI(), t = 0;
  function n(o) {
    var i = ++t;
    return e(o) + i;
  }
  return xv = n, xv;
}
var _v, Bk;
function BW() {
  if (Bk) return _v;
  Bk = 1;
  function e(t, n, o) {
    for (var i = -1, a = t.length, l = n.length, u = {}; ++i < a; ) {
      var f = i < l ? n[i] : void 0;
      o(u, t[i], f);
    }
    return u;
  }
  return _v = e, _v;
}
var bv, Vk;
function VW() {
  if (Vk) return bv;
  Vk = 1;
  var e = tc(), t = BW();
  function n(o, i) {
    return t(o || [], i || [], e);
  }
  return bv = n, bv;
}
var Sv, Hk;
function We() {
  if (Hk) return Sv;
  Hk = 1;
  var e;
  if (typeof p0 == "function")
    try {
      e = {
        cloneDeep: iW(),
        constant: E0(),
        defaults: sW(),
        each: JA(),
        filter: cI(),
        find: hW(),
        flatten: NI(),
        forEach: ZA(),
        forIn: pW(),
        has: fI(),
        isUndefined: dI(),
        last: gW(),
        map: pI(),
        mapValues: mW(),
        max: yW(),
        merge: EW(),
        min: CW(),
        minBy: kW(),
        now: NW(),
        pick: IW(),
        range: LW(),
        reduce: gI(),
        sortBy: FW(),
        uniqueId: $W(),
        values: xI(),
        zipObject: VW()
      };
    } catch {
    }
  return e || (e = window._), Sv = e, Sv;
}
var Ev, Wk;
function HW() {
  if (Wk) return Ev;
  Wk = 1, Ev = e;
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
  return Ev;
}
var Cv, Uk;
function WW() {
  if (Uk) return Cv;
  Uk = 1;
  var e = We(), t = mn().Graph, n = HW();
  Cv = i;
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
    var E = v ? [] : void 0;
    return e.forEach(d.inEdges(m.v), function(y) {
      var x = d.edge(y), b = d.node(y.v);
      v && E.push({ v: y.v, w: y.w }), b.out -= x, f(h, p, b);
    }), e.forEach(d.outEdges(m.v), function(y) {
      var x = d.edge(y), b = y.w, C = d.node(b);
      C.in -= x, f(h, p, C);
    }), d.removeNode(m.v), E;
  }
  function u(d, h) {
    var p = new t(), m = 0, v = 0;
    e.forEach(d.nodes(), function(x) {
      p.setNode(x, { v: x, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(x) {
      var b = p.edge(x.v, x.w) || 0, C = h(x), _ = b + C;
      p.setEdge(x.v, x.w, _), v = Math.max(v, p.node(x.v).out += C), m = Math.max(m, p.node(x.w).in += C);
    });
    var E = e.range(v + m + 3).map(function() {
      return new n();
    }), y = m + 1;
    return e.forEach(p.nodes(), function(x) {
      f(E, y, p.node(x));
    }), { graph: p, buckets: E, zeroIdx: y };
  }
  function f(d, h, p) {
    p.out ? p.in ? d[p.out - p.in + h].enqueue(p) : d[d.length - 1].enqueue(p) : d[0].enqueue(p);
  }
  return Cv;
}
var kv, Gk;
function UW() {
  if (Gk) return kv;
  Gk = 1;
  var e = We(), t = WW();
  kv = {
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
  return kv;
}
var Nv, Kk;
function Pt() {
  if (Kk) return Nv;
  Kk = 1;
  var e = We(), t = mn().Graph;
  Nv = {
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
  function n(x, b, C, _) {
    var N;
    do
      N = e.uniqueId(_);
    while (x.hasNode(N));
    return C.dummy = b, x.setNode(N, C), N;
  }
  function o(x) {
    var b = new t().setGraph(x.graph());
    return e.forEach(x.nodes(), function(C) {
      b.setNode(C, x.node(C));
    }), e.forEach(x.edges(), function(C) {
      var _ = b.edge(C.v, C.w) || { weight: 0, minlen: 1 }, N = x.edge(C);
      b.setEdge(C.v, C.w, {
        weight: _.weight + N.weight,
        minlen: Math.max(_.minlen, N.minlen)
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
      return e.forEach(x.outEdges(C), function(N) {
        _[N.w] = (_[N.w] || 0) + x.edge(N).weight;
      }), _;
    });
    return e.zipObject(x.nodes(), b);
  }
  function l(x) {
    var b = e.map(x.nodes(), function(C) {
      var _ = {};
      return e.forEach(x.inEdges(C), function(N) {
        _[N.v] = (_[N.v] || 0) + x.edge(N).weight;
      }), _;
    });
    return e.zipObject(x.nodes(), b);
  }
  function u(x, b) {
    var C = x.x, _ = x.y, N = b.x - C, P = b.y - _, T = x.width / 2, A = x.height / 2;
    if (!N && !P)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var O, D;
    return Math.abs(P) * T > Math.abs(N) * A ? (P < 0 && (A = -A), O = A * N / P, D = A) : (N < 0 && (T = -T), O = T, D = T * P / N), { x: C + O, y: _ + D };
  }
  function f(x) {
    var b = e.map(e.range(m(x) + 1), function() {
      return [];
    });
    return e.forEach(x.nodes(), function(C) {
      var _ = x.node(C), N = _.rank;
      e.isUndefined(N) || (b[N][_.order] = C);
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
    var _ = 0, N = x.graph().nodeRankFactor;
    e.forEach(C, function(P, T) {
      e.isUndefined(P) && T % N !== 0 ? --_ : _ && e.forEach(P, function(A) {
        x.node(A).rank += _;
      });
    });
  }
  function p(x, b, C, _) {
    var N = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (N.rank = C, N.order = _), n(x, "border", N, b);
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
  function E(x, b) {
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
  return Nv;
}
var Rv, Yk;
function GW() {
  if (Yk) return Rv;
  Yk = 1;
  var e = We(), t = Pt();
  Rv = {
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
      var E, y, x;
      for (x = 0, ++f; f < h; ++x, ++f)
        m.points = [], y = {
          width: 0,
          height: 0,
          edgeLabel: m,
          edgeObj: l,
          rank: f
        }, E = t.addDummyNode(a, "edge", y, "_d"), f === v && (y.width = m.width, y.height = m.height, y.dummy = "edge-label", y.labelpos = m.labelpos), a.setEdge(u, E, { weight: m.weight }, p), x === 0 && a.graph().dummyChains.push(E), u = E;
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
  return Rv;
}
var Pv, Xk;
function xu() {
  if (Xk) return Pv;
  Xk = 1;
  var e = We();
  Pv = {
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
  return Pv;
}
var Tv, Qk;
function AI() {
  if (Qk) return Tv;
  Qk = 1;
  var e = We(), t = mn().Graph, n = xu().slack;
  Tv = o;
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
  return Tv;
}
var Av, Zk;
function KW() {
  if (Zk) return Av;
  Zk = 1;
  var e = We(), t = AI(), n = xu().slack, o = xu().longestPath, i = mn().alg.preorder, a = mn().alg.postorder, l = Pt().simplify;
  Av = u, u.initLowLimValues = p, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = v, u.enterEdge = E, u.exchangeEdges = y;
  function u(_) {
    _ = l(_), o(_);
    var N = t(_);
    p(N), f(N, _);
    for (var P, T; P = v(N); )
      T = E(N, _, P), y(N, _, P, T);
  }
  function f(_, N) {
    var P = a(_, _.nodes());
    P = P.slice(0, P.length - 1), e.forEach(P, function(T) {
      d(_, N, T);
    });
  }
  function d(_, N, P) {
    var T = _.node(P), A = T.parent;
    _.edge(P, A).cutvalue = h(_, N, P);
  }
  function h(_, N, P) {
    var T = _.node(P), A = T.parent, O = !0, D = N.edge(P, A), G = 0;
    return D || (O = !1, D = N.edge(A, P)), G = D.weight, e.forEach(N.nodeEdges(P), function(B) {
      var V = B.v === P, X = V ? B.w : B.v;
      if (X !== A) {
        var L = V === O, H = N.edge(B).weight;
        if (G += L ? H : -H, b(_, P, X)) {
          var $ = _.edge(P, X).cutvalue;
          G += L ? -$ : $;
        }
      }
    }), G;
  }
  function p(_, N) {
    arguments.length < 2 && (N = _.nodes()[0]), m(_, {}, 1, N);
  }
  function m(_, N, P, T, A) {
    var O = P, D = _.node(T);
    return N[T] = !0, e.forEach(_.neighbors(T), function(G) {
      e.has(N, G) || (P = m(_, N, P, G, T));
    }), D.low = O, D.lim = P++, A ? D.parent = A : delete D.parent, P;
  }
  function v(_) {
    return e.find(_.edges(), function(N) {
      return _.edge(N).cutvalue < 0;
    });
  }
  function E(_, N, P) {
    var T = P.v, A = P.w;
    N.hasEdge(T, A) || (T = P.w, A = P.v);
    var O = _.node(T), D = _.node(A), G = O, B = !1;
    O.lim > D.lim && (G = D, B = !0);
    var V = e.filter(N.edges(), function(X) {
      return B === C(_, _.node(X.v), G) && B !== C(_, _.node(X.w), G);
    });
    return e.minBy(V, function(X) {
      return n(N, X);
    });
  }
  function y(_, N, P, T) {
    var A = P.v, O = P.w;
    _.removeEdge(A, O), _.setEdge(T.v, T.w, {}), p(_), f(_, N), x(_, N);
  }
  function x(_, N) {
    var P = e.find(_.nodes(), function(A) {
      return !N.node(A).parent;
    }), T = i(_, P);
    T = T.slice(1), e.forEach(T, function(A) {
      var O = _.node(A).parent, D = N.edge(A, O), G = !1;
      D || (D = N.edge(O, A), G = !0), N.node(A).rank = N.node(O).rank + (G ? D.minlen : -D.minlen);
    });
  }
  function b(_, N, P) {
    return _.hasEdge(N, P);
  }
  function C(_, N, P) {
    return P.low <= N.lim && N.lim <= P.lim;
  }
  return Av;
}
var Iv, Jk;
function YW() {
  if (Jk) return Iv;
  Jk = 1;
  var e = xu(), t = e.longestPath, n = AI(), o = KW();
  Iv = i;
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
  return Iv;
}
var Mv, eN;
function XW() {
  if (eN) return Mv;
  eN = 1;
  var e = We();
  Mv = t;
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
  return Mv;
}
var Ov, tN;
function QW() {
  if (tN) return Ov;
  tN = 1;
  var e = We(), t = Pt();
  Ov = {
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
    var y = t.addBorderNode(u, "_bt"), x = t.addBorderNode(u, "_bb"), b = u.node(v);
    u.setParent(y, v), b.borderTop = y, u.setParent(x, v), b.borderBottom = x, e.forEach(E, function(C) {
      o(u, f, d, h, p, m, C);
      var _ = u.node(C), N = _.borderTop ? _.borderTop : C, P = _.borderBottom ? _.borderBottom : C, T = _.borderTop ? h : 2 * h, A = N !== P ? 1 : p - m[v] + 1;
      u.setEdge(y, N, {
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
  return Ov;
}
var Lv, nN;
function ZW() {
  if (nN) return Lv;
  nN = 1;
  var e = We(), t = Pt();
  Lv = n;
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
  return Lv;
}
var jv, rN;
function JW() {
  if (rN) return jv;
  rN = 1;
  var e = We();
  jv = {
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
  return jv;
}
var Dv, oN;
function eU() {
  if (oN) return Dv;
  oN = 1;
  var e = We();
  Dv = t;
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
  return Dv;
}
var qv, iN;
function tU() {
  if (iN) return qv;
  iN = 1;
  var e = We();
  qv = t;
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
  return qv;
}
var zv, sN;
function nU() {
  if (sN) return zv;
  sN = 1;
  var e = We();
  zv = t;
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
  return zv;
}
var Fv, aN;
function rU() {
  if (aN) return Fv;
  aN = 1;
  var e = We();
  Fv = t;
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
  return Fv;
}
var $v, lN;
function oU() {
  if (lN) return $v;
  lN = 1;
  var e = We(), t = Pt();
  $v = n;
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
  return $v;
}
var Bv, uN;
function iU() {
  if (uN) return Bv;
  uN = 1;
  var e = We(), t = nU(), n = rU(), o = oU();
  Bv = i;
  function i(u, f, d, h) {
    var p = u.children(f), m = u.node(f), v = m ? m.borderLeft : void 0, E = m ? m.borderRight : void 0, y = {};
    v && (p = e.filter(p, function(P) {
      return P !== v && P !== E;
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
    if (v && (C.vs = e.flatten([v, C.vs, E], !0), u.predecessors(v).length)) {
      var _ = u.node(u.predecessors(v)[0]), N = u.node(u.predecessors(E)[0]);
      e.has(C, "barycenter") || (C.barycenter = 0, C.weight = 0), C.barycenter = (C.barycenter * C.weight + _.order + N.order) / (C.weight + 2), C.weight += 2;
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
  return Bv;
}
var Vv, cN;
function sU() {
  if (cN) return Vv;
  cN = 1;
  var e = We(), t = mn().Graph;
  Vv = n;
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
  return Vv;
}
var Hv, fN;
function aU() {
  if (fN) return Hv;
  fN = 1;
  var e = We();
  Hv = t;
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
  return Hv;
}
var Wv, dN;
function lU() {
  if (dN) return Wv;
  dN = 1;
  var e = We(), t = eU(), n = tU(), o = iU(), i = sU(), a = aU(), l = mn().Graph, u = Pt();
  Wv = f;
  function f(m) {
    var v = u.maxRank(m), E = d(m, e.range(1, v + 1), "inEdges"), y = d(m, e.range(v - 1, -1, -1), "outEdges"), x = t(m);
    p(m, x);
    for (var b = Number.POSITIVE_INFINITY, C, _ = 0, N = 0; N < 4; ++_, ++N) {
      h(_ % 2 ? E : y, _ % 4 >= 2), x = u.buildLayerMatrix(m);
      var P = n(m, x);
      P < b && (N = 0, C = e.cloneDeep(x), b = P);
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
      var x = y.graph().root, b = o(y, x, E, v);
      e.forEach(b.vs, function(C, _) {
        y.node(C).order = _;
      }), a(y, E, b.vs);
    });
  }
  function p(m, v) {
    e.forEach(v, function(E) {
      e.forEach(E, function(y, x) {
        m.node(y).order = x;
      });
    });
  }
  return Wv;
}
var Uv, hN;
function uU() {
  if (hN) return Uv;
  hN = 1;
  var e = We(), t = mn().Graph, n = Pt();
  Uv = {
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
  function o(b, C) {
    var _ = {};
    function N(P, T) {
      var A = 0, O = 0, D = P.length, G = e.last(T);
      return e.forEach(T, function(B, V) {
        var X = a(b, B), L = X ? b.node(X).order : D;
        (X || B === G) && (e.forEach(T.slice(O, V + 1), function(H) {
          e.forEach(b.predecessors(H), function($) {
            var K = b.node($), M = K.order;
            (M < A || L < M) && !(K.dummy && b.node(H).dummy) && l(_, $, H);
          });
        }), O = V + 1, A = L);
      }), T;
    }
    return e.reduce(C, N), _;
  }
  function i(b, C) {
    var _ = {};
    function N(T, A, O, D, G) {
      var B;
      e.forEach(e.range(A, O), function(V) {
        B = T[V], b.node(B).dummy && e.forEach(b.predecessors(B), function(X) {
          var L = b.node(X);
          L.dummy && (L.order < D || L.order > G) && l(_, X, B);
        });
      });
    }
    function P(T, A) {
      var O = -1, D, G = 0;
      return e.forEach(A, function(B, V) {
        if (b.node(B).dummy === "border") {
          var X = b.predecessors(B);
          X.length && (D = b.node(X[0]).order, N(A, G, V, O, D), G = V, O = D);
        }
        N(A, G, A.length, D, T.length);
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
      var N = C;
      C = _, _ = N;
    }
    var P = b[C];
    P || (b[C] = P = {}), P[_] = !0;
  }
  function u(b, C, _) {
    if (C > _) {
      var N = C;
      C = _, _ = N;
    }
    return e.has(b[C], _);
  }
  function f(b, C, _, N) {
    var P = {}, T = {}, A = {};
    return e.forEach(C, function(O) {
      e.forEach(O, function(D, G) {
        P[D] = D, T[D] = D, A[D] = G;
      });
    }), e.forEach(C, function(O) {
      var D = -1;
      e.forEach(O, function(G) {
        var B = N(G);
        if (B.length) {
          B = e.sortBy(B, function($) {
            return A[$];
          });
          for (var V = (B.length - 1) / 2, X = Math.floor(V), L = Math.ceil(V); X <= L; ++X) {
            var H = B[X];
            T[G] === G && D < A[H] && !u(_, G, H) && (T[H] = G, T[G] = P[G] = P[H], D = A[H]);
          }
        }
      });
    }), { root: P, align: T };
  }
  function d(b, C, _, N, P) {
    var T = {}, A = h(b, C, _, P), O = P ? "borderLeft" : "borderRight";
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
      }, Number.POSITIVE_INFINITY), L = b.node(V);
      X !== Number.POSITIVE_INFINITY && L.borderType !== O && (T[V] = Math.max(T[V], X));
    }
    return D(G, A.predecessors.bind(A)), D(B, A.successors.bind(A)), e.forEach(N, function(V) {
      T[V] = T[_[V]];
    }), T;
  }
  function h(b, C, _, N) {
    var P = new t(), T = b.graph(), A = y(T.nodesep, T.edgesep, N);
    return e.forEach(C, function(O) {
      var D;
      e.forEach(O, function(G) {
        var B = _[G];
        if (P.setNode(B), D) {
          var V = _[D], X = P.edge(V, B);
          P.setEdge(V, B, Math.max(A(b, G, D), X || 0));
        }
        D = G;
      });
    }), P;
  }
  function p(b, C) {
    return e.minBy(e.values(C), function(_) {
      var N = Number.NEGATIVE_INFINITY, P = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(T, A) {
        var O = x(b, A) / 2;
        N = Math.max(T + O, N), P = Math.min(T - O, P);
      }), N - P;
    });
  }
  function m(b, C) {
    var _ = e.values(C), N = e.min(_), P = e.max(_);
    e.forEach(["u", "d"], function(T) {
      e.forEach(["l", "r"], function(A) {
        var O = T + A, D = b[O], G;
        if (D !== C) {
          var B = e.values(D);
          G = A === "l" ? N - e.min(B) : P - e.max(B), G && (b[O] = e.mapValues(D, function(V) {
            return V + G;
          }));
        }
      });
    });
  }
  function v(b, C) {
    return e.mapValues(b.ul, function(_, N) {
      if (C)
        return b[C.toLowerCase()][N];
      var P = e.sortBy(e.map(b, N));
      return (P[1] + P[2]) / 2;
    });
  }
  function E(b) {
    var C = n.buildLayerMatrix(b), _ = e.merge(
      o(b, C),
      i(b, C)
    ), N = {}, P;
    e.forEach(["u", "d"], function(A) {
      P = A === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(O) {
        O === "r" && (P = e.map(P, function(V) {
          return e.values(V).reverse();
        }));
        var D = (A === "u" ? b.predecessors : b.successors).bind(b), G = f(b, P, _, D), B = d(
          b,
          P,
          G.root,
          G.align,
          O === "r"
        );
        O === "r" && (B = e.mapValues(B, function(V) {
          return -V;
        })), N[A + O] = B;
      });
    });
    var T = p(b, N);
    return m(N, T), v(N, b.graph().align);
  }
  function y(b, C, _) {
    return function(N, P, T) {
      var A = N.node(P), O = N.node(T), D = 0, G;
      if (D += A.width / 2, e.has(A, "labelpos"))
        switch (A.labelpos.toLowerCase()) {
          case "l":
            G = -A.width / 2;
            break;
          case "r":
            G = A.width / 2;
            break;
        }
      if (G && (D += _ ? G : -G), G = 0, D += (A.dummy ? C : b) / 2, D += (O.dummy ? C : b) / 2, D += O.width / 2, e.has(O, "labelpos"))
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
  function x(b, C) {
    return b.node(C).width;
  }
  return Uv;
}
var Gv, pN;
function cU() {
  if (pN) return Gv;
  pN = 1;
  var e = We(), t = Pt(), n = uU().positionX;
  Gv = o;
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
  return Gv;
}
var Kv, gN;
function fU() {
  if (gN) return Kv;
  gN = 1;
  var e = We(), t = UW(), n = GW(), o = YW(), i = Pt().normalizeRanks, a = XW(), l = Pt().removeEmptyRanks, u = QW(), f = ZW(), d = JW(), h = lU(), p = cU(), m = Pt(), v = mn().Graph;
  Kv = E;
  function E(F, Z) {
    var ee = Z && Z.debugTiming ? m.time : m.notime;
    ee("layout", function() {
      var Y = ee("  buildLayoutGraph", function() {
        return D(F);
      });
      ee("  runLayout", function() {
        y(Y, ee);
      }), ee("  updateInputGraph", function() {
        x(F, Y);
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
      i(F);
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
      p(F);
    }), Z("    positionSelfEdges", function() {
      j(F);
    }), Z("    removeBorderNodes", function() {
      M(F);
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
      K(F);
    }), Z("    acyclic.undo", function() {
      t.undo(F);
    });
  }
  function x(F, Z) {
    e.forEach(F.nodes(), function(ee) {
      var Y = F.node(ee), te = Z.node(ee);
      Y && (Y.x = te.x, Y.y = te.y, Z.children(ee).length && (Y.width = te.width, Y.height = te.height));
    }), e.forEach(F.edges(), function(ee) {
      var Y = F.edge(ee), te = Z.edge(ee);
      Y.points = te.points, e.has(te, "x") && (Y.x = te.x, Y.y = te.y);
    }), F.graph().width = Z.graph().width, F.graph().height = Z.graph().height;
  }
  var b = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, _ = ["acyclicer", "ranker", "rankdir", "align"], N = ["width", "height"], P = { width: 0, height: 0 }, T = ["minlen", "weight", "width", "height", "labeloffset"], A = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, O = ["labelpos"];
  function D(F) {
    var Z = new v({ multigraph: !0, compound: !0 }), ee = ie(F.graph());
    return Z.setGraph(e.merge(
      {},
      C,
      W(ee, b),
      e.pick(ee, _)
    )), e.forEach(F.nodes(), function(Y) {
      var te = ie(F.node(Y));
      Z.setNode(Y, e.defaults(W(te, N), P)), Z.setParent(Y, F.parent(Y));
    }), e.forEach(F.edges(), function(Y) {
      var te = ie(F.edge(Y));
      Z.setEdge(Y, e.merge(
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
      var Y = F.edge(ee);
      Y.minlen *= 2, Y.labelpos.toLowerCase() !== "c" && (Z.rankdir === "TB" || Z.rankdir === "BT" ? Y.width += Y.labeloffset : Y.height += Y.labeloffset);
    });
  }
  function B(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z);
      if (ee.width && ee.height) {
        var Y = F.node(Z.v), te = F.node(Z.w), se = { rank: (te.rank - Y.rank) / 2 + Y.rank, e: Z };
        m.addDummyNode(F, "edge-proxy", se, "_ep");
      }
    });
  }
  function V(F) {
    var Z = 0;
    e.forEach(F.nodes(), function(ee) {
      var Y = F.node(ee);
      Y.borderTop && (Y.minRank = F.node(Y.borderTop).rank, Y.maxRank = F.node(Y.borderBottom).rank, Z = e.max(Z, Y.maxRank));
    }), F.graph().maxRank = Z;
  }
  function X(F) {
    e.forEach(F.nodes(), function(Z) {
      var ee = F.node(Z);
      ee.dummy === "edge-proxy" && (F.edge(ee.e).labelRank = ee.rank, F.removeNode(Z));
    });
  }
  function L(F) {
    var Z = Number.POSITIVE_INFINITY, ee = 0, Y = Number.POSITIVE_INFINITY, te = 0, se = F.graph(), ae = se.marginx || 0, ce = se.marginy || 0;
    function de(pe) {
      var be = pe.x, me = pe.y, Re = pe.width, Ee = pe.height;
      Z = Math.min(Z, be - Re / 2), ee = Math.max(ee, be + Re / 2), Y = Math.min(Y, me - Ee / 2), te = Math.max(te, me + Ee / 2);
    }
    e.forEach(F.nodes(), function(pe) {
      de(F.node(pe));
    }), e.forEach(F.edges(), function(pe) {
      var be = F.edge(pe);
      e.has(be, "x") && de(be);
    }), Z -= ae, Y -= ce, e.forEach(F.nodes(), function(pe) {
      var be = F.node(pe);
      be.x -= Z, be.y -= Y;
    }), e.forEach(F.edges(), function(pe) {
      var be = F.edge(pe);
      e.forEach(be.points, function(me) {
        me.x -= Z, me.y -= Y;
      }), e.has(be, "x") && (be.x -= Z), e.has(be, "y") && (be.y -= Y);
    }), se.width = ee - Z + ae, se.height = te - Y + ce;
  }
  function H(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z), Y = F.node(Z.v), te = F.node(Z.w), se, ae;
      ee.points ? (se = ee.points[0], ae = ee.points[ee.points.length - 1]) : (ee.points = [], se = te, ae = Y), ee.points.unshift(m.intersectRect(Y, se)), ee.points.push(m.intersectRect(te, ae));
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
  function K(F) {
    e.forEach(F.edges(), function(Z) {
      var ee = F.edge(Z);
      ee.reversed && ee.points.reverse();
    });
  }
  function M(F) {
    e.forEach(F.nodes(), function(Z) {
      if (F.children(Z).length) {
        var ee = F.node(Z), Y = F.node(ee.borderTop), te = F.node(ee.borderBottom), se = F.node(e.last(ee.borderLeft)), ae = F.node(e.last(ee.borderRight));
        ee.width = Math.abs(ae.x - se.x), ee.height = Math.abs(te.y - Y.y), ee.x = se.x + ee.width / 2, ee.y = Y.y + ee.height / 2;
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
      var Y = 0;
      e.forEach(ee, function(te, se) {
        var ae = F.node(te);
        ae.order = se + Y, e.forEach(ae.selfEdges, function(ce) {
          m.addDummyNode(F, "selfedge", {
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
  function j(F) {
    e.forEach(F.nodes(), function(Z) {
      var ee = F.node(Z);
      if (ee.dummy === "selfedge") {
        var Y = F.node(ee.e.v), te = Y.x + Y.width / 2, se = Y.y, ae = ee.x - te, ce = Y.height / 2;
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
    return e.forEach(F, function(ee, Y) {
      Z[Y.toLowerCase()] = ee;
    }), Z;
  }
  return Kv;
}
var Yv, mN;
function dU() {
  if (mN) return Yv;
  mN = 1;
  var e = We(), t = Pt(), n = mn().Graph;
  Yv = {
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
  return Yv;
}
var Xv, vN;
function hU() {
  return vN || (vN = 1, Xv = "0.8.5"), Xv;
}
var Qv, yN;
function pU() {
  return yN || (yN = 1, Qv = {
    graphlib: mn(),
    layout: fU(),
    debug: dU(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: hU()
  }), Qv;
}
var gU = pU();
const wN = /* @__PURE__ */ _u(gU), mU = 250, vU = 200, yU = 120, wU = 180;
function xN(e) {
  var l, u, f;
  if ((l = e.measured) != null && l.width && ((u = e.measured) != null && u.height))
    return {
      width: e.measured.width,
      height: e.measured.height
    };
  const t = e.data || {}, n = 80, o = 60;
  let i = 0;
  (f = t.parameters) != null && f.properties && (i = Object.keys(t.parameters.properties).length);
  const a = n + i * o;
  return {
    width: e.width || mU,
    height: Math.max(vU, a)
  };
}
function xU(e, t, n = "TB") {
  const o = new wN.graphlib.Graph();
  return o.setDefaultEdgeLabel(() => ({})), o.setGraph({
    rankdir: n,
    nodesep: yU,
    ranksep: wU
  }), e.forEach((a) => {
    const { width: l, height: u } = xN(a);
    o.setNode(a.id, { width: l, height: u });
  }), t.forEach((a) => {
    o.setEdge(a.source, a.target);
  }), wN.layout(o), { nodes: e.map((a) => {
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
function _U(e, t, n) {
  return { onLayout: k.useCallback(
    (i) => {
      const { nodes: a } = xU(e, t, i);
      n(a);
    },
    [e, t, n]
  ) };
}
function bU(e, t) {
  return { exportToJSON: k.useCallback(() => {
    const i = JSON.stringify({
      nodes: e,
      edges: t
    }, null, 2), a = new Blob([i], { type: "application/json" }), l = URL.createObjectURL(a), u = document.createElement("a");
    u.href = l, u.download = "nodeflow-data.json", u.click(), URL.revokeObjectURL(l);
  }, [e, t]) };
}
function SU(e, t) {
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
class OU {
  constructor(t) {
    to(this, "data");
    this.data = {
      label: t,
      values: {}
    };
  }
  /**
   * Set the layout type
   */
  withLayout(t) {
    return this.data.layoutType = t, this;
  }
  /**
   * Set handle types
   */
  withHandles(t, n, o) {
    return this.data.handleType = t, n && (this.data.inputHandleType = n), o && (this.data.outputHandleType = o), this;
  }
  /**
   * Configure the header
   */
  withHeader(t) {
    return this.data.header = t, this;
  }
  /**
   * Configure the footer
   */
  withFooter(t) {
    return this.data.footer = t, this;
  }
  /**
   * Configure styles
   */
  withStyle(t) {
    return this.data.style = t, this;
  }
  /**
   * Configure validation
   */
  withValidation(t) {
    return this.data.validation = t, this;
  }
  /**
   * Set field configurations
   */
  withFieldConfigs(t) {
    return this.data.fieldConfigs = t, this;
  }
  /**
   * Add a single field configuration
   */
  withFieldConfig(t, n) {
    return this.data.fieldConfigs || (this.data.fieldConfigs = {}), this.data.fieldConfigs[t] = n, this;
  }
  /**
   * Build the final node data
   */
  build() {
    return this.data;
  }
}
function LU(e) {
  return {
    label: e,
    header: { show: !1 },
    style: {
      minWidth: "150px",
      shadow: "sm",
      className: "border"
    },
    layoutType: "compact",
    values: {}
  };
}
function jU(e = "Debug") {
  return {
    label: e,
    header: {
      show: !0,
      icon: "🔍",
      className: "bg-yellow-500 text-yellow-950"
    },
    footer: {
      show: !0,
      text: "Debug mode enabled",
      className: "bg-yellow-50 text-yellow-800 border-yellow-200"
    },
    style: {
      className: "border-yellow-400",
      shadow: "lg"
    },
    validation: {
      showErrors: !0,
      errorPosition: "inline",
      validateOnChange: !0
    },
    values: {}
  };
}
function DU(e) {
  return {
    label: e,
    header: {
      show: !0,
      className: "bg-blue-600 text-white"
    },
    layoutType: "vertical",
    style: {
      minWidth: "300px",
      maxWidth: "500px",
      shadow: "md"
    },
    validation: {
      showErrors: !0,
      errorPosition: "inline"
    },
    values: {}
  };
}
function qU(e, t) {
  return {
    label: e,
    header: {
      show: !0,
      icon: t || "⚙️",
      className: "bg-gray-700 text-white"
    },
    layoutType: "horizontal",
    handleType: "button",
    style: {
      minWidth: "180px",
      shadow: "md"
    },
    values: {}
  };
}
function zU(e, t) {
  return {
    label: e,
    header: {
      show: !0,
      icon: t || "📥",
      className: "bg-green-600 text-white"
    },
    layoutType: "vertical",
    handleType: "labeled",
    style: {
      minWidth: "200px",
      shadow: "md",
      className: "border-green-500"
    },
    values: {}
  };
}
function FU(e, t) {
  return {
    label: e,
    header: {
      show: !0,
      icon: t || "📤",
      className: "bg-red-600 text-white"
    },
    layoutType: "vertical",
    handleType: "labeled",
    style: {
      minWidth: "200px",
      shadow: "md",
      className: "border-red-500"
    },
    values: {}
  };
}
function $U(e) {
  return {
    label: e,
    header: {
      show: !0,
      icon: "📊",
      className: "bg-purple-600 text-white"
    },
    layoutType: "vertical",
    style: {
      minWidth: "400px",
      shadow: "lg"
    },
    values: {}
  };
}
function BU(e, t, n) {
  const o = {};
  for (const i of n)
    o[i] = {
      showWhen: {
        field: e,
        operator: "equals",
        value: t
      }
    };
  return o;
}
function VU(e) {
  return {
    label: e,
    header: {
      show: !0,
      icon: "📋",
      className: "bg-slate-500 text-white"
    },
    style: {
      className: "opacity-90 border-slate-300",
      shadow: "sm"
    },
    values: {}
  };
}
function HU(e) {
  const t = {};
  for (const n of e)
    t[n] = { readonly: !0 };
  return t;
}
function WU(e, t) {
  return {
    ...e,
    ...t,
    header: { ...e.header, ...t.header },
    footer: { ...e.footer, ...t.footer },
    style: { ...e.style, ...t.style },
    validation: { ...e.validation, ...t.validation },
    fieldConfigs: { ...e.fieldConfigs, ...t.fieldConfigs },
    values: { ...e.values, ...t.values }
  };
}
const II = k.createContext(null), MI = k.createContext(null), UU = () => {
  const e = k.useContext(II);
  if (!e)
    throw new Error("useSetNodes must be used within SetNodesContext.Provider");
  return e;
}, EU = () => {
  const e = k.useContext(MI);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
};
function CU() {
  const [e, t] = _s("nodes"), [n, o] = _s("edges"), [i] = _s("node_templates"), [a] = _s("height"), [l, u] = _s("node_values"), f = k.useMemo(() => !l || Object.keys(l).length === 0 ? e : e.map((T) => {
    const A = l[T.id];
    return A ? {
      ...T,
      data: {
        ...T.data,
        values: A
      }
    } : T;
  }), [e, l]), d = k.useCallback(
    (T) => {
      t((A) => LR(T, A));
    },
    [t]
  ), h = k.useCallback(
    (T) => {
      o((A) => jR(T, A));
    },
    [o]
  );
  k.useEffect(() => {
    i.forEach((T) => {
      try {
        const A = Wu.buildComponent(T.defaultData);
        Z_.register(T.type, A);
      } catch (A) {
        console.error(`Failed to register node type "${T.type}":`, A);
      }
    });
  }, [i]);
  const p = k.useMemo(() => {
    const T = {}, A = Z_.getAll();
    return i.forEach((O) => {
      const D = A[O.type];
      D !== void 0 && (T[O.type] = D);
    }), T;
  }, [i, e]), m = k.useCallback(
    (T) => {
      o((A) => mR(T, A));
    },
    [o]
  ), v = k.useCallback(
    (T) => {
      const A = {
        id: `node-${Date.now()}`,
        type: T.type,
        position: { x: 100, y: 100 },
        data: T.defaultData
      };
      t((O) => [...O, A]);
    },
    [t]
  ), { exportToJSON: E } = bU(e, n), { onLayout: y } = _U(e, n, t), {
    contextMenu: x,
    onNodeContextMenu: b,
    onEdgeContextMenu: C,
    onPaneClick: _,
    onDelete: N,
    closeContextMenu: P
  } = SU(t, o);
  return /* @__PURE__ */ R.jsx("div", { style: { width: "100%", height: a, display: "flex", position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ R.jsx(II.Provider, { value: t, children: /* @__PURE__ */ R.jsx(MI.Provider, { value: u, children: /* @__PURE__ */ R.jsx(aP, { children: /* @__PURE__ */ R.jsxs(zH, { defaultOpen: !0, className: "!min-h-0 !h-full", children: [
    /* @__PURE__ */ R.jsxs(FH, { collapsible: "icon", className: "!relative !inset-auto !h-full", children: [
      /* @__PURE__ */ R.jsxs(BH, { className: "flex flex-row items-center justify-between border-b", children: [
        /* @__PURE__ */ R.jsx("span", { className: "text-sm font-semibold", children: "Add Nodes" }),
        /* @__PURE__ */ R.jsx($H, {})
      ] }),
      /* @__PURE__ */ R.jsx(XH, { onAddNode: v, templates: i })
    ] }),
    /* @__PURE__ */ R.jsx("div", { style: { flex: 1, height: "100%", position: "relative" }, children: /* @__PURE__ */ R.jsx(
      JH,
      {
        nodes: f,
        edges: n,
        nodeTypes: p,
        height: a,
        onNodesChange: d,
        onEdgesChange: h,
        onConnect: m,
        onNodeContextMenu: b,
        onEdgeContextMenu: C,
        onPaneClick: _,
        contextMenu: x,
        onDelete: N,
        onCloseContextMenu: P,
        onExport: E,
        onLayoutVertical: () => y("TB"),
        onLayoutHorizontal: () => y("LR")
      }
    ) })
  ] }) }) }) }) });
}
const kU = kM(CU), GU = { render: kU };
export {
  OU as NodeBuilder,
  Wu as NodeComponentBuilder,
  MI as SetNodeValuesContext,
  II as SetNodesContext,
  IU as buildNodeTypes,
  BU as createConditionalFields,
  jU as createDebugNode,
  DU as createFormNode,
  LU as createMinimalNode,
  qU as createProcessingNode,
  VU as createReadonlyNode,
  FU as createSinkNode,
  zU as createSourceNode,
  $U as createVisualizationNode,
  GU as default,
  ni as fieldRegistry,
  PU as getAvailableHandles,
  AU as getAvailableLayouts,
  TF as getHandle,
  MF as getLayout,
  HU as makeAllFieldsReadonly,
  WU as mergeNodeConfigs,
  RU as registerHandle,
  TU as registerLayout,
  kU as render,
  EU as useSetNodeValues,
  UU as useSetNodes
};
//# sourceMappingURL=index.js.map
