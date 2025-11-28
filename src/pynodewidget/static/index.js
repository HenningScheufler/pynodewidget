var oM = Object.defineProperty;
var iM = (e, t, n) => t in e ? oM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var vs = (e, t, n) => iM(e, typeof t != "symbol" ? t + "" : t, n);
function sM(e, t) {
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
function vu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var td = { exports: {} }, ys = {}, nd = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gw;
function aM() {
  if (Gw) return Ie;
  Gw = 1;
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
  function w(j, G, ie) {
    this.props = j, this.context = G, this.refs = y, this.updater = ie || v;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(j, G) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, G, "setState");
  }, w.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function b() {
  }
  b.prototype = w.prototype;
  function C(j, G, ie) {
    this.props = j, this.context = G, this.refs = y, this.updater = ie || v;
  }
  var _ = C.prototype = new b();
  _.constructor = C, E(_, w.prototype), _.isPureReactComponent = !0;
  var k = Array.isArray, P = Object.prototype.hasOwnProperty, T = { current: null }, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(j, G, ie) {
    var B, Z = {}, ee = null, X = null;
    if (G != null) for (B in G.ref !== void 0 && (X = G.ref), G.key !== void 0 && (ee = "" + G.key), G) P.call(G, B) && !I.hasOwnProperty(B) && (Z[B] = G[B]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = ie;
    else if (1 < te) {
      for (var se = Array(te), ae = 0; ae < te; ae++) se[ae] = arguments[ae + 2];
      Z.children = se;
    }
    if (j && j.defaultProps) for (B in te = j.defaultProps, te) Z[B] === void 0 && (Z[B] = te[B]);
    return { $$typeof: e, type: j, key: ee, ref: X, props: Z, _owner: T.current };
  }
  function D(j, G) {
    return { $$typeof: e, type: j.type, key: G, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function Y(j) {
    return typeof j == "object" && j !== null && j.$$typeof === e;
  }
  function $(j) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ie) {
      return G[ie];
    });
  }
  var V = /\/+/g;
  function H(j, G) {
    return typeof j == "object" && j !== null && j.key != null ? $("" + j.key) : G.toString(36);
  }
  function O(j, G, ie, B, Z) {
    var ee = typeof j;
    (ee === "undefined" || ee === "boolean") && (j = null);
    var X = !1;
    if (j === null) X = !0;
    else switch (ee) {
      case "string":
      case "number":
        X = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case e:
          case t:
            X = !0;
        }
    }
    if (X) return X = j, Z = Z(X), j = B === "" ? "." + H(X, 0) : B, k(Z) ? (ie = "", j != null && (ie = j.replace(V, "$&/") + "/"), O(Z, G, ie, "", function(ae) {
      return ae;
    })) : Z != null && (Y(Z) && (Z = D(Z, ie + (!Z.key || X && X.key === Z.key ? "" : ("" + Z.key).replace(V, "$&/") + "/") + j)), G.push(Z)), 1;
    if (X = 0, B = B === "" ? "." : B + ":", k(j)) for (var te = 0; te < j.length; te++) {
      ee = j[te];
      var se = B + H(ee, te);
      X += O(ee, G, ie, se, Z);
    }
    else if (se = m(j), typeof se == "function") for (j = se.call(j), te = 0; !(ee = j.next()).done; ) ee = ee.value, se = B + H(ee, te++), X += O(ee, G, ie, se, Z);
    else if (ee === "object") throw G = String(j), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
    return X;
  }
  function W(j, G, ie) {
    if (j == null) return j;
    var B = [], Z = 0;
    return O(j, B, "", "", function(ee) {
      return G.call(ie, ee, Z++);
    }), B;
  }
  function q(j) {
    if (j._status === -1) {
      var G = j._result;
      G = G(), G.then(function(ie) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ie);
      }, function(ie) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ie);
      }), j._status === -1 && (j._status = 0, j._result = G);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var U = { current: null }, M = { transition: null }, z = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: M, ReactCurrentOwner: T };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: W, forEach: function(j, G, ie) {
    W(j, function() {
      G.apply(this, arguments);
    }, ie);
  }, count: function(j) {
    var G = 0;
    return W(j, function() {
      G++;
    }), G;
  }, toArray: function(j) {
    return W(j, function(G) {
      return G;
    }) || [];
  }, only: function(j) {
    if (!Y(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Ie.Component = w, Ie.Fragment = n, Ie.Profiler = i, Ie.PureComponent = C, Ie.StrictMode = o, Ie.Suspense = f, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, Ie.act = Q, Ie.cloneElement = function(j, G, ie) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var B = E({}, j.props), Z = j.key, ee = j.ref, X = j._owner;
    if (G != null) {
      if (G.ref !== void 0 && (ee = G.ref, X = T.current), G.key !== void 0 && (Z = "" + G.key), j.type && j.type.defaultProps) var te = j.type.defaultProps;
      for (se in G) P.call(G, se) && !I.hasOwnProperty(se) && (B[se] = G[se] === void 0 && te !== void 0 ? te[se] : G[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) B.children = ie;
    else if (1 < se) {
      te = Array(se);
      for (var ae = 0; ae < se; ae++) te[ae] = arguments[ae + 2];
      B.children = te;
    }
    return { $$typeof: e, type: j.type, key: Z, ref: ee, props: B, _owner: X };
  }, Ie.createContext = function(j) {
    return j = { $$typeof: l, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: a, _context: j }, j.Consumer = j;
  }, Ie.createElement = L, Ie.createFactory = function(j) {
    var G = L.bind(null, j);
    return G.type = j, G;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(j) {
    return { $$typeof: u, render: j };
  }, Ie.isValidElement = Y, Ie.lazy = function(j) {
    return { $$typeof: h, _payload: { _status: -1, _result: j }, _init: q };
  }, Ie.memo = function(j, G) {
    return { $$typeof: d, type: j, compare: G === void 0 ? null : G };
  }, Ie.startTransition = function(j) {
    var G = M.transition;
    M.transition = {};
    try {
      j();
    } finally {
      M.transition = G;
    }
  }, Ie.unstable_act = Q, Ie.useCallback = function(j, G) {
    return U.current.useCallback(j, G);
  }, Ie.useContext = function(j) {
    return U.current.useContext(j);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(j) {
    return U.current.useDeferredValue(j);
  }, Ie.useEffect = function(j, G) {
    return U.current.useEffect(j, G);
  }, Ie.useId = function() {
    return U.current.useId();
  }, Ie.useImperativeHandle = function(j, G, ie) {
    return U.current.useImperativeHandle(j, G, ie);
  }, Ie.useInsertionEffect = function(j, G) {
    return U.current.useInsertionEffect(j, G);
  }, Ie.useLayoutEffect = function(j, G) {
    return U.current.useLayoutEffect(j, G);
  }, Ie.useMemo = function(j, G) {
    return U.current.useMemo(j, G);
  }, Ie.useReducer = function(j, G, ie) {
    return U.current.useReducer(j, G, ie);
  }, Ie.useRef = function(j) {
    return U.current.useRef(j);
  }, Ie.useState = function(j) {
    return U.current.useState(j);
  }, Ie.useSyncExternalStore = function(j, G, ie) {
    return U.current.useSyncExternalStore(j, G, ie);
  }, Ie.useTransition = function() {
    return U.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var Yw;
function Gs() {
  return Yw || (Yw = 1, nd.exports = aM()), nd.exports;
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
var Kw;
function lM() {
  if (Kw) return ys;
  Kw = 1;
  var e = Gs(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, f, d) {
    var h, p = {}, m = null, v = null;
    d !== void 0 && (m = "" + d), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (h in f) o.call(f, h) && !a.hasOwnProperty(h) && (p[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: t, type: u, key: m, ref: v, props: p, _owner: i.current };
  }
  return ys.Fragment = n, ys.jsx = l, ys.jsxs = l, ys;
}
var Xw;
function uM() {
  return Xw || (Xw = 1, td.exports = lM()), td.exports;
}
var R = uM(), N = Gs();
const Zt = /* @__PURE__ */ vu(N), by = /* @__PURE__ */ sM({
  __proto__: null,
  default: Zt
}, [N]);
var El = {}, rd = { exports: {} }, Nt = {}, od = { exports: {} }, id = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qw;
function cM() {
  return Qw || (Qw = 1, (function(e) {
    function t(M, z) {
      var Q = M.length;
      M.push(z);
      e: for (; 0 < Q; ) {
        var j = Q - 1 >>> 1, G = M[j];
        if (0 < i(G, z)) M[j] = z, M[Q] = G, Q = j;
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
        e: for (var j = 0, G = M.length, ie = G >>> 1; j < ie; ) {
          var B = 2 * (j + 1) - 1, Z = M[B], ee = B + 1, X = M[ee];
          if (0 > i(Z, Q)) ee < G && 0 > i(X, Z) ? (M[j] = X, M[ee] = Q, j = ee) : (M[j] = Z, M[B] = Q, j = B);
          else if (ee < G && 0 > i(X, Q)) M[j] = X, M[ee] = Q, j = ee;
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
    var f = [], d = [], h = 1, p = null, m = 3, v = !1, E = !1, y = !1, w = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, C = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _(M) {
      for (var z = n(d); z !== null; ) {
        if (z.callback === null) o(d);
        else if (z.startTime <= M) o(d), z.sortIndex = z.expirationTime, t(f, z);
        else break;
        z = n(d);
      }
    }
    function k(M) {
      if (y = !1, _(M), !E) if (n(f) !== null) E = !0, q(P);
      else {
        var z = n(d);
        z !== null && U(k, z.startTime - M);
      }
    }
    function P(M, z) {
      E = !1, y && (y = !1, b(L), L = -1), v = !0;
      var Q = m;
      try {
        for (_(z), p = n(f); p !== null && (!(p.expirationTime > z) || M && !$()); ) {
          var j = p.callback;
          if (typeof j == "function") {
            p.callback = null, m = p.priorityLevel;
            var G = j(p.expirationTime <= z);
            z = e.unstable_now(), typeof G == "function" ? p.callback = G : p === n(f) && o(f), _(z);
          } else o(f);
          p = n(f);
        }
        if (p !== null) var ie = !0;
        else {
          var B = n(d);
          B !== null && U(k, B.startTime - z), ie = !1;
        }
        return ie;
      } finally {
        p = null, m = Q, v = !1;
      }
    }
    var T = !1, I = null, L = -1, D = 5, Y = -1;
    function $() {
      return !(e.unstable_now() - Y < D);
    }
    function V() {
      if (I !== null) {
        var M = e.unstable_now();
        Y = M;
        var z = !0;
        try {
          z = I(!0, M);
        } finally {
          z ? H() : (T = !1, I = null);
        }
      } else T = !1;
    }
    var H;
    if (typeof C == "function") H = function() {
      C(V);
    };
    else if (typeof MessageChannel < "u") {
      var O = new MessageChannel(), W = O.port2;
      O.port1.onmessage = V, H = function() {
        W.postMessage(null);
      };
    } else H = function() {
      w(V, 0);
    };
    function q(M) {
      I = M, T || (T = !0, H());
    }
    function U(M, z) {
      L = w(function() {
        M(e.unstable_now());
      }, z);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, e.unstable_continueExecution = function() {
      E || v || (E = !0, q(P));
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
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = Q + G, M = { id: h++, callback: z, priorityLevel: M, startTime: Q, expirationTime: G, sortIndex: -1 }, Q > j ? (M.sortIndex = Q, t(d, M), n(f) === null && M === n(d) && (y ? (b(L), L = -1) : y = !0, U(k, Q - j))) : (M.sortIndex = G, t(f, M), E || v || (E = !0, q(P))), M;
    }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(M) {
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
  })(id)), id;
}
var Zw;
function fM() {
  return Zw || (Zw = 1, od.exports = cM()), od.exports;
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
var Jw;
function dM() {
  if (Jw) return Nt;
  Jw = 1;
  var e = Gs(), t = fM();
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
  function y(r, s, c, g, x, S, A) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = g, this.attributeNamespace = x, this.mustUseProperty = c, this.propertyName = r, this.type = s, this.sanitizeURL = S, this.removeEmptyString = A;
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
  var b = /[\-:]([a-z])/g;
  function C(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var s = r.replace(
      b,
      C
    );
    w[s] = new y(s, 1, !1, r, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var s = r.replace(b, C);
    w[s] = new y(s, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
    var s = r.replace(b, C);
    w[s] = new y(s, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    w[r] = new y(r, 1, !1, r.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(r) {
    w[r] = new y(r, 1, !1, r.toLowerCase(), null, !0, !0);
  });
  function _(r, s, c, g) {
    var x = w.hasOwnProperty(s) ? w[s] : null;
    (x !== null ? x.type !== 0 : g || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (E(s, c, x, g) && (c = null), g || x === null ? m(s) && (c === null ? r.removeAttribute(s) : r.setAttribute(s, "" + c)) : x.mustUseProperty ? r[x.propertyName] = c === null ? x.type === 3 ? !1 : "" : c : (s = x.attributeName, g = x.attributeNamespace, c === null ? r.removeAttribute(s) : (x = x.type, c = x === 3 || x === 4 && c === !0 ? "" : "" + c, g ? r.setAttributeNS(g, s, c) : r.setAttribute(s, c))));
  }
  var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = Symbol.for("react.element"), T = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), $ = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function z(r) {
    return r === null || typeof r != "object" ? null : (r = M && r[M] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Q = Object.assign, j;
  function G(r) {
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
        for (var x = oe.stack.split(`
`), S = g.stack.split(`
`), A = x.length - 1, F = S.length - 1; 1 <= A && 0 <= F && x[A] !== S[F]; ) F--;
        for (; 1 <= A && 0 <= F; A--, F--) if (x[A] !== S[F]) {
          if (A !== 1 || F !== 1)
            do
              if (A--, F--, 0 > F || x[A] !== S[F]) {
                var K = `
` + x[A].replace(" at new ", " at ");
                return r.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", r.displayName)), K;
              }
            while (1 <= A && 0 <= F);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = c;
    }
    return (r = r ? r.displayName || r.name : "") ? G(r) : "";
  }
  function Z(r) {
    switch (r.tag) {
      case 5:
        return G(r.type);
      case 16:
        return G("Lazy");
      case 13:
        return G("Suspense");
      case 19:
        return G("SuspenseList");
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
      case I:
        return "Fragment";
      case T:
        return "Portal";
      case D:
        return "Profiler";
      case L:
        return "StrictMode";
      case H:
        return "Suspense";
      case O:
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
      case W:
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
        return s === L ? "StrictMode" : "Mode";
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
      }, set: function(A) {
        g = "" + A, S.call(this, A);
      } }), Object.defineProperty(r, s, { enumerable: c.enumerable }), { getValue: function() {
        return g;
      }, setValue: function(A) {
        g = "" + A;
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
  function ve(r, s) {
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
  var _t, jr = (function(r) {
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
  var lc = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ri(r, s) {
    if (s) {
      if (lc[r] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(n(137, r));
      if (s.dangerouslySetInnerHTML != null) {
        if (s.children != null) throw Error(n(60));
        if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(n(61));
      }
      if (s.style != null && typeof s.style != "object") throw Error(n(62));
    }
  }
  function Pi(r, s) {
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
  var Ti = null;
  function Ai(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var Ii = null, nr = null, rr = null;
  function ua(r) {
    if (r = ns(r)) {
      if (typeof Ii != "function") throw Error(n(280));
      var s = r.stateNode;
      s && (s = qa(s), Ii(r.stateNode, r.type, s));
    }
  }
  function ca(r) {
    nr ? rr ? rr.push(r) : rr = [r] : nr = r;
  }
  function fa() {
    if (nr) {
      var r = nr, s = rr;
      if (rr = nr = null, ua(r), s) for (r = 0; r < s.length; r++) ua(s[r]);
    }
  }
  function da(r, s) {
    return r(s);
  }
  function ha() {
  }
  var Mi = !1;
  function pa(r, s, c) {
    if (Mi) return r(s, c);
    Mi = !0;
    try {
      return da(r, s, c);
    } finally {
      Mi = !1, (nr !== null || rr !== null) && (ha(), fa());
    }
  }
  function Dr(r, s) {
    var c = r.stateNode;
    if (c === null) return null;
    var g = qa(c);
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
  var Oi = !1;
  if (u) try {
    var qr = {};
    Object.defineProperty(qr, "passive", { get: function() {
      Oi = !0;
    } }), window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
  } catch {
    Oi = !1;
  }
  function uc(r, s, c, g, x, S, A, F, K) {
    var oe = Array.prototype.slice.call(arguments, 3);
    try {
      s.apply(c, oe);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var zr = !1, _o = null, bo = !1, Li = null, cc = { onError: function(r) {
    zr = !0, _o = r;
  } };
  function fc(r, s, c, g, x, S, A, F, K) {
    zr = !1, _o = null, uc.apply(cc, arguments);
  }
  function dc(r, s, c, g, x, S, A, F, K) {
    if (fc.apply(this, arguments), zr) {
      if (zr) {
        var oe = _o;
        zr = !1, _o = null;
      } else throw Error(n(198));
      bo || (bo = !0, Li = oe);
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
  function Di(r) {
    if (_n(r) !== r) throw Error(n(188));
  }
  function hc(r) {
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
          if (S === c) return Di(x), r;
          if (S === g) return Di(x), s;
          S = S.sibling;
        }
        throw Error(n(188));
      }
      if (c.return !== g.return) c = x, g = S;
      else {
        for (var A = !1, F = x.child; F; ) {
          if (F === c) {
            A = !0, c = x, g = S;
            break;
          }
          if (F === g) {
            A = !0, g = x, c = S;
            break;
          }
          F = F.sibling;
        }
        if (!A) {
          for (F = S.child; F; ) {
            if (F === c) {
              A = !0, c = S, g = x;
              break;
            }
            if (F === g) {
              A = !0, g = S, c = x;
              break;
            }
            F = F.sibling;
          }
          if (!A) throw Error(n(189));
        }
      }
      if (c.alternate !== g) throw Error(n(190));
    }
    if (c.tag !== 3) throw Error(n(188));
    return c.stateNode.current === c ? r : s;
  }
  function ga(r) {
    return r = hc(r), r !== null ? ma(r) : null;
  }
  function ma(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var s = ma(r);
      if (s !== null) return s;
      r = r.sibling;
    }
    return null;
  }
  var va = t.unstable_scheduleCallback, ya = t.unstable_cancelCallback, pc = t.unstable_shouldYield, xa = t.unstable_requestPaint, Ye = t.unstable_now, gc = t.unstable_getCurrentPriorityLevel, qi = t.unstable_ImmediatePriority, wa = t.unstable_UserBlockingPriority, So = t.unstable_NormalPriority, mc = t.unstable_LowPriority, _a = t.unstable_IdlePriority, Fr = null, Wt = null;
  function vc(r) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
      Wt.onCommitFiberRoot(Fr, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : wc, yc = Math.log, xc = Math.LN2;
  function wc(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (yc(r) / xc | 0) | 0;
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
    var g = 0, x = r.suspendedLanes, S = r.pingedLanes, A = c & 268435455;
    if (A !== 0) {
      var F = A & ~x;
      F !== 0 ? g = bn(F) : (S &= A, S !== 0 && (g = bn(S)));
    } else A = c & ~x, A !== 0 ? g = bn(A) : S !== 0 && (g = bn(S));
    if (g === 0) return 0;
    if (s !== 0 && s !== g && (s & x) === 0 && (x = g & -g, S = s & -s, x >= S || x === 16 && (S & 4194240) !== 0)) return s;
    if ((g & 4) !== 0 && (g |= c & 16), s = r.entangledLanes, s !== 0) for (r = r.entanglements, s &= g; 0 < s; ) c = 31 - At(s), x = 1 << c, g |= r[c], s &= ~x;
    return g;
  }
  function _c(r, s) {
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
  function bc(r, s) {
    for (var c = r.suspendedLanes, g = r.pingedLanes, x = r.expirationTimes, S = r.pendingLanes; 0 < S; ) {
      var A = 31 - At(S), F = 1 << A, K = x[A];
      K === -1 ? ((F & c) === 0 || (F & g) !== 0) && (x[A] = _c(F, s)) : K <= s && (r.expiredLanes |= F), S &= ~F;
    }
  }
  function $r(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function ba() {
    var r = Eo;
    return Eo <<= 1, (Eo & 4194240) === 0 && (Eo = 64), r;
  }
  function zi(r) {
    for (var s = [], c = 0; 31 > c; c++) s.push(r);
    return s;
  }
  function or(r, s, c) {
    r.pendingLanes |= s, s !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, s = 31 - At(s), r[s] = c;
  }
  function CI(r, s) {
    var c = r.pendingLanes & ~s;
    r.pendingLanes = s, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= s, r.mutableReadLanes &= s, r.entangledLanes &= s, s = r.entanglements;
    var g = r.eventTimes;
    for (r = r.expirationTimes; 0 < c; ) {
      var x = 31 - At(c), S = 1 << x;
      s[x] = 0, g[x] = -1, r[x] = -1, c &= ~S;
    }
  }
  function Sc(r, s) {
    var c = r.entangledLanes |= s;
    for (r = r.entanglements; c; ) {
      var g = 31 - At(c), x = 1 << g;
      x & s | r[g] & s && (r[g] |= s), c &= ~x;
    }
  }
  var qe = 0;
  function C0(r) {
    return r &= -r, 1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var k0, Ec, N0, R0, P0, Cc = !1, Sa = [], ir = null, sr = null, ar = null, Fi = /* @__PURE__ */ new Map(), $i = /* @__PURE__ */ new Map(), lr = [], kI = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function T0(r, s) {
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
        Fi.delete(s.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $i.delete(s.pointerId);
    }
  }
  function Bi(r, s, c, g, x, S) {
    return r === null || r.nativeEvent !== S ? (r = { blockedOn: s, domEventName: c, eventSystemFlags: g, nativeEvent: S, targetContainers: [x] }, s !== null && (s = ns(s), s !== null && Ec(s)), r) : (r.eventSystemFlags |= g, s = r.targetContainers, x !== null && s.indexOf(x) === -1 && s.push(x), r);
  }
  function NI(r, s, c, g, x) {
    switch (s) {
      case "focusin":
        return ir = Bi(ir, r, s, c, g, x), !0;
      case "dragenter":
        return sr = Bi(sr, r, s, c, g, x), !0;
      case "mouseover":
        return ar = Bi(ar, r, s, c, g, x), !0;
      case "pointerover":
        var S = x.pointerId;
        return Fi.set(S, Bi(Fi.get(S) || null, r, s, c, g, x)), !0;
      case "gotpointercapture":
        return S = x.pointerId, $i.set(S, Bi($i.get(S) || null, r, s, c, g, x)), !0;
    }
    return !1;
  }
  function A0(r) {
    var s = Br(r.target);
    if (s !== null) {
      var c = _n(s);
      if (c !== null) {
        if (s = c.tag, s === 13) {
          if (s = ji(c), s !== null) {
            r.blockedOn = s, P0(r.priority, function() {
              N0(c);
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
  function Ea(r) {
    if (r.blockedOn !== null) return !1;
    for (var s = r.targetContainers; 0 < s.length; ) {
      var c = Nc(r.domEventName, r.eventSystemFlags, s[0], r.nativeEvent);
      if (c === null) {
        c = r.nativeEvent;
        var g = new c.constructor(c.type, c);
        Ti = g, c.target.dispatchEvent(g), Ti = null;
      } else return s = ns(c), s !== null && Ec(s), r.blockedOn = c, !1;
      s.shift();
    }
    return !0;
  }
  function I0(r, s, c) {
    Ea(r) && c.delete(s);
  }
  function RI() {
    Cc = !1, ir !== null && Ea(ir) && (ir = null), sr !== null && Ea(sr) && (sr = null), ar !== null && Ea(ar) && (ar = null), Fi.forEach(I0), $i.forEach(I0);
  }
  function Vi(r, s) {
    r.blockedOn === s && (r.blockedOn = null, Cc || (Cc = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, RI)));
  }
  function Hi(r) {
    function s(x) {
      return Vi(x, r);
    }
    if (0 < Sa.length) {
      Vi(Sa[0], r);
      for (var c = 1; c < Sa.length; c++) {
        var g = Sa[c];
        g.blockedOn === r && (g.blockedOn = null);
      }
    }
    for (ir !== null && Vi(ir, r), sr !== null && Vi(sr, r), ar !== null && Vi(ar, r), Fi.forEach(s), $i.forEach(s), c = 0; c < lr.length; c++) g = lr[c], g.blockedOn === r && (g.blockedOn = null);
    for (; 0 < lr.length && (c = lr[0], c.blockedOn === null); ) A0(c), c.blockedOn === null && lr.shift();
  }
  var No = k.ReactCurrentBatchConfig, Ca = !0;
  function PI(r, s, c, g) {
    var x = qe, S = No.transition;
    No.transition = null;
    try {
      qe = 1, kc(r, s, c, g);
    } finally {
      qe = x, No.transition = S;
    }
  }
  function TI(r, s, c, g) {
    var x = qe, S = No.transition;
    No.transition = null;
    try {
      qe = 4, kc(r, s, c, g);
    } finally {
      qe = x, No.transition = S;
    }
  }
  function kc(r, s, c, g) {
    if (Ca) {
      var x = Nc(r, s, c, g);
      if (x === null) Hc(r, s, g, ka, c), T0(r, g);
      else if (NI(x, r, s, c, g)) g.stopPropagation();
      else if (T0(r, g), s & 4 && -1 < kI.indexOf(r)) {
        for (; x !== null; ) {
          var S = ns(x);
          if (S !== null && k0(S), S = Nc(r, s, c, g), S === null && Hc(r, s, g, ka, c), S === x) break;
          x = S;
        }
        x !== null && g.stopPropagation();
      } else Hc(r, s, g, null, c);
    }
  }
  var ka = null;
  function Nc(r, s, c, g) {
    if (ka = null, r = Ai(g), r = Br(r), r !== null) if (s = _n(r), s === null) r = null;
    else if (c = s.tag, c === 13) {
      if (r = ji(s), r !== null) return r;
      r = null;
    } else if (c === 3) {
      if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
      r = null;
    } else s !== r && (r = null);
    return ka = r, null;
  }
  function M0(r) {
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
        switch (gc()) {
          case qi:
            return 1;
          case wa:
            return 4;
          case So:
          case mc:
            return 16;
          case _a:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ur = null, Rc = null, Na = null;
  function O0() {
    if (Na) return Na;
    var r, s = Rc, c = s.length, g, x = "value" in ur ? ur.value : ur.textContent, S = x.length;
    for (r = 0; r < c && s[r] === x[r]; r++) ;
    var A = c - r;
    for (g = 1; g <= A && s[c - g] === x[S - g]; g++) ;
    return Na = x.slice(r, 1 < g ? 1 - g : void 0);
  }
  function Ra(r) {
    var s = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && s === 13 && (r = 13)) : r = s, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Pa() {
    return !0;
  }
  function L0() {
    return !1;
  }
  function It(r) {
    function s(c, g, x, S, A) {
      this._reactName = c, this._targetInst = x, this.type = g, this.nativeEvent = S, this.target = A, this.currentTarget = null;
      for (var F in r) r.hasOwnProperty(F) && (c = r[F], this[F] = c ? c(S) : S[F]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? Pa : L0, this.isPropagationStopped = L0, this;
    }
    return Q(s.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var c = this.nativeEvent;
      c && (c.preventDefault ? c.preventDefault() : typeof c.returnValue != "unknown" && (c.returnValue = !1), this.isDefaultPrevented = Pa);
    }, stopPropagation: function() {
      var c = this.nativeEvent;
      c && (c.stopPropagation ? c.stopPropagation() : typeof c.cancelBubble != "unknown" && (c.cancelBubble = !0), this.isPropagationStopped = Pa);
    }, persist: function() {
    }, isPersistent: Pa }), s;
  }
  var Ro = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r) {
    return r.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pc = It(Ro), Wi = Q({}, Ro, { view: 0, detail: 0 }), AI = It(Wi), Tc, Ac, Ui, Ta = Q({}, Wi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mc, button: 0, buttons: 0, relatedTarget: function(r) {
    return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
  }, movementX: function(r) {
    return "movementX" in r ? r.movementX : (r !== Ui && (Ui && r.type === "mousemove" ? (Tc = r.screenX - Ui.screenX, Ac = r.screenY - Ui.screenY) : Ac = Tc = 0, Ui = r), Tc);
  }, movementY: function(r) {
    return "movementY" in r ? r.movementY : Ac;
  } }), j0 = It(Ta), II = Q({}, Ta, { dataTransfer: 0 }), MI = It(II), OI = Q({}, Wi, { relatedTarget: 0 }), Ic = It(OI), LI = Q({}, Ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jI = It(LI), DI = Q({}, Ro, { clipboardData: function(r) {
    return "clipboardData" in r ? r.clipboardData : window.clipboardData;
  } }), qI = It(DI), zI = Q({}, Ro, { data: 0 }), D0 = It(zI), FI = {
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
  }, $I = {
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
  }, BI = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function VI(r) {
    var s = this.nativeEvent;
    return s.getModifierState ? s.getModifierState(r) : (r = BI[r]) ? !!s[r] : !1;
  }
  function Mc() {
    return VI;
  }
  var HI = Q({}, Wi, { key: function(r) {
    if (r.key) {
      var s = FI[r.key] || r.key;
      if (s !== "Unidentified") return s;
    }
    return r.type === "keypress" ? (r = Ra(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? $I[r.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mc, charCode: function(r) {
    return r.type === "keypress" ? Ra(r) : 0;
  }, keyCode: function(r) {
    return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  }, which: function(r) {
    return r.type === "keypress" ? Ra(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
  } }), WI = It(HI), UI = Q({}, Ta, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), q0 = It(UI), GI = Q({}, Wi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mc }), YI = It(GI), KI = Q({}, Ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), XI = It(KI), QI = Q({}, Ta, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ZI = It(QI), JI = [9, 13, 27, 32], Oc = u && "CompositionEvent" in window, Gi = null;
  u && "documentMode" in document && (Gi = document.documentMode);
  var e2 = u && "TextEvent" in window && !Gi, z0 = u && (!Oc || Gi && 8 < Gi && 11 >= Gi), F0 = " ", $0 = !1;
  function B0(r, s) {
    switch (r) {
      case "keyup":
        return JI.indexOf(s.keyCode) !== -1;
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
  function V0(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Po = !1;
  function t2(r, s) {
    switch (r) {
      case "compositionend":
        return V0(s);
      case "keypress":
        return s.which !== 32 ? null : ($0 = !0, F0);
      case "textInput":
        return r = s.data, r === F0 && $0 ? null : r;
      default:
        return null;
    }
  }
  function n2(r, s) {
    if (Po) return r === "compositionend" || !Oc && B0(r, s) ? (r = O0(), Na = Rc = ur = null, Po = !1, r) : null;
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
        return z0 && s.locale !== "ko" ? null : s.data;
      default:
        return null;
    }
  }
  var r2 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function H0(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s === "input" ? !!r2[r.type] : s === "textarea";
  }
  function W0(r, s, c, g) {
    ca(g), s = La(s, "onChange"), 0 < s.length && (c = new Pc("onChange", "change", null, c, g), r.push({ event: c, listeners: s }));
  }
  var Yi = null, Ki = null;
  function o2(r) {
    ux(r, 0);
  }
  function Aa(r) {
    var s = Oo(r);
    if (de(s)) return r;
  }
  function i2(r, s) {
    if (r === "change") return s;
  }
  var U0 = !1;
  if (u) {
    var Lc;
    if (u) {
      var jc = "oninput" in document;
      if (!jc) {
        var G0 = document.createElement("div");
        G0.setAttribute("oninput", "return;"), jc = typeof G0.oninput == "function";
      }
      Lc = jc;
    } else Lc = !1;
    U0 = Lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Y0() {
    Yi && (Yi.detachEvent("onpropertychange", K0), Ki = Yi = null);
  }
  function K0(r) {
    if (r.propertyName === "value" && Aa(Ki)) {
      var s = [];
      W0(s, Ki, r, Ai(r)), pa(o2, s);
    }
  }
  function s2(r, s, c) {
    r === "focusin" ? (Y0(), Yi = s, Ki = c, Yi.attachEvent("onpropertychange", K0)) : r === "focusout" && Y0();
  }
  function a2(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Aa(Ki);
  }
  function l2(r, s) {
    if (r === "click") return Aa(s);
  }
  function u2(r, s) {
    if (r === "input" || r === "change") return Aa(s);
  }
  function c2(r, s) {
    return r === s && (r !== 0 || 1 / r === 1 / s) || r !== r && s !== s;
  }
  var rn = typeof Object.is == "function" ? Object.is : c2;
  function Xi(r, s) {
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
  function X0(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function Q0(r, s) {
    var c = X0(r);
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
      c = X0(c);
    }
  }
  function Z0(r, s) {
    return r && s ? r === s ? !0 : r && r.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Z0(r, s.parentNode) : "contains" in r ? r.contains(s) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(s) & 16) : !1 : !1;
  }
  function J0() {
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
  function Dc(r) {
    var s = r && r.nodeName && r.nodeName.toLowerCase();
    return s && (s === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || s === "textarea" || r.contentEditable === "true");
  }
  function f2(r) {
    var s = J0(), c = r.focusedElem, g = r.selectionRange;
    if (s !== c && c && c.ownerDocument && Z0(c.ownerDocument.documentElement, c)) {
      if (g !== null && Dc(c)) {
        if (s = g.start, r = g.end, r === void 0 && (r = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(r, c.value.length);
        else if (r = (s = c.ownerDocument || document) && s.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var x = c.textContent.length, S = Math.min(g.start, x);
          g = g.end === void 0 ? S : Math.min(g.end, x), !r.extend && S > g && (x = g, g = S, S = x), x = Q0(c, S);
          var A = Q0(
            c,
            g
          );
          x && A && (r.rangeCount !== 1 || r.anchorNode !== x.node || r.anchorOffset !== x.offset || r.focusNode !== A.node || r.focusOffset !== A.offset) && (s = s.createRange(), s.setStart(x.node, x.offset), r.removeAllRanges(), S > g ? (r.addRange(s), r.extend(A.node, A.offset)) : (s.setEnd(A.node, A.offset), r.addRange(s)));
        }
      }
      for (s = [], r = c; r = r.parentNode; ) r.nodeType === 1 && s.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < s.length; c++) r = s[c], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }
  }
  var d2 = u && "documentMode" in document && 11 >= document.documentMode, To = null, qc = null, Qi = null, zc = !1;
  function ex(r, s, c) {
    var g = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    zc || To == null || To !== pe(g) || (g = To, "selectionStart" in g && Dc(g) ? g = { start: g.selectionStart, end: g.selectionEnd } : (g = (g.ownerDocument && g.ownerDocument.defaultView || window).getSelection(), g = { anchorNode: g.anchorNode, anchorOffset: g.anchorOffset, focusNode: g.focusNode, focusOffset: g.focusOffset }), Qi && Xi(Qi, g) || (Qi = g, g = La(qc, "onSelect"), 0 < g.length && (s = new Pc("onSelect", "select", null, s, c), r.push({ event: s, listeners: g }), s.target = To)));
  }
  function Ia(r, s) {
    var c = {};
    return c[r.toLowerCase()] = s.toLowerCase(), c["Webkit" + r] = "webkit" + s, c["Moz" + r] = "moz" + s, c;
  }
  var Ao = { animationend: Ia("Animation", "AnimationEnd"), animationiteration: Ia("Animation", "AnimationIteration"), animationstart: Ia("Animation", "AnimationStart"), transitionend: Ia("Transition", "TransitionEnd") }, Fc = {}, tx = {};
  u && (tx = document.createElement("div").style, "AnimationEvent" in window || (delete Ao.animationend.animation, delete Ao.animationiteration.animation, delete Ao.animationstart.animation), "TransitionEvent" in window || delete Ao.transitionend.transition);
  function Ma(r) {
    if (Fc[r]) return Fc[r];
    if (!Ao[r]) return r;
    var s = Ao[r], c;
    for (c in s) if (s.hasOwnProperty(c) && c in tx) return Fc[r] = s[c];
    return r;
  }
  var nx = Ma("animationend"), rx = Ma("animationiteration"), ox = Ma("animationstart"), ix = Ma("transitionend"), sx = /* @__PURE__ */ new Map(), ax = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(r, s) {
    sx.set(r, s), a(s, [r]);
  }
  for (var $c = 0; $c < ax.length; $c++) {
    var Bc = ax[$c], h2 = Bc.toLowerCase(), p2 = Bc[0].toUpperCase() + Bc.slice(1);
    cr(h2, "on" + p2);
  }
  cr(nx, "onAnimationEnd"), cr(rx, "onAnimationIteration"), cr(ox, "onAnimationStart"), cr("dblclick", "onDoubleClick"), cr("focusin", "onFocus"), cr("focusout", "onBlur"), cr(ix, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), g2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));
  function lx(r, s, c) {
    var g = r.type || "unknown-event";
    r.currentTarget = c, dc(g, s, void 0, r), r.currentTarget = null;
  }
  function ux(r, s) {
    s = (s & 4) !== 0;
    for (var c = 0; c < r.length; c++) {
      var g = r[c], x = g.event;
      g = g.listeners;
      e: {
        var S = void 0;
        if (s) for (var A = g.length - 1; 0 <= A; A--) {
          var F = g[A], K = F.instance, oe = F.currentTarget;
          if (F = F.listener, K !== S && x.isPropagationStopped()) break e;
          lx(x, F, oe), S = K;
        }
        else for (A = 0; A < g.length; A++) {
          if (F = g[A], K = F.instance, oe = F.currentTarget, F = F.listener, K !== S && x.isPropagationStopped()) break e;
          lx(x, F, oe), S = K;
        }
      }
    }
    if (bo) throw r = Li, bo = !1, Li = null, r;
  }
  function Fe(r, s) {
    var c = s[Xc];
    c === void 0 && (c = s[Xc] = /* @__PURE__ */ new Set());
    var g = r + "__bubble";
    c.has(g) || (cx(s, r, 2, !1), c.add(g));
  }
  function Vc(r, s, c) {
    var g = 0;
    s && (g |= 4), cx(c, r, g, s);
  }
  var Oa = "_reactListening" + Math.random().toString(36).slice(2);
  function Ji(r) {
    if (!r[Oa]) {
      r[Oa] = !0, o.forEach(function(c) {
        c !== "selectionchange" && (g2.has(c) || Vc(c, !1, r), Vc(c, !0, r));
      });
      var s = r.nodeType === 9 ? r : r.ownerDocument;
      s === null || s[Oa] || (s[Oa] = !0, Vc("selectionchange", !1, s));
    }
  }
  function cx(r, s, c, g) {
    switch (M0(s)) {
      case 1:
        var x = PI;
        break;
      case 4:
        x = TI;
        break;
      default:
        x = kc;
    }
    c = x.bind(null, s, c, r), x = void 0, !Oi || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (x = !0), g ? x !== void 0 ? r.addEventListener(s, c, { capture: !0, passive: x }) : r.addEventListener(s, c, !0) : x !== void 0 ? r.addEventListener(s, c, { passive: x }) : r.addEventListener(s, c, !1);
  }
  function Hc(r, s, c, g, x) {
    var S = g;
    if ((s & 1) === 0 && (s & 2) === 0 && g !== null) e: for (; ; ) {
      if (g === null) return;
      var A = g.tag;
      if (A === 3 || A === 4) {
        var F = g.stateNode.containerInfo;
        if (F === x || F.nodeType === 8 && F.parentNode === x) break;
        if (A === 4) for (A = g.return; A !== null; ) {
          var K = A.tag;
          if ((K === 3 || K === 4) && (K = A.stateNode.containerInfo, K === x || K.nodeType === 8 && K.parentNode === x)) return;
          A = A.return;
        }
        for (; F !== null; ) {
          if (A = Br(F), A === null) return;
          if (K = A.tag, K === 5 || K === 6) {
            g = S = A;
            continue e;
          }
          F = F.parentNode;
        }
      }
      g = g.return;
    }
    pa(function() {
      var oe = S, ue = Ai(c), fe = [];
      e: {
        var le = sx.get(r);
        if (le !== void 0) {
          var ge = Pc, xe = r;
          switch (r) {
            case "keypress":
              if (Ra(c) === 0) break e;
            case "keydown":
            case "keyup":
              ge = WI;
              break;
            case "focusin":
              xe = "focus", ge = Ic;
              break;
            case "focusout":
              xe = "blur", ge = Ic;
              break;
            case "beforeblur":
            case "afterblur":
              ge = Ic;
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
              ge = MI;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = YI;
              break;
            case nx:
            case rx:
            case ox:
              ge = jI;
              break;
            case ix:
              ge = XI;
              break;
            case "scroll":
              ge = AI;
              break;
            case "wheel":
              ge = ZI;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = qI;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = q0;
          }
          var Se = (s & 4) !== 0, et = !Se && r === "scroll", ne = Se ? le !== null ? le + "Capture" : null : le;
          Se = [];
          for (var J = oe, re; J !== null; ) {
            re = J;
            var he = re.stateNode;
            if (re.tag === 5 && he !== null && (re = he, ne !== null && (he = Dr(J, ne), he != null && Se.push(es(J, he, re)))), et) break;
            J = J.return;
          }
          0 < Se.length && (le = new ge(le, xe, null, c, ue), fe.push({ event: le, listeners: Se }));
        }
      }
      if ((s & 7) === 0) {
        e: {
          if (le = r === "mouseover" || r === "pointerover", ge = r === "mouseout" || r === "pointerout", le && c !== Ti && (xe = c.relatedTarget || c.fromElement) && (Br(xe) || xe[zn])) break e;
          if ((ge || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, ge ? (xe = c.relatedTarget || c.toElement, ge = oe, xe = xe ? Br(xe) : null, xe !== null && (et = _n(xe), xe !== et || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (ge = null, xe = oe), ge !== xe)) {
            if (Se = j0, he = "onMouseLeave", ne = "onMouseEnter", J = "mouse", (r === "pointerout" || r === "pointerover") && (Se = q0, he = "onPointerLeave", ne = "onPointerEnter", J = "pointer"), et = ge == null ? le : Oo(ge), re = xe == null ? le : Oo(xe), le = new Se(he, J + "leave", ge, c, ue), le.target = et, le.relatedTarget = re, he = null, Br(ue) === oe && (Se = new Se(ne, J + "enter", xe, c, ue), Se.target = re, Se.relatedTarget = et, he = Se), et = he, ge && xe) t: {
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
            ge !== null && fx(fe, le, ge, Se, !1), xe !== null && et !== null && fx(fe, et, xe, Se, !0);
          }
        }
        e: {
          if (le = oe ? Oo(oe) : window, ge = le.nodeName && le.nodeName.toLowerCase(), ge === "select" || ge === "input" && le.type === "file") var Ce = i2;
          else if (H0(le)) if (U0) Ce = u2;
          else {
            Ce = a2;
            var ke = s2;
          }
          else (ge = le.nodeName) && ge.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ce = l2);
          if (Ce && (Ce = Ce(r, oe))) {
            W0(fe, Ce, c, ue);
            break e;
          }
          ke && ke(r, le, oe), r === "focusout" && (ke = le._wrapperState) && ke.controlled && le.type === "number" && Ue(le, "number", le.value);
        }
        switch (ke = oe ? Oo(oe) : window, r) {
          case "focusin":
            (H0(ke) || ke.contentEditable === "true") && (To = ke, qc = oe, Qi = null);
            break;
          case "focusout":
            Qi = qc = To = null;
            break;
          case "mousedown":
            zc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zc = !1, ex(fe, c, ue);
            break;
          case "selectionchange":
            if (d2) break;
          case "keydown":
          case "keyup":
            ex(fe, c, ue);
        }
        var Ne;
        if (Oc) e: {
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
        else Po ? B0(r, c) && (Pe = "onCompositionEnd") : r === "keydown" && c.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (z0 && c.locale !== "ko" && (Po || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Po && (Ne = O0()) : (ur = ue, Rc = "value" in ur ? ur.value : ur.textContent, Po = !0)), ke = La(oe, Pe), 0 < ke.length && (Pe = new D0(Pe, r, null, c, ue), fe.push({ event: Pe, listeners: ke }), Ne ? Pe.data = Ne : (Ne = V0(c), Ne !== null && (Pe.data = Ne)))), (Ne = e2 ? t2(r, c) : n2(r, c)) && (oe = La(oe, "onBeforeInput"), 0 < oe.length && (ue = new D0("onBeforeInput", "beforeinput", null, c, ue), fe.push({ event: ue, listeners: oe }), ue.data = Ne));
      }
      ux(fe, s);
    });
  }
  function es(r, s, c) {
    return { instance: r, listener: s, currentTarget: c };
  }
  function La(r, s) {
    for (var c = s + "Capture", g = []; r !== null; ) {
      var x = r, S = x.stateNode;
      x.tag === 5 && S !== null && (x = S, S = Dr(r, c), S != null && g.unshift(es(r, S, x)), S = Dr(r, s), S != null && g.push(es(r, S, x))), r = r.return;
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
  function fx(r, s, c, g, x) {
    for (var S = s._reactName, A = []; c !== null && c !== g; ) {
      var F = c, K = F.alternate, oe = F.stateNode;
      if (K !== null && K === g) break;
      F.tag === 5 && oe !== null && (F = oe, x ? (K = Dr(c, S), K != null && A.unshift(es(c, K, F))) : x || (K = Dr(c, S), K != null && A.push(es(c, K, F)))), c = c.return;
    }
    A.length !== 0 && r.push({ event: s, listeners: A });
  }
  var m2 = /\r\n?/g, v2 = /\u0000|\uFFFD/g;
  function dx(r) {
    return (typeof r == "string" ? r : "" + r).replace(m2, `
`).replace(v2, "");
  }
  function ja(r, s, c) {
    if (s = dx(s), dx(r) !== s && c) throw Error(n(425));
  }
  function Da() {
  }
  var Wc = null, Uc = null;
  function Gc(r, s) {
    return r === "textarea" || r === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null;
  }
  var Yc = typeof setTimeout == "function" ? setTimeout : void 0, y2 = typeof clearTimeout == "function" ? clearTimeout : void 0, hx = typeof Promise == "function" ? Promise : void 0, x2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof hx < "u" ? function(r) {
    return hx.resolve(null).then(r).catch(w2);
  } : Yc;
  function w2(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function Kc(r, s) {
    var c = s, g = 0;
    do {
      var x = c.nextSibling;
      if (r.removeChild(c), x && x.nodeType === 8) if (c = x.data, c === "/$") {
        if (g === 0) {
          r.removeChild(x), Hi(s);
          return;
        }
        g--;
      } else c !== "$" && c !== "$?" && c !== "$!" || g++;
      c = x;
    } while (c);
    Hi(s);
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
  function px(r) {
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
  var Mo = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + Mo, ts = "__reactProps$" + Mo, zn = "__reactContainer$" + Mo, Xc = "__reactEvents$" + Mo, _2 = "__reactListeners$" + Mo, b2 = "__reactHandles$" + Mo;
  function Br(r) {
    var s = r[Sn];
    if (s) return s;
    for (var c = r.parentNode; c; ) {
      if (s = c[zn] || c[Sn]) {
        if (c = s.alternate, s.child !== null || c !== null && c.child !== null) for (r = px(r); r !== null; ) {
          if (c = r[Sn]) return c;
          r = px(r);
        }
        return s;
      }
      r = c, c = r.parentNode;
    }
    return null;
  }
  function ns(r) {
    return r = r[Sn] || r[zn], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function Oo(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(n(33));
  }
  function qa(r) {
    return r[ts] || null;
  }
  var Qc = [], Lo = -1;
  function dr(r) {
    return { current: r };
  }
  function $e(r) {
    0 > Lo || (r.current = Qc[Lo], Qc[Lo] = null, Lo--);
  }
  function ze(r, s) {
    Lo++, Qc[Lo] = r.current, r.current = s;
  }
  var hr = {}, pt = dr(hr), bt = dr(!1), Vr = hr;
  function jo(r, s) {
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
  function za() {
    $e(bt), $e(pt);
  }
  function gx(r, s, c) {
    if (pt.current !== hr) throw Error(n(168));
    ze(pt, s), ze(bt, c);
  }
  function mx(r, s, c) {
    var g = r.stateNode;
    if (s = s.childContextTypes, typeof g.getChildContext != "function") return c;
    g = g.getChildContext();
    for (var x in g) if (!(x in s)) throw Error(n(108, X(r) || "Unknown", x));
    return Q({}, c, g);
  }
  function Fa(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || hr, Vr = pt.current, ze(pt, r), ze(bt, bt.current), !0;
  }
  function vx(r, s, c) {
    var g = r.stateNode;
    if (!g) throw Error(n(169));
    c ? (r = mx(r, s, Vr), g.__reactInternalMemoizedMergedChildContext = r, $e(bt), $e(pt), ze(pt, r)) : $e(bt), ze(bt, c);
  }
  var Fn = null, $a = !1, Zc = !1;
  function yx(r) {
    Fn === null ? Fn = [r] : Fn.push(r);
  }
  function S2(r) {
    $a = !0, yx(r);
  }
  function pr() {
    if (!Zc && Fn !== null) {
      Zc = !0;
      var r = 0, s = qe;
      try {
        var c = Fn;
        for (qe = 1; r < c.length; r++) {
          var g = c[r];
          do
            g = g(!0);
          while (g !== null);
        }
        Fn = null, $a = !1;
      } catch (x) {
        throw Fn !== null && (Fn = Fn.slice(r + 1)), va(qi, pr), x;
      } finally {
        qe = s, Zc = !1;
      }
    }
    return null;
  }
  var Do = [], qo = 0, Ba = null, Va = 0, Ut = [], Gt = 0, Hr = null, $n = 1, Bn = "";
  function Wr(r, s) {
    Do[qo++] = Va, Do[qo++] = Ba, Ba = r, Va = s;
  }
  function xx(r, s, c) {
    Ut[Gt++] = $n, Ut[Gt++] = Bn, Ut[Gt++] = Hr, Hr = r;
    var g = $n;
    r = Bn;
    var x = 32 - At(g) - 1;
    g &= ~(1 << x), c += 1;
    var S = 32 - At(s) + x;
    if (30 < S) {
      var A = x - x % 5;
      S = (g & (1 << A) - 1).toString(32), g >>= A, x -= A, $n = 1 << 32 - At(s) + x | c << x | g, Bn = S + r;
    } else $n = 1 << S | c << x | g, Bn = r;
  }
  function Jc(r) {
    r.return !== null && (Wr(r, 1), xx(r, 1, 0));
  }
  function ef(r) {
    for (; r === Ba; ) Ba = Do[--qo], Do[qo] = null, Va = Do[--qo], Do[qo] = null;
    for (; r === Hr; ) Hr = Ut[--Gt], Ut[Gt] = null, Bn = Ut[--Gt], Ut[Gt] = null, $n = Ut[--Gt], Ut[Gt] = null;
  }
  var Mt = null, Ot = null, Ve = !1, on = null;
  function wx(r, s) {
    var c = Qt(5, null, null, 0);
    c.elementType = "DELETED", c.stateNode = s, c.return = r, s = r.deletions, s === null ? (r.deletions = [c], r.flags |= 16) : s.push(c);
  }
  function _x(r, s) {
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
  function tf(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function nf(r) {
    if (Ve) {
      var s = Ot;
      if (s) {
        var c = s;
        if (!_x(r, s)) {
          if (tf(r)) throw Error(n(418));
          s = fr(c.nextSibling);
          var g = Mt;
          s && _x(r, s) ? wx(g, c) : (r.flags = r.flags & -4097 | 2, Ve = !1, Mt = r);
        }
      } else {
        if (tf(r)) throw Error(n(418));
        r.flags = r.flags & -4097 | 2, Ve = !1, Mt = r;
      }
    }
  }
  function bx(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Mt = r;
  }
  function Ha(r) {
    if (r !== Mt) return !1;
    if (!Ve) return bx(r), Ve = !0, !1;
    var s;
    if ((s = r.tag !== 3) && !(s = r.tag !== 5) && (s = r.type, s = s !== "head" && s !== "body" && !Gc(r.type, r.memoizedProps)), s && (s = Ot)) {
      if (tf(r)) throw Sx(), Error(n(418));
      for (; s; ) wx(r, s), s = fr(s.nextSibling);
    }
    if (bx(r), r.tag === 13) {
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
  function Sx() {
    for (var r = Ot; r; ) r = fr(r.nextSibling);
  }
  function zo() {
    Ot = Mt = null, Ve = !1;
  }
  function rf(r) {
    on === null ? on = [r] : on.push(r);
  }
  var E2 = k.ReactCurrentBatchConfig;
  function rs(r, s, c) {
    if (r = c.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (c._owner) {
        if (c = c._owner, c) {
          if (c.tag !== 1) throw Error(n(309));
          var g = c.stateNode;
        }
        if (!g) throw Error(n(147, r));
        var x = g, S = "" + r;
        return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === S ? s.ref : (s = function(A) {
          var F = x.refs;
          A === null ? delete F[S] : F[S] = A;
        }, s._stringRef = S, s);
      }
      if (typeof r != "string") throw Error(n(284));
      if (!c._owner) throw Error(n(290, r));
    }
    return r;
  }
  function Wa(r, s) {
    throw r = Object.prototype.toString.call(s), Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : r));
  }
  function Ex(r) {
    var s = r._init;
    return s(r._payload);
  }
  function Cx(r) {
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
    function A(ne) {
      return r && ne.alternate === null && (ne.flags |= 2), ne;
    }
    function F(ne, J, re, he) {
      return J === null || J.tag !== 6 ? (J = Kf(re, ne.mode, he), J.return = ne, J) : (J = x(J, re), J.return = ne, J);
    }
    function K(ne, J, re, he) {
      var Ce = re.type;
      return Ce === I ? ue(ne, J, re.props.children, he, re.key) : J !== null && (J.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && Ex(Ce) === J.type) ? (he = x(J, re.props), he.ref = rs(ne, J, re), he.return = ne, he) : (he = gl(re.type, re.key, re.props, null, ne.mode, he), he.ref = rs(ne, J, re), he.return = ne, he);
    }
    function oe(ne, J, re, he) {
      return J === null || J.tag !== 4 || J.stateNode.containerInfo !== re.containerInfo || J.stateNode.implementation !== re.implementation ? (J = Xf(re, ne.mode, he), J.return = ne, J) : (J = x(J, re.children || []), J.return = ne, J);
    }
    function ue(ne, J, re, he, Ce) {
      return J === null || J.tag !== 7 ? (J = Jr(re, ne.mode, he, Ce), J.return = ne, J) : (J = x(J, re), J.return = ne, J);
    }
    function fe(ne, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return J = Kf("" + J, ne.mode, re), J.return = ne, J;
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case P:
            return re = gl(J.type, J.key, J.props, null, ne.mode, re), re.ref = rs(ne, null, J), re.return = ne, re;
          case T:
            return J = Xf(J, ne.mode, re), J.return = ne, J;
          case q:
            var he = J._init;
            return fe(ne, he(J._payload), re);
        }
        if (Ft(J) || z(J)) return J = Jr(J, ne.mode, re, null), J.return = ne, J;
        Wa(ne, J);
      }
      return null;
    }
    function le(ne, J, re, he) {
      var Ce = J !== null ? J.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return Ce !== null ? null : F(ne, J, "" + re, he);
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
        if (Ft(re) || z(re)) return Ce !== null ? null : ue(ne, J, re, he, null);
        Wa(ne, re);
      }
      return null;
    }
    function ge(ne, J, re, he, Ce) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return ne = ne.get(re) || null, F(J, ne, "" + he, Ce);
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
        if (Ft(he) || z(he)) return ne = ne.get(re) || null, ue(J, ne, he, Ce, null);
        Wa(J, he);
      }
      return null;
    }
    function xe(ne, J, re, he) {
      for (var Ce = null, ke = null, Ne = J, Pe = J = 0, ct = null; Ne !== null && Pe < re.length; Pe++) {
        Ne.index > Pe ? (ct = Ne, Ne = null) : ct = Ne.sibling;
        var je = le(ne, Ne, re[Pe], he);
        if (je === null) {
          Ne === null && (Ne = ct);
          break;
        }
        r && Ne && je.alternate === null && s(ne, Ne), J = S(je, J, Pe), ke === null ? Ce = je : ke.sibling = je, ke = je, Ne = ct;
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
      ), Ve && Wr(ne, Pe), Ce;
      if (Ne === null) {
        for (; !je.done; Pe++, je = re.next()) je = fe(ne, je.value, he), je !== null && (J = S(je, J, Pe), ke === null ? Ce = je : ke.sibling = je, ke = je);
        return Ve && Wr(ne, Pe), Ce;
      }
      for (Ne = g(ne, Ne); !je.done; Pe++, je = re.next()) je = ge(Ne, ne, Pe, je.value, he), je !== null && (r && je.alternate !== null && Ne.delete(je.key === null ? Pe : je.key), J = S(je, J, Pe), ke === null ? Ce = je : ke.sibling = je, ke = je);
      return r && Ne.forEach(function(rM) {
        return s(ne, rM);
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
                  } else if (ke.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === q && Ex(Ce) === ke.type) {
                    c(ne, ke.sibling), J = x(ke, re.props), J.ref = rs(ne, ke, re), J.return = ne, ne = J;
                    break e;
                  }
                  c(ne, ke);
                  break;
                } else s(ne, ke);
                ke = ke.sibling;
              }
              re.type === I ? (J = Jr(re.props.children, ne.mode, he, re.key), J.return = ne, ne = J) : (he = gl(re.type, re.key, re.props, null, ne.mode, he), he.ref = rs(ne, J, re), he.return = ne, ne = he);
            }
            return A(ne);
          case T:
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
              J = Xf(re, ne.mode, he), J.return = ne, ne = J;
            }
            return A(ne);
          case q:
            return ke = re._init, et(ne, J, ke(re._payload), he);
        }
        if (Ft(re)) return xe(ne, J, re, he);
        if (z(re)) return Se(ne, J, re, he);
        Wa(ne, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, J !== null && J.tag === 6 ? (c(ne, J.sibling), J = x(J, re), J.return = ne, ne = J) : (c(ne, J), J = Kf(re, ne.mode, he), J.return = ne, ne = J), A(ne)) : c(ne, J);
    }
    return et;
  }
  var Fo = Cx(!0), kx = Cx(!1), Ua = dr(null), Ga = null, $o = null, of = null;
  function sf() {
    of = $o = Ga = null;
  }
  function af(r) {
    var s = Ua.current;
    $e(Ua), r._currentValue = s;
  }
  function lf(r, s, c) {
    for (; r !== null; ) {
      var g = r.alternate;
      if ((r.childLanes & s) !== s ? (r.childLanes |= s, g !== null && (g.childLanes |= s)) : g !== null && (g.childLanes & s) !== s && (g.childLanes |= s), r === c) break;
      r = r.return;
    }
  }
  function Bo(r, s) {
    Ga = r, of = $o = null, r = r.dependencies, r !== null && r.firstContext !== null && ((r.lanes & s) !== 0 && (Et = !0), r.firstContext = null);
  }
  function Yt(r) {
    var s = r._currentValue;
    if (of !== r) if (r = { context: r, memoizedValue: s, next: null }, $o === null) {
      if (Ga === null) throw Error(n(308));
      $o = r, Ga.dependencies = { lanes: 0, firstContext: r };
    } else $o = $o.next = r;
    return s;
  }
  var Ur = null;
  function uf(r) {
    Ur === null ? Ur = [r] : Ur.push(r);
  }
  function Nx(r, s, c, g) {
    var x = s.interleaved;
    return x === null ? (c.next = c, uf(s)) : (c.next = x.next, x.next = c), s.interleaved = c, Vn(r, g);
  }
  function Vn(r, s) {
    r.lanes |= s;
    var c = r.alternate;
    for (c !== null && (c.lanes |= s), c = r, r = r.return; r !== null; ) r.childLanes |= s, c = r.alternate, c !== null && (c.childLanes |= s), c = r, r = r.return;
    return c.tag === 3 ? c.stateNode : null;
  }
  var gr = !1;
  function cf(r) {
    r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Rx(r, s) {
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
    return x = g.interleaved, x === null ? (s.next = s, uf(g)) : (s.next = x.next, x.next = s), g.interleaved = s, Vn(r, c);
  }
  function Ya(r, s, c) {
    if (s = s.updateQueue, s !== null && (s = s.shared, (c & 4194240) !== 0)) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Sc(r, c);
    }
  }
  function Px(r, s) {
    var c = r.updateQueue, g = r.alternate;
    if (g !== null && (g = g.updateQueue, c === g)) {
      var x = null, S = null;
      if (c = c.firstBaseUpdate, c !== null) {
        do {
          var A = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          S === null ? x = S = A : S = S.next = A, c = c.next;
        } while (c !== null);
        S === null ? x = S = s : S = S.next = s;
      } else x = S = s;
      c = { baseState: g.baseState, firstBaseUpdate: x, lastBaseUpdate: S, shared: g.shared, effects: g.effects }, r.updateQueue = c;
      return;
    }
    r = c.lastBaseUpdate, r === null ? c.firstBaseUpdate = s : r.next = s, c.lastBaseUpdate = s;
  }
  function Ka(r, s, c, g) {
    var x = r.updateQueue;
    gr = !1;
    var S = x.firstBaseUpdate, A = x.lastBaseUpdate, F = x.shared.pending;
    if (F !== null) {
      x.shared.pending = null;
      var K = F, oe = K.next;
      K.next = null, A === null ? S = oe : A.next = oe, A = K;
      var ue = r.alternate;
      ue !== null && (ue = ue.updateQueue, F = ue.lastBaseUpdate, F !== A && (F === null ? ue.firstBaseUpdate = oe : F.next = oe, ue.lastBaseUpdate = K));
    }
    if (S !== null) {
      var fe = x.baseState;
      A = 0, ue = oe = K = null, F = S;
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
        } else ge = { eventTime: ge, lane: le, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, ue === null ? (oe = ue = ge, K = fe) : ue = ue.next = ge, A |= le;
        if (F = F.next, F === null) {
          if (F = x.shared.pending, F === null) break;
          le = F, F = le.next, le.next = null, x.lastBaseUpdate = le, x.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (K = fe), x.baseState = K, x.firstBaseUpdate = oe, x.lastBaseUpdate = ue, s = x.shared.interleaved, s !== null) {
        x = s;
        do
          A |= x.lane, x = x.next;
        while (x !== s);
      } else S === null && (x.shared.lanes = 0);
      Kr |= A, r.lanes = A, r.memoizedState = fe;
    }
  }
  function Tx(r, s, c) {
    if (r = s.effects, s.effects = null, r !== null) for (s = 0; s < r.length; s++) {
      var g = r[s], x = g.callback;
      if (x !== null) {
        if (g.callback = null, g = c, typeof x != "function") throw Error(n(191, x));
        x.call(g);
      }
    }
  }
  var os = {}, En = dr(os), is = dr(os), ss = dr(os);
  function Gr(r) {
    if (r === os) throw Error(n(174));
    return r;
  }
  function ff(r, s) {
    switch (ze(ss, s), ze(is, r), ze(En, os), r = s.nodeType, r) {
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
    $e(En), $e(is), $e(ss);
  }
  function Ax(r) {
    Gr(ss.current);
    var s = Gr(En.current), c = Bt(s, r.type);
    s !== c && (ze(is, r), ze(En, c));
  }
  function df(r) {
    is.current === r && ($e(En), $e(is));
  }
  var Ke = dr(0);
  function Xa(r) {
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
  var hf = [];
  function pf() {
    for (var r = 0; r < hf.length; r++) hf[r]._workInProgressVersionPrimary = null;
    hf.length = 0;
  }
  var Qa = k.ReactCurrentDispatcher, gf = k.ReactCurrentBatchConfig, Yr = 0, Xe = null, ot = null, lt = null, Za = !1, as = !1, ls = 0, C2 = 0;
  function gt() {
    throw Error(n(321));
  }
  function mf(r, s) {
    if (s === null) return !1;
    for (var c = 0; c < s.length && c < r.length; c++) if (!rn(r[c], s[c])) return !1;
    return !0;
  }
  function vf(r, s, c, g, x, S) {
    if (Yr = S, Xe = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Qa.current = r === null || r.memoizedState === null ? P2 : T2, r = c(g, x), as) {
      S = 0;
      do {
        if (as = !1, ls = 0, 25 <= S) throw Error(n(301));
        S += 1, lt = ot = null, s.updateQueue = null, Qa.current = A2, r = c(g, x);
      } while (as);
    }
    if (Qa.current = tl, s = ot !== null && ot.next !== null, Yr = 0, lt = ot = Xe = null, Za = !1, s) throw Error(n(300));
    return r;
  }
  function yf() {
    var r = ls !== 0;
    return ls = 0, r;
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
  function us(r, s) {
    return typeof s == "function" ? s(r) : s;
  }
  function xf(r) {
    var s = Kt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = ot, x = g.baseQueue, S = c.pending;
    if (S !== null) {
      if (x !== null) {
        var A = x.next;
        x.next = S.next, S.next = A;
      }
      g.baseQueue = x = S, c.pending = null;
    }
    if (x !== null) {
      S = x.next, g = g.baseState;
      var F = A = null, K = null, oe = S;
      do {
        var ue = oe.lane;
        if ((Yr & ue) === ue) K !== null && (K = K.next = { lane: 0, action: oe.action, hasEagerState: oe.hasEagerState, eagerState: oe.eagerState, next: null }), g = oe.hasEagerState ? oe.eagerState : r(g, oe.action);
        else {
          var fe = {
            lane: ue,
            action: oe.action,
            hasEagerState: oe.hasEagerState,
            eagerState: oe.eagerState,
            next: null
          };
          K === null ? (F = K = fe, A = g) : K = K.next = fe, Xe.lanes |= ue, Kr |= ue;
        }
        oe = oe.next;
      } while (oe !== null && oe !== S);
      K === null ? A = g : K.next = F, rn(g, s.memoizedState) || (Et = !0), s.memoizedState = g, s.baseState = A, s.baseQueue = K, c.lastRenderedState = g;
    }
    if (r = c.interleaved, r !== null) {
      x = r;
      do
        S = x.lane, Xe.lanes |= S, Kr |= S, x = x.next;
      while (x !== r);
    } else x === null && (c.lanes = 0);
    return [s.memoizedState, c.dispatch];
  }
  function wf(r) {
    var s = Kt(), c = s.queue;
    if (c === null) throw Error(n(311));
    c.lastRenderedReducer = r;
    var g = c.dispatch, x = c.pending, S = s.memoizedState;
    if (x !== null) {
      c.pending = null;
      var A = x = x.next;
      do
        S = r(S, A.action), A = A.next;
      while (A !== x);
      rn(S, s.memoizedState) || (Et = !0), s.memoizedState = S, s.baseQueue === null && (s.baseState = S), c.lastRenderedState = S;
    }
    return [S, g];
  }
  function Ix() {
  }
  function Mx(r, s) {
    var c = Xe, g = Kt(), x = s(), S = !rn(g.memoizedState, x);
    if (S && (g.memoizedState = x, Et = !0), g = g.queue, _f(jx.bind(null, c, g, r), [r]), g.getSnapshot !== s || S || lt !== null && lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, cs(9, Lx.bind(null, c, g, x, s), void 0, null), ut === null) throw Error(n(349));
      (Yr & 30) !== 0 || Ox(c, s, x);
    }
    return x;
  }
  function Ox(r, s, c) {
    r.flags |= 16384, r = { getSnapshot: s, value: c }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.stores = [r]) : (c = s.stores, c === null ? s.stores = [r] : c.push(r));
  }
  function Lx(r, s, c, g) {
    s.value = c, s.getSnapshot = g, Dx(s) && qx(r);
  }
  function jx(r, s, c) {
    return c(function() {
      Dx(s) && qx(r);
    });
  }
  function Dx(r) {
    var s = r.getSnapshot;
    r = r.value;
    try {
      var c = s();
      return !rn(r, c);
    } catch {
      return !0;
    }
  }
  function qx(r) {
    var s = Vn(r, 1);
    s !== null && un(s, r, 1, -1);
  }
  function zx(r) {
    var s = Cn();
    return typeof r == "function" && (r = r()), s.memoizedState = s.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: us, lastRenderedState: r }, s.queue = r, r = r.dispatch = R2.bind(null, Xe, r), [s.memoizedState, r];
  }
  function cs(r, s, c, g) {
    return r = { tag: r, create: s, destroy: c, deps: g, next: null }, s = Xe.updateQueue, s === null ? (s = { lastEffect: null, stores: null }, Xe.updateQueue = s, s.lastEffect = r.next = r) : (c = s.lastEffect, c === null ? s.lastEffect = r.next = r : (g = c.next, c.next = r, r.next = g, s.lastEffect = r)), r;
  }
  function Fx() {
    return Kt().memoizedState;
  }
  function Ja(r, s, c, g) {
    var x = Cn();
    Xe.flags |= r, x.memoizedState = cs(1 | s, c, void 0, g === void 0 ? null : g);
  }
  function el(r, s, c, g) {
    var x = Kt();
    g = g === void 0 ? null : g;
    var S = void 0;
    if (ot !== null) {
      var A = ot.memoizedState;
      if (S = A.destroy, g !== null && mf(g, A.deps)) {
        x.memoizedState = cs(s, c, S, g);
        return;
      }
    }
    Xe.flags |= r, x.memoizedState = cs(1 | s, c, S, g);
  }
  function $x(r, s) {
    return Ja(8390656, 8, r, s);
  }
  function _f(r, s) {
    return el(2048, 8, r, s);
  }
  function Bx(r, s) {
    return el(4, 2, r, s);
  }
  function Vx(r, s) {
    return el(4, 4, r, s);
  }
  function Hx(r, s) {
    if (typeof s == "function") return r = r(), s(r), function() {
      s(null);
    };
    if (s != null) return r = r(), s.current = r, function() {
      s.current = null;
    };
  }
  function Wx(r, s, c) {
    return c = c != null ? c.concat([r]) : null, el(4, 4, Hx.bind(null, s, r), c);
  }
  function bf() {
  }
  function Ux(r, s) {
    var c = Kt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && mf(s, g[1]) ? g[0] : (c.memoizedState = [r, s], r);
  }
  function Gx(r, s) {
    var c = Kt();
    s = s === void 0 ? null : s;
    var g = c.memoizedState;
    return g !== null && s !== null && mf(s, g[1]) ? g[0] : (r = r(), c.memoizedState = [r, s], r);
  }
  function Yx(r, s, c) {
    return (Yr & 21) === 0 ? (r.baseState && (r.baseState = !1, Et = !0), r.memoizedState = c) : (rn(c, s) || (c = ba(), Xe.lanes |= c, Kr |= c, r.baseState = !0), s);
  }
  function k2(r, s) {
    var c = qe;
    qe = c !== 0 && 4 > c ? c : 4, r(!0);
    var g = gf.transition;
    gf.transition = {};
    try {
      r(!1), s();
    } finally {
      qe = c, gf.transition = g;
    }
  }
  function Kx() {
    return Kt().memoizedState;
  }
  function N2(r, s, c) {
    var g = wr(r);
    if (c = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null }, Xx(r)) Qx(s, c);
    else if (c = Nx(r, s, c, g), c !== null) {
      var x = wt();
      un(c, r, g, x), Zx(c, s, g);
    }
  }
  function R2(r, s, c) {
    var g = wr(r), x = { lane: g, action: c, hasEagerState: !1, eagerState: null, next: null };
    if (Xx(r)) Qx(s, x);
    else {
      var S = r.alternate;
      if (r.lanes === 0 && (S === null || S.lanes === 0) && (S = s.lastRenderedReducer, S !== null)) try {
        var A = s.lastRenderedState, F = S(A, c);
        if (x.hasEagerState = !0, x.eagerState = F, rn(F, A)) {
          var K = s.interleaved;
          K === null ? (x.next = x, uf(s)) : (x.next = K.next, K.next = x), s.interleaved = x;
          return;
        }
      } catch {
      } finally {
      }
      c = Nx(r, s, x, g), c !== null && (x = wt(), un(c, r, g, x), Zx(c, s, g));
    }
  }
  function Xx(r) {
    var s = r.alternate;
    return r === Xe || s !== null && s === Xe;
  }
  function Qx(r, s) {
    as = Za = !0;
    var c = r.pending;
    c === null ? s.next = s : (s.next = c.next, c.next = s), r.pending = s;
  }
  function Zx(r, s, c) {
    if ((c & 4194240) !== 0) {
      var g = s.lanes;
      g &= r.pendingLanes, c |= g, s.lanes = c, Sc(r, c);
    }
  }
  var tl = { readContext: Yt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, P2 = { readContext: Yt, useCallback: function(r, s) {
    return Cn().memoizedState = [r, s === void 0 ? null : s], r;
  }, useContext: Yt, useEffect: $x, useImperativeHandle: function(r, s, c) {
    return c = c != null ? c.concat([r]) : null, Ja(
      4194308,
      4,
      Hx.bind(null, s, r),
      c
    );
  }, useLayoutEffect: function(r, s) {
    return Ja(4194308, 4, r, s);
  }, useInsertionEffect: function(r, s) {
    return Ja(4, 2, r, s);
  }, useMemo: function(r, s) {
    var c = Cn();
    return s = s === void 0 ? null : s, r = r(), c.memoizedState = [r, s], r;
  }, useReducer: function(r, s, c) {
    var g = Cn();
    return s = c !== void 0 ? c(s) : s, g.memoizedState = g.baseState = s, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: s }, g.queue = r, r = r.dispatch = N2.bind(null, Xe, r), [g.memoizedState, r];
  }, useRef: function(r) {
    var s = Cn();
    return r = { current: r }, s.memoizedState = r;
  }, useState: zx, useDebugValue: bf, useDeferredValue: function(r) {
    return Cn().memoizedState = r;
  }, useTransition: function() {
    var r = zx(!1), s = r[0];
    return r = k2.bind(null, r[1]), Cn().memoizedState = r, [s, r];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(r, s, c) {
    var g = Xe, x = Cn();
    if (Ve) {
      if (c === void 0) throw Error(n(407));
      c = c();
    } else {
      if (c = s(), ut === null) throw Error(n(349));
      (Yr & 30) !== 0 || Ox(g, s, c);
    }
    x.memoizedState = c;
    var S = { value: c, getSnapshot: s };
    return x.queue = S, $x(jx.bind(
      null,
      g,
      S,
      r
    ), [r]), g.flags |= 2048, cs(9, Lx.bind(null, g, S, c, s), void 0, null), c;
  }, useId: function() {
    var r = Cn(), s = ut.identifierPrefix;
    if (Ve) {
      var c = Bn, g = $n;
      c = (g & ~(1 << 32 - At(g) - 1)).toString(32) + c, s = ":" + s + "R" + c, c = ls++, 0 < c && (s += "H" + c.toString(32)), s += ":";
    } else c = C2++, s = ":" + s + "r" + c.toString(32) + ":";
    return r.memoizedState = s;
  }, unstable_isNewReconciler: !1 }, T2 = {
    readContext: Yt,
    useCallback: Ux,
    useContext: Yt,
    useEffect: _f,
    useImperativeHandle: Wx,
    useInsertionEffect: Bx,
    useLayoutEffect: Vx,
    useMemo: Gx,
    useReducer: xf,
    useRef: Fx,
    useState: function() {
      return xf(us);
    },
    useDebugValue: bf,
    useDeferredValue: function(r) {
      var s = Kt();
      return Yx(s, ot.memoizedState, r);
    },
    useTransition: function() {
      var r = xf(us)[0], s = Kt().memoizedState;
      return [r, s];
    },
    useMutableSource: Ix,
    useSyncExternalStore: Mx,
    useId: Kx,
    unstable_isNewReconciler: !1
  }, A2 = { readContext: Yt, useCallback: Ux, useContext: Yt, useEffect: _f, useImperativeHandle: Wx, useInsertionEffect: Bx, useLayoutEffect: Vx, useMemo: Gx, useReducer: wf, useRef: Fx, useState: function() {
    return wf(us);
  }, useDebugValue: bf, useDeferredValue: function(r) {
    var s = Kt();
    return ot === null ? s.memoizedState = r : Yx(s, ot.memoizedState, r);
  }, useTransition: function() {
    var r = wf(us)[0], s = Kt().memoizedState;
    return [r, s];
  }, useMutableSource: Ix, useSyncExternalStore: Mx, useId: Kx, unstable_isNewReconciler: !1 };
  function sn(r, s) {
    if (r && r.defaultProps) {
      s = Q({}, s), r = r.defaultProps;
      for (var c in r) s[c] === void 0 && (s[c] = r[c]);
      return s;
    }
    return s;
  }
  function Sf(r, s, c, g) {
    s = r.memoizedState, c = c(g, s), c = c == null ? s : Q({}, s, c), r.memoizedState = c, r.lanes === 0 && (r.updateQueue.baseState = c);
  }
  var nl = { isMounted: function(r) {
    return (r = r._reactInternals) ? _n(r) === r : !1;
  }, enqueueSetState: function(r, s, c) {
    r = r._reactInternals;
    var g = wt(), x = wr(r), S = Hn(g, x);
    S.payload = s, c != null && (S.callback = c), s = mr(r, S, x), s !== null && (un(s, r, x, g), Ya(s, r, x));
  }, enqueueReplaceState: function(r, s, c) {
    r = r._reactInternals;
    var g = wt(), x = wr(r), S = Hn(g, x);
    S.tag = 1, S.payload = s, c != null && (S.callback = c), s = mr(r, S, x), s !== null && (un(s, r, x, g), Ya(s, r, x));
  }, enqueueForceUpdate: function(r, s) {
    r = r._reactInternals;
    var c = wt(), g = wr(r), x = Hn(c, g);
    x.tag = 2, s != null && (x.callback = s), s = mr(r, x, g), s !== null && (un(s, r, g, c), Ya(s, r, g));
  } };
  function Jx(r, s, c, g, x, S, A) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(g, S, A) : s.prototype && s.prototype.isPureReactComponent ? !Xi(c, g) || !Xi(x, S) : !0;
  }
  function ew(r, s, c) {
    var g = !1, x = hr, S = s.contextType;
    return typeof S == "object" && S !== null ? S = Yt(S) : (x = St(s) ? Vr : pt.current, g = s.contextTypes, S = (g = g != null) ? jo(r, x) : hr), s = new s(c, S), r.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = nl, r.stateNode = s, s._reactInternals = r, g && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = x, r.__reactInternalMemoizedMaskedChildContext = S), s;
  }
  function tw(r, s, c, g) {
    r = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(c, g), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(c, g), s.state !== r && nl.enqueueReplaceState(s, s.state, null);
  }
  function Ef(r, s, c, g) {
    var x = r.stateNode;
    x.props = c, x.state = r.memoizedState, x.refs = {}, cf(r);
    var S = s.contextType;
    typeof S == "object" && S !== null ? x.context = Yt(S) : (S = St(s) ? Vr : pt.current, x.context = jo(r, S)), x.state = r.memoizedState, S = s.getDerivedStateFromProps, typeof S == "function" && (Sf(r, s, S, c), x.state = r.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function" || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (s = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), s !== x.state && nl.enqueueReplaceState(x, x.state, null), Ka(r, c, x, g), x.state = r.memoizedState), typeof x.componentDidMount == "function" && (r.flags |= 4194308);
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
  function Cf(r, s, c) {
    return { value: r, source: null, stack: c ?? null, digest: s ?? null };
  }
  function kf(r, s) {
    try {
      console.error(s.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var I2 = typeof WeakMap == "function" ? WeakMap : Map;
  function nw(r, s, c) {
    c = Hn(-1, c), c.tag = 3, c.payload = { element: null };
    var g = s.value;
    return c.callback = function() {
      ul || (ul = !0, $f = g), kf(r, s);
    }, c;
  }
  function rw(r, s, c) {
    c = Hn(-1, c), c.tag = 3;
    var g = r.type.getDerivedStateFromError;
    if (typeof g == "function") {
      var x = s.value;
      c.payload = function() {
        return g(x);
      }, c.callback = function() {
        kf(r, s);
      };
    }
    var S = r.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (c.callback = function() {
      kf(r, s), typeof g != "function" && (yr === null ? yr = /* @__PURE__ */ new Set([this]) : yr.add(this));
      var A = s.stack;
      this.componentDidCatch(s.value, { componentStack: A !== null ? A : "" });
    }), c;
  }
  function ow(r, s, c) {
    var g = r.pingCache;
    if (g === null) {
      g = r.pingCache = new I2();
      var x = /* @__PURE__ */ new Set();
      g.set(s, x);
    } else x = g.get(s), x === void 0 && (x = /* @__PURE__ */ new Set(), g.set(s, x));
    x.has(c) || (x.add(c), r = U2.bind(null, r, s, c), s.then(r, r));
  }
  function iw(r) {
    do {
      var s;
      if ((s = r.tag === 13) && (s = r.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function sw(r, s, c, g, x) {
    return (r.mode & 1) === 0 ? (r === s ? r.flags |= 65536 : (r.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (s = Hn(-1, 1), s.tag = 2, mr(c, s, 1))), c.lanes |= 1), r) : (r.flags |= 65536, r.lanes = x, r);
  }
  var M2 = k.ReactCurrentOwner, Et = !1;
  function xt(r, s, c, g) {
    s.child = r === null ? kx(s, null, c, g) : Fo(s, r.child, c, g);
  }
  function aw(r, s, c, g, x) {
    c = c.render;
    var S = s.ref;
    return Bo(s, x), g = vf(r, s, c, g, S, x), c = yf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~x, Wn(r, s, x)) : (Ve && c && Jc(s), s.flags |= 1, xt(r, s, g, x), s.child);
  }
  function lw(r, s, c, g, x) {
    if (r === null) {
      var S = c.type;
      return typeof S == "function" && !Yf(S) && S.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0 ? (s.tag = 15, s.type = S, uw(r, s, S, g, x)) : (r = gl(c.type, null, g, s, s.mode, x), r.ref = s.ref, r.return = s, s.child = r);
    }
    if (S = r.child, (r.lanes & x) === 0) {
      var A = S.memoizedProps;
      if (c = c.compare, c = c !== null ? c : Xi, c(A, g) && r.ref === s.ref) return Wn(r, s, x);
    }
    return s.flags |= 1, r = br(S, g), r.ref = s.ref, r.return = s, s.child = r;
  }
  function uw(r, s, c, g, x) {
    if (r !== null) {
      var S = r.memoizedProps;
      if (Xi(S, g) && r.ref === s.ref) if (Et = !1, s.pendingProps = g = S, (r.lanes & x) !== 0) (r.flags & 131072) !== 0 && (Et = !0);
      else return s.lanes = r.lanes, Wn(r, s, x);
    }
    return Nf(r, s, c, g, x);
  }
  function cw(r, s, c) {
    var g = s.pendingProps, x = g.children, S = r !== null ? r.memoizedState : null;
    if (g.mode === "hidden") if ((s.mode & 1) === 0) s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ze(Uo, Lt), Lt |= c;
    else {
      if ((c & 1073741824) === 0) return r = S !== null ? S.baseLanes | c : c, s.lanes = s.childLanes = 1073741824, s.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, s.updateQueue = null, ze(Uo, Lt), Lt |= r, null;
      s.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, g = S !== null ? S.baseLanes : c, ze(Uo, Lt), Lt |= g;
    }
    else S !== null ? (g = S.baseLanes | c, s.memoizedState = null) : g = c, ze(Uo, Lt), Lt |= g;
    return xt(r, s, x, c), s.child;
  }
  function fw(r, s) {
    var c = s.ref;
    (r === null && c !== null || r !== null && r.ref !== c) && (s.flags |= 512, s.flags |= 2097152);
  }
  function Nf(r, s, c, g, x) {
    var S = St(c) ? Vr : pt.current;
    return S = jo(s, S), Bo(s, x), c = vf(r, s, c, g, S, x), g = yf(), r !== null && !Et ? (s.updateQueue = r.updateQueue, s.flags &= -2053, r.lanes &= ~x, Wn(r, s, x)) : (Ve && g && Jc(s), s.flags |= 1, xt(r, s, c, x), s.child);
  }
  function dw(r, s, c, g, x) {
    if (St(c)) {
      var S = !0;
      Fa(s);
    } else S = !1;
    if (Bo(s, x), s.stateNode === null) ol(r, s), ew(s, c, g), Ef(s, c, g, x), g = !0;
    else if (r === null) {
      var A = s.stateNode, F = s.memoizedProps;
      A.props = F;
      var K = A.context, oe = c.contextType;
      typeof oe == "object" && oe !== null ? oe = Yt(oe) : (oe = St(c) ? Vr : pt.current, oe = jo(s, oe));
      var ue = c.getDerivedStateFromProps, fe = typeof ue == "function" || typeof A.getSnapshotBeforeUpdate == "function";
      fe || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (F !== g || K !== oe) && tw(s, A, g, oe), gr = !1;
      var le = s.memoizedState;
      A.state = le, Ka(s, g, A, x), K = s.memoizedState, F !== g || le !== K || bt.current || gr ? (typeof ue == "function" && (Sf(s, c, ue, g), K = s.memoizedState), (F = gr || Jx(s, c, F, g, le, K, oe)) ? (fe || typeof A.UNSAFE_componentWillMount != "function" && typeof A.componentWillMount != "function" || (typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount()), typeof A.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof A.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = g, s.memoizedState = K), A.props = g, A.state = K, A.context = oe, g = F) : (typeof A.componentDidMount == "function" && (s.flags |= 4194308), g = !1);
    } else {
      A = s.stateNode, Rx(r, s), F = s.memoizedProps, oe = s.type === s.elementType ? F : sn(s.type, F), A.props = oe, fe = s.pendingProps, le = A.context, K = c.contextType, typeof K == "object" && K !== null ? K = Yt(K) : (K = St(c) ? Vr : pt.current, K = jo(s, K));
      var ge = c.getDerivedStateFromProps;
      (ue = typeof ge == "function" || typeof A.getSnapshotBeforeUpdate == "function") || typeof A.UNSAFE_componentWillReceiveProps != "function" && typeof A.componentWillReceiveProps != "function" || (F !== fe || le !== K) && tw(s, A, g, K), gr = !1, le = s.memoizedState, A.state = le, Ka(s, g, A, x);
      var xe = s.memoizedState;
      F !== fe || le !== xe || bt.current || gr ? (typeof ge == "function" && (Sf(s, c, ge, g), xe = s.memoizedState), (oe = gr || Jx(s, c, oe, g, le, xe, K) || !1) ? (ue || typeof A.UNSAFE_componentWillUpdate != "function" && typeof A.componentWillUpdate != "function" || (typeof A.componentWillUpdate == "function" && A.componentWillUpdate(g, xe, K), typeof A.UNSAFE_componentWillUpdate == "function" && A.UNSAFE_componentWillUpdate(g, xe, K)), typeof A.componentDidUpdate == "function" && (s.flags |= 4), typeof A.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof A.componentDidUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), s.memoizedProps = g, s.memoizedState = xe), A.props = g, A.state = xe, A.context = K, g = oe) : (typeof A.componentDidUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 4), typeof A.getSnapshotBeforeUpdate != "function" || F === r.memoizedProps && le === r.memoizedState || (s.flags |= 1024), g = !1);
    }
    return Rf(r, s, c, g, S, x);
  }
  function Rf(r, s, c, g, x, S) {
    fw(r, s);
    var A = (s.flags & 128) !== 0;
    if (!g && !A) return x && vx(s, c, !1), Wn(r, s, S);
    g = s.stateNode, M2.current = s;
    var F = A && typeof c.getDerivedStateFromError != "function" ? null : g.render();
    return s.flags |= 1, r !== null && A ? (s.child = Fo(s, r.child, null, S), s.child = Fo(s, null, F, S)) : xt(r, s, F, S), s.memoizedState = g.state, x && vx(s, c, !0), s.child;
  }
  function hw(r) {
    var s = r.stateNode;
    s.pendingContext ? gx(r, s.pendingContext, s.pendingContext !== s.context) : s.context && gx(r, s.context, !1), ff(r, s.containerInfo);
  }
  function pw(r, s, c, g, x) {
    return zo(), rf(x), s.flags |= 256, xt(r, s, c, g), s.child;
  }
  var Pf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Tf(r) {
    return { baseLanes: r, cachePool: null, transitions: null };
  }
  function gw(r, s, c) {
    var g = s.pendingProps, x = Ke.current, S = !1, A = (s.flags & 128) !== 0, F;
    if ((F = A) || (F = r !== null && r.memoizedState === null ? !1 : (x & 2) !== 0), F ? (S = !0, s.flags &= -129) : (r === null || r.memoizedState !== null) && (x |= 1), ze(Ke, x & 1), r === null)
      return nf(s), r = s.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : r.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (A = g.children, r = g.fallback, S ? (g = s.mode, S = s.child, A = { mode: "hidden", children: A }, (g & 1) === 0 && S !== null ? (S.childLanes = 0, S.pendingProps = A) : S = ml(A, g, 0, null), r = Jr(r, g, c, null), S.return = s, r.return = s, S.sibling = r, s.child = S, s.child.memoizedState = Tf(c), s.memoizedState = Pf, r) : Af(s, A));
    if (x = r.memoizedState, x !== null && (F = x.dehydrated, F !== null)) return O2(r, s, A, g, F, x, c);
    if (S) {
      S = g.fallback, A = s.mode, x = r.child, F = x.sibling;
      var K = { mode: "hidden", children: g.children };
      return (A & 1) === 0 && s.child !== x ? (g = s.child, g.childLanes = 0, g.pendingProps = K, s.deletions = null) : (g = br(x, K), g.subtreeFlags = x.subtreeFlags & 14680064), F !== null ? S = br(F, S) : (S = Jr(S, A, c, null), S.flags |= 2), S.return = s, g.return = s, g.sibling = S, s.child = g, g = S, S = s.child, A = r.child.memoizedState, A = A === null ? Tf(c) : { baseLanes: A.baseLanes | c, cachePool: null, transitions: A.transitions }, S.memoizedState = A, S.childLanes = r.childLanes & ~c, s.memoizedState = Pf, g;
    }
    return S = r.child, r = S.sibling, g = br(S, { mode: "visible", children: g.children }), (s.mode & 1) === 0 && (g.lanes = c), g.return = s, g.sibling = null, r !== null && (c = s.deletions, c === null ? (s.deletions = [r], s.flags |= 16) : c.push(r)), s.child = g, s.memoizedState = null, g;
  }
  function Af(r, s) {
    return s = ml({ mode: "visible", children: s }, r.mode, 0, null), s.return = r, r.child = s;
  }
  function rl(r, s, c, g) {
    return g !== null && rf(g), Fo(s, r.child, null, c), r = Af(s, s.pendingProps.children), r.flags |= 2, s.memoizedState = null, r;
  }
  function O2(r, s, c, g, x, S, A) {
    if (c)
      return s.flags & 256 ? (s.flags &= -257, g = Cf(Error(n(422))), rl(r, s, A, g)) : s.memoizedState !== null ? (s.child = r.child, s.flags |= 128, null) : (S = g.fallback, x = s.mode, g = ml({ mode: "visible", children: g.children }, x, 0, null), S = Jr(S, x, A, null), S.flags |= 2, g.return = s, S.return = s, g.sibling = S, s.child = g, (s.mode & 1) !== 0 && Fo(s, r.child, null, A), s.child.memoizedState = Tf(A), s.memoizedState = Pf, S);
    if ((s.mode & 1) === 0) return rl(r, s, A, null);
    if (x.data === "$!") {
      if (g = x.nextSibling && x.nextSibling.dataset, g) var F = g.dgst;
      return g = F, S = Error(n(419)), g = Cf(S, g, void 0), rl(r, s, A, g);
    }
    if (F = (A & r.childLanes) !== 0, Et || F) {
      if (g = ut, g !== null) {
        switch (A & -A) {
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
        x = (x & (g.suspendedLanes | A)) !== 0 ? 0 : x, x !== 0 && x !== S.retryLane && (S.retryLane = x, Vn(r, x), un(g, r, x, -1));
      }
      return Gf(), g = Cf(Error(n(421))), rl(r, s, A, g);
    }
    return x.data === "$?" ? (s.flags |= 128, s.child = r.child, s = G2.bind(null, r), x._reactRetry = s, null) : (r = S.treeContext, Ot = fr(x.nextSibling), Mt = s, Ve = !0, on = null, r !== null && (Ut[Gt++] = $n, Ut[Gt++] = Bn, Ut[Gt++] = Hr, $n = r.id, Bn = r.overflow, Hr = s), s = Af(s, g.children), s.flags |= 4096, s);
  }
  function mw(r, s, c) {
    r.lanes |= s;
    var g = r.alternate;
    g !== null && (g.lanes |= s), lf(r.return, s, c);
  }
  function If(r, s, c, g, x) {
    var S = r.memoizedState;
    S === null ? r.memoizedState = { isBackwards: s, rendering: null, renderingStartTime: 0, last: g, tail: c, tailMode: x } : (S.isBackwards = s, S.rendering = null, S.renderingStartTime = 0, S.last = g, S.tail = c, S.tailMode = x);
  }
  function vw(r, s, c) {
    var g = s.pendingProps, x = g.revealOrder, S = g.tail;
    if (xt(r, s, g.children, c), g = Ke.current, (g & 2) !== 0) g = g & 1 | 2, s.flags |= 128;
    else {
      if (r !== null && (r.flags & 128) !== 0) e: for (r = s.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && mw(r, c, s);
        else if (r.tag === 19) mw(r, c, s);
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
        for (c = s.child, x = null; c !== null; ) r = c.alternate, r !== null && Xa(r) === null && (x = c), c = c.sibling;
        c = x, c === null ? (x = s.child, s.child = null) : (x = c.sibling, c.sibling = null), If(s, !1, x, c, S);
        break;
      case "backwards":
        for (c = null, x = s.child, s.child = null; x !== null; ) {
          if (r = x.alternate, r !== null && Xa(r) === null) {
            s.child = x;
            break;
          }
          r = x.sibling, x.sibling = c, c = x, x = r;
        }
        If(s, !0, c, null, S);
        break;
      case "together":
        If(s, !1, null, null, void 0);
        break;
      default:
        s.memoizedState = null;
    }
    return s.child;
  }
  function ol(r, s) {
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
  function L2(r, s, c) {
    switch (s.tag) {
      case 3:
        hw(s), zo();
        break;
      case 5:
        Ax(s);
        break;
      case 1:
        St(s.type) && Fa(s);
        break;
      case 4:
        ff(s, s.stateNode.containerInfo);
        break;
      case 10:
        var g = s.type._context, x = s.memoizedProps.value;
        ze(Ua, g._currentValue), g._currentValue = x;
        break;
      case 13:
        if (g = s.memoizedState, g !== null)
          return g.dehydrated !== null ? (ze(Ke, Ke.current & 1), s.flags |= 128, null) : (c & s.child.childLanes) !== 0 ? gw(r, s, c) : (ze(Ke, Ke.current & 1), r = Wn(r, s, c), r !== null ? r.sibling : null);
        ze(Ke, Ke.current & 1);
        break;
      case 19:
        if (g = (c & s.childLanes) !== 0, (r.flags & 128) !== 0) {
          if (g) return vw(r, s, c);
          s.flags |= 128;
        }
        if (x = s.memoizedState, x !== null && (x.rendering = null, x.tail = null, x.lastEffect = null), ze(Ke, Ke.current), g) break;
        return null;
      case 22:
      case 23:
        return s.lanes = 0, cw(r, s, c);
    }
    return Wn(r, s, c);
  }
  var yw, Mf, xw, ww;
  yw = function(r, s) {
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
  }, Mf = function() {
  }, xw = function(r, s, c, g) {
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
      Ri(c, g);
      var A;
      c = null;
      for (oe in x) if (!g.hasOwnProperty(oe) && x.hasOwnProperty(oe) && x[oe] != null) if (oe === "style") {
        var F = x[oe];
        for (A in F) F.hasOwnProperty(A) && (c || (c = {}), c[A] = "");
      } else oe !== "dangerouslySetInnerHTML" && oe !== "children" && oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && oe !== "autoFocus" && (i.hasOwnProperty(oe) ? S || (S = []) : (S = S || []).push(oe, null));
      for (oe in g) {
        var K = g[oe];
        if (F = x != null ? x[oe] : void 0, g.hasOwnProperty(oe) && K !== F && (K != null || F != null)) if (oe === "style") if (F) {
          for (A in F) !F.hasOwnProperty(A) || K && K.hasOwnProperty(A) || (c || (c = {}), c[A] = "");
          for (A in K) K.hasOwnProperty(A) && F[A] !== K[A] && (c || (c = {}), c[A] = K[A]);
        } else c || (S || (S = []), S.push(
          oe,
          c
        )), c = K;
        else oe === "dangerouslySetInnerHTML" ? (K = K ? K.__html : void 0, F = F ? F.__html : void 0, K != null && F !== K && (S = S || []).push(oe, K)) : oe === "children" ? typeof K != "string" && typeof K != "number" || (S = S || []).push(oe, "" + K) : oe !== "suppressContentEditableWarning" && oe !== "suppressHydrationWarning" && (i.hasOwnProperty(oe) ? (K != null && oe === "onScroll" && Fe("scroll", r), S || F === K || (S = [])) : (S = S || []).push(oe, K));
      }
      c && (S = S || []).push("style", c);
      var oe = S;
      (s.updateQueue = oe) && (s.flags |= 4);
    }
  }, ww = function(r, s, c, g) {
    c !== g && (s.flags |= 4);
  };
  function fs(r, s) {
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
  function j2(r, s, c) {
    var g = s.pendingProps;
    switch (ef(s), s.tag) {
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
        return St(s.type) && za(), mt(s), null;
      case 3:
        return g = s.stateNode, Vo(), $e(bt), $e(pt), pf(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), (r === null || r.child === null) && (Ha(s) ? s.flags |= 4 : r === null || r.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, on !== null && (Hf(on), on = null))), Mf(r, s), mt(s), null;
      case 5:
        df(s);
        var x = Gr(ss.current);
        if (c = s.type, r !== null && s.stateNode != null) xw(r, s, c, g, x), r.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
        else {
          if (!g) {
            if (s.stateNode === null) throw Error(n(166));
            return mt(s), null;
          }
          if (r = Gr(En.current), Ha(s)) {
            g = s.stateNode, c = s.type;
            var S = s.memoizedProps;
            switch (g[Sn] = s, g[ts] = S, r = (s.mode & 1) !== 0, c) {
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
                for (x = 0; x < Zi.length; x++) Fe(Zi[x], g);
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
                ve(g, S), Fe("invalid", g);
                break;
              case "select":
                g._wrapperState = { wasMultiple: !!S.multiple }, Fe("invalid", g);
                break;
              case "textarea":
                Ge(g, S), Fe("invalid", g);
            }
            Ri(c, S), x = null;
            for (var A in S) if (S.hasOwnProperty(A)) {
              var F = S[A];
              A === "children" ? typeof F == "string" ? g.textContent !== F && (S.suppressHydrationWarning !== !0 && ja(g.textContent, F, r), x = ["children", F]) : typeof F == "number" && g.textContent !== "" + F && (S.suppressHydrationWarning !== !0 && ja(
                g.textContent,
                F,
                r
              ), x = ["children", "" + F]) : i.hasOwnProperty(A) && F != null && A === "onScroll" && Fe("scroll", g);
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
            A = x.nodeType === 9 ? x : x.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = nn(c)), r === "http://www.w3.org/1999/xhtml" ? c === "script" ? (r = A.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof g.is == "string" ? r = A.createElement(c, { is: g.is }) : (r = A.createElement(c), c === "select" && (A = r, g.multiple ? A.multiple = !0 : g.size && (A.size = g.size))) : r = A.createElementNS(r, c), r[Sn] = s, r[ts] = g, yw(r, s, !1, !1), s.stateNode = r;
            e: {
              switch (A = Pi(c, g), c) {
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
                  for (x = 0; x < Zi.length; x++) Fe(Zi[x], r);
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
                  ve(r, g), x = be(r, g), Fe("invalid", r);
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
              Ri(c, x), F = x;
              for (S in F) if (F.hasOwnProperty(S)) {
                var K = F[S];
                S === "style" ? Ht(r, K) : S === "dangerouslySetInnerHTML" ? (K = K ? K.__html : void 0, K != null && jr(r, K)) : S === "children" ? typeof K == "string" ? (c !== "textarea" || K !== "") && Vt(r, K) : typeof K == "number" && Vt(r, "" + K) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (i.hasOwnProperty(S) ? K != null && S === "onScroll" && Fe("scroll", r) : K != null && _(r, S, K, A));
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
        if (r && s.stateNode != null) ww(r, s, r.memoizedProps, g);
        else {
          if (typeof g != "string" && s.stateNode === null) throw Error(n(166));
          if (c = Gr(ss.current), Gr(En.current), Ha(s)) {
            if (g = s.stateNode, c = s.memoizedProps, g[Sn] = s, (S = g.nodeValue !== c) && (r = Mt, r !== null)) switch (r.tag) {
              case 3:
                ja(g.nodeValue, c, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== !0 && ja(g.nodeValue, c, (r.mode & 1) !== 0);
            }
            S && (s.flags |= 4);
          } else g = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(g), g[Sn] = s, s.stateNode = g;
        }
        return mt(s), null;
      case 13:
        if ($e(Ke), g = s.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (Ve && Ot !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Sx(), zo(), s.flags |= 98560, S = !1;
          else if (S = Ha(s), g !== null && g.dehydrated !== null) {
            if (r === null) {
              if (!S) throw Error(n(318));
              if (S = s.memoizedState, S = S !== null ? S.dehydrated : null, !S) throw Error(n(317));
              S[Sn] = s;
            } else zo(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
            mt(s), S = !1;
          } else on !== null && (Hf(on), on = null), S = !0;
          if (!S) return s.flags & 65536 ? s : null;
        }
        return (s.flags & 128) !== 0 ? (s.lanes = c, s) : (g = g !== null, g !== (r !== null && r.memoizedState !== null) && g && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (r === null || (Ke.current & 1) !== 0 ? it === 0 && (it = 3) : Gf())), s.updateQueue !== null && (s.flags |= 4), mt(s), null);
      case 4:
        return Vo(), Mf(r, s), r === null && Ji(s.stateNode.containerInfo), mt(s), null;
      case 10:
        return af(s.type._context), mt(s), null;
      case 17:
        return St(s.type) && za(), mt(s), null;
      case 19:
        if ($e(Ke), S = s.memoizedState, S === null) return mt(s), null;
        if (g = (s.flags & 128) !== 0, A = S.rendering, A === null) if (g) fs(S, !1);
        else {
          if (it !== 0 || r !== null && (r.flags & 128) !== 0) for (r = s.child; r !== null; ) {
            if (A = Xa(r), A !== null) {
              for (s.flags |= 128, fs(S, !1), g = A.updateQueue, g !== null && (s.updateQueue = g, s.flags |= 4), s.subtreeFlags = 0, g = c, c = s.child; c !== null; ) S = c, r = g, S.flags &= 14680066, A = S.alternate, A === null ? (S.childLanes = 0, S.lanes = r, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = A.childLanes, S.lanes = A.lanes, S.child = A.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = A.memoizedProps, S.memoizedState = A.memoizedState, S.updateQueue = A.updateQueue, S.type = A.type, r = A.dependencies, S.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), c = c.sibling;
              return ze(Ke, Ke.current & 1 | 2), s.child;
            }
            r = r.sibling;
          }
          S.tail !== null && Ye() > Go && (s.flags |= 128, g = !0, fs(S, !1), s.lanes = 4194304);
        }
        else {
          if (!g) if (r = Xa(A), r !== null) {
            if (s.flags |= 128, g = !0, c = r.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), fs(S, !0), S.tail === null && S.tailMode === "hidden" && !A.alternate && !Ve) return mt(s), null;
          } else 2 * Ye() - S.renderingStartTime > Go && c !== 1073741824 && (s.flags |= 128, g = !0, fs(S, !1), s.lanes = 4194304);
          S.isBackwards ? (A.sibling = s.child, s.child = A) : (c = S.last, c !== null ? c.sibling = A : s.child = A, S.last = A);
        }
        return S.tail !== null ? (s = S.tail, S.rendering = s, S.tail = s.sibling, S.renderingStartTime = Ye(), s.sibling = null, c = Ke.current, ze(Ke, g ? c & 1 | 2 : c & 1), s) : (mt(s), null);
      case 22:
      case 23:
        return Uf(), g = s.memoizedState !== null, r !== null && r.memoizedState !== null !== g && (s.flags |= 8192), g && (s.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (mt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, s.tag));
  }
  function D2(r, s) {
    switch (ef(s), s.tag) {
      case 1:
        return St(s.type) && za(), r = s.flags, r & 65536 ? (s.flags = r & -65537 | 128, s) : null;
      case 3:
        return Vo(), $e(bt), $e(pt), pf(), r = s.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (s.flags = r & -65537 | 128, s) : null;
      case 5:
        return df(s), null;
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
        return af(s.type._context), null;
      case 22:
      case 23:
        return Uf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var il = !1, vt = !1, q2 = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function Wo(r, s) {
    var c = r.ref;
    if (c !== null) if (typeof c == "function") try {
      c(null);
    } catch (g) {
      Ze(r, s, g);
    }
    else c.current = null;
  }
  function Of(r, s, c) {
    try {
      c();
    } catch (g) {
      Ze(r, s, g);
    }
  }
  var _w = !1;
  function z2(r, s) {
    if (Wc = Ca, r = J0(), Dc(r)) {
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
          var A = 0, F = -1, K = -1, oe = 0, ue = 0, fe = r, le = null;
          t: for (; ; ) {
            for (var ge; fe !== c || x !== 0 && fe.nodeType !== 3 || (F = A + x), fe !== S || g !== 0 && fe.nodeType !== 3 || (K = A + g), fe.nodeType === 3 && (A += fe.nodeValue.length), (ge = fe.firstChild) !== null; )
              le = fe, fe = ge;
            for (; ; ) {
              if (fe === r) break t;
              if (le === c && ++oe === x && (F = A), le === S && ++ue === g && (K = A), (ge = fe.nextSibling) !== null) break;
              fe = le, le = fe.parentNode;
            }
            fe = ge;
          }
          c = F === -1 || K === -1 ? null : { start: F, end: K };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    for (Uc = { focusedElem: r, selectionRange: c }, Ca = !1, ye = s; ye !== null; ) if (s = ye, r = s.child, (s.subtreeFlags & 1028) !== 0 && r !== null) r.return = s, ye = r;
    else for (; ye !== null; ) {
      s = ye;
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
        r.return = s.return, ye = r;
        break;
      }
      ye = s.return;
    }
    return xe = _w, _w = !1, xe;
  }
  function ds(r, s, c) {
    var g = s.updateQueue;
    if (g = g !== null ? g.lastEffect : null, g !== null) {
      var x = g = g.next;
      do {
        if ((x.tag & r) === r) {
          var S = x.destroy;
          x.destroy = void 0, S !== void 0 && Of(s, c, S);
        }
        x = x.next;
      } while (x !== g);
    }
  }
  function sl(r, s) {
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
  function Lf(r) {
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
  function bw(r) {
    var s = r.alternate;
    s !== null && (r.alternate = null, bw(s)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (s = r.stateNode, s !== null && (delete s[Sn], delete s[ts], delete s[Xc], delete s[_2], delete s[b2])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function Sw(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Ew(r) {
    e: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || Sw(r.return)) return null;
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
  function Df(r, s, c) {
    var g = r.tag;
    if (g === 5 || g === 6) r = r.stateNode, s ? c.insertBefore(r, s) : c.appendChild(r);
    else if (g !== 4 && (r = r.child, r !== null)) for (Df(r, s, c), r = r.sibling; r !== null; ) Df(r, s, c), r = r.sibling;
  }
  var ft = null, an = !1;
  function vr(r, s, c) {
    for (c = c.child; c !== null; ) Cw(r, s, c), c = c.sibling;
  }
  function Cw(r, s, c) {
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
        ft !== null && (an ? (r = ft, c = c.stateNode, r.nodeType === 8 ? Kc(r.parentNode, c) : r.nodeType === 1 && Kc(r, c), Hi(r)) : Kc(ft, c.stateNode));
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
            var S = x, A = S.destroy;
            S = S.tag, A !== void 0 && ((S & 2) !== 0 || (S & 4) !== 0) && Of(c, s, A), x = x.next;
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
  function kw(r) {
    var s = r.updateQueue;
    if (s !== null) {
      r.updateQueue = null;
      var c = r.stateNode;
      c === null && (c = r.stateNode = new q2()), s.forEach(function(g) {
        var x = Y2.bind(null, r, g);
        c.has(g) || (c.add(g), g.then(x, x));
      });
    }
  }
  function ln(r, s) {
    var c = s.deletions;
    if (c !== null) for (var g = 0; g < c.length; g++) {
      var x = c[g];
      try {
        var S = r, A = s, F = A;
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
        Cw(S, A, x), ft = null, an = !1;
        var K = x.alternate;
        K !== null && (K.return = null), x.return = null;
      } catch (oe) {
        Ze(x, s, oe);
      }
    }
    if (s.subtreeFlags & 12854) for (s = s.child; s !== null; ) Nw(s, r), s = s.sibling;
  }
  function Nw(r, s) {
    var c = r.alternate, g = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ln(s, r), kn(r), g & 4) {
          try {
            ds(3, r, r.return), sl(3, r);
          } catch (Se) {
            Ze(r, r.return, Se);
          }
          try {
            ds(5, r, r.return);
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
          var S = r.memoizedProps, A = c !== null ? c.memoizedProps : S, F = r.type, K = r.updateQueue;
          if (r.updateQueue = null, K !== null) try {
            F === "input" && S.type === "radio" && S.name != null && Re(x, S), Pi(F, A);
            var oe = Pi(F, S);
            for (A = 0; A < K.length; A += 2) {
              var ue = K[A], fe = K[A + 1];
              ue === "style" ? Ht(x, fe) : ue === "dangerouslySetInnerHTML" ? jr(x, fe) : ue === "children" ? Vt(x, fe) : _(x, ue, fe, oe);
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
            x[ts] = S;
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
          Hi(s.containerInfo);
        } catch (Se) {
          Ze(r, r.return, Se);
        }
        break;
      case 4:
        ln(s, r), kn(r);
        break;
      case 13:
        ln(s, r), kn(r), x = r.child, x.flags & 8192 && (S = x.memoizedState !== null, x.stateNode.isHidden = S, !S || x.alternate !== null && x.alternate.memoizedState !== null || (Ff = Ye())), g & 4 && kw(r);
        break;
      case 22:
        if (ue = c !== null && c.memoizedState !== null, r.mode & 1 ? (vt = (oe = vt) || ue, ln(s, r), vt = oe) : ln(s, r), kn(r), g & 8192) {
          if (oe = r.memoizedState !== null, (r.stateNode.isHidden = oe) && !ue && (r.mode & 1) !== 0) for (ye = r, ue = r.child; ue !== null; ) {
            for (fe = ye = ue; ye !== null; ) {
              switch (le = ye, ge = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ds(4, le, le.return);
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
                    Tw(fe);
                    continue;
                  }
              }
              ge !== null ? (ge.return = le, ye = ge) : Tw(fe);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, fe = r; ; ) {
            if (fe.tag === 5) {
              if (ue === null) {
                ue = fe;
                try {
                  x = fe.stateNode, oe ? (S = x.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (F = fe.stateNode, K = fe.memoizedProps.style, A = K != null && K.hasOwnProperty("display") ? K.display : null, F.style.display = Tt("display", A));
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
        ln(s, r), kn(r), g & 4 && kw(r);
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
            if (Sw(c)) {
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
            var S = Ew(r);
            Df(r, S, x);
            break;
          case 3:
          case 4:
            var A = g.stateNode.containerInfo, F = Ew(r);
            jf(r, F, A);
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
  function F2(r, s, c) {
    ye = r, Rw(r);
  }
  function Rw(r, s, c) {
    for (var g = (r.mode & 1) !== 0; ye !== null; ) {
      var x = ye, S = x.child;
      if (x.tag === 22 && g) {
        var A = x.memoizedState !== null || il;
        if (!A) {
          var F = x.alternate, K = F !== null && F.memoizedState !== null || vt;
          F = il;
          var oe = vt;
          if (il = A, (vt = K) && !oe) for (ye = x; ye !== null; ) A = ye, K = A.child, A.tag === 22 && A.memoizedState !== null ? Aw(x) : K !== null ? (K.return = A, ye = K) : Aw(x);
          for (; S !== null; ) ye = S, Rw(S), S = S.sibling;
          ye = x, il = F, vt = oe;
        }
        Pw(r);
      } else (x.subtreeFlags & 8772) !== 0 && S !== null ? (S.return = x, ye = S) : Pw(r);
    }
  }
  function Pw(r) {
    for (; ye !== null; ) {
      var s = ye;
      if ((s.flags & 8772) !== 0) {
        var c = s.alternate;
        try {
          if ((s.flags & 8772) !== 0) switch (s.tag) {
            case 0:
            case 11:
            case 15:
              vt || sl(5, s);
              break;
            case 1:
              var g = s.stateNode;
              if (s.flags & 4 && !vt) if (c === null) g.componentDidMount();
              else {
                var x = s.elementType === s.type ? c.memoizedProps : sn(s.type, c.memoizedProps);
                g.componentDidUpdate(x, c.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
              }
              var S = s.updateQueue;
              S !== null && Tx(s, S, g);
              break;
            case 3:
              var A = s.updateQueue;
              if (A !== null) {
                if (c = null, s.child !== null) switch (s.child.tag) {
                  case 5:
                    c = s.child.stateNode;
                    break;
                  case 1:
                    c = s.child.stateNode;
                }
                Tx(s, A, c);
              }
              break;
            case 5:
              var F = s.stateNode;
              if (c === null && s.flags & 4) {
                c = F;
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
                    fe !== null && Hi(fe);
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
          vt || s.flags & 512 && Lf(s);
        } catch (le) {
          Ze(s, s.return, le);
        }
      }
      if (s === r) {
        ye = null;
        break;
      }
      if (c = s.sibling, c !== null) {
        c.return = s.return, ye = c;
        break;
      }
      ye = s.return;
    }
  }
  function Tw(r) {
    for (; ye !== null; ) {
      var s = ye;
      if (s === r) {
        ye = null;
        break;
      }
      var c = s.sibling;
      if (c !== null) {
        c.return = s.return, ye = c;
        break;
      }
      ye = s.return;
    }
  }
  function Aw(r) {
    for (; ye !== null; ) {
      var s = ye;
      try {
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            var c = s.return;
            try {
              sl(4, s);
            } catch (K) {
              Ze(s, c, K);
            }
            break;
          case 1:
            var g = s.stateNode;
            if (typeof g.componentDidMount == "function") {
              var x = s.return;
              try {
                g.componentDidMount();
              } catch (K) {
                Ze(s, x, K);
              }
            }
            var S = s.return;
            try {
              Lf(s);
            } catch (K) {
              Ze(s, S, K);
            }
            break;
          case 5:
            var A = s.return;
            try {
              Lf(s);
            } catch (K) {
              Ze(s, A, K);
            }
        }
      } catch (K) {
        Ze(s, s.return, K);
      }
      if (s === r) {
        ye = null;
        break;
      }
      var F = s.sibling;
      if (F !== null) {
        F.return = s.return, ye = F;
        break;
      }
      ye = s.return;
    }
  }
  var $2 = Math.ceil, al = k.ReactCurrentDispatcher, qf = k.ReactCurrentOwner, Xt = k.ReactCurrentBatchConfig, Oe = 0, ut = null, tt = null, dt = 0, Lt = 0, Uo = dr(0), it = 0, hs = null, Kr = 0, ll = 0, zf = 0, ps = null, Ct = null, Ff = 0, Go = 1 / 0, Un = null, ul = !1, $f = null, yr = null, cl = !1, xr = null, fl = 0, gs = 0, Bf = null, dl = -1, hl = 0;
  function wt() {
    return (Oe & 6) !== 0 ? Ye() : dl !== -1 ? dl : dl = Ye();
  }
  function wr(r) {
    return (r.mode & 1) === 0 ? 1 : (Oe & 2) !== 0 && dt !== 0 ? dt & -dt : E2.transition !== null ? (hl === 0 && (hl = ba()), hl) : (r = qe, r !== 0 || (r = window.event, r = r === void 0 ? 16 : M0(r.type)), r);
  }
  function un(r, s, c, g) {
    if (50 < gs) throw gs = 0, Bf = null, Error(n(185));
    or(r, c, g), ((Oe & 2) === 0 || r !== ut) && (r === ut && ((Oe & 2) === 0 && (ll |= c), it === 4 && _r(r, dt)), kt(r, g), c === 1 && Oe === 0 && (s.mode & 1) === 0 && (Go = Ye() + 500, $a && pr()));
  }
  function kt(r, s) {
    var c = r.callbackNode;
    bc(r, s);
    var g = ko(r, r === ut ? dt : 0);
    if (g === 0) c !== null && ya(c), r.callbackNode = null, r.callbackPriority = 0;
    else if (s = g & -g, r.callbackPriority !== s) {
      if (c != null && ya(c), s === 1) r.tag === 0 ? S2(Mw.bind(null, r)) : yx(Mw.bind(null, r)), x2(function() {
        (Oe & 6) === 0 && pr();
      }), c = null;
      else {
        switch (C0(g)) {
          case 1:
            c = qi;
            break;
          case 4:
            c = wa;
            break;
          case 16:
            c = So;
            break;
          case 536870912:
            c = _a;
            break;
          default:
            c = So;
        }
        c = $w(c, Iw.bind(null, r));
      }
      r.callbackPriority = s, r.callbackNode = c;
    }
  }
  function Iw(r, s) {
    if (dl = -1, hl = 0, (Oe & 6) !== 0) throw Error(n(327));
    var c = r.callbackNode;
    if (Yo() && r.callbackNode !== c) return null;
    var g = ko(r, r === ut ? dt : 0);
    if (g === 0) return null;
    if ((g & 30) !== 0 || (g & r.expiredLanes) !== 0 || s) s = pl(r, g);
    else {
      s = g;
      var x = Oe;
      Oe |= 2;
      var S = Lw();
      (ut !== r || dt !== s) && (Un = null, Go = Ye() + 500, Qr(r, s));
      do
        try {
          H2();
          break;
        } catch (F) {
          Ow(r, F);
        }
      while (!0);
      sf(), al.current = S, Oe = x, tt !== null ? s = 0 : (ut = null, dt = 0, s = it);
    }
    if (s !== 0) {
      if (s === 2 && (x = $r(r), x !== 0 && (g = x, s = Vf(r, x))), s === 1) throw c = hs, Qr(r, 0), _r(r, g), kt(r, Ye()), c;
      if (s === 6) _r(r, g);
      else {
        if (x = r.current.alternate, (g & 30) === 0 && !B2(x) && (s = pl(r, g), s === 2 && (S = $r(r), S !== 0 && (g = S, s = Vf(r, S))), s === 1)) throw c = hs, Qr(r, 0), _r(r, g), kt(r, Ye()), c;
        switch (r.finishedWork = x, r.finishedLanes = g, s) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Zr(r, Ct, Un);
            break;
          case 3:
            if (_r(r, g), (g & 130023424) === g && (s = Ff + 500 - Ye(), 10 < s)) {
              if (ko(r, 0) !== 0) break;
              if (x = r.suspendedLanes, (x & g) !== g) {
                wt(), r.pingedLanes |= r.suspendedLanes & x;
                break;
              }
              r.timeoutHandle = Yc(Zr.bind(null, r, Ct, Un), s);
              break;
            }
            Zr(r, Ct, Un);
            break;
          case 4:
            if (_r(r, g), (g & 4194240) === g) break;
            for (s = r.eventTimes, x = -1; 0 < g; ) {
              var A = 31 - At(g);
              S = 1 << A, A = s[A], A > x && (x = A), g &= ~S;
            }
            if (g = x, g = Ye() - g, g = (120 > g ? 120 : 480 > g ? 480 : 1080 > g ? 1080 : 1920 > g ? 1920 : 3e3 > g ? 3e3 : 4320 > g ? 4320 : 1960 * $2(g / 1960)) - g, 10 < g) {
              r.timeoutHandle = Yc(Zr.bind(null, r, Ct, Un), g);
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
    return kt(r, Ye()), r.callbackNode === c ? Iw.bind(null, r) : null;
  }
  function Vf(r, s) {
    var c = ps;
    return r.current.memoizedState.isDehydrated && (Qr(r, s).flags |= 256), r = pl(r, s), r !== 2 && (s = Ct, Ct = c, s !== null && Hf(s)), r;
  }
  function Hf(r) {
    Ct === null ? Ct = r : Ct.push.apply(Ct, r);
  }
  function B2(r) {
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
    for (s &= ~zf, s &= ~ll, r.suspendedLanes |= s, r.pingedLanes &= ~s, r = r.expirationTimes; 0 < s; ) {
      var c = 31 - At(s), g = 1 << c;
      r[c] = -1, s &= ~g;
    }
  }
  function Mw(r) {
    if ((Oe & 6) !== 0) throw Error(n(327));
    Yo();
    var s = ko(r, 0);
    if ((s & 1) === 0) return kt(r, Ye()), null;
    var c = pl(r, s);
    if (r.tag !== 0 && c === 2) {
      var g = $r(r);
      g !== 0 && (s = g, c = Vf(r, g));
    }
    if (c === 1) throw c = hs, Qr(r, 0), _r(r, s), kt(r, Ye()), c;
    if (c === 6) throw Error(n(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = s, Zr(r, Ct, Un), kt(r, Ye()), null;
  }
  function Wf(r, s) {
    var c = Oe;
    Oe |= 1;
    try {
      return r(s);
    } finally {
      Oe = c, Oe === 0 && (Go = Ye() + 500, $a && pr());
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
  function Uf() {
    Lt = Uo.current, $e(Uo);
  }
  function Qr(r, s) {
    r.finishedWork = null, r.finishedLanes = 0;
    var c = r.timeoutHandle;
    if (c !== -1 && (r.timeoutHandle = -1, y2(c)), tt !== null) for (c = tt.return; c !== null; ) {
      var g = c;
      switch (ef(g), g.tag) {
        case 1:
          g = g.type.childContextTypes, g != null && za();
          break;
        case 3:
          Vo(), $e(bt), $e(pt), pf();
          break;
        case 5:
          df(g);
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
          af(g.type._context);
          break;
        case 22:
        case 23:
          Uf();
      }
      c = c.return;
    }
    if (ut = r, tt = r = br(r.current, null), dt = Lt = s, it = 0, hs = null, zf = ll = Kr = 0, Ct = ps = null, Ur !== null) {
      for (s = 0; s < Ur.length; s++) if (c = Ur[s], g = c.interleaved, g !== null) {
        c.interleaved = null;
        var x = g.next, S = c.pending;
        if (S !== null) {
          var A = S.next;
          S.next = x, g.next = A;
        }
        c.pending = g;
      }
      Ur = null;
    }
    return r;
  }
  function Ow(r, s) {
    do {
      var c = tt;
      try {
        if (sf(), Qa.current = tl, Za) {
          for (var g = Xe.memoizedState; g !== null; ) {
            var x = g.queue;
            x !== null && (x.pending = null), g = g.next;
          }
          Za = !1;
        }
        if (Yr = 0, lt = ot = Xe = null, as = !1, ls = 0, qf.current = null, c === null || c.return === null) {
          it = 1, hs = s, tt = null;
          break;
        }
        e: {
          var S = r, A = c.return, F = c, K = s;
          if (s = dt, F.flags |= 32768, K !== null && typeof K == "object" && typeof K.then == "function") {
            var oe = K, ue = F, fe = ue.tag;
            if ((ue.mode & 1) === 0 && (fe === 0 || fe === 11 || fe === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var ge = iw(A);
            if (ge !== null) {
              ge.flags &= -257, sw(ge, A, F, S, s), ge.mode & 1 && ow(S, oe, s), s = ge, K = oe;
              var xe = s.updateQueue;
              if (xe === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(K), s.updateQueue = Se;
              } else xe.add(K);
              break e;
            } else {
              if ((s & 1) === 0) {
                ow(S, oe, s), Gf();
                break e;
              }
              K = Error(n(426));
            }
          } else if (Ve && F.mode & 1) {
            var et = iw(A);
            if (et !== null) {
              (et.flags & 65536) === 0 && (et.flags |= 256), sw(et, A, F, S, s), rf(Ho(K, F));
              break e;
            }
          }
          S = K = Ho(K, F), it !== 4 && (it = 2), ps === null ? ps = [S] : ps.push(S), S = A;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, s &= -s, S.lanes |= s;
                var ne = nw(S, K, s);
                Px(S, ne);
                break e;
              case 1:
                F = K;
                var J = S.type, re = S.stateNode;
                if ((S.flags & 128) === 0 && (typeof J.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (yr === null || !yr.has(re)))) {
                  S.flags |= 65536, s &= -s, S.lanes |= s;
                  var he = rw(S, F, s);
                  Px(S, he);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        Dw(c);
      } catch (Ce) {
        s = Ce, tt === c && c !== null && (tt = c = c.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Lw() {
    var r = al.current;
    return al.current = tl, r === null ? tl : r;
  }
  function Gf() {
    (it === 0 || it === 3 || it === 2) && (it = 4), ut === null || (Kr & 268435455) === 0 && (ll & 268435455) === 0 || _r(ut, dt);
  }
  function pl(r, s) {
    var c = Oe;
    Oe |= 2;
    var g = Lw();
    (ut !== r || dt !== s) && (Un = null, Qr(r, s));
    do
      try {
        V2();
        break;
      } catch (x) {
        Ow(r, x);
      }
    while (!0);
    if (sf(), Oe = c, al.current = g, tt !== null) throw Error(n(261));
    return ut = null, dt = 0, it;
  }
  function V2() {
    for (; tt !== null; ) jw(tt);
  }
  function H2() {
    for (; tt !== null && !pc(); ) jw(tt);
  }
  function jw(r) {
    var s = Fw(r.alternate, r, Lt);
    r.memoizedProps = r.pendingProps, s === null ? Dw(r) : tt = s, qf.current = null;
  }
  function Dw(r) {
    var s = r;
    do {
      var c = s.alternate;
      if (r = s.return, (s.flags & 32768) === 0) {
        if (c = j2(c, s, Lt), c !== null) {
          tt = c;
          return;
        }
      } else {
        if (c = D2(c, s), c !== null) {
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
      Xt.transition = null, qe = 1, W2(r, s, c, g);
    } finally {
      Xt.transition = x, qe = g;
    }
    return null;
  }
  function W2(r, s, c, g) {
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
    if (CI(r, S), r === ut && (tt = ut = null, dt = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || cl || (cl = !0, $w(So, function() {
      return Yo(), null;
    })), S = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || S) {
      S = Xt.transition, Xt.transition = null;
      var A = qe;
      qe = 1;
      var F = Oe;
      Oe |= 4, qf.current = null, z2(r, c), Nw(c, r), f2(Uc), Ca = !!Wc, Uc = Wc = null, r.current = c, F2(c), xa(), Oe = F, qe = A, Xt.transition = S;
    } else r.current = c;
    if (cl && (cl = !1, xr = r, fl = x), S = r.pendingLanes, S === 0 && (yr = null), vc(c.stateNode), kt(r, Ye()), s !== null) for (g = r.onRecoverableError, c = 0; c < s.length; c++) x = s[c], g(x.value, { componentStack: x.stack, digest: x.digest });
    if (ul) throw ul = !1, r = $f, $f = null, r;
    return (fl & 1) !== 0 && r.tag !== 0 && Yo(), S = r.pendingLanes, (S & 1) !== 0 ? r === Bf ? gs++ : (gs = 0, Bf = r) : gs = 0, pr(), null;
  }
  function Yo() {
    if (xr !== null) {
      var r = C0(fl), s = Xt.transition, c = qe;
      try {
        if (Xt.transition = null, qe = 16 > r ? 16 : r, xr === null) var g = !1;
        else {
          if (r = xr, xr = null, fl = 0, (Oe & 6) !== 0) throw Error(n(331));
          var x = Oe;
          for (Oe |= 4, ye = r.current; ye !== null; ) {
            var S = ye, A = S.child;
            if ((ye.flags & 16) !== 0) {
              var F = S.deletions;
              if (F !== null) {
                for (var K = 0; K < F.length; K++) {
                  var oe = F[K];
                  for (ye = oe; ye !== null; ) {
                    var ue = ye;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ds(8, ue, S);
                    }
                    var fe = ue.child;
                    if (fe !== null) fe.return = ue, ye = fe;
                    else for (; ye !== null; ) {
                      ue = ye;
                      var le = ue.sibling, ge = ue.return;
                      if (bw(ue), ue === oe) {
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
                ye = S;
              }
            }
            if ((S.subtreeFlags & 2064) !== 0 && A !== null) A.return = S, ye = A;
            else e: for (; ye !== null; ) {
              if (S = ye, (S.flags & 2048) !== 0) switch (S.tag) {
                case 0:
                case 11:
                case 15:
                  ds(9, S, S.return);
              }
              var ne = S.sibling;
              if (ne !== null) {
                ne.return = S.return, ye = ne;
                break e;
              }
              ye = S.return;
            }
          }
          var J = r.current;
          for (ye = J; ye !== null; ) {
            A = ye;
            var re = A.child;
            if ((A.subtreeFlags & 2064) !== 0 && re !== null) re.return = A, ye = re;
            else e: for (A = J; ye !== null; ) {
              if (F = ye, (F.flags & 2048) !== 0) try {
                switch (F.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sl(9, F);
                }
              } catch (Ce) {
                Ze(F, F.return, Ce);
              }
              if (F === A) {
                ye = null;
                break e;
              }
              var he = F.sibling;
              if (he !== null) {
                he.return = F.return, ye = he;
                break e;
              }
              ye = F.return;
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
  function qw(r, s, c) {
    s = Ho(c, s), s = nw(r, s, 1), r = mr(r, s, 1), s = wt(), r !== null && (or(r, 1, s), kt(r, s));
  }
  function Ze(r, s, c) {
    if (r.tag === 3) qw(r, r, c);
    else for (; s !== null; ) {
      if (s.tag === 3) {
        qw(s, r, c);
        break;
      } else if (s.tag === 1) {
        var g = s.stateNode;
        if (typeof s.type.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && (yr === null || !yr.has(g))) {
          r = Ho(c, r), r = rw(s, r, 1), s = mr(s, r, 1), r = wt(), s !== null && (or(s, 1, r), kt(s, r));
          break;
        }
      }
      s = s.return;
    }
  }
  function U2(r, s, c) {
    var g = r.pingCache;
    g !== null && g.delete(s), s = wt(), r.pingedLanes |= r.suspendedLanes & c, ut === r && (dt & c) === c && (it === 4 || it === 3 && (dt & 130023424) === dt && 500 > Ye() - Ff ? Qr(r, 0) : zf |= c), kt(r, s);
  }
  function zw(r, s) {
    s === 0 && ((r.mode & 1) === 0 ? s = 1 : (s = Co, Co <<= 1, (Co & 130023424) === 0 && (Co = 4194304)));
    var c = wt();
    r = Vn(r, s), r !== null && (or(r, s, c), kt(r, c));
  }
  function G2(r) {
    var s = r.memoizedState, c = 0;
    s !== null && (c = s.retryLane), zw(r, c);
  }
  function Y2(r, s) {
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
    g !== null && g.delete(s), zw(r, c);
  }
  var Fw;
  Fw = function(r, s, c) {
    if (r !== null) if (r.memoizedProps !== s.pendingProps || bt.current) Et = !0;
    else {
      if ((r.lanes & c) === 0 && (s.flags & 128) === 0) return Et = !1, L2(r, s, c);
      Et = (r.flags & 131072) !== 0;
    }
    else Et = !1, Ve && (s.flags & 1048576) !== 0 && xx(s, Va, s.index);
    switch (s.lanes = 0, s.tag) {
      case 2:
        var g = s.type;
        ol(r, s), r = s.pendingProps;
        var x = jo(s, pt.current);
        Bo(s, c), x = vf(null, s, g, r, x, c);
        var S = yf();
        return s.flags |= 1, typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, St(g) ? (S = !0, Fa(s)) : S = !1, s.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null, cf(s), x.updater = nl, s.stateNode = x, x._reactInternals = s, Ef(s, g, r, c), s = Rf(null, s, g, !0, S, c)) : (s.tag = 0, Ve && S && Jc(s), xt(null, s, x, c), s = s.child), s;
      case 16:
        g = s.elementType;
        e: {
          switch (ol(r, s), r = s.pendingProps, x = g._init, g = x(g._payload), s.type = g, x = s.tag = X2(g), r = sn(g, r), x) {
            case 0:
              s = Nf(null, s, g, r, c);
              break e;
            case 1:
              s = dw(null, s, g, r, c);
              break e;
            case 11:
              s = aw(null, s, g, r, c);
              break e;
            case 14:
              s = lw(null, s, g, sn(g.type, r), c);
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
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), Nf(r, s, g, x, c);
      case 1:
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), dw(r, s, g, x, c);
      case 3:
        e: {
          if (hw(s), r === null) throw Error(n(387));
          g = s.pendingProps, S = s.memoizedState, x = S.element, Rx(r, s), Ka(s, g, null, c);
          var A = s.memoizedState;
          if (g = A.element, S.isDehydrated) if (S = { element: g, isDehydrated: !1, cache: A.cache, pendingSuspenseBoundaries: A.pendingSuspenseBoundaries, transitions: A.transitions }, s.updateQueue.baseState = S, s.memoizedState = S, s.flags & 256) {
            x = Ho(Error(n(423)), s), s = pw(r, s, g, c, x);
            break e;
          } else if (g !== x) {
            x = Ho(Error(n(424)), s), s = pw(r, s, g, c, x);
            break e;
          } else for (Ot = fr(s.stateNode.containerInfo.firstChild), Mt = s, Ve = !0, on = null, c = kx(s, null, g, c), s.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
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
        return Ax(s), r === null && nf(s), g = s.type, x = s.pendingProps, S = r !== null ? r.memoizedProps : null, A = x.children, Gc(g, x) ? A = null : S !== null && Gc(g, S) && (s.flags |= 32), fw(r, s), xt(r, s, A, c), s.child;
      case 6:
        return r === null && nf(s), null;
      case 13:
        return gw(r, s, c);
      case 4:
        return ff(s, s.stateNode.containerInfo), g = s.pendingProps, r === null ? s.child = Fo(s, null, g, c) : xt(r, s, g, c), s.child;
      case 11:
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), aw(r, s, g, x, c);
      case 7:
        return xt(r, s, s.pendingProps, c), s.child;
      case 8:
        return xt(r, s, s.pendingProps.children, c), s.child;
      case 12:
        return xt(r, s, s.pendingProps.children, c), s.child;
      case 10:
        e: {
          if (g = s.type._context, x = s.pendingProps, S = s.memoizedProps, A = x.value, ze(Ua, g._currentValue), g._currentValue = A, S !== null) if (rn(S.value, A)) {
            if (S.children === x.children && !bt.current) {
              s = Wn(r, s, c);
              break e;
            }
          } else for (S = s.child, S !== null && (S.return = s); S !== null; ) {
            var F = S.dependencies;
            if (F !== null) {
              A = S.child;
              for (var K = F.firstContext; K !== null; ) {
                if (K.context === g) {
                  if (S.tag === 1) {
                    K = Hn(-1, c & -c), K.tag = 2;
                    var oe = S.updateQueue;
                    if (oe !== null) {
                      oe = oe.shared;
                      var ue = oe.pending;
                      ue === null ? K.next = K : (K.next = ue.next, ue.next = K), oe.pending = K;
                    }
                  }
                  S.lanes |= c, K = S.alternate, K !== null && (K.lanes |= c), lf(
                    S.return,
                    c,
                    s
                  ), F.lanes |= c;
                  break;
                }
                K = K.next;
              }
            } else if (S.tag === 10) A = S.type === s.type ? null : S.child;
            else if (S.tag === 18) {
              if (A = S.return, A === null) throw Error(n(341));
              A.lanes |= c, F = A.alternate, F !== null && (F.lanes |= c), lf(A, c, s), A = S.sibling;
            } else A = S.child;
            if (A !== null) A.return = S;
            else for (A = S; A !== null; ) {
              if (A === s) {
                A = null;
                break;
              }
              if (S = A.sibling, S !== null) {
                S.return = A.return, A = S;
                break;
              }
              A = A.return;
            }
            S = A;
          }
          xt(r, s, x.children, c), s = s.child;
        }
        return s;
      case 9:
        return x = s.type, g = s.pendingProps.children, Bo(s, c), x = Yt(x), g = g(x), s.flags |= 1, xt(r, s, g, c), s.child;
      case 14:
        return g = s.type, x = sn(g, s.pendingProps), x = sn(g.type, x), lw(r, s, g, x, c);
      case 15:
        return uw(r, s, s.type, s.pendingProps, c);
      case 17:
        return g = s.type, x = s.pendingProps, x = s.elementType === g ? x : sn(g, x), ol(r, s), s.tag = 1, St(g) ? (r = !0, Fa(s)) : r = !1, Bo(s, c), ew(s, g, x), Ef(s, g, x, c), Rf(null, s, g, !0, r, c);
      case 19:
        return vw(r, s, c);
      case 22:
        return cw(r, s, c);
    }
    throw Error(n(156, s.tag));
  };
  function $w(r, s) {
    return va(r, s);
  }
  function K2(r, s, c, g) {
    this.tag = r, this.key = c, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = g, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(r, s, c, g) {
    return new K2(r, s, c, g);
  }
  function Yf(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function X2(r) {
    if (typeof r == "function") return Yf(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === V) return 11;
      if (r === W) return 14;
    }
    return 2;
  }
  function br(r, s) {
    var c = r.alternate;
    return c === null ? (c = Qt(r.tag, s, r.key, r.mode), c.elementType = r.elementType, c.type = r.type, c.stateNode = r.stateNode, c.alternate = r, r.alternate = c) : (c.pendingProps = s, c.type = r.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null), c.flags = r.flags & 14680064, c.childLanes = r.childLanes, c.lanes = r.lanes, c.child = r.child, c.memoizedProps = r.memoizedProps, c.memoizedState = r.memoizedState, c.updateQueue = r.updateQueue, s = r.dependencies, c.dependencies = s === null ? null : { lanes: s.lanes, firstContext: s.firstContext }, c.sibling = r.sibling, c.index = r.index, c.ref = r.ref, c;
  }
  function gl(r, s, c, g, x, S) {
    var A = 2;
    if (g = r, typeof r == "function") Yf(r) && (A = 1);
    else if (typeof r == "string") A = 5;
    else e: switch (r) {
      case I:
        return Jr(c.children, x, S, s);
      case L:
        A = 8, x |= 8;
        break;
      case D:
        return r = Qt(12, c, s, x | 2), r.elementType = D, r.lanes = S, r;
      case H:
        return r = Qt(13, c, s, x), r.elementType = H, r.lanes = S, r;
      case O:
        return r = Qt(19, c, s, x), r.elementType = O, r.lanes = S, r;
      case U:
        return ml(c, x, S, s);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case Y:
            A = 10;
            break e;
          case $:
            A = 9;
            break e;
          case V:
            A = 11;
            break e;
          case W:
            A = 14;
            break e;
          case q:
            A = 16, g = null;
            break e;
        }
        throw Error(n(130, r == null ? r : typeof r, ""));
    }
    return s = Qt(A, c, s, x), s.elementType = r, s.type = g, s.lanes = S, s;
  }
  function Jr(r, s, c, g) {
    return r = Qt(7, r, g, s), r.lanes = c, r;
  }
  function ml(r, s, c, g) {
    return r = Qt(22, r, g, s), r.elementType = U, r.lanes = c, r.stateNode = { isHidden: !1 }, r;
  }
  function Kf(r, s, c) {
    return r = Qt(6, r, null, s), r.lanes = c, r;
  }
  function Xf(r, s, c) {
    return s = Qt(4, r.children !== null ? r.children : [], r.key, s), s.lanes = c, s.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, s;
  }
  function Q2(r, s, c, g, x) {
    this.tag = s, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zi(0), this.expirationTimes = zi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zi(0), this.identifierPrefix = g, this.onRecoverableError = x, this.mutableSourceEagerHydrationData = null;
  }
  function Qf(r, s, c, g, x, S, A, F, K) {
    return r = new Q2(r, s, c, F, K), s === 1 ? (s = 1, S === !0 && (s |= 8)) : s = 0, S = Qt(3, null, null, s), r.current = S, S.stateNode = r, S.memoizedState = { element: g, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cf(S), r;
  }
  function Z2(r, s, c) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: T, key: g == null ? null : "" + g, children: r, containerInfo: s, implementation: c };
  }
  function Bw(r) {
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
      if (St(c)) return mx(r, c, s);
    }
    return s;
  }
  function Vw(r, s, c, g, x, S, A, F, K) {
    return r = Qf(c, g, !0, r, x, S, A, F, K), r.context = Bw(null), c = r.current, g = wt(), x = wr(c), S = Hn(g, x), S.callback = s ?? null, mr(c, S, x), r.current.lanes = x, or(r, x, g), kt(r, g), r;
  }
  function vl(r, s, c, g) {
    var x = s.current, S = wt(), A = wr(x);
    return c = Bw(c), s.context === null ? s.context = c : s.pendingContext = c, s = Hn(S, A), s.payload = { element: r }, g = g === void 0 ? null : g, g !== null && (s.callback = g), r = mr(x, s, A), r !== null && (un(r, x, A, S), Ya(r, x, A)), A;
  }
  function yl(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function Hw(r, s) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var c = r.retryLane;
      r.retryLane = c !== 0 && c < s ? c : s;
    }
  }
  function Zf(r, s) {
    Hw(r, s), (r = r.alternate) && Hw(r, s);
  }
  function J2() {
    return null;
  }
  var Ww = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function Jf(r) {
    this._internalRoot = r;
  }
  xl.prototype.render = Jf.prototype.render = function(r) {
    var s = this._internalRoot;
    if (s === null) throw Error(n(409));
    vl(r, s, null, null);
  }, xl.prototype.unmount = Jf.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var s = r.containerInfo;
      Xr(function() {
        vl(null, r, null, null);
      }), s[zn] = null;
    }
  };
  function xl(r) {
    this._internalRoot = r;
  }
  xl.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var s = R0();
      r = { blockedOn: null, target: r, priority: s };
      for (var c = 0; c < lr.length && s !== 0 && s < lr[c].priority; c++) ;
      lr.splice(c, 0, r), c === 0 && A0(r);
    }
  };
  function ed(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function wl(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function Uw() {
  }
  function eM(r, s, c, g, x) {
    if (x) {
      if (typeof g == "function") {
        var S = g;
        g = function() {
          var oe = yl(A);
          S.call(oe);
        };
      }
      var A = Vw(s, g, r, 0, null, !1, !1, "", Uw);
      return r._reactRootContainer = A, r[zn] = A.current, Ji(r.nodeType === 8 ? r.parentNode : r), Xr(), A;
    }
    for (; x = r.lastChild; ) r.removeChild(x);
    if (typeof g == "function") {
      var F = g;
      g = function() {
        var oe = yl(K);
        F.call(oe);
      };
    }
    var K = Qf(r, 0, !1, null, null, !1, !1, "", Uw);
    return r._reactRootContainer = K, r[zn] = K.current, Ji(r.nodeType === 8 ? r.parentNode : r), Xr(function() {
      vl(s, K, c, g);
    }), K;
  }
  function _l(r, s, c, g, x) {
    var S = c._reactRootContainer;
    if (S) {
      var A = S;
      if (typeof x == "function") {
        var F = x;
        x = function() {
          var K = yl(A);
          F.call(K);
        };
      }
      vl(s, A, r, x);
    } else A = eM(c, s, r, x, g);
    return yl(A);
  }
  k0 = function(r) {
    switch (r.tag) {
      case 3:
        var s = r.stateNode;
        if (s.current.memoizedState.isDehydrated) {
          var c = bn(s.pendingLanes);
          c !== 0 && (Sc(s, c | 1), kt(s, Ye()), (Oe & 6) === 0 && (Go = Ye() + 500, pr()));
        }
        break;
      case 13:
        Xr(function() {
          var g = Vn(r, 1);
          if (g !== null) {
            var x = wt();
            un(g, r, 1, x);
          }
        }), Zf(r, 1);
    }
  }, Ec = function(r) {
    if (r.tag === 13) {
      var s = Vn(r, 134217728);
      if (s !== null) {
        var c = wt();
        un(s, r, 134217728, c);
      }
      Zf(r, 134217728);
    }
  }, N0 = function(r) {
    if (r.tag === 13) {
      var s = wr(r), c = Vn(r, s);
      if (c !== null) {
        var g = wt();
        un(c, r, s, g);
      }
      Zf(r, s);
    }
  }, R0 = function() {
    return qe;
  }, P0 = function(r, s) {
    var c = qe;
    try {
      return qe = r, s();
    } finally {
      qe = c;
    }
  }, Ii = function(r, s, c) {
    switch (s) {
      case "input":
        if (Ee(r, c), s = c.name, c.type === "radio" && s != null) {
          for (c = r; c.parentNode; ) c = c.parentNode;
          for (c = c.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < c.length; s++) {
            var g = c[s];
            if (g !== r && g.form === r.form) {
              var x = qa(g);
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
  }, da = Wf, ha = Xr;
  var tM = { usingClientEntryPoint: !1, Events: [ns, Oo, qa, ca, fa, Wf] }, ms = { findFiberByHostInstance: Br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, nM = { bundleType: ms.bundleType, version: ms.version, rendererPackageName: ms.rendererPackageName, rendererConfig: ms.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: k.ReactCurrentDispatcher, findHostInstanceByFiber: function(r) {
    return r = ga(r), r === null ? null : r.stateNode;
  }, findFiberByHostInstance: ms.findFiberByHostInstance || J2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bl.isDisabled && bl.supportsFiber) try {
      Fr = bl.inject(nM), Wt = bl;
    } catch {
    }
  }
  return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tM, Nt.createPortal = function(r, s) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ed(s)) throw Error(n(200));
    return Z2(r, s, null, c);
  }, Nt.createRoot = function(r, s) {
    if (!ed(r)) throw Error(n(299));
    var c = !1, g = "", x = Ww;
    return s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (x = s.onRecoverableError)), s = Qf(r, 1, !1, null, null, c, !1, g, x), r[zn] = s.current, Ji(r.nodeType === 8 ? r.parentNode : r), new Jf(s);
  }, Nt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var s = r._reactInternals;
    if (s === void 0)
      throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","), Error(n(268, r)));
    return r = ga(s), r = r === null ? null : r.stateNode, r;
  }, Nt.flushSync = function(r) {
    return Xr(r);
  }, Nt.hydrate = function(r, s, c) {
    if (!wl(s)) throw Error(n(200));
    return _l(null, r, s, !0, c);
  }, Nt.hydrateRoot = function(r, s, c) {
    if (!ed(r)) throw Error(n(405));
    var g = c != null && c.hydratedSources || null, x = !1, S = "", A = Ww;
    if (c != null && (c.unstable_strictMode === !0 && (x = !0), c.identifierPrefix !== void 0 && (S = c.identifierPrefix), c.onRecoverableError !== void 0 && (A = c.onRecoverableError)), s = Vw(s, null, r, 1, c ?? null, x, !1, S, A), r[zn] = s.current, Ji(r), g) for (r = 0; r < g.length; r++) c = g[r], x = c._getVersion, x = x(c._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [c, x] : s.mutableSourceEagerHydrationData.push(
      c,
      x
    );
    return new xl(s);
  }, Nt.render = function(r, s, c) {
    if (!wl(s)) throw Error(n(200));
    return _l(null, r, s, !1, c);
  }, Nt.unmountComponentAtNode = function(r) {
    if (!wl(r)) throw Error(n(40));
    return r._reactRootContainer ? (Xr(function() {
      _l(null, null, r, !1, function() {
        r._reactRootContainer = null, r[zn] = null;
      });
    }), !0) : !1;
  }, Nt.unstable_batchedUpdates = Wf, Nt.unstable_renderSubtreeIntoContainer = function(r, s, c, g) {
    if (!wl(c)) throw Error(n(200));
    if (r == null || r._reactInternals === void 0) throw Error(n(38));
    return _l(r, s, c, !1, g);
  }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt;
}
var e_;
function vN() {
  if (e_) return rd.exports;
  e_ = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), rd.exports = dM(), rd.exports;
}
var t_;
function hM() {
  if (t_) return El;
  t_ = 1;
  var e = vN();
  return El.createRoot = e.createRoot, El.hydrateRoot = e.hydrateRoot, El;
}
var pM = hM();
let yN = N.createContext(
  /** @type {any} */
  null
);
function gM() {
  let e = N.useContext(yN);
  if (!e) throw new Error("RenderContext not found");
  return e;
}
function mM() {
  return gM().model;
}
function xs(e) {
  let t = mM(), n = N.useSyncExternalStore(
    (i) => (t.on(`change:${e}`, i), () => t.off(`change:${e}`, i)),
    () => t.get(e)
  ), o = N.useCallback(
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
function vM(e) {
  return ({ el: t, model: n, experimental: o }) => {
    let i = pM.createRoot(t);
    return i.render(
      N.createElement(
        N.StrictMode,
        null,
        N.createElement(
          yN.Provider,
          { value: { model: n, experimental: o } },
          N.createElement(e)
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
var yM = { value: () => {
} };
function yu() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Bl(n);
}
function Bl(e) {
  this._ = e;
}
function xM(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Bl.prototype = yu.prototype = {
  constructor: Bl,
  on: function(e, t) {
    var n = this._, o = xM(e + "", n), i, a = -1, l = o.length;
    if (arguments.length < 2) {
      for (; ++a < l; ) if ((i = (e = o[a]).type) && (i = wM(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < l; )
      if (i = (e = o[a]).type) n[i] = n_(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = n_(n[i], e.name, null);
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
function wM(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function n_(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = yM, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Kv = "http://www.w3.org/1999/xhtml";
const r_ = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Kv,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xu(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), r_.hasOwnProperty(t) ? { space: r_[t], local: e } : e;
}
function _M(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Kv && t.documentElement.namespaceURI === Kv ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function bM(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function xN(e) {
  var t = xu(e);
  return (t.local ? bM : _M)(t);
}
function SM() {
}
function Sy(e) {
  return e == null ? SM : function() {
    return this.querySelector(e);
  };
}
function EM(e) {
  typeof e != "function" && (e = Sy(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = new Array(l), f, d, h = 0; h < l; ++h)
      (f = a[h]) && (d = e.call(f, f.__data__, h, a)) && ("__data__" in f && (d.__data__ = f.__data__), u[h] = d);
  return new zt(o, this._parents);
}
function CM(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function kM() {
  return [];
}
function wN(e) {
  return e == null ? kM : function() {
    return this.querySelectorAll(e);
  };
}
function NM(e) {
  return function() {
    return CM(e.apply(this, arguments));
  };
}
function RM(e) {
  typeof e == "function" ? e = NM(e) : e = wN(e);
  for (var t = this._groups, n = t.length, o = [], i = [], a = 0; a < n; ++a)
    for (var l = t[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && (o.push(e.call(f, f.__data__, d, l)), i.push(f));
  return new zt(o, i);
}
function _N(e) {
  return function() {
    return this.matches(e);
  };
}
function bN(e) {
  return function(t) {
    return t.matches(e);
  };
}
var PM = Array.prototype.find;
function TM(e) {
  return function() {
    return PM.call(this.children, e);
  };
}
function AM() {
  return this.firstElementChild;
}
function IM(e) {
  return this.select(e == null ? AM : TM(typeof e == "function" ? e : bN(e)));
}
var MM = Array.prototype.filter;
function OM() {
  return Array.from(this.children);
}
function LM(e) {
  return function() {
    return MM.call(this.children, e);
  };
}
function jM(e) {
  return this.selectAll(e == null ? OM : LM(typeof e == "function" ? e : bN(e)));
}
function DM(e) {
  typeof e != "function" && (e = _N(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new zt(o, this._parents);
}
function SN(e) {
  return new Array(e.length);
}
function qM() {
  return new zt(this._enter || this._groups.map(SN), this._parents);
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
function zM(e) {
  return function() {
    return e;
  };
}
function FM(e, t, n, o, i, a) {
  for (var l = 0, u, f = t.length, d = a.length; l < d; ++l)
    (u = t[l]) ? (u.__data__ = a[l], o[l] = u) : n[l] = new Xl(e, a[l]);
  for (; l < f; ++l)
    (u = t[l]) && (i[l] = u);
}
function $M(e, t, n, o, i, a, l) {
  var u, f, d = /* @__PURE__ */ new Map(), h = t.length, p = a.length, m = new Array(h), v;
  for (u = 0; u < h; ++u)
    (f = t[u]) && (m[u] = v = l.call(f, f.__data__, u, t) + "", d.has(v) ? i[u] = f : d.set(v, f));
  for (u = 0; u < p; ++u)
    v = l.call(e, a[u], u, a) + "", (f = d.get(v)) ? (o[u] = f, f.__data__ = a[u], d.delete(v)) : n[u] = new Xl(e, a[u]);
  for (u = 0; u < h; ++u)
    (f = t[u]) && d.get(m[u]) === f && (i[u] = f);
}
function BM(e) {
  return e.__data__;
}
function VM(e, t) {
  if (!arguments.length) return Array.from(this, BM);
  var n = t ? $M : FM, o = this._parents, i = this._groups;
  typeof e != "function" && (e = zM(e));
  for (var a = i.length, l = new Array(a), u = new Array(a), f = new Array(a), d = 0; d < a; ++d) {
    var h = o[d], p = i[d], m = p.length, v = HM(e.call(h, h && h.__data__, d, o)), E = v.length, y = u[d] = new Array(E), w = l[d] = new Array(E), b = f[d] = new Array(m);
    n(h, p, y, w, b, v, t);
    for (var C = 0, _ = 0, k, P; C < E; ++C)
      if (k = y[C]) {
        for (C >= _ && (_ = C + 1); !(P = w[_]) && ++_ < E; ) ;
        k._next = P || null;
      }
  }
  return l = new zt(l, o), l._enter = u, l._exit = f, l;
}
function HM(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function WM() {
  return new zt(this._exit || this._groups.map(SN), this._parents);
}
function UM(e, t, n) {
  var o = this.enter(), i = this, a = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? a.remove() : n(a), o && i ? o.merge(i).order() : i;
}
function GM(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, a = o.length, l = Math.min(i, a), u = new Array(i), f = 0; f < l; ++f)
    for (var d = n[f], h = o[f], p = d.length, m = u[f] = new Array(p), v, E = 0; E < p; ++E)
      (v = d[E] || h[E]) && (m[E] = v);
  for (; f < i; ++f)
    u[f] = n[f];
  return new zt(u, this._parents);
}
function YM() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, a = o[i], l; --i >= 0; )
      (l = o[i]) && (a && l.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(l, a), a = l);
  return this;
}
function KM(e) {
  e || (e = XM);
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
function XM(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function QM() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ZM() {
  return Array.from(this);
}
function JM() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length; i < a; ++i) {
      var l = o[i];
      if (l) return l;
    }
  return null;
}
function eO() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function tO() {
  return !this.node();
}
function nO(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], a = 0, l = i.length, u; a < l; ++a)
      (u = i[a]) && e.call(u, u.__data__, a, i);
  return this;
}
function rO(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function oO(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function iO(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sO(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function aO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function lO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function uO(e, t) {
  var n = xu(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? oO : rO : typeof t == "function" ? n.local ? lO : aO : n.local ? sO : iO)(n, t));
}
function EN(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function cO(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fO(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function dO(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function hO(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? cO : typeof t == "function" ? dO : fO)(e, t, n ?? "")) : si(this.node(), e);
}
function si(e, t) {
  return e.style.getPropertyValue(t) || EN(e).getComputedStyle(e, null).getPropertyValue(t);
}
function pO(e) {
  return function() {
    delete this[e];
  };
}
function gO(e, t) {
  return function() {
    this[e] = t;
  };
}
function mO(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function vO(e, t) {
  return arguments.length > 1 ? this.each((t == null ? pO : typeof t == "function" ? mO : gO)(e, t)) : this.node()[e];
}
function CN(e) {
  return e.trim().split(/^|\s+/);
}
function Ey(e) {
  return e.classList || new kN(e);
}
function kN(e) {
  this._node = e, this._names = CN(e.getAttribute("class") || "");
}
kN.prototype = {
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
function NN(e, t) {
  for (var n = Ey(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
}
function RN(e, t) {
  for (var n = Ey(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
}
function yO(e) {
  return function() {
    NN(this, e);
  };
}
function xO(e) {
  return function() {
    RN(this, e);
  };
}
function wO(e, t) {
  return function() {
    (t.apply(this, arguments) ? NN : RN)(this, e);
  };
}
function _O(e, t) {
  var n = CN(e + "");
  if (arguments.length < 2) {
    for (var o = Ey(this.node()), i = -1, a = n.length; ++i < a; ) if (!o.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? wO : t ? yO : xO)(n, t));
}
function bO() {
  this.textContent = "";
}
function SO(e) {
  return function() {
    this.textContent = e;
  };
}
function EO(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function CO(e) {
  return arguments.length ? this.each(e == null ? bO : (typeof e == "function" ? EO : SO)(e)) : this.node().textContent;
}
function kO() {
  this.innerHTML = "";
}
function NO(e) {
  return function() {
    this.innerHTML = e;
  };
}
function RO(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function PO(e) {
  return arguments.length ? this.each(e == null ? kO : (typeof e == "function" ? RO : NO)(e)) : this.node().innerHTML;
}
function TO() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function AO() {
  return this.each(TO);
}
function IO() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function MO() {
  return this.each(IO);
}
function OO(e) {
  var t = typeof e == "function" ? e : xN(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function LO() {
  return null;
}
function jO(e, t) {
  var n = typeof e == "function" ? e : xN(e), o = t == null ? LO : typeof t == "function" ? t : Sy(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function DO() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function qO() {
  return this.each(DO);
}
function zO() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function FO() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function $O(e) {
  return this.select(e ? FO : zO);
}
function BO(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function VO(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function HO(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function WO(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, a; n < i; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++o] = a;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function UO(e, t, n) {
  return function() {
    var o = this.__on, i, a = VO(t);
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
function GO(e, t, n) {
  var o = HO(e + ""), i, a = o.length, l;
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
  for (u = t ? UO : WO, i = 0; i < a; ++i) this.each(u(o[i], t, n));
  return this;
}
function PN(e, t, n) {
  var o = EN(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function YO(e, t) {
  return function() {
    return PN(this, e, t);
  };
}
function KO(e, t) {
  return function() {
    return PN(this, e, t.apply(this, arguments));
  };
}
function XO(e, t) {
  return this.each((typeof t == "function" ? KO : YO)(e, t));
}
function* QO() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, a = o.length, l; i < a; ++i)
      (l = o[i]) && (yield l);
}
var TN = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Ys() {
  return new zt([[document.documentElement]], TN);
}
function ZO() {
  return this;
}
zt.prototype = Ys.prototype = {
  constructor: zt,
  select: EM,
  selectAll: RM,
  selectChild: IM,
  selectChildren: jM,
  filter: DM,
  data: VM,
  enter: qM,
  exit: WM,
  join: UM,
  merge: GM,
  selection: ZO,
  order: YM,
  sort: KM,
  call: QM,
  nodes: ZM,
  node: JM,
  size: eO,
  empty: tO,
  each: nO,
  attr: uO,
  style: hO,
  property: vO,
  classed: _O,
  text: CO,
  html: PO,
  raise: AO,
  lower: MO,
  append: OO,
  insert: jO,
  remove: qO,
  clone: $O,
  datum: BO,
  on: GO,
  dispatch: XO,
  [Symbol.iterator]: QO
};
function Dt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], TN);
}
function JO(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function fn(e, t) {
  if (e = JO(e), t === void 0 && (t = e.currentTarget), t) {
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
const eL = { passive: !1 }, Is = { capture: !0, passive: !1 };
function sd(e) {
  e.stopImmediatePropagation();
}
function ni(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function AN(e) {
  var t = e.document.documentElement, n = Dt(e).on("dragstart.drag", ni, Is);
  "onselectstart" in t ? n.on("selectstart.drag", ni, Is) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function IN(e, t) {
  var n = e.document.documentElement, o = Dt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", ni, Is), setTimeout(function() {
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
function tL(e) {
  return !e.ctrlKey && !e.button;
}
function nL() {
  return this.parentNode;
}
function rL(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function oL() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function MN() {
  var e = tL, t = nL, n = rL, o = oL, i = {}, a = yu("start", "drag", "end"), l = 0, u, f, d, h, p = 0;
  function m(k) {
    k.on("mousedown.drag", v).filter(o).on("touchstart.drag", w).on("touchmove.drag", b, eL).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(k, P) {
    if (!(h || !e.call(this, k, P))) {
      var T = _(this, t.call(this, k, P), k, P, "mouse");
      T && (Dt(k.view).on("mousemove.drag", E, Is).on("mouseup.drag", y, Is), AN(k.view), sd(k), d = !1, u = k.clientX, f = k.clientY, T("start", k));
    }
  }
  function E(k) {
    if (ni(k), !d) {
      var P = k.clientX - u, T = k.clientY - f;
      d = P * P + T * T > p;
    }
    i.mouse("drag", k);
  }
  function y(k) {
    Dt(k.view).on("mousemove.drag mouseup.drag", null), IN(k.view, d), ni(k), i.mouse("end", k);
  }
  function w(k, P) {
    if (e.call(this, k, P)) {
      var T = k.changedTouches, I = t.call(this, k, P), L = T.length, D, Y;
      for (D = 0; D < L; ++D)
        (Y = _(this, I, k, P, T[D].identifier, T[D])) && (sd(k), Y("start", k, T[D]));
    }
  }
  function b(k) {
    var P = k.changedTouches, T = P.length, I, L;
    for (I = 0; I < T; ++I)
      (L = i[P[I].identifier]) && (ni(k), L("drag", k, P[I]));
  }
  function C(k) {
    var P = k.changedTouches, T = P.length, I, L;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), I = 0; I < T; ++I)
      (L = i[P[I].identifier]) && (sd(k), L("end", k, P[I]));
  }
  function _(k, P, T, I, L, D) {
    var Y = a.copy(), $ = fn(D || T, P), V, H, O;
    if ((O = n.call(k, new Xv("beforestart", {
      sourceEvent: T,
      target: m,
      identifier: L,
      active: l,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), I)) != null)
      return V = O.x - $[0] || 0, H = O.y - $[1] || 0, function W(q, U, M) {
        var z = $, Q;
        switch (q) {
          case "start":
            i[L] = W, Q = l++;
            break;
          case "end":
            delete i[L], --l;
          // falls through
          case "drag":
            $ = fn(M || U, P), Q = l;
            break;
        }
        Y.call(
          q,
          k,
          new Xv(q, {
            sourceEvent: U,
            subject: O,
            target: m,
            identifier: L,
            active: Q,
            x: $[0] + V,
            y: $[1] + H,
            dx: $[0] - z[0],
            dy: $[1] - z[1],
            dispatch: Y
          }),
          I
        );
      };
  }
  return m.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : Cl(!!k), m) : e;
  }, m.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : Cl(k), m) : t;
  }, m.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : Cl(k), m) : n;
  }, m.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : Cl(!!k), m) : o;
  }, m.on = function() {
    var k = a.on.apply(a, arguments);
    return k === a ? m : k;
  }, m.clickDistance = function(k) {
    return arguments.length ? (p = (k = +k) * k, m) : Math.sqrt(p);
  }, m;
}
function Cy(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ON(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function Ks() {
}
var Ms = 0.7, Ql = 1 / Ms, ri = "\\s*([+-]?\\d+)\\s*", Os = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", iL = /^#([0-9a-f]{3,8})$/, sL = new RegExp(`^rgb\\(${ri},${ri},${ri}\\)$`), aL = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), lL = new RegExp(`^rgba\\(${ri},${ri},${ri},${Os}\\)$`), uL = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${Os}\\)$`), cL = new RegExp(`^hsl\\(${Os},${Tn},${Tn}\\)$`), fL = new RegExp(`^hsla\\(${Os},${Tn},${Tn},${Os}\\)$`), o_ = {
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
Cy(Ks, so, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: i_,
  // Deprecated! Use color.formatHex.
  formatHex: i_,
  formatHex8: dL,
  formatHsl: hL,
  formatRgb: s_,
  toString: s_
});
function i_() {
  return this.rgb().formatHex();
}
function dL() {
  return this.rgb().formatHex8();
}
function hL() {
  return LN(this).formatHsl();
}
function s_() {
  return this.rgb().formatRgb();
}
function so(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = iL.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? a_(t) : n === 3 ? new Rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? kl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? kl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sL.exec(e)) ? new Rt(t[1], t[2], t[3], 1) : (t = aL.exec(e)) ? new Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lL.exec(e)) ? kl(t[1], t[2], t[3], t[4]) : (t = uL.exec(e)) ? kl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cL.exec(e)) ? c_(t[1], t[2] / 100, t[3] / 100, 1) : (t = fL.exec(e)) ? c_(t[1], t[2] / 100, t[3] / 100, t[4]) : o_.hasOwnProperty(e) ? a_(o_[e]) : e === "transparent" ? new Rt(NaN, NaN, NaN, 0) : null;
}
function a_(e) {
  return new Rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function kl(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Rt(e, t, n, o);
}
function pL(e) {
  return e instanceof Ks || (e = so(e)), e ? (e = e.rgb(), new Rt(e.r, e.g, e.b, e.opacity)) : new Rt();
}
function Qv(e, t, n, o) {
  return arguments.length === 1 ? pL(e) : new Rt(e, t, n, o ?? 1);
}
function Rt(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
Cy(Rt, Qv, ON(Ks, {
  brighter(e) {
    return e = e == null ? Ql : Math.pow(Ql, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ms : Math.pow(Ms, e), new Rt(this.r * e, this.g * e, this.b * e, this.opacity);
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
  hex: l_,
  // Deprecated! Use color.formatHex.
  formatHex: l_,
  formatHex8: gL,
  formatRgb: u_,
  toString: u_
}));
function l_() {
  return `#${no(this.r)}${no(this.g)}${no(this.b)}`;
}
function gL() {
  return `#${no(this.r)}${no(this.g)}${no(this.b)}${no((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function u_() {
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
function c_(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new dn(e, t, n, o);
}
function LN(e) {
  if (e instanceof dn) return new dn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ks || (e = so(e)), !e) return new dn();
  if (e instanceof dn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), a = Math.max(t, n, o), l = NaN, u = a - i, f = (a + i) / 2;
  return u ? (t === a ? l = (n - o) / u + (n < o) * 6 : n === a ? l = (o - t) / u + 2 : l = (t - n) / u + 4, u /= f < 0.5 ? a + i : 2 - a - i, l *= 60) : u = f > 0 && f < 1 ? 0 : l, new dn(l, u, f, e.opacity);
}
function mL(e, t, n, o) {
  return arguments.length === 1 ? LN(e) : new dn(e, t, n, o ?? 1);
}
function dn(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
Cy(dn, mL, ON(Ks, {
  brighter(e) {
    return e = e == null ? Ql : Math.pow(Ql, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ms : Math.pow(Ms, e), new dn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Rt(
      ad(e >= 240 ? e - 240 : e + 120, i, o),
      ad(e, i, o),
      ad(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new dn(f_(this.h), Nl(this.s), Nl(this.l), Zl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Zl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${f_(this.h)}, ${Nl(this.s) * 100}%, ${Nl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function f_(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Nl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ad(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ky = (e) => () => e;
function vL(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function yL(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function xL(e) {
  return (e = +e) == 1 ? jN : function(t, n) {
    return n - t ? yL(t, n, e) : ky(isNaN(t) ? n : t);
  };
}
function jN(e, t) {
  var n = t - e;
  return n ? vL(e, n) : ky(isNaN(e) ? t : e);
}
const Jl = (function e(t) {
  var n = xL(t);
  function o(i, a) {
    var l = n((i = Qv(i)).r, (a = Qv(a)).r), u = n(i.g, a.g), f = n(i.b, a.b), d = jN(i.opacity, a.opacity);
    return function(h) {
      return i.r = l(h), i.g = u(h), i.b = f(h), i.opacity = d(h), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function wL(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) o[i] = e[i] * (1 - a) + t[i] * a;
    return o;
  };
}
function _L(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function bL(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, i = new Array(o), a = new Array(n), l;
  for (l = 0; l < o; ++l) i[l] = Ps(e[l], t[l]);
  for (; l < n; ++l) a[l] = t[l];
  return function(u) {
    for (l = 0; l < o; ++l) a[l] = i[l](u);
    return a;
  };
}
function SL(e, t) {
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
function EL(e, t) {
  var n = {}, o = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Ps(e[i], t[i]) : o[i] = t[i];
  return function(a) {
    for (i in n) o[i] = n[i](a);
    return o;
  };
}
var Zv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ld = new RegExp(Zv.source, "g");
function CL(e) {
  return function() {
    return e;
  };
}
function kL(e) {
  return function(t) {
    return e(t) + "";
  };
}
function DN(e, t) {
  var n = Zv.lastIndex = ld.lastIndex = 0, o, i, a, l = -1, u = [], f = [];
  for (e = e + "", t = t + ""; (o = Zv.exec(e)) && (i = ld.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), u[l] ? u[l] += a : u[++l] = a), (o = o[0]) === (i = i[0]) ? u[l] ? u[l] += i : u[++l] = i : (u[++l] = null, f.push({ i: l, x: Nn(o, i) })), n = ld.lastIndex;
  return n < t.length && (a = t.slice(n), u[l] ? u[l] += a : u[++l] = a), u.length < 2 ? f[0] ? kL(f[0].x) : CL(t) : (t = f.length, function(d) {
    for (var h = 0, p; h < t; ++h) u[(p = f[h]).i] = p.x(d);
    return u.join("");
  });
}
function Ps(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? ky(t) : (n === "number" ? Nn : n === "string" ? (o = so(t)) ? (t = o, Jl) : DN : t instanceof so ? Jl : t instanceof Date ? SL : _L(t) ? wL : Array.isArray(t) ? bL : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? EL : Nn)(e, t);
}
var d_ = 180 / Math.PI, Jv = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function qN(e, t, n, o, i, a) {
  var l, u, f;
  return (l = Math.sqrt(e * e + t * t)) && (e /= l, t /= l), (f = e * n + t * o) && (n -= e * f, o -= t * f), (u = Math.sqrt(n * n + o * o)) && (n /= u, o /= u, f /= u), e * o < t * n && (e = -e, t = -t, f = -f, l = -l), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * d_,
    skewX: Math.atan(f) * d_,
    scaleX: l,
    scaleY: u
  };
}
var Rl;
function NL(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Jv : qN(t.a, t.b, t.c, t.d, t.e, t.f);
}
function RL(e) {
  return e == null || (Rl || (Rl = document.createElementNS("http://www.w3.org/2000/svg", "g")), Rl.setAttribute("transform", e), !(e = Rl.transform.baseVal.consolidate())) ? Jv : (e = e.matrix, qN(e.a, e.b, e.c, e.d, e.e, e.f));
}
function zN(e, t, n, o) {
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
var PL = zN(NL, "px, ", "px)", "deg)"), TL = zN(RL, ", ", ")", ")"), AL = 1e-12;
function h_(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function IL(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ML(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Vl = (function e(t, n, o) {
  function i(a, l) {
    var u = a[0], f = a[1], d = a[2], h = l[0], p = l[1], m = l[2], v = h - u, E = p - f, y = v * v + E * E, w, b;
    if (y < AL)
      b = Math.log(m / d) / t, w = function(I) {
        return [
          u + I * v,
          f + I * E,
          d * Math.exp(t * I * b)
        ];
      };
    else {
      var C = Math.sqrt(y), _ = (m * m - d * d + o * y) / (2 * d * n * C), k = (m * m - d * d - o * y) / (2 * m * n * C), P = Math.log(Math.sqrt(_ * _ + 1) - _), T = Math.log(Math.sqrt(k * k + 1) - k);
      b = (T - P) / t, w = function(I) {
        var L = I * b, D = h_(P), Y = d / (n * C) * (D * ML(t * L + P) - IL(P));
        return [
          u + Y * v,
          f + Y * E,
          d * D / h_(t * L + P)
        ];
      };
    }
    return w.duration = b * 1e3 * t / Math.SQRT2, w;
  }
  return i.rho = function(a) {
    var l = Math.max(1e-3, +a), u = l * l, f = u * u;
    return e(l, u, f);
  }, i;
})(Math.SQRT2, 2, 4);
var ai = 0, Ss = 0, ws = 0, FN = 1e3, eu, Es, tu = 0, ao = 0, wu = 0, Ls = typeof performance == "object" && performance.now ? performance : Date, $N = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ny() {
  return ao || ($N(OL), ao = Ls.now() + wu);
}
function OL() {
  ao = 0;
}
function nu() {
  this._call = this._time = this._next = null;
}
nu.prototype = BN.prototype = {
  constructor: nu,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ny() : +n) + (t == null ? 0 : +t), !this._next && Es !== this && (Es ? Es._next = this : eu = this, Es = this), this._call = e, this._time = n, ey();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ey());
  }
};
function BN(e, t, n) {
  var o = new nu();
  return o.restart(e, t, n), o;
}
function LL() {
  Ny(), ++ai;
  for (var e = eu, t; e; )
    (t = ao - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ai;
}
function p_() {
  ao = (tu = Ls.now()) + wu, ai = Ss = 0;
  try {
    LL();
  } finally {
    ai = 0, DL(), ao = 0;
  }
}
function jL() {
  var e = Ls.now(), t = e - tu;
  t > FN && (wu -= t, tu = e);
}
function DL() {
  for (var e, t = eu, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : eu = n);
  Es = e, ey(o);
}
function ey(e) {
  if (!ai) {
    Ss && (Ss = clearTimeout(Ss));
    var t = e - ao;
    t > 24 ? (e < 1 / 0 && (Ss = setTimeout(p_, e - Ls.now() - wu)), ws && (ws = clearInterval(ws))) : (ws || (tu = Ls.now(), ws = setInterval(jL, FN)), ai = 1, $N(p_));
  }
}
function g_(e, t, n) {
  var o = new nu();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var qL = yu("start", "end", "cancel", "interrupt"), zL = [], VN = 0, m_ = 1, ty = 2, Hl = 3, v_ = 4, ny = 5, Wl = 6;
function _u(e, t, n, o, i, a) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  FL(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: qL,
    tween: zL,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: VN
  });
}
function Ry(e, t) {
  var n = yn(e, t);
  if (n.state > VN) throw new Error("too late; already scheduled");
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
function FL(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = BN(a, 0, n.time);
  function a(d) {
    n.state = m_, n.timer.restart(l, n.delay, n.time), n.delay <= d && l(d - n.delay);
  }
  function l(d) {
    var h, p, m, v;
    if (n.state !== m_) return f();
    for (h in o)
      if (v = o[h], v.name === n.name) {
        if (v.state === Hl) return g_(l);
        v.state === v_ ? (v.state = Wl, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete o[h]) : +h < t && (v.state = Wl, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete o[h]);
      }
    if (g_(function() {
      n.state === Hl && (n.state = v_, n.timer.restart(u, n.delay, n.time), u(d));
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
function $L(e) {
  return this.each(function() {
    Ul(this, e);
  });
}
function BL(e, t) {
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
function VL(e, t, n) {
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
function HL(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = yn(this.node(), n).tween, i = 0, a = o.length, l; i < a; ++i)
      if ((l = o[i]).name === e)
        return l.value;
    return null;
  }
  return this.each((t == null ? BL : VL)(n, e, t));
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
function HN(e, t) {
  var n;
  return (typeof t == "number" ? Nn : t instanceof so ? Jl : (n = so(t)) ? (t = n, Jl) : DN)(e, t);
}
function WL(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function UL(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function GL(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttribute(e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function YL(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function KL(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttribute(e) : (l = this.getAttribute(e), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function XL(e, t, n) {
  var o, i, a;
  return function() {
    var l, u = n(this), f;
    return u == null ? void this.removeAttributeNS(e.space, e.local) : (l = this.getAttributeNS(e.space, e.local), f = u + "", l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u)));
  };
}
function QL(e, t) {
  var n = xu(e), o = n === "transform" ? TL : HN;
  return this.attrTween(e, typeof t == "function" ? (n.local ? XL : KL)(n, o, Py(this, "attr." + e, t)) : t == null ? (n.local ? UL : WL)(n) : (n.local ? YL : GL)(n, o, t));
}
function ZL(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function JL(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function ej(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && JL(e, a)), n;
  }
  return i._value = t, i;
}
function tj(e, t) {
  var n, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (n = (o = a) && ZL(e, a)), n;
  }
  return i._value = t, i;
}
function nj(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = xu(e);
  return this.tween(n, (o.local ? ej : tj)(o, t));
}
function rj(e, t) {
  return function() {
    Ry(this, e).delay = +t.apply(this, arguments);
  };
}
function oj(e, t) {
  return t = +t, function() {
    Ry(this, e).delay = t;
  };
}
function ij(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? rj : oj)(t, e)) : yn(this.node(), t).delay;
}
function sj(e, t) {
  return function() {
    On(this, e).duration = +t.apply(this, arguments);
  };
}
function aj(e, t) {
  return t = +t, function() {
    On(this, e).duration = t;
  };
}
function lj(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? sj : aj)(t, e)) : yn(this.node(), t).duration;
}
function uj(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    On(this, e).ease = t;
  };
}
function cj(e) {
  var t = this._id;
  return arguments.length ? this.each(uj(t, e)) : yn(this.node(), t).ease;
}
function fj(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    On(this, e).ease = n;
  };
}
function dj(e) {
  if (typeof e != "function") throw new Error();
  return this.each(fj(this._id, e));
}
function hj(e) {
  typeof e != "function" && (e = _N(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var a = t[i], l = a.length, u = o[i] = [], f, d = 0; d < l; ++d)
      (f = a[d]) && e.call(f, f.__data__, d, a) && u.push(f);
  return new Xn(o, this._parents, this._name, this._id);
}
function pj(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, a = Math.min(o, i), l = new Array(o), u = 0; u < a; ++u)
    for (var f = t[u], d = n[u], h = f.length, p = l[u] = new Array(h), m, v = 0; v < h; ++v)
      (m = f[v] || d[v]) && (p[v] = m);
  for (; u < o; ++u)
    l[u] = t[u];
  return new Xn(l, this._parents, this._name, this._id);
}
function gj(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function mj(e, t, n) {
  var o, i, a = gj(t) ? Ry : On;
  return function() {
    var l = a(this, e), u = l.on;
    u !== o && (i = (o = u).copy()).on(t, n), l.on = i;
  };
}
function vj(e, t) {
  var n = this._id;
  return arguments.length < 2 ? yn(this.node(), n).on.on(e) : this.each(mj(n, e, t));
}
function yj(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function xj() {
  return this.on("end.remove", yj(this._id));
}
function wj(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Sy(e));
  for (var o = this._groups, i = o.length, a = new Array(i), l = 0; l < i; ++l)
    for (var u = o[l], f = u.length, d = a[l] = new Array(f), h, p, m = 0; m < f; ++m)
      (h = u[m]) && (p = e.call(h, h.__data__, m, u)) && ("__data__" in h && (p.__data__ = h.__data__), d[m] = p, _u(d[m], t, n, m, d, yn(h, n)));
  return new Xn(a, this._parents, t, n);
}
function _j(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = wN(e));
  for (var o = this._groups, i = o.length, a = [], l = [], u = 0; u < i; ++u)
    for (var f = o[u], d = f.length, h, p = 0; p < d; ++p)
      if (h = f[p]) {
        for (var m = e.call(h, h.__data__, p, f), v, E = yn(h, n), y = 0, w = m.length; y < w; ++y)
          (v = m[y]) && _u(v, t, n, y, m, E);
        a.push(m), l.push(h);
      }
  return new Xn(a, l, t, n);
}
var bj = Ys.prototype.constructor;
function Sj() {
  return new bj(this._groups, this._parents);
}
function Ej(e, t) {
  var n, o, i;
  return function() {
    var a = si(this, e), l = (this.style.removeProperty(e), si(this, e));
    return a === l ? null : a === n && l === o ? i : i = t(n = a, o = l);
  };
}
function WN(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Cj(e, t, n) {
  var o, i = n + "", a;
  return function() {
    var l = si(this, e);
    return l === i ? null : l === o ? a : a = t(o = l, n);
  };
}
function kj(e, t, n) {
  var o, i, a;
  return function() {
    var l = si(this, e), u = n(this), f = u + "";
    return u == null && (f = u = (this.style.removeProperty(e), si(this, e))), l === f ? null : l === o && f === i ? a : (i = f, a = t(o = l, u));
  };
}
function Nj(e, t) {
  var n, o, i, a = "style." + t, l = "end." + a, u;
  return function() {
    var f = On(this, e), d = f.on, h = f.value[a] == null ? u || (u = WN(t)) : void 0;
    (d !== n || i !== h) && (o = (n = d).copy()).on(l, i = h), f.on = o;
  };
}
function Rj(e, t, n) {
  var o = (e += "") == "transform" ? PL : HN;
  return t == null ? this.styleTween(e, Ej(e, o)).on("end.style." + e, WN(e)) : typeof t == "function" ? this.styleTween(e, kj(e, o, Py(this, "style." + e, t))).each(Nj(this._id, e)) : this.styleTween(e, Cj(e, o, t), n).on("end.style." + e, null);
}
function Pj(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function Tj(e, t, n) {
  var o, i;
  function a() {
    var l = t.apply(this, arguments);
    return l !== i && (o = (i = l) && Pj(e, l, n)), o;
  }
  return a._value = t, a;
}
function Aj(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, Tj(e, t, n ?? ""));
}
function Ij(e) {
  return function() {
    this.textContent = e;
  };
}
function Mj(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Oj(e) {
  return this.tween("text", typeof e == "function" ? Mj(Py(this, "text", e)) : Ij(e == null ? "" : e + ""));
}
function Lj(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function jj(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && Lj(i)), t;
  }
  return o._value = e, o;
}
function Dj(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, jj(e));
}
function qj() {
  for (var e = this._name, t = this._id, n = UN(), o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      if (f = l[d]) {
        var h = yn(f, t);
        _u(f, e, n, d, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Xn(o, this._parents, e, n);
}
function zj() {
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
var Fj = 0;
function Xn(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function UN() {
  return ++Fj;
}
var Gn = Ys.prototype;
Xn.prototype = {
  constructor: Xn,
  select: wj,
  selectAll: _j,
  selectChild: Gn.selectChild,
  selectChildren: Gn.selectChildren,
  filter: hj,
  merge: pj,
  selection: Sj,
  transition: qj,
  call: Gn.call,
  nodes: Gn.nodes,
  node: Gn.node,
  size: Gn.size,
  empty: Gn.empty,
  each: Gn.each,
  on: vj,
  attr: QL,
  attrTween: nj,
  style: Rj,
  styleTween: Aj,
  text: Oj,
  textTween: Dj,
  remove: xj,
  tween: HL,
  delay: ij,
  duration: lj,
  ease: cj,
  easeVarying: dj,
  end: zj,
  [Symbol.iterator]: Gn[Symbol.iterator]
};
function $j(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Bj = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: $j
};
function Vj(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Hj(e) {
  var t, n;
  e instanceof Xn ? (t = e._id, e = e._name) : (t = UN(), (n = Bj).time = Ny(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, f, d = 0; d < u; ++d)
      (f = l[d]) && _u(f, e, t, d, l, n || Vj(f, t));
  return new Xn(o, this._parents, e, t);
}
Ys.prototype.interrupt = $L;
Ys.prototype.transition = Hj;
const Pl = (e) => () => e;
function Wj(e, {
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
var bu = new Kn(1, 0, 0);
GN.prototype = Kn.prototype;
function GN(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return bu;
  return e.__zoom;
}
function ud(e) {
  e.stopImmediatePropagation();
}
function _s(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Uj(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Gj() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function y_() {
  return this.__zoom || bu;
}
function Yj(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Kj() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xj(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    l > a ? (a + l) / 2 : Math.min(0, a) || Math.max(0, l)
  );
}
function YN() {
  var e = Uj, t = Gj, n = Xj, o = Yj, i = Kj, a = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, f = Vl, d = yu("start", "zoom", "end"), h, p, m, v = 500, E = 150, y = 0, w = 10;
  function b(O) {
    O.property("__zoom", y_).on("wheel.zoom", L, { passive: !1 }).on("mousedown.zoom", D).on("dblclick.zoom", Y).filter(i).on("touchstart.zoom", $).on("touchmove.zoom", V).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(O, W, q, U) {
    var M = O.selection ? O.selection() : O;
    M.property("__zoom", y_), O !== M ? P(O, W, q, U) : M.interrupt().each(function() {
      T(this, arguments).event(U).start().zoom(null, typeof W == "function" ? W.apply(this, arguments) : W).end();
    });
  }, b.scaleBy = function(O, W, q, U) {
    b.scaleTo(O, function() {
      var M = this.__zoom.k, z = typeof W == "function" ? W.apply(this, arguments) : W;
      return M * z;
    }, q, U);
  }, b.scaleTo = function(O, W, q, U) {
    b.transform(O, function() {
      var M = t.apply(this, arguments), z = this.__zoom, Q = q == null ? k(M) : typeof q == "function" ? q.apply(this, arguments) : q, j = z.invert(Q), G = typeof W == "function" ? W.apply(this, arguments) : W;
      return n(_(C(z, G), Q, j), M, l);
    }, q, U);
  }, b.translateBy = function(O, W, q, U) {
    b.transform(O, function() {
      return n(this.__zoom.translate(
        typeof W == "function" ? W.apply(this, arguments) : W,
        typeof q == "function" ? q.apply(this, arguments) : q
      ), t.apply(this, arguments), l);
    }, null, U);
  }, b.translateTo = function(O, W, q, U, M) {
    b.transform(O, function() {
      var z = t.apply(this, arguments), Q = this.__zoom, j = U == null ? k(z) : typeof U == "function" ? U.apply(this, arguments) : U;
      return n(bu.translate(j[0], j[1]).scale(Q.k).translate(
        typeof W == "function" ? -W.apply(this, arguments) : -W,
        typeof q == "function" ? -q.apply(this, arguments) : -q
      ), z, l);
    }, U, M);
  };
  function C(O, W) {
    return W = Math.max(a[0], Math.min(a[1], W)), W === O.k ? O : new Kn(W, O.x, O.y);
  }
  function _(O, W, q) {
    var U = W[0] - q[0] * O.k, M = W[1] - q[1] * O.k;
    return U === O.x && M === O.y ? O : new Kn(O.k, U, M);
  }
  function k(O) {
    return [(+O[0][0] + +O[1][0]) / 2, (+O[0][1] + +O[1][1]) / 2];
  }
  function P(O, W, q, U) {
    O.on("start.zoom", function() {
      T(this, arguments).event(U).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(U).end();
    }).tween("zoom", function() {
      var M = this, z = arguments, Q = T(M, z).event(U), j = t.apply(M, z), G = q == null ? k(j) : typeof q == "function" ? q.apply(M, z) : q, ie = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), B = M.__zoom, Z = typeof W == "function" ? W.apply(M, z) : W, ee = f(B.invert(G).concat(ie / B.k), Z.invert(G).concat(ie / Z.k));
      return function(X) {
        if (X === 1) X = Z;
        else {
          var te = ee(X), se = ie / te[2];
          X = new Kn(se, G[0] - te[0] * se, G[1] - te[1] * se);
        }
        Q.zoom(null, X);
      };
    });
  }
  function T(O, W, q) {
    return !q && O.__zooming || new I(O, W);
  }
  function I(O, W) {
    this.that = O, this.args = W, this.active = 0, this.sourceEvent = null, this.extent = t.apply(O, W), this.taps = 0;
  }
  I.prototype = {
    event: function(O) {
      return O && (this.sourceEvent = O), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(O, W) {
      return this.mouse && O !== "mouse" && (this.mouse[1] = W.invert(this.mouse[0])), this.touch0 && O !== "touch" && (this.touch0[1] = W.invert(this.touch0[0])), this.touch1 && O !== "touch" && (this.touch1[1] = W.invert(this.touch1[0])), this.that.__zoom = W, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(O) {
      var W = Dt(this.that).datum();
      d.call(
        O,
        this.that,
        new Wj(O, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: d
        }),
        W
      );
    }
  };
  function L(O, ...W) {
    if (!e.apply(this, arguments)) return;
    var q = T(this, W).event(O), U = this.__zoom, M = Math.max(a[0], Math.min(a[1], U.k * Math.pow(2, o.apply(this, arguments)))), z = fn(O);
    if (q.wheel)
      (q.mouse[0][0] !== z[0] || q.mouse[0][1] !== z[1]) && (q.mouse[1] = U.invert(q.mouse[0] = z)), clearTimeout(q.wheel);
    else {
      if (U.k === M) return;
      q.mouse = [z, U.invert(z)], Ul(this), q.start();
    }
    _s(O), q.wheel = setTimeout(Q, E), q.zoom("mouse", n(_(C(U, M), q.mouse[0], q.mouse[1]), q.extent, l));
    function Q() {
      q.wheel = null, q.end();
    }
  }
  function D(O, ...W) {
    if (m || !e.apply(this, arguments)) return;
    var q = O.currentTarget, U = T(this, W, !0).event(O), M = Dt(O.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", ie, !0), z = fn(O, q), Q = O.clientX, j = O.clientY;
    AN(O.view), ud(O), U.mouse = [z, this.__zoom.invert(z)], Ul(this), U.start();
    function G(B) {
      if (_s(B), !U.moved) {
        var Z = B.clientX - Q, ee = B.clientY - j;
        U.moved = Z * Z + ee * ee > y;
      }
      U.event(B).zoom("mouse", n(_(U.that.__zoom, U.mouse[0] = fn(B, q), U.mouse[1]), U.extent, l));
    }
    function ie(B) {
      M.on("mousemove.zoom mouseup.zoom", null), IN(B.view, U.moved), _s(B), U.event(B).end();
    }
  }
  function Y(O, ...W) {
    if (e.apply(this, arguments)) {
      var q = this.__zoom, U = fn(O.changedTouches ? O.changedTouches[0] : O, this), M = q.invert(U), z = q.k * (O.shiftKey ? 0.5 : 2), Q = n(_(C(q, z), U, M), t.apply(this, W), l);
      _s(O), u > 0 ? Dt(this).transition().duration(u).call(P, Q, U, O) : Dt(this).call(b.transform, Q, U, O);
    }
  }
  function $(O, ...W) {
    if (e.apply(this, arguments)) {
      var q = O.touches, U = q.length, M = T(this, W, O.changedTouches.length === U).event(O), z, Q, j, G;
      for (ud(O), Q = 0; Q < U; ++Q)
        j = q[Q], G = fn(j, this), G = [G, this.__zoom.invert(G), j.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== G[2] && (M.touch1 = G, M.taps = 0) : (M.touch0 = G, z = !0, M.taps = 1 + !!h);
      h && (h = clearTimeout(h)), z && (M.taps < 2 && (p = G[0], h = setTimeout(function() {
        h = null;
      }, v)), Ul(this), M.start());
    }
  }
  function V(O, ...W) {
    if (this.__zooming) {
      var q = T(this, W).event(O), U = O.changedTouches, M = U.length, z, Q, j, G;
      for (_s(O), z = 0; z < M; ++z)
        Q = U[z], j = fn(Q, this), q.touch0 && q.touch0[2] === Q.identifier ? q.touch0[0] = j : q.touch1 && q.touch1[2] === Q.identifier && (q.touch1[0] = j);
      if (Q = q.that.__zoom, q.touch1) {
        var ie = q.touch0[0], B = q.touch0[1], Z = q.touch1[0], ee = q.touch1[1], X = (X = Z[0] - ie[0]) * X + (X = Z[1] - ie[1]) * X, te = (te = ee[0] - B[0]) * te + (te = ee[1] - B[1]) * te;
        Q = C(Q, Math.sqrt(X / te)), j = [(ie[0] + Z[0]) / 2, (ie[1] + Z[1]) / 2], G = [(B[0] + ee[0]) / 2, (B[1] + ee[1]) / 2];
      } else if (q.touch0) j = q.touch0[0], G = q.touch0[1];
      else return;
      q.zoom("touch", n(_(Q, j, G), q.extent, l));
    }
  }
  function H(O, ...W) {
    if (this.__zooming) {
      var q = T(this, W).event(O), U = O.changedTouches, M = U.length, z, Q;
      for (ud(O), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, v), z = 0; z < M; ++z)
        Q = U[z], q.touch0 && q.touch0[2] === Q.identifier ? delete q.touch0 : q.touch1 && q.touch1[2] === Q.identifier && delete q.touch1;
      if (q.touch1 && !q.touch0 && (q.touch0 = q.touch1, delete q.touch1), q.touch0) q.touch0[1] = this.__zoom.invert(q.touch0[0]);
      else if (q.end(), q.taps === 2 && (Q = fn(Q, this), Math.hypot(p[0] - Q[0], p[1] - Q[1]) < w)) {
        var j = Dt(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(O) {
    return arguments.length ? (o = typeof O == "function" ? O : Pl(+O), b) : o;
  }, b.filter = function(O) {
    return arguments.length ? (e = typeof O == "function" ? O : Pl(!!O), b) : e;
  }, b.touchable = function(O) {
    return arguments.length ? (i = typeof O == "function" ? O : Pl(!!O), b) : i;
  }, b.extent = function(O) {
    return arguments.length ? (t = typeof O == "function" ? O : Pl([[+O[0][0], +O[0][1]], [+O[1][0], +O[1][1]]]), b) : t;
  }, b.scaleExtent = function(O) {
    return arguments.length ? (a[0] = +O[0], a[1] = +O[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(O) {
    return arguments.length ? (l[0][0] = +O[0][0], l[1][0] = +O[1][0], l[0][1] = +O[0][1], l[1][1] = +O[1][1], b) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, b.constrain = function(O) {
    return arguments.length ? (n = O, b) : n;
  }, b.duration = function(O) {
    return arguments.length ? (u = +O, b) : u;
  }, b.interpolate = function(O) {
    return arguments.length ? (f = O, b) : f;
  }, b.on = function() {
    var O = d.on.apply(d, arguments);
    return O === d ? b : O;
  }, b.clickDistance = function(O) {
    return arguments.length ? (y = (O = +O) * O, b) : Math.sqrt(y);
  }, b.tapDistance = function(O) {
    return arguments.length ? (w = +O, b) : w;
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
}, js = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], KN = ["Enter", " ", "Escape"], XN = {
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
var li;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(li || (li = {}));
var oo;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(oo || (oo = {}));
var Ds;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Ds || (Ds = {}));
const QN = {
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
var me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(me || (me = {}));
const x_ = {
  [me.Left]: me.Right,
  [me.Right]: me.Left,
  [me.Top]: me.Bottom,
  [me.Bottom]: me.Top
};
function ZN(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const JN = (e) => "id" in e && "source" in e && "target" in e, Qj = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ty = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Xs = (e, t = [0, 0]) => {
  const { width: n, height: o } = Jn(e), i = e.origin ?? t, a = n * i[0], l = o * i[1];
  return {
    x: e.position.x - a,
    y: e.position.y - l
  };
}, Zj = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((o, i) => {
    const a = typeof i == "string";
    let l = !t.nodeLookup && !a ? i : void 0;
    t.nodeLookup && (l = a ? t.nodeLookup.get(i) : Ty(i) ? i : t.nodeLookup.get(i.id));
    const u = l ? ou(l, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Su(o, u);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Eu(n);
}, Qs = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = !1;
  return e.forEach((i) => {
    (t.filter === void 0 || t.filter(i)) && (n = Su(n, ou(i)), o = !0);
  }), o ? Eu(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Ay = (e, t, [n, o, i] = [0, 0, 1], a = !1, l = !1) => {
  const u = {
    ...Js(t, [n, o, i]),
    width: t.width / i,
    height: t.height / i
  }, f = [];
  for (const d of e.values()) {
    const { measured: h, selectable: p = !0, hidden: m = !1 } = d;
    if (l && !p || m)
      continue;
    const v = h.width ?? d.width ?? d.initialWidth ?? null, E = h.height ?? d.height ?? d.initialHeight ?? null, y = qs(u, ci(d)), w = (v ?? 0) * (E ?? 0), b = a && y > 0;
    (!d.internals.handleBounds || b || y >= w || d.dragging) && f.push(d);
  }
  return f;
}, Jj = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function eD(e, t) {
  const n = /* @__PURE__ */ new Map(), o = t != null && t.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
  return e.forEach((i) => {
    i.measured.width && i.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !i.hidden) && (!o || o.has(i.id)) && n.set(i.id, i);
  }), n;
}
async function tD({ nodes: e, width: t, height: n, panZoom: o, minZoom: i, maxZoom: a }, l) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const u = eD(e, l), f = Qs(u), d = Iy(f, t, n, (l == null ? void 0 : l.minZoom) ?? i, (l == null ? void 0 : l.maxZoom) ?? a, (l == null ? void 0 : l.padding) ?? 0.1);
  return await o.setViewport(d, {
    duration: l == null ? void 0 : l.duration,
    ease: l == null ? void 0 : l.ease,
    interpolate: l == null ? void 0 : l.interpolate
  }), Promise.resolve(!0);
}
function eR({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: i, onError: a }) {
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
  else u && fi(l.extent) && (p = [
    [l.extent[0][0] + f, l.extent[0][1] + d],
    [l.extent[1][0] + f, l.extent[1][1] + d]
  ]);
  const m = fi(p) ? lo(t, p, l.measured) : t;
  return (l.measured.width === void 0 || l.measured.height === void 0) && (a == null || a("015", In.error015())), {
    position: {
      x: m.x - f + (l.measured.width ?? 0) * h[0],
      y: m.y - d + (l.measured.height ?? 0) * h[1]
    },
    positionAbsolute: m
  };
}
async function nD({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: i }) {
  const a = new Set(e.map((m) => m.id)), l = [];
  for (const m of n) {
    if (m.deletable === !1)
      continue;
    const v = a.has(m.id), E = !v && m.parentId && l.find((y) => y.id === m.parentId);
    (v || E) && l.push(m);
  }
  const u = new Set(t.map((m) => m.id)), f = o.filter((m) => m.deletable !== !1), h = Jj(l, f);
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
const ui = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), lo = (e = { x: 0, y: 0 }, t, n) => ({
  x: ui(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: ui(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function tR(e, t, n) {
  const { width: o, height: i } = Jn(n), { x: a, y: l } = n.internals.positionAbsolute;
  return lo(e, [
    [a, l],
    [a + o, l + i]
  ], t);
}
const w_ = (e, t, n) => e < t ? ui(Math.abs(e - t), 1, t) / t : e > n ? -ui(Math.abs(e - n), 1, t) / t : 0, nR = (e, t, n = 15, o = 40) => {
  const i = w_(e.x, o, t.width - o) * n, a = w_(e.y, o, t.height - o) * n;
  return [i, a];
}, Su = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ry = ({ x: e, y: t, width: n, height: o }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + o
}), Eu = ({ x: e, y: t, x2: n, y2: o }) => ({
  x: e,
  y: t,
  width: n - e,
  height: o - t
}), ci = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Ty(e) ? e.internals.positionAbsolute : Xs(e, t);
  return {
    x: n,
    y: o,
    width: ((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, ou = (e, t = [0, 0]) => {
  var i, a;
  const { x: n, y: o } = Ty(e) ? e.internals.positionAbsolute : Xs(e, t);
  return {
    x: n,
    y: o,
    x2: n + (((i = e.measured) == null ? void 0 : i.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: o + (((a = e.measured) == null ? void 0 : a.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, rR = (e, t) => Eu(Su(ry(e), ry(t))), qs = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}, __ = (e) => hn(e.width) && hn(e.height) && hn(e.x) && hn(e.y), hn = (e) => !isNaN(e) && isFinite(e), rD = (e, t) => {
}, Zs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Js = ({ x: e, y: t }, [n, o, i], a = !1, l = [1, 1]) => {
  const u = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return a ? Zs(u, l) : u;
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
function oD(e, t, n) {
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
function iD(e, t, n, o, i, a) {
  const { x: l, y: u } = iu(e, [t, n, o]), { x: f, y: d } = iu({ x: e.x + e.width, y: e.y + e.height }, [t, n, o]), h = i - f, p = a - d;
  return {
    left: Math.floor(l),
    top: Math.floor(u),
    right: Math.floor(h),
    bottom: Math.floor(p)
  };
}
const Iy = (e, t, n, o, i, a) => {
  const l = oD(a, t, n), u = (t - l.x) / e.width, f = (n - l.y) / e.height, d = Math.min(u, f), h = ui(d, o, i), p = e.x + e.width / 2, m = e.y + e.height / 2, v = t / 2 - p * h, E = n / 2 - m * h, y = iD(e, v, E, h, t, n), w = {
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
}, zs = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function fi(e) {
  return e != null && e !== "parent";
}
function Jn(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function oR(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function iR(e, t = { width: 0, height: 0 }, n, o, i) {
  const a = { ...e }, l = o.get(n);
  if (l) {
    const u = l.origin || i;
    a.x += l.internals.positionAbsolute.x - (t.width ?? 0) * u[0], a.y += l.internals.positionAbsolute.y - (t.height ?? 0) * u[1];
  }
  return a;
}
function b_(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function sD() {
  let e, t;
  return { promise: new Promise((o, i) => {
    e = o, t = i;
  }), resolve: e, reject: t };
}
function aD(e) {
  return { ...XN, ...e || {} };
}
function Ts(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: o, containerBounds: i }) {
  const { x: a, y: l } = pn(e), u = Js({ x: a - ((i == null ? void 0 : i.left) ?? 0), y: l - ((i == null ? void 0 : i.top) ?? 0) }, o), { x: f, y: d } = n ? Zs(u, t) : u;
  return {
    xSnapped: f,
    ySnapped: d,
    ...u
  };
}
const My = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), sR = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, lD = ["INPUT", "SELECT", "TEXTAREA"];
function aR(e) {
  var o, i;
  const t = ((i = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : i[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : lD.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const lR = (e) => "clientX" in e, pn = (e, t) => {
  var a, l;
  const n = lR(e), o = n ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, i = n ? e.clientY : (l = e.touches) == null ? void 0 : l[0].clientY;
  return {
    x: o - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, S_ = (e, t, n, o, i) => {
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
function uR({ sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: i, sourceControlY: a, targetControlX: l, targetControlY: u }) {
  const f = e * 0.125 + i * 0.375 + l * 0.375 + n * 0.125, d = t * 0.125 + a * 0.375 + u * 0.375 + o * 0.125, h = Math.abs(f - e), p = Math.abs(d - t);
  return [f, d, h, p];
}
function Tl(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function E_({ pos: e, x1: t, y1: n, x2: o, y2: i, c: a }) {
  switch (e) {
    case me.Left:
      return [t - Tl(t - o, a), n];
    case me.Right:
      return [t + Tl(o - t, a), n];
    case me.Top:
      return [t, n - Tl(n - i, a)];
    case me.Bottom:
      return [t, n + Tl(i - n, a)];
  }
}
function cR({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: o, targetY: i, targetPosition: a = me.Top, curvature: l = 0.25 }) {
  const [u, f] = E_({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i,
    c: l
  }), [d, h] = E_({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t,
    c: l
  }), [p, m, v, E] = uR({
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
function fR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, l = Math.abs(o - t) / 2, u = o < t ? o + l : o - l;
  return [a, u, i, l];
}
function uD({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: o, elevateOnSelect: i = !1 }) {
  if (o !== void 0)
    return o;
  const a = i && n ? 1e3 : 0, l = Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
  return a + l;
}
function cD({ sourceNode: e, targetNode: t, width: n, height: o, transform: i }) {
  const a = Su(ou(e), ou(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const l = {
    x: -i[0] / i[2],
    y: -i[1] / i[2],
    width: n / i[2],
    height: o / i[2]
  };
  return qs(l, Eu(a)) > 0;
}
const fD = ({ source: e, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`, dD = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), dR = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return JN(e) ? n = { ...e } : n = {
    ...e,
    id: fD(e)
  }, dD(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function hR({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
  const [i, a, l, u] = fR({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: o
  });
  return [`M ${e},${t}L ${n},${o}`, i, a, l, u];
}
const C_ = {
  [me.Left]: { x: -1, y: 0 },
  [me.Right]: { x: 1, y: 0 },
  [me.Top]: { x: 0, y: -1 },
  [me.Bottom]: { x: 0, y: 1 }
}, hD = ({ source: e, sourcePosition: t = me.Bottom, target: n }) => t === me.Left || t === me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, k_ = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function pD({ source: e, sourcePosition: t = me.Bottom, target: n, targetPosition: o = me.Top, center: i, offset: a, stepPosition: l }) {
  const u = C_[t], f = C_[o], d = { x: e.x + u.x * a, y: e.y + u.y * a }, h = { x: n.x + f.x * a, y: n.y + f.y * a }, p = hD({
    source: d,
    sourcePosition: t,
    target: h
  }), m = p.x !== 0 ? "x" : "y", v = p[m];
  let E = [], y, w;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , _, k] = fR({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (u[m] * f[m] === -1) {
    m === "x" ? (y = i.x ?? d.x + (h.x - d.x) * l, w = i.y ?? (d.y + h.y) / 2) : (y = i.x ?? (d.x + h.x) / 2, w = i.y ?? d.y + (h.y - d.y) * l);
    const T = [
      { x: y, y: d.y },
      { x: y, y: h.y }
    ], I = [
      { x: d.x, y: w },
      { x: h.x, y: w }
    ];
    u[m] === v ? E = m === "x" ? T : I : E = m === "x" ? I : T;
  } else {
    const T = [{ x: d.x, y: h.y }], I = [{ x: h.x, y: d.y }];
    if (m === "x" ? E = u.x === v ? I : T : E = u.y === v ? T : I, t === o) {
      const V = Math.abs(e[m] - n[m]);
      if (V <= a) {
        const H = Math.min(a - 1, a - V);
        u[m] === v ? b[m] = (d[m] > e[m] ? -1 : 1) * H : C[m] = (h[m] > n[m] ? -1 : 1) * H;
      }
    }
    if (t !== o) {
      const V = m === "x" ? "y" : "x", H = u[m] === f[V], O = d[V] > h[V], W = d[V] < h[V];
      (u[m] === 1 && (!H && O || H && W) || u[m] !== 1 && (!H && W || H && O)) && (E = m === "x" ? T : I);
    }
    const L = { x: d.x + b.x, y: d.y + b.y }, D = { x: h.x + C.x, y: h.y + C.y }, Y = Math.max(Math.abs(L.x - E[0].x), Math.abs(D.x - E[0].x)), $ = Math.max(Math.abs(L.y - E[0].y), Math.abs(D.y - E[0].y));
    Y >= $ ? (y = (L.x + D.x) / 2, w = E[0].y) : (y = E[0].x, w = (L.y + D.y) / 2);
  }
  return [[
    e,
    { x: d.x + b.x, y: d.y + b.y },
    ...E,
    { x: h.x + C.x, y: h.y + C.y },
    n
  ], y, w, _, k];
}
function gD(e, t, n, o) {
  const i = Math.min(k_(e, t) / 2, k_(t, n) / 2, o), { x: a, y: l } = t;
  if (e.x === a && a === n.x || e.y === l && l === n.y)
    return `L${a} ${l}`;
  if (e.y === l) {
    const d = e.x < n.x ? -1 : 1, h = e.y < n.y ? 1 : -1;
    return `L ${a + i * d},${l}Q ${a},${l} ${a},${l + i * h}`;
  }
  const u = e.x < n.x ? 1 : -1, f = e.y < n.y ? -1 : 1;
  return `L ${a},${l + i * f}Q ${a},${l} ${a + i * u},${l}`;
}
function oy({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: o, targetY: i, targetPosition: a = me.Top, borderRadius: l = 5, centerX: u, centerY: f, offset: d = 20, stepPosition: h = 0.5 }) {
  const [p, m, v, E, y] = pD({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: o, y: i },
    targetPosition: a,
    center: { x: u, y: f },
    offset: d,
    stepPosition: h
  });
  return [p.reduce((b, C, _) => {
    let k = "";
    return _ > 0 && _ < p.length - 1 ? k = gD(p[_ - 1], C, p[_ + 1], l) : k = `${_ === 0 ? "M" : "L"}${C.x} ${C.y}`, b += k, b;
  }, ""), m, v, E, y];
}
function N_(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function mD(e) {
  var p;
  const { sourceNode: t, targetNode: n } = e;
  if (!N_(t) || !N_(n))
    return null;
  const o = t.internals.handleBounds || R_(t.handles), i = n.internals.handleBounds || R_(n.handles), a = P_((o == null ? void 0 : o.source) ?? [], e.sourceHandle), l = P_(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === li.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !l)
    return (p = e.onError) == null || p.call(e, "008", In.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const u = (a == null ? void 0 : a.position) || me.Bottom, f = (l == null ? void 0 : l.position) || me.Top, d = Fs(t, a, u), h = Fs(n, l, f);
  return {
    sourceX: d.x,
    sourceY: d.y,
    targetX: h.x,
    targetY: h.y,
    sourcePosition: u,
    targetPosition: f
  };
}
function R_(e) {
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
function Fs(e, t, n = me.Left, o = !1) {
  const i = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: l, height: u } = t ?? Jn(e);
  if (o)
    return { x: i + l / 2, y: a + u / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case me.Top:
      return { x: i + l / 2, y: a };
    case me.Right:
      return { x: i + l, y: a + u / 2 };
    case me.Bottom:
      return { x: i + l / 2, y: a + u };
    case me.Left:
      return { x: i, y: a + u / 2 };
  }
}
function P_(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function iy(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}` : "";
}
function vD(e, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: i }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((l, u) => ([u.markerStart || o, u.markerEnd || i].forEach((f) => {
    if (f && typeof f == "object") {
      const d = iy(f, t);
      a.has(d) || (l.push({ id: d, color: f.color || n, ...f }), a.add(d));
    }
  }), l), []).sort((l, u) => l.id.localeCompare(u.id));
}
const pR = 1e3, yD = 10, Oy = {
  nodeOrigin: [0, 0],
  nodeExtent: js,
  elevateNodesOnSelect: !0,
  defaults: {}
}, xD = {
  ...Oy,
  checkEquality: !0
};
function Ly(e, t) {
  const n = { ...e };
  for (const o in t)
    t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function wD(e, t, n) {
  const o = Ly(Oy, n);
  for (const i of e.values())
    if (i.parentId)
      jy(i, e, t, o);
    else {
      const a = Xs(i, o.nodeOrigin), l = fi(i.extent) ? i.extent : o.nodeExtent, u = lo(a, l, Jn(i));
      i.internals.positionAbsolute = u;
    }
}
function _D(e, t) {
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
  const i = Ly(xD, o);
  let a = { i: -1 }, l = e.length > 0;
  const u = new Map(t), f = i != null && i.elevateNodesOnSelect ? pR : 0;
  t.clear(), n.clear();
  for (const p of e) {
    let m = u.get(p.id);
    if (i.checkEquality && p === (m == null ? void 0 : m.internals.userNode))
      t.set(p.id, m);
    else {
      const v = Xs(p, i.nodeOrigin), E = fi(p.extent) ? p.extent : i.nodeExtent, y = lo(v, E, Jn(p));
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
          handleBounds: _D(p, m),
          z: gR(p, f),
          userNode: p
        }
      }, t.set(p.id, m);
    }
    (m.measured === void 0 || m.measured.width === void 0 || m.measured.height === void 0) && !m.hidden && (l = !1), p.parentId && jy(m, t, n, o, a);
  }
  return l;
}
function bD(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function jy(e, t, n, o, i) {
  const { elevateNodesOnSelect: a, nodeOrigin: l, nodeExtent: u } = Ly(Oy, o), f = e.parentId, d = t.get(f);
  if (!d) {
    console.warn(`Parent node ${f} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  bD(e, n), i && !d.parentId && d.internals.rootParentIndex === void 0 && (d.internals.rootParentIndex = ++i.i, d.internals.z = d.internals.z + i.i * yD), i && d.internals.rootParentIndex !== void 0 && (i.i = d.internals.rootParentIndex);
  const h = a ? pR : 0, { x: p, y: m, z: v } = SD(e, d, l, u, h), { positionAbsolute: E } = e.internals, y = p !== E.x || m !== E.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: p, y: m } : E,
      z: v
    }
  });
}
function gR(e, t) {
  return (hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function SD(e, t, n, o, i) {
  const { x: a, y: l } = t.internals.positionAbsolute, u = Jn(e), f = Xs(e, n), d = fi(e.extent) ? lo(f, e.extent, u) : f;
  let h = lo({ x: a + d.x, y: l + d.y }, o, u);
  e.extent === "parent" && (h = tR(h, u, t));
  const p = gR(e, i), m = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: m >= p ? m + 1 : p
  };
}
function Dy(e, t, n, o = [0, 0]) {
  var l;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = t.get(u.parentId);
    if (!f)
      continue;
    const d = ((l = a.get(u.parentId)) == null ? void 0 : l.expandedRect) ?? ci(f), h = rR(d, u.rect);
    a.set(u.parentId, { expandedRect: h, parent: f });
  }
  return a.size > 0 && a.forEach(({ expandedRect: u, parent: f }, d) => {
    var _;
    const h = f.internals.positionAbsolute, p = Jn(f), m = f.origin ?? o, v = u.x < h.x ? Math.round(Math.abs(h.x - u.x)) : 0, E = u.y < h.y ? Math.round(Math.abs(h.y - u.y)) : 0, y = Math.max(p.width, Math.round(u.width)), w = Math.max(p.height, Math.round(u.height)), b = (y - p.width) * m[0], C = (w - p.height) * m[1];
    (v > 0 || E > 0 || b || C) && (i.push({
      id: d,
      type: "position",
      position: {
        x: f.position.x - v + b,
        y: f.position.y - E + C
      }
    }), (_ = n.get(d)) == null || _.forEach((k) => {
      e.some((P) => P.id === k.id) || i.push({
        id: k.id,
        type: "position",
        position: {
          x: k.position.x + v,
          y: k.position.y + E
        }
      });
    })), (p.width < u.width || p.height < u.height || v || E) && i.push({
      id: d,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (v ? m[0] * v - b : 0),
        height: w + (E ? m[1] * E - C : 0)
      }
    });
  }), i;
}
function ED(e, t, n, o, i, a) {
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
      const b = m.nodeElement.getBoundingClientRect(), C = fi(v.extent) ? v.extent : a;
      let { positionAbsolute: _ } = v.internals;
      v.parentId && v.extent === "parent" ? _ = tR(_, E, t.get(v.parentId)) : C && (_ = lo(_, C, E));
      const k = {
        ...v,
        measured: E,
        internals: {
          ...v.internals,
          positionAbsolute: _,
          handleBounds: {
            source: S_("source", m.nodeElement, b, h, v.id),
            target: S_("target", m.nodeElement, b, h, v.id)
          }
        }
      };
      t.set(v.id, k), v.parentId && jy(k, t, n, { nodeOrigin: i }), u = !0, y && (f.push({
        id: v.id,
        type: "dimensions",
        dimensions: E
      }), v.expandParent && v.parentId && p.push({
        id: v.id,
        parentId: v.parentId,
        rect: ci(k, i)
      }));
    }
  }
  if (p.length > 0) {
    const m = Dy(p, t, n, i);
    f.push(...m);
  }
  return { changes: f, updatedInternals: u };
}
async function CD({ delta: e, panZoom: t, transform: n, translateExtent: o, width: i, height: a }) {
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
function T_(e, t, n, o, i, a) {
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
function mR(e, t, n) {
  e.clear(), t.clear();
  for (const o of n) {
    const { source: i, target: a, sourceHandle: l = null, targetHandle: u = null } = o, f = { edgeId: o.id, source: i, target: a, sourceHandle: l, targetHandle: u }, d = `${i}-${l}--${a}-${u}`, h = `${a}-${u}--${i}-${l}`;
    T_("source", f, h, e, i, l), T_("target", f, d, e, a, u), t.set(o.id, o);
  }
}
function vR(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : vR(n, t) : !1;
}
function A_(e, t, n) {
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
function kD(e, t, n, o) {
  const i = /* @__PURE__ */ new Map();
  for (const [a, l] of e)
    if ((l.selected || l.id === o) && (!l.parentId || !vR(l, e)) && (l.draggable || t && typeof l.draggable > "u")) {
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
function cd({ nodeId: e, dragItems: t, nodeLookup: n, dragging: o = !0 }) {
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
function ND({ dragItems: e, snapGrid: t, x: n, y: o }) {
  const i = e.values().next().value;
  if (!i)
    return null;
  const a = {
    x: n - i.distance.x,
    y: o - i.distance.y
  }, l = Zs(a, t);
  return {
    x: l.x - a.x,
    y: l.y - a.y
  };
}
function RD({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: i }) {
  let a = { x: null, y: null }, l = 0, u = /* @__PURE__ */ new Map(), f = !1, d = { x: 0, y: 0 }, h = null, p = !1, m = null, v = !1, E = !1, y = null;
  function w({ noDragClassName: C, handleSelector: _, domNode: k, isSelectable: P, nodeId: T, nodeClickDistance: I = 0 }) {
    m = Dt(k);
    function L({ x: V, y: H }) {
      const { nodeLookup: O, nodeExtent: W, snapGrid: q, snapToGrid: U, nodeOrigin: M, onNodeDrag: z, onSelectionDrag: Q, onError: j, updateNodePositions: G } = t();
      a = { x: V, y: H };
      let ie = !1;
      const B = u.size > 1, Z = B && W ? ry(Qs(u)) : null, ee = B && U ? ND({
        dragItems: u,
        snapGrid: q,
        x: V,
        y: H
      }) : null;
      for (const [X, te] of u) {
        if (!O.has(X))
          continue;
        let se = { x: V - te.distance.x, y: H - te.distance.y };
        U && (se = ee ? {
          x: Math.round(se.x + ee.x),
          y: Math.round(se.y + ee.y)
        } : Zs(se, q));
        let ae = null;
        if (B && W && !te.extent && Z) {
          const { positionAbsolute: pe } = te.internals, be = pe.x - Z.x + W[0][0], ve = pe.x + te.measured.width - Z.x2 + W[1][0], Re = pe.y - Z.y + W[0][1], Ee = pe.y + te.measured.height - Z.y2 + W[1][1];
          ae = [
            [be, Re],
            [ve, Ee]
          ];
        }
        const { position: ce, positionAbsolute: de } = eR({
          nodeId: X,
          nextPosition: se,
          nodeLookup: O,
          nodeExtent: ae || W,
          nodeOrigin: M,
          onError: j
        });
        ie = ie || te.position.x !== ce.x || te.position.y !== ce.y, te.position = ce, te.internals.positionAbsolute = de;
      }
      if (E = E || ie, !!ie && (G(u, !0), y && (o || z || !T && Q))) {
        const [X, te] = cd({
          nodeId: T,
          dragItems: u,
          nodeLookup: O
        });
        o == null || o(y, u, X, te), z == null || z(y, X, te), T || Q == null || Q(y, te);
      }
    }
    async function D() {
      if (!h)
        return;
      const { transform: V, panBy: H, autoPanSpeed: O, autoPanOnNodeDrag: W } = t();
      if (!W) {
        f = !1, cancelAnimationFrame(l);
        return;
      }
      const [q, U] = nR(d, h, O);
      (q !== 0 || U !== 0) && (a.x = (a.x ?? 0) - q / V[2], a.y = (a.y ?? 0) - U / V[2], await H({ x: q, y: U }) && L(a)), l = requestAnimationFrame(D);
    }
    function Y(V) {
      var B;
      const { nodeLookup: H, multiSelectionActive: O, nodesDraggable: W, transform: q, snapGrid: U, snapToGrid: M, selectNodesOnDrag: z, onNodeDragStart: Q, onSelectionDragStart: j, unselectNodesAndEdges: G } = t();
      p = !0, (!z || !P) && !O && T && ((B = H.get(T)) != null && B.selected || G()), P && z && T && (e == null || e(T));
      const ie = Ts(V.sourceEvent, { transform: q, snapGrid: U, snapToGrid: M, containerBounds: h });
      if (a = ie, u = kD(H, W, ie, T), u.size > 0 && (n || Q || !T && j)) {
        const [Z, ee] = cd({
          nodeId: T,
          dragItems: u,
          nodeLookup: H
        });
        n == null || n(V.sourceEvent, u, Z, ee), Q == null || Q(V.sourceEvent, Z, ee), T || j == null || j(V.sourceEvent, ee);
      }
    }
    const $ = MN().clickDistance(I).on("start", (V) => {
      const { domNode: H, nodeDragThreshold: O, transform: W, snapGrid: q, snapToGrid: U } = t();
      h = (H == null ? void 0 : H.getBoundingClientRect()) || null, v = !1, E = !1, y = V.sourceEvent, O === 0 && Y(V), a = Ts(V.sourceEvent, { transform: W, snapGrid: q, snapToGrid: U, containerBounds: h }), d = pn(V.sourceEvent, h);
    }).on("drag", (V) => {
      const { autoPanOnNodeDrag: H, transform: O, snapGrid: W, snapToGrid: q, nodeDragThreshold: U, nodeLookup: M } = t(), z = Ts(V.sourceEvent, { transform: O, snapGrid: W, snapToGrid: q, containerBounds: h });
      if (y = V.sourceEvent, (V.sourceEvent.type === "touchmove" && V.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !M.has(T)) && (v = !0), !v) {
        if (!f && H && p && (f = !0, D()), !p) {
          const Q = pn(V.sourceEvent, h), j = Q.x - d.x, G = Q.y - d.y;
          Math.sqrt(j * j + G * G) > U && Y(V);
        }
        (a.x !== z.xSnapped || a.y !== z.ySnapped) && u && p && (d = pn(V.sourceEvent, h), L(z));
      }
    }).on("end", (V) => {
      if (!(!p || v) && (f = !1, p = !1, cancelAnimationFrame(l), u.size > 0)) {
        const { nodeLookup: H, updateNodePositions: O, onNodeDragStop: W, onSelectionDragStop: q } = t();
        if (E && (O(u, !1), E = !1), i || W || !T && q) {
          const [U, M] = cd({
            nodeId: T,
            dragItems: u,
            nodeLookup: H,
            dragging: !1
          });
          i == null || i(V.sourceEvent, u, U, M), W == null || W(V.sourceEvent, U, M), T || q == null || q(V.sourceEvent, M);
        }
      }
    }).filter((V) => {
      const H = V.target;
      return !V.button && (!C || !A_(H, `.${C}`, k)) && (!_ || A_(H, _, k));
    });
    m.call($);
  }
  function b() {
    m == null || m.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function PD(e, t, n) {
  const o = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    qs(i, ci(a)) > 0 && o.push(a);
  return o;
}
const TD = 250;
function AD(e, t, n, o) {
  var u, f;
  let i = [], a = 1 / 0;
  const l = PD(e, n, t + TD);
  for (const d of l) {
    const h = [...((u = d.internals.handleBounds) == null ? void 0 : u.source) ?? [], ...((f = d.internals.handleBounds) == null ? void 0 : f.target) ?? []];
    for (const p of h) {
      if (o.nodeId === p.nodeId && o.type === p.type && o.id === p.id)
        continue;
      const { x: m, y: v } = Fs(d, p, p.position, !0), E = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(v - e.y, 2));
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
function yR(e, t, n, o, i, a = !1) {
  var d, h, p;
  const l = o.get(e);
  if (!l)
    return null;
  const u = i === "strict" ? (d = l.internals.handleBounds) == null ? void 0 : d[t] : [...((h = l.internals.handleBounds) == null ? void 0 : h.source) ?? [], ...((p = l.internals.handleBounds) == null ? void 0 : p.target) ?? []], f = (n ? u == null ? void 0 : u.find((m) => m.id === n) : u == null ? void 0 : u[0]) ?? null;
  return f && a ? { ...f, ...Fs(l, f, f.position, !0) } : f;
}
function xR(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function ID(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const wR = () => !0;
function MD(e, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: i, edgeUpdaterType: a, isTarget: l, domNode: u, nodeLookup: f, lib: d, autoPanOnConnect: h, flowId: p, panBy: m, cancelConnection: v, onConnectStart: E, onConnect: y, onConnectEnd: w, isValidConnection: b = wR, onReconnectEnd: C, updateConnection: _, getTransform: k, getFromHandle: P, autoPanSpeed: T, dragThreshold: I = 1, handleDomNode: L }) {
  const D = sR(e.target);
  let Y = 0, $;
  const { x: V, y: H } = pn(e), O = xR(a, L), W = u == null ? void 0 : u.getBoundingClientRect();
  let q = !1;
  if (!W || !O)
    return;
  const U = yR(i, O, o, f, t);
  if (!U)
    return;
  let M = pn(e, W), z = !1, Q = null, j = !1, G = null;
  function ie() {
    if (!h || !W)
      return;
    const [ce, de] = nR(M, W, T);
    m({ x: ce, y: de }), Y = requestAnimationFrame(ie);
  }
  const B = {
    ...U,
    nodeId: i,
    type: O,
    position: U.position
  }, Z = f.get(i);
  let X = {
    inProgress: !0,
    isValid: null,
    from: Fs(Z, B, me.Left, !0),
    fromHandle: B,
    fromPosition: B.position,
    fromNode: Z,
    to: M,
    toHandle: null,
    toPosition: x_[B.position],
    toNode: null,
    pointer: M
  };
  function te() {
    q = !0, _(X), E == null || E(e, { nodeId: i, handleId: o, handleType: O });
  }
  I === 0 && te();
  function se(ce) {
    if (!q) {
      const { x: ve, y: Re } = pn(ce), Ee = ve - V, Je = Re - H;
      if (!(Ee * Ee + Je * Je > I * I))
        return;
      te();
    }
    if (!P() || !B) {
      ae(ce);
      return;
    }
    const de = k();
    M = pn(ce, W), $ = AD(Js(M, de, !1, [1, 1]), n, f, B), z || (ie(), z = !0);
    const pe = _R(ce, {
      handle: $,
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
    G = pe.handleDomNode, Q = pe.connection, j = ID(!!$, pe.isValid);
    const be = {
      // from stays the same
      ...X,
      isValid: j,
      to: pe.toHandle && j ? iu({ x: pe.toHandle.x, y: pe.toHandle.y }, de) : M,
      toHandle: pe.toHandle,
      toPosition: j && pe.toHandle ? pe.toHandle.position : x_[B.position],
      toNode: pe.toHandle ? f.get(pe.toHandle.nodeId) : null,
      pointer: M
    };
    _(be), X = be;
  }
  function ae(ce) {
    if (!("touches" in ce && ce.touches.length > 0)) {
      if (q) {
        ($ || G) && Q && j && (y == null || y(Q));
        const { inProgress: de, ...pe } = X, be = {
          ...pe,
          toPosition: X.toHandle ? X.toPosition : null
        };
        w == null || w(ce, be), a && (C == null || C(ce, be));
      }
      v(), cancelAnimationFrame(Y), z = !1, j = !1, Q = null, G = null, D.removeEventListener("mousemove", se), D.removeEventListener("mouseup", ae), D.removeEventListener("touchmove", se), D.removeEventListener("touchend", ae);
    }
  }
  D.addEventListener("mousemove", se), D.addEventListener("mouseup", ae), D.addEventListener("touchmove", se), D.addEventListener("touchend", ae);
}
function _R(e, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: i, fromType: a, doc: l, lib: u, flowId: f, isValidConnection: d = wR, nodeLookup: h }) {
  const p = a === "target", m = t ? l.querySelector(`.${u}-flow__handle[data-id="${f}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: E } = pn(e), y = l.elementFromPoint(v, E), w = y != null && y.classList.contains(`${u}-flow__handle`) ? y : m, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const C = xR(void 0, w), _ = w.getAttribute("data-nodeid"), k = w.getAttribute("data-handleid"), P = w.classList.contains("connectable"), T = w.classList.contains("connectableend");
    if (!_ || !C)
      return b;
    const I = {
      source: p ? _ : o,
      sourceHandle: p ? k : i,
      target: p ? o : _,
      targetHandle: p ? i : k
    };
    b.connection = I;
    const D = P && T && (n === li.Strict ? p && C === "source" || !p && C === "target" : _ !== o || k !== i);
    b.isValid = D && d(I), b.toHandle = yR(_, C, k, h, n, !0);
  }
  return b;
}
const ay = {
  onPointerDown: MD,
  isValid: _R
};
function OD({ domNode: e, panZoom: t, getTransform: n, getViewScale: o }) {
  const i = Dt(e);
  function a({ translateExtent: u, width: f, height: d, zoomStep: h = 1, pannable: p = !0, zoomable: m = !0, inversePan: v = !1 }) {
    const E = (_) => {
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const k = n(), P = _.sourceEvent.ctrlKey && zs() ? 10 : 1, T = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * h, I = k[2] * Math.pow(2, T * P);
      t.scaleTo(I);
    };
    let y = [0, 0];
    const w = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (y = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, b = (_) => {
      const k = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const P = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], T = [P[0] - y[0], P[1] - y[1]];
      y = P;
      const I = o() * Math.max(k[2], Math.log(k[2])) * (v ? -1 : 1), L = {
        x: k[0] - T[0] * I,
        y: k[1] - T[1] * I
      }, D = [
        [0, 0],
        [f, d]
      ];
      t.setViewportConstrained({
        x: L.x,
        y: L.y,
        zoom: k[2]
      }, D, u);
    }, C = YN().on("start", w).on("zoom", p ? b : null).on("zoom.wheel", m ? E : null);
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
const Cu = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), fd = ({ x: e, y: t, zoom: n }) => bu.translate(e, t).scale(n), ei = (e, t) => e.target.closest(`.${t}`), bR = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), LD = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, dd = (e, t = 0, n = LD, o = () => {
}) => {
  const i = typeof t == "number" && t > 0;
  return i || o(), i ? e.transition().duration(t).ease(n).on("end", o) : e;
}, SR = (e) => {
  const t = e.ctrlKey && zs() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function jD({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: l, onPanZoomStart: u, onPanZoom: f, onPanZoomEnd: d }) {
  return (h) => {
    if (ei(h, t))
      return h.ctrlKey && h.preventDefault(), !1;
    h.preventDefault(), h.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (h.ctrlKey && l) {
      const w = fn(h), b = SR(h), C = p * Math.pow(2, b);
      o.scaleTo(n, C, w, h);
      return;
    }
    const m = h.deltaMode === 1 ? 20 : 1;
    let v = i === oo.Vertical ? 0 : h.deltaX * m, E = i === oo.Horizontal ? 0 : h.deltaY * m;
    !zs() && h.shiftKey && i !== oo.Vertical && (v = h.deltaY * m, E = 0), o.translateBy(
      n,
      -(v / p) * a,
      -(E / p) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Cu(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (f == null || f(h, y), e.panScrollTimeout = setTimeout(() => {
      d == null || d(h, y), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, u == null || u(h, y));
  };
}
function DD({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, i) {
    const a = o.type === "wheel", l = !t && a && !o.ctrlKey, u = ei(o, e);
    if (o.ctrlKey && a && u && o.preventDefault(), l || u)
      return null;
    o.preventDefault(), n.call(this, o, i);
  };
}
function qD({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var a, l, u;
    if ((a = o.sourceEvent) != null && a.internal)
      return;
    const i = Cu(o.transform);
    e.mouseButton = ((l = o.sourceEvent) == null ? void 0 : l.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, ((u = o.sourceEvent) == null ? void 0 : u.type) === "mousedown" && t(!0), n && (n == null || n(o.sourceEvent, i));
  };
}
function zD({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: i }) {
  return (a) => {
    var l, u;
    e.usedRightMouseButton = !!(n && bR(t, e.mouseButton ?? 0)), (l = a.sourceEvent) != null && l.sync || o([a.transform.x, a.transform.y, a.transform.k]), i && !((u = a.sourceEvent) != null && u.internal) && (i == null || i(a.sourceEvent, Cu(a.transform)));
  };
}
function FD({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: i, onPaneContextMenu: a }) {
  return (l) => {
    var u;
    if (!((u = l.sourceEvent) != null && u.internal) && (e.isZoomingOrPanning = !1, a && bR(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && l.sourceEvent && a(l.sourceEvent), e.usedRightMouseButton = !1, o(!1), i)) {
      const f = Cu(l.transform);
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
function $D({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: l, noWheelClassName: u, noPanClassName: f, lib: d, connectionInProgress: h }) {
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
function BD({ domNode: e, minZoom: t, maxZoom: n, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: l, onPanZoomEnd: u, onDraggingChange: f }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, h = e.getBoundingClientRect(), p = YN().scaleExtent([t, n]).translateExtent(o), m = Dt(e).call(p);
  C({
    x: i.x,
    y: i.y,
    zoom: ui(i.zoom, t, n)
  }, [
    [0, 0],
    [h.width, h.height]
  ], o);
  const v = m.on("wheel.zoom"), E = m.on("dblclick.zoom");
  p.wheelDelta(SR);
  function y($, V) {
    return m ? new Promise((H) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? Ps : Vl).transform(dd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => H(!0)), $);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: $, noPanClassName: V, onPaneContextMenu: H, userSelectionActive: O, panOnScroll: W, panOnDrag: q, panOnScrollMode: U, panOnScrollSpeed: M, preventScrolling: z, zoomOnPinch: Q, zoomOnScroll: j, zoomOnDoubleClick: G, zoomActivationKeyPressed: ie, lib: B, onTransformChange: Z, connectionInProgress: ee, paneClickDistance: X, selectionOnDrag: te }) {
    O && !d.isZoomingOrPanning && b();
    const se = W && !ie && !O;
    p.clickDistance(te ? 1 / 0 : !hn(X) || X < 0 ? 0 : X);
    const ae = se ? jD({
      zoomPanValues: d,
      noWheelClassName: $,
      d3Selection: m,
      d3Zoom: p,
      panOnScrollMode: U,
      panOnScrollSpeed: M,
      zoomOnPinch: Q,
      onPanZoomStart: l,
      onPanZoom: a,
      onPanZoomEnd: u
    }) : DD({
      noWheelClassName: $,
      preventScrolling: z,
      d3ZoomHandler: v
    });
    if (m.on("wheel.zoom", ae, { passive: !1 }), !O) {
      const de = qD({
        zoomPanValues: d,
        onDraggingChange: f,
        onPanZoomStart: l
      });
      p.on("start", de);
      const pe = zD({
        zoomPanValues: d,
        panOnDrag: q,
        onPaneContextMenu: !!H,
        onPanZoom: a,
        onTransformChange: Z
      });
      p.on("zoom", pe);
      const be = FD({
        zoomPanValues: d,
        panOnDrag: q,
        panOnScroll: W,
        onPaneContextMenu: H,
        onPanZoomEnd: u,
        onDraggingChange: f
      });
      p.on("end", be);
    }
    const ce = $D({
      zoomActivationKeyPressed: ie,
      panOnDrag: q,
      zoomOnScroll: j,
      panOnScroll: W,
      zoomOnDoubleClick: G,
      zoomOnPinch: Q,
      userSelectionActive: O,
      noPanClassName: V,
      noWheelClassName: $,
      lib: B,
      connectionInProgress: ee
    });
    p.filter(ce), G ? m.on("dblclick.zoom", E) : m.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function C($, V, H) {
    const O = fd($), W = p == null ? void 0 : p.constrain()(O, V, H);
    return W && await y(W), new Promise((q) => q(W));
  }
  async function _($, V) {
    const H = fd($);
    return await y(H, V), new Promise((O) => O(H));
  }
  function k($) {
    if (m) {
      const V = fd($), H = m.property("__zoom");
      (H.k !== $.zoom || H.x !== $.x || H.y !== $.y) && (p == null || p.transform(m, V, null, { sync: !0 }));
    }
  }
  function P() {
    const $ = m ? GN(m.node()) : { x: 0, y: 0, k: 1 };
    return { x: $.x, y: $.y, zoom: $.k };
  }
  function T($, V) {
    return m ? new Promise((H) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? Ps : Vl).scaleTo(dd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => H(!0)), $);
    }) : Promise.resolve(!1);
  }
  function I($, V) {
    return m ? new Promise((H) => {
      p == null || p.interpolate((V == null ? void 0 : V.interpolate) === "linear" ? Ps : Vl).scaleBy(dd(m, V == null ? void 0 : V.duration, V == null ? void 0 : V.ease, () => H(!0)), $);
    }) : Promise.resolve(!1);
  }
  function L($) {
    p == null || p.scaleExtent($);
  }
  function D($) {
    p == null || p.translateExtent($);
  }
  function Y($) {
    const V = !hn($) || $ < 0 ? 0 : $;
    p == null || p.clickDistance(V);
  }
  return {
    update: w,
    destroy: b,
    setViewport: _,
    setViewportConstrained: C,
    getViewport: P,
    scaleTo: T,
    scaleBy: I,
    setScaleExtent: L,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: Y
  };
}
var di;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(di || (di = {}));
function VD({ width: e, prevWidth: t, height: n, prevHeight: o, affectsX: i, affectsY: a }) {
  const l = e - t, u = n - o, f = [l > 0 ? 1 : l < 0 ? -1 : 0, u > 0 ? 1 : u < 0 ? -1 : 0];
  return l && i && (f[0] = f[0] * -1), u && a && (f[1] = f[1] * -1), f;
}
function I_(e) {
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
function M_(e, t) {
  return e ? !t : t;
}
function HD(e, t, n, o, i, a, l, u) {
  let { affectsX: f, affectsY: d } = t;
  const { isHorizontal: h, isVertical: p } = t, m = h && p, { xSnapped: v, ySnapped: E } = n, { minWidth: y, maxWidth: w, minHeight: b, maxHeight: C } = o, { x: _, y: k, width: P, height: T, aspectRatio: I } = e;
  let L = Math.floor(h ? v - e.pointerX : 0), D = Math.floor(p ? E - e.pointerY : 0);
  const Y = P + (f ? -L : L), $ = T + (d ? -D : D), V = -a[0] * P, H = -a[1] * T;
  let O = Al(Y, y, w), W = Al($, b, C);
  if (l) {
    let M = 0, z = 0;
    f && L < 0 ? M = Er(_ + L + V, l[0][0]) : !f && L > 0 && (M = Cr(_ + Y + V, l[1][0])), d && D < 0 ? z = Er(k + D + H, l[0][1]) : !d && D > 0 && (z = Cr(k + $ + H, l[1][1])), O = Math.max(O, M), W = Math.max(W, z);
  }
  if (u) {
    let M = 0, z = 0;
    f && L > 0 ? M = Cr(_ + L, u[0][0]) : !f && L < 0 && (M = Er(_ + Y, u[1][0])), d && D > 0 ? z = Cr(k + D, u[0][1]) : !d && D < 0 && (z = Er(k + $, u[1][1])), O = Math.max(O, M), W = Math.max(W, z);
  }
  if (i) {
    if (h) {
      const M = Al(Y / I, b, C) * I;
      if (O = Math.max(O, M), l) {
        let z = 0;
        !f && !d || f && !d && m ? z = Cr(k + H + Y / I, l[1][1]) * I : z = Er(k + H + (f ? L : -L) / I, l[0][1]) * I, O = Math.max(O, z);
      }
      if (u) {
        let z = 0;
        !f && !d || f && !d && m ? z = Er(k + Y / I, u[1][1]) * I : z = Cr(k + (f ? L : -L) / I, u[0][1]) * I, O = Math.max(O, z);
      }
    }
    if (p) {
      const M = Al($ * I, y, w) / I;
      if (W = Math.max(W, M), l) {
        let z = 0;
        !f && !d || d && !f && m ? z = Cr(_ + $ * I + V, l[1][0]) / I : z = Er(_ + (d ? D : -D) * I + V, l[0][0]) / I, W = Math.max(W, z);
      }
      if (u) {
        let z = 0;
        !f && !d || d && !f && m ? z = Er(_ + $ * I, u[1][0]) / I : z = Cr(_ + (d ? D : -D) * I, u[0][0]) / I, W = Math.max(W, z);
      }
    }
  }
  D = D + (D < 0 ? W : -W), L = L + (L < 0 ? O : -O), i && (m ? Y > $ * I ? D = (M_(f, d) ? -L : L) / I : L = (M_(f, d) ? -D : D) * I : h ? (D = L / I, d = f) : (L = D * I, f = d));
  const q = f ? _ + L : _, U = d ? k + D : k;
  return {
    width: P + (f ? -L : L),
    height: T + (d ? -D : D),
    x: a[0] * L * (f ? -1 : 1) + q,
    y: a[1] * D * (d ? -1 : 1) + U
  };
}
const ER = { width: 0, height: 0, x: 0, y: 0 }, WD = {
  ...ER,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function UD(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function GD(e, t, n) {
  const o = t.position.x + e.position.x, i = t.position.y + e.position.y, a = e.measured.width ?? 0, l = e.measured.height ?? 0, u = n[0] * a, f = n[1] * l;
  return [
    [o - u, i - f],
    [o + a - u, i + l - f]
  ];
}
function YD({ domNode: e, nodeId: t, getStoreItems: n, onChange: o, onEnd: i }) {
  const a = Dt(e);
  let l = {
    controlDirection: I_("bottom-right"),
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
    let b = { ...ER }, C = { ...WD };
    l = {
      boundaries: h,
      resizeDirection: m,
      keepAspectRatio: p,
      controlDirection: I_(d)
    };
    let _, k = null, P = [], T, I, L, D = !1;
    const Y = MN().on("start", ($) => {
      const { nodeLookup: V, transform: H, snapGrid: O, snapToGrid: W, nodeOrigin: q, paneDomNode: U } = n();
      if (_ = V.get(t), !_)
        return;
      k = (U == null ? void 0 : U.getBoundingClientRect()) ?? null;
      const { xSnapped: M, ySnapped: z } = Ts($.sourceEvent, {
        transform: H,
        snapGrid: O,
        snapToGrid: W,
        containerBounds: k
      });
      b = {
        width: _.measured.width ?? 0,
        height: _.measured.height ?? 0,
        x: _.position.x ?? 0,
        y: _.position.y ?? 0
      }, C = {
        ...b,
        pointerX: M,
        pointerY: z,
        aspectRatio: b.width / b.height
      }, T = void 0, _.parentId && (_.extent === "parent" || _.expandParent) && (T = V.get(_.parentId), I = T && _.extent === "parent" ? UD(T) : void 0), P = [], L = void 0;
      for (const [Q, j] of V)
        if (j.parentId === t && (P.push({
          id: Q,
          position: { ...j.position },
          extent: j.extent
        }), j.extent === "parent" || j.expandParent)) {
          const G = GD(j, _, j.origin ?? q);
          L ? L = [
            [Math.min(G[0][0], L[0][0]), Math.min(G[0][1], L[0][1])],
            [Math.max(G[1][0], L[1][0]), Math.max(G[1][1], L[1][1])]
          ] : L = G;
        }
      v == null || v($, { ...b });
    }).on("drag", ($) => {
      const { transform: V, snapGrid: H, snapToGrid: O, nodeOrigin: W } = n(), q = Ts($.sourceEvent, {
        transform: V,
        snapGrid: H,
        snapToGrid: O,
        containerBounds: k
      }), U = [];
      if (!_)
        return;
      const { x: M, y: z, width: Q, height: j } = b, G = {}, ie = _.origin ?? W, { width: B, height: Z, x: ee, y: X } = HD(C, l.controlDirection, q, l.boundaries, l.keepAspectRatio, ie, I, L), te = B !== Q, se = Z !== j, ae = ee !== M && te, ce = X !== z && se;
      if (!ae && !ce && !te && !se)
        return;
      if ((ae || ce || ie[0] === 1 || ie[1] === 1) && (G.x = ae ? ee : b.x, G.y = ce ? X : b.y, b.x = G.x, b.y = G.y, P.length > 0)) {
        const ve = ee - M, Re = X - z;
        for (const Ee of P)
          Ee.position = {
            x: Ee.position.x - ve + ie[0] * (B - Q),
            y: Ee.position.y - Re + ie[1] * (Z - j)
          }, U.push(Ee);
      }
      if ((te || se) && (G.width = te && (!l.resizeDirection || l.resizeDirection === "horizontal") ? B : b.width, G.height = se && (!l.resizeDirection || l.resizeDirection === "vertical") ? Z : b.height, b.width = G.width, b.height = G.height), T && _.expandParent) {
        const ve = ie[0] * (G.width ?? 0);
        G.x && G.x < ve && (b.x = ve, C.x = C.x - (G.x - ve));
        const Re = ie[1] * (G.height ?? 0);
        G.y && G.y < Re && (b.y = Re, C.y = C.y - (G.y - Re));
      }
      const de = VD({
        width: b.width,
        prevWidth: Q,
        height: b.height,
        prevHeight: j,
        affectsX: l.controlDirection.affectsX,
        affectsY: l.controlDirection.affectsY
      }), pe = { ...b, direction: de };
      (w == null ? void 0 : w($, pe)) !== !1 && (D = !0, E == null || E($, pe), o(G, U));
    }).on("end", ($) => {
      D && (y == null || y($, { ...b }), i == null || i({ ...b }), D = !1);
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
var hd = { exports: {} }, pd = {}, gd = { exports: {} }, md = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O_;
function KD() {
  if (O_) return md;
  O_ = 1;
  var e = Gs();
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
  return md.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, md;
}
var L_;
function XD() {
  return L_ || (L_ = 1, gd.exports = KD()), gd.exports;
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
var j_;
function QD() {
  if (j_) return pd;
  j_ = 1;
  var e = Gs(), t = XD();
  function n(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, a = e.useRef, l = e.useEffect, u = e.useMemo, f = e.useDebugValue;
  return pd.useSyncExternalStoreWithSelector = function(d, h, p, m, v) {
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
              var I = y.value;
              if (v(I, T))
                return k = I;
            }
            return k = T;
          }
          if (I = k, o(_, T)) return I;
          var L = m(T);
          return v !== void 0 && v(I, L) ? (_ = T, I) : (_ = T, k = L);
        }
        var C = !1, _, k, P = p === void 0 ? null : p;
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
    var w = i(d, E[0], E[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = w;
      },
      [w]
    ), f(w), w;
  }, pd;
}
var D_;
function ZD() {
  return D_ || (D_ = 1, hd.exports = QD()), hd.exports;
}
var JD = ZD();
const eq = /* @__PURE__ */ vu(JD), tq = {}, q_ = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (h, p) => {
    const m = typeof h == "function" ? h(t) : h;
    if (!Object.is(m, t)) {
      const v = t;
      t = p ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), n.forEach((E) => E(t, v));
    }
  }, i = () => t, f = { setState: o, getState: i, getInitialState: () => d, subscribe: (h) => (n.add(h), () => n.delete(h)), destroy: () => {
    (tq ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, d = t = e(o, i, f);
  return f;
}, nq = (e) => e ? q_(e) : q_, { useDebugValue: rq } = Zt, { useSyncExternalStoreWithSelector: oq } = eq, iq = (e) => e;
function CR(e, t = iq, n) {
  const o = oq(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return rq(o), o;
}
const z_ = (e, t) => {
  const n = nq(e), o = (i, a = t) => CR(n, i, a);
  return Object.assign(o, n), o;
}, sq = (e, t) => e ? z_(e, t) : z_;
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
var ea = vN();
const aq = /* @__PURE__ */ vu(ea), ku = N.createContext(null), lq = ku.Provider, kR = In.error001();
function Me(e, t) {
  const n = N.useContext(ku);
  if (n === null)
    throw new Error(kR);
  return CR(n, e, t);
}
function He() {
  const e = N.useContext(ku);
  if (e === null)
    throw new Error(kR);
  return N.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const F_ = { display: "none" }, uq = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, NR = "react-flow__node-desc", RR = "react-flow__edge-desc", cq = "react-flow__aria-live", fq = (e) => e.ariaLiveMessage, dq = (e) => e.ariaLabelConfig;
function hq({ rfId: e }) {
  const t = Me(fq);
  return R.jsx("div", { id: `${cq}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: uq, children: t });
}
function pq({ rfId: e, disableKeyboardA11y: t }) {
  const n = Me(dq);
  return R.jsxs(R.Fragment, { children: [R.jsx("div", { id: `${NR}-${e}`, style: F_, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), R.jsx("div", { id: `${RR}-${e}`, style: F_, children: n["edge.a11yDescription.default"] }), !t && R.jsx(hq, { rfId: e })] });
}
const ta = N.forwardRef(({ position: e = "top-left", children: t, className: n, style: o, ...i }, a) => {
  const l = `${e}`.split("-");
  return R.jsx("div", { className: nt(["react-flow__panel", n, ...l]), style: o, ref: a, ...i, children: t });
});
ta.displayName = "Panel";
function gq({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : R.jsx(ta, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: R.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const mq = (e) => {
  const t = [], n = [];
  for (const [, o] of e.nodeLookup)
    o.selected && t.push(o.internals.userNode);
  for (const [, o] of e.edgeLookup)
    o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, Il = (e) => e.id;
function vq(e, t) {
  return Qe(e.selectedNodes.map(Il), t.selectedNodes.map(Il)) && Qe(e.selectedEdges.map(Il), t.selectedEdges.map(Il));
}
function yq({ onSelectionChange: e }) {
  const t = He(), { selectedNodes: n, selectedEdges: o } = Me(mq, vq);
  return N.useEffect(() => {
    const i = { nodes: n, edges: o };
    e == null || e(i), t.getState().onSelectionChangeHandlers.forEach((a) => a(i));
  }, [n, o, e]), null;
}
const xq = (e) => !!e.onSelectionChangeHandlers;
function wq({ onSelectionChange: e }) {
  const t = Me(xq);
  return e || t ? R.jsx(yq, { onSelectionChange: e }) : null;
}
const PR = [0, 0], _q = { x: 0, y: 0, zoom: 1 }, bq = [
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
], $_ = [...bq, "rfId"], Sq = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges
}), B_ = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: js,
  nodeOrigin: PR,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1"
};
function Eq(e) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: i, setTranslateExtent: a, setNodeExtent: l, reset: u, setDefaultNodesAndEdges: f } = Me(Sq, Qe), d = He();
  N.useEffect(() => (f(e.defaultNodes, e.defaultEdges), () => {
    h.current = B_, u();
  }), []);
  const h = N.useRef(B_);
  return N.useEffect(
    () => {
      for (const p of $_) {
        const m = e[p], v = h.current[p];
        m !== v && (typeof e[p] > "u" || (p === "nodes" ? t(m) : p === "edges" ? n(m) : p === "minZoom" ? o(m) : p === "maxZoom" ? i(m) : p === "translateExtent" ? a(m) : p === "nodeExtent" ? l(m) : p === "ariaLabelConfig" ? d.setState({ ariaLabelConfig: aD(m) }) : p === "fitView" ? d.setState({ fitViewQueued: m }) : p === "fitViewOptions" ? d.setState({ fitViewOptions: m }) : d.setState({ [p]: m })));
      }
      h.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    $_.map((p) => e[p])
  ), null;
}
function V_() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Cq(e) {
  var o;
  const [t, n] = N.useState(e === "system" ? null : e);
  return N.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const i = V_(), a = () => n(i != null && i.matches ? "dark" : "light");
    return a(), i == null || i.addEventListener("change", a), () => {
      i == null || i.removeEventListener("change", a);
    };
  }, [e]), t !== null ? t : (o = V_()) != null && o.matches ? "dark" : "light";
}
const H_ = typeof document < "u" ? document : null;
function $s(e = null, t = { target: H_, actInsideInputWithModifier: !0 }) {
  const [n, o] = N.useState(!1), i = N.useRef(!1), a = N.useRef(/* @__PURE__ */ new Set([])), [l, u] = N.useMemo(() => {
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
    const f = (t == null ? void 0 : t.target) ?? H_, d = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
    if (e !== null) {
      const h = (v) => {
        var w, b;
        if (i.current = v.ctrlKey || v.metaKey || v.shiftKey || v.altKey, (!i.current || i.current && !d) && aR(v))
          return !1;
        const y = U_(v.code, u);
        if (a.current.add(v[y]), W_(l, a.current, !1)) {
          const C = ((b = (w = v.composedPath) == null ? void 0 : w.call(v)) == null ? void 0 : b[0]) || v.target, _ = (C == null ? void 0 : C.nodeName) === "BUTTON" || (C == null ? void 0 : C.nodeName) === "A";
          t.preventDefault !== !1 && (i.current || !_) && v.preventDefault(), o(!0);
        }
      }, p = (v) => {
        const E = U_(v.code, u);
        W_(l, a.current, !0) ? (o(!1), a.current.clear()) : a.current.delete(v[E]), v.key === "Meta" && a.current.clear(), i.current = !1;
      }, m = () => {
        a.current.clear(), o(!1);
      };
      return f == null || f.addEventListener("keydown", h), f == null || f.addEventListener("keyup", p), window.addEventListener("blur", m), window.addEventListener("contextmenu", m), () => {
        f == null || f.removeEventListener("keydown", h), f == null || f.removeEventListener("keyup", p), window.removeEventListener("blur", m), window.removeEventListener("contextmenu", m);
      };
    }
  }, [e, o]), n;
}
function W_(e, t, n) {
  return e.filter((o) => n || o.length === t.size).some((o) => o.every((i) => t.has(i)));
}
function U_(e, t) {
  return t.includes(e) ? "code" : "key";
}
const kq = () => {
  const e = He();
  return N.useMemo(() => ({
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
      return Js(d, o, p, h);
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
function TR(e, t) {
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
      Nq(f, u);
    n.push(u);
  }
  return i.length && i.forEach((a) => {
    a.index !== void 0 ? n.splice(a.index, 0, { ...a.item }) : n.push({ ...a.item });
  }), n;
}
function Nq(e, t) {
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
function AR(e, t) {
  return TR(e, t);
}
function IR(e, t) {
  return TR(e, t);
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
function G_({ items: e = [], lookup: t }) {
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
function Y_(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const K_ = (e) => Qj(e), Rq = (e) => JN(e);
function MR(e) {
  return N.forwardRef(e);
}
const Pq = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function X_(e) {
  const [t, n] = N.useState(BigInt(0)), [o] = N.useState(() => Tq(() => n((i) => i + BigInt(1))));
  return Pq(() => {
    const i = o.get();
    i.length && (e(i), o.reset());
  }, [t]), o;
}
function Tq(e) {
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
const OR = N.createContext(null);
function Aq({ children: e }) {
  const t = He(), n = N.useCallback((u) => {
    const { nodes: f = [], setNodes: d, hasDefaultNodes: h, onNodesChange: p, nodeLookup: m, fitViewQueued: v } = t.getState();
    let E = f;
    for (const w of u)
      E = typeof w == "function" ? w(E) : w;
    const y = G_({
      items: E,
      lookup: m
    });
    h && d(E), y.length > 0 ? p == null || p(y) : v && window.requestAnimationFrame(() => {
      const { fitViewQueued: w, nodes: b, setNodes: C } = t.getState();
      w && C(b);
    });
  }, []), o = X_(n), i = N.useCallback((u) => {
    const { edges: f = [], setEdges: d, hasDefaultEdges: h, onEdgesChange: p, edgeLookup: m } = t.getState();
    let v = f;
    for (const E of u)
      v = typeof E == "function" ? E(v) : E;
    h ? d(v) : p && p(G_({
      items: v,
      lookup: m
    }));
  }, []), a = X_(i), l = N.useMemo(() => ({ nodeQueue: o, edgeQueue: a }), []);
  return R.jsx(OR.Provider, { value: l, children: e });
}
function Iq() {
  const e = N.useContext(OR);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const Mq = (e) => !!e.panZoom;
function qy() {
  const e = kq(), t = He(), n = Iq(), o = Me(Mq), i = N.useMemo(() => {
    const a = (p) => t.getState().nodeLookup.get(p), l = (p) => {
      n.nodeQueue.push(p);
    }, u = (p) => {
      n.edgeQueue.push(p);
    }, f = (p) => {
      var b, C;
      const { nodeLookup: m, nodeOrigin: v } = t.getState(), E = K_(p) ? p : m.get(p.id), y = E.parentId ? iR(E.position, E.measured, E.parentId, m, v) : E.position, w = {
        ...E,
        position: y,
        width: ((b = E.measured) == null ? void 0 : b.width) ?? E.width,
        height: ((C = E.measured) == null ? void 0 : C.height) ?? E.height
      };
      return ci(w);
    }, d = (p, m, v = { replace: !1 }) => {
      l((E) => E.map((y) => {
        if (y.id === p) {
          const w = typeof m == "function" ? m(y) : m;
          return v.replace && K_(w) ? w : { ...y, ...w };
        }
        return y;
      }));
    }, h = (p, m, v = { replace: !1 }) => {
      u((E) => E.map((y) => {
        if (y.id === p) {
          const w = typeof m == "function" ? m(y) : m;
          return v.replace && Rq(w) ? w : { ...y, ...w };
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
          nodes: p.map((b) => ({ ...b })),
          edges: m.map((b) => ({ ...b })),
          viewport: {
            x: E,
            y,
            zoom: w
          }
        };
      },
      deleteElements: async ({ nodes: p = [], edges: m = [] }) => {
        const { nodes: v, edges: E, onNodesDelete: y, onEdgesDelete: w, triggerNodeChanges: b, triggerEdgeChanges: C, onDelete: _, onBeforeDelete: k } = t.getState(), { nodes: P, edges: T } = await nD({
          nodesToRemove: p,
          edgesToRemove: m,
          nodes: v,
          edges: E,
          onBeforeDelete: k
        }), I = T.length > 0, L = P.length > 0;
        if (I) {
          const D = T.map(Y_);
          w == null || w(T), C(D);
        }
        if (L) {
          const D = P.map(Y_);
          y == null || y(P), b(D);
        }
        return (L || I) && (_ == null || _({ nodes: P, edges: T })), { deletedNodes: P, deletedEdges: T };
      },
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: (p, m = !0, v) => {
        const E = __(p), y = E ? p : f(p), w = v !== void 0;
        return y ? (v || t.getState().nodes).filter((b) => {
          const C = t.getState().nodeLookup.get(b.id);
          if (C && !E && (b.id === p.id || !C.internals.positionAbsolute))
            return !1;
          const _ = ci(w ? b : C), k = qs(_, y);
          return m && k > 0 || k >= _.width * _.height || k >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (p, m, v = !0) => {
        const y = __(p) ? p : f(p);
        if (!y)
          return !1;
        const w = qs(y, m);
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
        return Zj(p, { nodeLookup: m, nodeOrigin: v });
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
        const m = t.getState().fitViewResolver ?? sD();
        return t.setState({ fitViewQueued: !0, fitViewOptions: p, fitViewResolver: m }), n.nodeQueue.push((v) => [...v]), m.promise;
      }
    };
  }, []);
  return N.useMemo(() => ({
    ...i,
    ...e,
    viewportInitialized: o
  }), [o]);
}
const Q_ = (e) => e.selected, Oq = typeof window < "u" ? window : void 0;
function Lq({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = He(), { deleteElements: o } = qy(), i = $s(e, { actInsideInputWithModifier: !1 }), a = $s(t, { target: Oq });
  N.useEffect(() => {
    if (i) {
      const { edges: l, nodes: u } = n.getState();
      o({ nodes: u.filter(Q_), edges: l.filter(Q_) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), N.useEffect(() => {
    n.setState({ multiSelectionActive: a });
  }, [a]);
}
function jq(e) {
  const t = He();
  N.useEffect(() => {
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
const Nu = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, Dq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib,
  connectionInProgress: e.connection.inProgress
});
function qq({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: o = !1, panOnScrollSpeed: i = 0.5, panOnScrollMode: a = oo.Free, zoomOnDoubleClick: l = !0, panOnDrag: u = !0, defaultViewport: f, translateExtent: d, minZoom: h, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: v = !0, children: E, noWheelClassName: y, noPanClassName: w, onViewportChange: b, isControlledViewport: C, paneClickDistance: _, selectionOnDrag: k }) {
  const P = He(), T = N.useRef(null), { userSelectionActive: I, lib: L, connectionInProgress: D } = Me(Dq, Qe), Y = $s(m), $ = N.useRef();
  jq(T);
  const V = N.useCallback((H) => {
    b == null || b({ x: H[0], y: H[1], zoom: H[2] }), C || P.setState({ transform: H });
  }, [b, C]);
  return N.useEffect(() => {
    if (T.current) {
      $.current = BD({
        domNode: T.current,
        minZoom: h,
        maxZoom: p,
        translateExtent: d,
        viewport: f,
        onDraggingChange: (q) => P.setState({ paneDragging: q }),
        onPanZoomStart: (q, U) => {
          const { onViewportChangeStart: M, onMoveStart: z } = P.getState();
          z == null || z(q, U), M == null || M(U);
        },
        onPanZoom: (q, U) => {
          const { onViewportChange: M, onMove: z } = P.getState();
          z == null || z(q, U), M == null || M(U);
        },
        onPanZoomEnd: (q, U) => {
          const { onViewportChangeEnd: M, onMoveEnd: z } = P.getState();
          z == null || z(q, U), M == null || M(U);
        }
      });
      const { x: H, y: O, zoom: W } = $.current.getViewport();
      return P.setState({
        panZoom: $.current,
        transform: [H, O, W],
        domNode: T.current.closest(".react-flow")
      }), () => {
        var q;
        (q = $.current) == null || q.destroy();
      };
    }
  }, []), N.useEffect(() => {
    var H;
    (H = $.current) == null || H.update({
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
      noPanClassName: w,
      userSelectionActive: I,
      noWheelClassName: y,
      lib: L,
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
    i,
    a,
    l,
    u,
    Y,
    v,
    w,
    I,
    y,
    L,
    V,
    D,
    k,
    _
  ]), R.jsx("div", { className: "react-flow__renderer", ref: T, style: Nu, children: E });
}
const zq = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function Fq() {
  const { userSelectionActive: e, userSelectionRect: t } = Me(zq, Qe);
  return e && t ? R.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const vd = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, $q = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function Bq({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Ds.Full, panOnDrag: o, paneClickDistance: i, selectionOnDrag: a, onSelectionStart: l, onSelectionEnd: u, onPaneClick: f, onPaneContextMenu: d, onPaneScroll: h, onPaneMouseEnter: p, onPaneMouseMove: m, onPaneMouseLeave: v, children: E }) {
  const y = He(), { userSelectionActive: w, elementsSelectable: b, dragging: C, connectionInProgress: _ } = Me($q, Qe), k = b && (e || w), P = N.useRef(null), T = N.useRef(), I = N.useRef(/* @__PURE__ */ new Set()), L = N.useRef(/* @__PURE__ */ new Set()), D = N.useRef(!1), Y = (M) => {
    if (D.current || _) {
      D.current = !1;
      return;
    }
    f == null || f(M), y.getState().resetSelectedElements(), y.setState({ nodesSelectionActive: !1 });
  }, $ = (M) => {
    if (Array.isArray(o) && (o != null && o.includes(2))) {
      M.preventDefault();
      return;
    }
    d == null || d(M);
  }, V = h ? (M) => h(M) : void 0, H = (M) => {
    D.current && (M.stopPropagation(), D.current = !1);
  }, O = (M) => {
    var Z, ee;
    const { domNode: z } = y.getState();
    if (T.current = z == null ? void 0 : z.getBoundingClientRect(), !T.current)
      return;
    const Q = M.target === P.current;
    if (!Q && !!M.target.closest(".nokey") || !e || !(a && Q || t) || M.button !== 0 || !M.isPrimary)
      return;
    (ee = (Z = M.target) == null ? void 0 : Z.setPointerCapture) == null || ee.call(Z, M.pointerId), D.current = !1;
    const { x: ie, y: B } = pn(M.nativeEvent, T.current);
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
  }, W = (M) => {
    const { userSelectionRect: z, transform: Q, nodeLookup: j, edgeLookup: G, connectionLookup: ie, triggerNodeChanges: B, triggerEdgeChanges: Z, defaultEdgeOptions: ee, resetSelectedElements: X } = y.getState();
    if (!T.current || !z)
      return;
    const { x: te, y: se } = pn(M.nativeEvent, T.current), { startX: ae, startY: ce } = z;
    if (!D.current) {
      const Re = t ? 0 : i;
      if (Math.hypot(te - ae, se - ce) <= Re)
        return;
      X(), l == null || l(M);
    }
    D.current = !0;
    const de = {
      startX: ae,
      startY: ce,
      x: te < ae ? te : ae,
      y: se < ce ? se : ce,
      width: Math.abs(te - ae),
      height: Math.abs(se - ce)
    }, pe = I.current, be = L.current;
    I.current = new Set(Ay(j, de, Q, n === Ds.Partial, !0).map((Re) => Re.id)), L.current = /* @__PURE__ */ new Set();
    const ve = (ee == null ? void 0 : ee.selectable) ?? !0;
    for (const Re of I.current) {
      const Ee = ie.get(Re);
      if (Ee)
        for (const { edgeId: Je } of Ee.values()) {
          const Ue = G.get(Je);
          Ue && (Ue.selectable ?? ve) && L.current.add(Je);
        }
    }
    if (!b_(pe, I.current)) {
      const Re = ti(j, I.current, !0);
      B(Re);
    }
    if (!b_(be, L.current)) {
      const Re = ti(G, L.current);
      Z(Re);
    }
    y.setState({
      userSelectionRect: de,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, q = (M) => {
    var z, Q;
    M.button === 0 && ((Q = (z = M.target) == null ? void 0 : z.releasePointerCapture) == null || Q.call(z, M.pointerId), !w && M.target === P.current && y.getState().userSelectionRect && (Y == null || Y(M)), y.setState({
      userSelectionActive: !1,
      userSelectionRect: null
    }), D.current && (u == null || u(M), y.setState({
      nodesSelectionActive: I.current.size > 0
    })));
  }, U = o === !0 || Array.isArray(o) && o.includes(0);
  return R.jsxs("div", { className: nt(["react-flow__pane", { draggable: U, dragging: C, selection: e }]), onClick: k ? void 0 : vd(Y, P), onContextMenu: vd($, P), onWheel: vd(V, P), onPointerEnter: k ? void 0 : p, onPointerMove: k ? W : m, onPointerUp: k ? q : void 0, onPointerDownCapture: k ? O : void 0, onClickCapture: k ? H : void 0, onPointerLeave: v, ref: P, style: Nu, children: [E, R.jsx(Fq, {})] });
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
function LR({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: o, nodeId: i, isSelectable: a, nodeClickDistance: l }) {
  const u = He(), [f, d] = N.useState(!1), h = N.useRef();
  return N.useEffect(() => {
    h.current = RD({
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
  }, []), N.useEffect(() => {
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
const Vq = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function jR() {
  const e = He();
  return N.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: i, snapGrid: a, nodesDraggable: l, onError: u, updateNodePositions: f, nodeLookup: d, nodeOrigin: h } = e.getState(), p = /* @__PURE__ */ new Map(), m = Vq(l), v = i ? a[0] : 5, E = i ? a[1] : 5, y = n.direction.x * v * n.factor, w = n.direction.y * E * n.factor;
    for (const [, b] of d) {
      if (!m(b))
        continue;
      let C = {
        x: b.internals.positionAbsolute.x + y,
        y: b.internals.positionAbsolute.y + w
      };
      i && (C = Zs(C, a));
      const { position: _, positionAbsolute: k } = eR({
        nodeId: b.id,
        nextPosition: C,
        nodeLookup: d,
        nodeExtent: o,
        nodeOrigin: h,
        onError: u
      });
      b.position = _, b.internals.positionAbsolute = k, p.set(b.id, b);
    }
    f(p);
  }, []);
}
const zy = N.createContext(null), Hq = zy.Provider;
zy.Consumer;
const DR = () => N.useContext(zy), Wq = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), Uq = (e, t, n) => (o) => {
  const { connectionClickStartHandle: i, connectionMode: a, connection: l } = o, { fromHandle: u, toHandle: f, isValid: d } = l, h = (f == null ? void 0 : f.nodeId) === e && (f == null ? void 0 : f.id) === t && (f == null ? void 0 : f.type) === n;
  return {
    connectingFrom: (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n,
    connectingTo: h,
    clickConnecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.id) === t && (i == null ? void 0 : i.type) === n,
    isPossibleEndHandle: a === li.Strict ? (u == null ? void 0 : u.type) !== n : e !== (u == null ? void 0 : u.nodeId) || t !== (u == null ? void 0 : u.id),
    connectionInProcess: !!u,
    clickConnectionInProcess: !!i,
    valid: h && d
  };
};
function Gq({ type: e = "source", position: t = me.Top, isValidConnection: n, isConnectable: o = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: l, onConnect: u, children: f, className: d, onMouseDown: h, onTouchStart: p, ...m }, v) {
  var W, q;
  const E = l || null, y = e === "target", w = He(), b = DR(), { connectOnClick: C, noPanClassName: _, rfId: k } = Me(Wq, Qe), { connectingFrom: P, connectingTo: T, clickConnecting: I, isPossibleEndHandle: L, connectionInProcess: D, clickConnectionInProcess: Y, valid: $ } = Me(Uq(b, E, e), Qe);
  b || (q = (W = w.getState()).onError) == null || q.call(W, "010", In.error010());
  const V = (U) => {
    const { defaultEdgeOptions: M, onConnect: z, hasDefaultEdges: Q } = w.getState(), j = {
      ...M,
      ...U
    };
    if (Q) {
      const { edges: G, setEdges: ie } = w.getState();
      ie(dR(j, G));
    }
    z == null || z(j), u == null || u(j);
  }, H = (U) => {
    if (!b)
      return;
    const M = lR(U.nativeEvent);
    if (i && (M && U.button === 0 || !M)) {
      const z = w.getState();
      ay.onPointerDown(U.nativeEvent, {
        handleDomNode: U.currentTarget,
        autoPanOnConnect: z.autoPanOnConnect,
        connectionMode: z.connectionMode,
        connectionRadius: z.connectionRadius,
        domNode: z.domNode,
        nodeLookup: z.nodeLookup,
        lib: z.lib,
        isTarget: y,
        handleId: E,
        nodeId: b,
        flowId: z.rfId,
        panBy: z.panBy,
        cancelConnection: z.cancelConnection,
        onConnectStart: z.onConnectStart,
        onConnectEnd: z.onConnectEnd,
        updateConnection: z.updateConnection,
        onConnect: V,
        isValidConnection: n || z.isValidConnection,
        getTransform: () => w.getState().transform,
        getFromHandle: () => w.getState().connection.fromHandle,
        autoPanSpeed: z.autoPanSpeed,
        dragThreshold: z.connectionDragThreshold
      });
    }
    M ? h == null || h(U) : p == null || p(U);
  }, O = (U) => {
    const { onClickConnectStart: M, onClickConnectEnd: z, connectionClickStartHandle: Q, connectionMode: j, isValidConnection: G, lib: ie, rfId: B, nodeLookup: Z, connection: ee } = w.getState();
    if (!b || !Q && !i)
      return;
    if (!Q) {
      M == null || M(U.nativeEvent, { nodeId: b, handleId: E, handleType: e }), w.setState({ connectionClickStartHandle: { nodeId: b, type: e, id: E } });
      return;
    }
    const X = sR(U.target), te = n || G, { connection: se, isValid: ae } = ay.isValid(U.nativeEvent, {
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
      flowId: B,
      doc: X,
      lib: ie,
      nodeLookup: Z
    });
    ae && se && V(se);
    const ce = structuredClone(ee);
    delete ce.inProgress, ce.toPosition = ce.toHandle ? ce.toHandle.position : null, z == null || z(U, ce), w.setState({ connectionClickStartHandle: null });
  };
  return R.jsx("div", { "data-handleid": E, "data-nodeid": b, "data-handlepos": t, "data-id": `${k}-${b}-${E}-${e}`, className: nt([
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
      clickconnecting: I,
      connectingfrom: P,
      connectingto: T,
      valid: $,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: o && (!D || L) && (D || Y ? a : i)
    }
  ]), onMouseDown: H, onTouchStart: H, onClick: C ? O : void 0, ref: v, ...m, children: f });
}
const Bs = N.memo(MR(Gq));
function Yq({ data: e, isConnectable: t, sourcePosition: n = me.Bottom }) {
  return R.jsxs(R.Fragment, { children: [e == null ? void 0 : e.label, R.jsx(Bs, { type: "source", position: n, isConnectable: t })] });
}
function Kq({ data: e, isConnectable: t, targetPosition: n = me.Top, sourcePosition: o = me.Bottom }) {
  return R.jsxs(R.Fragment, { children: [R.jsx(Bs, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, R.jsx(Bs, { type: "source", position: o, isConnectable: t })] });
}
function Xq() {
  return null;
}
function Qq({ data: e, isConnectable: t, targetPosition: n = me.Top }) {
  return R.jsxs(R.Fragment, { children: [R.jsx(Bs, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const su = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, Z_ = {
  input: Yq,
  default: Kq,
  output: Qq,
  group: Xq
};
function Zq(e) {
  var t, n, o, i;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((o = e.style) == null ? void 0 : o.width),
    height: e.height ?? ((i = e.style) == null ? void 0 : i.height)
  };
}
const Jq = (e) => {
  const { width: t, height: n, x: o, y: i } = Qs(e.nodeLookup, {
    filter: (a) => !!a.selected
  });
  return {
    width: hn(t) ? t : null,
    height: hn(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${o}px,${i}px)`
  };
};
function e3({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = He(), { width: i, height: a, transformString: l, userSelectionActive: u } = Me(Jq, Qe), f = jR(), d = N.useRef(null);
  if (N.useEffect(() => {
    var m;
    n || (m = d.current) == null || m.focus({
      preventScroll: !0
    });
  }, [n]), LR({
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
const J_ = typeof window < "u" ? window : void 0, t3 = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function qR({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, paneClickDistance: u, deleteKeyCode: f, selectionKeyCode: d, selectionOnDrag: h, selectionMode: p, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: E, panActivationKeyCode: y, zoomActivationKeyCode: w, elementsSelectable: b, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: k, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: I, panOnDrag: L, defaultViewport: D, translateExtent: Y, minZoom: $, maxZoom: V, preventScrolling: H, onSelectionContextMenu: O, noWheelClassName: W, noPanClassName: q, disableKeyboardA11y: U, onViewportChange: M, isControlledViewport: z }) {
  const { nodesSelectionActive: Q, userSelectionActive: j } = Me(t3), G = $s(d, { target: J_ }), ie = $s(y, { target: J_ }), B = ie || L, Z = ie || k, ee = h && B !== !0, X = G || j || ee;
  return Lq({ deleteKeyCode: f, multiSelectionKeyCode: E }), R.jsx(qq, { onPaneContextMenu: a, elementsSelectable: b, zoomOnScroll: C, zoomOnPinch: _, panOnScroll: Z, panOnScrollSpeed: P, panOnScrollMode: T, zoomOnDoubleClick: I, panOnDrag: !G && B, defaultViewport: D, translateExtent: Y, minZoom: $, maxZoom: V, zoomActivationKeyCode: w, preventScrolling: H, noWheelClassName: W, noPanClassName: q, onViewportChange: M, isControlledViewport: z, paneClickDistance: u, selectionOnDrag: ee, children: R.jsxs(Bq, { onSelectionStart: m, onSelectionEnd: v, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: l, panOnDrag: B, isSelecting: !!X, selectionMode: p, selectionKeyPressed: G, paneClickDistance: u, selectionOnDrag: ee, children: [e, Q && R.jsx(e3, { onSelectionContextMenu: O, noPanClassName: q, disableKeyboardA11y: U })] }) });
}
qR.displayName = "FlowRenderer";
const n3 = N.memo(qR), r3 = (e) => (t) => e ? Ay(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function o3(e) {
  return Me(N.useCallback(r3(e), [e]), Qe);
}
const i3 = (e) => e.updateNodeInternals;
function s3() {
  const e = Me(i3), [t] = N.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
  return N.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function a3({ node: e, nodeType: t, hasDimensions: n, resizeObserver: o }) {
  const i = He(), a = N.useRef(null), l = N.useRef(null), u = N.useRef(e.sourcePosition), f = N.useRef(e.targetPosition), d = N.useRef(t), h = n && !!e.internals.handleBounds;
  return N.useEffect(() => {
    a.current && !e.hidden && (!h || l.current !== a.current) && (l.current && (o == null || o.unobserve(l.current)), o == null || o.observe(a.current), l.current = a.current);
  }, [h, e.hidden]), N.useEffect(() => () => {
    l.current && (o == null || o.unobserve(l.current), l.current = null);
  }, []), N.useEffect(() => {
    if (a.current) {
      const p = d.current !== t, m = u.current !== e.sourcePosition, v = f.current !== e.targetPosition;
      (p || m || v) && (d.current = t, u.current = e.sourcePosition, f.current = e.targetPosition, i.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: a.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), a;
}
function l3({ id: e, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: i, onContextMenu: a, onDoubleClick: l, nodesDraggable: u, elementsSelectable: f, nodesConnectable: d, nodesFocusable: h, resizeObserver: p, noDragClassName: m, noPanClassName: v, disableKeyboardA11y: E, rfId: y, nodeTypes: w, nodeClickDistance: b, onError: C }) {
  const { node: _, internals: k, isParent: P } = Me((te) => {
    const se = te.nodeLookup.get(e), ae = te.parentLookup.has(e);
    return {
      node: se,
      internals: se.internals,
      isParent: ae
    };
  }, Qe);
  let T = _.type || "default", I = (w == null ? void 0 : w[T]) || Z_[T];
  I === void 0 && (C == null || C("003", In.error003(T)), T = "default", I = (w == null ? void 0 : w.default) || Z_.default);
  const L = !!(_.draggable || u && typeof _.draggable > "u"), D = !!(_.selectable || f && typeof _.selectable > "u"), Y = !!(_.connectable || d && typeof _.connectable > "u"), $ = !!(_.focusable || h && typeof _.focusable > "u"), V = He(), H = oR(_), O = a3({ node: _, nodeType: T, hasDimensions: H, resizeObserver: p }), W = LR({
    nodeRef: O,
    disabled: _.hidden || !L,
    noDragClassName: m,
    handleSelector: _.dragHandle,
    nodeId: e,
    isSelectable: D,
    nodeClickDistance: b
  }), q = jR();
  if (_.hidden)
    return null;
  const U = Jn(_), M = Zq(_), z = D || L || t || n || o || i, Q = n ? (te) => n(te, { ...k.userNode }) : void 0, j = o ? (te) => o(te, { ...k.userNode }) : void 0, G = i ? (te) => i(te, { ...k.userNode }) : void 0, ie = a ? (te) => a(te, { ...k.userNode }) : void 0, B = l ? (te) => l(te, { ...k.userNode }) : void 0, Z = (te) => {
    const { selectNodesOnDrag: se, nodeDragThreshold: ae } = V.getState();
    D && (!se || !L || ae > 0) && ly({
      id: e,
      store: V,
      nodeRef: O
    }), t && t(te, { ...k.userNode });
  }, ee = (te) => {
    if (!(aR(te.nativeEvent) || E)) {
      if (KN.includes(te.key) && D) {
        const se = te.key === "Escape";
        ly({
          id: e,
          store: V,
          unselect: se,
          nodeRef: O
        });
      } else if (L && _.selected && Object.prototype.hasOwnProperty.call(su, te.key)) {
        te.preventDefault();
        const { ariaLabelConfig: se } = V.getState();
        V.setState({
          ariaLiveMessage: se["node.a11yDescription.ariaLiveMessage"]({
            direction: te.key.replace("Arrow", "").toLowerCase(),
            x: ~~k.positionAbsolute.x,
            y: ~~k.positionAbsolute.y
          })
        }), q({
          direction: su[te.key],
          factor: te.shiftKey ? 4 : 1
        });
      }
    }
  }, X = () => {
    var be;
    if (E || !((be = O.current) != null && be.matches(":focus-visible")))
      return;
    const { transform: te, width: se, height: ae, autoPanOnNodeFocus: ce, setCenter: de } = V.getState();
    if (!ce)
      return;
    Ay(/* @__PURE__ */ new Map([[e, _]]), { x: 0, y: 0, width: se, height: ae }, te, !0).length > 0 || de(_.position.x + U.width / 2, _.position.y + U.height / 2, {
      zoom: te[2]
    });
  };
  return R.jsx("div", { className: nt([
    "react-flow__node",
    `react-flow__node-${T}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [v]: L
    },
    _.className,
    {
      selected: _.selected,
      selectable: D,
      parent: P,
      draggable: L,
      dragging: W
    }
  ]), ref: O, style: {
    zIndex: k.z,
    transform: `translate(${k.positionAbsolute.x}px,${k.positionAbsolute.y}px)`,
    pointerEvents: z ? "all" : "none",
    visibility: H ? "visible" : "hidden",
    ..._.style,
    ...M
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: Q, onMouseMove: j, onMouseLeave: G, onContextMenu: ie, onClick: Z, onDoubleClick: B, onKeyDown: $ ? ee : void 0, tabIndex: $ ? 0 : void 0, onFocus: $ ? X : void 0, role: _.ariaRole ?? ($ ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": E ? void 0 : `${NR}-${y}`, "aria-label": _.ariaLabel, ..._.domAttributes, children: R.jsx(Hq, { value: e, children: R.jsx(I, { id: e, data: _.data, type: T, positionAbsoluteX: k.positionAbsolute.x, positionAbsoluteY: k.positionAbsolute.y, selected: _.selected ?? !1, selectable: D, draggable: L, deletable: _.deletable ?? !0, isConnectable: Y, sourcePosition: _.sourcePosition, targetPosition: _.targetPosition, dragging: W, dragHandle: _.dragHandle, zIndex: k.z, parentId: _.parentId, ...U }) }) });
}
var u3 = N.memo(l3);
const c3 = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function zR(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, onError: a } = Me(c3, Qe), l = o3(e.onlyRenderVisibleElements), u = s3();
  return R.jsx("div", { className: "react-flow__nodes", style: Nu, children: l.map((f) => (
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
    R.jsx(u3, { id: f, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: u, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: i, nodeClickDistance: e.nodeClickDistance, onError: a }, f)
  )) });
}
zR.displayName = "NodeRenderer";
const f3 = N.memo(zR);
function d3(e) {
  return Me(N.useCallback((n) => {
    if (!e)
      return n.edges.map((i) => i.id);
    const o = [];
    if (n.width && n.height)
      for (const i of n.edges) {
        const a = n.nodeLookup.get(i.source), l = n.nodeLookup.get(i.target);
        a && l && cD({
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
const h3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e }
  };
  return R.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, p3 = ({ color: e = "none", strokeWidth: t = 1 }) => {
  const n = {
    strokeWidth: t,
    ...e && { stroke: e, fill: e }
  };
  return R.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, e1 = {
  [ru.Arrow]: h3,
  [ru.ArrowClosed]: p3
};
function g3(e) {
  const t = He();
  return N.useMemo(() => {
    var i, a;
    return Object.prototype.hasOwnProperty.call(e1, e) ? e1[e] : ((a = (i = t.getState()).onError) == null || a.call(i, "009", In.error009(e)), null);
  }, [e]);
}
const m3 = ({ id: e, type: t, color: n, width: o = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: l, orient: u = "auto-start-reverse" }) => {
  const f = g3(t);
  return f ? R.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${o}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: u, refX: "0", refY: "0", children: R.jsx(f, { color: n, strokeWidth: l }) }) : null;
}, FR = ({ defaultColor: e, rfId: t }) => {
  const n = Me((a) => a.edges), o = Me((a) => a.defaultEdgeOptions), i = N.useMemo(() => vD(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: o == null ? void 0 : o.markerStart,
    defaultMarkerEnd: o == null ? void 0 : o.markerEnd
  }), [n, o, t, e]);
  return i.length ? R.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: R.jsx("defs", { children: i.map((a) => R.jsx(m3, { id: a.id, type: a.type, color: a.color, width: a.width, height: a.height, markerUnits: a.markerUnits, strokeWidth: a.strokeWidth, orient: a.orient }, a.id)) }) }) : null;
};
FR.displayName = "MarkerDefinitions";
var v3 = N.memo(FR);
function $R({ x: e, y: t, label: n, labelStyle: o, labelShowBg: i = !0, labelBgStyle: a, labelBgPadding: l = [2, 4], labelBgBorderRadius: u = 2, children: f, className: d, ...h }) {
  const [p, m] = N.useState({ x: 1, y: 0, width: 0, height: 0 }), v = nt(["react-flow__edge-textwrapper", d]), E = N.useRef(null);
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
  }, [n]), n ? R.jsxs("g", { transform: `translate(${e - p.width / 2} ${t - p.height / 2})`, className: v, visibility: p.width ? "visible" : "hidden", ...h, children: [i && R.jsx("rect", { width: p.width + 2 * l[0], x: -l[0], y: -l[1], height: p.height + 2 * l[1], className: "react-flow__edge-textbg", style: a, rx: u, ry: u }), R.jsx("text", { className: "react-flow__edge-text", y: p.height / 2, dy: "0.3em", ref: E, style: o, children: n }), f] }) : null;
}
$R.displayName = "EdgeText";
const y3 = N.memo($R);
function Ru({ path: e, labelX: t, labelY: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f, interactionWidth: d = 20, ...h }) {
  return R.jsxs(R.Fragment, { children: [R.jsx("path", { ...h, d: e, fill: "none", className: nt(["react-flow__edge-path", h.className]) }), d ? R.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: d, className: "react-flow__edge-interaction" }) : null, o && hn(t) && hn(n) ? R.jsx(y3, { x: t, y: n, label: o, labelStyle: i, labelShowBg: a, labelBgStyle: l, labelBgPadding: u, labelBgBorderRadius: f }) : null] });
}
function t1({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  return e === me.Left || e === me.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + i)];
}
function BR({ sourceX: e, sourceY: t, sourcePosition: n = me.Bottom, targetX: o, targetY: i, targetPosition: a = me.Top }) {
  const [l, u] = t1({
    pos: n,
    x1: e,
    y1: t,
    x2: o,
    y2: i
  }), [f, d] = t1({
    pos: a,
    x1: o,
    y1: i,
    x2: e,
    y2: t
  }), [h, p, m, v] = uR({
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
function VR(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l, targetPosition: u, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, interactionWidth: b }) => {
    const [C, _, k] = BR({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u
    }), P = e.isInternal ? void 0 : t;
    return R.jsx(Ru, { id: P, path: C, labelX: _, labelY: k, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, interactionWidth: b });
  });
}
const x3 = VR({ isInternal: !1 }), HR = VR({ isInternal: !0 });
x3.displayName = "SimpleBezierEdge";
HR.displayName = "SimpleBezierEdgeInternal";
function WR(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, sourcePosition: v = me.Bottom, targetPosition: E = me.Top, markerEnd: y, markerStart: w, pathOptions: b, interactionWidth: C }) => {
    const [_, k, P] = oy({
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
    return R.jsx(Ru, { id: T, path: _, labelX: k, labelY: P, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: y, markerStart: w, interactionWidth: C });
  });
}
const UR = WR({ isInternal: !1 }), GR = WR({ isInternal: !0 });
UR.displayName = "SmoothStepEdge";
GR.displayName = "SmoothStepEdgeInternal";
function YR(e) {
  return N.memo(({ id: t, ...n }) => {
    var i;
    const o = e.isInternal ? void 0 : t;
    return R.jsx(UR, { ...n, id: o, pathOptions: N.useMemo(() => {
      var a;
      return { borderRadius: 0, offset: (a = n.pathOptions) == null ? void 0 : a.offset };
    }, [(i = n.pathOptions) == null ? void 0 : i.offset]) });
  });
}
const w3 = YR({ isInternal: !1 }), KR = YR({ isInternal: !0 });
w3.displayName = "StepEdge";
KR.displayName = "StepEdgeInternal";
function XR(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: E, interactionWidth: y }) => {
    const [w, b, C] = hR({ sourceX: n, sourceY: o, targetX: i, targetY: a }), _ = e.isInternal ? void 0 : t;
    return R.jsx(Ru, { id: _, path: w, labelX: b, labelY: C, label: l, labelStyle: u, labelShowBg: f, labelBgStyle: d, labelBgPadding: h, labelBgBorderRadius: p, style: m, markerEnd: v, markerStart: E, interactionWidth: y });
  });
}
const _3 = XR({ isInternal: !1 }), QR = XR({ isInternal: !0 });
_3.displayName = "StraightEdge";
QR.displayName = "StraightEdgeInternal";
function ZR(e) {
  return N.memo(({ id: t, sourceX: n, sourceY: o, targetX: i, targetY: a, sourcePosition: l = me.Bottom, targetPosition: u = me.Top, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, pathOptions: b, interactionWidth: C }) => {
    const [_, k, P] = cR({
      sourceX: n,
      sourceY: o,
      sourcePosition: l,
      targetX: i,
      targetY: a,
      targetPosition: u,
      curvature: b == null ? void 0 : b.curvature
    }), T = e.isInternal ? void 0 : t;
    return R.jsx(Ru, { id: T, path: _, labelX: k, labelY: P, label: f, labelStyle: d, labelShowBg: h, labelBgStyle: p, labelBgPadding: m, labelBgBorderRadius: v, style: E, markerEnd: y, markerStart: w, interactionWidth: C });
  });
}
const b3 = ZR({ isInternal: !1 }), JR = ZR({ isInternal: !0 });
b3.displayName = "BezierEdge";
JR.displayName = "BezierEdgeInternal";
const n1 = {
  default: JR,
  straight: QR,
  step: KR,
  smoothstep: GR,
  simplebezier: HR
}, r1 = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, S3 = (e, t, n) => n === me.Left ? e - t : n === me.Right ? e + t : e, E3 = (e, t, n) => n === me.Top ? e - t : n === me.Bottom ? e + t : e, o1 = "react-flow__edgeupdater";
function i1({ position: e, centerX: t, centerY: n, radius: o = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: l, type: u }) {
  return R.jsx("circle", { onMouseDown: i, onMouseEnter: a, onMouseOut: l, className: nt([o1, `${o1}-${u}`]), cx: S3(t, o, e), cy: E3(n, o, e), r: o, stroke: "transparent", fill: "transparent" });
}
function C3({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: o, sourceY: i, targetX: a, targetY: l, sourcePosition: u, targetPosition: f, onReconnect: d, onReconnectStart: h, onReconnectEnd: p, setReconnecting: m, setUpdateHover: v }) {
  const E = He(), y = (k, P) => {
    if (k.button !== 0)
      return;
    const { autoPanOnConnect: T, domNode: I, isValidConnection: L, connectionMode: D, connectionRadius: Y, lib: $, onConnectStart: V, onConnectEnd: H, cancelConnection: O, nodeLookup: W, rfId: q, panBy: U, updateConnection: M } = E.getState(), z = P.type === "target", Q = (ie, B) => {
      m(!1), p == null || p(ie, n, P.type, B);
    }, j = (ie) => d == null ? void 0 : d(n, ie), G = (ie, B) => {
      m(!0), h == null || h(k, n, P.type), V == null || V(ie, B);
    };
    ay.onPointerDown(k.nativeEvent, {
      autoPanOnConnect: T,
      connectionMode: D,
      connectionRadius: Y,
      domNode: I,
      handleId: P.id,
      nodeId: P.nodeId,
      nodeLookup: W,
      isTarget: z,
      edgeUpdaterType: P.type,
      lib: $,
      flowId: q,
      cancelConnection: O,
      panBy: U,
      isValidConnection: L,
      onConnect: j,
      onConnectStart: G,
      onConnectEnd: H,
      onReconnectEnd: Q,
      updateConnection: M,
      getTransform: () => E.getState().transform,
      getFromHandle: () => E.getState().connection.fromHandle,
      dragThreshold: E.getState().connectionDragThreshold,
      handleDomNode: k.currentTarget
    });
  }, w = (k) => y(k, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), b = (k) => y(k, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), C = () => v(!0), _ = () => v(!1);
  return R.jsxs(R.Fragment, { children: [(e === !0 || e === "source") && R.jsx(i1, { position: u, centerX: o, centerY: i, radius: t, onMouseDown: w, onMouseEnter: C, onMouseOut: _, type: "source" }), (e === !0 || e === "target") && R.jsx(i1, { position: f, centerX: a, centerY: l, radius: t, onMouseDown: b, onMouseEnter: C, onMouseOut: _, type: "target" })] });
}
function k3({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: i, onDoubleClick: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, rfId: E, edgeTypes: y, noPanClassName: w, onError: b, disableKeyboardA11y: C }) {
  let _ = Me((de) => de.edgeLookup.get(e));
  const k = Me((de) => de.defaultEdgeOptions);
  _ = k ? { ...k, ..._ } : _;
  let P = _.type || "default", T = (y == null ? void 0 : y[P]) || n1[P];
  T === void 0 && (b == null || b("011", In.error011(P)), P = "default", T = (y == null ? void 0 : y.default) || n1.default);
  const I = !!(_.focusable || t && typeof _.focusable > "u"), L = typeof p < "u" && (_.reconnectable || n && typeof _.reconnectable > "u"), D = !!(_.selectable || o && typeof _.selectable > "u"), Y = N.useRef(null), [$, V] = N.useState(!1), [H, O] = N.useState(!1), W = He(), { zIndex: q, sourceX: U, sourceY: M, targetX: z, targetY: Q, sourcePosition: j, targetPosition: G } = Me(N.useCallback((de) => {
    const pe = de.nodeLookup.get(_.source), be = de.nodeLookup.get(_.target);
    if (!pe || !be)
      return {
        zIndex: _.zIndex,
        ...r1
      };
    const ve = mD({
      id: e,
      sourceNode: pe,
      targetNode: be,
      sourceHandle: _.sourceHandle || null,
      targetHandle: _.targetHandle || null,
      connectionMode: de.connectionMode,
      onError: b
    });
    return {
      zIndex: uD({
        selected: _.selected,
        zIndex: _.zIndex,
        sourceNode: pe,
        targetNode: be,
        elevateOnSelect: de.elevateEdgesOnSelect
      }),
      ...ve || r1
    };
  }, [_.source, _.target, _.sourceHandle, _.targetHandle, _.selected, _.zIndex]), Qe), ie = N.useMemo(() => _.markerStart ? `url('#${iy(_.markerStart, E)}')` : void 0, [_.markerStart, E]), B = N.useMemo(() => _.markerEnd ? `url('#${iy(_.markerEnd, E)}')` : void 0, [_.markerEnd, E]);
  if (_.hidden || U === null || M === null || z === null || Q === null)
    return null;
  const Z = (de) => {
    var Re;
    const { addSelectedEdges: pe, unselectNodesAndEdges: be, multiSelectionActive: ve } = W.getState();
    D && (W.setState({ nodesSelectionActive: !1 }), _.selected && ve ? (be({ nodes: [], edges: [_] }), (Re = Y.current) == null || Re.blur()) : pe([e])), i && i(de, _);
  }, ee = a ? (de) => {
    a(de, { ..._ });
  } : void 0, X = l ? (de) => {
    l(de, { ..._ });
  } : void 0, te = u ? (de) => {
    u(de, { ..._ });
  } : void 0, se = f ? (de) => {
    f(de, { ..._ });
  } : void 0, ae = d ? (de) => {
    d(de, { ..._ });
  } : void 0, ce = (de) => {
    var pe;
    if (!C && KN.includes(de.key) && D) {
      const { unselectNodesAndEdges: be, addSelectedEdges: ve } = W.getState();
      de.key === "Escape" ? ((pe = Y.current) == null || pe.blur(), be({ edges: [_] })) : ve([e]);
    }
  };
  return R.jsx("svg", { style: { zIndex: q }, children: R.jsxs("g", { className: nt([
    "react-flow__edge",
    `react-flow__edge-${P}`,
    _.className,
    w,
    {
      selected: _.selected,
      animated: _.animated,
      inactive: !D && !i,
      updating: $,
      selectable: D
    }
  ]), onClick: Z, onDoubleClick: ee, onContextMenu: X, onMouseEnter: te, onMouseMove: se, onMouseLeave: ae, onKeyDown: I ? ce : void 0, tabIndex: I ? 0 : void 0, role: _.ariaRole ?? (I ? "group" : "img"), "aria-roledescription": "edge", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": _.ariaLabel === null ? void 0 : _.ariaLabel || `Edge from ${_.source} to ${_.target}`, "aria-describedby": I ? `${RR}-${E}` : void 0, ref: Y, ..._.domAttributes, children: [!H && R.jsx(T, { id: e, source: _.source, target: _.target, type: _.type, selected: _.selected, animated: _.animated, selectable: D, deletable: _.deletable ?? !0, label: _.label, labelStyle: _.labelStyle, labelShowBg: _.labelShowBg, labelBgStyle: _.labelBgStyle, labelBgPadding: _.labelBgPadding, labelBgBorderRadius: _.labelBgBorderRadius, sourceX: U, sourceY: M, targetX: z, targetY: Q, sourcePosition: j, targetPosition: G, data: _.data, style: _.style, sourceHandleId: _.sourceHandle, targetHandleId: _.targetHandle, markerStart: ie, markerEnd: B, pathOptions: "pathOptions" in _ ? _.pathOptions : void 0, interactionWidth: _.interactionWidth }), L && R.jsx(C3, { edge: _, isReconnectable: L, reconnectRadius: h, onReconnect: p, onReconnectStart: m, onReconnectEnd: v, sourceX: U, sourceY: M, targetX: z, targetY: Q, sourcePosition: j, targetPosition: G, setUpdateHover: V, setReconnecting: O })] }) });
}
var N3 = N.memo(k3);
const R3 = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function eP({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: i, onReconnect: a, onEdgeContextMenu: l, onEdgeMouseEnter: u, onEdgeMouseMove: f, onEdgeMouseLeave: d, onEdgeClick: h, reconnectRadius: p, onEdgeDoubleClick: m, onReconnectStart: v, onReconnectEnd: E, disableKeyboardA11y: y }) {
  const { edgesFocusable: w, edgesReconnectable: b, elementsSelectable: C, onError: _ } = Me(R3, Qe), k = d3(t);
  return R.jsxs("div", { className: "react-flow__edges", children: [R.jsx(v3, { defaultColor: e, rfId: n }), k.map((P) => R.jsx(N3, { id: P, edgesFocusable: w, edgesReconnectable: b, elementsSelectable: C, noPanClassName: i, onReconnect: a, onContextMenu: l, onMouseEnter: u, onMouseMove: f, onMouseLeave: d, onClick: h, reconnectRadius: p, onDoubleClick: m, onReconnectStart: v, onReconnectEnd: E, rfId: n, onError: _, edgeTypes: o, disableKeyboardA11y: y }, P))] });
}
eP.displayName = "EdgeRenderer";
const P3 = N.memo(eP), T3 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function A3({ children: e }) {
  const t = Me(T3);
  return R.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function I3(e) {
  const t = qy(), n = N.useRef(!1);
  N.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const M3 = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function O3(e) {
  const t = Me(M3), n = He();
  return N.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function L3(e) {
  return e.connection.inProgress ? { ...e.connection, to: Js(e.connection.to, e.transform) } : { ...e.connection };
}
function j3(e) {
  return L3;
}
function D3(e) {
  const t = j3();
  return Me(t, Qe);
}
const q3 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function z3({ containerStyle: e, style: t, type: n, component: o }) {
  const { nodesConnectable: i, width: a, height: l, isValid: u, inProgress: f } = Me(q3, Qe);
  return !(a && i && f) ? null : R.jsx("svg", { style: e, width: a, height: l, className: "react-flow__connectionline react-flow__container", children: R.jsx("g", { className: nt(["react-flow__connection", ZN(u)]), children: R.jsx(tP, { style: t, type: n, CustomComponent: o, isValid: u }) }) });
}
const tP = ({ style: e, type: t = Rr.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: i, from: a, fromNode: l, fromHandle: u, fromPosition: f, to: d, toNode: h, toHandle: p, toPosition: m, pointer: v } = D3();
  if (!i)
    return;
  if (n)
    return R.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: l, fromHandle: u, fromX: a.x, fromY: a.y, toX: d.x, toY: d.y, fromPosition: f, toPosition: m, connectionStatus: ZN(o), toNode: h, toHandle: p, pointer: v });
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
      [E] = cR(y);
      break;
    case Rr.SimpleBezier:
      [E] = BR(y);
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
      [E] = hR(y);
  }
  return R.jsx("path", { d: E, fill: "none", className: "react-flow__connection-path", style: e });
};
tP.displayName = "ConnectionLine";
const F3 = {};
function s1(e = F3) {
  N.useRef(e), He(), N.useEffect(() => {
  }, [e]);
}
function $3() {
  He(), N.useRef(!1), N.useEffect(() => {
  }, []);
}
function nP({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: i, onNodeDoubleClick: a, onEdgeDoubleClick: l, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: p, onSelectionStart: m, onSelectionEnd: v, connectionLineType: E, connectionLineStyle: y, connectionLineComponent: w, connectionLineContainerStyle: b, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: I, deleteKeyCode: L, onlyRenderVisibleElements: D, elementsSelectable: Y, defaultViewport: $, translateExtent: V, minZoom: H, maxZoom: O, preventScrolling: W, defaultMarkerColor: q, zoomOnScroll: U, zoomOnPinch: M, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: j, zoomOnDoubleClick: G, panOnDrag: ie, onPaneClick: B, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: X, onPaneScroll: te, onPaneContextMenu: se, paneClickDistance: ae, nodeClickDistance: ce, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ve, reconnectRadius: Re, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, nodeExtent: tn, rfId: $t, viewport: nn, onViewportChange: Bt }) {
  return s1(e), s1(t), $3(), I3(n), O3(nn), R.jsx(n3, { onPaneClick: B, onPaneMouseEnter: Z, onPaneMouseMove: ee, onPaneMouseLeave: X, onPaneContextMenu: se, onPaneScroll: te, paneClickDistance: ae, deleteKeyCode: L, selectionKeyCode: C, selectionOnDrag: _, selectionMode: k, onSelectionStart: m, onSelectionEnd: v, multiSelectionKeyCode: P, panActivationKeyCode: T, zoomActivationKeyCode: I, elementsSelectable: Y, zoomOnScroll: U, zoomOnPinch: M, zoomOnDoubleClick: G, panOnScroll: z, panOnScrollSpeed: Q, panOnScrollMode: j, panOnDrag: ie, defaultViewport: $, translateExtent: V, minZoom: H, maxZoom: O, onSelectionContextMenu: p, preventScrolling: W, noDragClassName: Ft, noWheelClassName: ht, noPanClassName: at, disableKeyboardA11y: Ge, onViewportChange: Bt, isControlledViewport: !!nn, children: R.jsxs(A3, { children: [R.jsx(P3, { edgeTypes: t, onEdgeClick: i, onEdgeDoubleClick: l, onReconnect: Ee, onReconnectStart: Je, onReconnectEnd: Ue, onlyRenderVisibleElements: D, onEdgeContextMenu: de, onEdgeMouseEnter: pe, onEdgeMouseMove: be, onEdgeMouseLeave: ve, reconnectRadius: Re, defaultMarkerColor: q, noPanClassName: at, disableKeyboardA11y: Ge, rfId: $t }), R.jsx(z3, { style: y, type: E, component: w, containerStyle: b }), R.jsx("div", { className: "react-flow__edgelabel-renderer" }), R.jsx(f3, { nodeTypes: e, onNodeClick: o, onNodeDoubleClick: a, onNodeMouseEnter: u, onNodeMouseMove: f, onNodeMouseLeave: d, onNodeContextMenu: h, nodeClickDistance: ce, onlyRenderVisibleElements: D, noPanClassName: at, noDragClassName: Ft, disableKeyboardA11y: Ge, nodeExtent: tn, rfId: $t }), R.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
nP.displayName = "GraphView";
const B3 = N.memo(nP), a1 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f = 0.5, maxZoom: d = 2, nodeOrigin: h, nodeExtent: p } = {}) => {
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), w = o ?? t ?? [], b = n ?? e ?? [], C = h ?? [0, 0], _ = p ?? js;
  mR(E, y, w);
  const k = sy(b, m, v, {
    nodeOrigin: C,
    nodeExtent: _,
    elevateNodesOnSelect: !1
  });
  let P = [0, 0, 1];
  if (l && i && a) {
    const T = Qs(m, {
      filter: (Y) => !!((Y.width || Y.initialWidth) && (Y.height || Y.initialHeight))
    }), { x: I, y: L, zoom: D } = Iy(T, i, a, f, d, (u == null ? void 0 : u.padding) ?? 0.1);
    P = [I, L, D];
  }
  return {
    rfId: "1",
    width: i ?? 0,
    height: a ?? 0,
    transform: P,
    nodes: b,
    nodesInitialized: k,
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
    translateExtent: js,
    nodeExtent: _,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: li.Strict,
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
    connection: { ...QN },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnNodeFocus: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: rD,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1,
    ariaLabelConfig: XN
  };
}, V3 = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, width: i, height: a, fitView: l, fitViewOptions: u, minZoom: f, maxZoom: d, nodeOrigin: h, nodeExtent: p }) => sq((m, v) => {
  async function E() {
    const { nodeLookup: y, panZoom: w, fitViewOptions: b, fitViewResolver: C, width: _, height: k, minZoom: P, maxZoom: T } = v();
    w && (await tD({
      nodes: y,
      width: _,
      height: k,
      panZoom: w,
      minZoom: P,
      maxZoom: T
    }, b), C == null || C.resolve(!0), m({ fitViewResolver: null }));
  }
  return {
    ...a1({
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
      const { nodeLookup: w, parentLookup: b, nodeOrigin: C, elevateNodesOnSelect: _, fitViewQueued: k } = v(), P = sy(y, w, b, {
        nodeOrigin: C,
        nodeExtent: p,
        elevateNodesOnSelect: _,
        checkEquality: !0
      });
      k && P ? (E(), m({ nodes: y, nodesInitialized: P, fitViewQueued: !1, fitViewOptions: void 0 })) : m({ nodes: y, nodesInitialized: P });
    },
    setEdges: (y) => {
      const { connectionLookup: w, edgeLookup: b } = v();
      mR(w, b, y), m({ edges: y });
    },
    setDefaultNodesAndEdges: (y, w) => {
      if (y) {
        const { setNodes: b } = v();
        b(y), m({ hasDefaultNodes: !0 });
      }
      if (w) {
        const { setEdges: b } = v();
        b(w), m({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (y) => {
      const { triggerNodeChanges: w, nodeLookup: b, parentLookup: C, domNode: _, nodeOrigin: k, nodeExtent: P, debug: T, fitViewQueued: I } = v(), { changes: L, updatedInternals: D } = ED(y, b, C, _, k, P);
      D && (wD(b, C, { nodeOrigin: k, nodeExtent: P }), I ? (E(), m({ fitViewQueued: !1, fitViewOptions: void 0 })) : m({}), (L == null ? void 0 : L.length) > 0 && (T && console.log("React Flow: trigger node changes", L), w == null || w(L)));
    },
    updateNodePositions: (y, w = !1) => {
      const b = [], C = [], { nodeLookup: _, triggerNodeChanges: k } = v();
      for (const [P, T] of y) {
        const I = _.get(P), L = !!(I != null && I.expandParent && (I != null && I.parentId) && (T != null && T.position)), D = {
          id: P,
          type: "position",
          position: L ? {
            x: Math.max(0, T.position.x),
            y: Math.max(0, T.position.y)
          } : T.position,
          dragging: w
        };
        L && I.parentId && b.push({
          id: P,
          parentId: I.parentId,
          rect: {
            ...T.internals.positionAbsolute,
            width: T.measured.width ?? 0,
            height: T.measured.height ?? 0
          }
        }), C.push(D);
      }
      if (b.length > 0) {
        const { parentLookup: P, nodeOrigin: T } = v(), I = Dy(b, _, P, T);
        C.push(...I);
      }
      k(C);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: w, setNodes: b, nodes: C, hasDefaultNodes: _, debug: k } = v();
      if (y != null && y.length) {
        if (_) {
          const P = AR(y, C);
          b(P);
        }
        k && console.log("React Flow: trigger node changes", y), w == null || w(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: w, setEdges: b, edges: C, hasDefaultEdges: _, debug: k } = v();
      if (y != null && y.length) {
        if (_) {
          const P = IR(y, C);
          b(P);
        }
        k && console.log("React Flow: trigger edge changes", y), w == null || w(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: w, edgeLookup: b, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = v();
      if (w) {
        const P = y.map((T) => to(T, !0));
        _(P);
        return;
      }
      _(ti(C, /* @__PURE__ */ new Set([...y]), !0)), k(ti(b));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: w, edgeLookup: b, nodeLookup: C, triggerNodeChanges: _, triggerEdgeChanges: k } = v();
      if (w) {
        const P = y.map((T) => to(T, !0));
        k(P);
        return;
      }
      k(ti(b, /* @__PURE__ */ new Set([...y]))), _(ti(C, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: w } = {}) => {
      const { edges: b, nodes: C, nodeLookup: _, triggerNodeChanges: k, triggerEdgeChanges: P } = v(), T = y || C, I = w || b, L = T.map((Y) => {
        const $ = _.get(Y.id);
        return $ && ($.selected = !1), to(Y.id, !1);
      }), D = I.map((Y) => to(Y.id, !1));
      k(L), P(D);
    },
    setMinZoom: (y) => {
      const { panZoom: w, maxZoom: b } = v();
      w == null || w.setScaleExtent([y, b]), m({ minZoom: y });
    },
    setMaxZoom: (y) => {
      const { panZoom: w, minZoom: b } = v();
      w == null || w.setScaleExtent([b, y]), m({ maxZoom: y });
    },
    setTranslateExtent: (y) => {
      var w;
      (w = v().panZoom) == null || w.setTranslateExtent(y), m({ translateExtent: y });
    },
    resetSelectedElements: () => {
      const { edges: y, nodes: w, triggerNodeChanges: b, triggerEdgeChanges: C, elementsSelectable: _ } = v();
      if (!_)
        return;
      const k = w.reduce((T, I) => I.selected ? [...T, to(I.id, !1)] : T, []), P = y.reduce((T, I) => I.selected ? [...T, to(I.id, !1)] : T, []);
      b(k), C(P);
    },
    setNodeExtent: (y) => {
      const { nodes: w, nodeLookup: b, parentLookup: C, nodeOrigin: _, elevateNodesOnSelect: k, nodeExtent: P } = v();
      y[0][0] === P[0][0] && y[0][1] === P[0][1] && y[1][0] === P[1][0] && y[1][1] === P[1][1] || (sy(w, b, C, {
        nodeOrigin: _,
        nodeExtent: y,
        elevateNodesOnSelect: k,
        checkEquality: !1
      }), m({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: w, width: b, height: C, panZoom: _, translateExtent: k } = v();
      return CD({ delta: y, panZoom: _, transform: w, translateExtent: k, width: b, height: C });
    },
    setCenter: async (y, w, b) => {
      const { width: C, height: _, maxZoom: k, panZoom: P } = v();
      if (!P)
        return Promise.resolve(!1);
      const T = typeof (b == null ? void 0 : b.zoom) < "u" ? b.zoom : k;
      return await P.setViewport({
        x: C / 2 - y * T,
        y: _ / 2 - w * T,
        zoom: T
      }, { duration: b == null ? void 0 : b.duration, ease: b == null ? void 0 : b.ease, interpolate: b == null ? void 0 : b.interpolate }), Promise.resolve(!0);
    },
    cancelConnection: () => {
      m({
        connection: { ...QN }
      });
    },
    updateConnection: (y) => {
      m({ connection: y });
    },
    reset: () => m({ ...a1() })
  };
}, Object.is);
function rP({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: i, initialHeight: a, initialMinZoom: l, initialMaxZoom: u, initialFitViewOptions: f, fitView: d, nodeOrigin: h, nodeExtent: p, children: m }) {
  const [v] = N.useState(() => V3({
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
  return R.jsx(lq, { value: v, children: R.jsx(Aq, { children: m }) });
}
function H3({ children: e, nodes: t, edges: n, defaultNodes: o, defaultEdges: i, width: a, height: l, fitView: u, fitViewOptions: f, minZoom: d, maxZoom: h, nodeOrigin: p, nodeExtent: m }) {
  return N.useContext(ku) ? R.jsx(R.Fragment, { children: e }) : R.jsx(rP, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: i, initialWidth: a, initialHeight: l, fitView: u, initialFitViewOptions: f, initialMinZoom: d, initialMaxZoom: h, nodeOrigin: p, nodeExtent: m, children: e });
}
const W3 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function U3({ nodes: e, edges: t, defaultNodes: n, defaultEdges: o, className: i, nodeTypes: a, edgeTypes: l, onNodeClick: u, onEdgeClick: f, onInit: d, onMove: h, onMoveStart: p, onMoveEnd: m, onConnect: v, onConnectStart: E, onConnectEnd: y, onClickConnectStart: w, onClickConnectEnd: b, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: P, onNodeDoubleClick: T, onNodeDragStart: I, onNodeDrag: L, onNodeDragStop: D, onNodesDelete: Y, onEdgesDelete: $, onDelete: V, onSelectionChange: H, onSelectionDragStart: O, onSelectionDrag: W, onSelectionDragStop: q, onSelectionContextMenu: U, onSelectionStart: M, onSelectionEnd: z, onBeforeDelete: Q, connectionMode: j, connectionLineType: G = Rr.Bezier, connectionLineStyle: ie, connectionLineComponent: B, connectionLineContainerStyle: Z, deleteKeyCode: ee = "Backspace", selectionKeyCode: X = "Shift", selectionOnDrag: te = !1, selectionMode: se = Ds.Full, panActivationKeyCode: ae = "Space", multiSelectionKeyCode: ce = zs() ? "Meta" : "Control", zoomActivationKeyCode: de = zs() ? "Meta" : "Control", snapToGrid: pe, snapGrid: be, onlyRenderVisibleElements: ve = !1, selectNodesOnDrag: Re, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Ft, nodeOrigin: ht = PR, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: tn = !0, defaultViewport: $t = _q, minZoom: nn = 0.5, maxZoom: Bt = 2, translateExtent: _t = js, preventScrolling: jr = !0, nodeExtent: Vt, defaultMarkerColor: qn = "#b1b1b7", zoomOnScroll: wo = !0, zoomOnPinch: Tt = !0, panOnScroll: Ht = !1, panOnScrollSpeed: lc = 0.5, panOnScrollMode: Ri = oo.Free, zoomOnDoubleClick: Pi = !0, panOnDrag: Ti = !0, onPaneClick: Ai, onPaneMouseEnter: Ii, onPaneMouseMove: nr, onPaneMouseLeave: rr, onPaneScroll: ua, onPaneContextMenu: ca, paneClickDistance: fa = 1, nodeClickDistance: da = 0, children: ha, onReconnect: Mi, onReconnectStart: pa, onReconnectEnd: Dr, onEdgeContextMenu: Oi, onEdgeDoubleClick: qr, onEdgeMouseEnter: uc, onEdgeMouseMove: zr, onEdgeMouseLeave: _o, reconnectRadius: bo = 10, onNodesChange: Li, onEdgesChange: cc, noDragClassName: fc = "nodrag", noWheelClassName: dc = "nowheel", noPanClassName: _n = "nopan", fitView: ji, fitViewOptions: Di, connectOnClick: hc, attributionPosition: ga, proOptions: ma, defaultEdgeOptions: va, elevateNodesOnSelect: ya, elevateEdgesOnSelect: pc, disableKeyboardA11y: xa = !1, autoPanOnConnect: Ye, autoPanOnNodeDrag: gc, autoPanSpeed: qi, connectionRadius: wa, isValidConnection: So, onError: mc, style: _a, id: Fr, nodeDragThreshold: Wt, connectionDragThreshold: vc, viewport: At, onViewportChange: yc, width: xc, height: wc, colorMode: Eo = "light", debug: Co, onScroll: bn, ariaLabelConfig: ko, ..._c }, bc) {
  const $r = Fr || "1", ba = Cq(Eo), zi = N.useCallback((or) => {
    or.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), bn == null || bn(or);
  }, [bn]);
  return R.jsx("div", { "data-testid": "rf__wrapper", ..._c, onScroll: zi, style: { ..._a, ...W3 }, ref: bc, className: nt(["react-flow", i, ba]), id: Fr, role: "application", children: R.jsxs(H3, { nodes: e, edges: t, width: xc, height: wc, fitView: ji, fitViewOptions: Di, minZoom: nn, maxZoom: Bt, nodeOrigin: ht, nodeExtent: Vt, children: [R.jsx(B3, { onInit: d, onNodeClick: u, onEdgeClick: f, onNodeMouseEnter: C, onNodeMouseMove: _, onNodeMouseLeave: k, onNodeContextMenu: P, onNodeDoubleClick: T, nodeTypes: a, edgeTypes: l, connectionLineType: G, connectionLineStyle: ie, connectionLineComponent: B, connectionLineContainerStyle: Z, selectionKeyCode: X, selectionOnDrag: te, selectionMode: se, deleteKeyCode: ee, multiSelectionKeyCode: ce, panActivationKeyCode: ae, zoomActivationKeyCode: de, onlyRenderVisibleElements: ve, defaultViewport: $t, translateExtent: _t, minZoom: nn, maxZoom: Bt, preventScrolling: jr, zoomOnScroll: wo, zoomOnPinch: Tt, zoomOnDoubleClick: Pi, panOnScroll: Ht, panOnScrollSpeed: lc, panOnScrollMode: Ri, panOnDrag: Ti, onPaneClick: Ai, onPaneMouseEnter: Ii, onPaneMouseMove: nr, onPaneMouseLeave: rr, onPaneScroll: ua, onPaneContextMenu: ca, paneClickDistance: fa, nodeClickDistance: da, onSelectionContextMenu: U, onSelectionStart: M, onSelectionEnd: z, onReconnect: Mi, onReconnectStart: pa, onReconnectEnd: Dr, onEdgeContextMenu: Oi, onEdgeDoubleClick: qr, onEdgeMouseEnter: uc, onEdgeMouseMove: zr, onEdgeMouseLeave: _o, reconnectRadius: bo, defaultMarkerColor: qn, noDragClassName: fc, noWheelClassName: dc, noPanClassName: _n, rfId: $r, disableKeyboardA11y: xa, nodeExtent: Vt, viewport: At, onViewportChange: yc }), R.jsx(Eq, { nodes: e, edges: t, defaultNodes: n, defaultEdges: o, onConnect: v, onConnectStart: E, onConnectEnd: y, onClickConnectStart: w, onClickConnectEnd: b, nodesDraggable: Ee, autoPanOnNodeFocus: Je, nodesConnectable: Ue, nodesFocusable: Ft, edgesFocusable: at, edgesReconnectable: Ge, elementsSelectable: tn, elevateNodesOnSelect: ya, elevateEdgesOnSelect: pc, minZoom: nn, maxZoom: Bt, nodeExtent: Vt, onNodesChange: Li, onEdgesChange: cc, snapToGrid: pe, snapGrid: be, connectionMode: j, translateExtent: _t, connectOnClick: hc, defaultEdgeOptions: va, fitView: ji, fitViewOptions: Di, onNodesDelete: Y, onEdgesDelete: $, onDelete: V, onNodeDragStart: I, onNodeDrag: L, onNodeDragStop: D, onSelectionDrag: W, onSelectionDragStart: O, onSelectionDragStop: q, onMove: h, onMoveStart: p, onMoveEnd: m, noPanClassName: _n, nodeOrigin: ht, rfId: $r, autoPanOnConnect: Ye, autoPanOnNodeDrag: gc, autoPanSpeed: qi, onError: mc, connectionRadius: wa, isValidConnection: So, selectNodesOnDrag: Re, nodeDragThreshold: Wt, connectionDragThreshold: vc, onBeforeDelete: Q, debug: Co, ariaLabelConfig: ko }), R.jsx(wq, { onSelectionChange: H }), ha, R.jsx(gq, { proOptions: ma, position: ga }), R.jsx(pq, { rfId: $r, disableKeyboardA11y: xa })] }) });
}
var G3 = MR(U3);
function Y3({ dimensions: e, lineWidth: t, variant: n, className: o }) {
  return R.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: nt(["react-flow__background-pattern", n, o]) });
}
function K3({ radius: e, className: t }) {
  return R.jsx("circle", { cx: e, cy: e, r: e, className: nt(["react-flow__background-pattern", "dots", t]) });
}
var Pr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Pr || (Pr = {}));
const X3 = {
  [Pr.Dots]: 1,
  [Pr.Lines]: 1,
  [Pr.Cross]: 6
}, Q3 = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function oP({
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
  const p = N.useRef(null), { transform: m, patternId: v } = Me(Q3, Qe), E = o || X3[t], y = t === Pr.Dots, w = t === Pr.Cross, b = Array.isArray(n) ? n : [n, n], C = [b[0] * m[2] || 1, b[1] * m[2] || 1], _ = E * m[2], k = Array.isArray(a) ? a : [a, a], P = w ? [_, _] : C, T = [
    k[0] * m[2] || 1 + P[0] / 2,
    k[1] * m[2] || 1 + P[1] / 2
  ], I = `${v}${e || ""}`;
  return R.jsxs("svg", { className: nt(["react-flow__background", d]), style: {
    ...f,
    ...Nu,
    "--xy-background-color-props": u,
    "--xy-background-pattern-color-props": l
  }, ref: p, "data-testid": "rf__background", children: [R.jsx("pattern", { id: I, x: m[0] % C[0], y: m[1] % C[1], width: C[0], height: C[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${T[0]},-${T[1]})`, children: y ? R.jsx(K3, { radius: _ / 2, className: h }) : R.jsx(Y3, { dimensions: P, lineWidth: i, variant: t, className: h }) }), R.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${I})` })] });
}
oP.displayName = "Background";
const Z3 = N.memo(oP);
function J3() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: R.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function ez() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: R.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function tz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: R.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function nz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function rz() {
  return R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: R.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Ml({ children: e, className: t, ...n }) {
  return R.jsx("button", { type: "button", className: nt(["react-flow__controls-button", t]), ...n, children: e });
}
const oz = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig
});
function iP({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: o = !0, fitViewOptions: i, onZoomIn: a, onZoomOut: l, onFitView: u, onInteractiveChange: f, className: d, children: h, position: p = "bottom-left", orientation: m = "vertical", "aria-label": v }) {
  const E = He(), { isInteractive: y, minZoomReached: w, maxZoomReached: b, ariaLabelConfig: C } = Me(oz, Qe), { zoomIn: _, zoomOut: k, fitView: P } = qy(), T = () => {
    _(), a == null || a();
  }, I = () => {
    k(), l == null || l();
  }, L = () => {
    P(i), u == null || u();
  }, D = () => {
    E.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), f == null || f(!y);
  }, Y = m === "horizontal" ? "horizontal" : "vertical";
  return R.jsxs(ta, { className: nt(["react-flow__controls", Y, d]), position: p, style: e, "data-testid": "rf__controls", "aria-label": v ?? C["controls.ariaLabel"], children: [t && R.jsxs(R.Fragment, { children: [R.jsx(Ml, { onClick: T, className: "react-flow__controls-zoomin", title: C["controls.zoomIn.ariaLabel"], "aria-label": C["controls.zoomIn.ariaLabel"], disabled: b, children: R.jsx(J3, {}) }), R.jsx(Ml, { onClick: I, className: "react-flow__controls-zoomout", title: C["controls.zoomOut.ariaLabel"], "aria-label": C["controls.zoomOut.ariaLabel"], disabled: w, children: R.jsx(ez, {}) })] }), n && R.jsx(Ml, { className: "react-flow__controls-fitview", onClick: L, title: C["controls.fitView.ariaLabel"], "aria-label": C["controls.fitView.ariaLabel"], children: R.jsx(tz, {}) }), o && R.jsx(Ml, { className: "react-flow__controls-interactive", onClick: D, title: C["controls.interactive.ariaLabel"], "aria-label": C["controls.interactive.ariaLabel"], children: y ? R.jsx(rz, {}) : R.jsx(nz, {}) }), h] });
}
iP.displayName = "Controls";
const iz = N.memo(iP);
function sz({ id: e, x: t, y: n, width: o, height: i, style: a, color: l, strokeColor: u, strokeWidth: f, className: d, borderRadius: h, shapeRendering: p, selected: m, onClick: v }) {
  const { background: E, backgroundColor: y } = a || {}, w = l || E || y;
  return R.jsx("rect", { className: nt(["react-flow__minimap-node", { selected: m }, d]), x: t, y: n, rx: h, ry: h, width: o, height: i, style: {
    fill: w,
    stroke: u,
    strokeWidth: f
  }, shapeRendering: p, onClick: v ? (b) => v(b, e) : void 0 });
}
const az = N.memo(sz), lz = (e) => e.nodes.map((t) => t.id), yd = (e) => e instanceof Function ? e : () => e;
function uz({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: i,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: a = az,
  onClick: l
}) {
  const u = Me(lz, Qe), f = yd(t), d = yd(e), h = yd(n), p = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return R.jsx(R.Fragment, { children: u.map((m) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    R.jsx(fz, { id: m, nodeColorFunc: f, nodeStrokeColorFunc: d, nodeClassNameFunc: h, nodeBorderRadius: o, nodeStrokeWidth: i, NodeComponent: a, onClick: l, shapeRendering: p }, m)
  )) });
}
function cz({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: i, nodeStrokeWidth: a, shapeRendering: l, NodeComponent: u, onClick: f }) {
  const { node: d, x: h, y: p, width: m, height: v } = Me((E) => {
    const { internals: y } = E.nodeLookup.get(e), w = y.userNode, { x: b, y: C } = y.positionAbsolute, { width: _, height: k } = Jn(w);
    return {
      node: w,
      x: b,
      y: C,
      width: _,
      height: k
    };
  }, Qe);
  return !d || d.hidden || !oR(d) ? null : R.jsx(u, { x: h, y: p, width: m, height: v, style: d.style, selected: !!d.selected, className: o(d), color: t(d), borderRadius: i, strokeColor: n(d), strokeWidth: a, shapeRendering: l, onClick: f, id: d.id });
}
const fz = N.memo(cz);
var dz = N.memo(uz);
const hz = 200, pz = 150, gz = (e) => !e.hidden, mz = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? rR(Qs(e.nodeLookup, { filter: gz }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height,
    ariaLabelConfig: e.ariaLabelConfig
  };
}, vz = "react-flow__minimap-desc";
function sP({
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
  ariaLabel: b,
  inversePan: C,
  zoomStep: _ = 1,
  offsetScale: k = 5
}) {
  const P = He(), T = N.useRef(null), { boundingRect: I, viewBB: L, rfId: D, panZoom: Y, translateExtent: $, flowWidth: V, flowHeight: H, ariaLabelConfig: O } = Me(mz, Qe), W = (e == null ? void 0 : e.width) ?? hz, q = (e == null ? void 0 : e.height) ?? pz, U = I.width / W, M = I.height / q, z = Math.max(U, M), Q = z * W, j = z * q, G = k * z, ie = I.x - (Q - I.width) / 2 - G, B = I.y - (j - I.height) / 2 - G, Z = Q + G * 2, ee = j + G * 2, X = `${vz}-${D}`, te = N.useRef(0), se = N.useRef();
  te.current = z, N.useEffect(() => {
    if (T.current && Y)
      return se.current = OD({
        domNode: T.current,
        panZoom: Y,
        getTransform: () => P.getState().transform,
        getViewScale: () => te.current
      }), () => {
        var pe;
        (pe = se.current) == null || pe.destroy();
      };
  }, [Y]), N.useEffect(() => {
    var pe;
    (pe = se.current) == null || pe.update({
      translateExtent: $,
      width: V,
      height: H,
      inversePan: C,
      pannable: y,
      zoomStep: _,
      zoomable: w
    });
  }, [y, w, C, _, $, V, H]);
  const ae = v ? (pe) => {
    var Re;
    const [be, ve] = ((Re = se.current) == null ? void 0 : Re.pointer(pe)) || [0, 0];
    v(pe, { x: be, y: ve });
  } : void 0, ce = E ? N.useCallback((pe, be) => {
    const ve = P.getState().nodeLookup.get(be).internals.userNode;
    E(pe, ve);
  }, []) : void 0, de = b ?? O["minimap.ariaLabel"];
  return R.jsx(ta, { position: m, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-background-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof h == "string" ? h : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof p == "number" ? p * z : void 0,
    "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof l == "number" ? l : void 0
  }, className: nt(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: R.jsxs("svg", { width: W, height: q, viewBox: `${ie} ${B} ${Z} ${ee}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": X, ref: T, onClick: ae, children: [de && R.jsx("title", { id: X, children: de }), R.jsx(dz, { onClick: ce, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: a, nodeClassName: i, nodeStrokeWidth: l, nodeComponent: u }), R.jsx("path", { className: "react-flow__minimap-mask", d: `M${ie - G},${B - G}h${Z + G * 2}v${ee + G * 2}h${-Z - G * 2}z
        M${L.x},${L.y}h${L.width}v${L.height}h${-L.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
sP.displayName = "MiniMap";
N.memo(sP);
const yz = (e) => (t) => e ? `${Math.max(1 / t.transform[2], 1)}` : void 0, xz = {
  [di.Line]: "right",
  [di.Handle]: "bottom-right"
};
function wz({ nodeId: e, position: t, variant: n = di.Handle, className: o, style: i = void 0, children: a, color: l, minWidth: u = 10, minHeight: f = 10, maxWidth: d = Number.MAX_VALUE, maxHeight: h = Number.MAX_VALUE, keepAspectRatio: p = !1, resizeDirection: m, autoScale: v = !0, shouldResize: E, onResizeStart: y, onResize: w, onResizeEnd: b }) {
  const C = DR(), _ = typeof e == "string" ? e : C, k = He(), P = N.useRef(null), T = n === di.Handle, I = Me(N.useCallback(yz(T && v), [T, v]), Qe), L = N.useRef(null), D = t ?? xz[n];
  N.useEffect(() => {
    if (!(!P.current || !_))
      return L.current || (L.current = YD({
        domNode: P.current,
        nodeId: _,
        getStoreItems: () => {
          const { nodeLookup: $, transform: V, snapGrid: H, snapToGrid: O, nodeOrigin: W, domNode: q } = k.getState();
          return {
            nodeLookup: $,
            transform: V,
            snapGrid: H,
            snapToGrid: O,
            nodeOrigin: W,
            paneDomNode: q
          };
        },
        onChange: ($, V) => {
          const { triggerNodeChanges: H, nodeLookup: O, parentLookup: W, nodeOrigin: q } = k.getState(), U = [], M = { x: $.x, y: $.y }, z = O.get(_);
          if (z && z.expandParent && z.parentId) {
            const Q = z.origin ?? q, j = $.width ?? z.measured.width ?? 0, G = $.height ?? z.measured.height ?? 0, ie = {
              id: z.id,
              parentId: z.parentId,
              rect: {
                width: j,
                height: G,
                ...iR({
                  x: $.x ?? z.position.x,
                  y: $.y ?? z.position.y
                }, { width: j, height: G }, z.parentId, O, Q)
              }
            }, B = Dy([ie], O, W, q);
            U.push(...B), M.x = $.x ? Math.max(Q[0] * j, $.x) : void 0, M.y = $.y ? Math.max(Q[1] * G, $.y) : void 0;
          }
          if (M.x !== void 0 && M.y !== void 0) {
            const Q = {
              id: _,
              type: "position",
              position: { ...M }
            };
            U.push(Q);
          }
          if ($.width !== void 0 && $.height !== void 0) {
            const j = {
              id: _,
              type: "dimensions",
              resizing: !0,
              setAttributes: m ? m === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: $.width,
                height: $.height
              }
            };
            U.push(j);
          }
          for (const Q of V) {
            const j = {
              ...Q,
              type: "position"
            };
            U.push(j);
          }
          H(U);
        },
        onEnd: ({ width: $, height: V }) => {
          const H = {
            id: _,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: $,
              height: V
            }
          };
          k.getState().triggerNodeChanges([H]);
        }
      })), L.current.update({
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
        onResizeEnd: b,
        shouldResize: E
      }), () => {
        var $;
        ($ = L.current) == null || $.destroy();
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
    b,
    E
  ]);
  const Y = D.split("-");
  return R.jsx("div", { className: nt(["react-flow__resize-control", "nodrag", ...Y, n, o]), ref: P, style: {
    ...i,
    scale: I,
    ...l && { [T ? "backgroundColor" : "borderColor"]: l }
  }, children: a });
}
N.memo(wz);
function aP(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = aP(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function lP() {
  for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = aP(e)) && (o && (o += " "), o += t);
  return o;
}
const _z = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, bz = (e, t) => ({
  classGroupId: e,
  validator: t
}), uP = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), au = "-", l1 = [], Sz = "arbitrary..", Ez = (e) => {
  const t = kz(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return Cz(l);
      const u = l.split(au), f = u[0] === "" && u.length > 1 ? 1 : 0;
      return cP(u, f, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const f = o[l], d = n[l];
        return f ? d ? _z(d, f) : f : d || l1;
      }
      return n[l] || l1;
    }
  };
}, cP = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const i = e[t], a = n.nextPart.get(i);
  if (a) {
    const d = cP(e, t + 1, a);
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
}, Cz = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? Sz + o : void 0;
})(), kz = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Nz(n, t);
}, Nz = (e, t) => {
  const n = uP();
  for (const o in e) {
    const i = e[o];
    Fy(i, n, o, t);
  }
  return n;
}, Fy = (e, t, n, o) => {
  const i = e.length;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    Rz(l, t, n, o);
  }
}, Rz = (e, t, n, o) => {
  if (typeof e == "string") {
    Pz(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Tz(e, t, n, o);
    return;
  }
  Az(e, t, n, o);
}, Pz = (e, t, n) => {
  const o = e === "" ? t : fP(t, e);
  o.classGroupId = n;
}, Tz = (e, t, n, o) => {
  if (Iz(e)) {
    Fy(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(bz(n, e));
}, Az = (e, t, n, o) => {
  const i = Object.entries(e), a = i.length;
  for (let l = 0; l < a; l++) {
    const [u, f] = i[l];
    Fy(f, fP(t, u), n, o);
  }
}, fP = (e, t) => {
  let n = e;
  const o = t.split(au), i = o.length;
  for (let a = 0; a < i; a++) {
    const l = o[a];
    let u = n.nextPart.get(l);
    u || (u = uP(), n.nextPart.set(l, u)), n = u;
  }
  return n;
}, Iz = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Mz = (e) => {
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
}, uy = "!", u1 = ":", Oz = [], c1 = (e, t, n, o, i) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: i
}), Lz = (e) => {
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
        if (w === u1) {
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
    return c1(a, v, m, E);
  };
  if (t) {
    const i = t + u1, a = o;
    o = (l) => l.startsWith(i) ? a(l.slice(i.length)) : c1(Oz, !1, l, void 0, !0);
  }
  if (n) {
    const i = o;
    o = (a) => n({
      className: a,
      parseClassName: i
    });
  }
  return o;
}, jz = (e) => {
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
}, Dz = (e) => ({
  cache: Mz(e.cacheSize),
  parseClassName: Lz(e),
  sortModifiers: jz(e),
  ...Ez(e)
}), qz = /\s+/, zz = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, l = [], u = e.trim().split(qz);
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
    let w = !!y, b = o(w ? E.substring(0, y) : E);
    if (!b) {
      if (!w) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (b = o(E), !b) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      w = !1;
    }
    const C = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), _ = v ? C + uy : C, k = _ + b;
    if (l.indexOf(k) > -1)
      continue;
    l.push(k);
    const P = i(b, w);
    for (let T = 0; T < P.length; ++T) {
      const I = P[T];
      l.push(_ + I);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
}, Fz = (...e) => {
  let t = 0, n, o, i = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = dP(n)) && (i && (i += " "), i += o);
  return i;
}, dP = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = dP(e[o])) && (n && (n += " "), n += t);
  return n;
}, $z = (e, ...t) => {
  let n, o, i, a;
  const l = (f) => {
    const d = t.reduce((h, p) => p(h), e());
    return n = Dz(d), o = n.cache.get, i = n.cache.set, a = u, u(f);
  }, u = (f) => {
    const d = o(f);
    if (d)
      return d;
    const h = zz(f, n);
    return i(f, h), h;
  };
  return a = l, (...f) => a(Fz(...f));
}, Bz = [], st = (e) => {
  const t = (n) => n[e] || Bz;
  return t.isThemeGetter = !0, t;
}, hP = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pP = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Vz = /^\d+\/\d+$/, Hz = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wz = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Uz = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Gz = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Yz = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xo = (e) => Vz.test(e), Te = (e) => !!e && !Number.isNaN(Number(e)), kr = (e) => !!e && Number.isInteger(Number(e)), xd = (e) => e.endsWith("%") && Te(e.slice(0, -1)), Yn = (e) => Hz.test(e), Kz = () => !0, Xz = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wz.test(e) && !Uz.test(e)
), gP = () => !1, Qz = (e) => Gz.test(e), Zz = (e) => Yz.test(e), Jz = (e) => !we(e) && !_e(e), eF = (e) => gi(e, yP, gP), we = (e) => hP.test(e), eo = (e) => gi(e, xP, Xz), wd = (e) => gi(e, iF, Te), f1 = (e) => gi(e, mP, gP), tF = (e) => gi(e, vP, Zz), Ol = (e) => gi(e, wP, Qz), _e = (e) => pP.test(e), bs = (e) => mi(e, xP), nF = (e) => mi(e, sF), d1 = (e) => mi(e, mP), rF = (e) => mi(e, yP), oF = (e) => mi(e, vP), Ll = (e) => mi(e, wP, !0), gi = (e, t, n) => {
  const o = hP.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, mi = (e, t, n = !1) => {
  const o = pP.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, mP = (e) => e === "position" || e === "percentage", vP = (e) => e === "image" || e === "url", yP = (e) => e === "length" || e === "size" || e === "bg-size", xP = (e) => e === "length", iF = (e) => e === "number", sF = (e) => e === "family-name", wP = (e) => e === "shadow", aF = () => {
  const e = st("color"), t = st("font"), n = st("text"), o = st("font-weight"), i = st("tracking"), a = st("leading"), l = st("breakpoint"), u = st("container"), f = st("spacing"), d = st("radius"), h = st("shadow"), p = st("inset-shadow"), m = st("text-shadow"), v = st("drop-shadow"), E = st("blur"), y = st("perspective"), w = st("aspect"), b = st("ease"), C = st("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], P = () => [...k(), _e, we], T = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], L = () => [_e, we, f], D = () => [Xo, "full", "auto", ...L()], Y = () => [kr, "none", "subgrid", _e, we], $ = () => ["auto", {
    span: ["full", kr, _e, we]
  }, kr, _e, we], V = () => [kr, "auto", _e, we], H = () => ["auto", "min", "max", "fr", _e, we], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...L()], U = () => [Xo, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...L()], M = () => [e, _e, we], z = () => [...k(), d1, f1, {
    position: [_e, we]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", rF, eF, {
    size: [_e, we]
  }], G = () => [xd, bs, eo], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    _e,
    we
  ], B = () => ["", Te, bs, eo], Z = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => [Te, xd, d1, f1], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    E,
    _e,
    we
  ], se = () => ["none", Te, _e, we], ae = () => ["none", Te, _e, we], ce = () => [Te, _e, we], de = () => [Xo, "full", ...L()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Yn],
      breakpoint: [Yn],
      color: [Kz],
      container: [Yn],
      "drop-shadow": [Yn],
      ease: ["in", "out", "in-out"],
      font: [Jz],
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
        basis: [Xo, "full", "auto", u, ...L()]
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
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: L()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": L()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": L()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...O(), "normal"]
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
        content: ["normal", ...O()]
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
        "place-content": O()
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
        p: L()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: L()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: L()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: L()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: L()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: L()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: L()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: L()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: L()
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
        "space-x": L()
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
        "space-y": L()
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
        font: [o, _e, wd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xd, we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nF, we, t]
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
        "line-clamp": [Te, "none", _e, wd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...L()
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
        indent: L()
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
        }, oF, tF]
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
        from: G()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: G()
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
        "mask-radial": [_e, we]
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
        "mask-radial-at": k()
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
        "border-spacing": L()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": L()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": L()
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
        ease: ["linear", "initial", b, _e, we]
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
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
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
        stroke: [Te, bs, eo, wd]
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
}, lF = /* @__PURE__ */ $z(aF);
function Ae(...e) {
  return lF(lP(e));
}
function vi(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? me.Left : me.Right;
    return /* @__PURE__ */ R.jsx(vi, { type: f, position: d, id: u.id });
  }
  const {
    className: t,
    children: n,
    style: o,
    ...i
  } = e, [a, l] = N.useState(!1);
  return /* @__PURE__ */ R.jsx(
    Bs,
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
      className: Ae(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        t
      ),
      children: n
    }
  );
}
function h1(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function yi(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((i) => {
      const a = h1(i, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const a = o[i];
          typeof a == "function" ? a() : h1(e[i], null);
        }
      };
  };
}
function Be(...e) {
  return N.useCallback(yi(...e), e);
}
var uF = Symbol.for("react.lazy"), lu = by[" use ".trim().toString()];
function cF(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function _P(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === uF && "_payload" in e && cF(e._payload);
}
// @__NO_SIDE_EFFECTS__
function fF(e) {
  const t = /* @__PURE__ */ dF(e), n = N.forwardRef((o, i) => {
    let { children: a, ...l } = o;
    _P(a) && typeof lu == "function" && (a = lu(a._payload));
    const u = N.Children.toArray(a), f = u.find(pF);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var $y = /* @__PURE__ */ fF("Slot");
// @__NO_SIDE_EFFECTS__
function dF(e) {
  const t = N.forwardRef((n, o) => {
    let { children: i, ...a } = n;
    if (_P(i) && typeof lu == "function" && (i = lu(i._payload)), N.isValidElement(i)) {
      const l = mF(i), u = gF(a, i.props);
      return i.type !== N.Fragment && (u.ref = o ? yi(o, l) : l), N.cloneElement(i, u);
    }
    return N.Children.count(i) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var hF = Symbol("radix.slottable");
function pF(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === hF;
}
function gF(e, t) {
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
function mF(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const p1 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, g1 = lP, By = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null) return g1(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = t, l = Object.keys(i).map((d) => {
    const h = n == null ? void 0 : n[d], p = a == null ? void 0 : a[d];
    if (h === null) return null;
    const m = p1(h) || p1(p);
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
  return g1(e, l, f, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, vF = By(
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
function bP({
  className: e,
  variant: t,
  asChild: n = !1,
  ...o
}) {
  const i = n ? $y : "span";
  return /* @__PURE__ */ R.jsx(
    i,
    {
      "data-slot": "badge",
      className: Ae(vF({ variant: t }), e),
      ...o
    }
  );
}
const SP = Zt.createContext(null), yF = ({ content: e }) => {
  const t = Zt.useContext(SP);
  if (!t)
    return /* @__PURE__ */ R.jsx("div", { className: "text-muted-foreground text-xs", children: "No node context available" });
  const { nodeId: n, nodeData: o, onValueChange: i } = t;
  switch (e.type) {
    case "inputs":
      return /* @__PURE__ */ R.jsx(xF, { inputs: [] });
    case "outputs":
      return /* @__PURE__ */ R.jsx(wF, { outputs: [] });
    default:
      return /* @__PURE__ */ R.jsx("div", { children: "Unknown content type" });
  }
}, xF = ({ inputs: e }) => e.length === 0 ? null : /* @__PURE__ */ R.jsx("div", { className: "inputs-container flex flex-col gap-2", children: e.map((t) => /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-start", children: [
  /* @__PURE__ */ R.jsx(
    vi,
    {
      type: "target",
      position: me.Left,
      id: t.id
    }
  ),
  /* @__PURE__ */ R.jsx(bP, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: t.label })
] }, `input-${t.id}`)) }), wF = ({ outputs: e }) => e.length === 0 ? null : /* @__PURE__ */ R.jsx("div", { className: "outputs-container flex flex-col gap-2", children: e.map((t) => /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-2 relative min-h-8 justify-end", children: [
  /* @__PURE__ */ R.jsx(bP, { variant: "outline", className: "text-[11px] font-medium shadow-sm", children: t.label }),
  /* @__PURE__ */ R.jsx(
    vi,
    {
      type: "source",
      position: me.Right,
      id: t.id
    }
  )
] }, `output-${t.id}`)) }), _F = ({ item: e }) => {
  const t = bF(e.coordinates);
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `grid-item ${e.class_name || ""}`.trim(),
      style: {
        gridArea: t,
        ...e.style
      },
      "data-grid-item-id": e.id,
      children: /* @__PURE__ */ R.jsx(yF, { content: e.content })
    }
  );
};
function bF(e) {
  const t = e.row + e.row_span, n = e.col + e.col_span;
  return `${e.row} / ${e.col} / ${t} / ${n}`;
}
const SF = ({ layout: e }) => {
  const t = EF(e.grid);
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `grid-layout ${e.class_name || ""}`.trim(),
      style: {
        ...t,
        ...e.style
      },
      children: e.items.map((n) => /* @__PURE__ */ R.jsx(_F, { item: n }, n.id))
    }
  );
};
function EF(e) {
  const t = {
    display: "grid",
    gridTemplateRows: m1(e.rows, e.row_sizes),
    gridTemplateColumns: m1(e.cols, e.col_sizes),
    gap: Array.isArray(e.gap) ? `${e.gap[0]} ${e.gap[1]}` : e.gap || "8px"
  };
  return e.auto_rows && (t.gridAutoRows = e.auto_rows), e.auto_cols && (t.gridAutoColumns = e.auto_cols), e.justify_items && (t.justifyItems = e.justify_items), e.align_items && (t.alignItems = e.align_items), t;
}
function m1(e, t) {
  return typeof e == "number" ? t && t.length > 0 ? t.join(" ") : `repeat(${e}, 1fr)` : e.join(" ");
}
const CF = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row"
};
function EP(e) {
  if ("component" in e) {
    const { component: d } = e, h = d.handle_type === "input" ? "target" : "source", p = d.handle_type === "input" ? me.Left : me.Right, m = d.label + (d.required ? " *" : "");
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
      className: Ae(
        "relative flex items-center",
        CF[a],
        t
      ),
      ref: u,
      children: [
        /* @__PURE__ */ R.jsx(
          vi,
          {
            position: a,
            className: o,
            ...f
          }
        ),
        /* @__PURE__ */ R.jsx("label", { className: Ae("text-foreground px-3", n), children: i })
      ]
    }
  );
}
const kF = {
  [me.Top]: "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [me.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [me.Left]: "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [me.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]"
};
function CP(e) {
  if ("component" in e) {
    const { component: u } = e, f = u.handle_type === "input" ? "target" : "source", d = u.handle_type === "input" ? me.Left : me.Right;
    return /* @__PURE__ */ R.jsx(CP, { type: f, position: d, id: u.id, showButton: !0, children: /* @__PURE__ */ R.jsxs("div", { className: "px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors", children: [
      u.label,
      u.required && /* @__PURE__ */ R.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }) });
  }
  const {
    showButton: t = !0,
    position: n = me.Bottom,
    children: o,
    ...i
  } = e, a = kF[n || me.Bottom], l = n === me.Top || n === me.Bottom;
  return /* @__PURE__ */ R.jsx(vi, { position: n, id: i.id, ...i, children: t && /* @__PURE__ */ R.jsxs(
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
function uu({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ R.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: Ae(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...n
    }
  );
}
function NF(e) {
  if ("component" in e) {
    const { component: a, onValueChange: l } = e;
    return /* @__PURE__ */ R.jsxs("div", { className: "component-text-field", children: [
      /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600 mb-1", children: a.label }),
      /* @__PURE__ */ R.jsx(
        uu,
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
  const { value: t, onChange: n, placeholder: o, label: i } = e;
  return /* @__PURE__ */ R.jsx(
    uu,
    {
      type: "text",
      value: t,
      onChange: (a) => n(a.target.value),
      onMouseDown: (a) => a.stopPropagation(),
      onPointerDown: (a) => a.stopPropagation(),
      placeholder: o,
      "aria-label": i,
      className: "h-8 text-xs"
    }
  );
}
function RF(e) {
  if ("component" in e) {
    const { component: l, onValueChange: u } = e;
    return /* @__PURE__ */ R.jsxs("div", { className: "component-number-field", children: [
      /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600 mb-1", children: l.label }),
      /* @__PURE__ */ R.jsx(
        uu,
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
  const { value: t, onChange: n, isInteger: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ R.jsx(
    uu,
    {
      type: "number",
      value: t,
      step: o ? 1 : "any",
      onChange: (l) => n(Number(l.target.value)),
      onMouseDownCapture: (l) => l.stopPropagation(),
      onPointerDownCapture: (l) => l.stopPropagation(),
      onWheel: (l) => l.currentTarget.blur(),
      placeholder: i,
      "aria-label": a,
      className: "h-8 text-xs"
    }
  );
}
function PF(e, t) {
  const n = N.createContext(t), o = (a) => {
    const { children: l, ...u } = a, f = N.useMemo(() => u, Object.values(u));
    return /* @__PURE__ */ R.jsx(n.Provider, { value: f, children: l });
  };
  o.displayName = e + "Provider";
  function i(a) {
    const l = N.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [o, i];
}
function xi(e, t = []) {
  let n = [];
  function o(a, l) {
    const u = N.createContext(l), f = n.length;
    n = [...n, l];
    const d = (p) => {
      var b;
      const { scope: m, children: v, ...E } = p, y = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[f]) || u, w = N.useMemo(() => E, Object.values(E));
      return /* @__PURE__ */ R.jsx(y.Provider, { value: w, children: v });
    };
    d.displayName = a + "Provider";
    function h(p, m) {
      var y;
      const v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[f]) || u, E = N.useContext(v);
      if (E) return E;
      if (l !== void 0) return l;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, h];
  }
  const i = () => {
    const a = n.map((l) => N.createContext(l));
    return function(u) {
      const f = (u == null ? void 0 : u[e]) || a;
      return N.useMemo(
        () => ({ [`__scope${e}`]: { ...u, [e]: f } }),
        [u, f]
      );
    };
  };
  return i.scopeName = e, [o, TF(i, ...t)];
}
function TF(...e) {
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
      return N.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
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
var yt = globalThis != null && globalThis.document ? N.useLayoutEffect : () => {
}, AF = by[" useInsertionEffect ".trim().toString()] || yt;
function Vs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [i, a, l] = IF({
    defaultProp: t,
    onChange: n
  }), u = e !== void 0, f = u ? e : i;
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
        const m = MF(h) ? h(e) : h;
        m !== e && ((p = l.current) == null || p.call(l, m));
      } else
        a(h);
    },
    [u, e, a, l]
  );
  return [f, d];
}
function IF({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = N.useState(e), i = N.useRef(n), a = N.useRef(t);
  return AF(() => {
    a.current = t;
  }, [t]), N.useEffect(() => {
    var l;
    i.current !== n && ((l = a.current) == null || l.call(a, n), i.current = n);
  }, [n, i]), [n, o, a];
}
function MF(e) {
  return typeof e == "function";
}
function kP(e) {
  const t = N.useRef({ value: e, previous: e });
  return N.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function NP(e) {
  const [t, n] = N.useState(void 0);
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
function OF(e, t) {
  return N.useReducer((n, o) => t[n][o] ?? n, e);
}
var go = (e) => {
  const { present: t, children: n } = e, o = LF(t), i = typeof n == "function" ? n({ present: o.isPresent }) : N.Children.only(n), a = Be(o.ref, jF(i));
  return typeof n == "function" || o.isPresent ? N.cloneElement(i, { ref: a }) : null;
};
go.displayName = "Presence";
function LF(e) {
  const [t, n] = N.useState(), o = N.useRef(null), i = N.useRef(e), a = N.useRef("none"), l = e ? "mounted" : "unmounted", [u, f] = OF(l, {
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
    const d = jl(o.current);
    a.current = u === "mounted" ? d : "none";
  }, [u]), yt(() => {
    const d = o.current, h = i.current;
    if (h !== e) {
      const m = a.current, v = jl(d);
      e ? f("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? f("UNMOUNT") : f(h && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, f]), yt(() => {
    if (t) {
      let d;
      const h = t.ownerDocument.defaultView ?? window, p = (v) => {
        const y = jl(o.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (f("ANIMATION_END"), !i.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, m = (v) => {
        v.target === t && (a.current = jl(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        h.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: N.useCallback((d) => {
      o.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function jl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function jF(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function DF(e) {
  const t = /* @__PURE__ */ qF(e), n = N.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(FF);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function qF(e) {
  const t = N.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (N.isValidElement(i)) {
      const l = BF(i), u = $F(a, i.props);
      return i.type !== N.Fragment && (u.ref = o ? yi(o, l) : l), N.cloneElement(i, u);
    }
    return N.Children.count(i) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var zF = Symbol("radix.slottable");
function FF(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zF;
}
function $F(e, t) {
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
function BF(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var VF = [
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
], De = VF.reduce((e, t) => {
  const n = /* @__PURE__ */ DF(`Primitive.${t}`), o = N.forwardRef((i, a) => {
    const { asChild: l, ...u } = i, f = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ R.jsx(f, { ...u, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function HF(e, t) {
  e && ea.flushSync(() => e.dispatchEvent(t));
}
var Pu = "Checkbox", [WF] = xi(Pu), [UF, Vy] = WF(Pu);
function GF(e) {
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
  } = e, [m, v] = Vs({
    prop: n,
    defaultProp: i ?? !1,
    onChange: f,
    caller: Pu
  }), [E, y] = N.useState(null), [w, b] = N.useState(null), C = N.useRef(!1), _ = E ? !!l || !!E.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
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
    bubbleInput: w,
    setBubbleInput: b
  };
  return /* @__PURE__ */ R.jsx(
    UF,
    {
      scope: t,
      ...k,
      children: YF(p) ? p(k) : o
    }
  );
}
var RP = "CheckboxTrigger", PP = N.forwardRef(
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
    } = Vy(RP, e), y = Be(i, h), w = N.useRef(f);
    return N.useEffect(() => {
      const b = a == null ? void 0 : a.form;
      if (b) {
        const C = () => p(w.current);
        return b.addEventListener("reset", C), () => b.removeEventListener("reset", C);
      }
    }, [a, p]), /* @__PURE__ */ R.jsx(
      De.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Tr(f) ? "mixed" : f,
        "aria-required": d,
        "data-state": LP(f),
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
PP.displayName = RP;
var TP = N.forwardRef(
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
      GF,
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
            PP,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ R.jsx(
            OP,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
TP.displayName = Pu;
var AP = "CheckboxIndicator", IP = N.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...i } = e, a = Vy(AP, n);
    return /* @__PURE__ */ R.jsx(
      go,
      {
        present: o || Tr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ R.jsx(
          De.span,
          {
            "data-state": LP(a.checked),
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
IP.displayName = AP;
var MP = "CheckboxBubbleInput", OP = N.forwardRef(
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
    } = Vy(MP, e), E = Be(n, v), y = kP(a), w = NP(o);
    N.useEffect(() => {
      const C = m;
      if (!C) return;
      const _ = window.HTMLInputElement.prototype, P = Object.getOwnPropertyDescriptor(
        _,
        "checked"
      ).set, T = !i.current;
      if (y !== a && P) {
        const I = new Event("click", { bubbles: T });
        C.indeterminate = Tr(a), P.call(C, Tr(a) ? !1 : a), C.dispatchEvent(I);
      }
    }, [m, y, a, i]);
    const b = N.useRef(Tr(a) ? !1 : a);
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
OP.displayName = MP;
function YF(e) {
  return typeof e == "function";
}
function Tr(e) {
  return e === "indeterminate";
}
function LP(e) {
  return Tr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KF = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), XF = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), v1 = (e) => {
  const t = XF(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, jP = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), QF = (e) => {
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
var ZF = {
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
const JF = N.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: i = "",
    children: a,
    iconNode: l,
    ...u
  }, f) => N.createElement(
    "svg",
    {
      ref: f,
      ...ZF,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: jP("lucide", i),
      ...!a && !QF(u) && { "aria-hidden": "true" },
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
const Ln = (e, t) => {
  const n = N.forwardRef(
    ({ className: o, ...i }, a) => N.createElement(JF, {
      ref: a,
      iconNode: t,
      className: jP(
        `lucide-${KF(v1(e))}`,
        `lucide-${e}`,
        o
      ),
      ...i
    })
  );
  return n.displayName = v1(e), n;
};
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e4 = [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
], t4 = Ln("arrow-down-wide-narrow", e4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n4 = [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
], r4 = Ln("arrow-right-from-line", n4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], DP = Ln("check", o4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], qP = Ln("chevron-down", i4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], a4 = Ln("chevron-up", s4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l4 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], u4 = Ln("download", l4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], f4 = Ln("panel-left", c4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], h4 = Ln("plus", d4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p4 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], g4 = Ln("trash-2", p4);
/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m4 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], v4 = Ln("x", m4);
function y1({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    TP,
    {
      "data-slot": "checkbox",
      className: Ae(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(
        IP,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ R.jsx(DP, { className: "size-3.5" })
        }
      )
    }
  );
}
function y4(e) {
  if ("component" in e) {
    const { component: i, onValueChange: a } = e;
    return /* @__PURE__ */ R.jsxs("div", { className: "component-bool-field flex items-center gap-2", children: [
      /* @__PURE__ */ R.jsx(
        y1,
        {
          checked: i.value || !1,
          onCheckedChange: (l) => a == null ? void 0 : a(i.id, l === !0),
          onMouseDown: (l) => l.stopPropagation(),
          onPointerDown: (l) => l.stopPropagation(),
          "aria-label": i.label,
          className: "h-4 w-4"
        }
      ),
      /* @__PURE__ */ R.jsx("label", { className: "text-sm text-gray-700", children: i.label })
    ] });
  }
  const { value: t, onChange: n, label: o } = e;
  return /* @__PURE__ */ R.jsx(
    y1,
    {
      checked: t,
      onCheckedChange: (i) => n(i === !0),
      onMouseDown: (i) => i.stopPropagation(),
      onPointerDown: (i) => i.stopPropagation(),
      "aria-label": o,
      className: "h-4 w-4"
    }
  );
}
function x1(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function w1(e) {
  const t = /* @__PURE__ */ x4(e), n = N.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(_4);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function x4(e) {
  const t = N.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (N.isValidElement(i)) {
      const l = S4(i), u = b4(a, i.props);
      return i.type !== N.Fragment && (u.ref = o ? yi(o, l) : l), N.cloneElement(i, u);
    }
    return N.Children.count(i) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var w4 = Symbol("radix.slottable");
function _4(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === w4;
}
function b4(e, t) {
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
function S4(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function E4(e) {
  const t = e + "CollectionProvider", [n, o] = xi(t), [i, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (y) => {
    const { scope: w, children: b } = y, C = Zt.useRef(null), _ = Zt.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ R.jsx(i, { scope: w, itemMap: _, collectionRef: C, children: b });
  };
  l.displayName = t;
  const u = e + "CollectionSlot", f = /* @__PURE__ */ w1(u), d = Zt.forwardRef(
    (y, w) => {
      const { scope: b, children: C } = y, _ = a(u, b), k = Be(w, _.collectionRef);
      return /* @__PURE__ */ R.jsx(f, { ref: k, children: C });
    }
  );
  d.displayName = u;
  const h = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ w1(h), v = Zt.forwardRef(
    (y, w) => {
      const { scope: b, children: C, ..._ } = y, k = Zt.useRef(null), P = Be(w, k), T = a(h, b);
      return Zt.useEffect(() => (T.itemMap.set(k, { ref: k, ..._ }), () => void T.itemMap.delete(k))), /* @__PURE__ */ R.jsx(m, { [p]: "", ref: P, children: C });
    }
  );
  v.displayName = h;
  function E(y) {
    const w = a(e + "CollectionConsumer", y);
    return Zt.useCallback(() => {
      const C = w.collectionRef.current;
      if (!C) return [];
      const _ = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (T, I) => _.indexOf(T.ref.current) - _.indexOf(I.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: l, Slot: d, ItemSlot: v },
    E,
    o
  ];
}
var C4 = N.createContext(void 0);
function k4(e) {
  const t = N.useContext(C4);
  return e || t || "ltr";
}
function uo(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), N.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function N4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = uo(e);
  N.useEffect(() => {
    const o = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var R4 = "DismissableLayer", cy = "dismissableLayer.update", P4 = "dismissableLayer.pointerDownOutside", T4 = "dismissableLayer.focusOutside", _1, zP = N.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Tu = N.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...f
    } = e, d = N.useContext(zP), [h, p] = N.useState(null), m = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = N.useState({}), E = Be(t, (I) => p(I)), y = Array.from(d.layers), [w] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(w), C = h ? y.indexOf(h) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= b, P = M4((I) => {
      const L = I.target, D = [...d.branches].some((Y) => Y.contains(L));
      !k || D || (i == null || i(I), l == null || l(I), I.defaultPrevented || u == null || u());
    }, m), T = O4((I) => {
      const L = I.target;
      [...d.branches].some((Y) => Y.contains(L)) || (a == null || a(I), l == null || l(I), I.defaultPrevented || u == null || u());
    }, m);
    return N4((I) => {
      C === d.layers.size - 1 && (o == null || o(I), !I.defaultPrevented && u && (I.preventDefault(), u()));
    }, m), N.useEffect(() => {
      if (h)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (_1 = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(h)), d.layers.add(h), b1(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = _1);
        };
    }, [h, m, n, d]), N.useEffect(() => () => {
      h && (d.layers.delete(h), d.layersWithOutsidePointerEventsDisabled.delete(h), b1());
    }, [h, d]), N.useEffect(() => {
      const I = () => v({});
      return document.addEventListener(cy, I), () => document.removeEventListener(cy, I);
    }, []), /* @__PURE__ */ R.jsx(
      De.div,
      {
        ...f,
        ref: E,
        style: {
          pointerEvents: _ ? k ? "auto" : "none" : void 0,
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
Tu.displayName = R4;
var A4 = "DismissableLayerBranch", I4 = N.forwardRef((e, t) => {
  const n = N.useContext(zP), o = N.useRef(null), i = Be(t, o);
  return N.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ R.jsx(De.div, { ...e, ref: i });
});
I4.displayName = A4;
function M4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = uo(e), o = N.useRef(!1), i = N.useRef(() => {
  });
  return N.useEffect(() => {
    const a = (u) => {
      if (u.target && !o.current) {
        let f = function() {
          FP(
            P4,
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
function O4(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = uo(e), o = N.useRef(!1);
  return N.useEffect(() => {
    const i = (a) => {
      a.target && !o.current && FP(T4, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function b1() {
  const e = new CustomEvent(cy);
  document.dispatchEvent(e);
}
function FP(e, t, n, { discrete: o }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), o ? HF(i, a) : i.dispatchEvent(a);
}
var _d = 0;
function $P() {
  N.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? S1()), document.body.insertAdjacentElement("beforeend", e[1] ?? S1()), _d++, () => {
      _d === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), _d--;
    };
  }, []);
}
function S1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var bd = "focusScope.autoFocusOnMount", Sd = "focusScope.autoFocusOnUnmount", E1 = { bubbles: !1, cancelable: !0 }, L4 = "FocusScope", Hy = N.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a,
    ...l
  } = e, [u, f] = N.useState(null), d = uo(i), h = uo(a), p = N.useRef(null), m = Be(t, (y) => f(y)), v = N.useRef({
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
        if (v.paused || !u) return;
        const k = _.target;
        u.contains(k) ? p.current = k : Nr(p.current, { select: !0 });
      }, w = function(_) {
        if (v.paused || !u) return;
        const k = _.relatedTarget;
        k !== null && (u.contains(k) || Nr(p.current, { select: !0 }));
      }, b = function(_) {
        if (document.activeElement === document.body)
          for (const P of _)
            P.removedNodes.length > 0 && Nr(u);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", w);
      const C = new MutationObserver(b);
      return u && C.observe(u, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", w), C.disconnect();
      };
    }
  }, [o, u, v.paused]), N.useEffect(() => {
    if (u) {
      k1.add(v);
      const y = document.activeElement;
      if (!u.contains(y)) {
        const b = new CustomEvent(bd, E1);
        u.addEventListener(bd, d), u.dispatchEvent(b), b.defaultPrevented || (j4($4(BP(u)), { select: !0 }), document.activeElement === y && Nr(u));
      }
      return () => {
        u.removeEventListener(bd, d), setTimeout(() => {
          const b = new CustomEvent(Sd, E1);
          u.addEventListener(Sd, h), u.dispatchEvent(b), b.defaultPrevented || Nr(y ?? document.body, { select: !0 }), u.removeEventListener(Sd, h), k1.remove(v);
        }, 0);
      };
    }
  }, [u, d, h, v]);
  const E = N.useCallback(
    (y) => {
      if (!n && !o || v.paused) return;
      const w = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, b = document.activeElement;
      if (w && b) {
        const C = y.currentTarget, [_, k] = D4(C);
        _ && k ? !y.shiftKey && b === k ? (y.preventDefault(), n && Nr(_, { select: !0 })) : y.shiftKey && b === _ && (y.preventDefault(), n && Nr(k, { select: !0 })) : b === C && y.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ R.jsx(De.div, { tabIndex: -1, ...l, ref: m, onKeyDown: E });
});
Hy.displayName = L4;
function j4(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Nr(o, { select: t }), document.activeElement !== n) return;
}
function D4(e) {
  const t = BP(e), n = C1(t, e), o = C1(t.reverse(), e);
  return [n, o];
}
function BP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function C1(e, t) {
  for (const n of e)
    if (!q4(n, { upTo: t })) return n;
}
function q4(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function z4(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && z4(e) && t && e.select();
  }
}
var k1 = F4();
function F4() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = N1(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = N1(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function N1(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function $4(e) {
  return e.filter((t) => t.tagName !== "A");
}
var B4 = by[" useId ".trim().toString()] || (() => {
}), V4 = 0;
function io(e) {
  const [t, n] = N.useState(B4());
  return yt(() => {
    n((o) => o ?? String(V4++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const H4 = ["top", "right", "bottom", "left"], Ar = Math.min, jt = Math.max, cu = Math.round, Dl = Math.floor, An = (e) => ({
  x: e,
  y: e
}), W4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, U4 = {
  start: "end",
  end: "start"
};
function fy(e, t, n) {
  return jt(e, Ar(t, n));
}
function Qn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zn(e) {
  return e.split("-")[0];
}
function wi(e) {
  return e.split("-")[1];
}
function Wy(e) {
  return e === "x" ? "y" : "x";
}
function Uy(e) {
  return e === "y" ? "height" : "width";
}
const G4 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Pn(e) {
  return G4.has(Zn(e)) ? "y" : "x";
}
function Gy(e) {
  return Wy(Pn(e));
}
function Y4(e, t, n) {
  n === void 0 && (n = !1);
  const o = wi(e), i = Gy(e), a = Uy(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (l = fu(l)), [l, fu(l)];
}
function K4(e) {
  const t = fu(e);
  return [dy(e), t, dy(t)];
}
function dy(e) {
  return e.replace(/start|end/g, (t) => U4[t]);
}
const R1 = ["left", "right"], P1 = ["right", "left"], X4 = ["top", "bottom"], Q4 = ["bottom", "top"];
function Z4(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? P1 : R1 : t ? R1 : P1;
    case "left":
    case "right":
      return t ? X4 : Q4;
    default:
      return [];
  }
}
function J4(e, t, n, o) {
  const i = wi(e);
  let a = Z4(Zn(e), n === "start", o);
  return i && (a = a.map((l) => l + "-" + i), t && (a = a.concat(a.map(dy)))), a;
}
function fu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => W4[t]);
}
function e$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function VP(e) {
  return typeof e != "number" ? e$(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function du(e) {
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
function T1(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const a = Pn(t), l = Gy(t), u = Uy(l), f = Zn(t), d = a === "y", h = o.x + o.width / 2 - i.width / 2, p = o.y + o.height / 2 - i.height / 2, m = o[u] / 2 - i[u] / 2;
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
  switch (wi(t)) {
    case "start":
      v[l] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[l] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const t$ = async (e, t, n) => {
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
  } = T1(d, o, f), m = o, v = {}, E = 0;
  for (let y = 0; y < u.length; y++) {
    const {
      name: w,
      fn: b
    } = u[y], {
      x: C,
      y: _,
      data: k,
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
      [w]: {
        ...v[w],
        ...k
      }
    }, P && E <= 50 && (E++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (d = P.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : P.rects), {
      x: h,
      y: p
    } = T1(d, m, f)), y = -1);
  }
  return {
    x: h,
    y: p,
    placement: m,
    strategy: i,
    middlewareData: v
  };
};
async function Hs(e, t) {
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
  } = Qn(t, e), E = VP(v), w = u[m ? p === "floating" ? "reference" : "floating" : p], b = du(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(u.floating)),
    boundary: d,
    rootBoundary: h,
    strategy: f
  })), C = p === "floating" ? {
    x: o,
    y: i,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, _ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u.floating)), k = await (a.isElement == null ? void 0 : a.isElement(_)) ? await (a.getScale == null ? void 0 : a.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = du(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: _,
    strategy: f
  }) : C);
  return {
    top: (b.top - P.top + E.top) / k.y,
    bottom: (P.bottom - b.bottom + E.bottom) / k.y,
    left: (b.left - P.left + E.left) / k.x,
    right: (P.right - b.right + E.right) / k.x
  };
}
const n$ = (e) => ({
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
    const p = VP(h), m = {
      x: n,
      y: o
    }, v = Gy(i), E = Uy(v), y = await l.getDimensions(d), w = v === "y", b = w ? "top" : "left", C = w ? "bottom" : "right", _ = w ? "clientHeight" : "clientWidth", k = a.reference[E] + a.reference[v] - m[v] - a.floating[E], P = m[v] - a.reference[v], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let I = T ? T[_] : 0;
    (!I || !await (l.isElement == null ? void 0 : l.isElement(T))) && (I = u.floating[_] || a.floating[E]);
    const L = k / 2 - P / 2, D = I / 2 - y[E] / 2 - 1, Y = Ar(p[b], D), $ = Ar(p[C], D), V = Y, H = I - y[E] - $, O = I / 2 - y[E] / 2 + L, W = fy(V, O, H), q = !f.arrow && wi(i) != null && O !== W && a.reference[E] / 2 - (O < V ? Y : $) - y[E] / 2 < 0, U = q ? O < V ? O - V : O - H : 0;
    return {
      [v]: m[v] + U,
      data: {
        [v]: W,
        centerOffset: O - W - U,
        ...q && {
          alignmentOffset: U
        }
      },
      reset: q
    };
  }
}), r$ = function(e) {
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
      const b = Zn(i), C = Pn(u), _ = Zn(u) === u, k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), P = m || (_ || !y ? [fu(u)] : K4(u)), T = E !== "none";
      !m && T && P.push(...J4(u, y, E, k));
      const I = [u, ...P], L = await Hs(t, w), D = [];
      let Y = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (h && D.push(L[b]), p) {
        const O = Y4(i, l, k);
        D.push(L[O[0]], L[O[1]]);
      }
      if (Y = [...Y, {
        placement: i,
        overflows: D
      }], !D.every((O) => O <= 0)) {
        var $, V;
        const O = ((($ = a.flip) == null ? void 0 : $.index) || 0) + 1, W = I[O];
        if (W && (!(p === "alignment" ? C !== Pn(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((M) => Pn(M.placement) === C ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: O,
              overflows: Y
            },
            reset: {
              placement: W
            }
          };
        let q = (V = Y.filter((U) => U.overflows[0] <= 0).sort((U, M) => U.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!q)
          switch (v) {
            case "bestFit": {
              var H;
              const U = (H = Y.filter((M) => {
                if (T) {
                  const z = Pn(M.placement);
                  return z === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((z) => z > 0).reduce((z, Q) => z + Q, 0)]).sort((M, z) => M[1] - z[1])[0]) == null ? void 0 : H[0];
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
function A1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function I1(e) {
  return H4.some((t) => e[t] >= 0);
}
const o$ = function(e) {
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
          const a = await Hs(t, {
            ...i,
            elementContext: "reference"
          }), l = A1(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: I1(l)
            }
          };
        }
        case "escaped": {
          const a = await Hs(t, {
            ...i,
            altBoundary: !0
          }), l = A1(a, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: I1(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, HP = /* @__PURE__ */ new Set(["left", "top"]);
async function i$(e, t) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = Zn(n), u = wi(n), f = Pn(n) === "y", d = HP.has(l) ? -1 : 1, h = a && f ? -1 : 1, p = Qn(t, e);
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
const s$ = function(e) {
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
      } = t, f = await i$(t, e);
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
}, a$ = function(e) {
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
              x: b,
              y: C
            } = w;
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
      }, h = await Hs(t, f), p = Pn(Zn(i)), m = Wy(p);
      let v = d[m], E = d[p];
      if (a) {
        const w = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", C = v + h[w], _ = v - h[b];
        v = fy(C, v, _);
      }
      if (l) {
        const w = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", C = E + h[w], _ = E - h[b];
        E = fy(C, E, _);
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
}, l$ = function(e) {
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
      }, p = Pn(i), m = Wy(p);
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
        const _ = m === "y" ? "height" : "width", k = a.reference[m] - a.floating[_] + w.mainAxis, P = a.reference[m] + a.reference[_] - w.mainAxis;
        v < k ? v = k : v > P && (v = P);
      }
      if (d) {
        var b, C;
        const _ = m === "y" ? "width" : "height", k = HP.has(Zn(i)), P = a.reference[p] - a.floating[_] + (k && ((b = l.offset) == null ? void 0 : b[p]) || 0) + (k ? 0 : w.crossAxis), T = a.reference[p] + a.reference[_] + (k ? 0 : ((C = l.offset) == null ? void 0 : C[p]) || 0) - (k ? w.crossAxis : 0);
        E < P ? E = P : E > T && (E = T);
      }
      return {
        [m]: v,
        [p]: E
      };
    }
  };
}, u$ = function(e) {
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
      } = Qn(e, t), h = await Hs(t, d), p = Zn(i), m = wi(i), v = Pn(i) === "y", {
        width: E,
        height: y
      } = a.floating;
      let w, b;
      p === "top" || p === "bottom" ? (w = p, b = m === (await (l.isRTL == null ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (b = p, w = m === "end" ? "top" : "bottom");
      const C = y - h.top - h.bottom, _ = E - h.left - h.right, k = Ar(y - h[w], C), P = Ar(E - h[b], _), T = !t.middlewareData.shift;
      let I = k, L = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (L = _), (o = t.middlewareData.shift) != null && o.enabled.y && (I = C), T && !m) {
        const Y = jt(h.left, 0), $ = jt(h.right, 0), V = jt(h.top, 0), H = jt(h.bottom, 0);
        v ? L = E - 2 * (Y !== 0 || $ !== 0 ? Y + $ : jt(h.left, h.right)) : I = y - 2 * (V !== 0 || H !== 0 ? V + H : jt(h.top, h.bottom));
      }
      await f({
        ...t,
        availableWidth: L,
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
function Au() {
  return typeof window < "u";
}
function _i(e) {
  return WP(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
  var t;
  return (t = (WP(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function WP(e) {
  return Au() ? e instanceof Node || e instanceof qt(e).Node : !1;
}
function gn(e) {
  return Au() ? e instanceof Element || e instanceof qt(e).Element : !1;
}
function Mn(e) {
  return Au() ? e instanceof HTMLElement || e instanceof qt(e).HTMLElement : !1;
}
function M1(e) {
  return !Au() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qt(e).ShadowRoot;
}
const c$ = /* @__PURE__ */ new Set(["inline", "contents"]);
function na(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = mn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !c$.has(i);
}
const f$ = /* @__PURE__ */ new Set(["table", "td", "th"]);
function d$(e) {
  return f$.has(_i(e));
}
const h$ = [":popover-open", ":modal"];
function Iu(e) {
  return h$.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const p$ = ["transform", "translate", "scale", "rotate", "perspective"], g$ = ["transform", "translate", "scale", "rotate", "perspective", "filter"], m$ = ["paint", "layout", "strict", "content"];
function Yy(e) {
  const t = Ky(), n = gn(e) ? mn(e) : e;
  return p$.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || g$.some((o) => (n.willChange || "").includes(o)) || m$.some((o) => (n.contain || "").includes(o));
}
function v$(e) {
  let t = Ir(e);
  for (; Mn(t) && !hi(t); ) {
    if (Yy(t))
      return t;
    if (Iu(t))
      return null;
    t = Ir(t);
  }
  return null;
}
function Ky() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const y$ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function hi(e) {
  return y$.has(_i(e));
}
function mn(e) {
  return qt(e).getComputedStyle(e);
}
function Mu(e) {
  return gn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ir(e) {
  if (_i(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    M1(e) && e.host || // Fallback.
    jn(e)
  );
  return M1(t) ? t.host : t;
}
function UP(e) {
  const t = Ir(e);
  return hi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mn(t) && na(t) ? t : UP(t);
}
function Ws(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = UP(e), a = i === ((o = e.ownerDocument) == null ? void 0 : o.body), l = qt(i);
  if (a) {
    const u = hy(l);
    return t.concat(l, l.visualViewport || [], na(i) ? i : [], u && n ? Ws(u) : []);
  }
  return t.concat(i, Ws(i, [], n));
}
function hy(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function GP(e) {
  const t = mn(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = Mn(e), a = i ? e.offsetWidth : n, l = i ? e.offsetHeight : o, u = cu(n) !== a || cu(o) !== l;
  return u && (n = a, o = l), {
    width: n,
    height: o,
    $: u
  };
}
function Xy(e) {
  return gn(e) ? e : e.contextElement;
}
function oi(e) {
  const t = Xy(e);
  if (!Mn(t))
    return An(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: a
  } = GP(t);
  let l = (a ? cu(n.width) : n.width) / o, u = (a ? cu(n.height) : n.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const x$ = /* @__PURE__ */ An(0);
function YP(e) {
  const t = qt(e);
  return !Ky() || !t.visualViewport ? x$ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function w$(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== qt(e) ? !1 : t;
}
function co(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = Xy(e);
  let l = An(1);
  t && (o ? gn(o) && (l = oi(o)) : l = oi(e));
  const u = w$(a, n, o) ? YP(a) : An(0);
  let f = (i.left + u.x) / l.x, d = (i.top + u.y) / l.y, h = i.width / l.x, p = i.height / l.y;
  if (a) {
    const m = qt(a), v = o && gn(o) ? qt(o) : o;
    let E = m, y = hy(E);
    for (; y && o && v !== E; ) {
      const w = oi(y), b = y.getBoundingClientRect(), C = mn(y), _ = b.left + (y.clientLeft + parseFloat(C.paddingLeft)) * w.x, k = b.top + (y.clientTop + parseFloat(C.paddingTop)) * w.y;
      f *= w.x, d *= w.y, h *= w.x, p *= w.y, f += _, d += k, E = qt(y), y = hy(E);
    }
  }
  return du({
    width: h,
    height: p,
    x: f,
    y: d
  });
}
function Ou(e, t) {
  const n = Mu(e).scrollLeft;
  return t ? t.left + n : co(jn(e)).left + n;
}
function KP(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - Ou(e, n), i = n.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function _$(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: i
  } = e;
  const a = i === "fixed", l = jn(o), u = t ? Iu(t.floating) : !1;
  if (o === l || u && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = An(1);
  const h = An(0), p = Mn(o);
  if ((p || !p && !a) && ((_i(o) !== "body" || na(l)) && (f = Mu(o)), Mn(o))) {
    const v = co(o);
    d = oi(o), h.x = v.x + o.clientLeft, h.y = v.y + o.clientTop;
  }
  const m = l && !p && !a ? KP(l, f) : An(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + h.x + m.x,
    y: n.y * d.y - f.scrollTop * d.y + h.y + m.y
  };
}
function b$(e) {
  return Array.from(e.getClientRects());
}
function S$(e) {
  const t = jn(e), n = Mu(e), o = e.ownerDocument.body, i = jt(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = jt(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -n.scrollLeft + Ou(e);
  const u = -n.scrollTop;
  return mn(o).direction === "rtl" && (l += jt(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
const O1 = 25;
function E$(e, t) {
  const n = qt(e), o = jn(e), i = n.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, u = 0, f = 0;
  if (i) {
    a = i.width, l = i.height;
    const h = Ky();
    (!h || h && t === "fixed") && (u = i.offsetLeft, f = i.offsetTop);
  }
  const d = Ou(o);
  if (d <= 0) {
    const h = o.ownerDocument, p = h.body, m = getComputedStyle(p), v = h.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, E = Math.abs(o.clientWidth - p.clientWidth - v);
    E <= O1 && (a -= E);
  } else d <= O1 && (a += d);
  return {
    width: a,
    height: l,
    x: u,
    y: f
  };
}
const C$ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function k$(e, t) {
  const n = co(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, a = Mn(e) ? oi(e) : An(1), l = e.clientWidth * a.x, u = e.clientHeight * a.y, f = i * a.x, d = o * a.y;
  return {
    width: l,
    height: u,
    x: f,
    y: d
  };
}
function L1(e, t, n) {
  let o;
  if (t === "viewport")
    o = E$(e, n);
  else if (t === "document")
    o = S$(jn(e));
  else if (gn(t))
    o = k$(t, n);
  else {
    const i = YP(e);
    o = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return du(o);
}
function XP(e, t) {
  const n = Ir(e);
  return n === t || !gn(n) || hi(n) ? !1 : mn(n).position === "fixed" || XP(n, t);
}
function N$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ws(e, [], !1).filter((u) => gn(u) && _i(u) !== "body"), i = null;
  const a = mn(e).position === "fixed";
  let l = a ? Ir(e) : e;
  for (; gn(l) && !hi(l); ) {
    const u = mn(l), f = Yy(l);
    !f && u.position === "fixed" && (i = null), (a ? !f && !i : !f && u.position === "static" && !!i && C$.has(i.position) || na(l) && !f && XP(e, l)) ? o = o.filter((h) => h !== l) : i = u, l = Ir(l);
  }
  return t.set(e, o), o;
}
function R$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const l = [...n === "clippingAncestors" ? Iu(t) ? [] : N$(t, this._c) : [].concat(n), o], u = l[0], f = l.reduce((d, h) => {
    const p = L1(t, h, i);
    return d.top = jt(p.top, d.top), d.right = Ar(p.right, d.right), d.bottom = Ar(p.bottom, d.bottom), d.left = jt(p.left, d.left), d;
  }, L1(t, u, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function P$(e) {
  const {
    width: t,
    height: n
  } = GP(e);
  return {
    width: t,
    height: n
  };
}
function T$(e, t, n) {
  const o = Mn(t), i = jn(t), a = n === "fixed", l = co(e, !0, a, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = An(0);
  function d() {
    f.x = Ou(i);
  }
  if (o || !o && !a)
    if ((_i(t) !== "body" || na(i)) && (u = Mu(t)), o) {
      const v = co(t, !0, a, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else i && d();
  a && !o && i && d();
  const h = i && !o && !a ? KP(i, u) : An(0), p = l.left + u.scrollLeft - f.x - h.x, m = l.top + u.scrollTop - f.y - h.y;
  return {
    x: p,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Ed(e) {
  return mn(e).position === "static";
}
function j1(e, t) {
  if (!Mn(e) || mn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return jn(e) === n && (n = n.ownerDocument.body), n;
}
function QP(e, t) {
  const n = qt(e);
  if (Iu(e))
    return n;
  if (!Mn(e)) {
    let i = Ir(e);
    for (; i && !hi(i); ) {
      if (gn(i) && !Ed(i))
        return i;
      i = Ir(i);
    }
    return n;
  }
  let o = j1(e, t);
  for (; o && d$(o) && Ed(o); )
    o = j1(o, t);
  return o && hi(o) && Ed(o) && !Yy(o) ? n : o || v$(e) || n;
}
const A$ = async function(e) {
  const t = this.getOffsetParent || QP, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: T$(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function I$(e) {
  return mn(e).direction === "rtl";
}
const M$ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _$,
  getDocumentElement: jn,
  getClippingRect: R$,
  getOffsetParent: QP,
  getElementRects: A$,
  getClientRects: b$,
  getDimensions: P$,
  getScale: oi,
  isElement: gn,
  isRTL: I$
};
function ZP(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function O$(e, t) {
  let n = null, o;
  const i = jn(e);
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
    const E = Dl(p), y = Dl(i.clientWidth - (h + m)), w = Dl(i.clientHeight - (p + v)), b = Dl(h), _ = {
      rootMargin: -E + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: jt(0, Ar(1, f)) || 1
    };
    let k = !0;
    function P(T) {
      const I = T[0].intersectionRatio;
      if (I !== f) {
        if (!k)
          return l();
        I ? l(!1, I) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !ZP(d, e.getBoundingClientRect()) && l(), k = !1;
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
function L$(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = Xy(e), h = i || a ? [...d ? Ws(d) : [], ...Ws(t)] : [];
  h.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const p = d && u ? O$(d, n) : null;
  let m = -1, v = null;
  l && (v = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var _;
      (_ = v) == null || _.observe(t);
    })), n();
  }), d && !f && v.observe(d), v.observe(t));
  let E, y = f ? co(e) : null;
  f && w();
  function w() {
    const b = co(e);
    y && !ZP(y, b) && n(), y = b, E = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    h.forEach((C) => {
      i && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p == null || p(), (b = v) == null || b.disconnect(), v = null, f && cancelAnimationFrame(E);
  };
}
const j$ = s$, D$ = a$, q$ = r$, z$ = u$, F$ = o$, D1 = n$, $$ = l$, B$ = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: M$,
    ...n
  }, a = {
    ...i.platform,
    _c: o
  };
  return t$(e, t, {
    ...i,
    platform: a
  });
};
var V$ = typeof document < "u", H$ = function() {
}, Gl = V$ ? N.useLayoutEffect : H$;
function hu(e, t) {
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
        if (!hu(e[o], t[o]))
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
      if (!(a === "_owner" && e.$$typeof) && !hu(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function JP(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function q1(e, t) {
  const n = JP(e);
  return Math.round(t * n) / n;
}
function Cd(e) {
  const t = N.useRef(e);
  return Gl(() => {
    t.current = e;
  }), t;
}
function W$(e) {
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
  } = e, [h, p] = N.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = N.useState(o);
  hu(m, o) || v(o);
  const [E, y] = N.useState(null), [w, b] = N.useState(null), C = N.useCallback((M) => {
    M !== T.current && (T.current = M, y(M));
  }, []), _ = N.useCallback((M) => {
    M !== I.current && (I.current = M, b(M));
  }, []), k = a || E, P = l || w, T = N.useRef(null), I = N.useRef(null), L = N.useRef(h), D = f != null, Y = Cd(f), $ = Cd(i), V = Cd(d), H = N.useCallback(() => {
    if (!T.current || !I.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: m
    };
    $.current && (M.platform = $.current), B$(T.current, I.current, M).then((z) => {
      const Q = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      O.current && !hu(L.current, Q) && (L.current = Q, ea.flushSync(() => {
        p(Q);
      }));
    });
  }, [m, t, n, $, V]);
  Gl(() => {
    d === !1 && L.current.isPositioned && (L.current.isPositioned = !1, p((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const O = N.useRef(!1);
  Gl(() => (O.current = !0, () => {
    O.current = !1;
  }), []), Gl(() => {
    if (k && (T.current = k), P && (I.current = P), k && P) {
      if (Y.current)
        return Y.current(k, P, H);
      H();
    }
  }, [k, P, H, Y, D]);
  const W = N.useMemo(() => ({
    reference: T,
    floating: I,
    setReference: C,
    setFloating: _
  }), [C, _]), q = N.useMemo(() => ({
    reference: k,
    floating: P
  }), [k, P]), U = N.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return M;
    const z = q1(q.floating, h.x), Q = q1(q.floating, h.y);
    return u ? {
      ...M,
      transform: "translate(" + z + "px, " + Q + "px)",
      ...JP(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: Q
    };
  }, [n, u, q.floating, h.x, h.y]);
  return N.useMemo(() => ({
    ...h,
    update: H,
    refs: W,
    elements: q,
    floatingStyles: U
  }), [h, H, W, q, U]);
}
const U$ = (e) => {
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
      return o && t(o) ? o.current != null ? D1({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? D1({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
}, G$ = (e, t) => ({
  ...j$(e),
  options: [e, t]
}), Y$ = (e, t) => ({
  ...D$(e),
  options: [e, t]
}), K$ = (e, t) => ({
  ...$$(e),
  options: [e, t]
}), X$ = (e, t) => ({
  ...q$(e),
  options: [e, t]
}), Q$ = (e, t) => ({
  ...z$(e),
  options: [e, t]
}), Z$ = (e, t) => ({
  ...F$(e),
  options: [e, t]
}), J$ = (e, t) => ({
  ...U$(e),
  options: [e, t]
});
var eB = "Arrow", eT = N.forwardRef((e, t) => {
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
eT.displayName = eB;
var tB = eT, Qy = "Popper", [tT, Lu] = xi(Qy), [nB, nT] = tT(Qy), rT = (e) => {
  const { __scopePopper: t, children: n } = e, [o, i] = N.useState(null);
  return /* @__PURE__ */ R.jsx(nB, { scope: t, anchor: o, onAnchorChange: i, children: n });
};
rT.displayName = Qy;
var oT = "PopperAnchor", iT = N.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...i } = e, a = nT(oT, n), l = N.useRef(null), u = Be(t, l), f = N.useRef(null);
    return N.useEffect(() => {
      const d = f.current;
      f.current = (o == null ? void 0 : o.current) || l.current, d !== f.current && a.onAnchorChange(f.current);
    }), o ? null : /* @__PURE__ */ R.jsx(De.div, { ...i, ref: u });
  }
);
iT.displayName = oT;
var Zy = "PopperContent", [rB, oB] = tT(Zy), sT = N.forwardRef(
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
      onPlaced: E,
      ...y
    } = e, w = nT(Zy, n), [b, C] = N.useState(null), _ = Be(t, (pe) => C(pe)), [k, P] = N.useState(null), T = NP(k), I = (T == null ? void 0 : T.width) ?? 0, L = (T == null ? void 0 : T.height) ?? 0, D = o + (a !== "center" ? "-" + a : ""), Y = typeof h == "number" ? h : { top: 0, right: 0, bottom: 0, left: 0, ...h }, $ = Array.isArray(d) ? d : [d], V = $.length > 0, H = {
      padding: Y,
      boundary: $.filter(sB),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: O, floatingStyles: W, placement: q, isPositioned: U, middlewareData: M } = W$({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...pe) => L$(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        G$({ mainAxis: i + L, alignmentAxis: l }),
        f && Y$({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? K$() : void 0,
          ...H
        }),
        f && X$({ ...H }),
        Q$({
          ...H,
          apply: ({ elements: pe, rects: be, availableWidth: ve, availableHeight: Re }) => {
            const { width: Ee, height: Je } = be.reference, Ue = pe.floating.style;
            Ue.setProperty("--radix-popper-available-width", `${ve}px`), Ue.setProperty("--radix-popper-available-height", `${Re}px`), Ue.setProperty("--radix-popper-anchor-width", `${Ee}px`), Ue.setProperty("--radix-popper-anchor-height", `${Je}px`);
          }
        }),
        k && J$({ element: k, padding: u }),
        aB({ arrowWidth: I, arrowHeight: L }),
        m && Z$({ strategy: "referenceHidden", ...H })
      ]
    }), [z, Q] = uT(q), j = uo(E);
    yt(() => {
      U && (j == null || j());
    }, [U, j]);
    const G = (X = M.arrow) == null ? void 0 : X.x, ie = (te = M.arrow) == null ? void 0 : te.y, B = ((se = M.arrow) == null ? void 0 : se.centerOffset) !== 0, [Z, ee] = N.useState();
    return yt(() => {
      b && ee(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: U ? W.transform : "translate(0, -200%)",
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
          rB,
          {
            scope: n,
            placedSide: z,
            onArrowChange: P,
            arrowX: G,
            arrowY: ie,
            shouldHideArrow: B,
            children: /* @__PURE__ */ R.jsx(
              De.div,
              {
                "data-side": z,
                "data-align": Q,
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
sT.displayName = Zy;
var aT = "PopperArrow", iB = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, lT = N.forwardRef(function(t, n) {
  const { __scopePopper: o, ...i } = t, a = oB(aT, o), l = iB[a.placedSide];
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
          tB,
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
lT.displayName = aT;
function sB(e) {
  return e !== null;
}
var aB = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, b, C;
    const { placement: n, rects: o, middlewareData: i } = t, l = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, u = l ? 0 : e.arrowWidth, f = l ? 0 : e.arrowHeight, [d, h] = uT(n), p = { start: "0%", center: "50%", end: "100%" }[h], m = (((b = i.arrow) == null ? void 0 : b.x) ?? 0) + u / 2, v = (((C = i.arrow) == null ? void 0 : C.y) ?? 0) + f / 2;
    let E = "", y = "";
    return d === "bottom" ? (E = l ? p : `${m}px`, y = `${-f}px`) : d === "top" ? (E = l ? p : `${m}px`, y = `${o.floating.height + f}px`) : d === "right" ? (E = `${-f}px`, y = l ? p : `${v}px`) : d === "left" && (E = `${o.floating.width + f}px`, y = l ? p : `${v}px`), { data: { x: E, y } };
  }
});
function uT(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var cT = rT, fT = iT, dT = sT, hT = lT, lB = "Portal", ju = N.forwardRef((e, t) => {
  var u;
  const { container: n, ...o } = e, [i, a] = N.useState(!1);
  yt(() => a(!0), []);
  const l = n || i && ((u = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : u.body);
  return l ? aq.createPortal(/* @__PURE__ */ R.jsx(De.div, { ...o, ref: t }), l) : null;
});
ju.displayName = lB;
// @__NO_SIDE_EFFECTS__
function uB(e) {
  const t = /* @__PURE__ */ cB(e), n = N.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(dB);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function cB(e) {
  const t = N.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (N.isValidElement(i)) {
      const l = pB(i), u = hB(a, i.props);
      return i.type !== N.Fragment && (u.ref = o ? yi(o, l) : l), N.cloneElement(i, u);
    }
    return N.Children.count(i) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var fB = Symbol("radix.slottable");
function dB(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fB;
}
function hB(e, t) {
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
function pB(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var pT = Object.freeze({
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
}), gB = "VisuallyHidden", gT = N.forwardRef(
  (e, t) => /* @__PURE__ */ R.jsx(
    De.span,
    {
      ...e,
      ref: t,
      style: { ...pT, ...e.style }
    }
  )
);
gT.displayName = gB;
var mB = gT, vB = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qo = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), zl = {}, kd = 0, mT = function(e) {
  return e && (e.host || mT(e.parentNode));
}, yB = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = mT(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, xB = function(e, t, n, o) {
  var i = yB(t, Array.isArray(e) ? e : [e]);
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
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return h(t), u.clear(), kd++, function() {
    l.forEach(function(p) {
      var m = Qo.get(p) - 1, v = a.get(p) - 1;
      Qo.set(p, m), a.set(p, v), m || (ql.has(p) || p.removeAttribute(o), ql.delete(p)), v || p.removeAttribute(n);
    }), kd--, kd || (Qo = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), zl = {});
  };
}, vT = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = vB(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))), xB(o, i, n, "aria-hidden")) : function() {
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
function yT(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
  return n;
}
function wB(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, i = t.length, a; o < i; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Yl = "right-scroll-bar-position", Kl = "width-before-scroll-bar", _B = "with-scroll-bars-hidden", bB = "--removed-body-scroll-bar-size";
function Nd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function SB(e, t) {
  var n = N.useState(function() {
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
var EB = typeof window < "u" ? N.useLayoutEffect : N.useEffect, z1 = /* @__PURE__ */ new WeakMap();
function CB(e, t) {
  var n = SB(null, function(o) {
    return e.forEach(function(i) {
      return Nd(i, o);
    });
  });
  return EB(function() {
    var o = z1.get(n);
    if (o) {
      var i = new Set(o), a = new Set(e), l = n.current;
      i.forEach(function(u) {
        a.has(u) || Nd(u, null);
      }), a.forEach(function(u) {
        i.has(u) || Nd(u, l);
      });
    }
    z1.set(n, e);
  }, [e]), n;
}
function kB(e) {
  return e;
}
function NB(e, t) {
  t === void 0 && (t = kB);
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
function RB(e) {
  e === void 0 && (e = {});
  var t = NB(null);
  return t.options = Rn({ async: !0, ssr: !1 }, e), t;
}
var xT = function(e) {
  var t = e.sideCar, n = yT(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return N.createElement(o, Rn({}, n));
};
xT.isSideCarExport = !0;
function PB(e, t) {
  return e.useMedium(t), xT;
}
var wT = RB(), Rd = function() {
}, Du = N.forwardRef(function(e, t) {
  var n = N.useRef(null), o = N.useState({
    onScrollCapture: Rd,
    onWheelCapture: Rd,
    onTouchMoveCapture: Rd
  }), i = o[0], a = o[1], l = e.forwardProps, u = e.children, f = e.className, d = e.removeScrollBar, h = e.enabled, p = e.shards, m = e.sideCar, v = e.noRelative, E = e.noIsolation, y = e.inert, w = e.allowPinchZoom, b = e.as, C = b === void 0 ? "div" : b, _ = e.gapMode, k = yT(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = m, T = CB([n, t]), I = Rn(Rn({}, k), i);
  return N.createElement(
    N.Fragment,
    null,
    h && N.createElement(P, { sideCar: wT, removeScrollBar: d, shards: p, noRelative: v, noIsolation: E, inert: y, setCallbacks: a, allowPinchZoom: !!w, lockRef: n, gapMode: _ }),
    l ? N.cloneElement(N.Children.only(u), Rn(Rn({}, I), { ref: T })) : N.createElement(C, Rn({}, I, { className: f, ref: T }), u)
  );
});
Du.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Du.classNames = {
  fullWidth: Kl,
  zeroRight: Yl
};
var TB = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function AB() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = TB();
  return t && e.setAttribute("nonce", t), e;
}
function IB(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function MB(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var OB = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = AB()) && (IB(t, n), MB(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, LB = function() {
  var e = OB();
  return function(t, n) {
    N.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, _T = function() {
  var e = LB(), t = function(n) {
    var o = n.styles, i = n.dynamic;
    return e(o, i), null;
  };
  return t;
}, jB = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pd = function(e) {
  return parseInt(e || "", 10) || 0;
}, DB = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pd(n), Pd(o), Pd(i)];
}, qB = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jB;
  var t = DB(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, zB = _T(), ii = "data-scroll-locked", FB = function(e, t, n, o) {
  var i = e.left, a = e.top, l = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(_B, ` {
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
    `).concat(bB, ": ").concat(u, `px;
  }
`);
}, F1 = function() {
  var e = parseInt(document.body.getAttribute(ii) || "0", 10);
  return isFinite(e) ? e : 0;
}, $B = function() {
  N.useEffect(function() {
    return document.body.setAttribute(ii, (F1() + 1).toString()), function() {
      var e = F1() - 1;
      e <= 0 ? document.body.removeAttribute(ii) : document.body.setAttribute(ii, e.toString());
    };
  }, []);
}, BB = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, i = o === void 0 ? "margin" : o;
  $B();
  var a = N.useMemo(function() {
    return qB(i);
  }, [i]);
  return N.createElement(zB, { styles: FB(a, !t, i, n ? "" : "!important") });
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
var Zo = py ? { passive: !1 } : !1, VB = function(e) {
  return e.tagName === "TEXTAREA";
}, bT = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !VB(e) && n[t] === "visible")
  );
}, HB = function(e) {
  return bT(e, "overflowY");
}, WB = function(e) {
  return bT(e, "overflowX");
}, $1 = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var i = ST(e, o);
    if (i) {
      var a = ET(e, o), l = a[1], u = a[2];
      if (l > u)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, UB = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, GB = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, ST = function(e, t) {
  return e === "v" ? HB(t) : WB(t);
}, ET = function(e, t) {
  return e === "v" ? UB(t) : GB(t);
}, YB = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, KB = function(e, t, n, o, i) {
  var a = YB(e, window.getComputedStyle(t).direction), l = a * o, u = n.target, f = t.contains(u), d = !1, h = l > 0, p = 0, m = 0;
  do {
    if (!u)
      break;
    var v = ET(e, u), E = v[0], y = v[1], w = v[2], b = y - w - a * E;
    (E || b) && ST(e, u) && (p += b, m += E);
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
}, B1 = function(e) {
  return [e.deltaX, e.deltaY];
}, V1 = function(e) {
  return e && "current" in e ? e.current : e;
}, XB = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, QB = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ZB = 0, Jo = [];
function JB(e) {
  var t = N.useRef([]), n = N.useRef([0, 0]), o = N.useRef(), i = N.useState(ZB++)[0], a = N.useState(_T)[0], l = N.useRef(e);
  N.useEffect(function() {
    l.current = e;
  }, [e]), N.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = wB([e.lockRef.current], (e.shards || []).map(V1), !0).filter(Boolean);
      return y.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), y.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = N.useCallback(function(y, w) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !l.current.allowPinchZoom;
    var b = $l(y), C = n.current, _ = "deltaX" in y ? y.deltaX : C[0] - b[0], k = "deltaY" in y ? y.deltaY : C[1] - b[1], P, T = y.target, I = Math.abs(_) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && I === "h" && T.type === "range")
      return !1;
    var L = $1(I, T);
    if (!L)
      return !0;
    if (L ? P = I : (P = I === "v" ? "h" : "v", L = $1(I, T)), !L)
      return !1;
    if (!o.current && "changedTouches" in y && (_ || k) && (o.current = P), !P)
      return !0;
    var D = o.current || P;
    return KB(D, w, y, D === "h" ? _ : k);
  }, []), f = N.useCallback(function(y) {
    var w = y;
    if (!(!Jo.length || Jo[Jo.length - 1] !== a)) {
      var b = "deltaY" in w ? B1(w) : $l(w), C = t.current.filter(function(P) {
        return P.name === w.type && (P.target === w.target || w.target === P.shadowParent) && XB(P.delta, b);
      })[0];
      if (C && C.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!C) {
        var _ = (l.current.shards || []).map(V1).filter(Boolean).filter(function(P) {
          return P.contains(w.target);
        }), k = _.length > 0 ? u(w, _[0]) : !l.current.noIsolation;
        k && w.cancelable && w.preventDefault();
      }
    }
  }, []), d = N.useCallback(function(y, w, b, C) {
    var _ = { name: y, delta: w, target: b, should: C, shadowParent: e5(b) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== _;
      });
    }, 1);
  }, []), h = N.useCallback(function(y) {
    n.current = $l(y), o.current = void 0;
  }, []), p = N.useCallback(function(y) {
    d(y.type, B1(y), y.target, u(y, e.lockRef.current));
  }, []), m = N.useCallback(function(y) {
    d(y.type, $l(y), y.target, u(y, e.lockRef.current));
  }, []);
  N.useEffect(function() {
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
  return N.createElement(
    N.Fragment,
    null,
    E ? N.createElement(a, { styles: QB(i) }) : null,
    v ? N.createElement(BB, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function e5(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const t5 = PB(wT, JB);
var Jy = N.forwardRef(function(e, t) {
  return N.createElement(Du, Rn({}, e, { ref: t, sideCar: t5 }));
});
Jy.classNames = Du.classNames;
var n5 = [" ", "Enter", "ArrowUp", "ArrowDown"], r5 = [" ", "Enter"], fo = "Select", [qu, zu, o5] = E4(fo), [bi] = xi(fo, [
  o5,
  Lu
]), Fu = Lu(), [i5, Mr] = bi(fo), [s5, a5] = bi(fo), CT = (e) => {
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
  } = e, y = Fu(t), [w, b] = N.useState(null), [C, _] = N.useState(null), [k, P] = N.useState(!1), T = k4(d), [I, L] = Vs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: fo
  }), [D, Y] = Vs({
    prop: l,
    defaultProp: u,
    onChange: f,
    caller: fo
  }), $ = N.useRef(null), V = w ? E || !!w.closest("form") : !0, [H, O] = N.useState(/* @__PURE__ */ new Set()), W = Array.from(H).map((q) => q.props.value).join(";");
  return /* @__PURE__ */ R.jsx(cT, { ...y, children: /* @__PURE__ */ R.jsxs(
    i5,
    {
      required: v,
      scope: t,
      trigger: w,
      onTriggerChange: b,
      valueNode: C,
      onValueNodeChange: _,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: P,
      contentId: io(),
      value: D,
      onValueChange: Y,
      open: I,
      onOpenChange: L,
      dir: T,
      triggerPointerDownPosRef: $,
      disabled: m,
      children: [
        /* @__PURE__ */ R.jsx(qu.Provider, { scope: t, children: /* @__PURE__ */ R.jsx(
          s5,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: N.useCallback((q) => {
              O((U) => new Set(U).add(q));
            }, []),
            onNativeOptionRemove: N.useCallback((q) => {
              O((U) => {
                const M = new Set(U);
                return M.delete(q), M;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ R.jsxs(
          GT,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: h,
            autoComplete: p,
            value: D,
            onChange: (q) => Y(q.target.value),
            disabled: m,
            form: E,
            children: [
              D === void 0 ? /* @__PURE__ */ R.jsx("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          W
        ) : null
      ]
    }
  ) });
};
CT.displayName = fo;
var kT = "SelectTrigger", NT = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...i } = e, a = Fu(n), l = Mr(kT, n), u = l.disabled || o, f = Be(t, l.onTriggerChange), d = zu(n), h = N.useRef("touch"), [p, m, v] = KT((y) => {
      const w = d().filter((_) => !_.disabled), b = w.find((_) => _.value === l.value), C = XT(w, y, b);
      C !== void 0 && l.onValueChange(C.value);
    }), E = (y) => {
      u || (l.onOpenChange(!0), v()), y && (l.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ R.jsx(fT, { asChild: !0, ...a, children: /* @__PURE__ */ R.jsx(
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
        "data-placeholder": YT(l.value) ? "" : void 0,
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
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(w && y.key === " ") && n5.includes(y.key) && (E(), y.preventDefault());
        })
      }
    ) });
  }
);
NT.displayName = kT;
var RT = "SelectValue", PT = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, children: a, placeholder: l = "", ...u } = e, f = Mr(RT, n), { onValueNodeHasChildrenChange: d } = f, h = a !== void 0, p = Be(t, f.onValueNodeChange);
    return yt(() => {
      d(h);
    }, [d, h]), /* @__PURE__ */ R.jsx(
      De.span,
      {
        ...u,
        ref: p,
        style: { pointerEvents: "none" },
        children: YT(f.value) ? /* @__PURE__ */ R.jsx(R.Fragment, { children: l }) : a
      }
    );
  }
);
PT.displayName = RT;
var l5 = "SelectIcon", TT = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...i } = e;
    return /* @__PURE__ */ R.jsx(De.span, { "aria-hidden": !0, ...i, ref: t, children: o || "▼" });
  }
);
TT.displayName = l5;
var u5 = "SelectPortal", AT = (e) => /* @__PURE__ */ R.jsx(ju, { asChild: !0, ...e });
AT.displayName = u5;
var ho = "SelectContent", IT = N.forwardRef(
  (e, t) => {
    const n = Mr(ho, e.__scopeSelect), [o, i] = N.useState();
    if (yt(() => {
      i(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? ea.createPortal(
        /* @__PURE__ */ R.jsx(MT, { scope: e.__scopeSelect, children: /* @__PURE__ */ R.jsx(qu.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ R.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ R.jsx(OT, { ...e, ref: t });
  }
);
IT.displayName = ho;
var cn = 10, [MT, Or] = bi(ho), c5 = "SelectContentImpl", f5 = /* @__PURE__ */ uB("SelectContent.RemoveScroll"), OT = N.forwardRef(
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
      ...b
    } = e, C = Mr(ho, n), [_, k] = N.useState(null), [P, T] = N.useState(null), I = Be(t, (X) => k(X)), [L, D] = N.useState(null), [Y, $] = N.useState(
      null
    ), V = zu(n), [H, O] = N.useState(!1), W = N.useRef(!1);
    N.useEffect(() => {
      if (_) return vT(_);
    }, [_]), $P();
    const q = N.useCallback(
      (X) => {
        const [te, ...se] = V().map((de) => de.ref.current), [ae] = se.slice(-1), ce = document.activeElement;
        for (const de of X)
          if (de === ce || (de == null || de.scrollIntoView({ block: "nearest" }), de === te && P && (P.scrollTop = 0), de === ae && P && (P.scrollTop = P.scrollHeight), de == null || de.focus(), document.activeElement !== ce)) return;
      },
      [V, P]
    ), U = N.useCallback(
      () => q([L, _]),
      [q, L, _]
    );
    N.useEffect(() => {
      H && U();
    }, [H, U]);
    const { onOpenChange: M, triggerPointerDownPosRef: z } = C;
    N.useEffect(() => {
      if (_) {
        let X = { x: 0, y: 0 };
        const te = (ae) => {
          var ce, de;
          X = {
            x: Math.abs(Math.round(ae.pageX) - (((ce = z.current) == null ? void 0 : ce.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((de = z.current) == null ? void 0 : de.y) ?? 0))
          };
        }, se = (ae) => {
          X.x <= 10 && X.y <= 10 ? ae.preventDefault() : _.contains(ae.target) || M(!1), document.removeEventListener("pointermove", te), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [_, M, z]), N.useEffect(() => {
      const X = () => M(!1);
      return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
        window.removeEventListener("blur", X), window.removeEventListener("resize", X);
      };
    }, [M]);
    const [Q, j] = KT((X) => {
      const te = V().filter((ce) => !ce.disabled), se = te.find((ce) => ce.ref.current === document.activeElement), ae = XT(te, X, se);
      ae && setTimeout(() => ae.ref.current.focus());
    }), G = N.useCallback(
      (X, te, se) => {
        const ae = !W.current && !se;
        (C.value !== void 0 && C.value === te || ae) && (D(X), ae && (W.current = !0));
      },
      [C.value]
    ), ie = N.useCallback(() => _ == null ? void 0 : _.focus(), [_]), B = N.useCallback(
      (X, te, se) => {
        const ae = !W.current && !se;
        (C.value !== void 0 && C.value === te || ae) && $(X);
      },
      [C.value]
    ), Z = o === "popper" ? gy : LT, ee = Z === gy ? {
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
      MT,
      {
        scope: n,
        content: _,
        viewport: P,
        onViewportChange: T,
        itemRefCallback: G,
        selectedItem: L,
        onItemLeave: ie,
        itemTextRefCallback: B,
        focusSelectedItem: U,
        selectedItemText: Y,
        position: o,
        isPositioned: H,
        searchRef: Q,
        children: /* @__PURE__ */ R.jsx(Jy, { as: f5, allowPinchZoom: !0, children: /* @__PURE__ */ R.jsx(
          Hy,
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
            children: /* @__PURE__ */ R.jsx(
              Tu,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: l,
                onFocusOutside: (X) => X.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ R.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (X) => X.preventDefault(),
                    ...b,
                    ...ee,
                    onPlaced: () => O(!0),
                    ref: I,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Le(b.onKeyDown, (X) => {
                      const te = X.ctrlKey || X.altKey || X.metaKey;
                      if (X.key === "Tab" && X.preventDefault(), !te && X.key.length === 1 && j(X.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(X.key)) {
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
OT.displayName = c5;
var d5 = "SelectItemAlignedPosition", LT = N.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...i } = e, a = Mr(ho, n), l = Or(ho, n), [u, f] = N.useState(null), [d, h] = N.useState(null), p = Be(t, (I) => h(I)), m = zu(n), v = N.useRef(!1), E = N.useRef(!0), { viewport: y, selectedItem: w, selectedItemText: b, focusSelectedItem: C } = l, _ = N.useCallback(() => {
    if (a.trigger && a.valueNode && u && d && y && w && b) {
      const I = a.trigger.getBoundingClientRect(), L = d.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), Y = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = Y.left - L.left, de = D.left - ce, pe = I.left - de, be = I.width + pe, ve = Math.max(be, L.width), Re = window.innerWidth - cn, Ee = x1(de, [
          cn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(cn, Re - ve)
        ]);
        u.style.minWidth = be + "px", u.style.left = Ee + "px";
      } else {
        const ce = L.right - Y.right, de = window.innerWidth - D.right - ce, pe = window.innerWidth - I.right - de, be = I.width + pe, ve = Math.max(be, L.width), Re = window.innerWidth - cn, Ee = x1(de, [
          cn,
          Math.max(cn, Re - ve)
        ]);
        u.style.minWidth = be + "px", u.style.right = Ee + "px";
      }
      const $ = m(), V = window.innerHeight - cn * 2, H = y.scrollHeight, O = window.getComputedStyle(d), W = parseInt(O.borderTopWidth, 10), q = parseInt(O.paddingTop, 10), U = parseInt(O.borderBottomWidth, 10), M = parseInt(O.paddingBottom, 10), z = W + q + H + M + U, Q = Math.min(w.offsetHeight * 5, z), j = window.getComputedStyle(y), G = parseInt(j.paddingTop, 10), ie = parseInt(j.paddingBottom, 10), B = I.top + I.height / 2 - cn, Z = V - B, ee = w.offsetHeight / 2, X = w.offsetTop + ee, te = W + q + X, se = z - te;
      if (te <= B) {
        const ce = $.length > 0 && w === $[$.length - 1].ref.current;
        u.style.bottom = "0px";
        const de = d.clientHeight - y.offsetTop - y.offsetHeight, pe = Math.max(
          Z,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ce ? ie : 0) + de + U
        ), be = te + pe;
        u.style.height = be + "px";
      } else {
        const ce = $.length > 0 && w === $[0].ref.current;
        u.style.top = "0px";
        const pe = Math.max(
          B,
          W + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ce ? G : 0) + ee
        ) + se;
        u.style.height = pe + "px", y.scrollTop = te - B + y.offsetTop;
      }
      u.style.margin = `${cn}px 0`, u.style.minHeight = Q + "px", u.style.maxHeight = V + "px", o == null || o(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    u,
    d,
    y,
    w,
    b,
    a.dir,
    o
  ]);
  yt(() => _(), [_]);
  const [k, P] = N.useState();
  yt(() => {
    d && P(window.getComputedStyle(d).zIndex);
  }, [d]);
  const T = N.useCallback(
    (I) => {
      I && E.current === !0 && (_(), C == null || C(), E.current = !1);
    },
    [_, C]
  );
  return /* @__PURE__ */ R.jsx(
    p5,
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
            zIndex: k
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
LT.displayName = d5;
var h5 = "SelectPopperPosition", gy = N.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: i = cn,
    ...a
  } = e, l = Fu(n);
  return /* @__PURE__ */ R.jsx(
    dT,
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
gy.displayName = h5;
var [p5, e0] = bi(ho, {}), my = "SelectViewport", jT = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...i } = e, a = Or(my, n), l = e0(my, n), u = Be(t, a.onViewportChange), f = N.useRef(0);
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
      /* @__PURE__ */ R.jsx(qu.Slot, { scope: n, children: /* @__PURE__ */ R.jsx(
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
                const E = window.innerHeight - cn * 2, y = parseFloat(p.style.minHeight), w = parseFloat(p.style.height), b = Math.max(y, w);
                if (b < E) {
                  const C = b + v, _ = Math.min(E, C), k = C - _;
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
jT.displayName = my;
var DT = "SelectGroup", [g5, m5] = bi(DT), v5 = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = io();
    return /* @__PURE__ */ R.jsx(g5, { scope: n, id: i, children: /* @__PURE__ */ R.jsx(De.div, { role: "group", "aria-labelledby": i, ...o, ref: t }) });
  }
);
v5.displayName = DT;
var qT = "SelectLabel", y5 = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = m5(qT, n);
    return /* @__PURE__ */ R.jsx(De.div, { id: i.id, ...o, ref: t });
  }
);
y5.displayName = qT;
var pu = "SelectItem", [x5, zT] = bi(pu), FT = N.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: i = !1,
      textValue: a,
      ...l
    } = e, u = Mr(pu, n), f = Or(pu, n), d = u.value === o, [h, p] = N.useState(a ?? ""), [m, v] = N.useState(!1), E = Be(
      t,
      (C) => {
        var _;
        return (_ = f.itemRefCallback) == null ? void 0 : _.call(f, C, o, i);
      }
    ), y = io(), w = N.useRef("touch"), b = () => {
      i || (u.onValueChange(o), u.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ R.jsx(
      x5,
      {
        scope: n,
        value: o,
        disabled: i,
        textId: y,
        isSelected: d,
        onItemTextChange: N.useCallback((C) => {
          p((_) => _ || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ R.jsx(
          qu.ItemSlot,
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
                  w.current !== "mouse" && b();
                }),
                onPointerUp: Le(l.onPointerUp, () => {
                  w.current === "mouse" && b();
                }),
                onPointerDown: Le(l.onPointerDown, (C) => {
                  w.current = C.pointerType;
                }),
                onPointerMove: Le(l.onPointerMove, (C) => {
                  var _;
                  w.current = C.pointerType, i ? (_ = f.onItemLeave) == null || _.call(f) : w.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Le(l.onPointerLeave, (C) => {
                  var _;
                  C.currentTarget === document.activeElement && ((_ = f.onItemLeave) == null || _.call(f));
                }),
                onKeyDown: Le(l.onKeyDown, (C) => {
                  var k;
                  ((k = f.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (r5.includes(C.key) && b(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
FT.displayName = pu;
var Cs = "SelectItemText", $T = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: i, ...a } = e, l = Mr(Cs, n), u = Or(Cs, n), f = zT(Cs, n), d = a5(Cs, n), [h, p] = N.useState(null), m = Be(
      t,
      (b) => p(b),
      f.onItemTextChange,
      (b) => {
        var C;
        return (C = u.itemTextRefCallback) == null ? void 0 : C.call(u, b, f.value, f.disabled);
      }
    ), v = h == null ? void 0 : h.textContent, E = N.useMemo(
      () => /* @__PURE__ */ R.jsx("option", { value: f.value, disabled: f.disabled, children: v }, f.value),
      [f.disabled, f.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: w } = d;
    return yt(() => (y(E), () => w(E)), [y, w, E]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(De.span, { id: f.textId, ...a, ref: m }),
      f.isSelected && l.valueNode && !l.valueNodeHasChildren ? ea.createPortal(a.children, l.valueNode) : null
    ] });
  }
);
$T.displayName = Cs;
var BT = "SelectItemIndicator", VT = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return zT(BT, n).isSelected ? /* @__PURE__ */ R.jsx(De.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
VT.displayName = BT;
var vy = "SelectScrollUpButton", HT = N.forwardRef((e, t) => {
  const n = Or(vy, e.__scopeSelect), o = e0(vy, e.__scopeSelect), [i, a] = N.useState(!1), l = Be(t, o.onScrollButtonChange);
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
    UT,
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
HT.displayName = vy;
var yy = "SelectScrollDownButton", WT = N.forwardRef((e, t) => {
  const n = Or(yy, e.__scopeSelect), o = e0(yy, e.__scopeSelect), [i, a] = N.useState(!1), l = Be(t, o.onScrollButtonChange);
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
    UT,
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
WT.displayName = yy;
var UT = N.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...i } = e, a = Or("SelectScrollButton", n), l = N.useRef(null), u = zu(n), f = N.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return N.useEffect(() => () => f(), [f]), yt(() => {
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
}), w5 = "SelectSeparator", _5 = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ R.jsx(De.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
_5.displayName = w5;
var xy = "SelectArrow", b5 = N.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, i = Fu(n), a = Mr(xy, n), l = Or(xy, n);
    return a.open && l.position === "popper" ? /* @__PURE__ */ R.jsx(hT, { ...i, ...o, ref: t }) : null;
  }
);
b5.displayName = xy;
var S5 = "SelectBubbleInput", GT = N.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const i = N.useRef(null), a = Be(o, i), l = kP(t);
    return N.useEffect(() => {
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
        style: { ...pT, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
GT.displayName = S5;
function YT(e) {
  return e === "" || e === void 0;
}
function KT(e) {
  const t = uo(e), n = N.useRef(""), o = N.useRef(0), i = N.useCallback(
    (l) => {
      const u = n.current + l;
      t(u), (function f(d) {
        n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => f(""), 1e3));
      })(u);
    },
    [t]
  ), a = N.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return N.useEffect(() => () => window.clearTimeout(o.current), []), [n, i, a];
}
function XT(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let l = E5(e, Math.max(a, 0));
  i.length === 1 && (l = l.filter((d) => d !== n));
  const f = l.find(
    (d) => d.textValue.toLowerCase().startsWith(i.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function E5(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var C5 = CT, k5 = NT, N5 = PT, R5 = TT, P5 = AT, T5 = IT, A5 = jT, I5 = FT, M5 = $T, O5 = VT, L5 = HT, j5 = WT;
function H1({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(C5, { "data-slot": "select", ...e });
}
function W1({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(N5, { "data-slot": "select-value", ...e });
}
function U1({
  className: e,
  size: t = "default",
  children: n,
  ...o
}) {
  return /* @__PURE__ */ R.jsxs(
    k5,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: Ae(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ R.jsx(R5, { asChild: !0, children: /* @__PURE__ */ R.jsx(qP, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function G1({
  className: e,
  children: t,
  position: n = "popper",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ R.jsx(P5, { children: /* @__PURE__ */ R.jsxs(
    T5,
    {
      "data-slot": "select-content",
      className: Ae(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: o,
      ...i,
      children: [
        /* @__PURE__ */ R.jsx(D5, {}),
        /* @__PURE__ */ R.jsx(
          A5,
          {
            className: Ae(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ R.jsx(q5, {})
      ]
    }
  ) });
}
function Y1({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ R.jsxs(
    I5,
    {
      "data-slot": "select-item",
      className: Ae(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ R.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ R.jsx(O5, { children: /* @__PURE__ */ R.jsx(DP, { className: "size-4" }) }) }),
        /* @__PURE__ */ R.jsx(M5, { children: t })
      ]
    }
  );
}
function D5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    L5,
    {
      "data-slot": "select-scroll-up-button",
      className: Ae(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(a4, { className: "size-4" })
    }
  );
}
function q5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    j5,
    {
      "data-slot": "select-scroll-down-button",
      className: Ae(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ R.jsx(qP, { className: "size-4" })
    }
  );
}
function z5(e) {
  if ("component" in e) {
    const { component: l, onValueChange: u } = e;
    return /* @__PURE__ */ R.jsxs("div", { className: "component-select-field", children: [
      /* @__PURE__ */ R.jsx("label", { className: "text-xs text-gray-600 mb-1", children: l.label }),
      /* @__PURE__ */ R.jsxs(H1, { value: l.value || "", onValueChange: (f) => u == null ? void 0 : u(l.id, f), children: [
        /* @__PURE__ */ R.jsx(
          U1,
          {
            className: "h-8 text-xs",
            onMouseDown: (f) => f.stopPropagation(),
            onPointerDown: (f) => f.stopPropagation(),
            "aria-label": l.label,
            children: /* @__PURE__ */ R.jsx(W1, { placeholder: "Select..." })
          }
        ),
        /* @__PURE__ */ R.jsx(G1, { children: (l.options || []).map((f) => /* @__PURE__ */ R.jsx(Y1, { value: f, className: "text-xs", children: f }, f)) })
      ] })
    ] });
  }
  const { value: t, options: n, onChange: o, placeholder: i, label: a } = e;
  return /* @__PURE__ */ R.jsxs(H1, { value: t, onValueChange: o, children: [
    /* @__PURE__ */ R.jsx(
      U1,
      {
        className: "h-8 text-xs",
        onMouseDown: (l) => l.stopPropagation(),
        onPointerDown: (l) => l.stopPropagation(),
        "aria-label": a,
        children: /* @__PURE__ */ R.jsx(W1, { placeholder: i })
      }
    ),
    /* @__PURE__ */ R.jsx(G1, { children: n.map((l) => /* @__PURE__ */ R.jsx(Y1, { value: l, className: "text-xs", children: l }, l)) })
  ] });
}
function F5({ component: e }) {
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
function $5({ component: e }) {
  const t = e.variant === "primary";
  return /* @__PURE__ */ R.jsx(
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
function B5({ component: e }) {
  const t = e.orientation !== "vertical";
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: `component-divider ${t ? "w-full h-px" : "h-full w-px"} bg-gray-300`
    }
  );
}
function V5({ component: e }) {
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
function H5({
  cell: e,
  nodeId: t,
  onValueChange: n
}) {
  const o = e.layout || { type: "flex", direction: "column" }, i = W5(e), a = U5(o);
  return /* @__PURE__ */ R.jsx("div", { className: "nested-grid-cell", style: i, children: /* @__PURE__ */ R.jsx("div", { className: "nested-grid-cell-content", style: a, children: e.components.map((l) => {
    const { ComponentFactory: u } = require("../ComponentFactory");
    return /* @__PURE__ */ R.jsx(
      u,
      {
        component: l,
        nodeId: t,
        onValueChange: n
      },
      l.id
    );
  }) }) });
}
function W5(e) {
  return {
    gridRow: `${e.coordinates.row} / span ${e.coordinates.row_span || 1}`,
    gridColumn: `${e.coordinates.col} / span ${e.coordinates.col_span || 1}`
  };
}
function U5(e) {
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
function G5({
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
        H5,
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
function Y5({ component: e, nodeId: t, onValueChange: n }) {
  switch (e.type) {
    case "base-handle":
      return /* @__PURE__ */ R.jsx(vi, { component: e });
    case "labeled-handle":
      return /* @__PURE__ */ R.jsx(EP, { component: e });
    case "button-handle":
      return /* @__PURE__ */ R.jsx(CP, { component: e });
    case "text":
      return /* @__PURE__ */ R.jsx(NF, { component: e, onValueChange: n });
    case "number":
      return /* @__PURE__ */ R.jsx(RF, { component: e, onValueChange: n });
    case "bool":
      return /* @__PURE__ */ R.jsx(y4, { component: e, onValueChange: n });
    case "select":
      return /* @__PURE__ */ R.jsx(z5, { component: e, onValueChange: n });
    case "header":
      return /* @__PURE__ */ R.jsx(F5, { component: e });
    case "button":
      return /* @__PURE__ */ R.jsx($5, { component: e });
    case "divider":
      return /* @__PURE__ */ R.jsx(B5, { component: e });
    case "spacer":
      return /* @__PURE__ */ R.jsx(V5, { component: e });
    case "grid-layout":
      return /* @__PURE__ */ R.jsx(G5, { component: e, nodeId: t, onValueChange: n });
    default:
      return console.warn(`Unknown component type: ${e.type}`), null;
  }
}
function K5({ grid: e, nodeId: t, onValueChange: n }) {
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
        X5,
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
function X5({ cell: e, nodeId: t, onValueChange: n }) {
  const o = e.layout || { type: "flex", direction: "column" }, i = Q5(o);
  return /* @__PURE__ */ R.jsx("div", { className: "grid-cell-content", style: i, children: e.components.map((a) => /* @__PURE__ */ R.jsx(
    Y5,
    {
      component: a,
      nodeId: t,
      onValueChange: n
    },
    a.id
  )) });
}
function Q5(e) {
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
function QT({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card",
      className: Ae(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Z5({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: Ae(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function J5({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card-title",
      className: Ae("leading-none font-semibold", e),
      ...t
    }
  );
}
function eV({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: Ae("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
class $u {
  constructor(t) {
    vs(this, "schema");
    if (this.schema = t, !t.grid && !t.gridLayout)
      throw new Error("Either 'grid' (new system) or 'gridLayout' (old system) is required in schema.");
  }
  /**
   * Build header configuration and pre-render header element
   */
  buildHeaderConfig() {
    const { header: t, label: n, icon: o } = this.schema, i = (t == null ? void 0 : t.show) !== !1, a = (t == null ? void 0 : t.icon) || o;
    return {
      show: i,
      element: i ? /* @__PURE__ */ R.jsx(
        Z5,
        {
          className: Ae(
            "p-2.5 space-y-0 px-2.5",
            (t == null ? void 0 : t.className) || "bg-primary text-primary-foreground"
          ),
          style: {
            backgroundColor: t == null ? void 0 : t.bgColor,
            color: t == null ? void 0 : t.textColor
          },
          children: /* @__PURE__ */ R.jsxs(J5, { className: "text-sm font-semibold flex items-center gap-2", children: [
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
        eV,
        {
          className: Ae(
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
      className: Ae(
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
    const { schema: t } = this, n = this.buildHeaderConfig(), o = this.buildFooterConfig(), i = this.buildStyleConfig(), a = ({ id: l, data: u, selected: f }) => {
      const d = u, h = JW(), p = N.useCallback((w, b) => {
        h((C) => ({
          ...C,
          [l]: { ...C[l], [w]: b }
        }));
      }, [l, h]), m = !!d.grid || !!t.grid, v = d.grid || t.grid, E = d.gridLayout || t.gridLayout, y = N.useMemo(() => ({
        nodeId: l,
        nodeData: d,
        onValueChange: p
      }), [l, d, p]);
      return /* @__PURE__ */ R.jsxs(
        QT,
        {
          className: Ae(
            i.className,
            f && "border-primary shadow-lg ring-2 ring-primary/20"
          ),
          style: i.style,
          children: [
            n.element,
            /* @__PURE__ */ R.jsx(SP.Provider, { value: y, children: m && v ? (
              // New three-layer grid system
              /* @__PURE__ */ R.jsx(
                K5,
                {
                  grid: v,
                  nodeId: l,
                  onValueChange: p
                }
              )
            ) : E ? (
              // Old grid system
              /* @__PURE__ */ R.jsx(SF, { layout: E.layout })
            ) : /* @__PURE__ */ R.jsx("div", { className: "p-4 text-red-500 text-sm", children: "Error: No grid configuration found" }) }),
            o.element
          ]
        }
      );
    };
    return N.memo(
      a,
      (l, u) => l.id === u.id && l.selected === u.selected && l.data.values === u.data.values
    );
  }
  /**
   * Static helper to build a component from schema in one call
   */
  static buildComponent(t) {
    return new $u(t).buildComponent();
  }
}
function rU(e) {
  const t = {};
  for (const n of e)
    try {
      t[n.type] = $u.buildComponent(n.defaultData);
    } catch (o) {
      throw console.error(`Failed to build component for node type "${n.type}":`, o), o;
    }
  return t;
}
class tV {
  constructor() {
    vs(this, "registry", {});
    vs(this, "fallbackComponent");
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
const Td = new tV(), Ad = 768;
function nV() {
  const [e, t] = N.useState(void 0);
  return N.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Ad - 1}px)`), o = () => {
      t(window.innerWidth < Ad);
    };
    return n.addEventListener("change", o), t(window.innerWidth < Ad), () => n.removeEventListener("change", o);
  }, []), !!e;
}
const rV = By(
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
function As({
  className: e,
  variant: t,
  size: n,
  asChild: o = !1,
  ...i
}) {
  const a = o ? $y : "button";
  return /* @__PURE__ */ R.jsx(
    a,
    {
      "data-slot": "button",
      className: Ae(rV({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
// @__NO_SIDE_EFFECTS__
function oV(e) {
  const t = /* @__PURE__ */ iV(e), n = N.forwardRef((o, i) => {
    const { children: a, ...l } = o, u = N.Children.toArray(a), f = u.find(aV);
    if (f) {
      const d = f.props.children, h = u.map((p) => p === f ? N.Children.count(d) > 1 ? N.Children.only(null) : N.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: N.isValidElement(d) ? N.cloneElement(d, void 0, h) : null });
    }
    return /* @__PURE__ */ R.jsx(t, { ...l, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function iV(e) {
  const t = N.forwardRef((n, o) => {
    const { children: i, ...a } = n;
    if (N.isValidElement(i)) {
      const l = uV(i), u = lV(a, i.props);
      return i.type !== N.Fragment && (u.ref = o ? yi(o, l) : l), N.cloneElement(i, u);
    }
    return N.Children.count(i) > 1 ? N.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sV = Symbol("radix.slottable");
function aV(e) {
  return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sV;
}
function lV(e, t) {
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
function uV(e) {
  var o, i;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Bu = "Dialog", [ZT] = xi(Bu), [cV, xn] = ZT(Bu), JT = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: l = !0
  } = e, u = N.useRef(null), f = N.useRef(null), [d, h] = Vs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Bu
  });
  return /* @__PURE__ */ R.jsx(
    cV,
    {
      scope: t,
      triggerRef: u,
      contentRef: f,
      contentId: io(),
      titleId: io(),
      descriptionId: io(),
      open: d,
      onOpenChange: h,
      onOpenToggle: N.useCallback(() => h((p) => !p), [h]),
      modal: l,
      children: n
    }
  );
};
JT.displayName = Bu;
var eA = "DialogTrigger", fV = N.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(eA, n), a = Be(t, i.triggerRef);
    return /* @__PURE__ */ R.jsx(
      De.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": r0(i.open),
        ...o,
        ref: a,
        onClick: Le(e.onClick, i.onOpenToggle)
      }
    );
  }
);
fV.displayName = eA;
var t0 = "DialogPortal", [dV, tA] = ZT(t0, {
  forceMount: void 0
}), nA = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: i } = e, a = xn(t0, t);
  return /* @__PURE__ */ R.jsx(dV, { scope: t, forceMount: n, children: N.Children.map(o, (l) => /* @__PURE__ */ R.jsx(go, { present: n || a.open, children: /* @__PURE__ */ R.jsx(ju, { asChild: !0, container: i, children: l }) })) });
};
nA.displayName = t0;
var gu = "DialogOverlay", rA = N.forwardRef(
  (e, t) => {
    const n = tA(gu, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = xn(gu, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ R.jsx(go, { present: o || a.open, children: /* @__PURE__ */ R.jsx(pV, { ...i, ref: t }) }) : null;
  }
);
rA.displayName = gu;
var hV = /* @__PURE__ */ oV("DialogOverlay.RemoveScroll"), pV = N.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(gu, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ R.jsx(Jy, { as: hV, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ R.jsx(
        De.div,
        {
          "data-state": r0(i.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), po = "DialogContent", oA = N.forwardRef(
  (e, t) => {
    const n = tA(po, e.__scopeDialog), { forceMount: o = n.forceMount, ...i } = e, a = xn(po, e.__scopeDialog);
    return /* @__PURE__ */ R.jsx(go, { present: o || a.open, children: a.modal ? /* @__PURE__ */ R.jsx(gV, { ...i, ref: t }) : /* @__PURE__ */ R.jsx(mV, { ...i, ref: t }) });
  }
);
oA.displayName = po;
var gV = N.forwardRef(
  (e, t) => {
    const n = xn(po, e.__scopeDialog), o = N.useRef(null), i = Be(t, n.contentRef, o);
    return N.useEffect(() => {
      const a = o.current;
      if (a) return vT(a);
    }, []), /* @__PURE__ */ R.jsx(
      iA,
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
), mV = N.forwardRef(
  (e, t) => {
    const n = xn(po, e.__scopeDialog), o = N.useRef(!1), i = N.useRef(!1);
    return /* @__PURE__ */ R.jsx(
      iA,
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
), iA = N.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, ...l } = e, u = xn(po, n), f = N.useRef(null), d = Be(t, f);
    return $P(), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(
        Hy,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ R.jsx(
            Tu,
            {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": r0(u.open),
              ...l,
              ref: d,
              onDismiss: () => u.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx(vV, { titleId: u.titleId }),
        /* @__PURE__ */ R.jsx(xV, { contentRef: f, descriptionId: u.descriptionId })
      ] })
    ] });
  }
), n0 = "DialogTitle", sA = N.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(n0, n);
    return /* @__PURE__ */ R.jsx(De.h2, { id: i.titleId, ...o, ref: t });
  }
);
sA.displayName = n0;
var aA = "DialogDescription", lA = N.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(aA, n);
    return /* @__PURE__ */ R.jsx(De.p, { id: i.descriptionId, ...o, ref: t });
  }
);
lA.displayName = aA;
var uA = "DialogClose", cA = N.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, i = xn(uA, n);
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
cA.displayName = uA;
function r0(e) {
  return e ? "open" : "closed";
}
var fA = "DialogTitleWarning", [oU, dA] = PF(fA, {
  contentName: po,
  titleName: n0,
  docsSlug: "dialog"
}), vV = ({ titleId: e }) => {
  const t = dA(fA), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return N.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, yV = "DialogDescriptionWarning", xV = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dA(yV).contentName}}.`;
  return N.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, wV = JT, _V = nA, bV = rA, SV = oA, EV = sA, CV = lA, kV = cA;
function NV({ ...e }) {
  return /* @__PURE__ */ R.jsx(wV, { "data-slot": "sheet", ...e });
}
function RV({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(_V, { "data-slot": "sheet-portal", ...e });
}
function PV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    bV,
    {
      "data-slot": "sheet-overlay",
      className: Ae(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function TV({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ R.jsxs(RV, { children: [
    /* @__PURE__ */ R.jsx(PV, {}),
    /* @__PURE__ */ R.jsxs(
      SV,
      {
        "data-slot": "sheet-content",
        className: Ae(
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
          /* @__PURE__ */ R.jsxs(kV, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ R.jsx(v4, { className: "size-4" }),
            /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function AV({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: Ae("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function IV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    EV,
    {
      "data-slot": "sheet-title",
      className: Ae("text-foreground font-semibold", e),
      ...t
    }
  );
}
function MV({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    CV,
    {
      "data-slot": "sheet-description",
      className: Ae("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
var OV = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function LV(e) {
  const t = ({ children: n }) => /* @__PURE__ */ R.jsx(R.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = OV, t;
}
var [Vu] = xi("Tooltip", [
  Lu
]), Hu = Lu(), hA = "TooltipProvider", jV = 700, wy = "tooltip.open", [DV, o0] = Vu(hA), pA = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = jV,
    skipDelayDuration: o = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, l = N.useRef(!0), u = N.useRef(!1), f = N.useRef(0);
  return N.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ R.jsx(
    DV,
    {
      scope: t,
      isOpenDelayedRef: l,
      delayDuration: n,
      onOpen: N.useCallback(() => {
        window.clearTimeout(f.current), l.current = !1;
      }, []),
      onClose: N.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => l.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: u,
      onPointerInTransitChange: N.useCallback((d) => {
        u.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
pA.displayName = hA;
var Us = "Tooltip", [qV, ra] = Vu(Us), gA = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    disableHoverableContent: l,
    delayDuration: u
  } = e, f = o0(Us, e.__scopeTooltip), d = Hu(t), [h, p] = N.useState(null), m = io(), v = N.useRef(0), E = l ?? f.disableHoverableContent, y = u ?? f.delayDuration, w = N.useRef(!1), [b, C] = Vs({
    prop: o,
    defaultProp: i ?? !1,
    onChange: (I) => {
      I ? (f.onOpen(), document.dispatchEvent(new CustomEvent(wy))) : f.onClose(), a == null || a(I);
    },
    caller: Us
  }), _ = N.useMemo(() => b ? w.current ? "delayed-open" : "instant-open" : "closed", [b]), k = N.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, w.current = !1, C(!0);
  }, [C]), P = N.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, C(!1);
  }, [C]), T = N.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      w.current = !0, C(!0), v.current = 0;
    }, y);
  }, [y, C]);
  return N.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ R.jsx(cT, { ...d, children: /* @__PURE__ */ R.jsx(
    qV,
    {
      scope: t,
      contentId: m,
      open: b,
      stateAttribute: _,
      trigger: h,
      onTriggerChange: p,
      onTriggerEnter: N.useCallback(() => {
        f.isOpenDelayedRef.current ? T() : k();
      }, [f.isOpenDelayedRef, T, k]),
      onTriggerLeave: N.useCallback(() => {
        E ? P() : (window.clearTimeout(v.current), v.current = 0);
      }, [P, E]),
      onOpen: k,
      onClose: P,
      disableHoverableContent: E,
      children: n
    }
  ) });
};
gA.displayName = Us;
var _y = "TooltipTrigger", mA = N.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = ra(_y, n), a = o0(_y, n), l = Hu(n), u = N.useRef(null), f = Be(t, u, i.onTriggerChange), d = N.useRef(!1), h = N.useRef(!1), p = N.useCallback(() => d.current = !1, []);
    return N.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ R.jsx(fT, { asChild: !0, ...l, children: /* @__PURE__ */ R.jsx(
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
mA.displayName = _y;
var i0 = "TooltipPortal", [zV, FV] = Vu(i0, {
  forceMount: void 0
}), vA = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: i } = e, a = ra(i0, t);
  return /* @__PURE__ */ R.jsx(zV, { scope: t, forceMount: n, children: /* @__PURE__ */ R.jsx(go, { present: n || a.open, children: /* @__PURE__ */ R.jsx(ju, { asChild: !0, container: i, children: o }) }) });
};
vA.displayName = i0;
var pi = "TooltipContent", yA = N.forwardRef(
  (e, t) => {
    const n = FV(pi, e.__scopeTooltip), { forceMount: o = n.forceMount, side: i = "top", ...a } = e, l = ra(pi, e.__scopeTooltip);
    return /* @__PURE__ */ R.jsx(go, { present: o || l.open, children: l.disableHoverableContent ? /* @__PURE__ */ R.jsx(xA, { side: i, ...a, ref: t }) : /* @__PURE__ */ R.jsx($V, { side: i, ...a, ref: t }) });
  }
), $V = N.forwardRef((e, t) => {
  const n = ra(pi, e.__scopeTooltip), o = o0(pi, e.__scopeTooltip), i = N.useRef(null), a = Be(t, i), [l, u] = N.useState(null), { trigger: f, onClose: d } = n, h = i.current, { onPointerInTransitChange: p } = o, m = N.useCallback(() => {
    u(null), p(!1);
  }, [p]), v = N.useCallback(
    (E, y) => {
      const w = E.currentTarget, b = { x: E.clientX, y: E.clientY }, C = WV(b, w.getBoundingClientRect()), _ = UV(b, C), k = GV(y.getBoundingClientRect()), P = KV([..._, ...k]);
      u(P), p(!0);
    },
    [p]
  );
  return N.useEffect(() => () => m(), [m]), N.useEffect(() => {
    if (f && h) {
      const E = (w) => v(w, h), y = (w) => v(w, f);
      return f.addEventListener("pointerleave", E), h.addEventListener("pointerleave", y), () => {
        f.removeEventListener("pointerleave", E), h.removeEventListener("pointerleave", y);
      };
    }
  }, [f, h, v, m]), N.useEffect(() => {
    if (l) {
      const E = (y) => {
        const w = y.target, b = { x: y.clientX, y: y.clientY }, C = (f == null ? void 0 : f.contains(w)) || (h == null ? void 0 : h.contains(w)), _ = !YV(b, l);
        C ? m() : _ && (m(), d());
      };
      return document.addEventListener("pointermove", E), () => document.removeEventListener("pointermove", E);
    }
  }, [f, h, l, d, m]), /* @__PURE__ */ R.jsx(xA, { ...e, ref: a });
}), [BV, VV] = Vu(Us, { isInside: !1 }), HV = /* @__PURE__ */ LV("TooltipContent"), xA = N.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = e, f = ra(pi, n), d = Hu(n), { onClose: h } = f;
    return N.useEffect(() => (document.addEventListener(wy, h), () => document.removeEventListener(wy, h)), [h]), N.useEffect(() => {
      if (f.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(f.trigger) && h();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [f.trigger, h]), /* @__PURE__ */ R.jsx(
      Tu,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: h,
        children: /* @__PURE__ */ R.jsxs(
          dT,
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
              /* @__PURE__ */ R.jsx(HV, { children: o }),
              /* @__PURE__ */ R.jsx(BV, { scope: n, isInside: !0, children: /* @__PURE__ */ R.jsx(mB, { id: f.contentId, role: "tooltip", children: i || o }) })
            ]
          }
        )
      }
    );
  }
);
yA.displayName = pi;
var wA = "TooltipArrow", _A = N.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, i = Hu(n);
    return VV(
      wA,
      n
    ).isInside ? null : /* @__PURE__ */ R.jsx(hT, { ...i, ...o, ref: t });
  }
);
_A.displayName = wA;
function WV(e, t) {
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
function UV(e, t, n = 5) {
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
function GV(e) {
  const { top: t, right: n, bottom: o, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: i, y: o }
  ];
}
function YV(e, t) {
  const { x: n, y: o } = e;
  let i = !1;
  for (let a = 0, l = t.length - 1; a < t.length; l = a++) {
    const u = t[a], f = t[l], d = u.x, h = u.y, p = f.x, m = f.y;
    h > o != m > o && n < (p - d) * (o - h) / (m - h) + d && (i = !i);
  }
  return i;
}
function KV(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), XV(t);
}
function XV(e) {
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
var QV = pA, ZV = gA, JV = mA, eH = vA, tH = yA, nH = _A;
function bA({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    QV,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function rH({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(bA, { children: /* @__PURE__ */ R.jsx(ZV, { "data-slot": "tooltip", ...e }) });
}
function oH({
  ...e
}) {
  return /* @__PURE__ */ R.jsx(JV, { "data-slot": "tooltip-trigger", ...e });
}
function iH({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ R.jsx(eH, { children: /* @__PURE__ */ R.jsxs(
    tH,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: Ae(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ R.jsx(nH, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const sH = "sidebar_state", aH = 3600 * 24 * 7, lH = "16rem", uH = "18rem", cH = "3rem", fH = "b", SA = N.createContext(null);
function s0() {
  const e = N.useContext(SA);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function dH({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: a,
  ...l
}) {
  const u = nV(), [f, d] = N.useState(!1), [h, p] = N.useState(e), m = t ?? h, v = N.useCallback(
    (b) => {
      const C = typeof b == "function" ? b(m) : b;
      n ? n(C) : p(C), document.cookie = `${sH}=${C}; path=/; max-age=${aH}`;
    },
    [n, m]
  ), E = N.useCallback(() => u ? d((b) => !b) : v((b) => !b), [u, v, d]);
  N.useEffect(() => {
    const b = (C) => {
      C.key === fH && (C.metaKey || C.ctrlKey) && (C.preventDefault(), E());
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [E]);
  const y = m ? "expanded" : "collapsed", w = N.useMemo(
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
  return /* @__PURE__ */ R.jsx(SA.Provider, { value: w, children: /* @__PURE__ */ R.jsx(bA, { delayDuration: 0, children: /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": lH,
        "--sidebar-width-icon": cH,
        ...i
      },
      className: Ae(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...l,
      children: a
    }
  ) }) });
}
function hH({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...a
}) {
  const { isMobile: l, state: u, openMobile: f, setOpenMobile: d } = s0();
  return n === "none" ? /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: Ae(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...a,
      children: i
    }
  ) : l ? /* @__PURE__ */ R.jsx(NV, { open: f, onOpenChange: d, ...a, children: /* @__PURE__ */ R.jsxs(
    TV,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": uH
      },
      side: e,
      children: [
        /* @__PURE__ */ R.jsxs(AV, { className: "sr-only", children: [
          /* @__PURE__ */ R.jsx(IV, { children: "Sidebar" }),
          /* @__PURE__ */ R.jsx(MV, { children: "Displays the mobile sidebar." })
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
            className: Ae(
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
            className: Ae(
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
function pH({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = s0();
  return /* @__PURE__ */ R.jsxs(
    As,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: Ae("size-7", e),
      onClick: (i) => {
        t == null || t(i), o();
      },
      ...n,
      children: [
        /* @__PURE__ */ R.jsx(f4, {}),
        /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function gH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: Ae("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function mH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: Ae(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function vH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: Ae("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function yH({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: Ae("w-full text-sm", e),
      ...t
    }
  );
}
function xH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: Ae("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function wH({ className: e, ...t }) {
  return /* @__PURE__ */ R.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: Ae("group/menu-item relative", e),
      ...t
    }
  );
}
const _H = By(
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
function bH({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: a,
  ...l
}) {
  const u = e ? $y : "button", { isMobile: f, state: d } = s0(), h = /* @__PURE__ */ R.jsx(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: Ae(_H({ variant: n, size: o }), a),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ R.jsxs(rH, { children: [
    /* @__PURE__ */ R.jsx(oH, { asChild: !0, children: h }),
    /* @__PURE__ */ R.jsx(
      iH,
      {
        side: "right",
        align: "center",
        hidden: d !== "collapsed" || f,
        ...i
      }
    )
  ] })) : h;
}
function SH({ onAddNode: e, templates: t }) {
  return /* @__PURE__ */ R.jsx(mH, { children: /* @__PURE__ */ R.jsx(vH, { children: /* @__PURE__ */ R.jsx(yH, { children: /* @__PURE__ */ R.jsx(xH, { children: t.map((n, o) => /* @__PURE__ */ R.jsx(wH, { children: /* @__PURE__ */ R.jsxs(
    bH,
    {
      onClick: () => e(n),
      tooltip: n.description,
      children: [
        /* @__PURE__ */ R.jsx("div", { className: "flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded text-sm font-bold", children: n.icon || /* @__PURE__ */ R.jsx(h4, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ R.jsx("span", { children: n.label })
      ]
    }
  ) }, o)) }) }) }) });
}
function EH({
  onExport: e,
  onLayoutVertical: t,
  onLayoutHorizontal: n
}) {
  return /* @__PURE__ */ R.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ R.jsxs(As, { onClick: e, variant: "default", size: "sm", children: [
      /* @__PURE__ */ R.jsx(u4, { className: "h-4 w-4 mr-2" }),
      "Export to JSON"
    ] }),
    /* @__PURE__ */ R.jsxs(As, { onClick: t, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ R.jsx(t4, { className: "h-4 w-4 mr-2" }),
      "Layout Vertical"
    ] }),
    /* @__PURE__ */ R.jsxs(As, { onClick: n, variant: "outline", size: "sm", children: [
      /* @__PURE__ */ R.jsx(r4, { className: "h-4 w-4 mr-2" }),
      "Layout Horizontal"
    ] })
  ] });
}
function CH({ x: e, y: t, onDelete: n, onClose: o }) {
  return Zt.useEffect(() => {
    const i = () => o(), a = (l) => {
      l.key === "Escape" && o();
    };
    return document.addEventListener("click", i), document.addEventListener("keydown", a), () => {
      document.removeEventListener("click", i), document.removeEventListener("keydown", a);
    };
  }, [o]), /* @__PURE__ */ R.jsx(
    QT,
    {
      className: "fixed z-[1000] min-w-[150px] p-1 shadow-md",
      style: { top: t, left: e },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ R.jsxs(
        As,
        {
          variant: "ghost",
          className: "w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10",
          onClick: n,
          children: [
            /* @__PURE__ */ R.jsx(g4, { className: "h-4 w-4" }),
            "Delete"
          ]
        }
      )
    }
  );
}
function kH({
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
      G3,
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
          /* @__PURE__ */ R.jsx(Z3, {}),
          /* @__PURE__ */ R.jsx(iz, {}),
          /* @__PURE__ */ R.jsx(ta, { position: "top-right", children: /* @__PURE__ */ R.jsx(
            EH,
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
      CH,
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
function a0(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Id, K1;
function NH() {
  if (K1) return Id;
  K1 = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Id = e, Id;
}
var Md, X1;
function Si() {
  if (X1) return Md;
  X1 = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Md = e, Md;
}
var Od, Q1;
function Wu() {
  if (Q1) return Od;
  Q1 = 1;
  var e = Si();
  function t(n, o) {
    for (var i = n.length; i--; )
      if (e(n[i][0], o))
        return i;
    return -1;
  }
  return Od = t, Od;
}
var Ld, Z1;
function RH() {
  if (Z1) return Ld;
  Z1 = 1;
  var e = Wu(), t = Array.prototype, n = t.splice;
  function o(i) {
    var a = this.__data__, l = e(a, i);
    if (l < 0)
      return !1;
    var u = a.length - 1;
    return l == u ? a.pop() : n.call(a, l, 1), --this.size, !0;
  }
  return Ld = o, Ld;
}
var jd, J1;
function PH() {
  if (J1) return jd;
  J1 = 1;
  var e = Wu();
  function t(n) {
    var o = this.__data__, i = e(o, n);
    return i < 0 ? void 0 : o[i][1];
  }
  return jd = t, jd;
}
var Dd, eb;
function TH() {
  if (eb) return Dd;
  eb = 1;
  var e = Wu();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Dd = t, Dd;
}
var qd, tb;
function AH() {
  if (tb) return qd;
  tb = 1;
  var e = Wu();
  function t(n, o) {
    var i = this.__data__, a = e(i, n);
    return a < 0 ? (++this.size, i.push([n, o])) : i[a][1] = o, this;
  }
  return qd = t, qd;
}
var zd, nb;
function Uu() {
  if (nb) return zd;
  nb = 1;
  var e = NH(), t = RH(), n = PH(), o = TH(), i = AH();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, zd = a, zd;
}
var Fd, rb;
function IH() {
  if (rb) return Fd;
  rb = 1;
  var e = Uu();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Fd = t, Fd;
}
var $d, ob;
function MH() {
  if (ob) return $d;
  ob = 1;
  function e(t) {
    var n = this.__data__, o = n.delete(t);
    return this.size = n.size, o;
  }
  return $d = e, $d;
}
var Bd, ib;
function OH() {
  if (ib) return Bd;
  ib = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Bd = e, Bd;
}
var Vd, sb;
function LH() {
  if (sb) return Vd;
  sb = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Vd = e, Vd;
}
var Hd, ab;
function EA() {
  if (ab) return Hd;
  ab = 1;
  var e = typeof Sl == "object" && Sl && Sl.Object === Object && Sl;
  return Hd = e, Hd;
}
var Wd, lb;
function wn() {
  if (lb) return Wd;
  lb = 1;
  var e = EA(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return Wd = n, Wd;
}
var Ud, ub;
function Ei() {
  if (ub) return Ud;
  ub = 1;
  var e = wn(), t = e.Symbol;
  return Ud = t, Ud;
}
var Gd, cb;
function jH() {
  if (cb) return Gd;
  cb = 1;
  var e = Ei(), t = Object.prototype, n = t.hasOwnProperty, o = t.toString, i = e ? e.toStringTag : void 0;
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
var Yd, fb;
function DH() {
  if (fb) return Yd;
  fb = 1;
  var e = Object.prototype, t = e.toString;
  function n(o) {
    return t.call(o);
  }
  return Yd = n, Yd;
}
var Kd, db;
function mo() {
  if (db) return Kd;
  db = 1;
  var e = Ei(), t = jH(), n = DH(), o = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function l(u) {
    return u == null ? u === void 0 ? i : o : a && a in Object(u) ? t(u) : n(u);
  }
  return Kd = l, Kd;
}
var Xd, hb;
function Jt() {
  if (hb) return Xd;
  hb = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Xd = e, Xd;
}
var Qd, pb;
function oa() {
  if (pb) return Qd;
  pb = 1;
  var e = mo(), t = Jt(), n = "[object AsyncFunction]", o = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function l(u) {
    if (!t(u))
      return !1;
    var f = e(u);
    return f == o || f == i || f == n || f == a;
  }
  return Qd = l, Qd;
}
var Zd, gb;
function qH() {
  if (gb) return Zd;
  gb = 1;
  var e = wn(), t = e["__core-js_shared__"];
  return Zd = t, Zd;
}
var Jd, mb;
function zH() {
  if (mb) return Jd;
  mb = 1;
  var e = qH(), t = (function() {
    var o = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  })();
  function n(o) {
    return !!t && t in o;
  }
  return Jd = n, Jd;
}
var eh, vb;
function CA() {
  if (vb) return eh;
  vb = 1;
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
var th, yb;
function FH() {
  if (yb) return th;
  yb = 1;
  var e = oa(), t = zH(), n = Jt(), o = CA(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, l = Function.prototype, u = Object.prototype, f = l.toString, d = u.hasOwnProperty, h = RegExp(
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
var nh, xb;
function $H() {
  if (xb) return nh;
  xb = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return nh = e, nh;
}
var rh, wb;
function vo() {
  if (wb) return rh;
  wb = 1;
  var e = FH(), t = $H();
  function n(o, i) {
    var a = t(o, i);
    return e(a) ? a : void 0;
  }
  return rh = n, rh;
}
var oh, _b;
function l0() {
  if (_b) return oh;
  _b = 1;
  var e = vo(), t = wn(), n = e(t, "Map");
  return oh = n, oh;
}
var ih, bb;
function Gu() {
  if (bb) return ih;
  bb = 1;
  var e = vo(), t = e(Object, "create");
  return ih = t, ih;
}
var sh, Sb;
function BH() {
  if (Sb) return sh;
  Sb = 1;
  var e = Gu();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return sh = t, sh;
}
var ah, Eb;
function VH() {
  if (Eb) return ah;
  Eb = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return ah = e, ah;
}
var lh, Cb;
function HH() {
  if (Cb) return lh;
  Cb = 1;
  var e = Gu(), t = "__lodash_hash_undefined__", n = Object.prototype, o = n.hasOwnProperty;
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
var uh, kb;
function WH() {
  if (kb) return uh;
  kb = 1;
  var e = Gu(), t = Object.prototype, n = t.hasOwnProperty;
  function o(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : n.call(a, i);
  }
  return uh = o, uh;
}
var ch, Nb;
function UH() {
  if (Nb) return ch;
  Nb = 1;
  var e = Gu(), t = "__lodash_hash_undefined__";
  function n(o, i) {
    var a = this.__data__;
    return this.size += this.has(o) ? 0 : 1, a[o] = e && i === void 0 ? t : i, this;
  }
  return ch = n, ch;
}
var fh, Rb;
function GH() {
  if (Rb) return fh;
  Rb = 1;
  var e = BH(), t = VH(), n = HH(), o = WH(), i = UH();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, fh = a, fh;
}
var dh, Pb;
function YH() {
  if (Pb) return dh;
  Pb = 1;
  var e = GH(), t = Uu(), n = l0();
  function o() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return dh = o, dh;
}
var hh, Tb;
function KH() {
  if (Tb) return hh;
  Tb = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return hh = e, hh;
}
var ph, Ab;
function Yu() {
  if (Ab) return ph;
  Ab = 1;
  var e = KH();
  function t(n, o) {
    var i = n.__data__;
    return e(o) ? i[typeof o == "string" ? "string" : "hash"] : i.map;
  }
  return ph = t, ph;
}
var gh, Ib;
function XH() {
  if (Ib) return gh;
  Ib = 1;
  var e = Yu();
  function t(n) {
    var o = e(this, n).delete(n);
    return this.size -= o ? 1 : 0, o;
  }
  return gh = t, gh;
}
var mh, Mb;
function QH() {
  if (Mb) return mh;
  Mb = 1;
  var e = Yu();
  function t(n) {
    return e(this, n).get(n);
  }
  return mh = t, mh;
}
var vh, Ob;
function ZH() {
  if (Ob) return vh;
  Ob = 1;
  var e = Yu();
  function t(n) {
    return e(this, n).has(n);
  }
  return vh = t, vh;
}
var yh, Lb;
function JH() {
  if (Lb) return yh;
  Lb = 1;
  var e = Yu();
  function t(n, o) {
    var i = e(this, n), a = i.size;
    return i.set(n, o), this.size += i.size == a ? 0 : 1, this;
  }
  return yh = t, yh;
}
var xh, jb;
function u0() {
  if (jb) return xh;
  jb = 1;
  var e = YH(), t = XH(), n = QH(), o = ZH(), i = JH();
  function a(l) {
    var u = -1, f = l == null ? 0 : l.length;
    for (this.clear(); ++u < f; ) {
      var d = l[u];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = o, a.prototype.set = i, xh = a, xh;
}
var wh, Db;
function e8() {
  if (Db) return wh;
  Db = 1;
  var e = Uu(), t = l0(), n = u0(), o = 200;
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
var _h, qb;
function Ku() {
  if (qb) return _h;
  qb = 1;
  var e = Uu(), t = IH(), n = MH(), o = OH(), i = LH(), a = e8();
  function l(u) {
    var f = this.__data__ = new e(u);
    this.size = f.size;
  }
  return l.prototype.clear = t, l.prototype.delete = n, l.prototype.get = o, l.prototype.has = i, l.prototype.set = a, _h = l, _h;
}
var bh, zb;
function c0() {
  if (zb) return bh;
  zb = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i && n(t[o], o, t) !== !1; )
      ;
    return t;
  }
  return bh = e, bh;
}
var Sh, Fb;
function kA() {
  if (Fb) return Sh;
  Fb = 1;
  var e = vo(), t = (function() {
    try {
      var n = e(Object, "defineProperty");
      return n({}, "", {}), n;
    } catch {
    }
  })();
  return Sh = t, Sh;
}
var Eh, $b;
function Xu() {
  if ($b) return Eh;
  $b = 1;
  var e = kA();
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
var Ch, Bb;
function Qu() {
  if (Bb) return Ch;
  Bb = 1;
  var e = Xu(), t = Si(), n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u) {
    var f = a[l];
    (!(o.call(a, l) && t(f, u)) || u === void 0 && !(l in a)) && e(a, l, u);
  }
  return Ch = i, Ch;
}
var kh, Vb;
function ia() {
  if (Vb) return kh;
  Vb = 1;
  var e = Qu(), t = Xu();
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
var Nh, Hb;
function t8() {
  if (Hb) return Nh;
  Hb = 1;
  function e(t, n) {
    for (var o = -1, i = Array(t); ++o < t; )
      i[o] = n(o);
    return i;
  }
  return Nh = e, Nh;
}
var Rh, Wb;
function Dn() {
  if (Wb) return Rh;
  Wb = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Rh = e, Rh;
}
var Ph, Ub;
function n8() {
  if (Ub) return Ph;
  Ub = 1;
  var e = mo(), t = Dn(), n = "[object Arguments]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Ph = o, Ph;
}
var Th, Gb;
function sa() {
  if (Gb) return Th;
  Gb = 1;
  var e = n8(), t = Dn(), n = Object.prototype, o = n.hasOwnProperty, i = n.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(l) {
    return t(l) && o.call(l, "callee") && !i.call(l, "callee");
  };
  return Th = a, Th;
}
var Ah, Yb;
function rt() {
  if (Yb) return Ah;
  Yb = 1;
  var e = Array.isArray;
  return Ah = e, Ah;
}
var ks = { exports: {} }, Ih, Kb;
function r8() {
  if (Kb) return Ih;
  Kb = 1;
  function e() {
    return !1;
  }
  return Ih = e, Ih;
}
ks.exports;
var Xb;
function Ci() {
  return Xb || (Xb = 1, (function(e, t) {
    var n = wn(), o = r8(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, l = a && a.exports === i, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || o;
    e.exports = d;
  })(ks, ks.exports)), ks.exports;
}
var Mh, Qb;
function Zu() {
  if (Qb) return Mh;
  Qb = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function n(o, i) {
    var a = typeof o;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(o)) && o > -1 && o % 1 == 0 && o < i;
  }
  return Mh = n, Mh;
}
var Oh, Zb;
function f0() {
  if (Zb) return Oh;
  Zb = 1;
  var e = 9007199254740991;
  function t(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= e;
  }
  return Oh = t, Oh;
}
var Lh, Jb;
function o8() {
  if (Jb) return Lh;
  Jb = 1;
  var e = mo(), t = f0(), n = Dn(), o = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", l = "[object Date]", u = "[object Error]", f = "[object Function]", d = "[object Map]", h = "[object Number]", p = "[object Object]", m = "[object RegExp]", v = "[object Set]", E = "[object String]", y = "[object WeakMap]", w = "[object ArrayBuffer]", b = "[object DataView]", C = "[object Float32Array]", _ = "[object Float64Array]", k = "[object Int8Array]", P = "[object Int16Array]", T = "[object Int32Array]", I = "[object Uint8Array]", L = "[object Uint8ClampedArray]", D = "[object Uint16Array]", Y = "[object Uint32Array]", $ = {};
  $[C] = $[_] = $[k] = $[P] = $[T] = $[I] = $[L] = $[D] = $[Y] = !0, $[o] = $[i] = $[w] = $[a] = $[b] = $[l] = $[u] = $[f] = $[d] = $[h] = $[p] = $[m] = $[v] = $[E] = $[y] = !1;
  function V(H) {
    return n(H) && t(H.length) && !!$[e(H)];
  }
  return Lh = V, Lh;
}
var jh, eS;
function Ju() {
  if (eS) return jh;
  eS = 1;
  function e(t) {
    return function(n) {
      return t(n);
    };
  }
  return jh = e, jh;
}
var Ns = { exports: {} };
Ns.exports;
var tS;
function d0() {
  return tS || (tS = 1, (function(e, t) {
    var n = EA(), o = t && !t.nodeType && t, i = o && !0 && e && !e.nodeType && e, a = i && i.exports === o, l = a && n.process, u = (function() {
      try {
        var f = i && i.require && i.require("util").types;
        return f || l && l.binding && l.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Ns, Ns.exports)), Ns.exports;
}
var Dh, nS;
function aa() {
  if (nS) return Dh;
  nS = 1;
  var e = o8(), t = Ju(), n = d0(), o = n && n.isTypedArray, i = o ? t(o) : e;
  return Dh = i, Dh;
}
var qh, rS;
function NA() {
  if (rS) return qh;
  rS = 1;
  var e = t8(), t = sa(), n = rt(), o = Ci(), i = Zu(), a = aa(), l = Object.prototype, u = l.hasOwnProperty;
  function f(d, h) {
    var p = n(d), m = !p && t(d), v = !p && !m && o(d), E = !p && !m && !v && a(d), y = p || m || v || E, w = y ? e(d.length, String) : [], b = w.length;
    for (var C in d)
      (h || u.call(d, C)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
      i(C, b))) && w.push(C);
    return w;
  }
  return qh = f, qh;
}
var zh, oS;
function ec() {
  if (oS) return zh;
  oS = 1;
  var e = Object.prototype;
  function t(n) {
    var o = n && n.constructor, i = typeof o == "function" && o.prototype || e;
    return n === i;
  }
  return zh = t, zh;
}
var Fh, iS;
function RA() {
  if (iS) return Fh;
  iS = 1;
  function e(t, n) {
    return function(o) {
      return t(n(o));
    };
  }
  return Fh = e, Fh;
}
var $h, sS;
function i8() {
  if (sS) return $h;
  sS = 1;
  var e = RA(), t = e(Object.keys, Object);
  return $h = t, $h;
}
var Bh, aS;
function h0() {
  if (aS) return Bh;
  aS = 1;
  var e = ec(), t = i8(), n = Object.prototype, o = n.hasOwnProperty;
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
var Vh, lS;
function er() {
  if (lS) return Vh;
  lS = 1;
  var e = oa(), t = f0();
  function n(o) {
    return o != null && t(o.length) && !e(o);
  }
  return Vh = n, Vh;
}
var Hh, uS;
function Lr() {
  if (uS) return Hh;
  uS = 1;
  var e = NA(), t = h0(), n = er();
  function o(i) {
    return n(i) ? e(i) : t(i);
  }
  return Hh = o, Hh;
}
var Wh, cS;
function s8() {
  if (cS) return Wh;
  cS = 1;
  var e = ia(), t = Lr();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Wh = n, Wh;
}
var Uh, fS;
function a8() {
  if (fS) return Uh;
  fS = 1;
  function e(t) {
    var n = [];
    if (t != null)
      for (var o in Object(t))
        n.push(o);
    return n;
  }
  return Uh = e, Uh;
}
var Gh, dS;
function l8() {
  if (dS) return Gh;
  dS = 1;
  var e = Jt(), t = ec(), n = a8(), o = Object.prototype, i = o.hasOwnProperty;
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
var Yh, hS;
function yo() {
  if (hS) return Yh;
  hS = 1;
  var e = NA(), t = l8(), n = er();
  function o(i) {
    return n(i) ? e(i, !0) : t(i);
  }
  return Yh = o, Yh;
}
var Kh, pS;
function u8() {
  if (pS) return Kh;
  pS = 1;
  var e = ia(), t = yo();
  function n(o, i) {
    return o && e(i, t(i), o);
  }
  return Kh = n, Kh;
}
var Rs = { exports: {} };
Rs.exports;
var gS;
function PA() {
  return gS || (gS = 1, (function(e, t) {
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
var Xh, mS;
function TA() {
  if (mS) return Xh;
  mS = 1;
  function e(t, n) {
    var o = -1, i = t.length;
    for (n || (n = Array(i)); ++o < i; )
      n[o] = t[o];
    return n;
  }
  return Xh = e, Xh;
}
var Qh, vS;
function AA() {
  if (vS) return Qh;
  vS = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = 0, l = []; ++o < i; ) {
      var u = t[o];
      n(u, o, t) && (l[a++] = u);
    }
    return l;
  }
  return Qh = e, Qh;
}
var Zh, yS;
function IA() {
  if (yS) return Zh;
  yS = 1;
  function e() {
    return [];
  }
  return Zh = e, Zh;
}
var Jh, xS;
function p0() {
  if (xS) return Jh;
  xS = 1;
  var e = AA(), t = IA(), n = Object.prototype, o = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(l) {
    return l == null ? [] : (l = Object(l), e(i(l), function(u) {
      return o.call(l, u);
    }));
  } : t;
  return Jh = a, Jh;
}
var ep, wS;
function c8() {
  if (wS) return ep;
  wS = 1;
  var e = ia(), t = p0();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return ep = n, ep;
}
var tp, _S;
function g0() {
  if (_S) return tp;
  _S = 1;
  function e(t, n) {
    for (var o = -1, i = n.length, a = t.length; ++o < i; )
      t[a + o] = n[o];
    return t;
  }
  return tp = e, tp;
}
var np, bS;
function tc() {
  if (bS) return np;
  bS = 1;
  var e = RA(), t = e(Object.getPrototypeOf, Object);
  return np = t, np;
}
var rp, SS;
function MA() {
  if (SS) return rp;
  SS = 1;
  var e = g0(), t = tc(), n = p0(), o = IA(), i = Object.getOwnPropertySymbols, a = i ? function(l) {
    for (var u = []; l; )
      e(u, n(l)), l = t(l);
    return u;
  } : o;
  return rp = a, rp;
}
var op, ES;
function f8() {
  if (ES) return op;
  ES = 1;
  var e = ia(), t = MA();
  function n(o, i) {
    return e(o, t(o), i);
  }
  return op = n, op;
}
var ip, CS;
function OA() {
  if (CS) return ip;
  CS = 1;
  var e = g0(), t = rt();
  function n(o, i, a) {
    var l = i(o);
    return t(o) ? l : e(l, a(o));
  }
  return ip = n, ip;
}
var sp, kS;
function LA() {
  if (kS) return sp;
  kS = 1;
  var e = OA(), t = p0(), n = Lr();
  function o(i) {
    return e(i, n, t);
  }
  return sp = o, sp;
}
var ap, NS;
function d8() {
  if (NS) return ap;
  NS = 1;
  var e = OA(), t = MA(), n = yo();
  function o(i) {
    return e(i, n, t);
  }
  return ap = o, ap;
}
var lp, RS;
function h8() {
  if (RS) return lp;
  RS = 1;
  var e = vo(), t = wn(), n = e(t, "DataView");
  return lp = n, lp;
}
var up, PS;
function p8() {
  if (PS) return up;
  PS = 1;
  var e = vo(), t = wn(), n = e(t, "Promise");
  return up = n, up;
}
var cp, TS;
function jA() {
  if (TS) return cp;
  TS = 1;
  var e = vo(), t = wn(), n = e(t, "Set");
  return cp = n, cp;
}
var fp, AS;
function g8() {
  if (AS) return fp;
  AS = 1;
  var e = vo(), t = wn(), n = e(t, "WeakMap");
  return fp = n, fp;
}
var dp, IS;
function ki() {
  if (IS) return dp;
  IS = 1;
  var e = h8(), t = l0(), n = p8(), o = jA(), i = g8(), a = mo(), l = CA(), u = "[object Map]", f = "[object Object]", d = "[object Promise]", h = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", v = l(e), E = l(t), y = l(n), w = l(o), b = l(i), C = a;
  return (e && C(new e(new ArrayBuffer(1))) != m || t && C(new t()) != u || n && C(n.resolve()) != d || o && C(new o()) != h || i && C(new i()) != p) && (C = function(_) {
    var k = a(_), P = k == f ? _.constructor : void 0, T = P ? l(P) : "";
    if (T)
      switch (T) {
        case v:
          return m;
        case E:
          return u;
        case y:
          return d;
        case w:
          return h;
        case b:
          return p;
      }
    return k;
  }), dp = C, dp;
}
var hp, MS;
function m8() {
  if (MS) return hp;
  MS = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o) {
    var i = o.length, a = new o.constructor(i);
    return i && typeof o[0] == "string" && t.call(o, "index") && (a.index = o.index, a.input = o.input), a;
  }
  return hp = n, hp;
}
var pp, OS;
function DA() {
  if (OS) return pp;
  OS = 1;
  var e = wn(), t = e.Uint8Array;
  return pp = t, pp;
}
var gp, LS;
function m0() {
  if (LS) return gp;
  LS = 1;
  var e = DA();
  function t(n) {
    var o = new n.constructor(n.byteLength);
    return new e(o).set(new e(n)), o;
  }
  return gp = t, gp;
}
var mp, jS;
function v8() {
  if (jS) return mp;
  jS = 1;
  var e = m0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.byteLength);
  }
  return mp = t, mp;
}
var vp, DS;
function y8() {
  if (DS) return vp;
  DS = 1;
  var e = /\w*$/;
  function t(n) {
    var o = new n.constructor(n.source, e.exec(n));
    return o.lastIndex = n.lastIndex, o;
  }
  return vp = t, vp;
}
var yp, qS;
function x8() {
  if (qS) return yp;
  qS = 1;
  var e = Ei(), t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function o(i) {
    return n ? Object(n.call(i)) : {};
  }
  return yp = o, yp;
}
var xp, zS;
function qA() {
  if (zS) return xp;
  zS = 1;
  var e = m0();
  function t(n, o) {
    var i = o ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.length);
  }
  return xp = t, xp;
}
var wp, FS;
function w8() {
  if (FS) return wp;
  FS = 1;
  var e = m0(), t = v8(), n = y8(), o = x8(), i = qA(), a = "[object Boolean]", l = "[object Date]", u = "[object Map]", f = "[object Number]", d = "[object RegExp]", h = "[object Set]", p = "[object String]", m = "[object Symbol]", v = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", w = "[object Float64Array]", b = "[object Int8Array]", C = "[object Int16Array]", _ = "[object Int32Array]", k = "[object Uint8Array]", P = "[object Uint8ClampedArray]", T = "[object Uint16Array]", I = "[object Uint32Array]";
  function L(D, Y, $) {
    var V = D.constructor;
    switch (Y) {
      case v:
        return e(D);
      case a:
      case l:
        return new V(+D);
      case E:
        return t(D, $);
      case y:
      case w:
      case b:
      case C:
      case _:
      case k:
      case P:
      case T:
      case I:
        return i(D, $);
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
  return wp = L, wp;
}
var _p, $S;
function zA() {
  if ($S) return _p;
  $S = 1;
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
var bp, BS;
function FA() {
  if (BS) return bp;
  BS = 1;
  var e = zA(), t = tc(), n = ec();
  function o(i) {
    return typeof i.constructor == "function" && !n(i) ? e(t(i)) : {};
  }
  return bp = o, bp;
}
var Sp, VS;
function _8() {
  if (VS) return Sp;
  VS = 1;
  var e = ki(), t = Dn(), n = "[object Map]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Sp = o, Sp;
}
var Ep, HS;
function b8() {
  if (HS) return Ep;
  HS = 1;
  var e = _8(), t = Ju(), n = d0(), o = n && n.isMap, i = o ? t(o) : e;
  return Ep = i, Ep;
}
var Cp, WS;
function S8() {
  if (WS) return Cp;
  WS = 1;
  var e = ki(), t = Dn(), n = "[object Set]";
  function o(i) {
    return t(i) && e(i) == n;
  }
  return Cp = o, Cp;
}
var kp, US;
function E8() {
  if (US) return kp;
  US = 1;
  var e = S8(), t = Ju(), n = d0(), o = n && n.isSet, i = o ? t(o) : e;
  return kp = i, kp;
}
var Np, GS;
function $A() {
  if (GS) return Np;
  GS = 1;
  var e = Ku(), t = c0(), n = Qu(), o = s8(), i = u8(), a = PA(), l = TA(), u = c8(), f = f8(), d = LA(), h = d8(), p = ki(), m = m8(), v = w8(), E = FA(), y = rt(), w = Ci(), b = b8(), C = Jt(), _ = E8(), k = Lr(), P = yo(), T = 1, I = 2, L = 4, D = "[object Arguments]", Y = "[object Array]", $ = "[object Boolean]", V = "[object Date]", H = "[object Error]", O = "[object Function]", W = "[object GeneratorFunction]", q = "[object Map]", U = "[object Number]", M = "[object Object]", z = "[object RegExp]", Q = "[object Set]", j = "[object String]", G = "[object Symbol]", ie = "[object WeakMap]", B = "[object ArrayBuffer]", Z = "[object DataView]", ee = "[object Float32Array]", X = "[object Float64Array]", te = "[object Int8Array]", se = "[object Int16Array]", ae = "[object Int32Array]", ce = "[object Uint8Array]", de = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", be = "[object Uint32Array]", ve = {};
  ve[D] = ve[Y] = ve[B] = ve[Z] = ve[$] = ve[V] = ve[ee] = ve[X] = ve[te] = ve[se] = ve[ae] = ve[q] = ve[U] = ve[M] = ve[z] = ve[Q] = ve[j] = ve[G] = ve[ce] = ve[de] = ve[pe] = ve[be] = !0, ve[H] = ve[O] = ve[ie] = !1;
  function Re(Ee, Je, Ue, Ft, ht, at) {
    var Ge, tn = Je & T, $t = Je & I, nn = Je & L;
    if (Ue && (Ge = ht ? Ue(Ee, Ft, ht, at) : Ue(Ee)), Ge !== void 0)
      return Ge;
    if (!C(Ee))
      return Ee;
    var Bt = y(Ee);
    if (Bt) {
      if (Ge = m(Ee), !tn)
        return l(Ee, Ge);
    } else {
      var _t = p(Ee), jr = _t == O || _t == W;
      if (w(Ee))
        return a(Ee, tn);
      if (_t == M || _t == D || jr && !ht) {
        if (Ge = $t || jr ? {} : E(Ee), !tn)
          return $t ? f(Ee, i(Ge, Ee)) : u(Ee, o(Ge, Ee));
      } else {
        if (!ve[_t])
          return ht ? Ee : {};
        Ge = v(Ee, _t, tn);
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
    var qn = nn ? $t ? h : d : $t ? P : k, wo = Bt ? void 0 : qn(Ee);
    return t(wo || Ee, function(Tt, Ht) {
      wo && (Ht = Tt, Tt = Ee[Ht]), n(Ge, Ht, Re(Tt, Je, Ue, Ht, Ee, at));
    }), Ge;
  }
  return Np = Re, Np;
}
var Rp, YS;
function C8() {
  if (YS) return Rp;
  YS = 1;
  var e = $A(), t = 4;
  function n(o) {
    return e(o, t);
  }
  return Rp = n, Rp;
}
var Pp, KS;
function v0() {
  if (KS) return Pp;
  KS = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Pp = e, Pp;
}
var Tp, XS;
function k8() {
  if (XS) return Tp;
  XS = 1;
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
var Ap, QS;
function y0() {
  if (QS) return Ap;
  QS = 1;
  var e = k8(), t = e();
  return Ap = t, Ap;
}
var Ip, ZS;
function x0() {
  if (ZS) return Ip;
  ZS = 1;
  var e = y0(), t = Lr();
  function n(o, i) {
    return o && e(o, i, t);
  }
  return Ip = n, Ip;
}
var Mp, JS;
function N8() {
  if (JS) return Mp;
  JS = 1;
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
var Op, eE;
function nc() {
  if (eE) return Op;
  eE = 1;
  var e = x0(), t = N8(), n = t(e);
  return Op = n, Op;
}
var Lp, tE;
function xo() {
  if (tE) return Lp;
  tE = 1;
  function e(t) {
    return t;
  }
  return Lp = e, Lp;
}
var jp, nE;
function BA() {
  if (nE) return jp;
  nE = 1;
  var e = xo();
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return jp = t, jp;
}
var Dp, rE;
function VA() {
  if (rE) return Dp;
  rE = 1;
  var e = c0(), t = nc(), n = BA(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l));
  }
  return Dp = i, Dp;
}
var qp, oE;
function HA() {
  return oE || (oE = 1, qp = VA()), qp;
}
var zp, iE;
function R8() {
  if (iE) return zp;
  iE = 1;
  var e = nc();
  function t(n, o) {
    var i = [];
    return e(n, function(a, l, u) {
      o(a, l, u) && i.push(a);
    }), i;
  }
  return zp = t, zp;
}
var Fp, sE;
function P8() {
  if (sE) return Fp;
  sE = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Fp = t, Fp;
}
var $p, aE;
function T8() {
  if (aE) return $p;
  aE = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return $p = e, $p;
}
var Bp, lE;
function WA() {
  if (lE) return Bp;
  lE = 1;
  var e = u0(), t = P8(), n = T8();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < l; )
      this.add(i[a]);
  }
  return o.prototype.add = o.prototype.push = t, o.prototype.has = n, Bp = o, Bp;
}
var Vp, uE;
function A8() {
  if (uE) return Vp;
  uE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length; ++o < i; )
      if (n(t[o], o, t))
        return !0;
    return !1;
  }
  return Vp = e, Vp;
}
var Hp, cE;
function UA() {
  if (cE) return Hp;
  cE = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Hp = e, Hp;
}
var Wp, fE;
function GA() {
  if (fE) return Wp;
  fE = 1;
  var e = WA(), t = A8(), n = UA(), o = 1, i = 2;
  function a(l, u, f, d, h, p) {
    var m = f & o, v = l.length, E = u.length;
    if (v != E && !(m && E > v))
      return !1;
    var y = p.get(l), w = p.get(u);
    if (y && w)
      return y == u && w == l;
    var b = -1, C = !0, _ = f & i ? new e() : void 0;
    for (p.set(l, u), p.set(u, l); ++b < v; ) {
      var k = l[b], P = u[b];
      if (d)
        var T = m ? d(P, k, b, u, l, p) : d(k, P, b, l, u, p);
      if (T !== void 0) {
        if (T)
          continue;
        C = !1;
        break;
      }
      if (_) {
        if (!t(u, function(I, L) {
          if (!n(_, L) && (k === I || h(k, I, f, d, p)))
            return _.push(L);
        })) {
          C = !1;
          break;
        }
      } else if (!(k === P || h(k, P, f, d, p))) {
        C = !1;
        break;
      }
    }
    return p.delete(l), p.delete(u), C;
  }
  return Wp = a, Wp;
}
var Up, dE;
function I8() {
  if (dE) return Up;
  dE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i, a) {
      o[++n] = [a, i];
    }), o;
  }
  return Up = e, Up;
}
var Gp, hE;
function w0() {
  if (hE) return Gp;
  hE = 1;
  function e(t) {
    var n = -1, o = Array(t.size);
    return t.forEach(function(i) {
      o[++n] = i;
    }), o;
  }
  return Gp = e, Gp;
}
var Yp, pE;
function M8() {
  if (pE) return Yp;
  pE = 1;
  var e = Ei(), t = DA(), n = Si(), o = GA(), i = I8(), a = w0(), l = 1, u = 2, f = "[object Boolean]", d = "[object Date]", h = "[object Error]", p = "[object Map]", m = "[object Number]", v = "[object RegExp]", E = "[object Set]", y = "[object String]", w = "[object Symbol]", b = "[object ArrayBuffer]", C = "[object DataView]", _ = e ? e.prototype : void 0, k = _ ? _.valueOf : void 0;
  function P(T, I, L, D, Y, $, V) {
    switch (L) {
      case C:
        if (T.byteLength != I.byteLength || T.byteOffset != I.byteOffset)
          return !1;
        T = T.buffer, I = I.buffer;
      case b:
        return !(T.byteLength != I.byteLength || !$(new t(T), new t(I)));
      case f:
      case d:
      case m:
        return n(+T, +I);
      case h:
        return T.name == I.name && T.message == I.message;
      case v:
      case y:
        return T == I + "";
      case p:
        var H = i;
      case E:
        var O = D & l;
        if (H || (H = a), T.size != I.size && !O)
          return !1;
        var W = V.get(T);
        if (W)
          return W == I;
        D |= u, V.set(T, I);
        var q = o(H(T), H(I), D, Y, $, V);
        return V.delete(T), q;
      case w:
        if (k)
          return k.call(T) == k.call(I);
    }
    return !1;
  }
  return Yp = P, Yp;
}
var Kp, gE;
function O8() {
  if (gE) return Kp;
  gE = 1;
  var e = LA(), t = 1, n = Object.prototype, o = n.hasOwnProperty;
  function i(a, l, u, f, d, h) {
    var p = u & t, m = e(a), v = m.length, E = e(l), y = E.length;
    if (v != y && !p)
      return !1;
    for (var w = v; w--; ) {
      var b = m[w];
      if (!(p ? b in l : o.call(l, b)))
        return !1;
    }
    var C = h.get(a), _ = h.get(l);
    if (C && _)
      return C == l && _ == a;
    var k = !0;
    h.set(a, l), h.set(l, a);
    for (var P = p; ++w < v; ) {
      b = m[w];
      var T = a[b], I = l[b];
      if (f)
        var L = p ? f(I, T, b, l, a, h) : f(T, I, b, a, l, h);
      if (!(L === void 0 ? T === I || d(T, I, u, f, h) : L)) {
        k = !1;
        break;
      }
      P || (P = b == "constructor");
    }
    if (k && !P) {
      var D = a.constructor, Y = l.constructor;
      D != Y && "constructor" in a && "constructor" in l && !(typeof D == "function" && D instanceof D && typeof Y == "function" && Y instanceof Y) && (k = !1);
    }
    return h.delete(a), h.delete(l), k;
  }
  return Kp = i, Kp;
}
var Xp, mE;
function L8() {
  if (mE) return Xp;
  mE = 1;
  var e = Ku(), t = GA(), n = M8(), o = O8(), i = ki(), a = rt(), l = Ci(), u = aa(), f = 1, d = "[object Arguments]", h = "[object Array]", p = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function E(y, w, b, C, _, k) {
    var P = a(y), T = a(w), I = P ? h : i(y), L = T ? h : i(w);
    I = I == d ? p : I, L = L == d ? p : L;
    var D = I == p, Y = L == p, $ = I == L;
    if ($ && l(y)) {
      if (!l(w))
        return !1;
      P = !0, D = !1;
    }
    if ($ && !D)
      return k || (k = new e()), P || u(y) ? t(y, w, b, C, _, k) : n(y, w, I, b, C, _, k);
    if (!(b & f)) {
      var V = D && v.call(y, "__wrapped__"), H = Y && v.call(w, "__wrapped__");
      if (V || H) {
        var O = V ? y.value() : y, W = H ? w.value() : w;
        return k || (k = new e()), _(O, W, b, C, k);
      }
    }
    return $ ? (k || (k = new e()), o(y, w, b, C, _, k)) : !1;
  }
  return Xp = E, Xp;
}
var Qp, vE;
function YA() {
  if (vE) return Qp;
  vE = 1;
  var e = L8(), t = Dn();
  function n(o, i, a, l, u) {
    return o === i ? !0 : o == null || i == null || !t(o) && !t(i) ? o !== o && i !== i : e(o, i, a, l, n, u);
  }
  return Qp = n, Qp;
}
var Zp, yE;
function j8() {
  if (yE) return Zp;
  yE = 1;
  var e = Ku(), t = YA(), n = 1, o = 2;
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
          var b = f(E, y, v, a, l, w);
        if (!(b === void 0 ? t(y, E, n | o, f, w) : b))
          return !1;
      }
    }
    return !0;
  }
  return Zp = i, Zp;
}
var Jp, xE;
function KA() {
  if (xE) return Jp;
  xE = 1;
  var e = Jt();
  function t(n) {
    return n === n && !e(n);
  }
  return Jp = t, Jp;
}
var eg, wE;
function D8() {
  if (wE) return eg;
  wE = 1;
  var e = KA(), t = Lr();
  function n(o) {
    for (var i = t(o), a = i.length; a--; ) {
      var l = i[a], u = o[l];
      i[a] = [l, u, e(u)];
    }
    return i;
  }
  return eg = n, eg;
}
var tg, _E;
function XA() {
  if (_E) return tg;
  _E = 1;
  function e(t, n) {
    return function(o) {
      return o == null ? !1 : o[t] === n && (n !== void 0 || t in Object(o));
    };
  }
  return tg = e, tg;
}
var ng, bE;
function q8() {
  if (bE) return ng;
  bE = 1;
  var e = j8(), t = D8(), n = XA();
  function o(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? n(a[0][0], a[0][1]) : function(l) {
      return l === i || e(l, i, a);
    };
  }
  return ng = o, ng;
}
var rg, SE;
function Ni() {
  if (SE) return rg;
  SE = 1;
  var e = mo(), t = Dn(), n = "[object Symbol]";
  function o(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return rg = o, rg;
}
var og, EE;
function _0() {
  if (EE) return og;
  EE = 1;
  var e = rt(), t = Ni(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
  function i(a, l) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : o.test(a) || !n.test(a) || l != null && a in Object(l);
  }
  return og = i, og;
}
var ig, CE;
function z8() {
  if (CE) return ig;
  CE = 1;
  var e = u0(), t = "Expected a function";
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
var sg, kE;
function F8() {
  if (kE) return sg;
  kE = 1;
  var e = z8(), t = 500;
  function n(o) {
    var i = e(o, function(l) {
      return a.size === t && a.clear(), l;
    }), a = i.cache;
    return i;
  }
  return sg = n, sg;
}
var ag, NE;
function $8() {
  if (NE) return ag;
  NE = 1;
  var e = F8(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, o = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(l, u, f, d) {
      a.push(f ? d.replace(n, "$1") : u || l);
    }), a;
  });
  return ag = o, ag;
}
var lg, RE;
function rc() {
  if (RE) return lg;
  RE = 1;
  function e(t, n) {
    for (var o = -1, i = t == null ? 0 : t.length, a = Array(i); ++o < i; )
      a[o] = n(t[o], o, t);
    return a;
  }
  return lg = e, lg;
}
var ug, PE;
function B8() {
  if (PE) return ug;
  PE = 1;
  var e = Ei(), t = rc(), n = rt(), o = Ni(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
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
var cg, TE;
function QA() {
  if (TE) return cg;
  TE = 1;
  var e = B8();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return cg = t, cg;
}
var fg, AE;
function oc() {
  if (AE) return fg;
  AE = 1;
  var e = rt(), t = _0(), n = $8(), o = QA();
  function i(a, l) {
    return e(a) ? a : t(a, l) ? [a] : n(o(a));
  }
  return fg = i, fg;
}
var dg, IE;
function la() {
  if (IE) return dg;
  IE = 1;
  var e = Ni();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var o = n + "";
    return o == "0" && 1 / n == -1 / 0 ? "-0" : o;
  }
  return dg = t, dg;
}
var hg, ME;
function ic() {
  if (ME) return hg;
  ME = 1;
  var e = oc(), t = la();
  function n(o, i) {
    i = e(i, o);
    for (var a = 0, l = i.length; o != null && a < l; )
      o = o[t(i[a++])];
    return a && a == l ? o : void 0;
  }
  return hg = n, hg;
}
var pg, OE;
function V8() {
  if (OE) return pg;
  OE = 1;
  var e = ic();
  function t(n, o, i) {
    var a = n == null ? void 0 : e(n, o);
    return a === void 0 ? i : a;
  }
  return pg = t, pg;
}
var gg, LE;
function H8() {
  if (LE) return gg;
  LE = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return gg = e, gg;
}
var mg, jE;
function ZA() {
  if (jE) return mg;
  jE = 1;
  var e = oc(), t = sa(), n = rt(), o = Zu(), i = f0(), a = la();
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
var vg, DE;
function JA() {
  if (DE) return vg;
  DE = 1;
  var e = H8(), t = ZA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return vg = n, vg;
}
var yg, qE;
function W8() {
  if (qE) return yg;
  qE = 1;
  var e = YA(), t = V8(), n = JA(), o = _0(), i = KA(), a = XA(), l = la(), u = 1, f = 2;
  function d(h, p) {
    return o(h) && i(p) ? a(l(h), p) : function(m) {
      var v = t(m, h);
      return v === void 0 && v === p ? n(m, h) : e(p, v, u | f);
    };
  }
  return yg = d, yg;
}
var xg, zE;
function eI() {
  if (zE) return xg;
  zE = 1;
  function e(t) {
    return function(n) {
      return n == null ? void 0 : n[t];
    };
  }
  return xg = e, xg;
}
var wg, FE;
function U8() {
  if (FE) return wg;
  FE = 1;
  var e = ic();
  function t(n) {
    return function(o) {
      return e(o, n);
    };
  }
  return wg = t, wg;
}
var _g, $E;
function G8() {
  if ($E) return _g;
  $E = 1;
  var e = eI(), t = U8(), n = _0(), o = la();
  function i(a) {
    return n(a) ? e(o(a)) : t(a);
  }
  return _g = i, _g;
}
var bg, BE;
function tr() {
  if (BE) return bg;
  BE = 1;
  var e = q8(), t = W8(), n = xo(), o = rt(), i = G8();
  function a(l) {
    return typeof l == "function" ? l : l == null ? n : typeof l == "object" ? o(l) ? t(l[0], l[1]) : e(l) : i(l);
  }
  return bg = a, bg;
}
var Sg, VE;
function tI() {
  if (VE) return Sg;
  VE = 1;
  var e = AA(), t = R8(), n = tr(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : t;
    return u(a, n(l, 3));
  }
  return Sg = i, Sg;
}
var Eg, HE;
function Y8() {
  if (HE) return Eg;
  HE = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(o, i) {
    return o != null && t.call(o, i);
  }
  return Eg = n, Eg;
}
var Cg, WE;
function nI() {
  if (WE) return Cg;
  WE = 1;
  var e = Y8(), t = ZA();
  function n(o, i) {
    return o != null && t(o, i, e);
  }
  return Cg = n, Cg;
}
var kg, UE;
function K8() {
  if (UE) return kg;
  UE = 1;
  var e = h0(), t = ki(), n = sa(), o = rt(), i = er(), a = Ci(), l = ec(), u = aa(), f = "[object Map]", d = "[object Set]", h = Object.prototype, p = h.hasOwnProperty;
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
var Ng, GE;
function rI() {
  if (GE) return Ng;
  GE = 1;
  function e(t) {
    return t === void 0;
  }
  return Ng = e, Ng;
}
var Rg, YE;
function oI() {
  if (YE) return Rg;
  YE = 1;
  var e = nc(), t = er();
  function n(o, i) {
    var a = -1, l = t(o) ? Array(o.length) : [];
    return e(o, function(u, f, d) {
      l[++a] = i(u, f, d);
    }), l;
  }
  return Rg = n, Rg;
}
var Pg, KE;
function iI() {
  if (KE) return Pg;
  KE = 1;
  var e = rc(), t = tr(), n = oI(), o = rt();
  function i(a, l) {
    var u = o(a) ? e : n;
    return u(a, t(l, 3));
  }
  return Pg = i, Pg;
}
var Tg, XE;
function X8() {
  if (XE) return Tg;
  XE = 1;
  function e(t, n, o, i) {
    var a = -1, l = t == null ? 0 : t.length;
    for (i && l && (o = t[++a]); ++a < l; )
      o = n(o, t[a], a, t);
    return o;
  }
  return Tg = e, Tg;
}
var Ag, QE;
function Q8() {
  if (QE) return Ag;
  QE = 1;
  function e(t, n, o, i, a) {
    return a(t, function(l, u, f) {
      o = i ? (i = !1, l) : n(o, l, u, f);
    }), o;
  }
  return Ag = e, Ag;
}
var Ig, ZE;
function sI() {
  if (ZE) return Ig;
  ZE = 1;
  var e = X8(), t = nc(), n = tr(), o = Q8(), i = rt();
  function a(l, u, f) {
    var d = i(l) ? e : o, h = arguments.length < 3;
    return d(l, n(u, 4), f, h, t);
  }
  return Ig = a, Ig;
}
var Mg, JE;
function Z8() {
  if (JE) return Mg;
  JE = 1;
  var e = mo(), t = rt(), n = Dn(), o = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && n(a) && e(a) == o;
  }
  return Mg = i, Mg;
}
var Og, eC;
function J8() {
  if (eC) return Og;
  eC = 1;
  var e = eI(), t = e("length");
  return Og = t, Og;
}
var Lg, tC;
function e6() {
  if (tC) return Lg;
  tC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "\\u200d", u = RegExp("[" + l + e + i + a + "]");
  function f(d) {
    return u.test(d);
  }
  return Lg = f, Lg;
}
var jg, nC;
function t6() {
  if (nC) return jg;
  nC = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", o = "\\u20d0-\\u20ff", i = t + n + o, a = "\\ufe0e\\ufe0f", l = "[" + e + "]", u = "[" + i + "]", f = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + u + "|" + f + ")", h = "[^" + e + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", v = "\\u200d", E = d + "?", y = "[" + a + "]?", w = "(?:" + v + "(?:" + [h, p, m].join("|") + ")" + y + E + ")*", b = y + E + w, C = "(?:" + [h + u + "?", u, p, m, l].join("|") + ")", _ = RegExp(f + "(?=" + f + ")|" + C + b, "g");
  function k(P) {
    for (var T = _.lastIndex = 0; _.test(P); )
      ++T;
    return T;
  }
  return jg = k, jg;
}
var Dg, rC;
function n6() {
  if (rC) return Dg;
  rC = 1;
  var e = J8(), t = e6(), n = t6();
  function o(i) {
    return t(i) ? n(i) : e(i);
  }
  return Dg = o, Dg;
}
var qg, oC;
function r6() {
  if (oC) return qg;
  oC = 1;
  var e = h0(), t = ki(), n = er(), o = Z8(), i = n6(), a = "[object Map]", l = "[object Set]";
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
var zg, iC;
function o6() {
  if (iC) return zg;
  iC = 1;
  var e = c0(), t = zA(), n = x0(), o = tr(), i = tc(), a = rt(), l = Ci(), u = oa(), f = Jt(), d = aa();
  function h(p, m, v) {
    var E = a(p), y = E || l(p) || d(p);
    if (m = o(m, 4), v == null) {
      var w = p && p.constructor;
      y ? v = E ? new w() : [] : f(p) ? v = u(w) ? t(i(p)) : {} : v = {};
    }
    return (y ? e : n)(p, function(b, C, _) {
      return m(v, b, C, _);
    }), v;
  }
  return zg = h, zg;
}
var Fg, sC;
function i6() {
  if (sC) return Fg;
  sC = 1;
  var e = Ei(), t = sa(), n = rt(), o = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return n(a) || t(a) || !!(o && a && a[o]);
  }
  return Fg = i, Fg;
}
var $g, aC;
function b0() {
  if (aC) return $g;
  aC = 1;
  var e = g0(), t = i6();
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
var Bg, lC;
function s6() {
  if (lC) return Bg;
  lC = 1;
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
var Vg, uC;
function aI() {
  if (uC) return Vg;
  uC = 1;
  var e = s6(), t = Math.max;
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
var Hg, cC;
function a6() {
  if (cC) return Hg;
  cC = 1;
  var e = v0(), t = kA(), n = xo(), o = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : n;
  return Hg = o, Hg;
}
var Wg, fC;
function l6() {
  if (fC) return Wg;
  fC = 1;
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
var Ug, dC;
function lI() {
  if (dC) return Ug;
  dC = 1;
  var e = a6(), t = l6(), n = t(e);
  return Ug = n, Ug;
}
var Gg, hC;
function sc() {
  if (hC) return Gg;
  hC = 1;
  var e = xo(), t = aI(), n = lI();
  function o(i, a) {
    return n(t(i, a, e), i + "");
  }
  return Gg = o, Gg;
}
var Yg, pC;
function uI() {
  if (pC) return Yg;
  pC = 1;
  function e(t, n, o, i) {
    for (var a = t.length, l = o + (i ? 1 : -1); i ? l-- : ++l < a; )
      if (n(t[l], l, t))
        return l;
    return -1;
  }
  return Yg = e, Yg;
}
var Kg, gC;
function u6() {
  if (gC) return Kg;
  gC = 1;
  function e(t) {
    return t !== t;
  }
  return Kg = e, Kg;
}
var Xg, mC;
function c6() {
  if (mC) return Xg;
  mC = 1;
  function e(t, n, o) {
    for (var i = o - 1, a = t.length; ++i < a; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return Xg = e, Xg;
}
var Qg, vC;
function f6() {
  if (vC) return Qg;
  vC = 1;
  var e = uI(), t = u6(), n = c6();
  function o(i, a, l) {
    return a === a ? n(i, a, l) : e(i, t, l);
  }
  return Qg = o, Qg;
}
var Zg, yC;
function d6() {
  if (yC) return Zg;
  yC = 1;
  var e = f6();
  function t(n, o) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, o, 0) > -1;
  }
  return Zg = t, Zg;
}
var Jg, xC;
function h6() {
  if (xC) return Jg;
  xC = 1;
  function e(t, n, o) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (o(n, t[i]))
        return !0;
    return !1;
  }
  return Jg = e, Jg;
}
var em, wC;
function p6() {
  if (wC) return em;
  wC = 1;
  function e() {
  }
  return em = e, em;
}
var tm, _C;
function g6() {
  if (_C) return tm;
  _C = 1;
  var e = jA(), t = p6(), n = w0(), o = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == o ? function(a) {
    return new e(a);
  } : t;
  return tm = i, tm;
}
var nm, bC;
function m6() {
  if (bC) return nm;
  bC = 1;
  var e = WA(), t = d6(), n = h6(), o = UA(), i = g6(), a = w0(), l = 200;
  function u(f, d, h) {
    var p = -1, m = t, v = f.length, E = !0, y = [], w = y;
    if (h)
      E = !1, m = n;
    else if (v >= l) {
      var b = d ? null : i(f);
      if (b)
        return a(b);
      E = !1, m = o, w = new e();
    } else
      w = d ? [] : y;
    e:
      for (; ++p < v; ) {
        var C = f[p], _ = d ? d(C) : C;
        if (C = h || C !== 0 ? C : 0, E && _ === _) {
          for (var k = w.length; k--; )
            if (w[k] === _)
              continue e;
          d && w.push(_), y.push(C);
        } else m(w, _, h) || (w !== y && w.push(_), y.push(C));
      }
    return y;
  }
  return nm = u, nm;
}
var rm, SC;
function cI() {
  if (SC) return rm;
  SC = 1;
  var e = er(), t = Dn();
  function n(o) {
    return t(o) && e(o);
  }
  return rm = n, rm;
}
var om, EC;
function v6() {
  if (EC) return om;
  EC = 1;
  var e = b0(), t = sc(), n = m6(), o = cI(), i = t(function(a) {
    return n(e(a, 1, o, !0));
  });
  return om = i, om;
}
var im, CC;
function y6() {
  if (CC) return im;
  CC = 1;
  var e = rc();
  function t(n, o) {
    return e(o, function(i) {
      return n[i];
    });
  }
  return im = t, im;
}
var sm, kC;
function fI() {
  if (kC) return sm;
  kC = 1;
  var e = y6(), t = Lr();
  function n(o) {
    return o == null ? [] : e(o, t(o));
  }
  return sm = n, sm;
}
var am, NC;
function en() {
  if (NC) return am;
  NC = 1;
  var e;
  if (typeof a0 == "function")
    try {
      e = {
        clone: C8(),
        constant: v0(),
        each: HA(),
        filter: tI(),
        has: nI(),
        isArray: rt(),
        isEmpty: K8(),
        isFunction: oa(),
        isUndefined: rI(),
        keys: Lr(),
        map: iI(),
        reduce: sI(),
        size: r6(),
        transform: o6(),
        union: v6(),
        values: fI()
      };
    } catch {
    }
  return e || (e = window._), am = e, am;
}
var lm, RC;
function S0() {
  if (RC) return lm;
  RC = 1;
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
    var b = f(this._isDirected, h, p, m);
    return h = b.v, p = b.w, Object.freeze(b), this._edgeObjs[w] = b, a(this._preds[p], h), a(this._sucs[h], p), this._in[p][w] = b, this._out[h][w] = b, this._edgeCount++, this;
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
    var b = { v: E, w: y };
    return v && (b.name = v), b;
  }
  function d(h, p) {
    return u(h, p.v, p.w, p.name);
  }
  return lm;
}
var um, PC;
function x6() {
  return PC || (PC = 1, um = "2.1.8"), um;
}
var cm, TC;
function w6() {
  return TC || (TC = 1, cm = {
    Graph: S0(),
    version: x6()
  }), cm;
}
var fm, AC;
function _6() {
  if (AC) return fm;
  AC = 1;
  var e = en(), t = S0();
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
var dm, IC;
function b6() {
  if (IC) return dm;
  IC = 1;
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
var hm, MC;
function dI() {
  if (MC) return hm;
  MC = 1;
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
var pm, OC;
function hI() {
  if (OC) return pm;
  OC = 1;
  var e = en(), t = dI();
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
      var y = E.v !== p ? E.v : E.w, w = d[y], b = u(E), C = m.distance + b;
      if (b < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + E + " Weight: " + b);
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
var gm, LC;
function S6() {
  if (LC) return gm;
  LC = 1;
  var e = hI(), t = en();
  gm = n;
  function n(o, i, a) {
    return t.transform(o.nodes(), function(l, u) {
      l[u] = e(o, u, i, a);
    }, {});
  }
  return gm;
}
var mm, jC;
function pI() {
  if (jC) return mm;
  jC = 1;
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
var vm, DC;
function E6() {
  if (DC) return vm;
  DC = 1;
  var e = en(), t = pI();
  vm = n;
  function n(o) {
    return e.filter(t(o), function(i) {
      return i.length > 1 || i.length === 1 && o.hasEdge(i[0], i[0]);
    });
  }
  return vm;
}
var ym, qC;
function C6() {
  if (qC) return ym;
  qC = 1;
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
          var E = m[d], y = h[v], w = m[v], b = E.distance + y.distance;
          b < w.distance && (w.distance = b, w.predecessor = y.predecessor);
        });
      });
    }), u;
  }
  return ym;
}
var xm, zC;
function gI() {
  if (zC) return xm;
  zC = 1;
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
var wm, FC;
function k6() {
  if (FC) return wm;
  FC = 1;
  var e = gI();
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
var _m, $C;
function mI() {
  if ($C) return _m;
  $C = 1;
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
var bm, BC;
function N6() {
  if (BC) return bm;
  BC = 1;
  var e = mI();
  bm = t;
  function t(n, o) {
    return e(n, o, "post");
  }
  return bm;
}
var Sm, VC;
function R6() {
  if (VC) return Sm;
  VC = 1;
  var e = mI();
  Sm = t;
  function t(n, o) {
    return e(n, o, "pre");
  }
  return Sm;
}
var Em, HC;
function P6() {
  if (HC) return Em;
  HC = 1;
  var e = en(), t = S0(), n = dI();
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
var Cm, WC;
function T6() {
  return WC || (WC = 1, Cm = {
    components: b6(),
    dijkstra: hI(),
    dijkstraAll: S6(),
    findCycles: E6(),
    floydWarshall: C6(),
    isAcyclic: k6(),
    postorder: N6(),
    preorder: R6(),
    prim: P6(),
    tarjan: pI(),
    topsort: gI()
  }), Cm;
}
var km, UC;
function A6() {
  if (UC) return km;
  UC = 1;
  var e = w6();
  return km = {
    Graph: e.Graph,
    json: _6(),
    alg: T6(),
    version: e.version
  }, km;
}
var Nm, GC;
function vn() {
  if (GC) return Nm;
  GC = 1;
  var e;
  if (typeof a0 == "function")
    try {
      e = A6();
    } catch {
    }
  return e || (e = window.graphlib), Nm = e, Nm;
}
var Rm, YC;
function I6() {
  if (YC) return Rm;
  YC = 1;
  var e = $A(), t = 1, n = 4;
  function o(i) {
    return e(i, t | n);
  }
  return Rm = o, Rm;
}
var Pm, KC;
function ac() {
  if (KC) return Pm;
  KC = 1;
  var e = Si(), t = er(), n = Zu(), o = Jt();
  function i(a, l, u) {
    if (!o(u))
      return !1;
    var f = typeof l;
    return (f == "number" ? t(u) && n(l, u.length) : f == "string" && l in u) ? e(u[l], a) : !1;
  }
  return Pm = i, Pm;
}
var Tm, XC;
function M6() {
  if (XC) return Tm;
  XC = 1;
  var e = sc(), t = Si(), n = ac(), o = yo(), i = Object.prototype, a = i.hasOwnProperty, l = e(function(u, f) {
    u = Object(u);
    var d = -1, h = f.length, p = h > 2 ? f[2] : void 0;
    for (p && n(f[0], f[1], p) && (h = 1); ++d < h; )
      for (var m = f[d], v = o(m), E = -1, y = v.length; ++E < y; ) {
        var w = v[E], b = u[w];
        (b === void 0 || t(b, i[w]) && !a.call(u, w)) && (u[w] = m[w]);
      }
    return u;
  });
  return Tm = l, Tm;
}
var Am, QC;
function O6() {
  if (QC) return Am;
  QC = 1;
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
var Im, ZC;
function L6() {
  if (ZC) return Im;
  ZC = 1;
  var e = /\s/;
  function t(n) {
    for (var o = n.length; o-- && e.test(n.charAt(o)); )
      ;
    return o;
  }
  return Im = t, Im;
}
var Mm, JC;
function j6() {
  if (JC) return Mm;
  JC = 1;
  var e = L6(), t = /^\s+/;
  function n(o) {
    return o && o.slice(0, e(o) + 1).replace(t, "");
  }
  return Mm = n, Mm;
}
var Om, ek;
function D6() {
  if (ek) return Om;
  ek = 1;
  var e = j6(), t = Jt(), n = Ni(), o = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
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
var Lm, tk;
function vI() {
  if (tk) return Lm;
  tk = 1;
  var e = D6(), t = 1 / 0, n = 17976931348623157e292;
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
var jm, nk;
function q6() {
  if (nk) return jm;
  nk = 1;
  var e = vI();
  function t(n) {
    var o = e(n), i = o % 1;
    return o === o ? i ? o - i : o : 0;
  }
  return jm = t, jm;
}
var Dm, rk;
function z6() {
  if (rk) return Dm;
  rk = 1;
  var e = uI(), t = tr(), n = q6(), o = Math.max;
  function i(a, l, u) {
    var f = a == null ? 0 : a.length;
    if (!f)
      return -1;
    var d = u == null ? 0 : n(u);
    return d < 0 && (d = o(f + d, 0)), e(a, t(l, 3), d);
  }
  return Dm = i, Dm;
}
var qm, ok;
function F6() {
  if (ok) return qm;
  ok = 1;
  var e = O6(), t = z6(), n = e(t);
  return qm = n, qm;
}
var zm, ik;
function yI() {
  if (ik) return zm;
  ik = 1;
  var e = b0();
  function t(n) {
    var o = n == null ? 0 : n.length;
    return o ? e(n, 1) : [];
  }
  return zm = t, zm;
}
var Fm, sk;
function $6() {
  if (sk) return Fm;
  sk = 1;
  var e = y0(), t = BA(), n = yo();
  function o(i, a) {
    return i == null ? i : e(i, t(a), n);
  }
  return Fm = o, Fm;
}
var $m, ak;
function B6() {
  if (ak) return $m;
  ak = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return $m = e, $m;
}
var Bm, lk;
function V6() {
  if (lk) return Bm;
  lk = 1;
  var e = Xu(), t = x0(), n = tr();
  function o(i, a) {
    var l = {};
    return a = n(a, 3), t(i, function(u, f, d) {
      e(l, f, a(u, f, d));
    }), l;
  }
  return Bm = o, Bm;
}
var Vm, uk;
function E0() {
  if (uk) return Vm;
  uk = 1;
  var e = Ni();
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
var Hm, ck;
function H6() {
  if (ck) return Hm;
  ck = 1;
  function e(t, n) {
    return t > n;
  }
  return Hm = e, Hm;
}
var Wm, fk;
function W6() {
  if (fk) return Wm;
  fk = 1;
  var e = E0(), t = H6(), n = xo();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Wm = o, Wm;
}
var Um, dk;
function xI() {
  if (dk) return Um;
  dk = 1;
  var e = Xu(), t = Si();
  function n(o, i, a) {
    (a !== void 0 && !t(o[i], a) || a === void 0 && !(i in o)) && e(o, i, a);
  }
  return Um = n, Um;
}
var Gm, hk;
function U6() {
  if (hk) return Gm;
  hk = 1;
  var e = mo(), t = tc(), n = Dn(), o = "[object Object]", i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = l.call(Object);
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
var Ym, pk;
function wI() {
  if (pk) return Ym;
  pk = 1;
  function e(t, n) {
    if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
      return t[n];
  }
  return Ym = e, Ym;
}
var Km, gk;
function G6() {
  if (gk) return Km;
  gk = 1;
  var e = ia(), t = yo();
  function n(o) {
    return e(o, t(o));
  }
  return Km = n, Km;
}
var Xm, mk;
function Y6() {
  if (mk) return Xm;
  mk = 1;
  var e = xI(), t = PA(), n = qA(), o = TA(), i = FA(), a = sa(), l = rt(), u = cI(), f = Ci(), d = oa(), h = Jt(), p = U6(), m = aa(), v = wI(), E = G6();
  function y(w, b, C, _, k, P, T) {
    var I = v(w, C), L = v(b, C), D = T.get(L);
    if (D) {
      e(w, C, D);
      return;
    }
    var Y = P ? P(I, L, C + "", w, b, T) : void 0, $ = Y === void 0;
    if ($) {
      var V = l(L), H = !V && f(L), O = !V && !H && m(L);
      Y = L, V || H || O ? l(I) ? Y = I : u(I) ? Y = o(I) : H ? ($ = !1, Y = t(L, !0)) : O ? ($ = !1, Y = n(L, !0)) : Y = [] : p(L) || a(L) ? (Y = I, a(I) ? Y = E(I) : (!h(I) || d(I)) && (Y = i(L))) : $ = !1;
    }
    $ && (T.set(L, Y), k(Y, L, _, P, T), T.delete(L)), e(w, C, Y);
  }
  return Xm = y, Xm;
}
var Qm, vk;
function K6() {
  if (vk) return Qm;
  vk = 1;
  var e = Ku(), t = xI(), n = y0(), o = Y6(), i = Jt(), a = yo(), l = wI();
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
var Zm, yk;
function X6() {
  if (yk) return Zm;
  yk = 1;
  var e = sc(), t = ac();
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
var Jm, xk;
function Q6() {
  if (xk) return Jm;
  xk = 1;
  var e = K6(), t = X6(), n = t(function(o, i, a) {
    e(o, i, a);
  });
  return Jm = n, Jm;
}
var ev, wk;
function _I() {
  if (wk) return ev;
  wk = 1;
  function e(t, n) {
    return t < n;
  }
  return ev = e, ev;
}
var tv, _k;
function Z6() {
  if (_k) return tv;
  _k = 1;
  var e = E0(), t = _I(), n = xo();
  function o(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return tv = o, tv;
}
var nv, bk;
function J6() {
  if (bk) return nv;
  bk = 1;
  var e = E0(), t = tr(), n = _I();
  function o(i, a) {
    return i && i.length ? e(i, t(a, 2), n) : void 0;
  }
  return nv = o, nv;
}
var rv, Sk;
function eW() {
  if (Sk) return rv;
  Sk = 1;
  var e = wn(), t = function() {
    return e.Date.now();
  };
  return rv = t, rv;
}
var ov, Ek;
function tW() {
  if (Ek) return ov;
  Ek = 1;
  var e = Qu(), t = oc(), n = Zu(), o = Jt(), i = la();
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
var iv, Ck;
function nW() {
  if (Ck) return iv;
  Ck = 1;
  var e = ic(), t = tW(), n = oc();
  function o(i, a, l) {
    for (var u = -1, f = a.length, d = {}; ++u < f; ) {
      var h = a[u], p = e(i, h);
      l(p, h) && t(d, n(h, i), p);
    }
    return d;
  }
  return iv = o, iv;
}
var sv, kk;
function rW() {
  if (kk) return sv;
  kk = 1;
  var e = nW(), t = JA();
  function n(o, i) {
    return e(o, i, function(a, l) {
      return t(o, l);
    });
  }
  return sv = n, sv;
}
var av, Nk;
function oW() {
  if (Nk) return av;
  Nk = 1;
  var e = yI(), t = aI(), n = lI();
  function o(i) {
    return n(t(i, void 0, e), i + "");
  }
  return av = o, av;
}
var lv, Rk;
function iW() {
  if (Rk) return lv;
  Rk = 1;
  var e = rW(), t = oW(), n = t(function(o, i) {
    return o == null ? {} : e(o, i);
  });
  return lv = n, lv;
}
var uv, Pk;
function sW() {
  if (Pk) return uv;
  Pk = 1;
  var e = Math.ceil, t = Math.max;
  function n(o, i, a, l) {
    for (var u = -1, f = t(e((i - o) / (a || 1)), 0), d = Array(f); f--; )
      d[l ? f : ++u] = o, o += a;
    return d;
  }
  return uv = n, uv;
}
var cv, Tk;
function aW() {
  if (Tk) return cv;
  Tk = 1;
  var e = sW(), t = ac(), n = vI();
  function o(i) {
    return function(a, l, u) {
      return u && typeof u != "number" && t(a, l, u) && (l = u = void 0), a = n(a), l === void 0 ? (l = a, a = 0) : l = n(l), u = u === void 0 ? a < l ? 1 : -1 : n(u), e(a, l, u, i);
    };
  }
  return cv = o, cv;
}
var fv, Ak;
function lW() {
  if (Ak) return fv;
  Ak = 1;
  var e = aW(), t = e();
  return fv = t, fv;
}
var dv, Ik;
function uW() {
  if (Ik) return dv;
  Ik = 1;
  function e(t, n) {
    var o = t.length;
    for (t.sort(n); o--; )
      t[o] = t[o].value;
    return t;
  }
  return dv = e, dv;
}
var hv, Mk;
function cW() {
  if (Mk) return hv;
  Mk = 1;
  var e = Ni();
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
var pv, Ok;
function fW() {
  if (Ok) return pv;
  Ok = 1;
  var e = cW();
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
var gv, Lk;
function dW() {
  if (Lk) return gv;
  Lk = 1;
  var e = rc(), t = ic(), n = tr(), o = oI(), i = uW(), a = Ju(), l = fW(), u = xo(), f = rt();
  function d(h, p, m) {
    p.length ? p = e(p, function(y) {
      return f(y) ? function(w) {
        return t(w, y.length === 1 ? y[0] : y);
      } : y;
    }) : p = [u];
    var v = -1;
    p = e(p, a(n));
    var E = o(h, function(y, w, b) {
      var C = e(p, function(_) {
        return _(y);
      });
      return { criteria: C, index: ++v, value: y };
    });
    return i(E, function(y, w) {
      return l(y, w, m);
    });
  }
  return gv = d, gv;
}
var mv, jk;
function hW() {
  if (jk) return mv;
  jk = 1;
  var e = b0(), t = dW(), n = sc(), o = ac(), i = n(function(a, l) {
    if (a == null)
      return [];
    var u = l.length;
    return u > 1 && o(a, l[0], l[1]) ? l = [] : u > 2 && o(l[0], l[1], l[2]) && (l = [l[0]]), t(a, e(l, 1), []);
  });
  return mv = i, mv;
}
var vv, Dk;
function pW() {
  if (Dk) return vv;
  Dk = 1;
  var e = QA(), t = 0;
  function n(o) {
    var i = ++t;
    return e(o) + i;
  }
  return vv = n, vv;
}
var yv, qk;
function gW() {
  if (qk) return yv;
  qk = 1;
  function e(t, n, o) {
    for (var i = -1, a = t.length, l = n.length, u = {}; ++i < a; ) {
      var f = i < l ? n[i] : void 0;
      o(u, t[i], f);
    }
    return u;
  }
  return yv = e, yv;
}
var xv, zk;
function mW() {
  if (zk) return xv;
  zk = 1;
  var e = Qu(), t = gW();
  function n(o, i) {
    return t(o || [], i || [], e);
  }
  return xv = n, xv;
}
var wv, Fk;
function We() {
  if (Fk) return wv;
  Fk = 1;
  var e;
  if (typeof a0 == "function")
    try {
      e = {
        cloneDeep: I6(),
        constant: v0(),
        defaults: M6(),
        each: HA(),
        filter: tI(),
        find: F6(),
        flatten: yI(),
        forEach: VA(),
        forIn: $6(),
        has: nI(),
        isUndefined: rI(),
        last: B6(),
        map: iI(),
        mapValues: V6(),
        max: W6(),
        merge: Q6(),
        min: Z6(),
        minBy: J6(),
        now: eW(),
        pick: iW(),
        range: lW(),
        reduce: sI(),
        sortBy: hW(),
        uniqueId: pW(),
        values: fI(),
        zipObject: mW()
      };
    } catch {
    }
  return e || (e = window._), wv = e, wv;
}
var _v, $k;
function vW() {
  if ($k) return _v;
  $k = 1, _v = e;
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
var bv, Bk;
function yW() {
  if (Bk) return bv;
  Bk = 1;
  var e = We(), t = vn().Graph, n = vW();
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
      var w = d.edge(y), b = d.node(y.v);
      v && E.push({ v: y.v, w: y.w }), b.out -= w, f(h, p, b);
    }), e.forEach(d.outEdges(m.v), function(y) {
      var w = d.edge(y), b = y.w, C = d.node(b);
      C.in -= w, f(h, p, C);
    }), d.removeNode(m.v), E;
  }
  function u(d, h) {
    var p = new t(), m = 0, v = 0;
    e.forEach(d.nodes(), function(w) {
      p.setNode(w, { v: w, in: 0, out: 0 });
    }), e.forEach(d.edges(), function(w) {
      var b = p.edge(w.v, w.w) || 0, C = h(w), _ = b + C;
      p.setEdge(w.v, w.w, _), v = Math.max(v, p.node(w.v).out += C), m = Math.max(m, p.node(w.w).in += C);
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
var Sv, Vk;
function xW() {
  if (Vk) return Sv;
  Vk = 1;
  var e = We(), t = yW();
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
var Ev, Hk;
function Pt() {
  if (Hk) return Ev;
  Hk = 1;
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
  function n(w, b, C, _) {
    var k;
    do
      k = e.uniqueId(_);
    while (w.hasNode(k));
    return C.dummy = b, w.setNode(k, C), k;
  }
  function o(w) {
    var b = new t().setGraph(w.graph());
    return e.forEach(w.nodes(), function(C) {
      b.setNode(C, w.node(C));
    }), e.forEach(w.edges(), function(C) {
      var _ = b.edge(C.v, C.w) || { weight: 0, minlen: 1 }, k = w.edge(C);
      b.setEdge(C.v, C.w, {
        weight: _.weight + k.weight,
        minlen: Math.max(_.minlen, k.minlen)
      });
    }), b;
  }
  function i(w) {
    var b = new t({ multigraph: w.isMultigraph() }).setGraph(w.graph());
    return e.forEach(w.nodes(), function(C) {
      w.children(C).length || b.setNode(C, w.node(C));
    }), e.forEach(w.edges(), function(C) {
      b.setEdge(C, w.edge(C));
    }), b;
  }
  function a(w) {
    var b = e.map(w.nodes(), function(C) {
      var _ = {};
      return e.forEach(w.outEdges(C), function(k) {
        _[k.w] = (_[k.w] || 0) + w.edge(k).weight;
      }), _;
    });
    return e.zipObject(w.nodes(), b);
  }
  function l(w) {
    var b = e.map(w.nodes(), function(C) {
      var _ = {};
      return e.forEach(w.inEdges(C), function(k) {
        _[k.v] = (_[k.v] || 0) + w.edge(k).weight;
      }), _;
    });
    return e.zipObject(w.nodes(), b);
  }
  function u(w, b) {
    var C = w.x, _ = w.y, k = b.x - C, P = b.y - _, T = w.width / 2, I = w.height / 2;
    if (!k && !P)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var L, D;
    return Math.abs(P) * T > Math.abs(k) * I ? (P < 0 && (I = -I), L = I * k / P, D = I) : (k < 0 && (T = -T), L = T, D = T * P / k), { x: C + L, y: _ + D };
  }
  function f(w) {
    var b = e.map(e.range(m(w) + 1), function() {
      return [];
    });
    return e.forEach(w.nodes(), function(C) {
      var _ = w.node(C), k = _.rank;
      e.isUndefined(k) || (b[k][_.order] = C);
    }), b;
  }
  function d(w) {
    var b = e.min(e.map(w.nodes(), function(C) {
      return w.node(C).rank;
    }));
    e.forEach(w.nodes(), function(C) {
      var _ = w.node(C);
      e.has(_, "rank") && (_.rank -= b);
    });
  }
  function h(w) {
    var b = e.min(e.map(w.nodes(), function(P) {
      return w.node(P).rank;
    })), C = [];
    e.forEach(w.nodes(), function(P) {
      var T = w.node(P).rank - b;
      C[T] || (C[T] = []), C[T].push(P);
    });
    var _ = 0, k = w.graph().nodeRankFactor;
    e.forEach(C, function(P, T) {
      e.isUndefined(P) && T % k !== 0 ? --_ : _ && e.forEach(P, function(I) {
        w.node(I).rank += _;
      });
    });
  }
  function p(w, b, C, _) {
    var k = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (k.rank = C, k.order = _), n(w, "border", k, b);
  }
  function m(w) {
    return e.max(e.map(w.nodes(), function(b) {
      var C = w.node(b).rank;
      if (!e.isUndefined(C))
        return C;
    }));
  }
  function v(w, b) {
    var C = { lhs: [], rhs: [] };
    return e.forEach(w, function(_) {
      b(_) ? C.lhs.push(_) : C.rhs.push(_);
    }), C;
  }
  function E(w, b) {
    var C = e.now();
    try {
      return b();
    } finally {
      console.log(w + " time: " + (e.now() - C) + "ms");
    }
  }
  function y(w, b) {
    return b();
  }
  return Ev;
}
var Cv, Wk;
function wW() {
  if (Wk) return Cv;
  Wk = 1;
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
var kv, Uk;
function mu() {
  if (Uk) return kv;
  Uk = 1;
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
var Nv, Gk;
function bI() {
  if (Gk) return Nv;
  Gk = 1;
  var e = We(), t = vn().Graph, n = mu().slack;
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
var Rv, Yk;
function _W() {
  if (Yk) return Rv;
  Yk = 1;
  var e = We(), t = bI(), n = mu().slack, o = mu().longestPath, i = vn().alg.preorder, a = vn().alg.postorder, l = Pt().simplify;
  Rv = u, u.initLowLimValues = p, u.initCutValues = f, u.calcCutValue = h, u.leaveEdge = v, u.enterEdge = E, u.exchangeEdges = y;
  function u(_) {
    _ = l(_), o(_);
    var k = t(_);
    p(k), f(k, _);
    for (var P, T; P = v(k); )
      T = E(k, _, P), y(k, _, P, T);
  }
  function f(_, k) {
    var P = a(_, _.nodes());
    P = P.slice(0, P.length - 1), e.forEach(P, function(T) {
      d(_, k, T);
    });
  }
  function d(_, k, P) {
    var T = _.node(P), I = T.parent;
    _.edge(P, I).cutvalue = h(_, k, P);
  }
  function h(_, k, P) {
    var T = _.node(P), I = T.parent, L = !0, D = k.edge(P, I), Y = 0;
    return D || (L = !1, D = k.edge(I, P)), Y = D.weight, e.forEach(k.nodeEdges(P), function($) {
      var V = $.v === P, H = V ? $.w : $.v;
      if (H !== I) {
        var O = V === L, W = k.edge($).weight;
        if (Y += O ? W : -W, b(_, P, H)) {
          var q = _.edge(P, H).cutvalue;
          Y += O ? -q : q;
        }
      }
    }), Y;
  }
  function p(_, k) {
    arguments.length < 2 && (k = _.nodes()[0]), m(_, {}, 1, k);
  }
  function m(_, k, P, T, I) {
    var L = P, D = _.node(T);
    return k[T] = !0, e.forEach(_.neighbors(T), function(Y) {
      e.has(k, Y) || (P = m(_, k, P, Y, T));
    }), D.low = L, D.lim = P++, I ? D.parent = I : delete D.parent, P;
  }
  function v(_) {
    return e.find(_.edges(), function(k) {
      return _.edge(k).cutvalue < 0;
    });
  }
  function E(_, k, P) {
    var T = P.v, I = P.w;
    k.hasEdge(T, I) || (T = P.w, I = P.v);
    var L = _.node(T), D = _.node(I), Y = L, $ = !1;
    L.lim > D.lim && (Y = D, $ = !0);
    var V = e.filter(k.edges(), function(H) {
      return $ === C(_, _.node(H.v), Y) && $ !== C(_, _.node(H.w), Y);
    });
    return e.minBy(V, function(H) {
      return n(k, H);
    });
  }
  function y(_, k, P, T) {
    var I = P.v, L = P.w;
    _.removeEdge(I, L), _.setEdge(T.v, T.w, {}), p(_), f(_, k), w(_, k);
  }
  function w(_, k) {
    var P = e.find(_.nodes(), function(I) {
      return !k.node(I).parent;
    }), T = i(_, P);
    T = T.slice(1), e.forEach(T, function(I) {
      var L = _.node(I).parent, D = k.edge(I, L), Y = !1;
      D || (D = k.edge(L, I), Y = !0), k.node(I).rank = k.node(L).rank + (Y ? D.minlen : -D.minlen);
    });
  }
  function b(_, k, P) {
    return _.hasEdge(k, P);
  }
  function C(_, k, P) {
    return P.low <= k.lim && k.lim <= P.lim;
  }
  return Rv;
}
var Pv, Kk;
function bW() {
  if (Kk) return Pv;
  Kk = 1;
  var e = mu(), t = e.longestPath, n = bI(), o = _W();
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
var Tv, Xk;
function SW() {
  if (Xk) return Tv;
  Xk = 1;
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
var Av, Qk;
function EW() {
  if (Qk) return Av;
  Qk = 1;
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
    var y = t.addBorderNode(u, "_bt"), w = t.addBorderNode(u, "_bb"), b = u.node(v);
    u.setParent(y, v), b.borderTop = y, u.setParent(w, v), b.borderBottom = w, e.forEach(E, function(C) {
      o(u, f, d, h, p, m, C);
      var _ = u.node(C), k = _.borderTop ? _.borderTop : C, P = _.borderBottom ? _.borderBottom : C, T = _.borderTop ? h : 2 * h, I = k !== P ? 1 : p - m[v] + 1;
      u.setEdge(y, k, {
        weight: T,
        minlen: I,
        nestingEdge: !0
      }), u.setEdge(P, w, {
        weight: T,
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
var Iv, Zk;
function CW() {
  if (Zk) return Iv;
  Zk = 1;
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
var Mv, Jk;
function kW() {
  if (Jk) return Mv;
  Jk = 1;
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
var Ov, eN;
function NW() {
  if (eN) return Ov;
  eN = 1;
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
var Lv, tN;
function RW() {
  if (tN) return Lv;
  tN = 1;
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
var jv, nN;
function PW() {
  if (nN) return jv;
  nN = 1;
  var e = We();
  jv = t;
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
  return jv;
}
var Dv, rN;
function TW() {
  if (rN) return Dv;
  rN = 1;
  var e = We();
  Dv = t;
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
  return Dv;
}
var qv, oN;
function AW() {
  if (oN) return qv;
  oN = 1;
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
var zv, iN;
function IW() {
  if (iN) return zv;
  iN = 1;
  var e = We(), t = PW(), n = TW(), o = AW();
  zv = i;
  function i(u, f, d, h) {
    var p = u.children(f), m = u.node(f), v = m ? m.borderLeft : void 0, E = m ? m.borderRight : void 0, y = {};
    v && (p = e.filter(p, function(P) {
      return P !== v && P !== E;
    }));
    var w = t(u, p);
    e.forEach(w, function(P) {
      if (u.children(P.v).length) {
        var T = i(u, P.v, d, h);
        y[P.v] = T, e.has(T, "barycenter") && l(P, T);
      }
    });
    var b = n(w, d);
    a(b, y);
    var C = o(b, h);
    if (v && (C.vs = e.flatten([v, C.vs, E], !0), u.predecessors(v).length)) {
      var _ = u.node(u.predecessors(v)[0]), k = u.node(u.predecessors(E)[0]);
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
  return zv;
}
var Fv, sN;
function MW() {
  if (sN) return Fv;
  sN = 1;
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
var $v, aN;
function OW() {
  if (aN) return $v;
  aN = 1;
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
var Bv, lN;
function LW() {
  if (lN) return Bv;
  lN = 1;
  var e = We(), t = NW(), n = RW(), o = IW(), i = MW(), a = OW(), l = vn().Graph, u = Pt();
  Bv = f;
  function f(m) {
    var v = u.maxRank(m), E = d(m, e.range(1, v + 1), "inEdges"), y = d(m, e.range(v - 1, -1, -1), "outEdges"), w = t(m);
    p(m, w);
    for (var b = Number.POSITIVE_INFINITY, C, _ = 0, k = 0; k < 4; ++_, ++k) {
      h(_ % 2 ? E : y, _ % 4 >= 2), w = u.buildLayerMatrix(m);
      var P = n(m, w);
      P < b && (k = 0, C = e.cloneDeep(w), b = P);
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
      var w = y.graph().root, b = o(y, w, E, v);
      e.forEach(b.vs, function(C, _) {
        y.node(C).order = _;
      }), a(y, E, b.vs);
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
var Vv, uN;
function jW() {
  if (uN) return Vv;
  uN = 1;
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
  function o(b, C) {
    var _ = {};
    function k(P, T) {
      var I = 0, L = 0, D = P.length, Y = e.last(T);
      return e.forEach(T, function($, V) {
        var H = a(b, $), O = H ? b.node(H).order : D;
        (H || $ === Y) && (e.forEach(T.slice(L, V + 1), function(W) {
          e.forEach(b.predecessors(W), function(q) {
            var U = b.node(q), M = U.order;
            (M < I || O < M) && !(U.dummy && b.node(W).dummy) && l(_, q, W);
          });
        }), L = V + 1, I = O);
      }), T;
    }
    return e.reduce(C, k), _;
  }
  function i(b, C) {
    var _ = {};
    function k(T, I, L, D, Y) {
      var $;
      e.forEach(e.range(I, L), function(V) {
        $ = T[V], b.node($).dummy && e.forEach(b.predecessors($), function(H) {
          var O = b.node(H);
          O.dummy && (O.order < D || O.order > Y) && l(_, H, $);
        });
      });
    }
    function P(T, I) {
      var L = -1, D, Y = 0;
      return e.forEach(I, function($, V) {
        if (b.node($).dummy === "border") {
          var H = b.predecessors($);
          H.length && (D = b.node(H[0]).order, k(I, Y, V, L, D), Y = V, L = D);
        }
        k(I, Y, I.length, D, T.length);
      }), I;
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
      var k = C;
      C = _, _ = k;
    }
    var P = b[C];
    P || (b[C] = P = {}), P[_] = !0;
  }
  function u(b, C, _) {
    if (C > _) {
      var k = C;
      C = _, _ = k;
    }
    return e.has(b[C], _);
  }
  function f(b, C, _, k) {
    var P = {}, T = {}, I = {};
    return e.forEach(C, function(L) {
      e.forEach(L, function(D, Y) {
        P[D] = D, T[D] = D, I[D] = Y;
      });
    }), e.forEach(C, function(L) {
      var D = -1;
      e.forEach(L, function(Y) {
        var $ = k(Y);
        if ($.length) {
          $ = e.sortBy($, function(q) {
            return I[q];
          });
          for (var V = ($.length - 1) / 2, H = Math.floor(V), O = Math.ceil(V); H <= O; ++H) {
            var W = $[H];
            T[Y] === Y && D < I[W] && !u(_, Y, W) && (T[W] = Y, T[Y] = P[Y] = P[W], D = I[W]);
          }
        }
      });
    }), { root: P, align: T };
  }
  function d(b, C, _, k, P) {
    var T = {}, I = h(b, C, _, P), L = P ? "borderLeft" : "borderRight";
    function D(V, H) {
      for (var O = I.nodes(), W = O.pop(), q = {}; W; )
        q[W] ? V(W) : (q[W] = !0, O.push(W), O = O.concat(H(W))), W = O.pop();
    }
    function Y(V) {
      T[V] = I.inEdges(V).reduce(function(H, O) {
        return Math.max(H, T[O.v] + I.edge(O));
      }, 0);
    }
    function $(V) {
      var H = I.outEdges(V).reduce(function(W, q) {
        return Math.min(W, T[q.w] - I.edge(q));
      }, Number.POSITIVE_INFINITY), O = b.node(V);
      H !== Number.POSITIVE_INFINITY && O.borderType !== L && (T[V] = Math.max(T[V], H));
    }
    return D(Y, I.predecessors.bind(I)), D($, I.successors.bind(I)), e.forEach(k, function(V) {
      T[V] = T[_[V]];
    }), T;
  }
  function h(b, C, _, k) {
    var P = new t(), T = b.graph(), I = y(T.nodesep, T.edgesep, k);
    return e.forEach(C, function(L) {
      var D;
      e.forEach(L, function(Y) {
        var $ = _[Y];
        if (P.setNode($), D) {
          var V = _[D], H = P.edge(V, $);
          P.setEdge(V, $, Math.max(I(b, Y, D), H || 0));
        }
        D = Y;
      });
    }), P;
  }
  function p(b, C) {
    return e.minBy(e.values(C), function(_) {
      var k = Number.NEGATIVE_INFINITY, P = Number.POSITIVE_INFINITY;
      return e.forIn(_, function(T, I) {
        var L = w(b, I) / 2;
        k = Math.max(T + L, k), P = Math.min(T - L, P);
      }), k - P;
    });
  }
  function m(b, C) {
    var _ = e.values(C), k = e.min(_), P = e.max(_);
    e.forEach(["u", "d"], function(T) {
      e.forEach(["l", "r"], function(I) {
        var L = T + I, D = b[L], Y;
        if (D !== C) {
          var $ = e.values(D);
          Y = I === "l" ? k - e.min($) : P - e.max($), Y && (b[L] = e.mapValues(D, function(V) {
            return V + Y;
          }));
        }
      });
    });
  }
  function v(b, C) {
    return e.mapValues(b.ul, function(_, k) {
      if (C)
        return b[C.toLowerCase()][k];
      var P = e.sortBy(e.map(b, k));
      return (P[1] + P[2]) / 2;
    });
  }
  function E(b) {
    var C = n.buildLayerMatrix(b), _ = e.merge(
      o(b, C),
      i(b, C)
    ), k = {}, P;
    e.forEach(["u", "d"], function(I) {
      P = I === "u" ? C : e.values(C).reverse(), e.forEach(["l", "r"], function(L) {
        L === "r" && (P = e.map(P, function(V) {
          return e.values(V).reverse();
        }));
        var D = (I === "u" ? b.predecessors : b.successors).bind(b), Y = f(b, P, _, D), $ = d(
          b,
          P,
          Y.root,
          Y.align,
          L === "r"
        );
        L === "r" && ($ = e.mapValues($, function(V) {
          return -V;
        })), k[I + L] = $;
      });
    });
    var T = p(b, k);
    return m(k, T), v(k, b.graph().align);
  }
  function y(b, C, _) {
    return function(k, P, T) {
      var I = k.node(P), L = k.node(T), D = 0, Y;
      if (D += I.width / 2, e.has(I, "labelpos"))
        switch (I.labelpos.toLowerCase()) {
          case "l":
            Y = -I.width / 2;
            break;
          case "r":
            Y = I.width / 2;
            break;
        }
      if (Y && (D += _ ? Y : -Y), Y = 0, D += (I.dummy ? C : b) / 2, D += (L.dummy ? C : b) / 2, D += L.width / 2, e.has(L, "labelpos"))
        switch (L.labelpos.toLowerCase()) {
          case "l":
            Y = L.width / 2;
            break;
          case "r":
            Y = -L.width / 2;
            break;
        }
      return Y && (D += _ ? Y : -Y), Y = 0, D;
    };
  }
  function w(b, C) {
    return b.node(C).width;
  }
  return Vv;
}
var Hv, cN;
function DW() {
  if (cN) return Hv;
  cN = 1;
  var e = We(), t = Pt(), n = jW().positionX;
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
var Wv, fN;
function qW() {
  if (fN) return Wv;
  fN = 1;
  var e = We(), t = xW(), n = wW(), o = bW(), i = Pt().normalizeRanks, a = SW(), l = Pt().removeEmptyRanks, u = EW(), f = CW(), d = kW(), h = LW(), p = DW(), m = Pt(), v = vn().Graph;
  Wv = E;
  function E(B, Z) {
    var ee = Z && Z.debugTiming ? m.time : m.notime;
    ee("layout", function() {
      var X = ee("  buildLayoutGraph", function() {
        return D(B);
      });
      ee("  runLayout", function() {
        y(X, ee);
      }), ee("  updateInputGraph", function() {
        w(B, X);
      });
    });
  }
  function y(B, Z) {
    Z("    makeSpaceForEdgeLabels", function() {
      Y(B);
    }), Z("    removeSelfEdges", function() {
      z(B);
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
      H(B);
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
      j(B);
    }), Z("    removeBorderNodes", function() {
      M(B);
    }), Z("    normalize.undo", function() {
      n.undo(B);
    }), Z("    fixupEdgeLabelCoords", function() {
      q(B);
    }), Z("    undoCoordinateSystem", function() {
      d.undo(B);
    }), Z("    translateGraph", function() {
      O(B);
    }), Z("    assignNodeIntersects", function() {
      W(B);
    }), Z("    reversePoints", function() {
      U(B);
    }), Z("    acyclic.undo", function() {
      t.undo(B);
    });
  }
  function w(B, Z) {
    e.forEach(B.nodes(), function(ee) {
      var X = B.node(ee), te = Z.node(ee);
      X && (X.x = te.x, X.y = te.y, Z.children(ee).length && (X.width = te.width, X.height = te.height));
    }), e.forEach(B.edges(), function(ee) {
      var X = B.edge(ee), te = Z.edge(ee);
      X.points = te.points, e.has(te, "x") && (X.x = te.x, X.y = te.y);
    }), B.graph().width = Z.graph().width, B.graph().height = Z.graph().height;
  }
  var b = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], C = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, _ = ["acyclicer", "ranker", "rankdir", "align"], k = ["width", "height"], P = { width: 0, height: 0 }, T = ["minlen", "weight", "width", "height", "labeloffset"], I = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, L = ["labelpos"];
  function D(B) {
    var Z = new v({ multigraph: !0, compound: !0 }), ee = ie(B.graph());
    return Z.setGraph(e.merge(
      {},
      C,
      G(ee, b),
      e.pick(ee, _)
    )), e.forEach(B.nodes(), function(X) {
      var te = ie(B.node(X));
      Z.setNode(X, e.defaults(G(te, k), P)), Z.setParent(X, B.parent(X));
    }), e.forEach(B.edges(), function(X) {
      var te = ie(B.edge(X));
      Z.setEdge(X, e.merge(
        {},
        I,
        G(te, T),
        e.pick(te, L)
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
  function H(B) {
    e.forEach(B.nodes(), function(Z) {
      var ee = B.node(Z);
      ee.dummy === "edge-proxy" && (B.edge(ee.e).labelRank = ee.rank, B.removeNode(Z));
    });
  }
  function O(B) {
    var Z = Number.POSITIVE_INFINITY, ee = 0, X = Number.POSITIVE_INFINITY, te = 0, se = B.graph(), ae = se.marginx || 0, ce = se.marginy || 0;
    function de(pe) {
      var be = pe.x, ve = pe.y, Re = pe.width, Ee = pe.height;
      Z = Math.min(Z, be - Re / 2), ee = Math.max(ee, be + Re / 2), X = Math.min(X, ve - Ee / 2), te = Math.max(te, ve + Ee / 2);
    }
    e.forEach(B.nodes(), function(pe) {
      de(B.node(pe));
    }), e.forEach(B.edges(), function(pe) {
      var be = B.edge(pe);
      e.has(be, "x") && de(be);
    }), Z -= ae, X -= ce, e.forEach(B.nodes(), function(pe) {
      var be = B.node(pe);
      be.x -= Z, be.y -= X;
    }), e.forEach(B.edges(), function(pe) {
      var be = B.edge(pe);
      e.forEach(be.points, function(ve) {
        ve.x -= Z, ve.y -= X;
      }), e.has(be, "x") && (be.x -= Z), e.has(be, "y") && (be.y -= X);
    }), se.width = ee - Z + ae, se.height = te - X + ce;
  }
  function W(B) {
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
  function U(B) {
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
  function j(B) {
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
  function G(B, Z) {
    return e.mapValues(e.pick(B, Z), Number);
  }
  function ie(B) {
    var Z = {};
    return e.forEach(B, function(ee, X) {
      Z[X.toLowerCase()] = ee;
    }), Z;
  }
  return Wv;
}
var Uv, dN;
function zW() {
  if (dN) return Uv;
  dN = 1;
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
var Gv, hN;
function FW() {
  return hN || (hN = 1, Gv = "0.8.5"), Gv;
}
var Yv, pN;
function $W() {
  return pN || (pN = 1, Yv = {
    graphlib: vn(),
    layout: qW(),
    debug: zW(),
    util: {
      time: Pt().time,
      notime: Pt().notime
    },
    version: FW()
  }), Yv;
}
var BW = $W();
const gN = /* @__PURE__ */ vu(BW), VW = 250, HW = 200, WW = 120, UW = 180;
function mN(e) {
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
    width: e.width || VW,
    height: Math.max(HW, a)
  };
}
function GW(e, t, n = "TB") {
  const o = new gN.graphlib.Graph();
  return o.setDefaultEdgeLabel(() => ({})), o.setGraph({
    rankdir: n,
    nodesep: WW,
    ranksep: UW
  }), e.forEach((a) => {
    const { width: l, height: u } = mN(a);
    o.setNode(a.id, { width: l, height: u });
  }), t.forEach((a) => {
    o.setEdge(a.source, a.target);
  }), gN.layout(o), { nodes: e.map((a) => {
    const l = o.node(a.id), { width: u, height: f } = mN(a);
    return {
      ...a,
      position: {
        x: l.x - u / 2,
        y: l.y - f / 2
      }
    };
  }), edges: t };
}
function YW(e, t, n) {
  return { onLayout: N.useCallback(
    (i) => {
      const { nodes: a } = GW(e, t, i);
      n(a);
    },
    [e, t, n]
  ) };
}
function KW(e, t) {
  return { exportToJSON: N.useCallback(() => {
    const i = JSON.stringify({
      nodes: e,
      edges: t
    }, null, 2), a = new Blob([i], { type: "application/json" }), l = URL.createObjectURL(a), u = document.createElement("a");
    u.href = l, u.download = "nodeflow-data.json", u.click(), URL.revokeObjectURL(l);
  }, [e, t]) };
}
function XW(e, t) {
  const [n, o] = N.useState(null), i = N.useCallback(
    (d, h) => {
      d.preventDefault(), o({
        id: h.id,
        type: "node",
        x: d.clientX,
        y: d.clientY
      });
    },
    []
  ), a = N.useCallback(
    (d, h) => {
      d.preventDefault(), o({
        id: h.id,
        type: "edge",
        x: d.clientX,
        y: d.clientY
      });
    },
    []
  ), l = N.useCallback(() => {
    o(null);
  }, []), u = N.useCallback(() => {
    n && (n.type === "node" ? (e((d) => d.filter((h) => h.id !== n.id)), t(
      (d) => d.filter(
        (h) => h.source !== n.id && h.target !== n.id
      )
    )) : t((d) => d.filter((h) => h.id !== n.id)), o(null));
  }, [n, e, t]), f = N.useCallback(() => {
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
class QW {
  constructor() {
    vs(this, "templates", /* @__PURE__ */ new Map());
  }
  /**
   * Register a node template
   */
  register(t) {
    this.templates.set(t.type, t);
  }
  /**
   * Get a template by type
   */
  get(t) {
    return this.templates.get(t);
  }
  /**
   * Check if a template exists
   */
  has(t) {
    return this.templates.has(t);
  }
  /**
   * Update an existing template's definition
   */
  update(t, n) {
    const o = this.templates.get(t);
    o && this.templates.set(t, {
      ...o,
      definition: n
    });
  }
  /**
   * Get all registered templates
   */
  getAll() {
    return Array.from(this.templates.values());
  }
  /**
   * Clear all templates
   */
  clear() {
    this.templates.clear();
  }
  /**
   * Get all template types
   */
  getTypes() {
    return Array.from(this.templates.keys());
  }
}
const iU = new QW(), SI = N.createContext(null), EI = N.createContext(null), ZW = () => {
  const e = N.useContext(SI);
  if (!e)
    throw new Error("useSetNodesDict must be used within SetNodesDictContext.Provider");
  return e;
}, JW = () => {
  const e = N.useContext(EI);
  if (!e)
    throw new Error("useSetNodeValues must be used within SetNodeValuesContext.Provider");
  return e;
}, sU = ZW;
function eU() {
  const [e, t] = xs("nodes"), [n, o] = xs("edges"), [i] = xs("node_templates"), [a] = xs("height"), [l, u] = xs("node_values"), f = N.useMemo(() => Object.values(e || {}), [e]), d = N.useMemo(() => {
    const H = /* @__PURE__ */ new Map();
    return i.forEach((O) => {
      H.set(O.type, O);
    }), H;
  }, [i]), h = N.useMemo(() => !l || Object.keys(l).length === 0 ? f : f.map((H) => {
    const O = d.get(H.type), W = l[H.id] || {};
    return O ? {
      ...H,
      data: {
        ...H.data,
        ...O.defaultData,
        // Merge template data (includes grid, label, etc.)
        values: W
        // Add field values
      }
    } : (console.warn(`Template not found for node type: ${H.type}`), H);
  }), [f, d, l]), p = N.useCallback(
    (H) => {
      t((O) => {
        const W = Object.values(O), q = AR(H, W), U = {};
        return q.forEach((M) => {
          U[M.id] = M;
        }), U;
      });
    },
    [t]
  ), m = N.useCallback(
    (H) => {
      o((O) => IR(H, O));
    },
    [o]
  ), [v, E] = N.useState(0), [y, w] = N.useState(!1);
  N.useEffect(() => {
    w(!1), Td.clear(), i.forEach((H) => {
      try {
        const O = $u.buildComponent(H.defaultData);
        Td.register(H.type, O);
      } catch (O) {
        console.error(`Failed to register node type "${H.type}":`, O);
      }
    }), E((H) => H + 1), w(!0);
  }, [i]);
  const b = N.useMemo(() => {
    const H = {}, O = Td.getAll();
    return i.forEach((W) => {
      const q = O[W.type];
      q !== void 0 && (H[W.type] = q);
    }), H;
  }, [i, v]), C = N.useCallback(
    (H) => {
      o((O) => dR(H, O));
    },
    [o]
  ), _ = N.useCallback(
    (H) => {
      var q;
      const O = `node-${Date.now()}`, W = {
        id: O,
        type: H.type,
        position: { x: 100, y: 100 },
        data: {}
        // Empty data - all config in template
      };
      t((U) => ({
        ...U,
        [O]: W
      })), (q = H.defaultData) != null && q.values && u((U) => ({
        ...U,
        [O]: { ...H.defaultData.values }
      }));
    },
    [t, u]
  ), { exportToJSON: k } = KW(f, n), P = N.useCallback((H) => {
    t((O) => {
      const W = Object.values(O), q = typeof H == "function" ? H(W) : H, U = {};
      return q.forEach((M) => {
        U[M.id] = M;
      }), U;
    });
  }, [t]), { onLayout: T } = YW(f, n, P), {
    contextMenu: I,
    onNodeContextMenu: L,
    onEdgeContextMenu: D,
    onPaneClick: Y,
    onDelete: $,
    closeContextMenu: V
  } = XW(P, o);
  return y ? /* @__PURE__ */ R.jsx("div", { style: { width: "100%", height: a, display: "flex", position: "relative", overflow: "hidden" }, children: /* @__PURE__ */ R.jsx(SI.Provider, { value: t, children: /* @__PURE__ */ R.jsx(EI.Provider, { value: u, children: /* @__PURE__ */ R.jsx(rP, { children: /* @__PURE__ */ R.jsxs(dH, { defaultOpen: !0, className: "!min-h-0 !h-full", children: [
    /* @__PURE__ */ R.jsxs(hH, { collapsible: "icon", className: "!relative !inset-auto !h-full", children: [
      /* @__PURE__ */ R.jsxs(gH, { className: "flex flex-row items-center justify-between border-b", children: [
        /* @__PURE__ */ R.jsx("span", { className: "text-sm font-semibold", children: "Add Nodes" }),
        /* @__PURE__ */ R.jsx(pH, {})
      ] }),
      /* @__PURE__ */ R.jsx(SH, { onAddNode: _, templates: i })
    ] }),
    /* @__PURE__ */ R.jsx("div", { style: { flex: 1, height: "100%", position: "relative" }, children: /* @__PURE__ */ R.jsx(
      kH,
      {
        nodes: h,
        edges: n,
        nodeTypes: b,
        height: a,
        onNodesChange: p,
        onEdgesChange: m,
        onConnect: C,
        onNodeContextMenu: L,
        onEdgeContextMenu: D,
        onPaneClick: Y,
        contextMenu: I,
        onDelete: $,
        onCloseContextMenu: V,
        onExport: k,
        onLayoutVertical: () => T("TB"),
        onLayoutHorizontal: () => T("LR")
      }
    ) })
  ] }) }) }) }) }) : /* @__PURE__ */ R.jsx("div", { style: { width: "100%", height: a, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ R.jsx("div", { children: "Loading node types..." }) });
}
const tU = vM(eU), aU = { render: tU };
export {
  vi as BaseHandle,
  CP as ButtonHandle,
  EP as LabeledHandle,
  $u as NodeComponentBuilder,
  SP as NodeDataContext,
  EI as SetNodeValuesContext,
  SI as SetNodesDictContext,
  rU as buildNodeTypes,
  aU as default,
  tU as render,
  iU as templateRegistry,
  JW as useSetNodeValues,
  sU as useSetNodes,
  ZW as useSetNodesDict
};
//# sourceMappingURL=index.js.map
