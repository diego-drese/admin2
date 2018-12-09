var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
    },
        y = function e(t) {
        return null != t && t === t.window;
    },
        v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
            n[i] && (o[i] = n[i]);
        }t.head.appendChild(o).parentNode.removeChild(o);
    }function x(e) {
        return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }var b = "3.3.1",
        w = function w(e, t) {
        return new w.fn.init(e, t);
    },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
            return o.call(this);
        }, get: function get(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function pushStack(e) {
            var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
        }, each: function each(e) {
            return w.each(this, e);
        }, map: function map(e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t);
            }));
        }, slice: function slice() {
            return this.pushStack(o.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
            if (null != (e = arguments[s])) for (t in e) {
                n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            }
        }return a;
    }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
            throw new Error(e);
        }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
            var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
        }, isEmptyObject: function isEmptyObject(e) {
            var t;for (t in e) {
                return !1;
            }return !0;
        }, globalEval: function globalEval(e) {
            m(e);
        }, each: function each(e, t) {
            var n,
                r = 0;if (C(e)) {
                for (n = e.length; r < n; r++) {
                    if (!1 === t.call(e[r], r, e[r])) break;
                }
            } else for (r in e) {
                if (!1 === t.call(e[r], r, e[r])) break;
            }return e;
        }, trim: function trim(e) {
            return null == e ? "" : (e + "").replace(T, "");
        }, makeArray: function makeArray(e, t) {
            var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
        }, inArray: function inArray(e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
        }, merge: function merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
                e[i++] = t[r];
            }return e.length = i, e;
        }, grep: function grep(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            }return i;
        }, map: function map(e, t, n) {
            var r,
                i,
                o = 0,
                s = [];if (C(e)) for (r = e.length; o < r; o++) {
                null != (i = t(e[o], o, n)) && s.push(i);
            } else for (o in e) {
                null != (i = t(e[o], o, n)) && s.push(i);
            }return a.apply([], s);
        }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }var E = function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function D(e, t) {
            return e === t && (f = !0), 0;
        },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function O(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) return n;
            }return -1;
        },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function ee(e, t, n) {
            var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function ne(e, t) {
            return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            re = function re() {
            p();
        },
            ie = me(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, { dir: "parentNode", next: "legend" });try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = { apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t));
                } : function (e, t) {
                    var n = e.length,
                        r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
                } };
        }function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
                            h[s] = "#" + c + " " + ve(h[s]);
                        }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                    }if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r;
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id");
                    }
                }
            }return u(e.replace(B, "$1"), t, r, i);
        }function ae() {
            var e = [];function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }return t;
        }function se(e) {
            return e[b] = !0, e;
        }function ue(e) {
            var t = d.createElement("fieldset");try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }function le(e, t) {
            var n = e.split("|"),
                i = n.length;while (i--) {
                r.attrHandle[n[i]] = t;
            }
        }function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
                if (n === t) return -1;
            }return e ? 1 : -1;
        }function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
            };
        }function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i,
                        o = e([], n.length, t),
                        a = o.length;while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                    }
                });
            });
        }function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
        }, p = oe.setDocument = function (e) {
            var t,
                i,
                a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className");
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);return function (e) {
                    return e.getAttribute("id") === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);return n ? [n] : [];
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n,
                        r,
                        i,
                        o = t.getElementById(e);if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        }
                    }return [];
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n);
                    }return r;
                }return o;
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
                if (t) while (t = t.parentNode) {
                    if (t === e) return !0;
                }return !1;
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
            } : function (e, t) {
                if (e === t) return f = !0, 0;var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
                    a.unshift(n);
                }n = t;while (n = n.parentNode) {
                    s.unshift(n);
                }while (a[r] === s[r]) {
                    r++;
                }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
            }, d) : d;
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}return oe(t, d, null, [e]).length > 0;
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne);
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) {
                    t === e[o] && (i = r.push(o));
                }while (i--) {
                    e.splice(r[i], 1);
                }
            }return c = null, e;
        }, i = oe.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                        n += i(e);
                    }
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else while (t = e[r++]) {
                n += i(t);
            }return n;
        }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                }, CHILD: function CHILD(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
                }, PSEUDO: function PSEUDO(e) {
                    var t,
                        n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                } }, filter: { TAG: function TAG(e) {
                    var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
                        return !0;
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                }, CLASS: function CLASS(e) {
                    var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                }, CHILD: function CHILD(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode;
                    } : function (t, n, u) {
                        var l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;if (y) {
                            if (o) {
                                while (g) {
                                    p = t;while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    }h = g = "only" === e && !h && "nextSibling";
                                }return !0;
                            }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];break;
                                    }
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            }return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r,
                            o = i(e, t),
                            a = o.length;while (a--) {
                            e[r = O(e, o[a])] = !(n[r] = o[a]);
                        }
                    }) : function (e) {
                        return i(e, 0, n);
                    }) : i;
                } }, pseudos: { not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
                        var o,
                            a = r(e, null, i, []),
                            s = e.length;while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        }
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0;
                    };
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
                    };
                }), target: function target(t) {
                    var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
                }, root: function root(e) {
                    return e === h;
                }, focus: function focus(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
                }, selected: function selected(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                }, empty: function empty(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(e) {
                    return !r.pseudos.empty(e);
                }, header: function header(e) {
                    return Y.test(e.nodeName);
                }, input: function input(e) {
                    return G.test(e.nodeName);
                }, button: function button(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
                }, text: function text(e) {
                    var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                }, first: he(function () {
                    return [0];
                }), last: he(function (e, t) {
                    return [t - 1];
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) {
                        e.push(r);
                    }return e;
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) {
                        e.push(r);
                    }return e;
                }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            r.pseudos[t] = fe(t);
        }for (t in { submit: !0, reset: !0 }) {
            r.pseudos[t] = pe(t);
        }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
            var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
                }if (!n) break;
            }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        };function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) {
                r += e[t].value;
            }return r;
        }function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;return t.first ? function (t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || a) return e(t, n, i);
                }return !1;
            } : function (t, n, u) {
                var l,
                    c,
                    f,
                    p = [T, s];if (u) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    }
                } else while (t = t[r]) {
                    if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                        if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
                    }
                }return !1;
            };
        }function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;while (i--) {
                    if (!e[i](t, n, r)) return !1;
                }return !0;
            } : e[0];
        }function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
                oe(e, t[r], n);
            }return n;
        }function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            }return a;
        }function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                }if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;while (c--) {
                                (f = v[c]) && l.push(y[c] = f);
                            }i(null, v = [], l, u);
                        }c = v.length;while (c--) {
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
            });
        }function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t;
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1;
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
            }]; u < o; u++) {
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) {
                            if (r.relative[e[i].type]) break;
                        }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                    }p.push(n);
                }
            }return xe(p);
        }function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, a, s, u, c) {
                var f,
                    h,
                    y,
                    v = 0,
                    m = "0",
                    x = _o && [],
                    b = [],
                    w = l,
                    C = _o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1,
                    k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
                            if (y(f, a || d, s)) {
                                u.push(f);break;
                            }
                        }c && (T = E);
                    }n && ((f = !y && f) && v--, _o && x.push(f));
                }if (v += m, n && m !== v) {
                    h = 0;while (y = t[h++]) {
                        y(x, b, a, s);
                    }if (_o) {
                        if (v > 0) while (m--) {
                            x[m] || b[m] || (b[m] = j.call(u));
                        }b = we(b);
                    }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                }return c && (T = E, l = w), x;
            };return n ? se(o) : o;
        }return s = oe.compile = function (e, t) {
            var n,
                r = [],
                i = [],
                o = S[e + " "];if (!o) {
                t || (t = a(e)), n = t.length;while (n--) {
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                }(o = S(e, Ee(i, r))).selector = e;
            }return o;
        }, u = oe.select = function (e, t, n, i) {
            var o,
                u,
                l,
                c,
                f,
                p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
                    }
                }
            }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function (e) {
            return null == e.getAttribute("disabled");
        }) || le(P, function (e, t, n) {
            var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
        var r = [],
            i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
            if (1 === e.nodeType) {
                if (i && w(e).is(n)) break;r.push(e);
            }
        }return r;
    },
        S = function S(e, t) {
        for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
        }return n;
    },
        D = w.expr.match.needsContext;function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n;
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n;
        }) : w.filter(t, e, n);
    }w.filter = function (e, t, n) {
        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    }, w.fn.extend({ find: function find(e) {
            var t,
                n,
                r = this.length,
                i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) {
                    if (w.contains(i[t], this)) return !0;
                }
            }));for (n = this.pushStack([]), t = 0; t < r; t++) {
                w.find(e, i[t], n);
            }return r > 1 ? w.uniqueSort(n) : n;
        }, filter: function filter(e) {
            return this.pushStack(j(this, e || [], !1));
        }, not: function not(e) {
            return this.pushStack(j(this, e || [], !0));
        }, is: function is(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
        } });var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
        var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
                    g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                }return this;
            }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
    }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
            var t = w(e, this),
                n = t.length;return this.filter(function () {
                for (var e = 0; e < n; e++) {
                    if (w.contains(this, t[e])) return !0;
                }
            });
        }, closest: function closest(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        o.push(n);break;
                    }
                }
            }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        }, index: function index(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        }, addBack: function addBack(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        } });function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) {}return e;
    }w.each({ parent: function parent(e) {
            var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
        }, parents: function parents(e) {
            return k(e, "parentNode");
        }, parentsUntil: function parentsUntil(e, t, n) {
            return k(e, "parentNode", n);
        }, next: function next(e) {
            return P(e, "nextSibling");
        }, prev: function prev(e) {
            return P(e, "previousSibling");
        }, nextAll: function nextAll(e) {
            return k(e, "nextSibling");
        }, prevAll: function prevAll(e) {
            return k(e, "previousSibling");
        }, nextUntil: function nextUntil(e, t, n) {
            return k(e, "nextSibling", n);
        }, prevUntil: function prevUntil(e, t, n) {
            return k(e, "previousSibling", n);
        }, siblings: function siblings(e) {
            return S((e.parentNode || {}).firstChild, e);
        }, children: function children(e) {
            return S(e.firstChild);
        }, contents: function contents(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
        } }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
        };
    });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
        var t = {};return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
        }), t;
    }w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function u() {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();while (++s < o.length) {
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                }
            }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            l = { add: function add() {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                    });
                }(arguments), n && !t && u()), this;
            }, remove: function remove() {
                return w.each(arguments, function (e, t) {
                    var n;while ((n = w.inArray(t, o, n)) > -1) {
                        o.splice(n, 1), n <= s && s--;
                    }
                }), this;
            }, has: function has(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0;
            }, empty: function empty() {
                return o && (o = []), this;
            }, disable: function disable() {
                return i = a = [], o = n = "", this;
            }, disabled: function disabled() {
                return !o;
            }, lock: function lock() {
                return i = a = [], n || t || (o = n = ""), this;
            }, locked: function locked() {
                return !!i;
            }, fireWith: function fireWith(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
            }, fire: function fire() {
                return l.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!r;
            } };return l;
    };function I(e) {
        return e;
    }function W(e) {
        throw e;
    }function $(e, t, n, r) {
        var i;try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }w.extend({ Deferred: function Deferred(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = { state: function state() {
                    return r;
                }, always: function always() {
                    return o.done(arguments).fail(arguments), this;
                }, "catch": function _catch(e) {
                    return i.then(null, e);
                }, pipe: function pipe() {
                    var e = arguments;return w.Deferred(function (t) {
                        w.each(n, function (n, r) {
                            var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                            });
                        }), e = null;
                    }).promise();
                }, then: function then(t, r, i) {
                    var o = 0;function a(t, n, r, i) {
                        return function () {
                            var s = this,
                                u = arguments,
                                l = function l() {
                                var e, l;if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                                }
                            },
                                c = i ? l : function () {
                                try {
                                    l();
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                                }
                            };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                        };
                    }return w.Deferred(function (e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                    }).promise();
                }, promise: function promise(e) {
                    return null != e ? w.extend(e, i) : i;
                } },
                o = {};return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];i[t[1]] = a.add, s && a.add(function () {
                    r = s;
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        }, when: function when(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function s(e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                };
            };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
                $(i[n], s(n), a.reject);
            }return a.promise();
        } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    };var F = w.Deferred();w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e);
        }), this;
    }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
        } }), w.ready.then = F.then;function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;if ("object" === x(n)) {
            i = !0;for (s in n) {
                z(e, t, s, n[s], !0, o, a);
            }
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
            return l.call(w(e), n);
        })), t)) for (; s < u; s++) {
            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
        X = /^-ms-/,
        U = /-([a-z])/g;function V(e, t) {
        return t.toUpperCase();
    }function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }var Y = function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function Q() {
        this.expando = w.expando + Q.uid++;
    }Q.uid = 1, Q.prototype = { cache: function cache(e) {
            var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
        }, set: function set(e, t, n) {
            var r,
                i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
                i[G(r)] = t[r];
            }return i;
        }, get: function get(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        }, access: function access(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function remove(e, t) {
            var n,
                r = e[this.expando];if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
                        delete r[t[n]];
                    }
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        }, hasData: function hasData(e) {
            var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
        } };var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
    }function ne(e, t, n) {
        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = te(n);
            } catch (e) {}K.set(e, t, n);
        } else n = void 0;return n;
    }w.extend({ hasData: function hasData(e) {
            return K.hasData(e) || J.hasData(e);
        }, data: function data(e, t, n) {
            return K.access(e, t, n);
        }, removeData: function removeData(e, t) {
            K.remove(e, t);
        }, _data: function _data(e, t, n) {
            return J.access(e, t, n);
        }, _removeData: function _removeData(e, t) {
            J.remove(e, t);
        } }), w.fn.extend({ data: function data(e, t) {
            var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;while (n--) {
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    }J.set(o, "hasDataAttrs", !0);
                }return i;
            }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
                K.set(this, e);
            }) : z(this, function (t) {
                var n;if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
                } else this.each(function () {
                    K.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        }, removeData: function removeData(e) {
            return this.each(function () {
                K.remove(this, e);
            });
        } }), w.extend({ queue: function queue(e, t, n) {
            var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function dequeue(e, t) {
            t = t || "fx";var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function a() {
                w.dequeue(e, t);
            };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        }, _queueHooks: function _queueHooks(e, t) {
            var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n]);
                }) });
        } }), w.fn.extend({ queue: function queue(e, t) {
            var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
            });
        }, dequeue: function dequeue(e) {
            return this.each(function () {
                w.dequeue(this, e);
            });
        }, clearQueue: function clearQueue(e) {
            return this.queue(e || "fx", []);
        }, promise: function promise(e, t) {
            var n,
                r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function s() {
                --r || i.resolveWith(o, [o]);
            };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            }return s(), i.promise(t);
        } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
    },
        se = function se(e, t, n, r) {
        var i,
            o,
            a = {};for (o in t) {
            a[o] = e.style[o], e.style[o] = t[o];
        }i = n.apply(e, r || []);for (o in t) {
            e.style[o] = a[o];
        }return i;
    };function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
            return r.cur();
        } : function () {
            return w.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;while (a--) {
                w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            }c *= 2, w.style(e, t, c + l), n = n || [];
        }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }var le = {};function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
    }function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
            (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        }for (o = 0; o < a; o++) {
            null != i[o] && (e[o].style.display = i[o]);
        }return e;
    }w.fn.extend({ show: function show() {
            return fe(this, !0);
        }, hide: function hide() {
            return fe(this);
        }, toggle: function toggle(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide();
            });
        } });var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
        var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
    }function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
    }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
            if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
                    a = a.lastChild;
                }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }f.textContent = "", d = 0;while (o = p[d++]) {
            if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                c = 0;while (o = a[c++]) {
                    he.test(o.type || "") && n.push(o);
                }
            }
        }return f;
    }!function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
        return !0;
    }function ke() {
        return !1;
    }function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }function De(e, t, n, r, i, o) {
        var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
            "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
                De(e, s, n, r, t[s], o);
            }return e;
        }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
            return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n);
        });
    }w.event = { global: {}, add: function add(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
                    d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
                }
            }
        }, remove: function remove(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;while (l--) {
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) {
                        w.event.remove(e, d + t[l], n, r, !0);
                    }
                }w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        }, dispatch: function dispatch(e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
                u[n] = arguments[n];
            }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    }
                }return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        }, handlers: function handlers(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < u; n++) {
                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                    }o.length && s.push({ elem: l, handlers: o });
                }
            }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        }, addProp: function addProp(e, t) {
            Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                }, set: function set(t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                } });
        }, fix: function fix(e) {
            return e[w.expando] ? e : new w.Event(e);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    if (this === Se() && this.blur) return this.blur(), !1;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                }, _default: function _default(e) {
                    return N(e.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                } } } }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
    }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
            var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
            var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
        w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            } };
    }), w.fn.extend({ on: function on(e, t, n, r) {
            return De(this, e, t, n, r);
        }, one: function one(e, t, n, r) {
            return De(this, e, t, n, r, 1);
        }, off: function off(e, t, n) {
            var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
                for (i in e) {
                    this.off(i, t, e[i]);
                }return this;
            }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t);
            });
        } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }function Pe(e, t) {
        var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};for (i in l) {
                    for (n = 0, r = l[i].length; n < r; n++) {
                        w.event.add(t, i, l[i][n]);
                    }
                }
            }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
        }
    }function Me(e, t) {
        var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }function Re(e, t, n, r) {
        t = a.apply([], t);var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
        });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
                l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
                l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
            }
        }return e;
    }function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
            n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        }return e;
    }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
            return e.replace(Ne, "<$1></$2>");
        }, clone: function clone(e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
                Me(o[r], a[r]);
            }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
                Pe(o[r], a[r]);
            } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        }, cleanData: function cleanData(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (r in t.events) {
                            i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        }n[J.expando] = void 0;
                    }n[K.expando] && (n[K.expando] = void 0);
                }
            }
        } }), w.fn.extend({ detach: function detach(e) {
            return Ie(this, e, !0);
        }, remove: function remove(e) {
            return Ie(this, e);
        }, text: function text(e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        }, append: function append() {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
            });
        }, prepend: function prepend() {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);t.insertBefore(e, t.firstChild);
                }
            });
        }, before: function before() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        }, after: function after() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        }, empty: function empty() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            }return this;
        }, clone: function clone(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t);
            });
        }, html: function html(e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);try {
                        for (; n < r; n++) {
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        }t = 0;
                    } catch (e) {}
                }t && this.empty().append(e);
            }, null, e, arguments.length);
        }, replaceWith: function replaceWith() {
            var e = [];return Re(this, arguments, function (t) {
                var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
            }, e);
        } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
                n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            }return this.pushStack(r);
        };
    });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function $e(t) {
        var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
    },
        Be = new RegExp(oe.join("|"), "i");!function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
            }
        }function n(e) {
            return Math.round(parseFloat(e));
        }var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
                return t(), o;
            }, pixelBoxStyles: function pixelBoxStyles() {
                return t(), s;
            }, pixelPosition: function pixelPosition() {
                return t(), i;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return t(), u;
            }, scrollboxSize: function scrollboxSize() {
                return t(), a;
            } }));
    }();function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }function _e(e, t) {
        return { get: function get() {
                if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
            } };
    }var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;function Qe(e) {
        if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;while (n--) {
            if ((e = Ge[n] + t) in Ye) return e;
        }
    }function Je(e) {
        var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }function Ke(e, t, n) {
        var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
    }function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;if (We.test(i)) {
            if (!n) return i;i = "auto";
        }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
    }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");return "" === n ? "1" : n;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        }, css: function css(e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        } }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = { get: function get(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r);
                });
            }, set: function set(e, n, r) {
                var i,
                    o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
            } };
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        w.cssHooks[e + t] = { expand: function expand(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                }return i;
            } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }), w.fn.extend({ css: function css(e, t) {
            return z(this, function (e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) {
                        o[t[a]] = w.css(e, t[a], !1, r);
                    }return o;
                }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            }, e, t, arguments.length > 1);
        } });function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
        }, cur: function cur() {
            var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
        }, run: function run(e) {
            var t,
                n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
        } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
                var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            }, set: function set(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
            } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        } }, w.easing = { linear: function linear(e) {
            return e;
        }, swing: function swing(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }function st() {
        return e.setTimeout(function () {
            nt = void 0;
        }), nt = Date.now();
    }function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        }return t && (i.opacity = i.width = e), i;
    }function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
            if (r = i[o].call(n, t, e)) return r;
        }
    }function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
        }));for (r in t) {
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
                }d[r] = y && y[r] || w.style(e, r);
            }
        }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;for (r in d) {
                u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                    g || fe([e]), J.remove(e, "fxshow");for (r in d) {
                        w.style(e, r, d[r]);
                    }
                })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        }
    }function ft(e, t) {
        var n, r, i, o, a;for (n in e) {
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i);
                }
            } else t[r] = i;
        }
    }function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
            delete u.elem;
        }),
            u = function u() {
            if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
                l.tweens[o].run(r);
            }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
        },
            l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
            }, stop: function stop(t) {
                var n = 0,
                    r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
                    l.tweens[n].run(1);
                }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
            } }),
            c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
    }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
                var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
            }] }, tweener: function tweener(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
                n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
            }
        }, prefilters: [ct], prefilter: function prefilter(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        } }), w.speed = function (e, t, n) {
        var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }, r;
    }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function animate(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function a() {
                var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
            };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        }, stop: function stop(e, t, n) {
            var r = function r(e) {
                var t = e.stop;delete e.stop, t(n);
            };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
                    a[i] && a[i].stop && ot.test(i) && r(a[i]);
                }for (i = o.length; i--;) {
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                }!t && n || w.dequeue(this, e);
            });
        }, finish: function finish(e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t,
                    n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                }for (t = 0; t < a; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this);
                }delete n.finish;
            });
        } }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
        };
    }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), w.timers = [], w.fx.tick = function () {
        var e,
            t = 0,
            n = w.timers;for (nt = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }n.length || w.fx.stop(), nt = void 0;
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at());
    }, w.fx.stop = function () {
        rt = null;
    }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);r.stop = function () {
                e.clearTimeout(i);
            };
        });
    }, function () {
        var e = r.createElement("input"),
            t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
    }();var dt,
        ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        }, removeAttr: function removeAttr(e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        } }), w.extend({ attr: function attr(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
        }, attrHooks: { type: { set: function set(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                } } }, removeAttr: function removeAttr(e, t) {
            var n,
                r = 0,
                i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
                e.removeAttribute(n);
            }
        } }), dt = { set: function set(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
            var i,
                o,
                a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
        };
    });var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        }, removeProp: function removeProp(e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        } }), w.extend({ prop: function prop(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: { tabIndex: { get: function get(e) {
                    var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
            var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function set(e) {
            var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this;
    });function vt(e) {
        return (e.match(M) || []).join(" ");
    }function mt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }w.fn.extend({ addClass: function addClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)));
            });if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;while (o = t[a++]) {
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, removeClass: function removeClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)));
            });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;while (o = t[a++]) {
                        while (r.indexOf(" " + o + " ") > -1) {
                            r = r.replace(" " + o + " ", " ");
                        }
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, toggleClass: function toggleClass(e, t) {
            var n = typeof e === "undefined" ? "undefined" : _typeof(e),
                r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t);
            }) : this.each(function () {
                var t, i, o, a;if (r) {
                    i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    }
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(e) {
            var t,
                n,
                r = 0;t = " " + e + " ";while (n = this[r++]) {
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            }return !1;
        } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
            var t,
                n,
                r,
                i = this[0];{
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + "";
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        } }), w.extend({ valHooks: { option: { get: function get(e) {
                    var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
                } }, select: { get: function get(e) {
                    var t,
                        n,
                        r,
                        i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;s.push(t);
                        }
                    }return s;
                }, set: function set(e, t) {
                    var n,
                        r,
                        i = e.options,
                        o = w.makeArray(t),
                        a = i.length;while (a--) {
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    }return n || (e.selectedIndex = -1), o;
                } } } }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = { set: function set(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
            } }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function Tt(e) {
        e.stopPropagation();
    };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
                        v.push(s), u = s;
                    }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
                    h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
            }
        }, simulate: function simulate(e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
        } }), w.fn.extend({ trigger: function trigger(e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this);
            });
        }, triggerHandler: function triggerHandler(e, t) {
            var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
        } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function n(e) {
            w.event.simulate(t, e.target, w.event.fix(e));
        };w.event.special[t] = { setup: function setup() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
            }, teardown: function teardown() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
            } };
    });var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;w.parseXML = function (t) {
        var n;if (!t || "string" != typeof t) return null;try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
    };var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
        var i;if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
        });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
            jt(e + "[" + i + "]", t[i], n, r);
        }
    }w.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
            var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value);
        });else for (n in e) {
            jt(n, e[n], t, i);
        }return r.join("&");
    }, w.fn.extend({ serialize: function serialize() {
            return w.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
            }).map(function (e, t) {
                var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return { name: t.name, value: e.replace(Dt, "\r\n") };
                }) : { name: t.name, value: n.replace(Dt, "\r\n") };
            }).get();
        } });var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
                "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            }
        };
    }function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;function a(s) {
            var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
            }), u;
        }return a(t.dataTypes[0]) || !i["*"] && a("*");
    }function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};for (n in t) {
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }return r && w.extend(!0, e, r), e;
    }function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        }if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
                u.unshift(i);break;
            }
        }if (u[0] in n) o = u[0];else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;break;
                }a || (a = i);
            }o = o || a;
        }if (o) return o !== u[0] && u.unshift(o), n[o];
    }function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
        }o = c.shift();while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
                    }
                }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                    t = a(t);
                } catch (e) {
                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                }
            }
        }return { state: "success", data: t };
    }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
            "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
                    var t;if (c) {
                        if (!s) {
                            s = {};while (t = Ot.exec(a)) {
                                s[t[1].toLowerCase()] = t[2];
                            }
                        }t = s[e.toLowerCase()];
                    }return null == t ? null : t;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return c ? a : null;
                }, setRequestHeader: function setRequestHeader(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
                }, overrideMimeType: function overrideMimeType(e) {
                    return null == c && (h.mimeType = e), this;
                }, statusCode: function statusCode(e) {
                    var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
                        x[t] = [x[t], e[t]];
                    }return this;
                }, abort: function abort(e) {
                    var t = e || C;return i && i.abort(t), k(0, t), this;
                } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
                E.setRequestHeader(p, h.headers[p]);
            }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout");
                }, h.timeout));try {
                    c = !1, i.send(b, k);
                } catch (e) {
                    if (c) throw e;k(-1, e);
                }
            } else k(-1, "No Transport");function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }return E;
        }, getJSON: function getJSON(e, t, n) {
            return w.get(e, t, n, "json");
        }, getScript: function getScript(e, t) {
            return w.get(e, void 0, t, "script");
        } }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
        };
    }), w._evalUrl = function (e) {
        return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, w.fn.extend({ wrapAll: function wrapAll(e) {
            var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;while (e.firstElementChild) {
                    e = e.firstElementChild;
                }return e;
            }).append(this)), this;
        }, wrapInner: function wrapInner(e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
            });
        }, wrap: function wrap(e) {
            var t = g(e);return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e);
            });
        }, unwrap: function unwrap(e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes);
            }), this;
        } }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var _n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
                var a,
                    s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
                    s[a] = t.xhrFields[a];
                }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
                    s.setRequestHeader(a, i[a]);
                }_n = function n(e) {
                    return function () {
                        _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                    };
                }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        _n && r();
                    });
                }, _n = _n("abort");try {
                    s.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (_n) throw e;
                }
            }, abort: function abort() {
                _n && _n();
            } };
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
    }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
                return w.globalEval(e), e;
            } } }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, _n2;return { send: function send(i, o) {
                    t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
                        t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), r.head.appendChild(t[0]);
                }, abort: function abort() {
                    _n2 && _n2();
                } };
        }
    });var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
        } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
            o,
            a,
            s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments;
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
    }, w.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
            });
        }), this;
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e);
        };
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem;
        }).length;
    }, w.offset = { setOffset: function setOffset(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = w.css(e, "position"),
                f = w(e),
                p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        } }, w.fn.extend({ offset: function offset(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t);
            });var t,
                n,
                r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
                        e = e.parentNode;
                    }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
                }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
                    e = e.offsetParent;
                }return e || be;
            });
        } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
        var n = "pageYOffset" === t;w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
        });
    }), w.each({ Height: "height", Width: "width" }, function (e, t) {
        w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
                    var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                }, t, a ? i : void 0, a);
            };
        });
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), w.fn.extend({ hover: function hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        } }), w.fn.extend({ bind: function bind(e, t, n) {
            return this.on(e, null, t, n);
        }, unbind: function unbind(e, t) {
            return this.off(e, null, t);
        }, delegate: function delegate(e, t, n, r) {
            return this.on(t, e, n, r);
        }, undelegate: function undelegate(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        } }), w.proxy = function (e, t) {
        var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
            return e.apply(t || this, r.concat(o.call(arguments)));
        }, i.guid = e.guid = e.guid || w.guid++, i;
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w;
    });var Jt = e.jQuery,
        Kt = e.$;return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }, t || (e.jQuery = e.$ = w), w;
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
            if (void 0 !== a.style[c]) return { end: b[c] };
        }return !1;
    }a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;a(this).one("bsTransitionEnd", function () {
            c = !0;
        });var e = function e() {
            c || a(d).trigger(a.support.transition.end);
        };return setTimeout(e, b), this;
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
            } });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }var c = '[data-dismiss="alert"]',
        d = function d(b) {
        a(b).on("click", c, this.close);
    };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }var e = a(this),
            f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }var c = function c(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
        }, this), 0);
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
            var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
                g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }var c = function c(b, _c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {case 37:
                    this.prev();break;case 39:
                    this.next();break;default:
                    return;}a.preventDefault();
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;return this.$items.eq(f);
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
    }, c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
            }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
        }
    };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this;
    };var e = function e(c) {
        var d,
            e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);b.call(c, c.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c,
            d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
    }function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
        });
    }var d = function d(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
    };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");return a ? "width" : "height";
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b,
                e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                    };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();c.call(f, h);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
    }function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function g(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
        var e = a(this);if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
            }return !1;
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);if (i.length) {
                    var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                }
            }
        }
    };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }var c = function c(b, _c2) {
        this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function () {
        var a = this;this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");var g = function g() {
                d.removeBackdrop(), b && b();
            };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;if (!a) {
            var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
        }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
    };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState) {
            if (this.inState[a]) return !0;
        }return !1;
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
                f = this.tip(),
                g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
            }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
                var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
                d.css({ top: Math.round(a.top), left: Math.round(a.left) });
            } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
            j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
        }var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
    }, c.prototype.fixTitle = function () {
        var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function () {
        return this.getTitle();
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f,
                k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
        }return e;
    }, c.prototype.getTitle = function () {
        var a,
            b = this.$element,
            c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function (a) {
        do {
            a += ~~(1e6 * Math.random());
        } while (document.getElementById(a));return a;
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function () {
        this.enabled = !0;
    }, c.prototype.disable = function () {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function (b) {
        var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function () {
        var a = this;clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
        });
    };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.init("popover", a, b);
    };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
    }function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
        }).sort(function (a, b) {
            return a[0] - b[0];
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1]);
        });
    }, b.prototype.process = function () {
        var a,
            b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
        }
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);c.call(b, b.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }var c = function c(b) {
        this.element = a(b);
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                });
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
        }var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
    };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this;
    };var e = function e(c) {
        c.preventDefault(), b.call(a(this), "show");
    };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }var c = function c(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
    };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
            b = this.$element.offset();return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }"bottom" == h && this.$element.offset({ top: g - b - f });
        }
    };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this;
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery);
/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <abdullah@almsaeedstudio.com>
 * @version 2.3.8
 * @license MIT <http://opensource.org/licenses/MIT>
 */
