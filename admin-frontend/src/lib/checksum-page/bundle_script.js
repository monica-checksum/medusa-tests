/*! For license information please see main.2fc077a1.js.LICENSE.txt */
!(function () {
  var e = {
      301: function (e) {
        e.exports = function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e)
          })
        }
      },
      763: function (e, t, n) {
        var r
        ;(e = n.nmd(e)),
          function () {
            var i,
              o = 200,
              a =
                "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
              s = "Expected a function",
              u = "Invalid `variable` option passed into `_.template`",
              c = "__lodash_hash_undefined__",
              l = 500,
              f = "__lodash_placeholder__",
              d = 1,
              h = 2,
              p = 4,
              v = 1,
              m = 2,
              g = 1,
              y = 2,
              b = 4,
              w = 8,
              S = 16,
              C = 32,
              I = 64,
              k = 128,
              x = 256,
              E = 512,
              A = 30,
              M = "...",
              T = 800,
              N = 16,
              _ = 1,
              R = 2,
              O = 1 / 0,
              D = 9007199254740991,
              L = 17976931348623157e292,
              F = NaN,
              V = 4294967295,
              B = V - 1,
              j = V >>> 1,
              P = [
                ["ary", k],
                ["bind", g],
                ["bindKey", y],
                ["curry", w],
                ["curryRight", S],
                ["flip", E],
                ["partial", C],
                ["partialRight", I],
                ["rearg", x],
              ],
              W = "[object Arguments]",
              U = "[object Array]",
              G = "[object AsyncFunction]",
              z = "[object Boolean]",
              Z = "[object Date]",
              q = "[object DOMException]",
              H = "[object Error]",
              Y = "[object Function]",
              Q = "[object GeneratorFunction]",
              K = "[object Map]",
              J = "[object Number]",
              X = "[object Null]",
              $ = "[object Object]",
              ee = "[object Promise]",
              te = "[object Proxy]",
              ne = "[object RegExp]",
              re = "[object Set]",
              ie = "[object String]",
              oe = "[object Symbol]",
              ae = "[object Undefined]",
              se = "[object WeakMap]",
              ue = "[object WeakSet]",
              ce = "[object ArrayBuffer]",
              le = "[object DataView]",
              fe = "[object Float32Array]",
              de = "[object Float64Array]",
              he = "[object Int8Array]",
              pe = "[object Int16Array]",
              ve = "[object Int32Array]",
              me = "[object Uint8Array]",
              ge = "[object Uint8ClampedArray]",
              ye = "[object Uint16Array]",
              be = "[object Uint32Array]",
              we = /\b__p \+= '';/g,
              Se = /\b(__p \+=) '' \+/g,
              Ce = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              Ie = /&(?:amp|lt|gt|quot|#39);/g,
              ke = /[&<>"']/g,
              xe = RegExp(Ie.source),
              Ee = RegExp(ke.source),
              Ae = /<%-([\s\S]+?)%>/g,
              Me = /<%([\s\S]+?)%>/g,
              Te = /<%=([\s\S]+?)%>/g,
              Ne = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              _e = /^\w*$/,
              Re = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              Oe = /[\\^$.*+?()[\]{}|]/g,
              De = RegExp(Oe.source),
              Le = /^\s+/,
              Fe = /\s/,
              Ve = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              Be = /\{\n\/\* \[wrapped with (.+)\] \*/,
              je = /,? & /,
              Pe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              We = /[()=,{}\[\]\/\s]/,
              Ue = /\\(\\)?/g,
              Ge = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              ze = /\w*$/,
              Ze = /^[-+]0x[0-9a-f]+$/i,
              qe = /^0b[01]+$/i,
              He = /^\[object .+?Constructor\]$/,
              Ye = /^0o[0-7]+$/i,
              Qe = /^(?:0|[1-9]\d*)$/,
              Ke = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              Je = /($^)/,
              Xe = /['\n\r\u2028\u2029\\]/g,
              $e = "\\ud800-\\udfff",
              et = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              tt = "\\u2700-\\u27bf",
              nt = "a-z\\xdf-\\xf6\\xf8-\\xff",
              rt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              it = "\\ufe0e\\ufe0f",
              ot =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              at = "['\u2019]",
              st = "[" + $e + "]",
              ut = "[" + ot + "]",
              ct = "[" + et + "]",
              lt = "\\d+",
              ft = "[" + tt + "]",
              dt = "[" + nt + "]",
              ht = "[^" + $e + ot + lt + tt + nt + rt + "]",
              pt = "\\ud83c[\\udffb-\\udfff]",
              vt = "[^" + $e + "]",
              mt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              gt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              yt = "[" + rt + "]",
              bt = "\\u200d",
              wt = "(?:" + dt + "|" + ht + ")",
              St = "(?:" + yt + "|" + ht + ")",
              Ct = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
              It = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
              kt = "(?:" + ct + "|" + pt + ")" + "?",
              xt = "[" + it + "]?",
              Et =
                xt +
                kt +
                ("(?:" +
                  bt +
                  "(?:" +
                  [vt, mt, gt].join("|") +
                  ")" +
                  xt +
                  kt +
                  ")*"),
              At = "(?:" + [ft, mt, gt].join("|") + ")" + Et,
              Mt = "(?:" + [vt + ct + "?", ct, mt, gt, st].join("|") + ")",
              Tt = RegExp(at, "g"),
              Nt = RegExp(ct, "g"),
              _t = RegExp(pt + "(?=" + pt + ")|" + Mt + Et, "g"),
              Rt = RegExp(
                [
                  yt +
                    "?" +
                    dt +
                    "+" +
                    Ct +
                    "(?=" +
                    [ut, yt, "$"].join("|") +
                    ")",
                  St + "+" + It + "(?=" + [ut, yt + wt, "$"].join("|") + ")",
                  yt + "?" + wt + "+" + Ct,
                  yt + "+" + It,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  lt,
                  At,
                ].join("|"),
                "g"
              ),
              Ot = RegExp("[" + bt + $e + et + it + "]"),
              Dt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              Lt = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              Ft = -1,
              Vt = {}
            ;(Vt[fe] = Vt[de] = Vt[he] = Vt[pe] = Vt[ve] = Vt[me] = Vt[ge] = Vt[
              ye
            ] = Vt[be] = !0),
              (Vt[W] = Vt[U] = Vt[ce] = Vt[z] = Vt[le] = Vt[Z] = Vt[H] = Vt[
                Y
              ] = Vt[K] = Vt[J] = Vt[$] = Vt[ne] = Vt[re] = Vt[ie] = Vt[
                se
              ] = !1)
            var Bt = {}
            ;(Bt[W] = Bt[U] = Bt[ce] = Bt[le] = Bt[z] = Bt[Z] = Bt[fe] = Bt[
              de
            ] = Bt[he] = Bt[pe] = Bt[ve] = Bt[K] = Bt[J] = Bt[$] = Bt[ne] = Bt[
              re
            ] = Bt[ie] = Bt[oe] = Bt[me] = Bt[ge] = Bt[ye] = Bt[be] = !0),
              (Bt[H] = Bt[Y] = Bt[se] = !1)
            var jt = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              Pt = parseFloat,
              Wt = parseInt,
              Ut =
                "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
              Gt =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              zt = Ut || Gt || Function("return this")(),
              Zt = t && !t.nodeType && t,
              qt = Zt && e && !e.nodeType && e,
              Ht = qt && qt.exports === Zt,
              Yt = Ht && Ut.process,
              Qt = (function () {
                try {
                  var e = qt && qt.require && qt.require("util").types
                  return e || (Yt && Yt.binding && Yt.binding("util"))
                } catch (t) {}
              })(),
              Kt = Qt && Qt.isArrayBuffer,
              Jt = Qt && Qt.isDate,
              Xt = Qt && Qt.isMap,
              $t = Qt && Qt.isRegExp,
              en = Qt && Qt.isSet,
              tn = Qt && Qt.isTypedArray
            function nn(e, t, n) {
              switch (n.length) {
                case 0:
                  return e.call(t)
                case 1:
                  return e.call(t, n[0])
                case 2:
                  return e.call(t, n[0], n[1])
                case 3:
                  return e.call(t, n[0], n[1], n[2])
              }
              return e.apply(t, n)
            }
            function rn(e, t, n, r) {
              for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                var a = e[i]
                t(r, a, n(a), e)
              }
              return r
            }
            function on(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length;
                ++n < r && !1 !== t(e[n], n, e);

              );
              return e
            }
            function an(e, t) {
              for (
                var n = null == e ? 0 : e.length;
                n-- && !1 !== t(e[n], n, e);

              );
              return e
            }
            function sn(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (!t(e[n], n, e)) return !1
              return !0
            }
            function un(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
                ++n < r;

              ) {
                var a = e[n]
                t(a, n, e) && (o[i++] = a)
              }
              return o
            }
            function cn(e, t) {
              return !!(null == e ? 0 : e.length) && bn(e, t, 0) > -1
            }
            function ln(e, t, n) {
              for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                if (n(t, e[r])) return !0
              return !1
            }
            function fn(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = Array(r);
                ++n < r;

              )
                i[n] = t(e[n], n, e)
              return i
            }
            function dn(e, t) {
              for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n]
              return e
            }
            function hn(e, t, n, r) {
              var i = -1,
                o = null == e ? 0 : e.length
              for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e)
              return n
            }
            function pn(e, t, n, r) {
              var i = null == e ? 0 : e.length
              for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e)
              return n
            }
            function vn(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e)) return !0
              return !1
            }
            var mn = In("length")
            function gn(e, t, n) {
              var r
              return (
                n(e, function (e, n, i) {
                  if (t(e, n, i)) return (r = n), !1
                }),
                r
              )
            }
            function yn(e, t, n, r) {
              for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (t(e[o], o, e)) return o
              return -1
            }
            function bn(e, t, n) {
              return t === t
                ? (function (e, t, n) {
                    var r = n - 1,
                      i = e.length
                    for (; ++r < i; ) if (e[r] === t) return r
                    return -1
                  })(e, t, n)
                : yn(e, Sn, n)
            }
            function wn(e, t, n, r) {
              for (var i = n - 1, o = e.length; ++i < o; )
                if (r(e[i], t)) return i
              return -1
            }
            function Sn(e) {
              return e !== e
            }
            function Cn(e, t) {
              var n = null == e ? 0 : e.length
              return n ? En(e, t) / n : F
            }
            function In(e) {
              return function (t) {
                return null == t ? i : t[e]
              }
            }
            function kn(e) {
              return function (t) {
                return null == e ? i : e[t]
              }
            }
            function xn(e, t, n, r, i) {
              return (
                i(e, function (e, i, o) {
                  n = r ? ((r = !1), e) : t(n, e, i, o)
                }),
                n
              )
            }
            function En(e, t) {
              for (var n, r = -1, o = e.length; ++r < o; ) {
                var a = t(e[r])
                a !== i && (n = n === i ? a : n + a)
              }
              return n
            }
            function An(e, t) {
              for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
              return r
            }
            function Mn(e) {
              return e ? e.slice(0, Zn(e) + 1).replace(Le, "") : e
            }
            function Tn(e) {
              return function (t) {
                return e(t)
              }
            }
            function Nn(e, t) {
              return fn(t, function (t) {
                return e[t]
              })
            }
            function _n(e, t) {
              return e.has(t)
            }
            function Rn(e, t) {
              for (var n = -1, r = e.length; ++n < r && bn(t, e[n], 0) > -1; );
              return n
            }
            function On(e, t) {
              for (var n = e.length; n-- && bn(t, e[n], 0) > -1; );
              return n
            }
            var Dn = kn({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              Ln = kn({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              })
            function Fn(e) {
              return "\\" + jt[e]
            }
            function Vn(e) {
              return Ot.test(e)
            }
            function Bn(e) {
              var t = -1,
                n = Array(e.size)
              return (
                e.forEach(function (e, r) {
                  n[++t] = [r, e]
                }),
                n
              )
            }
            function jn(e, t) {
              return function (n) {
                return e(t(n))
              }
            }
            function Pn(e, t) {
              for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                var a = e[n]
                ;(a !== t && a !== f) || ((e[n] = f), (o[i++] = n))
              }
              return o
            }
            function Wn(e) {
              var t = -1,
                n = Array(e.size)
              return (
                e.forEach(function (e) {
                  n[++t] = e
                }),
                n
              )
            }
            function Un(e) {
              var t = -1,
                n = Array(e.size)
              return (
                e.forEach(function (e) {
                  n[++t] = [e, e]
                }),
                n
              )
            }
            function Gn(e) {
              return Vn(e)
                ? (function (e) {
                    var t = (_t.lastIndex = 0)
                    for (; _t.test(e); ) ++t
                    return t
                  })(e)
                : mn(e)
            }
            function zn(e) {
              return Vn(e)
                ? (function (e) {
                    return e.match(_t) || []
                  })(e)
                : (function (e) {
                    return e.split("")
                  })(e)
            }
            function Zn(e) {
              for (var t = e.length; t-- && Fe.test(e.charAt(t)); );
              return t
            }
            var qn = kn({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            })
            var Hn = (function e(t) {
              var n = (t =
                  null == t ? zt : Hn.defaults(zt.Object(), t, Hn.pick(zt, Lt)))
                  .Array,
                r = t.Date,
                Fe = t.Error,
                $e = t.Function,
                et = t.Math,
                tt = t.Object,
                nt = t.RegExp,
                rt = t.String,
                it = t.TypeError,
                ot = n.prototype,
                at = $e.prototype,
                st = tt.prototype,
                ut = t["__core-js_shared__"],
                ct = at.toString,
                lt = st.hasOwnProperty,
                ft = 0,
                dt = (function () {
                  var e = /[^.]+$/.exec(
                    (ut && ut.keys && ut.keys.IE_PROTO) || ""
                  )
                  return e ? "Symbol(src)_1." + e : ""
                })(),
                ht = st.toString,
                pt = ct.call(tt),
                vt = zt._,
                mt = nt(
                  "^" +
                    ct
                      .call(lt)
                      .replace(Oe, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                gt = Ht ? t.Buffer : i,
                yt = t.Symbol,
                bt = t.Uint8Array,
                wt = gt ? gt.allocUnsafe : i,
                St = jn(tt.getPrototypeOf, tt),
                Ct = tt.create,
                It = st.propertyIsEnumerable,
                kt = ot.splice,
                xt = yt ? yt.isConcatSpreadable : i,
                Et = yt ? yt.iterator : i,
                At = yt ? yt.toStringTag : i,
                Mt = (function () {
                  try {
                    var e = Wo(tt, "defineProperty")
                    return e({}, "", {}), e
                  } catch (t) {}
                })(),
                _t = t.clearTimeout !== zt.clearTimeout && t.clearTimeout,
                Ot = r && r.now !== zt.Date.now && r.now,
                jt = t.setTimeout !== zt.setTimeout && t.setTimeout,
                Ut = et.ceil,
                Gt = et.floor,
                Zt = tt.getOwnPropertySymbols,
                qt = gt ? gt.isBuffer : i,
                Yt = t.isFinite,
                Qt = ot.join,
                mn = jn(tt.keys, tt),
                kn = et.max,
                Yn = et.min,
                Qn = r.now,
                Kn = t.parseInt,
                Jn = et.random,
                Xn = ot.reverse,
                $n = Wo(t, "DataView"),
                er = Wo(t, "Map"),
                tr = Wo(t, "Promise"),
                nr = Wo(t, "Set"),
                rr = Wo(t, "WeakMap"),
                ir = Wo(tt, "create"),
                or = rr && new rr(),
                ar = {},
                sr = ha($n),
                ur = ha(er),
                cr = ha(tr),
                lr = ha(nr),
                fr = ha(rr),
                dr = yt ? yt.prototype : i,
                hr = dr ? dr.valueOf : i,
                pr = dr ? dr.toString : i
              function vr(e) {
                if (Ns(e) && !bs(e) && !(e instanceof br)) {
                  if (e instanceof yr) return e
                  if (lt.call(e, "__wrapped__")) return pa(e)
                }
                return new yr(e)
              }
              var mr = (function () {
                function e() {}
                return function (t) {
                  if (!Ts(t)) return {}
                  if (Ct) return Ct(t)
                  e.prototype = t
                  var n = new e()
                  return (e.prototype = i), n
                }
              })()
              function gr() {}
              function yr(e, t) {
                ;(this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = i)
              }
              function br(e) {
                ;(this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = V),
                  (this.__views__ = [])
              }
              function wr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length
                for (this.clear(); ++t < n; ) {
                  var r = e[t]
                  this.set(r[0], r[1])
                }
              }
              function Sr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length
                for (this.clear(); ++t < n; ) {
                  var r = e[t]
                  this.set(r[0], r[1])
                }
              }
              function Cr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length
                for (this.clear(); ++t < n; ) {
                  var r = e[t]
                  this.set(r[0], r[1])
                }
              }
              function Ir(e) {
                var t = -1,
                  n = null == e ? 0 : e.length
                for (this.__data__ = new Cr(); ++t < n; ) this.add(e[t])
              }
              function kr(e) {
                var t = (this.__data__ = new Sr(e))
                this.size = t.size
              }
              function xr(e, t) {
                var n = bs(e),
                  r = !n && ys(e),
                  i = !n && !r && Is(e),
                  o = !n && !r && !i && Bs(e),
                  a = n || r || i || o,
                  s = a ? An(e.length, rt) : [],
                  u = s.length
                for (var c in e)
                  (!t && !lt.call(e, c)) ||
                    (a &&
                      ("length" == c ||
                        (i && ("offset" == c || "parent" == c)) ||
                        (o &&
                          ("buffer" == c ||
                            "byteLength" == c ||
                            "byteOffset" == c)) ||
                        Yo(c, u))) ||
                    s.push(c)
                return s
              }
              function Er(e) {
                var t = e.length
                return t ? e[Ii(0, t - 1)] : i
              }
              function Ar(e, t) {
                return la(io(e), Fr(t, 0, e.length))
              }
              function Mr(e) {
                return la(io(e))
              }
              function Tr(e, t, n) {
                ;((n !== i && !vs(e[t], n)) || (n === i && !(t in e))) &&
                  Dr(e, t, n)
              }
              function Nr(e, t, n) {
                var r = e[t]
                ;(lt.call(e, t) && vs(r, n) && (n !== i || t in e)) ||
                  Dr(e, t, n)
              }
              function _r(e, t) {
                for (var n = e.length; n--; ) if (vs(e[n][0], t)) return n
                return -1
              }
              function Rr(e, t, n, r) {
                return (
                  Wr(e, function (e, i, o) {
                    t(r, e, n(e), o)
                  }),
                  r
                )
              }
              function Or(e, t) {
                return e && oo(t, au(t), e)
              }
              function Dr(e, t, n) {
                "__proto__" == t && Mt
                  ? Mt(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (e[t] = n)
              }
              function Lr(e, t) {
                for (
                  var r = -1, o = t.length, a = n(o), s = null == e;
                  ++r < o;

                )
                  a[r] = s ? i : tu(e, t[r])
                return a
              }
              function Fr(e, t, n) {
                return (
                  e === e &&
                    (n !== i && (e = e <= n ? e : n),
                    t !== i && (e = e >= t ? e : t)),
                  e
                )
              }
              function Vr(e, t, n, r, o, a) {
                var s,
                  u = t & d,
                  c = t & h,
                  l = t & p
                if ((n && (s = o ? n(e, r, o, a) : n(e)), s !== i)) return s
                if (!Ts(e)) return e
                var f = bs(e)
                if (f) {
                  if (
                    ((s = (function (e) {
                      var t = e.length,
                        n = new e.constructor(t)
                      t &&
                        "string" == typeof e[0] &&
                        lt.call(e, "index") &&
                        ((n.index = e.index), (n.input = e.input))
                      return n
                    })(e)),
                    !u)
                  )
                    return io(e, s)
                } else {
                  var v = zo(e),
                    m = v == Y || v == Q
                  if (Is(e)) return Xi(e, u)
                  if (v == $ || v == W || (m && !o)) {
                    if (((s = c || m ? {} : qo(e)), !u))
                      return c
                        ? (function (e, t) {
                            return oo(e, Go(e), t)
                          })(
                            e,
                            (function (e, t) {
                              return e && oo(t, su(t), e)
                            })(s, e)
                          )
                        : (function (e, t) {
                            return oo(e, Uo(e), t)
                          })(e, Or(s, e))
                  } else {
                    if (!Bt[v]) return o ? e : {}
                    s = (function (e, t, n) {
                      var r = e.constructor
                      switch (t) {
                        case ce:
                          return $i(e)
                        case z:
                        case Z:
                          return new r(+e)
                        case le:
                          return (function (e, t) {
                            var n = t ? $i(e.buffer) : e.buffer
                            return new e.constructor(
                              n,
                              e.byteOffset,
                              e.byteLength
                            )
                          })(e, n)
                        case fe:
                        case de:
                        case he:
                        case pe:
                        case ve:
                        case me:
                        case ge:
                        case ye:
                        case be:
                          return eo(e, n)
                        case K:
                          return new r()
                        case J:
                        case ie:
                          return new r(e)
                        case ne:
                          return (function (e) {
                            var t = new e.constructor(e.source, ze.exec(e))
                            return (t.lastIndex = e.lastIndex), t
                          })(e)
                        case re:
                          return new r()
                        case oe:
                          return (i = e), hr ? tt(hr.call(i)) : {}
                      }
                      var i
                    })(e, v, u)
                  }
                }
                a || (a = new kr())
                var g = a.get(e)
                if (g) return g
                a.set(e, s),
                  Ls(e)
                    ? e.forEach(function (r) {
                        s.add(Vr(r, t, n, r, e, a))
                      })
                    : _s(e) &&
                      e.forEach(function (r, i) {
                        s.set(i, Vr(r, t, n, i, e, a))
                      })
                var y = f ? i : (l ? (c ? Do : Oo) : c ? su : au)(e)
                return (
                  on(y || e, function (r, i) {
                    y && (r = e[(i = r)]), Nr(s, i, Vr(r, t, n, i, e, a))
                  }),
                  s
                )
              }
              function Br(e, t, n) {
                var r = n.length
                if (null == e) return !r
                for (e = tt(e); r--; ) {
                  var o = n[r],
                    a = t[o],
                    s = e[o]
                  if ((s === i && !(o in e)) || !a(s)) return !1
                }
                return !0
              }
              function jr(e, t, n) {
                if ("function" != typeof e) throw new it(s)
                return aa(function () {
                  e.apply(i, n)
                }, t)
              }
              function Pr(e, t, n, r) {
                var i = -1,
                  a = cn,
                  s = !0,
                  u = e.length,
                  c = [],
                  l = t.length
                if (!u) return c
                n && (t = fn(t, Tn(n))),
                  r
                    ? ((a = ln), (s = !1))
                    : t.length >= o && ((a = _n), (s = !1), (t = new Ir(t)))
                e: for (; ++i < u; ) {
                  var f = e[i],
                    d = null == n ? f : n(f)
                  if (((f = r || 0 !== f ? f : 0), s && d === d)) {
                    for (var h = l; h--; ) if (t[h] === d) continue e
                    c.push(f)
                  } else a(t, d, r) || c.push(f)
                }
                return c
              }
              ;(vr.templateSettings = {
                escape: Ae,
                evaluate: Me,
                interpolate: Te,
                variable: "",
                imports: { _: vr },
              }),
                (vr.prototype = gr.prototype),
                (vr.prototype.constructor = vr),
                (yr.prototype = mr(gr.prototype)),
                (yr.prototype.constructor = yr),
                (br.prototype = mr(gr.prototype)),
                (br.prototype.constructor = br),
                (wr.prototype.clear = function () {
                  ;(this.__data__ = ir ? ir(null) : {}), (this.size = 0)
                }),
                (wr.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e]
                  return (this.size -= t ? 1 : 0), t
                }),
                (wr.prototype.get = function (e) {
                  var t = this.__data__
                  if (ir) {
                    var n = t[e]
                    return n === c ? i : n
                  }
                  return lt.call(t, e) ? t[e] : i
                }),
                (wr.prototype.has = function (e) {
                  var t = this.__data__
                  return ir ? t[e] !== i : lt.call(t, e)
                }),
                (wr.prototype.set = function (e, t) {
                  var n = this.__data__
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (n[e] = ir && t === i ? c : t),
                    this
                  )
                }),
                (Sr.prototype.clear = function () {
                  ;(this.__data__ = []), (this.size = 0)
                }),
                (Sr.prototype.delete = function (e) {
                  var t = this.__data__,
                    n = _r(t, e)
                  return (
                    !(n < 0) &&
                    (n == t.length - 1 ? t.pop() : kt.call(t, n, 1),
                    --this.size,
                    !0)
                  )
                }),
                (Sr.prototype.get = function (e) {
                  var t = this.__data__,
                    n = _r(t, e)
                  return n < 0 ? i : t[n][1]
                }),
                (Sr.prototype.has = function (e) {
                  return _r(this.__data__, e) > -1
                }),
                (Sr.prototype.set = function (e, t) {
                  var n = this.__data__,
                    r = _r(n, e)
                  return (
                    r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                  )
                }),
                (Cr.prototype.clear = function () {
                  ;(this.size = 0),
                    (this.__data__ = {
                      hash: new wr(),
                      map: new (er || Sr)(),
                      string: new wr(),
                    })
                }),
                (Cr.prototype.delete = function (e) {
                  var t = jo(this, e).delete(e)
                  return (this.size -= t ? 1 : 0), t
                }),
                (Cr.prototype.get = function (e) {
                  return jo(this, e).get(e)
                }),
                (Cr.prototype.has = function (e) {
                  return jo(this, e).has(e)
                }),
                (Cr.prototype.set = function (e, t) {
                  var n = jo(this, e),
                    r = n.size
                  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
                }),
                (Ir.prototype.add = Ir.prototype.push = function (e) {
                  return this.__data__.set(e, c), this
                }),
                (Ir.prototype.has = function (e) {
                  return this.__data__.has(e)
                }),
                (kr.prototype.clear = function () {
                  ;(this.__data__ = new Sr()), (this.size = 0)
                }),
                (kr.prototype.delete = function (e) {
                  var t = this.__data__,
                    n = t.delete(e)
                  return (this.size = t.size), n
                }),
                (kr.prototype.get = function (e) {
                  return this.__data__.get(e)
                }),
                (kr.prototype.has = function (e) {
                  return this.__data__.has(e)
                }),
                (kr.prototype.set = function (e, t) {
                  var n = this.__data__
                  if (n instanceof Sr) {
                    var r = n.__data__
                    if (!er || r.length < o - 1)
                      return r.push([e, t]), (this.size = ++n.size), this
                    n = this.__data__ = new Cr(r)
                  }
                  return n.set(e, t), (this.size = n.size), this
                })
              var Wr = uo(Qr),
                Ur = uo(Kr, !0)
              function Gr(e, t) {
                var n = !0
                return (
                  Wr(e, function (e, r, i) {
                    return (n = !!t(e, r, i))
                  }),
                  n
                )
              }
              function zr(e, t, n) {
                for (var r = -1, o = e.length; ++r < o; ) {
                  var a = e[r],
                    s = t(a)
                  if (null != s && (u === i ? s === s && !Vs(s) : n(s, u)))
                    var u = s,
                      c = a
                }
                return c
              }
              function Zr(e, t) {
                var n = []
                return (
                  Wr(e, function (e, r, i) {
                    t(e, r, i) && n.push(e)
                  }),
                  n
                )
              }
              function qr(e, t, n, r, i) {
                var o = -1,
                  a = e.length
                for (n || (n = Ho), i || (i = []); ++o < a; ) {
                  var s = e[o]
                  t > 0 && n(s)
                    ? t > 1
                      ? qr(s, t - 1, n, r, i)
                      : dn(i, s)
                    : r || (i[i.length] = s)
                }
                return i
              }
              var Hr = co(),
                Yr = co(!0)
              function Qr(e, t) {
                return e && Hr(e, t, au)
              }
              function Kr(e, t) {
                return e && Yr(e, t, au)
              }
              function Jr(e, t) {
                return un(t, function (t) {
                  return Es(e[t])
                })
              }
              function Xr(e, t) {
                for (var n = 0, r = (t = Yi(t, e)).length; null != e && n < r; )
                  e = e[da(t[n++])]
                return n && n == r ? e : i
              }
              function $r(e, t, n) {
                var r = t(e)
                return bs(e) ? r : dn(r, n(e))
              }
              function ei(e) {
                return null == e
                  ? e === i
                    ? ae
                    : X
                  : At && At in tt(e)
                  ? (function (e) {
                      var t = lt.call(e, At),
                        n = e[At]
                      try {
                        e[At] = i
                        var r = !0
                      } catch (a) {}
                      var o = ht.call(e)
                      r && (t ? (e[At] = n) : delete e[At])
                      return o
                    })(e)
                  : (function (e) {
                      return ht.call(e)
                    })(e)
              }
              function ti(e, t) {
                return e > t
              }
              function ni(e, t) {
                return null != e && lt.call(e, t)
              }
              function ri(e, t) {
                return null != e && t in tt(e)
              }
              function ii(e, t, r) {
                for (
                  var o = r ? ln : cn,
                    a = e[0].length,
                    s = e.length,
                    u = s,
                    c = n(s),
                    l = 1 / 0,
                    f = [];
                  u--;

                ) {
                  var d = e[u]
                  u && t && (d = fn(d, Tn(t))),
                    (l = Yn(d.length, l)),
                    (c[u] =
                      !r && (t || (a >= 120 && d.length >= 120))
                        ? new Ir(u && d)
                        : i)
                }
                d = e[0]
                var h = -1,
                  p = c[0]
                e: for (; ++h < a && f.length < l; ) {
                  var v = d[h],
                    m = t ? t(v) : v
                  if (
                    ((v = r || 0 !== v ? v : 0), !(p ? _n(p, m) : o(f, m, r)))
                  ) {
                    for (u = s; --u; ) {
                      var g = c[u]
                      if (!(g ? _n(g, m) : o(e[u], m, r))) continue e
                    }
                    p && p.push(m), f.push(v)
                  }
                }
                return f
              }
              function oi(e, t, n) {
                var r = null == (e = ra(e, (t = Yi(t, e)))) ? e : e[da(xa(t))]
                return null == r ? i : nn(r, e, n)
              }
              function ai(e) {
                return Ns(e) && ei(e) == W
              }
              function si(e, t, n, r, o) {
                return (
                  e === t ||
                  (null == e || null == t || (!Ns(e) && !Ns(t))
                    ? e !== e && t !== t
                    : (function (e, t, n, r, o, a) {
                        var s = bs(e),
                          u = bs(t),
                          c = s ? U : zo(e),
                          l = u ? U : zo(t),
                          f = (c = c == W ? $ : c) == $,
                          d = (l = l == W ? $ : l) == $,
                          h = c == l
                        if (h && Is(e)) {
                          if (!Is(t)) return !1
                          ;(s = !0), (f = !1)
                        }
                        if (h && !f)
                          return (
                            a || (a = new kr()),
                            s || Bs(e)
                              ? _o(e, t, n, r, o, a)
                              : (function (e, t, n, r, i, o, a) {
                                  switch (n) {
                                    case le:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        return !1
                                      ;(e = e.buffer), (t = t.buffer)
                                    case ce:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !o(new bt(e), new bt(t))
                                      )
                                    case z:
                                    case Z:
                                    case J:
                                      return vs(+e, +t)
                                    case H:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      )
                                    case ne:
                                    case ie:
                                      return e == t + ""
                                    case K:
                                      var s = Bn
                                    case re:
                                      var u = r & v
                                      if (
                                        (s || (s = Wn), e.size != t.size && !u)
                                      )
                                        return !1
                                      var c = a.get(e)
                                      if (c) return c == t
                                      ;(r |= m), a.set(e, t)
                                      var l = _o(s(e), s(t), r, i, o, a)
                                      return a.delete(e), l
                                    case oe:
                                      if (hr) return hr.call(e) == hr.call(t)
                                  }
                                  return !1
                                })(e, t, c, n, r, o, a)
                          )
                        if (!(n & v)) {
                          var p = f && lt.call(e, "__wrapped__"),
                            g = d && lt.call(t, "__wrapped__")
                          if (p || g) {
                            var y = p ? e.value() : e,
                              b = g ? t.value() : t
                            return a || (a = new kr()), o(y, b, n, r, a)
                          }
                        }
                        if (!h) return !1
                        return (
                          a || (a = new kr()),
                          (function (e, t, n, r, o, a) {
                            var s = n & v,
                              u = Oo(e),
                              c = u.length,
                              l = Oo(t),
                              f = l.length
                            if (c != f && !s) return !1
                            var d = c
                            for (; d--; ) {
                              var h = u[d]
                              if (!(s ? h in t : lt.call(t, h))) return !1
                            }
                            var p = a.get(e),
                              m = a.get(t)
                            if (p && m) return p == t && m == e
                            var g = !0
                            a.set(e, t), a.set(t, e)
                            var y = s
                            for (; ++d < c; ) {
                              var b = e[(h = u[d])],
                                w = t[h]
                              if (r)
                                var S = s
                                  ? r(w, b, h, t, e, a)
                                  : r(b, w, h, e, t, a)
                              if (
                                !(S === i ? b === w || o(b, w, n, r, a) : S)
                              ) {
                                g = !1
                                break
                              }
                              y || (y = "constructor" == h)
                            }
                            if (g && !y) {
                              var C = e.constructor,
                                I = t.constructor
                              C == I ||
                                !("constructor" in e) ||
                                !("constructor" in t) ||
                                ("function" == typeof C &&
                                  C instanceof C &&
                                  "function" == typeof I &&
                                  I instanceof I) ||
                                (g = !1)
                            }
                            return a.delete(e), a.delete(t), g
                          })(e, t, n, r, o, a)
                        )
                      })(e, t, n, r, si, o))
                )
              }
              function ui(e, t, n, r) {
                var o = n.length,
                  a = o,
                  s = !r
                if (null == e) return !a
                for (e = tt(e); o--; ) {
                  var u = n[o]
                  if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                }
                for (; ++o < a; ) {
                  var c = (u = n[o])[0],
                    l = e[c],
                    f = u[1]
                  if (s && u[2]) {
                    if (l === i && !(c in e)) return !1
                  } else {
                    var d = new kr()
                    if (r) var h = r(l, f, c, e, t, d)
                    if (!(h === i ? si(f, l, v | m, r, d) : h)) return !1
                  }
                }
                return !0
              }
              function ci(e) {
                return (
                  !(!Ts(e) || ((t = e), dt && dt in t)) &&
                  (Es(e) ? mt : He).test(ha(e))
                )
                var t
              }
              function li(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? Ru
                  : "object" == typeof e
                  ? bs(e)
                    ? mi(e[0], e[1])
                    : vi(e)
                  : Wu(e)
              }
              function fi(e) {
                if (!$o(e)) return mn(e)
                var t = []
                for (var n in tt(e))
                  lt.call(e, n) && "constructor" != n && t.push(n)
                return t
              }
              function di(e) {
                if (!Ts(e))
                  return (function (e) {
                    var t = []
                    if (null != e) for (var n in tt(e)) t.push(n)
                    return t
                  })(e)
                var t = $o(e),
                  n = []
                for (var r in e)
                  ("constructor" != r || (!t && lt.call(e, r))) && n.push(r)
                return n
              }
              function hi(e, t) {
                return e < t
              }
              function pi(e, t) {
                var r = -1,
                  i = Ss(e) ? n(e.length) : []
                return (
                  Wr(e, function (e, n, o) {
                    i[++r] = t(e, n, o)
                  }),
                  i
                )
              }
              function vi(e) {
                var t = Po(e)
                return 1 == t.length && t[0][2]
                  ? ta(t[0][0], t[0][1])
                  : function (n) {
                      return n === e || ui(n, e, t)
                    }
              }
              function mi(e, t) {
                return Ko(e) && ea(t)
                  ? ta(da(e), t)
                  : function (n) {
                      var r = tu(n, e)
                      return r === i && r === t ? nu(n, e) : si(t, r, v | m)
                    }
              }
              function gi(e, t, n, r, o) {
                e !== t &&
                  Hr(
                    t,
                    function (a, s) {
                      if ((o || (o = new kr()), Ts(a)))
                        !(function (e, t, n, r, o, a, s) {
                          var u = ia(e, n),
                            c = ia(t, n),
                            l = s.get(c)
                          if (l) return void Tr(e, n, l)
                          var f = a ? a(u, c, n + "", e, t, s) : i,
                            d = f === i
                          if (d) {
                            var h = bs(c),
                              p = !h && Is(c),
                              v = !h && !p && Bs(c)
                            ;(f = c),
                              h || p || v
                                ? bs(u)
                                  ? (f = u)
                                  : Cs(u)
                                  ? (f = io(u))
                                  : p
                                  ? ((d = !1), (f = Xi(c, !0)))
                                  : v
                                  ? ((d = !1), (f = eo(c, !0)))
                                  : (f = [])
                                : Os(c) || ys(c)
                                ? ((f = u),
                                  ys(u)
                                    ? (f = qs(u))
                                    : (Ts(u) && !Es(u)) || (f = qo(c)))
                                : (d = !1)
                          }
                          d && (s.set(c, f), o(f, c, r, a, s), s.delete(c))
                          Tr(e, n, f)
                        })(e, t, s, n, gi, r, o)
                      else {
                        var u = r ? r(ia(e, s), a, s + "", e, t, o) : i
                        u === i && (u = a), Tr(e, s, u)
                      }
                    },
                    su
                  )
              }
              function yi(e, t) {
                var n = e.length
                if (n) return Yo((t += t < 0 ? n : 0), n) ? e[t] : i
              }
              function bi(e, t, n) {
                t = t.length
                  ? fn(t, function (e) {
                      return bs(e)
                        ? function (t) {
                            return Xr(t, 1 === e.length ? e[0] : e)
                          }
                        : e
                    })
                  : [Ru]
                var r = -1
                t = fn(t, Tn(Bo()))
                var i = pi(e, function (e, n, i) {
                  var o = fn(t, function (t) {
                    return t(e)
                  })
                  return { criteria: o, index: ++r, value: e }
                })
                return (function (e, t) {
                  var n = e.length
                  for (e.sort(t); n--; ) e[n] = e[n].value
                  return e
                })(i, function (e, t) {
                  return (function (e, t, n) {
                    var r = -1,
                      i = e.criteria,
                      o = t.criteria,
                      a = i.length,
                      s = n.length
                    for (; ++r < a; ) {
                      var u = to(i[r], o[r])
                      if (u) return r >= s ? u : u * ("desc" == n[r] ? -1 : 1)
                    }
                    return e.index - t.index
                  })(e, t, n)
                })
              }
              function wi(e, t, n) {
                for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                  var a = t[r],
                    s = Xr(e, a)
                  n(s, a) && Mi(o, Yi(a, e), s)
                }
                return o
              }
              function Si(e, t, n, r) {
                var i = r ? wn : bn,
                  o = -1,
                  a = t.length,
                  s = e
                for (e === t && (t = io(t)), n && (s = fn(e, Tn(n))); ++o < a; )
                  for (
                    var u = 0, c = t[o], l = n ? n(c) : c;
                    (u = i(s, l, u, r)) > -1;

                  )
                    s !== e && kt.call(s, u, 1), kt.call(e, u, 1)
                return e
              }
              function Ci(e, t) {
                for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                  var i = t[n]
                  if (n == r || i !== o) {
                    var o = i
                    Yo(i) ? kt.call(e, i, 1) : Pi(e, i)
                  }
                }
                return e
              }
              function Ii(e, t) {
                return e + Gt(Jn() * (t - e + 1))
              }
              function ki(e, t) {
                var n = ""
                if (!e || t < 1 || t > D) return n
                do {
                  t % 2 && (n += e), (t = Gt(t / 2)) && (e += e)
                } while (t)
                return n
              }
              function xi(e, t) {
                return sa(na(e, t, Ru), e + "")
              }
              function Ei(e) {
                return Er(vu(e))
              }
              function Ai(e, t) {
                var n = vu(e)
                return la(n, Fr(t, 0, n.length))
              }
              function Mi(e, t, n, r) {
                if (!Ts(e)) return e
                for (
                  var o = -1, a = (t = Yi(t, e)).length, s = a - 1, u = e;
                  null != u && ++o < a;

                ) {
                  var c = da(t[o]),
                    l = n
                  if (
                    "__proto__" === c ||
                    "constructor" === c ||
                    "prototype" === c
                  )
                    return e
                  if (o != s) {
                    var f = u[c]
                    ;(l = r ? r(f, c, u) : i) === i &&
                      (l = Ts(f) ? f : Yo(t[o + 1]) ? [] : {})
                  }
                  Nr(u, c, l), (u = u[c])
                }
                return e
              }
              var Ti = or
                  ? function (e, t) {
                      return or.set(e, t), e
                    }
                  : Ru,
                Ni = Mt
                  ? function (e, t) {
                      return Mt(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Tu(t),
                        writable: !0,
                      })
                    }
                  : Ru
              function _i(e) {
                return la(vu(e))
              }
              function Ri(e, t, r) {
                var i = -1,
                  o = e.length
                t < 0 && (t = -t > o ? 0 : o + t),
                  (r = r > o ? o : r) < 0 && (r += o),
                  (o = t > r ? 0 : (r - t) >>> 0),
                  (t >>>= 0)
                for (var a = n(o); ++i < o; ) a[i] = e[i + t]
                return a
              }
              function Oi(e, t) {
                var n
                return (
                  Wr(e, function (e, r, i) {
                    return !(n = t(e, r, i))
                  }),
                  !!n
                )
              }
              function Di(e, t, n) {
                var r = 0,
                  i = null == e ? r : e.length
                if ("number" == typeof t && t === t && i <= j) {
                  for (; r < i; ) {
                    var o = (r + i) >>> 1,
                      a = e[o]
                    null !== a && !Vs(a) && (n ? a <= t : a < t)
                      ? (r = o + 1)
                      : (i = o)
                  }
                  return i
                }
                return Li(e, t, Ru, n)
              }
              function Li(e, t, n, r) {
                var o = 0,
                  a = null == e ? 0 : e.length
                if (0 === a) return 0
                for (
                  var s = (t = n(t)) !== t,
                    u = null === t,
                    c = Vs(t),
                    l = t === i;
                  o < a;

                ) {
                  var f = Gt((o + a) / 2),
                    d = n(e[f]),
                    h = d !== i,
                    p = null === d,
                    v = d === d,
                    m = Vs(d)
                  if (s) var g = r || v
                  else
                    g = l
                      ? v && (r || h)
                      : u
                      ? v && h && (r || !p)
                      : c
                      ? v && h && !p && (r || !m)
                      : !p && !m && (r ? d <= t : d < t)
                  g ? (o = f + 1) : (a = f)
                }
                return Yn(a, B)
              }
              function Fi(e, t) {
                for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                  var a = e[n],
                    s = t ? t(a) : a
                  if (!n || !vs(s, u)) {
                    var u = s
                    o[i++] = 0 === a ? 0 : a
                  }
                }
                return o
              }
              function Vi(e) {
                return "number" == typeof e ? e : Vs(e) ? F : +e
              }
              function Bi(e) {
                if ("string" == typeof e) return e
                if (bs(e)) return fn(e, Bi) + ""
                if (Vs(e)) return pr ? pr.call(e) : ""
                var t = e + ""
                return "0" == t && 1 / e == -O ? "-0" : t
              }
              function ji(e, t, n) {
                var r = -1,
                  i = cn,
                  a = e.length,
                  s = !0,
                  u = [],
                  c = u
                if (n) (s = !1), (i = ln)
                else if (a >= o) {
                  var l = t ? null : xo(e)
                  if (l) return Wn(l)
                  ;(s = !1), (i = _n), (c = new Ir())
                } else c = t ? [] : u
                e: for (; ++r < a; ) {
                  var f = e[r],
                    d = t ? t(f) : f
                  if (((f = n || 0 !== f ? f : 0), s && d === d)) {
                    for (var h = c.length; h--; ) if (c[h] === d) continue e
                    t && c.push(d), u.push(f)
                  } else i(c, d, n) || (c !== u && c.push(d), u.push(f))
                }
                return u
              }
              function Pi(e, t) {
                return (
                  null == (e = ra(e, (t = Yi(t, e)))) || delete e[da(xa(t))]
                )
              }
              function Wi(e, t, n, r) {
                return Mi(e, t, n(Xr(e, t)), r)
              }
              function Ui(e, t, n, r) {
                for (
                  var i = e.length, o = r ? i : -1;
                  (r ? o-- : ++o < i) && t(e[o], o, e);

                );
                return n
                  ? Ri(e, r ? 0 : o, r ? o + 1 : i)
                  : Ri(e, r ? o + 1 : 0, r ? i : o)
              }
              function Gi(e, t) {
                var n = e
                return (
                  n instanceof br && (n = n.value()),
                  hn(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, dn([e], t.args))
                    },
                    n
                  )
                )
              }
              function zi(e, t, r) {
                var i = e.length
                if (i < 2) return i ? ji(e[0]) : []
                for (var o = -1, a = n(i); ++o < i; )
                  for (var s = e[o], u = -1; ++u < i; )
                    u != o && (a[o] = Pr(a[o] || s, e[u], t, r))
                return ji(qr(a, 1), t, r)
              }
              function Zi(e, t, n) {
                for (
                  var r = -1, o = e.length, a = t.length, s = {};
                  ++r < o;

                ) {
                  var u = r < a ? t[r] : i
                  n(s, e[r], u)
                }
                return s
              }
              function qi(e) {
                return Cs(e) ? e : []
              }
              function Hi(e) {
                return "function" == typeof e ? e : Ru
              }
              function Yi(e, t) {
                return bs(e) ? e : Ko(e, t) ? [e] : fa(Hs(e))
              }
              var Qi = xi
              function Ki(e, t, n) {
                var r = e.length
                return (n = n === i ? r : n), !t && n >= r ? e : Ri(e, t, n)
              }
              var Ji =
                _t ||
                function (e) {
                  return zt.clearTimeout(e)
                }
              function Xi(e, t) {
                if (t) return e.slice()
                var n = e.length,
                  r = wt ? wt(n) : new e.constructor(n)
                return e.copy(r), r
              }
              function $i(e) {
                var t = new e.constructor(e.byteLength)
                return new bt(t).set(new bt(e)), t
              }
              function eo(e, t) {
                var n = t ? $i(e.buffer) : e.buffer
                return new e.constructor(n, e.byteOffset, e.length)
              }
              function to(e, t) {
                if (e !== t) {
                  var n = e !== i,
                    r = null === e,
                    o = e === e,
                    a = Vs(e),
                    s = t !== i,
                    u = null === t,
                    c = t === t,
                    l = Vs(t)
                  if (
                    (!u && !l && !a && e > t) ||
                    (a && s && c && !u && !l) ||
                    (r && s && c) ||
                    (!n && c) ||
                    !o
                  )
                    return 1
                  if (
                    (!r && !a && !l && e < t) ||
                    (l && n && o && !r && !a) ||
                    (u && n && o) ||
                    (!s && o) ||
                    !c
                  )
                    return -1
                }
                return 0
              }
              function no(e, t, r, i) {
                for (
                  var o = -1,
                    a = e.length,
                    s = r.length,
                    u = -1,
                    c = t.length,
                    l = kn(a - s, 0),
                    f = n(c + l),
                    d = !i;
                  ++u < c;

                )
                  f[u] = t[u]
                for (; ++o < s; ) (d || o < a) && (f[r[o]] = e[o])
                for (; l--; ) f[u++] = e[o++]
                return f
              }
              function ro(e, t, r, i) {
                for (
                  var o = -1,
                    a = e.length,
                    s = -1,
                    u = r.length,
                    c = -1,
                    l = t.length,
                    f = kn(a - u, 0),
                    d = n(f + l),
                    h = !i;
                  ++o < f;

                )
                  d[o] = e[o]
                for (var p = o; ++c < l; ) d[p + c] = t[c]
                for (; ++s < u; ) (h || o < a) && (d[p + r[s]] = e[o++])
                return d
              }
              function io(e, t) {
                var r = -1,
                  i = e.length
                for (t || (t = n(i)); ++r < i; ) t[r] = e[r]
                return t
              }
              function oo(e, t, n, r) {
                var o = !n
                n || (n = {})
                for (var a = -1, s = t.length; ++a < s; ) {
                  var u = t[a],
                    c = r ? r(n[u], e[u], u, n, e) : i
                  c === i && (c = e[u]), o ? Dr(n, u, c) : Nr(n, u, c)
                }
                return n
              }
              function ao(e, t) {
                return function (n, r) {
                  var i = bs(n) ? rn : Rr,
                    o = t ? t() : {}
                  return i(n, e, Bo(r, 2), o)
                }
              }
              function so(e) {
                return xi(function (t, n) {
                  var r = -1,
                    o = n.length,
                    a = o > 1 ? n[o - 1] : i,
                    s = o > 2 ? n[2] : i
                  for (
                    a = e.length > 3 && "function" == typeof a ? (o--, a) : i,
                      s && Qo(n[0], n[1], s) && ((a = o < 3 ? i : a), (o = 1)),
                      t = tt(t);
                    ++r < o;

                  ) {
                    var u = n[r]
                    u && e(t, u, r, a)
                  }
                  return t
                })
              }
              function uo(e, t) {
                return function (n, r) {
                  if (null == n) return n
                  if (!Ss(n)) return e(n, r)
                  for (
                    var i = n.length, o = t ? i : -1, a = tt(n);
                    (t ? o-- : ++o < i) && !1 !== r(a[o], o, a);

                  );
                  return n
                }
              }
              function co(e) {
                return function (t, n, r) {
                  for (var i = -1, o = tt(t), a = r(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i]
                    if (!1 === n(o[u], u, o)) break
                  }
                  return t
                }
              }
              function lo(e) {
                return function (t) {
                  var n = Vn((t = Hs(t))) ? zn(t) : i,
                    r = n ? n[0] : t.charAt(0),
                    o = n ? Ki(n, 1).join("") : t.slice(1)
                  return r[e]() + o
                }
              }
              function fo(e) {
                return function (t) {
                  return hn(Eu(yu(t).replace(Tt, "")), e, "")
                }
              }
              function ho(e) {
                return function () {
                  var t = arguments
                  switch (t.length) {
                    case 0:
                      return new e()
                    case 1:
                      return new e(t[0])
                    case 2:
                      return new e(t[0], t[1])
                    case 3:
                      return new e(t[0], t[1], t[2])
                    case 4:
                      return new e(t[0], t[1], t[2], t[3])
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4])
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5])
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                  }
                  var n = mr(e.prototype),
                    r = e.apply(n, t)
                  return Ts(r) ? r : n
                }
              }
              function po(e) {
                return function (t, n, r) {
                  var o = tt(t)
                  if (!Ss(t)) {
                    var a = Bo(n, 3)
                    ;(t = au(t)),
                      (n = function (e) {
                        return a(o[e], e, o)
                      })
                  }
                  var s = e(t, n, r)
                  return s > -1 ? o[a ? t[s] : s] : i
                }
              }
              function vo(e) {
                return Ro(function (t) {
                  var n = t.length,
                    r = n,
                    o = yr.prototype.thru
                  for (e && t.reverse(); r--; ) {
                    var a = t[r]
                    if ("function" != typeof a) throw new it(s)
                    if (o && !u && "wrapper" == Fo(a)) var u = new yr([], !0)
                  }
                  for (r = u ? r : n; ++r < n; ) {
                    var c = Fo((a = t[r])),
                      l = "wrapper" == c ? Lo(a) : i
                    u =
                      l &&
                      Jo(l[0]) &&
                      l[1] == (k | w | C | x) &&
                      !l[4].length &&
                      1 == l[9]
                        ? u[Fo(l[0])].apply(u, l[3])
                        : 1 == a.length && Jo(a)
                        ? u[c]()
                        : u.thru(a)
                  }
                  return function () {
                    var e = arguments,
                      r = e[0]
                    if (u && 1 == e.length && bs(r)) return u.plant(r).value()
                    for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n; )
                      o = t[i].call(this, o)
                    return o
                  }
                })
              }
              function mo(e, t, r, o, a, s, u, c, l, f) {
                var d = t & k,
                  h = t & g,
                  p = t & y,
                  v = t & (w | S),
                  m = t & E,
                  b = p ? i : ho(e)
                return function g() {
                  for (var y = arguments.length, w = n(y), S = y; S--; )
                    w[S] = arguments[S]
                  if (v)
                    var C = Vo(g),
                      I = (function (e, t) {
                        for (var n = e.length, r = 0; n--; ) e[n] === t && ++r
                        return r
                      })(w, C)
                  if (
                    (o && (w = no(w, o, a, v)),
                    s && (w = ro(w, s, u, v)),
                    (y -= I),
                    v && y < f)
                  ) {
                    var k = Pn(w, C)
                    return Io(e, t, mo, g.placeholder, r, w, k, c, l, f - y)
                  }
                  var x = h ? r : this,
                    E = p ? x[e] : e
                  return (
                    (y = w.length),
                    c
                      ? (w = (function (e, t) {
                          var n = e.length,
                            r = Yn(t.length, n),
                            o = io(e)
                          for (; r--; ) {
                            var a = t[r]
                            e[r] = Yo(a, n) ? o[a] : i
                          }
                          return e
                        })(w, c))
                      : m && y > 1 && w.reverse(),
                    d && l < y && (w.length = l),
                    this &&
                      this !== zt &&
                      this instanceof g &&
                      (E = b || ho(E)),
                    E.apply(x, w)
                  )
                }
              }
              function go(e, t) {
                return function (n, r) {
                  return (function (e, t, n, r) {
                    return (
                      Qr(e, function (e, i, o) {
                        t(r, n(e), i, o)
                      }),
                      r
                    )
                  })(n, e, t(r), {})
                }
              }
              function yo(e, t) {
                return function (n, r) {
                  var o
                  if (n === i && r === i) return t
                  if ((n !== i && (o = n), r !== i)) {
                    if (o === i) return r
                    "string" == typeof n || "string" == typeof r
                      ? ((n = Bi(n)), (r = Bi(r)))
                      : ((n = Vi(n)), (r = Vi(r))),
                      (o = e(n, r))
                  }
                  return o
                }
              }
              function bo(e) {
                return Ro(function (t) {
                  return (
                    (t = fn(t, Tn(Bo()))),
                    xi(function (n) {
                      var r = this
                      return e(t, function (e) {
                        return nn(e, r, n)
                      })
                    })
                  )
                })
              }
              function wo(e, t) {
                var n = (t = t === i ? " " : Bi(t)).length
                if (n < 2) return n ? ki(t, e) : t
                var r = ki(t, Ut(e / Gn(t)))
                return Vn(t) ? Ki(zn(r), 0, e).join("") : r.slice(0, e)
              }
              function So(e) {
                return function (t, r, o) {
                  return (
                    o && "number" != typeof o && Qo(t, r, o) && (r = o = i),
                    (t = Us(t)),
                    r === i ? ((r = t), (t = 0)) : (r = Us(r)),
                    (function (e, t, r, i) {
                      for (
                        var o = -1, a = kn(Ut((t - e) / (r || 1)), 0), s = n(a);
                        a--;

                      )
                        (s[i ? a : ++o] = e), (e += r)
                      return s
                    })(t, r, (o = o === i ? (t < r ? 1 : -1) : Us(o)), e)
                  )
                }
              }
              function Co(e) {
                return function (t, n) {
                  return (
                    ("string" == typeof t && "string" == typeof n) ||
                      ((t = Zs(t)), (n = Zs(n))),
                    e(t, n)
                  )
                }
              }
              function Io(e, t, n, r, o, a, s, u, c, l) {
                var f = t & w
                ;(t |= f ? C : I), (t &= ~(f ? I : C)) & b || (t &= ~(g | y))
                var d = [
                    e,
                    t,
                    o,
                    f ? a : i,
                    f ? s : i,
                    f ? i : a,
                    f ? i : s,
                    u,
                    c,
                    l,
                  ],
                  h = n.apply(i, d)
                return Jo(e) && oa(h, d), (h.placeholder = r), ua(h, e, t)
              }
              function ko(e) {
                var t = et[e]
                return function (e, n) {
                  if (
                    ((e = Zs(e)), (n = null == n ? 0 : Yn(Gs(n), 292)) && Yt(e))
                  ) {
                    var r = (Hs(e) + "e").split("e")
                    return +(
                      (r = (Hs(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+r[1] - n)
                    )
                  }
                  return t(e)
                }
              }
              var xo =
                nr && 1 / Wn(new nr([, -0]))[1] == O
                  ? function (e) {
                      return new nr(e)
                    }
                  : Vu
              function Eo(e) {
                return function (t) {
                  var n = zo(t)
                  return n == K
                    ? Bn(t)
                    : n == re
                    ? Un(t)
                    : (function (e, t) {
                        return fn(t, function (t) {
                          return [t, e[t]]
                        })
                      })(t, e(t))
                }
              }
              function Ao(e, t, r, o, a, u, c, l) {
                var d = t & y
                if (!d && "function" != typeof e) throw new it(s)
                var h = o ? o.length : 0
                if (
                  (h || ((t &= ~(C | I)), (o = a = i)),
                  (c = c === i ? c : kn(Gs(c), 0)),
                  (l = l === i ? l : Gs(l)),
                  (h -= a ? a.length : 0),
                  t & I)
                ) {
                  var p = o,
                    v = a
                  o = a = i
                }
                var m = d ? i : Lo(e),
                  E = [e, t, r, o, a, p, v, u, c, l]
                if (
                  (m &&
                    (function (e, t) {
                      var n = e[1],
                        r = t[1],
                        i = n | r,
                        o = i < (g | y | k),
                        a =
                          (r == k && n == w) ||
                          (r == k && n == x && e[7].length <= t[8]) ||
                          (r == (k | x) && t[7].length <= t[8] && n == w)
                      if (!o && !a) return e
                      r & g && ((e[2] = t[2]), (i |= n & g ? 0 : b))
                      var s = t[3]
                      if (s) {
                        var u = e[3]
                        ;(e[3] = u ? no(u, s, t[4]) : s),
                          (e[4] = u ? Pn(e[3], f) : t[4])
                      }
                      ;(s = t[5]) &&
                        ((u = e[5]),
                        (e[5] = u ? ro(u, s, t[6]) : s),
                        (e[6] = u ? Pn(e[5], f) : t[6]))
                      ;(s = t[7]) && (e[7] = s)
                      r & k && (e[8] = null == e[8] ? t[8] : Yn(e[8], t[8]))
                      null == e[9] && (e[9] = t[9])
                      ;(e[0] = t[0]), (e[1] = i)
                    })(E, m),
                  (e = E[0]),
                  (t = E[1]),
                  (r = E[2]),
                  (o = E[3]),
                  (a = E[4]),
                  !(l = E[9] =
                    E[9] === i ? (d ? 0 : e.length) : kn(E[9] - h, 0)) &&
                    t & (w | S) &&
                    (t &= ~(w | S)),
                  t && t != g)
                )
                  A =
                    t == w || t == S
                      ? (function (e, t, r) {
                          var o = ho(e)
                          return function a() {
                            for (
                              var s = arguments.length,
                                u = n(s),
                                c = s,
                                l = Vo(a);
                              c--;

                            )
                              u[c] = arguments[c]
                            var f =
                              s < 3 && u[0] !== l && u[s - 1] !== l
                                ? []
                                : Pn(u, l)
                            return (s -= f.length) < r
                              ? Io(
                                  e,
                                  t,
                                  mo,
                                  a.placeholder,
                                  i,
                                  u,
                                  f,
                                  i,
                                  i,
                                  r - s
                                )
                              : nn(
                                  this && this !== zt && this instanceof a
                                    ? o
                                    : e,
                                  this,
                                  u
                                )
                          }
                        })(e, t, l)
                      : (t != C && t != (g | C)) || a.length
                      ? mo.apply(i, E)
                      : (function (e, t, r, i) {
                          var o = t & g,
                            a = ho(e)
                          return function t() {
                            for (
                              var s = -1,
                                u = arguments.length,
                                c = -1,
                                l = i.length,
                                f = n(l + u),
                                d =
                                  this && this !== zt && this instanceof t
                                    ? a
                                    : e;
                              ++c < l;

                            )
                              f[c] = i[c]
                            for (; u--; ) f[c++] = arguments[++s]
                            return nn(d, o ? r : this, f)
                          }
                        })(e, t, r, o)
                else
                  var A = (function (e, t, n) {
                    var r = t & g,
                      i = ho(e)
                    return function t() {
                      return (this && this !== zt && this instanceof t
                        ? i
                        : e
                      ).apply(r ? n : this, arguments)
                    }
                  })(e, t, r)
                return ua((m ? Ti : oa)(A, E), e, t)
              }
              function Mo(e, t, n, r) {
                return e === i || (vs(e, st[n]) && !lt.call(r, n)) ? t : e
              }
              function To(e, t, n, r, o, a) {
                return (
                  Ts(e) &&
                    Ts(t) &&
                    (a.set(t, e), gi(e, t, i, To, a), a.delete(t)),
                  e
                )
              }
              function No(e) {
                return Os(e) ? i : e
              }
              function _o(e, t, n, r, o, a) {
                var s = n & v,
                  u = e.length,
                  c = t.length
                if (u != c && !(s && c > u)) return !1
                var l = a.get(e),
                  f = a.get(t)
                if (l && f) return l == t && f == e
                var d = -1,
                  h = !0,
                  p = n & m ? new Ir() : i
                for (a.set(e, t), a.set(t, e); ++d < u; ) {
                  var g = e[d],
                    y = t[d]
                  if (r) var b = s ? r(y, g, d, t, e, a) : r(g, y, d, e, t, a)
                  if (b !== i) {
                    if (b) continue
                    h = !1
                    break
                  }
                  if (p) {
                    if (
                      !vn(t, function (e, t) {
                        if (!_n(p, t) && (g === e || o(g, e, n, r, a)))
                          return p.push(t)
                      })
                    ) {
                      h = !1
                      break
                    }
                  } else if (g !== y && !o(g, y, n, r, a)) {
                    h = !1
                    break
                  }
                }
                return a.delete(e), a.delete(t), h
              }
              function Ro(e) {
                return sa(na(e, i, wa), e + "")
              }
              function Oo(e) {
                return $r(e, au, Uo)
              }
              function Do(e) {
                return $r(e, su, Go)
              }
              var Lo = or
                ? function (e) {
                    return or.get(e)
                  }
                : Vu
              function Fo(e) {
                for (
                  var t = e.name + "",
                    n = ar[t],
                    r = lt.call(ar, t) ? n.length : 0;
                  r--;

                ) {
                  var i = n[r],
                    o = i.func
                  if (null == o || o == e) return i.name
                }
                return t
              }
              function Vo(e) {
                return (lt.call(vr, "placeholder") ? vr : e).placeholder
              }
              function Bo() {
                var e = vr.iteratee || Ou
                return (
                  (e = e === Ou ? li : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                )
              }
              function jo(e, t) {
                var n = e.__data__
                return (function (e) {
                  var t = typeof e
                  return "string" == t ||
                    "number" == t ||
                    "symbol" == t ||
                    "boolean" == t
                    ? "__proto__" !== e
                    : null === e
                })(t)
                  ? n["string" == typeof t ? "string" : "hash"]
                  : n.map
              }
              function Po(e) {
                for (var t = au(e), n = t.length; n--; ) {
                  var r = t[n],
                    i = e[r]
                  t[n] = [r, i, ea(i)]
                }
                return t
              }
              function Wo(e, t) {
                var n = (function (e, t) {
                  return null == e ? i : e[t]
                })(e, t)
                return ci(n) ? n : i
              }
              var Uo = Zt
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = tt(e)),
                          un(Zt(e), function (t) {
                            return It.call(e, t)
                          }))
                    }
                  : zu,
                Go = Zt
                  ? function (e) {
                      for (var t = []; e; ) dn(t, Uo(e)), (e = St(e))
                      return t
                    }
                  : zu,
                zo = ei
              function Zo(e, t, n) {
                for (var r = -1, i = (t = Yi(t, e)).length, o = !1; ++r < i; ) {
                  var a = da(t[r])
                  if (!(o = null != e && n(e, a))) break
                  e = e[a]
                }
                return o || ++r != i
                  ? o
                  : !!(i = null == e ? 0 : e.length) &&
                      Ms(i) &&
                      Yo(a, i) &&
                      (bs(e) || ys(e))
              }
              function qo(e) {
                return "function" != typeof e.constructor || $o(e)
                  ? {}
                  : mr(St(e))
              }
              function Ho(e) {
                return bs(e) || ys(e) || !!(xt && e && e[xt])
              }
              function Yo(e, t) {
                var n = typeof e
                return (
                  !!(t = null == t ? D : t) &&
                  ("number" == n || ("symbol" != n && Qe.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                )
              }
              function Qo(e, t, n) {
                if (!Ts(n)) return !1
                var r = typeof t
                return (
                  !!("number" == r
                    ? Ss(n) && Yo(t, n.length)
                    : "string" == r && t in n) && vs(n[t], e)
                )
              }
              function Ko(e, t) {
                if (bs(e)) return !1
                var n = typeof e
                return (
                  !(
                    "number" != n &&
                    "symbol" != n &&
                    "boolean" != n &&
                    null != e &&
                    !Vs(e)
                  ) ||
                  _e.test(e) ||
                  !Ne.test(e) ||
                  (null != t && e in tt(t))
                )
              }
              function Jo(e) {
                var t = Fo(e),
                  n = vr[t]
                if ("function" != typeof n || !(t in br.prototype)) return !1
                if (e === n) return !0
                var r = Lo(n)
                return !!r && e === r[0]
              }
              ;(($n && zo(new $n(new ArrayBuffer(1))) != le) ||
                (er && zo(new er()) != K) ||
                (tr && zo(tr.resolve()) != ee) ||
                (nr && zo(new nr()) != re) ||
                (rr && zo(new rr()) != se)) &&
                (zo = function (e) {
                  var t = ei(e),
                    n = t == $ ? e.constructor : i,
                    r = n ? ha(n) : ""
                  if (r)
                    switch (r) {
                      case sr:
                        return le
                      case ur:
                        return K
                      case cr:
                        return ee
                      case lr:
                        return re
                      case fr:
                        return se
                    }
                  return t
                })
              var Xo = ut ? Es : Zu
              function $o(e) {
                var t = e && e.constructor
                return e === (("function" == typeof t && t.prototype) || st)
              }
              function ea(e) {
                return e === e && !Ts(e)
              }
              function ta(e, t) {
                return function (n) {
                  return null != n && n[e] === t && (t !== i || e in tt(n))
                }
              }
              function na(e, t, r) {
                return (
                  (t = kn(t === i ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var i = arguments,
                        o = -1,
                        a = kn(i.length - t, 0),
                        s = n(a);
                      ++o < a;

                    )
                      s[o] = i[t + o]
                    o = -1
                    for (var u = n(t + 1); ++o < t; ) u[o] = i[o]
                    return (u[t] = r(s)), nn(e, this, u)
                  }
                )
              }
              function ra(e, t) {
                return t.length < 2 ? e : Xr(e, Ri(t, 0, -1))
              }
              function ia(e, t) {
                if (
                  ("constructor" !== t || "function" !== typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t]
              }
              var oa = ca(Ti),
                aa =
                  jt ||
                  function (e, t) {
                    return zt.setTimeout(e, t)
                  },
                sa = ca(Ni)
              function ua(e, t, n) {
                var r = t + ""
                return sa(
                  e,
                  (function (e, t) {
                    var n = t.length
                    if (!n) return e
                    var r = n - 1
                    return (
                      (t[r] = (n > 1 ? "& " : "") + t[r]),
                      (t = t.join(n > 2 ? ", " : " ")),
                      e.replace(Ve, "{\n/* [wrapped with " + t + "] */\n")
                    )
                  })(
                    r,
                    (function (e, t) {
                      return (
                        on(P, function (n) {
                          var r = "_." + n[0]
                          t & n[1] && !cn(e, r) && e.push(r)
                        }),
                        e.sort()
                      )
                    })(
                      (function (e) {
                        var t = e.match(Be)
                        return t ? t[1].split(je) : []
                      })(r),
                      n
                    )
                  )
                )
              }
              function ca(e) {
                var t = 0,
                  n = 0
                return function () {
                  var r = Qn(),
                    o = N - (r - n)
                  if (((n = r), o > 0)) {
                    if (++t >= T) return arguments[0]
                  } else t = 0
                  return e.apply(i, arguments)
                }
              }
              function la(e, t) {
                var n = -1,
                  r = e.length,
                  o = r - 1
                for (t = t === i ? r : t; ++n < t; ) {
                  var a = Ii(n, o),
                    s = e[a]
                  ;(e[a] = e[n]), (e[n] = s)
                }
                return (e.length = t), e
              }
              var fa = (function (e) {
                var t = cs(e, function (e) {
                    return n.size === l && n.clear(), e
                  }),
                  n = t.cache
                return t
              })(function (e) {
                var t = []
                return (
                  46 === e.charCodeAt(0) && t.push(""),
                  e.replace(Re, function (e, n, r, i) {
                    t.push(r ? i.replace(Ue, "$1") : n || e)
                  }),
                  t
                )
              })
              function da(e) {
                if ("string" == typeof e || Vs(e)) return e
                var t = e + ""
                return "0" == t && 1 / e == -O ? "-0" : t
              }
              function ha(e) {
                if (null != e) {
                  try {
                    return ct.call(e)
                  } catch (t) {}
                  try {
                    return e + ""
                  } catch (t) {}
                }
                return ""
              }
              function pa(e) {
                if (e instanceof br) return e.clone()
                var t = new yr(e.__wrapped__, e.__chain__)
                return (
                  (t.__actions__ = io(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                )
              }
              var va = xi(function (e, t) {
                  return Cs(e) ? Pr(e, qr(t, 1, Cs, !0)) : []
                }),
                ma = xi(function (e, t) {
                  var n = xa(t)
                  return (
                    Cs(n) && (n = i),
                    Cs(e) ? Pr(e, qr(t, 1, Cs, !0), Bo(n, 2)) : []
                  )
                }),
                ga = xi(function (e, t) {
                  var n = xa(t)
                  return (
                    Cs(n) && (n = i), Cs(e) ? Pr(e, qr(t, 1, Cs, !0), i, n) : []
                  )
                })
              function ya(e, t, n) {
                var r = null == e ? 0 : e.length
                if (!r) return -1
                var i = null == n ? 0 : Gs(n)
                return i < 0 && (i = kn(r + i, 0)), yn(e, Bo(t, 3), i)
              }
              function ba(e, t, n) {
                var r = null == e ? 0 : e.length
                if (!r) return -1
                var o = r - 1
                return (
                  n !== i &&
                    ((o = Gs(n)), (o = n < 0 ? kn(r + o, 0) : Yn(o, r - 1))),
                  yn(e, Bo(t, 3), o, !0)
                )
              }
              function wa(e) {
                return (null == e ? 0 : e.length) ? qr(e, 1) : []
              }
              function Sa(e) {
                return e && e.length ? e[0] : i
              }
              var Ca = xi(function (e) {
                  var t = fn(e, qi)
                  return t.length && t[0] === e[0] ? ii(t) : []
                }),
                Ia = xi(function (e) {
                  var t = xa(e),
                    n = fn(e, qi)
                  return (
                    t === xa(n) ? (t = i) : n.pop(),
                    n.length && n[0] === e[0] ? ii(n, Bo(t, 2)) : []
                  )
                }),
                ka = xi(function (e) {
                  var t = xa(e),
                    n = fn(e, qi)
                  return (
                    (t = "function" == typeof t ? t : i) && n.pop(),
                    n.length && n[0] === e[0] ? ii(n, i, t) : []
                  )
                })
              function xa(e) {
                var t = null == e ? 0 : e.length
                return t ? e[t - 1] : i
              }
              var Ea = xi(Aa)
              function Aa(e, t) {
                return e && e.length && t && t.length ? Si(e, t) : e
              }
              var Ma = Ro(function (e, t) {
                var n = null == e ? 0 : e.length,
                  r = Lr(e, t)
                return (
                  Ci(
                    e,
                    fn(t, function (e) {
                      return Yo(e, n) ? +e : e
                    }).sort(to)
                  ),
                  r
                )
              })
              function Ta(e) {
                return null == e ? e : Xn.call(e)
              }
              var Na = xi(function (e) {
                  return ji(qr(e, 1, Cs, !0))
                }),
                _a = xi(function (e) {
                  var t = xa(e)
                  return Cs(t) && (t = i), ji(qr(e, 1, Cs, !0), Bo(t, 2))
                }),
                Ra = xi(function (e) {
                  var t = xa(e)
                  return (
                    (t = "function" == typeof t ? t : i),
                    ji(qr(e, 1, Cs, !0), i, t)
                  )
                })
              function Oa(e) {
                if (!e || !e.length) return []
                var t = 0
                return (
                  (e = un(e, function (e) {
                    if (Cs(e)) return (t = kn(e.length, t)), !0
                  })),
                  An(t, function (t) {
                    return fn(e, In(t))
                  })
                )
              }
              function Da(e, t) {
                if (!e || !e.length) return []
                var n = Oa(e)
                return null == t
                  ? n
                  : fn(n, function (e) {
                      return nn(t, i, e)
                    })
              }
              var La = xi(function (e, t) {
                  return Cs(e) ? Pr(e, t) : []
                }),
                Fa = xi(function (e) {
                  return zi(un(e, Cs))
                }),
                Va = xi(function (e) {
                  var t = xa(e)
                  return Cs(t) && (t = i), zi(un(e, Cs), Bo(t, 2))
                }),
                Ba = xi(function (e) {
                  var t = xa(e)
                  return (
                    (t = "function" == typeof t ? t : i), zi(un(e, Cs), i, t)
                  )
                }),
                ja = xi(Oa)
              var Pa = xi(function (e) {
                var t = e.length,
                  n = t > 1 ? e[t - 1] : i
                return (n = "function" == typeof n ? (e.pop(), n) : i), Da(e, n)
              })
              function Wa(e) {
                var t = vr(e)
                return (t.__chain__ = !0), t
              }
              function Ua(e, t) {
                return t(e)
              }
              var Ga = Ro(function (e) {
                var t = e.length,
                  n = t ? e[0] : 0,
                  r = this.__wrapped__,
                  o = function (t) {
                    return Lr(t, e)
                  }
                return !(t > 1 || this.__actions__.length) &&
                  r instanceof br &&
                  Yo(n)
                  ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                      func: Ua,
                      args: [o],
                      thisArg: i,
                    }),
                    new yr(r, this.__chain__).thru(function (e) {
                      return t && !e.length && e.push(i), e
                    }))
                  : this.thru(o)
              })
              var za = ao(function (e, t, n) {
                lt.call(e, n) ? ++e[n] : Dr(e, n, 1)
              })
              var Za = po(ya),
                qa = po(ba)
              function Ha(e, t) {
                return (bs(e) ? on : Wr)(e, Bo(t, 3))
              }
              function Ya(e, t) {
                return (bs(e) ? an : Ur)(e, Bo(t, 3))
              }
              var Qa = ao(function (e, t, n) {
                lt.call(e, n) ? e[n].push(t) : Dr(e, n, [t])
              })
              var Ka = xi(function (e, t, r) {
                  var i = -1,
                    o = "function" == typeof t,
                    a = Ss(e) ? n(e.length) : []
                  return (
                    Wr(e, function (e) {
                      a[++i] = o ? nn(t, e, r) : oi(e, t, r)
                    }),
                    a
                  )
                }),
                Ja = ao(function (e, t, n) {
                  Dr(e, n, t)
                })
              function Xa(e, t) {
                return (bs(e) ? fn : pi)(e, Bo(t, 3))
              }
              var $a = ao(
                function (e, t, n) {
                  e[n ? 0 : 1].push(t)
                },
                function () {
                  return [[], []]
                }
              )
              var es = xi(function (e, t) {
                  if (null == e) return []
                  var n = t.length
                  return (
                    n > 1 && Qo(e, t[0], t[1])
                      ? (t = [])
                      : n > 2 && Qo(t[0], t[1], t[2]) && (t = [t[0]]),
                    bi(e, qr(t, 1), [])
                  )
                }),
                ts =
                  Ot ||
                  function () {
                    return zt.Date.now()
                  }
              function ns(e, t, n) {
                return (
                  (t = n ? i : t),
                  (t = e && null == t ? e.length : t),
                  Ao(e, k, i, i, i, i, t)
                )
              }
              function rs(e, t) {
                var n
                if ("function" != typeof t) throw new it(s)
                return (
                  (e = Gs(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = i),
                      n
                    )
                  }
                )
              }
              var is = xi(function (e, t, n) {
                  var r = g
                  if (n.length) {
                    var i = Pn(n, Vo(is))
                    r |= C
                  }
                  return Ao(e, r, t, n, i)
                }),
                os = xi(function (e, t, n) {
                  var r = g | y
                  if (n.length) {
                    var i = Pn(n, Vo(os))
                    r |= C
                  }
                  return Ao(t, r, e, n, i)
                })
              function as(e, t, n) {
                var r,
                  o,
                  a,
                  u,
                  c,
                  l,
                  f = 0,
                  d = !1,
                  h = !1,
                  p = !0
                if ("function" != typeof e) throw new it(s)
                function v(t) {
                  var n = r,
                    a = o
                  return (r = o = i), (f = t), (u = e.apply(a, n))
                }
                function m(e) {
                  var n = e - l
                  return l === i || n >= t || n < 0 || (h && e - f >= a)
                }
                function g() {
                  var e = ts()
                  if (m(e)) return y(e)
                  c = aa(
                    g,
                    (function (e) {
                      var n = t - (e - l)
                      return h ? Yn(n, a - (e - f)) : n
                    })(e)
                  )
                }
                function y(e) {
                  return (c = i), p && r ? v(e) : ((r = o = i), u)
                }
                function b() {
                  var e = ts(),
                    n = m(e)
                  if (((r = arguments), (o = this), (l = e), n)) {
                    if (c === i)
                      return (function (e) {
                        return (f = e), (c = aa(g, t)), d ? v(e) : u
                      })(l)
                    if (h) return Ji(c), (c = aa(g, t)), v(l)
                  }
                  return c === i && (c = aa(g, t)), u
                }
                return (
                  (t = Zs(t) || 0),
                  Ts(n) &&
                    ((d = !!n.leading),
                    (a = (h = "maxWait" in n) ? kn(Zs(n.maxWait) || 0, t) : a),
                    (p = "trailing" in n ? !!n.trailing : p)),
                  (b.cancel = function () {
                    c !== i && Ji(c), (f = 0), (r = l = o = c = i)
                  }),
                  (b.flush = function () {
                    return c === i ? u : y(ts())
                  }),
                  b
                )
              }
              var ss = xi(function (e, t) {
                  return jr(e, 1, t)
                }),
                us = xi(function (e, t, n) {
                  return jr(e, Zs(t) || 0, n)
                })
              function cs(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new it(s)
                var n = function n() {
                  var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    o = n.cache
                  if (o.has(i)) return o.get(i)
                  var a = e.apply(this, r)
                  return (n.cache = o.set(i, a) || o), a
                }
                return (n.cache = new (cs.Cache || Cr)()), n
              }
              function ls(e) {
                if ("function" != typeof e) throw new it(s)
                return function () {
                  var t = arguments
                  switch (t.length) {
                    case 0:
                      return !e.call(this)
                    case 1:
                      return !e.call(this, t[0])
                    case 2:
                      return !e.call(this, t[0], t[1])
                    case 3:
                      return !e.call(this, t[0], t[1], t[2])
                  }
                  return !e.apply(this, t)
                }
              }
              cs.Cache = Cr
              var fs = Qi(function (e, t) {
                  var n = (t =
                    1 == t.length && bs(t[0])
                      ? fn(t[0], Tn(Bo()))
                      : fn(qr(t, 1), Tn(Bo()))).length
                  return xi(function (r) {
                    for (var i = -1, o = Yn(r.length, n); ++i < o; )
                      r[i] = t[i].call(this, r[i])
                    return nn(e, this, r)
                  })
                }),
                ds = xi(function (e, t) {
                  var n = Pn(t, Vo(ds))
                  return Ao(e, C, i, t, n)
                }),
                hs = xi(function (e, t) {
                  var n = Pn(t, Vo(hs))
                  return Ao(e, I, i, t, n)
                }),
                ps = Ro(function (e, t) {
                  return Ao(e, x, i, i, i, t)
                })
              function vs(e, t) {
                return e === t || (e !== e && t !== t)
              }
              var ms = Co(ti),
                gs = Co(function (e, t) {
                  return e >= t
                }),
                ys = ai(
                  (function () {
                    return arguments
                  })()
                )
                  ? ai
                  : function (e) {
                      return (
                        Ns(e) && lt.call(e, "callee") && !It.call(e, "callee")
                      )
                    },
                bs = n.isArray,
                ws = Kt
                  ? Tn(Kt)
                  : function (e) {
                      return Ns(e) && ei(e) == ce
                    }
              function Ss(e) {
                return null != e && Ms(e.length) && !Es(e)
              }
              function Cs(e) {
                return Ns(e) && Ss(e)
              }
              var Is = qt || Zu,
                ks = Jt
                  ? Tn(Jt)
                  : function (e) {
                      return Ns(e) && ei(e) == Z
                    }
              function xs(e) {
                if (!Ns(e)) return !1
                var t = ei(e)
                return (
                  t == H ||
                  t == q ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !Os(e))
                )
              }
              function Es(e) {
                if (!Ts(e)) return !1
                var t = ei(e)
                return t == Y || t == Q || t == G || t == te
              }
              function As(e) {
                return "number" == typeof e && e == Gs(e)
              }
              function Ms(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= D
              }
              function Ts(e) {
                var t = typeof e
                return null != e && ("object" == t || "function" == t)
              }
              function Ns(e) {
                return null != e && "object" == typeof e
              }
              var _s = Xt
                ? Tn(Xt)
                : function (e) {
                    return Ns(e) && zo(e) == K
                  }
              function Rs(e) {
                return "number" == typeof e || (Ns(e) && ei(e) == J)
              }
              function Os(e) {
                if (!Ns(e) || ei(e) != $) return !1
                var t = St(e)
                if (null === t) return !0
                var n = lt.call(t, "constructor") && t.constructor
                return (
                  "function" == typeof n && n instanceof n && ct.call(n) == pt
                )
              }
              var Ds = $t
                ? Tn($t)
                : function (e) {
                    return Ns(e) && ei(e) == ne
                  }
              var Ls = en
                ? Tn(en)
                : function (e) {
                    return Ns(e) && zo(e) == re
                  }
              function Fs(e) {
                return "string" == typeof e || (!bs(e) && Ns(e) && ei(e) == ie)
              }
              function Vs(e) {
                return "symbol" == typeof e || (Ns(e) && ei(e) == oe)
              }
              var Bs = tn
                ? Tn(tn)
                : function (e) {
                    return Ns(e) && Ms(e.length) && !!Vt[ei(e)]
                  }
              var js = Co(hi),
                Ps = Co(function (e, t) {
                  return e <= t
                })
              function Ws(e) {
                if (!e) return []
                if (Ss(e)) return Fs(e) ? zn(e) : io(e)
                if (Et && e[Et])
                  return (function (e) {
                    for (var t, n = []; !(t = e.next()).done; ) n.push(t.value)
                    return n
                  })(e[Et]())
                var t = zo(e)
                return (t == K ? Bn : t == re ? Wn : vu)(e)
              }
              function Us(e) {
                return e
                  ? (e = Zs(e)) === O || e === -O
                    ? (e < 0 ? -1 : 1) * L
                    : e === e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0
              }
              function Gs(e) {
                var t = Us(e),
                  n = t % 1
                return t === t ? (n ? t - n : t) : 0
              }
              function zs(e) {
                return e ? Fr(Gs(e), 0, V) : 0
              }
              function Zs(e) {
                if ("number" == typeof e) return e
                if (Vs(e)) return F
                if (Ts(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e
                  e = Ts(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e
                e = Mn(e)
                var n = qe.test(e)
                return n || Ye.test(e)
                  ? Wt(e.slice(2), n ? 2 : 8)
                  : Ze.test(e)
                  ? F
                  : +e
              }
              function qs(e) {
                return oo(e, su(e))
              }
              function Hs(e) {
                return null == e ? "" : Bi(e)
              }
              var Ys = so(function (e, t) {
                  if ($o(t) || Ss(t)) oo(t, au(t), e)
                  else for (var n in t) lt.call(t, n) && Nr(e, n, t[n])
                }),
                Qs = so(function (e, t) {
                  oo(t, su(t), e)
                }),
                Ks = so(function (e, t, n, r) {
                  oo(t, su(t), e, r)
                }),
                Js = so(function (e, t, n, r) {
                  oo(t, au(t), e, r)
                }),
                Xs = Ro(Lr)
              var $s = xi(function (e, t) {
                  e = tt(e)
                  var n = -1,
                    r = t.length,
                    o = r > 2 ? t[2] : i
                  for (o && Qo(t[0], t[1], o) && (r = 1); ++n < r; )
                    for (
                      var a = t[n], s = su(a), u = -1, c = s.length;
                      ++u < c;

                    ) {
                      var l = s[u],
                        f = e[l]
                      ;(f === i || (vs(f, st[l]) && !lt.call(e, l))) &&
                        (e[l] = a[l])
                    }
                  return e
                }),
                eu = xi(function (e) {
                  return e.push(i, To), nn(cu, i, e)
                })
              function tu(e, t, n) {
                var r = null == e ? i : Xr(e, t)
                return r === i ? n : r
              }
              function nu(e, t) {
                return null != e && Zo(e, t, ri)
              }
              var ru = go(function (e, t, n) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ht.call(t)),
                    (e[t] = n)
                }, Tu(Ru)),
                iu = go(function (e, t, n) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = ht.call(t)),
                    lt.call(e, t) ? e[t].push(n) : (e[t] = [n])
                }, Bo),
                ou = xi(oi)
              function au(e) {
                return Ss(e) ? xr(e) : fi(e)
              }
              function su(e) {
                return Ss(e) ? xr(e, !0) : di(e)
              }
              var uu = so(function (e, t, n) {
                  gi(e, t, n)
                }),
                cu = so(function (e, t, n, r) {
                  gi(e, t, n, r)
                }),
                lu = Ro(function (e, t) {
                  var n = {}
                  if (null == e) return n
                  var r = !1
                  ;(t = fn(t, function (t) {
                    return (t = Yi(t, e)), r || (r = t.length > 1), t
                  })),
                    oo(e, Do(e), n),
                    r && (n = Vr(n, d | h | p, No))
                  for (var i = t.length; i--; ) Pi(n, t[i])
                  return n
                })
              var fu = Ro(function (e, t) {
                return null == e
                  ? {}
                  : (function (e, t) {
                      return wi(e, t, function (t, n) {
                        return nu(e, n)
                      })
                    })(e, t)
              })
              function du(e, t) {
                if (null == e) return {}
                var n = fn(Do(e), function (e) {
                  return [e]
                })
                return (
                  (t = Bo(t)),
                  wi(e, n, function (e, n) {
                    return t(e, n[0])
                  })
                )
              }
              var hu = Eo(au),
                pu = Eo(su)
              function vu(e) {
                return null == e ? [] : Nn(e, au(e))
              }
              var mu = fo(function (e, t, n) {
                return (t = t.toLowerCase()), e + (n ? gu(t) : t)
              })
              function gu(e) {
                return xu(Hs(e).toLowerCase())
              }
              function yu(e) {
                return (e = Hs(e)) && e.replace(Ke, Dn).replace(Nt, "")
              }
              var bu = fo(function (e, t, n) {
                  return e + (n ? "-" : "") + t.toLowerCase()
                }),
                wu = fo(function (e, t, n) {
                  return e + (n ? " " : "") + t.toLowerCase()
                }),
                Su = lo("toLowerCase")
              var Cu = fo(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase()
              })
              var Iu = fo(function (e, t, n) {
                return e + (n ? " " : "") + xu(t)
              })
              var ku = fo(function (e, t, n) {
                  return e + (n ? " " : "") + t.toUpperCase()
                }),
                xu = lo("toUpperCase")
              function Eu(e, t, n) {
                return (
                  (e = Hs(e)),
                  (t = n ? i : t) === i
                    ? (function (e) {
                        return Dt.test(e)
                      })(e)
                      ? (function (e) {
                          return e.match(Rt) || []
                        })(e)
                      : (function (e) {
                          return e.match(Pe) || []
                        })(e)
                    : e.match(t) || []
                )
              }
              var Au = xi(function (e, t) {
                  try {
                    return nn(e, i, t)
                  } catch (n) {
                    return xs(n) ? n : new Fe(n)
                  }
                }),
                Mu = Ro(function (e, t) {
                  return (
                    on(t, function (t) {
                      ;(t = da(t)), Dr(e, t, is(e[t], e))
                    }),
                    e
                  )
                })
              function Tu(e) {
                return function () {
                  return e
                }
              }
              var Nu = vo(),
                _u = vo(!0)
              function Ru(e) {
                return e
              }
              function Ou(e) {
                return li("function" == typeof e ? e : Vr(e, d))
              }
              var Du = xi(function (e, t) {
                  return function (n) {
                    return oi(n, e, t)
                  }
                }),
                Lu = xi(function (e, t) {
                  return function (n) {
                    return oi(e, n, t)
                  }
                })
              function Fu(e, t, n) {
                var r = au(t),
                  i = Jr(t, r)
                null != n ||
                  (Ts(t) && (i.length || !r.length)) ||
                  ((n = t), (t = e), (e = this), (i = Jr(t, au(t))))
                var o = !(Ts(n) && "chain" in n) || !!n.chain,
                  a = Es(e)
                return (
                  on(i, function (n) {
                    var r = t[n]
                    ;(e[n] = r),
                      a &&
                        (e.prototype[n] = function () {
                          var t = this.__chain__
                          if (o || t) {
                            var n = e(this.__wrapped__)
                            return (
                              (n.__actions__ = io(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (n.__chain__ = t),
                              n
                            )
                          }
                          return r.apply(e, dn([this.value()], arguments))
                        })
                  }),
                  e
                )
              }
              function Vu() {}
              var Bu = bo(fn),
                ju = bo(sn),
                Pu = bo(vn)
              function Wu(e) {
                return Ko(e)
                  ? In(da(e))
                  : (function (e) {
                      return function (t) {
                        return Xr(t, e)
                      }
                    })(e)
              }
              var Uu = So(),
                Gu = So(!0)
              function zu() {
                return []
              }
              function Zu() {
                return !1
              }
              var qu = yo(function (e, t) {
                  return e + t
                }, 0),
                Hu = ko("ceil"),
                Yu = yo(function (e, t) {
                  return e / t
                }, 1),
                Qu = ko("floor")
              var Ku = yo(function (e, t) {
                  return e * t
                }, 1),
                Ju = ko("round"),
                Xu = yo(function (e, t) {
                  return e - t
                }, 0)
              return (
                (vr.after = function (e, t) {
                  if ("function" != typeof t) throw new it(s)
                  return (
                    (e = Gs(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments)
                    }
                  )
                }),
                (vr.ary = ns),
                (vr.assign = Ys),
                (vr.assignIn = Qs),
                (vr.assignInWith = Ks),
                (vr.assignWith = Js),
                (vr.at = Xs),
                (vr.before = rs),
                (vr.bind = is),
                (vr.bindAll = Mu),
                (vr.bindKey = os),
                (vr.castArray = function () {
                  if (!arguments.length) return []
                  var e = arguments[0]
                  return bs(e) ? e : [e]
                }),
                (vr.chain = Wa),
                (vr.chunk = function (e, t, r) {
                  t = (r ? Qo(e, t, r) : t === i) ? 1 : kn(Gs(t), 0)
                  var o = null == e ? 0 : e.length
                  if (!o || t < 1) return []
                  for (var a = 0, s = 0, u = n(Ut(o / t)); a < o; )
                    u[s++] = Ri(e, a, (a += t))
                  return u
                }),
                (vr.compact = function (e) {
                  for (
                    var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                    ++t < n;

                  ) {
                    var o = e[t]
                    o && (i[r++] = o)
                  }
                  return i
                }),
                (vr.concat = function () {
                  var e = arguments.length
                  if (!e) return []
                  for (var t = n(e - 1), r = arguments[0], i = e; i--; )
                    t[i - 1] = arguments[i]
                  return dn(bs(r) ? io(r) : [r], qr(t, 1))
                }),
                (vr.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    n = Bo()
                  return (
                    (e = t
                      ? fn(e, function (e) {
                          if ("function" != typeof e[1]) throw new it(s)
                          return [n(e[0]), e[1]]
                        })
                      : []),
                    xi(function (n) {
                      for (var r = -1; ++r < t; ) {
                        var i = e[r]
                        if (nn(i[0], this, n)) return nn(i[1], this, n)
                      }
                    })
                  )
                }),
                (vr.conforms = function (e) {
                  return (function (e) {
                    var t = au(e)
                    return function (n) {
                      return Br(n, e, t)
                    }
                  })(Vr(e, d))
                }),
                (vr.constant = Tu),
                (vr.countBy = za),
                (vr.create = function (e, t) {
                  var n = mr(e)
                  return null == t ? n : Or(n, t)
                }),
                (vr.curry = function e(t, n, r) {
                  var o = Ao(t, w, i, i, i, i, i, (n = r ? i : n))
                  return (o.placeholder = e.placeholder), o
                }),
                (vr.curryRight = function e(t, n, r) {
                  var o = Ao(t, S, i, i, i, i, i, (n = r ? i : n))
                  return (o.placeholder = e.placeholder), o
                }),
                (vr.debounce = as),
                (vr.defaults = $s),
                (vr.defaultsDeep = eu),
                (vr.defer = ss),
                (vr.delay = us),
                (vr.difference = va),
                (vr.differenceBy = ma),
                (vr.differenceWith = ga),
                (vr.drop = function (e, t, n) {
                  var r = null == e ? 0 : e.length
                  return r
                    ? Ri(e, (t = n || t === i ? 1 : Gs(t)) < 0 ? 0 : t, r)
                    : []
                }),
                (vr.dropRight = function (e, t, n) {
                  var r = null == e ? 0 : e.length
                  return r
                    ? Ri(
                        e,
                        0,
                        (t = r - (t = n || t === i ? 1 : Gs(t))) < 0 ? 0 : t
                      )
                    : []
                }),
                (vr.dropRightWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3), !0, !0) : []
                }),
                (vr.dropWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3), !0) : []
                }),
                (vr.fill = function (e, t, n, r) {
                  var o = null == e ? 0 : e.length
                  return o
                    ? (n &&
                        "number" != typeof n &&
                        Qo(e, t, n) &&
                        ((n = 0), (r = o)),
                      (function (e, t, n, r) {
                        var o = e.length
                        for (
                          (n = Gs(n)) < 0 && (n = -n > o ? 0 : o + n),
                            (r = r === i || r > o ? o : Gs(r)) < 0 && (r += o),
                            r = n > r ? 0 : zs(r);
                          n < r;

                        )
                          e[n++] = t
                        return e
                      })(e, t, n, r))
                    : []
                }),
                (vr.filter = function (e, t) {
                  return (bs(e) ? un : Zr)(e, Bo(t, 3))
                }),
                (vr.flatMap = function (e, t) {
                  return qr(Xa(e, t), 1)
                }),
                (vr.flatMapDeep = function (e, t) {
                  return qr(Xa(e, t), O)
                }),
                (vr.flatMapDepth = function (e, t, n) {
                  return (n = n === i ? 1 : Gs(n)), qr(Xa(e, t), n)
                }),
                (vr.flatten = wa),
                (vr.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? qr(e, O) : []
                }),
                (vr.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length)
                    ? qr(e, (t = t === i ? 1 : Gs(t)))
                    : []
                }),
                (vr.flip = function (e) {
                  return Ao(e, E)
                }),
                (vr.flow = Nu),
                (vr.flowRight = _u),
                (vr.fromPairs = function (e) {
                  for (
                    var t = -1, n = null == e ? 0 : e.length, r = {};
                    ++t < n;

                  ) {
                    var i = e[t]
                    r[i[0]] = i[1]
                  }
                  return r
                }),
                (vr.functions = function (e) {
                  return null == e ? [] : Jr(e, au(e))
                }),
                (vr.functionsIn = function (e) {
                  return null == e ? [] : Jr(e, su(e))
                }),
                (vr.groupBy = Qa),
                (vr.initial = function (e) {
                  return (null == e ? 0 : e.length) ? Ri(e, 0, -1) : []
                }),
                (vr.intersection = Ca),
                (vr.intersectionBy = Ia),
                (vr.intersectionWith = ka),
                (vr.invert = ru),
                (vr.invertBy = iu),
                (vr.invokeMap = Ka),
                (vr.iteratee = Ou),
                (vr.keyBy = Ja),
                (vr.keys = au),
                (vr.keysIn = su),
                (vr.map = Xa),
                (vr.mapKeys = function (e, t) {
                  var n = {}
                  return (
                    (t = Bo(t, 3)),
                    Qr(e, function (e, r, i) {
                      Dr(n, t(e, r, i), e)
                    }),
                    n
                  )
                }),
                (vr.mapValues = function (e, t) {
                  var n = {}
                  return (
                    (t = Bo(t, 3)),
                    Qr(e, function (e, r, i) {
                      Dr(n, r, t(e, r, i))
                    }),
                    n
                  )
                }),
                (vr.matches = function (e) {
                  return vi(Vr(e, d))
                }),
                (vr.matchesProperty = function (e, t) {
                  return mi(e, Vr(t, d))
                }),
                (vr.memoize = cs),
                (vr.merge = uu),
                (vr.mergeWith = cu),
                (vr.method = Du),
                (vr.methodOf = Lu),
                (vr.mixin = Fu),
                (vr.negate = ls),
                (vr.nthArg = function (e) {
                  return (
                    (e = Gs(e)),
                    xi(function (t) {
                      return yi(t, e)
                    })
                  )
                }),
                (vr.omit = lu),
                (vr.omitBy = function (e, t) {
                  return du(e, ls(Bo(t)))
                }),
                (vr.once = function (e) {
                  return rs(2, e)
                }),
                (vr.orderBy = function (e, t, n, r) {
                  return null == e
                    ? []
                    : (bs(t) || (t = null == t ? [] : [t]),
                      bs((n = r ? i : n)) || (n = null == n ? [] : [n]),
                      bi(e, t, n))
                }),
                (vr.over = Bu),
                (vr.overArgs = fs),
                (vr.overEvery = ju),
                (vr.overSome = Pu),
                (vr.partial = ds),
                (vr.partialRight = hs),
                (vr.partition = $a),
                (vr.pick = fu),
                (vr.pickBy = du),
                (vr.property = Wu),
                (vr.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? i : Xr(e, t)
                  }
                }),
                (vr.pull = Ea),
                (vr.pullAll = Aa),
                (vr.pullAllBy = function (e, t, n) {
                  return e && e.length && t && t.length ? Si(e, t, Bo(n, 2)) : e
                }),
                (vr.pullAllWith = function (e, t, n) {
                  return e && e.length && t && t.length ? Si(e, t, i, n) : e
                }),
                (vr.pullAt = Ma),
                (vr.range = Uu),
                (vr.rangeRight = Gu),
                (vr.rearg = ps),
                (vr.reject = function (e, t) {
                  return (bs(e) ? un : Zr)(e, ls(Bo(t, 3)))
                }),
                (vr.remove = function (e, t) {
                  var n = []
                  if (!e || !e.length) return n
                  var r = -1,
                    i = [],
                    o = e.length
                  for (t = Bo(t, 3); ++r < o; ) {
                    var a = e[r]
                    t(a, r, e) && (n.push(a), i.push(r))
                  }
                  return Ci(e, i), n
                }),
                (vr.rest = function (e, t) {
                  if ("function" != typeof e) throw new it(s)
                  return xi(e, (t = t === i ? t : Gs(t)))
                }),
                (vr.reverse = Ta),
                (vr.sampleSize = function (e, t, n) {
                  return (
                    (t = (n ? Qo(e, t, n) : t === i) ? 1 : Gs(t)),
                    (bs(e) ? Ar : Ai)(e, t)
                  )
                }),
                (vr.set = function (e, t, n) {
                  return null == e ? e : Mi(e, t, n)
                }),
                (vr.setWith = function (e, t, n, r) {
                  return (
                    (r = "function" == typeof r ? r : i),
                    null == e ? e : Mi(e, t, n, r)
                  )
                }),
                (vr.shuffle = function (e) {
                  return (bs(e) ? Mr : _i)(e)
                }),
                (vr.slice = function (e, t, n) {
                  var r = null == e ? 0 : e.length
                  return r
                    ? (n && "number" != typeof n && Qo(e, t, n)
                        ? ((t = 0), (n = r))
                        : ((t = null == t ? 0 : Gs(t)),
                          (n = n === i ? r : Gs(n))),
                      Ri(e, t, n))
                    : []
                }),
                (vr.sortBy = es),
                (vr.sortedUniq = function (e) {
                  return e && e.length ? Fi(e) : []
                }),
                (vr.sortedUniqBy = function (e, t) {
                  return e && e.length ? Fi(e, Bo(t, 2)) : []
                }),
                (vr.split = function (e, t, n) {
                  return (
                    n && "number" != typeof n && Qo(e, t, n) && (t = n = i),
                    (n = n === i ? V : n >>> 0)
                      ? (e = Hs(e)) &&
                        ("string" == typeof t || (null != t && !Ds(t))) &&
                        !(t = Bi(t)) &&
                        Vn(e)
                        ? Ki(zn(e), 0, n)
                        : e.split(t, n)
                      : []
                  )
                }),
                (vr.spread = function (e, t) {
                  if ("function" != typeof e) throw new it(s)
                  return (
                    (t = null == t ? 0 : kn(Gs(t), 0)),
                    xi(function (n) {
                      var r = n[t],
                        i = Ki(n, 0, t)
                      return r && dn(i, r), nn(e, this, i)
                    })
                  )
                }),
                (vr.tail = function (e) {
                  var t = null == e ? 0 : e.length
                  return t ? Ri(e, 1, t) : []
                }),
                (vr.take = function (e, t, n) {
                  return e && e.length
                    ? Ri(e, 0, (t = n || t === i ? 1 : Gs(t)) < 0 ? 0 : t)
                    : []
                }),
                (vr.takeRight = function (e, t, n) {
                  var r = null == e ? 0 : e.length
                  return r
                    ? Ri(
                        e,
                        (t = r - (t = n || t === i ? 1 : Gs(t))) < 0 ? 0 : t,
                        r
                      )
                    : []
                }),
                (vr.takeRightWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3), !1, !0) : []
                }),
                (vr.takeWhile = function (e, t) {
                  return e && e.length ? Ui(e, Bo(t, 3)) : []
                }),
                (vr.tap = function (e, t) {
                  return t(e), e
                }),
                (vr.throttle = function (e, t, n) {
                  var r = !0,
                    i = !0
                  if ("function" != typeof e) throw new it(s)
                  return (
                    Ts(n) &&
                      ((r = "leading" in n ? !!n.leading : r),
                      (i = "trailing" in n ? !!n.trailing : i)),
                    as(e, t, { leading: r, maxWait: t, trailing: i })
                  )
                }),
                (vr.thru = Ua),
                (vr.toArray = Ws),
                (vr.toPairs = hu),
                (vr.toPairsIn = pu),
                (vr.toPath = function (e) {
                  return bs(e) ? fn(e, da) : Vs(e) ? [e] : io(fa(Hs(e)))
                }),
                (vr.toPlainObject = qs),
                (vr.transform = function (e, t, n) {
                  var r = bs(e),
                    i = r || Is(e) || Bs(e)
                  if (((t = Bo(t, 4)), null == n)) {
                    var o = e && e.constructor
                    n = i ? (r ? new o() : []) : Ts(e) && Es(o) ? mr(St(e)) : {}
                  }
                  return (
                    (i ? on : Qr)(e, function (e, r, i) {
                      return t(n, e, r, i)
                    }),
                    n
                  )
                }),
                (vr.unary = function (e) {
                  return ns(e, 1)
                }),
                (vr.union = Na),
                (vr.unionBy = _a),
                (vr.unionWith = Ra),
                (vr.uniq = function (e) {
                  return e && e.length ? ji(e) : []
                }),
                (vr.uniqBy = function (e, t) {
                  return e && e.length ? ji(e, Bo(t, 2)) : []
                }),
                (vr.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : i),
                    e && e.length ? ji(e, i, t) : []
                  )
                }),
                (vr.unset = function (e, t) {
                  return null == e || Pi(e, t)
                }),
                (vr.unzip = Oa),
                (vr.unzipWith = Da),
                (vr.update = function (e, t, n) {
                  return null == e ? e : Wi(e, t, Hi(n))
                }),
                (vr.updateWith = function (e, t, n, r) {
                  return (
                    (r = "function" == typeof r ? r : i),
                    null == e ? e : Wi(e, t, Hi(n), r)
                  )
                }),
                (vr.values = vu),
                (vr.valuesIn = function (e) {
                  return null == e ? [] : Nn(e, su(e))
                }),
                (vr.without = La),
                (vr.words = Eu),
                (vr.wrap = function (e, t) {
                  return ds(Hi(t), e)
                }),
                (vr.xor = Fa),
                (vr.xorBy = Va),
                (vr.xorWith = Ba),
                (vr.zip = ja),
                (vr.zipObject = function (e, t) {
                  return Zi(e || [], t || [], Nr)
                }),
                (vr.zipObjectDeep = function (e, t) {
                  return Zi(e || [], t || [], Mi)
                }),
                (vr.zipWith = Pa),
                (vr.entries = hu),
                (vr.entriesIn = pu),
                (vr.extend = Qs),
                (vr.extendWith = Ks),
                Fu(vr, vr),
                (vr.add = qu),
                (vr.attempt = Au),
                (vr.camelCase = mu),
                (vr.capitalize = gu),
                (vr.ceil = Hu),
                (vr.clamp = function (e, t, n) {
                  return (
                    n === i && ((n = t), (t = i)),
                    n !== i && (n = (n = Zs(n)) === n ? n : 0),
                    t !== i && (t = (t = Zs(t)) === t ? t : 0),
                    Fr(Zs(e), t, n)
                  )
                }),
                (vr.clone = function (e) {
                  return Vr(e, p)
                }),
                (vr.cloneDeep = function (e) {
                  return Vr(e, d | p)
                }),
                (vr.cloneDeepWith = function (e, t) {
                  return Vr(e, d | p, (t = "function" == typeof t ? t : i))
                }),
                (vr.cloneWith = function (e, t) {
                  return Vr(e, p, (t = "function" == typeof t ? t : i))
                }),
                (vr.conformsTo = function (e, t) {
                  return null == t || Br(e, t, au(t))
                }),
                (vr.deburr = yu),
                (vr.defaultTo = function (e, t) {
                  return null == e || e !== e ? t : e
                }),
                (vr.divide = Yu),
                (vr.endsWith = function (e, t, n) {
                  ;(e = Hs(e)), (t = Bi(t))
                  var r = e.length,
                    o = (n = n === i ? r : Fr(Gs(n), 0, r))
                  return (n -= t.length) >= 0 && e.slice(n, o) == t
                }),
                (vr.eq = vs),
                (vr.escape = function (e) {
                  return (e = Hs(e)) && Ee.test(e) ? e.replace(ke, Ln) : e
                }),
                (vr.escapeRegExp = function (e) {
                  return (e = Hs(e)) && De.test(e) ? e.replace(Oe, "\\$&") : e
                }),
                (vr.every = function (e, t, n) {
                  var r = bs(e) ? sn : Gr
                  return n && Qo(e, t, n) && (t = i), r(e, Bo(t, 3))
                }),
                (vr.find = Za),
                (vr.findIndex = ya),
                (vr.findKey = function (e, t) {
                  return gn(e, Bo(t, 3), Qr)
                }),
                (vr.findLast = qa),
                (vr.findLastIndex = ba),
                (vr.findLastKey = function (e, t) {
                  return gn(e, Bo(t, 3), Kr)
                }),
                (vr.floor = Qu),
                (vr.forEach = Ha),
                (vr.forEachRight = Ya),
                (vr.forIn = function (e, t) {
                  return null == e ? e : Hr(e, Bo(t, 3), su)
                }),
                (vr.forInRight = function (e, t) {
                  return null == e ? e : Yr(e, Bo(t, 3), su)
                }),
                (vr.forOwn = function (e, t) {
                  return e && Qr(e, Bo(t, 3))
                }),
                (vr.forOwnRight = function (e, t) {
                  return e && Kr(e, Bo(t, 3))
                }),
                (vr.get = tu),
                (vr.gt = ms),
                (vr.gte = gs),
                (vr.has = function (e, t) {
                  return null != e && Zo(e, t, ni)
                }),
                (vr.hasIn = nu),
                (vr.head = Sa),
                (vr.identity = Ru),
                (vr.includes = function (e, t, n, r) {
                  ;(e = Ss(e) ? e : vu(e)), (n = n && !r ? Gs(n) : 0)
                  var i = e.length
                  return (
                    n < 0 && (n = kn(i + n, 0)),
                    Fs(e)
                      ? n <= i && e.indexOf(t, n) > -1
                      : !!i && bn(e, t, n) > -1
                  )
                }),
                (vr.indexOf = function (e, t, n) {
                  var r = null == e ? 0 : e.length
                  if (!r) return -1
                  var i = null == n ? 0 : Gs(n)
                  return i < 0 && (i = kn(r + i, 0)), bn(e, t, i)
                }),
                (vr.inRange = function (e, t, n) {
                  return (
                    (t = Us(t)),
                    n === i ? ((n = t), (t = 0)) : (n = Us(n)),
                    (function (e, t, n) {
                      return e >= Yn(t, n) && e < kn(t, n)
                    })((e = Zs(e)), t, n)
                  )
                }),
                (vr.invoke = ou),
                (vr.isArguments = ys),
                (vr.isArray = bs),
                (vr.isArrayBuffer = ws),
                (vr.isArrayLike = Ss),
                (vr.isArrayLikeObject = Cs),
                (vr.isBoolean = function (e) {
                  return !0 === e || !1 === e || (Ns(e) && ei(e) == z)
                }),
                (vr.isBuffer = Is),
                (vr.isDate = ks),
                (vr.isElement = function (e) {
                  return Ns(e) && 1 === e.nodeType && !Os(e)
                }),
                (vr.isEmpty = function (e) {
                  if (null == e) return !0
                  if (
                    Ss(e) &&
                    (bs(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      Is(e) ||
                      Bs(e) ||
                      ys(e))
                  )
                    return !e.length
                  var t = zo(e)
                  if (t == K || t == re) return !e.size
                  if ($o(e)) return !fi(e).length
                  for (var n in e) if (lt.call(e, n)) return !1
                  return !0
                }),
                (vr.isEqual = function (e, t) {
                  return si(e, t)
                }),
                (vr.isEqualWith = function (e, t, n) {
                  var r = (n = "function" == typeof n ? n : i) ? n(e, t) : i
                  return r === i ? si(e, t, i, n) : !!r
                }),
                (vr.isError = xs),
                (vr.isFinite = function (e) {
                  return "number" == typeof e && Yt(e)
                }),
                (vr.isFunction = Es),
                (vr.isInteger = As),
                (vr.isLength = Ms),
                (vr.isMap = _s),
                (vr.isMatch = function (e, t) {
                  return e === t || ui(e, t, Po(t))
                }),
                (vr.isMatchWith = function (e, t, n) {
                  return (
                    (n = "function" == typeof n ? n : i), ui(e, t, Po(t), n)
                  )
                }),
                (vr.isNaN = function (e) {
                  return Rs(e) && e != +e
                }),
                (vr.isNative = function (e) {
                  if (Xo(e)) throw new Fe(a)
                  return ci(e)
                }),
                (vr.isNil = function (e) {
                  return null == e
                }),
                (vr.isNull = function (e) {
                  return null === e
                }),
                (vr.isNumber = Rs),
                (vr.isObject = Ts),
                (vr.isObjectLike = Ns),
                (vr.isPlainObject = Os),
                (vr.isRegExp = Ds),
                (vr.isSafeInteger = function (e) {
                  return As(e) && e >= -D && e <= D
                }),
                (vr.isSet = Ls),
                (vr.isString = Fs),
                (vr.isSymbol = Vs),
                (vr.isTypedArray = Bs),
                (vr.isUndefined = function (e) {
                  return e === i
                }),
                (vr.isWeakMap = function (e) {
                  return Ns(e) && zo(e) == se
                }),
                (vr.isWeakSet = function (e) {
                  return Ns(e) && ei(e) == ue
                }),
                (vr.join = function (e, t) {
                  return null == e ? "" : Qt.call(e, t)
                }),
                (vr.kebabCase = bu),
                (vr.last = xa),
                (vr.lastIndexOf = function (e, t, n) {
                  var r = null == e ? 0 : e.length
                  if (!r) return -1
                  var o = r
                  return (
                    n !== i &&
                      (o = (o = Gs(n)) < 0 ? kn(r + o, 0) : Yn(o, r - 1)),
                    t === t
                      ? (function (e, t, n) {
                          for (var r = n + 1; r--; ) if (e[r] === t) return r
                          return r
                        })(e, t, o)
                      : yn(e, Sn, o, !0)
                  )
                }),
                (vr.lowerCase = wu),
                (vr.lowerFirst = Su),
                (vr.lt = js),
                (vr.lte = Ps),
                (vr.max = function (e) {
                  return e && e.length ? zr(e, Ru, ti) : i
                }),
                (vr.maxBy = function (e, t) {
                  return e && e.length ? zr(e, Bo(t, 2), ti) : i
                }),
                (vr.mean = function (e) {
                  return Cn(e, Ru)
                }),
                (vr.meanBy = function (e, t) {
                  return Cn(e, Bo(t, 2))
                }),
                (vr.min = function (e) {
                  return e && e.length ? zr(e, Ru, hi) : i
                }),
                (vr.minBy = function (e, t) {
                  return e && e.length ? zr(e, Bo(t, 2), hi) : i
                }),
                (vr.stubArray = zu),
                (vr.stubFalse = Zu),
                (vr.stubObject = function () {
                  return {}
                }),
                (vr.stubString = function () {
                  return ""
                }),
                (vr.stubTrue = function () {
                  return !0
                }),
                (vr.multiply = Ku),
                (vr.nth = function (e, t) {
                  return e && e.length ? yi(e, Gs(t)) : i
                }),
                (vr.noConflict = function () {
                  return zt._ === this && (zt._ = vt), this
                }),
                (vr.noop = Vu),
                (vr.now = ts),
                (vr.pad = function (e, t, n) {
                  e = Hs(e)
                  var r = (t = Gs(t)) ? Gn(e) : 0
                  if (!t || r >= t) return e
                  var i = (t - r) / 2
                  return wo(Gt(i), n) + e + wo(Ut(i), n)
                }),
                (vr.padEnd = function (e, t, n) {
                  e = Hs(e)
                  var r = (t = Gs(t)) ? Gn(e) : 0
                  return t && r < t ? e + wo(t - r, n) : e
                }),
                (vr.padStart = function (e, t, n) {
                  e = Hs(e)
                  var r = (t = Gs(t)) ? Gn(e) : 0
                  return t && r < t ? wo(t - r, n) + e : e
                }),
                (vr.parseInt = function (e, t, n) {
                  return (
                    n || null == t ? (t = 0) : t && (t = +t),
                    Kn(Hs(e).replace(Le, ""), t || 0)
                  )
                }),
                (vr.random = function (e, t, n) {
                  if (
                    (n && "boolean" != typeof n && Qo(e, t, n) && (t = n = i),
                    n === i &&
                      ("boolean" == typeof t
                        ? ((n = t), (t = i))
                        : "boolean" == typeof e && ((n = e), (e = i))),
                    e === i && t === i
                      ? ((e = 0), (t = 1))
                      : ((e = Us(e)),
                        t === i ? ((t = e), (e = 0)) : (t = Us(t))),
                    e > t)
                  ) {
                    var r = e
                    ;(e = t), (t = r)
                  }
                  if (n || e % 1 || t % 1) {
                    var o = Jn()
                    return Yn(
                      e + o * (t - e + Pt("1e-" + ((o + "").length - 1))),
                      t
                    )
                  }
                  return Ii(e, t)
                }),
                (vr.reduce = function (e, t, n) {
                  var r = bs(e) ? hn : xn,
                    i = arguments.length < 3
                  return r(e, Bo(t, 4), n, i, Wr)
                }),
                (vr.reduceRight = function (e, t, n) {
                  var r = bs(e) ? pn : xn,
                    i = arguments.length < 3
                  return r(e, Bo(t, 4), n, i, Ur)
                }),
                (vr.repeat = function (e, t, n) {
                  return (
                    (t = (n ? Qo(e, t, n) : t === i) ? 1 : Gs(t)), ki(Hs(e), t)
                  )
                }),
                (vr.replace = function () {
                  var e = arguments,
                    t = Hs(e[0])
                  return e.length < 3 ? t : t.replace(e[1], e[2])
                }),
                (vr.result = function (e, t, n) {
                  var r = -1,
                    o = (t = Yi(t, e)).length
                  for (o || ((o = 1), (e = i)); ++r < o; ) {
                    var a = null == e ? i : e[da(t[r])]
                    a === i && ((r = o), (a = n)), (e = Es(a) ? a.call(e) : a)
                  }
                  return e
                }),
                (vr.round = Ju),
                (vr.runInContext = e),
                (vr.sample = function (e) {
                  return (bs(e) ? Er : Ei)(e)
                }),
                (vr.size = function (e) {
                  if (null == e) return 0
                  if (Ss(e)) return Fs(e) ? Gn(e) : e.length
                  var t = zo(e)
                  return t == K || t == re ? e.size : fi(e).length
                }),
                (vr.snakeCase = Cu),
                (vr.some = function (e, t, n) {
                  var r = bs(e) ? vn : Oi
                  return n && Qo(e, t, n) && (t = i), r(e, Bo(t, 3))
                }),
                (vr.sortedIndex = function (e, t) {
                  return Di(e, t)
                }),
                (vr.sortedIndexBy = function (e, t, n) {
                  return Li(e, t, Bo(n, 2))
                }),
                (vr.sortedIndexOf = function (e, t) {
                  var n = null == e ? 0 : e.length
                  if (n) {
                    var r = Di(e, t)
                    if (r < n && vs(e[r], t)) return r
                  }
                  return -1
                }),
                (vr.sortedLastIndex = function (e, t) {
                  return Di(e, t, !0)
                }),
                (vr.sortedLastIndexBy = function (e, t, n) {
                  return Li(e, t, Bo(n, 2), !0)
                }),
                (vr.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var n = Di(e, t, !0) - 1
                    if (vs(e[n], t)) return n
                  }
                  return -1
                }),
                (vr.startCase = Iu),
                (vr.startsWith = function (e, t, n) {
                  return (
                    (e = Hs(e)),
                    (n = null == n ? 0 : Fr(Gs(n), 0, e.length)),
                    (t = Bi(t)),
                    e.slice(n, n + t.length) == t
                  )
                }),
                (vr.subtract = Xu),
                (vr.sum = function (e) {
                  return e && e.length ? En(e, Ru) : 0
                }),
                (vr.sumBy = function (e, t) {
                  return e && e.length ? En(e, Bo(t, 2)) : 0
                }),
                (vr.template = function (e, t, n) {
                  var r = vr.templateSettings
                  n && Qo(e, t, n) && (t = i),
                    (e = Hs(e)),
                    (t = Ks({}, t, r, Mo))
                  var o,
                    a,
                    s = Ks({}, t.imports, r.imports, Mo),
                    c = au(s),
                    l = Nn(s, c),
                    f = 0,
                    d = t.interpolate || Je,
                    h = "__p += '",
                    p = nt(
                      (t.escape || Je).source +
                        "|" +
                        d.source +
                        "|" +
                        (d === Te ? Ge : Je).source +
                        "|" +
                        (t.evaluate || Je).source +
                        "|$",
                      "g"
                    ),
                    v =
                      "//# sourceURL=" +
                      (lt.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++Ft + "]") +
                      "\n"
                  e.replace(p, function (t, n, r, i, s, u) {
                    return (
                      r || (r = i),
                      (h += e.slice(f, u).replace(Xe, Fn)),
                      n && ((o = !0), (h += "' +\n__e(" + n + ") +\n'")),
                      s && ((a = !0), (h += "';\n" + s + ";\n__p += '")),
                      r &&
                        (h +=
                          "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                      (f = u + t.length),
                      t
                    )
                  }),
                    (h += "';\n")
                  var m = lt.call(t, "variable") && t.variable
                  if (m) {
                    if (We.test(m)) throw new Fe(u)
                  } else h = "with (obj) {\n" + h + "\n}\n"
                  ;(h = (a ? h.replace(we, "") : h)
                    .replace(Se, "$1")
                    .replace(Ce, "$1;")),
                    (h =
                      "function(" +
                      (m || "obj") +
                      ") {\n" +
                      (m ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (o ? ", __e = _.escape" : "") +
                      (a
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      h +
                      "return __p\n}")
                  var g = Au(function () {
                    return $e(c, v + "return " + h).apply(i, l)
                  })
                  if (((g.source = h), xs(g))) throw g
                  return g
                }),
                (vr.times = function (e, t) {
                  if ((e = Gs(e)) < 1 || e > D) return []
                  var n = V,
                    r = Yn(e, V)
                  ;(t = Bo(t)), (e -= V)
                  for (var i = An(r, t); ++n < e; ) t(n)
                  return i
                }),
                (vr.toFinite = Us),
                (vr.toInteger = Gs),
                (vr.toLength = zs),
                (vr.toLower = function (e) {
                  return Hs(e).toLowerCase()
                }),
                (vr.toNumber = Zs),
                (vr.toSafeInteger = function (e) {
                  return e ? Fr(Gs(e), -D, D) : 0 === e ? e : 0
                }),
                (vr.toString = Hs),
                (vr.toUpper = function (e) {
                  return Hs(e).toUpperCase()
                }),
                (vr.trim = function (e, t, n) {
                  if ((e = Hs(e)) && (n || t === i)) return Mn(e)
                  if (!e || !(t = Bi(t))) return e
                  var r = zn(e),
                    o = zn(t)
                  return Ki(r, Rn(r, o), On(r, o) + 1).join("")
                }),
                (vr.trimEnd = function (e, t, n) {
                  if ((e = Hs(e)) && (n || t === i))
                    return e.slice(0, Zn(e) + 1)
                  if (!e || !(t = Bi(t))) return e
                  var r = zn(e)
                  return Ki(r, 0, On(r, zn(t)) + 1).join("")
                }),
                (vr.trimStart = function (e, t, n) {
                  if ((e = Hs(e)) && (n || t === i)) return e.replace(Le, "")
                  if (!e || !(t = Bi(t))) return e
                  var r = zn(e)
                  return Ki(r, Rn(r, zn(t))).join("")
                }),
                (vr.truncate = function (e, t) {
                  var n = A,
                    r = M
                  if (Ts(t)) {
                    var o = "separator" in t ? t.separator : o
                    ;(n = "length" in t ? Gs(t.length) : n),
                      (r = "omission" in t ? Bi(t.omission) : r)
                  }
                  var a = (e = Hs(e)).length
                  if (Vn(e)) {
                    var s = zn(e)
                    a = s.length
                  }
                  if (n >= a) return e
                  var u = n - Gn(r)
                  if (u < 1) return r
                  var c = s ? Ki(s, 0, u).join("") : e.slice(0, u)
                  if (o === i) return c + r
                  if ((s && (u += c.length - u), Ds(o))) {
                    if (e.slice(u).search(o)) {
                      var l,
                        f = c
                      for (
                        o.global || (o = nt(o.source, Hs(ze.exec(o)) + "g")),
                          o.lastIndex = 0;
                        (l = o.exec(f));

                      )
                        var d = l.index
                      c = c.slice(0, d === i ? u : d)
                    }
                  } else if (e.indexOf(Bi(o), u) != u) {
                    var h = c.lastIndexOf(o)
                    h > -1 && (c = c.slice(0, h))
                  }
                  return c + r
                }),
                (vr.unescape = function (e) {
                  return (e = Hs(e)) && xe.test(e) ? e.replace(Ie, qn) : e
                }),
                (vr.uniqueId = function (e) {
                  var t = ++ft
                  return Hs(e) + t
                }),
                (vr.upperCase = ku),
                (vr.upperFirst = xu),
                (vr.each = Ha),
                (vr.eachRight = Ya),
                (vr.first = Sa),
                Fu(
                  vr,
                  (function () {
                    var e = {}
                    return (
                      Qr(vr, function (t, n) {
                        lt.call(vr.prototype, n) || (e[n] = t)
                      }),
                      e
                    )
                  })(),
                  { chain: !1 }
                ),
                (vr.VERSION = "4.17.21"),
                on(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    vr[e].placeholder = vr
                  }
                ),
                on(["drop", "take"], function (e, t) {
                  ;(br.prototype[e] = function (n) {
                    n = n === i ? 1 : kn(Gs(n), 0)
                    var r =
                      this.__filtered__ && !t ? new br(this) : this.clone()
                    return (
                      r.__filtered__
                        ? (r.__takeCount__ = Yn(n, r.__takeCount__))
                        : r.__views__.push({
                            size: Yn(n, V),
                            type: e + (r.__dir__ < 0 ? "Right" : ""),
                          }),
                      r
                    )
                  }),
                    (br.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse()
                    })
                }),
                on(["filter", "map", "takeWhile"], function (e, t) {
                  var n = t + 1,
                    r = n == _ || 3 == n
                  br.prototype[e] = function (e) {
                    var t = this.clone()
                    return (
                      t.__iteratees__.push({ iteratee: Bo(e, 3), type: n }),
                      (t.__filtered__ = t.__filtered__ || r),
                      t
                    )
                  }
                }),
                on(["head", "last"], function (e, t) {
                  var n = "take" + (t ? "Right" : "")
                  br.prototype[e] = function () {
                    return this[n](1).value()[0]
                  }
                }),
                on(["initial", "tail"], function (e, t) {
                  var n = "drop" + (t ? "" : "Right")
                  br.prototype[e] = function () {
                    return this.__filtered__ ? new br(this) : this[n](1)
                  }
                }),
                (br.prototype.compact = function () {
                  return this.filter(Ru)
                }),
                (br.prototype.find = function (e) {
                  return this.filter(e).head()
                }),
                (br.prototype.findLast = function (e) {
                  return this.reverse().find(e)
                }),
                (br.prototype.invokeMap = xi(function (e, t) {
                  return "function" == typeof e
                    ? new br(this)
                    : this.map(function (n) {
                        return oi(n, e, t)
                      })
                })),
                (br.prototype.reject = function (e) {
                  return this.filter(ls(Bo(e)))
                }),
                (br.prototype.slice = function (e, t) {
                  e = Gs(e)
                  var n = this
                  return n.__filtered__ && (e > 0 || t < 0)
                    ? new br(n)
                    : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                      t !== i &&
                        (n = (t = Gs(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                      n)
                }),
                (br.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse()
                }),
                (br.prototype.toArray = function () {
                  return this.take(V)
                }),
                Qr(br.prototype, function (e, t) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(t),
                    r = /^(?:head|last)$/.test(t),
                    o = vr[r ? "take" + ("last" == t ? "Right" : "") : t],
                    a = r || /^find/.test(t)
                  o &&
                    (vr.prototype[t] = function () {
                      var t = this.__wrapped__,
                        s = r ? [1] : arguments,
                        u = t instanceof br,
                        c = s[0],
                        l = u || bs(t),
                        f = function (e) {
                          var t = o.apply(vr, dn([e], s))
                          return r && d ? t[0] : t
                        }
                      l &&
                        n &&
                        "function" == typeof c &&
                        1 != c.length &&
                        (u = l = !1)
                      var d = this.__chain__,
                        h = !!this.__actions__.length,
                        p = a && !d,
                        v = u && !h
                      if (!a && l) {
                        t = v ? t : new br(this)
                        var m = e.apply(t, s)
                        return (
                          m.__actions__.push({
                            func: Ua,
                            args: [f],
                            thisArg: i,
                          }),
                          new yr(m, d)
                        )
                      }
                      return p && v
                        ? e.apply(this, s)
                        : ((m = this.thru(f)),
                          p ? (r ? m.value()[0] : m.value()) : m)
                    })
                }),
                on(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = ot[e],
                      n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(e)
                    vr.prototype[e] = function () {
                      var e = arguments
                      if (r && !this.__chain__) {
                        var i = this.value()
                        return t.apply(bs(i) ? i : [], e)
                      }
                      return this[n](function (n) {
                        return t.apply(bs(n) ? n : [], e)
                      })
                    }
                  }
                ),
                Qr(br.prototype, function (e, t) {
                  var n = vr[t]
                  if (n) {
                    var r = n.name + ""
                    lt.call(ar, r) || (ar[r] = []),
                      ar[r].push({ name: t, func: n })
                  }
                }),
                (ar[mo(i, y).name] = [{ name: "wrapper", func: i }]),
                (br.prototype.clone = function () {
                  var e = new br(this.__wrapped__)
                  return (
                    (e.__actions__ = io(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = io(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = io(this.__views__)),
                    e
                  )
                }),
                (br.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new br(this)
                    ;(e.__dir__ = -1), (e.__filtered__ = !0)
                  } else (e = this.clone()).__dir__ *= -1
                  return e
                }),
                (br.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    n = bs(e),
                    r = t < 0,
                    i = n ? e.length : 0,
                    o = (function (e, t, n) {
                      var r = -1,
                        i = n.length
                      for (; ++r < i; ) {
                        var o = n[r],
                          a = o.size
                        switch (o.type) {
                          case "drop":
                            e += a
                            break
                          case "dropRight":
                            t -= a
                            break
                          case "take":
                            t = Yn(t, e + a)
                            break
                          case "takeRight":
                            e = kn(e, t - a)
                        }
                      }
                      return { start: e, end: t }
                    })(0, i, this.__views__),
                    a = o.start,
                    s = o.end,
                    u = s - a,
                    c = r ? s : a - 1,
                    l = this.__iteratees__,
                    f = l.length,
                    d = 0,
                    h = Yn(u, this.__takeCount__)
                  if (!n || (!r && i == u && h == u))
                    return Gi(e, this.__actions__)
                  var p = []
                  e: for (; u-- && d < h; ) {
                    for (var v = -1, m = e[(c += t)]; ++v < f; ) {
                      var g = l[v],
                        y = g.iteratee,
                        b = g.type,
                        w = y(m)
                      if (b == R) m = w
                      else if (!w) {
                        if (b == _) continue e
                        break e
                      }
                    }
                    p[d++] = m
                  }
                  return p
                }),
                (vr.prototype.at = Ga),
                (vr.prototype.chain = function () {
                  return Wa(this)
                }),
                (vr.prototype.commit = function () {
                  return new yr(this.value(), this.__chain__)
                }),
                (vr.prototype.next = function () {
                  this.__values__ === i && (this.__values__ = Ws(this.value()))
                  var e = this.__index__ >= this.__values__.length
                  return {
                    done: e,
                    value: e ? i : this.__values__[this.__index__++],
                  }
                }),
                (vr.prototype.plant = function (e) {
                  for (var t, n = this; n instanceof gr; ) {
                    var r = pa(n)
                    ;(r.__index__ = 0),
                      (r.__values__ = i),
                      t ? (o.__wrapped__ = r) : (t = r)
                    var o = r
                    n = n.__wrapped__
                  }
                  return (o.__wrapped__ = e), t
                }),
                (vr.prototype.reverse = function () {
                  var e = this.__wrapped__
                  if (e instanceof br) {
                    var t = e
                    return (
                      this.__actions__.length && (t = new br(this)),
                      (t = t.reverse()).__actions__.push({
                        func: Ua,
                        args: [Ta],
                        thisArg: i,
                      }),
                      new yr(t, this.__chain__)
                    )
                  }
                  return this.thru(Ta)
                }),
                (vr.prototype.toJSON = vr.prototype.valueOf = vr.prototype.value = function () {
                  return Gi(this.__wrapped__, this.__actions__)
                }),
                (vr.prototype.first = vr.prototype.head),
                Et &&
                  (vr.prototype[Et] = function () {
                    return this
                  }),
                vr
              )
            })()
            ;(zt._ = Hn),
              (r = function () {
                return Hn
              }.call(t, n, t, e)) === i || (e.exports = r)
          }.call(this)
      },
      352: function (e) {
        window,
          (e.exports = (function (e) {
            var t = {}
            function n(r) {
              if (t[r]) return t[r].exports
              var i = (t[r] = { i: r, l: !1, exports: {} })
              return (
                e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              )
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: r })
              }),
              (n.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 })
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e
                if (4 & t && "object" == typeof e && e && e.__esModule) return e
                var r = Object.create(null)
                if (
                  (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var i in e)
                    n.d(
                      r,
                      i,
                      function (t) {
                        return e[t]
                      }.bind(null, i)
                    )
                return r
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default
                      }
                    : function () {
                        return e
                      }
                return n.d(t, "a", t), t
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
              }),
              (n.p = ""),
              n((n.s = 16))
            )
          })([
            function (e, t, n) {
              "use strict"
              n.d(t, "a", function () {
                return w
              }),
                n.d(t, "d", function () {
                  return k
                }),
                n.d(t, "b", function () {
                  return x
                }),
                n.d(t, "c", function () {
                  return E
                })
              var r = n(1),
                i = n.n(r),
                o = n(14),
                a = n.n(o),
                s = n(2),
                u = n.n(s),
                c = n(15),
                l = n.n(c)
              function f(e, t) {
                var n = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e)
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })),
                    n.push.apply(n, r)
                }
                return n
              }
              var d = Array.isArray,
                h = Object.keys
              function p(e) {
                return "function" == typeof e
              }
              function v(e) {
                return e instanceof HTMLElement || e instanceof Text
              }
              function m(e) {
                return "object" === u()(e) && !d(e)
              }
              function g(e) {
                if (!e || "string" == typeof e) return e
                var t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                      ? f(Object(n), !0).forEach(function (t) {
                          a()(e, t, n[t])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : f(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          )
                        })
                  }
                  return e
                })({}, e)
                return delete t.children, t
              }
              function y(e, t) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2]
                return (
                  !(!d(e) || !d(t)) &&
                  (n
                    ? e.length === t.length &&
                      !e.find(function (e) {
                        return !t.includes(e)
                      })
                    : e.some(function (e) {
                        return t.includes(e)
                      }))
                )
              }
              function b() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = []
                if (!h(e).length) return !0
                if (null === t || !h(t).length) return !1
                if (n) return l()(e, t)
                var i = h(e).filter(function (e) {
                  return h(t).includes(e)
                })
                return (
                  i.forEach(function (n) {
                    m(e[n]) && m(t[n]) && (r = r.concat(b(e[n], t[n]))),
                      (e[n] === t[n] || y(e[n], t[n])) && r.push(t)
                  }),
                  r.length > 0 &&
                    r.filter(function (e) {
                      return e
                    }).length === i.length
                )
              }
              function w(e) {
                var t,
                  n = { children: [] }
                if (!e) return n
                ;(n.name = p((t = e.type)) ? t.displayName || t.name : t),
                  (n.props = g(e.memoizedProps)),
                  (n.state = (function (e) {
                    if (e) return e.baseState || e
                  })(e.memoizedState))
                var r = e.child
                if (r)
                  for (n.children.push(r); r.sibling; )
                    n.children.push(r.sibling), (r = r.sibling)
                return (
                  (n.children = n.children.map(function (e) {
                    return w(e)
                  })),
                  p(e.type) &&
                  (function (e) {
                    return e.children.length > 1
                  })(n)
                    ? ((n.node = (function (e) {
                        return e.children
                          .map(function (e) {
                            return e.node
                          })
                          .filter(function (e) {
                            return !!e
                          })
                      })(n)),
                      (n.isFragment = !0))
                    : (n.node = (function (e) {
                        return v(e.stateNode)
                          ? e.stateNode
                          : e.child && v(e.child.stateNode)
                          ? e.child.stateNode
                          : null
                      })(e)),
                  n
                )
              }
              function S(e) {
                for (; e.length; ) {
                  var t = e.shift()
                  if (t.node) return t.node
                  t.children &&
                    Array.isArray(t.children) &&
                    e.push.apply(e, i()(t.children))
                }
              }
              function C(e, t) {
                for (var n = []; e.length; ) {
                  var r = e.shift().children
                  r &&
                    Array.isArray(r) &&
                    r.forEach(function (r) {
                      t(r) &&
                        (!r.node &&
                          Array.isArray(r.children) &&
                          (r.node = S(r.children.concat([]))),
                        n.push(r)),
                        e.push(r)
                    })
                }
                return n
              }
              function I(e, t) {
                var n = (function (e) {
                  if (e) {
                    var t = e.split("(")
                    return 1 === t.length
                      ? e
                      : t
                          .find(function (e) {
                            return e.includes(")")
                          })
                          .replace(/\)*/g, "")
                  }
                })(t)
                return new RegExp(
                  "^" +
                    e
                      .split("*")
                      .map(function (e) {
                        return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
                      })
                      .join(".+") +
                    "$"
                ).test(n)
              }
              function k(e, t) {
                var n = arguments.length > 3 ? arguments[3] : void 0
                return e.reduce(
                  function (e, t) {
                    return e.concat(
                      C(
                        e,
                        n && "function" == typeof n
                          ? n
                          : function (e) {
                              return "string" == typeof e.name
                                ? I(t, e.name)
                                : null !== e.name &&
                                    "object" === u()(e.name) &&
                                    I(t, e.name.displayName)
                            }
                      )
                    )
                  },
                  [t]
                )
              }
              function x(e, t, n) {
                var r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3]
                return p(n)
                  ? (console.warn(
                      "Functions are not supported as filter matchers"
                    ),
                    [])
                  : e.filter(function (e) {
                      return (
                        (m(n) && b(n, e[t], r)) ||
                        (d(n) && y(n, e[t], r)) ||
                        e[t] === n
                      )
                    })
              }
              function E(e) {
                if (e.hasOwnProperty("_reactRootContainer"))
                  return e._reactRootContainer._internalRoot.current
                var t = Object.keys(e).find(function (e) {
                  return (
                    e.startsWith("__reactInternalInstance") ||
                    e.startsWith("__reactFiber") ||
                    e.startsWith("__reactContainer")
                  )
                })
                return t ? e[t] : void 0
              }
            },
            function (e, t, n) {
              var r = n(17),
                i = n(18),
                o = n(19),
                a = n(20)
              ;(e.exports = function (e) {
                return r(e) || i(e) || o(e) || a()
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              function n(t) {
                return (
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? ((e.exports = n = function (e) {
                        return typeof e
                      }),
                      (e.exports.default = e.exports),
                      (e.exports.__esModule = !0))
                    : ((e.exports = n = function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e
                      }),
                      (e.exports.default = e.exports),
                      (e.exports.__esModule = !0)),
                  n(t)
                )
              }
              ;(e.exports = n),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              function n(t) {
                return (
                  (e.exports = n = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                      }),
                  (e.exports.default = e.exports),
                  (e.exports.__esModule = !0),
                  n(t)
                )
              }
              ;(e.exports = n),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              ;(e.exports = function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n]
                  ;(r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
              }
              ;(e.exports = function (e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              function n(t, r) {
                return (
                  (e.exports = n =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e
                    }),
                  (e.exports.default = e.exports),
                  (e.exports.__esModule = !0),
                  n(t, r)
                )
              }
              ;(e.exports = n),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t, n) {
              var r = n(6)
              ;(e.exports = function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  )
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && r(e, t)
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t, n) {
              var r = n(3),
                i = n(6),
                o = n(22),
                a = n(23)
              function s(t) {
                var n = "function" == typeof Map ? new Map() : void 0
                return (
                  (e.exports = s = function (e) {
                    if (null === e || !o(e)) return e
                    if ("function" != typeof e)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      )
                    if (void 0 !== n) {
                      if (n.has(e)) return n.get(e)
                      n.set(e, t)
                    }
                    function t() {
                      return a(e, arguments, r(this).constructor)
                    }
                    return (
                      (t.prototype = Object.create(e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                      i(t, e)
                    )
                  }),
                  (e.exports.default = e.exports),
                  (e.exports.__esModule = !0),
                  s(t)
                )
              }
              ;(e.exports = s),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              var n
              n = (function () {
                return this
              })()
              try {
                n = n || new Function("return this")()
              } catch (e) {
                "object" == typeof window && (n = window)
              }
              e.exports = n
            },
            function (e, t) {
              ;(e.exports = function (e, t) {
                ;(null == t || t > e.length) && (t = e.length)
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
                return r
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t, n) {
              "use strict"
              ;(function (e) {
                n.d(t, "a", function () {
                  return i
                })
                var r = n(0)
                function i() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 5e3,
                    n = arguments.length > 1 ? arguments[1] : void 0
                  if (e.isReactLoaded)
                    return Promise.resolve("React already loaded")
                  var i = function () {
                    var e = document.createTreeWalker(document)
                    if (n) return document.querySelector(n)
                    for (; e.nextNode(); )
                      if (e.currentNode.hasOwnProperty("_reactRootContainer"))
                        return e.currentNode
                  }
                  return new Promise(function (n, o) {
                    var a = !1,
                      s = null
                    !(function t() {
                      var o = i()
                      if (
                        o &&
                        ((e.isReactLoaded = !0),
                        (e.rootReactElement = Object(r.c)(o)),
                        e.rootReactElement)
                      )
                        return clearTimeout(s), n()
                      a || setTimeout(t, 200)
                    })(),
                      (s = setTimeout(function () {
                        ;(a = !0), o("Timed out")
                      }, t))
                  })
                }
              }.call(this, n(9)))
            },
            function (e, t, n) {
              "use strict"
              n.d(t, "a", function () {
                return S
              })
              var r = n(1),
                i = n.n(r),
                o = n(4),
                a = n.n(o),
                s = n(5),
                u = n.n(s),
                c = n(7),
                l = n.n(c),
                f = n(13),
                d = n.n(f),
                h = n(3),
                p = n.n(h),
                v = n(8),
                m = n.n(v),
                g = n(0)
              function y(e) {
                var t = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1
                  if (Reflect.construct.sham) return !1
                  if ("function" == typeof Proxy) return !0
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    )
                  } catch (e) {
                    return !1
                  }
                })()
                return function () {
                  var n,
                    r = p()(e)
                  if (t) {
                    var i = p()(this).constructor
                    n = Reflect.construct(r, arguments, i)
                  } else n = r.apply(this, arguments)
                  return d()(this, n)
                }
              }
              var b = (function (e) {
                  l()(n, e)
                  var t = y(n)
                  function n(e) {
                    return (
                      a()(this, n),
                      e || (e = []),
                      t.call.apply(t, [this].concat(i()(e)))
                    )
                  }
                  return (
                    u()(n, [
                      {
                        key: "byProps",
                        value: function (e) {
                          var t = (arguments.length > 1 &&
                          void 0 !== arguments[1]
                            ? arguments[1]
                            : { exact: !1 }
                          ).exact
                          return new n(Object(g.b)(this, "props", e, t))
                        },
                      },
                      {
                        key: "byState",
                        value: function (e) {
                          var t = (arguments.length > 1 &&
                          void 0 !== arguments[1]
                            ? arguments[1]
                            : { exact: !1 }
                          ).exact
                          return new n(Object(g.b)(this, "state", e, t))
                        },
                      },
                    ]),
                    n
                  )
                })(m()(Array)),
                w = (function (e) {
                  l()(n, e)
                  var t = y(n)
                  function n(e, r) {
                    var i
                    for (var o in (a()(this, n),
                    ((i = t.call(this, e))._nodes = r),
                    e))
                      i[o] = e[o]
                    return i
                  }
                  return (
                    u()(n, [
                      {
                        key: "byProps",
                        value: function (e) {
                          var t = (arguments.length > 1 &&
                          void 0 !== arguments[1]
                            ? arguments[1]
                            : { exact: !1 }
                          ).exact
                          return new n(
                            Object(g.b)(this._nodes, "props", e, t)[0],
                            this._nodes
                          )
                        },
                      },
                      {
                        key: "byState",
                        value: function (e) {
                          var t = (arguments.length > 1 &&
                          void 0 !== arguments[1]
                            ? arguments[1]
                            : { exact: !1 }
                          ).exact
                          return new n(
                            Object(g.b)(this._nodes, "state", e, t)[0],
                            this._nodes
                          )
                        },
                      },
                    ]),
                    n
                  )
                })(m()(Object)),
                S = (function () {
                  function e(t, n) {
                    a()(this, e),
                      (this.selectors = t
                        .split(" ")
                        .filter(function (e) {
                          return !!e
                        })
                        .map(function (e) {
                          return e.trim()
                        })),
                      (this.rootComponent = n),
                      (this.tree = Object(g.a)(this.rootComponent))
                  }
                  return (
                    u()(e, [
                      {
                        key: "find",
                        value: function () {
                          return (
                            (this.nodes = new b(
                              Object(g.d)(this.selectors, this.tree, !0)
                            )),
                            new w(this.nodes[0], this.nodes)
                          )
                        },
                      },
                      {
                        key: "findAll",
                        value: function () {
                          return new b(Object(g.d)(this.selectors, this.tree))
                        },
                      },
                    ]),
                    e
                  )
                })()
            },
            function (e, t, n) {
              var r = n(2).default,
                i = n(21)
              ;(e.exports = function (e, t) {
                return !t || ("object" !== r(t) && "function" != typeof t)
                  ? i(e)
                  : t
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              ;(e.exports = function (e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                )
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t, n) {
              "use strict"
              var r = Array.isArray,
                i = Object.keys,
                o = Object.prototype.hasOwnProperty
              e.exports = function e(t, n) {
                if (t === n) return !0
                if (t && n && "object" == typeof t && "object" == typeof n) {
                  var a,
                    s,
                    u,
                    c = r(t),
                    l = r(n)
                  if (c && l) {
                    if ((s = t.length) != n.length) return !1
                    for (a = s; 0 != a--; ) if (!e(t[a], n[a])) return !1
                    return !0
                  }
                  if (c != l) return !1
                  var f = t instanceof Date,
                    d = n instanceof Date
                  if (f != d) return !1
                  if (f && d) return t.getTime() == n.getTime()
                  var h = t instanceof RegExp,
                    p = n instanceof RegExp
                  if (h != p) return !1
                  if (h && p) return t.toString() == n.toString()
                  var v = i(t)
                  if ((s = v.length) !== i(n).length) return !1
                  for (a = s; 0 != a--; ) if (!o.call(n, v[a])) return !1
                  for (a = s; 0 != a--; ) if (!e(t[(u = v[a])], n[u])) return !1
                  return !0
                }
                return t != t && n != n
              }
            },
            function (e, t, n) {
              "use strict"
              n.r(t),
                function (e) {
                  n.d(t, "resq$", function () {
                    return s
                  }),
                    n.d(t, "resq$$", function () {
                      return u
                    })
                  var r = n(12),
                    i = n(11)
                  n.d(t, "waitToLoadReact", function () {
                    return i.a
                  })
                  var o = n(0)
                  function a(t, n, i) {
                    if (!i && !e.isReactLoaded)
                      throw new Error(
                        "Could not find the root element of your application"
                      )
                    var a = e.rootReactElement
                    if ((i instanceof HTMLElement && (a = Object(o.c)(i)), !a))
                      throw new Error(
                        "Could not find instance of React in given element"
                      )
                    return new r.a(t, a)[n]()
                  }
                  function s(e, t) {
                    return a(e, "find", t)
                  }
                  function u(e, t) {
                    return a(e, "findAll", t)
                  }
                }.call(this, n(9))
            },
            function (e, t, n) {
              var r = n(10)
              ;(e.exports = function (e) {
                if (Array.isArray(e)) return r(e)
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              ;(e.exports = function (e) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e)
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t, n) {
              var r = n(10)
              ;(e.exports = function (e, t) {
                if (e) {
                  if ("string" == typeof e) return r(e, t)
                  var n = Object.prototype.toString.call(e).slice(8, -1)
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? r(e, t)
                      : void 0
                  )
                }
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              ;(e.exports = function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                )
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              ;(e.exports = function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  )
                return e
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              ;(e.exports = function (e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t, n) {
              var r = n(6),
                i = n(24)
              function o(t, n, a) {
                return (
                  i()
                    ? ((e.exports = o = Reflect.construct),
                      (e.exports.default = e.exports),
                      (e.exports.__esModule = !0))
                    : ((e.exports = o = function (e, t, n) {
                        var i = [null]
                        i.push.apply(i, t)
                        var o = new (Function.bind.apply(e, i))()
                        return n && r(o, n.prototype), o
                      }),
                      (e.exports.default = e.exports),
                      (e.exports.__esModule = !0)),
                  o.apply(null, arguments)
                )
              }
              ;(e.exports = o),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
            function (e, t) {
              ;(e.exports = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1
                if (Reflect.construct.sham) return !1
                if ("function" == typeof Proxy) return !0
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  )
                } catch (e) {
                  return !1
                }
              }),
                (e.exports.default = e.exports),
                (e.exports.__esModule = !0)
            },
          ]))
      },
      573: function (e, t, n) {
        var r = n(763)
        function i(e) {
          return e.reduce(function (e, t, n, r) {
            return e + t
          })
        }
        function o(e) {
          if (r.isArray(e)) return e
          if ("string" === typeof e) return e.split("")
          throw Error("Parameter must be a string or array.")
        }
        t.$m = function (e, t) {
          return (
            (e = o(e)),
            (t = o(t)),
            r.intersection(e, t).length / r.union(e, t).length
          )
        }
      },
    },
    t = {}
  function n(r) {
    var i = t[r]
    if (void 0 !== i) return i.exports
    var o = (t[r] = { id: r, loaded: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
  }
  ;(n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default
          }
        : function () {
            return e
          }
    return n.d(t, { a: t }), t
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" === typeof window) return window
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e
    }),
    (function () {
      "use strict"
      var e = {}
      n.r(e),
        n.d(e, {
          default: function () {
            return sn
          },
        })
      var t,
        r,
        i = { queryParams: void 0 },
        o = function () {
          return (
            i.queryParams ||
              (i.queryParams = Object.fromEntries(
                new URLSearchParams(window.location.search).entries()
              )),
            i.queryParams
          )
        }
      !(function (e) {
        ;(e.Script = "script"), (e.App = "app")
      })(t || (t = {})),
        (function (e) {
          ;(e.TodoListApp = "todo"),
            (e.ReplayerApp = "replayer"),
            (e.SessionGraphApp = "sessiongraph")
        })(r || (r = {}))
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      function s(e) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                }),
          s(e)
        )
      }
      function u(e) {
        var t = (function (e, t) {
          if ("object" !== s(e) || null === e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(e, t || "default")
            if ("object" !== s(r)) return r
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        })(e, "string")
        return "symbol" === s(t) ? t : String(t)
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, u(r.key), r)
        }
      }
      function l(e, t, n) {
        return (
          t && c(e.prototype, t),
          n && c(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        )
      }
      var f,
        d,
        h,
        p = (function () {
          function e(t) {
            if (
              (a(this, e),
              (this.structuralVicinity = void 0),
              (this.visualVicinity = void 0),
              (this.serializedElement = void 0),
              (this.attributes = {}),
              (this.classes = {}),
              (this.innerText = void 0),
              (this.tag = void 0),
              (this.style = void 0),
              (this.innerFeatures = void 0),
              (this.staticCandidates = void 0),
              (this.positioning = void 0),
              "object" === typeof t)
            )
              for (var n in t) this[n] = t[n]
            else if ("string" === typeof t) {
              var r = JSON.parse(t)
              for (var i in r) this[i] = r[i]
            }
          }
          return (
            l(e, [
              {
                key: "serialize",
                value: function () {
                  return JSON.stringify(this)
                },
              },
            ]),
            e
          )
        })(),
        v = {
          attributesToExtract: [
            "class",
            "src",
            "placeholder",
            "href",
            "checked",
            "disabled",
            "contenteditable",
            "draggable",
            "hidden",
            "inputmode",
            "role",
            "title",
            "name",
            "type",
            "readonly",
            "size",
            "required",
            "multiple",
            "min",
            "max",
            "step",
            "maxlength",
            "alt",
            "loop",
            "controls",
            "poster",
          ],
          structuralVicinity: { type: "fixed", value: 6, useDecayingLimit: !0 },
          visualVicinity: { radius: 50, scanStep: 10 },
          vicinityFeatureElementsOnly: !0,
          react: {},
        }
      !(function (e) {
        ;(e[(e.Media = 0)] = "Media"),
          (e[(e.NoData = 1)] = "NoData"),
          (e[(e.Anchor = 2)] = "Anchor"),
          (e[(e.Button = 3)] = "Button"),
          (e[(e.Input = 4)] = "Input"),
          (e[(e.Text = 5)] = "Text")
      })(f || (f = {})),
        (function (e) {
          ;(e.Element = "element"),
            (e.Parent = "parent"),
            (e.Child = "child"),
            (e.LeftSibling = "left-sibling"),
            (e.RightSibling = "right-sibling")
        })(d || (d = {})),
        (function (e) {
          ;(e.TopRight = "top-right"),
            (e.TopLeft = "top-left"),
            (e.BottomRight = "bottom-right"),
            (e.BottomLeft = "bottom-left")
        })(h || (h = {}))
      var m = function (e) {
          var t = e.tagName.toLowerCase()
          switch (e.tagName) {
            case "IMG":
            case "VIDEO":
            case "AUDIO":
            case "SVG":
              return {
                type: f.Media,
                tag: t,
                src: e.getAttribute("src"),
                size: { width: e.clientWidth, height: e.clientHeight },
                screenSize: {
                  width: window.innerWidth,
                  height: window.innerHeight,
                },
              }
            case "A":
              return {
                type: f.Anchor,
                tag: t,
                href: e.getAttribute("href"),
                text: e.innerText,
              }
            case "BUTTON":
              return { type: f.Button, tag: t, text: e.innerText }
            case "INPUT":
              return {
                type: f.Input,
                tag: t,
                inputType: e.getAttribute("type"),
                placeholder: e.getAttribute("placeholder"),
              }
            case "TABLE":
            case "FORM":
            case "TEXTAREA":
            case "IFRAME":
            case "SELECT":
              return { type: f.NoData, tag: t }
          }
          if (e.innerHTML === e.innerText && e.innerHTML.length)
            return { type: f.Text, tag: t, text: g(e.innerHTML) }
        },
        g = function (e) {
          return e.length > 256 ? e.substring(0, 256) + "..." : e
        }
      function y(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function b(e, t) {
        if (e) {
          if ("string" === typeof e) return y(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? y(e, t)
              : void 0
          )
        }
      }
      function w(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return y(e)
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e)
          })(e) ||
          b(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      var S = function (e) {
          if (!e) return e
          try {
            if ("closest" in e) {
              var t = x(
                e,
                "button,select,input,textarea,option,a,[role=button],[role=checkbox],[role=radio],[role=link],[type=button]"
              )
              if (t) return t
            }
            var n = window.getComputedStyle(e).cursor
            if (
              [
                "auto",
                "default",
                "context-menu",
                "help",
                "progress",
                "wait",
              ].includes(n)
            )
              return e
            for (var r = e; r; ) {
              var i = r.parentElement
              if (
                !i ||
                (i.nodeType !== Node.ELEMENT_NODE ||
                  window.getComputedStyle(i).cursor) !== n
              )
                return r
              r = r.parentNode
            }
            return e
          } catch (hn) {
            return console.error("getCompoundInteractableRootElement", e, hn), e
          }
        },
        C = function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document,
            n =
              (null === (e = t.body) || void 0 === e
                ? void 0
                : e.getBoundingClientRect()) ||
              document.body.getBoundingClientRect(),
            r = ["button", "a", "input", "select", "option", "textarea"],
            i = [
              "pointer",
              "text",
              "vertical-text",
              "zoom-in",
              "zoom-out",
              "help",
            ]
          return E("*", t, { excludeCrossOriginIframes: !0 })
            .map(function (e) {
              var o,
                a,
                s = e.getBoundingClientRect()
              return {
                element: e,
                include:
                  !k(e, t) &&
                  (!("disabled" in e) || !e.disabled) &&
                  (r.includes(e.tagName.toLowerCase()) ||
                    !!e.onclick ||
                    i.includes(window.getComputedStyle(e).cursor)),
                rect: {
                  left: Math.max(s.left - n.x, 0),
                  top: Math.max(s.top - n.y, 0),
                  right: Math.min(
                    s.right - n.x,
                    (null === (o = t.body) || void 0 === o
                      ? void 0
                      : o.clientWidth) || document.body.clientWidth
                  ),
                  bottom: Math.min(
                    s.bottom - n.y,
                    (null === (a = t.body) || void 0 === a
                      ? void 0
                      : a.clientHeight) || document.body.clientHeight
                  ),
                },
              }
            })
            .filter(function (e) {
              return (
                e.include &&
                (e.rect.right - e.rect.left) * (e.rect.bottom - e.rect.top) >=
                  20
              )
            })
            .reduce(function (e, t) {
              var n = S(t.element)
              return e.includes(n) || e.push(n), e
            }, [])
        }
      function I(e, t) {
        for (var n = t; null != n; ) {
          if (n === e) return !0
          n = n.parentNode || n.host
        }
        return !1
      }
      function k(e, t) {
        var n = e.getBoundingClientRect(),
          r = { x: n.left + n.width / 2, y: n.top + n.height / 2 },
          i = t.elementFromPoint(r.x, r.y)
        return !(i === e || !i || !e || I(e, i) || I(i, e))
      }
      var x = function e(t, n) {
          if (t.matches(n)) return t
          var r = t.slot
          if (r) {
            for (var i = t.parentElement; i; ) {
              if (i.shadowRoot) {
                var o = i.shadowRoot.querySelector(
                  'slot[name="'.concat(r, '"]')
                )
                if (o) return e(o, n)
              }
              i = i.parentElement
            }
            return null
          }
          var a = t.closest(n)
          if (a) return a
          var s = t.getRootNode()
          return s.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ? e(s.host, n)
            : null
        },
        E = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document,
            n = (arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {}
            ).excludeCrossOriginIframes,
            r = void 0 !== n && n,
            i = []
          return (
            (function t(n) {
              !(function (t) {
                t.querySelectorAll(e).forEach(function (e) {
                  return i.push(e)
                })
              })(n)
              var o = []
              !(function e(t) {
                t.shadowRoot && o.push(t.shadowRoot),
                  t.childNodes.forEach(function (t) {
                    return e(t)
                  })
              })(n),
                o.forEach(function (e) {
                  return t(e)
                }),
                n.querySelectorAll("iframe").forEach(function (e) {
                  if (
                    !r ||
                    !(function (e) {
                      return (
                        !e.src ||
                        window.location.origin !== new URL(e.src).origin
                      )
                    })(e)
                  )
                    try {
                      var n = e.contentDocument
                      n && t(n)
                    } catch (hn) {
                      return
                    }
                })
            })(t.body),
            i
          )
        }
      function A(e) {
        var t = e.getRootNode()
        return t.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? (function (e, t) {
              var n = e.querySelectorAll("slot")
              if (!n.length) return e.innerText
              var r = e.cloneNode(!0),
                i = r.querySelectorAll("slot")
              return (
                n.forEach(function (e, t) {
                  var n = e.assignedNodes()
                  i[t].innerText = n
                    .map(function (e) {
                      switch (e.nodeType) {
                        case Node.TEXT_NODE:
                          return e.textContent
                        case Node.ELEMENT_NODE:
                          return e.innerText
                      }
                    })
                    .filter(function (e) {
                      return !!e
                    })
                    .join("\n")
                }),
                r.innerText.trim()
              )
            })(e)
          : e.innerText
      }
      var M,
        T = function (e) {
          var t = Array.from(e.childNodes)
          if (e.nodeType === Node.ELEMENT_NODE) {
            var n,
              r = e
            if (
              (r.shadowRoot &&
                (t = t.filter(function (e) {
                  return !e.assignedSlot
                })).push(r.shadowRoot),
              "SLOT" === r.tagName)
            )
              (n = t).push.apply(n, w(r.assignedNodes()))
          }
          return t
        },
        N = function (e) {
          var t = e.parentElement
          if (t) return t
          switch (e.nodeType) {
            case Node.ELEMENT_NODE:
              var n = e
              if (n.assignedSlot) return n.assignedSlot
              break
            case Node.DOCUMENT_FRAGMENT_NODE:
              return e.host
          }
          var r = e.parentNode
          return r && r.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? r.host : null
        },
        _ = function (e) {
          return Object.keys(e || {}).reduce(function (t, n) {
            var r = e[n]
            return r && (t[n] = r), t
          }, {})
        },
        R = function (e) {
          var t = _(e)
          return !(!t || !Object.keys(t).length)
        },
        O = (function () {
          function e(t) {
            var n = this
            a(this, e),
              (this.el = null),
              (this.structuralVicinityData = void 0),
              (this.visualVicinityData = void 0),
              (this.serializedElement = ""),
              (this.attributes = {}),
              (this.classes = {}),
              (this.innerText = void 0),
              (this.tag = void 0),
              (this.style = void 0),
              (this.react = void 0),
              (this.innerFeatures = void 0),
              (this.positioning = void 0),
              (this.getElementsInStructuralVicinity = function () {
                return n.structuralVicinityData.elementsInStructuralVicinity
              }),
              (this.setElementStructuralVicinityData = function (e) {
                n.structuralVicinityData = e
              }),
              (this.setElementVisualVicinityData = function (e) {
                n.visualVicinityData = e
              }),
              (this.getElementsInVisualVicinity = function () {
                return n.visualVicinityData
              }),
              (this.setSerializedElement = function (e) {
                n.serializedElement = e
              }),
              (this.setAttribute = function (e, t) {
                n.attributes[e] = t
              }),
              (this.setClass = function (e, t) {
                n.classes[e] = t
              }),
              (this.setInnerText = function (e) {
                n.innerText = e
              }),
              (this.setStyle = function (e) {
                n.style = e
              }),
              (this.setTag = function (e) {
                n.tag = e
              }),
              (this.setReact = function (e) {
                n.react = e
              }),
              (this.setInnerFeatures = function (e) {
                n.innerFeatures = e
              }),
              (this.setPositioning = function (e) {
                n.positioning = e
              }),
              (this.el = t)
          }
          return (
            l(e, [
              { key: "serialize", value: function () {} },
              {
                key: "getSerializedElement",
                value: function () {
                  return this.serializedElement
                },
              },
              {
                key: "element",
                get: function () {
                  return this.el
                },
              },
              {
                key: "getAttributes",
                value: function () {
                  return this.attributes
                },
              },
              {
                key: "getClasses",
                value: function () {
                  return this.classes
                },
              },
              {
                key: "getStyle",
                value: function () {
                  return this.style
                },
              },
              {
                key: "getInlineStyle",
                value: function () {
                  return this.style.inline
                },
              },
              {
                key: "getComputedStyle",
                value: function () {
                  return this.style.computed
                },
              },
              {
                key: "getTag",
                value: function () {
                  return this.tag
                },
              },
              {
                key: "getInnerFeatures",
                value: function () {
                  return this.innerFeatures
                },
              },
              {
                key: "getInnerText",
                value: function () {
                  return this.innerText
                },
              },
              {
                key: "toMetadata",
                value: function () {
                  return {
                    structuralVicinity: this.makeStructuralVicinityMetadata(),
                    visualVicinity: this.makeVisualVicinityMetadata(),
                    serializedElement: this.getSerializedElement(),
                    attributes: this.getAttributes(),
                    classes: this.getClasses(),
                    innerText: this.getInnerText(),
                    tag: this.getTag(),
                    style: this.getStyle(),
                    innerFeatures: this.getInnerFeatures(),
                    staticCandidates: this.extractStaticCandidates(),
                    positioning: this.positioning,
                  }
                },
              },
              {
                key: "extractStaticCandidates",
                value: function () {
                  return _({
                    text: this.extractStaticTextCandidate(),
                    labeled: this.extractLabeled(),
                    labeling: this.extractLabeling(),
                  })
                },
              },
              {
                key: "makeStructuralVicinityMetadata",
                value: function () {
                  var e = this
                  return this.getElementsInStructuralVicinity()
                    .filter(function (t) {
                      var n = t.element
                      return e.isVicinityQualifiedElement(n)
                    })
                    .map(function (t) {
                      return {
                        tag: t.element.tagName,
                        classes: Array.from(t.element.classList),
                        attributes: e.extractAttributesForMetadata(t.element),
                        position: t.position,
                        text: e.extractTextForMetadata(t.element),
                      }
                    })
                },
              },
              {
                key: "makeVisualVicinityMetadata",
                value: function () {
                  var e = this
                  return this.getElementsInVisualVicinity()
                    .filter(function (t) {
                      var n = t.element
                      return e.isVicinityQualifiedElement(n)
                    })
                    .map(function (t) {
                      return {
                        tag: t.element.tagName,
                        classes: Array.from(t.element.classList),
                        attributes: e.extractAttributesForMetadata(t.element),
                        text: e.extractTextForMetadata(t.element),
                        position: [t.position],
                        distance: t.distance,
                      }
                    })
                },
              },
              {
                key: "isVicinityQualifiedElement",
                value: function (e) {
                  return !v.vicinityFeatureElementsOnly || !!m(e)
                },
              },
              {
                key: "extractAttributesForMetadata",
                value: function (e) {
                  return Array.from(e.attributes).reduce(function (e, t) {
                    return "class" === t.name
                      ? e
                      : "string" === typeof t.value &&
                        v.attributesToExtract.includes(t.name)
                      ? ((e[t.name] = t.value), e)
                      : e
                  }, {})
                },
              },
              {
                key: "extractTextForMetadata",
                value: function (e) {
                  if (e.innerHTML === e.innerText) {
                    var t = e.innerHTML
                    return t.length > 256 ? t.substring(0, 256) + "..." : t
                  }
                },
              },
              {
                key: "extractStaticTextCandidate",
                value: function () {
                  var e, t, n
                  switch (this.tag) {
                    case "input":
                    case "textarea":
                      return null === (e = this.attributes) ||
                        void 0 === e ||
                        null === (t = e.placeholder) ||
                        void 0 === t
                        ? void 0
                        : t.value
                    default:
                      return null === (n = this.innerText) || void 0 === n
                        ? void 0
                        : n.content
                  }
                },
              },
              {
                key: "extractLabeling",
                value: function () {
                  if ("label" === this.element.tagName) return A(this.element)
                  var e = x(this.element, "label")
                  if (e && this.attributeExists(e.getAttribute("for")))
                    return A(e)
                  if (
                    this.element.id &&
                    this.element.id.length &&
                    E("[aria-labelledby=".concat(this.element.id, "]")).length
                  )
                    return A(this.element)
                },
              },
              {
                key: "extractLabeled",
                value: function () {
                  var e = this.element.getAttribute("aria-label")
                  if (this.attributeExists(e)) return e
                  var t = x(this.element, "label")
                  if (t && !this.attributeExists(t.getAttribute("for")))
                    return A(t)
                  if (this.element.id && this.element.id.length)
                    try {
                      var n = E("label[for=".concat(this.element.id, "]"))
                      if (n.length) return A(n[0])
                    } catch (hn) {
                      return void console.warn(
                        "extractLabeled error",
                        this.element.id
                      )
                    }
                  var r = this.element.getAttribute("aria-labelledby")
                  if (this.attributeExists(r)) {
                    var i = E(
                      r
                        .split(" ")
                        .map(function (e) {
                          return "#".concat(e)
                        })
                        .join(",")
                    )
                    if (i.length) return A(i[0])
                  }
                },
              },
              {
                key: "attributeExists",
                value: function (e) {
                  return e && e.length > 0
                },
              },
            ]),
            e
          )
        })(),
        D = (function () {
          function e(t, n) {
            a(this, e),
              (this.element = void 0),
              (this.config = void 0),
              (this.structuralVicinityData = {
                elementsInStructuralVicinity: [],
                html: "",
              }),
              (this.element = t),
              (this.config = n)
          }
          return (
            l(e, [
              {
                key: "getInitialLimit",
                value: function () {
                  switch (this.config.type) {
                    case "ratio":
                      return (
                        document.querySelectorAll("*").length *
                        this.config.value
                      )
                    case "fixed":
                      return this.config.value
                  }
                },
              },
              {
                key: "calculate",
                value: function () {
                  var e = Date.now().toString()
                  return (
                    (this.structuralVicinityData.html = this.populateStructuralVicinity(
                      this.element,
                      [d.Element],
                      { runId: e, step: 0, limit: this.getInitialLimit() }
                    )),
                    this.structuralVicinityData.elementsInStructuralVicinity.forEach(
                      function (t) {
                        return t.element.attributes.removeNamedItem(
                          "radial-traverse-".concat(e)
                        )
                      }
                    ),
                    this.structuralVicinityData
                  )
                },
              },
              {
                key: "populateStructuralVicinity",
                value: function (e, t, n) {
                  var r = this,
                    i = n.runId,
                    o = n.step,
                    a = n.limit
                  if (!e || o > a) return ""
                  if (void 0 !== e.attributes["radial-traverse-".concat(i)])
                    return ""
                  this.structuralVicinityData.elementsInStructuralVicinity.push(
                    { element: e, position: t }
                  ),
                    e.setAttribute("radial-traverse-".concat(i), o.toString())
                  var s = {
                      runId: i,
                      step: o + 1,
                      limit: this.config.useDecayingLimit ? a - 1 : a,
                    },
                    u = this.populateStructuralVicinity(
                      N(e),
                      [].concat(w(t), [d.Parent]),
                      s
                    ),
                    c = this.populateStructuralVicinity(
                      e.previousElementSibling,
                      [].concat(w(t), [d.LeftSibling]),
                      s
                    ),
                    l = this.populateStructuralVicinity(
                      e.nextElementSibling,
                      [].concat(w(t), [d.RightSibling]),
                      s
                    ),
                    f = []
                  ;(function (e) {
                    var t,
                      n,
                      r = Array.from(e.children)
                    return (
                      e.shadowRoot &&
                        (t = r = r.filter(function (e) {
                          return !e.assignedSlot
                        })).push.apply(t, w(Array.from(e.shadowRoot.children))),
                      "SLOT" === e.tagName &&
                        (n = r).push.apply(n, w(e.assignedElements())),
                      r
                    )
                  })(e).map(function (e, n) {
                    return f.push(
                      r.populateStructuralVicinity(
                        e,
                        [].concat(w(t), [d.Child]),
                        s
                      )
                    )
                  })
                  var h = c + e.outerHTML.replace(e.innerHTML, f.join("")) + l
                  return u && !u.includes(e.outerHTML)
                    ? u.replace("></", ">".concat(h, "</"))
                    : u
                    ? u.replace(e.outerHTML, h)
                    : h
                },
              },
            ]),
            e
          )
        })()
      function L(e, t, n) {
        return (
          (t = u(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      !(function (e) {
        ;(e[(e.New = 0)] = "New"),
          (e[(e.Covered = 1)] = "Covered"),
          (e[(e.ElementTooBig = 2)] = "ElementTooBig"),
          (e[(e.Self = 3)] = "Self")
      })(M || (M = {}))
      var F = (function () {
        function e(t, n) {
          var r
          a(this, e),
            (this.document = t),
            (this.config = n),
            (this.debug = !1),
            (this.sampleBoxColors =
              (L((r = {}), M.New, "green"),
              L(r, M.Covered, "orange"),
              L(r, M.ElementTooBig, "red"),
              L(r, M.Self, "blue"),
              r))
        }
        return (
          l(e, [
            {
              key: "calculate",
              value: function (e) {
                for (
                  var t = this,
                    n = [],
                    r = this.config.radius,
                    i = this.config.scanStep,
                    o = e.getBoundingClientRect(),
                    a = o.left - r;
                  a < o.left + o.width + r;
                  a += i
                )
                  for (
                    var s = function () {
                        var e = a + i / 2,
                          s = u + i / 2
                        if (
                          t.doesRectContain(o, {
                            left: a,
                            top: u,
                            right: a + i,
                            bottom: u + i,
                          })
                        )
                          return t.addTrace(e, s, i, M.Self), "continue"
                        var c = t.document.elementFromPoint(e, s)
                        if (!c) return "continue"
                        var l = c.getBoundingClientRect()
                        if (
                          (l.width > 2 * r && l.height > 2 * r) ||
                          t.doesRectContain(l, o)
                        )
                          return (
                            t.addTrace(e, s, i, M.ElementTooBig), "continue"
                          )
                        if (
                          !!n.find(function (e) {
                            return e.element === c
                          })
                        )
                          return t.addTrace(e, s, i, M.Covered), "continue"
                        var f = t.getPosition(o, l),
                          d = f.position,
                          h = f.distance
                        n.push({ element: c, position: d, distance: h }),
                          t.addTrace(e, s, i, M.New)
                      },
                      u = o.top - r;
                    u < o.top + o.height + r;
                    u += i
                  )
                    s()
                return n
              },
            },
            {
              key: "getPosition",
              value: function (e, t) {
                var n = this.getCenter(t),
                  r = n.x,
                  i = n.y,
                  o = this.getCenter(e),
                  a = o.x,
                  s = o.y
                return {
                  distance: Number(
                    Math.sqrt(Math.pow(a - r, 2) + Math.pow(s - i, 2)).toFixed(
                      2
                    )
                  ),
                  position: (function () {
                    var e = r - a
                    return i - s < 0
                      ? e > 0
                        ? h.TopRight
                        : h.TopLeft
                      : e > 0
                      ? h.BottomRight
                      : h.BottomLeft
                  })(),
                }
              },
            },
            {
              key: "getCenter",
              value: function (e) {
                return { x: (e.right - e.left) / 2, y: (e.bottom - e.top) / 2 }
              },
            },
            {
              key: "addTrace",
              value: function (e, t, n, r) {
                if (this.debug) {
                  var i = this.document.createElement("xdiv")
                  i.setAttribute(
                    "style",
                    "position: absolute; width: "
                      .concat(n, "px; height: ")
                      .concat(n, "px; top: ")
                      .concat(t, "px; left: ")
                      .concat(e, "px; background: ")
                      .concat(
                        this.sampleBoxColors[r],
                        "; z-index: 999999999999;opacity:0.4"
                      )
                  ),
                    this.document.getElementsByTagName("body")[0].prepend(i)
                }
              },
            },
            {
              key: "doesRectContain",
              value: function (e, t) {
                return (
                  t.left >= e.left &&
                  t.right <= e.right &&
                  t.top >= e.top &&
                  t.bottom <= e.bottom
                )
              },
            },
            {
              key: "doRectsOverlap",
              value: function (e, t) {
                var n = e.right < t.left,
                  r = e.left > t.right,
                  i = e.top > t.bottom,
                  o = e.top < t.top
                return !(n || r || i || o)
              },
            },
          ]),
          e
        )
      })()
      window.vve = new F({ radius: 50, scanStep: 10 })
      var V = n(352)
      ;(window.resq$ = V.resq$), (window.resq$$ = V.resq$$)
      var B = (function () {
          function e() {
            a(this, e)
          }
          return (
            l(e, [
              {
                key: "extract",
                value: function (e) {
                  var t = this.findParentComponent(e, { ignoreBaseElement: !0 })
                  return {
                    component: t,
                    parentComponent: this.findParentComponent(t.node),
                  }
                },
              },
              {
                key: "findParentComponent",
                value: function (e) {
                  var t,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.ignoreBaseElement,
                    i = void 0 !== r && r,
                    o = n.baseElement,
                    a = void 0 === o ? void 0 : o,
                    s = (0, V.resq$$)("*", e.parentElement).find(function (t) {
                      return 1 === t.children.length && t.children[0].node === e
                    })
                  return (
                    (a = null !== (t = a) && void 0 !== t ? t : e),
                    s && (i || s.node !== a)
                      ? this.parseRESQresult(s)
                      : this.findParentComponent(e.parentElement, {
                          baseElement: a,
                          ignoreBaseElement: i,
                        })
                  )
                },
              },
              {
                key: "parseRESQresult",
                value: function (e) {
                  if (e) {
                    return {
                      name: e.name,
                      node: e.node,
                      isFragment: e.isFragment,
                      stateTokens: (function e(t) {
                        switch (typeof t) {
                          case "string":
                            return [t]
                          case "object":
                            return Array.isArray(t) ? t.map(e) : Object.keys(t)
                        }
                      })(e.state),
                      propsNames: Object.keys(e.props),
                      hasChildren: !!e.children.length,
                    }
                  }
                },
              },
            ]),
            e
          )
        })(),
        j = new B(),
        P = (function () {
          function e() {
            a(this, e)
          }
          return (
            l(e, [
              {
                key: "extract",
                value: function (e) {
                  return { component: void 0, parentComponent: void 0 }
                },
              },
            ]),
            e
          )
        })(),
        W =
          (new P(),
          (function () {
            function e(t, n) {
              a(this, e),
                (this.element = void 0),
                (this.config = void 0),
                (this.provider = j),
                (this.element = t),
                (this.config = n)
            }
            return (
              l(e, [
                {
                  key: "extract",
                  value: function () {
                    return this.provider.extract(this.element)
                  },
                },
              ]),
              e
            )
          })()),
        U = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.contains,
            i = void 0 !== r && r,
            o = n.matchWholeWord
          return i
            ? void 0 !== o && o
              ? "["
                  .concat(e, '="')
                  .concat(t, '"],[')
                  .concat(e, '*="')
                  .concat(t, ' "],[')
                  .concat(e, '*=" ')
                  .concat(t, ' "],[')
                  .concat(e, '*=" ')
                  .concat(t, '"]')
              : "[".concat(e, '*="').concat(t, '"]')
            : "[".concat(e, '="').concat(t, '"]')
        },
        G = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.contains,
            i = void 0 !== r && r,
            o = n.matchWholeWord
          return i
            ? void 0 !== o && o
              ? e === t ||
                e.startsWith(t) ||
                e.includes(" ".concat(t, " ")) ||
                e.endsWith(t)
              : e.includes(t)
            : e === t
        },
        z = function (e, t) {
          var n = t.filter,
            r = t.mapper,
            i = [],
            o = -1
          return (
            e.forEach(function (e) {
              ++o, (n && !n(e, o)) || i.push(r ? r(e, o) : e)
            }),
            i
          )
        },
        Z = (function () {
          function e(t) {
            a(this, e), (this.document = t)
          }
          return (
            l(e, [
              {
                key: "extract",
                value: function (e) {
                  for (
                    var t = this,
                      n = e.element,
                      r = e.setClass,
                      i = e.setAttribute,
                      o = e.getElementsInStructuralVicinity,
                      a = e.getElementsInVisualVicinity,
                      s = function () {
                        var e = n.attributes[u],
                          s = e.name,
                          c = e.value
                        return v.attributesToExtract.includes(s)
                          ? "string" !== typeof c
                            ? "continue"
                            : "class" === s
                            ? (c.split(" ").forEach(function (e) {
                                e.length &&
                                  r(
                                    e,
                                    t.processAttribute(
                                      {
                                        element: n,
                                        getElementsInStructuralVicinity: o,
                                        getElementsInVisualVicinity: a,
                                      },
                                      s,
                                      e,
                                      { contains: !0, matchWholeWord: !0 }
                                    )
                                  )
                              }),
                              "continue")
                            : void i(
                                s,
                                t.processAttribute(
                                  {
                                    element: n,
                                    getElementsInStructuralVicinity: o,
                                    getElementsInVisualVicinity: a,
                                  },
                                  s,
                                  c
                                )
                              )
                          : "continue"
                      },
                      u = 0;
                    u < n.attributes.length;
                    ++u
                  )
                    s()
                },
              },
              {
                key: "processAttribute",
                value: function (e, t, n) {
                  var r = e.element,
                    i = e.getElementsInStructuralVicinity,
                    o = e.getElementsInVisualVicinity,
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    s = this.document.querySelectorAll("*"),
                    u = U(t, n, a),
                    c = this.document.querySelectorAll(u),
                    l = this.document.querySelectorAll("".concat(r.tagName)),
                    f = z(c, {
                      filter: function (e) {
                        return e.tagName === r.tagName
                      },
                    }),
                    d = i(),
                    h = d.filter(function (e) {
                      return (
                        e.element.attributes[t] &&
                        G(e.element.attributes[t].value, n, a)
                      )
                    }),
                    p = o(),
                    v = p.filter(function (e) {
                      return (
                        e.element.attributes[t] &&
                        G(e.element.attributes[t].value, n, a)
                      )
                    })
                  return {
                    value: n,
                    globalUniqenuess: 1 - c.length / s.length,
                    tagUniqenuess: 1 - f.length / l.length,
                    structuralVicinityUniqenuess: 1 - h.length / d.length,
                    visualVicinityUniqenuess: 1 - v.length / p.length,
                  }
                },
              },
            ]),
            e
          )
        })()
      function q(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                L(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var Y = (function () {
          function e(t) {
            a(this, e), (this.document = t), (this.tagBaseComputedStyle = {})
          }
          return (
            l(e, [
              {
                key: "extract",
                value: function (e) {
                  var t = e.element,
                    n = e.setStyle
                  if (!this.tagBaseComputedStyle[t.tagName]) {
                    var r = this.document.createElement(t.tagName)
                    this.document.getElementsByTagName("body")[0].prepend(r),
                      (this.tagBaseComputedStyle[
                        t.tagName
                      ] = this.sanitzieStyle(window.getComputedStyle(r))),
                      r.remove()
                  }
                  n({
                    inline: this.sanitzieStyle(t.style, {
                      acceptEmptyValue: !1,
                    }),
                    computed: this.diffComputedStyle(
                      this.tagBaseComputedStyle[t.tagName],
                      this.sanitzieStyle(window.getComputedStyle(t))
                    ),
                  })
                },
              },
              {
                key: "diffComputedStyle",
                value: function (e, t) {
                  var n, r
                  return (
                    (n = e),
                    (r = t),
                    Object.keys(r).reduce(function (e, t) {
                      return n[t] === r[t] ? e : H(H({}, e), {}, L({}, t, r[t]))
                    }, {})
                  )
                },
              },
              {
                key: "sanitzieStyle",
                value: function (e) {
                  var t = (arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                    ).acceptEmptyValue,
                    n = void 0 === t || t
                  return Object.keys(e).reduce(function (t, r) {
                    if (!isNaN(r)) return t
                    var i = e[r]
                    return n || i ? ((t[r] = i), t) : t
                  }, {})
                },
              },
            ]),
            e
          )
        })(),
        Q = (function () {
          function e(t) {
            a(this, e),
              (this.document = t),
              (this.makeFeatureNode = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : void 0,
                  n = e.nodeType === Node.ELEMENT_NODE
                return {
                  type: e.nodeType,
                  tag: n ? e.tagName : void 0,
                  feature: n ? m(e) : void 0,
                  children: [],
                  isRoot: t,
                }
              })
          }
          return (
            l(e, [
              {
                key: "extract",
                value: function (e) {
                  var t = [],
                    n = this.makeFeatureNode(e, !0)
                  return this.walk(e, n, t), t
                },
              },
              {
                key: "walk",
                value: function (e, t, n) {
                  var r = this,
                    i = !1
                  T(e).forEach(function (e) {
                    var o = r.makeFeatureNode(e),
                      a = r.walk(e, o, n)
                    a && t.children.push(o), i || (i = a)
                  })
                  var o = !!t.feature
                  return o && !t.isRoot && n.push(t.feature), o || i
                },
              },
            ]),
            e
          )
        })()
      window.inner_features_extractor = new Q()
      var K = new ((function () {
          function e() {
            a(this, e),
              (this.weightsSum = 0),
              (this.config = {
                attributes: {
                  qualification: {
                    globalUniquenessThreshold: 0.9,
                    tagUniquenessThreshold: 0.85,
                  },
                  decisionWeight: this.makeWeight(0.4),
                },
                classes: {
                  qualification: {
                    globalUniquenessThreshold: 0.95,
                    tagUniquenessThreshold: 0.95,
                  },
                  decisionWeight: this.makeWeight(0.4),
                },
                tagName: { decisionWeight: this.makeWeight(0.6) },
                style: {
                  inlineWeight: 0.6,
                  computedWeight: 0.4,
                  decisionWeight: this.makeWeight(0.4),
                },
                innerText: {
                  decisionWeight: this.makeWeight(0.6),
                  qualification: {
                    exactMatchMax: 20,
                    containsMatchMax: 10,
                    maxLength: 256,
                    minLength: 1,
                  },
                  ignoreSimilarityScoreBelow: 0.6,
                },
                innerFeatures: { decisionWeight: this.makeWeight(0.8) },
                visualVicinity: { decisionWeight: this.makeWeight(0.2) },
                structuralVicinity: { decisionWeight: this.makeWeight(0.2) },
              })
          }
          return (
            l(e, [
              {
                key: "makeWeight",
                value: function (e) {
                  return (this.weightsSum += e), e
                },
              },
              {
                key: "get",
                value: function () {
                  return this.config
                },
              },
              {
                key: "weight",
                value: function (e) {
                  return e / this.weightsSum
                },
              },
            ]),
            e
          )
        })())(),
        J = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.exact,
            r = void 0 !== n && n,
            i = t.tag
          return E(void 0 === i ? "*" : i).filter(function (t) {
            return r
              ? t.textContent.trim() === e.trim()
              : t.textContent.includes(e)
          })
        },
        X = (function () {
          function e(t) {
            a(this, e), (this.document = t)
          }
          return (
            l(e, [
              {
                key: "extract",
                value: function (e) {
                  var t = A(e)
                  if (t) {
                    var n = K.get().innerText.qualification.maxLength
                    if (t.length > n)
                      return {
                        content: t,
                        exactMatches: 1,
                        containsMatches: 1,
                        indexInOrderedSearch: 1,
                      }
                    var r = J(t, { exact: !0 }),
                      i = J(t)
                    return {
                      content: t,
                      exactMatches: r.length,
                      containsMatches: i.length,
                      indexInOrderedSearch: r.indexOf(e),
                    }
                  }
                },
              },
            ]),
            e
          )
        })(),
        $ = (function () {
          function e(t) {
            a(this, e), (this.document = t)
          }
          return (
            l(e, [
              {
                key: "extract",
                value: function (e) {
                  var t = e.getBoundingClientRect(),
                    n = t.top,
                    r = t.bottom,
                    i = t.left,
                    o = t.right,
                    a = document.documentElement.scrollHeight,
                    s = document.documentElement.scrollWidth
                  return {
                    viewport: {
                      size: {
                        height: window.innerHeight,
                        width: window.innerWidth,
                      },
                      element: {
                        top: this.normalize(n, window.innerHeight),
                        bottom: this.normalize(r, window.innerHeight),
                        left: this.normalize(i, window.innerWidth),
                        right: this.normalize(o, window.innerWidth),
                      },
                    },
                    document: {
                      size: { height: a, width: s },
                      element: {
                        top: this.normalize(n + window.scrollY, a),
                        bottom: this.normalize(r + window.scrollY, a),
                        left: this.normalize(i + window.scrollX, s),
                        right: this.normalize(o + window.scrollX, s),
                      },
                    },
                  }
                },
              },
              {
                key: "normalize",
                value: function (e, t) {
                  return e / t
                },
              },
            ]),
            e
          )
        })(),
        ee = (function () {
          function e(t, n) {
            a(this, e),
              (this.xmlSerializer = void 0),
              (this.document = void 0),
              (this.config = void 0),
              (this.visualVicinityExtractor = void 0),
              (this.attributesExtractor = void 0),
              (this.styleExtractor = void 0),
              (this.innerFeaturesExtractor = void 0),
              (this.innerTextExtractor = void 0),
              (this.positioningExtractor = void 0),
              (this.xmlSerializer = new XMLSerializer()),
              (this.document = t),
              (this.config = null !== n && void 0 !== n ? n : v),
              (this.visualVicinityExtractor = new F(
                this.document,
                this.config.visualVicinity
              )),
              (this.attributesExtractor = new Z(this.document)),
              (this.styleExtractor = new Y(this.document)),
              (this.innerFeaturesExtractor = new Q(this.document)),
              (this.innerTextExtractor = new X(this.document)),
              (this.positioningExtractor = new $(this.document))
          }
          return (
            l(e, [
              {
                key: "isSameDocument",
                value: function (e) {
                  return this.document === e
                },
              },
              {
                key: "extract",
                value: function (e) {
                  var t = this.scrollElementToScreenCenter(e),
                    n = t.currentTop,
                    r = t.currentLeft,
                    i = new O(e)
                  return (
                    this.serializeElement(i),
                    this.populateElementsInStructuralVicinity(i),
                    this.populateElementsInVisualVicinity(i),
                    this.extractAttributes(i),
                    this.extractInnerText(i),
                    this.extractStyle(i),
                    this.extractTag(i),
                    this.extractInnerFeatures(i),
                    this.extractPositioning(i),
                    e.ownerDocument.documentElement.scroll(r, n),
                    i
                  )
                },
              },
              {
                key: "scrollElementToScreenCenter",
                value: function (e) {
                  var t = e.ownerDocument.documentElement.scrollTop,
                    n = e.ownerDocument.documentElement.scrollLeft
                  return (
                    e.scrollIntoView({ block: "center", inline: "center" }),
                    { currentTop: t, currentLeft: n }
                  )
                },
              },
              {
                key: "extractReact",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setReact)(new W(t, this.config.react).extract())
                },
              },
              {
                key: "extractTag",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setTag)(t.tagName.toLowerCase())
                },
              },
              {
                key: "extractPositioning",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setPositioning)(this.positioningExtractor.extract(t))
                },
              },
              {
                key: "serializeElement",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setSerializedElement)(
                    this.xmlSerializer.serializeToString(t)
                  )
                },
              },
              {
                key: "extractAttributes",
                value: function (e) {
                  var t = e.element,
                    n = e.setClass,
                    r = e.setAttribute,
                    i = e.getElementsInStructuralVicinity,
                    o = e.getElementsInVisualVicinity
                  return this.attributesExtractor.extract({
                    element: t,
                    setClass: n,
                    setAttribute: r,
                    getElementsInStructuralVicinity: i,
                    getElementsInVisualVicinity: o,
                  })
                },
              },
              {
                key: "populateElementsInStructuralVicinity",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setElementStructuralVicinityData)(
                    new D(t, this.config.structuralVicinity).calculate()
                  )
                },
              },
              {
                key: "populateElementsInVisualVicinity",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setElementVisualVicinityData)(
                    this.visualVicinityExtractor.calculate(t)
                  )
                },
              },
              {
                key: "extractInnerText",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setInnerText)(this.innerTextExtractor.extract(t))
                },
              },
              {
                key: "extractStyle",
                value: function (e) {
                  var t = e.element,
                    n = e.setStyle
                  return this.styleExtractor.extract({
                    element: t,
                    setStyle: n,
                  })
                },
              },
              {
                key: "extractInnerFeatures",
                value: function (e) {
                  var t = e.element
                  ;(0, e.setInnerFeatures)(
                    this.innerFeaturesExtractor.extract(t)
                  )
                },
              },
            ]),
            e
          )
        })(),
        te = n(573),
        ne = (function () {
          function e(t) {
            var n = this
            a(this, e),
              (this.targetElementESRAMetadata = void 0),
              (this.qualifiedAttributes = []),
              (this.qualifiedAttributesMap = {}),
              (this.qualifiedClasses = []),
              (this.unqualifiedClasses = []),
              (this.qualifiedInnerText = void 0),
              (this.visualVicinityComparable = []),
              (this.structuralVicinityComparable = []),
              (this.innerFeaturesComparable = []),
              (this.rank = function (e) {
                if (n.isDealBreaker(e)) return { score: 0, scores: {} }
                var t = n.tagSimilarity(e),
                  r = n.attributesSimilarity(e),
                  i = n.classSimilarity(e),
                  o = n.styleSimilarity(e),
                  a = n.innerTextSimilarity(e),
                  s = n.innerFeaturesSimilarity(e),
                  u = n.visualVicinitySimilarity(e),
                  c = n.structuralVicinitySimilarity(e),
                  l = {
                    tagScore: t,
                    attributesScore: r,
                    classesScore: i,
                    styleScore: o,
                    innerTextScore: a,
                    innerFeaturesScore: s,
                    visualVicinityScore: u,
                    structuralVicinityScore: c,
                  },
                  f = {
                    tagScore: K.weight(K.get().tagName.decisionWeight) * t,
                    attributesScore:
                      K.weight(K.get().attributes.decisionWeight) * r,
                    classesScore: K.weight(K.get().classes.decisionWeight) * i,
                    innerTextScore:
                      K.weight(K.get().innerText.decisionWeight) * a,
                    innerFeaturesScore:
                      K.weight(K.get().innerFeatures.decisionWeight) * s,
                    styleScore: K.weight(K.get().style.decisionWeight) * o,
                    visualVicinityScore:
                      K.weight(K.get().visualVicinity.decisionWeight) * u,
                    structuralVicinityScore:
                      K.weight(K.get().structuralVicinity.decisionWeight) * c,
                  }
                return {
                  score: Object.values(f).reduce(function (e, t) {
                    return e + t
                  }, 0),
                  scores: l,
                }
              }),
              (this.targetElementESRAMetadata = t),
              this.setQualifiedAttributes(),
              this.setQualifiedClasses(),
              this.setQualifiedInnerText(),
              this.setVisualVicinityComparable(),
              this.setStructuralVicinityComparable(),
              this.setInnerFeaturesComparable()
          }
          return (
            l(e, [
              {
                key: "getQualifiedAttributes",
                value: function () {
                  return this.qualifiedAttributes
                },
              },
              {
                key: "getQualifiedClasses",
                value: function () {
                  return this.qualifiedClasses
                },
              },
              {
                key: "getQualifiedInnerText",
                value: function () {
                  return this.qualifiedInnerText
                },
              },
              {
                key: "setQualifiedAttributes",
                value: function () {
                  var e = this.targetElementESRAMetadata.attributes,
                    t = this.makeQualifiedAttributes(e),
                    n = t.qualifiedAttributes,
                    r = t.qualifiedAttributesMap
                  ;(this.qualifiedAttributes = n),
                    (this.qualifiedAttributesMap = r)
                },
              },
              {
                key: "makeQualifiedAttributes",
                value: function (e, t) {
                  var n = Object.keys(e).filter(function (n) {
                      if ("input" === t) if ("value" === n) return !1
                      var r = e[n]
                      return (
                        r.globalUniqenuess >
                          K.get().attributes.qualification
                            .globalUniquenessThreshold ||
                        r.tagUniqenuess >
                          K.get().attributes.qualification
                            .tagUniquenessThreshold
                      )
                    }),
                    r = n.reduce(function (t, n) {
                      return (t[n] = e[n].value), t
                    }, {})
                  return { qualifiedAttributes: n, qualifiedAttributesMap: r }
                },
              },
              {
                key: "setQualifiedClasses",
                value: function () {
                  var e = this
                  ;(this.qualifiedClasses = this.makeQualifiedClasses(
                    this.targetElementESRAMetadata.classes
                  )),
                    (this.unqualifiedClasses = Object.keys(
                      this.targetElementESRAMetadata.classes
                    ).filter(function (t) {
                      return !e.qualifiedClasses.includes(t)
                    }))
                },
              },
              {
                key: "isValidClass",
                value: function (e) {
                  return /^[A-Za-z_-][0-9A-Za-z_-]*$/.test(e)
                },
              },
              {
                key: "makeQualifiedClasses",
                value: function (e) {
                  var t = this
                  return Object.keys(e).filter(function (n) {
                    var r = e[n]
                    return (
                      !!t.isValidClass(n) &&
                      !n.startsWith("jss") &&
                      !n.startsWith("css-") &&
                      ":hover" !== n &&
                      (r.globalUniqenuess >
                        K.get().classes.qualification
                          .globalUniquenessThreshold ||
                        r.tagUniqenuess >
                          K.get().classes.qualification.tagUniquenessThreshold)
                    )
                  })
                },
              },
              {
                key: "setQualifiedInnerText",
                value: function () {
                  this.qualifiedInnerText = this.makeQualifiedInnerText(
                    this.targetElementESRAMetadata.innerText
                  )
                },
              },
              {
                key: "makeQualifiedInnerText",
                value: function (e) {
                  return e &&
                    (e.containsMatches <=
                      K.get().innerText.qualification.containsMatchMax ||
                      e.exactMatches <=
                        K.get().innerText.qualification.exactMatchMax) &&
                    e.content.length <=
                      K.get().innerText.qualification.maxLength &&
                    e.content.length >=
                      K.get().innerText.qualification.minLength
                    ? e
                    : null
                },
              },
              {
                key: "makeBasicElementPropertiesComparable",
                value: function (e) {
                  var t = this
                  return e.reduce(function (e, n) {
                    var r = n.position
                        ? ""
                            .concat(n.tag, ".")
                            .concat(n.position.slice(0, 2).join(","))
                        : n.tag,
                      i = n.classes
                        .filter(function (e) {
                          return t.qualifiedClasses.includes(e)
                        })
                        .map(function (e) {
                          return "".concat(r, ".").concat(e)
                        }),
                      o = Object.keys(n.attributes)
                        .filter(function (e) {
                          return t.qualifiedAttributes.includes(e)
                        })
                        .map(function (e) {
                          return "".concat(r, "[").concat(e, "]")
                        }),
                      a = [].concat(w(e), [r], w(i), w(o))
                    if (n.text) {
                      var s = "".concat(r, "<>")
                      a.push(s)
                      var u = "".concat(r, "<").concat(n.text, ">")
                      a.push(u)
                    }
                    return (
                      n.distance &&
                        (a.push("".concat(r, "->").concat(n.distance)),
                        a.push(
                          ""
                            .concat(r, "->[]")
                            .concat(t.getDistanceRange(n.distance))
                        )),
                      a
                    )
                  }, [])
                },
              },
              {
                key: "getDistanceRange",
                value: function (e) {
                  for (
                    var t = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                      n = 0,
                      r = t;
                    n < r.length;
                    n++
                  ) {
                    var i = r[n]
                    if (e < i) return i
                  }
                  return t[t.length - 1]
                },
              },
              {
                key: "setVisualVicinityComparable",
                value: function () {
                  this.visualVicinityComparable = this.makeVisualVicinityComparable(
                    this.targetElementESRAMetadata.visualVicinity
                  )
                },
              },
              {
                key: "makeVisualVicinityComparable",
                value: function (e) {
                  return this.makeBasicElementPropertiesComparable(e)
                },
              },
              {
                key: "setStructuralVicinityComparable",
                value: function () {
                  this.structuralVicinityComparable = this.makeStructuralVicinityComparable(
                    this.targetElementESRAMetadata.structuralVicinity
                  )
                },
              },
              {
                key: "makeStructuralVicinityComparable",
                value: function (e) {
                  return this.makeBasicElementPropertiesComparable(e)
                },
              },
              {
                key: "makeInnerFeaturesComparable",
                value: function (e) {
                  return e.reduce(function (e, t) {
                    var n = t.tag,
                      r = [].concat(w(e), [n])
                    switch (t.type) {
                      case f.Button:
                        t.text && r.push("".concat(n, "<").concat(t.text, ">"))
                        break
                      case f.Input:
                        t.inputType &&
                          r.push(
                            "".concat(n, "[type=").concat(t.inputType, "]")
                          ),
                          t.placeholder &&
                            r.push(
                              ""
                                .concat(n, "[placeholder=")
                                .concat(t.placeholder, "]")
                            )
                    }
                    return r
                  }, [])
                },
              },
              {
                key: "setInnerFeaturesComparable",
                value: function () {
                  this.innerFeaturesComparable = this.makeInnerFeaturesComparable(
                    this.targetElementESRAMetadata.innerFeatures
                  )
                },
              },
              {
                key: "isDealBreaker",
                value: function (e) {
                  if (
                    "input" === this.targetElementESRAMetadata.tag &&
                    "input" === e.tag
                  ) {
                    var t = function (e) {
                      return e.type ? e.type.value : "text"
                    }
                    if (
                      t(this.targetElementESRAMetadata.attributes) !==
                      t(e.attributes)
                    )
                      return !0
                  }
                  return !1
                },
              },
              {
                key: "tagSimilarity",
                value: function (e) {
                  return e.tag === this.targetElementESRAMetadata.tag ? 1 : 0
                },
              },
              {
                key: "attributesSimilarity",
                value: function (e) {
                  var t = this,
                    n = function (e) {
                      return [].concat(
                        w(t.keyValueObjectToArray(e)),
                        w(Object.keys(e))
                      )
                    },
                    r = this.makeQualifiedAttributes(e.attributes)
                      .qualifiedAttributesMap
                  return this.jaccard(n(this.qualifiedAttributesMap), n(r))
                },
              },
              {
                key: "indicativeAttributesSimilarity",
                value: function (e) {
                  return this.qualifiedAttributesMap.placehoder &&
                    e.attributes.placehoder &&
                    this.qualifiedAttributesMap.placehoder ===
                      e.attributes.placehoder.value
                    ? 1
                    : 0
                },
              },
              {
                key: "classSimilarity",
                value: function (e) {
                  return this.jaccard(
                    this.qualifiedClasses,
                    this.makeQualifiedClasses(e.classes)
                  )
                },
              },
              {
                key: "innerTextSimilarity",
                value: function (e) {
                  if (!this.targetElementESRAMetadata.innerText && !e.innerText)
                    return 1
                  var t = this.makeQualifiedInnerText(e.innerText)
                  return this.qualifiedInnerText &&
                    t &&
                    this.qualifiedInnerText.content === t.content
                    ? 1
                    : 0
                },
              },
              {
                key: "innerFeaturesSimilarity",
                value: function (e) {
                  return this.jaccard(
                    this.innerFeaturesComparable,
                    this.makeInnerFeaturesComparable(e.innerFeatures)
                  )
                },
              },
              {
                key: "visualVicinitySimilarity",
                value: function (e) {
                  return this.jaccard(
                    this.visualVicinityComparable,
                    this.makeVisualVicinityComparable(e.visualVicinity)
                  )
                },
              },
              {
                key: "structuralVicinitySimilarity",
                value: function (e) {
                  return this.jaccard(
                    this.structuralVicinityComparable,
                    this.makeStructuralVicinityComparable(e.structuralVicinity)
                  )
                },
              },
              {
                key: "styleSimilarity",
                value: function (e) {
                  var t = this,
                    n = function (e) {
                      return [].concat(
                        w(t.keyValueObjectToArray(e)),
                        w(Object.keys(e))
                      )
                    },
                    r = this.jaccard(
                      n(this.targetElementESRAMetadata.style.inline),
                      n(e.style.inline)
                    ),
                    i = this.jaccard(
                      n(this.targetElementESRAMetadata.style.computed),
                      n(e.style.computed)
                    )
                  return (
                    r * K.get().style.inlineWeight +
                    i * K.get().style.computedWeight
                  )
                },
              },
              {
                key: "keyValueObjectToArray",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "=",
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : void 0
                  return Object.keys(e).map(function (r) {
                    return ""
                      .concat(r)
                      .concat(t)
                      .concat(
                        (function (t) {
                          return n ? n(e, t) : e[t]
                        })(r)
                      )
                  })
                },
              },
              {
                key: "jaccard",
                value: function (e, t) {
                  return Array.isArray(e) &&
                    Array.isArray(t) &&
                    !e.length &&
                    !t.length
                    ? 1
                    : (0, te.$m)(e, t)
                },
              },
            ]),
            e
          )
        })(),
        re = (function () {
          function e(t, n) {
            a(this, e),
              (this.targetElementESRAMetadata = void 0),
              (this.targetElementStaticData = {}),
              (this.esraMetadataExtractor = void 0),
              (this.qualifiedAttributes = []),
              (this.qualifiedAttributesMap = {}),
              (this.qualifiedClasses = []),
              (this.qualifiedInnerFeatures = void 0),
              (this.qualifiedInnerText = void 0),
              (this.candidateQueries = []),
              (this.candidates = []),
              (this.uniqueCandidates = []),
              (this.rankedCandidates = []),
              (this.filteredAndSortedRankedCandidates = []),
              (this.finalCandidates = []),
              (this.similarity = void 0),
              (this.weightsSum = 0),
              (this.config = {
                innerText: { dropIfMoreThanNCandidates: 5 },
                innerFeatures: { mandatoryPercentage: 0.6, mandatoryMax: 6 },
                results: { scorePercentile: 0.75, epsilon: 0.01 },
              }),
              (this.targetElementESRAMetadata = t),
              (this.targetElementStaticData = n),
              (this.similarity = new ne(this.targetElementESRAMetadata)),
              (this.esraMetadataExtractor = new ee(document))
          }
          return (
            l(e, [
              {
                key: "makeWeight",
                value: function (e) {
                  return (this.weightsSum += e), e
                },
              },
              {
                key: "getWeight",
                value: function (e) {
                  return e / this.weightsSum
                },
              },
              {
                key: "extractMetadata",
                value: function (e) {
                  return new p(
                    this.esraMetadataExtractor.extract(e).toMetadata()
                  )
                },
              },
              {
                key: "select",
                value: function () {
                  var e,
                    t = this
                  if ("html" === this.targetElementESRAMetadata.tag) {
                    var n = document.querySelector("html")
                    return [
                      {
                        candidate: n,
                        score: 1,
                        esraMetadata: this.extractMetadata(n),
                      },
                    ]
                  }
                  this.setQualifiedAttributesQueries(),
                    this.setQualifiedClassesQueries(),
                    this.setInnerFeaturesQueries(),
                    (this.candidates = [])
                  var r,
                    i = this.candidateQueries
                      .filter(function (e) {
                        return !!e.length
                      })
                      .join(",")
                  ;(i.length && (this.candidates = E(i)),
                  (e = this.candidates).push.apply(
                    e,
                    w(this.getInnerTextCandidates())
                  ),
                  this.candidates.length) ||
                    (r = this.candidates).push.apply(
                      r,
                      w(this.getTagCandidates())
                    )
                  ;(this.uniqueCandidates = this.candidates.filter(function (
                    e,
                    t,
                    n
                  ) {
                    return n.indexOf(e) === t
                  })),
                    (this.rankedCandidates = this.uniqueCandidates
                      .filter(function (e) {
                        return e instanceof Element
                      })
                      .map(function (e) {
                        var n = t.extractMetadata(e),
                          r = t.similarity.rank(n)
                        return {
                          score: r.score,
                          candidate: e,
                          scores: r.scores,
                          esraMetadata: n,
                        }
                      })
                      .sort(function (e, t) {
                        return t.score - e.score
                      }))
                  var o = []
                  ;(this.filteredAndSortedRankedCandidates = this.rankedCandidates.filter(
                    function (e) {
                      return t.isVisible(e.candidate)
                        ? !(
                            R(t.targetElementStaticData) &&
                            !(function (e, t) {
                              var n = _(e),
                                r = _(t),
                                i = function (e) {
                                  return !e || 0 === Object.keys(e).length
                                }
                              if (i(n) && i(r)) return !0
                              if (i(n) || i(r)) return !1
                              var o = Object.keys(n).sort(),
                                a = Object.keys(r).sort()
                              if (o.length !== a.length) return !1
                              if (
                                !o.every(function (e, t) {
                                  return e === a[t]
                                })
                              )
                                return !1
                              for (var s in n) if (n[s] !== r[s]) return !1
                              return !0
                            })(
                              t.formatStaticCandidates(
                                e.esraMetadata.staticCandidates
                              ),
                              t.targetElementStaticData
                            )
                          )
                        : (o.push(e), !1)
                    }
                  )),
                    o.forEach(function (e) {
                      "INPUT" === e.candidate.tagName &&
                        t.filteredAndSortedRankedCandidates.find(function (t) {
                          return (
                            t.score > 0.1 && t.candidate.contains(e.candidate)
                          )
                        }) &&
                        t.filteredAndSortedRankedCandidates.push(e)
                    }),
                    (this.filteredAndSortedRankedCandidates = this.filteredAndSortedRankedCandidates.sort(
                      function (e, t) {
                        return t.score - e.score
                      }
                    ))
                  var a =
                    this.filteredAndSortedRankedCandidates.length *
                    (1 - this.config.results.scorePercentile)
                  this.finalCandidates = []
                  for (
                    var s = null, u = 0;
                    u < this.filteredAndSortedRankedCandidates.length;
                    ++u
                  ) {
                    var c = this.filteredAndSortedRankedCandidates[u]
                    if (
                      u >= a &&
                      (!s || s.score - c.score > this.config.results.epsilon)
                    )
                      break
                    ;(s = c), this.finalCandidates.push(c)
                  }
                  return this.finalCandidates
                },
              },
              {
                key: "selectOne",
                value: function () {
                  var e = this.select()
                  if (e.length) {
                    var t = e[0]
                    return { element: t.candidate, score: t.score }
                  }
                  return { element: void 0, score: 0 }
                },
              },
              {
                key: "getFinalCandidates",
                value: function () {
                  return this.finalCandidates
                },
              },
              {
                key: "setQualifiedAttributesQueries",
                value: function () {
                  var e = this
                  this.candidateQueries.push(
                    this.similarity
                      .getQualifiedAttributes()
                      .map(function (t) {
                        return "["
                          .concat(t, '="')
                          .concat(
                            e.targetElementESRAMetadata.attributes[t].value,
                            '"]'
                          )
                      })
                      .join(",")
                  )
                },
              },
              {
                key: "setQualifiedClassesQueries",
                value: function () {
                  this.candidateQueries.push(
                    this.similarity
                      .getQualifiedClasses()
                      .map(function (e) {
                        return ".".concat(e)
                      })
                      .join(",")
                  )
                },
              },
              {
                key: "setInnerFeaturesQueries",
                value: function () {
                  var e = this,
                    t = this.targetElementESRAMetadata.innerFeatures
                  t.length > 10 &&
                    (t = Object.values(
                      t.reduce(function (e, t) {
                        var n = "".concat(t.type, "_").concat(t.tag)
                        return e[n] ? e : H(H({}, e), {}, L({}, n, t))
                      }, {})
                    ))
                  var n,
                    r = Math.min(
                      Math.ceil(
                        t.length * this.config.innerFeatures.mandatoryPercentage
                      ),
                      this.config.innerFeatures.mandatoryMax
                    ),
                    i = ((n = t),
                    n.reduce(
                      function (e, t) {
                        var n = e
                          .map(function (e) {
                            return [].concat(w(e), [t])
                          })
                          .filter(function (e) {
                            return e.length <= r
                          })
                        return e.concat(n)
                      },
                      [[]]
                    )).filter(function (e) {
                      return e.length === r
                    })
                  i.forEach(function (t) {
                    var n = []
                    t.forEach(function (t) {
                      return n.push(e.getFeatureSelector(t))
                    }),
                      e.cartesian(n).forEach(function (t) {
                        return e.candidateQueries.push(
                          "*" +
                            t
                              .map(function (e) {
                                return ":has(".concat(e, ")")
                              })
                              .join("")
                        )
                      })
                  })
                },
              },
              {
                key: "cartesian",
                value: function (e) {
                  if (!e.length) return []
                  var t = [],
                    n = e.length - 1
                  return (
                    (function r(i, o) {
                      for (var a = 0, s = e[o].length; a < s; a++) {
                        var u = i.slice(0)
                        u.push(e[o][a]), o == n ? t.push(u) : r(u, o + 1)
                      }
                    })([], 0),
                    t
                  )
                },
              },
              {
                key: "getFeatureSelector",
                value: function (e) {
                  var t = [e.tag]
                  switch (e.type) {
                    case f.Media:
                      e.src &&
                        t.push("".concat(e.tag, '[src="').concat(e.src, '"]'))
                      break
                    case f.Anchor:
                      t.push("".concat(e.tag, '[href="').concat(e.href, '"]'))
                      break
                    case f.Button:
                      break
                    case f.Input:
                      t.push(
                        "".concat(e.tag, '[type="').concat(e.inputType, '"]')
                      ),
                        t.push(
                          ""
                            .concat(e.tag, '[placeholder="')
                            .concat(e.placeholder, '"]')
                        )
                  }
                  return t
                },
              },
              {
                key: "getInnerTextCandidates",
                value: function () {
                  var e = this.similarity.getQualifiedInnerText()
                  if (!e) return []
                  var t = J(e.content, { exact: !0 })
                  return t.length >
                    this.config.innerText.dropIfMoreThanNCandidates
                    ? []
                    : t
                },
              },
              {
                key: "getTagCandidates",
                value: function () {
                  return E(this.targetElementESRAMetadata.tag)
                },
              },
              {
                key: "formatStaticCandidates",
                value: function (e) {
                  var t = {}
                  return (
                    Object.keys(e).forEach(function (n) {
                      t[n] = e[n]
                    }),
                    t
                  )
                },
              },
              {
                key: "isVisible",
                value: function (e) {
                  return (
                    !!this.isVisibleByStyles(e) && !this.isBehindOtherElement(e)
                  )
                },
              },
              {
                key: "isVisibleByStyles",
                value: function (e) {
                  var t = window.getComputedStyle(e)
                  return "hidden" !== t.visibility && "none" !== t.display
                },
              },
              {
                key: "getScrollableParentsPositions",
                value: function (e) {
                  for (var t = [], n = N(e); null != n; )
                    (n.scrollHeight > n.clientHeight ||
                      n.scrollWidth > n.clientWidth) &&
                      t.push({
                        element: n,
                        top: n.scrollTop,
                        left: n.scrollLeft,
                      }),
                      (n = N(n))
                  return t
                },
              },
              {
                key: "isBehindOtherElement",
                value: function (e) {
                  var t = this.getScrollableParentsPositions(e)
                  e.scrollIntoView({ block: "center", inline: "center" })
                  var n = function (e) {
                      return (
                        t.forEach(function (e) {
                          var t = e.element,
                            n = e.top,
                            r = e.left
                          try {
                            t.scroll(r, n)
                          } catch (hn) {
                            console.warn(
                              "[isBehindOtherElement] couldn't restore initial scroll for",
                              { element: t, top: n, left: r },
                              hn
                            )
                          }
                        }),
                        e
                      )
                    },
                    r = e.getBoundingClientRect(),
                    i = document.elementFromPoint(
                      r.left + r.width / 2,
                      r.top + r.height / 2
                    )
                  if (i === e) return n(!1)
                  if (!i) return n(!0)
                  if (i.shadowRoot) return !this.isVisible(i)
                  for (var o = i; o; ) {
                    if (o === e) return n(!1)
                    o = N(o)
                  }
                  return n(!0)
                },
              },
            ]),
            e
          )
        })()
      function ie(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = b(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              i = function () {}
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: i,
            }
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          )
        }
        var o,
          a = !0,
          s = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (a = e.done), e
          },
          e: function (e) {
            ;(s = !0), (o = e)
          },
          f: function () {
            try {
              a || null == n.return || n.return()
            } finally {
              if (s) throw o
            }
          },
        }
      }
      function oe() {
        oe = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value
            },
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag"
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          c({}, "")
        } catch (T) {
          c = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function l(e, t, n, i) {
          var o = t && t.prototype instanceof h ? t : h,
            a = Object.create(o.prototype),
            s = new E(i || [])
          return r(a, "_invoke", { value: C(e, n, s) }), a
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) }
          } catch (T) {
            return { type: "throw", arg: T }
          }
        }
        e.wrap = l
        var d = {}
        function h() {}
        function p() {}
        function v() {}
        var m = {}
        c(m, o, function () {
          return this
        })
        var g = Object.getPrototypeOf,
          y = g && g(g(A([])))
        y && y !== t && n.call(y, o) && (m = y)
        var b = (v.prototype = h.prototype = Object.create(m))
        function w(e) {
          ;["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function S(e, t) {
          function i(r, o, a, u) {
            var c = f(e[r], e, o)
            if ("throw" !== c.type) {
              var l = c.arg,
                d = l.value
              return d && "object" == s(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      i("next", e, a, u)
                    },
                    function (e) {
                      i("throw", e, a, u)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(l.value = e), a(l)
                    },
                    function (e) {
                      return i("throw", e, a, u)
                    }
                  )
            }
            u(c.arg)
          }
          var o
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  i(e, n, t, r)
                })
              }
              return (o = o ? o.then(r, r) : r())
            },
          })
        }
        function C(e, t, n) {
          var r = "suspendedStart"
          return function (i, o) {
            if ("executing" === r)
              throw new Error("Generator is already running")
            if ("completed" === r) {
              if ("throw" === i) throw o
              return M()
            }
            for (n.method = i, n.arg = o; ; ) {
              var a = n.delegate
              if (a) {
                var s = I(a, n)
                if (s) {
                  if (s === d) continue
                  return s
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg)
                n.dispatchException(n.arg)
              } else "return" === n.method && n.abrupt("return", n.arg)
              r = "executing"
              var u = f(e, t, n)
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === d)
                )
                  continue
                return { value: u.arg, done: n.done }
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg))
            }
          }
        }
        function I(e, t) {
          var n = t.method,
            r = e.iterator[n]
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                I(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            )
          var i = f(r, e.iterator, t.arg)
          if ("throw" === i.type)
            return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), d
          var o = i.arg
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d)
        }
        function k(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function x(e) {
          var t = e.completion || {}
          ;(t.type = "normal"), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(k, this),
            this.reset(!0)
        }
        function A(e) {
          if (e) {
            var t = e[o]
            if (t) return t.call(e)
            if ("function" == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (i.next = i)
            }
          }
          return { next: M }
        }
        function M() {
          return { value: void 0, done: !0 }
        }
        return (
          (p.prototype = v),
          r(b, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: p, configurable: !0 }),
          (p.displayName = c(v, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), c(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          w(S.prototype),
          c(S.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise)
            var a = new S(l(t, n, r, i), o)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          w(b),
          c(b, u, "Generator"),
          c(b, o, function () {
            return this
          }),
          c(b, "toString", function () {
            return "[object Generator]"
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = []
            for (var r in t) n.push(r)
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in t) return (e.value = r), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = A),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ("throw" === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                )
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion
                if ("root" === o.tryLoc) return r("end")
                if (o.tryLoc <= this.prev) {
                  var s = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc")
                  if (s && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                  } else if (s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally")
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r]
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null)
              var a = o ? o.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), d
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ("throw" === r.type) {
                    var i = r.arg
                    x(n)
                  }
                  return i
                }
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function ae(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            u = s.value
        } catch (c) {
          return void n(c)
        }
        s.done ? t(u) : Promise.resolve(u).then(r, i)
      }
      function se(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (r, i) {
            var o = e.apply(t, n)
            function a(e) {
              ae(o, r, i, a, s, "next", e)
            }
            function s(e) {
              ae(o, r, i, a, s, "throw", e)
            }
            a(void 0)
          })
        }
      }
      function ue(e) {
        return (
          (ue = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          ue(e)
        )
      }
      function ce() {
        return (
          (ce =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = ue(e));

                    );
                    return e
                  })(e, t)
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t)
                    return i.get
                      ? i.get.call(arguments.length < 3 ? e : n)
                      : i.value
                  }
                }),
          ce.apply(this, arguments)
        )
      }
      function le(e, t) {
        return (
          (le = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e
              }),
          le(e, t)
        )
      }
      function fe(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && le(e, t)
      }
      function de() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ("function" === typeof Proxy) return !0
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          )
        } catch (hn) {
          return !1
        }
      }
      function he(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function pe(e) {
        var t = de()
        return function () {
          var n,
            r = ue(e)
          if (t) {
            var i = ue(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return (function (e, t) {
            if (t && ("object" === s(t) || "function" === typeof t)) return t
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              )
            return he(e)
          })(this, n)
        }
      }
      var ve,
        me,
        ge = (function () {
          function e() {
            a(this, e)
          }
          return (
            l(e, [
              {
                key: "getSelector",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n, r
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (t) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt("return", null)
                              case 2:
                                return (
                                  (n = ""),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  window.playwright.selector(t)
                                )
                              case 6:
                                ;(n = e.sent), (e.next = 22)
                                break
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e.catch(3)),
                                  (r = t.ownerDocument.defaultView)
                                    .playwright ||
                                    (r.playwright = window.playwright),
                                  (e.prev = 13),
                                  (e.next = 16),
                                  r.playwright.selector(t)
                                )
                              case 16:
                                ;(n = e.sent), (e.next = 22)
                                break
                              case 19:
                                ;(e.prev = 19),
                                  (e.t1 = e.catch(13)),
                                  console.log(
                                    "get selector error",
                                    t.nodeType,
                                    t,
                                    "\n",
                                    e.t0,
                                    "\n",
                                    e.t1
                                  )
                              case 22:
                                return e.abrupt("return", n)
                              case 23:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [
                          [3, 9],
                          [13, 19],
                        ]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "selector",
                value: (function (e) {
                  function t(t) {
                    return e.apply(this, arguments)
                  }
                  return (
                    (t.toString = function () {
                      return e.toString()
                    }),
                    t
                  )
                })(
                  (function () {
                    var e = se(
                      oe().mark(function e(t) {
                        var n, r
                        return oe().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    window.playwright.$(t)
                                  )
                                case 3:
                                  ;(r = e.sent), (e.next = 8)
                                  break
                                case 6:
                                  ;(e.prev = 6), (e.t0 = e.catch(0))
                                case 8:
                                  return e.abrupt(
                                    "return",
                                    null !== (n = r) && void 0 !== n
                                      ? n
                                      : this.selectOnIframe(t)
                                  )
                                case 9:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          this,
                          [[0, 6]]
                        )
                      })
                    )
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  })()
                ),
              },
              {
                key: "selectOnIframe",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n, r
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ((n = document.querySelector("iframe"))) {
                                  e.next = 3
                                  break
                                }
                                return e.abrupt("return", void 0)
                              case 3:
                                return (
                                  (r = n.contentWindow).playwright ||
                                    (r.playwright = window.playwright),
                                  (e.prev = 5),
                                  (e.next = 8),
                                  r.playwright.$(t)
                                )
                              case 8:
                                return e.abrupt("return", e.sent)
                              case 11:
                                ;(e.prev = 11),
                                  (e.t0 = e.catch(5)),
                                  console.log("selector error", t)
                              case 14:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[5, 11]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
            ]),
            e
          )
        })(),
        ye = (function () {
          function e() {
            a(this, e),
              (this.esraExtractors = []),
              (this.playwrightSelector = new ge())
          }
          return (
            l(e, [
              {
                key: "getESRAExtractor",
                value: function (e) {
                  var t = this.esraExtractors.find(function (t) {
                    return t.isSameDocument(e.ownerDocument)
                  })
                  if (t) return t
                  var n = new ee(e.ownerDocument)
                  return this.esraExtractors.push(n), n
                },
              },
              {
                key: "getSelector",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        c = arguments
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = (n =
                                    c.length > 1 && void 0 !== c[1] ? c[1] : {})
                                    .extractPlaywrightSelector),
                                  (i = void 0 === r || r),
                                  (o = n.extractEsraMetadata),
                                  (a = void 0 === o || o),
                                  t)
                                ) {
                                  e.next = 3
                                  break
                                }
                                return e.abrupt("return", null)
                              case 3:
                                if (
                                  ((s = {}),
                                  a &&
                                    ((u = this.getESRAExtractor(t).extract(t)),
                                    (s.esraMetadata = u.toMetadata())),
                                  !i)
                                ) {
                                  e.next = 9
                                  break
                                }
                                return (
                                  (e.next = 8),
                                  this.playwrightSelector.getSelector(t)
                                )
                              case 8:
                                s.playwrightSelector = e.sent
                              case 9:
                                return e.abrupt("return", s)
                              case 10:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "selector",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  this.playwrightSelector.selector(t)
                                )
                              case 1:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
            ]),
            e
          )
        })(),
        be = (function (e) {
          return (
            (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
            (e[(e.Load = 1)] = "Load"),
            (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
            (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
            (e[(e.Meta = 4)] = "Meta"),
            (e[(e.Custom = 5)] = "Custom"),
            (e[(e.Plugin = 6)] = "Plugin"),
            e
          )
        })(be || {}),
        we = (function (e) {
          return (
            (e[(e.Mutation = 0)] = "Mutation"),
            (e[(e.MouseMove = 1)] = "MouseMove"),
            (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
            (e[(e.Scroll = 3)] = "Scroll"),
            (e[(e.ViewportResize = 4)] = "ViewportResize"),
            (e[(e.Input = 5)] = "Input"),
            (e[(e.TouchMove = 6)] = "TouchMove"),
            (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
            (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
            (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
            (e[(e.Font = 10)] = "Font"),
            (e[(e.Log = 11)] = "Log"),
            (e[(e.Drag = 12)] = "Drag"),
            (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
            (e[(e.Selection = 14)] = "Selection"),
            (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
            e
          )
        })(we || {}),
        Se = (function (e) {
          return (
            (e[(e.MouseUp = 0)] = "MouseUp"),
            (e[(e.MouseDown = 1)] = "MouseDown"),
            (e[(e.Click = 2)] = "Click"),
            (e[(e.ContextMenu = 3)] = "ContextMenu"),
            (e[(e.DblClick = 4)] = "DblClick"),
            (e[(e.Focus = 5)] = "Focus"),
            (e[(e.Blur = 6)] = "Blur"),
            (e[(e.TouchStart = 7)] = "TouchStart"),
            (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
            (e[(e.TouchEnd = 9)] = "TouchEnd"),
            (e[(e.TouchCancel = 10)] = "TouchCancel"),
            e
          )
        })(Se || {}),
        Ce = (function (e) {
          return (
            (e[(e["2D"] = 0)] = "2D"),
            (e[(e.WebGL = 1)] = "WebGL"),
            (e[(e.WebGL2 = 2)] = "WebGL2"),
            e
          )
        })(Ce || {}),
        Ie = (function (e) {
          return (
            (e.Start = "start"),
            (e.Pause = "pause"),
            (e.Resume = "resume"),
            (e.Resize = "resize"),
            (e.Finish = "finish"),
            (e.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
            (e.LoadStylesheetStart = "load-stylesheet-start"),
            (e.LoadStylesheetEnd = "load-stylesheet-end"),
            (e.SkipStart = "skip-start"),
            (e.SkipEnd = "skip-end"),
            (e.MouseInteraction = "mouse-interaction"),
            (e.EventCast = "event-cast"),
            (e.CustomEvent = "custom-event"),
            (e.Flush = "flush"),
            (e.StateChange = "state-change"),
            (e.PlayBack = "play-back"),
            (e.Destroy = "destroy"),
            e
          )
        })(Ie || {}),
        ke = (function () {
          function e() {
            a(this, e)
          }
          return (
            l(e, [
              { key: "preEvent", value: function (e) {} },
              {
                key: "postEvent",
                value: function (e, t) {
                  return t
                },
              },
              { key: "handleMeta", value: function (e, t) {} },
              { key: "handleViewportResize", value: function (e) {} },
              { key: "handleMutation", value: function (e, t) {} },
              { key: "handleInput", value: function (e, t) {} },
              { key: "handleClick", value: function (e, t) {} },
              { key: "handleMouseDown", value: function (e, t) {} },
              { key: "handleMouseUp", value: function (e, t) {} },
              { key: "handleMouseMove", value: function (e, t) {} },
              { key: "handleFocus", value: function (e, t) {} },
            ]),
            e
          )
        })()
      !(function (e) {
        ;(e.Click = "click"),
          (e.Input = "input"),
          (e.Check = "check"),
          (e.UnCheck = "uncheck"),
          (e.Navigation = "navigation")
      })(ve || (ve = {})),
        (function (e) {
          e.UrlChange = "url-change"
        })(me || (me = {}))
      var xe,
        Ee = n(301),
        Ae = n.n(Ee),
        Me = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e) {
            var r,
              i = e.sessionMirror,
              o = e.elementSelector
            return (
              a(this, n),
              ((r = t.call(this)).sessionMirror = void 0),
              (r.elementSelector = void 0),
              (r.numberOfRetries = 3),
              (r.currentHref = void 0),
              (r.previousMouseDownData = void 0),
              (r.previousMousePositions = void 0),
              (r.previousMousePositionsNodeSelectors = void 0),
              (r.hasUndefinedFocusNode = !1),
              (r.lastMouseUpTime = 0),
              (r.lastMouseDownExtract = void 0),
              (r.allInteractableElementsMetadata = {
                mouseMove: void 0,
                mouseDown: void 0,
              }),
              (r.events = void 0),
              (r.currentEventIndex = -1),
              (r.enableRecordingAvailableInteractableElements = !0),
              (r.getBoundingBox = function (e) {
                var t = S(r.sessionMirror.getNodeById(e))
                if (t)
                  return null === t || void 0 === t
                    ? void 0
                    : t.getBoundingClientRect()
              }),
              (r.isPointWithinBoundingBox = function (e, t, n) {
                return (
                  e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                )
              }),
              (r.isPointWithinNodeBoundingBox = function (e, t, n) {
                var i = r.getBoundingBox(e)
                return (
                  !!i &&
                  t >= i.left &&
                  t <= i.right &&
                  n >= i.top &&
                  n <= i.bottom
                )
              }),
              (r.elementSelector = o),
              (r.sessionMirror = i),
              r
            )
          }
          return (
            l(n, [
              {
                key: "setEvents",
                value: function (e) {
                  this.events = e
                },
              },
              {
                key: "setConfiguration",
                value: function (e) {
                  var t = e.enableRecordingAvailableInteractableElements
                  this.enableRecordingAvailableInteractableElements = t
                },
              },
              {
                key: "preEvent",
                value: function (e) {
                  ++this.currentEventIndex
                },
              },
              {
                key: "postEvent",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t, n) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (n) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt("return", n)
                              case 2:
                                if (
                                  n.availableInteractableElementsAtStart ||
                                  !this
                                    .enableRecordingAvailableInteractableElements ||
                                  t.type !== be.IncrementalSnapshot ||
                                  (t.data.source !== we.MouseInteraction &&
                                    t.data.source !== we.Input &&
                                    t.data.source !== we.MediaInteraction)
                                ) {
                                  e.next = 6
                                  break
                                }
                                return (
                                  (e.next = 5),
                                  this.getInteractableElementsMetadata()
                                )
                              case 5:
                                n.availableInteractableElementsAtStart = e.sent
                              case 6:
                                return e.abrupt("return", n)
                              case 7:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "handleMeta",
                value: function (e) {
                  if (e.href !== this.currentHref)
                    return (
                      (this.currentHref = e.href),
                      { eventCode: ve.Navigation, url: e.href }
                    )
                },
              },
              {
                key: "handleInput",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n, r
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (t.userTriggered) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt("return")
                              case 2:
                                return (e.next = 4), this.getNodeById(t.id)
                              case 4:
                                return (
                                  (n = e.sent),
                                  (e.next = 7),
                                  this.elementSelector.getSelector(n)
                                )
                              case 7:
                                return (
                                  !(r = e.sent) || r.esraMetadata,
                                  e.abrupt(
                                    "return",
                                    H(
                                      {
                                        eventCode: this.getInputEventCode(n, t),
                                      },
                                      r
                                    )
                                  )
                                )
                              case 10:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "handleMouseMove",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n, r, i, o, a, s
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this.previousMousePositions = t.positions),
                                  (this.previousMousePositionsNodeSelectors = {}),
                                  !this.isLastMouseMoveEventBeforeMouseDownOrUndefinedFocus())
                                ) {
                                  e.next = 39
                                  break
                                }
                                ;(this.previousMousePositionsNodeSelectors = {}),
                                  (n = {}),
                                  (r = ie(this.previousMousePositions)),
                                  (e.prev = 6),
                                  r.s()
                              case 8:
                                if ((i = r.n()).done) {
                                  e.next = 28
                                  break
                                }
                                if (((o = i.value), (a = o.id), !n[a])) {
                                  e.next = 13
                                  break
                                }
                                return e.abrupt("continue", 26)
                              case 13:
                                return (
                                  (n[a] = !0),
                                  (e.next = 16),
                                  this.getNodeById(a)
                                )
                              case 16:
                                return (
                                  (s = e.sent),
                                  (e.prev = 17),
                                  (e.next = 20),
                                  this.elementSelector.getSelector(s)
                                )
                              case 20:
                                ;(this.previousMousePositionsNodeSelectors[a] =
                                  e.sent),
                                  (e.next = 26)
                                break
                              case 23:
                                ;(e.prev = 23),
                                  (e.t0 = e.catch(17)),
                                  console.warn(
                                    "error with extracting selector for node during previousMousePositionsNodeSelectors mapping",
                                    s,
                                    e.t0
                                  )
                              case 26:
                                e.next = 8
                                break
                              case 28:
                                e.next = 33
                                break
                              case 30:
                                ;(e.prev = 30), (e.t1 = e.catch(6)), r.e(e.t1)
                              case 33:
                                return (e.prev = 33), r.f(), e.finish(33)
                              case 36:
                                return (
                                  (e.next = 38),
                                  this.getInteractableElementsMetadata()
                                )
                              case 38:
                                this.allInteractableElementsMetadata.mouseMove =
                                  e.sent
                              case 39:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [
                          [6, 30, 33, 36],
                          [17, 23],
                        ]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "isLastMouseMoveEventBeforeMouseDownOrUndefinedFocus",
                value: function () {
                  for (
                    var e = this.currentEventIndex + 1;
                    e < this.events.length;
                    ++e
                  ) {
                    var t = this.events[e]
                    if (t.type === be.IncrementalSnapshot)
                      switch (t.data.source) {
                        case we.MouseMove:
                          return !1
                        case we.MouseInteraction:
                          switch (t.data.type) {
                            case Se.Click:
                            case Se.MouseDown:
                              return !0
                            case Se.Focus:
                              return -1 === t.data.id
                          }
                      }
                  }
                  return !1
                },
              },
              {
                key: "handleMouseDown",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.getNodeById(t.id)
                              case 2:
                                return (
                                  (n = e.sent),
                                  (e.prev = 3),
                                  (e.t0 = n),
                                  (e.next = 7),
                                  this.elementSelector.getSelector(n)
                                )
                              case 7:
                                return (
                                  (e.t1 = e.sent),
                                  (this.lastMouseDownExtract = {
                                    node: e.t0,
                                    selector: e.t1,
                                  }),
                                  (e.next = 11),
                                  this.getInteractableElementsMetadata()
                                )
                              case 11:
                                ;(this.allInteractableElementsMetadata.mouseDown =
                                  e.sent),
                                  (e.next = 17)
                                break
                              case 14:
                                ;(e.prev = 14),
                                  (e.t2 = e.catch(3)),
                                  console.warn(
                                    "error with extracting selector for node during handleMouseDown",
                                    n,
                                    e.t2
                                  )
                              case 17:
                                this.previousMouseDownData = t
                              case 18:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[3, 14]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "handleMouseUp",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t, n) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.lastMouseUpTime = n.timestamp
                              case 1:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "isLastMouseDownValidForClick",
                value: function (e) {
                  return (
                    !!this.lastMouseDownExtract && e - this.lastMouseUpTime < 10
                  )
                },
              },
              {
                key: "invalidateLastMouseDown",
                value: function () {
                  ;(this.lastMouseUpTime = 0),
                    (this.lastMouseDownExtract = void 0),
                    (this.allInteractableElementsMetadata.mouseDown = void 0)
                },
              },
              {
                key: "handleFocus",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.hasUndefinedFocusNode = -1 === t.id
                              case 1:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "handleClick",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t, n) {
                      var r,
                        i,
                        o,
                        a = this
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (void 0 !== t.x && void 0 !== t.y) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt("return")
                              case 2:
                                return (
                                  (r = this.isLastMouseDownValidForClick(
                                    n.timestamp
                                  )),
                                  (function () {
                                    var e = se(
                                      oe().mark(function e() {
                                        var i, o
                                        return oe().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (i = a.getNodeIdForClick(
                                                    t,
                                                    n
                                                  )),
                                                  (e.next = 3),
                                                  a.getNodeById(i)
                                                )
                                              case 3:
                                                ;(o = e.sent),
                                                  console.log("click", o),
                                                  console.log(
                                                    "isMouseDownValidForClick",
                                                    r
                                                  ),
                                                  i !==
                                                    a.previousMouseDownData
                                                      .id &&
                                                    r &&
                                                    console.warn("not same")
                                              case 7:
                                              case "end":
                                                return e.stop()
                                            }
                                        }, e)
                                      })
                                    )
                                    return function () {
                                      return e.apply(this, arguments)
                                    }
                                  })(),
                                  (i = (function () {
                                    var e = se(
                                      oe().mark(function e() {
                                        var i, o, s, u
                                        return oe().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (!r) {
                                                  e.next = 19
                                                  break
                                                }
                                                return (
                                                  (e.t0 = H),
                                                  (e.t1 = H(
                                                    {},
                                                    a.lastMouseDownExtract
                                                      .selector
                                                  )),
                                                  (e.t2 = {}),
                                                  (e.next = 6),
                                                  a.elementSelector.getSelector(
                                                    a.lastMouseDownExtract.node,
                                                    { extractEsraMetadata: !1 }
                                                  )
                                                )
                                              case 6:
                                                if (
                                                  ((e.t4 = i = e.sent),
                                                  (e.t3 = null === e.t4),
                                                  e.t3)
                                                ) {
                                                  e.next = 10
                                                  break
                                                }
                                                e.t3 = void 0 === i
                                              case 10:
                                                if (!e.t3) {
                                                  e.next = 14
                                                  break
                                                }
                                                ;(e.t5 = void 0), (e.next = 15)
                                                break
                                              case 14:
                                                e.t5 = i.playwrightSelector
                                              case 15:
                                                return (
                                                  (e.t6 = e.t5),
                                                  (e.t7 =
                                                    a.allInteractableElementsMetadata.mouseDown),
                                                  (e.t8 = {
                                                    playwrightSelectorForSnapshot:
                                                      e.t6,
                                                    availableInteractableElementsAtStart:
                                                      e.t7,
                                                  }),
                                                  e.abrupt(
                                                    "return",
                                                    (0, e.t0)(e.t1, e.t2, e.t8)
                                                  )
                                                )
                                              case 19:
                                                return (
                                                  (o = a.getNodeIdForClick(
                                                    t,
                                                    n
                                                  )),
                                                  (e.next = 22),
                                                  a.getNodeById(o)
                                                )
                                              case 22:
                                                if (
                                                  ((s = e.sent),
                                                  !a
                                                    .previousMousePositionsNodeSelectors[
                                                    o
                                                  ])
                                                ) {
                                                  e.next = 43
                                                  break
                                                }
                                                return (
                                                  console.log(
                                                    "taking selection data from mouse position for node id",
                                                    o
                                                  ),
                                                  (e.t9 = H),
                                                  (e.t10 = H(
                                                    {},
                                                    a
                                                      .previousMousePositionsNodeSelectors[
                                                      o
                                                    ]
                                                  )),
                                                  (e.t11 = {}),
                                                  (e.next = 30),
                                                  a.elementSelector.getSelector(
                                                    s,
                                                    { extractEsraMetadata: !1 }
                                                  )
                                                )
                                              case 30:
                                                if (
                                                  ((e.t13 = u = e.sent),
                                                  (e.t12 = null === e.t13),
                                                  e.t12)
                                                ) {
                                                  e.next = 34
                                                  break
                                                }
                                                e.t12 = void 0 === u
                                              case 34:
                                                if (!e.t12) {
                                                  e.next = 38
                                                  break
                                                }
                                                ;(e.t14 = void 0), (e.next = 39)
                                                break
                                              case 38:
                                                e.t14 = u.playwrightSelector
                                              case 39:
                                                return (
                                                  (e.t15 = e.t14),
                                                  (e.t16 =
                                                    a.allInteractableElementsMetadata.mouseMove),
                                                  (e.t17 = {
                                                    playwrightSelectorForSnapshot:
                                                      e.t15,
                                                    availableInteractableElementsAtStart:
                                                      e.t16,
                                                  }),
                                                  e.abrupt(
                                                    "return",
                                                    (0, e.t9)(
                                                      e.t10,
                                                      e.t11,
                                                      e.t17
                                                    )
                                                  )
                                                )
                                              case 43:
                                                return e.abrupt(
                                                  "return",
                                                  a.elementSelector.getSelector(
                                                    s
                                                  )
                                                )
                                              case 44:
                                              case "end":
                                                return e.stop()
                                            }
                                        }, e)
                                      })
                                    )
                                    return function () {
                                      return e.apply(this, arguments)
                                    }
                                  })()),
                                  (e.next = 7),
                                  i()
                                )
                              case 7:
                                return (
                                  (o = e.sent),
                                  this.invalidateLastMouseDown(),
                                  e.abrupt(
                                    "return",
                                    H({ eventCode: ve.Click }, o)
                                  )
                                )
                              case 10:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "getNextMouseMoveEvent",
                value: function () {
                  for (
                    var e = this.currentEventIndex + 1;
                    e < this.events.length;
                    ++e
                  ) {
                    var t = this.events[e]
                    if (
                      t.type === be.IncrementalSnapshot &&
                      t.data.source === we.MouseMove
                    )
                      return t
                  }
                },
              },
              {
                key: "getNodeIdForClick",
                value: function (e, t) {
                  var n = this
                  if (
                    this.hasUndefinedFocusNode &&
                    this.previousMouseDownData &&
                    this.previousMouseDownData.id !== e.id
                  ) {
                    var r = {
                      next: (function () {
                        var e = n.getNextMouseMoveEvent()
                        if (e) {
                          var r = w(e.data.positions)
                            .reverse()
                            .find(function (n) {
                              return e.timestamp + n.timeOffset < t.timestamp
                            })
                          if (r) return r.id
                        }
                      })(),
                      previous: (function () {
                        if (n.previousMousePositions) {
                          var e = w(n.previousMousePositions)
                            .reverse()
                            .find(function (e) {
                              return !0
                            })
                          if (e) return e.id
                        }
                      })(),
                      point: (function () {
                        try {
                          var t = n.sessionMirror.getNodeById(e.id),
                            r = Array.from(T(t)).filter(function (e) {
                              return (
                                "none" ===
                                window.getComputedStyle(e).pointerEvents
                              )
                            }),
                            i = []
                          if (r.length) {
                            r.forEach(function (e) {
                              var t = e,
                                n = t.getAttribute("style")
                              i.push(n),
                                t.setAttribute(
                                  "style",
                                  n + ";pointer-events:auto !important"
                                )
                            })
                            var o = document
                              .querySelector("iframe")
                              .contentDocument.elementFromPoint(e.x, e.y)
                            if (
                              (r.forEach(function (e, t) {
                                e.setAttribute("style", i[t])
                              }),
                              o)
                            ) {
                              var a = n.sessionMirror.getMeta(o)
                              if (a) return a.id
                            }
                          }
                        } catch (hn) {
                          console.warn("element from point calc error", hn)
                        }
                      })(),
                      original: e.id,
                    }
                    console.log(r)
                    var i = r.next || r.previous || e.id,
                      o =
                        r.point &&
                        (function () {
                          if (i === r.point) return !1
                          var t = n.sessionMirror.getNodeById(i)
                          return n.isPointWithinBoundingBox(
                            e.x,
                            e.y,
                            t.getBoundingClientRect()
                          )
                        })()
                          ? r.point
                          : i
                    return console.log("using node id", o), o
                  }
                  return e.id
                },
              },
              {
                key: "getNodeById",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u = arguments
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = (n =
                                    u.length > 1 && void 0 !== u[1] ? u[1] : {})
                                    .retriesLeft),
                                  (i = void 0 === r ? this.numberOfRetries : r),
                                  (o = n.useCompoundInteractableDetection),
                                  (a = void 0 === o || o),
                                  i)
                                ) {
                                  e.next = 4
                                  break
                                }
                                return (
                                  console.error("no node"),
                                  e.abrupt("return", null)
                                )
                              case 4:
                                if ((s = this.sessionMirror.getNodeById(t))) {
                                  e.next = 9
                                  break
                                }
                                return (
                                  (e.next = 8),
                                  Ae()(100 * (this.numberOfRetries - i + 1))
                                )
                              case 8:
                                return e.abrupt(
                                  "return",
                                  this.getNodeById(t, {
                                    retriesLeft: i - 1,
                                    useCompoundInteractableDetection: a,
                                  })
                                )
                              case 9:
                                return e.abrupt("return", a ? S(s) : s)
                              case 10:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "getInputEventCode",
                value: function (e, t) {
                  switch (e.getAttribute("type")) {
                    case "checkbox":
                    case "radio":
                      return t.isChecked ? ve.UnCheck : ve.Check
                    default:
                      return ve.Input
                  }
                },
              },
              {
                key: "getInteractableElementsMetadata",
                value: (function () {
                  var e = se(
                    oe().mark(function e() {
                      var t, n, r, i, o
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  this
                                    .enableRecordingAvailableInteractableElements
                                ) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt("return", [])
                              case 2:
                                return (
                                  (t = document.querySelector("iframe")
                                    .contentWindow),
                                  (n = t.document),
                                  (r = C(n)),
                                  (i = new ee(n)),
                                  (e.next = 8),
                                  Promise.all(
                                    r.map(
                                      (function () {
                                        var e = se(
                                          oe().mark(function e(t) {
                                            var n
                                            return oe().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (n = i
                                                        .extract(t)
                                                        .toMetadata()),
                                                      e.abrupt("return", {
                                                        esraMetadata: n,
                                                      })
                                                    )
                                                  case 2:
                                                  case "end":
                                                    return e.stop()
                                                }
                                            }, e)
                                          })
                                        )
                                        return function (t) {
                                          return e.apply(this, arguments)
                                        }
                                      })()
                                    )
                                  )
                                )
                              case 8:
                                return (o = e.sent), e.abrupt("return", o)
                              case 10:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
            ]),
            n
          )
        })(ke),
        Te = (function () {
          function e(t) {
            var n = this,
              r = t.eventHandlers
            a(this, e),
              (this.handlers = void 0),
              (this.events = []),
              (this.getEvents = function () {
                return n.events
              }),
              (this.processEvent = (function () {
                var e = se(
                  oe().mark(function e(t) {
                    var r, i
                    return oe().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              n.events.push(t),
                              n.handlers.preEvent(t),
                              (e.next = 4),
                              n.handleEvent(t)
                            )
                          case 4:
                            return (
                              (r = e.sent),
                              (e.next = 7),
                              n.handlers.postEvent(t, r)
                            )
                          case 7:
                            return (
                              (i = e.sent),
                              e.abrupt(
                                "return",
                                n.handlers.controlledReturn
                                  ? n.handlers.getReturnValue()
                                  : i
                              )
                            )
                          case 9:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (this.handlers = r)
          }
          return (
            l(e, [
              {
                key: "setHandlers",
                value: function (e) {
                  this.handlers = e
                },
              },
              {
                key: "handleEvent",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(e.t0 = t.type),
                                  (e.next =
                                    e.t0 === be.Meta
                                      ? 3
                                      : e.t0 === be.IncrementalSnapshot
                                      ? 4
                                      : 14)
                                break
                              case 3:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleMeta(t.data, t)
                                )
                              case 4:
                                ;(e.t1 = t.data.source),
                                  (e.next =
                                    e.t1 === we.ViewportResize
                                      ? 7
                                      : e.t1 === we.Mutation
                                      ? 8
                                      : e.t1 === we.Input
                                      ? 9
                                      : e.t1 === we.MouseInteraction
                                      ? 10
                                      : e.t1 === we.MouseMove
                                      ? 11
                                      : 12)
                                break
                              case 7:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleViewportResize(t.data, t)
                                )
                              case 8:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleMutation(t.data, t)
                                )
                              case 9:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleInput(t.data, t)
                                )
                              case 10:
                                return e.abrupt(
                                  "return",
                                  this.handleMouseInteraction(t.data, t)
                                )
                              case 11:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleMouseMove(t.data, t)
                                )
                              case 12:
                                return e.abrupt("break", 13)
                              case 13:
                              case 14:
                                return e.abrupt("break", 15)
                              case 15:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "handleMouseInteraction",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t, n) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(e.t0 = t.type),
                                  (e.next =
                                    e.t0 === Se.Click
                                      ? 3
                                      : e.t0 === Se.MouseDown
                                      ? 4
                                      : e.t0 === Se.MouseUp
                                      ? 5
                                      : e.t0 === Se.Focus
                                      ? 6
                                      : 7)
                                break
                              case 3:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleClick(t, n)
                                )
                              case 4:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleMouseDown(t, n)
                                )
                              case 5:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleMouseUp(t, n)
                                )
                              case 6:
                                return e.abrupt(
                                  "return",
                                  this.handlers.handleFocus(t, n)
                                )
                              case 7:
                                return e.abrupt("break", 8)
                              case 8:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
            ]),
            e
          )
        })()
      function Ne(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e))
            } catch (hn) {
              o(hn)
            }
          }
          function s(e) {
            try {
              u(r.throw(e))
            } catch (hn) {
              o(hn)
            }
          }
          function u(e) {
            var t
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t)
                    })).then(a, s)
          }
          u((r = r.apply(e, t || [])).next())
        })
      }
      function _e(e) {
        return e.nodeType === e.ELEMENT_NODE
      }
      function Re(e) {
        var t = null === e || void 0 === e ? void 0 : e.host
        return Boolean(
          (null === t || void 0 === t ? void 0 : t.shadowRoot) === e
        )
      }
      function Oe(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e)
      }
      function De(e) {
        try {
          var t = e.rules || e.cssRules
          return t
            ? ((n = Array.from(t).map(Le).join("")).includes(
                " background-clip: text;"
              ) &&
                !n.includes(" -webkit-background-clip: text;") &&
                (n = n.replace(
                  " background-clip: text;",
                  " -webkit-background-clip: text; background-clip: text;"
                )),
              n)
            : null
        } catch (r) {
          return null
        }
        var n
      }
      function Le(e) {
        var t = e.cssText
        if (
          (function (e) {
            return "styleSheet" in e
          })(e)
        )
          try {
            t = De(e.styleSheet) || t
          } catch (n) {}
        return t
      }
      !(function (e) {
        ;(e[(e.Document = 0)] = "Document"),
          (e[(e.DocumentType = 1)] = "DocumentType"),
          (e[(e.Element = 2)] = "Element"),
          (e[(e.Text = 3)] = "Text"),
          (e[(e.CDATA = 4)] = "CDATA"),
          (e[(e.Comment = 5)] = "Comment")
      })(xe || (xe = {}))
      var Fe = (function () {
        function e() {
          ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
        }
        return (
          (e.prototype.getId = function (e) {
            var t
            if (!e) return -1
            var n =
              null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id
            return null !== n && void 0 !== n ? n : -1
          }),
          (e.prototype.getNode = function (e) {
            return this.idNodeMap.get(e) || null
          }),
          (e.prototype.getIds = function () {
            return Array.from(this.idNodeMap.keys())
          }),
          (e.prototype.getMeta = function (e) {
            return this.nodeMetaMap.get(e) || null
          }),
          (e.prototype.removeNodeFromMap = function (e) {
            var t = this,
              n = this.getId(e)
            this.idNodeMap.delete(n),
              e.childNodes &&
                e.childNodes.forEach(function (e) {
                  return t.removeNodeFromMap(e)
                })
          }),
          (e.prototype.has = function (e) {
            return this.idNodeMap.has(e)
          }),
          (e.prototype.hasNode = function (e) {
            return this.nodeMetaMap.has(e)
          }),
          (e.prototype.add = function (e, t) {
            var n = t.id
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
          }),
          (e.prototype.replace = function (e, t) {
            var n = this.getNode(e)
            if (n) {
              var r = this.nodeMetaMap.get(n)
              r && this.nodeMetaMap.set(t, r)
            }
            this.idNodeMap.set(e, t)
          }),
          (e.prototype.reset = function () {
            ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
          }),
          e
        )
      })()
      function Ve() {
        return new Fe()
      }
      function Be(e) {
        var t = e.maskInputOptions,
          n = e.tagName,
          r = e.type,
          i = e.value,
          o = e.maskInputFn,
          a = i || ""
        return (
          (t[n.toLowerCase()] || t[r]) && (a = o ? o(a) : "*".repeat(a.length)),
          a
        )
      }
      var je = "__rrweb_original__"
      var Pe,
        We,
        Ue = 1,
        Ge = new RegExp("[^a-z0-9-_:]"),
        ze = -2
      function Ze() {
        return Ue++
      }
      var qe = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        He = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
        Ye = /^(data:)([^,]*),(.*)/i
      function Qe(e, t) {
        return (e || "").replace(qe, function (e, n, r, i, o, a) {
          var s,
            u = r || o || a,
            c = n || i || ""
          if (!u) return e
          if (!He.test(u)) return "url(".concat(c).concat(u).concat(c, ")")
          if (Ye.test(u)) return "url(".concat(c).concat(u).concat(c, ")")
          if ("/" === u[0])
            return "url("
              .concat(c)
              .concat(
                ((s = t),
                (s.indexOf("//") > -1
                  ? s.split("/").slice(0, 3).join("/")
                  : s.split("/")[0]
                ).split("?")[0] + u)
              )
              .concat(c, ")")
          var l = t.split("/"),
            f = u.split("/")
          l.pop()
          for (var d = 0, h = f; d < h.length; d++) {
            var p = h[d]
            "." !== p && (".." === p ? l.pop() : l.push(p))
          }
          return "url(".concat(c).concat(l.join("/")).concat(c, ")")
        })
      }
      var Ke = /^[^ \t\n\r\u000c]+/,
        Je = /^[, \t\n\r\u000c]+/
      function Xe(e, t) {
        if (!t || "" === t.trim()) return t
        var n = e.createElement("a")
        return (n.href = t), n.href
      }
      function $e(e) {
        return Boolean("svg" === e.tagName || e.ownerSVGElement)
      }
      function et() {
        var e = document.createElement("a")
        return (e.href = ""), e.href
      }
      function tt(e, t, n, r) {
        return "src" === n ||
          ("href" === n && r && ("use" !== t || "#" !== r[0])) ||
          ("xlink:href" === n && r && "#" !== r[0])
          ? Xe(e, r)
          : "background" !== n ||
            !r ||
            ("table" !== t && "td" !== t && "th" !== t)
          ? "srcset" === n && r
            ? (function (e, t) {
                if ("" === t.trim()) return t
                var n = 0
                function r(e) {
                  var r,
                    i = e.exec(t.substring(n))
                  return i ? ((r = i[0]), (n += r.length), r) : ""
                }
                for (var i = []; r(Je), !(n >= t.length); ) {
                  var o = r(Ke)
                  if ("," === o.slice(-1))
                    (o = Xe(e, o.substring(0, o.length - 1))), i.push(o)
                  else {
                    var a = ""
                    o = Xe(e, o)
                    for (var s = !1; ; ) {
                      var u = t.charAt(n)
                      if ("" === u) {
                        i.push((o + a).trim())
                        break
                      }
                      if (s) ")" === u && (s = !1)
                      else {
                        if ("," === u) {
                          ;(n += 1), i.push((o + a).trim())
                          break
                        }
                        "(" === u && (s = !0)
                      }
                      ;(a += u), (n += 1)
                    }
                  }
                }
                return i.join(", ")
              })(e, r)
            : "style" === n && r
            ? Qe(r, et())
            : "object" === t && "data" === n && r
            ? Xe(e, r)
            : r
          : Xe(e, r)
      }
      function nt(e, t, n) {
        if (!e) return !1
        if (e.nodeType !== e.ELEMENT_NODE) return !!n && nt(e.parentNode, t, n)
        for (var r = e.classList.length; r--; ) {
          var i = e.classList[r]
          if (t.test(i)) return !0
        }
        return !!n && nt(e.parentNode, t, n)
      }
      function rt(e, t, n) {
        var r = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        if (null === r) return !1
        if ("string" === typeof t) {
          if (r.classList.contains(t)) return !0
          if (r.closest(".".concat(t))) return !0
        } else if (nt(r, t, !0)) return !0
        if (n) {
          if (r.matches(n)) return !0
          if (r.closest(n)) return !0
        }
        return !1
      }
      function it(e, t) {
        var n = t.doc,
          r = t.mirror,
          i = t.blockClass,
          o = t.blockSelector,
          a = t.maskTextClass,
          s = t.maskTextSelector,
          u = t.inlineStylesheet,
          c = t.maskInputOptions,
          l = void 0 === c ? {} : c,
          f = t.maskTextFn,
          d = t.maskInputFn,
          h = t.dataURLOptions,
          p = void 0 === h ? {} : h,
          v = t.inlineImages,
          m = t.recordCanvas,
          g = t.keepIframeSrcFn,
          y = t.newlyAddedElement,
          b = void 0 !== y && y,
          w = (function (e, t) {
            if (!t.hasNode(e)) return
            var n = t.getId(e)
            return 1 === n ? void 0 : n
          })(n, r)
        switch (e.nodeType) {
          case e.DOCUMENT_NODE:
            return "CSS1Compat" !== e.compatMode
              ? { type: xe.Document, childNodes: [], compatMode: e.compatMode }
              : { type: xe.Document, childNodes: [] }
          case e.DOCUMENT_TYPE_NODE:
            return {
              type: xe.DocumentType,
              name: e.name,
              publicId: e.publicId,
              systemId: e.systemId,
              rootId: w,
            }
          case e.ELEMENT_NODE:
            return (function (e, t) {
              for (
                var n = t.doc,
                  r = t.blockClass,
                  i = t.blockSelector,
                  o = t.inlineStylesheet,
                  a = t.maskInputOptions,
                  s = void 0 === a ? {} : a,
                  u = t.maskInputFn,
                  c = t.dataURLOptions,
                  l = void 0 === c ? {} : c,
                  f = t.inlineImages,
                  d = t.recordCanvas,
                  h = t.keepIframeSrcFn,
                  p = t.newlyAddedElement,
                  v = void 0 !== p && p,
                  m = t.rootId,
                  g = (function (e, t, n) {
                    if ("string" === typeof t) {
                      if (e.classList.contains(t)) return !0
                    } else
                      for (var r = e.classList.length; r--; ) {
                        var i = e.classList[r]
                        if (t.test(i)) return !0
                      }
                    return !!n && e.matches(n)
                  })(e, r, i),
                  y = (function (e) {
                    if (e instanceof HTMLFormElement) return "form"
                    var t = e.tagName.toLowerCase().trim()
                    return Ge.test(t) ? "div" : t
                  })(e),
                  b = {},
                  w = e.attributes.length,
                  S = 0;
                S < w;
                S++
              ) {
                var C = e.attributes[S]
                b[C.name] = tt(n, y, C.name, C.value)
              }
              if ("link" === y && o) {
                var I = Array.from(n.styleSheets).find(function (t) {
                    return t.href === e.href
                  }),
                  k = null
                I && (k = De(I)),
                  k &&
                    (delete b.rel, delete b.href, (b._cssText = Qe(k, I.href)))
              }
              if (
                "style" === y &&
                e.sheet &&
                !(e.innerText || e.textContent || "").trim().length
              ) {
                ;(k = De(e.sheet)) && (b._cssText = Qe(k, et()))
              }
              if ("input" === y || "textarea" === y || "select" === y) {
                var x = e.value,
                  E = e.checked
                "radio" !== b.type &&
                "checkbox" !== b.type &&
                "submit" !== b.type &&
                "button" !== b.type &&
                x
                  ? (b.value = Be({
                      type: b.type,
                      tagName: y,
                      value: x,
                      maskInputOptions: s,
                      maskInputFn: u,
                    }))
                  : E && (b.checked = E)
              }
              "option" === y &&
                (e.selected && !s.select
                  ? (b.selected = !0)
                  : delete b.selected)
              if ("canvas" === y && d)
                if ("2d" === e.__context)
                  (function (e) {
                    var t = e.getContext("2d")
                    if (!t) return !0
                    for (var n = 0; n < e.width; n += 50)
                      for (var r = 0; r < e.height; r += 50) {
                        var i = t.getImageData,
                          o = je in i ? i[je] : i
                        if (
                          new Uint32Array(
                            o.call(
                              t,
                              n,
                              r,
                              Math.min(50, e.width - n),
                              Math.min(50, e.height - r)
                            ).data.buffer
                          ).some(function (e) {
                            return 0 !== e
                          })
                        )
                          return !1
                      }
                    return !0
                  })(e) || (b.rr_dataURL = e.toDataURL(l.type, l.quality))
                else if (!("__context" in e)) {
                  var A = e.toDataURL(l.type, l.quality),
                    M = document.createElement("canvas")
                  ;(M.width = e.width),
                    (M.height = e.height),
                    A !== M.toDataURL(l.type, l.quality) && (b.rr_dataURL = A)
                }
              if ("img" === y && f) {
                Pe ||
                  ((Pe = n.createElement("canvas")), (We = Pe.getContext("2d")))
                var T = e,
                  N = T.crossOrigin
                T.crossOrigin = "anonymous"
                var _ = function () {
                  try {
                    ;(Pe.width = T.naturalWidth),
                      (Pe.height = T.naturalHeight),
                      We.drawImage(T, 0, 0),
                      (b.rr_dataURL = Pe.toDataURL(l.type, l.quality))
                  } catch (e) {
                    console.warn(
                      "Cannot inline img src="
                        .concat(T.currentSrc, "! Error: ")
                        .concat(e)
                    )
                  }
                  N ? (b.crossOrigin = N) : T.removeAttribute("crossorigin")
                }
                T.complete && 0 !== T.naturalWidth ? _() : (T.onload = _)
              }
              ;("audio" !== y && "video" !== y) ||
                ((b.rr_mediaState = e.paused ? "paused" : "played"),
                (b.rr_mediaCurrentTime = e.currentTime))
              v ||
                (e.scrollLeft && (b.rr_scrollLeft = e.scrollLeft),
                e.scrollTop && (b.rr_scrollTop = e.scrollTop))
              if (g) {
                var R = e.getBoundingClientRect(),
                  O = R.width,
                  D = R.height
                b = {
                  class: b.class,
                  rr_width: "".concat(O, "px"),
                  rr_height: "".concat(D, "px"),
                }
              }
              "iframe" !== y ||
                h(b.src) ||
                (e.contentDocument || (b.rr_src = b.src), delete b.src)
              return {
                type: xe.Element,
                tagName: y,
                attributes: b,
                childNodes: [],
                isSVG: $e(e) || void 0,
                needBlock: g,
                rootId: m,
              }
            })(e, {
              doc: n,
              blockClass: i,
              blockSelector: o,
              inlineStylesheet: u,
              maskInputOptions: l,
              maskInputFn: d,
              dataURLOptions: p,
              inlineImages: v,
              recordCanvas: m,
              keepIframeSrcFn: g,
              newlyAddedElement: b,
              rootId: w,
            })
          case e.TEXT_NODE:
            return (function (e, t) {
              var n,
                r = t.maskTextClass,
                i = t.maskTextSelector,
                o = t.maskTextFn,
                a = t.rootId,
                s = e.parentNode && e.parentNode.tagName,
                u = e.textContent,
                c = "STYLE" === s || void 0,
                l = "SCRIPT" === s || void 0
              if (c && u) {
                try {
                  e.nextSibling ||
                    e.previousSibling ||
                    ((null === (n = e.parentNode.sheet) || void 0 === n
                      ? void 0
                      : n.cssRules) &&
                      (u = (f = e.parentNode.sheet).cssRules
                        ? Array.from(f.cssRules)
                            .map(function (e) {
                              return e.cssText || ""
                            })
                            .join("")
                        : ""))
                } catch (d) {
                  console.warn(
                    "Cannot get CSS styles from text's parentNode. Error: ".concat(
                      d
                    ),
                    e
                  )
                }
                u = Qe(u, et())
              }
              var f
              l && (u = "SCRIPT_PLACEHOLDER")
              !c &&
                !l &&
                u &&
                rt(e, r, i) &&
                (u = o ? o(u) : u.replace(/[\S]/g, "*"))
              return {
                type: xe.Text,
                textContent: u || "",
                isStyle: c,
                rootId: a,
              }
            })(e, {
              maskTextClass: a,
              maskTextSelector: s,
              maskTextFn: f,
              rootId: w,
            })
          case e.CDATA_SECTION_NODE:
            return { type: xe.CDATA, textContent: "", rootId: w }
          case e.COMMENT_NODE:
            return {
              type: xe.Comment,
              textContent: e.textContent || "",
              rootId: w,
            }
          default:
            return !1
        }
      }
      function ot(e) {
        return void 0 === e ? "" : e.toLowerCase()
      }
      function at(e, t) {
        var n,
          r = t.doc,
          i = t.mirror,
          o = t.blockClass,
          a = t.blockSelector,
          s = t.maskTextClass,
          u = t.maskTextSelector,
          c = t.skipChild,
          l = void 0 !== c && c,
          f = t.inlineStylesheet,
          d = void 0 === f || f,
          h = t.maskInputOptions,
          p = void 0 === h ? {} : h,
          v = t.maskTextFn,
          m = t.maskInputFn,
          g = t.slimDOMOptions,
          y = t.dataURLOptions,
          b = void 0 === y ? {} : y,
          w = t.inlineImages,
          S = void 0 !== w && w,
          C = t.recordCanvas,
          I = void 0 !== C && C,
          k = t.onSerialize,
          x = t.onIframeLoad,
          E = t.iframeLoadTimeout,
          A = void 0 === E ? 5e3 : E,
          M = t.onStylesheetLoad,
          T = t.stylesheetLoadTimeout,
          N = void 0 === T ? 5e3 : T,
          _ = t.keepIframeSrcFn,
          R =
            void 0 === _
              ? function () {
                  return !1
                }
              : _,
          O = t.newlyAddedElement,
          D = void 0 !== O && O,
          L = t.preserveWhiteSpace,
          F = void 0 === L || L,
          V = it(e, {
            doc: r,
            mirror: i,
            blockClass: o,
            blockSelector: a,
            maskTextClass: s,
            maskTextSelector: u,
            inlineStylesheet: d,
            maskInputOptions: p,
            maskTextFn: v,
            maskInputFn: m,
            dataURLOptions: b,
            inlineImages: S,
            recordCanvas: I,
            keepIframeSrcFn: R,
            newlyAddedElement: D,
          })
        if (!V) return console.warn(e, "not serialized"), null
        n = i.hasNode(e)
          ? i.getId(e)
          : !(function (e, t) {
              if (t.comment && e.type === xe.Comment) return !0
              if (e.type === xe.Element) {
                if (
                  t.script &&
                  ("script" === e.tagName ||
                    ("link" === e.tagName &&
                      ("preload" === e.attributes.rel ||
                        "modulepreload" === e.attributes.rel) &&
                      "script" === e.attributes.as) ||
                    ("link" === e.tagName &&
                      "prefetch" === e.attributes.rel &&
                      "string" === typeof e.attributes.href &&
                      e.attributes.href.endsWith(".js")))
                )
                  return !0
                if (
                  t.headFavicon &&
                  (("link" === e.tagName &&
                    "shortcut icon" === e.attributes.rel) ||
                    ("meta" === e.tagName &&
                      (ot(e.attributes.name).match(
                        /^msapplication-tile(image|color)$/
                      ) ||
                        "application-name" === ot(e.attributes.name) ||
                        "icon" === ot(e.attributes.rel) ||
                        "apple-touch-icon" === ot(e.attributes.rel) ||
                        "shortcut icon" === ot(e.attributes.rel))))
                )
                  return !0
                if ("meta" === e.tagName) {
                  if (
                    t.headMetaDescKeywords &&
                    ot(e.attributes.name).match(/^description|keywords$/)
                  )
                    return !0
                  if (
                    t.headMetaSocial &&
                    (ot(e.attributes.property).match(/^(og|twitter|fb):/) ||
                      ot(e.attributes.name).match(/^(og|twitter):/) ||
                      "pinterest" === ot(e.attributes.name))
                  )
                    return !0
                  if (
                    t.headMetaRobots &&
                    ("robots" === ot(e.attributes.name) ||
                      "googlebot" === ot(e.attributes.name) ||
                      "bingbot" === ot(e.attributes.name))
                  )
                    return !0
                  if (
                    t.headMetaHttpEquiv &&
                    void 0 !== e.attributes["http-equiv"]
                  )
                    return !0
                  if (
                    t.headMetaAuthorship &&
                    ("author" === ot(e.attributes.name) ||
                      "generator" === ot(e.attributes.name) ||
                      "framework" === ot(e.attributes.name) ||
                      "publisher" === ot(e.attributes.name) ||
                      "progid" === ot(e.attributes.name) ||
                      ot(e.attributes.property).match(/^article:/) ||
                      ot(e.attributes.property).match(/^product:/))
                  )
                    return !0
                  if (
                    t.headMetaVerification &&
                    ("google-site-verification" === ot(e.attributes.name) ||
                      "yandex-verification" === ot(e.attributes.name) ||
                      "csrf-token" === ot(e.attributes.name) ||
                      "p:domain_verify" === ot(e.attributes.name) ||
                      "verify-v1" === ot(e.attributes.name) ||
                      "verification" === ot(e.attributes.name) ||
                      "shopify-checkout-api-token" === ot(e.attributes.name))
                  )
                    return !0
                }
              }
              return !1
            })(V, g) &&
            (F ||
              V.type !== xe.Text ||
              V.isStyle ||
              V.textContent.replace(/^\s+|\s+$/gm, "").length)
          ? Ze()
          : ze
        var B = Object.assign(V, { id: n })
        if ((i.add(e, B), n === ze)) return null
        k && k(e)
        var j = !l
        if (B.type === xe.Element) {
          ;(j = j && !B.needBlock), delete B.needBlock
          var P = e.shadowRoot
          P && Oe(P) && (B.isShadowHost = !0)
        }
        if ((B.type === xe.Document || B.type === xe.Element) && j) {
          g.headWhitespace &&
            B.type === xe.Element &&
            "head" === B.tagName &&
            (F = !1)
          for (
            var W = {
                doc: r,
                mirror: i,
                blockClass: o,
                blockSelector: a,
                maskTextClass: s,
                maskTextSelector: u,
                skipChild: l,
                inlineStylesheet: d,
                maskInputOptions: p,
                maskTextFn: v,
                maskInputFn: m,
                slimDOMOptions: g,
                dataURLOptions: b,
                inlineImages: S,
                recordCanvas: I,
                preserveWhiteSpace: F,
                onSerialize: k,
                onIframeLoad: x,
                iframeLoadTimeout: A,
                onStylesheetLoad: M,
                stylesheetLoadTimeout: N,
                keepIframeSrcFn: R,
              },
              U = 0,
              G = Array.from(e.childNodes);
            U < G.length;
            U++
          ) {
            ;(q = at(G[U], W)) && B.childNodes.push(q)
          }
          if (_e(e) && e.shadowRoot)
            for (
              var z = 0, Z = Array.from(e.shadowRoot.childNodes);
              z < Z.length;
              z++
            ) {
              var q
              ;(q = at(Z[z], W)) &&
                (Oe(e.shadowRoot) && (q.isShadow = !0), B.childNodes.push(q))
            }
        }
        return (
          e.parentNode &&
            Re(e.parentNode) &&
            Oe(e.parentNode) &&
            (B.isShadow = !0),
          B.type === xe.Element &&
            "iframe" === B.tagName &&
            (function (e, t, n) {
              var r = e.contentWindow
              if (r) {
                var i,
                  o = !1
                try {
                  i = r.document.readyState
                } catch (u) {
                  return
                }
                if ("complete" === i) {
                  var a = "about:blank"
                  if (r.location.href !== a || e.src === a || "" === e.src)
                    return setTimeout(t, 0), e.addEventListener("load", t)
                  e.addEventListener("load", t)
                } else {
                  var s = setTimeout(function () {
                    o || (t(), (o = !0))
                  }, n)
                  e.addEventListener("load", function () {
                    clearTimeout(s), (o = !0), t()
                  })
                }
              }
            })(
              e,
              function () {
                var t = e.contentDocument
                if (t && x) {
                  var n = at(t, {
                    doc: t,
                    mirror: i,
                    blockClass: o,
                    blockSelector: a,
                    maskTextClass: s,
                    maskTextSelector: u,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: p,
                    maskTextFn: v,
                    maskInputFn: m,
                    slimDOMOptions: g,
                    dataURLOptions: b,
                    inlineImages: S,
                    recordCanvas: I,
                    preserveWhiteSpace: F,
                    onSerialize: k,
                    onIframeLoad: x,
                    iframeLoadTimeout: A,
                    onStylesheetLoad: M,
                    stylesheetLoadTimeout: N,
                    keepIframeSrcFn: R,
                  })
                  n && x(e, n)
                }
              },
              A
            ),
          B.type === xe.Element &&
            "link" === B.tagName &&
            "stylesheet" === B.attributes.rel &&
            (function (e, t, n) {
              var r,
                i = !1
              try {
                r = e.sheet
              } catch (a) {
                return
              }
              if (!r) {
                var o = setTimeout(function () {
                  i || (t(), (i = !0))
                }, n)
                e.addEventListener("load", function () {
                  clearTimeout(o), (i = !0), t()
                })
              }
            })(
              e,
              function () {
                if (M) {
                  var t = at(e, {
                    doc: r,
                    mirror: i,
                    blockClass: o,
                    blockSelector: a,
                    maskTextClass: s,
                    maskTextSelector: u,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: p,
                    maskTextFn: v,
                    maskInputFn: m,
                    slimDOMOptions: g,
                    dataURLOptions: b,
                    inlineImages: S,
                    recordCanvas: I,
                    preserveWhiteSpace: F,
                    onSerialize: k,
                    onIframeLoad: x,
                    iframeLoadTimeout: A,
                    onStylesheetLoad: M,
                    stylesheetLoadTimeout: N,
                    keepIframeSrcFn: R,
                  })
                  t && M(e, t)
                }
              },
              N
            ),
          B
        )
      }
      var st = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g
      function ut(e, t) {
        void 0 === t && (t = {})
        var n = 1,
          r = 1
        function i(e) {
          var t = e.match(/\n/g)
          t && (n += t.length)
          var i = e.lastIndexOf("\n")
          r = -1 === i ? r + e.length : e.length - i
        }
        function o() {
          var e = { line: n, column: r }
          return function (t) {
            return (t.position = new a(e)), h(), t
          }
        }
        var a = function (e) {
          ;(this.start = e),
            (this.end = { line: n, column: r }),
            (this.source = t.source)
        }
        a.prototype.content = e
        var s = []
        function u(i) {
          var o = new Error(
            ""
              .concat(t.source || "", ":")
              .concat(n, ":")
              .concat(r, ": ")
              .concat(i)
          )
          if (
            ((o.reason = i),
            (o.filename = t.source),
            (o.line = n),
            (o.column = r),
            (o.source = e),
            !t.silent)
          )
            throw o
          s.push(o)
        }
        function c() {
          return d(/^{\s*/)
        }
        function l() {
          return d(/^}/)
        }
        function f() {
          var t,
            n = []
          for (h(), p(n); e.length && "}" !== e.charAt(0) && (t = k() || x()); )
            !1 !== t && (n.push(t), p(n))
          return n
        }
        function d(t) {
          var n = t.exec(e)
          if (n) {
            var r = n[0]
            return i(r), (e = e.slice(r.length)), n
          }
        }
        function h() {
          d(/^\s*/)
        }
        function p(e) {
          var t
          for (void 0 === e && (e = []); (t = v()); )
            !1 !== t && e.push(t), (t = v())
          return e
        }
        function v() {
          var t = o()
          if ("/" === e.charAt(0) && "*" === e.charAt(1)) {
            for (
              var n = 2;
              "" !== e.charAt(n) &&
              ("*" !== e.charAt(n) || "/" !== e.charAt(n + 1));

            )
              ++n
            if (((n += 2), "" === e.charAt(n - 1)))
              return u("End of comment missing")
            var a = e.slice(2, n - 2)
            return (
              (r += 2),
              i(a),
              (e = e.slice(n)),
              (r += 2),
              t({ type: "comment", comment: a })
            )
          }
        }
        function m() {
          var e = d(/^([^{]+)/)
          if (e)
            return ct(e[0])
              .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "")
              .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (e) {
                return e.replace(/,/g, "\u200c")
              })
              .split(/\s*(?![^(]*\)),\s*/)
              .map(function (e) {
                return e.replace(/\u200C/g, ",")
              })
        }
        function g() {
          var e = o(),
            t = d(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/)
          if (t) {
            var n = ct(t[0])
            if (!d(/^:\s*/)) return u("property missing ':'")
            var r = d(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
              i = e({
                type: "declaration",
                property: n.replace(st, ""),
                value: r ? ct(r[0]).replace(st, "") : "",
              })
            return d(/^[;\s]*/), i
          }
        }
        function y() {
          var e,
            t = []
          if (!c()) return u("missing '{'")
          for (p(t); (e = g()); ) !1 !== e && (t.push(e), p(t)), (e = g())
          return l() ? t : u("missing '}'")
        }
        function b() {
          for (
            var e, t = [], n = o();
            (e = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/));

          )
            t.push(e[1]), d(/^,\s*/)
          if (t.length)
            return n({ type: "keyframe", values: t, declarations: y() })
        }
        var w = I("import"),
          S = I("charset"),
          C = I("namespace")
        function I(e) {
          var t = new RegExp("^@" + e + "\\s*([^;]+);")
          return function () {
            var n = o(),
              r = d(t)
            if (r) {
              var i = { type: e }
              return (i[e] = r[1].trim()), n(i)
            }
          }
        }
        function k() {
          if ("@" === e[0])
            return (
              (function () {
                var e = o(),
                  t = d(/^@([-\w]+)?keyframes\s*/)
                if (t) {
                  var n = t[1]
                  if (!(t = d(/^([-\w]+)\s*/)))
                    return u("@keyframes missing name")
                  var r,
                    i = t[1]
                  if (!c()) return u("@keyframes missing '{'")
                  for (var a = p(); (r = b()); ) a.push(r), (a = a.concat(p()))
                  return l()
                    ? e({ type: "keyframes", name: i, vendor: n, keyframes: a })
                    : u("@keyframes missing '}'")
                }
              })() ||
              (function () {
                var e = o(),
                  t = d(/^@media *([^{]+)/)
                if (t) {
                  var n = ct(t[1])
                  if (!c()) return u("@media missing '{'")
                  var r = p().concat(f())
                  return l()
                    ? e({ type: "media", media: n, rules: r })
                    : u("@media missing '}'")
                }
              })() ||
              (function () {
                var e = o(),
                  t = d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/)
                if (t)
                  return e({
                    type: "custom-media",
                    name: ct(t[1]),
                    media: ct(t[2]),
                  })
              })() ||
              (function () {
                var e = o(),
                  t = d(/^@supports *([^{]+)/)
                if (t) {
                  var n = ct(t[1])
                  if (!c()) return u("@supports missing '{'")
                  var r = p().concat(f())
                  return l()
                    ? e({ type: "supports", supports: n, rules: r })
                    : u("@supports missing '}'")
                }
              })() ||
              w() ||
              S() ||
              C() ||
              (function () {
                var e = o(),
                  t = d(/^@([-\w]+)?document *([^{]+)/)
                if (t) {
                  var n = ct(t[1]),
                    r = ct(t[2])
                  if (!c()) return u("@document missing '{'")
                  var i = p().concat(f())
                  return l()
                    ? e({ type: "document", document: r, vendor: n, rules: i })
                    : u("@document missing '}'")
                }
              })() ||
              (function () {
                var e = o()
                if (d(/^@page */)) {
                  var t = m() || []
                  if (!c()) return u("@page missing '{'")
                  for (var n, r = p(); (n = g()); )
                    r.push(n), (r = r.concat(p()))
                  return l()
                    ? e({ type: "page", selectors: t, declarations: r })
                    : u("@page missing '}'")
                }
              })() ||
              (function () {
                var e = o()
                if (d(/^@host\s*/)) {
                  if (!c()) return u("@host missing '{'")
                  var t = p().concat(f())
                  return l()
                    ? e({ type: "host", rules: t })
                    : u("@host missing '}'")
                }
              })() ||
              (function () {
                var e = o()
                if (d(/^@font-face\s*/)) {
                  if (!c()) return u("@font-face missing '{'")
                  for (var t, n = p(); (t = g()); )
                    n.push(t), (n = n.concat(p()))
                  return l()
                    ? e({ type: "font-face", declarations: n })
                    : u("@font-face missing '}'")
                }
              })()
            )
        }
        function x() {
          var e = o(),
            t = m()
          return t
            ? (p(), e({ type: "rule", selectors: t, declarations: y() }))
            : u("selector missing")
        }
        return lt(
          (function () {
            var e = f()
            return {
              type: "stylesheet",
              stylesheet: { source: t.source, rules: e, parsingErrors: s },
            }
          })()
        )
      }
      function ct(e) {
        return e ? e.replace(/^\s+|\s+$/g, "") : ""
      }
      function lt(e, t) {
        for (
          var n = e && "string" === typeof e.type,
            r = n ? e : t,
            i = 0,
            o = Object.keys(e);
          i < o.length;
          i++
        ) {
          var a = e[o[i]]
          Array.isArray(a)
            ? a.forEach(function (e) {
                lt(e, r)
              })
            : a && "object" === typeof a && lt(a, r)
        }
        return (
          n &&
            Object.defineProperty(e, "parent", {
              configurable: !0,
              writable: !0,
              enumerable: !1,
              value: t || null,
            }),
          e
        )
      }
      var ft = {
        script: "noscript",
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        fedropshadow: "feDropShadow",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
      }
      var dt,
        ht = /([^\\]):hover/,
        pt = new RegExp(ht.source, "g")
      function vt(e, t) {
        var n =
          null === t || void 0 === t ? void 0 : t.stylesWithHoverClass.get(e)
        if (n) return n
        var r = ut(e, { silent: !0 })
        if (!r.stylesheet) return e
        var i = []
        if (
          (r.stylesheet.rules.forEach(function (e) {
            "selectors" in e &&
              (e.selectors || []).forEach(function (e) {
                ht.test(e) && i.push(e)
              })
          }),
          0 === i.length)
        )
          return e
        var o = new RegExp(
            i
              .filter(function (e, t) {
                return i.indexOf(e) === t
              })
              .sort(function (e, t) {
                return t.length - e.length
              })
              .map(function (e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
              })
              .join("|"),
            "g"
          ),
          a = e.replace(o, function (e) {
            var t = e.replace(pt, "$1.\\:hover")
            return "".concat(e, ", ").concat(t)
          })
        return null === t || void 0 === t || t.stylesWithHoverClass.set(e, a), a
      }
      function mt() {
        return { stylesWithHoverClass: new Map() }
      }
      function gt(e, t) {
        var n = t.doc,
          r = t.hackCss,
          i = t.cache
        switch (e.type) {
          case xe.Document:
            return n.implementation.createDocument(null, "", null)
          case xe.DocumentType:
            return n.implementation.createDocumentType(
              e.name || "html",
              e.publicId,
              e.systemId
            )
          case xe.Element:
            var o,
              a = (function (e) {
                var t = ft[e.tagName] ? ft[e.tagName] : e.tagName
                return "link" === t && e.attributes._cssText && (t = "style"), t
              })(e)
            o = e.isSVG
              ? n.createElementNS("http://www.w3.org/2000/svg", a)
              : n.createElement(a)
            var s = {}
            for (var u in e.attributes)
              if (Object.prototype.hasOwnProperty.call(e.attributes, u)) {
                var c = e.attributes[u]
                if ("option" !== a || "selected" !== u || !1 !== c)
                  if ((!0 === c && (c = ""), u.startsWith("rr_"))) s[u] = c
                  else {
                    var l = "textarea" === a && "value" === u,
                      f = "style" === a && "_cssText" === u
                    if (
                      (f && r && "string" === typeof c && (c = vt(c, i)),
                      (!l && !f) || "string" !== typeof c)
                    )
                      try {
                        if (e.isSVG && "xlink:href" === u)
                          o.setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            u,
                            c.toString()
                          )
                        else if (
                          "onload" === u ||
                          "onclick" === u ||
                          "onmouse" === u.substring(0, 7)
                        )
                          o.setAttribute("_" + u, c.toString())
                        else {
                          if (
                            "meta" === a &&
                            "Content-Security-Policy" ===
                              e.attributes["http-equiv"] &&
                            "content" === u
                          ) {
                            o.setAttribute("csp-content", c.toString())
                            continue
                          }
                          ;("link" !== a ||
                            ("preload" !== e.attributes.rel &&
                              "modulepreload" !== e.attributes.rel) ||
                            "script" !== e.attributes.as) &&
                            (("link" === a &&
                              "prefetch" === e.attributes.rel &&
                              "string" === typeof e.attributes.href &&
                              e.attributes.href.endsWith(".js")) ||
                              ("img" === a &&
                              e.attributes.srcset &&
                              e.attributes.rr_dataURL
                                ? o.setAttribute(
                                    "rrweb-original-srcset",
                                    e.attributes.srcset
                                  )
                                : o.setAttribute(u, c.toString())))
                        }
                      } catch (y) {}
                    else {
                      for (
                        var d = n.createTextNode(c),
                          h = 0,
                          p = Array.from(o.childNodes);
                        h < p.length;
                        h++
                      ) {
                        var v = p[h]
                        v.nodeType === o.TEXT_NODE && o.removeChild(v)
                      }
                      o.appendChild(d)
                    }
                  }
              }
            var m = function (t) {
              var n = s[t]
              if ("canvas" === a && "rr_dataURL" === t) {
                var r = document.createElement("img")
                ;(r.onload = function () {
                  var e = o.getContext("2d")
                  e && e.drawImage(r, 0, 0, r.width, r.height)
                }),
                  (r.src = n.toString()),
                  o.RRNodeType && (o.rr_dataURL = n.toString())
              } else if ("img" === a && "rr_dataURL" === t) {
                var i = o
                i.currentSrc.startsWith("data:") ||
                  (i.setAttribute("rrweb-original-src", e.attributes.src),
                  (i.src = n.toString()))
              }
              if ("rr_width" === t) o.style.width = n.toString()
              else if ("rr_height" === t) o.style.height = n.toString()
              else if ("rr_mediaCurrentTime" === t && "number" === typeof n)
                o.currentTime = n
              else if ("rr_mediaState" === t)
                switch (n) {
                  case "played":
                    o.play().catch(function (e) {
                      return console.warn("media playback error", e)
                    })
                    break
                  case "paused":
                    o.pause()
                }
            }
            for (var g in s) m(g)
            if (e.isShadowHost)
              if (o.shadowRoot)
                for (; o.shadowRoot.firstChild; )
                  o.shadowRoot.removeChild(o.shadowRoot.firstChild)
              else o.attachShadow({ mode: "open" })
            return o
          case xe.Text:
            return n.createTextNode(
              e.isStyle && r ? vt(e.textContent, i) : e.textContent
            )
          case xe.CDATA:
            return n.createCDATASection(e.textContent)
          case xe.Comment:
            return n.createComment(e.textContent)
          default:
            return null
        }
      }
      function yt(e, t) {
        var n = t.doc,
          r = t.mirror,
          i = t.skipChild,
          o = void 0 !== i && i,
          a = t.hackCss,
          s = void 0 === a || a,
          u = t.afterAppend,
          c = t.cache
        if (r.has(e.id)) {
          var l = r.getNode(e.id)
          if (
            (function (e, t) {
              return (
                !(!e || !t || e.type !== t.type) &&
                (e.type === xe.Document
                  ? e.compatMode === t.compatMode
                  : e.type === xe.DocumentType
                  ? e.name === t.name &&
                    e.publicId === t.publicId &&
                    e.systemId === t.systemId
                  : e.type === xe.Comment ||
                    e.type === xe.Text ||
                    e.type === xe.CDATA
                  ? e.textContent === t.textContent
                  : e.type === xe.Element &&
                    e.tagName === t.tagName &&
                    JSON.stringify(e.attributes) ===
                      JSON.stringify(t.attributes) &&
                    e.isSVG === t.isSVG &&
                    e.needBlock === t.needBlock)
              )
            })(r.getMeta(l), e)
          )
            return r.getNode(e.id)
        }
        var f = gt(e, { doc: n, hackCss: s, cache: c })
        if (!f) return null
        if (
          (e.rootId && r.getNode(e.rootId) !== n && r.replace(e.rootId, n),
          e.type === xe.Document &&
            (n.close(),
            n.open(),
            "BackCompat" === e.compatMode &&
              e.childNodes &&
              e.childNodes[0].type !== xe.DocumentType &&
              (e.childNodes[0].type === xe.Element &&
              "xmlns" in e.childNodes[0].attributes &&
              "http://www.w3.org/1999/xhtml" ===
                e.childNodes[0].attributes.xmlns
                ? n.write(
                    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
                  )
                : n.write(
                    '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
                  )),
            (f = n)),
          r.add(f, e),
          (e.type === xe.Document || e.type === xe.Element) && !o)
        )
          for (var d = 0, h = e.childNodes; d < h.length; d++) {
            var p = h[d],
              v = yt(p, {
                doc: n,
                mirror: r,
                skipChild: !1,
                hackCss: s,
                afterAppend: u,
                cache: c,
              })
            v
              ? (p.isShadow && _e(f) && f.shadowRoot
                  ? f.shadowRoot.appendChild(v)
                  : f.appendChild(v),
                u && u(v, p.id))
              : console.warn("Failed to rebuild", p)
          }
        return f
      }
      function bt(e, t) {
        var n = t.doc,
          r = t.onVisit,
          i = t.hackCss,
          o = void 0 === i || i,
          a = t.afterAppend,
          s = t.cache,
          u = t.mirror,
          c = void 0 === u ? new Fe() : u,
          l = yt(e, {
            doc: n,
            mirror: c,
            skipChild: !1,
            hackCss: o,
            afterAppend: a,
            cache: s,
          })
        return (
          (function (e, t) {
            for (var n = 0, r = e.getIds(); n < r.length; n++) {
              var i = r[n]
              e.has(i) && t(e.getNode(i))
            }
          })(c, function (e) {
            r && r(e),
              (function (e, t) {
                var n = t.getMeta(e)
                if (
                  (null === n || void 0 === n ? void 0 : n.type) === xe.Element
                ) {
                  var r = e
                  for (var i in n.attributes)
                    if (
                      Object.prototype.hasOwnProperty.call(n.attributes, i) &&
                      i.startsWith("rr_")
                    ) {
                      var o = n.attributes[i]
                      "rr_scrollLeft" === i && (r.scrollLeft = o),
                        "rr_scrollTop" === i && (r.scrollTop = o)
                    }
                }
              })(e, c)
          }),
          l
        )
      }
      !(function (e) {
        ;(e[(e.Document = 0)] = "Document"),
          (e[(e.DocumentType = 1)] = "DocumentType"),
          (e[(e.Element = 2)] = "Element"),
          (e[(e.Text = 3)] = "Text"),
          (e[(e.CDATA = 4)] = "CDATA"),
          (e[(e.Comment = 5)] = "Comment")
      })(dt || (dt = {}))
      var wt = (function () {
        function e() {
          ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
        }
        return (
          (e.prototype.getId = function (e) {
            var t
            if (!e) return -1
            var n =
              null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id
            return null !== n && void 0 !== n ? n : -1
          }),
          (e.prototype.getNode = function (e) {
            return this.idNodeMap.get(e) || null
          }),
          (e.prototype.getIds = function () {
            return Array.from(this.idNodeMap.keys())
          }),
          (e.prototype.getMeta = function (e) {
            return this.nodeMetaMap.get(e) || null
          }),
          (e.prototype.removeNodeFromMap = function (e) {
            var t = this,
              n = this.getId(e)
            this.idNodeMap.delete(n),
              e.childNodes &&
                e.childNodes.forEach(function (e) {
                  return t.removeNodeFromMap(e)
                })
          }),
          (e.prototype.has = function (e) {
            return this.idNodeMap.has(e)
          }),
          (e.prototype.hasNode = function (e) {
            return this.nodeMetaMap.has(e)
          }),
          (e.prototype.add = function (e, t) {
            var n = t.id
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
          }),
          (e.prototype.replace = function (e, t) {
            var n = this.getNode(e)
            if (n) {
              var r = this.nodeMetaMap.get(n)
              r && this.nodeMetaMap.set(t, r)
            }
            this.idNodeMap.set(e, t)
          }),
          (e.prototype.reset = function () {
            ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
          }),
          e
        )
      })()
      function St(e) {
        var t = []
        for (var n in e) {
          var r = e[n]
          if ("string" === typeof r) {
            var i = Et(n)
            t.push("".concat(i, ": ").concat(r, ";"))
          }
        }
        return t.join(" ")
      }
      var Ct = /-([a-z])/g,
        It = /^--[a-zA-Z0-9-]+$/,
        kt = function (e) {
          return It.test(e)
            ? e
            : e.replace(Ct, function (e, t) {
                return t ? t.toUpperCase() : ""
              })
        },
        xt = /\B([A-Z])/g,
        Et = function (e) {
          return e.replace(xt, "-$1").toLowerCase()
        },
        At = (function () {
          function e() {
            a(this, e),
              (this.parentElement = null),
              (this.parentNode = null),
              (this.firstChild = null),
              (this.lastChild = null),
              (this.previousSibling = null),
              (this.nextSibling = null),
              (this.ELEMENT_NODE = Ot.ELEMENT_NODE),
              (this.TEXT_NODE = Ot.TEXT_NODE)
          }
          return (
            l(e, [
              {
                key: "childNodes",
                get: function () {
                  for (var e = [], t = this.firstChild; t; )
                    e.push(t), (t = t.nextSibling)
                  return e
                },
              },
              {
                key: "contains",
                value: function (t) {
                  if (!(t instanceof e)) return !1
                  if (t.ownerDocument !== this.ownerDocument) return !1
                  if (t === this) return !0
                  for (; t.parentNode; ) {
                    if (t.parentNode === this) return !0
                    t = t.parentNode
                  }
                  return !1
                },
              },
              {
                key: "appendChild",
                value: function (e) {
                  throw new Error(
                    "RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method."
                  )
                },
              },
              {
                key: "insertBefore",
                value: function (e, t) {
                  throw new Error(
                    "RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method."
                  )
                },
              },
              {
                key: "removeChild",
                value: function (e) {
                  throw new Error(
                    "RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method."
                  )
                },
              },
              {
                key: "toString",
                value: function () {
                  return "RRNode"
                },
              },
            ]),
            e
          )
        })()
      function Mt(e) {
        return (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e, r, i) {
            var o
            return (
              a(this, n),
              ((o = t.call(this)).nodeType = Ot.DOCUMENT_TYPE_NODE),
              (o.RRNodeType = dt.DocumentType),
              (o.name = e),
              (o.publicId = r),
              (o.systemId = i),
              (o.nodeName = e),
              (o.textContent = null),
              o
            )
          }
          return (
            l(n, [
              {
                key: "toString",
                value: function () {
                  return "RRDocumentType"
                },
              },
            ]),
            n
          )
        })(e)
      }
      function Tt(e) {
        return (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e) {
            var r
            return (
              a(this, n),
              ((r = t.call(this)).nodeType = Ot.ELEMENT_NODE),
              (r.RRNodeType = dt.Element),
              (r.attributes = {}),
              (r.shadowRoot = null),
              (r.tagName = e.toUpperCase()),
              (r.nodeName = e.toUpperCase()),
              r
            )
          }
          return (
            l(n, [
              {
                key: "textContent",
                get: function () {
                  var e = ""
                  return (
                    this.childNodes.forEach(function (t) {
                      return (e += t.textContent)
                    }),
                    e
                  )
                },
                set: function (e) {
                  ;(this.firstChild = null),
                    (this.lastChild = null),
                    this.appendChild(this.ownerDocument.createTextNode(e))
                },
              },
              {
                key: "classList",
                get: function () {
                  var e = this
                  return new Dt(this.attributes.class, function (t) {
                    e.attributes.class = t
                  })
                },
              },
              {
                key: "id",
                get: function () {
                  return this.attributes.id || ""
                },
              },
              {
                key: "className",
                get: function () {
                  return this.attributes.class || ""
                },
              },
              {
                key: "style",
                get: function () {
                  var e = this,
                    t = this.attributes.style
                      ? (function (e) {
                          var t = {},
                            n = /:(.+)/
                          return (
                            e
                              .replace(/\/\*.*?\*\//g, "")
                              .split(/;(?![^(]*\))/g)
                              .forEach(function (e) {
                                if (e) {
                                  var r = e.split(n)
                                  r.length > 1 &&
                                    (t[kt(r[0].trim())] = r[1].trim())
                                }
                              }),
                            t
                          )
                        })(this.attributes.style)
                      : {},
                    n = /\B([A-Z])/g
                  return (
                    (t.setProperty = function (r, i, o) {
                      if (!n.test(r)) {
                        var a = kt(r)
                        i ? (t[a] = i) : delete t[a],
                          "important" === o && (t[a] += " !important"),
                          (e.attributes.style = St(t))
                      }
                    }),
                    (t.removeProperty = function (r) {
                      if (n.test(r)) return ""
                      var i = kt(r),
                        o = t[i] || ""
                      return delete t[i], (e.attributes.style = St(t)), o
                    }),
                    t
                  )
                },
              },
              {
                key: "getAttribute",
                value: function (e) {
                  return this.attributes[e] || null
                },
              },
              {
                key: "setAttribute",
                value: function (e, t) {
                  this.attributes[e] = t
                },
              },
              {
                key: "setAttributeNS",
                value: function (e, t, n) {
                  this.setAttribute(t, n)
                },
              },
              {
                key: "removeAttribute",
                value: function (e) {
                  delete this.attributes[e]
                },
              },
              {
                key: "appendChild",
                value: function (e) {
                  return Lt(this, e)
                },
              },
              {
                key: "insertBefore",
                value: function (e, t) {
                  return Ft(this, e, t)
                },
              },
              {
                key: "removeChild",
                value: function (e) {
                  return Vt(this, e)
                },
              },
              {
                key: "attachShadow",
                value: function (e) {
                  var t = this.ownerDocument.createElement("SHADOWROOT")
                  return (this.shadowRoot = t), t
                },
              },
              {
                key: "dispatchEvent",
                value: function (e) {
                  return !0
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = ""
                  for (var t in this.attributes)
                    e += "".concat(t, '="').concat(this.attributes[t], '" ')
                  return "".concat(this.tagName, " ").concat(e)
                },
              },
            ]),
            n
          )
        })(e)
      }
      function Nt(e) {
        return (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e) {
            var r
            return (
              a(this, n),
              ((r = t.call(this)).nodeType = Ot.TEXT_NODE),
              (r.nodeName = "#text"),
              (r.RRNodeType = dt.Text),
              (r.data = e),
              r
            )
          }
          return (
            l(n, [
              {
                key: "textContent",
                get: function () {
                  return this.data
                },
                set: function (e) {
                  this.data = e
                },
              },
              {
                key: "toString",
                value: function () {
                  return "RRText text=".concat(JSON.stringify(this.data))
                },
              },
            ]),
            n
          )
        })(e)
      }
      function _t(e) {
        return (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e) {
            var r
            return (
              a(this, n),
              ((r = t.call(this)).nodeType = Ot.COMMENT_NODE),
              (r.nodeName = "#comment"),
              (r.RRNodeType = dt.Comment),
              (r.data = e),
              r
            )
          }
          return (
            l(n, [
              {
                key: "textContent",
                get: function () {
                  return this.data
                },
                set: function (e) {
                  this.data = e
                },
              },
              {
                key: "toString",
                value: function () {
                  return "RRComment text=".concat(JSON.stringify(this.data))
                },
              },
            ]),
            n
          )
        })(e)
      }
      function Rt(e) {
        return (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e) {
            var r
            return (
              a(this, n),
              ((r = t.call(this)).nodeName = "#cdata-section"),
              (r.nodeType = Ot.CDATA_SECTION_NODE),
              (r.RRNodeType = dt.CDATA),
              (r.data = e),
              r
            )
          }
          return (
            l(n, [
              {
                key: "textContent",
                get: function () {
                  return this.data
                },
                set: function (e) {
                  this.data = e
                },
              },
              {
                key: "toString",
                value: function () {
                  return "RRCDATASection data=".concat(
                    JSON.stringify(this.data)
                  )
                },
              },
            ]),
            n
          )
        })(e)
      }
      var Ot,
        Dt = l(function e(t, n) {
          var r = this
          if (
            (a(this, e),
            (this.classes = []),
            (this.add = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n]
              for (var i = 0, o = t; i < o.length; i++) {
                var a = o[i],
                  s = String(a)
                r.classes.indexOf(s) >= 0 || r.classes.push(s)
              }
              r.onChange && r.onChange(r.classes.join(" "))
            }),
            (this.remove = function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n]
              ;(r.classes = r.classes.filter(function (e) {
                return -1 === t.indexOf(e)
              })),
                r.onChange && r.onChange(r.classes.join(" "))
            }),
            t)
          ) {
            var i,
              o = t.trim().split(/\s+/)
            ;(i = this.classes).push.apply(i, w(o))
          }
          this.onChange = n
        })
      function Lt(e, t) {
        return (
          e.lastChild
            ? ((e.lastChild.nextSibling = t), (t.previousSibling = e.lastChild))
            : ((e.firstChild = t), (t.previousSibling = null)),
          (e.lastChild = t),
          (t.nextSibling = null),
          (t.parentNode = e),
          (t.parentElement = e),
          (t.ownerDocument = e.ownerDocument),
          t
        )
      }
      function Ft(e, t, n) {
        if (!n) return Lt(e, t)
        if (n.parentNode !== e)
          throw new Error(
            "Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode."
          )
        return (
          (t.previousSibling = n.previousSibling),
          (n.previousSibling = t),
          (t.nextSibling = n),
          t.previousSibling
            ? (t.previousSibling.nextSibling = t)
            : (e.firstChild = t),
          (t.parentElement = e),
          (t.parentNode = e),
          (t.ownerDocument = e.ownerDocument),
          t
        )
      }
      function Vt(e, t) {
        if (t.parentNode !== e)
          throw new Error(
            "Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode."
          )
        return (
          t.previousSibling
            ? (t.previousSibling.nextSibling = t.nextSibling)
            : (e.firstChild = t.nextSibling),
          t.nextSibling
            ? (t.nextSibling.previousSibling = t.previousSibling)
            : (e.lastChild = t.previousSibling),
          (t.previousSibling = null),
          (t.nextSibling = null),
          (t.parentElement = null),
          (t.parentNode = null),
          t
        )
      }
      !(function (e) {
        ;(e[(e.PLACEHOLDER = 0)] = "PLACEHOLDER"),
          (e[(e.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
          (e[(e.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
          (e[(e.TEXT_NODE = 3)] = "TEXT_NODE"),
          (e[(e.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
          (e[(e.ENTITY_REFERENCE_NODE = 5)] = "ENTITY_REFERENCE_NODE"),
          (e[(e.ENTITY_NODE = 6)] = "ENTITY_NODE"),
          (e[(e.PROCESSING_INSTRUCTION_NODE = 7)] =
            "PROCESSING_INSTRUCTION_NODE"),
          (e[(e.COMMENT_NODE = 8)] = "COMMENT_NODE"),
          (e[(e.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
          (e[(e.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
          (e[(e.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE")
      })(Ot || (Ot = {}))
      var Bt = {
          svg: "http://www.w3.org/2000/svg",
          "xlink:href": "http://www.w3.org/1999/xlink",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        jt = {
          altglyph: "altGlyph",
          altglyphdef: "altGlyphDef",
          altglyphitem: "altGlyphItem",
          animatecolor: "animateColor",
          animatemotion: "animateMotion",
          animatetransform: "animateTransform",
          clippath: "clipPath",
          feblend: "feBlend",
          fecolormatrix: "feColorMatrix",
          fecomponenttransfer: "feComponentTransfer",
          fecomposite: "feComposite",
          feconvolvematrix: "feConvolveMatrix",
          fediffuselighting: "feDiffuseLighting",
          fedisplacementmap: "feDisplacementMap",
          fedistantlight: "feDistantLight",
          fedropshadow: "feDropShadow",
          feflood: "feFlood",
          fefunca: "feFuncA",
          fefuncb: "feFuncB",
          fefuncg: "feFuncG",
          fefuncr: "feFuncR",
          fegaussianblur: "feGaussianBlur",
          feimage: "feImage",
          femerge: "feMerge",
          femergenode: "feMergeNode",
          femorphology: "feMorphology",
          feoffset: "feOffset",
          fepointlight: "fePointLight",
          fespecularlighting: "feSpecularLighting",
          fespotlight: "feSpotLight",
          fetile: "feTile",
          feturbulence: "feTurbulence",
          foreignobject: "foreignObject",
          glyphref: "glyphRef",
          lineargradient: "linearGradient",
          radialgradient: "radialGradient",
        },
        Pt = null
      function Wt(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : t.mirror || t.ownerDocument.mirror
        e = (function (e, t, n, r) {
          var i
          n.afterAppend &&
            !Pt &&
            ((Pt = new WeakSet()),
            setTimeout(function () {
              Pt = null
            }, 0))
          if (!zt(e, t)) {
            var o = Gt(t, n.mirror, r)
            null === (i = e.parentNode) || void 0 === i || i.replaceChild(o, e),
              (e = o)
          }
          switch (t.RRNodeType) {
            case dt.Document:
              if (!Zt(e, t, n.mirror, r)) {
                var a = r.getMeta(t)
                a &&
                  (n.mirror.removeNodeFromMap(e),
                  e.close(),
                  e.open(),
                  n.mirror.add(e, a),
                  null === Pt || void 0 === Pt || Pt.add(e))
              }
              break
            case dt.Element:
              var s = e,
                u = t
              switch (u.tagName) {
                case "IFRAME":
                  var c = e.contentDocument
                  if (!c) break
                  Wt(c, t.contentDocument, n, r)
              }
              if (u.shadowRoot) {
                s.shadowRoot || s.attachShadow({ mode: "open" })
                var l = s.shadowRoot.childNodes,
                  f = u.shadowRoot.childNodes
                ;(l.length > 0 || f.length > 0) &&
                  Ut(Array.from(l), f, s.shadowRoot, n, r)
              }
          }
          return e
        })(e, t, n, r)
        var i = e.childNodes,
          o = t.childNodes
        ;(i.length > 0 || o.length > 0) && Ut(Array.from(i), o, e, n, r),
          (function (e, t, n, r) {
            var i
            switch (t.RRNodeType) {
              case dt.Document:
                var o = t.scrollData
                o && n.applyScroll(o, !0)
                break
              case dt.Element:
                var a = e,
                  s = t
                switch (
                  ((function (e, t, n) {
                    var r = e.attributes,
                      i = t.attributes,
                      o = function () {
                        var r = i[a],
                          o = n.getMeta(t)
                        if (
                          (null === o || void 0 === o ? void 0 : o.isSVG) &&
                          Bt[a]
                        )
                          e.setAttributeNS(Bt[a], a, r)
                        else if ("CANVAS" === t.tagName && "rr_dataURL" === a) {
                          var s = document.createElement("img")
                          ;(s.src = r),
                            (s.onload = function () {
                              var t = e.getContext("2d")
                              t && t.drawImage(s, 0, 0, s.width, s.height)
                            })
                        } else e.setAttribute(a, r)
                      }
                    for (var a in i) o()
                    for (var s = 0, u = Array.from(r); s < u.length; s++) {
                      var c = u[s].name
                      c in i || e.removeAttribute(c)
                    }
                    t.scrollLeft && (e.scrollLeft = t.scrollLeft),
                      t.scrollTop && (e.scrollTop = t.scrollTop)
                  })(a, s, r),
                  s.scrollData && n.applyScroll(s.scrollData, !0),
                  s.inputData && n.applyInput(s.inputData),
                  s.tagName)
                ) {
                  case "AUDIO":
                  case "VIDEO":
                    var u = e,
                      c = s
                    void 0 !== c.paused && (c.paused ? u.pause() : u.play()),
                      void 0 !== c.muted && (u.muted = c.muted),
                      void 0 !== c.volume && (u.volume = c.volume),
                      void 0 !== c.currentTime &&
                        (u.currentTime = c.currentTime),
                      void 0 !== c.playbackRate &&
                        (u.playbackRate = c.playbackRate)
                    break
                  case "CANVAS":
                    var l = t
                    if (null !== l.rr_dataURL) {
                      var f = document.createElement("img")
                      ;(f.onload = function () {
                        var e = a.getContext("2d")
                        e && e.drawImage(f, 0, 0, f.width, f.height)
                      }),
                        (f.src = l.rr_dataURL)
                    }
                    l.canvasMutations.forEach(function (t) {
                      return n.applyCanvas(t.event, t.mutation, e)
                    })
                    break
                  case "STYLE":
                    var d = a.sheet
                    d &&
                      t.rules.forEach(function (e) {
                        return n.applyStyleSheetMutation(e, d)
                      })
                }
                break
              case dt.Text:
              case dt.Comment:
              case dt.CDATA:
                e.textContent !== t.data && (e.textContent = t.data)
            }
            ;(null === Pt || void 0 === Pt ? void 0 : Pt.has(e)) &&
              (Pt.delete(e),
              null === (i = n.afterAppend) ||
                void 0 === i ||
                i.call(n, e, n.mirror.getId(e)))
          })(e, t, n, r)
      }
      function Ut(e, t, n, r, i) {
        for (
          var o = 0,
            a = e.length - 1,
            s = 0,
            u = t.length - 1,
            c = e[o],
            l = e[a],
            f = t[s],
            d = t[u],
            h = void 0,
            p = void 0;
          o <= a && s <= u;

        )
          if (void 0 === c) c = e[++o]
          else if (void 0 === l) l = e[--a]
          else if (Zt(c, f, r.mirror, i))
            Wt(c, f, r, i), (c = e[++o]), (f = t[++s])
          else if (Zt(l, d, r.mirror, i))
            Wt(l, d, r, i), (l = e[--a]), (d = t[--u])
          else if (Zt(c, d, r.mirror, i)) {
            try {
              n.insertBefore(c, l.nextSibling)
            } catch (hn) {
              console.warn(hn)
            }
            Wt(c, d, r, i), (c = e[++o]), (d = t[--u])
          } else if (Zt(l, f, r.mirror, i)) {
            try {
              n.insertBefore(l, c)
            } catch (hn) {
              console.warn(hn)
            }
            Wt(l, f, r, i), (l = e[--a]), (f = t[++s])
          } else {
            if (!h) {
              h = {}
              for (var v = o; v <= a; v++) {
                var m = e[v]
                m && r.mirror.hasNode(m) && (h[r.mirror.getId(m)] = v)
              }
            }
            var g = e[(p = h[i.getId(f)])]
            if (void 0 !== p && g && Zt(g, f, r.mirror, i)) {
              try {
                n.insertBefore(g, c)
              } catch (hn) {
                console.warn(hn)
              }
              Wt(g, f, r, i), (e[p] = void 0)
            } else {
              var y = Gt(f, r.mirror, i)
              "#document" === n.nodeName &&
                c &&
                ((y.nodeType === y.DOCUMENT_TYPE_NODE &&
                  c.nodeType === c.DOCUMENT_TYPE_NODE) ||
                  (y.nodeType === y.ELEMENT_NODE &&
                    c.nodeType === c.ELEMENT_NODE)) &&
                (n.removeChild(c), r.mirror.removeNodeFromMap(c), (c = e[++o]))
              try {
                n.insertBefore(y, c || null), Wt(y, f, r, i)
              } catch (hn) {
                console.warn(hn)
              }
            }
            f = t[++s]
          }
        if (o > a) {
          var b = t[u + 1],
            w = null
          for (b && (w = r.mirror.getNode(i.getId(b))); s <= u; ++s) {
            var S = Gt(t[s], r.mirror, i)
            try {
              n.insertBefore(S, w), Wt(S, t[s], r, i)
            } catch (hn) {
              console.warn(hn)
            }
          }
        } else if (s > u)
          for (; o <= a; o++) {
            var C = e[o]
            if (C && n.contains(C))
              try {
                n.removeChild(C), r.mirror.removeNodeFromMap(C)
              } catch (hn) {
                console.warn(hn)
              }
          }
      }
      function Gt(e, t, n) {
        var r = n.getId(e),
          i = n.getMeta(e),
          o = null
        if ((r > -1 && (o = t.getNode(r)), null !== o && zt(o, e))) return o
        switch (e.RRNodeType) {
          case dt.Document:
            o = new Document()
            break
          case dt.DocumentType:
            o = document.implementation.createDocumentType(
              e.name,
              e.publicId,
              e.systemId
            )
            break
          case dt.Element:
            var a = e.tagName.toLowerCase()
            ;(a = jt[a] || a),
              (o =
                i &&
                "isSVG" in i &&
                (null === i || void 0 === i ? void 0 : i.isSVG)
                  ? document.createElementNS(Bt.svg, a)
                  : document.createElement(e.tagName))
            break
          case dt.Text:
            o = document.createTextNode(e.data)
            break
          case dt.Comment:
            o = document.createComment(e.data)
            break
          case dt.CDATA:
            o = document.createCDATASection(e.data)
        }
        i && t.add(o, Object.assign({}, i))
        try {
          null === Pt || void 0 === Pt || Pt.add(o)
        } catch (hn) {}
        return o
      }
      function zt(e, t) {
        return (
          e.nodeType === t.nodeType &&
          (e.nodeType !== e.ELEMENT_NODE ||
            e.tagName.toUpperCase() === t.tagName)
        )
      }
      function Zt(e, t, n, r) {
        var i = n.getId(e),
          o = r.getId(t)
        return -1 !== i && i === o && zt(e, t)
      }
      var qt = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e) {
            var r
            return (
              a(this, n),
              ((r = t.call(this)).UNSERIALIZED_STARTING_ID = -2),
              (r._unserializedId = r.UNSERIALIZED_STARTING_ID),
              (r.mirror = new on()),
              (r.scrollData = null),
              e && (r.mirror = e),
              r
            )
          }
          return (
            l(n, [
              {
                key: "unserializedId",
                get: function () {
                  return this._unserializedId--
                },
              },
              {
                key: "createDocument",
                value: function (e, t, r) {
                  return new n()
                },
              },
              {
                key: "createDocumentType",
                value: function (e, t, n) {
                  var r = new Ht(e, t, n)
                  return (r.ownerDocument = this), r
                },
              },
              {
                key: "createElement",
                value: function (e) {
                  var t,
                    n = e.toUpperCase()
                  switch (n) {
                    case "AUDIO":
                    case "VIDEO":
                      t = new Qt(n)
                      break
                    case "IFRAME":
                      t = new Xt(n, this.mirror)
                      break
                    case "CANVAS":
                      t = new Kt(n)
                      break
                    case "STYLE":
                      t = new Jt(n)
                      break
                    default:
                      t = new Yt(n)
                  }
                  return (t.ownerDocument = this), t
                },
              },
              {
                key: "createComment",
                value: function (e) {
                  var t = new en(e)
                  return (t.ownerDocument = this), t
                },
              },
              {
                key: "createCDATASection",
                value: function (e) {
                  var t = new tn(e)
                  return (t.ownerDocument = this), t
                },
              },
              {
                key: "createTextNode",
                value: function (e) {
                  var t = new $t(e)
                  return (t.ownerDocument = this), t
                },
              },
              {
                key: "destroyTree",
                value: function () {
                  ;(this.firstChild = null),
                    (this.lastChild = null),
                    this.mirror.reset()
                },
              },
              {
                key: "open",
                value: function () {
                  ce(ue(n.prototype), "open", this).call(this),
                    (this._unserializedId = this.UNSERIALIZED_STARTING_ID)
                },
              },
            ]),
            n
          )
        })(
          (function (e) {
            fe(n, e)
            var t = pe(n)
            function n() {
              var e
              a(this, n)
              for (
                var r = arguments.length, i = new Array(r), o = 0;
                o < r;
                o++
              )
                i[o] = arguments[o]
              return (
                ((e = t.call(this, i)).nodeType = Ot.DOCUMENT_NODE),
                (e.nodeName = "#document"),
                (e.compatMode = "CSS1Compat"),
                (e.RRNodeType = dt.Document),
                (e.textContent = null),
                (e.ownerDocument = he(e)),
                e
              )
            }
            return (
              l(n, [
                {
                  key: "documentElement",
                  get: function () {
                    return (
                      this.childNodes.find(function (e) {
                        return (
                          e.RRNodeType === dt.Element && "HTML" === e.tagName
                        )
                      }) || null
                    )
                  },
                },
                {
                  key: "body",
                  get: function () {
                    var e
                    return (
                      (null === (e = this.documentElement) || void 0 === e
                        ? void 0
                        : e.childNodes.find(function (e) {
                            return (
                              e.RRNodeType === dt.Element &&
                              "BODY" === e.tagName
                            )
                          })) || null
                    )
                  },
                },
                {
                  key: "head",
                  get: function () {
                    var e
                    return (
                      (null === (e = this.documentElement) || void 0 === e
                        ? void 0
                        : e.childNodes.find(function (e) {
                            return (
                              e.RRNodeType === dt.Element &&
                              "HEAD" === e.tagName
                            )
                          })) || null
                    )
                  },
                },
                {
                  key: "implementation",
                  get: function () {
                    return this
                  },
                },
                {
                  key: "firstElementChild",
                  get: function () {
                    return this.documentElement
                  },
                },
                {
                  key: "appendChild",
                  value: function (e) {
                    var t = e.RRNodeType
                    if (
                      (t === dt.Element || t === dt.DocumentType) &&
                      this.childNodes.some(function (e) {
                        return e.RRNodeType === t
                      })
                    )
                      throw new Error(
                        "RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ".concat(
                          t === dt.Element ? "RRElement" : "RRDoctype",
                          " on RRDocument allowed."
                        )
                      )
                    var n = Lt(this, e)
                    return (n.parentElement = null), n
                  },
                },
                {
                  key: "insertBefore",
                  value: function (e, t) {
                    var n = e.RRNodeType
                    if (
                      (n === dt.Element || n === dt.DocumentType) &&
                      this.childNodes.some(function (e) {
                        return e.RRNodeType === n
                      })
                    )
                      throw new Error(
                        "RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ".concat(
                          n === dt.Element ? "RRElement" : "RRDoctype",
                          " on RRDocument allowed."
                        )
                      )
                    var r = Ft(this, e, t)
                    return (r.parentElement = null), r
                  },
                },
                {
                  key: "removeChild",
                  value: function (e) {
                    return Vt(this, e)
                  },
                },
                {
                  key: "open",
                  value: function () {
                    ;(this.firstChild = null), (this.lastChild = null)
                  },
                },
                { key: "close", value: function () {} },
                {
                  key: "write",
                  value: function (e) {
                    var t
                    if (
                      ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' ===
                      e
                        ? (t = "-//W3C//DTD XHTML 1.0 Transitional//EN")
                        : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' ===
                            e && (t = "-//W3C//DTD HTML 4.0 Transitional//EN"),
                      t)
                    ) {
                      var n = this.createDocumentType("html", t, "")
                      this.open(), this.appendChild(n)
                    }
                  },
                },
                {
                  key: "createDocument",
                  value: function (e, t, r) {
                    return new n()
                  },
                },
                {
                  key: "createDocumentType",
                  value: function (e, t, n) {
                    var r = new (Mt(At))(e, t, n)
                    return (r.ownerDocument = this), r
                  },
                },
                {
                  key: "createElement",
                  value: function (e) {
                    var t = new (Tt(At))(e)
                    return (t.ownerDocument = this), t
                  },
                },
                {
                  key: "createElementNS",
                  value: function (e, t) {
                    return this.createElement(t)
                  },
                },
                {
                  key: "createTextNode",
                  value: function (e) {
                    var t = new (Nt(At))(e)
                    return (t.ownerDocument = this), t
                  },
                },
                {
                  key: "createComment",
                  value: function (e) {
                    var t = new (_t(At))(e)
                    return (t.ownerDocument = this), t
                  },
                },
                {
                  key: "createCDATASection",
                  value: function (e) {
                    var t = new (Rt(At))(e)
                    return (t.ownerDocument = this), t
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return "RRDocument"
                  },
                },
              ]),
              n
            )
          })(At)
        ),
        Ht = Mt(At),
        Yt = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n() {
            var e
            return (
              a(this, n),
              ((e = t.apply(this, arguments)).inputData = null),
              (e.scrollData = null),
              e
            )
          }
          return l(n)
        })(Tt(At)),
        Qt = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n() {
            return a(this, n), t.apply(this, arguments)
          }
          return l(n)
        })(
          (function (e) {
            fe(n, e)
            var t = pe(n)
            function n() {
              return a(this, n), t.apply(this, arguments)
            }
            return (
              l(n, [
                {
                  key: "attachShadow",
                  value: function (e) {
                    throw new Error(
                      "RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow"
                    )
                  },
                },
                {
                  key: "play",
                  value: function () {
                    this.paused = !1
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this.paused = !0
                  },
                },
              ]),
              n
            )
          })(Yt)
        ),
        Kt = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n() {
            var e
            return (
              a(this, n),
              ((e = t.apply(this, arguments)).rr_dataURL = null),
              (e.canvasMutations = []),
              e
            )
          }
          return (
            l(n, [
              {
                key: "getContext",
                value: function () {
                  return null
                },
              },
            ]),
            n
          )
        })(Yt),
        Jt = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n() {
            var e
            return a(this, n), ((e = t.apply(this, arguments)).rules = []), e
          }
          return l(n)
        })(Yt),
        Xt = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n(e, r) {
            var i
            return (
              a(this, n),
              ((i = t.call(this, e)).contentDocument = new qt()),
              (i.contentDocument.mirror = r),
              i
            )
          }
          return l(n)
        })(Yt),
        $t = Nt(At),
        en = _t(At),
        tn = Rt(At)
      function nn(e, t, n, r) {
        var i, o
        switch (e.nodeType) {
          case Ot.DOCUMENT_NODE:
            r && "IFRAME" === r.nodeName
              ? (i = r.contentDocument)
              : ((i = t).compatMode = e.compatMode)
            break
          case Ot.DOCUMENT_TYPE_NODE:
            var a = e
            i = t.createDocumentType(a.name, a.publicId, a.systemId)
            break
          case Ot.ELEMENT_NODE:
            for (
              var s = e,
                u =
                  (o = s) instanceof HTMLFormElement
                    ? "FORM"
                    : o.tagName.toUpperCase(),
                c = (i = t.createElement(u)),
                l = 0,
                f = Array.from(s.attributes);
              l < f.length;
              l++
            ) {
              var d = f[l],
                h = d.name,
                p = d.value
              c.attributes[h] = p
            }
            s.scrollLeft && (c.scrollLeft = s.scrollLeft),
              s.scrollTop && (c.scrollTop = s.scrollTop)
            break
          case Ot.TEXT_NODE:
            i = t.createTextNode(e.textContent || "")
            break
          case Ot.CDATA_SECTION_NODE:
            i = t.createCDATASection(e.data)
            break
          case Ot.COMMENT_NODE:
            i = t.createComment(e.textContent || "")
            break
          case Ot.DOCUMENT_FRAGMENT_NODE:
            i = r.attachShadow({ mode: "open" })
            break
          default:
            return null
        }
        var v = n.getMeta(e)
        return (
          t instanceof qt &&
            (v || ((v = an(i, t.unserializedId)), n.add(e, v)),
            t.mirror.add(i, Object.assign({}, v))),
          i
        )
      }
      function rn(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new wt(),
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : new qt()
        return (
          (function e(r, i) {
            var o = nn(r, n, t, i)
            if (null !== o)
              if (
                ("IFRAME" !==
                  (null === i || void 0 === i ? void 0 : i.nodeName) &&
                  r.nodeType !== Ot.DOCUMENT_FRAGMENT_NODE &&
                  (null === i || void 0 === i || i.appendChild(o),
                  (o.parentNode = i),
                  (o.parentElement = i)),
                "IFRAME" === r.nodeName)
              ) {
                var a = r.contentDocument
                a && e(a, o)
              } else
                (r.nodeType !== Ot.DOCUMENT_NODE &&
                  r.nodeType !== Ot.ELEMENT_NODE &&
                  r.nodeType !== Ot.DOCUMENT_FRAGMENT_NODE) ||
                  (r.nodeType === Ot.ELEMENT_NODE &&
                    r.shadowRoot &&
                    e(r.shadowRoot, o),
                  r.childNodes.forEach(function (t) {
                    return e(t, o)
                  }))
          })(e, null),
          n
        )
      }
      var on = (function () {
        function e() {
          a(this, e),
            (this.idNodeMap = new Map()),
            (this.nodeMetaMap = new WeakMap())
        }
        return (
          l(e, [
            {
              key: "getId",
              value: function (e) {
                var t
                if (!e) return -1
                var n =
                  null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id
                return null !== n && void 0 !== n ? n : -1
              },
            },
            {
              key: "getNode",
              value: function (e) {
                return this.idNodeMap.get(e) || null
              },
            },
            {
              key: "getIds",
              value: function () {
                return Array.from(this.idNodeMap.keys())
              },
            },
            {
              key: "getMeta",
              value: function (e) {
                return this.nodeMetaMap.get(e) || null
              },
            },
            {
              key: "removeNodeFromMap",
              value: function (e) {
                var t = this,
                  n = this.getId(e)
                this.idNodeMap.delete(n),
                  e.childNodes &&
                    e.childNodes.forEach(function (e) {
                      return t.removeNodeFromMap(e)
                    })
              },
            },
            {
              key: "has",
              value: function (e) {
                return this.idNodeMap.has(e)
              },
            },
            {
              key: "hasNode",
              value: function (e) {
                return this.nodeMetaMap.has(e)
              },
            },
            {
              key: "add",
              value: function (e, t) {
                var n = t.id
                this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
              },
            },
            {
              key: "replace",
              value: function (e, t) {
                var n = this.getNode(e)
                if (n) {
                  var r = this.nodeMetaMap.get(n)
                  r && this.nodeMetaMap.set(t, r)
                }
                this.idNodeMap.set(e, t)
              },
            },
            {
              key: "reset",
              value: function () {
                ;(this.idNodeMap = new Map()),
                  (this.nodeMetaMap = new WeakMap())
              },
            },
          ]),
          e
        )
      })()
      function an(e, t) {
        switch (e.RRNodeType) {
          case dt.Document:
            return { id: t, type: e.RRNodeType, childNodes: [] }
          case dt.DocumentType:
            var n = e
            return {
              id: t,
              type: e.RRNodeType,
              name: n.name,
              publicId: n.publicId,
              systemId: n.systemId,
            }
          case dt.Element:
            return {
              id: t,
              type: e.RRNodeType,
              tagName: e.tagName.toLowerCase(),
              attributes: {},
              childNodes: [],
            }
          case dt.Text:
          case dt.Comment:
            return {
              id: t,
              type: e.RRNodeType,
              textContent: e.textContent || "",
            }
          case dt.CDATA:
            return { id: t, type: e.RRNodeType, textContent: "" }
        }
      }
      function sn(e) {
        return {
          all: (e = e || new Map()),
          on: function (t, n) {
            var r = e.get(t)
            r ? r.push(n) : e.set(t, [n])
          },
          off: function (t, n) {
            var r = e.get(t)
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
          },
          emit: function (t, n) {
            var r = e.get(t)
            r &&
              r.slice().map(function (e) {
                e(n)
              }),
              (r = e.get("*")) &&
                r.slice().map(function (e) {
                  e(t, n)
                })
          },
        }
      }
      function un() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document
        if (
          !("scrollBehavior" in t.documentElement.style) ||
          !0 === e.__forceSmoothScrollPolyfill__
        ) {
          var n,
            r = e.HTMLElement || e.Element,
            i = 468,
            o = {
              scroll: e.scroll || e.scrollTo,
              scrollBy: e.scrollBy,
              elementScroll: r.prototype.scroll || u,
              scrollIntoView: r.prototype.scrollIntoView,
            },
            a =
              e.performance && e.performance.now
                ? e.performance.now.bind(e.performance)
                : Date.now,
            s =
              ((n = e.navigator.userAgent),
              new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n)
                ? 1
                : 0)
          ;(e.scroll = e.scrollTo = function () {
            void 0 !== arguments[0] &&
              (!0 !== c(arguments[0])
                ? p.call(
                    e,
                    t.body,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : e.scrollX || e.pageXOffset,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : e.scrollY || e.pageYOffset
                  )
                : o.scroll.call(
                    e,
                    void 0 !== arguments[0].left
                      ? arguments[0].left
                      : "object" !== typeof arguments[0]
                      ? arguments[0]
                      : e.scrollX || e.pageXOffset,
                    void 0 !== arguments[0].top
                      ? arguments[0].top
                      : void 0 !== arguments[1]
                      ? arguments[1]
                      : e.scrollY || e.pageYOffset
                  ))
          }),
            (e.scrollBy = function () {
              void 0 !== arguments[0] &&
                (c(arguments[0])
                  ? o.scrollBy.call(
                      e,
                      void 0 !== arguments[0].left
                        ? arguments[0].left
                        : "object" !== typeof arguments[0]
                        ? arguments[0]
                        : 0,
                      void 0 !== arguments[0].top
                        ? arguments[0].top
                        : void 0 !== arguments[1]
                        ? arguments[1]
                        : 0
                    )
                  : p.call(
                      e,
                      t.body,
                      ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                      ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                    ))
            }),
            (r.prototype.scroll = r.prototype.scrollTo = function () {
              if (void 0 !== arguments[0])
                if (!0 !== c(arguments[0])) {
                  var e = arguments[0].left,
                    t = arguments[0].top
                  p.call(
                    this,
                    this,
                    "undefined" === typeof e ? this.scrollLeft : ~~e,
                    "undefined" === typeof t ? this.scrollTop : ~~t
                  )
                } else {
                  if (
                    "number" === typeof arguments[0] &&
                    void 0 === arguments[1]
                  )
                    throw new SyntaxError("Value could not be converted")
                  o.elementScroll.call(
                    this,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : "object" !== typeof arguments[0]
                      ? ~~arguments[0]
                      : this.scrollLeft,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : void 0 !== arguments[1]
                      ? ~~arguments[1]
                      : this.scrollTop
                  )
                }
            }),
            (r.prototype.scrollBy = function () {
              void 0 !== arguments[0] &&
                (!0 !== c(arguments[0])
                  ? this.scroll({
                      left: ~~arguments[0].left + this.scrollLeft,
                      top: ~~arguments[0].top + this.scrollTop,
                      behavior: arguments[0].behavior,
                    })
                  : o.elementScroll.call(
                      this,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left + this.scrollLeft
                        : ~~arguments[0] + this.scrollLeft,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top + this.scrollTop
                        : ~~arguments[1] + this.scrollTop
                    ))
            }),
            (r.prototype.scrollIntoView = function () {
              if (!0 !== c(arguments[0])) {
                var n = (function (e) {
                    for (; e !== t.body && !1 === d(e); )
                      e = e.parentNode || e.host
                    return e
                  })(this),
                  r = n.getBoundingClientRect(),
                  i = this.getBoundingClientRect()
                n !== t.body
                  ? (p.call(
                      this,
                      n,
                      n.scrollLeft + i.left - r.left,
                      n.scrollTop + i.top - r.top
                    ),
                    "fixed" !== e.getComputedStyle(n).position &&
                      e.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: "smooth",
                      }))
                  : e.scrollBy({ left: i.left, top: i.top, behavior: "smooth" })
              } else
                o.scrollIntoView.call(
                  this,
                  void 0 === arguments[0] || arguments[0]
                )
            })
        }
        function u(e, t) {
          ;(this.scrollLeft = e), (this.scrollTop = t)
        }
        function c(e) {
          if (
            null === e ||
            "object" !== typeof e ||
            void 0 === e.behavior ||
            "auto" === e.behavior ||
            "instant" === e.behavior
          )
            return !0
          if ("object" === typeof e && "smooth" === e.behavior) return !1
          throw new TypeError(
            "behavior member of ScrollOptions " +
              e.behavior +
              " is not a valid value for enumeration ScrollBehavior."
          )
        }
        function l(e, t) {
          return "Y" === t
            ? e.clientHeight + s < e.scrollHeight
            : "X" === t
            ? e.clientWidth + s < e.scrollWidth
            : void 0
        }
        function f(t, n) {
          var r = e.getComputedStyle(t, null)["overflow" + n]
          return "auto" === r || "scroll" === r
        }
        function d(e) {
          var t = l(e, "Y") && f(e, "Y"),
            n = l(e, "X") && f(e, "X")
          return t || n
        }
        function h(t) {
          var n,
            r,
            o,
            s,
            u = (a() - t.startTime) / i
          ;(s = u = u > 1 ? 1 : u),
            (n = 0.5 * (1 - Math.cos(Math.PI * s))),
            (r = t.startX + (t.x - t.startX) * n),
            (o = t.startY + (t.y - t.startY) * n),
            t.method.call(t.scrollable, r, o),
            (r === t.x && o === t.y) || e.requestAnimationFrame(h.bind(e, t))
        }
        function p(n, r, i) {
          var s,
            c,
            l,
            f,
            d = a()
          n === t.body
            ? ((s = e),
              (c = e.scrollX || e.pageXOffset),
              (l = e.scrollY || e.pageYOffset),
              (f = o.scroll))
            : ((s = n), (c = n.scrollLeft), (l = n.scrollTop), (f = u)),
            h({
              scrollable: s,
              method: f,
              startTime: d,
              startX: c,
              startY: l,
              x: r,
              y: i,
            })
        }
      }
      var cn,
        ln = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n = arguments.length > 1 ? arguments[1] : void 0
            a(this, e),
              (this.timeOffset = 0),
              (this.raf = null),
              (this.actions = t),
              (this.speed = n.speed)
          }
          return (
            l(e, [
              {
                key: "addAction",
                value: function (e) {
                  var t = !0 === this.raf
                  if (
                    !this.actions.length ||
                    this.actions[this.actions.length - 1].delay <= e.delay
                  )
                    this.actions.push(e)
                  else {
                    var n = this.findActionIndex(e)
                    this.actions.splice(n, 0, e)
                  }
                  t &&
                    (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
                },
              },
              {
                key: "start",
                value: function () {
                  ;(this.timeOffset = 0),
                    (this.lastTimestamp = performance.now()),
                    (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
                },
              },
              {
                key: "rafCheck",
                value: function () {
                  var e = performance.now()
                  for (
                    this.timeOffset += (e - this.lastTimestamp) * this.speed,
                      this.lastTimestamp = e;
                    this.actions.length;

                  ) {
                    var t = this.actions[0]
                    if (!(this.timeOffset >= t.delay)) break
                    this.actions.shift(), t.doAction()
                  }
                  this.actions.length > 0
                    ? (this.raf = requestAnimationFrame(
                        this.rafCheck.bind(this)
                      ))
                    : (this.raf = !0)
                },
              },
              {
                key: "clear",
                value: function () {
                  this.raf &&
                    (!0 !== this.raf && cancelAnimationFrame(this.raf),
                    (this.raf = null)),
                    (this.actions.length = 0)
                },
              },
              {
                key: "setSpeed",
                value: function (e) {
                  this.speed = e
                },
              },
              {
                key: "isActive",
                value: function () {
                  return null !== this.raf
                },
              },
              {
                key: "findActionIndex",
                value: function (e) {
                  for (var t = 0, n = this.actions.length - 1; t <= n; ) {
                    var r = Math.floor((t + n) / 2)
                    if (this.actions[r].delay < e.delay) t = r + 1
                    else {
                      if (!(this.actions[r].delay > e.delay)) return r + 1
                      n = r - 1
                    }
                  }
                  return t
                },
              },
            ]),
            e
          )
        })()
      function fn(e, t) {
        if (
          e.type === be.IncrementalSnapshot &&
          e.data.source === we.MouseMove &&
          e.data.positions &&
          e.data.positions.length
        ) {
          var n = e.data.positions[0].timeOffset,
            r = e.timestamp + n
          return (e.delay = r - t), r - t
        }
        return (e.delay = e.timestamp - t), e.delay
      }
      function dn(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator]
        if (!n) return e
        var r,
          i,
          o = n.call(e),
          a = []
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value)
        } catch (e) {
          i = { error: e }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }
      !(function (e) {
        ;(e[(e.NotStarted = 0)] = "NotStarted"),
          (e[(e.Running = 1)] = "Running"),
          (e[(e.Stopped = 2)] = "Stopped")
      })(cn || (cn = {}))
      var hn = { type: "xstate.init" }
      function pn(e) {
        return void 0 === e ? [] : [].concat(e)
      }
      function vn(e) {
        return { type: "xstate.assign", assignment: e }
      }
      function mn(e, t) {
        return "string" ==
          typeof (e = "string" == typeof e && t && t[e] ? t[e] : e)
          ? { type: e }
          : "function" == typeof e
          ? { type: e.name, exec: e }
          : e
      }
      function gn(e) {
        return function (t) {
          return e === t
        }
      }
      function yn(e) {
        return "string" == typeof e ? { type: e } : e
      }
      function bn(e, t) {
        return {
          value: e,
          context: t,
          actions: [],
          changed: !1,
          matches: gn(e),
        }
      }
      function wn(e, t, n) {
        var r = t,
          i = !1
        return [
          e.filter(function (e) {
            if ("xstate.assign" === e.type) {
              i = !0
              var t = Object.assign({}, r)
              return (
                "function" == typeof e.assignment
                  ? (t = e.assignment(r, n))
                  : Object.keys(e.assignment).forEach(function (i) {
                      t[i] =
                        "function" == typeof e.assignment[i]
                          ? e.assignment[i](r, n)
                          : e.assignment[i]
                    }),
                (r = t),
                !1
              )
            }
            return !0
          }),
          r,
          i,
        ]
      }
      function Sn(e, t) {
        void 0 === t && (t = {})
        var n = dn(
            wn(
              pn(e.states[e.initial].entry).map(function (e) {
                return mn(e, t.actions)
              }),
              e.context,
              hn
            ),
            2
          ),
          r = n[0],
          i = n[1],
          o = {
            config: e,
            _options: t,
            initialState: {
              value: e.initial,
              actions: r,
              context: i,
              matches: gn(e.initial),
            },
            transition: function (t, n) {
              var r,
                i,
                a = "string" == typeof t ? { value: t, context: e.context } : t,
                s = a.value,
                u = a.context,
                c = yn(n),
                l = e.states[s]
              if (l.on) {
                var f = pn(l.on[c.type])
                try {
                  for (
                    var d = (function (e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                          n = t && e[t],
                          r = 0
                        if (n) return n.call(e)
                        if (e && "number" == typeof e.length)
                          return {
                            next: function () {
                              return (
                                e && r >= e.length && (e = void 0),
                                { value: e && e[r++], done: !e }
                              )
                            },
                          }
                        throw new TypeError(
                          t
                            ? "Object is not iterable."
                            : "Symbol.iterator is not defined."
                        )
                      })(f),
                      h = d.next();
                    !h.done;
                    h = d.next()
                  ) {
                    var p = h.value
                    if (void 0 === p) return bn(s, u)
                    var v = "string" == typeof p ? { target: p } : p,
                      m = v.target,
                      g = v.actions,
                      y = void 0 === g ? [] : g,
                      b = v.cond,
                      w =
                        void 0 === b
                          ? function () {
                              return !0
                            }
                          : b,
                      S = void 0 === m,
                      C = null != m ? m : s,
                      I = e.states[C]
                    if (w(u, c)) {
                      var k = dn(
                          wn(
                            (S
                              ? pn(y)
                              : []
                                  .concat(l.exit, y, I.entry)
                                  .filter(function (e) {
                                    return e
                                  })
                            ).map(function (e) {
                              return mn(e, o._options.actions)
                            }),
                            u,
                            c
                          ),
                          3
                        ),
                        x = k[0],
                        E = k[1],
                        A = k[2],
                        M = null != m ? m : s
                      return {
                        value: M,
                        context: E,
                        actions: x,
                        changed: m !== s || x.length > 0 || A,
                        matches: gn(M),
                      }
                    }
                  }
                } catch (dn) {
                  r = { error: dn }
                } finally {
                  try {
                    h && !h.done && (i = d.return) && i.call(d)
                  } finally {
                    if (r) throw r.error
                  }
                }
              }
              return bn(s, u)
            },
          }
        return o
      }
      var Cn = function (e, t) {
        return e.actions.forEach(function (n) {
          var r = n.exec
          return r && r(e.context, t)
        })
      }
      function In(e) {
        var t = e.initialState,
          n = cn.NotStarted,
          r = new Set(),
          i = {
            _machine: e,
            send: function (i) {
              n === cn.Running &&
                ((t = e.transition(t, i)),
                Cn(t, yn(i)),
                r.forEach(function (e) {
                  return e(t)
                }))
            },
            subscribe: function (e) {
              return (
                r.add(e),
                e(t),
                {
                  unsubscribe: function () {
                    return r.delete(e)
                  },
                }
              )
            },
            start: function (r) {
              if (r) {
                var o =
                  "object" == typeof r
                    ? r
                    : { context: e.config.context, value: r }
                t = {
                  value: o.value,
                  actions: [],
                  context: o.context,
                  matches: gn(o.value),
                }
              }
              return (n = cn.Running), Cn(t, hn), i
            },
            stop: function () {
              return (n = cn.Stopped), r.clear(), i
            },
            get state() {
              return t
            },
            get status() {
              return n
            },
          }
        return i
      }
      function kn(e, t) {
        var n = t.getCastFn,
          r = t.applyEventsSynchronously,
          i = t.emitter
        return In(
          Sn(
            {
              id: "player",
              context: e,
              initial: "paused",
              states: {
                playing: {
                  on: {
                    PAUSE: { target: "paused", actions: ["pause"] },
                    CAST_EVENT: { target: "playing", actions: "castEvent" },
                    END: {
                      target: "paused",
                      actions: ["resetLastPlayedEvent", "pause"],
                    },
                    ADD_EVENT: { target: "playing", actions: ["addEvent"] },
                  },
                },
                paused: {
                  on: {
                    PLAY: {
                      target: "playing",
                      actions: ["recordTimeOffset", "play"],
                    },
                    CAST_EVENT: { target: "paused", actions: "castEvent" },
                    TO_LIVE: { target: "live", actions: ["startLive"] },
                    ADD_EVENT: { target: "paused", actions: ["addEvent"] },
                  },
                },
                live: {
                  on: {
                    ADD_EVENT: { target: "live", actions: ["addEvent"] },
                    CAST_EVENT: { target: "live", actions: ["castEvent"] },
                  },
                },
              },
            },
            {
              actions: {
                castEvent: vn({
                  lastPlayedEvent: function (e, t) {
                    return "CAST_EVENT" === t.type
                      ? t.payload.event
                      : e.lastPlayedEvent
                  },
                }),
                recordTimeOffset: vn(function (e, t) {
                  var n = e.timeOffset
                  return (
                    "payload" in t &&
                      "timeOffset" in t.payload &&
                      (n = t.payload.timeOffset),
                    Object.assign(Object.assign({}, e), {
                      timeOffset: n,
                      baselineTime: e.events[0].timestamp + n,
                    })
                  )
                }),
                play: function (e) {
                  var t,
                    o = e.timer,
                    a = e.events,
                    s = e.baselineTime,
                    u = e.lastPlayedEvent
                  o.clear()
                  var c,
                    l = ie(a)
                  try {
                    for (l.s(); !(c = l.n()).done; ) {
                      fn(c.value, s)
                    }
                  } catch (g) {
                    l.e(g)
                  } finally {
                    l.f()
                  }
                  var f = (function (e, t) {
                      for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n]
                        if (r.type === be.Meta && r.timestamp <= t)
                          return e.slice(n)
                      }
                      return e
                    })(a, s),
                    d = null === u || void 0 === u ? void 0 : u.timestamp
                  ;(null === u || void 0 === u ? void 0 : u.type) ===
                    be.IncrementalSnapshot &&
                    u.data.source === we.MouseMove &&
                    (d =
                      u.timestamp +
                      (null === (t = u.data.positions[0]) || void 0 === t
                        ? void 0
                        : t.timeOffset)),
                    s < (d || 0) && i.emit(Ie.PlayBack)
                  var h,
                    p = new Array(),
                    v = ie(f)
                  try {
                    var m = function () {
                      var e = h.value
                      if (d && d < s && (e.timestamp <= d || e === u))
                        return "continue"
                      if (e.timestamp < s) p.push(e)
                      else {
                        var t = n(e, !1)
                        o.addAction({
                          doAction: function () {
                            t()
                          },
                          delay: e.delay,
                        })
                      }
                    }
                    for (v.s(); !(h = v.n()).done; ) m()
                  } catch (g) {
                    v.e(g)
                  } finally {
                    v.f()
                  }
                  r(p), i.emit(Ie.Flush), o.start()
                },
                pause: function (e) {
                  e.timer.clear()
                },
                resetLastPlayedEvent: vn(function (e) {
                  return Object.assign(Object.assign({}, e), {
                    lastPlayedEvent: null,
                  })
                }),
                startLive: vn({
                  baselineTime: function (e, t) {
                    return (
                      e.timer.start(),
                      "TO_LIVE" === t.type && t.payload.baselineTime
                        ? t.payload.baselineTime
                        : Date.now()
                    )
                  },
                }),
                addEvent: vn(function (e, t) {
                  var r = e.baselineTime,
                    i = e.timer,
                    o = e.events
                  if ("ADD_EVENT" === t.type) {
                    var a = t.payload.event
                    fn(a, r)
                    var s = o.length - 1
                    if (!o[s] || o[s].timestamp <= a.timestamp) o.push(a)
                    else {
                      for (var u = -1, c = 0; c <= s; ) {
                        var l = Math.floor((c + s) / 2)
                        o[l].timestamp <= a.timestamp
                          ? (c = l + 1)
                          : (s = l - 1)
                      }
                      ;-1 === u && (u = c), o.splice(u, 0, a)
                    }
                    var f = a.timestamp < r,
                      d = n(a, f)
                    f
                      ? d()
                      : i.isActive() &&
                        i.addAction({
                          doAction: function () {
                            d()
                          },
                          delay: a.delay,
                        })
                  }
                  return Object.assign(Object.assign({}, e), { events: o })
                }),
              },
            }
          )
        )
      }
      function xn(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : document,
          r = { capture: !0, passive: !0 }
        return (
          n.addEventListener(e, t, r),
          function () {
            return n.removeEventListener(e, t, r)
          }
        )
      }
      var En =
          "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        An = {
          map: {},
          getId: function () {
            return console.error(En), -1
          },
          getNode: function () {
            return console.error(En), null
          },
          removeNodeFromMap: function () {
            console.error(En)
          },
          has: function () {
            return console.error(En), !1
          },
          reset: function () {
            console.error(En)
          },
        }
      function Mn(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = null,
          i = 0
        return function () {
          for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
            a[s] = arguments[s]
          var u = Date.now()
          i || !1 !== n.leading || (i = u)
          var c = t - (u - i),
            l = this
          c <= 0 || c > t
            ? (r && (clearTimeout(r), (r = null)), (i = u), e.apply(l, a))
            : r ||
              !1 === n.trailing ||
              (r = setTimeout(function () {
                ;(i = !1 === n.leading ? 0 : Date.now()),
                  (r = null),
                  e.apply(l, a)
              }, c))
        }
      }
      function Tn(e, t, n, r) {
        var i =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : window,
          o = i.Object.getOwnPropertyDescriptor(e, t)
        return (
          i.Object.defineProperty(
            e,
            t,
            r
              ? n
              : {
                  set: function (e) {
                    var t = this
                    setTimeout(function () {
                      n.set.call(t, e)
                    }, 0),
                      o && o.set && o.set.call(this, e)
                  },
                }
          ),
          function () {
            return Tn(e, t, o || {}, !0)
          }
        )
      }
      function Nn(e, t, n) {
        try {
          if (!(t in e)) return function () {}
          var r = e[t],
            i = n(r)
          return (
            "function" === typeof i &&
              ((i.prototype = i.prototype || {}),
              Object.defineProperties(i, {
                __rrweb_original__: { enumerable: !1, value: r },
              })),
            (e[t] = i),
            function () {
              e[t] = r
            }
          )
        } catch (o) {
          return function () {}
        }
      }
      function _n(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = e.document
        return {
          left: s.scrollingElement
            ? s.scrollingElement.scrollLeft
            : void 0 !== e.pageXOffset
            ? e.pageXOffset
            : (null === s || void 0 === s
                ? void 0
                : s.documentElement.scrollLeft) ||
              (null ===
                (n =
                  null === (t = null === s || void 0 === s ? void 0 : s.body) ||
                  void 0 === t
                    ? void 0
                    : t.parentElement) || void 0 === n
                ? void 0
                : n.scrollLeft) ||
              (null === (r = null === s || void 0 === s ? void 0 : s.body) ||
              void 0 === r
                ? void 0
                : r.scrollLeft) ||
              0,
          top: s.scrollingElement
            ? s.scrollingElement.scrollTop
            : void 0 !== e.pageYOffset
            ? e.pageYOffset
            : (null === s || void 0 === s
                ? void 0
                : s.documentElement.scrollTop) ||
              (null ===
                (o =
                  null === (i = null === s || void 0 === s ? void 0 : s.body) ||
                  void 0 === i
                    ? void 0
                    : i.parentElement) || void 0 === o
                ? void 0
                : o.scrollTop) ||
              (null === (a = null === s || void 0 === s ? void 0 : s.body) ||
              void 0 === a
                ? void 0
                : a.scrollTop) ||
              0,
        }
      }
      function Rn() {
        return (
          window.innerHeight ||
          (document.documentElement && document.documentElement.clientHeight) ||
          (document.body && document.body.clientHeight)
        )
      }
      function On() {
        return (
          window.innerWidth ||
          (document.documentElement && document.documentElement.clientWidth) ||
          (document.body && document.body.clientWidth)
        )
      }
      function Dn(e, t, n, r) {
        if (!e) return !1
        var i = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
        if (!i) return !1
        if ("string" === typeof t) {
          if (i.classList.contains(t)) return !0
          if (r && null !== i.closest("." + t)) return !0
        } else if (nt(i, t, r)) return !0
        if (n) {
          if (i.matches(n)) return !0
          if (r && null !== i.closest(n)) return !0
        }
        return !1
      }
      function Ln(e, t) {
        return t.getId(e) === ze
      }
      function Fn(e, t) {
        if (Re(e)) return !1
        var n = t.getId(e)
        return (
          !t.has(n) ||
          ((!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) &&
            (!e.parentNode || Fn(e.parentNode, t)))
        )
      }
      function Vn(e) {
        return Boolean(e.changedTouches)
      }
      function Bn() {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window
        "NodeList" in t &&
          !t.NodeList.prototype.forEach &&
          (t.NodeList.prototype.forEach = Array.prototype.forEach),
          "DOMTokenList" in t &&
            !t.DOMTokenList.prototype.forEach &&
            (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
          Node.prototype.contains ||
            (Node.prototype.contains = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              var i = n[0]
              if (!(0 in n)) throw new TypeError("1 argument is required")
              do {
                if (e === i) return !0
              } while ((i = i && i.parentNode))
              return !1
            })
      }
      function jn(e) {
        var t,
          n = {},
          r = function (e, t) {
            var r = { value: e, parent: t, children: [] }
            return (n[e.node.id] = r), r
          },
          i = [],
          o = ie(e)
        try {
          for (o.s(); !(t = o.n()).done; ) {
            var a = t.value,
              s = a.nextId,
              u = a.parentId
            if (s && s in n) {
              var c = n[s]
              if (c.parent) {
                var l = c.parent.children.indexOf(c)
                c.parent.children.splice(l, 0, r(a, c.parent))
              } else {
                var f = i.indexOf(c)
                i.splice(f, 0, r(a, null))
              }
            } else if (u in n) {
              var d = n[u]
              d.children.push(r(a, d))
            } else i.push(r(a, null))
          }
        } catch (h) {
          o.e(h)
        } finally {
          o.f()
        }
        return i
      }
      function Pn(e, t) {
        t(e.value)
        for (var n = e.children.length - 1; n >= 0; n--) Pn(e.children[n], t)
      }
      function Wn(e, t) {
        return Boolean("IFRAME" === e.nodeName && t.getMeta(e))
      }
      function Un(e, t) {
        return Boolean(
          "LINK" === e.nodeName &&
            e.nodeType === e.ELEMENT_NODE &&
            e.getAttribute &&
            "stylesheet" === e.getAttribute("rel") &&
            t.getMeta(e)
        )
      }
      function Gn(e, t) {
        var n,
          r,
          i =
            null ===
              (r =
                null === (n = e.ownerDocument) || void 0 === n
                  ? void 0
                  : n.defaultView) || void 0 === r
              ? void 0
              : r.frameElement
        if (!i || i === t)
          return { x: 0, y: 0, relativeScale: 1, absoluteScale: 1 }
        var o = i.getBoundingClientRect(),
          a = Gn(i, t),
          s = o.height / i.clientHeight
        return {
          x: o.x * a.relativeScale + a.x,
          y: o.y * a.relativeScale + a.y,
          relativeScale: s,
          absoluteScale: a.absoluteScale * s,
        }
      }
      function zn(e) {
        return Boolean(null === e || void 0 === e ? void 0 : e.shadowRoot)
      }
      function Zn(e, t) {
        var n = e[t[0]]
        return 1 === t.length ? n : Zn(n.cssRules[t[1]].cssRules, t.slice(2))
      }
      function qn(e) {
        var t = w(e),
          n = t.pop()
        return { positions: t, index: n }
      }
      "undefined" !== typeof window &&
        window.Proxy &&
        window.Reflect &&
        (An = new Proxy(An, {
          get: function (e, t, n) {
            return "map" === t && console.error(En), Reflect.get(e, t, n)
          },
        }))
      var Hn = (function () {
        function e() {
          a(this, e),
            (this.id = 1),
            (this.styleIDMap = new WeakMap()),
            (this.idStyleMap = new Map())
        }
        return (
          l(e, [
            {
              key: "getId",
              value: function (e) {
                var t
                return null !== (t = this.styleIDMap.get(e)) && void 0 !== t
                  ? t
                  : -1
              },
            },
            {
              key: "has",
              value: function (e) {
                return this.styleIDMap.has(e)
              },
            },
            {
              key: "add",
              value: function (e, t) {
                return this.has(e)
                  ? this.getId(e)
                  : ((n = void 0 === t ? this.id++ : t),
                    this.styleIDMap.set(e, n),
                    this.idStyleMap.set(n, e),
                    n)
                var n
              },
            },
            {
              key: "getStyle",
              value: function (e) {
                return this.idStyleMap.get(e) || null
              },
            },
            {
              key: "reset",
              value: function () {
                ;(this.styleIDMap = new WeakMap()),
                  (this.idStyleMap = new Map()),
                  (this.id = 1)
              },
            },
            {
              key: "generateId",
              value: function () {
                return this.id++
              },
            },
          ]),
          e
        )
      })()
      function Yn(e) {
        var t,
          n,
          r = null
        return (
          (null ===
            (n =
              null === (t = e.getRootNode) || void 0 === t
                ? void 0
                : t.call(e)) || void 0 === n
            ? void 0
            : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
            e.getRootNode().host &&
            (r = e.getRootNode().host),
          r
        )
      }
      function Qn(e) {
        var t = e.ownerDocument
        if (!t) return !1
        var n = (function (e) {
          for (var t, n = e; (t = Yn(n)); ) n = t
          return n
        })(e)
        return t.contains(n)
      }
      function Kn(e) {
        var t = e.ownerDocument
        return !!t && (t.contains(e) || Qn(e))
      }
      function Jn(e, t, n) {
        return (
          (Jn = de()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null]
                r.push.apply(r, t)
                var i = new (Function.bind.apply(e, r))()
                return n && le(i, n.prototype), i
              }),
          Jn.apply(null, arguments)
        )
      }
      for (
        var Xn =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          $n = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256),
          er = 0;
        er < Xn.length;
        er++
      )
        $n[Xn.charCodeAt(er)] = er
      var tr = function (e) {
          var t,
            n = new Uint8Array(e),
            r = n.length,
            i = ""
          for (t = 0; t < r; t += 3)
            (i += Xn[n[t] >> 2]),
              (i += Xn[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
              (i += Xn[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
              (i += Xn[63 & n[t + 2]])
          return (
            r % 3 === 2
              ? (i = i.substring(0, i.length - 1) + "=")
              : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
          )
        },
        nr = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a = 0.75 * e.length,
            s = e.length,
            u = 0
          "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--)
          var c = new ArrayBuffer(a),
            l = new Uint8Array(c)
          for (t = 0; t < s; t += 4)
            (n = $n[e.charCodeAt(t)]),
              (r = $n[e.charCodeAt(t + 1)]),
              (i = $n[e.charCodeAt(t + 2)]),
              (o = $n[e.charCodeAt(t + 3)]),
              (l[u++] = (n << 2) | (r >> 4)),
              (l[u++] = ((15 & r) << 4) | (i >> 2)),
              (l[u++] = ((3 & i) << 6) | (63 & o))
          return c
        },
        rr = new Map()
      function ir(e, t) {
        var n = rr.get(e)
        return (
          n || ((n = new Map()), rr.set(e, n)),
          n.has(t) || n.set(t, []),
          n.get(t)
        )
      }
      function or(e, t, n) {
        var r = this
        return function (i) {
          return Ne(
            r,
            void 0,
            void 0,
            oe().mark(function r() {
              var o, a, s, u, c, l, f, d, h, p, v
              return oe().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (!i || "object" !== typeof i || !("rr_type" in i)) {
                        r.next = 55
                        break
                      }
                      if (
                        (n && (n.isUnchanged = !1),
                        "ImageBitmap" !== i.rr_type || !("args" in i))
                      ) {
                        r.next = 11
                        break
                      }
                      return (r.next = 5), or(e, t, n)(i.args)
                    case 5:
                      return (
                        (o = r.sent),
                        (r.next = 8),
                        createImageBitmap.apply(null, o)
                      )
                    case 8:
                      return r.abrupt("return", r.sent)
                    case 11:
                      if (!("index" in i)) {
                        r.next = 18
                        break
                      }
                      if (!n && null !== t) {
                        r.next = 14
                        break
                      }
                      return r.abrupt("return", i)
                    case 14:
                      return (
                        (a = i.rr_type),
                        (s = i.index),
                        r.abrupt("return", ir(t, a)[s])
                      )
                    case 18:
                      if (!("args" in i)) {
                        r.next = 31
                        break
                      }
                      return (
                        (u = i.rr_type),
                        (c = i.args),
                        (l = window[u]),
                        (r.t0 = Jn),
                        (r.t1 = l),
                        (r.t2 = w),
                        (r.next = 26),
                        Promise.all(c.map(or(e, t, n)))
                      )
                    case 26:
                      return (
                        (r.t3 = r.sent),
                        (r.t4 = (0, r.t2)(r.t3)),
                        r.abrupt("return", (0, r.t0)(r.t1, r.t4))
                      )
                    case 31:
                      if (!("base64" in i)) {
                        r.next = 35
                        break
                      }
                      return r.abrupt("return", nr(i.base64))
                    case 35:
                      if (!("src" in i)) {
                        r.next = 47
                        break
                      }
                      if (!(f = e.get(i.src))) {
                        r.next = 41
                        break
                      }
                      return r.abrupt("return", f)
                    case 41:
                      return (
                        ((d = new Image()).src = i.src),
                        e.set(i.src, d),
                        r.abrupt("return", d)
                      )
                    case 45:
                      r.next = 53
                      break
                    case 47:
                      if (!("data" in i) || "Blob" !== i.rr_type) {
                        r.next = 53
                        break
                      }
                      return (r.next = 50), Promise.all(i.data.map(or(e, t, n)))
                    case 50:
                      return (
                        (h = r.sent),
                        (p = new Blob(h, { type: i.type })),
                        r.abrupt("return", p)
                      )
                    case 53:
                      r.next = 60
                      break
                    case 55:
                      if (!Array.isArray(i)) {
                        r.next = 60
                        break
                      }
                      return (r.next = 58), Promise.all(i.map(or(e, t, n)))
                    case 58:
                      return (v = r.sent), r.abrupt("return", v)
                    case 60:
                      return r.abrupt("return", i)
                    case 61:
                    case "end":
                      return r.stop()
                  }
              }, r)
            })
          )
        }
      }
      function ar(e, t) {
        try {
          return t === Ce.WebGL
            ? e.getContext("webgl") || e.getContext("experimental-webgl")
            : e.getContext("webgl2")
        } catch (hn) {
          return null
        }
      }
      var sr = [
        "WebGLActiveInfo",
        "WebGLBuffer",
        "WebGLFramebuffer",
        "WebGLProgram",
        "WebGLRenderbuffer",
        "WebGLShader",
        "WebGLShaderPrecisionFormat",
        "WebGLTexture",
        "WebGLUniformLocation",
        "WebGLVertexArrayObject",
      ]
      function ur(e, t) {
        if (null === t || void 0 === t ? void 0 : t.constructor) {
          var n = t.constructor.name
          if (sr.includes(n)) {
            var r = ir(e, n)
            r.includes(t) || r.push(t)
          }
        }
      }
      function cr(e) {
        var t = e.mutation,
          n = e.target,
          r = e.type,
          i = e.imageMap,
          o = e.errorHandler
        return Ne(
          this,
          void 0,
          void 0,
          oe().mark(function e() {
            var a, s, u, c
            return oe().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), (a = ar(n, r)))) {
                        e.next = 4
                        break
                      }
                      return e.abrupt("return")
                    case 4:
                      if (!t.setter) {
                        e.next = 7
                        break
                      }
                      return (a[t.property] = t.args[0]), e.abrupt("return")
                    case 7:
                      return (
                        (s = a[t.property]),
                        (e.next = 10),
                        Promise.all(t.args.map(or(i, a)))
                      )
                    case 10:
                      ;(u = e.sent),
                        (c = s.apply(a, u)),
                        ur(a, c),
                        !1,
                        (e.next = 20)
                      break
                    case 17:
                      ;(e.prev = 17), (e.t0 = e.catch(0)), o(t, e.t0)
                    case 20:
                    case "end":
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 17]]
            )
          })
        )
      }
      function lr(e) {
        var t = e.event,
          n = e.mutation,
          r = e.target,
          i = e.imageMap,
          o = e.errorHandler
        return Ne(
          this,
          void 0,
          void 0,
          oe().mark(function e() {
            var a, s, u
            return oe().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), (a = r.getContext("2d")), !n.setter)) {
                        e.next = 5
                        break
                      }
                      return (a[n.property] = n.args[0]), e.abrupt("return")
                    case 5:
                      if (
                        ((s = a[n.property]),
                        "drawImage" !== n.property ||
                          "string" !== typeof n.args[0])
                      ) {
                        e.next = 11
                        break
                      }
                      i.get(t), s.apply(a, n.args), (e.next = 15)
                      break
                    case 11:
                      return (e.next = 13), Promise.all(n.args.map(or(i, a)))
                    case 13:
                      ;(u = e.sent), s.apply(a, u)
                    case 15:
                      e.next = 20
                      break
                    case 17:
                      ;(e.prev = 17), (e.t0 = e.catch(0)), o(n, e.t0)
                    case 20:
                    case "end":
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 17]]
            )
          })
        )
      }
      function fr(e) {
        var t = e.event,
          n = e.mutation,
          r = e.target,
          i = e.imageMap,
          o = e.canvasEventMap,
          a = e.errorHandler
        return Ne(
          this,
          void 0,
          void 0,
          oe().mark(function e() {
            var s, u, c, l, f, d
            return oe().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (s = o.get(t) || n),
                        (u = "commands" in s ? s.commands : [s]),
                        ![Ce.WebGL, Ce.WebGL2].includes(n.type))
                      ) {
                        e.next = 13
                        break
                      }
                      c = 0
                    case 5:
                      if (!(c < u.length)) {
                        e.next = 12
                        break
                      }
                      return (
                        (l = u[c]),
                        (e.next = 9),
                        cr({
                          mutation: l,
                          type: n.type,
                          target: r,
                          imageMap: i,
                          errorHandler: a,
                        })
                      )
                    case 9:
                      c++, (e.next = 5)
                      break
                    case 12:
                      return e.abrupt("return")
                    case 13:
                      f = 0
                    case 14:
                      if (!(f < u.length)) {
                        e.next = 21
                        break
                      }
                      return (
                        (d = u[f]),
                        (e.next = 18),
                        lr({
                          event: t,
                          mutation: d,
                          target: r,
                          imageMap: i,
                          errorHandler: a,
                        })
                      )
                    case 18:
                      f++, (e.next = 14)
                      break
                    case 21:
                      e.next = 26
                      break
                    case 23:
                      ;(e.prev = 23), (e.t0 = e.catch(0)), a(n, e.t0)
                    case 26:
                    case "end":
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 23]]
            )
          })
        )
      }
      var dr = 1e4,
        hr = 5e3,
        pr = sn || e,
        vr = "[replayer]",
        mr = {
          duration: 500,
          lineCap: "round",
          lineWidth: 3,
          strokeStyle: "red",
        }
      function gr(e) {
        return (
          e.type == be.IncrementalSnapshot &&
          (e.data.source == we.TouchMove ||
            (e.data.source == we.MouseInteraction &&
              e.data.type == Se.TouchStart))
        )
      }
      var yr,
        br,
        wr,
        Sr = (function () {
          function e(t, n) {
            var r = this
            if (
              (a(this, e),
              (this.usingVirtualDom = !1),
              (this.virtualDom = new qt()),
              (this.mouseTail = null),
              (this.tailPositions = []),
              (this.emitter = pr()),
              (this.legacy_missingNodeRetryMap = {}),
              (this.cache = mt()),
              (this.imageMap = new Map()),
              (this.canvasEventMap = new Map()),
              (this.mirror = Ve()),
              (this.styleMirror = new Hn()),
              (this.firstFullSnapshot = null),
              (this.newDocumentQueue = []),
              (this.mousePos = null),
              (this.touchActive = null),
              (this.lastSelectionData = null),
              (this.constructedStyleMutations = []),
              (this.adoptedStyleSheets = []),
              (this.handleResize = function (e) {
                r.iframe.style.display = "inherit"
                for (
                  var t = 0, n = [r.mouseTail, r.iframe];
                  t < n.length;
                  t++
                ) {
                  var i = n[t]
                  i &&
                    (i.setAttribute("width", String(e.width)),
                    i.setAttribute("height", String(e.height)))
                }
              }),
              (this.applyEventsSynchronously = function (e) {
                var t,
                  n = ie(e)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var i = t.value
                    switch (i.type) {
                      case be.DomContentLoaded:
                      case be.Load:
                      case be.Custom:
                        continue
                      case be.FullSnapshot:
                      case be.Meta:
                      case be.Plugin:
                      case be.IncrementalSnapshot:
                    }
                    r.getCastFn(i, !0)()
                  }
                } catch (o) {
                  n.e(o)
                } finally {
                  n.f()
                }
                !0 === r.touchActive
                  ? r.mouse.classList.add("touch-active")
                  : !1 === r.touchActive &&
                    r.mouse.classList.remove("touch-active"),
                  (r.touchActive = null)
              }),
              (this.getCastFn = function (e) {
                var t,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1]
                switch (e.type) {
                  case be.DomContentLoaded:
                  case be.Load:
                    break
                  case be.Custom:
                    t = function () {
                      r.emitter.emit(Ie.CustomEvent, e)
                    }
                    break
                  case be.Meta:
                    t = function () {
                      return r.emitter.emit(Ie.Resize, {
                        width: e.data.width,
                        height: e.data.height,
                      })
                    }
                    break
                  case be.FullSnapshot:
                    t = function () {
                      var t
                      if (r.firstFullSnapshot) {
                        if (r.firstFullSnapshot === e)
                          return void (r.firstFullSnapshot = !0)
                      } else r.firstFullSnapshot = !0
                      r.rebuildFullSnapshot(e, n),
                        null === (t = r.iframe.contentWindow) ||
                          void 0 === t ||
                          t.scrollTo(e.data.initialOffset),
                        r.styleMirror.reset()
                    }
                    break
                  case be.IncrementalSnapshot:
                    t = function () {
                      if (
                        (r.applyIncremental(e, n),
                        !n &&
                          (e === r.nextUserInteractionEvent &&
                            ((r.nextUserInteractionEvent = null),
                            r.backToNormal()),
                          r.config.skipInactive && !r.nextUserInteractionEvent))
                      ) {
                        var t,
                          i = ie(r.service.state.context.events)
                        try {
                          for (i.s(); !(t = i.n()).done; ) {
                            var o = t.value
                            if (
                              !(o.timestamp <= e.timestamp) &&
                              r.isUserInteraction(o)
                            ) {
                              o.delay - e.delay >
                                dr * r.speedService.state.context.timer.speed &&
                                (r.nextUserInteractionEvent = o)
                              break
                            }
                          }
                        } catch (u) {
                          i.e(u)
                        } finally {
                          i.f()
                        }
                        if (r.nextUserInteractionEvent) {
                          var a = r.nextUserInteractionEvent.delay - e.delay,
                            s = {
                              speed: Math.min(
                                Math.round(a / hr),
                                r.config.maxSpeed
                              ),
                            }
                          r.speedService.send({
                            type: "FAST_FORWARD",
                            payload: s,
                          }),
                            r.emitter.emit(Ie.SkipStart, s)
                        }
                      }
                    }
                }
                return function () {
                  t && t()
                  var i,
                    o = ie(r.config.plugins || [])
                  try {
                    for (o.s(); !(i = o.n()).done; ) {
                      var a = i.value
                      a.handler && a.handler(e, n, { replayer: r })
                    }
                  } catch (c) {
                    o.e(c)
                  } finally {
                    o.f()
                  }
                  r.service.send({ type: "CAST_EVENT", payload: { event: e } })
                  var s = r.service.state.context.events.length - 1
                  if (
                    !r.config.liveMode &&
                    e === r.service.state.context.events[s]
                  ) {
                    var u = 50
                    e.type === be.IncrementalSnapshot &&
                      e.data.source === we.MouseMove &&
                      e.data.positions.length &&
                      (u += Math.max(0, -e.data.positions[0].timeOffset)),
                      setTimeout(function () {
                        s < r.service.state.context.events.length - 1 ||
                          (r.backToNormal(),
                          r.service.send("END"),
                          r.emitter.emit(Ie.Finish))
                      }, u)
                  }
                  r.emitter.emit(Ie.EventCast, e)
                }
              }),
              !(null === n || void 0 === n ? void 0 : n.liveMode) &&
                t.length < 2)
            )
              throw new Error("Replayer need at least 2 events.")
            var i = {
              speed: 1,
              maxSpeed: 360,
              root: document.body,
              loadTimeout: 0,
              skipInactive: !1,
              showWarning: !0,
              showDebug: !1,
              blockClass: "rr-block",
              liveMode: !1,
              insertStyleRules: [],
              triggerFocus: !0,
              UNSAFE_replayCanvas: !1,
              pauseAnimation: !0,
              mouseTail: mr,
              useVirtualDom: !0,
              logger: console,
            }
            ;(this.config = Object.assign({}, i, n)),
              (this.handleResize = this.handleResize.bind(this)),
              (this.getCastFn = this.getCastFn.bind(this)),
              (this.applyEventsSynchronously = this.applyEventsSynchronously.bind(
                this
              )),
              this.emitter.on(Ie.Resize, this.handleResize),
              this.setupDom()
            var o,
              s = ie(this.config.plugins || [])
            try {
              for (s.s(); !(o = s.n()).done; ) {
                var u = o.value
                u.getMirror && u.getMirror({ nodeMirror: this.mirror })
              }
            } catch (v) {
              s.e(v)
            } finally {
              s.f()
            }
            this.emitter.on(Ie.Flush, function () {
              if (r.usingVirtualDom) {
                var e = {
                  mirror: r.mirror,
                  applyCanvas: function (e, t, n) {
                    fr({
                      event: e,
                      mutation: t,
                      target: n,
                      imageMap: r.imageMap,
                      canvasEventMap: r.canvasEventMap,
                      errorHandler: r.warnCanvasMutationFailed.bind(r),
                    })
                  },
                  applyInput: r.applyInput.bind(r),
                  applyScroll: r.applyScroll.bind(r),
                  applyStyleSheetMutation: function (e, t) {
                    e.source === we.StyleSheetRule
                      ? r.applyStyleSheetRule(e, t)
                      : e.source === we.StyleDeclaration &&
                        r.applyStyleDeclaration(e, t)
                  },
                  afterAppend: function (e, t) {
                    var n,
                      i = ie(r.config.plugins || [])
                    try {
                      for (i.s(); !(n = i.n()).done; ) {
                        var o = n.value
                        o.onBuild && o.onBuild(e, { id: t, replayer: r })
                      }
                    } catch (v) {
                      i.e(v)
                    } finally {
                      i.f()
                    }
                  },
                }
                if (r.iframe.contentDocument)
                  try {
                    Wt(
                      r.iframe.contentDocument,
                      r.virtualDom,
                      e,
                      r.virtualDom.mirror
                    )
                  } catch (hn) {
                    console.warn(hn)
                  }
                if (
                  (r.virtualDom.destroyTree(),
                  (r.usingVirtualDom = !1),
                  Object.keys(r.legacy_missingNodeRetryMap).length)
                )
                  for (var t in r.legacy_missingNodeRetryMap)
                    try {
                      var n = r.legacy_missingNodeRetryMap[t],
                        i = Gt(n.node, r.mirror, r.virtualDom.mirror)
                      Wt(i, n.node, e, r.virtualDom.mirror), (n.node = i)
                    } catch (o) {
                      r.warn(o)
                    }
                r.constructedStyleMutations.forEach(function (e) {
                  r.applyStyleSheetMutation(e)
                }),
                  (r.constructedStyleMutations = []),
                  r.adoptedStyleSheets.forEach(function (e) {
                    r.applyAdoptedStyleSheet(e)
                  }),
                  (r.adoptedStyleSheets = [])
              }
              r.mousePos &&
                (r.moveAndHover(
                  r.mousePos.x,
                  r.mousePos.y,
                  r.mousePos.id,
                  !0,
                  r.mousePos.debugData
                ),
                (r.mousePos = null)),
                r.lastSelectionData &&
                  (r.applySelection(r.lastSelectionData),
                  (r.lastSelectionData = null))
            }),
              this.emitter.on(Ie.PlayBack, function () {
                ;(r.firstFullSnapshot = null),
                  r.mirror.reset(),
                  r.styleMirror.reset()
              })
            var c = new ln([], { speed: this.config.speed })
            ;(this.service = kn(
              {
                events: t
                  .map(function (e) {
                    return n && n.unpackFn ? n.unpackFn(e) : e
                  })
                  .sort(function (e, t) {
                    return e.timestamp - t.timestamp
                  }),
                timer: c,
                timeOffset: 0,
                baselineTime: 0,
                lastPlayedEvent: null,
              },
              {
                getCastFn: this.getCastFn,
                applyEventsSynchronously: this.applyEventsSynchronously,
                emitter: this.emitter,
              }
            )),
              this.service.start(),
              this.service.subscribe(function (e) {
                r.emitter.emit(Ie.StateChange, { player: e })
              }),
              (this.speedService = In(
                Sn(
                  {
                    id: "speed",
                    context: { normalSpeed: -1, timer: c },
                    initial: "normal",
                    states: {
                      normal: {
                        on: {
                          FAST_FORWARD: {
                            target: "skipping",
                            actions: ["recordSpeed", "setSpeed"],
                          },
                          SET_SPEED: {
                            target: "normal",
                            actions: ["setSpeed"],
                          },
                        },
                      },
                      skipping: {
                        on: {
                          BACK_TO_NORMAL: {
                            target: "normal",
                            actions: ["restoreSpeed"],
                          },
                          SET_SPEED: {
                            target: "normal",
                            actions: ["setSpeed"],
                          },
                        },
                      },
                    },
                  },
                  {
                    actions: {
                      setSpeed: function (e, t) {
                        "payload" in t && e.timer.setSpeed(t.payload.speed)
                      },
                      recordSpeed: vn({
                        normalSpeed: function (e) {
                          return e.timer.speed
                        },
                      }),
                      restoreSpeed: function (e) {
                        e.timer.setSpeed(e.normalSpeed)
                      },
                    },
                  }
                )
              )),
              this.speedService.start(),
              this.speedService.subscribe(function (e) {
                r.emitter.emit(Ie.StateChange, { speed: e })
              })
            var l = this.service.state.context.events.find(function (e) {
                return e.type === be.Meta
              }),
              f = this.service.state.context.events.find(function (e) {
                return e.type === be.FullSnapshot
              })
            if (l) {
              var d = l.data,
                h = d.width,
                p = d.height
              setTimeout(function () {
                r.emitter.emit(Ie.Resize, { width: h, height: p })
              }, 0)
            }
            f &&
              setTimeout(function () {
                var e
                r.firstFullSnapshot ||
                  ((r.firstFullSnapshot = f),
                  r.rebuildFullSnapshot(f),
                  null === (e = r.iframe.contentWindow) ||
                    void 0 === e ||
                    e.scrollTo(f.data.initialOffset))
              }, 1),
              this.service.state.context.events.find(gr) &&
                this.mouse.classList.add("touch-device")
          }
          return (
            l(e, [
              {
                key: "timer",
                get: function () {
                  return this.service.state.context.timer
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return this.emitter.on(e, t), this
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  return this.emitter.off(e, t), this
                },
              },
              {
                key: "setConfig",
                value: function (e) {
                  var t = this
                  Object.keys(e).forEach(function (n) {
                    e[n], (t.config[n] = e[n])
                  }),
                    this.config.skipInactive || this.backToNormal(),
                    "undefined" !== typeof e.speed &&
                      this.speedService.send({
                        type: "SET_SPEED",
                        payload: { speed: e.speed },
                      }),
                    "undefined" !== typeof e.mouseTail &&
                      (!1 === e.mouseTail
                        ? this.mouseTail &&
                          (this.mouseTail.style.display = "none")
                        : (this.mouseTail ||
                            ((this.mouseTail = document.createElement(
                              "canvas"
                            )),
                            (this.mouseTail.width = Number.parseFloat(
                              this.iframe.width
                            )),
                            (this.mouseTail.height = Number.parseFloat(
                              this.iframe.height
                            )),
                            this.mouseTail.classList.add("replayer-mouse-tail"),
                            this.wrapper.insertBefore(
                              this.mouseTail,
                              this.iframe
                            )),
                          (this.mouseTail.style.display = "inherit")))
                },
              },
              {
                key: "getMetaData",
                value: function () {
                  var e = this.service.state.context.events[0],
                    t = this.service.state.context.events[
                      this.service.state.context.events.length - 1
                    ]
                  return {
                    startTime: e.timestamp,
                    endTime: t.timestamp,
                    totalTime: t.timestamp - e.timestamp,
                  }
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.timer.timeOffset + this.getTimeOffset()
                },
              },
              {
                key: "getTimeOffset",
                value: function () {
                  var e = this.service.state.context
                  return e.baselineTime - e.events[0].timestamp
                },
              },
              {
                key: "getMirror",
                value: function () {
                  return this.mirror
                },
              },
              {
                key: "play",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0
                  this.service.state.matches("paused") ||
                    this.service.send({ type: "PAUSE" }),
                    this.service.send({
                      type: "PLAY",
                      payload: { timeOffset: n },
                    }),
                    null ===
                      (t =
                        null === (e = this.iframe.contentDocument) ||
                        void 0 === e
                          ? void 0
                          : e.getElementsByTagName("html")[0]) ||
                      void 0 === t ||
                      t.classList.remove("rrweb-paused"),
                    this.emitter.emit(Ie.Start)
                },
              },
              {
                key: "pause",
                value: function (e) {
                  var t, n
                  void 0 === e &&
                    this.service.state.matches("playing") &&
                    this.service.send({ type: "PAUSE" }),
                    "number" === typeof e &&
                      (this.play(e), this.service.send({ type: "PAUSE" })),
                    null ===
                      (n =
                        null === (t = this.iframe.contentDocument) ||
                        void 0 === t
                          ? void 0
                          : t.getElementsByTagName("html")[0]) ||
                      void 0 === n ||
                      n.classList.add("rrweb-paused"),
                    this.emitter.emit(Ie.Pause)
                },
              },
              {
                key: "resume",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0
                  this.warn(
                    "The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."
                  ),
                    this.play(e),
                    this.emitter.emit(Ie.Resume)
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.pause(),
                    this.config.root.removeChild(this.wrapper),
                    this.emitter.emit(Ie.Destroy)
                },
              },
              {
                key: "startLive",
                value: function (e) {
                  this.service.send({
                    type: "TO_LIVE",
                    payload: { baselineTime: e },
                  })
                },
              },
              {
                key: "addEvent",
                value: function (e) {
                  var t = this,
                    n = this.config.unpackFn ? this.config.unpackFn(e) : e
                  gr(n) && this.mouse.classList.add("touch-device"),
                    Promise.resolve().then(function () {
                      return t.service.send({
                        type: "ADD_EVENT",
                        payload: { event: n },
                      })
                    })
                },
              },
              {
                key: "enableInteract",
                value: function () {
                  this.iframe.setAttribute("scrolling", "auto"),
                    (this.iframe.style.pointerEvents = "auto")
                },
              },
              {
                key: "disableInteract",
                value: function () {
                  this.iframe.setAttribute("scrolling", "no"),
                    (this.iframe.style.pointerEvents = "none")
                },
              },
              {
                key: "resetCache",
                value: function () {
                  this.cache = mt()
                },
              },
              {
                key: "setupDom",
                value: function () {
                  ;(this.wrapper = document.createElement("div")),
                    this.wrapper.classList.add("replayer-wrapper"),
                    this.config.root.appendChild(this.wrapper),
                    (this.mouse = document.createElement("div")),
                    this.mouse.classList.add("replayer-mouse"),
                    this.wrapper.appendChild(this.mouse),
                    !1 !== this.config.mouseTail &&
                      ((this.mouseTail = document.createElement("canvas")),
                      this.mouseTail.classList.add("replayer-mouse-tail"),
                      (this.mouseTail.style.display = "inherit"),
                      this.wrapper.appendChild(this.mouseTail)),
                    (this.iframe = document.createElement("iframe"))
                  var e = ["allow-same-origin"]
                  this.config.UNSAFE_replayCanvas && e.push("allow-scripts"),
                    (this.iframe.style.display = "none"),
                    this.iframe.setAttribute("sandbox", e.join(" ")),
                    this.disableInteract(),
                    this.wrapper.appendChild(this.iframe),
                    this.iframe.contentWindow &&
                      this.iframe.contentDocument &&
                      (un(
                        this.iframe.contentWindow,
                        this.iframe.contentDocument
                      ),
                      Bn(this.iframe.contentWindow))
                },
              },
              {
                key: "rebuildFullSnapshot",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1]
                  if (!this.iframe.contentDocument)
                    return this.warn(
                      "Looks like your replayer has been destroyed."
                    )
                  Object.keys(this.legacy_missingNodeRetryMap).length &&
                    this.warn(
                      "Found unresolved missing node map",
                      this.legacy_missingNodeRetryMap
                    ),
                    (this.legacy_missingNodeRetryMap = {})
                  var r = [],
                    i = function (e, n) {
                      t.collectIframeAndAttachDocument(r, e)
                      var i,
                        o = ie(t.config.plugins || [])
                      try {
                        for (o.s(); !(i = o.n()).done; ) {
                          var a = i.value
                          a.onBuild && a.onBuild(e, { id: n, replayer: t })
                        }
                      } catch (s) {
                        o.e(s)
                      } finally {
                        o.f()
                      }
                    }
                  this.mirror.reset(),
                    bt(e.data.node, {
                      doc: this.iframe.contentDocument,
                      afterAppend: i,
                      cache: this.cache,
                      mirror: this.mirror,
                    }),
                    i(this.iframe.contentDocument, e.data.node.id)
                  for (
                    var o = function () {
                        var e = s[a],
                          n = e.mutationInQueue,
                          r = e.builtNode
                        t.attachDocumentToIframe(n, r),
                          (t.newDocumentQueue = t.newDocumentQueue.filter(
                            function (e) {
                              return e !== n
                            }
                          ))
                      },
                      a = 0,
                      s = r;
                    a < s.length;
                    a++
                  )
                    o()
                  var u = this.iframe.contentDocument,
                    c = u.documentElement,
                    l = u.head
                  this.insertStyleRules(c, l),
                    this.service.state.matches("playing") ||
                      this.iframe.contentDocument
                        .getElementsByTagName("html")[0]
                        .classList.add("rrweb-paused"),
                    this.emitter.emit(Ie.FullsnapshotRebuilded, e),
                    n || this.waitForStylesheetLoad(),
                    this.config.UNSAFE_replayCanvas && this.preloadAllImages()
                },
              },
              {
                key: "insertStyleRules",
                value: function (e, t) {
                  var n,
                    r,
                    i = ((r = this.config.blockClass),
                    [
                      ".".concat(r, " { background: currentColor }"),
                      "noscript { display: none !important; }",
                    ]).concat(this.config.insertStyleRules)
                  if (
                    (this.config.pauseAnimation &&
                      i.push(
                        "html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"
                      ),
                    this.usingVirtualDom)
                  ) {
                    var o = this.virtualDom.createElement("style")
                    this.virtualDom.mirror.add(
                      o,
                      an(o, this.virtualDom.unserializedId)
                    ),
                      e.insertBefore(o, t),
                      o.rules.push({
                        source: we.StyleSheetRule,
                        adds: i.map(function (e, t) {
                          return { rule: e, index: t }
                        }),
                      })
                  } else {
                    var a = document.createElement("style")
                    e.insertBefore(a, t)
                    for (var s = 0; s < i.length; s++)
                      null === (n = a.sheet) ||
                        void 0 === n ||
                        n.insertRule(i[s], s)
                  }
                },
              },
              {
                key: "attachDocumentToIframe",
                value: function (e, t) {
                  var n = this,
                    r = this.usingVirtualDom
                      ? this.virtualDom.mirror
                      : this.mirror,
                    i = [],
                    o = function (e, o) {
                      n.collectIframeAndAttachDocument(i, e)
                      var a = r.getMeta(e)
                      if (
                        (null === a || void 0 === a ? void 0 : a.type) ===
                          xe.Element &&
                        "HTML" ===
                          (null === a || void 0 === a
                            ? void 0
                            : a.tagName.toUpperCase())
                      ) {
                        var s = t.contentDocument,
                          u = s.documentElement,
                          c = s.head
                        n.insertStyleRules(u, c)
                      }
                      if (!n.usingVirtualDom) {
                        var l,
                          f = ie(n.config.plugins || [])
                        try {
                          for (f.s(); !(l = f.n()).done; ) {
                            var d = l.value
                            d.onBuild && d.onBuild(e, { id: o, replayer: n })
                          }
                        } catch (h) {
                          f.e(h)
                        } finally {
                          f.f()
                        }
                      }
                    }
                  yt(e.node, {
                    doc: t.contentDocument,
                    mirror: r,
                    hackCss: !0,
                    skipChild: !1,
                    afterAppend: o,
                    cache: this.cache,
                  }),
                    o(t.contentDocument, e.node.id)
                  for (
                    var a = function () {
                        var e = u[s],
                          t = e.mutationInQueue,
                          r = e.builtNode
                        n.attachDocumentToIframe(t, r),
                          (n.newDocumentQueue = n.newDocumentQueue.filter(
                            function (e) {
                              return e !== t
                            }
                          ))
                      },
                      s = 0,
                      u = i;
                    s < u.length;
                    s++
                  )
                    a()
                },
              },
              {
                key: "collectIframeAndAttachDocument",
                value: function (e, t) {
                  var n = this
                  if (Wn(t, this.mirror)) {
                    var r = this.newDocumentQueue.find(function (e) {
                      return e.parentId === n.mirror.getId(t)
                    })
                    r && e.push({ mutationInQueue: r, builtNode: t })
                  }
                },
              },
              {
                key: "waitForStylesheetLoad",
                value: function () {
                  var e,
                    t = this,
                    n =
                      null === (e = this.iframe.contentDocument) || void 0 === e
                        ? void 0
                        : e.head
                  if (n) {
                    var r,
                      i = new Set(),
                      o = this.service.state,
                      a = function () {
                        o = t.service.state
                      }
                    this.emitter.on(Ie.Start, a), this.emitter.on(Ie.Pause, a)
                    var s = function () {
                      t.emitter.off(Ie.Start, a), t.emitter.off(Ie.Pause, a)
                    }
                    n
                      .querySelectorAll('link[rel="stylesheet"]')
                      .forEach(function (e) {
                        e.sheet ||
                          (i.add(e),
                          e.addEventListener("load", function () {
                            i.delete(e),
                              0 === i.size &&
                                -1 !== r &&
                                (o.matches("playing") &&
                                  t.play(t.getCurrentTime()),
                                t.emitter.emit(Ie.LoadStylesheetEnd),
                                r && clearTimeout(r),
                                s())
                          }))
                      }),
                      i.size > 0 &&
                        (this.service.send({ type: "PAUSE" }),
                        this.emitter.emit(Ie.LoadStylesheetStart),
                        (r = setTimeout(function () {
                          o.matches("playing") && t.play(t.getCurrentTime()),
                            (r = -1),
                            s()
                        }, this.config.loadTimeout)))
                  }
                },
              },
              {
                key: "preloadAllImages",
                value: function () {
                  return Ne(
                    this,
                    void 0,
                    void 0,
                    oe().mark(function e() {
                      var t,
                        n,
                        r,
                        i,
                        o,
                        a = this
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.service.state,
                                  (t = function () {
                                    a.service.state
                                  }),
                                  this.emitter.on(Ie.Start, t),
                                  this.emitter.on(Ie.Pause, t),
                                  (n = []),
                                  (r = ie(this.service.state.context.events)),
                                  (e.prev = 6),
                                  (o = oe().mark(function e() {
                                    var t
                                    return oe().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            ;(t = i.value).type ===
                                              be.IncrementalSnapshot &&
                                              t.data.source ===
                                                we.CanvasMutation &&
                                              (n.push(
                                                a.deserializeAndPreloadCanvasEvents(
                                                  t.data,
                                                  t
                                                )
                                              ),
                                              ("commands" in t.data
                                                ? t.data.commands
                                                : [t.data]
                                              ).forEach(function (e) {
                                                a.preloadImages(e, t)
                                              }))
                                          case 2:
                                          case "end":
                                            return e.stop()
                                        }
                                    }, e)
                                  })),
                                  r.s()
                              case 9:
                                if ((i = r.n()).done) {
                                  e.next = 13
                                  break
                                }
                                return e.delegateYield(o(), "t0", 11)
                              case 11:
                                e.next = 9
                                break
                              case 13:
                                e.next = 18
                                break
                              case 15:
                                ;(e.prev = 15), (e.t1 = e.catch(6)), r.e(e.t1)
                              case 18:
                                return (e.prev = 18), r.f(), e.finish(18)
                              case 21:
                                return e.abrupt("return", Promise.all(n))
                              case 22:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[6, 15, 18, 21]]
                      )
                    })
                  )
                },
              },
              {
                key: "preloadImages",
                value: function (e, t) {
                  if (
                    "drawImage" === e.property &&
                    "string" === typeof e.args[0] &&
                    !this.imageMap.has(t)
                  ) {
                    var n = document.createElement("canvas"),
                      r = n.getContext("2d"),
                      i =
                        null === r || void 0 === r
                          ? void 0
                          : r.createImageData(n.width, n.height)
                    null === i || void 0 === i || i.data,
                      JSON.parse(e.args[0]),
                      null === r || void 0 === r || r.putImageData(i, 0, 0)
                  }
                },
              },
              {
                key: "deserializeAndPreloadCanvasEvents",
                value: function (e, t) {
                  return Ne(
                    this,
                    void 0,
                    void 0,
                    oe().mark(function n() {
                      var r,
                        i,
                        o,
                        a = this
                      return oe().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (this.canvasEventMap.has(t)) {
                                  n.next = 13
                                  break
                                }
                                if (
                                  ((r = { isUnchanged: !0 }),
                                  !("commands" in e))
                                ) {
                                  n.next = 9
                                  break
                                }
                                return (
                                  (n.next = 5),
                                  Promise.all(
                                    e.commands.map(function (e) {
                                      return Ne(
                                        a,
                                        void 0,
                                        void 0,
                                        oe().mark(function t() {
                                          var n
                                          return oe().wrap(
                                            function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.next = 2),
                                                      Promise.all(
                                                        e.args.map(
                                                          or(
                                                            this.imageMap,
                                                            null,
                                                            r
                                                          )
                                                        )
                                                      )
                                                    )
                                                  case 2:
                                                    return (
                                                      (n = t.sent),
                                                      t.abrupt(
                                                        "return",
                                                        Object.assign(
                                                          Object.assign({}, e),
                                                          { args: n }
                                                        )
                                                      )
                                                    )
                                                  case 4:
                                                  case "end":
                                                    return t.stop()
                                                }
                                            },
                                            t,
                                            this
                                          )
                                        })
                                      )
                                    })
                                  )
                                )
                              case 5:
                                ;(i = n.sent),
                                  !1 === r.isUnchanged &&
                                    this.canvasEventMap.set(
                                      t,
                                      Object.assign(Object.assign({}, e), {
                                        commands: i,
                                      })
                                    ),
                                  (n.next = 13)
                                break
                              case 9:
                                return (
                                  (n.next = 11),
                                  Promise.all(
                                    e.args.map(or(this.imageMap, null, r))
                                  )
                                )
                              case 11:
                                ;(o = n.sent),
                                  !1 === r.isUnchanged &&
                                    this.canvasEventMap.set(
                                      t,
                                      Object.assign(Object.assign({}, e), {
                                        args: o,
                                      })
                                    )
                              case 13:
                              case "end":
                                return n.stop()
                            }
                        },
                        n,
                        this
                      )
                    })
                  )
                },
              },
              {
                key: "applyIncremental",
                value: function (e, t) {
                  var n,
                    r,
                    i,
                    o = this,
                    a = e.data
                  switch (a.source) {
                    case we.Mutation:
                      try {
                        this.applyMutation(a, t)
                      } catch (y) {
                        this.warn(
                          "Exception in mutation ".concat(y.message || y),
                          a
                        )
                      }
                      break
                    case we.Drag:
                    case we.TouchMove:
                    case we.MouseMove:
                      if (t) {
                        var s = a.positions[a.positions.length - 1]
                        this.mousePos = {
                          x: s.x,
                          y: s.y,
                          id: s.id,
                          debugData: a,
                        }
                      } else
                        a.positions.forEach(function (n) {
                          var r = {
                            doAction: function () {
                              o.moveAndHover(n.x, n.y, n.id, t, a)
                            },
                            delay:
                              n.timeOffset +
                              e.timestamp -
                              o.service.state.context.baselineTime,
                          }
                          o.timer.addAction(r)
                        }),
                          this.timer.addAction({
                            doAction: function () {},
                            delay:
                              e.delay -
                              (null === (n = a.positions[0]) || void 0 === n
                                ? void 0
                                : n.timeOffset),
                          })
                      break
                    case we.MouseInteraction:
                      if (-1 === a.id || t) break
                      var u = new Event(Se[a.type].toLowerCase()),
                        c = this.mirror.getNode(a.id)
                      if (!c) return this.debugNodeNotFound(a, a.id)
                      this.emitter.emit(Ie.MouseInteraction, {
                        type: a.type,
                        target: c,
                      })
                      var l = this.config.triggerFocus
                      switch (a.type) {
                        case Se.Blur:
                          "blur" in c && c.blur()
                          break
                        case Se.Focus:
                          l && c.focus && c.focus({ preventScroll: !0 })
                          break
                        case Se.Click:
                        case Se.TouchStart:
                        case Se.TouchEnd:
                          t
                            ? (a.type === Se.TouchStart
                                ? (this.touchActive = !0)
                                : a.type === Se.TouchEnd &&
                                  (this.touchActive = !1),
                              (this.mousePos = {
                                x: a.x,
                                y: a.y,
                                id: a.id,
                                debugData: a,
                              }))
                            : (a.type === Se.TouchStart &&
                                (this.tailPositions.length = 0),
                              this.moveAndHover(a.x, a.y, a.id, t, a),
                              a.type === Se.Click
                                ? (this.mouse.classList.remove("active"),
                                  this.mouse.offsetWidth,
                                  this.mouse.classList.add("active"))
                                : a.type === Se.TouchStart
                                ? (this.mouse.offsetWidth,
                                  this.mouse.classList.add("touch-active"))
                                : a.type === Se.TouchEnd &&
                                  this.mouse.classList.remove("touch-active"))
                          break
                        case Se.TouchCancel:
                          t
                            ? (this.touchActive = !1)
                            : this.mouse.classList.remove("touch-active")
                          break
                        default:
                          c.dispatchEvent(u)
                      }
                      break
                    case we.Scroll:
                      if (-1 === a.id) break
                      if (this.usingVirtualDom) {
                        var f = this.virtualDom.mirror.getNode(a.id)
                        if (!f) return this.debugNodeNotFound(a, a.id)
                        f.scrollData = a
                        break
                      }
                      this.applyScroll(a, t)
                      break
                    case we.ViewportResize:
                      this.emitter.emit(Ie.Resize, {
                        width: a.width,
                        height: a.height,
                      })
                      break
                    case we.Input:
                      if (-1 === a.id) break
                      if (this.usingVirtualDom) {
                        var d = this.virtualDom.mirror.getNode(a.id)
                        if (!d) return this.debugNodeNotFound(a, a.id)
                        d.inputData = a
                        break
                      }
                      this.applyInput(a)
                      break
                    case we.MediaInteraction:
                      var h = this.usingVirtualDom
                        ? this.virtualDom.mirror.getNode(a.id)
                        : this.mirror.getNode(a.id)
                      if (!h) return this.debugNodeNotFound(a, a.id)
                      var p = h
                      try {
                        void 0 !== a.currentTime &&
                          (p.currentTime = a.currentTime),
                          void 0 !== a.volume && (p.volume = a.volume),
                          void 0 !== a.muted && (p.muted = a.muted),
                          1 === a.type && p.pause(),
                          0 === a.type && p.play(),
                          4 === a.type && (p.playbackRate = a.playbackRate)
                      } catch (y) {
                        this.warn(
                          "Failed to replay media interactions: ".concat(
                            y.message || y
                          )
                        )
                      }
                      break
                    case we.StyleSheetRule:
                    case we.StyleDeclaration:
                      this.usingVirtualDom
                        ? a.styleId
                          ? this.constructedStyleMutations.push(a)
                          : a.id &&
                            (null ===
                              (r = this.virtualDom.mirror.getNode(a.id)) ||
                              void 0 === r ||
                              r.rules.push(a))
                        : this.applyStyleSheetMutation(a)
                      break
                    case we.CanvasMutation:
                      if (!this.config.UNSAFE_replayCanvas) return
                      if (this.usingVirtualDom) {
                        var v = this.virtualDom.mirror.getNode(a.id)
                        if (!v) return this.debugNodeNotFound(a, a.id)
                        v.canvasMutations.push({ event: e, mutation: a })
                      } else {
                        var m = this.mirror.getNode(a.id)
                        if (!m) return this.debugNodeNotFound(a, a.id)
                        fr({
                          event: e,
                          mutation: a,
                          target: m,
                          imageMap: this.imageMap,
                          canvasEventMap: this.canvasEventMap,
                          errorHandler: this.warnCanvasMutationFailed.bind(
                            this
                          ),
                        })
                      }
                      break
                    case we.Font:
                      try {
                        var g = new FontFace(
                          a.family,
                          a.buffer
                            ? new Uint8Array(JSON.parse(a.fontSource))
                            : a.fontSource,
                          a.descriptors
                        )
                        null === (i = this.iframe.contentDocument) ||
                          void 0 === i ||
                          i.fonts.add(g)
                      } catch (y) {
                        this.warn(y)
                      }
                      break
                    case we.Selection:
                      if (t) {
                        this.lastSelectionData = a
                        break
                      }
                      this.applySelection(a)
                      break
                    case we.AdoptedStyleSheet:
                      this.usingVirtualDom
                        ? this.adoptedStyleSheets.push(a)
                        : this.applyAdoptedStyleSheet(a)
                  }
                },
              },
              {
                key: "applyMutation",
                value: function (e, t) {
                  var n = this
                  if (
                    this.config.useVirtualDom &&
                    !this.usingVirtualDom &&
                    t &&
                    ((this.usingVirtualDom = !0),
                    rn(
                      this.iframe.contentDocument,
                      this.mirror,
                      this.virtualDom
                    ),
                    Object.keys(this.legacy_missingNodeRetryMap).length)
                  )
                    for (var r in this.legacy_missingNodeRetryMap)
                      try {
                        var i = this.legacy_missingNodeRetryMap[r],
                          o = nn(i.node, this.virtualDom, this.mirror)
                        o && (i.node = o)
                      } catch (v) {
                        this.warn(v)
                      }
                  var a = this.usingVirtualDom
                    ? this.virtualDom.mirror
                    : this.mirror
                  e.removes.forEach(function (t) {
                    var r,
                      i = a.getNode(t.id)
                    if (!i) {
                      if (
                        e.removes.find(function (e) {
                          return e.id === t.parentId
                        })
                      )
                        return
                      return n.warnNodeNotFound(e, t.id)
                    }
                    var o = a.getNode(t.parentId)
                    if (!o) return n.warnNodeNotFound(e, t.parentId)
                    if (
                      (t.isShadow && zn(o) && (o = o.shadowRoot),
                      a.removeNodeFromMap(i),
                      o)
                    )
                      try {
                        o.removeChild(i),
                          n.usingVirtualDom &&
                            "#text" === i.nodeName &&
                            "STYLE" === o.nodeName &&
                            (null === (r = o.rules) || void 0 === r
                              ? void 0
                              : r.length) > 0 &&
                            (o.rules = [])
                      } catch (v) {
                        if (!(v instanceof DOMException)) throw v
                        n.warn(
                          "parent could not remove child in mutation",
                          o,
                          i,
                          e
                        )
                      }
                  })
                  var s = Object.assign({}, this.legacy_missingNodeRetryMap),
                    u = [],
                    c = function (e) {
                      var t, r
                      if (!n.iframe.contentDocument)
                        return n.warn(
                          "Looks like your replayer has been destroyed."
                        )
                      var i = a.getNode(e.parentId)
                      if (!i)
                        return e.node.type === xe.Document
                          ? n.newDocumentQueue.push(e)
                          : u.push(e)
                      e.node.isShadow &&
                        (zn(i) || i.attachShadow({ mode: "open" }),
                        (i = i.shadowRoot))
                      var o = null,
                        c = null
                      if (
                        (e.previousId && (o = a.getNode(e.previousId)),
                        e.nextId && (c = a.getNode(e.nextId)),
                        (function (e) {
                          var t = null
                          return (
                            e.nextId && (t = a.getNode(e.nextId)),
                            null !== e.nextId &&
                              void 0 !== e.nextId &&
                              -1 !== e.nextId &&
                              !t
                          )
                        })(e))
                      )
                        return u.push(e)
                      if (!e.node.rootId || a.getNode(e.node.rootId)) {
                        var l = e.node.rootId
                          ? a.getNode(e.node.rootId)
                          : n.usingVirtualDom
                          ? n.virtualDom
                          : n.iframe.contentDocument
                        if (Wn(i, a)) n.attachDocumentToIframe(e, i)
                        else {
                          var f = function (e, t) {
                              if (!n.usingVirtualDom) {
                                var r,
                                  i = ie(n.config.plugins || [])
                                try {
                                  for (i.s(); !(r = i.n()).done; ) {
                                    var o = r.value
                                    o.onBuild &&
                                      o.onBuild(e, { id: t, replayer: n })
                                  }
                                } catch (a) {
                                  i.e(a)
                                } finally {
                                  i.f()
                                }
                              }
                            },
                            d = yt(e.node, {
                              doc: l,
                              mirror: a,
                              skipChild: !0,
                              hackCss: !0,
                              cache: n.cache,
                              afterAppend: f,
                            })
                          if (-1 !== e.previousId && -1 !== e.nextId) {
                            var h = a.getMeta(i)
                            if (
                              h &&
                              h.type === xe.Element &&
                              "textarea" === h.tagName &&
                              e.node.type === xe.Text
                            ) {
                              var p,
                                v = ie(
                                  Array.isArray(i.childNodes)
                                    ? i.childNodes
                                    : Array.from(i.childNodes)
                                )
                              try {
                                for (v.s(); !(p = v.n()).done; ) {
                                  var m = p.value
                                  m.nodeType === i.TEXT_NODE && i.removeChild(m)
                                }
                              } catch (w) {
                                v.e(w)
                              } finally {
                                v.f()
                              }
                            } else if (
                              (null === h || void 0 === h ? void 0 : h.type) ===
                              xe.Document
                            ) {
                              var g = i
                              e.node.type === xe.DocumentType &&
                                (null === (t = g.childNodes[0]) || void 0 === t
                                  ? void 0
                                  : t.nodeType) === Node.DOCUMENT_TYPE_NODE &&
                                g.removeChild(g.childNodes[0]),
                                "HTML" === d.nodeName &&
                                  g.documentElement &&
                                  g.removeChild(g.documentElement)
                            }
                            if (
                              (o && o.nextSibling && o.nextSibling.parentNode
                                ? i.insertBefore(d, o.nextSibling)
                                : c && c.parentNode
                                ? i.contains(c)
                                  ? i.insertBefore(d, c)
                                  : i.insertBefore(d, null)
                                : i.appendChild(d),
                              f(d, e.node.id),
                              n.usingVirtualDom &&
                                "#text" === d.nodeName &&
                                "STYLE" === i.nodeName &&
                                (null === (r = i.rules) || void 0 === r
                                  ? void 0
                                  : r.length) > 0 &&
                                (i.rules = []),
                              Wn(d, n.mirror))
                            ) {
                              var y = n.mirror.getId(d),
                                b = n.newDocumentQueue.find(function (e) {
                                  return e.parentId === y
                                })
                              b &&
                                (n.attachDocumentToIframe(b, d),
                                (n.newDocumentQueue = n.newDocumentQueue.filter(
                                  function (e) {
                                    return e !== b
                                  }
                                )))
                            }
                            ;(e.previousId || e.nextId) &&
                              n.legacy_resolveMissingNode(s, i, d, e)
                          } else s[e.node.id] = { node: d, mutation: e }
                        }
                      }
                    }
                  e.adds.forEach(function (e) {
                    c(e)
                  })
                  for (var l = Date.now(); u.length; ) {
                    var f = jn(u)
                    if (((u.length = 0), Date.now() - l > 500)) {
                      this.warn(
                        "Timeout in the loop, please check the resolve tree data:",
                        f
                      )
                      break
                    }
                    var d,
                      h = ie(f)
                    try {
                      for (h.s(); !(d = h.n()).done; ) {
                        var p = d.value
                        a.getNode(p.value.parentId)
                          ? Pn(p, function (e) {
                              c(e)
                            })
                          : this.debug(
                              "Drop resolve tree since there is no parent for the root node.",
                              p
                            )
                      }
                    } catch (m) {
                      h.e(m)
                    } finally {
                      h.f()
                    }
                  }
                  Object.keys(s).length &&
                    Object.assign(this.legacy_missingNodeRetryMap, s),
                    (function (e) {
                      for (var t = new Set(), n = [], r = e.length; r--; ) {
                        var i = e[r]
                        t.has(i.id) || (n.push(i), t.add(i.id))
                      }
                      return n
                    })(e.texts).forEach(function (t) {
                      var r,
                        i = a.getNode(t.id)
                      if (!i) {
                        if (
                          e.removes.find(function (e) {
                            return e.id === t.id
                          })
                        )
                          return
                        return n.warnNodeNotFound(e, t.id)
                      }
                      if (((i.textContent = t.value), n.usingVirtualDom)) {
                        var o = i.parentNode
                        ;(null ===
                          (r = null === o || void 0 === o ? void 0 : o.rules) ||
                        void 0 === r
                          ? void 0
                          : r.length) > 0 && (o.rules = [])
                      }
                    }),
                    e.attributes.forEach(function (t) {
                      var r = a.getNode(t.id)
                      if (!r) {
                        if (
                          e.removes.find(function (e) {
                            return e.id === t.id
                          })
                        )
                          return
                        return n.warnNodeNotFound(e, t.id)
                      }
                      for (var i in t.attributes)
                        if ("string" === typeof i) {
                          var o = t.attributes[i]
                          if (null === o) r.removeAttribute(i)
                          else if ("string" === typeof o)
                            try {
                              if (
                                "_cssText" === i &&
                                ("LINK" === r.nodeName ||
                                  "STYLE" === r.nodeName)
                              )
                                try {
                                  var s = a.getMeta(r)
                                  Object.assign(s.attributes, t.attributes)
                                  var u = yt(s, {
                                      doc: r.ownerDocument,
                                      mirror: a,
                                      skipChild: !0,
                                      hackCss: !0,
                                      cache: n.cache,
                                    }),
                                    c = r.nextSibling,
                                    l = r.parentNode
                                  if (u && l) {
                                    l.removeChild(r),
                                      l.insertBefore(u, c),
                                      a.replace(t.id, u)
                                    break
                                  }
                                } catch (hn) {}
                              r.setAttribute(i, o)
                            } catch (v) {
                              n.warn(
                                "An error occurred may due to the checkout feature.",
                                v
                              )
                            }
                          else if ("style" === i) {
                            var f = o,
                              d = r
                            for (var h in f)
                              if (!1 === f[h]) d.style.removeProperty(h)
                              else if (f[h] instanceof Array) {
                                var p = f[h]
                                d.style.setProperty(h, p[0], p[1])
                              } else {
                                var m = f[h]
                                d.style.setProperty(h, m)
                              }
                          }
                        }
                    })
                },
              },
              {
                key: "applyScroll",
                value: function (e, t) {
                  var n,
                    r,
                    i = this.mirror.getNode(e.id)
                  if (!i) return this.debugNodeNotFound(e, e.id)
                  var o = this.mirror.getMeta(i)
                  if (i === this.iframe.contentDocument)
                    null === (n = this.iframe.contentWindow) ||
                      void 0 === n ||
                      n.scrollTo({
                        top: e.y,
                        left: e.x,
                        behavior: t ? "auto" : "smooth",
                      })
                  else if (
                    (null === o || void 0 === o ? void 0 : o.type) ===
                    xe.Document
                  )
                    null === (r = i.defaultView) ||
                      void 0 === r ||
                      r.scrollTo({
                        top: e.y,
                        left: e.x,
                        behavior: t ? "auto" : "smooth",
                      })
                  else
                    try {
                      i.scrollTo({
                        top: e.y,
                        left: e.x,
                        behavior: t ? "auto" : "smooth",
                      })
                    } catch (a) {}
                },
              },
              {
                key: "applyInput",
                value: function (e) {
                  var t = this.mirror.getNode(e.id)
                  if (!t) return this.debugNodeNotFound(e, e.id)
                  try {
                    ;(t.checked = e.isChecked), (t.value = e.text)
                  } catch (n) {}
                },
              },
              {
                key: "applySelection",
                value: function (e) {
                  var t = this
                  try {
                    var n = new Set(),
                      r = e.ranges.map(function (e) {
                        var r = e.start,
                          i = e.startOffset,
                          o = e.end,
                          a = e.endOffset,
                          s = t.mirror.getNode(r),
                          u = t.mirror.getNode(o)
                        if (s && u) {
                          var c = new Range()
                          c.setStart(s, i), c.setEnd(u, a)
                          var l = s.ownerDocument,
                            f =
                              null === l || void 0 === l
                                ? void 0
                                : l.getSelection()
                          return f && n.add(f), { range: c, selection: f }
                        }
                      })
                    n.forEach(function (e) {
                      return e.removeAllRanges()
                    }),
                      r.forEach(function (e) {
                        var t
                        return (
                          e &&
                          (null === (t = e.selection) || void 0 === t
                            ? void 0
                            : t.addRange(e.range))
                        )
                      })
                  } catch (i) {}
                },
              },
              {
                key: "applyStyleSheetMutation",
                value: function (e) {
                  var t,
                    n = null
                  e.styleId
                    ? (n = this.styleMirror.getStyle(e.styleId))
                    : e.id &&
                      (n =
                        (null === (t = this.mirror.getNode(e.id)) ||
                        void 0 === t
                          ? void 0
                          : t.sheet) || null),
                    n &&
                      (e.source === we.StyleSheetRule
                        ? this.applyStyleSheetRule(e, n)
                        : e.source === we.StyleDeclaration &&
                          this.applyStyleDeclaration(e, n))
                },
              },
              {
                key: "applyStyleSheetRule",
                value: function (e, t) {
                  var n, r, i, o
                  if (
                    (null === (n = e.adds) ||
                      void 0 === n ||
                      n.forEach(function (e) {
                        var n = e.rule,
                          r = e.index
                        try {
                          if (Array.isArray(r)) {
                            var i = qn(r),
                              o = i.positions,
                              a = i.index
                            Zn(t.cssRules, o).insertRule(n, a)
                          } else {
                            var s =
                              void 0 === r
                                ? void 0
                                : Math.min(r, t.cssRules.length)
                            null === t || void 0 === t || t.insertRule(n, s)
                          }
                        } catch (hn) {}
                      }),
                    null === (r = e.removes) ||
                      void 0 === r ||
                      r.forEach(function (e) {
                        var n = e.index
                        try {
                          if (Array.isArray(n)) {
                            var r = qn(n),
                              i = r.positions,
                              o = r.index
                            Zn(t.cssRules, i).deleteRule(o || 0)
                          } else null === t || void 0 === t || t.deleteRule(n)
                        } catch (hn) {}
                      }),
                    e.replace)
                  )
                    try {
                      null === (i = t.replace) ||
                        void 0 === i ||
                        i.call(t, e.replace)
                    } catch (hn) {}
                  if (e.replaceSync)
                    try {
                      null === (o = t.replaceSync) ||
                        void 0 === o ||
                        o.call(t, e.replaceSync)
                    } catch (hn) {}
                },
              },
              {
                key: "applyStyleDeclaration",
                value: function (e, t) {
                  e.set &&
                    Zn(t.rules, e.index).style.setProperty(
                      e.set.property,
                      e.set.value,
                      e.set.priority
                    )
                  e.remove &&
                    Zn(t.rules, e.index).style.removeProperty(e.remove.property)
                },
              },
              {
                key: "applyAdoptedStyleSheet",
                value: function (e) {
                  var t,
                    n = this,
                    r = this.mirror.getNode(e.id)
                  if (r) {
                    null === (t = e.styles) ||
                      void 0 === t ||
                      t.forEach(function (e) {
                        var t,
                          i = null,
                          o = null
                        if (
                          (zn(r)
                            ? (o =
                                (null === (t = r.ownerDocument) || void 0 === t
                                  ? void 0
                                  : t.defaultView) || null)
                            : "#document" === r.nodeName && (o = r.defaultView),
                          o)
                        )
                          try {
                            ;(i = new o.CSSStyleSheet()),
                              n.styleMirror.add(i, e.styleId),
                              n.applyStyleSheetRule(
                                { source: we.StyleSheetRule, adds: e.rules },
                                i
                              )
                          } catch (hn) {}
                      })
                    var i = 0
                    !(function e(t, r) {
                      var o = r
                        .map(function (e) {
                          return n.styleMirror.getStyle(e)
                        })
                        .filter(function (e) {
                          return null !== e
                        })
                      zn(t)
                        ? (t.shadowRoot.adoptedStyleSheets = o)
                        : "#document" === t.nodeName &&
                          (t.adoptedStyleSheets = o),
                        o.length !== r.length &&
                          i < 10 &&
                          (setTimeout(function () {
                            return e(t, r)
                          }, 0 + 100 * i),
                          i++)
                    })(r, e.styleIds)
                  }
                },
              },
              {
                key: "legacy_resolveMissingNode",
                value: function (e, t, n, r) {
                  var i = r.previousId,
                    o = r.nextId,
                    a = i && e[i],
                    s = o && e[o]
                  if (a) {
                    var u = a.node,
                      c = a.mutation
                    t.insertBefore(u, n),
                      delete e[c.node.id],
                      delete this.legacy_missingNodeRetryMap[c.node.id],
                      (c.previousId || c.nextId) &&
                        this.legacy_resolveMissingNode(e, t, u, c)
                  }
                  if (s) {
                    var l = s.node,
                      f = s.mutation
                    t.insertBefore(l, n.nextSibling),
                      delete e[f.node.id],
                      delete this.legacy_missingNodeRetryMap[f.node.id],
                      (f.previousId || f.nextId) &&
                        this.legacy_resolveMissingNode(e, t, l, f)
                  }
                },
              },
              {
                key: "moveAndHover",
                value: function (e, t, n, r, i) {
                  var o = this.mirror.getNode(n)
                  if (!o) return this.debugNodeNotFound(i, n)
                  var a = Gn(o, this.iframe),
                    s = e * a.absoluteScale + a.x,
                    u = t * a.absoluteScale + a.y
                  ;(this.mouse.style.left = "".concat(s, "px")),
                    (this.mouse.style.top = "".concat(u, "px")),
                    r || this.drawMouseTail({ x: s, y: u }),
                    this.hoverElements(o)
                },
              },
              {
                key: "drawMouseTail",
                value: function (e) {
                  var t = this
                  if (this.mouseTail) {
                    var n =
                        !0 === this.config.mouseTail
                          ? mr
                          : Object.assign({}, mr, this.config.mouseTail),
                      r = n.lineCap,
                      i = n.lineWidth,
                      o = n.strokeStyle,
                      a = n.duration,
                      s = function () {
                        if (t.mouseTail) {
                          var e = t.mouseTail.getContext("2d")
                          e &&
                            t.tailPositions.length &&
                            (e.clearRect(
                              0,
                              0,
                              t.mouseTail.width,
                              t.mouseTail.height
                            ),
                            e.beginPath(),
                            (e.lineWidth = i),
                            (e.lineCap = r),
                            (e.strokeStyle = o),
                            e.moveTo(
                              t.tailPositions[0].x,
                              t.tailPositions[0].y
                            ),
                            t.tailPositions.forEach(function (t) {
                              return e.lineTo(t.x, t.y)
                            }),
                            e.stroke())
                        }
                      }
                    this.tailPositions.push(e),
                      s(),
                      setTimeout(function () {
                        ;(t.tailPositions = t.tailPositions.filter(function (
                          t
                        ) {
                          return t !== e
                        })),
                          s()
                      }, a / this.speedService.state.context.timer.speed)
                  }
                },
              },
              {
                key: "hoverElements",
                value: function (e) {
                  var t
                  null ===
                    (t =
                      this.lastHoveredRootNode ||
                      this.iframe.contentDocument) ||
                    void 0 === t ||
                    t.querySelectorAll(".\\:hover").forEach(function (e) {
                      e.classList.remove(":hover")
                    }),
                    (this.lastHoveredRootNode = e.getRootNode())
                  for (var n = e; n; )
                    n.classList && n.classList.add(":hover"),
                      (n = n.parentElement)
                },
              },
              {
                key: "isUserInteraction",
                value: function (e) {
                  return (
                    e.type === be.IncrementalSnapshot &&
                    e.data.source > we.Mutation &&
                    e.data.source <= we.Input
                  )
                },
              },
              {
                key: "backToNormal",
                value: function () {
                  ;(this.nextUserInteractionEvent = null),
                    this.speedService.state.matches("normal") ||
                      (this.speedService.send({ type: "BACK_TO_NORMAL" }),
                      this.emitter.emit(Ie.SkipEnd, {
                        speed: this.speedService.state.context.normalSpeed,
                      }))
                },
              },
              {
                key: "warnNodeNotFound",
                value: function (e, t) {
                  this.warn("Node with id '".concat(t, "' not found. "), e)
                },
              },
              {
                key: "warnCanvasMutationFailed",
                value: function (e, t) {
                  this.warn(
                    "Has error on canvas update",
                    t,
                    "canvas mutation:",
                    e
                  )
                },
              },
              {
                key: "debugNodeNotFound",
                value: function (e, t) {
                  this.debug("Node with id '".concat(t, "' not found. "), e)
                },
              },
              {
                key: "warn",
                value: function () {
                  var e
                  if (this.config.showWarning) {
                    for (
                      var t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r]
                    ;(e = this.config.logger).warn.apply(e, [vr].concat(n))
                  }
                },
              },
              {
                key: "debug",
                value: function () {
                  var e
                  if (this.config.showDebug) {
                    for (
                      var t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r]
                    ;(e = this.config.logger).log.apply(e, [vr].concat(n))
                  }
                },
              },
            ]),
            e
          )
        })(),
        Cr = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            a(this, e),
              (this.events = []),
              (this.replayer = void 0),
              (this.resolve = void 0),
              (this.config = { enableInteract: !1 }),
              (this.useTimestampCompression = !0),
              (this.addEvent = (function () {
                var e = se(
                  oe().mark(function e(n) {
                    var r
                    return oe().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.events.push(n),
                              (r = new Promise(function (e) {
                                return (t.resolve = e)
                              })),
                              t.replayer.addEvent(
                                t.useTimestampCompression
                                  ? H(H({}, n), {}, { timestamp: Date.now() })
                                  : n
                              ),
                              e.abrupt("return", r)
                            )
                          case 4:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()),
              (this.stop = function () {
                t.replayer.destroy()
              }),
              (this.getNodeById = function (e) {
                return t.replayer.getMirror().getNode(e)
              }),
              (this.getMeta = function (e) {
                return t.replayer.getMirror().getMeta(e)
              }),
              (this.config = H(H({}, this.config), n))
          }
          return (
            l(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n = e.firstEventTimestamp,
                    r = e.speed,
                    i = void 0 === r ? 8 : r,
                    o = e.useTimestampCompression,
                    a = void 0 === o || o
                  ;(this.replayer = new Sr([], {
                    mouseTail: !1,
                    pauseAnimation: !1,
                    speed: i,
                    triggerFocus: !0,
                    UNSAFE_replayCanvas: !0,
                    liveMode: !0,
                    showDebug: !1,
                    skipInactive: !0,
                  })),
                    this.config.enableInteract
                      ? this.replayer.enableInteract()
                      : this.replayer.disableInteract(),
                    (this.useTimestampCompression = a),
                    this.replayer.startLive(
                      this.useTimestampCompression ? Date.now() : n
                    ),
                    this.replayer.on("event-cast", function (e) {
                      var n = t.resolve
                      ;(t.resolve = void 0), n()
                    })
                },
              },
            ]),
            e
          )
        })(),
        Ir = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            a(this, e),
              (this.eventProcessor = void 0),
              (this.sessionReplayer = void 0),
              (this.elementSelector = void 0),
              (this.eventHandlers = void 0),
              (this.sessionReplayer = new Cr(n)),
              (this.elementSelector = t),
              (this.eventProcessor = new Te({ eventHandlers: new ke() }))
          }
          return (
            l(e, [
              {
                key: "setEventHandlers",
                value: function (e) {
                  ;(this.eventHandlers = e),
                    this.eventProcessor.setHandlers(this.eventHandlers)
                },
              },
              {
                key: "start",
                value: function (e) {
                  this.sessionReplayer.start(e)
                },
              },
              {
                key: "handleEvent",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.sessionReplayer.addEvent(t)
                                )
                              case 2:
                                return (
                                  (e.next = 4),
                                  this.eventProcessor.processEvent(t)
                                )
                              case 4:
                                return e.abrupt("return", e.sent)
                              case 5:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "stop",
                value: function () {
                  this.sessionReplayer.stop()
                },
              },
            ]),
            e
          )
        })(),
        kr = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n() {
            var e
            return (
              a(this, n),
              ((e = t.call(this, new ye(), {
                enableInteract: !0,
              })).pageIdentifiers = void 0),
              e.setEventHandlers(
                new Me({
                  sessionMirror: e.sessionReplayer,
                  elementSelector: e.elementSelector,
                })
              ),
              e
            )
          }
          return (
            l(n, [
              {
                key: "setConfiguration",
                value: function (e) {
                  var t = e.enableRecordingAvailableInteractableElements
                  this.eventHandlers.setConfiguration({
                    enableRecordingAvailableInteractableElements: t,
                  })
                },
              },
              {
                key: "setEvents",
                value: function (e) {
                  this.eventHandlers.setEvents(e)
                },
              },
              {
                key: "setPageIdentifiers",
                value: function (e) {
                  this.pageIdentifiers = e
                },
              },
              {
                key: "handleEvent",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var r
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  ce(ue(n.prototype), "handleEvent", this).call(
                                    this,
                                    t
                                  )
                                )
                              case 2:
                                if (!(r = e.sent)) {
                                  e.next = 7
                                  break
                                }
                                return (e.next = 6), this.resolvePageId()
                              case 6:
                                r.pageIdFromCustomIdentifiers = e.sent
                              case 7:
                                return e.abrupt("return", r)
                              case 8:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "resolvePageId",
                value: (function () {
                  var e = se(
                    oe().mark(function e() {
                      var t, n, r, i, o
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.pageIdentifiers) {
                                  e.next = 2
                                  break
                                }
                                return e.abrupt("return", void 0)
                              case 2:
                                e.t0 = oe().keys(this.pageIdentifiers)
                              case 3:
                                if ((e.t1 = e.t0()).done) {
                                  e.next = 30
                                  break
                                }
                                ;(t = e.t1.value),
                                  (n = this.pageIdentifiers[t]),
                                  (r = ie(n)),
                                  (e.prev = 7),
                                  r.s()
                              case 9:
                                if ((i = r.n()).done) {
                                  e.next = 20
                                  break
                                }
                                if ((o = i.value)) {
                                  e.next = 13
                                  break
                                }
                                return e.abrupt("continue", 18)
                              case 13:
                                return (
                                  (e.next = 15),
                                  this.elementSelector.selector(o)
                                )
                              case 15:
                                if (!e.sent) {
                                  e.next = 18
                                  break
                                }
                                return e.abrupt("return", t)
                              case 18:
                                e.next = 9
                                break
                              case 20:
                                e.next = 25
                                break
                              case 22:
                                ;(e.prev = 22), (e.t2 = e.catch(7)), r.e(e.t2)
                              case 25:
                                return (e.prev = 25), r.f(), e.finish(25)
                              case 28:
                                e.next = 3
                                break
                              case 30:
                                return e.abrupt("return", void 0)
                              case 31:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[7, 22, 25, 28]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
            ]),
            n
          )
        })(Ir)
      !(function (e) {
        ;(e[(e.Element = 0)] = "Element"),
          (e[(e.VisibleElement = 1)] = "VisibleElement"),
          (e[(e.AtPointElement = 2)] = "AtPointElement")
      })(yr || (yr = {})),
        (function (e) {
          ;(e.ElementText = "element_text"),
            (e.PageUrlChange = "page_url_change")
        })(br || (br = {})),
        (function (e) {
          ;(e[(e.Document = 0)] = "Document"),
            (e[(e.DocumentType = 1)] = "DocumentType"),
            (e[(e.Element = 2)] = "Element"),
            (e[(e.Text = 3)] = "Text"),
            (e[(e.CDATA = 4)] = "CDATA"),
            (e[(e.Comment = 5)] = "Comment")
        })(wr || (wr = {}))
      !(function () {
        function e() {
          ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
        }
        ;(e.prototype.getId = function (e) {
          var t
          if (!e) return -1
          var n = null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id
          return null !== n && void 0 !== n ? n : -1
        }),
          (e.prototype.getNode = function (e) {
            return this.idNodeMap.get(e) || null
          }),
          (e.prototype.getIds = function () {
            return Array.from(this.idNodeMap.keys())
          }),
          (e.prototype.getMeta = function (e) {
            return this.nodeMetaMap.get(e) || null
          }),
          (e.prototype.removeNodeFromMap = function (e) {
            var t = this,
              n = this.getId(e)
            this.idNodeMap.delete(n),
              e.childNodes &&
                e.childNodes.forEach(function (e) {
                  return t.removeNodeFromMap(e)
                })
          }),
          (e.prototype.has = function (e) {
            return this.idNodeMap.has(e)
          }),
          (e.prototype.hasNode = function (e) {
            return this.nodeMetaMap.has(e)
          }),
          (e.prototype.add = function (e, t) {
            var n = t.id
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
          }),
          (e.prototype.replace = function (e, t) {
            var n = this.getNode(e)
            if (n) {
              var r = this.nodeMetaMap.get(n)
              r && this.nodeMetaMap.set(t, r)
            }
            this.idNodeMap.set(e, t)
          }),
          (e.prototype.reset = function () {
            ;(this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap())
          })
      })()
      var xr = /([^\\]):hover/
      new RegExp(xr.source, "g")
      var Er = (function (e) {
        fe(n, e)
        var t = pe(n)
        function n(e) {
          var r,
            i = e.sessionMirror,
            o = e.elementSelectorGenerator
          return (
            a(this, n),
            ((r = t.call(this)).sessionMirror = void 0),
            (r.elementSelectorGenerator = void 0),
            (r.isMonitoring = void 0),
            (r.currentAssertion = null),
            (r.pageUrlAtMonitoringStart = null),
            (r.pageUrlChangeAssertionCounter = null),
            (r.elementVisibilityAtMonitoringStart = null),
            (r.elementSelectorGenerator = o),
            (r.sessionMirror = i),
            (r.isMonitoring = !1),
            r
          )
        }
        return (
          l(
            n,
            [
              {
                key: "startMonitoring",
                value: function () {
                  ;(this.isMonitoring = !0),
                    (this.pageUrlAtMonitoringStart = window.location.href),
                    (this.pageUrlChangeAssertionCounter = 0),
                    this.recordElementVisibilityForAllElements()
                },
              },
              {
                key: "generateAssertions",
                value: function () {
                  var e = this.createPageUrlChangeAssertionIfNeeded()
                  return (
                    e &&
                      this.replaceCurrentAssertionIfNewAssertionTakesPrecedence(
                        e
                      ),
                    null !== this.currentAssertion
                      ? [this.currentAssertion]
                      : []
                  )
                },
              },
              {
                key: "stopMonitoringAndGenerateAssertions",
                value: function () {
                  this.isMonitoring = !1
                  var e = this.generateAssertions()
                  return (
                    (this.currentAssertion = null),
                    (this.pageUrlAtMonitoringStart = null),
                    (this.pageUrlChangeAssertionCounter = null),
                    e
                  )
                },
              },
              {
                key: "handleMutation",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.isMonitoring) {
                                  e.next = 5
                                  break
                                }
                                return (
                                  (e.next = 3),
                                  this.handleAdditionMutation(t.adds)
                                )
                              case 3:
                                return (
                                  (e.next = 5),
                                  this.handleAttributeMutation(t.attributes)
                                )
                              case 5:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "handleAdditionMutation",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var r, i, o, a, s
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(r = ie(t)), (e.prev = 1), r.s()
                              case 3:
                                if ((i = r.n()).done) {
                                  e.next = 22
                                  break
                                }
                                if ((o = i.value).node.type !== wr.Element) {
                                  e.next = 20
                                  break
                                }
                                ;(e.t0 = o.node.tagName.toLowerCase()),
                                  (e.next =
                                    "h1" === e.t0 ||
                                    "h2" === e.t0 ||
                                    "h3" === e.t0 ||
                                    "h4" === e.t0 ||
                                    "h5" === e.t0 ||
                                    "h6" === e.t0 ||
                                    "p" === e.t0 ||
                                    "span" === e.t0 ||
                                    "div" === e.t0
                                      ? 9
                                      : 20)
                                break
                              case 9:
                                if (
                                  ((a = this.sessionMirror.getNodeById(
                                    o.node.id
                                  )),
                                  !n.isElementVisible(a))
                                ) {
                                  e.next = 18
                                  break
                                }
                                return (
                                  (e.next = 13),
                                  this.createElementTextAssertion(o.node.id)
                                )
                              case 13:
                                ;(s = e.sent).text &&
                                  this.replaceCurrentAssertionIfNewAssertionTakesPrecedence(
                                    s
                                  ),
                                  this.elementVisibilityAtMonitoringStart.set(
                                    o.node.id,
                                    !0
                                  ),
                                  (e.next = 19)
                                break
                              case 18:
                                this.elementVisibilityAtMonitoringStart.set(
                                  o.node.id,
                                  !1
                                )
                              case 19:
                                return e.abrupt("break", 20)
                              case 20:
                                e.next = 3
                                break
                              case 22:
                                e.next = 27
                                break
                              case 24:
                                ;(e.prev = 24), (e.t1 = e.catch(1)), r.e(e.t1)
                              case 27:
                                return (e.prev = 27), r.f(), e.finish(27)
                              case 30:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[1, 24, 27, 30]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "handleAttributeMutation",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var r, i, o, a, s, u, c, l, f
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(r = ie(t)), (e.prev = 1), r.s()
                              case 3:
                                if ((i = r.n()).done) {
                                  e.next = 35
                                  break
                                }
                                if (!(o = i.value).attributes.style) {
                                  e.next = 33
                                  break
                                }
                                if (
                                  !(
                                    (a = this.sessionMirror.getNodeById(
                                      o.id
                                    )) instanceof Element
                                  )
                                ) {
                                  e.next = 33
                                  break
                                }
                                if (
                                  this.elementVisibilityAtMonitoringStart.get(
                                    o.id
                                  )
                                ) {
                                  e.next = 33
                                  break
                                }
                                if (!n.isElementVisible(a)) {
                                  e.next = 33
                                  break
                                }
                                ;(s = [a].concat(
                                  Array.from(a.getElementsByTagName("*"))
                                )),
                                  (u = ie(s)),
                                  (e.prev = 12),
                                  u.s()
                              case 14:
                                if ((c = u.n()).done) {
                                  e.next = 25
                                  break
                                }
                                ;(l = c.value),
                                  (e.t0 = l.tagName.toLowerCase()),
                                  (e.next =
                                    "h1" === e.t0 ||
                                    "h2" === e.t0 ||
                                    "h3" === e.t0 ||
                                    "h4" === e.t0 ||
                                    "h5" === e.t0 ||
                                    "h6" === e.t0 ||
                                    "p" === e.t0 ||
                                    "span" === e.t0 ||
                                    "div" === e.t0
                                      ? 19
                                      : 23)
                                break
                              case 19:
                                return (
                                  (e.next = 21),
                                  this.createElementTextAssertion(
                                    this.sessionMirror.getMeta(l).id
                                  )
                                )
                              case 21:
                                ;(f = e.sent).text &&
                                  this.replaceCurrentAssertionIfNewAssertionTakesPrecedence(
                                    f
                                  )
                              case 23:
                                e.next = 14
                                break
                              case 25:
                                e.next = 30
                                break
                              case 27:
                                ;(e.prev = 27), (e.t1 = e.catch(12)), u.e(e.t1)
                              case 30:
                                return (e.prev = 30), u.f(), e.finish(30)
                              case 33:
                                e.next = 3
                                break
                              case 35:
                                e.next = 40
                                break
                              case 37:
                                ;(e.prev = 37), (e.t2 = e.catch(1)), r.e(e.t2)
                              case 40:
                                return (e.prev = 40), r.f(), e.finish(40)
                              case 43:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [
                          [1, 37, 40, 43],
                          [12, 27, 30, 33],
                        ]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "createElementTextAssertion",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var r, i
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (r = this.sessionMirror.getNodeById(
                                    t
                                  )) instanceof Element
                                ) {
                                  e.next = 3
                                  break
                                }
                                throw new Error(
                                  "Unexpected type for DOM node. Expected it to be an element, but it was actually ".concat(
                                    typeof r
                                  )
                                )
                              case 3:
                                return (
                                  ((i = {
                                    type: br.ElementText,
                                    text: n.getAssertionTextForDOMNode(r),
                                  })[n.assertionPrivateMetadataSymbol] = {
                                    id: t,
                                    tag: r.tagName.toLowerCase(),
                                    isHeader: !0,
                                    domNode: r,
                                  }),
                                  e.abrupt("return", i)
                                )
                              case 6:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "createPageUrlChangeAssertionIfNeeded",
                value: function () {
                  if (null === this.pageUrlAtMonitoringStart) return null
                  if (window.location.href !== this.pageUrlAtMonitoringStart) {
                    var e = {
                      type: br.PageUrlChange,
                      url: window.location.href,
                    }
                    return (
                      (e[n.assertionPrivateMetadataSymbol] = {
                        id: this.pageUrlChangeAssertionCounter,
                        tag: null,
                        isHeader: !1,
                        domNode: null,
                      }),
                      (this.pageUrlChangeAssertionCounter += 1),
                      e
                    )
                  }
                  return null
                },
              },
              {
                key: "replaceCurrentAssertionIfNewAssertionTakesPrecedence",
                value: function (e) {
                  ;(null === this.currentAssertion ||
                    n.doesAssertionTakePrecedenceOverOther(
                      e,
                      this.currentAssertion
                    )) &&
                    (this.currentAssertion = e)
                },
              },
              {
                key: "recordElementVisibilityForAllElements",
                value: function () {
                  this.elementVisibilityAtMonitoringStart = new Map()
                  for (
                    var e = document.getElementsByTagName("*"), t = 0;
                    t < e.length;
                    t++
                  ) {
                    var r = e[t]
                    this.elementVisibilityAtMonitoringStart.set(
                      this.sessionMirror.getMeta(r).id,
                      n.isElementVisible(r)
                    )
                  }
                },
              },
            ],
            [
              {
                key: "doesAssertionTakePrecedenceOverOther",
                value: function (e, t) {
                  var r = [br.PageUrlChange, br.ElementText],
                    i = r.indexOf(e.type),
                    o = r.indexOf(t.type)
                  if (-1 === i)
                    throw new Error(
                      "Unexpected assertion type in BasicAssertionGenerator.doesAssertionTakePrecedenceOverOther: ".concat(
                        e.type
                      )
                    )
                  if (-1 === o)
                    throw new Error(
                      "Unexpected assertion type in BasicAssertionGenerator.doesAssertionTakePrecedenceOverOther: ".concat(
                        t.type
                      )
                    )
                  if (i < o) return !0
                  if (i > o) return !1
                  var a = e[n.assertionPrivateMetadataSymbol],
                    s = t[n.assertionPrivateMetadataSymbol]
                  if (
                    e.type === br.PageUrlChange &&
                    t.type === br.PageUrlChange
                  )
                    return a.id < s.id
                  if (e.type === br.ElementText && t.type === br.ElementText) {
                    var u = [
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "p",
                        "span",
                        "div",
                      ],
                      c = u.indexOf(a.tag),
                      l = u.indexOf(s.tag)
                    return c === l
                      ? a.domNode.getBoundingClientRect().top <
                          s.domNode.getBoundingClientRect().top
                      : c < l
                  }
                  throw new Error(
                    "Unexpected assertion type in BasicAssertionGenerator.doesAssertionTakePrecedenceOverOther: ".concat(
                      e.type
                    )
                  )
                },
              },
              {
                key: "isElementVisible",
                value: function (e) {
                  if ("BODY" === e.tagName) return !0
                  var t = getComputedStyle(e)
                  return (
                    "none" !== t.display &&
                    "visible" === t.visibility &&
                    !(Number(t.opacity) < 0.01) &&
                    !!e.parentElement &&
                    n.isElementVisible(e.parentElement)
                  )
                },
              },
              {
                key: "getAssertionTextForDOMNode",
                value: function (e) {
                  if (e.nodeType === Node.TEXT_NODE) return e.textContent.trim()
                  if (e.nodeType === Node.ELEMENT_NODE) {
                    var t = e
                    if ("DIV" === t.tagName) {
                      for (var n = 0; n < t.childNodes.length; n++) {
                        var r = t.childNodes[n]
                        if (r.nodeType === Node.TEXT_NODE)
                          return r.textContent.trim()
                      }
                      return ""
                    }
                    return t.innerText.trim()
                  }
                },
              },
            ]
          ),
          n
        )
      })(ke)
      function Ar(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"]
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return
                  u = !1
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    u = !0
                  );
              } catch (l) {
                ;(c = !0), (i = l)
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return
                } finally {
                  if (c) throw i
                }
              }
              return s
            }
          })(e, t) ||
          b(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      function Mr(e) {
        return "__ln" in e
      }
      Er.assertionPrivateMetadataSymbol = Symbol("privateAssertionMetadata")
      var Tr = (function () {
          function e() {
            a(this, e), (this.length = 0), (this.head = null)
          }
          return (
            l(e, [
              {
                key: "get",
                value: function (e) {
                  if (e >= this.length)
                    throw new Error("Position outside of list range")
                  for (var t = this.head, n = 0; n < e; n++)
                    t = (null === t || void 0 === t ? void 0 : t.next) || null
                  return t
                },
              },
              {
                key: "addNode",
                value: function (e) {
                  var t = { value: e, previous: null, next: null }
                  if (
                    ((e.__ln = t), e.previousSibling && Mr(e.previousSibling))
                  ) {
                    var n = e.previousSibling.__ln.next
                    ;(t.next = n),
                      (t.previous = e.previousSibling.__ln),
                      (e.previousSibling.__ln.next = t),
                      n && (n.previous = t)
                  } else if (
                    e.nextSibling &&
                    Mr(e.nextSibling) &&
                    e.nextSibling.__ln.previous
                  ) {
                    var r = e.nextSibling.__ln.previous
                    ;(t.previous = r),
                      (t.next = e.nextSibling.__ln),
                      (e.nextSibling.__ln.previous = t),
                      r && (r.next = t)
                  } else
                    this.head && (this.head.previous = t),
                      (t.next = this.head),
                      (this.head = t)
                  this.length++
                },
              },
              {
                key: "removeNode",
                value: function (e) {
                  var t = e.__ln
                  this.head &&
                    (t.previous
                      ? ((t.previous.next = t.next),
                        t.next && (t.next.previous = t.previous))
                      : ((this.head = t.next),
                        this.head && (this.head.previous = null)),
                    e.__ln && delete e.__ln,
                    this.length--)
                },
              },
            ]),
            e
          )
        })(),
        Nr = function (e, t) {
          return "".concat(e, "@").concat(t)
        },
        _r = (function () {
          function e() {
            var t = this
            a(this, e),
              (this.frozen = !1),
              (this.locked = !1),
              (this.texts = []),
              (this.attributes = []),
              (this.removes = []),
              (this.mapRemoves = []),
              (this.movedMap = {}),
              (this.addedSet = new Set()),
              (this.movedSet = new Set()),
              (this.droppedSet = new Set()),
              (this.processMutations = function (e) {
                e.forEach(t.processMutation), t.emit()
              }),
              (this.emit = function () {
                if (!t.frozen && !t.locked) {
                  for (
                    var e = [],
                      n = new Tr(),
                      r = function (e) {
                        for (var n = e, r = ze; r === ze; )
                          r = (n = n && n.nextSibling) && t.mirror.getId(n)
                        return r
                      },
                      i = function (i) {
                        if (i.parentNode && Kn(i)) {
                          var o = Re(i.parentNode)
                              ? t.mirror.getId(Yn(i))
                              : t.mirror.getId(i.parentNode),
                            a = r(i)
                          if (-1 === o || -1 === a) return n.addNode(i)
                          var s = at(i, {
                            doc: t.doc,
                            mirror: t.mirror,
                            blockClass: t.blockClass,
                            blockSelector: t.blockSelector,
                            maskTextClass: t.maskTextClass,
                            maskTextSelector: t.maskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: t.inlineStylesheet,
                            maskInputOptions: t.maskInputOptions,
                            maskTextFn: t.maskTextFn,
                            maskInputFn: t.maskInputFn,
                            slimDOMOptions: t.slimDOMOptions,
                            dataURLOptions: t.dataURLOptions,
                            recordCanvas: t.recordCanvas,
                            inlineImages: t.inlineImages,
                            onSerialize: function (e) {
                              Wn(e, t.mirror) && t.iframeManager.addIframe(e),
                                Un(e, t.mirror) &&
                                  t.stylesheetManager.trackLinkElement(e),
                                zn(i) &&
                                  t.shadowDomManager.addShadowRoot(
                                    i.shadowRoot,
                                    t.doc
                                  )
                            },
                            onIframeLoad: function (e, n) {
                              t.iframeManager.attachIframe(e, n),
                                t.shadowDomManager.observeAttachShadow(e)
                            },
                            onStylesheetLoad: function (e, n) {
                              t.stylesheetManager.attachLinkElement(e, n)
                            },
                          })
                          s && e.push({ parentId: o, nextId: a, node: s })
                        }
                      };
                    t.mapRemoves.length;

                  )
                    t.mirror.removeNodeFromMap(t.mapRemoves.shift())
                  for (
                    var o = 0, a = Array.from(t.movedSet.values());
                    o < a.length;
                    o++
                  ) {
                    var s = a[o]
                    ;(Or(t.removes, s, t.mirror) &&
                      !t.movedSet.has(s.parentNode)) ||
                      i(s)
                  }
                  for (
                    var u = 0, c = Array.from(t.addedSet.values());
                    u < c.length;
                    u++
                  ) {
                    var l = c[u]
                    Lr(t.droppedSet, l) || Or(t.removes, l, t.mirror)
                      ? Lr(t.movedSet, l)
                        ? i(l)
                        : t.droppedSet.add(l)
                      : i(l)
                  }
                  for (var f = null; n.length; ) {
                    var d = null
                    if (f) {
                      var h = t.mirror.getId(f.value.parentNode),
                        p = r(f.value)
                      ;-1 !== h && -1 !== p && (d = f)
                    }
                    if (!d)
                      for (var v = n.length - 1; v >= 0; v--) {
                        var m = n.get(v)
                        if (m) {
                          var g = t.mirror.getId(m.value.parentNode)
                          if (-1 === r(m.value)) continue
                          if (-1 !== g) {
                            d = m
                            break
                          }
                          var y = m.value
                          if (
                            y.parentNode &&
                            y.parentNode.nodeType ===
                              Node.DOCUMENT_FRAGMENT_NODE
                          ) {
                            var b = y.parentNode.host
                            if (-1 !== t.mirror.getId(b)) {
                              d = m
                              break
                            }
                          }
                        }
                      }
                    if (!d) {
                      for (; n.head; ) n.removeNode(n.head.value)
                      break
                    }
                    ;(f = d.previous), n.removeNode(d.value), i(d.value)
                  }
                  var w = {
                    texts: t.texts
                      .map(function (e) {
                        return { id: t.mirror.getId(e.node), value: e.value }
                      })
                      .filter(function (e) {
                        return t.mirror.has(e.id)
                      }),
                    attributes: t.attributes
                      .map(function (e) {
                        return {
                          id: t.mirror.getId(e.node),
                          attributes: e.attributes,
                        }
                      })
                      .filter(function (e) {
                        return t.mirror.has(e.id)
                      }),
                    removes: t.removes,
                    adds: e,
                  }
                  ;(w.texts.length ||
                    w.attributes.length ||
                    w.removes.length ||
                    w.adds.length) &&
                    ((t.texts = []),
                    (t.attributes = []),
                    (t.removes = []),
                    (t.addedSet = new Set()),
                    (t.movedSet = new Set()),
                    (t.droppedSet = new Set()),
                    (t.movedMap = {}),
                    t.mutationCb(w))
                }
              }),
              (this.processMutation = function (e) {
                if (!Ln(e.target, t.mirror))
                  switch (e.type) {
                    case "characterData":
                      var n = e.target.textContent
                      Dn(e.target, t.blockClass, t.blockSelector, !1) ||
                        n === e.oldValue ||
                        t.texts.push({
                          value:
                            rt(e.target, t.maskTextClass, t.maskTextSelector) &&
                            n
                              ? t.maskTextFn
                                ? t.maskTextFn(n)
                                : n.replace(/[\S]/g, "*")
                              : n,
                          node: e.target,
                        })
                      break
                    case "attributes":
                      var r = e.target,
                        i = e.target.getAttribute(e.attributeName)
                      if (
                        ("value" === e.attributeName &&
                          (i = Be({
                            maskInputOptions: t.maskInputOptions,
                            tagName: e.target.tagName,
                            type: e.target.getAttribute("type"),
                            value: i,
                            maskInputFn: t.maskInputFn,
                          })),
                        Dn(e.target, t.blockClass, t.blockSelector, !1) ||
                          i === e.oldValue)
                      )
                        return
                      var o = t.attributes.find(function (t) {
                        return t.node === e.target
                      })
                      if (
                        "IFRAME" === r.tagName &&
                        "src" === e.attributeName &&
                        !t.keepIframeSrcFn(i)
                      ) {
                        if (r.contentDocument) return
                        e.attributeName = "rr_src"
                      }
                      if (
                        (o ||
                          ((o = { node: e.target, attributes: {} }),
                          t.attributes.push(o)),
                        "style" === e.attributeName)
                      ) {
                        var a = t.doc.createElement("span")
                        e.oldValue && a.setAttribute("style", e.oldValue),
                          (void 0 !== o.attributes.style &&
                            null !== o.attributes.style) ||
                            (o.attributes.style = {})
                        for (
                          var s = o.attributes.style,
                            u = 0,
                            c = Array.from(r.style);
                          u < c.length;
                          u++
                        ) {
                          var l = c[u],
                            f = r.style.getPropertyValue(l),
                            d = r.style.getPropertyPriority(l)
                          ;(f === a.style.getPropertyValue(l) &&
                            d === a.style.getPropertyPriority(l)) ||
                            (s[l] = "" === d ? f : [f, d])
                        }
                        for (
                          var h = 0, p = Array.from(a.style);
                          h < p.length;
                          h++
                        ) {
                          var v = p[h]
                          "" === r.style.getPropertyValue(v) && (s[v] = !1)
                        }
                      } else
                        o.attributes[e.attributeName] = tt(
                          t.doc,
                          r.tagName,
                          e.attributeName,
                          i
                        )
                      break
                    case "childList":
                      if (Dn(e.target, t.blockClass, t.blockSelector, !0))
                        return
                      e.addedNodes.forEach(function (n) {
                        return t.genAdds(n, e.target)
                      }),
                        e.removedNodes.forEach(function (n) {
                          var r = t.mirror.getId(n),
                            i = Re(e.target)
                              ? t.mirror.getId(e.target.host)
                              : t.mirror.getId(e.target)
                          Dn(e.target, t.blockClass, t.blockSelector, !1) ||
                            Ln(n, t.mirror) ||
                            !(function (e, t) {
                              return -1 !== t.getId(e)
                            })(n, t.mirror) ||
                            (t.addedSet.has(n)
                              ? (Rr(t.addedSet, n), t.droppedSet.add(n))
                              : (t.addedSet.has(e.target) && -1 === r) ||
                                Fn(e.target, t.mirror) ||
                                (t.movedSet.has(n) && t.movedMap[Nr(r, i)]
                                  ? Rr(t.movedSet, n)
                                  : t.removes.push({
                                      parentId: i,
                                      id: r,
                                      isShadow:
                                        !(!Re(e.target) || !Oe(e.target)) ||
                                        void 0,
                                    })),
                            t.mapRemoves.push(n))
                        })
                  }
              }),
              (this.genAdds = function (e, n) {
                if (!t.processedNodeManager.inOtherBuffer(e, t)) {
                  if (t.mirror.hasNode(e)) {
                    if (Ln(e, t.mirror)) return
                    t.movedSet.add(e)
                    var r = null
                    n && t.mirror.hasNode(n) && (r = t.mirror.getId(n)),
                      r &&
                        -1 !== r &&
                        (t.movedMap[Nr(t.mirror.getId(e), r)] = !0)
                  } else t.addedSet.add(e), t.droppedSet.delete(e)
                  Dn(e, t.blockClass, t.blockSelector, !1) ||
                    (e.childNodes.forEach(function (e) {
                      return t.genAdds(e)
                    }),
                    zn(e) &&
                      e.shadowRoot.childNodes.forEach(function (n) {
                        t.processedNodeManager.add(n, t), t.genAdds(n, e)
                      }))
                }
              })
          }
          return (
            l(e, [
              {
                key: "init",
                value: function (e) {
                  var t = this
                  ;[
                    "mutationCb",
                    "blockClass",
                    "blockSelector",
                    "maskTextClass",
                    "maskTextSelector",
                    "inlineStylesheet",
                    "maskInputOptions",
                    "maskTextFn",
                    "maskInputFn",
                    "keepIframeSrcFn",
                    "recordCanvas",
                    "inlineImages",
                    "slimDOMOptions",
                    "dataURLOptions",
                    "doc",
                    "mirror",
                    "iframeManager",
                    "stylesheetManager",
                    "shadowDomManager",
                    "canvasManager",
                    "processedNodeManager",
                  ].forEach(function (n) {
                    t[n] = e[n]
                  })
                },
              },
              {
                key: "freeze",
                value: function () {
                  ;(this.frozen = !0), this.canvasManager.freeze()
                },
              },
              {
                key: "unfreeze",
                value: function () {
                  ;(this.frozen = !1),
                    this.canvasManager.unfreeze(),
                    this.emit()
                },
              },
              {
                key: "isFrozen",
                value: function () {
                  return this.frozen
                },
              },
              {
                key: "lock",
                value: function () {
                  ;(this.locked = !0), this.canvasManager.lock()
                },
              },
              {
                key: "unlock",
                value: function () {
                  ;(this.locked = !1), this.canvasManager.unlock(), this.emit()
                },
              },
              {
                key: "reset",
                value: function () {
                  this.shadowDomManager.reset(), this.canvasManager.reset()
                },
              },
            ]),
            e
          )
        })()
      function Rr(e, t) {
        e.delete(t),
          t.childNodes.forEach(function (t) {
            return Rr(e, t)
          })
      }
      function Or(e, t, n) {
        return 0 !== e.length && Dr(e, t, n)
      }
      function Dr(e, t, n) {
        var r = t.parentNode
        if (!r) return !1
        var i = n.getId(r)
        return (
          !!e.some(function (e) {
            return e.id === i
          }) || Dr(e, r, n)
        )
      }
      function Lr(e, t) {
        return 0 !== e.size && Fr(e, t)
      }
      function Fr(e, t) {
        var n = t.parentNode
        return !!n && (!!e.has(n) || Fr(e, n))
      }
      var Vr = [],
        Br = new ((function () {
          function e() {
            a(this, e), (this.nodeMap = new WeakMap()), this.periodicallyClear()
          }
          return (
            l(e, [
              {
                key: "periodicallyClear",
                value: function () {
                  var e = this
                  requestAnimationFrame(function () {
                    e.clear(), e.periodicallyClear()
                  })
                },
              },
              {
                key: "inOtherBuffer",
                value: function (e, t) {
                  var n = this.nodeMap.get(e)
                  return (
                    n &&
                    Array.from(n).some(function (e) {
                      return e !== t
                    })
                  )
                },
              },
              {
                key: "add",
                value: function (e, t) {
                  this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t))
                },
              },
              {
                key: "clear",
                value: function () {
                  this.nodeMap = new WeakMap()
                },
              },
            ]),
            e
          )
        })())()
      function jr(e) {
        try {
          if ("composedPath" in e) {
            var t = e.composedPath()
            if (t.length) return t[0]
          } else if ("path" in e && e.path.length) return e.path[0]
          return e.target
        } catch (n) {
          return e.target
        }
      }
      function Pr(e, t) {
        var n,
          r,
          i = new _r()
        Vr.push(i), i.init(e)
        var o = window.MutationObserver || window.__rrMutationObserver,
          a =
            null ===
              (r =
                null ===
                  (n =
                    null === window || void 0 === window
                      ? void 0
                      : window.Zone) || void 0 === n
                  ? void 0
                  : n.__symbol__) || void 0 === r
              ? void 0
              : r.call(n, "MutationObserver")
        a && window[a] && (o = window[a])
        var s = new o(i.processMutations.bind(i))
        return (
          s.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
          }),
          s
        )
      }
      function Wr(e) {
        var t = e.mouseInteractionCb,
          n = e.doc,
          r = e.mirror,
          i = e.blockClass,
          o = e.blockSelector,
          a = e.sampling
        if (!1 === a.mouseInteraction) return function () {}
        var s =
            !0 === a.mouseInteraction || void 0 === a.mouseInteraction
              ? {}
              : a.mouseInteraction,
          u = []
        return (
          Object.keys(Se)
            .filter(function (e) {
              return (
                Number.isNaN(Number(e)) &&
                !e.endsWith("_Departed") &&
                !1 !== s[e]
              )
            })
            .forEach(function (e) {
              var a = e.toLowerCase(),
                s = (function (e) {
                  return function (n) {
                    var a = jr(n)
                    if (!Dn(a, i, o, !0)) {
                      var s = Vn(n) ? n.changedTouches[0] : n
                      if (s) {
                        var u = r.getId(a),
                          c = s.clientX,
                          l = s.clientY
                        t({ type: Se[e], id: u, x: c, y: l })
                      }
                    }
                  }
                })(e)
              u.push(xn(a, s, n))
            }),
          function () {
            u.forEach(function (e) {
              return e()
            })
          }
        )
      }
      function Ur(e) {
        var t = e.scrollCb,
          n = e.doc,
          r = e.mirror,
          i = e.blockClass,
          o = e.blockSelector
        return xn(
          "scroll",
          Mn(function (e) {
            var a = jr(e)
            if (a && !Dn(a, i, o, !0)) {
              var s = r.getId(a)
              if (a === n && n.defaultView) {
                var u = _n(n.defaultView)
                t({ id: s, x: u.left, y: u.top })
              } else t({ id: s, x: a.scrollLeft, y: a.scrollTop })
            }
          }, e.sampling.scroll || 100),
          n
        )
      }
      function Gr(e, t) {
        var n = Object.assign({}, e)
        return t || delete n.userTriggered, n
      }
      var zr = ["INPUT", "TEXTAREA", "SELECT"],
        Zr = new WeakMap()
      function qr(e) {
        return (function (e, t) {
          if (
            (Kr("CSSGroupingRule") &&
              e.parentRule instanceof CSSGroupingRule) ||
            (Kr("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
            (Kr("CSSSupportsRule") &&
              e.parentRule instanceof CSSSupportsRule) ||
            (Kr("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
          ) {
            var n = Array.from(e.parentRule.cssRules).indexOf(e)
            t.unshift(n)
          } else if (e.parentStyleSheet) {
            var r = Array.from(e.parentStyleSheet.cssRules).indexOf(e)
            t.unshift(r)
          }
          return t
        })(e, [])
      }
      function Hr(e, t, n) {
        var r, i
        return e
          ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)),
            { styleId: i, id: r })
          : {}
      }
      function Yr(e, t) {
        var n,
          r,
          i,
          o = e.mirror,
          a = e.stylesheetManager,
          s = null
        s = "#document" === t.nodeName ? o.getId(t) : o.getId(t.host)
        var u =
            "#document" === t.nodeName
              ? null === (n = t.defaultView) || void 0 === n
                ? void 0
                : n.Document
              : null ===
                  (i =
                    null === (r = t.ownerDocument) || void 0 === r
                      ? void 0
                      : r.defaultView) || void 0 === i
              ? void 0
              : i.ShadowRoot,
          c = Object.getOwnPropertyDescriptor(
            null === u || void 0 === u ? void 0 : u.prototype,
            "adoptedStyleSheets"
          )
        return null !== s && -1 !== s && u && c
          ? (Object.defineProperty(t, "adoptedStyleSheets", {
              configurable: c.configurable,
              enumerable: c.enumerable,
              get: function () {
                var e
                return null === (e = c.get) || void 0 === e
                  ? void 0
                  : e.call(this)
              },
              set: function (e) {
                var t,
                  n =
                    null === (t = c.set) || void 0 === t
                      ? void 0
                      : t.call(this, e)
                if (null !== s && -1 !== s)
                  try {
                    a.adoptStyleSheets(e, s)
                  } catch (hn) {}
                return n
              },
            }),
            function () {
              Object.defineProperty(t, "adoptedStyleSheets", {
                configurable: c.configurable,
                enumerable: c.enumerable,
                get: c.get,
                set: c.set,
              })
            })
          : function () {}
      }
      function Qr(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.doc.defaultView
        if (!n) return function () {}
        !(function (e, t) {
          var n = e.mutationCb,
            r = e.mousemoveCb,
            i = e.mouseInteractionCb,
            o = e.scrollCb,
            a = e.viewportResizeCb,
            s = e.inputCb,
            u = e.mediaInteractionCb,
            c = e.styleSheetRuleCb,
            l = e.styleDeclarationCb,
            f = e.canvasMutationCb,
            d = e.fontCb,
            h = e.selectionCb
          ;(e.mutationCb = function () {
            t.mutation && t.mutation.apply(t, arguments),
              n.apply(void 0, arguments)
          }),
            (e.mousemoveCb = function () {
              t.mousemove && t.mousemove.apply(t, arguments),
                r.apply(void 0, arguments)
            }),
            (e.mouseInteractionCb = function () {
              t.mouseInteraction && t.mouseInteraction.apply(t, arguments),
                i.apply(void 0, arguments)
            }),
            (e.scrollCb = function () {
              t.scroll && t.scroll.apply(t, arguments),
                o.apply(void 0, arguments)
            }),
            (e.viewportResizeCb = function () {
              t.viewportResize && t.viewportResize.apply(t, arguments),
                a.apply(void 0, arguments)
            }),
            (e.inputCb = function () {
              t.input && t.input.apply(t, arguments), s.apply(void 0, arguments)
            }),
            (e.mediaInteractionCb = function () {
              t.mediaInteaction && t.mediaInteaction.apply(t, arguments),
                u.apply(void 0, arguments)
            }),
            (e.styleSheetRuleCb = function () {
              t.styleSheetRule && t.styleSheetRule.apply(t, arguments),
                c.apply(void 0, arguments)
            }),
            (e.styleDeclarationCb = function () {
              t.styleDeclaration && t.styleDeclaration.apply(t, arguments),
                l.apply(void 0, arguments)
            }),
            (e.canvasMutationCb = function () {
              t.canvasMutation && t.canvasMutation.apply(t, arguments),
                f.apply(void 0, arguments)
            }),
            (e.fontCb = function () {
              t.font && t.font.apply(t, arguments), d.apply(void 0, arguments)
            }),
            (e.selectionCb = function () {
              t.selection && t.selection.apply(t, arguments),
                h.apply(void 0, arguments)
            })
        })(e, t)
        var r,
          i = Pr(e, e.doc),
          o = (function (e) {
            var t = e.mousemoveCb,
              n = e.sampling,
              r = e.doc,
              i = e.mirror
            if (!1 === n.mousemove) return function () {}
            var o,
              a = "number" === typeof n.mousemove ? n.mousemove : 50,
              s =
                "number" === typeof n.mousemoveCallback
                  ? n.mousemoveCallback
                  : 500,
              u = [],
              c = Mn(function (e) {
                var n = Date.now() - o
                t(
                  u.map(function (e) {
                    return (e.timeOffset -= n), e
                  }),
                  e
                ),
                  (u = []),
                  (o = null)
              }, s),
              l = Mn(
                function (e) {
                  var t = jr(e),
                    n = Vn(e) ? e.changedTouches[0] : e,
                    r = n.clientX,
                    a = n.clientY
                  o || (o = Date.now()),
                    u.push({
                      x: r,
                      y: a,
                      id: i.getId(t),
                      timeOffset: Date.now() - o,
                    }),
                    c(
                      "undefined" !== typeof DragEvent && e instanceof DragEvent
                        ? we.Drag
                        : e instanceof MouseEvent
                        ? we.MouseMove
                        : we.TouchMove
                    )
                },
                a,
                { trailing: !1 }
              ),
              f = [
                xn("mousemove", l, r),
                xn("touchmove", l, r),
                xn("drag", l, r),
              ]
            return function () {
              f.forEach(function (e) {
                return e()
              })
            }
          })(e),
          a = Wr(e),
          s = Ur(e),
          u = (function (e) {
            var t = e.viewportResizeCb,
              n = -1,
              r = -1
            return xn(
              "resize",
              Mn(function () {
                var e = Rn(),
                  i = On()
                ;(n === e && r === i) ||
                  (t({ width: Number(i), height: Number(e) }), (n = e), (r = i))
              }, 200),
              window
            )
          })(e),
          c = (function (e) {
            var t = e.inputCb,
              n = e.doc,
              r = e.mirror,
              i = e.blockClass,
              o = e.blockSelector,
              a = e.ignoreClass,
              s = e.maskInputOptions,
              u = e.maskInputFn,
              c = e.sampling,
              l = e.userTriggeredOnInput
            function f(e) {
              var t = jr(e),
                r = e.isTrusted
              if (
                (t && "OPTION" === t.tagName && (t = t.parentElement),
                t &&
                  t.tagName &&
                  !(zr.indexOf(t.tagName) < 0) &&
                  !Dn(t, i, o, !0))
              ) {
                var c = t.type
                if (!t.classList.contains(a)) {
                  var f = t.value,
                    h = !1
                  "radio" === c || "checkbox" === c
                    ? (h = t.checked)
                    : (s[t.tagName.toLowerCase()] || s[c]) &&
                      (f = Be({
                        maskInputOptions: s,
                        tagName: t.tagName,
                        type: c,
                        value: f,
                        maskInputFn: u,
                      })),
                    d(t, Gr({ text: f, isChecked: h, userTriggered: r }, l))
                  var p = t.name
                  "radio" === c &&
                    p &&
                    h &&
                    n
                      .querySelectorAll(
                        'input[type="radio"][name="'.concat(p, '"]')
                      )
                      .forEach(function (e) {
                        e !== t &&
                          d(
                            e,
                            Gr(
                              {
                                text: e.value,
                                isChecked: !h,
                                userTriggered: !1,
                              },
                              l
                            )
                          )
                      })
                }
              }
            }
            function d(e, n) {
              var i = Zr.get(e)
              if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                Zr.set(e, n)
                var o = r.getId(e)
                t(Object.assign(Object.assign({}, n), { id: o }))
              }
            }
            var h = ("last" === c.input ? ["change"] : ["input", "change"]).map(
                function (e) {
                  return xn(e, f, n)
                }
              ),
              p = n.defaultView
            if (!p)
              return function () {
                h.forEach(function (e) {
                  return e()
                })
              }
            var v = p.Object.getOwnPropertyDescriptor(
                p.HTMLInputElement.prototype,
                "value"
              ),
              m = [
                [p.HTMLInputElement.prototype, "value"],
                [p.HTMLInputElement.prototype, "checked"],
                [p.HTMLSelectElement.prototype, "value"],
                [p.HTMLTextAreaElement.prototype, "value"],
                [p.HTMLSelectElement.prototype, "selectedIndex"],
                [p.HTMLOptionElement.prototype, "selected"],
              ]
            return (
              v &&
                v.set &&
                h.push.apply(
                  h,
                  w(
                    m.map(function (e) {
                      return Tn(
                        e[0],
                        e[1],
                        {
                          set: function () {
                            f({ target: this })
                          },
                        },
                        !1,
                        p
                      )
                    })
                  )
                ),
              function () {
                h.forEach(function (e) {
                  return e()
                })
              }
            )
          })(e),
          l = (function (e) {
            var t = e.mediaInteractionCb,
              n = e.blockClass,
              r = e.blockSelector,
              i = e.mirror,
              o = e.sampling,
              a = function (e) {
                return Mn(function (o) {
                  var a = jr(o)
                  if (a && !Dn(a, n, r, !0)) {
                    var s = a.currentTime,
                      u = a.volume,
                      c = a.muted,
                      l = a.playbackRate
                    t({
                      type: e,
                      id: i.getId(a),
                      currentTime: s,
                      volume: u,
                      muted: c,
                      playbackRate: l,
                    })
                  }
                }, o.media || 500)
              },
              s = [
                xn("play", a(0)),
                xn("pause", a(1)),
                xn("seeked", a(2)),
                xn("volumechange", a(3)),
                xn("ratechange", a(4)),
              ]
            return function () {
              s.forEach(function (e) {
                return e()
              })
            }
          })(e),
          f = (function (e, t) {
            var n = e.styleSheetRuleCb,
              r = e.mirror,
              i = e.stylesheetManager,
              o = t.win
            if (!o.CSSStyleSheet || !o.CSSStyleSheet.prototype)
              return function () {}
            var a = o.CSSStyleSheet.prototype.insertRule
            o.CSSStyleSheet.prototype.insertRule = function (e, t) {
              var o = Hr(this, r, i.styleMirror),
                s = o.id,
                u = o.styleId
              return (
                ((s && -1 !== s) || (u && -1 !== u)) &&
                  n({ id: s, styleId: u, adds: [{ rule: e, index: t }] }),
                a.apply(this, [e, t])
              )
            }
            var s,
              u,
              c = o.CSSStyleSheet.prototype.deleteRule
            ;(o.CSSStyleSheet.prototype.deleteRule = function (e) {
              var t = Hr(this, r, i.styleMirror),
                o = t.id,
                a = t.styleId
              return (
                ((o && -1 !== o) || (a && -1 !== a)) &&
                  n({ id: o, styleId: a, removes: [{ index: e }] }),
                c.apply(this, [e])
              )
            }),
              o.CSSStyleSheet.prototype.replace &&
                ((s = o.CSSStyleSheet.prototype.replace),
                (o.CSSStyleSheet.prototype.replace = function (e) {
                  var t = Hr(this, r, i.styleMirror),
                    o = t.id,
                    a = t.styleId
                  return (
                    ((o && -1 !== o) || (a && -1 !== a)) &&
                      n({ id: o, styleId: a, replace: e }),
                    s.apply(this, [e])
                  )
                })),
              o.CSSStyleSheet.prototype.replaceSync &&
                ((u = o.CSSStyleSheet.prototype.replaceSync),
                (o.CSSStyleSheet.prototype.replaceSync = function (e) {
                  var t = Hr(this, r, i.styleMirror),
                    o = t.id,
                    a = t.styleId
                  return (
                    ((o && -1 !== o) || (a && -1 !== a)) &&
                      n({ id: o, styleId: a, replaceSync: e }),
                    u.apply(this, [e])
                  )
                }))
            var l = {}
            Jr("CSSGroupingRule")
              ? (l.CSSGroupingRule = o.CSSGroupingRule)
              : (Jr("CSSMediaRule") && (l.CSSMediaRule = o.CSSMediaRule),
                Jr("CSSConditionRule") &&
                  (l.CSSConditionRule = o.CSSConditionRule),
                Jr("CSSSupportsRule") &&
                  (l.CSSSupportsRule = o.CSSSupportsRule))
            var f = {}
            return (
              Object.entries(l).forEach(function (e) {
                var t = Ar(e, 2),
                  o = t[0],
                  a = t[1]
                ;(f[o] = {
                  insertRule: a.prototype.insertRule,
                  deleteRule: a.prototype.deleteRule,
                }),
                  (a.prototype.insertRule = function (e, t) {
                    var a = Hr(this.parentStyleSheet, r, i.styleMirror),
                      s = a.id,
                      u = a.styleId
                    return (
                      ((s && -1 !== s) || (u && -1 !== u)) &&
                        n({
                          id: s,
                          styleId: u,
                          adds: [
                            {
                              rule: e,
                              index: [].concat(w(qr(this)), [t || 0]),
                            },
                          ],
                        }),
                      f[o].insertRule.apply(this, [e, t])
                    )
                  }),
                  (a.prototype.deleteRule = function (e) {
                    var t = Hr(this.parentStyleSheet, r, i.styleMirror),
                      a = t.id,
                      s = t.styleId
                    return (
                      ((a && -1 !== a) || (s && -1 !== s)) &&
                        n({
                          id: a,
                          styleId: s,
                          removes: [{ index: [].concat(w(qr(this)), [e]) }],
                        }),
                      f[o].deleteRule.apply(this, [e])
                    )
                  })
              }),
              function () {
                ;(o.CSSStyleSheet.prototype.insertRule = a),
                  (o.CSSStyleSheet.prototype.deleteRule = c),
                  s && (o.CSSStyleSheet.prototype.replace = s),
                  u && (o.CSSStyleSheet.prototype.replaceSync = u),
                  Object.entries(l).forEach(function (e) {
                    var t = Ar(e, 2),
                      n = t[0],
                      r = t[1]
                    ;(r.prototype.insertRule = f[n].insertRule),
                      (r.prototype.deleteRule = f[n].deleteRule)
                  })
              }
            )
          })(e, { win: n }),
          d = Yr(e, e.doc),
          h = (function (e, t) {
            var n = e.styleDeclarationCb,
              r = e.mirror,
              i = e.ignoreCSSAttributes,
              o = e.stylesheetManager,
              a = t.win,
              s = a.CSSStyleDeclaration.prototype.setProperty
            a.CSSStyleDeclaration.prototype.setProperty = function (e, t, a) {
              var u
              if (i.has(e)) return s.apply(this, [e, t, a])
              var c = Hr(
                  null === (u = this.parentRule) || void 0 === u
                    ? void 0
                    : u.parentStyleSheet,
                  r,
                  o.styleMirror
                ),
                l = c.id,
                f = c.styleId
              return (
                ((l && -1 !== l) || (f && -1 !== f)) &&
                  n({
                    id: l,
                    styleId: f,
                    set: { property: e, value: t, priority: a },
                    index: qr(this.parentRule),
                  }),
                s.apply(this, [e, t, a])
              )
            }
            var u = a.CSSStyleDeclaration.prototype.removeProperty
            return (
              (a.CSSStyleDeclaration.prototype.removeProperty = function (e) {
                var t
                if (i.has(e)) return u.apply(this, [e])
                var a = Hr(
                    null === (t = this.parentRule) || void 0 === t
                      ? void 0
                      : t.parentStyleSheet,
                    r,
                    o.styleMirror
                  ),
                  s = a.id,
                  c = a.styleId
                return (
                  ((s && -1 !== s) || (c && -1 !== c)) &&
                    n({
                      id: s,
                      styleId: c,
                      remove: { property: e },
                      index: qr(this.parentRule),
                    }),
                  u.apply(this, [e])
                )
              }),
              function () {
                ;(a.CSSStyleDeclaration.prototype.setProperty = s),
                  (a.CSSStyleDeclaration.prototype.removeProperty = u)
              }
            )
          })(e, { win: n }),
          p = e.collectFonts
            ? (function (e) {
                var t = e.fontCb,
                  n = e.doc,
                  r = n.defaultView
                if (!r) return function () {}
                var i = [],
                  o = new WeakMap(),
                  a = r.FontFace
                r.FontFace = function (e, t, n) {
                  var r = new a(e, t, n)
                  return (
                    o.set(r, {
                      family: e,
                      buffer: "string" !== typeof t,
                      descriptors: n,
                      fontSource:
                        "string" === typeof t
                          ? t
                          : JSON.stringify(Array.from(new Uint8Array(t))),
                    }),
                    r
                  )
                }
                var s = Nn(n.fonts, "add", function (e) {
                  return function (n) {
                    return (
                      setTimeout(function () {
                        var e = o.get(n)
                        e && (t(e), o.delete(n))
                      }, 0),
                      e.apply(this, [n])
                    )
                  }
                })
                return (
                  i.push(function () {
                    r.FontFace = a
                  }),
                  i.push(s),
                  function () {
                    i.forEach(function (e) {
                      return e()
                    })
                  }
                )
              })(e)
            : function () {},
          v = (function (e) {
            var t = e.doc,
              n = e.mirror,
              r = e.blockClass,
              i = e.blockSelector,
              o = e.selectionCb,
              a = !0,
              s = function () {
                var e = t.getSelection()
                if (
                  !(
                    !e ||
                    (a && (null === e || void 0 === e ? void 0 : e.isCollapsed))
                  )
                ) {
                  a = e.isCollapsed || !1
                  for (var s = [], u = e.rangeCount || 0, c = 0; c < u; c++) {
                    var l = e.getRangeAt(c),
                      f = l.startContainer,
                      d = l.startOffset,
                      h = l.endContainer,
                      p = l.endOffset
                    Dn(f, r, i, !0) ||
                      Dn(h, r, i, !0) ||
                      s.push({
                        start: n.getId(f),
                        startOffset: d,
                        end: n.getId(h),
                        endOffset: p,
                      })
                  }
                  o({ ranges: s })
                }
              }
            return s(), xn("selectionchange", s)
          })(e),
          m = [],
          g = ie(e.plugins)
        try {
          for (g.s(); !(r = g.n()).done; ) {
            var y = r.value
            m.push(y.observer(y.callback, n, y.options))
          }
        } catch (b) {
          g.e(b)
        } finally {
          g.f()
        }
        return function () {
          Vr.forEach(function (e) {
            return e.reset()
          }),
            i.disconnect(),
            o(),
            a(),
            s(),
            u(),
            c(),
            l(),
            f(),
            d(),
            h(),
            p(),
            v(),
            m.forEach(function (e) {
              return e()
            })
        }
      }
      function Kr(e) {
        return "undefined" !== typeof window[e]
      }
      function Jr(e) {
        return Boolean(
          "undefined" !== typeof window[e] &&
            window[e].prototype &&
            "insertRule" in window[e].prototype &&
            "deleteRule" in window[e].prototype
        )
      }
      var Xr = (function () {
          function e(t) {
            a(this, e),
              (this.generateIdFn = t),
              (this.iframeIdToRemoteIdMap = new WeakMap()),
              (this.iframeRemoteIdToIdMap = new WeakMap())
          }
          return (
            l(e, [
              {
                key: "getId",
                value: function (e, t, n, r) {
                  var i = n || this.getIdToRemoteIdMap(e),
                    o = r || this.getRemoteIdToIdMap(e),
                    a = i.get(t)
                  return (
                    a || ((a = this.generateIdFn()), i.set(t, a), o.set(a, t)),
                    a
                  )
                },
              },
              {
                key: "getIds",
                value: function (e, t) {
                  var n = this,
                    r = this.getIdToRemoteIdMap(e),
                    i = this.getRemoteIdToIdMap(e)
                  return t.map(function (t) {
                    return n.getId(e, t, r, i)
                  })
                },
              },
              {
                key: "getRemoteId",
                value: function (e, t, n) {
                  var r = n || this.getRemoteIdToIdMap(e)
                  if ("number" !== typeof t) return t
                  var i = r.get(t)
                  return i || -1
                },
              },
              {
                key: "getRemoteIds",
                value: function (e, t) {
                  var n = this,
                    r = this.getRemoteIdToIdMap(e)
                  return t.map(function (t) {
                    return n.getRemoteId(e, t, r)
                  })
                },
              },
              {
                key: "reset",
                value: function (e) {
                  if (!e)
                    return (
                      (this.iframeIdToRemoteIdMap = new WeakMap()),
                      void (this.iframeRemoteIdToIdMap = new WeakMap())
                    )
                  this.iframeIdToRemoteIdMap.delete(e),
                    this.iframeRemoteIdToIdMap.delete(e)
                },
              },
              {
                key: "getIdToRemoteIdMap",
                value: function (e) {
                  var t = this.iframeIdToRemoteIdMap.get(e)
                  return (
                    t ||
                      ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)),
                    t
                  )
                },
              },
              {
                key: "getRemoteIdToIdMap",
                value: function (e) {
                  var t = this.iframeRemoteIdToIdMap.get(e)
                  return (
                    t ||
                      ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)),
                    t
                  )
                },
              },
            ]),
            e
          )
        })(),
        $r = (function () {
          function e(t) {
            a(this, e),
              (this.iframes = new WeakMap()),
              (this.crossOriginIframeMap = new WeakMap()),
              (this.crossOriginIframeMirror = new Xr(Ze)),
              (this.crossOriginIframeRootIdMap = new WeakMap()),
              (this.mutationCb = t.mutationCb),
              (this.wrappedEmit = t.wrappedEmit),
              (this.stylesheetManager = t.stylesheetManager),
              (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
              (this.crossOriginIframeStyleMirror = new Xr(
                this.stylesheetManager.styleMirror.generateId.bind(
                  this.stylesheetManager.styleMirror
                )
              )),
              (this.mirror = t.mirror),
              this.recordCrossOriginIframes &&
                window.addEventListener(
                  "message",
                  this.handleMessage.bind(this)
                )
          }
          return (
            l(e, [
              {
                key: "addIframe",
                value: function (e) {
                  this.iframes.set(e, !0),
                    e.contentWindow &&
                      this.crossOriginIframeMap.set(e.contentWindow, e)
                },
              },
              {
                key: "addLoadListener",
                value: function (e) {
                  this.loadListener = e
                },
              },
              {
                key: "attachIframe",
                value: function (e, t) {
                  var n
                  this.mutationCb({
                    adds: [
                      { parentId: this.mirror.getId(e), nextId: null, node: t },
                    ],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0,
                  }),
                    null === (n = this.loadListener) ||
                      void 0 === n ||
                      n.call(this, e),
                    e.contentDocument &&
                      e.contentDocument.adoptedStyleSheets &&
                      e.contentDocument.adoptedStyleSheets.length > 0 &&
                      this.stylesheetManager.adoptStyleSheets(
                        e.contentDocument.adoptedStyleSheets,
                        this.mirror.getId(e.contentDocument)
                      )
                },
              },
              {
                key: "handleMessage",
                value: function (e) {
                  var t = e
                  if (
                    "rrweb" === t.data.type &&
                    t.origin === t.data.origin &&
                    e.source
                  ) {
                    var n = this.crossOriginIframeMap.get(e.source)
                    if (n) {
                      var r = this.transformCrossOriginEvent(n, t.data.event)
                      r && this.wrappedEmit(r, t.data.isCheckout)
                    }
                  }
                },
              },
              {
                key: "transformCrossOriginEvent",
                value: function (e, t) {
                  var n,
                    r = this
                  switch (t.type) {
                    case be.FullSnapshot:
                      this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e)
                      var i = t.data.node.id
                      return (
                        this.crossOriginIframeRootIdMap.set(e, i),
                        this.patchRootIdOnNode(t.data.node, i),
                        {
                          timestamp: t.timestamp,
                          type: be.IncrementalSnapshot,
                          data: {
                            source: we.Mutation,
                            adds: [
                              {
                                parentId: this.mirror.getId(e),
                                nextId: null,
                                node: t.data.node,
                              },
                            ],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0,
                          },
                        }
                      )
                    case be.Meta:
                    case be.Load:
                    case be.DomContentLoaded:
                      return !1
                    case be.Plugin:
                      return t
                    case be.Custom:
                      return (
                        this.replaceIds(t.data.payload, e, [
                          "id",
                          "parentId",
                          "previousId",
                          "nextId",
                        ]),
                        t
                      )
                    case be.IncrementalSnapshot:
                      switch (t.data.source) {
                        case we.Mutation:
                          return (
                            t.data.adds.forEach(function (t) {
                              r.replaceIds(t, e, [
                                "parentId",
                                "nextId",
                                "previousId",
                              ]),
                                r.replaceIdOnNode(t.node, e)
                              var n = r.crossOriginIframeRootIdMap.get(e)
                              n && r.patchRootIdOnNode(t.node, n)
                            }),
                            t.data.removes.forEach(function (t) {
                              r.replaceIds(t, e, ["parentId", "id"])
                            }),
                            t.data.attributes.forEach(function (t) {
                              r.replaceIds(t, e, ["id"])
                            }),
                            t.data.texts.forEach(function (t) {
                              r.replaceIds(t, e, ["id"])
                            }),
                            t
                          )
                        case we.Drag:
                        case we.TouchMove:
                        case we.MouseMove:
                          return (
                            t.data.positions.forEach(function (t) {
                              r.replaceIds(t, e, ["id"])
                            }),
                            t
                          )
                        case we.ViewportResize:
                          return !1
                        case we.MediaInteraction:
                        case we.MouseInteraction:
                        case we.Scroll:
                        case we.CanvasMutation:
                        case we.Input:
                          return this.replaceIds(t.data, e, ["id"]), t
                        case we.StyleSheetRule:
                        case we.StyleDeclaration:
                          return (
                            this.replaceIds(t.data, e, ["id"]),
                            this.replaceStyleIds(t.data, e, ["styleId"]),
                            t
                          )
                        case we.Font:
                          return t
                        case we.Selection:
                          return (
                            t.data.ranges.forEach(function (t) {
                              r.replaceIds(t, e, ["start", "end"])
                            }),
                            t
                          )
                        case we.AdoptedStyleSheet:
                          return (
                            this.replaceIds(t.data, e, ["id"]),
                            this.replaceStyleIds(t.data, e, ["styleIds"]),
                            null === (n = t.data.styles) ||
                              void 0 === n ||
                              n.forEach(function (t) {
                                r.replaceStyleIds(t, e, ["styleId"])
                              }),
                            t
                          )
                      }
                  }
                },
              },
              {
                key: "replace",
                value: function (e, t, n, r) {
                  var i,
                    o = ie(r)
                  try {
                    for (o.s(); !(i = o.n()).done; ) {
                      var a = i.value
                      ;(Array.isArray(t[a]) || "number" === typeof t[a]) &&
                        (Array.isArray(t[a])
                          ? (t[a] = e.getIds(n, t[a]))
                          : (t[a] = e.getId(n, t[a])))
                    }
                  } catch (s) {
                    o.e(s)
                  } finally {
                    o.f()
                  }
                  return t
                },
              },
              {
                key: "replaceIds",
                value: function (e, t, n) {
                  return this.replace(this.crossOriginIframeMirror, e, t, n)
                },
              },
              {
                key: "replaceStyleIds",
                value: function (e, t, n) {
                  return this.replace(
                    this.crossOriginIframeStyleMirror,
                    e,
                    t,
                    n
                  )
                },
              },
              {
                key: "replaceIdOnNode",
                value: function (e, t) {
                  var n = this
                  this.replaceIds(e, t, ["id", "rootId"]),
                    "childNodes" in e &&
                      e.childNodes.forEach(function (e) {
                        n.replaceIdOnNode(e, t)
                      })
                },
              },
              {
                key: "patchRootIdOnNode",
                value: function (e, t) {
                  var n = this
                  e.type === xe.Document || e.rootId || (e.rootId = t),
                    "childNodes" in e &&
                      e.childNodes.forEach(function (e) {
                        n.patchRootIdOnNode(e, t)
                      })
                },
              },
            ]),
            e
          )
        })(),
        ei = (function () {
          function e(t) {
            a(this, e),
              (this.shadowDoms = new WeakSet()),
              (this.restoreHandlers = []),
              (this.mutationCb = t.mutationCb),
              (this.scrollCb = t.scrollCb),
              (this.bypassOptions = t.bypassOptions),
              (this.mirror = t.mirror),
              this.init()
          }
          return (
            l(e, [
              {
                key: "init",
                value: function () {
                  this.reset(), this.patchAttachShadow(Element, document)
                },
              },
              {
                key: "addShadowRoot",
                value: function (e, t) {
                  var n = this
                  if (Oe(e) && !this.shadowDoms.has(e)) {
                    this.shadowDoms.add(e)
                    var r = Pr(
                      Object.assign(Object.assign({}, this.bypassOptions), {
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this,
                      }),
                      e
                    )
                    this.restoreHandlers.push(function () {
                      return r.disconnect()
                    }),
                      this.restoreHandlers.push(
                        Ur(
                          Object.assign(Object.assign({}, this.bypassOptions), {
                            scrollCb: this.scrollCb,
                            doc: e,
                            mirror: this.mirror,
                          })
                        )
                      ),
                      setTimeout(function () {
                        e.adoptedStyleSheets &&
                          e.adoptedStyleSheets.length > 0 &&
                          n.bypassOptions.stylesheetManager.adoptStyleSheets(
                            e.adoptedStyleSheets,
                            n.mirror.getId(e.host)
                          ),
                          n.restoreHandlers.push(
                            Yr(
                              {
                                mirror: n.mirror,
                                stylesheetManager:
                                  n.bypassOptions.stylesheetManager,
                              },
                              e
                            )
                          )
                      }, 0)
                  }
                },
              },
              {
                key: "observeAttachShadow",
                value: function (e) {
                  e.contentWindow &&
                    e.contentDocument &&
                    this.patchAttachShadow(
                      e.contentWindow.Element,
                      e.contentDocument
                    )
                },
              },
              {
                key: "patchAttachShadow",
                value: function (e, t) {
                  var n = this
                  this.restoreHandlers.push(
                    Nn(e.prototype, "attachShadow", function (e) {
                      return function (r) {
                        var i = e.call(this, r)
                        return (
                          this.shadowRoot &&
                            Kn(this) &&
                            n.addShadowRoot(this.shadowRoot, t),
                          i
                        )
                      }
                    })
                  )
                },
              },
              {
                key: "reset",
                value: function () {
                  this.restoreHandlers.forEach(function (e) {
                    try {
                      e()
                    } catch (hn) {}
                  }),
                    (this.restoreHandlers = []),
                    (this.shadowDoms = new WeakSet())
                },
              },
            ]),
            e
          )
        })(),
        ti = new Map()
      var ni = function (e, t, n) {
        if (e && (oi(e, t) || "object" === typeof e)) {
          var r = (function (e, t) {
              var n = ti.get(e)
              return (
                n || ((n = new Map()), ti.set(e, n)),
                n.has(t) || n.set(t, []),
                n.get(t)
              )
            })(n, e.constructor.name),
            i = r.indexOf(e)
          return -1 === i && ((i = r.length), r.push(e)), i
        }
      }
      function ri(e, t, n) {
        if (e instanceof Array)
          return e.map(function (e) {
            return ri(e, t, n)
          })
        if (null === e) return e
        if (
          e instanceof Float32Array ||
          e instanceof Float64Array ||
          e instanceof Int32Array ||
          e instanceof Uint32Array ||
          e instanceof Uint8Array ||
          e instanceof Uint16Array ||
          e instanceof Int16Array ||
          e instanceof Int8Array ||
          e instanceof Uint8ClampedArray
        )
          return { rr_type: e.constructor.name, args: [Object.values(e)] }
        if (e instanceof ArrayBuffer)
          return { rr_type: e.constructor.name, base64: tr(e) }
        if (e instanceof DataView)
          return {
            rr_type: e.constructor.name,
            args: [ri(e.buffer, t, n), e.byteOffset, e.byteLength],
          }
        if (e instanceof HTMLImageElement)
          return { rr_type: e.constructor.name, src: e.src }
        if (e instanceof HTMLCanvasElement) {
          return { rr_type: "HTMLImageElement", src: e.toDataURL() }
        }
        return e instanceof ImageData
          ? {
              rr_type: e.constructor.name,
              args: [ri(e.data, t, n), e.width, e.height],
            }
          : oi(e, t) || "object" === typeof e
          ? { rr_type: e.constructor.name, index: ni(e, t, n) }
          : e
      }
      var ii = function (e, t, n) {
          return w(e).map(function (e) {
            return ri(e, t, n)
          })
        },
        oi = function (e, t) {
          var n = [
            "WebGLActiveInfo",
            "WebGLBuffer",
            "WebGLFramebuffer",
            "WebGLProgram",
            "WebGLRenderbuffer",
            "WebGLShader",
            "WebGLShaderPrecisionFormat",
            "WebGLTexture",
            "WebGLUniformLocation",
            "WebGLVertexArrayObject",
            "WebGLVertexArrayObjectOES",
          ].filter(function (e) {
            return "function" === typeof t[e]
          })
          return Boolean(
            n.find(function (n) {
              return e instanceof t[n]
            })
          )
        }
      function ai(e, t, n) {
        var r = []
        try {
          var i = Nn(e.HTMLCanvasElement.prototype, "getContext", function (e) {
            return function (r) {
              Dn(this, t, n, !0) || "__context" in this || (this.__context = r)
              for (
                var i = arguments.length,
                  o = new Array(i > 1 ? i - 1 : 0),
                  a = 1;
                a < i;
                a++
              )
                o[a - 1] = arguments[a]
              return e.apply(this, [r].concat(o))
            }
          })
          r.push(i)
        } catch (o) {
          console.error(
            "failed to patch HTMLCanvasElement.prototype.getContext"
          )
        }
        return function () {
          r.forEach(function (e) {
            return e()
          })
        }
      }
      function si(e, t, n, r, i, o, a) {
        var s,
          u = [],
          c = ie(Object.getOwnPropertyNames(e))
        try {
          var l = function () {
            var o = s.value
            if (
              [
                "isContextLost",
                "canvas",
                "drawingBufferWidth",
                "drawingBufferHeight",
              ].includes(o)
            )
              return "continue"
            try {
              if ("function" !== typeof e[o]) return "continue"
              var c = Nn(e, o, function (e) {
                return function () {
                  for (
                    var s = arguments.length, u = new Array(s), c = 0;
                    c < s;
                    c++
                  )
                    u[c] = arguments[c]
                  var l = e.apply(this, u)
                  if ((ni(l, a, this), !Dn(this.canvas, r, i, !0))) {
                    var f = ii([].concat(u), a, this),
                      d = { type: t, property: o, args: f }
                    n(this.canvas, d)
                  }
                  return l
                }
              })
              u.push(c)
            } catch (f) {
              var l = Tn(e, o, {
                set: function (e) {
                  n(this.canvas, {
                    type: t,
                    property: o,
                    args: [e],
                    setter: !0,
                  })
                },
              })
              u.push(l)
            }
          }
          for (c.s(); !(s = c.n()).done; ) l()
        } catch (f) {
          c.e(f)
        } finally {
          c.f()
        }
        return u
      }
      var ui = null
      try {
        var ci =
          ("undefined" !== typeof module &&
            "function" === typeof module.require &&
            module.require("worker_threads")) ||
          ("function" === typeof require && require("worker_threads")) ||
          ("function" === typeof require && require("worker_threads"))
        ui = ci.Worker
      } catch (hn) {}
      function li(e, t, n) {
        var r = void 0 === t ? null : t,
          i = (function (e, t) {
            return Buffer.from(e, "base64").toString(t ? "utf16" : "utf8")
          })(e, void 0 !== n && n),
          o = i.indexOf("\n", 10) + 1,
          a = i.substring(o) + (r ? "//# sourceMappingURL=" + r : "")
        return function (e) {
          return new ui(a, Object.assign({}, e, { eval: !0 }))
        }
      }
      function fi(e, t, n) {
        var r = void 0 === t ? null : t,
          i = (function (e, t) {
            var n = atob(e)
            if (t) {
              for (
                var r = new Uint8Array(n.length), i = 0, o = n.length;
                i < o;
                ++i
              )
                r[i] = n.charCodeAt(i)
              return String.fromCharCode.apply(null, new Uint16Array(r.buffer))
            }
            return n
          })(e, void 0 !== n && n),
          o = i.indexOf("\n", 10) + 1,
          a = i.substring(o) + (r ? "//# sourceMappingURL=" + r : ""),
          s = new Blob([a], { type: "application/javascript" })
        return URL.createObjectURL(s)
      }
      var di =
        "[object process]" ===
        Object.prototype.toString.call(
          "undefined" !== typeof process ? process : 0
        )
      var hi,
        pi,
        vi,
        mi,
        gi,
        yi,
        bi =
          ((hi =
            "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo="),
          (pi = null),
          (vi = !1),
          di
            ? li(hi, pi, vi)
            : (function (e, t, n) {
                var r
                return function (i) {
                  return (r = r || fi(e, t, n)), new Worker(r, i)
                }
              })(hi, pi, vi)),
        wi = (function () {
          function e(t) {
            var n = this
            a(this, e),
              (this.pendingCanvasMutations = new Map()),
              (this.rafStamps = { latestId: 0, invokeId: null }),
              (this.frozen = !1),
              (this.locked = !1),
              (this.processMutation = function (e, t) {
                ;(!(
                  n.rafStamps.invokeId &&
                  n.rafStamps.latestId !== n.rafStamps.invokeId
                ) &&
                  n.rafStamps.invokeId) ||
                  (n.rafStamps.invokeId = n.rafStamps.latestId),
                  n.pendingCanvasMutations.has(e) ||
                    n.pendingCanvasMutations.set(e, []),
                  n.pendingCanvasMutations.get(e).push(t)
              })
            var r = t.sampling,
              i = void 0 === r ? "all" : r,
              o = t.win,
              s = t.blockClass,
              u = t.blockSelector,
              c = t.recordCanvas,
              l = t.dataURLOptions
            ;(this.mutationCb = t.mutationCb),
              (this.mirror = t.mirror),
              c && "all" === i && this.initCanvasMutationObserver(o, s, u),
              c &&
                "number" === typeof i &&
                this.initCanvasFPSObserver(i, o, s, u, { dataURLOptions: l })
          }
          return (
            l(e, [
              {
                key: "reset",
                value: function () {
                  this.pendingCanvasMutations.clear(),
                    this.resetObservers && this.resetObservers()
                },
              },
              {
                key: "freeze",
                value: function () {
                  this.frozen = !0
                },
              },
              {
                key: "unfreeze",
                value: function () {
                  this.frozen = !1
                },
              },
              {
                key: "lock",
                value: function () {
                  this.locked = !0
                },
              },
              {
                key: "unlock",
                value: function () {
                  this.locked = !1
                },
              },
              {
                key: "initCanvasFPSObserver",
                value: function (e, t, n, r, i) {
                  var o = this,
                    a = ai(t, n, r),
                    s = new Map(),
                    u = new bi()
                  u.onmessage = function (e) {
                    var t = e.data.id
                    if ((s.set(t, !1), "base64" in e.data)) {
                      var n = e.data,
                        r = n.base64,
                        i = n.type,
                        a = n.width,
                        u = n.height
                      o.mutationCb({
                        id: t,
                        type: Ce["2D"],
                        commands: [
                          { property: "clearRect", args: [0, 0, a, u] },
                          {
                            property: "drawImage",
                            args: [
                              {
                                rr_type: "ImageBitmap",
                                args: [
                                  {
                                    rr_type: "Blob",
                                    data: [
                                      { rr_type: "ArrayBuffer", base64: r },
                                    ],
                                    type: i,
                                  },
                                ],
                              },
                              0,
                              0,
                            ],
                          },
                        ],
                      })
                    }
                  }
                  var c,
                    l = 1e3 / e,
                    f = 0
                  ;(c = requestAnimationFrame(function e(a) {
                    ;(f && a - f < l) ||
                      ((f = a),
                      (function () {
                        var e = []
                        return (
                          t.document
                            .querySelectorAll("canvas")
                            .forEach(function (t) {
                              Dn(t, n, r, !0) || e.push(t)
                            }),
                          e
                        )
                      })().forEach(function (e) {
                        return Ne(
                          o,
                          void 0,
                          void 0,
                          oe().mark(function t() {
                            var n, r, o, a
                            return oe().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        ((r = this.mirror.getId(e)), !s.get(r))
                                      ) {
                                        t.next = 3
                                        break
                                      }
                                      return t.abrupt("return")
                                    case 3:
                                      return (
                                        s.set(r, !0),
                                        ["webgl", "webgl2"].includes(
                                          e.__context
                                        ) &&
                                          ((o = e.getContext(e.__context)),
                                          !1 ===
                                            (null ===
                                              (n =
                                                null === o || void 0 === o
                                                  ? void 0
                                                  : o.getContextAttributes()) ||
                                            void 0 === n
                                              ? void 0
                                              : n.preserveDrawingBuffer) &&
                                            (null === o ||
                                              void 0 === o ||
                                              o.clear(o.COLOR_BUFFER_BIT))),
                                        (t.next = 7),
                                        createImageBitmap(e)
                                      )
                                    case 7:
                                      ;(a = t.sent),
                                        u.postMessage(
                                          {
                                            id: r,
                                            bitmap: a,
                                            width: e.width,
                                            height: e.height,
                                            dataURLOptions: i.dataURLOptions,
                                          },
                                          [a]
                                        )
                                    case 9:
                                    case "end":
                                      return t.stop()
                                  }
                              },
                              t,
                              this
                            )
                          })
                        )
                      })),
                      (c = requestAnimationFrame(e))
                  })),
                    (this.resetObservers = function () {
                      a(), cancelAnimationFrame(c)
                    })
                },
              },
              {
                key: "initCanvasMutationObserver",
                value: function (e, t, n) {
                  this.startRAFTimestamping(),
                    this.startPendingCanvasMutationFlusher()
                  var r = ai(e, t, n),
                    i = (function (e, t, n, r) {
                      var i,
                        o = [],
                        a = ie(
                          Object.getOwnPropertyNames(
                            t.CanvasRenderingContext2D.prototype
                          )
                        )
                      try {
                        var s = function () {
                          var a = i.value
                          try {
                            if (
                              "function" !==
                              typeof t.CanvasRenderingContext2D.prototype[a]
                            )
                              return "continue"
                            var s = Nn(
                              t.CanvasRenderingContext2D.prototype,
                              a,
                              function (i) {
                                return function () {
                                  for (
                                    var o = this,
                                      s = arguments.length,
                                      u = new Array(s),
                                      c = 0;
                                    c < s;
                                    c++
                                  )
                                    u[c] = arguments[c]
                                  return (
                                    Dn(this.canvas, n, r, !0) ||
                                      setTimeout(function () {
                                        var n = ii([].concat(u), t, o)
                                        e(o.canvas, {
                                          type: Ce["2D"],
                                          property: a,
                                          args: n,
                                        })
                                      }, 0),
                                    i.apply(this, u)
                                  )
                                }
                              }
                            )
                            o.push(s)
                          } catch (c) {
                            var u = Tn(
                              t.CanvasRenderingContext2D.prototype,
                              a,
                              {
                                set: function (t) {
                                  e(this.canvas, {
                                    type: Ce["2D"],
                                    property: a,
                                    args: [t],
                                    setter: !0,
                                  })
                                },
                              }
                            )
                            o.push(u)
                          }
                        }
                        for (a.s(); !(i = a.n()).done; ) s()
                      } catch (u) {
                        a.e(u)
                      } finally {
                        a.f()
                      }
                      return function () {
                        o.forEach(function (e) {
                          return e()
                        })
                      }
                    })(this.processMutation.bind(this), e, t, n),
                    o = (function (e, t, n, r, i) {
                      var o = []
                      return (
                        o.push.apply(
                          o,
                          w(
                            si(
                              t.WebGLRenderingContext.prototype,
                              Ce.WebGL,
                              e,
                              n,
                              r,
                              0,
                              t
                            )
                          )
                        ),
                        "undefined" !== typeof t.WebGL2RenderingContext &&
                          o.push.apply(
                            o,
                            w(
                              si(
                                t.WebGL2RenderingContext.prototype,
                                Ce.WebGL2,
                                e,
                                n,
                                r,
                                0,
                                t
                              )
                            )
                          ),
                        function () {
                          o.forEach(function (e) {
                            return e()
                          })
                        }
                      )
                    })(this.processMutation.bind(this), e, t, n, this.mirror)
                  this.resetObservers = function () {
                    r(), i(), o()
                  }
                },
              },
              {
                key: "startPendingCanvasMutationFlusher",
                value: function () {
                  var e = this
                  requestAnimationFrame(function () {
                    return e.flushPendingCanvasMutations()
                  })
                },
              },
              {
                key: "startRAFTimestamping",
                value: function () {
                  var e = this
                  requestAnimationFrame(function t(n) {
                    ;(e.rafStamps.latestId = n), requestAnimationFrame(t)
                  })
                },
              },
              {
                key: "flushPendingCanvasMutations",
                value: function () {
                  var e = this
                  this.pendingCanvasMutations.forEach(function (t, n) {
                    var r = e.mirror.getId(n)
                    e.flushPendingCanvasMutationFor(n, r)
                  }),
                    requestAnimationFrame(function () {
                      return e.flushPendingCanvasMutations()
                    })
                },
              },
              {
                key: "flushPendingCanvasMutationFor",
                value: function (e, t) {
                  if (!this.frozen && !this.locked) {
                    var n = this.pendingCanvasMutations.get(e)
                    if (n && -1 !== t) {
                      var r = n.map(function (e) {
                          var t = (function (e, t) {
                            var n = {}
                            for (var r in e)
                              Object.prototype.hasOwnProperty.call(e, r) &&
                                t.indexOf(r) < 0 &&
                                (n[r] = e[r])
                            if (
                              null != e &&
                              "function" === typeof Object.getOwnPropertySymbols
                            ) {
                              var i = 0
                              for (
                                r = Object.getOwnPropertySymbols(e);
                                i < r.length;
                                i++
                              )
                                t.indexOf(r[i]) < 0 &&
                                  Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r[i]
                                  ) &&
                                  (n[r[i]] = e[r[i]])
                            }
                            return n
                          })(e, ["type"])
                          return t
                        }),
                        i = n[0].type
                      this.mutationCb({ id: t, type: i, commands: r }),
                        this.pendingCanvasMutations.delete(e)
                    }
                  }
                },
              },
            ]),
            e
          )
        })(),
        Si = (function () {
          function e(t) {
            a(this, e),
              (this.trackedLinkElements = new WeakSet()),
              (this.styleMirror = new Hn()),
              (this.mutationCb = t.mutationCb),
              (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb)
          }
          return (
            l(e, [
              {
                key: "attachLinkElement",
                value: function (e, t) {
                  "_cssText" in t.attributes &&
                    this.mutationCb({
                      adds: [],
                      removes: [],
                      texts: [],
                      attributes: [{ id: t.id, attributes: t.attributes }],
                    }),
                    this.trackLinkElement(e)
                },
              },
              {
                key: "trackLinkElement",
                value: function (e) {
                  this.trackedLinkElements.has(e) ||
                    (this.trackedLinkElements.add(e),
                    this.trackStylesheetInLinkElement(e))
                },
              },
              {
                key: "adoptStyleSheets",
                value: function (e, t) {
                  if (0 !== e.length) {
                    var n,
                      r = { id: t, styleIds: [] },
                      i = [],
                      o = ie(e)
                    try {
                      for (o.s(); !(n = o.n()).done; ) {
                        var a = n.value,
                          s = void 0
                        if (this.styleMirror.has(a))
                          s = this.styleMirror.getId(a)
                        else {
                          s = this.styleMirror.add(a)
                          var u = Array.from(a.rules || CSSRule)
                          i.push({
                            styleId: s,
                            rules: u.map(function (e, t) {
                              return { rule: Le(e), index: t }
                            }),
                          })
                        }
                        r.styleIds.push(s)
                      }
                    } catch (c) {
                      o.e(c)
                    } finally {
                      o.f()
                    }
                    i.length > 0 && (r.styles = i), this.adoptedStyleSheetCb(r)
                  }
                },
              },
              {
                key: "reset",
                value: function () {
                  this.styleMirror.reset(),
                    (this.trackedLinkElements = new WeakSet())
                },
              },
              { key: "trackStylesheetInLinkElement", value: function (e) {} },
            ]),
            e
          )
        })()
      function Ci(e) {
        return Object.assign(Object.assign({}, e), { timestamp: Date.now() })
      }
      var Ii = !1,
        ki = Ve()
      function xi() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.emit,
          n = e.checkoutEveryNms,
          r = e.checkoutEveryNth,
          i = e.blockClass,
          o = void 0 === i ? "rr-block" : i,
          a = e.blockSelector,
          s = void 0 === a ? null : a,
          u = e.ignoreClass,
          c = void 0 === u ? "rr-ignore" : u,
          l = e.maskTextClass,
          f = void 0 === l ? "rr-mask" : l,
          d = e.maskTextSelector,
          h = void 0 === d ? null : d,
          p = e.inlineStylesheet,
          v = void 0 === p || p,
          m = e.maskAllInputs,
          g = e.maskInputOptions,
          y = e.slimDOMOptions,
          b = e.maskInputFn,
          w = e.maskTextFn,
          S = e.hooks,
          C = e.packFn,
          I = e.sampling,
          k = void 0 === I ? {} : I,
          x = e.dataURLOptions,
          E = void 0 === x ? {} : x,
          A = e.mousemoveWait,
          M = e.recordCanvas,
          T = void 0 !== M && M,
          N = e.recordCrossOriginIframes,
          _ = void 0 !== N && N,
          R = e.recordAfter,
          O =
            void 0 === R
              ? "DOMContentLoaded" === e.recordAfter
                ? e.recordAfter
                : "load"
              : R,
          D = e.userTriggeredOnInput,
          L = void 0 !== D && D,
          F = e.collectFonts,
          V = void 0 !== F && F,
          B = e.inlineImages,
          j = void 0 !== B && B,
          P = e.plugins,
          W = e.keepIframeSrcFn,
          U =
            void 0 === W
              ? function () {
                  return !1
                }
              : W,
          G = e.ignoreCSSAttributes,
          z = void 0 === G ? new Set([]) : G,
          Z = !_ || window.parent === window,
          q = !1
        if (!Z)
          try {
            window.parent.document, (q = !1)
          } catch (hn) {
            q = !0
          }
        if (Z && !t) throw new Error("emit function is required")
        void 0 !== A && void 0 === k.mousemove && (k.mousemove = A), ki.reset()
        var H,
          Y =
            !0 === m
              ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0,
                  password: !0,
                }
              : void 0 !== g
              ? g
              : { password: !0 },
          Q =
            !0 === y || "all" === y
              ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaVerification: !0,
                  headMetaAuthorship: "all" === y,
                  headMetaDescKeywords: "all" === y,
                }
              : y || {}
        Bn()
        var K = 0,
          J = function (e) {
            var t,
              n = ie(P || [])
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var r = t.value
                r.eventProcessor && (e = r.eventProcessor(e))
              }
            } catch (i) {
              n.e(i)
            } finally {
              n.f()
            }
            return C && !q && (e = C(e)), e
          }
        mi = function (e, i) {
          var o
          if (
            (!(null === (o = Vr[0]) || void 0 === o ? void 0 : o.isFrozen()) ||
              e.type === be.FullSnapshot ||
              (e.type === be.IncrementalSnapshot &&
                e.data.source === we.Mutation) ||
              Vr.forEach(function (e) {
                return e.unfreeze()
              }),
            Z)
          )
            null === t || void 0 === t || t(J(e), i)
          else if (q) {
            var a = {
              type: "rrweb",
              event: J(e),
              origin: window.location.origin,
              isCheckout: i,
            }
            window.parent.postMessage(a, "*")
          }
          if (e.type === be.FullSnapshot) (H = e), (K = 0)
          else if (e.type === be.IncrementalSnapshot) {
            if (e.data.source === we.Mutation && e.data.isAttachIframe) return
            K++
            var s = r && K >= r,
              u = n && e.timestamp - H.timestamp > n
            ;(s || u) && gi(!0)
          }
        }
        var X,
          $ = function (e) {
            mi(
              Ci({
                type: be.IncrementalSnapshot,
                data: Object.assign({ source: we.Mutation }, e),
              })
            )
          },
          ee = function (e) {
            return mi(
              Ci({
                type: be.IncrementalSnapshot,
                data: Object.assign({ source: we.Scroll }, e),
              })
            )
          },
          te = function (e) {
            return mi(
              Ci({
                type: be.IncrementalSnapshot,
                data: Object.assign({ source: we.CanvasMutation }, e),
              })
            )
          },
          ne = new Si({
            mutationCb: $,
            adoptedStyleSheetCb: function (e) {
              return mi(
                Ci({
                  type: be.IncrementalSnapshot,
                  data: Object.assign({ source: we.AdoptedStyleSheet }, e),
                })
              )
            },
          }),
          re = new $r({
            mirror: ki,
            mutationCb: $,
            stylesheetManager: ne,
            recordCrossOriginIframes: _,
            wrappedEmit: mi,
          }),
          oe = ie(P || [])
        try {
          for (oe.s(); !(X = oe.n()).done; ) {
            var ae = X.value
            ae.getMirror &&
              ae.getMirror({
                nodeMirror: ki,
                crossOriginIframeMirror: re.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: re.crossOriginIframeStyleMirror,
              })
          }
        } catch (fe) {
          oe.e(fe)
        } finally {
          oe.f()
        }
        yi = new wi({
          recordCanvas: T,
          mutationCb: te,
          win: window,
          blockClass: o,
          blockSelector: s,
          mirror: ki,
          sampling: k.canvas,
          dataURLOptions: E,
        })
        var se = new ei({
          mutationCb: $,
          scrollCb: ee,
          bypassOptions: {
            blockClass: o,
            blockSelector: s,
            maskTextClass: f,
            maskTextSelector: h,
            inlineStylesheet: v,
            maskInputOptions: Y,
            dataURLOptions: E,
            maskTextFn: w,
            maskInputFn: b,
            recordCanvas: T,
            inlineImages: j,
            sampling: k,
            slimDOMOptions: Q,
            iframeManager: re,
            stylesheetManager: ne,
            canvasManager: yi,
            keepIframeSrcFn: U,
            processedNodeManager: Br,
          },
          mirror: ki,
        })
        gi = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          mi(
            Ci({
              type: be.Meta,
              data: { href: window.location.href, width: On(), height: Rn() },
            }),
            e
          ),
            ne.reset(),
            se.init(),
            Vr.forEach(function (e) {
              return e.lock()
            })
          var t = (function (e, t) {
            var n = t || {},
              r = n.mirror,
              i = void 0 === r ? new Fe() : r,
              o = n.blockClass,
              a = void 0 === o ? "rr-block" : o,
              s = n.blockSelector,
              u = void 0 === s ? null : s,
              c = n.maskTextClass,
              l = void 0 === c ? "rr-mask" : c,
              f = n.maskTextSelector,
              d = void 0 === f ? null : f,
              h = n.inlineStylesheet,
              p = void 0 === h || h,
              v = n.inlineImages,
              m = void 0 !== v && v,
              g = n.recordCanvas,
              y = void 0 !== g && g,
              b = n.maskAllInputs,
              w = void 0 !== b && b,
              S = n.maskTextFn,
              C = n.maskInputFn,
              I = n.slimDOM,
              k = void 0 !== I && I,
              x = n.dataURLOptions,
              E = n.preserveWhiteSpace,
              A = n.onSerialize,
              M = n.onIframeLoad,
              T = n.iframeLoadTimeout,
              N = n.onStylesheetLoad,
              _ = n.stylesheetLoadTimeout,
              R = n.keepIframeSrcFn
            return at(e, {
              doc: e,
              mirror: i,
              blockClass: a,
              blockSelector: u,
              maskTextClass: l,
              maskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: p,
              maskInputOptions:
                !0 === w
                  ? {
                      color: !0,
                      date: !0,
                      "datetime-local": !0,
                      email: !0,
                      month: !0,
                      number: !0,
                      range: !0,
                      search: !0,
                      tel: !0,
                      text: !0,
                      time: !0,
                      url: !0,
                      week: !0,
                      textarea: !0,
                      select: !0,
                      password: !0,
                    }
                  : !1 === w
                  ? { password: !0 }
                  : w,
              maskTextFn: S,
              maskInputFn: C,
              slimDOMOptions:
                !0 === k || "all" === k
                  ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaDescKeywords: "all" === k,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaAuthorship: !0,
                      headMetaVerification: !0,
                    }
                  : !1 === k
                  ? {}
                  : k,
              dataURLOptions: x,
              inlineImages: m,
              recordCanvas: y,
              preserveWhiteSpace: E,
              onSerialize: A,
              onIframeLoad: M,
              iframeLoadTimeout: T,
              onStylesheetLoad: N,
              stylesheetLoadTimeout: _,
              keepIframeSrcFn:
                void 0 === R
                  ? function () {
                      return !1
                    }
                  : R,
              newlyAddedElement: !1,
            })
          })(document, {
            mirror: ki,
            blockClass: o,
            blockSelector: s,
            maskTextClass: f,
            maskTextSelector: h,
            inlineStylesheet: v,
            maskAllInputs: Y,
            maskTextFn: w,
            slimDOM: Q,
            dataURLOptions: E,
            recordCanvas: T,
            inlineImages: j,
            onSerialize: function (e) {
              Wn(e, ki) && re.addIframe(e),
                Un(e, ki) && ne.trackLinkElement(e),
                zn(e) && se.addShadowRoot(e.shadowRoot, document)
            },
            onIframeLoad: function (e, t) {
              re.attachIframe(e, t), se.observeAttachShadow(e)
            },
            onStylesheetLoad: function (e, t) {
              ne.attachLinkElement(e, t)
            },
            keepIframeSrcFn: U,
          })
          if (!t) return console.warn("Failed to snapshot the document")
          mi(
            Ci({
              type: be.FullSnapshot,
              data: { node: t, initialOffset: _n(window) },
            })
          ),
            Vr.forEach(function (e) {
              return e.unlock()
            }),
            document.adoptedStyleSheets &&
              document.adoptedStyleSheets.length > 0 &&
              ne.adoptStyleSheets(
                document.adoptedStyleSheets,
                ki.getId(document)
              )
        }
        try {
          var ue = [],
            ce = function (e) {
              var t
              return Qr(
                {
                  mutationCb: $,
                  mousemoveCb: function (e, t) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: { source: t, positions: e },
                      })
                    )
                  },
                  mouseInteractionCb: function (e) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.MouseInteraction }, e),
                      })
                    )
                  },
                  scrollCb: ee,
                  viewportResizeCb: function (e) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.ViewportResize }, e),
                      })
                    )
                  },
                  inputCb: function (e) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.Input }, e),
                      })
                    )
                  },
                  mediaInteractionCb: function (e) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.MediaInteraction }, e),
                      })
                    )
                  },
                  styleSheetRuleCb: function (e) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.StyleSheetRule }, e),
                      })
                    )
                  },
                  styleDeclarationCb: function (e) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.StyleDeclaration }, e),
                      })
                    )
                  },
                  canvasMutationCb: te,
                  fontCb: function (e) {
                    return mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.Font }, e),
                      })
                    )
                  },
                  selectionCb: function (e) {
                    mi(
                      Ci({
                        type: be.IncrementalSnapshot,
                        data: Object.assign({ source: we.Selection }, e),
                      })
                    )
                  },
                  blockClass: o,
                  ignoreClass: c,
                  maskTextClass: f,
                  maskTextSelector: h,
                  maskInputOptions: Y,
                  inlineStylesheet: v,
                  sampling: k,
                  recordCanvas: T,
                  inlineImages: j,
                  userTriggeredOnInput: L,
                  collectFonts: V,
                  doc: e,
                  maskInputFn: b,
                  maskTextFn: w,
                  keepIframeSrcFn: U,
                  blockSelector: s,
                  slimDOMOptions: Q,
                  dataURLOptions: E,
                  mirror: ki,
                  iframeManager: re,
                  stylesheetManager: ne,
                  shadowDomManager: se,
                  processedNodeManager: Br,
                  canvasManager: yi,
                  ignoreCSSAttributes: z,
                  plugins:
                    (null ===
                      (t =
                        null === P || void 0 === P
                          ? void 0
                          : P.filter(function (e) {
                              return e.observer
                            })) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          return {
                            observer: e.observer,
                            options: e.options,
                            callback: function (t) {
                              return mi(
                                Ci({
                                  type: be.Plugin,
                                  data: { plugin: e.name, payload: t },
                                })
                              )
                            },
                          }
                        })) || [],
                },
                S
              )
            }
          re.addLoadListener(function (e) {
            try {
              ue.push(ce(e.contentDocument))
            } catch (t) {
              console.warn(t)
            }
          })
          var le = function () {
            gi(), ue.push(ce(document)), (Ii = !0)
          }
          return (
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? le()
              : (ue.push(
                  xn("DOMContentLoaded", function () {
                    mi(Ci({ type: be.DomContentLoaded, data: {} })),
                      "DOMContentLoaded" === O && le()
                  })
                ),
                ue.push(
                  xn(
                    "load",
                    function () {
                      mi(Ci({ type: be.Load, data: {} })), "load" === O && le()
                    },
                    window
                  )
                )),
            function () {
              ue.forEach(function (e) {
                return e()
              }),
                (Ii = !1)
            }
          )
        } catch (de) {
          console.warn(de)
        }
      }
      ;(xi.addCustomEvent = function (e, t) {
        if (!Ii)
          throw new Error("please add custom event after start recording")
        mi(Ci({ type: be.Custom, data: { tag: e, payload: t } }))
      }),
        (xi.freezePage = function () {
          Vr.forEach(function (e) {
            return e.freeze()
          })
        }),
        (xi.takeFullSnapshot = function (e) {
          if (!Ii)
            throw new Error("please take full snapshot after start recording")
          gi(e)
        }),
        (xi.mirror = ki)
      var Ei = l(function e(t) {
          var n = this
          a(this, e),
            (this.logNativeMutationObserver = !1),
            (this.stopRRWebRecording = function () {}),
            (this.eventHandler = void 0),
            (this.currentURL = void 0),
            (this.start = function () {
              ;(n.stopRRWebRecording = xi({
                emit: n.eventHandler,
                sampling: { mousemove: !1 },
                userTriggeredOnInput: !0,
              })),
                n.logNativeMutationObserver && n.selfObserve(),
                n.startURLObserver()
            }),
            (this.stop = function () {
              n.stopRRWebRecording()
            }),
            (this.startURLObserver = function () {
              window.addEventListener("popstate", function (e) {
                n.onURLChange()
              }),
                window.addEventListener("locationchange", function (e) {
                  n.onURLChange()
                }),
                window.addEventListener("hashchange", function (e) {
                  n.onURLChange()
                })
              var e = n,
                t = window.history.pushState
              window.history.pushState = function () {
                return e.onURLChange(), t.apply(window.history, arguments)
              }
              var r = window.history.replaceState
              window.history.replaceState = function () {
                return e.onURLChange(), r.apply(window.history, arguments)
              }
            }),
            (this.onURLChange = function () {
              setTimeout(function () {
                var e = window.location.href
                e !== n.currentURL &&
                  ((n.currentURL = e),
                  xi.addCustomEvent("url-change", { url: e }))
              })
            }),
            (this.selfObserve = function () {
              var e = document.getElementsByTagName("body")
              new MutationObserver(function (e, t) {
                var n,
                  r = ie(e)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var i = n.value
                    "childList" === i.type
                      ? console.log(
                          "A child node has been added or removed.",
                          i
                        )
                      : "attributes" === i.type &&
                        console.log(
                          "The ".concat(
                            i.attributeName,
                            " attribute was modified."
                          ),
                          i
                        )
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              }).observe(e[0], { attributes: !0, childList: !0, subtree: !0 })
            }),
            (this.getNodeById = function (e) {
              return xi.mirror.getNode(e)
            }),
            (this.getMeta = function (e) {
              return xi.mirror.getMeta(e)
            }),
            (this.eventHandler = t),
            (this.currentURL = window.location.href)
        }),
        Ai = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n() {
            var e,
              r,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
            a(this, n)
            var o =
              null !== (e = i.elementSelector) && void 0 !== e ? e : new ge()
            return (
              ((r = t.call(this, o)).testIdCounter = 0),
              (r.currentESRASelector = void 0),
              (r.lastHighlight = void 0),
              (r.assertionGenerator = void 0),
              (r.options = { highlightElement: !0, elementSelector: void 0 }),
              (r.options = H(
                H(H({}, r.options), i),
                {},
                { elementSelector: o }
              )),
              r
            )
          }
          return (
            l(n, [
              {
                key: "init",
                value: function () {
                  var e = this
                  this.sessionReplayer.start({
                    firstEventTimestamp: Date.now(),
                  })
                  var t = new Ei(function (t) {
                    return e.eventProcessor.processEvent(t)
                  })
                  ;(this.assertionGenerator = new Er({
                    sessionMirror: t,
                    elementSelectorGenerator: this.elementSelector,
                  })),
                    t.start(),
                    this.setEventHandlers(this.assertionGenerator)
                },
              },
              {
                key: "getBestMatchingElementSimilarityScore",
                value: function (e) {
                  return (
                    (this.currentESRASelector = new re(e)),
                    this.currentESRASelector.selectOne().score
                  )
                },
              },
              {
                key: "extractESRAMetadata",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      return oe().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new ee(document).extract(t).toMetadata()
                              )
                            case 1:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "getMatchingElementSelectionData",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        c = arguments
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r = (n =
                                    c.length > 1 && void 0 !== c[1]
                                      ? c[1]
                                      : { minSelectionScore: 0.3 })
                                    .minSelectionScore),
                                  (i = n.cachedSelector),
                                  (o = n.staticMetadata),
                                  (e.prev = 1),
                                  !i)
                                ) {
                                  e.next = 7
                                  break
                                }
                                return (
                                  console.log(
                                    "Trying to locate using cached selector",
                                    i
                                  ),
                                  (e.next = 6),
                                  this.elementSelector.selector(i)
                                )
                              case 6:
                                a = e.sent
                              case 7:
                                if (
                                  (a ||
                                    (console.log(
                                      "Trying to locate using ESRA",
                                      t
                                    ),
                                    R(o) && console.log("and static data", o),
                                    (this.currentESRASelector = new re(t, o)),
                                    (u = this.currentESRASelector.selectOne())
                                      .score >= r
                                      ? ((a = u.element), (s = u.score))
                                      : console.log(
                                          "Best matching element was below threshold",
                                          u
                                        )),
                                  console.log(
                                    a
                                      ? ["Located with score ".concat(s), a]
                                      : "Element not located"
                                  ),
                                  a)
                                ) {
                                  e.next = 11
                                  break
                                }
                                return e.abrupt("return")
                              case 11:
                                return (
                                  this.highlightElement(a),
                                  e.abrupt(
                                    "return",
                                    this.makeMatchingElementSelectionData(a)
                                  )
                                )
                              case 15:
                                return (
                                  (e.prev = 15),
                                  (e.t0 = e.catch(1)),
                                  console.log(
                                    "getMatchingElementSelectionData exception",
                                    e.t0
                                  ),
                                  e.abrupt("return")
                                )
                              case 20:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[1, 15]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "getAllInteractableElementsForLastSelectQuery",
                value: function () {
                  var e = this,
                    t = this.currentESRASelector.getFinalCandidates()
                  return Promise.all(
                    t.map(
                      (function () {
                        var t = se(
                          oe().mark(function t(n) {
                            return oe().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.t0 = n.esraMetadata),
                                      (t.next = 3),
                                      e.makeMatchingElementSelectionData(
                                        n.candidate
                                      )
                                    )
                                  case 3:
                                    return (
                                      (t.t1 = t.sent),
                                      t.abrupt("return", {
                                        esraMetadata: t.t0,
                                        selectionData: t.t1,
                                      })
                                    )
                                  case 5:
                                  case "end":
                                    return t.stop()
                                }
                            }, t)
                          })
                        )
                        return function (e) {
                          return t.apply(this, arguments)
                        }
                      })()
                    )
                  )
                },
              },
              {
                key: "getInteractableElements",
                value: (function () {
                  var e = se(
                    oe().mark(function e() {
                      var t,
                        n,
                        r = this
                      return oe().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = C()),
                                (n = new ee(document)),
                                e.abrupt(
                                  "return",
                                  Promise.all(
                                    t.map(
                                      (function () {
                                        var e = se(
                                          oe().mark(function e(t) {
                                            var i, o
                                            return oe().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (i = n
                                                        .extract(t)
                                                        .toMetadata()),
                                                      (e.next = 3),
                                                      r.makeMatchingElementSelectionData(
                                                        t
                                                      )
                                                    )
                                                  case 3:
                                                    return (
                                                      (o = e.sent),
                                                      e.abrupt("return", {
                                                        esraMetadata: i,
                                                        selectionData: o,
                                                      })
                                                    )
                                                  case 5:
                                                  case "end":
                                                    return e.stop()
                                                }
                                            }, e)
                                          })
                                        )
                                        return function (t) {
                                          return e.apply(this, arguments)
                                        }
                                      })()
                                    )
                                  )
                                )
                              )
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "getCurrentESRASelector",
                value: function () {
                  return this.currentESRASelector
                },
              },
              {
                key: "startMonitoringForAssertions",
                value: function () {
                  return this.assertionGenerator.startMonitoring()
                },
              },
              {
                key: "generateAssertions",
                value: function () {
                  return this.assertionGenerator.generateAssertions()
                },
              },
              {
                key: "stopMonitoringAndGenerateAssertions",
                value: function () {
                  return this.assertionGenerator.stopMonitoringAndGenerateAssertions()
                },
              },
              {
                key: "highlightElement",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "2px dashed rgba(255,0,0,.75)"
                  if (
                    this.options.highlightElement &&
                    (this.lastHighlight &&
                      (this.lastHighlight.remove(),
                      (this.lastHighlight = void 0)),
                    e)
                  ) {
                    var n = e.getBoundingClientRect(),
                      r = document.createElement("div")
                    ;(r.style.outline = t),
                      (r.style.position = "absolute"),
                      (r.style.left = n.left + "px"),
                      (r.style.top = n.top + "px"),
                      (r.style.width = n.right - n.left + "px"),
                      (r.style.height = n.bottom - n.top + "px"),
                      (r.style.pointerEvents = "none"),
                      (r.style.zIndex = "2147483647"),
                      document.body.appendChild(r),
                      (this.lastHighlight = r)
                  }
                },
              },
              {
                key: "makeMatchingElementSelectionData",
                value: (function () {
                  var e = se(
                    oe().mark(function e(t) {
                      var n, r, i, o, a, s, u, c, l
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n = this.setAndGetTestId(t)),
                                  (r = this.getVisibleParent(t)),
                                  (i = this.setAndGetTestId(r)),
                                  (o = this.getElementAtCenterOfElement(t)),
                                  (a = this.setAndGetTestId(o)),
                                  (s = {
                                    element: n,
                                    visibleElement: i === n ? void 0 : i,
                                    atPointElement:
                                      a === n || a === i ? void 0 : a,
                                  }),
                                  (e.next = 9),
                                  this.elementSelector.getSelector(t)
                                )
                              case 9:
                                if (((e.t0 = e.sent), !s.visibleElement)) {
                                  e.next = 16
                                  break
                                }
                                return (
                                  (e.next = 13),
                                  this.elementSelector.getSelector(r)
                                )
                              case 13:
                                ;(e.t1 = e.sent), (e.next = 17)
                                break
                              case 16:
                                e.t1 = void 0
                              case 17:
                                if (((e.t2 = e.t1), !s.atPointElement)) {
                                  e.next = 24
                                  break
                                }
                                return (
                                  (e.next = 21),
                                  this.elementSelector.getSelector(o)
                                )
                              case 21:
                                ;(e.t3 = e.sent), (e.next = 25)
                                break
                              case 24:
                                e.t3 = void 0
                              case 25:
                                return (
                                  (e.t4 = e.t3),
                                  (u = {
                                    element: e.t0,
                                    visibleElement: e.t2,
                                    atPointElement: e.t4,
                                  }),
                                  (c = function (e) {
                                    return { tag: e.tagName.toLowerCase() }
                                  }),
                                  (l = {
                                    element: c(t),
                                    visibleElement: s.visibleElement
                                      ? c(r)
                                      : void 0,
                                    atPointElement: s.atPointElement
                                      ? c(o)
                                      : void 0,
                                  }),
                                  e.abrupt("return", {
                                    testIds: s,
                                    selectors: u,
                                    elementData: l,
                                  })
                                )
                              case 32:
                                return (
                                  (e.prev = 32),
                                  (e.t5 = e.catch(0)),
                                  console.log(
                                    "[makeMatchingElementSelectionData] exception",
                                    e.t5
                                  ),
                                  e.abrupt("return", {
                                    testIds: { element: void 0 },
                                    selectors: { element: void 0 },
                                    elementData: { element: void 0 },
                                  })
                                )
                              case 36:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[0, 32]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "getElementAtCenterOfElement",
                value: function (e) {
                  var t = e.getBoundingClientRect(),
                    n = t.x,
                    r = t.y,
                    i = e.ownerDocument.elementFromPoint(n, r)
                  return i instanceof HTMLElement ? i : void 0
                },
              },
              {
                key: "setAndGetTestId",
                value: function (e) {
                  if (e) {
                    var t = e.getAttribute("data-checksum-testid")
                    if (t) return t
                    var n = (this.testIdCounter++).toString()
                    return e.setAttribute("data-checksum-testid", n), n
                  }
                },
              },
              {
                key: "getVisibleParent",
                value: function (e) {
                  return e instanceof HTMLElement
                    ? null !== e.offsetParent
                      ? e
                      : this.getVisibleParent(N(e))
                    : e
                },
              },
            ]),
            n
          )
        })(Ir),
        Mi = (function (e) {
          fe(n, e)
          var t = pe(n)
          function n() {
            return a(this, n), t.apply(this, arguments)
          }
          return l(n)
        })(ke),
        Ti = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = n.addToWindow,
              i = void 0 !== r && r,
              o = n.appName,
              s = void 0 === o ? void 0 : o,
              u = n.apiPrefix,
              c = void 0 === u ? "" : u
            a(this, e),
              (this.appName = void 0),
              (this.apiPrefix = void 0),
              (this.eventProcessor = void 0),
              (this.sessionRecorder = void 0),
              (this.elementSelector = void 0),
              (this.handleEvent = function (e) {
                return t.eventProcessor.processEvent(e)
              }),
              (this.sessionRecorder = new Ei(this.handleEvent)),
              (this.eventProcessor = new Te({ eventHandlers: new Mi() })),
              (this.appName = s),
              (this.apiPrefix = c),
              i && (window.checksum?Recorder = this)
          }
          return (
            l(e, [
              {
                key: "start",
                value: function () {
                  this.sessionRecorder.start()
                },
              },
              {
                key: "stop",
                value: function () {
                  this.sessionRecorder.stop()
                },
              },
              {
                key: "getEvents",
                value: function () {
                  return this.eventProcessor.getEvents()
                },
              },
              {
                key: "getEventsJSON",
                value: function () {
                  return JSON.stringify(this.getEvents())
                },
              },
              {
                key: "saveFile",
                value: (function () {
                  var e = se(
                    oe().mark(function e() {
                      var t,
                        n = arguments
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    !(n.length > 0 && void 0 !== n[0]) || n[0]),
                                  this.appName)
                                ) {
                                  e.next = 4
                                  break
                                }
                                return (
                                  console.error("saveFile without app name"),
                                  e.abrupt("return")
                                )
                              case 4:
                                return (
                                  (e.next = 6),
                                  fetch(
                                    ""
                                      .concat(
                                        this.apiPrefix,
                                        "/digestion/addSession/"
                                      )
                                      .concat(this.appName, "?digest=")
                                      .concat(t ? "true" : "false"),
                                    {
                                      method: "POST",
                                      headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json",
                                      },
                                      body: this.getEventsJSON(),
                                    }
                                  )
                                )
                              case 6:
                                return e.abrupt("return", e.sent)
                              case 7:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "stopAndSave",
                value: (function () {
                  var e = se(
                    oe().mark(function e() {
                      var t,
                        n = arguments
                      return oe().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    !(n.length > 0 && void 0 !== n[0]) || n[0]),
                                  this.stop(),
                                  e.abrupt("return", this.saveFile(t))
                                )
                              case 3:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
            ]),
            e
          )
        })(),
        Ni = (function () {
          function e() {
            a(this, e), (this.goals = void 0), (this.goals = {})
          }
          return (
            l(e, [
              {
                key: "init",
                value: (function () {
                  var e = se(
                    oe().mark(function e() {
                      return oe().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: "recordGoalFinished",
                value: function (e) {
                  var t
                  this.goals[e],
                    (this.goals[e] = !0),
                    null === (t = window.checksum?ai) ||
                      void 0 === t ||
                      t.capture("goal_reached", { goalName: e })
                },
              },
              {
                key: "getGoals",
                value: function () {
                  return this.goals
                },
              },
            ]),
            e
          )
        })()
      window.checksum? ||
        (window.checksum? = {
          testGenerator: new Ai(),
          testRunner: new Ai({ highlightElement: !1 }),
          sessionDigester: new kr(),
          recorder: new Ti({
            addToWindow: !0,
            appName: "internal_agent_test_page",
            apiPrefix: "http://localhost:3000",
          }),
          goalTracker: new Ni(),
        })
      var _i = !!o().app,
        Ri = o().type || _i ? t.App : void 0
      switch (
        ("true" === o().injectESRA &&
          ((window.esraExtractor = new ee(document)),
          (window.esraSelector = function (e) {
            return new re(e)
          }),
          (window.esraMetadata = p)),
        Ri || "script")
      ) {
        case t.App:
        case t.Script:
      }
    })()
})()
//# sourceMappingURL=main.2fc077a1.js.map
