/*
Cache: jquery-lazy, thickbox, dt-main, dt-language, dt-main-op-jquery, dt-plugins, jquery-blockui, revslider-jquery.themepunch.revolution.min, themepunchtools, waypoints, vc_carousel_js, vc_transition_bootstrap_js, qfe_composer_front_js, jquery-migrate, jquery-core
*/
/* jquery-core: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-includes/js/jquery/jquery.js) */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) { return new x.fn.init(e, t, r) },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) { return t.toUpperCase() },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q)) };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() { return g.call(this) },
        get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
        pushStack: function(e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return x.each(this, e, t) },
        ready: function(e) { return x.ready.promise().done(e), this },
        slice: function() { return this.pushStack(g.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) { return this.pushStack(x.map(this, function(t, n) { return e.call(t, n, t) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? x.readyWait++ : x.ready(!0) },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) { return "function" === x.type(e) },
        isArray: Array.isArray || function(e) { return "array" === x.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try { if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (r) { return !1 }
            if (x.support.ownLast)
                for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        error: function(e) { throw Error(e) },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t) },
        parseXML: function(n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r },
        noop: function() {},
        globalEval: function(t) { t && x.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(D, "ms-").replace(L, H) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) { return null == e ? "" : b.call(e) } : function(e) { return null == e ? "" : (e + "").replace(C, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() { return e.apply(n || this, r.concat(g.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++, i) : t },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) { o = !0; for (l in r) x.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) { return c.call(x(e), n) })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() { return (new Date).getTime() },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try { r = null == e.frameElement && a.documentElement } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try { r.doScroll("left") } catch (e) { return setTimeout(o, 50) }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { c["[object " + t + "]"] = t.toLowerCase() });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function(e, t) { return e === t ? (S = !0, 0) : 0 },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) };
            try { M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) { _.apply(e, O.call(t)) } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (l = t.nodeType) && 9 !== l) return [];
                if (h && !i) {
                    if (o = Z.exec(e))
                        if (s = o[1]) { if (9 === l) { if (a = t.getElementById(s), !a || !a.parentNode) return n; if (a.id === s) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n } else { if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n; if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) c[u] = m + yt(c[u]);
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) try { return M.apply(n, y.querySelectorAll(x)), n } catch (T) {} finally { d || t.removeAttribute("id") }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }

            function st() {
                var e = [];

                function t(n, r) { return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r }
                return t
            }

            function lt(e) { return e[b] = !0, e }

            function ut(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) o.attrHandle[n[r]] = t
            }

            function pt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ft(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function dt(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function ht(e) {
                return lt(function(t) {
                    return t = +t, lt(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            s = at.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() { p() }), r.attributes = ut(function(e) { return e.className = "i", !e.getAttribute("className") }), r.getElementsByTagName = ut(function(e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), r.getElementsByClassName = ut(function(e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), r.getById = ut(function(e) { return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length }), r.getById ? (o.find.ID = function(e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, o.filter.ID = function(e) { var t = e.replace(rt, it); return function(e) { return e.getAttribute("id") === t } }) : (delete o.find.ID, o.filter.ID = function(e) { var t = e.replace(rt, it); return function(e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), o.find.TAG = r.getElementsByTagName ? function(e, n) { return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) { return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked") }), ut(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) { r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I) }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, A = d.compareDocumentPosition ? function(e, t) { if (e === t) return S = !0, 0; var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t); return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return S = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                    if (o === a) return pt(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) { return at(e, null, null, t) }, at.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try { var n = y.call(e, t); if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) {}
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) { return (e.ownerDocument || e) !== f && p(e), v(e, t) }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) { throw Error("Syntax error, unrecognized expression: " + e) }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) { while (t = e[o++]) t === e[o] && (i = n.push(o)); while (i--) e.splice(n[i], 1) }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    for (; t = e[r]; r++) n += a(t);
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: Q,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e }, PSEUDO: function(e) { var n, r = !e[5] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(rt, it).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = N[e + " "]; return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var i = at.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) { c[e] = [T, d, f]; break }
                                } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) { return r(e, 0, n) }) : r
                    }
                },
                pseudos: {
                    not: lt(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? lt(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() }
                    }),
                    has: lt(function(e) { return function(t) { return at(e, t).length > 0 } }),
                    contains: lt(function(e) { return function(t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }),
                    lang: lt(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === d },
                    focus: function(e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: function(e) { return e.disabled === !1 },
                    disabled: function(e) { return e.disabled === !0 },
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) { return !o.pseudos.empty(e) },
                    header: function(e) { return tt.test(e.nodeName) },
                    input: function(e) { return et.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) },
                    first: ht(function() { return [0] }),
                    last: ht(function(e, t) { return [t - 1] }),
                    eq: ht(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: ht(function(e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }),
                    odd: ht(function(e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }),
                    lt: ht(function(e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0;) e.push(r); return e }),
                    gt: ht(function(e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r;) e.push(r); return e })
                }
            }, o.pseudos.nth = o.pseudos.eq;
            for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) o.pseudos[n] = ft(n);
            for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n);

            function gt() {}
            gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length));
                    for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[r])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || o)
                                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) { if ((l = u[1]) === !0 || l === i) return l === !0 } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function xt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function wt(e, t, n, r, i, o) {
                return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : xt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) { u = xt(y, d), r(u, [], s, l), c = u.length; while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p)) }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--)(p = y[c]) && u.push(m[c] = p);
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                })
            }

            function Tt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(function(e) { return e === t }, s, !0),
                    p = vt(function(e) { return F.call(t, e) > -1 }, s, !0),
                    f = [function(e, n, r) { return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }];
                for (; i > l; l++)
                    if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
                    else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for (r = ++l; i > r; r++)
                                if (o.relative[e[r].type]) break;
                            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                        }
                        f.push(n)
                    }
                return bt(f)
            }

            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || .1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, l, c)) { p.push(h); break }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) at(e, t[r], n);
                return n
            }

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) { if (u = s[a], o.relative[c = u.type]) break; if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) { if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n; break } }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) { return 1 & e.compareDocumentPosition(f.createElement("div")) }), ut(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ct("type|href|height|width", function(e, n, r) { return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2) }), r.attributes && ut(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ct("value", function(e, n, r) { return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue }), ut(function(e) { return null == e.getAttribute("disabled") }) || ct(B, function(e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) { var t = O[e] = {}; return x.each(e.match(T) || [], function(e, n) { t[n] = !0 }), t }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) { x.each(t, function(t, n) { var r = x.type(n); "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() { return l && x.each(arguments, function(e, t) { var r; while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this },
                has: function(e) { return e ? x.inArray(e, l) > -1 : !(!l || !l.length) },
                empty: function() { return l = [], o = 0, this },
                disable: function() { return l = u = r = t, this },
                disabled: function() { return !l },
                lock: function() { return u = t, r || p.disable(), this },
                locked: function() { return !u },
                fireWith: function(e, t) { return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this },
                fire: function() { return p.fireWith(this, arguments), this },
                fired: function() { return !!i }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? x.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) { return function(r) { t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } },
                s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try { delete d.test } catch (h) { t.deleteExpando = !1 }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() { t.noCloneEvent = !1 }), d.cloneNode(!0).click());
        for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function() { t.boxSizing = 4 === d.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; while (i--) delete r[t[i]]; if (n ? !I(r) : !x.isEmptyObject(r)) return }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null) }
        }
    }
    x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e) }, data: function(e, t, n) { return R(e, t, n) }, removeData: function(e, t) { return W(e, t) }, _data: function(e, t, n) { return R(e, t, n, !0) }, _removeData: function(e, t) { return W(e, t, !0) }, acceptData: function(e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && x.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() { x.data(this, e) }) : arguments.length > 1 ? this.each(function() { x.data(this, e, n) }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) { return this.each(function() { x.removeData(this, e) }) }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() { x.dequeue(e, t) };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function() { x._removeData(e, t + "queue"), x._removeData(e, n) }) }) }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { x.dequeue(this, e) }) },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) }
            })
        },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {--i || o.resolveWith(a, [a]) };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) },
        removeAttr: function(e) { return this.each(function() { x.removeAttr(this, e) }) },
        prop: function(e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) },
        removeProp: function(e) { return e = x.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (n) {} }) },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) { x(this).addClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) { x(this).removeClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) { return null == e ? "" : e + "" })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: { get: function(e) { var t = x.find.attr(e, "value"); return null != t ? t : e.text } },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) { var o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t)) },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: { type: { set: function(e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        propFix: { "for": "htmlFor", "class": "className" },
        prop: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] },
        propHooks: { tabIndex: { get: function(e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1 } } }
    }), X = { set: function(e, t, n) { return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) { return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null }
    }), K && Q || (x.attrHooks.value = { set: function(e, n, r) { return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r) } }), Q || (z = { set: function(e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null }, x.valHooks.button = { get: function(e, n) { var r = e.getAttributeNode(n); return r && r.specified ? r.value : t }, set: z.set }, x.attrHooks.contenteditable = { set: function(e, t, n) { z.set(e, "" === t ? !1 : t, n) } }, x.each(["width", "height"], function(e, n) { x.attrHooks[n] = { set: function(e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } } })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) { x.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), x.support.style || (x.attrHooks.style = { get: function(e) { return e.style.cssText || t }, set: function(e, t) { return e.style.cssText = t + "" } }), x.support.optSelected || (x.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { x.propFix[this.toLowerCase()] = this }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() { x.valHooks[this] = { set: function(e, n) { return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t } }, x.support.checkOn || (x.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() { return !0 }

    function ot() { return !1 }

    function at() { try { return a.activeElement } catch (e) {} }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) { return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try { i[g]() } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = x.event.handlers.call(this, e, u), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({ elem: u, handlers: o })
                    }
            return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== at() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === at() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function() { return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function(e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n) }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() { this.isImmediatePropagationStopped = it, this.stopPropagation() }
    }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)) },
        teardown: function() { return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t) }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), x.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0) })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0) }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t },
        teardown: function() { return x.event.remove(this, "._change"), !Z.test(this.nodeName) }
    }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = 0,
            r = function(e) { x.event.simulate(t, e.target, x.event.fix(e), !0) };
        x.event.special[t] = { setup: function() { 0 === n++ && a.addEventListener(e, r, !0) }, teardown: function() { 0 === --n && a.removeEventListener(e, r, !0) } }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) { return x().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() { x.event.add(this, e, i, r, n) })
        },
        one: function(e, t, n, r) { return this.on(e, t, n, r, 1) },
        off: function(e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() { x.event.remove(this, e, r, n) }) },
        trigger: function(e, t) { return this.each(function() { x.event.trigger(e, t, this) }) },
        triggerHandler: function(e, n) { var r = this[0]; return r ? x.event.trigger(e, n, r, !0) : t }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = { children: !0, contents: !0, next: !0, prev: !0 };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) { return this.pushStack(ft(this, e || [], !0)) },
        filter: function(e) { return this.pushStack(ft(this, e || [], !1)) },
        is: function(e) { return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    });

    function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }
    x.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return x.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return x.dir(e, "parentNode", n) }, next: function(e) { return pt(e, "nextSibling") }, prev: function(e) { return pt(e, "previousSibling") }, nextAll: function(e) { return x.dir(e, "nextSibling") }, prevAll: function(e) { return x.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function(e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return x.sibling(e.firstChild) }, contents: function(e) { return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes) } }, function(e, t) { x.fn[e] = function(n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i) } }), x.extend({
        filter: function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) { return 1 === e.nodeType })) },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) { return !!t.call(e, r, e) !== n });
        if (t.nodeType) return x.grep(e, function(e) { return e === t !== n });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) { return x.inArray(e, t) >= 0 !== n })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) { return x.access(this, function(e) { return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)) }, null, e, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() { return x.clone(this, e, t) }) },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) { return [e.nextSibling, e.parentNode] }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function Ht(e) { return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e }

    function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function _t(e, t) { var n, r = 0; for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval")) }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) { Ct.test(e.type) && (e.defaultChecked = e.checked) }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) { o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u) }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) { x(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = x.isFunction(e); return this.each(function(n) { x(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = { BODY: "block" },
        Qt = { position: "absolute", visibility: "hidden", display: "block" },
        Kt = { letterSpacing: 0, fontWeight: 400 },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o); return a }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() { return rn(this, !0) },
        hide: function() { return rn(this) },
        toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { nn(this) ? x(this).show() : x(this).hide() }) }
    }), x.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) {}
            }
        },
        css: function(e, n, r, i) { var o, a, s, l = x.camelCase(n); return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a }
    }), e.getComputedStyle ? (Rt = function(t) { return e.getComputedStyle(t, null) }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) { return e.currentStyle }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) { x.cssHooks[n] = { get: function(e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function(e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function(e, n) { return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) { x.cssHooks[n] = { get: function(e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display")) }, x.expr.filters.visible = function(e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({ serialize: function() { return x.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e)) }).map(function(e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function(e) { return { name: t.name, value: e.replace(fn, "\r\n") } }) : { name: t.name, value: n.replace(fn, "\r\n") } }).get() } }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() { o(this.name, this.value) });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { x.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try { yn = o.href } catch (Ln) { yn = a.createElement("a"), yn.href = "", yn = yn.href }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) { var u; return o[l] = !0, x.each(e[l] || [], function(e, l) { var c = l(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), u }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) { var r, i, o = x.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && x.extend(!0, e, r), e }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function(e) { o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) }).complete(r && function(e, t) { s.each(r, o || [e.responseText, t, e]) }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { x.fn[t] = function(e) { return this.on(t, e) } }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e) },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === b ? a : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return b || (e = v[n] = v[n] || e, y[e] = t), this },
                    overrideMimeType: function(e) { return b || (p.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) { var t = e || w; return u && u.abort(t), k(0, t), this }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() { C.abort("timeout") }, p.timeout));
                try { b = 1, u.send(y, k) } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) { return x.get(e, t, n, "json") },
        getScript: function(e, n) { return x.get(e, t, n, "script") }
    }), x.each(["get", "post"], function(e, n) { x[n] = function(e, r, i, o) { return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) { u.unshift(s); break }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) { a = s; break }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1])); break }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (p) { return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o } }
        }
        return { state: "success", data: t }
    }
    x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() { n && n.onload(t, !0) }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Fn.pop() || x.expando + "_" + vn++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function(n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() { return s || x.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function() { s = arguments }, i.always(function() { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t }), "script") : t });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() { var e; for (e in Pn) Pn[e](t, !0) };

    function In() { try { return new e.XMLHttpRequest } catch (t) {} }

    function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && In() || zn() } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try { for (s in i) l.setRequestHeader(s, i[s]) } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try { c = l.statusText } catch (f) { c = "" }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) { i || o(-1, d) }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() { r && r(t, !0) }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() { return setTimeout(function() { Xn = t }), Xn = x.now() }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() { delete l.elem }),
            l = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) { t ? Gn.unshift(e) : Gn.push(e) }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() { s.unqueued || l() }), s.unqueued++, u.always(function() { u.always(function() { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
        for (r in t)
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() { x(e).hide() }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) }
    x.Tween = rr, rr.prototype = { constructor: rr, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function() { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function(e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { x.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function(e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function() { Un || (Un = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function() { clearInterval(Un), Un = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) { return x.grep(x.timers, function(t) { return e === t.elem }).length }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) { x.offset.setOffset(this, e, t) });
        var n, r, o = { top: 0, left: 0 },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent; return e || s }) }
    }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) { return x.access(this, function(e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) }
    });

    function or(e) { return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
    x.each({ Height: "height", Width: "width" }, function(e, n) {
        x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) { var o; return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s) }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() { return x }))
})(window);
jQuery.noConflict();
jQuery.fn.changeTag = function(tag) {
    var replacement = jQuery('<' + tag + '>');
    var attributes = {};
    jQuery.each(this.get(0).attributes, function(index, attribute) {
        attributes[attribute.name] = attribute.value;
    });
    replacement.attr(attributes);
    replacement.data(this.data());
    var contents = this.children().clone(true);
    replacement.append(contents);
    this.replaceWith(replacement);
    return replacement;
};

/* jquery-migrate: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-includes/js/jquery/jquery-migrate.min.js) */
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try { return Object.defineProperty(t, a, { configurable: !0, enumerable: !0, get: function() { return r(o), i }, set: function(e) { r(o), i = e } }), n } catch (s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() { i = {}, e.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", { size: 1 }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() { return null },
            c = e.attrHooks.value && e.attrHooks.value.set || function() { return n },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = { get: function(t, r) { var a, i = e.prop(t, r); return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n }, set: function(t, n, r) { var a; return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r } }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = { get: function(e, t) { var n = (e.nodeName || "").toLowerCase(); return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null) }, set: function(e, t) { var a = (e.nodeName || "").toLowerCase(); return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n) } };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) { var i; return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments) }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) { return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null) }, e.uaMatch = function(e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) { return new t.fn.init(e, n) }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) { return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n) }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({ converters: { "text json": e.parseJSON } });
        var b = e.fn.data;
        e.fn.data = function(t) { var a, i, o = this[0]; return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i) };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() { return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments) }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) { return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) { return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1")) };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) { e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i) }, e.event.remove = function(e, t, n, r, a) { x.call(this, e, A(t) || "", n, r, a) }, e.fn.error = function() { var e = Array.prototype.slice.call(arguments, 0); return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this) }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) { var r = (e._data(this, "lastToggle" + t.guid) || 0) % o; return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1 };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) { return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this) }, e.fn.die = function(t, n) { return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this) }, e.event.trigger = function(e, t, n, a) { return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a) }, e.each(S.split("|"), function(t, n) { e.event.special[n] = { setup: function() { var t = this; return t !== document && (e.event.add(document, n + "." + e.guid, function() { e.event.trigger(n, null, t, !0) }), e._data(this, n, e.guid++)), !1 }, teardown: function() { return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1 } } })
    }(jQuery, window);

var dtGlobals = {};
dtGlobals.isMobile = (/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent));
dtGlobals.isAndroid = (/(Android)/.test(navigator.userAgent));
dtGlobals.isiOS = (/(iPhone|iPod|iPad)/.test(navigator.userAgent));
dtGlobals.isiPhone = (/(iPhone|iPod)/.test(navigator.userAgent));
dtGlobals.isiPad = (/(iPad)/.test(navigator.userAgent));
dtGlobals.isBuggy = (navigator.userAgent.match(/AppleWebKit/) && typeof window.ontouchstart === 'undefined' && !navigator.userAgent.match(/Chrome/));
dtGlobals.isWindowsPhone = navigator.userAgent.match(/IEMobile/i);
dtGlobals.customColor = 'red';
if (dtGlobals.isMobile) {
    document.documentElement.className += " mobile-true";
} else {
    document.documentElement.className += " mobile-false";
}
dtGlobals.logoURL = false;
dtGlobals.logoH = false;
dtGlobals.logoW = false;

jQuery(document).ready(function($) {
    if (dtGlobals.isWindowsPhone) {
        $("body").addClass("ie-mobile");
    }
    if (!$("html").hasClass("old-ie")) {
        dtGlobals.isPhone = false;
        dtGlobals.isTablet = false;
        dtGlobals.isDesktop = false;

        var size = window.getComputedStyle(document.body, ":after").getPropertyValue("content");

        if (size.indexOf("phone") != -1 && dtGlobals.isMobile) {
            dtGlobals.isPhone = true;
        } else if (size.indexOf("tablet") != -1 && dtGlobals.isMobile) {
            dtGlobals.isTablet = true;
        } else {
            dtGlobals.isDesktop = true;
        };

    }
    /* !Debounced resize event */
    /*
    var dtResizeTimeout;
    if(dtGlobals.isMobile && !dtGlobals.isWindowsPhone){
    	$(window).bind("orientationchange", function(event) {
    			clearTimeout(dtResizeTimeout);
    			dtResizeTimeout = setTimeout(function() {
    				$(window).trigger( "debouncedresize" );
    			}, 200);
    	});
    }else{
    	$(window).on("resize", function() {
    		clearTimeout(dtResizeTimeout);
    		dtResizeTimeout = setTimeout(function() {
    			$(window).trigger( "debouncedresize" );
    		}, 200);
    	});
    }*/
    /* Debounced resize event: end */
});;

/* qfe_composer_front_js: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/plugins/qfy_editor/assets/js/qfy_editor_front.js) */
document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function() {
    var prefix = ['-webkit-', '-o-', '-moz-', '-ms-', ""];
    for (var i in prefix) { if (prefix[i] + 'transform' in document.documentElement.style) document.documentElement.className += " vc_transform "; }
})();

/*
   On document ready jQuery will fire set of functions.
   If you want to override function behavior then copy it to your theme js file
   with the same name.
*/



function swiper_event() {
    jQuery(".swiper-container:not(.loaded)").each(function() {
        var pagination = jQuery(this).attr("data-swiper-pagination");
        var spaceBetween = jQuery(this).attr("data-swiper-space") == "0" ? false : jQuery(this).attr("data-swiper-space");
        var loop = jQuery(this).attr("data-swiper-loop") == "1" ? true : false;
        var autoheight = jQuery(this).attr("data-swiper-autoheight") == "1" ? true : false;
        var autoplay = jQuery(this).attr("data-swiper-autoplay") > 0 ? { delay: jQuery(this).attr("data-swiper-autoplay") * 1 } : false;
        var freemodel = jQuery(this).attr("data-swiper-freemodel") == "1" ? true : false;
        var centeredSlides = jQuery(this).attr("data-swiper-center") == "1" ? true : false;
        var width = jQuery(this).attr("data-swiper-width");
        if (width) {
            var slidesPerView = "auto";
        } else {
            var slidesPerView = "1";
        }
        var lazy = jQuery(this).attr("data-swiper-lazy") == "1" ? true : false;

        jQuery(this).addClass("loaded");
        var swiper = new Swiper(jQuery(this), {
            slidesPerView: slidesPerView,
            autoplay: autoplay,
            spaceBetween: spaceBetween * 1,
            freeMode: freemodel,
            autoHeight: autoheight,
            centeredSlides: centeredSlides,
            grabCursor: true,
            loop: loop,
            lazy: lazy,
            pagination: { el: '.swiper-pagination', clickable: true, type: pagination, },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    })

}

function image_lazy_event() {
    if (jQuery("[data-delay-image='1']").length > 0) {
        jQuery("[data-delay-image='1']").lazy({
            effect: 'fadeIn',
            effectTime: 400,
            threshold: 800,
        });
    }
}

function vc_js_init() {
    //BEGIN
    if (jQuery(".swiper-container:not(.loaded)").length > 0) {
        if (typeof jQuery.fn.Swiper == "undefined") {
            jQuery.getScript("/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.js").done(function() {
                jQuery('head').append('<link href="/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.css" rel="stylesheet" type="text/css" />');
                swiper_event();
            })
        } else {
            swiper_event();
        }
    }
    image_lazy_event();

    jQuery("#shopping-cart-bitcommerce .carsize:not(.pulse1)").addClass("pulse1");

    jQuery(".srollupdown:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var all = jQuery(this).attr("data-scroll-all");
        var num = jQuery(this).attr("data-scroll-num");
        var speed = jQuery(this).attr("data-scroll-speed");
        var delay = jQuery(this).attr("data-scroll-delay");
        var slideBox = jQuery(this).find("ul:first");

        var allheight = slideBox.css("height").replace("px", "") * 1;

        var delay = delay || 1000,
            speed = speed || 20;
        var tid = null,
            pause = false;
        var s = function() {
            slideBox.attr("style", "overflow:hidden !important;height:" + allheight + "px;");
            slideBox.find("li").removeClass("displaynone");
            tid = setInterval(slide_scroll, speed);
        }
        var slide_scroll = function() {
            if (pause) return;
            slideBox.scrollTop(slideBox.scrollTop() + 2);
            var scrolltop = slideBox.scrollTop();
            if (num > 1) {
                var first_height = 0;
                var marginbottom = 0;
                slideBox.find("li").each(function(i) {
                    if (i < num) {
                        first_height = first_height * 1 + jQuery(this).css("height").replace("px", "") * 1;
                        marginbottom = marginbottom * 1 + jQuery(this).css("margin-bottom").replace("px", "") * 1;
                    }
                })
            } else {
                var first_height = slideBox.find("li:eq(0)").css("height").replace("px", "");
                var marginbottom = slideBox.find("li:eq(0)").css("margin-bottom").replace("px", "");
            }
            if (scrolltop >= first_height * 1 + marginbottom * 1) {
                clearInterval(tid);
                if (num > 1) {
                    slideBox.find("li").each(function(i) {
                        if (i < num) {
                            slideBox.append(slideBox.find("li")[0]);
                        }
                    })
                } else {
                    slideBox.append(slideBox.find("li")[0]);
                }
                slideBox.scrollTop(0);
                setTimeout(s, delay);
            }
        }
        slideBox[0].onmouseover = function() { pause = true; }
        slideBox[0].onmouseout = function() { pause = false; }
        setTimeout(s, delay);
    });
    jQuery('.qfy_datatable_event:not(.loaded)').each(function() {
        $this = jQuery(this);
        if (typeof jQuery.fn.DataTable == "undefined") {
            jQuery.getScript("/FeiEditor/bitSite/js/dataTables/jquery.dataTables.js").done(function() {
                qfy_dataTable_event($this);
            })
        } else {
            qfy_dataTable_event($this);
        }
    })
    jQuery(".opentip:not(.played)").each(function() {
        var $this = jQuery(this);
        var imageurl = jQuery(this).attr("op-image");
        var title = jQuery(this).attr("op-title");
        var data_pop = jQuery(this).attr("op-style");
        var titlealign = jQuery(this).attr("op-titlealign");
        var stylealign = jQuery(this).attr("op-stylealign");
        var tiptitle = "";
        var download = false;
        if (imageurl) {

            tiptitle += "<img style='max-width:100%;' src='" + imageurl + "'  />";
        }
        if (title) {
            tiptitle += "<div style='margin-top:5px;text-align:" + titlealign + "'>" + title + "</div>";
        }
        if (stylealign) {
            var data = { tipJoint: stylealign, fixed: true, style: data_pop };
        } else {
            var data = { style: data_pop };
        }
        if (imageurl) {
            jQuery("<img />").attr("src", imageurl).load(function() {
                setTimeout(function() { new Opentip($this, tiptitle, data); }, 1500);
            })
            $this.addClass("played");

        } else {
            new Opentip($this, tiptitle, data);
            $this.addClass("played");
        }
    })

    jQuery('.qfy-jiathis:not(".loaded")').each(function() {

        var title = jQuery(this).find(".jiathis_style").attr("data-config-title");
        var url = jQuery(this).find(".jiathis_style").attr("data-config-url");
        var imageurl = jQuery(this).find(".jiathis_style").attr("data-config-pic");
        var str = "";
        if (title && url) {
            str = '<script type="text/javascript" >var jiathis_config={url:"' + url + '",summary:"",title:"' + title + '",pic:"' + imageurl + '"}</script>';
        }
        jQuery(this).append(str + '<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>').addClass("loaded");
    })
    jQuery('.video.preload:not(.played)').each(function() {
        jQuery(this).waypoint({
            handler: function(direction) {
                jQuery(this).addClass("played").attr("src", jQuery(this).attr("data-src"));
            },
            triggerOnce: true,
            offset: "95%",
        })
    })



    vc_royalSlider_gallery_init();
    if (top == self) {
        accordioncontent();
    }
    jQuery('.qfy-accordioncontent .a_content .panel-title').each(function() {
        var curr = jQuery(this);
        var pcontent = curr.closest(".a_content");
        curr.unbind();
        if (pcontent.hasClass("mo")) {
            curr.unbind().bind("mouseenter", function(e) {
                e.stopPropagation();
                var n = curr.next();
                var p = curr.closest(".qfy-accordioncontent");
                var activeicon = p.attr("activeicon");
                var normalicon = p.attr("normalicon");
                var animation = p.attr("animation");
                var hc = p.attr("hc");
                var display = n.css("display");
                if (hc == "true" && !curr.hasClass("active")) {
                    p.find(".a_content>section,.a_content>div").slideUp(animation, function() {
                        var now = jQuery(this);

                        now.prev().removeClass("active");
                        now.prev().find("i").attr("class", normalicon).css("font-size", p.attr("data-normalicon-size") + "px").css("left", p.attr("data-normalicon-position") + "px").css("top", p.attr("data-normalicon-pt") + "px");
                        if (p.attr("data-normalicon-scale") != "1") {
                            now.prev().find("i").css("transform", "scale('" + p.attr("data-normalicon-scale") + "','" + p.attr("data-normalicon-scale") + "')");
                        }
                    });
                }
                if (display == "none") {
                    n.next().css("visibility", "hidden");
                    curr.addClass("active");
                    n.slideDown(animation, function() {
                        n.next().css("visibility", "visible");
                        if (jQuery("body").width() < 760 && !curr.hasClass("defaultclick")) {
                            jQuery("html, body").animate({ scrollTop: curr.offset().top - 30 });
                        }
                        curr.removeClass("defaultclick");
                        if (n.find(".qfe_map_wraper iframe").length > 0) {
                            n.find(".qfe_map_wraper iframe").attr("src", n.find(".qfe_map_wraper iframe").attr("src"));
                        }
                    });
                    curr.find("i").attr("class", activeicon).css("font-size", p.attr("data-activeicon-size") + "px").css("left", p.attr("data-activeicon-position") + "px").css("top", p.attr("data-activeicon-pt") + "px");
                    if (p.attr("data-activeicon-scale") != "1") {
                        curr.find("i").css("transform", "scale('" + p.attr("data-activeicon-scale") + "','" + p.attr("data-activeicon-scale") + "')");
                    }
                    n.find(".qfe_start_animation").each(function(i) {
                        var $this = this;
                        jQuery($this).removeClass("qfe_start_animation");
                        setTimeout(function() { qfe_animate_fun($this); }, 50);

                    })
                }
            })
        } else {
            curr.unbind().click(function(e) {
                e.stopPropagation();
                var n = jQuery(this).next();
                var p = jQuery(this).closest(".qfy-accordioncontent");
                var activeicon = p.attr("activeicon");
                var normalicon = p.attr("normalicon");
                var animation = p.attr("animation");
                var hc = p.attr("hc");
                var display = n.css("display");
                if (hc == "true") {

                    p.find(".a_content>section,.a_content>div").slideUp(animation, function() {
                        var now = jQuery(this);
                        now.prev().removeClass("active");
                        now.prev().find("i").attr("class", normalicon).css("font-size", p.attr("data-normalicon-size") + "px").css("left", p.attr("data-normalicon-position") + "px").css("top", p.attr("data-normalicon-pt") + "px");
                        if (p.attr("data-normalicon-scale") != "1") {
                            now.prev().find("i").css("transform", "scale(" + p.attr("data-normalicon-scale") + "," + p.attr("data-normalicon-scale") + ")");
                        }
                    });
                }


                if (display == "none") {
                    n.next().css("visibility", "hidden");
                    curr.addClass("active");
                    curr.find("i").attr("class", activeicon).css("font-size", p.attr("data-activeicon-size") + "px").css("left", p.attr("data-activeicon-position") + "px").css("top", p.attr("data-activeicon-pt") + "px");

                    if (p.attr("data-activeicon-scale") != "1") {
                        curr.find("i").find("i").css("transform", "scale(" + p.attr("data-activeicon-scale") + "," + p.attr("data-activeicon-scale") + ")");
                    }
                    n.slideDown(animation, function() {
                        n.next().css("visibility", "visible");
                        if (jQuery("body").width() < 760 && !curr.hasClass("defaultclick")) {
                            jQuery("html, body").animate({ scrollTop: curr.offset().top - 30 });
                        }
                        curr.removeClass("defaultclick");
                        if (n.find(".qfe_map_wraper iframe").length > 0) {
                            n.find(".qfe_map_wraper iframe").attr("src", n.find(".qfe_map_wraper iframe").attr("src"));
                        }
                    });

                    n.find(".qfe_start_animation").each(function(i) {
                        var $this = this;
                        jQuery($this).removeClass("qfe_start_animation");
                        setTimeout(function() { qfe_animate_fun($this); }, 50);

                    })
                } else {

                    n.slideUp(animation, function() {
                        curr.removeClass("active");
                        curr.find("i").attr("class", normalicon).css("font-size", p.attr("data-normalicon-size") + "px").css("left", p.attr("data-normalicon-position") + "px").css("top", p.attr("data-normalicon-pt") + "px");
                        if (p.attr("data-normalicon-scale") != "1") {
                            curr.find("i").find("i").css("transform", "scale(" + p.attr("data-normalicon-scale") + "," + p.attr("data-normalicon-scale") + ")");
                        }
                    });
                }
            });
        }
    })



    jQuery('.qfy-accordioncontent:not(.loaded)').each(function() {
        jQuery(this).addClass("loaded");
        var accordion_default = jQuery(this).attr("default");

        if (accordion_default > 0) {
            var defaultobj = jQuery(this).find(".a_content .panel-title:eq(" + (accordion_default - 1) + ")");
            var display = defaultobj.next().css("display");
            if (top != self && jQuery("body").hasClass("compose-mode")) {
                //ç¼–è¾‘æƒ…å†µ
                if (display == "block") {
                    defaultobj.next().hide();
                    display = defaultobj.next().css("display");
                }
            }
            if (display == "none") {
                defaultobj.addClass("defaultclick");
                if (defaultobj.closest(".a_content").hasClass("mo")) {
                    defaultobj.mouseenter();
                } else {
                    defaultobj.click();
                }
            }

        }

    })

    jQuery(".dl-qfymobile-menu:not(.loaded)").each(function() {
        var backCap = jQuery(this).find(".menu-back").html();
        jQuery(this).find(".children.dl-submenu").prepend("<li class='menu-item dl-back'><a href='#'><span>" + backCap + "</a></li>");
        jQuery(this).addClass("loaded").dlmenu();
    })

    jQuery(".qfy_bg_canvas_1:not(.loaded)").each(function() {
        jQuery(this).addClass("loaded");
        jQuery(this).qfy_bg_canvas_1();
    });
    if (top == self) {
        jQuery(".background-media.mediagallery:not(.loaded)").each(function() {
            var $this = jQuery(this);
            jQuery(this).addClass("loaded On");
            var imagebgs = jQuery(this).attr("data-imagebgs");

            var imagebgs_arr = imagebgs.split("|^|");
            var imagebgs_count = imagebgs_arr.length;
            var imagebgs_current = 0;
            var time = jQuery(this).attr("data-time") ? jQuery(this).attr("data-time") : 3;
            var thishtml = $this.prop("outerHTML");
            var tmp = "";
            for (var i = 0; i < imagebgs_count - 1; i++) {
                $this.before(thishtml);
                $this.prev().css({ 'opacity': '0', 'background-image': 'url(' + imagebgs_arr[i] + ')' }).removeAttr("data-imagebgs").removeClass("On");
            }
            var p = jQuery(this).parent();
            setInterval(function() {
                if (p.attr("id")) {
                    imagebgs_current = p.find(".background-media.On").index('#' + p.attr("id") + '>.background-media');
                } else {
                    imagebgs_current = p.find(".background-media.On").index('.background-media');
                }
                p.find(".background-media.On").removeClass("On").css({ 'opacity': '0' })
                if (imagebgs_current == imagebgs_count - 1) {
                    p.find(".background-media:eq(0)").addClass("On").css({ 'opacity': '1' });
                } else {
                    p.find(".background-media:eq(" + (imagebgs_current + 1) + ")").addClass("On").css({ 'opacity': '1' });
                }
            }, time * 1000);

        })

        if (jQuery(".qfy-comments .commentlist:hidden").length > 0) {
            jQuery(".qfy-comments").each(function() {

                var p = jQuery(this);
                if (p.find(".commentlist:visible").length > 0) return;
                var loadhtml = "<div class='commentlist_loading' style='text-align:center;height:30px;margin:15px auto;' ><img src='/qfy-content/plugins/qfbook/templates/default/images/loader.gif' /></div>";
                p.find(".commentlist").after(loadhtml);

                var form = p.find("form#commentform");
                var comment_post_ID = form.find("#comment_post_ID").val();
                var url = form.attr("action");

                jQuery.post(url, { action: "search", comment_post_ID: comment_post_ID, short_atts: p.attr("data-atts") }, function(data) {
                    if (data.indexOf("success") > -1) {

                        var tmp = data.split('|<result>|');
                        var commentlist = $(tmp).find(".commentlist");
                        p.find(".commentlist").html(commentlist.html());
                    }
                    p.find(".commentlist").show();
                    p.find(".commentlist_loading").remove();
                })

            })
        }
    }

    var objs = jQuery(".qfy-icons_list .qfy-icon");
    objs.each(function() {
        var obj = jQuery(this);
        var name = obj.attr("data-desc");
        var image = obj.attr("data-image");
        var tj = obj.attr("data-tj") == "0" ? "top" : "bottom";
        var ta = obj.attr("data-ta");
        var width = obj.attr("data-width");
        var align = "left";
        if (ta == "1") align = "right";
        else if (ta == "2") align = "center";
        obj.attr("title", '');
        var text = "";
        if (name) {
            text = "<div style='text-align:" + align + ";'>" + base64_decode(name) + "</div>";
        }
        if (image) {
            if (width) {
                var title = "<div style='width:" + width + "px;text-align:center;'><img src='" + image + "' style='max-width:100%;' /><div style='word-break: break-all;'>" + text + "</div></div>";
            } else {
                var title = "<div style='text-align:center;  '><img src='" + image + "' width='160' style='max-width:100%;' /><div style='word-break: break-all;'>" + text + "</div></div>";
            }
            var img = new Image();
            img.onload = img.onerror = function() {
                var data = { tipJoint: tj, style: "dark" };
                new Opentip(obj, title, data);
            };
            img.src = image;
        } else if (text) {
            if (width) {
                var last = "<div style='width:" + width + "px;word-break: break-all;'>" + text + "</div>";
            } else {
                var last = "<div style='word-break: break-all;'>" + text + "</div>";
            }

            var data = { tipJoint: tj, style: "dark" };
            new Opentip(obj, last, data);
        }
    })
    jQuery(".qfyvideo").unbind().mouseenter(function() {
        if (!jQuery(this).parent().hasClass("qfy_popup")) {
            jQuery(this).get(0).play();
        }
    }).mouseleave(function() {
        if (!jQuery(this).parent().hasClass("qfy_popup")) {
            if (jQuery(this).get(0).currentTime > 0) {
                jQuery(this).get(0).load();
            }
        }
    })


    jQuery('[data-ride="vc-carousel"]').each(function() {
        qfy_carousel_fun(jQuery(this))
    })
    jQuery(".qfy_scroll_box:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var box = jQuery(this).attr("id");
        var delay = jQuery(this).attr("data-delay");
        var speed = jQuery(this).attr("data-speed");
        var h = jQuery(this).attr("data-h");
        slideLine(box, "div", delay, speed, h);
    });
    jQuery("a[href^='qfy_notice']").unbind().click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var id = jQuery(this).attr("href");
        if (jQuery("#" + id).length > 0) {
            notice_pre_event("#" + id + " .notice_warp", "preview");
        }
    })

    jQuery(".qfyanimate:not(.qfyanimated)").each(function() {
        var animaleinbegin = jQuery(this).attr("data-animaleinbegin");
        if (!animaleinbegin) animaleinbegin = "bottom-in-view";
        jQuery(this).waypoint({
            handler: function(direction) {
                var delay = jQuery(this).attr("data-delay");
                var duration = jQuery(this).attr("data-duration");
                if (delay === "") {
                    //ä¸“æ ä½¿ç”¨
                    if (jQuery(this).hasClass("qfy-column-inner")) {
                        delay = jQuery(this).index() * 0.1 / 2;
                    }
                }
                var animalename = jQuery(this).attr("data-animalename");
                if (duration) {
                    jQuery(this).css("animation-duration", duration + "s");
                }
                jQuery(this).css("animation-delay", delay + "s").css("animation-name", animalename).css("visibility", "visible");
                jQuery(this).addClass("qfyanimated");
            },
            triggerOnce: true,
            offset: animaleinbegin,
        })
    })

    typed_event();

    prenext_event();
    //END
}

function vc_js_init2() {
    //console.trace();
    init_usermange_detail();
    vc_slidersBehaviour();
    vc_waypoints();
    vc_teaserGrid();
    vc_carouselBehaviour();
    vc_plugin_flexslider();
    resizefullpageheader();
    bitLibLayout();
    bit_circliful();
    bit_counter();
    bit_counterdown();
    bit_newgallery();
    qfy_jplayer_init();
    bit_myaccountLayout();
    bit_qfbook();
    bit_qfbookform();
    setTimeout(function() { bit_reloadiframevideo(); }, 1000);

}

jQuery(document).ready(function($) {

    if (top == self) {
        vc_js_init();
        vc_js_init2();
    }
    jQuery(document).click(function(e) {
        if (jQuery("body.clicktoaddmodel").length > 0) {
            var target = jQuery(e.target);
            if (target.closest(".vc-element.vc-vc_row").length == 0) {
                jAlert("äº²ï¼Œæ‚¨ç‚¹åœ¨äº†ä¸èƒ½æ’å…¥åŒºå—çš„åœ°æ–¹ã€‚è¯·é€‰æ‹©å†…å®¹åŒºåŸŸçš„ä¸€ä¸ªåŒºå—ã€‚");
                return false;
            }
        }
    });

}); // END jQuery(document).ready

jQuery(window).resize(function() {
    //æ‰‹æœºä¸Šæ»šåŠ¨ä¼šè§¦å‘è¿™ä¸ªresize
    var body_width = jQuery("body").width();
    if (body_width > 768) {
        bitLibLayout();
    }
    var maxwidth = 0;
    jQuery(".qfe_gallery .qfe_gallery_slides").find('img').each(function() {
        if (jQuery(this).width() > maxwidth) {
            maxwidth = jQuery(this).width();
        }
    })
    if (maxwidth > body_width) {
        vc_plugin_flexslider();
    }
});
jQuery(window).on("debouncedresize", function() {
    jQuery(".ts-circliful-counter").each(function() {
        if ("true" == jQuery(this).attr("data-responsive")) {
            var t = jQuery(this),
                e = parseInt(jQuery(this).parent().width()),
                a = parseInt(jQuery(this).attr("data-size"));
            e != a && (t.empty(), t.circliful())
        }
    })
});

function resizefullpageheader() {
    if (jQuery(".bit-html .fullscreenpage.fullpage_layout2").length > 0 || jQuery(".bit-html .fullscreenpage.fullpage_layout3").length > 0 || jQuery(".bit-html .fullscreenpage.fullpage_layout4").length > 0) {
        jQuery(".bit-html .fullscreenpage #fullscreenheader").css("margin-top", "-" + (jQuery(".bit-html .fullscreenpage #fullscreenheader").height() / 2) + "px");
    }
}

function typed_event() {
    if (jQuery(".qfy-simple_header:not(.loaded)").length == 0) return;
    if (typeof Typed != "function") {
        jQuery.getScript("/FeiEditor/bitSite/js/typed.min.js").done(function() {
            _typed_event();
        })
    } else {
        _typed_event();
    }
}

function _typed_event() {
    jQuery(".qfy-simple_header:not(.loaded)").each(function() {
        var $this = jQuery(this);
        $this.addClass("loaded");
        var load = $this.attr("data-load");
        var id = $this.attr("id");
        var loop = $this.attr("data-loop") == "true" ? true : false;
        if ($this.attr("data-typeSpeed")) {
            var typeSpeed = parseInt($this.attr("data-typeSpeed"));
        } else {
            var typeSpeed = 30;
        }

        if (load == "1") {
            jQuery(this).waypoint({
                handler: function(direction) {
                    Typed.new("#" + id + " .qfy-typed", {
                        stringsElement: $this.find(".inner"),
                        typeSpeed: typeSpeed,
                        backDelay: 500,
                        loop: loop,
                        contentType: 'html', // or text
                        loopCount: null,
                    });
                },
                triggerOnce: true,
                offset: "bottom-in-view",
            })

        } else {
            Typed.new("#" + id + " .qfy-typed", {
                stringsElement: $this.find(".inner"),
                typeSpeed: typeSpeed,
                backDelay: 500,
                loop: loop,
                contentType: 'html', // or text
                loopCount: null,
            });
        }
    })
}

function prenext_event() {
    var lrmiddlelayout = jQuery("#page .lrmiddlelayout:first:not(.loaded)");
    if (lrmiddlelayout.length > 0) {
        lrmiddlelayout.addClass("loaded");
        jQuery(".lrmiddlelayout.wrap").remove();
        var pre_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;left:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';
        pre_html += lrmiddlelayout.find(".pre_inner").prop("outerHTML");
        pre_html += '</div></div>';
        var next_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;right:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';
        next_html += lrmiddlelayout.find(".next_inner.first").prop("outerHTML");
        next_html += '</div></div>';
        jQuery("body").append(pre_html + next_html);
    }
    if (jQuery("#page .lrmiddlelayout").length == 0) {
        jQuery(".lrmiddlelayout.wrap").remove();
    }
}

function bit_circliful(obj) {
    //don't support ie8
    if (jQuery.browser.version < 10.0) {
        return false;
    }
    if ("undefined" != typeof obj) {
        obj = obj.find(".ts-circliful-counter:not(.loaded)");
    } else {
        obj = jQuery(".ts-circliful-counter:not(.loaded)");
    }
    if (obj.length == 0) return;
    if (typeof jQuery.fn.circliful == "undefined") {
        jQuery.getScript("/qfy-content/plugins/qfy_editor/js/jquery.circliful.min.js").done(function() {
            _bit_circliful(obj);
        })
    } else {
        _bit_circliful(obj);
    }

}

function _bit_circliful(obj) {
    "undefined" != typeof jQuery.fn.waypoint && "undefined" != typeof jQuery.fn.circliful && obj.each(function() {
        jQuery(this).bind("inview", function(t, e, a, i) {
            if (e) {
                var r = jQuery(this);
                "top" == i || "bottom" == i || r.addClass("ts-circliful-visible")
            } else {
                var r = jQuery(this);
                r.removeClass("ts-circliful-visible")
            }
        })

        jQuery(this).addClass("loaded").circliful();

    });
}

function formatNumber(s, o) {
    s = s + "";
    if (/[^0-9\.]/.test(s)) return false;
    s = s.replace(/^(\d*)$/, "$1.");
    s = s.replace(".", o);
    var re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    s = s.substring(0, s.length - 1);
    return s;
}

function qfy_dataTable_event($this) {
    $this.addClass("loaded");
    var alltext = base64_decode($this.attr("data-r-alltext"));
    var obj = jQuery.parseJSON(alltext);

    $this.DataTable({
        "lengthMenu": [
            [20, 40, 100, -1],
            [20, 40, 100, "å…¨éƒ¨"]
        ],
        "searching": $this.attr("data-r-search") == "1" ? true : false,
        "ordering": $this.attr("data-r-order") == "1" ? true : false,
        //"filter": false,
        "info": $this.attr("data-r-info") == "1" ? true : false,
        "paginate": $this.attr("data-r-paginate") == "1" ? true : false,
        "processing": true,
        //"scrollX": true,
        "serverSide": true,
        "rowReorder": {
            selector: 'td:nth-child(2)'
        },
        "responsive": true,
        "language": {
            "lengthMenu": obj.table_text_lengthmenu + "_MENU_" + obj.table_text_dw,
            "zeroRecords": obj.table_text_zerorecords,
            "info": obj.table_text_info + " _PAGE_ of _PAGES_",
            "infoEmpty": obj.table_text_infoempty,
            "infoFiltered": "",
            "processing": obj.table_text_processing,
            "search": obj.table_text_search,
            "paginate": {
                "first": obj.table_text_first,
                "last": obj.table_text_last,
                "next": obj.table_text_next,
                "previous": obj.table_text_previous
            },
        },
        "ajax": {
            "url": "/admin/admin-ajax.php",
            "type": "POST",
            "data": function(d) {
                d.action = "qfy_dy_user_list";
                d.customcontenttype = $this.attr("data-r-type");
                d.customcontent = $this.attr("data-r-param");
            }
        },

    });
}

function bit_counter(obj) {
    if ("undefined" != typeof obj) {
        obj = obj.find(".ts-icon-counter");
        if (obj.length == 0) return false;
    } else {
        obj = jQuery(".ts-icon-counter");
    }
    if (obj.length == 0) return;
    if (typeof jQuery.fn.countTo == "undefined") {
        jQuery.getScript("/qfy-content/plugins/qfy_editor/js/jquery.countto.min.js").done(function() {
            _bit_counter(obj);
        })
    } else {
        _bit_counter(obj);
    }
}

function _bit_counter(obj) {

    "undefined" != typeof jQuery.fn.waypoint && obj.waypoint({
        handler: function() {
            var t = parseInt(jQuery(this).find(".ts-counter-value").attr("data-start")),
                e = parseInt(jQuery(this).find(".ts-counter-value").attr("data-end")),
                a = parseInt(jQuery(this).find(".ts-counter-value").attr("data-speed")),
                i = jQuery(this).find(".ts-counter-value").attr("data-before"),
                r = jQuery(this).find(".ts-counter-value").attr("data-after"),
                s = jQuery(this).find(".ts-counter-value").attr("data-format"),
                n = jQuery(this).find(".ts-counter-value").attr("data-plus"),
                o = jQuery(this).find(".ts-counter-value").attr("data-seperator"),
                u = jQuery(this).find(".ts-counter-value").attr("data-animation"),
                d = jQuery(this).find(".ts-font-icon");
            jQuery(this).find(".ts-counter-value").countTo({
                from: t,
                to: e,
                speed: a,
                refreshInterval: 50,
                decimals: 0,
                formatter: function(t, e) {
                    return i + t.toFixed(e.decimals) + r
                },
                onUpdate: function() {},
                onComplete: function() {

                    "true" == s ? "true" == n && "" != o ? jQuery(this).empty().html(i + formatNumber(e, o) + "+" + r) : "true" == n ? jQuery(this).empty().html(i + e + "+" + r) : "" != o ? jQuery(this).empty().html(i + formatNumber(e, o) + r) : jQuery(this).empty().html(i + e + r) : jQuery(this).empty().html(e), d.addClass(u), setTimeout(function() {
                        d.removeClass(u)
                    }, 2e3)
                }
            })
        },
        offset: "85%",
        triggerOnce: !0
    })

}

function bit_newgallery(obj) {

    if ("undefined" != typeof obj) {
        obj = obj.find(".royalSlider_gallery");
        if (obj.length == 0) return false;
    } else {
        obj = jQuery(".royalSlider_gallery");
    }
    if (obj.length == 0) return;
    if (typeof jQuery.fn.royalSlider == "undefined") {
        jQuery.getScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js").done(function() {
            _bit_newgallery(obj);
        })
    } else {
        _bit_newgallery(obj);
    }

}

function _bit_newgallery(obj) {
    obj.each(function() {
        var imageScaleMode = jQuery(this).attr("imageScaleMode") ? jQuery(this).attr("imageScaleMode") : "fit-if-smaller";
        var slidesOrientation = jQuery(this).attr("slidesOrientation") ? jQuery(this).attr("slidesOrientation") : "horizontal";
        //var autoScaleSlider = jQuery(this).attr("autoScaleSlider")==""?true:false;
        var arrowsNavAutoHide = jQuery(this).attr("arrowsNavAutoHide") == "true" ? true : false;
        //var showfullscreen = jQuery(this).attr("showfullscreen")=="true"?true:false;
        var g_width = jQuery(this).attr("g_width") ? jQuery(this).attr("g_width") : "";
        var g_height = jQuery(this).attr("g_height") ? jQuery(this).attr("g_height") : "";
        var transitionSpeed = jQuery(this).attr("transitionSpeed");
        var loop = jQuery(this).attr("g_loop") == "true" ? true : false;
        var visiblenearby = jQuery(this).attr("visiblenearby") == "true" ? true : false;
        var autoPlay = jQuery(this).attr("auto_Play") == "true" ? true : false;
        var arrowsNav = jQuery(this).attr("arrowsNav") == "true" ? true : false;

        var controlNavigation = jQuery(this).attr("controlNavigation");
        if (controlNavigation == "thumbnails") controlNavigation = "thumbnails";
        else if (controlNavigation == "none") controlNavigation = "none";
        else controlNavigation = "bullets";
        var thumbnails_orientation = jQuery(this).attr("thumbnails_orientation") ? jQuery(this).attr("thumbnails_orientation") : "horizontal";
        var disabledclick = jQuery(this).attr("disabledclick") == "true" ? false : true;
        jQuery(this).royalSlider({
            fullscreen: {
                enabled: true,
                nativeFS: true
            },
            controlNavigation: controlNavigation,
            slidesOrientation: slidesOrientation,
            autoScaleSlider: false,
            autoScaleSliderWidth: g_width,
            autoScaleSliderHeight: g_height,
            loop: loop,
            imageScaleMode: imageScaleMode,
            navigateByClick: disabledclick,
            numImagesToPreload: 2,
            arrowsNav: arrowsNav,
            arrowsNavAutoHide: arrowsNavAutoHide,
            arrowsNavHideOnTouch: true,
            keyboardNavEnabled: true,
            fadeinLoadedSlide: true,
            globalCaption: false,
            globalCaptionInside: false,
            addActiveClass: true,
            thumbs: {
                orientation: thumbnails_orientation,
                appendSpan: true,
                firstMargin: true,
                paddingBottom: 4
            },
            visibleNearby: {
                enabled: visiblenearby,
                centerArea: 0.7,
                center: true,
                breakpoint: 650,
                breakpointCenterArea: 0.64,
                navigateByCenterClick: true
            },
            autoPlay: {
                enabled: autoPlay,
                pauseOnHover: true
            }
        });
    })

}

function fullscreenclick(obj) {
    jQuery(obj).closest(".royalSlider_gallery").find(".rsFullscreenIcn").click();
}

function bit_myaccountLayout() {
    var defaultindex = getCookie("qfy_order_index");

    if (jQuery(".qfy_account.tablayout").length > 0 && jQuery(".qfy_account.tablayout.ontab").length == 0) {
        jQuery(".qfy_account > .bitcommerce").append('<div class="bitcommerce-tabs tabbed-content bitcommerce-tabs-info" style="min-height:500px;"><ul class="tabs"></ul></div>	');

        jQuery(".qfy_account .my_account_orders_h2").each(function(i) {
            var name = jQuery(this);
            var content = jQuery(this).next();
            if (content.hasClass("my_account_orders_h2") || content.hasClass("bitcommerce-tabs-info") || content.length == 0) {
                content_html = '<div style="min-height:400px;"></div>';
            } else {
                content_html = content.prop('outerHTML');
                content.remove();
            }
            jQuery('.bitcommerce-tabs-info ul.tabs').append('<li class="description_tab active"><a href="#tab-info-' + i + '" class="no-opennew">' + name.text() + '</a></li>');
            jQuery('.bitcommerce-tabs-info ul.tabs').after('<div style="word-break: break-all; display: block;" id="tab-info-' + i + '" class="panel entry-content">' + content_html + '</div>');
            name.remove();

        });
        jQuery(".qfy_account.tablayout").addClass("ontab");
        var titlesize = jQuery(".qfy_account.tablayout").attr("data-size");
        if (titlesize) {
            jQuery('.bitcommerce-tabs-info ul.tabs li a').css("font-size", titlesize + "px");
        }
        jQuery('.bitcommerce_account_subscriptions').hide();
        jQuery('.bitcommerce-tabs-info .panel').hide();
        jQuery('.bitcommerce-tabs-info ul.tabs li a').click(function() {

            var $tab = jQuery(this),
                $tabs_wrapper = $tab.closest('.bitcommerce-tabs-info');

            jQuery('ul.tabs li', $tabs_wrapper).removeClass('active');
            jQuery('div.panel', $tabs_wrapper).hide();
            jQuery('div' + $tab.attr('href'), $tabs_wrapper).show();
            $tab.parent().addClass('active');
            var index = $tab.parent().index();
            qfy_setCookie("qfy_order_index", index);
            return false;
        });
        if (defaultindex > 0) {
            jQuery('.bitcommerce-tabs-info ul.tabs li:eq(' + defaultindex + ') a').click();
        } else {
            jQuery('.bitcommerce-tabs-info ul.tabs li:first a').click();
        }
    }

}

function bit_qfbook() {
    setTimeout(function() {
        jQuery(".QFBOOKCalendar-text-message").each(function() {
            var $this = jQuery(this);
            var id = $this.attr("id");
            var val = $this.val();
            jQuery("#QFBOOKCalendar" + id).QFBOOKCalendar(jQuery.parseJSON(val));

        })
        jQuery(".QFBOOKCalendar-search-message").each(function() {
            var $this = jQuery(this);
            var id = $this.attr("id");
            var val = $this.val();
            jQuery(".QFBOOKSearch-wrapper" + id).QFBOOKSearch(jQuery.parseJSON(val));

        })
    }, 500)
}

function bit_qfbookform() {
    if (jQuery('#QFBOOKSearch-check-in-input').length > 0) {
        jQuery('#QFBOOKSearch-check-in-input').datepicker({
            minDate: new Date(),
            onSelect: function(dateText, inst) {
                jQuery("#QFBOOKSearch-check-out-input").datepicker("option", "minDate", dateText);
            }
        });
    }
    if (jQuery('#QFBOOKSearch-check-out-input').length > 0) {
        jQuery('#QFBOOKSearch-check-out-input').datepicker({
            minDate: new Date(),
            onSelect: function(dateText, inst) {
                jQuery("#QFBOOKSearch-check-in-input").datepicker("option", "maxDate", dateText);
            }
        });
    }
}

function bit_reloadiframevideo(time) {
    if (jQuery("div.ts_html5_video_frame_insert").length > 0) {
        jQuery("div.ts_html5_video_frame_insert").each(function() {
            var $this = jQuery(this);
            var auto_play = $this.attr("data-auto-play");
            if (auto_play == "true") {
                $this = $this.changeTag("iframe");
            } else {
                $this.unbind().click(function() {
                    $this.changeTag("iframe").attr("data-auto-play", "true");
                })
            }
        })
    }
}

function qfy_jplayer_init() {
    if (jQuery(".vc_jplayer_container:not(.played)").length == 0) return;
    if (typeof jQuery.fn.videoPlayer == "undefined") {
        jQuery.when(
            jQuery.getScript("/FeiEditor/bitSite/js/jsplayer/jplayer/jquery.jplayer.min.js"),
            jQuery.getScript("/FeiEditor/bitSite/js/jsplayer/jplayer/jplayer.cleanskin.js"),
            jQuery.Deferred(function(deferred) {
                jQuery(deferred.resolve);
            })
        ).done(function() {
            _qfy_jplayer_init();
        });

    } else {
        _qfy_jplayer_init();
    }

}

function _qfy_jplayer_init() {
    //éŸ³é¢‘
    jQuery(".vc_jplayer_container:not(.played)").each(function() {
        var title = jQuery.trim(jQuery(this).find(">.audio-info").html());
        var mp3 = jQuery(this).find(">.audio-info").attr("data-mp3");
        var autoplay = jQuery(this).find(">.audio-info").attr("data-auto");
        if (autoplay != 1) autoplay = null;
        var loop = jQuery(this).find(">.audio-info").attr("data-loop");
        if (loop == 1) { loop = true; } else { loop = false; };
        jQuery(this).find('>.webPlayer').videoPlayer({
            "name": title,
            "autoplay": autoplay,
            "keyEnabled": false,
            "loop": loop,
            "swfPath": "/FeiEditor/bitSite/js/jsplayer/jplayer",
            "size": { "width": "100%", },
            "media": { "mp3": mp3 }
        });
        jQuery(this).addClass("played");
    })
}

function bit_counterdown() {
    if (jQuery(".ts-countdown-parent").length == 0) return;
    if (typeof jQuery.fn.countEverest == "undefined") {
        jQuery.getScript("/FeiEditor/bitSite/js/jquery.vcsc.counteverest.min.js").done(function() {
            jQuery('head').append('<link href="/FeiEditor/bitSite/css/jquery.vcsc.counteverest.min.css" rel="stylesheet" type="text/css" />');
            _bit_counterdown();
        })
    } else {
        _bit_counterdown();
    }
}

function _bit_counterdown() {
    jQuery(".ts-countdown-parent").each(function() {
        $TS_VCSC_Countdown_DaysLabel = $TS_VCSC_Countdown_DayLabel = jQuery(this).parent().find(".hidecountdownlabel").data("day");
        $TS_VCSC_Countdown_HoursLabel = $TS_VCSC_Countdown_HourLabel = jQuery(this).parent().find(".hidecountdownlabel").data("hour");
        $TS_VCSC_Countdown_MinutesLabel = $TS_VCSC_Countdown_MinuteLabel = jQuery(this).parent().find(".hidecountdownlabel").data("minute");
        $TS_VCSC_Countdown_SecondsLabel = $TS_VCSC_Countdown_SecondLabel = jQuery(this).parent().find(".hidecountdownlabel").data("second");

        function t(_) {
            var k = new Date,
                z = Date.UTC(k.getFullYear(), k.getMonth(), k.getDate()),
                P = k.getTimezoneOffset() / -60;
            if (0 == u && (u = P), 1 == r && 0 == o) {
                k.setHours(k.getHours() + parseInt(Q)), k.setMinutes(k.getMinutes() + parseInt(w)), k.setSeconds(k.getSeconds() + parseInt(b)), z = Date.UTC(k.getFullYear(), k.getMonth(), k.getDate()), $countdown_target_day = k.getDate(), $countdown_target_month = k.getMonth() + 1, $countdown_target_year = k.getFullYear(), $countdown_target_hour = k.getHours(), $countdown_target_minute = k.getMinutes(), $countdown_target_second = k.getSeconds(); {
                    var E = new Date($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
                    Date.UTC($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
                }
            } else if (1 == o) {
                $countdown_target_day = k.getDate(), $countdown_target_month = k.getMonth() + 1, $countdown_target_year = k.getFullYear(), $countdown_target_hour = k.getHours(), $countdown_target_minute = k.getMinutes(), $countdown_target_second = k.getSeconds(); {
                    var E = new Date($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
                    Date.UTC($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
                }
            } else if (1 == s) {
                k.getHours() >= parseInt(y) && k.getMinutes() >= parseInt(v) && k.getSeconds() >= parseInt(j) && k.setDate(k.getDate() + 1), $countdown_target_day = k.getDate(), $countdown_target_month = k.getMonth() + 1, $countdown_target_year = k.getFullYear(), $countdown_target_hour = parseInt(y), $countdown_target_minute = parseInt(v), $countdown_target_second = parseInt(j); {
                    var E = new Date($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
                    Date.UTC($countdown_target_year, k.getMonth(), $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
                }
            } else {
                $countdown_target_day = parseInt(m), $countdown_target_month = parseInt(f), $countdown_target_year = parseInt(g), $countdown_target_hour = parseInt(y), $countdown_target_minute = parseInt(v), $countdown_target_second = parseInt(j); {
                    var E = new Date($countdown_target_year, $countdown_target_month - 1, $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0);
                    Date.UTC($countdown_target_year, $countdown_target_month - 1, $countdown_target_day, $countdown_target_hour, $countdown_target_minute, $countdown_target_second, 0)
                }
            }
            n = 0 == s && (k > E && 1 == n || 1 == o) ? !0 : !1, e.countEverest({
                day: $countdown_target_day,
                month: $countdown_target_month,
                year: $countdown_target_year,
                hour: $countdown_target_hour,
                minute: $countdown_target_minute,
                second: $countdown_target_second,
                countUp: n,
                leftHandZeros: d,
                timeZone: u,
                wrapDigits: "horizontal" == i ? !1 : !0,
                daysLabel: $TS_VCSC_Countdown_DaysLabel,
                dayLabel: $TS_VCSC_Countdown_DayLabel,
                daysWrapper: "horizontal" == i ? ".ce-days .ce-flip-back" : ".ce-days",
                hoursLabel: $TS_VCSC_Countdown_HoursLabel,
                hourLabel: $TS_VCSC_Countdown_HourLabel,
                hoursWrapper: "horizontal" == i ? ".ce-hours .ce-flip-back" : ".ce-hours",
                minutesLabel: $TS_VCSC_Countdown_MinutesLabel,
                minuteLabel: $TS_VCSC_Countdown_MinuteLabel,
                minutesWrapper: "horizontal" == i ? ".ce-minutes .ce-flip-back" : ".ce-minutes",
                secondsLabel: $TS_VCSC_Countdown_SecondsLabel,
                secondLabel: $TS_VCSC_Countdown_SecondLabel,
                secondsWrapper: "horizontal" == i ? ".ce-seconds .ce-flip-back" : ".ce-seconds",
                onInit: function() {},
                beforeCalculation: function() {},
                afterCalculation: function() {
                    if ("flipboard" == i) {
                        var t = this,
                            a = {
                                days: this.days,
                                hours: this.hours,
                                minutes: this.minutes,
                                seconds: this.seconds
                            },
                            r = {
                                hours: "23",
                                minutes: "59",
                                seconds: "59"
                            },
                            s = "active",
                            o = "before";
                        1 == L && 1 == _ ? (L = !1, e.find(".unit-wrap div").each(function() {
                            for (var t = jQuery(this), e = t.attr("class"), i = a[e], r = "", s = "", n = 0; 10 > n; n++) r += ['<div class="digits-inner">', '<div class="flip-wrap">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + n + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + n + "</div>", "</div>", "</div>", "</div>"].join("");
                            for (var o = 0; o < i.length; o++) s += '<div class="digits">' + r + "</div>";
                            t.append(s)
                        })) : 1 == L && 0 == _ && (L = !1), jQuery.each(a, function(a) {
                            for (var i, d = e.find("." + a + " .digits").length, u = r[a], l = t.strPad(this, d, "0"), c = l.length - 1; c >= 0; c--) {
                                var h = e.find("." + a + " .digits:eq(" + c + ")"),
                                    p = h.find("div.digits-inner");
                                i = u ? n ? 9 == u[c] ? 0 : u[c] : 0 == u[c] ? 9 : u[c] : n ? 0 : 9;
                                var m = parseInt(l[c]);
                                if (n) var f = m == i ? 9 : m - 1;
                                else var f = m == i ? 0 : m + 1;
                                p.eq(f).hasClass(s) && p.parent().addClass("play"), p.removeClass(s).removeClass(o), p.eq(m).addClass(s), p.eq(f).addClass(o)
                            }
                        })
                    }
                },
                onChange: function() {
                    if ("bars" == i && ("true" == l && TS_VCSC_Countdown_SetBar(I, this.days, 365), "true" == c && TS_VCSC_Countdown_SetBar(S, this.hours, 24), "true" == h && TS_VCSC_Countdown_SetBar(T, this.minutes, 60), "true" == p && TS_VCSC_Countdown_SetBar($, this.seconds, 60)), "columns" == i && "true" == x) {
                        var t = 0;
                        e.find(".col").each(function() {
                            jQuery(this).width() > t && (t = jQuery(this).width())
                        }), e.find(".col").each(function() {
                            jQuery(this).width(t)
                        })
                    }
                    "clock2" == i && TS_VCSC_Countdown_Animate(e.find(".number")), "circles" == i && ("true" == l && TS_VCSC_Countdown_DrawCircle(document.getElementById("days_" + a), this.days, 365, D, M, H), "true" == c && TS_VCSC_Countdown_DrawCircle(document.getElementById("hours_" + a), this.hours, 24, D, V, H), "true" == h && TS_VCSC_Countdown_DrawCircle(document.getElementById("minutes_" + a), this.minutes, 60, D, A, H), "true" == p && TS_VCSC_Countdown_DrawCircle(document.getElementById("seconds_" + a), this.seconds, 60, D, F, H)), "horizontal" == i && TS_VCSC_Countdown_Animate3D(e.find(".col").find("div:first-child"), this)
                },
                onComplete: function() {
                    1 == r && (e.countEverest("destroy"), jQuery("#ts-vcsc-countdown-" + a + "_link").click(), "true" == C && t(!1)), 1 == s && (e.countEverest("destroy"), t(!0))
                }
            })
        }
        var e = jQuery(this).find(".ts-countdown"),
            a = jQuery(this).attr("data-id"),
            i = jQuery(this).attr("data-type"),
            r = "true" == jQuery(this).attr("data-reset") ? !0 : !1,
            s = "true" == jQuery(this).attr("data-repeat") ? !0 : !1,
            n = "true" == jQuery(this).attr("data-countup") ? !0 : !1,
            o = "true" == jQuery(this).attr("data-pageload") ? !0 : !1,
            d = "true" == jQuery(this).attr("data-zeros") ? !0 : !1,
            u = jQuery(this).attr("data-zone");
        u = "false" != u ? parseInt(u) : !1; {
            var l = jQuery(this).attr("data-show-days"),
                c = jQuery(this).attr("data-show-hours"),
                h = jQuery(this).attr("data-show-minutes"),
                p = jQuery(this).attr("data-show-seconds"),
                m = jQuery(this).attr("data-day"),
                f = jQuery(this).attr("data-month"),
                g = jQuery(this).attr("data-year"),
                y = jQuery(this).attr("data-hour"),
                v = jQuery(this).attr("data-minute"),
                j = jQuery(this).attr("data-second"),
                Q = jQuery(this).attr("data-resethours"),
                w = jQuery(this).attr("data-resetminutes"),
                b = jQuery(this).attr("data-resetseconds"),
                C = jQuery(this).attr("data-resetrestart"),
                _ = jQuery(this).attr("data-resetlink");
            jQuery(this).attr("data-resettarget")
        }
        if ("" != _ && jQuery("#ts-vcsc-countdown-" + a + "_link").click(function(t) {
                t.preventDefault();
                var e = jQuery(this),
                    a = e.attr("target");
                jQuery.trim(a).length > 0 ? window.open(e.attr("href"), a) : window.location = e.attr("href")
            }), "columns" == i) var x = jQuery(this).attr("data-equalize");
        if ("bars" == i) {
            var k = jQuery(this),
                I = (k.find("#ce-days_" + a), k.find("#ce-hours_" + a), k.find("#ce-minutes_" + a), k.find("#ce-seconds_" + a), jQuery("#bar-days_" + a).find(".fill")),
                S = jQuery("#bar-hours_" + a).find(".fill"),
                T = jQuery("#bar-minutes_" + a).find(".fill"),
                $ = jQuery("#bar-seconds_" + a).find(".fill"),
                z = new Date;
            new Date(z.getTime() + 12096e5)
        }
        if ("circles" == i) var D = jQuery(this).attr("data-color-back"),
            M = jQuery(this).attr("data-color-days"),
            V = jQuery(this).attr("data-color-hours"),
            A = jQuery(this).attr("data-color-minutes"),
            F = jQuery(this).attr("data-color-seconds"),
            H = jQuery(this).attr("data-color-width");
        if ("horizontal" == i && (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0) && jQuery("html").addClass("internet-explorer"), "flipboard" == i) var L = !0;
        t(!0)
    });

}

function bitLibLayout(obj) {
    jQuery(".old-ie [backgroundSize='true']").css({ backgroundSize: "cover" });

    if (typeof obj === 'undefined') {
        obj = jQuery(".qfe_images_lib_isotope")
    }
    obj.each(function() {
        var current_obj = jQuery(this);
        var curr_action = current_obj.attr("data-liblayout");
        var filter = jQuery(this).parent().find(".isotope_image");
        filter.each(function() {
            jQuery(this).unbind("click").bind("click", function() {
                var f = jQuery(this).attr("data-filter");
                var c = jQuery(this).closest(".vcgroup").attr("data-color");
                var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");
                filter.removeClass("on");
                filter.css("color", c);
                jQuery(this).addClass("on");
                jQuery(this).css("color", hc);
                if (curr_action == "" || curr_action == "undefined") {
                    current_obj.find(">.vc-item").hide();
                    current_obj.find(f).show();
                } else {

                    current_obj.isotope({
                        filter: f
                    });
                }
            }).bind("mouseover", function() {
                var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");
                if (!jQuery(this).hasClass("on")) {
                    jQuery(this).css("color", hc);
                }

            }).bind("mouseout", function() {
                var c = jQuery(this).closest(".vcgroup").attr("data-color");
                if (!jQuery(this).hasClass("on")) {
                    jQuery(this).css("color", c);
                }

            })
        });
    });


    var action = obj.attr("data-liblayout");
    var columnWidth = obj.attr("data-width");

    if (obj.length == 0 || action == "" || action == "undefined") {
        return false;
    }
    obj.isotope({
        itemSelector: '.vc-item',
        layoutMode: action,
        filter: ".images,.templates"

    });

    var all_load = true;

    obj.find('img').each(function() {
        if (!jQuery(this).prop('complete')) {
            all_load = false;
        }
    });

    if (!all_load) {
        window.setTimeout(function() {
            bitLibLayout(obj);
        }, 500);
        return;
    }
    obj.isotope("reLayout");
}


if (typeof window['vc_plugin_flexslider'] !== 'function') {
    function vc_plugin_flexslider() {
        if (jQuery('.qfe_flexslider').length == 0) return;
        if (typeof jQuery.fn.flexslider == "undefined") {
            jQuery.getScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js").done(function() {
                jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
                _vc_plugin_flexslider();
            })
        } else {
            _vc_plugin_flexslider();
        }
    }

    function _vc_plugin_flexslider() {

        jQuery('.qfe_flexslider').each(function() {

            var this_element = jQuery(this);
            var sliderSpeed = 800,
                sliderTimeout = parseInt(this_element.attr('data-interval')) * 1000,
                sliderFx = this_element.attr('data-flex_fx'),
                sliderShowDirection = this_element.attr('data-direction'),
                sliderShowBottomNav = this_element.attr('data-bottom_nav'),
                minItems = this_element.attr('data-per-view'),
                itemWidth = this_element.attr('data-itemWidth'),

                slideshow = true;
            var body_width = jQuery("body").width();
            var img = null;
            var maxwidth = 0;
            this_element.find('img').each(function() {
                if (jQuery(this).width() > maxwidth) {
                    maxwidth = jQuery(this).width();
                    img = jQuery(this);
                }
            })

            if (maxwidth > body_width) {
                this_element.parent().parent().css("max-width", "100%");
                this_element.parent().parent().css("max-height", "auto");
            } else {
                this_element.parent().parent().css("max-width", "auto");
                this_element.parent().parent().css("max-height", "auto");
            }

            if (sliderTimeout == 0) slideshow = false;
            if (sliderShowDirection == 0) sliderShowDirection = false;
            if (sliderShowBottomNav == 0) sliderShowBottomNav = false;

            this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: sliderSpeed,
                controlNav: sliderShowBottomNav,
                directionNav: sliderShowDirection,
                smoothHeight: true,
                minItems: minItems,
                itemWidth: itemWidth,
            });
        });
    }
}

function bit_product() {
    if (jQuery('.bitcommerce').length == 0)
        return false;
    // Tabs
    jQuery('.bitcommerce-tabs .panel').hide();

    jQuery('.bitcommerce-tabs ul.tabs li a').click(function() {

        var $tab = jQuery(this),
            $tabs_wrapper = $tab.closest('.bitcommerce-tabs');

        jQuery('ul.tabs li', $tabs_wrapper).removeClass('active');
        jQuery('div.panel', $tabs_wrapper).hide();
        jQuery('div' + $tab.attr('href'), $tabs_wrapper).show();
        $tab.parent().addClass('active');

        return false;
    });

    jQuery('.bitcommerce-tabs').each(function() {
        var hash = window.location.hash,
            url = window.location.href,
            tabs = jQuery(this);

        if (hash.toLowerCase().indexOf("comment-") >= 0) {
            jQuery('ul.tabs li.reviews_tab a', tabs).click();

        } else if (url.indexOf("comment-page-") > 0 || url.indexOf("cpage=") > 0) {
            jQuery('ul.tabs li.reviews_tab a', jQuery(this)).click();

        } else {
            jQuery('ul.tabs li:first a', tabs).click();
        }
    });

    jQuery('a.bitcommerce-review-link').click(function() {
        jQuery('.reviews_tab a').click();
        return true;
    });
    jQuery('#rating').hide();
    if (jQuery("p.stars").length == 0) {
        jQuery('#rating').before('<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>');
    }
    // Star ratings for comments


    jQuery('body')
        .on('click', '#respond p.stars a', function() {
            var $star = jQuery(this),
                $rating = jQuery(this).closest('#respond').find('#rating');

            $rating.val($star.text());
            $star.siblings('a').removeClass('active');
            $star.addClass('active');

            return false;
        })
        .on('click', '#respond #submit', function() {
            var $rating = jQuery(this).closest('#respond').find('#rating'),
                rating = $rating.val();

            if ($rating.size() > 0 && !rating && wc_single_product_params.review_rating_required === 'yes') {
                alert(wc_single_product_params.i18n_required_rating_text);

                return false;
            }
        });

    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />').find(".input-text").attr("type", "text");

    // prevent double form submission
    jQuery('form.cart').submit(function() {
        jQuery(this).find(':submit').attr('disabled', 'disabled');
    });
    jQuery('.bitcommerce-main-image a').removeAttr("href").click(function() {
        jAlert("è¯·åœ¨é¢„è§ˆä¸‹ï¼ŒæŸ¥çœ‹å›¾ç‰‡æ•ˆæžœï¼");
    });
    jQuery('.button.add_to_cart_button,.button.product_type_simple').removeAttr("href").click(function() {
        jAlert("ç¼–è¾‘æƒ…å†µä¸‹ï¼Œæ— æ³•ä½¿ç”¨è´­ç‰©è½¦åŠŸèƒ½ã€‚å¦‚æžœä¿®æ”¹å•†åŸŽé»˜è®¤é¡µé¢ï¼Œä½ å¯ä»¥ä»Žå·¦ä¸Šè§’é€‰æ‹©åŠŸèƒ½é¡µé¢è¿›è¡Œç¼–è¾‘ï¼");

    });
    jQuery('.bitcommerce-ordering select.orderby').change(function() {
        jAlert("ç¼–è¾‘æƒ…å†µä¸‹ï¼Œæ— æ³•ä½¿ç”¨æŽ’åºåŠŸèƒ½ï¼");
    })

    jQuery(".qfy_carousel .vc-carousel").each(function() {
        qfy_carousel_fun(jQuery(this))
    })
    if (jQuery(".addon-custom-datepicker").length > 0) {
        jQuery(".addon-custom-datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            numberOfMonths: 1,
        });
    }
    if (jQuery(".addon-custom-datetimepicker").length > 0) {
        jQuery(".addon-custom-datetimepicker").datetimepicker({
            dateFormat: "yy-mm-dd",
            numberOfMonths: 1,
            showTime: true,
            constrainInput: false
        });
    }
}

function qfy_carousel_fun($carousel) {

    var is_carousel_ok = true;
    $carousel.find('img').each(function() {
        if (!jQuery(this).prop('complete')) {
            is_carousel_ok = false;
        }

    })
    if (!is_carousel_ok) {
        window.setTimeout(function() {
            qfy_carousel_fun($carousel);
        }, 500);
        return;
    }

    $carousel.carousel($carousel.data());
}



/* Waypoints magic
---------------------------------------------------------- */
if (typeof window['vc_waypoints'] !== 'function') {
    function qfe_animate_fun($this) {

        var p = jQuery($this).closest(".qfy-element");
        var delay = p.attr("css_animation_delay");
        var anitime = p.attr("data-anitime");
        var anilength = p.attr("data-anilength");
        if (anitime && anitime > 0) {
            jQuery($this).css("animation-duration", anitime + "s");
            jQuery($this).css("-webkit-animation-duration", anitime + "s");
        }
        jQuery($this).removeClass("anlength1 anlength2");
        if (anilength && anilength != 0) {
            jQuery($this).addClass(anilength);
        }
        if (delay) {
            setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, delay * 1000);
        } else {
            if (jQuery($this).hasClass("delay1")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 1000);
            } else if (jQuery($this).hasClass("delay0.5")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 500);
            } else if (jQuery($this).hasClass("delay1.5")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 1500);
            } else if (jQuery($this).hasClass("delay2")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 2000);
            } else if (jQuery($this).hasClass("delay3")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 3000);
            } else if (jQuery($this).hasClass("delay4")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 4000);
            } else if (jQuery($this).hasClass("delay5")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 5000);
            } else if (jQuery($this).hasClass("delay6")) {
                setTimeout(function() { jQuery($this).addClass('qfe_start_animation'); }, 6000);
            } else {
                jQuery($this).addClass('qfe_start_animation');
            }
        }

    }

    function vc_waypoints() {
        if (typeof resetSectionHeight !== 'undefined') resetSectionHeight();
        if (typeof jQuery.fn.waypoint !== 'undefined') {
            jQuery('.qfe_animate_when_almost_visible:not(.qfe_start_animation)').waypoint(function() {
                qfe_animate_fun(this);

            }, { offset: '85%' });
        }
    }
}

/* Teaser grid: isotope
---------------------------------------------------------- */
if (typeof window['vc_teaserGrid'] !== 'function') {

    function vc_teaserGrid() {

        var layout_modes = {
            fitrows: 'fitRows',
            masonry: 'masonry'
        }
        if (jQuery(".list-style9").length > 0) {
            jQuery(".list-style9").each(function() {
                vc_isotope_init_load(jQuery(this).find(".vc-carousel-slideline-inner"));
            })

        }
        if (jQuery("body.compose-mode").length == 1) {
            jQuery(".vc-element .vc_ca_post_id a:not(.cate)").each(function() {
                if (!jQuery(this).hasClass("thickbox")) {
                    var href = jQuery(this).attr("href");
                    jQuery(this).removeAttr("href");
                    var p = jQuery(this).closest(".vc_ca_post_id");
                    jQuery(this).unbind("click").bind("click", function() {
                        top.menuRedirect(href, p);
                        return false;
                    })
                }
            })
            if (!top.jQuery("body").hasClass("caterole")) {
                jQuery(".content-wrapper .vc-element .vc_ca_post_id").mouseenter(function() {

                    jQuery(this).css("outline", "2px dotted #5E87B0");
                    if (jQuery(this).find(".vc_list_edit_button").length == 0) {
                        if (jQuery(this).find(".blog-media .toEditor,#item_block .toEditor").length == 0) {
                            jQuery(this).find(".blog-media,#item_block").append("<span class='toEditor' ><span class='edit e_copy' style='display:inline' onclick='toCopy(this)'>å¤åˆ¶</span><span class='edit e_edit' style='display:inline' onclick='toVisit(this)'>æ‰“å¼€</span><!--<span class='edit e_delete' style='display:inline' onclick='toDelete(this)'>åˆ é™¤</span>--></span>");
                        }
                        if (jQuery(this).closest(".vc-element").attr("data-model-id")) {
                            var editname = "æ›´æ¢å›¾ç‰‡";
                            if (jQuery(this).closest(".qfy-element").attr("data-post") == "attachment") {
                                editname = "ç¼–è¾‘";
                            }
                            jQuery(this).find(".blog-media").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_scrolllist_image_element\")' title='ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼'>è®¾ç½®</span>");
                            jQuery(this).find(".item_img").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_advanced_image_element\")' title='ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼'>è®¾ç½®</span>");
                            var p = jQuery(this);
                            if (p.find(".post-title").length > 0 && p.find(".post-title .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                var title = p.find(".post-title");

                                if (p.find(".post-title >a").length > 0) {
                                    var title = jQuery(this).find(".post-title >a");
                                    if (title.html().length > 15) {
                                        var newtitle = title.html().substr(0, title.html().length - 6);
                                        title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                    }
                                    p.find(".post-title >a:first").append(actionstr);
                                } else {
                                    var title = jQuery(this).find(".post-title >span:first");
                                    if (title.html().length > 15) {
                                        var newtitle = title.html().substr(0, title.html().length - 6);
                                        title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                    }
                                    p.find(".post-title >span:first").append(actionstr);
                                }
                            }
                            if (p.find(".post_excerpt").length > 0 && p.find(".post_excerpt .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_text_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                if (p.find(".post_excerpt >p").length > 0) {
                                    p.find(".post_excerpt >p").append(actionstr);
                                } else {
                                    p.find(".post_excerpt").append(actionstr);
                                }

                            }

                            if (jQuery(this).find(".title").length > 0 && jQuery(this).find(".title .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".title").append(actionstr);

                            }
                            if (jQuery(this).find(".details").length > 0 && jQuery(this).find(".details .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_details_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".details").append(actionstr);

                            }
                            if (jQuery(this).find(".subtitle").length > 0 && jQuery(this).find(".subtitle .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_subtitle_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".subtitle").append(actionstr);

                            }

                            if (jQuery(this).find(".post_date").length > 0 && jQuery(this).find(".post_date .vc_list_edit_action").length == 0) {
                                var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_postdate_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".post_date").append(actionstr);

                            }

                            if (jQuery(this).find(".price_warp").length > 0 && jQuery(this).find(".price_warp .vc_list_edit_action").length == 0) {
                                var current_pid = jQuery(this).attr("data-postid");
                                var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit(' + current_pid + ',\'è®¾ç½®å•†å“\', \'product\');" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_price_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                jQuery(this).find(".price_warp").append(actionstr);

                            }
                        }
                    }
                }).mouseleave(function() {
                    jQuery(this).css("outline", "0").find(".vc_list_edit_action").remove();
                    jQuery(this).find(".blog-media,#item_block").find(".toEditor").remove();
                    jQuery(this).find(".edittitle").remove();
                    jQuery(this).find(".hidetitle").each(function() {
                        var t = jQuery(this).html();
                        jQuery(this).parent().html(t);
                    })
                });

                if (jQuery(".product-content.single-product").length == 0) {
                    jQuery(".bitcommerce-main-image,.wd_product_wrapper .product_a").mouseenter(function() {
                        jQuery(this).removeAttr("href").append("<span class='toEditor' style='right:0;width:100px;'><span class='edit' style='display:inline' onclick='toEditProduct(this)'><i class='glyphicon glyphicon-edit'></i>æ•°æ®</span><span style='display:inline' class='delete' onclick='toRedirectProduct(this)'><i class='glyphicon glyphicon-forward'></i>é¡µé¢</span></span>");
                    }).mouseleave(function() {
                        jQuery(this).find(".toEditor").remove();
                    });
                }
            }
            jQuery('.content-wrapper .qfy-listcatecontrols li').each(function() {
                var $li = jQuery(this);
                $li.mouseenter(function() {
                    jQuery(this).css("outline", "1px dotted #5E87B0");
                    if (jQuery(this).find(".toEditor").length == 0) {
                        jQuery(this).append("<span class='toEditor' style='border:0;padding:0;'><span  style='display:inline;border:0;padding:0;background:transparent;' onclick='toDeleteCate(this)'><img src='//fast.qifeiye.com/FeiEditor/bitSite/images/close_hover.png' /></span>");
                    }
                }).mouseleave(function() {
                    jQuery(this).css("outline", "0");
                    jQuery(this).find(".toEditor").remove();
                });

            });
        }


        jQuery('.qfe_grid .teaser_grid_container:not(.qfe_carousel), .qfe_filtered_grid .teaser_grid_container:not(.qfe_carousel)').each(function() {
            var $container = jQuery(this);

            var $thumbs = $container.find('.qfe_thumbnails');
            var layout_mode = $thumbs.attr('data-layout-mode');

            //..
            if (jQuery("body.compose-mode").length == 1) {
                var p = $container.closest(".qfy-element");
                var iscontent = $container.closest(".content-wrapper");
                //&& $thumbs.closest(".vc-element").length>0
                if (!top.jQuery("body").hasClass("caterole")) {
                    $thumbs.find(".isotope-item").mouseenter(function() {
                        if (iscontent.length == 0) return;
                        jQuery(this).css("outline", "2px dotted #5E87B0");
                        if (jQuery(this).find(".vc_list_edit_button").length == 0) {
                            var editor_html = "<span class='toEditor' ><span class='edit e_set' style='display:inline' onclick='parent.toeditlistmore(this,event,\"vc_list_element_ui\");'>è®¾ç½®</span><span class='edit e_copy' style='display:inline' onclick='toCopy(this)'>å¤åˆ¶</span><span class='edit e_edit' style='display:inline' onclick='toVisit(this)'>æ‰“å¼€</span><!--<span class='edit e_delete' style='display:inline' onclick='toDelete(this)'>åˆ é™¤</span>--></span>"

                            jQuery(this).append(editor_html);
                            //<span class='edit' style='display:inline' onclick='toEditor(this)'><i class='glyphicon glyphicon-edit'></i>ç¼–è¾‘</span>
                            if ($container.closest(".vc-element").attr("data-model-id")) {
                                jQuery(this).find(".post-thumb").css("position", "relative");
                                var editname = "æ›´æ¢å›¾ç‰‡";
                                if (jQuery(this).closest(".qfy-element").attr("data-post") == "attachment") {
                                    editname = "ç¼–è¾‘";
                                }
                                jQuery(this).find(".post-thumb").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_list_image_element\")' title='ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼'>è®¾ç½®</span>");
                                if (jQuery(this).find(".post-title").length > 0 && jQuery(this).find(".post-title .vc_list_edit_action").length == 0) {
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_list_title_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    if (jQuery(this).find(".post-title >a").length > 0) {
                                        var title = jQuery(this).find(".post-title >a");
                                        if (title.html().length > 15) {
                                            var newtitle = title.html().substr(0, title.html().length - 6);
                                            title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                        }
                                        jQuery(this).find(".post-title >a:first").append(actionstr);
                                    } else {
                                        var title = jQuery(this).find(".post-title >span:first");
                                        if (title.html().length > 15) {
                                            var newtitle = title.html().substr(0, title.html().length - 6);
                                            title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")
                                        }
                                        jQuery(this).find(".post-title >span:first").append(actionstr);

                                    }
                                    if (jQuery(this).find(".post-title i.glyphicon").length > 0) {
                                        jQuery(this).find(".post-title i.glyphicon").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_icon_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                                    }
                                }



                                if (jQuery(this).find(".post_excerpt").length > 0) {
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="ç¼–è¾‘å†…å®¹"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_text_element\')" title="ä¿®æ”¹å†…å®¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    if (jQuery(this).find(".post_excerpt >p").length > 0 && jQuery(this).find(".post_excerpt .vc_list_edit_action").length == 0) {
                                        jQuery(this).find(".post_excerpt >p").append(actionstr);
                                    } else {
                                        jQuery(this).find(".post_excerpt").append(actionstr);
                                    }
                                }
                                if (jQuery(this).find(".subtitle").length > 0 && jQuery(this).find(".subtitle .vc_list_edit_action").length == 0) {
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="ç¼–è¾‘å†…å®¹"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_subtitle_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    jQuery(this).find(".subtitle").append(actionstr);

                                }
                                if (jQuery(this).find(".price_warp").length > 0 && jQuery(this).find(".price_warp .vc_list_edit_action").length == 0) {
                                    var current_pid = jQuery(this).attr("data-postid");
                                    var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit(' + current_pid + ',\'è®¾ç½®å•†å“\', \'product\');" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_price_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>';
                                    jQuery(this).find(".price_warp").append(actionstr);

                                }
                                if (jQuery(this).find(".post-comment").length > 0 && jQuery(this).find(".post-comment .vc_list_edit_action").length == 0) {
                                    jQuery(this).find(".post-comment").append('<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="ç¼–è¾‘"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_comment_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                                }
                                if (jQuery(this).find(".vc_read_more").length > 0 && jQuery(this).find(".vc_read_more .vc_list_edit_action").length == 0) {
                                    jQuery(this).find(".vc_read_more").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_readmore_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                                }
                            }

                        }
                    }).mouseleave(function() {
                        jQuery(this).css("outline", "0");
                        jQuery(this).find(".toEditor,.vc_list_edit_action").remove();
                        jQuery(this).find(".edittitle").remove();
                        jQuery(this).find(".hidetitle").each(function() {
                            var t = jQuery(this).html();
                            jQuery(this).parent().html(t);
                        })

                    });


                    if (p.find(".mypages").length > 0) {
                        p.find(".mypages").mouseenter(function() {
                            if (p.find(".mypages .vc_list_edit_action").length == 0) {
                                p.find(".mypages").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_pagenav_element\')" title="ä¿®æ”¹æ ·å¼ï¼Œæ ¼å¼"></span>');
                            }
                        }).mouseleave(function() {
                            p.find(".vc_list_edit_action").remove();
                        });

                    }

                }
                $thumbs.find("a:not(.cate)").each(function() {
                    if (!jQuery(this).hasClass("thickbox")) {
                        var href = jQuery(this).attr("href");
                        jQuery(this).removeAttr("href");
                        var p = jQuery(this).closest(".isotope-item");
                        jQuery(this).unbind("click").bind("click", function() {
                            top.menuRedirect(href, p);
                            return false;
                        })
                    }
                })
            }

            $container.find('.categories_filter a:not(.link)').data('isotope', $thumbs).click(function(e) {
                e.preventDefault();
                var $thumbs = jQuery(this).data('isotope');
                jQuery(this).parent().parent().find('.active').removeClass('active');
                jQuery(this).parent().addClass('active');
                if (!$container.hasClass("noanimale")) {
                    $thumbs.isotope({ filter: jQuery(this).attr('data-filter'), itemSelector: '.isotope-item', layoutMode: 'fitRows' });
                } else {
                    var filter = jQuery(this).data('filter');
                    if (filter == "*") {
                        $thumbs.find(">li").show();
                    } else {
                        $thumbs.find(">li").hide();
                        $thumbs.find(filter).show();
                    }
                }

            });
            if (!jQuery(this).hasClass("noanimale")) {
                vc_isotope_init_load($thumbs);
            }

        });
    }



}

function vc_isotope_init_load(obj) {

    if (obj.find('.post-thumb img,.item_img img').length == 0) {
        obj.isotope({ filter: '*', itemSelector: '.isotope-item', layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows' });
        return;
    }
    var all_load = true;
    obj.find('.post-thumb img,.post-thumb video,.item_img img').each(function() {
        if (!jQuery(this).prop('complete')) {
            all_load = false;
        }
    });

    if (!all_load) {
        window.setTimeout(function() {
            vc_isotope_init_load(obj);
        }, 500);
        return;
    }
    obj.isotope({ filter: '*', itemSelector: '.isotope-item', layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows' });
}
if (typeof window['vc_carouselBehaviour'] !== 'function') {
    function vc_carouselBehaviour() {
        jQuery(".qfe_carousel").each(function() {
            var $this = jQuery(this);
            if ($this.data('carousel_enabled') !== true && $this.is(':visible')) {
                $this.data('carousel_enabled', true);
                var carousel_width = jQuery(this).width(),
                    visible_count = getColumnsCount(jQuery(this)),
                    carousel_speed = 500;
                if (jQuery(this).hasClass('columns_count_1')) {
                    carousel_speed = 900;
                }
                /* Get margin-left value from the css grid and apply it to the carousele li items (margin-right), before carousele initialization */
                var carousele_li = jQuery(this).find('.qfe_thumbnails-fluid li');
                carousele_li.css({ "margin-right": carousele_li.css("margin-left"), "margin-left": 0 });

                jQuery(this).find('.qfe_wrapper:eq(0)').jCarouselLite({
                        btnNext: jQuery(this).find('.next'),
                        btnPrev: jQuery(this).find('.prev'),
                        visible: visible_count,
                        speed: carousel_speed
                    })
                    .width('100%'); //carousel_width

                var fluid_ul = jQuery(this).find('ul.qfe_thumbnails-fluid');
                fluid_ul.width(fluid_ul.width() + 300);

                jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName();
                    if (before_resize != screen_size) {
                        window.setTimeout('location.reload()', 20);
                    }
                });
            }

        });

        /* if(window.Swiper !== undefined) {

             jQuery('.swiper-container').each(function(){
                 var $this = jQuery(this),
                     my_swiper,
                     max_slide_size = 0,
                     options = jQuery(this).data('settings');

                     if(options.mode === 'vertical') {
                         $this.find('.swiper-slide').each(function(){
                             var height = jQuery(this).outerHeight(true);
                             if(height > max_slide_size) max_slide_size = height;
                         });
                         $this.height(max_slide_size);
                         $this.css('overflow', 'hidden');
                     }
                     jQuery(window).resize(function(){
                         $this.find('.swiper-slide').each(function(){
                             var height = jQuery(this).outerHeight(true);
                             if(height > max_slide_size) max_slide_size = height;
                         });
                         $this.height(max_slide_size);
                     });
                     my_swiper = jQuery(this).swiper(jQuery.extend(options, {
                     onFirstInit: function(swiper) {
                         if(swiper.slides.length < 2) {
                             $this.find('.vc-arrow-left,.vc-arrow-right').hide();
                         } else if(swiper.activeIndex === 0  && swiper.params.loop !== true) {
                             $this.find('.vc-arrow-left').hide();
                         } else {
                             $this.find('.vc-arrow-left').show();
                         }
                     },
                     onSlideChangeStart: function(swiper) {
                         if(swiper.slides.length > 1 && swiper.params.loop !== true) {
                             if(swiper.activeIndex === 0) {
                                 $this.find('.vc-arrow-left').hide();
                             } else {
                                 $this.find('.vc-arrow-left').show();
                             }
                             if(swiper.slides.length-1 === swiper.activeIndex) {
                                 $this.find('.vc-arrow-right').hide();
                             } else {
                                 $this.find('.vc-arrow-right').show();
                             }
                         }
                     }
                 }));
                 $this.find('.vc-arrow-left').click(function(e){
                     e.preventDefault();
                     my_swiper.swipePrev();
                 });
                 $this.find('.vc-arrow-right').click(function(e){
                     e.preventDefault();
                     my_swiper.swipeNext();
                 });
                 my_swiper.reInit();
             });

         }*/

    }
}

if (typeof window['vc_slidersBehaviour'] !== 'function') {
    function vc_slidersBehaviour() {
        //var sliders_count = 0;
        jQuery('.qfe_gallery_slides').each(function(index) {
            var this_element = jQuery(this);
            var ss_count = 0;
            if (this_element.hasClass('qfe_slider_nivo')) {
                var sliderSpeed = 800,
                    sliderTimeout = this_element.attr('data-interval') * 1000;

                if (sliderTimeout == 0) sliderTimeout = 9999999999;
                this_element.find('.nivoSlider').nivoSlider({
                    effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify sets like: 'fold,fade,sliceDown'
                    slices: 15, // For slice animations
                    boxCols: 8, // For box animations
                    boxRows: 4, // For box animations
                    animSpeed: sliderSpeed, // Slide transition speed
                    pauseTime: sliderTimeout, // How long each slide will show
                    startSlide: 0, // Set starting Slide (0 index)
                    directionNav: true, // Next & Prev navigation
                    directionNavHide: true, // Only show on hover
                    controlNav: true, // 1,2,3... navigation
                    keyboardNav: false, // Use left & right arrows
                    pauseOnHover: true, // Stop animation while hovering
                    manualAdvance: false, // Force manual transitions
                    prevText: 'Prev', // Prev directionNav text
                    nextText: 'Next' // Next directionNav text
                });
            } else if (this_element.hasClass('qfe_image_grid')) {
                var isotope = this_element.find('.qfe_image_grid_ul');
                isotope.isotope({
                    // options
                    itemSelector: '.isotope-item',
                    layoutMode: 'fitRows'
                });
                jQuery(window).load(function() {
                    isotope.isotope("reLayout");
                });
            }
        });
    }
}

if (typeof window['vc_prettyPhoto'] !== 'function') {
    function vc_prettyPhoto() {
        try {
            // just in case. maybe prettyphoto isnt loaded on this site
            jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: 'normal',
                /* fast/slow/normal */
                padding: 15,
                /* padding for each side of the picture */
                opacity: 0.7,
                /* Value betwee 0 and 1 */
                showTitle: true,
                /* true/false */
                allowresize: true,
                /* true/false */
                counter_separator_label: '/',
                /* The separator for the gallery counter 1 "of" 2 */
                //theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square */
                hideflash: false,
                /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
                deeplinking: false,
                /* Allow prettyPhoto to update the url to enable deeplinking. */
                modal: false,
                /* If set to true, only the close button will close the window */
                callback: function() {
                    var url = location.href;
                    var hashtag = (url.indexOf('#!prettyPhoto')) ? true : false;
                    if (hashtag) location.hash = "!";
                } /* Called when prettyPhoto is closed */ ,
                social_tools: ''
            });
        } catch (err) {}
    }
}
/* Helper
---------------------------------------------------------- */
function getColumnsCount(el) {
    var find = false,
        i = 1;

    while (find == false) {
        if (el.hasClass('columns_count_' + i)) {
            find = true;
            return i;
        }
        i++;
    }
}

var screen_size = getSizeName();

function getSizeName() {
    var screen_size = '',
        screen_w = jQuery(window).width();

    if (screen_w > 1170) {
        screen_size = "desktop_wide";
    } else if (screen_w > 960 && screen_w < 1169) {
        screen_size = "desktop";
    } else if (screen_w > 768 && screen_w < 959) {
        screen_size = "tablet";
    } else if (screen_w > 300 && screen_w < 767) {
        screen_size = "mobile";
    } else if (screen_w < 300) {
        screen_size = "mobile_portrait";
    }
    return screen_size;
}

function loadScript(url, $obj, callback) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) { //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        /*
        script.onload = function(){

            callback();
        };
         */
    }

    script.src = url;
    $obj.get(0).appendChild(script);
}

/**
 * Prepare html to correctly display inside tab container
 *
 * @param event - ui tab event 'show'
 * @param ui - jquery ui tabs object
 */

function qfe_prepare_tab_content(event, ui) {
    var panel = ui.panel || ui.newPanel;
    vc_carouselBehaviour();
    var $ui_panel = jQuery(panel).find('.isotope'),
        $google_maps = jQuery(panel).find('.qfe_gmaps_widget');
    if ($ui_panel.length > 0) {
        $ui_panel.isotope("reLayout");
    }

    if ($google_maps.length && !$google_maps.is('.map_ready')) {
        var $frame = $google_maps.find('iframe');
        $frame.attr('src', $frame.attr('src'));
        $google_maps.addClass('map_ready');
    }
}
jQuery(window).resize(function() {
    bitResizeImageTextInit();
});
jQuery(window).ready(function() {
    setTimeout(function() { bitResizeImageTextInit(); }, 300);
});

function bitResizeImageTextInit() {

    jQuery(".bitImageControlDiv .bit-tp-caption.wf-mobile-hidden").each(function() {

        var dataorgipara = jQuery(this).attr("dataorgipara");
        if (dataorgipara) {
            var $this = this;
            var p = jQuery(this).parent().parent();
            var img = p.find(".bitImageParentDiv img");
            if (img.length > 0) {
                var imgW = img.width();
                var imgH = img.height();
            } else {
                var imgW = p.find(".bitImageParentDiv .banner-img").width();
                var imgH = p.find(".bitImageParentDiv .banner-img").height();
            }
            var download = new Image();
            download.src = img.attr("src");
            if (imgW > 760) {
                initTextposition(dataorgipara, imgW, imgH, this);
            } else {
                /*download.onload = function () {
                	initTextposition(dataorgipara,imgW,imgH,$this);
                }
                download.onerror = function (err, msg) {
                	  initTextposition(dataorgipara,imgW,imgH,$this);
                }*/
            }
        }
    })
}

function initTextposition(dataorgipara, imgW, imgH, obj) {
    dataorgipara = dataorgipara.split("\|");
    var textOrgLeft = dataorgipara[0];
    var textOrgTop = dataorgipara[1];
    var width = dataorgipara[2];
    var s = dataorgipara[3];
    var textOrgRight = dataorgipara[4];
    var textOrgBottom = dataorgipara[5];
    if (imgW != width && imgW > 0) {

        var n = (width / imgW).toFixed(4);

        //if(s/n<10){n=s/10;}
        jQuery(obj).css("font-size", s / n).css("line-height", "auto").css("min-height", "0").css("min-width", "0");
        jQuery(obj).find("slideText").css("line-height", "auto");
        var textW = jQuery(obj).width();
        var textH = jQuery(obj).height();
        var paddingLeft = jQuery(obj).css("padding-left");
        if (paddingLeft && paddingLeft.indexOf("px")) { paddingLeft = paddingLeft.replace("px", "") };
        var paddingTop = jQuery(obj).css("padding-top");
        if (paddingTop && paddingTop.indexOf("px")) { paddingTop = paddingTop.replace("px", "") };
        var s = jQuery(obj).css("left");
        if (textOrgLeft != 0) {
            if (s.indexOf("px") > -1) {
                s = s.replace("px", "");
                jQuery(obj).css("left", textOrgLeft * imgW - textW / 2 - paddingLeft);
            }
        }
        if (textOrgRight == 1) {
            jQuery(obj).css("right", "0").css("left", "auto");
        }
        var s = jQuery(obj).css("top");

        if (textOrgTop != 0) {
            if (s.indexOf("px") > -1) {
                s = s.replace("px", "");
                jQuery(obj).css("top", textOrgTop * imgH - textH / 2 - paddingTop);
            }
        }
        if (textOrgBottom == 1) {
            jQuery(obj).css("bottom", "0").css("top", "auto");
        }

    } else {

        var css = jQuery(obj).attr("style");
        if (css) {
            css = css.replace(/font-size[^p]*px;/, "");
            css = css.replace(/right: 0px/, "");
            css = css.replace(/bottom: 0px/, "");
            css = css.replace(/line-height[^;]*;/, "");
            jQuery(obj).attr("style", css);
            var left = jQuery(obj).attr("dataleft");
            jQuery(obj).css("left", left + "px");
            var top = jQuery(obj).attr("datatop");
            jQuery(obj).css("top", top + "px");
        }
    }
    jQuery(obj).addClass("on").show();

}
if (top != self) {
    jQuery("html").bind('paste', function(e) {
        if (!e.clipboardData) {
            var clipboardData = e.originalEvent.clipboardData;
        } else {
            var clipboardData = e.clipboardData;
        }

        if (clipboardData) {
            var text = clipboardData.getData('text/plain');
            if (text && parent) {
                var tmp = parent.base64_decode(text);
                if (tmp.indexOf("|^^|") > -1) {
                    var tmparr = tmp.split('|^^|');
                    if (tmparr.length == 2) {
                        parent.jQuery("#vc-add-element-dialog .bit-insert-html").click();
                        setTimeout(function() {
                            top.jQuery(".boxy-wrapper:visible #copyText").val(text);
                            top.jQuery(".boxy-wrapper:visible .copytitle").html("ç‚¹å‡»ç¡®è®¤ï¼Œå°†å¤åˆ¶è¯¥ç»„ä»¶åˆ°å½“å‰é¡µé¢");
                        }, 300);
                    }
                }
            }
        }
    });
};

/* vc_transition_bootstrap_js: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/transition.js) */
+

function($) {
    "use strict";

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')

        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd otransitionend',
            'transition': 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return { end: transEndEventNames[name] }
            }
        }
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false,
            $el = this
        $(this).one($.support.transition.end, function() { called = true })
        var callback = function() { if (!called) $($el).trigger($.support.transition.end) }
        setTimeout(callback, duration)
        return this
    }

    $(function() {
        $.support.transition = transitionEnd()
    })

}(window.jQuery);;

/* vc_carousel_js: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/vc_carousel.js) */
/* ========================================================================
 * VC: carousel.js v0.4.5
 * Fork Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


;
(function($) {
    "use strict";

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function(element, options) {
        if ($(window).width() < 768 && $(element).hasClass("vc-carousel vc-slide")) {
            options.interval = 0;

        }
        if (!options.viewnum) options.viewnum = 0;
        this.$element = $(element)
        this.$indicators = this.$element.find('.vc-carousel-indicators')
        this.options = options
        this.paused =
            this.sliding =
            this.interval =
            this.$active =
            this.$items = null
        this.options.pause == 'hover' && this.$element
            .on('mouseenter', $.proxy(this.pause, this))
            .on('mouseleave', $.proxy(this.cycle, this))
        this._build() // new
    }

    Carousel.DEFAULTS = {
        mode: 'horizontal',
        partial: false,
        interval: 5000,
        pause: 'hover',
        wrap: false,
        autoHeight: true,
        perView: 1,
        hideOnEnd: false
    }
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options && this.options.interval &&
            !this.paused &&
            (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
        this.touch_start_position = 0;
        return this
    }
    Carousel.prototype.getActiveIndex = function() {
        this.$active = this.$element.find('.vc-item.vc-active')
        if (!this.$active.length) this.$active = this.$element.find('.vc-item:first').addClass('vc-active')
        this.$items = this.$active.parent().children()
        return this.$items.index(this.$active)
    }
    Carousel.prototype.showHideControl = function(index) {
        if (typeof index === 'undefined') var index = this.getActiveIndex()
            //this.$left_control[index===0 ? 'hide' : 'show']()
            //this.$right_control[index===this.items_count-1 ? 'hide' : 'show']()
    }
    Carousel.prototype.to = function(pos) {
        var that = this
        var activeIndex = this.getActiveIndex()

        if (pos > (this.$items.length - 1) || pos < 0) return

        if (this.sliding) return this.$element.one('slid', function() { that.to(pos) })
        if (activeIndex == pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

    Carousel.prototype.pause = function(e) {
        e || (this.paused = true)

        if (this.$element && this.$element.find('.vc-next, .vc-prev').length && $.support.transition.end) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    Carousel.prototype.next = function() {
        if (this.sliding) return
        return this.slide('next')
    }

    Carousel.prototype.prev = function() {
        if (this.sliding) return
        return this.slide('prev')
    }

    Carousel.prototype.slide = function(type, next) {

        var $active = this.$element.find('.vc-item.vc-active')
        var $next = next || $active[type]();

        if (type == "prev" && $next.index() == -1 && this.options.viewnum > 0) {
            $next = this.$element.find('.vc-item:eq("' + (this.items_count - this.options.viewnum * 1) + '")');
        }
        var isCycling = this.interval
        var direction = type == 'next' ? 'vc-left' : 'vc-right'
        var fallback = type == 'next' ? 'first' : 'last'
        var that = this
        if (!$next.length) {
            if (!this.options.wrap) {
                this.returnSwipedSlide()
                return
            }
            $next = this.$element.find('.vc-item')[fallback]()
        }

        this.sliding = true
            //mobile don't move
        if ($(window).width() < 768 && this.$element.hasClass("vc-carousel vc-slide")) {
            return;
        }

        isCycling && this.pause()

        var e = $.Event('slide.vc.carousel', { relatedTarget: $next[0], direction: direction })

        if ($next.hasClass('vc-active')) return

        if (this.$indicators.length) {
            this.$indicators.find('.vc-active').removeClass('vc-active')
            this.$indicators.find('.vc-partial').removeClass('vc-partial')
            this.$element.one('slid', function() {
                var index = that.getActiveIndex(),
                    $nextIndicator = $(that.$indicators.children().slice(index, that.getActiveIndex() + that.options.perView))
                $nextIndicator && $nextIndicator.addClass('vc-active')
                that.options.partial && $nextIndicator && (index + 1 < that.items_count ? $nextIndicator.last().next().addClass('vc-partial') : $nextIndicator.first().prev().addClass('vc-partial'))
                if (that.options.hideOnEnd) that.showHideControl(index)
            })
        }
        this.current_index = $next.index()
        if (this.current_index > this.items_count - this.options.viewnum * 1) {
            this.current_index = 0;


        } else if (this.current_index < 0) {
            this.current_index = this.items_count - 1
        }
        if (this.options.autoHeight) {
            this.current_pos_value = -1 * this._step * this.current_index
        } else {
            this.current_pos_value = -1 * $next.position()[this.animation_position]
        }
        if (this.options.partial && this.current_index >= this.items_count - 1) {
            this.current_pos_value += this._step * (1 - this.partial_part)
        }
        if ($.support.transition && this.$element.hasClass('vc-slide')) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return

            this.$slideline_inner
                .addClass('vc-transition')
                .css(this.animation_position, this.current_pos_value + that.pos_units)
            if (!this.options.autoHeight) this.recalculateSlidelineHeight($next.height(), true)
            this.$slideline_inner.one($.support.transition.end, function() {
                $next.addClass('vc-active')
                $active.removeClass('vc-active')
                that.$slideline_inner.removeClass([type, 'vc-transition'].join(' '))
                that.sliding = false
                that.removeSwipeAnimationSpeed()
                setTimeout(function() { that.$element.trigger('slid') }, 0)
            }).emulateTransitionEnd(this.transition_speed)
        } else {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            $active.removeClass('vc-active')
            $next.addClass('vc-active')
            this.sliding = false
            this.$slideline_inner.css(this.animation_position, this.current_pos_value + that.pos_units)
        }
        isCycling && this.cycle()
        if (this.current_index == 0 && this.options.viewnum > 0) {
            $next.removeClass('vc-active');
            if (type == "next") {
                this.$element.find('.vc-item:first').addClass("vc-active");
            }
        }
        return this
    }
    Carousel.prototype.setSwipeAnimationSpeed = function() {
        this.$slideline_inner.addClass('vc-swipe-transition')
    }
    Carousel.prototype.removeSwipeAnimationSpeed = function() {
            this.$slideline_inner.removeClass('vc-swipe-transition')

        }
        /**
         * Velocity
         * @param   {Number}    delta_time
         * @param   {Number}    delta_x
         * @param   {Number}    delta_y
         * @returns {Object}    velocity
         */
    Carousel.prototype.velocity = function(time, x) {
        return {
            x: Math.abs(x / time) || 0
        }
    }
    Carousel.prototype.recalculateSlidelineHeight = function(height, animate) {
            if (animate === true) {
                this.$slideline.animate({ height: height })
            } else {
                this.$slideline.height(height)
            }
        }
        /**
         * Change layout size after resizing of window.
         */
    Carousel.prototype.resizeAction = function() {
        var max_height = 0,
            new_slideline_height = 0
        if (this.options.mode === 'horizontal') {
            this.el_effect_size = this.$element.width() * (this.options.partial ? this.partial_part : 1)
            this.$slideline.width(this.items_count * this.el_effect_size)

        }

        if (this.options.autoHeight) {
            this.$items.height('auto')
            this.$items.each(function() {
                var item_height = $(this).height()
                if (item_height > max_height) max_height = item_height
            })
            this.$items.height(max_height)
        } else {
            this.recalculateSlidelineHeight(this.$active.height())
        }
        if (this.options.mode === 'vertical') {
            this._step = this.$active.height()
            new_slideline_height = this.$active.height() * this.options.perView * (this.options.partial ? (1 + 1 - this.partial_part) : 1)
            this.recalculateSlidelineHeight(new_slideline_height, false)
            this.$slideline_inner.css({ top: -1 * this.$active.position().top })
            this.el_effect_size = this._step
        }
    }
    Carousel.prototype.returnSwipedSlide = function() {
        var params = {}
        params[this.animation_position] = this.current_pos_value + this.pos_units
        this.$slideline_inner.animate(params)
    }
    Carousel.prototype._build = function() {
            //mobile don't build
            if ($(window).width() < 768 && this.$element.hasClass("vc-carousel vc-slide")) {
                return;
            }
            var el = this.$element.get(0),
                _touch_start_position = false,
                _touch_start_time = 0,
                _pos_before_touch = 0,
                _diff = 0,
                _moved = false,
                that = this,
                mode = this.options.mode
            this.getActiveIndex()

            this.el_width = 0
            this.items_count = this.$items.length

            this.$slideline = this.$element.find('.vc-carousel-slideline')
            this.slideline = this.$slideline.get(0)
            this.$slideline_inner = this.$slideline.find('> div')
            this.slideline_inner = this.$slideline_inner.get(0)

            this.partial_part = 0.8
            this._slide_width = 0
            this.swipe_velocity = 0.7
            this.current_pos_value = 0
            this.current_index = 0 // TODO: default start position by options
            this.el_effect_size = 0
            this.transition_speed = 600

            this.$left_control = this.$element.find('.vc-left.vc-carousel-control')
            this.$right_control = this.$element.find('.vc-right.vc-carousel-control')

            // Enable autoHeight if partial
            if (this.options.partial) this.options.autoHeight = true
                // Add Css classes for perView > 1
            if (this.options.perView > 1) this.$element.addClass('vc-per-view-more vc-per-view-' + this.options.perView)

            if (mode === 'horizontal') {
                this.pos_units = '%'
                this._step = 100.00 / this.items_count / this.options.perView
                this.animation_position = 'left'
                this.$items.width(this._step + this.pos_units)
                this.touch_direction = 'pageX'
            } else {
                this.pos_units = 'px'
                this.animation_position = 'top'
                this.touch_direction = 'pageY'
            }
            // Hide first control if this.current_index === 0
            if (this.options.hideOnEnd) this.showHideControl()
                // Add partial css class if partial
            if (this.options.partial) this.$element.addClass('vc_partial')
                // Set indicator
            if (this.$indicators.length) {
                var $active_indecators = that.$indicators.children()
                    .slice(this.current_index, this.current_index + this.options.perView)
                    .addClass('vc-active')
                this.options.partial && $active_indecators.last().next().addClass('vc_partial')
            }
            $(window).resize(this.resizeAction.bind(this));
            this.resizeAction()
            if (el.addEventListener) {

                //IE 8 or lower
                el.addEventListener("touchstart", function(e) {
                    _touch_start_position = parseFloat(e[that.touch_direction])
                    _touch_start_time = e.timeStamp
                    _pos_before_touch = that.$slideline_inner.position()[that.animation_position]
                }.bind(this), false)
                el.addEventListener('touchmove', function(e) {
                    _diff = parseFloat(e[that.touch_direction]) - _touch_start_position
                    _moved = Math.abs(_diff) > 0
                    if (!_moved) return true
                    e.preventDefault()
                    that.slideline_inner.style[that.animation_position] = (_pos_before_touch + _diff) + 'px'
                }, false)
                el.addEventListener('touchend', function(e) {
                    var time, part, velocity
                    if (_moved) {
                        time = (e.timeStamp - _touch_start_time) / 1000
                        part = _diff / that.el_effect_size
                        velocity = that.velocity(time, part)
                        if ((velocity.x > that.swipe_velocity && part < 0) || part <= -0.7) {
                            that.setSwipeAnimationSpeed()
                            that.next()
                        } else if (velocity.x > that.swipe_velocity || part >= 0.7) {
                            that.setSwipeAnimationSpeed()
                            that.prev()
                        } else {
                            that.returnSwipedSlide()
                        }
                        _moved = false
                    }
                }, false)
            }
            this.$element.addClass('vc-build')

            return this
        }
        // CAROUSEL PLUGIN DEFINITION
        // ==========================

    var old = $.fn.carousel

    $.fn.carousel = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('vc.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide

            if (!data) $this.data('vc.carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number') data.to(option)
            else if (action) data[action]()
            else if (options.interval) data.pause().cycle()
        })
    }

    $.fn.carousel.Constructor = Carousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old
        return this
    }


    // CAROUSEL DATA-API
    // =================

    $(document).off('click.vc.carousel.data-api').on('click.vc.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {
        var $this = $(this),
            href
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex) options.interval = false
        $target.carousel(options)

        if (slideIndex = $this.attr('data-slide-to')) {
            $target.data('vc.carousel').to(slideIndex)
        }

        e.preventDefault()
    })

    $(window).on('load', function() {
        $('[data-ride="vc-carousel"]').each(function() {
            var $carousel = $(this)
            $carousel.carousel($carousel.data())
        })
    })

})(window.jQuery);;

/* waypoints: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/jquery-waypoints/waypoints.min.js) */
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) { for (var e = 0, n = this.length; e < n; e++) { if (e in this && this[e] === t) return e } return -1 },
        e = [].slice;
    (function(t, e) { if (typeof define === "function" && define.amd) { return define("waypoints", ["jquery"], function(n) { return e(n, t) }) } else { return e(t.jQuery, t) } })(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = { horizontal: {}, vertical: {} };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
                this.waypoints = { horizontal: {}, vertical: {} };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() { e.doScroll(); return e.didScroll = false };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() { n[m]("refresh"); return e.didResize = false };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) { n[m]("refresh") }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) { var n, i; if (r.oldScroll < (n = e.offset) && n <= r.newScroll) { return l.push(e) } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) { return l.push(e) } });
                    l.sort(function(t, e) { return t.offset - e.offset });
                    if (!o) { l.reverse() }
                    return n.each(l, function(t, e) { if (e.options.continuous || t === l.length - 1) { return e.trigger([i]) } })
                });
                return this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = { horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) { i = i.apply(r.element) } else if (typeof i === "string") { i = parseFloat(i); if (r.options.offset.indexOf("%") > -1) { i = Math.ceil(e.contextDimension * i / 100) } }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) { return }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) { return r.trigger([e.backward]) } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) { return r.trigger([e.forward]) } else if (l === null && e.oldScroll >= r.offset) { return r.trigger([e.forward]) }
                    })
                })
            };
            t.prototype.checkEmpty = function() { if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) { this.$element.unbind([p, y].join(" ")); return delete a[this.id] } };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) { t = e.$element.height() }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) { if (!this.enabled) { return } if (this.callback != null) { this.callback.apply(this.element, t) } if (this.options.triggerOnce) { return this.destroy() } };
            t.prototype.disable = function() { return this.enabled = false };
            t.prototype.enable = function() { this.context.refresh(); return this.enabled = true };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) { return [] }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) { return e[t] })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) { e = {} }
                if ((r = e.handler) == null) { e.handler = t }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) { i = t.closest(i) }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) { r = new o(i) }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() { return d._invoke(this, "disable") },
            enable: function() { return d._invoke(this, "enable") },
            destroy: function() { return d._invoke(this, "destroy") },
            prev: function(t, e) { return d._traverse.call(this, t, e, function(t, e, n) { if (e > 0) { return t.push(n[e - 1]) } }) },
            next: function(t, e) { return d._traverse.call(this, t, e, function(t, e, n) { if (e < n.length - 1) { return t.push(n[e + 1]) } }) },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) { t = "vertical" }
                if (e == null) { e = r }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) { n[e](); return true })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) { return d[r].apply(this, t) } else if (n.isFunction(r)) { return d.init.apply(this, arguments) } else if (n.isPlainObject(r)) { return d.init.apply(this, [null, r]) } else if (!r) { return n.error("jQuery Waypoints needs a callback function or handler option.") } else { return n.error("The " + r + " method does not exist in jQuery Waypoints.") }
        };
        n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false };
        h = {
            refresh: function() { return n.each(a, function(t, e) { return e.refresh() }) },
            viewportHeight: function() { var t; return (t = r.innerHeight) != null ? t : i.height() },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) { e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0 }
                if (!e) { return [] }
                r = { horizontal: [], vertical: [] };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) { return i.push(e) });
                    i.sort(function(t, e) { return t.offset - e.offset });
                    r[t] = n.map(i, function(t) { return t.element });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) { if (t == null) { t = r } return h._filter(t, "vertical", function(t, e) { return e.offset <= t.oldScroll.y }) },
            below: function(t) { if (t == null) { t = r } return h._filter(t, "vertical", function(t, e) { return e.offset > t.oldScroll.y }) },
            left: function(t) { if (t == null) { t = r } return h._filter(t, "horizontal", function(t, e) { return e.offset <= t.oldScroll.x }) },
            right: function(t) { if (t == null) { t = r } return h._filter(t, "horizontal", function(t, e) { return e.offset > t.oldScroll.x }) },
            enable: function() { return h._invoke("enable") },
            disable: function() { return h._invoke("disable") },
            destroy: function() { return h._invoke("destroy") },
            extendFn: function(t, e) { return d[t] = e },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) { n[t](); return true })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) { return [] }
                o = [];
                n.each(i.waypoints[e], function(t, e) { if (r(i, e)) { return o.push(e) } });
                o.sort(function(t, e) { return t.offset - e.offset });
                return n.map(o, function(t) { return t.element })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) { return h[n].apply(null, t) } else { return h.aggregate.call(null, n) }
        };
        n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
        return i.load(function() { return n[m]("refresh") })
    })
}).call(this);;

/* themepunchtools: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.plugins.min.js?rev=4.1.4) */


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 09.10.2013
*********************************************/

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t, e) {
    "use strict";

    function n() {
        if (!i.READY) {
            i.event.determineEventTypes();
            for (var t in i.gestures) i.gestures.hasOwnProperty(t) && i.detection.register(i.gestures[t]);
            i.event.onTouch(i.DOCUMENT, i.EVENT_MOVE, i.detection.detect), i.event.onTouch(i.DOCUMENT, i.EVENT_END, i.detection.detect), i.READY = !0
        }
    }
    var i = function(t, e) { return new i.Instance(t, e || {}) };
    i.defaults = { stop_browser_behavior: { userSelect: "none", touchAction: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } }, i.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, i.HAS_TOUCHEVENTS = "ontouchstart" in t, i.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, i.NO_MOUSEEVENTS = i.HAS_TOUCHEVENTS && navigator.userAgent.match(i.MOBILE_REGEX), i.EVENT_TYPES = {}, i.DIRECTION_DOWN = "down", i.DIRECTION_LEFT = "left", i.DIRECTION_UP = "up", i.DIRECTION_RIGHT = "right", i.POINTER_MOUSE = "mouse", i.POINTER_TOUCH = "touch", i.POINTER_PEN = "pen", i.EVENT_START = "start", i.EVENT_MOVE = "move", i.EVENT_END = "end", i.DOCUMENT = document, i.plugins = {}, i.READY = !1, i.Instance = function(t, e) { var r = this; return n(), this.element = t, this.enabled = !0, this.options = i.utils.extend(i.utils.extend({}, i.defaults), e || {}), this.options.stop_browser_behavior && i.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), i.event.onTouch(t, i.EVENT_START, function(t) { r.enabled && i.detection.startDetect(r, t) }), this }, i.Instance.prototype = {
        on: function(t, e) { for (var n = t.split(" "), i = 0; n.length > i; i++) this.element.addEventListener(n[i], e, !1); return this },
        off: function(t, e) { for (var n = t.split(" "), i = 0; n.length > i; i++) this.element.removeEventListener(n[i], e, !1); return this },
        trigger: function(t, e) {
            var n = i.DOCUMENT.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = e;
            var r = this.element;
            return i.utils.hasParent(e.target, r) && (r = e.target), r.dispatchEvent(n), this
        },
        enable: function(t) { return this.enabled = t, this }
    };
    var r = null,
        o = !1,
        s = !1;
    i.event = {
        bindDom: function(t, e, n) { for (var i = e.split(" "), r = 0; i.length > r; r++) t.addEventListener(i[r], n, !1) },
        onTouch: function(t, e, n) {
            var a = this;
            this.bindDom(t, i.EVENT_TYPES[e], function(c) {
                var u = c.type.toLowerCase();
                if (!u.match(/mouse/) || !s) {
                    (u.match(/touch/) || u.match(/pointerdown/) || u.match(/mouse/) && 1 === c.which) && (o = !0), u.match(/touch|pointer/) && (s = !0);
                    var h = 0;
                    o && (i.HAS_POINTEREVENTS && e != i.EVENT_END ? h = i.PointerEvent.updatePointer(e, c) : u.match(/touch/) ? h = c.touches.length : s || (h = u.match(/up/) ? 0 : 1), h > 0 && e == i.EVENT_END ? e = i.EVENT_MOVE : h || (e = i.EVENT_END), h || null === r ? r = c : c = r, n.call(i.detection, a.collectEventData(t, e, c)), i.HAS_POINTEREVENTS && e == i.EVENT_END && (h = i.PointerEvent.updatePointer(e, c))), h || (r = null, o = !1, s = !1, i.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function() {
            var t;
            t = i.HAS_POINTEREVENTS ? i.PointerEvent.getEvents() : i.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i.EVENT_TYPES[i.EVENT_START] = t[0], i.EVENT_TYPES[i.EVENT_MOVE] = t[1], i.EVENT_TYPES[i.EVENT_END] = t[2]
        },
        getTouchList: function(t) { return i.HAS_POINTEREVENTS ? i.PointerEvent.getTouchList() : t.touches ? t.touches : [{ identifier: 1, pageX: t.pageX, pageY: t.pageY, target: t.target }] },
        collectEventData: function(t, e, n) {
            var r = this.getTouchList(n, e),
                o = i.POINTER_TOUCH;
            return (n.type.match(/mouse/) || i.PointerEvent.matchType(i.POINTER_MOUSE, n)) && (o = i.POINTER_MOUSE), { center: i.utils.getCenter(r), timeStamp: (new Date).getTime(), target: n.target, touches: r, eventType: e, pointerType: o, srcEvent: n, preventDefault: function() { this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault() }, stopPropagation: function() { this.srcEvent.stopPropagation() }, stopDetect: function() { return i.detection.stopDetect() } }
        }
    }, i.PointerEvent = {
        pointers: {},
        getTouchList: function() {
            var t = this,
                e = [];
            return Object.keys(t.pointers).sort().forEach(function(n) { e.push(t.pointers[n]) }), e
        },
        updatePointer: function(t, e) { return t == i.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length },
        matchType: function(t, e) { if (!e.pointerType) return !1; var n = {}; return n[i.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == i.POINTER_MOUSE, n[i.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == i.POINTER_TOUCH, n[i.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == i.POINTER_PEN, n[t] },
        getEvents: function() { return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"] },
        reset: function() { this.pointers = {} }
    }, i.utils = {
        extend: function(t, n, i) { for (var r in n) t[r] !== e && i || (t[r] = n[r]); return t },
        hasParent: function(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        },
        getCenter: function(t) { for (var e = [], n = [], i = 0, r = t.length; r > i; i++) e.push(t[i].pageX), n.push(t[i].pageY); return { pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2, pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2 } },
        getVelocity: function(t, e, n) { return { x: Math.abs(e / t) || 0, y: Math.abs(n / t) || 0 } },
        getAngle: function(t, e) {
            var n = e.pageY - t.pageY,
                i = e.pageX - t.pageX;
            return 180 * Math.atan2(n, i) / Math.PI
        },
        getDirection: function(t, e) {
            var n = Math.abs(t.pageX - e.pageX),
                r = Math.abs(t.pageY - e.pageY);
            return n >= r ? t.pageX - e.pageX > 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
        },
        getDistance: function(t, e) {
            var n = e.pageX - t.pageX,
                i = e.pageY - t.pageY;
            return Math.sqrt(n * n + i * i)
        },
        getScale: function(t, e) { return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1 },
        getRotation: function(t, e) { return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0 },
        isVertical: function(t) { return t == i.DIRECTION_UP || t == i.DIRECTION_DOWN },
        stopDefaultBrowserBehavior: function(t, e) {
            var n, i = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (e && t.style) {
                for (var r = 0; i.length > r; r++)
                    for (var o in e) e.hasOwnProperty(o) && (n = o, i[r] && (n = i[r] + n.substring(0, 1).toUpperCase() + n.substring(1)), t.style[n] = e[o]);
                "none" == e.userSelect && (t.onselectstart = function() { return !1 })
            }
        }
    }, i.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function(t, e) { this.current || (this.stopped = !1, this.current = { inst: t, startEvent: i.utils.extend({}, e), lastEvent: !1, name: "" }, this.detect(e)) },
        detect: function(t) { if (this.current && !this.stopped) { t = this.extendEventData(t); for (var e = this.current.inst.options, n = 0, r = this.gestures.length; r > n; n++) { var o = this.gestures[n]; if (!this.stopped && e[o.name] !== !1 && o.handler.call(o, t, this.current.inst) === !1) { this.stopDetect(); break } } return this.current && (this.current.lastEvent = t), t.eventType == i.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t } },
        stopDetect: function() { this.previous = i.utils.extend({}, this.current), this.current = null, this.stopped = !0 },
        extendEventData: function(t) {
            var e = this.current.startEvent;
            if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) { e.touches = []; for (var n = 0, r = t.touches.length; r > n; n++) e.touches.push(i.utils.extend({}, t.touches[n])) }
            var o = t.timeStamp - e.timeStamp,
                s = t.center.pageX - e.center.pageX,
                a = t.center.pageY - e.center.pageY,
                c = i.utils.getVelocity(o, s, a);
            return i.utils.extend(t, { deltaTime: o, deltaX: s, deltaY: a, velocityX: c.x, velocityY: c.y, distance: i.utils.getDistance(e.center, t.center), angle: i.utils.getAngle(e.center, t.center), direction: i.utils.getDirection(e.center, t.center), scale: i.utils.getScale(e.touches, t.touches), rotation: i.utils.getRotation(e.touches, t.touches), startEvent: e }), t
        },
        register: function(t) { var n = t.defaults || {}; return n[t.name] === e && (n[t.name] = !0), i.utils.extend(i.defaults, n, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function(t, e) { return t.index < e.index ? -1 : t.index > e.index ? 1 : 0 }), this.gestures }
    }, i.gestures = i.gestures || {}, i.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: { hold_timeout: 500, hold_threshold: 1 },
        timer: null,
        handler: function(t, e) {
            switch (t.eventType) {
                case i.EVENT_START:
                    clearTimeout(this.timer), i.detection.current.name = this.name, this.timer = setTimeout(function() { "hold" == i.detection.current.name && e.trigger("hold", t) }, e.options.hold_timeout);
                    break;
                case i.EVENT_MOVE:
                    t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                    break;
                case i.EVENT_END:
                    clearTimeout(this.timer)
            }
        }
    }, i.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: { tap_max_touchtime: 250, tap_max_distance: 10, tap_always: !0, doubletap_distance: 20, doubletap_interval: 300 },
        handler: function(t, e) {
            if (t.eventType == i.EVENT_END) {
                var n = i.detection.previous,
                    r = !1;
                if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
                n && "tap" == n.name && t.timeStamp - n.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), r = !0), (!r || e.options.tap_always) && (i.detection.current.name = "tap", e.trigger(i.detection.current.name, t))
            }
        }
    }, i.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: { swipe_max_touches: 1, swipe_velocity: .7 },
        handler: function(t, e) {
            if (t.eventType == i.EVENT_END) {
                if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches) return;
                (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
            }
        }
    }, i.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: { drag_min_distance: 10, drag_max_touches: 1, drag_block_horizontal: !1, drag_block_vertical: !1, drag_lock_to_axis: !1, drag_lock_min_distance: 25 },
        triggered: !1,
        handler: function(t, n) {
            if (i.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(n.options.drag_max_touches > 0 && t.touches.length > n.options.drag_max_touches)) switch (t.eventType) {
                case i.EVENT_START:
                    this.triggered = !1;
                    break;
                case i.EVENT_MOVE:
                    if (t.distance < n.options.drag_min_distance && i.detection.current.name != this.name) return;
                    i.detection.current.name = this.name, (i.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                    var r = i.detection.current.lastEvent.direction;
                    t.drag_locked_to_axis && r !== t.direction && (t.direction = i.utils.isVertical(r) ? 0 > t.deltaY ? i.DIRECTION_UP : i.DIRECTION_DOWN : 0 > t.deltaX ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT), this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), n.trigger(this.name + t.direction, t), (n.options.drag_block_vertical && i.utils.isVertical(t.direction) || n.options.drag_block_horizontal && !i.utils.isVertical(t.direction)) && t.preventDefault();
                    break;
                case i.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, i.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: { transform_min_scale: .01, transform_min_rotation: 1, transform_always_block: !1 },
        triggered: !1,
        handler: function(t, n) {
            if (i.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(2 > t.touches.length)) switch (n.options.transform_always_block && t.preventDefault(), t.eventType) {
                case i.EVENT_START:
                    this.triggered = !1;
                    break;
                case i.EVENT_MOVE:
                    var r = Math.abs(1 - t.scale),
                        o = Math.abs(t.rotation);
                    if (n.options.transform_min_scale > r && n.options.transform_min_rotation > o) return;
                    i.detection.current.name = this.name, this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), o > n.options.transform_min_rotation && n.trigger("rotate", t), r > n.options.transform_min_scale && (n.trigger("pinch", t), n.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
                    break;
                case i.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, i.gestures.Touch = { name: "touch", index: -1 / 0, defaults: { prevent_default: !1, prevent_mouseevents: !1 }, handler: function(t, n) { return n.options.prevent_mouseevents && t.pointerType == i.POINTER_MOUSE ? (t.stopDetect(), e) : (n.options.prevent_default && t.preventDefault(), t.eventType == i.EVENT_START && n.trigger(this.name, t), e) } }, i.gestures.Release = { name: "release", index: 1 / 0, handler: function(t, e) { t.eventType == i.EVENT_END && e.trigger(this.name, t) } }, "object" == typeof module && "object" == typeof module.exports ? module.exports = i : (t.Hammer = i, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function() { return i }))
})(this),
function(t, e) {
    "use strict";
    t !== e && (Hammer.event.bindDom = function(n, i, r) {
        t(n).on(i, function(t) {
            var n = t.originalEvent || t;
            n.pageX === e && (n.pageX = t.pageX, n.pageY = t.pageY), n.target || (n.target = t.target), n.which === e && (n.which = n.button), n.preventDefault || (n.preventDefault = t.preventDefault), n.stopPropagation || (n.stopPropagation = t.stopPropagation), r.call(this, n)
        })
    }, Hammer.Instance.prototype.on = function(e, n) { return t(this.element).on(e, n) }, Hammer.Instance.prototype.off = function(e, n) { return t(this.element).off(e, n) }, Hammer.Instance.prototype.trigger = function(e, n) { var i = t(this.element); return i.has(n.target).length && (i = t(n.target)), i.trigger({ type: e, gesture: n }) }, t.fn.hammer = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("hammer");
            i ? i && e && Hammer.utils.extend(i.options, e) : n.data("hammer", new Hammer(this, e || {}))
        })
    })
}(window.jQuery || window.Zepto);




/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t;
    if (!e.TweenLite) {
        var i, s, r, n, a, o = function(t) {
                var i, s = t.split("."),
                    r = e;
                for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
                return r
            },
            l = o("com.greensock"),
            h = 1e-10,
            _ = [].slice,
            u = function() {},
            m = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) { return i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e }
            }(),
            f = {},
            p = function(i, s, r, n) {
                this.sc = f[i] ? f[i].sc : [], f[i] = this, this.gsClass = null, this.func = r;
                var a = [];
                this.check = function(l) {
                    for (var h, _, u, m, c = s.length, d = c; --c > -1;)(h = f[s[c]] || new p(s[c], [])).gsClass ? (a[c] = h.gsClass, d--) : l && h.sc.push(this);
                    if (0 === d && r)
                        for (_ = ("com.greensock." + i).split("."), u = _.pop(), m = o(_.join("."))[u] = this.gsClass = r.apply(r, a), n && (e[u] = m, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function() { return m }) : "undefined" != typeof module && module.exports && (module.exports = m)), c = 0; this.sc.length > c; c++) this.sc[c].check()
                }, this.check(!0)
            },
            c = t._gsDefine = function(t, e, i, s) { return new p(t, e, i, s) },
            d = l._class = function(t, e, i) { return e = e || function() {}, c(t, [], function() { return e }, i), e };
        c.globals = e;
        var v = [0, 0, 1, 1],
            g = [],
            T = d("easing.Ease", function(t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v }, !0),
            w = T.map = {},
            P = T.register = function(t, e, i, s) {
                for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (n = h[_], r = s ? d("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (r = T.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length; --s > -1;) r = i[s] + ",Power" + s, P(new T(null, null, 1, s), r, "easeOut", !0), P(new T(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), P(new T(null, null, 3, s), r, "easeInOut");
        w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
        var y = d("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
        r = y.prototype, r.addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var o, l, h = this._listeners[t],
                _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) o = h[l], o.c === e && o.s === i ? h.splice(l, 1) : 0 === _ && r > o.pr && (_ = l + 1);
            h.splice(_, 0, { c: e, s: i, up: s, pr: r }), this !== n || a || n.wake()
        }, r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return s.splice(i, 1), void 0
        }, r.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i)
        };
        var b = t.requestAnimationFrame,
            k = t.cancelAnimationFrame,
            A = Date.now || function() { return (new Date).getTime() },
            S = A();
        for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s > -1 && !b;) b = t[i[s] + "RequestAnimationFrame"], k = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
        d("Ticker", function(t, e) {
            var i, s, r, o, l, h = this,
                _ = A(),
                m = e !== !1 && b,
                f = function(t) {
                    S = A(), h.time = (S - _) / 1e3;
                    var e, n = h.time - l;
                    (!i || n > 0 || t === !0) && (h.frame++, l += n + (n >= o ? .004 : o - n), e = !0), t !== !0 && (r = s(f)), e && h.dispatchEvent("tick")
                };
            y.call(h), h.time = h.frame = 0, h.tick = function() { f(!0) }, h.sleep = function() { null != r && (m && k ? k(r) : clearTimeout(r), s = u, r = null, h === n && (a = !1)) }, h.wake = function() { null !== r && h.sleep(), s = 0 === i ? u : m && b ? b : function(t) { return setTimeout(t, 0 | 1e3 * (l - h.time) + 1) }, h === n && (a = !0), f(2) }, h.fps = function(t) { return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, h.wake(), void 0) : i }, h.useRAF = function(t) { return arguments.length ? (h.sleep(), m = t, h.fps(i), void 0) : m }, h.fps(t), setTimeout(function() { m && (!r || 5 > h.frame) && h.useRAF(!1) }, 1500)
        }), r = l.Ticker.prototype = new l.events.EventDispatcher, r.constructor = l.Ticker;
        var x = d("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Q) {
                a || n.wake();
                var i = this.vars.useFrames ? G : Q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        n = x.ticker = new l.Ticker, r = x.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var C = function() { a && A() - S > 2e3 && n.wake(), setTimeout(C, 2e3) };
        C(), r.play = function(t, e) { return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1) }, r.pause = function(t, e) { return arguments.length && this.seek(t, e), this.paused(!0) }, r.resume = function(t, e) { return arguments.length && this.seek(t, e), this.paused(!1) }, r.seek = function(t, e) { return this.totalTime(Number(t), e !== !1) }, r.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, r.reverse = function(t, e) { return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, r.render = function() {}, r.invalidate = function() { return this }, r.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) { return a || n.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, r._kill = function() { return this._enabled(!1, !1) }, r.kill = function(t, e) { return this._kill(t, e), this }, r._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, r._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, r.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, r.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, r.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, r.totalTime = function(t, e, i) {
            if (a || n.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration() }, r.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed }, r.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || n.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var R = d("core.SimpleTimeline", function(t) { x.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        r = R.prototype = new x, r.constructor = R, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this }, r.render = function(t, e, i) { var s, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s }, r.rawTime = function() { return a || n.wake(), this._totalTime };
        var D = d("TweenLite", function(e, i, s) {
                if (x.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? j[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : j[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                    for (this._targets = a = _.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(_.call(n, 0))) : (this._siblings[r] = B(n, this, !1), 1 === l && this._siblings[r].length > 1 && q(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                else this._propLookup = {}, this._siblings = B(e, this, !1), 1 === l && this._siblings.length > 1 && q(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
            E = function(e) { return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
            I = function(t, e) {
                var i, s = {};
                for (i in t) F[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        r = D.prototype = new x, r.constructor = D, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = !1, D.version = "1.11.2", D.defaultEase = r._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = n, D.autoSleep = !0, D.selector = t.$ || t.jQuery || function(e) { return t.$ ? (D.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e };
        var O = D._internals = { isArray: m, isSelector: E },
            N = D._plugins = {},
            L = D._tweenLookup = {},
            U = 0,
            F = O.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1 },
            j = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
            G = x._rootFramesTimeline = new R,
            Q = x._rootTimeline = new R;
        Q._startTime = n.time, G._startTime = n.frame, Q._active = G._active = !0, x._updateRoot = function() {
            if (Q.render((n.time - Q._startTime) * Q._timeScale, !1, !1), G.render((n.frame - G._startTime) * G._timeScale, !1, !1), !(n.frame % 120)) {
                var t, e, i;
                for (i in L) {
                    for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete L[i]
                }
                if (i = Q._first, (!i || i._paused) && D.autoSleep && !G._first && 1 === n._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || n.sleep()
                }
            }
        }, n.addEventListener("tick", x._updateRoot);
        var B = function(t, e, i) {
                var s, r, n = t._gsTweenID;
                if (L[n || (t._gsTweenID = n = "t" + U++)] || (L[n] = { target: t, tweens: [] }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                    for (; --r > -1;) s[r] === e && s.splice(r, 1);
                return L[n].tweens
            },
            q = function(t, e, i, s, r) {
                var n, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = r.length, n = 0; l > n; n++)
                        if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var _, u = e._startTime + h,
                    m = [],
                    f = 0,
                    p = 0 === e._duration;
                for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (_ = _ || $(e, 0, p), 0 === $(o, _, p) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + h > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
                for (n = f; --n > -1;) o = m[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            $ = function(t, e, i) {
                for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                    if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * h > n - e ? h : (n += t.totalDuration() / t._timeScale / r) > e + h ? 0 : n - e - h
            };
        r._init = function() {
            var t, e, i, s, r = this.vars,
                n = this._overwrittenProps,
                a = this._duration,
                o = r.immediateRender,
                l = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = D.to(this.target, 0, r.startAt), o)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== a) return
            } else if (r.runBackwards && 0 !== a)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else { i = {}; for (s in r) F[s] && "autoCSS" !== s || (i[s] = r[s]); if (i.overwrite = 0, i.data = "isFromStart", this._startAt = D.to(this.target, 0, i), r.immediateRender) { if (0 === this._time) return } else this._startAt.render(-1, !0) }
            if (this._ease = l ? l instanceof T ? r.easeParams instanceof Array ? l.config.apply(l, r.easeParams) : l : "function" == typeof l ? new T(l, r.easeParams) : w[l] || D.defaultEase : D.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && D._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(e, i, s, r) {
            var n, a, o, l, h, _;
            if (null == e) return !1;
            this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && I(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], F[n]) _ && (_ instanceof Array || _.push && m(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (N[n] && (l = new N[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: n, pg: !0, pr: l._priority }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = h = { _next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0 }, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && q(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
        }, r.render = function(t, e, i) {
            var s, r, n, a, o = this._time,
                l = this._duration;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === l && (a = this._rawPrevTime, (0 === t || 0 > a || a === h) && a !== t && (i = !0, a > h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t ? t : h);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && this._rawPrevTime > h) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = a = !e || t ? t : h)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var _ = t / l,
                    u = this._easeType,
                    m = this._easePower;
                (1 === u || 3 === u && _ >= .5) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === m ? _ *= _ : 2 === m ? _ *= _ * _ : 3 === m ? _ *= _ * _ * _ : 4 === m && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : .5 > t / l ? _ / 2 : 1 - _ / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || i && 0 === this._time && 0 === o || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || g), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0)))
            }
        }, r._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var i, s, r, n, a, o, l, h;
            if ((m(e) || E(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) { a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all"; break }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) { l = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill); for (r in l)(n = a[r]) && (n.pg && n.t._kill(l) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), h && (s[r] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) }
            }
            return o
        }, r.invalidate = function() { return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this }, r._enabled = function(t, e) {
            if (a || n.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = B(s[i], this, !0);
                else this._siblings = B(this.target, this, !0)
            }
            return x.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, D.to = function(t, e, i) { return new D(t, e, i) }, D.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i) }, D.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s) }, D.delayedCall = function(t, e, i, s, r) { return new D(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: r, overwrite: 0 }) }, D.set = function(t, e) { return new D(t, 0, e) }, D.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, s, r, n;
            if ((m(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)
                    for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
            } else
                for (s = B(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t) };
        var M = d("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = M.prototype }, !0);
        if (r = M.prototype, M.version = "1.10.1", M.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, r, n) { var a, o; return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n }, o._next && (o._next._prev = o), o) : void 0 }, r.setRatio = function(t) { for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next }, r._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, r._roundProps = function(t, e) { for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, D._onPluginEvent = function(t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, M.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === M.API && (N[(new t[e])._propName] = t[e]); return !0 }, c.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    r = t.overwriteProps,
                    n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                    a = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { M.call(this, i, s), this._overwriteProps = r || [] }, t.global === !0),
                    o = a.prototype = new M(i);
                o.constructor = a, a.API = t.API;
                for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, M.activate([a]), a
            }, i = t._gsQueue) { for (s = 0; i.length > s; s++) i[s](); for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r) }
        a = !1
    }
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = window.GreenSockGlobals || window,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function(e, i) {
                var s = h("easing." + e, function() {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function() {},
            u = function(t, e, i, s) { var r = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new s }, !0); return _(r, t), r },
            c = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
            p = function(e, i) {
                var s = h("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function(t) { return new s(t) }, s
            },
            f = u("Back", p("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), p("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), p("BackInOut", function(t) { return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
            m = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0 }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) { var e = t + (.5 - t) * this._p; return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) { return new m(t, e, i) }, e = h("easing.SteppedEase", function(t) { t = t || 1, this._p1 = 1 / t, this._p2 = t + 1 }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1 }, d.config = e.config = function(t) { return new e(t) }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = { x: i, y: s };
            for (l.sort(function(t, e) { return t.x - e.x }), o = new c(1, 1, null), p = u; --p > -1;) a = l[p], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) { return new i(t) }, i.ease = new i, u("Bounce", l("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), l("BounceIn", function(t) { return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), l("BounceInOut", function(t) { var e = .5 > t; return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), u("Circ", l("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), l("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), l("CircInOut", function(t) { return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) { this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0) }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) { return new r(t, e) }, r
        }, u("Elastic", s("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .3), s("ElasticIn", function(t) { return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2)) }, .3), s("ElasticInOut", function(t) { return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .45)), u("Expo", l("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), l("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), l("ExpoInOut", function(t) { return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), u("Sine", l("SineOut", function(t) { return Math.sin(t * o) }), l("SineIn", function(t) { return -Math.cos(t * o) + 1 }), l("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, s, r, n, a = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio },
            o = {},
            l = a.prototype = new t("css");
        l.constructor = a, a.version = "1.11.2", a.API = 2, a.defaultTransformPerspective = 0, l = "px", a.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l };
        var h, u, _, p, f, c, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            v = /[^\d\-\.]/g,
            y = /(?:\d|\-|\+|=|#|\.)*/g,
            T = /opacity *= *([^)]*)/,
            x = /opacity:([^;]*)/,
            w = /alpha\(opacity *=.+?\)/i,
            b = /^(rgb|hsl)/,
            P = /([A-Z])/g,
            S = /-([a-z])/gi,
            R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            k = function(t, e) { return e.toUpperCase() },
            C = /(?:Left|Right|Width)/i,
            A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            D = /,(?=[^\)]*(?:\(|$))/gi,
            M = Math.PI / 180,
            L = 180 / Math.PI,
            N = {},
            X = document,
            F = X.createElement("div"),
            I = X.createElement("img"),
            E = a._internals = { _specialProps: o },
            Y = navigator.userAgent,
            z = function() {
                var t, e = Y.indexOf("Android"),
                    i = X.createElement("div");
                return _ = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === e || Number(Y.substr(e + 8, 1)) > 3), f = _ && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), p = -1 !== Y.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y), c = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
            }(),
            U = function(t) { return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
            B = function(t) { window.console && console.log(t) },
            j = "",
            V = "",
            q = function(t, e) { e = e || F; var i, s, r = e.style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];); return s >= 0 ? (V = 3 === s ? "ms" : i[s], j = "-" + V.toLowerCase() + "-", V + t) : null },
            W = X.defaultView ? X.defaultView.getComputedStyle : function() {},
            Q = a.getStyle = function(t, e, i, s, r) { var n; return z || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || W(t, null)) ? (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t) },
            Z = function(t, e, i, s, r) {
                if ("px" === s || !s) return i;
                if ("auto" === s || !i) return 0;
                var n, a = C.test(e),
                    o = t,
                    l = F.style,
                    h = 0 > i;
                return h && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && o.appendChild ? l[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || X.body, l[a ? "width" : "height"] = i + s), o.appendChild(F), n = parseFloat(F[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(F), 0 !== n || r || (n = Z(t, e, i, s, !0))), h ? -n : n
            },
            H = function(t, e, i) {
                if ("absolute" !== Q(t, "position", i)) return 0;
                var s = "left" === e ? "Left" : "Top",
                    r = Q(t, "margin" + s, i);
                return t["offset" + s] - (Z(t, e, parseFloat(r), r.replace(y, "")) || 0)
            },
            $ = function(t, e) {
                var i, s, r = {};
                if (e = e || W(t, null))
                    if (i = e.length)
                        for (; --i > -1;) r[e[i].replace(S, k)] = e.getPropertyValue(e[i]);
                    else
                        for (i in e) r[i] = e[i];
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 !== r[i] && (r[i.replace(S, k)] = e[i]);
                return z || (r.opacity = U(t)), s = be(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, we && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
            },
            G = function(t, e, i, s, r) {
                var n, a, o, l = {},
                    h = t.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new _e(h, a, h[a], o)));
                if (s)
                    for (a in s) "className" !== a && (l[a] = s[a]);
                return { difs: l, firstMPT: o }
            },
            K = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            te = function(t, e, i) {
                var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = K[e],
                    n = r.length;
                for (i = i || W(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                return s
            },
            ee = function(t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var i = t.split(" "),
                    s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
            },
            ie = function(t, e) { return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) },
            se = function(t, e) { return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t) },
            re = function(t, e, i, s) { var r, n, a, o, l = 1e-6; return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : L) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o },
            ne = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
            ae = function(t, e, i) { return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5 },
            oe = function(t) { var e, i, s, r, n, a; return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(d) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black },
            le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in ne) le += "|" + l + "\\b";
        le = RegExp(le + ")", "gi");
        var he = function(t, e, i, s) {
                if (null == t) return function(t) { return t };
                var r, n = e ? (t.match(le) || [""])[0] : "",
                    a = t.split(n).join("").match(g) || [],
                    o = t.substr(0, t.indexOf(a[0])),
                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    h = -1 !== t.indexOf(" ") ? " " : ",",
                    u = a.length,
                    _ = u > 0 ? a[0].replace(d, "") : "";
                return u ? r = e ? function(t) {
                    var e, p, f, c;
                    if ("number" == typeof t) t += _;
                    else if (s && D.test(t)) { for (c = t.replace(D, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]); return c.join(",") }
                    if (e = (t.match(le) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, u > f--)
                        for (; u > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                    return o + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, n, p;
                    if ("number" == typeof t) t += _;
                    else if (s && D.test(t)) { for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]); return n.join(",") }
                    if (e = t.match(g) || [], p = e.length, u > p--)
                        for (; u > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                    return o + e.join(h) + l
                } : function(t) { return t }
            },
            ue = function(t) {
                return t = t.split(","),
                    function(e, i, s, r, n, a, o) { var l, h = (i + "").split(" "); for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return r.parse(e, o, n, a) }
            },
            _e = (E._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                    for (o = n.firstMPT; o;) {
                        if (i = o.t, i.type) {
                            if (1 === i.type) {
                                for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                i.e = r
                            }
                        } else i.e = i.s + i.xs0;
                        o = o._next
                    }
            }, function(t, e, i, s, r) { this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s) }),
            pe = (E._parseToProxy = function(t, e, i, s, r, n) {
                var a, o, l, h, u, _ = s,
                    p = {},
                    f = {},
                    c = i._transform,
                    d = N;
                for (i._transform = null, N = e, s = u = i.parse(t, e, s, r), N = d, n && (i._transform = c, _ && (_._prev = null, _._prev && (_._prev._next = null))); s && s !== _;) {
                    if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (h = new _e(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                        for (a = s.l; --a > 0;) l = "xn" + a, o = s.p + "_" + l, f[o] = s.data[l], p[o] = s[l], n || (h = new _e(s, l, o, h, s.rxp[l]));
                    s = s._next
                }
                return { proxy: p, end: f, firstMPT: h, pt: u }
            }, E.CSSPropTween = function(t, e, s, r, a, o, l, h, u, _, p) { this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof pe || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === _ ? s : _, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this) }),
            fe = a.parseComplex = function(t, e, i, s, r, n, a, o, l, u) {
                i = i || n || "", a = new pe(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, s), s += "";
                var _, p, f, c, g, v, y, T, x, w, P, S, R = i.split(", ").join(",").split(" "),
                    k = s.split(", ").join(",").split(" "),
                    C = R.length,
                    A = h !== !1;
                for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), C = R.length), C !== k.length && (R = (n || "").split(" "), C = R.length), a.plugin = l, a.setRatio = u, _ = 0; C > _; _++)
                    if (c = R[_], g = k[_], T = parseFloat(c), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(m, ""), A && -1 !== g.indexOf("px"), !0);
                    else if (r && ("#" === c.charAt(0) || ne[c] || b.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = oe(c), g = oe(g), x = c.length + g.length > 6, x && !z && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[_]).join("transparent")) : (z || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? "," : S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                else if (v = c.match(d)) {
                    if (y = g.match(m), !y || y.length !== v.length) return a;
                    for (f = 0, p = 0; v.length > p; p++) P = v[p], w = c.indexOf(P, f), a.appendXtra(c.substr(f, w - f), Number(P), ie(y[p], P), "", A && "px" === c.substr(w + P.length, 2), 0 === p), f = w + P.length;
                    a["xs" + a.l] += c.substr(f)
                } else a["xs" + a.l] += a.l ? " " + c : c;
                if (-1 !== s.indexOf("=") && a.data) {
                    for (S = a.xs0 + a.data.s, _ = 1; a.l > _; _++) S += a["xs" + _] + a.data["xn" + _];
                    a.e = S + a["xs" + _]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
            },
            ce = 9;
        for (l = pe.prototype, l.l = l.pr = 0; --ce > 0;) l["xn" + ce] = 0, l["xs" + ce] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
            var a = this,
                o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var de = function(t, e) { e = e || {}, this.p = e.prefix ? q(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || he(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
            me = E._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = { parser: i });
                var s, r, n = t.split(","),
                    a = e.defaultValue;
                for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new de(n[s], e)
            },
            ge = function(t) {
                if (!o[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    me(t, { parser: function(t, i, s, r, n, a, l) { var h = (window.GreenSockGlobals || window).com.greensock.plugins[e]; return h ? (h._cssRegister(), o[s].parse(t, i, s, r, n, a, l)) : (B("Error: " + e + " js file not loaded."), n) } })
                }
            };
        l = de.prototype, l.parseComplex = function(t, e, i, s, r, n) {
            var a, o, l, h, u, _, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, p && (u = e.indexOf(p), _ = i.indexOf(p), u !== _ && (i = -1 === _ ? l : o, i[a] += " " + p));
                e = o.join(", "), i = l.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, l.parse = function(t, e, i, s, n, a) { return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a) }, a.registerSpecialProp = function(t, e, i) { me(t, { parser: function(t, s, r, n, a, o) { var l = new pe(t, r, 0, 0, a, 2, r, !1, i); return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l }, priority: i }) };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
            ye = q("transform"),
            Te = j + "transform",
            xe = q("transformOrigin"),
            we = null !== q("perspective"),
            be = function(t, e, i, s) {
                if (t._gsTransform && i && !s) return t._gsTransform;
                var r, n, o, l, h, u, _, p, f, c, d, m, g, v = i ? t._gsTransform || { skewY: 0 } : { skewY: 0 },
                    y = 0 > v.scaleX,
                    T = 2e-5,
                    x = 1e5,
                    w = 179.99,
                    b = w * M,
                    P = we ? parseFloat(Q(t, xe, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                for (ye ? r = Q(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) l = Number(n[o]), n[o] = (h = l - (l |= 0)) ? (0 | h * x + (0 > h ? -.5 : .5)) / x + l : l;
                if (16 === n.length) {
                    var S = n[8],
                        R = n[9],
                        k = n[10],
                        C = n[12],
                        O = n[13],
                        D = n[14];
                    if (v.zOrigin && (D = -v.zOrigin, C = S * D - n[12], O = R * D - n[13], D = k * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                        var N, X, F, I, E, Y, z, U = n[0],
                            B = n[1],
                            j = n[2],
                            V = n[3],
                            q = n[4],
                            W = n[5],
                            Z = n[6],
                            H = n[7],
                            $ = n[11],
                            G = Math.atan2(Z, k),
                            K = -b > G || G > b;
                        v.rotationX = G * L, G && (I = Math.cos(-G), E = Math.sin(-G), N = q * I + S * E, X = W * I + R * E, F = Z * I + k * E, S = q * -E + S * I, R = W * -E + R * I, k = Z * -E + k * I, $ = H * -E + $ * I, q = N, W = X, Z = F), G = Math.atan2(S, U), v.rotationY = G * L, G && (Y = -b > G || G > b, I = Math.cos(-G), E = Math.sin(-G), N = U * I - S * E, X = B * I - R * E, F = j * I - k * E, R = B * E + R * I, k = j * E + k * I, $ = V * E + $ * I, U = N, B = X, j = F), G = Math.atan2(B, W), v.rotation = G * L, G && (z = -b > G || G > b, I = Math.cos(-G), E = Math.sin(-G), U = U * I + q * E, X = B * I + W * E, W = B * -E + W * I, Z = j * -E + Z * I, B = X), z && K ? v.rotation = v.rotationX = 0 : z && Y ? v.rotation = v.rotationY = 0 : Y && K && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(U * U + B * B) * x + .5) / x, v.scaleY = (0 | Math.sqrt(W * W + R * R) * x + .5) / x, v.scaleZ = (0 | Math.sqrt(Z * Z + k * k) * x + .5) / x, v.skewX = 0, v.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, v.x = C, v.y = O, v.z = D
                    }
                } else if (!(we && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === Q(t, "display", e))) {
                    var J = n.length >= 6,
                        te = J ? n[0] : 1,
                        ee = n[1] || 0,
                        ie = n[2] || 0,
                        se = J ? n[3] : 1;
                    v.x = n[4] || 0, v.y = n[5] || 0, u = Math.sqrt(te * te + ee * ee), _ = Math.sqrt(se * se + ie * ie), p = te || ee ? Math.atan2(ee, te) * L : v.rotation || 0, f = ie || se ? Math.atan2(ie, se) * L + p : v.skewX || 0, c = u - Math.abs(v.scaleX || 0), d = _ - Math.abs(v.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (y ? (u *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (_ *= -1, f += 0 >= f ? 180 : -180)), m = (p - v.rotation) % 180, g = (f - v.skewX) % 180, (void 0 === v.skewX || c > T || -T > c || d > T || -T > d || m > -w && w > m && false | m * x || g > -w && w > g && false | g * x) && (v.scaleX = u, v.scaleY = _, v.rotation = p, v.skewX = f), we && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                }
                v.zOrigin = P;
                for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
                return i && (t._gsTransform = v), v
            },
            Pe = function(t) {
                var e, i, s = this.data,
                    r = -s.rotation * M,
                    n = r + s.skewX * M,
                    a = 1e5,
                    o = (0 | Math.cos(r) * s.scaleX * a) / a,
                    l = (0 | Math.sin(r) * s.scaleX * a) / a,
                    h = (0 | Math.sin(n) * -s.scaleY * a) / a,
                    u = (0 | Math.cos(n) * s.scaleY * a) / a,
                    _ = this.t.style,
                    p = this.t.currentStyle;
                if (p) {
                    i = l, l = -h, h = -i, e = p.filter, _.filter = "";
                    var f, d, m = this.t.offsetWidth,
                        g = this.t.offsetHeight,
                        v = "absolute" !== p.position,
                        x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                        w = s.x,
                        b = s.y;
                    if (null != s.ox && (f = (s.oxp ? .01 * m * s.ox : s.ox) - m / 2, d = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + d * l), b += d - (f * h + d * u)), v ? (f = m / 2, d = g / 2, x += ", Dx=" + (f - (f * o + d * l) + w) + ", Dy=" + (d - (f * h + d * u) + b) + ")") : x += ", sizingMethod='auto expand')", _.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, x) : x + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && _.removeAttribute("filter")), !v) { var P, S, R, k = 8 > c ? 1 : -1; for (f = s.ieOffsetX || 0, d = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ce = 0; 4 > ce; ce++) S = J[ce], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== s[S] ? 2 > ce ? -s.ieOffsetX : -s.ieOffsetY : 2 > ce ? f - s.ieOffsetX : d - s.ieOffsetY, _[S] = (s[S] = Math.round(i - R * (0 === ce || 2 === ce ? 1 : k))) + "px" }
                }
            },
            Se = function() {
                var t, e, i, s, r, n, a, o, l, h, u, _, f, c, d, m, g, v, y, T, x, w, b, P, S, R, k = this.data,
                    C = this.t.style,
                    A = k.rotation * M,
                    O = k.scaleX,
                    D = k.scaleY,
                    L = k.scaleZ,
                    N = k.perspective;
                if (p && (P = C.top ? "top" : C.bottom ? "bottom" : parseFloat(Q(this.t, "top", null, !1)) ? "bottom" : "top", T = Q(this.t, P, null, !1), S = parseFloat(T) || 0, R = T.substr((S + "").length) || "px", k._ffFix = !k._ffFix, C[P] = (k._ffFix ? S + .05 : S - .05) + R, S = 1e-4, S > O && O > -S && (O = L = 2e-5), S > D && D > -S && (D = L = 2e-5)), A || k.skewX) v = Math.cos(A), y = Math.sin(A), t = v, r = y, k.skewX && (A -= k.skewX * M, v = Math.cos(A), y = Math.sin(A)), e = -y, n = v;
                else {
                    if (!(k.rotationY || k.rotationX || 1 !== L || N)) return C[ye] = "translate3d(" + k.x + "px," + k.y + "px," + k.z + "px)" + (1 !== O || 1 !== D ? " scale(" + O + "," + D + ")" : ""), void 0;
                    t = n = 1, e = r = 0
                }
                u = 1, i = s = a = o = l = h = _ = f = c = 0, d = N ? -1 / N : 0, m = k.zOrigin, g = 1e5, A = k.rotationY * M, A && (v = Math.cos(A), y = Math.sin(A), l = u * -y, f = d * -y, i = t * y, a = r * y, u *= v, d *= v, t *= v, r *= v), A = k.rotationX * M, A && (v = Math.cos(A), y = Math.sin(A), T = e * v + i * y, x = n * v + a * y, w = h * v + u * y, b = c * v + d * y, i = e * -y + i * v, a = n * -y + a * v, u = h * -y + u * v, d = c * -y + d * v, e = T, n = x, h = w, c = b), 1 !== L && (i *= L, a *= L, u *= L, d *= L), 1 !== D && (e *= D, n *= D, h *= D, c *= D), 1 !== O && (t *= O, r *= O, l *= O, f *= O), m && (_ -= m, s = i * _, o = a * _, _ = u * _ + m), s = (T = (s += k.x) - (s |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + s : s, o = (T = (o += k.y) - (o |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + o : o, _ = (T = (_ += k.z) - (_ |= 0)) ? (0 | T * g + (0 > T ? -.5 : .5)) / g + _ : _, C[ye] = "matrix3d(" + [(0 | t * g) / g, (0 | r * g) / g, (0 | l * g) / g, (0 | f * g) / g, (0 | e * g) / g, (0 | n * g) / g, (0 | h * g) / g, (0 | c * g) / g, (0 | i * g) / g, (0 | a * g) / g, (0 | u * g) / g, (0 | d * g) / g, s, o, _, N ? 1 + -_ / N : 1].join(",") + ")"
            },
            Re = function() {
                var t, e, i, s, r, n, a, o, l, h = this.data,
                    u = this.t,
                    _ = u.style;
                p && (t = _.top ? "top" : _.bottom ? "bottom" : parseFloat(Q(u, "top", null, !1)) ? "bottom" : "top", e = Q(u, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", h._ffFix = !h._ffFix, _[t] = (h._ffFix ? i + .05 : i - .05) + s), h.rotation || h.skewX ? (r = h.rotation * M, n = r - h.skewX * M, a = 1e5, o = h.scaleX * a, l = h.scaleY * a, _[ye] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -l) / a + "," + (0 | Math.cos(n) * l) / a + "," + h.x + "," + h.y + ")") : _[ye] = "matrix(" + h.scaleX + ",0,0," + h.scaleY + "," + h.x + "," + h.y + ")"
            };
        me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(t, e, i, s, n, a, o) {
                if (s._transform) return n;
                var l, h, u, _, p, f, c, d = s._transform = be(t, r, !0, o.parseTransform),
                    m = t.style,
                    g = 1e-6,
                    v = ve.length,
                    y = o,
                    T = {};
                if ("string" == typeof y.transform && ye) u = m.cssText, m[ye] = y.transform, m.display = "block", l = be(t, null, !1), m.cssText = u;
                else if ("object" == typeof y) {
                    if (l = { scaleX: se(null != y.scaleX ? y.scaleX : y.scale, d.scaleX), scaleY: se(null != y.scaleY ? y.scaleY : y.scale, d.scaleY), scaleZ: se(null != y.scaleZ ? y.scaleZ : y.scale, d.scaleZ), x: se(y.x, d.x), y: se(y.y, d.y), z: se(y.z, d.z), perspective: se(y.transformPerspective, d.perspective) }, c = y.directionalRotation, null != c)
                        if ("object" == typeof c)
                            for (u in c) y[u] = c[u];
                        else y.rotation = c;
                    l.rotation = re("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : "rotationZ" in y ? y.rotationZ : d.rotation, d.rotation, "rotation", T), we && (l.rotationX = re("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", T), l.rotationY = re("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", T)), l.skewX = null == y.skewX ? d.skewX : re(y.skewX, d.skewX), l.skewY = null == y.skewY ? d.skewY : re(y.skewY, d.skewY), (h = l.skewY - d.skewY) && (l.skewX += h, l.rotation += h)
                }
                for (null != y.force3D && (d.force3D = y.force3D, f = !0), p = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, p || null == y.scale || (l.scaleZ = 1); --v > -1;) i = ve[v], _ = l[i] - d[i], (_ > g || -g > _ || null != N[i]) && (f = !0, n = new pe(d, i, d[i], _, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                return _ = y.transformOrigin, (_ || we && p && d.zOrigin) && (ye ? (f = !0, i = xe, _ = (_ || Q(t, i, r, !1, "50% 50%")) + "", n = new pe(m, i, 0, 0, n, -1, "transformOrigin"), n.b = m[i], n.plugin = a, we ? (u = d.zOrigin, _ = _.split(" "), d.zOrigin = (_.length > 2 && (0 === u || "0px" !== _[2]) ? parseFloat(_[2]) : u) || 0, n.xs0 = n.e = m[i] = _[0] + " " + (_[1] || "50%") + " 0px", n = new pe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = m[i] = _) : ee(_ + "", d)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
            },
            prefix: !0
        }), me("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), me("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, l, h, u, _, p, f, c, d, m, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    P = t.style;
                for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = q(b[l])), _ = u = Q(t, b[l], r, !1, "0px"), -1 !== _.indexOf(" ") && (u = _.split(" "), _ = u[0], u = u[1]), p = h = o[l], f = parseFloat(_), v = _.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = Z(t, "borderLeft", f, v), x = Z(t, "borderTop", f, v), "%" === g ? (_ = 100 * (T / d) + "%", u = 100 * (x / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"), _ = T / w + "em", u = x / w + "em") : (_ = T + "px", u = x + "px"), y && (p = parseFloat(_) + c + g, h = parseFloat(u) + c + g)), a = fe(P, b[l], _ + " " + u, p + " " + h, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: he("0px 0px 0px 0px", !1, !0)
        }), me("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, l, h, u, _, p, f = "background-position",
                    d = r || W(t, null),
                    m = this.format((d ? c ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    g = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
                    for (o = m.split(" "), l = g.split(" "), I.setAttribute("src", p), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (_ = 0 === h ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[h] = u ? parseFloat(m) / 100 * _ + "px" : 100 * (parseFloat(m) / _) + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
            },
            formatter: ee
        }), me("backgroundSize", { defaultValue: "0 0", formatter: ee }), me("perspective", { defaultValue: "0px", prefix: !0 }), me("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), me("transformStyle", { prefix: !0 }), me("backfaceVisibility", { prefix: !0 }), me("userSelect", { prefix: !0 }), me("margin", { parser: ue("marginTop,marginRight,marginBottom,marginLeft") }), me("padding", { parser: ue("paddingTop,paddingRight,paddingBottom,paddingLeft") }), me("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, s, n, a) { var o, l, h; return 9 > c ? (l = t.currentStyle, h = 8 > c ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a) } }), me("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), me("autoRound,strictUnits", { parser: function(t, e, i, s, r) { return r } }), me("border", { defaultValue: "0px solid #000", parser: function(t, e, i, s, n, a) { return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0] } }), me("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r) {
                var n = t.style,
                    a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
            }
        });
        var ke = function(t) {
            var e, i = this.t,
                s = i.filter || Q(this.data, "filter"),
                r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        me("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                    l = t.style,
                    h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), z ? n = new pe(l, "opacity", o, e - o, n) : (n = new pe(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = ke), h && (n = new pe(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
            }
        });
        var Ce = function(t, e) { e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e)) },
            Ae = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.className = 0 === t ? this.b : this.e;
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ce(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        me("className", {
            parser: function(t, e, s, n, a, o, l) {
                var h, u, _, p, f, c = t.className,
                    d = t.style.cssText;
                if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ae, a.pr = -11, i = !0, a.b = c, u = $(t, r), _ = t._gsClassPT) {
                    for (p = {}, f = _.data; f;) p[f.p] = 1, f = f._next;
                    _.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, h = G(t, u, $(t), l, p), t.className = c, a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)), a
            }
        });
        var Oe = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n = this.t.style,
                    a = o.transform.parse;
                if ("all" === this.e) n.cssText = "", r = !0;
                else
                    for (e = this.e.split(","), s = e.length; --s > -1;) i = e[s], o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? xe : o[i].p), Ce(n, i);
                r && (Ce(n, ye), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (me("clearProps", { parser: function(t, e, s, r, n) { return n = new pe(t, s, 0, 0, n, 2), n.setRatio = Oe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n } }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ce = l.length; ce--;) ge(l[ce]);
        l = a.prototype, l._firstPT = null, l._onInitTween = function(t, e, o) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = W(t, ""), n = this._overwriteProps;
            var l, p, c, d, m, g, v, y, T, w = t.style;
            if (u && "" === w.zIndex && (l = Q(t, "zIndex", r), ("auto" === l || "" === l) && (w.zIndex = 0)), "string" == typeof e && (d = w.cssText, l = $(t, r), w.cssText = d + ";" + e, l = G(t, l, $(t)).difs, !z && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = d), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye ? _ && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && (w.zIndex = 0)), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && we ? Se : ye ? Re : Pe, y.data = this._transform || be(t, r, !0), n.pop()
            }
            if (i) {
                for (; p;) {
                    for (g = p._next, c = d; c && c.pr > p.pr;) c = c._next;
                    (p._prev = c ? c._prev : m) ? p._prev._next = p: d = p, (p._next = c) ? c._prev = p : m = p, p = g
                }
                this._firstPT = d
            }
            return !0
        }, l.parse = function(t, e, i, n) { var a, l, u, _, p, f, c, d, m, g, v = t.style; for (a in e) f = e[a], l = o[a], l ? i = l.parse(t, f, a, this, i, n, e) : (p = Q(t, a, r) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && b.test(f) ? (m || (f = oe(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = fe(v, a, p, f, !0, "transparent", i, 0, n)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (u = parseFloat(p), c = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (u = te(t, a, r), c = "px") : "left" === a || "top" === a ? (u = H(t, a, r), c = "px") : (u = "opacity" !== a ? 0 : 1, c = "")), g = m && "=" === f.charAt(1), g ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), d = f.replace(y, "")) : (_ = parseFloat(f), d = m ? f.substr((_ + "").length) || "" : ""), "" === d && (d = s[a] || c), f = _ || 0 === _ ? (g ? _ + u : _) + d : e[a], c !== d && "" !== d && (_ || 0 === _) && (u || 0 === u) && (u = Z(t, a, u, c), "%" === d ? (u /= Z(t, a, 100, "%") / 100, u > 100 && (u = 100), e.strictUnits !== !0 && (p = u + "%")) : "em" === d ? u /= Z(t, a, 1, "em") : (_ = Z(t, a, _, d), d = "px"), g && (_ || 0 === _) && (f = _ + u + d)), g && (_ += u), !u && 0 !== u || !_ && 0 !== _ ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, _ || u || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : B("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, u, _ - u, i, 0, a, h !== !1 && ("px" === d || "zIndex" === a), 0, p, f), i.xs0 = d)) : i = fe(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n); return i }, l.setRatio = function(t) {
            var e, i, s, r = this._firstPT,
                n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r;) {
                        if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : n > e && e > -n && (e = 0), r.type)
                            if (1 === r.type)
                                if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                        else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                        else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                        else {
                            for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                            r.t[r.p] = i
                        } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next
                    } else
                        for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                else
                    for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, l._enableTransforms = function(t) { this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || be(this._target, r, !0) }, l._linkCSSP = function(t, e, i, s) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, l._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e) n[s] = e[s];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var De = function(t, e, i) {
            var s, r, n, a;
            if (t.slice)
                for (r = t.length; --r > -1;) De(t[r], e, i);
            else
                for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push($(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || De(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o = e.to(t, i, s),
                l = [o],
                h = [],
                u = [],
                _ = [],
                p = e._internals.reservedProps;
            for (t = o._targets || o.target, De(t, h, _), o.render(i, !0), De(t, u), o.render(0, !0), o._enabled(!0), r = _.length; --r > -1;)
                if (n = G(_[r], h[r], u[r]), n.firstMPT) {
                    n = n.difs;
                    for (a in s) p[a] && (n[a] = s[a]);
                    l.push(e.to(_[r], i, n))
                }
            return l
        }, t.activate([a]), a
    }, !0)
}), window._gsDefine && window._gsQueue.pop()();

// WAIT FOR IMAGES
/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

(function(e, t) {
    e.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"] };
    e.expr[":"].uncached = function(t) {
        var n = document.createElement("img");
        n.src = t.src;
        return e(t).is('img[src!=""]') && !n.complete
    };
    e.fn.waitForImages = function(t, n, r) {
        if (e.isPlainObject(arguments[0])) {
            n = t.each;
            r = t.waitForAll;
            t = t.finished
        }
        t = t || e.noop;
        n = n || e.noop;
        r = !!r;
        if (!e.isFunction(t) || !e.isFunction(n)) { throw new TypeError("An invalid callback was supplied.") }
        return this.each(function() {
            var i = e(this),
                s = [];
            if (r) {
                var o = e.waitForImages.hasImageProperties || [],
                    u = /url\((['"]?)(.*?)\1\)/g;
                i.find("*").each(function() {
                    var t = e(this);
                    if (t.is("img:uncached")) { s.push({ src: t.attr("src"), element: t[0] }) }
                    e.each(o, function(e, n) { var r = t.css(n); if (!r) { return true } var i; while (i = u.exec(r)) { s.push({ src: i[2], element: t[0] }) } })
                })
            } else { i.find("img:uncached").each(function() { s.push({ src: this.src, element: this }) }) }
            var f = s.length,
                l = 0;
            if (f == 0) { t.call(i[0]) }
            e.each(s, function(r, s) {
                var o = new Image;
                e(o).bind("load error", function(e) {
                    l++;
                    n.call(s.element, l, f, e.type == "load");
                    if (l == f) { t.call(i[0]); return false }
                });
                o.src = s.src
            })
        })
    };
    e.fn.swipe = function(t) {
        if (!this) return false;
        var n = { fingers: 1, threshold: 75, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, click: null, triggerOnTouchEnd: true, allowPageScroll: "auto" };
        var r = "left";
        var i = "right";
        var s = "up";
        var o = "down";
        var u = "none";
        var f = "horizontal";
        var l = "vertical";
        var c = "auto";
        var h = "start";
        var p = "move";
        var d = "end";
        var v = "cancel";
        var m = "ontouchstart" in window,
            g = m ? "touchstart" : "mousedown",
            y = m ? "touchmove" : "mousemove",
            b = m ? "touchend" : "mouseup",
            w = "touchcancel";
        var E = "start";
        if (t.allowPageScroll == undefined && (t.swipe != undefined || t.swipeStatus != undefined)) t.allowPageScroll = u;
        if (t) e.extend(n, t);
        return this.each(function() {
            function t() {
                var e = S();
                if (e <= 45 && e >= 0) return r;
                else if (e <= 360 && e >= 315) return r;
                else if (e >= 135 && e <= 225) return i;
                else if (e > 45 && e < 135) return o;
                else return s
            }

            function S() { var e = H.x - B.x; var t = B.y - H.y; var n = Math.atan2(t, e); var r = Math.round(n * 180 / Math.PI); if (r < 0) r = 360 - Math.abs(r); return r }

            function x() { return Math.round(Math.sqrt(Math.pow(B.x - H.x, 2) + Math.pow(B.y - H.y, 2))) }

            function T(e, t) {
                if (n.allowPageScroll == u) { e.preventDefault() } else {
                    var a = n.allowPageScroll == c;
                    switch (t) {
                        case r:
                            if (n.swipeLeft && a || !a && n.allowPageScroll != f) e.preventDefault();
                            break;
                        case i:
                            if (n.swipeRight && a || !a && n.allowPageScroll != f) e.preventDefault();
                            break;
                        case s:
                            if (n.swipeUp && a || !a && n.allowPageScroll != l) e.preventDefault();
                            break;
                        case o:
                            if (n.swipeDown && a || !a && n.allowPageScroll != l) e.preventDefault();
                            break
                    }
                }
            }

            function N(e, t) {
                if (n.swipeStatus) n.swipeStatus.call(_, e, t, direction || null, distance || 0);
                if (t == v) { if (n.click && (P == 1 || !m) && (isNaN(distance) || distance == 0)) n.click.call(_, e, e.target) }
                if (t == d) {
                    if (n.swipe) { n.swipe.call(_, e, direction, distance) }
                    switch (direction) {
                        case r:
                            if (n.swipeLeft) n.swipeLeft.call(_, e, direction, distance);
                            break;
                        case i:
                            if (n.swipeRight) n.swipeRight.call(_, e, direction, distance);
                            break;
                        case s:
                            if (n.swipeUp) n.swipeUp.call(_, e, direction, distance);
                            break;
                        case o:
                            if (n.swipeDown) n.swipeDown.call(_, e, direction, distance);
                            break
                    }
                }
            }

            function C(e) {
                P = 0;
                H.x = 0;
                H.y = 0;
                B.x = 0;
                B.y = 0;
                F.x = 0;
                F.y = 0
            }

            function L(e) {
                e.preventDefault();
                distance = x();
                direction = t();
                if (n.triggerOnTouchEnd) {
                    E = d;
                    if ((P == n.fingers || !m) && B.x != 0) {
                        if (distance >= n.threshold) {
                            N(e, E);
                            C(e)
                        } else {
                            E = v;
                            N(e, E);
                            C(e)
                        }
                    } else {
                        E = v;
                        N(e, E);
                        C(e)
                    }
                } else if (E == p) {
                    E = v;
                    N(e, E);
                    C(e)
                }
                M.removeEventListener(y, A, false);
                M.removeEventListener(b, L, false)
            }

            function A(e) {
                if (E == d || E == v) return;
                var r = m ? e.touches[0] : e;
                B.x = r.pageX;
                B.y = r.pageY;
                direction = t();
                if (m) { P = e.touches.length }
                E = p;
                T(e, direction);
                if (P == n.fingers || !m) {
                    distance = x();
                    if (n.swipeStatus) N(e, E, direction, distance);
                    if (!n.triggerOnTouchEnd) {
                        if (distance >= n.threshold) {
                            E = d;
                            N(e, E);
                            C(e)
                        }
                    }
                } else {
                    E = v;
                    N(e, E);
                    C(e)
                }
            }

            function O(e) {
                var t = m ? e.touches[0] : e;
                E = h;
                if (m) { P = e.touches.length }
                distance = 0;
                direction = null;
                if (P == n.fingers || !m) {
                    H.x = B.x = t.pageX;
                    H.y = B.y = t.pageY;
                    if (n.swipeStatus) N(e, E)
                } else { C(e) }
                M.addEventListener(y, A, false);
                M.addEventListener(b, L, false)
            }
            var M = this;
            var _ = e(this);
            var D = null;
            var P = 0;
            var H = { x: 0, y: 0 };
            var B = { x: 0, y: 0 };
            var F = { x: 0, y: 0 };
            try {
                this.addEventListener(g, O, false);
                this.addEventListener(w, C)
            } catch (I) {}
        })
    }
})(jQuery);

/* revslider-jquery.themepunch.revolution.min: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.revolution.min.js?rev=4.1.4) */


/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.1.2 (12.12.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/


(function(jQuery, undefined) {


    ////////////////////////////////////////
    // THE REVOLUTION PLUGIN STARTS HERE //
    ///////////////////////////////////////

    jQuery.fn.extend({

        // OUR PLUGIN HERE :)
        revolution: function(options) {



            ////////////////////////////////
            // SET DEFAULT VALUES OF ITEM //
            ////////////////////////////////
            jQuery.fn.revolution.defaults = {
                delay: 9000,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",

                hideThumbs: 200,

                thumbWidth: 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                thumbHeight: 50,
                thumbAmount: 3,

                navigationType: "bullet", // bullet, thumb, none
                navigationArrows: "solo", // nextto, solo, none
                navigation_arrows_style: 'defalut',
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,

                navigationStyle: "round", // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item),

                navigationHAlign: "center", // Vertical Align top,center,bottom
                navigationVAlign: "bottom", // Horizontal Align left,center,right
                navigationHOffset: 0,
                navigationVOffset: 20,

                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,

                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,

                keyboardNavigation: "on",

                touchenabled: "on", // Enable Swipe Function : on/off
                onHoverStop: "on", // Stop Banner Timet at Hover on Slide on/off


                stopAtSlide: -1, // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
                stopAfterLoops: -1, // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

                hideCaptionAtLimit: 0, // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                hideAllCaptionAtLimit: 0, // Hide all The Captions if Width of Browser is less then this value
                hideSliderAtLimit: 0, // Hide the whole slider, and stop also functions if Width of Browser is less than this value

                shadow: 0, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
                fullWidth: "off", // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
                fullScreen: "off",
                minFullScreenHeight: 0, // The Minimum FullScreen Height
                fullScreenOffsetContainer: "",
                dottedOverlay: "none", //twoxtwo, threexthree, twoxtwowhite, threexthreewhite

                forceFullWidth: "off" // Force The FullWidth

            };

            options = jQuery.extend({}, jQuery.fn.revolution.defaults, options);





            return this.each(function() {

                var opt = options;

                if (opt.fullWidth != "on" && opt.fullScreen != "on") opt.autoHeight = "off";
                if (opt.fullScreen == "on") opt.autoHeight = "on";
                if (opt.fullWidth != "on" && opt.fullScreen != "on") forceFulWidth = "off";

                var container = jQuery(this);

                if (opt.fullWidth == "on" && opt.autoHeight == "off")
                    container.css({ maxHeight: opt.startheight + "px" });

                if (is_mobile() && opt.hideThumbsOnMobile == "on" && opt.navigationType == "thumb")
                    opt.navigationType = "none"

                if (is_mobile() && opt.hideBulletsOnMobile == "on" && opt.navigationType == "bullet")
                    opt.navigationType = "none"

                if (is_mobile() && opt.hideBulletsOnMobile == "on" && opt.navigationType == "both")
                    opt.navigationType = "none"

                if (is_mobile() && opt.hideArrowsOnMobile == "on")
                    opt.navigationArrows = "none"

                if (opt.forceFullWidth == "on") {

                    var loff = container.parent().offset().left;
                    var mb = container.parent().css('marginBottom');
                    var mt = container.parent().css('marginTop');
                    if (mb == undefined) mb = 0;
                    if (mt == undefined) mt = 0;

                    container.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + mt + ';margin-bottom:' + mb + '" class="forcefullwidth_wrapper_tp_banner"></div>');
                    container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + container.height() + 'px"></div>');
                    container.css({ 'backgroundColor': container.parent().css('backgroundColor'), 'backgroundImage': container.parent().css('backgroundImage') });
                    //container.parent().css({'position':'absolute','width':jQuery(window).width()});
                    container.parent().css({ 'left': (0 - loff) + "px", position: 'absolute', 'width': jQuery(window).width() });
                    opt.width = jQuery(window).width();
                }

                // HIDE THUMBS UNDER RESOLUTION
                try {
                    if (opt.hideThumbsUnderResolution > jQuery(window).width() && opt.hideThumbsUnderResolution != 0) {
                        container.parent().find('.tp-bullets.tp-thumbs').css({ display: "none" });
                    } else {
                        container.parent().find('.tp-bullets.tp-thumbs').css({ display: "block" });
                    }
                } catch (e) {}

                if (!container.hasClass("revslider-initialised")) {

                    container.addClass("revslider-initialised");
                    if (container.attr('id') == undefined) container.attr('id', "revslider-" + Math.round(Math.random() * 1000 + 5));

                    // CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED



                    opt.firefox13 = false;
                    opt.ie = !jQuery.support.opacity;
                    opt.ie9 = (document.documentMode == 9);


                    // CHECK THE jQUERY VERSION
                    var version = jQuery.fn.jquery.split('.'),
                        versionTop = parseFloat(version[0]),
                        versionMinor = parseFloat(version[1]),
                        versionIncrement = parseFloat(version[2] || '0');

                    if (versionTop == 1 && versionMinor < 7) {
                        container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + version + ' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');
                    }

                    if (versionTop > 1) opt.ie = false;


                    // Delegate .transition() calls to .animate()
                    // if the browser can't do CSS transitions.
                    if (!jQuery.support.transition)
                        jQuery.fn.transition = jQuery.fn.animate;

                    // CATCH THE CONTAINER


                    // LOAD THE YOUTUBE API IF NECESSARY

                    container.find('.caption').each(function() { jQuery(this).addClass('tp-caption') });

                    if (is_mobile()) {
                        container.find('.tp-caption').each(function() {
                            if (jQuery(this).data('autoplay') == true)
                                jQuery(this).data('autoplay', false);
                            // && jQuery(this).data('forcecover')!=1)
                        })
                    }


                    var addedyt = 0;
                    var addedvim = 0;
                    var addedvid = 0;
                    var httpprefix = "http";

                    if (location.protocol === 'https:') {
                        httpprefix = "https";
                    }
                    container.find('.tp-caption iframe').each(function(i) {
                        try {

                            if (jQuery(this).attr('src').indexOf('you') > 0 && addedyt == 0) {
                                addedyt = 1;
                                var s = document.createElement("script");
                                s.src = httpprefix + "://www.youtube.com/player_api"; /* Load Player API*/
                                var before = document.getElementsByTagName("script")[0];
                                var loadit = true;
                                jQuery('head').find('*').each(function() {
                                    if (jQuery(this).attr('src') == httpprefix + "://www.youtube.com/iframe_api")
                                        loadit = false;
                                });
                                if (loadit)
                                    before.parentNode.insertBefore(s, before);
                            }
                        } catch (e) {}
                    });



                    // LOAD THE VIMEO API
                    container.find('.tp-caption iframe').each(function(i) {
                        try {
                            if (jQuery(this).attr('src').indexOf('vim') > 0 && addedvim == 0) {
                                addedvim = 1;
                                var f = document.createElement("script");
                                f.src = httpprefix + "://a.vimeocdn.com/js/froogaloop2.min.js"; /* Load Player API*/
                                var before = document.getElementsByTagName("script")[0];

                                var loadit = true;
                                jQuery('head').find('*').each(function() {
                                    if (jQuery(this).attr('src') == httpprefix + "://a.vimeocdn.com/js/froogaloop2.min.js")
                                        loadit = false;
                                });
                                if (loadit)
                                    before.parentNode.insertBefore(f, before);
                            }
                        } catch (e) {}
                    });





                    // LOAD THE VIDEO.JS API IF NEEDED
                    container.find('.tp-caption video').each(function(i) {
                        try {
                            if (jQuery(this).hasClass('video-js') && addedvid == 0) {
                                addedvid = 1;
                                var f = document.createElement("script");
                                f.src = opt.videoJsPath + "video.js"; /* Load Player API*/
                                var before = document.getElementsByTagName("script")[0];

                                var loadit = true;
                                jQuery('head').find('*').each(function() {
                                    if (jQuery(this).attr('src') == opt.videoJsPath + "video.js")
                                        loadit = false;
                                });
                                if (loadit) {
                                    before.parentNode.insertBefore(f, before);
                                    jQuery('head').append('<link rel="stylesheet" type="text/css" href="' + opt.videoJsPath + 'video-js.min.css" media="screen" />');
                                    jQuery('head').append('<script> videojs.options.flash.swf = "' + opt.videoJsPath + 'video-js.swf";</script>');
                                }
                            }
                        } catch (e) {}
                    });

                    // SHUFFLE MODE
                    if (opt.shuffle == "on") {
                        for (var u = 0; u < container.find('>ul:first-child >li').length; u++) {
                            var it = Math.round(Math.random() * container.find('>ul:first-child >li').length);
                            container.find('>ul:first-child >li:eq(' + it + ')').prependTo(container.find('>ul:first-child'));
                        }
                    }


                    // CREATE SOME DEFAULT OPTIONS FOR LATER
                    opt.slots = 4;
                    opt.act = -1;
                    opt.next = 0;

                    // IF START SLIDE IS SET
                    if (opt.startWithSlide != undefined) opt.next = opt.startWithSlide;

                    // IF DEEPLINK HAS BEEN SET
                    var deeplink = getUrlVars("#")[0];
                    if (deeplink.length < 9) {
                        if (deeplink.split('slide').length > 1) {
                            var dslide = parseInt(deeplink.split('slide')[1], 0);
                            if (dslide < 1) dslide = 1;
                            if (dslide > container.find('>ul:first >li').length) dslide = container.find('>ul:first >li').length;
                            opt.next = dslide - 1;
                        }
                    }


                    opt.origcd = opt.delay;
                    opt.firststart = 1;

                    // BASIC OFFSET POSITIONS OF THE BULLETS
                    if (opt.navigationHOffset == undefined) opt.navOffsetHorizontal = 0;
                    if (opt.navigationVOffset == undefined) opt.navOffsetVertical = 0;


                    container.append('<div class="tp-loader"></div>');

                    // RESET THE TIMER
                    if (container.find('.tp-bannertimer').length == 0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
                    var bt = container.find('.tp-bannertimer');
                    if (bt.length > 0) {
                        bt.css({ 'width': '0%' });
                    };


                    // WE NEED TO ADD A BASIC CLASS FOR SETTINGS.CSS
                    container.addClass("tp-simpleresponsive");
                    opt.container = container;

                    //if (container.height()==0) container.height(opt.startheight);

                    // AMOUNT OF THE SLIDES
                    opt.slideamount = container.find('>ul:first >li').length;


                    // A BASIC GRID MUST BE DEFINED. IF NO DEFAULT GRID EXIST THAN WE NEED A DEFAULT VALUE, ACTUAL SIZE OF CONAINER
                    if (container.height() == 0) container.height(opt.startheight);
                    if (opt.startwidth == undefined || opt.startwidth == 0) opt.startwidth = container.width();
                    if (opt.startheight == undefined || opt.startheight == 0) opt.startheight = container.height();

                    // OPT WIDTH && HEIGHT SHOULD BE SET
                    opt.width = container.width();
                    opt.height = container.height();


                    // DEFAULT DEPENDECIES
                    opt.bw = opt.startwidth / container.width();
                    opt.bh = opt.startheight / container.height();

                    // IF THE ITEM ALREADY IN A RESIZED FORM
                    if (opt.width != opt.startwidth) {

                        opt.height = Math.round(opt.startheight * (opt.width / opt.startwidth));

                        container.height(opt.height);

                    }

                    // LETS SEE IF THERE IS ANY SHADOW
                    if (opt.shadow != 0) {
                        container.parent().append('<div class="tp-bannershadow tp-shadow' + opt.shadow + '"></div>');
                        var loff = 0;
                        if (opt.forceFullWidth == "on") {
                            var offset = opt.container.parent().offset();
                            if (offset) {
                                loff = 0 - offset.left;
                            }
                        }
                        container.parent().find('.tp-bannershadow').css({ 'width': opt.width, 'left': loff });
                    }


                    container.find('ul').css({ 'display': 'none' });

                    var fliparent = container;

                    // CHECK IF LAZY LOAD HAS BEEN ACTIVATED
                    if (opt.lazyLoad == "on") {
                        var fli = container.find('ul >li >img').first();
                        if (fli.data('lazyload') != undefined) fli.attr('src', fli.data('lazyload'));
                        fli.data('lazydone', 1);
                        fliparent = fli.parent();
                    }


                    // IF IMAGES HAS BEEN LOADED
                    fliparent.waitForImages(function() {
                        // PREPARE THE SLIDES
                        container.find('ul').css({ 'display': 'block' });
                        prepareSlides(container, opt);

                        // CREATE BULLETS
                        if (opt.slideamount > 1) createBullets(container, opt);
                        if (opt.slideamount > 1) createThumbs(container, opt);
                        if (opt.slideamount > 1) createArrows(container, opt);
                        if (opt.keyboardNavigation == "on") createKeyboard(container, opt);

                        swipeAction(container, opt);

                        if (opt.hideThumbs > 0) hideThumbs(container, opt);


                        container.waitForImages(function() {
                            // START THE FIRST SLIDE

                            container.find('.tp-loader').fadeOut(600);
                            setTimeout(function() {

                                swapSlide(container, opt);
                                // START COUNTDOWN
                                if (opt.slideamount > 1) countDown(container, opt);
                                container.trigger('revolution.slide.onloaded');
                            }, 600);

                        });
                    });



                    // IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
                    jQuery(window).resize(function() {
                        if (jQuery('body').find(container) != 0)
                            if (opt.forceFullWidth == "on") {
                                var offset = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset();
                                if (offset) {
                                    var loff = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset().left;
                                    //opt.container.parent().css({'width':jQuery(window).width()});
                                    opt.container.parent().css({ 'left': (0 - loff) + "px", 'width': jQuery(window).width() });
                                }
                            }

                        if (container.outerWidth(true) != opt.width || opt.forceFullWidth == "on") {

                            containerResized(container, opt);
                        }
                    });

                    // HIDE THUMBS UNDER SIZE...
                    try {
                        if (opt.hideThumbsUnderResoluition != 0 && opt.navigationType == "thumb") {
                            if (opt.hideThumbsUnderResoluition > jQuery(window).width())
                                jQuery('.tp-bullets').css({ display: "none" });
                            else
                                jQuery('.tp-bullets').css({ display: "block" });
                        }
                    } catch (e) {}



                    // CHECK IF THE CAPTION IS A "SCROLL ME TO POSITION" CAPTION IS
                    //if (opt.fullScreen=="on") {
                    container.find('.tp-scrollbelowslider').on('click', function() {
                        var off = 0;
                        try {
                            off = jQuery('body').find(opt.fullScreenOffsetContainer).height();
                        } catch (e) {}
                        try {
                            off = off - jQuery(this).data('scrolloffset');
                        } catch (e) {}

                        jQuery('body,html').animate({ scrollTop: (container.offset().top + (container.find('>ul >li').height()) - off) + "px" }, { duration: 400 });
                    });
                    //}
                }

            })
        },


        // METHODE PAUSE
        revscroll: function(oy) {
            return this.each(function() {
                var container = jQuery(this);
                jQuery('body,html').animate({ scrollTop: (container.offset().top + (container.find('>ul >li').height()) - oy) + "px" }, { duration: 400 });
            })
        },

        // METHODE PAUSE
        revredraw: function(oy) {
            return this.each(function() {
                var container = jQuery(this);
                var bt = container.parent().find('.tp-bannertimer');
                var opt = bt.data('opt');
                containerResized(container, opt);

            })
        },
        revRefresh: function(obj) {

            if (obj.bitAction == "changePostion") {

                var s = jQuery(this).find("[data-slideid=" + obj.slideid + "] .tp-caption[bitslidetextindex=" + obj.textIndex + "]");
                s.data('x', obj.left);
                s.data('y', obj.top);
                s.attr("dataleft", obj.left);
                s.attr("datatop", obj.top);
                s.attr('dataalignhor', "left");
                s.attr('dataalignvert', "top");
                s.attr("data-x", obj.left);
                s.attr("data-y", obj.top);
                s.attr("changePostion", 1);
            }
        },
        // METHODE PAUSE
        revpause: function(options) {

            return this.each(function() {
                var container = jQuery(this);
                container.data('conthover', 1);
                container.data('conthover-changed', 1);
                container.trigger('revolution.slide.onpause');
                var bt = container.parent().find('.tp-bannertimer');
                bt.stop();

            })


        },

        // METHODE RESUME
        revresume: function(options) {
            return this.each(function() {
                var container = jQuery(this);
                container.data('conthover', 0);
                container.data('conthover-changed', 1);
                container.trigger('revolution.slide.onresume');
                var bt = container.parent().find('.tp-bannertimer');
                var opt = bt.data('opt');
                var t = 0;
                if (opt) {
                    t = ((opt.delay - opt.cd) - 100);
                }
                bt.animate({ 'width': "100%" }, { duration: t, queue: false, easing: "linear" });
            })

        },

        // METHODE NEXT
        revnext: function(options) {
            return this.each(function() {
                // CATCH THE CONTAINER
                var container = jQuery(this);
                container.parent().find('.tp-rightarrow').click();


            })

        },

        // METHODE RESUME
        revprev: function(options) {
            return this.each(function() {
                // CATCH THE CONTAINER
                var container = jQuery(this);
                container.parent().find('.tp-leftarrow').click();
            })

        },

        // METHODE LENGTH
        revmaxslide: function(options) {
            // CATCH THE CONTAINER
            return jQuery(this).find('>ul:first-child >li').length;
        },


        // METHODE CURRENT
        revcurrentslide: function(options) {
            // CATCH THE CONTAINER
            var container = jQuery(this);
            var bt = container.parent().find('.tp-bannertimer');
            var opt = bt.data('opt');
            return opt.act;
        },

        // METHODE CURRENT
        revlastslide: function(options) {
            // CATCH THE CONTAINER
            var container = jQuery(this);
            var bt = container.parent().find('.tp-bannertimer');
            var opt = bt.data('opt');
            return opt.lastslide;
        },


        // METHODE JUMP TO SLIDE
        revshowslide: function(slide) {
            return this.each(function() {
                // CATCH THE CONTAINER
                var container = jQuery(this);
                container.data('showus', slide);
                container.parent().find('.tp-rightarrow').click();
            })

        }


    })


    ///////////////////////////
    // GET THE URL PARAMETER //
    ///////////////////////////
    function getUrlVars(hashdivider) {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
        for (var i = 0; i < hashes.length; i++) {
            hashes[i] = hashes[i].replace('%3D', "=");
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    //////////////////////////
    //	CONTAINER RESIZED	//
    /////////////////////////
    function containerResized(container, opt) {

        // HIDE THUMBS UNDER SIZE...
        try {
            if (opt.hideThumbsUnderResoluition != 0 && opt.navigationType == "thumb") {
                if (opt.hideThumbsUnderResoluition > jQuery(window).width())
                    jQuery('.tp-bullets').css({ display: "none" });
                else
                    jQuery('.tp-bullets').css({ display: "block" });
            }
        } catch (e) {}


        container.find('.defaultimg').each(function(i) {
            setSize(jQuery(this), opt);
        });

        var loff = 0;
        if (opt.forceFullWidth == "on")
            var offset = opt.container.parent().offset();
        if (offset) {
            loff = 0 - offset.left;
        }
        try {
            container.parent().find('.tp-bannershadow').css({ 'width': opt.width, 'left': loff });
        } catch (e) {}

        var actsh = container.find('>ul >li:eq(' + opt.act + ') .slotholder');
        var nextsh = container.find('>ul >li:eq(' + opt.next + ') .slotholder');
        removeSlots(container, opt);
        nextsh.find('.defaultimg').css({ 'opacity': 0 });
        actsh.find('.defaultimg').css({ 'opacity': 1 });

        nextsh.find('.defaultimg').each(function() {
            var dimg = jQuery(this);
            if (dimg.data('kenburn') != undefined)
                dimg.data('kenburn').restart();
        });

        var nextli = container.find('>ul >li:eq(' + opt.next + ')');

        animateTheCaptions(nextli, opt, true);
        restartBannerTimer(opt, container);
        setBulPos(container, opt);

    }


    //////////////////
    // IS MOBILE ?? //
    //////////////////
    function is_mobile() {
        var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'Android', 'webos', , 'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
        var ismobile = false;
        for (i in agents) {

            if (navigator.userAgent.split(agents[i]).length > 1) {
                ismobile = true;

            }
        }
        return ismobile;
    }

    /*********************************
    	-	CHECK IF BROWSER IS IE	-
    ********************************/
    function isIE(version, comparison) {
        var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
        $div.html('<!--[if ' + (comparison || '') + ' IE ' + (version || '') + ']><a>&nbsp;</a><![endif]-->');
        var ieTest = $div.find('a').length;
        $div.remove();
        return ieTest;
    }

    ////////////////////////////////
    //	RESTART THE BANNER TIMER //
    //////////////////////////////
    function restartBannerTimer(opt, container) {
        opt.cd = 0;

        if (opt.videoplaying != true) {
            var bt = container.find('.tp-bannertimer');
            if (bt.length > 0) {
                bt.stop();
                bt.css({ 'width': '0%' });
                bt.animate({ 'width': "100%" }, { duration: (opt.delay - 100), queue: false, easing: "linear" });
            }
            clearTimeout(opt.thumbtimer);

            opt.thumbtimer = setTimeout(function() {
                moveSelectedThumb(container);
                setBulPos(container, opt);
            }, 200);
        }
    }

    ////////////////////////////////
    //	RESTART THE BANNER TIMER //
    //////////////////////////////
    function killBannerTimer(opt, container) {
        opt.cd = 0;

        var bt = container.find('.tp-bannertimer');
        if (bt.length > 0) {
            bt.stop(true, true);
            bt.css({ 'width': '0%' });
        }
        clearTimeout(opt.thumbtimer);

    }

    function callingNewSlide(opt, container) {
        opt.cd = 0;
        swapSlide(container, opt);
        // STOP TIMER AND RESCALE IT
        var bt = container.find('.tp-bannertimer');
        if (bt.length > 0) {
            bt.stop();
            bt.css({ 'width': '0%' });

            if (opt.videoplaying != true) bt.animate({ 'width': "100%" }, { duration: (opt.delay - 100), queue: false, easing: "linear" });
        }
    }


    ////////////////////////////////
    //	-	CREATE THE BULLETS -  //
    ////////////////////////////////
    function createThumbs(container, opt) {

        var cap = container.parent();

        if (opt.navigationType == "thumb" || opt.navsecond == "both") {
            cap.append('<div class="tp-bullets tp-thumbs ' + opt.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
        }
        var bullets = cap.find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
        var bup = bullets.parent();

        bup.width(opt.thumbWidth * opt.thumbAmount);
        bup.height(opt.thumbHeight);
        bup.parent().width(opt.thumbWidth * opt.thumbAmount);
        bup.parent().height(opt.thumbHeight);

        container.find('>ul:first >li').each(function(i) {
            var li = container.find(">ul:first >li:eq(" + i + ")");
            if (li.data('thumb') != undefined)
                var src = li.data('thumb')
            else
                var src = li.find("img:first").attr('src');
            bullets.append('<div class="bullet thumb" style="width:' + opt.thumbWidth + 'px;height:' + opt.thumbHeight + 'px;"><img src="' + src + '"></div>');
            var bullet = bullets.find('.bullet:first');
        });
        //bullets.append('<div style="clear:both"></div>');
        var minwidth = 10;


        // ADD THE BULLET CLICK FUNCTION HERE
        bullets.find('.bullet').each(function(i) {
            var bul = jQuery(this);

            if (i == opt.slideamount - 1) bul.addClass('last');
            if (i == 0) bul.addClass('first');
            bul.width(opt.thumbWidth);
            bul.height(opt.thumbHeight);

            if (minwidth < bul.outerWidth(true)) minwidth = bul.outerWidth(true);
            bul.click(function() {
                if (opt.transition == 0 && bul.index() != opt.act) {
                    opt.next = bul.index();
                    callingNewSlide(opt, container);
                }
            });
        });


        var max = minwidth * container.find('>ul:first >li').length;

        var thumbconwidth = bullets.parent().width();
        opt.thumbWidth = minwidth;



        ////////////////////////
        // SLIDE TO POSITION  //
        ////////////////////////
        if (thumbconwidth < max) {
            jQuery(document).mousemove(function(e) {
                jQuery('body').data('mousex', e.pageX);
            });



            // ON MOUSE MOVE ON THE THUMBNAILS EVERYTHING SHOULD MOVE :)
            /*
            bullets.parent().mouseenter(function() {
            		var $this=jQuery(this);
            		$this.addClass("over");
            		var offset = $this.offset();
            		var x = jQuery('body').data('mousex')-offset.left;
            		var thumbconwidth=$this.width();
            		var minwidth=$this.find('.bullet:first').outerWidth(true);
            		var max=minwidth*container.find('>ul:first >li').length;
            		var diff=(max- thumbconwidth)+15;
            		var steps = diff / thumbconwidth;
            		x=x-30;
            		//if (x<30) x=0;
            		//if (x>thumbconwidth-30) x=thumbconwidth;

            		//ANIMATE TO POSITION
            		var pos=(0-((x)*steps));
            		if (pos>0) pos =0;
            		if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
            		moveThumbSliderToPosition($this,pos,200);
            });

            bullets.parent().mousemove(function() {

            				var $this=jQuery(this);

            				//if (!$this.hasClass("over")) {
            						var offset = $this.offset();
            						var x = jQuery('body').data('mousex')-offset.left;
            						var thumbconwidth=$this.width();
            						var minwidth=$this.find('.bullet:first').outerWidth(true);
            						var max=minwidth*container.find('>ul:first >li').length-1;
            						var diff=(max- thumbconwidth)+15;
            						var steps = diff / thumbconwidth;
            						x=x-3;
            						if (x<6) x=0;
            						if (x+3>thumbconwidth-6) x=thumbconwidth;

            						//ANIMATE TO POSITION
            						var pos=(0-((x)*steps));
            						if (pos>0) pos =0;
            						if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
            						moveThumbSliderToPosition($this,pos,0);
            				//} else {
            					//$this.removeClass("over");
            				//}

            });

            bullets.parent().mouseleave(function() {
            				var $this=jQuery(this);
            				$this.removeClass("over");
            				moveSelectedThumb(container);
            });*/
        }


    }


    ///////////////////////////////
    //	SelectedThumbInPosition //
    //////////////////////////////
    function moveSelectedThumb(container) {

        var bullets = container.parent().find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
        var $this = bullets.parent();
        var offset = $this.offset();
        var minwidth = $this.find('.bullet:first').outerWidth(true);

        var x = $this.find('.bullet.selected').index() * minwidth;
        var thumbconwidth = $this.width();
        var minwidth = $this.find('.bullet:first').outerWidth(true);
        var max = minwidth * container.find('>ul:first >li').length;
        var diff = (max - thumbconwidth);
        var steps = diff / thumbconwidth;

        //ANIMATE TO POSITION
        var pos = 0 - x;

        if (pos > 0) pos = 0;
        if (pos < 0 - max + thumbconwidth) pos = 0 - max + thumbconwidth;
        if (!$this.hasClass("over")) {
            moveThumbSliderToPosition($this, pos, 200);
        }
    }


    ////////////////////////////////////
    //	MOVE THUMB SLIDER TO POSITION //
    ///////////////////////////////////
    function moveThumbSliderToPosition($this, pos, speed) {
        //$this.stop();
        //$this.find('.tp-thumbcontainer').animate({'left':pos+'px'},{duration:speed,queue:false});
        TweenLite.to($this.find('.tp-thumbcontainer'), 0.2, { left: pos, ease: Power3.easeOut, overwrite: "auto" });
    }



    ////////////////////////////////
    //	-	CREATE THE BULLETS -  //
    ////////////////////////////////
    function createBullets(container, opt) {

        if (opt.navigationType == "bullet" || opt.navigationType == "both") {
            container.parent().append('<div class="tp-bullets simplebullets ' + opt.navigationStyle + '"></div>');
        }
        var bullets = container.parent().find('.tp-bullets');

        container.find('>ul:first >li').each(function(i) {
            var src = container.find(">ul:first >li:eq(" + i + ") img:first").attr('src');
            bullets.append('<div class="bullet"></div>');
            var bullet = bullets.find('.bullet:first');


        });

        // ADD THE BULLET CLICK FUNCTION HERE
        bullets.find('.bullet').each(function(i) {
            var bul = jQuery(this);
            if (i == opt.slideamount - 1) bul.addClass('last');
            if (i == 0) bul.addClass('first');

            bul.click(function() {
                var sameslide = false;
                if (opt.navigationArrows == "withbullet" || opt.navigationArrows == "nexttobullets") {
                    if (bul.index() - 1 == opt.act) sameslide = true;
                } else {
                    if (bul.index() == opt.act) sameslide = true;
                }

                if (opt.transition == 0 && !sameslide) {

                    if (opt.navigationArrows == "withbullet" || opt.navigationArrows == "nexttobullets") {
                        opt.next = bul.index() - 1;
                    } else {
                        opt.next = bul.index();
                    }

                    callingNewSlide(opt, container);
                }
            });

        });

        bullets.append('<div class="tpclear"></div>');



        setBulPos(container, opt);





    }

    //////////////////////
    //	CREATE ARROWS	//
    /////////////////////
    function createArrows(container, opt) {

        var bullets = container.find('.tp-bullets');

        var hidden = "";
        var arst = opt.navigationStyle;
        if (opt.navigationArrows == "none") hidden = "visibility:hidden;display:none";
        opt.soloArrowStyle = "default";

        if (opt.navigationArrows != "none" && opt.navigationArrows != "nexttobullets") arst = opt.soloArrowStyle;
        if (opt.navigation_arrows_style == "default2") {
            arst = "default2";
        } else if (opt.navigation_arrows_style == "new1") {
            arst = "new1";
        } else if (opt.navigation_arrows_style == "new2") {
            arst = "new2";
        }
        container.parent().append('<div style="' + hidden + '" class="tp-leftarrow tparrows ' + arst + '"></div>');
        container.parent().append('<div style="' + hidden + '" class="tp-rightarrow tparrows ' + arst + '"></div>');

        // 	THE LEFT / RIGHT BUTTON CLICK !	 //
        container.parent().find('.tp-rightarrow').click(function() {

            if (opt.transition == 0) {
                if (container.data('showus') != undefined && container.data('showus') != -1)
                    opt.next = container.data('showus') - 1;
                else
                    opt.next = opt.next + 1;
                container.data('showus', -1);
                if (opt.next >= opt.slideamount) opt.next = 0;
                if (opt.next < 0) opt.next = 0;

                if (opt.act != opt.next)
                    callingNewSlide(opt, container);
            }
        });

        container.parent().find('.tp-leftarrow').click(function() {
            if (opt.transition == 0) {
                opt.next = opt.next - 1;
                opt.leftarrowpressed = 1;
                if (opt.next < 0) opt.next = opt.slideamount - 1;
                callingNewSlide(opt, container);
            }
        });

        setBulPos(container, opt);

    }

    //////////////////////
    //	CREATE ARROWS	//
    /////////////////////
    function createKeyboard(container, opt) {

        /*
        // 	THE LEFT / RIGHT BUTTON CLICK !	 //
        jQuery(document).keydown(function(e){
        	if (opt.transition==0 && e.keyCode == 39) {
        			if (container.data('showus') !=undefined && container.data('showus') != -1)
        				opt.next = container.data('showus')-1;
        			else
        				opt.next = opt.next+1;
        			container.data('showus',-1);
        			if (opt.next >= opt.slideamount) opt.next=0;
        			if (opt.next<0) opt.next=0;

        			if (opt.act !=opt.next)
        				callingNewSlide(opt,container);
        	}

        	if (opt.transition==0 && e.keyCode == 37) {
        			opt.next = opt.next-1;
        			opt.leftarrowpressed=1;
        			if (opt.next < 0) opt.next=opt.slideamount-1;
        			callingNewSlide(opt,container);
        	}
        });

        setBulPos(container,opt);*/

    }

    ////////////////////////////
    // SET THE SWIPE FUNCTION //
    ////////////////////////////
    function swipeAction(container, opt) {
        // TOUCH ENABLED SCROLL

        if (opt.touchenabled == "on")
            container.swipe({
                data: container,
                swipeRight: function() {

                    if (opt.transition == 0) {
                        opt.next = opt.next - 1;
                        opt.leftarrowpressed = 1;
                        if (opt.next < 0) opt.next = opt.slideamount - 1;
                        callingNewSlide(opt, container);
                    }
                },
                swipeLeft: function() {

                    if (opt.transition == 0) {
                        opt.next = opt.next + 1;
                        if (opt.next == opt.slideamount) opt.next = 0;
                        callingNewSlide(opt, container);
                    }
                },
                swipeUp: function(event, direction, distance, duration) {
                    if (opt.transition == 0) {
                        opt.next = opt.next - 1;
                        opt.leftarrowpressed = 1;
                        if (opt.next < 0) opt.next = opt.slideamount - 1;
                        callingNewSlide(opt, container);
                    }
                },
                swipeDown: function(event, direction, distance, duration) {
                    if (opt.transition == 0) {
                        opt.next = opt.next + 1;
                        if (opt.next == opt.slideamount) opt.next = 0;
                        callingNewSlide(opt, container);
                    }
                },
                allowPageScroll: "auto"
            });
    }




    ////////////////////////////////////////////////////////////////
    // SHOW AND HIDE THE THUMBS IF MOUE GOES OUT OF THE BANNER  ///
    //////////////////////////////////////////////////////////////
    function hideThumbs(container, opt) {

        var bullets = container.parent().find('.tp-bullets');
        var ca = container.parent().find('.tparrows');

        if (bullets == null) {
            container.append('<div class=".tp-bullets"></div>');
            var bullets = container.parent().find('.tp-bullets');
        }

        if (ca == null) {
            container.append('<div class=".tparrows"></div>');
            var ca = container.parent().find('.tparrows');
        }


        //var bp = (thumbs.parent().outerHeight(true) - opt.height)/2;

        //	ADD THUMBNAIL IMAGES FOR THE BULLETS //
        container.data('hidethumbs', opt.hideThumbs);

        bullets.addClass("hidebullets");
        ca.addClass("hidearrows");

        bullets.hover(function() {
                bullets.addClass("hovered");
                clearTimeout(container.data('hidethumbs'));
                bullets.removeClass("hidebullets");
                ca.removeClass("hidearrows");
            },
            function() {

                bullets.removeClass("hovered");
                if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
                    container.data('hidethumbs', setTimeout(function() {
                        bullets.addClass("hidebullets");
                        ca.addClass("hidearrows");
                    }, opt.hideThumbs));
            });


        ca.hover(function() {
                bullets.addClass("hovered");
                clearTimeout(container.data('hidethumbs'));
                bullets.removeClass("hidebullets");
                ca.removeClass("hidearrows");

            },
            function() {

                bullets.removeClass("hovered");
            });



        container.on('mouseenter', function() {
            container.addClass("hovered");
            clearTimeout(container.data('hidethumbs'));
            bullets.removeClass("hidebullets");
            ca.removeClass("hidearrows");
        });

        container.on('mouseleave', function() {
            container.removeClass("hovered");
            if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
                container.data('hidethumbs', setTimeout(function() {
                    bullets.addClass("hidebullets");
                    ca.addClass("hidearrows");
                }, opt.hideThumbs));
        });

    }







    //////////////////////////////
    //	SET POSITION OF BULLETS	//
    //////////////////////////////
    function setBulPos(container, opt) {
        var topcont = container.parent();
        var bullets = topcont.find('.tp-bullets');

        if (opt.navigationType == "thumb") {
            bullets.find('.thumb').each(function(i) {
                var thumb = jQuery(this);

                thumb.css({ 'width': opt.thumbWidth * opt.bw + "px", 'height': opt.thumbHeight * opt.bh + "px" });

            })
            var bup = bullets.find('.tp-mask');

            bup.width(opt.thumbWidth * opt.thumbAmount * opt.bw);
            bup.height(opt.thumbHeight * opt.bh);
            bup.parent().width(opt.thumbWidth * opt.thumbAmount * opt.bw);
            bup.parent().height(opt.thumbHeight * opt.bh);
        }


        var tl = topcont.find('.tp-leftarrow');
        var tr = topcont.find('.tp-rightarrow');

        if (opt.navigationType == "thumb" && opt.navigationArrows == "nexttobullets") opt.navigationArrows = "solo";
        // IM CASE WE HAVE NAVIGATION BULLETS TOGETHER WITH ARROWS
        if (opt.navigationArrows == "nexttobullets") {
            tl.prependTo(bullets).css({ 'float': 'left' });
            tr.insertBefore(bullets.find('.tpclear')).css({ 'float': 'left' });
        }
        var loff = 0;
        if (opt.forceFullWidth == "on") {

            var offset = opt.container.parent().offset();
            if (offset) {
                loff = 0 - offset.left;
            }
        }

        if (opt.navigationArrows != "none" && opt.navigationArrows != "nexttobullets") {

            tl.css({ 'position': 'absolute' });
            tr.css({ 'position': 'absolute' });


            if (opt.soloArrowLeftValign == "center") tl.css({ 'top': '50%', 'marginTop': (opt.soloArrowLeftVOffset - Math.round(tl.innerHeight() / 2)) + "px" });
            if (opt.soloArrowLeftValign == "bottom") tl.css({ 'top': 'auto', 'bottom': (0 + opt.soloArrowLeftVOffset) + "px" });
            if (opt.soloArrowLeftValign == "top") tl.css({ 'bottom': 'auto', 'top': (0 + opt.soloArrowLeftVOffset) + "px" });
            if (opt.soloArrowLeftHalign == "center") tl.css({ 'left': '50%', 'marginLeft': (loff + opt.soloArrowLeftHOffset - Math.round(tl.innerWidth() / 2)) + "px" });
            if (opt.soloArrowLeftHalign == "left") tl.css({ 'left': (0 + opt.soloArrowLeftHOffset + loff) + "px" });
            if (opt.soloArrowLeftHalign == "right") tl.css({ 'right': (0 + opt.soloArrowLeftHOffset - loff) + "px" });

            if (opt.soloArrowRightValign == "center") tr.css({ 'top': '50%', 'marginTop': (opt.soloArrowRightVOffset - Math.round(tr.innerHeight() / 2)) + "px" });
            if (opt.soloArrowRightValign == "bottom") tr.css({ 'top': 'auto', 'bottom': (0 + opt.soloArrowRightVOffset) + "px" });
            if (opt.soloArrowRightValign == "top") tr.css({ 'bottom': 'auto', 'top': (0 + opt.soloArrowRightVOffset) + "px" });
            if (opt.soloArrowRightHalign == "center") tr.css({ 'left': '50%', 'marginLeft': (loff + opt.soloArrowRightHOffset - Math.round(tr.innerWidth() / 2)) + "px" });
            if (opt.soloArrowRightHalign == "left") tr.css({ 'left': (0 + opt.soloArrowRightHOffset + loff) + "px" });
            if (opt.soloArrowRightHalign == "right") tr.css({ 'right': (0 + opt.soloArrowRightHOffset - loff) + "px" });


            //if (tl.position()!=null)
            //tl.css({'top':Math.round(parseInt(tl.position().top,0))+"px"});

            //if (tr.position()!=null)
            //tr.css({'top':Math.round(parseInt(tr.position().top,0))+"px"});
        }

        if (opt.navigationArrows == "none") {
            tl.css({ 'visibility': 'hidden' });
            tr.css({ 'visibility': 'hidden' });
        }

        // SET THE POSITIONS OF THE BULLETS // THUMBNAILS


        if (opt.navigationVAlign == "center") bullets.css({ 'top': '50%', 'marginTop': (opt.navigationVOffset - Math.round(bullets.innerHeight() / 2)) + "px" });
        if (opt.navigationVAlign == "bottom") bullets.css({ 'bottom': (0 + opt.navigationVOffset) + "px" });
        if (opt.navigationVAlign == "top") bullets.css({ 'top': (0 + opt.navigationVOffset) + "px" });

        if (opt.navigationHAlign == "center") bullets.css({ 'left': '50%', 'marginLeft': (loff + opt.navigationHOffset - Math.round(bullets.innerWidth() / 2)) + "px" });
        if (opt.navigationHAlign == "left") bullets.css({ 'left': (0 + opt.navigationHOffset + loff) + "px" });
        if (opt.navigationHAlign == "right") bullets.css({ 'right': (0 + opt.navigationHOffset - loff) + "px" });



    }



    //////////////////////////////////////////////////////////
    //	-	SET THE IMAGE SIZE TO FIT INTO THE CONTIANER -  //
    ////////////////////////////////////////////////////////
    function setSize(img, opt) {


        opt.container.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css({ 'height': opt.container.height() });
        opt.container.closest('.rev_slider_wrapper').css({ 'height': opt.container.height() });


        opt.width = parseInt(opt.container.width(), 0);
        opt.height = parseInt(opt.container.height(), 0);


        //opt.height= opt.startheight * opt.bh;
        opt.height = Math.round(opt.startheight * (opt.width / opt.startwidth));
        if (opt.height > opt.startheight && opt.autoHeight != "on") opt.height = opt.startheight;



        opt.bw = (opt.width / opt.startwidth);
        opt.bh = (opt.height / opt.startheight);



        if (opt.bh > opt.bw) opt.bh = opt.bw;
        if (opt.bh < opt.bw) opt.bw = opt.bh;
        if (opt.bw < opt.bh) opt.bh = opt.bw;
        if (opt.bh > 1) {
            opt.bw = 1;
            opt.bh = 1;
        }
        if (opt.bw > 1) {
            opt.bw = 1;
            opt.bh = 1;
        }












        if (opt.fullScreen == "on") {
            opt.height = opt.bw * opt.startheight;
            var cow = opt.container.parent().width();
            var coh = jQuery(window).height();
            if (opt.fullScreenOffsetContainer != undefined) {
                try {
                    var offcontainers = opt.fullScreenOffsetContainer.split(",");
                    jQuery.each(offcontainers, function(index, searchedcont) {
                        coh = coh - jQuery(searchedcont).outerHeight(true);
                        if (coh < opt.minFullScreenHeight) coh = opt.minFullScreenHeight;
                    });
                } catch (e) {}
            }

            opt.container.parent().height(coh);
            opt.container.css({ 'height': '100%' });

            opt.height = coh;

        } else {
            opt.container.height(opt.height);
        }


        opt.slotw = Math.ceil(opt.width / opt.slots);

        if (opt.fullSreen == "on")
            opt.sloth = Math.ceil(jQuery(window).height() / opt.slots);
        else
            opt.sloth = Math.ceil(opt.height / opt.slots);

        if (opt.autoHeight == "on")
            opt.sloth = Math.ceil(img.height() / opt.slots);




    }




    /////////////////////////////////////////
    //	-	PREPARE THE SLIDES / SLOTS -  //
    ///////////////////////////////////////
    function prepareSlides(container, opt) {

        container.find('.tp-caption').each(function() {
            jQuery(this).addClass(jQuery(this).data('transition'));
            jQuery(this).addClass('start')
        });

        // PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
        container.find('>ul:first').css({ overflow: 'hidden', width: '100%', height: '100%', maxHeight: container.parent().css('maxHeight') });
        if (opt.autoHeight == "on") {
            container.find('>ul:first').css({ overflow: 'hidden', width: '100%', height: '100%', maxHeight: "none" });
            container.css({ 'maxHeight': 'none' });
            container.parent().css({ 'maxHeight': 'none' });
        }

        container.find('>ul:first >li').each(function(j) {
            var li = jQuery(this);

            // MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
            li.css({ 'width': '100%', 'height': '100%', 'overflow': 'hidden' });

            if (li.data('link') != undefined) {
                var link = li.data('link');
                var target = "_self";
                var zindex = 2;
                if (li.data('slideindex') == "back") zindex = 0;

                var linktoslide = li.data('linktoslide');
                if (li.data('target') != undefined) target = li.data('target');

                if (link == "slide") {
                    li.append('<div class="tp-caption sft slidelink" style="z-index:' + zindex + ';" data-x="0" data-y="0" data-linktoslide="' + linktoslide + '" data-start="0"><a><div></div></a></div>');
                } else {
                    linktoslide = "no";
                    li.append('<div class="tp-caption sft slidelink" style="z-index:' + zindex + ';" data-x="0" data-y="0" data-linktoslide="' + linktoslide + '" data-start="0"><a target="' + target + '" href="' + link + '"><div></div></a></div>');
                }

            }
        });

        // RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
        container.parent().css({ 'overflow': 'visible' });


        container.find('>ul:first >li >img').each(function(j) {

            var img = jQuery(this);

            img.addClass('defaultimg');
            if (img.data('lazyload') != undefined && img.data('lazydone') != 1) {

            } else {
                setSize(img, opt);
            }



            img.wrap('<div class="slotholder" style="width:100%;height:100%;"' +
                'data-duration="' + img.data('duration') + '"' +
                'data-zoomstart="' + img.data("zoomstart") + '"' +
                'data-zoomend="' + img.data("zoomend") + '"' +
                'data-rotationstart="' + img.data("rotationstart") + '"' +
                'data-rotationend="' + img.data("rotationend") + '"' +
                'data-ease="' + img.data("ease") + '"' +
                'data-duration="' + img.data("duration") + '"' +
                'data-bgpositionend="' + img.data("bgpositionend") + '"' +
                'data-bgposition="' + img.data("bgposition") + '"' +
                'data-duration="' + img.data("duration") + '"' +
                'data-kenburns="' + img.data("kenburns") + '"' +
                'data-easeme="' + img.data("ease") + '"' +
                'data-bgfit="' + img.data("bgfit") + '"' +
                'data-bgfitend="' + img.data("bgfitend") + '"' +
                'data-owidth="' + img.data("owidth") + '"' +
                'data-oheight="' + img.data("oheight") + '"' +
                '></div>');

            if (opt.dottedOverlay != "none" && opt.dottedOverlay != undefined)
                img.closest('.slotholder').append('<div class="tp-dottedoverlay ' + opt.dottedOverlay + '"></div>');

            var src = img.attr('src');
            var ll = img.data('lazyload');
            var bgfit = img.data('bgfit');
            var bgrepeat = img.data('bgrepeat');
            var bgposition = img.data('bgposition');


            if (bgfit == undefined) bgfit = "cover";
            if (bgrepeat == undefined) bgrepeat = "no-repeat";
            if (bgposition == undefined) bgposition = "center center"


            var pari = img.closest('.slotholder');
            img.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + img.data('lazyload') + '" data-bgfit="' + bgfit + '"data-bgposition="' + bgposition + '" data-bgrepeat="' + bgrepeat + '" data-lazydone="' + img.data('lazydone') + '" data-src="' + src + '" style="background-color:' + img.css("backgroundColor") + ';background-repeat:' + bgrepeat + ';background-image:url(' + src + ');background-size:' + bgfit + ';background-position:' + bgposition + ';width:100%;height:100%;"></div>');

            if (isIE(8)) {
                pari.find('.tp-bgimg').css({ backgroundImage: "none", 'background-image': 'none' });
                pari.find('.tp-bgimg').append('<img class="ieeightfallbackimage defaultimg" src="' + src + '" style="width:100%">');
            }




            img.css({ 'opacity': 0 });
            img.data('li-id', j);

        });
    }





    ///////////////////////
    // PREPARE THE SLIDE //
    //////////////////////
    function prepareOneSlideSlot(slotholder, opt, visible, vorh) {


        var sh = slotholder;
        var img = sh.find('.defaultimg')

        var scalestart = sh.data('zoomstart');
        var rotatestart = sh.data('rotationstart');

        if (img.data('currotate') != undefined)
            rotatestart = img.data('currotate');
        if (img.data('curscale') != undefined)
            scalestart = img.data('curscale');
        setSize(img, opt)
        var src = img.data('src');
        var bgcolor = img.css('background-color');

        var w = opt.width;
        var h = opt.height;
        if (opt.autoHeight == "on")
            h = opt.container.height();

        var fulloff = img.data("fxof");
        if (fulloff == undefined) fulloff = 0;

        fullyoff = 0;

        var off = 0;

        var bgfit = img.data('bgfit');
        var bgrepeat = img.data('bgrepeat');
        var bgposition = img.data('bgposition');

        if (bgfit == undefined) bgfit = "cover";
        if (bgrepeat == undefined) bgrepeat = "no-repeat";
        if (bgposition == undefined) bgposition = "center center";



        if (sh.data('kenburns') == "on") {
            bgfit = scalestart;
            if (bgfit.toString().length < 4)
                bgfit = calculateKenBurnScales(bgfit, sh, opt);
        }

        if (isIE(8)) {
            var imgsrc = src;
            src = "";
        }

        if (vorh == "horizontal") {

            if (!visible) var off = 0 - opt.slotw;

            for (var i = 0; i < opt.slots; i++) {
                sh.append('<div class="slot" style="position:absolute;' +
                    'top:' + (0 + fullyoff) + 'px;' +
                    'left:' + (fulloff + i * opt.slotw) + 'px;' +
                    'overflow:hidden;width:' + opt.slotw + 'px;' +
                    'height:' + h + 'px">' +
                    '<div class="slotslide" style="position:absolute;' +
                    'top:0px;left:' + off + 'px;' +
                    'width:' + opt.slotw + 'px;' +
                    'height:' + h + 'px;overflow:hidden;">' +
                    '<div style="background-color:' + bgcolor + ';' +
                    'position:absolute;top:0px;' +
                    'left:' + (0 - (i * opt.slotw)) + 'px;' +
                    'width:' + w + 'px;height:' + h + 'px;' +
                    'background-image:url(' + src + ');' +
                    'background-repeat:' + bgrepeat + ';' +
                    'background-size:' + bgfit + ';background-position:' + bgposition + ';">' +
                    '</div></div></div>');
                if (scalestart != undefined && rotatestart != undefined)
                    TweenLite.set(sh.find('.slot').last(), { rotationZ: rotatestart });
                if (isIE(8)) {
                    sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="' + imgsrc + '" style="width:100%">');
                    ieimgposition(sh, opt);

                }
            }
        } else {

            if (!visible) var off = 0 - opt.sloth;

            for (var i = 0; i < opt.slots + 2; i++) {
                sh.append('<div class="slot" style="position:absolute;' +
                    'top:' + (fullyoff + (i * opt.sloth)) + 'px;' +
                    'left:' + (fulloff) + 'px;' +
                    'overflow:hidden;' +
                    'width:' + w + 'px;' +
                    'height:' + (opt.sloth) + 'px">' +

                    '<div class="slotslide" style="position:absolute;' +
                    'top:' + (off) + 'px;' +
                    'left:0px;width:' + w + 'px;' +
                    'height:' + opt.sloth + 'px;' +
                    'overflow:hidden;">' +
                    '<div style="background-color:' + bgcolor + ';' +
                    'position:absolute;' +
                    'top:' + (0 - (i * opt.sloth)) + 'px;' +
                    'left:0px;' +
                    'width:' + w + 'px;height:' + h + 'px;' +
                    'background-image:url(' + src + ');' +
                    'background-repeat:' + bgrepeat + ';' +
                    'background-size:' + bgfit + ';background-position:' + bgposition + ';">' +

                    '</div></div></div>');
                if (scalestart != undefined && rotatestart != undefined)
                    TweenLite.set(sh.find('.slot').last(), { rotationZ: rotatestart });
                if (isIE(8)) {
                    sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="' + imgsrc + '" style="width:100%">');
                    ieimgposition(sh, opt);
                }
            }
        }




    }



    ///////////////////////
    // PREPARE THE SLIDE //
    //////////////////////
    function prepareOneSlideBox(slotholder, opt, visible) {

        var sh = slotholder;
        var img = sh.find('.defaultimg');

        var scalestart = sh.data('zoomstart');
        var rotatestart = sh.data('rotationstart');

        if (img.data('currotate') != undefined)
            rotatestart = img.data('currotate');
        if (img.data('curscale') != undefined)
            scalestart = img.data('curscale') * 100;

        setSize(img, opt)
        var src = img.data('src');
        var bgcolor = img.css('backgroundColor');

        var w = opt.width;
        var h = opt.height;
        if (opt.autoHeight == "on")
            h = opt.container.height();

        var fulloff = img.data("fxof");
        if (fulloff == undefined) fulloff = 0;

        fullyoff = 0;



        var off = 0;


        if (isIE(8)) {
            var imgsrc = src;
            src = "";
        }

        // SET THE MINIMAL SIZE OF A BOX
        var basicsize = 0;
        if (opt.sloth > opt.slotw)
            basicsize = opt.sloth
        else
            basicsize = opt.slotw;


        if (!visible) {
            var off = 0 - basicsize;
        }

        opt.slotw = basicsize;
        opt.sloth = basicsize;
        var x = 0;
        var y = 0;

        var bgfit = img.data('bgfit');
        var bgrepeat = img.data('bgrepeat');
        var bgposition = img.data('bgposition');

        if (bgfit == undefined) bgfit = "cover";
        if (bgrepeat == undefined) bgrepeat = "no-repeat";
        if (bgposition == undefined) bgposition = "center center";

        if (sh.data('kenburns') == "on") {
            bgfit = scalestart;

            if (bgfit.toString().length < 4)
                bgfit = calculateKenBurnScales(bgfit, sh, opt);
        }

        for (var j = 0; j < opt.slots; j++) {

            y = 0;
            for (var i = 0; i < opt.slots; i++) {


                sh.append('<div class="slot" ' +
                    'style="position:absolute;' +
                    'top:' + (fullyoff + y) + 'px;' +
                    'left:' + (fulloff + x) + 'px;' +
                    'width:' + basicsize + 'px;' +
                    'height:' + basicsize + 'px;' +
                    'overflow:hidden;">' +

                    '<div class="slotslide" data-x="' + x + '" data-y="' + y + '" ' +
                    'style="position:absolute;' +
                    'top:' + (0) + 'px;' +
                    'left:' + (0) + 'px;' +
                    'width:' + basicsize + 'px;' +
                    'height:' + basicsize + 'px;' +
                    'overflow:hidden;">' +

                    '<div style="position:absolute;' +
                    'top:' + (0 - y) + 'px;' +
                    'left:' + (0 - x) + 'px;' +
                    'width:' + w + 'px;' +
                    'height:' + h + 'px;' +
                    'background-color:' + bgcolor + ';' +
                    'background-image:url(' + src + ');' +
                    'background-repeat:' + bgrepeat + ';' +
                    'background-size:' + bgfit + ';background-position:' + bgposition + ';">' +
                    '</div></div></div>');
                y = y + basicsize;

                if (isIE(8)) {

                    sh.find('.slot ').last().find('.slotslide').append('<img src="' + imgsrc + '">');
                    ieimgposition(sh, opt);
                }

                if (scalestart != undefined && rotatestart != undefined)
                    TweenLite.set(sh.find('.slot').last(), { rotationZ: rotatestart });
            }
            x = x + basicsize;
        }
    }

    /***********************************************
    	-	MOVE IE8 IMAGE IN RIGHT POSITION	-
    ***********************************************/

    function ieimgposition(nextsh, opt) {

        if (isIE(8)) {
            var ie8img = nextsh.find('.ieeightfallbackimage');
            if (opt.startwidth / opt.startheight < nextsh.data('owidth') / nextsh.data('oheight'))
                ie8img.css({ width: "auto", height: "100%" })
            else
                ie8img.css({ width: "100%", height: "auto" })



            var ie8w = ie8img.width(),
                ie8h = ie8img.height();

            if (nextsh.data('bgposition') == "center center")
                ie8img.css({ position: "absolute", top: opt.height / 2 - ie8h / 2 + "px", left: opt.width / 2 - ie8w / 2 + "px" });

            if (nextsh.data('bgposition') == "center top" || nextsh.data('bgposition') == "top center")
                ie8img.css({ position: "absolute", top: "0px", left: opt.width / 2 - ie8w / 2 + "px" });

            if (nextsh.data('bgposition') == "center bottom" || nextsh.data('bgposition') == "bottom center")
                ie8img.css({ position: "absolute", bottom: "0px", left: opt.width / 2 - ie8w / 2 + "px" });


            if (nextsh.data('bgposition') == "right top" || nextsh.data('bgposition') == "top right")
                ie8img.css({ position: "absolute", top: "0px", right: "0px" });

            if (nextsh.data('bgposition') == "right bottom" || nextsh.data('bgposition') == "bottom right")
                ie8img.css({ position: "absolute", bottom: "0px", right: "0px" });

            if (nextsh.data('bgposition') == "right center" || nextsh.data('bgposition') == "center right")
                ie8img.css({ position: "absolute", top: opt.height / 2 - ie8h / 2 + "px", right: "0px" });

            if (nextsh.data('bgposition') == "left bottom" || nextsh.data('bgposition') == "bottom left")
                ie8img.css({ position: "absolute", bottom: "0px", left: "0px" });

            if (nextsh.data('bgposition') == "left center" || nextsh.data('bgposition') == "center left")
                ie8img.css({ position: "absolute", top: opt.height / 2 - ie8h / 2 + "px", left: "0px" });
        }
    }




    ///////////////////////
    //	REMOVE SLOTS	//
    /////////////////////
    function removeSlots(container, opt, time) {
        if (time == undefined)
            time == 80

        setTimeout(function() {
            container.find('.slotholder .slot').each(function() {
                clearTimeout(jQuery(this).data('tout'));
                jQuery(this).remove();
            });
            opt.transition = 0;
        }, time);
    }





    //////////////////////////////
    //                         //
    //	-	SWAP THE SLIDES -  //
    //                        //
    ////////////////////////////
    function swapSlide(container, opt) {
        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')');
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)');
        }
        opt.lastslide = opt.act;
        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')');

        var defimg = nextli.find('.defaultimg');

        if (defimg.data('lazyload') != undefined && defimg.data('lazyload') != "undefined" && defimg.data('lazydone') != 1) {

            defimg.css({ backgroundImage: 'url("' + nextli.find('.defaultimg').data('lazyload') + '")' });
            defimg.data('src', nextli.find('.defaultimg').data('lazyload'));
            defimg.data('lazydone', 1);
            defimg.data('orgw', 0);
            nextli.data('loadeddone', 1);
            container.find('.tp-loader').css({ 'display': 'block' }).animate({ opacity: 1, duration: 300 });
            var limg = new Image();
            limg.onload = function() {
                setTimeout(function() { killBannerTimer(opt, container) }, 180);

                nextli.waitForImages(function() {

                    defimg.data('lazydone', 1);
                    nextli.data('owidth', limg.width);
                    nextli.data('oheight', limg.height);
                    nextli.find('.slotholder').data('owidth', limg.width);
                    nextli.find('.slotholder').data('oheight', limg.height);


                    setTimeout(function() { restartBannerTimer(opt, container) }, 190);
                    setSize(defimg, opt);
                    setBulPos(container, opt);
                    setSize(defimg, opt);
                    swapSlideProgress(container, opt);
                    container.find('.tp-loader').animate({ opacity: 0, duration: 300 });

                    setTimeout(function() {
                        container.find('.tp-loader').css({ 'display': 'none' });

                    }, 2200)
                });
            }
            limg.src = nextli.find('.defaultimg').data('lazyload');

        } else {
            if (nextli.data('loadeddone') == undefined) {
                var limg = new Image();
                limg.onload = function() {
                    nextli.data('loadeddone', 1);
                    nextli.data('owidth', limg.width);
                    nextli.data('oheight', limg.height);
                    nextli.find('.slotholder').data('owidth', limg.width);
                    nextli.find('.slotholder').data('oheight', limg.height);


                    nextli.waitForImages(function() {
                        setSize(defimg, opt);
                        setBulPos(container, opt);
                        setSize(defimg, opt);
                        swapSlideProgress(container, opt);
                    });
                }
                limg.src = nextli.find('.defaultimg').data('src');
            } else {
                swapSlideProgress(container, opt);
            }
        }
    }

    /******************************
    	-	SWAP SLIDE PROGRESS	-
    ********************************/
    /*!SWAP SLIDE*/
    function swapSlideProgress(container, opt) {



        container.trigger('revolution.slide.onbeforeswap');

        opt.transition = 1;
        opt.videoplaying = false;
        //konsole.log("VideoPlay set to False due swapSlideProgress");

        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')');
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)');
        }

        opt.lastslide = opt.act;

        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')');


        var actsh = actli.find('.slotholder');
        var nextsh = nextli.find('.slotholder');
        actli.css({ 'visibility': 'visible' });
        nextli.css({ 'visibility': 'visible' });

        if (nextsh.data('kenburns') == "on")
            stopKenBurn(container, opt);


        if (opt.ie) {
            if (comingtransition == "boxfade") comingtransition = "boxslide";
            if (comingtransition == "slotfade-vertical") comingtransition = "slotzoom-vertical";
            if (comingtransition == "slotfade-horizontal") comingtransition = "slotzoom-horizontal";
        }


        // IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
        if (nextli.data('delay') != undefined) {
            opt.cd = 0;
            opt.delay = nextli.data('delay');
        } else {
            opt.delay = opt.origcd;
        }

        // RESET POSITION AND FADES OF LI'S
        actli.css({ 'left': '0px', 'top': '0px' });
        nextli.css({ 'left': '0px', 'top': '0px' });


        // IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
        if (nextli.data('differentissplayed') == 'prepared') {
            nextli.data('differentissplayed', 'done');
            nextli.data('transition', nextli.data('savedtransition'));
            nextli.data('slotamount', nextli.data('savedslotamount'));
            nextli.data('masterspeed', nextli.data('savedmasterspeed'));
        }


        if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') != "done") {
            nextli.data('savedtransition', nextli.data('transition'));
            nextli.data('savedslotamount', nextli.data('slotamount'));
            nextli.data('savedmasterspeed', nextli.data('masterspeed'));

            nextli.data('transition', nextli.data('fstransition'));
            nextli.data('slotamount', nextli.data('fsslotamount'));
            nextli.data('masterspeed', nextli.data('fsmasterspeed'));

            nextli.data('differentissplayed', 'prepared');
        }

        ///////////////////////////////////////
        // TRANSITION CHOOSE - RANDOM EFFECTS//
        ///////////////////////////////////////
        var nexttrans = 0;


        var transtext = nextli.data('transition').split(",");
        var curtransid = nextli.data('nexttransid');
        if (curtransid == undefined) {
            curtransid = 0;
            nextli.data('nexttransid', curtransid);
        } else {
            curtransid = curtransid + 1;
            if (curtransid == transtext.length) curtransid = 0;
            nextli.data('nexttransid', curtransid);

        }



        var comingtransition = transtext[curtransid];
        if (jQuery(window).width() < 768 && opt.forceFullWidth == "on") {
            comingtransition = "slideup";
        }

        var specials = 0;

        /*if (opt.ffnn == undefined) opt.ffnn=0;
        comingtransition=opt.ffnn;
        opt.ffnn=opt.ffnn+1;
        if (opt.ffnn>46) opt.ffnn=0;*/


        /* Transition Name ,
           Transition Code,
           Transition Sub Code,
           Max Slots,
           MasterSpeed Delays,
           Preparing Slots (box,slideh, slidev),
           Call on nextsh (null = no, true/false for visibility first preparing),
           Call on actsh (null = no, true/false for visibility first preparing),
        */

        if (comingtransition == "slidehorizontal") {
            comingtransition = "slideleft"
            if (opt.leftarrowpressed == 1)
                comingtransition = "slideright"
        }

        if (comingtransition == "slidevertical") {
            comingtransition = "slideup"
            if (opt.leftarrowpressed == 1)
                comingtransition = "slidedown"
        }


        var transitionsArray = [
            ['boxslide', 0, 1, 10, 0, 'box', false, null, 0],
            ['boxfade', 1, 0, 10, 0, 'box', false, null, 1],
            ['slotslide-horizontal', 2, 0, 0, 200, 'horizontal', true, false, 2],
            ['slotslide-vertical', 3, 0, 0, 200, 'vertical', true, false, 3],
            ['curtain-1', 4, 3, 0, 0, 'horizontal', true, true, 4],
            ['curtain-2', 5, 3, 0, 0, 'horizontal', true, true, 5],
            ['curtain-3', 6, 3, 25, 0, 'horizontal', true, true, 6],
            ['slotzoom-horizontal', 7, 0, 0, 400, 'horizontal', true, true, 7],
            ['slotzoom-vertical', 8, 0, 0, 0, 'vertical', true, true, 8],
            ['slotfade-horizontal', 9, 0, 0, 500, 'horizontal', true, null, 9],
            ['slotfade-vertical', 10, 0, 0, 500, 'vertical', true, null, 10],
            ['fade', 11, 0, 1, 300, 'horizontal', true, null, 11],
            ['slideleft', 12, 0, 1, 0, 'horizontal', true, true, 12],
            ['slideup', 13, 0, 1, 0, 'horizontal', true, true, 13],
            ['slidedown', 14, 0, 1, 0, 'horizontal', true, true, 14],
            ['slideright', 15, 0, 1, 0, 'horizontal', true, true, 15],
            ['papercut', 16, 0, 0, 600, '', null, null, 16],
            ['3dcurtain-horizontal', 17, 0, 20, 100, 'vertical', false, true, 17],
            ['3dcurtain-vertical', 18, 0, 10, 100, 'horizontal', false, true, 18],
            ['cubic', 19, 0, 20, 600, 'horizontal', false, true, 19],
            ['cube', 19, 0, 20, 600, 'horizontal', false, true, 20],
            ['flyin', 20, 0, 4, 600, 'vertical', false, true, 21],
            ['turnoff', 21, 0, 1, 1600, 'horizontal', false, true, 22],
            ['incube', 22, 0, 20, 600, 'horizontal', false, true, 23],
            ['cubic-horizontal', 23, 0, 20, 500, 'vertical', false, true, 24],
            ['cube-horizontal', 23, 0, 20, 500, 'vertical', false, true, 25],
            ['incube-horizontal', 24, 0, 20, 500, 'vertical', false, true, 26],
            ['turnoff-vertical', 25, 0, 1, 1600, 'horizontal', false, true, 27],
            ['fadefromright', 12, 1, 1, 0, 'horizontal', true, true, 28],
            ['fadefromleft', 15, 1, 1, 0, 'horizontal', true, true, 29],
            ['fadefromtop', 14, 1, 1, 0, 'horizontal', true, true, 30],
            ['fadefrombottom', 13, 1, 1, 0, 'horizontal', true, true, 31],
            ['fadetoleftfadefromright', 12, 2, 1, 0, 'horizontal', true, true, 32],
            ['fadetorightfadetoleft', 15, 2, 1, 0, 'horizontal', true, true, 33],
            ['fadetobottomfadefromtop', 14, 2, 1, 0, 'horizontal', true, true, 34],
            ['fadetotopfadefrombottom', 13, 2, 1, 0, 'horizontal', true, true, 35],
            ['parallaxtoright', 12, 3, 1, 0, 'horizontal', true, true, 36],
            ['parallaxtoleft', 15, 3, 1, 0, 'horizontal', true, true, 37],
            ['parallaxtotop', 14, 3, 1, 0, 'horizontal', true, true, 38],
            ['parallaxtobottom', 13, 3, 1, 0, 'horizontal', true, true, 39],
            ['scaledownfromright', 12, 4, 1, 0, 'horizontal', true, true, 40],
            ['scaledownfromleft', 15, 4, 1, 0, 'horizontal', true, true, 41],
            ['scaledownfromtop', 14, 4, 1, 0, 'horizontal', true, true, 42],
            ['scaledownfrombottom', 13, 4, 1, 0, 'horizontal', true, true, 43],
            ['zoomout', 13, 5, 1, 0, 'horizontal', true, true, 44],
            ['zoomin', 13, 6, 1, 0, 'horizontal', true, true, 45],
            ['notransition', 26, 0, 1, 0, 'horizontal', true, null, 46]
        ];


        var flatTransitions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        var premiumTransitions = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]

        var nexttrans = 0;
        var specials = 1;
        var STAindex = 0;
        var indexcounter = 0;
        var STA = new Array;


        // RANDOM TRANSITIONS
        if (comingtransition == "random") {
            comingtransition = Math.round(Math.random() * transitionsArray.length - 1);
            if (comingtransition > transitionsArray.length - 1) comingtransition = transitionsArray.length - 1;
        }

        // RANDOM FLAT TRANSITIONS
        if (comingtransition == "random-static") {
            comingtransition = Math.round(Math.random() * flatTransitions.length - 1);
            if (comingtransition > flatTransitions.length - 1) comingtransition = flatTransitions.length - 1;
            comingtransition = flatTransitions[comingtransition];
        }

        // RANDOM PREMIUM TRANSITIONS
        if (comingtransition == "random-premium") {
            comingtransition = Math.round(Math.random() * premiumTransitions.length - 1);
            if (comingtransition > premiumTransitions.length - 1) comingtransition = premiumTransitions.length - 1;
            comingtransition = premiumTransitions[comingtransition];
        }

        findTransition();

        // CHECK IF WE HAVE IE8 AND THAN FALL BACK ON FLAT TRANSITIONS
        if (isIE(8) && nexttrans > 15 && nexttrans < 28) {
            comingtransition = Math.round(Math.random() * flatTransitions.length - 1);
            if (comingtransition > flatTransitions.length - 1) comingtransition = flatTransitions.length - 1;
            comingtransition = flatTransitions[comingtransition];
            indexcounter = 0;
            findTransition();
        }

        function findTransition() {
            // FIND THE RIGHT TRANSITION PARAMETERS HERE
            jQuery.each(transitionsArray, function(inde, trans) {
                if (trans[0] == comingtransition || trans[8] == comingtransition) {
                    nexttrans = trans[1];
                    specials = trans[2];
                    STAindex = indexcounter;
                }
                indexcounter = indexcounter + 1;
            })
        }



        var direction = -1;
        if (opt.leftarrowpressed == 1 || opt.act > opt.next) direction = 1;



        opt.leftarrowpressed = 0;

        if (nexttrans > 26) nexttrans = 26;
        if (nexttrans < 0) nexttrans = 0;


        // DEFINE THE MASTERSPEED FOR THE SLIDE //
        var masterspeed = 300;
        if (nextli.data('masterspeed') != undefined && nextli.data('masterspeed') > 99 && nextli.data('masterspeed') < 4001)
            masterspeed = nextli.data('masterspeed');

        // PREPARED DEFAULT SETTINGS PER TRANSITION
        STA = transitionsArray[STAindex];





        /////////////////////////////////////////////
        // SET THE BULLETS SELECTED OR UNSELECTED  //
        /////////////////////////////////////////////


        container.parent().find(".bullet").each(function() {
            var bul = jQuery(this);
            bul.removeClass("selected");

            if (opt.navigationArrows == "withbullet" || opt.navigationArrows == "nexttobullets") {
                if (bul.index() - 1 == opt.next) bul.addClass('selected');

            } else {

                if (bul.index() == opt.next) bul.addClass('selected');

            }
        });



        //////////////////////////////////////////////////////////////////
        // 		SET THE NEXT CAPTION AND REMOVE THE LAST CAPTION		//
        //////////////////////////////////////////////////////////////////

        container.find('>li').each(function() {
            var li = jQuery(this);
            if (li.index != opt.act && li.index != opt.next) li.css({ 'z-index': 16 });
        });

        actli.css({ 'z-index': 18 });
        nextli.css({ 'z-index': 20 });
        nextli.css({ 'opacity': 0 });


        ///////////////////////////
        //	ANIMATE THE CAPTIONS //
        ///////////////////////////

        if (actli.index() != nextli.index() && opt.firststart != 1) {
            removeTheCaptions(actli, opt);

        }

        animateTheCaptions(nextli, opt);




        /////////////////////////////////////////////
        //	SET THE ACTUAL AMOUNT OF SLIDES !!     //
        //  SET A RANDOM AMOUNT OF SLOTS          //
        ///////////////////////////////////////////
        if (nextli.data('slotamount') == undefined || nextli.data('slotamount') < 1) {
            opt.slots = Math.round(Math.random() * 12 + 4);
            if (comingtransition == "boxslide")
                opt.slots = Math.round(Math.random() * 6 + 3);
            else
            if (comingtransition == "flyin")
                opt.slots = Math.round(Math.random() * 4 + 1);
        } else {
            opt.slots = nextli.data('slotamount');

        }

        /////////////////////////////////////////////
        //	SET THE ACTUAL AMOUNT OF SLIDES !!     //
        //  SET A RANDOM AMOUNT OF SLOTS          //
        ///////////////////////////////////////////
        if (nextli.data('rotate') == undefined)
            opt.rotate = 0
        else
        if (nextli.data('rotate') == 999)
            opt.rotate = Math.round(Math.random() * 360);
        else
            opt.rotate = nextli.data('rotate');
        if (!jQuery.support.transition || opt.ie || opt.ie9) opt.rotate = 0;



        //////////////////////////////
        //	FIRST START 			//
        //////////////////////////////

        if (opt.firststart == 1) {
            actli.css({ 'opacity': 0 });
            opt.firststart = 0;
        }


        // HERE COMES THE TRANSITION ENGINE

        // ADJUST MASTERSPEED
        masterspeed = masterspeed + STA[4];

        if ((nexttrans == 4 || nexttrans == 5 || nexttrans == 6) && opt.slots < 3) opt.slots = 3;

        // ADJUST SLOTS
        if (STA[3] != 0) opt.slots = Math.min(opt.slots, STA[3]);
        if (nexttrans == 9) opt.slots = opt.width / 20;
        if (nexttrans == 10) opt.slots = opt.height / 20;




        // PREPAREONESLIDEBOX
        if (STA[5] == "box") {
            if (STA[7] != null) prepareOneSlideBox(actsh, opt, STA[7]);
            if (STA[6] != null) prepareOneSlideBox(nextsh, opt, STA[6]);
        } else

        if (STA[5] == "vertical" || STA[5] == "horizontal") {
            if (STA[7] != null) prepareOneSlideSlot(actsh, opt, STA[7], STA[5]);
            if (STA[6] != null) prepareOneSlideSlot(nextsh, opt, STA[6], STA[5]);
        }

        // SHOW FIRST LI
        if (nexttrans < 12 || nexttrans > 16) nextli.css({ 'opacity': 1 });


        /////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION I.  //
        ////////////////////////////////////
        if (nexttrans == 0) { // BOXSLIDE
            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

            var maxz = Math.ceil(opt.height / opt.sloth);
            var curz = 0;
            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                curz = curz + 1;
                if (curz == maxz) curz = 0;

                TweenLite.fromTo(ss, (masterspeed) / 600, { opacity: 0, top: (0 - opt.sloth), left: (0 - opt.slotw), rotation: opt.rotate }, {
                    opacity: 1,
                    transformPerspective: 600,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    delay: ((j) * 15 + (curz) * 30) / 1500,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        if (j == (opt.slots * opt.slots) - 1) {
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                        }

                    }
                });
            });
        }
        /////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION I.  //
        ////////////////////////////////////
        if (nexttrans == 1) {


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

            var maxtime;

            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);

                rand = Math.random() * masterspeed + 300;
                rand2 = Math.random() * 500 + 200;

                if (rand + rand2 > maxtime) maxtime = rand2 + rand2;


                TweenLite.fromTo(ss, rand / 1000, { opacity: 0, transformPerspective: 600, rotation: opt.rotate }, { opacity: 1, ease: Power2.easeInOut, rotation: 0, delay: rand2 / 1000 })



            });

            setTimeout(function() {
                letItFree(container, opt, nextsh, actsh, nextli, actli)
            }, masterspeed + 300);

        }


        /////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION I.  //
        ////////////////////////////////////
        if (nexttrans == 2) {


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });

            // ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this);

                TweenLite.to(ss, masterspeed / 1000, {
                    left: opt.slotw,
                    rotation: (0 - opt.rotate),
                    onComplete: function() {
                        letItFree(container, opt, nextsh, actsh, nextli, actli)

                    }
                });

            });

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            nextsh.find('.slotslide').each(function() {
                var ss = jQuery(this);

                TweenLite.fromTo(ss, masterspeed / 1000, { left: 0 - opt.slotw, rotation: opt.rotate, transformPerspective: 600 }, {
                    left: 0,
                    rotation: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });

            });
        }



        /////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION I.  //
        ////////////////////////////////////
        if (nexttrans == 3) {


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });

            // ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this);
                TweenLite.to(ss, masterspeed / 1000, {
                    top: opt.sloth,
                    rotation: opt.rotate,
                    transformPerspective: 600,
                    onComplete: function() {
                        letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });

            });

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            nextsh.find('.slotslide').each(function() {
                var ss = jQuery(this);

                TweenLite.fromTo(ss, masterspeed / 1000, { top: 0 - opt.sloth, rotation: opt.rotate, transformPerspective: 600 }, {
                    top: 0,
                    rotation: 0,
                    ease: Power2.easeOut,
                    onComplete: function() {
                        letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });

            });
        }



        /////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION I.  //
        ////////////////////////////////////
        if (nexttrans == 4 || nexttrans == 5) {

            //SET DEFAULT IMG UNVISIBLE




            nextsh.find('.defaultimg').css({ 'opacity': 0 });
            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);



            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            var cspeed = (masterspeed) / 1000;
            var ticker = cspeed;



            actsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                var del = (i * cspeed) / opt.slots;
                if (nexttrans == 5) del = ((opt.slots - i - 1) * cspeed) / (opt.slots) / 1.5;
                TweenLite.to(ss, cspeed * 3, { transformPerspective: 600, top: 0 + opt.height, opacity: 0.5, rotation: opt.rotate, ease: Power2.easeInOut, delay: del });
            });

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                var del = (i * cspeed) / opt.slots;
                if (nexttrans == 5) del = ((opt.slots - i - 1) * cspeed) / (opt.slots) / 1.5;
                TweenLite.fromTo(ss, cspeed * 3, { top: (0 - opt.height), opacity: 0.5, rotation: opt.rotate, transformPerspective: 600 }, {
                    top: 0,
                    opacity: 1,
                    rotation: 0,
                    ease: Power2.easeInOut,
                    delay: del,
                    onComplete: function() {
                        if (i == opt.slots - 1) {
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                        }
                    }
                });

            });


        }




        /////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION I.  //
        ////////////////////////////////////
        if (nexttrans == 6) {


            if (opt.slots < 2) opt.slots = 2;

            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });
            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);

            actsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);

                if (i < opt.slots / 2)
                    var tempo = (i + 2) * 60;
                else
                    var tempo = (2 + opt.slots - i) * 60;

                TweenLite.to(ss, (masterspeed + tempo) / 1000, { top: 0 + opt.height, opacity: 1, rotation: opt.rotate, transformPerspective: 600, ease: Power2.easeInOut });


            });

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);

                if (i < opt.slots / 2)
                    var tempo = (i + 2) * 60;
                else
                    var tempo = (2 + opt.slots - i) * 60;

                TweenLite.fromTo(ss, (masterspeed + tempo) / 1000, { top: (0 - opt.height), opacity: 1, rotation: opt.rotate, transformPerspective: 600 }, {
                    top: (0),
                    opacity: 1,
                    rotation: 0,
                    ease: Power2.easeInOut,
                    onComplete: function() {
                        if (i == Math.round(opt.slots / 2)) {
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                        }
                    }
                });




            });
        }


        ////////////////////////////////////
        // THE SLOTSZOOM - TRANSITION II. //
        ////////////////////////////////////
        if (nexttrans == 7) {

            masterspeed = masterspeed * 2;

            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });
            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);
            // ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this).find('div');
                TweenLite.to(ss, masterspeed / 1000, {
                    left: (0 - opt.slotw / 2) + 'px',
                    top: (0 - opt.height / 2) + 'px',
                    width: (opt.slotw * 2) + "px",
                    height: (opt.height * 2) + "px",
                    opacity: 0,
                    rotation: opt.rotate,
                    transformPerspective: 600,
                    ease: Power2.easeOut
                });

            });

            //////////////////////////////////////////////////////////////
            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
            ///////////////////////////////////////////////////////////////
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this).find('div');

                TweenLite.fromTo(ss, masterspeed / 1000, { left: 0, top: 0, opacity: 0, transformPerspective: 600 }, {
                    left: (0 - i * opt.slotw) + 'px',
                    ease: Power2.easeOut,
                    top: (0) + 'px',
                    width: opt.width,
                    height: opt.height,
                    opacity: 1,
                    rotation: 0,
                    delay: 0.1,
                    onComplete: function() {
                        letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });
            });
        }




        ////////////////////////////////////
        // THE SLOTSZOOM - TRANSITION II. //
        ////////////////////////////////////
        if (nexttrans == 8) {

            masterspeed = masterspeed * 3;

            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });


            // ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
            actsh.find('.slotslide').each(function() {
                var ss = jQuery(this).find('div');

                TweenLite.to(ss, masterspeed / 1000, {
                    left: (0 - opt.width / 2) + 'px',
                    top: (0 - opt.sloth / 2) + 'px',
                    width: (opt.width * 2) + "px",
                    height: (opt.sloth * 2) + "px",
                    transformPerspective: 600,
                    opacity: 0,
                    rotation: opt.rotate

                });

            });


            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
            ///////////////////////////////////////////////////////////////
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this).find('div');

                TweenLite.fromTo(ss, masterspeed / 1000, { left: 0, top: 0, opacity: 0, transformPerspective: 600 }, {
                    'left': (0) + 'px',
                    'top': (0 - i * opt.sloth) + 'px',
                    'width': (nextsh.find('.defaultimg').data('neww')) + "px",
                    'height': (nextsh.find('.defaultimg').data('newh')) + "px",
                    opacity: 1,
                    rotation: 0,
                    onComplete: function() {
                        letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });

            });
        }


        ////////////////////////////////////////
        // THE SLOTSFADE - TRANSITION III.   //
        //////////////////////////////////////
        if (nexttrans == 9 || nexttrans == 10) {


            nextsh.find('.defaultimg').css({ 'opacity': 0 });

            var ssamount = 0;
            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                ssamount++;
                TweenLite.fromTo(ss, masterspeed / 1000, { opacity: 0, transformPerspective: 600, left: 0, top: 0 }, { opacity: 1, ease: Power2.easeInOut, delay: (i * 4) / 1000 });

            });

            //nextsh.find('.defaultimg').transition({'opacity':1},(masterspeed+(ssamount*4)));

            setTimeout(function() {
                letItFree(container, opt, nextsh, actsh, nextli, actli)
            }, (masterspeed + (ssamount * 4)));
        }


        ///////////////////////////
        // SIMPLE FADE ANIMATION //
        ///////////////////////////

        if (nexttrans == 11 || nexttrans == 26) {


            nextsh.find('.defaultimg').css({ 'opacity': 0, 'position': 'relative' });

            var ssamount = 0;
            if (nexttrans == 26) masterspeed = 0;

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            nextsh.find('.slotslide').each(function(i) {
                var ss = jQuery(this);
                TweenLite.fromTo(ss, masterspeed / 1000, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut });
            });

            setTimeout(function() {
                letItFree(container, opt, nextsh, actsh, nextli, actli)
            }, masterspeed + 15);
        }






        if (nexttrans == 12 || nexttrans == 13 || nexttrans == 14 || nexttrans == 15) {

            //masterspeed = masterspeed * 3;


            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);
            nextsh.find('.defaultimg').css({ 'opacity': 0 });

            //	kill();

            var oow = opt.width;
            var ooh = opt.height;


            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            var ssn = nextsh.find('.slotslide')

            if (opt.fullWidth == "on" || opt.fullSreen == "on") {
                oow = ssn.width();
                ooh = ssn.height();
            }
            var twx = 0;
            var twy = 0;

            if (nexttrans == 12)
                twx = oow;
            else
            if (nexttrans == 15)
                twx = 0 - oow;
            else
            if (nexttrans == 13)
                twy = ooh;
            else
            if (nexttrans == 14)
                twy = 0 - ooh;

            // SPECIALS FOR EXTENDED ANIMATIONS
            var op = 1;
            var scal = 1;
            var fromscale = 1;
            var easeitout = Power2.easeInOut;
            var easeitin = Power2.easeInOut;
            var speedy = masterspeed / 1000;
            var speedy2 = speedy;

            // DEPENDING ON EXTENDED SPECIALS, DIFFERENT SCALE AND OPACITY FUNCTIONS NEED TO BE ADDED
            if (specials == 1) op = 0;
            if (specials == 2) op = 0;
            if (specials == 3) {
                easeitout = Power2.easeInOut;
                easeitin = Power1.easeInOut;
                actli.css({ 'position': 'absolute', 'z-index': 20 });
                nextli.css({ 'position': 'absolute', 'z-index': 15 });
                speedy = masterspeed / 1200;
            }

            if (specials == 4 || specials == 5)
                scal = 0.6;
            if (specials == 6)
                scal = 1.4;


            if (specials == 5 || specials == 6) {
                fromscale = 1.4;
                op = 0;
                oow = 0;
                ooh = 0;
                twx = 0;
                twy = 0;
            }
            if (specials == 6) fromscale = 0.6;



            TweenLite.fromTo(ssn, speedy, { left: twx, top: twy, scale: fromscale, opacity: op, rotation: opt.rotate }, {
                opacity: 1,
                rotation: 0,
                left: 0,
                top: 0,
                scale: 1,
                ease: easeitin,
                onComplete: function() {
                    letItFree(container, opt, nextsh, actsh, nextli, actli);
                    actli.css({ 'position': 'absolute', 'z-index': 18 });
                    nextli.css({ 'position': 'absolute', 'z-index': 20 });
                }

            });

            var ssa = actsh.find('.slotslide');

            if (specials == 4 || specials == 5) {
                oow = 0;
                ooh = 0;
            }

            if (specials != 1) {
                if (nexttrans == 12)
                    TweenLite.to(ssa, speedy2, { 'left': (0 - oow) + 'px', scale: scal, opacity: op, rotation: opt.rotate, ease: easeitout });
                else
                if (nexttrans == 15)
                    TweenLite.to(ssa, speedy2, { 'left': (oow) + 'px', scale: scal, opacity: op, rotation: opt.rotate, ease: easeitout });
                else
                if (nexttrans == 13)
                    TweenLite.to(ssa, speedy2, { 'top': (0 - ooh) + 'px', scale: scal, opacity: op, rotation: opt.rotate, ease: easeitout });
                else
                if (nexttrans == 14)
                    TweenLite.to(ssa, speedy2, { 'top': (ooh) + 'px', scale: scal, opacity: op, rotation: opt.rotate, ease: easeitout });
            }
            nextli.css({ 'opacity': 1 });

        }


        //////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION XVI.  //
        //////////////////////////////////////
        if (nexttrans == 16) { // PAPERCUT



            actli.css({ 'position': 'absolute', 'z-index': 20 });
            nextli.css({ 'position': 'absolute', 'z-index': 15 });


            // PREPARE THE CUTS
            actli.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');

            actli.find('.tp-half-one').clone(true).appendTo(actli).addClass("tp-half-two");
            actli.find('.tp-half-two').removeClass('tp-half-one');

            var oow = opt.width;
            var ooh = opt.height;
            if (opt.autoHeight == "on")
                ooh = container.height();


            actli.find('.tp-half-one .defaultimg').wrap('<div class="tp-papercut" style="width:' + oow + 'px;height:' + ooh + 'px;"></div>')

            actli.find('.tp-half-two .defaultimg').wrap('<div class="tp-papercut" style="width:' + oow + 'px;height:' + ooh + 'px;"></div>')

            actli.find('.tp-half-two .defaultimg').css({ position: 'absolute', top: '-50%' });

            actli.find('.tp-half-two .tp-caption').wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');

            TweenLite.set(actli.find('.tp-half-two'), { width: oow, height: ooh, overflow: 'hidden', zIndex: 15, position: 'absolute', top: ooh / 2, left: '0px', transformPerspective: 600, transformOrigin: "center bottom" });

            TweenLite.set(actli.find('.tp-half-one'), { width: oow, height: ooh / 2, overflow: 'visible', zIndex: 10, position: 'absolute', top: '0px', left: '0px', transformPerspective: 600, transformOrigin: "center top" });



            // ANIMATE THE CUTS
            var img = actli.find('.defaultimg');


            var ro1 = Math.round(Math.random() * 20 - 10);
            var ro2 = Math.round(Math.random() * 20 - 10);
            var ro3 = Math.round(Math.random() * 20 - 10);
            var xof = Math.random() * 0.4 - 0.2;
            var yof = Math.random() * 0.4 - 0.2;
            var sc1 = Math.random() * 1 + 1;
            var sc2 = Math.random() * 1 + 1;


            TweenLite.fromTo(actli.find('.tp-half-one'), masterspeed / 1000, { width: oow, height: ooh / 2, position: 'absolute', top: '0px', left: '0px', transformPerspective: 600, transformOrigin: "center top" }, { scale: sc1, rotation: ro1, y: (0 - ooh - ooh / 4), ease: Power2.easeInOut });
            setTimeout(function() {
                TweenLite.set(actli.find('.tp-half-one'), { overflow: 'hidden' });
            }, 50);
            TweenLite.fromTo(actli.find('.tp-half-one'), masterspeed / 2000, { opacity: 1, transformPerspective: 600, transformOrigin: "center center" }, { opacity: 0, delay: masterspeed / 2000 });

            TweenLite.fromTo(actli.find('.tp-half-two'), masterspeed / 1000, { width: oow, height: ooh, overflow: 'hidden', position: 'absolute', top: ooh / 2, left: '0px', transformPerspective: 600, transformOrigin: "center bottom" }, { scale: sc2, rotation: ro2, y: ooh + ooh / 4, ease: Power2.easeInOut });

            TweenLite.fromTo(actli.find('.tp-half-two'), masterspeed / 2000, { opacity: 1, transformPerspective: 600, transformOrigin: "center center" }, { opacity: 0, delay: masterspeed / 2000 });

            if (actli.html() != null)
                TweenLite.fromTo(nextli, (masterspeed - 200) / 1000, { opacity: 0, scale: 0.8, x: opt.width * xof, y: ooh * yof, rotation: ro3, transformPerspective: 600, transformOrigin: "center center" }, { rotation: 0, scale: 1, x: 0, y: 0, opacity: 1, ease: Power2.easeInOut });

            nextsh.find('.defaultimg').css({ 'opacity': 1 });
            setTimeout(function() {


                // CLEAN UP BEFORE WE START
                actli.css({ 'position': 'absolute', 'z-index': 18 });
                nextli.css({ 'position': 'absolute', 'z-index': 20 });
                nextsh.find('.defaultimg').css({ 'opacity': 1 });
                actsh.find('.defaultimg').css({ 'opacity': 0 });
                if (actli.find('.tp-half-one').length > 0) {
                    actli.find('.tp-half-one .defaultimg').unwrap();
                    actli.find('.tp-half-one .slotholder').unwrap();

                }
                actli.find('.tp-half-two').remove();
                opt.transition = 0;
                opt.act = opt.next;

            }, masterspeed);
            nextli.css({ 'opacity': 1 });

        }

        ////////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION XVII.  //
        ///////////////////////////////////////
        if (nexttrans == 17) { // 3D CURTAIN HORIZONTAL


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT


            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);

                TweenLite.fromTo(ss, (masterspeed) / 800, { opacity: 0, rotationY: 0, scale: 0.9, rotationX: -110, transformPerspective: 600, transformOrigin: "center center" }, {
                    opacity: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    ease: Power3.easeOut,
                    delay: j * 0.06,
                    onComplete: function() {
                        if (j == opt.slots - 1) letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });

            });
        }



        ////////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION XVIII.  //
        ///////////////////////////////////////
        if (nexttrans == 18) { // 3D CURTAIN VERTICAL


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });


            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);

                TweenLite.fromTo(ss, (masterspeed) / 500, { opacity: 0, rotationY: 310, scale: 0.9, rotationX: 10, transformPerspective: 600, transformOrigin: "center center" }, {
                    opacity: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    ease: Power3.easeOut,
                    delay: j * 0.06,
                    onComplete: function() {
                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });

            });



        }


        ////////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION XIX.  //
        ///////////////////////////////////////


        if (nexttrans == 19 || nexttrans == 22) { // IN CUBE


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });
            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);
            var chix = nextli.css('z-index');
            var chix2 = actli.css('z-index');

            var rot = 90;
            var op = 1;
            if (direction == 1) rot = -90;

            if (nexttrans == 19) {
                var torig = "center center -" + opt.height / 2;
                op = 0;

            } else {
                var torig = "center center " + opt.height / 2;

            }

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

            //if (nexttrans==129) {
            TweenLite.fromTo(nextsh, masterspeed / 2000, { transformPerspective: 600, z: 0, x: 0, rotationY: 0 }, { rotationY: 1, ease: Power1.easeInOut, z: -40 });
            TweenLite.fromTo(nextsh, masterspeed / 2000, { transformPerspective: 600, z: -40, rotationY: 1 }, { rotationY: 0, z: 0, ease: Power1.easeInOut, x: 0, delay: 3 * (masterspeed / 4000) });
            TweenLite.fromTo(actsh, masterspeed / 2000, { transformPerspective: 600, z: 0, x: 0, rotationY: 0 }, { rotationY: 1, x: 0, ease: Power1.easeInOut, z: -40 });
            TweenLite.fromTo(actsh, masterspeed / 2000, { transformPerspective: 600, z: -40, x: 0, rotationY: 1 }, { rotationY: 0, z: 0, x: 0, ease: Power1.easeInOut, delay: 3 * (masterspeed / 4000) });
            //}

            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);

                TweenLite.fromTo(ss, masterspeed / 1000, { left: 0, rotationY: opt.rotate, opacity: op, top: 0, scale: 0.8, transformPerspective: 600, transformOrigin: torig, rotationX: rot }, {
                    left: 0,
                    rotationY: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationX: 0,
                    delay: (j * 50) / 1000,
                    ease: Power2.easeInOut,
                    onComplete: function() {

                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });
                TweenLite.to(ss, 0.1, { opacity: 1, delay: (j * 50) / 1000 + masterspeed / 3000 });

            });

            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                var rot = -90;
                if (direction == 1) rot = 90;

                TweenLite.fromTo(ss, masterspeed / 1000, { opacity: 1, rotationY: 0, top: 0, z: 0, scale: 1, transformPerspective: 600, transformOrigin: torig, rotationX: 0 }, {
                    opacity: 1,
                    rotationY: opt.rotate,
                    top: 0,
                    scale: 0.8,
                    rotationX: rot,
                    delay: (j * 50) / 1000,
                    ease: Power2.easeInOut,
                    onComplete: function() {

                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });
                TweenLite.to(ss, 0.1, { opacity: 0, delay: (j * 50) / 1000 + (masterspeed / 1000 - (masterspeed / 10000)) });


            });
        }




        ////////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION XX.  //
        ///////////////////////////////////////
        if (nexttrans == 20) { // FLYIN


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });
            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);
            var chix = nextli.css('z-index');
            var chix2 = actli.css('z-index');


            if (direction == 1) {
                var ofx = -opt.width
                var rot = 70;
                var torig = "left center -" + opt.height / 2;
            } else {
                var ofx = opt.width;
                var rot = -70;
                var torig = "right center -" + opt.height / 2;
            }


            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                //ss.css({overflow:'visible'});
                TweenLite.fromTo(ss, masterspeed / 1500, { left: ofx, rotationX: 40, z: -600, opacity: op, top: 0, transformPerspective: 600, transformOrigin: torig, rotationY: rot }, { left: 0, delay: (j * 50) / 1000, ease: Power2.easeInOut });

                TweenLite.fromTo(ss, masterspeed / 1000, { rotationX: 40, z: -600, opacity: op, top: 0, scale: 1, transformPerspective: 600, transformOrigin: torig, rotationY: rot }, {
                    rotationX: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: (j * 50) / 1000,
                    ease: Power2.easeInOut,
                    onComplete: function() {

                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });
                TweenLite.to(ss, 0.1, { opacity: 1, delay: (j * 50) / 1000 + masterspeed / 2000 });

            });



            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                //ss.css({overflow:'visible'});
                if (direction != 1) {
                    var ofx = -opt.width
                    var rot = 70;
                    var torig = "left center -" + opt.height / 2;
                } else {
                    var ofx = opt.width;
                    var rot = -70;
                    var torig = "right center -" + opt.height / 2;
                }
                TweenLite.fromTo(ss, masterspeed / 1000, { opacity: 1, rotationX: 0, top: 0, z: 0, scale: 1, left: 0, transformPerspective: 600, transformOrigin: torig, rotationY: 0 }, {
                    opacity: 1,
                    rotationX: 40,
                    top: 0,
                    z: -600,
                    left: ofx,
                    scale: 0.8,
                    rotationY: rot,
                    delay: (j * 50) / 1000,
                    ease: Power2.easeInOut,
                    onComplete: function() {

                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });
                TweenLite.to(ss, 0.1, { opacity: 0, delay: (j * 50) / 1000 + (masterspeed / 1000 - (masterspeed / 10000)) });


            });
        }






        ////////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION XX.  //
        ///////////////////////////////////////
        if (nexttrans == 21 || nexttrans == 25) { // TURNOFF


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });
            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);
            var chix = nextli.css('z-index');
            var chix2 = actli.css('z-index');


            if (direction == 1) {
                var ofx = -opt.width
                var rot = 110;

                if (nexttrans == 25) {
                    var torig = "center top 0"
                    rot2 = -rot;
                    rot = opt.rotate;
                } else {
                    var torig = "left center 0";
                    rot2 = opt.rotate;
                }

            } else {
                var ofx = opt.width;
                var rot = -110;
                if (nexttrans == 25) {
                    var torig = "center bottom 0"
                    rot2 = -rot;
                    rot = opt.rotate;
                } else {
                    var torig = "right center 0";
                    rot2 = opt.rotate;
                }
            }


            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);


                TweenLite.fromTo(ss, masterspeed / 1500, { left: 0, rotationX: rot2, z: 0, opacity: 0, top: 0, scale: 1, transformPerspective: 600, transformOrigin: torig, rotationY: rot }, {
                    left: 0,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: (j * 100) / 1000 + masterspeed / 10000,
                    ease: Power2.easeInOut,
                    onComplete: function() {

                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli)
                    }
                });
                TweenLite.to(ss, 0.3, { opacity: 1, delay: (j * 100) / 1000 + (masterspeed * 0.2) / 2000 + masterspeed / 10000 });

            });



            if (direction != 1) {
                var ofx = -opt.width
                var rot = 90;

                if (nexttrans == 25) {
                    var torig = "center top 0"
                    rot2 = -rot;
                    rot = opt.rotate;
                } else {
                    var torig = "left center 0";
                    rot2 = opt.rotate;
                }

            } else {
                var ofx = opt.width;
                var rot = -90;
                if (nexttrans == 25) {
                    var torig = "center bottom 0"
                    rot2 = -rot;
                    rot = opt.rotate;
                } else {
                    var torig = "right center 0";
                    rot2 = opt.rotate;
                }
            }

            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);


                TweenLite.fromTo(ss, masterspeed / 3000, { left: 0, rotationX: 0, z: 0, opacity: 1, top: 0, scale: 1, transformPerspective: 600, transformOrigin: torig, rotationY: 0 }, { left: 0, rotationX: rot2, top: 0, z: 0, scale: 1, rotationY: rot, delay: (j * 100) / 1000, ease: Power1.easeInOut });
                TweenLite.to(ss, 0.2, { opacity: 0, delay: (j * 50) / 1000 + (masterspeed / 3000 - (masterspeed / 10000)) });


            });
        }



        ////////////////////////////////////////
        // THE SLOTSLIDE - TRANSITION XX.  //
        ///////////////////////////////////////
        if (nexttrans == 23 || nexttrans == 24) { // cube-horizontal - inboxhorizontal


            //SET DEFAULT IMG UNVISIBLE
            nextsh.find('.defaultimg').css({ 'opacity': 0 });
            setTimeout(function() {
                actsh.find('.defaultimg').css({ opacity: 0 });
            }, 100);
            var chix = nextli.css('z-index');
            var chix2 = actli.css('z-index');

            var rot = -90;
            if (direction == 1)
                rot = 90;

            var op = 1;


            if (nexttrans == 23) {
                var torig = "center center -" + opt.width / 2;
                op = 0;

            } else {
                var torig = "center center " + opt.width / 2;

            }


            var opx = 0;

            // ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
            TweenLite.fromTo(nextsh, masterspeed / 2000, { transformPerspective: 600, z: 0, x: 0, rotationY: 0 }, { rotationY: 1, ease: Power1.easeInOut, z: -90 });
            TweenLite.fromTo(nextsh, masterspeed / 2000, { transformPerspective: 600, z: -90, rotationY: 1 }, { rotationY: 0, z: 0, ease: Power1.easeInOut, x: 0, delay: 3 * (masterspeed / 4000) });
            TweenLite.fromTo(actsh, masterspeed / 2000, { transformPerspective: 600, z: 0, x: 0, rotationY: 0 }, { rotationY: 1, x: 0, ease: Power1.easeInOut, z: -90 });
            TweenLite.fromTo(actsh, masterspeed / 2000, { transformPerspective: 600, z: -90, x: 0, rotationY: 1 }, { rotationY: 0, z: 0, x: 0, ease: Power1.easeInOut, delay: 3 * (masterspeed / 4000) });

            nextsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);

                TweenLite.fromTo(ss, masterspeed / 1000, { left: opx, rotationX: opt.rotate, opacity: op, top: 0, scale: 1, transformPerspective: 600, transformOrigin: torig, rotationY: rot }, {
                    left: 0,
                    rotationX: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: (j * 50) / 1000,
                    ease: Power2.easeInOut,
                    onComplete: function() {

                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli);

                    }
                });
                TweenLite.to(ss, 0.1, { opacity: 1, delay: (j * 50) / 1000 + masterspeed / 3000 });

            });

            rot = 90;
            if (direction == 1)
                rot = -90;




            actsh.find('.slotslide').each(function(j) {
                var ss = jQuery(this);
                TweenLite.fromTo(ss, masterspeed / 1000, { left: 0, opacity: 1, rotationX: 0, top: 0, z: 0, scale: 1, transformPerspective: 600, transformOrigin: torig, rotationY: 0 }, {
                    left: opx,
                    opacity: 1,
                    rotationX: opt.rotate,
                    top: 0,
                    scale: 1,
                    rotationY: rot,
                    delay: (j * 50) / 1000,
                    ease: Power2.easeInOut,
                    onComplete: function() {

                        if (j == opt.slots - 1)
                            letItFree(container, opt, nextsh, actsh, nextli, actli)

                    }
                });
                TweenLite.to(ss, 0.1, { opacity: 0, delay: (j * 50) / 1000 + (masterspeed / 1000 - (masterspeed / 10000)) });


            });
        }


        var data = {};
        data.slideIndex = opt.next + 1;
        container.trigger('revolution.slide.onchange', data);
        setTimeout(function() { container.trigger('revolution.slide.onafterswap'); }, masterspeed);
        container.trigger('revolution.slide.onvideostop');
    }


    /******************************
    	-	STOP KEN BURN	-
    ********************************/
    function stopKenBurn(container, opt) {
        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')');
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)');
        }

        opt.lastslide = opt.act;

        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')');


        var actsh = actli.find('.slotholder');
        var nextsh = nextli.find('.slotholder');

        nextsh.find('.defaultimg').each(function() {
            var defimg = jQuery(this);
            if (defimg.data('kenburn') != undefined)
                defimg.data('kenburn').restart();
            TweenLite.killTweensOf(defimg, false);
            TweenLite.set(defimg, { scale: 1, rotationZ: 0 });

            defimg.data('bgposition', nextsh.data('bgposition'));
            defimg.data('currotate', nextsh.data('rotationstart'));
            defimg.data('curscale', nextsh.data('bgfit'));

        });
        /*actsh.find('.defaultimg').each(function() {
        	var defimg = jQuery(this);
        	TweenLite.killTweensOf(defimg,false);
        	TweenLite.set(defimg,{scale:1,rotationZ:0});
        	if (defimg.data('oldbgposition')!=undefined)
        		defimg.data('bgposition',defimg.data('oldbgposition'));

        	defimg.data('currotate',nextsh.data('rotationstart'));
        	defimg.data('curscale',nextsh.data('zoomstart')/100);

        	});*/

    }


    /******************************
    	-	startKenBurn	-
    ********************************/
    function startKenBurn(container, opt) {

        try {
            var actli = container.find('>ul:first-child >li:eq(' + opt.act + ')');
        } catch (e) {
            var actli = container.find('>ul:first-child >li:eq(1)');
        }

        opt.lastslide = opt.act;

        var nextli = container.find('>ul:first-child >li:eq(' + opt.next + ')');


        var actsh = actli.find('.slotholder');
        var nextsh = nextli.find('.slotholder');

        var
            bgps = nextsh.data('bgposition'),
            bgpe = nextsh.data('bgpositionend'),
            zos = nextsh.data('zoomstart') / 100,
            zoe = nextsh.data('zoomend') / 100,
            ros = nextsh.data('rotationstart'),
            roe = nextsh.data('rotationend'),
            bgfs = nextsh.data('bgfit'),
            bgfe = nextsh.data('bgfitend'),
            easeme = nextsh.data('easeme'),
            dur = nextsh.data('duration') / 1000;

        if (bgfs == undefined) bgfs = 100;
        if (bgfe == undefined) bgfe = 100;

        bgfs = calculateKenBurnScales(bgfs, nextsh, opt);
        bgfe = calculateKenBurnScales(bgfe, nextsh, opt);
        bgfe = bgfs;

        if (zos == undefined) zos = 1;
        if (zoe == undefined) zoe = 1;
        if (ros == undefined) ros = 0;
        if (roe == undefined) roe = 0;

        if (zos < 1) zos = 1;
        if (zoe < 1) zoe = 1;

        nextsh.find('.defaultimg').each(function() {
            var defimg = jQuery(this);
            defimg.data(
                'kenburn',
                TweenLite.fromTo(
                    defimg,
                    dur, {
                        transformPerspective: 1200,
                        backgroundSize: bgfs,
                        z: 0,
                        backgroundPosition: bgps,
                        //rotationZ:ros,
                        scale: zos,
                    }, {
                        yoyo: 2,
                        //rotationZ:roe,
                        ease: easeme,
                        backgroundSize: bgfe,
                        backgroundPosition: bgps,
                        scale: zoe,
                        onUpdate: function() {
                            defimg.data('bgposition', defimg.css('backgroundPosition'));
                            if (!isIE(8)) defimg.data('currotate', getRotationDegrees(defimg));
                            if (!isIE(8)) defimg.data('curscale', defimg.css('backgroundSize'));
                        }
                    }
                )
            );
        })
    }


    /***********************************************
    	-	KEN BURN BACKGROUND FIT CALCULATOR	-
    ***********************************************/
    function calculateKenBurnScales(proc, sloth, opt) {
        var ow = sloth.data('owidth');
        var oh = sloth.data('oheight');

        var factor = (opt.container.width() / ow);
        var nheight = oh * factor;

        var hfactor = (nheight / opt.container.height()) * proc;



        return (proc + "% " + hfactor + "%");
    }


    /******************************************************
    	-	CALCULATE CURRENT SCALE AND ROTATION	-
    *******************************************************/

    function getMatrix(obj) {
        var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
        return matrix;
    };

    function parseMatrix(_str) {
        return _str.replace(/^matrix(3d)?\((.*)\)$/, '$2').split(/, /);
    }

    function getScaleDegrees(obj) {
        var matrix = parseMatrix(getMatrix(obj)),
            scale = 1;

        if (matrix[0] !== 'none') {
            var a = matrix[0],
                b = matrix[1],
                d = 10;
            scale = Math.round(Math.sqrt(a * a + b * b) * d) / d;
        }

        return scale;
    };

    function getRotationDegrees(obj) {
        var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
        if (matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        } else { var angle = 0; }
        return (angle < 0) ? angle += 360 : angle;
    }

    /**************************************
    	-	GIVE FREE THE TRANSITIOSN	-
    **************************************/
    function letItFree(container, opt, nextsh, actsh, nextli, actli) {
        removeSlots(container, opt);
        nextsh.find('.defaultimg').css({ 'opacity': 1 });
        if (nextli.index() != actli.index()) actsh.find('.defaultimg').css({ 'opacity': 0 });
        opt.act = opt.next;
        moveSelectedThumb(container);
        if (nextsh.data('kenburns') == "on")
            startKenBurn(container, opt);
    }


    //////////////////////////////////////////
    // CHANG THE YOUTUBE PLAYER STATE HERE //
    ////////////////////////////////////////
    function onPlayerStateChange(event) {

        var embedCode = event.target.getVideoEmbedCode();
        var ytcont = jQuery('#' + embedCode.split('id="')[1].split('"')[0])
        var container = ytcont.closest('.tp-simpleresponsive');
        var player = ytcont.parent().data('player');

        if (event.data == YT.PlayerState.PLAYING) {

            var bt = container.find('.tp-bannertimer');
            var opt = bt.data('opt');
            bt.stop();

            if (ytcont.closest('.tp-caption').data('volume') == "mute")
                player.mute();

            opt.videoplaying = true;
            //konsole.log("VideoPlay set to True due onPlayerStateChange PLAYING");
            opt.videostartednow = 1;

        } else {

            var bt = container.find('.tp-bannertimer');
            var opt = bt.data('opt');

            if (event.data != -1) {
                if (opt.conthover == 0)
                    bt.animate({ 'width': "100%" }, { duration: ((opt.delay - opt.cd) - 100), queue: false, easing: "linear" });
                opt.videoplaying = false;
                opt.videostoppednow = 1;

            }

        }
        if (event.data == 0 && opt.nextslideatend == true)
            opt.container.revnext();


    }



    ////////////////////////
    // VIMEO ADD EVENT /////
    ////////////////////////
    function addEvent(element, eventName, callback) {

        if (element.addEventListener) element.addEventListener(eventName, callback, false);
        else
            element.attachEvent(eventName, callback, false);
    }



    /////////////////////////////////////
    // EVENT HANDLING FOR VIMEO VIDEOS //
    /////////////////////////////////////

    function vimeoready_auto(player_id, autoplay) {

        var froogaloop = $f(player_id);
        var vimcont = jQuery('#' + player_id);
        var container = vimcont.closest('.tp-simpleresponsive');


        froogaloop.addEvent('ready', function(data) {
            if (autoplay) froogaloop.api('play');

            froogaloop.addEvent('play', function(data) {
                var bt = container.find('.tp-bannertimer');
                var opt = bt.data('opt');
                bt.stop();
                opt.videoplaying = true;
                if (vimcont.closest('.tp-caption').data('volume') == "mute")
                    froogaloop.api('setVolume', "0");
                //konsole.log("VideoPlay set to True due vimeoready_auto PLAYING");
            });

            froogaloop.addEvent('finish', function(data) {
                var bt = container.find('.tp-bannertimer');
                var opt = bt.data('opt');
                if (opt.conthover == 0)
                    bt.animate({ 'width': "100%" }, { duration: ((opt.delay - opt.cd) - 100), queue: false, easing: "linear" });
                opt.videoplaying = false;
                //konsole.log("VideoPlay set to False due vimeoready_auto FINISH");
                opt.videostartednow = 1;
                if (opt.nextslideatend == true)
                    opt.container.revnext();

            });

            froogaloop.addEvent('pause', function(data) {
                var bt = container.find('.tp-bannertimer');
                var opt = bt.data('opt');
                if (opt.conthover == 0)
                    bt.animate({ 'width': "100%" }, { duration: ((opt.delay - opt.cd) - 100), queue: false, easing: "linear" });
                opt.videoplaying = false;
                //konsole.log("VideoPlay set to False due vimeoready_auto PAUSE");
                opt.videostoppednow = 1;
            });
        });
    }


    ///////////////////////////////////////
    // EVENT HANDLING FOR VIDEO JS VIDEOS //
    ////////////////////////////////////////
    function html5vidready(myPlayer, player_id) {

        if (player_id == undefined) player_id = jQuery(myPlayer["b"]).attr('id');
        var player_cont = jQuery('#' + player_id);
        var container = player_cont.closest('.tp-simpleresponsive');

        myPlayer.on("play", function() {

            if (player_cont.closest('.tp-caption').data('volume') == "mute")
                myPlayer.volume(0);
            var bt = jQuery('body').find('.tp-bannertimer');
            var opt = bt.data('opt');
            bt.stop();
            try {
                opt.videoplaying = true;
            } catch (e) {}


            //konsole.log("VideoPlay set to True due html5vidready PLAYING");
        });

        myPlayer.on("pause", function() {
            var bt = container.find('.tp-bannertimer');
            var opt = bt.data('opt');
            if (opt.conthover == 0)
                bt.animate({ 'width': "100%" }, { duration: ((opt.delay - opt.cd) - 100), queue: false, easing: "linear" });
            opt.videoplaying = false;
            //konsole.log("VideoPlay set to False due html5vidready pause");
            opt.videostoppednow = 1;
        });

        myPlayer.on("ended", function() {
            var bt = container.find('.tp-bannertimer');
            var opt = bt.data('opt');
            if (opt.conthover == 0)
                bt.animate({ 'width': "100%" }, { duration: ((opt.delay - opt.cd) - 100), queue: false, easing: "linear" });
            opt.videoplaying = false;
            //konsole.log("VideoPlay set to False due html5vidready pause");
            opt.videostoppednow = 1;
            if (opt.nextslideatend == true)
                opt.container.revnext();
        });


        myPlayer.on('loadedmetadata', function(data) {



            var videoWidth = 0;
            var videoHeight = 0;

            for (var prop in this) {
                try {
                    if (this[prop].hasOwnProperty('videoWidth'))
                        videoWidth = this[prop].videoWidth;

                    if (this[prop].hasOwnProperty('videoHeight'))
                        videoHeight = this[prop].videoHeight;
                } catch (e) {}
            }


            var mediaAspect = videoWidth / videoHeight;




            if (player_cont.data('mediaAspect') == undefined) player_cont.data('mediaAspect', mediaAspect);
            if (player_cont.closest('.tp-caption').data('forcecover') == 1)
                updateHTML5Size(player_cont, container);

        });

    }
    /////////////////////////////////////
    // RESIZE HTML5VIDEO FOR FULLSCREEN//
    /////////////////////////////////////
    function updateHTML5Size(pc, container) {
        var windowW = container.width();
        var windowH = container.height();
        var mediaAspect = pc.data('mediaAspect');

        var windowAspect = windowW / windowH;
        pc.parent().find('.vjs-poster').css({ width: "100%", height: "100%" });
        if (windowAspect < mediaAspect) {
            // taller
            pc
                .width(windowH * mediaAspect)
                .height(windowH);
            pc
                .css('top', 0)
                .css('left', -(windowH * mediaAspect - windowW) / 2)
                .css('height', windowH);
            pc.find('.vjs-tech').css('width', windowH * mediaAspect);

        } else {
            // wider
            pc
                .width(windowW)
                .height(windowW / mediaAspect);
            pc
                .css('top', -(windowW / mediaAspect - windowH) / 2)
                .css('left', 0)
                .css('height', windowW / mediaAspect);
            pc.find('.vjs-tech').css('width', '100%');

        }

    }





    ////////////////////////
    // SHOW THE CAPTION  //
    ///////////////////////
    function animateTheCaptions(nextli, opt, recalled) {

        var offsetx = 0;
        var offsety = 0;

        nextli.find('.tp-caption').each(function(i) {


            offsetx = opt.width / 2 - (opt.startwidth * opt.bw) / 2;



            var xbw = opt.bw;
            var xbh = opt.bh;


            if (opt.fullScreen == "on")
                offsety = opt.height / 2 - (opt.startheight * opt.bh) / 2;

            if (opt.autoHeight == "on")
                offsety = opt.container.height() / 2 - (opt.startheight * opt.bh) / 2;;

            if (offsety < 0) offsety = 0;

            var nextcaption = jQuery(this); //nextli.find('.tp-caption:eq('+i+')');


            var handlecaption = 0;

            // HIDE CAPTION IF RESOLUTION IS TOO LOW
            if (opt.width < opt.hideCaptionAtLimit && nextcaption.data('captionhidden') == "on") {
                nextcaption.addClass("tp-hidden-caption")
                handlecaption = 1;
            } else {
                if (opt.width < opt.hideAllCaptionAtLimit || opt.width < opt.hideAllCaptionAtLilmit) {
                    nextcaption.addClass("tp-hidden-caption")
                    handlecaption = 1;
                } else {
                    nextcaption.removeClass("tp-hidden-caption")
                }
            }

            if (handlecaption == 0) {

                // ADD A CLICK LISTENER TO THE CAPTION
                if (nextcaption.data('linktoslide') != undefined && !nextcaption.hasClass("hasclicklistener")) {
                    nextcaption.addClass("hasclicklistener")
                    nextcaption.css({ 'cursor': 'pointer' });
                    if (nextcaption.data('linktoslide') != "no") {
                        nextcaption.click(function() {
                            var nextcaption = jQuery(this);
                            var dir = nextcaption.data('linktoslide');
                            if (dir != "next" && dir != "prev") {
                                opt.container.data('showus', dir);
                                opt.container.parent().find('.tp-rightarrow').click();
                            } else
                            if (dir == "next")
                                opt.container.parent().find('.tp-rightarrow').click();
                            else
                            if (dir == "prev")
                                opt.container.parent().find('.tp-leftarrow').click();
                        });
                    }
                } // END OF CLICK LISTENER


                if (offsetx < 0) offsetx = 0;


                // YOUTUBE AND VIMEO LISTENRES INITIALISATION

                var frameID = "iframe" + Math.round(Math.random() * 1000 + 1);

                if (nextcaption.find('iframe').length > 0 || nextcaption.find('video').length > 0) {

                    if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime') == "true") {
                        nextcaption.data('autoplay', true);
                    }

                    nextcaption.find('iframe').each(function() {
                        var ifr = jQuery(this);


                        // START YOUTUBE HANDLING
                        opt.nextslideatend = nextcaption.data('nextslideatend');
                        if (nextcaption.data('thumbimage') != undefined && nextcaption.data('thumbimage').length > 2 && nextcaption.data('autoplay') != true && !recalled) {
                            nextcaption.find('.tp-thumb-image').remove();
                            nextcaption.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + nextcaption.data('thumbimage') + '); background-size:cover"></div>');
                        }

                        if (ifr.attr('src').toLowerCase().indexOf('youtube') >= 0) {

                            if (!ifr.hasClass("HasListener")) {
                                try {
                                    ifr.attr('id', frameID);

                                    var player;
                                    if (nextcaption.data('autoplay') == true)
                                        player = new YT.Player(frameID, {
                                            events: {
                                                "onStateChange": onPlayerStateChange,
                                                'onReady': function(event) { event.target.playVideo() }
                                            }
                                        });
                                    else
                                        player = new YT.Player(frameID, {
                                            events: {
                                                "onStateChange": onPlayerStateChange
                                            }
                                        });
                                    ifr.addClass("HasListener");

                                    nextcaption.data('player', player);

                                } catch (e) {}
                            } else {
                                if (nextcaption.data('autoplay') == true) {
                                    var player = nextcaption.data('player');
                                    nextcaption.data('timerplay', setTimeout(function() {
                                        if (nextcaption.data('forcerewind') == "on")
                                            player.seekTo(0);
                                        player.playVideo();
                                    }, nextcaption.data('start')));
                                }
                            } // END YOUTUBE HANDLING

                            // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
                            nextcaption.find('.tp-thumb-image').click(function() {
                                TweenLite.to(jQuery(this), 0.3, {
                                    opacity: 0,
                                    ease: Power3.easeInOut,
                                    onComplete: function() {
                                        nextcaption.find('.tp-thumb-image').remove();
                                    }
                                })
                                var player = nextcaption.data('player');
                                player.playVideo();
                            })
                        } else {
                            // START VIMEO HANDLING
                            if (ifr.attr('src').toLowerCase().indexOf('vimeo') >= 0) {

                                if (!ifr.hasClass("HasListener")) {
                                    ifr.addClass("HasListener");
                                    ifr.attr('id', frameID);
                                    var isrc = ifr.attr('src');
                                    var queryParameters = {},
                                        queryString = isrc,
                                        re = /([^&=]+)=([^&]*)/g,
                                        m;
                                    // Creates a map with the query string parameters
                                    while (m = re.exec(queryString)) {
                                        queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                                    }

                                    if (queryParameters['player_id'] != undefined)
                                        isrc = isrc.replace(queryParameters['player_id'], frameID);
                                    else
                                        isrc = isrc + "&player_id=" + frameID;

                                    try { isrc = isrc.replace('api=0', 'api=1'); } catch (e) {}

                                    isrc = isrc + "&api=1";

                                    ifr.attr('src', isrc);
                                    var player = nextcaption.find('iframe')[0];

                                    $f(player).addEvent('ready', function() { vimeoready_auto(frameID, nextcaption.data('autoplay')) });

                                } else {
                                    if (nextcaption.data('autoplay') == true) {

                                        var ifr = nextcaption.find('iframe');
                                        var id = ifr.attr('id');
                                        var froogaloop = $f(id);
                                        nextcaption.data('timerplay', setTimeout(function() {
                                            if (nextcaption.data('forcerewind') == "on")
                                                froogaloop.api("seekTo", 0);
                                            froogaloop.api("play");
                                        }, nextcaption.data('start')));
                                    }
                                } // END HAS LISTENER HANDLING

                                // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
                                nextcaption.find('.tp-thumb-image').click(function() {
                                    TweenLite.to(jQuery(this), 0.3, {
                                        opacity: 0,
                                        ease: Power3.easeInOut,
                                        onComplete: function() {
                                            nextcaption.find('.tp-thumb-image').remove();
                                        }
                                    })
                                    var ifr = nextcaption.find('iframe');
                                    var id = ifr.attr('id');
                                    var froogaloop = $f(id);
                                    froogaloop.api("play");
                                })


                            } // END OF VIMEO HANDLING
                        } // END OF CHOOSE BETWEEN YOUTUBE AND VIMEO
                    }); // END OF LOOP THROUGH IFRAMES

                    // START OF VIDEO JS
                    if (nextcaption.find('video').length > 0) {


                        nextcaption.find('video').each(function(i) {
                            var html5vid = jQuery(this).parent();

                            if (nextcaption.data('dottedoverlay') != "none" && nextcaption.data('dottedoverlay') != undefined)
                                if (nextcaption.find('.tp-dottedoverlay').length != 1)
                                    html5vid.append('<div class="tp-dottedoverlay ' + nextcaption.data('dottedoverlay') + '"></div>');

                            var mediaaspect = 16 / 9;
                            if (nextcaption.data('aspectratio') == "4:3") mediaaspect = 4 / 3;
                            html5vid.data('mediaAspect', mediaaspect);



                            if (html5vid.closest('.tp-caption').data('forcecover') == 1)
                                updateHTML5Size(html5vid, opt.container);



                            if (html5vid.hasClass("video-js")) {
                                opt.nextslideatend = nextcaption.data('nextslideatend');
                                if (!html5vid.hasClass("HasListener")) {
                                    html5vid.addClass("HasListener");
                                    var videoID = "videoid_" + Math.round(Math.random() * 1000 + 1);
                                    html5vid.attr('id', videoID);

                                    videojs(videoID).ready(function() {

                                        html5vidready(this, videoID)

                                    });

                                } else {
                                    videoID = html5vid.attr('id');
                                }


                                html5vid.find('.vjs-poster').css({ display: "block" });

                                if (nextcaption.data('autoplay') == true) {

                                    var bt = jQuery('body').find('#' + opt.container.attr('id')).find('.tp-bannertimer');
                                    setTimeout(function() {
                                        bt.stop();
                                        opt.videoplaying = true;
                                    }, 200);

                                    //konsole.log("VideoPlay set to True due HTML5 VIDEO 1st/2nd load AutoPlay");


                                    videojs(videoID).ready(function() {
                                        var myPlayer = this;
                                        try {
                                            if (nextcaption.data('forcerewind') == "on")
                                                myPlayer.currentTime(0);
                                        } catch (e) {

                                        }

                                        html5vid.data('timerplay', setTimeout(function() {
                                            if (nextcaption.data('forcerewind') == "on")
                                                myPlayer.currentTime(0);

                                            if (html5vid.closest('.tp-caption').data('volume') == "mute")
                                                myPlayer.volume(0);

                                            setTimeout(function() {
                                                myPlayer.play(0);
                                                html5vid.find('.vjs-poster').css({ display: "none" });
                                            }, 50);
                                        }, 10 + nextcaption.data('start')));
                                    });
                                }


                                if (html5vid.data('ww') == undefined) html5vid.data('ww', html5vid.width());
                                if (html5vid.data('hh') == undefined) html5vid.data('hh', html5vid.height());

                                videojs(videoID).ready(function() {
                                    if (!nextcaption.hasClass("fullscreenvideo")) {
                                        var myPlayer = videojs(videoID);

                                        try {
                                            myPlayer.width(html5vid.data('ww') * opt.bw);
                                            myPlayer.height(html5vid.data('hh') * opt.bh);
                                        } catch (e) {}
                                    }
                                });



                                if (html5vid.closest('.tp-caption').data('forcecover') == 1) {
                                    updateHTML5Size(html5vid, opt.container);
                                    html5vid.addClass("fullcoveredvideo");
                                }



                            }

                        });
                    } // END OF VIDEO JS FUNCTIONS

                    // IF AUTOPLAY IS ON, WE NEED SOME STOP FUNCTION ON
                    if (nextcaption.data('autoplay') == true) {
                        var bt = jQuery('body').find('#' + opt.container.attr('id')).find('.tp-bannertimer');

                        setTimeout(function() {
                            bt.stop();
                            opt.videoplaying = true;

                        }, 200)
                        opt.videoplaying = true;

                        if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime') == "true") {
                            nextcaption.data('autoplay', false);
                            nextcaption.data('autoplayonlyfirsttime', false);
                        }
                    }
                }




                // NEW ENGINE
                //if (nextcaption.hasClass("randomrotate") && (opt.ie || opt.ie9)) nextcaption.removeClass("randomrotate").addClass("sfb");
                //	nextcaption.removeClass('noFilterClass');



                var imw = 0;
                var imh = 0;

                if (nextcaption.find('img').length > 0) {
                    var im = nextcaption.find('img');
                    if (im.data('ww') == undefined) im.data('ww', im.width());
                    if (im.data('hh') == undefined) im.data('hh', im.height());

                    var ww = im.data('ww');
                    var hh = im.data('hh');


                    im.width(ww * opt.bw);
                    im.height(hh * opt.bh);
                    imw = im.width();
                    imh = im.height();
                } else {
                    if (nextcaption.find('iframe').length > 0 || nextcaption.find('.video-js').length > 0) {

                        var im = nextcaption.find('iframe');
                        im.css({ display: "block" });
                        if (nextcaption.data('ww') == undefined) {
                            nextcaption.data('ww', im.width());
                        }
                        if (nextcaption.data('hh') == undefined) nextcaption.data('hh', im.height());

                        var ww = nextcaption.data('ww');
                        var hh = nextcaption.data('hh');

                        var nc = nextcaption;
                        if (nc.data('fsize') == undefined) nc.data('fsize', parseInt(nc.css('font-size'), 0) || 0);
                        if (nc.data('pt') == undefined) nc.data('pt', parseInt(nc.css('paddingTop'), 0) || 0);
                        if (nc.data('pb') == undefined) nc.data('pb', parseInt(nc.css('paddingBottom'), 0) || 0);
                        if (nc.data('pl') == undefined) nc.data('pl', parseInt(nc.css('paddingLeft'), 0) || 0);
                        if (nc.data('pr') == undefined) nc.data('pr', parseInt(nc.css('paddingRight'), 0) || 0);

                        if (nc.data('mt') == undefined) nc.data('mt', parseInt(nc.css('marginTop'), 0) || 0);
                        if (nc.data('mb') == undefined) nc.data('mb', parseInt(nc.css('marginBottom'), 0) || 0);
                        if (nc.data('ml') == undefined) nc.data('ml', parseInt(nc.css('marginLeft'), 0) || 0);
                        if (nc.data('mr') == undefined) nc.data('mr', parseInt(nc.css('marginRight'), 0) || 0);

                        if (nc.data('bt') == undefined) nc.data('bt', parseInt(nc.css('borderTop'), 0) || 0);
                        if (nc.data('bb') == undefined) nc.data('bb', parseInt(nc.css('borderBottom'), 0) || 0);
                        if (nc.data('bl') == undefined) nc.data('bl', parseInt(nc.css('borderLeft'), 0) || 0);
                        if (nc.data('br') == undefined) nc.data('br', parseInt(nc.css('borderRight'), 0) || 0);

                        //if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);

                        var fvwidth = opt.width;
                        var fvheight = opt.height;
                        if (fvwidth > opt.startwidth) fvwidth = opt.startwidth;
                        if (fvheight > opt.startheight) fvheight = opt.startheight;



                        if (!nextcaption.hasClass('fullscreenvideo'))
                            nextcaption.css({

                                'font-size': (nc.data('fsize') * opt.bw) + "px",

                                'padding-top': (nc.data('pt') * opt.bh) + "px",
                                'padding-bottom': (nc.data('pb') * opt.bh) + "px",
                                'padding-left': (nc.data('pl') * opt.bw) + "px",
                                'padding-right': (nc.data('pr') * opt.bw) + "px",

                                'margin-top': (nc.data('mt') * opt.bh) + "px",
                                'margin-bottom': (nc.data('mb') * opt.bh) + "px",
                                'margin-left': (nc.data('ml') * opt.bw) + "px",
                                'margin-right': (nc.data('mr') * opt.bw) + "px",

                                'border-top': (nc.data('bt') * opt.bh) + "px",
                                'border-bottom': (nc.data('bb') * opt.bh) + "px",
                                'border-left': (nc.data('bl') * opt.bw) + "px",
                                'border-right': (nc.data('br') * opt.bw) + "px",

                                //'line-height': (nc.data('lh') * opt.bh) + "px",
                                'height': (hh * opt.bh) + 'px',
                                'white-space': "nowrap"
                            });
                        else {
                            offsetx = 0;
                            offsety = 0;
                            nextcaption.data('x', 0)
                            nextcaption.data('y', 0)

                            var ovhh = opt.height
                            if (opt.autoHeight == "on")
                                ovhh = opt.container.height()
                            nextcaption.css({

                                'width': opt.width,
                                'height': ovhh
                            });
                        }


                        im.width(ww * opt.bw);
                        im.height(hh * opt.bh);
                        imw = im.width();
                        imh = im.height();
                    } else {


                        nextcaption.find('.tp-resizeme, .tp-resizeme *').each(function() {

                            calcCaptionResponsive(jQuery(this), opt);
                        });


                        if (nextcaption.hasClass("tp-resizeme")) {
                            nextcaption.find('*').each(function() {
                                calcCaptionResponsive(jQuery(this), opt, "first");
                            });
                            calcCaptionResponsive(nextcaption, opt, "first");
                            nextcaption.find('*').each(function() {
                                calcCaptionResponsive(jQuery(this), opt);
                            });
                            calcCaptionResponsive(nextcaption, opt);
                        }

                        imh = nextcaption.outerHeight(true);
                        imw = nextcaption.outerWidth(true);

                        // NEXTCAPTION FRONTCORNER CHANGES
                        var ncch = nextcaption.outerHeight();
                        var bgcol = nextcaption.css('backgroundColor');
                        nextcaption.find('.frontcorner').css({
                            'borderWidth': ncch + "px",
                            'left': (0 - ncch) + 'px',
                            'borderRight': '0px solid transparent',
                            'borderTopColor': bgcol
                        });

                        nextcaption.find('.frontcornertop').css({
                            'borderWidth': ncch + "px",
                            'left': (0 - ncch) + 'px',
                            'borderRight': '0px solid transparent',
                            'borderBottomColor': bgcol
                        });

                        // NEXTCAPTION BACKCORNER CHANGES
                        nextcaption.find('.backcorner').css({
                            'borderWidth': ncch + "px",
                            'right': (0 - ncch) + 'px',
                            'borderLeft': '0px solid transparent',
                            'borderBottomColor': bgcol
                        });

                        // NEXTCAPTION BACKCORNER CHANGES
                        nextcaption.find('.backcornertop').css({
                            'borderWidth': ncch + "px",
                            'right': (0 - ncch) + 'px',
                            'borderLeft': '0px solid transparent',
                            'borderTopColor': bgcol
                        });

                    }


                }

                if (opt.fullScreenAlignForce == "on") {
                    xbw = 1;
                    xbh = 1;
                    offsetx = 0;
                    offsety = 0;
                }

                if (nextcaption.data('voffset') == undefined) nextcaption.data('voffset', 0);
                if (nextcaption.data('hoffset') == undefined) nextcaption.data('hoffset', 0);

                var vofs = nextcaption.data('voffset') * xbw;
                var hofs = nextcaption.data('hoffset') * xbw;

                var crw = opt.startwidth * xbw;
                var crh = opt.startheight * xbw;

                if (opt.fullScreenAlignForce == "on") {
                    crw = opt.container.width();
                    crh = opt.container.height();

                }



                // CENTER THE CAPTION HORIZONTALLY
                if (nextcaption.data('x') == "center" || nextcaption.data('xcenter') == 'center') {
                    nextcaption.data('xcenter', 'center');
                    nextcaption.data('x', (crw / 2 - nextcaption.outerWidth(true) / 2) / xbw + hofs);

                }

                // ALIGN LEFT THE CAPTION HORIZONTALLY
                if (nextcaption.data('x') == "left" || nextcaption.data('xleft') == 'left') {
                    nextcaption.data('xleft', 'left');
                    nextcaption.data('x', (0) / xbw + hofs);

                }

                // ALIGN RIGHT THE CAPTION HORIZONTALLY
                if (nextcaption.data('x') == "right" || nextcaption.data('xright') == 'right') {
                    nextcaption.data('xright', 'right');
                    nextcaption.data('x', ((crw - nextcaption.outerWidth(true)) + hofs) / xbw);
                    //konsole.log("crw:"+crw+"  width:"+nextcaption.outerWidth(true)+"  xbw:"+xbw);
                    //konsole.log("x-pos:"+nextcaption.data('x'))
                }


                // CENTER THE CAPTION VERTICALLY
                if (nextcaption.data('y') == "center" || nextcaption.data('ycenter') == 'center') {
                    nextcaption.data('ycenter', 'center');
                    nextcaption.data('y', (crh / 2 - nextcaption.outerHeight(true) / 2) / xbh + vofs);

                }

                // ALIGN TOP THE CAPTION VERTICALLY
                if (nextcaption.data('y') == "top" || nextcaption.data('ytop') == 'top') {
                    nextcaption.data('ytop', 'top');
                    nextcaption.data('y', (0) / opt.bh + vofs);

                }

                // ALIGN BOTTOM THE CAPTION VERTICALLY
                if (nextcaption.data('y') == "bottom" || nextcaption.data('ybottom') == 'bottom') {
                    nextcaption.data('ybottom', 'bottom');
                    nextcaption.data('y', ((crh - nextcaption.outerHeight(true)) + vofs) / xbw);
                }



                // THE TRANSITIONS OF CAPTIONS
                // MDELAY AND MSPEED
                if (nextcaption.data('start') == undefined) nextcaption.data('start', 1000);



                var easedata = nextcaption.data('easing');
                if (easedata == undefined) easedata = "Power1.easeOut";


                var mdelay = nextcaption.data('start') / 1000;
                var mspeed = nextcaption.data('speed') / 1000;
                var d_x = nextcaption.data('x');
                var d_y = nextcaption.data('y');
                if (nextcaption.attr("changePostion") == "1") {
                    d_x = nextcaption.attr('dataleft');
                    d_y = nextcaption.attr('datatop');
                }


                var calcx = (xbw * d_x + offsetx);

                var calcy = (opt.bh * d_y + offsety);




                if (opt.fullScreenAlignForce == "on")
                    calcy = nextcaption.data('y') + offsety;

                TweenLite.killTweensOf(nextcaption, false);
                clearTimeout(nextcaption.data('reversetimer'));


                var tlop = 0,
                    tlxx = calcx,
                    tlyy = calcy,
                    tlzz = 2,
                    tlsc = 1,
                    tlro = 0,
                    sc = 1,
                    scX = 1,
                    scY = 1,
                    ro = 0,
                    roX = 0,
                    roY = 0,
                    roZ = 0,
                    skwX = 0,
                    skwY = 0,
                    opa = 0,
                    trorig = "center,center",
                    tper = 300,
                    repeatV = 0,
                    yoyoV = false,
                    repeatdelayV = 0;

                if (nextcaption.data('repeat') != undefined) repeatV = nextcaption.data('repeat');
                if (nextcaption.data('yoyo') != undefined) yoyoV = nextcaption.data('yoyo');
                if (nextcaption.data('repeatdelay') != undefined) repeatdelayV = nextcaption.data('repeatdelay');


                if (nextcaption.hasClass("customin")) {

                    var customarray = nextcaption.data('customin').split(';');
                    jQuery.each(customarray, function(index, param) {

                        param = param.split(":")

                        var w = param[0],
                            v = param[1];


                        if (w == "rotationX") roX = parseInt(v, 0);
                        if (w == "rotationY") roY = parseInt(v, 0);
                        if (w == "rotationZ") roZ = parseInt(v, 0);
                        if (w == "scaleX") scX = parseFloat(v);
                        if (w == "scaleY") scY = parseFloat(v);
                        if (w == "opacity") opa = parseFloat(v);
                        if (w == "skewX") skwX = parseInt(v, 0);
                        if (w == "skewY") skwY = parseInt(v, 0);
                        if (w == "x") tlxx = calcx + parseInt(v, 0);
                        if (w == "y") tlyy = calcy + parseInt(v, 0);
                        if (w == "z") tlzz = parseInt(v, 0);
                        if (w == "transformOrigin") trorig = v.toString();
                        if (w == "transformPerspective") tper = parseInt(v, 0);


                    })
                }



                if (nextcaption.hasClass("randomrotate")) {

                    sc = Math.random() * 3 + 1;
                    ro = Math.round(Math.random() * 200 - 100);
                    tlxx = calcx + Math.round(Math.random() * 200 - 100);
                    tlyy = calcy + Math.round(Math.random() * 200 - 100);
                }

                if (nextcaption.hasClass('lfr') || nextcaption.hasClass('skewfromright'))
                    tlxx = 15 + opt.width;



                if (nextcaption.hasClass('lfl') || nextcaption.hasClass('skewfromleft'))
                    tlxx = -15 - imw;

                if (nextcaption.hasClass('sfl') | nextcaption.hasClass('skewfromleftshort'))
                    tlxx = calcx - 50;

                if (nextcaption.hasClass('sfr') | nextcaption.hasClass('skewfromrightshort'))
                    tlxx = calcx + 50;


                if (nextcaption.hasClass('lft'))
                    tlyy = -25 - imh;


                if (nextcaption.hasClass('lfb'))
                    tlyy = 25 + opt.height;

                if (nextcaption.hasClass('sft'))
                    tlyy = calcy - 50;

                if (nextcaption.hasClass('sfb'))
                    tlyy = calcy + 50;

                if (nextcaption.hasClass('skewfromright') || nextcaption.hasClass('skewfromrightshort'))
                    skwX = -85

                if (nextcaption.hasClass('skewfromleft') || nextcaption.hasClass('skewfromleftshort'))
                    skwX = 85

                if (get_browser().toLowerCase() == "safari") {
                    roX = 0;
                    roY = 0;
                }
                tlxx = Math.round(tlxx);
                tlyy = Math.round(tlyy);
                calcx = Math.round(calcx);
                calcy = Math.round(calcy);


                // CHANGE to TweenMax.  if Yoyo and Repeat is used. Dont forget to laod the Right Tools for it !!
                if (nextcaption.hasClass("customin")) {

                    nextcaption.data('anim', TweenLite.fromTo(nextcaption, mspeed, {
                            scaleX: scX,
                            scaleY: scY,
                            rotationX: roX,
                            rotationY: roY,
                            rotationZ: roZ,
                            x: 0,
                            y: 0,
                            left: tlxx,
                            top: tlyy,
                            z: tlzz,
                            opacity: opa,
                            transformPerspective: tper,
                            transformOrigin: trorig,
                            visibility: 'hidden'
                        },

                        {
                            left: calcx,
                            top: calcy,
                            scaleX: 1,
                            scaleY: 1,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            skewX: 0,
                            skewY: 0,
                            z: 0,
                            x: 0,
                            y: 0,
                            visibility: 'visible',
                            opacity: 1,
                            delay: mdelay,
                            ease: easedata,
                            overwrite: "all",

                            /*yoyo:yoyoV,
                            repeat:repeatV,
                            repeatDelay:repeatdelayV*/
                        }));


                } else {
                    nextcaption.data('anim', TweenLite.fromTo(nextcaption, mspeed, {
                            scale: sc,
                            rotationX: 0,
                            rotationY: 0,
                            skewY: 0,
                            rotation: ro,
                            left: tlxx + 'px',
                            top: tlyy + "px",
                            opacity: 0,
                            z: 0,
                            x: 0,
                            y: 0,
                            skewX: skwX,
                            transformPerspective: 600,
                            visibility: 'visible',

                        },

                        {
                            left: calcx + 'px',
                            top: calcy + "px",
                            scale: 1,
                            skewX: 0,
                            rotation: 0,
                            z: 0,
                            visibility: 'visible',
                            opacity: 1,
                            delay: mdelay,
                            ease: easedata,
                            overwrite: "all",
                            yoyo: yoyoV,
                            repeat: repeatV,
                            repeatDelay: repeatdelayV,


                        }));
                }





                nextcaption.data('killall', setTimeout(function() {
                    nextcaption.css({ transform: "none", '-moz-transform': 'none', '-webkit-transform': 'none' });
                }, (mspeed * 1000) + (mdelay * 1000) + 20))


                nextcaption.data('timer', setTimeout(function() {
                    if (nextcaption.hasClass("fullscreenvideo"))
                        nextcaption.css({ 'display': 'block' });

                }, nextcaption.data('start')));


                // IF THERE IS ANY EXIT ANIM DEFINED
                if (nextcaption.data('end') != undefined)
                    endMoveCaption(nextcaption, opt, nextcaption.data('end') / 1000);


            }

        })

        var bt = jQuery('body').find('#' + opt.container.attr('id')).find('.tp-bannertimer');
        bt.data('opt', opt);
    }


    function get_browser() {
        var N = navigator.appName,
            ua = navigator.userAgent,
            tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
        return M[0];
    }

    function get_browser_version() {
        var N = navigator.appName,
            ua = navigator.userAgent,
            tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
        return M[1];
    }

    /////////////////////////////////////////////////////////////////
    //	-	CALCULATE THE RESPONSIVE SIZES OF THE CAPTIONS	-	  //
    /////////////////////////////////////////////////////////////////
    function calcCaptionResponsive(nc, opt, flag) {
        if (nc.data('fsize') == undefined) nc.data('fsize', parseInt(nc.css('font-size'), 0) || 0);
        if (nc.data('pt') == undefined) nc.data('pt', parseInt(nc.css('paddingTop'), 0) || 0);
        if (nc.data('pb') == undefined) nc.data('pb', parseInt(nc.css('paddingBottom'), 0) || 0);
        if (nc.data('pl') == undefined) nc.data('pl', parseInt(nc.css('paddingLeft'), 0) || 0);
        if (nc.data('pr') == undefined) nc.data('pr', parseInt(nc.css('paddingRight'), 0) || 0);

        if (nc.data('mt') == undefined) nc.data('mt', parseInt(nc.css('marginTop'), 0) || 0);
        if (nc.data('mb') == undefined) nc.data('mb', parseInt(nc.css('marginBottom'), 0) || 0);
        if (nc.data('ml') == undefined) nc.data('ml', parseInt(nc.css('marginLeft'), 0) || 0);
        if (nc.data('mr') == undefined) nc.data('mr', parseInt(nc.css('marginRight'), 0) || 0);

        if (nc.data('bt') == undefined) nc.data('bt', parseInt(nc.css('borderTopWidth'), 0) || 0);
        if (nc.data('bb') == undefined) nc.data('bb', parseInt(nc.css('borderBottomWidth'), 0) || 0);
        if (nc.data('bl') == undefined) nc.data('bl', parseInt(nc.css('borderLeftWidth'), 0) || 0);
        if (nc.data('br') == undefined) nc.data('br', parseInt(nc.css('borderRightWidth'), 0) || 0);

        //if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);
        if (nc.data('minwidth') == undefined) nc.data('minwidth', parseInt(nc.css('minWidth'), 0) || 0);
        if (nc.data('minheight') == undefined) nc.data('minheight', parseInt(nc.css('minHeight'), 0) || 0);
        if (nc.data('maxwidth') == undefined) nc.data('maxwidth', parseInt(nc.css('maxWidth'), 0) || "none");
        if (nc.data('maxheight') == undefined) nc.data('maxheight', parseInt(nc.css('maxHeight'), 0) || "none");

        if (nc.data('wan') == undefined) nc.data('wan', nc.css("-webkit-transition"));
        if (nc.data('moan') == undefined) nc.data('moan', nc.css("-moz-animation-transition"));
        if (nc.data('man') == undefined) nc.data('man', nc.css("-ms-animation-transition"));
        if (nc.data('ani') == undefined) nc.data('ani', nc.css("transition"));

        if (flag == "first") {
            return;
        }

        nc.css("-webkit-transition", "none");
        nc.css("-moz-transition", "none");
        nc.css("-ms-transition", "none");
        nc.css("transition", "none");


        TweenLite.set(nc, {
            fontSize: Math.round((nc.data('fsize') * opt.bw)) + "px",

            paddingTop: Math.round((nc.data('pt') * opt.bh)) + "px",
            paddingBottom: Math.round((nc.data('pb') * opt.bh)) + "px",
            paddingLeft: Math.round((nc.data('pl') * opt.bw)) + "px",
            paddingRight: Math.round((nc.data('pr') * opt.bw)) + "px",

            marginTop: (nc.data('mt') * opt.bh) + "px",
            marginBottom: (nc.data('mb') * opt.bh) + "px",
            marginLeft: (nc.data('ml') * opt.bw) + "px",
            marginRight: (nc.data('mr') * opt.bw) + "px",

            borderTopWidth: Math.round((nc.data('bt') * opt.bh)) + "px",
            borderBottomWidth: Math.round((nc.data('bb') * opt.bh)) + "px",
            borderLeftWidth: Math.round((nc.data('bl') * opt.bw)) + "px",
            borderRightWidth: Math.round((nc.data('br') * opt.bw)) + "px",

            //lineHeight: Math.round((nc.data('lh') * opt.bh)) + "px",
            whiteSpace: "nowrap",
            minWidth: (nc.data('minwidth') * opt.bw) + "px",
            minHeight: (nc.data('minheight') * opt.bh) + "px"
        });
        setTimeout(function() {
            nc.css("-webkit-transition", nc.data('wan'));
            nc.css("-moz-transition", nc.data('moan'));
            nc.css("-ms-transition", nc.data('man'));
            nc.css("transition", nc.data('ani'));

        }, 30);

        //konsole.log(nc.data('maxwidth')+"  "+nc.data('maxheight'));
        if (nc.data('maxheight') != 'none')
            nc.css({ 'maxHeight': (nc.data('maxheight') * opt.bh) + "px" });


        if (nc.data('maxwidth') != 'none')
            nc.css({ 'maxWidth': (nc.data('maxwidth') * opt.bw) + "px" });
    }


    //////////////////////////
    //	REMOVE THE CAPTIONS //
    /////////////////////////
    function removeTheCaptions(actli, opt) {


        actli.find('.tp-caption').each(function(i) {
            var nextcaption = jQuery(this); //actli.find('.tp-caption:eq('+i+')');

            if (nextcaption.find('iframe').length > 0) {
                // VIMEO VIDEO PAUSE
                try {
                    var ifr = nextcaption.find('iframe');
                    var id = ifr.attr('id');
                    var froogaloop = $f(id);
                    froogaloop.api("pause");
                    clearTimeout(nextcaption.data('timerplay'));
                } catch (e) {}
                //YOU TUBE PAUSE
                try {
                    var player = nextcaption.data('player');
                    player.stopVideo();
                    clearTimeout(nextcaption.data('timerplay'));
                } catch (e) {}
            }

            // IF HTML5 VIDEO IS EMBEDED
            if (nextcaption.find('video').length > 0) {
                try {
                    nextcaption.find('video').each(function(i) {
                        var html5vid = jQuery(this).parent();
                        var videoID = html5vid.attr('id');
                        clearTimeout(html5vid.data('timerplay'));
                        videojs(videoID).ready(function() {
                            var myPlayer = this;
                            myPlayer.pause();
                        });
                    })
                } catch (e) {}
            } // END OF VIDEO JS FUNCTIONS
            try {
                endMoveCaption(nextcaption, opt, 0);
            } catch (e) {}



        });
    }

    //////////////////////////
    //	MOVE OUT THE CAPTIONS //
    /////////////////////////
    function endMoveCaption(nextcaption, opt, mdelay) {


        var mspeed = nextcaption.data('endspeed');
        if (mspeed == undefined) mspeed = nextcaption.data('speed');

        mspeed = mspeed / 1000;

        var easedata = nextcaption.data('endeasing');
        if (easedata == undefined) easedata = Power1.easeInOut;



        if (nextcaption.hasClass('ltr') ||
            nextcaption.hasClass('ltl') ||
            nextcaption.hasClass('str') ||
            nextcaption.hasClass('stl') ||
            nextcaption.hasClass('ltt') ||
            nextcaption.hasClass('ltb') ||
            nextcaption.hasClass('stt') ||
            nextcaption.hasClass('stb') ||
            nextcaption.hasClass('skewtoright') ||
            nextcaption.hasClass('skewtorightshort') ||
            nextcaption.hasClass('skewtoleft') ||
            nextcaption.hasClass('skewtoleftshort')) {

            skwX = 0;

            if (nextcaption.hasClass('skewtoright') || nextcaption.hasClass('skewtorightshort'))
                skwX = 35

            if (nextcaption.hasClass('skewtoleft') || nextcaption.hasClass('skewtoleftshort'))
                skwX = -35

            var xx = 0;
            var yy = 0;

            if (nextcaption.hasClass('ltr') || nextcaption.hasClass('skewtoright'))
                xx = opt.width + 60;
            else if (nextcaption.hasClass('ltl') || nextcaption.hasClass('skewtoleft'))
                xx = 0 - (opt.width + 60);
            else if (nextcaption.hasClass('ltt'))
                yy = 0 - (opt.height + 60);
            else if (nextcaption.hasClass('ltb'))
                yy = opt.height + 60;
            else if (nextcaption.hasClass('str') || nextcaption.hasClass('skewtorightshort')) {
                xx = 50;
                oo = 0;
            } else if (nextcaption.hasClass('stl') || nextcaption.hasClass('skewtoleftshort')) {
                xx = -50;
                oo = 0;
            } else if (nextcaption.hasClass('stt')) {
                yy = -50;
                oo = 0;
            } else if (nextcaption.hasClass('stb')) {
                yy = 50;
                oo = 0;
            }

            if (nextcaption.hasClass('skewtorightshort'))
                xx = xx + 220;

            if (nextcaption.hasClass('skewtoleftshort'))
                xx = xx - 220


            nextcaption.data('outanim', TweenLite.to(nextcaption, mspeed, {
                x: xx,
                y: yy,
                scale: 1,
                rotation: 0,
                skewX: skwX,
                opacity: 0,
                delay: mdelay,
                z: 0,
                overwrite: "auto",
                ease: easedata,
                onStart: function() {
                    if (nextcaption.data('anim') != undefined)
                        nextcaption.data('anim').pause();
                }
            }));

        } else

        if (nextcaption.hasClass("randomrotateout")) {

            nextcaption.data('outanim', TweenLite.to(nextcaption, mspeed, {
                left: Math.random() * opt.width,
                top: Math.random() * opt.height,
                scale: Math.random() * 2 + 0.3,
                rotation: Math.random() * 360 - 180,
                z: 0,
                opacity: 0,
                delay: mdelay,
                ease: easedata,
                onStart: function() {
                    if (nextcaption.data('anim') != undefined)
                        nextcaption.data('anim').pause();
                }
            }));

        } else

        if (nextcaption.hasClass('fadeout')) {



            nextcaption.data('outanim', TweenLite.to(nextcaption, mspeed, {
                opacity: 0,
                delay: mdelay,
                ease: easedata,
                onStart: function() {
                    if (nextcaption.data('anim') != undefined)
                        nextcaption.data('anim').pause();
                }
            }));

        } else

        if (nextcaption.hasClass("customout")) {
            var tlop = 0,
                tlxx = 0,
                tlyy = 0,
                tlzz = 2,
                tlsc = 1,
                tlro = 0,
                sc = 1,
                scX = 1,
                scY = 1,
                ro = 0,
                roX = 0,
                roY = 0,
                roZ = 0,
                skwX = 0,
                skwY = 0,
                opa = 0,
                trorig = "center,center",
                tper = 300;

            var customarray = nextcaption.data('customout').split(';');
            jQuery.each(customarray, function(index, param) {
                //customarray.forEach(function(param) {
                param = param.split(":")

                var w = param[0],
                    v = param[1];


                if (w == "rotationX") roX = parseInt(v, 0);
                if (w == "rotationY") roY = parseInt(v, 0);
                if (w == "rotationZ") roZ = parseInt(v, 0);
                if (w == "scaleX") scX = parseFloat(v);
                if (w == "scaleY") scY = parseFloat(v);
                if (w == "opacity") opa = parseFloat(v);
                if (w == "skewX") skwX = parseInt(v, 0);
                if (w == "skewY") skwY = parseInt(v, 0);
                if (w == "x") tlxx = parseInt(v, 0);
                if (w == "y") tlyy = parseInt(v, 0);
                if (w == "z") tlzz = parseInt(v);
                if (w == "transformOrigin") trorig = v;
                if (w == "transformPerspective") tper = parseInt(v, 0);


            })



            nextcaption.data('outanim', TweenLite.to(nextcaption, mspeed,


                {
                    scaleX: scX,
                    scaleY: scY,
                    rotationX: roX,
                    rotationY: roY,
                    rotationZ: roZ,
                    x: tlxx,
                    y: tlyy,
                    z: tlzz,
                    opacity: opa,
                    delay: mdelay,
                    ease: easedata,
                    overwrite: "auto",
                    onStart: function() {

                        if (nextcaption.data('anim') != undefined)
                            nextcaption.data('anim').pause();
                        TweenLite.set(nextcaption, {
                            transformPerspective: tper,
                            transformOrigin: trorig,
                            overwrite: "auto"
                        });

                    }
                }));
        } else {
            //TweenLite.to(nextcaption,{delay:mdelay,overwrite:"auto"});
            clearTimeout(nextcaption.data('reversetimer'));
            /*nextcaption.data('reversetimer',setTimeout(function() {
            	nextcaption.animate({opacity:"0"});

            },mdelay*1000));*/
            nextcaption.data('reversetimer', setTimeout(function() {

                nextcaption.data('anim').reverse()
            }, mdelay * 1000));


        }
    }

    ///////////////////////////
    //	REMOVE THE LISTENERS //
    ///////////////////////////
    function removeAllListeners(container, opt) {
        container.children().each(function() {
            try { jQuery(this).die('click'); } catch (e) {}
            try { jQuery(this).die('mouseenter'); } catch (e) {}
            try { jQuery(this).die('mouseleave'); } catch (e) {}
            try { jQuery(this).unbind('hover'); } catch (e) {}
        })
        try { container.die('click', 'mouseenter', 'mouseleave'); } catch (e) {}
        clearInterval(opt.cdint);
        container = null;



    }

    ///////////////////////////
    //	-	COUNTDOWN	-	//
    /////////////////////////
    function countDown(container, opt) {
        opt.cd = 0;
        opt.loop = 0;
        if (opt.stopAfterLoops != undefined && opt.stopAfterLoops > -1)
            opt.looptogo = opt.stopAfterLoops;
        else
            opt.looptogo = 9999999;

        if (opt.stopAtSlide != undefined && opt.stopAtSlide > -1)
            opt.lastslidetoshow = opt.stopAtSlide;
        else
            opt.lastslidetoshow = 999;

        opt.stopLoop = "off";

        if (opt.looptogo == 0) opt.stopLoop = "on";



        if (opt.slideamount > 1 && !(opt.stopAfterLoops == 0 && opt.stopAtSlide == 1)) {
            var bt = container.find('.tp-bannertimer');
            if (bt.length > 0) {
                bt.css({ 'width': '0%' });

                if (opt.videoplaying != true)
                    bt.animate({ 'width': "100%" }, { duration: (opt.delay - 100), queue: false, easing: "linear" });

            }

            bt.data('opt', opt);


            opt.cdint = setInterval(function() {

                if (jQuery('body').find(container).length == 0) removeAllListeners(container, opt);
                if (container.data('conthover-changed') == 1) {
                    opt.conthover = container.data('conthover');
                    container.data('conthover-changed', 0);
                }

                if (opt.conthover != 1 && opt.videoplaying != true && opt.width > opt.hideSliderAtLimit) {
                    opt.cd = opt.cd + 100;
                }


                if (opt.fullWidth != "on")
                    if (opt.width > opt.hideSliderAtLimit)
                        container.parent().removeClass("tp-hide-revslider")
                    else
                        container.parent().addClass("tp-hide-revslider")
                        // EVENT TRIGGERING IN CASE VIDEO HAS BEEN STARTED
                if (opt.videostartednow == 1) {
                    container.trigger('revolution.slide.onvideoplay');
                    opt.videostartednow = 0;
                }

                // EVENT TRIGGERING IN CASE VIDEO HAS BEEN STOPPED
                if (opt.videostoppednow == 1) {
                    container.trigger('revolution.slide.onvideostop');
                    opt.videostoppednow = 0;
                }


                if (opt.cd >= opt.delay) {
                    opt.cd = 0;
                    // SWAP TO NEXT BANNER
                    opt.act = opt.next;
                    opt.next = opt.next + 1;
                    if (opt.next > container.find('>ul >li').length - 1) {
                        opt.next = 0;
                        opt.looptogo = opt.looptogo - 1;

                        if (opt.looptogo <= 0) {
                            opt.stopLoop = "on";

                        }
                    }

                    // STOP TIMER IF NO LOOP NO MORE NEEDED.

                    if (opt.stopLoop == "on" && opt.next == opt.lastslidetoshow - 1) {
                        clearInterval(opt.cdint);
                        container.find('.tp-bannertimer').css({ 'visibility': 'hidden' });
                        container.trigger('revolution.slide.onstop');
                    }

                    // SWAP THE SLIDES
                    swapSlide(container, opt);


                    // Clear the Timer
                    if (bt.length > 0) {
                        bt.css({ 'width': '0%' });
                        if (opt.videoplaying != true)
                            bt.animate({ 'width': "100%" }, { duration: (opt.delay - 100), queue: false, easing: "linear" });
                    }
                }
            }, 100);


            container.hover(
                function() {

                    if (opt.onHoverStop == "on") {
                        opt.conthover = 1;
                        bt.stop();
                        container.trigger('revolution.slide.onpause');
                        var nextsh = container.find('>ul >li:eq(' + opt.next + ') .slotholder');
                        nextsh.find('.defaultimg').each(function() {
                            var dimg = jQuery(this);
                            if (dimg.data('kenburn') != undefined)
                                dimg.data('kenburn').pause();
                        });
                    }
                },
                function() {
                    if (container.data('conthover') != 1) {
                        container.trigger('revolution.slide.onresume');
                        opt.conthover = 0;
                        if (opt.onHoverStop == "on" && opt.videoplaying != true) {
                            bt.animate({ 'width': "100%" }, { duration: ((opt.delay - opt.cd) - 100), queue: false, easing: "linear" });
                        }
                        var nextsh = container.find('>ul >li:eq(' + opt.next + ') .slotholder');
                        nextsh.find('.defaultimg').each(function() {
                            var dimg = jQuery(this);
                            if (dimg.data('kenburn') != undefined)
                                dimg.data('kenburn').play();
                        });
                    }
                });
        }
    }



})(jQuery);


// SOME ERROR MESSAGES IN CASE THE PLUGIN CAN NOT BE LOADED
function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
    jQuery(sliderID).show().html(errorMessage);
}

;

/* jquery-blockui: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/plugins/bitcommerce/assets/js/jquery-blockui/jquery.blockUI.min.js) */
/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
(function() {
    "use strict";

    function e(e) {
        function a(i, a) {
            var l, h, m = i == window,
                g = a && a.message !== undefined ? a.message : undefined;
            a = e.extend({}, e.blockUI.defaults, a || {});
            if (a.ignoreIfBlocked && e(i).data("blockUI.isBlocked")) return;
            a.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, a.overlayCSS || {});
            l = e.extend({}, e.blockUI.defaults.css, a.css || {});
            a.onOverlayClick && (a.overlayCSS.cursor = "pointer");
            h = e.extend({}, e.blockUI.defaults.themedCSS, a.themedCSS || {});
            g = g === undefined ? a.message : g;
            m && o && f(window, { fadeOut: 0 });
            if (g && typeof g != "string" && (g.parentNode || g.jquery)) {
                var y = g.jquery ? g[0] : g,
                    b = {};
                e(i).data("blockUI.history", b);
                b.el = y;
                b.parent = y.parentNode;
                b.display = y.style.display;
                b.position = y.style.position;
                b.parent && b.parent.removeChild(y)
            }
            e(i).data("blockUI.onUnblock", a.onUnblock);
            var w = a.baseZ,
                E, S, x, T;
            n || a.forceIframe ? E = e('<iframe class="blockUI" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + a.iframeSrc + '"></iframe>') : E = e('<div class="blockUI" style="display:none"></div>');
            a.theme ? S = e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + w++ + ';display:none"></div>') : S = e('<div class="blockUI blockOverlay" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
            if (a.theme && m) {
                T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:fixed">';
                a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>");
                T += '<div class="ui-widget-content ui-dialog-content"></div>';
                T += "</div>"
            } else if (a.theme) {
                T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:absolute">';
                a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>");
                T += '<div class="ui-widget-content ui-dialog-content"></div>';
                T += "</div>"
            } else m ? T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage" style="z-index:' + (w + 10) + ';display:none;position:fixed"></div>' : T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement" style="z-index:' + (w + 10) + ';display:none;position:absolute"></div>';
            x = e(T);
            if (g)
                if (a.theme) {
                    x.css(h);
                    x.addClass("ui-widget-content")
                } else x.css(l);
            a.theme || S.css(a.overlayCSS);
            S.css("position", m ? "fixed" : "absolute");
            (n || a.forceIframe) && E.css("opacity", 0);
            var N = [E, S, x],
                C = m ? e("body") : e(i);
            e.each(N, function() { this.appendTo(C) });
            a.theme && a.draggable && e.fn.draggable && x.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });
            var k = s && (!e.support.boxModel || e("object,embed", m ? null : i).length > 0);
            if (r || k) {
                m && a.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%");
                if ((r || !e.support.boxModel) && !m) var L = v(i, "borderTopWidth"),
                    A = v(i, "borderLeftWidth"),
                    O = L ? "(0 - " + L + ")" : 0,
                    M = A ? "(0 - " + A + ")" : 0;
                e.each(N, function(e, t) {
                    var n = t[0].style;
                    n.position = "absolute";
                    if (e < 2) {
                        m ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + a.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"');
                        m ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"');
                        M && n.setExpression("left", M);
                        O && n.setExpression("top", O)
                    } else if (a.centerY) {
                        m && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                        n.marginTop = 0
                    } else if (!a.centerY && m) {
                        var r = a.css && a.css.top ? parseInt(a.css.top, 10) : 0,
                            i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"';
                        n.setExpression("top", i)
                    }
                })
            }
            if (g) {
                a.theme ? x.find(".ui-widget-content").append(g) : x.append(g);
                (g.jquery || g.nodeType) && e(g).show()
            }(n || a.forceIframe) && a.showOverlay && E.show();
            if (a.fadeIn) {
                var _ = a.onBlock ? a.onBlock : t,
                    D = a.showOverlay && !g ? _ : t,
                    P = g ? _ : t;
                a.showOverlay && S._fadeIn(a.fadeIn, D);
                g && x._fadeIn(a.fadeIn, P)
            } else {
                a.showOverlay && S.show();
                g && x.show();
                a.onBlock && a.onBlock()
            }
            c(1, i, a);
            if (m) {
                o = x[0];
                u = e(a.focusableElements, o);
                a.focusInput && setTimeout(p, 20)
            } else d(x[0], a.centerX, a.centerY);
            if (a.timeout) {
                var H = setTimeout(function() { m ? e.unblockUI(a) : e(i).unblock(a) }, a.timeout);
                e(i).data("blockUI.timeout", H)
            }
        }

        function f(t, n) {
            var r, i = t == window,
                s = e(t),
                a = s.data("blockUI.history"),
                f = s.data("blockUI.timeout");
            if (f) {
                clearTimeout(f);
                s.removeData("blockUI.timeout")
            }
            n = e.extend({}, e.blockUI.defaults, n || {});
            c(0, t, n);
            if (n.onUnblock === null) {
                n.onUnblock = s.data("blockUI.onUnblock");
                s.removeData("blockUI.onUnblock")
            }
            var h;
            i ? h = e("body").children().filter(".blockUI").add("body > .blockUI") : h = s.find(">.blockUI");
            if (n.cursorReset) {
                h.length > 1 && (h[1].style.cursor = n.cursorReset);
                h.length > 2 && (h[2].style.cursor = n.cursorReset)
            }
            i && (o = u = null);
            if (n.fadeOut) {
                r = h.length;
                h.stop().fadeOut(n.fadeOut, function() {--r === 0 && l(h, a, n, t) })
            } else l(h, a, n, t)
        }

        function l(t, n, r, i) {
            var s = e(i);
            if (s.data("blockUI.isBlocked")) return;
            t.each(function(e, t) { this.parentNode && this.parentNode.removeChild(this) });
            if (n && n.el) {
                n.el.style.display = n.display;
                n.el.style.position = n.position;
                n.parent && n.parent.appendChild(n.el);
                s.removeData("blockUI.history")
            }
            s.data("blockUI.static") && s.css("position", "static");
            typeof r.onUnblock == "function" && r.onUnblock(i, r);
            var o = e(document.body),
                u = o.width(),
                a = o[0].style.width;
            o.width(u - 1).width(u);
            o[0].style.width = a
        }

        function c(t, n, r) {
            var i = n == window,
                s = e(n);
            if (!t && (i && !o || !i && !s.data("blockUI.isBlocked"))) return;
            s.data("blockUI.isBlocked", t);
            if (!i || !r.bindEvents || t && !r.showOverlay) return;
            var u = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
            t ? e(document).bind(u, r, h) : e(document).unbind(u, h)
        }

        function h(t) {
            if (t.type === "keydown" && t.keyCode && t.keyCode == 9 && o && t.data.constrainTabKey) {
                var n = u,
                    r = !t.shiftKey && t.target === n[n.length - 1],
                    i = t.shiftKey && t.target === n[0];
                if (r || i) { setTimeout(function() { p(i) }, 10); return !1 }
            }
            var s = t.data,
                a = e(t.target);
            a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t);
            return a.parents("div." + s.blockMsgClass).length > 0 ? !0 : a.parents().children().filter("div.blockUI").length === 0
        }

        function p(e) {
            if (!u) return;
            var t = u[e === !0 ? u.length - 1 : 0];
            t && t.focus()
        }

        function d(e, t, n) {
            var r = e.parentNode,
                i = e.style,
                s = (r.offsetWidth - e.offsetWidth) / 2 - v(r, "borderLeftWidth"),
                o = (r.offsetHeight - e.offsetHeight) / 2 - v(r, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0");
            n && (i.top = o > 0 ? o + "px" : "0")
        }

        function v(t, n) { return parseInt(e.css(t, n), 10) || 0 }
        e.fn._fadeIn = e.fn.fadeIn;
        var t = e.noop || function() {},
            n = /MSIE/.test(navigator.userAgent),
            r = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            i = document.documentMode || 0,
            s = e.isFunction(document.createElement("div").style.setExpression);
        e.blockUI = function(e) { a(window, e) };
        e.unblockUI = function(e) { f(window, e) };
        e.growlUI = function(t, n, r, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>");
            n && s.append("<h2>" + n + "</h2>");
            r === undefined && (r = 3e3);
            var o = function(t) {
                t = t || {};
                e.blockUI({ message: s, fadeIn: typeof t.fadeIn != "undefined" ? t.fadeIn : 700, fadeOut: typeof t.fadeOut != "undefined" ? t.fadeOut : 1e3, timeout: typeof t.timeout != "undefined" ? t.timeout : r, centerY: !1, showOverlay: !1, onUnblock: i, css: e.blockUI.defaults.growlCSS })
            };
            o();
            var u = s.css("opacity");
            s.mouseover(function() {
                o({ fadeIn: 0, timeout: 3e4 });
                var t = e(".blockMsg");
                t.stop();
                t.fadeTo(300, 1)
            }).mouseout(function() { e(".blockMsg").fadeOut(1e3) })
        };
        e.fn.block = function(t) {
            if (this[0] === window) { e.blockUI(t); return this }
            var n = e.extend({}, e.blockUI.defaults, t || {});
            this.each(function() {
                var t = e(this);
                if (n.ignoreIfBlocked && t.data("blockUI.isBlocked")) return;
                t.unblock({ fadeOut: 0 })
            });
            return this.each(function() {
                if (e.css(this, "position") == "static") {
                    this.style.position = "relative";
                    e(this).data("blockUI.static", !0)
                }
                this.style.zoom = 1;
                a(this, t)
            })
        };
        e.fn.unblock = function(t) { if (this[0] === window) { e.unblockUI(t); return this } return this.each(function() { f(this, t) }) };
        e.blockUI.version = 2.66;
        e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 };
        var o = null,
            u = []
    }
    typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
})();;

/* dt-plugins: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/themes/qfy-01/js/plugins.js) */
/*jquery-parallax*/
/*scroll ç”¨åˆ°*/
if (typeof jQuery.easing["jswing"] == "undefined") {
    jQuery.easing["jswing"] = jQuery.easing["swing"];
    jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(e, t, n, r, i) { return jQuery.easing[jQuery.easing.def](e, t, n, r, i) }, easeInQuad: function(e, t, n, r, i) { return r * (t /= i) * t + n }, easeOutQuad: function(e, t, n, r, i) { return -r * (t /= i) * (t - 2) + n }, easeInOutQuad: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t + n; return -r / 2 * (--t * (t - 2) - 1) + n }, easeInCubic: function(e, t, n, r, i) { return r * (t /= i) * t * t + n }, easeOutCubic: function(e, t, n, r, i) { return r * ((t = t / i - 1) * t * t + 1) + n }, easeInOutCubic: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t + n; return r / 2 * ((t -= 2) * t * t + 2) + n }, easeInQuart: function(e, t, n, r, i) { return r * (t /= i) * t * t * t + n }, easeOutQuart: function(e, t, n, r, i) { return -r * ((t = t / i - 1) * t * t * t - 1) + n }, easeInOutQuart: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n; return -r / 2 * ((t -= 2) * t * t * t - 2) + n }, easeInQuint: function(e, t, n, r, i) { return r * (t /= i) * t * t * t * t + n }, easeOutQuint: function(e, t, n, r, i) { return r * ((t = t / i - 1) * t * t * t * t + 1) + n }, easeInOutQuint: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n; return r / 2 * ((t -= 2) * t * t * t * t + 2) + n }, easeInSine: function(e, t, n, r, i) { return -r * Math.cos(t / i * (Math.PI / 2)) + r + n }, easeOutSine: function(e, t, n, r, i) { return r * Math.sin(t / i * (Math.PI / 2)) + n }, easeInOutSine: function(e, t, n, r, i) { return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n }, easeInExpo: function(e, t, n, r, i) { return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n }, easeOutExpo: function(e, t, n, r, i) { return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n }, easeInOutExpo: function(e, t, n, r, i) { if (t == 0) return n; if (t == i) return n + r; if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n; return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n }, easeInCirc: function(e, t, n, r, i) { return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n }, easeOutCirc: function(e, t, n, r, i) { return r * Math.sqrt(1 - (t = t / i - 1) * t) + n }, easeInOutCirc: function(e, t, n, r, i) { if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n; return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n }, easeInElastic: function(e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n }, easeOutElastic: function(e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n }, easeInOutElastic: function(e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i / 2) == 2) return n + r; if (!o) o = i * .3 * 1.5; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n; return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n }, easeInBack: function(e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * (t /= i) * t * ((s + 1) * t - s) + n }, easeOutBack: function(e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n }, easeInOutBack: function(e, t, n, r, i, s) { if (s == undefined) s = 1.70158; if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n; return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n }, easeInBounce: function(e, t, n, r, i) { return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n }, easeOutBounce: function(e, t, n, r, i) { if ((t /= i) < 1 / 2.75) { return r * 7.5625 * t * t + n } else if (t < 2 / 2.75) { return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n } else if (t < 2.5 / 2.75) { return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n } else { return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n } }, easeInOutBounce: function(e, t, n, r, i) { if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n; return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n } })
}

/**
 * jquery.dlmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function($, window, undefined) {

    // global
    var Modernizr = window.Modernizr,
        $body = $('body');

    $.DLMenu = function(options, element) {
        this.$el = $(element);
        this._init(options);
    };

    // the options
    $.DLMenu.defaults = {
        // classes for the animation effects
        animationClasses: { animIn: 'dl-animate-in-2', animOut: 'dl-animate-out-2' }
    };

    $.DLMenu.prototype = {
        _init: function(options) {

            // options
            this.options = $.extend(true, {}, $.DLMenu.defaults, options);
            // cache some elements and initialize some variables
            this._config();

            var animEndEventNames = {
                    'WebkitAnimation': 'webkitAnimationEnd',
                    'OAnimation': 'oAnimationEnd',
                    'msAnimation': 'MSAnimationEnd',
                    'animation': 'animationend'
                },
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                };
            // animation end event name
            this.animEndEventName = animEndEventNames['animation'] + '.dlmenu';
            // transition end event name
            this.transEndEventName = transEndEventNames['transition'] + '.dlmenu',
                // support for css animations and css transitions
                this.supportAnimations = true,
                this.supportTransitions = true;

            this._initEvents();

        },
        _config: function() {
            this.open = false;
            this.$trigger = this.$el.find('#mobile-menu');
            /* ! !changed */
            this.openCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden phone-text">' + this.$el.find('.menu-open').html() + "</span><span class='mobile_icon glyphicon glyphicon-icon-angle-down' ></span>";
            this.closeCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden  phone-text">' + this.$el.find('.menu-close').html() + "</span><span class='mobile_icon  glyphicon glyphicon-icon-angle-down' ></span>";
            /* !changed: end */

            if ($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$trigger.closest(".qfy-listcatecontrols").length == 0) {
                this.$menu = jQuery('.floatwarpper ul.dl-menu');
            } else {
                this.$menu = this.$el.find('ul.dl-menu');
            }
            this.$menuitems = this.$menu.find('li:not(.dl-back)');



            this.$back = this.$menu.find('li.dl-back');
            this.$menuitems.each(function() {
                var $item_new = $(this),
                    $submenu_new = $item_new.children('ul.dl-submenu');
                $item_new.siblings(".new-column").find("> a").remove();
                var new_col_sub = $item_new.siblings(".new-column").find("> ul.dl-submenu").unwrap();
                new_col_sub.find("> a, > .dl-back").remove();
                new_col_sub.children().unwrap().appendTo($submenu_new);
                $item_new.siblings(".new-column").remove();
                if ($item_new.find("> a").attr("href") == "#") {
                    $item_new.find("> a").removeAttr("href");
                }
            });
        },
        _initEvents: function() {

            var self = this;

            this.$trigger.unbind().on('click.dlmenu', function() {

                if (self.open) {
                    self._closeMenu();
                } else {
                    self._openMenu();
                    // clicking somewhere else makes the menu close

                    if (self.$trigger.hasClass("leftbtnmenu")) {
                        if (jQuery("body >.dl-menu-film").length == 0) {
                            jQuery("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
                        }
                        jQuery("body >.dl-menu-film").off('click').on('click.dlmenu', function() {
                            self._closeMenu();
                        });
                    } else {
                        $body.off('click').on('click.dlmenu', function() {
                            self._closeMenu();
                        });
                    }

                }
                return false;

            });

            this.$menuitems.on('click.dlmenu', function(event) {
                if ($(this).closest(".dl-menuwrapper").css("visibility") == "hidden") {
                    return;
                }
                event.stopPropagation();

                var $item = $(this),
                    $submenu = $item.children('ul.dl-submenu');


                if ($submenu.length > 0) {

                    var xx = event.pageX;
                    var width = $submenu.width();

                    var isclick = width - xx > 35;

                    if ($item.closest("#dl-menu").find(">#mobile-menu").hasClass("firstopensub") || jQuery("#dl-menu >#mobile-menu").hasClass("firstopensub")) {
                        var textw = $item.find(">a>span").width() * 1 + $item.find(">a>span").offset().left * 1;
                        isclick = xx < textw;
                    }
                    if (!$item.find(">a").attr("href")) {
                        //æ— é“¾æŽ¥
                        isclick = false;
                    }
                    if (isclick) {
                        if ($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#") > -1) {
                            //self._closeMenu();
                        }
                    } else {
                        //...
                        if ($(this).closest(".dl-menuwrapper").hasClass("leftbtnmenu")) {
                            if ($submenu.css("display") != "block") {
                                var h = $submenu.height();
                                $submenu.show().css("height", 0).animate({ height: h }, 150, function() {
                                    $submenu.attr("style", "display:block;");
                                });
                                $item.addClass('dl-subviewopen');
                            } else {
                                $submenu.animate({ height: 0 }, 150, function() {
                                    $submenu.hide();
                                });

                                $item.removeClass('dl-subviewopen')
                            }
                        } else {
                            $("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

                            var $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses.animIn),
                                onAnimationEndFn = function() {
                                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.animOut).addClass('dl-subview');
                                    $item.addClass('dl-subviewopen').parents('.dl-subviewopen:first').removeClass('dl-subviewopen').addClass('dl-subview');
                                    $item.addClass('qfy-subviewopen');
                                    $flyin.remove();
                                };

                            self.$menu.addClass(self.options.animationClasses.animOut);


                            if (self.supportAnimations) {
                                self.$menu.on(self.animEndEventName, onAnimationEndFn);
                            } else {
                                onAnimationEndFn.call();
                            }


                        }



                        return false;
                    }

                } else {

                    if ($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#") > -1) {
                        self._closeMenu();
                    }

                }
            });

            this.$back.on('click.dlmenu', function(event) {

                $("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

                var $this = $(this),
                    $submenu = $this.parents('ul.dl-submenu:first'),
                    $item = $submenu.parent(),


                    $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses.animOut);

                var onAnimationEndFn = function() {
                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.animIn);
                    $flyin.remove();
                };

                self.$menu.addClass(self.options.animationClasses.animIn);

                if (self.supportAnimations) {
                    self.$menu.on(self.animEndEventName, onAnimationEndFn);
                } else {
                    onAnimationEndFn.call();
                }

                $item.removeClass('dl-subviewopen').removeClass("qfy-subviewopen");

                var $subview = $this.parents('.dl-subview:first');
                if ($subview.is('li')) {
                    $subview.addClass('dl-subviewopen').addClass("qfy-subviewopen");
                }
                $subview.removeClass('dl-subview');

                return false;

            });

        },
        _closeMenu: function() {
            var self = this,
                onTransitionEndFn = function() {
                    self.$menu.off(self.transEndEventName);
                    self._resetMenu();
                };

            this.$menu.removeClass('dl-menuopen');
            this.$menu.parent().removeClass("dl-menuopen-parent");
            if ($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$trigger.closest(".qfy-listcatecontrols").length == 0) {
                $(".mobilefloatmenu.dl-menu-open #page").removeAttr("style");
                $(".dl-menu-open .floatwarpper").removeAttr("style");
                $(".floatwarpper .dl-container").removeAttr("style");
                $("#page #dl-menu").removeAttr("style");
                $("body > #dl-menu").remove();
                var element_right = $("#mobile-menu").attr("data-right");
                if (element_right) {
                    $("#dl-menu").css("right", element_right + "px");
                }
                var element_top = $("#mobile-menu").attr("data-top");
                if (element_top) {
                    $("#dl-menu").css("top", element_top + "px");
                }
            }
            $("body").removeClass("dl-menu-open");
            this.$menu.addClass('dl-menu-toggle');
            if (this.$menu.closest("section.section").length > 0) {
                var style = this.$menu.closest("section.section").attr("style");
                style = style.replace(/min-height:\s*\d+px;*/g, "");
                this.$menu.closest("section.section").attr("style", style);
            }
            this.$trigger.removeClass('dl-active').html(this.openCap);

            if (this.supportTransitions) {
                this.$menu.on(this.transEndEventName, onTransitionEndFn);
            } else {
                onTransitionEndFn.call();
            }

            this.open = false;

            /*
            			this.$el.css({
            				position : "fixed",
            				top : ""
            			});
            */
        },
        _openMenu: function() {
            this.$menu.parent().addClass("dl-menuopen-parent");
            this.$menu.addClass('dl-menuopen dl-menu-toggle').on(this.transEndEventName, function() {
                $(this).removeClass('dl-menu-toggle');
            });
            if ($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$menu.closest(".qfy-listcatecontrols").length == 0) {

                var $this = this;
                $("body").addClass("dl-menu-open");
                var width = $('html').width();
                if ($("#mobile-menu").hasClass("fullfloatmenu")) {
                    var w = width;
                } else {
                    var w = width - 60;
                }

                if (!$(".floatwarpper").hasClass("leftbtnmenu")) {
                    $(".mobilefloatmenu.dl-menu-open #page").css('transform', 'translate3d(-' + w + 'px, 0px, 0px)').css('-webkit-transform', 'translate3d(-' + w + 'px,0,0)');
                    $(".dl-menu-open .floatwarpper").css('transform', 'translate3d(-' + w + 'px, 0px, 0px)').css('-webkit-transform', 'translate3d(-' + w + 'px,0,0)');
                    $(".floatwarpper").width(w).css("right", "-" + w + "px");
                }
                $(".floatwarpper .dl-container").css("max-width", "100%");
                var element_top = $("#mobile-menu").attr("data-top");
                var element_right = $("#mobile-menu").attr("data-right");
                if (element_top) {
                    $("#page #dl-menu").css("top", element_top + "px");
                    $("body > #dl-menu").css("top", element_top + "px");
                }
                setTimeout(function() {
                    if (!$(".floatwarpper").hasClass("leftbtnmenu")) {
                        $("#page #dl-menu").removeClass("dl-menu-hidden");
                        var menu_html = $("#page #dl-menu").prop("outerHTML");
                        $("body").prepend(menu_html);
                        if (element_top) {
                            $("body > #dl-menu").css("top", element_top + "px");
                        }
                        $("#page #dl-menu").addClass("dl-menu-hidden");

                        if ($("#mobile-menu").hasClass("fullfloatmenu")) {
                            $("body > #dl-menu").css("right", element_right + "px");
                        } else {
                            $("body > #dl-menu").css("right", (1 * w + 8) + "px");
                        }
                    }
                    $("body > #dl-menu").unbind().bind("click", function(e) {
                        e.stopPropagation();
                        $this.$trigger.click();
                        return false;
                    });

                }, 200)

            }
            this.$trigger.addClass('dl-active').html(this.closeCap);
            this.open = true;
            if (this.$menu.closest("section.section").length > 0) {
                var minheight = this.$menu.height();
                this.$menu.closest("section.section").css("min-height", minheight + "px");
            }
            if (!$(".floatwarpper").hasClass("leftbtnmenu")) {
                $("html, body").animate({ scrollTop: this.$el.offset().top - 20 }, 150);
            }
        },
        // resets the menu to its original state (first level of options)
        _resetMenu: function() {
            if (!this.$menu.closest(".dl-menuwrapper").hasClass("leftbtnmenu")) {
                this.$menu.removeClass('dl-subview');
                this.$menuitems.removeClass('dl-subview dl-subviewopen');
            }
        }
    };

    var logError = function(message) {
        if (window.console) {
            window.console.error(message);
        }
    };

    $.fn.dlmenu = function(options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if (!instance) {
                    logError("cannot call methods on dlmenu prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for dlmenu instance");
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if (instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
                }
            });
        }
        return this;
    };

})(jQuery, window);
/****************************************************************************************************************************/
/* !- Tooltip*/
function simple_tooltip(e, t) {
    jQuery(e).each(function(e) {
        jQuery("body").append("<div class='" + t + "' id='" + t + e + "'>" + jQuery(this).find("span.tooltip-c").html() + "</div>");
        var n = jQuery("#" + t + e);
        jQuery(this).removeAttr("title").mouseover(function() { n.css({ opacity: 1, display: "none" }).fadeIn(400) }).mousemove(function(e) {
            var t = jQuery(window).scrollTop();
            var r = jQuery(window).width();
            var i;
            var s;
            var o = 15;
            if (r - o * 2 >= n.width() + e.pageX) { i = e.pageX + o } else { i = r - n.width() - o }
            if (t + o * 2 >= e.pageY - n.height()) { s = t + o } else { s = e.pageY - n.height() - 2.2 * o }
            n.css({ left: i, top: s })
        }).mouseout(function() { n.css({ left: "-9999px" }) })
    })
}

/* !Sandbox */

/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
jQuery(document).ready(function(a) {
    a.fn.extend({
        customSelect: function(c) {
            if (typeof document.body.style.maxHeight === "undefined") { return this }
            var e = { customClass: "customSelect", mapClass: true, mapStyle: true },
                c = a.extend(e, c),
                d = c.customClass,
                f = function(h, k) {
                    var g = h.find(":selected"),
                        j = k.children(":first"),
                        i = g.html() || "&nbsp;";
                    j.html(i);
                    if (g.attr("disabled")) { k.addClass(b("DisabledOption")) } else { k.removeClass(b("DisabledOption")) }
                    setTimeout(function() {
                        k.removeClass(b("Open"));
                        a(document).off("mouseup." + b("Open"))
                    }, 60)
                },
                b = function(g) { return d + g };
            return this.each(function() {
                var g = a(this),
                    i = a("<span />").addClass(b("Inner")),
                    h = a("<span />");
                g.after(h.append(i));
                h.addClass(d);
                if (c.mapClass) { h.addClass(g.attr("class")) }
                if (c.mapStyle) { h.attr("style", g.attr("style")) }
                g.addClass("hasCustomSelect").on("update", function() {
                    f(g, h);
                    var k = parseInt(g.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                    h.css({ display: "inline-block" });
                    var j = h.outerHeight();
                    if (g.attr("disabled")) { h.addClass(b("Disabled")) } else { h.removeClass(b("Disabled")) }
                    i.css({ width: k, display: "inline-block" });
                    g.css({ "-webkit-appearance": "menulist-button", width: h.outerWidth(), position: "absolute", opacity: 0, height: j, fontSize: h.css("font-size") })
                }).on("change", function() {
                    h.addClass(b("Changed"));
                    f(g, h)
                }).on("keyup", function(j) {
                    if (!h.hasClass(b("Open"))) {
                        g.blur();
                        g.focus()
                    } else { if (j.which == 13 || j.which == 27) { f(g, h) } }
                }).on("mousedown", function(j) { h.removeClass(b("Changed")) }).on("mouseup", function(j) {
                    if (!h.hasClass(b("Open"))) {
                        if (a("." + b("Open")).not(h).length > 0 && typeof InstallTrigger !== "undefined") { g.focus() } else {
                            h.addClass(b("Open"));
                            j.stopPropagation();
                            a(document).one("mouseup." + b("Open"), function(k) { if (k.target != g.get(0) && a.inArray(k.target, g.find("*").get()) < 0) { g.blur() } else { f(g, h) } })
                        }
                    }
                }).focus(function() { h.removeClass(b("Changed")).addClass(b("Focus")) }).blur(function() { h.removeClass(b("Focus") + " " + b("Open")) }).hover(function() { h.addClass(b("Hover")) }, function() { h.removeClass(b("Hover")) }).trigger("update")
            })
        }
    })
});


/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;
(function($, window, undefined) {

    'use strict';

    $.HoverDir = function(options, element) {

        this.$el = $(element);
        this._init(options);

    };

    // the options
    $.HoverDir.defaults = {
        speed: 300,
        easing: 'ease',
        hoverDelay: 0,
        inverse: false
    };

    $.HoverDir.prototype = {

        _init: function(options) {

            // options
            this.options = $.extend(true, {}, $.HoverDir.defaults, options);
            // transition properties
            this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
            // support for CSS transitions
            this.support = Modernizr.csstransitions;
            // load the events
            this._loadEvents();

        },
        _loadEvents: function() {

            var self = this;

            this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir', function(event) {

                var $el = $(this),
                    $hoverElem = $el.find('div.rollover-content, div.fs-entry-content'),
                    direction = self._getDir($el, { x: event.pageX, y: event.pageY }),
                    styleCSS = self._getStyle(direction);

                if (event.type === 'mouseenter') {

                    $hoverElem.hide().css(styleCSS.from);
                    clearTimeout(self.tmhover);

                    self.tmhover = setTimeout(function() {

                        $hoverElem.show(0, function() {

                            var $el = $(this);
                            if (self.support) {
                                $el.css('transition', self.transitionProp);
                            }
                            self._applyAnimation($el, styleCSS.to, self.options.speed);

                        });


                    }, self.options.hoverDelay);

                } else {

                    if (self.support) {
                        $hoverElem.css('transition', self.transitionProp);
                    }
                    clearTimeout(self.tmhover);
                    self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);

                }

            });

        },
        // credits : http://stackoverflow.com/a/3647634
        _getDir: function($el, coordinates) {

            // the width and height of the current div
            var w = $el.width(),
                h = $el.height(),

                // calculate the x and y to get an angle to the center of the div from that x and y.
                // gets the x value relative to the center of the DIV and "normalize" it
                x = (coordinates.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
                y = (coordinates.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),

                // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
                // first calculate the angle of the point,
                // add 180 deg to get rid of the negative values
                // divide by 90 to get the quadrant
                // add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
                direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

            return direction;

        },
        _getStyle: function(direction) {

            var fromStyle, toStyle,
                slideFromTop = { left: '0px', top: '-100%' },
                slideFromBottom = { left: '0px', top: '100%' },
                slideFromLeft = { left: '-100%', top: '0px' },
                slideFromRight = { left: '100%', top: '0px' },
                slideTop = { top: '0px' },
                slideLeft = { left: '0px' };

            switch (direction) {
                case 0:
                    // from top
                    fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                    toStyle = slideTop;
                    break;
                case 1:
                    // from right
                    fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                    toStyle = slideLeft;
                    break;
                case 2:
                    // from bottom
                    fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                    toStyle = slideTop;
                    break;
                case 3:
                    // from left
                    fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                    toStyle = slideLeft;
                    break;
            };

            return { from: fromStyle, to: toStyle };

        },
        // apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
        _applyAnimation: function(el, styleCSS, speed) {

            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            el.stop().applyStyle(styleCSS, $.extend(true, [], { duration: speed + 'ms' }));

        },

    };

    var logError = function(message) {

        if (window.console) {

            window.console.error(message);

        }

    };

    $.fn.hoverdir = function(options) {

        var instance = $.data(this, 'hoverdir');

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function() {

                if (!instance) {

                    logError("cannot call methods on hoverdir prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;

                }

                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {

                    logError("no such method '" + options + "' for hoverdir instance");
                    return;

                }

                instance[options].apply(instance, args);

            });

        } else {

            this.each(function() {

                if (instance) {

                    instance._init();

                } else {

                    instance = $.data(this, 'hoverdir', new $.HoverDir(options, this));

                }

            });

        }

        return instance;

    };

})(jQuery, window);

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else { date = options.expires; }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { var cookieValue = null; if (document.cookie && document.cookie != '') { var cookies = document.cookie.split(';'); for (var i = 0; i < cookies.length; i++) { var cookie = jQuery.trim(cookies[i]); if (cookie.substring(0, name.length + 1) == (name + '=')) { cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); break; } } } return cookieValue; }
};

/* Sandbox: end */
;

/* dt-main-op-jquery: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/FeiEditor/bitSite/js/opentip-jquery.min.js) */
// Opentip v2.4.6
// Copyright (c) 2009-2012
// www.opentip.org
// MIT Licensed
var Opentip, firstAdapter, i, mouseMoved, mousePosition, mousePositionObservers, position, vendors, _i, _len, _ref, __slice = [].slice,
    __indexOf = [].indexOf || function(t) {
        for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
        return -1
    },
    __hasProp = {}.hasOwnProperty;
for (Opentip = function() {
        function t(e, i, o, s) {
            var n, r, a, h, p, d, l, u, c, g, f, m, v, b, w = this;
            if (this.id = ++t.lastId, this.debug("Creating Opentip."), t.tips.push(this), this.adapter = t.adapter, n = this.adapter.data(e, "opentips") || [], n.push(this), this.adapter.data(e, "opentips", n), this.triggerElement = this.adapter.wrap(e), this.triggerElement.length > 1) throw Error("You can't call Opentip on multiple elements.");
            if (1 > this.triggerElement.length) throw Error("Invalid element.");
            this.loaded = !1, this.loading = !1, this.visible = !1, this.waitingToShow = !1, this.waitingToHide = !1, this.currentPosition = { left: 0, top: 0 }, this.dimensions = { width: 100, height: 50 }, this.content = "", this.redraw = !0, this.currentObservers = { showing: !1, visible: !1, hiding: !1, hidden: !1 }, s = this.adapter.clone(s), typeof i == "object" ? (s = i, i = o = void 0) : typeof o == "object" && (s = o, o = void 0), o != null && (s.title = o), i != null && this.setContent(i), s["extends"] == null && (s["extends"] = s.style != null ? s.style : t.defaultStyle), h = [s], b = s;
            while (b["extends"]) {
                if (d = b["extends"], b = t.styles[d], b == null) throw Error("Invalid style: " + d);
                h.unshift(b), b["extends"] == null && d !== "standard" && (b["extends"] = "standard")
            }
            for (s = (f = this.adapter).extend.apply(f, [{}].concat(__slice.call(h))), s.hideTriggers = function() { var t, e, i, o; for (i = s.hideTriggers, o = [], t = 0, e = i.length; e > t; t++) r = i[t], o.push(r); return o }(), s.hideTrigger && s.hideTriggers.length === 0 && s.hideTriggers.push(s.hideTrigger), m = ["tipJoint", "targetJoint", "stem"], l = 0, c = m.length; c > l; l++) p = m[l], s[p] && typeof s[p] == "string" && (s[p] = new t.Joint(s[p]));
            for (!s.ajax || s.ajax !== !0 && s.ajax || (s.ajax = this.adapter.tagName(this.triggerElement) === "A" ? this.adapter.attr(this.triggerElement, "href") : !1), s.showOn === "click" && this.adapter.tagName(this.triggerElement) === "A" && this.adapter.observe(this.triggerElement, "click", function(t) { return t.preventDefault(), t.stopPropagation(), t.stopped = !0 }), s.target && (s.fixed = !0), s.stem === !0 && (s.stem = new t.Joint(s.tipJoint)), s.target === !0 ? s.target = this.triggerElement : s.target && (s.target = this.adapter.wrap(s.target)), this.currentStem = s.stem, s.delay == null && (s.delay = s.showOn === "mouseover" ? .2 : 0), s.targetJoint == null && (s.targetJoint = new t.Joint(s.tipJoint).flip()), this.showTriggers = [], this.showTriggersWhenVisible = [], this.hideTriggers = [], s.showOn && s.showOn !== "creation" && this.showTriggers.push({ element: this.triggerElement, event: s.showOn }), s.ajaxCache != null && (s.cache = s.ajaxCache, delete s.ajaxCache), this.options = s, this.bound = {}, v = ["prepareToShow", "prepareToHide", "show", "hide", "reposition"], u = 0, g = v.length; g > u; u++) a = v[u], this.bound[a] = function(t) { return function() { return w[t].apply(w, arguments) } }(a);
            this.adapter.domReady(function() { return w.activate(), w.options.showOn === "creation" ? w.prepareToShow() : void 0 })
        }
        return t.prototype.STICKS_OUT_TOP = 1, t.prototype.STICKS_OUT_BOTTOM = 2, t.prototype.STICKS_OUT_LEFT = 1, t.prototype.STICKS_OUT_RIGHT = 2, t.prototype["class"] = { container: "opentip-container", opentip: "opentip", header: "ot-header", content: "ot-content", loadingIndicator: "ot-loading-indicator", close: "ot-close", goingToHide: "ot-going-to-hide", hidden: "ot-hidden", hiding: "ot-hiding", goingToShow: "ot-going-to-show", showing: "ot-showing", visible: "ot-visible", loading: "ot-loading", ajaxError: "ot-ajax-error", fixed: "ot-fixed", showEffectPrefix: "ot-show-effect-", hideEffectPrefix: "ot-hide-effect-", stylePrefix: "style-" }, t.prototype._setup = function() {
            var t, e, i, o, s, n, r, a, h, p, d;
            for (this.debug("Setting up the tooltip."), this._buildContainer(), this.hideTriggers = [], h = this.options.hideTriggers, o = s = 0, r = h.length; r > s; o = ++s) {
                if (e = h[o], i = null, t = this.options.hideOn instanceof Array ? this.options.hideOn[o] : this.options.hideOn, typeof e == "string") switch (e) {
                    case "trigger":
                        t = t || "mouseout", i = this.triggerElement;
                        break;
                    case "tip":
                        t = t || "mouseover", i = this.container;
                        break;
                    case "target":
                        t = t || "mouseover", i = this.options.target;
                        break;
                    case "closeButton":
                        break;
                    default:
                        throw Error("Unknown hide trigger: " + e + ".")
                } else t = t || "mouseover", i = this.adapter.wrap(e);
                i && this.hideTriggers.push({ element: i, event: t, original: e })
            }
            for (p = this.hideTriggers, d = [], n = 0, a = p.length; a > n; n++) e = p[n], d.push(this.showTriggersWhenVisible.push({ element: e.element, event: "mouseover" }));
            return d
        }, t.prototype._buildContainer = function() { return this.container = this.adapter.create('<div id="opentip-' + this.id + '" class="' + this["class"].container + " " + this["class"].hidden + " " + this["class"].stylePrefix + this.options.className + '"></div>'), this.adapter.css(this.container, { position: "absolute" }), this.options.ajax && this.adapter.addClass(this.container, this["class"].loading), this.options.fixed && this.adapter.addClass(this.container, this["class"].fixed), this.options.showEffect && this.adapter.addClass(this.container, "" + this["class"].showEffectPrefix + this.options.showEffect), this.options.hideEffect ? this.adapter.addClass(this.container, "" + this["class"].hideEffectPrefix + this.options.hideEffect) : void 0 }, t.prototype._buildElements = function() { var t, e; return this.tooltipElement = this.adapter.create('<div class="' + this["class"].opentip + '"><div class="' + this["class"].header + '"></div><div class="' + this["class"].content + '"></div></div>'), this.backgroundCanvas = this.adapter.wrap(document.createElement("canvas")), this.adapter.css(this.backgroundCanvas, { position: "absolute" }), typeof G_vmlCanvasManager != "undefined" && G_vmlCanvasManager !== null && G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)), t = this.adapter.find(this.tooltipElement, "." + this["class"].header), this.options.title && (e = this.adapter.create("<h1></h1>"), this.adapter.update(e, this.options.title, this.options.escapeTitle), this.adapter.append(t, e)), this.options.ajax && !this.loaded && this.adapter.append(this.tooltipElement, this.adapter.create('<div class="' + this["class"].loadingIndicator + '"><span>â†»</span></div>')), __indexOf.call(this.options.hideTriggers, "closeButton") >= 0 && (this.closeButtonElement = this.adapter.create('<a href="javascript:undefined;" class="' + this["class"].close + '"><span>Close</span></a>'), this.adapter.append(t, this.closeButtonElement)), this.adapter.append(this.container, this.backgroundCanvas), this.adapter.append(this.container, this.tooltipElement), this.adapter.append(document.body, this.container), this._newContent = !0, this.redraw = !0 }, t.prototype.setContent = function(t) { return this.content = t, this._newContent = !0, typeof this.content == "function" ? (this._contentFunction = this.content, this.content = "") : this._contentFunction = null, this.visible ? this._updateElementContent() : void 0 }, t.prototype._updateElementContent = function() { var t; return (this._newContent || !this.options.cache && this._contentFunction) && (t = this.adapter.find(this.container, "." + this["class"].content), t != null && (this._contentFunction && (this.debug("Executing content function."), this.content = this._contentFunction(this)), this.adapter.update(t, this.content, this.options.escapeContent)), this._newContent = !1), this._storeAndLockDimensions(), this.reposition() }, t.prototype._storeAndLockDimensions = function() { var t; if (this.container) return t = this.dimensions, this.adapter.css(this.container, { width: "auto", left: "0px", top: "0px" }), this.dimensions = this.adapter.dimensions(this.container), this.dimensions.width += 1, this.adapter.css(this.container, { width: "" + this.dimensions.width + "px", top: "" + this.currentPosition.top + "px", left: "" + this.currentPosition.left + "px" }), this._dimensionsEqual(this.dimensions, t) ? void 0 : (this.redraw = !0, this._draw()) }, t.prototype.activate = function() { return this._setupObservers("hidden", "hiding") }, t.prototype.deactivate = function() { return this.debug("Deactivating tooltip."), this.hide(), this._setupObservers("-showing", "-visible", "-hidden", "-hiding") }, t.prototype._setupObservers = function() {
            var t, e, i, o, s, n, r, a, h, p, d, l, u, c, g, f, m = this;
            for (o = arguments.length >= 1 ? __slice.call(arguments, 0) : [], n = 0, p = o.length; p > n; n++)
                if (i = o[n], e = !1, i.charAt(0) === "-" && (e = !0, i = i.substr(1)), this.currentObservers[i] !== !e) switch (this.currentObservers[i] = !e, t = function() { var t, i, o; return t = arguments.length >= 1 ? __slice.call(arguments, 0) : [], e ? (i = m.adapter).stopObserving.apply(i, t) : (o = m.adapter).observe.apply(o, t) }, i) {
                    case "showing":
                        for (c = this.hideTriggers, r = 0, d = c.length; d > r; r++) s = c[r], t(s.element, s.event, this.bound.prepareToHide);
                        t(document.onresize != null ? document : window, "resize", this.bound.reposition), t(window, "scroll", this.bound.reposition);
                        break;
                    case "visible":
                        for (g = this.showTriggersWhenVisible, a = 0, l = g.length; l > a; a++) s = g[a], t(s.element, s.event, this.bound.prepareToShow);
                        break;
                    case "hiding":
                        for (f = this.showTriggers, h = 0, u = f.length; u > h; h++) s = f[h], t(s.element, s.event, this.bound.prepareToShow);
                        break;
                    case "hidden":
                        break;
                    default:
                        throw Error("Unknown state: " + i)
                }
            return null
        }, t.prototype.prepareToShow = function() { return this._abortHiding(), this._abortShowing(), this.visible ? void 0 : (this.debug("Showing in " + this.options.delay + "s."), this.container == null && this._setup(), this.options.group && t._abortShowingGroup(this.options.group, this), this.preparingToShow = !0, this._setupObservers("-hidden", "-hiding", "showing"), this._followMousePosition(), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this._showTimeoutId = this.setTimeout(this.bound.show, this.options.delay || 0)) }, t.prototype.show = function() { var e = this; return this._abortHiding(), this.visible ? void 0 : (this._clearTimeouts(), this._triggerElementExists() ? (this.debug("Showing now."), this.container == null && this._setup(), this.options.group && t._hideGroup(this.options.group, this), this.visible = !0, this.preparingToShow = !1, this.tooltipElement == null && this._buildElements(), this._updateElementContent(), !this.options.ajax || this.loaded && this.options.cache || this._loadAjax(), this._searchAndActivateCloseButtons(), this._startEnsureTriggerElement(), this.adapter.css(this.container, { zIndex: t.lastZIndex++ }), this._setupObservers("-hidden", "-hiding", "-showing", "-visible", "showing", "visible"), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this.adapter.removeClass(this.container, this["class"].hiding), this.adapter.removeClass(this.container, this["class"].hidden), this.adapter.addClass(this.container, this["class"].goingToShow), this.setCss3Style(this.container, { transitionDuration: "0s" }), this.defer(function() { var t; if (e.visible && !e.preparingToHide) return e.adapter.removeClass(e.container, e["class"].goingToShow), e.adapter.addClass(e.container, e["class"].showing), t = 0, e.options.showEffect && e.options.showEffectDuration && (t = e.options.showEffectDuration), e.setCss3Style(e.container, { transitionDuration: "" + t + "s" }), e._visibilityStateTimeoutId = e.setTimeout(function() { return e.adapter.removeClass(e.container, e["class"].showing), e.adapter.addClass(e.container, e["class"].visible) }, t), e._activateFirstInput() }), this._draw()) : this.deactivate()) }, t.prototype._abortShowing = function() { return this.preparingToShow ? (this.debug("Aborting showing."), this._clearTimeouts(), this._stopFollowingMousePosition(), this.preparingToShow = !1, this._setupObservers("-showing", "-visible", "hiding", "hidden")) : void 0 }, t.prototype.prepareToHide = function() { return this._abortShowing(), this._abortHiding(), this.visible ? (this.debug("Hiding in " + this.options.hideDelay + "s"), this.preparingToHide = !0, this._setupObservers("-showing", "visible", "-hidden", "hiding"), this._hideTimeoutId = this.setTimeout(this.bound.hide, this.options.hideDelay)) : void 0 }, t.prototype.hide = function() { var t = this; return this._abortShowing(), this.visible && (this._clearTimeouts(), this.debug("Hiding!"), this.visible = !1, this.preparingToHide = !1, this._stopEnsureTriggerElement(), this._setupObservers("-showing", "-visible", "-hiding", "-hidden", "hiding", "hidden"), this.options.fixed || this._stopFollowingMousePosition(), this.container) ? (this.adapter.removeClass(this.container, this["class"].visible), this.adapter.removeClass(this.container, this["class"].showing), this.adapter.addClass(this.container, this["class"].goingToHide), this.setCss3Style(this.container, { transitionDuration: "0s" }), this.defer(function() { var e; return t.adapter.removeClass(t.container, t["class"].goingToHide), t.adapter.addClass(t.container, t["class"].hiding), e = 0, t.options.hideEffect && t.options.hideEffectDuration && (e = t.options.hideEffectDuration), t.setCss3Style(t.container, { transitionDuration: "" + e + "s" }), t._visibilityStateTimeoutId = t.setTimeout(function() { return t.adapter.removeClass(t.container, t["class"].hiding), t.adapter.addClass(t.container, t["class"].hidden), t.setCss3Style(t.container, { transitionDuration: "0s" }), t.options.removeElementsOnHide ? (t.debug("Removing HTML elements."), t.adapter.remove(t.container), delete t.container, delete t.tooltipElement) : void 0 }, e) })) : void 0 }, t.prototype._abortHiding = function() { return this.preparingToHide ? (this.debug("Aborting hiding."), this._clearTimeouts(), this.preparingToHide = !1, this._setupObservers("-hiding", "showing", "visible")) : void 0 }, t.prototype.reposition = function() { var t, e, i, o = this; return t = this.getPosition(), t == null || (e = this.options.stem, this.options.containInViewport && (i = this._ensureViewportContainment(t), t = i.position, e = i.stem), this._positionsEqual(t, this.currentPosition)) ? void 0 : (this.options.stem && !e.eql(this.currentStem) && (this.redraw = !0), this.currentPosition = t, this.currentStem = e, this._draw(), this.adapter.css(this.container, { left: "" + t.left + "px", top: "" + t.top + "px" }), this.defer(function() { var t, e; return t = o.adapter.unwrap(o.container), t.style.visibility = "hidden", e = t.offsetHeight, t.style.visibility = "visible" })) }, t.prototype.getPosition = function(t, e, i) { var o, s, n, r, a, h, p, d, l; if (this.container) return t == null && (t = this.options.tipJoint), e == null && (e = this.options.targetJoint), r = {}, this.options.target ? (p = this.adapter.offset(this.options.target), h = this.adapter.dimensions(this.options.target), r = p, e.right ? (d = this.adapter.unwrap(this.options.target), d.getBoundingClientRect != null ? r.left = d.getBoundingClientRect().right + ((l = window.pageXOffset) != null ? l : document.body.scrollLeft) : r.left += h.width) : e.center && (r.left += Math.round(h.width / 2)), e.bottom ? r.top += h.height : e.middle && (r.top += Math.round(h.height / 2)), this.options.borderWidth && (this.options.tipJoint.left && (r.left += this.options.borderWidth), this.options.tipJoint.right && (r.left -= this.options.borderWidth), this.options.tipJoint.top ? r.top += this.options.borderWidth : this.options.tipJoint.bottom && (r.top -= this.options.borderWidth))) : r = this.initialMousePosition ? { top: this.initialMousePosition.y, left: this.initialMousePosition.x } : { top: mousePosition.y, left: mousePosition.x }, this.options.autoOffset && (a = this.options.stem ? this.options.stemLength : 0, n = a && this.options.fixed ? 2 : 10, o = t.middle && !this.options.fixed ? 15 : 0, s = t.center && !this.options.fixed ? 15 : 0, t.right ? r.left -= n + o : t.left && (r.left += n + o), t.bottom ? r.top -= n + s : t.top && (r.top += n + s), a && (i == null && (i = this.options.stem), i.right ? r.left -= a : i.left && (r.left += a), i.bottom ? r.top -= a : i.top && (r.top += a))), r.left += this.options.offset[0], r.top += this.options.offset[1], t.right ? r.left -= this.dimensions.width : t.center && (r.left -= Math.round(this.dimensions.width / 2)), t.bottom ? r.top -= this.dimensions.height : t.middle && (r.top -= Math.round(this.dimensions.height / 2)), r }, t.prototype._ensureViewportContainment = function(e) {
            var i, o, s, n, r, a, h, p, d, l, u, c;
            if (h = this.options.stem, s = { position: e, stem: h }, !this.visible || !e) return s;
            if (p = this._sticksOut(e), !p[0] && !p[1]) return s;
            if (l = new t.Joint(this.options.tipJoint), this.options.targetJoint && (d = new t.Joint(this.options.targetJoint)), a = this.adapter.scrollOffset(), u = this.adapter.viewportDimensions(), c = [e.left - a[0], e.top - a[1]], i = !1, u.width >= this.dimensions.width && p[0]) switch (i = !0, p[0]) {
                case this.STICKS_OUT_LEFT:
                    l.setHorizontal("left"), this.options.targetJoint && d.setHorizontal("right");
                    break;
                case this.STICKS_OUT_RIGHT:
                    l.setHorizontal("right"), this.options.targetJoint && d.setHorizontal("left")
            }
            if (u.height >= this.dimensions.height && p[1]) switch (i = !0, p[1]) {
                case this.STICKS_OUT_TOP:
                    l.setVertical("top"), this.options.targetJoint && d.setVertical("bottom");
                    break;
                case this.STICKS_OUT_BOTTOM:
                    l.setVertical("bottom"), this.options.targetJoint && d.setVertical("top")
            }
            return i ? (this.options.stem && (h = l), e = this.getPosition(l, d, h), o = this._sticksOut(e), n = !1, r = !1, o[0] && o[0] !== p[0] && (n = !0, l.setHorizontal(this.options.tipJoint.horizontal), this.options.targetJoint && d.setHorizontal(this.options.targetJoint.horizontal)), o[1] && o[1] !== p[1] && (r = !0, l.setVertical(this.options.tipJoint.vertical), this.options.targetJoint && d.setVertical(this.options.targetJoint.vertical)), n && r ? s : ((n || r) && (this.options.stem && (h = l), e = this.getPosition(l, d, h)), { position: e, stem: h })) : s
        }, t.prototype._sticksOut = function(t) { var e, i, o, s; return i = this.adapter.scrollOffset(), s = this.adapter.viewportDimensions(), e = [t.left - i[0], t.top - i[1]], o = [!1, !1], 0 > e[0] ? o[0] = this.STICKS_OUT_LEFT : e[0] + this.dimensions.width > s.width && (o[0] = this.STICKS_OUT_RIGHT), 0 > e[1] ? o[1] = this.STICKS_OUT_TOP : e[1] + this.dimensions.height > s.height && (o[1] = this.STICKS_OUT_BOTTOM), o }, t.prototype._draw = function() {
            var e, i, o, s, n, r, a, h, p, d, l, u, c, g, f, m, v, b, w, _ = this;
            if (this.backgroundCanvas && this.redraw) {
                if (this.debug("Drawing background."), this.redraw = !1, this.currentStem) {
                    for (v = ["top", "right", "bottom", "left"], f = 0, m = v.length; m > f; f++) u = v[f], this.adapter.removeClass(this.container, "stem-" + u);
                    this.adapter.addClass(this.container, "stem-" + this.currentStem.horizontal), this.adapter.addClass(this.container, "stem-" + this.currentStem.vertical)
                }
                return r = [0, 0], a = [0, 0], __indexOf.call(this.options.hideTriggers, "closeButton") >= 0 && (n = new t.Joint(((b = this.currentStem) != null ? b + "" : void 0) === "top right" ? "top left" : "top right"), r = [this.options.closeButtonRadius + this.options.closeButtonOffset[0], this.options.closeButtonRadius + this.options.closeButtonOffset[1]], a = [this.options.closeButtonRadius - this.options.closeButtonOffset[0], this.options.closeButtonRadius - this.options.closeButtonOffset[1]]), o = this.adapter.clone(this.dimensions), s = [0, 0], this.options.borderWidth && (o.width += this.options.borderWidth * 2, o.height += this.options.borderWidth * 2, s[0] -= this.options.borderWidth, s[1] -= this.options.borderWidth), this.options.shadow && (o.width += this.options.shadowBlur * 2, o.width += Math.max(0, this.options.shadowOffset[0] - this.options.shadowBlur * 2), o.height += this.options.shadowBlur * 2, o.height += Math.max(0, this.options.shadowOffset[1] - this.options.shadowBlur * 2), s[0] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[0]), s[1] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[1])), i = { left: 0, right: 0, top: 0, bottom: 0 }, this.currentStem && (this.currentStem.left ? i.left = this.options.stemLength : this.currentStem.right && (i.right = this.options.stemLength), this.currentStem.top ? i.top = this.options.stemLength : this.currentStem.bottom && (i.bottom = this.options.stemLength)), n && (n.left ? i.left = Math.max(i.left, a[0]) : n.right && (i.right = Math.max(i.right, a[0])), n.top ? i.top = Math.max(i.top, a[1]) : n.bottom && (i.bottom = Math.max(i.bottom, a[1]))), o.width += i.left + i.right, o.height += i.top + i.bottom, s[0] -= i.left, s[1] -= i.top, this.currentStem && this.options.borderWidth && (w = this._getPathStemMeasures(this.options.stemBase, this.options.stemLength, this.options.borderWidth), g = w.stemLength, c = w.stemBase), e = this.adapter.unwrap(this.backgroundCanvas), e.width = o.width, e.height = o.height, this.adapter.css(this.backgroundCanvas, { width: "" + e.width + "px", height: "" + e.height + "px", left: "" + s[0] + "px", top: "" + s[1] + "px" }), h = e.getContext("2d"), h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, e.width, e.height), h.beginPath(), h.fillStyle = this._getColor(h, this.dimensions, this.options.background, this.options.backgroundGradientHorizontal), h.lineJoin = "miter", h.miterLimit = 500, l = this.options.borderWidth / 2, this.options.borderWidth ? (h.strokeStyle = this.options.borderColor, h.lineWidth = this.options.borderWidth) : (g = this.options.stemLength, c = this.options.stemBase), c == null && (c = 0), d = function(t, e, i) { return i && h.moveTo(Math.max(c, _.options.borderRadius, r[0]) + 1 - l, -l), e ? (h.lineTo(t / 2 - c / 2, -l), h.lineTo(t / 2, -g - l), h.lineTo(t / 2 + c / 2, -l)) : void 0 }, p = function(t, e, i) { var o, s, n, a; return t ? (h.lineTo(-c + l, 0 - l), h.lineTo(g + l, -g - l), h.lineTo(l, c - l)) : e ? (a = _.options.closeButtonOffset, n = r[0], i % 2 !== 0 && (a = [a[1], a[0]], n = r[1]), o = Math.acos(a[1] / _.options.closeButtonRadius), s = Math.acos(a[0] / _.options.closeButtonRadius), h.lineTo(-n + l, -l), h.arc(l - a[0], -l + a[1], _.options.closeButtonRadius, -(Math.PI / 2 + o), s, !1)) : (h.lineTo(-_.options.borderRadius + l, -l), h.quadraticCurveTo(l, -l, l, _.options.borderRadius - l)) }, h.translate(-s[0], -s[1]), h.save(),
                    function() { var e, i, o, s, r, a, l, u, c, g, f; for (f = [], i = c = 0, g = t.positions.length / 2; g >= 0 ? g > c : c > g; i = g >= 0 ? ++c : --c) r = i * 2, a = i === 0 || i === 3 ? 0 : _.dimensions.width, l = 2 > i ? 0 : _.dimensions.height, u = Math.PI / 2 * i, o = i % 2 === 0 ? _.dimensions.width : _.dimensions.height, s = new t.Joint(t.positions[r]), e = new t.Joint(t.positions[r + 1]), h.save(), h.translate(a, l), h.rotate(u), d(o, s.eql(_.currentStem), i === 0), h.translate(o, 0), p(e.eql(_.currentStem), e.eql(n), i), f.push(h.restore()); return f }(), h.closePath(), h.save(), this.options.shadow && (h.shadowColor = this.options.shadowColor, h.shadowBlur = this.options.shadowBlur, h.shadowOffsetX = this.options.shadowOffset[0], h.shadowOffsetY = this.options.shadowOffset[1]), h.fill(), h.restore(), this.options.borderWidth && h.stroke(), h.restore(), n ? function() { var t, e, i, o, s; return i = e = _.options.closeButtonRadius * 2, n + "" == "top right" ? (s = [_.dimensions.width - _.options.closeButtonOffset[0], _.options.closeButtonOffset[1]], t = [s[0] + l, s[1] - l]) : (s = [_.options.closeButtonOffset[0], _.options.closeButtonOffset[1]], t = [s[0] - l, s[1] - l]), h.translate(t[0], t[1]), o = _.options.closeButtonCrossSize / 2, h.save(), h.beginPath(), h.strokeStyle = _.options.closeButtonCrossColor, h.lineWidth = _.options.closeButtonCrossLineWidth, h.lineCap = "round", h.moveTo(-o, -o), h.lineTo(o, o), h.stroke(), h.beginPath(), h.moveTo(o, -o), h.lineTo(-o, o), h.stroke(), h.restore(), _.adapter.css(_.closeButtonElement, { left: "" + (s[0] - o - _.options.closeButtonLinkOverscan) + "px", top: "" + (s[1] - o - _.options.closeButtonLinkOverscan) + "px", width: "" + (_.options.closeButtonCrossSize + _.options.closeButtonLinkOverscan * 2) + "px", height: "" + (_.options.closeButtonCrossSize + _.options.closeButtonLinkOverscan * 2) + "px" }) }() : void 0
            }
        }, t.prototype._getPathStemMeasures = function(t, e, i) { var o, s, n, r, a, h, p; if (r = i / 2, n = Math.atan(t / 2 / e), o = n * 2, a = r / Math.sin(o), s = 2 * a * Math.cos(n), p = r + e - s, 0 > p) throw Error("Sorry but your stemLength / stemBase ratio is strange."); return h = Math.tan(n) * p * 2, { stemLength: p, stemBase: h } }, t.prototype._getColor = function(t, e, i, o) { var s, n, r, a, h; if (o == null && (o = !1), typeof i == "string") return i; for (n = o ? t.createLinearGradient(0, 0, e.width, 0) : t.createLinearGradient(0, 0, 0, e.height), r = a = 0, h = i.length; h > a; r = ++a) s = i[r], n.addColorStop(s[0], s[1]); return n }, t.prototype._searchAndActivateCloseButtons = function() { var t, e, i, o; for (o = this.adapter.findAll(this.container, "." + this["class"].close), e = 0, i = o.length; i > e; e++) t = o[e], this.hideTriggers.push({ element: this.adapter.wrap(t), event: "click" }); return this.currentObservers.showing && this._setupObservers("-showing", "showing"), this.currentObservers.visible ? this._setupObservers("-visible", "visible") : void 0 }, t.prototype._activateFirstInput = function() { var t; return t = this.adapter.unwrap(this.adapter.find(this.container, "input, textarea")), t != null ? typeof t.focus == "function" ? t.focus() : void 0 : void 0 }, t.prototype._followMousePosition = function() { return this.options.fixed ? void 0 : t._observeMousePosition(this.bound.reposition) }, t.prototype._stopFollowingMousePosition = function() { return this.options.fixed ? void 0 : t._stopObservingMousePosition(this.bound.reposition) }, t.prototype._clearShowTimeout = function() { return clearTimeout(this._showTimeoutId) }, t.prototype._clearHideTimeout = function() { return clearTimeout(this._hideTimeoutId) }, t.prototype._clearTimeouts = function() { return clearTimeout(this._visibilityStateTimeoutId), this._clearShowTimeout(), this._clearHideTimeout() }, t.prototype._triggerElementExists = function() {
            var t;
            t = this.adapter.unwrap(this.triggerElement);
            while (t.parentNode) {
                if (t.parentNode.tagName === "BODY") return !0;
                t = t.parentNode
            }
            return !1
        }, t.prototype._loadAjax = function() { var t = this; if (!this.loading) return this.loaded = !1, this.loading = !0, this.adapter.addClass(this.container, this["class"].loading), this.setContent(""), this.debug("Loading content from " + this.options.ajax), this.adapter.ajax({ url: this.options.ajax, method: this.options.ajaxMethod, onSuccess: function(e) { return t.debug("Loading successful."), t.adapter.removeClass(t.container, t["class"].loading), t.setContent(e) }, onError: function(e) { var i; return i = t.options.ajaxErrorMessage, t.debug(i, e), t.setContent(i), t.adapter.addClass(t.container, t["class"].ajaxError) }, onComplete: function() { return t.adapter.removeClass(t.container, t["class"].loading), t.loading = !1, t.loaded = !0, t._searchAndActivateCloseButtons(), t._activateFirstInput(), t.reposition() } }) }, t.prototype._ensureTriggerElement = function() { return this._triggerElementExists() ? void 0 : (this.deactivate(), this._stopEnsureTriggerElement()) }, t.prototype._ensureTriggerElementInterval = 1e3, t.prototype._startEnsureTriggerElement = function() { var t = this; return this._ensureTriggerElementTimeoutId = setInterval(function() { return t._ensureTriggerElement() }, this._ensureTriggerElementInterval) }, t.prototype._stopEnsureTriggerElement = function() { return clearInterval(this._ensureTriggerElementTimeoutId) }, t
    }(), vendors = ["khtml", "ms", "o", "moz", "webkit"], Opentip.prototype.setCss3Style = function(t, e) {
        var i, o, s, n, r;
        t = this.adapter.unwrap(t), r = [];
        for (i in e) __hasProp.call(e, i) && (o = e[i], t.style[i] != null ? r.push(t.style[i] = o) : r.push(function() { var e, r, a; for (a = [], e = 0, r = vendors.length; r > e; e++) s = vendors[e], n = "" + this.ucfirst(s) + this.ucfirst(i), t.style[n] != null ? a.push(t.style[n] = o) : a.push(void 0); return a }.call(this)));
        return r
    }, Opentip.prototype.defer = function(t) { return setTimeout(t, 0) }, Opentip.prototype.setTimeout = function(t, e) { return setTimeout(t, e ? e * 1e3 : 0) }, Opentip.prototype.ucfirst = function(t) { return t == null ? "" : t.charAt(0).toUpperCase() + t.slice(1) }, Opentip.prototype.dasherize = function(t) { return t.replace(/([A-Z])/g, function(t, e) { return "-" + e.toLowerCase() }) }, mousePositionObservers = [], mousePosition = { x: 0, y: 0 }, mouseMoved = function(t) { var e, i, o, s; for (mousePosition = Opentip.adapter.mousePosition(t), s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], s.push(e()); return s }, Opentip.followMousePosition = function() { return Opentip.adapter.observe(document.body, "mousemove", mouseMoved) }, Opentip._observeMousePosition = function(t) { return mousePositionObservers.push(t) }, Opentip._stopObservingMousePosition = function(t) { var e; return mousePositionObservers = function() { var i, o, s; for (s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], e !== t && s.push(e); return s }() }, Opentip.Joint = function() {
        function t(t) { t != null && (t instanceof Opentip.Joint && (t += ""), this.set(t)) }
        return t.prototype.set = function(t) { return t = t.toLowerCase(), this.setHorizontal(t), this.setVertical(t), this }, t.prototype.setHorizontal = function(t) { var e, i, o, s, n, r, a; for (i = ["left", "center", "right"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.horizontal = e.toLowerCase()); for (this.horizontal == null && (this.horizontal = "center"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.horizontal === e ? e : void 0); return a }, t.prototype.setVertical = function(t) { var e, i, o, s, n, r, a; for (i = ["top", "middle", "bottom"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.vertical = e.toLowerCase()); for (this.vertical == null && (this.vertical = "middle"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.vertical === e ? e : void 0); return a }, t.prototype.eql = function(t) { return t != null && this.horizontal === t.horizontal && this.vertical === t.vertical }, t.prototype.flip = function() { var t, e; return e = Opentip.position[this.toString(!0)], t = (e + 4) % 8, this.set(Opentip.positions[t]), this }, t.prototype.toString = function(t) { var e, i; return t == null && (t = !1), i = this.vertical === "middle" ? "" : this.vertical, e = this.horizontal === "center" ? "" : this.horizontal, i && e && (e = t ? Opentip.prototype.ucfirst(e) : " " + e), "" + i + e }, t
    }(), Opentip.prototype._positionsEqual = function(t, e) { return t != null && e != null && t.left === e.left && t.top === e.top }, Opentip.prototype._dimensionsEqual = function(t, e) { return t != null && e != null && t.width === e.width && t.height === e.height }, Opentip.prototype.debug = function() { var t; return t = arguments.length >= 1 ? __slice.call(arguments, 0) : [], Opentip.debug && (typeof console != "undefined" && console !== null ? console.debug : void 0) != null ? (t.unshift("#" + this.id + " |"), console.debug.apply(console, t)) : void 0 }, Opentip.findElements = function() {
        var t, e, i, o, s, n, r, a, h, p;
        for (t = Opentip.adapter, h = t.findAll(document.body, "[data-ot]"), p = [], r = 0, a = h.length; a > r; r++) {
            i = h[r], n = {}, e = t.data(i, "ot"), (e === "" || e === "true" || e === "yes") && (e = t.attr(i, "title"), t.attr(i, "title", "")), e = e || "";
            for (o in Opentip.styles.standard) s = t.data(i, "ot" + Opentip.prototype.ucfirst(o)), s != null && (s === "yes" || s === "true" || s === "on" ? s = !0 : (s === "no" || s === "false" || s === "off") && (s = !1), n[o] = s);
            p.push(new Opentip(i, e, n))
        }
        return p
    }, Opentip.version = "2.4.6", Opentip.debug = !1, Opentip.lastId = 0, Opentip.lastZIndex = 100, Opentip.tips = [], Opentip._abortShowingGroup = function(t, e) { var i, o, s, n, r; for (n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], i !== e && i.options.group === t ? r.push(i._abortShowing()) : r.push(void 0); return r }, Opentip._hideGroup = function(t, e) { var i, o, s, n, r; for (n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], i !== e && i.options.group === t ? r.push(i.hide()) : r.push(void 0); return r }, Opentip.adapters = {}, Opentip.adapter = null, firstAdapter = !0, Opentip.addAdapter = function(t) { return Opentip.adapters[t.name] = t, firstAdapter ? (Opentip.adapter = t, t.domReady(Opentip.findElements), t.domReady(Opentip.followMousePosition), firstAdapter = !1) : void 0 }, Opentip.positions = ["top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"], Opentip.position = {}, _ref = Opentip.positions, i = _i = 0, _len = _ref.length; _len > _i; i = ++_i) position = _ref[i], Opentip.position[position] = i;
Opentip.styles = {
    standard: { "extends": null, title: void 0, escapeTitle: !0, escapeContent: !1, className: "standard", stem: !0, delay: null, hideDelay: .1, fixed: !1, showOn: "mouseover", hideTrigger: "trigger", hideTriggers: [], hideOn: null, removeElementsOnHide: !1, offset: [0, 0], containInViewport: !0, autoOffset: !0, showEffect: "appear", hideEffect: "fade", showEffectDuration: .3, hideEffectDuration: .2, stemLength: 5, stemBase: 8, tipJoint: "top left", target: null, targetJoint: null, cache: !0, ajax: !1, ajaxMethod: "GET", ajaxErrorMessage: "There was a problem downloading the content.", group: null, style: null, background: "#fff18f", backgroundGradientHorizontal: !1, closeButtonOffset: [5, 5], closeButtonRadius: 7, closeButtonCrossSize: 4, closeButtonCrossColor: "#d2c35b", closeButtonCrossLineWidth: 1.5, closeButtonLinkOverscan: 6, borderRadius: 5, borderWidth: 1, borderColor: "#f2e37b", shadow: !0, shadowBlur: 10, shadowOffset: [3, 3], shadowColor: "rgba(0, 0, 0, 0.1)" },
    glass: {
        "extends": "standard",
        className: "glass",
        background: [
            [0, "rgba(252, 252, 252, 0.8)"],
            [.5, "rgba(255, 255, 255, 0.8)"],
            [.5, "rgba(250, 250, 250, 0.9)"],
            [1, "rgba(245, 245, 245, 0.9)"]
        ],
        borderColor: "#eee",
        closeButtonCrossColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 15,
        closeButtonRadius: 10,
        closeButtonOffset: [8, 8]
    },
    dark: {
        "extends": "standard",
        className: "dark",
        borderRadius: 13,
        borderColor: "#444",
        closeButtonCrossColor: "rgba(240, 240, 240, 1)",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: [2, 2],
        background: [
            [0, "rgba(30, 30, 30, 0.7)"],
            [.5, "rgba(30, 30, 30, 0.8)"],
            [.5, "rgba(10, 10, 10, 0.8)"],
            [1, "rgba(10, 10, 10, 0.9)"]
        ]
    },
    alert: {
        "extends": "standard",
        className: "alert",
        borderRadius: 1,
        borderColor: "#AE0D11",
        closeButtonCrossColor: "rgba(255, 255, 255, 1)",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: [2, 2],
        background: [
            [0, "rgba(203, 15, 19, 0.7)"],
            [.5, "rgba(203, 15, 19, 0.8)"],
            [.5, "rgba(189, 14, 18, 0.8)"],
            [1, "rgba(179, 14, 17, 0.9)"]
        ]
    }
}, Opentip.defaultStyle = "standard", typeof module != "undefined" && module !== null ? module.exports = Opentip : window.Opentip = Opentip;
var __slice = [].slice;
(function(t) {
    var e;
    return t.fn.opentip = function(t, e, i) { return new Opentip(this, t, e, i) }, e = function() {
        function e() {}
        return e.prototype.name = "jquery", e.prototype.domReady = function(e) { return t(e) }, e.prototype.create = function(e) { return t(e) }, e.prototype.wrap = function(e) { if (e = t(e), e.length > 1) throw Error("Multiple elements provided."); return e }, e.prototype.unwrap = function(e) {
            return t(e)[0]
        }, e.prototype.tagName = function(t) { return this.unwrap(t).tagName }, e.prototype.attr = function() { var e, i, o; return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], (o = t(i)).attr.apply(o, e) }, e.prototype.data = function() { var e, i, o; return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], (o = t(i)).data.apply(o, e) }, e.prototype.find = function(e, i) { return t(e).find(i).get(0) }, e.prototype.findAll = function(e, i) { return t(e).find(i) }, e.prototype.update = function(e, i, o) { return e = t(e), o ? e.text(i) : e.html(i) }, e.prototype.append = function(e, i) { return t(e).append(i) }, e.prototype.remove = function(e) { return t(e).remove() }, e.prototype.addClass = function(e, i) { return t(e).addClass(i) }, e.prototype.removeClass = function(e, i) { return t(e).removeClass(i) }, e.prototype.css = function(e, i) { return t(e).css(i) }, e.prototype.dimensions = function(e) { return { width: t(e).outerWidth(), height: t(e).outerHeight() } }, e.prototype.scrollOffset = function() { return [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop] }, e.prototype.viewportDimensions = function() { return { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight } }, e.prototype.mousePosition = function(t) { return t == null ? null : { x: t.pageX, y: t.pageY } }, e.prototype.offset = function(e) { var i; return i = t(e).offset(), { left: i.left, top: i.top } }, e.prototype.observe = function(e, i, o) { return t(e).bind(i, o) }, e.prototype.stopObserving = function(e, i, o) { return t(e).unbind(i, o) }, e.prototype.ajax = function(e) { var i, o; if (e.url == null) throw Error("No url provided"); return t.ajax({ url: e.url, type: (i = (o = e.method) != null ? o.toUpperCase() : void 0) != null ? i : "GET" }).done(function(t) { return typeof e.onSuccess == "function" ? e.onSuccess(t) : void 0 }).fail(function(t) { return typeof e.onError == "function" ? e.onError("Server responded with status " + t.status) : void 0 }).always(function() { return typeof e.onComplete == "function" ? e.onComplete() : void 0 }) }, e.prototype.clone = function(e) { return t.extend({}, e) }, e.prototype.extend = function() { var e, i; return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], t.extend.apply(t, [i].concat(__slice.call(e))) }, e
    }(), Opentip.addAdapter(new e)
})(jQuery);

/* dt-language: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/themes/qfy-01/js/language.js) */
jQuery(function() {
    if (jQuery.datepicker) {
        jQuery.datepicker.regional['zh-CN'] = {
            clearText: 'æ¸…é™¤',
            clearStatus: 'æ¸…é™¤å·²é€‰æ—¥æœŸ',
            closeText: 'å…³é—­',
            closeStatus: 'ä¸æ”¹å˜å½“å‰é€‰æ‹©',
            prevText: '<ä¸Šæœˆ',
            prevStatus: 'æ˜¾ç¤ºä¸Šæœˆ',
            prevBigText: '<<',
            prevBigStatus: 'æ˜¾ç¤ºä¸Šä¸€å¹´',
            nextText: 'ä¸‹æœˆ>',
            nextStatus: 'æ˜¾ç¤ºä¸‹æœˆ',
            nextBigText: '>>',
            nextBigStatus: 'æ˜¾ç¤ºä¸‹ä¸€å¹´',
            currentText: 'ä»Šå¤©',
            currentStatus: 'æ˜¾ç¤ºæœ¬æœˆ',
            monthNames: ['ä¸€æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ', 'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åä¸€æœˆ', 'åäºŒæœˆ'],
            monthNamesShort: ['ä¸€', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­', 'ä¸ƒ', 'å…«', 'ä¹', 'å', 'åä¸€', 'åäºŒ'],
            monthStatus: 'é€‰æ‹©æœˆä»½',
            yearStatus: 'é€‰æ‹©å¹´ä»½',
            weekHeader: 'å‘¨',
            weekStatus: 'å¹´å†…å‘¨æ¬¡',
            dayNames: ['æ˜ŸæœŸæ—¥', 'æ˜ŸæœŸä¸€', 'æ˜ŸæœŸäºŒ', 'æ˜ŸæœŸä¸‰', 'æ˜ŸæœŸå››', 'æ˜ŸæœŸäº”', 'æ˜ŸæœŸå…­'],
            dayNamesShort: ['å‘¨æ—¥', 'å‘¨ä¸€', 'å‘¨äºŒ', 'å‘¨ä¸‰', 'å‘¨å››', 'å‘¨äº”', 'å‘¨å…­'],
            dayNamesMin: ['æ—¥', 'ä¸€', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­'],
            dayStatus: 'è®¾ç½® DD ä¸ºä¸€å‘¨èµ·å§‹',
            dateStatus: 'é€‰æ‹© mæœˆ dæ—¥, DD',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            initStatus: 'è¯·é€‰æ‹©æ—¥æœŸ',
            isRTL: false
        };

        jQuery.datepicker.regional['zh-TW'] = {
            clearText: 'æ¸…é™¤',
            clearStatus: 'æ¸…é™¤å·²é¸æ—¥æœŸ',
            closeText: 'é—œé–‰',
            closeStatus: 'ä¸æ”¹è®Šç•¶å‰é¸æ“‡',
            prevText: '<ä¸Šæœˆ',
            prevStatus: 'é¡¯ç¤ºä¸Šæœˆ',
            prevBigText: '<<',
            prevBigStatus: 'é¡¯ç¤ºä¸Šå£¹å¹´',
            nextText: 'ä¸‹æœˆ>',
            nextStatus: 'é¡¯ç¤ºä¸‹æœˆ',
            nextBigText: '>>',
            nextBigStatus: 'é¡¯ç¤ºä¸‹å£¹å¹´',
            currentText: 'ä»Šå¤©',
            currentStatus: 'é¡¯ç¤ºæœ¬æœˆ',
            monthNames: ['å£¹æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ', 'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åå£¹æœˆ', 'åäºŒæœˆ'],
            monthNamesShort: ['å£¹', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­', 'ä¸ƒ', 'å…«', 'ä¹', 'å', 'åå£¹', 'åäºŒ'],
            monthStatus: 'é¸æ“‡æœˆä»½',
            yearStatus: 'é¸æ“‡å¹´ä»½',
            weekHeader: 'å‘¨',
            weekStatus: 'å¹´å…§å‘¨æ¬¡',
            dayNames: ['æ˜ŸæœŸæ—¥', 'æ˜ŸæœŸå£¹', 'æ˜ŸæœŸäºŒ', 'æ˜ŸæœŸä¸‰', 'æ˜ŸæœŸå››', 'æ˜ŸæœŸäº”', 'æ˜ŸæœŸå…­'],
            dayNamesShort: ['å‘¨æ—¥', 'å‘¨å£¹', 'å‘¨äºŒ', 'å‘¨ä¸‰', 'å‘¨å››', 'å‘¨äº”', 'å‘¨å…­'],
            dayNamesMin: ['æ—¥', 'å£¹', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­'],
            dayStatus: 'è¨­ç½® DD ç‚ºå£¹å‘¨èµ·å§‹',
            dateStatus: 'é¸æ“‡ mæœˆ dæ—¥, DD',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            initStatus: 'è«‹é¸æ“‡æ—¥æœŸ',
            isRTL: false
        };
        if (dtGlobals.language == "") {
            jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-CN']);
        } else if (dtGlobals.language == "2") {
            jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-TW']);
        }
    }
    if (jQuery.timepicker) {
        jQuery.timepicker.regional['zh-CN'] = {
            currentText: 'å½“å‰æ—¶é—´',
            closeText: 'ç¡®è®¤',
            timeOnlyTitle: 'é€‰æ‹©æ—¶é—´',
            timeText: 'æ—¶é—´',
            hourText: 'å°æ—¶',
            minuteText: 'åˆ†é’Ÿ',
            secondText: 'ç§’',
            millisecText: 'æ¯«ç§’',
            timezoneText: 'æ—¶åŒº',
            isRTL: false
        };
        jQuery.timepicker.regional['zh-TW'] = {
            currentText: 'ç•¶å‰æ™‚é–“',
            closeText: 'ç¢ºèª',
            timeOnlyTitle: 'é¸æ“‡æ™‚é–“',
            timeText: 'æ™‚é–“',
            hourText: 'å°æ™‚',
            minuteText: 'åˆ†é˜',
            secondText: 'ç§’',
            millisecText: 'æ¯«ç§’',
            timezoneText: 'æ™‚å€',
            isRTL: false
        };
        if (dtGlobals.language == "") {
            jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-CN']);
        } else if (dtGlobals.language == "2") {
            jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-TW']);
        }
    }

});

/* dt-main: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-content/themes/qfy-01/js/main.js) */
//æ‚¬æµ®æ•ˆæžœ
(function($) {
    $.fn.floatAd = function(l) {
        var m = { customhtml: "", close: 1, closeHTML: "", speed: 30, id_class: "", x: "0", y: "0" };
        var n = false;
        var l = $.extend(m, l);
        var o = "<div id='qfy_float_ad' class='" + l.id_class + "' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";
        o += l.customhtml;
        if (l.close == "1") { if (l.closeHTML == "") { o += "<div id='qfy_close_f_ad' class='" + l.id_class + "' style='position:absolute;width:30px;height:16px;top:-18px;right:0px;cursor:pointer;float:right;font-size:14px'>å…³é—­</div></div>" } else { o += "<div id='qfy_close_f_ad' class='" + l.id_class + "' >" + l.closeHTML + "</div></div>" } }
        $('body').append(o);

        function qfy_ad_init() {
            var x = l.x,
                y = l.y + $(window).scrollTop();
            var g = true,
                yin = true;
            var h = 1;
            var i = 10;
            var j = $("#qfy_float_ad." + l.id_class);
            var k = function() {
                var L = 0,
                    T = $(window).scrollTop();
                var a = j.width();
                var b = j.height();
                var c = $(window).width();
                var d = $(window).height() + $(window).scrollTop();
                x = x + h * (g ? 1 : -1);
                if (x < L) {
                    g = true;
                    x = L
                }
                if (x > c - a - 1) {
                    g = false;
                    x = c - a - 1
                }
                y = y + h * (yin ? 1 : -1);
                if (y > d - b - 10) {
                    yin = false;
                    y = d - b - 10
                }
                if (y < T) {
                    yin = true;
                    y = T
                }
                var e = x;
                var f = y;
                j.css({ 'top': f, 'left': e })
            };
            n = setInterval(k, l.speed);
            $('#qfy_float_ad.' + l.id_class).mouseover(function() { if (n) { clearInterval(n) } });
            $('#qfy_float_ad.' + l.id_class).mouseout(function() { n = setInterval(k, l.speed) })
        }
        qfy_ad_init();
        $('#qfy_close_f_ad.' + l.id_class).click(function() {
            $('#qfy_float_ad.' + l.id_class + ',#QFY_overlay.' + l.id_class).remove();
            clearInterval(n)
        })
    }
})(jQuery);

//èƒŒæ™¯å›¾ç‰‡è‡ªé€‚åº”
//https://css-tricks.com/almanac/properties/o/object-fit/
(function($) {
    function coverFillSwitch(container, img, invert) {
        if (!container || !img) { return false }
        var imgHeight = img.naturalHeight || img.videoHeight;
        var imgWidth = img.naturalWidth || img.videoWidth;
        var containerRatio = container.offsetWidth / container.offsetHeight;
        var imgRatio = imgWidth / imgHeight;
        var ratioComparison = false;
        if (imgRatio >= containerRatio) { ratioComparison = true }
        if (invert) { ratioComparison = !ratioComparison }
        if (ratioComparison) {
            img.style.height = "100%";
            img.style.width = "auto"
        } else {
            img.style.height = "auto";
            img.style.width = "100%"
        }
    }

    function objectFitResize() {
        var i, img, container;
        var imgsCover = document.getElementsByClassName("section-background-video");
        for (i = 0; i < imgsCover.length; i++) {
            img = imgsCover[i];
            container = img.parentElement;
            if (container.classList.contains("background-media")) { coverFillSwitch(container, img) }
        }
    }

    function applyStandardProperties(container, img) {
        var containerStyle = window.getComputedStyle(container);
        if (containerStyle.overflow !== "hidden") { container.style.overflow = "hidden" }
        if (containerStyle.position !== "relative" && containerStyle.position !== "absolute" && containerStyle.position !== "fixed") { container.style.position = "relative" }
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%,-50%)"
    }

    function objectFitInt() {
        var imgs = document.getElementsByClassName("section-background-video");
        for (var i = 0; i < imgs.length; i++) {
            var type = "cover";
            var img = imgs[i];
            var container = img.parentElement;
            switch (type) {
                case "container":
                    break;
                case "cover":
                    coverFillSwitch(container, img);
                    applyStandardProperties(container, img);
                    break;
                case "contain":
                    coverFillSwitch(container, img, true);
                    applyStandardProperties(container, img);
                    break;
                case "fill":
                    img.style.height = "100%";
                    img.style.width = "100%";
                    applyStandardProperties(container, img);
                    break;
                case "none":
                    img.style.height = "auto";
                    img.style.width = "auto";
                    applyStandardProperties(container, img);
                    break;
                case "scale-down":
                    img.style.maxHeight = "100%";
                    img.style.maxWidth = "100%";
                    img.style.height = "auto";
                    img.style.width = "auto";
                    applyStandardProperties(container, img);
                    break;
                default:
                    break
            }
        }
    }
    var resizeTimeout;

    function resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function() {
                resizeTimeout = null;
                objectFitResize()
            }, 66)
        }
    }
    if ("objectFit" in document.documentElement.style === false && top == self) {
        window.addEventListener("load", objectFitInt, false);
        window.addEventListener("resize", resizeThrottler, false)
    }
})(jQuery);

function resetSectionHeight() {
    var h = jQuery(window).height();
    var body_w = jQuery("body").width();
    if (body_w > 760) {
        if (jQuery(".section.minperheight100:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight100:not(.fixheight)").css("min-height", h + "px");
        }
        if (jQuery(".section.minperheight90:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight90:not(.fixheight)").css("min-height", 0.9 * h + "px");
        }
        if (jQuery(".section.minperheight80:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight80:not(.fixheight)").css("min-height", 0.8 * h + "px");
        }
        if (jQuery(".section.minperheight70:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight70:not(.fixheight)").css("min-height", 0.7 * h + "px");
        }
        if (jQuery(".section.minperheight60:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight60:not(.fixheight)").css("min-height", 0.6 * h + "px");
        }
        if (jQuery(".section.minperheight50:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight50:not(.fixheight)").css("min-height", 0.5 * h + "px");
        }
        if (jQuery(".section.minperheight40:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight40:not(.fixheight)").css("min-height", 0.4 * h + "px");
        }
        if (jQuery(".section.minperheight30:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight30:not(.fixheight)").css("min-height", 0.3 * h + "px");
        }
        if (jQuery(".section.minperheight20:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight20:not(.fixheight)").css("min-height", 0.2 * h + "px");
        }
        if (jQuery(".section.minperheight15:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight15:not(.fixheight)").css("min-height", 0.15 * h + "px");
        }
        if (jQuery(".section.minperheight10:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight10:not(.fixheight)").css("min-height", 0.1 * h + "px");
        }
        if (jQuery(".section.minperheight5:not(.fixheight)").length > 0) {
            jQuery(".section.minperheight5:not(.fixheight)").css("min-height", 0.05 * h + "px");
        }
        jQuery(".section.fixheight").each(function() {
            var fixheight = jQuery(this).attr("data-fixheight");
            var w = jQuery(this).width();
            if (w > 0) {
                var h = w * fixheight;
                jQuery(this).height(h);
                jQuery(this).css("min-height", h + "px");
            }
        });
        jQuery(".qfy-column-inner.fixheight").each(function() {
            var fixheight = jQuery(this).attr("data-fixheight");
            var w = jQuery(this).width();
            if (w > 0) {
                var h = w * fixheight;
                if (jQuery(this).closest(".section.fixheight").length > 0) {
                    h = jQuery(this).closest(".section.fixheight").height();
                }
                jQuery(this).height(h);
                jQuery(this).css("min-height", h + "px");
                jQuery(this).find(">.column_inner").css("min-height", h + "px");
            }
        })
    } else {
        if (jQuery(".section.minperheight100").length > 0) {
            jQuery(".section.minperheight100").css("min-height", h + "px");
        }
        if (jQuery(".section.minperheight90").length > 0) {
            jQuery(".section.minperheight90").css("min-height", 0.9 * h + "px");
        }
        if (jQuery(".section.minperheight80").length > 0) {
            jQuery(".section.minperheight80").css("min-height", 0.8 * h + "px");
        }
        if (jQuery(".section.minperheight70").length > 0) {
            jQuery(".section.minperheight70").css("min-height", 0.7 * h + "px");
        }
        if (jQuery(".section.minperheight60").length > 0) {
            jQuery(".section.minperheight60").css("min-height", 0.6 * h + "px");
        }
        if (jQuery(".section.minperheight50").length > 0) {
            jQuery(".section.minperheight50").css("min-height", 0.5 * h + "px");
        }
        if (jQuery(".section.minperheight40").length > 0) {
            jQuery(".section.minperheight40").css("min-height", 0.4 * h + "px");
        }
        if (jQuery(".section.minperheight30").length > 0) {
            jQuery(".section.minperheight30").css("min-height", 0.3 * h + "px");
        }
        if (jQuery(".section.minperheight20").length > 0) {
            jQuery(".section.minperheight20").css("min-height", 0.2 * h + "px");
        }
        if (jQuery(".section.minperheight15").length > 0) {
            jQuery(".section.minperheight15").css("min-height", 0.15 * h + "px");
        }
        if (jQuery(".section.minperheight10").length > 0) {
            jQuery(".section.minperheight10").css("min-height", 0.1 * h + "px");
        }
        if (jQuery(".section.minperheight5").length > 0) {
            jQuery(".section.minperheight5").css("min-height", 0.05 * h + "px");
        }
    }
}

var last_size_mobile = false;
var size_mobile = false;

function resizeDefaultObjSize() {
    if (dtGlobals.isMobile == false) {
        if (jQuery("body").width() < 768) {
            size_mobile = "mobile";
            if (!last_size_mobile) last_size_mobile = "mobile";
        } else {
            size_mobile = "pc";
            if (!last_size_mobile) last_size_mobile = "pc";
        }
        if (size_mobile != last_size_mobile) {
            last_size_mobile = size_mobile;
            jQuery(".qfy-element").each(function() {
                var m_padding = jQuery(this).attr("m-padding");
                var p_padding = jQuery(this).attr("p-padding");
                if (size_mobile == "mobile") {
                    if (m_padding) {
                        jQuery(this).css("padding", m_padding);
                    }
                } else {
                    if (p_padding) {
                        jQuery(this).css("padding", p_padding);
                    }
                }

            });

        }
    }


    if (jQuery(".qfe_map_wraper iframe").length > 0) {
        jQuery(".qfe_map_wraper iframe").each(function() {
            var oh = jQuery(this).parent().attr("style");
            if (typeof(oh) == "undefined") {
                var width = jQuery(this).width();
                if (width > 0) {
                    jQuery(this).parent().height((width * 2 / 4) + "px");
                }
            }
        })
    }
    if (jQuery(".vc_bit_raw_video").length > 0) {
        jQuery(".vc_bit_raw_video").each(function() {
            var oh = jQuery(this).attr("style");
            if (typeof(oh) == "undefined") {
                var width = jQuery(this).width();
                if (width > 0) {
                    jQuery(this).height((width * 2 / 4) + "px");
                }
            }
        })
    }
    resetSectionHeight();
    column_init_align();
}

function resize_royalSlider_gallery_new(org_obj) {
    jQuery(".qfy-tabcontent .royalSlider_gallery_new").each(function() {
        var obj = jQuery(this);
        setTimeout(function() {
            var h1 = obj.find(".rsOverflow").height();
            var h2 = obj.find(".rsSlide.rsActiveSlide").height();
            if (h2 > 0 && h1 != h2) {
                obj.find(".rsOverflow").height(h2);
            }
        }, 200);
    })

}

function searchForm(obj) {
    if (typeof(obj) == "undefined") {
        obj = jQuery('.site_tooler .searchform .submit,.search_contain .searchform .submit');
    }

    /*--search*/
    obj.on('click', function(e) {
        e.preventDefault();
        jQuery(this).siblings('input.searchsubmit').click();
        return false;
    });

}

function qfy_setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function mobile_menu_fix() {
    var top_scrTop = 0,
        top_scrDir = 0,
        top_scrUp = false,
        top_scrDown = false,
        top_isMoved = false;
    var top_threshold = jQuery("#dl-menu").offset().top + jQuery("#dl-menu").height();

    jQuery(window).on("scroll", function() {
        var top_tempCSS = {},
            top_tempScrTop = jQuery(window).scrollTop();

        top_scrDir = top_tempScrTop - top_scrTop;

        if (top_tempScrTop > top_threshold && top_isMoved === false) {
            top_isMoved = true;
            jQuery("#dl-menu").addClass("positionFixed");
        } else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
            top_isMoved = false;
            jQuery("#dl-menu").removeClass("positionFixed");
        };
        top_scrTop = jQuery(window).scrollTop();

    });
}

function mobile_menu_fix_2() {
    var top_scrTop = 0,
        top_scrDir = 0,
        top_scrUp = false,
        top_scrDown = false,
        top_isMoved = false;
    var top_threshold = jQuery(".dl-menu-fixedheader").height();

    jQuery(window).on("scroll", function() {
        var top_tempCSS = {},
            top_tempScrTop = jQuery(window).scrollTop();

        top_scrDir = top_tempScrTop - top_scrTop;

        if (top_tempScrTop > top_threshold && top_isMoved === false) {
            top_isMoved = true;
            jQuery(".dl-menu-fixedheader").css("position", "fixed");
            jQuery("body").addClass("fixedheadering");
        } else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
            top_isMoved = false;
            jQuery(".dl-menu-fixedheader").css("position", "relative");
            jQuery("body").removeClass("fixedheadering");
        };
        top_scrTop = jQuery(window).scrollTop();

    });
}

function _image_popup_flexslider(startAt) {
    jQuery(".image_popup .qfe_flexslider").flexslider({
        animation: "slide",
        slideshow: false,
        slideshowSpeed: 10000,
        sliderSpeed: 800,
        controlNav: 1,
        directionNav: 1,
        smoothHeight: true,
        startAt: startAt,
        start: function() {
            var localvideo = jQuery(".image_popup .flex-active-slide video.localvideo");
            if (localvideo.length > 0) {
                if (localvideo.get(0).currentTime == 0) {
                    jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
                }
            }
            var videoiframe = jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
            if (videoiframe.length > 0 && !videoiframe.attr("src")) {
                videoiframe.attr("src", videoiframe.attr("data-src"));
            }
        },
        before: function() {
            //var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
            //if(localvideo.length>0){
            //jQuery(".image_popup .flex-active-slide video.localvideo").get(0).stop();
            // }
        },
        after: function() {
            var localvideo = jQuery(".image_popup .flex-active-slide video.localvideo");
            if (localvideo.length > 0) {
                if (localvideo.get(0).currentTime == 0) {
                    jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
                }
            }
            var videoiframe = jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
            if (videoiframe.length > 0 && !videoiframe.attr("src")) {
                videoiframe.attr("src", videoiframe.attr("data-src"));
            }
        },
    });
}

function initmouseover() {

    jQuery(".mouseHover").live({
        mouseenter: function() {
            jQuery(this).addClass("hover");

        },
        mouseleave: function() {
            jQuery(this).removeClass("hover");
        }
    });
    jQuery("a.bitButton").live({
        mouseenter: function() {
            var delay = jQuery(this).attr("delay");
            var str = "";
            if (delay && delay != "0") {
                str = "all " + delay + " linear";
            }
            var texthovercolor = jQuery(this).attr("texthovercolor");
            if (texthovercolor) {
                jQuery(this).find(".iconText").css("color", texthovercolor);
                jQuery(this).find(".iconText").css("transition", str);
            }
            var iconhovercolor = jQuery(this).attr("iconhovercolor");
            if (iconhovercolor) {
                jQuery(this).find("i.glyphicon").css("color", iconhovercolor);
                jQuery(this).find("i.glyphicon").css("transition", str);
            }
            var backgroundhovercolor = jQuery(this).attr("backgroundhovercolor");
            if (backgroundhovercolor) {
                jQuery(this).css("background", backgroundhovercolor);
                jQuery(this).css("transition", str);
                jQuery(this).removeAttr('onmouseover');
                jQuery(this).removeAttr('onmouseout');
            }
            var borderhovercolor = jQuery(this).attr("borderhovercolor");
            if (borderhovercolor) {
                jQuery(this).css("border", "1px solid " + borderhovercolor);
                jQuery(this).css("transition", str);
            }
        },
        mouseleave: function() {
            jQuery(this).css("transition", "");
            var textcolor = jQuery(this).attr("textcolor");
            if (textcolor) {
                jQuery(this).find(".iconText").css("color", textcolor);
            }
            var iconcolor = jQuery(this).attr("iconcolor");
            if (iconcolor) {
                jQuery(this).find("i.glyphicon").css("color", iconcolor);
            }
            var backgroundcolor = jQuery(this).attr("backgroundcolor");
            if (backgroundcolor) {
                jQuery(this).css("background", backgroundcolor);
            }
            var bordercolor = jQuery(this).attr("bordercolor");
            if (bordercolor) {
                jQuery(this).css("border-color", bordercolor);
            }
        }
    });

    jQuery("a.bitIcon").live({
        mouseenter: function() {
            var delay = jQuery(this).attr("delay");
            var str = "";
            if (delay && delay != "0") {
                str = "all " + delay + " linear";
            }
            var texthovercolor = jQuery(this).attr("texthovercolor");
            if (texthovercolor) {
                jQuery(this).find(".iconText").css("color", texthovercolor);
                jQuery(this).find(".iconText").css("transition", str);
            }
            var iconhovercolor = jQuery(this).attr("iconhovercolor");
            if (iconhovercolor) {
                jQuery(this).find("i.glyphicon").css("color", iconhovercolor);
                jQuery(this).find("i.glyphicon").css("transition", str);
            }
            var backgroundhovercolor = jQuery(this).attr("backgroundhovercolor");
            if (backgroundhovercolor) {
                jQuery(this).find("b").css("background", backgroundhovercolor);
                jQuery(this).find("b").css("transition", str);
                jQuery(this).find("b").removeAttr('onmouseover');
                jQuery(this).find("b").removeAttr('onmouseout');
            }
            var borderhovercolor = jQuery(this).attr("borderhovercolor");
            if (borderhovercolor) {
                jQuery(this).find("b").css("border", "1px solid " + borderhovercolor);
                jQuery(this).find("b").css("transition", str);
            }
        },
        mouseleave: function() {
            jQuery(this).css("transition", "");
            var textcolor = jQuery(this).attr("textcolor");
            if (textcolor) {
                jQuery(this).find(".iconText").css("color", textcolor);
            }
            var iconcolor = jQuery(this).attr("iconcolor");
            if (iconcolor) {
                jQuery(this).find("i.glyphicon").css("color", iconcolor);
            }
            var backgroundcolor = jQuery(this).attr("backgroundcolor");
            if (backgroundcolor) {
                jQuery(this).find("b").css("background", backgroundcolor);
            }
            var bordercolor = jQuery(this).attr("bordercolor");
            if (bordercolor) {
                jQuery(this).find("b").css("border-color", bordercolor);
            }
        }
    });

    jQuery("a.qfy_popup").live({
        click: function(e) {
            e.preventDefault();
            e.stopPropagation();
            var popupmodel = jQuery(this).attr("data-popup-model");
            var popupstyle = jQuery(this).attr("data-popup-style");
            var popupsize = jQuery(this).attr("data-popup-size");
            var bodywidth = jQuery("body").width();
            var bodyheight = jQuery(window).height();

            if (popupstyle == "0" || popupstyle == "1") {
                if (popupsize == "0.8") {
                    var width = bodywidth * 0.8;
                    var height = bodyheight * 0.8;
                    var toppx = bodyheight * 0.1;
                    var leftpx = bodywidth * 0.1;
                } else if (popupsize == "0.6") {
                    var width = bodywidth * 0.6;
                    var height = bodyheight * 0.6;
                    var toppx = bodyheight * 0.2;
                    var leftpx = bodywidth * 0.2;
                } else if (popupsize == "0.4") {
                    var width = bodywidth * 0.4;
                    var height = bodyheight * 0.4;
                    var toppx = bodyheight * 0.3;
                    var leftpx = bodywidth * 0.3;
                }
            } else if (popupstyle == "2") {
                if (popupsize == "0.8") {
                    var width = bodywidth * 0.5;
                    var height = bodyheight * 0.5;
                    var toppx = bodyheight * 0.25;
                    var leftpx = bodywidth * 0.25;
                } else if (popupsize == "0.6") {
                    var width = bodywidth * 0.3;
                    var height = bodyheight * 0.5;
                    var toppx = bodyheight * 0.25;
                    var leftpx = bodywidth * 0.35;
                } else if (popupsize == "0.4") {
                    var width = bodywidth * 0.2;
                    var height = bodyheight * 0.5;
                    var toppx = bodyheight * 0.25;
                    var leftpx = bodywidth * 0.4;
                }
            }
            var defaultpadding = "padding:40px;";
            if (width < 480) {
                width = 320;
                leftpx = (bodywidth - 320) * 0.5;
                if (popupstyle == "1") popupstyle = "2";
                if (popupstyle != "2") {
                    height = 250;
                    toppx = (bodyheight - 250) * 0.5;
                }
                defaultpadding = "padding:10px;";
            }
            var allmessage = "";
            var startAt = 0;
            if (popupmodel == "0") {
                var default_img = jQuery(this).attr("data-href");
                var title = jQuery(this).attr("data-ptitle");
                var subtitle = jQuery(this).attr("data-subtitle");
                var desc = jQuery(this).attr("data-desc");
                var isvideo = jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").length;
                var isyunvideo = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
                var video_html = "";
                var videoclass = "";
                if (isvideo) {
                    videoclass = "video";
                    var video_html = jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").prop("outerHTML");
                    video_html = jQuery(video_html).attr("controls", "controls").attr("class", "localvideo simple").attr("style", "width:100%;height:100%;background:#000;").prop("outerHTML");

                } else if (isyunvideo) {
                    videoclass = "video";
                    var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
                    var videoheight = height;
                    if (popupstyle == "2") {
                        videoheight = 0.6 * height;
                    }
                    video_html = jQuery(video_html).attr("data-height", videoheight).attr("data-autoplay", "true").attr("src", jQuery(video_html).attr("data-src")).prop("outerHTML");
                }
                if (default_img || video_html) {
                    var message = "";
                    if (popupstyle == "0") {
                        message = '<div class="pop_image pop_image1 ' + videoclass + '" style="width:' + width + 'px;word-wrap: break-word;height:' + height + 'px;background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;">' + video_html + '<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="content" style="color:#ccc;font-size:14px;">' + desc + '</div></div></div>';
                    } else if (popupstyle == "1") {
                        message = '<div class="pop_image pop_image2 ' + videoclass + '" style="width:' + width + 'px;word-wrap: break-word;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">' + video_html + '</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div> </div>';
                    } else if (popupstyle == "2") {
                        message = '<div class="pop_image pop_image3 ' + videoclass + '" style="width:' + width + 'px;word-wrap: break-word;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">' + video_html + '</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;' + defaultpadding + 'text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div>  </div>';
                    }
                    allmessage = '<div class="image_popup" style="position:relative;">' + message + '<div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">âœ•</div></div>';
                }

            } else {
                var p = jQuery(this).closest(".qfy-element");
                var $thispost = jQuery(this).closest(".qfy_item_post");

                var message = "";
                p.find(".qfy_item_post:visible").each(function(i) {
                    if (jQuery(this)[0] === $thispost[0]) {
                        startAt = i;
                    }
                    $this = jQuery(this).find("a.qfy_popup:first");
                    var default_img = $this.attr("data-href");
                    var title = $this.attr("data-ptitle");
                    var subtitle = $this.attr("data-subtitle");
                    var desc = $this.attr("data-desc");
                    var video_html = "";
                    var isvideo = jQuery(this).find("video.qfyvideo").length;
                    var isyunvideo = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
                    var videoclass = "";
                    if (isvideo) {
                        var video_html = jQuery(this).find("video.qfyvideo").prop("outerHTML");
                        video_html = jQuery(video_html).attr("controls", "controls").attr("class", "localvideo").attr("style", "width:100%;height:100%;background:#000;").prop("outerHTML");
                        videoclass = "video";
                    } else if (isyunvideo) {
                        var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
                        videoclass = "video";
                        var videoheight = height;
                        if (popupstyle == "2") {
                            videoheight = 0.6 * height;
                        }
                        video_html = jQuery(video_html).attr("data-height", videoheight).attr("data-autoplay", "true").prop("outerHTML");

                    }
                    if (default_img || video_html) {
                        if (popupstyle == "0") {
                            message += '<li><div class="pop_image pop_image1 ' + videoclass + '" style="position:relative;word-wrap: break-word;width:' + width + 'px;height:' + height + 'px;background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;">' + video_html + '<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="content" style="color:#ccc;font-size:14px;">' + desc + '</div></div></div></li>';
                        } else if (popupstyle == "1") {
                            message += '<li><div class="pop_image pop_image2 ' + videoclass + '" style="position:relative;word-wrap: break-word;width:' + width + 'px;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">' + video_html + '</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div> </div></li>';
                        } else if (popupstyle == "2") {
                            message += '<li><div class="pop_image pop_image3 ' + videoclass + '" style="position:relative;word-wrap: break-word;width:' + width + 'px;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">' + video_html + '</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;padding:40px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div>  </div></li>';
                        }
                    }
                });
                allmessage = '<div class="image_popup" style="position:relative;"><div  class="qfe_flexslider flexslider_slide flexslider" data-interval="30" data-flex_fx="slide" data-bottom_nav="1" data-direction="1"><ul class="slides">' + message + '</ul> </div><div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">âœ•</div></div>';
            }
            if (allmessage) {
                jQuery.blockUI({
                    onOverlayClick: jQuery.unblockUI,
                    overlayCSS: {
                        backgroundColor: '#000',
                        opacity: 0.8,
                        cursor: 'pointer',
                        "z-index": "9400",
                    },
                    css: { "top": toppx + "px", "left": leftpx, width: width + "px", height: height + "px", cursor: 'pointer', "border": "0", "z-index": "9401" },
                    message: allmessage
                });
                jQuery(".localvideo.simple").attr("autoplay", "autoplay");
                jQuery('.block-close').css('cursor', 'pointer').unbind().click(function() {
                    jQuery.unblockUI();
                });
                if (jQuery(".pop_image2 .content.overflowy").length > 0) {
                    var h = jQuery(".pop_image2").height();
                    var head = jQuery(".pop_image2 .head").height() + jQuery(".pop_image2 .subhead").height();
                    jQuery(".pop_image2 .content.overflowy").height(h - head - 60);
                } else if (jQuery(".pop_image3 .content.overflowy").length > 0) {
                    var h = jQuery(".content_inner").height();
                    var head = jQuery(".pop_image3 .head").height() + jQuery(".pop_image3 .subhead").height();
                    jQuery(".pop_image3 .content.overflowy").height(h - head);
                }

                if (jQuery(".image_popup .qfe_flexslider").length > 0) {
                    if (typeof jQuery.fn.flexslider == "undefined") {
                        jQuery.getScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js").done(function() {
                            jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
                            _image_popup_flexslider(startAt);
                        })
                    } else {
                        _image_popup_flexslider(startAt);
                    }
                }
            }
        }
    });

    jQuery("a.qfy_thickbox").live({
        click: function(e) {
            e.preventDefault();
            if (top.jQuery(".qfy_gallerys").length > 0) {
                return false;
            }
            var default_img = jQuery(this).attr("href");
            var thumbPath = jQuery(this).attr("thumbPath");
            if (!thumbPath) thumbPath = default_img;
            var i = 0;
            var qfy_imglists = Array();
            jQuery("a.qfy_thickbox").each(function() {
                var href = jQuery(this).attr("href");
                var thumbPath = jQuery(this).attr("thumbPath");
                if (!thumbPath) thumbPath = href;

                if (href != default_img && href != undefined) {
                    qfy_imglists[i] = href + "|^|" + thumbPath;
                    i++;
                }
            })

            top.jQuery("body").append('<div class="qfy_gallerys" style="position:fixed;top:0;left:0;width:100%;height:0;z-index:20000;"><iframe src="/FeiEditor/bitSite/gallerys?bgcolor=' + encodeURIComponent(dtGlobals.gallery_bgcolor) + '&tfamily=' + encodeURIComponent(dtGlobals.gallery_tfamily) + '&dfamily=' + encodeURIComponent(dtGlobals.gallery_dfamily) + '&blankclose=' + encodeURIComponent(dtGlobals.gallery_blankclose) + '&showthumbs=' + dtGlobals.gallery_showthumbs + '&style=' + dtGlobals.gallery_style + '&autoplay=' + dtGlobals.gallery_autoplay + '&playspeed=' + dtGlobals.gallery_playspeed + '&imagesize=' + dtGlobals.gallery_imagesize + '&stopbutton=' + dtGlobals.gallery_stopbutton + '&thumbsposition=' + dtGlobals.gallery_thumbsposition + '&tsize=' + dtGlobals.gallery_tsize + '&tcolor=' + encodeURIComponent(dtGlobals.gallery_tcolor) + '&dsize=' + dtGlobals.gallery_dsize + '&dcolor=' + encodeURIComponent(dtGlobals.gallery_dcolor) + '&default_img=' + default_img + '&thumbPath=' + thumbPath + '&time=' + Math.random() + '" width="100%" height="100%" border=0 style="border:0;" /></div>')
            top.jQuery(".qfy_gallerys").animate({ height: "100%" });
            return false;
        }
    });

    var body_width = window.screen.width;
    var body_height = window.screen.height;

    if (!jQuery("body").hasClass("compose-mode") && top == self) {
        jQuery("a").each(function() {
            var href = jQuery(this).attr("href");
            if (href) href = href.toLowerCase();
            if (href && href.indexOf("/api/video-server/play.php") > -1) {
                var turl = href.split("?");
                var media_id = 0;
                var se = 0;
                var nonce = 0;
                var width = "800";
                var height = "600";
                var turl2 = turl[1].split("&");
                for (i = 0; i < turl2.length; i++) {
                    var t3 = turl2[i].split("=");
                    if (t3[0] == "media_id") {
                        media_id = t3[1];
                    } else if (t3[0] == "se") {
                        se = t3[1];
                    } else if (t3[0] == "width" && t3[1] != "") {
                        width = t3[1];
                    } else if (t3[0] == "height" && t3[1] != "") {
                        height = t3[1];
                    }
                }

                if (typeof jQuery.fn.blockUI == "undefined") {
                    jQuery.getScript("/qfy-content/plugins/bitcommerce/assets/js/jquery-blockui/jquery.blockUI.min.js");
                }

                if (media_id) {
                    jQuery(this).unbind().bind("click", function(e) {
                        //èŽ·å–æ’­æ”¾æƒé™
                        var url = "/api/video-server/play.php?se=" + se + "&media_id=" + media_id;
                        var bodywidth = jQuery("body").width();
                        var bodyheight = jQuery(window).height();
                        if (bodywidth > width) {
                            top.jQuery.blockUI({ css: { "top": "15%", "left": "50%", "margin-left": "-" + (width / 2) + "px", width: width, height: height }, message: "<iframe class='videoframe' style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='" + height + "' data-controlBarVisibility='hover' data-autoplay='true' src='" + url + "' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>âœ•</div><div class='block-move ' title='æŒ‰ä½æ‹–åŠ¨ä½ç½®' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>" });
                        } else {
                            var h = Math.round(bodywidth * 3 / 4);
                            var toppx = (bodyheight - h) / 2;
                            top.jQuery.blockUI({ css: { "top": toppx + "px", "left": "0", width: bodywidth + "px", height: h + "px" }, message: "<iframe class='videoframe'  style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='" + h + "' data-controlBarVisibility='hover' data-autoplay='true' src='" + url + "' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:7px;color:#fff;'>âœ•</div>" });
                        }
                        top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function() {
                            top.jQuery.unblockUI();
                        });
                        top.jQuery('.blockUI.blockMsg').unbind().draggable({ handle: ".block-move" });
                        top.jQuery('body,.blockOverlay').css('cursor', 'auto');

                        return false;
                    });
                }
            } else if (href && href.indexOf("iframe.php?video_mp4_local=") > -1 && href.indexOf("size=") > -1 && href.indexOf("&auto=") > -1) {
                jQuery(this).addClass("thickbox");
                var auto = true;
                var full = true;
                var width = body_width;
                var height = body_height;
                var color = "#000";
                var opacity = "";
                var id = 0;
                var t1 = href.split("&");
                for (i = 0; i < t1.length; i++) {
                    var t2 = t1[i].split("=");
                    if (t2[0] == "size") {
                        if (t2[1] == "big") {
                            width = width * 0.8;
                            height = height * 0.6;
                            full = false;
                        } else if (t2[1] == "middle") {
                            width = width * 0.6;
                            height = height * 0.4;
                            full = false;
                        } else if (t2[1] == "small") {
                            width = width * 0.4;
                            height = width * 0.8;
                            full = false;
                        } else if (t2[1] == "less") {
                            width = width * 0.3;
                            height = height * 0.2;
                            full = false;
                        } else if (t2[1] == "full") {
                            width = width;
                            height = height * 0.7;
                            full = true;
                        }
                    } else if (t2[0] == "auto") {
                        if (t2[1] == "1") {
                            auto = true;
                        } else {
                            auto = false;
                        }
                    } else if (t2[0] == "color") {
                        color = decodeURIComponent(t2[1]);
                    } else if (t2[0] == "opacity") {
                        opacity = t2[1];
                    }
                }
                var newhref = href + "&video_volume=50&video_fullscreen=" + full + "&video_auto=" + auto + "&ispopup=1&video_theme=maccaco&video_bgcolor=%23000&KeepThis=true&TB_iframe=true&height=" + height + "&width=" + width;

                jQuery(this).attr("href", newhref).unbind().bind("click", function() {
                    setTimeout(function() {
                        jQuery("#TB_overlay:visible").css("background-color", color).css("opacity", opacity);
                        jQuery("#TB_window:visible iframe").css("background-color", color);
                        if (full) {
                            jQuery("#TB_window:visible").addClass("full");
                        }
                    }, 100);
                    setTimeout(function() {
                        jQuery("#TB_overlay:visible").css("background-color", color).css("opacity", opacity);
                        jQuery("#TB_window:visible iframe").css("background-color", color);
                        if (full) {
                            jQuery("#TB_window:visible").addClass("full");
                        }
                    }, 400);
                    setTimeout(function() {
                        jQuery("#TB_overlay:visible").css("background-color", color).css("opacity", opacity);
                        jQuery("#TB_window:visible iframe").css("background-color", color);
                        if (full) {
                            jQuery("#TB_window:visible").addClass("full");
                        }
                    }, 800);

                })
            }

        })
    }


}

function qfy_custom_select() {
    jQuery(".qfy_custom_select").each(function() {
        var fun = jQuery(this).attr("data-fun");
        var ids = '[' + jQuery(this).attr("data-ids") + ']';
        var urls = jQuery(this).attr("data-urls");
        if (ids != "") {
            jQuery(this).cxSelect({
                selects: eval(ids),
                required: true,
                url: eval(urls),
            });
        }
    })
}

function thebackground(qfy_bg_images, time) {
    if (screen.width < 760) {
        return false;
    }
    var tmp_qfy_bg_images = qfy_bg_images.split("|^^|");
    var str = "";
    var bodyColor = jQuery("body").css("background-color");
    var bodyrepeat = jQuery("body").css("background-repeat");
    var bodyattachment = jQuery("body").css("background-attachment");
    var bodyposition = jQuery("body").css("background-position");
    var bodysize = jQuery("body").css("background-size");


    for (i = 0; i < tmp_qfy_bg_images.length; i++) {
        var img = tmp_qfy_bg_images[i];
        if (i == 0) {
            str += '<div style="position: absolute;opacity: 1;height:100%;width:100%;background:url(' + img + ')"  class="show"></div>';
        } else {
            str += '<div style="position: absolute;opacity: 0;height:100%;width:100%;background:url(' + img + ')"  ></div>';
        }
    }
    jQuery("body").prepend('<div class="qfy_body_background" style="width:100%;height:100%;left: 0;;position: fixed;top: 0;z-index: -1;"> ' + str + '</div>');
    jQuery("body .qfy_body_background > div").css("background-color", bodyColor).css("background-repeat", bodyrepeat).css("background-attachment", bodyattachment).css("background-position", bodyposition).css("background-size", bodysize);
    jQuery('div.qfy_body_background div').css({ opacity: 0.0 });
    jQuery('div.qfy_body_background div:first').css({ opacity: 1.0 });

    setInterval(function() {
        var current = (jQuery('div.qfy_body_background div.show') ? jQuery('div.qfy_body_background div.show') : jQuery('div.qfy_body_background div:first'));
        if (current.length == 0) current = jQuery('div.qfy_body_background div:first');
        var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jQuery('div.qfy_body_background div:first') : current.next()) : jQuery('div.qfy_body_background div:first'));
        next.css({ opacity: 0.0 })
            .addClass('show')
            .animate({ opacity: 1.0 }, 1000);
        current.animate({ opacity: 0.0 }, 1000)
            .removeClass('show');
    }, time * 1000);


}

function vc_element_init() {
    if (dtGlobals.isMobile == false && jQuery("body").width() < 768) {
        jQuery(".qfy-element").each(function() {
            var m_padding = jQuery(this).attr("m-padding");
            if (m_padding) {
                jQuery(this).css("padding", m_padding);
            }
        });
    }
}

function right_nav_bar() {
    if (jQuery("#right_nav_bar_scroll").length > 0) {
        jQuery("#right_nav_bar_scroll").waypoint({
            handler: function(direction) {
                if (direction == "down") {
                    jQuery(".right_nav_bar").show();
                } else {
                    jQuery(".right_nav_bar").hide();
                }
            },
            offset: "0",
        })
    }

    var bgcolor = jQuery(".right_nav_bar").attr("data-bgcolor");
    var hovercolor = jQuery(".right_nav_bar").attr("data-hovercolor");
    var data_pop = jQuery(".right_nav_bar").attr("data-pop");
    jQuery(".right_nav_bar .icons").each(function() {
        var title = jQuery(this).attr("data-desc");
        var $this = jQuery(this);
        var imageurl = jQuery(this).attr("data-file");
        if (imageurl) {

            var tiptitle = "<img src='" + imageurl + "'  style='width:150px;height:150px;'/><div style='width:150px;text-align:center;overflow:hidden;margin-top:5px;'>" + title + "</div>";
            if (jQuery(this).find(".title").html() == "" || jQuery(this).find(".title").length == 0) {
                var data = { tipJoint: "right", fixed: true, offset: [-50, 0], style: data_pop };
                jQuery("<img />").attr("src", imageurl).load(function() {
                    setTimeout(function() { new Opentip($this, tiptitle, data); }, 1500);
                })

            }

        }
    }).mouseenter(function() {
        if (jQuery(this).find(".title").html() != "" && jQuery(this).find(".title").length > 0) {
            var width = jQuery(this).find(".title").css("width");
            width = width.replace("px", "");
            jQuery(this).animate({ width: (width * 1 + 64) + "px" }, 200);
        }
        var tmpcolor = jQuery(this).attr("data-hovercolor");
        if (!tmpcolor) tmpcolor = hovercolor;

        jQuery(this).css({ background: tmpcolor });
    }).mouseleave(function() {
        if (jQuery(this).find(".title").html() != "" && jQuery(this).find(".title").length > 0) {
            jQuery(this).animate({ width: "54px" }, 200);
        }
        var tmpcolor = jQuery(this).attr("data-color");
        if (!tmpcolor) tmpcolor = bgcolor;

        jQuery(this).css({ background: tmpcolor });
    });
    jQuery(".right_nav_bar .totop-icon").click(function(e) {
        e.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
}


function dropdownmenu_event(obj) {

    var $this = jQuery(obj);
    var p = $this.closest(".dropdown_container");
    if (p.find(".list-content").hasClass("active")) {
        p.find(".list-content").removeClass("active");
        p.closest("section").removeClass("overflowauto");
        p.closest(".qfy-column-inner").removeClass("overflowauto");
    } else {
        p.find(".list-content").addClass("active");
        p.closest("section").addClass("overflowauto");
        p.closest(".qfy-column-inner").addClass("overflowauto");
    }

}

function column_init_align() {

    var w = jQuery("body").width();
    jQuery('.qfy-column-inner.column_middle').each(function() {

        jQuery(this).css("margin-top", 0).css("margin-bottom", 0);
        var section = jQuery(this).closest("section.section");
        var heigth = jQuery(this).height();
        var t1 = section.css("padding-top").replace("px", "");
        var t2 = section.css("padding-bottom").replace("px", "");
        var pheight = section.height();
        var padding = 0;
        if (pheight < heigth) pheight = heigth;
        if (t1 > 0 || t2 > 0) {
            if ((pheight * 1 - heigth) < (t1 - t2)) {
                if (pheight * 1 == heigth) {
                    padding = (t2 * 1 - t1 * 1) / 2;
                } else {
                    padding = (t2 * 1 - t1 * 1 - heigth) / 2;
                }
            } else if ((pheight * 1 - heigth) < (t2 - t1)) {
                padding = t2 * 1 - t1 * 1 + (heigth - pheight) / 2;
            } else {
                padding = (t2 * 1 - t1 * 1) / 2;
            }
        }

        if (jQuery(this).siblings(".qfy-column-inner").length > 0) {
            if (w > 760) {
                jQuery(this).css("margin-top", ((pheight - heigth) / 2 + padding) + "px");
            }
        } else {
            jQuery(this).css("margin-top", ((pheight - heigth) / 2 + padding) + "px");
        }

    })
    jQuery('.qfy-column-inner.column_bottom').each(function() {
        var section = jQuery(this).closest("section.section");
        jQuery(this).css("margin-top", 0).css("margin-bottom", 0);
        var heigth = jQuery(this).height();
        var t1 = section.css("padding-top").replace("px", "");
        var t2 = section.css("padding-bottom").replace("px", "");
        var pheight = section.height();
        if (pheight < heigth) pheight = heigth;

        if (section.find(".qfy-column-inner").length > 1) {
            if (w > 760) {
                jQuery(this).css("margin-top", (pheight - heigth) + "px");
            }
        } else {
            jQuery(this).css("margin-top", (pheight - heigth) + "px");
        }

    })

}

function vc_royalSlider_gallery_init() {
    if (jQuery('.royalSlider_gallery_new').length == 0) {
        return;
    }

    if (typeof jQuery.fn.royalSlider == "undefined") {
        jQuery.getScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js").done(function() {
            _vc_royalSlider_gallery_init();
        })
    } else {
        _vc_royalSlider_gallery_init();
    }

}

function _vc_royalSlider_gallery_init() {
    var w = jQuery("body").width();
    var is_image_ok = true;
    jQuery('.royalSlider_gallery_new:not(.played) img').each(function() {
        if (!jQuery(this).prop('complete')) {
            is_image_ok = false;
        }

    })
    if (!is_image_ok) {
        window.setTimeout(function() {
            _vc_royalSlider_gallery_init();
        }, 500);
        return;
    }
    royalSlider_gallery_new();

}

function royalSlider_gallery_new(obj) {

    if (typeof(obj) == "undefined") {
        obj = jQuery('.royalSlider_gallery_new:not(".played")');
    }
    var w = jQuery("body").width();
    obj.each(function() {

        if (w < 760 && !jQuery(this).hasClass("tabroya")) {
            return;
        }

        var id = jQuery(this).parent().attr("id");

        var $this = this;
        var istolast = false;
        var count = 0;
        if (top != self && parent.vc) {
            if (jQuery($this).hasClass("played") || jQuery($this).find(".rsContainer").length > 0) {
                if (parent.vc.ShortcodesBuilder.isAddSlider) {
                    istolast = true;
                    parent.vc.ShortcodesBuilder.isAddSlider = false;
                }
                var slider = jQuery($this).data('royalSlider');
                if (slider)
                    slider.destroy();
                jQuery($this).html("");
                var id = jQuery(this).closest(".vc-container").attr("data-model-id");
                var model = parent.vc.shortcodes.get(id);
                var old_view = model.view;

                var models = parent.vc.shortcodes.where({ parent_id: model.get('id') });

                parent._.each(models, function(childmodel) {
                    if (childmodel.view.$el) {
                        childmodel.view.$el.appendTo(model.view.content());
                        count++;
                    }
                }, this);
                model.view.updated();

            }
        }
        jQuery(this).addClass("played");
        var imageScaleMode = jQuery(this).attr("imageScaleMode") ? jQuery(this).attr("imageScaleMode") : "fit-if-smaller";
        var slidesOrientation = jQuery(this).attr("slidesOrientation") ? jQuery(this).attr("slidesOrientation") : "horizontal";
        //var autoScaleSlider = jQuery(this).attr("autoScaleSlider")==""?true:false;
        var arrowsNavAutoHide = jQuery(this).attr("arrowsNavAutoHide") == "true" ? true : false;
        //var showfullscreen = jQuery(this).attr("showfullscreen")=="true"?true:false;
        //var g_width = jQuery(this).attr("g_width")?jQuery(this).attr("g_width"):"";
        //var g_height = jQuery(this).attr("g_height")?jQuery(this).attr("g_height"):"";
        var transitionSpeed = jQuery(this).attr("transitionSpeed");
        var loop = jQuery(this).attr("g_loop") == "true" ? true : false;
        var visiblenearby = jQuery(this).attr("visiblenearby") == "true" ? true : false;
        var autoPlay = jQuery(this).attr("auto_Play") == "true" ? true : false;
        var arrowsNav = jQuery(this).attr("arrowsNav") == "true" ? true : false;

        var controlNavigation = jQuery(this).attr("controlNavigation");
        if (controlNavigation == "thumbnails") controlNavigation = "thumbnails";
        else if (controlNavigation == "none") controlNavigation = "none";
        else controlNavigation = "bullets";
        var thumbnails_orientation = jQuery(this).attr("thumbnails_orientation") ? jQuery(this).attr("thumbnails_orientation") : "horizontal";
        var disabledclick = jQuery(this).attr("disabledclick") == "true" ? false : true;

        var transitionSpeed = jQuery(this).attr("transitionSpeed");
        if (!transitionSpeed) transitionSpeed = 600;
        var transitionType = jQuery(this).attr("transitionType");
        if (!transitionType) transitionType = "move";
        if (transitionType == "fade") transitionSpeed = Math.ceil(transitionSpeed / 500);

        var delay = jQuery(this).attr("delay");
        if (!delay) delay = 3000;
        var autoHeight = true;
        if (jQuery(this).attr("data-minheight") && jQuery(this).attr("data-minheight") > 0) {
            jQuery(this).find("section.section").css("height", jQuery(this).attr("data-minheight") + "px");
        }
        if (jQuery(this).children().length == 0) return;
        jQuery(this).royalSlider({
            fullscreen: {
                enabled: false,
                nativeFS: false
            },
            controlNavigation: controlNavigation,
            slidesOrientation: slidesOrientation,
            autoScaleSlider: false,
            autoScaleSliderWidth: 300,
            autoScaleSliderHeight: 150,
            loop: loop,
            transitionSpeed: transitionSpeed,
            transitionType: transitionType,
            imageScaleMode: imageScaleMode,
            navigateByClick: disabledclick,
            numImagesToPreload: 10,
            arrowsNav: arrowsNav,
            arrowsNavAutoHide: arrowsNavAutoHide,
            arrowsNavHideOnTouch: true,
            keyboardNavEnabled: top == self ? true : false,
            sliderDrag: w < 760 ? true : false,
            fadeinLoadedSlide: true,
            globalCaption: false,
            globalCaptionInside: false,
            addActiveClass: true,
            autoHeight: autoHeight,
            thumbs: {
                orientation: thumbnails_orientation,
                appendSpan: true,
                firstMargin: true,
                paddingBottom: 4
            },
            visibleNearby: {
                enabled: visiblenearby,
                centerArea: 0.7,
                center: true,
                breakpoint: 650,
                breakpointCenterArea: 0.64,
                navigateByCenterClick: true
            },
            autoPlay: {
                enabled: autoPlay,
                pauseOnHover: true,
                delay: delay
            }
        });
        var slider = jQuery(this).data('royalSlider');
        if (istolast && count > 0) {

            slider.goTo(count - 1);

        }
        var $this = jQuery(this);
        var p = $this.closest(".qfy-tabcontent")

        if (p.length > 0) {
            slider.ev.on('rsAfterSlideChange', function() {
                // mouse/touch drag end
                p.find(".tabcontent-header-menu li.item button").removeClass("active");
                var index = p.find(".rsBullets .rsNavItem.rsNavSelected").index();
                p.find(".tabcontent-header-menu li.item:eq(" + index + ") button").addClass("active");
                p.find(".rsActiveSlide .qfe_start_animation").each(function(i) {
                    var $this = this;
                    jQuery($this).removeClass("qfe_start_animation");
                    setTimeout(function() { qfe_animate_fun($this); }, 50);

                })


            });
        }

    })


}

function accordioncontent() {
    jQuery('.qfy-accordioncontent:not(.changed)').each(function() {
        jQuery(this).addClass("changed").find('.a_content').each(function() {
            var p = jQuery(this).parent();
            jQuery(this).find('> section').each(function(index) {
                var curr = p.find(".a_header h4:eq(" + index + ")");
                var text = curr.html();
                if (text) {
                    jQuery(this).before('<h4 class="panel-title" >' + text + '</h4>');
                    jQuery(this).prev().find(".line").remove();
                }

                if (curr.find(".line").length > 0) {
                    var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;opacity:1;'>" + curr.find(".line").clone().prop("outerHTML") + "</h5>";
                    jQuery(this).after(line);
                }
            })
        })
    })


}
jQuery(window).load(function() {
    if (top == self) {
        resizeDefaultObjSize();
    }
});
//å¤„ç†é”šç‚¹
var hash = window.location.hash;
_menu_link_event(hash);

jQuery(document).ready(function($) {
    //æ»šåŠ¨...
    if ($("#phantom").css("display") == "block") {
        var floatMenuH = $("#phantom").height();
    } else {
        var floatMenuH = 0;
    }
    var urlHash = "#" + window.location.href.split("#")[1];
    if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
        if (urlHash != "#undefined") {
            $("html, body").animate({
                scrollTop: $(".one-page-row div[data-anchor='" + urlHash + "']").offset().top - floatMenuH + 1
            }, 600, function() {
                $("body").removeClass("is-scroll");
            });
        }
    } else {
        if ($(urlHash).length > 0) {
            $("body").addClass("is-scroll");
            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: $(urlHash).offset().top
                }, 600, function() {
                    jQuery("#parallax-nav a[href='" + urlHash + "']").closest("li").addClass("active");
                    $("body").removeClass("is-scroll");
                    parallax_scroll_fun();
                });
            }, 500);

        } else {
            parallax_scroll_fun();
        }
    }
    //æ»šåŠ¨...end
    //...check body
    vc_element_init();
    //ä¾§è¾¹æ 
    right_nav_bar();
    //åº•éƒ¨èœå•
    jQuery(".footerbar-menu .menu-item-has-children>a").click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            var submenu = jQuery(this).next(".sub-menu");
            if (submenu.css("display") == "none") {
                submenu.css("display", "block");
            } else {
                submenu.css("display", "none");
            }
        })
        //èƒŒæ™¯å¤šä¸ªå›¾ç‰‡åˆ‡æ¢
    if (typeof(qfy_bg_images) != "undefined") {
        thebackground(qfy_bg_images, qfy_bg_images_int);
    }
    //å›¾ç‰‡åŠ è½½å®Œå†æ‰§è¡Œä¸€ä¸‹resize
    if (jQuery(".preloadimg:not('.loaded')").length > 0) {
        setTimeout(function() {
            jQuery(".preloadimg:not('.loaded')").each(function() {
                var newurl = jQuery(this).attr("org-src");
                jQuery(this).attr("src", newurl).addClass("loaded").load(function() {
                    resizeDefaultObjSize();
                });
            });
        }, 300);
    }

    //å¤šçº§é€‰æ‹©
    qfy_custom_select();


    if (top == self) {
        $(".qfy-text a[url-flagtarget='_blank']").attr("target", "_blank");
        $(".qfy-text a[url-flagtarget='']").removeAttr("target");
    }
    if (top != self) {
        function closeOpenPanel() {
            if (top.jQuery(".boxy-wrapper:visible").length > 0) {
                top.jQuery(".boxy-wrapper:visible .buttonClass1").click();
            }
            if (parent.jQuery("#qfbody-content>.panel:visible").length > 0) {
                parent.jQuery("#qfbody-content>.panel:visible .vc-close").click();
            }
            if (top.jQuery(".bitPopIframe:visible").length > 0) {
                top.jQuery(".bitPopIframe:visible .btn-default").click();
            }
        }
        var ctrlDown = false;
        var escDown = false;
        var ctrlKey = 17,
            vKey = 86,
            cKey = 67,
            escKey = 27,
            zkey = 90,
            ykey = 89;
        $(document).keydown(function(e) {
            if (e.keyCode == escKey) {
                closeOpenPanel();
                top.jQuery.unblockUI();
            }
            if (e.ctrlKey && (e.keyCode == zkey || e.keyCode == ykey)) {
                top.restorePage();
            }
        })
        $(top.document).keydown(function(e) {
            if (e.keyCode == escKey) {
                closeOpenPanel();
            }
            if (e.ctrlKey && (e.keyCode == zkey || e.keyCode == ykey)) {
                top.restorePage();
            }
        })
        $(parent.document).keydown(function(e) {
            if (e.keyCode == escKey) {
                closeOpenPanel();
            }
        })
    } else {
        $(document).keydown(function(e) {
            if (e.keyCode == "27") {
                jQuery.unblockUI();
            }
        })


    }
    $(".dropdown-toggle").unbind("click").bind("click", function() {
        var obj = jQuery(this).parent().find(".dropdown-menu");
        if (obj.css("display") == "none") {
            obj.show();
        } else {
            obj.hide();
        }
    })
    initmouseover();
    resizeDefaultObjSize();
    toolTip();
    weiBoAndWeiXinToolTip();
    searchForm();
    /*--Append element </i> to preloader*/
    //$(".tp-loader, .ls-defaultskin .ls-loading-indicator").not(".loading-label").append('<svg class="fa-spinner" viewBox="0 0 48 48" ><path d="M23.98,0.04c-13.055,0-23.673,10.434-23.973,23.417C0.284,12.128,8.898,3.038,19.484,3.038c10.76,0,19.484,9.395,19.484,20.982c0,2.483,2.013,4.497,4.496,4.497c2.482,0,4.496-2.014,4.496-4.497C47.96,10.776,37.224,0.04,23.98,0.04z M23.98,48c13.055,0,23.673-10.434,23.972-23.417c-0.276,11.328-8.89,20.42-19.476,20.42	c-10.76,0-19.484-9.396-19.484-20.983c0-2.482-2.014-4.496-4.497-4.496C2.014,19.524,0,21.537,0,24.02C0,37.264,10.736,48,23.98,48z"/></svg>');

    /*--Set variable for floating menu*/
    if (dtGlobals.isMobile && !dtGlobals.isiPad) smartMenu = false;

    /*--old ie remove csstransforms3d*/
    //if ($.browser.msie) $("html").removeClass("csstransforms3d");

    /*--Detect iphone phone*/
    if (dtGlobals.isiPhone) {
        $("body").addClass("is-iphone");
    };

    /* !Custom touch events */
    /* !(we need to add swipe events here) */

    /* Custom touch events:end */
    if (top == self) {
        if ($(".bitMainTopSider .vc-no-content-helper").length == 0 && $(".bitMainTopSider").length > 0 && $(".bitMainTopSider").height() == 0) {
            $(".bitMainTopSider").parent().parent().remove();
            //$(".bitMainTopSider-wrapper").css("padding-top",0);
        }
    }




    /* !-overlap for webkit*/
    if (!$.browser.webkit || dtGlobals.isMobile) {
        $("body").addClass("not-webkit").removeClass("is-webkit");
    } else {
        $("body").removeClass("not-webkit").addClass("is-webkit");
        //$(".overlap #main").prepend("<div class='main-gradient'></div>");
    };


    /*overlap for webkit:end*/
    /*Misc:end*/

    /* !-jQuery extensions */

    /* !- Check if element exists */
    $.fn.exists = function() {
        if ($(this).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    /* !- Check if element is loaded */
    $.fn.loaded = function(callback, jointCallback, ensureCallback) {
        var len = this.length;
        if (len > 0) {
            return this.each(function() {
                var el = this,
                    $el = $(el),
                    blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

                $el.on("load.dt", function(event) {
                    $(this).off("load.dt");
                    if (typeof callback == "function") {
                        callback.call(this);
                    }
                    if (--len <= 0 && (typeof jointCallback == "function")) {
                        jointCallback.call(this);
                    }
                });

                if (!el.complete || el.complete === undefined) {
                    el.src = el.src;
                } else {
                    $el.trigger("load.dt")
                }
            });
        } else if (ensureCallback) {
            if (typeof jointCallback == "function") {
                jointCallback.call(this);
            }
            return this;
        }
    };

    /* jQuery extensions: end */

    /* !-Main navigation */
    /* We need to fine-tune timings and do something about the usage of jQuery "animate" function */



    if (dtGlobals.isWindowsPhone) {
        $("body").addClass("windows-phone");
    }

    $(".mini-nav select").change(function() {
        window.location.href = $(this).val();
    });


    dtGlobals.isHovering = false;

    mainmenu_event();

    /* !-Navigation widget */
    var customTimeoutShow
    $(".custom-nav > li > a").click(function(e) {
        $menuItem = $(this).parent();
        if ($menuItem.hasClass("has-children")) e.preventDefault();


        if ($(this).attr("class") != "active") {
            $(".custom-nav > li > ul").stop(true, true).slideUp(400);
            $(this).next().stop(true, true).slideDown(500);
            $(".custom-nav > li > a").removeClass("active");
            $(this).addClass('active');
        } else {
            $(this).next().stop(true, true).slideUp(500);
            $(this).removeClass("active");
        }

        $menuItem.siblings().removeClass("act");
        $menuItem.addClass("act");
    });
    $(".custom-nav > li > ul").each(function() {
        clearTimeout(customTimeoutShow);
        $this = $(this);
        $thisChildren = $this.find("li");
        if ($thisChildren.hasClass("act")) {
            $this.prev().addClass("active");
            $this.parent().siblings().removeClass("act");
            $this.parent().addClass("act");
            $(this).slideDown(500);
        }
    });

    /* Navigation widget: end */

    /*!-SLIDERS*/

    /* !-Metro slider*/
    var mtResizeTimeout;

    $(window).on("resize", function() {
        resizeDefaultObjSize();

        clearTimeout(mtResizeTimeout);
        mtResizeTimeout = setTimeout(function() {
            $(window).trigger("metroresize");
        }, 200);
        try {
            if (parent.jQuery("#mobile_iframe_preivew").length == 1) {
                parent.setMobileDocumentInit();
            }

        } catch (e) {

        }
        if (jQuery("#header.logo-left-right #navigation ul.ab-center").length > 0) {
            var v1 = jQuery("#header #branding").width();
            var v2 = jQuery("#header .assistive-info").width();
            jQuery("#header #navigation #main-nav").css("text-align", "center").css("left", (v2 - v1) / 2 + "px");

        }
    });
    try {
        if (parent.jQuery("#mobile_iframe_preivew").length == 1) {
            setTimeout(function() {
                parent.setMobileDocumentInit();
            }, 1000);

        }
    } catch (e) {
        //è·¨åŸŸå¼‚å¸¸ä¸‹ï¼Œdocument.referrer

        var lang = getQueryString("lang");
        var BodyIsFt = getCookie(JF_cn)
        if (lang == "zh-cn") {
            BodyIsFt = 0;
            setCookie(JF_cn, "", -1);
        }
        if (lang == "zh" || BodyIsFt == "1") {
            setTimeout("StranBody()", 100);
        }

    }

    if (jQuery(".zh_tw_lang").length > 0) {
        StranBody(jQuery(".zh_tw_lang")[0]);
        var href = jQuery(".selected_template_a").attr("href");
        var nhref = Traditionalized(href);
        jQuery(".selected_template_a").attr("href", nhref);
    }
    //ç¿»è¯‘ç®€ç¹ä½“
    tranlanguage(jQuery("html"));



    /*!Scroll to Top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.scroll-top').removeClass('off').addClass('on');
        } else {
            $('.scroll-top').removeClass('on').addClass('off');
        }
    });
    $(".scroll-top").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    /*Scroll to Top:end*/


    /*Shopping cart top bar:end*/

    /* !- Skills */
    $.fn.animateSkills = function() {
        $(".skill-value", this).each(function() {
            var $this = $(this),
                $this_data = $this.data("width");

            $this.css({
                width: $this_data + '%'
            });
        });
    };

    // !- Animation "onScroll" loop
    function doAnimation() {

        if (dtGlobals.isMobile) {
            $(".skills").animateSkills();
        }
        if ($("html").hasClass("old-ie")) {
            $(".skills").animateSkills();
        };
    };
    // !- Fire animation
    doAnimation();
    /* Skills:end */
    // Create the dropdown base 12.02.14
    $("<select />").prependTo(".mini-nav .menu-select");

    // Create default option "Select"
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "â€”â€”â€”"
    }).appendTo(".mini-nav .menu-select select");

    // Populate dropdown with menu items
    $(".mini-nav").each(function() {
        var elPar = $(this),
            thisSelect = elPar.find("select");
        $("a", elPar).each(function() {
            var el = $(this);
            $("<option />", {
                "value": el.attr("href"),
                "text": el.text(),
                "data-level": el.attr("data-level")
            }).appendTo(thisSelect);
        });
    });


    $(".mini-nav select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
    $(".mini-nav select option").each(function() {
            var $this = $(this),
                winHref = window.location.href;
            if ($this.attr('value') == winHref) {
                $this.attr('selected', 'selected');
            };
        })
        /*!-Appearance for custom select*/
    $('.bitcommerce-ordering-div select').each(function() {
        $(this).customSelect();
    });
    $(".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper").css("visibility", "visible");

    $(".mini-nav option").each(function() {
        var $this = $(this),
            text = $this.text(),
            prefix = "";

        switch (parseInt($this.attr("data-level"))) {
            case 1:
                prefix = "";
                break;
            case 2:
                prefix = "â€” ";
                break;
            case 3:
                prefix = "â€”â€” ";
                break;
            case 4:
                prefix = "â€”â€”â€” ";
                break;
            case 5:
                prefix = "â€”â€”â€”â€” ";
                break;
        }
        $this.text(prefix + text);
    });


    /* !Onepage template */
    $(".anchor-link").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");
        var this_offset, that_offset, offset_diff;
        var base_speed = 600,
            speed = base_speed;
        if ($(selector).length > 0) {
            var this_offset = $_this.offset(),
                that_offset = $(selector).offset(),
                offset_diff = Math.abs(that_offset.top - this_offset.top),
                speed = (offset_diff * base_speed) / 1000;
        }
        $(this).on('click', function(e) {
            $("body").addClass("is-scroll");
            if ($("#phantom").css("display") == "block") {
                var floatMenuH = $("#phantom").height();
            } else {
                var floatMenuH = 0;
            }
            var $_this = $(this),
                selector = $_this.attr("href");
            if (selector == "#") {
                $("html, body").animate({
                    scrollTop: 0
                }, speed, function() {
                    $("body").removeClass("is-scroll");
                });
            } else {
                if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                    $("html, body").animate({
                        scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                    });
                } else {
                    if ($(selector).length > 0) {
                        $("html, body").animate({
                            scrollTop: $(selector).offset().top - floatMenuH + 1
                        }, speed, function() {
                            $("body").removeClass("is-scroll");
                        });
                    }
                }
            }
            return false;

        });
    });
    jQuery(window).load(function() {
        if (jQuery('#load').length) {
            jQuery('#load').fadeOut().remove();
        }
    });

    if ($(".one-page-row").length) {

        function onePageAct() {
            var active_row = $(".one-page-row div:in-viewport[data-anchor^='#']").attr("data-anchor");
            if ($('.one-page-row .menu-item a[href=' + active_row + ']').length) {
                $('.one-page-row .menu-item a').parent("li").removeClass('act');
                $('.one-page-row .menu-item a[href=' + active_row + ']').parent("li").addClass('act');
            }
            if (active_row == undefined && $('.one-page-row .menu-item a[href="#"]').length) {
                $('.one-page-row .menu-item a[href="#"]').parent("li").addClass('act');
            }
        };
        onePageAct();
    }

    $("#main-nav .menu-item a,.dl-menu li a").not(".dl-menu li.dl-back a[href^='#']").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");

        if (selector && selector.indexOf("#") > -1 && selector != "#") {
            //if(selector.indexOf("#")!=0){
            selector = jQuery.trim(selector);
            var tmpselecter = selector.split("#");
            selector = "#" + tmpselecter[tmpselecter.length - 1];
            //}	

            if (selector != "#" && selector.indexOf("=") < 0 && $(selector).length > 0) {
                $(this).on('click', function(e) {
                    var $_this = $(this),
                        selector = $_this.attr("href");

                    //æ‰‹æœºä¸‹èœå•æ˜¯#ï¼Œå­èœå•æ— æ³•ç‚¹å‡»
                    var mobilemenu = $_this.closest("#dl-menu").find("#mobile-menu").length;
                    if (mobilemenu > 0 && $_this.parent().hasClass("has-children")) {
                        var $submenu = $_this.parent().find('ul.dl-submenu:first');
                        if ($submenu.length > 0) {
                            var xx = event.pageX;
                            var width = $submenu.width();
                            var isclick = width - xx > 35;
                            if (!isclick) return;
                        }
                    }

                    if ($("body >.dl-menuwrapper.floatmenu").length > 0) {
                        $("#dl-menu #mobile-menu .phone-text").click();
                    }

                    $("body").addClass("is-scroll");


                    if ($("#phantom").css("display") == "block") {
                        var floatMenuH = $("#phantom").height();
                    } else {
                        var floatMenuH = 0;
                    }

                    //if(selector.indexOf("#")!=0){
                    var tmpselecter = selector.split("#");
                    selector = "#" + tmpselecter[tmpselecter.length - 1];
                    //}	
                    $_this.closest("#dl-menu").find(".wf-phone-hidden.phone-text").click();
                    var base_speed = 600,
                        speed = base_speed;
                    if (selector.indexOf("=") < 0 && $(selector).length > 0) {
                        var this_offset = $_this.offset(),
                            that_offset = $(selector).offset(),
                            offset_diff = Math.abs(that_offset.top - this_offset.top),
                            speed = (offset_diff * base_speed) / 1000;
                    }

                    $(".one-page-row .menu-item a").parent("li").removeClass("act");
                    if ($(".one-page-row").length > 0) {
                        $_this.parent("li").addClass("act");
                    }
                    if (selector == "#" && ($(".one-page-row").length > 0)) {
                        $("html, body").animate({
                            scrollTop: 0
                        }, speed, function() {
                            $("body").removeClass("is-scroll");
                            $_this.parent().siblings(".onepage").removeClass("act onepage");
                        });
                    } else {
                        if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                            $("html, body").animate({
                                scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                            }, speed, function() {
                                $("body").removeClass("is-scroll");
                            });
                        } else {
                            if (selector.indexOf("=") < 0 && $(selector).length > 0) {
                                $("html, body").animate({
                                    scrollTop: $(selector).offset().top - floatMenuH + 1
                                }, speed, function() {
                                    $("body").removeClass("is-scroll");

                                    $_this.parent().siblings(".onepage").removeClass("act onepage");
                                    $_this.parent().addClass("act onepage");
                                    _menu_link_event(selector);

                                });
                            }
                        }
                    }
                    return false;
                });

            }

        }

    });
    $("ul.menu a,.tabcontent-inner>ul a").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");
        if (selector && selector.indexOf("#") > -1 && selector != "#") {

            selector = jQuery.trim(selector);
            var tmpselecter = selector.split("#");
            selector = "#" + tmpselecter[tmpselecter.length - 1];
            if (selector != "#" && selector.indexOf("=") < 0 && $(selector).length > 0) {
                $(this).on('click', function(e) {
                    $("body").addClass("is-scroll");
                    if ($("#phantom").css("display") == "block") {
                        var floatMenuH = $("#phantom").height();
                    } else {
                        var floatMenuH = 0;
                    }
                    var base_speed = 600,
                        speed = base_speed;
                    var this_offset = $_this.offset(),
                        that_offset = $(selector).offset(),
                        offset_diff = Math.abs(that_offset.top - this_offset.top),
                        speed = (offset_diff * base_speed) / 1000;

                    $("html, body").animate({
                        scrollTop: $(selector).offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                        _menu_link_event(selector);
                    });

                });
            }
        }
    });
    $(".logo-box a[href^='#'], #branding a[href^='#'], #branding-bottom a[href^='#']").on('click', function(e) {
        $("body").addClass("is-scroll");
        if ($("#phantom").css("display") == "block") {
            var floatMenuH = $("#phantom").height();
        } else {
            var floatMenuH = 0;
        }
        var $_this = $(this),
            selector = $_this.attr("href");

        var base_speed = 600,
            speed = base_speed;
        if ($(selector).length > 0) {
            var this_offset = $_this.offset(),
                that_offset = $(selector).offset(),
                offset_diff = Math.abs(that_offset.top - this_offset.top),
                speed = (offset_diff * base_speed) / 1000;
        }
        if (selector == "#") {
            $("html, body").animate({
                scrollTop: 0
            }, speed, function() {
                $("body").removeClass("is-scroll");
            });
        } else {
            if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                $("html, body").animate({
                    scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                }, speed, function() {
                    $("body").removeClass("is-scroll");
                });
            } else {
                if ($(selector).length > 0) {
                    $("html, body").animate({
                        scrollTop: $(selector).offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                    });
                }
            }
        }
        return false;
    });
    if ($(".one-page-row").length) {
        $(window).scroll(function() {
            var currentNode = null;
            if (!$("body").hasClass("is-scroll")) {
                $('.one-page-row div[data-anchor^="#"]').each(function() {
                    var activeSection = $(this),
                        currentId = $(this).attr('data-anchor');
                    if ($(window).scrollTop() >= ($(".one-page-row div[data-anchor='" + currentId + "']").offset().top - 100)) {
                        currentNode = currentId;
                    }
                });
                $('.menu-item a').parent("li").removeClass('act');
                $('.menu-item a[href="' + currentNode + '"]').parent("li").addClass('act');
                if ($('.menu-item a[href="#"]').length && currentNode == null) {
                    $('.menu-item a[href="#"]').parent("li").addClass('act');
                }
            }
        });
    }
    /* Onepage template:end */
    floatmenu_create();
    var waypoint_menu_hash = {}
    jQuery(".mainmenu >.menu-item > a").each(function() {

        var $this = this;
        var href = jQuery(this).attr("href");
        if (href.indexOf("#") > -1 && href != "#") {
            var href_id = href.split("#");
            if (href_id.length > 1) {
                href_id = jQuery.trim(href_id[1]);
            }
            if (href_id && href_id.indexOf("=") < 0 && jQuery("section#" + href_id).length > 0) {
                waypoint_menu_hash[href_id] = $this;
            }
        }
    })
    $.each(waypoint_menu_hash, function(hash, obj) {
        jQuery("section#" + hash).waypoint({
            handler: function(direction) {
                jQuery(".mainmenu .act").removeClass("act onepage");
                jQuery(".mainmenu  a").each(function() {
                    var href = jQuery(this).attr("href");
                    if (href && href.indexOf("#") > -1 && href.indexOf(hash) > -1) {
                        currli = jQuery(this).parent();
                        currli.addClass("act onepage");
                    }
                })
                jQuery(".widget_nav_menu ul.menu .current-menu-item,.qfy-listmenuvertical ul.menu .current-menu-item,.widget_nav_menuhorizontal ul.menu .current-menu-item").removeClass("current-menu-item current-menu-ancestor");
                jQuery(".widget_nav_menu ul.menu a,.qfy-listmenuvertical ul.menu a,.widget_nav_menuhorizontal ul.menu a,.tabcontent-inner>ul a").each(function() {
                    var href = jQuery(this).attr("href");
                    if (href && href.indexOf("#") > -1 && href.indexOf(hash) > -1) {
                        currli = jQuery(this).parent();
                        currli.addClass("current-menu-item");
                    }

                })
                jQuery(".tabcontent-inner>ul .active").removeClass("active");
                jQuery(".tabcontent-inner>ul  a").each(function() {
                    var href = jQuery(this).attr("href");
                    if (href && href.indexOf("#") > -1 && href.indexOf(hash) > -1) {
                        jQuery(this).addClass("active");
                    }
                })
                _menu_link_event(hash);

            },
            offset: "20px",
        })
    });

    //ready  in


    //ready end	
});

function floatmenu_create() {

    if (jQuery("#header.logo-left-right #navigation ul.ab-center").length > 0) {
        var v1 = jQuery("#header #branding").width();
        var v2 = jQuery("#header .assistive-info .top-bar-right").width();
        jQuery("#header #navigation #main-nav").css("text-align", "center").css("left", (v2 - v1) / 2 + "px");
    }
    var $ = jQuery;
    if ($("#header.newrightmenu,#header.newleftmenu").length > 0) {
        if ($("#page.bodyheader40,#page.bodyheader0").length > 0) {
            $("#header").css("position", "fixed").css("top", "0");
            return;
        }
    }



    /*!Floating menu*/
    if (smartMenu && $("#header").length > 0) {
        var controlDiv = "";
        var mouseHtml = "";
        try {
            if (self != top && !top.jQuery("body").hasClass("caterole")) {
                var pcontroldiv = '<div class="controls-column bitPcontrols wf-mobile-hidden" style="top:50%;margin-top:-8px;"><div class="controls-out-tl"><div class="parent parent-vc_row active "><a class="control-btn"><span class="vc-btn-content vo-btn-nomove" style="padding:0 5px 0 10px !important;  line-height: 18px !important;font-size:12px !important;color:#fff;" onclick="top.qfFloatMenuSetting()">è®¾ç½®æµ®åŠ¨å¤´éƒ¨å’ŒLOGO</span></a></div></div></div>';

                mouseHtml = 'onmouseover="document.getElementById(\'phantomFloatMenu\').style.display = \'block\';floatmenucontrols_mouseenter();" onmouseout="document.getElementById(\'phantomFloatMenu\').style.display = \'none\';floatmenucontrols_mouseout();"  ';
                controlDiv = '<div id="phantomFloatMenu"  style="line-height: 0px; opacity: 1; visibility: visible; transition: auto 0s ease 0s; display: none;" class="controls-element vc-controls bit-controls-element">' + pcontroldiv + '<div class="controls-cc"><a class="control-btn vc-element-name"><span class="vc-btn-content vo-btn-nomove">æµ®åŠ¨èœå•å’ŒLOGO</span></a><a class="control-btn control-btn-edit " onclick="top.qfFloatMenuSetting()" title="è®¾ç½® æµ®åŠ¨èœå•æ ·å¼"><span class="vc-btn-content"><span class="icon"></span></span></a></div></div>';
            }
        } catch (e) {


        }

        var scrTop = 0,
            scrDir = 0,
            scrUp = false,
            scrDown = false,
            /*$header = $("#main-nav"),*/
            $header = $("#main-nav"),
            $headerSlide = $("#main-nav-slide .main-nav-slide-inner"),
            f_logoheight = $("#main-nav").attr("data-lh"),
            f_maxwidth = $("#main-nav").attr("data-mw"),
            f_fh = $("#main-nav").attr("data-fh"),
            logoURL = $("#branding a").attr("href"),
            desc = $("#bit-floatlogoText").html(),
            $parent = $header.parent(),
            $headerSlideParent = $headerSlide.parent(),
            $phantom = $('<div id="phantom" ' + mouseHtml + ' >' + controlDiv + '<div class="ph-wrap"><div class="ph-wrap-content"><div class="ph-wrap-inner"><div class="logo-box" ></div><div class="menu-box" ></div><div class="menu-info-box"  ></div></div></div></div></div>').appendTo("body"),
            $menuBox = $phantom.find(".menu-box"),
            $headerH = $header.height(),
            isMoved = false,
            breakPoint = 0,
            threshold = $("#header").offset().top + $("#header").height(),
            doScroll = false;
        var headerobj = $("#header>*");
        var header_height = jQuery("#header").height();


        if ($("#qfadminbar:visible").exists()) { $phantom.css("top", "28px"); };
        if ($("#page").hasClass("boxed")) {
            $phantom.find(".ph-wrap").addClass("boxed");
            $phantom.addClass("boxed");
        }
        $phantom.find(".ph-wrap").addClass("with-logo");
        if (dtGlobals.logoURL && dtGlobals.logoEnabled) {
            //if(logoURL == undefined){
            if (dtGlobals.logoURL) {
                var valign = jQuery(".floatlogoText").css("vertical-align");
                if (!valign) valign = "middle";
                var img_str = "";
                if (logoURL) {
                    img_str = '<a href="' + logoURL + '"><img src="' + dtGlobals.logoURL + '" height="' + dtGlobals.logoH + '" width="' + dtGlobals.logoW + '"></a>';
                } else {
                    img_str = '<img src="' + dtGlobals.logoURL + '" height="' + dtGlobals.logoH + '" width="' + dtGlobals.logoW + '">';
                }
                $phantom.find(".logo-box").html('<div style="height:48px;vertical-align: ' + valign + ';display: table-cell;" >' + img_str + '</div>');
            }
            //}else{
            //	$phantom.find(".logo-box").html('<img src="'+dtGlobals.logoURL+'" height="'+dtGlobals.logoH+'" width="'+dtGlobals.logoW+'"></a>');
            //}
        } else {
            $phantom.find(".ph-wrap").addClass("with-logo-no");
        }
        if (desc) {
            $phantom.find(".logo-box").append(desc);
            $phantom.find(".with-logo-no .logo-box").css("display", "table-cell");
        }
        if (f_logoheight >= 10 && f_logoheight <= 50) {
            $("#phantom .logo-box img").css("max-height", f_logoheight + "px");
        }
        if (f_fh == 1) {
            $("#phantom").addClass("min");
        }
        if (f_maxwidth > 0) {
            $("#phantom .ph-wrap .ph-wrap-content").css("max-width", f_maxwidth + "px");
        }
        var info_w = $("#phantom .menu-info-box").width();
        if (jQuery("#header.bit-logo-menu").length > 0 && !$("#phantom").hasClass("bit-logo-menu")) {
            var old_img_str = $header.find("#branding .logo img:first").attr("src");
            $header.find("#branding .logo img:first").css("width", "auto");
            $("#phantom").addClass("bit-logo-menu").find(".logo-box").remove();
            $("#phantom .menu-box").css("padding-left", info_w + "px");
        }

        $(".one-page-row .logo-box a").on('click', function(e) {
            $("body").addClass("is-scroll");
            if ($("#phantom").css("display") == "block") {
                var floatMenuH = $("#phantom").height();
            } else {
                var floatMenuH = 0;
            }
            var $_this = $(this),
                selector = $_this.attr("href");

            var base_speed = 600,
                speed = base_speed;
            if ($(selector).length > 0) {
                var this_offset = $_this.offset(),
                    that_offset = $(selector).offset(),
                    offset_diff = Math.abs(that_offset.top - this_offset.top),
                    speed = (offset_diff * base_speed) / 1000;
            }
            if (selector == "#") {
                $("html, body").animate({
                    scrollTop: 0
                }, speed, function() {
                    $("body").removeClass("is-scroll");
                });
            } else {
                if ($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                    $("html, body").animate({
                        scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                    });
                } else {
                    if ($(selector).length > 0) {
                        $("html, body").animate({
                            scrollTop: $(selector).offset().top - floatMenuH + 1
                        }, speed, function() {
                            $("body").removeClass("is-scroll");
                        });
                    }
                }
            }
            return false;
        });

        $(window).on("debouncedresize", function() {
            $headerH = $header.height();
        });
        var top_threshold = $("#dl-menu").offset().top + $("#dl-menu").height();

        $(window).on("scroll", function() {

            var tempCSS = {},
                tempScrTop = $(window).scrollTop();
            scrDir = tempScrTop - scrTop;
            if (tempScrTop > threshold && isMoved === false) {
                if (!dtGlobals.isHovering) {
                    var s = "0.5s";
                    if ($header.attr("data-sp") == 0) s = "0.4s";
                    else if ($header.attr("data-sp") == 1) s = "1s";
                    else if ($header.attr("data-sp") == 2) s = "2s";
                    if ($header.attr("data-st") == "1") {
                        $phantom.css("animation-duration", s).addClass("showed_tb");
                    } else {
                        $phantom.css({ "transition": "opacity " + s, "opacity": 1, "visibility": "visible" });
                    }
                    if ($("#phantom").hasClass("bit-logo-menu")) {
                        if (dtGlobals.logoURL && dtGlobals.logoEnabled) {
                            $header.find("#branding .logo img:first").attr("src", dtGlobals.logoURL);
                        }
                    }

                    if (jQuery("#header.newrightmenu,#header.newleftmenu").length > 0) {
                        if (jQuery("#dl-menu:visible").length == 0 && (jQuery("body").height() - threshold - tempScrTop > jQuery(window).height())) {
                            jQuery("#header").addClass("position-ab-fixed");
                        }
                        $phantom.find(".ph-wrap").remove();
                    } else {
                        $parent.css("min-height", $header.height() + "px");
                        $header.appendTo($menuBox);
                        $headerSlide.prependTo($phantom.find(".menu-info-box"));
                        $header.removeClass($header.data('bit-menu')).addClass($header.data('bit-float-menu')).removeClass("bit-menu-default").addClass("bit-menu-float");
                    }
                    var infoclass = $headerSlide.attr("data-class");
                    $phantom.find(".menu-info-box").addClass(infoclass);

                    isMoved = true;
                    //fancy-rollovers wf-mobile-hidden underline-hover bit-menu-float


                    if ($phantom.find("#main-nav").hasClass("position-ab-center")) {
                        var div1 = $phantom.find(".logo-box").width() + $phantom.find(".logo-box").css("padding-left").replace("px", "") * 1 + $phantom.find(".logo-box").css("padding-right").replace("px", "") * 1;
                        var div2 = $phantom.find(".menu-info-box").width();
                        $phantom.find(".menu-box").css("position", "relative").css("left", (div2 - div1) / 2 + "px");
                    }
                }
            } else if (tempScrTop <= threshold && isMoved === true) {
                //act 
                jQuery("#phantom .mainmenu >.menu-item.onepage").removeClass("onepage");
                if ($("#phantom").hasClass("bit-logo-menu")) {
                    if (old_img_str)
                        $header.find("#branding .logo img:first").attr("src", old_img_str);
                }
                if (jQuery("#header.newrightmenu,#header.newleftmenu").length > 0) {
                    jQuery("#header").removeClass("position-ab-fixed");
                } else {
                    $header.appendTo($parent);
                    $parent.css("min-height", "auto");
                    $header.removeClass($header.data('bit-float-menu')).addClass($header.data('bit-menu')).addClass("bit-menu-default").removeClass("bit-menu-float");
                }

                if ($(".logo-classic-centered, .logo-center").length) {
                    if ($(".mini-search").length) {
                        $header.insertBefore(".mini-search");
                    }
                }
                if ($header.attr("data-st") == "1") {
                    $phantom.removeClass("showed_tb");
                } else {
                    $phantom.css({ "opacity": 0, "visibility": "hidden" });
                }


                isMoved = false;

            };
            scrTop = $(window).scrollTop();

        });
    }
    /*Floating menu:end*/
}

function _menu_link_event(hash) {
    $ = jQuery;

    //å¤„ç†ä¸»èœå•
    var ishash = false;
    if (hash.indexOf("#") == 0 && hash != "#" && jQuery(hash).length > 0) {
        $(".mainmenu").each(function() {
            $(this).find("a").each(function() {
                var href = jQuery(this).attr("href");
                var start = href.indexOf(hash);
                if (href.substr(start) == hash && ishash == false) {
                    ishash = true;
                    var ul = jQuery(this).closest(".mainmenu");
                    ul.find(".act").removeClass("act");
                    var currli = jQuery(this).closest("li");
                    currli.addClass("act");
                    currli.parents("li").addClass("act");
                }
            })
        })

    } else {
        $(".mainmenu .sub-nav .act").each(function() {
            var href = $(this).find(">a").attr("href");
            if (href.indexOf("#") > -1) {
                $(this).removeClass("act");
            }
        })

    }

    //å¤„ç†å…¶ä»–èœå•

    if (hash.indexOf("#") == 0 && hash != "#" && jQuery(hash).length > 0) {
        $(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function() {
            var ismenuhash = false;
            $(this).find("a").each(function() {
                var href = jQuery(this).attr("href");
                var start = href.indexOf(hash);
                if (href.substr(start) == hash && ismenuhash == false) {
                    ismenuhash = true;
                    var ul = jQuery(this).closest("ul.menu");
                    ul.find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
                    var currli = jQuery(this).closest("li");
                    currli.addClass("current-menu-item");
                    currli.parents("li").addClass("current-menu-item");
                }
            })
        })

    } else {
        $(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function() {
            $(this).find(">li.current-menu-item").each(function(i) {
                if (i > 0) {
                    $(this).removeClass("current-menu-item current-menu-ancestor");
                    $(this).find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
                }
            });
        })
    }

    if (hash.indexOf("#") == 0 && hash != "#" && jQuery(hash).length > 0) {
        $(".tabcontent-inner>ul").each(function() {
            var ismenuhash = false;
            $(this).find("a").each(function() {
                var href = $(this).attr("href");
                if (href) {
                    var start = href.indexOf(hash);
                    if (href.substr(start) == hash && ismenuhash == false) {
                        ismenuhash = true;
                        var ul = jQuery(this).closest(".tabcontent-inner");
                        ul.find(".active").removeClass("active");
                        $(this).addClass("active");
                    }
                }
            })
        })
    }




}

function mainmenu_event() {
    $ = jQuery;
    //custom menu

    $("#mobile-menu").removeAttr("style").wrap("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible main-mobile-menu' style='display:none' />");
    if ($("#mobile-menu").hasClass("dropTopStyle")) {
        $("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("body").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropTopStyle_containter' >" + menu_html + "</div>");
        menu_html = null;
        if ($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
        } else if ($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
        }

        var padding = $("#mobile-menu").attr("data-padding");
        if (padding) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        if ($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }

    } else if ($("#mobile-menu").hasClass("dropCenterStyle")) {
        $("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropCenterStyle_containter' >" + menu_html + "</div>");
        menu_html = null;
        if ($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
        } else if ($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
        }
        var padding = $("#mobile-menu").attr("data-padding");
        if (padding) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        if ($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }


    } else if ($("#header").hasClass("wf-mobile-hidden")) {
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible mobiledefault_containter' style='text-align:center;margin:0px auto;' >" + menu_html + "</div>");
        if ($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }

    } else {
        //default
        if ($("#mobile-menu").hasClass("positionFixed")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("mobiledefault_containter");
            mobile_menu_fix();
        }

    }

    $(".underline-hover > li > a > span").not(".underline-hover > li > a > span.mega-icon").append("<i class='underline'></i>");
    $("#main-nav .menu-nav > li > a > span").append("<i class='underline'></i>");

    var $mainNav = $("#main-nav,.mini-nav");





    var $mobileNav = $mainNav.clone();
    var $mobileTopNav = $(".mini-nav").clone();
    var backCap = $("#mobile-menu > .menu-back").html();

    $mobileNav
        .attr("id", "")
        .attr("class", "dl-menu")
        .find(".sub-nav")
        .addClass("dl-submenu")
        .removeClass("sub-nav")
        .prepend("<li class='menu-item dl-back'><a href='#'><span>" + backCap + "</a></li>");


    $mobileNav.appendTo("#dl-menu:not(.dl-qfymobile-menu)").wrap("<div class='dl-container' />");


    $("body").removeClass("mobilefloatmenu");
    $("body >.dl-menu-film,body >.dl-menu-fixedheader").remove();
    if ($("#mobile-menu").hasClass("floatmenu") || $("#mobile-menu").hasClass("fullfloatmenu") || $("#mobile-menu").hasClass("leftbtnmenu")) {
        $("body").addClass("mobilefloatmenu");
        var menu_content = $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").prop("outerHTML");
        $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").remove();
        $("body").prepend("<div  class='dl-menuwrapper  wf-mobile-visible floatmenu floatwarpper' >" + menu_content + "</div>");
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").prop("outerHTML");
        $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").remove();
        $("body #page").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible floatmenu' >" + menu_html + "</div>");

        if ($("#mobile-menu").hasClass("fullfloatmenu")) {
            $(".dl-menuwrapper.floatmenu").addClass("fullfloatmenu");
        } else if ($("#mobile-menu").hasClass("leftbtnmenu")) {
            $("body").addClass("mobileleftbtnmenu");
            $(".dl-menuwrapper.floatmenu").addClass("leftbtnmenu").find(".dl-container").prepend(jQuery(".menu_displaynone").html()).append(jQuery(".menu_displaynone_footer").html());
            if ($("body >.dl-menu-film").length == 0) {
                $("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
            }
            if ($("body >.dl-menu-fixedheader").length == 0 && $(".leftbtnmenu #mobile-menu.displaynone").length == 0) {
                $("body").prepend("<div class='dl-menu-fixedheader wf-mobile-visible'>" + jQuery(".menu_displaynone_header").html() + "</div>");
            }
            if (top != self && jQuery("body").hasClass("compose-mode")) {
                jQuery("body").find(".qfyheadercontent [bitDataAction='site_widget_container'] .site_tooler").each(
                    function() {
                        parent.widgetHover(this, jQuery("body"));
                    })
                jQuery("body").find(".qfyheadercontent [bitDataAction='site_fix_container']").each(function() {
                    parent.widgetFixEvent(this);
                })
            }
            jQuery("body").addClass("moble_menufixed");
            mobile_menu_fix_2();
            if (jQuery(window).scrollTop() > jQuery(".dl-menu-fixedheader").height()) {
                jQuery(".dl-menu-fixedheader").css("position", "fixed");
                jQuery("body").addClass("fixedheadering");
            } else {
                jQuery(".dl-menu-fixedheader").css("position", "relative");
                jQuery("body").removeClass("fixedheadering");
            }
        }
        if ($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
            $(".floatwarpper").addClass("left");
        } else if ($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
            $(".floatwarpper").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
            $(".floatwarpper").addClass("center");
        }
        var padding = $("#mobile-menu").attr("data-padding");
        if (padding) {
            $(".floatwarpper").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        var element_right = $("#mobile-menu").attr("data-right");
        if (element_right) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("right", element_right + "px");
        }
        var element_top = $("#mobile-menu").attr("data-top");
        if (element_top) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("top", element_top + "px");
        }

    }

    if (!$("html").hasClass("old-ie")) $("#dl-menu:not(.dl-qfymobile-menu)").dlmenu();

    var timeouthidden = new Array();
    $(".qfy-sub-div.MenuAnimIn_js", $mainNav).parent().each(function(i) {
        var $this = jQuery(this);


        jQuery(this).on("mouseenter", function(e) {

            var obj = jQuery(this).find(".qfy-sub-div:first");
            if (timeouthidden[i]) {
                clearTimeout(timeouthidden[i]);
            }
            var h = obj.children().height();
            var t = obj.attr("data-time");
            if (!obj.hasClass("ing") && !obj.hasClass("ed")) {
                obj.stop().addClass("ing").removeClass("ending").css({ "visibility": "visible", "height": 0 }).animate({ "height": h }, t * 1000, function() {
                    jQuery(this).removeClass("ing").addClass("ed").css({ "visibility": "visible" });
                });
            }

        }).on("mouseleave", function(e) {

            var obj = jQuery(this).find(".qfy-sub-div:first");
            if (timeouthidden[i]) {
                clearTimeout(timeouthidden[i]);
            }
            timeouthidden[i] = setTimeout(function() {
                if (obj.hasClass("ending") || obj.hasClass("ing")) return;
                obj.addClass("ending").removeClass("ed").animate({ "height": 0 }, 500, function() { jQuery(this).removeClass("ending ed").css({ "visibility": "hidden", "height": 0 }); });
            }, 300);
        });
    });

    $(".sub-nav", $mainNav).parent().each(function() {
        var $this = $(this);
        if (dtGlobals.isMobile || dtGlobals.isWindowsPhone) {
            $this.find("> a").on("click tap", function(e) {
                if (!$(this).hasClass("dt-clicked")) {
                    e.preventDefault();
                    $mainNav.find(".dt-clicked").removeClass("dt-clicked");
                    $(this).addClass("dt-clicked");
                } else {
                    e.stopPropagation();
                }

            });
        };

        var menuTimeoutShow,
            menuTimeoutHide;

        if ($this.hasClass("dt-mega-menu")) {

            $this.on("mouseenter tap", function(e) {
                if (e.type == "tap") e.stopPropagation();

                var $this = jQuery(this);
                $this.addClass("dt-hovered");

                dtGlobals.isHovering = true;


                var $_this = jQuery(this),
                    $_this_h = $this.height();

                var $_this_ofs_top = $this.position().top;
                $this.find("> .sub-nav").css({
                    top: $_this_ofs_top + $_this_h
                });


                if ($this.hasClass("mega-auto-width")) {
                    var $_this = $(this),
                        $_this_sub = $_this.find(" > .sub-nav > li"),
                        coll_width = $("#main .wf-wrap").width() / 5,
                        $_this_par_width = $_this.parent().width(),
                        $_this_parents_ofs = $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left;

                    $_this.find(" > .sub-nav").css({
                        left: $_this_parents_ofs,
                        "marginLeft": -($_this.find(" > .sub-nav").width() / 2 - $_this.width() / 2)
                    });
                }
                if ($this.is(':first-child') && $this.hasClass("mega-auto-width")) {
                    $this.find(" > .sub-nav").css({
                        left: $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left,
                        "marginLeft": 0
                    });
                } else if ($this.is(':last-child') && $this.hasClass("mega-auto-width")) {
                    $this.find(" > .sub-nav").css({
                        left: "auto",
                        right: $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").width() - ($this.position().left + $this.width()),
                        "marginLeft": 0
                    });
                };

                if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
                    $this.children("ul").addClass("right-overflow");
                };
                if ($this.position().left < ($this.children("ul").width() / 2)) {
                    $this.children("ul").addClass("left-overflow");
                }

                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);

                menuTimeoutShow = setTimeout(function() {
                    if ($this.hasClass("dt-hovered")) {
                        $this.find("ul").stop().css("visibility", "visible").animate({
                            "opacity": 1
                        }, 150);
                    }
                }, 100);
            });

            $this.on("mouseleave", function(e) {
                var $this = $(this);
                $this.removeClass("dt-hovered");

                dtGlobals.isHovering = false;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);

                menuTimeoutHide = setTimeout(function() {
                    if (!$this.hasClass("dt-hovered")) {
                        $this.children("ul").stop().animate({
                            "opacity": 0
                        }, 150, function() {
                            $(this).css("visibility", "hidden");

                            $(this).find("ul").stop().css("visibility", "hidden").animate({
                                "opacity": 0
                            }, 10);
                        });

                        setTimeout(function() {
                            if (!$this.hasClass("dt-hovered")) {
                                $this.children("ul").removeClass("right-overflow");
                                $this.children("ul").removeClass("left-overflow");
                            }
                        }, 400);

                    }
                }, 150);

                $this.find("> a").removeClass("dt-clicked");
            });
        } else {

            $this.on("mouseenter tap", function(e) {
                if (e.type == "tap") e.stopPropagation();

                var $this = jQuery(this);
                $this.addClass("dt-hovered");
                if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
                    //if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - 240 < 0) {
                    $this.children("ul").addClass("right-overflow");
                }
                dtGlobals.isHovering = true;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);

                if ($this.find(".qfy-sub-div").length == 0 && $this.closest(".qfyheaderul").length == 0) {
                    menuTimeoutShow = setTimeout(function() {
                        if ($this.hasClass("dt-hovered")) {
                            if ($this.closest("#main-nav").attr("data-sliderdown")) {
                                var h = $this.children('ul').height();
                                $this.children('ul').stop().css({ "visibility": "visible", "opacity": "1", "overflow": "hidden", "max-height": "0" }).animate({
                                    "max-height": h
                                }, 300, function() {
                                    jQuery(this).css({ "overflow": "inherit" })
                                });
                            } else if ($this.closest("#main-nav").hasClass("sub-sliderup")) {
                                $this.children('ul').stop().css("opacity", "1").css("visibility", "visible").css("margin-top", "0");
                            } else {
                                $this.children('ul').stop().css("visibility", "visible").animate({
                                    "opacity": 1
                                }, 150);
                            }


                        }
                    }, 100);
                }
            });

            $this.on("mouseleave", function(e) {
                var $this = jQuery(this);
                $this.removeClass("dt-hovered");

                dtGlobals.isHovering = false;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);
                if ($this.find(".qfy-sub-div").length == 0 && $this.closest(".qfyheaderul").length == 0) {
                    menuTimeoutHide = setTimeout(function() {
                        if (!$this.hasClass("dt-hovered")) {

                            if ($this.closest("#main-nav").attr("data-sliderdown")) {
                                $this.children("ul").stop().removeAttr("style");
                            } else if ($this.closest("#main-nav").hasClass("sub-sliderup")) {
                                $this.children("ul").stop().removeAttr("style");
                            } else {
                                $this.children("ul").stop().animate({
                                    "opacity": 0
                                }, 150, function() {
                                    $(this).css("visibility", "hidden");
                                });

                            }

                            setTimeout(function() {
                                if (!$this.hasClass("dt-hovered")) {
                                    $this.children("ul").removeClass("right-overflow");
                                }
                            }, 400);
                        }
                    }, 150);
                }

                $this.find("> a").removeClass("dt-clicked");
            });
        };

    });

    /* Main navigation: end */

}

function floatmenucontrols_mouseenter() {
    if (typeof(parent.floatmenucontrols_mouseenter) == "function") {
        parent.floatmenucontrols_mouseenter();
    }
}

function floatmenucontrols_mouseout() {
    if (typeof(parent.floatmenucontrols_mouseout) == "function") {
        parent.floatmenucontrols_mouseout();
    }
}

function base64_decode(str) {
    var base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
    ];
    var c1, c2, c3, c4;
    var i, j, len, r, l, out;

    len = str.length;
    if (len % 4 != 0) {
        return '';
    }
    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)) {
        return '';
    }
    if (str.charAt(len - 2) == '=') {
        r = 1;
    } else if (str.charAt(len - 1) == '=') {
        r = 2;
    } else {
        r = 0;
    }
    l = len;
    if (r > 0) {
        l -= 4;
    }
    l = (l >> 2) * 3 + r;
    out = new Array(l);

    i = j = 0;
    while (i < len) {
        // c1
        c1 = base64DecodeChars[str.charCodeAt(i++)];
        if (c1 == -1) break;

        // c2
        c2 = base64DecodeChars[str.charCodeAt(i++)];
        if (c2 == -1) break;

        out[j++] = String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        // c3
        c3 = base64DecodeChars[str.charCodeAt(i++)];
        if (c3 == -1) break;

        out[j++] = String.fromCharCode(((c2 & 0x0f) << 4) | ((c3 & 0x3c) >> 2));

        // c4
        c4 = base64DecodeChars[str.charCodeAt(i++)];
        if (c4 == -1) break;

        out[j++] = String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return toUTF16(out.join(''));
}

function toUTF8(str) {
    if (str.match(/^[\x00-\x7f]*$/) != null) {
        return str.toString();
    }
    var out, i, j, len, c, c2;
    out = [];
    len = str.length;
    for (i = 0, j = 0; i < len; i++, j++) {
        c = str.charCodeAt(i);
        if (c <= 0x7f) {
            out[j] = str.charAt(i);
        } else if (c <= 0x7ff) {
            out[j] = String.fromCharCode(0xc0 | (c >>> 6),
                0x80 | (c & 0x3f));
        } else if (c < 0xd800 || c > 0xdfff) {
            out[j] = String.fromCharCode(0xe0 | (c >>> 12),
                0x80 | ((c >>> 6) & 0x3f),
                0x80 | (c & 0x3f));
        } else {
            if (++i < len) {
                c2 = str.charCodeAt(i);
                if (c <= 0xdbff && 0xdc00 <= c2 && c2 <= 0xdfff) {
                    c = ((c & 0x03ff) << 10 | (c2 & 0x03ff)) + 0x010000;
                    if (0x010000 <= c && c <= 0x10ffff) {
                        out[j] = String.fromCharCode(0xf0 | ((c >>> 18) & 0x3f),
                            0x80 | ((c >>> 12) & 0x3f),
                            0x80 | ((c >>> 6) & 0x3f),
                            0x80 | (c & 0x3f));
                    } else {
                        out[j] = '?';
                    }
                } else {
                    i--;
                    out[j] = '?';
                }
            } else {
                i--;
                out[j] = '?';
            }
        }
    }
    return out.join('');
}

function toUTF16(str) {
    if ((str.match(/^[\x00-\x7f]*$/) != null) ||
        (str.match(/^[\x00-\xff]*$/) == null)) {
        return str.toString();
    }
    var out, i, j, len, c, c2, c3, c4, s;

    out = [];
    len = str.length;
    i = j = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxx xxxx
                out[j++] = str.charAt(i - 1);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                c2 = str.charCodeAt(i++);
                out[j++] = String.fromCharCode(((c & 0x1f) << 6) |
                    (c2 & 0x3f));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                c2 = str.charCodeAt(i++);
                c3 = str.charCodeAt(i++);
                out[j++] = String.fromCharCode(((c & 0x0f) << 12) |
                    ((c2 & 0x3f) << 6) |
                    (c3 & 0x3f));
                break;
            case 15:
                switch (c & 0xf) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 1111 0xxx  10xx xxxx  10xx xxxx  10xx xxxx
                        c2 = str.charCodeAt(i++);
                        c3 = str.charCodeAt(i++);
                        c4 = str.charCodeAt(i++);
                        s = ((c & 0x07) << 18) |
                            ((c2 & 0x3f) << 12) |
                            ((c3 & 0x3f) << 6) |
                            (c4 & 0x3f) - 0x10000;
                        if (0 <= s && s <= 0xfffff) {
                            out[j++] = String.fromCharCode(((s >>> 10) & 0x03ff) | 0xd800,
                                (s & 0x03ff) | 0xdc00);
                        } else {
                            out[j++] = '?';
                        }
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        // 1111 10xx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                        i += 4;
                        out[j++] = '?';
                        break;
                    case 12:
                    case 13:
                        // 1111 110x  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                        i += 5;
                        out[j++] = '?';
                        break;
                }
        }
    }
    return out.join('');
}

function weiBoAndWeiXinToolTip() {
    //ie8ä¸æ”¯æŒ
    if (jQuery("html#ie8").length == 1) {
        return false;
    }
    Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
    };
    var objs = jQuery(".soc-ico .weixin");
    objs.each(function() {
        var obj = jQuery(this);
        var name = obj.attr("data-href");
        obj.attr("title", '');
        var title = "<img src='/FeiEditor/public_api/getImageFromWebApi/weixin/" + name + "'  width='160'/><div>è¯·æ‰«äºŒç»´ç å…³æ³¨å¾®ä¿¡</div>";
        var data = { tipJoint: "bottom", style: "dark" };
        new Opentip(obj, title, data);
    })
    var objs = jQuery(".soc-ico .weibo");
    objs.each(function() {
        var obj = jQuery(this);
        var name = obj.attr("data-href");
        obj.attr("title", '');
        var title = "<img src='/FeiEditor/public_api/getImageFromWebApi/weibo/" + name + "' width='160' /><div>è¯·æ‰«äºŒç»´ç å…³æ³¨å¾®åš</div>";
        var data = { tipJoint: "bottom", style: "dark" };
        new Opentip(obj, title, data);
    })


}

function toolTip(objs) {
    //ie8ä¸æ”¯æŒ
    if (jQuery("html#ie8").length == 1) {
        return false;
    }
    if (typeof(objs) == "undefined") {
        objs = jQuery("[data-tooltip='on']");
    }
    Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
    };
    objs.each(function() {
        var obj = jQuery(this);
        var title = jQuery(this).attr("data-original-title");
        if (!title) title = "";
        var image = jQuery(this).attr("data-original-image");

        var imagewidth = jQuery(this).attr("data-original-imagewidth");
        var imageheight = jQuery(this).attr("data-original-imageheight");
        if (image) {
            if (!imagewidth) imagewidth = 150;
            if (!imageheight) imageheight = 150;
            title = "<div>" + title + "</div>" + "<img src='" + image + "'  style='width:" + imagewidth + "px;height:" + imageheight + "px'/>";
        }
        var cate = jQuery(this).attr("data-tooltip-cate");
        var data = "";
        if (cate == 1) {
            data = { tipJoint: "bottom" };
        } else if (cate == 2) {
            data = { tipJoint: "bottom", style: "alert" };
        } else if (cate == 3) {
            data = { tipJoint: "bottom", style: "dark" };
        } else if (cate == 4) {
            data = { tipJoint: "bottom", style: "glass" };
        } else if (cate == 5) {
            data = { tipJoint: "bottom right", style: "dark" };
        } else if (cate == 6) {
            data = { tipJoint: "bottom left", style: "dark" };
        } else if (cate == 7) {
            data = { tipJoint: "top right", style: "dark" };
        } else if (cate == 8) {
            data = { style: "stemsDemo", tipJoint: "bottom right", stem: "bottom right", stemLength: 10, stemBase: 30 };
        } else if (cate == 9) {
            data = { style: "stemsDemo", tipJoint: "bottom left", stem: "bottom left", stemLength: 10, stemBase: 30 };
        } else if (cate == 10) {
            data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "top", borderColor: "#317CC5" };
        } else if (cate == 11) {
            data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom", borderColor: "#317CC5" };
        } else if (cate == 12) {
            data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom left", borderColor: "#317CC5" }
        }
        if (data != "") {
            new Opentip(obj, title, data);
        }
    })
}

function toVisit(obj) {
    var p = jQuery(obj).closest(".qfy_item_post");

    var post_id = p.attr("data-postid");
    var pt = p.find('[data-title="true"]');
    var title = "";
    if (pt.length > 0) {
        var title = jQuery.trim(pt.text());
    }
    jConfirm("ç¡®è®¤æ˜¯å¦ç¦»å¼€å½“å‰é¡µé¢ï¼Œè®¿é—®é¡µé¢ã€" + title + "ã€‘ï¼Ÿ", function() {
        top.$('#pageUrl').val(post_id).change();
    });

}

function toEditor(obj, e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    parent.toEditor(obj);
}

function toCopy(obj) {
    var p = jQuery(obj).closest(".qfy_item_post");
    var id = p.closest(".vc-element").attr("data-model-id");


    var post_id = p.attr("data-postid");
    parent.bitSettingsEdit(post_id, "å¤åˆ¶ä¸€ä¸ªé¡µé¢", "copyPage", "COPY");
}

function toDelete(obj) {
    parent.toDelete(obj);
}

function toEditProduct(obj) {
    parent.toEditProduct(obj);
    return false;
}

function toRedirectProduct(obj) {
    parent.toRedirectProduct(obj);
    return false;
}

function toDeleteCate(obj) {
    parent.toDeleteCate(obj);
}

function pageNav(paged) {
    var obj = top.jQuery("#site-content-iframe");
    var url = obj.attr("src");
    if (url.indexOf("paged") > -1) {
        var tmp = url.split("&paged");
        url = tmp[0] + "&paged=" + paged;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&paged=" + paged;
        } else {
            url = url + "?paged=" + paged;
        }
    }
    obj.attr("src", url);
}

function pageCate(page_id, cate_id) {
    var obj = top.jQuery("#site-content-iframe");
    var url = obj.attr("src");
    if (cate_id == 0) cate_id = "";
    if (url.indexOf("post_id") > -1) {
        var tmp = url.split("&post_id");
        url = tmp[0] + "&post_id=" + page_id + "&categories=" + cate_id;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&post_id=" + page_id + "&categories=" + cate_id;
        } else {
            url = url + "?post_id=" + page_id + "&categories=" + cate_id;
        }

    }

    jConfirm("ç¡®è®¤æ˜¯å¦éœ€è¦æ‰“å¼€è¯¥åˆ†ç±»åˆ—è¡¨é¡µé¢ï¼Ÿ", function() {
        obj.attr("src", url);
    });

    return false;
}

function searchResult(p) {

    var action = jQuery(p).attr("action");
    var search = jQuery(p).find("[name='search']").val();
    var page_id = jQuery(p).find("[name='page_id']").val();
    var searchtype = jQuery(p).find("[name='searchtype']").val();
    if (search == "") return false;
    var obj = top.jQuery("#site-content-iframe");
    if (obj.length > 0) {
        var url = obj.attr("src");
        if (url.indexOf("post_id") > -1) {
            var tmp = url.split("&post_id");
            url = tmp[0] + "&post_id=" + page_id + "&search=" + encodeURIComponent(search) + "&searchtype=" + searchtype;
        } else {
            if (url.indexOf("?") > -1) {
                url = url + "&post_id=" + page_id + "&search=" + encodeURIComponent(search) + "&searchtype=" + searchtype;
            } else {
                url = url + "?post_id=" + page_id + "&search=" + encodeURIComponent(search) + "&searchtype=" + searchtype;
            }
        }
        obj.attr("src", url);
        return false;
    }
}

var clicksmsnum = 0;

function toverify() {
    smsWarning("");
    var p = jQuery("[name='sms_phone']").val();
    var image_code = jQuery("[name='sms_image']").val();
    var hidden_rand = jQuery("[name='hidden_rand']").val();
    if (jQuery.trim(p) == "" || p == null) {
        smsWarning("æ‰‹æœºå·ç ä¸èƒ½ä¸ºç©º");
        return;
    }
    if (jQuery.trim(image_code) == "" || image_code == null) {
        smsWarning("å›¾å½¢éªŒè¯ç ä¸èƒ½ä¸ºç©º");
        return;
    }
    var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
    var str = '<a class="bit-button-waiting countVerify" style="width:100%;height:30px;margin-top:5px; line-height:30px;font-size:14px;color:#898989;background:#e6e6e6;border-color:#d9d9d9;">30</a>';
    parentDIv.find(".bitButtonVerify").after(str);
    countVerify();
    jQuery.post("/admin/admin-ajax.php", { "action": "toverifySms", "phone": jQuery.trim(p), "image_code": jQuery.trim(image_code), "hidden_rand": hidden_rand },
        function(data) {
            if (data == "success") {
                smsWarning("çŸ­ä¿¡å·²ç»æˆåŠŸå‘é€ï¼Œè¯·æŸ¥çœ‹æ‚¨çš„æ‰‹æœºã€‚æ‚¨å¯èƒ½åœ¨1-5åˆ†é’Ÿä¹‹åŽæ”¶åˆ°çŸ­ä¿¡", 1);
                clicksmsnum++;
                if (clicksmsnum > 1 && (p.indexOf("+") < 0 || p.indexOf("+86") > -1)) {
                    jQuery(".bitButtonVerify").attr("onclick", "tocallbutton()");
                    jQuery(".bitButtonVerify .iconText").html("æ”¶ä¸åˆ°çŸ­ä¿¡?");
                }
            } else if (data == "empty") {
                jQuery(".bit-button-waiting.countVerify").remove();
                smsWarning("æ‰‹æœºå·ç ä¸èƒ½ä¸ºç©º");
            } else if (data == "errorphone") {
                jQuery(".bit-button-waiting.countVerify").remove();
                smsWarning("æ‰‹æœºå·ç æ ¼å¼é”™è¯¯(å›½é™…å·ç ç¤ºä¾‹ï¼šä¾‹å¦‚ç¾Žå›½+112345678901)");
            } else if (data == "image_empty") {
                jQuery(".bit-button-waiting.countVerify").remove();
                smsWarning("å›¾å½¢éªŒè¯ç ä¸èƒ½ä¸ºç©º");
            } else if (data == "image_error" || data == "image_notmatch") {
                jQuery(".bit-button-waiting.countVerify").remove();
                smsWarning("å›¾å½¢éªŒè¯ç å¡«å†™é”™è¯¯");
            } else if (data == "loginout" || data == "0") {
                smsWarning("ä¼šè¯å·²ç»è¿‡æœŸï¼Œè¯·é‡æ–°ç™»å½•");
            } else if (data == "exist") {
                smsWarning("çŸ­ä¿¡å·²ç»å‘é€ï¼Œè¯·æŸ¥çœ‹æ‚¨çš„æ‰‹æœº,30ç§’ä¹‹å†…åªèƒ½èŽ·å–ä¸€æ¬¡éªŒè¯ç ");
                clicksmsnum++;
                if (clicksmsnum > 1 && (p.indexOf("+") < 0 || p.indexOf("+86") > -1)) {
                    jQuery(".bitButtonVerify").attr("onclick", "tocallbutton()");
                    jQuery(".bitButtonVerify .iconText").html("æ”¶ä¸åˆ°çŸ­ä¿¡?");
                }
            } else if (data == "existUserPhone") {
                jQuery(".bit-button-waiting.countVerify").remove();
                smsWarning("æ‰‹æœºå·ç å·²ç»ç»‘å®šäº†å¸å·,ä¸€ä¸ªæ‰‹æœºå·ç åªèƒ½ç»‘å®šä¸€ä¸ªå¸å·å“¦");
            } else if (data == "limitPhone") {
                smsWarning("1ä¸ªå°æ—¶å†…å¯¹ä¸€ä¸ªå·ç ä¸èƒ½å‘é€è¶…è¿‡10æ¡çŸ­ä¿¡");
            } else if (data == "limitIp") {
                smsWarning("1ä¸ªå°æ—¶å†…ä¸€ä¸ªå®¢æˆ·IPç«¯ä¸èƒ½å‘é€è¶…è¿‡10æ¡çŸ­ä¿¡");
            } else if (data == "failed") {
                jQuery(".bit-button-waiting.countVerify").remove();
                smsWarning("çŸ­ä¿¡å‘é€å¤±è´¥ï¼Œè¯·30ç§’åŽå†è¯•ä¸€æ¬¡");
                clicksmsnum++;
                if (clicksmsnum > 1 && (p.indexOf("+") < 0 || p.indexOf("+86") > -1)) {
                    jQuery(".bitButtonVerify").attr("onclick", "tocallbutton()");
                    jQuery(".bitButtonVerify .iconText").html("æ”¶ä¸åˆ°çŸ­ä¿¡?");
                }
            } else {
                smsWarning("çŸ­ä¿¡å‘é€å¼‚å¸¸,è¯·30ç§’åŽå†è¯•ä¸€æ¬¡");
                clicksmsnum++;
                if (clicksmsnum > 1 && (p.indexOf("+") < 0 || p.indexOf("+86") > -1)) {
                    jQuery(".bitButtonVerify").attr("onclick", "tocallbutton()");
                    jQuery(".bitButtonVerify .iconText").html("æ”¶ä¸åˆ°çŸ­ä¿¡?");
                }
            }

        })
}

function tocallbutton() {
    smsWarning("");
    if (confirm("ç¡®è®¤æ˜¯å¦é€šè¿‡å‘¼å«ä½ çš„æ‰‹æœºæ¥èŽ·å–è¯­è¨€éªŒè¯ç ï¼Ÿ")) {

        var p = jQuery("[name='sms_phone']").val();
        var image_code = jQuery("[name='sms_image']").val();
        var hidden_rand = jQuery("[name='hidden_rand']").val();
        if (jQuery.trim(p) == "" || p == null) {
            smsWarning("æ‰‹æœºå·ç ä¸èƒ½ä¸ºç©º");
            return;
        }
        if (jQuery.trim(image_code) == "" || image_code == null) {
            smsWarning("å›¾å½¢éªŒè¯ç ä¸èƒ½ä¸ºç©º");
            return;
        }
        var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
        var str = '<a class="bit-button-waiting countVerify" style="width:100%;height:30px;margin-top:5px; line-height:30px;font-size:14px;color:#898989;background:#e6e6e6;border-color:#d9d9d9;">30</a>';
        parentDIv.find(".bitButtonVerify").after(str);
        countVerify();
        jQuery.post("/admin/admin-ajax.php", { "action": "toverifyCall", "phone": jQuery.trim(p), "image_code": jQuery.trim(image_code), "hidden_rand": hidden_rand },
            function(data) {
                if (data == "success") {
                    smsWarning("æˆ‘ä»¬æ­£åœ¨å°è¯•å‘¼å«ä½ çš„æ‰‹æœºï¼Œè¯·æ³¨æ„æŽ¥å¬è¯­è¨€æç¤º", 1);
                } else if (data == "empty") {
                    jQuery(".bit-button-waiting.countVerify").remove();
                    smsWarning("æ‰‹æœºå·ç ä¸èƒ½ä¸ºç©º");
                } else if (data == "errorphone") {
                    jQuery(".bit-button-waiting.countVerify").remove();
                    smsWarning("æ‰‹æœºå·ç æ ¼å¼é”™è¯¯");
                } else if (data == "image_empty") {
                    jQuery(".bit-button-waiting.countVerify").remove();
                    smsWarning("å›¾å½¢éªŒè¯ç ä¸èƒ½ä¸ºç©º");
                } else if (data == "image_error" || data == "image_notmatch") {
                    jQuery(".bit-button-waiting.countVerify").remove();
                    smsWarning("å›¾å½¢éªŒè¯ç å¡«å†™é”™è¯¯");
                } else if (data == "loginout" || data == "0") {
                    smsWarning("ä¼šè¯å·²ç»è¿‡æœŸï¼Œè¯·é‡æ–°ç™»å½•");
                } else if (data == "existUserPhone") {
                    jQuery(".bit-button-waiting.countVerify").remove();
                    smsWarning("æ‰‹æœºå·ç å·²ç»ç»‘å®šäº†å¸å·,ä¸€ä¸ªæ‰‹æœºå·ç åªèƒ½ç»‘å®šä¸€ä¸ªå¸å·å“¦");
                } else if (data == "limitPhone") {
                    smsWarning("1ä¸ªå°æ—¶å†…å¯¹ä¸€ä¸ªå·ç ä¸èƒ½å‘é€è¶…è¿‡10æ¡çŸ­ä¿¡");
                } else if (data == "limitIp") {
                    smsWarning("1ä¸ªå°æ—¶å†…ä¸€ä¸ªå®¢æˆ·IPç«¯ä¸èƒ½å‘é€è¶…è¿‡10æ¡çŸ­ä¿¡");
                } else if (data == "failed") {
                    smsWarning("æ‹¨æ‰“ç”µè¯å¤±è´¥,è¯·30ç§’åŽå†è¯•ä¸€æ¬¡");
                } else {
                    smsWarning("æ‹¨æ‰“ç”µè¯å¤±è´¥,è¯·30ç§’åŽå†è¯•ä¸€æ¬¡");
                }

            })
    }
}

function countVerify() {
    if (jQuery(".bit-button-waiting.countVerify").length == 1) {
        var countVerifyNum = jQuery(".bit-button-waiting.countVerify").text();
        if (countVerifyNum * 1 < 2) {
            jQuery(".bit-button-waiting.countVerify").remove();
        }
        setTimeout(function() {
            countVerifyNum = countVerifyNum * 1 - 1;
            jQuery(".bit-button-waiting.countVerify").text(countVerifyNum);
            countVerify();
        }, 1000);

    }

}

function countVerifyCall() {
    if (jQuery(".tocallbutton").css("opacity") != "1") {
        var countVerifyNum = jQuery(".tocallbutton").attr("data-second");
        if (countVerifyNum * 1 < 2) {
            jQuery(".tocallbutton").css("opacity", "1").attr("title", "").attr("data-second", 0).css("cursor", "pointer");
        }
        setTimeout(function() {
            countVerifyNum = countVerifyNum * 1 - 1;
            jQuery(".tocallbutton").attr("title", "ç­‰å¾…" + countVerifyNum + "såŽå¯ä»¥é‡æ‹¨").attr("data-second", countVerifyNum);
            countVerifyCall();
        }, 1000);

    }

}

function toSubmitPhoneSms() {
    smsWarning("");
    var p = jQuery("[name='sms_phone']").val();
    if (jQuery.trim(p) == "" || p == null) {
        smsWarning("æ‰‹æœºå·ç ä¸èƒ½ä¸ºç©º");
        return;
    }
    var c = jQuery("[name='sms_code']").val();
    if (jQuery.trim(c) == "" || c == null) {
        smsWarning("æ‰‹æœºéªŒè¯ç ä¸èƒ½ä¸ºç©º");
        return;
    }
    var image_code = jQuery("[name='sms_image']").val();
    if (jQuery.trim(image_code) == "" || image_code == null) {
        smsWarning("å›¾å½¢éªŒè¯ç ä¸èƒ½ä¸ºç©º");
        return;
    }
    var hidden_rand = jQuery("[name='hidden_rand']").val();
    var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
    if (parentDIv.find(".bitButtonSubmitDiv .bit-button-waiting").length == 1) {
        return;
    }
    var str = '<a class="bit-button-waiting" style="background:none;border:0;position:relative;"><img style=" height: 20px;margin-left: 10px;position: relative;top: 5px;" src="/qfy-content/plugins/qfyuser/skins/elegant/img/loading.gif"></a>';
    parentDIv.find(".bitButtonSubmit").after(str);
    parentDIv.find(".bitButtonSubmit").css("opacity", "0.65").css("cursor", "default");
    jQuery.post("/admin/admin-ajax.php", { "action": "successToVerify", "phone": jQuery.trim(p), "code": jQuery.trim(c), "image_code": jQuery.trim(image_code), hidden_rand: hidden_rand },
        function(data) {
            parentDIv.find(".bit-button-waiting").remove();
            parentDIv.find(".bitButtonSubmit").css("opacity", "1").css("cursor", "pointer");
            if (data == "success") {

                if (!jQuery("body").hasClass("only_show_sms_content")) {
                    smsWarning("æ‰‹æœºéªŒè¯æˆåŠŸï¼Œç³»ç»Ÿæ­£åœ¨è‡ªåŠ¨è·³è½¬åˆ°ç½‘ç«™ç®¡ç†é¡µé¢", 1);
                    if (jQuery("#redirect_sms_url").val() == "") {
                        location.href = "/";
                    } else {
                        location.href = jQuery("#redirect_sms_url").val();
                    }
                } else {
                    smsWarning("æ‰‹æœºéªŒè¯æˆåŠŸï¼Œè¯·å…³é—­å¼¹æ¡†ï¼Œç»§ç»­ä¸‹é¢çš„æ“ä½œ", 1);
                }
            } else if (data == "loginout" || data == "0") {
                smsWarning("ä¼šè¯å·²ç»è¿‡æœŸï¼Œè¯·é‡æ–°ç™»å½•");
            } else if (data == "None") {
                smsWarning("éªŒè¯å¤±è´¥ï¼Œè¯·è®¤çœŸå¡«å†™ç›¸å…³ä¿¡æ¯");
            } else if (data == "image_empty") {
                smsWarning("å›¾å½¢éªŒè¯ç ä¸èƒ½ä¸ºç©º");
            } else if (data == "image_error" || data == "image_notmatch") {
                smsWarning("å›¾å½¢éªŒè¯ç å¡«å†™é”™è¯¯");
            } else if (data == "fail") {
                smsWarning("éªŒè¯å¤±è´¥ï¼Œä¸€ä¸ªæ‰‹æœºéªŒè¯ç åªèƒ½ä½¿ç”¨ä¸€æ¬¡ï¼Œè¯·é‡æ–°èŽ·å–");
            } else if (data == "expire") {
                smsWarning("éªŒè¯å¤±è´¥ï¼Œæ‰‹æœºéªŒè¯ç å·²ç»è¿‡æœŸï¼Œè¯·é‡æ–°èŽ·å–");
            } else if (data == "nomatch") {
                smsWarning("éªŒè¯å¤±è´¥ï¼ŒéªŒè¯ç å‘é€æ‰‹æœºä¸Žå½“å‰ç»‘å®šæ‰‹æœºä¸ç¬¦");
            } else if (data == "nomatchcode") {
                smsWarning("éªŒè¯å¤±è´¥ï¼Œæ‰‹æœºéªŒè¯ç é”™è¯¯");
            } else {
                smsWarning("éªŒè¯å¤±è´¥,æœªçŸ¥å¼‚å¸¸ï¼Œè¯·å°è¯•é‡æ–°éªŒè¯");
            }
        })

}

function smsWarning(content, flag) {
    var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
    parentDIv.find(".sms-warning").html("");
    parentDIv.find(".btn-warning").html("");
    if (content == "") {
        return false;
    }
    if (flag == "1") {
        parentDIv.find(".sms-warning").html("<span style='color:green;'>" + content + "...</span>");
    } else {
        parentDIv.find(".btn-warning").html(content);
    }
}

function cart_button_warning() {
    jAlert("ç¼–è¾‘æƒ…å†µä¸‹ï¼Œæ— æ³•ä½¿ç”¨è´­ç‰©è½¦åŠŸèƒ½ã€‚å¦‚æžœä¿®æ”¹å•†åŸŽé»˜è®¤é¡µé¢ï¼Œä½ å¯ä»¥ä»Žå·¦ä¸Šè§’é€‰æ‹©åŠŸèƒ½é¡µé¢è¿›è¡Œç¼–è¾‘");
}

function toorderview(id) {
    id = id.replace("#", "");
    var obj = top.jQuery("#site-content-iframe");
    var page_id = top.jQuery("#pageUrl").val();
    var url = obj.attr("src");
    if (url.indexOf("post_id") > -1) {
        var tmp = url.split("&post_id");
        url = tmp[0] + "&post_id=" + page_id + "&view-order=" + id;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&post_id=" + page_id + "&view-order=" + id;
        } else {
            url = url + "?post_id=" + page_id + "&view-order=" + id;
        }
    }


    obj.attr("src", url);
}

function toorderpage(page_id) {

    var obj = top.jQuery("#site-content-iframe");
    var url = obj.attr("src");
    if (url.indexOf("post_id") > -1) {
        var tmp = url.split("&post_id");
        url = tmp[0] + "&post_id=" + page_id;
    } else {
        if (url.indexOf("?") > -1) {
            url = url + "&post_id=" + page_id;
        } else {
            url = url + "?post_id=" + page_id;
        }
    }
    obj.attr("src", url);
}

function checkCommentForm(obj) {
    if (top != self) {
        top.jAlert("ç¼–è¾‘çŠ¶æ€ä¸‹ä¸èƒ½æäº¤ï¼Œè¯·åœ¨é¢„è§ˆæ¨¡å¼ä¸‹ä½¿ç”¨ï¼");
        return false;
    }
    var form = jQuery(obj);
    var text1 = form.attr("data-text_7") ? form.attr("data-text_7") : "è¯·è®¤çœŸå¡«å†™è¯„ä»·å†…å®¹ï¼Œå­—æ•°ä¸å¾—å°‘äºŽ10ä¸ªå­—ã€‚";
    var text2 = form.attr("data-text_9") ? form.attr("data-text_9") : "è¯·å¡«å†™å¿…å¡«é¡¹ç›®ã€‚";
    var text3 = form.attr("data-text_10") ? form.attr("data-text_10") : "è¯·è¾“å…¥æœ‰æ•ˆçš„åœ°å€é‚®ä»¶ã€‚";
    var text4 = form.attr("data-text_11") ? form.attr("data-text_11") : "æäº¤æˆåŠŸ";
    var text5 = form.attr("data-button_texting") ? form.attr("data-button_texting") : "æäº¤ä¸­";


    var comment = jQuery.trim(form.find("#comment").val());
    if (comment.length < 10) {
        if (top != self) { top.jAlert(text1) } else { alert(text1) };
        return false;
    }
    if (form.find("#author[aria-required='true']").length > 0) {
        var author = jQuery.trim(form.find("#author[aria-required='true']").val());
        if (author == "") {
            if (top != self) { top.jAlert(text2) } else { alert(text2) };
            return false;
        }
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var email = jQuery.trim(form.find("#email[aria-required='true']").val());
        if (email == "") {
            if (top != self) { top.jAlert(text2) } else { alert(text2) };
            return false;
        } else if (!reg.test(email)) {
            if (top != self) { top.jAlert(text3) } else { alert(text3) };
            return false;
        }
    }
    var url = form.attr("action");
    var old_submit_text = form.find("#submit").val();
    if (form.find("#submit").val() == text5 + "...") {
        return false;
    }
    form.find("#comment_parent").val(0);
    form.find("#hide_content").remove();
    form.find("#submit").val(text5 + "...");
    var p = form.closest(".qfy-comments");
    var pp = p.parent();
    if (form.find("[name='type']").val() == "nomarl") {
        if (form.find("#short_atts").length == 0) {
            form.prepend("<input type='hidden' name='short_atts'  id='short_atts' value='" + jQuery(obj).closest(".qfy-comments").attr("data-atts") + "' />");
        } else {
            form.find("#short_atts").val(jQuery(obj).closest(".qfy-comments").attr("data-atts"));
        }
    }
    jQuery.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        error: function(request) {
            if (top != self) { top.jAlert("è¿žæŽ¥å¼‚å¸¸ã€‚") } else { alert("è¿žæŽ¥å¼‚å¸¸"); };
            form.find("#submit").val(old_submit_text);
        },
        success: function(data) {
            if (data.indexOf("success") > -1) {
                if (form.closest(".qfy-comments").length > 0) {
                    form.find("#submit").val(text4);
                    var tmp = data.split('|<result>|');
                    p.replaceWith(tmp[1]);
                    pp.find(".commentlist").show();
                    var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;">' + text4 + '</div></div>';
                    qfy_popinfo_fun(success_htm, 2);
                } else {
                    var success_htm = '<div style="text-align:center;" ><img class="qfy_pop_checkedimg" src="/FeiEditor/images/bitcms/check.png" style="margin-top:20px;margin-bottom:20px;" /><div style="padding-bottom:20px;">' + text4 + '</div></div>';
                    qfy_popinfo_fun(success_htm, 2);
                    setTimeout(function() {
                        location.reload();
                    }, 3000)
                }
            } else {
                if (form.attr("data-text_12")) {
                    if (data == "å¯¹ä¸èµ·ï¼Œä½ å·²ç»æäº¤è¿‡è¯„è®ºå•¦ã€‚è¯¥å•†å“æˆ–é¡µé¢ä½ åªèƒ½è¯„ä»·ä¸€æ¬¡ï¼") {
                        data = form.attr("data-text_12");
                    }
                } else if (form.attr("data-text_13")) {
                    if (data == "ç¦æ­¢å›žå¤ï¼Œè¶…è¿‡æ¡æ•°é™åˆ¶...") {
                        data = form.attr("data-text_13");
                    }
                }
                if (top != self) { top.jAlert(data) } else { alert(data); };
                form.find("#submit").val(old_submit_text);
            }

        }
    });
    return false;
}

function response_comment(obj) {
    var p = jQuery(obj).parent();
    jQuery(obj).closest(".comment").find(".response_comment" + p.attr("data-id")).show();
    p.find(".response_comment_span").hide();
    p.find(".response_comment_tosave").show();
    p.find(".response_comment_tocancel").show();
}

function response_comment_edit(obj) {
    var p = jQuery(obj).closest(".comment-body");
    var v = jQuery.trim(p.find(">.content").html());
    var id = p.attr("data-id");
    var status = p.attr("data-status");
    var t1 = jQuery(obj).attr("data-text_4") ? jQuery(obj).attr("data-text_4") : "å·²å®¡æ ¸";
    var t2 = jQuery(obj).attr("data-text_5") ? jQuery(obj).attr("data-text_5") : "å¾…å®¡";
    var t3 = jQuery(obj).attr("data-text_6") ? jQuery(obj).attr("data-text_6") : "åžƒåœ¾è¯„è®º";
    var t4 = jQuery(obj).attr("data-text_2") ? jQuery(obj).attr("data-text_2") : "å…³é—­";
    var t5 = jQuery(obj).attr("data-button_text") ? jQuery(obj).attr("data-button_text") : "ä¿å­˜";

    p.find(">.content").hide();
    p.find(".reply.commentmetadata").hide();
    if (p.find(".edit_comment").length == 0) {
        var str = '<div class="edit_comment commentmetadata edit_comment' + id + '"><div style="border: 2px solid rgb(204, 212, 217);"><textarea name="comment"  style="color: rgb(64, 64, 64);font-size:14px;width:100%;border: 0 none; overflow-x: hidden;overflow-y: auto;resize: none; height: 80px;line-height: 20px;" id="editcontent' + id + '" cols="58" rows="10" tabindex="4">' + v + '</textarea><div style="background-color: rgb(246, 248, 249); text-align: right;"><label class="approved" style="font-weight:400px;font-size:12px;color: rgb(0, 128, 0);margin-right:5px;cursor:pointer;" ><input type="radio" value="1" name="comment_status" >' + t1 + '</label><label class="waiting" style="font-weight:400px;font-size:12px;color: rgb(255, 165, 0);margin-right:5px;cursor:pointer;" ><input type="radio" value="0" name="comment_status">' + t2 + '</label><label class="spam" style="font-weight:400px;font-size:12px; color: rgb(255, 0, 0);margin-right:5px;cursor:pointer;" ><input type="radio" value="spam" name="comment_status">' + t3 + '</label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" name="submit" style="border: 1px solid rgb(94, 144, 165); padding: 5px 10px; background-color: rgb(94, 144, 165); color: rgb(255, 255, 255);" class="response_comment_toedit" id="submit" tabindex="5" value="' + t5 + '" onclick="response_comment_toedit(this)">&nbsp;&nbsp;<input type="button" onclick="response_comment_tocancel3(this)" name="cancel" style="border:1px solid #ccc;padding:5px 10px;background-color:#ccc;color:#fff;" id="cancel" tabindex="5" value="' + t4 + '"></div></div></div>';
        p.append(str);
    } else {
        p.find(".edit_comment").show();
    }

    p.find(".edit_comment" + id + " [name='comment_status'][value=" + status + "]").attr("checked", true);
}

function response_comment_tocancel(obj) {
    var p = jQuery(obj).parent();
    jQuery(obj).closest(".comment").find(".response_comment" + p.attr("data-id")).hide();
    p.find(".response_comment_span").show();
    p.find(".response_comment_tosave").hide();
    p.find(".response_comment_tocancel").hide();
}

function response_comment_tocancel2(obj) {
    var p = jQuery(obj).closest(".comment").find(".reply.commentmetadata");
    jQuery(obj).closest(".comment").find(".response_comment" + p.attr("data-id")).hide();
    p.find(".response_comment_span").show();
    p.find(".response_comment_tosave").hide();
    p.find(".response_comment_tocancel").hide();
}

function response_comment_tocancel3(obj) {
    var p = jQuery(obj).closest(".comment-body");
    p.find(">.content").show();
    p.find(".edit_comment.commentmetadata").hide();
    p.find(".reply.commentmetadata").show();
}

function response_comment_toedit(obj) {
    var p = jQuery(obj).closest(".comment-body");
    var pp = jQuery(obj).closest(".qfy-comments").parent();
    var id = p.attr("data-id");
    var comment = p.find("#editcontent" + id).val();
    var dp = p.attr("data-parent");

    if (comment.length < 10) {
        if (top != self) { top.jAlert("è¯·è®¤çœŸå¡«å†™è¯„ä»·å†…å®¹ï¼Œå­—æ•°ä¸å¾—å°‘äºŽ10ä¸ªå­—ã€‚") } else { alert("è¯·è®¤çœŸå¡«å†™è¯„ä»·å†…å®¹ï¼Œå­—æ•°ä¸å¾—å°‘äºŽ10ä¸ªå­—ã€‚") };
        return false;
    }
    var form = jQuery(obj).closest(".qfy-comments").find("form#commentform");
    var url = form.attr("action");
    form.find("#comment_parent").val(dp);
    if (form.find("#comment_approved").length == 0) {
        form.append('<input type="hidden" value="0" id="comment_approved" name="comment_approved">');
    }
    form.find("#comment_approved").val(p.find(".edit_comment" + id + " [name='comment_status']:checked").val());
    if (form.find("#hide_content").length == 0) {
        form.prepend("<input type='hidden' name='hide_content'  id='hide_content' value='" + comment + "' />");
    } else {
        form.find("#hide_content").val(comment);
    }
    if (form.find("#comment_ID").length == 0) {
        form.prepend("<input type='hidden' name='comment_ID'  id='comment_ID' value='" + id + "' />");
    } else {
        form.find("#comment_ID").val(id);
    }
    if (p.find(".response_comment_toedit").val() != p.attr("data-btntext")) {
        return false;
    }
    if (form.find("#short_atts").length == 0) {
        form.prepend("<input type='hidden' name='short_atts'  id='short_atts' value='" + jQuery(obj).closest(".qfy-comments").attr("data-atts") + "' />");
    } else {
        form.find("#short_atts").val(jQuery(obj).closest(".qfy-comments").attr("data-atts"));
    }
    p.find(".response_comment_toedit").val(p.attr("data-btntexting") + "...");
    //....
    jQuery.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        error: function(request) {
            if (top != self) { top.jAlert("è¿žæŽ¥å¼‚å¸¸ã€‚") } else { alert("è¿žæŽ¥å¼‚å¸¸"); };
            p.find(".response_comment_toedit").val(p.attr("data-btntext"));
            form.find("#comment_ID").remove();
            form.find("#comment_approved").remove();
        },
        success: function(data) {
            if (data.indexOf("success") > -1) {
                p.find(".response_comment_toedit").val(p.attr("data-btntext"));
                var tmp = data.split('|<result>|');
                form.closest(".qfy-comments").replaceWith(tmp[1]);
                pp.find(".commentlist").show();

            } else {
                p.find(".response_comment_toedit").val(p.attr("data-btntext"));
                form.find("#comment_ID").remove();
                form.find("#comment_approved").remove();
                if (top != self) { top.jAlert(data) } else { alert(data); };

            }
        }
    });
}

function commentSort(obj, order) {
    var p = jQuery(obj).closest(".qfy-comments");
    var pp = p.parent();
    var form = p.find("form#commentform");
    var comment_post_ID = form.find("#comment_post_ID").val();

    var url = form.attr("action");

    var newsest_text = p.find("#commentmenu.nav-menu-left li:first a").html();
    var oldest_text = p.find("#commentmenu.nav-menu-left li:last a").html();
    p.css("opacity", "0.5");
    jQuery.post(url, { action: "search", comment_post_ID: comment_post_ID, reverse_top_level: order, short_atts: p.attr("data-atts") }, function(data) {
        if (data.indexOf("success") > -1) {
            var tmp = data.split('|<result>|');
            p.replaceWith(tmp[1]);
            pp.find(".commentlist").show();
            if (order == 0) {
                p.find(".comment-nav-left b").html(newsest_text);
            } else {
                p.find(".comment-nav-left b").html(oldest_text);
            }
        }
        p.css("opacity", "1");
    })
}

function next_comment_page(obj, pageid) {
    var p = jQuery(obj).closest(".qfy-comments");
    var form = p.find("form#commentform");
    var comment_post_ID = form.find("#comment_post_ID").val();
    var url = form.attr("action");
    p.css("opacity", "0.5");
    jQuery.post(url + "?cpage=" + pageid, { action: "search", comment_post_ID: comment_post_ID, short_atts: p.attr("data-atts") }, function(data) {
        if (data.indexOf("success") > -1) {
            var tmp = data.split('|<result>|');
            var t = jQuery(tmp[1]).find(".commentlist").html();
            var load = jQuery(tmp[1]).find(".loadmore_inner").html();
            p.find(".commentlist").append(t);
            if (load) {
                p.find(".loadmore_inner").html(load);
            } else {
                p.find(".loadmore_inner").remove();
            }
            p.css("opacity", "1");

        }
    })

}

function removecomment(obj, id) {
    if (confirm(jQuery(obj).attr("data-text"))) {
        var p = jQuery(obj).closest(".qfy-comments");
        var pp = p.parent();
        var form = p.find("form#commentform");
        var comment_post_ID = form.find("#comment_post_ID").val();
        var url = form.attr("action");
        p.find("#div-comment-" + id).css("opacity", "0.5");
        jQuery.post(url, { action: "trash", comment_id: id, comment_post_ID: comment_post_ID, short_atts: p.attr("data-atts") }, function(data) {
            if (data.indexOf("success") > -1) {
                var tmp = data.split('|<result>|');
                p.replaceWith(tmp[1]);
                pp.find(".commentlist").show();
            } else {
                p.find("#div-comment-" + id).css("opacity", "1");
                alert(data);
            }
        })
    }
}

function response_comment_tosave(obj) {
    //å•†å“å’Œæ™®é€šè¯„è®ºï¼Œä¸ä¸€æ ·çš„ç»“æž„
    var p = jQuery(obj).parent();
    var pp = jQuery(obj).closest(".qfy-comments").parent();
    var id = p.attr("data-id");
    var product = true;
    var form = jQuery(obj).closest("#tab-reviews").find("form#commentform");
    if (!id) {
        //æ™®é€š
        p = jQuery(obj).closest(".reply.commentmetadata");
        id = p.attr("data-id");
        product = false;
        form = jQuery(obj).closest(".qfy-comments").find("form#commentform");
        if (form.find("#short_atts").length == 0) {
            form.prepend("<input type='hidden' name='short_atts'  id='short_atts' value='" + jQuery(obj).closest(".qfy-comments").attr("data-atts") + "' />");
        } else {
            form.find("#short_atts").val(jQuery(obj).closest(".qfy-comments").attr("data-atts"));
        }
        var old_submit_text = p.find(".response_comment_tosave").val();
    }
    if (p.find("#replycontent" + id).length > 0) {
        var comment = p.find("#replycontent" + id).val();
    } else {
        var comment = jQuery("#replycontent" + id).val();
    }
    if (comment.length < 10) {
        if (top != self) { top.jAlert("è¯·è®¤çœŸå¡«å†™è¯„ä»·å†…å®¹ï¼Œå­—æ•°ä¸å¾—å°‘äºŽ10ä¸ªå­—ã€‚") } else { alert("è¯·è®¤çœŸå¡«å†™è¯„ä»·å†…å®¹ï¼Œå­—æ•°ä¸å¾—å°‘äºŽ10ä¸ªå­—ã€‚") };
        return false;
    }

    var url = form.attr("action");
    form.find("#comment_parent").val(id);
    if (form.find("#hide_content").length == 0) {
        form.prepend("<input type='hidden' name='hide_content'  id='hide_content' value='" + comment + "' />");
    } else {
        form.find("#hide_content").val(comment);
    }


    if (p.find(".response_comment_tosave").html() == "æäº¤ä¸­..." || p.find(".response_comment_tosave").val() == "æäº¤ä¸­...") {
        return false;
    }
    if (product) {
        p.find(".response_comment_tosave").html("æäº¤ä¸­...");
    } else {
        p.find(".response_comment_tosave").val("æäº¤ä¸­..");
    }
    p.find(".response_comment_tocancel").hide();
    //....
    jQuery.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        error: function(request) {
            if (top != self) { top.jAlert("è¿žæŽ¥å¼‚å¸¸ã€‚") } else { alert("è¿žæŽ¥å¼‚å¸¸"); };
            form.find(".response_comment" + p.attr("data-id")).hide();
            p.find(".response_comment_span").show();
            if (product) {
                p.find(".response_comment_tosave").hide().html("ä¿å­˜");
            } else {
                p.find(".response_comment_tosave").hide().val(old_submit_text);
            }
        },
        success: function(data) {

            if (data.indexOf("success") > -1) {
                if (form.closest(".qfy-comments").length > 0) {
                    p.find(".response_comment_tosave").val("æäº¤æˆåŠŸ");
                    var tmp = data.split('|<result>|');
                    form.closest(".qfy-comments").replaceWith(tmp[1]);
                    pp.find(".commentlist").show();
                } else {
                    if (top != self) { top.jAlert("æäº¤æˆåŠŸã€‚") } else { alert("æäº¤æˆåŠŸ,"); };
                    location.reload();
                }
            } else {
                if (top != self) { top.jAlert(data) } else { alert(data); };
                form.find(".response_comment" + p.attr("data-id")).hide();
                p.find(".response_comment_span").show();
                if (product) {
                    p.find(".response_comment_tosave").hide().html("ä¿å­˜");
                } else {
                    p.find(".response_comment_tosave").val(old_submit_text);
                }
            }
        }
    });
}






function jConfirm(msg, yes, no, title) {
    if (top != self) {
        top.jConfirm(msg, yes, no, title);
    }
}

function jAlert(msg, title) {
    if (top == self) {
        alert(msg);
    } else {
        top.jAlert(msg, title);
    }
}

function setCookie(cname, cvalue, exdays) //cookiesè®¾ç½®
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(Name) //cookiesè¯»å–
{
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        } else return ""
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2]));
    return null;
}

function tobigimage(obj) {
    var bigimage = jQuery(obj).parents(".qfy_showbox").find(".bigImage");
    var height = bigimage.find("img").height();
    var src = jQuery(obj).find("img").attr("src");
    jQuery(obj).parents(".qfy_imgList").find("img").css("border", "0");
    jQuery(obj).find("img").css("border", "2px solid #f63");
    src = src.replace("-150x150", "");
    bigimage.find("img").attr("src", src).height(height);
}

function slideLine(box, stf, delay, speed, h) {

    if (jQuery("#" + box + " div").length == 0) {
        return false;
    }

    var slideBox = document.getElementById(box);
    var delay = delay || 1000,
        speed = speed || 20,
        h = h || 20;
    var tid = null,
        pause = false;
    var s = function() { tid = setInterval(slide, speed); }
    var slide = function() {
        if (pause) return;
        slideBox.scrollTop += 1;
        if (slideBox.scrollTop % h == 0) {
            clearInterval(tid);
            slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
            slideBox.scrollTop = 0;
            setTimeout(s, delay);
        }
    }
    slideBox.onmouseover = function() { pause = true; }
    slideBox.onmouseout = function() { pause = false; }
    setTimeout(s, delay);
}

function vc_gallery_relat() {
    jQuery(".qfe_gallery.rela_other .vc-carousel .qfy_image_vc_item img").each(function() {
        var img = jQuery(this);
        var src = img.attr("src");
        img.css("cursor", "pointer");
        src = src.replace(/-[\d]*x[\d]*/g, "");
        img.unbind("click").bind("click", function() {
            jQuery(".qfe_gallery.rela_other .slides").each(function() {
                var obj = jQuery(this);
                var index = 0;
                obj.find("img").each(function() {
                    var toimg = jQuery(this);
                    var tosrc = toimg.attr("src");
                    tosrc = tosrc.replace(/-[\d]*x[\d]*/g, "");
                    var p = toimg.closest("li");

                    if (!p.hasClass("clone")) {
                        index++;
                    }

                    if (!p.hasClass("clone") && src == tosrc) {
                        p.siblings().removeClass("flex-active-slide");

                        p.addClass("flex-active-slide");
                        var width = p.width();

                        p.parent().css("-webkit-transition-duration", "0.6s");
                        p.parent().css("transition-duration", "0.6s");
                        p.parent().css("-webkit-transform", 'translate3d(-' + (index * width) + 'px, 0px, 0px)');
                        p.parent().css("transform", 'translate3d(-' + (index * width) + 'px, 0px, 0px)');

                        return;
                    }
                })
            })

        })
    });
}

function qfbookformSubmit(obj) {
    if (top == self) {
        var p = jQuery(obj).closest(".QFBOOKSearchsimpleformdiv");
        var url = p.attr("action");
        var t1 = p.find("[name='QFBOOKSearch-check-in-view']").val();
        var t2 = p.find("[name='QFBOOKSearch-check-out-view']").val();
        if (url.indexOf("?") > -1) {
            location.href = url + "&QFBOOKSearch-check-in-view=" + t1 + "&QFBOOKSearch-check-out-view=" + t2;
        } else {
            location.href = url + "?QFBOOKSearch-check-in-view=" + t1 + "&QFBOOKSearch-check-out-view=" + t2;
        }

    }
}

function entersearchqfylist() {
    var event = window.event || arguments.callee.caller.arguments[0];
    if (event.keyCode == 13) {
        jQuery(".qfytemplateslist .itemli").removeClass("active");
        jQuery(".qfytemplateslist .itemli.all-0").addClass("active");
        var tag = "all-0";
        searchqfylist(tag, 1);
    }
}

function qfytemplate_hover() {
    jQuery('.qfy-template-content .qfy_template_lib a').hover(function() {
        var img = $(this).find('img');
        var imgh = img.height();
        var ph = img.parent().height();
        if (imgh > ph && imgh > 300) {
            img.css("transform", "translateY(-" + (imgh - ph) + "px)");
            img.css("transition", "all 5.5s linear 0s");
        }
    }, function() {
        var img = $(this).find('img');
        img.css("transform", "translateY(0px)");
        img.css("transition", "all 2s linear 0s");
    });

}

function searchqfylist(tag, paged, flag) {
    if (top == self) {
        var searchText = jQuery(".qfytemplateslist #form_search").val();
        if (jQuery('.qfytemplateslist .viewmoretemplate .loadingimage').length > 0) {
            return;
        }
        //jQuery('.qfytemplateslist .qfy-template-content').block({ message: '<img src="http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif" />',css: { backgroundColor: 'transparent',borderColor: 'transparent', margin:"0 0 0 -35px",left:"50%",width:'70px',height:'32px',padding:"8px 0 9px 0"},overlayCSS:{backgroundColor:"#F2F2F2",opacity:"0.9",} });
        jQuery('.qfytemplateslist .viewmoretemplate .viewmoretemplate_inner').hide();
        jQuery('.qfytemplateslist .viewmoretemplate').append("<div class='loadingimage' style='text-align:center;margin:50px auto;'><img style='vertical-align: middle;width:30px;' src='http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif' /><span style='color:#0088c2;margin-left:10px;'>æ­£åœ¨è‡ªåŠ¨åŠ è½½æ›´å¤šæ¨¡æ¿...</span></div>");

        var url = jQuery(".qfytemplateslist").attr("data-url");
        jQuery.post("/admin/admin-ajax.php", { "action": "getqfytemplatelist", "url": url, "paged": paged, "searchText": searchText, "tag": jQuery(".qfytemplateslist .itemli.active").attr("data-tag") }, function(data) {
            jQuery('.qfytemplateslist .viewmoretemplate .viewmoretemplate_inner').show();
            jQuery('.qfytemplateslist .viewmoretemplate .loadingimage').remove();
            if (data) {
                if (flag == "append") {
                    jQuery('.qfytemplateslist .qfy-template-content-inner').append(data);
                    jQuery('.qfytemplateslist .viewmoretemplate:first').remove();
                } else {
                    jQuery('.qfytemplateslist .qfy-template-content-inner').html(data);

                }
                if (jQuery(".qfytemplateslist.zh_tw_lang").length > 0) {
                    StranBody(jQuery(".qfytemplateslist.zh_tw_lang")[0]);
                }
                jQuery(".qfytemplateslist .qfypreloadimg").each(function() {
                    var newurl = jQuery(this).attr("data-src");
                    var $this = jQuery(this);
                    jQuery('<img src="' + newurl + '">').load(function() {
                        $this.attr("src", newurl);
                    })
                })
                jQuery(".qfytemplateslist  .info").unbind().click(function() {
                    var url = jQuery(this).attr("data-url");
                    if (top == self) {
                        window.open(url);
                    }
                })
                jQuery(".qfytemplateslist  .use").unbind().click(function() {
                    var url = jQuery(this).attr("data-url");
                    if (top == self) {
                        location.href = url;
                    }
                })
                jQuery(".qfytemplateslist .viewmoretemplate_inner").unbind().click(function() {
                    var tag = "all-0";
                    if (jQuery(".qfytemplateslist .itemli.active").attr("data-tag")) {
                        tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
                    }
                    var paged = jQuery(this).attr("data-page");
                    searchqfylist(tag, paged * 1 + 1, 'append');
                })
                qfytemplate_hover();
                //jQuery('.qfy_template_lib .viewmoretemplate').waypoint('destroy')
                jQuery(".qfy_template_lib .viewmoretemplate").unbind().waypoint({
                    handler: function(direction) {
                        if (jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length > 0) {
                            jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
                        }

                    },
                    triggerOnce: true,
                    offset: "90%",
                })
            }
        });
    }
}

function parallax_scroll_fun() {
    var old_current_url = window.location.href;
    jQuery("#parallax-nav a").each(function(i) {
        var $this = this;
        var obj = jQuery.attr(this, 'href');
        var orgcolor = jQuery("#parallax-nav ul").attr("data-orgcolor");
        if (jQuery("#parallax-nav.mouseEvent").length == 0) {
            jQuery(obj).waypoint({
                handler: function() {
                    if (!jQuery($this).hasClass("active") && isqfyscrolling == false) {

                        jQuery($this).parent().siblings().removeClass("active");
                        jQuery($this).parent().addClass("active");
                        jQuery("#parallax-nav li  a").removeAttr("style");
                        if (top == self) {
                            var current_url = window.location.href;
                            var tmpurl = current_url.split("#");
                            try {
                                window.history.pushState({
                                    path: window.location.href
                                }, '', tmpurl[0] + jQuery($this).attr("href"));
                            } catch (e) {
                                console.error('history.pushState failed, maybe HTML5 is not supported?')
                            }
                        }


                        if (jQuery("#parallax-nav").hasClass("color-weight-dark")) {

                            var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
                            if (!bordercolor) {
                                bordercolor = orgcolor;
                            }
                            jQuery("#parallax-nav li a").css("border-color", bordercolor).css("background-color", "transparent").css("color", bordercolor);
                            jQuery("#parallax-nav .active a").css("border-color", bordercolor).css("background-color", bordercolor).css("color", bordercolor);

                        } else {
                            var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
                            if (!bordercolor) {
                                bordercolor = orgcolor;
                            }
                            jQuery("#parallax-nav li a").css("border-color", "transparent").css("background-color", bordercolor).css("color", bordercolor);
                            jQuery("#parallax-nav li.active a").css("border-color", bordercolor).css("background-color", "transparent").css("color", bordercolor);
                        }
                    }
                },
                /*horizontal:true,*/
                triggerOnce: false
            })
        }
        jQuery($this).parent().click(function(e) {
            e.preventDefault();
            qfyToscroll($this);
            return false;
        });

    })

    if (old_current_url.indexOf("#") < 0) {
        jQuery("#parallax-nav li:first:visible").click();
    }

    if (jQuery("#parallax-nav.mouseEvent").length > 0) {

        var qfyscrollFunc = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if ((e.wheelDelta && e.wheelDelta > 0) || (e.detail && e.detail < 0)) {
                //ä¸Š
                var thisobj = jQuery("#parallax-nav.mouseEvent .active").prev().find("a");
                if (thisobj.length > 0) {
                    qfyToscroll(thisobj)
                    return false;
                }

            } else {

                var thisobj = jQuery("#parallax-nav.mouseEvent .active").next().find("a");
                if (thisobj.length > 0) {
                    qfyToscroll(thisobj);
                    return false;
                }

            }
        }
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', qfyscrollFunc, false);
        } //W3C 
        window.onmousewheel = document.onmousewheel = qfyscrollFunc;

    }

}

var isqfyscrolling = false;

function qfyToscroll(thisobj) {
    if (isqfyscrolling) {
        return;
    }
    isqfyscrolling = true;
    var obj = jQuery(thisobj).attr('href');
    jQuery(thisobj).parent().siblings().removeClass("active");
    jQuery(thisobj).parent().addClass("active");
    var orgcolor = jQuery(thisobj).closest("ul").attr("data-orgcolor");
    jQuery("#parallax-nav li  a").removeAttr("style");
    if (jQuery("#parallax-nav").hasClass("color-weight-dark")) {
        if (orgcolor) {
            jQuery("#parallax-nav li  a").css("border-color", orgcolor).css("color", orgcolor);
        }
        var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
        if (!bordercolor) {
            bordercolor = orgcolor;
        }
        jQuery("#parallax-nav li a").css("border-color", bordercolor).css("background-color", "transparent").css("color", bordercolor);
        jQuery("#parallax-nav .active a").css("border-color", bordercolor).css("background-color", bordercolor).css("color", bordercolor);


    } else {
        if (orgcolor) {
            jQuery("#parallax-nav li  a").css("background-color", orgcolor).css("color", orgcolor);
        }
        var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
        if (!bordercolor) {
            bordercolor = orgcolor;
        }
        jQuery("#parallax-nav li a").css("border-color", "transparent").css("background-color", bordercolor).css("color", bordercolor);
        jQuery("#parallax-nav .active a").css("border-color", bordercolor).css("background-color", "transparent").css("color", bordercolor);
    }

    var speed = 'normal';
    speed = 1000;
    if (jQuery("#parallax-nav").hasClass("speedquick")) {
        speed = speed * 0.75;
    } else if (jQuery("#parallax-nav").hasClass("speedslow")) {
        speed = speed * 1.5;
    }
    if (obj == "#" || obj == "#header") {
        jQuery("html, body").animate({ scrollTop: 0 }, speed, function() {
            isqfyscrolling = false;
            if (top == self) {
                var current_url = window.location.href;
                var tmpurl = current_url.split("#");
                try {
                    window.history.pushState({
                        path: window.location.href
                    }, '', tmpurl[0] + obj);
                } catch (e) {
                    console.error('history.pushState failed, maybe HTML5 is not supported?')
                }
            }
        });
    } else {
        if (jQuery(jQuery(thisobj).attr('href')).length > 0) {
            jQuery("html, body").animate({ scrollTop: jQuery(jQuery(thisobj).attr('href')).offset().top }, speed, 'easeInOutExpo', function() {
                isqfyscrolling = false;
                if (top == self) {
                    var current_url = window.location.href;
                    var tmpurl = current_url.split("#");
                    var tmpobj = jQuery(thisobj).attr('href');
                    try {
                        window.history.pushState({
                            path: window.location.href
                        }, '', tmpurl[0] + tmpobj);
                    } catch (e) {
                        console.error('history.pushState failed, maybe HTML5 is not supported?')
                    }
                }

            });
        } else {
            isqfyscrolling = false;
        }
    }
}

function checkAdvertising() {
    var uuid = dtGlobals.id;
    var href = 'http://www.qifeiye.com?tcode=freesite&uuid=' + uuid;
    if (dtGlobals.qfymodel) { href = "#"; }

    var style = 'display:block !important;opacity: 1 !important;position:fixed !important;bottom:40px !important;left:0 !important;width:116px !important;height:25px !important;line-height:24px !important;background:#23282D !important;z-index:2147483647 !important;text-align:center;color:#fff !important;font-size:12px;border-top-right-radius:3px;border-bottom-right-radius:3px;';
    var content = 'BY èµ·é£žé¡µè‡ªåŠ©å»ºç«™';
    if (jQuery(".qfy_advertising").length == 0) {
        var tmphtml = '<a class="wf-mobile-hidden qfy_advertising" target=_blank style="' + style + '"  rel="external nofollow" href="' + href + '" >' + content + '</a>';
        jQuery("#page").append(tmphtml);
    }

    var opacity = jQuery(".qfy_advertising").css("opacity");

    if (opacity != "1") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    if (jQuery(".qfy_advertising").css("position") != "fixed") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    if (jQuery(".qfy_advertising").css("bottom") != "40px") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    if (jQuery(".qfy_advertising").css("left") != "0px") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var bgcolor = jQuery(".qfy_advertising").css("background-color");
    if (bgcolor != "#000000" && bgcolor != 'rgb(0, 0, 0)') {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var color = jQuery(".qfy_advertising").css("color");
    if (color != "#ffffff" && color != "rgb(255, 255, 255)") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var marginLeft = jQuery(".qfy_advertising").css("margin-left");
    if (marginLeft != "0px") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var marginTop = jQuery(".qfy_advertising").css("margin-top");
    if (marginTop != "0px") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var zindex = jQuery(".qfy_advertising").css("z-index");
    if (zindex != "2147483647") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var width = jQuery(".qfy_advertising").css("width");
    if (width != "116px") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var height = jQuery(".qfy_advertising").css("height");
    if (height != "20px") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var transform = jQuery(".qfy_advertising").css("transform");
    if (transform != "none") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var visible = jQuery(".qfy_advertising").css("visibility");
    if (visible != "visible") {
        jQuery(".qfy_advertising").attr("style", style);
    }
    var display = jQuery(".qfy_advertising").css("display");
    if (display != "block" && jQuery("body").width() > 760) {
        jQuery(".qfy_advertising").attr("style", style);
    }
    if (jQuery(".qfy_advertising").attr("href") != href) {
        jQuery(".qfy_advertising").attr("href", href);
    }
    if (jQuery(".qfy_advertising").html() != content) {
        jQuery(".qfy_advertising").html(content);
    }
    //æ£€æŸ¥é¢„è§ˆä¸‹æ˜¯å¦åœ¨iframe
    if (top != self) {
        try {
            //ä¸åŒhost
            if (top.window.location.host != window.location.host) {
                location.href = "http://www.qifeiye.com";
            }
        } catch (e) {
            //è·¨åŸŸå•¦
            location.href = "http://www.qifeiye.com";
        }
    }



    jQuery("#footer_band").hide();

}

function clickscode(obj) {
    jQuery(obj).attr('src', '/api/scode.php' + '?' + Math.random());
}

function nav_pagemore(obj) {
    if (jQuery(obj).hasClass("vc")) {
        jAlert("ç¼–è¾‘æƒ…å†µä¸‹ï¼Œæ— æ³•ç‚¹å‡»ï¼Œè¯·åœ¨é¢„è§ˆæƒ…å†µä¸‹ä½¿ç”¨ï¼");
        return;
    }
    if (jQuery(obj).find(".loading").length > 0) {
        return;
    }
    if (jQuery(obj).hasClass("notmore")) {
        return;
    }
    var type = 0;
    if (jQuery(obj).parent().hasClass("bitcommerce-pagination")) {
        var p = jQuery(obj).closest(".bitcommerce").parent();
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'] ul.products";
        var childClass = "ul.products";
    } else if (jQuery(obj).closest(".qfy_images_list").length > 0) {
        var p = jQuery(obj).closest(".qfy_images_list");
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'] .qfe_images_list";
        var childClass = ".qfe_images_list";
        if (jQuery(luClass).find(".more.mypages").length > 0) {
            type = 1;
        }
    } else if (jQuery(obj).closest(".advanced_list").length > 0) {
        var p = jQuery(obj).closest(".advanced_list");
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'] .qfe_wrapper ";
        var childClass = ".qfe_wrapper";
        type = 0;
        if (p.find(".list-style7").length > 0) {
            type = 1;
        }
    } else {
        var p = jQuery(obj).closest(".qfe_teaser_grid");
        var id = p.attr("qfyuuid");
        var luClass = "[qfyuuid='" + id + "'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
        var childClass = "ul.qfe_thumbnails";
    }

    if (p.find("div.qfy_list_loading").length > 0) {
        return;
    }
    var list_id = p.find(".qfe_teaser_grid.qfe_content_element").attr("id");

    p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
    p.find(luClass + " li").css("transform", "none").css("top", "auto").css("position", "relative");
    var url = jQuery(obj).attr("data-url");
    var loadtext = jQuery(obj).attr("data-loadtext");
    var old_html = jQuery(obj).find("a").html();
    jQuery(obj).hide();
    jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;"><img src="/FeiEditor/bitSite/images/spinner.gif"><span style="color:#808080;font-size:12px;position: relative; top: -3px;">&nbsp;' + loadtext + '</span></div>');
    jQuery.get(url, function(data) {
        if (list_id) {
            var nowlistobj = jQuery(data).find("#" + list_id + " ul.qfe_thumbnails");
        } else {
            var nowlistobj = jQuery(data).find(luClass);
        }

        var pagemore = nowlistobj.closest(".qfy-element").find(".more.mypages");

        var style = nowlistobj.find(" >li").attr("style");
        p.find(childClass).append(nowlistobj.html());


        p.find(childClass).height("auto");
        p.find(childClass + " li").attr("style", style).css("transform", "none").css("top", "auto").css("position", "relative");
        jQuery(obj).show();
        //jQuery("html, body").animate({ scrollTop:  jQuery(obj).offset().top - jQuery(window).height()/2 }, "fast");
        p.find("div.qfy_list_loading").remove();
        if (type == "1") {
            jQuery(obj).remove();
        }

        if (pagemore.length > 0) {
            jQuery(obj).attr("data-url", pagemore.attr("data-url"));
            jQuery(obj).attr("style", pagemore.attr("style"));
        } else {
            jQuery(obj).remove();
        }

        if (p.find(".categories_filter").length > 0) {
            p.find(".categories_filter a[data-filter='*']").click();
        }

        if (p.attr("data-open") == "1")
            changelistlinkfun(p);
        p.find('div.divmiddle').each(function() {
            var pimage = jQuery(this).closest(".images");
            if (pimage.find("img").length > 0) {
                var $this = this;
                jQuery('<img src="' + pimage.find("img").attr("src") + '">').load(function() {
                    var h = jQuery($this).height();
                    if (h > 0) {
                        jQuery($this).css("margin-top", "-" + (h / 2) + "px");
                    }
                })

            } else {
                var h = jQuery(this).height();
                if (h > 0) {
                    jQuery(this).css("margin-top", "-" + (h / 2) + "px");
                }
            }


        })
        vc_js_init();
        tranlanguage(p);
    })
}

function bindqfylist(obj, curr) {
    jQuery("body").addClass("doing");
    var c = jQuery(obj).closest(".qfy-listcatecontrols");

    jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").css("outline", "10px solid #FF6600").css("cursor", "cursor").css("opacity", "0.6");
    jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").unbind("click.bindqfylist").bind("click.bindqfylist", function(e) {
        var item = $(e.currentTarget);

        jQuery("body").removeClass("doing");
        var list = item.closest(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist");
        var val = list.attr("qfyuuid");
        var post_type = list.attr("data-post");
        var post_cate = list.attr("data-cate");

        //èƒ½æ·»åŠ uuidï¼Œåˆ™æ·»åŠ uuid
        if (list.parent().attr("data-model-id") && post_type != "page" && (!val || val == 0 || val == "")) {
            var listmodel_id = list.parent().attr("data-model-id");
            var listmodel = parent.vc.shortcodes.get(listmodel_id);
            var listparams = listmodel.get('params');
            listparams.qfyuuid = "qfy_posts_grid_" + parent.vc.ShortcodesBuilder.randomString();
            listmodel.save({ params: listparams }, { silent: true });
            val = listparams.qfyuuid;
            list.attr("qfyuuid", val);
        }
        var pageid = 0;
        if (top.jQuery("#pageUrl").length > 0) {
            pageid = top.jQuery("#pageUrl").val();
        }

        if (val && val != 0 && val != "" && post_type != "page") {
            top.jAlert("ä½ å·²ç»æˆåŠŸç»‘å®šäº†åˆ—è¡¨");
            if (c.parent().attr("data-model-id")) {

                var model_id = c.parent().attr("data-model-id");
                var model = parent.vc.shortcodes.get(model_id);
                var params = model.get('params');
                params.cate_to_listuuid = val;
                params.cate_type = post_type;

                if (post_cate != "") {
                    if (post_type == "products") {
                        params.cate_products_selected_id = post_cate;
                    } else if (post_type == "product") {
                        params.cate_product_selected_id = post_cate;
                    } else if (post_type == "image") {
                        params.cate_image_selected_id = post_cate;
                    } else if (post_type == "video") {
                        params.cate_video_selected_id = post_cate;
                    } else if (post_type == "yunvideo") {
                        params.cate_yunvideo_selected_id = post_cate;
                    } else {
                        params.cate_post_selected_id = post_cate;
                    }
                }
                if (curr && curr.length > 0) {
                    curr.find("[name='cate_to_listuuid']").val(val);
                    curr.find("[name='cate_type']").val(post_type).change();
                    if (post_cate != "") {
                        if (post_type == "products") {
                            curr.find("[name='cate_products_selected_id']").val(post_cate)
                        } else if (post_type == "product") {
                            curr.find("[name='cate_product_selected_id']").val(post_cate)
                        } else if (post_type == "image") {
                            curr.find("[name='cate_image_selected_id']").val(post_cate)
                        } else if (post_type == "video") {
                            curr.find("[name='cate_video_selected_id']").val(post_cate)
                        } else if (post_type == "yunvideo") {
                            curr.find("[name='cate_yunvideo_selected_id']").val(post_cate)
                        } else {
                            curr.find("[name='cate_post_selected_id']").val(post_cate)
                        }
                    }
                }

                model.save({ params: params });
                parent.ajaxBeforeLoading(0, model.view.$el);
                parent.vc.ShortcodesBuilder.update(model);
                parent.updatePage(model, null);
            } else if (c.closest(".site_tooler").length > 0) {
                var wid = c.closest(".site_tooler").attr("id");
                jQuery.post("/FeiEditor/siteEdit/updatePostlistOneparam", { "wid": wid, "bind_pageid": pageid, "cate_to_listuuid": val, "cate_type": post_type, "post_type_selected": post_cate }, function(rs) {
                    var p = jQuery(obj).closest('.site_tooler');
                    parent.loaderDivUI(p);
                    parent.updateWidgetViewEvent(wid, p);
                });
            }
            jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").css("outline", "0").css("cursor", "normal").css("opacity", "1");
            jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").unbind("click.bindqfylist");
        } else if (post_type == "page") {
            top.jAlert("è¿™ä¸ªåˆ—è¡¨ç±»åž‹ä¸æ­£ç¡®ï¼Œåªèƒ½ç»‘å®šèµ„è®¯å’Œäº§å“åˆ—è¡¨");
        } else {
            top.jAlert("è¿™ä¸ªåˆ—è¡¨è¿˜æ²¡æœ‰è®¾ç½®è‡ªå·±çš„UUIDï¼Œä½ å¯ä»¥åœ¨è®¾ç½®ä¸­æ·»åŠ è¯¥åˆ—è¡¨å”¯ä¸€çš„UUID");
        }

    })
}

function nav_pagecate_confirm(obj) {

    if (jQuery(obj).find(".loading").length > 0) {
        return;
    }

    var li = jQuery(obj).closest("li");
    var li_id = li.attr("data-id");
    var c = jQuery(obj).closest(".qfy-listcatecontrols");
    var type = c.attr("type");
    var id = c.attr("to_qfyuuid");
    if (!id || !type) {
        jAlert("æ²¡æœ‰æ‰¾åˆ°å¯¹åº”çš„åˆ—è¡¨");
        return;
    }

    if (jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length > 0 && !li.hasClass("has-children")) {
        jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
    }

    c.find(".current-cat").removeClass("current-cat current-menu-item");
    li.addClass("current-cat current-menu-item");
    if (c.attr("data-child") == "1") {
        c.find(".list-content .children").hide();
        li.parents("li,ul").show();
        if (li.hasClass("cat-parent") && li.closest(".list-content").length > 0) li.find(">.children").show();
    }
    if (c.find(".item_a").length > 0) {
        c.find(".item_a").removeClass("active");
        li.find(".item_a").addClass("active");
    }
    var p = jQuery("[qfyuuid='" + id + "'].qfe_teaser_grid.qfe_content_element").parent();
    var model_id = p.attr("data-model-id");
    if (model_id && parent) {
        parent.ajaxBeforeLoading(0, p);
        var model = parent.vc.shortcodes.get(model_id);
        var params = model.get('params');
        if (type)
            params.post_type = type;
        if (type == "products") {
            var pro_old = params.pro_categories;
            params.pro_categories = li_id;
        } else if (type == "product") {
            var product_old = params.product_categories;
            params.product_categories = li_id;
        } else {
            var post_old = params.post_categories;
            params.post_categories = li_id;
        }
        if (params.parse_url)
            var parse_url_old = params.parse_url;
        if (params.parse_search)
            var parse_search_old = params.parse_search;
        params.parse_url = "0";
        params.parse_search = "0";

        model.save({ params: params });
        parent.vc.ShortcodesBuilder.update(model);
        if (type == "products") {
            params.pro_categories = pro_old;
        } else if (type == "product") {
            params.product_categories = product_old;
        } else {
            params.post_categories = post_old;
        }
        if (parse_url_old)
            params.parse_url = parse_url_old;
        if (parse_search_old)
            params.parse_search = parse_search_old;
        model.save({ params: params });
    }

}

function nav_customsearch(obj) {
    if (top.jQuery("#site-html #site-body").length > 0) {
        top.jAlert("è¯·åœ¨é¢„è§ˆä¸‹æŸ¥çœ‹");
        return;
    }

    var li = jQuery(obj);
    var ul = jQuery(obj).closest("ul");
    var url = ul.attr("data-url");
    url = url.replace(/q_term=-?\d*&/g, "");

    url = url.replace(/q_term-key_\d*=-?cs-\d*-[^&]*&/g, "");
    url = url.replace(/q_term-key_\d*=-?pt-\d*-[^&]*&/g, "");
    url = url.replace(/q_term-key_\d*=-?[^&]*&/g, "");
    url = url.replace(/q_term-key_sub_\d*=-?[^&]*&/g, "");


    var p = ul.closest(".mainul");
    var data_key = li.attr("data-key");
    if (data_key && data_key.indexOf("sub") < 0) {
        p.find("[data-key=sub_" + data_key + "]").removeClass("active");
    }

    if (li.hasClass("active")) {
        if (ul.closest("ul.subul").attr("data-morecheck") == "0") {
            ul.find(">li").removeClass("active");
        } else {
            li.removeClass("active");
        }
    } else {
        if (ul.closest("ul.subul").attr("data-morecheck") == "0" || li.attr("data-id") == "-1") {
            ul.find(">li").removeClass("active");
        }
        li.addClass("active");
    }
    var out = [];
    var i = 0;
    p.find("ul.subul").each(function() {
        var key = jQuery(this).attr("data-key");
        var morecheck = jQuery(this).attr("data-morecheck");

        if (jQuery(this).find("li.active").length > 0) {
            var ids = new Array();
            var len = jQuery(this).find("li.active").length;
            var n = 0;
            jQuery(this).find("li.active").each(function() {
                if (len > 1) {
                    if (jQuery(this).attr("data-id") != "-1") {
                        ids[n] = jQuery(this).attr("data-id");
                        n++;
                    }
                } else {
                    ids[n] = jQuery(this).attr("data-id");
                    n++;
                }
            });
            out[i++] = "q_term-key_" + key + "=" + ids.join(",");
        } else {
            if (jQuery(this).attr("data-default") != "" && jQuery(this).attr("data-default") != "0") {
                //none,not default
                out[i++] = "q_term-key_" + key + "=-2";
            }
        }
    })


    if (p.attr("data-ajax") == "1") {
        url = url + "&" + out.join("&");
        var touuid = p.attr("data-touuid");
        var posttype = p.attr("data-posttype");

        var id = ul.closest(".qfy_custom_search ").attr("id");
        var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
        var w = "";
        if (touuid != "-1") {
            var plist = jQuery(".qfy-element[qfyuuid='" + touuid + "']");
        } else {
            if (posttype == "product") {
                var plist = jQuery("#main .qfyproductlist:first");
            } else {
                var plist = jQuery("#main .qfe_teaser_grid:first");
            }
        }
        var pp = plist.parent();
        if (plist.attr("data-loading")) {
            image_src = plist.attr("data-loading");
            w = plist.attr("data-loading-w");
        }

        plist.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img  style="width:' + w + 'px"  src="' + image_src + '"></div>');


        jQuery.post(url, function(data) {
            if (touuid != "-1") {
                var list = jQuery(data).find(".qfy-element[qfyuuid='" + touuid + "']");

            } else {
                if (posttype == "product") {
                    var list = jQuery(data).find("#main .qfyproductlist:first");
                } else {
                    var list = jQuery(data).find("#main .qfe_teaser_grid:first");
                }
            }
            if (list.length > 0) {
                plist.replaceWith(list);
            }
            var search = jQuery(data).find("#" + id);
            if (search.length > 0) {
                jQuery("#" + id).replaceWith(search);
            }

            if (plist.attr("data-open") == "1") {
                changelistlinkfun(pp);
            }
            window.vc_js_init2();
            window.vc_js_init();
            if (plist.find(".noResult").length == 0) {
                jQuery('[data-ride="vc-carousel"]').each(function() {
                    qfy_carousel_fun(jQuery(this))
                })
            }
            tranlanguage(pp);
        })
    } else {
        location.href = url + "&" + out.join("&");
    }
    return;
}

function tranlanguage(htm) {

    if (jQuery("body.qfy_slw_tzh").length == 1) {
        StranBody(htm[0]);

    } else if (jQuery("body.qfy_slw_szh").length == 1) {
        StranBody(htm[0], 0);

    }

}

function nav_pagecate(obj, flag) {

    if (jQuery(obj).find(".loading").length > 0) {
        return;
    }
    var type = 0;
    var li = jQuery(obj).closest("li");
    var c = jQuery(obj).closest(".qfy-listcatecontrols");
    var id = c.attr("to_qfyuuid");
    var p = jQuery("[qfyuuid='" + id + "']");
    if (p.length == 0 && jQuery(obj).attr("data-bindurl")) {
        location.href = jQuery(obj).attr("data-bindurl");
        return;
    } else if (flag == "direct") {
        location.href = jQuery(obj).attr("data-url");
        return;
    }


    var luClass = "[qfyuuid='" + id + "'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
    var childClass = "ul.qfe_thumbnails";
    if (p.find("div.qfy_list_loading").length > 0) {
        return;
    }

    if (jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length > 0 && !li.hasClass("has-children")) {
        jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
    }

    p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
    p.find(luClass + " li").css("transform", "none").css("top", "auto").css("position", "relative");
    var url = jQuery(obj).attr("data-url");


    c.find(".current-cat").removeClass("current-cat current-menu-item");
    li.addClass("current-cat current-menu-item");
    if (c.attr("data-child") == "1") {
        c.find(".list-content .children").hide();
        li.parents("li,ul").show();
        if (li.hasClass("cat-parent") && li.closest(".list-content").length > 0) li.find(">.children").show();
    }
    if (c.find(".item_a").length > 0) {
        c.find(".item_a").removeClass("active");
        li.find(".item_a").addClass("active");
    }
    var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
    var w = "";
    if (p.attr("data-loading")) {
        image_src = p.attr("data-loading");
        w = p.attr("data-loading-w");
    }

    var text = jQuery.trim(jQuery(obj).text());
    jQuery(obj).closest(".dl-menuwrapper").find(".phone-text").html(text);

    p.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img style="width:' + w + 'px" src="' + image_src + '"></div>');
    jQuery.get(url, function(data) {
        var nowlistobj = jQuery(data).find("[qfyuuid='" + id + "']");
        if (nowlistobj.length > 0) {
            p.replaceWith(nowlistobj);
            window.vc_js_init2();
            window.vc_js_init();
            if (p.find(".noResult").length == 0) {
                jQuery('[data-ride="vc-carousel"]').each(function() {
                    qfy_carousel_fun(jQuery(this))
                })
            }
            tranlanguage(p);
        }
        if (nowlistobj.attr("data-open") == "1")
            changelistlinkfun(nowlistobj);
    })
}
var noticeTimeoutShow = false;

function qfy_notice_event() {
    jQuery(".qfy-element.qfy_notice .notice_warp").each(function() {
        notice_pre_event(this);
    })

    jQuery("a[href^='qfy_notice']").unbind().click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var id = jQuery(this).attr("href");
        if (jQuery("#" + id).length > 0) {
            notice_pre_event("#" + id + " .notice_warp", "preview");
        }
    })
}

function notice_pre_event(thisobj, flag) {

    var tooler = jQuery(thisobj).closest(".site_tooler");
    if (tooler.length > 0 && tooler.css("display") == "none") {
        return;
    }
    var event = jQuery(thisobj).attr("data-event");
    var event_delay = jQuery(thisobj).attr("data-event_delay");
    var showtimes = jQuery(thisobj).attr("data-showtimes");
    var closetime = jQuery(thisobj).attr("data-closetime");
    var id = jQuery(thisobj).parent().attr("id");
    var contenttype = jQuery(thisobj).attr("data-contenttype");
    var post_id = jQuery(thisobj).attr("data-post_id");
    var contenttype = jQuery(thisobj).attr("data-contenttype");
    var torun = true;
    var num = 0;

    if (flag == "preview") {
        torun = true;
        //closetime = 0;
        event = 0;
    } else {
        if (id && ã€€ showtimes != 3) {
            var num = getCookie(id);
            if (showtimes == "0" && num > 0) {
                torun = false;
            } else if (showtimes == "1" && num > 1) {
                torun = false;
            } else if (showtimes == "2" && num > 2) {
                torun = false;
            } else if (showtimes == "4") {
                var is_confirm = getCookie(id + "_confirm");
                if (is_confirm > 0) {
                    torun = false;
                }
            }
        }
    }
    if (torun) {
        if (num) num = num + 1;
        else num = 1;
        if (flag != "preview") {
            setCookie(id, num, "365");
        }
        if (contenttype == "2") {
            //ajax
            if (!post_id || post_id == "") {
                content = "å¯¹åº”çš„ç»„ä»¶é¡µé¢ä¸å­˜åœ¨(ID:0)ã€‚è¯·é‡æ–°æŒ‡å®šä¸€ä¸ªç»„ä»¶é¡µé¢ã€‚";
                notice_event(thisobj, content);
                return;
            } else {
                jQuery.post("/admin/admin-ajax.php", { "action": "get_noticepostcontent_from_id", "post_id": post_id }, function(data) {
                    if (data.indexOf("Error:") !== 0) {
                        if (event == "0" || (event == "1" && event_delay == 0)) {
                            notice_event(thisobj, data);
                        } else if (event == "1") {
                            noticeTimeoutShow = setTimeout(function() { notice_event(thisobj, data); }, event_delay * 1000);
                        }
                        if (closetime > 0) {
                            setTimeout(function() {
                                if (noticeTimeoutShow)
                                    clearTimeout(noticeTimeoutShow);
                                //close it
                                $('#qfy_float_ad.' + id + ',#QFY_overlay.' + id + ',#QFY_window.' + id).remove();
                            }, closetime * 1000);

                        }
                    } else {
                        content = "å¯¹åº”çš„ç»„ä»¶é¡µé¢ä¸å­˜åœ¨(ID:" + post_id + ")ã€‚è¯·é‡æ–°æŒ‡å®šä¸€ä¸ªç»„ä»¶é¡µé¢ã€‚";
                        notice_event(thisobj, content);
                        return;
                    }
                });
            }

        } else {
            if (event == "0" || (event == "1" && event_delay == 0)) {
                notice_event(thisobj);
            } else if (event == "1") {
                var $this = thisobj;
                noticeTimeoutShow = setTimeout(function() { notice_event(thisobj); }, event_delay * 1000);
            }
            if (closetime > 0) {
                setTimeout(function() {
                    if (noticeTimeoutShow)
                        clearTimeout(noticeTimeoutShow);
                    //close it
                    //$('#qfy_float_ad.'+id+',#QFY_overlay.'+id+',#QFY_window.'+id).remove();
                    notice_close_fun("#" + id + " .notice_warp");
                }, closetime * 1000);

            }


        }


    }
}

function notice_close_fun(thisobj) {
    var obj = jQuery(thisobj);
    var id_class = jQuery(thisobj).parent().attr("id");
    var animale = obj.attr("data-animale");
    var close_animale = obj.attr("data-close_animale");
    if (close_animale == "1") {
        jQuery("#QFY_window." + id_class + ",#QFY_overlay." + id_class).remove();
    } else {
        if (animale == "0") {
            jQuery("#QFY_window." + id_class).stop(true).animate({ opacity: "0" }, 'fast', function() {
                jQuery("#QFY_window." + id_class + ",#QFY_overlay." + id_class).remove();
            });
        } else if (animale == "1") {
            jQuery("#QFY_window." + id_class).stop(true).animate({ top: "-100%", opacity: "0" }, 'fast', function() {
                jQuery("#QFY_window." + id_class + ",#QFY_overlay." + id_class).remove();
            })
        } else if (animale == "2") {
            jQuery("#QFY_window." + id_class).stop(true).animate({ top: "100%", opacity: "0" }, 'fast', function() {
                jQuery("#QFY_window." + id_class + ",#QFY_overlay." + id_class).remove();
            })
        } else if (animale == "3") {
            jQuery("#QFY_window." + id_class).stop(true).animate({ left: "-100%", opacity: "0" }, 'fast', function() {
                jQuery("#QFY_window." + id_class + ",#QFY_overlay." + id_class).remove();
            })
        } else if (animale == "4") {
            jQuery("#QFY_window." + id_class).stop(true).animate({ left: "100%", opacity: "0" }, 'fast', function() {
                jQuery("#QFY_window." + id_class + ",#QFY_overlay." + id_class).remove();
            })
        }
    }


}

function notice_event(thisobj, precontent) {
    var id_class = jQuery(thisobj).parent().attr("id");
    jQuery("#QFY_window." + id_class + ",#QFY_overlay." + id_class + ",#qfy_float_ad." + id_class).remove();
    jQuery("body").removeAttr("style");

    var obj = jQuery(thisobj);
    var device = obj.attr("data-device");
    if (device == "1" && jQuery(window).width() < 760) {
        return;
    } else if (device == "2" && jQuery(window).width() > 760) {
        return;
    }
    var type = obj.attr("data-type");
    var align = obj.attr("data-align");
    var screenpadding = obj.attr("data-screenpadding") ? obj.attr("data-screenpadding") : 0;
    var animale = obj.attr("data-animale");
    var animale_time = obj.attr("data-animale_time");
    if (animale_time <= 0 || !animale_time) animale_time = 1;
    var qfy_width = obj.attr("data-width") ? obj.attr("data-width") : 600;
    var qfy_height = obj.attr("data-height") ? obj.attr("data-height") : 400;
    if (jQuery(window).width() < 760) {
        qfy_width = obj.attr("data-mobilewidth") ? obj.attr("data-mobilewidth") : 300;
        qfy_height = obj.attr("data-mobileheight") ? obj.attr("data-mobileheight") : 300;
    }

    var allow_close = obj.attr("data-allow_close");
    var btn_align = obj.attr("data-btn_align");
    var z_index = obj.attr("data-z_index");
    var btn_position = obj.attr("data-btn_position");
    var btn_position_x = obj.attr("data-btn_position_x");
    if (qfy_width.indexOf("%") > -1) {
        qfy_width = qfy_width.replace("%", "");
        if (qfy_width > 100) qfy_width = 100;
        if (qfy_width < 10) qfy_width = 10;
        qfy_width = jQuery(window).width() * qfy_width / 100;
    }
    if (qfy_height.indexOf("%") > -1) {
        qfy_height = qfy_height.replace("%", "");
        if (qfy_height > 100) qfy_height = 100;
        if (qfy_height < 10) qfy_height = 10;
        qfy_height = jQuery(window).height() * qfy_height / 100;
    }

    var content = obj.html();
    //content = content.replace("display:none;","").replace("display:none;","").replace("display:none;","").replace("display:none;","");

    if (precontent) {
        //ajax
        content = content.replace('<div class="notice_loading"></div>', precontent);
    }

    var style = "opacity:0;";

    var marginleft = parseInt((qfy_width / 2), 10);
    var margintop = parseInt((qfy_height / 2), 10);
    var totop = "50%";
    var defaultleft = "50%";
    var toleft = "50%";
    if (type == "0" || type == "1") {
        if (align == "0") {
            if (animale == "1") {
                style += "top:0;";
            } else if (animale == "2") {
                style += "top:100%;";
            } else {
                style += "top:50%;";
            }

            if (animale == "3") {
                defaultleft = "0";
            } else if (animale == "4") {
                defaultleft = "100%";
            }
            style += "margin-top:-" + margintop + "px;margin-left:-" + marginleft + "px; position: fixed; left: " + defaultleft + ";z-index:10003";

            totop = "50%";
            toleft = "50%";

        } else if (align == "1") {
            if (animale == "1") {
                style += "top:-50%;";
            } else if (animale == "2") {
                style += "top:50%;";
            } else {
                style += "top:0;";
            }

            if (animale == "3") {
                defaultleft = "0";
            } else if (animale == "4") {
                defaultleft = "100%";
            }
            style += "margin-top:" + screenpadding + "px;margin-left:-" + marginleft + "px; position: fixed; left: " + defaultleft + ";z-index:10003";

            totop = "0%";
            toleft = "50%";
        } else if (align == "2") {
            if (animale == "1") {
                //style += "top:50%;";
                style += "top:" + (jQuery(window).height() - 2 * qfy_height) + "px;";
            } else if (animale == "2") {
                //style += "top:100%;";
                style += "top:" + jQuery(window).height() + "px;";
            } else {
                style += "bottom:0;";
            }

            if (animale == "3") {
                defaultleft = "0";
            } else if (animale == "4") {
                defaultleft = "100%";
            }
            style += "margin-bottom:" + screenpadding + "px;margin-left:-" + marginleft + "px; position: fixed; left: " + defaultleft + ";z-index:10003";

            totop = jQuery(window).height() - qfy_height;
            toleft = "50%";
        } else if (align == "3") {
            if (animale == "1") {
                style += "top:0;";
            } else if (animale == "2") {
                style += "top:100%;";
            } else {
                style += "top:50%;";
            }

            if (animale == "3") {
                defaultleft = -qfy_width;
            } else if (animale == "4") {
                defaultleft = qfy_width;
            } else {
                defaultleft = screenpadding;
            }
            style += "margin-top:-" + margintop + "px; position: fixed; left: " + defaultleft + "px;z-index:10003";

            totop = "50%";
            toleft = screenpadding;
        } else if (align == "4") {

            if (animale == "1") {
                style += "top:0;";
            } else if (animale == "2") {
                style += "top:100%;";
            } else {
                style += "top:50%;";
            }

            if (animale == "3") {
                defaultleft = (jQuery(window).width() - 2 * qfy_width) + "px";
            } else if (animale == "4") {
                defaultleft = jQuery(window).width() + "px";
            } else {
                defaultleft = "auto;right:0";
            }

            style += "margin-top:-" + margintop + "px;position: fixed; margin-right: " + screenpadding + "px;left:" + defaultleft + ";z-index:10003";


            totop = "50%";
            toleft = jQuery(window).width() - qfy_width;
        } else if (align == "5") {
            var defaultleft = "0";
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if (animale == "1") {
                style += "top:-50%;";
            } else if (animale == "2") {
                style += "top:50%;";
            } else {
                style += "top:0;";
            }

            if (animale == "3") {
                defaultleft = "-" + qfy_width + "px";
            } else if (animale == "4") {
                defaultleft = qfy_width + "px";
            }
            style += "margin-top:" + screeny + "px;margin-left:" + screenx + "px; position: fixed; left: " + defaultleft + ";z-index:10003";

            totop = "0%";
            toleft = "0%";
        } else if (align == "6") {
            var defaultleft = (jQuery(window).width() - qfy_width) + "px";
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if (animale == "1") {
                style += "top:-50%;";
            } else if (animale == "2") {
                style += "top:50%;";
            } else {
                style += "top:0;";
            }

            if (animale == "3") {
                defaultleft = (jQuery(window).width() - 2 * qfy_width) + "px";
            } else if (animale == "4") {
                defaultleft = jQuery(window).width() + "px";
            }
            style += "margin-top:" + screeny + "px;margin-left:-" + screenx + "px; position: fixed; left: " + defaultleft + ";z-index:10003";

            totop = "0%";
            toleft = jQuery(window).width() - qfy_width;

        } else if (align == "7") {
            var defaultleft = 0;
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if (animale == "1") {
                style += "top:" + (jQuery(window).height() - 2 * qfy_height) + "px;";
            } else if (animale == "2") {
                style += "top:" + jQuery(window).height() + "px;";
            } else {
                style += "bottom:0;";
            }

            if (animale == "3") {
                defaultleft = "-" + qfy_width + "px";
            } else if (animale == "4") {
                defaultleft = qfy_width + "px";
            }
            style += "margin-bottom:" + screeny + "px;margin-left:" + screenx + "px; position: fixed; left: " + defaultleft + ";z-index:10003";

            totop = jQuery(window).height() - qfy_height;
            toleft = "0%";

        } else if (align == "8") {
            var defaultleft = (jQuery(window).width() - qfy_width) + "px";
            var screeny = obj.attr("data-screeny");
            var screenx = obj.attr("data-screenx");
            if (animale == "1") {
                style += "top:" + (jQuery(window).height() - 2 * qfy_height) + "px;";
            } else if (animale == "2") {
                style += "top:" + jQuery(window).height() + "px;";
            } else {
                style += "bottom:0;";
            }

            if (animale == "3") {
                defaultleft = (jQuery(window).width() - 2 * qfy_width) + "px";
            } else if (animale == "4") {
                defaultleft = jQuery(window).width() + "px";
            }
            style += "margin-bottom:" + screeny + "px;margin-left:-" + screenx + "px; position: fixed; left: " + defaultleft + ";z-index:10003";

            totop = jQuery(window).height() - qfy_height;
            toleft = jQuery(window).width() - qfy_width;

        }

        var qfy_width_tmp = qfy_width;
        var qfy_height_tmp = qfy_height;

        if (jQuery("#QFY_window." + id_class).length == 0) {
            if (obj.attr("data-width") == "100%") {
                qfy_width_tmp = "100%";
            } else {
                qfy_width_tmp = qfy_width + "px";
            }
            if (obj.attr("data-height") == "100%") {
                qfy_height_tmp = "100%";
            } else {
                qfy_height_tmp = qfy_height + "px";
            }
            jQuery("body").append("<div id='QFY_window' class='" + id_class + "' style='width:" + qfy_width_tmp + ";height:" + qfy_height_tmp + ";" + style + "'><div id='QFY_content' style='height:" + qfy_height_tmp + "' >" + content + "</div></div>");

        }
        if (jQuery("#TB_overlay." + id_class).length == 0 && type == "0") {
            var optcolor = obj.attr("data-optcolor") ? obj.attr("data-optcolor") : "#000000";
            var opt = obj.attr("data-opt") ? obj.attr("data-opt") : "0.7";
            jQuery("body").append("<div id='QFY_overlay' class='" + id_class + "' style='height: 100%;left: 0;position: fixed;top: 0;width: 100%;z-index: 100;background-color: " + optcolor + ";opacity: " + opt + ";z-index:10001;'></div>");
        }

        if (animale == "0") {
            jQuery("#QFY_window." + id_class).stop(true).animate({ opacity: "1" }, animale_time * 1000, function() {
                if (obj.attr("data-width") == "100%") {
                    jQuery("#QFY_window." + id_class).css({ "left": "0", "margin-left": "0" });
                }
            });
        } else if (animale == "1" || animale == "2") {
            if (align == "2") {
                jQuery("#QFY_window." + id_class).stop(true).animate({ top: totop, opacity: "1" }, animale_time * 1000, function() {
                    jQuery("#QFY_window." + id_class).css({ "bottom": "0", "top": "auto" });
                    if (obj.attr("data-width") == "100%") {
                        jQuery("#QFY_window." + id_class).css({ "left": "0", "margin-left": "0" });
                    }
                });
            } else {
                jQuery("#QFY_window." + id_class).stop(true).animate({ top: totop, opacity: "1" }, animale_time * 1000, function() {
                    if (obj.attr("data-width") == "100%") {
                        jQuery("#QFY_window." + id_class).css({ "left": "0", "margin-left": "0" });
                    }
                });
            }
        } else if (animale == "3" || animale == "4") {
            if (align == "4") {
                jQuery("#QFY_window." + id_class).stop(true).animate({ left: toleft, opacity: "1" }, animale_time * 1000, function() {
                    jQuery("#QFY_window." + id_class).css({ "right": "0", "left": "auto" });
                    if (obj.attr("data-width") == "100%") {
                        jQuery("#QFY_window." + id_class).css({ "left": "0", "margin-left": "0" });
                    }
                });
            } else {
                jQuery("#QFY_window." + id_class).stop(true).animate({ left: toleft, opacity: "1" }, animale_time * 1000, function() {
                    if (obj.attr("data-width") == "100%") {
                        jQuery("#QFY_window." + id_class).css({ "left": "0", "margin-left": "0" });
                    }
                });
            }
        }
    } else if (type == "3") {

        if (jQuery("#qfy_float_ad." + id_class).length == 0) {
            if (allow_close == "0" && jQuery("#qfy_float_ad." + id_class + " #QFY_close").length == 0) {
                if (jQuery(thisobj).find(".notice_close").length > 0) {
                    var notice_close = jQuery(thisobj).find(".notice_close").prop("outerHTML");
                    notice_close = notice_close.replace("display:none;", "");
                    if (btn_align == 0) {
                        closeHTML = "<div id='QFY_close'  style='position:absolute;z-index:5;right:0px;top:0;cursor:pointer;'>" + notice_close + "</div>";
                    } else if (btn_align == 1) {
                        closeHTML = "<div id='QFY_close' style='position:absolute;z-index:5;left:48%;top:0;cursor:pointer;' >" + notice_close + "</div>";
                    } else if (btn_align == 2) {
                        closeHTML = "<div id='QFY_close' style='position:absolute;z-index:5;left:0;top:0;cursor:pointer;' >" + notice_close + "</div>";
                    }

                }
            }

            var x = (jQuery(window).width() - qfy_width) / 2,
                y = (jQuery(window).height() - qfy_height) / 2;
            if (align == "1") {
                y = 0;
            } else if (align == "2") {
                y = jQuery(window).height() - qfy_height;
            } else if (align == "3") {
                x = 0;
            } else if (align == "4") {
                x = jQuery(window).width() - qfy_width;
            } else if (align == "5") {
                x = 0;
                y = 0;
            } else if (align == "6") {
                y = 0;
                x = jQuery(window).width() - qfy_width;
            } else if (align == "7") {
                y = jQuery(window).height() - qfy_height;
                x = 0;
            } else if (align == "8") {
                y = jQuery(window).height() - qfy_height;
                x = jQuery(window).width() - qfy_width;
            }
            jQuery("body").floatAd({
                customhtml: "<div id='QFY_content' style='height:" + qfy_height + "px;'>" + content + "</div>",
                speed: animale_time * 10,
                id_class: id_class,
                closeHTML: closeHTML,
                x: x,
                y: y
            });
            if (obj.attr("data-width") == "100%") {
                jQuery("#qfy_float_ad." + id_class).width("100%").css("margin-left", "1px").height(qfy_height);
            } else {
                jQuery("#qfy_float_ad." + id_class).width(qfy_width).height(qfy_height);
            }
            jQuery("#qfy_float_ad." + id_class + " #QFY_close").css("top", btn_position + "px");
            var close_left = jQuery("#qfy_float_ad." + id_class + " #QFY_close").css("left");
            if (close_left == "auto") {
                close_left = qfy_width - jQuery("." + id_class + " #QFY_close").width();
            } else {
                close_left = close_left.replace("px", "");
            }

            jQuery("#qfy_float_ad." + id_class + " #QFY_close").css("right", "auto").css("left", (close_left * 1 + btn_position_x * 1) + "px");

            jQuery("#QFY_window." + id_class).remove();
        }
    }


    if (jQuery("#QFY_window." + id_class).length == 1) {
        jQuery("#QFY_window." + id_class).css("z-index", z_index);
        if (allow_close == "0" && jQuery("#QFY_window." + id_class + " #QFY_close").length == 0) {
            if (jQuery(thisobj).find("#QFY_close").length == 0) {
                var notice_close = jQuery(thisobj).find(".notice_close").prop("outerHTML");
                notice_close = notice_close.replace("display:none;", "").replace("display: none;", "");
                if (btn_align == 0) {
                    jQuery("#QFY_window." + id_class).append("<div id='QFY_close'  style='position:absolute;z-index:5;right:0px;top:0;cursor:pointer;'>" + notice_close + "</div>");
                } else if (btn_align == 1) {
                    jQuery("#QFY_window." + id_class).append("<div id='QFY_close' style='position:absolute;z-index:5;left:48%;top:0;cursor:pointer;' >" + notice_close + "</div>");
                } else if (btn_align == 2) {
                    jQuery("#QFY_window." + id_class).append("<div id='QFY_close' style='position:absolute;z-index:5;left:0;top:0;cursor:pointer;' >" + notice_close + "</div>");
                }


                jQuery("#QFY_window." + id_class + " #QFY_close").css("top", btn_position + "px");
                var close_left = jQuery("#QFY_window." + id_class + " #QFY_close").css("left");

                if (close_left == "auto") {
                    close_left = qfy_width - jQuery("." + id_class + " #QFY_close").width();
                } else {
                    close_left = close_left.replace("px", "");
                }

                jQuery("#QFY_window." + id_class + " #QFY_close").css("right", "auto").css("left", (close_left * 1 + btn_position_x * 1) + "px");

                jQuery("#QFY_window." + id_class + " #QFY_close").click(function() {
                    var title = jQuery("#QFY_window." + id_class + " .notice_content").attr("data-allow_warninfo");
                    if (title) {
                        title = base64_decode(title);
                        alert(title);
                    }
                    var allow_forceclose = jQuery("#QFY_window." + id_class + " .notice_content").attr("data-allow_forceclose");
                    if (allow_forceclose != "1") {
                        //..........
                        notice_close_fun(thisobj);
                    }
                })
            }
        }


    }

    var bgcolor = obj.attr("data-bgcolor");
    var borderwidth = obj.attr("data-borderwidth");
    var bordercolor = obj.attr("data-bordercolor");
    var shadowwidth = obj.attr("data-shadowwidth");

    var shadowcolor = obj.attr("data-shadowcolor");
    var radius = obj.attr("data-radius");


    jQuery("#QFY_window." + id_class + " #QFY_content .notice_close,#qfy_float_ad." + id_class + " #QFY_content .notice_close").remove();

    if (bgcolor) {
        jQuery("#QFY_window." + id_class + "  #QFY_content,#qfy_float_ad." + id_class + " #QFY_content").css("background", bgcolor);
    } else {
        jQuery("#QFY_window." + id_class + "  #QFY_content,#qfy_float_ad." + id_class + " #QFY_content").css("background", "#fff");
    }
    if (borderwidth) {
        //jQuery("#QFY_window."+id_class+"  #QFY_content,#qfy_float_ad."+id_class+" #QFY_content").css("border",borderwidth+"px solid "+bordercolor);
    }

    if (shadowwidth > 0) {
        jQuery("#QFY_window." + id_class + " #QFY_content,#qfy_float_ad." + id_class + " #QFY_content").css("box-shadow", "0px 0px " + shadowwidth + "px  " + shadowcolor);
    }
    if (radius > 0) {
        jQuery("#QFY_window." + id_class + " #QFY_content,#qfy_float_ad." + id_class + " #QFY_content").css("border-radius", radius + "px");
    }


    if (jQuery("." + id_class + " .notice_header").length > 0) {
        var f_h = jQuery("." + id_class + " .notice_header").outerHeight();
    } else {
        var f_h = 0;
    }
    if (jQuery("." + id_class + " .notice_footer").length > 0) {
        var f_f = jQuery("." + id_class + " .notice_footer").outerHeight();
    } else {
        var f_f = 0;
    }

    var h = jQuery("." + id_class + " #QFY_content").height() - f_f - f_h;
    jQuery("." + id_class + " .notice_content").height(h);

    jQuery("#QFY_window .editorview,#qfy_float_ad .editorview").remove();
    if (obj.attr("data-opt_hide") == "1" && jQuery("#QFY_overlay." + id_class).length > 0) {
        jQuery("#QFY_overlay." + id_class).unbind().click(function() {
            var title = jQuery("#QFY_window." + id_class + " .notice_content").attr("data-allow_warninfo");
            if (title) {
                title = base64_decode(title);
                alert(title);
            }
            var allow_forceclose = jQuery("#QFY_window." + id_class + " .notice_content").attr("data-allow_forceclose");
            if (allow_forceclose != "1") {

                //..........
                notice_close_fun(thisobj);
            }
        })
    }

    jQuery("." + id_class + " .notice_header,." + id_class + " .notice_footer,." + id_class + " .notice_content").show();
    if (precontent) {
        window.vc_js_init2();
        window.vc_js_init();
    }

}

function gototab(obj) {
    var p = jQuery(obj).closest(".qfy-tabcontent");
    p.find(".tabcontent-header-menu li.item button").removeClass("active");
    jQuery(obj).find("button").addClass("active");
    var index = p.find(".tabcontent-header-menu li.item").index(jQuery(obj));
    p.find(".rsBullets .rsNavItem:eq(" + index + ")").click();
}

function backlistbtn(obj) {
    var $this = jQuery(obj).closest(".qfe_teaser_grid.qfe_content_element");
    var h = $this.find(".list_hidden_btn");
    h.siblings().show();
    if (h.siblings(".mypages").length > 0) {
        var mstyle = h.siblings(".mypages").attr("style");
        if (mstyle) mstyle = mstyle.replace("display: block;", "");
        h.siblings(".mypages").attr("style", mstyle);
    }
    h.hide();
    vc_teaserGrid();
    if (curr_scrollbar) jQuery(window).scrollTop(curr_scrollbar);
}

function qfy_btn_primry_notice(obj) {
    var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
    if (p.length == 1) {
        var title = p.find(".notice_content").attr("data-allow1_warninfo");
        if (title) {
            title = base64_decode(title);
            alert(title);
        }
        var allow_forceclose = p.find(".notice_content").attr("data-allow1_forceclose");
        if (allow_forceclose != "1") {
            if (p.attr("id") == "qfy_float_ad") {
                p.remove();
                var id_class = p.attr("class");
                jQuery("#QFY_overlay." + id_class).remove();
            } else {
                var id_class = p.attr("class");
                notice_close_fun("#" + id_class + " .notice_warp");
            }
            setCookie(id_class + "_confirm", 1, "365");
        }
    }
}

function qfy_btn_default_notice(obj) {
    var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
    if (p.length == 1) {
        var title = p.find(".notice_content").attr("data-allow2_warninfo");
        if (title) {
            title = base64_decode(title);
            alert(title);
        }
        var allow_forceclose = p.find(".notice_content").attr("data-allow2_forceclose");
        if (allow_forceclose != "1") {
            if (p.attr("id") == "qfy_float_ad") {
                p.remove();
                var id_class = p.attr("class");
                jQuery("#QFY_overlay." + id_class).remove();
            } else {
                var id_class = p.attr("class");
                notice_close_fun("#" + id_class + " .notice_warp");
            }
        }
    }

}
var curr_scrollbar = 0;

function changelistlinkfun($this) {

    $this.find("a.link_title:not(.a_file),a.link_image:not(.a_file),a.vc_read_more:not(.a_file),a.item_link,a.item_a_link").click(function(event) {
        curr_scrollbar = jQuery(window).scrollTop();
        var link = jQuery(this).attr("href");
        var h = $this.find(".list_hidden_btn");
        var slider = h.attr("data-slider");
        h.find(".backbtn").hide();
        h.siblings().hide();
        h.show();
        var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
        var w = "";
        if (h.closest(".qfy-element").attr("data-loading")) {
            image_src = h.closest(".qfy-element").attr("data-loading");
            w = h.closest(".qfy-element").attr("data-loading-w");
        }

        h.find(".list_hiddencontent").html('<div class="qfy_list_loading"  style="margin:0 auto;padding:100px 0;text-align:center;"><img style="width:' + w + 'px" src="' + image_src + '"></div>');
        var pt = h.closest(".qfy-element").offset().top;
        if (curr_scrollbar > pt) {
            jQuery("html").animate({ scrollTop: pt }, "fast");
        }

        jQuery.get(link, function(data) {
            var htm = jQuery(data).find(".content-wrapper").html();
            if (!htm) htm = "";
            if (slider == "1") {
                var htm_prev = "";
                var htm_next = "";
                if (jQuery(data).find(".bitMainTopSider").length > 0) {
                    htm_prev = "<div class='bmts' style='position:relative;width:100%'>" + jQuery(data).find(".bitMainTopSider").html() + "</div>";
                }
                if (jQuery(data).find(".bitMainBottomSider").length > 0) {
                    htm_next = "<div class='bmbs'  style='position:relative;width:100%'>" + jQuery(data).find(".bitMainBottomSider").html() + "</div>";
                }
                htm = htm_prev + htm + htm_next;
            }
            h.find(".list_hiddencontent").html(htm);
            h.find(".backbtn").show();
            window.vc_js_init2();
            window.vc_js_init();
            qfy_notice_event();
            tranlanguage(h);
        });

        return false; //é˜»æ­¢é“¾æŽ¥è·³è½¬
    });
}
var qfy_template_waypoint;
jQuery(document).ready(function($) {
    jQuery(".mobile_variation_warp").closest("section").css("z-index", "100");
    jQuery("#dl-menu .qfy-sub-div").remove();
    jQuery(".qfy-sub-div").each(function() {
        if (jQuery(this).attr("data-full") == "1") {
            var bodywidth = jQuery("body").width();
            var offsetleft = jQuery(this).closest("li").offset().left;
            jQuery(this).css("width", "100vw").css("margin-left", "-" + offsetleft + "px");
        }

    })
    if (jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length > 0) {
        jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function() {
            var cur = jQuery(this).find(".list-content .current-cat");
            jQuery(this).find(".list-content .children").hide();
            cur.parents("li,ul").show();
            if (cur.hasClass("cat-parent") && cur.closest(".list-content").length > 0) cur.find(">.children").show();
        })

    }
    if (jQuery(".qfy_template_lib .viewmoretemplate").length > 0) {
        jQuery(".qfy_template_lib .viewmoretemplate").waypoint({
            handler: function(direction) {
                if (jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length > 0) {
                    jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
                }

            },
            triggerOnce: true,
            offset: "bottom-in-view",
        })

    }

    if (top == self) {
        jQuery(".qfe_teaser_grid.qfe_content_element[data-open='1']").each(function() {
            var $this = jQuery(this);
            changelistlinkfun($this);
        })
        qfy_notice_event();
    }

    if (jQuery("body.free_public").length > 0) {
        checkAdvertising();
        setTimeout("checkAdvertising()", 3000);
        setTimeout("checkAdvertising()", 6000);
        setTimeout("checkAdvertising()", 10000);
        setTimeout("checkAdvertising()", 20000);
        setTimeout("checkAdvertising()", 30000);
        setTimeout("checkAdvertising()", 100000);
    }

    jQuery(".qfytemplateslist .qfypreloadimg").each(function() {
        var newurl = jQuery(this).attr("data-src");
        var $this = jQuery(this);
        jQuery('<img src="' + newurl + '">').load(function() {
            $this.attr("src", newurl);
        })
    })
    jQuery(".qfy_scroll_box:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var box = jQuery(this).attr("id");
        var delay = jQuery(this).attr("data-delay");
        var speed = jQuery(this).attr("data-speed");
        var h = jQuery(this).attr("data-h");
        slideLine(box, "div", delay, speed, h);
    });

    vc_gallery_relat();
    //ç‰¹æ®Šå¤„ç†ä¸€äº›ç½‘ç«™
    if (jQuery(".re_second_user_class").length > 0 && jQuery.trim(jQuery(".re_second_user_span").text()) == "") {
        jQuery(".re_second_user_class").hide();
    }

    if (jQuery(".addon-custom-datepicker").length > 0) {
        jQuery(".addon-custom-datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            numberOfMonths: 1,
        });
    }
    if (jQuery(".addon-custom-datetimepicker").length > 0) {
        jQuery(".addon-custom-datetimepicker").datetimepicker({
            dateFormat: "yy-mm-dd",
            numberOfMonths: 1,
            showTime: true,
            constrainInput: false
        });
    }
    if (jQuery(".qfytemplateslist").length > 0) {
        if (jQuery(".qfytemplateslist .citem > a.active").length > 0) {
            jQuery(".qfytemplateslist .citem > a.active").closest(".citem").show();
        }
        jQuery(".qfytemplateslist  .info").click(function() {
            var url = jQuery(this).attr("data-url");
            if (top == self) {
                window.open(url);
            }
        })
        jQuery(".qfytemplateslist  .use").click(function() {
            var url = jQuery(this).attr("data-url");
            if (top == self) {
                location.href = url;
            }
        })

        jQuery(".qfytemplateslist .mypages a").removeAttr("href").click(function() {
            var tag = "all-0";
            if (jQuery(".qfytemplateslist .itemli.active").attr("data-tag")) {
                tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
            }
            var paged = jQuery(this).attr("paged");
            searchqfylist(tag, paged);
        })

        jQuery(".qfytemplateslist .itemli").click(function() {
            jQuery(".qfytemplateslist .itemli").removeClass("active");
            jQuery(".qfytemplateslist .citem").hide();
            if (jQuery(this).parent().hasClass("citem")) {
                jQuery(this).parent().show();
            } else {
                jQuery(this).parent().find(".citem").show();
            }
            jQuery(this).addClass("active");

            var tag = "all-0";
            if (jQuery(this).attr("data-tag")) {
                tag = jQuery(this).attr("data-tag");
            }
            searchqfylist(tag, 1);
        })
        jQuery(".qfytemplateslist .viewmoretemplate_inner").click(function() {
            var tag = "all-0";
            if (jQuery(".qfytemplateslist .itemli.active").attr("data-tag")) {
                tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
            }
            var paged = jQuery(this).attr("data-page");
            searchqfylist(tag, paged * 1 + 1, 'append');
        });
        qfytemplate_hover();
    }

    var current_page_id = jQuery('body').attr('data-pid');
    var current_page_key = jQuery('body').attr('data-pkey');

    if (current_page_id != '' && current_page_id != 'undefined' && current_page_key != '' && current_page_key != 'undefined') {
        jQuery.ajax({
            url: '/FeiEditor/traffic/log',
            type: 'post',
            async: true,
            data: {
                st_pid: current_page_id,
                st_pkey: current_page_key,
            }
        });
    }
    setTimeout(function() {
        try {
            if (top != self && !jQuery("body").hasClass("compose-mode")) {
                if (top.jQuery('#pageUrl').length > 0 && parent.jQuery("#vc-post-id").val() != dtGlobals.curr_id) {
                    if (parent.jQuery("#vc-post-id").val()) {
                        top.jQuery('#pageUrl').val(dtGlobals.curr_id).change();
                        return;
                    } else if (jQuery("#vc-post-id").length == 0) {
                        top.jAlert("é¡µé¢è¿‡æœŸï¼Œæ­£å°è¯•è‡ªåŠ¨åˆ·æ–°ï¼");
                        setTimeout(function() { top.location.reload(); }, 1000);
                        return;
                    }
                }
            }
        } catch (e) {

        }

    }, 1000);

    //ready end
})


function qfy_popinfo_fun(htm, timetoclose) {
    jQuery(".qfy_popinfo").remove();
    if (htm) {
        var msg = '<div class="qfy_popinfo" ><div class="md-content">' + htm + '</div></div>';
        jQuery("body").append(msg);
        setTimeout(function() { jQuery(".qfy_popinfo").addClass("qfy_show"); }, 500);
        if (timetoclose) {
            setTimeout(function() { jQuery(".qfy_popinfo").removeClass("qfy_show"); }, timetoclose * 1000);
        }
    }
}

function mobilecart_click(id) {
    if (jQuery("#product-" + id + " form .single_add_to_cart_button").length > 0) {
        jQuery("#product-" + id + " form .single_add_to_cart_button").click();
    } else if (jQuery("#product-" + id + " .custom_btn_link .single_add_to_cart_button").length > 0) {
        jQuery("#product-" + id + " .custom_btn_link .single_add_to_cart_button").click();
    }
}

function mobilecart() {
    jQuery(".mobile_variation_warp").addClass("show");
    jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").addClass("lowIndex");
    jQuery(".mobile_variation_warp").closest("section").removeClass("lowIndex").addClass("topIndex");
    jQuery(".mobile_variation_warp").closest(".bit_main_content").addClass("topIndex");
    jQuery(".mobile-mask").addClass("show");
    jQuery(".product_mobilecart").hide();
    jQuery('body').addClass("doing");
    var height = jQuery(window).height();
    var isnotmove = false;
    if (jQuery("section.section.topIndex").length > 0 && jQuery("section.section.topIndex").height() < height * 0.75) {
        isnotmove = true;
    } else {
        jQuery(".mobile_variation_warp").css("padding-bottom", "0");
    }
    jQuery('html, body').on('touchmove', function(e) {
        if (isnotmove) {
            e.preventDefault();
        }
    });
    if (!isnotmove) {
        jQuery("section.section.topIndex").nextAll("section.section").addClass("tmp_displaynone");
        jQuery("#bottom-bar,#footer").addClass("tmp_displaynone");
    }

}

function mobileunmask() {
    jQuery(".mobile-mask").removeClass("show");
    jQuery(".mobile_variation_warp").removeClass("show");
    jQuery(".mobile_variation_warp").closest("section").removeClass("topIndex");
    jQuery(".mobile_variation_warp").closest(".bit_main_content").removeClass("topIndex");
    jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").removeClass("lowIndex");
    jQuery(".product_mobilecart").show();
    jQuery('body').removeClass("doing");
    jQuery("section.section,#bottom-bar,#footer").removeClass("tmp_displaynone");
}

function changeUserPhonenumber(obj) {
    var form = jQuery(obj).closest("form");
    if (form.find(".qfyuser-loading:visible").length > 0) {
        return;
    }
    var url = "/admin/admin-ajax.php";
    var element = form.find(".phone_number");
    form.find(".qfyuser-warning").remove();
    form.find(".qfyuser-loading").show().addClass('inline');
    jQuery.ajax({
        type: "POST",
        url: url,
        dataType: "JSON",
        data: form.serialize(),
        error: function(request) {
            form.find(".qfyuser-loading").hide().removeClass('inline');
            if (element.parent().find('.qfyuser-warning').length == 0) {
                element.addClass('warning').removeClass('ok');
                element.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>æäº¤å¤±è´¥</div>');
                element.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
            } else {
                element.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>æäº¤å¤±è´¥');
                element.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
            }
        },
        success: function(data) {
            form.find(".qfyuser-loading").hide().removeClass('inline');
            if (data.status == "error") {
                var element1 = form.find("." + data.key);
                if (element1.parent().find('.qfyuser-warning').length == 0) {
                    element1.addClass('warning').removeClass('ok');
                    element1.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>' + data.msg + '</div>');
                    element1.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
                } else {
                    element1.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>' + data.msg);
                    element1.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
                }
            } else {
                location.reload();

            }
        }
    });
}

function send_user_sms(key, flag, obj) {
    var text1 = jQuery(obj).attr("data-sms_gtext2");
    var text2 = jQuery(obj).attr("data-sms_gtext3");
    if (jQuery(obj).hasClass("begining")) return;
    jQuery(obj).val("60").addClass("begining");
    var p = jQuery(obj).closest("form");
    if (key != "") {
        var phone = p.find("#phone_number-" + key);
    } else {
        var phone = p.find(".phone_number");
    }
    jQuery.post("/admin/admin-ajax.php", { "action": "tosendsms", "phone": phone.val() }, function(data) {

        if (data != "success") {
            jQuery(obj).val(text1);
            var element = phone;
            if (element.parent().find('.qfyuser-warning').length == 0) {
                element.addClass('warning').removeClass('ok');
                element.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>' + data + '</div>');
                element.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
            } else {
                element.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>' + data);
                element.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
            }
        } else {
            jQuery(obj).val(text2);
            var element = phone;
            element.parent().find('.qfyuser-warning').remove();
            setTimeout(function() { jQuery(obj).val(text1); }, 10000);
        }

    })

    setTimeout(function() {
        tominuto1(obj);

    }, 1000);
}

function tominuto1(obj) {
    var text1 = jQuery(obj).attr("data-sms_gtext2");
    var text2 = jQuery(obj).attr("data-sms_gtext3");
    if (text1 && text2) {
        if (jQuery(obj).val() > 0 && jQuery(obj).val() != text1 && jQuery(obj).val() != text2) {
            jQuery(obj).val(jQuery(obj).val() - 1);
        } else {
            jQuery(obj).removeClass("begining");
            return;
        }
    } else {

        if (jQuery(obj).val() > 0 && jQuery(obj).val() != "å‘é€" && jQuery(obj).val() != "èŽ·å–" && jQuery(obj).val() != "å‘é€æˆåŠŸ") {
            jQuery(obj).val(jQuery(obj).val() - 1);
        } else {
            jQuery(obj).removeClass("begining");
            return;
        }
    }
    setTimeout(function() {
        tominuto1(obj);
    }, 1000);
}

function qfy_phone_change(obj, flag) {
    var p = jQuery(obj).closest(".phonediv");
    if (flag == "1") {
        p.find(".old_phone_div").hide();
        p.find(".password_div,.new_phone_div,.yanzheng_div,.qfyuser-submit").show();
    } else if (flag == "2" || flag == "3") {
        p.find(".old_phone_div,.password_div").hide();
        p.find(".new_phone_div,.yanzheng_div,.qfyuser-submit").show();
        v = p.find(".old_phone_div input").val();
        if (p) {
            p.find(".new_phone_div .phone_number").val(v);
        }
    } else if (flag == "4") {
        p.find(".new_phone_div,.password_div,.qfyuser-submit,.yanzheng_div").hide();
        p.find(".old_phone_div").show();
    }
}

function weixin_auto_redirect() {
    var last_weixin_check = getCookie("last_weixin_check");
    if (last_weixin_check) {
        return;
    }
    //å¤§æ¦‚15åˆ†é’Ÿå¤±æ•ˆ
    setCookie("last_weixin_check", 1, 0.01);
    jQuery.post("/admin/admin-ajax.php", { action: "weixin_auto_redirect" }, function(data) {
        if (data.indexOf("http") == 0) {
            location.href = data;
        }
    });

}


function openheaderbtn(obj) {
    if (jQuery("#page,#phantom").hasClass("menuopen")) {
        jQuery("#page,#phantom").removeClass("menuopen");
    } else {
        jQuery("#page,#phantom").addClass("menuopen");
    }
}

function before_quick_search(obj) {
    var search = jQuery(obj).find("[name='search']").val();
    if (search == "") {
        return false;
    }
}

function quick_search(obj) {
    var v = jQuery(obj).val();
    var pageid = jQuery(obj).attr("data-pageid");
    var title = jQuery(obj).attr("data-title") ? jQuery(obj).attr("data-title") : "æœç´¢";
    var placeholder = jQuery(obj).attr("data-placeholder") ? jQuery(obj).attr("data-placeholder") : "è¯·è¾“å…¥å…³é”®è¯";
    var btn1 = jQuery(obj).attr("data-btn1") ? jQuery(obj).attr("data-btn1") : "ç¡®è®¤";
    var btn2 = jQuery(obj).attr("data-btn2") ? jQuery(obj).attr("data-btn2") : "å–æ¶ˆ";
    var posttype = jQuery(obj).attr("data-posttype");
    var postcate = jQuery(obj).attr("data-postcate");
    var bodywidth = jQuery("body").width();
    var bodyheight = jQuery(window).height();
    var message = "<div><form action='/'  onsubmit='return before_quick_search(this)'><input type='hidden'  name='searchtype' value='" + posttype + "' /><input type='hidden'  name='searchcate' value='" + postcate + "' /><input type='hidden' name='page_id' value='" + pageid + "'><div style='box-sizing: border-box;padding: 26px 24px 5px 24px;font-size: 18px;font-weight: 500;line-height: 24px;text-align: left;'>" + title + "</div>";
    message += '<div  style="height: 80px;box-sizing: border-box;padding: 0 24px;overflow-y: auto;font-size: 15px;line-height: 1.5;color: rgba(0,0,0,.7);"><input style="border-width: 1px;border-style: solid;padding: 15px;background: #f2f2f2;width: 100%;text-indent: 6px;box-sizing: border-box;margin-top: 5px;border-radius: 0;outline:0;border-color:#ececec;" placeholder="' + placeholder + '" type="search" name="search"></div>';
    message += '<div class="pop_search_btn_div" style="padding: 0 20px;text-align: right;box-sizing: border-box;"><button type="submit" style="min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;font-size:14px;">' + btn1 + '</button><button type="button" onclick="unblockUI()" style="font-size:14px;min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;">' + btn2 + '</button></div></form></div>';
    if (bodywidth < 768) {
        var w = bodywidth - 40;
        jQuery.blockUI({ onOverlayClick: top.jQuery.unblockUI, css: { "cursor": "auto", "top": "30%", "left": "50%", "margin-left": "-" + (w / 2) + "px", width: w + "px", height: "180px" }, message: message });
    } else {
        jQuery.blockUI({ onOverlayClick: top.jQuery.unblockUI, css: { "cursor": "auto", "top": "30%", "left": "50%", "margin-left": "-360px", width: "720px", height: "180px" }, message: message });
    }
    jQuery('body').css('cursor', 'auto');

}

function unblockUI() {
    jQuery.unblockUI();
}

function beforeOnclick(e, msg) {
    if (confirm(msg)) {

    } else {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}

function login_button_click(id, link) {
    if (self != top && typeof parent.jAlert == "function") {
        jAlert("åœ¨ç¼–è¾‘æ¨¡å¼ä¸‹ï¼Œä¸å…è®¸ä½¿ç”¨è¯¥åŠŸèƒ½ï¼Œè¯·åˆ°é¢„è§ˆæ¨¡å¼ä¸‹ä½¿ç”¨ã€‚");
        return false;
    }
    var back = location.href;
    try { if (location.href.indexOf('qfy-login.php') > 0) back = document.loginform.redirect_to.value; } catch (e) { back = '/'; }
    location.href = (link ? link : '/') + '?connect=' + id + '&action=login&qfy_nocache=true&back=' + escape(back);
}

function play_qfy_video(obj) {
    var p = jQuery(obj).closest(".video_play");
    var iframe = p.find("iframe");
    var src = iframe.attr("data-src");
    var ispop = iframe.attr("data-ispopup");
    if (jQuery("body").width() < 768) {
        ispop = 0;
    }
    if (ispop == "1") {
        var pop_width = iframe.attr("data-pop_width");
        var pop_height = iframe.attr("data-pop_height");
        var cover = iframe.attr("data-cover");
        var controlBarVisibility = iframe.attr("data-controlbarvisibility");
        var volume = iframe.attr("data-volume");
        var bodywidth = jQuery("body").width();
        var bodyheight = jQuery(window).height();
        if (pop_width > bodywidth) {
            pop_width = bodywidth;
        }
        if (pop_height > bodyheight) {
            pop_height = bodyheight;
        }
        //onOverlayClick: top.jQuery.unblockUI,
        top.jQuery.blockUI({ css: { "top": "50%", "left": "50%", "margin-top": "-" + (pop_height / 2) + "px", "margin-left": "-" + (pop_width / 2) + "px", width: pop_width + "px", height: pop_height + "px" }, message: "<iframe style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='" + pop_height + "' data-cover='" + cover + "' data-controlbarvisibility='" + controlBarVisibility + "' data-volume='" + volume + "' data-autoplay='true' src='" + src + "' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>âœ•</div><div class='block-move ' title='æŒ‰ä½æ‹–åŠ¨ä½ç½®' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>" });
        top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function() {
            top.jQuery.unblockUI();
        });
        top.jQuery('.blockUI.blockMsg').unbind().draggable({ handle: ".block-move" });
        top.jQuery('body,.blockOverlay').css('cursor', 'auto');
    } else {
        jQuery(obj).removeClass("toplay").addClass("playing").attr("src", "http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/projekktor/themes/maccaco/buffering.gif");
        iframe.attr("data-autoplay", "true").attr("src", src);
    }
}

function init_usermange_detail() {
    jQuery(".usermanage_container").each(function() {
        var hash = location.hash;
        var curr_action = "";
        if (hash.indexOf("#usermange") > -1) {
            hash = hash.replace("#usermange-", "");
            var tmp = hash.split("-");
            var obj = jQuery(this);
            if (jQuery(this).find(".usermenu." + tmp[0]).length > 0) {
                obj = jQuery(this).find(".usermenu." + tmp[0]);
            }
            open_user_detail(tmp[1], obj, tmp[0], tmp[2], tmp[4], tmp[3]);
        } else {

            if (jQuery(".usermanage_container .usermenu.detail").length > 0) {
                open_user_detail("detail", jQuery(this).find(".usermenu.detail"), "user");
            } else {
                open_user_detail("detail", jQuery(this), "user");
            }
        }
    })

}

function open_user_detail_confirm(status, obj, curr_action, sider, $id, $paged, msg) {
    if (confirm(msg)) {
        open_user_detail(status, obj, curr_action, sider, $id, $paged)
    }
}

function open_user_detail(status, obj, curr_action, sider, $id, $paged) {
    var p = jQuery(obj).closest(".usermanage_container");
    if (p.hasClass("doing")) {
        return;
    }
    if (jQuery(obj).hasClass("usermenu")) {
        p.find(".active.usermenu").removeClass("active");
        jQuery(obj).addClass("active");
    }
    p.addClass("doing");
    var width = jQuery("body").width();
    var isleft = false;
    var action = "bit_get_user_order_details";
    if (curr_action == "user") {
        action = "bit_get_user_details";
    }

    if (sider == "order" && sider == "left") {
        isleft = true;
        jQuery(obj).find("i").attr("data-tmpclass", jQuery(obj).find("i").attr("class")).attr("class", "fa fa-spinner fa-spin fa-3x fa-fw");
    } else if (sider == "right") {
        if (obj && jQuery(obj).length > 0) {
            jQuery(obj).siblings().removeClass("active");
            jQuery(obj).addClass("active");
        }
        p.find(".bit-order-list:visible").prepend('<div class="user_loading" style="z-index:11;position:absolute;height:100%;width:100%;padding-top:200px; background: rgba(255,255,255,0.2);text-align: center;max-width: 100%;"><img src="http://fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif" /></div>');
    } else {
        if (width < 992) {
            isleft = true;
        }
        if (obj && jQuery(obj).length > 0) {
            jQuery(obj).siblings().removeClass("active");
            jQuery(obj).addClass("active");
        }

        p.find(".usermanage_content .bit-order-list").prepend('<div class="user_loading" style="z-index:11;position:absolute;height:100%;width:100%;padding-top:200px;background: rgba(255,255,255,0.2);text-align: center;max-width: 100%;"><img src="http://fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif" /></div>');
    }
    if (top == self) {
        if (!sider) sider = "";
        if (!$paged) $paged = "0";
        if (!$id) $id = "0";
        location.hash = "#usermange-" + curr_action + "-" + status + "-" + sider + "-" + $paged + "-" + $id;
    }
    var shortcode = p.attr("data-shortcode");
    jQuery.post("/admin/admin-ajax.php", { "action": action, "curr_action": curr_action, "status": status, "id": $id, "paged": $paged, "shortcode": shortcode }, function(data) {
        p.removeClass("doing");
        if (data == 0) {
            data = "<div class='empty' style='text-align:center;'><i class='fa-dropbox fa' style='font-size:150px;color:#EDEDED;padding:20px;'></i></div>";
        }

        if (p.find(".usermanage_leftslider .bit-order-list").length > 0) {
            p.find(".usermanage_leftslider .bit-order-list").html(data);
        } else {
            p.find(".usermanage_rightslider .bit-order-list").html(data);
        }

        p.find(".usermanage_content .mypages.pagenav a,.usermanage_content .bitcommerce-pagination .page-numbers").removeAttr("href").click(function() {
            var $paged = jQuery(this).attr("paged");
            if ($paged) open_user_detail(status, obj, curr_action, sider, $id, $paged);
            return;
        })

        if (isleft) {
            jQuery(obj).find("i").attr("class", jQuery(obj).find("i").attr("data-tmpclass"));
            var content = p.find(".usermanage_content .bit-order-list").prop("outerHTML");
            p.find(".usermanage_leftslider .usermanage_page").addClass("page-from-center-to-left");
            p.find(".usermanage_leftslider").append('<div class="usermanage_page page-from-right-to-center" style="position:absolute;top:0;width:100%;">' + content + '</div>');
            setTimeout(function() {
                p.find(".usermanage_leftslider .usermanage_page.page-from-center-to-left").hide();
                p.find(".usermanage_leftslider .usermanage_page.page-from-right-to-center").attr("style", "");
            }, 500);
        }
        jQuery('.qfy_datatable_event:not(.loaded)').each(function() {
            $this = jQuery(this);
            if (typeof jQuery.fn.DataTable == "undefined") {
                jQuery.getScript("/FeiEditor/bitSite/js/dataTables/jquery.dataTables.js").done(function() {
                    qfy_dataTable_event($this);
                })
            } else {
                qfy_dataTable_event($this);
            }
        })
        if (curr_action == "user") {
            /* reinitialise */
            qfyuser_responsive();
            qfyuser_chosen();
            qfyuser_fluid_videos();
            qfyuser_ajax_picupload();
            if (typeof(qfyuser_media_manager) == 'function') {
                qfyuser_media_manager();
            }
            jQuery('.qfyuser form').each(function() {
                qfyuser_collapse(jQuery(this));
            });
            qfyuser_overlay_center('.qfyuser-overlay-inner');
        } else if (curr_action == "billing_address" || curr_action == "address") {
            chang_city_init();
            p.find(".qfyuser-submit .qfyuser-button").click(function() {
                p.find('input[type=submit],input[type=button]').attr('disabled', 'disabled');
                p.find('img.qfyuser-loading').show().addClass('inline');
                jQuery(this).closest("form").ajaxSubmit({
                    success: function(result) {
                        p.find('input[type=submit],input[type=button]').removeAttr('disabled');
                        p.find('img.qfyuser-loading').hide().removeClass('inline');
                        qfyuser_overlay_confirmation("ä¿¡æ¯ä¿å­˜æˆåŠŸï¼");
                    }
                });
            })

        }

    });


}

function chang_city_init() {
    // wc_country_select_params is required to continue, ensure the object exists
    if (typeof wc_country_select_params === "undefined")
        return false;

    /* State/Country select boxes */
    var states_json = wc_country_select_params.countries.replace(/&quot;/g, '"');
    var states = $.parseJSON(states_json);

    $('select.country_to_state, input.country_to_state').change(function() {
        var country = $(this).val();

        var $statebox = $(this).closest('div').find('#billing_state, #shipping_state, #calc_shipping_state');
        var $parent = $statebox.parent();

        var input_name = $statebox.attr('name');
        var input_id = $statebox.attr('id');
        var value = $statebox.val();
        var placeholder = $statebox.attr('placeholder');

        if (states[country]) {
            if (states[country].length == 0) {

                $statebox.parent().hide().find('.chosen-container').remove();
                $statebox.replaceWith('<input type="hidden" class="hidden" name="' + input_name + '" id="' + input_id + '" value="" placeholder="' + placeholder + '" />');

                $('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

            } else {

                var options = '';
                var state = states[country];
                for (var index in state) {
                    options = options + '<option value="' + index + '">' + state[index] + '</option>';
                }
                $statebox.parent().show();
                if ($statebox.is('input')) {
                    // Change for select
                    $statebox.replaceWith('<select name="' + input_name + '" id="' + input_id + '" class="state_select" placeholder="' + placeholder + '"></select>');
                    $statebox = $(this).closest('div').find('#billing_state, #shipping_state, #calc_shipping_state');
                }
                $statebox.html('<option value="">' + wc_country_select_params.i18n_select_state_text + '</option>' + options);

                $statebox.val(value);

                $('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

            }
        } else {
            if ($statebox.is('select')) {

                $parent.show().find('.chosen-container').remove();
                $statebox.replaceWith('<input type="text" class="input-text" name="' + input_name + '" id="' + input_id + '" placeholder="' + placeholder + '" />');

                $('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

            } else if ($statebox.is('.hidden')) {

                $parent.show().find('.chosen-container').remove();
                $statebox.replaceWith('<input type="text" class="input-text" name="' + input_name + '" id="' + input_id + '" placeholder="' + placeholder + '" />');

                $('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

            }
        }

        $('body').trigger('country_to_state_changing', [country, $(this).closest('div')]);

    }).change();

}

function open_user_back() {
    jQuery(".usermanage_leftslider .page-from-right-to-center").removeClass("page-from-right-to-center").addClass("page-from-center-to-right");
    jQuery(".usermanage_leftslider .page-from-center-to-left").removeClass("page-from-center-to-left").css({ "position": "absolute", "top": "0", "display": "block", "width": "100%", "z-index": "1" }).addClass("page-from-left-to-center");
    setTimeout(function() {
        jQuery(".usermanage_leftslider .usermanage_page.page-from-left-to-center").removeClass("page-from-left-to-center").attr("style", "");
        jQuery(".usermanage_leftslider .usermanage_page.page-from-center-to-right").remove();
    }, 500);
}


function qfy_secode_check(obj) {
    var form = jQuery(obj).closest("form");
    var code = form.find("[name='secode']").val();
    var imagecode = form.find("[name='secode_check']").val();
    form.find(".qfyuser-warning,.qfyuser-success").remove();

    form.find(".qfyuser-loading").show().addClass('inline');
    jQuery.ajax({
        type: "POST",
        url: "/admin/admin-ajax.php",
        dataType: "JSON",
        data: { "action": "secode_check", "code": code, "imagecode": imagecode },
        error: function(request) {
            form.find(".qfyuser-loading").hide().removeClass('inline');
            console.log("Connent error");
        },
        success: function(data) {

            form.find(".imageCodeClass").click();
            form.find(".qfyuser-loading").hide().removeClass('inline');
            if (data.status && data.key == "secodeinfo") {
                form.find("[name='secode_check']").val("");
                form.find("#secodeinfo").html("<div class='qfyuser-success' style='color:green;'>" + data.msg + "</div>");
                var bz_size = form.find("#secodeinfo").attr("data-bz_size");
                if (bz_size) form.find("#secodeinfo .comment_content").css("font-size", bz_size + "px");
                var bz_color = form.find("#secodeinfo").attr("data-bz_color");
                if (bz_color) form.find("#secodeinfo .comment_content").css("color", bz_color);
                var bzdate_color = form.find("#secodeinfo").attr("data-bzdate_color");
                if (bzdate_color) form.find("#secodeinfo .comment_date").css("color", bzdate_color);
                var bzdate_size = form.find("#secodeinfo").attr("data-bzdate_size");
                if (bzdate_size) form.find("#secodeinfo .comment_date").css("font-size", bzdate_size + "px");


            } else if (data.status && data.status == "error") {
                if (data.key != "secode_check") {
                    form.find("[name='secode_check']").val("");
                }
                var element1 = form.find("." + data.key);
                if (element1.parent().find('.qfyuser-warning').length == 0) {
                    element1.addClass('warning').removeClass('ok');
                    element1.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>' + data.msg + '</div>');
                    element1.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
                } else {
                    element1.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>' + data.msg);
                    element1.parent().find('.qfyuser-warning').css({ 'top': '0px', 'opacity': '1' });
                }
            } else if (data.status && data.status == "success") {
                form.find("[name='secode_check']").val("");
                form.find("#secodeinfo").html("<div class='qfyuser-success' style='color:green;'>" + data.msg + "</div>");
            }
        }
    });
}

;

/* thickbox: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-includes/js/thickbox/thickbox.js) */
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 */

if (typeof tb_pathToImage != 'string') {
    var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function() {
    tb_init('a.thickbox, area.thickbox, input.thickbox'); //pass where to apply thickbox

});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk) {
    jQuery('body').on('click', domChunk, tb_click);
}

function tb_click() {
    var t = this.title || this.name || null;
    var a = this.href || this.alt;
    var g = this.rel || false;
    tb_show(t, a, g);
    this.blur();
    return false;
}

function tb_show(caption, url, imageGroup) { //function called when the user clicks on a thickbox link
    imgLoader = new Image(); // preload image
    imgLoader.src = tb_pathToImage;
    try {
        if (typeof document.body.style.maxHeight === "undefined") { //if IE 6
            jQuery("body", "html").css({ height: "100%", width: "100%" });
            jQuery("html").css("overflow", "hidden");
            if (document.getElementById("TB_HideSelect") === null) { //iframe to hide select elements in ie6
                jQuery("body").append("<iframe id='TB_HideSelect'>" + thickboxL10n.noiframes + "</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
                jQuery("#TB_overlay").click(tb_remove);
            }
        } else { //all others
            if (document.getElementById("TB_overlay") === null) {
                jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
                jQuery("#TB_overlay").click(tb_remove);
            }
        }

        if (tb_detectMacXFF()) {
            jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack"); //use png overlay so hide flash
        } else {
            jQuery("#TB_overlay").addClass("TB_overlayBG"); //use background and opacity
        }

        if (caption === null) { caption = ""; }
        jQuery("body").append("<div id='TB_load'><img src='" + imgLoader.src + "' width='208' /></div>"); //add loader to the page
        jQuery('#TB_load').show(); //show loader

        var baseURL;
        if (url.indexOf("?") !== -1) { //ff there is a query string involved
            baseURL = url.substr(0, url.indexOf("?"));
        } else {
            baseURL = url;
        }

        var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
        var urlType = baseURL.toLowerCase().match(urlString);

        if (urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp') { //code to show images

            TB_PrevCaption = "";
            TB_PrevURL = "";
            TB_PrevHTML = "";
            TB_NextCaption = "";
            TB_NextURL = "";
            TB_NextHTML = "";
            TB_imageCount = "";
            TB_FoundURL = false;
            if (imageGroup) {
                TB_TempArray = jQuery("a[rel=" + imageGroup + "]").get();
                for (TB_Counter = 0;
                    ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
                    var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
                    if (!(TB_TempArray[TB_Counter].href == url)) {
                        if (TB_FoundURL) {
                            TB_NextCaption = TB_TempArray[TB_Counter].title;
                            TB_NextURL = TB_TempArray[TB_Counter].href;
                            TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>" + thickboxL10n.next + "</a></span>";
                        } else {
                            TB_PrevCaption = TB_TempArray[TB_Counter].title;
                            TB_PrevURL = TB_TempArray[TB_Counter].href;
                            TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>" + thickboxL10n.prev + "</a></span>";
                        }
                    } else {
                        TB_FoundURL = true;
                        TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
                    }
                }
            }

            imgPreloader = new Image();
            imgPreloader.onload = function() {
                imgPreloader.onload = null;

                // Resizing large images - orginal by Christian Montoya edited by me.
                var pagesize = tb_getPageSize();
                var x = pagesize[0] - 50;
                var y = pagesize[1] - 20;
                var imageWidth = imgPreloader.width;
                var imageHeight = imgPreloader.height;
                if (imageWidth > x) {
                    imageHeight = imageHeight * (x / imageWidth);
                    imageWidth = x;
                    if (imageHeight > y) {
                        imageWidth = imageWidth * (y / imageHeight);
                        imageHeight = y;
                    }
                } else if (imageHeight > y) {
                    imageWidth = imageWidth * (y / imageHeight);
                    imageHeight = y;
                    if (imageWidth > x) {
                        imageHeight = imageHeight * (x / imageWidth);
                        imageWidth = x;
                    }
                }
                // End Resizing

                TB_WIDTH = imageWidth + 30;
                TB_HEIGHT = imageHeight + 60;
                jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='" + thickboxL10n.close + "'><img id='TB_Image' src='" + url + "' width='" + imageWidth + "' height='" + imageHeight + "' alt='" + caption + "'/></a>" + "<div id='TB_caption'>" + caption + "<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='" + thickboxL10n.close + "'><div class='tb-close-icon'></div></a></div>");

                jQuery("#TB_closeWindowButton").click(tb_remove);

                if (!(TB_PrevHTML === "")) {
                    function goPrev() {
                        if (jQuery(document).unbind("click", goPrev)) { jQuery(document).unbind("click", goPrev); }
                        jQuery("#TB_window").remove();
                        jQuery("body").append("<div id='TB_window'></div>");
                        tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
                        return false;
                    }
                    jQuery("#TB_prev").click(goPrev);
                }

                if (!(TB_NextHTML === "")) {
                    function goNext() {
                        jQuery("#TB_window").remove();
                        jQuery("body").append("<div id='TB_window'></div>");
                        tb_show(TB_NextCaption, TB_NextURL, imageGroup);
                        return false;
                    }
                    jQuery("#TB_next").click(goNext);

                }

                jQuery(document).bind('keydown.thickbox', function(e) {
                    e.stopImmediatePropagation();

                    if (e.which == 27) { // close
                        if (!jQuery(document).triggerHandler('qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }]))
                            tb_remove();

                    } else if (e.which == 190) { // display previous image
                        if (!(TB_NextHTML == "")) {
                            jQuery(document).unbind('thickbox');
                            goNext();
                        }
                    } else if (e.which == 188) { // display next image
                        if (!(TB_PrevHTML == "")) {
                            jQuery(document).unbind('thickbox');
                            goPrev();
                        }
                    }
                    return false;
                });

                tb_position();
                jQuery("#TB_load").remove();
                jQuery("#TB_ImageOff").click(tb_remove);
                jQuery("#TB_window").css({ 'visibility': 'visible' }); //for safari using css instead of show
            };

            imgPreloader.src = url;
        } else { //code to show html

            var queryString = url.replace(/^[^\?]+\??/, '');
            var params = tb_parseQuery(queryString);

            TB_WIDTH = (params['width'] * 1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
            TB_HEIGHT = (params['height'] * 1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
            ajaxContentW = TB_WIDTH - 30;
            ajaxContentH = TB_HEIGHT - 45;

            if (url.indexOf('TB_iframe') != -1) { // either iframe or ajax window
                urlNoQuery = url.split('TB_');
                jQuery("#TB_iframeContent").remove();
                if (params['modal'] != "true") { //iframe no modal
                    jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>" + caption + "</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='" + thickboxL10n.close + "'><div class='tb-close-icon'></div></a></div></div><iframe allowFullScreen=true allowFullScreen  frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='TB_iframeContent' name='TB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='tb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;' >" + thickboxL10n.noiframes + "</iframe>");
                } else { //iframe modal
                    jQuery("#TB_overlay").unbind();
                    jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='TB_iframeContent' name='TB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='tb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;'>" + thickboxL10n.noiframes + "</iframe>");
                }
            } else { // not an iframe, ajax
                if (jQuery("#TB_window").css("visibility") != "visible") {
                    if (params['modal'] != "true") { //ajax no modal
                        jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>" + caption + "</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px'></div>");
                    } else { //ajax modal
                        jQuery("#TB_overlay").unbind();
                        jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px;'></div>");
                    }
                } else { //this means the window is already up, we are just loading new content via ajax
                    jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW + "px";
                    jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH + "px";
                    jQuery("#TB_ajaxContent")[0].scrollTop = 0;
                    jQuery("#TB_ajaxWindowTitle").html(caption);
                }
            }

            jQuery("#TB_closeWindowButton").click(tb_remove);

            if (url.indexOf('TB_inline') != -1) {
                jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
                jQuery("#TB_window").bind('tb_unload', function() {
                    jQuery('#' + params['inlineId']).append(jQuery("#TB_ajaxContent").children()); // move elements back when you're finished
                });
                tb_position();
                jQuery("#TB_load").remove();
                jQuery("#TB_window").css({ 'visibility': 'visible' });
            } else if (url.indexOf('TB_iframe') != -1) {
                tb_position();
                jQuery("#TB_load").remove();
                jQuery("#TB_window").css({ 'visibility': 'visible' });
            } else {
                jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()), function() { //to do a post change this load method
                    tb_position();
                    jQuery("#TB_load").remove();
                    tb_init("#TB_ajaxContent a.thickbox");
                    jQuery("#TB_window").css({ 'visibility': 'visible' });
                });
            }

        }

        if (!params['modal']) {
            jQuery(document).bind('keyup.thickbox', function(e) {

                if (e.which == 27) { // close
                    e.stopImmediatePropagation();
                    if (!jQuery(document).triggerHandler('qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }]))
                        tb_remove();

                    return false;
                }
            });
        }

    } catch (e) {
        //nothing here
    }
}

//helper functions below
function tb_showIframe() {
    jQuery("#TB_load").remove();
    jQuery("#TB_window").css({ 'visibility': 'visible' });
}

function tb_remove() {
    jQuery("#TB_imageOff").unbind("click");
    jQuery("#TB_closeWindowButton").unbind("click");
    jQuery("#TB_window").fadeOut("fast", function() { jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove(); });
    jQuery("#TB_load").remove();
    if (typeof document.body.style.maxHeight == "undefined") { //if IE 6
        jQuery("body", "html").css({ height: "auto", width: "auto" });
        jQuery("html").css("overflow", "");
    }
    jQuery(document).unbind('.thickbox');
    return false;
}

function tb_position() {

    var isIE6 = typeof document.body.style.maxHeight === "undefined";
    jQuery("#TB_window").css({ marginLeft: '-' + parseInt((TB_WIDTH / 2), 10) + 'px', width: TB_WIDTH + 'px' });
    if (!isIE6) { // take away IE6
        jQuery("#TB_window").css({ marginTop: '-' + parseInt((TB_HEIGHT / 2), 10) + 'px' });
    }
}

function tb_parseQuery(query) {
    var Params = {};
    if (!query) { return Params; } // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) { continue; }
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

function tb_getPageSize() {
    var de = document.documentElement;
    var w = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
    var h = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    arrayPageSize = [w, h];
    return arrayPageSize;
}

function tb_detectMacXFF() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox') != -1) {
        return true;
    }
};

/* jquery-lazy: (http://w-52279-76022-97188.479019151.sites.hk35.qifeiye.com/qfy-includes/js/jquery.lazy.min.js) */
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
! function(t, e) {
    "use strict";

    function r(r, a, i, u, l) {
        function f() {
            L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function() { s(!0) }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function(t) { "resize" === t.type && (w = B = -1), s(t.all) }), u.a = function(t) { t = c(t), i.push.apply(i, t) }, u.g = function() { return i = n(i).filter(function() { return !n(this).data(a.loadedName) }) }, u.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter(function() { return this === t[e] });
                    r.length && s(!1, r)
                }
            }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e))
        }

        function c(t) {
            var i = a.defaultImage,
                o = a.placeholder,
                u = a.imageBase,
                l = a.srcsetAttribute,
                f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function() {
                var t = n(this),
                    r = m(this);
                return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
            }).data("plugin_" + a.name, r);
            for (var s = 0, d = t.length; s < d; s++) {
                var A = n(t[s]),
                    g = m(t[s]),
                    h = A.attr(a.imageBaseAttribute) || u;
                g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
            }
            return t
        }

        function s(t, e) {
            if (!i.length) return void(a.autoDestroy && r.destroy());
            for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                if (t || e || A(o[s])) {
                    var g = n(o[s]),
                        h = m(o[s]),
                        b = g.attr(a.attribute),
                        v = g.attr(a.imageBaseAttribute) || l,
                        p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p))
                }
            u && (i = n(i).filter(function() { return !n(this).data(c) }))
        }

        function d(t, e, r, i) {
            ++z;
            var o = function() { y("onError", t), p(), o = n.noop };
            y("beforeLoad", t);
            var u = a.attribute,
                l = a.srcsetAttribute,
                f = a.sizesAttribute,
                c = a.retinaAttribute,
                s = a.removeAttribute,
                d = a.loadedName,
                A = t.attr(c);
            if (i) {
                var g = function() { s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop };
                t.off(I).one(I, o).one(D, g), y(i, t, function(e) { e ? (t.off(D), g()) : (t.off(I), o()) }) || t.trigger(I)
            } else {
                var h = n(new Image);
                h.one(I, o).one(D, function() { t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p() });
                var m = (L && A ? A : t.attr(u)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
            }
        }

        function A(t) {
            var e = t.getBoundingClientRect(),
                r = a.scrollDirection,
                n = a.threshold,
                i = h() + n > e.top && -n < e.bottom,
                o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : "horizontal" === r ? o : i && o
        }

        function g() { return w >= 0 ? w : w = n(t).width() }

        function h() { return B >= 0 ? B : B = n(t).height() }

        function m(t) { return t.tagName.toLowerCase() }

        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
            }
            return t
        }

        function v(t, e) {
            var n, i = 0;
            return function(o, u) {
                function l() { i = +new Date, e.call(r, o) }
                var f = +new Date - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f)
            }
        }

        function p() {--z, i.length || z || y("onFinishedAll") }

        function y(t, e, n) { return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0) }
        var z = 0,
            w = -1,
            B = -1,
            L = !1,
            T = "afterLoad",
            D = "load",
            I = "error",
            N = "img",
            E = "src",
            F = "srcset",
            C = "sizes",
            O = "background-image";
        "event" === a.bind || o ? f() : n(t).on(D + "." + l, f)
    }

    function a(a, o) {
        var u = this,
            l = n.extend({}, u.config, o),
            f = {},
            c = l.name + "-" + ++i;
        return u.config = function(t, r) { return r === e ? l[t] : (l[t] = r, u) }, u.addItems = function(t) { return f.a && f.a("string" === n.type(t) ? n(t) : t), u }, u.getItems = function() { return f.g ? f.g() : {} }, u.update = function(t) { return f.e && f.e({}, !t), u }, u.force = function(t) { return f.f && f.f("string" === n.type(t) ? n(t) : t), u }, u.loadAll = function() { return f.e && f.e({ all: !0 }, !0), u }, u.destroy = function() { return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e }, r(u, l, a, f, c), l.chainable ? a : u
    }
    var n = t.jQuery || t.Zepto,
        i = 0,
        o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) { return new a(this, t) }, n.Lazy = n.lazy = function(t, r, i) { if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) { t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r]; for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)(o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i); for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0] } }, a.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, n(t).on("load", function() { o = !0 })
}(window);;