function _init() {
    "use strict";
    $.AdminLTE.layout = { activate: function activate() {
            var a = this;a.fix(), a.fixSidebar(), $("body, html, .wrapper").css("height", "auto"), $(window, ".wrapper").resize(function () {
                a.fix(), a.fixSidebar();
            });
        }, fix: function fix() {
            $(".layout-boxed > .wrapper").css("overflow", "hidden");var a = $(".main-footer").outerHeight() || 0,
                b = $(".main-header").outerHeight() + a,
                c = $(window).height(),
                d = $(".sidebar").height() || 0;if ($("body").hasClass("fixed")) $(".content-wrapper, .right-side").css("min-height", c - a);else {
                var e;c >= d ? ($(".content-wrapper, .right-side").css("min-height", c - b), e = c - b) : ($(".content-wrapper, .right-side").css("min-height", d), e = d);var f = $($.AdminLTE.options.controlSidebarOptions.selector);"undefined" != typeof f && f.height() > e && $(".content-wrapper, .right-side").css("min-height", f.height());
            }
        }, fixSidebar: function fixSidebar() {
            return $("body").hasClass("fixed") ? ("undefined" == typeof $.fn.slimScroll && window.console && window.console.error("Error: the fixed layout requires the slimscroll plugin!"), void ($.AdminLTE.options.sidebarSlimScroll && "undefined" != typeof $.fn.slimScroll && ($(".sidebar").slimScroll({ destroy: !0 }).height("auto"), $(".sidebar").slimScroll({ height: $(window).height() - $(".main-header").height() + "px", color: "rgba(0,0,0,0.2)", size: "3px" })))) : void ("undefined" != typeof $.fn.slimScroll && $(".sidebar").slimScroll({ destroy: !0 }).height("auto"));
        } }, $.AdminLTE.pushMenu = { activate: function activate(a) {
            var b = $.AdminLTE.options.screenSizes;$(document).on("click", a, function (a) {
                a.preventDefault(), $(window).width() > b.sm - 1 ? $("body").hasClass("sidebar-collapse") ? $("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu") : $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").hasClass("sidebar-open") ? $("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").addClass("sidebar-open").trigger("expanded.pushMenu");
            }), $(".content-wrapper").click(function () {
                $(window).width() <= b.sm - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open");
            }), ($.AdminLTE.options.sidebarExpandOnHover || $("body").hasClass("fixed") && $("body").hasClass("sidebar-mini")) && this.expandOnHover();
        }, expandOnHover: function expandOnHover() {
            var a = this,
                b = $.AdminLTE.options.screenSizes.sm - 1;$(".main-sidebar").hover(function () {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-collapse") && $(window).width() > b && a.expand();
            }, function () {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-expanded-on-hover") && $(window).width() > b && a.collapse();
            });
        }, expand: function expand() {
            $("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover");
        }, collapse: function collapse() {
            $("body").hasClass("sidebar-expanded-on-hover") && $("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse");
        } }, $.AdminLTE.tree = function (a) {
        var b = this,
            c = $.AdminLTE.options.animationSpeed;$(document).off("click", a + " li a").on("click", a + " li a", function (a) {
            var d = $(this),
                e = d.next();if (e.is(".treeview-menu") && e.is(":visible") && !$("body").hasClass("sidebar-collapse")) e.slideUp(c, function () {
                e.removeClass("menu-open");
            }), e.parent("li").removeClass("active");else if (e.is(".treeview-menu") && !e.is(":visible")) {
                var f = d.parents("ul").first(),
                    g = f.find("ul:visible").slideUp(c);g.removeClass("menu-open");var h = d.parent("li");e.slideDown(c, function () {
                    e.addClass("menu-open"), f.find("li.active").removeClass("active"), h.addClass("active"), b.layout.fix();
                });
            }e.is(".treeview-menu") && a.preventDefault();
        });
    }, $.AdminLTE.controlSidebar = { activate: function activate() {
            var a = this,
                b = $.AdminLTE.options.controlSidebarOptions,
                c = $(b.selector),
                d = $(b.toggleBtnSelector);d.on("click", function (d) {
                d.preventDefault(), c.hasClass("control-sidebar-open") || $("body").hasClass("control-sidebar-open") ? a.close(c, b.slide) : a.open(c, b.slide);
            });var e = $(".control-sidebar-bg");a._fix(e), $("body").hasClass("fixed") ? a._fixForFixed(c) : $(".content-wrapper, .right-side").height() < c.height() && a._fixForContent(c);
        }, open: function open(a, b) {
            b ? a.addClass("control-sidebar-open") : $("body").addClass("control-sidebar-open");
        }, close: function close(a, b) {
            b ? a.removeClass("control-sidebar-open") : $("body").removeClass("control-sidebar-open");
        }, _fix: function _fix(a) {
            var b = this;if ($("body").hasClass("layout-boxed")) {
                if (a.css("position", "absolute"), a.height($(".wrapper").height()), b.hasBindedResize) return;$(window).resize(function () {
                    b._fix(a);
                }), b.hasBindedResize = !0;
            } else a.css({ position: "fixed", height: "auto" });
        }, _fixForFixed: function _fixForFixed(a) {
            a.css({ position: "fixed", "max-height": "100%", overflow: "auto", "padding-bottom": "50px" });
        }, _fixForContent: function _fixForContent(a) {
            $(".content-wrapper, .right-side").css("min-height", a.height());
        } }, $.AdminLTE.boxWidget = { selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors, icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons, animationSpeed: $.AdminLTE.options.animationSpeed, activate: function activate(a) {
            var b = this;a || (a = document), $(a).on("click", b.selectors.collapse, function (a) {
                a.preventDefault(), b.collapse($(this));
            }), $(a).on("click", b.selectors.remove, function (a) {
                a.preventDefault(), b.remove($(this));
            });
        }, collapse: function collapse(a) {
            var b = this,
                c = a.parents(".box").first(),
                d = c.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");c.hasClass("collapsed-box") ? (a.children(":first").removeClass(b.icons.open).addClass(b.icons.collapse), d.slideDown(b.animationSpeed, function () {
                c.removeClass("collapsed-box");
            })) : (a.children(":first").removeClass(b.icons.collapse).addClass(b.icons.open), d.slideUp(b.animationSpeed, function () {
                c.addClass("collapsed-box");
            }));
        }, remove: function remove(a) {
            var b = a.parents(".box").first();b.slideUp(this.animationSpeed);
        } };
}if ("undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");$.AdminLTE = {}, $.AdminLTE.options = { navbarMenuSlimscroll: !0, navbarMenuSlimscrollWidth: "3px", navbarMenuHeight: "200px", animationSpeed: 500, sidebarToggleSelector: "[data-toggle='offcanvas']", sidebarPushMenu: !0, sidebarSlimScroll: !0, sidebarExpandOnHover: !1, enableBoxRefresh: !0, enableBSToppltip: !0, BSTooltipSelector: "[data-toggle='tooltip']", enableFastclick: !1, enableControlTreeView: !0, enableControlSidebar: !0, controlSidebarOptions: { toggleBtnSelector: "[data-toggle='control-sidebar']", selector: ".control-sidebar", slide: !0 }, enableBoxWidget: !0, boxWidgetOptions: { boxWidgetIcons: { collapse: "fa-minus", open: "fa-plus", remove: "fa-times" }, boxWidgetSelectors: { remove: '[data-widget="remove"]', collapse: '[data-widget="collapse"]' } }, directChat: { enable: !0, contactToggleSelector: '[data-widget="chat-pane-toggle"]' }, colors: { lightBlue: "#3c8dbc", red: "#f56954", green: "#00a65a", aqua: "#00c0ef", yellow: "#f39c12", blue: "#0073b7", navy: "#001F3F", teal: "#39CCCC", olive: "#3D9970", lime: "#01FF70", orange: "#FF851B", fuchsia: "#F012BE", purple: "#8E24AA", maroon: "#D81B60", black: "#222222", gray: "#d2d6de" }, screenSizes: { xs: 480, sm: 768, md: 992, lg: 1200 } }, $(function () {
    "use strict";
    $("body").removeClass("hold-transition"), "undefined" != typeof AdminLTEOptions && $.extend(!0, $.AdminLTE.options, AdminLTEOptions);var a = $.AdminLTE.options;_init(), $.AdminLTE.layout.activate(), a.enableControlTreeView && $.AdminLTE.tree(".sidebar"), a.enableControlSidebar && $.AdminLTE.controlSidebar.activate(), a.navbarMenuSlimscroll && "undefined" != typeof $.fn.slimscroll && $(".navbar .menu").slimscroll({ height: a.navbarMenuHeight, alwaysVisible: !1, size: a.navbarMenuSlimscrollWidth }).css("width", "100%"), a.sidebarPushMenu && $.AdminLTE.pushMenu.activate(a.sidebarToggleSelector), a.enableBSToppltip && $("body").tooltip({ selector: a.BSTooltipSelector, container: "body" }), a.enableBoxWidget && $.AdminLTE.boxWidget.activate(), a.enableFastclick && "undefined" != typeof FastClick && FastClick.attach(document.body), a.directChat.enable && $(document).on("click", a.directChat.contactToggleSelector, function () {
        var a = $(this).parents(".direct-chat").first();a.toggleClass("direct-chat-contacts-open");
    }), $('.btn-group[data-toggle="btn-toggle"]').each(function () {
        var a = $(this);$(this).find(".btn").on("click", function (b) {
            a.find(".btn.active").removeClass("active"), $(this).addClass("active"), b.preventDefault();
        });
    });
}), function (a) {
    "use strict";
    a.fn.boxRefresh = function (b) {
        function c(a) {
            a.append(f), e.onLoadStart.call(a);
        }function d(a) {
            a.find(f).remove(), e.onLoadDone.call(a);
        }var e = a.extend({ trigger: ".refresh-btn", source: "", onLoadStart: function onLoadStart(a) {
                return a;
            }, onLoadDone: function onLoadDone(a) {
                return a;
            } }, b),
            f = a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each(function () {
            if ("" === e.source) return void (window.console && window.console.log("Please specify a source first - boxRefresh()"));var b = a(this),
                f = b.find(e.trigger).first();f.on("click", function (a) {
                a.preventDefault(), c(b), b.find(".box-body").load(e.source, function () {
                    d(b);
                });
            });
        });
    };
}(jQuery), function (a) {
    "use strict";
    a.fn.activateBox = function () {
        a.AdminLTE.boxWidget.activate(this);
    }, a.fn.toggleBox = function () {
        var b = a(a.AdminLTE.boxWidget.selectors.collapse, this);a.AdminLTE.boxWidget.collapse(b);
    }, a.fn.removeBox = function () {
        var b = a(a.AdminLTE.boxWidget.selectors.remove, this);a.AdminLTE.boxWidget.remove(b);
    };
}(jQuery), function (a) {
    "use strict";
    a.fn.todolist = function (b) {
        var c = a.extend({ onCheck: function onCheck(a) {
                return a;
            }, onUncheck: function onUncheck(a) {
                return a;
            } }, b);return this.each(function () {
            "undefined" != typeof a.fn.iCheck ? (a("input", this).on("ifChecked", function () {
                var b = a(this).parents("li").first();b.toggleClass("done"), c.onCheck.call(b);
            }), a("input", this).on("ifUnchecked", function () {
                var b = a(this).parents("li").first();b.toggleClass("done"), c.onUncheck.call(b);
            })) : a("input", this).on("change", function () {
                var b = a(this).parents("li").first();b.toggleClass("done"), a("input", b).is(":checked") ? c.onCheck.call(b) : c.onUncheck.call(b);
            });
        });
    };
}(jQuery);

