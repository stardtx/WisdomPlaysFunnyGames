/*! game-api - v0.7.12 - 2014-04-03 */
(function(t) { "use strict";

    function e() {}

    function n(t) { if (t = t || {}, !t.isMaster) throw "The DataStore can only be instantiated by the Master";
        this.dataStore = {} }

    function r(t, e) { t = t || {}, this.isMaster = t.isMaster, this.messenger = t.messenger, this.moduleReady = e ? e : !1, this.timeoutAfter = 500, this.timeout = !1, this._callbacks = { pause: !1, resume: !1 }, this._setupEvents() }

    function i(t, e) { t = t || {}, this.IS_MASTER = t.isMaster, this.IS_SLAVE = !this.IS_MASTER, this.data = t.data, this.messenger = t.messenger, this.moduleReady = e ? e : !1, this.gamePlayTracking = { started: !1, appid: null, host: null, timestamp: null }, this.timeInGameTracking = { started: !1, appid: null, timestamp: null } }

    function o(t, e) { t = t || {}, this.IS_MASTER = t.isMaster, this.IS_SLAVE = !this.IS_MASTER, this.moduleReady = e ? e : !1, this.messenger = t.messenger, this.components = t.components, this.data = t.data || null }

    function a(t) { var e = "string" == typeof t ? s(t) : t;
        e && (this.type = e.type, this.callbackId = e.callbackId, this.data = e.data) }

    function s(t) { var e, n, r, i = !1,
            o = []; if ("string" == typeof t && (o = t.split("|"), "gameapi" === o[0])) { o.shift(), e = o.shift(), r = parseInt(o.shift(), 10), n = o.join("|"); try { i = { type: e, callbackId: r, data: "" !== n ? JSON.parse(n) : "" } } catch (a) {} } return i }

    function u(t) { t = t || {}, this.IS_MASTER = "boolean" == typeof t.isMaster ? t.isMaster : !1, this.IS_SLAVE = !this.IS_MASTER, this._target = t.target, this._callbacks = [], this._channels = [], this.IS_MASTER && t.dataStore && (this.dataStore = t.dataStore), this._setupEventListener() }

    function c(t, n, r, i, o) { this.version = "0.7.12", this.isReady = !1, this._setRole(), this.__ = {}, this.__.dataStore = this.IS_MASTER ? new t({ isMaster: !0 }) : null, this.__.messenger = new n({ isMaster: this.IS_MASTER, target: this._getTarget(), dataStore: this.__.dataStore }), this.__.components = new e, this.Branding = new r({ isMaster: this.IS_MASTER, messenger: this.__.messenger, components: this.__.components }, !0), this.__.EventTracking = new i({ isMaster: this.IS_MASTER, data: null, messenger: this.__.messenger }, !0), this.GameBreak = new o({ isMaster: this.IS_MASTER, messenger: this.__.messenger }, !0) } var p;
    (function(t) { if ("function" == typeof bootstrap) bootstrap("promise", t);
        else if ("object" == typeof exports) module.exports = t();
        else if ("function" == typeof define && define.amd) define(t);
        else if ("undefined" != typeof ses) { if (!ses.ok()) return;
            ses.makeQ = t } else p = t() })(function() {
        function t(t) { return function() { return $.apply(t, arguments) } }

        function e(t) { return t === Object(t) }

        function n(t) { return "[object StopIteration]" === ee(t) || t instanceof W }

        function r(t, e) { if (B && e.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(ne)) { for (var n = [], r = e; r; r = r.source) r.stack && n.unshift(r.stack);
                n.unshift(t.stack); var o = n.join("\n" + ne + "\n");
                t.stack = i(o) } }

        function i(t) { for (var e = t.split("\n"), n = [], r = 0; e.length > r; ++r) { var i = e[r];
                s(i) || o(i) || !i || n.push(i) } return n.join("\n") }

        function o(t) { return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:") }

        function a(t) { var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t); if (e) return [e[1], Number(e[2])]; var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t); if (n) return [n[1], Number(n[2])]; var r = /.*@(.+):(\d+)$/.exec(t); return r ? [r[1], Number(r[2])] : void 0 }

        function s(t) { var e = a(t); if (!e) return !1; var n = e[0],
                r = e[1]; return n === J && r >= U && ae >= r }

        function u() { if (B) try { throw Error() } catch (t) { var e = t.stack.split("\n"),
                    n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                    r = a(n); if (!r) return; return J = r[0], r[1] } }

        function c(t, e, n) { return function() { return "undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + n + " instead.", Error("").stack), t.apply(t, arguments) } }

        function p(t) { return y(t) ? t : v(t) ? E(t) : A(t) }

        function l() {
            function t(t) { e = t, o.source = t, Y(n, function(e, n) { H(function() { t.promiseDispatch.apply(t, n) }) }, void 0), n = void 0, r = void 0 } var e, n = [],
                r = [],
                i = X(l.prototype),
                o = X(d.prototype); if (o.promiseDispatch = function(t, i, o) { var a = Q(arguments);
                    n ? (n.push(a), "when" === i && o[1] && r.push(o[1])) : H(function() { e.promiseDispatch.apply(e, a) }) }, o.valueOf = function() { if (n) return o; var t = m(e); return y(t) && (e = t), t }, o.inspect = function() { return e ? e.inspect() : { state: "pending" } }, p.longStackSupport && B) try { throw Error() } catch (a) { o.stack = a.stack.substring(a.stack.indexOf("\n") + 1) }
            return i.promise = o, i.resolve = function(n) { e || t(p(n)) }, i.fulfill = function(n) { e || t(A(n)) }, i.reject = function(n) { e || t(T(n)) }, i.notify = function(t) { e || Y(r, function(e, n) { H(function() { n(t) }) }, void 0) }, i }

        function f(t) { if ("function" != typeof t) throw new TypeError("resolver must be a function."); var e = l(); try { t(e.resolve, e.reject, e.notify) } catch (n) { e.reject(n) } return e.promise }

        function h(t) { return f(function(e, n) { for (var r = 0, i = t.length; i > r; r++) p(t[r]).then(e, n) }) }

        function d(t, e, n) { void 0 === e && (e = function(t) { return T(Error("Promise does not support operation: " + t)) }), void 0 === n && (n = function() { return { state: "unknown" } }); var r = X(d.prototype); if (r.promiseDispatch = function(n, i, o) { var a; try { a = t[i] ? t[i].apply(r, o) : e.call(r, i, o) } catch (s) { a = T(s) }
                    n && n(a) }, r.inspect = n, n) { var i = n(); "rejected" === i.state && (r.exception = i.reason), r.valueOf = function() { var t = n(); return "pending" === t.state || "rejected" === t.state ? r : t.value } } return r }

        function g(t, e, n, r) { return p(t).then(e, n, r) }

        function m(t) { if (y(t)) { var e = t.inspect(); if ("fulfilled" === e.state) return e.value } return t }

        function y(t) { return e(t) && "function" == typeof t.promiseDispatch && "function" == typeof t.inspect }

        function v(t) { return e(t) && "function" == typeof t.then }

        function _(t) { return y(t) && "pending" === t.inspect().state }

        function b(t) { return !y(t) || "fulfilled" === t.inspect().state }

        function S(t) { return y(t) && "rejected" === t.inspect().state }

        function k() { re.length = 0, ie.length = 0, oe || (oe = !0) }

        function w(t, e) { oe && (ie.push(t), e && e.stack !== void 0 ? re.push(e.stack) : re.push("(no stack) " + e)) }

        function I(t) { if (oe) { var e = z(ie, t); - 1 !== e && (ie.splice(e, 1), re.splice(e, 1)) } }

        function T(t) { var e = d({ when: function(e) { return e && I(this), e ? e(t) : this } }, function() { return this }, function() { return { state: "rejected", reason: t } }); return w(e, t), e }

        function A(t) { return d({ when: function() { return t }, get: function(e) { return t[e] }, set: function(e, n) { t[e] = n }, "delete": function(e) { delete t[e] }, post: function(e, n) { return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n) }, apply: function(e, n) { return t.apply(e, n) }, keys: function() { return te(t) } }, void 0, function() { return { state: "fulfilled", value: t } }) }

        function E(t) { var e = l(); return H(function() { try { t.then(e.resolve, e.reject, e.notify) } catch (n) { e.reject(n) } }), e.promise }

        function j(t) { return d({ isDef: function() {} }, function(e, n) { return C(t, e, n) }, function() { return p(t).inspect() }) }

        function M(t, e, n) { return p(t).spread(e, n) }

        function R(t) { return function() {
                function e(t, e) { var a; if ("undefined" == typeof StopIteration) { try { a = r[t](e) } catch (s) { return T(s) } return a.done ? a.value : g(a.value, i, o) } try { a = r[t](e) } catch (s) { return n(s) ? s.value : T(s) } return g(a, i, o) } var r = t.apply(this, arguments),
                    i = e.bind(e, "next"),
                    o = e.bind(e, "throw"); return i() } }

        function P(t) { p.done(p.async(t)()) }

        function G(t) { throw new W(t) }

        function x(t) { return function() { return M([this, L(arguments)], function(e, n) { return t.apply(e, n) }) } }

        function C(t, e, n) { return p(t).dispatch(e, n) }

        function L(t) { return g(t, function(t) { var e = 0,
                    n = l(); return Y(t, function(r, i, o) { var a;
                    y(i) && "fulfilled" === (a = i.inspect()).state ? t[o] = a.value : (++e, g(i, function(r) { t[o] = r, 0 === --e && n.resolve(t) }, n.reject, function(t) { n.notify({ index: o, value: t }) })) }, void 0), 0 === e && n.resolve(t), n.promise }) }

        function O(t) { return g(t, function(t) { return t = K(t, p), g(L(K(t, function(t) { return g(t, F, F) })), function() { return t }) }) }

        function N(t) { return p(t).allSettled() }

        function D(t, e) { return p(t).then(void 0, void 0, e) }

        function q(t, e) { return p(t).nodeify(e) } var B = !1; try { throw Error() } catch (V) { B = !!V.stack } var J, W, U = u(),
            F = function() {},
            H = function() {
                function t() { for (; e.next;) { e = e.next; var n = e.task;
                        e.task = void 0; var i = e.domain;
                        i && (e.domain = void 0, i.enter()); try { n() } catch (a) { if (o) throw i && i.exit(), setTimeout(t, 0), i && i.enter(), a;
                            setTimeout(function() { throw a }, 0) }
                        i && i.exit() }
                    r = !1 } var e = { task: void 0, next: null },
                    n = e,
                    r = !1,
                    i = void 0,
                    o = !1; if (H = function(t) { n = n.next = { task: t, domain: o && process.domain, next: null }, r || (r = !0, i()) }, "undefined" != typeof process && process.nextTick) o = !0, i = function() { process.nextTick(t) };
                else if ("function" == typeof setImmediate) i = "undefined" != typeof window ? setImmediate.bind(window, t) : function() { setImmediate(t) };
                else if ("undefined" != typeof MessageChannel) { var a = new MessageChannel;
                    a.port1.onmessage = function() { i = s, a.port1.onmessage = t, t() }; var s = function() { a.port2.postMessage(0) };
                    i = function() { setTimeout(t, 0), s() } } else i = function() { setTimeout(t, 0) }; return H }(),
            $ = Function.call,
            Q = t(Array.prototype.slice),
            Y = t(Array.prototype.reduce || function(t, e) { var n = 0,
                    r = this.length; if (1 === arguments.length)
                    for (;;) { if (n in this) { e = this[n++]; break } if (++n >= r) throw new TypeError }
                for (; r > n; n++) n in this && (e = t(e, this[n], n)); return e }),
            z = t(Array.prototype.indexOf || function(t) { for (var e = 0; this.length > e; e++)
                    if (this[e] === t) return e;
                return -1 }),
            K = t(Array.prototype.map || function(t, e) { var n = this,
                    r = []; return Y(n, function(i, o, a) { r.push(t.call(e, o, a, n)) }, void 0), r }),
            X = Object.create || function(t) {
                function e() {} return e.prototype = t, new e },
            Z = t(Object.prototype.hasOwnProperty),
            te = Object.keys || function(t) { var e = []; for (var n in t) Z(t, n) && e.push(n); return e },
            ee = t(Object.prototype.toString);
        W = "undefined" != typeof ReturnValue ? ReturnValue : function(t) { this.value = t }; var ne = "From previous event:";
        p.resolve = p, p.nextTick = H, p.longStackSupport = !1, p.defer = l, l.prototype.makeNodeResolver = function() { var t = this; return function(e, n) { e ? t.reject(e) : arguments.length > 2 ? t.resolve(Q(arguments, 1)) : t.resolve(n) } }, p.Promise = f, p.promise = f, f.race = h, f.all = L, f.reject = T, f.resolve = p, p.passByCopy = function(t) { return t }, d.prototype.passByCopy = function() { return this }, p.join = function(t, e) { return p(t).join(e) }, d.prototype.join = function(t) { return p([this, t]).spread(function(t, e) { if (t === e) return t; throw Error("Can't join: not the same: " + t + " " + e) }) }, p.race = h, d.prototype.race = function() { return this.then(p.race) }, p.makePromise = d, d.prototype.toString = function() { return "[object Promise]" }, d.prototype.then = function(t, e, n) {
            function i(e) { try { return "function" == typeof t ? t(e) : e } catch (n) { return T(n) } }

            function o(t) { if ("function" == typeof e) { r(t, s); try { return e(t) } catch (n) { return T(n) } } return T(t) }

            function a(t) { return "function" == typeof n ? n(t) : t } var s = this,
                u = l(),
                c = !1; return H(function() { s.promiseDispatch(function(t) { c || (c = !0, u.resolve(i(t))) }, "when", [function(t) { c || (c = !0, u.resolve(o(t))) }]) }), s.promiseDispatch(void 0, "when", [void 0, function(t) { var e, n = !1; try { e = a(t) } catch (r) { if (n = !0, !p.onerror) throw r;
                    p.onerror(r) }
                n || u.notify(e) }]), u.promise }, p.when = g, d.prototype.thenResolve = function(t) { return this.then(function() { return t }) }, p.thenResolve = function(t, e) { return p(t).thenResolve(e) }, d.prototype.thenReject = function(t) { return this.then(function() { throw t }) }, p.thenReject = function(t, e) { return p(t).thenReject(e) }, p.nearer = m, p.isPromise = y, p.isPromiseAlike = v, p.isPending = _, d.prototype.isPending = function() { return "pending" === this.inspect().state }, p.isFulfilled = b, d.prototype.isFulfilled = function() { return "fulfilled" === this.inspect().state }, p.isRejected = S, d.prototype.isRejected = function() { return "rejected" === this.inspect().state }; var re = [],
            ie = [],
            oe = !0;
        p.resetUnhandledRejections = k, p.getUnhandledReasons = function() { return re.slice() }, p.stopUnhandledRejectionTracking = function() { k(), oe = !1 }, k(), p.reject = T, p.fulfill = A, p.master = j, p.spread = M, d.prototype.spread = function(t, e) { return this.all().then(function(e) { return t.apply(void 0, e) }, e) }, p.async = R, p.spawn = P, p["return"] = G, p.promised = x, p.dispatch = C, d.prototype.dispatch = function(t, e) { var n = this,
                r = l(); return H(function() { n.promiseDispatch(r.resolve, t, e) }), r.promise }, p.get = function(t, e) { return p(t).dispatch("get", [e]) }, d.prototype.get = function(t) { return this.dispatch("get", [t]) }, p.set = function(t, e, n) { return p(t).dispatch("set", [e, n]) }, d.prototype.set = function(t, e) { return this.dispatch("set", [t, e]) }, p.del = p["delete"] = function(t, e) { return p(t).dispatch("delete", [e]) }, d.prototype.del = d.prototype["delete"] = function(t) { return this.dispatch("delete", [t]) }, p.mapply = p.post = function(t, e, n) { return p(t).dispatch("post", [e, n]) }, d.prototype.mapply = d.prototype.post = function(t, e) { return this.dispatch("post", [t, e]) }, p.send = p.mcall = p.invoke = function(t, e) { return p(t).dispatch("post", [e, Q(arguments, 2)]) }, d.prototype.send = d.prototype.mcall = d.prototype.invoke = function(t) { return this.dispatch("post", [t, Q(arguments, 1)]) }, p.fapply = function(t, e) { return p(t).dispatch("apply", [void 0, e]) }, d.prototype.fapply = function(t) { return this.dispatch("apply", [void 0, t]) }, p["try"] = p.fcall = function(t) { return p(t).dispatch("apply", [void 0, Q(arguments, 1)]) }, d.prototype.fcall = function() { return this.dispatch("apply", [void 0, Q(arguments)]) }, p.fbind = function(t) { var e = p(t),
                n = Q(arguments, 1); return function() { return e.dispatch("apply", [this, n.concat(Q(arguments))]) } }, d.prototype.fbind = function() { var t = this,
                e = Q(arguments); return function() { return t.dispatch("apply", [this, e.concat(Q(arguments))]) } }, p.keys = function(t) { return p(t).dispatch("keys", []) }, d.prototype.keys = function() { return this.dispatch("keys", []) }, p.all = L, d.prototype.all = function() { return L(this) }, p.allResolved = c(O, "allResolved", "allSettled"), d.prototype.allResolved = function() { return O(this) }, p.allSettled = N, d.prototype.allSettled = function() { return this.then(function(t) { return L(K(t, function(t) {
                    function e() { return t.inspect() } return t = p(t), t.then(e, e) })) }) }, p.fail = p["catch"] = function(t, e) { return p(t).then(void 0, e) }, d.prototype.fail = d.prototype["catch"] = function(t) { return this.then(void 0, t) }, p.progress = D, d.prototype.progress = function(t) { return this.then(void 0, void 0, t) }, p.fin = p["finally"] = function(t, e) { return p(t)["finally"](e) }, d.prototype.fin = d.prototype["finally"] = function(t) { return t = p(t), this.then(function(e) { return t.fcall().then(function() { return e }) }, function(e) { return t.fcall().then(function() { throw e }) }) }, p.done = function(t, e, n, r) { return p(t).done(e, n, r) }, d.prototype.done = function(t, e, n) { var i = function(t) { H(function() { if (r(t, o), !p.onerror) throw t;
                        p.onerror(t) }) },
                o = t || e || n ? this.then(t, e, n) : this; "object" == typeof process && process && process.domain && (i = process.domain.bind(i)), o.then(void 0, i) }, p.timeout = function(t, e, n) { return p(t).timeout(e, n) }, d.prototype.timeout = function(t, e) { var n = l(),
                r = setTimeout(function() { n.reject(Error(e || "Timed out after " + t + " ms")) }, t); return this.then(function(t) { clearTimeout(r), n.resolve(t) }, function(t) { clearTimeout(r), n.reject(t) }, n.notify), n.promise }, p.delay = function(t, e) { return void 0 === e && (e = t, t = void 0), p(t).delay(e) }, d.prototype.delay = function(t) { return this.then(function(e) { var n = l(); return setTimeout(function() { n.resolve(e) }, t), n.promise }) }, p.nfapply = function(t, e) { return p(t).nfapply(e) }, d.prototype.nfapply = function(t) { var e = l(),
                n = Q(t); return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise }, p.nfcall = function(t) { var e = Q(arguments, 1); return p(t).nfapply(e) }, d.prototype.nfcall = function() { var t = Q(arguments),
                e = l(); return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise }, p.nfbind = p.denodeify = function(t) { var e = Q(arguments, 1); return function() { var n = e.concat(Q(arguments)),
                    r = l(); return n.push(r.makeNodeResolver()), p(t).fapply(n).fail(r.reject), r.promise } }, d.prototype.nfbind = d.prototype.denodeify = function() { var t = Q(arguments); return t.unshift(this), p.denodeify.apply(void 0, t) }, p.nbind = function(t, e) { var n = Q(arguments, 2); return function() {
                function r() { return t.apply(e, arguments) } var i = n.concat(Q(arguments)),
                    o = l(); return i.push(o.makeNodeResolver()), p(r).fapply(i).fail(o.reject), o.promise } }, d.prototype.nbind = function() { var t = Q(arguments, 0); return t.unshift(this), p.nbind.apply(void 0, t) }, p.nmapply = p.npost = function(t, e, n) { return p(t).npost(e, n) }, d.prototype.nmapply = d.prototype.npost = function(t, e) { var n = Q(e || []),
                r = l(); return n.push(r.makeNodeResolver()), this.dispatch("post", [t, n]).fail(r.reject), r.promise }, p.nsend = p.nmcall = p.ninvoke = function(t, e) { var n = Q(arguments, 2),
                r = l(); return n.push(r.makeNodeResolver()), p(t).dispatch("post", [e, n]).fail(r.reject), r.promise }, d.prototype.nsend = d.prototype.nmcall = d.prototype.ninvoke = function(t) { var e = Q(arguments, 1),
                n = l(); return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise }, p.nodeify = q, d.prototype.nodeify = function(t) { return t ? (this.then(function(e) { H(function() { t(null, e) }) }, function(e) { H(function() { t(e) }) }), void 0) : this }; var ae = u(); return p }),
    function(t) { var e = "Promise" in t && "cast" in t.Promise && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && "spread" in t.Promise;
        e || (t.Promise = p.promise, t.Promise.all = p.all, t.Promise.timeout = p.timeout, p.stopUnhandledRejectionTracking()) }(t !== void 0 ? t : this); var l = { timeout: 3e3 };
    l.getGameConfig = function() { var t = p.defer(); return SpilGames(["JSLib"], function(e) { var n = e.get("current.game.integration.info");
            n ? t.resolve(n) : t.reject(Error("No data retrieved from JSLib")) }), t.promise.timeout(this.timeout) }, l.getBrandingConfig = function(t) { var e = p.defer(),
            n = "http://api.configar.org/cf/pb/1/configs",
            r = t.portal.siteId,
            i = t.portal.channelId,
            o = t.portal.applicationId; return SpilGames(["Net", "JSLib"], function(t, a) { t.send({ url: [n, i, r, o].join("/"), type: "GET", dataType: "JSON" }, function(t) { if (t && t.configar) e.resolve(t.configar);
                else { var n = {}; try { n = a.get("configar.data.cached") || n } catch (r) {}
                    e.reject(n) } }) }), e.promise.timeout(this.timeout) }; var f = {};
    f.argsToArray = function(t) { return t ? Array.prototype.slice.apply(t) : [] }, f.getRole = function() { var t = "function" == typeof window.SpilGames && window.SpilGamesBootstrap instanceof Array; return t ? "master" : "slave" }, f.isWrapped = function() { return void 0 !== (window.PhoneGap || window.cordova || window.Cordova) }, f.isArray = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) }, f._getQueryString = function() { return window.location.search }, f._getPortalHost = function() { return window && window.location && window.location.hostname ? window.location.hostname : "unknown" }, f.validateSchema = function(t, e) { for (var n in e)
            if (e.hasOwnProperty(n)) { if (!t.hasOwnProperty(n)) return { error: "Wrong argument passed: " + n }; if (t.hasOwnProperty(n)) { var r = "object" == typeof t[n] ? t[n].type : t[n]; if (e[n].constructor.name !== r) return { error: "Wrong value type for " + n + ": expected " + t[n] + ", got " + e[n].constructor.name }; var i = t[n] && t[n].values || []; if (-1 === i.indexOf(e[n])) return { error: "Wrong value for " + n + ": expected " + i.join(" or ") + ", got " + e[n] } } }
        return { error: !1 } }; var h = {};
    h.getGameConfig = function() { return l.getGameConfig().catch(function() { return h.getLocalConfig() }) }, h.getBrandingConfig = function(t) { return new Promise(function(e) { return l.getBrandingConfig(t).then(e, function(t) { e(t) }) }) }, h.getLocalConfig = function(t) { t = t && Object.keys(t).length ? t : { portal: {}, game: {}, branding: {} }; var e = { game: { applicationId: t.portal.applicationId || "0", contentarId: t.portal.contentarId || "0", info: t.game.info || {}, settings: t.game.objectSettings || {}, features: { achievements: t.game.achievements || !1, gameSidePanel: t.game.gameSidePanel || !1, highscores: t.game.highscores || !1, recommendedGames: t.game.recommendedGames || !1 } }, user: { authenticated: t.portal.authenticated || !1, username: t.portal.username || "" }, portal: { host: f._getPortalHost(), siteId: t.portal.siteId || 0, channelId: t.portal.channelId || 0, applicationId: t.portal.applicationId || "0" }, branding: t.branding || {} }; return e.branding.logo = e.branding.logo || {}, e.branding.logo.url = e.branding.logo.url || !1, e.branding.logo.image = e.branding.logo.image || !1, e }, h.getCachedConfig = function() {}, e.prototype.newTab = function(t) { var e = t.url,
            n = window.open(e, "_blank"); return n.focus(), n }, n.prototype.get = function(t) { return this.dataStore[t] ? this.dataStore[t] : { error: 'Property: "' + t + '" is not set' } }, n.prototype.set = function(t, e) { return this.dataStore[t] = e, this.dataStore[t] }, n.prototype._setCache = function(t) { this.dataStore = t }, n.prototype._getCache = function() { return this.dataStore }, r.prototype._setupEvents = function() { var t = this.messenger;
        this.isMaster ? (SpilGames(["JSLib"], function(e) { e.subscribe("ad.request.accepted", function(e) {!0 === e && (SpilGames("game.ad.accepted", !0), t._postMessage(!0, void 0, "ad.request.accepted")) }), e.subscribe("ad.complete", function() { t._postMessage("", "", "ad.complete") }) }), this.messenger.subscribe("game.ad.request", this._triggerAd, this)) : (this.messenger.subscribe("ad.request.accepted", this._onAdAccepted, this), this.messenger.subscribe("ad.complete", this._onAdCompleted, this)) }, r.prototype._triggerAd = function() { SpilGames("game.ad.request") }, r.prototype._runCallback = function(t) { this._callbacks[t] && (this._callbacks[t](), this._callbacks[t] = !1) }, r.prototype.request = function(t, e) { var n = this; if ("function" != typeof t) throw Error("pauseGame argument should be a function"); if ("function" != typeof e) throw Error("resumeGame argument should be a function"); if (!this.moduleReady) throw Error("This method cannot be called before the API is loaded");
        this._callbacks.pause = t, this._callbacks.resume = e, this.messenger._postMessage(void 0, void 0, "game.ad.request"), this.isMaster || this.messenger._postMessage(["log.gameapi.ad.requested", { origin: "slave" }, null], null, "log"), this.timeout = setTimeout(function() { n._requestTimeout() }, this.timeoutAfter) }, r.prototype._onAdAccepted = function(t) { var e = this.messenger;
        this.timeout && clearTimeout(this.timeout), !this.isMaster && t && (e._postMessage(["log.gameapi.ad.start", { origin: "slave" }, null], null, "log"), this._runCallback("pause")) }, r.prototype._onAdCompleted = function() { var t = this.messenger;
        this.isMaster || (t._postMessage(["log.gameapi.ad.complete", { origin: "slave" }, null], null, "log"), this._runCallback("resume")) }, r.prototype._requestTimeout = function() { this._onAdCompleted() }, i.prototype.init = function(t) { t = t || {}, this.data = t.data || this.data; var e = this.data && this.data.game && this.data.game.applicationId ? this.data.game.applicationId : null,
            n = new Date,
            r = window.location.hostname;
        (this.IS_SLAVE || f.isWrapped()) && this.startInternalTracking(e, n, r) }, i.prototype._createEventObject = function(t, e, n) { return { eventCategory: t, eventAction: e, properties: n } }, i.prototype._sendSETEvent = function(t, e, n) { return this.messenger && (this.IS_SLAVE || f.isWrapped()) && this.messenger.post("tracker.event." + t, e, n), e }, i.prototype.trackGamePlay = function(t) { if (!this.gamePlayTracking.started) return !1; var e = this.gamePlayTracking.gid,
            n = this.gamePlayTracking.timestamp,
            r = this.gamePlayTracking.host,
            i = this._createEventObject("game", "gameplay", { applicationId: e, start: n, host: r }); return this._sendSETEvent("express", i, t), i }, i.prototype.trackTimeInGame = function(t) { if (!this.timeInGameTracking.started) return !1; var e = this.timeInGameTracking.gid,
            n = this.timeInGameTracking.timestamp,
            r = this._createEventObject("game", "heartbeat", { applicationId: e, start: n }); return this._sendSETEvent("express", r, t), r }, i.prototype.startInternalTracking = function(t, e, n) { var r = this,
            i = 6e4,
            o = function(t) { if (!t) throw "Could not save the time in game" }; return this.moduleReady ? t ? (this.gamePlayTracking.gid = t, this.gamePlayTracking.timestamp = Date.parse(e), this.gamePlayTracking.host = n, this.gamePlayTracking.started = !0, this.timeInGameTracking.gid = t, this.timeInGameTracking.timestamp = Date.parse(e), this.timeInGameTracking.started = !0, this.trackGamePlay(function(t) { if (!t) throw "Could not save the game play" }), this.trackTimeInGame(o), setInterval(function() { r.trackTimeInGame(o) }, i), this.gamePlayTracking.started && this.timeInGameTracking.started) : { error: "No application ID defined for this game" } : { error: "This method cannot be called before the API is loaded" } }, o.prototype.init = function(t) { t = t || {}, this.data = t.data || this.data }, o.prototype.getLogo = function(t) { if (!this.moduleReady) return { error: "This method cannot be called before the API is loaded" }; var e = this.IS_MASTER ? "master" : "slave";
        this.messenger._postMessage(["log.branding.getlogo", { origin: e }, null], null, "log"); var n, r, i = { type: { type: "String", values: ["png"] }, width: "Number", height: "Number" }; return n = this._getLink("logo"), t && "object" == typeof t && (r = f.validateSchema(i, t), r.error && (n.error = r.error)), n }, o.prototype.getLink = function(t) { if (!t) return { error: "No link identifier provided" }; var e = this.listLinks(); if (-1 !== e.indexOf(t)) { var n = this.IS_MASTER ? "master" : "slave"; return this.messenger._postMessage(["log.branding.getlink", { origin: n, linkName: t }, null], null, "log"), this._getLink(t) } return { error: "Invalid option: '" + t + "'", action: function() {} } }, o.prototype._getLink = function(t) { if (!t) return { error: "No link identifier provided" }; var e = this.data && this.data.branding ? this.data.branding : {}; return e && e[t] ? { linkName: t, image: e[t].image || !1, action: this._executeHandler.bind(this, t) } : { error: "Invalid option: '" + t + "'", action: function() {} } }, o.prototype.getLinks = function() { var t = {},
            e = this.listLinks(); if (0 === e.length) t = { more_games: { action: function() {} } };
        else
            for (var n = 0; e.length > n; n++) { var r = e[n];
                t[r] = this._getLink(r) }
        return t }, o.prototype._executeHandler = function(t) { var e = this.data && this.data.branding ? this.data.branding : {},
            n = e[t],
            r = n.handler,
            i = this._tagUrl(n.url, t); if (n.url && n.url.length > 0 && r && this.components[r]) { var o = this.IS_MASTER ? "master" : "slave"; return this.messenger._postMessage(["log.branding.linkAction", { origin: o, linkName: t }, null], null, "log"), this.components[r]({ url: i }) } return function() {} }, o.prototype.listLinks = function() { var t = [],
            e = this.data && this.data.branding ? this.data.branding : {},
            n = Object.keys(e); return t = n.filter(function(t) { return !e[t].blacklisted }) }, o.prototype.getSplashScreen = function() { var t, e = this.IS_MASTER ? "master" : "slave"; if (this.data && this.data.branding && this.data.branding.splash_screen) { var n = !0;
            this.data.branding.splash_screen.image || this.data.branding.splash_screen.url || (n = !1), t = { show: n, action: this._getLink("splash_screen").action || function() {} } } else t = { show: !0, action: function() {} }; return this.messenger._postMessage(["log.branding.splashScreen", { origin: e }, null], null, "log"), t }, o.prototype._tagUrl = function(t, e) { var n, r, i, o = this.data && this.data.portal ? this.data.portal : {},
            a = this.data && this.data.game ? this.data.game : {},
            s = parseInt(o.siteId, 10); if ("string" != typeof t) throw Error("No url specified"); return n = "string" == typeof e ? e : "logo", r = "brandedgame_" + (s > 0 && 500 > s ? "internal" : "external"), i = ["utm_medium=" + r, "utm_campaign=" + a.applicationId, "utm_source=" + o.host, "utm_content=" + n].join("&"), t += t.indexOf("?") > -1 ? "&" : "?", t + i }, a.prototype.encode = function() { var t = ["gameapi", this.type, this.callbackId, this.data ? JSON.stringify(this.data) : ""].join("|"); return t }, u.prototype._postMessage = function(t, e, n) { var r, i;
        r = f.isArray(t) && "function" == typeof t[t.length - 1] ? this._callbacks.push(t.pop()) - 1 : e, i = new a({ type: n || "jslib", callbackId: r, data: t }).encode(), this._target.postMessage(i, "*") }, u.prototype._callJSLib = function() { SpilGames.apply(SpilGames, f.argsToArray(arguments)) }, u.prototype._setupEventListener = function() { window.addEventListener ? window.addEventListener("message", this._handleMessage.bind(this), !1) : window.attachEvent && window.attachEvent("onmessage", this._handleMessage.bind(this)) }, u.prototype._handleMessage = function(t) { var e, n, r, i, o = this,
            s = new a(t.data); return s && (e = s.type, n = s.callbackId, r = s.data, i = this._callbacks[n] || !1, this.IS_MASTER ? "jslib" === e ? ("Array" === r.constructor.name && r.push(function(t) { o._postMessage(t, n) }), this._callJSLib.apply(this, r)) : "ugapi" === e ? this._handleUGARequest(t) : this.publish(e, r) : this.IS_SLAVE && ("function" == typeof i ? (delete this._callbacks[n], i(r)) : "jslib" !== e && this.publish(e, r))), !1 }, u.prototype._handleUGARequest = function(t) { var e, n, r, i = this,
            o = new a(t.data); if (o) switch (e = o.data[0], n = o.callbackId, r = o.data[1] ? o.data[1] : null, e) {
            case "GameAPI.data":
                i._postMessage(this.dataStore._getCache(), n, "ugapi") } }, u.prototype.post = function() { var t = f.argsToArray(arguments); return this.IS_SLAVE ? this._postMessage(t) : this._callJSLib.apply(this, t), this }, u.prototype.publish = function(t, e) { return this._channels[t] && this._channels[t].forEach(function(t) { try { t.fn.call(t.ctx, e) } catch (n) {} }), this }, u.prototype.subscribe = function(t, e, n) { if ("function" != typeof e) throw Error("Callback has to be a function"); if ("string" != typeof t) throw Error("Channel name has to be a string"); return this._channels[t] || (this._channels[t] = []), this._channels[t].push({ fn: e, ctx: n }), this }, u.prototype.unsubscribe = function(t, e) { return this._channels[t] && "function" == typeof e && (this._channels[t] = this._channels[t].filter(function(t) { return t.fn !== e })), this }, u.prototype.subscribeOnce = function(t, e, n) {
        function r(n) { i.unsubscribe(t, r), e.call(this, n) } var i = this; return this.subscribe(t, r, n) }, u.prototype.requestFromParent = function(t, e, n) { if (!this.IS_SLAVE) throw "You are the parent, stop talking to yourself";
        e = e || {}, this._postMessage([t, e, n], null, "ugapi") }, c.prototype._setRole = function() { this.IS_MASTER = "master" === f.getRole(), this.IS_SLAVE = !this.IS_MASTER }, c.prototype._getTarget = function() { var t = document.getElementById("iframegame"),
            e = t && t.contentWindow ? t.contentWindow : window.parent; return this.IS_MASTER ? e : window.parent }, c.prototype.loadAPI = function(t) {
        function e(e) { return r.IS_MASTER && (e = n(e)), r.Branding.init({ data: e }), r.__.EventTracking.init({ data: e }), r.isReady = !0, r.__.messenger._postMessage(["log.gameapi.loadapi.finish", { origin: i, version: r.version }, null], null, "log"), t(r) }

        function n(t) { var e = t.game || {},
                n = t.user || {},
                r = t.portal || {},
                i = t.branding || {}; return h.getLocalConfig({ game: e, user: n, portal: r, branding: i }) } var r = this,
            i = this.IS_MASTER ? "master" : "slave"; return !0 === this.isReady ? (window.console && window.console.log && console.log("WARNING: Detected multiple executions of GameAPI.loadAPI(). This method should only be executed once per page load!"), t(r)) : (this.__.messenger._postMessage(["log.gameapi.loadapi.start", { origin: i, version: r.version }, null], null, "log"), this.IS_MASTER ? h.getGameConfig().then(function(t) { h.getBrandingConfig(t).then(function(i) { t && !t.isError && (t.branding = i.branding, r.__.dataStore._setCache(n(t))), e(t) }) }) : this.__.messenger.requestFromParent("GameAPI.data", {}, function(t) { e(t) }), void 0) }; var d = new c(n, u, o, i, r); "function" == typeof define && define.amd && define("GameAPI", d), t.GameAPI = d })(window);