!function (e) {
    e(["jquery"], function (e) {
        return function () {
            function t(e, t, n) {
                return g({ type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t });
            }function n(t, n) {
                return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v);
            }function o(e, t, n) {
                return g({ type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t });
            }function s(e) {
                C = e;
            }function i(e, t, n) {
                return g({ type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t });
            }function a(e, t, n) {
                return g({ type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t });
            }function r(e, t) {
                var o = m();v || n(o), u(e, o, t) || l(o);
            }function c(t) {
                var o = m();return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
            }function l(t) {
                for (var n = v.children(), o = n.length - 1; o >= 0; o--) {
                    u(e(n[o]), t);
                }
            }function u(t, n, o) {
                var s = !(!o || !o.force) && o.force;return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({ duration: n.hideDuration, easing: n.hideEasing, complete: function complete() {
                        h(t);
                    } }), !0);
            }function d(t) {
                return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v;
            }function p() {
                return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 };
            }function f(e) {
                C && C(e);
            }function g(t) {
                function o(e) {
                    return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                }function s() {
                    c(), u(), d(), p(), g(), C(), l(), i();
                }function i() {
                    var e = "";switch (t.iconClass) {case "toast-success":case "toast-info":
                            e = "polite";break;default:
                            e = "assertive";}I.attr("aria-live", e);
                }function a() {
                    E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0);
                    }), E.onclick && I.click(function (e) {
                        E.onclick(e), b();
                    });
                }function r() {
                    I.hide(), I[E.showMethod]({ duration: E.showDuration, easing: E.showEasing, complete: E.onShown }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = new Date().getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
                }function c() {
                    t.iconClass && I.addClass(E.toastClass).addClass(y);
                }function l() {
                    E.newestOnTop ? v.prepend(I) : v.append(I);
                }function u() {
                    if (t.title) {
                        var e = t.title;E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
                    }
                }function d() {
                    if (t.message) {
                        var e = t.message;E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
                    }
                }function p() {
                    E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
                }function g() {
                    E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
                }function C() {
                    E.rtl && I.addClass("rtl");
                }function O(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w) return !0;w = t.message;
                    }return !1;
                }function b(t) {
                    var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
                        o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
                        s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({ duration: o, easing: s, complete: function complete() {
                            h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date(), f(P);
                        } });
                }function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = new Date().getTime() + F.maxHideTime);
                }function H() {
                    clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({ duration: E.showDuration, easing: E.showEasing });
                }function x() {
                    var e = (F.hideEta - new Date().getTime()) / F.maxHideTime * 100;q.width(e + "%");
                }var E = m(),
                    y = t.iconClass || E.iconClass;if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
                    T++, v = n(E, !0);var k = null,
                        I = e("<div/>"),
                        M = e("<div/>"),
                        B = e("<div/>"),
                        q = e("<div/>"),
                        j = e(E.closeHtml),
                        F = { intervalId: null, hideEta: null, maxHideTime: null },
                        P = { toastId: T, state: "visible", startTime: new Date(), options: E, map: t };return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
                }
            }function m() {
                return e.extend({}, p(), b.options);
            }function h(e) {
                v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
            }var v,
                C,
                w,
                T = 0,
                O = { error: "error", info: "info", success: "success", warning: "warning" },
                b = { clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.3", warning: a };return b;
        }();
    });
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery);
});
//# sourceMappingURL=toastr.js.map
/*! iCheck v1.0.1 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function (h) {
    function F(a, b, d) {
        var c = a[0],
            e = /er/.test(d) ? m : /bl/.test(d) ? s : l,
            f = d == H ? { checked: c[l], disabled: c[s], indeterminate: "true" == a.attr(m) || "false" == a.attr(w) } : c[e];if (/^(ch|di|in)/.test(d) && !f) D(a, e);else if (/^(un|en|de)/.test(d) && f) t(a, e);else if (d == H) for (e in f) {
            f[e] ? D(a, e, !0) : t(a, e, !0);
        } else if (!b || "toggle" == d) {
            if (!b) a[p]("ifClicked");f ? c[n] !== u && t(a, e) : D(a, e);
        }
    }function D(a, b, d) {
        var c = a[0],
            e = a.parent(),
            f = b == l,
            A = b == m,
            B = b == s,
            K = A ? w : f ? E : "enabled",
            p = k(a, K + x(c[n])),
            N = k(a, b + x(c[n]));if (!0 !== c[b]) {
            if (!d && b == l && c[n] == u && c.name) {
                var C = a.closest("form"),
                    r = 'input[name="' + c.name + '"]',
                    r = C.length ? C.find(r) : h(r);r.each(function () {
                    this !== c && h(this).data(q) && t(h(this), b);
                });
            }A ? (c[b] = !0, c[l] && t(a, l, "force")) : (d || (c[b] = !0), f && c[m] && t(a, m, !1));L(a, f, b, d);
        }c[s] && k(a, y, !0) && e.find("." + I).css(y, "default");e[v](N || k(a, b) || "");B ? e.attr("aria-disabled", "true") : e.attr("aria-checked", A ? "mixed" : "true");e[z](p || k(a, K) || "");
    }function t(a, b, d) {
        var c = a[0],
            e = a.parent(),
            f = b == l,
            h = b == m,
            q = b == s,
            p = h ? w : f ? E : "enabled",
            t = k(a, p + x(c[n])),
            u = k(a, b + x(c[n]));if (!1 !== c[b]) {
            if (h || !d || "force" == d) c[b] = !1;L(a, f, p, d);
        }!c[s] && k(a, y, !0) && e.find("." + I).css(y, "pointer");e[z](u || k(a, b) || "");q ? e.attr("aria-disabled", "false") : e.attr("aria-checked", "false");e[v](t || k(a, p) || "");
    }function M(a, b) {
        if (a.data(q)) {
            a.parent().html(a.attr("style", a.data(q).s || ""));if (b) a[p](b);a.off(".i").unwrap();h(G + '[for="' + a[0].id + '"]').add(a.closest(G)).off(".i");
        }
    }function k(a, b, d) {
        if (a.data(q)) return a.data(q).o[b + (d ? "" : "Class")];
    }function x(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
    }function L(a, b, d, c) {
        if (!c) {
            if (b) a[p]("ifToggled");a[p]("ifChanged")[p]("if" + x(d));
        }
    }var q = "iCheck",
        I = q + "-helper",
        u = "radio",
        l = "checked",
        E = "un" + l,
        s = "disabled",
        w = "determinate",
        m = "in" + w,
        H = "update",
        n = "type",
        v = "addClass",
        z = "removeClass",
        p = "trigger",
        G = "label",
        y = "cursor",
        J = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);h.fn[q] = function (a, b) {
        var d = 'input[type="checkbox"], input[type="' + u + '"]',
            c = h(),
            e = function e(a) {
            a.each(function () {
                var a = h(this);c = a.is(d) ? c.add(a) : c.add(a.find(d));
            });
        };if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(), e(this), c.each(function () {
            var c = h(this);"destroy" == a ? M(c, "ifDestroyed") : F(c, !0, a);h.isFunction(b) && b();
        });if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) && a) return this;var f = h.extend({ checkedClass: l, disabledClass: s, indeterminateClass: m, labelHover: !0, aria: !1 }, a),
            k = f.handle,
            B = f.hoverClass || "hover",
            x = f.focusClass || "focus",
            w = f.activeClass || "active",
            y = !!f.labelHover,
            C = f.labelHoverClass || "hover",
            r = ("" + f.increaseArea).replace("%", "") | 0;if ("checkbox" == k || k == u) d = 'input[type="' + k + '"]';-50 > r && (r = -50);e(this);return c.each(function () {
            var a = h(this);M(a);var c = this,
                b = c.id,
                e = -r + "%",
                d = 100 + 2 * r + "%",
                d = { position: "absolute", top: e, left: e, display: "block", width: d, height: d, margin: 0, padding: 0, background: "#fff", border: 0, opacity: 0 },
                e = J ? { position: "absolute", visibility: "hidden" } : r ? d : { position: "absolute", opacity: 0 },
                k = "checkbox" == c[n] ? f.checkboxClass || "icheckbox" : f.radioClass || "i" + u,
                m = h(G + '[for="' + b + '"]').add(a.closest(G)),
                A = !!f.aria,
                E = q + "-" + Math.random().toString(36).replace("0.", ""),
                g = '<div class="' + k + '" ' + (A ? 'role="' + c[n] + '" ' : "");m.length && A && m.each(function () {
                g += 'aria-labelledby="';this.id ? g += this.id : (this.id = E, g += E);g += '"';
            });g = a.wrap(g + "/>")[p]("ifCreated").parent().append(f.insert);d = h('<ins class="' + I + '"/>').css(d).appendTo(g);a.data(q, { o: f, s: a.attr("style") }).css(e);f.inheritClass && g[v](c.className || "");f.inheritID && b && g.attr("id", q + "-" + b);"static" == g.css("position") && g.css("position", "relative");F(a, !0, H);
            if (m.length) m.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i", function (b) {
                var d = b[n],
                    e = h(this);if (!c[s]) {
                    if ("click" == d) {
                        if (h(b.target).is("a")) return;F(a, !1, !0);
                    } else y && (/ut|nd/.test(d) ? (g[z](B), e[z](C)) : (g[v](B), e[v](C)));if (J) b.stopPropagation();else return !1;
                }
            });a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i", function (b) {
                var d = b[n];b = b.keyCode;if ("click" == d) return !1;if ("keydown" == d && 32 == b) return c[n] == u && c[l] || (c[l] ? t(a, l) : D(a, l)), !1;if ("keyup" == d && c[n] == u) !c[l] && D(a, l);else if (/us|ur/.test(d)) g["blur" == d ? z : v](x);
            });d.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i", function (b) {
                var d = b[n],
                    e = /wn|up/.test(d) ? w : B;if (!c[s]) {
                    if ("click" == d) F(a, !1, !0);else {
                        if (/wn|er|in/.test(d)) g[v](e);else g[z](e + " " + w);if (m.length && y && e == B) m[/ut|nd/.test(d) ? z : v](C);
                    }if (J) b.stopPropagation();else return !1;
                }
            });
        });
    };
})(window.jQuery || window.Zepto);

var ControllerPB = function () {
    function ControllerPB() {
        _classCallCheck(this, ControllerPB);

        //Call Methods
        this.buildMenu();
        this.aggLoaderPB(status);
        this.toggleMenu();
    }

    _createClass(ControllerPB, [{
        key: "buildMenu",
        value: function buildMenu() {
            var activeMenuId = $('.activeMenu').prop('id');
            var count = 0;
            if (activeMenuId) {
                while ($('#' + activeMenuId).parents('.treeview').length) {
                    var parent = $('#' + activeMenuId).parents('.treeview');
                    parent.find('ul:first').css('display', 'block').parent().addClass('active');
                    activeMenuId = parent.prop('id');
                    count++;
                    console.log(count);
                    if (count > 50) {
                        break;
                    }
                }
            }
        }
    }, {
        key: "aggLoaderPB",
        value: function aggLoaderPB(status) {
            var loaderAgg = $('#aggloader');
            if (status) {
                loaderAgg.css('opacity', '1');
                loaderAgg.css('transition', '1ms');
            } else {
                loaderAgg.css('opacity', '0');
                loaderAgg.css('transition', '1s');
            }
        }
    }, {
        key: "toggleMenu",
        value: function toggleMenu() {
            var menuIsopened = localStorage.getItem('menu');
            if (menuIsopened == 'off') {
                document.querySelector('body').classList.add('sidebar-collapse');
            }
            $('body').on('click', '.sidebar-toggle', function () {
                var menuIsOpen = window.localStorage.getItem('menu');
                if (menuIsOpen == null) {
                    localStorage.setItem('menu', 'off');
                }
                if (menuIsOpen == 'off') {
                    window.localStorage.setItem('menu', 'on');
                } else {
                    window.localStorage.setItem('menu', 'off');
                }
            });
        }
    }]);

    return ControllerPB;
}();
// Ion.RangeSlider
// version 2.0.13 Build: 335
// © Denis Ineshin, 2015
// https://github.com/IonDen
//
// Project page:    http://ionden.com/a/plugins/ion.rangeSlider/en.html
// GitHub page:     https://github.com/IonDen/ion.rangeSlider
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

;(function ($, document, window, navigator, undefined) {
    "use strict";

    // =================================================================================================================
    // Service

    var plugin_count = 0;

    // IE8 fix
    var is_old_ie = function () {
        var n = navigator.userAgent,
            r = /msie\s\d+/i,
            v;
        if (n.search(r) > 0) {
            v = r.exec(n).toString();
            v = v.split(" ")[1];
            if (v < 9) {
                $("html").addClass("lt-ie9");
                return true;
            }
        }
        return false;
    }();
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;
            var slice = [].slice;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function bound() {

                if (this instanceof bound) {

                    var F = function F() {};
                    F.prototype = target.prototype;
                    var self = new F();

                    var result = target.apply(self, args.concat(slice.call(arguments)));
                    if (Object(result) === result) {
                        return result;
                    }
                    return self;
                } else {

                    return target.apply(that, args.concat(slice.call(arguments)));
                }
            };

            return bound;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            var k;
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var O = Object(this);
            var len = O.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = +fromIndex || 0;
            if (Math.abs(n) === Infinity) {
                n = 0;
            }
            if (n >= len) {
                return -1;
            }
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }

    // =================================================================================================================
    // Template

    var base_html = '<span class="irs">' + '<span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span>' + '<span class="irs-min">0</span><span class="irs-max">1</span>' + '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' + '</span>' + '<span class="irs-grid"></span>' + '<span class="irs-bar"></span>';

    var single_html = '<span class="irs-bar-edge"></span>' + '<span class="irs-shadow shadow-single"></span>' + '<span class="irs-slider single"></span>';

    var double_html = '<span class="irs-shadow shadow-from"></span>' + '<span class="irs-shadow shadow-to"></span>' + '<span class="irs-slider from"></span>' + '<span class="irs-slider to"></span>';

    var disable_html = '<span class="irs-disable-mask"></span>';

    // =================================================================================================================
    // Core

    /**
     * Main plugin constructor
     *
     * @param input {object}
     * @param options {object}
     * @param plugin_count {number}
     * @constructor
     */
    var IonRangeSlider = function IonRangeSlider(input, options, plugin_count) {
        this.VERSION = "2.0.13";
        this.input = input;
        this.plugin_count = plugin_count;
        this.current_plugin = 0;
        this.calc_count = 0;
        this.update_tm = 0;
        this.old_from = 0;
        this.old_to = 0;
        this.raf_id = null;
        this.dragging = false;
        this.force_redraw = false;
        this.is_key = false;
        this.is_update = false;
        this.is_start = true;
        this.is_finish = false;
        this.is_active = false;
        this.is_resize = false;
        this.is_click = false;

        this.$cache = {
            win: $(window),
            body: $(document.body),
            input: $(input),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        };

        // get config data attributes
        var $inp = this.$cache.input;
        var data = {
            type: $inp.data("type"),

            min: $inp.data("min"),
            max: $inp.data("max"),
            from: $inp.data("from"),
            to: $inp.data("to"),
            step: $inp.data("step"),

            min_interval: $inp.data("minInterval"),
            max_interval: $inp.data("maxInterval"),
            drag_interval: $inp.data("dragInterval"),

            values: $inp.data("values"),

            from_fixed: $inp.data("fromFixed"),
            from_min: $inp.data("fromMin"),
            from_max: $inp.data("fromMax"),
            from_shadow: $inp.data("fromShadow"),

            to_fixed: $inp.data("toFixed"),
            to_min: $inp.data("toMin"),
            to_max: $inp.data("toMax"),
            to_shadow: $inp.data("toShadow"),

            prettify_enabled: $inp.data("prettifyEnabled"),
            prettify_separator: $inp.data("prettifySeparator"),

            force_edges: $inp.data("forceEdges"),

            keyboard: $inp.data("keyboard"),
            keyboard_step: $inp.data("keyboardStep"),

            grid: $inp.data("grid"),
            grid_margin: $inp.data("gridMargin"),
            grid_num: $inp.data("gridNum"),
            grid_snap: $inp.data("gridSnap"),

            hide_min_max: $inp.data("hideMinMax"),
            hide_from_to: $inp.data("hideFromTo"),

            prefix: $inp.data("prefix"),
            postfix: $inp.data("postfix"),
            max_postfix: $inp.data("maxPostfix"),
            decorate_both: $inp.data("decorateBoth"),
            values_separator: $inp.data("valuesSeparator"),

            disable: $inp.data("disable")
        };
        data.values = data.values && data.values.split(",");

        // get from and to out of input
        var val = $inp.prop("value");
        if (val) {
            val = val.split(";");

            if (val[0] && val[0] == +val[0]) {
                val[0] = +val[0];
            }
            if (val[1] && val[1] == +val[1]) {
                val[1] = +val[1];
            }

            if (options && options.values && options.values.length) {
                data.from = val[0] && options.values.indexOf(val[0]);
                data.to = val[1] && options.values.indexOf(val[1]);
            } else {
                data.from = val[0] && +val[0];
                data.to = val[1] && +val[1];
            }
        }

        // JS config has a priority
        options = $.extend(data, options);

        // get config from options
        this.options = $.extend({
            type: "single",

            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,

            min_interval: 0,
            max_interval: 0,
            drag_interval: false,

            values: [],
            p_values: [],

            from_fixed: false,
            from_min: null,
            from_max: null,
            from_shadow: false,

            to_fixed: false,
            to_min: null,
            to_max: null,
            to_shadow: false,

            prettify_enabled: true,
            prettify_separator: " ",
            prettify: null,

            force_edges: false,

            keyboard: false,
            keyboard_step: 5,

            grid: false,
            grid_margin: true,
            grid_num: 4,
            grid_snap: false,

            hide_min_max: false,
            hide_from_to: false,

            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: true,
            values_separator: " — ",

            disable: false,

            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, options);

        this.validate();

        this.result = {
            input: this.$cache.input,
            slider: null,

            min: this.options.min,
            max: this.options.max,

            from: this.options.from,
            from_percent: 0,
            from_value: null,

            to: this.options.to,
            to_percent: 0,
            to_value: null
        };

        this.coords = {
            // left
            x_gap: 0,
            x_pointer: 0,

            // width
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,

            // percents
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single: 0,
            p_single_real: 0,
            p_from: 0,
            p_from_real: 0,
            p_to: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,

            // grid
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        };

        this.labels = {
            // width
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,

            // percents
            p_min: 0,
            p_max: 0,
            p_from: 0,
            p_from_left: 0,
            p_to: 0,
            p_to_left: 0,
            p_single: 0,
            p_single_left: 0
        };

        this.init();
    };

    IonRangeSlider.prototype = {
        init: function init(is_update) {
            this.coords.p_step = this.options.step / ((this.options.max - this.options.min) / 100);
            this.target = "base";

            this.toggleInput();
            this.append();
            this.setMinMax();

            if (is_update) {
                this.force_redraw = true;
                this.calc(true);

                // callbacks called
                this.callOnUpdate();
            } else {
                this.force_redraw = true;
                this.calc(true);

                // callbacks called
                this.callOnStart();
            }

            this.updateScene();
        },

        append: function append() {
            var container_html = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
            this.$cache.input.before(container_html);
            this.$cache.input.prop("readonly", true);
            this.$cache.cont = this.$cache.input.prev();
            this.result.slider = this.$cache.cont;

            this.$cache.cont.html(base_html);
            this.$cache.rs = this.$cache.cont.find(".irs");
            this.$cache.min = this.$cache.cont.find(".irs-min");
            this.$cache.max = this.$cache.cont.find(".irs-max");
            this.$cache.from = this.$cache.cont.find(".irs-from");
            this.$cache.to = this.$cache.cont.find(".irs-to");
            this.$cache.single = this.$cache.cont.find(".irs-single");
            this.$cache.bar = this.$cache.cont.find(".irs-bar");
            this.$cache.line = this.$cache.cont.find(".irs-line");
            this.$cache.grid = this.$cache.cont.find(".irs-grid");

            if (this.options.type === "single") {
                this.$cache.cont.append(single_html);
                this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
                this.$cache.s_single = this.$cache.cont.find(".single");
                this.$cache.from[0].style.visibility = "hidden";
                this.$cache.to[0].style.visibility = "hidden";
                this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
            } else {
                this.$cache.cont.append(double_html);
                this.$cache.s_from = this.$cache.cont.find(".from");
                this.$cache.s_to = this.$cache.cont.find(".to");
                this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
                this.$cache.shad_to = this.$cache.cont.find(".shadow-to");

                this.setTopHandler();
            }

            if (this.options.hide_from_to) {
                this.$cache.from[0].style.display = "none";
                this.$cache.to[0].style.display = "none";
                this.$cache.single[0].style.display = "none";
            }

            this.appendGrid();

            if (this.options.disable) {
                this.appendDisableMask();
                this.$cache.input[0].disabled = true;
            } else {
                this.$cache.cont.removeClass("irs-disabled");
                this.$cache.input[0].disabled = false;
                this.bindEvents();
            }
        },

        setTopHandler: function setTopHandler() {
            var min = this.options.min,
                max = this.options.max,
                from = this.options.from,
                to = this.options.to;

            if (from > min && to === max) {
                this.$cache.s_from.addClass("type_last");
            } else if (to < max) {
                this.$cache.s_to.addClass("type_last");
            }
        },

        appendDisableMask: function appendDisableMask() {
            this.$cache.cont.append(disable_html);
            this.$cache.cont.addClass("irs-disabled");
        },

        remove: function remove() {
            this.$cache.cont.remove();
            this.$cache.cont = null;

            this.$cache.line.off("keydown.irs_" + this.plugin_count);

            this.$cache.body.off("touchmove.irs_" + this.plugin_count);
            this.$cache.body.off("mousemove.irs_" + this.plugin_count);

            this.$cache.win.off("touchend.irs_" + this.plugin_count);
            this.$cache.win.off("mouseup.irs_" + this.plugin_count);

            if (is_old_ie) {
                this.$cache.body.off("mouseup.irs_" + this.plugin_count);
                this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
            }

            this.$cache.grid_labels = [];
            this.coords.big = [];
            this.coords.big_w = [];
            this.coords.big_p = [];
            this.coords.big_x = [];

            cancelAnimationFrame(this.raf_id);
        },

        bindEvents: function bindEvents() {
            this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
            this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));

            this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
            this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

            this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

            if (this.options.drag_interval && this.options.type === "double") {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
            } else {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }

            if (this.options.type === "single") {
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            } else {
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));

                this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }

            if (this.options.keyboard) {
                this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
            }

            if (is_old_ie) {
                this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
            }
        },

        pointerMove: function pointerMove(e) {
            if (!this.dragging) {
                return;
            }

            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            this.coords.x_pointer = x - this.coords.x_gap;

            this.calc();
        },

        pointerUp: function pointerUp(e) {
            if (this.current_plugin !== this.plugin_count) {
                return;
            }

            if (this.is_active) {
                this.is_active = false;
            } else {
                return;
            }

            // callbacks call
            if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
                this.is_finish = true;
                this.callOnFinish();
            }

            this.$cache.cont.find(".state_hover").removeClass("state_hover");

            this.force_redraw = true;
            this.dragging = false;

            if (is_old_ie) {
                $("*").prop("unselectable", false);
            }

            this.updateScene();
        },

        changeLevel: function changeLevel(target) {
            switch (target) {
                case "single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single);
                    break;
                case "from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from);
                    this.$cache.s_from.addClass("state_hover");
                    this.$cache.s_from.addClass("type_last");
                    this.$cache.s_to.removeClass("type_last");
                    break;
                case "to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to);
                    this.$cache.s_to.addClass("state_hover");
                    this.$cache.s_to.addClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
                case "both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from);
                    this.coords.p_gap_right = this.toFixed(this.coords.p_to - this.coords.p_pointer);
                    this.$cache.s_to.removeClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
            }
        },

        pointerDown: function pointerDown(target, e) {
            e.preventDefault();
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_active = true;
            this.dragging = true;

            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = x - this.coords.x_gap;

            this.calcPointer();
            this.changeLevel(target);

            if (is_old_ie) {
                $("*").prop("unselectable", true);
            }

            this.$cache.line.trigger("focus");

            this.updateScene();
        },

        pointerClick: function pointerClick(target, e) {
            e.preventDefault();
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_click = true;
            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();

            this.force_redraw = true;
            this.calc();

            this.$cache.line.trigger("focus");
        },

        key: function key(target, e) {
            if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                return;
            }

            switch (e.which) {
                case 83: // W
                case 65: // A
                case 40: // DOWN
                case 37:
                    // LEFT
                    e.preventDefault();
                    this.moveByKey(false);
                    break;

                case 87: // S
                case 68: // D
                case 38: // UP
                case 39:
                    // RIGHT
                    e.preventDefault();
                    this.moveByKey(true);
                    break;
            }

            return true;
        },

        // Move by key. Beta
        // TODO: refactor than have plenty of time
        moveByKey: function moveByKey(right) {
            var p = this.coords.p_pointer;

            if (right) {
                p += this.options.keyboard_step;
            } else {
                p -= this.options.keyboard_step;
            }

            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
            this.is_key = true;
            this.calc();
        },

        setMinMax: function setMinMax() {
            if (!this.options) {
                return;
            }

            if (this.options.hide_min_max) {
                this.$cache.min[0].style.display = "none";
                this.$cache.max[0].style.display = "none";
                return;
            }

            if (this.options.values.length) {
                this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
            } else {
                this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min));
                this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max));
            }

            this.labels.w_min = this.$cache.min.outerWidth(false);
            this.labels.w_max = this.$cache.max.outerWidth(false);
        },

        // =============================================================================================================
        // Calculations

        calc: function calc(update) {
            if (!this.options) {
                return;
            }

            this.calc_count++;

            if (this.calc_count === 10 || update) {
                this.calc_count = 0;
                this.coords.w_rs = this.$cache.rs.outerWidth(false);
                if (this.options.type === "single") {
                    this.coords.w_handle = this.$cache.s_single.outerWidth(false);
                } else {
                    this.coords.w_handle = this.$cache.s_from.outerWidth(false);
                }
            }

            if (!this.coords.w_rs) {
                return;
            }

            this.calcPointer();

            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
            var real_width = 100 - this.coords.p_handle,
                real_x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

            if (this.target === "click") {
                this.coords.p_gap = this.coords.p_handle / 2;
                real_x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                this.target = this.chooseHandle(real_x);
            }

            if (real_x < 0) {
                real_x = 0;
            } else if (real_x > real_width) {
                real_x = real_width;
            }

            switch (this.target) {
                case "base":
                    var w = (this.options.max - this.options.min) / 100,
                        f = (this.result.from - this.options.min) / w,
                        t = (this.result.to - this.options.min) / w;

                    this.coords.p_single_real = this.toFixed(f);
                    this.coords.p_from_real = this.toFixed(f);
                    this.coords.p_to_real = this.toFixed(t);

                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

                    this.coords.p_single = this.toFixed(f - this.coords.p_handle / 100 * f);
                    this.coords.p_from = this.toFixed(f - this.coords.p_handle / 100 * f);
                    this.coords.p_to = this.toFixed(t - this.coords.p_handle / 100 * t);

                    this.target = null;

                    break;

                case "single":
                    if (this.options.from_fixed) {
                        break;
                    }

                    this.coords.p_single_real = this.calcWithStep(real_x / real_width * 100);
                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_single = this.toFixed(this.coords.p_single_real / 100 * real_width);

                    break;

                case "from":
                    if (this.options.from_fixed) {
                        break;
                    }

                    this.coords.p_from_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_from_real > this.coords.p_to_real) {
                        this.coords.p_from_real = this.coords.p_to_real;
                    }
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * real_width);

                    break;

                case "to":
                    if (this.options.to_fixed) {
                        break;
                    }

                    this.coords.p_to_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_to_real < this.coords.p_from_real) {
                        this.coords.p_to_real = this.coords.p_from_real;
                    }
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * real_width);

                    break;

                case "both":
                    if (this.options.from_fixed || this.options.to_fixed) {
                        break;
                    }

                    real_x = this.toFixed(real_x + this.coords.p_handle * 0.1);

                    this.coords.p_from_real = this.calcWithStep((real_x - this.coords.p_gap_left) / real_width * 100);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * real_width);

                    this.coords.p_to_real = this.calcWithStep((real_x + this.coords.p_gap_right) / real_width * 100);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * real_width);

                    break;
            }

            if (this.options.type === "single") {
                this.coords.p_bar_x = this.coords.p_handle / 2;
                this.coords.p_bar_w = this.coords.p_single;

                this.result.from_percent = this.coords.p_single_real;
                this.result.from = this.calcReal(this.coords.p_single_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                }
            } else {
                this.coords.p_bar_x = this.toFixed(this.coords.p_from + this.coords.p_handle / 2);
                this.coords.p_bar_w = this.toFixed(this.coords.p_to - this.coords.p_from);

                this.result.from_percent = this.coords.p_from_real;
                this.result.from = this.calcReal(this.coords.p_from_real);
                this.result.to_percent = this.coords.p_to_real;
                this.result.to = this.calcReal(this.coords.p_to_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                    this.result.to_value = this.options.values[this.result.to];
                }
            }

            this.calcMinMax();
            this.calcLabels();
        },

        calcPointer: function calcPointer() {
            if (!this.coords.w_rs) {
                this.coords.p_pointer = 0;
                return;
            }

            if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)) {
                this.coords.x_pointer = 0;
            } else if (this.coords.x_pointer > this.coords.w_rs) {
                this.coords.x_pointer = this.coords.w_rs;
            }

            this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
        },

        chooseHandle: function chooseHandle(real_x) {
            if (this.options.type === "single") {
                return "single";
            } else {
                var m_point = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;
                if (real_x >= m_point) {
                    return this.options.to_fixed ? "from" : "to";
                } else {
                    return this.options.from_fixed ? "to" : "from";
                }
            }
        },

        calcMinMax: function calcMinMax() {
            if (!this.coords.w_rs) {
                return;
            }

            this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
            this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
        },

        calcLabels: function calcLabels() {
            if (!this.coords.w_rs || this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = this.coords.p_single + this.coords.p_handle / 2 - this.labels.p_single / 2;
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);
            } else {

                this.labels.w_from = this.$cache.from.outerWidth(false);
                this.labels.p_from = this.labels.w_from / this.coords.w_rs * 100;
                this.labels.p_from_left = this.coords.p_from + this.coords.p_handle / 2 - this.labels.p_from / 2;
                this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
                this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from);

                this.labels.w_to = this.$cache.to.outerWidth(false);
                this.labels.p_to = this.labels.w_to / this.coords.w_rs * 100;
                this.labels.p_to_left = this.coords.p_to + this.coords.p_handle / 2 - this.labels.p_to / 2;
                this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
                this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to);

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to) / 2 - this.labels.p_single / 2;
                this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);
            }
        },

        // =============================================================================================================
        // Drawings

        updateScene: function updateScene() {
            if (this.raf_id) {
                cancelAnimationFrame(this.raf_id);
                this.raf_id = null;
            }

            clearTimeout(this.update_tm);
            this.update_tm = null;

            if (!this.options) {
                return;
            }

            this.drawHandles();

            if (this.is_active) {
                this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
            } else {
                this.update_tm = setTimeout(this.updateScene.bind(this), 300);
            }
        },

        drawHandles: function drawHandles() {
            this.coords.w_rs = this.$cache.rs.outerWidth(false);

            if (!this.coords.w_rs) {
                return;
            }

            if (this.coords.w_rs !== this.coords.w_rs_old) {
                this.target = "base";
                this.is_resize = true;
            }

            if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
                this.setMinMax();
                this.calc(true);
                this.drawLabels();
                if (this.options.grid) {
                    this.calcGridMargin();
                    this.calcGridLabels();
                }
                this.force_redraw = true;
                this.coords.w_rs_old = this.coords.w_rs;
                this.drawShadow();
            }

            if (!this.coords.w_rs) {
                return;
            }

            if (!this.dragging && !this.force_redraw && !this.is_key) {
                return;
            }

            if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

                this.drawLabels();

                this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
                this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

                if (this.options.type === "single") {
                    this.$cache.s_single[0].style.left = this.coords.p_single + "%";

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value);
                        this.$cache.input.data("from", this.result.from_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from);
                        this.$cache.input.data("from", this.result.from);
                    }
                } else {
                    this.$cache.s_from[0].style.left = this.coords.p_from + "%";
                    this.$cache.s_to[0].style.left = this.coords.p_to + "%";

                    if (this.old_from !== this.result.from || this.force_redraw) {
                        this.$cache.from[0].style.left = this.labels.p_from_left + "%";
                    }
                    if (this.old_to !== this.result.to || this.force_redraw) {
                        this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                    }

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value + ";" + this.result.to_value);
                        this.$cache.input.data("from", this.result.from_value);
                        this.$cache.input.data("to", this.result.to_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from + ";" + this.result.to);
                        this.$cache.input.data("from", this.result.from);
                        this.$cache.input.data("to", this.result.to);
                    }
                }

                if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
                    this.$cache.input.trigger("change");
                }

                this.old_from = this.result.from;
                this.old_to = this.result.to;

                // callbacks call
                if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
                    this.callOnChange();
                }
                if (this.is_key || this.is_click) {
                    this.callOnFinish();
                }

                this.is_update = false;
                this.is_resize = false;
                this.is_finish = false;
            }

            this.is_start = false;
            this.is_key = false;
            this.is_click = false;
            this.force_redraw = false;
        },

        // callbacks
        callOnStart: function callOnStart() {
            if (this.options.onStart && typeof this.options.onStart === "function") {
                this.options.onStart(this.result);
            }
        },
        callOnChange: function callOnChange() {
            if (this.options.onChange && typeof this.options.onChange === "function") {
                this.options.onChange(this.result);
            }
        },
        callOnFinish: function callOnFinish() {
            if (this.options.onFinish && typeof this.options.onFinish === "function") {
                this.options.onFinish(this.result);
            }
        },
        callOnUpdate: function callOnUpdate() {
            if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
                this.options.onUpdate(this.result);
            }
        },

        drawLabels: function drawLabels() {
            if (!this.options) {
                return;
            }

            var values_num = this.options.values.length,
                p_values = this.options.p_values,
                text_single,
                text_from,
                text_to;

            if (this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                if (values_num) {
                    text_single = this.decorate(p_values[this.result.from]);
                    this.$cache.single.html(text_single);
                } else {
                    text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                    this.$cache.single.html(text_single);
                }

                this.calcLabels();

                if (this.labels.p_single_left < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (this.labels.p_single_left + this.labels.p_single > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }
            } else {

                if (values_num) {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(p_values[this.result.from]);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(p_values[this.result.to]);
                    } else {
                        text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
                    }
                    text_from = this.decorate(p_values[this.result.from]);
                    text_to = this.decorate(p_values[this.result.to]);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);
                } else {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(this._prettify(this.result.to), this.result.to);
                    } else {
                        text_single = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to);
                    }
                    text_from = this.decorate(this._prettify(this.result.from), this.result.from);
                    text_to = this.decorate(this._prettify(this.result.to), this.result.to);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);
                }

                this.calcLabels();

                var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                    single_left = this.labels.p_single_left + this.labels.p_single,
                    to_left = this.labels.p_to_left + this.labels.p_to,
                    max = Math.max(single_left, to_left);

                if (this.labels.p_from_left + this.labels.p_from >= this.labels.p_to_left) {
                    this.$cache.from[0].style.visibility = "hidden";
                    this.$cache.to[0].style.visibility = "hidden";
                    this.$cache.single[0].style.visibility = "visible";

                    if (this.result.from === this.result.to) {
                        this.$cache.from[0].style.visibility = "visible";
                        this.$cache.single[0].style.visibility = "hidden";
                        max = to_left;
                    } else {
                        this.$cache.from[0].style.visibility = "hidden";
                        this.$cache.single[0].style.visibility = "visible";
                        max = Math.max(single_left, to_left);
                    }
                } else {
                    this.$cache.from[0].style.visibility = "visible";
                    this.$cache.to[0].style.visibility = "visible";
                    this.$cache.single[0].style.visibility = "hidden";
                }

                if (min < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (max > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }
            }
        },

        drawShadow: function drawShadow() {
            var o = this.options,
                c = this.$cache,
                is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
                is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
                is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
                is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),
                from_min,
                from_max,
                to_min,
                to_max;

            if (o.type === "single") {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.calcPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.calcPercent(is_from_max ? o.from_max : o.max) - from_min;
                    from_min = this.toFixed(from_min - this.coords.p_handle / 100 * from_min);
                    from_max = this.toFixed(from_max - this.coords.p_handle / 100 * from_max);
                    from_min = from_min + this.coords.p_handle / 2;

                    c.shad_single[0].style.display = "block";
                    c.shad_single[0].style.left = from_min + "%";
                    c.shad_single[0].style.width = from_max + "%";
                } else {
                    c.shad_single[0].style.display = "none";
                }
            } else {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.calcPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.calcPercent(is_from_max ? o.from_max : o.max) - from_min;
                    from_min = this.toFixed(from_min - this.coords.p_handle / 100 * from_min);
                    from_max = this.toFixed(from_max - this.coords.p_handle / 100 * from_max);
                    from_min = from_min + this.coords.p_handle / 2;

                    c.shad_from[0].style.display = "block";
                    c.shad_from[0].style.left = from_min + "%";
                    c.shad_from[0].style.width = from_max + "%";
                } else {
                    c.shad_from[0].style.display = "none";
                }

                if (o.to_shadow && (is_to_min || is_to_max)) {
                    to_min = this.calcPercent(is_to_min ? o.to_min : o.min);
                    to_max = this.calcPercent(is_to_max ? o.to_max : o.max) - to_min;
                    to_min = this.toFixed(to_min - this.coords.p_handle / 100 * to_min);
                    to_max = this.toFixed(to_max - this.coords.p_handle / 100 * to_max);
                    to_min = to_min + this.coords.p_handle / 2;

                    c.shad_to[0].style.display = "block";
                    c.shad_to[0].style.left = to_min + "%";
                    c.shad_to[0].style.width = to_max + "%";
                } else {
                    c.shad_to[0].style.display = "none";
                }
            }
        },

        // =============================================================================================================
        // Service methods

        toggleInput: function toggleInput() {
            this.$cache.input.toggleClass("irs-hidden-input");
        },

        calcPercent: function calcPercent(num) {
            var w = (this.options.max - this.options.min) / 100,
                percent = (num - this.options.min) / w;

            return this.toFixed(percent);
        },

        calcReal: function calcReal(percent) {
            var min = this.options.min,
                max = this.options.max,
                min_decimals = min.toString().split(".")[1],
                max_decimals = max.toString().split(".")[1],
                min_length,
                max_length,
                avg_decimals = 0,
                abs = 0;

            if (percent === 0) {
                return this.options.min;
            }
            if (percent === 100) {
                return this.options.max;
            }

            if (min_decimals) {
                min_length = min_decimals.length;
                avg_decimals = min_length;
            }
            if (max_decimals) {
                max_length = max_decimals.length;
                avg_decimals = max_length;
            }
            if (min_length && max_length) {
                avg_decimals = min_length >= max_length ? min_length : max_length;
            }

            if (min < 0) {
                abs = Math.abs(min);
                min = +(min + abs).toFixed(avg_decimals);
                max = +(max + abs).toFixed(avg_decimals);
            }

            var number = (max - min) / 100 * percent + min,
                string = this.options.step.toString().split(".")[1],
                result;

            if (string) {
                number = +number.toFixed(string.length);
            } else {
                number = number / this.options.step;
                number = number * this.options.step;

                number = +number.toFixed(0);
            }

            if (abs) {
                number -= abs;
            }

            if (string) {
                result = +number.toFixed(string.length);
            } else {
                result = this.toFixed(number);
            }

            if (result < this.options.min) {
                result = this.options.min;
            } else if (result > this.options.max) {
                result = this.options.max;
            }

            return result;
        },

        calcWithStep: function calcWithStep(percent) {
            var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

            if (rounded > 100) {
                rounded = 100;
            }
            if (percent === 100) {
                rounded = 100;
            }

            return this.toFixed(rounded);
        },

        checkMinInterval: function checkMinInterval(p_current, p_next, type) {
            var o = this.options,
                current,
                next;

            if (!o.min_interval) {
                return p_current;
            }

            current = this.calcReal(p_current);
            next = this.calcReal(p_next);

            if (type === "from") {

                if (next - current < o.min_interval) {
                    current = next - o.min_interval;
                }
            } else {

                if (current - next < o.min_interval) {
                    current = next + o.min_interval;
                }
            }

            return this.calcPercent(current);
        },

        checkMaxInterval: function checkMaxInterval(p_current, p_next, type) {
            var o = this.options,
                current,
                next;

            if (!o.max_interval) {
                return p_current;
            }

            current = this.calcReal(p_current);
            next = this.calcReal(p_next);

            if (type === "from") {

                if (next - current > o.max_interval) {
                    current = next - o.max_interval;
                }
            } else {

                if (current - next > o.max_interval) {
                    current = next + o.max_interval;
                }
            }

            return this.calcPercent(current);
        },

        checkDiapason: function checkDiapason(p_num, min, max) {
            var num = this.calcReal(p_num),
                o = this.options;

            if (typeof min !== "number") {
                min = o.min;
            }

            if (typeof max !== "number") {
                max = o.max;
            }

            if (num < min) {
                num = min;
            }

            if (num > max) {
                num = max;
            }

            return this.calcPercent(num);
        },

        toFixed: function toFixed(num) {
            num = num.toFixed(9);
            return +num;
        },

        _prettify: function _prettify(num) {
            if (!this.options.prettify_enabled) {
                return num;
            }

            if (this.options.prettify && typeof this.options.prettify === "function") {
                return this.options.prettify(num);
            } else {
                return this.prettify(num);
            }
        },

        prettify: function prettify(num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
        },

        checkEdges: function checkEdges(left, width) {
            if (!this.options.force_edges) {
                return this.toFixed(left);
            }

            if (left < 0) {
                left = 0;
            } else if (left > 100 - width) {
                left = 100 - width;
            }

            return this.toFixed(left);
        },

        validate: function validate() {
            var o = this.options,
                r = this.result,
                v = o.values,
                vl = v.length,
                value,
                i;

            if (typeof o.min === "string") o.min = +o.min;
            if (typeof o.max === "string") o.max = +o.max;
            if (typeof o.from === "string") o.from = +o.from;
            if (typeof o.to === "string") o.to = +o.to;
            if (typeof o.step === "string") o.step = +o.step;

            if (typeof o.from_min === "string") o.from_min = +o.from_min;
            if (typeof o.from_max === "string") o.from_max = +o.from_max;
            if (typeof o.to_min === "string") o.to_min = +o.to_min;
            if (typeof o.to_max === "string") o.to_max = +o.to_max;

            if (typeof o.keyboard_step === "string") o.keyboard_step = +o.keyboard_step;
            if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

            if (o.max <= o.min) {
                if (o.min) {
                    o.max = o.min * 2;
                } else {
                    o.max = o.min + 1;
                }
                o.step = 1;
            }

            if (vl) {
                o.p_values = [];
                o.min = 0;
                o.max = vl - 1;
                o.step = 1;
                o.grid_num = o.max;
                o.grid_snap = true;

                for (i = 0; i < vl; i++) {
                    value = +v[i];

                    if (!isNaN(value)) {
                        v[i] = value;
                        value = this._prettify(value);
                    } else {
                        value = v[i];
                    }

                    o.p_values.push(value);
                }
            }

            if (typeof o.from !== "number" || isNaN(o.from)) {
                o.from = o.min;
            }

            if (typeof o.to !== "number" || isNaN(o.from)) {
                o.to = o.max;
            }

            if (o.type === "single") {

                if (o.from < o.min) {
                    o.from = o.min;
                }

                if (o.from > o.max) {
                    o.from = o.max;
                }
            } else {

                if (o.from < o.min || o.from > o.max) {
                    o.from = o.min;
                }
                if (o.to > o.max || o.to < o.min) {
                    o.to = o.max;
                }
                if (o.from > o.to) {
                    o.from = o.to;
                }
            }

            if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
                o.step = 1;
            }

            if (typeof o.keyboard_step !== "number" || isNaN(o.keyboard_step) || !o.keyboard_step || o.keyboard_step < 0) {
                o.keyboard_step = 5;
            }

            if (typeof o.from_min === "number" && o.from < o.from_min) {
                o.from = o.from_min;
            }

            if (typeof o.from_max === "number" && o.from > o.from_max) {
                o.from = o.from_max;
            }

            if (typeof o.to_min === "number" && o.to < o.to_min) {
                o.to = o.to_min;
            }

            if (typeof o.to_max === "number" && o.from > o.to_max) {
                o.to = o.to_max;
            }

            if (r) {
                if (r.min !== o.min) {
                    r.min = o.min;
                }

                if (r.max !== o.max) {
                    r.max = o.max;
                }

                if (r.from < r.min || r.from > r.max) {
                    r.from = o.from;
                }

                if (r.to < r.min || r.to > r.max) {
                    r.to = o.to;
                }
            }

            if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
                o.min_interval = 0;
            }

            if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
                o.max_interval = 0;
            }

            if (o.min_interval && o.min_interval > o.max - o.min) {
                o.min_interval = o.max - o.min;
            }

            if (o.max_interval && o.max_interval > o.max - o.min) {
                o.max_interval = o.max - o.min;
            }
        },

        decorate: function decorate(num, original) {
            var decorated = "",
                o = this.options;

            if (o.prefix) {
                decorated += o.prefix;
            }

            decorated += num;

            if (o.max_postfix) {
                if (o.values.length && num === o.p_values[o.max]) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                } else if (original === o.max) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                }
            }

            if (o.postfix) {
                decorated += o.postfix;
            }

            return decorated;
        },

        updateFrom: function updateFrom() {
            this.result.from = this.options.from;
            this.result.from_percent = this.calcPercent(this.result.from);
            if (this.options.values) {
                this.result.from_value = this.options.values[this.result.from];
            }
        },

        updateTo: function updateTo() {
            this.result.to = this.options.to;
            this.result.to_percent = this.calcPercent(this.result.to);
            if (this.options.values) {
                this.result.to_value = this.options.values[this.result.to];
            }
        },

        updateResult: function updateResult() {
            this.result.min = this.options.min;
            this.result.max = this.options.max;
            this.updateFrom();
            this.updateTo();
        },

        // =============================================================================================================
        // Grid

        appendGrid: function appendGrid() {
            if (!this.options.grid) {
                return;
            }

            var o = this.options,
                i,
                z,
                total = o.max - o.min,
                big_num = o.grid_num,
                big_p = 0,
                big_w = 0,
                small_max = 4,
                local_small_max,
                small_p,
                small_w = 0,
                result,
                html = '';

            this.calcGridMargin();

            if (o.grid_snap) {
                big_num = total / o.step;
                big_p = this.toFixed(o.step / (total / 100));
            } else {
                big_p = this.toFixed(100 / big_num);
            }

            if (big_num > 4) {
                small_max = 3;
            }
            if (big_num > 7) {
                small_max = 2;
            }
            if (big_num > 14) {
                small_max = 1;
            }
            if (big_num > 28) {
                small_max = 0;
            }

            for (i = 0; i < big_num + 1; i++) {
                local_small_max = small_max;

                big_w = this.toFixed(big_p * i);

                if (big_w > 100) {
                    big_w = 100;

                    local_small_max -= 2;
                    if (local_small_max < 0) {
                        local_small_max = 0;
                    }
                }
                this.coords.big[i] = big_w;

                small_p = (big_w - big_p * (i - 1)) / (local_small_max + 1);

                for (z = 1; z <= local_small_max; z++) {
                    if (big_w === 0) {
                        break;
                    }

                    small_w = this.toFixed(big_w - small_p * z);

                    html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
                }

                html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

                result = this.calcReal(big_w);
                if (o.values.length) {
                    result = o.p_values[result];
                } else {
                    result = this._prettify(result);
                }

                html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
            }
            this.coords.big_num = Math.ceil(big_num + 1);

            this.$cache.cont.addClass("irs-with-grid");
            this.$cache.grid.html(html);
            this.cacheGridLabels();
        },

        cacheGridLabels: function cacheGridLabels() {
            var $label,
                i,
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                $label = this.$cache.grid.find(".js-grid-text-" + i);
                this.$cache.grid_labels.push($label);
            }

            this.calcGridLabels();
        },

        calcGridLabels: function calcGridLabels() {
            var i,
                label,
                start = [],
                finish = [],
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
                this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
                this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

                start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
                finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
            }

            if (this.options.force_edges) {
                if (start[0] < -this.coords.grid_gap) {
                    start[0] = -this.coords.grid_gap;
                    finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

                    this.coords.big_x[0] = this.coords.grid_gap;
                }

                if (finish[num - 1] > 100 + this.coords.grid_gap) {
                    finish[num - 1] = 100 + this.coords.grid_gap;
                    start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

                    this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
                }
            }

            this.calcGridCollision(2, start, finish);
            this.calcGridCollision(4, start, finish);

            for (i = 0; i < num; i++) {
                label = this.$cache.grid_labels[i][0];
                label.style.marginLeft = -this.coords.big_x[i] + "%";
            }
        },

        // Collisions Calc Beta
        // TODO: Refactor then have plenty of time
        calcGridCollision: function calcGridCollision(step, start, finish) {
            var i,
                next_i,
                label,
                num = this.coords.big_num;

            for (i = 0; i < num; i += step) {
                next_i = i + step / 2;
                if (next_i >= num) {
                    break;
                }

                label = this.$cache.grid_labels[next_i][0];

                if (finish[i] <= start[next_i]) {
                    label.style.visibility = "visible";
                } else {
                    label.style.visibility = "hidden";
                }
            }
        },

        calcGridMargin: function calcGridMargin() {
            if (!this.options.grid_margin) {
                return;
            }

            this.coords.w_rs = this.$cache.rs.outerWidth(false);
            if (!this.coords.w_rs) {
                return;
            }

            if (this.options.type === "single") {
                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
            } else {
                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
            }
            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
            this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1);

            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
        },

        // =============================================================================================================
        // Public methods

        update: function update(options) {
            if (!this.input) {
                return;
            }

            this.is_update = true;

            this.options.from = this.result.from;
            this.options.to = this.result.to;

            this.options = $.extend(this.options, options);
            this.validate();
            this.updateResult(options);

            this.toggleInput();
            this.remove();
            this.init(true);
        },

        reset: function reset() {
            if (!this.input) {
                return;
            }

            this.updateResult();
            this.update();
        },

        destroy: function destroy() {
            if (!this.input) {
                return;
            }

            this.toggleInput();
            this.$cache.input.prop("readonly", false);
            $.data(this.input, "ionRangeSlider", null);

            this.remove();
            this.input = null;
            this.options = null;
        }
    };

    $.fn.ionRangeSlider = function (options) {
        return this.each(function () {
            if (!$.data(this, "ionRangeSlider")) {
                $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
            }
        });
    };

    // =================================================================================================================
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

    // MIT license

    (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

        if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    })();
})(jQuery, document, window, navigator);

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.4-45
*/
!function (a) {
    function b(c, d) {
        return this instanceof b ? (a.isPlainObject(c) ? d = c : (d = d || {}, d.alias = c), this.el = void 0, this.opts = a.extend(!0, {}, this.defaults, d), this.noMasksCache = d && void 0 !== d.definitions, this.userOptions = d || {}, this.events = {}, void e(this.opts.alias, d, this.opts)) : new b(c, d);
    }function c(a) {
        var b = document.createElement("input"),
            c = "on" + a,
            d = c in b;return d || (b.setAttribute(c, "return;"), d = "function" == typeof b[c]), b = null, d;
    }function d(b, c) {
        var d = b.getAttribute("type"),
            e = "INPUT" === b.tagName && a.inArray(d, c.supportsInputType) !== -1 || b.isContentEditable || "TEXTAREA" === b.tagName;if (!e && "INPUT" === b.tagName) {
            var f = document.createElement("input");f.setAttribute("type", d), e = "text" === f.type, f = null;
        }return e;
    }function e(b, c, d) {
        var f = d.aliases[b];return f ? (f.alias && e(f.alias, void 0, d), a.extend(!0, d, f), a.extend(!0, d, c), !0) : (null === d.mask && (d.mask = b), !1);
    }function f(b, c, d) {
        function f(a, c) {
            c = void 0 !== c ? c : b.getAttribute("data-inputmask-" + a), null !== c && ("string" == typeof c && (0 === a.indexOf("on") ? c = window[c] : "false" === c ? c = !1 : "true" === c && (c = !0)), d[a] = c);
        }var g,
            h,
            i,
            j,
            k = b.getAttribute("data-inputmask");if (k && "" !== k && (k = k.replace(new RegExp("'", "g"), '"'), h = JSON.parse("{" + k + "}")), h) {
            i = void 0;for (j in h) {
                if ("alias" === j.toLowerCase()) {
                    i = h[j];break;
                }
            }
        }f("alias", i), d.alias && e(d.alias, d, c);for (g in c) {
            if (h) {
                i = void 0;for (j in h) {
                    if (j.toLowerCase() === g.toLowerCase()) {
                        i = h[j];break;
                    }
                }
            }f(g, i);
        }return a.extend(!0, c, d), c;
    }function g(c, d) {
        function e(b) {
            function d(a, b, c, d) {
                this.matches = [], this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = { min: 1, max: 1 };
            }function e(b, d, e) {
                var f = c.definitions[d];e = void 0 !== e ? e : b.matches.length;var g = b.matches[e - 1];if (f && !r) {
                    f.placeholder = a.isFunction(f.placeholder) ? f.placeholder(c) : f.placeholder;for (var h = f.prevalidator, i = h ? h.length : 0, j = 1; j < f.cardinality; j++) {
                        var k = i >= j ? h[j - 1] : [],
                            l = k.validator,
                            m = k.cardinality;b.matches.splice(e++, 0, { fn: l ? "string" == typeof l ? new RegExp(l) : new function () {
                                this.test = l;
                            }() : new RegExp("."), cardinality: m ? m : 1, optionality: b.isOptional, newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d), casing: f.casing, def: f.definitionSymbol || d, placeholder: f.placeholder, mask: d }), g = b.matches[e - 1];
                    }b.matches.splice(e++, 0, { fn: f.validator ? "string" == typeof f.validator ? new RegExp(f.validator) : new function () {
                            this.test = f.validator;
                        }() : new RegExp("."), cardinality: f.cardinality, optionality: b.isOptional, newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d), casing: f.casing, def: f.definitionSymbol || d, placeholder: f.placeholder, mask: d });
                } else b.matches.splice(e++, 0, { fn: null, cardinality: 0, optionality: b.isOptional, newBlockMarker: void 0 === g || g.def !== d, casing: null, def: c.staticDefinitionSymbol || d, placeholder: void 0 !== c.staticDefinitionSymbol ? d : void 0, mask: d }), r = !1;
            }function f(a, b) {
                a.isGroup && (a.isGroup = !1, e(a, c.groupmarker.start, 0), b !== !0 && e(a, c.groupmarker.end));
            }function g(a, b, c, d) {
                b.matches.length > 0 && (void 0 === d || d) && (c = b.matches[b.matches.length - 1], f(c)), e(b, a);
            }function h() {
                if (t.length > 0) {
                    if (m = t[t.length - 1], g(k, m, o, !m.isAlternator), m.isAlternator) {
                        n = t.pop();for (var a = 0; a < n.matches.length; a++) {
                            n.matches[a].isGroup = !1;
                        }t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n);
                    }
                } else g(k, s, o);
            }function i(a) {
                function b(a) {
                    return a === c.optionalmarker.start ? a = c.optionalmarker.end : a === c.optionalmarker.end ? a = c.optionalmarker.start : a === c.groupmarker.start ? a = c.groupmarker.end : a === c.groupmarker.end && (a = c.groupmarker.start), a;
                }a.matches = a.matches.reverse();for (var d in a.matches) {
                    var e = parseInt(d);if (a.matches[d].isQuantifier && a.matches[e + 1] && a.matches[e + 1].isGroup) {
                        var f = a.matches[d];a.matches.splice(d, 1), a.matches.splice(e + 1, 0, f);
                    }void 0 !== a.matches[d].matches ? a.matches[d] = i(a.matches[d]) : a.matches[d] = b(a.matches[d]);
                }return a;
            }for (var j, k, l, m, n, o, p, q = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, r = !1, s = new d(), t = [], u = []; j = q.exec(b);) {
                if (k = j[0], r) h();else switch (k.charAt(0)) {case c.escapeChar:
                        r = !0;break;case c.optionalmarker.end:case c.groupmarker.end:
                        if (l = t.pop(), void 0 !== l) {
                            if (t.length > 0) {
                                if (m = t[t.length - 1], m.matches.push(l), m.isAlternator) {
                                    n = t.pop();for (var v = 0; v < n.matches.length; v++) {
                                        n.matches[v].isGroup = !1;
                                    }t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n);
                                }
                            } else s.matches.push(l);
                        } else h();break;case c.optionalmarker.start:
                        t.push(new d(!1, !0));break;case c.groupmarker.start:
                        t.push(new d(!0));break;case c.quantifiermarker.start:
                        var w = new d(!1, !1, !0);k = k.replace(/[{}]/g, "");var x = k.split(","),
                            y = isNaN(x[0]) ? x[0] : parseInt(x[0]),
                            z = 1 === x.length ? y : isNaN(x[1]) ? x[1] : parseInt(x[1]);if ("*" !== z && "+" !== z || (y = "*" === z ? 0 : 1), w.quantifier = { min: y, max: z }, t.length > 0) {
                            var A = t[t.length - 1].matches;j = A.pop(), j.isGroup || (p = new d(!0), p.matches.push(j), j = p), A.push(j), A.push(w);
                        } else j = s.matches.pop(), j.isGroup || (p = new d(!0), p.matches.push(j), j = p), s.matches.push(j), s.matches.push(w);break;case c.alternatormarker:
                        t.length > 0 ? (m = t[t.length - 1], o = m.matches.pop()) : o = s.matches.pop(), o.isAlternator ? t.push(o) : (n = new d(!1, !1, !1, !0), n.matches.push(o), t.push(n));break;default:
                        h();}
            }for (; t.length > 0;) {
                l = t.pop(), f(l, !0), s.matches.push(l);
            }return s.matches.length > 0 && (o = s.matches[s.matches.length - 1], f(o), u.push(s)), c.numericInput && i(u[0]), u;
        }function f(f, g) {
            if (null !== f && "" !== f) {
                if (1 === f.length && c.greedy === !1 && 0 !== c.repeat && (c.placeholder = ""), c.repeat > 0 || "*" === c.repeat || "+" === c.repeat) {
                    var h = "*" === c.repeat ? 0 : "+" === c.repeat ? 1 : c.repeat;f = c.groupmarker.start + f + c.groupmarker.end + c.quantifiermarker.start + h + "," + c.repeat + c.quantifiermarker.end;
                }var i;return void 0 === b.prototype.masksCache[f] || d === !0 ? (i = { mask: f, maskToken: e(f), validPositions: {}, _buffer: void 0, buffer: void 0, tests: {}, metadata: g, maskLength: void 0 }, d !== !0 && (b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f] = i, i = a.extend(!0, {}, b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f]))) : i = a.extend(!0, {}, b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f]), i;
            }
        }function g(a) {
            return a = a.toString();
        }var h;if (a.isFunction(c.mask) && (c.mask = c.mask(c)), a.isArray(c.mask)) {
            if (c.mask.length > 1) {
                c.keepStatic = null === c.keepStatic || c.keepStatic;var i = "(";return a.each(c.numericInput ? c.mask.reverse() : c.mask, function (b, c) {
                    i.length > 1 && (i += ")|("), i += g(void 0 === c.mask || a.isFunction(c.mask) ? c : c.mask);
                }), i += ")", f(i, c.mask);
            }c.mask = c.mask.pop();
        }return c.mask && (h = void 0 === c.mask.mask || a.isFunction(c.mask.mask) ? f(g(c.mask), c.mask) : f(g(c.mask.mask), c.mask)), h;
    }function h(e, f, g) {
        function i(a, b, c) {
            b = b || 0;var d,
                e,
                f,
                h = [],
                i = 0,
                j = p();ja = void 0 !== ha ? ha.maxLength : void 0, ja === -1 && (ja = void 0);do {
                a === !0 && n().validPositions[i] ? (f = n().validPositions[i], e = f.match, d = f.locator.slice(), h.push(c === !0 ? f.input : I(i, e))) : (f = s(i, d, i - 1), e = f.match, d = f.locator.slice(), (g.jitMasking === !1 || i < j || Number.isFinite(g.jitMasking) && g.jitMasking > i) && h.push(I(i, e))), i++;
            } while ((void 0 === ja || i < ja) && (null !== e.fn || "" !== e.def) || b > i);return "" === h[h.length - 1] && h.pop(), n().maskLength = i + 1, h;
        }function n() {
            return f;
        }function o(a) {
            var b = n();b.buffer = void 0, a !== !0 && (b._buffer = void 0, b.validPositions = {}, b.p = 0);
        }function p(a, b, c) {
            var d = -1,
                e = -1,
                f = c || n().validPositions;void 0 === a && (a = -1);for (var g in f) {
                var h = parseInt(g);f[h] && (b || null !== f[h].match.fn) && (h <= a && (d = h), h >= a && (e = h));
            }return d !== -1 && a - d > 1 || e < a ? d : e;
        }function q(b, c, d, e) {
            function f(a) {
                var b = n().validPositions[a];if (void 0 !== b && null === b.match.fn) {
                    var c = n().validPositions[a - 1],
                        d = n().validPositions[a + 1];return void 0 !== c && void 0 !== d;
                }return !1;
            }var h,
                i = b,
                j = a.extend(!0, {}, n().validPositions),
                k = !1;for (n().p = b, h = c - 1; h >= i; h--) {
                void 0 !== n().validPositions[h] && (d === !0 || !f(h) && g.canClearPosition(n(), h, p(), e, g) !== !1) && delete n().validPositions[h];
            }for (o(!0), h = i + 1; h <= p();) {
                for (; void 0 !== n().validPositions[i];) {
                    i++;
                }var l = n().validPositions[i];if (h < i && (h = i + 1), void 0 === n().validPositions[h] && D(h) || void 0 !== l) h++;else {
                    var m = s(h);k === !1 && j[i] && j[i].match.def === m.match.def ? (n().validPositions[i] = a.extend(!0, {}, j[i]), n().validPositions[i].input = m.input, delete n().validPositions[h], h++) : u(i, m.match.def) ? C(i, m.input || I(h), !0) !== !1 && (delete n().validPositions[h], h++, k = !0) : D(h) || (h++, i--), i++;
                }
            }o(!0);
        }function r(a, b) {
            for (var c, d = a, e = p(), f = n().validPositions[e] || w(0)[0], h = void 0 !== f.alternation ? f.locator[f.alternation].toString().split(",") : [], i = 0; i < d.length && (c = d[i], !(c.match && (g.greedy && c.match.optionalQuantifier !== !0 || (c.match.optionality === !1 || c.match.newBlockMarker === !1) && c.match.optionalQuantifier !== !0) && (void 0 === f.alternation || f.alternation !== c.alternation || void 0 !== c.locator[f.alternation] && B(c.locator[f.alternation].toString().split(","), h))) || b === !0 && (null !== c.match.fn || /[0-9a-bA-Z]/.test(c.match.def))); i++) {}return c;
        }function s(a, b, c) {
            return n().validPositions[a] || r(w(a, b ? b.slice() : b, c));
        }function t(a) {
            return n().validPositions[a] ? n().validPositions[a] : w(a)[0];
        }function u(a, b) {
            for (var c = !1, d = w(a), e = 0; e < d.length; e++) {
                if (d[e].match && d[e].match.def === b) {
                    c = !0;break;
                }
            }return c;
        }function v(b, c) {
            var d, e;return (n().tests[b] || n().validPositions[b]) && a.each(n().tests[b] || [n().validPositions[b]], function (a, b) {
                var f = b.alternation ? b.locator[b.alternation].toString().indexOf(c) : -1;(void 0 === e || f < e) && f !== -1 && (d = b, e = f);
            }), d;
        }function w(b, c, d) {
            function e(c, d, f, h) {
                function j(f, h, l) {
                    function q(b, c) {
                        var d = 0 === a.inArray(b, c.matches);return d || a.each(c.matches, function (a, e) {
                            if (e.isQuantifier === !0 && (d = q(b, c.matches[a - 1]))) return !1;
                        }), d;
                    }function r(a, b) {
                        var c = v(a, b);return c ? c.locator.slice(c.alternation + 1) : void 0;
                    }function s(a, c) {
                        return null === a.match.fn && null !== c.match.fn && c.match.fn.test(a.match.def, n(), b, !1, g, !1);
                    }if (k > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + n().mask;if (k === b && void 0 === f.matches) return m.push({ match: f, locator: h.reverse(), cd: p }), !0;if (void 0 !== f.matches) {
                        if (f.isGroup && l !== f) {
                            if (f = j(c.matches[a.inArray(f, c.matches) + 1], h)) return !0;
                        } else if (f.isOptional) {
                            var t = f;if (f = e(f, d, h, l)) {
                                if (i = m[m.length - 1].match, !q(i, t)) return !0;o = !0, k = b;
                            }
                        } else if (f.isAlternator) {
                            var u,
                                w = f,
                                x = [],
                                y = m.slice(),
                                z = h.length,
                                A = d.length > 0 ? d.shift() : -1;if (A === -1 || "string" == typeof A) {
                                var B,
                                    C = k,
                                    D = d.slice(),
                                    E = [];if ("string" == typeof A) E = A.split(",");else for (B = 0; B < w.matches.length; B++) {
                                    E.push(B);
                                }for (var F = 0; F < E.length; F++) {
                                    if (B = parseInt(E[F]), m = [], d = r(k, B) || D.slice(), f = j(w.matches[B] || c.matches[B], [B].concat(h), l) || f, f !== !0 && void 0 !== f && E[E.length - 1] < w.matches.length) {
                                        var G = a.inArray(f, c.matches) + 1;c.matches.length > G && (f = j(c.matches[G], [G].concat(h.slice(1, h.length)), l), f && (E.push(G.toString()), a.each(m, function (a, b) {
                                            b.alternation = h.length - 1;
                                        })));
                                    }u = m.slice(), k = C, m = [];for (var H = 0; H < u.length; H++) {
                                        var I = u[H],
                                            J = !1;I.alternation = I.alternation || z;for (var K = 0; K < x.length; K++) {
                                            var L = x[K];if (("string" != typeof A || a.inArray(I.locator[I.alternation].toString(), E) !== -1) && (I.match.def === L.match.def || s(I, L))) {
                                                J = I.match.mask === L.match.mask, L.locator[I.alternation].toString().indexOf(I.locator[I.alternation]) === -1 && (L.locator[I.alternation] = L.locator[I.alternation] + "," + I.locator[I.alternation], L.alternation = I.alternation, null == I.match.fn && (L.na = L.na || I.locator[I.alternation].toString(), L.na.indexOf(I.locator[I.alternation]) === -1 && (L.na = L.na + "," + I.locator[I.alternation])));break;
                                            }
                                        }J || x.push(I);
                                    }
                                }"string" == typeof A && (x = a.map(x, function (b, c) {
                                    if (isFinite(c)) {
                                        var d,
                                            e = b.alternation,
                                            f = b.locator[e].toString().split(",");b.locator[e] = void 0, b.alternation = void 0;for (var g = 0; g < f.length; g++) {
                                            d = a.inArray(f[g], E) !== -1, d && (void 0 !== b.locator[e] ? (b.locator[e] += ",", b.locator[e] += f[g]) : b.locator[e] = parseInt(f[g]), b.alternation = e);
                                        }if (void 0 !== b.locator[e]) return b;
                                    }
                                })), m = y.concat(x), k = b, o = m.length > 0, d = D.slice();
                            } else f = j(w.matches[A] || c.matches[A], [A].concat(h), l);if (f) return !0;
                        } else if (f.isQuantifier && l !== c.matches[a.inArray(f, c.matches) - 1]) for (var M = f, N = d.length > 0 ? d.shift() : 0; N < (isNaN(M.quantifier.max) ? N + 1 : M.quantifier.max) && k <= b; N++) {
                            var O = c.matches[a.inArray(M, c.matches) - 1];if (f = j(O, [N].concat(h), O)) {
                                if (i = m[m.length - 1].match, i.optionalQuantifier = N > M.quantifier.min - 1, q(i, O)) {
                                    if (N > M.quantifier.min - 1) {
                                        o = !0, k = b;break;
                                    }return !0;
                                }return !0;
                            }
                        } else if (f = e(f, d, h, l)) return !0;
                    } else k++;
                }for (var l = d.length > 0 ? d.shift() : 0; l < c.matches.length; l++) {
                    if (c.matches[l].isQuantifier !== !0) {
                        var q = j(c.matches[l], [l].concat(f), h);if (q && k === b) return q;if (k > b) break;
                    }
                }
            }function f(b) {
                var c = [];return a.isArray(b) || (b = [b]), b.length > 0 && (void 0 === b[0].alternation ? (c = r(b.slice()).locator.slice(), 0 === c.length && (c = b[0].locator.slice())) : a.each(b, function (a, b) {
                    if ("" !== b.def) if (0 === c.length) c = b.locator.slice();else for (var d = 0; d < c.length; d++) {
                        b.locator[d] && c[d].toString().indexOf(b.locator[d]) === -1 && (c[d] += "," + b.locator[d]);
                    }
                })), c;
            }function h(a) {
                return g.keepStatic && b > 0 && a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0) && a[0].match.optionality !== !0 && a[0].match.optionalQuantifier !== !0 && null === a[0].match.fn && !/[0-9a-bA-Z]/.test(a[0].match.def) ? [r(a)] : a;
            }var i,
                j = n().maskToken,
                k = c ? d : 0,
                l = c ? c.slice() : [0],
                m = [],
                o = !1,
                p = c ? c.join("") : "";if (b > -1) {
                if (void 0 === c) {
                    for (var q, s = b - 1; void 0 === (q = n().validPositions[s] || n().tests[s]) && s > -1;) {
                        s--;
                    }void 0 !== q && s > -1 && (l = f(q), p = l.join(""), k = s);
                }if (n().tests[b] && n().tests[b][0].cd === p) return h(n().tests[b]);for (var t = l.shift(); t < j.length; t++) {
                    var u = e(j[t], l, [t]);if (u && k === b || k > b) break;
                }
            }return (0 === m.length || o) && m.push({ match: { fn: null, cardinality: 0, optionality: !0, casing: null, def: "", placeholder: "" }, locator: [], cd: p }), void 0 !== c && n().tests[b] ? h(a.extend(!0, [], m)) : (n().tests[b] = a.extend(!0, [], m), h(n().tests[b]));
        }function x() {
            return void 0 === n()._buffer && (n()._buffer = i(!1, 1), void 0 === n().buffer && n()._buffer.slice()), n()._buffer;
        }function y(a) {
            return void 0 !== n().buffer && a !== !0 || (n().buffer = i(!0, p(), !0)), n().buffer;
        }function z(a, b, c) {
            var d;if (a === !0) o(), a = 0, b = c.length;else for (d = a; d < b; d++) {
                delete n().validPositions[d];
            }for (d = a; d < b; d++) {
                o(!0), c[d] !== g.skipOptionalPartCharacter && C(d, c[d], !0, !0);
            }
        }function A(a, c, d) {
            switch (g.casing || c.casing) {case "upper":
                    a = a.toUpperCase();break;case "lower":
                    a = a.toLowerCase();break;case "title":
                    var e = n().validPositions[d - 1];a = 0 === d || e && e.input === String.fromCharCode(b.keyCode.SPACE) ? a.toUpperCase() : a.toLowerCase();}return a;
        }function B(b, c) {
            for (var d = g.greedy ? c : c.slice(0, 1), e = !1, f = 0; f < b.length; f++) {
                if (a.inArray(b[f], d) !== -1) {
                    e = !0;break;
                }
            }return e;
        }function C(c, d, e, f, h) {
            function i(a) {
                return ma ? a.begin - a.end > 1 || a.begin - a.end === 1 && g.insertMode : a.end - a.begin > 1 || a.end - a.begin === 1 && g.insertMode;
            }function j(b, d, e) {
                var h = !1;return a.each(w(b), function (j, k) {
                    for (var l = k.match, r = d ? 1 : 0, s = "", t = l.cardinality; t > r; t--) {
                        s += G(b - (t - 1));
                    }if (d && (s += d), y(!0), h = null != l.fn ? l.fn.test(s, n(), b, e, g, i(c)) : (d === l.def || d === g.skipOptionalPartCharacter) && "" !== l.def && { c: l.placeholder || l.def, pos: b }, h !== !1) {
                        var u = void 0 !== h.c ? h.c : d;u = u === g.skipOptionalPartCharacter && null === l.fn ? l.placeholder || l.def : u;var v = b,
                            w = y();if (void 0 !== h.remove && (a.isArray(h.remove) || (h.remove = [h.remove]), a.each(h.remove.sort(function (a, b) {
                            return b - a;
                        }), function (a, b) {
                            q(b, b + 1, !0);
                        })), void 0 !== h.insert && (a.isArray(h.insert) || (h.insert = [h.insert]), a.each(h.insert.sort(function (a, b) {
                            return a - b;
                        }), function (a, b) {
                            C(b.pos, b.c, !0, f);
                        })), h.refreshFromBuffer) {
                            var x = h.refreshFromBuffer;if (e = !0, z(x === !0 ? x : x.start, x.end, w), void 0 === h.pos && void 0 === h.c) return h.pos = p(), !1;if (v = void 0 !== h.pos ? h.pos : b, v !== b) return h = a.extend(h, C(v, u, !0, f)), !1;
                        } else if (h !== !0 && void 0 !== h.pos && h.pos !== b && (v = h.pos, z(b, v, y().slice()), v !== b)) return h = a.extend(h, C(v, u, !0)), !1;return (h === !0 || void 0 !== h.pos || void 0 !== h.c) && (j > 0 && o(!0), m(v, a.extend({}, k, { input: A(u, l, v) }), f, i(c)) || (h = !1), !1);
                    }
                }), h;
            }function k(b, c, d) {
                var e,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    q,
                    r = a.extend(!0, {}, n().validPositions),
                    s = !1,
                    t = p();for (j = n().validPositions[t]; t >= 0; t--) {
                    if (i = n().validPositions[t], i && void 0 !== i.alternation) {
                        if (e = t, h = n().validPositions[e].alternation, j.locator[i.alternation] !== i.locator[i.alternation]) break;j = i;
                    }
                }if (void 0 !== h) {
                    q = parseInt(e);var u = void 0 !== j.locator[j.alternation || h] ? j.locator[j.alternation || h] : m[0];u.length > 0 && (u = u.split(",")[0]);var v = n().validPositions[q],
                        x = n().validPositions[q - 1];a.each(w(q, x ? x.locator : void 0, q - 1), function (e, i) {
                        m = i.locator[h] ? i.locator[h].toString().split(",") : [];for (var j = 0; j < m.length; j++) {
                            var t = [],
                                w = 0,
                                x = 0,
                                y = !1;if (u < m[j] && (void 0 === i.na || a.inArray(m[j], i.na.split(",")) === -1)) {
                                n().validPositions[q] = a.extend(!0, {}, i);var z = n().validPositions[q].locator;for (n().validPositions[q].locator[h] = parseInt(m[j]), null == i.match.fn ? (v.input !== i.match.def && (y = !0, v.generatedInput !== !0 && t.push(v.input)), x++, n().validPositions[q].generatedInput = !/[0-9a-bA-Z]/.test(i.match.def), n().validPositions[q].input = i.match.def) : n().validPositions[q].input = v.input, k = q + 1; k < p(void 0, !0) + 1; k++) {
                                    l = n().validPositions[k], l && l.generatedInput !== !0 && /[0-9a-bA-Z]/.test(l.input) ? t.push(l.input) : k < b && w++, delete n().validPositions[k];
                                }for (y && t[0] === i.match.def && t.shift(), o(!0), s = !0; t.length > 0;) {
                                    var A = t.shift();if (A !== g.skipOptionalPartCharacter && !(s = C(p(void 0, !0) + 1, A, !1, f, !0))) break;
                                }if (s) {
                                    n().validPositions[q].locator = z;var B = p(b) + 1;for (k = q + 1; k < p() + 1; k++) {
                                        l = n().validPositions[k], (void 0 === l || null == l.match.fn) && k < b + (x - w) && x++;
                                    }b += x - w, s = C(b > B ? B : b, c, d, f, !0);
                                }if (s) return !1;o(), n().validPositions = a.extend(!0, {}, r);
                            }
                        }
                    });
                }return s;
            }function l(b, c) {
                var d = n().validPositions[c];if (d) for (var e = d.locator, f = e.length, g = b; g < c; g++) {
                    if (void 0 === n().validPositions[g] && !D(g, !0)) {
                        var h = w(g),
                            i = h[0],
                            j = -1;a.each(h, function (a, b) {
                            for (var c = 0; c < f && void 0 !== b.locator[c] && B(b.locator[c].toString().split(","), e[c].toString().split(",")); c++) {
                                j < c && (j = c, i = b);
                            }
                        }), m(g, a.extend({}, i, { input: i.match.placeholder || i.match.def }), !0);
                    }
                }
            }function m(b, c, d, e) {
                if (e || g.insertMode && void 0 !== n().validPositions[b] && void 0 === d) {
                    var f,
                        h = a.extend(!0, {}, n().validPositions),
                        i = p(void 0, !0);for (f = b; f <= i; f++) {
                        delete n().validPositions[f];
                    }n().validPositions[b] = a.extend(!0, {}, c);var j,
                        k = !0,
                        l = n().validPositions,
                        m = !1,
                        q = n().maskLength;for (f = j = b; f <= i; f++) {
                        var r = h[f];if (void 0 !== r) for (var s = j; s < n().maskLength && (null == r.match.fn && l[f] && (l[f].match.optionalQuantifier === !0 || l[f].match.optionality === !0) || null != r.match.fn);) {
                            if (s++, m === !1 && h[s] && h[s].match.def === r.match.def) n().validPositions[s] = a.extend(!0, {}, h[s]), n().validPositions[s].input = r.input, t(s), j = s, k = !0;else if (u(s, r.match.def)) {
                                var v = C(s, r.input, !0, !0);k = v !== !1, j = v.caret || v.insert ? p() : s, m = !0;
                            } else k = r.generatedInput === !0;if (n().maskLength < q && (n().maskLength = q), k) break;
                        }if (!k) break;
                    }if (!k) return n().validPositions = a.extend(!0, {}, h), o(!0), !1;
                } else n().validPositions[b] = a.extend(!0, {}, c);return o(!0), !0;
            }function t(b) {
                for (var c = b - 1; c > -1 && !n().validPositions[c]; c--) {}var d, e;for (c++; c < b; c++) {
                    void 0 === n().validPositions[c] && (g.jitMasking === !1 || g.jitMasking > c) && (e = w(c, s(c - 1).locator, c - 1).slice(), "" === e[e.length - 1].match.def && e.pop(), d = r(e), d && (d.match.def === g.radixPointDefinitionSymbol || !D(c, !0) || a.inArray(g.radixPoint, y()) < c && d.match.fn && d.match.fn.test(I(c), n(), c, !1, g)) && (x = j(c, d.match.placeholder || (null == d.match.fn ? d.match.def : "" !== I(c) ? I(c) : y()[c]), !0), x !== !1 && (n().validPositions[x.pos || c].generatedInput = !0)));
                }
            }e = e === !0;var v = c;void 0 !== c.begin && (v = ma && !i(c) ? c.end : c.begin);var x = !1,
                F = a.extend(!0, {}, n().validPositions);if (t(v), i(c) && (Q(void 0, b.keyCode.DELETE, c), v = n().p), v < n().maskLength && (x = j(v, d, e), (!e || f === !0) && x === !1)) {
                var H = n().validPositions[v];if (!H || null !== H.match.fn || H.match.def !== d && d !== g.skipOptionalPartCharacter) {
                    if ((g.insertMode || void 0 === n().validPositions[E(v)]) && !D(v, !0)) {
                        var J = w(v).slice();"" === J[J.length - 1].match.def && J.pop();var K = r(J, !0);K && null === K.match.fn && (K = K.match.placeholder || K.match.def, j(v, K, e), n().validPositions[v].generatedInput = !0);for (var L = v + 1, M = E(v); L <= M; L++) {
                            if (x = j(L, d, e), x !== !1) {
                                l(v, void 0 !== x.pos ? x.pos : L), v = L;break;
                            }
                        }
                    }
                } else x = { caret: E(v) };
            }return x === !1 && g.keepStatic && !e && h !== !0 && (x = k(v, d, e)), x === !0 && (x = { pos: v }), a.isFunction(g.postValidation) && x !== !1 && !e && f !== !0 && (x = !!g.postValidation(y(!0), x, g) && x), void 0 === x.pos && (x.pos = v), x === !1 && (o(!0), n().validPositions = a.extend(!0, {}, F)), x;
        }function D(a, b) {
            var c;if (b ? (c = s(a).match, "" === c.def && (c = t(a).match)) : c = t(a).match, null != c.fn) return c.fn;if (b !== !0 && a > -1) {
                var d = w(a);return d.length > 1 + ("" === d[d.length - 1].match.def ? 1 : 0);
            }return !1;
        }function E(a, b) {
            var c = n().maskLength;if (a >= c) return c;for (var d = a; ++d < c && (b === !0 && (t(d).match.newBlockMarker !== !0 || !D(d)) || b !== !0 && !D(d));) {}return d;
        }function F(a, b) {
            var c,
                d = a;if (d <= 0) return 0;for (; --d > 0 && (b === !0 && t(d).match.newBlockMarker !== !0 || b !== !0 && !D(d) && (c = w(d), c.length < 2 || 2 === c.length && "" === c[1].match.def));) {}return d;
        }function G(a) {
            return void 0 === n().validPositions[a] ? I(a) : n().validPositions[a].input;
        }function H(b, c, d, e, f) {
            if (e && a.isFunction(g.onBeforeWrite)) {
                var h = g.onBeforeWrite(e, c, d, g);if (h) {
                    if (h.refreshFromBuffer) {
                        var i = h.refreshFromBuffer;z(i === !0 ? i : i.start, i.end, h.buffer || c), c = y(!0);
                    }void 0 !== d && (d = void 0 !== h.caret ? h.caret : d);
                }
            }b.inputmask._valueSet(c.join("")), void 0 === d || void 0 !== e && "blur" === e.type ? ea(b, c, d) : L(b, d), f === !0 && (oa = !0, a(b).trigger("input"));
        }function I(a, b) {
            if (b = b || t(a).match, void 0 !== b.placeholder) return b.placeholder;if (null === b.fn) {
                if (a > -1 && void 0 === n().validPositions[a]) {
                    var c,
                        d = w(a),
                        e = [];if (d.length > 1 + ("" === d[d.length - 1].match.def ? 1 : 0)) for (var f = 0; f < d.length; f++) {
                        if (d[f].match.optionality !== !0 && d[f].match.optionalQuantifier !== !0 && (null === d[f].match.fn || void 0 === c || d[f].match.fn.test(c.match.def, n(), a, !0, g) !== !1) && (e.push(d[f]), null === d[f].match.fn && (c = d[f]), e.length > 1 && /[0-9a-bA-Z]/.test(e[0].match.def))) return g.placeholder.charAt(a % g.placeholder.length);
                    }
                }return b.def;
            }return g.placeholder.charAt(a % g.placeholder.length);
        }function J(c, d, e, f, h, i) {
            function j() {
                var a = !1,
                    b = x().slice(m, E(m)).join("").indexOf(l);if (b !== -1 && !D(m)) {
                    a = !0;for (var c = x().slice(m, m + b), d = 0; d < c.length; d++) {
                        if (" " !== c[d]) {
                            a = !1;break;
                        }
                    }
                }return a;
            }var k = f.slice(),
                l = "",
                m = 0,
                q = void 0;if (o(), n().p = E(-1), !e) if (g.autoUnmask !== !0) {
                var r = x().slice(0, E(-1)).join(""),
                    t = k.join("").match(new RegExp("^" + b.escapeRegex(r), "g"));t && t.length > 0 && (k.splice(0, t.length * r.length), m = E(m));
            } else m = E(m);if (a.each(k, function (b, d) {
                if (void 0 !== d) {
                    var f = new a.Event("keypress");f.which = d.charCodeAt(0), l += d;var h = p(void 0, !0),
                        i = n().validPositions[h],
                        k = s(h + 1, i ? i.locator.slice() : void 0, h);if (!j() || e || g.autoUnmask) {
                        var r = e ? b : null == k.match.fn && k.match.optionality && h + 1 < n().p ? h + 1 : n().p;q = S.call(c, f, !0, !1, e, r), m = r + 1, l = "";
                    } else q = S.call(c, f, !0, !1, !0, h + 1);if (!e && a.isFunction(g.onBeforeWrite) && (q = g.onBeforeWrite(f, y(), q.forwardPosition, g), q && q.refreshFromBuffer)) {
                        var t = q.refreshFromBuffer;z(t === !0 ? t : t.start, t.end, q.buffer), o(!0), q.caret && (n().p = q.caret);
                    }
                }
            }), d) {
                var u = void 0,
                    v = p();document.activeElement === c && (h || q) && (u = L(c).begin, h && q === !1 && (u = E(p(u))), q && i !== !0 && (u < v + 1 || v === -1) && (u = g.numericInput && void 0 === q.caret ? F(q.forwardPosition) : q.forwardPosition)), H(c, y(), u, h || new a.Event("checkval"));
            }
        }function K(b) {
            if (b && void 0 === b.inputmask) return b.value;var c = [],
                d = n().validPositions;for (var e in d) {
                d[e].match && null != d[e].match.fn && c.push(d[e].input);
            }var f = 0 === c.length ? "" : (ma ? c.reverse() : c).join("");if (a.isFunction(g.onUnMask)) {
                var h = (ma ? y().slice().reverse() : y()).join("");f = g.onUnMask(h, f, g) || f;
            }return f;
        }function L(a, b, c, d) {
            function e(a) {
                if (d !== !0 && ma && "number" == typeof a && (!g.greedy || "" !== g.placeholder)) {
                    var b = y().join("").length;a = b - a;
                }return a;
            }var f;if ("number" != typeof b) return a.setSelectionRange ? (b = a.selectionStart, c = a.selectionEnd) : window.getSelection ? (f = window.getSelection().getRangeAt(0), f.commonAncestorContainer.parentNode !== a && f.commonAncestorContainer !== a || (b = f.startOffset, c = f.endOffset)) : document.selection && document.selection.createRange && (f = document.selection.createRange(), b = 0 - f.duplicate().moveStart("character", -a.inputmask._valueGet().length), c = b + f.text.length), { begin: e(b), end: e(c) };b = e(b), c = e(c), c = "number" == typeof c ? c : b;var h = parseInt(((a.ownerDocument.defaultView || window).getComputedStyle ? (a.ownerDocument.defaultView || window).getComputedStyle(a, null) : a.currentStyle).fontSize) * c;if (a.scrollLeft = h > a.scrollWidth ? h : 0, j || g.insertMode !== !1 || b !== c || c++, a.setSelectionRange) a.selectionStart = b, a.selectionEnd = c;else if (window.getSelection) {
                if (f = document.createRange(), void 0 === a.firstChild || null === a.firstChild) {
                    var i = document.createTextNode("");a.appendChild(i);
                }f.setStart(a.firstChild, b < a.inputmask._valueGet().length ? b : a.inputmask._valueGet().length), f.setEnd(a.firstChild, c < a.inputmask._valueGet().length ? c : a.inputmask._valueGet().length), f.collapse(!0);var k = window.getSelection();k.removeAllRanges(), k.addRange(f);
            } else a.createTextRange && (f = a.createTextRange(), f.collapse(!0), f.moveEnd("character", c), f.moveStart("character", b), f.select());ea(a, void 0, { begin: b, end: c });
        }function M(b) {
            var c,
                d,
                e = y(),
                f = e.length,
                g = p(),
                h = {},
                i = n().validPositions[g],
                j = void 0 !== i ? i.locator.slice() : void 0;for (c = g + 1; c < e.length; c++) {
                d = s(c, j, c - 1), j = d.locator.slice(), h[c] = a.extend(!0, {}, d);
            }var k = i && void 0 !== i.alternation ? i.locator[i.alternation] : void 0;for (c = f - 1; c > g && (d = h[c], (d.match.optionality || d.match.optionalQuantifier || k && (k !== h[c].locator[i.alternation] && null != d.match.fn || null === d.match.fn && d.locator[i.alternation] && B(d.locator[i.alternation].toString().split(","), k.toString().split(",")) && "" !== w(c)[0].def)) && e[c] === I(c, d.match)); c--) {
                f--;
            }return b ? { l: f, def: h[f] ? h[f].match : void 0 } : f;
        }function N(a) {
            for (var b = M(), c = a.length - 1; c > b && !D(c); c--) {}return a.splice(b, c + 1 - b), a;
        }function O(b) {
            if (a.isFunction(g.isComplete)) return g.isComplete(b, g);if ("*" !== g.repeat) {
                var c = !1,
                    d = M(!0),
                    e = F(d.l);if (void 0 === d.def || d.def.newBlockMarker || d.def.optionality || d.def.optionalQuantifier) {
                    c = !0;for (var f = 0; f <= e; f++) {
                        var h = s(f).match;if (null !== h.fn && void 0 === n().validPositions[f] && h.optionality !== !0 && h.optionalQuantifier !== !0 || null === h.fn && b[f] !== I(f, h)) {
                            c = !1;break;
                        }
                    }
                }return c;
            }
        }function P(b) {
            function c(b) {
                if (a.valHooks && (void 0 === a.valHooks[b] || a.valHooks[b].inputmaskpatch !== !0)) {
                    var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function (a) {
                        return a.value;
                    },
                        d = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function (a, b) {
                        return a.value = b, a;
                    };a.valHooks[b] = { get: function get(a) {
                            if (a.inputmask) {
                                if (a.inputmask.opts.autoUnmask) return a.inputmask.unmaskedvalue();var b = c(a);return p(void 0, void 0, a.inputmask.maskset.validPositions) !== -1 || g.nullable !== !0 ? b : "";
                            }return c(a);
                        }, set: function set(b, c) {
                            var e,
                                f = a(b);return e = d(b, c), b.inputmask && f.trigger("setvalue"), e;
                        }, inputmaskpatch: !0 };
                }
            }function d() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : p() !== -1 || g.nullable !== !0 ? document.activeElement === this && g.clearMaskOnLostFocus ? (ma ? N(y().slice()).reverse() : N(y().slice())).join("") : h.call(this) : "" : h.call(this);
            }function e(b) {
                i.call(this, b), this.inputmask && a(this).trigger("setvalue");
            }function f(b) {
                ra.on(b, "mouseenter", function (b) {
                    var c = a(this),
                        d = this,
                        e = d.inputmask._valueGet();e !== y().join("") && c.trigger("setvalue");
                });
            }var h, i;if (!b.inputmask.__valueGet) {
                if (g.noValuePatching !== !0) {
                    if (Object.getOwnPropertyDescriptor) {
                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == _typeof("test".__proto__) ? function (a) {
                            return a.__proto__;
                        } : function (a) {
                            return a.constructor.prototype;
                        });var j = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), "value") : void 0;j && j.get && j.set ? (h = j.get, i = j.set, Object.defineProperty(b, "value", { get: d, set: e, configurable: !0 })) : "INPUT" !== b.tagName && (h = function h() {
                            return this.textContent;
                        }, i = function i(a) {
                            this.textContent = a;
                        }, Object.defineProperty(b, "value", { get: d, set: e, configurable: !0 }));
                    } else document.__lookupGetter__ && b.__lookupGetter__("value") && (h = b.__lookupGetter__("value"), i = b.__lookupSetter__("value"), b.__defineGetter__("value", d), b.__defineSetter__("value", e));b.inputmask.__valueGet = h, b.inputmask.__valueSet = i;
                }b.inputmask._valueGet = function (a) {
                    return ma && a !== !0 ? h.call(this.el).split("").reverse().join("") : h.call(this.el);
                }, b.inputmask._valueSet = function (a, b) {
                    i.call(this.el, null === a || void 0 === a ? "" : b !== !0 && ma ? a.split("").reverse().join("") : a);
                }, void 0 === h && (h = function h() {
                    return this.value;
                }, i = function i(a) {
                    this.value = a;
                }, c(b.type), f(b));
            }
        }function Q(c, d, e, f) {
            function h() {
                if (g.keepStatic) {
                    for (var b = [], d = p(-1, !0), e = a.extend(!0, {}, n().validPositions), f = n().validPositions[d]; d >= 0; d--) {
                        var h = n().validPositions[d];if (h) {
                            if (h.generatedInput !== !0 && /[0-9a-bA-Z]/.test(h.input) && b.push(h.input), delete n().validPositions[d], void 0 !== h.alternation && h.locator[h.alternation] !== f.locator[h.alternation]) break;f = h;
                        }
                    }if (d > -1) for (n().p = E(p(-1, !0)); b.length > 0;) {
                        var i = new a.Event("keypress");i.which = b.pop().charCodeAt(0), S.call(c, i, !0, !1, !1, n().p);
                    } else n().validPositions = a.extend(!0, {}, e);
                }
            }if ((g.numericInput || ma) && (d === b.keyCode.BACKSPACE ? d = b.keyCode.DELETE : d === b.keyCode.DELETE && (d = b.keyCode.BACKSPACE), ma)) {
                var i = e.end;e.end = e.begin, e.begin = i;
            }d === b.keyCode.BACKSPACE && (e.end - e.begin < 1 || g.insertMode === !1) ? (e.begin = F(e.begin), void 0 === n().validPositions[e.begin] || n().validPositions[e.begin].input !== g.groupSeparator && n().validPositions[e.begin].input !== g.radixPoint || e.begin--) : d === b.keyCode.DELETE && e.begin === e.end && (e.end = D(e.end, !0) ? e.end + 1 : E(e.end) + 1, void 0 === n().validPositions[e.begin] || n().validPositions[e.begin].input !== g.groupSeparator && n().validPositions[e.begin].input !== g.radixPoint || e.end++), q(e.begin, e.end, !1, f), f !== !0 && h();var j = p(e.begin, !0);j < e.begin ? n().p = E(j) : f !== !0 && (n().p = e.begin);
        }function R(d) {
            var e = this,
                f = a(e),
                h = d.keyCode,
                i = L(e);if (h === b.keyCode.BACKSPACE || h === b.keyCode.DELETE || l && h === b.keyCode.BACKSPACE_SAFARI || d.ctrlKey && h === b.keyCode.X && !c("cut")) d.preventDefault(), Q(e, h, i), H(e, y(!0), n().p, d, e.inputmask._valueGet() !== y().join("")), e.inputmask._valueGet() === x().join("") ? f.trigger("cleared") : O(y()) === !0 && f.trigger("complete"), g.showTooltip && (e.title = g.tooltip || n().mask);else if (h === b.keyCode.END || h === b.keyCode.PAGE_DOWN) {
                d.preventDefault();var j = E(p());g.insertMode || j !== n().maskLength || d.shiftKey || j--, L(e, d.shiftKey ? i.begin : j, j, !0);
            } else h === b.keyCode.HOME && !d.shiftKey || h === b.keyCode.PAGE_UP ? (d.preventDefault(), L(e, 0, d.shiftKey ? i.begin : 0, !0)) : (g.undoOnEscape && h === b.keyCode.ESCAPE || 90 === h && d.ctrlKey) && d.altKey !== !0 ? (J(e, !0, !1, ga.split("")), f.trigger("click")) : h !== b.keyCode.INSERT || d.shiftKey || d.ctrlKey ? g.tabThrough === !0 && h === b.keyCode.TAB ? (d.shiftKey === !0 ? (null === t(i.begin).match.fn && (i.begin = E(i.begin)), i.end = F(i.begin, !0), i.begin = F(i.end, !0)) : (i.begin = E(i.begin, !0), i.end = E(i.begin, !0), i.end < n().maskLength && i.end--), i.begin < n().maskLength && (d.preventDefault(), L(e, i.begin, i.end))) : d.shiftKey || (g.insertMode === !1 ? h === b.keyCode.RIGHT ? setTimeout(function () {
                var a = L(e);L(e, a.begin);
            }, 0) : h === b.keyCode.LEFT && setTimeout(function () {
                var a = L(e);L(e, ma ? a.begin + 1 : a.begin - 1);
            }, 0) : setTimeout(function () {
                ea(e);
            }, 0)) : (g.insertMode = !g.insertMode, L(e, g.insertMode || i.begin !== n().maskLength ? i.begin : i.begin - 1));g.onKeyDown.call(this, d, y(), L(e).begin, g), pa = a.inArray(h, g.ignorables) !== -1;
        }function S(c, d, e, f, h) {
            var i = this,
                j = a(i),
                k = c.which || c.charCode || c.keyCode;if (!(d === !0 || c.ctrlKey && c.altKey) && (c.ctrlKey || c.metaKey || pa)) return k === b.keyCode.ENTER && ga !== y().join("") && (ga = y().join(""), setTimeout(function () {
                j.trigger("change");
            }, 0)), !0;if (k) {
                46 === k && c.shiftKey === !1 && "," === g.radixPoint && (k = 44);var l,
                    m = d ? { begin: h, end: h } : L(i),
                    p = String.fromCharCode(k);n().writeOutBuffer = !0;var q = C(m, p, f);if (q !== !1 && (o(!0), l = void 0 !== q.caret ? q.caret : d ? q.pos + 1 : E(q.pos), n().p = l), e !== !1) {
                    var r = this;if (setTimeout(function () {
                        g.onKeyValidation.call(r, k, q, g);
                    }, 0), n().writeOutBuffer && q !== !1) {
                        var s = y();H(i, s, g.numericInput && void 0 === q.caret ? F(l) : l, c, d !== !0), d !== !0 && setTimeout(function () {
                            O(s) === !0 && j.trigger("complete");
                        }, 0);
                    }
                }if (g.showTooltip && (i.title = g.tooltip || n().mask), c.preventDefault(), d) return q.forwardPosition = l, q;
            }
        }function T(b) {
            var c,
                d = this,
                e = b.originalEvent || b,
                f = a(d),
                h = d.inputmask._valueGet(!0),
                i = L(d);ma && (c = i.end, i.end = i.begin, i.begin = c);var j = h.substr(0, i.begin),
                k = h.substr(i.end, h.length);if (j === (ma ? x().reverse() : x()).slice(0, i.begin).join("") && (j = ""), k === (ma ? x().reverse() : x()).slice(i.end).join("") && (k = ""), ma && (c = j, j = k, k = c), window.clipboardData && window.clipboardData.getData) h = j + window.clipboardData.getData("Text") + k;else {
                if (!e.clipboardData || !e.clipboardData.getData) return !0;h = j + e.clipboardData.getData("text/plain") + k;
            }var l = h;if (a.isFunction(g.onBeforePaste)) {
                if (l = g.onBeforePaste(h, g), l === !1) return b.preventDefault();l || (l = h);
            }return J(d, !1, !1, ma ? l.split("").reverse() : l.toString().split("")), H(d, y(), E(p()), b, ga !== y().join("")), O(y()) === !0 && f.trigger("complete"), b.preventDefault();
        }function U(c) {
            var d = this,
                e = d.inputmask._valueGet();if (y().join("") !== e) {
                var f = L(d);if (e = e.replace(new RegExp("(" + b.escapeRegex(x().join("")) + ")*"), ""), k) {
                    var g = e.replace(y().join(""), "");if (1 === g.length) {
                        var h = new a.Event("keypress");return h.which = g.charCodeAt(0), S.call(d, h, !0, !0, !1, n().validPositions[f.begin - 1] ? f.begin : f.begin - 1), !1;
                    }
                }if (f.begin > e.length && (L(d, e.length), f = L(d)), y().length - e.length !== 1 || e.charAt(f.begin) === y()[f.begin] || e.charAt(f.begin + 1) === y()[f.begin] || D(f.begin)) {
                    for (var i = p() + 1, j = y().slice(i).join(""); null === e.match(b.escapeRegex(j) + "$");) {
                        j = j.slice(1);
                    }e = e.replace(j, ""), e = e.split(""), J(d, !0, !1, e, c, f.begin < i), O(y()) === !0 && a(d).trigger("complete");
                } else c.keyCode = b.keyCode.BACKSPACE, R.call(d, c);c.preventDefault();
            }
        }function V(b) {
            var c = this,
                d = c.inputmask._valueGet();J(c, !0, !1, (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(d, g) || d : d).split("")), ga = y().join(""), (g.clearMaskOnLostFocus || g.clearIncomplete) && c.inputmask._valueGet() === x().join("") && c.inputmask._valueSet("");
        }function W(a) {
            var b = this,
                c = b.inputmask._valueGet();g.showMaskOnFocus && (!g.showMaskOnHover || g.showMaskOnHover && "" === c) ? b.inputmask._valueGet() !== y().join("") && H(b, y(), E(p())) : qa === !1 && L(b, E(p())), g.positionCaretOnTab === !0 && setTimeout(function () {
                Y.apply(this, [a]);
            }, 0), ga = y().join("");
        }function X(a) {
            var b = this;if (qa = !1, g.clearMaskOnLostFocus && document.activeElement !== b) {
                var c = y().slice(),
                    d = b.inputmask._valueGet();d !== b.getAttribute("placeholder") && "" !== d && (p() === -1 && d === x().join("") ? c = [] : N(c), H(b, c));
            }
        }function Y(b) {
            function c(b) {
                if ("" !== g.radixPoint) {
                    var c = n().validPositions;if (void 0 === c[b] || c[b].input === I(b)) {
                        if (b < E(-1)) return !0;var d = a.inArray(g.radixPoint, y());if (d !== -1) {
                            for (var e in c) {
                                if (d < e && c[e].input !== I(e)) return !1;
                            }return !0;
                        }
                    }
                }return !1;
            }var d = this;setTimeout(function () {
                if (document.activeElement === d) {
                    var b = L(d);if (b.begin === b.end) switch (g.positionCaretOnClick) {case "none":
                            break;case "radixFocus":
                            if (c(b.begin)) {
                                var e = a.inArray(g.radixPoint, y().join(""));L(d, g.numericInput ? E(e) : e);break;
                            }default:
                            var f = b.begin,
                                h = p(f, !0),
                                i = E(h);if (f < i) L(d, D(f) || D(f - 1) ? f : E(f));else {
                                var j = I(i);("" !== j && y()[i] !== j && t(i).match.optionalQuantifier !== !0 || !D(i, !0) && t(i).match.def === j) && (i = E(i)), L(d, i);
                            }}
                }
            }, 0);
        }function Z(a) {
            var b = this;setTimeout(function () {
                L(b, 0, E(p()));
            }, 0);
        }function $(c) {
            var d = this,
                e = a(d),
                f = L(d),
                h = c.originalEvent || c,
                i = window.clipboardData || h.clipboardData,
                j = ma ? y().slice(f.end, f.begin) : y().slice(f.begin, f.end);i.setData("text", ma ? j.reverse().join("") : j.join("")), document.execCommand && document.execCommand("copy"), Q(d, b.keyCode.DELETE, f), H(d, y(), n().p, c, ga !== y().join("")), d.inputmask._valueGet() === x().join("") && e.trigger("cleared"), g.showTooltip && (d.title = g.tooltip || n().mask);
        }function _(b) {
            var c = a(this),
                d = this;if (d.inputmask) {
                var e = d.inputmask._valueGet(),
                    f = y().slice();ga !== f.join("") && setTimeout(function () {
                    c.trigger("change"), ga = f.join("");
                }, 0), "" !== e && (g.clearMaskOnLostFocus && (p() === -1 && e === x().join("") ? f = [] : N(f)), O(f) === !1 && (setTimeout(function () {
                    c.trigger("incomplete");
                }, 0), g.clearIncomplete && (o(), f = g.clearMaskOnLostFocus ? [] : x().slice())), H(d, f, void 0, b));
            }
        }function aa(a) {
            var b = this;qa = !0, document.activeElement !== b && g.showMaskOnHover && b.inputmask._valueGet() !== y().join("") && H(b, y());
        }function ba(a) {
            ga !== y().join("") && ia.trigger("change"), g.clearMaskOnLostFocus && p() === -1 && ha.inputmask._valueGet && ha.inputmask._valueGet() === x().join("") && ha.inputmask._valueSet(""), g.removeMaskOnSubmit && (ha.inputmask._valueSet(ha.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                H(ha, y());
            }, 0));
        }function ca(a) {
            setTimeout(function () {
                ia.trigger("setvalue");
            }, 0);
        }function da(b) {
            function c(a) {
                var c,
                    d = document.createElement("span");for (var e in f) {
                    isNaN(e) && e.indexOf("font") !== -1 && (d.style[e] = f[e]);
                }d.style.textTransform = f.textTransform, d.style.letterSpacing = f.letterSpacing, d.style.position = "absolute", d.style.height = "auto", d.style.width = "auto", d.style.visibility = "hidden", d.style.whiteSpace = "nowrap", document.body.appendChild(d);var g,
                    h = b.inputmask._valueGet(),
                    i = 0;for (c = 0, g = h.length; c <= g; c++) {
                    if (d.innerHTML += h.charAt(c) || "_", d.offsetWidth >= a) {
                        var j = a - i,
                            k = d.offsetWidth - a;d.innerHTML = h.charAt(c), j -= d.offsetWidth / 3, c = j < k ? c - 1 : c;break;
                    }i = d.offsetWidth;
                }return document.body.removeChild(d), c;
            }function d() {
                ka.style.position = "absolute", ka.style.top = e.top + parseInt(f.borderTopWidth) + "px", ka.style.left = e.left + parseInt(f.borderLeftWidth) + "px", ka.style.width = parseInt(b.offsetWidth) - parseInt(f.paddingLeft) - parseInt(f.paddingRight) - parseInt(f.borderLeftWidth) - parseInt(f.borderRightWidth) + "px", ka.style.height = parseInt(b.offsetHeight) - parseInt(f.paddingTop) - parseInt(f.paddingBottom) - parseInt(f.borderTopWidth) - parseInt(f.borderBottomWidth) + "px", ka.style.lineHeight = ka.style.height, ka.style.border = "";
            }var e = a(b).position(),
                f = (b.ownerDocument.defaultView || window).getComputedStyle(b, null);b.parentNode;ka = document.createElement("div"), document.body.appendChild(ka);for (var g in f) {
                isNaN(g) && "cssText" !== g && g.indexOf("webkit") == -1 && (ka.style[g] = f[g]);
            }d(), a(window).on("resize", function (c) {
                e = a(b).position(), f = (b.ownerDocument.defaultView || window).getComputedStyle(b, null), d();
            }), a(ka).on("mouseenter", function (a) {
                aa.call(b, a);
            }), a(ka).on("mouseleave", function (a) {
                X.call(b, a);
            }), a(ka).on("click", function (d) {
                b.focus(), L(b, c(d.clientX)), a(b).trigger("click");
            });
        }function ea(a, b, c) {
            function d() {
                f || null !== i.fn && void 0 !== j.input ? f && null !== i.fn && void 0 !== j.input && (f = !1, e += "</span>") : (f = !0, e += "<span class='im-static''>");
            }if (void 0 !== ka) {
                b = b || y(), void 0 === c ? c = L(a) : void 0 === c.begin && (c = { begin: c, end: c });var e = "",
                    f = !1;if ("" != b) {
                    var h,
                        i,
                        j,
                        k = 0,
                        l = p();do {
                        k === c.begin && document.activeElement === a && (e += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), n().validPositions[k] ? (j = n().validPositions[k], i = j.match, h = j.locator.slice(), d(), e += j.input) : (j = s(k, h, k - 1), i = j.match, h = j.locator.slice(), (g.jitMasking === !1 || k < l || Number.isFinite(g.jitMasking) && g.jitMasking > k) && (d(), e += I(k, i))), k++;
                    } while ((void 0 === ja || k < ja) && (null !== i.fn || "" !== i.def) || l > k);
                }ka.innerHTML = e;
            }
        }function fa(b) {
            if (ha = b, ia = a(ha), g.showTooltip && (ha.title = g.tooltip || n().mask), ("rtl" === ha.dir || g.rightAlign) && (ha.style.textAlign = "right"), ("rtl" === ha.dir || g.numericInput) && (ha.dir = "ltr", ha.removeAttribute("dir"), ha.inputmask.isRTL = !0, ma = !0), g.colorMask === !0 && da(ha), m && (ha.hasOwnProperty("inputmode") && (ha.inputmode = g.inputmode, ha.setAttribute("inputmode", g.inputmode)), "rtfm" === g.androidHack && (g.colorMask !== !0 && da(ha), ha.type = "password")), ra.off(ha), P(ha), d(ha, g) && (ra.on(ha, "submit", ba), ra.on(ha, "reset", ca), ra.on(ha, "mouseenter", aa), ra.on(ha, "blur", _), ra.on(ha, "focus", W), ra.on(ha, "mouseleave", X), ra.on(ha, "click", Y), ra.on(ha, "dblclick", Z), ra.on(ha, "paste", T), ra.on(ha, "dragdrop", T), ra.on(ha, "drop", T), ra.on(ha, "cut", $), ra.on(ha, "complete", g.oncomplete), ra.on(ha, "incomplete", g.onincomplete), ra.on(ha, "cleared", g.oncleared), g.inputEventOnly !== !0 && (ra.on(ha, "keydown", R), ra.on(ha, "keypress", S)), ra.on(ha, "compositionstart", a.noop), ra.on(ha, "compositionupdate", a.noop), ra.on(ha, "compositionend", a.noop), ra.on(ha, "keyup", a.noop), ra.on(ha, "input", U)), ra.on(ha, "setvalue", V), x(), "" !== ha.inputmask._valueGet() || g.clearMaskOnLostFocus === !1 || document.activeElement === ha) {
                var c = a.isFunction(g.onBeforeMask) ? g.onBeforeMask(ha.inputmask._valueGet(), g) || ha.inputmask._valueGet() : ha.inputmask._valueGet();J(ha, !0, !1, c.split(""));var e = y().slice();ga = e.join(""), O(e) === !1 && g.clearIncomplete && o(), g.clearMaskOnLostFocus && document.activeElement !== ha && (p() === -1 ? e = [] : N(e)), H(ha, e), document.activeElement === ha && L(ha, E(p()));
            }
        }var ga,
            ha,
            ia,
            ja,
            ka,
            la,
            ma = !1,
            na = !1,
            oa = !1,
            pa = !1,
            qa = !0,
            ra = { on: function on(c, d, e) {
                var f = function f(c) {
                    if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                        var d = a.data(this, "_inputmask_opts");d ? new b(d).mask(this) : ra.off(this);
                    } else {
                        if ("setvalue" === c.type || !(this.disabled || this.readOnly && !("keydown" === c.type && c.ctrlKey && 67 === c.keyCode || g.tabThrough === !1 && c.keyCode === b.keyCode.TAB))) {
                            switch (c.type) {case "input":
                                    if (oa === !0) return oa = !1, c.preventDefault();break;case "keydown":
                                    na = !1, oa = !1;break;case "keypress":
                                    if (na === !0) return c.preventDefault();na = !0;break;case "click":
                                    if (k || l) {
                                        var f = this,
                                            h = arguments;return setTimeout(function () {
                                            e.apply(f, h);
                                        }, 0), !1;
                                    }}var i = e.apply(this, arguments);return i === !1 && (c.preventDefault(), c.stopPropagation()), i;
                        }c.preventDefault();
                    }
                };c.inputmask.events[d] = c.inputmask.events[d] || [], c.inputmask.events[d].push(f), a.inArray(d, ["submit", "reset"]) !== -1 ? null != c.form && a(c.form).on(d, f) : a(c).on(d, f);
            }, off: function off(b, c) {
                if (b.inputmask && b.inputmask.events) {
                    var d;c ? (d = [], d[c] = b.inputmask.events[c]) : d = b.inputmask.events, a.each(d, function (c, d) {
                        for (; d.length > 0;) {
                            var e = d.pop();a.inArray(c, ["submit", "reset"]) !== -1 ? null != b.form && a(b.form).off(c, e) : a(b).off(c, e);
                        }delete b.inputmask.events[c];
                    });
                }
            } };if (void 0 !== e) switch (e.action) {case "isComplete":
                return ha = e.el, O(y());case "unmaskedvalue":
                return ha = e.el, void 0 !== ha && void 0 !== ha.inputmask ? (f = ha.inputmask.maskset, g = ha.inputmask.opts, ma = ha.inputmask.isRTL) : (la = e.value, g.numericInput && (ma = !0), la = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(la, g) || la : la).split(""), J(void 0, !1, !1, ma ? la.reverse() : la), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, y(), 0, g)), K(ha);case "mask":
                ha = e.el, f = ha.inputmask.maskset, g = ha.inputmask.opts, ma = ha.inputmask.isRTL, fa(ha);break;case "format":
                return g.numericInput && (ma = !0), la = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(e.value, g) || e.value : e.value).split(""), J(void 0, !1, !1, ma ? la.reverse() : la), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, y(), 0, g), e.metadata ? { value: ma ? y().slice().reverse().join("") : y().join(""), metadata: h({ action: "getmetadata" }, f, g) } : ma ? y().slice().reverse().join("") : y().join("");case "isValid":
                g.numericInput && (ma = !0), e.value ? (la = e.value.split(""), J(void 0, !1, !0, ma ? la.reverse() : la)) : e.value = y().join("");for (var sa = y(), ta = M(), ua = sa.length - 1; ua > ta && !D(ua); ua--) {}return sa.splice(ta, ua + 1 - ta), O(sa) && e.value === y().join("");case "getemptymask":
                return x().join("");case "remove":
                ha = e.el, ia = a(ha), f = ha.inputmask.maskset, g = ha.inputmask.opts, ha.inputmask._valueSet(K(ha)), ra.off(ha);var va;Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (va = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ha), "value"), va && ha.inputmask.__valueGet && Object.defineProperty(ha, "value", { get: ha.inputmask.__valueGet, set: ha.inputmask.__valueSet, configurable: !0 })) : document.__lookupGetter__ && ha.__lookupGetter__("value") && ha.inputmask.__valueGet && (ha.__defineGetter__("value", ha.inputmask.__valueGet), ha.__defineSetter__("value", ha.inputmask.__valueSet)), ha.inputmask = void 0;break;case "getmetadata":
                if (a.isArray(f.metadata)) {
                    for (var wa, xa = p(void 0, !0), ya = xa; ya >= 0; ya--) {
                        if (n().validPositions[ya] && void 0 !== n().validPositions[ya].alternation) {
                            wa = n().validPositions[ya].alternation;break;
                        }
                    }return void 0 !== wa ? f.metadata[n().validPositions[ya].locator[wa]] : [];
                }return f.metadata;}
    }b.prototype = { defaults: { placeholder: "_", optionalmarker: { start: "[", end: "]" }, quantifiermarker: { start: "{", end: "}" }, groupmarker: { start: "(", end: ")" }, alternatormarker: "|", escapeChar: "\\", mask: null, oncomplete: a.noop, onincomplete: a.noop, oncleared: a.noop, repeat: 0, greedy: !0, autoUnmask: !1, removeMaskOnSubmit: !1, clearMaskOnLostFocus: !0, insertMode: !0, clearIncomplete: !1, aliases: {}, alias: null, onKeyDown: a.noop, onBeforeMask: null, onBeforePaste: function onBeforePaste(b, c) {
                return a.isFunction(c.onBeforeMask) ? c.onBeforeMask(b, c) : b;
            }, onBeforeWrite: null, onUnMask: null, showMaskOnFocus: !0, showMaskOnHover: !0, onKeyValidation: a.noop, skipOptionalPartCharacter: " ", showTooltip: !1, tooltip: void 0, numericInput: !1, rightAlign: !1, undoOnEscape: !0, radixPoint: "", radixPointDefinitionSymbol: void 0, groupSeparator: "", keepStatic: null, positionCaretOnTab: !0, tabThrough: !1, supportsInputType: ["text", "tel", "password"], definitions: { 9: { validator: "[0-9]", cardinality: 1, definitionSymbol: "*" }, a: { validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]", cardinality: 1, definitionSymbol: "*" }, "*": { validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]", cardinality: 1 } }, ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123], isComplete: null, canClearPosition: a.noop, postValidation: null, staticDefinitionSymbol: void 0, jitMasking: !1, nullable: !0, inputEventOnly: !1, noValuePatching: !1, positionCaretOnClick: "lvp", casing: null, inputmode: "verbatim", colorMask: !1, androidHack: !1 }, masksCache: {}, mask: function mask(c) {
            var d = this;return "string" == typeof c && (c = document.getElementById(c) || document.querySelectorAll(c)), c = c.nodeName ? [c] : c, a.each(c, function (c, e) {
                var i = a.extend(!0, {}, d.opts);f(e, i, a.extend(!0, {}, d.userOptions));var j = g(i, d.noMasksCache);void 0 !== j && (void 0 !== e.inputmask && e.inputmask.remove(), e.inputmask = new b(), e.inputmask.opts = i, e.inputmask.noMasksCache = d.noMasksCache, e.inputmask.userOptions = a.extend(!0, {}, d.userOptions), e.inputmask.el = e, e.inputmask.maskset = j, e.inputmask.isRTL = !1, a.data(e, "_inputmask_opts", i), h({ action: "mask", el: e }));
            }), c && c[0] ? c[0].inputmask || this : this;
        }, option: function option(b, c) {
            return "string" == typeof b ? this.opts[b] : "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? (a.extend(this.userOptions, b), this.el && c !== !0 && this.mask(this.el), this) : void 0;
        }, unmaskedvalue: function unmaskedvalue(a) {
            return h({ action: "unmaskedvalue", el: this.el, value: a }, this.el && this.el.inputmask ? this.el.inputmask.maskset : g(this.opts, this.noMasksCache), this.opts);
        }, remove: function remove() {
            if (this.el) return h({ action: "remove", el: this.el }), this.el.inputmask = void 0, this.el;
        }, getemptymask: function getemptymask() {
            return h({ action: "getemptymask" }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        }, hasMaskedValue: function hasMaskedValue() {
            return !this.opts.autoUnmask;
        }, isComplete: function isComplete() {
            return h({ action: "isComplete", el: this.el }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        }, getmetadata: function getmetadata() {
            return h({ action: "getmetadata" }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        }, isValid: function isValid(a) {
            return h({ action: "isValid", value: a }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        }, format: function format(a, b) {
            return h({ action: "format", value: a, metadata: b }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        } }, b.extendDefaults = function (c) {
        a.extend(!0, b.prototype.defaults, c);
    }, b.extendDefinitions = function (c) {
        a.extend(!0, b.prototype.defaults.definitions, c);
    }, b.extendAliases = function (c) {
        a.extend(!0, b.prototype.defaults.aliases, c);
    }, b.format = function (a, c, d) {
        return b(c).format(a, d);
    }, b.unmask = function (a, c) {
        return b(c).unmaskedvalue(a);
    }, b.isValid = function (a, c) {
        return b(c).isValid(a);
    }, b.remove = function (b) {
        a.each(b, function (a, b) {
            b.inputmask && b.inputmask.remove();
        });
    }, b.escapeRegex = function (a) {
        var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1");
    }, b.keyCode = { ALT: 18, BACKSPACE: 8, BACKSPACE_SAFARI: 127, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91, X: 88 };var i = navigator.userAgent,
        j = /mobile/i.test(i),
        k = /iemobile/i.test(i),
        l = /iphone/i.test(i) && !k,
        m = /android/i.test(i) && !k;return window.Inputmask = b, b;
}(jQuery), function (a, b) {
    return void 0 === a.fn.inputmask && (a.fn.inputmask = function (c, d) {
        var e,
            f = this[0];if (void 0 === d && (d = {}), "string" == typeof c) switch (c) {case "unmaskedvalue":
                return f && f.inputmask ? f.inputmask.unmaskedvalue() : a(f).val();case "remove":
                return this.each(function () {
                    this.inputmask && this.inputmask.remove();
                });case "getemptymask":
                return f && f.inputmask ? f.inputmask.getemptymask() : "";case "hasMaskedValue":
                return !(!f || !f.inputmask) && f.inputmask.hasMaskedValue();case "isComplete":
                return !f || !f.inputmask || f.inputmask.isComplete();case "getmetadata":
                return f && f.inputmask ? f.inputmask.getmetadata() : void 0;case "setvalue":
                a(f).val(d), f && void 0 === f.inputmask && a(f).triggerHandler("setvalue");break;case "option":
                if ("string" != typeof d) return this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(d);
                });if (f && void 0 !== f.inputmask) return f.inputmask.option(d);break;default:
                return d.alias = c, e = new b(d), this.each(function () {
                    e.mask(this);
                });} else {
            if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c))) return e = new b(c), void 0 === c.mask && void 0 === c.alias ? this.each(function () {
                return void 0 !== this.inputmask ? this.inputmask.option(c) : void e.mask(this);
            }) : this.each(function () {
                e.mask(this);
            });if (void 0 === c) return this.each(function () {
                e = new b(d), e.mask(this);
            });
        }
    }), a.fn.inputmask;
}(jQuery, Inputmask), function (a, b) {
    return b.extendDefinitions({ h: { validator: "[01][0-9]|2[0-3]", cardinality: 2, prevalidator: [{ validator: "[0-2]", cardinality: 1 }] }, s: { validator: "[0-5][0-9]", cardinality: 2, prevalidator: [{ validator: "[0-5]", cardinality: 1 }] }, d: { validator: "0[1-9]|[12][0-9]|3[01]", cardinality: 2, prevalidator: [{ validator: "[0-3]", cardinality: 1 }] }, m: { validator: "0[1-9]|1[012]", cardinality: 2, prevalidator: [{ validator: "[01]", cardinality: 1 }] }, y: { validator: "(19|20)\\d{2}", cardinality: 4, prevalidator: [{ validator: "[12]", cardinality: 1 }, { validator: "(19|20)", cardinality: 2 }, { validator: "(19|20)\\d", cardinality: 3 }] } }), b.extendAliases({ "dd/mm/yyyy": { mask: "1/2/y", placeholder: "dd/mm/yyyy", regex: { val1pre: new RegExp("[0-3]"), val1: new RegExp("0[1-9]|[12][0-9]|3[01]"), val2pre: function val2pre(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[1-9]|[12][0-9]|3[01])" + c + "[01])");
                }, val2: function val2(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[1-9]|[12][0-9])" + c + "(0[1-9]|1[012]))|(30" + c + "(0[13-9]|1[012]))|(31" + c + "(0[13578]|1[02]))");
                } }, leapday: "29/02/", separator: "/", yearrange: { minyear: 1900, maxyear: 2099 }, isInYearRange: function isInYearRange(a, b, c) {
                if (isNaN(a)) return !1;var d = parseInt(a.concat(b.toString().slice(a.length))),
                    e = parseInt(a.concat(c.toString().slice(a.length)));return !isNaN(d) && b <= d && d <= c || !isNaN(e) && b <= e && e <= c;
            }, determinebaseyear: function determinebaseyear(a, b, c) {
                var d = new Date().getFullYear();if (a > d) return a;if (b < d) {
                    for (var e = b.toString().slice(0, 2), f = b.toString().slice(2, 4); b < e + c;) {
                        e--;
                    }var g = e + f;return a > g ? a : g;
                }if (a <= d && d <= b) {
                    for (var h = d.toString().slice(0, 2); b < h + c;) {
                        h--;
                    }var i = h + c;return i < a ? a : i;
                }return d;
            }, onKeyDown: function onKeyDown(c, d, e, f) {
                var g = a(this);if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();g.val(h.getDate().toString() + (h.getMonth() + 1).toString() + h.getFullYear().toString()), g.trigger("setvalue");
                }
            }, getFrontValue: function getFrontValue(a, b, c) {
                for (var d = 0, e = 0, f = 0; f < a.length && "2" !== a.charAt(f); f++) {
                    var g = c.definitions[a.charAt(f)];g ? (d += e, e = g.cardinality) : e++;
                }return b.join("").substr(d, e);
            }, definitions: { 1: { validator: function validator(a, b, c, d, e) {
                        var f = e.regex.val1.test(a);return d || f || a.charAt(1) !== e.separator && "-./".indexOf(a.charAt(1)) === -1 || !(f = e.regex.val1.test("0" + a.charAt(0))) ? f : (b.buffer[c - 1] = "0", { refreshFromBuffer: { start: c - 1, end: c }, pos: c, c: a.charAt(0) });
                    }, cardinality: 2, prevalidator: [{ validator: function validator(a, b, c, d, e) {
                            var f = a;isNaN(b.buffer[c + 1]) || (f += b.buffer[c + 1]);var g = 1 === f.length ? e.regex.val1pre.test(f) : e.regex.val1.test(f);if (!d && !g) {
                                if (g = e.regex.val1.test(a + "0")) return b.buffer[c] = a, b.buffer[++c] = "0", { pos: c, c: "0" };if (g = e.regex.val1.test("0" + a)) return b.buffer[c] = "0", c++, { pos: c };
                            }return g;
                        }, cardinality: 1 }] }, 2: { validator: function validator(a, b, c, d, e) {
                        var f = e.getFrontValue(b.mask, b.buffer, e);f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);var g = e.regex.val2(e.separator).test(f + a);if (!d && !g && (a.charAt(1) === e.separator || "-./".indexOf(a.charAt(1)) !== -1) && (g = e.regex.val2(e.separator).test(f + "0" + a.charAt(0)))) return b.buffer[c - 1] = "0", { refreshFromBuffer: { start: c - 1, end: c }, pos: c, c: a.charAt(0) };if (e.mask.indexOf("2") === e.mask.length - 1 && g) {
                            var h = b.buffer.join("").substr(4, 4) + a;if (h !== e.leapday) return !0;var i = parseInt(b.buffer.join("").substr(0, 4), 10);return i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0);
                        }return g;
                    }, cardinality: 2, prevalidator: [{ validator: function validator(a, b, c, d, e) {
                            isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]);var f = e.getFrontValue(b.mask, b.buffer, e);f.indexOf(e.placeholder[0]) !== -1 && (f = "01" + e.separator);var g = 1 === a.length ? e.regex.val2pre(e.separator).test(f + a) : e.regex.val2(e.separator).test(f + a);return d || g || !(g = e.regex.val2(e.separator).test(f + "0" + a)) ? g : (b.buffer[c] = "0", c++, { pos: c });
                        }, cardinality: 1 }] }, y: { validator: function validator(a, b, c, d, e) {
                        if (e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)) {
                            var f = b.buffer.join("").substr(0, 6);if (f !== e.leapday) return !0;var g = parseInt(a, 10);return g % 4 === 0 && (g % 100 !== 0 || g % 400 === 0);
                        }return !1;
                    }, cardinality: 4, prevalidator: [{ validator: function validator(a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 1);if (f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), { pos: c };if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 2), f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), b.buffer[c++] = g.charAt(1), { pos: c };
                            }return f;
                        }, cardinality: 1 }, { validator: function validator(a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2);if (f = e.isInYearRange(a[0] + g[1] + a[1], e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(1), { pos: c };if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2), e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) {
                                    var h = b.buffer.join("").substr(0, 6);if (h !== e.leapday) f = !0;else {
                                        var i = parseInt(a, 10);f = i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0);
                                    }
                                } else f = !1;if (f) return b.buffer[c - 1] = g.charAt(0), b.buffer[c++] = g.charAt(1), b.buffer[c++] = a.charAt(0), { refreshFromBuffer: { start: c - 3, end: c }, pos: c };
                            }return f;
                        }, cardinality: 2 }, { validator: function validator(a, b, c, d, e) {
                            return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                        }, cardinality: 3 }] } }, insertMode: !1, autoUnmask: !1 }, "mm/dd/yyyy": { placeholder: "mm/dd/yyyy", alias: "dd/mm/yyyy", regex: { val2pre: function val2pre(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])");
                }, val2: function val2(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)");
                }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]") }, leapday: "02/29/", onKeyDown: function onKeyDown(c, d, e, f) {
                var g = a(this);if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue");
                }
            } }, "yyyy/mm/dd": { mask: "y/1/2", placeholder: "yyyy/mm/dd", alias: "mm/dd/yyyy", leapday: "/02/29", onKeyDown: function onKeyDown(c, d, e, f) {
                var g = a(this);if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();g.val(h.getFullYear().toString() + (h.getMonth() + 1).toString() + h.getDate().toString()), g.trigger("setvalue");
                }
            } }, "dd.mm.yyyy": { mask: "1.2.y", placeholder: "dd.mm.yyyy", leapday: "29.02.", separator: ".", alias: "dd/mm/yyyy" }, "dd-mm-yyyy": { mask: "1-2-y", placeholder: "dd-mm-yyyy", leapday: "29-02-", separator: "-", alias: "dd/mm/yyyy" }, "mm.dd.yyyy": { mask: "1.2.y", placeholder: "mm.dd.yyyy", leapday: "02.29.", separator: ".", alias: "mm/dd/yyyy" }, "mm-dd-yyyy": { mask: "1-2-y", placeholder: "mm-dd-yyyy", leapday: "02-29-", separator: "-", alias: "mm/dd/yyyy" }, "yyyy.mm.dd": { mask: "y.1.2", placeholder: "yyyy.mm.dd", leapday: ".02.29", separator: ".", alias: "yyyy/mm/dd" }, "yyyy-mm-dd": { mask: "y-1-2", placeholder: "yyyy-mm-dd", leapday: "-02-29", separator: "-", alias: "yyyy/mm/dd" }, datetime: { mask: "1/2/y h:s", placeholder: "dd/mm/yyyy hh:mm", alias: "dd/mm/yyyy", regex: { hrspre: new RegExp("[012]"), hrs24: new RegExp("2[0-4]|1[3-9]"), hrs: new RegExp("[01][0-9]|2[0-4]"), ampm: new RegExp("^[a|p|A|P][m|M]"), mspre: new RegExp("[0-5]"), ms: new RegExp("[0-5][0-9]") }, timeseparator: ":", hourFormat: "24", definitions: { h: { validator: function validator(a, b, c, d, e) {
                        if ("24" === e.hourFormat && 24 === parseInt(a, 10)) return b.buffer[c - 1] = "0", b.buffer[c] = "0", { refreshFromBuffer: { start: c - 1, end: c }, c: "0" };var f = e.regex.hrs.test(a);if (!d && !f && (a.charAt(1) === e.timeseparator || "-.:".indexOf(a.charAt(1)) !== -1) && (f = e.regex.hrs.test("0" + a.charAt(0)))) return b.buffer[c - 1] = "0", b.buffer[c] = a.charAt(0), c++, { refreshFromBuffer: { start: c - 2, end: c }, pos: c, c: e.timeseparator };if (f && "24" !== e.hourFormat && e.regex.hrs24.test(a)) {
                            var g = parseInt(a, 10);return 24 === g ? (b.buffer[c + 5] = "a", b.buffer[c + 6] = "m") : (b.buffer[c + 5] = "p", b.buffer[c + 6] = "m"), g -= 12, g < 10 ? (b.buffer[c] = g.toString(), b.buffer[c - 1] = "0") : (b.buffer[c] = g.toString().charAt(1), b.buffer[c - 1] = g.toString().charAt(0)), { refreshFromBuffer: { start: c - 1, end: c + 6 }, c: b.buffer[c] };
                        }return f;
                    }, cardinality: 2, prevalidator: [{ validator: function validator(a, b, c, d, e) {
                            var f = e.regex.hrspre.test(a);return d || f || !(f = e.regex.hrs.test("0" + a)) ? f : (b.buffer[c] = "0", c++, { pos: c });
                        }, cardinality: 1 }] }, s: { validator: "[0-5][0-9]", cardinality: 2, prevalidator: [{ validator: function validator(a, b, c, d, e) {
                            var f = e.regex.mspre.test(a);return d || f || !(f = e.regex.ms.test("0" + a)) ? f : (b.buffer[c] = "0", c++, { pos: c });
                        }, cardinality: 1 }] }, t: { validator: function validator(a, b, c, d, e) {
                        return e.regex.ampm.test(a + "m");
                    }, casing: "lower", cardinality: 1 } }, insertMode: !1, autoUnmask: !1 }, datetime12: { mask: "1/2/y h:s t\\m", placeholder: "dd/mm/yyyy hh:mm xm", alias: "datetime", hourFormat: "12" }, "mm/dd/yyyy hh:mm xm": { mask: "1/2/y h:s t\\m", placeholder: "mm/dd/yyyy hh:mm xm", alias: "datetime12", regex: { val2pre: function val2pre(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])");
                }, val2: function val2(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)");
                }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]") }, leapday: "02/29/", onKeyDown: function onKeyDown(c, d, e, f) {
                var g = a(this);if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), g.trigger("setvalue");
                }
            } }, "hh:mm t": { mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12" }, "h:s t": { mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12" }, "hh:mm:ss": { mask: "h:s:s", placeholder: "hh:mm:ss", alias: "datetime", autoUnmask: !1 }, "hh:mm": { mask: "h:s", placeholder: "hh:mm", alias: "datetime", autoUnmask: !1 }, date: { alias: "dd/mm/yyyy" }, "mm/yyyy": { mask: "1/y", placeholder: "mm/yyyy", leapday: "donotuse", separator: "/", alias: "mm/dd/yyyy" }, shamsi: { regex: { val2pre: function val2pre(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[1-9]|1[012])" + c + "[0-3])");
                }, val2: function val2(a) {
                    var c = b.escapeRegex.call(this, a);return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + c + "30)|((0[1-6])" + c + "31)");
                }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]") }, yearrange: { minyear: 1300, maxyear: 1499 }, mask: "y/1/2", leapday: "/12/30", placeholder: "yyyy/mm/dd", alias: "mm/dd/yyyy", clearIncomplete: !0 } }), b;
}(jQuery, Inputmask), function (a, b) {
    return b.extendDefinitions({ A: { validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]", cardinality: 1, casing: "upper" }, "&": { validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]", cardinality: 1, casing: "upper" }, "#": { validator: "[0-9A-Fa-f]", cardinality: 1, casing: "upper" } }), b.extendAliases({ url: { definitions: { i: { validator: ".", cardinality: 1 } }, mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}", insertMode: !1, autoUnmask: !1, inputmode: "url" }, ip: { mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]", definitions: { i: { validator: function validator(a, b, c, d, e) {
                        return c - 1 > -1 && "." !== b.buffer[c - 1] ? (a = b.buffer[c - 1] + a, a = c - 2 > -1 && "." !== b.buffer[c - 2] ? b.buffer[c - 2] + a : "0" + a) : a = "00" + a, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a);
                    }, cardinality: 1 } }, onUnMask: function onUnMask(a, b, c) {
                return a;
            }, inputmode: "numeric" }, email: { mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", greedy: !1, onBeforePaste: function onBeforePaste(a, b) {
                return a = a.toLowerCase(), a.replace("mailto:", "");
            }, definitions: { "*": { validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]", cardinality: 1, casing: "lower" }, "-": { validator: "[0-9A-Za-z-]", cardinality: 1, casing: "lower" } }, onUnMask: function onUnMask(a, b, c) {
                return a;
            }, inputmode: "email" }, mac: { mask: "##:##:##:##:##:##" }, vin: { mask: "V{13}9{4}", definitions: { V: { validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", cardinality: 1, casing: "upper" } }, clearIncomplete: !0, autoUnmask: !0 } }), b;
}(jQuery, Inputmask), function (a, b) {
    return b.extendAliases({ numeric: { mask: function mask(a) {
                function c(b) {
                    for (var c = "", d = 0; d < b.length; d++) {
                        c += a.definitions[b.charAt(d)] || a.optionalmarker.start === b.charAt(d) || a.optionalmarker.end === b.charAt(d) || a.quantifiermarker.start === b.charAt(d) || a.quantifiermarker.end === b.charAt(d) || a.groupmarker.start === b.charAt(d) || a.groupmarker.end === b.charAt(d) || a.alternatormarker === b.charAt(d) ? "\\" + b.charAt(d) : b.charAt(d);
                    }return c;
                }if (0 !== a.repeat && isNaN(a.integerDigits) && (a.integerDigits = a.repeat), a.repeat = 0, a.groupSeparator === a.radixPoint && ("." === a.radixPoint ? a.groupSeparator = "," : "," === a.radixPoint ? a.groupSeparator = "." : a.groupSeparator = ""), " " === a.groupSeparator && (a.skipOptionalPartCharacter = void 0), a.autoGroup = a.autoGroup && "" !== a.groupSeparator, a.autoGroup && ("string" == typeof a.groupSize && isFinite(a.groupSize) && (a.groupSize = parseInt(a.groupSize)), isFinite(a.integerDigits))) {
                    var d = Math.floor(a.integerDigits / a.groupSize),
                        e = a.integerDigits % a.groupSize;a.integerDigits = parseInt(a.integerDigits) + (0 === e ? d - 1 : d), a.integerDigits < 1 && (a.integerDigits = "*");
                }a.placeholder.length > 1 && (a.placeholder = a.placeholder.charAt(0)), "radixFocus" === a.positionCaretOnClick && "" === a.placeholder && a.integerOptional === !1 && (a.positionCaretOnClick = "lvp"), a.definitions[";"] = a.definitions["~"], a.definitions[";"].definitionSymbol = "~", a.numericInput === !0 && (a.positionCaretOnClick = "radixFocus" === a.positionCaretOnClick ? "lvp" : a.positionCaretOnClick, a.digitsOptional = !1, isNaN(a.digits) && (a.digits = 2), a.decimalProtect = !1);var f = "[+]";if (f += c(a.prefix), f += a.integerOptional === !0 ? "~{1," + a.integerDigits + "}" : "~{" + a.integerDigits + "}", void 0 !== a.digits) {
                    a.decimalProtect && (a.radixPointDefinitionSymbol = ":");var g = a.digits.toString().split(",");isFinite(g[0] && g[1] && isFinite(g[1])) ? f += (a.decimalProtect ? ":" : a.radixPoint) + ";{" + a.digits + "}" : (isNaN(a.digits) || parseInt(a.digits) > 0) && (f += a.digitsOptional ? "[" + (a.decimalProtect ? ":" : a.radixPoint) + ";{1," + a.digits + "}]" : (a.decimalProtect ? ":" : a.radixPoint) + ";{" + a.digits + "}");
                }return f += c(a.suffix), f += "[-]", a.greedy = !1, null !== a.min && (a.min = a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.min = a.min.replace(a.radixPoint, "."))), null !== a.max && (a.max = a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), "," === a.radixPoint && (a.max = a.max.replace(a.radixPoint, "."))), f;
            }, placeholder: "", greedy: !1, digits: "*", digitsOptional: !0, radixPoint: ".", positionCaretOnClick: "radixFocus", groupSize: 3, groupSeparator: "", autoGroup: !1, allowPlus: !0, allowMinus: !0, negationSymbol: { front: "-", back: "" }, integerDigits: "+", integerOptional: !0, prefix: "", suffix: "", rightAlign: !0, decimalProtect: !0, min: null, max: null, step: 1, insertMode: !0, autoUnmask: !1, unmaskAsNumber: !1, inputmode: "numeric", postFormat: function postFormat(c, d, e) {
                e.numericInput === !0 && (c = c.reverse(), isFinite(d) && (d = c.join("").length - d - 1));var f, g;d = d >= c.length ? c.length - 1 : d < 0 ? 0 : d;var h = c[d],
                    i = c.slice();h === e.groupSeparator && (i.splice(d--, 1), h = i[d]);var j = i.join("").match(new RegExp("^" + b.escapeRegex(e.negationSymbol.front)));j = null !== j && 1 === j.length, d > (j ? e.negationSymbol.front.length : 0) + e.prefix.length && d < i.length - e.suffix.length && (i[d] = "!");var k = i.join(""),
                    l = k;if (j && (k = k.replace(new RegExp("^" + b.escapeRegex(e.negationSymbol.front)), ""), k = k.replace(new RegExp(b.escapeRegex(e.negationSymbol.back) + "$"), "")), k = k.replace(new RegExp(b.escapeRegex(e.suffix) + "$"), ""), k = k.replace(new RegExp("^" + b.escapeRegex(e.prefix)), ""), k.length > 0 && e.autoGroup || k.indexOf(e.groupSeparator) !== -1) {
                    var m = b.escapeRegex(e.groupSeparator);k = k.replace(new RegExp(m, "g"), "");var n = k.split(h === e.radixPoint ? "!" : e.radixPoint);if (k = "" === e.radixPoint ? k : n[0], h !== e.negationSymbol.front && (k = k.replace("!", "?")), k.length > e.groupSize) for (var o = new RegExp("([-+]?[\\d?]+)([\\d?]{" + e.groupSize + "})"); o.test(k) && "" !== e.groupSeparator;) {
                        k = k.replace(o, "$1" + e.groupSeparator + "$2"), k = k.replace(e.groupSeparator + e.groupSeparator, e.groupSeparator);
                    }k = k.replace("?", "!"), "" !== e.radixPoint && n.length > 1 && (k += (h === e.radixPoint ? "!" : e.radixPoint) + n[1]);
                }k = e.prefix + k + e.suffix, j && (k = e.negationSymbol.front + k + e.negationSymbol.back);var p = l !== k;if (p) for (c.length = k.length, f = 0, g = k.length; f < g; f++) {
                    c[f] = k.charAt(f);
                }var q = a.inArray("!", k);return q === -1 && (q = d), c[q] = h, q = e.numericInput && isFinite(d) ? c.join("").length - q - 1 : q, e.numericInput && (c = c.reverse(), a.inArray(e.radixPoint, c) < q && c.join("").length - e.suffix.length !== q && (q -= 1)), { pos: q, refreshFromBuffer: p, buffer: c, isNegative: j };
            }, onBeforeWrite: function onBeforeWrite(c, d, e, f) {
                var g;if (c && ("blur" === c.type || "checkval" === c.type || "keydown" === c.type)) {
                    var h = f.numericInput ? d.slice().reverse().join("") : d.join(""),
                        i = h.replace(f.prefix, "");i = i.replace(f.suffix, ""), i = i.replace(new RegExp(b.escapeRegex(f.groupSeparator), "g"), ""), "," === f.radixPoint && (i = i.replace(f.radixPoint, "."));var j = i.match(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"));if (j = null !== j && 1 === j.length, i = i.replace(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"), ""), i = i.replace(new RegExp(b.escapeRegex(f.negationSymbol.back) + "$"), ""), isNaN(f.placeholder) && (i = i.replace(new RegExp(b.escapeRegex(f.placeholder), "g"), "")), i = i === f.negationSymbol.front ? i + "0" : i, "" !== i && isFinite(i)) {
                        var k = parseFloat(i),
                            l = j ? k * -1 : k;if (null !== f.min && isFinite(f.min) && l < parseFloat(f.min) ? (k = Math.abs(f.min), j = f.min < 0, h = void 0) : null !== f.max && isFinite(f.max) && l > parseFloat(f.max) && (k = Math.abs(f.max), j = f.max < 0, h = void 0), i = k.toString().replace(".", f.radixPoint).split(""), isFinite(f.digits)) {
                            var m = a.inArray(f.radixPoint, i),
                                n = a.inArray(f.radixPoint, h);m === -1 && (i.push(f.radixPoint), m = i.length - 1);for (var o = 1; o <= f.digits; o++) {
                                f.digitsOptional || void 0 !== i[m + o] && i[m + o] !== f.placeholder.charAt(0) ? n !== -1 && void 0 !== h[n + o] && (i[m + o] = i[m + o] || h[n + o]) : i[m + o] = "0";
                            }i[i.length - 1] === f.radixPoint && delete i[i.length - 1];
                        }if (k.toString() !== i && k.toString() + "." !== i || j) return i = (f.prefix + i.join("")).split(""), !j || 0 === k && "blur" === c.type || (i.unshift(f.negationSymbol.front), i.push(f.negationSymbol.back)), f.numericInput && (i = i.reverse()), g = f.postFormat(i, f.numericInput ? e : e - 1, f), g.buffer && (g.refreshFromBuffer = g.buffer.join("") !== d.join("")), g;
                    }
                }if (f.autoGroup) return g = f.postFormat(d, f.numericInput ? e : e - 1, f), g.caret = e < (g.isNegative ? f.negationSymbol.front.length : 0) + f.prefix.length || e > g.buffer.length - (g.isNegative ? f.negationSymbol.back.length : 0) ? g.pos : g.pos + 1, g;
            }, regex: { integerPart: function integerPart(a) {
                    return new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?\\d+");
                }, integerNPart: function integerNPart(a) {
                    return new RegExp("[\\d" + b.escapeRegex(a.groupSeparator) + b.escapeRegex(a.placeholder.charAt(0)) + "]+");
                } }, signHandler: function signHandler(a, b, c, d, e) {
                if (!d && e.allowMinus && "-" === a || e.allowPlus && "+" === a) {
                    var f = b.buffer.join("").match(e.regex.integerPart(e));if (f && f[0].length > 0) return b.buffer[f.index] === ("-" === a ? "+" : e.negationSymbol.front) ? "-" === a ? "" !== e.negationSymbol.back ? { pos: 0, c: e.negationSymbol.front, remove: 0, caret: c, insert: { pos: b.buffer.length - 1, c: e.negationSymbol.back } } : { pos: 0, c: e.negationSymbol.front, remove: 0, caret: c } : "" !== e.negationSymbol.back ? { pos: 0, c: "+", remove: [0, b.buffer.length - 1], caret: c } : { pos: 0, c: "+", remove: 0, caret: c } : b.buffer[0] === ("-" === a ? e.negationSymbol.front : "+") ? "-" === a && "" !== e.negationSymbol.back ? { remove: [0, b.buffer.length - 1], caret: c - 1 } : { remove: 0, caret: c - 1 } : "-" === a ? "" !== e.negationSymbol.back ? { pos: 0, c: e.negationSymbol.front, caret: c + 1, insert: { pos: b.buffer.length, c: e.negationSymbol.back } } : { pos: 0, c: e.negationSymbol.front, caret: c + 1 } : { pos: 0, c: a, caret: c + 1 };
                }return !1;
            }, radixHandler: function radixHandler(b, c, d, e, f) {
                if (!e && f.numericInput !== !0 && b === f.radixPoint && void 0 !== f.digits && (isNaN(f.digits) || parseInt(f.digits) > 0)) {
                    var g = a.inArray(f.radixPoint, c.buffer),
                        h = c.buffer.join("").match(f.regex.integerPart(f));if (g !== -1 && c.validPositions[g]) return c.validPositions[g - 1] ? { caret: g + 1 } : { pos: h.index, c: h[0], caret: g + 1 };if (!h || "0" === h[0] && h.index + 1 !== d) return c.buffer[h ? h.index : d] = "0", { pos: (h ? h.index : d) + 1, c: f.radixPoint };
                }return !1;
            }, leadingZeroHandler: function leadingZeroHandler(b, c, d, e, f, g) {
                if (!e) {
                    var h = c.buffer.slice("");if (h.splice(0, f.prefix.length), h.splice(h.length - f.suffix.length, f.suffix.length), f.numericInput === !0) {
                        var h = h.reverse(),
                            i = h[0];if ("0" === i && void 0 === c.validPositions[d - 1]) return { pos: d, remove: h.length - 1 };
                    } else {
                        d -= f.prefix.length;var j = a.inArray(f.radixPoint, h),
                            k = h.slice(0, j !== -1 ? j : void 0).join("").match(f.regex.integerNPart(f));if (k && (j === -1 || d <= j)) {
                            var l = j === -1 ? 0 : parseInt(h.slice(j + 1).join(""));if (0 === k[0].indexOf("" !== f.placeholder ? f.placeholder.charAt(0) : "0") && (k.index + 1 === d || g !== !0 && 0 === l)) return c.buffer.splice(k.index + f.prefix.length, 1), { pos: k.index + f.prefix.length, remove: k.index + f.prefix.length };if ("0" === b && d <= k.index && k[0] !== f.groupSeparator) return !1;
                        }
                    }
                }return !0;
            }, definitions: { "~": { validator: function validator(c, d, e, f, g, h) {
                        var i = g.signHandler(c, d, e, f, g);if (!i && (i = g.radixHandler(c, d, e, f, g), !i && (i = f ? new RegExp("[0-9" + b.escapeRegex(g.groupSeparator) + "]").test(c) : new RegExp("[0-9]").test(c), i === !0 && (i = g.leadingZeroHandler(c, d, e, f, g, h), i === !0)))) {
                            var j = a.inArray(g.radixPoint, d.buffer);i = j !== -1 && (g.digitsOptional === !1 || d.validPositions[e]) && g.numericInput !== !0 && e > j && !f ? { pos: e, remove: e } : { pos: e };
                        }return i;
                    }, cardinality: 1 }, "+": { validator: function validator(a, b, c, d, e) {
                        var f = e.signHandler(a, b, c, d, e);return !f && (d && e.allowMinus && a === e.negationSymbol.front || e.allowMinus && "-" === a || e.allowPlus && "+" === a) && (f = !(!d && "-" === a) || ("" !== e.negationSymbol.back ? { pos: c, c: "-" === a ? e.negationSymbol.front : "+", caret: c + 1, insert: { pos: b.buffer.length, c: e.negationSymbol.back } } : { pos: c, c: "-" === a ? e.negationSymbol.front : "+", caret: c + 1 })), f;
                    }, cardinality: 1, placeholder: "" }, "-": { validator: function validator(a, b, c, d, e) {
                        var f = e.signHandler(a, b, c, d, e);return !f && d && e.allowMinus && a === e.negationSymbol.back && (f = !0), f;
                    }, cardinality: 1, placeholder: "" }, ":": { validator: function validator(a, c, d, e, f) {
                        var g = f.signHandler(a, c, d, e, f);if (!g) {
                            var h = "[" + b.escapeRegex(f.radixPoint) + "]";g = new RegExp(h).test(a), g && c.validPositions[d] && c.validPositions[d].match.placeholder === f.radixPoint && (g = { caret: d + 1 });
                        }return g ? { c: f.radixPoint } : g;
                    }, cardinality: 1, placeholder: function placeholder(a) {
                        return a.radixPoint;
                    } } }, onUnMask: function onUnMask(a, c, d) {
                if ("" === c && d.nullable === !0) return c;var e = a.replace(d.prefix, "");return e = e.replace(d.suffix, ""), e = e.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), d.unmaskAsNumber ? ("" !== d.radixPoint && e.indexOf(d.radixPoint) !== -1 && (e = e.replace(b.escapeRegex.call(this, d.radixPoint), ".")), Number(e)) : e;
            }, isComplete: function isComplete(a, c) {
                var d = a.join(""),
                    e = a.slice();if (c.postFormat(e, 0, c), e.join("") !== d) return !1;var f = d.replace(c.prefix, "");return f = f.replace(c.suffix, ""), f = f.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), ""), "," === c.radixPoint && (f = f.replace(b.escapeRegex(c.radixPoint), ".")), isFinite(f);
            }, onBeforeMask: function onBeforeMask(a, c) {
                if (c.numericInput === !0 && (a = a.split("").reverse().join("")), "" !== c.radixPoint && isFinite(a)) a = a.toString().replace(".", c.radixPoint);else {
                    var d = a.match(/,/g),
                        e = a.match(/\./g);e && d ? e.length > d.length ? (a = a.replace(/\./g, ""), a = a.replace(",", c.radixPoint)) : d.length > e.length ? (a = a.replace(/,/g, ""), a = a.replace(".", c.radixPoint)) : a = a.indexOf(".") < a.indexOf(",") ? a.replace(/\./g, "") : a = a.replace(/,/g, "") : a = a.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), "");
                }if (0 === c.digits && (a.indexOf(".") !== -1 ? a = a.substring(0, a.indexOf(".")) : a.indexOf(",") !== -1 && (a = a.substring(0, a.indexOf(",")))), "" !== c.radixPoint && isFinite(c.digits) && a.indexOf(c.radixPoint) !== -1) {
                    var f = a.split(c.radixPoint),
                        g = f[1].match(new RegExp("\\d*"))[0];if (parseInt(c.digits) < g.toString().length) {
                        var h = Math.pow(10, parseInt(c.digits));a = a.replace(b.escapeRegex(c.radixPoint), "."), a = Math.round(parseFloat(a) * h) / h, a = a.toString().replace(".", c.radixPoint);
                    }
                }return c.numericInput === !0 && (a = a.split("").reverse().join("")), a.toString();
            }, canClearPosition: function canClearPosition(a, b, c, d, e) {
                var f = a.validPositions[b].input,
                    g = f !== e.radixPoint || null !== a.validPositions[b].match.fn && e.decimalProtect === !1 || isFinite(f) || b === c || f === e.groupSeparator || f === e.negationSymbol.front || f === e.negationSymbol.back;return g;
            }, onKeyDown: function onKeyDown(c, d, e, f) {
                var g = a(this);if (c.ctrlKey) switch (c.keyCode) {case b.keyCode.UP:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(f.step)), g.trigger("setvalue");break;case b.keyCode.DOWN:
                        g.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(f.step)), g.trigger("setvalue");}
            } }, currency: { prefix: "$ ", groupSeparator: ",", alias: "numeric", placeholder: "0", autoGroup: !0, digits: 2, digitsOptional: !1, clearMaskOnLostFocus: !1 }, decimal: { alias: "numeric" }, integer: { alias: "numeric", digits: 0, radixPoint: "" }, percentage: { alias: "numeric", digits: 2, radixPoint: ".", placeholder: "0", autoGroup: !1, min: 0, max: 100, suffix: " %", allowPlus: !1, allowMinus: !1 } }), b;
}(jQuery, Inputmask), function (a, b) {
    return b.extendAliases({ abstractphone: { countrycode: "", phoneCodes: [], mask: function mask(a) {
                a.definitions = { "#": a.definitions[9] };var b = a.phoneCodes.sort(function (a, b) {
                    var c = (a.mask || a).replace(/#/g, "9").replace(/[\+\(\)#-]/g, ""),
                        d = (b.mask || b).replace(/#/g, "9").replace(/[\+\(\)#-]/g, ""),
                        e = (a.mask || a).split("#")[0],
                        f = (b.mask || b).split("#")[0];return 0 === f.indexOf(e) ? -1 : 0 === e.indexOf(f) ? 1 : c.localeCompare(d);
                });return b;
            }, keepStatic: !0, onBeforeMask: function onBeforeMask(a, b) {
                var c = a.replace(/^0{1,2}/, "").replace(/[\s]/g, "");return (c.indexOf(b.countrycode) > 1 || c.indexOf(b.countrycode) === -1) && (c = "+" + b.countrycode + c), c;
            }, onUnMask: function onUnMask(a, b, c) {
                return b;
            }, inputmode: "tel" } }), b;
}(jQuery, Inputmask), function (a, b) {
    return b.extendAliases({ Regex: { mask: "r", greedy: !1, repeat: "*", regex: null, regexTokens: null, tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, quantifierFilter: /[0-9]+[^,]/, isComplete: function isComplete(a, b) {
                return new RegExp(b.regex).test(a.join(""));
            }, definitions: { r: { validator: function validator(b, c, d, e, f) {
                        function g(a, b) {
                            this.matches = [], this.isGroup = a || !1, this.isQuantifier = b || !1, this.quantifier = { min: 1, max: 1 }, this.repeaterPart = void 0;
                        }function h() {
                            var a,
                                b,
                                c = new g(),
                                d = [];for (f.regexTokens = []; a = f.tokenizer.exec(f.regex);) {
                                switch (b = a[0], b.charAt(0)) {case "(":
                                        d.push(new g(!0));break;case ")":
                                        k = d.pop(), d.length > 0 ? d[d.length - 1].matches.push(k) : c.matches.push(k);break;case "{":case "+":case "*":
                                        var e = new g(!1, !0);b = b.replace(/[{}]/g, "");var h = b.split(","),
                                            i = isNaN(h[0]) ? h[0] : parseInt(h[0]),
                                            j = 1 === h.length ? i : isNaN(h[1]) ? h[1] : parseInt(h[1]);if (e.quantifier = { min: i, max: j }, d.length > 0) {
                                            var l = d[d.length - 1].matches;a = l.pop(), a.isGroup || (k = new g(!0), k.matches.push(a), a = k), l.push(a), l.push(e);
                                        } else a = c.matches.pop(), a.isGroup || (k = new g(!0), k.matches.push(a), a = k), c.matches.push(a), c.matches.push(e);break;default:
                                        d.length > 0 ? d[d.length - 1].matches.push(b) : c.matches.push(b);}
                            }c.matches.length > 0 && f.regexTokens.push(c);
                        }function i(b, c) {
                            var d = !1;c && (m += "(", o++);for (var e = 0; e < b.matches.length; e++) {
                                var f = b.matches[e];if (f.isGroup === !0) d = i(f, !0);else if (f.isQuantifier === !0) {
                                    var g = a.inArray(f, b.matches),
                                        h = b.matches[g - 1],
                                        k = m;if (isNaN(f.quantifier.max)) {
                                        for (; f.repeaterPart && f.repeaterPart !== m && f.repeaterPart.length > m.length && !(d = i(h, !0));) {}d = d || i(h, !0), d && (f.repeaterPart = m), m = k + f.quantifier.max;
                                    } else {
                                        for (var l = 0, n = f.quantifier.max - 1; l < n && !(d = i(h, !0)); l++) {}m = k + "{" + f.quantifier.min + "," + f.quantifier.max + "}";
                                    }
                                } else if (void 0 !== f.matches) for (var p = 0; p < f.length && !(d = i(f[p], c)); p++) {} else {
                                    var q;if ("[" == f.charAt(0)) {
                                        q = m, q += f;for (var r = 0; r < o; r++) {
                                            q += ")";
                                        }var s = new RegExp("^(" + q + ")$");d = s.test(j);
                                    } else for (var t = 0, u = f.length; t < u; t++) {
                                        if ("\\" !== f.charAt(t)) {
                                            q = m, q += f.substr(0, t + 1), q = q.replace(/\|$/, "");for (var r = 0; r < o; r++) {
                                                q += ")";
                                            }var s = new RegExp("^(" + q + ")$");if (d = s.test(j)) break;
                                        }
                                    }m += f;
                                }if (d) break;
                            }return c && (m += ")", o--), d;
                        }var j,
                            k,
                            l = c.buffer.slice(),
                            m = "",
                            n = !1,
                            o = 0;null === f.regexTokens && h(), l.splice(d, 0, b), j = l.join("");for (var p = 0; p < f.regexTokens.length; p++) {
                            var q = f.regexTokens[p];if (n = i(q, q.isGroup)) break;
                        }return n;
                    }, cardinality: 1 } } } }), b;
}(jQuery, Inputmask);
/*! X-editable - v1.4.6 
* In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery
* http://github.com/vitalets/x-editable
* Copyright (c) 2013 Vitaliy Potapov; Licensed MIT 
* Improved by Keenthemes for Bootstrap 3.0 support */
/**
Form with single input element, two buttons and two states: normal/loading.
Applied as jQuery method to DIV tag (not to form tag!). This is because form can be in loading state when spinner shown.
Editableform is linked with one of input types, e.g. 'text', 'select' etc.

@class editableform
@uses text
@uses textarea
**/
!function (t) {
    "use strict";
    var e = function e(_e2, i) {
        this.options = t.extend({}, t.fn.editableform.defaults, i), this.$div = t(_e2), this.options.scope || (this.options.scope = this);
    };e.prototype = { constructor: e, initInput: function initInput() {
            this.input = this.options.input, this.value = this.input.str2value(this.options.value);
        }, initTemplate: function initTemplate() {
            this.$form = t(t.fn.editableform.template);
        }, initButtons: function initButtons() {
            var e = this.$form.find(".editable-buttons");e.append(t.fn.editableform.buttons), "bottom" === this.options.showbuttons && e.addClass("editable-buttons-bottom");
        }, render: function render() {
            this.$loading = t(t.fn.editableform.loading), this.$div.empty().append(this.$loading), this.initTemplate(), this.options.showbuttons ? this.initButtons() : this.$form.find(".editable-buttons").remove(), this.showLoading(), this.isSaving = !1, this.$div.triggerHandler("rendering"), this.initInput(), this.input.prerender(), this.$form.find("div.editable-input").append(this.input.$tpl), this.$div.append(this.$form), t.when(this.input.render()).then(t.proxy(function () {
                if (this.options.showbuttons || this.input.autosubmit(), this.$form.find(".editable-cancel").click(t.proxy(this.cancel, this)), this.input.error) this.error(this.input.error), this.$form.find(".editable-submit").attr("disabled", !0), this.input.$input.attr("disabled", !0), this.$form.submit(function (t) {
                    t.preventDefault();
                });else {
                    this.error(!1), this.input.$input.removeAttr("disabled"), this.$form.find(".editable-submit").removeAttr("disabled");var e = null === this.value || void 0 === this.value || "" === this.value ? this.options.defaultValue : this.value;this.input.value2input(e), this.$form.submit(t.proxy(this.submit, this));
                }this.$div.triggerHandler("rendered"), this.showForm(), this.input.postrender && this.input.postrender();
            }, this));
        }, cancel: function cancel() {
            this.$div.triggerHandler("cancel");
        }, showLoading: function showLoading() {
            var t, e;this.$form ? (t = this.$form.outerWidth(), e = this.$form.outerHeight(), t && this.$loading.width(t), e && this.$loading.height(e), this.$form.hide()) : (t = this.$loading.parent().width(), t && this.$loading.width(t)), this.$loading.show();
        }, showForm: function showForm(t) {
            this.$loading.hide(), this.$form.show(), t !== !1 && this.input.activate(), this.$div.triggerHandler("show");
        }, error: function error(e) {
            var i,
                n = this.$form.find(".form-group"),
                o = this.$form.find(".editable-error-block");if (e === !1) n.removeClass(t.fn.editableform.errorGroupClass), o.removeClass(t.fn.editableform.errorBlockClass).empty().hide();else {
                if (e) {
                    i = e.split("\n");for (var r = 0; r < i.length; r++) {
                        i[r] = t("<div>").text(i[r]).html();
                    }e = i.join("<br>");
                }n.addClass(t.fn.editableform.errorGroupClass), o.addClass(t.fn.editableform.errorBlockClass).html(e).show();
            }
        }, submit: function submit(e) {
            e.stopPropagation(), e.preventDefault();var i,
                n = this.input.input2value();if (i = this.validate(n)) return this.error(i), this.showForm(), void 0;if (!this.options.savenochange && this.input.value2str(n) == this.input.value2str(this.value)) return this.$div.triggerHandler("nochange"), void 0;var o = this.input.value2submit(n);this.isSaving = !0, t.when(this.save(o)).done(t.proxy(function (t) {
                this.isSaving = !1;var e = "function" == typeof this.options.success ? this.options.success.call(this.options.scope, t, n) : null;return e === !1 ? (this.error(!1), this.showForm(!1), void 0) : "string" == typeof e ? (this.error(e), this.showForm(), void 0) : (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.hasOwnProperty("newValue") && (n = e.newValue), this.error(!1), this.value = n, this.$div.triggerHandler("save", { newValue: n, submitValue: o, response: t }), void 0);
            }, this)).fail(t.proxy(function (t) {
                this.isSaving = !1;var e;e = "function" == typeof this.options.error ? this.options.error.call(this.options.scope, t, n) : "string" == typeof t ? t : t.responseText || t.statusText || "Unknown error!", this.error(e), this.showForm();
            }, this));
        }, save: function save(e) {
            this.options.pk = t.fn.editableutils.tryParseJson(this.options.pk, !0);var i,
                n = "function" == typeof this.options.pk ? this.options.pk.call(this.options.scope) : this.options.pk,
                o = !!("function" == typeof this.options.url || this.options.url && ("always" === this.options.send || "auto" === this.options.send && null !== n && void 0 !== n));return o ? (this.showLoading(), i = { name: this.options.name || "", value: e, pk: n }, "function" == typeof this.options.params ? i = this.options.params.call(this.options.scope, i) : (this.options.params = t.fn.editableutils.tryParseJson(this.options.params, !0), t.extend(i, this.options.params)), "function" == typeof this.options.url ? this.options.url.call(this.options.scope, i) : t.ajax(t.extend({ url: this.options.url, data: i, type: "POST" }, this.options.ajaxOptions))) : void 0;
        }, validate: function validate(t) {
            return void 0 === t && (t = this.value), "function" == typeof this.options.validate ? this.options.validate.call(this.options.scope, t) : void 0;
        }, option: function option(t, e) {
            t in this.options && (this.options[t] = e), "value" === t && this.setValue(e);
        }, setValue: function setValue(t, e) {
            this.value = e ? this.input.str2value(t) : t, this.$form && this.$form.is(":visible") && this.input.value2input(this.value);
        } }, t.fn.editableform = function (i) {
        var n = arguments;return this.each(function () {
            var o = t(this),
                r = o.data("editableform"),
                s = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i;r || o.data("editableform", r = new e(this, s)), "string" == typeof i && r[i].apply(r, Array.prototype.slice.call(n, 1));
        });
    }, t.fn.editableform.Constructor = e, t.fn.editableform.defaults = { type: "text", url: null, params: null, name: null, pk: null, value: null, defaultValue: null, send: "auto", validate: null, success: null, error: null, ajaxOptions: null, showbuttons: !0, scope: null, savenochange: !1 }, t.fn.editableform.template = '<form class="form-inline editableform"><div class="form-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>', t.fn.editableform.loading = '<div class="editableform-loading"></div>', t.fn.editableform.buttons = '<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>', t.fn.editableform.errorGroupClass = "has-error", t.fn.editableform.errorBlockClass = "editable-error";
}(window.jQuery), function (t) {
    "use strict";
    t.fn.editableutils = { inherit: function inherit(t, e) {
            var i = function i() {};i.prototype = e.prototype, t.prototype = new i(), t.prototype.constructor = t, t.superclass = e.prototype;
        }, setCursorPosition: function setCursorPosition(t, e) {
            if (t.setSelectionRange) t.setSelectionRange(e, e);else if (t.createTextRange) {
                var i = t.createTextRange();i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select();
            }
        }, tryParseJson: function tryParseJson(t, e) {
            if ("string" == typeof t && t.length && t.match(/^[\{\[].*[\}\]]$/)) if (e) try {
                t = new Function("return " + t)();
            } catch (i) {} finally {
                return t;
            } else t = new Function("return " + t)();return t;
        }, sliceObj: function sliceObj(e, i, n) {
            var o,
                r,
                s = {};if (!t.isArray(i) || !i.length) return s;for (var a = 0; a < i.length; a++) {
                o = i[a], e.hasOwnProperty(o) && (s[o] = e[o]), n !== !0 && (r = o.toLowerCase(), e.hasOwnProperty(r) && (s[o] = e[r]));
            }return s;
        }, getConfigData: function getConfigData(e) {
            var i = {};return t.each(e.data(), function (t, e) {
                ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e.constructor === Object || e.constructor === Array)) && (i[t] = e);
            }), i;
        }, objectKeys: function objectKeys(t) {
            if (Object.keys) return Object.keys(t);if (t !== Object(t)) throw new TypeError("Object.keys called on a non-object");var e,
                i = [];for (e in t) {
                Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
            }return i;
        }, escape: function escape(e) {
            return t("<div>").text(e).html();
        }, itemsByValue: function itemsByValue(e, i, n) {
            if (!i || null === e) return [];if ("function" != typeof n) {
                var o = n || "value";n = function n(t) {
                    return t[o];
                };
            }var r = t.isArray(e),
                s = [],
                a = this;return t.each(i, function (i, o) {
                if (o.children) s = s.concat(a.itemsByValue(e, o.children, n));else if (r) t.grep(e, function (t) {
                    return t == (o && "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) ? n(o) : o);
                }).length && s.push(o);else {
                    var l = o && "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) ? n(o) : o;e == l && s.push(o);
                }
            }), s;
        }, createInput: function createInput(e) {
            var i,
                n,
                o,
                r = e.type;return "date" === r && ("inline" === e.mode ? t.fn.editabletypes.datefield ? r = "datefield" : t.fn.editabletypes.dateuifield && (r = "dateuifield") : t.fn.editabletypes.date ? r = "date" : t.fn.editabletypes.dateui && (r = "dateui"), "date" !== r || t.fn.editabletypes.date || (r = "combodate")), "datetime" === r && "inline" === e.mode && (r = "datetimefield"), "wysihtml5" !== r || t.fn.editabletypes[r] || (r = "textarea"), "function" == typeof t.fn.editabletypes[r] ? (i = t.fn.editabletypes[r], n = this.sliceObj(e, this.objectKeys(i.defaults)), o = new i(n)) : (t.error("Unknown type: " + r), !1);
        }, supportsTransitions: function supportsTransitions() {
            var t = document.body || document.documentElement,
                e = t.style,
                i = "transition",
                n = ["Moz", "Webkit", "Khtml", "O", "ms"];if ("string" == typeof e[i]) return !0;i = i.charAt(0).toUpperCase() + i.substr(1);for (var o = 0; o < n.length; o++) {
                if ("string" == typeof e[n[o] + i]) return !0;
            }return !1;
        } };
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t, _e3) {
        this.init(t, _e3);
    },
        i = function i(t, e) {
        this.init(t, e);
    };e.prototype = { containerName: null, containerDataName: null, innerCss: null, containerClass: "editable-container editable-popup", init: function init(i, n) {
            this.$element = t(i), this.options = t.extend({}, t.fn.editableContainer.defaults, n), this.splitOptions(), this.formOptions.scope = this.$element[0], this.initContainer(), this.delayedHide = !1, this.$element.on("destroyed", t.proxy(function () {
                this.destroy();
            }, this)), t(document).data("editable-handlers-attached") || (t(document).on("keyup.editable", function (e) {
                27 === e.which && t(".editable-open").editableContainer("hide");
            }), t(document).on("click.editable", function (i) {
                var n,
                    o = t(i.target),
                    r = [".editable-container", ".ui-datepicker-header", ".datepicker", ".modal-backdrop", ".bootstrap-wysihtml5-insert-image-modal", ".bootstrap-wysihtml5-insert-link-modal"];if (t.contains(document.documentElement, i.target) && !o.is(document)) {
                    for (n = 0; n < r.length; n++) {
                        if (o.is(r[n]) || o.parents(r[n]).length) return;
                    }e.prototype.closeOthers(i.target);
                }
            }), t(document).data("editable-handlers-attached", !0));
        }, splitOptions: function splitOptions() {
            if (this.containerOptions = {}, this.formOptions = {}, !t.fn[this.containerName]) throw new Error(this.containerName + " not found. Have you included corresponding js file?");var e = t.fn[this.containerName].defaults;for (var i in this.options) {
                i in e ? this.containerOptions[i] = this.options[i] : this.formOptions[i] = this.options[i];
            }
        }, tip: function tip() {
            return this.container() ? this.container().$tip : null;
        }, container: function container() {
            var t;return this.containerDataName && (t = this.$element.data(this.containerDataName)) ? t : t = this.$element.data(this.containerName);
        }, call: function call() {
            this.$element[this.containerName].apply(this.$element, arguments);
        }, initContainer: function initContainer() {
            this.call(this.containerOptions);
        }, renderForm: function renderForm() {
            this.$form.editableform(this.formOptions).on({ save: t.proxy(this.save, this), nochange: t.proxy(function () {
                    this.hide("nochange");
                }, this), cancel: t.proxy(function () {
                    this.hide("cancel");
                }, this), show: t.proxy(function () {
                    this.delayedHide ? (this.hide(this.delayedHide.reason), this.delayedHide = !1) : this.setPosition();
                }, this), rendering: t.proxy(this.setPosition, this), resize: t.proxy(this.setPosition, this), rendered: t.proxy(function () {
                    this.$element.triggerHandler("shown", t(this.options.scope).data("editable"));
                }, this) }).editableform("render");
        }, show: function show(e) {
            this.$element.addClass("editable-open"), e !== !1 && this.closeOthers(this.$element[0]), this.innerShow(), this.tip().addClass(this.containerClass), this.$form, this.$form = t("<div>"), this.tip().is(this.innerCss) ? this.tip().append(this.$form) : this.tip().find(this.innerCss).append(this.$form), this.renderForm();
        }, hide: function hide(t) {
            if (this.tip() && this.tip().is(":visible") && this.$element.hasClass("editable-open")) {
                if (this.$form.data("editableform").isSaving) return this.delayedHide = { reason: t }, void 0;this.delayedHide = !1, this.$element.removeClass("editable-open"), this.innerHide(), this.$element.triggerHandler("hidden", t || "manual");
            }
        }, innerShow: function innerShow() {}, innerHide: function innerHide() {}, toggle: function toggle(t) {
            this.container() && this.tip() && this.tip().is(":visible") ? this.hide() : this.show(t);
        }, setPosition: function setPosition() {}, save: function save(t, e) {
            this.$element.triggerHandler("save", e), this.hide("save");
        }, option: function option(t, e) {
            this.options[t] = e, t in this.containerOptions ? (this.containerOptions[t] = e, this.setContainerOption(t, e)) : (this.formOptions[t] = e, this.$form && this.$form.editableform("option", t, e));
        }, setContainerOption: function setContainerOption(t, e) {
            this.call("option", t, e);
        }, destroy: function destroy() {
            this.hide(), this.innerDestroy(), this.$element.off("destroyed"), this.$element.removeData("editableContainer");
        }, innerDestroy: function innerDestroy() {}, closeOthers: function closeOthers(e) {
            t(".editable-open").each(function (i, n) {
                if (n !== e && !t(n).find(e).length) {
                    var o = t(n),
                        r = o.data("editableContainer");r && ("cancel" === r.options.onblur ? o.data("editableContainer").hide("onblur") : "submit" === r.options.onblur && o.data("editableContainer").tip().find("form").submit());
                }
            });
        }, activate: function activate() {
            this.tip && this.tip().is(":visible") && this.$form && this.$form.data("editableform").input.activate();
        } }, t.fn.editableContainer = function (n) {
        var o = arguments;return this.each(function () {
            var r = t(this),
                s = "editableContainer",
                a = r.data(s),
                l = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n,
                c = "inline" === l.mode ? i : e;a || r.data(s, a = new c(this, l)), "string" == typeof n && a[n].apply(a, Array.prototype.slice.call(o, 1));
        });
    }, t.fn.editableContainer.Popup = e, t.fn.editableContainer.Inline = i, t.fn.editableContainer.defaults = { value: null, placement: "top", autohide: !0, onblur: "cancel", anim: !1, mode: "popup" }, jQuery.event.special.destroyed = { remove: function remove(t) {
            t.handler && t.handler();
        } };
}(window.jQuery), function (t) {
    "use strict";
    t.extend(t.fn.editableContainer.Inline.prototype, t.fn.editableContainer.Popup.prototype, { containerName: "editableform", innerCss: ".editable-inline", containerClass: "editable-container editable-inline", initContainer: function initContainer() {
            this.$tip = t("<span></span>"), this.options.anim || (this.options.anim = 0);
        }, splitOptions: function splitOptions() {
            this.containerOptions = {}, this.formOptions = this.options;
        }, tip: function tip() {
            return this.$tip;
        }, innerShow: function innerShow() {
            this.$element.hide(), this.tip().insertAfter(this.$element).show();
        }, innerHide: function innerHide() {
            this.$tip.hide(this.options.anim, t.proxy(function () {
                this.$element.show(), this.innerDestroy();
            }, this));
        }, innerDestroy: function innerDestroy() {
            this.tip() && this.tip().empty().remove();
        } });
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(_e4, i) {
        this.$element = t(_e4), this.options = t.extend({}, t.fn.editable.defaults, i, t.fn.editableutils.getConfigData(this.$element)), this.options.selector ? this.initLive() : this.init(), this.options.highlight && !t.fn.editableutils.supportsTransitions() && (this.options.highlight = !1);
    };e.prototype = { constructor: e, init: function init() {
            var e,
                i = !1;if (this.options.name = this.options.name || this.$element.attr("id"), this.options.scope = this.$element[0], this.input = t.fn.editableutils.createInput(this.options), this.input) {
                switch (void 0 === this.options.value || null === this.options.value ? (this.value = this.input.html2value(t.trim(this.$element.html())), i = !0) : (this.options.value = t.fn.editableutils.tryParseJson(this.options.value, !0), this.value = "string" == typeof this.options.value ? this.input.str2value(this.options.value) : this.options.value), this.$element.addClass("editable"), "textarea" === this.input.type && this.$element.addClass("editable-pre-wrapped"), "manual" !== this.options.toggle ? (this.$element.addClass("editable-click"), this.$element.on(this.options.toggle + ".editable", t.proxy(function (t) {
                    if (this.options.disabled || t.preventDefault(), "mouseenter" === this.options.toggle) this.show();else {
                        var e = "click" !== this.options.toggle;this.toggle(e);
                    }
                }, this))) : this.$element.attr("tabindex", -1), "function" == typeof this.options.display && (this.options.autotext = "always"), this.options.autotext) {case "always":
                        e = !0;break;case "auto":
                        e = !t.trim(this.$element.text()).length && null !== this.value && void 0 !== this.value && !i;break;default:
                        e = !1;}t.when(e ? this.render() : !0).then(t.proxy(function () {
                    this.options.disabled ? this.disable() : this.enable(), this.$element.triggerHandler("init", this);
                }, this));
            }
        }, initLive: function initLive() {
            var e = this.options.selector;this.options.selector = !1, this.options.autotext = "never", this.$element.on(this.options.toggle + ".editable", e, t.proxy(function (e) {
                var i = t(e.target);i.data("editable") || (i.hasClass(this.options.emptyclass) && i.empty(), i.editable(this.options).trigger(e));
            }, this));
        }, render: function render(t) {
            return this.options.display !== !1 ? this.input.value2htmlFinal ? this.input.value2html(this.value, this.$element[0], this.options.display, t) : "function" == typeof this.options.display ? this.options.display.call(this.$element[0], this.value, t) : this.input.value2html(this.value, this.$element[0]) : void 0;
        }, enable: function enable() {
            this.options.disabled = !1, this.$element.removeClass("editable-disabled"), this.handleEmpty(this.isEmpty), "manual" !== this.options.toggle && "-1" === this.$element.attr("tabindex") && this.$element.removeAttr("tabindex");
        }, disable: function disable() {
            this.options.disabled = !0, this.hide(), this.$element.addClass("editable-disabled"), this.handleEmpty(this.isEmpty), this.$element.attr("tabindex", -1);
        }, toggleDisabled: function toggleDisabled() {
            this.options.disabled ? this.enable() : this.disable();
        }, option: function option(e, i) {
            return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? (t.each(e, t.proxy(function (e, i) {
                this.option(t.trim(e), i);
            }, this)), void 0) : (this.options[e] = i, "disabled" === e ? i ? this.disable() : this.enable() : ("value" === e && this.setValue(i), this.container && this.container.option(e, i), this.input.option && this.input.option(e, i), void 0));
        }, handleEmpty: function handleEmpty(e) {
            this.options.display !== !1 && (this.isEmpty = void 0 !== e ? e : "" === t.trim(this.$element.html()) ? !0 : "" !== t.trim(this.$element.text()) ? !1 : !this.$element.height() || !this.$element.width(), this.options.disabled ? this.isEmpty && (this.$element.empty(), this.options.emptyclass && this.$element.removeClass(this.options.emptyclass)) : this.isEmpty ? (this.$element.html(this.options.emptytext), this.options.emptyclass && this.$element.addClass(this.options.emptyclass)) : this.options.emptyclass && this.$element.removeClass(this.options.emptyclass));
        }, show: function show(e) {
            if (!this.options.disabled) {
                if (this.container) {
                    if (this.container.tip().is(":visible")) return;
                } else {
                    var i = t.extend({}, this.options, { value: this.value, input: this.input });this.$element.editableContainer(i), this.$element.on("save.internal", t.proxy(this.save, this)), this.container = this.$element.data("editableContainer");
                }this.container.show(e);
            }
        }, hide: function hide() {
            this.container && this.container.hide();
        }, toggle: function toggle(t) {
            this.container && this.container.tip().is(":visible") ? this.hide() : this.show(t);
        }, save: function save(t, e) {
            if (this.options.unsavedclass) {
                var i = !1;i = i || "function" == typeof this.options.url, i = i || this.options.display === !1, i = i || void 0 !== e.response, i = i || this.options.savenochange && this.input.value2str(this.value) !== this.input.value2str(e.newValue), i ? this.$element.removeClass(this.options.unsavedclass) : this.$element.addClass(this.options.unsavedclass);
            }if (this.options.highlight) {
                var n = this.$element,
                    o = n.css("background-color");n.css("background-color", this.options.highlight), setTimeout(function () {
                    "transparent" === o && (o = ""), n.css("background-color", o), n.addClass("editable-bg-transition"), setTimeout(function () {
                        n.removeClass("editable-bg-transition");
                    }, 1700);
                }, 10);
            }this.setValue(e.newValue, !1, e.response);
        }, validate: function validate() {
            return "function" == typeof this.options.validate ? this.options.validate.call(this, this.value) : void 0;
        }, setValue: function setValue(e, i, n) {
            this.value = i ? this.input.str2value(e) : e, this.container && this.container.option("value", this.value), t.when(this.render(n)).then(t.proxy(function () {
                this.handleEmpty();
            }, this));
        }, activate: function activate() {
            this.container && this.container.activate();
        }, destroy: function destroy() {
            this.disable(), this.container && this.container.destroy(), this.input.destroy(), "manual" !== this.options.toggle && (this.$element.removeClass("editable-click"), this.$element.off(this.options.toggle + ".editable")), this.$element.off("save.internal"), this.$element.removeClass("editable editable-open editable-disabled"), this.$element.removeData("editable");
        } }, t.fn.editable = function (i) {
        var n = {},
            o = arguments,
            r = "editable";switch (i) {case "validate":
                return this.each(function () {
                    var e,
                        i = t(this),
                        o = i.data(r);o && (e = o.validate()) && (n[o.options.name] = e);
                }), n;case "getValue":
                return 2 === arguments.length && arguments[1] === !0 ? n = this.eq(0).data(r).value : this.each(function () {
                    var e = t(this),
                        i = e.data(r);i && void 0 !== i.value && null !== i.value && (n[i.options.name] = i.input.value2submit(i.value));
                }), n;case "submit":
                var s,
                    a = arguments[1] || {},
                    l = this,
                    c = this.editable("validate");return t.isEmptyObject(c) ? (s = this.editable("getValue"), a.data && t.extend(s, a.data), t.ajax(t.extend({ url: a.url, data: s, type: "POST" }, a.ajaxOptions)).success(function (t) {
                    "function" == typeof a.success && a.success.call(l, t, a);
                }).error(function () {
                    "function" == typeof a.error && a.error.apply(l, arguments);
                })) : "function" == typeof a.error && a.error.call(l, c), this;}return this.each(function () {
            var n = t(this),
                s = n.data(r),
                a = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i;return a && a.selector ? (s = new e(this, a), void 0) : (s || n.data(r, s = new e(this, a)), "string" == typeof i && s[i].apply(s, Array.prototype.slice.call(o, 1)), void 0);
        });
    }, t.fn.editable.defaults = { type: "text", disabled: !1, toggle: "click", emptytext: "Empty", autotext: "auto", value: null, display: null, emptyclass: "editable-empty", unsavedclass: "editable-unsaved", selector: null, highlight: "#FFFF80" };
}(window.jQuery), function (t) {
    "use strict";
    t.fn.editabletypes = {};var e = function e() {};e.prototype = { init: function init(e, i, n) {
            this.type = e, this.options = t.extend({}, n, i);
        }, prerender: function prerender() {
            this.$tpl = t(this.options.tpl), this.$input = this.$tpl, this.$clear = null, this.error = null;
        }, render: function render() {}, value2html: function value2html(e, i) {
            t(i).text(t.trim(e));
        }, html2value: function html2value(e) {
            return t("<div>").html(e).text();
        }, value2str: function value2str(t) {
            return t;
        }, str2value: function str2value(t) {
            return t;
        }, value2submit: function value2submit(t) {
            return t;
        }, value2input: function value2input(t) {
            this.$input.val(t);
        }, input2value: function input2value() {
            return this.$input.val();
        }, activate: function activate() {
            this.$input.is(":visible") && this.$input.focus();
        }, clear: function clear() {
            this.$input.val(null);
        }, escape: function escape(e) {
            return t("<div>").text(e).html();
        }, autosubmit: function autosubmit() {}, destroy: function destroy() {}, setClass: function setClass() {
            this.options.inputclass && this.$input.addClass(this.options.inputclass);
        }, setAttr: function setAttr(t) {
            void 0 !== this.options[t] && null !== this.options[t] && this.$input.attr(t, this.options[t]);
        }, option: function option(t, e) {
            this.options[t] = e;
        } }, e.defaults = { tpl: "", inputclass: "input-medium", scope: null, showbuttons: !0 }, t.extend(t.fn.editabletypes, { abstractinput: e });
}(window.jQuery), function (t) {
    "use strict";
    var e = function e() {};t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { render: function render() {
            var e = t.Deferred();return this.error = null, this.onSourceReady(function () {
                this.renderList(), e.resolve();
            }, function () {
                this.error = this.options.sourceError, e.resolve();
            }), e.promise();
        }, html2value: function html2value() {
            return null;
        }, value2html: function value2html(e, i, n, o) {
            var r = t.Deferred(),
                s = function s() {
                "function" == typeof n ? n.call(i, e, this.sourceData, o) : this.value2htmlFinal(e, i), r.resolve();
            };return null === e ? s.call(this) : this.onSourceReady(s, function () {
                r.resolve();
            }), r.promise();
        }, onSourceReady: function onSourceReady(e, i) {
            var n;if (t.isFunction(this.options.source) ? (n = this.options.source.call(this.options.scope), this.sourceData = null) : n = this.options.source, this.options.sourceCache && t.isArray(this.sourceData)) return e.call(this), void 0;try {
                n = t.fn.editableutils.tryParseJson(n, !1);
            } catch (o) {
                return i.call(this), void 0;
            }if ("string" == typeof n) {
                if (this.options.sourceCache) {
                    var r,
                        s = n;if (t(document).data(s) || t(document).data(s, {}), r = t(document).data(s), r.loading === !1 && r.sourceData) return this.sourceData = r.sourceData, this.doPrepend(), e.call(this), void 0;if (r.loading === !0) return r.callbacks.push(t.proxy(function () {
                        this.sourceData = r.sourceData, this.doPrepend(), e.call(this);
                    }, this)), r.err_callbacks.push(t.proxy(i, this)), void 0;r.loading = !0, r.callbacks = [], r.err_callbacks = [];
                }t.ajax({ url: n, type: "get", cache: !1, dataType: "json", success: t.proxy(function (n) {
                        r && (r.loading = !1), this.sourceData = this.makeArray(n), t.isArray(this.sourceData) ? (r && (r.sourceData = this.sourceData, t.each(r.callbacks, function () {
                            this.call();
                        })), this.doPrepend(), e.call(this)) : (i.call(this), r && t.each(r.err_callbacks, function () {
                            this.call();
                        }));
                    }, this), error: t.proxy(function () {
                        i.call(this), r && (r.loading = !1, t.each(r.err_callbacks, function () {
                            this.call();
                        }));
                    }, this) });
            } else this.sourceData = this.makeArray(n), t.isArray(this.sourceData) ? (this.doPrepend(), e.call(this)) : i.call(this);
        }, doPrepend: function doPrepend() {
            null !== this.options.prepend && void 0 !== this.options.prepend && (t.isArray(this.prependData) || (t.isFunction(this.options.prepend) && (this.options.prepend = this.options.prepend.call(this.options.scope)), this.options.prepend = t.fn.editableutils.tryParseJson(this.options.prepend, !0), "string" == typeof this.options.prepend && (this.options.prepend = { "": this.options.prepend }), this.prependData = this.makeArray(this.options.prepend)), t.isArray(this.prependData) && t.isArray(this.sourceData) && (this.sourceData = this.prependData.concat(this.sourceData)));
        }, renderList: function renderList() {}, value2htmlFinal: function value2htmlFinal() {}, makeArray: function makeArray(e) {
            var i,
                n,
                o,
                r,
                s = [];if (!e || "string" == typeof e) return null;if (t.isArray(e)) {
                r = function r(t, e) {
                    return n = { value: t, text: e }, i++ >= 2 ? !1 : void 0;
                };for (var a = 0; a < e.length; a++) {
                    o = e[a], "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) ? (i = 0, t.each(o, r), 1 === i ? s.push(n) : i > 1 && (o.children && (o.children = this.makeArray(o.children)), s.push(o))) : s.push({ value: o, text: o });
                }
            } else t.each(e, function (t, e) {
                s.push({ value: t, text: e });
            });return s;
        }, option: function option(t, e) {
            this.options[t] = e, "source" === t && (this.sourceData = null), "prepend" === t && (this.prependData = null);
        } }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { source: null, prepend: !1, sourceError: "Error when loading list", sourceCache: !0 }), t.fn.editabletypes.list = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("text", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { render: function render() {
            this.renderClear(), this.setClass(), this.setAttr("placeholder");
        }, activate: function activate() {
            this.$input.is(":visible") && (this.$input.focus(), t.fn.editableutils.setCursorPosition(this.$input.get(0), this.$input.val().length), this.toggleClear && this.toggleClear());
        }, renderClear: function renderClear() {
            this.options.clear && (this.$clear = t('<span class="editable-clear-x"></span>'), this.$input.after(this.$clear).css("padding-right", 24).keyup(t.proxy(function (e) {
                if (!~t.inArray(e.keyCode, [40, 38, 9, 13, 27])) {
                    clearTimeout(this.t);var i = this;this.t = setTimeout(function () {
                        i.toggleClear(e);
                    }, 100);
                }
            }, this)).parent().css("position", "relative"), this.$clear.click(t.proxy(this.clear, this)));
        }, postrender: function postrender() {}, toggleClear: function toggleClear() {
            if (this.$clear) {
                var t = this.$input.val().length,
                    e = this.$clear.is(":visible");t && !e && this.$clear.show(), !t && e && this.$clear.hide();
            }
        }, clear: function clear() {
            this.$clear.hide(), this.$input.val("").focus();
        } }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { tpl: '<input type="text">', placeholder: null, clear: !0 }), t.fn.editabletypes.text = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("textarea", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { render: function render() {
            this.setClass(), this.setAttr("placeholder"), this.setAttr("rows"), this.$input.keydown(function (e) {
                e.ctrlKey && 13 === e.which && t(this).closest("form").submit();
            });
        }, activate: function activate() {
            t.fn.editabletypes.text.prototype.activate.call(this);
        } }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { tpl: "<textarea></textarea>", inputclass: "input-large", placeholder: null, rows: 7 }), t.fn.editabletypes.textarea = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("select", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.list), t.extend(e.prototype, { renderList: function renderList() {
            this.$input.empty();var e = function e(i, n) {
                var o;if (t.isArray(n)) for (var r = 0; r < n.length; r++) {
                    o = {}, n[r].children ? (o.label = n[r].text, i.append(e(t("<optgroup>", o), n[r].children))) : (o.value = n[r].value, n[r].disabled && (o.disabled = !0), i.append(t("<option>", o).text(n[r].text)));
                }return i;
            };e(this.$input, this.sourceData), this.setClass(), this.$input.on("keydown.editable", function (e) {
                13 === e.which && t(this).closest("form").submit();
            });
        }, value2htmlFinal: function value2htmlFinal(e, i) {
            var n = "",
                o = t.fn.editableutils.itemsByValue(e, this.sourceData);o.length && (n = o[0].text), t(i).text(n);
        }, autosubmit: function autosubmit() {
            this.$input.off("keydown.editable").on("change.editable", function () {
                t(this).closest("form").submit();
            });
        } }), e.defaults = t.extend({}, t.fn.editabletypes.list.defaults, { tpl: '<select class="form-control"></select>' }), t.fn.editabletypes.select = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("checklist", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.list), t.extend(e.prototype, { renderList: function renderList() {
            var e;if (this.$tpl.empty(), t.isArray(this.sourceData)) {
                for (var i = 0; i < this.sourceData.length; i++) {
                    e = t("<label>").append(t("<input>", { type: "checkbox", value: this.sourceData[i].value })).append(t("<span>").text(" " + this.sourceData[i].text)), t("<div>").append(e).appendTo(this.$tpl);
                }this.$input = this.$tpl.find('input[type="checkbox"]'), this.setClass();
            }
        }, value2str: function value2str(e) {
            return t.isArray(e) ? e.sort().join(t.trim(this.options.separator)) : "";
        }, str2value: function str2value(e) {
            var i,
                n = null;return "string" == typeof e && e.length ? (i = new RegExp("\\s*" + t.trim(this.options.separator) + "\\s*"), n = e.split(i)) : n = t.isArray(e) ? e : [e], n;
        }, value2input: function value2input(e) {
            this.$input.prop("checked", !1), t.isArray(e) && e.length && this.$input.each(function (i, n) {
                var o = t(n);t.each(e, function (t, e) {
                    o.val() == e && o.prop("checked", !0);
                });
            });
        }, input2value: function input2value() {
            var e = [];return this.$input.filter(":checked").each(function (i, n) {
                e.push(t(n).val());
            }), e;
        }, value2htmlFinal: function value2htmlFinal(e, i) {
            var n = [],
                o = t.fn.editableutils.itemsByValue(e, this.sourceData);o.length ? (t.each(o, function (e, i) {
                n.push(t.fn.editableutils.escape(i.text));
            }), t(i).html(n.join("<br>"))) : t(i).empty();
        }, activate: function activate() {
            this.$input.first().focus();
        }, autosubmit: function autosubmit() {
            this.$input.on("keydown", function (e) {
                13 === e.which && t(this).closest("form").submit();
            });
        } }), e.defaults = t.extend({}, t.fn.editabletypes.list.defaults, { tpl: '<div class="editable-checklist"></div>', inputclass: null, separator: "," }), t.fn.editabletypes.checklist = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("password", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.text), t.extend(e.prototype, { value2html: function value2html(e, i) {
            e ? t(i).text("[hidden]") : t(i).empty();
        }, html2value: function html2value() {
            return null;
        } }), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, { tpl: '<input type="password">' }), t.fn.editabletypes.password = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("email", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, { tpl: '<input type="email">' }), t.fn.editabletypes.email = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("url", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, { tpl: '<input type="url">' }), t.fn.editabletypes.url = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("tel", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.text), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, { tpl: '<input type="tel">' }), t.fn.editabletypes.tel = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("number", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.text), t.extend(e.prototype, { render: function render() {
            e.superclass.render.call(this), this.setAttr("min"), this.setAttr("max"), this.setAttr("step");
        }, postrender: function postrender() {
            this.$clear && this.$clear.css({ right: 24 });
        } }), e.defaults = t.extend({}, t.fn.editabletypes.text.defaults, { tpl: '<input type="number">', inputclass: "form-control input-small", min: null, max: null, step: null }), t.fn.editabletypes.number = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("range", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.number), t.extend(e.prototype, { render: function render() {
            this.$input = this.$tpl.filter("input"), this.setClass(), this.setAttr("min"), this.setAttr("max"), this.setAttr("step"), this.$input.on("input", function () {
                t(this).siblings("output").text(t(this).val());
            });
        }, activate: function activate() {
            this.$input.focus();
        } }), e.defaults = t.extend({}, t.fn.editabletypes.number.defaults, { tpl: '<input type="range"><output style="width: 30px; display: inline-block"></output>', inputclass: "form-control input-medium" }), t.fn.editabletypes.range = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("time", t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { render: function render() {
            this.setClass();
        } }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { tpl: '<input type="time">' }), t.fn.editabletypes.time = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(i) {
        if (this.init("select2", i, e.defaults), i.select2 = i.select2 || {}, this.sourceData = null, i.placeholder && (i.select2.placeholder = i.placeholder), !i.select2.tags && i.source) {
            var n = i.source;t.isFunction(i.source) && (n = i.source.call(i.scope)), "string" == typeof n ? (i.select2.ajax = i.select2.ajax || {}, i.select2.ajax.data || (i.select2.ajax.data = function (t) {
                return { query: t };
            }), i.select2.ajax.results || (i.select2.ajax.results = function (t) {
                return { results: t };
            }), i.select2.ajax.url = n) : (this.sourceData = this.convertSource(n), i.select2.data = this.sourceData);
        }if (this.options.select2 = t.extend({}, e.defaults.select2, i.select2), this.isMultiple = this.options.select2.tags || this.options.select2.multiple, this.isRemote = "ajax" in this.options.select2, this.idFunc = this.options.select2.id, "function" != typeof this.idFunc) {
            var o = this.idFunc || "id";this.idFunc = function (t) {
                return t[o];
            };
        }this.formatSelection = this.options.select2.formatSelection, "function" != typeof this.formatSelection && (this.formatSelection = function (t) {
            return t.text;
        });
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { render: function render() {
            this.setClass(), this.$input.select2(this.options.select2), this.isRemote && this.$input.on("select2-loaded", t.proxy(function (t) {
                this.sourceData = t.items.results;
            }, this)), this.isMultiple && this.$input.on("change", function () {
                t(this).closest("form").parent().triggerHandler("resize");
            });
        }, value2html: function value2html(e, i) {
            var n,
                o = "",
                r = this;this.options.select2.tags ? n = e : this.sourceData && (n = t.fn.editableutils.itemsByValue(e, this.sourceData, this.idFunc)), t.isArray(n) ? (o = [], t.each(n, function (t, e) {
                o.push(e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? r.formatSelection(e) : e);
            })) : n && (o = r.formatSelection(n)), o = t.isArray(o) ? o.join(this.options.viewseparator) : o, t(i).text(o);
        }, html2value: function html2value(t) {
            return this.options.select2.tags ? this.str2value(t, this.options.viewseparator) : null;
        }, value2input: function value2input(e) {
            if (this.$input.val(e).trigger("change", !0), this.isRemote && !this.isMultiple && !this.options.select2.initSelection) {
                var i = this.options.select2.id,
                    n = this.options.select2.formatSelection;if (!i && !n) {
                    var o = { id: e, text: t(this.options.scope).text() };this.$input.select2("data", o);
                }
            }
        }, input2value: function input2value() {
            return this.$input.select2("val");
        }, str2value: function str2value(e, i) {
            if ("string" != typeof e || !this.isMultiple) return e;i = i || this.options.select2.separator || t.fn.select2.defaults.separator;var n, o, r;if (null === e || e.length < 1) return null;for (n = e.split(i), o = 0, r = n.length; r > o; o += 1) {
                n[o] = t.trim(n[o]);
            }return n;
        }, autosubmit: function autosubmit() {
            this.$input.on("change", function (e, i) {
                i || t(this).closest("form").submit();
            });
        }, convertSource: function convertSource(e) {
            if (t.isArray(e) && e.length && void 0 !== e[0].value) for (var i = 0; i < e.length; i++) {
                void 0 !== e[i].value && (e[i].id = e[i].value, delete e[i].value);
            }return e;
        }, destroy: function destroy() {
            this.$input.data("select2") && this.$input.select2("destroy");
        } }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { tpl: '<input type="hidden">', select2: null, placeholder: null, source: null, viewseparator: ", " }), t.fn.editabletypes.select2 = e;
}(window.jQuery), function (t) {
    var e = function e(_e5, i) {
        return this.$element = t(_e5), this.$element.is("input") ? (this.options = t.extend({}, t.fn.combodate.defaults, i, this.$element.data()), this.init(), void 0) : (t.error("Combodate should be applied to INPUT element"), void 0);
    };e.prototype = { constructor: e, init: function init() {
            this.map = { day: ["D", "date"], month: ["M", "month"], year: ["Y", "year"], hour: ["[Hh]", "hours"], minute: ["m", "minutes"], second: ["s", "seconds"], ampm: ["[Aa]", ""] }, this.$widget = t('<span class="combodate"></span>').html(this.getTemplate()), this.initCombos(), this.$widget.on("change", "select", t.proxy(function () {
                this.$element.val(this.getValue());
            }, this)), this.$widget.find("select").css("width", "auto"), this.$element.hide().after(this.$widget), this.setValue(this.$element.val() || this.options.value);
        }, getTemplate: function getTemplate() {
            var e = this.options.template;return t.each(this.map, function (t, i) {
                i = i[0];var n = new RegExp(i + "+"),
                    o = i.length > 1 ? i.substring(1, 2) : i;e = e.replace(n, "{" + o + "}");
            }), e = e.replace(/ /g, "&nbsp;"), t.each(this.map, function (t, i) {
                i = i[0];var n = i.length > 1 ? i.substring(1, 2) : i;e = e.replace("{" + n + "}", '<select class="form-control ' + t + '"></select>');
            }), e;
        }, initCombos: function initCombos() {
            var e = this;t.each(this.map, function (t) {
                var i,
                    n,
                    o = e.$widget.find("." + t);o.length && (e["$" + t] = o, i = "fill" + t.charAt(0).toUpperCase() + t.slice(1), n = e[i](), e["$" + t].html(e.renderItems(n)));
            });
        }, initItems: function initItems(t) {
            var e,
                i = [];if ("name" === this.options.firstItem) {
                e = moment.relativeTime || moment.langData()._relativeTime;var n = "function" == typeof e[t] ? e[t](1, !0, t, !1) : e[t];n = n.split(" ").reverse()[0], i.push(["", n]);
            } else "empty" === this.options.firstItem && i.push(["", ""]);return i;
        }, renderItems: function renderItems(t) {
            for (var e = [], i = 0; i < t.length; i++) {
                e.push('<option value="' + t[i][0] + '">' + t[i][1] + "</option>");
            }return e.join("\n");
        }, fillDay: function fillDay() {
            var t,
                e,
                i = this.initItems("d"),
                n = -1 !== this.options.template.indexOf("DD");for (e = 1; 31 >= e; e++) {
                t = n ? this.leadZero(e) : e, i.push([e, t]);
            }return i;
        }, fillMonth: function fillMonth() {
            var t,
                e,
                i = this.initItems("M"),
                n = -1 !== this.options.template.indexOf("MMMM"),
                o = -1 !== this.options.template.indexOf("MMM"),
                r = -1 !== this.options.template.indexOf("MM");for (e = 0; 11 >= e; e++) {
                t = n ? moment().date(1).month(e).format("MMMM") : o ? moment().date(1).month(e).format("MMM") : r ? this.leadZero(e + 1) : e + 1, i.push([e, t]);
            }return i;
        }, fillYear: function fillYear() {
            var t,
                e,
                i = [],
                n = -1 !== this.options.template.indexOf("YYYY");for (e = this.options.maxYear; e >= this.options.minYear; e--) {
                t = n ? e : (e + "").substring(2), i[this.options.yearDescending ? "push" : "unshift"]([e, t]);
            }return i = this.initItems("y").concat(i);
        }, fillHour: function fillHour() {
            var t,
                e,
                i = this.initItems("h"),
                n = -1 !== this.options.template.indexOf("h"),
                o = (-1 !== this.options.template.indexOf("H"), -1 !== this.options.template.toLowerCase().indexOf("hh")),
                r = n ? 1 : 0,
                s = n ? 12 : 23;for (e = r; s >= e; e++) {
                t = o ? this.leadZero(e) : e, i.push([e, t]);
            }return i;
        }, fillMinute: function fillMinute() {
            var t,
                e,
                i = this.initItems("m"),
                n = -1 !== this.options.template.indexOf("mm");for (e = 0; 59 >= e; e += this.options.minuteStep) {
                t = n ? this.leadZero(e) : e, i.push([e, t]);
            }return i;
        }, fillSecond: function fillSecond() {
            var t,
                e,
                i = this.initItems("s"),
                n = -1 !== this.options.template.indexOf("ss");for (e = 0; 59 >= e; e += this.options.secondStep) {
                t = n ? this.leadZero(e) : e, i.push([e, t]);
            }return i;
        }, fillAmpm: function fillAmpm() {
            var t = -1 !== this.options.template.indexOf("a"),
                e = (-1 !== this.options.template.indexOf("A"), [["am", t ? "am" : "AM"], ["pm", t ? "pm" : "PM"]]);return e;
        }, getValue: function getValue(e) {
            var i,
                n = {},
                o = this,
                r = !1;return t.each(this.map, function (t) {
                if ("ampm" !== t) {
                    var e = "day" === t ? 1 : 0;return n[t] = o["$" + t] ? parseInt(o["$" + t].val(), 10) : e, isNaN(n[t]) ? (r = !0, !1) : void 0;
                }
            }), r ? "" : (this.$ampm && (n.hour = 12 === n.hour ? "am" === this.$ampm.val() ? 0 : 12 : "am" === this.$ampm.val() ? n.hour : n.hour + 12), i = moment([n.year, n.month, n.day, n.hour, n.minute, n.second]), this.highlight(i), e = void 0 === e ? this.options.format : e, null === e ? i.isValid() ? i : null : i.isValid() ? i.format(e) : "");
        }, setValue: function setValue(e) {
            function i(e, i) {
                var n = {};return e.children("option").each(function (e, o) {
                    var r,
                        s = t(o).attr("value");"" !== s && (r = Math.abs(s - i), ("undefined" == typeof n.distance || r < n.distance) && (n = { value: s, distance: r }));
                }), n.value;
            }if (e) {
                var n = "string" == typeof e ? moment(e, this.options.format) : moment(e),
                    o = this,
                    r = {};n.isValid() && (t.each(this.map, function (t, e) {
                    "ampm" !== t && (r[t] = n[e[1]]());
                }), this.$ampm && (r.hour >= 12 ? (r.ampm = "pm", r.hour > 12 && (r.hour -= 12)) : (r.ampm = "am", 0 === r.hour && (r.hour = 12))), t.each(r, function (t, e) {
                    o["$" + t] && ("minute" === t && o.options.minuteStep > 1 && o.options.roundTime && (e = i(o["$" + t], e)), "second" === t && o.options.secondStep > 1 && o.options.roundTime && (e = i(o["$" + t], e)), o["$" + t].val(e));
                }), this.$element.val(n.format(this.options.format)));
            }
        }, highlight: function highlight(t) {
            t.isValid() ? this.options.errorClass ? this.$widget.removeClass(this.options.errorClass) : this.$widget.find("select").css("border-color", this.borderColor) : this.options.errorClass ? this.$widget.addClass(this.options.errorClass) : (this.borderColor || (this.borderColor = this.$widget.find("select").css("border-color")), this.$widget.find("select").css("border-color", "red"));
        }, leadZero: function leadZero(t) {
            return 9 >= t ? "0" + t : t;
        }, destroy: function destroy() {
            this.$widget.remove(), this.$element.removeData("combodate").show();
        } }, t.fn.combodate = function (i) {
        var n,
            o = Array.apply(null, arguments);return o.shift(), "getValue" === i && this.length && (n = this.eq(0).data("combodate")) ? n.getValue.apply(n, o) : this.each(function () {
            var n = t(this),
                r = n.data("combodate"),
                s = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i;r || n.data("combodate", r = new e(this, s)), "string" == typeof i && "function" == typeof r[i] && r[i].apply(r, o);
        });
    }, t.fn.combodate.defaults = { format: "DD-MM-YYYY HH:mm", template: "D / MMM / YYYY   H : mm", value: null, minYear: 1970, maxYear: 2015, yearDescending: !0, minuteStep: 5, secondStep: 1, firstItem: "empty", errorClass: "has-error", roundTime: !0 };
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(i) {
        this.init("combodate", i, e.defaults), this.options.viewformat || (this.options.viewformat = this.options.format), i.combodate = t.fn.editableutils.tryParseJson(i.combodate, !0), this.options.combodate = t.extend({}, e.defaults.combodate, i.combodate, { format: this.options.format, template: this.options.template });
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { render: function render() {
            this.$input.combodate(this.options.combodate);
        }, value2html: function value2html(e, i) {
            var n = e ? e.format(this.options.viewformat) : "";t(i).text(n);
        }, html2value: function html2value(t) {
            return t ? moment(t, this.options.viewformat) : null;
        }, value2str: function value2str(t) {
            return t ? t.format(this.options.format) : "";
        }, str2value: function str2value(t) {
            return t ? moment(t, this.options.format) : null;
        }, value2submit: function value2submit(t) {
            return this.value2str(t);
        }, value2input: function value2input(t) {
            this.$input.combodate("setValue", t);
        }, input2value: function input2value() {
            return this.$input.combodate("getValue", null);
        }, activate: function activate() {
            this.$input.siblings(".combodate").find("select").eq(0).focus();
        }, autosubmit: function autosubmit() {} }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { tpl: '<input type="text" class="form-control">', inputclass: null, format: "YYYY-MM-DD", viewformat: null, template: "D / MMM / YYYY", combodate: null }), t.fn.editabletypes.combodate = e;
}(window.jQuery), function (t) {
    "use strict";
    t.extend(t.fn.editableform.Constructor.prototype, { initTemplate: function initTemplate() {
            this.$form = t(t.fn.editableform.template), this.$form.find(".editable-error-block").addClass("help-block");
        } }), t.fn.editableform.buttons = '<button type="submit" class="btn blue editable-submit"><i class="fa fa-check"></i></button><button type="button" class="btn default editable-cancel"><i class="fa fa-times"></i></button>', t.fn.editableform.errorGroupClass = "has-error", t.fn.editableform.errorBlockClass = null;
}(window.jQuery), function (t) {
    "use strict";
    t.fn.popover.defaults = t.fn.popover.Constructor.DEFAULTS, t.extend(t.fn.editableContainer.Popup.prototype, { containerName: "popover", containerDataName: "bs.popover", innerCss: t.fn.popover && t(t.fn.popover.defaults.template).find("p").length ? ".popover-content p" : ".popover-content", initContainer: function initContainer() {
            t.extend(this.containerOptions, { trigger: "manual", selector: !1, content: " ", template: t.fn.popover.defaults.template });var e;this.$element.data("template") && (e = this.$element.data("template"), this.$element.removeData("template")), this.call(this.containerOptions), e && this.$element.data("template", e);
        }, innerShow: function innerShow() {
            this.call("show");
        }, innerHide: function innerHide() {
            this.call("hide");
        }, innerDestroy: function innerDestroy() {
            this.call("destroy");
        }, setContainerOption: function setContainerOption(t, e) {
            this.container().options[t] = e;
        }, setPosition: function setPosition() {
            !function () {
                var e,
                    i,
                    n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    h,
                    d = this.tip();switch (r = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement, e = /in/.test(r), d.removeClass("top right bottom left").css({ top: 0, left: 0, display: "block" }), i = this.getPosition(e), n = d[0].offsetWidth, o = d[0].offsetHeight, r = e ? r.split(" ")[1] : r, l = { top: i.top + i.height, left: i.left + i.width / 2 - n / 2 }, a = { top: i.top - o, left: i.left + i.width / 2 - n / 2 }, c = { top: i.top + i.height / 2 - o / 2, left: i.left - n }, h = { top: i.top + i.height / 2 - o / 2, left: i.left + i.width }, r) {case "bottom":
                        l.top + o > t(window).scrollTop() + t(window).height() && (r = a.top > t(window).scrollTop() ? "top" : h.left + n < t(window).scrollLeft() + t(window).width() ? "right" : c.left > t(window).scrollLeft() ? "left" : "right");break;case "top":
                        a.top < t(window).scrollTop() && (r = l.top + o < t(window).scrollTop() + t(window).height() ? "bottom" : h.left + n < t(window).scrollLeft() + t(window).width() ? "right" : c.left > t(window).scrollLeft() ? "left" : "right");break;case "left":
                        c.left < t(window).scrollLeft() && (r = h.left + n < t(window).scrollLeft() + t(window).width() ? "right" : a.top > t(window).scrollTop() ? "top" : a.top > t(window).scrollTop() ? "bottom" : "right");break;case "right":
                        h.left + n > t(window).scrollLeft() + t(window).width() && (c.left > t(window).scrollLeft() ? r = "left" : a.top > t(window).scrollTop() ? r = "top" : a.top > t(window).scrollTop() && (r = "bottom"));}switch (r) {case "bottom":
                        s = l;break;case "top":
                        s = a;break;case "left":
                        s = c;break;case "right":
                        s = h;}d.offset(s).addClass(r).addClass("in");
            }.call(this.container());
        } });
}(window.jQuery), function (t) {
    function e() {
        return new Date(Date.UTC.apply(Date, arguments));
    }function i(e, i) {
        var n,
            o = t(e).data(),
            r = {},
            s = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
            i = new RegExp("^" + i.toLowerCase());for (var a in o) {
            i.test(a) && (n = a.replace(s, function (t, e) {
                return e.toLowerCase();
            }), r[n] = o[a]);
        }return r;
    }function n(e) {
        var i = {};if (h[e] || (e = e.split("-")[0], h[e])) {
            var n = h[e];return t.each(c, function (t, e) {
                e in n && (i[e] = n[e]);
            }), i;
        }
    }var o = function o(e, i) {
        this._process_options(i), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(d.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && (this.picker.addClass("datepicker-rtl"), this.picker.find(".prev i, .next i").toggleClass("fa-angle-left fa-angle-right")), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
            return parseInt(e) + 1;
        }), this._allow_update = !1, this.setStartDate(this.o.startDate), this.setEndDate(this.o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show();
    };o.prototype = { constructor: o, _process_options: function _process_options(e) {
            this._o = t.extend({}, this._o, e);var i = this.o = t.extend({}, this._o),
                n = i.language;switch (h[n] || (n = n.split("-")[0], h[n] || (n = l.language)), i.language = n, i.startView) {case 2:case "decade":
                    i.startView = 2;break;case 1:case "year":
                    i.startView = 1;break;default:
                    i.startView = 0;}switch (i.minViewMode) {case 1:case "months":
                    i.minViewMode = 1;break;case 2:case "years":
                    i.minViewMode = 2;break;default:
                    i.minViewMode = 0;}i.startView = Math.max(i.startView, i.minViewMode), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;var o = d.parseFormat(i.format);i.startDate !== -1 / 0 && (i.startDate = d.parseDate(i.startDate, o, i.language)), 1 / 0 !== i.endDate && (i.endDate = d.parseDate(i.endDate, o, i.language)), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function (t) {
                return parseInt(t, 10);
            });
        }, _events: [], _secondaryEvents: [], _applyEvents: function _applyEvents(t) {
            for (var e, i, n = 0; n < t.length; n++) {
                e = t[n][0], i = t[n][1], e.on(i);
            }
        }, _unapplyEvents: function _unapplyEvents(t) {
            for (var e, i, n = 0; n < t.length; n++) {
                e = t[n][0], i = t[n][1], e.off(i);
            }
        }, _buildEvents: function _buildEvents() {
            this.isInput ? this._events = [[this.element, { focus: t.proxy(this.show, this), keyup: t.proxy(this.update, this), keydown: t.proxy(this.keydown, this) }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), { focus: t.proxy(this.show, this), keyup: t.proxy(this.update, this), keydown: t.proxy(this.keydown, this) }], [this.component, { click: t.proxy(this.show, this) }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, { click: t.proxy(this.show, this) }]], this._secondaryEvents = [[this.picker, { click: t.proxy(this.click, this) }], [t(window), { resize: t.proxy(this.place, this) }], [t(document), { mousedown: t.proxy(function (t) {
                    this.element.is(t.target) || this.element.find(t.target).size() || this.picker.is(t.target) || this.picker.find(t.target).size() || this.hide();
                }, this) }]];
        }, _attachEvents: function _attachEvents() {
            this._detachEvents(), this._applyEvents(this._events);
        }, _detachEvents: function _detachEvents() {
            this._unapplyEvents(this._events);
        }, _attachSecondaryEvents: function _attachSecondaryEvents() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
        }, _detachSecondaryEvents: function _detachSecondaryEvents() {
            this._unapplyEvents(this._secondaryEvents);
        }, _trigger: function _trigger(e, i) {
            var n = i || this.date,
                o = new Date(n.getTime() + 6e4 * n.getTimezoneOffset());this.element.trigger({ type: e, date: o, format: t.proxy(function (t) {
                    var e = t || this.o.format;return d.formatDate(n, e, this.o.language);
                }, this) });
        }, show: function show(t) {
            this.isInline || this.picker.appendTo("body"), this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), this._attachSecondaryEvents(), t && t.preventDefault(), this._trigger("show");
        }, hide: function hide() {
            this.isInline || this.picker.is(":visible") && (this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"));
        }, remove: function remove() {
            this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date;
        }, getDate: function getDate() {
            var t = this.getUTCDate();return new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
        }, getUTCDate: function getUTCDate() {
            return this.date;
        }, setDate: function setDate(t) {
            this.setUTCDate(new Date(t.getTime() - 6e4 * t.getTimezoneOffset()));
        }, setUTCDate: function setUTCDate(t) {
            this.date = t, this.setValue();
        }, setValue: function setValue() {
            var t = this.getFormattedDate();this.isInput ? this.element.val(t) : this.component && this.element.find("input").val(t);
        }, getFormattedDate: function getFormattedDate(t) {
            return void 0 === t && (t = this.o.format), d.formatDate(this.date, t, this.o.language);
        }, setStartDate: function setStartDate(t) {
            this._process_options({ startDate: t }), this.update(), this.updateNavArrows();
        }, setEndDate: function setEndDate(t) {
            this._process_options({ endDate: t }), this.update(), this.updateNavArrows();
        }, setDaysOfWeekDisabled: function setDaysOfWeekDisabled(t) {
            this._process_options({ daysOfWeekDisabled: t }), this.update(), this.updateNavArrows();
        }, place: function place() {
            if (!this.isInline) {
                var e = parseInt(this.element.parents().filter(function () {
                    return "auto" != t(this).css("z-index");
                }).first().css("z-index")) + 10,
                    i = this.component ? this.component.parent().offset() : this.element.offset(),
                    n = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!0);this.picker.css({ top: i.top + n, left: i.left, zIndex: e });
            }
        }, _allow_update: !0, update: function update() {
            if (this._allow_update) {
                var t,
                    e = !1;arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (t = arguments[0], e = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), delete this.element.data().date), this.date = d.parseDate(t, this.o.format, this.o.language), e && this.setValue(), this.viewDate = this.date < this.o.startDate ? new Date(this.o.startDate) : this.date > this.o.endDate ? new Date(this.o.endDate) : new Date(this.date), this.fill();
            }
        }, fillDow: function fillDow() {
            var t = this.o.weekStart,
                e = "<tr>";if (this.o.calendarWeeks) {
                var i = '<th class="cw">&nbsp;</th>';e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i);
            }for (; t < this.o.weekStart + 7;) {
                e += '<th class="dow">' + h[this.o.language].daysMin[t++ % 7] + "</th>";
            }e += "</tr>", this.picker.find(".datepicker-days thead").append(e);
        }, fillMonths: function fillMonths() {
            for (var t = "", e = 0; 12 > e;) {
                t += '<span class="month">' + h[this.o.language].monthsShort[e++] + "</span>";
            }this.picker.find(".datepicker-months td").html(t);
        }, setRange: function setRange(e) {
            e && e.length ? this.range = t.map(e, function (t) {
                return t.valueOf();
            }) : delete this.range, this.fill();
        }, getClassNames: function getClassNames(e) {
            var i = [],
                n = this.viewDate.getUTCFullYear(),
                o = this.viewDate.getUTCMonth(),
                r = this.date.valueOf(),
                s = new Date();return e.getUTCFullYear() < n || e.getUTCFullYear() == n && e.getUTCMonth() < o ? i.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() == n && e.getUTCMonth() > o) && i.push("new"), this.o.todayHighlight && e.getUTCFullYear() == s.getFullYear() && e.getUTCMonth() == s.getMonth() && e.getUTCDate() == s.getDate() && i.push("today"), r && e.valueOf() == r && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 != t.inArray(e.valueOf(), this.range) && i.push("selected")), i;
        }, fill: function fill() {
            var i,
                n = new Date(this.viewDate),
                o = n.getUTCFullYear(),
                r = n.getUTCMonth(),
                s = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                c = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0;this.date && this.date.valueOf(), this.picker.find(".datepicker-days thead th.datepicker-switch").text(h[this.o.language].months[r] + " " + o), this.picker.find("tfoot th.today").text(h[this.o.language].today).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(h[this.o.language].clear).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();var u = e(o, r - 1, 28, 0, 0, 0, 0),
                p = d.getDaysInMonth(u.getUTCFullYear(), u.getUTCMonth());u.setUTCDate(p), u.setUTCDate(p - (u.getUTCDay() - this.o.weekStart + 7) % 7);var f = new Date(u);f.setUTCDate(f.getUTCDate() + 42), f = f.valueOf();for (var g, m = []; u.valueOf() < f;) {
                if (u.getUTCDay() == this.o.weekStart && (m.push("<tr>"), this.o.calendarWeeks)) {
                    var v = new Date(+u + 864e5 * ((this.o.weekStart - u.getUTCDay() - 7) % 7)),
                        y = new Date(+v + 864e5 * ((11 - v.getUTCDay()) % 7)),
                        b = new Date(+(b = e(y.getUTCFullYear(), 0, 1)) + 864e5 * ((11 - b.getUTCDay()) % 7)),
                        x = (y - b) / 864e5 / 7 + 1;m.push('<td class="cw">' + x + "</td>");
                }g = this.getClassNames(u), g.push("day");var w = this.o.beforeShowDay(u);void 0 === w ? w = {} : "boolean" == typeof w ? w = { enabled: w } : "string" == typeof w && (w = { classes: w }), w.enabled === !1 && g.push("disabled"), w.classes && (g = g.concat(w.classes.split(/\s+/))), w.tooltip && (i = w.tooltip), g = t.unique(g), m.push('<td class="' + g.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + u.getUTCDate() + "</td>"), u.getUTCDay() == this.o.weekEnd && m.push("</tr>"), u.setUTCDate(u.getUTCDate() + 1);
            }this.picker.find(".datepicker-days tbody").empty().append(m.join(""));var _ = this.date && this.date.getUTCFullYear(),
                C = this.picker.find(".datepicker-months").find("th:eq(1)").text(o).end().find("span").removeClass("active");_ && _ == o && C.eq(this.date.getUTCMonth()).addClass("active"), (s > o || o > l) && C.addClass("disabled"), o == s && C.slice(0, a).addClass("disabled"), o == l && C.slice(c + 1).addClass("disabled"), m = "", o = 10 * parseInt(o / 10, 10);var S = this.picker.find(".datepicker-years").find("th:eq(1)").text(o + "-" + (o + 9)).end().find("td");o -= 1;for (var $ = -1; 11 > $; $++) {
                m += '<span class="year' + (-1 == $ ? " old" : 10 == $ ? " new" : "") + (_ == o ? " active" : "") + (s > o || o > l ? " disabled" : "") + '">' + o + "</span>", o += 1;
            }S.html(m);
        }, updateNavArrows: function updateNavArrows() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    e = t.getUTCFullYear(),
                    i = t.getUTCMonth();switch (this.viewMode) {case 0:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" });break;case 1:case 2:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" });}
            }
        }, click: function click(i) {
            i.preventDefault();var n = t(i.target).closest("span, td, th");if (1 == n.length) switch (n[0].nodeName.toLowerCase()) {case "th":
                    switch (n[0].className) {case "datepicker-switch":
                            this.showMode(1);break;case "prev":case "next":
                            var o = d.modes[this.viewMode].navStep * ("prev" == n[0].className ? -1 : 1);switch (this.viewMode) {case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, o);break;case 1:case 2:
                                    this.viewDate = this.moveYear(this.viewDate, o);}this.fill();break;case "today":
                            var r = new Date();r = e(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0), this.showMode(-2);var s = "linked" == this.o.todayBtn ? null : "view";this._setDate(r, s);break;case "clear":
                            var a;this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.val("").change(), this._trigger("changeDate"), this.update(), this.o.autoclose && this.hide();}break;case "span":
                    if (!n.is(".disabled")) {
                        if (this.viewDate.setUTCDate(1), n.is(".month")) {
                            var l = 1,
                                c = n.parent().find("span").index(n),
                                h = this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(c), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(e(h, c, l, 0, 0, 0, 0));
                        } else {
                            var h = parseInt(n.text(), 10) || 0,
                                l = 1,
                                c = 0;this.viewDate.setUTCFullYear(h), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(e(h, c, l, 0, 0, 0, 0));
                        }this.showMode(-1), this.fill();
                    }break;case "td":
                    if (n.is(".day") && !n.is(".disabled")) {
                        var l = parseInt(n.text(), 10) || 1,
                            h = this.viewDate.getUTCFullYear(),
                            c = this.viewDate.getUTCMonth();n.is(".old") ? 0 === c ? (c = 11, h -= 1) : c -= 1 : n.is(".new") && (11 == c ? (c = 0, h += 1) : c += 1), this._setDate(e(h, c, l, 0, 0, 0, 0));
                    }}
        }, _setDate: function _setDate(t, e) {
            e && "date" != e || (this.date = new Date(t)), e && "view" != e || (this.viewDate = new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");var i;this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && (i.change(), !this.o.autoclose || e && "date" != e || this.hide());
        }, moveMonth: function moveMonth(t, e) {
            if (!e) return t;var i,
                n,
                o = new Date(t.valueOf()),
                r = o.getUTCDate(),
                s = o.getUTCMonth(),
                a = Math.abs(e);if (e = e > 0 ? 1 : -1, 1 == a) n = -1 == e ? function () {
                return o.getUTCMonth() == s;
            } : function () {
                return o.getUTCMonth() != i;
            }, i = s + e, o.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);else {
                for (var l = 0; a > l; l++) {
                    o = this.moveMonth(o, e);
                }i = o.getUTCMonth(), o.setUTCDate(r), n = function n() {
                    return i != o.getUTCMonth();
                };
            }for (; n();) {
                o.setUTCDate(--r), o.setUTCMonth(i);
            }return o;
        }, moveYear: function moveYear(t, e) {
            return this.moveMonth(t, 12 * e);
        }, dateWithinRange: function dateWithinRange(t) {
            return t >= this.o.startDate && t <= this.o.endDate;
        }, keydown: function keydown(t) {
            if (this.picker.is(":not(:visible)")) return 27 == t.keyCode && this.show(), void 0;var e,
                i,
                n,
                o = !1;switch (t.keyCode) {case 27:
                    this.hide(), t.preventDefault();break;case 37:case 39:
                    if (!this.o.keyboardNavigation) break;e = 37 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), n = this.moveYear(this.viewDate, e)) : t.shiftKey ? (i = this.moveMonth(this.date, e), n = this.moveMonth(this.viewDate, e)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + e), n = new Date(this.viewDate), n.setUTCDate(this.viewDate.getUTCDate() + e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), t.preventDefault(), o = !0);break;case 38:case 40:
                    if (!this.o.keyboardNavigation) break;e = 38 == t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.date, e), n = this.moveYear(this.viewDate, e)) : t.shiftKey ? (i = this.moveMonth(this.date, e), n = this.moveMonth(this.viewDate, e)) : (i = new Date(this.date), i.setUTCDate(this.date.getUTCDate() + 7 * e), n = new Date(this.viewDate), n.setUTCDate(this.viewDate.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), t.preventDefault(), o = !0);break;case 13:
                    this.hide(), t.preventDefault();break;case 9:
                    this.hide();}if (o) {
                this._trigger("changeDate");var r;this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change();
            }
        }, showMode: function showMode(t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + d.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows();
        } };var r = function r(e, i) {
        this.element = t(e), this.inputs = t.map(i.inputs, function (t) {
            return t.jquery ? t[0] : t;
        }), delete i.inputs, t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) {
            return t(e).data("datepicker");
        }), this.updateDates();
    };r.prototype = { updateDates: function updateDates() {
            this.dates = t.map(this.pickers, function (t) {
                return t.date;
            }), this.updateRanges();
        }, updateRanges: function updateRanges() {
            var e = t.map(this.dates, function (t) {
                return t.valueOf();
            });t.each(this.pickers, function (t, i) {
                i.setRange(e);
            });
        }, dateUpdated: function dateUpdated(e) {
            var i = t(e.target).data("datepicker"),
                n = i.getUTCDate(),
                o = t.inArray(e.target, this.inputs),
                r = this.inputs.length;if (-1 != o) {
                if (n < this.dates[o]) for (; o >= 0 && n < this.dates[o];) {
                    this.pickers[o--].setUTCDate(n);
                } else if (n > this.dates[o]) for (; r > o && n > this.dates[o];) {
                    this.pickers[o++].setUTCDate(n);
                }this.updateDates();
            }
        }, remove: function remove() {
            t.map(this.pickers, function (t) {
                t.remove();
            }), delete this.element.data().datepicker;
        } };var s = t.fn.datepicker,
        a = t.fn.datepicker = function (e) {
        var s = Array.apply(null, arguments);s.shift();var a;return this.each(function () {
            var c = t(this),
                h = c.data("datepicker"),
                d = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;if (!h) {
                var u = i(this, "date"),
                    p = t.extend({}, l, u, d),
                    f = n(p.language),
                    g = t.extend({}, l, f, u, d);if (c.is(".input-daterange") || g.inputs) {
                    var m = { inputs: g.inputs || c.find("input").toArray() };c.data("datepicker", h = new r(this, t.extend(g, m)));
                } else c.data("datepicker", h = new o(this, g));
            }return "string" == typeof e && "function" == typeof h[e] && (a = h[e].apply(h, s), void 0 !== a) ? !1 : void 0;
        }), void 0 !== a ? a : this;
    },
        l = t.fn.datepicker.defaults = { autoclose: !1, beforeShowDay: t.noop, calendarWeeks: !1, clearBtn: !1, daysOfWeekDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keyboardNavigation: !0, language: "en", minViewMode: 0, rtl: !1, startDate: -1 / 0, startView: 0, todayBtn: !1, todayHighlight: !1, weekStart: 0 },
        c = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];t.fn.datepicker.Constructor = o;var h = t.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear" } },
        d = { modes: [{ clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }], isLeapYear: function isLeapYear(t) {
            return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400;
        }, getDaysInMonth: function getDaysInMonth(t, e) {
            return [31, d.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e];
        }, validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g, parseFormat: function parseFormat(t) {
            var e = t.replace(this.validParts, "\0").split("\0"),
                i = t.match(this.validParts);if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");return { separators: e, parts: i };
        }, parseDate: function parseDate(i, n, r) {
            if (i instanceof Date) return i;if ("string" == typeof n && (n = d.parseFormat(n)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
                var s,
                    a,
                    l = /([\-+]\d+)([dmwy])/,
                    c = i.match(/([\-+]\d+)([dmwy])/g);i = new Date();for (var u = 0; u < c.length; u++) {
                    switch (s = l.exec(c[u]), a = parseInt(s[1]), s[2]) {case "d":
                            i.setUTCDate(i.getUTCDate() + a);break;case "m":
                            i = o.prototype.moveMonth.call(o.prototype, i, a);break;case "w":
                            i.setUTCDate(i.getUTCDate() + 7 * a);break;case "y":
                            i = o.prototype.moveYear.call(o.prototype, i, a);}
                }return e(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0);
            }var p,
                f,
                s,
                c = i && i.match(this.nonpunctuation) || [],
                i = new Date(),
                g = {},
                m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                v = { yyyy: function yyyy(t, e) {
                    return t.setUTCFullYear(e);
                }, yy: function yy(t, e) {
                    return t.setUTCFullYear(2e3 + e);
                }, m: function m(t, e) {
                    for (e -= 1; 0 > e;) {
                        e += 12;
                    }for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() != e;) {
                        t.setUTCDate(t.getUTCDate() - 1);
                    }return t;
                }, d: function d(t, e) {
                    return t.setUTCDate(e);
                } };v.M = v.MM = v.mm = v.m, v.dd = v.d, i = e(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);var y = n.parts.slice();if (c.length != y.length && (y = t(y).filter(function (e, i) {
                return -1 !== t.inArray(i, m);
            }).toArray()), c.length == y.length) {
                for (var u = 0, b = y.length; b > u; u++) {
                    if (p = parseInt(c[u], 10), s = y[u], isNaN(p)) switch (s) {case "MM":
                            f = t(h[r].months).filter(function () {
                                var t = this.slice(0, c[u].length),
                                    e = c[u].slice(0, t.length);return t == e;
                            }), p = t.inArray(f[0], h[r].months) + 1;break;case "M":
                            f = t(h[r].monthsShort).filter(function () {
                                var t = this.slice(0, c[u].length),
                                    e = c[u].slice(0, t.length);return t == e;
                            }), p = t.inArray(f[0], h[r].monthsShort) + 1;}g[s] = p;
                }for (var x, u = 0; u < m.length; u++) {
                    x = m[u], x in g && !isNaN(g[x]) && v[x](i, g[x]);
                }
            }return i;
        }, formatDate: function formatDate(e, i, n) {
            "string" == typeof i && (i = d.parseFormat(i));var o = { d: e.getUTCDate(), D: h[n].daysShort[e.getUTCDay()], DD: h[n].days[e.getUTCDay()], m: e.getUTCMonth() + 1, M: h[n].monthsShort[e.getUTCMonth()], MM: h[n].months[e.getUTCMonth()], yy: e.getUTCFullYear().toString().substring(2), yyyy: e.getUTCFullYear() };o.dd = (o.d < 10 ? "0" : "") + o.d, o.mm = (o.m < 10 ? "0" : "") + o.m;for (var e = [], r = t.extend([], i.separators), s = 0, a = i.parts.length; a >= s; s++) {
                r.length && e.push(r.shift()), e.push(o[i.parts[s]]);
            }return e.join("");
        }, headTemplate: '<thead><tr><th class="prev"><i class="fa fa-angle-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="fa fa-angle-right"/></th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' };d.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + d.headTemplate + "<tbody></tbody>" + d.footTemplate + "</table>" + "</div>" + '<div class="datepicker-months">' + '<table class="table-condensed">' + d.headTemplate + d.contTemplate + d.footTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">' + d.headTemplate + d.contTemplate + d.footTemplate + "</table>" + "</div>" + "</div>", t.fn.datepicker.DPGlobal = d, t.fn.datepicker.noConflict = function () {
        return t.fn.datepicker = s, this;
    }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
        var i = t(this);i.data("datepicker") || (e.preventDefault(), a.call(i, "show"));
    }), t(function () {
        a.call(t('[data-provide="datepicker-inline"]'));
    });
}(window.jQuery), function (t) {
    "use strict";
    t.fn.bdatepicker = t.fn.datepicker.noConflict(), t.fn.datepicker || (t.fn.datepicker = t.fn.bdatepicker);var e = function e(t) {
        this.init("date", t, e.defaults), this.initPicker(t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { initPicker: function initPicker(e, i) {
            this.options.viewformat || (this.options.viewformat = this.options.format), e.datepicker = t.fn.editableutils.tryParseJson(e.datepicker, !0), this.options.datepicker = t.extend({}, i.datepicker, e.datepicker, { format: this.options.viewformat }), this.options.datepicker.language = this.options.datepicker.language || "en", this.dpg = t.fn.bdatepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat);
        }, render: function render() {
            this.$input.bdatepicker(this.options.datepicker), this.options.clear && (this.$clear = t('<a href="#"></a>').html(this.options.clear).click(t.proxy(function (t) {
                t.preventDefault(), t.stopPropagation(), this.clear();
            }, this)), this.$tpl.parent().append(t('<div class="editable-clear">').append(this.$clear)));
        }, value2html: function value2html(t, i) {
            var n = t ? this.dpg.formatDate(t, this.parsedViewFormat, this.options.datepicker.language) : "";e.superclass.value2html(n, i);
        }, html2value: function html2value(t) {
            return this.parseDate(t, this.parsedViewFormat);
        }, value2str: function value2str(t) {
            return t ? this.dpg.formatDate(t, this.parsedFormat, this.options.datepicker.language) : "";
        }, str2value: function str2value(t) {
            return this.parseDate(t, this.parsedFormat);
        }, value2submit: function value2submit(t) {
            return this.value2str(t);
        }, value2input: function value2input(t) {
            this.$input.bdatepicker("update", t);
        }, input2value: function input2value() {
            return this.$input.data("datepicker").date;
        }, activate: function activate() {}, clear: function clear() {
            this.$input.data("datepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit();
        }, autosubmit: function autosubmit() {
            this.$input.on("mouseup", ".day", function (e) {
                if (!t(e.currentTarget).is(".old") && !t(e.currentTarget).is(".new")) {
                    var i = t(this).closest("form");setTimeout(function () {
                        i.submit();
                    }, 200);
                }
            });
        }, parseDate: function parseDate(t, e) {
            var i,
                n = null;return t && (n = this.dpg.parseDate(t, e, this.options.datepicker.language), "string" == typeof t && (i = this.dpg.formatDate(n, e, this.options.datepicker.language), t !== i && (n = null))), n;
        } }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { tpl: '<div class="editable-date well"></div>', inputclass: null, format: "yyyy-mm-dd", viewformat: null, datepicker: { weekStart: 0, startView: 0, minViewMode: 0, autoclose: !1 }, clear: 'clear <i class="icon-remove fa fa-times" style="font-size:12px"></i>' }), t.fn.editabletypes.date = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("datefield", t, e.defaults), this.initPicker(t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.date), t.extend(e.prototype, { render: function render() {
            this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.bdatepicker(this.options.datepicker), this.$input.off("focus keydown"), this.$input.keyup(t.proxy(function () {
                this.$tpl.removeData("date"), this.$tpl.bdatepicker("update");
            }, this));
        }, value2input: function value2input(t) {
            this.$input.val(t ? this.dpg.formatDate(t, this.parsedViewFormat, this.options.datepicker.language) : ""), this.$tpl.bdatepicker("update");
        }, input2value: function input2value() {
            return this.html2value(this.$input.val());
        }, activate: function activate() {
            t.fn.editabletypes.text.prototype.activate.call(this);
        }, autosubmit: function autosubmit() {} }), e.defaults = t.extend({}, t.fn.editabletypes.date.defaults, { tpl: '<div class="input-group input-group-fixed date"><input type="text" readonly class="form-control input-medium pull-left"/><span class="input-group-btn pull-left"><button class="btn default" type="button"><i class="fa fa-calendar"></i></button></span></div>', inputclass: "form-control input-medium", datepicker: { weekStart: 0, startView: 0, minViewMode: 0, autoclose: !0 } }), t.fn.editabletypes.datefield = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("datetime", t, e.defaults), this.initPicker(t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.abstractinput), t.extend(e.prototype, { initPicker: function initPicker(e, i) {
            this.options.viewformat || (this.options.viewformat = this.options.format), e.datetimepicker = t.fn.editableutils.tryParseJson(e.datetimepicker, !0), this.options.datetimepicker = t.extend({}, i.datetimepicker, e.datetimepicker, { format: this.options.viewformat }), this.options.datetimepicker.language = this.options.datetimepicker.language || "en", this.dpg = t.fn.datetimepicker.DPGlobal, this.parsedFormat = this.dpg.parseFormat(this.options.format, this.options.formatType), this.parsedViewFormat = this.dpg.parseFormat(this.options.viewformat, this.options.formatType);
        }, render: function render() {
            this.$input.datetimepicker(this.options.datetimepicker), this.$input.on("changeMode", function () {
                var e = t(this).closest("form").parent();setTimeout(function () {
                    e.triggerHandler("resize");
                }, 0);
            }), this.options.clear && (this.$clear = t('<a href="#"></a>').html(this.options.clear).click(t.proxy(function (t) {
                t.preventDefault(), t.stopPropagation(), this.clear();
            }, this)), this.$tpl.parent().append(t('<div class="editable-clear">').append(this.$clear)));
        }, value2html: function value2html(t, i) {
            var n = t ? this.dpg.formatDate(this.toUTC(t), this.parsedViewFormat, this.options.datetimepicker.language, this.options.formatType) : "";return i ? (e.superclass.value2html(n, i), void 0) : n;
        }, html2value: function html2value(t) {
            var e = this.parseDate(t, this.parsedViewFormat);return e ? this.fromUTC(e) : null;
        }, value2str: function value2str(t) {
            return t ? this.dpg.formatDate(this.toUTC(t), this.parsedFormat, this.options.datetimepicker.language, this.options.formatType) : "";
        }, str2value: function str2value(t) {
            var e = this.parseDate(t, this.parsedFormat);return e ? this.fromUTC(e) : null;
        }, value2submit: function value2submit(t) {
            return this.value2str(t);
        }, value2input: function value2input(t) {
            t && this.$input.data("datetimepicker").setDate(t);
        }, input2value: function input2value() {
            var t = this.$input.data("datetimepicker");return t.date ? t.getDate() : null;
        }, activate: function activate() {}, clear: function clear() {
            this.$input.data("datetimepicker").date = null, this.$input.find(".active").removeClass("active"), this.options.showbuttons || this.$input.closest("form").submit();
        }, autosubmit: function autosubmit() {
            this.$input.on("mouseup", ".minute", function () {
                var e = t(this).closest("form");setTimeout(function () {
                    e.submit();
                }, 200);
            });
        }, toUTC: function toUTC(t) {
            return t ? new Date(t.valueOf() - 6e4 * t.getTimezoneOffset()) : t;
        }, fromUTC: function fromUTC(t) {
            return t ? new Date(t.valueOf() + 6e4 * t.getTimezoneOffset()) : t;
        }, parseDate: function parseDate(t, e) {
            var i,
                n = null;return t && (n = this.dpg.parseDate(t, e, this.options.datetimepicker.language, this.options.formatType), "string" == typeof t && (i = this.dpg.formatDate(n, e, this.options.datetimepicker.language, this.options.formatType), t !== i && (n = null))), n;
        } }), e.defaults = t.extend({}, t.fn.editabletypes.abstractinput.defaults, { tpl: '<div class="editable-date well"></div>', inputclass: null, format: "yyyy-mm-dd hh:ii", formatType: "standard", viewformat: null, datetimepicker: { todayHighlight: !1, autoclose: !1 }, clear: 'clear <i class="icon-remove fa fa-times" style="font-size:12px"></i>' }), t.fn.editabletypes.datetime = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(t) {
        this.init("datetimefield", t, e.defaults), this.initPicker(t, e.defaults);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.datetime), t.extend(e.prototype, { render: function render() {
            this.$input = this.$tpl.find("input"), this.setClass(), this.setAttr("placeholder"), this.$tpl.datetimepicker(this.options.datetimepicker), this.$input.off("focus keydown"), this.$input.keyup(t.proxy(function () {
                this.$tpl.removeData("date"), this.$tpl.datetimepicker("update");
            }, this));
        }, value2input: function value2input(t) {
            this.$input.val(this.value2html(t)), this.$tpl.datetimepicker("update");
        }, input2value: function input2value() {
            return this.html2value(this.$input.val());
        }, activate: function activate() {
            t.fn.editabletypes.text.prototype.activate.call(this);
        }, autosubmit: function autosubmit() {} }), e.defaults = t.extend({}, t.fn.editabletypes.datetime.defaults, { tpl: '<div class="input-group input-group-fixed date"><input type="text" readonly class="form-control input-medium pull-left"/><span class="input-group-btn pull-left"><button class="btn date-set default" type="button"><i class="fa fa-calendar"></i></button></span></div>', inputclass: "form-control input-medium", datetimepicker: { todayHighlight: !1, autoclose: !0 } }), t.fn.editabletypes.datetimefield = e;
}(window.jQuery), function (t) {
    "use strict";
    var e = function e(i) {
        this.init("typeahead", i, e.defaults), this.options.typeahead = t.extend({}, e.defaults.typeahead, { matcher: this.matcher, sorter: this.sorter, highlighter: this.highlighter, updater: this.updater }, i.typeahead);
    };t.fn.editableutils.inherit(e, t.fn.editabletypes.list), t.extend(e.prototype, { renderList: function renderList() {
            this.$input = this.$tpl.is("input") ? this.$tpl : this.$tpl.find('input[type="text"]'), this.options.typeahead.source = this.sourceData, this.$input.typeahead(this.options.typeahead);var e = this.$input.data("typeahead");e.render = t.proxy(this.typeaheadRender, e), e.select = t.proxy(this.typeaheadSelect, e), e.move = t.proxy(this.typeaheadMove, e), this.renderClear(), this.setClass(), this.setAttr("placeholder");
        }, value2htmlFinal: function value2htmlFinal(e, i) {
            if (this.getIsObjects()) {
                var n = t.fn.editableutils.itemsByValue(e, this.sourceData);t(i).text(n.length ? n[0].text : "");
            } else t(i).text(e);
        }, html2value: function html2value(t) {
            return t ? t : null;
        }, value2input: function value2input(e) {
            if (this.getIsObjects()) {
                var i = t.fn.editableutils.itemsByValue(e, this.sourceData);this.$input.data("value", e).val(i.length ? i[0].text : "");
            } else this.$input.val(e);
        }, input2value: function input2value() {
            if (this.getIsObjects()) {
                var e = this.$input.data("value"),
                    i = t.fn.editableutils.itemsByValue(e, this.sourceData);return i.length && i[0].text.toLowerCase() === this.$input.val().toLowerCase() ? e : null;
            }return this.$input.val();
        }, getIsObjects: function getIsObjects() {
            if (void 0 === this.isObjects) {
                this.isObjects = !1;for (var t = 0; t < this.sourceData.length; t++) {
                    if (this.sourceData[t].value !== this.sourceData[t].text) {
                        this.isObjects = !0;break;
                    }
                }
            }return this.isObjects;
        }, activate: t.fn.editabletypes.text.prototype.activate, renderClear: t.fn.editabletypes.text.prototype.renderClear, postrender: t.fn.editabletypes.text.prototype.postrender, toggleClear: t.fn.editabletypes.text.prototype.toggleClear, clear: function clear() {
            t.fn.editabletypes.text.prototype.clear.call(this), this.$input.data("value", "");
        }, matcher: function matcher(e) {
            return t.fn.typeahead.Constructor.prototype.matcher.call(this, e.text);
        }, sorter: function sorter(t) {
            for (var e, i, n = [], o = [], r = []; e = t.shift();) {
                i = e.text, i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? o.push(e) : r.push(e) : n.push(e);
            }return n.concat(o, r);
        }, highlighter: function highlighter(e) {
            return t.fn.typeahead.Constructor.prototype.highlighter.call(this, e.text);
        }, updater: function updater(t) {
            return this.$element.data("value", t.value), t.text;
        }, typeaheadRender: function typeaheadRender(e) {
            var i = this;return e = t(e).map(function (e, n) {
                return e = t(i.options.item).data("item", n), e.find("a").html(i.highlighter(n)), e[0];
            }), this.options.autoSelect && e.first().addClass("active"), this.$menu.html(e), this;
        }, typeaheadSelect: function typeaheadSelect() {
            var t = this.$menu.find(".active").data("item");return (this.options.autoSelect || t) && this.$element.val(this.updater(t)).change(), this.hide();
        }, typeaheadMove: function typeaheadMove(t) {
            if (this.shown) {
                switch (t.keyCode) {case 9:case 13:case 27:
                        if (!this.$menu.find(".active").length) return;t.preventDefault();break;case 38:
                        t.preventDefault(), this.prev();break;case 40:
                        t.preventDefault(), this.next();}t.stopPropagation();
            }
        } }), e.defaults = t.extend({}, t.fn.editabletypes.list.defaults, { tpl: '<input type="text">', typeahead: null, clear: !0 }), t.fn.editabletypes.typeahead = e;
}(window.jQuery);
